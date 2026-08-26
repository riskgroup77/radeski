import type { Doctor } from '../types';
import { SHOHRUZ_TURGUNOV_PROFILE } from './doctors/shohruzTurgunovProfile';

function normalizeDoctorName(value: string): string {
  return value
    .toLowerCase()
    .replace(/[''`ʻʼ]/g, '')
    .replace(/\b(dr|doctor|doktor|врач)\b/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function matchesShohruzTurgunov(doctor: Doctor): boolean {
  const haystack = normalizeDoctorName(
    [doctor.id, doctor.name.uz, doctor.name.ru, doctor.name.en].join(' '),
  );
  return haystack.includes('turgunov') && haystack.includes('shohruz');
}

export function getDoctorProfileOverlay(doctor: Doctor): Doctor['profile'] | undefined {
  if (matchesShohruzTurgunov(doctor)) return SHOHRUZ_TURGUNOV_PROFILE;
  return undefined;
}
