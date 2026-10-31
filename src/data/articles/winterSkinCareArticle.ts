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
 * Winter skin care — a seasonal guide written for November: why skin dries and cracks in the
 * cold, a simple daily routine for face, hands, lips and body, common mistakes, and when dry
 * skin is a disease (eczema, atopic dermatitis) that needs a dermatologist.
 */

function uzBody(): string {
  return `Qishda ko'pchilik teri qurishi, tortishishi, qichishi va qo'llarda yoriqlar paydo bo'lishidan shikoyat qiladi. Sababi oddiy: tashqarida sovuq va shamol, xonada esa isitish moslamalari havoni quritadi. Teri himoya qatlamini yo'qotadi va namlikni tez bug'lantiradi. To'g'ri parvarish bilan bu muammolarning ko'pchiligining oldini olish mumkin.

## Nega qishda teri quriydi?

- **Sovuq havo** namlikni kam ushlaydi, shamol esa terini "quritadi".
- **Isitish** xonadagi havo namligini 20–30% gacha tushiradi.
- **Issiq dush va vanna** teri yog'ini yuvib ketadi.
- **Tez-tez qo'l yuvish va antiseptiklar** qo'l terisini qattiq quritadi.
- **Kam suv ichish** va issiq ichimliklarning ko'pligi.

Natijada teri tortishadi, po'st tashlaydi, qizaradi, qichiydi, kichik yoriqlar paydo bo'ladi. Atopik dermatit, ekzema va psoriaz qishda ko'pincha kuchayadi.

## Har kungi qishki parvarish

**Yuz**

- Yuvish uchun sovun emas, yumshoq krem yoki geldan foydalaning.
- Spirtli tonik va losonlardan voz keching.
- Ertalab va kechqurun zichroq namlovchi krem surting — seramidlar, gialuron kislotasi, glitserin kabi tarkibli.
- Ko'chaga chiqishdan 20–30 daqiqa oldin krem surting, shunda u terida to'liq so'riladi.
- Qishda ham quyoshdan himoya kremini unutmang — ayniqsa pigment dog'lari bo'lsa. Batafsil: [Melazma](/uz/articles/art-melazma).

**Qo'llar**

- Qo'lni iliq suvda yuving va har yuvgandan keyin krem surting.
- Ko'chada qo'lqop kiying, uy ishlarida — rezina qo'lqop.
- Kechasi qalin krem surtib, paxta qo'lqop kiyish yoriqlarni tez bitiradi.

**Lablar**

- Lab uchun gigienik balzamni tez-tez surting.
- Lablarni yalamang — bu ularni yanada quritadi.

**Tana**

- Dush 5–10 daqiqa, suv iliq bo'lsin.
- Terini sochiq bilan ishqalamang, bosib quriting.
- Dushdan keyin 3 daqiqa ichida tana kremi yoki losyon surting.

**Uy**

- Havo namlagich ishlating yoki xonaga suv qo'ying.
- Xonani tez-tez shamollating, lekin ortiqcha qizdirmang.

## Qishdagi keng tarqalgan xatolar

- Juda issiq suvda uzoq yuvinish.
- Skrab va pilingni tez-tez qilish — qishda teri yupqa va sezgir.
- Sovuqda ho'l yuz yoki qo'l bilan ko'chaga chiqish.
- "Namlovchi" deb faqat yengil gel ishlatish — qishda zichroq krem kerak.
- Teri qichishini e'tiborsiz qoldirish — u kasallik belgisi bo'lishi mumkin.

## Qachon bu shunchaki quruq teri emas?

Agar parvarishga qaramay:

- teri qizarib, qichib, namlansa — bu [ekzema](/uz/articles/art-ekzema) yoki [atopik dermatit](/uz/articles/art-atopic-dermatitis) bo'lishi mumkin;
- yuz, qosh va bosh terisida yog'li po'stlar paydo bo'lsa — [seboreyali dermatit](/uz/articles/art-seboreyali-dermatit);
- butun tana qichisa — [teri qichishi sabablari](/uz/articles/art-teri-qichishi)ni aniqlash kerak;
- qo'llardagi yoriqlar qonasa, og'risa va bitmasa,

— dermatologga murojaat qiling. Bu holatlarda faqat krem yetarli emas, davolash kerak.

## Farg'ona va Qo'qonda qishki parvarish bo'yicha maslahat

Radeski Skin Clinic'da [dermatolog](/uz/services/dermatologiya) teringiz turini va holatini aniqlab, qishki parvarish vositalarini tanlab beradi, kasallik belgilari bo'lsa — davolashni boshlaydi. Terini chuqur namlantirish uchun kosmetolog [biorevitalizatsiya](/uz/articles/art-biorevitalizatsiya-radeski) kabi muolajalarni tavsiya qilishi mumkin.

- [Kosmetolog Farg'onada](/uz/fargona/kosmetolog) va [Qo'qonda](/uz/qoqon/kosmetolog);
- [Dermatolog Farg'onada](/uz/fargona/dermatolog) va [Qo'qonda](/uz/qoqon/dermatolog).

Qishda teriga oddiy, lekin muntazam parvarish kerak: iliq suv, yumshoq yuvish va har kungi krem ko'p muammolarning oldini oladi.`;
}

