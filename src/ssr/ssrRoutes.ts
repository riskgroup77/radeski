import type { Locale } from '../types';
import type { InitialSiteData } from './initialSiteData';

/**
 * Routes whose prerendered HTML is the real app (server-rendered, then hydrated). Everything
 * else still gets the plain SEO body that the app replaces on load. Grows page type by page
 * type — each one needs its first render to depend only on InitialSiteData + preloaded texts.
 */
const SSR_ROUTE = /^\/(uz|ru|en)(?:\/articles\/[^/]+)?\/?$/;

export function isSsrRoute(pathname: string): boolean {
  return SSR_ROUTE.test(pathname);
}

/**
 * What the route's first render needs besides the site data, loaded before rendering (server)
 * or hydrating (browser): the route's code chunk and an article's text.
 */
export async function preloadSsrRoute(pathname: string, data: InitialSiteData): Promise<void> {
  const [, locale, section, key] = pathname.split('/');
  if (section !== 'articles' || !key) return;
  const [{ findArticleByRouteParam }, { findArticleCatalogKey }, { loadArticleCatalog }] = await Promise.all([
    import('../utils/articleCatalogLookup'),
    import('../data/articleCatalogKeys'),
    import('../data/articleCatalogCache'),
    import('../components/ArticlePage'),
  ]);
  const article = findArticleByRouteParam(decodeURIComponent(key), data.clinic.articles);
  if (article) await loadArticleCatalog(findArticleCatalogKey(article), locale as Locale);
}
