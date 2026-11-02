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
 * Carbon laser peel (Hollywood Spectra) — the article behind the carbon peel offer page
 * (/promo/karbon-peeling). Honest scope: oily skin, enlarged pores, blackheads, dullness;
 * not a treatment for deep scars or active inflamed acne; course, aftercare, contraindications.
 */

function uzBody(): string {
  return `Karbon piling — yuz terisini chuqur tozalash va yangilash uchun lazer muolajasi. Unda teriga maxsus ko'mirli (karbon) qatlam surtiladi, keyin u Q-switch lazer bilan "portlatib" olib tashlanadi. Muolaja yog'li teri, kengaygan teshiklar va qora nuqtalar bilan yaxshi ishlaydi va deyarli tiklanish davrini talab qilmaydi. Shuning uchun uni ko'pincha "Hollywood peel" deb atashadi.

## Karbon piling qanday ishlaydi?

1. **Tozalash** — yuz pardoz va yog'dan tozalanadi.
2. **Karbon qatlam** — teriga ingichka qatlamda maxsus karbon suspenziya surtiladi; u teri teshiklariga kiradi.
3. **Lazer** — [Hollywood Spectra](/uz/services/apparatnaya-kosmetologiya/hollywood-spectra-lutronic) Q-switch lazeri karbon zarrachalarini bir zumda parchalaydi. Ular bilan birga ortiqcha yog', o'lik hujayralar va teshiklardagi iflosliklar ketadi; teri bir oz qiziydi va kollagen ishlab chiqarish rag'batlanadi.
4. **Yakun** — teri tinchlantiriladi va quyoshdan himoya kremi surtiladi.

Muolaja 20–30 daqiqa davom etadi, og'riq deyarli yo'q — faqat yengil sanchish va iliqlik seziladi.

## Kimga mos?

- yog'li va aralash teri, yaltirash;
- kengaygan teshiklar va qora nuqtalar;
- terining xiraligi, notekis rang;
- akne bilan bog'liq yengil dog'lar va postakne relyefining yengil notekisligi;
- muhim tadbir oldidan tez "tozalanish" kerak bo'lganda.

Teshiklar va teri tiniqligi bo'yicha batafsil: [Hollywood Spectra bilan poralar va teri tiniqligi](/uz/articles/art-hollywood-spectra-poralar-radeski).

## Nima uchun mos emas?

Karbon piling — tozalash va yangilash muolajasi, u hamma narsani davolamaydi:

- **chuqur akne chandiqlari** — ular uchun fraksion lazerlar ishlatiladi;
- **faol yallig'langan akne** — avval dermatolog davolashi kerak; batafsil: [akne](/uz/articles/art-akne);
- **melazma** — alohida, ehtiyotkor reja kerak; batafsil: [melazma](/uz/articles/art-melazma);
- **milium va boshqa o'simtalar** — ular boshqacha olib tashlanadi; batafsil: [milium](/uz/articles/art-milium).

## Kurs va natija

Bir muolajadan keyin ham teri tozaroq va yorqinroq ko'rinadi. Barqaror natija uchun odatda 3–5 muolajadan iborat kurs, oralig'i 2–4 hafta tavsiya qilinadi. Natijani saqlash uchun keyin vaqti-vaqti bilan qo'llab-quvvatlovchi muolajalar qilinadi.

## Muolajadan keyin

- bir necha soat yengil qizarish bo'lishi mumkin — odatda o'sha kuni o'tadi;
- 1–2 kun saunaga, hammomga bormang, skrab va kuchli tozalovchilarni ishlatmang;
- har kuni SPF 30–50 krem surting;
- terini yengil namlovchi vositalar bilan parvarish qiling.

## Qarshi ko'rsatmalar

- homiladorlik;
- muolaja joyidagi faol yallig'lanish, yara yoki gerpes;
- yangi qoraygan teri;
- terining yorug'likka sezgirligini oshiradigan ba'zi dorilar — shifokor konsultatsiyada baholaydi.

## Farg'ona va Qo'qonda karbon piling

Radeski Skin Clinic'da dermatolog-kosmetolog teri turini baholaydi, karbon piling sizga mosligini aniqlaydi va kerak bo'lsa uni boshqa muolajalar bilan birlashtiradi.

- [Karbon piling — aksiya va narx](/uz/promo/karbon-peeling);
- [Kosmetolog Farg'onada](/uz/fargona/kosmetolog) va [Qo'qonda](/uz/qoqon/kosmetolog);
- [Apparat kosmetologiyasi](/uz/services/apparatnaya-kosmetologiya).

Karbon piling — yog'li va xira teri uchun tez, xavfsiz va tiklanish davri yo'q muolaja. Undan oldin shifokor konsultatsiyasi esa natijani oldindan aytib beradi.`;
}

