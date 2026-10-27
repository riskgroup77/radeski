/**
 * Site snapshot (public/data/site-snapshot*.json) → InitialSiteData, exactly as useClinicData /
 * useCmsData would compute it after loading. Used by the prerender (server render) and, through
 * a dynamic import, by main.tsx before hydrating a server-rendered page.
 */
import type { PublicDataKey } from '../api/publicDataSource';
import type { ApiArticleListItem, ApiDoctor, ApiPrice, ApiServiceCategory } from '../api/types';
import type { ApiSiteTextOut } from '../api/cmsTypes';
import { transformClinicData } from '../api/clinicDataTransform';
import { transformClinicPrices } from '../api/clinicPricesTransform';
import { transformCmsData, type RawCmsData } from '../api/cmsDataTransform';
import { CLINIC_VIDEOS } from '../data/clinicVideosCatalog';
import { dictionaryOverridesFromSiteTexts } from '../data/dictionaryOverrides';
import { baseClientCount } from '../utils/clientCount';
import type { InitialSiteData } from './initialSiteData';

export type RawSiteData = Partial<Record<PublicDataKey, unknown>>;

function list<T>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : [];
}

export function buildInitialSiteData(raw: RawSiteData): InitialSiteData {
  const siteTexts = list<ApiSiteTextOut>(raw.siteTexts);
  const clinic = transformClinicData({
    doctors: list<ApiDoctor>(raw.doctors),
    services: list<ApiServiceCategory>(raw.services),
    prices: [],
    articles: list<ApiArticleListItem>(raw.articles),
    siteTexts,
  });
  const cms = transformCmsData(
    {
      partners: list(raw.partners),
      reviews: list(raw.reviews),
      branches: list(raw.branches),
      treatmentResults: list(raw.treatmentResults),
      videos: list(raw.videos),
      clinicRatings: list(raw.clinicRatings),
    } as RawCmsData,
    CLINIC_VIDEOS,
  );
  const apiClientCount = (raw.clientCount as { client_count?: number } | undefined)?.client_count ?? null;

  return {
    clinic: {
      doctors: clinic.doctors,
      serviceCategories: clinic.serviceCategories,
      articles: clinic.articles,
      prices: transformClinicPrices(list<ApiPrice>(raw.prices)),
      dictionaryOverrides: dictionaryOverridesFromSiteTexts(siteTexts),
      error: clinic.apiFailed ? "API vaqtincha ishlamayapti — mahalliy ma'lumotlar ko'rsatilmoqda" : null,
    },
    cms: {
      partners: cms.partners,
      reviews: cms.reviews,
      branches: cms.branches,
      treatmentResults: cms.treatmentResults,
      videos: cms.videos,
      clinicRatings: cms.clinicRatings,
      clientCount: baseClientCount(apiClientCount),
      apiClientCount,
      error: cms.apiFailed ? "CMS API vaqtincha ishlamayapti — mahalliy ma'lumotlar ko'rsatilmoqda" : null,
    },
  };
}
