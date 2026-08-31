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

const IMG = '/articles/ipl-lumecca-promo.png';

function uzBody(): string {
  return `## Xohlayman: pigmentatsiyadan xalos bo'lish, yuz rangini yoritish

Ko'pchilik bemorlar yuzdagi **jigarrang dog'lar**, quyoshdan keyin paydo bo'lgan pigment va **rangsiz, xira teri** haqida shikoyat qiladi. Bu holat faqat estetik emas — ba'zan teri yallig'lanishidan keyin qolgan izlar ham rang notekisligini kuchaytiradi.

![IPL Lumecca — pigmentatsiya va yuz rangini yaxshilash](/articles/ipl-lumecca-promo.png)

*Radeski Skin Clinic da InMode IPL Lumecca yordamida pigment dog'lari va teri rangsizligi bilan ishlaymiz.*

## Bajaraman: IPL Lumecca bilan davolash

Radeski Skin Clinic da bunday holatlarda **InMode IPL Lumecca** platformasi qo'llaniladi. Bu keng spektrli yuqori intensivlikdagi yorug'lik (IPL) uskunasidir: teridagi melanin va ayrim tomir belgilari tanlab yutiladi, shu orqali dog'lar asta-sekin ochiladi, teri tonusi yaxshilanadi.

## IPL Lumecca qanday ishlaydi?

Lumecca yorug'lik impulslarini terining turli qatlamlariga yo'naltiradi. Pigmentli hujayralar energiyani qabul qiladi, keyin organizm ularni tabiiy yo'l bilan yangilaydi. Tomir va qizarish komponenti bo'lsa, gemoglobin ham nishon sifatida ishlatilishi mumkin.

Shifokor teri fototipi, dog' chuqurligi va maydoniga qarab filtr va energiya darajasini individual tanlaydi.

## Radeski Skin Clinic da muolaja bosqichlari

### 1. Konsultatsiya va teri baholash

Dermatolog yuzni ko'rib chiqadi, pigment turini aniqlaydi (melazma, quyosh dog'i, postakne izi va hokazo). Kerak bo'lsa, qarshi ko'rsatmalar tekshiriladi.

### 2. Tayyorgarlik

Teri tozalangan holda muolajaga tayyorlanadi. Ko'z va sezgir zonalar himoya qilinadi. Ba'zan test impulsi beriladi.

### 3. IPL Lumecca seansi

Apparat yordamida yorug'lik impulslari muammoli zonaga yo'naltiriladi. Muolaja vaqti ishlanadigan maydonga bog'liq — odatda 15–30 daqiqa.

### 4. Muolajadan keyingi parvarish

Shifokor SPF, namlik va bir necha kun davomida quyoshdan saqlanish bo'yicha ko'rsatma beradi. Yengil qizarish yoki qattiqroq teri 1–3 kun ichida o'tishi mumkin.

## Necha seans kerak?

Odatda **3–5 seans** oralig'i bilan kurs tavsiya etiladi. Aniq son dog' turi, chuqurligi va terining javobiga bog'liq. Birinchi seansdan keyin ham yengillashish sezilishi mumkin.

## Kimlar uchun mos?

- yuzdagi pigment dog'lari;
- quyosh va yosh o'tish dog'lari;
- notekis teri rangi;
- yengil tomir va qizarish belgilari (protokolga qarab).

Melazma, faol akne yoki shubhali dog'lar bo'lsa, avvalo to'liq dermatologik baholash shart.

## Nega Radeski Skin Clinic?

- IPL Lumecca — InMode ishlab chiqaruvchisining zamonaviy platformasi;
- parametrlar dermatolog nazoratida individual belgilanadi;
- muolaja oldidan va keyin parvarish rejasi tuziladi;
- Farg'ona va Qo'qon filiallarida qabul.

## Konsultatsiyaga yoziling

Agar yuzdagi dog'lar va rangsiz teri sizni bezovta qilsa — faqat kosmetika bilan yashirish shart emas. Radeski Skin Clinic shifokori teri holatingizni baholab, **IPL Lumecca** yoki boshqa mos usulni taklif qiladi.`;
}

