import { CLINIC_GEO, CLINIC_REVIEW_LINKS } from './links';

/** Google Places API (New) — klinika profili */
export const GOOGLE_REVIEWS_CONFIG = {
  textQuery: 'Radeski Skin & Aesthetic Clinic Fergana',
  location: CLINIC_GEO,
  mapsUrl: CLINIC_REVIEW_LINKS.googleMaps,
  /** service_en maydonidagi Google review ID prefiksi */
  gidPrefix: '__gid__:',
  serviceLabel: {
    uz: 'Google Maps',
    ru: 'Google Maps',
    en: 'Google Maps',
  },
} as const;

/** .env dan Place ID olish (server/script) */
export function resolveGooglePlaceId(): string | undefined {
  return process.env.GOOGLE_PLACE_ID?.trim() || undefined;
}
