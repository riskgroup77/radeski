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

const IMG = '/articles/hollywood-spectra-pores-promo.png';

function uzBody(): string {
  return `## Xohlayman: poralarni toraytirish, yuzni tiniq va yorqin qilish

Katta **poralar**, **matt teri**, qora nuqtalar va notekis tekstura yuzning toza ko'rinishini buzadi. Ko'p bemorlar poralarni toraytirish va terini **yorqinroq** qilishni xohlaydi.

![Hollywood Spectra — poralar va teri tiniqligi](/articles/hollywood-spectra-pores-promo.png)

*Radeski Skin Clinic da Lutronic Hollywood Spectra yordamida poralar va teri sifati bilan ishlaymiz.*

## Bajaraman: Hollywood Spectra lazer protokollari

Radeski Skin Clinic da **Lutronic Hollywood Spectra** — Q-switch lazer tizimi — poralarni toraytirish, teri teksturasini yaxshilash va yuzni yoritish protokollarida qo'llaniladi. Karbon piling, gold toning va yuz tozalash rejimlari mavjud.

## Hollywood Spectra qanday ishlaydi?

Qisqa impulsli lazer energiyasi terining yuzaki qatlamiga nazoratli ta'sir qiladi. Karbon lotionsiz protokollarda teri yangilanishi va kolagen stimulyatsiyasi rag'batlanadi; poralar vizual jihatdan kichikroq ko'rinadi, teri silliqroq bo'ladi.

## Radeski Skin Clinic da muolaja bosqichlari

### 1. Konsultatsiya

Dermatolog poralar, akne belgilari va teri turini baholaydi. Protokol tanlanadi (masalan, karbon piling yoki toning).

### 2. Teri tayyorgarligi

Yuz tozalanadi. Karbon protokolida maxsus lotion qo'llaniladi.

### 3. Hollywood Spectra seansi

Lazer impulslari belgilangan zonaga beriladi. Muolaja odatda 20–30 daqiqa.

### 4. Parvarish

Yengil qizarish mumkin. SPF va namlik muhim; bir necha kun quyoshdan saqlanish tavsiya etiladi.

## Necha seans kerak?

Poralar va tekstura uchun odatda **4–6 seans** oralig'i bilan kurs. Natija seanslar davomida asta-sekin yaxshilanadi.

## Kimlar uchun mos?

- keng poralar;
- matt, rangsiz teri;
- yuzaki tekstura notekisligi;
- qora nuqtalar va yog'li poralar (protokolga qarab).

Faol akne yallig'lanishi yoki ochiq yaralar bo'lsa, avval davolanish kerak.

## Konsultatsiyaga yoziling

Tiniq va yorqin teri uchun Radeski Skin Clinic shifokori **Hollywood Spectra** protokolini individual tanlaydi.`;
}

function ruBody(): string {
  return `## Хочу: сузить поры и сделать кожу чистой и сияющей

Расширенные **поры**, **тусклая кожа**, чёрные точки и неровная текстура мешают «чистому» виду лица. Многие хотят визуально уменьшить поры и **освежить** тон.

![Hollywood Spectra — поры и чистота кожи](/articles/hollywood-spectra-pores-promo.png)

*В Radeski Skin Clinic мы работаем с порами и качеством кожи на Lutronic Hollywood Spectra.*

## Делаем: протоколы Hollywood Spectra

В Radeski Skin Clinic **Lutronic Hollywood Spectra** — Q-switch лазер — применяется для сужения пор, улучшения текстуры и осветления лица. Доступны протоколы карбонового пилинга, gold toning и лазерного очищения.

## Как работает Hollywood Spectra?

Короткие импульсы лазера контролируемо воздействуют на поверхностные слои. При соответствующих протоколах стимулируется обновление кожи и коллаген; поры визуально уменьшаются, кожа становится глаже.

## Этапы процедуры в Radeski Skin Clinic

### 1. Консультация

Дерматолог оценивает поры, признаки акне и тип кожи. Выбирается протокол (например, карбоновый пилинг или toning).

### 2. Подготовка кожи

Лицо очищается. При карбоновом протоколе наносится специальный лосьон.

### 3. Сеанс Hollywood Spectra

Импульсы лазера направляются на выбранную зону. Обычно 20–30 минут.

### 4. Уход

Возможно лёгкое покраснение. Важны SPF и увлажнение; несколько дней ограничить солнце.

## Сколько сеансов нужно?

Для пор и текстуры часто рекомендуется курс **4–6 сеансов** с интервалами. Улучшение нарастает постепенно.

## Кому подходит?

- расширенные поры;
- тусклая кожа;
- неровная поверхностная текстура;
- чёрные точки и жирные поры (по протоколу).

При активном воспалении акне или открытых ранах сначала нужно лечение.

## Запишитесь на консультацию

Для более чистой и сияющей кожи врач Radeski Skin Clinic подберёт индивидуальный протокол **Hollywood Spectra**.`;
}

