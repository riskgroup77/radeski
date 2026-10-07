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

const COVER = '/karusel/soch-mezoterapiya.jpg';

function uzBody(): string {
  return `## Soch to'kilishini oldini olish inyeksiyalari

Soch to'kilishini kamaytirish uchun turli **inyeksion** usullar qo'llaniladi. Tashxisga qarab bu **vitaminoterapiya (mezoterapiya)**, **gormonal terapiya** yoki **plazmaterapiya (PRP)** bo'lishi mumkin.

![Soch to'kilishiga qarshi inyeksiyalar — Radeski Skin Clinic](${COVER})

## Qaysi muolaja to'kilishni to'xtatadi?

**Plazmaterapiya** Radeski Skin & Aesthetic Clinic da yog'li sochlar yoki quruq bosh terisi bo'lgan bemorlar uchun mos. Yog'li porlash kamayadi, qichish va qattiq parchalanish yo'qoladi. Sochli bosh terisi plazmaterapiya kursi intensiv to'kilishni sekinlashtiradi va yangi sochlarning o'sishini rag'batlantiradi.

**Mezoterapiya** — eng mashhur usullardan biri. Bosh terisi **2–4 mm** chuqurlikda vitamin kokteyllari va ozuqa eritmalarini kiritish: to'kilishni to'xtatish, o'sishni rag'batlantirish yoki soch ipagini mustahkamlash — vazifaga qarab individual tanlanadi.

## Qaysi vitaminlar kiritiladi?

- **B7 (biotin)** — alopetsiyaning oldini oladi;
- **B9 (foliy kislotasi)** — o'sish jarayonlarini faollashtiradi;
- **B10 (PABA)** — rangni yaxshilaydi, kulrang sochlarning oldini oladi;
- **B12 (tsianokobalamin)** — alopetsiya va bosh terisi quruqligidan himoya qiladi.

## Tana nimalardan yetishmaydi?

Kuchli to'kilish **biotin**, **yod** va **rux** yetishmovchiligi bilan bog'liq bo'lishi mumkin. O'sish sekinlashishi **E va B vitaminlari**, foliy va nikotin kislotasi, **magniy**, **kremniy**, **kalsiy** yetishmovchiligidan kelib chiqadi. Qattiq parchalanish ko'pincha **B6**, **B12**, **A**, **F** va biotin yetishmovchiligi bilan bog'liq.

## Trixolog maslahatlari

Ratsionga **go'sht, baliq, bo'tqa, sut mahsulotlari, meva-sabzavot, yong'oq, dengiz mahsulotlari, zaytun moyi** kiriting. Maxsus soch vitamin komplekslari ham foydali bo'lishi mumkin — shifokor tavsiyasiga ko'ra.

## Omega-3 va soch salomatligi

Baliq yog'i sochlarning quruqligi va mo'rtligini, bosh terisi qichishini, qattiq parchalanish va to'kilishni kamaytiradi. Omega-3 kislotalari avvalo **bosh terisini** yaxshilaydi — sog'lom teri dan chiroyli sochlar o'sadi.

## Uy parvarishi

Lomklik va qattiq parchalanish uchun trixologlar **Vichy Dercos** kabi ixtisoslashtirilgan shampunlarni tavsiya qiladi — bu seriya klinik amaliyotda yaxshi natija beradi.

Bog'liq xizmatlar: [Trixologiya markazi](/uz/services/trihologiya-centr-lechenie-volos), [Plazmaterapiya (PRP)](/uz/services/trihologiya-centr-lechenie-volos/trixoskop), [Narxlar](/uz/prices).`;
}

