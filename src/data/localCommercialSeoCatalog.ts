import type { Locale } from '../types';

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
    ru: 'Дermatология, трихология, подология и диагностика в одной клинике',
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
      `Запишитесь к ${specialist.ru.toLowerCase()} в ${c('ru')}. Составляется индивидуальный план лечения.`,
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
    faqs: [
      {
        question: L(`${c('uz')} qabulga qanday yozilaman?`, `Как записаться в ${c('ru')}?`, `How to book in ${c('en')}?`),
        answer: L(
          'Saytdagi «Qabulga yozilish» tugmasi yoki filial telefon raqami orqali.',
          'Через кнопку «Запись на приём» на сайте или по телефону филиала.',
          'Via the Book appointment button or branch phone.',
        ),
      },
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
    faqs: [
      {
        question: L('Birinchi qadam nima?', 'С чего начать?', 'What is the first step?'),
        answer: L(
          'Mutaxassis konsultatsiyasi va kerak bo‘lsa diagnostika.',
          'Консультация специалиста и диагностика при необходимости.',
          'Specialist consultation and diagnostics if needed.',
        ),
      },
      {
        question: L('Natijalar qayerda?', 'Где результаты?', 'Where are results?'),
        answer: L(
          'Saytdagi «Natijalar» bo‘limida klinik holatlar mavjud.',
          'Клинические случаи в разделе «Результаты» на сайте.',
          'Clinical cases in the Results section on the site.',
        ),
      },
    ],
  };
}

