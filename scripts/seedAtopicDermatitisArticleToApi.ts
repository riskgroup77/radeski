/**
 * Atopik dermatit maqolasi cover rasmini API ga yuklaydi.
 * Usage: npx tsx scripts/seedAtopicDermatitisArticleToApi.ts
 */
import 'dotenv/config';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { adminLogin, getAdminArticles, updateArticle } from '../src/api/adminApi';
import { mapArticleToCreatePayload } from '../src/api/mappers';
import { ATOPIC_DERMATITIS_ARTICLE } from '../src/data/articles/atopicDermatitisArticle';
import { enrichArticle } from '../src/utils/enrichArticles';
import {
  buildArticleRichContentMap,
  resolveArticleBody,
  resolveArticleSummary,
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

function buildSeedArticle() {
  const staticArticle = ATOPIC_DERMATITIS_ARTICLE;
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

async function main() {
  const username = process.env.ADMIN_USERNAME?.trim() || 'admin';
  const password = process.env.ADMIN_PASSWORD?.trim() || 'radeski2026';

  console.log('Logging in...');
  const token = (await withRetry('login', () => adminLogin({ username, password }))).access_token;

  const existing = await withRetry('get articles', () => getAdminArticles(token));
  const bySlug = new Map(existing.map((item) => [normalizeKey(item.slug), item]));
  const byTitle = new Map(existing.map((item) => [normalizeKey(item.title_uz), item]));

  const match =
    bySlug.get(normalizeKey(ATOPIC_DERMATITIS_ARTICLE.slug)) ??
    byTitle.get(normalizeKey(ATOPIC_DERMATITIS_ARTICLE.title.uz)) ??
    null;

  if (!match) {
    console.error('Article not found in API. Create it in admin first or run full seed.');
    process.exit(1);
  }

  const article = buildSeedArticle();
  const payload = mapArticleToCreatePayload(article);
  const coverFile = loadPublicImage('/articles/atopic-dermatitis-cover.png');

  if (!coverFile) {
    console.error('Cover image missing at public/articles/atopic-dermatitis-cover.png');
    process.exit(1);
  }

  await withRetry('update', () => updateArticle(match.id, payload, coverFile, token));
  console.log('Updated cover + rich content:', ATOPIC_DERMATITIS_ARTICLE.title.uz);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
