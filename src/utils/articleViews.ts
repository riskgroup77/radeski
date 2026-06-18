import type { Locale } from '../types';

export function normalizeArticleViews(views: unknown): number {
  if (typeof views === 'number' && Number.isFinite(views)) {
    return Math.max(0, Math.round(views));
  }
  const parsed = parseInt(String(views ?? ''), 10);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

function viewsLocale(locale: Locale): string {
  if (locale === 'uz') return 'uz-UZ';
  if (locale === 'ru') return 'ru-RU';
  return 'en-US';
}

export function formatArticleViewsCount(views: unknown, locale: Locale): string {
  return normalizeArticleViews(views).toLocaleString(viewsLocale(locale));
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
