import type { Locale } from '../types';

/**
 * "1 500 000" — thousands grouped without Intl. Browsers ship different locale data (Chrome has
 * no uz-UZ and falls back to "1,500,000", Node has it), and a server-rendered page must format
 * numbers exactly as the browser that hydrates it. Default separator: no-break space.
 */
export function groupDigits(value: number, separator = ' '): string {
  return Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

/** "90 000 so‘m" / "90 000 сум" / "90,000 UZS". */
export function formatUzs(value: number, locale: Locale): string {
  const digits = groupDigits(value, locale === 'en' ? ',' : ' ');
  return locale === 'uz' ? `${digits} so‘m` : locale === 'ru' ? `${digits} сум` : `${digits} UZS`;
}