function ruBody(): string {
  return `Карбоновый пилинг — лазерная процедура для глубокого очищения и обновления кожи лица. На кожу наносят специальный угольный (карбоновый) слой, а затем «взрывают» его Q-switch лазером. Процедура хорошо работает с жирной кожей, расширенными порами и чёрными точками и почти не требует восстановления. Поэтому её часто называют «голливудским пилингом».

## Как работает карбоновый пилинг?

1. **Очищение** — кожу очищают от макияжа и себума.
2. **Карбоновый слой** — на кожу тонким слоем наносят специальную карбоновую суспензию; она проникает в поры.
3. **Лазер** — Q-switch лазер [Hollywood Spectra](/ru/services/apparatnaya-kosmetologiya/hollywood-spectra-lutronic) мгновенно разрушает частицы углерода. Вместе с ними уходят излишки себума, ороговевшие клетки и загрязнения из пор; кожа слегка прогревается, стимулируется выработка коллагена.
4. **Завершение** — кожу успокаивают и наносят солнцезащитный крем.

Процедура длится 20–30 минут и почти безболезненна — ощущаются лёгкое покалывание и тепло.

## Кому подходит?

- жирная и комбинированная кожа, блеск;
- расширенные поры и чёрные точки;
- тусклость, неровный тон;
- лёгкие пятна после акне и небольшая неровность рельефа;
- быстрое «очищение» перед важным событием.

Подробнее о порах и чистоте кожи: [сужение пор на Hollywood Spectra](/ru/articles/art-hollywood-spectra-poralar-radeski).

## Для чего не подходит?

Карбоновый пилинг — процедура очищения и обновления, он не лечит всё:

- **глубокие рубцы постакне** — для них используют фракционные лазеры;
- **активное воспалённое акне** — сначала нужно лечение у дерматолога; подробнее: [акне](/ru/articles/art-akne);
- **мелазма** — нужен отдельный осторожный план; подробнее: [мелазма](/ru/articles/art-melazma);
- **милиумы и другие образования** — их удаляют иначе; подробнее: [милиумы](/ru/articles/art-milium).

## Курс и результат

Кожа выглядит чище и свежее уже после одной процедуры. Для устойчивого результата обычно рекомендуют курс из 3–5 процедур с интервалом 2–4 недели. Затем результат поддерживают процедурами время от времени.

## После процедуры

- несколько часов возможно лёгкое покраснение — обычно проходит в тот же день;
- 1–2 дня не ходите в сауну и баню, не пользуйтесь скрабами и сильными очищающими средствами;
- ежедневно наносите крем SPF 30–50;
- ухаживайте за кожей лёгкими увлажняющими средствами.

## Противопоказания

- беременность;
- активное воспаление, рана или герпес в зоне процедуры;
- свежий загар;
- некоторые лекарства, повышающие чувствительность кожи к свету, — врач оценит на консультации.

## Карбоновый пилинг в Фергане и Коканде

В Radeski Skin Clinic дерматолог-косметолог оценит тип кожи, определит, подходит ли вам карбоновый пилинг, и при необходимости сочетает его с другими процедурами.

- [Карбоновый пилинг — акция и цена](/ru/promo/karbon-peeling);
- [Косметолог в Фергане](/ru/fargona/kosmetolog) и [в Коканде](/ru/qoqon/kosmetolog);
- [Аппаратная косметология](/ru/services/apparatnaya-kosmetologiya).

Карбоновый пилинг — быстрая, безопасная процедура без периода восстановления для жирной и тусклой кожи. А консультация врача заранее скажет, какого результата ждать.`;
}