function ruBody(): string {
  return `Зимой многие жалуются, что кожа сохнет, стягивается, чешется, а на руках появляются трещины. Причина простая: на улице холод и ветер, а дома батареи пересушивают воздух. Кожа теряет защитный слой и быстро испаряет влагу. Правильный уход помогает предотвратить большинство этих проблем.

## Почему зимой сохнет кожа?

- **Холодный воздух** почти не держит влагу, а ветер «высушивает» кожу.
- **Отопление** снижает влажность воздуха в комнате до 20–30%.
- **Горячий душ и ванна** смывают кожное сало.
- **Частое мытьё рук и антисептики** сильно пересушивают кожу рук.
- **Мало воды** и много горячих напитков.

В итоге кожа стягивается, шелушится, краснеет, чешется, появляются мелкие трещины. Атопический дерматит, экзема и псориаз зимой часто обостряются.

## Ежедневный зимний уход

**Лицо**

- Умывайтесь не мылом, а мягким кремом или гелем.
- Откажитесь от спиртовых тоников и лосьонов.
- Утром и вечером наносите более плотный увлажняющий крем — с церамидами, гиалуроновой кислотой, глицерином.
- Наносите крем за 20–30 минут до выхода на улицу, чтобы он полностью впитался.
- Не забывайте о солнцезащитном креме и зимой — особенно при пигментных пятнах. Подробнее: [Мелазма](/ru/articles/art-melazma).

**Руки**

- Мойте руки тёплой водой и после каждого мытья наносите крем.
- На улице носите перчатки, при домашних делах — резиновые.
- Плотный крем на ночь под хлопковые перчатки быстро заживляет трещины.

**Губы**

- Часто наносите гигиенический бальзам.
- Не облизывайте губы — это сушит их ещё сильнее.

**Тело**

- Душ — 5–10 минут, вода тёплая.
- Не растирайте кожу полотенцем, промакивайте.
- В течение 3 минут после душа наносите крем или лосьон для тела.

**Дом**

- Пользуйтесь увлажнителем воздуха или ставьте в комнате воду.
- Чаще проветривайте и не перегревайте помещение.

## Частые зимние ошибки

- Долгое мытьё в очень горячей воде.
- Частые скрабы и пилинги — зимой кожа тоньше и чувствительнее.
- Выход на мороз с влажным лицом или руками.
- Только лёгкий гель в роли «увлажнения» — зимой нужен более плотный крем.
- Игнорировать зуд — он может быть признаком болезни.

## Когда это уже не просто сухая кожа?

Если, несмотря на уход:

- кожа краснеет, чешется и мокнет — это может быть [экзема](/ru/articles/art-ekzema) или [атопический дерматит](/ru/articles/art-atopic-dermatitis);
- на лице, бровях и коже головы жирные чешуйки — [себорейный дерматит](/ru/articles/art-seboreyali-dermatit);
- чешется всё тело — нужно выяснить [причины зуда](/ru/articles/art-teri-qichishi);
- трещины на руках кровоточат, болят и не заживают,

— обратитесь к дерматологу. В таких случаях одного крема мало, нужно лечение.

## Консультация по зимнему уходу в Фергане и Коканде

В Radeski Skin Clinic [дерматолог](/ru/services/dermatologiya) определит тип и состояние вашей кожи, подберёт средства зимнего ухода, а при признаках болезни — начнёт лечение. Для глубокого увлажнения косметолог может порекомендовать процедуры вроде [биоревитализации](/ru/articles/art-biorevitalizatsiya-radeski).

- [Косметолог в Фергане](/ru/fargona/kosmetolog) и [в Коканде](/ru/qoqon/kosmetolog);
- [Дерматолог в Фергане](/ru/fargona/dermatolog) и [в Коканде](/ru/qoqon/dermatolog).

Зимой коже нужен простой, но регулярный уход: тёплая вода, мягкое очищение и ежедневный крем предотвращают многие проблемы.`;
}

