import type { Locale, ServiceCategory, ServiceDetail } from '../types';

const LOCALES: Locale[] = ['uz', 'ru', 'en'];

/** CMS rich content is used as is when complete; otherwise gaps are filled from the catalog. */
export function isCompleteRichContent(rich: ServiceDetail['richContent'] | ServiceCategory['richContent']): boolean {
  if (!rich) return false;
  return LOCALES.some((locale) => {
    const section = rich[locale];
    if (!section) return false;
    return (
      Boolean(section.overview?.trim()) &&
      section.conditions.length > 0 &&
      section.indications.length > 0 &&
      section.solutions.length > 0 &&
      section.benefits.length > 0 &&
      section.process.length > 0
    );
  });
}

export function mergeRichContent(
  existing: ServiceDetail['richContent'],
  // Catalog entries may omit `conditions` (filled with [] below).
  catalog: Partial<
    Record<Locale, Omit<import('../types').ServiceRichContent, 'conditions'> & { conditions?: import('../types').ServiceConditionTopic[] }>
  >,
): ServiceDetail['richContent'] {
  const merged: NonNullable<ServiceDetail['richContent']> = { ...existing };

  for (const locale of LOCALES) {
    const fromCatalog = catalog[locale];
    if (!fromCatalog) continue;

    const current = merged[locale];
    if (current && isCompleteRichContent({ [locale]: current })) {
      merged[locale] = {
        overview: current.overview || fromCatalog.overview,
        conditions: current.conditions.length ? current.conditions : (fromCatalog.conditions ?? []),
        indications: current.indications.length ? current.indications : fromCatalog.indications,
        solutions: current.solutions.length ? current.solutions : fromCatalog.solutions,
        benefits: current.benefits.length ? current.benefits : fromCatalog.benefits,
        process: current.process.length ? current.process : fromCatalog.process,
      };
    } else {
      merged[locale] = {
        overview: fromCatalog.overview,
        conditions: fromCatalog.conditions ?? [],
        indications: fromCatalog.indications,
        solutions: fromCatalog.solutions,
        benefits: fromCatalog.benefits,
        process: fromCatalog.process,
      };
    }
  }

  return merged;
}