function buildKokandLandings(): LocalCommercialLanding[] {
  return [
    specialistLanding('qoqon', 'dermatolog', 'dermatologiya', L('Dermatolog', 'Дermatolog', 'Dermatologist'), ['art-akne', 'art-psoriasis-daavlin-kokand']),
    specialistLanding('qoqon', 'trixolog', 'trihologiya-centr-lechenie-volos', L('Trixolog', 'Трихolog', 'Trichologist'), ['art-thulium-laser-hair-kokand', 'art-plazmotorapiya-soch-prp']),
    specialistLanding('qoqon', 'podolog', 'clinika-patologii-nogtej', L('Podolog', 'Подolog', 'Podiatrist'), ['art-onixokriptoz-klinik-holat']),
    treatmentLanding('qoqon', 'akne-davolash', 'dermatologiya', {
      name: L('Akne davolash', 'Лечение акне', 'Acne treatment'),
      conditionSlug: 'acne',
      articleRouteKeys: ['art-akne', 'art-pryshchi-u-vzroslykh'],
      problem: L('Akne va postakne teri sifatini buzadi.', 'Акне и постакне ухудшают кожу.', 'Acne and post-acne affect skin quality.'),
      whoFor: [L('Yoshlar va kattalar', 'Подростки и взрослые', 'Teens and adults')],
      methods: [L('Dermatolog ko‘rigi', 'Осмотр дерматologa', 'Dermatologist exam'), L('Terapiya va apparatlar', 'Терапия и аппараты', 'Therapy and devices')],
    }),
    treatmentLanding('qoqon', 'soch-tokilish', 'trihologiya-centr-lechenie-volos', {
      name: L("Soch to'kilishi davolash", 'Лечение выпадения волос', 'Hair loss treatment'),
      articleRouteKeys: ['art-thulium-laser-hair-kokand', 'art-plazmotorapiya-soch-prp'],
      problem: L("Soch to'kilishi turli sabablarga ko'ra bo'lishi mumkin.", 'Выпадение волос имеет разные причины.', 'Hair loss has various causes.'),
      whoFor: [L('Soch siyraklashgan bemorlar', 'При поредении волос', 'Thinning hair')],
      methods: [L('Trixolog va trixoskopiya', 'Трихolog и трихоскопия', 'Trichologist and trichoscopy'), L('PRP va kurs davolash', 'PRP и курс лечения', 'PRP and treatment course')],
    }),
    treatmentLanding('qoqon', 'tirnoq-zamburug', 'clinika-patologii-nogtej', {
      name: L("Tirnoq zamburug'i davolash", 'Лечение грибка ногтей', 'Nail fungus treatment'),
      promoSlug: 'podologiya',
      problem: L('Onikomikoz tirnoq qalinlashishi bilan kechadi.', 'Онихомикоз — утолщение ногтя.', 'Onychomycosis thickens the nail.'),
      whoFor: [L('Uzoq davom etgan zamburug', 'Длительный грибок', 'Long-standing fungus')],
      methods: [L('Podolog ko‘rigi', 'Осмотр подologa', 'Podiatrist exam'), L('Kompleks terapiya', 'Комплексная терапия', 'Combined therapy')],
    }),
    treatmentLanding('qoqon', 'osma-olib-tashlash', 'dermatoonkologiya', {
      name: L("O'sma olib tashlash", 'Удаление новообразований', 'Lesion removal'),
      promoSlug: 'dermataskopiya',
      problem: L("Teri o'smalarini vaqtida baholash muhim.", 'Своевременная оценка образований важна.', 'Timely lesion assessment matters.'),
      whoFor: [L("Yangi yoki o'sib borayotgan dog'", 'Новое или растущее образование', 'New or growing lesion')],
      methods: [L('Dermatoskopiya', 'Дерматоскопия', 'Dermoscopy'), L('Jarrohlik yoki lazer', 'Хирургия или лазер', 'Surgery or laser')],
    }),
    treatmentLanding('qoqon', 'psoriaz-davolash', 'dermatologiya', {
      name: L('Psoriaz davolash', 'Лечение псoriasis', 'Psoriasis treatment'),
      conditionSlug: 'psoriaz',
      promoSlug: 'fototerapiya',
      articleRouteKeys: ['art-psoriasis-daavlin-kokand'],
      problem: L('Psoriaz surunkali kasallik.', 'Псoriasis — хроническое заболевание.', 'Psoriasis is chronic.'),
      whoFor: [L('Surunkali psoriaz', 'Хронический псoriasis', 'Chronic psoriasis')],
      methods: [L('Terapiya', 'Терапия', 'Therapy'), L('Daavlin fototerapiya', 'Фототерапия Daavlin', 'Daavlin phototherapy')],
      equipmentNote: L('Fototerapiya Daavlin kabinalarida.', 'Фототерапия в кабинах Daavlin.', 'Phototherapy in Daavlin cabins.'),
    }),
    treatmentLanding('qoqon', 'vitiligo-davolash', 'dermatologiya', {
      name: L('Vitiligo davolash', 'Лечение витилиgo', 'Vitiligo treatment'),
      conditionSlug: 'vitiligo',
      articleRouteKeys: ['art-vitiligo-daavlin'],
      problem: L('Vitiligo pigment yo‘qolishi bilan kechadi.', 'Витилиgo — потеря пигмента.', 'Vitiligo involves pigment loss.'),
      whoFor: [L('Oq dog‘lar', 'Белые пятна', 'White patches')],
      methods: [L('Fototerapiya', 'Фототерапия', 'Phototherapy'), L('Kuzatuv', 'Наблюдение', 'Follow-up')],
    }),
    treatmentLanding('qoqon', 'rozasea-davolash', 'dermatologiya', {
      name: L('Rozasea davolash', 'Лечение розацеа', 'Rosacea treatment'),
      conditionSlug: 'rozasea',
      articleRouteKeys: ['art-rozatseya-davolash-radeski'],
      problem: L('Yuz qizarishi va tomirlar.', 'Покраснение и сосуды.', 'Redness and vessels.'),
      whoFor: [L('Doimiy qizarish', 'Постоянное покраснение', 'Persistent redness')],
      methods: [L('Terapiya', 'Терапия', 'Therapy'), L('IPL/lazer', 'IPL/лазер', 'IPL/laser')],
    }),
    treatmentLanding('qoqon', 'pigmentatsiya', 'apparatnaya-kosmetologiya', {
      name: L('Pigmentatsiya davolash', 'Лечение пигментации', 'Pigmentation treatment'),
      conditionSlug: 'teri-doglari',
      promoSlug: 'ipl',
      articleRouteKeys: ['art-lasemd-ultra-kokand', 'art-ipl-lumecca-pigmentatsiya-radeski'],
      problem: L('Pigment dog‘lari va melasma.', 'Пigmentные пятна и мелазма.', 'Pigment spots and melasma.'),
      whoFor: [L('Dog‘lar va postakne', 'Пятна и постакне', 'Spots and post-acne')],
      methods: [L('IPL/lazer', 'IPL/лазер', 'IPL/laser'), L('SPF parvarish', 'SPF и уход', 'SPF and care')],
    }),
    treatmentLanding('qoqon', 'lazer-epilyatsiya', 'lazernaya-epilyaciya', {
      name: L('Lazer epilyatsiya', 'Лазерная эпиляция', 'Laser hair removal'),
      promoSlug: 'lazer-epilyatsiya',
      articleRouteKeys: ['art-deka-moveo-fergana-faq'],
      problem: L('Ortiqcha tukni uzoq muddat kamaytirish.', 'Длительное уменьшение роста волос.', 'Long-term hair reduction.'),
      whoFor: [L('Barcha anatomik zonalar', 'Все зоны', 'All body areas')],
      methods: [L('DEKA MOVEO lazer', 'Лазер DEKA MOVEO', 'DEKA MOVEO laser'), L('Kurs rejasi', 'Курс процедур', 'Treatment course')],
    }),
    treatmentLanding('qoqon', 'dermatoskopiya', 'dermatoskopiya', {
      name: L('Dermatoskopiya', 'Дерматоскопия', 'Dermoscopy'),
      promoSlug: 'dermataskopiya',
      problem: L("Teri o'smalarini batafsil ko'rish.", 'Детальный осмотр образований.', 'Detailed lesion examination.'),
      whoFor: [L("Shubhali dog'", 'Подозрительные образования', 'Suspicious lesions')],
      methods: [L('Raqamli dermatoskop', 'Цифровой дерматоскоп', 'Digital dermoscope'), L('Mutaxassis xulosasi', 'Заключение специалиста', 'Specialist conclusion')],
    }),
    treatmentLanding('qoqon', 'qon-tomir', 'apparatnaya-kosmetologiya', {
      name: L('Qon tomir va qizarish davolash', 'Лечение сосудистой сеточки', 'Vascular redness treatment'),
      conditionSlug: 'yuz-qizarishi',
      articleRouteKeys: ['art-derma-v-vascular', 'art-derma-v-qizarish-radeski'],
      problem: L('Tomirlar va qizarish.', 'Сосудистая сетка и покраснение.', 'Vessels and redness.'),
      whoFor: [L('Kuperoz/rozasea', 'Кuperoz/розацеа', 'Couperose/rosacea')],
      methods: [L('Derma V / IPL', 'Derma V / IPL', 'Derma V / IPL'), L('Kurs', 'Курс', 'Course')],
    }),
    treatmentLanding('qoqon', 'sogal-olib-tashlash', 'hirurgicheskaya-dermatologiya', {
      name: L("So'gal olib tashlash", 'Удаление бородavok', 'Wart removal'),
      promoSlug: 'co2-lazer',
      articleRouteKeys: ['art-bolalarda-sogal-lazer-radeski'],
      problem: L("So'g'allar tarqalishi mumkin.", 'Борodavки могут распространяться.', 'Warts can spread.'),
      whoFor: [L('Bolalar va kattalar', 'Дети и взрослые', 'Children and adults')],
      methods: [L('CO2 lazer', 'CO2 лазер', 'CO2 laser'), L('Podolog/dermatolog', 'Подolog/дерматolog', 'Podiatrist/dermatologist')],
    }),
  ];
}

