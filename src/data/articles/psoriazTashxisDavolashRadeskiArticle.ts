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

const COVER = '/karusel/fototerapiya.webp';

function uzBody(): string {
  return `## Psoriaz nima?

**Psoriaz** — immun tizimi bilan bog‘liq surunkali teri kasalligi. Teri hujayralari odatdagidan bir necha baravar tez yangilanadi, natijada terida aniq chegarali, qizil, ustini kumushsimon po‘st qoplagan **pilakchalar** paydo bo‘ladi. Psoriaz **yuqumli emas**: u boshqalarga tegish, idish yoki suv orqali o‘tmaydi.

Kasallik davriy kechadi — kuchayish va tinchlanish (remissiya) davrlari almashadi. To‘liq davolab bo‘lmaydi, lekin to‘g‘ri tanlangan davolash bilan teri uzoq vaqt toza turadi.

![Psoriazni fototerapiya bilan davolash — Radeski Skin Clinic](${COVER})

## Asosiy belgilari

- tirsak, tizza, bel va bosh terisida qizil, po‘st bilan qoplangan dog‘lar;
- qichishish, ba’zan achishish yoki yorilish;
- tirnoqlarda nuqtali chuqurchalar, sarg‘ayish, ko‘chish;
- bosh terisida qalin qazg‘oqqa o‘xshash po‘st;
- bo‘g‘imlarda og‘riq yoki shish (psoriatik artrit belgisi bo‘lishi mumkin).

## Psoriaz qanday aniqlanadi?

Ko‘p hollarda tashxis **dermatolog ko‘rigida** qo‘yiladi:

1. **Klinik ko‘rik** — dog‘larning shakli, joylashuvi, po‘st xususiyati, tirnoqlar va bosh terisi baholanadi.
2. **Dermatoskopiya** — psoriaz uchun xos bo‘lgan nuqtali tomirlar ko‘riladi; ekzema, seboreyali dermatit yoki zamburug‘ infeksiyasidan farqlash osonlashadi.
3. **Og‘irlik darajasini baholash** — zararlangan teri maydoni (BSA) va PASI ko‘rsatkichi davolash turini tanlashga yordam beradi.
4. **Qo‘shimcha tekshiruvlar** — tashxis noaniq bo‘lsa biopsiya, zamburug‘ga shubha bo‘lsa mikologik tahlil; tizimli davolashdan oldin qon tahlillari.
5. **Bo‘g‘imlar haqida so‘rash** — bo‘g‘im og‘rig‘i bo‘lsa, revmatolog bilan maslahat tavsiya etiladi.

## Qanday davolanadi?

Davolash psoriaz turiga, maydoniga va bemorning holatiga qarab tanlanadi:

- **Tashqi vositalar** — yengil shakllarda: yallig‘lanishga qarshi kremlar, vitamin D analoglari, emolientlar.
- **Fototerapiya (tor polosali UVB, 311 nm)** — keng tarqalgan psoriazda asosiy usullardan biri. Seanslar odatda haftasiga 2–3 marta, kurs ko‘pincha 20–30 seans.
- **Eksimer lazer (308 nm)** — alohida joylashgan, chidamli pilakchalar uchun nuqtali ta’sir.
- **Tizimli va immunobiologik terapiya** — o‘rta va og‘ir shakllarda, shifokor nazoratida.

## Radeski Skin Clinic’da

Farg‘ona va Qo‘qon filiallarida dermatolog ko‘rigi va dermatoskopiya, **Daavlin** tor polosali UVB kabinalari, eksimer lazer va kerak bo‘lsa immunobiologik terapiya bir joyda. Davolash rejasi va seanslar soni ko‘rikdan keyin aniq aytiladi.

## Kuchayishni nima qo‘zg‘atadi?

Stress, infeksiyalar (masalan, tomoq og‘rig‘i), terining jarohatlanishi, chekish va spirtli ichimliklar, ba’zi dorilar va qishki quruq havo. Ularni bilish remissiyani uzaytirishga yordam beradi.

Batafsil: [Farg‘onada psoriaz davolash](/uz/fargona/psoriaz-davolash), [Qo‘qonda psoriaz davolash](/uz/qoqon/psoriaz-davolash), [Psoriaz: klinik holat](/uz/articles/art-psoriaz-klinik-keys-bahridinov-radeski), [Immunobiologik terapiya](/uz/articles/art-immunobiologiya-terapiya-radeski), [Narxlar](/uz/prices).`;
}

