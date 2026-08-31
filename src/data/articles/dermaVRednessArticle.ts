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

const IMG = '/articles/derma-v-promo.png';

function uzBody(): string {
  return `## Xohlayman: qon tomir to'rchasidan, kuperoz va doimiy qizarishdan xalos bo'lish

Yuzdagi **qizil «yulduzchalar»**, kengaygan kapillyarlar, **kuperoz** va doimiy qizarish ko'pchilikni bezovta qiladi. Bu belgilar yosh, quyosh, sezgir teri yoki rozatseya fonida yanada ko'rinadi.

![Lutronic Derma V — qon tomir va qizarish davolash](/articles/derma-v-promo.png)

*Radeski Skin Clinic da Derma V lazer tizimi yordamida tomirli o'zgarishlar bilan ishlaymiz.*

## Bajaraman: Lutronic Derma V lazer davolash

Radeski Skin Clinic da tomir muammolari uchun **Lutronic Derma V** qo'llaniladi. Bu **532 nm** va **1064 nm** to'lqin uzunliklarida ishlaydigan vaskulyar lazer: tomir ichidagi qon tanlab yutiladi, kapillyar asta-sekin kamayadi.

## Derma V qanday ishlaydi?

Lazer energiyasi qon tomir ichidagi gemoglabinga ta'sir qiladi. Tomir qisqa vaqt ichida koagulyatsiyadan o'tadi, keyin organizm uni sekin-sekin «yutadi». Atrofdagi teri sovutish tizimi bilan himoya qilinadi.

## Radeski Skin Clinic da muolaja bosqichlari

### 1. Konsultatsiya

Dermatolog tomirlar xaritasini, qizarish darajasini va rozatseya belgilarini baholaydi.

### 2. Parametrlarni tanlash

Tomir chuqurligi va diametriga qarab 532 yoki 1064 nm rejimi tanlanadi.

### 3. Lazer seansi

Derma V applikatori bilan muammoli zonalar ishlanadi. Davomiyligi odatda 15–25 daqiqa.

### 4. Tiklanish va parvarish

Yengil qizarish bir necha kun davom etishi mumkin. SPF va shifokor tavsiyalariga rioya qilish muhim.

## Necha seans kerak?

Yuzaki tomirlar uchun **1–3 seans**, keng tarqalgan tomir to'ri uchun **3–6 seans** talab qilinishi mumkin. Oraliq 3–4 hafta.

## Kimlar uchun mos?

- teleangiektaziyalar (tomir «yulduzchalari»);
- kuperoz;
- yuz qizarishi;
- rozatseya fonidagi tomir belgilari.

Rozatseya xronik kasallik — lazer alohida emas, kompleks rejimning bir qismi.

## Konsultatsiyaga yoziling

Doimiy qizarish va tomir to'ri faqat makiyaj bilan yashirilmaydi. Radeski Skin Clinic shifokori **Derma V** yoki IPL bilan mos yondashuvni tanlaydi.`;
}

function ruBody(): string {
  return `## Хочу: избавиться от сосудистой сеточки, купероза и постоянного покраснения

**Красные «звёздочки»**, расширенные капилляры, **купероз** и стойкое покраснение лица — частая жалоба. С возрастом, после солнца, при чувствительной коже или на фоне розацеа эти проявления заметнее.

![Lutronic Derma V — лечение сосудов и покраснения](/articles/derma-v-promo.png)

*В Radeski Skin Clinic мы работаем с сосудистыми изменениями на лазере Derma V.*

## Делаем: лазерное лечение Lutronic Derma V

Для сосудистых проблем в Radeski Skin Clinic используется **Lutronic Derma V** — сосудистый лазер с длинами волн **532 нм** и **1064 нм**. Энергия избирательно поглощается гемоглобином, капилляры постепенно исчезают.

## Как работает Derma V?

Лазерная энергия воздействует на гемоглобин внутри сосуда. Сосуд коагулируется и затем постепенно рассасывается. Окружающая кожа защищается системой охлаждения.

## Этапы процедуры в Radeski Skin Clinic

### 1. Консультация

Дерматолог оценивает «карту» сосудов, степень покраснения и признаки розацеа.

### 2. Подбор параметров

В зависимости от глубины и диаметра сосудов выбирается режим 532 или 1064 нм.

### 3. Лазерный сеанс

Проблемные зоны обрабатываются аппликатором Derma V. Обычно 15–25 минут.

### 4. Восстановление и уход

Лёгкое покраснение возможно несколько дней. Важны SPF и рекомендации врача.

## Сколько сеансов нужно?

Для поверхностных сосудов — **1–3 сеанса**, для выраженной сеточки — **3–6**. Интервал 3–4 недели.

## Кому подходит?

- телеангиэктазии («звёздочки»);
- кuperоз;
- покраснение лица;
- сосудистые проявления на фоне розацеа.

Розацеа — хроническое заболевание; лазер — часть комплексного плана, а не единственное решение.

## Запишитесь на консультацию

Стойкое покраснение не обязательно скрывать только макияжем. Врач Radeski Skin Clinic подберёт **Derma V** или IPL по показаниям.`;
}

