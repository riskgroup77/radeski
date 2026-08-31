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

const IMG = '/articles/deka-co2-scars-promo.png';

function uzBody(): string {
  return `## Xohlayman: chuqur chandiqlar va akne izlarini yo'qotish

Akne, travma yoki yallig'lanishdan keyin yuzda **chuqur chandiqlar**, **tekstura notekisligi** va izlar qolishi mumkin. Oddiy krem va pilinglar chuqur defektlarda cheklangan samara beradi.

![DEKA SmartXide Touch CO₂ — chandiqlar va izlar davolash](/articles/deka-co2-scars-promo.png)

*Radeski Skin Clinic da DEKA SmartXide Touch CO₂ lazer yordamida postakne chandiqlari va teri izlari bilan ishlaymiz.*

## Bajaraman: DEKA SmartXide Touch CO₂ lazer

Radeski Skin Clinic da **DEKA SmartXide Touch** — fraksion CO₂ lazer tizimi — chuqur chandiqlar, postakne izlari va teri teksturasini yaxshilash uchun qo'llaniladi. Lazer nazoratli mikro-zonalarni hosil qilib, yangi kolagen sintezini rag'batlantiradi.

## SmartXide Touch qanday ishlaydi?

CO₂ lazer terining suv molekulalariga ta'sir qiladi va fraksion rejimda kichik «ustunlar» qoldiradi. Bu tiklanish jarayonini ishga tushiradi: chuqur qatlamda kolagen qayta shakllanadi, yuzaki tekstura asta-sekin tekislanadi.

DEKA ning **DOT / fraksion** texnologiyasi chuqurlik va zichlikni shifokor tomonidan sozlash imkonini beradi.

## Radeski Skin Clinic da muolaja bosqichlari

### 1. Konsultatsiya va chandiq baholasi

Dermatolog chandiqlar chuqurligi, turi (rolling, boxcar, ice pick) va teri fototipini baholaydi.

### 2. Tayyorgarlik va anesteziya

Yuz tozalanadi. Keng maydonlar uchun mahalliy yoki qo'shimcha anesteziya qo'llanilishi mumkin.

### 3. CO₂ lazer seansi

SmartXide Touch applikatori bilan fraksion lazer ishlanadi. Chuqurlik chandiq xarakteriga moslashtiriladi.

### 4. Tiklanish va parvarish

Qattiq teri, qizarish va qichishish 5–10 kun davom etishi mumkin. Shifokor tiklanish kremi, SPF va namlik rejimini beradi.

## Necha seans kerak?

Chuqur chandiqlar uchun odatda **2–4 seans** oralig'i bilan 1–3 oyda. Yuzaki izlar kamroq seans bilan yaxshilanishi mumkin.

## Kimlar uchun mos?

- postakne chandiqlari;
- chuqur tekstura notekisligi;
- travma yoki operatsiyadan keyingi izlar;
- teri silliqligi va elastikligi pasaygan bemorlar.

Faol akne, keloid xavfi yoki ochiq yaralar bo'lsa, muolaja kechiktiriladi.

## Konsultatsiyaga yoziling

Chuqur chandiqlar va izlar bilan kurashishda Radeski Skin Clinic shifokori **DEKA SmartXide Touch CO₂** protokolini individual baholaydi.`;
}