function ruBody(): string {
  return `## Что такое псориаз?

**Псориаз** — хроническое заболевание кожи, связанное с иммунной системой. Клетки кожи обновляются в несколько раз быстрее обычного, и на коже появляются чётко очерченные красные **бляшки**, покрытые серебристыми чешуйками. Псориаз **не заразен**: он не передаётся через прикосновения, посуду или воду.

Болезнь протекает волнообразно — обострения сменяются ремиссией. Полностью излечить её нельзя, но при правильно подобранном лечении кожа долго остаётся чистой.

![Лечение псориаза фототерапией — Radeski Skin Clinic](${COVER})

## Основные признаки

- красные шелушащиеся пятна на локтях, коленях, пояснице, коже головы;
- зуд, иногда жжение или трещины;
- точечные вдавления, пожелтение и отслоение ногтей;
- плотные чешуйки на коже головы, похожие на перхоть;
- боль или отёк суставов (возможный признак псориатического артрита).

## Как диагностируют псориаз?

Чаще всего диагноз ставится **на приёме дерматолога**:

1. **Клинический осмотр** — форма и расположение бляшек, характер шелушения, ногти и кожа головы.
2. **Дерматоскопия** — видны характерные точечные сосуды; это помогает отличить псориаз от экземы, себорейного дерматита или грибка.
3. **Оценка тяжести** — площадь поражения (BSA) и индекс PASI определяют выбор лечения.
4. **Дополнительные исследования** — биопсия при неясном диагнозе, анализ на грибок при подозрении; анализы крови перед системной терапией.
5. **Вопросы о суставах** — при болях в суставах рекомендуется консультация ревматолога.

## Как лечат?

Лечение подбирается по форме, площади и состоянию пациента:

- **Наружные средства** — при лёгкой форме: противовоспалительные кремы, аналоги витамина D, эмоленты.
- **Фототерапия (узкополосный UVB, 311 нм)** — один из основных методов при распространённом псориазе. Обычно 2–3 сеанса в неделю, курс чаще всего 20–30 сеансов.
- **Эксимерный лазер (308 нм)** — точечное воздействие на отдельные устойчивые бляшки.
- **Системная и иммунобиологическая терапия** — при среднетяжёлой и тяжёлой форме, под контролем врача.

## В Radeski Skin Clinic

В филиалах в Фергане и Коканде — приём дерматолога и дерматоскопия, кабины узкополосного UVB **Daavlin**, эксимерный лазер и при необходимости иммунобиологическая терапия. План лечения и число сеансов называются после осмотра.

## Что провоцирует обострения?

Стресс, инфекции (например, ангина), травмы кожи, курение и алкоголь, некоторые лекарства и сухой зимний воздух. Знание своих триггеров помогает продлить ремиссию.

Подробнее: [Лечение псориаза в Фергане](/ru/fargona/psoriaz-davolash), [Лечение псориаза в Коканде](/ru/qoqon/psoriaz-davolash), [Псориаз: клинический случай](/ru/articles/art-psoriaz-klinik-keys-bahridinov-radeski), [Иммунобиологическая терапия](/ru/articles/art-immunobiologiya-terapiya-radeski), [Цены](/ru/prices).`;
}