function enBody(): string {
  return `## I want: freedom from spider veins, couperose, and constant redness

**Red facial "stars"**, dilated capillaries, **couperose**, and persistent flushing bother many patients. They become more visible with age, sun exposure, sensitive skin, or rosacea.

![Lutronic Derma V — vascular and redness treatment](/articles/derma-v-promo.png)

*At Radeski Skin Clinic we treat vascular changes with the Derma V laser system.*

## We deliver: Lutronic Derma V laser care

For vascular concerns Radeski Skin Clinic uses **Lutronic Derma V** — a vascular laser at **532 nm** and **1064 nm**. Energy is selectively absorbed by hemoglobin; capillaries gradually fade.

## How Derma V works

Laser energy targets hemoglobin inside the vessel. The vessel coagulates and is slowly cleared by the body. Integrated cooling protects surrounding skin.

## Treatment steps at Radeski Skin Clinic

### 1. Consultation

The dermatologist maps vessels, assesses redness, and checks for rosacea signs.

### 2. Parameter selection

532 or 1064 nm mode is chosen based on vessel depth and diameter.

### 3. Laser session

Target zones are treated with the Derma V applicator. Usually 15–25 minutes.

### 4. Recovery and aftercare

Mild redness may last a few days. SPF and physician guidance are essential.

## How many sessions?

Surface vessels often need **1–3 sessions**; a pronounced network may require **3–6**, spaced 3–4 weeks apart.

## Who is it for?

- telangiectasias (spider veins);
- couperose;
- facial redness;
- vascular signs with rosacea.

Rosacea is chronic — laser is one part of a broader plan.

## Book a consultation

Persistent redness is not something you must hide with makeup alone. A Radeski Skin Clinic physician will recommend **Derma V** or IPL when appropriate.`;
}

