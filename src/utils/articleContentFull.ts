/**
 * Full article text and rich sections (key takeaways, FAQ, "when to see a doctor").
 * Imports the complete article catalog (~1 MB) — use it only from the article page chunk,
 * the prerender step or scripts. Cards and lists use the light helpers in articleContent.ts.
 */
import type { Article, ArticleRichContent, Locale } from '../types';
import { ARTICLE_RICH_CATALOG } from '../data/articleRichCatalog';
import { findArticleCatalogKey } from '../data/articleCatalogKeys';
import {
  appendHashtagSection,
  isStructuredArticleMarkdown,
  isSubstantialText,
} from './articleContent';

const LOCALES: Locale[] = ['uz', 'ru', 'en'];

function getCatalog(article: Pick<Article, 'id' | 'slug' | 'title'>) {
  return ARTICLE_RICH_CATALOG[findArticleCatalogKey(article)] ?? ARTICLE_RICH_CATALOG['general-dermatology'];
}

export function resolveArticleRichContent(article: Article, locale: Locale): ArticleRichContent {
  const fromCatalog = getCatalog(article)[locale];
  const existing = article.richContent?.[locale];

  return {
    keyTakeaways:
      existing?.keyTakeaways?.length ? existing.keyTakeaways : fromCatalog.keyTakeaways,
    faq: existing?.faq?.length ? existing.faq : fromCatalog.faq,
    tags: existing?.tags?.length ? existing.tags : fromCatalog.tags,
    whenToSeeDoctor:
      existing?.whenToSeeDoctor?.length
        ? existing.whenToSeeDoctor
        : fromCatalog.whenToSeeDoctor,
  };
}

export function resolveArticleBody(article: Article, locale: Locale): string {
  const catalogBody = getCatalog(article)[locale]?.body?.trim() || '';
  const apiContent = article.content[locale]?.trim() || '';

  const preferCatalog =
    catalogBody.length > 0 &&
    (!apiContent ||
      !isStructuredArticleMarkdown(apiContent) ||
      catalogBody.length > apiContent.length + 150);

  let body = '';
  if (preferCatalog) body = catalogBody;
  else if (isSubstantialText(apiContent)) body = apiContent;
  else if (catalogBody) body = catalogBody;
  else {
    const uzFallback = article.content.uz?.trim() || '';
    body = uzFallback || ARTICLE_RICH_CATALOG['general-dermatology'][locale]?.body || '';
  }

  const tags = resolveArticleRichContent(article, locale).tags;
  return appendHashtagSection(body, tags, locale);
}

export function buildArticleRichContentMap(
  article: Article,
): Partial<Record<Locale, ArticleRichContent>> {
  const result: Partial<Record<Locale, ArticleRichContent>> = {};

  for (const locale of LOCALES) {
    result[locale] = resolveArticleRichContent(article, locale);
  }

  return result;
}
