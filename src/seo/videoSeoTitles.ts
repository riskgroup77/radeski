import type { Locale } from '../types';

/**
 * Short <title> texts for clinic videos whose own title is longer than Google shows (~60
 * characters), keyed by the first 8 characters of the CMS video id. The page H1 keeps the
 * full title; the brand ("— video | Radeski…") is appended when it still fits.
 */
export const VIDEO_SEO_TITLES: Record<string, Partial<Record<Locale, string>>> = {
  f2708d30: {
    uz: 'DEKA Tetra PRO lazer: ajin, chandiq va pigment',
    ru: 'DEKA Tetra PRO: лазер против морщин, рубцов, пигмента',
    en: 'DEKA Tetra PRO Laser: Wrinkles, Scars, Pigmentation',
  },
  b6b2fd6b: {
    uz: 'Nega Radeski Skin Clinic? Bemor hikoyasi',
  },
  '5b13644b': {
    uz: 'Qora nuqtalardan qutulish: kosmetolog tavsiyasi',
    ru: 'Как избавиться от чёрных точек: совет косметолога',
    en: 'How to Get Rid of Blackheads: Cosmetologist Tips',
  },
  fed0e0ac: {
    uz: '1000 dan ortiq bemorga yordam berdik',
    ru: 'Более 1000 пациентов, которым мы помогли',
    en: 'Over 1,000 Patients We Have Helped',
  },
  '091c4186': {
    uz: 'DEKA Tetra Pro lazer: ajin, dog‘ va chandiqlar',
    ru: 'Лазер DEKA Tetra Pro: морщины, пятна и рубцы',
    en: 'DEKA Tetra Pro Laser: Wrinkles, Spots and Scars',
  },
  '2dd118d8': {
    ru: 'Aquex Daavlin: лечение потливости ладоней и стоп',
    en: 'Aquex Daavlin: Sweaty Palms and Feet Treatment',
  },
  da6314ff: {
    uz: 'Soch uchun plazmoterapiya: 250 000 so‘m',
  },
  f49d97f4: {
    uz: 'Dermatologdan 7 ta asosiy maslahat',
    ru: '7 ключевых советов врача-дерматолога',
  },
};
