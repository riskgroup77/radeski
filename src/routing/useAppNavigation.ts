import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Locale } from '../types';
import { saveLocale } from '../routing/locale';
import { PageId, pagePath, switchLocaleInPath, articlePath, serviceCategoryPath } from '../routing/paths';

export function useAppNavigation(locale: Locale) {
  const navigate = useNavigate();
  const location = useLocation();

  const goToPage = useCallback(
    (page: PageId) => {
      navigate(pagePath(locale, page));
    },
    [navigate, locale],
  );

  const goToArticle = useCallback(
    (articleId: string) => {
      navigate(articlePath(locale, articleId));
    },
    [navigate, locale],
  );

  const goToServiceCategory = useCallback(
    (categoryId: string) => {
      navigate(serviceCategoryPath(locale, categoryId));
    },
    [navigate, locale],
  );

  const changeLocale = useCallback(
    (nextLocale: Locale) => {
      saveLocale(nextLocale);
      navigate(switchLocaleInPath(location.pathname, nextLocale));
    },
    [navigate, location.pathname],
  );

  return { goToPage, goToArticle, goToServiceCategory, changeLocale, navigate };
}
