/**
 * Article body and rich sections from one catalog entry — no catalog import here, so the
 * article page can load just its own entry (articleCatalogLoaders.generated.ts) while the
 * prerender and scripts pass entries from the full ARTICLE_RICH_CATALOG (articleContentFull.ts).
 */
import type { Article, ArticleRichContent, Locale } from '../types';
import type { ArticleCatalogEntry } from '../data/articleCatalogLoaders.generated';
import { appendHashtagSection, isStructuredArticleMarkdown, isSubstantialText } from './articleContent';

export type { ArticleCatalogEntry };

export function resolveArticleRichContentFrom(article: Article, locale: Locale, entry: ArticleCatalogEntry): ArticleRichContent {
  const fromCatalog = entry[locale];
  const existing = article.richContent?.[locale];
  return {
    keyTakeaways: existing?.keyTakeaways?.length ? existing.keyTakeaways : fromCatalog.keyTakeaways,
    faq: existing?.faq?.length ? existing.faq : fromCatalog.faq,
    tags: existing?.tags?.length ? existing.tags : fromCatalog.tags,
    whenToSeeDoctor: existing?.whenToSeeDoctor?.length ? existing.whenToSeeDoctor : fromCatalog.whenToSeeDoctor,
  };
}

export function resolveArticleBodyFrom(
  article: Article,
  locale: Locale,
  entry: ArticleCatalogEntry,
  general: ArticleCatalogEntry,
): string {
  const catalogBody = entry[locale]?.body?.trim() || '';
  const apiContent = article.content[locale]?.trim() || '';

  const preferCatalog =
    catalogBody.length > 0 &&
    (!apiContent || !isStructuredArticleMarkdown(apiContent) || catalogBody.length > apiContent.length + 150);

  let body = '';
  if (preferCatalog) body = catalogBody;
  else if (isSubstantialText(apiContent)) body = apiContent;
  else if (catalogBody) body = catalogBody;
  else {
    const uzFallback = article.content.uz?.trim() || '';
    body = uzFallback || general[locale]?.body || '';
  }

  const tags = resolveArticleRichContentFrom(article, locale, entry).tags;
  return appendHashtagSection(body, tags, locale);
}
