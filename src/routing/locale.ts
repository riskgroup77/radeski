import { Locale } from '../types';

export const LOCALE_STORAGE_KEY = 'radeski_locale_v1';

export const LOCALES: Locale[] = ['uz', 'ru', 'en'];

const LOCALE_ALIASES: Record<string, Locale> = {
  uz: 'uz',
  ru: 'ru',
  en: 'en',
  rus: 'ru',
  eng: 'en',
};

export function normalizeLocaleParam(value: string | undefined): Locale | null {
  if (!value) return null;
  return LOCALE_ALIASES[value.toLowerCase()] ?? null;
}

export function getStoredLocale(): Locale | null {
  try {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
    return saved ? normalizeLocaleParam(saved) : null;
  } catch {
    return null;
  }
}

export function saveLocale(locale: Locale): void {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // ignore storage errors (private mode, etc.)
  }
}

export function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return 'uz';

  const lang = navigator.language?.toLowerCase() ?? '';
  if (lang.startsWith('ru')) return 'ru';
  if (lang.startsWith('en')) return 'en';
  return 'uz';
}

export function getPreferredLocale(): Locale {
  return getStoredLocale() ?? detectBrowserLocale();
}

export function localeToHreflang(locale: Locale): string {
  switch (locale) {
    case 'uz':
      return 'uz-UZ';
    case 'ru':
      return 'ru-RU';
    case 'en':
      return 'en-US';
  }
}

export function localeToOgLocale(locale: Locale): string {
  switch (locale) {
    case 'uz':
      return 'uz_UZ';
    case 'ru':
      return 'ru_RU';
    case 'en':
      return 'en_US';
  }
}
