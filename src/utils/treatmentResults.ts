import { TREATMENT_RESULTS, type TreatmentResult } from '../data/sitePagesContent';

function sortTreatmentResults(results: TreatmentResult[]): TreatmentResult[] {
  return [...results].sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));
}

function hasBundledPromoImages(items: TreatmentResult[]): boolean {
  return items.some(
    (item) =>
      item.comparisonImage?.startsWith('/promo/') ||
      item.beforeImage?.startsWith('/promo/'),
  );
}

/** API eski galereya rasmlarini qaytarsa, loyihadagi do1–do3 natijalarini ko'rsatadi */
export function resolvePublicTreatmentResults(apiItems: TreatmentResult[] = []): TreatmentResult[] {
  const sortedApi = sortTreatmentResults(
    apiItems.filter((result) => result.published !== false),
  );

  if (hasBundledPromoImages(sortedApi)) {
    return sortedApi;
  }

  return sortTreatmentResults(TREATMENT_RESULTS);
}
