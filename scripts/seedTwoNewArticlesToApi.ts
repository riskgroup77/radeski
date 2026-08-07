/**
 * Tanlangan yangi maqolalarni API ga qo'shadi (boshqalarini o'chirmaydi).
 * Usage: npx tsx scripts/seedTwoNewArticlesToApi.ts
 */
import 'dotenv/config';
import {
  adminLogin,
  createArticle,
  getAdminArticles,
  updateArticle,
} from '../src/api/adminApi';
import { mapArticleToCreatePayload } from '../src/api/mappers';
import { DEKA_CO2_ARTICLE } from '../src/data/articles/dekaCo2LaserArticle';
import { DEKA_MOVEO_ARTICLE } from '../src/data/articles/dekaMoveoEpilationArticle';
import { HAIR_TRANSPLANT_CONTRAINDICATIONS_ARTICLE } from '../src/data/articles/hairTransplantContraindicationsArticle';
import { VITILIGO_DAAVLIN_ARTICLE } from '../src/data/articles/vitiligoDaavlinArticle';
import { PSORIASIS_DAAVLIN_KOKAND_ARTICLE } from '../src/data/articles/psoriasisDaavlinKokandArticle';
import { IPL_THERAPY_ARTICLE } from '../src/data/articles/iplTherapyArticle';
import { PEDIATRIC_WARTS_CO2_DEKA_ARTICLE } from '../src/data/articles/pediatricWartsCo2DekaArticle';
import { ADULT_ACNE_ARTICLE } from '../src/data/articles/adultAcneArticle';
import { ACNE_ARTICLE } from '../src/data/articles/acneArticle';
import { POST_ACNE_ARTICLE } from '../src/data/articles/postAcneArticle';
import { ROSACEA_ARTICLE } from '../src/data/articles/rosaceaArticle';
import { PRP_HAIR_ARTICLE } from '../src/data/articles/prpHairArticle';
import { PRP_LAB_TESTS_ARTICLE } from '../src/data/articles/prpLabTestsArticle';
import { TRICHOLOGIST_TRICHOSCOPY_ARTICLE } from '../src/data/articles/trichologistTrichoscopyArticle';
import { TONGUE_SCC_ARTICLE } from '../src/data/articles/tongueSccArticle';
import { PLASMAPHERESIS_ARTICLE } from '../src/data/articles/plasmapheresisArticle';
import { enrichArticle } from '../src/utils/enrichArticles';
import {
  buildArticleRichContentMap,
  resolveArticleBody,
  resolveArticleSummary,
} from '../src/utils/articleContent';

const REQUEST_DELAY_MS = Number(process.env.SYNC_DELAY_MS || 800);
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const TARGETS = [
  ACNE_ARTICLE,
  POST_ACNE_ARTICLE,
  ROSACEA_ARTICLE,
  PRP_HAIR_ARTICLE,
  PRP_LAB_TESTS_ARTICLE,
  TRICHOLOGIST_TRICHOSCOPY_ARTICLE,
  PLASMAPHERESIS_ARTICLE,
  DEKA_CO2_ARTICLE,
  DEKA_MOVEO_ARTICLE,
  HAIR_TRANSPLANT_CONTRAINDICATIONS_ARTICLE,
  VITILIGO_DAAVLIN_ARTICLE,
  PSORIASIS_DAAVLIN_KOKAND_ARTICLE,
  IPL_THERAPY_ARTICLE,
  PEDIATRIC_WARTS_CO2_DEKA_ARTICLE,
  ADULT_ACNE_ARTICLE,
];

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

function buildSeedArticle(staticArticle: (typeof TARGETS)[number]) {
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

  let created = 0;
  let updated = 0;

  for (const staticArticle of TARGETS) {
    const article = buildSeedArticle(staticArticle);
    const match =
      bySlug.get(normalizeKey(staticArticle.slug)) ??
      byTitle.get(normalizeKey(staticArticle.title.uz)) ??
      null;

    const payload = mapArticleToCreatePayload(article);

    if (match) {
      await withRetry(staticArticle.title.uz, () =>
        updateArticle(match.id, payload, null, token),
      );
      updated++;
      console.log(`  updated (no image overwrite): ${staticArticle.title.uz}`);
    } else {
      await withRetry(staticArticle.title.uz, () => createArticle(payload, null, token));
      created++;
      console.log(`  created (image empty — admin sets later): ${staticArticle.title.uz}`);
    }

    await sleep(REQUEST_DELAY_MS);
  }

  console.log(`Done — created: ${created}, updated: ${updated}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
