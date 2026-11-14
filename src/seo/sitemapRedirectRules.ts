import type { Locale } from '../types';
import {
  DAAVLIN_MODEL_IDS,
  type DaavlinModelId,
  articlesListPath,
  doctorPath,
  pagePath,
  serviceCategoryPath,
  serviceSubPath,
} from '../routing/paths';
import { doctorRouteKey } from '../utils/doctorSlug';
import { serviceEquipmentPath } from '../routing/paths';
import { LEGACY_SUB_SERVICES, MERGED_SUB_SERVICES, subServiceRouteKey } from '../utils/serviceSubSlug';

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

/**
 * CMS records as the site snapshot holds them (public/data/site-snapshot-core.json): enough to
 * turn an old UUID address into today's readable one.
 */
export interface CmsIdSnapshot {
  doctors?: { id: string; name_uz?: string; name_en?: string }[];
  services?: { id: string; sub_services?: { id: string; name_uz?: string; name_en?: string }[] }[];
}

/**
 * UUID addresses Google still shows (Search Console export of 2026-11-12) whose record is no
 * longer in the CMS: sub-services that were deleted or merged, two old articles, a Daavlin
 * model that is not sold any more. Each goes to its closest live page.
 */
const RETIRED_CMS_PATHS: { path: string; to: (locale: Locale) => string }[] = [
  ...['c2a9b6fc-8915-4371-af41-cdd30d662e55', '6054b48a-3529-4169-8be4-e3c2e97255d5', '3ad21e9a-06c6-4c39-bdb4-6e676334401f', '1e51301c-bd7b-41f9-ab77-e4d91d2fbad6'].map(
    (id) => ({ path: `services/apparatnaya-kosmetologiya/${id}`, to: (locale: Locale) => serviceCategoryPath(locale, 'apparatnaya-kosmetologiya') }),
  ),
  { path: 'services/shkola-psoriaza', to: (locale) => `/${locale}/fargona/psoriaz-davolash` },
  ...['4bbfaf9b-d973-41d8-88ab-88fbb8fd645d', 'a18ca534-8171-4422-8dd0-df49de5b3680'].map((id) => ({
    path: `articles/${id}`,
    to: (locale: Locale) => articlesListPath(locale),
  })),
  { path: 'daavlin-foto-kabinalari/models/ml24000', to: (locale) => pagePath(locale, 'daavlin-foto-kabinalari') },
];

/**
 * Old CMS-id addresses → readable ones. The React app still opens /doctors/<uuid> and
 * /services/<category>/<uuid>, but crawlers got an empty shell there (no canonical; doctor
 * shells are noindex), so ~1,400 impressions of these URLs passed nothing to the real pages.
 */
export function buildCmsIdRedirectPairs(snapshot: CmsIdSnapshot): SiteRedirectPair[] {
  const pairs = new Map<string, string>();
  const locales: Locale[] = ['uz', 'ru', 'en'];
  const add = (from: string, to: string) => {
    if (!to || from === to) return;
    pairs.set(from, to);
    pairs.set(`${from}/`, to);
  };
  for (const locale of locales) {
    for (const doctor of snapshot.doctors ?? []) {
      const key = doctorRouteKey({ id: doctor.id, name: { uz: doctor.name_uz ?? '', ru: '', en: doctor.name_en ?? '' } });
      if (key !== doctor.id) add(doctorPath(locale, doctor.id), doctorPath(locale, key));
    }
    for (const category of snapshot.services ?? []) {
      for (const sub of category.sub_services ?? []) {
        const key = subServiceRouteKey({ id: sub.id, name: { uz: sub.name_uz ?? '', ru: '', en: sub.name_en ?? '' } });
        // serviceSubPath also folds merged sub-services into their category page.
        add(`/${locale}/services/${category.id}/${sub.id}`, serviceSubPath(locale, category.id, key));
      }
    }
    for (const retired of RETIRED_CMS_PATHS) add(`/${locale}/${retired.path}`, retired.to(locale));
  }
  return [...pairs.entries()].map(([from, to]) => ({ from, to }));
}

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
