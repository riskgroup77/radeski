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
