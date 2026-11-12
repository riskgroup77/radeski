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
 * How to prepare for a dermatologist visit: what to bring (medicine and cream list, earlier
 * tests, photos of a rash that comes and goes), what not to do before (cream on the rash, nail
 * polish before a fungus test, a fresh tan before mole checks), what happens at the visit
 * (history, dermatoscopy, tests, biopsy if needed) and questions worth asking. Clinic facts:
 * dermatovenereologist first and follow-up visits, dermatoscopy, lab tests, both branches.
 */

const COVER = {
  uz: '/articles/dermatolog-qabuli-cover-uz.jpg',
  ru: '/articles/dermatolog-qabuli-cover-ru.jpg',
  en: '/articles/dermatolog-qabuli-cover-en.jpg',
};

function uzBody(): string {
  return `Dermatolog qabuli odatda 20–30 daqiqa davom etadi. Shu vaqt ichida shifokor muammoni tushunishi, terini ko‘rishi va reja tuzishi kerak. Yaxshi tayyorgarlik bilan kelgan bemor tezroq va aniqroq tashxis oladi. Quyida qabulga nima olib kelish, nimani qilmaslik va qabulda nima bo‘lishi haqida.

## Nima olib kelish kerak?

- **Dorilar va kremlar ro‘yxati** — hozir va oxirgi oylarda ishlatganlaringiz, jumladan o‘zingiz sotib olgan surtmalar. Iloji bo‘lsa, qutisini yoki rasmini olib keling.
- **Avvalgi tahlillar va xulosalar** — qon tahlili, biopsiya, boshqa shifokorlar xulosasi.
- **Toshma rasmi** — agar toshma kelib-ketsa, u eng yaqqol bo‘lgan paytda telefonda rasmga oling.
- **Savollar ro‘yxati** — eng muhim 2–3 savolni yozib keling.

## Qabuldan oldin nimani qilmaslik kerak?

- **Toshmaga krem surtmang** qabul kuni — shifokor terini asl holida ko‘rishi kerak.
- **Tirnoq lakini oling**, agar muammo tirnoqda bo‘lsa — zamburug‘ tahlili uchun tirnoq toza bo‘lishi kerak.
- **Xol tekshiruvidan oldin** terini qoraytirmang va o‘zingizcha hech narsa kuydirmang.
- **Yuzga makiyaj** qilmang, agar muammo yuzda bo‘lsa.
- Shifokor aytmaguncha **dorini to‘xtatmang** — ayniqsa gormonli va ichiladigan dorilarni.

## Qabulda nima bo‘ladi?

1. **Suhbat:** muammo qachon boshlangan, nima kuchaytiradi, oilada shunga o‘xshash holat bormi, qanday davolangansiz.
2. **Ko‘rik:** shifokor terini, kerak bo‘lsa soch va tirnoqlarni ko‘radi. Ko‘pincha **dermatoskop** ishlatiladi — u xol va dog‘larni kattalashtirib ko‘rsatadi, og‘riqsiz.
3. **Tahlillar (kerak bo‘lsa):** zamburug‘ tahlili, qon tahlillari, ba’zan **biopsiya** — tashxis aniq bo‘lmasa.
4. **Reja:** tashxis, davolash, uyda parvarish va nazorat ko‘rigi vaqti.

## Shifokordan so‘rash foydali savollar

- Tashxisim nima va bu yuqumlimi?
- Davolash qancha davom etadi, natija qachon ko‘rinadi?
- Qaysi kremlarni to‘xtatishim kerak?
- Qaysi belgilar paydo bo‘lsa, darhol qaytib kelishim kerak?

## Qachon kutmasdan borish kerak?

- Xol tez kattalashsa, rangi yoki shakli o‘zgarsa, qonasa.
- Toshma tez tarqalsa, harorat, og‘riq yoki pufakchalar bilan kechsa.
- Bitmaydigan yara bir necha haftadan beri bo‘lsa.

## Radeski’da

Dermatovenerolog qabuli **Farg‘ona va Qo‘qon** filiallarida. Klinikada dermatoskopiya, laboratoriya va biopsiya bir joyda — tashxis boshqa joyga yo‘naltirmasdan qo‘yiladi. Birinchi va takroriy ko‘rik narxi [narxlar sahifasida](/uz/prices).

Batafsil: [Dermatolog Farg‘onada](/uz/fargona/dermatolog), [Dermatolog Qo‘qonda](/uz/qoqon/dermatolog), [Xol tekshiruvi va dermatoskopiya](/uz/articles/art-xol-tekshiruvi-dermatoskopiya), [Teri biopsiyasi Farg‘onada](/uz/fargona/biopsiya).`;
}

