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

const IMG = '/articles/morpheus8-rf-promo.png';

function uzBody(): string {
  return `## Xohlayman: yuz ovalini tortish va teri zichligini tiklash

Yosh o'tishi yoki og'irlik yo'qotishdan keyin **yuz konturi pasayishi**, **elastiklik kamayishi** va teri «suzib ketgan» ko'rinishi paydo bo'lishi mumkin. Ko'p bemorlar jarrohliksiz lifting va teri qattiqigini tiklashni xohlaydi.

![InMode Morpheus8 — RF mikroignali lifting](/articles/morpheus8-rf-promo.png)

*Radeski Skin Clinic da Morpheus8 mikroignali radiochastota yordamida yuz ovali va teri zichligi bilan ishlaymiz.*

## Bajaraman: RF Morpheus8 mikroignali lifting

Radeski Skin Clinic da **InMode Morpheus8** — mikroignali radiochastota (RF) tizimi — terining chuqur qatlamlariga nazoratli ta'sir qilib, kolagen sintezini rag'batlantiradi va yuz ovalini mustahkamlashga yordam beradi.

## Morpheus8 qanday ishlaydi?

Nozik ignalar teriga kirib, RF energiyasi **dermis** qatlamiga yetkaziladi. Bu «ichki tiklash» effektini hosil qiladi: teri asta-sekin qattiqroq, zichroq va konturli bo'ladi. Yuzaki qatlam minimal shikastlanadi.

## Radeski Skin Clinic da muolaja bosqichlari

### 1. Konsultatsiya

Dermatolog teri qattiqigi, ajin va kontur pasayish darajasini baholaydi. Muolaja zonasi belgilanadi (yuz, bo'yin va hokazo).

### 2. Anesteziya

Ko'pincha mahalliy krem yoki qo'shimcha og'riq qoldiruvchi qo'llaniladi.

### 3. Morpheus8 seansi

Applikator teriga mikroignalar va RF impulslarini beradi. Davomiyligi zonaga bog'liq — odatda 30–60 daqiqa.

### 4. Tiklanish

Qizarish va shish 1–3 kun davom etishi mumkin. Natija 4–8 hafta ichida asta-sekin shakllanadi.

## Necha seans kerak?

Odatda **1–3 seans** oralig'i bilan 4–6 haftada. Chuqurroq o'zgarishlar uchun kurs uzaytirilishi mumkin.

## Kimlar uchun mos?

- yuz ovali pasayishi;
- teri elastikligi va zichligi kamayishi;
- yuzaki va o'rta chuqurlikdagi ajinlar;
- bo'yin va dekolté zonasidagi sarkopenik o'zgarishlar.

Faol infeksiya, implantlar yoki ba'zi kasalliklarda qarshi ko'rsatmalar bo'lishi mumkin.

## Konsultatsiyaga yoziling

Jarrohliksiz lifting va teri qattiqigini tiklash uchun Radeski Skin Clinic shifokori **Morpheus8** protokolini individual tanlaydi.`;
}

