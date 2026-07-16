import { useCallback, useEffect, useState } from 'react';
import { publicApi } from '../api';
import {
  mapArticleListItemFromApi,
  mapDoctorFromApi,
  mapPriceFromApi,
  mapServiceCategoryFromApi,
} from '../api/mappers';
import { enrichServiceCategories } from '../utils/enrichServices';
import { enrichArticles } from '../utils/enrichArticles';
import { enrichDoctors } from '../utils/enrichDoctors';
import { enrichPrices } from '../utils/enrichPrices';
import { Doctor, ServiceCategory, PriceItem, Article } from '../types';
import { ARTICLES, DOCTORS, PRICES, SERVICE_CATEGORIES } from '../data';
import { hydrateServiceAboutFromSiteTexts } from '../data/serviceAboutCatalog';
import { normalizeArticleViews } from '../utils/articleViews';
import { sortDoctorsFeaturedFirst } from '../utils/doctors';

interface ClinicDataState {
  doctors: Doctor[];
  serviceCategories: ServiceCategory[];
  prices: PriceItem[];
  articles: Article[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  updateArticleViews: (match: { id?: string; slug?: string }, views: number) => void;
}

async function safeApi<T>(label: string, fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    console.warn(`[clinic-data] ${label} failed, using fallback`, error);
    return fallback;
  }
}

export function useClinicData(): ClinicDataState {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [serviceCategories, setServiceCategories] = useState<ServiceCategory[]>([]);
  const [prices, setPrices] = useState<PriceItem[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);

    const [
      doctorsRes,
      servicesRes,
      pricesRes,
      articlesRes,
      siteTextsRes,
    ] = await Promise.all([
      safeApi('doctors', () => publicApi.getDoctors(), []),
      safeApi('services', () => publicApi.getServices(), []),
      safeApi('prices', () => publicApi.getPrices(), []),
      safeApi('articles', () => publicApi.getArticles(), []),
      safeApi('site-texts', () => publicApi.getSiteTexts(), []),
    ]);

    const apiFailed =
      doctorsRes.length === 0 &&
      servicesRes.length === 0 &&
      pricesRes.length === 0 &&
      articlesRes.length === 0;

    if (apiFailed) {
      setError('API vaqtincha ishlamayapti — mahalliy ma\'lumotlar ko\'rsatilmoqda');
    }

    hydrateServiceAboutFromSiteTexts(siteTextsRes);

    setDoctors(
      sortDoctorsFeaturedFirst(
        doctorsRes.length > 0
          ? enrichDoctors(doctorsRes.map(mapDoctorFromApi))
          : DOCTORS,
      ),
    );

    const mappedServices = (
      servicesRes.length > 0
        ? servicesRes.map(mapServiceCategoryFromApi)
        : SERVICE_CATEGORIES
    ).sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));
    setServiceCategories(enrichServiceCategories(mappedServices));

    const mappedPrices = pricesRes.length > 0 ? pricesRes.map(mapPriceFromApi) : PRICES;
    setPrices(enrichPrices(mappedPrices));

    const mappedArticles = articlesRes.map(mapArticleListItemFromApi);
    setArticles(enrichArticles(mappedArticles.length > 0 ? mappedArticles : ARTICLES));

    setLoading(false);
  }, []);

  const updateArticleViews = useCallback((match: { id?: string; slug?: string }, views: number) => {
    const normalizedViews = normalizeArticleViews(views);
    setArticles((prev) => {
      let changed = false;
      const next = prev.map((article) => {
        const isMatch =
          (match.id && article.id === match.id) ||
          (match.slug && (article.slug === match.slug || article.id === match.slug));
        if (!isMatch) return article;
        if (article.views === normalizedViews) return article;
        changed = true;
        return { ...article, views: normalizedViews };
      });
      return changed ? next : prev;
    });
  }, []);

  useEffect(() => {
    void refetch();
  }, [refetch]);

  return {
    doctors,
    serviceCategories,
    prices,
    articles,
    loading,
    error,
    refetch,
    updateArticleViews,
  };
}
