import type { Locale } from '../types';
import type { EducationProgramId } from '../data/obrazovaniyaContent';

/*
 * Course URLs only — no course text — so the app shell can route /obrazovaniya/<slug> without
 * loading obrazovaniyaContent (≈47 KB). The text is in educationPrograms.ts.
 */

export type { EducationProgramId };

export const EDUCATION_PROGRAM_SLUGS: Record<EducationProgramId, Record<Locale, string>> = {
  'certification-courses': {
    uz: 'sertifikatsiya-kurslari',
    ru: 'sertifikatsionnye-kursy',
    en: 'certification-courses',
  },
  residency: {
    uz: 'ordinatura',
    ru: 'ordinatura',
    en: 'residency',
  },
  'continuing-education': {
    uz: 'malaka-oshirish',
    ru: 'povyshenie-kvalifikatsii',
    en: 'continuing-education',
  },
  masterclasses: {
    uz: 'master-klasslar',
    ru: 'master-klassy',
    en: 'masterclasses',
  },
  'hands-on-training': {
    uz: 'amaliy-treninglar',
    ru: 'prakticheskie-treningi',
    en: 'hands-on-training',
  },
  'young-specialists': {
    uz: 'yosh-mutaxassislar',
    ru: 'podgotovka-molodyh-specialistov',
    en: 'young-specialists',
  },
  'hair-transplant-training': {
    uz: 'soch-transplantatsiyasi',
    ru: 'obuchenie-peresadke-volos',
    en: 'hair-transplant-training',
  },
  'laser-training': {
    uz: 'lazer-texnologiyalari',
    ru: 'obuchenie-lazernym-tehnologiyam',
    en: 'laser-training',
  },
  'international-programs': {
    uz: 'xalqaro-dasturlar',
    ru: 'mezhdunarodnye-programmy',
    en: 'international-programs',
  },
};

export function getEducationProgramSlug(programId: EducationProgramId, locale: Locale): string {
  return EDUCATION_PROGRAM_SLUGS[programId][locale];
}

export function educationProgramPath(locale: Locale, programId: EducationProgramId): string {
  return `/${locale}/obrazovaniya/${encodeURIComponent(getEducationProgramSlug(programId, locale))}`;
}

export function getEducationProgramSlugFromPathname(pathname: string): string | null {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length >= 3 && segments[1] === 'obrazovaniya') {
    try {
      return decodeURIComponent(segments[2]);
    } catch {
      return segments[2];
    }
  }
  return null;
}

/** Course id for a URL slug in any language (or the id itself), without loading course text. */
export function resolveEducationProgramId(slug: string | null | undefined): EducationProgramId | null {
  if (!slug) return null;
  const normalized = slug.trim().toLowerCase();
  for (const [id, slugs] of Object.entries(EDUCATION_PROGRAM_SLUGS) as [EducationProgramId, Record<Locale, string>][]) {
    if (id === normalized || Object.values(slugs).some((value) => value.toLowerCase() === normalized)) return id;
  }
  return null;
}
