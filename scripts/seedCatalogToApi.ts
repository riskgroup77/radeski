/**
 * Full catalog seed: services, prices, site-texts, doctors, articles.
 *
 * Usage:
 *   set VITE_API_URL=https://radeskiapi.arxivfjsti.uz
 *   set ADMIN_USERNAME=...
 *   set ADMIN_PASSWORD=...
 *   npm run seed:catalog
 */
import 'dotenv/config';
import { ARTICLES, DOCTORS, SERVICE_CATEGORIES } from '../src/data';
import {
  adminLogin,
  bulkUpdateSiteTexts,
  createArticle,
  createDoctor,
  createServiceCategory,
  getAdminServices,
  updateServiceCategory,
} from '../src/api/adminApi';
import {
  mapArticleToCreatePayload,
  mapDoctorToCreatePayload,
  mapPriceToCreatePayload,
  mapServiceCategoryToPayload,
} from '../src/api/mappers';
import { CONDITION_WHY_RADESKI } from '../src/data/conditionWhyRadeskiCatalog';
import { SERVICE_ABOUT_CATALOG } from '../src/data/serviceAboutCatalog';
import { getLocalizedConditionText } from '../src/data/serviceConditionDetailsCatalog';
import type { Locale, ServiceCategory, ServiceConditionTopic, ServiceDetail, ServiceRichContent } from '../src/types';
import { filterExcludedServiceCategories } from '../src/utils/excludedServices';
import { buildCatalogPriceItems } from '../src/utils/priceCatalog';
import { resolveCategoryRichContent, resolveServiceRichContent } from '../src/utils/serviceContent';

const API_URL = (
  process.env.VITE_API_URL ||
  'https://radeskiapi.arxivfjsti.uz'
).replace(/\/$/, '');

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

function buildSiteTextItems() {
  const items: Record<string, { value_uz?: string | null; value_ru?: string | null; value_en?: string | null }> = {};

  for (const [key, localized] of Object.entries(SERVICE_ABOUT_CATALOG)) {
    items[`catalog.service-about.${key}`] = {
      value_uz: JSON.stringify(localized.uz),
      value_ru: JSON.stringify(localized.ru),
      value_en: JSON.stringify(localized.en),
    };
  }

  for (const [key, why] of Object.entries(CONDITION_WHY_RADESKI)) {
    const toJson = (locale: Locale) =>
      JSON.stringify({
        aboutTitle: getLocalizedConditionText(why.aboutTitle, locale),
        aboutOverview: getLocalizedConditionText(why.aboutOverview, locale),
        aboutSections: why.aboutSections.map((section) => ({
          title: getLocalizedConditionText(section.title, locale),
          description: getLocalizedConditionText(section.description, locale),
        })),
        aboutFooter: getLocalizedConditionText(why.aboutFooter, locale),
      });
    items[`catalog.condition-why.${key}`] = {
      value_uz: toJson('uz'),
      value_ru: toJson('ru'),
      value_en: toJson('en'),
    };
  }

  return items;
}

async function importPrices(token: string, serviceCategoryIds: string[]) {
  const catalogItems = buildCatalogPriceItems();
  const payload = {
    items: catalogItems.map((item) => mapPriceToCreatePayload(item, serviceCategoryIds)),
  };

  console.log(`Importing ${payload.items.length} prices...`);
  const res = await fetch(`${API_URL}/api/admin/prices/import`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`Price import failed (${res.status}): ${JSON.stringify(data)}`);
  }
  console.log('Prices imported:', data);
}

async function seedServices(token: string) {
  const categories = filterExcludedServiceCategories(SERVICE_CATEGORIES).map(prepareCategoryForApi);
  const serviceCategoryIds = categories.map((category) => category.id);
  const existing = await getAdminServices(token);
  const existingIds = new Set(existing.map((item) => item.id));

  console.log(`Uploading ${categories.length} service categories...`);
  for (const category of categories) {
    const payload = mapServiceCategoryToPayload(category);
    try {
      if (existingIds.has(category.id)) {
        await updateServiceCategory(category.id, payload, null, [], token);
        console.log(`  updated: ${category.id}`);
      } else {
        await createServiceCategory(payload, null, [], token);
        console.log(`  created: ${category.id}`);
      }
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      console.error(`  FAILED: ${category.id} — ${detail}`);
      if (error && typeof error === 'object' && 'detail' in error) {
        console.error(JSON.stringify((error as { detail: unknown }).detail, null, 2));
      }
      throw error;
    }
  }

  return serviceCategoryIds;
}

async function seedSiteTexts(token: string) {
  const items = buildSiteTextItems();
  console.log(`Uploading ${Object.keys(items).length} site-text entries...`);
  await bulkUpdateSiteTexts({ items }, token);
}

async function seedDoctors(token: string) {
  const res = await fetch(`${API_URL}/api/doctors`);
  const existing = (await res.json()) as unknown[];
  if (Array.isArray(existing) && existing.length > 0) {
    console.log(`Doctors already present (${existing.length}), skipping.`);
    return;
  }

  console.log(`Creating ${DOCTORS.length} doctors...`);
  for (const doctor of DOCTORS) {
    await createDoctor(mapDoctorToCreatePayload(doctor), null, token);
    console.log(`  created: ${doctor.id}`);
  }
}

async function seedArticles(token: string) {
  const res = await fetch(`${API_URL}/api/articles`);
  const existing = (await res.json()) as unknown[];
  if (Array.isArray(existing) && existing.length > 0) {
    console.log(`Articles already present (${existing.length}), skipping.`);
    return;
  }

  console.log(`Creating ${ARTICLES.length} articles...`);
  for (const article of ARTICLES) {
    await createArticle(mapArticleToCreatePayload(article), null, token);
    console.log(`  created: ${article.slug || article.id}`);
  }
}

async function main() {
  const username = process.env.ADMIN_USERNAME?.trim();
  const password = process.env.ADMIN_PASSWORD?.trim();

  if (!username || !password) {
    console.error('ADMIN_USERNAME and ADMIN_PASSWORD env vars are required.');
    process.exit(1);
  }

  console.log(`API: ${API_URL}`);
  const tokenRes = await adminLogin({ username, password });
  const token = tokenRes.access_token;

  await seedServices(token);
  const serviceCategoryIds = filterExcludedServiceCategories(SERVICE_CATEGORIES).map((c) => c.id);
  await importPrices(token, serviceCategoryIds);
  await seedSiteTexts(token);
  await seedDoctors(token);
  await seedArticles(token);

  console.log('Catalog seed completed successfully.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
