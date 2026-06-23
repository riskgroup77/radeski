import {
  CUSTOMER_REVIEWS,
  type CustomerReview,
} from '../data/sitePagesContent';

export const CUSTOMER_REVIEWS_STORAGE_KEY = 'radeski_customer_reviews_v1';
export const CUSTOMER_REVIEWS_UPDATED_EVENT = 'radeski-customer-reviews-updated';

function parseStoredArray<T>(raw: string | null): T[] | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as T[]) : null;
  } catch {
    return null;
  }
}

export function loadCustomerReviews(): CustomerReview[] {
  const stored = parseStoredArray<CustomerReview>(
    localStorage.getItem(CUSTOMER_REVIEWS_STORAGE_KEY),
  );
  return stored ?? CUSTOMER_REVIEWS;
}

export function saveCustomerReviews(reviews: CustomerReview[]): void {
  localStorage.setItem(CUSTOMER_REVIEWS_STORAGE_KEY, JSON.stringify(reviews));
  window.dispatchEvent(new CustomEvent(CUSTOMER_REVIEWS_UPDATED_EVENT));
}

export function getPublishedReviews(reviews: CustomerReview[]): CustomerReview[] {
  return reviews.filter((review) => review.published);
}
