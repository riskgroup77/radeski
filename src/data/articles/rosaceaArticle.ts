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

function ruBodyRosacea(): string {
  return `## IPL и Derma V Lutronic при розацеа: как это работает?

Розацеа — хроническое воспалительное заболевание кожи, которое проявляется стойким покраснением лица, расширенными сосудами, ощущением жара, а иногда и воспалительными высыпаниями. Полностью вылечить розацеа невозможно, однако современные методы позволяют эффективно контролировать заболевание, уменьшить симптомы и значительно улучшить внешний вид кожи.

Одной из наиболее эффективных аппаратных методик лечения является IPL-терапия.

## Что такое IPL?

IPL (Intense Pulsed Light) — это технология интенсивного импульсного света, которая избирательно воздействует на расширенные сосуды кожи, не повреждая окружающие ткани.

Во время процедуры световая энергия поглощается гемоглобином, находящимся внутри расширенных сосудов. Под действием энергии сосуды постепенно закрываются и становятся менее заметными, благодаря чему уменьшается покраснение кожи.

## Как IPL помогает при розацеа?

IPL оказывает комплексное воздействие на кожу.

Процедура помогает:

- уменьшить стойкое покраснение лица;
- сделать сосудистую сетку менее заметной;
- снизить выраженность воспаления;
- уменьшить частоту обострений;
- улучшить цвет лица;
- сделать кожу более ровной и здоровой.

Многие пациенты также отмечают улучшение текстуры кожи и уменьшение повышенной чувствительности после курса процедур.

## Какие симптомы розацеа можно лечить IPL?

IPL наиболее эффективен при:

- стойком покраснении щёк;
- покраснении носа;
- расширенных капиллярах;
- сосудистой сетке;
- частых приливах крови к лицу;
- лёгких воспалительных проявлениях розацеа.

Если заболевание сопровождается выраженными воспалительными элементами, врач может дополнительно назначить медикаментозное лечение.

## Сколько процедур потребуется?

Количество процедур определяется индивидуально.

Как правило, курс составляет 3–5 процедур с интервалом 3–4 недели. Первые изменения многие пациенты замечают уже после первых сеансов, однако максимальный эффект развивается постепенно.

После завершения курса могут быть рекомендованы поддерживающие процедуры.

## Болезненна ли процедура?

IPL переносится большинством пациентов комфортно.

Во время процедуры ощущаются лёгкие вспышки тепла или небольшое покалывание. Современные системы охлаждения делают лечение максимально комфортным.

После процедуры возможно небольшое покраснение кожи, которое обычно проходит в течение нескольких часов.

## Когда IPL противопоказан?

Процедура может быть противопоказана при:

- беременности;
- свежем загаре;
- некоторых кожных инфекциях;
- приёме фотосенсибилизирующих препаратов;
- отдельных хронических заболеваниях.

Перед лечением врач обязательно проводит консультацию и определяет наличие противопоказаний.

## Современное лечение розацеа в Radeski Skin Clinic

В Radeski Skin Clinic лечение розацеа всегда начинается с консультации врача-дерматолога. После оценки состояния кожи подбирается индивидуальный план терапии.

Для лечения розацеа в нашей клинике используются современные технологии мирового уровня.

### IPL InMode

IPL InMode эффективно уменьшает покраснение, воздействует на поверхностные сосуды, снижает воспаление и помогает выровнять тон кожи. Процедура способствует уменьшению выраженности симптомов розацеа и улучшению общего состояния кожи.

### Derma V Lutronic

Для пациентов с выраженной сосудистой формой розацеа в Radeski Skin Clinic используется Derma V Lutronic — одна из самых современных сосудистых лазерных платформ.

Лазер точечно воздействует на расширенные сосуды, позволяя эффективно уменьшить стойкое покраснение, сосудистую сетку и телеангиэктазии. Благодаря высокой точности и современным системам охлаждения процедура проводится максимально безопасно и комфортно.

## Почему важно лечить розацеа комплексно?

Аппаратное лечение — это только часть терапии. Для достижения стойкой ремиссии важно устранить факторы, провоцирующие обострения, подобрать правильный домашний уход и при необходимости использовать лекарственные препараты.

Именно комплексный подход позволяет контролировать заболевание и значительно продлить периоды без обострений.

## Почему выбирают Radeski Skin Clinic?

В Radeski Skin Clinic лечение розацеа проводится с использованием современного оборудования экспертного класса и в соответствии с индивидуальными особенностями каждого пациента.

Наши преимущества:

- опытные врачи-дерматологи;
- современные технологии IPL InMode и Derma V Lutronic;
- индивидуальный подбор схемы лечения;
- комплексный подход к лечению розацеа;
- рекомендации по домашнему уходу и профилактике обострений.

## Запишитесь на консультацию

Если вас беспокоят постоянное покраснение лица, сосудистая сетка или частые обострения розацеа, специалисты Radeski Skin Clinic помогут подобрать эффективный и безопасный план лечения. Современные аппаратные технологии позволяют значительно уменьшить проявления заболевания и вернуть коже более здоровый и ровный вид.`;
}

