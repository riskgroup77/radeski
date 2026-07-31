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

function uzBody(): string {
  return `## IPL-terapiya nima?

Zamonaviy dermatologiya teri kasalliklari va estetik muammolarni jarrohsiz yechish uchun bir qancha samarali usullarni taklif etadi. Ulardan eng ko‘p so‘raladigani — **IPL-terapiya** (Intense Pulsed Light), ya’ni kuchli impulsli yorug‘lik bilan davolash.

Bu usul tomirli muammolar, pigmentatsiya, akne, fotoqarish belgilari va boshqa estetik shikoyatlarni uzoq reabilitatsiyasiz kamaytirishga yordam beradi. Radeski Skin Clinic’da (Farg‘ona) IPL muolajalari zamonaviy uskuna va tajribali dermatolog nazoratida o‘tkaziladi — samaradorlik bilan birga xavfsizlik ham ustuvor.

## IPL qanday ishlaydi?

IPL — teriga turli to‘lqin uzunliklaridagi keng diapazonli impulsli yorug‘lik ta’siri. Lazer odatda bitta to‘lqin bilan ishlasa, IPL keng spektrdan foydalanadi va bir seansda bir nechta teri nishonlariga ta’sir qilishi mumkin.

Yorug‘lik energiyasi quyidagilar tomonidan yutiladi:

- **melanin** — pigment dog‘larini ochishda;
- **gemoglobin** — tomirli “yulduzchalar” va qizarishda;
- **akne qo‘zg‘atuvchi bakteriyalar**;
- **teri hujayralari** — kollagen va elastin ishlab chiqarishini rag‘batlantirish uchun.

Shu bois IPL nafaqat muayyan muammoni kamaytiradi, balki terining umumiy ko‘rinishini ham yaxshilaydi.

## Qaysi muammolarda yordam beradi?

IPL quyidagi holatlarda qo‘llanilishi mumkin:

- rozatsea;
- kuperoz;
- tomirli yulduzchalar;
- yuz qizarishi;
- pigment dog‘lari;
- quyosh pigmentatsiyasi;
- sepkil;
- yallig‘lanishdan keyingi pigmentatsiya;
- akne;
- postakne;
- kengaygan teshiklar;
- fotoqarish;
- xira yuz rangi;
- mayda ajinlar.

Muolaja terini silliqroq, zichroq va yorqinroq ko‘rinishga olib kelishi mumkin — lekin natija tashxis va kurs rejasiga bog‘liq.

## Muolaja qanday o‘tadi?

Avval dermatolog terini ko‘rib chiqadi, ko‘rsatmalar va qarshi ko‘rsatmalarni baholaydi.

Bosqichlar:

1. terini tozalash;
2. maxsus sovutuvchi gel surtish;
3. kerakli zonalarni IPL nasadka bilan ishlov berish;
4. tinchlantiruvchi vositalar va quyoshdan himoya kremi.

Maydonga qarab seans odatda **20–40 daqiqa** davom etadi.

## IPL og‘riqlimi?

Ko‘p bemorlar sezgini yengil “qarsak” yoki qisqa issiqlik sifatida ta’riflaydi. Zamonaviy IPL tizimlarida sovutish tizimi bor — bu qulaylikni oshiradi. Sezuvchanlik zona va sozlamalarga qarab farq qilishi mumkin.

## Natija qachon ko‘rinadi?

Birinchi seansdan keyin teri ko‘pincha yangiroq va tekisroq ko‘rinishi mumkin. Aniqroq natija uchun odatda **3–6 seanslik kurs** kerak bo‘ladi. Seanslar soni muammo turiga, yoshga va terining individual javobiga bog‘liq.

## IPL-terapiyaning afzalliklari

- jarrohsiz yondashuv;
- uzoq reabilitatsiya talab qilinmasligi;
- asoratlar xavfining pastligi (to‘g‘ri tanlangan bemorda);
- bir nechta muammoni bir reja ichida ishlash imkoniyati;
- teri sifatini yaxshilash;
- kollagen ishlab chiqarishini rag‘batlantirish;
- qisqa seans vaqti;
- yuz, bo‘yin, dekolte va boshqa zonalar uchun moslik.

## Qarshi ko‘rsatmalar

IPL odatda quyidagi holatlarda o‘tkazilmaydi:

- homiladorlik va emizish;
- onkologik kasalliklar;
- teridagi faol infeksiyalar;
- yangi kuchli zagar;
- fotosensitivlik;
- fotosensitivlik chaqiruvchi ayrim dorilar;
- og‘ir surunkali kasalliklarning dekompensatsiya bosqichi;
- qon ivishining buzilishi.

Har qanday muolajadan oldin shifokor konsultatsiyasi majburiy.

## Muolajadan keyin nima qilish kerak?

Maksimal natija uchun tavsiya etiladi:

- har kuni **SPF 50+** himoya;
- 2–4 hafta kuchli quyoshga yonishdan saqlanish;
- bir necha kun sauna, hammom va issiq vannadan voz kechish;
- teri tiklanguncha agressiv kosmetika ishlatmaslik;
- shifokor bergan individual ko‘rsatmalarga rioya qilish.

## Nima uchun Radeski Skin Clinic (Farg‘ona)?

Klinikamizda IPL tajribali dermatologlar nazoratida, zamonaviy uskuna va xalqaro protokollar asosida o‘tkaziladi. Har bir bemor uchun teri turi, tashxis va kutilgan natijaga qarab individual reja tuziladi.

Afzalliklarimiz:

- ekspert darajadagi zamonaviy uskuna;
- tajribali dermatologlar;
- individual yondashuv;
- xavfsiz davolash protokollari;
- tibbiy va estetik muammolarni kompleks yechish.

## Xulosa

IPL-terapiya — qizarish, tomirli o‘zgarishlar, pigmentatsiya, akne va fotoqarish belgilarini kamaytirishda samarali va qulay usullardan biri. U bir vaqtning o‘zida teri sifatini yaxshilashga va tabiiy yoshartirish mexanizmlarini qo‘llab-quvvatlashga yordam beradi.

Agar Farg‘onada sog‘lom rang, tekis ton va tabiiy yaltiroqlikni tiklamoqchi bo‘lsangiz, Radeski Skin Clinic mutaxassislari sizning holatingizga mos IPL kursini tanlab, aniq natijaga yo‘naltirilgan reja tuzadi.`;
}

