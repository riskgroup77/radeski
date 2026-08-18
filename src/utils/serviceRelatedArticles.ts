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
    'vitiligo',
    'psoriasis-daavlin-kokand',
    'psoriasis',
    'plasmapheresis',
  ],
  'apparatnaya-kosmetologiya': [
    'ipl-therapy',
    'rosacea-radeski',
    'post-acne',
    'laser-scar-resurfacing',
    'adult-acne',
    'acne',
  ],
  'in-ekcionnaya-kosmetologiya': ['plasmapheresis'],
  'lazernaya-epilyaciya': ['deka-moveo'],
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
    'basal-cell-carcinoma',
    'papilloma-warts',
    'laser-scar-resurfacing',
    'pediatric-warts-co2-deka',
    'pediatric-warts-laser-radeski',
  ],
  'shkola-psoriaza': ['psoriasis-daavlin-kokand', 'psoriasis'],
  'shkola-dermatoskopii': ['basal-cell-carcinoma', 'mole-screening'],
  'clinika-patologii-nogtej': ['fungal'],
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
  'apparatnaya-kosmetologiya': {
    'ipl-inmode': ['ipl-therapy', 'rosacea-radeski'],
    'hollywood-spectra': ['post-acne', 'laser-scar-resurfacing', 'adult-acne', 'acne'],
    'lazer-biorev': ['post-acne', 'adult-acne'],
    'ultratovush-yuz': ['acne', 'adult-acne', 'acne-dermatologist-vs-cosmetologist'],
  },
  'lazernaya-epilyaciya': {
    'alex-lazer': ['deka-moveo'],
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
    'podolog-dermatolog': ['fungal'],
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
