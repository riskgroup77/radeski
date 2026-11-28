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
 * Cracked, dry hands in winter and hand dermatitis: cold and dry air, frequent washing,
 * detergents and sanitizer, contact allergy, hand eczema, and fungus or psoriasis that look
 * the same. What helps at home and when the dryness is a disease. Seasonal (December).
 */

const COVER = {
  uz: '/articles/qol-terisi-yorilishi-cover-uz.jpg',
  ru: '/articles/qol-terisi-yorilishi-cover-ru.jpg',
  en: '/articles/qol-terisi-yorilishi-cover-en.jpg',
};

function uzBody(): string {
  return `Qishda qo‘l terisi quriydi, qizaradi va yoriladi — ayniqsa barmoq bo‘g‘imlari va barmoq uchlarida. Ko‘pincha bu sovuq havo va tez-tez yuvish natijasi bo‘lib, to‘g‘ri parvarish bilan 1–2 haftada o‘tadi. Lekin yoriqlar qonasa, qichisa, pufakchalar chiqsa yoki parvarish yordam bermasa, bu qo‘l dermatiti yoki ekzemasi bo‘lishi mumkin.

## Nega qishda qo‘l terisi yoriladi?

- **Sovuq va quruq havo.** Qishda havo namligi past, isitilgan xonalarda esa yanada quruq. Teri suvni tez yo‘qotadi.
- **Tez-tez yuvish va issiq suv.** Har bir yuvish terining himoya yog‘ qatlamini yuvib ketadi.
- **Yuvish vositalari va antiseptiklar.** Idish yuvish suyuqligi, kir yuvish kukuni, xlorli vositalar, spirtli antiseptiklar terini quritadi va qitiqlaydi.
- **Qo‘lqopsiz ishlash.** Sovuqda, suvda, yer yoki sement bilan qo‘lqopsiz ishlash.

## Qachon bu oddiy quruqlik emas?

### Qo‘l dermatiti (kontakt dermatit)

Teri biror modda bilan doimiy aloqada bo‘lganda yallig‘lanadi. **Qitiqlovchi dermatit** — suv, sovun va kimyoviy vositalardan; **allergik dermatit** — nikel, rezina qo‘lqop, soch bo‘yog‘i, ba’zi kremlarga allergiyadan. Belgilari: qizarish, qichish, po‘st tashlash, chuqur og‘riqli yoriqlar.

### Qo‘l ekzemasi

Barmoqlar yon tomonida va kaftda mayda, qichiydigan **pufakchalar**, keyin po‘st va yoriqlar. Qaytalanib turadi va ko‘pincha atopik dermatitga moyil odamlarda uchraydi. Batafsil: [Ekzema](/uz/articles/art-ekzema).

### Zamburug‘ va psoriaz

Bir qo‘lda kuchliroq bo‘lgan po‘st tashlash zamburug‘ bo‘lishi mumkin — ko‘pincha oyoq zamburug‘i bilan birga. Kaftlarda qalin, aniq chegarali, kumushsimon po‘stli dog‘lar esa psoriaz belgisi. Bularni namlovchi krem bilan davolab bo‘lmaydi: tashxis kerak. Batafsil: [Teri zamburug‘i](/uz/articles/art-teri-zamburugi).

## Uyda nima qilish kerak?

1. **Iliq suv**, issiq emas. Yuvgandan keyin qo‘lni ishqalamay, yumshoq sochiq bilan bosib quriting.
2. **Har yuvishdan keyin krem.** Glitserin, mochevina (urea 5–10%), pantenol yoki seramidli zich krem. Kechasi qalin qatlam surtib, paxta qo‘lqop kiyish yaxshi yordam beradi.
3. **Uy ishlarida qo‘lqop.** Ichida paxta qo‘lqop, ustidan rezina yoki nitril qo‘lqop.
4. **Ko‘chada issiq qo‘lqop** — sovuq va shamol terini yanada quritadi.
5. **Sovunni yumshog‘iga almashtiring**, xushbo‘ylashtirilgan vositalardan voz keching.

Yoriqlarni spirt yoki yod bilan kuydirish, shifokorsiz gormonli malhamlarni uzoq surtish tavsiya etilmaydi: gormonli vosita terini yupqalashtiradi, zamburug‘ bo‘lsa esa uni kuchaytiradi.

## Qachon dermatologga borish kerak?

- 2 hafta parvarishdan keyin ham yaxshilanmasa;
- yoriqlar chuqur, qonaydi yoki yiringlaydi;
- pufakchalar chiqsa yoki kuchli qichisa;
- dog‘lar kaftdan boshqa joylarga tarqalsa;
- bir xil ish yoki modda bilan bog‘liq bo‘lsa (kasbiy dermatit).

Dermatolog terini ko‘rib, kerak bo‘lsa zamburug‘ tahlilini oladi: qitiqlovchi va allergik dermatit, ekzema, zamburug‘ va psoriaz turlicha davolanadi. Radeski Skin Clinic’da dermatolog Farg‘ona va Qo‘qonda qabul qiladi: [Dermatolog Farg‘onada](/uz/fargona/dermatolog), [Dermatolog Qo‘qonda](/uz/qoqon/dermatolog).

*Ushbu maqola umumiy ma’lumot uchun. Yakuniy tashxis va davolashni faqat shifokor belgilaydi.*`;
}

