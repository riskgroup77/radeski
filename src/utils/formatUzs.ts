import type { Locale } from '../types';

/** "90 000 so‘m" / "90 000 сум" / "90,000 UZS". */
export function formatUzs(value: number, locale: Locale): string {
  const digits = Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, locale === 'en' ? ',' : ' ');
  return locale === 'uz' ? `${digits} so‘m` : locale === 'ru' ? `${digits} сум` : `${digits} UZS`;
}
