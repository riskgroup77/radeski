import type { Article } from '../types';
import { ARTICLES } from '../data';
import { isApiArticleId } from './articleViews';

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
