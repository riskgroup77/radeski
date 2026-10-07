import { TREATMENT_RESULTS, type TreatmentResult } from '../data/sitePagesContent';

function sortTreatmentResults(results: TreatmentResult[]): TreatmentResult[] {
  return [...results].sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));
}

/** Removed from public results (may still exist in CMS API). */
const HIDDEN_RESULT_IDS = new Set([
  'granuloma-annulare-7d-comparison',
  'furuncle-face-7d-comparison',
  'plantar-warts-co2-comparison',
]);

const HIDDEN_RESULT_TITLE_UZ = new Set(
  [
    'Halqali granulema — 7 kunlik davolash',
    'Furunkul — jarrohliksiz 7 kunlik davolash',
    "Oyoq tagi so'g'allari — fraksional CO₂ lazer",
    'Oyoq tagi so‘g‘allari — fraksional CO₂ lazer',
  ].map((s) => s.trim().toLowerCase()),
);

function isHiddenResult(result: TreatmentResult): boolean {
  if (HIDDEN_RESULT_IDS.has(result.id)) return true;
  return HIDDEN_RESULT_TITLE_UZ.has(result.title.uz.trim().toLowerCase());
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

  const usePrivacyImages = staticItem.privacyEyeMasked === true;

  return {
    ...apiItem,
    id: apiItem.id || staticItem.id,
    beforeImage: usePrivacyImages ? staticItem.beforeImage : apiItem.beforeImage,
    afterImage: usePrivacyImages ? staticItem.afterImage : apiItem.afterImage,
    journeyImages: usePrivacyImages
      ? staticItem.journeyImages
      : apiItem.journeyImages?.length
        ? apiItem.journeyImages
        : staticItem.journeyImages,
    comparisonImage: staticItem.comparisonImage ?? apiItem.comparisonImage,
    privacyEyeMasked: staticItem.privacyEyeMasked ?? apiItem.privacyEyeMasked,
  };
}

/** API dan kelgan natijalar + statik katalogdagi yangi yozuvlar */
export function resolvePublicTreatmentResults(apiItems: TreatmentResult[] = []): TreatmentResult[] {
  const sortedApi = sortTreatmentResults(
    apiItems
      .filter((result) => result.published !== false && !isHiddenResult(result))
      .map(mergeStaticExtras)
      .filter((result) => !isHiddenResult(result)),
  );

  if (sortedApi.length > 0) {
    const apiTitles = new Set(sortedApi.map((item) => item.title.uz.trim().toLowerCase()));
    const staticOnly = TREATMENT_RESULTS.filter(
      (item) =>
        item.published !== false &&
        !isHiddenResult(item) &&
        !apiTitles.has(item.title.uz.trim().toLowerCase()),
    );
    return sortTreatmentResults([...sortedApi, ...staticOnly]);
  }

  return sortTreatmentResults(TREATMENT_RESULTS.filter((item) => !isHiddenResult(item)));
}
