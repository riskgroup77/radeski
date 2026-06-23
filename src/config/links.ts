import { incrementClientCount } from '../utils/clientCount';

/** Onlayn qabul — Hipolink sahifasi */
export const APPOINTMENT_BOOKING_URL =
  'https://hipolink.net/radeskiskinclinicuz?utm_source=website&utm_medium=web&utm_content=appointment_cta';

/** Alohida tab/oynada ochish uchun anchor atributlari */
export const APPOINTMENT_LINK_TARGET = '_blank';
export const APPOINTMENT_LINK_REL = 'noopener noreferrer';

/** Tashqi platformalardagi klinika profillari */
export const CLINIC_REVIEW_LINKS = {
  yandex: 'https://yandex.uz/profile/138616043960',
  googleMaps:
    'https://www.google.com/maps/place/Radeski+Skin+%26+Aesthetic+Clinic/@40.3833622,71.7936632,17z/data=!3m1!4b1!4m6!3m5!1s0x38bb830bba97cb09:0xd99d7f456cd820e8!8m2!3d40.3833622!4d71.7962381!16s%2Fg%2F11y2mv11w6?hl=ru&entry=ttu',
  twoGis: 'https://2gis.kg/bishkek?m=72.367424%2C41.175575%2F7.43',
} as const;

export function resolveClinicRatingUrl(platform: string, url?: string): string | undefined {
  if (url) return url;
  const key = platform.toLowerCase();
  if (key.includes('yandex')) return CLINIC_REVIEW_LINKS.yandex;
  if (key.includes('google')) return CLINIC_REVIEW_LINKS.googleMaps;
  if (key.includes('2gis')) return CLINIC_REVIEW_LINKS.twoGis;
  return undefined;
}

/** Tugma bosilganda yangi tabda ochish (popup bloklamaydi) */
export function openAppointmentBooking(): void {
  incrementClientCount();
  window.open(APPOINTMENT_BOOKING_URL, APPOINTMENT_LINK_TARGET, APPOINTMENT_LINK_REL);
}
