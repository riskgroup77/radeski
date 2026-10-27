import type { Locale } from '../types';
import { groupDigits } from './formatUzs';

export function normalizeArticleViews(views: unknown): number {
  if (typeof views === 'number' && Number.isFinite(views)) {
    return Math.max(0, Math.round(views));
  }
  const parsed = parseInt(String(views ?? ''), 10);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

/** "12 345" (uz, ru) / "12,345" (en) — without Intl, so server and browser agree (see groupDigits). */
export function formatArticleViewsCount(views: unknown, locale: Locale): string {
  return groupDigits(normalizeArticleViews(views), locale === 'en' ? ',' : ' ');
}

export function formatArticleViewsLabel(views: unknown, locale: Locale): string {
  const count = formatArticleViewsCount(views, locale);
  if (locale === 'uz') return `${count} marta ko'rildi`;
  if (locale === 'ru') return `${count} просмотров`;
  return `${count} views`;
}

export function isApiArticleId(id: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
}
