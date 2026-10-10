import type { Doctor, Locale, PriceItem } from '../types';
import type { CustomerReview, TreatmentResult } from '../data/sitePagesContent';
import { DOCTOR_BRANCHES } from '../data/doctorBranches';
import {
  ALL_LOCAL_COMMERCIAL_LANDINGS,
  type LocalCommercialLanding,
  type LocalSeoCity,
} from '../data/localCommercialSeoCatalog';
import { landingTopicKey } from '../data/localLandingTopics';
import { doctorRouteKey } from './doctorSlug';

/**
 * Connects the site's pieces the way patients search: city -> problem -> doctor -> real
 * result -> review -> booking. Used by the city service pages, doctor pages and prerender.
 */
export type Specialty = 'dermatolog' | 'trixolog' | 'podolog' | 'onkolog' | 'kosmetolog' | 'xirurg';

const SPECIALTY_PATTERNS: [Specialty, RegExp][] = [
  ['trixolog', /trix|trich|трихол/i],
  ['podolog', /podolog|podiatr|подолог/i],
  ['onkolog', /onkolog|oncolog|онколог/i],
  ['kosmetolog', /kosmetolog|cosmetolog|косметолог/i],
  ['xirurg', /xirurg|surgeon|хирург/i],
  ['dermatolog', /dermato|дермат/i],
];

export function doctorSpecialties(doctor: Pick<Doctor, 'role'>): Specialty[] {
  const text = `${doctor.role.uz} ${doctor.role.ru} ${doctor.role.en}`;
  return SPECIALTY_PATTERNS.filter(([, pattern]) => pattern.test(text)).map(([specialty]) => specialty);
}

export function doctorBranches(doctor: Pick<Doctor, 'id' | 'name'>): LocalSeoCity[] {
  return DOCTOR_BRANCHES[doctorRouteKey(doctor)] ?? [];
}

/** Which specialists see patients for a city page topic (first match wins the ordering). */
const TOPIC_SPECIALTIES: Record<string, Specialty[]> = {
  dermatolog: ['dermatolog'],
  'akne-davolash': ['dermatolog', 'kosmetolog'],
  'psoriaz-davolash': ['dermatolog'],
  'vitiligo-davolash': ['dermatolog'],
  'rozasea-davolash': ['dermatolog', 'kosmetolog'],
  pigmentatsiya: ['kosmetolog', 'dermatolog'],
  'qon-tomir': ['kosmetolog', 'dermatolog'],
  'lazer-tomir': ['kosmetolog', 'dermatolog'],
  ipl: ['kosmetolog', 'dermatolog'],
  'lazer-epilyatsiya': ['kosmetolog', 'dermatolog'],
  trixolog: ['trixolog'],
  'soch-tokilish': ['trixolog'],
  trixoskopiya: ['trixolog'],
  podolog: ['podolog'],
  'tirnoq-zamburug': ['podolog', 'dermatolog'],
  dermatoskopiya: ['onkolog', 'dermatolog'],
  'xol-tekshiruvi': ['onkolog', 'dermatolog'],
  'onko-dermatolog': ['onkolog'],
  'osma-olib-tashlash': ['onkolog', 'xirurg', 'dermatolog'],
  biopsiya: ['onkolog', 'xirurg', 'dermatolog'],
  'sogal-olib-tashlash': ['xirurg', 'dermatolog'],
};

/** Doctors of the landing's branch whose specialty matches the topic (best match first). */
export function doctorsForLanding(landing: LocalCommercialLanding, doctors: Doctor[]): Doctor[] {
  const wanted = TOPIC_SPECIALTIES[landingTopicKey(landing.slug)] ?? ['dermatolog'];
  const inBranch = doctors.filter((doctor) => doctorBranches(doctor).includes(landing.city));
  const rank = (doctor: Doctor) => {
    const specialties = doctorSpecialties(doctor);
    const index = wanted.findIndex((specialty) => specialties.includes(specialty));
    return index === -1 ? Number.POSITIVE_INFINITY : index;
  };
  return inBranch
    .filter((doctor) => Number.isFinite(rank(doctor)))
    .sort((a, b) => rank(a) - rank(b))
    .slice(0, 4);
}