function enBody(): string {
  return `## I want: smaller-looking pores and brighter, clearer skin

Enlarged **pores**, a **dull complexion**, blackheads, and uneven texture keep skin from looking fresh. Many patients want pores to appear tighter and skin to look **brighter**.

![Hollywood Spectra — pores and skin clarity](/articles/hollywood-spectra-pores-promo.png)

*At Radeski Skin Clinic we address pores and skin quality with Lutronic Hollywood Spectra.*

## We deliver: Hollywood Spectra laser protocols

Radeski Skin Clinic uses **Lutronic Hollywood Spectra** — a Q-switch laser — for pore refinement, texture improvement, and facial brightening. Carbon peel, gold toning, and cleansing protocols are available.

## How Hollywood Spectra works

Short laser pulses deliver controlled action on superficial layers. With selected protocols, skin renewal and collagen stimulation are encouraged; pores look smaller and skin feels smoother.

## Treatment steps at Radeski Skin Clinic

### 1. Consultation

The dermatologist assesses pores, acne signs, and skin type. A protocol is chosen (e.g., carbon peel or toning).

### 2. Skin preparation

The face is cleansed. Carbon protocols use a dedicated lotion.

### 3. Hollywood Spectra session

Laser pulses are applied to the target area. Usually 20–30 minutes.

### 4. Aftercare

Mild redness is possible. SPF and hydration matter; limit sun for several days.

## How many sessions?

For pores and texture, a course of **4–6 sessions** with intervals is common. Improvement builds gradually.

## Who is it for?

- enlarged pores;
- dull skin;
- uneven surface texture;
- blackheads and oily pores (protocol-dependent).

Active acne inflammation or open wounds should be treated first.

## Book a consultation

For clearer, brighter skin, a Radeski Skin Clinic physician will tailor a **Hollywood Spectra** protocol for you.`;
}