function ruBody(): string {
  return `Зимой кожа рук сохнет, краснеет и трескается — особенно на костяшках и кончиках пальцев. Чаще всего виноваты холод и частое мытьё, и при правильном уходе всё проходит за 1–2 недели. Но если трещины кровоточат, кожа зудит, появляются пузырьки или уход не помогает — это может быть дерматит или экзема рук.

## Почему зимой трескается кожа рук?

- **Холодный и сухой воздух.** Зимой влажность низкая, а в отапливаемых помещениях воздух ещё суше — кожа быстро теряет воду.
- **Частое мытьё и горячая вода.** Каждое мытьё смывает защитный липидный слой кожи.
- **Моющие средства и антисептики.** Средства для посуды, стиральный порошок, хлорсодержащие средства, спиртовые антисептики сушат и раздражают кожу.
- **Работа без перчаток.** На холоде, в воде, с землёй или цементом.

## Когда это не просто сухость?

### Дерматит рук (контактный дерматит)

Кожа воспаляется от постоянного контакта с веществом. **Раздражающий дерматит** — от воды, мыла и химии; **аллергический** — от никеля, резиновых перчаток, краски для волос, некоторых кремов. Признаки: покраснение, зуд, шелушение, глубокие болезненные трещины.

### Экзема рук

Мелкие зудящие **пузырьки** на боковых поверхностях пальцев и ладонях, затем шелушение и трещины. Повторяется волнами и чаще бывает у людей со склонностью к атопическому дерматиту. Подробнее: [Экзема](/ru/articles/art-ekzema).

### Грибок и псориаз

Шелушение, которое сильнее на одной руке, может быть грибком — часто вместе с грибком стоп. Плотные, чётко очерченные бляшки с серебристыми чешуйками на ладонях — признак псориаза. Увлажняющим кремом их не вылечить: нужен диагноз. Подробнее: [Грибок кожи](/ru/articles/art-teri-zamburugi).

## Что делать дома?

1. **Тёплая, не горячая вода.** После мытья промокайте руки мягким полотенцем, не трите.
2. **Крем после каждого мытья.** Плотный крем с глицерином, мочевиной (5–10%), пантенолом или церамидами. На ночь — толстый слой и хлопковые перчатки.
3. **Перчатки для домашних дел.** Хлопковые внутри, резиновые или нитриловые сверху.
4. **Тёплые перчатки на улице** — холод и ветер сушат кожу ещё сильнее.
5. **Мягкое мыло** без отдушек.

Прижигать трещины спиртом или йодом, долго мазать гормональные мази без врача не рекомендуется: гормоны истончают кожу, а при грибке усиливают его.

## Когда идти к дерматологу?

- нет улучшения после 2 недель ухода;
- трещины глубокие, кровоточат или гноятся;
- появились пузырьки или сильный зуд;
- пятна распространяются за пределы ладоней;
- проблема связана с работой или конкретным веществом (профессиональный дерматит).

Дерматолог осмотрит кожу и при необходимости возьмёт анализ на грибок: раздражающий и аллергический дерматит, экзема, грибок и псориаз лечатся по-разному. В Radeski Skin Clinic дерматолог принимает в Фергане и Коканде: [Дерматолог в Фергане](/ru/fargona/dermatolog), [Дерматолог в Коканде](/ru/qoqon/dermatolog).

*Статья носит информационный характер. Диагноз и лечение назначает только врач.*`;
}

