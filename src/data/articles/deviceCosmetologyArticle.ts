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

/*
 * Device cosmetology: which of the clinic's devices treats which problem — a map from problem to
 * device, with links to each device page. Facts: the equipment catalog's own descriptions
 * (DEKA CO₂, DEKA Moveo alexandrite, Hollywood Spectra Q-switch, Derma V, IPL InMode, LaseMD
 * Ultra thulium, Surgitron, Daavlin phototherapy and Aquex), the JANUS PRO skin scan in the
 * dermatocosmetologist visit. Point: the device follows the diagnosis, not the other way round.
 */

const COVER = {
  uz: '/articles/apparatli-kosmetologiya-cover-uz.jpg',
  ru: '/articles/apparatli-kosmetologiya-cover-ru.jpg',
  en: '/articles/apparatli-kosmetologiya-cover-en.jpg',
};

function uzBody(): string {
  return `Apparatli kosmetologiya — lazer, yorug‘lik (IPL), radioto‘lqin va boshqa tibbiy apparatlar yordamida teri muammolarini davolash. Klinikada apparatlar ko‘p, va bemorlar ko‘pincha «menga qaysi lazer kerak?» deb so‘raydi. To‘g‘ri savol esa boshqacha: **avval muammo nima?** Apparat tashxisdan keyin tanlanadi. Quyida Radeski’dagi apparatlar qaysi muammo uchun ishlatilishini qisqacha ko‘rsatamiz.

## Avval — ko‘rik

Dermatokosmetolog qabulida teri ko‘zdan kechiriladi va **JANUS PRO** apparatida yuz skanerlanadi: pigment, qizarish, g‘ovaklar va teri relyefi raqamlarda ko‘rinadi. Shundan keyin muolaja rejasi tuziladi — ba’zan bitta apparat, ba’zan bir nechtasining kombinatsiyasi.

## Muammo → apparat

| Muammo | Apparat |
|---|---|
| Keraksiz tuklar | DEKA Moveo aleksandrit lazeri (755 nm) |
| Pigment dog‘lari, melazma | Hollywood Spectra (Q-switch), IPL InMode Lumecca, LaseMD Ultra |
| Kengaygan g‘ovaklar, yog‘li teri | Hollywood Spectra — karbon piling |
| Qizarish, kuperoz, tomir to‘rlari | Derma V (Lutronic), IPL |
| Akne izlari va chandiqlar | DEKA CO₂ SmartXide (fraksion), Derma V |
| Notekis rang, xira teri, fotoqarish | LaseMD Ultra (tuliy 1927 nm), IPL |
| Papilloma, so‘gal, molluskum | DEKA CO₂, Surgitron radioto‘lqin |
| Psoriaz, vitiligo | Daavlin tor polosali UVB fototerapiya |
| Ortiqcha terlash | Daavlin Aquex ionoforez |

## Har bir apparat qisqacha

- **DEKA Moveo (aleksandrit, 755 nm)** — lazer epilyatsiya; sovutish tizimi tufayli muolaja deyarli og‘riqsiz, kurs odatda 6–8 seans.
- **Hollywood Spectra (Lutronic)** — Q-switch lazer: karbon piling, gold toning va pigmentatsiyani davolash.
- **Derma V (Lutronic)** — qon tomirlar va pigmentatsiyani lazer bilan davolash: kuperoz, rozatsea, gemangiomalar.
- **IPL InMode Lumecca** — intensiv yorug‘lik: pigment, mayda tomirlar va teri toni; reabilitatsiya deyarli yo‘q.
- **LaseMD Ultra (tuliy lazer)** — asosan terining yuzaki qatlamlari bilan ishlaydi: notekis rang, pigment, quyosh izlari; soch uchun lazer mezoterapiya ham qilinadi.
- **DEKA CO₂ SmartXide** — fraksion CO₂ lazer: teri yangilanishi, postakne chandiqlari; PinPoint rejimida o‘smalarni olib tashlash.
- **Surgitron** — radioto‘lqin jarrohligi: papillomalar, molluskum va xavfsiz o‘smalar minimal iz bilan.

## Apparat muolajalaridan oldin bilish kerak

- **Quyosh:** ko‘p lazerlardan oldin va keyin teri qoraymagan bo‘lishi kerak — aks holda pigment xavfi oshadi.
- **Kurs:** ko‘p muolajalar bir seansda emas, kurs bilan natija beradi.
- **Mavsum:** ayrim muolajalarni kuz-qishda boshlash qulayroq.
- **Qarshi ko‘rsatmalar:** homiladorlik, faol yallig‘lanish, ayrim dorilar (masalan, fotosensibilizatorlar) va kasalliklar — shifokorga albatta ayting.

Batafsil: [Kosmetolog Farg‘onada](/uz/fargona/kosmetolog), [Apparatli kosmetologiya xizmatlari](/uz/services/apparatnaya-kosmetologiya), [IPL Lumecca va pigmentatsiya](/uz/articles/art-ipl-lumecca-pigmentatsiya-radeski), [Lazer epilyatsiya: xatolar](/uz/articles/art-lazer-epilyatsiya-samara-xatolar).`;
}

