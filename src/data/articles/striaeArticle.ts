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
 * Stretch marks (striae) — a cosmetology question with honest expectations: they can be made
 * much less visible but not erased; fresh red marks respond best; device options at the clinic
 * (fractional CO2, RF microneedling); and the medical red flag (wide purple marks with weight
 * gain and high blood pressure — endocrinologist).
 */

function uzBody(): string {
  return `Cho'zilish izlari (striyalar) — terining tez cho'zilishidan paydo bo'ladigan chiziqsimon izlar. Ular qorin, son, dumba, ko'krak va yelkalarda ko'p uchraydi. Striyalar sog'liq uchun xavfli emas, lekin ko'pchilik uchun sezilarli kosmetik muammo. Ularni butunlay o'chirib bo'lmaydi, ammo zamonaviy usullar bilan ancha sezilmas qilish mumkin.

## Striyalar nima uchun paydo bo'ladi?

Teri tez cho'zilganda uning chuqur qatlamidagi kollagen va elastin tolalari yirtiladi. Bunga sabab bo'ladi:

- **homiladorlik** — ayniqsa oxirgi oylarda;
- **o'smirlik** — tez bo'y o'sishi davri;
- **vaznning tez ortishi yoki kamayishi**;
- **mushak massasining tez o'sishi** — sportchilarda;
- **gormonlar** — gormonli dorilarni uzoq qabul qilish, gormonli kremlarni uzoq surtish;
- **irsiyat** — oilada striyalar ko'p bo'lsa, ehtimol yuqori.

## Yangi va eski striyalar

- **Yangi (qizil, binafsha) striyalar** — endi paydo bo'lgan, yallig'lanish bosqichida; davolashga eng yaxshi javob beradi.
- **Eski (oq, kumushrang) striyalar** — yillar o'tgan, teri yupqalashgan; ularni ham yaxshilash mumkin, lekin ko'proq muolaja kerak.

Shuning uchun striyalar bilan erta murojaat qilish natijani ancha yaxshilaydi.

## Klinikada qanday davolanadi?

Usulni dermatolog-kosmetolog striyalar yoshi, rangi va teri turiga qarab tanlaydi. Odatda bir necha muolajadan iborat kurs kerak bo'ladi:

- **Fraksion CO₂ lazer** — teri ichida mikroskopik nuqtalar hosil qilib, yangi kollagen ishlab chiqarilishini qo'zg'atadi; striya relyefi va kengligi kamayadi. Qurilma: [DEKA CO₂ lazer](/uz/services/apparatnaya-kosmetologiya/deka-co2-laser), batafsil: [CO₂ lazer haqida maqola](/uz/articles/art-co2-lazer-deka).
- **RF-mikroignali muolaja** — radiochastota energiyasini teri ichiga yetkazib, uni zichlashtiradi. Batafsil: [Morpheus8](/uz/articles/art-morpheus8-rf-lifting-radeski).
- **Tashqi vositalar** — yangi striyalarda shifokor tavsiya qilgan kremlar yordam berishi mumkin; ba'zilari homiladorlik va emizish davrida mumkin emas.

**Haqiqiy kutilma:** striya butunlay yo'qolmaydi, lekin kurs natijasida rangi teri rangiga yaqinlashadi, chuqurligi va kengligi kamayadi — ko'pchilik bemorlarda izlar ancha kam seziladi.

## Homiladorlikda striyalarning oldini olish

- Vaznni shifokor tavsiya qilgan me'yorda bosqichma-bosqich oshiring.
- Qorin, son va ko'krak terisini har kuni namlovchi krem yoki moy bilan parvarish qiling — bu terini yumshoq qiladi va qichishishni kamaytiradi.
- Homiladorlik uchun maxsus qo'llab-quvvatlovchi kiyim kiying.
- Lazer va boshqa muolajalar tug'ruq va emizishdan keyin o'tkaziladi.

## Qachon endokrinologga borish kerak?

Agar striyalar **keng, to'q binafsha** bo'lsa va ular bilan birga vazn tez ortsa, yuz yumaloqlashsa, qon bosimi ko'tarilsa yoki mushaklar zaiflashsa — bu gormonal kasallik belgisi bo'lishi mumkin. Bu holatda avval endokrinolog tekshiruvi kerak.

## Farg'ona va Qo'qonda striyalarni davolash

Radeski Skin Clinic'da dermatolog-kosmetolog striyalarni baholaydi, ularning yoshi va teri turiga mos [apparat muolajalari](/uz/services/apparatnaya-kosmetologiya) kursini tanlaydi va natijani bosqichma-bosqich kuzatadi.

- [Kosmetolog Farg'onada](/uz/fargona/kosmetolog) va [Qo'qonda](/uz/qoqon/kosmetolog).

Striyalar qancha yangi bo'lsa, ularni yaxshilash shuncha oson: qizil izlar bilan kelish uchun oq bo'lishini kutmang.`;
}

