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

const COVER = '/articles/lazer-epilyatsiya-samara-cover.png';
const IMG1 = '/articles/lazer-epilyatsiya-xato-1-yulib-tashlash.png';
const IMG2 = '/articles/lazer-epilyatsiya-xato-2-grafik.png';
const IMG3 = '/articles/lazer-epilyatsiya-xato-3-kursni-tashlab.png';

function uzBody(): string {
  return `## Nima uchun lazer epilyatsiyasi «samara bermayapti» deb o'ylaysiz?

Ko'p bemorlar bir necha seansdan keyin natija kutilganidek emasligini aytadilar. Bu holat ko'pincha **«yomon lazer»** bilan emas, balki kurs davomida qo'yiladigan **odatiy xatolar** bilan bog'liq.

Radeski Skin Clinic da **DEKA MOVEO** aleksandrit lazerida epilyatsiya tibbiy protokol bo'yicha o'tkaziladi. Qoidalarga rioya qilsangiz, keraksiz tuklardan uzoq vaqt xalos bo'lishingiz mumkin.

![Nima uchun lazer epilyatsiyasi samara bermaydi — Radeski Skin Clinic](${COVER})

*Endi siz lazer epilyatsiyasi nima uchun «samara bermasligi» sababini bilasiz: muammo ko'pincha pasiyent tomonidagi xatolarda.*

## Jarayon: 3 ta eng keng tarqalgan xato

Quyidagi bosqichlar ko'pchilik bemorlar duch keladigan xatolarni tartib bilan tushuntiradi. Har bir xato alohida natijani pasaytiradi.

---

### Bosqich 1 — 1-XATO: Sochni yulib tashlash

![1-xato: shugaring, vosk va pinset — lazer epilyatsiyasi](${IMG1})

**Xato:** seanslar oralig'ida shugaring, vosk yoki pinset bilan tukni ildizi bilan olib tashlash.

**Nima bo'ladi:** lazer energiyasi **folikula** — soch piyozchasi — ga ta'sir qiladi. Piyozcha yulib olinganda lazer uchun nishon qolmaydi.

**To'g'ri yo'l:** seanslar orasida **faqat britva (ustara)**. Tuk ustida qolishi kerak — lazer aynan folikulani ko'radi.

---

### Bosqich 2 — 2-XATO: Oraliq vaqtlarni buzish

![2-xato: seanslar grafikini buzish — lazer epilyatsiyasi](${IMG2})

**Xato:** rejalashtirilgan seanslarni qoldirish yoki faqat vaqt bo'lganda kelish.

**Nima bo'ladi:** lazer faqat sochning **faol o'sish fazasidagi** tuklarini yo'q qiladi. Grafik aynan shu siklga qarab belgilanadi. Tashrifni kechiktirsangiz, faol fazani o'tkazib yuborasiz — natija ortga qaytadi.

**To'g'ri yo'l:** shifokor belgilagan **oralig'ga qat'iy amal qiling**. Odatda zona va tuk turiga qarab 4–6 hafta oralig'i tavsiya etiladi.

---

### Bosqich 3 — 3-XATO: Kursni oxirigacha yetkazmasdan to'xtatish

![3-xato: kursni oxirigacha tugatmaslik — lazer epilyatsiyasi](${IMG3})

**Xato:** tuklar sezilarli kamaygach, kelishni to'xtatish.

**Nima bo'ladi:** 3–4-seansdagi silliq effekt **aldovchi** bo'lishi mumkin. «Uxlab yotgan» folikulalardan to'liq xalos bo'lish va natijani yillar davomida saqlash uchun **butun kursni** tugatish kerak.

**To'g'ri yo'l:** odatda **6–8 seans** (zona va tuk xususiyatiga qarab); shifokor qo'shimcha qo'llab-quvvatlovchi seanslar kerakligini aytishi mumkin.

---

## Xulosa: natija qoidalarga bog'liq

😉 Endi siz lazer epilyatsiyasi nima uchun «samara bermasligi» sababini bilasiz!

Muammo «yomon» lazerda emas, balki pasiyentlar tomonidan tez-tez yo'l qo'yiladigan xatolarda.

Bizning klinikaga lazer epilyatsiyasiga yozilib, barcha qoidalarga amal qilsangiz, keraksiz tuklardan uzoq vaqtga xalos bo'lasiz!

## Radeski Skin Clinic da keyingi qadam

1. **Konsultatsiya** — zona, teri fototipi va tuk xususiyati baholanadi.
2. **Individual grafik** — seanslar oralig'i va kurs uzunligi belgilanadi.
3. **DEKA MOVEO** aleksandrit lazer — zamonaviy, qulay va samarali protokol.
4. **Kuzatuv** — parvarish va keyingi tashriflar rejalashtiriladi.

Qo'shimcha ma'lumot: [DEKA Moveo epilyatsiyaga tayyorgarlik](/uz/articles/art-deka-moveo-epilyatsiya-tayyorgarlik) va [lazer epilyatsiya xizmati](/uz/promo/lazer-epilyatsiya).

## Qabulga yoziling

Farg'ona va Qo'qon filiallarida lazer epilyatsiyasi bo'yicha mutaxassis ko'rigi va individual reja — Radeski Skin Clinic.`;
}

