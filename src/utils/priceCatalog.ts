import type { PriceItem } from '../types';
import catalogData from '../data/priceCatalog.json';
import { formatPriceValue } from '../api/mappers';
import { localizePriceName } from './localizePriceName';
import { normalizePriceItems } from './priceDisplay';

interface CatalogCategory {
  id: string;
  nameRu: string;
  items: { nameRu: string; priceValue: number }[];
}

function normalizeKey(text: string): string {
  return text
    .toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();
}

export function buildCatalogPriceItems(): PriceItem[] {
  const categories = catalogData.categories as CatalogCategory[];
  const items: PriceItem[] = [];

  categories.forEach((category) => {
    category.items.forEach((item, index) => {
      const id = `catalog-${category.id}-${index + 1}`;
      items.push({
        id,
        category: category.id,
        name: {
          ru: localizePriceName(item.nameRu, 'ru'),
          uz: localizePriceName(item.nameRu, 'uz'),
          en: localizePriceName(item.nameRu, 'en'),
        },
        price: formatPriceValue(item.priceValue),
        priceValue: item.priceValue,
        sortOrder: index + 1,
      });
    });
  });

  return normalizePriceItems(items);
}

export function getCatalogCategoryNameRu(categoryId: string): string | undefined {
  const categories = catalogData.categories as CatalogCategory[];
  return categories.find((c) => c.id === categoryId)?.nameRu;
}

export function priceMatchKey(category: string, nameRu: string, priceValue?: number): string {
  return `${category}::${normalizeKey(nameRu)}::${priceValue ?? 0}`;
}

export { normalizeKey };
