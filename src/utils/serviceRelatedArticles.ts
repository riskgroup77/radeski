import type { Article } from '../types';
import { findArticleCatalogKey } from '../data/articleCatalogKeys';
import { filterPublicArticles } from './articles';

/** Article catalog keys shown on service category pages (broad match). */
export const SERVICE_CATEGORY_ARTICLE_KEYS: Record<string, string[]> = {
  dermatologiya: ['dermatologist-visit', 'hand-dermatitis', 'pityriasis-versicolor', 'nail-psoriasis', 'keloid-scar', 'scalp-itch', 'tongue-sores', 'furuncle', 'child-atopic-dermatitis', 'herpes-zoster', 'cold-allergy', 'vitiligo-guide', 'scalp-psoriasis', 'cheilitis', 'lichen-planus', 
    'acne',
    'adult-acne-dermatologist',
    'seborrheic-dermatitis',
    'eczema',
    'skin-itching',
    'urticaria-skin-allergy',
    'herpes',
    'demodex',
    'scabies',
    'child-rash',
    'pityriasis-rosea',
    'perioral-dermatitis',
    'fungal',
    'winter-skin-care',
    'adult-acne',
    'acne-dermatologist-vs-cosmetologist',
    'rosacea-radeski',
    'derma-v-vascular',
    'vitiligo',
    'psoriasis-daavlin-kokand',
    'psoriasis',
    'plasmapheresis',
    'fizioterapiya-dermatovenereologiya',
    'immunobiologiya-radeski',
    'dnevnoj-stacionar-radeski',
    'psoriaz-klinik-keys-bahridinov-radeski',
  ],
  dermatoskopiya: [
    'seborrheic-keratosis',
    'basal-cell-carcinoma',
    'molluscum-radeski',
    'pediatric-warts-laser-radeski',
    'hollywood-spectra-pigmentation',
    'papilloma-warts',
    'photofinder-diagnostika-radeski',
  ],
  trixoskopiya: [
    'female-hair-loss',
    'male-hair-loss',
    'trichologist-trichoscopy',
    'soch-tokilishi-normal-patologiya-radeski',
    'alopecia-areata-klinik-holat',
    'prp-hair',
    'prp-lab-tests',
    'hair-transplant-contraindications',
  ],
  'apparatnaya-kosmetologiya': ['device-cosmetology', 'tattoo-removal', 'infant-hemangioma', 'keloid-scar', 'facial-cleansing', 'couperose', 'new-year-skin-plan', 'plantar-warts', 'leg-veins', 'chemical-peel', 'pigment-spots-winter', 
    'melasma',
    'carbon-peel',
    'milia',
    'striae',
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
  'in-ekcionnaya-kosmetologiya': ['botox-or-filler', 'mesotherapy', 'dark-circles', 'new-year-skin-plan', 'hyperhidrosis', 
    'botulinoterapiya-radeski',
    'biorevitalizatsiya-radeski',
    'konturnaya-guby-radeski',
    'kontur-plastika-radeski',
    'plasmapheresis',
  ],
  'lazernaya-epilyaciya': ['laser-hair-removal-season', 'deka-moveo', 'deka-moveo-fergana-faq', 'lazer-epilyatsiya-samara-xatolar'],
  'trihologiya-centr-lechenie-volos': ['scalp-itch', 'grey-hair', 'child-scalp-ringworm', 'hair-transplant-fue-dhi', 'hair-transplant-aftercare', 'hair-transplant-complications', 'beard-transplant', 'mesotherapy', 'scalp-psoriasis', 
    'female-hair-loss',
    'male-hair-loss',
    'trichologist-trichoscopy',
    'soch-tokilishi-normal-patologiya-radeski',
    'prp-hair',
    'prp-lab-tests',
    'hair-transplant-contraindications',
    'soch-profilaktika-inyeksii-radeski',
  ],
  dermatoonkologiya: ['tongue-sores', 'mole-removal', 'actinic-keratosis', 'melanoma', 'skin-biopsy', 
    'mole-screening',
    'papilloma-removal',
    'seborrheic-keratosis',
    'dermatopatologiya-radeski',
    'basal-cell-carcinoma',
    'papilloma-warts',
    'mole-screening',
    'tongue-scc',
    'penile-scc',
  ],
  'hirurgicheskaya-dermatologiya': ['actinic-keratosis', 'mole-removal', 'subungual-wart', 'keloid-scar', 'melanoma', 
    'papilloma-removal',
    'seborrheic-keratosis',
    'deka-co2',
    'deka-co2-scars-radeski',
    'basal-cell-carcinoma',
    'papilloma-warts',
    'laser-scar-resurfacing',
    'pediatric-warts-co2-deka',
    'pediatric-warts-laser-radeski',
  ],
  'shkola-psoriaza': [
    'psoriasis-daavlin-kokand',
    'psoriasis',
    'immunobiologiya-radeski',
    'psoriaz-klinik-keys-bahridinov-radeski',
  ],
  'shkola-dermatoskopii': ['basal-cell-carcinoma', 'mole-screening'],
  'clinika-patologii-nogtej': ['podiatrist', 'subungual-wart', 'nail-psoriasis', 'brittle-nails', 'plantar-warts', 'ingrown-nail', 'nail-color-change', 'nail-fungus', 'calluses', 'cracked-heels', 'diabetic-foot', 'fungal', 'onychocryptosis-kokand', 'klinika-patologii-nogtej-stopy-radeski'],
  dermatopatologiya: ['skin-biopsy', 'dermatopatologiya-radeski', 'basal-cell-carcinoma', 'tongue-scc', 'penile-scc'],
};

/** More specific article catalog keys per sub-service (merged with category keys on sub pages). */
export const SERVICE_SUB_ARTICLE_KEYS: Record<string, Record<string, string[]>> = {
  dermatologiya: {
    'det-derm': ['child-atopic-dermatitis', 
      'child-rash',
      'scabies',
      'pediatric-warts-co2-deka',
      'pediatric-warts-laser-radeski',
      'molluscum-radeski',
      'atopic-dermatitis',
    ],
    fototerapiya: ['child-atopic-dermatitis', 'vitiligo-guide', 'lichen-planus', 
      'fizioterapiya-dermatovenereologiya',
      'eczema',
      'vitiligo',
      'psoriasis-daavlin-kokand',
      'psoriasis',
      'psoriaz-klinik-keys-bahridinov-radeski',
    ],
    immunobiologicheskaya: ['scalp-psoriasis', 'immunobiologiya-radeski', 'psoriasis', 'psoriasis-daavlin-kokand', 'urticaria-skin-allergy', 'eczema', 'plasmapheresis'],
  },
  dermatoskopiya: {
    'derm-konsult': ['basal-cell-carcinoma', 'molluscum-radeski', 'papilloma-warts'],
    'derm-total-body': ['actinic-keratosis', 'melanoma', 'basal-cell-carcinoma', 'mole-screening'],
    'derm-skin-passport': ['basal-cell-carcinoma', 'photofinder-diagnostika-radeski'],
  },
  trixoskopiya: {
    'trix-konsult': ['scalp-psoriasis', 'soch-tokilishi-normal-patologiya-radeski', 'trichologist-trichoscopy', 'prp-lab-tests'],
    'trix-alopecia': [
      'female-hair-loss',
      'male-hair-loss',
      'soch-tokilishi-normal-patologiya-radeski',
      'trichologist-trichoscopy',
      'prp-hair',
      'hair-transplant-contraindications',
    ],
    'trix-monitoring': ['trichologist-trichoscopy', 'prp-hair'],
  },
  'apparatnaya-kosmetologiya': {
    'ipl-inmode': ['pigment-spots-winter', 'ipl-radeski', 'ipl-therapy', 'rosacea-radeski', 'derma-v-vascular'],
    'hollywood-spectra': ['pigment-spots-winter', 
      'hollywood-spectra-pigmentation',
      'hollywood-spectra-eyebrow-tattoo',
      'post-acne',
      'laser-scar-resurfacing',
      'adult-acne',
      'acne',
    ],
    'lazer-biorev': ['dark-circles', 'new-year-skin-plan', 
      'lazer-biorevitalizatsiya-radeski',
      'biorevitalizatsiya-radeski',
      'post-acne',
      'adult-acne',
      'lasemd-ultra-kokand',
    ],
    'ultratovush-yuz': ['facial-cleansing', 'new-year-skin-plan', 'chemical-peel', 'acne', 'adult-acne', 'acne-dermatologist-vs-cosmetologist', 'milia'],
  },
  'in-ekcionnaya-kosmetologiya': {
    botulino: ['botox-or-filler', 'new-year-skin-plan', 'hyperhidrosis', 'botulinoterapiya-radeski', 'biorevitalizatsiya-radeski'],
    biorev: ['mesotherapy', 'dark-circles', 'biorevitalizatsiya-radeski', 'botulinoterapiya-radeski', 'plasmapheresis'],
    konturnaya: ['botox-or-filler', 'dark-circles', 
      'kontur-plastika-radeski',
      'konturnaya-guby-radeski',
      'biorevitalizatsiya-radeski',
      'botulinoterapiya-radeski',
    ],
  },
  'lazernaya-epilyaciya': {
    'alex-lazer': ['deka-moveo', 'deka-moveo-fergana-faq', 'lazer-epilyatsiya-samara-xatolar', 'laser-hair-removal-season'],
  },
  'trihologiya-centr-lechenie-volos': {
    trixoskop: [
      'soch-tokilishi-normal-patologiya-radeski',
      'trichologist-trichoscopy',
      'alopecia-areata-klinik-holat',
      'prp-hair',
      'prp-lab-tests',
      'hair-transplant-contraindications',
    ],
  },
  dermatoonkologiya: {
    biopsiya: ['melanoma', 'skin-biopsy', 'basal-cell-carcinoma', 'tongue-scc', 'penile-scc', 'papilloma-warts'],
  },
  'hirurgicheskaya-dermatologiya': {
    'moh-surgery': ['basal-cell-carcinoma', 'deka-co2'],
  },
  'shkola-psoriaza': {
    'consult-group': ['psoriasis-daavlin-kokand', 'psoriasis', 'psoriaz-klinik-keys-bahridinov-radeski'],
  },
  'shkola-dermatoskopii': {
    'dermatosc-lessons': ['basal-cell-carcinoma', 'mole-screening'],
  },
  'clinika-patologii-nogtej': {
    'podolog-dermatolog': ['brittle-nails', 'plantar-warts', 'ingrown-nail', 'nail-color-change', 'fungal', 'onychocryptosis-kokand', 'klinika-patologii-nogtej-stopy-radeski', 'calluses', 'cracked-heels', 'diabetic-foot', 'nail-fungus'],
  },
  dermatopatologiya: {
    gistolog: ['skin-biopsy', 'dermatopatologiya-radeski', 'basal-cell-carcinoma', 'tongue-scc', 'penile-scc'],
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
