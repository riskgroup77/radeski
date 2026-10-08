import { isApiRecordId } from '../utils/apiRecord';
import type { Article, Locale, ServiceCategory } from '../types';
import { CLINIC_PHONE_KOKAND, CLINIC_PHONE_PRIMARY } from '../config/clinicContacts';
import { absoluteUrl, articlePath } from '../routing/paths';
import { resolveArticleRouteKey } from '../utils/articles';
import { getLocalizedImage } from '../utils/localizedImage';
import { CLINIC_GEO, CLINIC_REVIEW_LINKS, CLINIC_SOCIAL_LINKS, KOKAND_BRANCH_GEO } from '../config/links';
import type { Doctor } from '../types';
import type { ClinicVideo } from '../data/sitePagesContent';
import {
  isoDuration,
  videoDescription,
  videoDurationSeconds,
  videoFileInfo,
  videoPath,
  videoPoster,
  videoRouteKey,
  videoTitle,
} from '../utils/videoMeta';

/** Stable @id of the clinic entity — branches, doctors and articles point to it. */
export function clinicEntityId(origin: string): string {
  return `${origin}/#clinic`;
}

/** Official profiles of the clinic elsewhere (lets Google/Yandex tie them to this site). */
const CLINIC_SAME_AS = [
  CLINIC_REVIEW_LINKS.googleMaps,
  CLINIC_REVIEW_LINKS.yandex,
  CLINIC_SOCIAL_LINKS.instagram.fergana,
  CLINIC_SOCIAL_LINKS.telegram,
  CLINIC_SOCIAL_LINKS.facebook,
];

function absoluteMedia(origin: string, path: string | null | undefined): string | undefined {
  if (!path) return undefined;
  if (path.startsWith('http')) return path;
  return `${origin}${path.startsWith('/') ? '' : '/'}${path}`;
}

type ClinicRatingLike = {
  id?: string;
  rating: string | number;
  count: number;
};

function parseRatingValue(rating: string | number): number {
  const value = typeof rating === 'number' ? rating : Number.parseFloat(rating);
  return Number.isFinite(value) ? value : 0;
}

function branchPlace(
  locale: Locale,
  branch: 'fergana' | 'kokand',
  origin: string,
): Record<string, unknown> {
  if (branch === 'fergana') {
    return {
      '@type': 'MedicalClinic',
      '@id': `${origin}/#branch-fergana`,
      parentOrganization: { '@id': clinicEntityId(origin) },
      hasMap: CLINIC_REVIEW_LINKS.googleMaps,
      name:
        locale === 'uz'
          ? "Radeski Skin Clinic — Farg'ona filiali"
          : locale === 'ru'
            ? 'Radeski Skin Clinic — филиал в Фергане'
            : 'Radeski Skin Clinic — Fergana branch',
      address: {
        '@type': 'PostalAddress',
        streetAddress: "O'zbekiston Ovozi ko'chasi, 1A-bino",
        addressLocality: locale === 'ru' ? 'Фергана' : "Farg'ona",
        addressRegion: locale === 'ru' ? 'Ферганская область' : "Farg'ona viloyati",
        addressCountry: 'UZ',
      },
      telephone: CLINIC_PHONE_PRIMARY.tel,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: CLINIC_GEO.lat,
        longitude: CLINIC_GEO.lng,
      },
      url: `${origin}/uz/branches`,
    };
  }

  return {
    '@type': 'MedicalClinic',
    '@id': `${origin}/#branch-kokand`,
    parentOrganization: { '@id': clinicEntityId(origin) },
    sameAs: [CLINIC_SOCIAL_LINKS.instagram.kokand],
    name:
      locale === 'uz'
        ? "Radeski Skin Clinic — Qo'qon filiali"
        : locale === 'ru'
          ? 'Radeski Skin Clinic — филиал в Коканде'
          : 'Radeski Skin Clinic — Kokand branch',
    address: {
      '@type': 'PostalAddress',
      streetAddress: "47-MFI, Huqandiy mavzesi, 144A",
      addressLocality: locale === 'ru' ? 'Коканд' : locale === 'en' ? 'Kokand' : "Qo'qon",
      addressRegion: locale === 'ru' ? 'Ферганская область' : "Farg'ona viloyati",
      addressCountry: 'UZ',
    },
    telephone: CLINIC_PHONE_KOKAND.tel,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: KOKAND_BRANCH_GEO.lat,
      longitude: KOKAND_BRANCH_GEO.lng,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
    url: `${origin}/uz/qoqon`,
  };
}

