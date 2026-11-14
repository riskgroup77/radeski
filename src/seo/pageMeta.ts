import { ARTICLE_SEO_TITLES } from './articleSeoTitles';
import type { Locale } from '../types';
import type { PageId } from '../routing/paths';

export type PageMeta = { title: string; desc: string; keywords: string };

/** Primary city (legacy helpers / short labels). */
export function localSeoSuffix(locale: Locale): string {
  if (locale === 'uz') return "Farg'ona";
  if (locale === 'ru') return 'Фергана';
  return 'Fergana';
}

/** Dual-city block for titles: Farg'ona | Qo'qon */
export function localSeoCities(locale: Locale): string {
  if (locale === 'uz') return "Farg'ona | Qo'qon";
  if (locale === 'ru') return 'Фергана | Коканд';
  return 'Fergana | Kokand';
}

export function localSeoKokand(locale: Locale): string {
  if (locale === 'uz') return "Qo'qon";
  if (locale === 'ru') return 'Коканд';
  return 'Kokand';
}

/** Google shows ~60 characters of a title; longer ones are cut mid-word. */
export const TITLE_MAX_LENGTH = 60;
/** ~155–160 characters of a description are shown in results. */
export const DESCRIPTION_MAX_LENGTH = 158;

/** First candidate that fits — the name always stays whole, the brand/city tail shrinks. */
export function fitTitle(candidates: string[]): string {
  return candidates.find((title) => title.length <= TITLE_MAX_LENGTH) ?? candidates[candidates.length - 1];
}

function mainCity(locale: Locale): string {
  return locale === 'ru' ? 'Фергана' : locale === 'en' ? 'Fergana' : "Farg'ona";
}

export function buildServiceSeoTitle(name: string, locale: Locale): string {
  const cities = localSeoCities(locale);
  const topic = locale === 'uz' ? 'dermatologiya' : locale === 'ru' ? 'дерматолог' : 'dermatology';
  return fitTitle([
    `${name} — ${topic} ${cities} | Radeski Skin Clinic`,
    `${name} — ${topic} ${cities} | Radeski`,
    `${name} — ${mainCity(locale)} | Radeski Skin Clinic`,
    `${name} | Radeski Skin Clinic`,
    `${name} | Radeski`,
  ]);
}

/** Service / condition pages: "Botulinoterapiya (Botoks) Farg'ona va Qo'qonda | Radeski Skin Clinic". */
export function buildServicePageSeoTitle(name: string, locale: Locale): string {
  const both =
    locale === 'uz' ? "Farg'ona va Qo'qonda" : locale === 'ru' ? 'в Фергане и Коканде' : 'in Fergana & Kokand';
  return fitTitle([
    `${name} ${both} | Radeski Skin Clinic`,
    `${name} ${both} | Radeski`,
    `${name} — ${mainCity(locale)} | Radeski Skin Clinic`,
    `${name} | Radeski Skin Clinic`,
    `${name} | Radeski`,
  ]);
}

/**
 * Condition pages (/conditions/psoriaz): no city in the title. "Psoriaz Farg'ona va Qo'qonda"
 * competed with the city landing (/fargona/psoriaz-davolash), which owns the local query;
 * the condition page is the overview of how the clinic diagnoses and treats it.
 */
export function buildConditionPageSeoTitle(name: string, locale: Locale): string {
  const tail =
    locale === 'uz' ? 'tashxis va davolash usullari' : locale === 'ru' ? 'диагностика и методы лечения' : 'diagnosis and treatment options';
  return fitTitle([
    `${name} — ${tail} | Radeski Skin Clinic`,
    `${name} — ${tail} | Radeski`,
    `${name} | Radeski Skin Clinic`,
    `${name} | Radeski`,
  ]);
}

export function buildArticleSeoTitle(title: string, locale: Locale): string {
  const cities = localSeoCities(locale);
  const topic = locale === 'uz' ? 'dermatologiya' : locale === 'ru' ? 'дерматология' : 'dermatology';
  return fitTitle([
    `${title} | Radeski — ${topic} ${cities}`,
    `${title} | Radeski Skin Clinic`,
    `${title} | Radeski`,
    title,
  ]);
}

/**
 * A sentence end before this would leave a snippet under ~110 characters (Google then writes
 * its own): cut at a word instead.
 */
const DESCRIPTION_MIN_SENTENCE_CUT = 110;

/** Trims a description to what search results show — at a sentence end when possible. */
export function fitDescription(text: string): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= DESCRIPTION_MAX_LENGTH) return clean;
  const cut = clean.slice(0, DESCRIPTION_MAX_LENGTH);
  const sentenceEnd = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('! '), cut.lastIndexOf('? '));
  if (sentenceEnd >= DESCRIPTION_MIN_SENTENCE_CUT) return cut.slice(0, sentenceEnd + 1);
  const wordEnd = cut.lastIndexOf(' ');
  return `${cut.slice(0, wordEnd > 90 ? wordEnd : DESCRIPTION_MAX_LENGTH - 1).replace(/[,;:—–-]+$/, '')}…`;
}

/**
 * Condition pages (/conditions/<slug>) whose generated title and description had many
 * impressions but almost no clicks in Search Console (12 Nov 2026 export, CTR under 0.5%):
 * written to the queries people actually type ("… sabablari", "… nima").
 */
export const CONDITION_SEO_OVERRIDES: Partial<
  Record<string, Partial<Record<Locale, { title: string; desc: string }>>>
> = {
  'yuz-qizarishi': {
    uz: {
      title: 'Yuz qizarishi sabablari: rozasea, kuperoz, sezgir teri',
      desc: "Yuz nega qizaradi: rozasea, kuperoz (kengaygan tomirlar) yoki sezgir teri. Sababni dermatolog aniqlaydi; tomirlar uchun lazer va IPL muolajalari qo'llanadi.",
    },
  },
  'teri-qichishi': {
    uz: {
      title: 'Teri qichishi: dermatolog tashxisi va davolash',
      desc: "Teri qichishi ekzema, allergiya, quruq teri yoki ichki kasallik belgisi bo'lishi mumkin. Dermatolog sababini aniqlab, davolash rejasini tuzadi.",
    },
  },
  'seboreyali-dermatit': {
    uz: {
      title: 'Seboreyali dermatit nima: belgilari va davolash',
      desc: "Seboreyali dermatit nima: bosh terisi va yuzda yog'li po'st, qizarish va qichish. Nima kuchaytiradi, qanday davolanadi va qachon dermatologga borish kerak.",
    },
  },
};

/** Per-article SEO overrides keyed by public route id (art-*). */
export const ARTICLE_SEO_OVERRIDES: Partial<
  Record<string, Partial<Record<Locale, { title: string; desc: string; keywords?: string }>>>
