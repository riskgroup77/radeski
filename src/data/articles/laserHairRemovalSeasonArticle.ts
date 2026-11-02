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
 * Why start laser hair removal in autumn/winter — a seasonal article for the laser hair removal
 * service and city pages. Points: tan and sun raise the risk, a course takes 6–8 sessions over
 * months so starting now finishes before summer, what hair it works on, between-session rules.
 */

function uzBody(): string {
  return `Lazer epilyatsiyani boshlash uchun eng qulay vaqt — kuz va qish. Bu reklama emas, balki fizika va jadval masalasi: lazer quyoshda qoraygan terida xavfliroq, to'liq kurs esa bir necha oy davom etadi. Hozir boshlagan odam yozga kelib sochsiz, silliq teri bilan chiqadi.

## Nega aynan kuz–qish?

- **Teri qoraymagan.** Lazer nuri soch tarkibidagi pigmentga yo'naltiriladi. Teri quyoshda qoraygan bo'lsa, u ham nurni yutadi — kuyish va pigment dog'lari xavfi oshadi. Qishda teri tabiiy rangida, shuning uchun muolaja xavfsizroq va samaraliroq.
- **Quyosh kam.** Har bir muolajadan keyin 2–4 hafta davomida muolaja qilingan terini quyoshdan saqlash kerak. Qishda bunga rioya qilish oson.
- **Kurs yozgacha tugaydi.** Odatda 6–8 muolaja kerak, oralig'i 4–8 hafta (tana qismiga qarab). Noyabrda boshlangan kurs bahor oxirida yakunlanadi.

## Lazer epilyatsiya qanday ishlaydi?

Lazer nuri soch ildizidagi pigmentni qizdiradi va o'sish bosqichidagi follikulani shikastlaydi. Bir vaqtning o'zida faqat o'sayotgan sochlar ta'sirlanadi — shuning uchun bir nechta muolaja kerak. Klinikada [DEKA aleksandrit lazeri](/uz/services/apparatnaya-kosmetologiya/deka-alexandrite-laser) qo'llaniladi; u to'q sochlarda ayniqsa samarali.

**Muhim:** juda och (oq, kulrang, sarg'ish) sochlarda pigment kam, shuning uchun lazer ularga deyarli ta'sir qilmaydi. Buni shifokor konsultatsiyada oldindan aytadi.

## Muolajalar orasida qoidalar

- Sochni **ildizi bilan yulmang**: mum, shugaring, epilyator mumkin emas — lazer uchun ildiz kerak. Faqat ustara.
- Muolajadan 1–2 kun oldin sochni olib tashlang.
- Solyariy va avtozagardan voz keching.
- Muolajadan keyingi kunlarda sauna, hammom va issiq vannadan saqlaning.
- Yangi dori qabul qila boshlasangiz, shifokorga ayting — ba'zi dorilar terining yorug'likka sezgirligini oshiradi.

Tayyorgarlik haqida batafsil: [aleksandrit lazerda epilyatsiyaga tayyorgarlik](/uz/articles/art-deka-moveo-epilyatsiya-tayyorgarlik); keng tarqalgan xatolar: [lazer epilyatsiyadagi xatolar](/uz/articles/art-lazer-epilyatsiya-samara-xatolar).

## Kimlarga mumkin emas?

- homiladorlik va emizish davri;
- muolaja joyidagi faol yallig'lanish, yara yoki gerpes;
- yangi qoraygan teri;
- ba'zi kasalliklar va dorilar — shifokor konsultatsiyada baholaydi.

## Farg'ona va Qo'qonda lazer epilyatsiya

Radeski Skin Clinic'ning [lazer epilyatsiya bo'limida](/uz/services/lazernaya-epilyaciya) shifokor teri va soch turini baholaydi, kurs rejasini tuzadi va har bir muolajani teri holatiga qarab sozlaydi.

- [Lazer epilyatsiya Farg'onada](/uz/fargona/lazer-epilyatsiya) va [Qo'qonda](/uz/qoqon/lazer-epilyatsiya);
- ko'p beriladigan savollar: [DEKA Moveo: savol-javoblar](/uz/articles/art-deka-moveo-fergana-faq).

Yozda silliq teri istasangiz, kursni hozir boshlang: kuz–qish lazer epilyatsiya uchun eng to'g'ri mavsum.`;
}

