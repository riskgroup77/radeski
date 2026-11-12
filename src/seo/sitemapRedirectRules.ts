import type { Locale } from '../types';
import {
  DAAVLIN_MODEL_IDS,
  type DaavlinModelId,
  pagePath,
  serviceCategoryPath,
  serviceSubPath,
} from '../routing/paths';
import { serviceEquipmentPath } from '../routing/paths';
import { LEGACY_SUB_SERVICES, MERGED_SUB_SERVICES } from '../utils/serviceSubSlug';

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

/**
 * URLs of the clinic's previous (Russian) website that Google still shows — Search Console
 * export of 2026-11-12, e.g. /kontakty with 367 impressions and 14 clicks — and that answered
 * 404. Each goes to the closest Russian page of the current site.
 */
export const LEGACY_SITE_REDIRECTS: Record<string, string> = {
  '/kontakty': '/ru/branches',
  '/uslugi': '/ru/services',
  '/prejskurant': '/ru/prices',
  '/dermatopatologiya': '/ru/services/dermatopatologiya',
  '/fototerapiya-1': '/ru/services/dermatologiya/fototerapiya',
  '/dermatologiya': '/ru/services/dermatologiya',
  '/hirurgicheskaya-dermatologiya': '/ru/services/hirurgicheskaya-dermatologiya',
  '/in-ekcionnaya-kosmetologiya': '/ru/services/in-ekcionnaya-kosmetologiya',
  '/o-klinike': '/ru/about',
  '/centr-lechenie-limfomy-kozhi': '/ru/services/dermatoonkologiya',
  '/fizioterapiya': '/ru/articles/art-fizioterapiya-dermatovenereologiya',
  '/peresadka-volos': '/ru/fargona/soch-ekish',
  '/botulinoterapiya': '/ru/fargona/botoks',
  '/kriohirurgiya': '/ru/fargona/osma-olib-tashlash',
  '/uzi': '/ru/services',
  '/diagnostika-novoobrazovanijs-pomoshchyu-photofinder': '/ru/articles/art-photofinder-diagnostika-radeski',
  '/klinika-patologii-nogtej-i-stopy': '/ru/services/clinika-patologii-nogtej',
  '/plazmoterapiya': '/ru/articles/art-plazmotorapiya-soch-prp',
  '/mezo-terapiya': '/ru/fargona/biorevitalizatsiya',
  '/mezoterapiya': '/ru/fargona/biorevitalizatsiya',
  '/novosti-1/post/gistologicheskoe-issledovanie/next': '/ru/fargona/biopsiya',
  '/my-lechim': '/ru/services',
  '/bbl-fotoomolozheniya': '/ru/fargona/ipl-fargona',
  '/in-ekcii-dlya-uvelicheniya-gub': '/ru/fargona/kontur-plastika',
  '/operaciya-po-metodu-moosa': '/ru/services/hirurgicheskaya-dermatologiya/mohs-mikrografik-jarrohligi',
  '/karta-sayta': '/ru',
  '/lazernaya-epilyaciya': '/ru/fargona/lazer-epilyatsiya',
  '/immunobiologicheskaya-terapiya-1': '/ru/services/dermatologiya/immunobiologik-terapiya',
  '/mikrotoki': '/ru/services/apparatnaya-kosmetologiya',
  '/dlya-pacientov': '/ru',
  '/shkola-psoriaza': '/ru/fargona/psoriaz-davolash',
  '/biopsiya-kozhi': '/ru/fargona/biopsiya',
  '/stacionar': '/ru',
};

/** Server-side 301 targets for SPA routes that currently redirect in React. */
export function buildSiteRedirectPairs(): SiteRedirectPair[] {
  const pairs = new Map<string, string>();
  const locales: Locale[] = ['uz', 'ru', 'en'];

  for (const [from, to] of Object.entries(LEGACY_SITE_REDIRECTS)) {
    pairs.set(from, to);
    pairs.set(`${from}/`, to);
  }

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
      const to = serviceEquipmentPath(locale, modelId);
      pairs.set(from, to);
      pairs.set(`${from}/`, to);
    }
  }

  // Hand-written sub-service ids and the removed dermatoskopiya category (the SPA renders them
  // client-side only, so crawlers got a 200 shell instead of the real page).
  for (const locale of locales) {
    for (const [legacyId, target] of Object.entries(LEGACY_SUB_SERVICES)) {
      const from = `/${locale}/services/${target.categoryId}/${legacyId}`;
      const to = serviceSubPath(locale, target.categoryId, legacyId);
      pairs.set(from, to);
      pairs.set(`${from}/`, to);
    }
    const from = `/${locale}/services/dermatoskopiya`;
    const to = serviceCategoryPath(locale, 'dermatoskopiya');
    pairs.set(from, to);
    pairs.set(`${from}/`, to);
  }

  // Near-duplicate sub-services folded into their category page (MERGED_SUB_SERVICES).
  for (const locale of locales) {
    for (const merged of MERGED_SUB_SERVICES) {
      const to = serviceCategoryPath(locale, merged.categoryId);
      for (const key of [merged.slug, merged.id]) {
        const from = `/${locale}/services/${merged.categoryId}/${key}`;
        pairs.set(from, to);
        pairs.set(`${from}/`, to);
      }
    }
  }

  return [...pairs.entries()]
    .map(([from, to]) => ({ from, to }))
    .sort((a, b) => a.from.localeCompare(b.from));
}

export const SITEMAP_DAAVLIN_MODELS: DaavlinModelId[] = DAAVLIN_MODEL_IDS.filter(
  (id) => !CLINIC_LASER_MODELS.includes(id),
);
