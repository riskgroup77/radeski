import { incrementClientCount } from '../utils/clientCount';

/** Onlayn qabul — Hipolink sahifasi */
export const APPOINTMENT_BOOKING_URL =
  'https://hipolink.net/radeskiskinclinicuz?utm_source=website&utm_medium=web&utm_content=appointment_cta';

/** Alohida tab/oynada ochish uchun anchor atributlari */
export const APPOINTMENT_LINK_TARGET = '_blank';
export const APPOINTMENT_LINK_REL = 'noopener noreferrer';

/** Tashqi platformalardagi klinika profillari */
export const CLINIC_SOCIAL_LINKS = {
  telegram: 'https://t.me/radeskiuz',
  instagram: {
    fergana: 'https://www.instagram.com/radeski_skin_clinic/',
    kokand: 'https://www.instagram.com/radeski.clinic.kokand/',
  },
  facebook: 'https://www.facebook.com/p/Radeski-Skin-Clinic-61556558737040/',
} as const;

export const CLINIC_REVIEW_LINKS = {
  yandex: 'https://yandex.uz/profile/138616043960',
  googleMaps:
    'https://www.google.com/maps/place/Radeski+Skin+%26+Aesthetic+Clinic/@40.3833622,71.7936632,17z/data=!3m1!4b1!4m6!3m5!1s0x38bb830bba97cb09:0xd99d7f456cd820e8!8m2!3d40.3833622!4d71.7962381!16s%2Fg%2F11y2mv11w6?hl=ru&entry=ttu',
  twoGis: 'https://2gis.kg/bishkek?m=72.367424%2C41.175575%2F7.43',
} as const;

/** Radeski bosh klinika — aniq koordinatalar (Google Maps) */
export const CLINIC_GEO = {
  lat: 40.3833622,
  lng: 71.7962381,
} as const;

/**
 * Google Maps embed — Radeski Skin & Aesthetic Clinic (1A, O'zbekiston Ovozi).
 * Eski noto'g'ri embed 5-uy manziliga ishora qilardi.
 */
export const CLINIC_MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.6474567890123!2d71.7936631!3d40.3833622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb830bba97cb09%3A0xd99d7f456cd820e8!2sRadeski%20Skin%20%26%20Aesthetic%20Clinic!5e0!3m2!1suz!2suz!4v1749465600000!5m2!1suz!2suz';

/** Brauzerda Google Maps'da aniq joylashuvni ochish */
export function getClinicMapOpenUrl(): string {
  return CLINIC_REVIEW_LINKS.googleMaps;
}

/** Qo'qon filiali — Abu Tayib Huqandiy dahasi, 144A (Yandex: 40.548944, 70.928711) */
export const KOKAND_BRANCH_GEO = {
  lat: 40.548944,
  lng: 70.928711,
} as const;

export const KOKAND_BRANCH_MAP_OPEN_URL =
  'https://www.google.com/maps/search/?api=1&query=40.548944,70.928711';

export const KOKAND_BRANCH_MAP_EMBED_URL = `https://maps.google.com/maps?q=${KOKAND_BRANCH_GEO.lat},${KOKAND_BRANCH_GEO.lng}&hl=uz&z=17&output=embed`;

export function resolveClinicRatingUrl(platform: string, url?: string): string | undefined {
  if (url) return url;
  const key = platform.toLowerCase();
  if (key.includes('yandex')) return CLINIC_REVIEW_LINKS.yandex;
  if (key.includes('google')) return CLINIC_REVIEW_LINKS.googleMaps;
  if (key.includes('2gis')) return CLINIC_REVIEW_LINKS.twoGis;
  return undefined;
}

/** Tugma bosilganda yangi tabda ochish va mijozlar sonini +1 oshirish */
export function openAppointmentBooking(): void {
  incrementClientCount();
  window.open(APPOINTMENT_BOOKING_URL, APPOINTMENT_LINK_TARGET, APPOINTMENT_LINK_REL);
}
