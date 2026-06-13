import { Locale, Doctor, DoctorCredentials, ServiceCategory, ServiceDetail, PriceItem, Article } from '../types';
import {
  ApiDoctor,
  ApiServiceCategory,
  ApiPrice,
  ApiArticle,
  ApiArticleListItem,
  DoctorCreatePayload,
  ServiceCategoryCreatePayload,
  SubServicePayload,
  PriceCreatePayload,
  ArticleCreatePayload,
} from './types';

export function getLocalizedField(
  item: Record<string, unknown>,
  field: string,
  locale: Locale
): string {
  const localized = item[`${field}_${locale}`];
  if (typeof localized === 'string' && localized.length > 0) return localized;
  const fallback = item[`${field}_uz`];
  return typeof fallback === 'string' ? fallback : '';
}

export function mapCredentialsFromApi(credentials: ApiDoctor['credentials']): DoctorCredentials | undefined {
  if (!credentials) return undefined;
  return {
    licenseId: credentials.license_id || '',
    yearsActive: credentials.years_active ?? 0,
    certificatesCount: credentials.certificates_count ?? 0,
    researchCount: credentials.research_count ?? 0,
  };
}

export function mapDoctorFromApi(api: ApiDoctor): Doctor {
  return {
    id: api.id,
    name: { uz: api.name_uz, ru: api.name_ru, en: api.name_en },
    role: { uz: api.role_uz, ru: api.role_ru, en: api.role_en },
    bio: {
      uz: api.bio_uz || '',
      ru: api.bio_ru || api.bio_uz || '',
      en: api.bio_en || api.bio_uz || '',
    },
    experience: {
      uz: api.experience_uz || '',
      ru: api.experience_ru || api.experience_uz || '',
      en: api.experience_en || api.experience_uz || '',
    },
    education: {
      uz: api.education_uz || '',
      ru: api.education_ru || api.education_uz || '',
      en: api.education_en || api.education_uz || '',
    },
    photo: api.photo || '',
    credentials: mapCredentialsFromApi(api.credentials),
  };
}

export function mapSubServiceFromApi(sub: ApiServiceCategory['sub_services'][number]): ServiceDetail {
  return {
    id: sub.id,
    name: { uz: sub.name_uz, ru: sub.name_ru, en: sub.name_en },
    description: {
      uz: sub.description_uz || '',
      ru: sub.description_ru || sub.description_uz || '',
      en: sub.description_en || sub.description_uz || '',
    },
  };
}

export function mapServiceCategoryFromApi(api: ApiServiceCategory): ServiceCategory {
  return {
    id: api.id,
    title: { uz: api.title_uz, ru: api.title_ru, en: api.title_en },
    description: {
      uz: api.description_uz || '',
      ru: api.description_ru || api.description_uz || '',
      en: api.description_en || api.description_uz || '',
    },
    icon: api.icon || 'Activity',
    subServices: api.sub_services.map(mapSubServiceFromApi),
  };
}

export function formatPriceValue(value: number): string {
  return `${Math.round(value).toLocaleString('uz-UZ')} UZS`;
}

export function parsePriceValue(price: string): number {
  const digits = price.replace(/[^\d]/g, '');
  return digits ? Number(digits) : 0;
}

export function mapPriceFromApi(api: ApiPrice): PriceItem {
  return {
    id: api.id,
    name: { uz: api.name_uz, ru: api.name_ru, en: api.name_en },
    price: formatPriceValue(api.price_value),
    priceValue: api.price_value,
    category: api.category_id,
  };
}

function formatArticleDate(date: string): string {
  if (!date) return '';
  return date.slice(0, 10);
}

export function mapArticleListItemFromApi(api: ApiArticleListItem): Article {
  return {
    id: api.id,
    slug: api.slug,
    title: { uz: api.title_uz, ru: api.title_ru, en: api.title_en },
    summary: {
      uz: api.summary_uz || '',
      ru: api.summary_ru || api.summary_uz || '',
      en: api.summary_en || api.summary_uz || '',
    },
    content: { uz: '', ru: '', en: '' },
    author: {
      uz: api.author_uz || '',
      ru: api.author_ru || api.author_uz || '',
      en: api.author_en || api.author_uz || '',
    },
    date: formatArticleDate(api.date),
    image: api.image || '',
    views: api.views,
  };
}