function ruBody(): string {
  return `Лучшее время, чтобы начать лазерную эпиляцию, — осень и зима. Это не реклама, а вопрос физики и графика: лазер опаснее на загорелой коже, а полный курс длится несколько месяцев. Кто начинает сейчас, к лету получает гладкую кожу без волос.

## Почему именно осень–зима?

- **Кожа не загорелая.** Лазерный луч направлен на пигмент волоса. Если кожа загорела, она тоже поглощает свет — растёт риск ожога и пигментных пятен. Зимой кожа естественного цвета, поэтому процедура безопаснее и эффективнее.
- **Мало солнца.** После каждой процедуры обработанную кожу нужно 2–4 недели беречь от солнца. Зимой это сделать легко.
- **Курс закончится к лету.** Обычно нужно 6–8 процедур с интервалом 4–8 недель (в зависимости от зоны). Курс, начатый в ноябре, завершается к концу весны.

## Как работает лазерная эпиляция?

Лазерный луч нагревает пигмент в корне волоса и повреждает фолликул в фазе роста. Одновременно действует только на растущие волосы — поэтому нужно несколько процедур. В клинике используется [александритовый лазер DEKA](/ru/services/apparatnaya-kosmetologiya/deka-alexandrite-laser); он особенно эффективен на тёмных волосах.

**Важно:** у очень светлых (белых, седых, рыжеватых) волос мало пигмента, поэтому лазер на них почти не действует. Врач скажет об этом заранее на консультации.

## Правила между процедурами

- **Не удаляйте волосы с корнем**: воск, шугаринг, эпилятор нельзя — лазеру нужен корень. Только бритва.
- Побрейте зону за 1–2 дня до процедуры.
- Откажитесь от солярия и автозагара.
- В дни после процедуры избегайте сауны, бани и горячей ванны.
- Если начали принимать новое лекарство, скажите врачу — некоторые препараты повышают чувствительность кожи к свету.

Подробно о подготовке: [подготовка к эпиляции александритовым лазером](/ru/articles/art-deka-moveo-epilyatsiya-tayyorgarlik); частые ошибки: [ошибки при лазерной эпиляции](/ru/articles/art-lazer-epilyatsiya-samara-xatolar).

## Кому нельзя?

- беременность и кормление грудью;
- активное воспаление, рана или герпес в зоне процедуры;
- свежий загар;
- некоторые заболевания и лекарства — врач оценит на консультации.

## Лазерная эпиляция в Фергане и Коканде

В [отделении лазерной эпиляции](/ru/services/lazernaya-epilyaciya) Radeski Skin Clinic врач оценит тип кожи и волос, составит план курса и настроит каждую процедуру под состояние кожи.

- [Лазерная эпиляция в Фергане](/ru/fargona/lazer-epilyatsiya) и [в Коканде](/ru/qoqon/lazer-epilyatsiya);
- частые вопросы: [DEKA Moveo: вопросы и ответы](/ru/articles/art-deka-moveo-fergana-faq).

Хотите гладкую кожу летом — начинайте курс сейчас: осень и зима — правильный сезон для лазерной эпиляции.`;
}

function enBody(): string {
  return `The best time to start laser hair removal is autumn and winter. This is not marketing but physics and scheduling: lasers are riskier on tanned skin, and a full course takes several months. Start now and you will have smooth, hair-free skin by summer.

## Why autumn and winter?

- **No tan.** The laser targets the pigment in the hair. Tanned skin absorbs the light too, raising the risk of burns and pigment marks. In winter your skin is its natural colour, so treatment is safer and more effective.
- **Little sun.** After each session the treated skin must be kept out of the sun for 2–4 weeks — easy in winter.
- **The course ends before summer.** Usually 6–8 sessions are needed, 4–8 weeks apart depending on the area. A course started in November finishes by late spring.

## How does laser hair removal work?

The laser heats the pigment in the hair root and damages the follicle while it is growing. It only affects hairs in the growth phase at any one time — which is why several sessions are needed. The clinic uses a [DEKA alexandrite laser](/en/services/apparatnaya-kosmetologiya/deka-alexandrite-laser), which works especially well on dark hair.

**Important:** very light hair (white, grey, fair) has little pigment, so the laser barely affects it. The doctor will tell you this at the consultation.

## Rules between sessions

- **Do not pull hair out by the root**: no waxing, sugaring or epilators — the laser needs the root. Shaving only.
- Shave the area 1–2 days before a session.
- Avoid sunbeds and self-tan.
- Skip saunas, steam rooms and hot baths for a few days after a session.
- Tell the doctor if you start a new medicine — some make the skin more light-sensitive.

More on preparation: [preparing for alexandrite laser hair removal](/en/articles/art-deka-moveo-epilyatsiya-tayyorgarlik); common mistakes: [laser hair removal mistakes](/en/articles/art-lazer-epilyatsiya-samara-xatolar).

## Who should not have it?

- pregnancy and breastfeeding;
- active inflammation, a wound or cold sores in the area;
- a fresh tan;
- some conditions and medicines — the doctor assesses these at the consultation.

## Laser hair removal in Fergana and Kokand

In the Radeski Skin Clinic [laser hair removal department](/en/services/lazernaya-epilyaciya) the doctor assesses your skin and hair type, plans the course and adjusts every session to your skin.

- [Laser hair removal in Fergana](/en/fargona/lazer-epilyatsiya) and [in Kokand](/en/qoqon/lazer-epilyatsiya);
- common questions: [DEKA Moveo: Q&A](/en/articles/art-deka-moveo-fergana-faq).

Want smooth skin in summer? Start the course now: autumn and winter are the right season for laser hair removal.`;
}

