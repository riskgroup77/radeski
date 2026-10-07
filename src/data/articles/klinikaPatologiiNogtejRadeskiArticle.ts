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

const COVER = '/karusel/podologiya.jpg';

function uzBody(): string {
  return `## Tirnoq patologiyalari va oyoq markazi

**Podolog (podiater)** Radeski Skin & Aesthetic Clinic da dermatologiya va jarrohlikning kesishmasida ishlaydi: **oyoq va tirnoq kasalliklari**, profilaktika va **tirnoq plastinasini korreksiya qilish**.

Sog'lom oyoq — umumiy salomatlik ko'rsatkichi. Qon tomir va endokrin kasalliklar ko'pincha oyoq holatiga ta'sir qiladi.

![Tirnoq patologiyalari markazi — Radeski Skin Clinic](${COVER})

## Podolog nima qiladi?

**Podologiya (tibbiy pedikyur)** — oyoq terisi va tirnoqlarni tibbiy usulda davolash. Kosmetik pedikyurdan farqli o'laroq, maqsad — estetika emas, **tashxis va davolash**.

Konsultatsiya davomida mutaxassis tashqi belgilarni bartaraf etadi va ichki sabablarni aniqlaydi. **Apparatli tibbiy pedikyur** — teri va tirnoq parvarishining to'liq kompleksi.

**Radeski Skin & Aesthetic Clinic** da podolog konsultatsiyasi **bepul**.

## Qabul nimalarni o'z ichiga oladi?

- bemor bilan maslahat;
- diagnostik ko'rik;
- individual dastur;
- qo'shimcha tekshiruvlar (kerak bo'lsa);
- muammoli oyoqlarni ishlov;
- uy parvarishi uchun dori va vositalar tavsiyasi.

Oyoq muammolarini **erta bosqichda** davolash eng samarali. Klinikada tajribali podolog zamonaviy apparatura va sifatli preparatlar qo'llaydi — muolaja xavfsiz va og'riqsiz.

## Tibbiy pedikyurning afzalliklari

- muolajadan keyin ochiq barmoqli poyabzal kiyish mumkin;
- tirnoqlar estetik ko'rinishga ega bo'ladi;
- teri shikastlanish xavfi minimal;
- **davolovchi**, **estetik** va **psixologik** effekt bir vaqtda.

## Onixokriptoz (o'sib ketgan tirnoq)

Tirnoq cheti yumshoq to'qimalarga kirib, og'riq va yallig'lanish keltiradi. Ilgari ko'p hollarda faqat operatsiya yechim edi.

Hozir **operatsiyasiz** usullar mavjud:

### Frezer skobasi

67 yildan beri qo'llaniladigan **universal korrektirlovchi skoba**. Har bir tirnoq uchun **individual** yasaladi — Radeski klinikasida o'rnatiladi.

### Podofix

Zamonaviy, **og'riqsiz**, operatsiyasiz usul. Moslashuvchan plastinka tirnoqqa biriktiriladi, kundalik hayotda qulay.

Bog'liq xizmatlar: [Tirnoq patologiyalari markazi](/uz/services/clinika-patologii-nogtej), [Podolog-dermatolog](/uz/services/clinika-patologii-nogtej/podolog-dermatolog), [Narxlar](/uz/prices).`;
}

