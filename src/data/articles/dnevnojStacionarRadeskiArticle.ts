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

const COVER = '/brand/brand-medical.webp';

function uzBody(): string {
  return `## Kunlik statsionar nima?

Radeski Skin & Aesthetic Clinic **kunlik statsionari** — sog'ligingiz muammosini qisqa muddatda hal qilish, sifatli tekshiruvdan o'tish va shifokor tayinlovlarini olishni xohlaydiganlar uchun qulay yechim.

Bu oddiy **tunlik statsionar** alternativasi: vaqtingiz qadrlaydigan, ish va kundalik hayotdan uzoq vaqt ajratishni xohlamaydigan bemorlar uchun.

![Kunlik statsionar — Radeski Skin Clinic](${COVER})

## Qanday ishlaydi?

- Har bir bemorda **shaxsiy vrach-kurator** bo'ladi — u tekshiruv rejasini tuzadi.
- Kerak bo'lsa, qo'shma mutaxassislar jalb etiladi.
- Bo'limda barcha kerakli **tahlillar** va **instrumental tekshiruvlar** o'tkaziladi.
- Shifokor natijalarni tahlil qilib, **davolash rejasini** belgilaydi.

## Davolash shakli

Davolash **ambulator** yoki kunlik statsionarda (masalan, tomchi terapiya) o'tkazilishi mumkin. Tekshiruv va muolajalarga **qulay vaqtda** kelish mumkin.

To'liq diagnostika ko'pincha **1–2 kun** yetadi. Og'ir bo'lmagan bemorlar uchun dermatologiya, terapiya va endokrinologiya profilida to'liq tekshiruv imkoniyati mavjud.

## Afzalliklari

- Kunlik statsionarda qolish odatda **8 soatdan oshmaydi**.
- Ko'p muolajalar uchun **ta'til yoki kasallik varaqasi** olish shart emas.
- Shaxsiy kuzatuv va tez tekshiruv natijasi.

Bog'liq xizmatlar: [Dermatologiya](/uz/services/dermatologiya), [Narxlar](/uz/prices), [Qabulga yozilish](/uz/appointment).`;
}

function ruBody(): string {
  return `## Что такое дневной стационар?

**Дневной стационар** Radeski Skin & Aesthetic Clinic — прекрасное решение для тех, кто хочет в короткие сроки пройти качественное обследование и получить назначения врача, не отрываясь надолго от работы и повседневных дел.

Это альтернатива круглосуточному стационару для тех, кто ценит своё время.

![Дневной стационар — Radeski Skin Clinic](${COVER})

## Как это работает?

- У каждого пациента есть **персональный врач-куратор**, который разрабатывает план обследования.
- При необходимости приглашаются смежные специалисты.
- В отделении можно сдать все необходимые **анализы** и пройти **инструментальные исследования**.
- Врач анализирует данные и назначает **план лечения**.

## Формат лечения

Лечение может проходить амбулаторно или в дневном стационаре (например, капельницы). На исследования и процедуры можно приходить в **удобное время**.

Для всесторонней диагностики порой достаточно **1–2 дней**. Проводится полное обследование для нетяжёлых больных по профилям дерматология, терапия, endokrinologiya.

## Преимущества

- Пребывание в дневном стационаре обычно **не более 8 часов**.
- Для ряда процедур **не нужен отпуск или больничный**.
- Персональное сопровождение и быстрый результат обследования.

Связанные услуги: [Дерматология](/ru/services/dermatologiya), [Цены](/ru/prices).`;
}

function enBody(): string {
  return `## What is a day hospital?

The **day hospital** at Radeski Skin & Aesthetic Clinic is an excellent option if you need quality examination and physician recommendations quickly without staying away from work and daily life for long.

It is an alternative to overnight hospitalization for patients who value their time.

![Day hospital — Radeski Skin Clinic](${COVER})

## How it works

- Each patient has a **personal supervising physician** who designs the examination plan.
- Related specialists are invited when needed.
- All required **lab tests** and **instrumental studies** are available on site.
- The physician analyzes results and sets a **treatment plan**.

## Treatment format

Treatment may be outpatient or in the day hospital (for example, IV infusions). You can come for tests and procedures at a **convenient time**.

Comprehensive diagnostics often takes **1–2 days**. Full work-up is available for non-severe cases in dermatology, therapy, and endocrinology.

## Benefits

- Day hospital stay is usually **no more than 8 hours**.
- Many procedures do **not require sick leave**.
- Personal follow-up and fast examination results.

Related services: [Dermatology](/en/services/dermatologiya), [Prices](/en/prices).`;
}

