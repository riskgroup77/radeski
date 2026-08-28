import type { LocalizedImages } from '../types';

/** Default thumbnail for each sub-service (categoryId → subId → public path). */
export const SERVICE_SUB_IMAGES: Record<string, Record<string, string>> = {
  dermatologiya: {
    'det-derm': '/services/dermatologiya/det-derm.jpg',
    fototerapiya: '/services/dermatologiya/fototerapiya.jpg',
    immunobiologicheskaya: '/services/dermatologiya/immunobiologicheskaya.jpg',
  },
  dermatoskopiya: {
    'derm-konsult': '/services/dermatoskopiya/osmotr.jpg',
    'derm-total-body': '/services/dermatoskopiya/total-body.jpg',
    'derm-skin-passport': '/services/dermatoskopiya/skin-passport.jpg',
  },
  'apparatnaya-kosmetologiya': {
    'ipl-inmode': '/services/apparatnaya/ipl-inmode.jpg',
    'hollywood-spectra': '/services/apparatnaya/hollywood-spectra.jpg',
    'lazer-biorev': '/services/apparatnaya/lazer-biorev.jpg',
    'ultratovush-yuz': '/services/apparatnaya/ultratovush-yuz.jpg',
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
    konturnaya: '/services/in-ekcionnaya/konturnaya.jpg',
    botulino: '/services/in-ekcionnaya/botulino.jpg',
    biorev: '/services/in-ekcionnaya/biorev.jpg',
  },
};

/** Category-level hero/card image — curated per specialty (preferred over generic CMS uploads). */
export const SERVICE_CATEGORY_IMAGES: Record<string, string> = {
  dermatologiya: '/karusel/dermataskopiya.jpeg',
  dermatoskopiya: '/services/dermatoskopiya/hero.jpg',
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