function ruBody(): string {
  return `Растяжки (стрии) — полосы на коже, которые появляются при её быстром растяжении. Чаще всего они бывают на животе, бёдрах, ягодицах, груди и плечах. Растяжки не опасны для здоровья, но для многих это заметная косметическая проблема. Убрать их полностью нельзя, но современными методами можно сделать гораздо менее заметными.

## Почему появляются растяжки?

При быстром растяжении кожи рвутся коллагеновые и эластиновые волокна её глубокого слоя. Причины:

- **беременность** — особенно последние месяцы;
- **подростковый возраст** — период быстрого роста;
- **быстрый набор или потеря веса**;
- **быстрый рост мышечной массы** — у спортсменов;
- **гормоны** — длительный приём гормональных препаратов, долгое применение гормональных кремов;
- **наследственность** — если у родственников много растяжек, риск выше.

## Свежие и старые растяжки

- **Свежие (красные, фиолетовые) растяжки** — только появились, в стадии воспаления; лучше всего поддаются лечению.
- **Старые (белые, серебристые) растяжки** — прошли годы, кожа истончилась; их тоже можно улучшить, но нужно больше процедур.

Поэтому чем раньше обратиться с растяжками, тем лучше результат.

## Как лечат растяжки в клинике?

Метод дерматолог-косметолог подбирает с учётом возраста растяжек, их цвета и типа кожи. Обычно нужен курс из нескольких процедур:

- **Фракционный CO₂-лазер** — создаёт в коже микроскопические точки и запускает выработку нового коллагена; рельеф и ширина растяжек уменьшаются. Аппарат: [CO₂-лазер DEKA](/ru/services/apparatnaya-kosmetologiya/deka-co2-laser), подробнее: [статья о CO₂-лазере](/ru/articles/art-co2-lazer-deka).
- **RF-микроигольчатая процедура** — доставляет радиочастотную энергию в глубину кожи и уплотняет её. Подробнее: [Morpheus8](/ru/articles/art-morpheus8-rf-lifting-radeski).
- **Наружные средства** — на свежих растяжках могут помочь кремы, которые посоветует врач; некоторые нельзя при беременности и кормлении грудью.

**Реальные ожидания:** растяжка не исчезнет полностью, но после курса её цвет приближается к цвету кожи, глубина и ширина уменьшаются — у большинства пациентов следы становятся гораздо менее заметными.

## Профилактика растяжек при беременности

- Набирайте вес постепенно, в пределах, которые советует врач.
- Ежедневно ухаживайте за кожей живота, бёдер и груди увлажняющим кремом или маслом — это смягчает кожу и уменьшает зуд.
- Носите специальное поддерживающее бельё для беременных.
- Лазерные и другие процедуры проводят после родов и кормления грудью.

## Когда идти к эндокринологу?

Если растяжки **широкие, тёмно-фиолетовые**, а вместе с ними быстро растёт вес, округляется лицо, повышается давление или слабеют мышцы — это может быть признаком гормонального заболевания. В этом случае сначала нужно обследование у эндокринолога.

## Лечение растяжек в Фергане и Коканде

В Radeski Skin Clinic дерматолог-косметолог оценит растяжки, подберёт курс [аппаратных процедур](/ru/services/apparatnaya-kosmetologiya) под их возраст и тип кожи и будет поэтапно отслеживать результат.

- [Косметолог в Фергане](/ru/fargona/kosmetolog) и [в Коканде](/ru/qoqon/kosmetolog).

Чем свежее растяжки, тем легче их улучшить: с красными полосами не стоит ждать, пока они станут белыми.`;
}