function enBody(): string {
  return `A carbon laser peel is a treatment for deep cleansing and renewal of facial skin. A special carbon layer is applied to the skin and then "blasted" off with a Q-switched laser. It works well for oily skin, enlarged pores and blackheads and needs almost no recovery — which is why it is often called the "Hollywood peel".

## How does a carbon peel work?

1. **Cleansing** — make-up and oil are removed.
2. **Carbon layer** — a thin layer of carbon suspension is applied; it settles into the pores.
3. **Laser** — the [Hollywood Spectra](/en/services/apparatnaya-kosmetologiya/hollywood-spectra-lutronic) Q-switched laser instantly shatters the carbon particles, taking excess oil, dead cells and debris from the pores with them; the skin warms slightly and collagen production is stimulated.
4. **Finish** — the skin is soothed and sunscreen applied.

It takes 20–30 minutes and is almost painless — just a light snap and warmth.

## Who is it for?

- oily and combination skin, shine;
- enlarged pores and blackheads;
- dull skin and uneven tone;
- mild post-acne marks and slight texture irregularity;
- a quick "refresh" before an important event.

More on pores and clarity: [pore refinement with Hollywood Spectra](/en/articles/art-hollywood-spectra-poralar-radeski).

## What is it not for?

A carbon peel cleanses and renews; it does not treat everything:

- **deep acne scars** — fractional lasers are used for those;
- **active inflamed acne** — a dermatologist needs to treat it first; more: [acne](/en/articles/art-akne);
- **melasma** — needs a separate, careful plan; more: [melasma](/en/articles/art-melazma);
- **milia and other growths** — removed differently; more: [milia](/en/articles/art-milium).

## Course and results

Skin looks cleaner and brighter after a single session. For a lasting result a course of 3–5 sessions, 2–4 weeks apart, is usually recommended, followed by occasional maintenance sessions.

## Aftercare

- mild redness for a few hours — usually gone the same day;
- for 1–2 days avoid saunas, steam rooms, scrubs and strong cleansers;
- apply SPF 30–50 every day;
- care for the skin with light moisturisers.

## Contraindications

- pregnancy;
- active inflammation, a wound or cold sores in the area;
- a fresh tan;
- some medicines that make the skin more light-sensitive — the doctor assesses these at the consultation.

## Carbon peel in Fergana and Kokand

At Radeski Skin Clinic a dermatologist-cosmetologist assesses your skin type, decides whether a carbon peel suits you and combines it with other treatments if needed.

- [Carbon peel — offer and price](/en/promo/karbon-peeling);
- [Cosmetologist in Fergana](/en/fargona/kosmetolog) and [in Kokand](/en/qoqon/kosmetolog);
- [Aesthetic device treatments](/en/services/apparatnaya-kosmetologiya).

A carbon peel is a quick, safe, no-downtime treatment for oily and dull skin — and a consultation tells you in advance what result to expect.`;
}