function ruBody(): string {
  return `## Хочу: избавиться от пигментации и вернуть сияние коже

Многие пациенты жалуются на **коричневые пятна**, солнечную пигментацию и **тусклый, неровный тон**. Это не только эстетика — следы воспалений после акне тоже могут усиливать неоднородность цвета.

![IPL Lumecca — лечение пигментации и улучшение тона кожи](/articles/ipl-lumecca-promo.png)

*В Radeski Skin Clinic мы работаем с пигментными пятнами и тусклостью кожи на аппарате InMode IPL Lumecca.*

## Делаем: лечение на IPL Lumecca

В таких случаях в Radeski Skin Clinic применяется платформа **InMode IPL Lumecca** — система интенсивного импульсного света широкого спектра. Мelanin и отдельные сосудистые элементы избирательно поглощают энергию, пятна постепенно светлеют, тон кожи выравнивается.

## Как работает IPL Lumecca?

Импульсы света воздействуют на разные слои кожи. Пигментные клетки получают энергию и затем постепенно обновляются организмом. При сосудистом компоненте может использоваться и гемоглобин как мишень.

Врач индивидуально подбирает фильтр и уровень энергии с учётом фототипа, глубины пятен и площади зоны.

## Этапы процедуры в Radeski Skin Clinic

### 1. Консультация и оценка кожи

Дерматолог осматривает лицо, определяет тип пигментации (мелазма, солнечные пятна, постакне и др.). При необходимости исключаются противопоказания.

### 2. Подготовка

Кожа очищается, глаза и чувствительные зоны защищаются. Иногда выполняется тестовый импульс.

### 3. Сеанс IPL Lumecca

Импульсы света направляются на проблемную зону. Длительность — обычно 15–30 минут в зависимости от площади.

### 4. Уход после процедуры

Врач даёт рекомендации по SPF, увлажнению и ограничению солнца на несколько дней. Лёгкое покраснение или стянутость возможны 1–3 дня.

## Сколько сеансов нужно?

Часто рекомендуется курс из **3–5 процедур** с интервалами. Точное число зависит от типа пятен, их глубины и реакции кожи. Улучшение может быть заметно уже после первого визита.

## Кому подходит?

- пигментные пятна на лице;
- солнечная и возрастная пигментация;
- неровный тон кожи;
- лёгкие сосудистые и покраснительные проявления (по протоколу).

При мелазме, активном акне или подозрительных пятнах сначала нужна полная дерматологическая оценка.

## Почему Radeski Skin Clinic?

- IPL Lumecca — современная платформа InMode;
- параметры подбираются дерматологом индивидуально;
- до и после процедуры составляется план ухода;
- приём в филиалах в Фергане и Коканде.

## Запишитесь на консультацию

Если пятна и тусклая кожа мешают вам чувствовать себя уверенно — не обязательно маскировать их только косметикой. Врач Radeski Skin Clinic оценит состояние кожи и предложит **IPL Lumecca** или другой подходящий метод.`;
}

function enBody(): string {
  return `## I want: clearer skin without stubborn pigmentation

Many patients come in with **brown spots**, sun-related pigmentation, and a **dull, uneven complexion**. It is not purely cosmetic — post-inflammatory marks after breakouts can make tone irregularity even more visible.

![IPL Lumecca — treating pigmentation and brightening skin tone](/articles/ipl-lumecca-promo.png)

*At Radeski Skin Clinic we address pigment spots and dull skin with the InMode IPL Lumecca platform.*

## We deliver: IPL Lumecca treatment

In these cases Radeski Skin Clinic uses **InMode IPL Lumecca** — a broad-spectrum intense pulsed light system. Melanin and selected vascular targets absorb energy, spots gradually fade, and overall tone improves.

## How IPL Lumecca works

Light pulses reach different skin layers. Pigment cells absorb energy and are replaced through natural skin renewal. When redness or vessels are involved, hemoglobin may also be targeted.

The physician chooses filters and energy levels individually based on phototype, pigment depth, and treatment area.

## Treatment steps at Radeski Skin Clinic

### 1. Consultation and skin assessment

A dermatologist examines the face and defines the pigment pattern (melasma, sun spots, post-acne marks, etc.). Contraindications are checked when needed.

### 2. Preparation

Skin is cleansed; eyes and sensitive areas are protected. A test pulse may be performed.

### 3. IPL Lumecca session

Light pulses are applied to the target zone. Treatment usually takes 15–30 minutes depending on area size.

### 4. Aftercare

You receive guidance on SPF, hydration, and sun avoidance for several days. Mild redness or tightness may last 1–3 days.

## How many sessions?

A course of **3–5 sessions** with intervals is commonly recommended. The exact number depends on pigment type, depth, and skin response. Improvement may be visible after the first visit.

## Who is it for?

- facial pigment spots;
- sun and age-related discoloration;
- uneven skin tone;
- mild vascular or redness signs (protocol-dependent).

Melasma, active acne, or suspicious lesions require full dermatologic evaluation first.

## Why Radeski Skin Clinic?

- IPL Lumecca is InMode's modern IPL platform;
- settings are individualized under dermatologist supervision;
- before-and-after care plans are provided;
- appointments in Fergana and Kokand.

## Book a consultation

If spots and dull skin bother you, makeup alone is not the only option. A Radeski Skin Clinic physician will assess your skin and recommend **IPL Lumecca** or another suitable approach.`;
}

