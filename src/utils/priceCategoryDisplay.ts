import type { Locale } from '../types';
import { getPriceCategoryLabel } from '../data/priceCategoryLabels';
import { localizePriceName } from './localizePriceName';

/** Bo'lim sarlavhasi — statik label yoki RU nomdan tarjima. */
export function resolvePriceCategoryLabel(
  categoryId: string,
  locale: Locale,
  fallbackRu?: string,
): string {
  const key = categoryId;
  const staticLabel = getPriceCategoryLabel(key, locale);
  if (staticLabel !== categoryId) return staticLabel;
  if (fallbackRu?.trim()) {
    return localizePriceName(fallbackRu, locale);
  }
  return categoryId;
}
