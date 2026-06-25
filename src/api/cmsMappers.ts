import type { Locale } from '../types';
import type {
  ClinicBranch,
  ClinicPartner,
  ClinicVideo,
  CustomerReview,
  TreatmentResult,
} from '../data/sitePagesContent';
import type {
  ApiBranchOut,
  ApiClinicRatingOut,
  ApiClinicVideoOut,
  ApiPartnerOut,
  ApiReviewOut,
  ApiTreatmentResultOut,
  ClinicRatingCreatePayload,
  ClinicVideoCreatePayload,
  PartnerCreatePayload,
  ReviewCreatePayload,
  TreatmentResultCreatePayload,
} from './cmsTypes';

export interface ClinicRatingDisplay {
  id: string;
  platform: string;
  rating: string;
  count: number;
  url?: string;
  summary: { uz: string; ru: string; en: string };
}

function localized(
  uz: string,
  ru: string | null | undefined,
  en: string | null | undefined,
): { uz: string; ru: string; en: string } {
  return {
    uz: uz || '',
    ru: ru || uz || '',
    en: en || uz || '',
  };
}

export function mapPartnerFromApi(api: ApiPartnerOut): ClinicPartner {
  return {
    id: api.id,
    name: localized(api.name_uz, api.name_ru, api.name_en),
    logo: api.logo_url || '',
    logoVariant: api.logo_variant === 'light' || api.logo_variant === 'dark' ? api.logo_variant : undefined,
    sortOrder: api.sort_order,
    isActive: api.is_active,
  };
}

export function mapReviewFromApi(api: ApiReviewOut): CustomerReview {
  return {
    id: api.id,
    authorName: api.author_name,
    rating: api.rating,
    comment: localized(api.comment_uz, api.comment_ru, api.comment_en),
    service: api.service_uz
      ? localized(api.service_uz, api.service_ru, api.service_en)
      : undefined,
    date: api.created_at.slice(0, 10),
    published: api.published,
  };
}

export function mapBranchFromApi(api: ApiBranchOut): ClinicBranch {
  return {
    id: api.id,
    name: localized(api.name_uz, api.name_ru, api.name_en),
    address: localized(api.address_uz, api.address_ru, api.address_en),
    phone: api.phone || '',
    hours: localized(api.hours_uz || '', api.hours_ru, api.hours_en),
    services: localized(api.services_uz || '', api.services_ru, api.services_en),
    mapEmbed: api.map_embed || '',
    isMain: api.is_main,
    image: api.image || '',
    sortOrder: api.sort_order,
    isActive: api.is_active,
  };
}

export function mapTreatmentResultFromApi(api: ApiTreatmentResultOut): TreatmentResult {
  return {
    id: api.id,
    title: localized(api.title_uz, api.title_ru, api.title_en),
    description: localized(api.description_uz || '', api.description_ru, api.description_en),
    service: localized(api.service_uz || '', api.service_ru, api.service_en),
    sessions: localized(api.sessions || '', api.sessions, api.sessions),
    beforeImage: api.before_image || '',
    afterImage: api.after_image || '',
    sortOrder: api.sort_order,
    published: api.published,
  };
}

export function mapClinicVideoFromApi(api: ApiClinicVideoOut): ClinicVideo {
  return {
    id: api.id,
    title: localized(api.title_uz, api.title_ru, api.title_en),
    description: localized(api.description_uz || '', api.description_ru, api.description_en),
    src: api.src,
    thumbnail: api.thumbnail || undefined,
    duration: api.duration || '',
    category: localized(api.category_uz || '', api.category_ru, api.category_en),
    sortOrder: api.sort_order,
    isActive: api.is_active,
  };
}

export function mapClinicRatingFromApi(api: ApiClinicRatingOut): ClinicRatingDisplay {
  return {
    id: api.id,
    platform: api.platform,
    rating: String(api.rating),
    count: api.review_count,
    url: api.url || undefined,
    summary: localized(api.summary_uz || '', api.summary_ru, api.summary_en),
  };
}

export function getLocalizedApiText<T extends Record<string, unknown>>(
  item: T,
  field: string,
  locale: Locale,
): string {
  const localizedValue = item[`${field}_${locale}`];
  if (typeof localizedValue === 'string' && localizedValue.length > 0) return localizedValue;
  const uz = item[`${field}_uz`];
  return typeof uz === 'string' ? uz : '';
}

function locToApi(field: { uz: string; ru: string; en: string }) {
  return {
    uz: field.uz,
    ru: field.ru || field.uz,
    en: field.en || field.uz,
  };
}

export function mapPartnerToCreatePayload(partner: ClinicPartner): PartnerCreatePayload {
  const name = locToApi(partner.name);
  return {
    name_uz: name.uz,
    name_ru: name.ru,
    name_en: name.en,
    logo_variant: partner.logoVariant ?? 'light',
    sort_order: partner.sortOrder ?? 0,
    is_active: partner.isActive !== false,
  };
}

export function mapTreatmentResultToCreatePayload(result: TreatmentResult): TreatmentResultCreatePayload {
  return {
    title_uz: result.title.uz,
    title_ru: result.title.ru || result.title.uz,
    title_en: result.title.en || result.title.uz,
    description_uz: result.description?.uz || null,
    description_ru: result.description?.ru || null,
    description_en: result.description?.en || null,
    service_uz: result.service?.uz || null,
    service_ru: result.service?.ru || null,
    service_en: result.service?.en || null,
    sessions: result.sessions?.uz || result.sessions?.ru || null,
    sort_order: result.sortOrder ?? 0,
    published: result.published !== false,
  };
}

export function mapClinicVideoToCreatePayload(video: ClinicVideo): ClinicVideoCreatePayload {
  return {
    title_uz: video.title.uz,
    title_ru: video.title.ru || video.title.uz,
    title_en: video.title.en || video.title.uz,
    description_uz: video.description?.uz || null,
    description_ru: video.description?.ru || null,
    description_en: video.description?.en || null,
    src: video.src,
    duration: video.duration || null,
    category_uz: video.category?.uz || null,
    category_ru: video.category?.ru || null,
    category_en: video.category?.en || null,
    sort_order: video.sortOrder ?? 0,
    is_active: video.isActive !== false,
  };
}

export function mapClinicRatingToCreatePayload(rating: ClinicRatingDisplay): ClinicRatingCreatePayload {
  return {
    platform: rating.platform,
    rating: Number.parseFloat(rating.rating) || 0,
    review_count: rating.count,
    url: rating.url ?? null,
    summary_uz: rating.summary.uz || null,
    summary_ru: rating.summary.ru || null,
    summary_en: rating.summary.en || null,
    sort_order: 0,
    is_active: true,
  };
}

export function mapReviewToCreatePayload(review: CustomerReview): ReviewCreatePayload {
  return {
    author_name: review.authorName,
    rating: review.rating,
    comment_uz: review.comment.uz,
    comment_ru: review.comment.ru || undefined,
    comment_en: review.comment.en || undefined,
    service_uz: review.service?.uz || undefined,
    service_ru: review.service?.ru || undefined,
    service_en: review.service?.en || undefined,
  };
}
