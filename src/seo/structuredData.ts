import type { Article, Locale, ServiceCategory } from '../types';
import { CLINIC_PHONE_KOKAND, CLINIC_PHONE_PRIMARY } from '../config/clinicContacts';
import { absoluteUrl, articlePath } from '../routing/paths';
import { resolveArticleRouteKey } from '../utils/articles';
import { getLocalizedImage } from '../utils/localizedImage';

type ClinicRatingLike = {
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
      '@type': 'Place',
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
        latitude: 40.3864,
        longitude: 71.7864,
      },
      url: `${origin}/uz/branches`,
    };
  }

  return {
    '@type': 'Place',
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
      latitude: 40.548944,
      longitude: 70.928711,
    },
    url: `${origin}/uz/qoqon`,
  };
}

export function buildMedicalBusinessSchema(
  locale: Locale,
  origin: string,
  ratings: ClinicRatingLike[] = [],
): Record<string, unknown> {
  const totalReviews = ratings.reduce((sum, item) => sum + (item.count || 0), 0);
  const weighted =
    totalReviews > 0
      ? ratings.reduce((sum, item) => sum + parseRatingValue(item.rating) * item.count, 0) / totalReviews
      : null;

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
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
    sameAs: [`${origin}/uz`, `${origin}/ru`, `${origin}/en`],
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

export function buildArticleSchema(
  locale: Locale,
  article: Article,
  origin: string,
): Record<string, unknown> {
  const routeKey = resolveArticleRouteKey(article);
  const pageUrl = absoluteUrl(articlePath(locale, routeKey));
  const imagePath = getLocalizedImage(article.images, locale) ?? article.image;
  const imageUrl = imagePath
    ? imagePath.startsWith('http')
      ? imagePath
      : `${origin}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`
    : `${origin}/gallery/logo.webp`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title[locale] || article.title.uz,
    description: article.summary[locale] || article.summary.uz,
    image: [imageUrl],
    author: {
      '@type': 'Organization',
      name: 'Radeski Skin Clinic',
      url: `${origin}/${locale}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Radeski Skin Clinic',
      logo: {
        '@type': 'ImageObject',
        url: `${origin}/gallery/logo.webp`,
      },
    },
    datePublished: article.date || undefined,
    dateModified: article.date || undefined,
    inLanguage: locale === 'uz' ? 'uz-UZ' : locale === 'ru' ? 'ru-RU' : 'en-US',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    url: pageUrl,
  };
}
