import type { Locale, PriceItem } from '../types';
import type { ClinicEquipmentEntry } from '../data/clinicEquipmentCatalog';
import { buildCatalogPriceItems } from './priceCatalog';
import { resolvePriceName } from './priceDisplay';
import { resolvePriceCategoryLabel } from './priceCategoryDisplay';
import { getCatalogCategoryNameRu } from './priceCatalog';

function normalizeForMatch(text: string): string {
  return text.toLowerCase().replace(/ё/g, 'е');
}

function matchesKeywords(item: PriceItem, keywords: string[], locale: Locale): boolean {
  const haystack = normalizeForMatch(
    `${item.name.ru} ${item.name.uz} ${item.name.en} ${resolvePriceName(item, locale)}`,
  );
  return keywords.some((keyword) => haystack.includes(normalizeForMatch(keyword)));
}

/** Apparat bo'yicha preyskurant (asosiy ro'yxatdan yashirilgan bo'limlar ham qo'shiladi) */
export function getEquipmentPriceItems(
  equipment: ClinicEquipmentEntry,
  locale: Locale,
  livePrices?: PriceItem[],
): PriceItem[] {
  const categorySet = new Set(equipment.priceCategoryIds);
  const catalogItems = buildCatalogPriceItems();

  let items = catalogItems.filter((item) => categorySet.has(item.category));

  if (equipment.priceKeywords?.length) {
    items = items.filter((item) => matchesKeywords(item, equipment.priceKeywords!, locale));
  }

  if (livePrices?.length && categorySet.size > 0) {
    const liveMatches = livePrices.filter((item) => {
      if (!categorySet.has(item.category)) return false;
      if (!equipment.priceKeywords?.length) return true;
      return matchesKeywords(item, equipment.priceKeywords, locale);
    });
    if (liveMatches.length > 0) {
      items = liveMatches;
    }
  }

  return [...items].sort((a, b) => (a.priceValue ?? 0) - (b.priceValue ?? 0));
}

export function groupEquipmentPricesByCategory(
  items: PriceItem[],
  locale: Locale,
): { categoryId: string; title: string; items: PriceItem[] }[] {
  const grouped = new Map<string, PriceItem[]>();
  for (const item of items) {
    const list = grouped.get(item.category) ?? [];
    list.push(item);
    grouped.set(item.category, list);
  }

  return [...grouped.entries()].map(([categoryId, categoryItems]) => ({
    categoryId,
    title: resolvePriceCategoryLabel(categoryId, locale, getCatalogCategoryNameRu(categoryId)),
    items: categoryItems,
  }));
}

// Labels live in their own module so the header menu does not pull in the price catalog.
export { getEquipmentSectionLabels } from './clinicEquipmentLabels';
