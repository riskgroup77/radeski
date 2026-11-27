import type { Locale } from '../types';

/**
 * A phone number the clinic can call back: an Uzbek number (9 digits, or 998 + 9 digits) or a
 * foreign one (10–15 digits). Letters or a too-short number are refused before anything is sent.
 */
export function isPlausiblePhone(value: string): boolean {
  if (/[a-zа-яё]/i.test(value)) return false;
  const digits = value.replace(/\D/g, '');
  if (digits.length === 9) return true;
  if (digits.startsWith('998')) return digits.length === 12;
  return digits.length >= 10 && digits.length <= 15;
}

export function invalidPhoneMessage(locale: Locale): string {
  return locale === 'uz'
    ? "Telefon raqamini to'liq kiriting, masalan: +998 90 123 45 67"
    : locale === 'ru'
      ? 'Введите номер полностью, например: +998 90 123 45 67'
      : 'Please enter the full number, e.g. +998 90 123 45 67';
}

/** Shown under the phone forms: what the number is used for. */
export function phoneUseNote(locale: Locale): string {
  return locale === 'uz'
    ? "Raqamingiz faqat qabulga yozish uchun qo'ng'iroq qilishda ishlatiladi."
    : locale === 'ru'
      ? 'Номер используется только для звонка и записи на приём.'
      : 'Your number is used only to call you back about the appointment.';
}
