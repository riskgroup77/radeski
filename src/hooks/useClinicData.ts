import { useCallback, useEffect, useState } from 'react';import { publicApi } from '../api';
import {
  mapArticleListItemFromApi,
  mapDoctorFromApi,
  mapPriceFromApi,
  mapServiceCategoryFromApi,
} from '../api/mappers';
import { enrichServiceCategories } from '../utils/enrichServices';
import { enrichArticles } from '../utils/enrichArticles';
import { enrichPrices } from '../utils/enrichPrices';
import { ApiError } from '../api/client';
import { Doctor, ServiceCategory, PriceItem, Article } from '../types';
import { ARTICLES } from '../data';
import { normalizeArticleViews } from '../utils/articleViews';

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

    try {
      const [doctorsRes, servicesRes, pricesRes, articlesRes] = await Promise.all([
        publicApi.getDoctors(),
        publicApi.getServices(),
        publicApi.getPrices(),
        publicApi.getArticles(),
      ]);

      setDoctors(doctorsRes.map(mapDoctorFromApi));
      const mappedServices = servicesRes
        .map(mapServiceCategoryFromApi)
        .sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));
      setServiceCategories(enrichServiceCategories(mappedServices));
      setPrices(enrichPrices(pricesRes.map(mapPriceFromApi)));
      const mappedArticles = articlesRes.map(mapArticleListItemFromApi);
      setArticles(enrichArticles(mappedArticles.length > 0 ? mappedArticles : ARTICLES));
    } catch (err) {
      const message =
        err instanceof ApiError
          ? err.message
          : err instanceof Error
            ? err.message
            : 'Ma\'lumotlarni yuklashda xatolik yuz berdi';
      setError(message);
      setPrices(enrichPrices([]));
    } finally {
      setLoading(false);
    }
  }, []);

  const updateArticleViews = useCallback((match: { id?: string; slug?: string }, views: number) => {
    const normalizedViews = normalizeArticleViews(views);
    setArticles((prev) =>
      prev.map((article) => {
        const isMatch =
          (match.id && article.id === match.id) ||
          (match.slug && (article.slug === match.slug || article.id === match.slug));
        if (!isMatch) return article;
        return { ...article, views: normalizedViews };
      }),
    );
  }, []);

  useEffect(() => {
    refetch();
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
