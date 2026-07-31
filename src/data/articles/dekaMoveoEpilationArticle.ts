import type { Article, ArticleRichContent, Locale } from '../../types';

type LocalizedArticleCatalog = Record<
  Locale,
  {
    summary: string;
    body: string;
    keyTakeaways: string[];
    faq: ArticleRichContent['faq'];
    tags: string[];
    whenToSeeDoctor: string[];
  }
>;

function uzBody(): string {
  return `## Nima uchun tayyorgarlik muhim?

Lazer epilyatsiya — istalmagan tuklarni uzoq muddatga kamaytirishning eng samarali usullaridan biri. Lekin natija faqat jihoz sifatiga emas, balki to‘g‘ri tayyorgarlikka ham bog‘liq.

Radeski Skin Clinic’da muolajalar Italiyaning premium aleksandrit lazeri **DEKA Motus AX** (Moveo texnologiyasi) da o‘tkaziladi. Bu zamonaviy tizim samaradorlik, xavfsizlik va qulaylikni birlashtiradi.

## Nima uchun aleksandrit lazer «oltin standart» hisoblanadi?

Aleksandrit lazer **755 nm** to‘lqin uzunligida ishlaydi. Bu diapazon soch pigmenti — melanin tomonidan yaxshi yutiladi. Energiya asosan soch ildiziga yo‘naltiriladi, atrofdagi teriga esa ortiqcha zarar yetkazmasdan follikulani nishonga oladi.

Bu quyidagilarni beradi:

- tuklarni samarali yo‘qotish;
- ishlov berilgan tuklarning tezroq to‘kilishi;
- kamroq seanslar soni;
- uzoq saqlanadigan natija;
- katta zonalarni qisqa vaqtda ishlov berish imkoniyati.

## DEKA Moveo oddiy aleksandrit lazerlardan nima bilan farq qiladi?

Klassik aleksandrit lazerlar ko‘pincha kuchli yakka impuls (flash) bilan ishlaydi.

**DEKA Moveo** esa Moveo texnologiyasidan foydalanadi: nasadka teri bo‘ylab uzluksiz harakatlanadi va follikulani bosqichma-bosqich, tekis qizdiradi.

Afzalliklari:

- sezilarli darajada kamroq noqulaylik;
- kuyish xavfining pastligi;
- butun zonaning tekis ishlovi;
- sezgir joylarda ham ishlash imkoniyati;
- dastlabki seanslardan keyin ham yuqori samaradorlik.

Shuning uchun DEKA Moveo eng qulay aleksandrit lazerlardan biri hisoblanadi.

## Muolajaga qanday tayyorlanish kerak?

### 4 hafta oldin

Tuklarni ildizi bilan olib tashlamang:

- mum;
- shugaring;
- epilyator;
- pintset.

Lazerga follikula kerak — u bo‘lmasa, nishonga olish mumkin emas.

### 2 hafta oldin

Quyidagilardan saqlaning:

- kuchli quyoshga yonish;
- solyariy;
- avtozagar.

Yangi zagar teridagi melaninni oshiradi: ta’sirlashish xavfi ortadi, samaradorlik esa pasayishi mumkin.

### 1–2 kun oldin

Oddiy stanok bilan ehtiyotkorlik bilan qirqing. Muolaja oldidan optimal uzunlik — taxminan **1 mm**. Depilyatsiya kremlarini ishlatmang.

### Muolaja kuni

Teri bo‘lishi kerak:

- toza;
- quruq;
- kremsiz;
- yog‘siz;
- deodorantssiz (qo‘ltiq osti epilyatsiyasida);
- dekorativ kosmetikasiz (yuz zonasida).

## Muolaja paytida nima seziladi?

Moveo tufayli ko‘p bemorlar faqat yengil issiqlik yoki sancish hissini sezadi. Keyin tuklar atrofida biroz qizarish bo‘lishi mumkin — bu odatda bir necha soat ichida o‘tadigan normal reaksiya.

## Muolajadan keyin nima qilmaslik kerak?

Dastlabki **2–3 kun**:

- sauna va hammomga bormang;
- juda issiq vannadan saqlaning;
- agressiv skrablar ishlatmang;
- quyoshga yonmang.

Ochiq joylar quyoshga tushsa — majburiy **SPF 50**.

## Necha marta muolaja kerak?

Lazer faqat o‘sishning faol fazasidagi tuklarga ta’sir qiladi. Shuning uchun odatda **6–8** seanslik kurs kerak bo‘ladi; oraliqni shifokor individual belgilaydi. Seanslar soni zona, gormonal fon, tuk rangi va zichligiga bog‘liq.

## Nima uchun Radeski Skin Clinic?

Lazer epilyatsiya — tibbiy muolaja. Muhimi nafaqat apparat, balki mutaxassis tajribasi ham.

Bizda:

- zamonaviy aleksandrit lazer DEKA Motus AX Moveo (Italiya);
- teri fototipi va tuk xususiyatiga mos individual parametrlar;
- yuqori xavfsizlik darajasi;
- sezgir zonalarda ham qulay muolaja;
- xalqaro lazer epilyatsiya protokollariga rioya;
- steril, tibbiy yondashuv;
- ortiqcha seanslarni majburlamasdan ochiq tavsiyalar.

Maqsadimiz — faqat tuklarni yo‘qotish emas, balki jarayonni xavfsiz, qulay va samarali qilish.

Radeski Skin Clinic’da konsultatsiyaga yoziling — mutaxassislaringiz DEKA Moveo aleksandrit lazerida individual kurs tuzib, silliq teriga xavfsiz va qulay yo‘lni belgilaydi.`;
}

