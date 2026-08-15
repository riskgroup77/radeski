/**
 * Kontagioz mollyusk maqolasini API ga sync qiladi.
 * Usage: npx tsx scripts/seedMolluscumArticleToApi.ts
 */
import 'dotenv/config';
import { adminLogin, createArticle, getAdminArticles, updateArticle } from '../src/api/adminApi';
import { mapArticleToCreatePayload } from '../src/api/mappers';
import { MOLLUSCUM_CONTAGIOSUM_ARTICLE } from '../src/data/articles/molluscumContagiosumArticle';
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

function normalizeKey(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

function buildSeedArticle() {
  const staticArticle = MOLLUSCUM_CONTAGIOSUM_ARTICLE;
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

  const article = buildSeedArticle();
  const match =
    bySlug.get(normalizeKey(MOLLUSCUM_CONTAGIOSUM_ARTICLE.slug)) ??
    byTitle.get(normalizeKey(MOLLUSCUM_CONTAGIOSUM_ARTICLE.title.uz)) ??
    null;

  const payload = mapArticleToCreatePayload(article);

  if (match) {
    await withRetry('update', () => updateArticle(match.id, payload, null, token));
    console.log('Updated:', MOLLUSCUM_CONTAGIOSUM_ARTICLE.title.uz);
  } else {
    await withRetry('create', () => createArticle(payload, null, token));
    console.log('Created:', MOLLUSCUM_CONTAGIOSUM_ARTICLE.title.uz);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
