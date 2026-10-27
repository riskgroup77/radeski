/**
 * CMS collections (partners, reviews, branches, results, videos, ratings) → what the pages
 * render, with the built-in fallbacks. Shared by useCmsData in the browser and the server
 * render (src/ssr), so a server-rendered page and its hydration see the same values.
 */
import type {
  ApiBranchOut,
  ApiClinicRatingOut,
  ApiPartnerOut,
  ApiReviewOut,
  ApiTreatmentResultOut,
  ApiClinicVideoOut,
} from './cmsTypes';
import {
  mapBranchFromApi,
  mapClinicRatingFromApi,
  mapClinicVideoFromApi,
  mapPartnerFromApi,
  mapReviewFromApi,
  mapTreatmentResultFromApi,
  type ClinicRatingDisplay,
} from './cmsMappers';
import type {
  ClinicBranch,
  ClinicPartner,
  ClinicVideo,
  CustomerReview,
  TreatmentResult,
} from '../data/sitePagesContent';
import {
  CLINIC_BRANCHES,
  CLINIC_PARTNERS,
  CUSTOMER_REVIEWS,
  TREATMENT_RESULTS,
} from '../data/sitePagesContent';
import { CLINIC_RATINGS, CLINIC_RATING_SUMMARIES } from '../data';
import { mapApiClinicVideos } from '../utils/clinicVideos';
import { resolvePublicTreatmentResults } from '../utils/treatmentResults';

export interface RawCmsData {
  partners: ApiPartnerOut[];
  reviews: ApiReviewOut[];
  branches: ApiBranchOut[];
  treatmentResults: ApiTreatmentResultOut[];
  videos: ApiClinicVideoOut[];
  clinicRatings: ApiClinicRatingOut[];
}

export interface CmsData {
  partners: ClinicPartner[];
  reviews: CustomerReview[];
  branches: ClinicBranch[];
  treatmentResults: TreatmentResult[];
  videos: ClinicVideo[];
  clinicRatings: ClinicRatingDisplay[];
  /** Every collection came back empty — the site is running on built-in data only. */
  apiFailed: boolean;
}

function withFallback<T>(apiItems: T[], fallback: T[]): T[] {
  return apiItems.length > 0 ? apiItems : fallback;
}

function mergeBranches(apiItems: ClinicBranch[], fallback: ClinicBranch[]): ClinicBranch[] {
  if (apiItems.length === 0) return fallback;

  const haystack = apiItems
    .map((b) => `${b.name.uz} ${b.name.ru} ${b.name.en} ${b.address.uz} ${b.phone}`.toLowerCase())
    .join(' | ');

  const extras = fallback.filter((branch) => {
    if (branch.id === 'liege-rade-skin') {
      return !/liège|liege|belgiya|belgium|rade skin|sauvenière|sauveniere/.test(haystack);
    }
    if (branch.id === 'kokand-branch') {
      return !/qo[‘']?qon|коканд|kokand/.test(haystack);
    }
    if (branch.id === 'fergana-main') {
      return !/farg[‘']?ona|фергана|fergana/.test(haystack);
    }
    return false;
  });

  return [...apiItems, ...extras].sort(
    (a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999),
  );
}

export function mapLegacyRatings(): ClinicRatingDisplay[] {
  return CLINIC_RATINGS.map((item) => ({
    id: item.platform.toLowerCase().replace(/\s+/g, '-'),
    platform: item.platform,
    rating: item.rating,
    count: item.count,
    url: item.url,
    summary: CLINIC_RATING_SUMMARIES[item.platform] ?? { uz: '', ru: '', en: '' },
  }));
}

function mergeCatalogVideos(apiVideos: ClinicVideo[], catalog: ClinicVideo[]): ClinicVideo[] {
  if (apiVideos.length === 0) return mapApiClinicVideos(catalog);
  // API mavjud bo'lsa — faqat API; statik katalog qo'shilmasin (kontent takrorlanmasin).
  return mapApiClinicVideos(apiVideos);
}

/** `catalogVideos`: the built-in video list (~180 KB, loaded with the data, not the shell). */
export function transformCmsData(raw: RawCmsData, catalogVideos: ClinicVideo[]): CmsData {
  return {
    partners: withFallback(raw.partners.map(mapPartnerFromApi), CLINIC_PARTNERS),
    reviews: withFallback(raw.reviews.map(mapReviewFromApi), CUSTOMER_REVIEWS.filter((r) => r.published)),
    branches: mergeBranches(raw.branches.map(mapBranchFromApi), CLINIC_BRANCHES),
    treatmentResults:
      raw.treatmentResults.length > 0
        ? resolvePublicTreatmentResults(raw.treatmentResults.map(mapTreatmentResultFromApi))
        : TREATMENT_RESULTS,
    videos:
      raw.videos.length > 0
        ? mergeCatalogVideos(raw.videos.map(mapClinicVideoFromApi), catalogVideos)
        : mapApiClinicVideos(catalogVideos),
    clinicRatings: raw.clinicRatings.length > 0 ? raw.clinicRatings.map(mapClinicRatingFromApi) : mapLegacyRatings(),
    apiFailed:
      raw.partners.length === 0 &&
      raw.reviews.length === 0 &&
      raw.branches.length === 0 &&
      raw.treatmentResults.length === 0 &&
      raw.videos.length === 0 &&
      raw.clinicRatings.length === 0,
  };
}
