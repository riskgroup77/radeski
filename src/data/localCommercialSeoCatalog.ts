import type { Locale } from '../types';
import { SCHEDULED_ARTICLE_ROUTE_KEYS } from './articleRouteKeys.generated';
import { LANDING_LISTS } from './localLandingLists';

export type LocalSeoCity = 'qoqon' | 'fargona';

export interface LocalizedCopy {
  uz: string;
  ru: string;
  en: string;
}

export interface LocalCommercialFaq {
  question: LocalizedCopy;
  answer: LocalizedCopy;
}

export interface LocalCommercialLanding {
  city: LocalSeoCity;
  slug: string;
  serviceCategoryId: string;
  conditionSlug?: string;
  promoSlug?: string;
  articleRouteKeys?: string[];
  seo: { title: LocalizedCopy; desc: LocalizedCopy; keywords: LocalizedCopy };
  h1: LocalizedCopy;
  lead: LocalizedCopy;
  problemTitle: LocalizedCopy;
  problemText: LocalizedCopy;
  whoFor: LocalizedCopy[];
  methodsTitle: LocalizedCopy;
  methods: LocalizedCopy[];
  equipmentNote?: LocalizedCopy;
  faqs: LocalCommercialFaq[];
}

export const POSITIONING_FORMULA: LocalizedCopy = {
  uz: 'Teri, soch va tirnoqlar bo‘yicha ixtisoslashgan klinika: dermatologiya, trixologiya, podologiya, diagnostika va zamonaviy apparat texnologiyalari.',
  ru: 'Специализированная клиника кожи, волос и ногтей: дерматология, трихология, подология, диагностика и современные аппаратные технологии.',
  en: 'Specialized clinic for skin, hair and nails: dermatology, trichology, podology, diagnostics and modern device technologies.',
};

export const COMPETITIVE_ADVANTAGES: LocalizedCopy[] = [
  {
    uz: 'Tor tibbiy ixtisoslashuv — teri, soch va tirnoq',
    ru: 'Узкая медицинская специализация — кожа, волосы и ногти',
    en: 'Focused medical specialization — skin, hair and nails',
  },
  {
    uz: 'Dermatologiya, trixologiya, podologiya va diagnostika bir joyda',
    ru: 'Дерматология, трихология, подология и диагностика в одной клинике',
    en: 'Dermatology, trichology, podology and diagnostics in one clinic',
  },
  {
    uz: 'Shifokor qabuli, diagnostika va apparat muolajalari bir rejada',
    ru: 'Приём врача, диагностика и аппаратные процедуры в одном плане',
    en: 'Doctor consultation, diagnostics and device treatments in one plan',
  },
  {
    uz: 'Farg‘ona va Qo‘qon filiallari — bir xil sifat standarti',
    ru: 'Филиалы в Фергане и Коканде — единый стандарт качества',
    en: 'Fergana and Kokand branches — the same quality standard',
  },
];

function L(uz: string, ru: string, en: string): LocalizedCopy {
  return { uz, ru, en };
}

function cityLabel(city: LocalSeoCity, locale: Locale): string {
  if (city === 'qoqon') {
    if (locale === 'ru') return 'Коканде';
    if (locale === 'en') return 'Kokand';
    return "Qo'qonda";
  }
  if (locale === 'ru') return 'Фергане';
  if (locale === 'en') return 'Fergana';
  return "Farg'onada";
}

function specialistLanding(
  city: LocalSeoCity,
  slug: string,
  serviceCategoryId: string,
  specialist: LocalizedCopy,
  articleRouteKeys: string[],
): LocalCommercialLanding {
  const c = (locale: Locale) => cityLabel(city, locale);
  return {
    city,
    slug,
    serviceCategoryId,
    articleRouteKeys,
    seo: {
      title: L(
        `${specialist.uz} ${c('uz')} | Radeski Skin Clinic`,
        `${specialist.ru} в ${c('ru')} | Radeski Skin Clinic`,
        `${specialist.en} in ${c('en')} | Radeski Skin Clinic`,
      ),
      desc: L(
        `${c('uz')} ${specialist.uz.toLowerCase()} qabul, diagnostika va davolash. Radeski — teri, soch va tirnoqlar bo‘yicha ixtisoslashgan klinika.`,
        `${specialist.ru} в ${c('ru')}: приём, диагностика и лечение. Radeski — специализированная клиника кожи, волос и ногтей.`,
        `${specialist.en} in ${c('en')}: consultation, diagnostics and treatment at Radeski specialized clinic.`,
      ),
      keywords: L(
        `${specialist.uz} ${city === 'qoqon' ? "Qo'qon" : "Farg'ona"}, Radeski Skin Clinic`,
        `${specialist.ru} ${city === 'qoqon' ? 'Коканд' : 'Фергана'}, Radeski`,
        `${specialist.en} ${city === 'qoqon' ? 'Kokand' : 'Fergana'}, Radeski`,
      ),
    },
    h1: L(`${specialist.uz} ${c('uz')}`, `${specialist.ru} в ${c('ru')}`, `${specialist.en} in ${c('en')}`),
    lead: L(
      `${c('uz')} ${specialist.uz.toLowerCase()} qabuliga yoziling. Shifokor ko‘rigida muammo aniqlanadi, davolash rejasi shaxsiy tuziladi.`,
      `${specialist.ru} в ${c('ru')}: запись на приём, осмотр и диагностика. План лечения составляется индивидуально.`,
      `Book a ${specialist.en.toLowerCase()} in ${c('en')}. An individual treatment plan is created after examination.`,
    ),
    problemTitle: L('Qachon murojaat qilish kerak?', 'Когда обращаться?', 'When to visit?'),
    problemText: L(
      'Teri, soch yoki tirnoq muammosi uzoq davom etsa yoki kuchaysa — mutaxassis ko‘rigiga boring.',
      'Если проблема кожи, волос или ногтей длится или усиливается — обратитесь к специалисту.',
      'If a skin, hair or nail problem persists or worsens — see a specialist.',
    ),
    whoFor: [
      L('Birinchi marta konsultatsiya kerak bo‘lganlar', 'Нужна первичная консультация', 'First consultation needed'),
      L('Aniq tashxis va davolash rejasi qidirayotganlar', 'Нужен диагноз и план лечения', 'Need diagnosis and plan'),
    ],
    methodsTitle: L('Klinikada nimalar mavjud?', 'Что доступно в клинике?', 'What is available?'),
    methods: [
      L('Klinik ko‘rik va diagnostika', 'Осмотр и диагностика', 'Examination and diagnostics'),
      L('Shaxsiy davolash rejasi', 'Индивидуальный план лечения', 'Individual treatment plan'),
      L('Apparat muolajalar (ko‘rsatma bo‘yicha)', 'Аппаратные процедуры по показаниям', 'Device procedures when indicated'),
    ],
    // Topic questions, price and branch address/phone come from localLandingDetails.
    faqs: [
      {
        question: L('Radeski oddiy kosmetologiya markazimi?', 'Radeski — обычный косметологический центр?', 'Is Radeski a beauty salon?'),
        answer: POSITIONING_FORMULA,
      },
    ],
  };
}