function ruBody(): string {
  return `Приём дерматолога обычно длится 20–30 минут. За это время врач должен понять проблему, осмотреть кожу и составить план. Пациент, который хорошо подготовился, быстрее получает точный диагноз. Ниже — что взять с собой, чего не делать и что будет на приёме.

## Что взять с собой?

- **Список лекарств и кремов** — которыми пользуетесь сейчас и в последние месяцы, включая купленные самостоятельно мази. По возможности возьмите упаковку или фото.
- **Прошлые анализы и заключения** — анализы крови, биопсии, заключения других врачей.
- **Фото сыпи** — если сыпь то появляется, то исчезает, сфотографируйте её на пике.
- **Список вопросов** — запишите 2–3 самых важных.

## Чего не делать перед приёмом?

- **Не наносите крем на сыпь** в день приёма — врачу нужно увидеть кожу как есть.
- **Снимите лак**, если проблема с ногтями — для анализа на грибок ноготь должен быть чистым.
- **Перед проверкой родинок** не загорайте и ничего не прижигайте сами.
- **Не делайте макияж**, если проблема на лице.
- **Не отменяйте лекарства** без указания врача — особенно гормональные и таблетки.

## Что происходит на приёме?

1. **Беседа:** когда началось, что усиливает, есть ли подобное у родственников, чем лечились.
2. **Осмотр:** врач смотрит кожу, при необходимости волосы и ногти. Часто используют **дерматоскоп** — он показывает родинки и пятна под увеличением, безболезненно.
3. **Анализы (при необходимости):** на грибок, анализы крови, иногда **биопсия** — если диагноз неясен.
4. **План:** диагноз, лечение, домашний уход и дата контрольного визита.

## Полезные вопросы врачу

- Какой у меня диагноз и заразно ли это?
- Сколько длится лечение и когда будет результат?
- Какие кремы мне нужно отменить?
- При каких признаках нужно сразу прийти снова?

## Когда идти без промедления?

- Родинка быстро растёт, меняет цвет или форму, кровоточит.
- Сыпь быстро распространяется, сопровождается температурой, болью или пузырями.
- Незаживающая ранка уже несколько недель.

## В Radeski

Приём дерматовенеролога — в филиалах в **Фергане и Коканде**. Дерматоскопия, лаборатория и биопсия в одной клинике — диагноз ставят без направлений в другие места. Стоимость первичного и повторного приёма — на [странице цен](/ru/prices).

Подробнее: [Дерматолог в Фергане](/ru/fargona/dermatolog), [Дерматолог в Коканде](/ru/qoqon/dermatolog), [Проверка родинок и дерматоскопия](/ru/articles/art-xol-tekshiruvi-dermatoskopiya), [Биопсия кожи в Фергане](/ru/fargona/biopsiya).`;
}