function ruBody(): string {
  return `Аппаратная косметология — лечение проблем кожи лазерами, светом (IPL), радиоволной и другими медицинскими аппаратами. Аппаратов в клинике много, и пациенты часто спрашивают: «Какой лазер мне нужен?» Правильный вопрос другой: **какая проблема?** Аппарат выбирают после диагноза. Ниже — какие аппараты Radeski для каких задач.

## Сначала — осмотр

На приёме дерматокосметолога кожу осматривают и сканируют лицо на аппарате **JANUS PRO**: пигмент, покраснение, поры и рельеф видны в цифрах. После этого составляют план — иногда это один аппарат, иногда сочетание нескольких.

## Проблема → аппарат

| Проблема | Аппарат |
|---|---|
| Нежелательные волосы | Александритовый лазер DEKA Moveo (755 нм) |
| Пигментные пятна, мелазма | Hollywood Spectra (Q-switch), IPL InMode Lumecca, LaseMD Ultra |
| Расширенные поры, жирная кожа | Hollywood Spectra — карбоновый пилинг |
| Покраснение, купероз, сосудистые сеточки | Derma V (Lutronic), IPL |
| Следы акне и рубцы | DEKA CO₂ SmartXide (фракционный), Derma V |
| Неровный тон, тусклость, фотостарение | LaseMD Ultra (тулий 1927 нм), IPL |
| Папилломы, бородавки, моллюск | DEKA CO₂, радиоволна Surgitron |
| Псориаз, витилиго | Узкополосная UVB-фототерапия Daavlin |
| Повышенная потливость | Ионофорез Daavlin Aquex |

## Коротко о каждом аппарате

- **DEKA Moveo (александрит, 755 нм)** — лазерная эпиляция; благодаря охлаждению почти без боли, курс обычно 6–8 сеансов.
- **Hollywood Spectra (Lutronic)** — Q-switch лазер: карбоновый пилинг, gold toning и лечение пигментации.
- **Derma V (Lutronic)** — лазерное лечение сосудов и пигментации: купероз, розацеа, гемангиомы.
- **IPL InMode Lumecca** — интенсивный свет: пигмент, мелкие сосуды и тон кожи; почти без реабилитации.
- **LaseMD Ultra (тулиевый лазер)** — работает преимущественно с поверхностными слоями кожи: неровный тон, пигмент, следы солнца; также лазерная мезотерапия для волос.
- **DEKA CO₂ SmartXide** — фракционный CO₂-лазер: обновление кожи, рубцы постакне; в режиме PinPoint — удаление образований.
- **Surgitron** — радиоволновая хирургия: папилломы, моллюск и доброкачественные образования с минимальным следом.

## Что важно знать перед аппаратными процедурами

- **Солнце:** перед многими лазерами и после них кожа не должна быть загорелой — иначе выше риск пигментации.
- **Курс:** многие процедуры дают результат курсом, а не за один сеанс.
- **Сезон:** некоторые процедуры удобнее начинать осенью и зимой.
- **Противопоказания:** беременность, активное воспаление, некоторые препараты (например, фотосенсибилизаторы) и заболевания — обязательно скажите врачу.

Подробнее: [Косметолог в Фергане](/ru/fargona/kosmetolog), [Аппаратная косметология](/ru/services/apparatnaya-kosmetologiya), [IPL Lumecca и пигментация](/ru/articles/art-ipl-lumecca-pigmentatsiya-radeski), [Лазерная эпиляция: ошибки](/ru/articles/art-lazer-epilyatsiya-samara-xatolar).`;
}

