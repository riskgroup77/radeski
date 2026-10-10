import { useCallback, useEffect, useState } from 'react';
import { publicApi } from '../api';
import { loadPublicData, type PublicDataOptions } from '../api/publicDataSource';
import { transformClinicData } from '../api/clinicDataTransform';
import { Doctor, ServiceCategory, PriceItem, Article } from '../types';
import { ARTICLES } from '../data';
import { normalizeArticleViews } from '../utils/articleViews';
import { dictionaryOverridesFromSiteTexts, type DictionaryOverrides } from '../data/dictionaryOverrides';

interface ClinicDataState {
  doctors: Doctor[];
  serviceCategories: ServiceCategory[];
  prices: PriceItem[];
  /** The price list is translated in a separate chunk; true until it is ready. */
  pricesLoading: boolean;
  articles: Article[];
  /** Clinic texts edited in the admin panel (address, hours) — applied over DICTIONARY. */
  dictionaryOverrides: DictionaryOverrides;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  updateArticleViews: (match: { id?: string; slug?: string }, views: number) => void;
}

export function useClinicData(options: PublicDataOptions = {}): ClinicDataState {
  const live = Boolean(options.live);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [serviceCategories, setServiceCategories] = useState<ServiceCategory[]>([]);
  const [prices, setPrices] = useState<PriceItem[]>([]);
  const [pricesLoading, setPricesLoading] = useState(true);
  const [articles, setArticles] = useState<Article[]>(ARTICLES);
  const [dictionaryOverrides, setDictionaryOverrides] = useState<DictionaryOverrides>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);

    // Prices (largest collection + translation tables) load in parallel but separately, so
    // pages that do not show prices never wait for them.
    setPricesLoading(true);
    void Promise.all([
      loadPublicData('prices', () => publicApi.getPrices(), [], { live }),
      import('../api/clinicPricesTransform'),
    ])
      .then(([pricesRes, { transformClinicPrices }]) => setPrices(transformClinicPrices(pricesRes)))
      .catch((pricesError) => console.warn('[prices] failed to load', pricesError))
      .finally(() => setPricesLoading(false));

    const [
      doctorsRes,
      servicesRes,
      articlesRes,
      siteTextsRes,
    ] = await Promise.all([
      loadPublicData('doctors', () => publicApi.getDoctors(), [], { live }),
      loadPublicData('services', () => publicApi.getServices(), [], { live }),
      loadPublicData('articles', () => publicApi.getArticles(), [], { live }),
      loadPublicData('siteTexts', () => publicApi.getSiteTexts(), [], { live }),
    ]);

    const data = transformClinicData({
      doctors: doctorsRes,
      services: servicesRes,
      prices: [],
      articles: articlesRes,
      siteTexts: siteTextsRes,
    });

    if (data.apiFailed) {
      setError("API vaqtincha ishlamayapti — mahalliy ma'lumotlar ko'rsatilmoqda");
    }

    setDoctors(data.doctors);
    setServiceCategories(data.serviceCategories);
    setArticles(data.articles);
    setDictionaryOverrides(dictionaryOverridesFromSiteTexts(siteTextsRes));

    setLoading(false);
  }, [live]);

  const updateArticleViews = useCallback((match: { id?: string; slug?: string }, views: number) => {
    const normalizedViews = normalizeArticleViews(views);
    setArticles((prev) => {
      let changed = false;
      const next = prev.map((article) => {
        const isMatch =
          (match.id &&
            (article.id === match.id ||
              article.apiId === match.id ||
              article.slug === match.id)) ||
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
    pricesLoading,
    serviceCategories,
    prices,
    articles,
    dictionaryOverrides,
    loading,
    error,
    refetch,
    updateArticleViews,
  };
}
