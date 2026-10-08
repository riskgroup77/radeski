import type { ServiceCategory } from '../types';

type SubService = ServiceCategory['subServices'][number];

/**
 * Readable sub-service URLs: /uz/services/in-ekcionnaya-kosmetologiya/botulinoterapiya-botoks
 * instead of the CMS UUID. Built-in ids that are already readable (ipl-inmode) are kept; old
 * UUID links and legacy ids still resolve (the canonical URL points at the slug).
 */
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** Old hand-written ids that were linked before the CMS took over → current slug. */
const LEGACY_SUB_IDS: Record<string, string> = {
  'alex-lazer': 'aleksandrit-lazer-epilyatsiyasi',
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[ʻʼ‘’'`]/g, '')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function subServiceRouteKey(sub: Pick<SubService, 'id' | 'name'>): string {
  if (!UUID.test(sub.id)) return sub.id;
  return slugify(sub.name.uz || sub.name.en || '') || sub.id;
}

export function findSubServiceByRouteParam<T extends Pick<SubService, 'id' | 'name'>>(
  param: string | null | undefined,
  subServices: T[],
): T | undefined {
  if (!param) return undefined;
  const key = LEGACY_SUB_IDS[param] ?? param.toLowerCase();
  return subServices.find((sub) => subServiceRouteKey(sub) === key) ?? subServices.find((sub) => sub.id === param);
}