function ruBody(): string {
  return `## Хочу: подтянуть овал лица и восстановить плотность кожи

С возрастом или после похудения **снижается контур**, **упругость**, кожа выглядит «обвисшей». Многие ищут безоперационный лifting и восстановление плотности.

![InMode Morpheus8 — RF-микроигольчатый лifting](/articles/morpheus8-rf-promo.png)

*В Radeski Skin Clinic мы работаем с овалом лица и плотностью кожи на микроигольчатом RF Morpheus8.*

## Делаем: RF-лифтинг Morpheus8

В Radeski Skin Clinic **InMode Morpheus8** — система микроигольчатого RF — воздействует на глубокие слои кожи, стимулирует коллаген и помогает укрепить овал лица.

## Как работает Morpheus8?

Тонкие иглы проникают в кожу и доставляют RF-энергию в **дерму**. Формируется эффект «внутренней подтяжки»: кожа постепенно становится плотнее и контурнее. Поверхностный слой повреждается минимально.

## Этапы процедуры в Radeski Skin Clinic

### 1. Консультация

Дерматолог оценивает упругость, морщины и степень потери контура. Определяется зона (лицо, шея и др.).

### 2. Анестезия

Часто применяется местный крем или дополнительное обезболивание.

### 3. Сеанс Morpheus8

Аппликатор создаёт микроканалы и RF-импульсы. Длительность зависит от зоны — обычно 30–60 минут.

### 4. Восстановление

Покраснение и отёк возможны 1–3 дня. Эффект формируется постепенно за 4–8 недель.

## Сколько сеансов нужно?

Обычно **1–3 сеанса** с интервалом 4–6 недель. Для более выраженных изменений курс может быть длиннее.

## Кому подходит?

- снижение овала лица;
- потеря упругости и плотности;
- мелкие и средние морщины;
- изменения на шее и декольте.

При активной инфекции, имплантах или некоторых заболеваниях могут быть противопоказания.

## Запишитесь на консультацию

Для безоперационного лifting и восстановления плотности врач Radeski Skin Clinic подберёт протокол **Morpheus8**.`;
}

function enBody(): string {
  return `## I want: a firmer facial contour and restored skin density

With age or after weight loss, the **facial contour softens**, **elasticity drops**, and skin can look lax. Many patients want non-surgical lifting and restored firmness.

![InMode Morpheus8 — RF microneedling lift](/articles/morpheus8-rf-promo.png)

*At Radeski Skin Clinic we address facial contour and skin density with Morpheus8 microneedle RF.*

## We deliver: RF Morpheus8 microneedling lift

Radeski Skin Clinic uses **InMode Morpheus8** — a microneedle radiofrequency system — to reach deep skin layers, stimulate collagen, and help strengthen the facial oval.

## How Morpheus8 works

Fine needles enter the skin and deliver RF energy to the **dermis**. This creates an "internal tightening" effect: skin gradually becomes firmer and more defined. Superficial damage is minimal.

## Treatment steps at Radeski Skin Clinic

### 1. Consultation

The dermatologist assesses firmness, wrinkles, and contour loss. Treatment zones are defined (face, neck, etc.).

### 2. Anesthesia

Topical cream or additional analgesia is often used.

### 3. Morpheus8 session

The applicator creates micro-channels and RF pulses. Duration depends on area — usually 30–60 minutes.

### 4. Recovery

Redness and swelling may last 1–3 days. Results develop over 4–8 weeks.

## How many sessions?

Typically **1–3 sessions** spaced 4–6 weeks apart. More pronounced change may need a longer course.

## Who is it for?

- loss of facial contour;
- reduced elasticity and density;
- fine to moderate wrinkles;
- neck and décolleté laxity.

Active infection, implants, or certain conditions may be contraindications.

## Book a consultation

For non-surgical lifting and restored firmness, a Radeski Skin Clinic physician will tailor a **Morpheus8** protocol for you.`;
}

