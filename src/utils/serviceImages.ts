import type { Locale, ServiceCategory, ServiceDetail } from '../types';
import { findSubServiceCatalogKey } from '../data/serviceRichCatalog';
import { catalogCategoryImage, catalogSubServiceImage } from '../data/serviceImagesCatalog';
import { getLocalizedImage } from './localizedImage';

function resolveCatalogSubImage(
  category: Pick<ServiceCategory, 'id'>,
  sub: Pick<ServiceDetail, 'id' | 'name' | 'description'>,
): string | undefined {
  const direct = catalogSubServiceImage(category.id, sub.id);
  if (direct) return direct;

  const catalogKey = findSubServiceCatalogKey(sub as ServiceDetail, category as ServiceCategory);
  if (catalogKey) return catalogSubServiceImage(category.id, catalogKey);

  return undefined;
}

export function resolveSubServiceImage(
  category: Pick<ServiceCategory, 'id' | 'image' | 'images'>,
  sub: Pick<ServiceDetail, 'id' | 'name' | 'description' | 'image' | 'images'>,
  locale: Locale,
): string | null {
  const catalogImage = resolveCatalogSubImage(category, sub);
  const fromData = getLocalizedImage(sub.images, locale) ?? sub.image ?? null;
  const categoryImage = getLocalizedImage(category.images, locale) ?? category.image ?? null;

  // CMS/API subs often lack images or reuse the category hero — prefer catalog thumbnail.
  if (catalogImage && (!fromData || fromData === categoryImage)) {
    return catalogImage;
  }

  if (fromData) return fromData;
  if (catalogImage) return catalogImage;

  return catalogCategoryImage(category.id) ?? null;
}

export function resolveCategoryImage(
  category: Pick<ServiceCategory, 'id' | 'image' | 'images'>,
  locale: Locale,
): string | null {
  const catalogImage = catalogCategoryImage(category.id);
  const fromData = getLocalizedImage(category.images, locale) ?? category.image ?? null;

  if (catalogImage) return catalogImage;
  if (fromData) return fromData;

  return null;
}
