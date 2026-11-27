import type { Doctor, Locale } from '../types';
import { DOCTOR_BRANCHES } from '../data/doctorBranches';
import { doctorRouteKey } from './doctorSlug';

/**
 * The CMS "education" field holds the workplace for some doctors ("Radeski Skin Clinic, Fergana")
 * and the place of study for others ("Prague, Czech Republic"). Label it by what it says, so a
 * university or a city abroad is never shown as the doctor's workplace (audit 26.11.2026).
 */
export function doctorInfoLabel(value: string, locale: Locale): string {
  const isWorkplace = /radeski/i.test(value);
  if (isWorkplace) return locale === 'uz' ? 'Ish joyi' : locale === 'ru' ? 'Место работы' : 'Workplace';
  return locale === 'uz' ? "Ta'lim" : locale === 'ru' ? 'Образование' : 'Education';
}

const CITY: Record<string, Record<Locale, string>> = {
  fargona: { uz: "Farg'ona", ru: 'Фергана', en: 'Fergana' },
  qoqon: { uz: "Qo'qon", ru: 'Коканд', en: 'Kokand' },
};

/** "Qabul: Farg'ona, Qo'qon" for doctors whose branch is confirmed (data/doctorBranches.ts), else ''. */
export function doctorBranchLine(doctor: Pick<Doctor, 'id' | 'name'>, locale: Locale): string {
  const cities = DOCTOR_BRANCHES[doctorRouteKey(doctor)] ?? [];
  if (!cities.length) return '';
  const label = locale === 'uz' ? 'Qabul' : locale === 'ru' ? 'Приём' : 'Sees patients in';
  return `${label}: ${cities.map((c) => CITY[c]?.[locale] ?? c).join(', ')}`;
}