function ruBody(): string {
  return `## Инъекции для профилактики выпадения волос

Инъекции для профилактики выпадения волос бывают различными. В зависимости от диагноза применяют **витаминотерапию (мезотерапию)**, **гормональную терапию** или **плазмотерапию (PRP)**.

![Инъекции против выпадения волос — Radeski Skin Clinic](${COVER})

## Какая процедура останавливает выпадение?

**Плазмотерапия** в Radeski Skin & Aesthetic Clinic подходит при жирных волосах или сухой коже головы. Уходит жирный блеск, кожа перестаёт зудеть и шелушиться. Курс плазмотерапии волосистой части головы останавливает интенсивное выпадение и стимулирует рост новых волос.

**Мезотерапия** — одна из самых популярных процедур. Уколы в прикорневую зону на глубину **2–4 мм** витаминными коктейлями и питательными составами подбираются индивидуально: остановить выпадение, стимулировать рост или укрепить стержни.

## Какие витамины вводят?

- **B7 (биотин)** — препятствует алопеции;
- **B9 (фолиевая кислота)** — активизирует рост;
- **B10 (ПАБК)** — улучшает цвет, препятствует седине;
- **B12 (цианокобаламин)** — защищает от алопеции и сухости кожи головы.

## Чего не хватает при выпадении?

Выпадение связано с дефицитом **биотина, йода и цинка**. Замедление роста — с нехваткой **витаминов E и B**, фолиевой и никотиновой кислот, **магния, кремния, кальция**. Перхоть часто при дефиците **B6, B12, A, F** и биотина.

## Советы трихолога

Включайте в рацион **мясо, рыбу, каши, молочные продукты, фрукты и овощи, орехи, морепродукты, оливковое масло**. По назначению врача — витаминные комплексы для восстановления здоровья волос.

## Омега-3 и рост волос

Рыбий жир предотвращает сухость и ломкость, зуд, перхоть и выпадение. Жирные кислоты омега-3 улучшают **кожу головы** — здоровые волосы растут из здоровой кожи.

## Домашний уход

При ломкости и перхоти трихологи рекомендуют специализированные шампуни, например **Vichy Dercos** — серия хорошо зарекомендовала себя в практике.

Связанные услуги: [Центр трихологии](/ru/services/trihologiya-centr-lechenie-volos), [Плазмотерапия (PRP)](/ru/services/trihologiya-centr-lechenie-volos/trixoskop), [Цены](/ru/prices).`;
}

function enBody(): string {
  return `## Injections to Prevent Hair Loss

Injection therapies for hair loss prevention vary by diagnosis: **vitamin therapy (mesotherapy)**, **hormonal therapy**, or **plasma therapy (PRP)**.

![Hair loss prevention injections — Radeski Skin Clinic](${COVER})

## Which procedure stops shedding?

**Plasma therapy (PRP)** at Radeski Skin & Aesthetic Clinic suits oily hair or dry scalp. Greasy shine decreases, itching and flaking improve. A PRP course on the scalp reduces intensive shedding and promotes new growth.

**Mesotherapy** injects vitamin cocktails and nutrient blends into the scalp at **2–4 mm** depth — individually to stop shedding, stimulate growth, or strengthen hair shafts.

## Which vitamins are injected?

- **B7 (biotin)** — helps prevent alopecia;
- **B9 (folic acid)** — activates growth;
- **B10 (PABA)** — improves color, delays graying;
- **B12 (cyanocobalamin)** — protects against alopecia and dry scalp.

## What deficiencies cause shedding?

Shedding may reflect low **biotin, iodine, and zinc**. Slow growth may follow lack of **vitamins E and B**, folic and nicotinic acid, **magnesium, silicon, and calcium**. Dandruff often links to **B6, B12, A, F**, and biotin deficiency.

## Trichologist advice

Include **meat, fish, grains, dairy, fruits and vegetables, nuts, seafood, and olive oil** in your diet. Physician-directed vitamin complexes can support recovery.

## Omega-3 and hair health

Fish oil helps reduce dryness, brittleness, itching, dandruff, and shedding. Omega-3 fatty acids primarily improve **scalp health** — healthy hair grows from healthy skin.

## Home care

For brittleness and dandruff, trichologists often recommend specialized shampoos such as **Vichy Dercos**.

Related services: [Trichology center](/en/services/trihologiya-centr-lechenie-volos), [Plasma therapy (PRP)](/en/services/trihologiya-centr-lechenie-volos/trixoskop), [Prices](/en/prices).`;
}