function ruBody(): string {
  return `## Что такое IPL-терапия?

Современная дерматология предлагает эффективные методы лечения заболеваний кожи и эстетических недостатков без хирургии. Одна из самых востребованных технологий — **IPL-терапия** (Intense Pulsed Light), то есть воздействие интенсивным импульсным светом.

Метод помогает при сосудистых проблемах, пигментации, акне, признаках фотостарения и других эстетических жалобах без длительной реабилитации. В Radeski Skin Clinic (Фергана) IPL проводят на современном оборудовании под контролем опытных дерматологов — с акцентом и на результат, и на безопасность.

## Как работает IPL?

IPL — это воздействие на кожу широкополосным импульсным светом разной длины волны. В отличие от лазера, который обычно работает на одной длине волны, IPL использует широкий спектр и может воздействовать сразу на несколько мишеней кожи.

Световая энергия поглощается:

- **меланином** — при работе с пигментными пятнами;
- **гемоглобином** — при сосудистых звёздочках и покраснениях;
- **бактериями**, связанными с акне;
- **клетками кожи** — для стимуляции выработки коллагена и эластина.

Поэтому IPL одновременно помогает лечить проблему и улучшать внешний вид кожи.

## Какие проблемы решает IPL?

Метод может применяться при:

- розацеа;
- куперозе;
- сосудистых звёздочках;
- покраснении лица;
- пигментных пятнах;
- солнечной пигментации;
- веснушках;
- поствоспалительной пигментации;
- акне;
- постакне;
- расширенных порах;
- фотостарении;
- тусклом цвете лица;
- мелких морщинах.

Процедура также помогает сделать кожу более гладкой, плотной и сияющей — при правильном отборе пациентов и курсе.

## Как проходит процедура?

Сначала врач осматривает кожу и определяет показания.

Этапы:

1. очищение кожи;
2. нанесение охлаждающего геля;
3. обработка нужных зон IPL-насадкой;
4. успокаивающие средства и солнцезащитный крем.

В среднем сеанс занимает **20–40 минут** в зависимости от площади.

## Больно ли делать IPL?

Большинство пациентов ощущают лёгкие «щелчки» или кратковременное тепло. Современные системы с охлаждением делают процедуру более комфортной. Чувствительность зависит от зоны и параметров.

## Когда будет заметен результат?

Уже после первой процедуры кожа часто выглядит свежее и ровнее. Для выраженного эффекта обычно нужен курс из **3–6 процедур**. Число сеансов зависит от проблемы, возраста и индивидуальных особенностей кожи.

## Преимущества IPL-терапии

- безоперационный подход;
- без длительной реабилитации;
- низкий риск осложнений при правильном отборе;
- возможность работать сразу с несколькими проблемами;
- улучшение качества кожи;
- стимуляция выработки коллагена;
- короткое время сеанса;
- подходит для лица, шеи, декольте и других зон.

## Противопоказания

IPL обычно не проводят при:

- беременности и грудном вскармливании;
- онкологических заболеваниях;
- активных инфекциях кожи;
- свежем интенсивном загаре;
- фоточувствительности;
- приёме некоторых фотосенсибилизирующих препаратов;
- тяжёлых хронических заболеваниях в стадии декомпенсации;
- нарушениях свёртываемости крови.

Перед процедурой обязательна консультация врача.

## Рекомендации после процедуры

Для максимального результата рекомендуется:

- ежедневно использовать SPF 50+;
- избегать загара 2–4 недели;
- отказаться от сауны, бани и горячих ванн на несколько дней;
- не использовать агрессивную косметику до восстановления кожи;
- соблюдать индивидуальные рекомендации врача.

## Почему Radeski Skin Clinic в Фергане?

В клинике IPL проводят опытные дерматологи по современным протоколам. Для каждого пациента составляется индивидуальный план с учётом типа кожи, диагноза и ожидаемого результата.

Наши преимущества:

- современное оборудование экспертного класса;
- опытные врачи-дерматологи;
- индивидуальный подход;
- безопасные международные протоколы;
- комплексное решение медицинских и эстетических задач.

## Заключение

IPL-терапия — эффективный и удобный способ уменьшить покраснения, сосудистые изменения, пигментацию, проявления акне и признаки фотостарения, одновременно улучшая качество кожи.

Если вы хотите вернуть коже здоровый цвет, ровный тон и естественное сияние в Фергане, специалисты Radeski Skin Clinic подберут оптимальный курс IPL с учётом ваших индивидуальных особенностей.`;
}

