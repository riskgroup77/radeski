import type { Locale, PriceItem } from '../types';
import { localizePriceName } from './localizePriceName';

const CYRILLIC_RE = /[а-яА-ЯёЁ]/;

export function hasCyrillic(text: string): boolean {
  return CYRILLIC_RE.test(text);
}

export function isLocalizedPriceName(name: string | undefined, locale: Locale): boolean {
  const value = name?.trim();
  if (!value || value.includes('???')) return false;
  if (locale === 'ru') return true;
  return !hasCyrillic(value);
}

export function resolvePriceName(item: PriceItem, locale: Locale): string {
  const ru = item.name.ru?.trim() || '';
  const stored = item.name[locale]?.trim();

  if (locale === 'ru') {
    return ru || stored || '';
  }

  if (stored && isLocalizedPriceName(stored, locale)) {
    return stored;
  }

  if (ru) {
    return localizePriceName(ru, locale);
  }

  return stored || '';
}

export function normalizePriceItem(item: PriceItem): PriceItem {
  const ru = item.name.ru?.trim() || item.name.uz?.trim() || item.name.en?.trim() || '';

  if (!ru) return item;

  return {
    ...item,
    name: {
      ru: localizePriceName(ru, 'ru'),
      uz: localizePriceName(ru, 'uz'),
      en: localizePriceName(ru, 'en'),
    },
  };
}

export function normalizePriceItems(items: PriceItem[]): PriceItem[] {
  return items.map(normalizePriceItem);
}