function ruBody(): string {
  return `## Почему кажется, что лазерная эпиляция «не работает»?

Многие пациенты говорят, что после нескольких сеансов результат слабее ожиданий. Чаще всего дело не в «плохом лазере», а в **типичных ошибках** во время курса.

В Radeski Skin Clinic эпиляция на александритовом лазере **DEKA MOVEO** проводится по медицинскому протоколу. Если соблюдать правила, можно надолго избавиться от нежелательных волос.

![Почему лазерная эпиляция не даёт эффекта — Radeski Skin Clinic](${COVER})

*Главная причина «неэффективности» — не аппарат, а нарушения со стороны пациента.*

## Процесс: три самые частые ошибки

Ниже — пошаговый разбор ошибок, которые чаще всего снижают результат.

---

### Этап 1 — Ошибка №1: выдёргивание волос

![Ошибка 1: шугаринг, воск и пинцет при лазерной эпиляции](${IMG1})

**Ошибка:** между сеансами делать шугаринг, воск или выщипывание пинцетом.

**Что происходит:** лазер воздействует на **фолликул** — волосяной луковице. Если луковицу удалить, **мишени для лазера не остаётся**.

**Как правильно:** между сеансами — **только бритва**. Волос должен оставаться в коже, чтобы лазер «видел» фолликул.

---

### Этап 2 — Ошибка №2: нарушение интервалов

![Ошибка 2: пропуск сеансов и нарушение графика](${IMG2})

**Ошибка:** пропускать запланированные визиты или приходить «когда получится».

**Что происходит:** лазер уничтожает волос только в **активной фазе роста**. График строится именно под этот цикл. Перенос визита = пропуск фазы, и результат откатывается назад.

**Как правильно:** **строго соблюдать интервалы**, которые назначил врач. Обычно это 4–6 недель в зависимости от зоны и типа волос.

---

### Этап 3 — Ошибка №3: бросить курс раньше времени

![Ошибка 3: не завершить полный курс эпиляции](${IMG3})

**Ошибка:** перестать ходить, когда волосы заметно поредели.

**Что происходит:** гладкость после 3–4 сеансов может **обманчиво** казаться финальным результатом. Чтобы «уснуть» оставшиеся фолликулы и сохранить эффект на годы, нужно **пройти весь курс**.

**Как правильно:** обычно **6–8 сеансов** (индивидуально); врач может назначить поддерживающие процедуры.

---

## Итог: результат зависит от дисциплины

Теперь вы знаете, почему лазерная эпиляция «не работает»!

Проблема чаще не в «плохом» лазере, а в частых ошибках со стороны пациента.

Запишитесь в нашу клинику, соблюдайте все рекомендации — и вы надолго избавитесь от лишних волос!

## Следующий шаг в Radeski Skin Clinic

1. **Консультация** — оценка зоны, фототипа и типа волос.
2. **Индивидуальный график** — интервалы и длина курса.
3. **DEKA MOVEO** — современный александритовый протокол.
4. **Наблюдение** — уход и план следующих визитов.

Подробнее: [подготовка к DEKA Moveo](/ru/articles/art-deka-moveo-epilyatsiya-tayyorgarlik) и [страница услуги](/ru/promo/lazer-epilyatsiya).

## Запись на приём

Лазерная эпиляция в филиалах Ферганы и Коканда — консультация и индивидуальный план в Radeski Skin Clinic.`;
}

