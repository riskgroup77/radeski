import type { PriceItem, ServiceCategory, ServiceDetail } from '../types';

/** Preyskurantdan butunlay olib tashlangan bo'limlar */
export const EXCLUDED_PRICE_CATEGORY_IDS = new Set([
  'vrach-uzi',
  'fotoomolozhenie-forever-young',
  'fotoomolozhenie-bbl-bbl-omolozhenie',
  'endosfera',
  'eptaderm',
  // API yoki eski aliaslar
  'uzi',
  'forever-young',
  'forever_young',
  'bbl',
  'endosphere',
  'eftoderm',
  'eftoder',
]);

/** Live API sub-service id for excluded mole-removal entry under dermato-oncology. */
const EXCLUDED_DERMATO_ONCOLOGY_SUB_IDS = new Set([
  '10a749c5-4d4e-4642-b88a-01518995c995',
]);

const DERMATO_ONCOLOGY_CATEGORY_IDS = new Set(['dermatoonkologiya', 'dermatoonkolog']);

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .replace(/[‘’`]/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function matchesMoleRemovalTopic(text: string): boolean {
  const value = normalizeText(text);
  if (!value) return false;

  return (
    value.includes("ko'pchilikni olib tashlash") ||
    value.includes("ko'pchilik va nevus") ||
    value.includes("ko'pchilik va nevuslarni") ||
    value === 'mole removal' ||
    value === 'удаление родинок' ||
    value.startsWith('удаление родинок ') ||
    value.includes('xol (nevus)larni olib tashlash') ||
    value.includes('xolarni olib tashlash') ||
    value.includes("nevuslarni olib tashlash") ||
    value.includes('безопасное удаление родинок') ||
    value.includes('safe removal of moles')
  );
}

function matchesLesionRemovalPrice(text: string): boolean {
  const value = normalizeText(text);
  if (!value) return false;

  return (
    matchesMoleRemovalTopic(value) ||
    value.startsWith('удаление новообразован') ||
    value.startsWith('удаление новооброзован') ||
    value.includes('o\'smalarni olib tashlash')
  );
}

/** Rus tilidagi hujjatlar chiqarish xizmati — preyskurantdan olib tashlangan */
function matchesRussianDocumentExtractPrice(text: string): boolean {
  const value = normalizeText(text);
  if (!value) return false;

  const isDocumentExtract =
    (value.includes('выписок') || value.includes('vipisok') || value.includes('extract')) &&
    (value.includes('документ') || value.includes('dokument') || value.includes('document'));

  const isRussianLanguage =
    value.includes('русском') ||
    value.includes('russkom') ||
    value.includes('rus tilida') ||
    value.includes('russian language');

  return isDocumentExtract && isRussianLanguage;
}

export function isExcludedRussianDocumentExtractPrice(item: PriceItem): boolean {
  const fields = [item.name.uz, item.name.ru, item.name.en];
  return fields.some((field) => matchesRussianDocumentExtractPrice(field));
}

export function isExcludedDermatoOncologySubService(
  sub: ServiceDetail,
  categoryId: string,
): boolean {
  if (!DERMATO_ONCOLOGY_CATEGORY_IDS.has(categoryId)) return false;
  if (EXCLUDED_DERMATO_ONCOLOGY_SUB_IDS.has(sub.id)) return true;

  const fields = [
    sub.name.uz,
    sub.name.ru,
    sub.name.en,
    sub.description.uz,
    sub.description.ru,
    sub.description.en,
  ];

  return fields.some((field) => matchesMoleRemovalTopic(field));
}

/** Butunlay yashiriladigan xizmat kategoriyalari */
export const EXCLUDED_CATEGORY_IDS = new Set(['gen-revo']);

/** Xizmatlar ro'yxatidan yashiriladigan sub-xizmatlar (mavjud emas) */
export const EXCLUDED_SUB_SERVICE_IDS = new Set([
  'photofinder-scan',
  'gene-photo-rejuvenation',
  'mikrotoki',
  'fy-protocols',
]);

const APPARATUS_IPL_SUB_SERVICE: ServiceDetail = {
  id: 'ipl-inmode',
  name: {
    uz: 'IPL foto-yangilash (InMode)',
    ru: 'Фотоомоложение IPL (InMode)',
    en: 'IPL photo-rejuvenation (InMode)',
  },
  description: {
    uz: 'InMode IPL — pigmentatsiya, qon tomirlari va teri tonini jarrohliksiz yaxshilash.',
    ru: 'InMode IPL — безоперационное улучшение пигментации, сосудов и тона кожи.',
    en: 'InMode IPL — non-surgical improvement of pigmentation, vessels and skin tone.',
  },
};

function isExcludedCategory(category: ServiceCategory): boolean {
  if (EXCLUDED_CATEGORY_IDS.has(category.id)) return true;
  const fields = [category.title.uz, category.title.ru, category.title.en, category.description.uz, category.description.ru, category.description.en];
  const haystack = normalizeText(fields.join(' '));
  return (
    haystack.includes('gen darajasida') ||
    haystack.includes('генном уровне') ||
    haystack.includes('gene-level photo') ||
    haystack.includes('forever young ipl')
  );
}

function isRemovedApparatusSubService(sub: ServiceDetail): boolean {
  if (EXCLUDED_SUB_SERVICE_IDS.has(sub.id)) return true;
  const fields = [
    sub.name.uz,
    sub.name.ru,
    sub.name.en,
    sub.description.uz,
    sub.description.ru,
    sub.description.en,
  ];
  const haystack = normalizeText(fields.join(' '));
  return (
    haystack.includes('mikrotok') ||
    haystack.includes('микроток') ||
    haystack.includes('microcurrent') ||
    haystack.includes('gen darajasida') ||
    haystack.includes('генном уровне') ||
    haystack.includes('gene-level') ||
    haystack.includes('forever young') ||
    haystack.includes('innovatsion foto') ||
    haystack.includes('инновационное фотоомоложение')
  );
}

function isBblSubService(sub: ServiceDetail): boolean {
  if (sub.id === 'bbl-foto' || sub.id === 'bbl') return true;
  const fields = [sub.name.uz, sub.name.ru, sub.name.en];
  return fields.some((field) => /\bbbl\b/i.test(field));
}

/** API da bir xil IPL (InMode / Lumecca / BBL) bir necha marta kelishi mumkin — bittasini qoldiramiz */
function isIplInmodeSubService(sub: ServiceDetail): boolean {
  if (sub.id === 'ipl-inmode') return true;
  if (isBblSubService(sub)) return true;

  const fields = [
    sub.name.uz,
    sub.name.ru,
    sub.name.en,
    sub.description.uz,
    sub.description.ru,
    sub.description.en,
  ];
  const haystack = normalizeText(fields.join(' '));

  return (
    (haystack.includes('ipl') &&
      (haystack.includes('inmode') ||
        haystack.includes('foto-yangilash') ||
        haystack.includes('fotoomolozhenie') ||
        haystack.includes('фотоомоложение') ||
        haystack.includes('photo-rejuvenation') ||
        haystack.includes('lumecca'))) ||
    haystack.includes('forever young ipl')
  );
}

function normalizeApparatusSubServices(category: ServiceCategory): ServiceCategory {
  const normalized: ServiceDetail[] = [];
  let hasIplInmode = false;

  for (const sub of category.subServices) {
    if (isExcludedDermatoOncologySubService(sub, category.id)) continue;
    if (category.id === 'apparatnaya-kosmetologiya' && isRemovedApparatusSubService(sub)) continue;
    if (category.id !== 'apparatnaya-kosmetologiya' && EXCLUDED_SUB_SERVICE_IDS.has(sub.id)) continue;

    if (category.id === 'apparatnaya-kosmetologiya' && isIplInmodeSubService(sub)) {
      if (!hasIplInmode) {
        normalized.push({
          ...APPARATUS_IPL_SUB_SERVICE,
          images: sub.images,
          image: sub.image,
        });
        hasIplInmode = true;
      }
      continue;
    }

    normalized.push(sub);
  }

  if (category.id === 'apparatnaya-kosmetologiya' && !hasIplInmode) {
    normalized.unshift(APPARATUS_IPL_SUB_SERVICE);
  }

  return { ...category, subServices: normalized };
}

export function filterExcludedSubServices(category: ServiceCategory): ServiceCategory {
  return normalizeApparatusSubServices(category);
}

export function filterExcludedServiceCategories(
  categories: ServiceCategory[],
): ServiceCategory[] {
  return categories.filter((category) => !isExcludedCategory(category)).map(filterExcludedSubServices);
}

export function isExcludedPriceCategory(categoryId: string): boolean {
  const id = categoryId.trim().toLowerCase();
  if (EXCLUDED_PRICE_CATEGORY_IDS.has(id)) return true;

  return (
    id.includes('vrach-uzi') ||
    id.includes('forever-young') ||
    id.includes('forever_young') ||
    id.includes('bbl-omolozhenie') ||
    id === 'bbl' ||
    id.includes('endosfera') ||
    id.includes('endosphere') ||
    id.includes('eptaderm') ||
    id.includes('eftoderm') ||
    id.includes('eftoder')
  );
}

export function isExcludedDermatoOncologyPrice(item: PriceItem): boolean {
  if (!DERMATO_ONCOLOGY_CATEGORY_IDS.has(item.category)) return false;

  const fields = [item.name.uz, item.name.ru, item.name.en];
  return fields.some((field) => matchesLesionRemovalPrice(field));
}

export function filterExcludedPrices(prices: PriceItem[]): PriceItem[] {
  return prices.filter(
    (item) =>
      !isExcludedPriceCategory(item.category) &&
      !isExcludedDermatoOncologyPrice(item) &&
      !isExcludedRussianDocumentExtractPrice(item),
  );
}
