/**
 * Full article text and rich sections (key takeaways, FAQ, "when to see a doctor").
 * Imports the complete article catalog (~1 MB) — use it only from the prerender step or
 * scripts. The article page loads its single entry instead (useArticleCatalog).
 */
import type { Article, ArticleRichContent, Locale } from '../types';
import { ARTICLE_RICH_CATALOG } from '../data/articleRichCatalog';
import { findArticleCatalogKey } from '../data/articleCatalogKeys';
import { resolveArticleBodyFrom, resolveArticleRichContentFrom } from './articleContentCore';

const LOCALES: Locale[] = ['uz', 'ru', 'en'];

function getCatalog(article: Pick<Article, 'id' | 'slug' | 'title'>) {
  return ARTICLE_RICH_CATALOG[findArticleCatalogKey(article)] ?? ARTICLE_RICH_CATALOG['general-dermatology'];
}

export function resolveArticleRichContent(article: Article, locale: Locale): ArticleRichContent {
  return resolveArticleRichContentFrom(article, locale, getCatalog(article));
}

export function resolveArticleBody(article: Article, locale: Locale): string {
  return resolveArticleBodyFrom(article, locale, getCatalog(article), ARTICLE_RICH_CATALOG['general-dermatology']);
}

export function buildArticleRichContentMap(article: Article): Partial<Record<Locale, ArticleRichContent>> {
  const result: Partial<Record<Locale, ArticleRichContent>> = {};
  for (const locale of LOCALES) result[locale] = resolveArticleRichContent(article, locale);
  return result;
}
