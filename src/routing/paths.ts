import { Locale } from '../types';

export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'doctors'
  | 'prices'
  | 'articles'
  | 'contacts'
  | 'terms'
  | 'privacy'
  | 'admin';

export const PUBLIC_PAGES: PageId[] = [
  'home',
  'about',
  'services',
  'doctors',
  'prices',
  'articles',
  'contacts',
];

export const SITE_ORIGIN = 'https://radeski.uz';

export function pagePath(locale: Locale, page: PageId): string {
  if (page === 'admin') return '/admin';
  if (page === 'home') return `/${locale}`;
  return `/${locale}/${page}`;
}

export function articlePath(locale: Locale, articleId: string): string {
  return `/${locale}/articles/${encodeURIComponent(articleId)}`;
}

export function articlesListPath(locale: Locale): string {
  return `/${locale}/articles`;
}

export function getArticleIdFromPathname(pathname: string): string | null {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length >= 3 && segments[1] === 'articles') {
    try {
      return decodeURIComponent(segments[2]);
    } catch {
      return segments[2];
    }
  }
  return null;
}

/** @deprecated Use getArticleIdFromPathname */
export const getArticleSlugFromPathname = getArticleIdFromPathname;

export function getPageFromPathname(pathname: string): PageId {
  const segments = pathname.split('/').filter(Boolean);

  if (segments[0] === 'admin') return 'admin';

  const pageSegment = segments[1];
  if (!pageSegment) return 'home';

  if (pageSegment === 'articles') return 'articles';

  if (
    pageSegment === 'about' ||
    pageSegment === 'services' ||
    pageSegment === 'doctors' ||
    pageSegment === 'prices' ||
    pageSegment === 'contacts' ||
    pageSegment === 'terms' ||
    pageSegment === 'privacy'
  ) {
    return pageSegment;
  }

  return 'home';
}

export function serviceCategoryPath(locale: Locale, categoryId: string): string {
  return `/${locale}/services/${encodeURIComponent(categoryId)}`;
}

export function servicesListPath(locale: Locale): string {
  return pagePath(locale, 'services');
}

export function serviceSubPath(locale: Locale, categoryId: string, subId: string): string {
  return `/${locale}/services/${encodeURIComponent(categoryId)}/${encodeURIComponent(subId)}`;
}

export function getServiceCategoryIdFromPathname(pathname: string): string | null {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length >= 3 && segments[1] === 'services') {
    try {
      return decodeURIComponent(segments[2]);
    } catch {
      return segments[2];
    }
  }
  return null;
}

export function getServiceSubIdFromPathname(pathname: string): string | null {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length >= 4 && segments[1] === 'services') {
    try {
      return decodeURIComponent(segments[3]);
    } catch {
      return segments[3];
    }
  }
  return null;
}

export function switchLocaleInPath(pathname: string, nextLocale: Locale): string {
  const segments = pathname.split('/').filter(Boolean);

  if (segments[0] === 'admin') {
    return '/admin';
  }

  if (segments.length === 0) {
    return pagePath(nextLocale, 'home');
  }

  segments[0] = nextLocale;
  return `/${segments.join('/')}`;
}

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${SITE_ORIGIN}${path.startsWith('/') ? path : `/${path}`}`;
}

export function pagePathForAllLocales(page: PageId): Record<Locale, string> {
  return {
    uz: pagePath('uz', page),
    ru: pagePath('ru', page),
    en: pagePath('en', page),
  };
}
