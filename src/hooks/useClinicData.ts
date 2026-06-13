import { useCallback, useEffect, useState } from 'react';
import { publicApi } from '../api';
import {
  mapArticleListItemFromApi,
  mapDoctorFromApi,
  mapPriceFromApi,
  mapServiceCategoryFromApi,
} from '../api/mappers';
import { ApiError } from '../api/client';
import { Doctor, ServiceCategory, PriceItem, Article } from '../types';

interface ClinicDataState {
  doctors: Doctor[];
  serviceCategories: ServiceCategory[];
  prices: PriceItem[];
  articles: Article[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
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
      setServiceCategories(servicesRes.map(mapServiceCategoryFromApi));
      setPrices(pricesRes.map(mapPriceFromApi));
      setArticles(articlesRes.map(mapArticleListItemFromApi));
    } catch (err) {
      const message =
        err instanceof ApiError
          ? err.message
          : err instanceof Error
            ? err.message
            : 'Ma\'lumotlarni yuklashda xatolik yuz berdi';
      setError(message);
    } finally {
      setLoading(false);
    }
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
  };
}
