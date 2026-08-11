import { createReview } from './publicApi';
import { adminLogin, patchReview } from './adminApi';
import { mapReviewToCreatePayload } from './cmsMappers';
import type { CustomerReview } from '../data/sitePagesContent';
import type { ApiReviewOut } from './cmsTypes';

function reviewPublishCredentials(): { username: string; password: string } {
  const username =
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_ADMIN_USERNAME) ||
    (typeof process !== 'undefined' ? process.env.ADMIN_USERNAME : undefined) ||
    'admin';
  const password =
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_ADMIN_PASSWORD) ||
    (typeof process !== 'undefined' ? process.env.ADMIN_PASSWORD : undefined) ||
    'radeski2026';

  return {
    username: String(username).trim() || 'admin',
    password: String(password).trim() || 'radeski2026',
  };
}

/**
 * Public review create always stores unpublished on the API.
 * Immediately publishes via admin so reviews appear on the site without manual approval.
 */
export async function submitAndPublishCustomerReview(
  review: CustomerReview,
): Promise<ApiReviewOut> {
  const created = await createReview(mapReviewToCreatePayload({ ...review, published: true }));

  if (created.published) {
    return created;
  }

  const { username, password } = reviewPublishCredentials();
  const { access_token } = await adminLogin({ username, password });
  return patchReview(created.id, { published: true }, access_token);
}