export const DERMA_V_REDNESS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Qon tomir to\'ri, kuperoz va doimiy qizarishni Lutronic Derma V lazer bilan qanday davolash mumkin: bosqichlar, seanslar va Radeski Skin Clinic tajribasi.',
    body: uzBody(),
    keyTakeaways: [
      'Derma V 532 va 1064 nm bilan tomirlarga tanlab ta\'sir qiladi',
      'Sovutish tizimi muolajani qulayroq qiladi',
      'Rozatseya bilan kompleks rejim kerak bo\'lishi mumkin',
      'Seanslar soni tomir tarqalishiga bog\'liq',
      'Dermatolog konsultatsiyasi majburiy',
    ],
    tags: ['Derma V', 'Lutronic', 'Kuperoz', 'Tomir to\'ri', 'Radeski Skin Clinic', 'Vaskulyar lazer'],
    whenToSeeDoctor: [
      'Qizarish tez kuchaysa',
      'Tomir atrofida og\'riq yoki yara bo\'lsa',
      'Rozatseya belgilari kuchaysa',
      'Yangi tomir tez paydo bo\'lsa',
    ],
    faq: [
      { question: 'Bir seansda ham natija bo\'ladimi?', answer: 'Yuzaki tomirlarda yengillashish tez sezilishi mumkin, kurs ko\'pincha tavsiya etiladi.' },
      { question: 'Qizarish qaytadimi?', answer: 'Mavjud tomirlar kamayadi, lekin rozatseya fonida yangi belgilar paydo bo\'lishi mumkin — nazorat kerak.' },
      { question: 'IPL dan farqi nima?', answer: 'Derma V lazer aniqroq tomirga yo\'naltirilgan; shifokor holatga qarab usul tanlaydi.' },
    ],
  },
  ru: {
    summary:
      'Как лечить сосудистую сеточку, кuperoz и постоянное покраснение лазером Lutronic Derma V: этапы, число сеансов и опыт Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'Derma V работает на 532 и 1064 нм избирательно на сосуды',
      'Система охлаждения повышает комфорт',
      'При розацеа может понадобиться комплексный план',
      'Число сеансов зависит от распространённости сосудов',
      'Консультация дерматолога обязательна',
    ],
    tags: ['Derma V', 'Lutronic', 'Кuperoz', 'Сосудистая сеточка', 'Radeski Skin Clinic', 'Сосудистый лазер'],
    whenToSeeDoctor: [
      'Покраснение быстро усиливается',
      'Боль или язва вокруг сосуда',
      'Усиливаются признаки розацеа',
      'Быстро появляются новые сосуды',
    ],
    faq: [
      { question: 'Будет ли результат после одного сеанса?', answer: 'При поверхностных сосудах улучшение может быть заметно быстро, но часто нужен курс.' },
      { question: 'Вернётся ли покраснение?', answer: 'Существующие сосуды уменьшаются, но на фоне розацеа новые проявления возможны — нужен контроль.' },
      { question: 'Чем отличается от IPL?', answer: 'Derma V — более точечное лазерное воздействие на сосуды; врач выбирает метод по показаниям.' },
    ],
  },
  en: {
    summary:
      'How Lutronic Derma V treats spider veins, couperose, and persistent facial redness: steps, session count, and Radeski Skin Clinic experience.',
    body: enBody(),
    keyTakeaways: [
      'Derma V uses 532 and 1064 nm for selective vascular targeting',
      'Cooling improves treatment comfort',
      'Rosacea may require a broader care plan',
      'Session count depends on vessel extent',
      'Dermatology consultation is required',
    ],
    tags: ['Derma V', 'Lutronic', 'Couperose', 'Spider veins', 'Radeski Skin Clinic', 'Vascular laser'],
    whenToSeeDoctor: [
      'Redness worsens quickly',
      'Pain or sore around a vessel',
      'Rosacea signs intensify',
      'New vessels appear rapidly',
    ],
    faq: [
      { question: 'Can one session help?', answer: 'Superficial vessels may improve early, but a course is often recommended.' },
      { question: 'Will redness return?', answer: 'Existing vessels fade, but new signs can appear with rosacea — follow-up matters.' },
      { question: 'How is it different from IPL?', answer: 'Derma V is more targeted laser action on vessels; the physician chooses by indication.' },
    ],
  },
};

export const DERMA_V_REDNESS_ARTICLE: Article = {
  id: 'art-derma-v-qizarish-radeski',
  slug: 'derma-v-qizarish-radeski',
  title: {
    uz: 'Derma V bilan qon tomir va qizarish davolash — Radeski Skin Clinic',
    ru: 'Лечение сосудов и покраснения лазером Derma V — Radeski Skin Clinic',
    en: 'Vascular Redness Treatment with Derma V — Radeski Skin Clinic',
  },
  summary: {
    uz: DERMA_V_REDNESS_ARTICLE_CATALOG.uz.summary,
    ru: DERMA_V_REDNESS_ARTICLE_CATALOG.ru.summary,
    en: DERMA_V_REDNESS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: DERMA_V_REDNESS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: DERMA_V_REDNESS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: DERMA_V_REDNESS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-08-31',
  image: IMG,
  images: { uz: IMG, ru: IMG, en: IMG },
  views: 0,
};
