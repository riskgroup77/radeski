import type { Locale, ServiceCategory, ServiceDetail } from '../types';
import {
  CATEGORY_RICH_CATALOG,
  SUB_SERVICE_RICH_CATALOG,
  findSubServiceCatalogKey,
} from '../data/serviceRichCatalog';
import { filterExcludedServiceCategories } from './excludedServices';

const LOCALES: Locale[] = ['uz', 'ru', 'en'];

function isCompleteRich(rich: ServiceDetail['richContent'] | ServiceCategory['richContent']): boolean {
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

function mergeRichContent(
  existing: ServiceDetail['richContent'],
  catalog: Partial<Record<Locale, import('../types').ServiceRichContent>>,
): ServiceDetail['richContent'] {
  const merged: NonNullable<ServiceDetail['richContent']> = { ...existing };

  for (const locale of LOCALES) {
    const fromCatalog = catalog[locale];
    if (!fromCatalog) continue;

    const current = merged[locale];
    if (current && isCompleteRich({ [locale]: current })) {
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

function enrichSubService(sub: ServiceDetail, category: ServiceCategory): ServiceDetail {
  if (isCompleteRich(sub.richContent)) return sub;

  const catalogKey = findSubServiceCatalogKey(sub, category);
  const catalog = catalogKey ? SUB_SERVICE_RICH_CATALOG[catalogKey] : undefined;
  if (!catalog) return sub;

  return { ...sub, richContent: mergeRichContent(sub.richContent, catalog) };
}

export function enrichServiceCategories(categories: ServiceCategory[]): ServiceCategory[] {
  const enriched = categories.map((category) => {
    const catalogCategory = CATEGORY_RICH_CATALOG[category.id];
    const enrichedCategory: ServiceCategory = {
      ...category,
      richContent: isCompleteRich(category.richContent)
        ? category.richContent
        : catalogCategory
          ? mergeRichContent(category.richContent, catalogCategory)
          : category.richContent,
      subServices: category.subServices.map((sub) => enrichSubService(sub, category)),
    };
    return enrichedCategory;
  });

  return filterExcludedServiceCategories(enriched);
}