export const CARBON_PEEL_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Karbon piling (Hollywood peel): qanday ishlaydi, kimga mos va kimga mos emas, kurs, muolajadan keyingi parvarish va qarshi ko'rsatmalar. Farg'ona va Qo'qonda Hollywood Spectra lazeri.",
    body: uzBody(),
    keyTakeaways: [
      "Karbon piling — karbon qatlam va Q-switch lazer bilan yuzni chuqur tozalash",
      "Yog'li teri, kengaygan teshiklar, qora nuqtalar va xira teri uchun",
      "Chuqur chandiqlar, faol akne va melazma uchun boshqa davolash kerak",
      "Kurs: 3–5 muolaja, oralig'i 2–4 hafta; tiklanish davri deyarli yo'q",
      "Muolajadan keyin har kuni SPF 30–50",
    ],
    tags: ['Karbon piling', 'Hollywood peel', 'Hollywood Spectra', 'Teri teshiklari', 'Kosmetolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Teri yog'li, teshiklar kengaygan va qora nuqtalar ko'p bo'lsa — konsultatsiya",
      "Faol yallig'langan akne bo'lsa — avval dermatolog",
      "Yuzda pigment dog'lari bo'lsa — melazmani istisno qilish uchun",
      "Muolajadan keyin qizarish 2 kundan ko'p davom etsa",
      "Yuzda tushunarsiz o'simtalar bo'lsa",
    ],
    faq: [
      {
        question: 'Karbon piling og\'riqlimi?',
        answer:
          "Deyarli yo'q. Lazer ishlaganda yengil sanchish va iliqlik seziladi. Og'riqsizlantirish odatda kerak bo'lmaydi.",
      },
      {
        question: 'Natija qachon ko\'rinadi?',
        answer:
          "Teri birinchi muolajadan keyinoq tozaroq va yorqinroq ko'rinadi. Teshiklar va yog'lanishning barqaror kamayishi uchun 3–5 muolajadan iborat kurs kerak.",
      },
      {
        question: 'Muolajadan keyin ishga borish mumkinmi?',
        answer:
          "Ha. Yengil qizarish odatda bir necha soatda o'tadi, shuning uchun karbon piling tiklanish davri talab qilmaydigan muolaja hisoblanadi.",
      },
      {
        question: 'Karbon piling aknega yordam beradimi?',
        answer:
          "Yog'lanish va qora nuqtalarni kamaytirishga yordam beradi. Lekin faol yallig'langan aknani avval dermatolog davolashi kerak — karbon piling uni davolash o'rnini bosmaydi.",
      },
      {
        question: "Farg'ona va Qo'qonda karbon pilingni qayerda qilish mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida karbon piling Hollywood Spectra lazeri bilan qilinadi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Карбоновый пилинг (голливудский пилинг): как работает, кому подходит и не подходит, курс, уход после процедуры и противопоказания. Лазер Hollywood Spectra в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Карбоновый пилинг — глубокое очищение лица карбоновым слоем и Q-switch лазером',
      'Для жирной кожи, расширенных пор, чёрных точек и тусклой кожи',
      'Для глубоких рубцов, активного акне и мелазмы нужно другое лечение',
      'Курс: 3–5 процедур с интервалом 2–4 недели; периода восстановления почти нет',
      'После процедуры ежедневно SPF 30–50',
    ],
    tags: ['Карбоновый пилинг', 'Голливудский пилинг', 'Hollywood Spectra', 'Расширенные поры', 'Косметолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Жирная кожа, расширенные поры и много чёрных точек — консультация',
      'Активное воспалённое акне — сначала к дерматологу',
      'Пигментные пятна на лице — чтобы исключить мелазму',
      'Покраснение после процедуры держится больше 2 дней',
      'Непонятные образования на лице',
    ],
    faq: [
      {
        question: 'Больно ли делать карбоновый пилинг?',
        answer:
          'Почти нет. Во время работы лазера ощущаются лёгкое покалывание и тепло. Обезболивание обычно не нужно.',
      },
      {
        question: 'Когда виден результат?',
        answer:
          'Кожа выглядит чище и свежее уже после первой процедуры. Для устойчивого уменьшения пор и жирности нужен курс из 3–5 процедур.',
      },
      {
        question: 'Можно ли идти на работу после процедуры?',
        answer:
          'Да. Лёгкое покраснение обычно проходит за несколько часов, поэтому карбоновый пилинг считается процедурой без периода восстановления.',
      },
      {
        question: 'Помогает ли карбоновый пилинг при акне?',
        answer:
          'Помогает уменьшить жирность и чёрные точки. Но активное воспалённое акне сначала должен лечить дерматолог — карбоновый пилинг лечение не заменяет.',
      },
      {
        question: 'Где сделать карбоновый пилинг в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде карбоновый пилинг проводят на лазере Hollywood Spectra. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Carbon laser peel (Hollywood peel): how it works, who it suits and who it does not, the course, aftercare and contraindications. Hollywood Spectra laser in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'A carbon peel deep-cleans the face with a carbon layer and a Q-switched laser',
      'For oily skin, enlarged pores, blackheads and dull skin',
      'Deep scars, active acne and melasma need other treatment',
      'Course: 3–5 sessions, 2–4 weeks apart; almost no downtime',
      'Daily SPF 30–50 afterwards',
    ],
    tags: ['Carbon peel', 'Hollywood peel', 'Hollywood Spectra', 'Enlarged pores', 'Cosmetologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Oily skin, enlarged pores and many blackheads — consultation',
      'Active inflamed acne — see a dermatologist first',
      'Pigment patches on the face — to rule out melasma',
      'Redness after the session lasts more than 2 days',
      'Unexplained growths on the face',
    ],
    faq: [
      {
        question: 'Does a carbon peel hurt?',
        answer:
          'Hardly. You feel a light snap and warmth while the laser works. Numbing is usually not needed.',
      },
      {
        question: 'When will I see results?',
        answer:
          'The skin looks cleaner and brighter after the first session. A lasting reduction in pores and oiliness needs a course of 3–5 sessions.',
      },
      {
        question: 'Can I go to work afterwards?',
        answer:
          'Yes. Mild redness usually fades within hours, so a carbon peel is considered a no-downtime treatment.',
      },
      {
        question: 'Does a carbon peel help acne?',
        answer:
          'It helps reduce oiliness and blackheads. But active inflamed acne should be treated by a dermatologist first — a carbon peel does not replace that treatment.',
      },
      {
        question: 'Where can I have a carbon peel in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand carbon peels are done with the Hollywood Spectra laser. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const CARBON_PEEL_ARTICLE: Article = {
  id: 'art-karbon-piling',
  slug: 'karbon-piling',
  title: {
    uz: "Karbon piling: yog'li teri va kengaygan teshiklar uchun lazer tozalash",
    ru: 'Карбоновый пилинг: лазерное очищение для жирной кожи и расширенных пор',
    en: 'Carbon Laser Peel: Deep Cleansing for Oily Skin and Enlarged Pores',
  },
  summary: {
    uz: CARBON_PEEL_ARTICLE_CATALOG.uz.summary,
    ru: CARBON_PEEL_ARTICLE_CATALOG.ru.summary,
    en: CARBON_PEEL_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: CARBON_PEEL_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: CARBON_PEEL_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: CARBON_PEEL_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Kodirova Dilafruzxon',
    ru: 'Кодирова Дилафрузхон',
    en: 'Dr. Dilafruzkhon Kodirova',
  },
  date: '2026-11-21',
  image: '/articles/karbon-piling-cover.jpg',
  images: {
    uz: '/articles/karbon-piling-cover.jpg',
    ru: '/articles/karbon-piling-cover.jpg',
    en: '/articles/karbon-piling-cover.jpg',
  },
  views: 0,
};
