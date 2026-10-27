import type { Article } from '../types';
import { STATIC_ARTICLE_ROUTE_KEYS } from '../data/articleRouteKeys.generated';
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

/** Stable public URL segment: art-* id from static catalog, else slug (never UUID). */
export function resolveArticleRouteKey(
  article: Pick<Article, 'id' | 'slug'>,
): string {
  if (article.id.startsWith('art-')) return article.id;

  // A small id/slug table, so the header and home page do not pull in the whole index.
  const staticKey = STATIC_ARTICLE_ROUTE_KEYS[article.id] ?? (article.slug ? STATIC_ARTICLE_ROUTE_KEYS[article.slug] : undefined);
  if (staticKey) return staticKey;

  if (isApiArticleId(article.id)) return article.slug;
  return article.id;
}

/** Aparat promo maqolalari — portret rasmlar to'liq ko'rsatiladi. */
export const EQUIPMENT_PROMO_ARTICLE_IDS = new Set([
  'art-ipl-lumecca-pigmentatsiya-radeski',
  'art-derma-v-qizarish-radeski',
  'art-tetra-pro-yuz-tortish-radeski',
  'art-hollywood-spectra-poralar-radeski',
  'art-morpheus8-rf-lifting-radeski',
  'art-deka-co2-chandiqlar-radeski',
]);

export function isEquipmentPromoArticle(article: Pick<Article, 'id' | 'slug'>): boolean {
  const routeKey = resolveArticleRouteKey(article);
  return (
    EQUIPMENT_PROMO_ARTICLE_IDS.has(article.id) ||
    EQUIPMENT_PROMO_ARTICLE_IDS.has(routeKey) ||
    EQUIPMENT_PROMO_ARTICLE_IDS.has(`art-${article.slug}`)
  );
}

export function isEquipmentPromoImageSrc(src: string | undefined | null): boolean {
  return Boolean(src && /-promo\.(png|webp|jpe?g)$/i.test(src));
}

/** Admin API PUT/DELETE uchun haqiqiy UUID (statik art-* emas). */
export function resolveArticleAdminApiId(
  article: Pick<Article, 'id' | 'apiId'>,
): string {
  if (article.apiId && isApiArticleId(article.apiId)) return article.apiId;
  if (isApiArticleId(article.id)) return article.id;
  return article.id;
}
