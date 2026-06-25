import type { Doctor } from '../types';

/** Asosiy shifokorlar — bosh sahifa va ro'yxat tepasida shu tartibda. */
export const FEATURED_DOCTOR_IDS = [
  'ashurov-dilshod',
  'mangasaryan-lorena',
  'yoqubov-farrux',
] as const;

const FEATURED_DOCTOR_SLOTS = [
  {
    key: 'ashurov-dilshod',
    apiIds: ['df0de70b-0ddc-44d6-afcb-3b8ea2468f16'],
    matchText: (text: string) => text.includes('ashurov') && text.includes('dilshod'),
  },
  {
    key: 'mangasaryan-lorena',
    apiIds: ['80800f59-572c-4340-84df-f369bc4005c5'],
    matchText: (text: string) => text.includes('mangasar') && text.includes('lorena'),
  },
  {
    key: 'yoqubov-farrux',
    apiIds: ['ac43fde6-fbb6-4375-b570-7425a586f057'],
    matchText: (text: string) =>
      /yo[qk]ubov|ya[qk]ubov/.test(text) &&
      /farrux|farruh|farrukh|farhodjonovich/.test(text),
  },
] as const;

function normalizeDoctorSearchText(doctor: Doctor): string {
  return [doctor.id, doctor.name.uz, doctor.name.ru, doctor.name.en]
    .join(' ')
    .toLowerCase()
    .replace(/[''`ʻʼ]/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function findFeaturedDoctor(
  doctors: Doctor[],
  slot: (typeof FEATURED_DOCTOR_SLOTS)[number],
  used: Set<string>,
): Doctor | null {
  const byApiId = doctors.find((doctor) => !used.has(doctor.id) && slot.apiIds.includes(doctor.id));
  if (byApiId) return byApiId;

  const bySlug = doctors.find(
    (doctor) => !used.has(doctor.id) && doctor.id === slot.key,
  );
  if (bySlug) return bySlug;

  return (
    doctors.find((doctor) => {
      if (used.has(doctor.id)) return false;
      return slot.matchText(normalizeDoctorSearchText(doctor));
    }) ?? null
  );
}

export function getFeaturedDoctors(doctors: Doctor[]): Doctor[] {
  const used = new Set<string>();

  return FEATURED_DOCTOR_SLOTS.map((slot) => {
    const match = findFeaturedDoctor(doctors, slot, used);
    if (match) used.add(match.id);
    return match;
  }).filter((doctor): doctor is Doctor => doctor !== null);
}

export function sortDoctorsFeaturedFirst(doctors: Doctor[]): Doctor[] {
  const hasApiOrdering = doctors.some(
    (doctor) => doctor.isFeatured || (doctor.sortOrder !== undefined && doctor.sortOrder > 0),
  );

  if (hasApiOrdering) {
    return [...doctors].sort((a, b) => {
      const featuredDiff = Number(Boolean(b.isFeatured)) - Number(Boolean(a.isFeatured));
      if (featuredDiff !== 0) return featuredDiff;
      const orderA = a.sortOrder ?? 999;
      const orderB = b.sortOrder ?? 999;
      if (orderA !== orderB) return orderA - orderB;
      return 0;
    });
  }

  const featured = getFeaturedDoctors(doctors);
  const featuredIds = new Set(featured.map((doctor) => doctor.id));
  const rest = doctors.filter((doctor) => !featuredIds.has(doctor.id));

  return [...featured, ...rest];
}