function enBody(): string {
  return `## Why laser hair removal can feel like it “doesn’t work”

Many patients say results after a few sessions fall short of expectations. In most cases the issue is not a “bad laser” but **common mistakes** during the treatment course.

At Radeski Skin Clinic, **DEKA MOVEO** alexandrite laser hair removal follows a medical protocol. Follow the rules and you can enjoy long-lasting hair reduction.

![Why laser hair removal may seem ineffective — Radeski Skin Clinic](${COVER})

*The usual culprit is patient-side mistakes—not the device.*

## Process: three mistakes that ruin results

Here is a step-by-step look at what most often lowers effectiveness.

---

### Step 1 — Mistake #1: pulling hair out

![Mistake 1: sugaring, wax, and tweezers during laser hair removal](${IMG1})

**The mistake:** sugaring, waxing, or tweezing between sessions.

**What happens:** the laser targets the **follicle**—the hair bulb. Remove the bulb and there is **nothing left for the laser to treat**.

**Do this instead:** between sessions use **a razor only**. Hair should remain above the skin so the follicle stays in the beam path.

---

### Step 2 — Mistake #2: breaking the schedule

![Mistake 2: skipping sessions and ignoring the calendar](${IMG2})

**The mistake:** skipping planned visits or coming only when convenient.

**What happens:** the laser works on hairs in the **active growth phase**. Your schedule is built around that cycle. Miss a visit and you miss the phase—results slide backward.

**Do this instead:** **keep the intervals** your doctor sets—often 4–6 weeks depending on area and hair type.

---

### Step 3 — Mistake #3: quitting before the course ends

![Mistake 3: stopping treatment before completing the course](${IMG3})

**The mistake:** stopping once hair looks much thinner.

**What happens:** smooth skin after 3–4 sessions can be **misleading**. To fully treat “sleeping” follicles and keep results for years, you need the **full course**.

**Do this instead:** typically **6–8 sessions** (individual); maintenance visits may be recommended.

---

## Bottom line: results follow the rules

Now you know why laser hair removal can seem ineffective!

The problem is usually not a “bad” laser but frequent patient mistakes.

Book at our clinic, follow every guideline, and enjoy long-lasting freedom from unwanted hair!

## Your next step at Radeski Skin Clinic

1. **Consultation** — area, phototype, and hair assessment.
2. **Personal schedule** — intervals and course length.
3. **DEKA MOVEO** — modern alexandrite protocol.
4. **Follow-up** — aftercare and next visits.

Also read: [DEKA Moveo preparation guide](/en/articles/art-deka-moveo-epilyatsiya-tayyorgarlik) and our [laser hair removal service page](/en/promo/lazer-epilyatsiya).

## Book an appointment

Laser hair removal in Fergana and Kokand — specialist consultation and an individual plan at Radeski Skin Clinic.`;
}