function enBody(): string {
  return `Stretch marks (striae) are lines that appear when the skin stretches quickly. They are most common on the belly, thighs, buttocks, breasts and upper arms. They are not a health risk, but for many people they are a noticeable cosmetic concern. They cannot be erased completely, but modern treatments can make them much less visible.

## Why do stretch marks appear?

When skin stretches fast, the collagen and elastin fibres in its deep layer tear. Causes include:

- **pregnancy** — especially the last months;
- **adolescence** — growth spurts;
- **rapid weight gain or loss**;
- **fast muscle growth** — in athletes;
- **hormones** — long-term hormonal medicines, prolonged use of steroid creams;
- **genetics** — the risk is higher if relatives have many stretch marks.

## New and old stretch marks

- **New (red, purple) stretch marks** — recent and still inflamed; they respond best to treatment.
- **Old (white, silvery) stretch marks** — years old, with thinned skin; they can be improved too, but need more sessions.

So the earlier you seek treatment, the better the result.

## How are stretch marks treated at the clinic?

The dermatologist-cosmetologist chooses the method by the age and colour of the marks and the skin type. A course of several sessions is usually needed:

- **Fractional CO₂ laser** — creates microscopic points in the skin and triggers new collagen; the texture and width of the marks decrease. Device: [DEKA CO₂ laser](/en/services/apparatnaya-kosmetologiya/deka-co2-laser); more: [the CO₂ laser article](/en/articles/art-co2-lazer-deka).
- **RF microneedling** — delivers radiofrequency energy deep into the skin and firms it. More: [Morpheus8](/en/articles/art-morpheus8-rf-lifting-radeski).
- **Topical products** — for new marks, creams your doctor recommends may help; some cannot be used in pregnancy and breastfeeding.

**Realistic expectations:** a stretch mark will not disappear completely, but after a course its colour moves closer to your skin tone and its depth and width shrink — in most patients the marks become much less noticeable.

## Preventing stretch marks in pregnancy

- Gain weight gradually, within the range your doctor advises.
- Care for the skin of your belly, thighs and breasts daily with a moisturiser or oil — it keeps the skin supple and eases itching.
- Wear supportive maternity garments.
- Laser and other procedures are done after birth and breastfeeding.

## When to see an endocrinologist

If stretch marks are **wide and dark purple** and come with rapid weight gain, a rounder face, high blood pressure or muscle weakness, they may signal a hormonal condition. In that case an endocrinologist's assessment comes first.

## Stretch mark treatment in Fergana and Kokand

At Radeski Skin Clinic a dermatologist-cosmetologist assesses the marks, chooses a course of [aesthetic device treatments](/en/services/apparatnaya-kosmetologiya) suited to their age and your skin type, and tracks the result step by step.

- [Cosmetologist in Fergana](/en/fargona/kosmetolog) and [in Kokand](/en/qoqon/kosmetolog).

The newer the stretch marks, the easier they are to improve: do not wait for red marks to turn white.`;
}

