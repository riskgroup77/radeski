import type { Locale } from '../types';

/**
 * The Daavlin model menu in the header: ids and names only, so the header (on every page)
 * does not pull the full Daavlin page texts into the main bundle. Must match
 * DAAVLIN_NAV_LINEUP in daavlinFotoKabinalariContent.ts — the prerender build fails if not.
 */
export const DAAVLIN_NAV_MODELS: readonly { id: string; name: string }[] = [
  { id: '7-series', name: '7 Series' },
  { id: '1-series', name: '1 Series' },
  { id: 'uv-series', name: 'UV Series' },
  { id: 'dermapal', name: 'DermaPal' },
  { id: 'm-series', name: 'M Series' },
  { id: 'neolux', name: 'NeoLux' },
  { id: 'aquex', name: 'Aquex' },
];

export const DAAVLIN_MODELS_NAV_TITLE: Record<Locale, string> = {
  uz: 'Asosiy modellar va uskunalar',
  ru: 'Основные модели и аппараты',
  en: 'Core models & devices',
};

export const DAAVLIN_MODELS_NAV_ALL: Record<Locale, string> = {
  uz: 'Barcha modellar qatori',
  ru: 'Весь модельный ряд',
  en: 'Full model range',
};
