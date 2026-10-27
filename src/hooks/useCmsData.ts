import { useCallback, useEffect, useRef, useState } from 'react';
import { publicApi } from '../api';
import { loadPublicData, type PublicDataOptions } from '../api/publicDataSource';
import type { ClinicRatingDisplay } from '../api/cmsMappers';
import { mapLegacyRatings, transformCmsData } from '../api/cmsDataTransform';
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
import { getCachedClientCount, resolveClientCount, setCachedClientCount } from '../utils/clientCount';
import { getInitialSiteData } from '../ssr/initialSiteData';

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
  /** `live: true` skips the browser cache/snapshot (e.g. right after a visitor posts a review). */
  refetch: (options?: PublicDataOptions) => Promise<void>;
}

export function useCmsData(options: PublicDataOptions = {}): CmsDataState {
  const live = Boolean(options.live);
  // Server-rendered page: start from the data its HTML was rendered with (no fetch needed).
  const [initial] = useState(() => (live ? null : getInitialSiteData()?.cms ?? null));
  const [partners, setPartners] = useState<ClinicPartner[]>(initial?.partners ?? CLINIC_PARTNERS);
  const [reviews, setReviews] = useState<CustomerReview[]>(initial?.reviews ?? CUSTOMER_REVIEWS);
  const [branches, setBranches] = useState<ClinicBranch[]>(initial?.branches ?? CLINIC_BRANCHES);
  const [treatmentResults, setTreatmentResults] = useState<TreatmentResult[]>(initial?.treatmentResults ?? TREATMENT_RESULTS);
  const [videos, setVideos] = useState<ClinicVideo[]>(initial?.videos ?? []);
  const [clinicRatings, setClinicRatings] = useState<ClinicRatingDisplay[]>(() => initial?.clinicRatings ?? mapLegacyRatings());
  const [clientCount, setClientCount] = useState(() => initial?.clientCount ?? getCachedClientCount());
  const [loading, setLoading] = useState(!initial);
  const [error, setError] = useState<string | null>(initial?.error ?? null);

  const refetch = useCallback(async (refetchOptions?: PublicDataOptions) => {
    const liveFetch = live || Boolean(refetchOptions?.live);
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
      { CLINIC_VIDEOS },
    ] = await Promise.all([
      loadPublicData('partners', () => publicApi.getPartners(), [], { live: liveFetch }),
      loadPublicData('reviews', () => publicApi.getReviews(true), [], { live: liveFetch }),
      loadPublicData('branches', () => publicApi.getBranches(), [], { live: liveFetch }),
      loadPublicData('treatmentResults', () => publicApi.getTreatmentResults(), [], { live: liveFetch }),
      loadPublicData('videos', () => publicApi.getVideos(), [], { live: liveFetch }),
      loadPublicData('clinicRatings', () => publicApi.getClinicRatings(), [], { live: liveFetch }),
      loadPublicData('clientCount', () => publicApi.getClientCount(), { client_count: getCachedClientCount() }, { live: liveFetch }),
      // ~180 KB of built-in video texts: fetched with the CMS data instead of the app shell.
      import('../data/clinicVideosCatalog'),
    ]);

    const data = transformCmsData(
      {
        partners: partnersRes,
        reviews: reviewsRes,
        branches: branchesRes,
        treatmentResults: resultsRes,
        videos: videosRes,
        clinicRatings: ratingsRes,
      },
      CLINIC_VIDEOS,
    );
    if (data.apiFailed) {
      setError("CMS API vaqtincha ishlamayapti — mahalliy ma'lumotlar ko'rsatilmoqda");
    }

    setPartners(data.partners);
    setReviews(data.reviews);
    setBranches(data.branches);
    setTreatmentResults(data.treatmentResults);
    setVideos(data.videos);
    setClinicRatings(data.clinicRatings);
    const count = resolveClientCount(countRes.client_count);
    setClientCount(count);
    setCachedClientCount(count);

    setLoading(false);
  }, [live]);

  const skipInitialFetch = useRef(Boolean(initial));
  useEffect(() => {
    if (skipInitialFetch.current) {
      skipInitialFetch.current = false;
      // The count stored in this browser (local +1s) may be higher than the server's.
      const count = resolveClientCount(initial?.apiClientCount);
      setClientCount(count);
      setCachedClientCount(count);
      return;
    }
    void refetch();
  }, [refetch, initial]);

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
