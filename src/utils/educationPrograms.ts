import type { Locale } from '../types';
import {
  OBRAZOVANIYA,
  type EducationProgram,
  type EducationProgramId,
} from '../data/obrazovaniyaContent';

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

export const EDUCATION_PROGRAM_IMAGES: Record<EducationProgramId, string> = {
  'certification-courses': '/obrazovaniya/certification-courses.webp',
  residency: '/obrazovaniya/residency.webp',
  'continuing-education': '/obrazovaniya/continuing-education.webp',
  masterclasses: '/obrazovaniya/masterclasses.webp',
  'hands-on-training': '/obrazovaniya/hands-on-training.webp',
  'young-specialists': '/obrazovaniya/young-specialists.webp',
  'hair-transplant-training': '/obrazovaniya/hair-transplant-training.webp',
  'laser-training': '/obrazovaniya/laser-training.webp',
  'international-programs': '/obrazovaniya/international-programs.webp',
};

export const EDUCATION_OVERVIEW_IMAGES = {
  hero: '/obrazovaniya/obrazovaniya-hero.webp',
  formula: '/obrazovaniya/obrazovaniya-formula.webp',
} as const;

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

export function resolveEducationProgram(slug: string | null | undefined, locale: Locale): EducationProgram | null {
  if (!slug) return null;
  const normalized = slug.trim().toLowerCase();

  for (const program of OBRAZOVANIYA.programs.items) {
    if (program.id === normalized) return program;
    const slugs = EDUCATION_PROGRAM_SLUGS[program.id];
    if (Object.values(slugs).some((value) => value.toLowerCase() === normalized)) {
      return program;
    }
  }

  return null;
}

export function listEducationPrograms(): EducationProgram[] {
  return OBRAZOVANIYA.programs.items;
}
