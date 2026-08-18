import { Locale } from '../types';
import { normalizeLocaleParam } from './locale';

export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'doctors'
  | 'prices'
  | 'articles'
  | 'videos'
  | 'branches'
  | 'qoqon'
  | 'results'
  | 'technologies'
  | 'clinic-equipment'
  | 'daavlin-foto-kabinalari'
  | 'dermoscan'
  | 'science'
  | 'brend'
  | 'terms'
  | 'privacy'
  | 'admin'
  | 'fikr';

export const PUBLIC_PAGES: PageId[] = [
  'home',
  'about',
  'services',
  'doctors',
  'prices',
  'articles',
  'videos',
  'branches',
  'results',
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

export function doctorPath(locale: Locale, doctorId: string): string {
  return `/${locale}/doctors/${encodeURIComponent(doctorId)}`;
}

export function doctorsListPath(locale: Locale): string {
  return pagePath(locale, 'doctors');
}

export function getDoctorIdFromPathname(pathname: string): string | null {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length >= 3 && segments[1] === 'doctors') {
    try {
      return decodeURIComponent(segments[2]);
    } catch {
      return segments[2];
    }
  }
  return null;
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

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  return normalizeLocaleParam(segments[0]) ?? 'uz';
}

/** @deprecated Use getArticleIdFromPathname */
export const getArticleSlugFromPathname = getArticleIdFromPathname;

export type DaavlinSectionId =
  | 'about'
  | 'radeski-skin-clinic'
  | 'cabins'
  | 'clinical-results'
  | 'skin-diseases'
  | 'contacts';

export const DAAVLIN_SECTION_IDS: DaavlinSectionId[] = [
  'about',
  'radeski-skin-clinic',
  'cabins',
  'clinical-results',
  'skin-diseases',
  'contacts',
];

/** Map legacy Phothera-era slugs → distributor sections */
const DAAVLIN_SECTION_ALIASES: Record<string, DaavlinSectionId> = {
  conditions: 'skin-diseases',
  faq: 'about',
  options: 'cabins',
  access: 'contacts',
  'find-dermatologist': 'radeski-skin-clinic',
  produkciya: 'cabins',
  'o-nas': 'about',
  'kozhnye-bolezni': 'skin-diseases',
  kontakty: 'contacts',
  'klinicheskie-rezultaty': 'clinical-results',
};

export function daavlinSectionPath(locale: Locale, section: DaavlinSectionId = 'about'): string {
  const base = pagePath(locale, 'daavlin-foto-kabinalari');
  if (section === 'about') return base;
  return `${base}/${section}`;
}

export type DaavlinModelId =
  | '7-series'
  | 'dermapal'
  | 'm-series'
  | 'deka-co2-laser'
  | 'deka-alexandrite-laser'
  | 'surgitron-radiofrequency'
  | 'neolux'
  | 'aquex';

export const DAAVLIN_MODEL_IDS: DaavlinModelId[] = [
  '7-series',
  'dermapal',
  'm-series',
  'deka-co2-laser',
  'deka-alexandrite-laser',
  'surgitron-radiofrequency',
  'neolux',
  'aquex',
];

export function daavlinModelPath(locale: Locale, modelId: DaavlinModelId): string {
  return `${pagePath(locale, 'daavlin-foto-kabinalari')}/models/${modelId}`;
}

export function getDaavlinModelIdFromPathname(pathname: string): DaavlinModelId | null {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[1] !== 'daavlin-foto-kabinalari' || segments[2] !== 'models' || !segments[3]) {
    return null;
  }
  const id = segments[3];
  return (DAAVLIN_MODEL_IDS as string[]).includes(id) ? (id as DaavlinModelId) : null;
}

/** Retired Daavlin model slugs → replacement canonical model page. */
export const LEGACY_DAAVLIN_MODEL_REDIRECTS: Record<string, DaavlinModelId> = {
  ml24000: 'deka-co2-laser',
};

export function getLegacyDaavlinModelRedirectPath(pathname: string): string | null {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[1] !== 'daavlin-foto-kabinalari' || segments[2] !== 'models' || !segments[3]) {
    return null;
  }
  const target = LEGACY_DAAVLIN_MODEL_REDIRECTS[segments[3]];
  if (!target) return null;
  return daavlinModelPath(getLocaleFromPathname(pathname), target);
}

export function getDaavlinSectionFromPathname(pathname: string): DaavlinSectionId {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[1] !== 'daavlin-foto-kabinalari') return 'about';
  const sub = segments[2];
  if (!sub) return 'about';
  if (sub === 'models') return 'cabins';
  if ((DAAVLIN_SECTION_IDS as string[]).includes(sub)) return sub as DaavlinSectionId;
  if (DAAVLIN_SECTION_ALIASES[sub]) return DAAVLIN_SECTION_ALIASES[sub];
  return 'about';
}

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
    pageSegment === 'videos' ||
    pageSegment === 'branches' ||
    pageSegment === 'qoqon' ||
    pageSegment === 'results' ||
    pageSegment === 'technologies' ||
    pageSegment === 'clinic-equipment' ||
    pageSegment === 'daavlin-foto-kabinalari' ||
    pageSegment === 'dermoscan' ||
    pageSegment === 'science' ||
    pageSegment === 'brend' ||
    pageSegment === 'terms' ||
    pageSegment === 'privacy' ||
    pageSegment === 'fikr'
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

export function promoServicePath(locale: Locale, promoSlug: string): string {
  return `/${locale}/promo/${encodeURIComponent(promoSlug)}`;
}

export function getPromoSlugFromPathname(pathname: string): string | null {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length >= 3 && segments[1] === 'promo') {
    try {
      return decodeURIComponent(segments[2]);
    } catch {
      return segments[2];
    }
  }
  return null;
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

export function brandPath(locale: Locale, section?: string): string {
  const base = pagePath(locale, 'brend');
  return section ? `${base}#${section}` : base;
}

export function feedbackPath(locale: Locale): string {
  return `/${locale}/fikr`;
}

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${SITE_ORIGIN}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Strip query/hash and trailing slash for stable canonical URLs. */
export function normalizeCanonicalPath(pathname: string): string {
  const path = pathname.split('?')[0].split('#')[0];
  if (!path || path === '/') return '/uz';
  return path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
}

export function pagePathForAllLocales(page: PageId): Record<Locale, string> {
  return {
    uz: pagePath('uz', page),
    ru: pagePath('ru', page),
    en: pagePath('en', page),
  };
}