export const DNEVNOJ_STACIONAR_RADESKI_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Kunlik statsionar Radeski Skin Clinic: shaxsiy vrach-kurator, tez tekshiruv, tahlillar va davolash — 8 soatgacha, ta\'tilsiz.',
    body: uzBody(),
    keyTakeaways: [
      'Kunlik statsionar — tunlik statsionar alternativasi',
      'Shaxsiy vrach-kurator va individual tekshiruv rejasi',
      '1–2 kunda to\'liq diagnostika mumkin',
      'Qolish odatda 8 soatdan oshmaydi',
      'Dermatologiya, terapiya, endokrinologiya profili',
    ],
    tags: ['Kunlik statsionar', 'Dermatologiya', 'Tekshiruv', 'Radeski Skin Clinic', 'Farg\'ona'],
    whenToSeeDoctor: [
      'Tez tekshiruv va davolash rejasi kerak bo\'lsa',
      'Tomchi terapiya yoki kurs muolajasi rejalashtirilganda',
      'Ishdan uzoq vaqt ajratish imkoni bo\'lmasa',
    ],
    faq: [
      {
        question: 'Kunlik statsionarda qancha vaqt qolaman?',
        answer: 'Odatda bir kun 8 soatgacha. Aniq vaqt muolaja turiga qarab belgilanadi.',
      },
      {
        question: 'Ta\'til kerakmi?',
        answer: 'Ko\'p hollarda yo\'q — kunduzgi format ish va hayotga mos keladi.',
      },
      {
        question: 'Qaysi yo\'nalishlar qamrab olinadi?',
        answer: 'Dermatologiya, terapiya va endokrinologiya bo\'yicha og\'ir bo\'lmagan holatlar.',
      },
    ],
  },
  ru: {
    summary:
      'Дневной стационар Radeski Skin Clinic: персональный врач-куратор, быстрое обследование, анализы и лечение — до 8 часов, без длительного отрыва от работы.',
    body: ruBody(),
    keyTakeaways: [
      'Дневной стационар — альтернатива круглосуточному',
      'Персональный врач-куратор и индивидуальный план',
      'Полная диагностика за 1–2 дня',
      'Пребывание обычно до 8 часов',
      'Профили: дерматология, терапия, endokrinologiya',
    ],
    tags: ['Дневной стационар', 'Дерматология', 'Обследование', 'Radeski Skin Clinic', 'Фергана'],
    whenToSeeDoctor: [
      'Нужно быстрое обследование и план лечения',
      'Планируется курс инфузионной терапии',
      'Нет возможности надолго отрываться от работы',
    ],
    faq: [
      {
        question: 'Сколько длится пребывание?',
        answer: 'Обычно до 8 часов в день. Точное время зависит от процедур.',
      },
      {
        question: 'Нужен ли больничный?',
        answer: 'Часто нет — дневной формат совместим с работой.',
      },
      {
        question: 'Какие направления доступны?',
        answer: 'Dermatologiya, терапия и endokrinologiya для нетяжёлых случаев.',
      },
    ],
  },
  en: {
    summary:
      'Day hospital at Radeski Skin Clinic: personal supervising physician, fast work-up, tests and treatment — up to 8 hours without long absence from work.',
    body: enBody(),
    keyTakeaways: [
      'Day hospital is an alternative to overnight stay',
      'Personal supervising physician and individual plan',
      'Full diagnostics in 1–2 days',
      'Stay is usually up to 8 hours',
      'Dermatology, therapy, and endocrinology profiles',
    ],
    tags: ['Day hospital', 'Dermatology', 'Examination', 'Radeski Skin Clinic', 'Fergana'],
    whenToSeeDoctor: [
      'You need a fast work-up and treatment plan',
      'An infusion therapy course is planned',
      'You cannot be away from work for long',
    ],
    faq: [
      {
        question: 'How long is the stay?',
        answer: 'Usually up to 8 hours per day depending on procedures.',
      },
      {
        question: 'Do I need sick leave?',
        answer: 'Often not — the day format fits work and daily life.',
      },
      {
        question: 'Which specialties are covered?',
        answer: 'Dermatology, therapy, and endocrinology for non-severe cases.',
      },
    ],
  },
};

export const DNEVNOJ_STACIONAR_RADESKI_ARTICLE: Article = {
  id: 'art-dnevnoj-stacionar-radeski',
  slug: 'dnevnoj-stacionar-radeski',
  title: {
    uz: 'Kunlik statsionar: tez tekshiruv va shifokor kuzatuvi',
    ru: 'Дневной стационар: быстрое обследование и сопровождение врача',
    en: 'Day Hospital: Fast Work-up and Physician Supervision',
  },
  summary: {
    uz: DNEVNOJ_STACIONAR_RADESKI_ARTICLE_CATALOG.uz.summary,
    ru: DNEVNOJ_STACIONAR_RADESKI_ARTICLE_CATALOG.ru.summary,
    en: DNEVNOJ_STACIONAR_RADESKI_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: DNEVNOJ_STACIONAR_RADESKI_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: DNEVNOJ_STACIONAR_RADESKI_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: DNEVNOJ_STACIONAR_RADESKI_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: { uz: 'Radeski Skin Clinic', ru: 'Radeski Skin Clinic', en: 'Radeski Skin Clinic' },
  date: '2026-09-22',
  image: COVER,
  images: { uz: COVER, ru: COVER, en: COVER },
  views: 0,
};