export const MORPHEUS8_RF_LIFTING_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Yuz ovalini tortish va teri zichligini tiklash: InMode Morpheus8 RF mikroignali lifting protokoli va bosqichlar — Radeski Skin Clinic.',
    body: uzBody(),
    keyTakeaways: [
      'Morpheus8 RF energiyasini dermis qatlamiga yetkazadi',
      'Kolagen sintezi asta-sekin natija beradi',
      'Odatda 1–3 seans, 4–6 hafta oralig\'i',
      'Jarrohliksiz yondashuv',
      'Konsultatsiya va qarshi ko\'rsatmalar tekshiriladi',
    ],
    tags: ['Morpheus8', 'InMode', 'RF lifting', 'Yuz ovali', 'Radeski Skin Clinic', 'Mikroignali RF'],
    whenToSeeDoctor: [
      'Faol teri infeksiyasi bo\'lsa',
      'Implant yoki elektr qurilma bo\'lsa',
      'Homiladorlik yoki emizish davri',
      'Keloid yoki tiklanish buzilishi tarixi',
    ],
    faq: [
      { question: 'Og\'riqli bo\'ladimi?', answer: 'Mahalliy anesteziya bilan ko\'pchilik yengil noqulaylikni ta\'riflaydi.' },
      { question: 'Qachon natija ko\'rinadi?', answer: 'Birinchi o\'zgarishlar 2–4 haftada, to\'liq effekt 2–3 oy ichida.' },
      { question: 'Operatsiyadan farqi?', answer: 'Morpheus8 teri ichida tiklashni rag\'batlantiradi, kesish va chok qoldirmaydi.' },
    ],
  },
  ru: {
    summary:
      'Подтяжка овала лица и восстановление плотности: протокол RF-микроигольчатого лifting Morpheus8 — Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'Morpheus8 доставляет RF-энергию в дерму',
      'Коллаген синтезируется постепенно',
      'Обычно 1–3 сеанса с интервалом 4–6 недель',
      'Безоперационный подход',
      'Консультация и противопоказания обязательны',
    ],
    tags: ['Morpheus8', 'InMode', 'RF лifting', 'Овал лица', 'Radeski Skin Clinic', 'Микроигольчатый RF'],
    whenToSeeDoctor: [
      'Активная инфекция кожи',
      'Импланты или электронные устройства',
      'Беременность или лактация',
      'Кeloиды или нарушение заживления',
    ],
    faq: [
      { question: 'Больно ли?', answer: 'С местной анестезией чаще описывают лёгкий дискомфорт.' },
      { question: 'Когда виден результат?', answer: 'Первые изменения через 2–4 недели, полный эффект за 2–3 месяца.' },
      { question: 'Чем отличается от операции?', answer: 'Morpheus8 стимулирует внутреннее уплотнение без разрезов и швов.' },
    ],
  },
  en: {
    summary:
      'Facial contour tightening and skin density restoration: InMode Morpheus8 RF microneedling protocol and steps at Radeski Skin Clinic.',
    body: enBody(),
    keyTakeaways: [
      'Morpheus8 delivers RF energy to the dermis',
      'Collagen rebuilds gradually',
      'Usually 1–3 sessions, 4–6 weeks apart',
      'Non-surgical approach',
      'Consultation and contraindication review required',
    ],
    tags: ['Morpheus8', 'InMode', 'RF lifting', 'Facial contour', 'Radeski Skin Clinic', 'Microneedle RF'],
    whenToSeeDoctor: [
      'Active skin infection',
      'Implants or electronic devices',
      'Pregnancy or breastfeeding',
      'Keloid or impaired healing history',
    ],
    faq: [
      { question: 'Is it painful?', answer: 'With topical anesthesia, most describe mild discomfort.' },
      { question: 'When will I see results?', answer: 'Early changes in 2–4 weeks; full effect over 2–3 months.' },
      { question: 'How is it different from surgery?', answer: 'Morpheus8 stimulates internal tightening without incisions or sutures.' },
    ],
  },
};

export const MORPHEUS8_RF_LIFTING_ARTICLE: Article = {
  id: 'art-morpheus8-rf-lifting-radeski',
  slug: 'morpheus8-rf-lifting-radeski',
  title: {
    uz: 'Morpheus8 RF bilan yuz ovali va teri qattiqigi — Radeski Skin Clinic',
    ru: 'RF-лифтинг Morpheus8: овал лица и плотность кожи — Radeski Skin Clinic',
    en: 'Facial Lifting with Morpheus8 RF — Radeski Skin Clinic',
  },
  summary: {
    uz: MORPHEUS8_RF_LIFTING_ARTICLE_CATALOG.uz.summary,
    ru: MORPHEUS8_RF_LIFTING_ARTICLE_CATALOG.ru.summary,
    en: MORPHEUS8_RF_LIFTING_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: MORPHEUS8_RF_LIFTING_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: MORPHEUS8_RF_LIFTING_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: MORPHEUS8_RF_LIFTING_ARTICLE_CATALOG.en.body.slice(0, 500),
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