function ruBody(): string {
  return `## Почему важна подготовка?

Лазерная эпиляция — один из самых эффективных способов надолго уменьшить нежелательные волосы. Но результат зависит не только от аппарата, но и от правильной подготовки.

В Radeski Skin Clinic процедуры проводят на премиальном александритовом лазере **DEKA Motus AX** с технологией Moveo — современном решении, которое сочетает эффективность, безопасность и комфорт.

## Почему александритовый лазер считают «золотым стандартом»?

Александритовый лазер работает на длине волны **755 нм**, которая хорошо поглощается меланином — пигментом волоса. Энергия концентрируется в волосяной луковице и разрушает её, минимально затрагивая окружающую кожу.

Это даёт:

- высокую эффективность удаления волос;
- быстрое выпадение обработанных волос;
- меньшее число процедур;
- длительный результат;
- возможность обрабатывать большие зоны за короткое время.

## Чем DEKA Moveo отличается от обычных александритовых лазеров?

Классические александритовые лазеры чаще работают одиночными мощными вспышками.

**DEKA Moveo** использует технологию Moveo: насадка непрерывно движется по коже и постепенно, равномерно нагревает фолликул.

Преимущества:

- значительно меньше неприятных ощущений;
- минимальный риск ожога;
- равномерная обработка всей зоны;
- возможность работать на чувствительных участках;
- высокая эффективность уже после первых процедур.

Именно поэтому DEKA Moveo считают одним из самых комфортных александритовых лазеров.

## Как правильно подготовиться?

### За 4 недели

Не удаляйте волосы с корнем:

- воском;
- шугарингом;
- эпилятором;
- пинцетом.

Лазеру нужен волосяной фолликул — без него воздействовать не на что.

### За 2 недели

Избегайте:

- интенсивного загара;
- солярия;
- автозагара.

Свежий загар повышает меланин в коже: растёт риск раздражения и может снизиться эффективность.

### За 1–2 дня

Аккуратно сбрейте волосы обычным станком. Оптимальная длина перед процедурой — около **1 мм**. Кремы для депиляции не используйте.

### В день процедуры

Кожа должна быть:

- чистой;
- сухой;
- без кремов;
- без масел;
- без дезодоранта (при эпиляции подмышек);
- без декоративной косметики (при обработке лица).

## Что чувствует пациент во время процедуры?

Благодаря Moveo большинство пациентов ощущают лишь лёгкое тепло или покалывание. После процедуры возможно небольшое покраснение вокруг волосков — нормальная реакция, которая обычно проходит за несколько часов.

## Что нельзя делать после процедуры?

В первые **2–3 дня**:

- не посещать сауну и баню;
- не принимать очень горячие ванны;
- не использовать агрессивные скрабы;
- не загорать.

Если зона открыта солнцу — обязательно **SPF 50**.

## Сколько процедур понадобится?

Лазер действует только на волосы в активной фазе роста. Поэтому обычно нужен курс из **6–8** процедур; интервалы подбирает врач. Число сеансов зависит от зоны, гормонального фона, цвета и плотности волос.

## Почему выбирают Radeski Skin Clinic?

Лазерная эпиляция — медицинская процедура. Важны и аппарат, и опыт специалиста.

Мы предлагаем:

- современный александритовый лазер DEKA Motus AX Moveo (Италия);
- индивидуальный подбор параметров под фототип кожи и особенности волос;
- высокий уровень безопасности;
- комфорт даже на чувствительных участках;
- соблюдение международных протоколов;
- стерильность и медицинский подход;
- честные рекомендации без навязывания лишних процедур.

Наша цель — не просто удалить волосы, а сделать процедуру максимально безопасной, комфортной и эффективной.

Запишитесь на консультацию в Radeski Skin Clinic — специалисты составят индивидуальный курс на александритовом лазере DEKA Moveo, чтобы добиться гладкой кожи безопасно и комфортно.`;
}