/** Words that tie a published clinical case or review to a topic. */
const TOPIC_KEYWORDS: Record<string, RegExp> = {
  dermatolog: /dermat|дермат/i,
  'akne-davolash': /akne|акне|acne|husnbuzar/i,
  'psoriaz-davolash': /psoria|псориа/i,
  'vitiligo-davolash': /vitiligo|витилиго/i,
  'rozasea-davolash': /roza(t)?se|розаце|rosacea|kuperoz|купероз/i,
  pigmentatsiya: /pigment|пигмент|melazm|мелазм/i,
  'qon-tomir': /tomir|сосуд|vascul|derma v/i,
  'lazer-tomir': /tomir|сосуд|vascul|derma v/i,
  ipl: /\bipl\b/i,
  'lazer-epilyatsiya': /epil|эпил/i,
  trixolog: /trix|trich|трих|soch|волос|hair|alopes|алопец/i,
  'soch-tokilish': /soch|волос|hair|alopes|алопец|trix|трих/i,
  trixoskopiya: /trixoskop|трихоскоп|trichoscop|soch|волос/i,
  podolog: /podolog|подолог|tirnoq|ноготь|ногт|nail|tovon|пятк/i,
  'tirnoq-zamburug': /tirnoq|ногт|nail|onixo|онихо|zamburug|грибок/i,
  dermatoskopiya: /dermatoskop|дерматоскоп|xol|родин|nevus|невус/i,
  'xol-tekshiruvi': /xol\b|родин|nevus|невус|dermatoskop/i,
  'onko-dermatolog': /onko|онко|bazalioma|базалиом|o.?sma|опухол|rak|рак/i,
  'osma-olib-tashlash': /o.?sma|новообраз|lazer bilan olib|удален|papillom|папиллом/i,
  biopsiya: /biops|биопс|gistolog|гистолог/i,
  'sogal-olib-tashlash': /so.?g.?al|бородав|wart|papillom|папиллом/i,
};

/** Most specific city-page topic for a text (clinical case, review) — null when none fits. */
export function topicForText(text: string): string | null {
  const generic = new Set(['dermatolog', 'trixolog', 'podolog', 'dermatoskopiya']);
  const specific = Object.entries(TOPIC_KEYWORDS).filter(([topic]) => !generic.has(topic));
  const match = specific.find(([, pattern]) => pattern.test(text)) ?? Object.entries(TOPIC_KEYWORDS).find(([topic, pattern]) => generic.has(topic) && pattern.test(text));
  return match?.[0] ?? null;
}

export function resultsForLanding(landing: LocalCommercialLanding, results: TreatmentResult[]): TreatmentResult[] {
  const pattern = TOPIC_KEYWORDS[landingTopicKey(landing.slug)];
  if (!pattern) return [];
  return results
    .filter((item) => item.published !== false)
    .filter((item) => pattern.test(`${item.title.uz} ${item.title.ru} ${item.service.uz} ${item.service.ru} ${item.description.uz}`))
    .slice(0, 3);
}

/** Published reviews about the topic, with real text, newest first. */
export function reviewsForTopic(topic: string, reviews: CustomerReview[], limit = 3): CustomerReview[] {
  const pattern = TOPIC_KEYWORDS[topic];
  const candidates = reviews.filter((review) => review.published && review.rating >= 4 && (review.comment.uz || review.comment.ru || '').trim().length >= 40);
  const matching = pattern
    ? candidates.filter((review) => pattern.test(`${review.service?.uz ?? ''} ${review.service?.ru ?? ''} ${review.comment.uz} ${review.comment.ru ?? ''}`))
    : [];
  return [...matching].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);
}

