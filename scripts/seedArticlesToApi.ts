/**
 * Maqolalarni API ga sinxronlashtiradi: eski maqolalarni o'chiradi, yangilarini yaratadi/yangilaydi.
 * Usage: npm run seed:articles
 */
import 'dotenv/config';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import {
  adminLogin,
  createArticle,
  deleteArticle,
  getAdminArticles,
  updateArticle,
} from '../src/api/adminApi';
import { mapArticleToCreatePayload } from '../src/api/mappers';
import { mapLocalizedImagesFromApi } from '../src/utils/localizedImage';
import { ARTICLES } from '../src/data';
import { enrichArticle } from '../src/utils/enrichArticles';
import {
  resolveArticleBody,
  resolveArticleSummary,
  buildArticleRichContentMap,
} from '../src/utils/articleContent';

const REQUEST_DELAY_MS = Number(process.env.SYNC_DELAY_MS || 800);
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function withRetry<T>(label: string, fn: () => Promise<T>): Promise<T> {
  let attempt = 0;
  while (true) {
    try {
      return await fn();
    } catch (error) {
      attempt++;
      const msg = error instanceof Error ? error.message : String(error);
      if (!/too many requests|429/i.test(msg) || attempt > 6) throw error;
      const wait = REQUEST_DELAY_MS * 2 ** attempt;
      console.warn(`Rate limited "${label}", retry ${attempt}/6 in ${wait}ms`);
      await sleep(wait);
    }
  }
}

function loadPublicImage(relativePath: string): File | null {
  const normalized = relativePath.replace(/^\//, '');
  const filePath = path.join(process.cwd(), 'public', normalized);
  if (!existsSync(filePath)) {
    console.warn(`  image not found: ${filePath}`);
    return null;
  }
  const buffer = readFileSync(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const mime =
    ext === '.webp' ? 'image/webp' : ext === '.png' ? 'image/png' : 'image/jpeg';
  return new File([buffer], path.basename(filePath), { type: mime });
}

function normalizeKey(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

function buildSeedArticle(staticArticle: (typeof ARTICLES)[number]) {
  const withResolvedText = {
    ...staticArticle,
    summary: {
      uz: resolveArticleSummary(staticArticle, 'uz'),
      ru: resolveArticleSummary(staticArticle, 'ru'),
      en: resolveArticleSummary(staticArticle, 'en'),
    },
    content: {
      uz: resolveArticleBody(staticArticle, 'uz'),
      ru: resolveArticleBody(staticArticle, 'ru'),
      en: resolveArticleBody(staticArticle, 'en'),
    },
    richContent: buildArticleRichContentMap(staticArticle),
  };
  return enrichArticle(withResolvedText);
}

function findMatch(
  staticArticle: (typeof ARTICLES)[number],
  existing: Awaited<ReturnType<typeof getAdminArticles>>,
) {
  const bySlug = new Map(existing.map((item) => [normalizeKey(item.slug), item]));
  const byTitle = new Map(existing.map((item) => [normalizeKey(item.title_uz), item]));
  return (
    bySlug.get(normalizeKey(staticArticle.slug)) ??
    byTitle.get(normalizeKey(staticArticle.title.uz)) ??
    null
  );
}

async function main() {
  const username = process.env.ADMIN_USERNAME?.trim() || 'admin';
  const password = process.env.ADMIN_PASSWORD?.trim() || 'radeski2026';

  console.log('Logging in...');
  const token = (await withRetry('login', () => adminLogin({ username, password }))).access_token;

  let existing = await withRetry('get articles', () => getAdminArticles(token));
  const keepIds = new Set<string>();

  for (const staticArticle of ARTICLES) {
    const match = findMatch(staticArticle, existing);
    if (match) keepIds.add(match.id);
  }

  let deleted = 0;
  for (const item of existing) {
    if (keepIds.has(item.id)) continue;
    await withRetry(`delete ${item.title_uz}`, () => deleteArticle(item.id, token));
    deleted++;
    console.log(`  deleted: ${item.title_uz}`);
    await sleep(REQUEST_DELAY_MS);
  }

  existing = await withRetry('refresh articles', () => getAdminArticles(token));

  let created = 0;
  let updated = 0;

  for (const staticArticle of ARTICLES) {
    const article = buildSeedArticle(staticArticle);
    const match = findMatch(staticArticle, existing);

    if (match) {
      // Mavjud maqolada admin yuklagan rasmni saqlash — statik /karusel rasmini qayta yozmaymiz
      const apiImages = mapLocalizedImagesFromApi(match);
      const articleWithApiImages = {
        ...article,
        images: apiImages,
        image: apiImages.uz ?? apiImages.ru ?? apiImages.en ?? article.image ?? null,
      };
      const payload = mapArticleToCreatePayload(articleWithApiImages, { preserveImage: true });
      await withRetry(staticArticle.title.uz, () =>
        updateArticle(match.id, payload, null, token),
      );
      updated++;
      console.log(`  updated (text only, image kept): ${staticArticle.title.uz}`);
    } else {
      const payload = mapArticleToCreatePayload(article);
      const imagePath = staticArticle.image || staticArticle.images?.uz;
      const coverFile = imagePath ? loadPublicImage(imagePath) : null;
      await withRetry(staticArticle.title.uz, () =>
        createArticle(payload, coverFile, token),
      );
      created++;
      console.log(`  created: ${staticArticle.title.uz}`);
    }

    await sleep(REQUEST_DELAY_MS);
  }

  console.log(`Done — deleted: ${deleted}, created: ${created}, updated: ${updated}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
