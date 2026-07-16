import type { PriceItem } from '../types';
import { buildCatalogPriceItems, normalizeKey } from './priceCatalog';
import { localizePriceName } from './localizePriceName';
import { filterExcludedPrices } from './excludedServices';
import { normalizePriceItems } from './priceDisplay';

const API_CATEGORY_ALIASES: Record<string, string[]> = {
  dermatologiya: [
    'dermatologiya',
    'dermatokosmetolog',
    'podolog',
    'laboratoriya',
    'laboratoriya-umumiy-klinik',
    'laboratoriya-siydik-va-najas',
    'laboratoriya-koagulatsiya',
    'laboratoriya-biokimyo',
    'laboratoriya-gormonal',
    'laboratoriya-infektsiyalar',
    'laboratoriya-immunologiya-allergiya',
    'laboratoriya-mikrobiologiya-pcr',
    'laboratoriya-parazitologiya-mikologiya',
    'laboratoriya-onkomarkerlar',
    'laboratoriya-patomorfologiya',
  ],
  dermatoonkologiya: [
    'dermatoonkologiya',
    'dermatoonkologiya-2',
    'pasport-kozhi',
    'pigmentatsiya',
    'transplantatsiya-melanotsitov',
  ],
  'trihologiya-centr-lechenie-volos': ['trihologiya', 'trihologiya-2'],
  'apparatnaya-kosmetologiya': [
    'fotoomolozhenie-ipl-lumecca',
    'esteticheskaya-kosmetologiya',
    'hooywood-spectra-lechenie-pigmentatsii-post-akne',
    'morpheus-8-mikroigolchatyy-rf-lifting',
    'derma-v-sosudistyy-lazer-lechenie-sosudistyh-zvezdochek-kuperoza-i-rozatsii',
    'healinte-fotodinamicheskoe-omolozhenie',
    'daavlin-neolux',
    'm-series',
    'eksimer',
    '1-series',
    'daavlin-dermapal',
    'fizioterapiya',
  ],
  'injektsionnaya-kosmetologiya': ['inektsionnaya-kosmetologiya', 'teosyal', 'rejuran'],
  'lazernaya-epilyaciya': ['lazernaya-epilyatsiya'],
  'hirurgicheskaya-dermatologiya': [
    'hirurgicheskaya-dermatologiya',
    'hirurgicheskaya-dematologiya',
    'kriohirurgiya',
    'lazernoe-udalenie-dobrokachestvennyh-novoobrazovaniy-na-deka-smarxide-punto-so2-lazere',
    'lazernaya-ablyatsionnaya-shlifovka-kozhi-glubokaya',
    'lazernaya-ablyatsionnaya-shlifovka-kozhi-poverhnostnaya',
    'lazernaya-ablyatsionnaya-shlifovka-kozhi-srednyaya',
  ],
  podologiya: ['podologiya'],
  laboratoriya: [
    'laboratoriya',
    'laboratoriya-umumiy-klinik',
    'laboratoriya-siydik-va-najas',
    'laboratoriya-koagulatsiya',
    'laboratoriya-biokimyo',
    'laboratoriya-gormonal',
    'laboratoriya-infektsiyalar',
    'laboratoriya-immunologiya-allergiya',
    'laboratoriya-mikrobiologiya-pcr',
    'laboratoriya-parazitologiya-mikologiya',
    'laboratoriya-onkomarkerlar',
    'laboratoriya-patomorfologiya',
    'dnevnoy-statsionar',
    'allergo-proba-10-punktov',
  ],
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
  const merged: PriceItem = {
    ...catalogItem,
    id: apiItem.id,
    name: catalogItem.name,
    price: apiItem.price || catalogItem.price,
    priceValue: apiItem.priceValue ?? catalogItem.priceValue,
    category: catalogItem.category,
    sortOrder: catalogItem.sortOrder ?? apiItem.sortOrder,
  };

  return normalizePriceItems([merged])[0];
}

function localizeApiPriceNames(apiPrices: PriceItem[]): PriceItem[] {
  return apiPrices.map((api) => {
    const ru = api.name.ru?.includes('???')
      ? localizePriceName(api.name.uz, 'ru')
      : (api.name.ru?.trim() || api.name.uz?.trim() || '');
    const normalizedRu = ru ? localizePriceName(ru, 'ru') : '';

    return {
      ...api,
      name: {
        ru: normalizedRu,
        uz: normalizedRu ? localizePriceName(normalizedRu, 'uz') : api.name.uz,
        en: normalizedRu ? localizePriceName(normalizedRu, 'en') : api.name.en,
      },
    };
  });
}

export function enrichPrices(apiPrices: PriceItem[]): PriceItem[] {
  const catalog = buildCatalogPriceItems();
  if (catalog.length === 0) {
    return filterExcludedPrices(normalizePriceItems(localizeApiPriceNames(apiPrices)));
  }

  const usedApiIds = new Set<string>();
  const mergedCatalog = catalog.map((catalogItem) => {
    const catalogNameKey = normalizeKey(catalogItem.name.ru);

    const apiMatch = apiPrices.find((api) => {
      if (usedApiIds.has(api.id)) return false;
      const apiNameKey = normalizeKey(api.name.ru || api.name.uz || api.name.en);
      const samePrice = Math.abs((api.priceValue ?? 0) - (catalogItem.priceValue ?? 0)) < 1;
      if (!samePrice) return false;
      if (apiNameKey === catalogNameKey) return true;
      return Boolean(findCatalogMatch(api, [catalogItem]));
    });

    if (apiMatch) {
      usedApiIds.add(apiMatch.id);
      return mergeApiOntoCatalog(catalogItem, apiMatch);
    }
    return catalogItem;
  });

  const apiOnly = normalizePriceItems(
    apiPrices
      .filter((api) => !usedApiIds.has(api.id))
      .map((api) => ({
        ...api,
        name: {
          ru: api.name.ru?.includes('???') ? localizePriceName(api.name.uz, 'ru') : api.name.ru,
          uz: api.name.uz,
          en: api.name.en,
        },
      })),
  );

  return filterExcludedPrices([...mergedCatalog, ...apiOnly]);
}

export function getCatalogPrices(): PriceItem[] {
  return filterExcludedPrices(buildCatalogPriceItems());
}