function ruBody(): string {
  return `## Хочу: избавиться от глубоких рубцов и следов постакне

После акне, травмы или воспаления на лице могут остаться **глубокие рубцы**, **неровная текстура** и следы. Обычные кремы и пилинги при глубоких дефектах дают ограниченный эффект.

![DEKA SmartXide Touch CO₂ — лечение рубцов и следов](/articles/deka-co2-scars-promo.png)

*В Radeski Skin Clinic мы работаем с рубцами постакне и следами на CO₂-лазере DEKA SmartXide Touch.*

## Делаем: CO₂-лазер DEKA SmartXide Touch

В Radeski Skin Clinic **DEKA SmartXide Touch** — фракционный CO₂-лазер — применяется для глубоких рубцов, следов постакне и улучшения текстуры. Лазер создаёт контролируемые микрозоны и стимулирует синтез нового коллагена.

## Как работает SmartXide Touch?

CO₂-лазер воздействует на молекулы воды в коже и в фракционном режиме оставляет микро«столбики». Запускается процесс восстановления: в глубоких слоях перестраивается коллаген, поверхность постепенно выравнивается.

**DOT / фракционная** технология DEKA позволяет врачу настраивать глубину и плотность воздействия.

## Этапы процедуры в Radeski Skin Clinic

### 1. Консультация и оценка рубцов

Дерматолог оценивает глубину, тип рубцов (rolling, boxcar, ice pick) и фототип.

### 2. Подготовка и анестезия

Лицо очищается. Для обширных зон может применяться местная или дополнительная анестезия.

### 3. Сеанс CO₂-лазера

Фракционный лазер SmartXide Touch обрабатывает зону. Глубина адаптируется к характеру рубцов.

### 4. Восстановление и уход

Стянутость, покраснение и зуд возможны 5–10 дней. Врач назначает средства восстановления, SPF и увлажнение.

## Сколько сеансов нужно?

При глубоких рубцах обычно **2–4 сеанса** с интервалом 1–3 месяца. Поверхностные следы могут улучшиться за меньшее число процедур.

## Кому подходит?

- рубцы постакне;
- глубокая неровность текстуры;
- следы после травмы или операции;
- снижение гладкости и упругости.

При активном акне, риске келоидов или открытых ранах процедуру откладывают.

## Запишитесь на консультацию

При глубоких рубцах и следах врач Radeski Skin Clinic индивидуально оценит протокол **DEKA SmartXide Touch CO₂**.`;
}

function enBody(): string {
  return `## I want: to reduce deep scars and acne marks

After acne, injury, or inflammation, **deep scars**, **uneven texture**, and marks may remain. Creams and superficial peels often have limited effect on deeper defects.

![DEKA SmartXide Touch CO₂ — scar and mark treatment](/articles/deka-co2-scars-promo.png)

*At Radeski Skin Clinic we treat post-acne scars and skin marks with the DEKA SmartXide Touch CO₂ laser.*

## We deliver: DEKA SmartXide Touch CO₂ laser

Radeski Skin Clinic uses **DEKA SmartXide Touch** — a fractional CO₂ laser — for deep scars, post-acne marks, and texture improvement. The laser creates controlled micro-zones and stimulates new collagen formation.

## How SmartXide Touch works

The CO₂ laser interacts with water molecules in skin and, in fractional mode, leaves micro-"columns." Recovery begins: collagen rebuilds in deeper layers and the surface gradually smooths.

DEKA's **DOT / fractional** technology lets the physician adjust depth and density.

## Treatment steps at Radeski Skin Clinic

### 1. Consultation and scar assessment

The dermatologist evaluates depth, scar type (rolling, boxcar, ice pick), and phototype.

### 2. Preparation and anesthesia

The face is cleansed. Local or additional anesthesia may be used for larger areas.

### 3. CO₂ laser session

The SmartXide Touch fractional laser treats the zone. Depth is matched to scar character.

### 4. Recovery and aftercare

Tightness, redness, and itching may last 5–10 days. The physician provides recovery creams, SPF, and hydration guidance.

## How many sessions?

Deep scars often need **2–4 sessions** spaced 1–3 months apart. Superficial marks may improve with fewer visits.

## Who is it for?

- post-acne scars;
- deep texture irregularity;
- marks after trauma or surgery;
- reduced smoothness and elasticity.

Active acne, keloid risk, or open wounds may require delaying treatment.

## Book a consultation

For deep scars and persistent marks, a Radeski Skin Clinic physician will individually assess a **DEKA SmartXide Touch CO₂** protocol for you.`;
}

