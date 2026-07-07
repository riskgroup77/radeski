import type { Doctor } from '../types';
import { DOCTORS } from '../data';
import { resolveMediaUrl } from '../api/client';

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

function findCatalogDoctor(doctor: Doctor): Doctor | undefined {
  if (DOCTORS.some((item) => item.id === doctor.id)) {
    return DOCTORS.find((item) => item.id === doctor.id);
  }

  const haystack = normalizeDoctorName(
    [doctor.name.uz, doctor.name.ru, doctor.name.en].join(' '),
  );

  return DOCTORS.find((item) => {
    const parts = normalizeDoctorName([item.name.uz, item.name.ru, item.name.en].join(' '))
      .split(' ')
      .filter((part) => part.length > 3);
    return parts.length > 0 && parts.every((part) => haystack.includes(part));
  });
}

function resolveDoctorPhoto(apiPhoto: string | null | undefined, fallback?: string | null): string | null {
  const resolved = apiPhoto ? resolveMediaUrl(apiPhoto) : null;
  if (resolved) return resolved;
  return fallback ? resolveMediaUrl(fallback) : null;
}

export function enrichDoctors(apiDoctors: Doctor[]): Doctor[] {
  return apiDoctors.map((doctor) => {
    const catalog = findCatalogDoctor(doctor);
    const photo = resolveDoctorPhoto(doctor.photo, catalog?.photo);
    if (photo === doctor.photo) return doctor;
    return { ...doctor, photo };
  });
}
