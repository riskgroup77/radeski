import type { Locale, PriceItem } from '../types';
import type { HomePromoSlide } from '../data/homePromoCarousel';
import { formatPriceValue } from '../api/mappers';
import { buildCatalogPriceItems } from './priceCatalog';
import { resolvePriceName } from './priceDisplay';
import { getPromoText } from '../data/homePromoCarousel';

function normalize(text: string): string {
  return text.toLowerCase().replace(/ё/g, 'е');
}

function matchesKeywords(item: PriceItem, keywords: string[], locale: Locale): boolean {
  const haystack = normalize(
    `${item.name.ru} ${item.name.uz} ${item.name.en} ${resolvePriceName(item, locale)}`,
  );
  return keywords.some((kw) => haystack.includes(normalize(kw)));
}

function pickLowestPrice(items: PriceItem[]): PriceItem | null {
  if (items.length === 0) return null;
  return [...items].sort((a, b) => (a.priceValue ?? 0) - (b.priceValue ?? 0))[0] ?? null;
}

export function resolvePromoSlidePrice(
  slide: HomePromoSlide,
  livePrices: PriceItem[] | undefined,
  locale: Locale,
): { priceText: string; serviceName: string; isRange: boolean } {
  if (slide.fixedPriceText) {
    return {
      priceText: getPromoText(slide.fixedPriceText, locale),
      serviceName: '',
      isRange: true,
    };
  }

  const catalog = buildCatalogPriceItems();
  const pool = livePrices?.length ? livePrices : catalog;

  let candidates = pool.filter((item) => item.category === slide.priceCategoryId);

  if (slide.priceKeywords?.length) {
    const filtered = candidates.filter((item) => matchesKeywords(item, slide.priceKeywords!, locale));
    if (filtered.length > 0) candidates = filtered;
  }

  const match = pickLowestPrice(candidates);

  if (match) {
    return {
      priceText: match.price || formatPriceValue(match.priceValue ?? 0),
      serviceName: resolvePriceName(match, locale),
      isRange: false,
    };
  }

  if (slide.fallbackPriceValue) {
    return {
      priceText: formatPriceValue(slide.fallbackPriceValue),
      serviceName: '',
      isRange: false,
    };
  }

  return { priceText: '', serviceName: '', isRange: false };
}
