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
 * Facial cleansing types the clinic offers (mechanical and ultrasonic with Innoaesthetics,
 * carbon peel on Hollywood Spectra, PRX-T33 peel) — how each works, which skin it suits, how
 * often, and when cleansing is the wrong step (inflamed acne, rosacea, couperose → doctor first).
 * Clinic facts: price list names, the ultrasonic cleansing service, the carbon peel article.
 */

const COVER = {
  uz: '/articles/yuz-tozalash-turlari-cover-uz.jpg',
  ru: '/articles/yuz-tozalash-turlari-cover-ru.jpg',
  en: '/articles/yuz-tozalash-turlari-cover-en.jpg',
};

function uzBody(): string {
  return `Yuz tozalash — kosmetologiyaning eng mashhur muolajasi. Lekin «tozalash» bitta muolaja emas: mexanik, ultratovush, karbon piling yoki pilingli tozalash teriga turlicha ta’sir qiladi. Noto‘g‘ri tanlangan tozalash sezgir terini qizartirishi yoki yallig‘langan akneni kuchaytirishi mumkin. Quyida Radeski’dagi turlar va ularning kimga mosligi.

## Mexanik yuz tozalash

Kosmetolog teri bug‘langandan keyin qora nuqtalar va tiqilib qolgan g‘ovaklarni qo‘lda, steril asboblar bilan tozalaydi. Radeski’da **Innoaesthetics** professional kosmetikasi bilan bajariladi.

- **Kimga mos:** yog‘li va aralash teri, ko‘p qora nuqtalar (komedonlar).
- **E’tibor:** muolajadan keyin bir-ikki kun qizarish bo‘lishi mumkin; sezgir va tomirli teriga mos emas.

## Ultratovush yuz tozalash

Ultratovush to‘lqinlari terining yuzaki qatlamini yumshoq tozalaydi va o‘lik hujayralarni ko‘chiradi. Teri deyarli travma olmaydi.

- **Kimga mos:** sezgir, quruq yoki yupqa teri, yengil ifloslanish, muntazam parvarish.
- **E’tibor:** chuqur tiqilgan komedonlarni to‘liq olib tashlamaydi — kerak bo‘lsa mexanik tozalash bilan birlashtiriladi.

## Karbon piling (Hollywood Spectra)

Teriga uglerod (karbon) niqobi surtiladi, keyin **Hollywood Spectra** Q-switch lazeri bilan ishlanadi. Uglerod g‘ovaklardagi yog‘ va ifloslikni «tortadi», lazer esa teri yuzasini yangilaydi.

- **Kimga mos:** kengaygan g‘ovaklar, yog‘li teri, xira rang, yengil akne izlari.
- **E’tibor:** reabilitatsiya deyarli yo‘q; «gold toning» bilan birlashtirish mumkin.

## PRX-T33 bilan tozalash

**PRX-T33** — terini qattiq ko‘chirmasdan yangilaydigan piling. U teri tonusini va yorqinligini yaxshilaydi.

- **Kimga mos:** xira, notekis teri, mayda izlar, tez natija kerak bo‘lganda.

## Qachon tozalash noto‘g‘ri qadam?

- **Yallig‘langan, yiringli akne** — mexanik tozalash infeksiyani tarqatishi mumkin. Avval dermatolog davolaydi.
- **Rozatsea va kuperoz** — bug‘lash va mexanik bosim qizarishni kuchaytiradi; ular uchun boshqa muolajalar tanlanadi.
- **Gerpes, ochiq yaralar yoki teri infeksiyasi** — tozalash keyinga suriladi.

## Qanchalik tez-tez?

Odatda tozalash har 1–2 oyda yoki teri holatiga qarab qilinadi. Uyda yumshoq yuvish vositasi, namlantirish va kunduzi **SPF** natijani uzaytiradi. Tozalashdan keyin 1–2 kun makiyaj va issiq hammomdan saqlaning.

Batafsil: [Kosmetolog Farg‘onada](/uz/fargona/kosmetolog), [Ultratovush yuz tozalash](/uz/services/apparatnaya-kosmetologiya/ultratovush-yuz-tozalash), [Hollywood Spectra va g‘ovaklar](/uz/articles/art-hollywood-spectra-poralar-radeski).`;
}