function treatmentLanding(
  city: LocalSeoCity,
  slug: string,
  serviceCategoryId: string,
  opts: {
    name: LocalizedCopy;
    conditionSlug?: string;
    promoSlug?: string;
    articleRouteKeys?: string[];
    problem: LocalizedCopy;
    whoFor: LocalizedCopy[];
    methods: LocalizedCopy[];
    equipmentNote?: LocalizedCopy;
  },
): LocalCommercialLanding {
  const c = (locale: Locale) => cityLabel(city, locale);
  return {
    city,
    slug,
    serviceCategoryId,
    conditionSlug: opts.conditionSlug,
    promoSlug: opts.promoSlug,
    articleRouteKeys: opts.articleRouteKeys,
    seo: {
      title: L(
        `${opts.name.uz} ${c('uz')} | Radeski Skin Clinic`,
        `${opts.name.ru} в ${c('ru')} | Radeski Skin Clinic`,
        `${opts.name.en} in ${c('en')} | Radeski Skin Clinic`,
      ),
      desc: L(
        `${c('uz')} ${opts.name.uz.toLowerCase()}: diagnostika, davolash va kuzatuv. Radeski — ixtisoslashgan klinika.`,
        `${opts.name.ru} в ${c('ru')}: диагностика, лечение и наблюдение. Radeski — специализированная клиника.`,
        `${opts.name.en} in ${c('en')}: diagnostics, treatment and follow-up at Radeski.`,
      ),
      keywords: L(
        `${opts.name.uz} ${city === 'qoqon' ? "Qo'qon" : "Farg'ona"}, Radeski`,
        `${opts.name.ru} ${city === 'qoqon' ? 'Коканд' : 'Фергана'}, Radeski`,
        `${opts.name.en} ${city === 'qoqon' ? 'Kokand' : 'Fergana'}, Radeski`,
      ),
    },
    h1: L(`${opts.name.uz} ${c('uz')}`, `${opts.name.ru} в ${c('ru')}`, `${opts.name.en} in ${c('en')}`),
    lead: L(
      `${c('uz')} ${opts.name.uz.toLowerCase()} bo‘yicha to‘liq xizmat: shifokor ko‘rigidan muolajalar va kuzatuvgacha.`,
      `Полный цикл ${opts.name.ru.toLowerCase()} в ${c('ru')}: от приёма до процедур и наблюдения.`,
      `Full ${opts.name.en.toLowerCase()} pathway in ${c('en')}: from visit to procedures and follow-up.`,
    ),
    problemTitle: L('Muammo haqida', 'О проблеме', 'About the condition'),
    problemText: opts.problem,
    whoFor: opts.whoFor,
    methodsTitle: L('Davolash yondashuvi', 'Подход к лечению', 'Treatment approach'),
    methods: opts.methods,
    equipmentNote: opts.equipmentNote,
    // Every treatment topic has its own questions (localLandingTopics); no generic filler here.
    faqs: [],
  };
}

/** Replaces the template keywords with the queries patients actually type. */
function withKeywords(landing: LocalCommercialLanding, keywords: LocalizedCopy): LocalCommercialLanding {
  return { ...landing, seo: { ...landing.seo, keywords } };
}

/** "Kosmetolog" city page (device and injectable cosmetology by dermatocosmetologists). */
function kosmetologLanding(city: LocalSeoCity, articleRouteKeys: string[]): LocalCommercialLanding {
  const [uzCity, ruCity, enCity] = city === 'qoqon' ? ["Qo'qon", 'Коканд', 'Kokand'] : ["Farg'ona", 'Фергана', 'Fergana'];
  return withKeywords(
    specialistLanding(city, 'kosmetolog', 'apparatnaya-kosmetologiya', L('Kosmetolog', 'Косметолог', 'Cosmetologist'), articleRouteKeys),
    L(
      `kosmetolog ${uzCity}, dermatokosmetolog ${uzCity}, yuz tozalash ${uzCity}, piling ${uzCity}, apparatli kosmetologiya, akne davolash, pigmentatsiya, Radeski Skin Clinic`,
      `косметолог ${ruCity}, дерматокосметолог ${ruCity}, чистка лица ${ruCity}, пилинг ${ruCity}, аппаратная косметология, лечение акне, пигментация, Radeski Skin Clinic`,
      `cosmetologist ${enCity}, dermatocosmetologist ${enCity}, facial cleansing ${enCity}, chemical peel, device cosmetology, acne treatment, pigmentation, Radeski Skin Clinic`,
    ),
  );
}

/**
 * "Bolalar dermatologi" city page. Both branches see children: Kokand — the Turgunov and
 * Karimova profiles ("adults and children"); Fergana — Dr. Ashurov's pediatric wart cases
 * and Dr. Yoqubov's pediatric alopecia areata case.
 */
function pediatricDermatologistLanding(city: LocalSeoCity, articleRouteKeys: string[]): LocalCommercialLanding {
  const [uzCity, ruCity, enCity] = city === 'qoqon' ? ["Qo'qon", 'Коканд', 'Kokand'] : ["Farg'ona", 'Фергана', 'Fergana'];
  const landing = specialistLanding(
    city,
    'bolalar-dermatologi',
    'dermatologiya',
    L('Bolalar dermatologi', 'Детский дерматолог', 'Pediatric dermatologist'),
    articleRouteKeys,
  );
  return withKeywords(
    {
      ...landing,
      whoFor: [
        L('Chaqaloq va go‘daklar: taglik dermatiti, quruq va qizargan teri', 'Младенцы: пелёночный дерматит, сухая и покрасневшая кожа', 'Babies: nappy rash, dry and red skin'),
        L('Atopik dermatit, ekzema va allergik toshma', 'Атопический дерматит, экзема и аллергическая сыпь', 'Atopic dermatitis, eczema and allergic rash'),
        L('So‘gal, molluskum, impetigo va boshqa yuqumli teri kasalliklari', 'Бородавки, моллюск, импетиго и другие заразные болезни кожи', 'Warts, molluscum, impetigo and other contagious skin conditions'),
        L('O‘smirlik aknesi, soch to‘kilishi, xol va tug‘ma dog‘lar', 'Подростковое акне, выпадение волос, родинки и родимые пятна', 'Teenage acne, hair loss, moles and birthmarks'),
      ],
      methods: [
        L('Bola yoshiga mos dermatologik ko‘rik', 'Дерматологический осмотр с учётом возраста', 'Age-appropriate skin examination'),
        L('Og‘riqsiz dermatoskopiya', 'Безболезненная дерматоскопия', 'Painless dermatoscopy'),
        L('Allergiya va triggerlarni aniqlash, kerak bo‘lsa tahlillar', 'Поиск аллергенов и триггеров, при необходимости анализы', 'Finding allergens and triggers, tests if needed'),
        L('So‘gal va o‘smalarni DEKA CO₂ lazer bilan olib tashlash', 'Удаление бородавок и образований лазером DEKA CO₂', 'Wart and growth removal with the DEKA CO₂ laser'),
        L('Ota-onaga uyda parvarish bo‘yicha yo‘riqnoma va kuzatuv', 'Инструкция для родителей по уходу дома и наблюдение', 'Home-care guidance for parents and follow-up'),
      ],
    },
    L(
      `bolalar dermatologi ${uzCity}, bolalar teri shifokori ${uzCity}, bolalarda atopik dermatit, bolalarda toshma, bolalarda so'gal, chaqaloq terisi, Radeski Skin Clinic`,
      `детский дерматолог ${ruCity}, детский кожный врач ${ruCity}, атопический дерматит у детей, сыпь у ребёнка, бородавки у детей, кожа младенца, Radeski Skin Clinic`,
      `pediatric dermatologist ${enCity}, children's skin doctor ${enCity}, atopic dermatitis in children, child rash, warts in children, baby skin, Radeski Skin Clinic`,
    ),
  );
}

/** "Ichiga o'sgan tirnoq" city page (ingrown toenail: removal and titanium-wire correction). */
function ingrownNailLanding(city: LocalSeoCity): LocalCommercialLanding {
  const [uzCity, ruCity, enCity] = city === 'qoqon' ? ["Qo'qon", 'Коканд', 'Kokand'] : ["Farg'ona", 'Фергана', 'Fergana'];
  return withKeywords(
    treatmentLanding(city, 'ichga-osgan-tirnoq', 'clinika-patologii-nogtej', {
      name: L("Ichiga o'sgan tirnoqni davolash", 'Лечение вросшего ногтя', 'Ingrown toenail treatment'),
      promoSlug: 'podologiya',
      articleRouteKeys: ['art-ichga-osgan-tirnoq', 'art-onixokriptoz-klinik-holat'],
      problem: L(
        "Tirnoq cheti teriga botib o'sadi: og'riq, qizarish va shish paydo bo'ladi, muammo qaytalanishi mumkin.",
        'Край ногтя врастает в кожу: появляются боль, покраснение и отёк, проблема может возвращаться.',
        'The nail edge grows into the skin, causing pain, redness and swelling, and the problem can recur.',
      ),
      whoFor: [
        L("Yurganda barmoqda og'riq bo'lsa", 'Боль в пальце при ходьбе', 'Toe pain when walking'),
        L("Tirnoq atrofi qizargan yoki shishgan bo'lsa", 'Покраснение или отёк вокруг ногтя', 'Redness or swelling around the nail'),
        L("Operatsiyadan keyin muammo qaytgan bo'lsa", 'Проблема вернулась после операции', 'The problem came back after surgery'),
      ],
      methods: [
        L("Teriga botgan qismni olib tashlash", 'Удаление вросшей части ногтя', 'Removal of the ingrown part'),
        L('Titan ip bilan korreksiya', 'Коррекция титановой нитью', 'Titanium wire correction'),
        L('Tirnoqni apparat bilan tozalash', 'Аппаратная обработка ногтя', 'Device nail treatment'),
      ],
    }),
    L(
      `ichiga o'sgan tirnoq ${uzCity}, ichga o'sgan tirnoq, o'sib ketgan tirnoq davolash, titan ip tirnoq, podolog ${uzCity}, onixokriptoz, Radeski Skin Clinic`,
      `вросший ноготь ${ruCity}, лечение вросшего ногтя ${ruCity}, удаление вросшего ногтя, титановая нить ноготь, подолог ${ruCity}, онихокриптоз, Radeski Skin Clinic`,
      `ingrown toenail ${enCity}, ingrown toenail treatment, titanium wire nail correction, podiatrist ${enCity}, onychocryptosis, Radeski Skin Clinic`,
    ),
  );
}

