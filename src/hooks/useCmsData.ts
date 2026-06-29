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
import { ApiError } from '../api/client';
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
} from '../data/sitePagesContent';
import { CLINIC_RATINGS, CLINIC_RATING_SUMMARIES } from '../data';
import { getCachedClientCount, resolveClientCount, setCachedClientCount } from '../utils/clientCount';

function withFallback<T>(apiItems: T[], fallback: T[]): T[] {
  return apiItems.length > 0 ? apiItems : fallback;
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

export function useCmsData(): CmsDataState {
  const [partners, setPartners] = useState<ClinicPartner[]>(CLINIC_PARTNERS);
  const [reviews, setReviews] = useState<CustomerReview[]>(CUSTOMER_REVIEWS);
  const [branches, setBranches] = useState<ClinicBranch[]>(CLINIC_BRANCHES);
  const [treatmentResults, setTreatmentResults] = useState<TreatmentResult[]>([]);
  const [videos, setVideos] = useState<ClinicVideo[]>([]);
  const [clinicRatings, setClinicRatings] = useState<ClinicRatingDisplay[]>(mapLegacyRatings());
  const [clientCount, setClientCount] = useState(() => getCachedClientCount());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const [
        partnersRes,
        reviewsRes,
        branchesRes,
        resultsRes,
        videosRes,
        ratingsRes,
        countRes,
      ] = await Promise.all([
        publicApi.getPartners(),
        publicApi.getReviews(true),
        publicApi.getBranches(),
        publicApi.getTreatmentResults(),
        publicApi.getVideos(),
        publicApi.getClinicRatings(),
        publicApi.getClientCount(),
      ]);

      setPartners(withFallback(partnersRes.map(mapPartnerFromApi), CLINIC_PARTNERS));
      setReviews(withFallback(reviewsRes.map(mapReviewFromApi), CUSTOMER_REVIEWS.filter((r) => r.published)));
      setBranches(withFallback(branchesRes.map(mapBranchFromApi), CLINIC_BRANCHES));
      setTreatmentResults(
        resultsRes
          .map(mapTreatmentResultFromApi)
          .filter((result) => result.published !== false)
          .sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999)),
      );
      setVideos(
        videosRes
          .map(mapClinicVideoFromApi)
          .filter((video) => video.isActive !== false)
          .sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999)),
      );
      setClinicRatings(
        ratingsRes.length > 0 ? ratingsRes.map(mapClinicRatingFromApi) : mapLegacyRatings(),
      );
      const count = resolveClientCount(countRes.client_count);
      setClientCount(count);
      setCachedClientCount(count);
    } catch (err) {
      const message =
        err instanceof ApiError
          ? err.message
          : err instanceof Error
            ? err.message
            : 'CMS ma\'lumotlarini yuklashda xatolik';
      setError(message);
    } finally {
      setLoading(false);
    }
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
