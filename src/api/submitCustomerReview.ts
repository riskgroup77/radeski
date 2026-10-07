import { ApiError } from './client';
import { createReview } from './publicApi';
import { mapReviewToCreatePayload } from './cmsMappers';
import type { CustomerReview } from '../data/sitePagesContent';
import type { ApiReviewOut } from './cmsTypes';

/**
 * Saves a visitor review. Publishing happens on our server (POST /api/reviews/submit), which
 * holds the admin credentials — the browser never sees them. If that endpoint is not
 * reachable, the review is still saved and waits for moderation in the admin panel.
 */
export async function submitAndPublishCustomerReview(review: CustomerReview): Promise<ApiReviewOut> {
  const payload = mapReviewToCreatePayload({ ...review, published: true });

  try {
    const response = await fetch('/api/reviews/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (response.ok) return (await response.json()) as ApiReviewOut;
    if (response.status === 400 || response.status === 429) {
      const body = await response.json().catch(() => ({}));
      throw new ApiError(response.status, body?.error ?? body, body?.error);
    }
    // 404/5xx: publishing service unavailable — fall through to a plain (moderated) submit.
  } catch (error) {
    if (error instanceof ApiError) throw error;
  }

  return createReview(payload);
}
