/**
 * Site data a server-rendered page was built with (routes: src/ssr/ssrRoutes.ts).
 *
 * The prerender sets it before rendering a page to HTML; the browser sets it from the same
 * snapshot before hydrating that HTML. useClinicData / useCmsData then start from it instead
 * of empty lists, so the first client render matches the server HTML and no fetch is needed.
 * Unset on pages that are not server-rendered — the hooks load their data as before.
 */
import type { ClinicRatingDisplay } from '../api/cmsMappers';
import type { DictionaryOverrides } from '../data/dictionaryOverrides';
import type {
  ClinicBranch,
  ClinicPartner,
  ClinicVideo,
  CustomerReview,
  TreatmentResult,
} from '../data/sitePagesContent';
import type { Article, Doctor, PriceItem, ServiceCategory } from '../types';

export interface InitialSiteData {
  clinic: {
    doctors: Doctor[];
    serviceCategories: ServiceCategory[];
    articles: Article[];
    prices: PriceItem[];
    dictionaryOverrides: DictionaryOverrides;
    error: string | null;
  };
  cms: {
    partners: ClinicPartner[];
    reviews: CustomerReview[];
    branches: ClinicBranch[];
    treatmentResults: TreatmentResult[];
    videos: ClinicVideo[];
    clinicRatings: ClinicRatingDisplay[];
    /** Count from the snapshot only (the browser's stored count is applied after hydration). */
    clientCount: number;
    /** Raw API count, for that post-hydration update. */
    apiClientCount: number | null;
    error: string | null;
  };
}

let initialSiteData: InitialSiteData | null = null;

export function setInitialSiteData(data: InitialSiteData | null): void {
  initialSiteData = data;
}

export function getInitialSiteData(): InitialSiteData | null {
  return initialSiteData;
}
