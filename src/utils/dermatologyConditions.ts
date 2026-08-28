import type { Locale, ServiceConditionTopic } from '../types';
import { getCategoryConditions } from '../data/serviceConditionsCatalog';
import {
  DERMATOLOGY_CATEGORY_ID,
  getDermatologyConditionNavItem,
  type DermatologyConditionSlug,
} from '../data/dermatologyConditionsNav';

export function getDermatologyConditionTopic(
  slug: DermatologyConditionSlug,
  locale: Locale,
): ServiceConditionTopic | null {
  const items = getCategoryConditions(DERMATOLOGY_CATEGORY_ID, locale);
  return items.find((item) => item.id === slug) ?? null;
}

export function getDermatologyConditionLabel(slug: DermatologyConditionSlug, locale: Locale): string {
  const nav = getDermatologyConditionNavItem(slug);
  return nav?.label[locale] ?? nav?.label.uz ?? slug;
}