function enBody(): string {
  return `In winter many people find their skin dry, tight, itchy and cracked on the hands. The reason is simple: outside there is cold and wind, inside the heating dries the air. The skin loses its protective layer and moisture evaporates quickly. The right care prevents most of these problems.

## Why does skin dry out in winter?

- **Cold air** holds little moisture, and wind dries the skin out.
- **Heating** drops indoor humidity to 20–30%.
- **Hot showers and baths** wash away the skin's natural oils.
- **Frequent hand washing and sanitisers** dry the hands badly.
- **Too little water** and lots of hot drinks.

The result is tight, flaky, red, itchy skin with small cracks. Atopic dermatitis, eczema and psoriasis often flare in winter.

## A daily winter routine

**Face**

- Cleanse with a gentle cream or gel cleanser, not soap.
- Skip alcohol-based toners and lotions.
- Use a richer moisturiser morning and evening — with ceramides, hyaluronic acid or glycerin.
- Apply it 20–30 minutes before going out so it is fully absorbed.
- Keep using sunscreen in winter — especially if you have pigment spots. More: [Melasma](/en/articles/art-melazma).

**Hands**

- Wash in warm water and apply cream after every wash.
- Wear gloves outdoors and rubber gloves for housework.
- A thick cream at night under cotton gloves heals cracks quickly.

**Lips**

- Apply lip balm often.
- Do not lick your lips — it dries them further.

**Body**

- Keep showers to 5–10 minutes in warm water.
- Pat your skin dry instead of rubbing.
- Apply body cream or lotion within 3 minutes of showering.

**Home**

- Use a humidifier or put bowls of water in the room.
- Air rooms often and do not overheat them.

## Common winter mistakes

- Long, very hot showers.
- Frequent scrubs and peels — winter skin is thinner and more sensitive.
- Going out into the cold with a damp face or hands.
- Relying on a light gel as "moisturiser" — winter calls for a richer cream.
- Ignoring itching — it can be a sign of disease.

## When is it more than dry skin?

If, despite good care:

- the skin turns red, itchy and weepy — it may be [eczema](/en/articles/art-ekzema) or [atopic dermatitis](/en/articles/art-atopic-dermatitis);
- greasy flakes appear on the face, eyebrows and scalp — [seborrheic dermatitis](/en/articles/art-seboreyali-dermatit);
- your whole body itches — the [causes of itching](/en/articles/art-teri-qichishi) need to be found;
- cracks on your hands bleed, hurt and will not heal,

— see a dermatologist. Cream alone is not enough here; you need treatment.

## Winter skin advice in Fergana and Kokand

At Radeski Skin Clinic a [dermatologist](/en/services/dermatologiya) assesses your skin type and condition, chooses winter care products and starts treatment if there are signs of disease. For deep hydration a cosmetologist may suggest procedures such as [biorevitalisation](/en/articles/art-biorevitalizatsiya-radeski).

- [Cosmetologist in Fergana](/en/fargona/kosmetolog) and [in Kokand](/en/qoqon/kosmetolog);
- [Dermatologist in Fergana](/en/fargona/dermatolog) and [in Kokand](/en/qoqon/dermatolog).

Winter skin needs simple but regular care: warm water, gentle cleansing and a daily cream prevent many problems.`;
}

