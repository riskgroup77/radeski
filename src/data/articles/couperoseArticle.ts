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
 * Couperose (facial thread veins): what it is, causes and triggers, how it differs from rosacea,
 * why creams do not remove vessels, how the Derma V laser and IPL treat them (1–2 sessions for
 * small vessels, review at 3–4 weeks), daily care that helps. Answers the "kuperoz nima"
 * Search Console query. Clinic facts: the vascular landing topics, Derma V and IPL devices,
 * price list names.
 */

const COVER = {
  uz: '/articles/kuperoz-cover-uz.jpg',
  ru: '/articles/kuperoz-cover-ru.jpg',
  en: '/articles/kuperoz-cover-en.jpg',
};

function uzBody(): string {
  return `**Kuperoz** — yuzda, ko‘pincha yonoq, burun qanotlari va iyakda ko‘rinadigan mayda qizil yoki binafsha tomir to‘rlari. Tibbiyotda ular **teleangiektaziya** deyiladi — bu kengaygan va qayta torayolmaydigan kapillyarlar. Kuperoz xavfli emas, lekin yuzni doimiy qizargan ko‘rsatadi va o‘z-o‘zidan yo‘qolmaydi.

## Nima uchun paydo bo‘ladi?

- **Irsiyat va yupqa teri** — ko‘pincha oq, sezgir terida.
- **Harorat o‘zgarishi** — sovuq, shamol, issiq hammom va sauna.
- **Quyosh** — UV nurlari tomir devorini zaiflashtiradi.
- **Alkogol, achchiq va issiq ovqat**, kuchli jismoniy yuklama — tomirlarni kengaytiradi.
- **Rozatsea** — kuperoz uning belgilaridan biri bo‘lishi mumkin.
- **Agressiv parvarish** — skrablar, qattiq tozalash, terini ishqalash.

## Kuperoz va rozatsea — farqi

**Kuperoz** — asosan ko‘rinadigan tomir to‘rlari. **Rozatsea** esa surunkali kasallik: doimiy qizarish, «qizarib ketish» xurujlari, ba’zan husnbuzarga o‘xshash toshmalar va ko‘z qichishi bilan kechadi. Rozatseada davolash kompleks — dori vositalari ham kerak bo‘ladi. Shuning uchun avval **dermatolog** tashxis qo‘yadi.

## Kremlar tomirni yo‘qotadimi?

Yo‘q. Kremlar qizarishni biroz tinchlantirishi va terini himoya qilishi mumkin, lekin **kengaygan tomirni yopmaydi**. Tomir to‘rini olib tashlash uchun apparat muolajasi kerak.

## Qanday davolanadi?

- **Derma V (Lutronic)** — qon-tomir lazeri: u qondagi gemoglobinga ta’sir qilib tomirni yopadi, atrofdagi teri zararlanmaydi. Mayda tomirlar ko‘pincha **1–2 seansda** yo‘qoladi; natija **3–4 haftadan** keyin baholanadi, kerak bo‘lsa takroriy seans qilinadi.
- **IPL InMode Lumecca** — keng spektrli yorug‘lik: umumiy qizarish va mayda tomirlar, bir vaqtda pigment ham. Reabilitatsiya deyarli yo‘q.
- Rozatseada — lazer bilan birga **dori vositalari** va parvarish rejasi.

Muolajadan keyin bir necha kun yengil qizarish yoki shish bo‘lishi mumkin. Teri qoraymagan bo‘lishi kerak, keyin esa **SPF** shart.

## Uyda nima yordam beradi?

- Yumshoq, ishqalamaydigan yuvish va namlantiruvchi vositalar.
- Har kuni **SPF 30–50**, qishda ham.
- Sovuq va shamolda yuzni himoya qilish.
- Issiq hammom, sauna, alkogol va achchiq ovqatni kamaytirish.
- Skrab, mexanik yuz tozalash va bug‘lashdan voz kechish.

Uy parvarishi yangi tomirlar paydo bo‘lishini sekinlashtiradi, lekin borlarini yo‘qotmaydi.

Batafsil: [Qon tomir va qizarish davolash Farg‘onada](/uz/fargona/qon-tomir), [Lazer bilan tomir olib tashlash](/uz/fargona/lazer-tomir), [Derma V: qizarish](/uz/articles/art-derma-v-qizarish-radeski), [Rozatsea davolash](/uz/articles/art-rozatseya-davolash-radeski).`;
}

