import type { Article, Locale, ServiceCategory } from '../types';
import { findArticleCatalogKey } from '../data/articleCatalogKeys';
import { CONDITION_ARTICLES } from '../data/conditionArticles';
import { DERMATOLOGY_CONDITION_NAV } from '../data/dermatologyConditionsNav';
import { CLINIC_EQUIPMENT_CATALOG, getLocalizedEquipmentText, type ClinicEquipmentId } from '../data/clinicEquipmentCatalog';
import {
  ALL_LOCAL_COMMERCIAL_LANDINGS,
  getLocalizedCopy,
  localCommercialPath,
} from '../data/localCommercialSeoCatalog';
import { conditionPath, serviceCategoryPath, serviceEquipmentPath, serviceSubPath } from '../routing/paths';
import { buildServiceH1 } from '../seo/pageMeta';
import { resolveArticleRouteKey } from './articles';
import { EQUIPMENT_ARTICLE_KEYS } from './equipmentRelatedContent';
import { SERVICE_CATEGORY_ARTICLE_KEYS, SERVICE_SUB_ARTICLE_KEYS } from './serviceRelatedArticles';
import { subServiceLinkName } from './serviceSubSlug';

export interface ArticleServiceLink {
  label: string;
  path: string;
}

/** Lists are ordered by relevance: where the article sits higher comes first. */
function byRank<T>(entries: [T, string[]][], catalogKey: string): T[] {
  return entries
    .filter(([, keys]) => keys.includes(catalogKey))
    .sort(([, a], [, b]) => a.indexOf(catalogKey) - b.indexOf(catalogKey))
    .map(([item]) => item);
}

/**
 * The clinic's services an article is about, taken from the places that already list the
 * article: city service pages (articleRouteKeys), condition pages (CONDITION_ARTICLES), device
 * pages (EQUIPMENT_ARTICLE_KEYS), sub-services (SERVICE_SUB_ARTICLE_KEYS) and service categories.
 * City pages first — they carry prices and booking; then the most specific pages, which
 * otherwise get links only from the menu.
 */
export function articleServiceLinks(
  article: Pick<Article, 'id' | 'slug' | 'title'>,
  categories: ServiceCategory[],
  locale: Locale,
  limit = 8,
): ArticleServiceLink[] {
  const routeKey = resolveArticleRouteKey(article);
  const catalogKey = findArticleCatalogKey(article);

  const landings = ALL_LOCAL_COMMERCIAL_LANDINGS.filter((landing) => landing.articleRouteKeys?.includes(routeKey)).map(
    (landing) => ({
      label: getLocalizedCopy(landing.h1, locale),
      path: localCommercialPath(locale, landing.city, landing.slug),
    }),
  );

  const conditionLinks = DERMATOLOGY_CONDITION_NAV.filter((item) =>
    CONDITION_ARTICLES[item.slug]?.some((entry) => entry.routeKey === routeKey),
  ).map((item) => ({ label: item.label[locale], path: conditionPath(locale, item.slug) }));

  const deviceLinks = byRank(Object.entries(EQUIPMENT_ARTICLE_KEYS) as [ClinicEquipmentId, string[]][], catalogKey)
    .slice(0, 2)
    .map((id) => ({
      label: getLocalizedEquipmentText(CLINIC_EQUIPMENT_CATALOG[id].title, locale),
      path: serviceEquipmentPath(locale, id),
    }));

  const subLinks = byRank(
    Object.entries(SERVICE_SUB_ARTICLE_KEYS).flatMap(([categoryId, subs]) =>
      Object.entries(subs).map(([subId, keys]) => [[categoryId, subId], keys] as [[string, string], string[]]),
    ),
    catalogKey,
  ).flatMap(([categoryId, subId]) => {
    const category = categories.find((item) => item.id === categoryId);
    const label = category ? subServiceLinkName(category.subServices, subId, locale) : subId;
    // Only sub-services the clinic's catalog has (a key it does not know is not a page).
    if (!category || label === subId) return [];
    return [{ label, path: serviceSubPath(locale, categoryId, subId) }];
  });

  const categoryLinks = byRank(Object.entries(SERVICE_CATEGORY_ARTICLE_KEYS), catalogKey).flatMap((categoryId) => {
    const category = categories.find((item) => item.id === categoryId);
    if (!category) return [];
    return [{ label: buildServiceH1(category.title[locale] || category.title.uz, locale), path: serviceCategoryPath(locale, category.id) }];
  });

  const seen = new Set<string>();
  return [...landings, ...conditionLinks, ...deviceLinks, ...subLinks, ...categoryLinks]
    .filter((link) => (seen.has(link.path) ? false : (seen.add(link.path), true)))
    .slice(0, limit);
}
