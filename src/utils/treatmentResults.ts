import { TREATMENT_RESULTS, type TreatmentResult } from '../data/sitePagesContent';

function sortTreatmentResults(results: TreatmentResult[]): TreatmentResult[] {
  return [...results].sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));
}

/** API dan kelgan natijalar bo'lsa ularni ko'rsatadi, aks holda statik do1–do3 */
export function resolvePublicTreatmentResults(apiItems: TreatmentResult[] = []): TreatmentResult[] {
  const sortedApi = sortTreatmentResults(
    apiItems.filter((result) => result.published !== false),
  );

  if (sortedApi.length > 0) {
    return sortedApi;
  }

  return sortTreatmentResults(TREATMENT_RESULTS);
}