function ruBody(): string {
  return `Чистка лица — самая популярная процедура в косметологии. Но «чистка» — это не одна процедура: механическая, ультразвуковая, карбоновый пилинг или чистка с пилингом действуют на кожу по-разному. Неправильно выбранная чистка может вызвать покраснение чувствительной кожи или усилить воспалённое акне. Ниже — виды чистки в Radeski и кому какая подходит.

## Механическая чистка лица

Косметолог после распаривания вручную, стерильными инструментами удаляет чёрные точки и забитые поры. В Radeski процедуру проводят с профессиональной косметикой **Innoaesthetics**.

- **Кому подходит:** жирная и комбинированная кожа, много чёрных точек (комедонов).
- **Важно:** день-два после может держаться покраснение; не подходит для чувствительной кожи с сосудами.

## Ультразвуковая чистка лица

Ультразвуковые волны мягко очищают поверхностный слой кожи и снимают отмершие клетки. Кожа почти не травмируется.

- **Кому подходит:** чувствительная, сухая или тонкая кожа, лёгкие загрязнения, регулярный уход.
- **Важно:** глубокие комедоны полностью не удаляет — при необходимости сочетают с механической чисткой.

## Карбоновый пилинг (Hollywood Spectra)

На кожу наносят угольную (карбоновую) маску, затем обрабатывают Q-switch лазером **Hollywood Spectra**. Углерод «вытягивает» жир и загрязнения из пор, а лазер обновляет поверхность кожи.

- **Кому подходит:** расширенные поры, жирная кожа, тусклый цвет, лёгкие следы акне.
- **Важно:** почти без реабилитации; можно сочетать с «gold toning».

## Чистка с PRX-T33

**PRX-T33** — пилинг, который обновляет кожу без сильного шелушения. Улучшает тонус и сияние.

- **Кому подходит:** тусклая, неровная кожа, мелкие следы, когда нужен быстрый результат.

## Когда чистка — неверный шаг?

- **Воспалённое, гнойное акне** — механическая чистка может распространить инфекцию. Сначала лечит дерматолог.
- **Розацеа и купероз** — распаривание и механическое давление усиливают покраснение; для них выбирают другие процедуры.
- **Герпес, открытые ранки или инфекция кожи** — чистку откладывают.

## Как часто?

Обычно чистку делают раз в 1–2 месяца или по состоянию кожи. Дома мягкое очищение, увлажнение и дневной **SPF** продлевают результат. После чистки 1–2 дня без макияжа и горячей бани.

Подробнее: [Косметолог в Фергане](/ru/fargona/kosmetolog), [Ультразвуковая чистка лица](/ru/services/apparatnaya-kosmetologiya/ultratovush-yuz-tozalash), [Hollywood Spectra и поры](/ru/articles/art-hollywood-spectra-poralar-radeski).`;
}

function enBody(): string {
  return `Facial cleansing is the most popular treatment in cosmetology. But “cleansing” is not one treatment: mechanical, ultrasonic, carbon peel and peel-based cleansing all act on the skin differently. The wrong choice can redden sensitive skin or worsen inflamed acne. Here are the types offered at Radeski and who each suits.

## Mechanical facial cleansing

After steaming, the cosmetologist removes blackheads and clogged pores by hand with sterile instruments. At Radeski it is done with **Innoaesthetics** professional products.

- **Suits:** oily and combination skin, many blackheads (comedones).
- **Note:** redness may last a day or two; not for sensitive skin with visible vessels.

## Ultrasonic facial cleansing

Ultrasonic waves gently clean the surface layer of the skin and lift dead cells, with almost no trauma.

- **Suits:** sensitive, dry or thin skin, light congestion, regular care.
- **Note:** it does not fully clear deep comedones — it can be combined with mechanical cleansing.

## Carbon peel (Hollywood Spectra)

A carbon mask is applied and then treated with the **Hollywood Spectra** Q-switch laser. The carbon draws oil and debris out of the pores, and the laser renews the skin surface.

- **Suits:** enlarged pores, oily skin, dull complexion, mild acne marks.
- **Note:** almost no downtime; can be combined with “gold toning”.

## Cleansing with PRX-T33

**PRX-T33** is a peel that renews the skin without heavy flaking. It improves tone and glow.

- **Suits:** dull, uneven skin, small marks, when you want a quick result.

## When cleansing is the wrong step

- **Inflamed, pus-filled acne** — mechanical cleansing can spread infection. A dermatologist treats it first.
- **Rosacea and couperose** — steaming and pressure make redness worse; other treatments are chosen.
- **Cold sores, open wounds or skin infection** — cleansing is postponed.

## How often?

Cleansing is usually done every 1–2 months or as your skin needs. At home, gentle cleansing, moisturiser and daily **SPF** keep the result longer. Avoid make-up and hot saunas for 1–2 days afterwards.

Read more: [Cosmetologist in Fergana](/en/fargona/kosmetolog), [Ultrasonic facial cleansing](/en/services/apparatnaya-kosmetologiya/ultratovush-yuz-tozalash), [Hollywood Spectra and pores](/en/articles/art-hollywood-spectra-poralar-radeski).`;
}