export const STRIAE_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Cho'zilish izlari (striyalar): nima uchun paydo bo'ladi, yangi va eski izlar, fraksion CO₂ lazer va RF-mikroigna bilan davolash, homiladorlikda oldini olish. Farg'ona va Qo'qonda kosmetolog.",
    body: uzBody(),
    keyTakeaways: [
      "Striyalar teri tez cho'zilganda kollagen tolalari yirtilishidan paydo bo'ladi",
      'Xavfli emas, lekin butunlay o\'chmaydi — ancha sezilmas qilish mumkin',
      "Yangi qizil striyalar davolashga eski oq izlardan yaxshiroq javob beradi",
      "Klinikada fraksion CO₂ lazer va RF-mikroigna kursi",
      "Keng binafsha striyalar va vaznning tez ortishi — endokrinologga",
    ],
    tags: ["Cho'zilish izlari", 'Striya', 'Homiladorlikdan keyin', 'CO₂ lazer', 'Kosmetolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Yangi qizil yoki binafsha izlar paydo bo'lsa — davolash uchun eng yaxshi vaqt",
      "Izlar keng, to'q binafsha va vazn tez ortayotgan bo'lsa",
      'Gormonli dori yoki krem fonida izlar chiqsa',
      'Eski izlar kosmetik noqulaylik tug\'dirsa',
      "Tug'ruqdan keyin terini tiklash rejasi kerak bo'lsa",
    ],
    faq: [
      {
        question: 'Striyalarni butunlay yo\'qotish mumkinmi?',
        answer:
          "Yo'q, striya — teri ichidagi chandiq, uni butunlay o'chirib bo'lmaydi. Lekin lazer va RF muolajalari kursi rangini, chuqurligi va kengligini ancha kamaytiradi va izlar kam seziladi.",
      },
      {
        question: 'Necha muolaja kerak?',
        answer:
          "Bu striyalar yoshi va soniga bog'liq. Odatda 3–6 muolajadan iborat kurs, muolajalar orasida bir necha hafta tanaffus bilan tavsiya qilinadi. Aniq rejani shifokor ko'rikdan keyin tuzadi.",
      },
      {
        question: 'Homiladorlikda striyalarni davolash mumkinmi?',
        answer:
          "Homiladorlikda faqat parvarish — namlovchi kremlar va moylar. Lazer, RF va ko'pgina faol kremlar tug'ruq va emizishdan keyin qo'llanadi.",
      },
      {
        question: 'Kremlar striyalarni yo\'qotadimi?',
        answer:
          "Kremlar yangi striyalarni biroz yaxshilashi va teri holatini qo'llab-quvvatlashi mumkin, lekin eski oq izlarni yo'qotmaydi. Sezilarli natija uchun apparat muolajalari kerak.",
      },
      {
        question: "Farg'ona va Qo'qonda striyalarni qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog-kosmetolog striyalarni baholaydi va fraksion CO₂ lazer yoki RF-mikroigna kursini tanlaydi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Растяжки (стрии): почему появляются, свежие и старые растяжки, лечение фракционным CO₂-лазером и RF-микроиглами, профилактика при беременности. Косметолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Растяжки появляются, когда при быстром растяжении кожи рвутся коллагеновые волокна',
      'Они не опасны и полностью не исчезают — но их можно сделать гораздо менее заметными',
      'Свежие красные растяжки лечатся лучше, чем старые белые',
      'В клинике — курс фракционного CO₂-лазера и RF-микроигл',
      'Широкие фиолетовые растяжки и быстрый набор веса — к эндокринологу',
    ],
    tags: ['Растяжки', 'Стрии', 'После беременности', 'CO₂-лазер', 'Косметолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Появились свежие красные или фиолетовые полосы — лучшее время для лечения',
      'Растяжки широкие, тёмно-фиолетовые и быстро растёт вес',
      'Растяжки появились на фоне гормональных препаратов или кремов',
      'Старые растяжки беспокоят косметически',
      'Нужен план восстановления кожи после родов',
    ],
    faq: [
      {
        question: 'Можно ли убрать растяжки полностью?',
        answer:
          'Нет, растяжка — это рубец внутри кожи, полностью её не стереть. Но курс лазерных и RF-процедур заметно уменьшает её цвет, глубину и ширину, и следы становятся малозаметными.',
      },
      {
        question: 'Сколько процедур нужно?',
        answer:
          'Это зависит от возраста и количества растяжек. Обычно рекомендуют курс из 3–6 процедур с перерывом в несколько недель. Точный план врач составит после осмотра.',
      },
      {
        question: 'Можно ли лечить растяжки во время беременности?',
        answer:
          'Во время беременности — только уход: увлажняющие кремы и масла. Лазер, RF и многие активные кремы применяют после родов и кормления грудью.',
      },
      {
        question: 'Помогают ли кремы от растяжек?',
        answer:
          'Кремы могут немного улучшить свежие растяжки и поддержать состояние кожи, но старые белые следы они не убирают. Для заметного результата нужны аппаратные процедуры.',
      },
      {
        question: 'Где лечить растяжки в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог-косметолог оценит растяжки и подберёт курс фракционного CO₂-лазера или RF-микроигл. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Stretch marks: why they appear, new versus old marks, treatment with fractional CO₂ laser and RF microneedling, and prevention in pregnancy. Cosmetologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Stretch marks form when fast stretching tears the collagen fibres in the skin',
      'They are harmless and do not disappear completely — but can be made far less visible',
      'New red marks respond better than old white ones',
      'At the clinic: a course of fractional CO₂ laser and RF microneedling',
      'Wide purple marks with rapid weight gain — see an endocrinologist',
    ],
    tags: ['Stretch marks', 'Striae', 'After pregnancy', 'CO₂ laser', 'Cosmetologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'New red or purple marks appear — the best time to treat',
      'Marks are wide and dark purple and your weight is rising fast',
      'Marks appeared while using hormonal medicines or creams',
      'Old marks bother you cosmetically',
      'You want a plan to restore your skin after birth',
    ],
    faq: [
      {
        question: 'Can stretch marks be removed completely?',
        answer:
          'No — a stretch mark is a scar inside the skin and cannot be erased. But a course of laser and RF treatments noticeably reduces its colour, depth and width, so the marks become hard to see.',
      },
      {
        question: 'How many sessions are needed?',
        answer:
          'It depends on how old and how many the marks are. Usually a course of 3–6 sessions a few weeks apart. The doctor builds the exact plan after an examination.',
      },
      {
        question: 'Can stretch marks be treated during pregnancy?',
        answer:
          'During pregnancy only skin care — moisturisers and oils. Laser, RF and many active creams are used after birth and breastfeeding.',
      },
      {
        question: 'Do stretch mark creams work?',
        answer:
          'Creams can slightly improve new marks and support the skin, but they do not remove old white marks. A visible result needs device treatments.',
      },
      {
        question: 'Where can I get stretch marks treated in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist-cosmetologist assesses the marks and chooses a course of fractional CO₂ laser or RF microneedling. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const STRIAE_ARTICLE: Article = {
  id: 'art-striya',
  slug: 'striya',
  title: {
    uz: "Cho'zilish izlari (striyalar): nima uchun paydo bo'ladi va qanday kamaytiriladi",
    ru: 'Растяжки на коже (стрии): почему появляются и как их уменьшить',
    en: 'Stretch Marks: Why They Appear and How to Reduce Them',
  },
  summary: {
    uz: STRIAE_ARTICLE_CATALOG.uz.summary,
    ru: STRIAE_ARTICLE_CATALOG.ru.summary,
    en: STRIAE_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: STRIAE_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: STRIAE_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: STRIAE_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Mangasaryan Lorena Georgievna',
    ru: 'Мангасарян Лорена Георгиевна',
    en: 'Dr. Lorena Georgievna Mangasaryan',
  },
  date: '2026-11-12',
  image: '/articles/striya-cover.webp',
  images: {
    uz: '/articles/striya-cover.webp',
    ru: '/articles/striya-cover.webp',
    en: '/articles/striya-cover.webp',
  },
  views: 0,
};
