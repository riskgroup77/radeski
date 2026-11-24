import type { Locale } from '../types';

/**
 * The clinic's name-address-phone, as confirmed by management on 23.11.2026. Every page, the
 * structured data and the CMS branch cards read it from here so Fergana and Kokand never drift.
 */
export const CLINIC_PHONE_PRIMARY = {
  display: '+998 (73) 200-73-73',
  tel: '+998732007373',
} as const;

/** Fergana's second (mobile) number. */
export const CLINIC_PHONE_FERGANA_MOBILE = {
  display: '+998 95 210 73 73',
  tel: '+998952107373',
} as const;

export const CLINIC_PHONE_KOKAND = {
  display: '+998 95 145 73 73',
  tel: '+998951457373',
} as const;

export const FERGANA_ADDRESS: Record<Locale, string> = {
  uz: "Farg'ona sh., O'zbekiston Ovozi ko'chasi, 1B-bino",
  ru: 'г. Фергана, ул. Узбекистон Овози, дом 1Б',
  en: '1B Uzbekiston Ovozi St., Fergana City',
};

export const KOKAND_ADDRESS: Record<Locale, string> = {
  uz: "Qo'qon sh., 47-MFY, Huqandiy mavzesi, 144A",
  ru: 'г. Коканд, 47-МФЙ, массив Хукандий, 144А',
  en: '47-MFY, Huqandiy district, 144A, Kokand',
};

export const CLINIC_HOURS: Record<Locale, string> = {
  uz: 'Dushanba – Shanba: 08:00 – 18:00',
  ru: 'Понедельник – Суббота: 08:00 – 18:00',
  en: 'Monday – Saturday: 08:00 – 18:00',
};