export const LASER_HAIR_REMOVAL_SEASON_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Nega lazer epilyatsiyani kuz–qishda boshlash kerak: qoraymagan teri, kam quyosh, kurs yozgacha tugaydi. Qanday ishlaydi, muolajalar orasidagi qoidalar va qarshi ko'rsatmalar. Farg'ona va Qo'qonda.",
    body: uzBody(),
    keyTakeaways: [
      "Kuz–qish — lazer epilyatsiya uchun eng xavfsiz mavsum: teri qoraymagan",
      "Kurs 6–8 muolaja, oralig'i 4–8 hafta — noyabrda boshlansa yozgacha tugaydi",
      "Lazer to'q sochlarda samarali, juda och sochlarda deyarli ta'sir qilmaydi",
      "Muolajalar orasida faqat ustara: mum, shugaring va epilyator mumkin emas",
      "Muolajadan keyin 2–4 hafta quyosh va solyariydan saqlaning",
    ],
    tags: ['Lazer epilyatsiya', 'Aleksandrit lazer', 'DEKA Moveo', 'Kuz-qish', 'Kosmetologiya', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Lazer epilyatsiya kursini boshlamoqchi bo'lsangiz — konsultatsiya",
      "Muolajadan keyin qizarish 2–3 kundan ko'p davom etsa",
      "Muolaja joyida pufak yoki dog' paydo bo'lsa",
      "Ortiqcha tuk o'sishi to'satdan boshlansa — gormonlarni tekshirish kerak",
      "Yangi dori qabul qila boshlagan bo'lsangiz",
    ],
    faq: [
      {
        question: 'Lazer epilyatsiya necha muolaja kerak?',
        answer:
          "Odatda 6–8 muolaja, tana qismi, soch rangi va qalinligiga qarab. Muolajalar orasidagi interval 4–8 hafta. Aniq rejani shifokor konsultatsiyada tuzadi.",
      },
      {
        question: 'Yozda lazer epilyatsiya qilish mumkinmi?',
        answer:
          "Mumkin, lekin ehtiyotkorlik bilan: teri qoraymagan bo'lishi va muolajadan keyin quyoshdan qat'iy himoya qilinishi kerak. Shuning uchun kursni kuz–qishda boshlash qulayroq.",
      },
      {
        question: 'Lazer epilyatsiya og\'riqlimi?',
        answer:
          "Ko'pchilik engil sanchish yoki issiqlik his qiladi. Apparatda sovutish tizimi bor, sezgir joylarda shifokor qo'shimcha choralar ko'radi.",
      },
      {
        question: 'Och rangli sochlarni lazer bilan olib tashlash mumkinmi?',
        answer:
          "Juda och — oq, kulrang, sarg'ish sochlarda pigment kam, shuning uchun lazer ularga deyarli ta'sir qilmaydi. Shifokor konsultatsiyada natijani oldindan baholaydi.",
      },
      {
        question: "Farg'ona va Qo'qonda lazer epilyatsiyani qayerda qilish mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida DEKA aleksandrit lazeri bilan lazer epilyatsiya qilinadi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Почему лазерную эпиляцию лучше начинать осенью и зимой: нет загара, мало солнца, курс закончится к лету. Как работает, правила между процедурами и противопоказания. Фергана и Коканд.',
    body: ruBody(),
    keyTakeaways: [
      'Осень–зима — самый безопасный сезон для лазерной эпиляции: кожа не загорелая',
      'Курс — 6–8 процедур с интервалом 4–8 недель: начатый в ноябре закончится к лету',
      'Лазер эффективен на тёмных волосах и почти не действует на очень светлые',
      'Между процедурами — только бритва: воск, шугаринг и эпилятор нельзя',
      'После процедуры 2–4 недели избегайте солнца и солярия',
    ],
    tags: ['Лазерная эпиляция', 'Александритовый лазер', 'DEKA Moveo', 'Осень-зима', 'Косметология', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Хотите начать курс лазерной эпиляции — консультация',
      'Покраснение после процедуры держится больше 2–3 дней',
      'В зоне процедуры появились пузырь или пятно',
      'Внезапно начался избыточный рост волос — нужно проверить гормоны',
      'Вы начали принимать новое лекарство',
    ],
    faq: [
      {
        question: 'Сколько процедур лазерной эпиляции нужно?',
        answer:
          'Обычно 6–8 процедур в зависимости от зоны, цвета и толщины волос. Интервал между процедурами — 4–8 недель. Точный план врач составит на консультации.',
      },
      {
        question: 'Можно ли делать лазерную эпиляцию летом?',
        answer:
          'Можно, но с осторожностью: кожа должна быть без загара, а после процедуры нужна строгая защита от солнца. Поэтому курс удобнее начинать осенью и зимой.',
      },
      {
        question: 'Больно ли делать лазерную эпиляцию?',
        answer:
          'Большинство ощущает лёгкое покалывание или тепло. В аппарате есть система охлаждения, на чувствительных зонах врач принимает дополнительные меры.',
      },
      {
        question: 'Можно ли удалить лазером светлые волосы?',
        answer:
          'В очень светлых — белых, седых, рыжеватых волосах мало пигмента, поэтому лазер на них почти не действует. Врач заранее оценит результат на консультации.',
      },
      {
        question: 'Где сделать лазерную эпиляцию в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде лазерную эпиляцию проводят на александритовом лазере DEKA. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Why start laser hair removal in autumn and winter: no tan, little sun, the course ends before summer. How it works, rules between sessions and contraindications. Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Autumn–winter is the safest season for laser hair removal: no tan',
      'A course is 6–8 sessions, 4–8 weeks apart — started in November, done by summer',
      'The laser works on dark hair and barely affects very light hair',
      'Between sessions, shaving only: no waxing, sugaring or epilators',
      'Avoid sun and sunbeds for 2–4 weeks after a session',
    ],
    tags: ['Laser hair removal', 'Alexandrite laser', 'DEKA Moveo', 'Autumn-winter', 'Cosmetology', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'You want to start a laser hair removal course — consultation',
      'Redness after a session lasts more than 2–3 days',
      'A blister or mark appears in the treated area',
      'Sudden excess hair growth — hormones should be checked',
      'You have started a new medicine',
    ],
    faq: [
      {
        question: 'How many laser hair removal sessions are needed?',
        answer:
          'Usually 6–8, depending on the area and the colour and thickness of the hair, 4–8 weeks apart. The doctor builds the exact plan at the consultation.',
      },
      {
        question: 'Can I have laser hair removal in summer?',
        answer:
          'Yes, but with care: the skin must not be tanned and strict sun protection is needed afterwards. That is why autumn and winter are more convenient for starting a course.',
      },
      {
        question: 'Does laser hair removal hurt?',
        answer:
          'Most people feel a light snap or warmth. The device has a cooling system, and the doctor takes extra measures on sensitive areas.',
      },
      {
        question: 'Can a laser remove light-coloured hair?',
        answer:
          'Very light hair — white, grey or fair — has little pigment, so the laser barely affects it. The doctor will assess the likely result at the consultation.',
      },
      {
        question: 'Where can I have laser hair removal in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand laser hair removal is done with a DEKA alexandrite laser. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const LASER_HAIR_REMOVAL_SEASON_ARTICLE: Article = {
  id: 'art-lazer-epilyatsiya-kuz-qish',
  slug: 'lazer-epilyatsiya-kuz-qish',
  title: {
    uz: "Lazer epilyatsiya: nega kursni kuz–qishda boshlash kerak",
    ru: 'Лазерная эпиляция: почему курс лучше начинать осенью и зимой',
    en: 'Laser Hair Removal: Why Start Your Course in Autumn and Winter',
  },
  summary: {
    uz: LASER_HAIR_REMOVAL_SEASON_ARTICLE_CATALOG.uz.summary,
    ru: LASER_HAIR_REMOVAL_SEASON_ARTICLE_CATALOG.ru.summary,
    en: LASER_HAIR_REMOVAL_SEASON_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: LASER_HAIR_REMOVAL_SEASON_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: LASER_HAIR_REMOVAL_SEASON_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: LASER_HAIR_REMOVAL_SEASON_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Kamolova Barno',
    ru: 'Камолова Барно',
    en: 'Dr. Barno Kamolova',
  },
  date: '2026-11-18',
  image: '/articles/lazer-epilyatsiya-kuz-qish-cover.jpg',
  images: {
    uz: '/articles/lazer-epilyatsiya-kuz-qish-cover.jpg',
    ru: '/articles/lazer-epilyatsiya-kuz-qish-cover.jpg',
    en: '/articles/lazer-epilyatsiya-kuz-qish-cover.jpg',
  },
  views: 0,
};