function buildKokandLandings(): LocalCommercialLanding[] {
  return [
    specialistLanding('qoqon', 'dermatolog', 'dermatologiya', L('Dermatolog', 'Дерматолог', 'Dermatologist'), ['art-dermatolog-qabuliga-tayyorgarlik', 'art-bolalarda-atopik-dermatit', 'art-chipqon-follikulit', 'art-sovuq-allergiyasi', 'art-orab-oluvchi-temiratki', 'art-qizil-yassi-temiratki', 'art-lablar-yorilishi-xeylit', 'art-akne', 'art-akne-u-vzroslykh', 'art-seboreyali-dermatit', 'art-ekzema', 'art-gerpes', 'art-psoriasis-daavlin-kokand']),
    pediatricDermatologistLanding('qoqon', ['art-bolalarda-atopik-dermatit', 'art-bolalarda-teri-toshmalari', 'art-bolalarda-sogal-lazer-radeski', 'art-bolalarda-sogal-co2-deka', 'art-alopecia-areata-klinik-holat']),
    specialistLanding('qoqon', 'trixolog', 'trihologiya-centr-lechenie-volos', L('Trixolog', 'Трихолог', 'Trichologist'), ['art-bosh-terisi-qichishi', 'art-bosh-terisi-psoriazi', 'art-erkaklarda-soch-tokilishi', 'art-ayollarda-soch-tokilishi', 'art-trixolog-trixoskopiya', 'art-alopecia-areata-klinik-holat', 'art-plazmotorapiya-soch-prp']),
    specialistLanding('qoqon', 'podolog', 'clinika-patologii-nogtej', L('Podolog', 'Подолог', 'Podiatrist'), ['art-podolog-kim', 'art-mort-tirnoqlar', 'art-plantar-sogal', 'art-ichga-osgan-tirnoq', 'art-tirnoq-rangi-ozgarishi', 'art-qadoq-va-kesak', 'art-tovon-yoriqlari', 'art-diabetda-oyoq-parvarishi', 'art-tirnoq-zamburugi', 'art-teri-zamburugi', 'art-onixokriptoz-klinik-holat']),
    kosmetologLanding('qoqon', ['art-apparatli-kosmetologiya', 'art-yuz-tozalash-turlari', 'art-botoks-yoki-filler', 'art-yangi-yil-yuz-parvarishi', 'art-koz-osti-qorayishi', 'art-kimyoviy-piling', 'art-oyoqdagi-tomir-tori', 'art-pigment-doglari-qishda', 'art-giperhidroz', 'art-karbon-piling', 'art-milium', 'art-qishda-teri-parvarishi', 'art-striya', 'art-akne-dermatolog-kosmetolog', 'art-lasemd-ultra-kokand', 'art-hollywood-spectra-poralar-radeski', 'art-biorevitalizatsiya-radeski']),
    ingrownNailLanding('qoqon'),
    treatmentLanding('qoqon', 'akne-davolash', 'dermatologiya', {
      name: L('Akne davolash', 'Лечение акне', 'Acne treatment'),
      conditionSlug: 'acne',
      articleRouteKeys: ['art-akne', 'art-akne-u-vzroslykh', 'art-pryshchi-u-vzroslykh'],
      problem: L('Akne va postakne teri sifatini buzadi.', 'Акне и постакне ухудшают кожу.', 'Acne and post-acne affect skin quality.'),
      whoFor: [L('Yoshlar va kattalar', 'Подростки и взрослые', 'Teens and adults')],
      methods: [L('Dermatolog ko‘rigi', 'Осмотр дерматолога', 'Dermatologist exam'), L('Terapiya va apparatlar', 'Терапия и аппараты', 'Therapy and devices')],
    }),
    treatmentLanding('qoqon', 'soch-tokilish', 'trihologiya-centr-lechenie-volos', {
      name: L("Soch to'kilishi davolash", 'Лечение выпадения волос', 'Hair loss treatment'),
      articleRouteKeys: ['art-erkaklarda-soch-tokilishi', 'art-ayollarda-soch-tokilishi', 'art-soch-tokilishi-tahlillar-radeski', 'art-thulium-laser-hair-kokand', 'art-plazmotorapiya-soch-prp'],
      problem: L("Soch to'kilishi turli sabablarga ko'ra bo'lishi mumkin.", 'Выпадение волос имеет разные причины.', 'Hair loss has various causes.'),
      whoFor: [L('Soch siyraklashgan bemorlar', 'При поредении волос', 'Thinning hair')],
      methods: [L('Trixolog va trixoskopiya', 'Трихолог и трихоскопия', 'Trichologist and trichoscopy'), L('PRP va kurs davolash', 'PRP и курс лечения', 'PRP and treatment course')],
    }),
    treatmentLanding('qoqon', 'tirnoq-zamburug', 'clinika-patologii-nogtej', {
      name: L("Tirnoq zamburug'i davolash", 'Лечение грибка ногтей', 'Nail fungus treatment'),
      promoSlug: 'podologiya',
      articleRouteKeys: ['art-mort-tirnoqlar', 'art-tirnoq-rangi-ozgarishi', 'art-teri-zamburugi', 'art-tirnoq-zamburugi'],
      problem: L('Onikomikoz tirnoq qalinlashishi bilan kechadi.', 'Онихомикоз — утолщение ногтя.', 'Onychomycosis thickens the nail.'),
      whoFor: [L('Uzoq davom etgan zamburug', 'Длительный грибок', 'Long-standing fungus')],
      methods: [L('Podolog ko‘rigi', 'Осмотр подолога', 'Podiatrist exam'), L('Kompleks terapiya', 'Комплексная терапия', 'Combined therapy')],
    }),
    treatmentLanding('qoqon', 'osma-olib-tashlash', 'dermatoonkologiya', {
      articleRouteKeys: ['art-seboreyali-keratoz', 'art-papilloma-olib-tashlash'],
      name: L("O'sma olib tashlash", 'Удаление новообразований', 'Lesion removal'),
      promoSlug: 'dermataskopiya',
      problem: L("Teri o'smalarini vaqtida baholash muhim.", 'Своевременная оценка образований важна.', 'Timely lesion assessment matters.'),
      whoFor: [L("Yangi yoki o'sib borayotgan dog'", 'Новое или растущее образование', 'New or growing lesion')],
      methods: [L('Dermatoskopiya', 'Дерматоскопия', 'Dermoscopy'), L('Jarrohlik yoki lazer', 'Хирургия или лазер', 'Surgery or laser')],
    }),
    treatmentLanding('qoqon', 'psoriaz-davolash', 'dermatologiya', {
      name: L('Psoriaz davolash', 'Лечение псориаза', 'Psoriasis treatment'),
      conditionSlug: 'psoriaz',
      promoSlug: 'fototerapiya',
      articleRouteKeys: ['art-bosh-terisi-psoriazi', 'art-psoriaz-tashxis-davolash-radeski', 'art-psoriasis-daavlin-kokand'],
      problem: L('Psoriaz surunkali kasallik.', 'Псориаз — хроническое заболевание.', 'Psoriasis is chronic.'),
      whoFor: [L('Surunkali psoriaz', 'Хронический псориаз', 'Chronic psoriasis')],
      methods: [L('Terapiya', 'Терапия', 'Therapy'), L('Daavlin fototerapiya', 'Фототерапия Daavlin', 'Daavlin phototherapy')],
      equipmentNote: L('Fototerapiya Daavlin kabinalarida.', 'Фототерапия в кабинах Daavlin.', 'Phototherapy in Daavlin cabins.'),
    }),
    treatmentLanding('qoqon', 'vitiligo-davolash', 'dermatologiya', {
      name: L('Vitiligo davolash', 'Лечение витилиго', 'Vitiligo treatment'),
      conditionSlug: 'vitiligo',
      articleRouteKeys: ['art-vitiligo-belgilari', 'art-vitiligo-daavlin'],
      problem: L('Vitiligo pigment yo‘qolishi bilan kechadi.', 'Витилиго — потеря пигмента.', 'Vitiligo involves pigment loss.'),
      whoFor: [L('Oq dog‘lar', 'Белые пятна', 'White patches')],
      methods: [L('Fototerapiya', 'Фототерапия', 'Phototherapy'), L('Kuzatuv', 'Наблюдение', 'Follow-up')],
    }),
    treatmentLanding('qoqon', 'rozasea-davolash', 'dermatologiya', {
      name: L('Rozasea davolash', 'Лечение розацеа', 'Rosacea treatment'),
      conditionSlug: 'rozasea',
      articleRouteKeys: ['art-perioral-dermatit', 'art-demodekoz', 'art-rozatseya-davolash-radeski'],
      problem: L('Yuz qizarishi va tomirlar.', 'Покраснение и сосуды.', 'Redness and vessels.'),
      whoFor: [L('Doimiy qizarish', 'Постоянное покраснение', 'Persistent redness')],
      methods: [L('Terapiya', 'Терапия', 'Therapy'), L('IPL/lazer', 'IPL/лазер', 'IPL/laser')],
    }),
    treatmentLanding('qoqon', 'pigmentatsiya', 'apparatnaya-kosmetologiya', {
      name: L('Pigmentatsiya davolash', 'Лечение пигментации', 'Pigmentation treatment'),
      conditionSlug: 'teri-doglari',
      promoSlug: 'ipl',
      articleRouteKeys: ['art-koz-osti-qorayishi', 'art-pigment-doglari-qishda', 'art-melazma', 'art-lasemd-ultra-kokand', 'art-ipl-lumecca-pigmentatsiya-radeski'],
      problem: L('Pigment dog‘lari va melasma.', 'Пигментные пятна и мелазма.', 'Pigment spots and melasma.'),
      whoFor: [L('Dog‘lar va postakne', 'Пятна и постакне', 'Spots and post-acne')],
      methods: [L('IPL/lazer', 'IPL/лазер', 'IPL/laser'), L('SPF parvarish', 'SPF и уход', 'SPF and care')],
    }),
    treatmentLanding('qoqon', 'lazer-epilyatsiya', 'lazernaya-epilyaciya', {
      name: L('Lazer epilyatsiya', 'Лазерная эпиляция', 'Laser hair removal'),
      promoSlug: 'lazer-epilyatsiya',
      articleRouteKeys: ['art-lazer-epilyatsiya-kuz-qish', 'art-deka-moveo-fergana-faq', 'art-lazer-epilyatsiya-samara-xatolar'],
      problem: L('Ortiqcha tukni uzoq muddat kamaytirish.', 'Длительное уменьшение роста волос.', 'Long-term hair reduction.'),
      whoFor: [L('Barcha anatomik zonalar', 'Все зоны', 'All body areas')],
      methods: [L('DEKA MOVEO lazer', 'Лазер DEKA MOVEO', 'DEKA MOVEO laser'), L('Kurs rejasi', 'Курс процедур', 'Treatment course')],
    }),
    treatmentLanding('qoqon', 'dermatoskopiya', 'dermatoskopiya', {
      articleRouteKeys: ['art-aktinik-keratoz', 'art-melanoma', 'art-xol-tekshiruvi-dermatoskopiya'],
      name: L('Dermatoskopiya', 'Дерматоскопия', 'Dermoscopy'),
      promoSlug: 'dermataskopiya',
      problem: L("Teri o'smalarini batafsil ko'rish.", 'Детальный осмотр образований.', 'Detailed lesion examination.'),
      whoFor: [L("Shubhali dog'", 'Подозрительные образования', 'Suspicious lesions')],
      methods: [L('Raqamli dermatoskop', 'Цифровой дерматоскоп', 'Digital dermoscope'), L('Mutaxassis xulosasi', 'Заключение специалиста', 'Specialist conclusion')],
    }),
    treatmentLanding('qoqon', 'qon-tomir', 'apparatnaya-kosmetologiya', {
      name: L('Qon tomir va qizarish davolash', 'Лечение сосудистой сеточки', 'Vascular redness treatment'),
      conditionSlug: 'yuz-qizarishi',
      articleRouteKeys: ['art-kuperoz', 'art-oyoqdagi-tomir-tori', 'art-derma-v-vascular', 'art-derma-v-qizarish-radeski'],
      problem: L('Tomirlar va qizarish.', 'Сосудистая сетка и покраснение.', 'Vessels and redness.'),
      whoFor: [L('Kuperoz/rozasea', 'Купероз/розацеа', 'Couperose/rosacea')],
      methods: [L('Derma V / IPL', 'Derma V / IPL', 'Derma V / IPL'), L('Kurs', 'Курс', 'Course')],
    }),
    treatmentLanding('qoqon', 'sogal-olib-tashlash', 'hirurgicheskaya-dermatologiya', {
      name: L("So'gal olib tashlash", 'Удаление бородавок', 'Wart removal'),
      promoSlug: 'co2-lazer',
      articleRouteKeys: ['art-plantar-sogal', 'art-papilloma-olib-tashlash', 'art-bolalarda-sogal-lazer-radeski'],
      problem: L("So'g'allar tarqalishi mumkin.", 'Бородавки могут распространяться.', 'Warts can spread.'),
      whoFor: [L('Bolalar va kattalar', 'Дети и взрослые', 'Children and adults')],
      methods: [L('CO2 lazer', 'CO2 лазер', 'CO2 laser'), L('Podolog/dermatolog', 'Подолог/дерматолог', 'Podiatrist/dermatologist')],
    }),
    treatmentLanding('qoqon', 'trixoskopiya', 'trihologiya-centr-lechenie-volos', {
      name: L('Trixoskopiya', 'Трихоскопия', 'Trichoscopy'),
      articleRouteKeys: ['art-erkaklarda-soch-tokilishi', 'art-ayollarda-soch-tokilishi', 'art-trixolog-trixoskopiya', 'art-alopecia-areata-klinik-holat'],
      problem: L("Soch va bosh terisi holatini kattalashtirib ko'rish.", 'Увеличенный осмотр волос и кожи головы.', 'Magnified exam of scalp and hair.'),
      whoFor: [L("Soch to'kilishi shubhasi", 'Подозрение на выпадение', 'Suspected hair loss')],
      methods: [L('Raqamli trixoskop', 'Цифровой трихоскоп', 'Digital trichoscope'), L('Trixolog xulosasi', 'Заключение трихолога', 'Trichologist report')],
    }),
    treatmentLanding('qoqon', 'xol-tekshiruvi', 'dermatoskopiya', {
      name: L('Xol (dog) tekshiruvi', 'Проверка родинок', 'Mole screening'),
      promoSlug: 'dermataskopiya',
      articleRouteKeys: ['art-aktinik-keratoz', 'art-melanoma', 'art-seboreyali-keratoz', 'art-xol-tekshiruvi-dermatoskopiya', 'art-bazalioma-teri-raki'],
      problem: L("Teri dog'larini vaqtida baholash — profilaktika.", 'Своевременная оценка родинок — профилактика.', 'Timely mole assessment is preventive care.'),
      whoFor: [L("Ko'payib borayotgan dog'", 'Растущее образование', 'Growing lesion')],
      methods: [L('Dermatoskopiya', 'Дерматоскопия', 'Dermoscopy'), L('Skrining rejasi', 'План наблюдения', 'Screening plan')],
    }),
    treatmentLanding('qoqon', 'biopsiya', 'dermatopatologiya', {
      name: L('Teri biopsiyasi', 'Биопсия кожи', 'Skin biopsy'),
      articleRouteKeys: ['art-teri-biopsiyasi', 'art-bazalioma-teri-raki'],
      problem: L("Shubhali o'smalar uchun gistologik tasdiq.", 'Гистологическое подтверждение при подозрении.', 'Histology when malignancy is suspected.'),
      whoFor: [L("Shubhali teri o'smasi", 'Подозрительное образование', 'Suspicious skin lesion')],
      methods: [L('Biopsiya olish', 'Забор биопсии', 'Biopsy sampling'), L('Gistologik tahlil', 'Гистологический анализ', 'Histopathology')],
    }),
    treatmentLanding('qoqon', 'onko-dermatolog', 'dermatoonkologiya', {
      name: L('Onkodermatolog', 'Онкодерматолог', 'Oncodermatologist'),
      promoSlug: 'dermataskopiya',
      articleRouteKeys: ['art-aktinik-keratoz', 'art-melanoma', 'art-teri-biopsiyasi', 'art-bazalioma-teri-raki', 'art-til-yassi-hujayrali-rak', 'art-til-yarasi'],
      problem: L("Teri saratonini erta aniqlash va davolash.", 'Ранняя диагностика и лечение рака кожи.', 'Early skin cancer detection and care.'),
      whoFor: [L("Shubhali dog' va o'smalar", 'Подозрительные родинки и образования', 'Suspicious moles and lesions')],
      methods: [L('Dermatoskopiya', 'Дерматоскопия', 'Dermoscopy'), L('Biopsiya va kuzatuv', 'Биопсия и наблюдение', 'Biopsy and follow-up')],
    }),
    treatmentLanding('qoqon', 'ipl-qoqon', 'apparatnaya-kosmetologiya', {
      name: L('IPL muolajalari', 'IPL-процедуры', 'IPL treatments'),
      promoSlug: 'ipl',
      articleRouteKeys: ['art-pigment-doglari-qishda', 'art-ipl-terapiya', 'art-ipl-lumecca-pigmentatsiya-radeski'],
      problem: L('Pigment va qizarish uchun IPL.', 'IPL при пигментации и покраснении.', 'IPL for pigmentation and redness.'),
      whoFor: [L('Pigmentatsiya', 'Пигментация', 'Pigmentation')],
      methods: [L('InMode IPL / Lumecca', 'InMode IPL / Lumecca', 'InMode IPL / Lumecca')],
    }),
    treatmentLanding('qoqon', 'lazer-tomir', 'apparatnaya-kosmetologiya', {
      name: L('Lazer bilan tomir olib tashlash', 'Удаление сосудов лазером', 'Laser vascular removal'),
      conditionSlug: 'yuz-qizarishi',
      articleRouteKeys: ['art-kuperoz', 'art-oyoqdagi-tomir-tori', 'art-derma-v-vascular'],
      problem: L('Tomirlar va qizarish.', 'Сосудистая сетка и покраснение.', 'Vessels and redness.'),
      whoFor: [L('Kuperoz/rozasea', 'Купероз/розацеа', 'Couperose/rosacea')],
      methods: [L('Derma V', 'Derma V', 'Derma V')],
    }),
  ];
}

