import type { LocalizedText, ServiceCategory } from '../types';
import type { CustomerReview } from '../data/sitePagesContent';

export type ReviewServiceFilterId = 'all' | string;

function normalizeServiceText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[''`]/g, "'")
    .replace(/[^a-z0-9\u0400-\u04ff\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function collectLocalizedValues(text?: LocalizedText): string[] {
  if (!text) return [];
  return [text.uz, text.ru, text.en].filter(Boolean).map((value) => normalizeServiceText(value));
}

/** Legacy review service labels that do not match category titles exactly. */
const SERVICE_TEXT_ALIASES: Record<string, string> = {
  ipl: 'apparatnaya-kosmetologiya',
  'ipl terapiya': 'apparatnaya-kosmetologiya',
  'ipl t terapiya': 'apparatnaya-kosmetologiya',
  'ipl foto yangilash': 'apparatnaya-kosmetologiya',
  'ipl foto yangilash inmode': 'apparatnaya-kosmetologiya',
  kosmetologiya: 'apparatnaya-kosmetologiya',
  'estetik kosmetologiya': 'apparatnaya-kosmetologiya',
  'kosmetologik muolajalar': 'apparatnaya-kosmetologiya',
  'lazer epilyatsiya': 'lazernaya-epilyaciya',
  'lazer epilyatsiyasi': 'lazernaya-epilyaciya',
  'soch davolash': 'trihologiya-centr-lechenie-volos',
  trixologiya: 'trihologiya-centr-lechenie-volos',
  'soch davolash trixologiya': 'trihologiya-centr-lechenie-volos',
  podologiya: 'clinika-patologii-nogtej',
  'tirnoq patologiyasi': 'clinika-patologii-nogtej',
};

function matchByAlias(serviceValues: string[]): string | null {
  for (const value of serviceValues) {
    if (SERVICE_TEXT_ALIASES[value]) return SERVICE_TEXT_ALIASES[value];
    for (const [alias, categoryId] of Object.entries(SERVICE_TEXT_ALIASES)) {
      if (value.includes(alias) || alias.includes(value)) return categoryId;
    }
  }
  return null;
}

function matchByCategoryTitles(
  serviceValues: string[],
  categories: ServiceCategory[],
): string | null {
  for (const category of categories) {
    const titles = collectLocalizedValues(category.title);
    for (const serviceValue of serviceValues) {
      for (const title of titles) {
        if (!title) continue;
        if (serviceValue === title || serviceValue.includes(title) || title.includes(serviceValue)) {
          return category.id;
        }
      }
    }
  }
  return null;
}

function matchBySubServiceNames(
  serviceValues: string[],
  categories: ServiceCategory[],
): string | null {
  for (const category of categories) {
    for (const sub of category.subServices) {
      const names = collectLocalizedValues(sub.name);
      for (const serviceValue of serviceValues) {
        for (const name of names) {
          if (!name) continue;
          if (serviceValue === name || serviceValue.includes(name) || name.includes(serviceValue)) {
            return category.id;
          }
        }
      }
    }
  }
  return null;
}

export function resolveReviewServiceCategoryId(
  review: CustomerReview,
  categories: ServiceCategory[],
): string | null {
  if (review.serviceCategoryId) return review.serviceCategoryId;

  const serviceValues = collectLocalizedValues(review.service);
  if (serviceValues.length === 0) return null;

  return (
    matchByAlias(serviceValues) ||
    matchByCategoryTitles(serviceValues, categories) ||
    matchBySubServiceNames(serviceValues, categories)
  );
}

export function filterReviewsByServiceCategory(
  reviews: CustomerReview[],
  categories: ServiceCategory[],
  filterId: ReviewServiceFilterId,
): CustomerReview[] {
  if (filterId === 'all') return reviews;

  return reviews.filter((review) => resolveReviewServiceCategoryId(review, categories) === filterId);
}

export function countReviewsByServiceCategory(
  reviews: CustomerReview[],
  categories: ServiceCategory[],
): Map<string, number> {
  const counts = new Map<string, number>();
  for (const review of reviews) {
    const categoryId = resolveReviewServiceCategoryId(review, categories);
    if (!categoryId) continue;
    counts.set(categoryId, (counts.get(categoryId) ?? 0) + 1);
  }
  return counts;
}