export function buildMedicalBusinessSchema(
  locale: Locale,
  origin: string,
  allRatings: ClinicRatingLike[] = [],
): Record<string, unknown> {
  // Only ratings the admin entered in the CMS (API records) are published as structured data.
  // The built-in fallback numbers are not verified and must not reach Google as reviews.
  const ratings = allRatings.filter((item) => isApiRecordId(item.id));
  const totalReviews = ratings.reduce((sum, item) => sum + (item.count || 0), 0);
  const weighted =
    totalReviews > 0
      ? ratings.reduce((sum, item) => sum + parseRatingValue(item.rating) * item.count, 0) / totalReviews
      : null;

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': clinicEntityId(origin),
    name: 'Radeski Skin & Aesthetic Clinic',
    alternateName: ['Radeski Skin Clinic', 'Radeski', 'Радески'],
    url: `${origin}/${locale}`,
    logo: `${origin}/gallery/logo.webp`,
    image: `${origin}/gallery/logo.webp`,
    telephone: CLINIC_PHONE_PRIMARY.tel,
    priceRange: '$$',
    inLanguage: ['uz', 'ru', 'en'],
    medicalSpecialty: ['Dermatology', 'CosmeticSurgery', 'Oncology'],
    description:
      locale === 'uz'
        ? "Farg'ona va Qo'qondagi dermatologiya va kosmetologiya klinikasi: IPL, lazer, fototerapiya, dermatoskopiya."
        : locale === 'ru'
          ? 'Клиника дерматологии и косметологии в Фергане и Коканде: IPL, лазер, фототерапия, дерматоскопия.'
          : 'Dermatology and cosmetology clinic in Fergana and Kokand: IPL, laser, phototherapy, dermatoscopy.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: "O'zbekiston Ovozi ko'chasi, 1A-bino",
      addressLocality: locale === 'ru' ? 'Фергана' : "Farg'ona",
      addressRegion: locale === 'ru' ? 'Ферганская область' : "Farg'ona viloyati",
      addressCountry: 'UZ',
    },
    location: [branchPlace(locale, 'fergana', origin), branchPlace(locale, 'kokand', origin)],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: CLINIC_GEO.lat,
      longitude: CLINIC_GEO.lng,
    },
    hasMap: CLINIC_REVIEW_LINKS.googleMaps,
    sameAs: CLINIC_SAME_AS,
  };

  if (weighted !== null && totalReviews > 0) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: weighted.toFixed(1),
      reviewCount: totalReviews,
    };
  }

  return schema;
}

export function buildServiceFaqSchemas(
  locale: Locale,
  categories: ServiceCategory[],
): Record<string, unknown>[] {
  return categories.map((category) => {
    const categoryTitle = category.title[locale] || category.title.uz;
    const categoryDesc = category.description[locale] || category.description.uz;
    const subServicesList = category.subServices
      .map((sub) => sub.name[locale] || sub.name.uz)
      .join(', ');

    let question = '';
    let answer = '';

    if (locale === 'uz') {
      question = `Radeski klinikasida ${categoryTitle} xizmati va uning qanday turlari mavjud?`;
      answer = `Radeski klinikasida ${categoryTitle} xizmati eng yuqori tibbiy standartlar asosida taqdim etiladi. Xizmat tavsifi: ${categoryDesc} Ushbu yo'nalish bo'yicha quyidagi ixtisoslashgan xizmatlar ko'rsatiladi: ${subServicesList}.`;
    } else if (locale === 'ru') {
      question = `Как оказывается услуга ${categoryTitle} в клинике Radeski и какие процедуры входят?`;
      answer = `В клинике Radeski услуга ${categoryTitle} оказывается на самом высоком уровне надежности и безопасности. Описание: ${categoryDesc} Наше отделение предлагает следующие специализированные процедуры: ${subServicesList}.`;
    } else {
      question = `What is the ${categoryTitle} medical service at Radeski Clinic and what procedures are included?`;
      answer = `${categoryTitle} services at Radeski Clinic are delivered according to premier global healthcare standards. Description: ${categoryDesc} Our specialized center offers: ${subServicesList}.`;
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answer,
          },
        },
      ],
    };
  });
}