function enBody(): string {
  return `## What is psoriasis?

**Psoriasis** is a chronic, immune-related skin disease. Skin cells renew several times faster than normal, forming well-defined red **plaques** covered with silvery scale. Psoriasis is **not contagious**.

It runs in cycles of flares and remission. It cannot be cured, but with the right treatment the skin can stay clear for long periods.

![Psoriasis phototherapy — Radeski Skin Clinic](${COVER})

## Main signs

- red, scaly patches on elbows, knees, lower back and scalp;
- itching, sometimes burning or cracking;
- pitting, yellowing or lifting of the nails;
- thick dandruff-like scale on the scalp;
- joint pain or swelling (possible psoriatic arthritis).

## How is psoriasis diagnosed?

Usually at a **dermatologist visit**: clinical examination, **dermatoscopy** (typical dotted vessels help tell psoriasis from eczema, seborrheic dermatitis or fungus), severity scoring (BSA, PASI), a biopsy or fungal test when the picture is unclear, blood tests before systemic treatment, and a rheumatology referral if joints hurt.

## How is it treated?

- **Topical treatment** for mild disease — anti-inflammatory creams, vitamin D analogues, emollients.
- **Narrowband UVB phototherapy (311 nm)** — a main option for widespread psoriasis, usually 2–3 sessions a week, often 20–30 sessions per course.
- **Excimer laser (308 nm)** for localised, stubborn plaques.
- **Systemic and biologic therapy** for moderate to severe disease, under medical supervision.

## At Radeski Skin Clinic

In Fergana and Kokand: dermatologist visit and dermatoscopy, **Daavlin** narrowband UVB cabins, excimer laser and biologic therapy when indicated. The plan and number of sessions are confirmed after the examination.

Read more: [Psoriasis treatment in Fergana](/en/fargona/psoriaz-davolash), [Psoriasis treatment in Kokand](/en/qoqon/psoriaz-davolash), [Prices](/en/prices).`;
}