function enBody(): string {
  return `A dermatologist visit usually takes 20–30 minutes. In that time the doctor has to understand the problem, examine your skin and make a plan. Patients who come prepared get an accurate diagnosis faster. Here is what to bring, what not to do and what happens at the visit.

## What to bring

- **A list of medicines and creams** you use now or used in recent months, including ointments you bought yourself. If you can, bring the packs or photos of them.
- **Earlier test results and reports** — blood tests, biopsies, other doctors’ conclusions.
- **Photos of the rash** — if it comes and goes, photograph it at its worst.
- **Your questions** — write down the 2–3 most important.

## What not to do before the visit

- **Do not put cream on the rash** on the day — the doctor needs to see the skin as it is.
- **Remove nail polish** if the problem is in your nails — a fungus test needs a clean nail.
- **Before a mole check**, do not tan and do not try to burn anything off yourself.
- **Skip make-up** if the problem is on your face.
- **Do not stop medicines** unless the doctor says so — especially steroids and tablets.

## What happens at the visit

1. **Talk:** when it started, what makes it worse, whether relatives have something similar, how you have treated it.
2. **Examination:** the doctor looks at your skin and, if needed, hair and nails. A **dermatoscope** is often used — it shows moles and spots magnified, painlessly.
3. **Tests (if needed):** a fungus test, blood tests, sometimes a **biopsy** when the diagnosis is unclear.
4. **Plan:** diagnosis, treatment, home care and the follow-up date.

## Useful questions to ask

- What is my diagnosis, and is it contagious?
- How long will treatment take and when will I see results?
- Which creams should I stop?
- Which signs mean I should come back straight away?

## When not to wait

- A mole grows quickly, changes colour or shape, or bleeds.
- A rash spreads fast or comes with fever, pain or blisters.
- A sore has not healed for several weeks.

## At Radeski

Dermatovenereologists see patients at the **Fergana and Kokand** branches. Dermatoscopy, the lab and biopsy are in one clinic, so the diagnosis is made without referrals elsewhere. First and follow-up visit prices are on the [prices page](/en/prices).

Read more: [Dermatologist in Fergana](/en/fargona/dermatolog), [Dermatologist in Kokand](/en/qoqon/dermatolog), [Mole checks and dermatoscopy](/en/articles/art-xol-tekshiruvi-dermatoskopiya), [Skin biopsy in Fergana](/en/fargona/biopsiya).`;
}

