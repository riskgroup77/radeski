import type { Locale, PriceItem } from '../types';
import { CLINIC_BRANCHES, type ClinicBranch } from '../data/sitePagesContent';
import {
  getLocalizedCopy,
  type LocalCommercialLanding,
  type LocalSeoCity,
} from '../data/localCommercialSeoCatalog';
import { getLocalLandingTopic, type LocalLandingTopic } from '../data/localLandingTopics';
import { resolvePriceName } from './priceDisplay';

/**
 * Everything a city service page shows beyond its catalog copy — shared by the React page,
 * the build-time prerender and the head (title/description/structured data), so all three
 * say exactly the same thing.
 */
export interface LandingPriceRow {
  name: string;
  value: number;
}

export interface LandingFaq {
  question: string;
  answer: string;
}

export interface LocalLandingDetails {
  serviceName: string;
  cityName: string;
  topic?: LocalLandingTopic;
  about: string[];
  steps: string[];
  prices: LandingPriceRow[];
  minPrice?: number;
  maxPrice?: number;
  branch: ClinicBranch;
  faqs: LandingFaq[];
}

const CITY_NAMES: Record<LocalSeoCity, Record<Locale, string>> = {
  fargona: { uz: "Farg'ona", ru: 'Фергана', en: 'Fergana' },
  qoqon: { uz: "Qo'qon", ru: 'Коканд', en: 'Kokand' },
};

const CITY_LOCATIVE: Record<LocalSeoCity, Record<Locale, string>> = {
  fargona: { uz: "Farg'onada", ru: 'в Фергане', en: 'in Fergana' },
  qoqon: { uz: "Qo'qonda", ru: 'в Коканде', en: 'in Kokand' },
};

export function landingCityName(city: LocalSeoCity, locale: Locale): string {
  return CITY_NAMES[city][locale];
}

export function landingBranch(city: LocalSeoCity): ClinicBranch {
  const id = city === 'qoqon' ? 'kokand-branch' : 'fergana-main';
  return CLINIC_BRANCHES.find((branch) => branch.id === id) ?? CLINIC_BRANCHES[0];
}

/** "90 000 so‘m" / "90 000 сум" / "90,000 UZS". */
export function formatUzs(value: number, locale: Locale): string {
  const digits = Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, locale === 'en' ? ',' : ' ');
  return locale === 'uz' ? `${digits} so‘m` : locale === 'ru' ? `${digits} сум` : `${digits} UZS`;
}

/** Pages about a doctor rather than a procedure ("Dermatolog Farg'onada"). */
const SPECIALIST_SLUGS = new Set(['dermatolog', 'trixolog', 'podolog', 'onko-dermatolog']);

