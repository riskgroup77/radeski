import type { Locale } from '../types';

type ConditionArticle = { routeKey: string; title: Record<Locale, string> };

/**
 * The in-depth article for each condition page (/conditions/<slug>): the condition page gives
 * the short overview, the article the details. Shown on the page and in its crawler HTML.
 */
export const CONDITION_ARTICLES: Partial<Record<string, ConditionArticle[]>> = {
  psoriaz: [
    { routeKey: 'art-psoriaz-tashxis-davolash-radeski', title: { uz: 'Psoriaz: tashxis va davolash', ru: 'Псориаз: диагностика и лечение', en: 'Psoriasis: diagnosis and treatment' } },
    { routeKey: 'art-psoriasis-daavlin-kokand', title: { uz: 'Psoriazni Daavlin fototerapiyasi bilan davolash', ru: 'Лечение псориаза фототерапией Daavlin', en: 'Psoriasis treatment with Daavlin phototherapy' } },
  ],
  vitiligo: [
    { routeKey: 'art-vitiligo-daavlin', title: { uz: 'Vitiligo: Daavlin fototerapiyasi', ru: 'Витилиго: фототерапия Daavlin', en: 'Vitiligo: Daavlin phototherapy' } },
  ],
  'atopik-dermatit': [
    { routeKey: 'art-atopic-dermatitis', title: { uz: 'Atopik dermatit: belgilari va davolash', ru: 'Атопический дерматит: симптомы и лечение', en: 'Atopic dermatitis: symptoms and treatment' } },
  ],
  acne: [
    { routeKey: 'art-akne', title: { uz: 'Akne: sabablari va davolash', ru: 'Акне: причины и лечение', en: 'Acne: causes and treatment' } },
    { routeKey: 'art-akne-u-vzroslykh', title: { uz: 'Kattalarda akne: qachon dermatologga', ru: 'Акне у взрослых: когда к дерматологу', en: 'Adult acne: when to see a dermatologist' } },
  ],
  postacne: [
    { routeKey: 'art-postakne', title: { uz: "Postakne: chandiq va dog'larni kamaytirish", ru: 'Постакне: как убрать рубцы и пятна', en: 'Post-acne: reducing scars and marks' } },
  ],
  rozasea: [
    { routeKey: 'art-rozatseya-davolash-radeski', title: { uz: 'Rozatseyani davolash', ru: 'Лечение розацеа', en: 'Rosacea treatment' } },
  ],
  'yuz-qizarishi': [
    { routeKey: 'art-derma-v-qizarish-radeski', title: { uz: 'Yuz qizarishi: Derma V lazeri', ru: 'Покраснение лица: лазер Derma V', en: 'Facial redness: Derma V laser' } },
  ],
  'teri-doglari': [
    { routeKey: 'art-pigmentaciya-hollywood-spectra-radeski', title: { uz: 'Pigmentatsiyani davolash', ru: 'Лечение пигментации', en: 'Pigmentation treatment' } },
  ],
  ekzema: [
    { routeKey: 'art-ekzema', title: { uz: 'Ekzema: turlari, sabablari va davolash', ru: 'Экзема: виды, причины и лечение', en: 'Eczema: types, causes and treatment' } },
    { routeKey: 'art-atopic-dermatitis', title: { uz: 'Atopik dermatit: belgilari va davolash', ru: 'Атопический дерматит: симптомы и лечение', en: 'Atopic dermatitis: symptoms and treatment' } },
  ],
  'teri-qichishi': [
    { routeKey: 'art-teri-qichishi', title: { uz: 'Teri qichishi: sabablari va davolash', ru: 'Зуд кожи: причины и лечение', en: 'Itchy skin: causes and treatment' } },
    { routeKey: 'art-eshakemi-teri-allergiyasi', title: { uz: 'Eshakemi va teri allergiyasi', ru: 'Крапивница и аллергия на коже', en: 'Hives and skin allergy' } },
  ],
  'teri-allergiyasi': [
    { routeKey: 'art-eshakemi-teri-allergiyasi', title: { uz: 'Eshakemi va teri allergiyasi: belgilari va davolash', ru: 'Крапивница и аллергия на коже: симптомы и лечение', en: 'Hives and skin allergy: symptoms and treatment' } },
    { routeKey: 'art-teri-qichishi', title: { uz: 'Teri qichishi: sabablari', ru: 'Зуд кожи: причины', en: 'Itchy skin: causes' } },
  ],
  'seboreyali-dermatit': [
    { routeKey: 'art-seboreyali-dermatit', title: { uz: 'Seboreyali dermatit: sabablari va davolash', ru: 'Себорейный дерматит: причины и лечение', en: 'Seborrheic dermatitis: causes and treatment' } },
  ],
};
