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
    'consult-group': '/karusel/fototerapiya.webp',
  },
  'shkola-dermatoskopii': {
    'dermatosc-lessons': '/karusel/dermataskopiya.jpeg',
  },
  'clinika-patologii-nogtej': {
    'podolog-dermatolog': '/karusel/podologiya.jpg',
  },
  dermatopatologiya: {
    gistolog: '/brand/brand-oncology.webp',
  },
  'in-ekcionnaya-kosmetologiya': {
    konturnaya: '/gallery/4.webp',
    botulino: '/gallery/5.webp',
    biorev: '/gallery/6.webp',
  },
};

/** Category-level hero/card image when CMS image is missing. */
export const SERVICE_CATEGORY_IMAGES: Record<string, string> = {
  dermatologiya: '/karusel/dermataskopiya.jpeg',
  'apparatnaya-kosmetologiya': '/karusel/ipl.webp',
  'in-ekcionnaya-kosmetologiya': '/gallery/4.webp',
  'lazernaya-epilyaciya': '/karusel/lazerniy-epilyatsiya.jpg',
  'trihologiya-centr-lechenie-volos': '/karusel/soch-mezoterapiya.jpg',
  dermatoonkologiya: '/brand/brand-oncology.webp',
  'hirurgicheskaya-dermatologiya': '/karusel/co2-lazer-osmalar.jpg',
  'shkola-psoriaza': '/karusel/fototerapiya.webp',
  'shkola-dermatoskopii': '/karusel/dermataskopiya.jpeg',
  'clinika-patologii-nogtej': '/karusel/podologiya.jpg',
  dermatopatologiya: '/brand/brand-oncology.webp',
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
