import type { Locale, ServiceConditionTopic } from '../types';

export interface ServiceAboutContent {
  aboutTitle: string;
  overview: string;
  aboutSections: ServiceConditionTopic[];
  aboutFooter?: string;
}

/*
 * "About the service" texts edited in the CMS (site texts catalog.service-about.<key>).
 * Kept apart from serviceAboutCatalog so the data loader can store them without pulling the
 * whole built-in catalog into the main bundle; the catalog is read only on service pages.
 */
const apiAboutOverrides: Record<string, Partial<Record<Locale, ServiceAboutContent>>> = {};

export function getServiceAboutOverride(key: string): Partial<Record<Locale, ServiceAboutContent>> | undefined {
  return apiAboutOverrides[key];
}

export function hydrateServiceAboutFromSiteTexts(
  entries: { key: string; value_uz?: string | null; value_ru?: string | null; value_en?: string | null }[],
): void {
  for (const entry of entries) {
    if (!entry.key.startsWith('catalog.service-about.')) continue;
    const catalogKey = entry.key.slice('catalog.service-about.'.length);
    const parse = (value: string | null | undefined): ServiceAboutContent | undefined => {
      if (!value?.trim()) return undefined;
      try {
        return JSON.parse(value) as ServiceAboutContent;
      } catch {
        return undefined;
      }
    };
    apiAboutOverrides[catalogKey] = {
      uz: parse(entry.value_uz),
      ru: parse(entry.value_ru),
      en: parse(entry.value_en),
    };
  }
}
