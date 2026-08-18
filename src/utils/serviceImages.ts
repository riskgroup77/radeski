import type { Locale, ServiceCategory, ServiceDetail } from '../types';
import { catalogCategoryImage, catalogSubServiceImage } from '../data/serviceImagesCatalog';
import { getLocalizedImage } from './localizedImage';

export function resolveSubServiceImage(
  category: Pick<ServiceCategory, 'id' | 'image' | 'images'>,
  sub: Pick<ServiceDetail, 'id' | 'image' | 'images'>,
  locale: Locale,
): string | null {
  const catalogImage = catalogSubServiceImage(category.id, sub.id);
  const fromData = getLocalizedImage(sub.images, locale) ?? sub.image ?? null;
  const categoryImage = getLocalizedImage(category.images, locale) ?? category.image ?? null;

  // CMS sometimes copies the category hero onto every sub — prefer catalog thumbnail instead.
  if (catalogImage && (!fromData || fromData === categoryImage)) {
    return catalogImage;
  }

  if (fromData) return fromData;
  if (catalogImage) return catalogImage;
  if (categoryImage) return categoryImage;

  return catalogCategoryImage(category.id) ?? null;
}

export function resolveCategoryImage(
  category: Pick<ServiceCategory, 'id' | 'image' | 'images'>,
  locale: Locale,
): string | null {
  const fromData = getLocalizedImage(category.images, locale) ?? category.image;
  if (fromData) return fromData;

  return catalogCategoryImage(category.id) ?? null;
}