function uzBodyRosacea(): string {
  return `## Rozatsea da IPL va Derma V Lutronic: qanday ishlaydi?

Rozatsea — yuzning doimiy qizarishi, kengaygan tomirlar, issiqlik hissi va ba'zan yallig'langan toshmalar bilan namoyon bo'ladigan surunkali teri kasalligi. Rozatseani butunlay davolash mumkin emas, lekin zamonaviy usullar kasallikni samarali nazorat qilish, belgilarni kamaytirish va teri ko'rinishini sezilarli yaxshilash imkonini beradi.

Eng samarali apparat usullaridan biri IPL terapiyasidir.

## IPL nima?

IPL (Intense Pulsed Light) — kengaygan teri tomirlariga tanlab ta'sir qiladigan, atrofdagi to'qimalarni shikastlamaydigan intensiv impulsli yorug'lik texnologiyasi.

Muolaja paytida yorug'lik energiyasi kengaygan tomirlar ichidagi gemoglobinga yutiladi. Energiya ta'sirida tomirlar asta-sekin yopiladi va kamroq sezilarli bo'ladi, shu bilan teri qizarishi kamayadi.

## IPL rozatseaga qanday yordam beradi?

IPL teriga kompleks ta'sir qiladi.

Muolaja quyidagilarga yordam beradi:

- yuzning doimiy qizarishini kamaytirish;
- tomir to'rini kamroq sezilarli qilish;
- yallig'lanish ifodasini pasaytirish;
- kuchayishlar chastotasini kamaytirish;
- yuz rangini yaxshilash;
- terini tekisroq va sog'lomroq qilish.

Ko'p bemorlar muolajalar kursidan keyin teri teksturasi yaxshilanishi va ortiqcha sezgirlik kamayishini ham qayd etadilar.

## Rozatseaning qaysi belgilari IPL bilan davolanadi?

IPL ayniqsa samarali:

- yonoqlarning doimiy qizarishi;
- burun qizarishi;
- kengaygan kapillyarlar;
- tomir to'ri;
- yuzga tez-tez qon quyilishi (flush);
- rozatseaning yengil yallig'lanish ko'rinishlari.

Agar kasallik aniq yallig'langan elementlar bilan kechsa, shifokor qo'shimcha dori davolashni tayinlashi mumkin.

## Nechta muolaja kerak bo'ladi?

Muolajalar soni individual belgilanadi.

Odatda kurs 3–5 muolajadan iborat bo'lib, oralig'i 3–4 hafta. Ko'p bemorlar birinchi seanslardan keyin o'zgarishlarni sezishadi, lekin maksimal effekt asta-sekin rivojlanadi.

Kurs tugagach, qo'llab-quvvatlovchi muolajalar tavsiya etilishi mumkin.

## Muolaja og'riqlimi?

IPL ko'pchilik bemorlar tomonidan qulay ko'tariladi.

Muolaja paytida yengil issiqlik chaqnashi yoki kichik qichish his qilinishi mumkin. Zamonaviy sovutish tizimlari davolashni maksimal darajada qulay qiladi.

Muolajadan keyin terida kichik qizarish bo'lishi mumkin, odatda bir necha soat ichida o'tadi.

## IPL qachon qo'llanmaydi?

Muolaja quyidagi holatlarda qo'llanmasligi mumkin:

- homiladorlik;
- yangi quyoshdan qorayish (zagar);
- ba'zi teri infeksiyalari;
- fotosensitiv dori-darmonlar qabul qilish;
- alohida surunkali kasalliklar.

Davolashdan oldin shifokor majburiy konsultatsiya o'tkazib, qarshi ko'rsatmalar bor-yo'qligini aniqlaydi.

## Radeski Skin Clinic'da rozatseani zamonaviy davolash

Radeski Skin Clinic'da rozatsea davolashi har doim dermatolog shifokor konsultatsiyasidan boshlanadi. Teri holati baholangach, individual terapiya rejasi tuziladi.

Klinikamizda rozatsea uchun dunyo darajasidagi zamonaviy texnologiyalar qo'llaniladi.

### IPL InMode

IPL InMode qizarishni samarali kamaytiradi, yuzaki tomirlarga ta'sir qiladi, yallig'lanishni pasaytiradi va teri rangini tekislashga yordam beradi. Muolaja rozatsea belgilarining ifodasini kamaytirish va teri umumiy holatini yaxshilashga yordam beradi.

### Derma V Lutronic

Tomir shaklidagi rozatsea ifodasi kuchli bo'lgan bemorlar uchun Radeski Skin Clinic'da Derma V Lutronic — eng zamonaviy tomir lazer platformalaridan biri qo'llaniladi.

Lazer kengaygan tomirlarga nuqtaviy ta'sir qiladi, doimiy qizarish, tomir to'ri va teleangiektaziyalarni samarali kamaytirish imkonini beradi. Yuqori aniqlik va zamonaviy sovutish tizimlari tufayli muolaja maksimal xavfsiz va qulay o'tkaziladi.

## Nega rozatseani kompleks davolash muhim?

Apparat davolashi — terapiyaning faqat bir qismi. Barqaror remissiyaga erishish uchun kuchayishni keltirib chiqaradigan omillarni bartaraf etish, to'g'ri uy parvarishini tanlash va kerak bo'lsa dori preparatlaridan foydalanish muhim.

Aynan kompleks yondashuv kasallikni nazorat qilish va kuchayishsiz davrlarni sezilarli uzaytirish imkonini beradi.

## Nega Radeski Skin Clinic?

Radeski Skin Clinic'da rozatsea davolashi ekspert darajadagi zamonaviy uskunalar va har bir bemorning individual xususiyatlariga mos ravishda olib boriladi.

Bizning afzalliklarimiz:

- tajribali dermatolog shifokorlar;
- IPL InMode va Derma V Lutronic zamonaviy texnologiyalari;
- individual davolash sxemasini tanlash;
- rozatseaga kompleks yondashuv;
- uy parvarishi va kuchayishning oldini olish bo'yicha tavsiyalar.

## Konsultatsiyaga yoziling

Agar sizni doimiy yuz qizarishi, tomir to'ri yoki rozatseaning tez-tez kuchayishi bezovta qilsa, Radeski Skin Clinic mutaxassislari samarali va xavfsiz davolash rejasini tanlashga yordam beradi. Zamonaviy apparat texnologiyalari kasallik ko'rinishlarini sezilarli kamaytirish va teriga sog'lomroq, tekisroq ko'rinish qaytarish imkonini beradi.`;
}

