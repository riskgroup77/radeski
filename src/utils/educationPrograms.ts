import type { Locale } from '../types';
import {
  OBRAZOVANIYA,
  type EducationProgram,
  type EducationProgramId,
} from '../data/obrazovaniyaContent';

export type { EducationProgramId };
export {
  EDUCATION_PROGRAM_SLUGS,
  educationProgramPath,
  getEducationProgramSlug,
  getEducationProgramSlugFromPathname,
  resolveEducationProgramId,
} from './educationProgramRoutes';
import { resolveEducationProgramId } from './educationProgramRoutes';

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

export function resolveEducationProgram(slug: string | null | undefined, _locale?: Locale): EducationProgram | null {
  const id = resolveEducationProgramId(slug);
  return id ? OBRAZOVANIYA.programs.items.find((program) => program.id === id) ?? null : null;
}

export function listEducationPrograms(): EducationProgram[] {
  return OBRAZOVANIYA.programs.items;
}
