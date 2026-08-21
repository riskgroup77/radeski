import type { LocalizedImages } from '../types';

/** Default thumbnail for each sub-service (categoryId → subId → public path). */
export const SERVICE_SUB_IMAGES: Record<string, Record<string, string>> = {
  dermatologiya: {
    'det-derm': '/services/pediatric-dermatology.webp',
    fototerapiya: '/karusel/fototerapiya.webp',
    immunobiologicheskaya: '/services/immunobiological-therapy.webp',
  },
  'apparatnaya-kosmetologiya': {
    'ipl-inmode': '/karusel/ipl.webp',
    'hollywood-spectra': '/karusel/karbon-peeling.jpeg',
    'lazer-biorev': '/services/laser-biorevitalization.webp',
    'ultratovush-yuz': '/services/ultrasonic-facial-cleansing.webp',
  },
  'lazernaya-epilyaciya': {
    'alex-lazer': '/karusel/lazerniy-epilyatsiya.jpg',
  },
  'trihologiya-centr-lechenie-volos': {
    trixoskop: '/karusel/soch-mezoterapiya.jpg',
  },
  dermatoonkologiya: {
    biopsiya: '/karusel/dermataskopiya.jpeg',
  },
  'hirurgicheskaya-dermatologiya': {
    'moh-surgery': '/karusel/co2-lazer-osmalar.jpg',
  },
  'shkola-psoriaza': {
    'consult-group': '/brand/brand-phototherapy.webp',
  },
  'shkola-dermatoskopii': {
    'dermatosc-lessons': '/brand/brand-academy.webp',
  },
  'clinika-patologii-nogtej': {
    'podolog-dermatolog': '/karusel/podologiya.jpg',
  },
  dermatopatologiya: {
    gistolog: '/science/science-data.webp',
  },
  'in-ekcionnaya-kosmetologiya': {
    konturnaya: '/gallery/4.webp',
    botulino: '/gallery/5.webp',
    biorev: '/gallery/6.webp',
  },
};

/** Category-level hero/card image — curated per specialty (preferred over generic CMS uploads). */
export const SERVICE_CATEGORY_IMAGES: Record<string, string> = {
  dermatologiya: '/karusel/dermataskopiya.jpeg',
  'apparatnaya-kosmetologiya': '/karusel/ipl.webp',
  'in-ekcionnaya-kosmetologiya': '/brand/brand-medical.webp',
  'lazernaya-epilyaciya': '/karusel/lazerniy-epilyatsiya.jpg',
  'trihologiya-centr-lechenie-volos': '/brand/brand-trichology.webp',
  dermatoonkologiya: '/brand/brand-oncology.webp',
  'hirurgicheskaya-dermatologiya': '/karusel/co2-lazer-osmalar.jpg',
  'shkola-psoriaza': '/brand/brand-phototherapy.webp',
  'shkola-dermatoskopii': '/brand/brand-academy.webp',
  'clinika-patologii-nogtej': '/karusel/podologiya.jpg',
  dermatopatologiya: '/science/science-data.webp',
};

export function catalogSubServiceImage(
  categoryId: string,
  subId: string,
): string | undefined {
  return SERVICE_SUB_IMAGES[categoryId]?.[subId];
}

export function catalogCategoryImage(categoryId: string): string | undefined {
  return SERVICE_CATEGORY_IMAGES[categoryId];
}

export function toLocalizedServiceImage(path: string): LocalizedImages {
  return { uz: path, ru: path, en: path };
}