function enBody(): string {
  return `## What is IPL therapy?

Modern dermatology offers many effective ways to treat skin conditions and aesthetic concerns without surgery. One of the most requested options is **IPL therapy** (Intense Pulsed Light) — treatment with intense pulsed light.

It can help with vascular issues, pigmentation, acne, photoaging signs, and other aesthetic concerns without a long recovery period. At Radeski Skin Clinic in Fergana, IPL is performed on modern equipment under experienced dermatologists, with both results and safety in mind.

## How does IPL work?

IPL delivers broad-spectrum pulsed light of different wavelengths to the skin. Unlike a laser that typically uses one wavelength, IPL can target several skin structures in one treatment plan.

Light energy is absorbed by:

- **melanin** — for pigment spots;
- **hemoglobin** — for broken capillaries and redness;
- **acne-related bacteria**;
- **skin cells** — to support collagen and elastin production.

That is why IPL can improve both a specific concern and overall skin quality.

## What concerns can IPL address?

IPL may be considered for:

- rosacea;
- couperose;
- spider veins;
- facial redness;
- pigment spots;
- sun-related pigmentation;
- freckles;
- post-inflammatory pigmentation;
- acne;
- post-acne marks;
- enlarged pores;
- photoaging;
- dull complexion;
- fine lines.

It can also help the skin look smoother, firmer, and brighter — when patients are selected carefully and a proper course is planned.

## What happens during treatment?

A dermatologist examines the skin first and confirms indications.

Typical steps:

1. cleansing;
2. applying a cooling gel;
3. treating the selected areas with an IPL handpiece;
4. soothing care and sunscreen.

Sessions usually last **20–40 minutes**, depending on the treated area.

## Is IPL painful?

Most patients describe brief “snaps” or short bursts of warmth. Modern systems with cooling make treatment more comfortable. Sensitivity varies by area and settings.

## When will results appear?

After the first session, skin often looks fresher and more even. A clearer result usually needs a course of **3–6 sessions**. The exact number depends on the concern, age, and individual response.

## Benefits of IPL therapy

- non-surgical approach;
- no long downtime in most cases;
- low complication risk with proper selection;
- ability to address several concerns in one plan;
- improved skin quality;
- support for natural collagen production;
- short session time;
- suitable for face, neck, décolleté, and other areas.

## Contraindications

IPL is generally not performed during:

- pregnancy and breastfeeding;
- oncological disease;
- active skin infections;
- recent intense tan;
- photosensitivity;
- use of certain photosensitising medicines;
- severe uncontrolled chronic illness;
- clotting disorders.

A medical consultation is required before treatment.

## Aftercare

For the best outcome:

- use SPF 50+ daily;
- avoid tanning for 2–4 weeks;
- skip sauna, steam rooms, and hot baths for several days;
- avoid aggressive skincare until the skin settles;
- follow your doctor’s personal advice.

## Why choose Radeski Skin Clinic in Fergana?

IPL at our clinic is delivered by experienced dermatologists using modern protocols. Each plan is tailored to skin type, diagnosis, and expected results.

Our advantages:

- expert-class modern equipment;
- experienced dermatologists;
- individual planning;
- safe international protocols;
- combined medical and aesthetic care.

## Conclusion

IPL therapy is an effective, practical option for reducing redness, vascular changes, pigmentation, acne-related marks, and photoaging signs while improving overall skin quality.

If you want healthier colour, a more even tone, and natural glow in Fergana, the Radeski Skin Clinic team can design an IPL course that fits your individual needs.`;
}