export const DERMATOLOGIST_VISIT_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Dermatolog qabuliga qanday tayyorlanish: nima olib kelish, qabuldan oldin nimani qilmaslik, qabulda nima bo'ladi va qanday savollar berish kerak. Farg'ona va Qo'qon.",
    body: uzBody(),
    keyTakeaways: [
      'Dorilar va kremlar ro‘yxati, avvalgi tahlillar va toshma rasmini olib keling',
      'Qabul kuni toshmaga krem surtmang, tirnoq lakini oling',
      'Qabulda suhbat, ko‘rik, ko‘pincha dermatoskopiya va kerak bo‘lsa tahlillar bo‘ladi',
      'Dorini shifokor aytmaguncha to‘xtatmang',
      'Xol o‘zgarsa yoki toshma tez tarqalsa — kutmasdan boring',
    ],
    tags: ['Dermatolog', 'Dermatolog qabuli', 'Dermatoskopiya', 'Teri kasalliklari', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Xol tez kattalashyapti, rangi yoki shakli o‘zgaryapti yoki qonayapti',
      'Toshma tez tarqalyapti, harorat yoki og‘riq bilan kechyapti',
      'Bir necha haftadan beri bitmaydigan yara bor',
      'Qichishish uyquga xalaqit beryapti',
      'Kremlar bilan davolash 2–3 haftada natija bermadi',
    ],
    faq: [
      {
        question: 'Dermatolog qabuliga yo‘llanma kerakmi?',
        answer: 'Yo‘q, Radeski’da qabulga to‘g‘ridan-to‘g‘ri yozilishingiz mumkin — saytdan yoki telefon orqali.',
      },
      {
        question: 'Qabul qancha davom etadi?',
        answer:
          'Odatda 20–30 daqiqa. Dermatoskopiya yoki tahlil olish kerak bo‘lsa, biroz ko‘proq vaqt ketishi mumkin.',
      },
      {
        question: 'Qabul kuni kremni surtsam bo‘ladimi?',
        answer:
          'Muammo joyiga krem surtmagan ma’qul — shifokor terini asl holida ko‘rishi kerak. Ichiladigan dorilarni esa o‘zingizcha to‘xtatmang.',
      },
      {
        question: 'Bolani ham shu tartibda olib kelsa bo‘ladimi?',
        answer:
          'Ha. Bola ishlatayotgan krem va dorilar, toshma rasmlari foydali. Bolalar dermatologi qabuli Farg‘ona va Qo‘qon filiallarida bor.',
      },
    ],
  },
  ru: {
    summary:
      'Как подготовиться к приёму дерматолога: что взять с собой, чего не делать перед приёмом, что будет на приёме и какие вопросы задать. Фергана и Коканд.',
    body: ruBody(),
    keyTakeaways: [
      'Возьмите список лекарств и кремов, прошлые анализы и фото сыпи',
      'В день приёма не мажьте сыпь кремом, снимите лак с ногтей',
      'На приёме — беседа, осмотр, часто дерматоскопия и при необходимости анализы',
      'Не отменяйте лекарства без указания врача',
      'Если родинка меняется или сыпь быстро растёт — идите без промедления',
    ],
    tags: ['Дерматолог', 'Приём дерматолога', 'Дерматоскопия', 'Кожные заболевания', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Родинка быстро растёт, меняет цвет или форму, кровоточит',
      'Сыпь быстро распространяется, есть температура или боль',
      'Ранка не заживает несколько недель',
      'Зуд мешает спать',
      'Лечение кремами 2–3 недели не помогло',
    ],
    faq: [
      {
        question: 'Нужно ли направление к дерматологу?',
        answer: 'Нет, в Radeski можно записаться напрямую — на сайте или по телефону.',
      },
      {
        question: 'Сколько длится приём?',
        answer: 'Обычно 20–30 минут. Если нужна дерматоскопия или забор анализа, может потребоваться чуть больше времени.',
      },
      {
        question: 'Можно ли мазать крем в день приёма?',
        answer:
          'На проблемное место лучше не наносить — врачу нужно увидеть кожу как есть. Таблетки самостоятельно не отменяйте.',
      },
      {
        question: 'Можно ли так же подготовить ребёнка?',
        answer:
          'Да. Пригодятся кремы и лекарства, которые использует ребёнок, и фото сыпи. Детский дерматолог принимает в Фергане и Коканде.',
      },
    ],
  },
  en: {
    summary:
      'How to prepare for a dermatologist visit: what to bring, what not to do beforehand, what happens at the visit and which questions to ask. Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Bring a list of medicines and creams, earlier tests and rash photos',
      'On the day, do not put cream on the rash; remove nail polish',
      'The visit is a talk, an examination, often dermatoscopy and tests if needed',
      'Do not stop medicines unless the doctor tells you',
      'If a mole changes or a rash spreads fast — go without waiting',
    ],
    tags: ['Dermatologist', 'Dermatologist visit', 'Dermatoscopy', 'Skin conditions', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A mole is growing fast, changing colour or shape, or bleeding',
      'A rash is spreading fast or comes with fever or pain',
      'A sore has not healed for several weeks',
      'Itching keeps you awake',
      'Creams have not helped after 2–3 weeks',
    ],
    faq: [
      {
        question: 'Do I need a referral to see a dermatologist?',
        answer: 'No, at Radeski you can book directly — on the website or by phone.',
      },
      {
        question: 'How long does a visit take?',
        answer: 'Usually 20–30 minutes. Dermatoscopy or taking a sample may need a little more time.',
      },
      {
        question: 'Can I use my cream on the day of the visit?',
        answer:
          'Better not on the problem area — the doctor needs to see the skin as it is. Do not stop tablets on your own.',
      },
      {
        question: 'Can I prepare my child the same way?',
        answer:
          'Yes. The creams and medicines your child uses and photos of the rash are helpful. A pediatric dermatologist sees children in Fergana and Kokand.',
      },
    ],
  },
};

export const DERMATOLOGIST_VISIT_ARTICLE: Article = {
  id: 'art-dermatolog-qabuliga-tayyorgarlik',
  slug: 'dermatolog-qabuliga-tayyorgarlik',
  title: {
    uz: 'Dermatolog qabuliga qanday tayyorlanish: nima olib kelish va qabulda nima bo‘ladi',
    ru: 'Как подготовиться к приёму дерматолога: что взять с собой и что будет на приёме',
    en: 'How to Prepare for a Dermatologist Visit: What to Bring and What Happens',
  },
  summary: {
    uz: DERMATOLOGIST_VISIT_ARTICLE_CATALOG.uz.summary,
    ru: DERMATOLOGIST_VISIT_ARTICLE_CATALOG.ru.summary,
    en: DERMATOLOGIST_VISIT_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: DERMATOLOGIST_VISIT_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: DERMATOLOGIST_VISIT_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: DERMATOLOGIST_VISIT_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-11-12',
  image: COVER.uz,
  images: COVER,
  views: 0,
};
