import type { Locale } from '../types';
import {
  DAAVLIN_MODEL_IDS,
  type DaavlinModelId,
  pagePath,
  serviceCategoryPath,
} from '../routing/paths';

/** Paths (without origin) that must never appear in sitemap.xml — they redirect elsewhere. */
export const SITEMAP_EXCLUDED_PATH_SUFFIXES: string[] = [
  '/daavlin-foto-kabinalari/cabins',
  '/daavlin-foto-kabinalari/skin-diseases',
  '/daavlin-foto-kabinalari/contacts',
  '/daavlin-foto-kabinalari/clinical-results',
  '/daavlin-foto-kabinalari/radeski-skin-clinic',
  '/contacts',
  '/clinic-equipment',
];

const CLINIC_LASER_MODELS: DaavlinModelId[] = [
  'deka-co2-laser',
  'deka-alexandrite-laser',
  'surgitron-radiofrequency',
];

export function isSitemapExcludedPath(pathname: string): boolean {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (SITEMAP_EXCLUDED_PATH_SUFFIXES.some((suffix) => path.endsWith(suffix))) {
    return true;
  }
  for (const modelId of CLINIC_LASER_MODELS) {
    if (path.endsWith(`/daavlin-foto-kabinalari/models/${modelId}`)) return true;
  }
  return false;
}

export function isSitemapExcludedUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return isSitemapExcludedPath(parsed.pathname);
  } catch {
    return false;
  }
}

export type SiteRedirectPair = { from: string; to: string };

function addLocalePaths(
  pairs: Map<string, string>,
  locales: Locale[],
  build: (locale: Locale) => { from: string; to: string },
): void {
  for (const locale of locales) {
    const { from, to } = build(locale);
    if (from && to && from !== to) {
      pairs.set(from, to);
      pairs.set(`${from}/`, to);
    }
  }
}

/** Server-side 301 targets for SPA routes that currently redirect in React. */
export function buildSiteRedirectPairs(): SiteRedirectPair[] {
  const pairs = new Map<string, string>();
  const locales: Locale[] = ['uz', 'ru', 'en'];

  addLocalePaths(pairs, locales, (locale) => ({
    from: `/${locale}/contacts`,
    to: pagePath(locale, 'branches'),
  }));

  addLocalePaths(pairs, locales, (locale) => ({
    from: `/${locale}/clinic-equipment`,
    to: `${pagePath(locale, 'daavlin-foto-kabinalari')}#aloqa`,
  }));

  for (const locale of locales) {
    const hub = pagePath(locale, 'daavlin-foto-kabinalari');
    for (const section of ['cabins', 'skin-diseases', 'clinical-results', 'radeski-skin-clinic'] as const) {
      const from = `${hub}/${section}`;
      pairs.set(from, hub);
      pairs.set(`${from}/`, hub);
    }
    const contactsFrom = `${hub}/contacts`;
    const contactsTo = `${hub}#aloqa`;
    pairs.set(contactsFrom, contactsTo);
    pairs.set(`${contactsFrom}/`, contactsTo);
  }

  for (const locale of locales) {
    for (const modelId of CLINIC_LASER_MODELS) {
      const from = `/${locale}/daavlin-foto-kabinalari/models/${modelId}`;
      const to = `${serviceCategoryPath(locale, 'apparatnaya-kosmetologiya')}#${modelId}`;
      pairs.set(from, to);
      pairs.set(`${from}/`, to);
    }
  }

  return [...pairs.entries()]
    .map(([from, to]) => ({ from, to }))
    .sort((a, b) => a.from.localeCompare(b.from));
}

export const SITEMAP_DAAVLIN_MODELS: DaavlinModelId[] = DAAVLIN_MODEL_IDS.filter(
  (id) => !CLINIC_LASER_MODELS.includes(id),
);
