import type { Locale } from '../types';

export type DermatologyConditionSlug =
  | 'psoriaz'
  | 'vitiligo'
  | 'teri-allergiyasi'
  | 'ekzema'
  | 'atopik-dermatit'
  | 'teri-doglari'
  | 'acne'
  | 'rozasea'
  | 'postacne'
  | 'seboreyali-dermatit'
  | 'yuz-qizarishi'
  | 'teri-qichishi';

export interface DermatologyConditionNavItem {
  slug: DermatologyConditionSlug;
  label: Record<Locale, string>;
}

export const DERMATOLOGY_CATEGORY_ID = 'dermatologiya';

export const DERMATOLOGY_CONDITION_NAV: DermatologyConditionNavItem[] = [
  { slug: 'psoriaz', label: { uz: 'Psoriaz', ru: 'Псориаз', en: 'Psoriasis' } },
  { slug: 'vitiligo', label: { uz: 'Vitiligo', ru: 'Витилиго', en: 'Vitiligo' } },
  { slug: 'teri-allergiyasi', label: { uz: 'Teri allergiyasi', ru: 'Аллергия кожи', en: 'Skin allergy' } },
  { slug: 'ekzema', label: { uz: 'Ekzema', ru: 'Экзема', en: 'Eczema' } },
  { slug: 'atopik-dermatit', label: { uz: 'Atopik dermatit', ru: 'Атопический дерматит', en: 'Atopic dermatitis' } },
  { slug: 'teri-doglari', label: { uz: "Teri dog'lari (pigmentatsiya)", ru: 'Пигментные пятна', en: 'Skin spots (pigmentation)' } },
  { slug: 'acne', label: { uz: 'Acne (ugri)', ru: 'Акне (угри)', en: 'Acne' } },
  { slug: 'rozasea', label: { uz: 'Rozasea', ru: 'Розацеа', en: 'Rosacea' } },
  { slug: 'postacne', label: { uz: 'Postacne', ru: 'Постакне', en: 'Post-acne' } },
  { slug: 'seboreyali-dermatit', label: { uz: 'Seboreyali dermatit', ru: 'Себорейный дерматит', en: 'Seborrheic dermatitis' } },
  { slug: 'yuz-qizarishi', label: { uz: 'Yuz qizarishi', ru: 'Покраснение лица', en: 'Facial redness' } },
  { slug: 'teri-qichishi', label: { uz: 'Terning qichishi', ru: 'Зуд кожи', en: 'Skin itching' } },
];

export function isDermatologyConditionSlug(value: string): value is DermatologyConditionSlug {
  return DERMATOLOGY_CONDITION_NAV.some((item) => item.slug === value);
}

export function getDermatologyConditionNavItem(slug: string): DermatologyConditionNavItem | null {
  return DERMATOLOGY_CONDITION_NAV.find((item) => item.slug === slug) ?? null;
}
