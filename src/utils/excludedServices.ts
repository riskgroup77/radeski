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

export function filterExcludedSubServices(category: ServiceCategory): ServiceCategory {
  if (!DERMATO_ONCOLOGY_CATEGORY_IDS.has(category.id)) return category;

  return {
    ...category,
    subServices: category.subServices.filter(
      (sub) => !isExcludedDermatoOncologySubService(sub, category.id),
    ),
  };
}

export function filterExcludedServiceCategories(
  categories: ServiceCategory[],
): ServiceCategory[] {
  return categories.map(filterExcludedSubServices);
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