export const IPL_LUMECCA_PIGMENTATION_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Pigmentatsiya va yuz rangsizligini InMode IPL Lumecca bilan qanday davolash mumkin: mexanizm, klinik bosqichlar, seanslar soni va Radeski Skin Clinic yondashuvi.',
    body: uzBody(),
    keyTakeaways: [
      'IPL Lumecca melanin va tomir belgilariga tanlab ta\'sir qiladi',
      'Davolash dermatolog konsultatsiyasidan boshlanadi',
      'Odatda 3–5 seanslik kurs tavsiya etiladi',
      'Muolajadan keyin SPF va quyoshdan himoya muhim',
      'Dog\' turi aniqlanmasdan lazer tanlanmaydi',
    ],
    tags: ['IPL Lumecca', 'InMode', 'Pigmentatsiya', 'Foto-yoshartirish', 'Radeski Skin Clinic', 'Farg\'ona'],
    whenToSeeDoctor: [
      'Yuzda tez kengayayotgan yoki rangi o\'zgarayotgan dog\' paydo bo\'lsa',
      'Dog\' og\'riq yoki qizarish bilan birga bo\'lsa',
      'Melazma yoki chuqur pigmentatsiya bo\'lsa',
      'Homiladorlik yoki faol teri kasalligi bo\'lsa',
    ],
    faq: [
      {
        question: 'IPL Lumecca og\'riqli bo\'ladimi?',
        answer: 'Ko\'pchilik yengil issiqlik yoki qisqa ignadek his qiladi. Noqulaylik darajasi parametrlarga bog\'liq.',
      },
      {
        question: 'Bir seans yetadimi?',
        answer: 'Ba\'zan yengillashish seziladi, lekin barqaror natija uchun odatda kurs tavsiya etiladi.',
      },
      {
        question: 'Quyoshga chiqish mumkinmi?',
        answer: 'Muolajadan keyin bir necha kun quyoshdan saqlanish va SPF majburiy.',
      },
    ],
  },
  ru: {
    summary:
      'Как лечить пигментацию и тусклый тон кожи на InMode IPL Lumecca: механизм, этапы процедуры, число сеансов и подход Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'IPL Lumecca избирательно воздействует на мelanin и сосудистые элементы',
      'Лечение начинается с консультации дерматолога',
      'Обычно рекомендуется курс из 3–5 сеансов',
      'После процедуры важны SPF и защита от солнца',
      'Без определения типа пятен лазер не выбирают',
    ],
    tags: ['IPL Lumecca', 'InMode', 'Пигментация', 'Фотоомоложение', 'Radeski Skin Clinic', 'Фергана'],
    whenToSeeDoctor: [
      'Пятно быстро растёт или меняет цвет',
      'Пятно сопровождается болью или воспалением',
      'Есть мелазма или глубокая пигментация',
      'Беременность или активное заболевание кожи',
    ],
    faq: [
      {
        question: 'Больно ли на IPL Lumecca?',
        answer: 'Чаще ощущается лёгкое тепло или покалывание. Комфорт зависит от параметров.',
      },
      {
        question: 'Хватит ли одного сеанса?',
        answer: 'Иногда улучшение заметно сразу, но для стойкого эффекта обычно нужен курс.',
      },
      {
        question: 'Можно ли на солнце?',
        answer: 'После процедуры несколько дней нужны SPF и ограничение солнца.',
      },
    ],
  },
  en: {
    summary:
      'How InMode IPL Lumecca treats pigmentation and dull skin tone: mechanism, clinic steps, session count, and the Radeski Skin Clinic approach.',
    body: enBody(),
    keyTakeaways: [
      'IPL Lumecca selectively targets melanin and vascular signs',
      'Care starts with a dermatology consultation',
      'A course of 3–5 sessions is commonly advised',
      'SPF and sun protection matter after treatment',
      'Pigment type must be defined before choosing IPL',
    ],
    tags: ['IPL Lumecca', 'InMode', 'Pigmentation', 'Photo-rejuvenation', 'Radeski Skin Clinic', 'Fergana'],
    whenToSeeDoctor: [
      'A spot grows quickly or changes color',
      'A spot is painful or inflamed',
      'Melasma or deep pigmentation is present',
      'Pregnancy or active skin disease',
    ],
    faq: [
      {
        question: 'Is IPL Lumecca painful?',
        answer: 'Most people feel mild warmth or brief stinging. Comfort depends on settings.',
      },
      {
        question: 'Is one session enough?',
        answer: 'Some improvement may appear early, but a course is usually recommended for lasting results.',
      },
      {
        question: 'Can I go in the sun?',
        answer: 'SPF and sun avoidance are required for several days after treatment.',
      },
    ],
  },
};

export const IPL_LUMECCA_PIGMENTATION_ARTICLE: Article = {
  id: 'art-ipl-lumecca-pigmentatsiya-radeski',
  slug: 'ipl-lumecca-pigmentatsiya-radeski',
  title: {
    uz: 'IPL Lumecca bilan pigmentatsiya davolash — Radeski Skin Clinic',
    ru: 'Лечение пигментации IPL Lumecca — Radeski Skin Clinic',
    en: 'Pigmentation Treatment with IPL Lumecca — Radeski Skin Clinic',
  },
  summary: {
    uz: IPL_LUMECCA_PIGMENTATION_ARTICLE_CATALOG.uz.summary,
    ru: IPL_LUMECCA_PIGMENTATION_ARTICLE_CATALOG.ru.summary,
    en: IPL_LUMECCA_PIGMENTATION_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: IPL_LUMECCA_PIGMENTATION_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: IPL_LUMECCA_PIGMENTATION_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: IPL_LUMECCA_PIGMENTATION_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-08-31',
  image: IMG,
  images: { uz: IMG, ru: IMG, en: IMG },
  views: 0,
};