function ruBody(): string {
  return `**Купероз** — мелкие красные или фиолетовые сосудистые сеточки на лице, чаще на щеках, крыльях носа и подбородке. В медицине их называют **телеангиэктазиями** — это расширенные капилляры, которые уже не могут сузиться. Купероз не опасен, но делает лицо постоянно покрасневшим и сам не проходит.

## Почему появляется?

- **Наследственность и тонкая кожа** — чаще у светлой, чувствительной кожи.
- **Перепады температур** — холод, ветер, горячая баня и сауна.
- **Солнце** — УФ-лучи ослабляют стенку сосуда.
- **Алкоголь, острая и горячая еда**, сильная нагрузка — расширяют сосуды.
- **Розацеа** — купероз может быть одним из её признаков.
- **Агрессивный уход** — скрабы, жёсткие чистки, растирание кожи.

## Купероз и розацеа — разница

**Купероз** — в основном видимые сосудистые сеточки. **Розацеа** — хроническое заболевание: постоянное покраснение, «приливы», иногда высыпания, похожие на акне, и раздражение глаз. При розацеа лечение комплексное — нужны и препараты. Поэтому сначала диагноз ставит **дерматолог**.

## Уберут ли кремы сосуды?

Нет. Кремы могут немного успокоить покраснение и защитить кожу, но **не закрывают расширенный сосуд**. Чтобы убрать сеточку, нужна аппаратная процедура.

## Как лечат?

- **Derma V (Lutronic)** — сосудистый лазер: действует на гемоглобин и закрывает сосуд, не повреждая окружающую кожу. Мелкие сосуды часто уходят за **1–2 сеанса**; результат оценивают через **3–4 недели**, при необходимости повторяют.
- **IPL InMode Lumecca** — широкий спектр света: общее покраснение и мелкие сосуды, одновременно пигмент. Почти без реабилитации.
- При розацеа — лазер вместе с **препаратами** и планом ухода.

После процедуры несколько дней возможно лёгкое покраснение или отёк. Кожа не должна быть загорелой, а после обязательно нужен **SPF**.

## Что помогает дома?

- Мягкое очищение без трения и увлажняющие средства.
- Ежедневный **SPF 30–50**, и зимой тоже.
- Защита лица от холода и ветра.
- Меньше горячей бани, сауны, алкоголя и острой еды.
- Отказ от скрабов, механической чистки и распаривания.

Домашний уход замедляет появление новых сосудов, но не убирает уже имеющиеся.

Подробнее: [Лечение сосудистой сеточки в Фергане](/ru/fargona/qon-tomir), [Удаление сосудов лазером](/ru/fargona/lazer-tomir), [Derma V: покраснение](/ru/articles/art-derma-v-qizarish-radeski), [Лечение розацеа](/ru/articles/art-rozatseya-davolash-radeski).`;
}

function enBody(): string {
  return `**Couperose** is the network of small red or purple thread veins on the face, usually on the cheeks, the sides of the nose and the chin. Doctors call them **telangiectasias** — dilated capillaries that can no longer narrow. Couperose is not dangerous, but it makes the face look constantly flushed and does not go away by itself.

## Why does it appear?

- **Genetics and thin skin** — more common in fair, sensitive skin.
- **Temperature swings** — cold, wind, hot baths and saunas.
- **Sun** — UV light weakens vessel walls.
- **Alcohol, spicy and hot food**, intense exercise — they dilate vessels.
- **Rosacea** — couperose can be one of its signs.
- **Harsh skincare** — scrubs, aggressive cleansing, rubbing the skin.

## Couperose vs rosacea

**Couperose** is mainly visible thread veins. **Rosacea** is a chronic condition: constant redness, flushing episodes, sometimes acne-like bumps and irritated eyes. Rosacea needs combined treatment including medicines, so a **dermatologist** makes the diagnosis first.

## Will creams remove the veins?

No. Creams can calm redness a little and protect the skin, but they **do not close a dilated vessel**. Removing thread veins needs a device treatment.

## How is it treated?

- **Derma V (Lutronic)** — a vascular laser that targets haemoglobin and closes the vessel without harming the surrounding skin. Small vessels often clear in **1–2 sessions**; the result is checked after **3–4 weeks** and repeated if needed.
- **IPL InMode Lumecca** — broad-spectrum light for overall redness and small vessels, and pigment at the same time. Almost no downtime.
- For rosacea — laser together with **medicines** and a skincare plan.

Mild redness or swelling may last a few days after treatment. The skin must not be tanned, and **SPF** is essential afterwards.

## What helps at home?

- Gentle cleansing without rubbing, and moisturisers.
- Daily **SPF 30–50**, in winter too.
- Protecting your face from cold and wind.
- Less hot bathing, sauna, alcohol and spicy food.
- No scrubs, mechanical cleansing or steaming.

Home care slows down new veins appearing but does not remove existing ones.

Read more: [Thread vein and redness treatment in Fergana](/en/fargona/qon-tomir), [Laser vein removal](/en/fargona/lazer-tomir), [Derma V for redness](/en/articles/art-derma-v-qizarish-radeski), [Rosacea treatment](/en/articles/art-rozatseya-davolash-radeski).`;
}

