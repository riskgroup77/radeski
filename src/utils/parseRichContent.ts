import type { Locale, ServiceConditionTopic, ServiceRichContent } from '../types';

export function parseJsonConditionTopics(value: string | null | undefined): ServiceConditionTopic[] {
  if (!value || !value.trim()) return [];
  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) {
      return parsed.filter(
        (item): item is ServiceConditionTopic =>
          Boolean(item) &&
          typeof item === 'object' &&
          typeof (item as ServiceConditionTopic).title === 'string' &&
          typeof (item as ServiceConditionTopic).description === 'string' &&
          (item as ServiceConditionTopic).title.trim().length > 0 &&
          (item as ServiceConditionTopic).description.trim().length > 0,
      );
    }
  } catch {
    // ignore
  }
  return [];
}

export function stringifyJsonConditionTopics(items: ServiceConditionTopic[] | undefined): string | null {
  if (!items || items.length === 0) return null;
  return JSON.stringify(items);
}

export function parseJsonStringArray(value: string | null | undefined): string[] {
  if (!value || !value.trim()) return [];
  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) {
      return parsed.filter((item): item is string => typeof item === 'string' && item.trim().length > 0);
    }
  } catch {
    // fallback: newline or semicolon separated
  }
  return value
    .split(/\n|;/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function stringifyJsonStringArray(items: string[] | undefined): string | null {
  if (!items || items.length === 0) return null;
  return JSON.stringify(items);
}

interface ApiRichFields {
  overview_uz?: string | null;
  overview_ru?: string | null;
  overview_en?: string | null;
  indications_uz?: string | null;
  indications_ru?: string | null;
  indications_en?: string | null;
  solutions_uz?: string | null;
  solutions_ru?: string | null;
  solutions_en?: string | null;
  benefits_uz?: string | null;
  benefits_ru?: string | null;
  benefits_en?: string | null;
  process_uz?: string | null;
  process_ru?: string | null;
  process_en?: string | null;
  conditions_uz?: string | null;
  conditions_ru?: string | null;
  conditions_en?: string | null;
}

export function mapRichContentFromApi(
  api: ApiRichFields,
  fallbackDescription?: { uz: string; ru: string; en: string },
): Partial<Record<Locale, ServiceRichContent>> | undefined {
  const locales: Locale[] = ['uz', 'ru', 'en'];
  const result: Partial<Record<Locale, ServiceRichContent>> = {};
  let hasAny = false;

  for (const locale of locales) {
    const overview =
      (api[`overview_${locale}` as keyof ApiRichFields] as string | null | undefined) ||
      '';
    const indications = parseJsonStringArray(api[`indications_${locale}` as keyof ApiRichFields] as string | null);
    const solutions = parseJsonStringArray(api[`solutions_${locale}` as keyof ApiRichFields] as string | null);
    const benefits = parseJsonStringArray(api[`benefits_${locale}` as keyof ApiRichFields] as string | null);
    const process = parseJsonStringArray(api[`process_${locale}` as keyof ApiRichFields] as string | null);
    const conditions = parseJsonConditionTopics(api[`conditions_${locale}` as keyof ApiRichFields] as string | null);

    const hasStructured =
      Boolean(overview.trim()) ||
      conditions.length > 0 ||
      indications.length > 0 ||
      solutions.length > 0 ||
      benefits.length > 0 ||
      process.length > 0;

    if (hasStructured) {
      result[locale] = {
        overview: overview || fallbackDescription?.[locale] || '',
        conditions,
        indications,
        solutions,
        benefits,
        process,
      };
      hasAny = true;
    }
  }

  return hasAny ? result : undefined;
}

export function mapRichContentToApiFields(
  rich: Partial<Record<Locale, ServiceRichContent>> | undefined,
): ApiRichFields {
  if (!rich) return {};
  const fields: ApiRichFields = {};
  const locales: Locale[] = ['uz', 'ru', 'en'];

  for (const locale of locales) {
    const content = rich[locale];
    if (!content) continue;
    if (content.overview) (fields as Record<string, string | null>)[`overview_${locale}`] = content.overview;
    (fields as Record<string, string | null>)[`conditions_${locale}`] = stringifyJsonConditionTopics(content.conditions);
    (fields as Record<string, string | null>)[`indications_${locale}`] = stringifyJsonStringArray(content.indications);
    (fields as Record<string, string | null>)[`solutions_${locale}`] = stringifyJsonStringArray(content.solutions);
    (fields as Record<string, string | null>)[`benefits_${locale}`] = stringifyJsonStringArray(content.benefits);
    (fields as Record<string, string | null>)[`process_${locale}`] = stringifyJsonStringArray(content.process);
  }

  return fields;
}