type LocalizedText = Record<Locale, string>;

export function buildEducationCoursesSchema(
  locale: Locale,
  origin: string,
  programs: Array<{
    id: string;
    title: LocalizedText;
    description: LocalizedText;
    keywords: LocalizedText;
  }>,
): Record<string, unknown>[] {
  const pageUrl = `${origin}/${locale}/obrazovaniya`;

  return programs.map((program) => ({
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${pageUrl}#${program.id}`,
    name: program.title[locale] || program.title.uz,
    description: program.description[locale] || program.description.uz,
    keywords: program.keywords[locale] || program.keywords.uz,
    provider: {
      '@type': 'MedicalOrganization',
      name: 'Radeski Skin Clinic',
      url: `${origin}/${locale}`,
    },
    inLanguage: locale === 'uz' ? 'uz-UZ' : locale === 'ru' ? 'ru-RU' : 'en-US',
    url: `${pageUrl}#${program.id}`,
    isAccessibleForFree: false,
    educationalLevel: 'Professional',
    teaches:
      locale === 'uz'
        ? 'Dermatologiya, trixologiya, podologiya va estetik korrektsiya'
        : locale === 'ru'
          ? 'Дерматология, трихология, подология и эстетическая коррекция'
          : 'Dermatology, trichology, podology, and aesthetic correction',
  }));
}

function inLanguageCode(locale: Locale): string {
  return locale === 'uz' ? 'uz-UZ' : locale === 'ru' ? 'ru-RU' : 'en-US';
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** A doctor of the clinic, linked to the clinic entity. */
export function buildDoctorSchema(
  locale: Locale,
  doctor: Doctor,
  origin: string,
  pageUrl: string,
): Record<string, unknown> {
  const education = doctor.education?.[locale] || doctor.education?.uz;
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${pageUrl}#doctor`,
    name: doctor.name[locale] || doctor.name.uz,
    jobTitle: doctor.role[locale] || doctor.role.uz,
    description: doctor.bio[locale] || doctor.bio.uz,
    image: absoluteMedia(origin, doctor.photo),
    url: pageUrl,
    worksFor: { '@id': clinicEntityId(origin) },
    alumniOf: education ? { '@type': 'EducationalOrganization', name: education } : undefined,
    knowsLanguage: ['uz', 'ru'],
  };
}