export function mapArticleFromApi(api: ApiArticle): Article {
  return {
    ...mapArticleListItemFromApi(api),
    content: {
      uz: api.content_uz || '',
      ru: api.content_ru || api.content_uz || '',
      en: api.content_en || api.content_uz || '',
    },
  };
}

export function mapDoctorToCreatePayload(
  doctor: Partial<Doctor>,
  credentials?: DoctorCredentials
): DoctorCreatePayload {
  return {
    name_uz: doctor.name?.uz || '',
    name_ru: doctor.name?.ru || doctor.name?.uz || '',
    name_en: doctor.name?.en || doctor.name?.uz || '',
    role_uz: doctor.role?.uz || '',
    role_ru: doctor.role?.ru || doctor.role?.uz || '',
    role_en: doctor.role?.en || doctor.role?.uz || '',
    bio_uz: doctor.bio?.uz || null,
    bio_ru: doctor.bio?.ru || null,
    bio_en: doctor.bio?.en || null,
    experience_uz: doctor.experience?.uz || null,
    experience_ru: doctor.experience?.ru || null,
    experience_en: doctor.experience?.en || null,
    education_uz: doctor.education?.uz || null,
    education_ru: doctor.education?.ru || null,
    education_en: doctor.education?.en || null,
    photo: doctor.photo || null,
    credentials: credentials
      ? {
          license_id: credentials.licenseId || null,
          years_active: credentials.yearsActive ?? null,
          certificates_count: credentials.certificatesCount ?? null,
          research_count: credentials.researchCount ?? null,
        }
      : null,
  };
}

export function mapSubServiceToPayload(sub: ServiceDetail): SubServicePayload {
  return {
    name_uz: sub.name.uz,
    name_ru: sub.name.ru || sub.name.uz,
    name_en: sub.name.en || sub.name.uz,
    description_uz: sub.description.uz || null,
    description_ru: sub.description.ru || null,
    description_en: sub.description.en || null,
  };
}

export function mapServiceCategoryToPayload(category: ServiceCategory): ServiceCategoryCreatePayload {
  return {
    id: category.id,
    title_uz: category.title.uz,
    title_ru: category.title.ru || category.title.uz,
    title_en: category.title.en || category.title.uz,
    description_uz: category.description.uz || null,
    description_ru: category.description.ru || null,
    description_en: category.description.en || null,
    icon: category.icon || null,
    sub_services: category.subServices.map(mapSubServiceToPayload),
  };
}

export function mapPriceToCreatePayload(price: Partial<PriceItem>): PriceCreatePayload {
  return {
    category_id: price.category || 'dermatologiya',
    name_uz: price.name?.uz || '',
    name_ru: price.name?.ru || price.name?.uz || '',
    name_en: price.name?.en || price.name?.uz || '',
    price_value: price.priceValue ?? parsePriceValue(price.price || '0'),
  };
}

export function mapArticleToCreatePayload(article: Partial<Article>): ArticleCreatePayload {
  return {
    slug: article.slug || `article-${Date.now()}`,
    title_uz: article.title?.uz || '',
    title_ru: article.title?.ru || article.title?.uz || '',
    title_en: article.title?.en || article.title?.uz || '',
    summary_uz: article.summary?.uz || null,
    summary_ru: article.summary?.ru || null,
    summary_en: article.summary?.en || null,
    content_uz: article.content?.uz || null,
    content_ru: article.content?.ru || null,
    content_en: article.content?.en || null,
    author_uz: article.author?.uz || null,
    author_ru: article.author?.ru || null,
    author_en: article.author?.en || null,
    image: article.image || null,
    date: article.date ? `${article.date}T08:00:00Z` : null,
  };
}
