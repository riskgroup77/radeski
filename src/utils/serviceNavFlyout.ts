import type { Locale, ServiceCategory } from '../types';
import { subServiceRouteKey } from './serviceSubSlug';
import {
  DERMATOLOGY_CATEGORY_ID,
  DERMATOLOGY_CONDITION_NAV,
} from '../data/dermatologyConditionsNav';
import {
  getCategoryEquipmentList,
  getLocalizedEquipmentText,
} from '../data/clinicEquipmentCatalog';
import { getEquipmentSectionLabels } from './clinicEquipmentLabels';
import { conditionPath, serviceSubPath } from '../routing/paths';
import { serviceEquipmentPath } from './clinicEquipmentRoutes';

export const APPARATNAYA_KOSMETOLOGIYA_ID = 'apparatnaya-kosmetologiya';

export type ServiceNavFlyoutItemKind = 'condition' | 'sub' | 'equipment';

export interface ServiceNavFlyoutItem {
  key: string;
  kind: ServiceNavFlyoutItemKind;
  label: string;
  href: string;
}

export interface ServiceNavFlyoutContent {
  title: string;
  items: ServiceNavFlyoutItem[];
}

function proceduresFlyoutTitle(locale: Locale): string {
  return locale === 'uz'
    ? "Ushbu yo'nalishdagi muolajalar"
    : locale === 'ru'
      ? 'Процедуры в этом направлении'
      : 'Procedures in this specialty';
}

function dermConditionsTitle(locale: Locale): string {
  return locale === 'uz'
    ? 'Dermatologik holatlar'
    : locale === 'ru'
      ? 'Дерматологические состояния'
      : 'Dermatology conditions';
}

/** Navbar yon flyout — kategoriya bo'yicha ichki ro'yxat. */
export function getServiceNavFlyoutContent(
  category: ServiceCategory,
  locale: Locale,
): ServiceNavFlyoutContent | null {
  if (category.id === DERMATOLOGY_CATEGORY_ID) {
    return {
      title: dermConditionsTitle(locale),
      items: DERMATOLOGY_CONDITION_NAV.map((item) => ({
        key: item.slug,
        kind: 'condition' as const,
        label: item.label[locale],
        href: conditionPath(locale, item.slug),
      })),
    };
  }

  if (category.id === APPARATNAYA_KOSMETOLOGIYA_ID) {
    const equipment = getCategoryEquipmentList(category.id);
    if (equipment.length === 0) return null;

    return {
      title: getEquipmentSectionLabels(locale).sectionTitle,
      items: equipment.map((entry) => ({
        key: entry.id,
        kind: 'equipment' as const,
        label: getLocalizedEquipmentText(entry.title, locale),
        href: serviceEquipmentPath(locale, entry.id),
      })),
    };
  }

  if (category.subServices.length > 0) {
    return {
      title: proceduresFlyoutTitle(locale),
      items: category.subServices.map((sub) => ({
        key: subServiceRouteKey(sub),
        kind: 'sub' as const,
        label: sub.name[locale] || sub.name.uz,
        href: serviceSubPath(locale, category.id, subServiceRouteKey(sub)),
      })),
    };
  }

  return null;
}

export function categoryHasServiceNavFlyout(category: ServiceCategory, locale: Locale): boolean {
  return getServiceNavFlyoutContent(category, locale) !== null;
}

export function isServiceNavFlyoutItemActive(
  item: ServiceNavFlyoutItem,
  categoryId: string,
  activeCategoryId: string | null,
  activeConditionSlug: string | null,
  activeSubId: string | null,
  _locationHash: string,
): boolean {
  if (item.kind === 'condition') {
    return activeConditionSlug === item.key;
  }

  if (item.kind === 'sub') {
    return activeCategoryId === categoryId && activeSubId === item.key;
  }

  if (item.kind === 'equipment') {
    return activeCategoryId === categoryId && activeSubId === item.key;
  }

  return false;
}
