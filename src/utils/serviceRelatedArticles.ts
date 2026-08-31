import type { Article } from '../types';
import { findArticleCatalogKey } from '../data/articleRichCatalog';
import { filterPublicArticles } from './articles';

/** Article catalog keys shown on service category pages (broad match). */
export const SERVICE_CATEGORY_ARTICLE_KEYS: Record<string, string[]> = {
  dermatologiya: [
    'acne',
    'adult-acne',
    'acne-dermatologist-vs-cosmetologist',
    'rosacea-radeski',
    'derma-v-vascular',
    'vitiligo',
    'psoriasis-daavlin-kokand',
    'psoriasis',
    'plasmapheresis',
  ],
  dermatoskopiya: [
    'basal-cell-carcinoma',
    'molluscum-radeski',
    'pediatric-warts-laser-radeski',
    'hollywood-spectra-pigmentation',
    'papilloma-warts',
  ],
  trixoskopiya: [
    'trichologist-trichoscopy',
    'prp-hair',
    'prp-lab-tests',
    'hair-transplant-contraindications',
  ],
  'apparatnaya-kosmetologiya': [
    'ipl-radeski',
    'ipl-therapy',
    'ipl-lumecca-pigmentation-radeski',
    'rosacea-radeski',
    'derma-v-vascular',
    'derma-v-redness-radeski',
    'hollywood-spectra-pigmentation',
    'hollywood-spectra-pores-radeski',
    'hollywood-spectra-eyebrow-tattoo',
    'tetra-pro-lifting-radeski',
    'morpheus8-rf-lifting-radeski',
    'lasemd-ultra-kokand',
    'post-acne',
    'laser-scar-resurfacing',
    'deka-co2-scars-radeski',
    'adult-acne',
    'acne',
  ],
  'in-ekcionnaya-kosmetologiya': ['plasmapheresis'],
  'lazernaya-epilyaciya': ['deka-moveo', 'deka-moveo-fergana-faq'],
  'trihologiya-centr-lechenie-volos': [
    'trichologist-trichoscopy',
    'prp-hair',
    'prp-lab-tests',
    'hair-transplant-contraindications',
  ],
  dermatoonkologiya: [
    'basal-cell-carcinoma',
    'papilloma-warts',
    'mole-screening',
    'tongue-scc',
    'penile-scc',
  ],
  'hirurgicheskaya-dermatologiya': [
    'deka-co2',
    'deka-co2-scars-radeski',
    'basal-cell-carcinoma',
    'papilloma-warts',
    'laser-scar-resurfacing',
    'pediatric-warts-co2-deka',
    'pediatric-warts-laser-radeski',
  ],
  'shkola-psoriaza': ['psoriasis-daavlin-kokand', 'psoriasis'],
  'shkola-dermatoskopii': ['basal-cell-carcinoma', 'mole-screening'],
  'clinika-patologii-nogtej': ['fungal', 'onychocryptosis-kokand'],
  dermatopatologiya: ['basal-cell-carcinoma', 'tongue-scc', 'penile-scc'],
};

/** More specific article catalog keys per sub-service (merged with category keys on sub pages). */
export const SERVICE_SUB_ARTICLE_KEYS: Record<string, Record<string, string[]>> = {
  dermatologiya: {
    'det-derm': [
      'pediatric-warts-co2-deka',
      'pediatric-warts-laser-radeski',
      'molluscum-radeski',
      'atopic-dermatitis',
    ],
    fototerapiya: ['vitiligo', 'psoriasis-daavlin-kokand', 'psoriasis'],
    immunobiologicheskaya: ['psoriasis', 'psoriasis-daavlin-kokand', 'plasmapheresis'],
  },
  dermatoskopiya: {
    'derm-konsult': ['basal-cell-carcinoma', 'molluscum-radeski', 'papilloma-warts'],
    'derm-total-body': ['basal-cell-carcinoma', 'mole-screening'],
    'derm-skin-passport': ['basal-cell-carcinoma'],
  },
  trixoskopiya: {
    'trix-konsult': ['trichologist-trichoscopy', 'prp-lab-tests'],
    'trix-alopecia': ['trichologist-trichoscopy', 'prp-hair', 'hair-transplant-contraindications'],
    'trix-monitoring': ['trichologist-trichoscopy', 'prp-hair'],
  },
  'apparatnaya-kosmetologiya': {
    'ipl-inmode': ['ipl-radeski', 'ipl-therapy', 'rosacea-radeski', 'derma-v-vascular'],
    'hollywood-spectra': [
      'hollywood-spectra-pigmentation',
      'hollywood-spectra-eyebrow-tattoo',
      'post-acne',
      'laser-scar-resurfacing',
      'adult-acne',
      'acne',
    ],
    'lazer-biorev': ['post-acne', 'adult-acne', 'lasemd-ultra-kokand'],
    'ultratovush-yuz': ['acne', 'adult-acne', 'acne-dermatologist-vs-cosmetologist'],
  },
  'lazernaya-epilyaciya': {
    'alex-lazer': ['deka-moveo', 'deka-moveo-fergana-faq'],
  },
  'trihologiya-centr-lechenie-volos': {
    trixoskop: [
      'trichologist-trichoscopy',
      'prp-hair',
      'prp-lab-tests',
      'hair-transplant-contraindications',
    ],
  },
  dermatoonkologiya: {
    biopsiya: ['basal-cell-carcinoma', 'tongue-scc', 'penile-scc', 'papilloma-warts'],
  },
  'hirurgicheskaya-dermatologiya': {
    'moh-surgery': ['basal-cell-carcinoma', 'deka-co2'],
  },
  'shkola-psoriaza': {
    'consult-group': ['psoriasis-daavlin-kokand', 'psoriasis'],
  },
  'shkola-dermatoskopii': {
    'dermatosc-lessons': ['basal-cell-carcinoma', 'mole-screening'],
  },
  'clinika-patologii-nogtej': {
    'podolog-dermatolog': ['fungal', 'onychocryptosis-kokand'],
  },
  dermatopatologiya: {
    gistolog: ['basal-cell-carcinoma', 'tongue-scc', 'penile-scc'],
  },
};

export function resolveServiceArticleCatalogKeys(
  categoryId: string,
  subId?: string,
): string[] {
  const categoryKeys = SERVICE_CATEGORY_ARTICLE_KEYS[categoryId] ?? [];
  const subKeys = subId ? SERVICE_SUB_ARTICLE_KEYS[categoryId]?.[subId] : undefined;

  if (!subKeys?.length) return categoryKeys;

  const merged = [...subKeys];
  for (const key of categoryKeys) {
    if (!merged.includes(key)) merged.push(key);
  }
  return merged;
}

export function getRelatedArticlesForService(
  articles: Article[],
  categoryId: string,
  subId?: string,
): Article[] {
  const targetKeys = resolveServiceArticleCatalogKeys(categoryId, subId);
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
