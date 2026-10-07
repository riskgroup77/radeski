/**
 * Clinic texts the admin edits in the "Klinika" tab (address, working hours). They are stored
 * in the CMS as site texts `dictionary.<key>` so every visitor sees the edit — previously they
 * were only saved in the admin's own browser (localStorage) and nobody else saw them.
 */
import type { Locale } from '../types';
import type { ApiSiteTextOut, SiteTextBulkPayload } from '../api/cmsTypes';

const PREFIX = 'dictionary.';

/** Dictionary keys the admin panel can change. */
export const ADMIN_EDITABLE_DICTIONARY_KEYS = ['addressValue', 'workingHoursValue'] as const;

export type DictionaryOverrides = Partial<Record<Locale, Record<string, string>>>;

export function dictionaryOverridesFromSiteTexts(entries: ApiSiteTextOut[]): DictionaryOverrides {
  const overrides: DictionaryOverrides = {};
  for (const entry of entries) {
    if (!entry.key.startsWith(PREFIX)) continue;
    const key = entry.key.slice(PREFIX.length);
    if (!(ADMIN_EDITABLE_DICTIONARY_KEYS as readonly string[]).includes(key)) continue;
    for (const locale of ['uz', 'ru', 'en'] as const) {
      const value = entry[`value_${locale}`]?.trim();
      if (value) (overrides[locale] ??= {})[key] = value;
    }
  }
  return overrides;
}

export function buildDictionarySiteTextItems(
  dictionary: Record<Locale, Record<string, string>>,
): SiteTextBulkPayload['items'] {
  const items: SiteTextBulkPayload['items'] = {};
  for (const key of ADMIN_EDITABLE_DICTIONARY_KEYS) {
    items[`${PREFIX}${key}`] = {
      value_uz: dictionary.uz?.[key] ?? null,
      value_ru: dictionary.ru?.[key] ?? null,
      value_en: dictionary.en?.[key] ?? null,
    };
  }
  return items;
}
