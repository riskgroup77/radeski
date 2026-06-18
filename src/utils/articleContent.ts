import type { Article, ArticleRichContent, Locale } from '../types';
import {
  ARTICLE_RICH_CATALOG,
  DISCLAIMER,
  findArticleCatalogKey,
} from '../data/articleRichCatalog';

const LOCALES: Locale[] = ['uz', 'ru', 'en'];

const SECTION_LABELS: Record<
  Locale,
  {
    keyTakeaways: string;
    faq: string;
    whenToSeeDoctor: string;
    disclaimer: string;
    readingTime: string;
    minRead: string;
    tableOfContents: string;
  }
> = {
  uz: {
    keyTakeaways: 'Asosiy xulosalar',
    faq: 'Tez-tez beriladigan savollar',
    whenToSeeDoctor: 'Qachon shifokorga murojaat qilish kerak',
    disclaimer: 'Muhim eslatma',
    readingTime: "O'qish vaqti",
    minRead: 'daq',
    tableOfContents: 'Mundarija',
  },
  ru: {
    keyTakeaways: 'Ключевые выводы',
    faq: 'Частые вопросы',
    whenToSeeDoctor: 'Когда обращаться к врачу',
    disclaimer: 'Важное примечание',
    readingTime: 'Время чтения',
    minRead: 'мин',
    tableOfContents: 'Содержание',
  },
  en: {
    keyTakeaways: 'Key takeaways',
    faq: 'Frequently asked questions',
    whenToSeeDoctor: 'When to see a doctor',
    disclaimer: 'Important note',
    readingTime: 'Reading time',
    minRead: 'min',
    tableOfContents: 'Table of contents',
  },
};

export function getArticleSectionLabels(locale: Locale) {
  return SECTION_LABELS[locale];
}

export function getArticleDisclaimer(locale: Locale): string {
  return DISCLAIMER[locale];
}

function isSubstantialText(text: string | undefined | null, minLength = 400): boolean {
  return Boolean(text && text.trim().length >= minLength);
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-');
}

export interface ArticleTocItem {
  id: string;
  title: string;
  level: 2 | 3;
}

export function extractArticleHeadings(markdown: string): ArticleTocItem[] {
  const items: ArticleTocItem[] = [];
  const lines = markdown.split('\n');

  for (const line of lines) {
    const h2 = line.match(/^##\s+(.+)$/);
    if (h2) {
      const title = h2[1].trim();
      items.push({ id: slugifyHeading(title), title, level: 2 });
      continue;
    }
    const h3 = line.match(/^###\s+(.+)$/);
    if (h3) {
      const title = h3[1].trim();
      items.push({ id: slugifyHeading(title), title, level: 3 });
    }
  }

  return items;
}

export function estimateReadingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 180));
}

export function resolveArticleRichContent(
  article: Article,
  locale: Locale,
): ArticleRichContent {
  const catalogKey = findArticleCatalogKey(article);
  const catalog = ARTICLE_RICH_CATALOG[catalogKey] ?? ARTICLE_RICH_CATALOG['general-dermatology'];
  const fromCatalog = catalog[locale];
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
  const apiContent = article.content[locale]?.trim() || '';
  if (isSubstantialText(apiContent)) {
    return apiContent;
  }

  const catalogKey = findArticleCatalogKey(article);
  const catalog = ARTICLE_RICH_CATALOG[catalogKey] ?? ARTICLE_RICH_CATALOG['general-dermatology'];
  const catalogBody = catalog[locale]?.body?.trim() || '';

  if (catalogBody) return catalogBody;

  const uzFallback = article.content.uz?.trim() || '';
  if (uzFallback) return uzFallback;

  return ARTICLE_RICH_CATALOG['general-dermatology'][locale]?.body || '';
}

export function resolveArticleSummary(article: Article, locale: Locale): string {
  const apiSummary = article.summary[locale]?.trim() || '';
  if (apiSummary.length >= 80) {
    return apiSummary;
  }

  const catalogKey = findArticleCatalogKey(article);
  const catalog = ARTICLE_RICH_CATALOG[catalogKey] ?? ARTICLE_RICH_CATALOG['general-dermatology'];
  const catalogSummary = catalog[locale]?.summary?.trim() || '';

  if (catalogSummary) return catalogSummary;

  return apiSummary || article.summary.uz || '';
}

export function resolveArticleTags(article: Article, locale: Locale): string[] {
  return resolveArticleRichContent(article, locale).tags;
}

export function resolveArticleReadingMinutes(article: Article, locale: Locale): number {
  const body = resolveArticleBody(article, locale);
  const summary = resolveArticleSummary(article, locale);
  return estimateReadingMinutes(`${summary}\n${body}`);
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