export const SOCH_TOKILISHI_PROFILAKTIKA_RADESKI_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Soch to\'kilishini oldini olish: plazmaterapiya, mezoterapiya, vitaminlar va trixolog maslahatlari — Radeski Skin Clinic.',
    body: uzBody(),
    keyTakeaways: [
      'PRP va mezoterapiya to\'kilishni kamaytirishda samarali',
      'Vitamin kokteyllari individual tanlanadi',
      'B7, B9, B10, B12 soch salomatligi uchun muhim',
      'Ratsion va omega-3 bosh terisini qo\'llab-quvvatlaydi',
      'Trixolog bilan tekshiruv — to\'g\'ri usulni tanlash uchun zarur',
    ],
    tags: ['Soch to\'kilishi', 'Mezoterapiya', 'PRP', 'Trixologiya', 'Vitaminlar', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Soch to\'kilishi kuchaygan bo\'lsa',
      'Bosh terisi qichish yoki qattiq parchalanish bo\'lsa',
      'Shampun va uy parvarishi yordam bermasa',
      'Soch ipagida ingichlik va mo\'rtlik paydo bo\'lsa',
    ],
    faq: [
      {
        question: 'PRP yoki mezoterapiya — qaysi biri yaxshiroq?',
        answer: 'Tashxisga bog\'liq. Trixolog trixoskopiya va anamnezdan keyin individual reja tuzadi.',
      },
      {
        question: 'Qancha seans kerak?',
        answer: 'Odatda kurs — 4–8 seans. Aniq son holat va javobga qarab belgilanadi.',
      },
      {
        question: 'Vitaminlarni ichish yetarlimi?',
        answer: 'Ba\'zan qo\'llab-quvvatlovchi bo\'ladi, lekin kuchli to\'kilishda inyeksion terapiya va tekshiruv kerak bo\'lishi mumkin.',
      },
      {
        question: 'Qaysi vitaminlar muhim?',
        answer: 'B guruhi (biotin, B12), C, D, A, E, F, shuningdek temir, rux va omega-3.',
      },
    ],
  },
  ru: {
    summary:
      'Профилактика выпадения волос: плазмотерапия, мезотерапия, витамины и советы трихолога — Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'PRP и мезотерапия эффективны при выпадении',
      'Витаминные коктейли подбираются индивидуально',
      'B7, B9, B10, B12 важны для здоровья волос',
      'Рацион и омега-3 поддерживают кожу головы',
      'Осмотр трихолога нужен для выбора метода',
    ],
    tags: ['Выпадение волос', 'Мезотерапия', 'PRP', 'Трихология', 'Витамины', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Усилилось выпадение волос',
      'Зуд или шелушение кожи головы',
      'Шампунь и домашний уход не помогают',
      'Появилась тонкость и ломкость волос',
    ],
    faq: [
      {
        question: 'PRP или мезотерапия — что лучше?',
        answer: 'Зависит от диагноза. Трихолог составит план после трихоскопии и анамнеза.',
      },
      {
        question: 'Сколько сеансов нужно?',
        answer: 'Обычно курс — 4–8 сеансов. Точное число определяется индивидуально.',
      },
      {
        question: 'Достаточно ли пить витамины?',
        answer: 'Иногда как поддержка, но при выраженном выпадении могут понадобиться инъекции и обследование.',
      },
      {
        question: 'Какие витамины важны?',
        answer: 'Группа B (биотин, B12), C, D, A, E, F, а также железо, цинк и омега-3.',
      },
    ],
  },
  en: {
    summary:
      'Hair loss prevention: plasma therapy, mesotherapy, vitamins, and trichologist advice — Radeski Skin Clinic.',
    body: enBody(),
    keyTakeaways: [
      'PRP and mesotherapy are effective for shedding',
      'Vitamin cocktails are selected individually',
      'B7, B9, B10, B12 support hair health',
      'Diet and omega-3 support scalp condition',
      'A trichologist visit helps choose the right method',
    ],
    tags: ['Hair loss', 'Mesotherapy', 'PRP', 'Trichology', 'Vitamins', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Hair shedding has increased',
      'Scalp itching or flaking is present',
      'Shampoo and home care are not helping',
      'Hair is thinning and becoming brittle',
    ],
    faq: [
      {
        question: 'PRP or mesotherapy — which is better?',
        answer: 'It depends on diagnosis. A trichologist will plan after trichoscopy and history.',
      },
      {
        question: 'How many sessions are needed?',
        answer: 'Typically a course of 4–8 sessions. The exact number is individualized.',
      },
      {
        question: 'Are oral vitamins enough?',
        answer: 'Sometimes as support, but significant shedding may require injections and workup.',
      },
      {
        question: 'Which vitamins matter most?',
        answer: 'B group (biotin, B12), C, D, A, E, F, plus iron, zinc, and omega-3.',
      },
    ],
  },
};

export const SOCH_TOKILISHI_PROFILAKTIKA_RADESKI_ARTICLE: Article = {
  id: 'art-soch-profilaktika-inyeksii-radeski',
  slug: 'soch-tokilishi-profilaktika-inyeksii-radeski',
  title: {
    uz: 'Soch to\'kilishini oldini olish: inyeksiyalar va vitaminlar',
    ru: 'Инъекции для профилактики выпадения волос',
    en: 'Injections to Prevent Hair Loss',
  },
  summary: {
    uz: SOCH_TOKILISHI_PROFILAKTIKA_RADESKI_ARTICLE_CATALOG.uz.summary,
    ru: SOCH_TOKILISHI_PROFILAKTIKA_RADESKI_ARTICLE_CATALOG.ru.summary,
    en: SOCH_TOKILISHI_PROFILAKTIKA_RADESKI_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: SOCH_TOKILISHI_PROFILAKTIKA_RADESKI_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: SOCH_TOKILISHI_PROFILAKTIKA_RADESKI_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: SOCH_TOKILISHI_PROFILAKTIKA_RADESKI_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: { uz: 'Radeski Skin Clinic', ru: 'Radeski Skin Clinic', en: 'Radeski Skin Clinic' },
  date: '2026-09-22',
  image: COVER,
  images: { uz: COVER, ru: COVER, en: COVER },
  views: 0,
};
