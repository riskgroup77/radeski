import { TREATMENT_RESULTS, type TreatmentResult } from '../data/sitePagesContent';

function sortTreatmentResults(results: TreatmentResult[]): TreatmentResult[] {
  return [...results].sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));
}

const STATIC_RESULTS_BY_ID = new Map(TREATMENT_RESULTS.map((item) => [item.id, item]));
const STATIC_RESULTS_BY_TITLE = new Map(
  TREATMENT_RESULTS.map((item) => [item.title.uz.trim().toLowerCase(), item]),
);

function mergeStaticExtras(apiItem: TreatmentResult): TreatmentResult {
  const staticItem =
    STATIC_RESULTS_BY_ID.get(apiItem.id) ??
    STATIC_RESULTS_BY_TITLE.get(apiItem.title.uz.trim().toLowerCase());
  if (!staticItem) return apiItem;
  return {
    ...apiItem,
    id: apiItem.id || staticItem.id,
    journeyImages: apiItem.journeyImages?.length ? apiItem.journeyImages : staticItem.journeyImages,
    comparisonImage: apiItem.comparisonImage ?? staticItem.comparisonImage,
  };
}

/** API dan kelgan natijalar bo'lsa ularni ko'rsatadi, aks holda statik do1–do3 */
export function resolvePublicTreatmentResults(apiItems: TreatmentResult[] = []): TreatmentResult[] {
  const sortedApi = sortTreatmentResults(
    apiItems.filter((result) => result.published !== false).map(mergeStaticExtras),
  );

  if (sortedApi.length > 0) {
    return sortedApi;
  }

  return sortTreatmentResults(TREATMENT_RESULTS);
}
