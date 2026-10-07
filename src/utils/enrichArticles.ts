import type { Article, Locale } from '../types';
import { ARTICLES } from '../data';
import { resolveArticleSummary } from './articleContent';
import { isApiArticleId, normalizeArticleViews } from './articleViews';

const LOCALES: Locale[] = ['uz', 'ru', 'en'];

function mergeLocalizedField(
  target: Record<Locale, string>,
  article: Article,
  resolver: (art: Article, locale: Locale) => string,
): Record<Locale, string> {
  const merged = { ...target };

  for (const locale of LOCALES) {
    merged[locale] = resolver(article, locale);
  }

  return merged;
}

export function enrichArticle(article: Article): Article {
  const staticMatch = ARTICLES.find(
    (item) => item.id === article.id || item.slug === article.slug,
  );

  const fromApi = isApiArticleId(article.id);

  const base: Article = staticMatch
    ? {
        ...staticMatch,
        ...article,
        id: staticMatch.id,
        apiId: isApiArticleId(article.id) ? article.id : article.apiId,
        title: { ...staticMatch.title, ...article.title },
        author: { ...staticMatch.author, ...article.author },
        date: article.date || staticMatch.date,
        views: fromApi
          ? normalizeArticleViews(article.views)
          : normalizeArticleViews(article.views ?? staticMatch.views),
        image: fromApi ? article.image : (article.image ?? staticMatch.image),
        images: fromApi ? article.images : (article.images ?? staticMatch.images),
      }
    : {
        ...article,
        id: isApiArticleId(article.id) ? article.slug : article.id,
        apiId: isApiArticleId(article.id) ? article.id : article.apiId,
      };

  // Bodies and rich sections are resolved on the article page (articleContentFull.ts) —
  // list items only carry what cards need, keeping article texts out of the main bundle.
  const enrichedSummary = mergeLocalizedField(base.summary, base, resolveArticleSummary);

  return {
    ...base,
    summary: enrichedSummary,
    views: normalizeArticleViews(base.views),
  };
}

export function enrichArticles(articles: Article[]): Article[] {
  return articles.map(enrichArticle);
}
