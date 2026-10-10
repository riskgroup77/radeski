/**
 * Turns raw CMS payloads into the shapes the site renders (mapping, enrichment from the
 * built-in catalogs, sorting). Shared by useClinicData in the browser and the build-time
 * prerender, so both show exactly the same doctors, services and articles.
 * Prices are transformed separately (clinicPricesTransform.ts, loaded on demand).
 */
import type { Article, Doctor, ServiceCategory } from '../types';
import type { ApiArticleListItem, ApiDoctor, ApiPrice, ApiServiceCategory } from './types';
import type { ApiSiteTextOut } from './cmsTypes';
import {
  mapArticleListItemFromApi,
  mapDoctorFromApi,
  mapServiceCategoryFromApi,
} from './mappers';
import { ARTICLES, DOCTORS, SERVICE_CATEGORIES } from '../data';
import { hydrateServiceAboutFromSiteTexts } from '../data/serviceAboutCatalog';
import { enrichServiceCategories } from '../utils/enrichServices';
import { enrichArticles } from '../utils/enrichArticles';
import { mergeArticlesWithStaticCatalog } from '../utils/articles';
import { enrichDoctors } from '../utils/enrichDoctors';
import { sortDoctorsFeaturedFirst } from '../utils/doctors';

export interface RawClinicData {
  doctors: ApiDoctor[];
  services: ApiServiceCategory[];
  prices: ApiPrice[];
  articles: ApiArticleListItem[];
  siteTexts: ApiSiteTextOut[];
}

export interface ClinicData {
  doctors: Doctor[];
  serviceCategories: ServiceCategory[];
  articles: Article[];
  /** Every collection came back empty — the site is running on built-in data only. */
  apiFailed: boolean;
}

export function transformClinicData(raw: RawClinicData): ClinicData {
  hydrateServiceAboutFromSiteTexts(raw.siteTexts);

  const doctors = sortDoctorsFeaturedFirst(
    raw.doctors.length > 0 ? enrichDoctors(raw.doctors.map(mapDoctorFromApi)) : DOCTORS,
  );

  const serviceCategories = enrichServiceCategories(
    (raw.services.length > 0 ? raw.services.map(mapServiceCategoryFromApi) : SERVICE_CATEGORIES).sort(
      (a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999),
    ),
  );

  const mappedArticles = raw.articles.map(mapArticleListItemFromApi);
  const articles = enrichArticles(
    mappedArticles.length > 0 ? mergeArticlesWithStaticCatalog(mappedArticles) : ARTICLES,
  );

  return {
    doctors,
    serviceCategories,
    articles,
    apiFailed:
      raw.doctors.length === 0 &&
      raw.services.length === 0 &&
      raw.prices.length === 0 &&
      raw.articles.length === 0,
  };
}