function enBodyRosacea(): string {
  return `## IPL and Derma V Lutronic for Rosacea: How It Works

Rosacea is a chronic inflammatory skin condition marked by persistent facial redness, dilated vessels, flushing, and sometimes inflammatory breakouts. Rosacea cannot be fully cured, but modern methods can effectively control the disease, ease symptoms, and significantly improve skin appearance.

One of the most effective device-based treatments is IPL therapy.

## What is IPL?

IPL (Intense Pulsed Light) is an intense pulsed light technology that selectively targets dilated skin vessels without damaging surrounding tissue.

During treatment, light energy is absorbed by hemoglobin inside enlarged vessels. The energy gradually closes these vessels, making them less visible and reducing facial redness.

## How does IPL help rosacea?

IPL acts on the skin in several complementary ways.

The procedure helps:

- reduce persistent facial redness;
- make vascular networks less visible;
- ease inflammation;
- reduce flare frequency;
- improve facial tone;
- create smoother, healthier-looking skin.

Many patients also report better skin texture and less sensitivity after a course of treatments.

## Which rosacea symptoms can IPL treat?

IPL is especially effective for:

- persistent cheek redness;
- nasal redness;
- dilated capillaries;
- visible vascular networks;
- frequent facial flushing;
- mild inflammatory signs of rosacea.

When pronounced inflammatory lesions are present, your doctor may add medical therapy.

## How many sessions are needed?

The number of sessions is individualized.

A typical course includes 3–5 treatments spaced 3–4 weeks apart. Many patients notice early changes after the first sessions, while maximum improvement develops gradually.

Maintenance sessions may be recommended after the initial course.

## Is the procedure painful?

Most patients tolerate IPL comfortably.

You may feel brief warmth or mild tingling during treatment. Modern cooling systems make the procedure as comfortable as possible.

Mild redness after treatment usually fades within a few hours.

## When is IPL contraindicated?

IPL may be unsuitable when:

- pregnancy;
- recent sun tanning;
- certain skin infections;
- photosensitizing medications;
- selected chronic conditions.

A physician consultation is required before treatment to rule out contraindications.

## Modern rosacea treatment at Radeski Skin Clinic

At Radeski Skin Clinic, rosacea care always begins with a dermatologist consultation. After skin assessment, an individual treatment plan is created.

Our clinic uses world-class technologies for rosacea management.

### IPL InMode

IPL InMode effectively reduces redness, targets superficial vessels, eases inflammation, and helps even skin tone. It reduces rosacea visibility and improves overall skin condition.

### Derma V Lutronic

For patients with a pronounced vascular form of rosacea, Radeski Skin Clinic uses Derma V Lutronic — one of the most advanced vascular laser platforms available.

The laser precisely targets dilated vessels, helping reduce persistent redness, vascular networks, and telangiectasias. High precision and modern cooling systems make treatment safe and comfortable.

## Why is comprehensive rosacea care important?

Device treatment is only part of therapy. Lasting remission requires addressing flare triggers, choosing appropriate home skincare, and using medications when needed.

A comprehensive approach helps control the disease and significantly extend periods without flares.

## Why choose Radeski Skin Clinic?

Rosacea treatment at Radeski Skin Clinic uses expert-class equipment tailored to each patient's individual needs.

Our advantages:

- experienced dermatologists;
- IPL InMode and Derma V Lutronic technologies;
- individualized treatment planning;
- comprehensive rosacea management;
- home care and flare prevention guidance.

## Book a consultation

If persistent facial redness, visible vessels, or frequent rosacea flares concern you, Radeski Skin Clinic specialists will help design an effective, safe treatment plan. Modern device technologies can significantly reduce symptoms and restore a healthier, more even skin appearance.`;
}

