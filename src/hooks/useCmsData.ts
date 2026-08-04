import { useCallback, useEffect, useState } from 'react';
import { publicApi } from '../api';
import {
  mapBranchFromApi,
  mapClinicRatingFromApi,
  mapClinicVideoFromApi,
  mapPartnerFromApi,
  mapReviewFromApi,
  mapTreatmentResultFromApi,
  type ClinicRatingDisplay,
} from '../api/cmsMappers';
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
import { getCachedClientCount, resolveClientCount, setCachedClientCount } from '../utils/clientCount';
import { mapApiClinicVideos } from '../utils/clinicVideos';
import { resolvePublicTreatmentResults } from '../utils/treatmentResults';

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

function mapLegacyRatings(): ClinicRatingDisplay[] {
  return CLINIC_RATINGS.map((item) => ({
    id: item.platform.toLowerCase().replace(/\s+/g, '-'),
    platform: item.platform,
    rating: item.rating,
    count: item.count,
    url: item.url,
    summary: CLINIC_RATING_SUMMARIES[item.platform] ?? { uz: '', ru: '', en: '' },
  }));
}

interface CmsDataState {
  partners: ClinicPartner[];
  reviews: CustomerReview[];
  branches: ClinicBranch[];
  treatmentResults: TreatmentResult[];
  videos: ClinicVideo[];
  clinicRatings: ClinicRatingDisplay[];
  clientCount: number;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

async function safeApi<T>(label: string, fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    console.warn(`[cms-data] ${label} failed, using fallback`, error);
    return fallback;
  }
}

export function useCmsData(): CmsDataState {
  const [partners, setPartners] = useState<ClinicPartner[]>(CLINIC_PARTNERS);
  const [reviews, setReviews] = useState<CustomerReview[]>(CUSTOMER_REVIEWS);
  const [branches, setBranches] = useState<ClinicBranch[]>(CLINIC_BRANCHES);
  const [treatmentResults, setTreatmentResults] = useState<TreatmentResult[]>(TREATMENT_RESULTS);
  const [videos, setVideos] = useState<ClinicVideo[]>([]);
  const [clinicRatings, setClinicRatings] = useState<ClinicRatingDisplay[]>(mapLegacyRatings());
  const [clientCount, setClientCount] = useState(() => getCachedClientCount());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);

    const [
      partnersRes,
      reviewsRes,
      branchesRes,
      resultsRes,
      videosRes,
      ratingsRes,
      countRes,
    ] = await Promise.all([
      safeApi('partners', () => publicApi.getPartners(), []),
      safeApi('reviews', () => publicApi.getReviews(true), []),
      safeApi('branches', () => publicApi.getBranches(), []),
      safeApi('treatment-results', () => publicApi.getTreatmentResults(), []),
      safeApi('videos', () => publicApi.getVideos(), []),
      safeApi('clinic-ratings', () => publicApi.getClinicRatings(), []),
      safeApi('client-count', () => publicApi.getClientCount(), { client_count: getCachedClientCount() }),
    ]);

    const apiFailed =
      partnersRes.length === 0 &&
      reviewsRes.length === 0 &&
      branchesRes.length === 0 &&
      resultsRes.length === 0 &&
      videosRes.length === 0 &&
      ratingsRes.length === 0;

    if (apiFailed) {
      setError('CMS API vaqtincha ishlamayapti — mahalliy ma\'lumotlar ko\'rsatilmoqda');
    }

    setPartners(withFallback(partnersRes.map(mapPartnerFromApi), CLINIC_PARTNERS));
    setReviews(withFallback(reviewsRes.map(mapReviewFromApi), CUSTOMER_REVIEWS.filter((r) => r.published)));
    setBranches(mergeBranches(branchesRes.map(mapBranchFromApi), CLINIC_BRANCHES));
    setTreatmentResults(
      resultsRes.length > 0
        ? resolvePublicTreatmentResults(resultsRes.map(mapTreatmentResultFromApi))
        : TREATMENT_RESULTS,
    );
    setVideos(
      videosRes.length > 0 ? mapApiClinicVideos(videosRes.map(mapClinicVideoFromApi)) : [],
    );
    setClinicRatings(
      ratingsRes.length > 0 ? ratingsRes.map(mapClinicRatingFromApi) : mapLegacyRatings(),
    );
    const count = resolveClientCount(countRes.client_count);
    setClientCount(count);
    setCachedClientCount(count);

    setLoading(false);
  }, []);

  useEffect(() => {
    void refetch();
  }, [refetch]);

  return {
    partners,
    reviews,
    branches,
    treatmentResults,
    videos,
    clinicRatings,
    clientCount,
    loading,
    error,
    refetch,
  };
}

export type { ClinicRatingDisplay };
