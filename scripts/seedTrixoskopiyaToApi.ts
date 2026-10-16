/**
 * Trixoskopiya xizmat kategoriyasini API ga sync qiladi.
 * Usage: npx tsx scripts/seedTrixoskopiyaToApi.ts
 */
import 'dotenv/config';
import { SERVICE_CATEGORIES } from '../src/data';
import {
  adminLogin,
  createServiceCategory,
  getAdminServices,
  updateServiceCategory,
} from '../src/api/adminApi';
import { mapServiceCategoryToPayload } from '../src/api/mappers';
import { CONDITION_WHY_RADESKI } from '../src/data/conditionWhyRadeskiCatalog';
import { getLocalizedConditionText } from '../src/data/serviceConditionDetailsCatalog';
import type { Locale, ServiceCategory, ServiceConditionTopic, ServiceDetail, ServiceRichContent } from '../src/types';
import { resolveCategoryRichContent, resolveServiceRichContent } from '../src/utils/serviceContent';

const API_URL = (process.env.VITE_API_URL || 'https://api.radeski.uz').replace(/\/$/, '');
const CATEGORY_ID = 'trixoskopiya';
const LOCALES: Locale[] = ['uz', 'ru', 'en'];

function enrichConditionsWithWhy(
  conditions: ServiceConditionTopic[],
  locale: Locale,
): ServiceConditionTopic[] {
  return conditions.map((condition) => {
    const key = condition.id;
    if (!key || !CONDITION_WHY_RADESKI[key]) return condition;
    const why = CONDITION_WHY_RADESKI[key];
    return {
      ...condition,
      aboutTitle: getLocalizedConditionText(why.aboutTitle, locale),
      aboutOverview: getLocalizedConditionText(why.aboutOverview, locale),
      aboutSections: why.aboutSections.map((section) => ({
        title: getLocalizedConditionText(section.title, locale),
        description: getLocalizedConditionText(section.description, locale),
      })),
      aboutFooter: getLocalizedConditionText(why.aboutFooter, locale),
    };
  });
}

function buildRichForCategory(category: ServiceCategory): Partial<Record<Locale, ServiceRichContent>> {
  const rich: Partial<Record<Locale, ServiceRichContent>> = {};
  for (const locale of LOCALES) {
    const content = resolveCategoryRichContent(category, locale);
    rich[locale] = {
      ...content,
      conditions: enrichConditionsWithWhy(content.conditions, locale),
    };
  }
  return rich;
}

function buildRichForSub(
  sub: ServiceDetail,
  category: ServiceCategory,
): Partial<Record<Locale, ServiceRichContent>> {
  const rich: Partial<Record<Locale, ServiceRichContent>> = {};
  for (const locale of LOCALES) {
    const content = resolveServiceRichContent(sub, category, locale);
    rich[locale] = {
      ...content,
      conditions: enrichConditionsWithWhy(content.conditions, locale),
    };
  }
  return rich;
}

function prepareCategoryForApi(base: ServiceCategory): ServiceCategory {
  const withSubs: ServiceCategory = {
    ...base,
    subServices: base.subServices.map((sub) => ({
      ...sub,
      richContent: buildRichForSub(sub, base),
    })),
  };
  return {
    ...withSubs,
    richContent: buildRichForCategory(withSubs),
  };
}

async function main() {
  const username = process.env.ADMIN_USERNAME?.trim() || 'admin';
  const password = process.env.ADMIN_PASSWORD?.trim() || (() => { throw new Error('ADMIN_PASSWORD env var is required'); })();

  const category = SERVICE_CATEGORIES.find((item) => item.id === CATEGORY_ID);
  if (!category) {
    throw new Error(`Category not found in data.ts: ${CATEGORY_ID}`);
  }

  console.log(`API: ${API_URL}`);
  const token = (await adminLogin({ username, password })).access_token;
  const prepared = prepareCategoryForApi(category);
  const payload = mapServiceCategoryToPayload(prepared);
  const existing = await getAdminServices(token);
  const exists = existing.some((item) => item.id === CATEGORY_ID);

  if (exists) {
    await updateServiceCategory(CATEGORY_ID, payload, null, [], token);
    console.log(`Updated service category: ${CATEGORY_ID}`);
  } else {
    await createServiceCategory(payload, null, [], token);
    console.log(`Created service category: ${CATEGORY_ID}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
