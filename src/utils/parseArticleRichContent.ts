import type { ArticleFaqItem, ArticleRichContent, Locale } from '../types';
import { parseJsonConditionTopics, parseJsonStringArray } from './parseRichContent';

export interface ApiArticleRichFields {
  key_takeaways_uz?: string | null;
  key_takeaways_ru?: string | null;
  key_takeaways_en?: string | null;
  faq_uz?: string | null;
  faq_ru?: string | null;
  faq_en?: string | null;
  tags_uz?: string | null;
  tags_ru?: string | null;
  tags_en?: string | null;
  when_to_see_doctor_uz?: string | null;
  when_to_see_doctor_ru?: string | null;
  when_to_see_doctor_en?: string | null;
}

function parseFaqItems(value: unknown): ArticleFaqItem[] {
  if (value == null) return [];

  if (Array.isArray(value)) {
    return value.filter(
      (item): item is ArticleFaqItem =>
        Boolean(item) &&
        typeof item === 'object' &&
        typeof (item as ArticleFaqItem).question === 'string' &&
        typeof (item as ArticleFaqItem).answer === 'string' &&
        (item as ArticleFaqItem).question.trim().length > 0,
    );
  }

  if (typeof value !== 'string' || !value.trim()) return [];
  try {
    const parsed = JSON.parse(value);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is ArticleFaqItem =>
        Boolean(item) &&
        typeof item === 'object' &&
        typeof (item as ArticleFaqItem).question === 'string' &&
        typeof (item as ArticleFaqItem).answer === 'string' &&
        (item as ArticleFaqItem).question.trim().length > 0,
    );
  } catch {
    return [];
  }
}

function stringifyFaqItems(items: ArticleFaqItem[] | undefined): string | null {
  if (!items?.length) return null;
  return JSON.stringify(items);
}

export function mapArticleRichContentFromApi(
  api: ApiArticleRichFields,
): Partial<Record<Locale, ArticleRichContent>> | undefined {
  const locales: Locale[] = ['uz', 'ru', 'en'];
  const result: Partial<Record<Locale, ArticleRichContent>> = {};
  let hasAny = false;

  for (const locale of locales) {
    const keyTakeaways = parseJsonStringArray(
      api[`key_takeaways_${locale}` as keyof ApiArticleRichFields] as string | null,
    );
    const faq = parseFaqItems(
      api[`faq_${locale}` as keyof ApiArticleRichFields] as string | null,
    );
    const tags = parseJsonStringArray(
      api[`tags_${locale}` as keyof ApiArticleRichFields] as string | null,
    );
    const whenToSeeDoctor = parseJsonStringArray(
      api[`when_to_see_doctor_${locale}` as keyof ApiArticleRichFields] as string | null,
    );

    if (keyTakeaways.length || faq.length || tags.length || whenToSeeDoctor.length) {
      result[locale] = { keyTakeaways, faq, tags, whenToSeeDoctor };
      hasAny = true;
    }
  }

  return hasAny ? result : undefined;
}

export function mapArticleRichContentToApiFields(
  rich: Partial<Record<Locale, ArticleRichContent>> | undefined,
): ApiArticleRichFields {
  if (!rich) return {};
  const fields: ApiArticleRichFields = {};
  const locales: Locale[] = ['uz', 'ru', 'en'];

  for (const locale of locales) {
    const content = rich[locale];
    if (!content) continue;
    (fields as Record<string, string | null>)[`key_takeaways_${locale}`] =
      content.keyTakeaways.length ? JSON.stringify(content.keyTakeaways) : null;
    (fields as Record<string, string | null>)[`faq_${locale}`] = stringifyFaqItems(content.faq);
    (fields as Record<string, string | null>)[`tags_${locale}`] =
      content.tags.length ? JSON.stringify(content.tags) : null;
    (fields as Record<string, string | null>)[`when_to_see_doctor_${locale}`] =
      content.whenToSeeDoctor.length ? JSON.stringify(content.whenToSeeDoctor) : null;
  }

  return fields;
}