function buildFerganaLandings(): LocalCommercialLanding[] {
  return [
    specialistLanding('fargona', 'dermatolog', 'dermatologiya', L('Dermatolog', 'Дерматолог', 'Dermatologist'), ['art-dermatolog-qabuliga-tayyorgarlik', 'art-bolalarda-atopik-dermatit', 'art-chipqon-follikulit', 'art-sovuq-allergiyasi', 'art-orab-oluvchi-temiratki', 'art-qizil-yassi-temiratki', 'art-lablar-yorilishi-xeylit', 'art-akne', 'art-akne-u-vzroslykh', 'art-seboreyali-dermatit', 'art-ekzema', 'art-gerpes', 'art-ipl-terapiya']),
    pediatricDermatologistLanding('fargona', ['art-bolalarda-atopik-dermatit', 'art-bolalarda-teri-toshmalari', 'art-bolalarda-sogal-lazer-radeski', 'art-bolalarda-sogal-co2-deka', 'art-alopecia-areata-klinik-holat']),
    specialistLanding('fargona', 'trixolog', 'trihologiya-centr-lechenie-volos', L('Trixolog', 'Трихолог', 'Trichologist'), ['art-bosh-terisi-qichishi', 'art-bosh-terisi-psoriazi', 'art-erkaklarda-soch-tokilishi', 'art-ayollarda-soch-tokilishi', 'art-plazmotorapiya-soch-prp']),
    specialistLanding('fargona', 'podolog', 'clinika-patologii-nogtej', L('Podolog', 'Подолог', 'Podiatrist'), ['art-podolog-kim', 'art-mort-tirnoqlar', 'art-plantar-sogal', 'art-ichga-osgan-tirnoq', 'art-tirnoq-rangi-ozgarishi', 'art-qadoq-va-kesak', 'art-tovon-yoriqlari', 'art-diabetda-oyoq-parvarishi', 'art-tirnoq-zamburugi', 'art-teri-zamburugi', 'art-onixokriptoz-klinik-holat']),
    kosmetologLanding('fargona', ['art-apparatli-kosmetologiya', 'art-yuz-tozalash-turlari', 'art-botoks-yoki-filler', 'art-yangi-yil-yuz-parvarishi', 'art-koz-osti-qorayishi', 'art-kimyoviy-piling', 'art-oyoqdagi-tomir-tori', 'art-pigment-doglari-qishda', 'art-giperhidroz', 'art-karbon-piling', 'art-milium', 'art-qishda-teri-parvarishi', 'art-striya', 'art-melazma', 'art-akne-dermatolog-kosmetolog', 'art-hollywood-spectra-poralar-radeski', 'art-ipl-lumecca-pigmentatsiya-radeski', 'art-biorevitalizatsiya-radeski']),
    ingrownNailLanding('fargona'),
    treatmentLanding('fargona', 'akne-davolash', 'dermatologiya', {
      name: L('Akne davolash', 'Лечение акне', 'Acne treatment'),
      conditionSlug: 'acne',
      articleRouteKeys: ['art-akne', 'art-akne-u-vzroslykh', 'art-pryshchi-u-vzroslykh'],
      problem: L('Akne va postakne.', 'Акне и постакне.', 'Acne and post-acne.'),
      whoFor: [L('Yoshlar va kattalar', 'Подростки и взрослые', 'Teens and adults')],
      methods: [L('Dermatolog', 'Дерматолог', 'Dermatologist'), L('Terapiya', 'Терапия', 'Therapy')],
    }),
    treatmentLanding('fargona', 'psoriaz-davolash', 'dermatologiya', {
      articleRouteKeys: ['art-bosh-terisi-psoriazi', 'art-psoriaz-tashxis-davolash-radeski'],
      name: L('Psoriaz davolash', 'Лечение псориаза', 'Psoriasis treatment'),
      conditionSlug: 'psoriaz',
      promoSlug: 'fototerapiya',
      problem: L('Surunkali psoriaz.', 'Хронический псориаз.', 'Chronic psoriasis.'),
      whoFor: [L('Plakalar', 'Бляшки', 'Plaques')],
      methods: [L('Daavlin fototerapiya', 'Фототерапия Daavlin', 'Daavlin phototherapy'), L('Terapiya', 'Терапия', 'Therapy')],
    }),
    treatmentLanding('fargona', 'vitiligo-davolash', 'dermatologiya', {
      name: L('Vitiligo davolash', 'Лечение витилиго', 'Vitiligo treatment'),
      conditionSlug: 'vitiligo',
      articleRouteKeys: ['art-vitiligo-belgilari', 'art-vitiligo-daavlin'],
      problem: L('Pigment yo‘qolishi.', 'Потеря пигмента.', 'Pigment loss.'),
      whoFor: [L('Vitiligo', 'Витилиго', 'Vitiligo')],
      methods: [L('Fototerapiya', 'Фототерапия', 'Phototherapy')],
    }),
    treatmentLanding('fargona', 'rozasea-davolash', 'dermatologiya', {
      name: L('Rozasea davolash', 'Лечение розацеа', 'Rosacea treatment'),
      conditionSlug: 'rozasea',
      articleRouteKeys: ['art-perioral-dermatit', 'art-demodekoz', 'art-rozatseya-davolash-radeski'],
      problem: L('Qizarish.', 'Покраснение.', 'Redness.'),
      whoFor: [L('Rozasea', 'Розацеа', 'Rosacea')],
      methods: [L('Terapiya + IPL', 'Терапия + IPL', 'Therapy + IPL')],
    }),
    treatmentLanding('fargona', 'soch-tokilish', 'trihologiya-centr-lechenie-volos', {
      name: L("Soch to'kilishi davolash", 'Лечение выпадения волос', 'Hair loss treatment'),
      articleRouteKeys: ['art-mezoterapiya', 'art-erkaklarda-soch-tokilishi', 'art-ayollarda-soch-tokilishi', 'art-soch-tokilishi-tahlillar-radeski', 'art-plazmotorapiya-soch-prp'],
      problem: L("Soch to'kilishi.", 'Выпадение волос.', 'Hair loss.'),
      whoFor: [L('Alopecia', 'Алопеция', 'Alopecia')],
      methods: [L('PRP', 'PRP', 'PRP'), L('Trixolog', 'Трихолог', 'Trichologist')],
    }),
    // Hair transplant: the only page for it (the /promo/soch-ekish slide is noindex). Fergana
    // only — the surgical suite's branch is not stated for Kokand in the clinic's materials.
    withKeywords(
      treatmentLanding('fargona', 'soch-ekish', 'trihologiya-centr-lechenie-volos', {
        name: L('Soch ekish', 'Пересадка волос', 'Hair transplant'),
        promoSlug: 'soch-ekish',
        articleRouteKeys: ['art-soch-ekish-fue-dhi', 'art-soch-ekishdan-keyin', 'art-soch-ekish-asoratlari', 'art-soqol-ekish', 'art-hair-transplant-contraindications', 'art-erkaklarda-soch-tokilishi', 'art-ayollarda-soch-tokilishi', 'art-trixolog-trixoskopiya'],
        problem: L(
          'Tepa, peshona yoki chakkada soch siyraklashib, oldingi holiga qaytmayapti.',
          'Волосы поредели на макушке, лбу или висках и не восстанавливаются.',
          'Hair has thinned on the crown, front or temples and is not growing back.',
        ),
        whoFor: [
          L(
            'Androgenetik alopetsiya: peshona chizig‘i orqaga ketgan yoki tepada soch siyraklashgan erkaklar',
            'Андрогенетическая алопеция: у мужчин отступила линия роста или поредела макушка',
            'Androgenetic alopecia: men with a receding hairline or thinning crown',
          ),
          L(
            'Androgenetik alopetsiyasi bor, donor zonasi yetarli ayollar',
            'Женщины с андрогенетической алопецией и достаточной донорской зоной',
            'Women with androgenetic alopecia and enough donor hair',
          ),
          L(
            'Soqol yoki mo‘ylovni qalinlashtirmoqchi bo‘lgan erkaklar',
            'Мужчинам, которые хотят сделать гуще бороду или усы',
            'Men wanting a fuller beard or moustache',
          ),
          L(
            'Chandiq yoki avvalgi operatsiyadan keyin sochsiz qolgan joylar (shifokor ko‘rigidan keyin)',
            'Участки без волос после рубца или прошлой операции (после осмотра врача)',
            'Hairless patches after a scar or a previous operation (after a doctor’s assessment)',
          ),
        ],
        methods: [
          L('FUE — graftlarni bittadan olib, mikrokanallarga ekish', 'FUE — забор графтов по одному и пересадка в микроканалы', 'FUE — grafts taken one by one and placed into micro-channels'),
          L('DHI — implanter bilan kanal ochish va ekish bir harakatda', 'DHI — имплантер формирует канал и вводит графт одним движением', 'DHI — an implanter makes the channel and places the graft in one move'),
          L('Long Hair transplantatsiyasi — sochni qirqmasdan ekish', 'Long Hair — пересадка без короткой стрижки', 'Long Hair transplant — without shaving the hair short'),
          L('Soqol va mo‘ylov ekish', 'Пересадка бороды и усов', 'Beard and moustache transplant'),
          L('Operatsiyadan oldin va keyin trixologik davolash (PRP va boshqalar)', 'Трихологическое лечение до и после операции (PRP и др.)', 'Trichology treatment before and after the operation (PRP and more)'),
        ],
      }),
      L(
        "soch ekish Farg'ona, soch ko'chirish Farg'ona, soch transplantatsiyasi, FUE soch ekish, DHI, soqol ekish, soch ekish narxi, Radeski Skin Clinic",
        'пересадка волос Фергана, трансплантация волос, FUE, DHI, пересадка бороды, пересадка волос цена, Radeski Skin Clinic',
        'hair transplant Fergana, hair transplantation Uzbekistan, FUE hair transplant, DHI, beard transplant, hair transplant cost, Radeski Skin Clinic',
      ),
    ),
    // Botox: Fergana only — the injecting cosmetologist (Dr. Mangasaryan) works in Fergana.
    withKeywords(
      treatmentLanding('fargona', 'botoks', 'in-ekcionnaya-kosmetologiya', {
        name: L('Botoks', 'Ботокс', 'Botox'),
        articleRouteKeys: ['art-botoks-yoki-filler', 'art-botulinoterapiya-radeski', 'art-giperhidroz', 'art-kontur-plastika-radeski', 'art-yangi-yil-yuz-parvarishi'],
        problem: L(
          'Peshona, qosh orasi va ko‘z atrofida mimik ajinlar chuqurlashib, yuz charchagan ko‘rinadi.',
          'Мимические морщины на лбу, между бровями и вокруг глаз углубляются, лицо выглядит уставшим.',
          'Expression lines on the forehead, between the brows and around the eyes deepen and the face looks tired.',
        ),
        whoFor: [
          L('Peshona, qosh orasi yoki ko‘z atrofida mimik ajinlar', 'Мимические морщины лба, межбровья или вокруг глаз', 'Expression lines on the forehead, between the brows or around the eyes'),
          L('Tushgan lab burchaklari, bo‘yin ajinlari', 'Опущенные уголки губ, морщины шеи', 'Drooping mouth corners, neck lines'),
          L('Ajinlar chuqurlashishining oldini olmoqchi bo‘lganlar', 'Профилактика углубления морщин', 'Preventing lines from deepening'),
          L('Ortiqcha terlash (giperhidroz): qo‘ltiq osti, kaft, oyoq tagi', 'Повышенная потливость (гипергидроз): подмышки, ладони, стопы', 'Excessive sweating (hyperhidrosis): underarms, palms, soles'),
        ],
        methods: [
          L('Mimik ajinlar korreksiyasi (peshona, qosh orasi, ko‘z atrofi)', 'Коррекция мимических морщин (лоб, межбровье, вокруг глаз)', 'Expression-line correction (forehead, frown lines, crow’s feet)'),
          L('Kompleks botulinoterapiya (Full Face)', 'Комплексная ботулинотерапия (Full Face)', 'Full-face botulinum therapy'),
          L('Giperhidrozni botulotoksin bilan davolash', 'Лечение гипергидроза ботулотоксином', 'Hyperhidrosis treatment with botulinum toxin'),
          L('Preparatlar: Dysport, Relatoks, Kseomin', 'Препараты: Dysport, Релатокс, Ксеомин', 'Products: Dysport, Relatox, Xeomin'),
        ],
      }),
      L(
        "botoks Farg'ona, botulinoterapiya Farg'ona, botoks narxi, mimik ajinlar, peshona ajinlari, giperhidroz davolash, Dysport, Relatoks, Radeski Skin Clinic",
        'ботокс Фергана, ботулинотерапия Фергана, ботокс цена, мимические морщины, морщины на лбу, лечение гипергидроза, Диспорт, Релатокс, Radeski Skin Clinic',
        'botox Fergana, botulinum therapy Fergana, botox price, expression lines, forehead wrinkles, hyperhidrosis treatment, Dysport, Relatox, Radeski Skin Clinic',
      ),
    ),
    // Biorevitalization: Fergana only — the injecting cosmetologist (Dr. Mangasaryan) works there.
    withKeywords(
      treatmentLanding('fargona', 'biorevitalizatsiya', 'in-ekcionnaya-kosmetologiya', {
        name: L('Biorevitalizatsiya', 'Биоревитализация', 'Biorevitalization'),
        articleRouteKeys: ['art-mezoterapiya', 'art-biorevitalizatsiya-radeski', 'art-lazer-biorevitalizatsiya-radeski', 'art-kontur-plastika-radeski', 'art-yangi-yil-yuz-parvarishi'],
        problem: L(
          'Teri quruq, xira va sarko‘z bo‘lib qolgan, mayda ajinlar ko‘paygan.',
          'Кожа стала сухой, тусклой и вялой, появилось больше мелких морщин.',
          'The skin has become dry, dull and lax, with more fine lines.',
        ),
        whoFor: [
          L('Quruq, suvsizlangan va xira teri', 'Сухая, обезвоженная и тусклая кожа', 'Dry, dehydrated and dull skin'),
          L('Mayda ajinlar, elastiklikning pasayishi (odatda 25 yoshdan)', 'Мелкие морщины, снижение упругости (обычно с 25 лет)', 'Fine lines and loss of elasticity (usually from 25)'),
          L('Ko‘z atrofi, bo‘yin, dekolte va qo‘llar terisi', 'Кожа вокруг глаз, шеи, декольте и рук', 'Skin around the eyes, neck, décolleté and hands'),
          L('Piling, lazer yoki shlifovkadan keyin tiklanish', 'Восстановление после пилинга, лазера или шлифовки', 'Recovery after a peel, laser or resurfacing'),
        ],
        methods: [
          L('Gialuron kislotali biorevitalizantlar: ABG Lab, Revi, MesoEye', 'Биоревитализанты на гиалуроновой кислоте: ABG Lab, Revi, MesoEye', 'Hyaluronic acid biorevitalizants: ABG Lab, Revi, MesoEye'),
          L('TEOSYAL PureSense Redensity — chuqur namlantirish', 'TEOSYAL PureSense Redensity — глубокое увлажнение', 'TEOSYAL PureSense Redensity — deep hydration'),
          L('Rejuran (PDRN) — terini tiklash va chandiqlar', 'Rejuran (PDRN) — восстановление кожи и рубцы', 'Rejuran (PDRN) — skin repair and scars'),
          L('Plazmoterapiya (PRP)', 'Плазмотерапия (PRP)', 'Plasma therapy (PRP)'),
          L('Ignasiz variant: lazer biorevitalizatsiya', 'Без игл: лазерная биоревитализация', 'Needle-free: laser biorevitalization'),
        ],
      }),
      L(
        "biorevitalizatsiya Farg'ona, biorevitalizatsiya narxi, gialuron kislotasi inyeksiyasi, teri namlantirish, Rejuran, Teosyal Redensity, mezoterapiya yuz, Radeski Skin Clinic",
        'биоревитализация Фергана, биоревитализация цена, уколы гиалуроновой кислоты, увлажнение кожи, Rejuran, Teosyal Redensity, мезотерапия лица, Radeski Skin Clinic',
        'biorevitalization Fergana, biorevitalization price, hyaluronic acid injections, skin hydration, Rejuran, Teosyal Redensity, facial mesotherapy, Radeski Skin Clinic',
      ),
    ),
    // Dermal fillers: Fergana only — the injecting cosmetologist (Dr. Mangasaryan) works there.
    withKeywords(
      treatmentLanding('fargona', 'kontur-plastika', 'in-ekcionnaya-kosmetologiya', {
        name: L('Kontur plastika', 'Контурная пластика', 'Dermal fillers'),
        articleRouteKeys: ['art-botoks-yoki-filler', 'art-kontur-plastika-radeski', 'art-konturnaya-guby-radeski', 'art-botulinoterapiya-radeski', 'art-biorevitalizatsiya-radeski'],
        problem: L(
          'Lab yupqalashgan, yonoq va yuz ovali hajmini yo‘qotgan, nazolabial chiziqlar chuqurlashgan.',
          'Губы стали тоньше, скулы и овал лица потеряли объём, носогубные складки углубились.',
          'Lips have thinned, cheeks and jawline have lost volume, nasolabial folds have deepened.',
        ),
        whoFor: [
          L('Lab hajmi va konturini tuzatmoqchi bo‘lganlar', 'Коррекция объёма и контура губ', 'Lip volume and outline correction'),
          L('Nazolabial chiziqlar va tushgan lab burchaklari', 'Носогубные складки и опущенные уголки рта', 'Nasolabial folds and drooping mouth corners'),
          L('Yonoq, iyak va yuz ovalidagi yoshga bog‘liq hajm yo‘qolishi', 'Возрастная потеря объёма скул, подбородка и овала лица', 'Age-related volume loss in cheeks, chin and jawline'),
          L('Yuz asimmetriyasi; boshqa joyda kiritilgan fillerni tuzatish', 'Асимметрия лица; коррекция филлера, введённого в другом месте', 'Facial asymmetry; correcting filler placed elsewhere'),
        ],
        methods: [
          L('Lab kontur plastikasi: Juvederm Ultra Smile / Ultra 3, TEOSYAL Kiss', 'Контурная пластика губ: Juvederm Ultra Smile / Ultra 3, TEOSYAL Kiss', 'Lip fillers: Juvederm Ultra Smile / Ultra 3, TEOSYAL Kiss'),
          L('Chuqur kontur va hajm: TEOSYAL PureSense Ultra Deep, RHA 4', 'Глубокие контуры и объём: TEOSYAL PureSense Ultra Deep, RHA 4', 'Deep contouring and volume: TEOSYAL PureSense Ultra Deep, RHA 4'),
          L('Mimik zonalar uchun dinamik fillerlar: TEOSYAL RHA 1–3', 'Динамические филлеры для мимических зон: TEOSYAL RHA 1–3', 'Dynamic fillers for expressive areas: TEOSYAL RHA 1–3'),
          L('Kompleks Full Face rejasi', 'Комплексный план Full Face', 'Full-face plan'),
          L('Fillerni gialuronidaza bilan eritish', 'Растворение филлера гиалуронидазой', 'Dissolving filler with hyaluronidase'),
        ],
      }),
      L(
        "kontur plastika Farg'ona, lab kattalashtirish Farg'ona, lab filler, filler narxi, Juvederm, Teosyal, nazolabial chiziqlar, yonoq filler, Radeski Skin Clinic",
        'контурная пластика Фергана, увеличение губ Фергана, филлер для губ, филлеры цена, Juvederm, Teosyal, носогубные складки, филлер скулы, Radeski Skin Clinic',
        'dermal fillers Fergana, lip fillers Fergana, lip augmentation, filler price, Juvederm, Teosyal, nasolabial folds, cheek filler, Radeski Skin Clinic',
      ),
    ),
    treatmentLanding('fargona', 'dermatoskopiya', 'dermatoskopiya', {
      articleRouteKeys: ['art-aktinik-keratoz', 'art-melanoma', 'art-xol-tekshiruvi-dermatoskopiya'],
      name: L('Dermatoskopiya', 'Дерматоскопия', 'Dermoscopy'),
      promoSlug: 'dermataskopiya',
      problem: L("Teri o'smalari.", 'Образования кожи.', 'Skin lesions.'),
      whoFor: [L('Skrining', 'Скрининг', 'Screening')],
      methods: [L('Dermatoskop', 'Дерматоскоп', 'Dermoscope')],
    }),
    treatmentLanding('fargona', 'osma-olib-tashlash', 'dermatoonkologiya', {
      articleRouteKeys: ['art-seboreyali-keratoz', 'art-papilloma-olib-tashlash'],
      name: L("O'sma olib tashlash", 'Удаление новообразований', 'Lesion removal'),
      promoSlug: 'dermataskopiya',
      problem: L("O'smalar.", 'Новообразования.', 'Lesions.'),
      whoFor: [L('Shubhali holatlar', 'Подозрительные случаи', 'Suspicious cases')],
      methods: [L('Dermatoskopiya + jarrohlik', 'Дерматоскопия + хирургия', 'Dermoscopy + surgery')],
    }),
    treatmentLanding('fargona', 'tirnoq-zamburug', 'clinika-patologii-nogtej', {
      name: L("Tirnoq zamburug'i davolash", 'Лечение грибка ногтей', 'Nail fungus treatment'),
      promoSlug: 'podologiya',
      articleRouteKeys: ['art-mort-tirnoqlar', 'art-tirnoq-rangi-ozgarishi', 'art-teri-zamburugi', 'art-tirnoq-zamburugi'],
      problem: L('Onikomikoz.', 'Онихомикоз.', 'Onychomycosis.'),
      whoFor: [L('Tirnoq zamburug‘i', 'Грибок ногтей', 'Nail fungus')],
      methods: [L('Podolog', 'Подолог', 'Podiatrist')],
    }),
    treatmentLanding('fargona', 'ipl-fargona', 'apparatnaya-kosmetologiya', {
      name: L('IPL muolajalari', 'IPL-процедуры', 'IPL treatments'),
      promoSlug: 'ipl',
      articleRouteKeys: ['art-pigment-doglari-qishda', 'art-ipl-terapiya', 'art-ipl-lumecca-pigmentatsiya-radeski'],
      problem: L('Pigment va qizarish uchun IPL.', 'IPL при пигментации и покраснении.', 'IPL for pigmentation and redness.'),
      whoFor: [L('Pigmentatsiya', 'Пигментация', 'Pigmentation')],
      methods: [L('InMode IPL / Lumecca', 'InMode IPL / Lumecca', 'InMode IPL / Lumecca')],
    }),
    treatmentLanding('fargona', 'pigmentatsiya', 'apparatnaya-kosmetologiya', {
      articleRouteKeys: ['art-koz-osti-qorayishi', 'art-pigment-doglari-qishda', 'art-melazma'],
      name: L('Pigmentatsiya davolash', 'Лечение пигментации', 'Pigmentation treatment'),
      conditionSlug: 'teri-doglari',
      promoSlug: 'ipl',
      problem: L('Pigment dog‘lari.', 'Пигментные пятна.', 'Pigment spots.'),
      whoFor: [L('Melasma', 'Мелазма', 'Melasma')],
      methods: [L('IPL/lazer', 'IPL/лазер', 'IPL/laser')],
    }),
    treatmentLanding('fargona', 'lazer-tomir', 'apparatnaya-kosmetologiya', {
      name: L('Lazer bilan tomir olib tashlash', 'Удаление сосудов лазером', 'Laser vascular removal'),
      conditionSlug: 'yuz-qizarishi',
      articleRouteKeys: ['art-kuperoz', 'art-oyoqdagi-tomir-tori', 'art-derma-v-vascular'],
      problem: L('Tomirlar.', 'Сосуды.', 'Vessels.'),
      whoFor: [L('Kuperoz', 'Купероз', 'Couperose')],
      methods: [L('Derma V', 'Derma V', 'Derma V')],
    }),
    treatmentLanding('fargona', 'lazer-epilyatsiya', 'lazernaya-epilyaciya', {
      name: L('Lazer epilyatsiya', 'Лазерная эпиляция', 'Laser hair removal'),
      promoSlug: 'lazer-epilyatsiya',
      articleRouteKeys: ['art-lazer-epilyatsiya-kuz-qish', 'art-deka-moveo-fergana-faq', 'art-lazer-epilyatsiya-samara-xatolar'],
      problem: L('Ortiqcha tuk.', 'Избыточный рост волос.', 'Unwanted hair.'),
      whoFor: [L('Barcha zonalar', 'Все зоны', 'All zones')],
      methods: [L('DEKA MOVEO', 'DEKA MOVEO', 'DEKA MOVEO')],
    }),
    treatmentLanding('fargona', 'trixoskopiya', 'trihologiya-centr-lechenie-volos', {
      name: L('Trixoskopiya', 'Трихоскопия', 'Trichoscopy'),
      articleRouteKeys: ['art-erkaklarda-soch-tokilishi', 'art-ayollarda-soch-tokilishi', 'art-trixolog-trixoskopiya', 'art-plazmotorapiya-soch-prp'],
      problem: L("Soch holatini kattalashtirib baholash.", 'Увеличенная оценка состояния волос.', 'Magnified hair assessment.'),
      whoFor: [L("Soch to'kilishi", 'Выпадение волос', 'Hair loss')],
      methods: [L('Raqamli trixoskop', 'Цифровой трихоскоп', 'Digital trichoscope')],
    }),
    treatmentLanding('fargona', 'xol-tekshiruvi', 'dermatoskopiya', {
      name: L('Xol (dog) tekshiruvi', 'Проверка родинок', 'Mole screening'),
      promoSlug: 'dermataskopiya',
      articleRouteKeys: ['art-aktinik-keratoz', 'art-melanoma', 'art-seboreyali-keratoz', 'art-xol-tekshiruvi-dermatoskopiya', 'art-bazalioma-teri-raki'],
      problem: L("Dog'larni vaqtida tekshirish.", 'Своевременная проверка родинок.', 'Timely mole checks.'),
      whoFor: [L('Skrining', 'Скрининг', 'Screening')],
      methods: [L('Dermatoskopiya', 'Дерматоскопия', 'Dermoscopy')],
    }),
    treatmentLanding('fargona', 'biopsiya', 'dermatopatologiya', {
      name: L('Teri biopsiyasi', 'Биопсия кожи', 'Skin biopsy'),
      articleRouteKeys: ['art-teri-biopsiyasi', 'art-bazalioma-teri-raki'],
      problem: L('Gistologik tasdiq.', 'Гистологическое подтверждение.', 'Histologic confirmation.'),
      whoFor: [L("Shubhali o'sma", 'Подозрительное образование', 'Suspicious lesion')],
      methods: [L('Biopsiya', 'Биопсия', 'Biopsy'), L('Gistologiya', 'Гистология', 'Histology')],
    }),
    treatmentLanding('fargona', 'onko-dermatolog', 'dermatoonkologiya', {
      name: L('Onkodermatolog', 'Онкодерматолог', 'Oncodermatologist'),
      promoSlug: 'dermataskopiya',
      articleRouteKeys: ['art-aktinik-keratoz', 'art-melanoma', 'art-teri-biopsiyasi', 'art-bazalioma-teri-raki', 'art-til-yassi-hujayrali-rak', 'art-til-yarasi'],
      problem: L("Teri saratonini erta aniqlash.", 'Ранняя диагностика рака кожи.', 'Early skin cancer detection.'),
      whoFor: [L('Shubhali holatlar', 'Подозрительные случаи', 'Suspicious cases')],
      methods: [L('Dermatoskopiya', 'Дерматоскопия', 'Dermoscopy'), L('Biopsiya', 'Биопсия', 'Biopsy')],
    }),
    treatmentLanding('fargona', 'sogal-olib-tashlash', 'hirurgicheskaya-dermatologiya', {
      name: L("So'gal olib tashlash", 'Удаление бородавок', 'Wart removal'),
      promoSlug: 'co2-lazer',
      articleRouteKeys: ['art-plantar-sogal', 'art-papilloma-olib-tashlash', 'art-bolalarda-sogal-lazer-radeski'],
      problem: L("So'g'allar tarqalishi mumkin.", 'Бородавки могут распространяться.', 'Warts can spread.'),
      whoFor: [L('Bolalar va kattalar', 'Дети и взрослые', 'Children and adults')],
      methods: [L('CO2 lazer', 'CO2 лазер', 'CO2 laser')],
    }),
    treatmentLanding('fargona', 'qon-tomir', 'apparatnaya-kosmetologiya', {
      name: L('Qon tomir va qizarish davolash', 'Лечение сосудистой сеточки', 'Vascular redness treatment'),
      conditionSlug: 'yuz-qizarishi',
      articleRouteKeys: ['art-kuperoz', 'art-oyoqdagi-tomir-tori', 'art-derma-v-vascular', 'art-derma-v-qizarish-radeski'],
      problem: L('Tomirlar va qizarish.', 'Сосудистая сетка.', 'Vessels and redness.'),
      whoFor: [L('Kuperoz/rozasea', 'Купероз/розацеа', 'Couperose/rosacea')],
      methods: [L('Derma V / IPL', 'Derma V / IPL', 'Derma V / IPL')],
    }),
  ];
}

