import type { Article } from '../types';
import { ARTICLES } from '../data';
import { isApiArticleId } from './articleViews';

/** Retired article routes permanently redirect to the canonical replacement. */
export const ARTICLE_ROUTE_REDIRECTS: Record<string, string> = {
  'art-rozacea-ipl': 'art-rozatseya-davolash-radeski',
  'rozacea-ipl': 'art-rozatseya-davolash-radeski',
};

export function resolveArticleRedirectTarget(routeParam: string): string | null {
  return ARTICLE_ROUTE_REDIRECTS[routeParam] ?? null;
}

export function isArticlePubliclyListed(article: Pick<Article, 'id' | 'slug'>): boolean {
  const routeKey = resolveArticleRouteKey(article);
  return !ARTICLE_ROUTE_REDIRECTS[routeKey] && !ARTICLE_ROUTE_REDIRECTS[article.slug];
}

export function filterPublicArticles(articles: Article[]): Article[] {
  return articles.filter(isArticlePubliclyListed);
}

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

/** Stable public URL segment: art-* id from static catalog, else slug (never UUID). */
export function resolveArticleRouteKey(
  article: Pick<Article, 'id' | 'slug'>,
): string {
  if (article.id.startsWith('art-')) return article.id;

  const staticMatch = ARTICLES.find(
    (item) => item.id === article.id || item.slug === article.slug,
  );
  if (staticMatch) return staticMatch.id;

  if (isApiArticleId(article.id)) return article.slug;
  return article.id;
}

export function resolveArticleApiSlug(routeParam: string, articles: Article[]): string {
  const match = findArticleByRouteParam(routeParam, articles);
  if (match) return match.slug;
  return routeParam;
}

/** Admin API PUT/DELETE uchun haqiqiy UUID (statik art-* emas). */
export function resolveArticleAdminApiId(
  article: Pick<Article, 'id' | 'apiId'>,
): string {
  if (article.apiId && isApiArticleId(article.apiId)) return article.apiId;
  if (isApiArticleId(article.id)) return article.id;
  return article.id;
}
