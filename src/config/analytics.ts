/**
 * Web analytics IDs. Leave empty to disable a provider (nothing is loaded).
 *   GA4:            Google Analytics → Admin → Data streams → Measurement ID ("G-XXXXXXX")
 *   Yandex Metrika: metrika.yandex.ru → counter number (digits only)
 * Can also be set at build time with VITE_GA4_ID / VITE_YM_ID.
 */
export const GA4_MEASUREMENT_ID: string = import.meta.env?.VITE_GA4_ID || '';
export const YANDEX_METRIKA_ID: string = import.meta.env?.VITE_YM_ID || '';