function enBody(): string {
  return `## Why preparation matters

Laser hair removal is one of the most effective ways to reduce unwanted hair for the long term. Results depend not only on the device, but also on proper preparation.

At Radeski Skin Clinic, treatments are performed on the premium alexandrite laser **DEKA Motus AX** with Moveo technology — a modern system that combines effectiveness, safety, and comfort.

## Why is alexandrite considered a “gold standard”?

Alexandrite lasers work at **755 nm**, a wavelength well absorbed by melanin in the hair. Energy is focused on the follicle and targets it while sparing surrounding skin as much as possible.

This supports:

- effective hair reduction;
- faster shedding of treated hairs;
- fewer sessions overall;
- lasting results;
- treatment of larger areas in less time.

## How is DEKA Moveo different?

Classic alexandrite lasers often use single high-power pulses.

**DEKA Moveo** uses Moveo technology: the handpiece glides continuously over the skin and heats the follicle gradually and evenly.

Benefits include:

- markedly less discomfort;
- lower burn risk;
- even coverage of the whole area;
- suitability for sensitive zones;
- strong results even after early sessions.

That is why DEKA Moveo is regarded as one of the most comfortable alexandrite systems.

## How to prepare

### 4 weeks before

Do not remove hair by the root:

- wax;
- sugaring;
- epilator;
- tweezers.

The laser needs the follicle — without it, there is nothing to target.

### 2 weeks before

Avoid:

- intense sun exposure;
- tanning beds;
- self-tanners.

Fresh tan raises skin melanin, which can increase irritation risk and reduce effectiveness.

### 1–2 days before

Shave carefully with a regular razor. Ideal length before treatment is about **1 mm**. Do not use depilatory creams.

### On the day

Skin should be:

- clean;
- dry;
- free of creams;
- free of oils;
- without deodorant (for underarms);
- without makeup (for the face).

## What does the procedure feel like?

With Moveo, most patients feel only mild warmth or tingling. Mild redness around hairs afterward is a normal reaction and usually settles within a few hours.

## Aftercare: what to avoid

For the first **2–3 days**:

- skip saunas and steam baths;
- avoid very hot baths;
- do not use harsh scrubs;
- do not tan.

If the area is sun-exposed, use **SPF 50**.

## How many sessions are needed?

The laser acts only on hairs in the active growth phase. A typical course is **6–8** sessions; intervals are set by the doctor. Session count depends on the area, hormones, hair colour, and density.

## Why Radeski Skin Clinic?

Laser hair removal is a medical procedure. Both the device and the specialist’s experience matter.

We offer:

- modern alexandrite laser DEKA Motus AX Moveo (Italy);
- settings tailored to skin phototype and hair characteristics;
- a high safety standard;
- comfort even on sensitive areas;
- international laser-epilation protocols;
- sterile, medical care;
- honest advice without unnecessary upselling.

Our goal is not only hair reduction, but a procedure that is as safe, comfortable, and effective as possible.

Book a consultation at Radeski Skin Clinic — our specialists will build an individual DEKA Moveo course for smooth skin, safely and comfortably.`;
}

