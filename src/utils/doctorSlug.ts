import type { Doctor } from '../types';

/**
 * Readable doctor URLs: /uz/doctors/ashurov-dilshod-davlatovich instead of the CMS UUID.
 * The slug comes from the Uzbek (Latin) name; old UUID links still resolve and redirect.
 */
export function slugifyDoctorName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[ʻʼ‘’'`]/g, '') // o‘zbek apostrophes: "Yo'qubov" -> "yoqubov"
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Public route key for a doctor (falls back to the id when the name gives no slug). */
export function doctorRouteKey(doctor: Pick<Doctor, 'id' | 'name'>): string {
  return slugifyDoctorName(doctor.name.uz || doctor.name.en || '') || doctor.id;
}

/** Finds a doctor by slug, CMS id (old links) or built-in id. */
export function findDoctorByRouteParam<T extends Pick<Doctor, 'id' | 'name'>>(
  param: string | null | undefined,
  doctors: T[],
): T | undefined {
  if (!param) return undefined;
  const key = param.toLowerCase();
  return (
    doctors.find((doctor) => doctorRouteKey(doctor) === key) ??
    doctors.find((doctor) => doctor.id === param) ??
    doctors.find((doctor) => slugifyDoctorName(doctor.name.uz).startsWith(`${key}-`))
  );
}