export function buildArticleSchema(
  locale: Locale,
  article: Article,
  origin: string,
  authorDoctor?: { doctor: Doctor; url: string } | null,
): Record<string, unknown> {
  const routeKey = resolveArticleRouteKey(article);
  const pageUrl = absoluteUrl(articlePath(locale, routeKey));
  const imageUrl =
    absoluteMedia(origin, getLocalizedImage(article.images, locale) ?? article.image) ??
    `${origin}/gallery/logo.webp`;
  const authorName = article.author?.[locale] || article.author?.uz;

  // A named doctor as author/reviewer is a strong trust signal for medical (YMYL) content.
  const author = authorDoctor
    ? {
        '@type': 'Person',
        '@id': `${authorDoctor.url}#doctor`,
        name: authorDoctor.doctor.name[locale] || authorDoctor.doctor.name.uz,
        jobTitle: authorDoctor.doctor.role[locale] || authorDoctor.doctor.role.uz,
        url: authorDoctor.url,
      }
    : authorName
      ? { '@type': 'Person', name: authorName, worksFor: { '@id': clinicEntityId(origin) } }
      : { '@type': 'Organization', '@id': clinicEntityId(origin), name: 'Radeski Skin Clinic' };

  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: article.title[locale] || article.title.uz,
    inLanguage: inLanguageCode(locale),
    lastReviewed: article.date || undefined,
    reviewedBy: author,
    audience: { '@type': 'Patient' },
    mainEntity: {
      '@type': 'Article',
      '@id': `${pageUrl}#article`,
      headline: article.title[locale] || article.title.uz,
      description: article.summary[locale] || article.summary.uz,
      image: [imageUrl],
      author,
      publisher: {
        '@type': 'Organization',
        '@id': clinicEntityId(origin),
        name: 'Radeski Skin Clinic',
        logo: { '@type': 'ImageObject', url: `${origin}/gallery/logo.webp` },
      },
      datePublished: article.date || undefined,
      dateModified: article.date || undefined,
      inLanguage: inLanguageCode(locale),
      mainEntityOfPage: `${pageUrl}#webpage`,
    },
  };
}

/**
 * Clinic videos for the videos page. Google requires a thumbnail and upload date, so only
 * videos that have both are listed — the markup appears as soon as thumbnails are added.
 */
/** Absolute media URL on the site's own host (uploads are served by radeski.uz as well). */
function siteMedia(origin: string, path: string | null | undefined): string | undefined {
  const uploads = path?.match(/\/uploads\/[^\s?#]+/)?.[0];
  return uploads ? `${origin}${uploads}` : absoluteMedia(origin, path);
}

/**
 * Videos page: a summary list pointing at the watch pages. The VideoObject itself lives on
 * each watch page, where the video is the main content — the only place Google shows it as
 * a video result.
 */
export function buildVideoListSchema(
  locale: Locale,
  videos: ClinicVideo[],
  origin: string,
): Record<string, unknown> | null {
  if (videos.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: videos.map((video, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${origin}${videoPath(locale, videoRouteKey(video))}`,
    })),
  };
}

/** "2026-09-09T11:08:24.177681Z" → "2026-09-09T11:08:24Z" (a timezone is required by Google). */
function normalizeUploadDate(value: string): string {
  const trimmed = value.replace(/(T\d{2}:\d{2}:\d{2})\.\d+/, '$1');
  return /T/.test(trimmed) && !/(Z|[+-]\d{2}:?\d{2})$/.test(trimmed) ? `${trimmed}Z` : trimmed;
}

/** VideoObject for one watch page (needs a cover image and an upload date). */
export function buildVideoObjectSchema(
  locale: Locale,
  video: ClinicVideo,
  origin: string,
  pageUrl: string,
): Record<string, unknown> | null {
  const poster = videoPoster(video);
  const uploadDate = video.createdAt;
  if (!poster || !uploadDate || !video.src) return null;
  const info = videoFileInfo(video);
  const duration = isoDuration(videoDurationSeconds(video));
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${pageUrl}#video`,
    name: videoTitle(video, locale),
    description: videoDescription(video, locale).slice(0, 2000),
    thumbnailUrl: [siteMedia(origin, poster)],
    contentUrl: siteMedia(origin, video.src),
    uploadDate: normalizeUploadDate(uploadDate),
    ...(duration ? { duration } : {}),
    ...(info?.width ? { width: info.width, height: info.height } : {}),
    inLanguage: inLanguageCode(locale),
    isFamilyFriendly: true,
    ...(video.category[locale] || video.category.uz ? { genre: video.category[locale] || video.category.uz } : {}),
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    publisher: { '@id': clinicEntityId(origin) },
    potentialAction: { '@type': 'WatchAction', target: pageUrl },
  };
}

/** FAQPage for questions that are visible on the page (article FAQ sections). */
export function buildFaqSchema(items: { question: string; answer: string }[]): Record<string, unknown> | null {
  const valid = items.filter((item) => item.question?.trim() && item.answer?.trim());
  if (valid.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: valid.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
