import type { ServiceCategory } from '../types';

const SURGICAL_DERMATOLOGY_ID = 'hirurgicheskaya-dermatologiya';
const TRICHOLOGY_ID = 'trihologiya-centr-lechenie-volos';
const HOME_TEASER_COUNT = 6;

/** Bosh sahifa xizmatlar blokida jarrohlik dermatologiyasi ↔ trixologiya o'rnini almashtiradi */
function swapSurgicalAndTrichology(categories: ServiceCategory[]): ServiceCategory[] {
  const list = [...categories];
  const surgicalIdx = list.findIndex((category) => category.id === SURGICAL_DERMATOLOGY_ID);
  const trichologyIdx = list.findIndex((category) => category.id === TRICHOLOGY_ID);
  if (surgicalIdx === -1 || trichologyIdx === -1) return list;
  [list[surgicalIdx], list[trichologyIdx]] = [list[trichologyIdx], list[surgicalIdx]];
  return list;
}

export function getHomeServiceTeaserCategories(categories: ServiceCategory[]): ServiceCategory[] {
  return swapSurgicalAndTrichology(categories).slice(0, HOME_TEASER_COUNT);
}
