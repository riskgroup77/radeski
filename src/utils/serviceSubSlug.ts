import type { Locale, ServiceCategory } from '../types';

type SubService = ServiceCategory['subServices'][number];

/**
 * Readable sub-service URLs: /uz/services/in-ekcionnaya-kosmetologiya/botulinoterapiya-botoks
 * instead of the CMS UUID. Built-in ids that are already readable (ipl-inmode) are kept; old
 * UUID links and legacy ids still resolve (the canonical URL points at the slug).
 */
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/**
 * Old hand-written ids that were linked before the CMS took over (catalogs, promo slides,
 * conditions) → the CMS sub-service page that replaced them. Names match the CMS, so a link
 * label never falls back to the bare id.
 */
export const LEGACY_SUB_SERVICES: Record<string, { categoryId: string; slug: string; name: Record<Locale, string> }> = {
  'lazer-biorev': {
    categoryId: 'apparatnaya-kosmetologiya',
    slug: 'lazer-biorevitalizatsiya',
    name: { uz: 'Lazer biorevitalizatsiya', ru: 'Лазерная биоревитализация', en: 'Laser biorevitalization' },
  },
  'ultratovush-yuz': {
    categoryId: 'apparatnaya-kosmetologiya',
    slug: 'ultratovush-yuz-tozalash',
    name: { uz: 'Ultratovush yuz tozalash', ru: 'Ультразвуковая чистка лица', en: 'Ultrasonic facial cleansing' },
  },
  'hollywood-spectra': {
    categoryId: 'apparatnaya-kosmetologiya',
    slug: 'hollywood-spectra-lutronic',
    name: { uz: 'Hollywood Spectra (Lutronic)', ru: 'Hollywood Spectra (Lutronic)', en: 'Hollywood Spectra (Lutronic)' },
  },
  'det-derm': {
    categoryId: 'dermatologiya',
    slug: 'bolalar-dermatologiyasi',
    name: { uz: 'Bolalar dermatologiyasi', ru: 'Детская дерматология', en: 'Pediatric Dermatology' },
  },
  immunobiologicheskaya: {
    categoryId: 'dermatologiya',
    slug: 'immunobiologik-terapiya',
    name: { uz: 'Immunobiologik terapiya', ru: 'Иммунобиологическая терапия', en: 'Immunobiological Therapy' },
  },
  konturnaya: {
    categoryId: 'in-ekcionnaya-kosmetologiya',
    slug: 'kontur-plastikasi',
    name: { uz: 'Kontur plastikasi', ru: 'Контурная пластика', en: 'Dermal Fillers' },
  },
  botulino: {
    categoryId: 'in-ekcionnaya-kosmetologiya',
    slug: 'botulinoterapiya-botoks',
    name: { uz: 'Botulinoterapiya (Botoks)', ru: 'Ботулинотерапия (Ботокс)', en: 'Botulinum Therapy (Botox)' },
  },
  biorev: {
    categoryId: 'in-ekcionnaya-kosmetologiya',
    slug: 'biorevitalizatsiya',
    name: { uz: 'Biorevitalizatsiya', ru: 'Биоревитализация', en: 'Biorevitalization' },
  },
  'alex-lazer': {
    categoryId: 'lazernaya-epilyaciya',
    slug: 'aleksandrit-lazer-epilyatsiyasi',
    name: { uz: 'Aleksandrit lazer epilyatsiyasi', ru: 'Александритовая эпиляция', en: 'Alexandrite Laser Epilation' },
  },
  'trix-konsult': {
    categoryId: 'trixoskopiya',
    slug: 'trixoskopik-korik',
    name: { uz: 'Trixoskopik ko\'rik', ru: 'Трихоскопический осмотр', en: 'Trichoscopic examination' },
  },
  'trix-alopecia': {
    categoryId: 'trixoskopiya',
    slug: 'soch-tokilishi-diagnostikasi',
    name: { uz: 'Soch to\'kilishi diagnostikasi', ru: 'Диагностика выпадения волос', en: 'Hair loss diagnosis' },
  },
  'trix-monitoring': {
    categoryId: 'trixoskopiya',
    slug: 'davolash-natijasini-monitoring',
    name: { uz: 'Davolash natijasini monitoring', ru: 'Мониторинг результата лечения', en: 'Treatment result monitoring' },
  },
  trixoskop: {
    categoryId: 'trihologiya-centr-lechenie-volos',
    slug: 'kompyuter-trixoskopiyasi',
    name: { uz: 'Kompyuter trixoskopiyasi', ru: 'Компьютерная трихоскопия', en: 'Computerized Trichoscopy' },
  },
  biopsiya: {
    categoryId: 'dermatoonkologiya',
    slug: 'teri-biopsiyasi-va-gistologiya',
    name: { uz: 'Teri biopsiyasi va gistologiya', ru: 'Биопсия кожи и гистология', en: 'Skin Biopsy & Histopathology' },
  },
  'moh-surgery': {
    categoryId: 'hirurgicheskaya-dermatologiya',
    slug: 'mohs-mikrografik-jarrohligi',
    name: { uz: 'Mohs mikrografik jarrohligi', ru: 'Операция по методу Mohs (Моса)', en: 'Mohs Micrographic Surgery' },
  },
  'podolog-dermatolog': {
    categoryId: 'clinika-patologii-nogtej',
    slug: 'dermatologik-podolog-xizmati',
    name: { uz: 'Dermatologik podolog xizmati', ru: 'Дерматологический подолог', en: 'Clinical Podology Services' },
  },
  gistolog: {
    categoryId: 'dermatopatologiya',
    slug: 'gistologik-mikroskopik-tahlil',
    name: { uz: 'Gistologik mikroskopik tahlil', ru: 'Гистологическое исследование', en: 'Histopathology Biomarker Exam' },
  },
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[ʻʼ‘’'`]/g, '')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function subServiceRouteKey(sub: Pick<SubService, 'id' | 'name'>): string {
  if (!UUID.test(sub.id)) return sub.id;
  return slugify(sub.name.uz || sub.name.en || '') || sub.id;
}

export function findSubServiceByRouteParam<T extends Pick<SubService, 'id' | 'name'>>(
  param: string | null | undefined,
  subServices: T[],
): T | undefined {
  if (!param) return undefined;
  const key = LEGACY_SUB_SERVICES[param]?.slug ?? param.toLowerCase();
  return subServices.find((sub) => subServiceRouteKey(sub) === key) ?? subServices.find((sub) => sub.id === param);
}

/** Category and sub-service segments for a link, with legacy ids swapped for the current page. */
export function canonicalSubServiceLink(categoryId: string, subId: string): { categoryId: string; subId: string } {
  const legacy = LEGACY_SUB_SERVICES[subId];
  return legacy ? { categoryId: legacy.categoryId, subId: legacy.slug } : { categoryId, subId };
}

/** Link label for a sub-service id from a catalog (CMS name when the category has it). */
export function subServiceLinkName(subServices: SubService[], subId: string, locale: Locale): string {
  const sub = findSubServiceByRouteParam(subId, subServices);
  return sub?.name[locale] || LEGACY_SUB_SERVICES[subId]?.name[locale] || subId;
}
