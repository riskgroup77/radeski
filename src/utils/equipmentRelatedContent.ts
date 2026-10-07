import type { Article } from '../types';
import type { ClinicVideo, TreatmentResult } from '../data/sitePagesContent';
import type { ClinicEquipmentId } from '../data/clinicEquipmentCatalog';
import type { Locale } from '../types';
import { findArticleCatalogKey } from '../data/articleRichCatalog';
import { filterPublicArticles } from './articles';

export const EQUIPMENT_ARTICLE_KEYS: Record<ClinicEquipmentId, string[]> = {
  plazmoforez: ['plasmapheresis', 'fizioterapiya-dermatovenereologiya'],
  'daavlin-neolux': ['fizioterapiya-dermatovenereologiya', 'vitiligo', 'psoriasis-daavlin-kokand', 'psoriasis'],
  'daavlin-m-series': ['fizioterapiya-dermatovenereologiya', 'vitiligo', 'psoriasis-daavlin-kokand', 'psoriasis'],
  'daavlin-aquex': ['fizioterapiya-dermatovenereologiya'],
  'deka-co2-laser': ['deka-co2-scars-radeski', 'deka-co2', 'laser-scar-resurfacing', 'post-acne'],
  'deka-alexandrite-laser': ['deka-moveo', 'deka-moveo-fergana-faq', 'lazer-epilyatsiya-samara-xatolar'],
  'surgitron-radiofrequency': ['papilloma-warts', 'pediatric-warts-laser-radeski', 'pediatric-warts-co2-deka'],
  'ipl-inmode': ['ipl-radeski', 'ipl-therapy', 'ipl-lumecca-pigmentation-radeski', 'rosacea-radeski', 'derma-v-vascular'],
  'derma-v-lutronic': ['derma-v-vascular', 'derma-v-redness-radeski', 'rosacea-radeski'],
  'hollywood-spectra-lutronic': [
    'hollywood-spectra-pigmentation',
    'hollywood-spectra-pores-radeski',
    'hollywood-spectra-eyebrow-tattoo',
    'post-acne',
    'laser-scar-resurfacing',
    'adult-acne',
    'acne',
  ],
};

const EQUIPMENT_RESULT_KEYWORDS: Record<ClinicEquipmentId, string[]> = {
  plazmoforez: ['plazma', 'plasma', 'plazmoforez', 'плазмо'],
  'daavlin-neolux': ['neolux', 'fototerapi', 'фототерап', 'uvb', 'vitiligo', 'psoriaz', 'psoriasis'],
  'daavlin-m-series': ['m series', 'm-series', 'fototerapi', 'фототерап', 'vitiligo', 'psoriaz'],
  'daavlin-aquex': ['aquex', 'ionoforez', 'ионофор'],
  'deka-co2-laser': ['deka', 'co2', 'co₂', 'smartxide', 'postakne', 'post-acne', 'chandiq', 'scar', 'шрам'],
  'deka-alexandrite-laser': ['deka', 'moveo', 'aleksandrit', 'alexandrite', 'epilyats', 'эпил'],
  'surgitron-radiofrequency': ['surgitron', 'radio', 'papilloma', 'bor', 'condyloma'],
  'ipl-inmode': ['ipl', 'inmode', 'lumecca', 'foto yangilash', 'фотоомолож'],
  'derma-v-lutronic': ['derma v', 'vascular', 'tomir', 'qizarish', 'rosacea'],
  'hollywood-spectra-lutronic': ['hollywood', 'spectra', 'karbon', 'carbon', 'peeling', 'tattoo', 'qosh'],
};

const EQUIPMENT_VIDEO_KEYWORDS: Record<ClinicEquipmentId, string[]> = {
  plazmoforez: ['plazma', 'plasma'],
  'daavlin-neolux': ['neolux', 'fototerapi', 'daavlin'],
  'daavlin-m-series': ['m series', 'fototerapi', 'daavlin'],
  'daavlin-aquex': ['aquex', 'ionoforez'],
  'deka-co2-laser': ['deka', 'co2', 'co₂', 'smartxide', 'tetra'],
  'deka-alexandrite-laser': ['deka', 'moveo', 'epilyats', 'lazer'],
  'surgitron-radiofrequency': ['surgitron', 'radio'],
  'ipl-inmode': ['ipl', 'inmode'],
  'derma-v-lutronic': ['derma v', 'vascular'],
  'hollywood-spectra-lutronic': ['hollywood', 'spectra', 'karbon'],
};

function normalizeMatchText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function matchesKeywords(text: string, keywords: string[]): boolean {
  if (!keywords.length) return false;
  const normalized = normalizeMatchText(text);
  return keywords.some((keyword) => normalized.includes(normalizeMatchText(keyword)));
}

function resultSearchText(result: TreatmentResult, locale: Locale): string {
  return [result.title[locale], result.description[locale], result.service[locale]].join(' ');
}

function videoSearchText(video: ClinicVideo, locale: Locale): string {
  return [video.title[locale], video.description[locale], video.category[locale]].join(' ');
}

export function getRelatedArticlesForEquipment(
  articles: Article[],
  equipmentId: ClinicEquipmentId,
): Article[] {
  const targetKeys = EQUIPMENT_ARTICLE_KEYS[equipmentId] ?? [];
  if (targetKeys.length === 0) return [];

  const publicArticles = filterPublicArticles(articles);
  const matched: Article[] = [];
  const seen = new Set<string>();

  for (const key of targetKeys) {
    for (const article of publicArticles) {
      if (seen.has(article.id)) continue;
      if (findArticleCatalogKey(article) === key) {
        matched.push(article);
        seen.add(article.id);
      }
    }
  }

  return matched;
}

export function getRelatedResultsForEquipment(
  results: TreatmentResult[],
  equipmentId: ClinicEquipmentId,
  locale: Locale,
): TreatmentResult[] {
  const keywords = EQUIPMENT_RESULT_KEYWORDS[equipmentId] ?? [];
  return results.filter(
    (result) => result.published !== false && matchesKeywords(resultSearchText(result, locale), keywords),
  );
}

export function getRelatedVideosForEquipment(
  videos: ClinicVideo[],
  equipmentId: ClinicEquipmentId,
  locale: Locale,
): ClinicVideo[] {
  const keywords = EQUIPMENT_VIDEO_KEYWORDS[equipmentId] ?? [];
  return videos.filter(
    (video) => video.isActive !== false && matchesKeywords(videoSearchText(video, locale), keywords),
  );
}
