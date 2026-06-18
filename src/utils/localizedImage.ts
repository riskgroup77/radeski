import type { Locale } from '../types';
import { resolveMediaUrl } from '../api/client';
import { preserveImagePath } from '../api/mappers';

export interface LocalizedImages {
  uz: string | null;
  ru: string | null;
  en: string | null;
}

export type LocalizedImageFiles = Record<Locale, File | null>;

export const EMPTY_LOCALIZED_IMAGES: LocalizedImages = { uz: null, ru: null, en: null };

export const EMPTY_LOCALIZED_IMAGE_FILES: LocalizedImageFiles = { uz: null, ru: null, en: null };

interface ApiImageFields {
  image?: string | null;
  image_uz?: string | null;
  image_ru?: string | null;
  image_en?: string | null;
}

export function mapLocalizedImagesFromApi(api: ApiImageFields): LocalizedImages {
  const legacy = resolveMediaUrl(api.image);
  const uz = resolveMediaUrl(api.image_uz) ?? legacy;
  const ru = resolveMediaUrl(api.image_ru) ?? uz ?? legacy;
  const en = resolveMediaUrl(api.image_en) ?? uz ?? legacy;

  return { uz, ru, en };
}

export function getLocalizedImage(
  images: LocalizedImages | undefined | null,
  locale: Locale,
): string | null {
  if (!images) return null;
  return images[locale] ?? images.uz ?? images.ru ?? images.en ?? null;
}

export function localizedImagesToApiPaths(images?: LocalizedImages | null): {
  image_uz?: string | null;
  image_ru?: string | null;
  image_en?: string | null;
  image?: string | null;
} {
  if (!images) return {};
  return {
    image_uz: preserveImagePath(images.uz),
    image_ru: preserveImagePath(images.ru),
    image_en: preserveImagePath(images.en),
    image: preserveImagePath(images.uz ?? images.ru ?? images.en),
  };
}

export function hasLocalizedImageFiles(files: LocalizedImageFiles): boolean {
  return Boolean(files.uz || files.ru || files.en);
}

export function mergeLocalizedImagesAfterUpload(
  existing: LocalizedImages | undefined,
  files: LocalizedImageFiles,
  uploaded?: Partial<LocalizedImages>,
): LocalizedImages {
  const base = existing ?? EMPTY_LOCALIZED_IMAGES;
  return {
    uz: uploaded?.uz ?? (files.uz ? base.uz : base.uz),
    ru: uploaded?.ru ?? (files.ru ? base.ru : base.ru),
    en: uploaded?.en ?? (files.en ? base.en : base.en),
  };
}
