import { GOOGLE_REVIEWS_CONFIG, resolveGooglePlaceId } from '../src/config/googleReviews';
import { CLINIC_GEO } from '../src/config/links';

const PLACES_API_BASE = 'https://places.googleapis.com/v1';

export interface GooglePlaceReview {
  id: string;
  authorName: string;
  authorUri?: string;
  authorPhotoUri?: string;
  rating: number;
  text: string;
  languageCode?: string;
  publishTime?: string;
  relativeTime?: string;
}

export interface GooglePlaceSnapshot {
  placeId: string;
  displayName: string;
  rating: number;
  userRatingCount: number;
  reviews: GooglePlaceReview[];
}

type PlacesReviewRaw = {
  name?: string;
  relativePublishTimeDescription?: string;
  rating?: number;
  text?: { text?: string; languageCode?: string };
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
  publishTime?: string;
};

type PlacesDetailsRaw = {
  id?: string;
  displayName?: { text?: string };
  rating?: number;
  userRatingCount?: number;
  reviews?: PlacesReviewRaw[];
};

type TextSearchRaw = {
  places?: Array<{ id?: string; displayName?: { text?: string } }>;
};

function getGoogleApiKey(): string {
  const key = process.env.GOOGLE_PLACES_API_KEY?.trim();
  if (!key) {
    throw new Error(
      'GOOGLE_PLACES_API_KEY is not set. Enable Places API (New) in Google Cloud Console.',
    );
  }
  return key;
}

function normalizeReviewId(name?: string): string {
  if (!name) return `unknown-${Date.now()}`;
  const parts = name.split('/');
  return parts[parts.length - 1] || name;
}

function mapReview(raw: PlacesReviewRaw): GooglePlaceReview | null {
  const text = raw.text?.text?.trim();
  const authorName = raw.authorAttribution?.displayName?.trim();
  const rating = raw.rating;

  if (!text || !authorName || !rating || rating < 1) return null;

  return {
    id: normalizeReviewId(raw.name),
    authorName,
    authorUri: raw.authorAttribution?.uri,
    authorPhotoUri: raw.authorAttribution?.photoUri,
    rating: Math.min(5, Math.max(1, Math.round(rating))),
    text,
    languageCode: raw.text?.languageCode,
    publishTime: raw.publishTime,
    relativeTime: raw.relativePublishTimeDescription,
  };
}

async function placesFetch<T>(path: string, init: RequestInit, fieldMask: string): Promise<T> {
  const apiKey = getGoogleApiKey();
  const response = await fetch(`${PLACES_API_BASE}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': fieldMask,
      ...(init.headers as Record<string, string> | undefined),
    },
  });

  if (!response.ok) {
    const body = await response.text().catch(() => '');
    throw new Error(`Google Places API ${response.status}: ${body.slice(0, 400)}`);
  }

  return response.json() as Promise<T>;
}

export async function resolvePlaceIdFromTextSearch(): Promise<string> {
  const payload = {
    textQuery: GOOGLE_REVIEWS_CONFIG.textQuery,
    locationBias: {
      circle: {
        center: {
          latitude: CLINIC_GEO.lat,
          longitude: CLINIC_GEO.lng,
        },
        radius: 800,
      },
    },
    languageCode: 'ru',
    maxResultCount: 1,
  };

  const data = await placesFetch<TextSearchRaw>(
    '/places:searchText',
    { method: 'POST', body: JSON.stringify(payload) },
    'places.id,places.displayName',
  );

  const placeId = data.places?.[0]?.id;
  if (!placeId) {
    throw new Error(
      `Google Place not found for query "${GOOGLE_REVIEWS_CONFIG.textQuery}". Set GOOGLE_PLACE_ID manually.`,
    );
  }

  return placeId;
}

export async function fetchGooglePlaceSnapshot(placeId?: string): Promise<GooglePlaceSnapshot> {
  const resolvedPlaceId = placeId || resolveGooglePlaceId() || (await resolvePlaceIdFromTextSearch());

  const data = await placesFetch<PlacesDetailsRaw>(
    `/places/${encodeURIComponent(resolvedPlaceId)}`,
    { method: 'GET' },
    'id,displayName,rating,userRatingCount,reviews',
  );

  const reviews = (data.reviews ?? [])
    .map(mapReview)
    .filter((item): item is GooglePlaceReview => item !== null);

  return {
    placeId: data.id || resolvedPlaceId,
    displayName: data.displayName?.text || GOOGLE_REVIEWS_CONFIG.textQuery,
    rating: data.rating ?? 0,
    userRatingCount: data.userRatingCount ?? 0,
    reviews,
  };
}
