import type { Article, Locale, ServiceCategory } from '../types';
import { findArticleCatalogKey } from '../data/articleCatalogKeys';
import {
  ALL_LOCAL_COMMERCIAL_LANDINGS,
  getLocalizedCopy,
  localCommercialPath,
} from '../data/localCommercialSeoCatalog';
import { serviceCategoryPath } from '../routing/paths';
import { buildServiceH1 } from '../seo/pageMeta';
import { resolveArticleRouteKey } from './articles';
import { SERVICE_CATEGORY_ARTICLE_KEYS } from './serviceRelatedArticles';

export interface ArticleServiceLink {
  label: string;
  path: string;
}

/**
 * The clinic's services an article is about, taken from the places that already list the
 * article: city service pages (articleRouteKeys) and service categories
 * (SERVICE_CATEGORY_ARTICLE_KEYS). City pages first — they carry prices and booking.
 */
export function articleServiceLinks(
  article: Pick<Article, 'id' | 'slug' | 'title'>,
  categories: ServiceCategory[],
  locale: Locale,
  limit = 6,
): ArticleServiceLink[] {
  const routeKey = resolveArticleRouteKey(article);
  const catalogKey = findArticleCatalogKey(article);

  const landings = ALL_LOCAL_COMMERCIAL_LANDINGS.filter((landing) => landing.articleRouteKeys?.includes(routeKey)).map(
    (landing) => ({
      label: getLocalizedCopy(landing.h1, locale),
      path: localCommercialPath(locale, landing.city, landing.slug),
    }),
  );

  const categoryLinks = Object.entries(SERVICE_CATEGORY_ARTICLE_KEYS)
    .filter(([, keys]) => keys.includes(catalogKey))
    // Lists are ordered by relevance; the category where the article sits higher comes first.
    .sort(([, a], [, b]) => a.indexOf(catalogKey) - b.indexOf(catalogKey))
    .flatMap(([categoryId]) => {
      const category = categories.find((item) => item.id === categoryId);
      if (!category) return [];
      return [{ label: buildServiceH1(category.title[locale] || category.title.uz, locale), path: serviceCategoryPath(locale, category.id) }];
    });

  const seen = new Set<string>();
  return [...landings, ...categoryLinks]
    .filter((link) => (seen.has(link.path) ? false : (seen.add(link.path), true)))
    .slice(0, limit);
}
