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

const IMG = '/articles/tetra-pro-promo.png';

function uzBody(): string {
  return `## Xohlayman: yuz ovalini tortish, operatsiyasiz blefaroplastika

Yosh o'tishi bilan **yuz konturi pasayishi**, **ko'z qovog'i qisqarishi** va teri elastikligining kamayishi ko'pin uchraydi. Ko'p bemorlar jarrohliksiz, qisqa tiklanish bilan yechim izlaydi.

![DEKA Tetra Pro — yuz ovali va ko'z qovog'i yoshartirish](/articles/tetra-pro-promo.png)

*Radeski Skin Clinic da Tetra Pro CO₂ lazer platformasi yordamida jarrohsiz yoshartirish protokollari qo'llaniladi.*

## Bajaraman: DEKA Tetra Pro lazer yoshartirish

Radeski Skin Clinic da **DEKA Tetra Pro** — zamonaviy CO₂ lazer tizimi — yuz ovalini mustahkamlash, teri teksturasini yaxshilash va **operatsiyasiz blefaroplastika** protokollarida qo'llaniladi.

## Tetra Pro qanday ishlaydi?

CO₂ lazer terining suv molekulalariga ta'sir qilib, nazoratli mikro-zonalarni hosil qiladi. Bu jarayon **kolagen va elastin** sintezini rag'batlantiradi — teri asta-sekin qattiqroq va silliqroq bo'ladi.

Tetra Pro turli chuqurlikdagi rejimlarni beradi: yuzaki yangilanishdan chuqurroq kontur effektigacha.

## Radeski Skin Clinic da muolaja bosqichlari

### 1. Konsultatsiya va reja

Dermatolog teri holati, ajin chuqurligi, ko'z qovog'i qisqarish darajasini baholaydi. Muolaja zonasi va chuqurlik belgilanadi.

### 2. Anesteziya va tayyorgarlik

Ko'z atrofi kabi sezgir zonalar uchun mahalliy yoki qo'shimcha og'riq qoldiruvchi qo'llanilishi mumkin.

### 3. Tetra Pro seansi

Lazer applikatori bilan belgilangan zonalar ishlanadi. Ko'z qovog'i protokoli aniq va ehtiyotkor rejimda o'tkaziladi.

### 4. Tiklanish va parvarish

Qattiq teri, qizarish va qichishish bir necha kun davom etishi mumkin. Shifokor tiklanish kremi, SPF va namlik rejimini beradi.

## Necha seans kerak?

Yuzaki yoshartirish uchun **1 seans** yetishi mumkin; chuqurroq o'zgarishlar uchun **2–3 seans** yoki kombinatsiyalar tavsiya etiladi. Natija 2–3 oy ichida to'liq shakllanadi.

## Kimlar uchun mos?

- yuz ovali pasayishi;
- yuzaki va o'rta chuqurlikdagi ajinlar;
- ko'z qovog'i qisqarishi (operatsiyasiz blefaroplastika protokoli);
- teri teksturasi va elastikligi pasaygan bemorlar.

Faol infeksiya, keloid xavfi yoki ba'zi xronik kasalliklarda muolaja cheklanishi mumkin.

## Konsultatsiyaga yoziling

Jarrohliksiz yuz va ko'z qovog'i yoshartirish haqida o'ylayotgan bo'lsangiz — Radeski Skin Clinic shifokori **Tetra Pro** protokolini individual baholaydi.`;
}

