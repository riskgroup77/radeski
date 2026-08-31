import type { LocalizedText, ServiceCategory } from '../types';
import type { CustomerReview } from '../data/sitePagesContent';

export type ReviewServiceFilterId = 'all' | string;

/** Reviews that cannot be matched to a service category after text analysis. */
export const GENERAL_REVIEW_CATEGORY_ID = 'general';

function normalizeServiceText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[''`ʻʼ]/g, "'")
    .replace(/[^a-z0-9\u0400-\u04ff\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function collectLocalizedValues(text?: LocalizedText): string[] {
  if (!text) return [];
  return [text.uz, text.ru, text.en].filter(Boolean).map((value) => normalizeServiceText(value));
}

function collectReviewSearchText(review: CustomerReview): string[] {
  return [...collectLocalizedValues(review.service), ...collectLocalizedValues(review.comment)];
}

/** Legacy review service labels that do not match category titles exactly. */
const SERVICE_TEXT_ALIASES: Record<string, string> = {
  ipl: 'apparatnaya-kosmetologiya',
  'ipl terapiya': 'apparatnaya-kosmetologiya',
  'ipl t terapiya': 'apparatnaya-kosmetologiya',
  'ipl foto yangilash': 'apparatnaya-kosmetologiya',
  'ipl foto yangilash inmode': 'apparatnaya-kosmetologiya',
  kosmetologiya: 'apparatnaya-kosmetologiya',
  kosmetolog: 'apparatnaya-kosmetologiya',
  kasmetolog: 'apparatnaya-kosmetologiya',
  'estetik kosmetologiya': 'apparatnaya-kosmetologiya',
  'kosmetologik muolajalar': 'apparatnaya-kosmetologiya',
  'lazer epilyatsiya': 'lazernaya-epilyaciya',
  'lazer epilyatsiyasi': 'lazernaya-epilyaciya',
  epilyatsiya: 'lazernaya-epilyaciya',
  'soch davolash': 'trihologiya-centr-lechenie-volos',
  trixologiya: 'trihologiya-centr-lechenie-volos',
  trixolog: 'trihologiya-centr-lechenie-volos',
  'soch davolash trixologiya': 'trihologiya-centr-lechenie-volos',
  podologiya: 'clinika-patologii-nogtej',
  padolog: 'clinika-patologii-nogtej',
  podolog: 'clinika-patologii-nogtej',
  'tirnoq patologiyasi': 'clinika-patologii-nogtej',
  dermatologiya: 'dermatologiya',
  dermatolog: 'dermatologiya',
  dermatoskopiya: 'dermatoskopiya',
  trixoskopiya: 'trixoskopiya',
  'dermato-onkologiya': 'dermatoonkologiya',
  onkodermatolog: 'dermatoonkologiya',
  'inyeksion kosmetologiya': 'in-ekcionnaya-kosmetologiya',
  'injektsion kosmetologiya': 'in-ekcionnaya-kosmetologiya',
  botox: 'in-ekcionnaya-kosmetologiya',
  'jarrohlik dermatologiyasi': 'hirurgicheskaya-dermatologiya',
  dermatopatologiya: 'dermatopatologiya',
};

/** Keyword hints from free-text reviews (service label or comment body). Order matters. */
const COMMENT_CATEGORY_KEYWORDS: Array<{ categoryId: string; keywords: string[] }> = [
  {
    categoryId: 'clinika-patologii-nogtej',
    keywords: [
      'podolog',
      'padolog',
      'tirnoq',
      'onikomikoz',
      'zamburug',
      'pedikyur',
      'podiatr',
      'nog patolog',
      'nogtej',
      'подолог',
      'ногт',
    ],
  },
  {
    categoryId: 'lazernaya-epilyaciya',
    keywords: ['epilyats', 'epil ', ' tuk olib', 'lazer epil', 'hair removal', 'эпиляц'],
  },
  {
    categoryId: 'trihologiya-centr-lechenie-volos',
    keywords: [
      'trixolog',
      'trixollog',
      'triholog',
      'soch tukil',
      'soch tuk',
      'soch to\'kil',
      'soch to kil',
      'plazma',
      'plazmoterapi',
      'prp',
      'mesoterapiya',
      'alopec',
      'volos',
      'волос',
      'трихолог',
    ],
  },
  {
    categoryId: 'trixoskopiya',
    keywords: ['trixoskop', 'трихоскоп'],
  },
  {
    categoryId: 'dermatoskopiya',
    keywords: ['dermatoskop', 'дерматоскоп'],
  },
  {
    categoryId: 'dermatoonkologiya',
    keywords: ['onkoderm', 'onkolog', "o'sma", 'osma ', 'nevusa', 'melanom', 'bazalioma', 'bazal', 'онкодерм', 'онколог', 'базалиом'],
  },
  {
    categoryId: 'hirurgicheskaya-dermatologiya',
    keywords: [
      'jarroh',
      'chandiq',
      'kiser',
      'operatsiya',
      'mohs',
      'olib tashla',
      'xirurg',
      'хирург',
      'рубц',
    ],
  },
  {
    categoryId: 'in-ekcionnaya-kosmetologiya',
    keywords: [
      'botul',
      'filler',
      'konturn',
      'inyeks',
      'injek',
      'mezoterapi',
      'biorevital',
      'ботул',
      'филлер',
      'контур',
    ],
  },
  {
    categoryId: 'apparatnaya-kosmetologiya',
    keywords: [
      'ipl',
      'hollywood',
      'karbon',
      'morpheus',
      'rf lifting',
      'kosmetolog',
      'kasmetolog',
      'косметолог',
      'apparat',
      'lazer aparat',
      'co2',
      'inmode',
      'lumecca',
      'косметолог',
      'аппарат',
    ],
  },
  {
    categoryId: 'dermatopatologiya',
    keywords: ['gistolog', 'biopsiya', 'patolog', 'гистолог', 'биопс', 'патолог'],
  },
  {
    categoryId: 'dermatologiya',
    keywords: [
      'dermatolog',
      'teri toshma',
      'teri kasall',
      'akne',
      'psoriaz',
      'psoria',
      'ekzema',
      'vitiligo',
      'qichish',
      'terini',
      'dermatit',
      'дерматолог',
      'акне',
      'псориаз',
      'экзем',
    ],
  },
];

function textMatchesKeyword(normalizedText: string, keyword: string): boolean {
  const normalizedKeyword = normalizeServiceText(keyword);
  if (!normalizedKeyword) return false;
  return normalizedText.includes(normalizedKeyword);
}

function matchByAlias(searchValues: string[]): string | null {
  for (const value of searchValues) {
    if (SERVICE_TEXT_ALIASES[value]) return SERVICE_TEXT_ALIASES[value];
    for (const [alias, categoryId] of Object.entries(SERVICE_TEXT_ALIASES)) {
      if (value.includes(alias) || alias.includes(value)) return categoryId;
    }
  }
  return null;
}

function matchByCategoryTitles(
  searchValues: string[],
  categories: ServiceCategory[],
): string | null {
  for (const category of categories) {
    const titles = collectLocalizedValues(category.title);
    for (const searchValue of searchValues) {
      for (const title of titles) {
        if (!title) continue;
        if (searchValue === title || searchValue.includes(title) || title.includes(searchValue)) {
          return category.id;
        }
      }
    }
  }
  return null;
}

function matchBySubServiceNames(
  searchValues: string[],
  categories: ServiceCategory[],
): string | null {
  for (const category of categories) {
    for (const sub of category.subServices) {
      const names = collectLocalizedValues(sub.name);
      for (const searchValue of searchValues) {
        for (const name of names) {
          if (!name) continue;
          if (searchValue === name || searchValue.includes(name) || name.includes(searchValue)) {
            return category.id;
          }
        }
      }
    }
  }
  return null;
}

function matchByCommentKeywords(searchValues: string[]): string | null {
  const combined = searchValues.join(' ');
  if (!combined) return null;

  for (const rule of COMMENT_CATEGORY_KEYWORDS) {
    for (const keyword of rule.keywords) {
      if (textMatchesKeyword(combined, keyword)) {
        return rule.categoryId;
      }
    }
  }
  return null;
}

export function resolveReviewServiceCategoryId(
  review: CustomerReview,
  categories: ServiceCategory[],
): string {
  if (review.serviceCategoryId) return review.serviceCategoryId;

  const searchValues = collectReviewSearchText(review);

  const matched =
    matchByAlias(searchValues) ||
    matchByCategoryTitles(searchValues, categories) ||
    matchBySubServiceNames(searchValues, categories) ||
    matchByCommentKeywords(searchValues);

  return matched ?? GENERAL_REVIEW_CATEGORY_ID;
}

export function filterReviewsByServiceCategory(
  reviews: CustomerReview[],
  categories: ServiceCategory[],
  filterId: ReviewServiceFilterId,
): CustomerReview[] {
  if (filterId === 'all') return reviews;

  return reviews.filter(
    (review) => resolveReviewServiceCategoryId(review, categories) === filterId,
  );
}

export function countReviewsByServiceCategory(
  reviews: CustomerReview[],
  categories: ServiceCategory[],
): Map<string, number> {
  const counts = new Map<string, number>();
  for (const review of reviews) {
    const categoryId = resolveReviewServiceCategoryId(review, categories);
    counts.set(categoryId, (counts.get(categoryId) ?? 0) + 1);
  }
  return counts;
}

export function getGeneralReviewCategoryLabel(locale: 'uz' | 'ru' | 'en'): string {
  if (locale === 'ru') return 'Общие отзывы';
  if (locale === 'en') return 'General feedback';
  return 'Umumiy fikrlar';
}
