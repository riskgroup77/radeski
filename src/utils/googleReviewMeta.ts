import { GOOGLE_REVIEWS_CONFIG } from '../config/googleReviews';
import type { CustomerReview } from '../data/sitePagesContent';
import type { ApiReviewOut } from '../api/cmsTypes';
import type { Locale } from '../types';

export type ReviewSource = 'site' | 'google';

const GID_PREFIX = GOOGLE_REVIEWS_CONFIG.gidPrefix;

export function buildGoogleReviewGidField(googleReviewId: string): string {
  return `${GID_PREFIX}${googleReviewId}`;
}

export function extractGoogleReviewId(serviceEn?: string | null): string | null {
  if (!serviceEn?.startsWith(GID_PREFIX)) return null;
  const id = serviceEn.slice(GID_PREFIX.length).trim();
  return id || null;
}

export function isGoogleReviewApiRecord(api: Pick<ApiReviewOut, 'service_en'>): boolean {
  return extractGoogleReviewId(api.service_en) !== null;
}

export function getReviewSource(review: Pick<CustomerReview, 'source'>): ReviewSource {
  return review.source === 'google' ? 'google' : 'site';
}

export function getReviewDisplayService(
  review: CustomerReview,
  locale: Locale,
): string | undefined {
  if (review.source === 'google') {
    return GOOGLE_REVIEWS_CONFIG.serviceLabel[locale];
  }
  return review.service?.[locale] || review.service?.uz || review.service?.ru || review.service?.en;
}

export function googleReviewSourceLabel(locale: Locale): string {
  return locale === 'uz'
    ? 'Google Maps sharhi'
    : locale === 'ru'
      ? 'Отзыв Google Maps'
      : 'Google Maps review';
}