export const IPL_THERAPY_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'IPL-terapiya nima: Farg‘ona va Qo‘qonda Radeski Skin Clinic’da impulsli yorug‘lik bilan qizarish, pigment, akne va fotoqarishni qanday davolash mumkin — bosqichlar, natija va ehtiyot choralar.',
    body: uzBody(),
    keyTakeaways: [
      'IPL — keng spektrli impulsli yorug‘lik; bir reja ichida bir nechta teri muammosiga ta’sir qilishi mumkin',
      'Ko‘pincha 3–6 seans kerak; birinchi seansdan keyin ham yangilanish sezilishi mumkin',
      'Muolajadan keyin SPF 50+ va quyoshdan saqlanish muhim',
      'Farg‘onada IPL faqat dermatolog ko‘rigidan so‘ng individual reja bilan o‘tkaziladi',
    ],
    tags: [
      'IPL',
      'IPL terapiya',
      'IPL Fargona',
      'IPL Qoqon',
      'Fotoqarish',
      'Pigmentatsiya',
      'Rozatsea',
      'Kuperoz',
      'Fargona',
      'Qoqon',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Yuzda doimiy qizarish yoki tomirli “yulduzchalar” bo‘lsa',
      'Pigment dog‘lari kuchayib borsa',
      'Akne yoki postakne izlari bezovta qilsa',
      'Teri xira, notekis yoki “chaqqon” ko‘rinsa',
      'IPL kursini boshlashdan oldin tashxis va qarshi ko‘rsatmalarni bilmoqchi bo‘lsangiz',
    ],
    faq: [
      {
        question: 'IPL lazerdan nima farq qiladi?',
        answer:
          'Lazer odatda bitta to‘lqin uzunligi bilan ishlaydi. IPL esa keng spektrdan foydalanadi va bir nechta nishonga ta’sir qilishi mumkin — pigment, tomirlar, akne va teri sifati.',
      },
      {
        question: 'Necha seans kerak?',
        answer:
          'Ko‘p hollarda 3–6 seans tavsiya etiladi. Aniq son muammo, teri turi va javobga qarab individual belgilanadi.',
      },
      {
        question: 'Farg‘onada IPL kimga mos?',
        answer:
          'Qizarish, kuperoz, pigment, akne/postakne va fotoqarish belgilari bo‘lgan bemorlarga ko‘rib chiqilishi mumkin — faqat dermatolog bahosidan so‘ng.',
      },
      {
        question: 'Muolajadan keyin ishga qaytish mumkinmi?',
        answer:
          'Ko‘pincha ha. Yengil qizarish bo‘lishi mumkin, lekin uzoq “uyga yotish” reabilitatsiyasi odatda talab qilinmaydi. SPF va quyoshdan himoya shart.',
      },
    ],
  },
  ru: {
    summary:
      'Что такое IPL-терапия в Фергане и Коканде: как в Radeski Skin Clinic импульсный свет помогает при покраснениях, пигментации, акне и фотостарении — этапы, результат и меры безопасности.',
    body: ruBody(),
    keyTakeaways: [
      'IPL использует широкополосный импульсный свет и может работать сразу с несколькими проблемами кожи',
      'Обычно нужен курс из 3–6 процедур; эффект часто заметен уже после первого сеанса',
      'После процедуры критичны SPF 50+ и защита от солнца',
      'В Фергане IPL проводят только после консультации дерматолога по индивидуальному плану',
    ],
    tags: [
      'IPL',
      'IPL терапия',
      'IPL Фергана',
      'IPL Коканд',
      'Фотостарение',
      'Пигментация',
      'Розацеа',
      'Купероз',
      'Фергана',
      'Коканд',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Есть стойкое покраснение лица или сосудистые звёздочки',
      'Усиливается пигментация',
      'Беспокоят акне или постакне',
      'Кожа выглядит тусклой и неровной',
      'Нужна оценка показаний и противопоказаний перед курсом IPL',
    ],
    faq: [
      {
        question: 'Чем IPL отличается от лазера?',
        answer:
          'Лазер обычно работает на одной длине волны. IPL использует широкий спектр и может воздействовать на пигмент, сосуды, акне и качество кожи в рамках одного плана.',
      },
      {
        question: 'Сколько процедур нужно?',
        answer:
          'Чаще всего 3–6 сеансов. Точное число зависит от проблемы, типа кожи и ответа на лечение.',
      },
      {
        question: 'Кому подходит IPL в Фергане?',
        answer:
          'Пациентам с покраснением, куперозом, пигментом, акне/постакне и признаками фотостарения — после очной оценки дерматолога.',
      },
      {
        question: 'Можно ли сразу вернуться к делам?',
        answer:
          'В большинстве случаев да. Возможно лёгкое покраснение, но длительная реабилитация обычно не нужна. SPF обязателен.',
      },
    ],
  },
  en: {
    summary:
      'What IPL therapy is in Fergana and Kokand: how Radeski Skin Clinic uses intense pulsed light for redness, pigmentation, acne, and photoaging — steps, results, and safety.',
    body: enBody(),
    keyTakeaways: [
      'IPL uses broad-spectrum pulsed light and can address several skin concerns in one plan',
      'A typical course is 3–6 sessions; fresher skin is often noticed after the first visit',
      'Daily SPF 50+ and sun protection are essential after treatment',
      'In Fergana, IPL is planned individually after a dermatologist consultation',
    ],
    tags: [
      'IPL',
      'IPL therapy',
      'IPL Fergana',
      'IPL Kokand',
      'Photoaging',
      'Pigmentation',
      'Rosacea',
      'Couperose',
      'Fergana',
      'Kokand',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'You have persistent facial redness or spider veins',
      'Pigment spots are getting worse',
      'Acne or post-acne marks bother you',
      'Skin looks dull or uneven',
      'You want indications and contraindications checked before an IPL course',
    ],
    faq: [
      {
        question: 'How is IPL different from laser?',
        answer:
          'A laser typically uses one wavelength. IPL uses a broader spectrum and can target pigment, vessels, acne-related concerns, and overall skin quality within one plan.',
      },
      {
        question: 'How many sessions are needed?',
        answer:
          'Most patients need 3–6 sessions. The exact number depends on the concern, skin type, and treatment response.',
      },
      {
        question: 'Who may benefit from IPL in Fergana?',
        answer:
          'People with redness, couperose, pigmentation, acne/post-acne, or photoaging signs — after an in-person dermatologist assessment.',
      },
      {
        question: 'Can I return to daily activities right away?',
        answer:
          'Usually yes. Mild redness can occur, but long downtime is uncommon. Strict sunscreen use is required.',
      },
    ],
  },
};

export const IPL_THERAPY_ARTICLE: Article = {
  id: 'art-ipl-terapiya',
  slug: 'ipl-terapiya-nima-fargona',
  title: {
    uz: 'IPL-terapiya nima? Farg‘onada sog‘lom va chiroyli teri uchun zamonaviy yechim',
    ru: 'Что такое IPL-терапия? Современное решение для здоровой и красивой кожи в Фергане',
    en: 'What Is IPL Therapy? A Modern Solution for Healthy, Beautiful Skin in Fergana',
  },
  summary: {
    uz: IPL_THERAPY_ARTICLE_CATALOG.uz.summary,
    ru: IPL_THERAPY_ARTICLE_CATALOG.ru.summary,
    en: IPL_THERAPY_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: IPL_THERAPY_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: IPL_THERAPY_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: IPL_THERAPY_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-07-31',
  image: null,
  images: { uz: null, ru: null, en: null },
  views: 0,
};