// Articles scheduled for a later date are not linked yet (see scripts/buildArticleIndex.ts).
// Topics with full lists (localLandingLists) replace the catalog's short placeholders.
export const ALL_LOCAL_COMMERCIAL_LANDINGS: LocalCommercialLanding[] = [
  ...buildKokandLandings(),
  ...buildFerganaLandings(),
].map((landing) => {
  const lists = LANDING_LISTS[landing.slug === 'ipl-qoqon' || landing.slug === 'ipl-fargona' ? 'ipl' : landing.slug];
  const withLists = lists ? { ...landing, whoFor: lists.whoFor, methods: lists.methods } : landing;
  return withLists.articleRouteKeys
    ? { ...withLists, articleRouteKeys: withLists.articleRouteKeys.filter((key) => !SCHEDULED_ARTICLE_ROUTE_KEYS.includes(key)) }
    : withLists;
});

export function getLocalCommercialLanding(city: LocalSeoCity, slug: string): LocalCommercialLanding | undefined {
  return ALL_LOCAL_COMMERCIAL_LANDINGS.find((item) => item.city === city && item.slug === slug);
}

export function getLocalCommercialFromPathname(pathname: string): { city: LocalSeoCity; slug: string } | null {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length < 3) return null;
  const citySegment = segments[1];
  if (citySegment !== 'qoqon' && citySegment !== 'fargona') return null;
  try {
    const slug = decodeURIComponent(segments[2]);
    if (getLocalCommercialLanding(citySegment, slug)) {
      return { city: citySegment, slug };
    }
  } catch {
    return null;
  }
  return null;
}

/** True when URL looks like /{locale}/{qoqon|fargona}/{slug} but slug is not in catalog. */
export function isCityCommercialPathAttempt(pathname: string): boolean {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length < 3) return false;
  return segments[1] === 'qoqon' || segments[1] === 'fargona';
}

export function localCommercialPath(locale: Locale, city: LocalSeoCity, slug: string): string {
  return `/${locale}/${city}/${encodeURIComponent(slug)}`;
}

export function getCityCommercialLinks(city: LocalSeoCity): LocalCommercialLanding[] {
  return ALL_LOCAL_COMMERCIAL_LANDINGS.filter((item) => item.city === city);
}

export function getLocalizedCopy(copy: LocalizedCopy, locale: Locale): string {
  return copy[locale] || copy.uz;
}