function ruBody(): string {
  return `## Клиника патологии ногтей и стоп

**Врач-подолог (подиатр)** в Radeski Skin & Aesthetic Clinic работает на стыке **дерматологии и хирургии**: лечение заболеваний стоп, профилактика и **коррекция ногтевой пластины**.

Здоровые ступни — показатель общего здоровья. Сосудистые и эндокринные заболевания часто отражаются на состоянии ног.

![Клиника патологии ногтей — Radeski Skin Clinic](${COVER})

## Чем занимается подолог?

**Подология (медицинский педикюр)** — лечение кожи и ногтей стоп. В отличие от косметического педикюра, цель — не эстетика, а **диагностика и терапия**.

При осмотре врач устраняет внешние проявления и выявляет внутренние причины. **Аппаратный медицинский педикюр** — комплексный уход.

**Консультация подолога в Radeski Skin & Aesthetic Clinic — бесплатно.**

## Что включает приём?

- консультация;
- диагностический осмотр;
- подбор программы;
- дополнительные обследования;
- обработка проблемных стоп;
- рекомендации по уходу и препаратам.

Любую проблему стоп лучше лечить **на ранней стадии**. Процедуры безопасны и практически безболезненны.

## Преимущества медицинского педикюра

- можно надеть открытую обувь после процедуры;
- эстетичный вид ногтей;
- минимальный риск травмы кожи;
- **лечебный**, **косметический** и **психологический** эффект.

## Онихокриптоз (вросший ноготь)

Край пластины врастает в мягкие ткани, вызывая боль. Раньше часто требовалась операция.

Сегодня возможны **безоперационные** методы:

### Скоба Фрезера

Универсальная корректирующая система более **67 лет**. Изготавливается **индивидуально** — установка в клинике Radeski.

### Podofix

Современный **безболезненный** метод. Гибкие пластины фиксируются на ногте без дискомфорта.

Связанные услуги: [Клиника патологии ногтей](/ru/services/clinika-patologii-nogtej), [Подолог-дерматолог](/ru/services/clinika-patologii-nogtej/podolog-dermatolog), [Цены](/ru/prices).`;
}

function enBody(): string {
  return `## Nail and Foot Pathology Clinic

A **podiatrist** at Radeski Skin & Aesthetic Clinic works at the intersection of **dermatology and surgery**: foot diseases, prevention, and **nail plate correction**.

Healthy feet reflect overall health. Vascular and endocrine conditions often affect the feet.

![Nail pathology clinic — Radeski Skin Clinic](${COVER})

## What does a podiatrist do?

**Podiatry (medical pedicure)** treats skin and toenails. Unlike cosmetic pedicure, the goal is **diagnosis and treatment**, not aesthetics alone.

The physician addresses visible signs and identifies underlying causes. **Device-based medical pedicure** is a full care protocol.

**Podiatrist consultation at Radeski Skin & Aesthetic Clinic is free.**

## The visit includes

- consultation;
- diagnostic examination;
- individualized program;
- additional tests if needed;
- treatment of problem areas;
- home care and product recommendations.

Foot problems respond best **when treated early**. Procedures are safe and largely painless.

## Benefits of medical pedicure

- open-toe shoes after treatment;
- improved nail appearance;
- minimal skin injury risk;
- **therapeutic**, **cosmetic**, and **psychological** benefits.

## Onychocryptosis (ingrown nail)

The nail edge grows into soft tissue, causing pain. Surgery was once the main option.

Today **non-surgical** methods include:

### Freer brace

A **custom** corrective brace used for decades — placed at Radeski Clinic.

### Podofix

Modern **painless** correction with flexible plates on the nail.

Related services: [Nail pathology clinic](/en/services/clinika-patologii-nogtej), [Podiatrist](/en/services/clinika-patologii-nogtej/podolog-dermatolog), [Prices](/en/prices).`;
}