function ruBody(): string {
  return `## Хочу: подтянуть овал лица и сделать безоперационную блефаропластику

С возрастом **опускается овал лица**, **сокращается кожа век**, снижается упругость. Многие ищут решение без хирургии и с коротким восстановлением.

![DEKA Tetra Pro — омоложение овала лица и век](/articles/tetra-pro-promo.png)

*В Radeski Skin Clinic протоколы безоперационного омоложения выполняются на платформе CO₂-лазера Tetra Pro.*

## Делаем: лазерное омоложение DEKA Tetra Pro

В Radeski Skin Clinic используется **DEKA Tetra Pro** — современная CO₂-лазерная система для укрепления овала лица, улучшения текстуры и **безоперационной блефаропластики**.

## Как работает Tetra Pro?

CO₂-лазер воздействует на молекулы воды в коже, создавая контролируемые микрозоны. Это стимулирует синтез **коллагена и эластина** — кожа постепенно становится плотнее и глаже.

Tetra Pro позволяет выбирать режимы разной глубины — от поверхностного обновления до более выраженного лifting-эффекта.

## Этапы процедуры в Radeski Skin Clinic

### 1. Консультация и план

Дерматолог оценивает состояние кожи, глубину морщин, степень нависания век. Определяются зона и глубина воздействия.

### 2. Анестезия и подготовка

Для чувствительных зон, включая область глаз, может применяться местная или дополнительная анестезия.

### 3. Сеанс Tetra Pro

Обработка выбранных зон лазерным аппликатором. Протокол век выполняется в щадящем точном режиме.

### 4. Восстановление и уход

Стянутость, покраснение и зуд возможны несколько дней. Врач назначает средства восстановления, SPF и увлажнение.

## Сколько сеансов нужно?

Для поверхностного омоложения может хватить **1 сеанса**; для более глубоких изменений — **2–3** или комбинации. Полный эффект формируется за 2–3 месяца.

## Кому подходит?

- снижение овала лица;
- мелкие и средние морщины;
- нависание век (безоперационная блефаропластика);
- снижение упругости и текстуры.

При активной инфекции, риске келоидов или некоторых хронических состояниях процедура может быть ограничена.

## Запишитесь на консультацию

Если вас интересует безоперационное омоложение лица и век — врач Radeski Skin Clinic индивидуально оценит протокол **Tetra Pro**.`;
}

function enBody(): string {
  return `## I want: a tighter facial contour and non-surgical blepharoplasty

With age, the **facial oval softens**, **eyelid skin laxity** increases, and elasticity declines. Many patients want improvement without surgery and with a manageable recovery.

![DEKA Tetra Pro — facial contour and eyelid rejuvenation](/articles/tetra-pro-promo.png)

*At Radeski Skin Clinic non-surgical rejuvenation protocols use the DEKA Tetra Pro CO₂ laser platform.*

## We deliver: DEKA Tetra Pro laser rejuvenation

Radeski Skin Clinic uses **DEKA Tetra Pro** — a modern CO₂ laser for strengthening the facial oval, improving texture, and **non-surgical blepharoplasty** protocols.

## How Tetra Pro works

The CO₂ laser interacts with water molecules in skin, creating controlled micro-zones. This stimulates **collagen and elastin** — skin gradually becomes firmer and smoother.

Tetra Pro offers modes at different depths, from superficial renewal to a more noticeable lifting effect.

## Treatment steps at Radeski Skin Clinic

### 1. Consultation and plan

The dermatologist assesses skin condition, wrinkle depth, and eyelid laxity. Treatment zone and depth are defined.

### 2. Anesthesia and preparation

Sensitive areas, including the eye region, may receive local or additional anesthesia.

### 3. Tetra Pro session

Selected zones are treated with the laser applicator. Eyelid protocols use precise, conservative settings.

### 4. Recovery and aftercare

Tightness, redness, and itching may last several days. The physician provides recovery creams, SPF, and hydration guidance.

## How many sessions?

Superficial rejuvenation may need **one session**; deeper changes may require **2–3** or combinations. Full results develop over 2–3 months.

## Who is it for?

- loss of facial contour;
- fine to moderate wrinkles;
- eyelid laxity (non-surgical blepharoplasty protocol);
- reduced elasticity and texture.

Active infection, keloid risk, or certain chronic conditions may limit treatment.

## Book a consultation

If you are considering non-surgical facial and eyelid rejuvenation, a Radeski Skin Clinic physician will individually assess a **Tetra Pro** protocol for you.`;
}

