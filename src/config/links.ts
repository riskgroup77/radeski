/** Onlayn qabul — Hipolink sahifasi */
export const APPOINTMENT_BOOKING_URL =
  'https://hipolink.net/radeskiskinclinicuz?utm_source=website&utm_medium=web&utm_content=appointment_cta';

/** Alohida tab/oynada ochish uchun anchor atributlari */
export const APPOINTMENT_LINK_TARGET = '_blank';
export const APPOINTMENT_LINK_REL = 'noopener noreferrer';

/** Tugma bosilganda yangi tabda ochish (popup bloklamaydi) */
export function openAppointmentBooking(): void {
  window.open(APPOINTMENT_BOOKING_URL, APPOINTMENT_LINK_TARGET, APPOINTMENT_LINK_REL);
}