function buildFerganaLandings(): LocalCommercialLanding[] {
  return [
    specialistLanding('fargona', 'dermatolog', 'dermatologiya', L('Dermatolog', 'Дermatolog', 'Dermatologist'), ['art-akne', 'art-ipl-terapiya']),
    specialistLanding('fargona', 'trixolog', 'trihologiya-centr-lechenie-volos', L('Trixolog', 'Трихolog', 'Trichologist'), ['art-plazmotorapiya-soch-prp']),
    specialistLanding('fargona', 'podolog', 'clinika-patologii-nogtej', L('Podolog', 'Подolog', 'Podiatrist'), []),
    treatmentLanding('fargona', 'akne-davolash', 'dermatologiya', {
      name: L('Akne davolash', 'Лечение акне', 'Acne treatment'),
      conditionSlug: 'acne',
      articleRouteKeys: ['art-akne'],
      problem: L('Akne va postakne.', 'Акне и постакне.', 'Acne and post-acne.'),
      whoFor: [L('Yoshlar va kattalar', 'Подростки и взрослые', 'Teens and adults')],
      methods: [L('Dermatolog', 'Дermatolog', 'Dermatologist'), L('Terapiya', 'Терапия', 'Therapy')],
    }),
    treatmentLanding('fargona', 'psoriaz-davolash', 'dermatologiya', {
      name: L('Psoriaz davolash', 'Лечение псoriasis', 'Psoriasis treatment'),
      conditionSlug: 'psoriaz',
      promoSlug: 'fototerapiya',
      problem: L('Surunkali psoriaz.', 'Хронический псoriasis.', 'Chronic psoriasis.'),
      whoFor: [L('Plakalar', 'Бляшки', 'Plaques')],
      methods: [L('Daavlin fototerapiya', 'Фототерапия Daavlin', 'Daavlin phototherapy'), L('Terapiya', 'Терапия', 'Therapy')],
    }),
    treatmentLanding('fargona', 'vitiligo-davolash', 'dermatologiya', {
      name: L('Vitiligo davolash', 'Лечение витилиgo', 'Vitiligo treatment'),
      conditionSlug: 'vitiligo',
      articleRouteKeys: ['art-vitiligo-daavlin'],
      problem: L('Pigment yo‘qolishi.', 'Потеря пигмента.', 'Pigment loss.'),
      whoFor: [L('Vitiligo', 'Витилиgo', 'Vitiligo')],
      methods: [L('Fototerapiya', 'Фототерапия', 'Phototherapy')],
    }),
    treatmentLanding('fargona', 'rozasea-davolash', 'dermatologiya', {
      name: L('Rozasea davolash', 'Лечение розацеа', 'Rosacea treatment'),
      conditionSlug: 'rozasea',
      articleRouteKeys: ['art-rozatseya-davolash-radeski'],
      problem: L('Qizarish.', 'Покраснение.', 'Redness.'),
      whoFor: [L('Rozasea', 'Розацеа', 'Rosacea')],
      methods: [L('Terapiya + IPL', 'Терапия + IPL', 'Therapy + IPL')],
    }),
    treatmentLanding('fargona', 'soch-tokilish', 'trihologiya-centr-lechenie-volos', {
      name: L("Soch to'kilishi davolash", 'Лечение выпадения волос', 'Hair loss treatment'),
      articleRouteKeys: ['art-plazmotorapiya-soch-prp'],
      problem: L("Soch to'kilishi.", 'Выпадение волос.', 'Hair loss.'),
      whoFor: [L('Alopecia', 'Алопеция', 'Alopecia')],
      methods: [L('PRP', 'PRP', 'PRP'), L('Trixolog', 'Трихolog', 'Trichologist')],
    }),
    treatmentLanding('fargona', 'dermatoskopiya', 'dermatoskopiya', {
      name: L('Dermatoskopiya', 'Дерматоскопия', 'Dermoscopy'),
      promoSlug: 'dermataskopiya',
      problem: L("Teri o'smalari.", 'Образования кожи.', 'Skin lesions.'),
      whoFor: [L('Skrining', 'Скрining', 'Screening')],
      methods: [L('Dermatoskop', 'Дерматоскоп', 'Dermoscope')],
    }),
    treatmentLanding('fargona', 'osma-olib-tashlash', 'dermatoonkologiya', {
      name: L("O'sma olib tashlash", 'Удаление новообразований', 'Lesion removal'),
      promoSlug: 'dermataskopiya',
      problem: L("O'smalar.", 'Новообразования.', 'Lesions.'),
      whoFor: [L('Shubhali holatlar', 'Подозрительные случаи', 'Suspicious cases')],
      methods: [L('Dermatoskopiya + jarrohlik', 'Дерматоскопия + хирургия', 'Dermoscopy + surgery')],
    }),
    treatmentLanding('fargona', 'tirnoq-zamburug', 'clinika-patologii-nogtej', {
      name: L("Tirnoq zamburug'i davolash", 'Лечение грибка ногтей', 'Nail fungus treatment'),
      promoSlug: 'podologiya',
      problem: L('Onikomikoz.', 'Онихомикоз.', 'Onychomycosis.'),
      whoFor: [L('Tirnoq zamburug‘i', 'Грибок ногтей', 'Nail fungus')],
      methods: [L('Podolog', 'Подolog', 'Podiatrist')],
    }),
    treatmentLanding('fargona', 'ipl-fargona', 'apparatnaya-kosmetologiya', {
      name: L('IPL muolajalari', 'IPL-процедуры', 'IPL treatments'),
      promoSlug: 'ipl',
      articleRouteKeys: ['art-ipl-terapiya', 'art-ipl-lumecca-pigmentatsiya-radeski'],
      problem: L('Pigment va qizarish uchun IPL.', 'IPL при пигментации и покраснении.', 'IPL for pigmentation and redness.'),
      whoFor: [L('Pigmentatsiya', 'Пigментация', 'Pigmentation')],
      methods: [L('InMode IPL / Lumecca', 'InMode IPL / Lumecca', 'InMode IPL / Lumecca')],
    }),
    treatmentLanding('fargona', 'pigmentatsiya', 'apparatnaya-kosmetologiya', {
      name: L('Pigmentatsiya davolash', 'Лечение пигментации', 'Pigmentation treatment'),
      conditionSlug: 'teri-doglari',
      promoSlug: 'ipl',
      problem: L('Pigment dog‘lari.', 'Пigmentные пятна.', 'Pigment spots.'),
      whoFor: [L('Melasma', 'Мелазма', 'Melasma')],
      methods: [L('IPL/lazer', 'IPL/лазер', 'IPL/laser')],
    }),
    treatmentLanding('fargona', 'lazer-tomir', 'apparatnaya-kosmetologiya', {
      name: L('Lazer bilan tomir olib tashlash', 'Удаление сосудов лазером', 'Laser vascular removal'),
      conditionSlug: 'yuz-qizarishi',
      articleRouteKeys: ['art-derma-v-vascular'],
      problem: L('Tomirlar.', 'Сосуды.', 'Vessels.'),
      whoFor: [L('Kuperoz', 'Кuperoz', 'Couperose')],
      methods: [L('Derma V', 'Derma V', 'Derma V')],
    }),
    treatmentLanding('fargona', 'lazer-epilyatsiya', 'lazernaya-epilyaciya', {
      name: L('Lazer epilyatsiya', 'Лазерная эпиляция', 'Laser hair removal'),
      promoSlug: 'lazer-epilyatsiya',
      articleRouteKeys: ['art-deka-moveo-fergana-faq'],
      problem: L('Ortiqcha tuk.', 'Избыточный рост волос.', 'Unwanted hair.'),
      whoFor: [L('Barcha zonalar', 'Все зоны', 'All zones')],
      methods: [L('DEKA MOVEO', 'DEKA MOVEO', 'DEKA MOVEO')],
    }),
  ];
}

export const ALL_LOCAL_COMMERCIAL_LANDINGS: LocalCommercialLanding[] = [
  ...buildKokandLandings(),
  ...buildFerganaLandings(),
];

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

export function localCommercialPath(locale: Locale, city: LocalSeoCity, slug: string): string {
  return `/${locale}/${city}/${encodeURIComponent(slug)}`;
}

export function getCityCommercialLinks(city: LocalSeoCity): LocalCommercialLanding[] {
  return ALL_LOCAL_COMMERCIAL_LANDINGS.filter((item) => item.city === city);
}

export function getLocalizedCopy(copy: LocalizedCopy, locale: Locale): string {
  return copy[locale] || copy.uz;
}