function enBody(): string {
  return `In winter the skin on the hands dries, reddens and cracks, especially over the knuckles and on the fingertips. Usually cold air and frequent washing are to blame, and with the right care it settles in 1–2 weeks. But if cracks bleed, the skin itches, blisters appear or care does not help, it may be hand dermatitis or eczema.

## Why do hands crack in winter?

- **Cold, dry air.** Humidity is low in winter and even lower in heated rooms, so skin loses water fast.
- **Frequent washing and hot water.** Every wash strips the skin’s protective oil layer.
- **Detergents and sanitiser.** Dish soap, laundry powder, chlorine cleaners and alcohol sanitisers dry and irritate the skin.
- **Working without gloves.** In the cold, in water, with soil or cement.

## When is it more than dryness?

### Hand dermatitis (contact dermatitis)

The skin becomes inflamed from repeated contact with a substance. **Irritant dermatitis** comes from water, soap and chemicals; **allergic dermatitis** from nickel, rubber gloves, hair dye or some creams. Signs: redness, itching, flaking and deep painful cracks.

### Hand eczema

Small itchy **blisters** on the sides of the fingers and palms, followed by peeling and cracks. It comes in waves and is more common in people prone to atopic dermatitis. More: [Eczema](/en/articles/art-ekzema).

### Fungus and psoriasis

Peeling that is worse on one hand may be fungal, often together with athlete’s foot. Thick, sharply bordered patches with silvery scale on the palms point to psoriasis. A moisturiser will not cure either: they need a diagnosis. More: [Skin fungus](/en/articles/art-teri-zamburugi).

## What to do at home

1. **Lukewarm, not hot, water.** Pat hands dry with a soft towel instead of rubbing.
2. **Cream after every wash.** A rich cream with glycerin, urea (5–10%), panthenol or ceramides. At night, a thick layer under cotton gloves.
3. **Gloves for housework.** Cotton inside, rubber or nitrile on top.
4. **Warm gloves outdoors**: cold and wind dry the skin further.
5. **Mild, fragrance-free soap.**

Cauterising cracks with alcohol or iodine, or using steroid ointments for a long time without a doctor, is not recommended: steroids thin the skin and make fungus worse.

## When to see a dermatologist

- no improvement after 2 weeks of care;
- cracks are deep, bleed or ooze pus;
- blisters or strong itching appear;
- patches spread beyond the palms;
- it is linked to your job or a specific substance (occupational dermatitis).

The dermatologist examines the skin and takes a fungal test if needed: irritant and allergic dermatitis, eczema, fungus and psoriasis are treated differently. Radeski Skin Clinic has dermatologists in Fergana and Kokand: [Dermatologist in Fergana](/en/fargona/dermatolog), [Dermatologist in Kokand](/en/qoqon/dermatolog).

*This article is for general information. Only a doctor can make a diagnosis and prescribe treatment.*`;
}