function enBody(): string {
  return `Device cosmetology treats skin problems with lasers, intense pulsed light (IPL), radiofrequency and other medical devices. The clinic has many devices, and patients often ask, “Which laser do I need?” The better question is **what is the problem?** The device is chosen after the diagnosis. Here is which Radeski device is used for which problem.

## First — an examination

At a dermatocosmetologist visit your skin is examined and your face is scanned on a **JANUS PRO** device: pigment, redness, pores and texture show up as numbers. Then the treatment plan is made — sometimes one device, sometimes a combination.

## Problem → device

| Problem | Device |
|---|---|
| Unwanted hair | DEKA Moveo alexandrite laser (755 nm) |
| Pigment spots, melasma | Hollywood Spectra (Q-switch), IPL InMode Lumecca, LaseMD Ultra |
| Enlarged pores, oily skin | Hollywood Spectra — carbon peel |
| Redness, couperose, thread veins | Derma V (Lutronic), IPL |
| Acne marks and scars | DEKA CO₂ SmartXide (fractional), Derma V |
| Uneven tone, dullness, sun damage | LaseMD Ultra (thulium 1927 nm), IPL |
| Papillomas, warts, molluscum | DEKA CO₂, Surgitron radiofrequency |
| Psoriasis, vitiligo | Daavlin narrowband UVB phototherapy |
| Excessive sweating | Daavlin Aquex iontophoresis |

## Each device in brief

- **DEKA Moveo (alexandrite, 755 nm)** — laser hair removal; built-in cooling makes it almost painless; usually 6–8 sessions.
- **Hollywood Spectra (Lutronic)** — a Q-switch laser: carbon peel, gold toning and pigmentation treatment.
- **Derma V (Lutronic)** — laser treatment of vessels and pigment: couperose, rosacea, haemangiomas.
- **IPL InMode Lumecca** — intense light for pigment, small vessels and skin tone; almost no downtime.
- **LaseMD Ultra (thulium laser)** — works mainly in the superficial skin layers: uneven tone, pigment, sun damage; also laser mesotherapy for hair.
- **DEKA CO₂ SmartXide** — a fractional CO₂ laser: skin renewal and acne scars; in PinPoint mode, removal of growths.
- **Surgitron** — radiofrequency surgery: papillomas, molluscum and benign growths with minimal marks.

## Good to know before device treatments

- **Sun:** before and after many lasers the skin should not be tanned, or the risk of pigmentation rises.
- **Course:** many treatments work as a course rather than in one session.
- **Season:** some treatments are easier to start in autumn and winter.
- **Contraindications:** pregnancy, active inflammation, some medicines (such as photosensitisers) and illnesses — always tell the doctor.

Read more: [Cosmetologist in Fergana](/en/fargona/kosmetolog), [Device cosmetology services](/en/services/apparatnaya-kosmetologiya), [IPL Lumecca for pigmentation](/en/articles/art-ipl-lumecca-pigmentatsiya-radeski), [Laser hair removal: common mistakes](/en/articles/art-lazer-epilyatsiya-samara-xatolar).`;
}

