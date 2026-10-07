import {
  adminLogin,
  createAdminReview,
  getAdminClinicRatings,
  getAdminReviews,
  patchReview,
  updateClinicRating,
} from '../src/api/adminApi';
import { GOOGLE_REVIEWS_CONFIG } from '../src/config/googleReviews';
import { buildGoogleReviewGidField, extractGoogleReviewId } from '../src/utils/googleReviewMeta';
import { fetchGooglePlaceSnapshot, type GooglePlaceReview } from './googlePlacesClient';
import { loadProjectEnv } from './loadEnv';

export interface GoogleReviewsSyncResult {
  placeId: string;
  displayName: string;
  fetchedReviews: number;
  created: number;
  skipped: number;
  republished: number;
  ratingUpdated: boolean;
  aggregateRating: number;
  aggregateCount: number;
}

const REQUEST_DELAY_MS = Number(process.env.SYNC_DELAY_MS || 350);
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function requireAdminCredentials(): { username: string; password: string } {
  const username = process.env.ADMIN_USERNAME?.trim();
  const password = process.env.ADMIN_PASSWORD?.trim();
  if (!username || !password) {
    throw new Error('ADMIN_USERNAME and ADMIN_PASSWORD are required for Google reviews sync.');
  }
  return { username, password };
}

function reviewDateFromGoogle(review: GooglePlaceReview): string {
  if (review.publishTime) {
    const parsed = review.publishTime.slice(0, 10);
    if (/^\d{4}-\d{2}-\d{2}$/.test(parsed)) return parsed;
  }
  return new Date().toISOString().slice(0, 10);
}

function localizedCommentFromGoogle(review: GooglePlaceReview) {
  const text = review.text;
  const lang = (review.languageCode || '').toLowerCase();

  if (lang.startsWith('ru')) {
    return { uz: text, ru: text, en: text };
  }
  if (lang.startsWith('en')) {
    return { uz: text, en: text, ru: text };
  }
  return { uz: text, ru: text, en: text };
}

function buildAdminReviewPayload(review: GooglePlaceReview) {
  const comment = localizedCommentFromGoogle(review);
  return {
    author_name: review.authorName,
    rating: review.rating,
    comment_uz: comment.uz,
    comment_ru: comment.ru,
    comment_en: comment.en,
    service_uz: GOOGLE_REVIEWS_CONFIG.serviceLabel.uz,
    service_ru: GOOGLE_REVIEWS_CONFIG.serviceLabel.ru,
    service_en: buildGoogleReviewGidField(review.id),
    published: true,
  };
}

function isGooglePlatform(platform: string): boolean {
  return /google/i.test(platform);
}

export async function syncGoogleReviewsToApi(options?: {
  placeId?: string;
  dryRun?: boolean;
}): Promise<GoogleReviewsSyncResult> {
  loadProjectEnv();

  const snapshot = await fetchGooglePlaceSnapshot(options?.placeId);
  const dryRun = Boolean(options?.dryRun);

  if (dryRun) {
    return {
      placeId: snapshot.placeId,
      displayName: snapshot.displayName,
      fetchedReviews: snapshot.reviews.length,
      created: 0,
      skipped: snapshot.reviews.length,
      republished: 0,
      ratingUpdated: false,
      aggregateRating: snapshot.rating,
      aggregateCount: snapshot.userRatingCount,
    };
  }

  const { username, password } = requireAdminCredentials();
  const tokenRes = await adminLogin({ username, password });
  const access_token = tokenRes.access_token;

  const existingReviews = await getAdminReviews(access_token);
  const byGoogleId = new Map<string, (typeof existingReviews)[number]>();

  for (const item of existingReviews) {
    const gid = extractGoogleReviewId(item.service_en);
    if (gid) byGoogleId.set(gid, item);
  }

  let created = 0;
  let skipped = 0;
  let republished = 0;

  for (const review of snapshot.reviews) {
    const match = byGoogleId.get(review.id);

    if (match) {
      if (!match.published) {
        await patchReview(match.id, { published: true }, access_token);
        republished++;
      } else {
        skipped++;
      }
      await sleep(REQUEST_DELAY_MS);
      continue;
    }

    await createAdminReview(buildAdminReviewPayload(review), access_token);
    created++;
    await sleep(REQUEST_DELAY_MS);
  }

  let ratingUpdated = false;
  const clinicRatings = await getAdminClinicRatings(access_token);
  const googleRating = clinicRatings.find((item) => isGooglePlatform(item.platform));

  if (googleRating && snapshot.userRatingCount > 0) {
    await updateClinicRating(
      googleRating.id,
      {
        rating: snapshot.rating,
        review_count: snapshot.userRatingCount,
        url: GOOGLE_REVIEWS_CONFIG.mapsUrl,
      },
      access_token,
    );
    ratingUpdated = true;
  }

  return {
    placeId: snapshot.placeId,
    displayName: snapshot.displayName,
    fetchedReviews: snapshot.reviews.length,
    created,
    skipped,
    republished,
    ratingUpdated,
    aggregateRating: snapshot.rating,
    aggregateCount: snapshot.userRatingCount,
  };
}