export const TETRA_PRO_LIFTING_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Yuz ovalini tortish va operatsiyasiz blefaroplastika: DEKA Tetra Pro CO₂ lazer protokoli, bosqichlar va tiklanish — Radeski Skin Clinic.',
    body: uzBody(),
    keyTakeaways: [
      'Tetra Pro CO₂ lazer kolagen sintezini rag\'batlantiradi',
      'Ko\'z qovog\'i protokoli ehtiyotkor rejimda o\'tkaziladi',
      'Tiklanish bir necha kun, natija 2–3 oy ichida shakllanadi',
      'Chuqurlik va zona shifokor tomonidan belgilanadi',
      'Jarrohliksiz yondashuv — lekin konsultatsiya shart',
    ],
    tags: ['Tetra Pro', 'DEKA', 'CO2 lazer', 'Blefaroplastika', 'Yuz ovali', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Ko\'z atrofida og\'riq yoki ko\'rish o\'zgarishi bo\'lsa',
      'Keloid yoki faol herpes tarixi bo\'lsa',
      'Teri infeksiyasi yoki ochiq yaralar bo\'lsa',
      'Homiladorlik yoki faol autoimmun kasallik bo\'lsa',
    ],
    faq: [
      { question: 'Operatsiyadan farqi nima?', answer: 'Tetra Pro jarrohlik emas — lazer orqali nazoratli teri yangilanishi. Chuqur ortiqcha teri bo\'lsa, shifokor boshqa variantni muhokama qiladi.' },
      { question: 'Qancha vaqt tiklanaman?', answer: 'Odatda 3–7 kun faol tiklanish, keyin asta-sekin yaxshilanish.' },
      { question: 'Ko\'z qovog\'i xavfsizmi?', answer: 'Ha, lekin faqat tajribali mutaxassis va maxsus protokol bilan.' },
    ],
  },
  ru: {
    summary:
      'Подтяжка овала лица и безоперационная блефаропластика: протокол CO₂-лазера DEKA Tetra Pro, этапы и восстановление — Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'Tetra Pro CO₂-лазер стимулирует синтез коллагена',
      'Протокол век выполняется в щадящем режиме',
      'Восстановление несколько дней, эффект за 2–3 месяца',
      'Глубину и зону определяет врач',
      'Безоперационный подход — но консультация обязательна',
    ],
    tags: ['Tetra Pro', 'DEKA', 'CO2 лазер', 'Блефаропластика', 'Овал лица', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Боль или изменение зрения в области глаз',
      'Кeloиды или частый herpes',
      'Инфекция кожи или открытые раны',
      'Беременность или активное аутоиммунное заболевание',
    ],
    faq: [
      { question: 'Чем отличается от операции?', answer: 'Tetra Pro — не хирургия, а контролируемое лазерное обновление. При выраженном избытке кожи врач обсудит другие варианты.' },
      { question: 'Сколько длится восстановление?', answer: 'Обычно 3–7 дней активного восстановления, затем постепенное улучшение.' },
      { question: 'Безопасно ли для век?', answer: 'Да, при опытном специалисте и специальном протоколе.' },
    ],
  },
  en: {
    summary:
      'Facial contour tightening and non-surgical blepharoplasty: DEKA Tetra Pro CO₂ laser protocol, steps, and recovery at Radeski Skin Clinic.',
    body: enBody(),
    keyTakeaways: [
      'Tetra Pro CO₂ laser stimulates collagen synthesis',
      'Eyelid protocols use conservative settings',
      'Recovery takes days; results develop over 2–3 months',
      'Depth and zone are physician-defined',
      'Non-surgical approach still requires consultation',
    ],
    tags: ['Tetra Pro', 'DEKA', 'CO2 laser', 'Blepharoplasty', 'Facial contour', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Eye-area pain or vision changes',
      'Keloid or frequent herpes history',
      'Skin infection or open wounds',
      'Pregnancy or active autoimmune disease',
    ],
    faq: [
      { question: 'How is it different from surgery?', answer: 'Tetra Pro is controlled laser renewal, not surgery. Significant excess skin may need other options.' },
      { question: 'How long is recovery?', answer: 'Usually 3–7 days of active recovery, then gradual improvement.' },
      { question: 'Is the eyelid area safe?', answer: 'Yes, with an experienced specialist and dedicated protocol.' },
    ],
  },
};

export const TETRA_PRO_LIFTING_ARTICLE: Article = {
  id: 'art-tetra-pro-yuz-tortish-radeski',
  slug: 'tetra-pro-yuz-tortish-radeski',
  title: {
    uz: 'Tetra Pro bilan yuz ovali va ko\'z qovog\'i yoshartirish — Radeski Skin Clinic',
    ru: 'Омоложение овала лица и век на Tetra Pro — Radeski Skin Clinic',
    en: 'Facial Contour & Eyelid Rejuvenation with Tetra Pro — Radeski Skin Clinic',
  },
  summary: {
    uz: TETRA_PRO_LIFTING_ARTICLE_CATALOG.uz.summary,
    ru: TETRA_PRO_LIFTING_ARTICLE_CATALOG.ru.summary,
    en: TETRA_PRO_LIFTING_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: TETRA_PRO_LIFTING_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: TETRA_PRO_LIFTING_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: TETRA_PRO_LIFTING_ARTICLE_CATALOG.en.body.slice(0, 500),
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