export const HOLLYWOOD_SPECTRA_PORES_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Poralarni toraytirish va yuzni yoritish: Hollywood Spectra lazer protokollari, bosqichlar va kurs — Radeski Skin Clinic.',
    body: uzBody(),
    keyTakeaways: [
      'Hollywood Spectra Q-switch lazer poralar va tekstura bilan ishlaydi',
      'Karbon piling va toning protokollari mavjud',
      'Odatda 4–6 seanslik kurs tavsiya etiladi',
      'SPF va quyoshdan himoya muhim',
      'Faol akne avval davolanishi kerak',
    ],
    tags: ['Hollywood Spectra', 'Lutronic', 'Poralar', 'Karbon piling', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Akne yallig\'lanishi kuchaysa',
      'Yangi dog\' yoki o\'sma paydo bo\'lsa',
      'Muolajadan keyin kuchli qizarish bo\'lsa',
      'Teri kasalligi noma\'lum bo\'lsa',
    ],
    faq: [
      { question: 'Poralar butunlay yo\'qoladimi?', answer: 'Poralar anatomik struktura — maqsad ularni vizual toraytirish va terini silliqroq qilish.' },
      { question: 'Karbon piling nima?', answer: 'Maxsus lotion va lazer kombinatsiyasi — teri tozalash va yoritish uchun.' },
      { question: 'Qancha vaqt natija saqlanadi?', answer: 'Parvarish va SPF bilan natija uzoqroq saqlanadi; qo\'llab-quvvatlovchi seanslar kerak bo\'lishi mumkin.' },
    ],
  },
  ru: {
    summary:
      'Сужение пор и осветление лица: протоколы лазера Hollywood Spectra, этапы и курс — Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'Hollywood Spectra Q-switch лазер работает с порами и текстурой',
      'Доступны карбоновый пилинг и toning',
      'Обычно рекомендуется курс 4–6 сеансов',
      'Важны SPF и защита от солнца',
      'Активное акне сначала лечат',
    ],
    tags: ['Hollywood Spectra', 'Lutronic', 'Поры', 'Карбоновый пилинг', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Усиливается воспаление акне',
      'Появляется новое пятно или образование',
      'Сильное покраснение после процедуры',
      'Неизвестное заболевание кожи',
    ],
    faq: [
      { question: 'Исчезнут ли поры полностью?', answer: 'Поры — анатомическая структура; цель — визуально уменьшить и сгладить кожу.' },
      { question: 'Что такое карбоновый пилинг?', answer: 'Комбинация специального лосьона и лазера для очищения и осветления.' },
      { question: 'Как долго держится эффект?', answer: 'При уходе и SPF эффект дольше; могут понадобиться поддерживающие сеансы.' },
    ],
  },
  en: {
    summary:
      'Pore refinement and facial brightening: Hollywood Spectra laser protocols, steps, and course at Radeski Skin Clinic.',
    body: enBody(),
    keyTakeaways: [
      'Hollywood Spectra Q-switch laser addresses pores and texture',
      'Carbon peel and toning protocols available',
      'A course of 4–6 sessions is commonly advised',
      'SPF and sun protection are essential',
      'Active acne should be treated first',
    ],
    tags: ['Hollywood Spectra', 'Lutronic', 'Pores', 'Carbon peel', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Acne inflammation worsens',
      'A new spot or lesion appears',
      'Severe redness after treatment',
      'Undiagnosed skin condition',
    ],
    faq: [
      { question: 'Will pores disappear completely?', answer: 'Pores are anatomical — the goal is to make them look smaller and skin smoother.' },
      { question: 'What is a carbon peel?', answer: 'A combination of a special lotion and laser for cleansing and brightening.' },
      { question: 'How long do results last?', answer: 'With care and SPF, results last longer; maintenance sessions may help.' },
    ],
  },
};

export const HOLLYWOOD_SPECTRA_PORES_ARTICLE: Article = {
  id: 'art-hollywood-spectra-poralar-radeski',
  slug: 'hollywood-spectra-poralar-radeski',
  title: {
    uz: 'Hollywood Spectra bilan poralar va teri tiniqligi — Radeski Skin Clinic',
    ru: 'Сужение пор и чистота кожи на Hollywood Spectra — Radeski Skin Clinic',
    en: 'Pore Refinement with Hollywood Spectra — Radeski Skin Clinic',
  },
  summary: {
    uz: HOLLYWOOD_SPECTRA_PORES_ARTICLE_CATALOG.uz.summary,
    ru: HOLLYWOOD_SPECTRA_PORES_ARTICLE_CATALOG.ru.summary,
    en: HOLLYWOOD_SPECTRA_PORES_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: HOLLYWOOD_SPECTRA_PORES_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: HOLLYWOOD_SPECTRA_PORES_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: HOLLYWOOD_SPECTRA_PORES_ARTICLE_CATALOG.en.body.slice(0, 500),
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
