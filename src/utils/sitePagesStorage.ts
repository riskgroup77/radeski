import {
  CLINIC_VIDEOS,
  TREATMENT_RESULTS,
  CLINIC_PARTNERS,
  type ClinicVideo,
  type TreatmentResult,
  type ClinicPartner,
} from '../data/sitePagesContent';

export const SITE_PAGES_STORAGE_KEYS = {
  videos: 'radeski_clinic_videos_v1',
  results: 'radeski_treatment_results_v1',
  partners: 'radeski_clinic_partners_v1',
} as const;

function parseStoredArray<T>(raw: string | null): T[] | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as T[]) : null;
  } catch {
    return null;
  }
}

export function loadClinicVideos(): ClinicVideo[] {
  const stored = parseStoredArray<ClinicVideo>(
    localStorage.getItem(SITE_PAGES_STORAGE_KEYS.videos),
  );
  return stored ?? CLINIC_VIDEOS;
}

export function loadTreatmentResults(): TreatmentResult[] {
  const stored = parseStoredArray<TreatmentResult>(
    localStorage.getItem(SITE_PAGES_STORAGE_KEYS.results),
  );
  return stored ?? TREATMENT_RESULTS;
}

export function loadClinicPartners(): ClinicPartner[] {
  const stored = parseStoredArray<ClinicPartner>(
    localStorage.getItem(SITE_PAGES_STORAGE_KEYS.partners),
  );
  return stored ?? CLINIC_PARTNERS;
}
