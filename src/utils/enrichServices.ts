import type { Locale, ServiceCategory } from '../types';
import { filterExcludedServiceCategories } from './excludedServices';

const LOCALES: Locale[] = ['uz', 'ru', 'en'];

/**
 * CMS category names with a known typo. Applied only while the CMS still holds the exact wrong
 * text, so a name the admin edits later always wins (the admin panel saves the fixed name too).
 */
const CATEGORY_TITLE_FIXES: Record<string, Partial<Record<Locale, { from: string; to: string }>>> = {
  'apparatnaya-kosmetologiya': { uz: { from: 'Apparatli kosmetologiyasi', to: 'Apparatli kosmetologiya' } },
};

function fixCategoryTitle(category: ServiceCategory): ServiceCategory['title'] {
  const fixes = CATEGORY_TITLE_FIXES[category.id];
  if (!fixes) return category.title;
  const title = { ...category.title };
  for (const locale of LOCALES) {
    const fix = fixes[locale];
    if (fix && title[locale]?.trim() === fix.from) title[locale] = fix.to;
  }
  return title;
}

export function enrichServiceCategories(categories: ServiceCategory[]): ServiceCategory[] {
  // Catalog texts are merged on the service pages (serviceContent.ts), not here, so the
  // catalog stays out of the main bundle.
  return filterExcludedServiceCategories(categories.map((category) => ({ ...category, title: fixCategoryTitle(category) })));
}