export const DEVICE_COSMETOLOGY_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Apparatli kosmetologiya: qaysi apparat qaysi muammo uchun — lazer epilyatsiya, pigment, g'ovaklar, qizarish, chandiqlar, papillomalar. Radeski apparatlari, Farg'ona.",
    body: uzBody(),
    keyTakeaways: [
      'Apparat tashxisdan keyin tanlanadi, avval ko‘rik va yuz skaneri',
      'Pigment uchun — Hollywood Spectra, IPL, LaseMD Ultra',
      'Qizarish va tomirlar uchun — Derma V va IPL',
      'Chandiqlar uchun — DEKA CO₂; tuklar uchun — DEKA Moveo',
      'Ko‘p muolajalar kurs bilan va qoraymagan teriga qilinadi',
    ],
    tags: ['Apparatli kosmetologiya', 'Lazer', 'IPL', 'Hollywood Spectra', 'Derma V', 'DEKA', 'Kosmetolog', "Farg'ona", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Dog‘ tez kattalashyapti, rangi yoki shakli o‘zgaryapti — avval dermatoskopiya',
      'Lazerdan keyin pufak, kuchli qizarish yoki og‘riq paydo bo‘ldi',
      'Muolajadan keyin teri rangi qoramtir yoki oqarib qoldi',
      'Akne yallig‘lanishi kuchli — avval dermatolog davolashi kerak',
    ],
    faq: [
      {
        question: 'Qaysi apparat menga mos ekanini qanday bilaman?',
        answer:
          'Dermatokosmetolog ko‘rigida teri baholanadi va JANUS PRO apparatida yuz skanerlanadi. Apparat muammo turiga qarab tanlanadi, ba’zan bir nechtasi birlashtiriladi.',
      },
      {
        question: 'Lazer muolajasi og‘riqlimi?',
        answer:
          'Ko‘pchilik apparatlarda sovutish yoki og‘riqsizlantiruvchi krem bor. Sezgi muolaja turiga bog‘liq: epilyatsiya va IPL odatda yengil, CO₂ shlifovka esa og‘riqsizlantirish bilan qilinadi.',
      },
      {
        question: 'Yozda lazer qilish mumkinmi?',
        answer:
          'Ba’zi muolajalar mumkin, lekin teri qoraymagan bo‘lishi va keyin qat’iy SPF kerak. Pigment va shlifovka kabi muolajalarni kuz-qishda boshlash qulayroq.',
      },
      {
        question: 'Natija necha seansda bo‘ladi?',
        answer:
          'Bu apparat va muammoga bog‘liq: IPL’da ko‘pincha 1–3 seans, lazer epilyatsiyada 6–8 seans. Aniq rejani shifokor ko‘rikdan keyin aytadi.',
      },
    ],
  },
  ru: {
    summary:
      'Аппаратная косметология: какой аппарат для какой проблемы — эпиляция, пигмент, поры, покраснение, рубцы, папилломы. Аппараты Radeski, Фергана.',
    body: ruBody(),
    keyTakeaways: [
      'Аппарат выбирают после диагноза — сначала осмотр и сканер лица',
      'Для пигмента — Hollywood Spectra, IPL, LaseMD Ultra',
      'Для покраснения и сосудов — Derma V и IPL',
      'Для рубцов — DEKA CO₂; для волос — DEKA Moveo',
      'Многие процедуры делают курсом и на незагорелую кожу',
    ],
    tags: ['Аппаратная косметология', 'Лазер', 'IPL', 'Hollywood Spectra', 'Derma V', 'DEKA', 'Косметолог', 'Фергана', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Пятно быстро растёт, меняет цвет или форму — сначала дерматоскопия',
      'После лазера появились пузыри, сильное покраснение или боль',
      'После процедуры кожа потемнела или посветлела',
      'Сильное воспаление акне — сначала лечение у дерматолога',
    ],
    faq: [
      {
        question: 'Как понять, какой аппарат мне подходит?',
        answer:
          'На приёме дерматокосметолога оценивают кожу и сканируют лицо на JANUS PRO. Аппарат выбирают по типу проблемы, иногда сочетают несколько.',
      },
      {
        question: 'Больно ли делать лазер?',
        answer:
          'У большинства аппаратов есть охлаждение или используется крем-анестетик. Ощущения зависят от процедуры: эпиляция и IPL обычно переносятся легко, CO₂-шлифовка — с анестезией.',
      },
      {
        question: 'Можно ли делать лазер летом?',
        answer:
          'Некоторые процедуры можно, но кожа не должна быть загорелой, а после нужен строгий SPF. Пигмент и шлифовку удобнее начинать осенью и зимой.',
      },
      {
        question: 'За сколько сеансов будет результат?',
        answer:
          'Зависит от аппарата и проблемы: при IPL часто 1–3 сеанса, при лазерной эпиляции 6–8. Точный план врач назовёт после осмотра.',
      },
    ],
  },
  en: {
    summary:
      'Device cosmetology: which device for which problem — hair removal, pigment, pores, redness, scars, papillomas. Radeski devices, Fergana.',
    body: enBody(),
    keyTakeaways: [
      'The device is chosen after diagnosis — examination and face scan first',
      'For pigment — Hollywood Spectra, IPL, LaseMD Ultra',
      'For redness and vessels — Derma V and IPL',
      'For scars — DEKA CO₂; for hair removal — DEKA Moveo',
      'Many treatments are a course and need untanned skin',
    ],
    tags: ['Device cosmetology', 'Laser', 'IPL', 'Hollywood Spectra', 'Derma V', 'DEKA', 'Cosmetologist', 'Fergana', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A spot is growing fast or changing colour or shape — dermatoscopy first',
      'Blisters, strong redness or pain appear after a laser',
      'The skin darkens or lightens after a treatment',
      'Acne is badly inflamed — a dermatologist should treat it first',
    ],
    faq: [
      {
        question: 'How do I know which device suits me?',
        answer:
          'At a dermatocosmetologist visit your skin is assessed and your face scanned on JANUS PRO. The device is chosen by problem type, sometimes several are combined.',
      },
      {
        question: 'Do laser treatments hurt?',
        answer:
          'Most devices have cooling or are used with a numbing cream. It depends on the treatment: hair removal and IPL are usually mild, CO₂ resurfacing is done with anaesthesia.',
      },
      {
        question: 'Can I have laser treatment in summer?',
        answer:
          'Some treatments, yes, but the skin must not be tanned and strict SPF is needed afterwards. Pigment work and resurfacing are easier to start in autumn and winter.',
      },
      {
        question: 'How many sessions will I need?',
        answer:
          'It depends on the device and problem: IPL often 1–3 sessions, laser hair removal 6–8. The doctor gives the exact plan after the examination.',
      },
    ],
  },
};

export const DEVICE_COSMETOLOGY_ARTICLE: Article = {
  id: 'art-apparatli-kosmetologiya',
  slug: 'apparatli-kosmetologiya',
  title: {
    uz: 'Apparatli kosmetologiya: qaysi apparat qaysi muammo uchun',
    ru: 'Аппаратная косметология: какой аппарат для какой проблемы',
    en: 'Device Cosmetology: Which Device for Which Skin Problem',
  },
  summary: {
    uz: DEVICE_COSMETOLOGY_ARTICLE_CATALOG.uz.summary,
    ru: DEVICE_COSMETOLOGY_ARTICLE_CATALOG.ru.summary,
    en: DEVICE_COSMETOLOGY_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: DEVICE_COSMETOLOGY_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: DEVICE_COSMETOLOGY_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: DEVICE_COSMETOLOGY_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Mangasaryan Lorena Georgievna',
    ru: 'Мангасарян Лорена Георгиевна',
    en: 'Dr. Lorena Georgievna Mangasaryan',
  },
  date: '2026-11-12',
  image: COVER.uz,
  images: COVER,
  views: 0,
};
