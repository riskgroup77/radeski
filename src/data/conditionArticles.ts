import type { Locale } from '../types';
import { SCHEDULED_ARTICLE_ROUTE_KEYS } from './articleRouteKeys.generated';

type ConditionArticle = { routeKey: string; title: Record<Locale, string> };

/**
 * The in-depth article for each condition page (/conditions/<slug>): the condition page gives
 * the short overview, the article the details. Shown on the page and in its crawler HTML.
 */
const ALL_CONDITION_ARTICLES: Partial<Record<string, ConditionArticle[]>> = {
  psoriaz: [
    { routeKey: 'art-psoriaz-tashxis-davolash-radeski', title: { uz: 'Psoriaz: tashxis va davolash', ru: 'Псориаз: диагностика и лечение', en: 'Psoriasis: diagnosis and treatment' } },
    { routeKey: 'art-psoriasis-daavlin-kokand', title: { uz: 'Psoriazni Daavlin fototerapiyasi bilan davolash', ru: 'Лечение псориаза фототерапией Daavlin', en: 'Psoriasis treatment with Daavlin phototherapy' } },
  ],
  vitiligo: [
    { routeKey: 'art-vitiligo-daavlin', title: { uz: 'Vitiligo: Daavlin fototerapiyasi', ru: 'Витилиго: фототерапия Daavlin', en: 'Vitiligo: Daavlin phototherapy' } },
  ],
  'atopik-dermatit': [
    { routeKey: 'art-atopic-dermatitis', title: { uz: 'Atopik dermatit: belgilari va davolash', ru: 'Атопический дерматит: симптомы и лечение', en: 'Atopic dermatitis: symptoms and treatment' } },
    { routeKey: 'art-bolalarda-teri-toshmalari', title: { uz: 'Bolalarda teri toshmalari', ru: 'Сыпь у ребёнка', en: 'Rashes in children' } },
  ],
  acne: [
    { routeKey: 'art-akne', title: { uz: 'Akne: sabablari va davolash', ru: 'Акне: причины и лечение', en: 'Acne: causes and treatment' } },
    { routeKey: 'art-akne-u-vzroslykh', title: { uz: 'Kattalarda akne: qachon dermatologga', ru: 'Акне у взрослых: когда к дерматологу', en: 'Adult acne: when to see a dermatologist' } },
    { routeKey: 'art-demodekoz', title: { uz: 'Demodekoz: akne davolashi yordam bermasa', ru: 'Демодекоз: если лечение акне не помогает', en: 'Demodicosis: when acne treatment fails' } },
  ],
  postacne: [
    { routeKey: 'art-postakne', title: { uz: "Postakne: chandiq va dog'larni kamaytirish", ru: 'Постакне: как убрать рубцы и пятна', en: 'Post-acne: reducing scars and marks' } },
  ],
  rozasea: [
    { routeKey: 'art-rozatseya-davolash-radeski', title: { uz: 'Rozatseyani davolash', ru: 'Лечение розацеа', en: 'Rosacea treatment' } },
    { routeKey: 'art-demodekoz', title: { uz: 'Demodekoz: belgilari va davolash', ru: 'Демодекоз: признаки и лечение', en: 'Demodicosis: signs and treatment' } },
    { routeKey: 'art-perioral-dermatit', title: { uz: "Perioral dermatit: og'iz atrofidagi toshma", ru: 'Периоральный дерматит: сыпь вокруг рта', en: 'Perioral dermatitis: rash around the mouth' } },
  ],
  'yuz-qizarishi': [
    { routeKey: 'art-derma-v-qizarish-radeski', title: { uz: 'Yuz qizarishi: Derma V lazeri', ru: 'Покраснение лица: лазер Derma V', en: 'Facial redness: Derma V laser' } },
    { routeKey: 'art-perioral-dermatit', title: { uz: "Perioral dermatit: og'iz atrofidagi toshma", ru: 'Периоральный дерматит: сыпь вокруг рта', en: 'Perioral dermatitis: rash around the mouth' } },
  ],
  'teri-doglari': [
    { routeKey: 'art-melazma', title: { uz: "Melazma: yuzdagi jigarrang dog'lar", ru: 'Мелазма: коричневые пятна на лице', en: 'Melasma: brown patches on the face' } },
    { routeKey: 'art-pigmentaciya-hollywood-spectra-radeski', title: { uz: 'Pigmentatsiyani davolash', ru: 'Лечение пигментации', en: 'Pigmentation treatment' } },
  ],
  ekzema: [
    { routeKey: 'art-ekzema', title: { uz: 'Ekzema: turlari, sabablari va davolash', ru: 'Экзема: виды, причины и лечение', en: 'Eczema: types, causes and treatment' } },
    { routeKey: 'art-atopic-dermatitis', title: { uz: 'Atopik dermatit: belgilari va davolash', ru: 'Атопический дерматит: симптомы и лечение', en: 'Atopic dermatitis: symptoms and treatment' } },
    { routeKey: 'art-qishda-teri-parvarishi', title: { uz: 'Qishda teri parvarishi', ru: 'Уход за кожей зимой', en: 'Winter skin care' } },
  ],
  'teri-qichishi': [
    { routeKey: 'art-teri-qichishi', title: { uz: 'Teri qichishi: sabablari va davolash', ru: 'Зуд кожи: причины и лечение', en: 'Itchy skin: causes and treatment' } },
    { routeKey: 'art-eshakemi-teri-allergiyasi', title: { uz: 'Eshakemi va teri allergiyasi', ru: 'Крапивница и аллергия на коже', en: 'Hives and skin allergy' } },
    { routeKey: 'art-teri-zamburugi', title: { uz: "Teri zamburug'i: belgilari va davolash", ru: 'Грибок кожи: признаки и лечение', en: 'Fungal skin infections: signs and treatment' } },
    { routeKey: 'art-qotir', title: { uz: "Qo'tir: kechasi qichishish", ru: 'Чесотка: ночной зуд', en: 'Scabies: night-time itching' } },
  ],
  'teri-allergiyasi': [
    { routeKey: 'art-eshakemi-teri-allergiyasi', title: { uz: 'Eshakemi va teri allergiyasi: belgilari va davolash', ru: 'Крапивница и аллергия на коже: симптомы и лечение', en: 'Hives and skin allergy: symptoms and treatment' } },
    { routeKey: 'art-teri-qichishi', title: { uz: 'Teri qichishi: sabablari', ru: 'Зуд кожи: причины', en: 'Itchy skin: causes' } },
  ],
  'seboreyali-dermatit': [
    { routeKey: 'art-seboreyali-dermatit', title: { uz: 'Seboreyali dermatit: sabablari va davolash', ru: 'Себорейный дерматит: причины и лечение', en: 'Seborrheic dermatitis: causes and treatment' } },
  ],
};

/** Without articles scheduled for a later date (see scripts/buildArticleIndex.ts). */
export const CONDITION_ARTICLES: Partial<Record<string, ConditionArticle[]>> = Object.fromEntries(
  Object.entries(ALL_CONDITION_ARTICLES).map(([slug, items]) => [
    slug,
    (items ?? []).filter((item) => !SCHEDULED_ARTICLE_ROUTE_KEYS.includes(item.routeKey)),
  ]),
);