export const DEKA_CO2_SCARS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Chuqur chandiqlar va postakne izlarini DEKA SmartXide Touch CO₂ lazer bilan davolash: mexanizm, bosqichlar va kurs — Radeski Skin Clinic.',
    body: uzBody(),
    keyTakeaways: [
      'SmartXide Touch fraksion CO₂ lazer chuqur qatlamda kolagen tiklaydi',
      'Chandiq turi va chuqurligi baholanadi',
      'Odatda 2–4 seans, 1–3 oy oralig\'i',
      'Tiklanish 5–10 kun davom etishi mumkin',
      'Faol akne avval davolanishi kerak',
    ],
    tags: ['DEKA SmartXide', 'CO2 lazer', 'Postakne', 'Chandiqlar', 'Fraksion lazer', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Chandiq tez o\'sayotgan yoki rangi o\'zgarayotgan bo\'lsa',
      'Faol akne yallig\'lanishi bo\'lsa',
      'Keloid yoki giperpigmentatsiya tarixi bo\'lsa',
      'Ochiq yara yoki infeksiya bo\'lsa',
    ],
    faq: [
      { question: 'Bir seans yetadimi?', answer: 'Yuzaki izlar yaxshilanishi mumkin, chuqur chandiqlar uchun odatda kurs kerak.' },
      { question: 'Qancha vaqt tiklanaman?', answer: '5–10 kun faol tiklanish, keyin asta-sekin yaxshilanish 2–3 oy ichida.' },
      { question: 'Xavfli bo\'ladimi?', answer: 'Dermatolog nazoratida va to\'g\'ri protokol bilan xavfsiz; qarshi ko\'rsatmalar tekshiriladi.' },
    ],
  },
  ru: {
    summary:
      'Лечение глубоких рубцов и следов постакне CO₂-лазером DEKA SmartXide Touch: механизм, этапы и курс — Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'SmartXide Touch фракционный CO₂ восстанавливает коллаген в глубоких слоях',
      'Оцениваются тип и глубина рубцов',
      'Обычно 2–4 сеанса с интервалом 1–3 месяца',
      'Восстановление может длиться 5–10 дней',
      'Активное акне сначала лечат',
    ],
    tags: ['DEKA SmartXide', 'CO2 лазер', 'Постакне', 'Рубцы', 'Фракционный лазер', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Рубец быстро растёт или меняет цвет',
      'Активное воспаление акне',
      'Кeloиды или гиперпигментация в анамнезе',
      'Открытая рана или инфекция',
    ],
    faq: [
      { question: 'Хватит ли одного сеанса?', answer: 'Поверхностные следы могут улучшиться, при глубоких рубцах обычно нужен курс.' },
      { question: 'Сколько длится восстановление?', answer: '5–10 дней активного восстановления, затем постепенное улучшение за 2–3 месяца.' },
      { question: 'Это безопасно?', answer: 'При контроле дерматолога и правильном протоколе — да; противопоказания проверяются.' },
    ],
  },
  en: {
    summary:
      'Treating deep scars and post-acne marks with DEKA SmartXide Touch CO₂ laser: mechanism, steps, and course at Radeski Skin Clinic.',
    body: enBody(),
    keyTakeaways: [
      'SmartXide Touch fractional CO₂ rebuilds collagen in deep layers',
      'Scar type and depth are assessed',
      'Usually 2–4 sessions, 1–3 months apart',
      'Recovery may take 5–10 days',
      'Active acne should be treated first',
    ],
    tags: ['DEKA SmartXide', 'CO2 laser', 'Post-acne', 'Scars', 'Fractional laser', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A scar grows quickly or changes color',
      'Active acne inflammation',
      'Keloid or hyperpigmentation history',
      'Open wound or infection',
    ],
    faq: [
      { question: 'Is one session enough?', answer: 'Superficial marks may improve; deep scars usually need a course.' },
      { question: 'How long is recovery?', answer: '5–10 days of active recovery, then gradual improvement over 2–3 months.' },
      { question: 'Is it safe?', answer: 'Yes under dermatologist supervision with proper protocol; contraindications are checked.' },
    ],
  },
};

export const DEKA_CO2_SCARS_ARTICLE: Article = {
  id: 'art-deka-co2-chandiqlar-radeski',
  slug: 'deka-co2-chandiqlar-radeski',
  title: {
    uz: 'DEKA SmartXide CO₂ bilan chandiqlar davolash — Radeski Skin Clinic',
    ru: 'Лечение рубцов CO₂-лазером DEKA SmartXide — Radeski Skin Clinic',
    en: 'Scar Treatment with DEKA SmartXide CO₂ — Radeski Skin Clinic',
  },
  summary: {
    uz: DEKA_CO2_SCARS_ARTICLE_CATALOG.uz.summary,
    ru: DEKA_CO2_SCARS_ARTICLE_CATALOG.ru.summary,
    en: DEKA_CO2_SCARS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: DEKA_CO2_SCARS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: DEKA_CO2_SCARS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: DEKA_CO2_SCARS_ARTICLE_CATALOG.en.body.slice(0, 500),
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
