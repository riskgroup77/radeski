import type { Article } from '../types';
import { STATIC_ARTICLES } from '../data/articleIndex.generated';

/*
 * Article helpers that need the whole built-in article index (~120 KB). Kept out of
 * utils/articles.ts, which the header and home page load with the app shell; only the article
 * page, the data transform, route head and prerender import this module.
 */
const ARTICLES = STATIC_ARTICLES;

/** API ro‘yxatida yo‘q statik katalog maqolalarini qo‘shadi (masalan yangi art-* yozuvlar). */
export function mergeArticlesWithStaticCatalog(apiArticles: Article[]): Article[] {
  if (apiArticles.length === 0) return ARTICLES;

  const apiSlugs = new Set(apiArticles.map((article) => article.slug));
  const apiStaticIds = new Set(
    apiArticles.map((article) => {
      const staticMatch = ARTICLES.find(
        (item) => item.slug === article.slug || item.id === article.id,
      );
      return staticMatch?.id ?? article.slug;
    }),
  );

  const missingStatic = ARTICLES.filter(
    (item) => !apiSlugs.has(item.slug) && !apiStaticIds.has(item.id),
  );

  if (missingStatic.length === 0) return apiArticles;

  return [...apiArticles, ...missingStatic].sort((a, b) =>
    (b.date || '').localeCompare(a.date || ''),
  );
}

export function findArticleByRouteParam(
  routeParam: string,
  articles: Article[],
): Article | undefined {
  const direct = articles.find(
    (article) =>
      article.id === routeParam ||
      article.slug === routeParam ||
      article.apiId === routeParam,
  );
  if (direct) return direct;

  const staticMatch = ARTICLES.find(
    (item) => item.id === routeParam || item.slug === routeParam,
  );
  if (!staticMatch) return undefined;

  return (
    articles.find(
      (article) =>
        article.slug === staticMatch.slug ||
        article.id === staticMatch.id ||
        article.apiId === routeParam,
    ) ?? staticMatch
  );
}

export function resolveArticleApiSlug(routeParam: string, articles: Article[]): string {
  const match = findArticleByRouteParam(routeParam, articles);
  if (match) return match.slug;
  return routeParam;
}