export const PSORIAZ_TASHXIS_DAVOLASH_RADESKI_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Psoriaz qanday aniqlanadi va davolanadi: asosiy belgilar, dermatoskopiya va og‘irlikni baholash, tashqi vositalar, Daavlin UVB 311 nm fototerapiyasi, eksimer lazer va immunobiologik terapiya. Farg‘ona va Qo‘qonda.',
    body: uzBody(),
    keyTakeaways: [
      'Psoriaz yuqumli emas va surunkali kechadi',
      'Tashxis ko‘pincha dermatolog ko‘rigi va dermatoskopiya bilan qo‘yiladi',
      'Keng tarqalgan psoriazda tor polosali UVB (311 nm) asosiy usullardan biri',
      'Bo‘g‘im og‘rig‘i bo‘lsa, psoriatik artritni istisno qilish kerak',
    ],
    whenToSeeDoctor: [
      'Terida po‘st bilan qoplangan qizil dog‘lar paydo bo‘lsa',
      'Dog‘lar kengaysa yoki kremlar yordam bermasa',
      'Tirnoqlarda chuqurchalar yoki ko‘chish bo‘lsa',
      'Bo‘g‘imlar og‘risa yoki shishsa',
    ],
    faq: [
      { question: 'Psoriaz yuqumlimi?', answer: 'Yo‘q. Psoriaz immun tizimi bilan bog‘liq kasallik va boshqa odamlarga o‘tmaydi.' },
      { question: 'Psoriazni butunlay davolab bo‘ladimi?', answer: 'To‘liq davolab bo‘lmaydi, lekin to‘g‘ri davolash bilan uzoq remissiyaga erishish mumkin.' },
      { question: 'Fototerapiya necha seans davom etadi?', answer: 'Odatda haftasiga 2–3 seans, kurs ko‘pincha 20–30 seans; aniq soni shifokor tomonidan belgilanadi.' },
      { question: 'Qaysi shifokorga murojaat qilish kerak?', answer: 'Dermatologga. Radeski Skin Clinic’da Farg‘ona va Qo‘qon filiallarida dermatologlar qabul qiladi.' },
    ],
    tags: ['Psoriaz', 'Fototerapiya', 'Daavlin', 'Dermatologiya', 'Farg‘ona', 'Qo‘qon', 'Radeski Skin Clinic'],
  },
  ru: {
    summary:
      'Как диагностируют и лечат псориаз: основные признаки, дерматоскопия и оценка тяжести, наружная терапия, фототерапия Daavlin UVB 311 нм, эксимерный лазер и иммунобиологическая терапия. Фергана и Коканд.',
    body: ruBody(),
    keyTakeaways: [
      'Псориаз не заразен и протекает хронически',
      'Диагноз обычно ставят на осмотре дерматолога с дерматоскопией',
      'При распространённом псориазе узкополосный UVB (311 нм) — один из основных методов',
      'При болях в суставах нужно исключить псориатический артрит',
    ],
    whenToSeeDoctor: [
      'Появились красные шелушащиеся пятна',
      'Пятна увеличиваются или кремы не помогают',
      'На ногтях вдавления или отслоение',
      'Болят или опухают суставы',
    ],
    faq: [
      { question: 'Заразен ли псориаз?', answer: 'Нет. Это заболевание, связанное с иммунной системой, оно не передаётся другим людям.' },
      { question: 'Можно ли вылечить псориаз полностью?', answer: 'Полностью — нет, но при правильном лечении можно добиться длительной ремиссии.' },
      { question: 'Сколько сеансов фототерапии нужно?', answer: 'Обычно 2–3 сеанса в неделю, курс чаще 20–30 сеансов; точное число определяет врач.' },
      { question: 'К какому врачу обращаться?', answer: 'К дерматологу. В Radeski Skin Clinic дерматологи принимают в Фергане и Коканде.' },
    ],
    tags: ['Псориаз', 'Фототерапия', 'Daavlin', 'Дерматология', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
  },
  en: {
    summary:
      'How psoriasis is diagnosed and treated: main signs, dermatoscopy and severity scoring, topical therapy, Daavlin narrowband UVB 311 nm, excimer laser and biologic therapy. Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Psoriasis is not contagious and is chronic',
      'Diagnosis is usually made at a dermatologist visit with dermatoscopy',
      'Narrowband UVB (311 nm) is a main option for widespread psoriasis',
      'Joint pain needs psoriatic arthritis ruled out',
    ],
    whenToSeeDoctor: ['Red scaly patches appear', 'Patches spread or creams do not help', 'Nail pitting or lifting', 'Painful or swollen joints'],
    faq: [
      { question: 'Is psoriasis contagious?', answer: 'No. It is an immune-related disease and does not pass to other people.' },
      { question: 'Can psoriasis be cured?', answer: 'Not completely, but long remission is achievable with the right treatment.' },
      { question: 'How many phototherapy sessions are needed?', answer: 'Usually 2–3 a week, often 20–30 per course; the doctor sets the exact number.' },
    ],
    tags: ['Psoriasis', 'Phototherapy', 'Daavlin', 'Dermatology', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
  },
};

export const PSORIAZ_TASHXIS_DAVOLASH_RADESKI_ARTICLE: Article = {
  id: 'art-psoriaz-tashxis-davolash-radeski',
  slug: 'psoriaz-tashxis-va-davolash-radeski',
  title: {
    uz: 'Psoriaz: belgilari, tashxisi va davolash usullari',
    ru: 'Псориаз: симптомы, диагностика и методы лечения',
    en: 'Psoriasis: Symptoms, Diagnosis and Treatment',
  },
  summary: {
    uz: PSORIAZ_TASHXIS_DAVOLASH_RADESKI_ARTICLE_CATALOG.uz.summary,
    ru: PSORIAZ_TASHXIS_DAVOLASH_RADESKI_ARTICLE_CATALOG.ru.summary,
    en: PSORIAZ_TASHXIS_DAVOLASH_RADESKI_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: PSORIAZ_TASHXIS_DAVOLASH_RADESKI_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: PSORIAZ_TASHXIS_DAVOLASH_RADESKI_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: PSORIAZ_TASHXIS_DAVOLASH_RADESKI_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Radeski Skin Clinic shifokorlari jamoasi',
    ru: 'Команда врачей Radeski Skin Clinic',
    en: 'Radeski Skin Clinic medical team',
  },
  date: '2026-10-10',
  image: COVER,
  images: { uz: COVER, ru: COVER, en: COVER },
  views: 0,
};