const normalizeName = (text: string) => text.replace(/[ʻʼ‘’'`]/g, "'").trim().toLowerCase();

function matchPrices(names: string[], prices: PriceItem[], locale: Locale): LandingPriceRow[] {
  const rows: LandingPriceRow[] = [];
  const used = new Set<string>();
  for (const entry of names) {
    const [category, name] = entry.includes('|') ? entry.split('|') : [null, entry];
    const wanted = normalizeName(name);
    const item = prices.find(
      (price) =>
        !used.has(price.id) &&
        (!category || price.category === category) &&
        normalizeName(price.name.uz).startsWith(wanted) &&
        Number(price.priceValue) > 0,
    );
    if (!item) continue;
    used.add(item.id);
    rows.push({ name: resolvePriceName(item, locale) || item.name[locale] || item.name.uz, value: Number(item.priceValue) });
  }
  return rows;
}

/** Service name without the city ("Lazer epilyatsiya Farg'onada" → "Lazer epilyatsiya"). */
function serviceNameFromH1(landing: LocalCommercialLanding, locale: Locale): string {
  const h1 = getLocalizedCopy(landing.h1, locale);
  const suffix = CITY_LOCATIVE[landing.city][locale];
  return h1.endsWith(` ${suffix}`) ? h1.slice(0, -suffix.length - 1) : h1;
}

function lowerFirst(text: string, locale: Locale): string {
  // Brand-led names (IPL, DEKA…) keep their capitals.
  if (/^[A-ZА-Я]{2}/.test(text) || locale === 'en' && /^[A-Z][a-z]+ [A-Z]/.test(text)) return text;
  return text.charAt(0).toLowerCase() + text.slice(1);
}

export function resolveLocalLandingDetails(
  landing: LocalCommercialLanding,
  prices: PriceItem[],
  locale: Locale,
): LocalLandingDetails {
  const topic = getLocalLandingTopic(landing.slug);
  const serviceName = serviceNameFromH1(landing, locale);
  const cityName = landingCityName(landing.city, locale);
  const cityIn = CITY_LOCATIVE[landing.city][locale];
  const branch = landingBranch(landing.city);
  const rows = topic ? matchPrices(topic.priceNames, prices, locale) : [];
  const values = rows.map((row) => row.value);
  const specialist = SPECIALIST_SLUGS.has(landing.slug);
  // A doctor page starts at the first consultation (listed first), not the cheapest test.
  const minPrice = specialist ? rows[0]?.value : values.length ? Math.min(...values) : undefined;
  const maxPrice = values.length ? Math.max(...values) : undefined;

  const faqs: LandingFaq[] = [];
  if (minPrice) {
    const service = lowerFirst(serviceName, locale);
    faqs.push(
      locale === 'uz'
        ? {
            question: specialist ? `${cityName}da ${service} qabuli narxi qancha?` : `${cityName}da ${service} narxi qancha?`,
            answer: specialist
              ? `Radeski Skin Clinic’da ${service}ning birinchi ko‘rigi — ${formatUzs(minPrice, locale)}, takroriy ko‘rik arzonroq. Tahlil va muolajalar kerak bo‘lsa, ularning narxi ko‘rikda aytiladi.`
              : `Radeski Skin Clinic’da ${service} narxi ${formatUzs(minPrice, locale)}dan boshlanadi. Aniq narx muammo, zona va seanslar soniga qarab shifokor ko‘rigida aytiladi. To‘liq ro‘yxat «Narxlar» sahifasida.`,
          }
        : locale === 'ru'
          ? {
              question: specialist ? `Сколько стоит приём ${service}а ${cityIn}?` : `Сколько стоит ${service} ${cityIn}?`,
              answer: specialist
                ? `Первичный приём ${service}а в Radeski Skin Clinic — ${formatUzs(minPrice, locale)}, повторный дешевле. Стоимость анализов и процедур, если они нужны, называется на приёме.`
                : `В Radeski Skin Clinic стоимость — от ${formatUzs(minPrice, locale)}. Точная цена зависит от задачи, зоны и количества сеансов и называется на приёме. Полный список — на странице «Цены».`,
            }
          : {
              question: specialist ? `How much is a ${service} visit ${cityIn}?` : `How much does ${service} cost ${cityIn}?`,
              answer: specialist
                ? `A first ${service} visit at Radeski Skin Clinic costs ${formatUzs(minPrice, locale)}; follow-ups cost less. Tests or procedures, if needed, are priced at the visit.`
                : `At Radeski Skin Clinic prices start from ${formatUzs(minPrice, locale)}. The exact price depends on the problem, area and number of sessions and is confirmed at the visit. See the full price list on the Prices page.`,
            },
    );
  }
  faqs.push(
    locale === 'uz'
      ? {
          question: `Klinika ${cityName}da qayerda joylashgan?`,
          answer: `Manzil: ${branch.address.uz}. Ish vaqti: ${branch.hours.uz}. Telefon: ${branch.phone}.`,
        }
      : locale === 'ru'
        ? {
            question: `Где находится клиника ${cityIn}?`,
            answer: `Адрес: ${branch.address.ru}. Время работы: ${branch.hours.ru}. Телефон: ${branch.phone}.`,
          }
        : {
            question: `Where is the clinic ${cityIn}?`,
            answer: `Address: ${branch.address.en}. Opening hours: ${branch.hours.en}. Phone: ${branch.phone}.`,
          },
  );
  for (const faq of [...(topic?.faqs ?? []), ...landing.faqs]) {
    faqs.push({ question: getLocalizedCopy(faq.question, locale), answer: getLocalizedCopy(faq.answer, locale) });
  }

  return {
    serviceName,
    cityName,
    topic,
    about: topic?.about.map((copy) => getLocalizedCopy(copy, locale)) ?? [],
    steps: topic?.steps.map((copy) => getLocalizedCopy(copy, locale)) ?? [],
    prices: rows,
    minPrice,
    maxPrice,
    branch,
    faqs,
  };
}