export const LAZER_EPILYATSIYA_MISTAKES_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Lazer epilyatsiyasi nima uchun samara bermaydi? 3 ta keng tarqalgan xato: yulib tashlash, grafikni buzish, kursni tugatmaslik. Radeski Skin Clinic — DEKA MOVEO.',
    body: uzBody(),
    keyTakeaways: [
      'Muammo ko\'pincha «yomon lazer»da emas — bemor xatolarida',
      'Seanslar orasida faqat britva; vosk va shugaring taqiqlanadi',
      'Grafikni buzish faol o\'sish fazasini o\'tkazib yuboradi',
      '3–4 seansdagi silliq effekt aldovchi — kursni tugating',
      'DEKA MOVEO bilan qoidalarga rioya qilsangiz, uzoq muddatli natija mumkin',
    ],
    tags: [
      'Lazer epilyatsiya',
      'DEKA MOVEO',
      'Aleksandrit lazer',
      'Epilyatsiya xatolari',
      'Farg\'ona',
      'Qo\'qon',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Bir necha seansdan keyin ham natija yo\'q deb hisoblaysiz',
      'Seanslar oralig\'ida qanday parvarish qilish noaniq',
      'Gormonal tuk o\'sishi yoki teri muammosi bor',
      'Birinchi marta lazer epilyatsiyasini rejalashtiryapsiz',
    ],
    faq: [
      {
        question: 'Seanslar orasida qirqish mumkinmi?',
        answer:
          'Ha — faqat britva (ustara). Vosk, shugaring, epilyator va pinset folikulani olib tashlaydi, lazer samaradorligini pasaytiradi.',
      },
      {
        question: 'Nega 3–4 seans yetarli emas?',
        answer:
          'Lazer faqat faol fazadagi tuklarga ta\'sir qiladi. Qolgan folikulalar keyingi seanslarda ishlanadi; to\'liq kurs odatda 6–8 seans.',
      },
      {
        question: 'Seansni kechiktirsam nima bo\'ladi?',
        answer:
          'Faol o\'sish fazasini o\'tkazib yuborishingiz mumkin — natija sekinlashadi yoki ortga qaytadi. Shifokor grafikini saqlang.',
      },
      {
        question: 'Radeski da qaysi lazer ishlatiladi?',
        answer:
          'DEKA MOVEO aleksandrit lazer (755 nm) — zamonaviy protokol, sezgir zonalarda ham qulay.',
      },
    ],
  },
  ru: {
    summary:
      'Почему лазерная эпиляция «не работает»? Три частые ошибки: выдёргивание волос, нарушение графика, ранний отказ от курса. Radeski Skin Clinic — DEKA MOVEO.',
    body: ruBody(),
    keyTakeaways: [
      'Чаще виноваты ошибки пациента, а не «плохой лазер»',
      'Между сеансами — только бритва; воск и шугаринг запрещены',
      'Пропуск визитов = пропуск активной фазы роста',
      'Гладкость после 3–4 сеансов обманчива — пройдите весь курс',
      'При соблюдении правил DEKA MOVEO даёт стойкий результат',
    ],
    tags: [
      'Лазерная эпиляция',
      'DEKA MOVEO',
      'Александритовый лазер',
      'Ошибки эпиляции',
      'Фергана',
      'Коканд',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'После нескольких сеансов эффекта почти нет',
      'Неясно, как ухаживать между процедурами',
      'Есть гормональный рост волос или проблемы кожи',
      'Планируете первую лазерную эпиляцию',
    ],
    faq: [
      {
        question: 'Можно ли брить между сеансами?',
        answer:
          'Да — только бритвой. Воск, шугаринг, эпилятор и пинцет удаляют фолликул и снижают эффективность лазера.',
      },
      {
        question: 'Почему 3–4 сеанса недостаточно?',
        answer:
          'Лазер действует только на волосы в активной фазе. Остальные фолликулы обрабатываются позже; полный курс обычно 6–8 сеансов.',
      },
      {
        question: 'Что будет, если перенести сеанс?',
        answer:
          'Можно пропустить активную фазу роста — результат замедлится или откатится. Соблюдайте график врача.',
      },
      {
        question: 'Какой лазер используется в Radeski?',
        answer:
          'Александритовый лазер DEKA MOVEO (755 нм) — современный протокол, комфортен даже в чувствительных зонах.',
      },
    ],
  },
  en: {
    summary:
      'Why laser hair removal may seem ineffective: three common mistakes—pulling hair, skipping sessions, quitting early. Radeski Skin Clinic — DEKA MOVEO.',
    body: enBody(),
    keyTakeaways: [
      'Patient mistakes—not a “bad laser”—cause most disappointment',
      'Razor only between sessions; no wax or sugaring',
      'Missed visits mean missed active growth phases',
      'Smooth skin after 3–4 sessions can be misleading—finish the course',
      'With DEKA MOVEO and proper care, long-lasting results are achievable',
    ],
    tags: [
      'Laser hair removal',
      'DEKA MOVEO',
      'Alexandrite laser',
      'Epilation mistakes',
      'Fergana',
      'Kokand',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Little change after several sessions',
      'Unclear how to care for skin between visits',
      'Hormonal hair growth or skin concerns',
      'Planning your first laser hair removal course',
    ],
    faq: [
      {
        question: 'Can I shave between sessions?',
        answer:
          'Yes—razor only. Wax, sugaring, epilators, and tweezers remove the follicle and reduce laser effectiveness.',
      },
      {
        question: 'Why aren’t 3–4 sessions enough?',
        answer:
          'The laser affects hairs in the active growth phase only. Remaining follicles are treated in later sessions; a full course is usually 6–8 visits.',
      },
      {
        question: 'What if I delay a session?',
        answer:
          'You may miss the active growth window—results slow or regress. Keep your doctor’s schedule.',
      },
      {
        question: 'Which laser does Radeski use?',
        answer:
          'DEKA MOVEO alexandrite laser (755 nm)—a modern protocol comfortable even in sensitive areas.',
      },
    ],
  },
};

export const LAZER_EPILYATSIYA_MISTAKES_ARTICLE: Article = {
  id: 'art-lazer-epilyatsiya-samara-xatolar',
  slug: 'lazer-epilyatsiya-nima-uchun-samara-bermaydi',
  title: {
    uz: 'Nima uchun lazer epilyatsiyasi samara bermaydi? 3 ta keng tarqalgan xato',
    ru: 'Почему лазерная эпиляция не даёт эффекта? Три частые ошибки пациентов',
    en: 'Why Laser Hair Removal May Seem Ineffective: Three Common Patient Mistakes',
  },
  summary: {
    uz: LAZER_EPILYATSIYA_MISTAKES_ARTICLE_CATALOG.uz.summary,
    ru: LAZER_EPILYATSIYA_MISTAKES_ARTICLE_CATALOG.ru.summary,
    en: LAZER_EPILYATSIYA_MISTAKES_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: LAZER_EPILYATSIYA_MISTAKES_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: LAZER_EPILYATSIYA_MISTAKES_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: LAZER_EPILYATSIYA_MISTAKES_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-09-03',
  image: COVER,
  images: {
    uz: COVER,
    ru: COVER,
    en: COVER,
  },
  views: 0,
};