/** Reviews that mention the doctor by surname (the way patients write them). */
export function reviewsForDoctor(doctor: Pick<Doctor, 'name'>, reviews: CustomerReview[], limit = 4): CustomerReview[] {
  const surname = doctor.name.uz.split(/\s+/)[0]?.replace(/[ʻʼ‘’'`]/g, '').toLowerCase();
  const surnameRu = doctor.name.ru.split(/\s+/)[0]?.toLowerCase();
  if (!surname || surname.length < 4) return [];
  const stem = surname.slice(0, Math.max(4, surname.length - 2));
  const stemRu = surnameRu && surnameRu.length >= 4 ? surnameRu.slice(0, surnameRu.length - 2) : null;
  return reviews
    .filter((review) => review.published && review.rating >= 4)
    .filter((review) => {
      const text = `${review.comment.uz} ${review.comment.ru ?? ''}`.replace(/[ʻʼ‘’'`]/g, '').toLowerCase();
      return text.includes(stem) || Boolean(stemRu && text.includes(stemRu));
    })
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}

/** City service pages a doctor's patients would look for (for links on the doctor page). */
export function landingsForDoctor(doctor: Doctor): LocalCommercialLanding[] {
  const specialties = doctorSpecialties(doctor);
  const branches = doctorBranches(doctor);
  if (!branches.length) return [];
  return ALL_LOCAL_COMMERCIAL_LANDINGS.filter(
    (landing) =>
      branches.includes(landing.city) &&
      (TOPIC_SPECIALTIES[landingTopicKey(landing.slug)] ?? []).some((specialty) => specialties.includes(specialty)),
  );
}

/** First-visit price row for a specialty (exact name from the price list). */
const FIRST_VISIT_PRICE: Record<Specialty, string> = {
  dermatolog: "Dermatovenerolog shifokorining birinchi ko'rigi",
  trixolog: "Trixolog shifokorining birinchi ko'rigi + trixoskopiya",
  podolog: 'Podologning birinchi konsultatsiyasi',
  onkolog: "Dermatoonkolog shifokorining birinchi ko'rigi + dermatoskopiya",
  kosmetolog: "Dermatokosmetolog shifokorining birinchi ko'rigi",
  xirurg: "Dermatoonkolog shifokorining birinchi ko'rigi + dermatoskopiya",
};

export function firstVisitPrice(doctor: Doctor, prices: PriceItem[]): number | undefined {
  const normalize = (text: string) => text.replace(/[ʻʼ‘’'`]/g, "'").toLowerCase();
  for (const specialty of doctorSpecialties(doctor)) {
    const name = normalize(FIRST_VISIT_PRICE[specialty]);
    const item = prices.find((price) => normalize(price.name.uz).startsWith(name) && Number(price.priceValue) > 0);
    if (item) return Number(item.priceValue);
  }
  return undefined;
}

export const SPECIALTY_LABELS: Record<Specialty, Record<Locale, string>> = {
  dermatolog: { uz: 'Dermatolog', ru: 'Дерматолог', en: 'Dermatologist' },
  trixolog: { uz: 'Trixolog', ru: 'Трихолог', en: 'Trichologist' },
  podolog: { uz: 'Podolog', ru: 'Подолог', en: 'Podiatrist' },
  onkolog: { uz: 'Dermatoonkolog', ru: 'Дерматоонколог', en: 'Dermato-oncologist' },
  kosmetolog: { uz: 'Dermatokosmetolog', ru: 'Дерматокосметолог', en: 'Cosmetic dermatologist' },
  xirurg: { uz: 'Dermatoxirurg', ru: 'Дерматохирург', en: 'Dermatologic surgeon' },
};

/** Dermatology condition page (/conditions/<slug>) -> city service page topic for the same problem. */
export const CONDITION_LANDING_TOPIC: Partial<Record<string, string>> = {
  psoriaz: 'psoriaz-davolash',
  vitiligo: 'vitiligo-davolash',
  acne: 'akne-davolash',
  postacne: 'akne-davolash',
  rozasea: 'rozasea-davolash',
  'yuz-qizarishi': 'qon-tomir',
  'teri-doglari': 'pigmentatsiya',
};