export const ROSACEA_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Rozatsea da IPL va Derma V Lutronic qanday ishlaydi: qizarish va tomir to'rini kamaytirish, kurs va Farg‘ona/Qo‘qonda Radeski Skin Clinic’dagi kompleks davolash.",
    body: uzBodyRosacea(),
    keyTakeaways: [
      'Rozatsea surunkali kasallik — nazorat va belgilarni kamaytirish mumkin',
      'IPL kengaygan tomirlarga tanlab ta\'sir qiladi va qizarishni kamaytiradi',
      'Derma V Lutronic tomir shaklidagi rozatsea uchun aniqroq yechim',
      'Eng yaxshi natija apparat + uy parvarishi + dori kombinatsiyasida',
    ],
    tags: ['Rozatsea', 'IPL', 'Derma V', 'Tomir lazer', 'Dermatologiya', 'Fargona', 'Qoqon', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Yuz doimiy qizarib tursa',
      'Tomir to\'ri aniq ko\'rinib qolsa',
      'Issiqlik, achchiq-tuzli ovqatdan keyin kuchayish bo\'lsa',
      'Uy parvarishi yordam bermasa',
      'Ko\'z atrofi shishishi yoki og\'riq paydo bo\'lsa',
    ],
    faq: [
      {
        question: 'Rozatseani butunlay davolash mumkinmi?',
        answer:
          'Kasallikni butunlay yo\'qotish mumkin emas, lekin zamonaviy usullar belgilarni sezilarli kamaytirish va uzoq remissiya saqlash imkonini beradi.',
      },
      {
        question: 'IPL va Derma V farqi nima?',
        answer:
          'IPL keng spektrli yorug\'lik bilan yuzaki tomirlarga ta\'sir qiladi; Derma V lazer tomir shaklidagi rozatsea uchun aniqroq va chuqurroq ta\'sir beradi. Shifokor holatga qarab tanlaydi.',
      },
      {
        question: 'Nechta IPL seansi kerak?',
        answer:
          'Odatda 3–5 muolaja, oralig\'i 3–4 hafta. Aniq reja konsultatsiyadan keyin belgilanadi.',
      },
    ],
  },
  ru: {
    summary:
      'Как IPL и Derma V Lutronic помогают при розацеа в Фергане и Коканде: уменьшение покраснения и сосудистой сетки, курс процедур в Radeski Skin Clinic.',
    body: ruBodyRosacea(),
    keyTakeaways: [
      'Розацеа хроническое — важен контроль и уменьшение симптомов',
      'IPL избирательно воздействует на расширенные сосуды',
      'Derma V Lutronic — для выраженной сосудистой формы',
      'Лучший результат при комплексном подходе',
    ],
    tags: ['Розацеа', 'IPL', 'Derma V', 'Сосудистый лазер', 'Дерматология', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Сохраняется постоянное покраснение лица',
      'Появилась выраженная сосудистая сетка',
      'Частые приливы после еды, стресса или жары',
      'Домашний уход не помогает',
      'Покраснение или отёк в области глаз',
    ],
    faq: [
      {
        question: 'Можно ли полностью вылечить розацеа?',
        answer:
          'Полностью излечить заболевание нельзя, но современные методы позволяют значительно уменьшить симптомы и продлить ремиссию.',
      },
      {
        question: 'Чем отличаются IPL и Derma V?',
        answer:
          'IPL воздействует широким спектром света на поверхностные сосуды; Derma V — лазер для более точного и глубокого воздействия при сосудистой форме. Выбор делает врач.',
      },
      {
        question: 'Сколько сеансов IPL нужно?',
        answer:
          'Обычно 3–5 процедур с интервалом 3–4 недели. Точный план определяется после консультации.',
      },
    ],
  },
  en: {
    summary:
      'How IPL and Derma V Lutronic help rosacea in Fergana and Kokand: reducing redness and vessels, treatment course at Radeski Skin Clinic.',
    body: enBodyRosacea(),
    keyTakeaways: [
      'Rosacea is chronic — focus on control and symptom reduction',
      'IPL selectively targets dilated vessels',
      'Derma V Lutronic suits pronounced vascular rosacea',
      'Best results come from combined care',
    ],
    tags: ['Rosacea', 'IPL', 'Derma V', 'Vascular laser', 'Dermatology', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Persistent facial redness',
      'Visible vascular network',
      'Frequent flushes from heat, food, or stress',
      'Home care is not helping',
      'Redness or swelling around the eyes',
    ],
    faq: [
      {
        question: 'Can rosacea be fully cured?',
        answer:
          'It cannot be fully cured, but modern methods can significantly reduce symptoms and extend remission.',
      },
      {
        question: 'What is the difference between IPL and Derma V?',
        answer:
          'IPL uses broad-spectrum light on superficial vessels; Derma V laser offers more precise, deeper action for vascular rosacea. Your doctor selects the best option.',
      },
      {
        question: 'How many IPL sessions are needed?',
        answer:
          'Typically 3–5 sessions spaced 3–4 weeks apart. The exact plan is set after consultation.',
      },
    ],
  },
};

export const ROSACEA_ARTICLE: Article = {
  id: 'art-rozacea-ipl',
  slug: 'rozacea-ipl',
  title: {
    uz: 'Rozatsea da IPL va Derma V Lutronic: qanday ishlaydi?',
    ru: 'IPL и Derma V Lutronic при розацеа: как это работает?',
    en: 'IPL and Derma V Lutronic for Rosacea: How It Works',
  },
  summary: {
    uz: ROSACEA_ARTICLE_CATALOG.uz.summary,
    ru: ROSACEA_ARTICLE_CATALOG.ru.summary,
    en: ROSACEA_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: ROSACEA_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: ROSACEA_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: ROSACEA_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-07-13',
  image: '/karusel/ipl.webp',
  images: {
    uz: '/karusel/ipl.webp',
    ru: '/karusel/ipl.webp',
    en: '/karusel/ipl.webp',
  },
  views: 0,
};