export const COUPEROSE_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Kuperoz nima: yuzdagi qizil tomir to'rlari, sabablari, rozatseadan farqi, nega kremlar yordam bermaydi va Derma V lazeri hamda IPL bilan davolash. Radeski — Farg'ona.",
    body: uzBody(),
    keyTakeaways: [
      'Kuperoz — yuzdagi kengaygan kapillyarlar (teleangiektaziya)',
      'Sovuq, quyosh, issiq hammom va alkogol uni kuchaytiradi',
      'Kremlar tomirni yopmaydi — apparat muolajasi kerak',
      'Derma V lazeri mayda tomirlarni ko‘pincha 1–2 seansda yopadi',
      'Har kuni SPF va yumshoq parvarish yangi tomirlarni sekinlashtiradi',
    ],
    tags: ['Kuperoz', 'Tomir to‘ri', 'Teleangiektaziya', 'Rozatsea', 'Derma V', 'IPL', "Farg'ona", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Yuz doimiy qizarib turadi va qizarish xurujlari bor',
      'Qizarish bilan birga husnbuzarga o‘xshash toshmalar paydo bo‘ldi',
      'Ko‘zlar qizaradi, quriydi yoki qichiydi',
      'Tomir to‘rlari tez ko‘paymoqda',
      'Yuzda bitta tomir yoki dog‘ tez kattalashyapti',
    ],
    faq: [
      {
        question: 'Kuperozni butunlay yo‘qotsa bo‘ladimi?',
        answer:
          'Mavjud tomir to‘rlarini lazer bilan yopish mumkin. Lekin moyillik qoladi, shuning uchun vaqt o‘tib yangi tomirlar paydo bo‘lishi mumkin — SPF va yumshoq parvarish buni sekinlashtiradi.',
      },
      {
        question: 'Lazer muolajasi og‘riqlimi?',
        answer:
          'Ko‘pchilik buni rezina bilan chertilgandek his qiladi. Derma V sovutish bilan ishlaydi; kerak bo‘lsa og‘riqsizlantiruvchi krem surtiladi.',
      },
      {
        question: 'Necha seans kerak?',
        answer:
          'Mayda tomirlar ko‘pincha 1–2 seansda yo‘qoladi. Natija 3–4 haftadan keyin baholanadi va kerak bo‘lsa takroriy seans qilinadi.',
      },
      {
        question: 'Kuperozda yuz tozalash qilsa bo‘ladimi?',
        answer:
          'Mexanik tozalash va bug‘lash qizarishni kuchaytiradi. Agar tozalash kerak bo‘lsa, yumshoq ultratovush tozalash tanlanadi — kosmetolog bilan kelishing.',
      },
    ],
  },
  ru: {
    summary:
      'Что такое купероз: сосудистые сеточки на лице, причины, отличие от розацеа, почему не помогают кремы и лечение лазером Derma V и IPL. Radeski — Фергана.',
    body: ruBody(),
    keyTakeaways: [
      'Купероз — расширенные капилляры на лице (телеангиэктазии)',
      'Холод, солнце, горячая баня и алкоголь его усиливают',
      'Кремы не закрывают сосуд — нужна аппаратная процедура',
      'Лазер Derma V часто закрывает мелкие сосуды за 1–2 сеанса',
      'Ежедневный SPF и мягкий уход замедляют появление новых сосудов',
    ],
    tags: ['Купероз', 'Сосудистая сеточка', 'Телеангиэктазии', 'Розацеа', 'Derma V', 'IPL', 'Фергана', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Лицо постоянно красное, бывают приливы',
      'Вместе с покраснением появились высыпания, похожие на акне',
      'Глаза краснеют, сохнут или чешутся',
      'Сосудистых сеточек быстро становится больше',
      'Один сосуд или пятно на лице быстро растёт',
    ],
    faq: [
      {
        question: 'Можно ли избавиться от купероза навсегда?',
        answer:
          'Имеющиеся сеточки можно закрыть лазером. Но склонность остаётся, и со временем могут появиться новые сосуды — SPF и мягкий уход это замедляют.',
      },
      {
        question: 'Больно ли делать лазер?',
        answer:
          'Многие описывают ощущение как щелчок резинкой. Derma V работает с охлаждением; при необходимости наносят крем-анестетик.',
      },
      {
        question: 'Сколько нужно сеансов?',
        answer:
          'Мелкие сосуды часто уходят за 1–2 сеанса. Результат оценивают через 3–4 недели и при необходимости повторяют.',
      },
      {
        question: 'Можно ли делать чистку лица при куперозе?',
        answer:
          'Механическая чистка и распаривание усиливают покраснение. Если чистка нужна, выбирают мягкую ультразвуковую — согласуйте с косметологом.',
      },
    ],
  },
  en: {
    summary:
      'What couperose is: thread veins on the face, causes, how it differs from rosacea, why creams do not help and treatment with the Derma V laser and IPL. Radeski — Fergana.',
    body: enBody(),
    keyTakeaways: [
      'Couperose is dilated facial capillaries (telangiectasias)',
      'Cold, sun, hot baths and alcohol make it worse',
      'Creams do not close vessels — a device treatment is needed',
      'The Derma V laser often closes small vessels in 1–2 sessions',
      'Daily SPF and gentle care slow down new veins',
    ],
    tags: ['Couperose', 'Thread veins', 'Telangiectasia', 'Rosacea', 'Derma V', 'IPL', 'Fergana', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Your face is always red and you have flushing episodes',
      'Acne-like bumps appear along with the redness',
      'Your eyes get red, dry or itchy',
      'Thread veins are multiplying quickly',
      'A single vessel or spot on your face is growing fast',
    ],
    faq: [
      {
        question: 'Can couperose be removed for good?',
        answer:
          'Existing thread veins can be closed with a laser. The tendency remains, so new vessels may appear over time — SPF and gentle care slow this down.',
      },
      {
        question: 'Does the laser hurt?',
        answer:
          'Many people describe it as the snap of a rubber band. Derma V works with cooling, and a numbing cream can be used.',
      },
      {
        question: 'How many sessions are needed?',
        answer:
          'Small vessels often clear in 1–2 sessions. The result is checked after 3–4 weeks and repeated if needed.',
      },
      {
        question: 'Can I have a facial cleansing with couperose?',
        answer:
          'Mechanical cleansing and steaming worsen redness. If cleansing is needed, a gentle ultrasonic one is chosen — agree it with your cosmetologist.',
      },
    ],
  },
};

export const COUPEROSE_ARTICLE: Article = {
  id: 'art-kuperoz',
  slug: 'kuperoz',
  title: {
    uz: 'Kuperoz nima: yuzdagi qizil tomirlar sababi va lazer bilan davolash',
    ru: 'Что такое купероз: причины сосудистых сеточек на лице и лечение лазером',
    en: 'What Is Couperose: Why Red Veins Appear on the Face and Laser Treatment',
  },
  summary: {
    uz: COUPEROSE_ARTICLE_CATALOG.uz.summary,
    ru: COUPEROSE_ARTICLE_CATALOG.ru.summary,
    en: COUPEROSE_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: COUPEROSE_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: COUPEROSE_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: COUPEROSE_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Kodirova Dilafruzxon',
    ru: 'Кодирова Дилафрузхон',
    en: 'Dr. Dilafruzkhon Kodirova',
  },
  date: '2026-11-12',
  image: COVER.uz,
  images: COVER,
  views: 0,
};