export const FACIAL_CLEANSING_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Yuz tozalash turlari: mexanik, ultratovush, karbon piling va PRX-T33 — qanday ishlaydi, qaysi teriga mos, qachon tozalash mumkin emas. Radeski — Farg'ona.",
    body: uzBody(),
    keyTakeaways: [
      'Mexanik tozalash — yog‘li teri va ko‘p qora nuqtalar uchun',
      'Ultratovush tozalash — sezgir va quruq teri uchun yumshoq variant',
      'Karbon piling g‘ovaklar va yog‘li teri uchun, reabilitatsiyasiz',
      'Yallig‘langan akne, rozatsea va kuperozda avval shifokor',
      'Odatda har 1–2 oyda; uyda SPF va namlantirish natijani uzaytiradi',
    ],
    tags: ['Yuz tozalash', 'Ultratovush tozalash', 'Karbon piling', 'PRX-T33', 'Kosmetolog', "Farg'ona", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Yuzda yiringli, og‘riqli toshmalar ko‘p',
      'Tozalashdan keyin qizarish va shish 2–3 kundan ko‘p davom etyapti',
      'Yuz doimiy qizaradi yoki tomir to‘rlari ko‘rinadi',
      'Tozalashdan keyin teri qoramtir dog‘lar bilan qoldi',
    ],
    faq: [
      {
        question: 'Qaysi tozalash menga mos?',
        answer:
          'Yog‘li teri va qora nuqtalarda ko‘pincha mexanik, sezgir terida ultratovush, kengaygan g‘ovaklarda karbon piling tanlanadi. Aniq tanlovni kosmetolog teri holatiga qarab beradi.',
      },
      {
        question: 'Aknesi bor odam yuz tozalash qildirsa bo‘ladimi?',
        answer:
          'Yengil komedonal aknede mumkin. Yallig‘langan, yiringli aknede esa mexanik tozalash zarar qilishi mumkin — avval dermatolog davolaydi.',
      },
      {
        question: 'Tozalashdan keyin qancha vaqt qizarish bo‘ladi?',
        answer:
          'Mexanik tozalashdan keyin odatda bir-ikki kun, ultratovush va karbon pilingdan keyin deyarli bo‘lmaydi. 1–2 kun makiyaj qilmaslik tavsiya etiladi.',
      },
      {
        question: 'Qanchalik tez-tez qilish kerak?',
        answer:
          'Odatda har 1–2 oyda yoki teri holatiga qarab. Juda tez-tez qilingan tozalash terini qitiqlashi mumkin.',
      },
    ],
  },
  ru: {
    summary:
      'Виды чистки лица: механическая, ультразвуковая, карбоновый пилинг и PRX-T33 — как работают, какой коже подходят, когда чистку делать нельзя. Radeski — Фергана.',
    body: ruBody(),
    keyTakeaways: [
      'Механическая чистка — для жирной кожи и множества чёрных точек',
      'Ультразвуковая чистка — мягкий вариант для чувствительной и сухой кожи',
      'Карбоновый пилинг — для пор и жирной кожи, без реабилитации',
      'При воспалённом акне, розацеа и куперозе — сначала врач',
      'Обычно раз в 1–2 месяца; SPF и увлажнение продлевают результат',
    ],
    tags: ['Чистка лица', 'Ультразвуковая чистка', 'Карбоновый пилинг', 'PRX-T33', 'Косметолог', 'Фергана', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'На лице много гнойных болезненных высыпаний',
      'Покраснение и отёк после чистки держатся дольше 2–3 дней',
      'Лицо постоянно краснеет или видны сосудистые сеточки',
      'После чистки остались тёмные пятна',
    ],
    faq: [
      {
        question: 'Какая чистка мне подходит?',
        answer:
          'При жирной коже и чёрных точках чаще выбирают механическую, при чувствительной — ультразвуковую, при расширенных порах — карбоновый пилинг. Точный выбор сделает косметолог по состоянию кожи.',
      },
      {
        question: 'Можно ли делать чистку при акне?',
        answer:
          'При лёгком комедональном акне можно. При воспалённом, гнойном акне механическая чистка может навредить — сначала лечит дерматолог.',
      },
      {
        question: 'Сколько держится покраснение после чистки?',
        answer:
          'После механической — обычно день-два, после ультразвуковой и карбонового пилинга почти нет. 1–2 дня лучше обойтись без макияжа.',
      },
      {
        question: 'Как часто делать чистку?',
        answer:
          'Обычно раз в 1–2 месяца или по состоянию кожи. Слишком частая чистка может раздражать кожу.',
      },
    ],
  },
  en: {
    summary:
      'Types of facial cleansing: mechanical, ultrasonic, carbon peel and PRX-T33 — how they work, which skin they suit and when cleansing should wait. Radeski — Fergana.',
    body: enBody(),
    keyTakeaways: [
      'Mechanical cleansing — for oily skin and many blackheads',
      'Ultrasonic cleansing — a gentle option for sensitive and dry skin',
      'Carbon peel — for pores and oily skin, no downtime',
      'With inflamed acne, rosacea or couperose — see a doctor first',
      'Usually every 1–2 months; SPF and moisturiser keep results longer',
    ],
    tags: ['Facial cleansing', 'Ultrasonic cleansing', 'Carbon peel', 'PRX-T33', 'Cosmetologist', 'Fergana', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'You have many painful, pus-filled spots on your face',
      'Redness and swelling last more than 2–3 days after cleansing',
      'Your face is always red or thread veins are visible',
      'Dark spots remain after a cleansing',
    ],
    faq: [
      {
        question: 'Which cleansing is right for me?',
        answer:
          'Oily skin with blackheads often gets mechanical cleansing, sensitive skin ultrasonic, and enlarged pores a carbon peel. The cosmetologist chooses based on your skin.',
      },
      {
        question: 'Can I have a facial cleansing with acne?',
        answer:
          'With mild comedonal acne, yes. With inflamed, pus-filled acne mechanical cleansing can do harm — a dermatologist treats it first.',
      },
      {
        question: 'How long does redness last afterwards?',
        answer:
          'Usually a day or two after mechanical cleansing, almost none after ultrasonic cleansing or a carbon peel. Skip make-up for 1–2 days.',
      },
      {
        question: 'How often should I have it?',
        answer:
          'Usually every 1–2 months or as your skin needs. Cleansing too often can irritate the skin.',
      },
    ],
  },
};

export const FACIAL_CLEANSING_ARTICLE: Article = {
  id: 'art-yuz-tozalash-turlari',
  slug: 'yuz-tozalash-turlari',
  title: {
    uz: 'Yuz tozalash turlari: mexanik, ultratovush va karbon piling — qaysi biri sizga mos',
    ru: 'Виды чистки лица: механическая, ультразвуковая и карбоновый пилинг — какая подходит вам',
    en: 'Types of Facial Cleansing: Mechanical, Ultrasonic and Carbon Peel — Which One Suits You',
  },
  summary: {
    uz: FACIAL_CLEANSING_ARTICLE_CATALOG.uz.summary,
    ru: FACIAL_CLEANSING_ARTICLE_CATALOG.ru.summary,
    en: FACIAL_CLEANSING_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: FACIAL_CLEANSING_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: FACIAL_CLEANSING_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: FACIAL_CLEANSING_ARTICLE_CATALOG.en.body.slice(0, 500),
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