export const HAND_DERMATITIS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Qishda qo‘l terisi nega quriydi va yoriladi: sovuq, tez-tez yuvish, yuvish vositalari. Qo‘l dermatiti, ekzema, zamburug‘ va psoriazni qanday farqlash, uyda parvarish va qachon dermatologga borish.',
    body: uzBody(),
    keyTakeaways: [
      'Qishki yoriqlarning asosiy sababi — quruq havo va tez-tez yuvish',
      'Har yuvishdan keyin zich krem surtish eng samarali parvarish',
      'Uy ishlarida ichiga paxta qo‘lqop kiyib, ustidan rezina qo‘lqop taqing',
      'Pufakcha, qonaydigan yoriq va bir qo‘ldagi po‘st — dermatitdan boshqa kasallik belgisi bo‘lishi mumkin',
      'Shifokorsiz gormonli malhamni uzoq surtmang',
    ],
    tags: ['Qo‘l terisi yorilishi', 'Qo‘l dermatiti', 'Kontakt dermatit', 'Qo‘l ekzemasi', 'Quruq teri', 'Qishki parvarish', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      '2 hafta parvarishdan keyin ham yaxshilanmasa',
      'Yoriqlar qonasa yoki yiringlasa',
      'Pufakchalar va kuchli qichish bo‘lsa',
      'Dog‘lar tarqalayotgan bo‘lsa',
      'Muammo ish yoki biror modda bilan bog‘liq bo‘lsa',
    ],
    faq: [
      {
        question: 'Qishda qo‘l terisi yorilsa nima surtish kerak?',
        answer:
          'Glitserin, mochevina (5–10%), pantenol yoki seramidli zich krem — har yuvishdan keyin va kechasi qalin qatlam. Yoriqlar 2 haftada bitmasa yoki qonasa, dermatolog ko‘rigi kerak.',
      },
      {
        question: 'Qo‘l dermatiti va ekzema bir narsami?',
        answer:
          'Yaqin, lekin bir xil emas. Dermatit ko‘pincha suv, sovun yoki allergen bilan aloqadan; qo‘l ekzemasi esa qaytalanuvchi kasallik bo‘lib, mayda qichiydigan pufakchalar bilan kechadi. Davolash shifokor tashxisiga qarab tanlanadi.',
      },
      {
        question: 'Qo‘ldagi po‘st zamburug‘ bo‘lishi mumkinmi?',
        answer:
          'Ha, ayniqsa po‘st bir qo‘lda kuchliroq bo‘lsa va oyoqda ham zamburug‘ bo‘lsa. Buni zamburug‘ tahlili aniqlaydi; gormonli malham zamburug‘ni kuchaytirishi mumkin.',
      },
      {
        question: 'Antiseptik qo‘lni quritadimi?',
        answer:
          'Spirtli antiseptiklar quritadi, ayniqsa kuniga ko‘p marta ishlatilsa. Namlovchi qo‘shilgan antiseptik tanlang va kun davomida qo‘l kremidan foydalaning.',
      },
    ],
  },
  ru: {
    summary:
      'Почему зимой сохнет и трескается кожа рук: холод, частое мытьё, моющие средства. Как отличить дерматит, экзему, грибок и псориаз, что делать дома и когда идти к дерматологу.',
    body: ruBody(),
    keyTakeaways: [
      'Главные причины зимних трещин — сухой воздух и частое мытьё',
      'Плотный крем после каждого мытья — самый действенный уход',
      'Для домашних дел — хлопковые перчатки под резиновыми',
      'Пузырьки, кровоточащие трещины и шелушение на одной руке могут быть не просто дерматитом',
      'Не мажьте гормональные мази долго без врача',
    ],
    tags: ['Трещины на руках', 'Дерматит рук', 'Контактный дерматит', 'Экзема рук', 'Сухая кожа', 'Зимний уход', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Нет улучшения после 2 недель ухода',
      'Трещины кровоточат или гноятся',
      'Появились пузырьки и сильный зуд',
      'Пятна распространяются',
      'Проблема связана с работой или веществом',
    ],
    faq: [
      {
        question: 'Чем мазать руки, если зимой трескается кожа?',
        answer:
          'Плотным кремом с глицерином, мочевиной (5–10%), пантенолом или церамидами — после каждого мытья и толстым слоем на ночь. Если трещины не заживают за 2 недели или кровоточат, нужен осмотр дерматолога.',
      },
      {
        question: 'Дерматит рук и экзема — одно и то же?',
        answer:
          'Близкие, но разные состояния. Дерматит чаще возникает от контакта с водой, мылом или аллергеном; экзема рук — рецидивирующее заболевание с мелкими зудящими пузырьками. Лечение подбирается по диагнозу.',
      },
      {
        question: 'Может ли шелушение на руках быть грибком?',
        answer:
          'Да, особенно если оно сильнее на одной руке и есть грибок стоп. Это показывает анализ на грибок; гормональная мазь может грибок усилить.',
      },
      {
        question: 'Сушит ли руки антисептик?',
        answer:
          'Спиртовые антисептики сушат, особенно при частом использовании. Выбирайте антисептик с увлажняющими добавками и пользуйтесь кремом для рук в течение дня.',
      },
    ],
  },
  en: {
    summary:
      'Why hands dry out and crack in winter: cold, frequent washing, detergents. How to tell dermatitis, eczema, fungus and psoriasis apart, what to do at home and when to see a dermatologist.',
    body: enBody(),
    keyTakeaways: [
      'Dry air and frequent washing cause most winter cracks',
      'A rich cream after every wash is the most effective care',
      'Wear cotton gloves under rubber ones for housework',
      'Blisters, bleeding cracks and peeling on one hand may be more than dermatitis',
      'Do not use steroid ointments for long without a doctor',
    ],
    tags: ['Cracked hands', 'Hand dermatitis', 'Contact dermatitis', 'Hand eczema', 'Dry skin', 'Winter skin care', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'No improvement after 2 weeks of care',
      'Cracks bleed or ooze pus',
      'Blisters and strong itching appear',
      'Patches are spreading',
      'It is linked to your job or a substance',
    ],
    faq: [
      {
        question: 'What should I put on cracked hands in winter?',
        answer:
          'A rich cream with glycerin, urea (5–10%), panthenol or ceramides, after every wash and as a thick layer at night. If cracks have not healed in 2 weeks or they bleed, see a dermatologist.',
      },
      {
        question: 'Are hand dermatitis and eczema the same?',
        answer:
          'Related but not the same. Dermatitis usually comes from contact with water, soap or an allergen; hand eczema is a recurring condition with small itchy blisters. Treatment depends on the diagnosis.',
      },
      {
        question: 'Can peeling on the hands be fungus?',
        answer:
          'Yes, especially if it is worse on one hand and you have athlete’s foot. A fungal test shows it; a steroid ointment can make fungus worse.',
      },
      {
        question: 'Does hand sanitiser dry the skin?',
        answer:
          'Alcohol sanitisers do, especially when used many times a day. Choose one with added moisturisers and use hand cream through the day.',
      },
    ],
  },
};

export const HAND_DERMATITIS_ARTICLE: Article = {
  id: 'art-qol-terisi-yorilishi',
  slug: 'qol-terisi-yorilishi',
  title: {
    uz: 'Qishda qo‘l terisi yorilishi va qo‘l dermatiti: sabablari va parvarish',
    ru: 'Трещины на руках зимой и дерматит рук: причины и уход',
    en: 'Cracked Hands in Winter and Hand Dermatitis: Causes and Care',
  },
  summary: {
    uz: HAND_DERMATITIS_ARTICLE_CATALOG.uz.summary,
    ru: HAND_DERMATITIS_ARTICLE_CATALOG.ru.summary,
    en: HAND_DERMATITIS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: HAND_DERMATITIS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: HAND_DERMATITIS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: HAND_DERMATITIS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Baxriddinov Zuxriddin Muxiddinovich',
    ru: 'Бахриддинов Зухриддин Мухиддинович',
    en: 'Zuxriddin Muxiddinovich Baxriddinov',
  },
  date: '2026-12-16',
  image: COVER.uz,
  images: COVER,
  views: 0,
};