export const KLINIKA_PATOLOGII_NOGTEJ_RADESKI_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Tirnoq va oyoq patologiyalari: podolog, tibbiy pedikyur, Frezer va Podofix — Radeski Skin Clinic.',
    body: uzBody(),
    keyTakeaways: [
      'Podolog oyoq va tirnoq kasalliklarini tibbiy usulda davolaydi',
      'Tibbiy pedikyur kosmetik pedikyurdan davolash maqsadida farq qiladi',
      'Onixokriptozda operatsiyasiz Frezer va Podofix mumkin',
      'Konsultatsiya Radeski klinikasida bepul',
      'Muammoni erta bosqichda davolash eng samarali',
    ],
    tags: ['Podologiya', 'Tirnoq patologiyasi', 'Onixokriptoz', 'Podofix', 'Frezera skobasi', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Tirnoq o\'sib ketganda yoki og\'riq bo\'lsa',
      'Tirnoq qalinlashgan, rangi o\'zgarganda',
      'Oyoq terisi qattiq parchalanayotganda',
      'Qon tomir yoki diabet bilan oyoq muammolari bo\'lsa',
    ],
    faq: [
      {
        question: 'Podolog va kosmetik master farqi nima?',
        answer:
          'Podolog tibbiy tashxis va davolash qiladi; kosmetik pedikyur asosan ko\'rinishga qaratilgan.',
      },
      {
        question: 'Podofix qancha vaqt kiyiladi?',
        answer:
          'Individual; shifokor tirnoq shakli va dinamikaga qarab kuzatuv va almashtirish rejasini belgilaydi.',
      },
      {
        question: 'Muolajadan keyin sport qilish mumkinmi?',
        answer:
          'Odatda yengil faoliyat mumkin; og\'ir yuk va tor poyabzal haqida podolog maslahat beradi.',
      },
    ],
  },
  ru: {
    summary:
      'Патология ногтей и стоп: подолог, медицинский педикюр, Фрезер и Podofix — Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'Подолог лечит заболевания стоп и ногтей медицинскими методами',
      'Медицинский педикюр отличается от косметического целями лечения',
      'При онихокриптозе возможны Фрезер и Podofix без операции',
      'Консультация в Radeski — бесплатно',
      'Раннее лечение наиболее эффективно',
    ],
    tags: ['Подология', 'Патология ногтей', 'Онихокриптоз', 'Podofix', 'Скоба Фрезера', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Вросший или болезненный ноготь',
      'Утолщение или изменение цвета ногтя',
      'Сильное шелушение кожи стоп',
      'Проблемы стоп при диабете или сосудистых заболеваниях',
    ],
    faq: [
      {
        question: 'Чем подолог отличается от мастера педикюра?',
        answer:
          'Подолог ставит диагноз и лечит; косметический педикюр в основном про внешний вид.',
      },
      {
        question: 'Сколько носят Podofix?',
        answer:
          'Индивидуально; врач назначает контроль и замену по динамике.',
      },
      {
        question: 'Можно ли заниматься спортом после процедуры?',
        answer:
          'Обычно лёгкая активность допустима; о нагрузках и обуви советует подолог.',
      },
    ],
  },
  en: {
    summary:
      'Nail and foot pathology: podiatrist, medical pedicure, Freer brace and Podofix — Radeski Skin Clinic.',
    body: enBody(),
    keyTakeaways: [
      'Podiatrists treat foot and nail disease medically',
      'Medical pedicure focuses on treatment, not cosmetics alone',
      'Ingrown nails may be corrected with Freer or Podofix without surgery',
      'Consultation at Radeski is free',
      'Early treatment works best',
    ],
    tags: ['Podiatry', 'Nail pathology', 'Ingrown nail', 'Podofix', 'Freer brace', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Ingrown or painful toenail',
      'Thickened or discolored nail',
      'Severe foot skin scaling',
      'Foot problems with diabetes or vascular disease',
    ],
    faq: [
      {
        question: 'Podiatrist vs cosmetic pedicurist?',
        answer:
          'A podiatrist diagnoses and treats; cosmetic pedicure is mainly aesthetic.',
      },
      {
        question: 'How long is Podofix worn?',
        answer:
          'Individual schedule; your podiatrist plans follow-up and replacement.',
      },
      {
        question: 'Exercise after treatment?',
        answer:
          'Light activity is usually fine; ask your podiatrist about shoes and load.',
      },
    ],
  },
};

export const KLINIKA_PATOLOGII_NOGTEJ_RADESKI_ARTICLE: Article = {
  id: 'art-klinika-patologii-nogtej-stopy-radeski',
  slug: 'klinika-patologii-nogtej-stopy-radeski',
  title: {
    uz: 'Tirnoq patologiyalari va oyoq markazi: podolog',
    ru: 'Клиника патологии ногтей и стоп',
    en: 'Nail and Foot Pathology Clinic',
  },
  summary: {
    uz: KLINIKA_PATOLOGII_NOGTEJ_RADESKI_ARTICLE_CATALOG.uz.summary,
    ru: KLINIKA_PATOLOGII_NOGTEJ_RADESKI_ARTICLE_CATALOG.ru.summary,
    en: KLINIKA_PATOLOGII_NOGTEJ_RADESKI_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: KLINIKA_PATOLOGII_NOGTEJ_RADESKI_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: KLINIKA_PATOLOGII_NOGTEJ_RADESKI_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: KLINIKA_PATOLOGII_NOGTEJ_RADESKI_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: { uz: 'Radeski Skin Clinic', ru: 'Radeski Skin Clinic', en: 'Radeski Skin Clinic' },
  date: '2026-09-24',
  image: COVER,
  images: { uz: COVER, ru: COVER, en: COVER },
  views: 0,
};
