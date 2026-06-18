import type { Article } from '../types';

export function findArticleByRouteParam(
  routeParam: string,
  articles: Article[],
): Article | undefined {
  return articles.find((article) => article.id === routeParam || article.slug === routeParam);
}

export function resolveArticleApiSlug(routeParam: string, articles: Article[]): string {
  const match = findArticleByRouteParam(routeParam, articles);
  if (match) return match.slug;
  return routeParam;
}
