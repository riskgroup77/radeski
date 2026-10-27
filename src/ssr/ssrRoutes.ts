import type { Locale } from '../types';
import type { InitialSiteData } from './initialSiteData';

/**
 * Routes whose prerendered HTML is the real app (server-rendered, then hydrated). Everything
 * else still gets the plain SEO body that the app replaces on load. Grows page type by page
 * type — each one needs its first render to depend only on InitialSiteData + preloaded texts.
 *
 * Now: home, articles, the services list, service categories, sub-services and device pages.
 */
const SSR_ROUTE = /^\/(uz|ru|en)(?:\/articles\/[^/]+|\/services(?:\/[^/]+){0,2})?\/?$/;

export function isSsrRoute(pathname: string): boolean {
  return SSR_ROUTE.test(pathname);
}

/**
 * What the route's first render needs besides the site data, loaded before rendering (server)
 * or hydrating (browser): the route's code chunk, an article's text, a device's texts.
 */
export async function preloadSsrRoute(pathname: string, data: InitialSiteData): Promise<void> {
  const [, locale, section, key, subKey] = pathname.split('/');
  if (section === 'articles' && key) {
    const [{ findArticleByRouteParam }, { findArticleCatalogKey }, { loadArticleCatalog }] = await Promise.all([
      import('../utils/articleCatalogLookup'),
      import('../data/articleCatalogKeys'),
      import('../data/articleCatalogCache'),
      import('../components/ArticlePage'),
    ]);
    const article = findArticleByRouteParam(decodeURIComponent(key), data.clinic.articles);
    if (article) await loadArticleCatalog(findArticleCatalogKey(article), locale as Locale);
    return;
  }
  if (section !== 'services') return;
  if (!key) {
    await import('../components/Services');
    return;
  }
  if (!subKey) {
    await import('../components/ServiceCategoryPage');
    return;
  }
  // Same order as App: a device id wins over a sub-service with that key.
  const { resolveClinicEquipment } = await import('../utils/clinicEquipmentRoutes');
  const equipment = resolveClinicEquipment(decodeURIComponent(subKey));
  if (equipment) {
    const [{ loadEquipmentDetails }] = await Promise.all([
      import('../data/equipment/equipmentDetails'),
      import('../components/ClinicEquipmentPage'),
    ]);
    await loadEquipmentDetails(equipment.id);
    return;
  }
  await import('../components/ServiceSubPage');
}
