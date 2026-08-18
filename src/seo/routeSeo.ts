import type { Locale } from '../types';
import {
  type PageId,
  type DaavlinSectionId,
  type DaavlinModelId,
  absoluteUrl,
  articlePath,
  doctorPath,
  serviceCategoryPath,
  serviceSubPath,
  pagePathForAllLocales,
  pagePath,
  daavlinSectionPath,
  daavlinModelPath,
  promoServicePath,
  normalizeCanonicalPath,
  getLocaleFromPathname,
} from '../routing/paths';
import { localeToHreflang, LOCALES } from '../routing/locale';

export type RouteSeoContext = {
  pathname: string;
  forcePage?: 'admin';
  currentPage: PageId;
  articleId?: string | null;
  doctorId?: string | null;
  serviceCategoryId?: string | null;
  serviceSubId?: string | null;
  promoSlug?: string | null;
  daavlinSection?: DaavlinSectionId;
  daavlinModelId?: DaavlinModelId | null;
  /** Stable public route key for articles (art-* or slug, never UUID). */
  resolvedArticleRouteKey?: string;
  resolvedDoctorId?: string;
  resolvedServiceCategoryId?: string;
  resolvedServiceSubId?: string;
};

function resolveArticleRouteKeyFromContext(ctx: RouteSeoContext): string | undefined {
  return ctx.resolvedArticleRouteKey ?? undefined;
}

export function getCanonicalPath(ctx: RouteSeoContext): string {
  if (ctx.forcePage === 'admin') return '/admin';

  const articleRouteKey = resolveArticleRouteKeyFromContext(ctx);
  if (articleRouteKey && ctx.currentPage === 'articles') {
    const locale = getLocaleFromPathname(ctx.pathname);
    return articlePath(locale, articleRouteKey);
  }

  return normalizeCanonicalPath(ctx.pathname);
}

export function getCanonicalUrl(ctx: RouteSeoContext): string {
  return absoluteUrl(getCanonicalPath(ctx));
}

/** Locale alternate URL for the same logical page (hreflang). */
export function resolveAlternatePath(altLocale: Locale, ctx: RouteSeoContext): string {
  if (ctx.promoSlug) {
    return promoServicePath(altLocale, ctx.promoSlug);
  }

  if (ctx.currentPage === 'daavlin-foto-kabinalari') {
    if (ctx.daavlinModelId) {
      return daavlinModelPath(altLocale, ctx.daavlinModelId);
    }
    return daavlinSectionPath(altLocale, ctx.daavlinSection ?? 'about');
  }

  const articleRouteKey = resolveArticleRouteKeyFromContext(ctx);
  if (articleRouteKey) {
    return articlePath(altLocale, articleRouteKey);
  }

  const doctorId = ctx.resolvedDoctorId ?? ctx.doctorId;
  if (doctorId) {
    return doctorPath(altLocale, doctorId);
  }

  const categoryId = ctx.resolvedServiceCategoryId ?? ctx.serviceCategoryId;
  const subId = ctx.resolvedServiceSubId ?? ctx.serviceSubId;
  if (categoryId && subId) {
    return serviceSubPath(altLocale, categoryId, subId);
  }
  if (categoryId) {
    return serviceCategoryPath(altLocale, categoryId);
  }

  return pagePathForAllLocales(ctx.currentPage)[altLocale];
}

export function resolveDefaultAlternatePath(ctx: RouteSeoContext): string {
  return resolveAlternatePath('uz', ctx);
}

export type HreflangLink = { hreflang: string; href: string };

export function buildHreflangLinks(ctx: RouteSeoContext): HreflangLink[] {
  if (ctx.forcePage === 'admin') return [];

  const links: HreflangLink[] = LOCALES.map((altLocale) => ({
    hreflang: localeToHreflang(altLocale),
    href: absoluteUrl(resolveAlternatePath(altLocale, ctx)),
  }));

  links.push({
    hreflang: 'x-default',
    href: absoluteUrl(resolveDefaultAlternatePath(ctx)),
  });

  return links;
}

export function syncHreflangLinks(ctx: RouteSeoContext): void {
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((node) => node.remove());

  buildHreflangLinks(ctx).forEach(({ hreflang, href }) => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = hreflang;
    link.href = href;
    link.setAttribute('data-radeski-hreflang', 'true');
    document.head.appendChild(link);
  });
}

export function syncCanonicalLink(ctx: RouteSeoContext): void {
  const canonicalUrl = getCanonicalUrl(ctx);
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalUrl;
}
