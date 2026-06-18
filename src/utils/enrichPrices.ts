import type { PriceItem } from '../types';
import { buildCatalogPriceItems, normalizeKey, priceMatchKey } from './priceCatalog';
import { localizePriceName } from './localizePriceName';

const API_CATEGORY_ALIASES: Record<string, string[]> = {
  dermatologiya: ['konsultatsii'],
  dermatoonkologiya: ['dermatoonkolog', 'tsifrovaya-dematologiya-dermatoskopiya', 'pasport-kozhi'],
  trikhologiya: ['trihologiya'],
  'apparatnaya-kosmetologiya': [
    'fotoomolozhenie-bbl-bbl-omolozhenie',
    'fotoomolozhenie-ipl-lumecca',
    'esteticheskaya-kosmetologiya',
    'hooywood-spectra',
    'rf-morfeus-8',
  ],
  'injektsionnaya-kosmetologiya': ['inektsionnaya-kosmetologiya'],
  'lazernaya-epilyaciya': ['lazernaya-epilyatsiya'],
  'hirurgicheskaya-dermatologiya': ['hirurgicheskaya-dermatologiya', 'hirurgicheskaya-dematologiya'],
};

function findCatalogMatch(apiItem: PriceItem, catalog: PriceItem[]): PriceItem | undefined {
  const apiPrice = apiItem.priceValue ?? 0;
  const apiNameKey = normalizeKey(apiItem.name.ru || apiItem.name.uz || apiItem.name.en);

  const sameCategory = catalog.filter((c) => c.category === apiItem.category);
  if (sameCategory.length) {
    const exact = sameCategory.find(
      (c) =>
        normalizeKey(c.name.ru) === apiNameKey ||
        Math.abs((c.priceValue ?? 0) - apiPrice) < 1 &&
          (normalizeKey(c.name.ru).includes(apiNameKey.slice(0, 12)) ||
            apiNameKey.includes(normalizeKey(c.name.ru).slice(0, 12))),
    );
    if (exact) return exact;
  }

  const aliasCategories = API_CATEGORY_ALIASES[apiItem.category] ?? [];
  for (const catId of aliasCategories) {
    const inAlias = catalog.filter((c) => c.category === catId);
    const match = inAlias.find(
      (c) =>
        Math.abs((c.priceValue ?? 0) - apiPrice) < 1 &&
        (normalizeKey(c.name.ru).includes(apiNameKey.slice(0, 10)) ||
          apiNameKey.includes(normalizeKey(c.name.ru).slice(0, 10))),
    );
    if (match) return match;
  }

  return catalog.find(
    (c) =>
      Math.abs((c.priceValue ?? 0) - apiPrice) < 1 &&
      normalizeKey(c.name.ru) === apiNameKey,
  );
}

function mergeApiOntoCatalog(catalogItem: PriceItem, apiItem: PriceItem): PriceItem {
  const hasGoodRu = apiItem.name.ru && !apiItem.name.ru.includes('???');
  const hasGoodUz = apiItem.name.uz && !apiItem.name.uz.includes('???');

  return {
    ...catalogItem,
    id: apiItem.id,
    name: {
      ru: hasGoodRu ? apiItem.name.ru : catalogItem.name.ru,
      uz: hasGoodUz ? apiItem.name.uz : catalogItem.name.uz,
      en: apiItem.name.en?.trim() ? apiItem.name.en : catalogItem.name.en,
    },
    price: apiItem.price || catalogItem.price,
    priceValue: apiItem.priceValue ?? catalogItem.priceValue,
    category: catalogItem.category,
  };
}

const API_PRICE_FULL_THRESHOLD = 100;

function localizeApiPriceNames(apiPrices: PriceItem[]): PriceItem[] {
  return apiPrices.map((api) => ({
    ...api,
    name: {
      ru: api.name.ru?.includes('???') ? localizePriceName(api.name.uz, 'ru') : api.name.ru,
      uz: api.name.uz,
      en: api.name.en,
    },
  }));
}

export function enrichPrices(apiPrices: PriceItem[]): PriceItem[] {
  if (apiPrices.length >= API_PRICE_FULL_THRESHOLD) {
    return localizeApiPriceNames(apiPrices);
  }

  const catalog = buildCatalogPriceItems();
  if (catalog.length === 0) return apiPrices;

  const usedApiIds = new Set<string>();
  const mergedCatalog = catalog.map((catalogItem) => {
    const apiMatch = apiPrices.find((api) => {
      if (usedApiIds.has(api.id)) return false;
      const found = findCatalogMatch(api, [catalogItem]);
      return Boolean(found);
    });

    if (apiMatch) {
      usedApiIds.add(apiMatch.id);
      return mergeApiOntoCatalog(catalogItem, apiMatch);
    }
    return catalogItem;
  });

  const apiOnly = apiPrices
    .filter((api) => !usedApiIds.has(api.id))
    .map((api) => ({
      ...api,
      name: {
        ru: api.name.ru?.includes('???') ? localizePriceName(api.name.uz, 'ru') : api.name.ru,
        uz: api.name.uz,
        en: api.name.en,
      },
    }));

  return [...mergedCatalog, ...apiOnly];
}

export function getCatalogPrices(): PriceItem[] {
  return buildCatalogPriceItems();
}
