import type { Article, Locale } from '../types';
import { ARTICLES } from '../data';
import {
  resolveArticleBody,
  resolveArticleRichContent,
  resolveArticleSummary,
} from './articleContent';
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

  const base: Article = staticMatch
    ? {
        ...staticMatch,
        ...article,
        title: { ...staticMatch.title, ...article.title },
        author: { ...staticMatch.author, ...article.author },
        date: article.date || staticMatch.date,
        views: isApiArticleId(article.id)
          ? normalizeArticleViews(article.views)
          : normalizeArticleViews(article.views ?? staticMatch.views),
        image: article.image ?? staticMatch.image,
        images: article.images ?? staticMatch.images,
      }
    : article;

  const enrichedContent = mergeLocalizedField(base.content, base, resolveArticleBody);
  const enrichedSummary = mergeLocalizedField(base.summary, base, resolveArticleSummary);

  const richContent: Article['richContent'] = {};
  for (const locale of LOCALES) {
    richContent[locale] = resolveArticleRichContent(
      { ...base, content: enrichedContent, summary: enrichedSummary },
      locale,
    );
  }

  return {
    ...base,
    content: enrichedContent,
    summary: enrichedSummary,
    richContent,
    views: normalizeArticleViews(base.views),
  };
}

export function enrichArticles(articles: Article[]): Article[] {
  return articles.map(enrichArticle);
}