export const WINTER_SKIN_CARE_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Qishda teri nega quriydi va yoriladi: yuz, qo'l, lab va tana uchun har kungi parvarish, keng tarqalgan xatolar va qachon dermatologga borish kerak. Farg'ona va Qo'qonda maslahat.",
    body: uzBody(),
    keyTakeaways: [
      'Sovuq, shamol, isitish va issiq suv qishda terini quritadi',
      "Yumshoq yuvish va kuniga 2 marta zichroq namlovchi krem — asosiy qoida",
      "Qo'lni har yuvgandan keyin krem, ko'chada qo'lqop",
      'Qishda ham quyoshdan himoya kremi kerak',
      "Qizarish, namlanish va kuchli qichishish — ekzema yoki dermatit belgisi bo'lishi mumkin",
    ],
    tags: ['Qishda teri parvarishi', 'Quruq teri', "Qo'llar yorilishi", 'Namlovchi krem', 'Kosmetolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Teri qizarib, qichib, namlansa",
      "Qo'llardagi yoriqlar qonasa va bitmasa",
      'Butun tana qichisa',
      "Yuz va bosh terisida yog'li po'stlar paydo bo'lsa",
      "Bolada teri quruqligi va qichishish kuchli bo'lsa",
    ],
    faq: [
      {
        question: 'Qishda qanday krem tanlash kerak?',
        answer:
          "Yozgi yengil gel o'rniga zichroq krem: seramidlar, gialuron kislotasi, glitserin, shea yog'i kabi tarkibli. Spirt va kuchli xushbo'y moddalar bo'lmagani yaxshi. Teringiz turiga mos vositani dermatolog yoki kosmetolog tanlab beradi.",
      },
      {
        question: 'Qishda quyoshdan himoya kremi kerakmi?',
        answer:
          "Ha, ayniqsa pigment dog'lari, melazma bo'lsa yoki tog'da, qorli joyda bo'lsangiz. Ultrabinafsha nurlar qishda ham teriga yetib boradi.",
      },
      {
        question: "Qo'llardagi yoriqlarni qanday tez bitirish mumkin?",
        answer:
          "Qo'lni iliq suvda yumshoq vosita bilan yuving, har safar krem surting, kechasi qalin krem surtib paxta qo'lqop kiying. Yoriqlar qonasa, og'risa yoki 1–2 haftada bitmasa — bu qo'l ekzemasi bo'lishi mumkin, dermatologga ko'rining.",
      },
      {
        question: 'Qishda yuzni necha marta yuvish kerak?',
        answer:
          "Kuniga 2 marta — ertalab va kechqurun yumshoq vosita bilan yetarli. Tez-tez va issiq suvda yuvish terining himoya qatlamini buzadi.",
      },
      {
        question: "Farg'ona va Qo'qonda qishki parvarish bo'yicha qayerda maslahat olish mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog va kosmetolog teringiz holatini baholaydi va qishki parvarishni tanlab beradi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Почему зимой кожа сохнет и трескается: ежедневный уход за лицом, руками, губами и телом, частые ошибки и когда идти к дерматологу. Консультация в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Холод, ветер, отопление и горячая вода зимой сушат кожу',
      'Мягкое очищение и плотный увлажняющий крем 2 раза в день — главное правило',
      'Крем после каждого мытья рук, на улице — перчатки',
      'Солнцезащитный крем нужен и зимой',
      'Покраснение, мокнутие и сильный зуд могут быть признаком экземы или дерматита',
    ],
    tags: ['Уход за кожей зимой', 'Сухая кожа', 'Трещины на руках', 'Увлажняющий крем', 'Косметолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Кожа краснеет, чешется и мокнет',
      'Трещины на руках кровоточат и не заживают',
      'Чешется всё тело',
      'На лице и коже головы жирные чешуйки',
      'У ребёнка сильная сухость и зуд кожи',
    ],
    faq: [
      {
        question: 'Какой крем выбрать зимой?',
        answer:
          'Вместо лёгкого летнего геля — более плотный крем с церамидами, гиалуроновой кислотой, глицерином, маслом ши. Лучше без спирта и сильных отдушек. Подходящее средство для вашего типа кожи подберёт дерматолог или косметолог.',
      },
      {
        question: 'Нужен ли солнцезащитный крем зимой?',
        answer:
          'Да, особенно при пигментных пятнах, мелазме, в горах и на снегу. Ультрафиолет достигает кожи и зимой.',
      },
      {
        question: 'Как быстро заживить трещины на руках?',
        answer:
          'Мойте руки тёплой водой с мягким средством, каждый раз наносите крем, на ночь — плотный крем под хлопковые перчатки. Если трещины кровоточат, болят или не заживают 1–2 недели, это может быть экзема рук — покажитесь дерматологу.',
      },
      {
        question: 'Сколько раз в день умываться зимой?',
        answer:
          'Достаточно 2 раз в день — утром и вечером, мягким средством. Частое умывание горячей водой разрушает защитный слой кожи.',
      },
      {
        question: 'Где получить консультацию по зимнему уходу в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог и косметолог оценят состояние кожи и подберут зимний уход. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Why skin dries and cracks in winter: a daily routine for face, hands, lips and body, common mistakes and when to see a dermatologist. Advice in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Cold, wind, heating and hot water dry the skin in winter',
      'Gentle cleansing and a richer moisturiser twice a day are the core rule',
      'Cream after every hand wash, gloves outdoors',
      'Sunscreen is still needed in winter',
      'Redness, weeping and severe itching may be eczema or dermatitis',
    ],
    tags: ['Winter skin care', 'Dry skin', 'Cracked hands', 'Moisturiser', 'Cosmetologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Skin turns red, itchy and weepy',
      'Cracks on the hands bleed and do not heal',
      'Your whole body itches',
      'Greasy flakes appear on the face and scalp',
      'A child has severe dry, itchy skin',
    ],
    faq: [
      {
        question: 'Which cream should I use in winter?',
        answer:
          'Swap a light summer gel for a richer cream with ceramides, hyaluronic acid, glycerin or shea butter, ideally without alcohol or strong fragrance. A dermatologist or cosmetologist can pick the right product for your skin.',
      },
      {
        question: 'Do I need sunscreen in winter?',
        answer:
          'Yes, especially with pigment spots or melasma, and in the mountains or snow. Ultraviolet light reaches the skin in winter too.',
      },
      {
        question: 'How do I heal cracked hands quickly?',
        answer:
          'Wash in warm water with a mild cleanser, apply cream every time, and at night use a thick cream under cotton gloves. If cracks bleed, hurt or do not heal in 1–2 weeks, it may be hand eczema — see a dermatologist.',
      },
      {
        question: 'How often should I wash my face in winter?',
        answer:
          'Twice a day — morning and evening, with a gentle cleanser — is enough. Frequent washing with hot water damages the skin barrier.',
      },
      {
        question: 'Where can I get winter skin care advice in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist and cosmetologist assess your skin and choose a winter routine. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const WINTER_SKIN_CARE_ARTICLE: Article = {
  id: 'art-qishda-teri-parvarishi',
  slug: 'qishda-teri-parvarishi',
  title: {
    uz: "Qishda teri parvarishi: quruqlik, yoriqlar va qichishishdan qanday saqlanish kerak",
    ru: 'Уход за кожей зимой: как защититься от сухости, трещин и шелушения',
    en: 'Winter Skin Care: How to Prevent Dryness, Cracks and Flaking',
  },
  summary: {
    uz: WINTER_SKIN_CARE_ARTICLE_CATALOG.uz.summary,
    ru: WINTER_SKIN_CARE_ARTICLE_CATALOG.ru.summary,
    en: WINTER_SKIN_CARE_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: WINTER_SKIN_CARE_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: WINTER_SKIN_CARE_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: WINTER_SKIN_CARE_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Kodirova Dilafruzxon',
    ru: 'Кодирова Дилафрузхон',
    en: 'Dr. Dilafruzkhon Kodirova',
  },
  date: '2026-11-04',
  image: '/articles/qishda-teri-parvarishi-cover.jpg',
  images: {
    uz: '/articles/qishda-teri-parvarishi-cover.jpg',
    ru: '/articles/qishda-teri-parvarishi-cover.jpg',
    en: '/articles/qishda-teri-parvarishi-cover.jpg',
  },
  views: 0,
};