> = {
  // Low-CTR pages in the 12 Nov 2026 Search Console export: search-result texts rewritten to
  // the queries behind them ("… nima", "… alomatlari", "trixolog kim"). Page body unchanged.
  'art-atopic-dermatitis': {
    uz: {
      title: 'Atopik dermatit nima: belgilari, bolalarda davolash',
      desc: 'Atopik dermatit nima va nega teri quruqlashib qichiydi? Bolalar va kattalardagi belgilar, kuchaytiruvchi omillar, zamonaviy davolash va uy parvarishi.',
      keywords:
        "atopik dermatit, atopik dermatit nima, atopik dermatit bolalarda davolash, atopik dermatit davosi, ekzema, dermatolog Farg'ona, Radeski Skin Clinic",
    },
  },
  'art-til-yassi-hujayrali-rak': {
    uz: {
      title: 'Til raki: alomatlari, belgilari va qanday ko‘rinadi',
      desc: 'Til raki qanday boshlanadi: birinchi alomatlar, qanday ko‘rinishi, tashxis va davolash. 2 haftadan ortiq bitmaydigan til yarasi — shifokorga borish belgisi.',
      keywords:
        'til raki, til raki alomatlari, til raki belgilari, til raki qanday ko‘rinadi, tilning yassi hujayrali raki, biopsiya, Radeski Skin Clinic',
    },
  },
  'art-prp-terapiya-oldidan-tahlillar': {
    uz: {
      title: 'PRP oldidan tahlillar: to‘liq ro‘yxat va tayyorgarlik',
      desc: 'PRP-terapiyadan oldin qaysi tahlillar kerak: OAK, koagulogramma, biokimyo, infeksiyalar, ferritin, D vitamini. Tayyorgarlik va PRP qachon qilinadi.',
      keywords:
        'PRP terapiya, PRP oldidan tahlillar, plazmoterapiya tahlillar, ferritin, D vitamini, koagulogramma, Radeski Skin Clinic',
    },
    en: {
      title: 'Blood Tests Before PRP: The Full Checklist',
      desc: 'Which blood tests you need before PRP: CBC, coagulation, biochemistry, infection screening, ferritin and vitamin D, how to prepare and when PRP can start.',
      keywords:
        'PRP blood test, tests before PRP, PRP lab tests, CBC, coagulation profile, ferritin, vitamin D, PRP for hair, Radeski Skin Clinic',
    },
  },
  'art-trixolog-trixoskopiya': {
    uz: {
      title: 'Trixolog kim, trixoskopiya nima va qachon kerak',
      desc: 'Trixolog kim va qachon kerak, trixoskopiya qanday o‘tadi va soch to‘kilishining qaysi sabablarini aniqlaydi. Qabul bosqichlari va davolash.',
      keywords:
        'trixolog kim, trixolog, trixoskopiya, trixoskopiya nima, soch to‘kilishi, trixolog Farg‘ona, Radeski Skin Clinic',
    },
  },
  'art-akne': {
    uz: {
      title: 'Akne nima: sabablari, belgilari va davolash',
      desc: "Akne nima va nega paydo bo'ladi: teri yog'i, poralar tiqilishi, gormonlar. Belgilar, og'irlik darajalari, zamonaviy davolash va qachon dermatologga borish.",
      keywords:
        "akne, akne nima, akne davolash, husnbuzar, ugri, akne sabablari, dermatolog Farg'ona, Radeski Skin Clinic",
    },
  },
  'art-plazmaferez-teri-kasalliklari': {
    uz: {
      title: 'Plazmaferez nima: teri kasalliklarida qachon kerak',
      desc: 'Plazmaferez nima, qaysi teri kasalliklarida qo‘llanadi, muolaja qanday o‘tadi va qanday foyda kutish mumkin. Radeski’da u kompleks davolashning bir qismi.',
      keywords:
        'plazmaferez, plazmaferez nima, plazmaferez teri kasalliklari, plazmaferez Farg‘ona, Radeski Skin Clinic',
    },
  },
  'art-soch-ekish-fue-dhi': {
    uz: {
      title: "Soch ekish FUE va DHI: jarayon va narx — Farg'ona",
      desc: "Soch ekish FUE va DHI usulida: graft va donor zona, operatsiya bosqichlari, natija va narxga nima ta'sir qiladi. Farg'onada Radeski Skin Clinic.",
      keywords:
        "soch ekish, soch ekish narxi, FUE soch ekish, DHI, soch ko'chirish Farg'ona, graft, soch transplantatsiyasi, Radeski Skin Clinic",
    },
    ru: {
      title: "Пересадка волос FUE и DHI: этапы и цена — Фергана",
      desc: "Пересадка волос методами FUE и DHI: графты и донорская зона, этапы операции, что влияет на результат и цену. Radeski Skin Clinic в Фергане.",
      keywords:
        "пересадка волос, пересадка волос цена, FUE, DHI, трансплантация волос Фергана, графты, Radeski Skin Clinic",
    },
    en: {
      title: "Hair Transplant FUE and DHI: Process and Cost — Fergana",
      desc: "Hair transplant with FUE and DHI: grafts and the donor area, the steps of surgery, what affects results and price. Radeski Skin Clinic, Fergana.",
      keywords:
        "hair transplant, hair transplant cost, FUE, DHI, hair transplant Fergana, grafts, Radeski Skin Clinic",
    },
  },
  'art-soch-ekishdan-keyin': {
    uz: {
      title: "Soch ekishdan keyin: 12 oylik parvarish — Farg'ona",
      desc: "Soch ekishdan keyin nima normal: qobiqchalar, shok to'kilish, yuvish, sport va quyosh, natija qachon ko'rinadi. Radeski trixologi maslahatlari.",
      keywords:
        "soch ekishdan keyin, soch ekishdan keyingi parvarish, shok to'kilish, soch ekish natijasi, trixolog Farg'ona, Radeski Skin Clinic",
    },
    ru: {
      title: "После пересадки волос: уход на 12 месяцев — Фергана",
      desc: "Что нормально после пересадки волос: корочки, шоковое выпадение, мытьё, спорт и солнце, когда виден результат. Советы трихолога Radeski.",
      keywords:
        "после пересадки волос, уход после пересадки волос, шоковое выпадение, результат пересадки волос, трихолог Фергана, Radeski Skin Clinic",
    },
    en: {
      title: "After a Hair Transplant: 12-Month Aftercare — Fergana",
      desc: "What is normal after a hair transplant: crusts, shock loss, washing, sport and sun, and when results show. Advice from the Radeski trichologist.",
      keywords:
        "after hair transplant, hair transplant aftercare, shock loss, hair transplant results, trichologist Fergana, Radeski Skin Clinic",
    },
  },
  'art-soqol-ekish': {
    uz: {
      title: "Soqol va mo'ylov ekish: kimga mos — Farg'ona",
      desc: "Soqol va mo'ylov ekish: siyrak soqol va chandiqlar, qachon kutish kerak, FUE va DHI bilan operatsiya, tiklanish va natija. Radeski — Farg'ona.",
      keywords:
        "soqol ekish, mo'ylov ekish, soqol ekish narxi, siyrak soqol, soqol transplantatsiyasi Farg'ona, Radeski Skin Clinic",
    },
    ru: {
      title: "Пересадка бороды и усов: кому подходит — Фергана",
      desc: "Пересадка бороды и усов: редкая борода и рубцы, когда подождать, операция FUE и DHI, восстановление и результат. Radeski — Фергана.",
      keywords:
        "пересадка бороды, пересадка усов, пересадка бороды цена, редкая борода, трансплантация бороды Фергана, Radeski Skin Clinic",
    },
    en: {
      title: "Beard and Moustache Transplant — Fergana",
      desc: "Beard and moustache transplant: patchy beards and scars, when to wait, FUE and DHI surgery, recovery and results. Radeski Skin Clinic, Fergana.",
      keywords:
        "beard transplant, moustache transplant, beard transplant cost, patchy beard, beard transplant Fergana, Radeski Skin Clinic",
    },
  },
  'art-botoks-yoki-filler': {
    uz: {
      title: "Botoks yoki filler: farqi va tanlov — Farg'ona",
      desc: "Botoks yoki filler: farqi nimada, qaysi ajin va muammoga qaysi biri kerak, qachon birga qilinadi, natija qancha saqlanadi. Radeski kosmetologi.",
      keywords:
        "botoks yoki filler, botoks va filler farqi, mimik ajinlar, kontur plastika, botoks Farg'ona, kosmetolog Farg'ona, Radeski Skin Clinic",
    },
    ru: {
      title: "Ботокс или филлер: в чём разница — Фергана",
      desc: "Ботокс или филлер: в чём разница, какой морщине и проблеме что нужно, когда их сочетают, сколько держится эффект. Косметолог Radeski.",
      keywords:
        "ботокс или филлер, разница ботокса и филлера, мимические морщины, контурная пластика, ботокс Фергана, косметолог Фергана, Radeski Skin Clinic",
    },
    en: {
      title: "Botox or Filler: The Difference — Fergana",
      desc: "Botox or filler: the difference, which line and problem needs which, when they are combined and how long each lasts. Radeski cosmetologist.",
      keywords:
        "botox or filler, botox vs filler, expression lines, dermal fillers, botox Fergana, cosmetologist Fergana, Radeski Skin Clinic",
    },
  },
  'art-mezoterapiya': {
    uz: {
      title: "Mezoterapiya yuz va soch uchun — Farg'ona",
      desc: "Mezoterapiya yuz va soch uchun: biorevitalizatsiyadan farqi, qaysi preparat nima uchun, kurs va qarshi ko'rsatmalar. Radeski — Farg'ona.",
      keywords:
        "mezoterapiya, soch mezoterapiyasi, yuz mezoterapiyasi, mezoterapiya narxi, biorevitalizatsiya, kosmetolog Farg'ona, Radeski Skin Clinic",
    },
    ru: {
      title: "Мезотерапия для лица и волос — Фергана",
      desc: "Мезотерапия для лица и волос: отличие от биоревитализации, какой препарат для чего, курс и противопоказания. Radeski — Фергана.",
      keywords:
        "мезотерапия, мезотерапия волос, мезотерапия лица, мезотерапия цена, биоревитализация, косметолог Фергана, Radeski Skin Clinic",
    },
    en: {
      title: "Mesotherapy for Face and Hair — Fergana",
      desc: "Mesotherapy for the face and hair: how it differs from biorevitalization, which product is for what, the course and contraindications. Radeski.",
      keywords:
        "mesotherapy, hair mesotherapy, facial mesotherapy, mesotherapy price, biorevitalization, cosmetologist Fergana, Radeski Skin Clinic",
    },
  },
  'art-apparatli-kosmetologiya': {
    uz: {
      title: "Apparatli kosmetologiya: qaysi apparat nima uchun",
      desc: "Apparatli kosmetologiya: lazer epilyatsiya, pigment, g'ovaklar, qizarish, chandiqlar va papillomalar uchun qaysi apparat. Radeski — Farg'ona.",
      keywords:
        "apparatli kosmetologiya, lazer kosmetologiya, IPL, Hollywood Spectra, Derma V, DEKA, kosmetolog Farg'ona, Radeski Skin Clinic",
    },
    ru: {
      title: "Аппаратная косметология: какой аппарат для чего",
      desc: "Аппаратная косметология: какой аппарат для эпиляции, пигмента, пор, покраснения, рубцов и папиллом. Аппараты Radeski в Фергане.",
      keywords:
        "аппаратная косметология, лазерная косметология, IPL, Hollywood Spectra, Derma V, DEKA, косметолог Фергана, Radeski Skin Clinic",
    },
    en: {
      title: "Device Cosmetology: Which Device for What — Fergana",
      desc: "Device cosmetology: which device treats unwanted hair, pigment, pores, redness, scars and papillomas. Radeski Skin Clinic devices in Fergana.",
      keywords:
        "device cosmetology, laser cosmetology, IPL, Hollywood Spectra, Derma V, DEKA, cosmetologist Fergana, Radeski Skin Clinic",
    },
  },
  'art-dermatolog-qabuliga-tayyorgarlik': {
    uz: {
      title: "Dermatolog qabuliga tayyorgarlik — Farg'ona, Qo'qon",
      desc: "Dermatolog qabuliga qanday tayyorlanish: nima olib kelish, qabuldan oldin nimani qilmaslik, qabulda nima bo'ladi. Farg'ona va Qo'qonda dermatolog.",
      keywords:
        "dermatolog qabuli, dermatologga tayyorgarlik, dermatolog Farg'ona, dermatolog Qo'qon, teri shifokori, dermatoskopiya, Radeski Skin Clinic",
    },
    ru: {
      title: "Как подготовиться к дерматологу — Фергана, Коканд",
      desc: "Как подготовиться к приёму дерматолога: что взять с собой, чего не делать перед приёмом, что будет на приёме. Дерматолог в Фергане и Коканде.",
      keywords:
        "приём дерматолога, подготовка к дерматологу, дерматолог Фергана, дерматолог Коканд, кожный врач, дерматоскопия, Radeski Skin Clinic",
    },
    en: {
      title: "Preparing for a Dermatologist Visit — Fergana, Kokand",
      desc: "How to prepare for a dermatologist visit: what to bring, what not to do beforehand and what happens at the visit. Dermatologists in Fergana and Kokand.",
      keywords:
        "dermatologist visit, preparing for a dermatologist, dermatologist Fergana, dermatologist Kokand, skin doctor, dermatoscopy, Radeski Skin Clinic",
    },
  },
  'art-podolog-kim': {
    uz: {
      title: "Podolog kim va qachon kerak — Farg'ona, Qo'qon",
      desc: "Podolog kim va qachon kerak: pedikyurdan farqi, ichiga o'sgan tirnoq, tirnoq zamburug'i, qadoq va tovon yorilishi. Farg'ona va Qo'qonda podolog.",
      keywords:
        "podolog, podolog kim, podolog Farg'ona, podolog Qo'qon, ichiga o'sgan tirnoq, tirnoq zamburug'i, qadoq, Radeski Skin Clinic",
    },
    ru: {
      title: "Кто такой подолог и когда к нему идти — Фергана",
      desc: "Кто такой подолог: отличие от педикюра, вросший ноготь, грибок ногтей, мозоли и трещины пяток, уход при диабете. Подолог в Фергане и Коканде.",
      keywords:
        "подолог, кто такой подолог, подолог Фергана, подолог Коканд, вросший ноготь, грибок ногтей, мозоли, Radeski Skin Clinic",
    },
    en: {
      title: "Who Is a Podiatrist and When to Go — Fergana",
      desc: "Who a podiatrist is: the difference from a pedicure, ingrown nails, nail fungus, corns, cracked heels and diabetic foot care. Fergana and Kokand.",
      keywords:
        "podiatrist, what is a podiatrist, podiatrist Fergana, podiatrist Kokand, ingrown toenail, nail fungus, corns, Radeski Skin Clinic",
    },
  },
  'art-kuperoz': {
    uz: {
      title: "Kuperoz nima: yuzdagi qizil tomirlar — Farg'ona",
      desc: "Kuperoz nima: yuzdagi tomir to'rlari sabablari, rozatseadan farqi, nega kremlar yordam bermaydi va Derma V lazeri hamda IPL bilan davolash.",
      keywords:
        "kuperoz, kuperoz nima, yuzdagi tomir to'ri, teleangiektaziya, kuperozni davolash Farg'ona, Derma V, IPL, Radeski Skin Clinic",
    },
    ru: {
      title: "Что такое купероз: сосуды на лице — Фергана",
      desc: "Что такое купероз: причины сосудистых сеточек, отличие от розацеа, почему не помогают кремы и лечение лазером Derma V и IPL в Фергане.",
      keywords:
        "купероз, что такое купероз, сосудистая сеточка на лице, телеангиэктазии, лечение купероза Фергана, Derma V, IPL, Radeski Skin Clinic",
    },
    en: {
      title: "What Is Couperose: Facial Thread Veins — Fergana",
      desc: "What couperose is: why thread veins appear, how it differs from rosacea, why creams do not help, and Derma V laser and IPL treatment in Fergana.",
      keywords:
        "couperose, what is couperose, facial thread veins, telangiectasia, couperose treatment Fergana, Derma V, IPL, Radeski Skin Clinic",
    },
  },
  'art-yuz-tozalash-turlari': {
    uz: {
      title: "Yuz tozalash turlari: qaysi biri mos — Farg'ona",
      desc: "Yuz tozalash turlari: mexanik, ultratovush, karbon piling va PRX-T33 — qaysi teriga mos va qachon tozalash mumkin emas. Radeski — Farg'ona.",
      keywords:
        "yuz tozalash, yuz tozalash turlari, ultratovush yuz tozalash, mexanik tozalash, karbon piling, yuz tozalash narxi Farg'ona, Radeski Skin Clinic",
    },
    ru: {
      title: "Виды чистки лица: какая подходит — Фергана",
      desc: "Виды чистки лица: механическая, ультразвуковая, карбоновый пилинг и PRX-T33 — какой коже подходят и когда чистка противопоказана. Radeski.",
      keywords:
        "чистка лица, виды чистки лица, ультразвуковая чистка, механическая чистка, карбоновый пилинг, чистка лица цена Фергана, Radeski Skin Clinic",
    },
    en: {
      title: "Types of Facial Cleansing: Which Suits You — Fergana",
      desc: "Facial cleansing types: mechanical, ultrasonic, carbon peel and PRX-T33 — which skin each suits and when cleansing should wait. Radeski, Fergana.",
      keywords:
        "facial cleansing, types of facial cleansing, ultrasonic facial, mechanical cleansing, carbon peel, facial price Fergana, Radeski Skin Clinic",
    },
  },
  'art-qadoq-va-kesak': {
    uz: {
      title: "Qadoq va kesaklar: olib tashlash — Farg'ona, Qo'qon",
      desc: "Qadoq va kesaklar nima uchun paydo bo'ladi, so'galdan farqi, podologda og'riqsiz olib tashlash va uyda nima qilmaslik kerak. Farg'ona va Qo'qonda podolog.",
      keywords:
        "qadoq, kesak, qadoqni olib tashlash, oyoqdagi qadoq, podolog Farg'ona, podolog Qo'qon, oyoq parvarishi, Radeski Skin Clinic",
    },
    ru: {
      title: 'Мозоли и натоптыши: удаление — Фергана, Коканд',
      desc: 'Почему появляются мозоли и натоптыши, отличие от бородавки, безболезненное удаление у подолога и чего нельзя делать дома. Подолог в Фергане и Коканде.',
      keywords:
        'мозоли, натоптыши, удаление мозолей, стержневая мозоль, подолог Фергана, подолог Коканд, аппаратный педикюр, Radeski Skin Clinic',
    },
    en: {
      title: 'Calluses and corns: removal — Fergana, Kokand',
      desc: 'Why calluses and corns form, how they differ from warts, painless removal by a podiatrist and what not to do at home. Podiatrists in Fergana and Kokand.',
      keywords:
        'calluses, corns, callus removal, podiatrist Fergana, podiatrist Kokand, foot care, Radeski Skin Clinic',
    },
  },
  'art-erkaklarda-soch-tokilishi': {
    uz: {
      title: "Erkaklarda soch to'kilishi: sabablari va davolash",
      desc: "Erkaklarda soch to'kilishi: androgenetik alopetsiya, boshqa sabablar, trixoskopiya, PRP, tuliy lazer va soch ko'chirish. Farg'ona va Qo'qonda trixolog.",
      keywords:
        "erkaklarda soch to'kilishi, androgenetik alopetsiya, kal bo'lish, trixolog Farg'ona, trixolog Qo'qon, PRP soch, Radeski Skin Clinic",
    },
    ru: {
      title: 'Выпадение волос у мужчин: причины и лечение',
      desc: 'Выпадение волос у мужчин: андрогенетическая алопеция, другие причины, трихоскопия, PRP, тулиевый лазер и пересадка. Трихолог в Фергане и Коканде.',
      keywords:
        'выпадение волос у мужчин, андрогенетическая алопеция, облысение, трихолог Фергана, трихолог Коканд, PRP для волос, Radeski Skin Clinic',
    },
    en: {
      title: 'Hair loss in men: causes and treatment',
      desc: 'Hair loss in men: male pattern baldness, other causes, trichoscopy, PRP, thulium laser and transplant. Trichologists in Fergana and Kokand.',
      keywords:
        'hair loss in men, male pattern baldness, androgenetic alopecia, trichologist Fergana, trichologist Kokand, PRP hair, Radeski Skin Clinic',
    },
  },
  'art-tovon-yoriqlari': {
    uz: {
      title: "Tovon yoriqlari: sabablari va davolash — Farg'ona",
      desc: "Tovon yoriqlari: nima uchun paydo bo'ladi, qachon kasallik belgisi, uyda parvarish va podologda ishlov. Farg'ona va Qo'qonda podolog.",
      keywords:
        "tovon yoriqlari, tovon yorilishi, quruq tovon, oyoq parvarishi, podolog Farg'ona, podolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Трещины на пятках: причины и лечение — Фергана',
      desc: 'Трещины на пятках: почему появляются, когда это признак болезни, уход дома и обработка у подолога. Подолог в Фергане и Коканде.',
      keywords:
        'трещины на пятках, сухие пятки, лечение трещин на пятках, уход за стопами, подолог Фергана, подолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Cracked heels: causes and treatment — Fergana',
      desc: 'Cracked heels: why they appear, when they signal a disease, home care and podiatric treatment. Podiatrists in Fergana and Kokand.',
      keywords:
        'cracked heels, dry heels, cracked heel treatment, foot care, podiatrist Fergana, podiatrist Kokand, Radeski Skin Clinic',
    },
  },
  'art-lazer-epilyatsiya-kuz-qish': {
    uz: {
      title: 'Lazer epilyatsiya kuz-qishda: nega aynan hozir',
      desc: "Nega lazer epilyatsiyani kuz–qishda boshlash kerak: teri qoraymagan, kurs yozgacha tugaydi. Muolajalar soni, qoidalar va cheklovlar. Farg'ona va Qo'qon.",
      keywords:
        "lazer epilyatsiya, lazer epilyatsiya Farg'ona, lazer epilyatsiya Qo'qon, aleksandrit lazer, DEKA Moveo, kuz qish, Radeski Skin Clinic",
    },
    ru: {
      title: 'Лазерная эпиляция осенью и зимой: почему сейчас',
      desc: 'Почему лазерную эпиляцию лучше начинать осенью и зимой: нет загара, курс закончится к лету. Сколько процедур, правила и противопоказания. Фергана и Коканд.',
      keywords:
        'лазерная эпиляция, лазерная эпиляция Фергана, лазерная эпиляция Коканд, александритовый лазер, DEKA Moveo, сезон, Radeski Skin Clinic',
    },
    en: {
      title: 'Laser hair removal in autumn and winter: why now',
      desc: 'Why start laser hair removal in autumn and winter: no tan, the course ends before summer. Number of sessions, rules and contraindications. Fergana and Kokand.',
      keywords:
        'laser hair removal, laser hair removal Fergana, laser hair removal Kokand, alexandrite laser, DEKA Moveo, Radeski Skin Clinic',
    },
  },
  'art-milium': {
    uz: {
      title: "Milium: oq donachalarni olib tashlash — Farg'ona",
      desc: "Milium — ko'z atrofidagi oq donachalar: nima, nega siqib bo'lmaydi, o'xshash hosilalar va klinikada xavfsiz olib tashlash. Farg'ona va Qo'qonda kosmetolog.",
      keywords:
        "milium, yuzdagi oq donachalar, ko'z atrofidagi oq nuqtalar, milium olib tashlash, kosmetolog Farg'ona, kosmetolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Милиумы: удаление белых точек — Фергана, Коканд',
      desc: 'Милиумы — белые зёрнышки вокруг глаз: что это, почему их нельзя выдавить, похожие образования и безопасное удаление. Косметолог в Фергане и Коканде.',
      keywords:
        'милиумы, просянка, белые точки на лице, удаление милиумов, косметолог Фергана, косметолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Milia removal: white bumps — Fergana, Kokand',
      desc: 'Milia — tiny white bumps around the eyes: what they are, why they cannot be squeezed, look-alikes and safe removal. Cosmetologists in Fergana and Kokand.',
      keywords:
        'milia, white bumps on face, milia removal, cosmetologist Fergana, cosmetologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-diabetda-oyoq-parvarishi': {
    uz: {
      title: 'Qandli diabetda oyoq parvarishi: qoidalar',
      desc: "Qandli diabetda oyoq parvarishi: xavfli belgilar, har kungi qoidalar, nima qilish mumkin emas va podolog yordami. Farg'ona va Qo'qonda podolog.",
      keywords:
        "qandli diabetda oyoq parvarishi, diabetik oyoq, diabetda pedikyur, podolog Farg'ona, podolog Qo'qon, oyoq yarasi, Radeski Skin Clinic",
    },
    ru: {
      title: 'Уход за стопами при диабете: правила и признаки',
      desc: 'Уход за стопами при сахарном диабете: тревожные признаки, ежедневные правила, чего нельзя делать и помощь подолога. Подолог в Фергане и Коканде.',
      keywords:
        'уход за стопами при диабете, диабетическая стопа, педикюр при диабете, подолог Фергана, подолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Foot care with diabetes: rules and warning signs',
      desc: 'Foot care with diabetes: warning signs, daily rules, what never to do and how a podiatrist helps. Podiatrists in Fergana and Kokand.',
      keywords:
        'diabetic foot care, diabetic foot, pedicure with diabetes, podiatrist Fergana, podiatrist Kokand, Radeski Skin Clinic',
    },
  },
  'art-karbon-piling': {
    uz: {
      title: "Karbon piling: narx va natija — Farg'ona, Qo'qon",
      desc: "Karbon piling (Hollywood peel): qanday ishlaydi, kimga mos va mos emas, kurs, parvarish va qarshi ko'rsatmalar. Farg'ona va Qo'qonda Hollywood Spectra.",
      keywords:
        "karbon piling, Hollywood peel, karbon piling Farg'ona, karbon piling Qo'qon, teri teshiklari, qora nuqtalar, Radeski Skin Clinic",
    },
    ru: {
      title: 'Карбоновый пилинг: результат — Фергана, Коканд',
      desc: 'Карбоновый пилинг (голливудский пилинг): как работает, кому подходит и не подходит, курс, уход и противопоказания. Hollywood Spectra в Фергане и Коканде.',
      keywords:
        'карбоновый пилинг, голливудский пилинг, карбоновый пилинг Фергана, карбоновый пилинг Коканд, расширенные поры, чёрные точки, Radeski Skin Clinic',
    },
    en: {
      title: 'Carbon peel: how it works — Fergana, Kokand',
      desc: 'Carbon laser peel (Hollywood peel): how it works, who it suits, the course, aftercare and contraindications. Hollywood Spectra in Fergana and Kokand.',
      keywords:
        'carbon peel, Hollywood peel, carbon laser peel Fergana, enlarged pores, blackheads, Radeski Skin Clinic',
    },
  },
  'art-teri-biopsiyasi': {
    uz: {
      title: "Teri biopsiyasi: qachon kerak va qanday o'tadi — Farg'ona",
      desc: "Teri biopsiyasi qachon kerak, og'riqlimi, gistologik natija qachon tayyor va nimani ko'rsatadi. Farg'ona va Qo'qonda onkodermatolog va dermatopatolog.",
      keywords:
        "teri biopsiyasi, biopsiya Farg'ona, biopsiya Qo'qon, gistologiya, shubhali xol tekshiruvi, onkodermatolog, dermatopatologiya, Radeski Skin Clinic",
    },
    ru: {
      title: 'Биопсия кожи: когда нужна и как проходит — Фергана',
      desc: 'Когда нужна биопсия кожи, больно ли это, когда готов гистологический результат и что он показывает. Онкодерматолог и дерматопатолог в Фергане и Коканде.',
      keywords:
        'биопсия кожи, биопсия Фергана, биопсия Коканд, гистология кожи, подозрительная родинка, онкодерматолог, дерматопатология, Radeski Skin Clinic',
    },
    en: {
      title: 'Skin Biopsy: When It Is Needed and How It Works — Fergana',
      desc: 'When a skin biopsy is needed, whether it hurts, when the histology result is ready and what it shows. Onco-dermatologists in Fergana and Kokand.',
      keywords:
        'skin biopsy, biopsy Fergana, biopsy Kokand, skin histology, suspicious mole, onco-dermatologist, dermatopathology, Radeski Skin Clinic',
    },
  },
  'art-ichga-osgan-tirnoq': {
    uz: {
      title: "Ichiga o'sgan tirnoq: sabablari va davolash — Farg'ona",
      desc: "Ichiga o'sgan tirnoq: sabablari, bosqichlari, uyda nima qilmaslik kerak va podologda jarrohliksiz tuzatish. Farg'ona va Qo'qonda Radeski Skin Clinic.",
      keywords:
        "ichiga o'sgan tirnoq, onixokriptoz, ichga o'sgan tirnoqni davolash, tirnoq skobasi, podolog Farg'ona, podolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Вросший ноготь: причины и лечение — Фергана',
      desc: 'Вросший ноготь: причины, стадии, чего нельзя делать дома и как подолог исправляет ноготь без операции. Фергана и Коканд, Radeski Skin Clinic.',
      keywords:
        'вросший ноготь, онихокриптоз, лечение вросшего ногтя, скоба на ноготь, подолог Фергана, подолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Ingrown Toenail: Causes and Treatment — Fergana',
      desc: 'Ingrown toenail: causes, stages, what not to do at home and how a podiatrist corrects the nail without surgery. Fergana and Kokand, Radeski Skin Clinic.',
      keywords:
        'ingrown toenail, onychocryptosis, ingrown toenail treatment, nail brace, podiatrist Fergana, podiatrist Kokand, Radeski Skin Clinic',
    },
  },
  'art-giperhidroz': {
    uz: {
      title: "Giperhidroz: ortiqcha terlashni davolash — Farg'ona",
      desc: "Ortiqcha terlash (giperhidroz): qo'ltiq, kaft va oyoq terlashi sabablari, xavfli belgilar va botulinoterapiya. Farg'ona va Qo'qonda dermatolog.",
      keywords:
        "giperhidroz, ortiqcha terlash, qo'ltiq terlashi, kaft terlashi, oyoq terlashi, terlashga botulinoterapiya, dermatolog Farg'ona Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Гипергидроз: лечение потливости — Фергана и Коканд',
      desc: 'Повышенная потливость (гипергидроз): причины потливости подмышек, ладоней и стоп, тревожные признаки и ботулинотерапия. Дерматолог в Фергане и Коканде.',
      keywords:
        'гипергидроз, повышенная потливость, потливость подмышек, потливость ладоней, потливость стоп, ботулинотерапия от пота, дерматолог Фергана Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Hyperhidrosis: Excessive Sweating Treatment — Fergana',
      desc: 'Excessive sweating (hyperhidrosis) of underarms, palms and feet: causes, warning signs and botulinum therapy. Dermatologists in Fergana and Kokand.',
      keywords:
        'hyperhidrosis, excessive sweating, underarm sweating, sweaty palms, sweaty feet, botulinum for sweating, dermatologist Fergana Kokand, Radeski Skin Clinic',
    },
  },
  'art-tirnoq-rangi-ozgarishi': {
    uz: {
      title: "Tirnoq rangi o'zgarishi: sabablari va xavf — Farg'ona",
      desc: "Tirnoq sarg'aydimi, oqardimi yoki qora chiziq chiqdimi? Ranglar nima dalolat beradi, qachon xavfli va podolog qanday tekshiradi — Farg'ona va Qo'qon.",
      keywords:
        "tirnoq rangi o'zgarishi, tirnoqda qora chiziq, tirnoqdagi oq dog'lar, sariq tirnoq, tirnoq melanomasi, podolog Farg'ona, podolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Изменение цвета ногтей: причины и риски — Фергана',
      desc: 'Ноготь пожелтел, побелел или появилась тёмная полоса? О чём говорит цвет ногтей, когда это опасно и как проверяет подолог — Фергана и Коканд.',
      keywords:
        'изменение цвета ногтей, тёмная полоса на ногте, белые пятна на ногтях, жёлтые ногти, меланома ногтя, подолог Фергана, подолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Nail Color Changes: Causes and Risks — Fergana',
      desc: 'Yellow, white or green nails, or a dark stripe? What nail color changes mean, when they are dangerous and how a podiatrist checks them in Fergana and Kokand.',
      keywords:
        'nail color changes, dark stripe on nail, white spots on nails, yellow nails, nail melanoma, podiatrist Fergana, podiatrist Kokand, Radeski Skin Clinic',
    },
  },
  'art-lablar-yorilishi-xeylit': {
    uz: {
      title: "Lablar yorilishi va xeylit: qishda parvarish — Farg'ona",
      desc: "Qishda lablar nega yoriladi, og'iz burchagidagi yoriqlar, allergik va aktinik xeylit, gerpesdan farqi va xavfli belgilar. Farg'ona va Qo'qonda dermatolog.",
      keywords:
        "lablar yorilishi, xeylit, quruq lablar, og'iz burchagi yoriqlari, angulyar xeylit, aktinik xeylit, dermatolog Farg'ona, Radeski Skin Clinic",
    },
    ru: {
      title: 'Трещины на губах и хейлит зимой — дерматолог Фергана',
      desc: 'Почему зимой трескаются губы, заеды в уголках рта, аллергический и актинический хейлит, отличие от герпеса и опасные признаки. Дерматолог в Фергане и Коканде.',
      keywords:
        'трещины на губах, хейлит, сухие губы, заеды в уголках рта, ангулярный хейлит, актинический хейлит, дерматолог Фергана, Radeski Skin Clinic',
    },
    en: {
      title: 'Chapped Lips and Cheilitis in Winter — Fergana',
      desc: 'Why lips crack in winter, angular, allergic and actinic cheilitis, how it differs from herpes, lip care and warning signs. Dermatologists in Fergana and Kokand.',
      keywords:
        'chapped lips, cheilitis, dry lips, cracks in corners of mouth, angular cheilitis, actinic cheilitis, dermatologist Fergana, Radeski Skin Clinic',
    },
  },
  'art-pigment-doglari-qishda': {
    uz: {
      title: "Pigment dog'larini davolash kuz–qishda — Farg'ona",
      desc: "Pigment dog'larini davolash uchun kuz va qish eng qulay vaqt: lentigo, sepkil, dermatoskopiya, IPL va lazer, qishda SPF. Farg'ona va Qo'qonda kosmetolog.",
      keywords:
        "pigment dog'larini davolash, quyosh dog'lari, sepkil olib tashlash, postakne dog'lari, IPL pigmentatsiya, lazer pigment dog', pigmentatsiya Farg'ona, Radeski Skin Clinic",
    },
    ru: {
      title: 'Лечение пигментных пятен осенью и зимой — Фергана',
      desc: 'Почему осень и зима — лучшее время лечить пигментные пятна: лентиго, веснушки, дерматоскопия, IPL и лазер, SPF зимой. Косметолог в Фергане и Коканде.',
      keywords:
        'лечение пигментных пятен, удаление пигментных пятен, солнечные пятна лентиго, удаление веснушек, пятна постакне, IPL пигментация, пигментация Фергана, Radeski Skin Clinic',
    },
    en: {
      title: 'Pigment Spot Treatment in Autumn and Winter — Fergana',
      desc: 'Why autumn and winter are the best time to treat pigment spots: sun spots, freckles, dermoscopy, IPL and laser, winter SPF. Cosmetologist in Fergana and Kokand.',
      keywords:
        'pigment spot treatment, sun spot removal, freckle removal, post-acne marks, IPL pigmentation, laser pigmentation, pigmentation Fergana, Radeski Skin Clinic',
    },
  },
  'art-qizil-yassi-temiratki': {
    uz: {
      title: "Qizil yassi temiratki: belgilari va davolash — Farg'ona",
      desc: "Qizil yassi temiratki (lixen planus): binafsha-qizil qichiydigan tugunchalar, og'iz va soch shakli, tashxis va davolash. Farg'ona va Qo'qonda dermatolog.",
      keywords:
        "qizil yassi temiratki, lixen planus, qizil yassi temiratki davolash, og'izdagi oq dog'lar, teri qichishi, dermatolog Farg'ona, dermatolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Красный плоский лишай: симптомы и лечение — Фергана',
      desc: 'Красный плоский лишай: зудящие фиолетовые узелки, форма во рту и на голове, заразен ли, диагностика и лечение. Дерматолог в Фергане и Коканде.',
      keywords:
        'красный плоский лишай, лихен планус, лечение красного плоского лишая, белые пятна во рту, зуд кожи, дерматолог Фергана, дерматолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Lichen Planus: Symptoms and Treatment — Fergana',
      desc: 'Lichen planus: itchy purple-red bumps, mouth and scalp forms, whether it is contagious, diagnosis and treatment. Dermatologists in Fergana and Kokand.',
      keywords:
        'lichen planus, lichen planus treatment, oral lichen planus, purple itchy bumps, itchy skin, dermatologist Fergana, dermatologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-melanoma': {
    uz: {
      title: "Melanoma: erta belgilar va tekshiruv — Farg'ona, Qo'qon",
      desc: "Melanoma belgilari: ABCDE, xunuk o'rdakcha, tirnoq va tovondagi dog'lar. Dermatoskopiya, PhotoFinder va biopsiya — Farg'ona va Qo'qonda dermatoonkolog.",
      keywords:
        "melanoma belgilari, teri saratoni, xol o'zgarishi, dermatoonkolog Farg'ona, dermatoskopiya Qo'qon, teri biopsiyasi, Radeski Skin Clinic",
    },
    ru: {
      title: 'Меланома: ранние признаки и диагностика — Фергана, Коканд',
      desc: 'Признаки меланомы: ABCDE, «гадкий утёнок», пятна на ногте и стопе. Дерматоскопия, PhotoFinder и биопсия — дерматоонколог в Фергане и Коканде.',
      keywords:
        'меланома признаки, рак кожи, изменение родинки, дерматоонколог Фергана, дерматоскопия Коканд, биопсия кожи, Radeski Skin Clinic',
    },
    en: {
      title: 'Melanoma: Early Signs and Skin Checks — Fergana, Kokand',
      desc: 'Melanoma signs: ABCDE, the ugly duckling, nail and sole spots. Dermoscopy, PhotoFinder mapping and biopsy with a dermato-oncologist in Fergana and Kokand.',
      keywords:
        'melanoma signs, skin cancer, changing mole, dermato-oncologist Fergana, dermoscopy Kokand, skin biopsy, Radeski Skin Clinic',
    },
  },
  'art-orab-oluvchi-temiratki': {
    uz: {
      title: "O'rab oluvchi temiratki: belgilar va davolash — Farg'ona",
      desc: "O'rab oluvchi temiratki (gerpes zoster): birinchi belgilar, xavfli holatlar, yuqumliligi va davolash. Farg'ona va Qo'qonda dermatolog qabuli.",
      keywords:
        "o'rab oluvchi temiratki, gerpes zoster, belbog'simon temiratki, o'rab oluvchi temiratki davolash, postgerpetik og'riq, dermatolog Farg'ona, dermatolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Опоясывающий лишай: признаки и лечение — Фергана',
      desc: 'Опоясывающий лишай (опоясывающий герпес): первые признаки, опасные симптомы, заразность и лечение. Приём дерматолога в Фергане и Коканде.',
      keywords:
        'опоясывающий лишай, опоясывающий герпес, лечение опоясывающего лишая, постгерпетическая невралгия, дерматолог Фергана, дерматолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Shingles: First Signs and Treatment — Fergana',
      desc: 'Shingles (herpes zoster): first signs, warning symptoms, whether it is contagious and how it is treated. See a dermatologist in Fergana and Kokand.',
      keywords:
        'shingles, herpes zoster, shingles treatment, post-herpetic neuralgia, dermatologist Fergana, dermatologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-sovuq-allergiyasi': {
    uz: {
      title: "Sovuq allergiyasi va pernioz: belgilar, xavf — Farg'ona",
      desc: "Sovuq allergiyasi, pernioz va sovuqdan qizarish: farqi, sovuq suvda xavf, nima qilmaslik va himoya. Farg'ona va Qo'qonda dermatolog maslahati.",
      keywords:
        "sovuq allergiyasi, sovuq eshakemisi, pernioz, sovuqdan qizarish, barmoqlar shishishi, dermatolog Farg'ona, dermatolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Аллергия на холод и ознобление — дерматолог в Фергане',
      desc: 'Аллергия на холод, ознобление и покраснение от холода: как отличить, чем опасна холодная вода, чего не делать. Дерматолог в Фергане и Коканде.',
      keywords:
        'аллергия на холод, холодовая крапивница, ознобление, покраснение от холода, отёк пальцев, дерматолог Фергана, дерматолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Cold Allergy and Chilblains: Signs, Risks — Fergana',
      desc: 'Cold allergy, chilblains and cold redness: how to tell them apart, cold-water danger, what not to do and protection. Dermatologists in Fergana and Kokand.',
      keywords:
        'cold allergy, cold urticaria, chilblains, cold redness, swollen fingers, dermatologist Fergana, dermatologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-vitiligo-belgilari': {
    uz: {
      title: "Vitiligo: oq dog'lar, belgilari va davolash — Farg'ona",
      desc: "Vitiligo — sutdek oq dog'lar: yuqumlimi, birinchi belgilar, nimadan farqlash, nima qilmaslik va davolash. Farg'ona va Qo'qonda dermatolog ko'rigi.",
      keywords:
        "vitiligo, terida oq dog'lar, vitiligo belgilari, vitiligo yuqumlimi, vitiligo davolash Farg'ona, vitiligo Qo'qon, dermatolog, Radeski Skin Clinic",
    },
    ru: {
      title: 'Витилиго: белые пятна на коже, признаки, лечение — Фергана',
      desc: 'Витилиго — молочно-белые пятна: заразно ли, первые признаки, с чем путают, чего не делать и как лечат. Осмотр дерматолога в Фергане и Коканде.',
      keywords:
        'витилиго, белые пятна на коже, признаки витилиго, заразно ли витилиго, лечение витилиго Фергана, витилиго Коканд, дерматолог, Radeski Skin Clinic',
    },
    en: {
      title: 'Vitiligo: White Patches, First Signs and Treatment — Fergana',
      desc: 'Vitiligo — milky-white skin patches: is it contagious, first signs, look-alikes, what not to do and treatment. Dermatologist visits in Fergana and Kokand.',
      keywords:
        'vitiligo, white patches on skin, vitiligo symptoms, is vitiligo contagious, vitiligo treatment Fergana, vitiligo Kokand, dermatologist, Radeski Skin Clinic',
    },
  },
  'art-oyoqdagi-tomir-tori': {
    uz: {
      title: "Oyoqdagi tomir to'ri: lazer bilan davolash — Farg'ona",
      desc: "Oyoqlardagi tomir to'ri: varikozdan farqi, sabablari, xavfli belgilar va Derma V lazeri bilan davolash. Farg'ona va Qo'qonda Radeski Skin Clinic.",
      keywords:
        "oyoqdagi tomir to'ri, teleangiektaziya, oyoqdagi tomirlarni lazer bilan olib tashlash, varikoz, Derma V lazer, tomir to'ri Farg'ona, tomir to'ri Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Сосудистые звёздочки на ногах: лазер — Фергана',
      desc: 'Сосудистые звёздочки на ногах: отличие от варикоза, причины, опасные признаки и удаление лазером Derma V. Radeski Skin Clinic в Фергане и Коканде.',
      keywords:
        'сосудистые звёздочки на ногах, телеангиэктазии, удаление сосудов на ногах лазером, варикоз, лазер Derma V, сосудистые звёздочки Фергана, сосудистые звёздочки Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Spider Veins on Legs: Laser Treatment — Fergana',
      desc: 'Spider veins on the legs: how they differ from varicose veins, causes, warning signs and Derma V laser removal. Radeski Skin Clinic in Fergana and Kokand.',
      keywords:
        'spider veins on legs, telangiectasia, laser leg vein removal, varicose veins, Derma V laser, spider veins Fergana, spider veins Kokand, Radeski Skin Clinic',
    },
  },
  'art-bosh-terisi-psoriazi': {
    uz: {
      title: "Bosh terisi psoriazi: belgilari va davolash — Farg'ona",
      desc: "Bosh terisi psoriazi: kepakdan farqi, soch to'kilishi, qishda kuchayishi va davolash. Farg'ona va Qo'qonda dermatolog va trixolog ko'rigi.",
      keywords:
        "bosh terisi psoriazi, boshdagi psoriaz, psoriaz kepak farqi, psoriazda soch to'kilishi, psoriaz davolash Farg'ona, trixolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Псориаз кожи головы: признаки и лечение — Фергана',
      desc: 'Псориаз кожи головы: отличие от перхоти, выпадение волос, обострения зимой и лечение. Осмотр дерматолога и трихолога в Фергане и Коканде.',
      keywords:
        'псориаз кожи головы, псориаз волосистой части головы, псориаз или перхоть, выпадение волос при псориазе, лечение псориаза Фергана, трихолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Scalp Psoriasis: Signs and Treatment — Fergana',
      desc: 'Scalp psoriasis: how it differs from dandruff, hair shedding, winter flares and treatment. Dermatologist and trichologist care in Fergana and Kokand.',
      keywords:
        'scalp psoriasis, psoriasis vs dandruff, hair loss in psoriasis, scalp psoriasis treatment, psoriasis treatment Fergana, trichologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-kimyoviy-piling': {
    uz: {
      title: "Kimyoviy piling: teri yangilanishi va parvarish — Farg'ona",
      desc: "Kimyoviy piling: nimaga yordam beradi, nega kuz-qishda, qarshi ko'rsatmalar va parvarish. Farg'ona va Qo'qonda kosmetolog pilingni tanlaydi.",
      keywords:
        "kimyoviy piling, yuz pilingi, postakne dog'lari, pigment dog'lari, piling Farg'ona, piling Qo'qon, kosmetolog, Radeski Skin Clinic",
    },
    ru: {
      title: 'Химический пилинг лица: показания и уход — Фергана',
      desc: 'Химический пилинг: с чем помогает, почему осенью и зимой, противопоказания и уход после. Косметолог в Фергане и Коканде подберёт пилинг.',
      keywords:
        'химический пилинг, пилинг лица, следы постакне, пигментные пятна, пилинг Фергана, пилинг Коканд, косметолог, Radeski Skin Clinic',
    },
    en: {
      title: 'Chemical Peel: Benefits and Aftercare — Fergana',
      desc: 'Chemical peels: what they help with, why autumn and winter, contraindications and aftercare. A cosmetologist in Fergana and Kokand picks the peel.',
      keywords:
        'chemical peel, facial peel, post-acne marks, pigment spots, chemical peel Fergana, chemical peel Kokand, cosmetologist, Radeski Skin Clinic',
    },
  },
  'art-plantar-sogal': {
    uz: {
      title: "Plantar so'gal: oyoq tagidagi so'galni davolash — Farg'ona",
      desc: "Oyoq tagidagi so'gal: qadoqdan farqi, qanday yuqadi, xavfli belgilar va CO₂ lazer, krio yoki radioto'lqin bilan davolash. Farg'ona va Qo'qonda podolog.",
      keywords:
        "plantar so'gal, oyoq tagidagi so'gal, so'gal olib tashlash, so'gal va qadoq farqi, so'galni lazer bilan olib tashlash, podolog Farg'ona, so'gal Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Подошвенная бородавка: лечение и удаление — Фергана',
      desc: 'Подошвенная бородавка: отличие от мозоли, как передаётся, опасные признаки и лечение CO₂-лазером, криодеструкцией или радиоволной. Подолог в Фергане и Коканде.',
      keywords:
        'подошвенная бородавка, бородавка на стопе, удаление бородавки, бородавка или мозоль, удаление бородавки лазером, подолог Фергана, бородавка Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Plantar Warts: Treatment and Removal — Fergana',
      desc: 'Plantar warts: how they differ from calluses, how HPV spreads, red flags and treatment with CO₂ laser, cryo or radio waves. Podiatrists in Fergana and Kokand.',
      keywords:
        'plantar wart, wart on the sole, wart removal, wart vs callus, laser wart removal, podiatrist Fergana, wart treatment Kokand, Radeski Skin Clinic',
    },
  },
  'art-chipqon-follikulit': {
    uz: {
      title: "Chipqon va follikulit: davolash — Farg'ona, Qo'qon",
      desc: "Chipqon (furunkul) va follikulit: sabablari, xavfli belgilar, yuzdagi chipqonni nega siqib bo'lmaydi va qanday davolanadi. Farg'ona va Qo'qonda dermatolog.",
      keywords:
        "chipqon, furunkul, follikulit, karbunkul, chipqon davolash, yuzdagi chipqon, dermatolog Farg'ona, Radeski Skin Clinic",
    },
    ru: {
      title: 'Фурункул и фолликулит: лечение — Фергана, Коканд',
      desc: 'Фурункул и фолликулит: причины, опасные признаки, почему нельзя выдавливать фурункул на лице и как его лечат. Дерматолог в Фергане и Коканде.',
      keywords:
        'фурункул, фолликулит, карбункул, чирей, лечение фурункула, фурункул на лице, дерматолог Фергана, Radeski Skin Clinic',
    },
    en: {
      title: 'Boils and Folliculitis Treatment — Fergana, Kokand',
      desc: 'Boils (furuncles) and folliculitis: causes, danger signs, why never to squeeze a boil on the face and how it is treated. Dermatologists in Fergana and Kokand.',
      keywords:
        'boils, furuncle, folliculitis, carbuncle, boil treatment, boil on face, dermatologist Fergana, Radeski Skin Clinic',
    },
  },
  'art-aktinik-keratoz': {
    uz: {
      title: "Aktinik keratoz: quyoshdan dag'al dog'lar — Farg'ona",
      desc: "Aktinik keratoz — quyosh ko'rgan terida dag'al, qipiqli dog'lar. Belgilari, xavfi, dermatoskopiya va davolash Farg'ona va Qo'qonda onkodermatologda.",
      keywords:
        "aktinik keratoz, quyosh keratozi, terida dag'al dog'lar, aktinik xeylit, onkodermatolog Farg'ona, dermatoskopiya Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Актинический кератоз: шершавые пятна от солнца — Фергана',
      desc: 'Актинический кератоз — шершавые шелушащиеся пятна на коже после солнца. Признаки, риск, дерматоскопия и лечение у онкодерматолога в Фергане и Коканде.',
      keywords:
        'актинический кератоз, солнечный кератоз, шершавые пятна на коже, актинический хейлит, онкодерматолог Фергана, дерматоскопия Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Actinic Keratosis: Rough Sun Spots — Fergana',
      desc: 'Actinic keratosis: rough, scaly spots on sun-damaged skin. Signs, risk, dermatoscopy and treatment with an oncodermatologist in Fergana and Kokand.',
      keywords:
        'actinic keratosis, solar keratosis, rough skin spots, actinic cheilitis, oncodermatologist Fergana, dermatoscopy Kokand, Radeski Skin Clinic',
    },
  },
  'art-bolalarda-atopik-dermatit': {
    uz: {
      title: "Bolalarda atopik dermatit: qishki parvarish — Farg'ona",
      desc: "Bolalarda atopik dermatit qishda: belgilar, cho'miltirish va emolent rejasi, xavfli belgilar. Farg'ona va Qo'qonda bolalar dermatologi.",
      keywords:
        "bolalarda atopik dermatit, bolalarda ekzema, atopik dermatit qishda, emolent, bolalar dermatologi Farg'ona, dermatolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Атопический дерматит у детей зимой — Фергана',
      desc: 'Атопический дерматит у детей зимой: признаки, купание и эмоленты, тревожные симптомы. Детский дерматолог в Фергане и Коканде — Radeski.',
      keywords:
        'атопический дерматит у детей, детская экзема, атопический дерматит зимой, эмолент, детский дерматолог Фергана, дерматолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Atopic Dermatitis in Children: Winter Care — Fergana',
      desc: 'Atopic dermatitis in children in winter: signs by age, bathing and emollient plan, red flags. Paediatric dermatologist in Fergana and Kokand.',
      keywords:
        'atopic dermatitis in children, childhood eczema, winter eczema care, emollient, paediatric dermatologist Fergana, dermatologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-mort-tirnoqlar': {
    uz: {
      title: "Mo'rt va qatlanadigan tirnoqlar: parvarish — Farg'ona",
      desc: "Mo'rt va qatlanadigan tirnoqlar: sabablari, zamburug' va psoriaz belgilari, tahlil va podolog parvarishi. Farg'ona va Qo'qonda Radeski Skin Clinic.",
      keywords:
        "mo'rt tirnoqlar, qatlanadigan tirnoqlar, tirnoq sinishi, tirnoq parvarishi, podolog Farg'ona, podolog Qo'qon, tirnoq zamburug'i tahlili, Radeski Skin Clinic",
    },
    ru: {
      title: 'Ломкие и слоящиеся ногти: причины и уход — Фергана',
      desc: 'Ломкие и слоящиеся ногти: причины, признаки грибка и псориаза, анализ и подологический уход. Подолог в Фергане и Коканде — Radeski Skin Clinic.',
      keywords:
        'ломкие ногти, слоящиеся ногти, ногти ломаются причины, уход за ногтями, подолог Фергана, подолог Коканд, анализ на грибок ногтей, Radeski Skin Clinic',
    },
    en: {
      title: 'Brittle and Splitting Nails: Causes and Care — Fergana',
      desc: 'Brittle and splitting nails: causes, signs of fungus and psoriasis, nail tests and podology care. Podologists in Fergana and Kokand at Radeski Skin Clinic.',
      keywords:
        'brittle nails, splitting nails, peeling nails causes, nail care, podologist Fergana, podologist Kokand, nail fungus test, Radeski Skin Clinic',
    },
  },
  'art-koz-osti-qorayishi': {
    uz: {
      title: "Ko'z osti qorayishi va shishi: sabablari — Farg'ona",
      desc: "Ko'z osti qorayishi va shishi: pigment, tomir va soya turlari, qachon shifokor kerak, uyda parvarish va klinikada davolash. Farg'ona va Qo'qonda kosmetolog.",
      keywords:
        "ko'z osti qorayishi, ko'z osti shishi, qora doiralar, ko'z atrofi biorevitalizatsiya, ko'z yoshi tarnovi filler, kosmetolog Farg'ona, kosmetolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Тёмные круги и отёки под глазами — Фергана',
      desc: 'Тёмные круги и отёки под глазами: пигментный, сосудистый и теневой типы, когда нужен врач, домашний уход и лечение в клинике. Косметолог в Фергане и Коканде.',
      keywords:
        'тёмные круги под глазами, отёки под глазами, мешки под глазами, биоревитализация вокруг глаз, филлер носослёзной борозды, косметолог Фергана, косметолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Dark Circles and Under-Eye Puffiness — Fergana',
      desc: 'Dark circles and under-eye puffiness: pigment, vascular and shadow types, when to see a doctor, home care and treatment. Cosmetologists in Fergana and Kokand.',
      keywords:
        'dark circles under eyes, under-eye puffiness, under-eye bags, eye-area biorevitalization, tear trough filler, cosmetologist Fergana, cosmetologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-yangi-yil-yuz-parvarishi': {
    uz: {
      title: "Yangi yil oldidan yuz parvarishi: muolaja rejasi — Farg'ona",
      desc: "Bayramdan qancha oldin piling, botoks, filler va yuz tozalash qilish kerak, uy parvarishi va xatolar. Farg'ona va Qo'qonda kosmetolog.",
      keywords:
        "yangi yil oldidan yuz parvarishi, bayram oldidan kosmetolog, piling qachon qilish, botoks bayramgacha, filler shishi, kosmetolog Farg'ona, kosmetolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Уход за лицом перед Новым годом: план процедур — Фергана',
      desc: 'За сколько до праздника делать пилинг, ботокс, филлеры и чистку лица, домашний уход и частые ошибки. Опытный косметолог в Фергане и Коканде.',
      keywords:
        'уход за лицом перед Новым годом, косметолог перед праздником, когда делать пилинг, ботокс перед праздником, отёк после филлеров, косметолог Фергана, косметолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Skin Care Before New Year: Treatment Timing — Fergana',
      desc: 'How far ahead of the holidays to book peels, Botox, fillers and facial cleansing, plus home care and mistakes. Cosmetologists in Fergana and Kokand.',
      keywords:
        'skin care before New Year, pre-holiday cosmetologist, when to get a peel, Botox before holidays, filler swelling, cosmetologist Fergana, cosmetologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-qotir': {
    uz: {
      title: "Qo'tir (skabiyez): davolash — Farg'ona, Qo'qon",
      desc: "Qo'tir: kechasi kuchayadigan qichishish, qanday yuqadi, dermatoskopiya, butun oilani bir kunda davolash va uydagi ishlov. Farg'ona va Qo'qonda dermatovenerolog.",
      keywords:
        "qo'tir, skabiyez, qo'tir davolash, kechasi qichishish, qo'tir belgilari, dermatovenerolog Farg'ona, dermatolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Чесотка: признаки и лечение — Фергана, Коканд',
      desc: 'Чесотка: ночной зуд, как передаётся, дерматоскопия, лечение всей семьи в один день и обработка вещей. Дерматовенеролог в Фергане и Коканде.',
      keywords:
        'чесотка, лечение чесотки, чесоточный клещ, зуд ночью, чесотка у детей, дерматовенеролог Фергана, дерматолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Scabies: signs and treatment — Fergana, Kokand',
      desc: 'Scabies: night-time itching, how it spreads, dermoscopy, treating the whole household on one day and cleaning bedding. Fergana and Kokand.',
      keywords:
        'scabies, scabies treatment, scabies mite, itching at night, scabies in children, dermatologist Fergana, dermatologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-seboreyali-keratoz': {
    uz: {
      title: "Seboreyali keratoz: olib tashlash — Farg'ona, Qo'qon",
      desc: "Seboreyali keratoz (keratoma): xavflimi, melanomadan farqi, dermatoskopiya, CO₂ lazer va radioto'lqin bilan olib tashlash. Farg'ona va Qo'qonda dermatolog.",
      keywords:
        "seboreyali keratoz, keratoma, keksalik so'gali, keratoma olib tashlash, CO2 lazer, dermatolog Farg'ona, dermatolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Себорейный кератоз: удаление — Фергана, Коканд',
      desc: 'Себорейный кератоз (кератома): опасна ли, отличие от меланомы, дерматоскопия, удаление CO₂-лазером и радиоволной. Дерматолог в Фергане и Коканде.',
      keywords:
        'себорейный кератоз, кератома, удаление кератомы, старческая бородавка, удаление CO2-лазером, дерматолог Фергана, дерматолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Seborrheic keratosis: removal — Fergana, Kokand',
      desc: 'Seborrheic keratosis: is it dangerous, how it differs from melanoma, dermoscopy, removal with CO₂ laser and radiowave. Dermatologists in Fergana and Kokand.',
      keywords:
        'seborrheic keratosis, keratoma, age spots removal, CO2 laser, dermatologist Fergana, dermatologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-bolalarda-teri-toshmalari': {
    uz: {
      title: 'Bolalarda teri toshmalari: qachon xavotir olish kerak',
      desc: "Bolalarda toshma: qachon darhol tez yordam (stakan testi), eng ko'p sabablar, ota-onalar xatolari va bolalar dermatologi. Farg'ona va Qo'qonda qabul.",
      keywords:
        "bolalarda toshma, bolada teri toshmasi, bolalar dermatologi, taglik dermatiti, terlama, dermatolog Farg'ona, dermatolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Сыпь у ребёнка: когда волноваться — Фергана, Коканд',
      desc: 'Сыпь у ребёнка: когда сразу вызывать скорую (тест со стаканом), частые причины, ошибки родителей и детский дерматолог в Фергане и Коканде.',
      keywords:
        'сыпь у ребёнка, сыпь у детей, детский дерматолог, пелёночный дерматит, потница, дерматолог Фергана, дерматолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Rashes in children: when to worry — Fergana, Kokand',
      desc: 'Rashes in children: when to call an ambulance (the glass test), common causes, mistakes parents make and a paediatric dermatologist in Fergana and Kokand.',
      keywords:
        'rash in children, child skin rash, paediatric dermatologist, nappy rash, heat rash, dermatologist Fergana, dermatologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-pushti-temiratki': {
    uz: {
      title: 'Pushti temiratki (Jiber): belgilari va parvarish',
      desc: "Pushti temiratki: \"ona dog'\" va tanadagi pushti dog'lar. Qancha davom etadi, zamburug' va psoriazdan farqi, parvarish. Farg'ona va Qo'qonda dermatolog.",
      keywords:
        "pushti temiratki, Jiber temiratkisi, tanada pushti dog'lar, temiratki davolash, dermatolog Farg'ona, dermatolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Розовый лишай Жибера: признаки и уход',
      desc: 'Розовый лишай: «материнская бляшка» и розовые пятна на теле. Сколько длится, отличие от грибка и псориаза, уход. Дерматолог в Фергане и Коканде.',
      keywords:
        'розовый лишай, лишай Жибера, розовые пятна на теле, лечение розового лишая, дерматолог Фергана, дерматолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Pityriasis rosea: signs and care — Fergana, Kokand',
      desc: 'Pityriasis rosea: a herald patch and pink patches on the body. How long it lasts, how it differs from fungus and psoriasis, and care. Fergana and Kokand.',
      keywords:
        'pityriasis rosea, herald patch, pink rash on body, dermatologist Fergana, dermatologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-striya': {
    uz: {
      title: "Cho'zilish izlari (striya): davolash — Farg'ona",
      desc: "Striyalar nima uchun paydo bo'ladi, yangi va eski izlar, fraksion CO₂ lazer va RF-mikroigna bilan davolash, homiladorlikda oldini olish. Farg'ona va Qo'qonda.",
      keywords:
        "striya, cho'zilish izlari, striyalarni davolash, homiladorlikdan keyin striya, CO2 lazer, kosmetolog Farg'ona, kosmetolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Растяжки (стрии): лечение — Фергана, Коканд',
      desc: 'Почему появляются растяжки, свежие и старые стрии, лечение фракционным CO₂-лазером и RF-микроиглами, профилактика при беременности. Фергана и Коканд.',
      keywords:
        'растяжки, стрии, удаление растяжек, растяжки после родов, лазер от растяжек, косметолог Фергана, косметолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Stretch marks: treatment — Fergana, Kokand',
      desc: 'Why stretch marks appear, new versus old marks, fractional CO₂ laser and RF microneedling, and prevention in pregnancy. Cosmetologists in Fergana and Kokand.',
      keywords:
        'stretch marks, striae, stretch mark removal, stretch marks after pregnancy, CO2 laser, cosmetologist Fergana, cosmetologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-ayollarda-soch-tokilishi': {
    uz: {
      title: "Ayollarda soch to'kilishi: sabablari va davolash",
      desc: "Ayollarda soch to'kilishi: tug'ruqdan keyin, stress, temir tanqisligi, qalqonsimon bez. Trixoskopiya, tahlillar va davolash. Farg'ona va Qo'qonda trixolog.",
      keywords:
        "ayollarda soch to'kilishi, soch to'kilishi sabablari, tug'ruqdan keyin soch to'kilishi, trixolog Farg'ona, trixolog Qo'qon, trixoskopiya, Radeski Skin Clinic",
    },
    ru: {
      title: 'Выпадение волос у женщин: причины и лечение',
      desc: 'Выпадение волос у женщин: после родов, стресс, дефицит железа, щитовидная железа. Трихоскопия, анализы и лечение. Трихолог в Фергане и Коканде.',
      keywords:
        'выпадение волос у женщин, причины выпадения волос, выпадение волос после родов, трихолог Фергана, трихолог Коканд, трихоскопия, Radeski Skin Clinic',
    },
    en: {
      title: 'Hair loss in women: causes and treatment',
      desc: 'Hair loss in women: after childbirth, stress, iron deficiency, thyroid. Trichoscopy, blood tests and treatment. Trichologists in Fergana and Kokand.',
      keywords:
        'hair loss in women, causes of hair loss, postpartum hair loss, trichologist Fergana, trichologist Kokand, trichoscopy, Radeski Skin Clinic',
    },
  },
  'art-perioral-dermatit': {
    uz: {
      title: "Perioral dermatit: og'iz atrofidagi toshma — davolash",
      desc: "Perioral dermatit: og'iz atrofidagi qizil toshma, gormonli kremlar ta'siri, akne va rozatseyadan farqi, \"nol terapiya\". Farg'ona va Qo'qonda dermatolog.",
      keywords:
        "perioral dermatit, og'iz atrofidagi toshma, gormonli krem, yuzdagi toshma, rozatseya, dermatolog Farg'ona, dermatolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Периоральный дерматит: сыпь вокруг рта — лечение',
      desc: 'Периоральный дерматит: красная сыпь вокруг рта, роль гормональных кремов, отличие от акне и розацеа, «нулевая терапия». Дерматолог в Фергане и Коканде.',
      keywords:
        'периоральный дерматит, сыпь вокруг рта, лечение периорального дерматита, гормональный крем, дерматолог Фергана, дерматолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Perioral dermatitis: rash around the mouth',
      desc: 'Perioral dermatitis: a red rash around the mouth, the role of steroid creams, how it differs from acne and rosacea, "zero therapy". Fergana and Kokand.',
      keywords:
        'perioral dermatitis, rash around mouth, perioral dermatitis treatment, steroid cream, dermatologist Fergana, dermatologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-xol-tekshiruvi-dermatoskopiya': {
    uz: {
      title: "Xol tekshiruvi va dermatoskopiya — Farg'ona, Qo'qon",
      desc: "Qaysi xol xavfli: ABCDE qoidasi, dermatoskopiya, xollar xaritasi va gistologiya bilan olib tashlash. Farg'ona va Qo'qonda dermatoonkolog qabuli.",
      keywords:
        "xol tekshiruvi, dermatoskopiya, xol olib tashlash, melanoma belgilari, xollar xaritasi, dermatoonkolog Farg'ona, dermatoonkolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Проверка родинок и дерматоскопия — Фергана, Коканд',
      desc: 'Какая родинка опасна: правило ABCDE, дерматоскопия, картирование родинок и удаление с гистологией. Дерматоонколог в Фергане и Коканде.',
      keywords:
        'проверка родинок, дерматоскопия, удаление родинок, признаки меланомы, картирование родинок, дерматоонколог Фергана, дерматоонколог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Mole check and dermoscopy — Fergana, Kokand',
      desc: 'Which mole is dangerous: the ABCDE rule, dermoscopy, mole mapping and removal with histology. Dermato-oncologists in Fergana and Kokand.',
      keywords:
        'mole check, dermoscopy, mole removal, melanoma signs, mole mapping, dermatologist Fergana, dermatologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-papilloma-olib-tashlash': {
    uz: {
      title: "Papilloma olib tashlash: usullar — Farg'ona, Qo'qon",
      desc: "Papillomalar nimadan paydo bo'ladi, uyda olib tashlash xavfi, CO₂ lazer va radioto'lqin usuli, keyingi parvarish. Farg'ona va Qo'qonda dermatolog.",
      keywords:
        "papilloma olib tashlash, papilloma davolash, so'gal olib tashlash, CO2 lazer, akroxordon, dermatolog Farg'ona, dermatolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Удаление папиллом: методы — Фергана, Коканд',
      desc: 'Почему появляются папилломы, чем опасно удаление дома, удаление CO₂-лазером и радиоволной, уход после процедуры. Дерматолог в Фергане и Коканде.',
      keywords:
        'удаление папиллом, папилломы на коже, удаление папиллом лазером, акрохордоны, удаление бородавок, дерматолог Фергана, дерматолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Papilloma removal: methods — Fergana, Kokand',
      desc: 'Why papillomas appear, why home removal is risky, removal with CO₂ laser and radiowave, and aftercare. Dermatologists in Fergana and Kokand.',
      keywords:
        'papilloma removal, skin tag removal, wart removal, CO2 laser, dermatologist Fergana, dermatologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-melazma': {
    uz: {
      title: "Melazma: sabablari va davolash — Farg'ona, Qo'qon",
      desc: "Melazma — yuzdagi jigarrang dog'lar: quyosh va gormonlar, boshqa dog'lardan farqi, himoya, kremlar va lazer toning. Farg'ona va Qo'qonda kosmetolog.",
      keywords:
        "melazma, melazma davolash, yuzdagi dog'lar, pigment dog'lar, homiladorlik niqobi, lazer toning, kosmetolog Farg'ona, kosmetolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Мелазма: причины и лечение — Фергана, Коканд',
      desc: 'Мелазма — коричневые пятна на лице: солнце и гормоны, отличие от других пятен, защита, кремы и лазерный тонинг. Косметолог в Фергане и Коканде.',
      keywords:
        'мелазма, лечение мелазмы, пигментные пятна на лице, хлоазма, маска беременных, лазерный тонинг, косметолог Фергана, косметолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Melasma: causes and treatment — Fergana, Kokand',
      desc: 'Melasma — brown patches on the face: sun and hormones, other spots, sun protection, creams and laser toning. Cosmetologists in Fergana and Kokand.',
      keywords:
        'melasma, melasma treatment, facial pigmentation, dark spots on face, laser toning, cosmetologist Fergana, cosmetologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-qishda-teri-parvarishi': {
    uz: {
      title: 'Qishda teri parvarishi: quruqlik va yoriqlar',
      desc: "Qishda teri nega quriydi: yuz, qo'l, lab va tana uchun har kungi parvarish, xatolar va qachon dermatologga borish kerak. Farg'ona va Qo'qonda maslahat.",
      keywords:
        "qishda teri parvarishi, quruq teri, qo'llar yorilishi, lab yorilishi, namlovchi krem, kosmetolog Farg'ona, dermatolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Уход за кожей зимой: сухость и трещины',
      desc: 'Почему зимой сохнет кожа: ежедневный уход за лицом, руками, губами и телом, частые ошибки и когда к дерматологу. Консультация в Фергане и Коканде.',
      keywords:
        'уход за кожей зимой, сухая кожа, трещины на руках, сухие губы, увлажняющий крем, косметолог Фергана, дерматолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Winter skin care: dryness and cracks',
      desc: 'Why skin dries in winter: a daily routine for face, hands, lips and body, common mistakes and when to see a dermatologist. Advice in Fergana and Kokand.',
      keywords:
        'winter skin care, dry skin, cracked hands, chapped lips, moisturiser, cosmetologist Fergana, dermatologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-demodekoz': {
    uz: {
      title: "Demodekoz: belgilari va davolash — Farg'ona, Qo'qon",
      desc: "Demodekoz: yuzda qizarish, toshma va qichishish. Demodeks kanasi, akne va rozatseyadan farqi, qirindi tahlili va davolash. Farg'ona va Qo'qonda dermatolog.",
      keywords:
        "demodekoz, demodeks, demodekoz davolash, yuzda qizarish, rozatseya, demodeks tahlili, dermatolog Farg'ona, dermatolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Демодекоз: признаки и лечение — Фергана, Коканд',
      desc: 'Демодекоз: покраснение, высыпания и зуд на лице. Клещ демодекс, отличие от акне и розацеа, соскоб и лечение. Дерматолог в Фергане и Коканде.',
      keywords:
        'демодекоз, демодекс, лечение демодекоза, клещ на лице, анализ на демодекс, розацеа, дерматолог Фергана, дерматолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Demodicosis: signs and treatment — Fergana, Kokand',
      desc: 'Demodicosis: facial redness, spots and itching. The Demodex mite, how it differs from acne and rosacea, testing and treatment in Fergana and Kokand.',
      keywords:
        'demodicosis, demodex, demodex treatment, facial redness, rosacea, dermatologist Fergana, dermatologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-gerpes': {
    uz: {
      title: "Gerpes (lab uchug'i): davolash — Farg'ona, Qo'qon",
      desc: "Gerpes nima uchun qaytadi: bosqichlari, qanday yuqadi, virusga qarshi davolash va qachon zudlik bilan shifokorga borish kerak. Farg'ona va Qo'qonda.",
      keywords:
        "gerpes, lab uchug'i, gerpes davolash, labda pufakcha, belbog'simon temiratki, dermatovenerolog Farg'ona, dermatolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Герпес на губах: лечение — Фергана, Коканд',
      desc: 'Почему возвращается герпес: стадии, как передаётся, противовирусное лечение и когда срочно к врачу. Дерматовенеролог в Фергане и Коканде.',
      keywords:
        'герпес на губах, лечение герпеса, простуда на губах, опоясывающий лишай, частый герпес, дерматовенеролог Фергана, дерматолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Cold sores (herpes): treatment — Fergana, Kokand',
      desc: 'Why cold sores come back: stages, how herpes spreads, antiviral treatment and when to see a doctor urgently. Dermatovenereologists in Fergana and Kokand.',
      keywords:
        'herpes, cold sores, cold sore treatment, shingles, recurrent herpes, dermatologist Fergana, dermatologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-teri-zamburugi': {
    uz: {
      title: "Teri zamburug'i: belgilari va davolash — Farg'ona",
      desc: "Teri zamburug'i: oyoq, tana, chov, rang-barang temiratki va kandidoz. Qirindi tahlili, gormonli krem xatosi va davolash. Farg'ona va Qo'qonda dermatolog.",
      keywords:
        "teri zamburug'i, mikoz, oyoq zamburug'i, temiratki, rang-barang temiratki, zamburug' davolash, dermatolog Farg'ona, dermatolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Грибок кожи: признаки и лечение — Фергана, Коканд',
      desc: 'Грибок кожи: стопы, тело, пах, разноцветный лишай и кандидоз. Соскоб, ошибка с гормональными кремами и лечение. Дерматолог в Фергане и Коканде.',
      keywords:
        'грибок кожи, микоз, грибок стопы, лишай, разноцветный лишай, паховый грибок, дерматолог Фергана, дерматолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Fungal skin infection: treatment — Fergana, Kokand',
      desc: 'Fungal skin infections: feet, body, groin, pityriasis versicolor and candida. Skin scraping, the steroid cream mistake and treatment in Fergana and Kokand.',
      keywords:
        'fungal skin infection, tinea, athletes foot, ringworm, pityriasis versicolor, dermatologist Fergana, dermatologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-ekzema': {
    uz: {
      title: "Ekzema: sabablari va davolash — Farg'ona, Qo'qon",
      desc: "Ekzema: qizarish, pufakchalar, namlanish va qichishish. Turlari, sabablari, davolash va qishda qo'l parvarishi. Farg'ona va Qo'qonda dermatolog qabuli.",
      keywords:
        "ekzema, ekzema davolash, qo'l ekzemasi, dishidrotik ekzema, mikrobli ekzema, teri qichishi, dermatolog Farg'ona, dermatolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Экзема: причины и лечение — Фергана, Коканд',
      desc: 'Экзема: покраснение, мокнутие, пузырьки и зуд. Виды экземы, причины, лечение и уход за руками зимой. Дерматолог Radeski Skin Clinic в Фергане и Коканде.',
      keywords:
        'экзема, лечение экземы, экзема на руках, дисгидротическая экзема, микробная экзема, мокнущая экзема, дерматолог Фергана, дерматолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Eczema: causes and treatment — Fergana, Kokand',
      desc: 'Eczema: redness, weeping blisters and itching. Types, causes, treatment and winter hand care. Dermatologists at Radeski Skin Clinic in Fergana and Kokand.',
      keywords:
        'eczema, eczema treatment, hand eczema, dyshidrotic eczema, discoid eczema, dermatologist Fergana, dermatologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-teri-qichishi': {
    uz: {
      title: 'Teri va badan qichishi sabablari: qachon xavfli',
      desc: "Teri va badan nima uchun qichiydi: quruqlik, ekzema, eshakemi, qo'tir, zamburug' va ichki kasalliklar. Xavfli belgilar, tekshiruv va davolash yo'llari.",
      keywords:
        "teri qichishi, tana qichishi sabablari, kechasi qichishish, quruq teri, qo'tir, dermatolog Farg'ona, dermatolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Зуд кожи: причины и лечение — Фергана, Коканд',
      desc: 'Почему чешется кожа: сухость, экзема, крапивница, чесотка, грибок и внутренние причины. Тревожные признаки и обследование у дерматолога в Фергане и Коканде.',
      keywords:
        'зуд кожи, чешется кожа, зуд тела причины, зуд без сыпи, зуд ночью, сухая кожа, дерматолог Фергана, дерматолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Itchy skin: causes and treatment — Fergana, Kokand',
      desc: 'Why skin itches: dryness, eczema, hives, scabies, fungus and internal causes. Warning signs and a dermatologist check-up in Fergana and Kokand.',
      keywords:
        'itchy skin, itching causes, itching without rash, itching at night, dry skin, dermatologist Fergana, dermatologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-eshakemi-teri-allergiyasi': {
    uz: {
      title: 'Eshakemi va teri allergiyasi: belgilari va davolash',
      desc: "Eshakemi va teri allergiyasi: qichiydigan pufaklar, qizarish va shish. Sabablari, qachon tez yordam kerak va davolash. Farg'ona va Qo'qonda dermatolog qabuli.",
      keywords:
        "eshakemi, teri allergiyasi, krapivnitsa davolash, allergik toshma, Kvinke shishi, kontakt dermatit, dermatolog Farg'ona, dermatolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Крапивница и аллергия на коже: симптомы и лечение',
      desc: 'Крапивница и аллергия на коже: волдыри, зуд и отёки. Причины, острая и хроническая крапивница, когда вызывать скорую и лечение. Дерматолог в Фергане и Коканде.',
      keywords:
        'крапивница, аллергия на коже, лечение крапивницы, хроническая крапивница, отёк Квинке, аллергическая сыпь, дерматолог Фергана, дерматолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Hives and skin allergy: symptoms and treatment',
      desc: 'Hives and skin allergy: itchy welts, redness and swelling. Causes, acute and chronic hives, when to call an ambulance and treatment in Fergana and Kokand.',
      keywords:
        'hives, urticaria, skin allergy, chronic hives treatment, angioedema, allergic rash, dermatologist Fergana, dermatologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-tirnoq-zamburugi': {
    uz: {
      title: "Tirnoq zamburug'i: belgilari va davolash — Farg'ona, Qo'qon",
      desc: "Tirnoq zamburug'i (onixomikoz): sarg'ayish, qalinlashish va uvalanish. Tahlil, podologik ishlov va davolash muddati. Farg'ona va Qo'qonda podolog.",
      keywords:
        "tirnoq zamburug'i, tirnoq zamburug'ini davolash, onixomikoz, oyoq tirnog'i zamburug'i, podolog Farg'ona, podolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Грибок ногтей: признаки и лечение — Фергана, Коканд',
      desc: 'Грибок ногтей (онихомикоз): пожелтение, утолщение и ломкость. Анализ, подологическая обработка и сроки лечения. Подолог в Фергане и Коканде.',
      keywords:
        'грибок ногтей, лечение грибка ногтей, онихомикоз, грибок ногтей на ногах, подолог Фергана, подолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Nail fungus: signs and treatment — Fergana, Kokand',
      desc: 'Nail fungus (onychomycosis): yellow, thick, crumbling nails. Lab test, podiatric nail care and treatment time. Podiatrists in Fergana and Kokand.',
      keywords:
        'nail fungus, nail fungus treatment, onychomycosis, toenail fungus, podiatrist Fergana, podiatrist Kokand, Radeski Skin Clinic',
    },
  },
  'art-seboreyali-dermatit': {
    uz: {
      title: 'Seboreyali dermatit: sabablari va davolash',
      desc: "Seboreyali dermatit: kepak, yuz va qoshdagi qizarish — sabablari, psoriazdan farqi va davolash. Farg'ona va Qo'qonda dermatolog qabuli.",
      keywords:
        "seboreyali dermatit, seboreya davolash, kepak davolash, bosh terisi qichishi, yuzda qizarish va po'st, dermatolog Farg'ona, dermatolog Qo'qon, Radeski Skin Clinic",
    },
    ru: {
      title: 'Себорейный дерматит: причины и лечение',
      desc: 'Себорейный дерматит: перхоть, покраснение на лице и бровях. Причины, отличие от псориаза, лечение и уход. Дерматолог Radeski Skin Clinic в Фергане и Коканде.',
      keywords:
        'себорейный дерматит, лечение себорейного дерматита, себорея, перхоть лечение, себорейный дерматит на лице, дерматолог Фергана, дерматолог Коканд, Radeski Skin Clinic',
    },
    en: {
      title: 'Seborrheic dermatitis: causes and treatment',
      desc: 'Seborrheic dermatitis: dandruff, redness on the face and brows. Causes, how it differs from psoriasis, treatment and care. Dermatologists in Fergana and Kokand.',
      keywords:
        'seborrheic dermatitis, seborrheic dermatitis treatment, dandruff treatment, scalp itching, dermatologist Fergana, dermatologist Kokand, Radeski Skin Clinic',
    },
  },
  'art-akne-u-vzroslykh': {
    uz: {
      title: 'Kattalarda akne: qachon dermatologga borish kerak',
      desc: "Kattalarda akne nima uchun chiqadi, qanday davolanadi va qachon dermatologga borish kerak. Farg'ona va Qo'qonda Radeski Skin Clinic dermatologi qabuli.",
      keywords:
        "kattalarda akne, akne sabablari, akne davolash Farg'ona, akne davolash Qo'qon, dermatolog Farg'ona, dermatolog Qo'qon, husnbuzar davolash, postakne, Radeski Skin Clinic",
    },
    ru: {
      title: 'Акне у взрослых: когда идти к дерматологу',
      desc: 'Почему появляется акне у взрослых, как его лечат и когда пора к дерматологу. Приём дерматолога в Radeski Skin Clinic в Фергане и Коканде.',
      keywords:
        'акне у взрослых, причины акне, лечение акне Фергана, лечение акне Коканд, дерматолог Фергана, дерматолог Коканд, прыщи у взрослых, постакне, Radeski Skin Clinic',
    },
    en: {
      title: 'Adult acne: when to see a dermatologist',
      desc: 'Why acne appears in adults, how it is treated and when to see a dermatologist. Dermatology visits at Radeski Skin Clinic in Fergana and Kokand.',
      keywords:
        'adult acne, acne causes, acne treatment Fergana, acne treatment Kokand, dermatologist Fergana, dermatologist Kokand, post-acne, Radeski Skin Clinic',
    },
  },
  'art-lasemd-ultra-kokand': {
    uz: {
      title: "Qo'qonda LaseMD Ultra tuliy lazer — Radeski Skin Clinic",
      desc: "Qo'qonda LaseMD Ultra 1927 nm tuliy lazer: pigmentatsiya, postakne, keng porlar va teri yoshartirish. Ko'rsatmalar, qarshi ko'rsatmalar va tiklanish.",
      keywords:
        "tuliy lazer Qo'qon, LaseMD Ultra Qo'qon, LaseMD Ultra 1927 nm, pigmentatsiya davolash Qo'qon, lazer yoshartirish Qo'qon, postakne lazer Qo'qon, Radeski Skin Clinic Qo'qon",
    },
    ru: {
      title: 'Тулиевый лазер LaseMD Ultra в Коканде — Radeski Skin Clinic',
      desc: 'Тулиевый лазер LaseMD Ultra 1927 нм в Коканде: лечение пигментации, постакне, расширенных пор и омоложение кожи. Показания, противопоказания и восстановление.',
      keywords:
        'тулиевый лазер Коканд, LaseMD Ultra Коканд, LaseMD Ultra 1927 нм, лечение пигментации Коканд, лазерное омоложение Коканд, лазер от постакне Коканд, тулиевый лазер 1927 нм, Radeski Skin Clinic Коканд',
    },
    en: {
      title: 'LaseMD Ultra Thulium Laser in Kokand — Radeski Skin Clinic',
      desc: 'LaseMD Ultra 1927 nm thulium laser in Kokand: pigmentation, post-acne, enlarged pores, and skin rejuvenation. Indications, contraindications, and recovery.',
      keywords:
        'thulium laser Kokand, LaseMD Ultra Kokand, LaseMD Ultra 1927 nm, pigmentation treatment Kokand, laser rejuvenation Kokand, post-acne laser Kokand, Radeski Skin Clinic Kokand',
    },
  },
  'art-thulium-laser-hair-kokand': {
    uz: {
      title: "Qo'qonda soch uchun tuliy lazer | Soch to'kilishini davolash — Radeski Skin Clinic",
      desc: "Qo'qonda soch uchun tuliy lazer. Soch to'kilishi va inchelashni kompleks davolashda zamonaviy usul. Radeski Skin Clinic — mutaxassis konsultatsiyasi.",
      keywords:
        "tuliy lazer Qo'qon, soch uchun tuliy lazer Qo'qon, soch to'kilishi davolash Qo'qon, trixolog Qo'qon, alopeciya davolash Qo'qon, soch tiklash Qo'qon, soch o'sishi Qo'qon, lazer soch davolash Qo'qon",
    },
    ru: {
      title: 'Тулиевый лазер для волос в Коканде | Лечение выпадения волос — Radeski Skin Clinic',
      desc: 'Тулиевый лазер для волос в Коканде. Современный метод в комплексном лечении выпадения и истончения волос в Radeski Skin Clinic. Консультация специалиста.',
      keywords:
        'тулиевый лазер Коканд, тулиевый лазер для волос Коканд, лечение выпадения волос Коканд, трихолог Коканд, лечение алопеции Коканд, восстановление волос Коканд, рост волос Коканд, лазерное лечение волос Коканд',
    },
    en: {
      title: 'Thulium Laser for Hair in Kokand | Hair Loss Treatment — Radeski Skin Clinic',
      desc: 'Thulium laser for hair in Kokand. A modern method in comprehensive treatment of hair loss and thinning at Radeski Skin Clinic. Specialist consultation.',
      keywords:
        'thulium laser Kokand, thulium laser for hair Kokand, hair loss treatment Kokand, trichologist Kokand, alopecia treatment Kokand, hair restoration Kokand, hair growth Kokand, laser hair treatment Kokand',
    },
  },
  'art-soch-tokilishi-normal-patologiya-radeski': {
    uz: {
      title: 'Normal soch to\'kilishi va patologik to\'kilishni farqlash | Radeski Skin Clinic',
      desc: 'Kuniga 50–100 soch normalmi? Patologik to\'kilish belgilari, telogen alopetsiya sabablari, qachon trixolog va trixoskopiya kerak — Radeski Skin Clinic.',
      keywords:
        'soch to\'kilishi, kuchli soch to\'kilishi, soch to\'kilishi sabablari, normal soch to\'kilishi, patologik soch to\'kilishi, alopetsiya, telogen to\'kilish, trixolog, trixoskopiya, ayollarda soch to\'kilishi, Radeski Skin Clinic',
    },
    ru: {
      title: 'Как отличить нормальное выпадение волос от патологического | Radeski Skin Clinic',
      desc: 'Как понять, является ли выпадение волос нормой? Признаки патологического выпадения, причины алопеции, телогеновое выпадение и когда нужны трихолог и трихоскопия.',
      keywords:
        'выпадение волос, сильное выпадение волос, причины выпадения волос, почему выпадают волосы, норма выпадения волос в день, патологическое выпадение волос, алопеция, телогеновое выпадение волос, трихолог, трихоскопия, диагностика выпадения волос, лечение выпадения волос, выпадение волос у женщин, выпадение волос у мужчин, Radeski Skin Clinic',
    },
    en: {
      title: 'Normal vs Pathological Hair Loss: How to Tell | Radeski Skin Clinic',
      desc: 'Is daily hair shedding normal? Signs of pathological hair loss, telogen effluvium, alopecia causes, and when to see a trichologist for trichoscopy at Radeski Skin Clinic.',
      keywords:
        'hair loss, excessive hair shedding, causes of hair loss, normal daily hair shedding, pathological hair loss, alopecia, telogen effluvium, trichologist, trichoscopy, hair loss diagnosis, hair loss treatment, hair loss in women, hair loss in men, Radeski Skin Clinic',
    },
  },
  'art-onixokriptoz-klinik-holat': {
    uz: {
      title: "O'sib ketgan tirnoq (onixokriptoz): klinik holat — Radeski Qo'qon",
      desc: "Haqiqiy klinik holat: o'sib ketgan tirnoq davolash jarayoni kelishidan 6 oylik natijagacha. Titan sim korreksiyasi, do va keyin rasmlar. Karimova Iroda, Radeski Skin Clinic Qo'qon.",
      keywords:
        "o'sib ketgan tirnoq Qo'qon, onixokriptoz davolash, podolog Qo'qon, titan sim tirnoq, tirnoq patologiyasi, Radeski Skin Clinic Qo'qon, klinik holat do keyin",
    },
    ru: {
      title: 'Вросший ноготь (онихокриптоз): клинический случай — Radeski Коканд',
      desc: 'Реальный клинический случай: лечение вросшего ногтя от обращения до результата через 6 месяцев. Коррекция титановой нитью, фото до и после. Каримова Ирода, Radeski Skin Clinic Коканд.',
      keywords:
        'вросший ноготь Коканд, лечение онихокриптоза, подолог Коканд, титановая нить, патология ногтей, Radeski Skin Clinic Коканд, до и после',
    },
    en: {
      title: 'Ingrown Toenail (Onychocryptosis): Clinical Case — Radeski Kokand',
      desc: 'Real clinical case: ingrown toenail treatment from first visit to 6-month outcome. Titanium wire correction, before and after photos. Iroda Karimova, Radeski Skin Clinic Kokand.',
      keywords:
        'ingrown toenail Kokand, onychocryptosis treatment, podiatrist Kokand, titanium wire brace, nail pathology, Radeski Skin Clinic Kokand, before and after',
    },
  },
};

export function resolveArticleSeo(
  routeKey: string | undefined,
  article: { title: Record<Locale, string>; summary: Record<Locale, string> } | null,
  locale: Locale,
  richTags: string[],
): { title: string; desc: string; keywords: string } {
  const override = routeKey ? ARTICLE_SEO_OVERRIDES[routeKey]?.[locale] : undefined;
  const shortTitle = routeKey ? ARTICLE_SEO_TITLES[routeKey]?.[locale] : undefined;
  const fittedShortTitle = shortTitle
    ? fitTitle([`${shortTitle} | Radeski Skin Clinic`, `${shortTitle} | Radeski`, shortTitle])
    : undefined;
  if (override) {
    return {
      title: fittedShortTitle ?? override.title,
      desc: override.desc,
      keywords: override.keywords ?? richTags.join(', '),
    };
  }
  if (article) {
    return {
      title: fittedShortTitle ?? buildArticleSeoTitle(article.title[locale], locale),
      desc: article.summary[locale],
      keywords: richTags.join(', '),
    };
  }
  return { title: '', desc: '', keywords: '' };
}

/** Visible service heading: "Lazer epilyatsiyasi Farg'ona va Qo'qonda" (no "|" in an H1). */
/**
 * Keywords for a single page (doctor, service, condition, video): the page's own name, the
 * name with each city, and any extra terms — instead of the generic list of its section.
 */
export function buildEntityKeywords(
  name: string,
  locale: Locale,
  extra: string[] = [],
  cityIds: ('fergana' | 'kokand')[] = ['fergana', 'kokand'],
): string {
  const cityName = { fergana: { uz: "Farg'ona", ru: 'Фергана', en: 'Fergana' }, kokand: { uz: "Qo'qon", ru: 'Коканд', en: 'Kokand' } };
  const withCities = cityIds.map((city) => `${name} ${cityName[city][locale]}`);
  const terms = [name, ...withCities, ...extra, 'Radeski Skin Clinic']
    .map((term) => term.trim())
    .filter(Boolean);
  return [...new Set(terms)].join(', ');
}

export function buildServiceH1(name: string, locale: Locale): string {
  if (locale === 'uz') return `${name} Farg'ona va Qo'qonda`;
  if (locale === 'ru') return `${name} в Фергане и Коканде`;
  return `${name} in Fergana and Kokand`;
}

/** Tab-level SEO. Each locale uses its own search keywords. */
export const TAB_SEO: Record<Locale, Partial<Record<PageId, PageMeta>>> = {
  uz: {
    home: {
      title: "Dermatolog Farg'ona va Qo'qon — Radeski Skin Clinic",
      desc: "Radeski Skin Clinic — teri, soch va tirnoqlar bo'yicha tibbiy yordam hamda zamonaviy estetik korreksiya. Dermatologiya, trixologiya, podologiya, IPL, lazer va inyeksiyalar. Tel: +998 73 200-73-73.",
      keywords:
        "Radeski Skin Clinic, teri klinikasi, soch va tirnoq, tibbiy klinika, estetik korreksiya, dermatologiya, trixologiya, podologiya",
    },
    about: {
      title: "Klinika haqida — Radeski Skin Clinic, Farg'ona",
      desc: "Radeski Skin Clinic tarixi, litsenziyalar va akkreditatsiya. Farg'ona va Qo'qonda zamonaviy dermatologiya, kosmetologiya va dermato-onkologiya.",
      keywords: "Radeski klinika, dermatologiya Farg'ona, dermatologiya Qo'qon, litsenziya, akkreditatsiya, Ashurov Dilshod",
    },
    services: {
      title: "Dermatologiya va kosmetologiya xizmatlari — Radeski",
      desc: "12 yo'nalish: dermatologiya, apparatli kosmetologiya, IPL, lazer epilyatsiya, trixologiya, inyeksiyalar, Mohs jarrohligi. Farg'ona va Qo'qon.",
      keywords:
        "dermatologiya xizmatlari Farg'ona, kosmetologiya Qo'qon, IPL Farg'ona, lazer epilyatsiya Qo'qon, trixologiya, botoks, fototerapiya",
    },
    doctors: {
      title: "Dermatolog shifokorlar Farg'ona, Qo'qon — Radeski",
      desc: "Radeski shifokorlari: dermatovenerolog, dermatoonkolog, kosmetolog va lazer mutaxassislari. Ashurov Dilshod Davlatovich jamoasi — Farg'ona va Qo'qon.",
      keywords: "dermatolog Farg'ona, dermatolog Qo'qon, Radeski shifokorlari, Ashurov Dilshod, kosmetolog Farg'ona, trixolog",
    },
    prices: {
      title: "Dermatologiya va kosmetologiya narxlari — Radeski",
      desc: "Radeski preyskuranti: konsultatsiya, IPL, lazer epilyatsiya, botoks va boshqa muolajalar narxlari Farg'ona va Qo'qonda.",
      keywords: "dermatolog narxi Farg'ona, dermatolog narxi Qo'qon, IPL narxi, botoks narxi, kosmetologiya narxlari, preyskurant",
    },
    articles: {
      title: "Teri, soch va tirnoq haqida maqolalar — Radeski",
      desc: "Dermatologiya blogi: akne, psoriaz, vitiligo, IPL, lazer epilyatsiya va soch muammolari — Farg'ona va Qo'qon bemorlari uchun.",
      keywords: "dermatologiya maqolalar, akne davolash, psoriaz, vitiligo, IPL terapiya, Farg'ona, Qo'qon",
    },
    videos: {
      title: "Muolajalar videolari — Radeski Skin Clinic",
      desc: "Radeski klinikasi videolari: IPL, fototerapiya, lazer va boshqa dermatologiya xizmatlari — Farg'ona | Qo'qon.",
      keywords: "Radeski video, dermatologiya video, IPL, klinika Farg'ona, klinika Qo'qon",
    },
    branches: {
      title: "Filiallar: Farg'ona, Qo'qon, Belgiya — Radeski",
      desc: "Radeski filiallari: Farg'ona, Qo'qon va Rade Skin Clinic (Liège). Manzil, telefon va ish vaqti. Qo'qon: dermatolog, IPL, lazer.",
      keywords: "Radeski filial, dermatolog Farg'ona, dermatolog Qo'qon, klinika manzili, Rade Skin Clinic",
    },
    qoqon: {
      title: "Dermatolog Qo'qon — Radeski Skin Clinic",
      desc: "Qo'qonda Radeski Skin Clinic: dermatologiya, kosmetologiya, IPL, lazer epilyatsiya, fototerapiya. Manzil: 47-MFI, Huqandiy 144A. Tel: +998 95 210 73 73.",
      keywords:
        "dermatolog Qo'qon, dermatologiya Qo'qon, kosmetologiya Qo'qon, IPL Qo'qon, lazer epilyatsiya Qo'qon, Radeski Qo'qon, akne Qo'qon",
    },
    fargona: {
      title: "Farg'ona dermatologiya markazi — Radeski Skin Clinic",
      desc: "Farg'onadagi teri kasalliklari klinikasi Radeski: dermatolog, trixolog, podolog, IPL va lazer. Manzil: O'zbekiston Ovozi 1A. Tel: +998 73 200-73-73.",
      keywords:
        "dermatolog Farg'ona, trixolog Farg'ona, podolog Farg'ona, IPL Farg'ona, lazer epilyatsiya Farg'ona, Radeski Farg'ona, akne Farg'ona",
    },
    results: {
      title: "Natijalar — oldin va keyin | Radeski Farg'ona | Qo'qon",
      desc: "Akne, pigmentatsiya, IPL va trixologiya davolash natijalari — Radeski klinikasi galereyasi (Farg'ona | Qo'qon).",
      keywords: "davolash natijalari, oldin keyin, akne, IPL natija, Farg'ona, Qo'qon",
    },
    technologies: {
      title: "IPL, Mohs, Excimer texnologiyalari — Radeski",
      desc: "Sciton IPL, Mohs mikrografik jarrohligi, Excimer va UVB fototerapiya — Radeski Skin Clinic Farg'ona va Qo'qon.",
      keywords: "IPL Farg'ona, IPL Qo'qon, Mohs, Excimer, UVB fototerapiya, zamonaviy dermatologiya",
    },
    'daavlin-foto-kabinalari': {
      title: "Daavlin fototerapiya markazi — Radeski Farg'ona",
      desc: "Narrowband UVB (311–313 nm) fototerapiya Daavlin kabinalarida: psoriaz, vitiligo, ekzema va boshqa surunkali teri kasalliklari. O‘zbekiston Milliy Fototerapiya Markazi — Radeski Skin Clinic.",
      keywords: "Milliy Fototerapiya Markazi, Daavlin, NB-UVB, fototerapiya, psoriaz, vitiligo, ekzema, Farg'ona, Qo'qon",
    },
    dermoscan: {
      title: "DermaScan — AI dermatologiya | Radeski",
      desc: "DermaScan mobil ilovasi: teri holatini raqamli kuzatish, AI tahlili va shifokor bilan uzluksiz hamkorlik. Radeski Skin Clinic raqamli ekotizimi.",
      keywords: "DermaScan, AI dermatologiya, teri kuzatuvi, sun'iy intellekt, raqamli dermatologiya, Radeski",
    },
    science: {
      title: "Ilm-fan va tadqiqotlar — Radeski Skin Clinic",
      desc: "Radeski Skin Clinic da ilm-fan: klinik amaliyot, tadqiqot, nashrlar, yosh shifokorlarni tayyorlash va xalqaro hamkorlik. Farg'ona | Qo'qon.",
      keywords: "ilm-fan, dermatologiya tadqiqoti, klinik protokollar, yosh shifokorlar, Radeski, Farg'ona, Qo'qon",
    },
    obrazovaniya: {
      title: "Dermatologiya bo'yicha ta'lim — Radeski",
      desc: "Sertifikatsiya kurslari, ordinatura, malaka oshirish, master-klasslar, amaliy treninglar, soch transplantatsiyasi va lazer texnologiyalari. Teri, soch va tirnoq bo'yicha zamonaviy estetik korrektsiya. Farg'ona | Qo'qon.",
      keywords: "ta'lim, sertifikatsiya kurslari, ordinatura, malaka oshirish, master-klass, amaliy trening, soch transplantatsiyasi o'qitish, lazer texnologiyalari, dermatologiya o'qitish, estetik tibbiyot, Radeski, Farg'ona, Qo'qon",
    },
    'malaka-oshirish': {
      title: "Malaka oshirish kurslari — Radeski Skin Clinic",
      desc: "Dermatologiya va kosmetologiya bo'yicha malaka oshirish: sertifikatsiya, master-klass, lazer treningi, amaliyot va xalqaro dasturlar. Farg'ona | Qo'qon.",
      keywords: "malaka oshirish, sertifikatsiya kursi, master-klass, lazer trening, dermatologiya o'qitish, Radeski, Farg'ona",
    },
    'tele-dermatology': {
      title: "TeleDermatologiya | Radeski Skin Clinic",
      desc: "Masofaviy dermatolog maslahati, onlayn teri kuzatuvi va raqamli hamkorlik. Radeski Skin Clinic — Farg'ona | Qo'qon.",
      keywords: "teledermatolog, masofaviy dermatolog, onlayn dermatolog maslahati, Radeski, Farg'ona",
    },
    'skin-pathology-center': {
      title: "Teri patologiyasi milliy markazi | Radeski Skin Clinic",
      desc: "Gistologik va morfologik tashxis, ilmiy-tadqiqot va teri patologiyasi bo'yicha standartlar. Radeski — Farg'ona | Qo'qon.",
      keywords: "teri patologiyasi, gistologiya, morfologik tashxis, milliy markaz, Radeski, Farg'ona",
    },
    brend: {
      title: "Radeski klinik brendi | Missiya, falsafa, ekotizim",
      desc: "Radeski Skin Clinic brendi: professional tibbiyot, texnologiya, ilm-fan va ochiqlik. Dermatologiya ekotizimi Farg'ona va Qo'qonda.",
      keywords: "Radeski brend, klinik brend, dermatologiya ekotizimi, missiya, Farg'ona, Qo'qon",
    },
    terms: {
      title: "Foydalanish shartlari | Radeski Skin Clinic",
      desc: "Radeski.uz saytidan foydalanish qoidalari va foydalanuvchi shartlari.",
      keywords: "Foydalanish shartlari, Radeski, veb-sayt qoidalari",
    },
    privacy: {
      title: "Maxfiylik siyosati | Radeski Skin Clinic",
      desc: "Shaxsiy ma'lumotlarni qanday to'plash va himoya qilishimiz haqida Radeski maxfiylik siyosati.",
      keywords: "Maxfiylik siyosati, shaxsiy ma'lumotlar, Radeski",
    },
  },
  ru: {
    home: {
      title: "Дерматолог в Фергане и Коканде — Radeski Skin Clinic",
      desc: "Radeski Skin Clinic — медицинская клиника кожи, волос и ногтей с современной эстетической коррекцией. Дерматология, трихология, подология, IPL, лазер и инъекции. Тел: +998 73 200-73-73.",
      keywords:
        "Radeski Skin Clinic, медицинская клиника кожи, волос и ногтей, эстетическая коррекция, дерматология, трихология, подология",
    },
    about: {
      title: "О клинике — Radeski Skin Clinic, Фергана",
      desc: "История, лицензии и аккредитация Radeski Skin Clinic. Современная дерматология и косметология в Фергане и Коканде.",
      keywords: "клиника Radeski, дерматолог Фергана, дерматолог Коканд, лицензия, аккредитация, Ашуров Дильшод",
    },
    services: {
      title: "Услуги дерматолога и косметолога в Фергане — Radeski",
      desc: "12 направлений: дерматология, аппаратная косметология, IPL, лазерная эпиляция, трихология, инъекции, хирургия Mohs — Фергана и Коканд.",
      keywords:
        "услуги дерматолога Фергана, косметология Коканд, IPL Фергана, лазерная эпиляция Коканд, трихология, ботокс, фототерапия",
    },
    doctors: {
      title: "Дерматолог Фергана | Коканд — врачи клиники | Radeski",
      desc: "Врачи Radeski: дерматовенерологи, дерматоонкологи, косметологи и лазерные специалисты — Фергана и Коканд.",
      keywords: "дерматолог Фергана, дерматолог Коканд, врачи Radeski, Ашуров Дильшод, косметолог Фергана, трихолог",
    },
    prices: {
      title: "Цены на дерматологию и косметологию — Radeski",
      desc: "Прейскурант Radeski: консультации, IPL, лазерная эпиляция, ботокс и другие процедуры в Фергане и Коканде.",
      keywords: "цена дерматолога Фергана, цена дерматолога Коканд, цена IPL, ботокс цена, прейскурант косметологии",
    },
    articles: {
      title: "Статьи — кожа, акне, псориаз | Radeski Фергана | Коканд",
      desc: "Блог дерматологии: акне, псориаз, витилиго, IPL, лазерная эпиляция и лечение волос — для пациентов Ферганы и Коканда.",
      keywords: "статьи дерматология, лечение акне, псориаз, витилиго, IPL терапия, Фергана, Коканд",
    },
    videos: {
      title: "Видео — процедуры и клиника | Radeski Фергана | Коканд",
      desc: "Видеоматериалы клиники Radeski: IPL, фототерапия, лазер и другие услуги — Фергана | Коканд.",
      keywords: "видео Radeski, дерматология видео, IPL, клиника Фергана, клиника Коканд",
    },
    branches: {
      title: "Филиалы — Фергана | Коканд | Бельгия | Radeski",
      desc: "Филиалы Radeski в Фергане, Коканде и Rade Skin Clinic в Льеже (Бельгия). Дерматолог и косметология в Коканде.",
      keywords: "филиал Radeski, дерматолог Фергана, дерматолог Коканд, адрес клиники",
    },
    qoqon: {
      title: 'Дерматолог в Коканде — Radeski Skin Clinic',
      desc: 'Клиника Radeski в Коканде: дерматология, косметология, IPL, лазерная эпиляция, фототерапия. Адрес: 47-МФЙ, Хукандий 144А. Тел: +998 95 210 73 73.',
      keywords:
        'дерматолог Коканд, дерматология Коканд, косметология Коканд, IPL Коканд, лазерная эпиляция Коканд, Radeski Коканд, акне Коканд',
    },
    fargona: {
      title: 'Клиника дерматологии в Фергане — Radeski Skin Clinic',
      desc: 'Главная клиника Radeski в Фергане: дерматология, трихология, подология, IPL, лазер, дерматоскопия. Адрес: ул. Узбекистон Овози 1А. Тел: +998 73 200-73-73.',
      keywords:
        'дерматолог Фергана, трихолог Фергана, подолог Фергана, IPL Фергана, лазерная эпиляция Фергана, Radeski Фергана, акне Фергана',
    },
    results: {
      title: "Результаты — до и после | Radeski Фергана | Коканд",
      desc: "Галерея результатов лечения акне, пигментации, IPL и трихологии в клинике Radeski (Фергана | Коканд).",
      keywords: "результаты лечения, до и после, акне, IPL результат, Фергана, Коканд",
    },
    technologies: {
      title: "Технологии — IPL, Mohs, Excimer | Radeski Фергана | Коканд",
      desc: "Sciton IPL, хирургия Mohs, эксимерный лазер и UVB-фототерапия в клинике Radeski — Фергана и Коканд.",
      keywords: "IPL Фергана, IPL Коканд, Mohs, Excimer, UVB фототерапия, современная дерматология",
    },
    'daavlin-foto-kabinalari': {
      title: "Центр фототерапии Daavlin — Radeski Фергана",
      desc: "Узкополосная UVB (311–313 нм) фототерапия в кабинах Daavlin: псориаз, витилиго, экзема и другие хронические заболевания кожи. Национальный центр фототерапии Узбекистана — Radeski Skin Clinic.",
      keywords: "Национальный центр фототерапии, Daavlin, NB-UVB, фототерапия, псориаз, витилиго, экзема, Фергана, Коканд",
    },
    dermoscan: {
      title: "DermaScan — AI-SUPPORTED DERMATOLOGY | Radeski Skin Clinic",
      desc: "Мобильное приложение DermaScan: цифровое наблюдение за кожей, AI-анализ и непрерывное взаимодействие врача и пациента. Цифровая экосистема Radeski.",
      keywords: "DermaScan, AI дерматология, наблюдение за кожей, искусственный интеллект, цифровая дерматология, Radeski",
    },
    science: {
      title: "Наука и исследования — Radeski Skin Clinic",
      desc: "Наука в Radeski Skin Clinic: клиническая практика, исследования, публикации, подготовка молодых врачей и международное сотрудничество. Фергана | Коканд.",
      keywords: "наука, исследования в дерматологии, клинические протоколы, молодые врачи, Radeski, Фергана, Коканд",
    },
    obrazovaniya: {
      title: "Образование | Radeski Skin Clinic — кожа, волосы и ногти",
      desc: "Сертификационные курсы, ординатура, повышение квалификации, мастер-классы, практические тренинги, обучение пересадке волос и лазерным технологиям. Современная эстетическая коррекция. Фергана | Коканд.",
      keywords: "образование, сертификационные курсы, ординатура, повышение квалификации, мастер-классы, практические тренинги, пересадка волос обучение, лазерные технологии, обучение дерматологии, эстетическая медицина, Radeski, Фергана, Коканд",
    },
    'malaka-oshirish': {
      title: "Повышение квалификации — Radeski Skin Clinic",
      desc: "Повышение квалификации в дерматологии и косметологии: сертификация, мастер-классы, лазерные тренинги, практика и международные программы. Фергана | Коканд.",
      keywords: "повышение квалификации, сертификационные курсы, мастер-классы, лазерное обучение, Radeski, Фергана",
    },
    'tele-dermatology': {
      title: "Теледерматология | Radeski Skin Clinic",
      desc: "Дистанционная консультация, онлайн-сопровождение и цифровое взаимодействие с пациентами. Radeski — Фергана | Коканд.",
      keywords: "teledermatolog, онлайн дерматолог, дистанционная консультация, Radeski, Фергана",
    },
    'skin-pathology-center': {
      title: "Национальный центр патологии кожи | Radeski Skin Clinic",
      desc: "Гистологическая и морфологическая диагностика, научные исследования и стандарты в патологии кожи. Radeski — Фергана | Коканд.",
      keywords: "патология кожи, гистология, морфологическая диагностика, национальный центр, Radeski, Фергана",
    },
    brend: {
      title: "Бренд Radeski Skin Clinic | Миссия, философия, экосистема",
      desc: "Бренд Radeski Skin Clinic: профессиональная медицина, технологии, наука и доступность. Дерматологическая экосистема в Фергане и Коканде.",
      keywords: "бренд Radeski, клинический бренд, экосистема дерматологии, миссия, Фергана, Коканд",
    },
    terms: {
      title: "Пользовательское соглашение | Radeski Skin Clinic",
      desc: "Правила использования сайта Radeski.uz: онлайн-запись к врачу, отзывы, материалы сайта и ответственность сторон. Radeski Skin Clinic — Фергана и Коканд.",
      keywords: "пользовательское соглашение, Radeski, правила сайта",
    },
    privacy: {
      title: "Политика конфиденциальности | Radeski Skin Clinic",
      desc: "Как клиника Radeski собирает, хранит и защищает персональные данные пациентов при онлайн-записи, отзывах и обращениях через сайт.",
      keywords: "политика конфиденциальности, персональные данные, Radeski",
    },
  },
  en: {
    home: {
      title: "Radeski Skin Clinic — Dermatologist in Fergana & Kokand",
      desc: "Skin clinic in Fergana and Kokand: dermatologists, trichologist, podiatrist, IPL, laser and injectables. Book online or call +998 73 200-73-73.",
      keywords:
        "Radeski Skin Clinic, medical skin clinic, hair and nails, aesthetic correction, dermatology, trichology, podology",
    },
    about: {
      title: "About the clinic — Radeski Skin Clinic, Fergana",
      desc: "History, licensing and accreditation of Radeski Skin Clinic in Fergana and Kokand.",
      keywords: "Radeski clinic, dermatologist Fergana, dermatologist Kokand, license, accreditation, Dilshod Ashurov",
    },
    services: {
      title: "Dermatology & cosmetology services — Radeski",
      desc: "12 specialties: dermatology, device cosmetology, IPL, laser hair removal, trichology, injectables and Mohs surgery — Fergana and Kokand.",
      keywords:
        "dermatology services Fergana, cosmetology Kokand, IPL Fergana, laser hair removal Kokand, trichology, Botox, phototherapy",
    },
    doctors: {
      title: "Dermatologists in Fergana & Kokand — Radeski",
      desc: "Radeski physicians: dermatologists, dermato-oncologists, cosmetologists and laser specialists — Fergana and Kokand.",
      keywords: "dermatologist Fergana, dermatologist Kokand, Radeski doctors, Dilshod Ashurov, cosmetologist Fergana",
    },
    prices: {
      title: "Dermatology & cosmetology prices — Radeski",
      desc: "Radeski price list: consultations, IPL, laser hair removal, Botox and more in Fergana and Kokand.",
      keywords: "dermatologist price Fergana, dermatologist price Kokand, IPL price, Botox cost, cosmetology prices",
    },
    articles: {
      title: "Skin, hair & nail health articles — Radeski",
      desc: "Dermatology blog: acne, psoriasis, vitiligo, IPL, laser hair removal and hair treatments — Fergana and Kokand.",
      keywords: "dermatology articles, acne treatment, psoriasis, vitiligo, IPL therapy, Fergana, Kokand",
    },
    videos: {
      title: "Videos — clinic & procedures | Radeski Fergana | Kokand",
      desc: "Radeski clinic videos on IPL, phototherapy, laser and dermatology services — Fergana | Kokand.",
      keywords: "Radeski video, dermatology video, IPL, clinic Fergana, clinic Kokand",
    },
    branches: {
      title: "Clinic Addresses in Fergana & Kokand — Radeski",
      desc: "Radeski branches in Fergana, Kokand and Rade Skin Clinic in Liège, Belgium. Dermatologist and cosmetology in Kokand.",
      keywords: "Radeski branch, dermatologist Fergana, dermatologist Kokand, clinic address",
    },
    qoqon: {
      title: 'Dermatologist in Kokand — Radeski Skin Clinic',
      desc: 'Radeski Skin Clinic in Kokand: dermatology, cosmetology, IPL, laser hair removal, phototherapy. Address: 47-MFI, Huqandiy 144A. Tel: +998 95 210 73 73.',
      keywords:
        'dermatologist Kokand, dermatology Kokand, cosmetology Kokand, IPL Kokand, laser hair removal Kokand, Radeski Kokand, acne Kokand',
    },
    fargona: {
      title: 'Dermatologist in Fergana — Radeski Skin Clinic',
      desc: 'Radeski main clinic in Fergana: dermatology, trichology, podology, IPL, laser, dermoscopy. Address: 1A Uzbekiston Ovozi St. Tel: +998 73 200-73-73.',
      keywords:
        'dermatologist Fergana, trichologist Fergana, podiatrist Fergana, IPL Fergana, laser hair removal Fergana, Radeski Fergana, acne Fergana',
    },
    results: {
      title: "Results — before and after | Radeski Fergana | Kokand",
      desc: "Treatment results gallery: acne, pigmentation, IPL and trichology at Radeski (Fergana | Kokand).",
      keywords: "treatment results, before after, acne, IPL results, Fergana, Kokand",
    },
    technologies: {
      title: "Technologies — IPL, Mohs, Excimer | Radeski Fergana | Kokand",
      desc: "Sciton IPL, Mohs micrographic surgery, Excimer and UVB phototherapy at Radeski — Fergana and Kokand.",
      keywords: "IPL Fergana, IPL Kokand, Mohs, Excimer, UVB phototherapy, modern dermatology",
    },
    'daavlin-foto-kabinalari': {
      title: "Daavlin phototherapy center — Radeski Fergana",
      desc: "Narrowband UVB (311–313 nm) phototherapy in Daavlin cabins for psoriasis, vitiligo, eczema and other chronic skin conditions. National Phototherapy Center of Uzbekistan — Radeski Skin Clinic.",
      keywords: "National Phototherapy Center, Daavlin, NB-UVB, phototherapy, psoriasis, vitiligo, eczema, Fergana, Kokand",
    },
    dermoscan: {
      title: "DermaScan — AI-Supported Dermatology | Radeski Skin Clinic",
      desc: "DermaScan mobile app: digital skin monitoring, AI-assisted analysis, and continuous physician–patient collaboration. Radeski digital dermatology ecosystem.",
      keywords: "DermaScan, AI dermatology, skin monitoring, artificial intelligence, digital dermatology, Radeski",
    },
    science: {
      title: "Science & research — Radeski Skin Clinic",
      desc: "Science at Radeski Skin Clinic: clinical practice, research, publications, training young physicians, and international collaboration. Fergana | Kokand.",
      keywords: "science, dermatology research, clinical protocols, young physicians, Radeski, Fergana, Kokand",
    },
    obrazovaniya: {
      title: "Education | Radeski Skin Clinic — skin, hair, and nails",
      desc: "Certification programs, residency, continuing education, masterclasses, hands-on training, hair transplant and laser technology courses. Modern aesthetic correction. Fergana | Kokand.",
      keywords: "education, certification courses, residency, continuing medical education, masterclasses, hands-on training, hair transplant training, laser technology, dermatology training, aesthetic medicine, Radeski, Fergana, Kokand",
    },
    'malaka-oshirish': {
      title: "Professional development courses — Radeski",
      desc: "Dermatology and cosmetology CME: certification, masterclasses, laser training, clinical practice, and international programs. Fergana | Kokand.",
      keywords: "professional development, CME, certification courses, laser training, dermatology education, Radeski, Fergana",
    },
    'tele-dermatology': {
      title: "TeleDermatology | Radeski Skin Clinic",
      desc: "Remote dermatology consultations, online skin care follow-up, and digital care pathways. Radeski Skin Clinic — Fergana | Kokand.",
      keywords: "teledermatologist, online dermatology, remote dermatology consultation, Radeski, Fergana",
    },
    'skin-pathology-center': {
      title: "National Center of Skin Pathology | Radeski Skin Clinic",
      desc: "Histologic and morphologic diagnosis, research, and standards in skin pathology. Radeski — Fergana | Kokand.",
      keywords: "skin pathology, histology, morphologic diagnosis, national center, Radeski, Fergana",
    },
    brend: {
      title: "Radeski Skin Clinic brand: mission & philosophy",
      desc: "The Radeski Skin Clinic brand: professional medicine, technology, science and accessibility. A dermatology ecosystem in Fergana and Kokand.",
      keywords: "Radeski brand, clinic brand, dermatology ecosystem, mission, Fergana, Kokand",
    },
    terms: {
      title: "Terms of Use | Radeski Skin Clinic",
      desc: "Rules for using the Radeski.uz website: online booking, patient reviews, site content and liability. Radeski Skin Clinic — Fergana and Kokand.",
      keywords: "terms of use, Radeski, website rules",
    },
    privacy: {
      title: "Privacy Policy | Radeski Skin Clinic",
      desc: "How Radeski Skin Clinic collects, stores and protects patients' personal data from online booking, reviews and enquiries sent through the website.",
      keywords: "privacy policy, personal data, Radeski",
    },
  },
};

export function getTabSeo(locale: Locale, page: PageId): PageMeta {
  return (
    TAB_SEO[locale]?.[page] ||
    TAB_SEO.uz.home || {
      title: 'Radeski Skin Clinic',
      desc: "Dermatologiya va kosmetologiya klinikasi Farg'ona | Qo'qon.",
      keywords: "dermatologiya Farg'ona, dermatologiya Qo'qon, Radeski",
    }
  );
}