export const DEKA_MOVEO_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'DEKA Moveo aleksandrit lazerida epilyatsiya Farg‘ona va Qo‘qonda: 4 haftalik tayyorgarlik, muolaja kuni, keyingi parvarish va Radeski Skin Clinic’da nima kutadi.',
    body: uzBody(),
    keyTakeaways: [
      'Aleksandrit 755 nm — melaninga yo‘naltirilgan «oltin standart»',
      'Moveo — uzluksiz harakat; kamroq noqulaylik va tekis ishlov',
      '4 hafta ildizdan olib tashlash mumkin emas; 1–2 kun oldin ~1 mm qirqish',
      'Kurs odatda 6–8 seans; oraliqni shifokor belgilaydi',
    ],
    tags: ['Lazer epilyatsiya', 'DEKA Moveo', 'Aleksandrit', 'Tayyorgarlik', 'Motus AX', 'Fargona', 'Qoqon', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Birinchi marta lazer epilyatsiya rejalashtirilayotgan bo‘lsa',
      'Teri fototipi yoki gormonal holat noaniq bo‘lsa',
      'Sezgir zona yoki oldingi kuyish tarixi bo‘lsa',
      'Yozgi zagar yoki dorilar fonida shubha bo‘lsa',
      'Oraliq seanslar va parvarish bo‘yicha savol bo‘lsa',
    ],
    faq: [
      {
        question: 'Seanslar orasida qirqish mumkinmi?',
        answer:
          'Ha. Qirqish ruxsat etiladi va hatto tavsiya qilinadi. Taqiqlangan narsa — tukni ildizi bilan olib tashlash (mum, shugaring, epilyator, pintset).',
      },
      {
        question: 'Aleksandrit hammaga mosmi?',
        answer:
          'Eng yaxshi natija odatda ochiqroq teri va to‘qroq tuklarda kuzatiladi. Muolajadan oldin shifokor fototipni baholab, optimal taktikalarni belgilaydi.',
      },
      {
        question: 'Tuklar qachon to‘kiladi?',
        answer:
          'Odatda muolajadan 7–14 kun o‘tgach to‘kilish boshlanadi.',
      },
      {
        question: 'Yozda qilish mumkinmi?',
        answer:
          'Ha, agar shifokor tavsiyalariga rioya qilsangiz, faol zagardan saqlansangiz va quyoshdan himoya kremi ishlatsangiz.',
      },
    ],
  },
  ru: {
    summary:
      'Подготовка к лазерной эпиляции DEKA Moveo в Фергане и Коканде: правила за 4 недели, день процедуры, уход после и что предлагает Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'Александрит 755 нм — «золотой стандарт» по меланину волоса',
      'Moveo — непрерывное движение; меньше дискомфорта и ровная обработка',
      'За 4 недели нельзя удалять волос с корнем; за 1–2 дня сбрить до ~1 мм',
      'Курс обычно 6–8 процедур; интервал определяет врач',
    ],
    tags: ['Лазерная эпиляция', 'DEKA Moveo', 'Александрит', 'Подготовка', 'Motus AX', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Планируете первую лазерную эпиляцию',
      'Неясен фототип кожи или гормональный фон',
      'Есть чувствительная зона или ожоги в прошлом',
      'Сомнения из-за загара или лекарств',
      'Нужны рекомендации по интервалам и уходу',
    ],
    faq: [
      {
        question: 'Можно ли брить волосы между процедурами?',
        answer:
          'Да. Бритьё разрешено и рекомендуется. Запрещено только удаление волос с корнем (воск, шугаринг, эпилятор, пинцет).',
      },
      {
        question: 'Подходит ли александритовый лазер всем?',
        answer:
          'Лучшие результаты чаще у пациентов со светлой кожей и тёмными волосами. Врач оценивает фототип и выбирает оптимальную тактику.',
      },
      {
        question: 'Когда выпадут волосы?',
        answer:
          'Обычно через 7–14 дней после процедуры.',
      },
      {
        question: 'Можно ли делать эпиляцию летом?',
        answer:
          'Да, если соблюдать рекомендации врача, избегать активного загара и использовать солнцезащитный крем.',
      },
    ],
  },
  en: {
    summary:
      'How to prepare for DEKA Moveo alexandrite laser hair removal in Fergana and Kokand: 4-week rules, treatment day, aftercare at Radeski Skin Clinic.',
    body: enBody(),
    keyTakeaways: [
      'Alexandrite 755 nm is a melanin-targeted “gold standard”',
      'Moveo means continuous motion — less discomfort and even coverage',
      'No root removal for 4 weeks; shave to ~1 mm 1–2 days before',
      'A typical course is 6–8 sessions; intervals are set by the doctor',
    ],
    tags: ['Laser hair removal', 'DEKA Moveo', 'Alexandrite', 'Preparation', 'Motus AX', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Planning your first laser hair removal',
      'Skin phototype or hormones are unclear',
      'Sensitive areas or prior burns',
      'Concerns about tanning or medications',
      'Questions about intervals and aftercare',
    ],
    faq: [
      {
        question: 'Can I shave between sessions?',
        answer:
          'Yes. Shaving is allowed and recommended. Root removal (wax, sugaring, epilator, tweezers) is not.',
      },
      {
        question: 'Does alexandrite suit everyone?',
        answer:
          'Best results are often seen with lighter skin and darker hair. Your doctor assesses phototype and sets the plan.',
      },
      {
        question: 'When will hairs shed?',
        answer:
          'Usually within 7–14 days after treatment.',
      },
      {
        question: 'Can I have it in summer?',
        answer:
          'Yes, if you follow medical advice, avoid active tanning, and use sunscreen.',
      },
    ],
  },
};

export const DEKA_MOVEO_ARTICLE: Article = {
  id: 'art-deka-moveo-epilyatsiya-tayyorgarlik',
  slug: 'deka-moveo-epilyatsiya-tayyorgarlik',
  title: {
    uz: 'DEKA Moveo aleksandrit lazerida epilyatsiyaga qanday tayyorlanish? Bemorlar uchun to‘liq qo‘llanma',
    ru: 'Как подготовиться к лазерной эпиляции на александритовом лазере DEKA Moveo? Полное руководство для пациентов',
    en: 'How to Prepare for Alexandrite Laser Hair Removal with DEKA Moveo: A Complete Patient Guide',
  },
  summary: {
    uz: DEKA_MOVEO_ARTICLE_CATALOG.uz.summary,
    ru: DEKA_MOVEO_ARTICLE_CATALOG.ru.summary,
    en: DEKA_MOVEO_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: DEKA_MOVEO_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: DEKA_MOVEO_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: DEKA_MOVEO_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-07-24',
  image: null,
  images: {
    uz: null,
    ru: null,
    en: null,
  },
  views: 0,
};
