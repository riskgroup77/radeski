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
 * Botox or filler: two different tools — one relaxes muscles behind expression lines, the other
 * fills lost volume. Which problem needs which, when both are combined, how long each lasts,
 * what each cannot do, safety (doctor, certified products, reversibility of HA fillers).
 * Clinic facts: botulinum and filler articles, price list products, Dr. Mangasaryan's profile.
 */

const COVER = {
  uz: '/articles/botoks-yoki-filler-cover-uz.jpg',
  ru: '/articles/botoks-yoki-filler-cover-ru.jpg',
  en: '/articles/botoks-yoki-filler-cover-en.jpg',
};

function uzBody(): string {
  return `«Botoks qildirsammi yoki filler?» — kosmetologga eng ko‘p beriladigan savollardan biri. Ikkalasi ham inyeksiya, ikkalasi ham yuzni yoshroq ko‘rsatadi, lekin ular **butunlay boshqa ishni** bajaradi. Noto‘g‘ri tanlov natija bermaydi yoki yuzni g‘ayritabiiy qiladi. Quyida farqini oddiy qilib tushuntiramiz.

## Botoks nima qiladi?

**Botoks (botulinoterapiya)** — A tipidagi botulotoksin preparati mimik mushakka kiritiladi va uni vaqtincha bo‘shashtiradi. Mushak kamroq qisqarsa, uning ustidagi teri burishmaydi — **mimik ajin** tekislanadi.

Botoks yaxshi ishlaydigan joylar:

- peshonadagi gorizontal ajinlar;
- qoshlar orasidagi vertikal chiziqlar;
- ko‘z atrofidagi «o‘rdak oyoqlari»;
- tushgan lab burchaklari, bo‘yin chiziqlari;
- ortiqcha terlash (giperhidroz).

Ta’sir taxminan bir haftada boshlanadi, yakuniy natija 2 haftada ko‘rinadi va **3–8 oy** saqlanadi.

## Filler nima qiladi?

**Filler (kontur plastika)** — gialuron kislotasi asosidagi zich gel. U mushakka ta’sir qilmaydi, balki **yo‘qolgan hajmni to‘ldiradi** va shakl beradi.

Filler yaxshi ishlaydigan joylar:

- lab hajmi va konturi;
- nazolabial chiziqlar va tushgan burchaklar;
- yonoq, iyak va yuz ovali;
- yoshga bog‘liq hajm yo‘qolishi va asimmetriya.

Natija **darhol** ko‘rinadi va preparat hamda zonaga qarab **6–12 oy** saqlanadi.

## Qanday ajratish mumkin: oddiy test

- Ajin **faqat mimika paytida** ko‘rinadimi (qoshni ko‘targanda, kulganda)? — bu ko‘pincha **botoks** vazifasi.
- Ajin yoki chuqurcha **yuz tinch turganda ham** bormi, hajm yo‘qolganmi? — bu ko‘pincha **filler** vazifasi.
- Ikkalasi ham bormi? — ko‘pincha ikkalasi **birga rejalashtiriladi**.

Bu test faqat yo‘nalish beradi — aniq qarorni shifokor yuzni tinch holatda va mimika paytida ko‘rib chiqib qabul qiladi.

## Ikkalasi nima qila olmaydi

- Botoks hajm qo‘shmaydi va chuqur statik ajinni to‘liq yo‘qotmaydi.
- Filler mimik mushakni bo‘shashtirmaydi — peshona ajinlarini filler bilan «to‘ldirish» ko‘pincha noto‘g‘ri tanlov.
- Teri sifati — quruqlik, xiralik, mayda ajinlar — uchun ko‘pincha **biorevitalizatsiya** yoki lazer kerak bo‘ladi.

## Xavfsizlik

- Inyeksiyani faqat **shifokor**, sertifikatlangan preparat bilan bajarishi kerak.
- Gialuron filler **qaytariladi**: kerak bo‘lsa, u gialuronidaza fermenti bilan eritiladi.
- Homiladorlik, emizish, yuzdagi yallig‘lanish yoki gerpes, ayrim kasalliklarda muolaja qilinmaydi yoki keyinga suriladi.

## Radeski’da

Botulinoterapiya va kontur plastikani shifokor-kosmetolog **Mangasaryan Lorena Georgievna** bajaradi: mimik ajinlar korreksiyasi, lab va yuz konturi, kompleks Full Face rejasi. Preparatlar — Dysport, Relatoks, Kseomin; fillerlar — Juvederm va TEOSYAL.

Batafsil: [Botoks Farg‘onada](/uz/fargona/botoks), [Kontur plastika Farg‘onada](/uz/fargona/kontur-plastika), [Botulinoterapiya](/uz/articles/art-botulinoterapiya-radeski), [Kontur plastika](/uz/articles/art-kontur-plastika-radeski).`;
}

function ruBody(): string {
  return `«Сделать ботокс или филлер?» — один из самых частых вопросов косметологу. Оба — инъекции, оба омолаживают лицо, но выполняют **совершенно разную задачу**. Неправильный выбор не даст результата или сделает лицо неестественным. Объясняем разницу просто.

## Что делает ботокс?

**Ботокс (ботулинотерапия)** — препарат ботулотоксина типа А вводят в мимическую мышцу, и она временно расслабляется. Мышца меньше сокращается — кожа над ней не собирается в складку, и **мимическая морщина** разглаживается.

Где ботокс работает хорошо:

- горизонтальные морщины лба;
- вертикальные складки между бровями;
- «гусиные лапки» вокруг глаз;
- опущенные уголки рта, морщины шеи;
- повышенная потливость (гипергидроз).

Действие начинается примерно через неделю, итог виден через 2 недели и держится **3–8 месяцев**.

## Что делает филлер?

**Филлер (контурная пластика)** — плотный гель на основе гиалуроновой кислоты. Он не действует на мышцу, а **восполняет утраченный объём** и придаёт форму.

Где филлер работает хорошо:

- объём и контур губ;
- носогубные складки и опущенные уголки;
- скулы, подбородок и овал лица;
- возрастная потеря объёма и асимметрия.

Результат виден **сразу** и держится **6–12 месяцев** в зависимости от препарата и зоны.

## Как различить: простой тест

- Морщина видна **только при мимике** (когда поднимаете брови, улыбаетесь)? — чаще задача для **ботокса**.
- Морщина или впадина есть **и в покое**, ушёл объём? — чаще задача для **филлера**.
- Есть и то и другое? — их часто **планируют вместе**.

Тест даёт только направление — точное решение врач принимает, осмотрев лицо в покое и в движении.

## Чего они не умеют

- Ботокс не добавляет объём и не убирает полностью глубокую статическую морщину.
- Филлер не расслабляет мышцу — «заполнять» филлером морщины лба часто неверный выбор.
- Для качества кожи — сухости, тусклости, мелких морщин — чаще нужна **биоревитализация** или лазер.

## Безопасность

- Инъекции должен делать только **врач** сертифицированным препаратом.
- Гиалуроновый филлер **обратим**: при необходимости его растворяют гиалуронидазой.
- При беременности, грудном вскармливании, воспалении или герпесе на лице и некоторых заболеваниях процедуру не проводят или откладывают.

## В Radeski

Ботулинотерапию и контурную пластику проводит врач-косметолог **Мангасарян Лорена Георгиевна**: коррекция мимических морщин, контур губ и лица, комплексный план Full Face. Препараты — Dysport, Релатокс, Ксеомин; филлеры — Juvederm и TEOSYAL.

Подробнее: [Ботокс в Фергане](/ru/fargona/botoks), [Контурная пластика в Фергане](/ru/fargona/kontur-plastika), [Ботулинотерапия](/ru/articles/art-botulinoterapiya-radeski), [Контурная пластика](/ru/articles/art-kontur-plastika-radeski).`;
}

function enBody(): string {
  return `“Should I get Botox or a filler?” is one of the questions cosmetologists hear most. Both are injections and both make the face look younger, but they do **completely different jobs**. The wrong choice gives no result or an unnatural face. Here is the difference in plain terms.

## What Botox does

**Botox (botulinum therapy)** places a type A botulinum toxin product into an expression muscle and relaxes it for a while. When the muscle contracts less, the skin above it does not crease — the **expression line** smooths out.

Where Botox works well:

- horizontal forehead lines;
- vertical frown lines between the brows;
- crow’s feet around the eyes;
- drooping mouth corners and neck lines;
- excessive sweating (hyperhidrosis).

It starts working after about a week, the result is assessed at 2 weeks and lasts **3–8 months**.

## What a filler does

A **filler (dermal filler)** is a dense hyaluronic acid gel. It does not act on muscles; it **replaces lost volume** and adds shape.

Where fillers work well:

- lip volume and outline;
- nasolabial folds and drooping corners;
- cheeks, chin and jawline;
- age-related volume loss and asymmetry.

The result is **immediate** and lasts **6–12 months** depending on the product and area.

## How to tell: a simple test

- Is the line visible **only when you move** your face (raising brows, smiling)? — usually a job for **Botox**.
- Is the line or hollow there **even at rest**, has volume gone? — usually a job for a **filler**.
- Both? — they are often **planned together**.

The test only points the way — the doctor decides after looking at your face at rest and in motion.

## What they cannot do

- Botox adds no volume and does not fully erase deep static lines.
- A filler does not relax muscles — “filling” forehead lines is often the wrong choice.
- For skin quality — dryness, dullness, fine lines — **biorevitalization** or laser is often needed.

## Safety

- Injections should be done only by a **doctor** with certified products.
- A hyaluronic filler is **reversible**: if needed it is dissolved with hyaluronidase.
- Pregnancy, breastfeeding, facial inflammation or cold sores and some illnesses mean the treatment is not done or is postponed.

## At Radeski

Botulinum therapy and fillers are done by cosmetologist **Dr. Lorena Georgievna Mangasaryan**: expression-line correction, lip and facial contouring, full-face plans. Products — Dysport, Relatox, Xeomin; fillers — Juvederm and TEOSYAL.

Read more: [Botox in Fergana](/en/fargona/botoks), [Dermal fillers in Fergana](/en/fargona/kontur-plastika), [Botulinum therapy](/en/articles/art-botulinoterapiya-radeski), [Dermal fillers](/en/articles/art-kontur-plastika-radeski).`;
}

export const BOTOX_OR_FILLER_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Botoks yoki filler: farqi nimada, qaysi ajin va qaysi muammoga qaysi biri kerak, qachon birga qilinadi, natija qancha saqlanadi. Radeski — Farg'ona.",
    body: uzBody(),
    keyTakeaways: [
      'Botoks mushakni bo‘shashtirib mimik ajinni tekislaydi',
      'Filler gialuron kislotasi bilan yo‘qolgan hajmni to‘ldiradi',
      'Faqat mimikada ko‘rinadigan ajin — ko‘pincha botoks; tinch holatda ham — ko‘pincha filler',
      'Botoks 3–8 oy, filler 6–12 oy saqlanadi',
      'Gialuron filler qaytariladi — gialuronidaza bilan eritiladi',
    ],
    tags: ['Botoks', 'Filler', 'Kontur plastika', 'Botulinoterapiya', 'Mimik ajinlar', 'Kosmetolog', "Farg'ona", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Inyeksiyadan keyin kuchli og‘riq, oqarish yoki teri rangi o‘zgardi',
      'Ko‘z qovog‘i tushdi yoki ko‘rish o‘zgardi',
      'Filler joyida qattiq, og‘riqli shish paydo bo‘ldi',
      'Boshqa joyda qilingan muolaja natijasi sizni qoniqtirmayapti',
    ],
    faq: [
      {
        question: 'Botoks va fillerni bir kunda qilsa bo‘ladimi?',
        answer:
          'Ko‘p hollarda ha — ular turli muammoni hal qiladi va bitta rejada birlashtiriladi. Ketma-ketlik va muddatni shifokor yuz holatiga qarab belgilaydi.',
      },
      {
        question: 'Qaysi biri uzoqroq saqlanadi?',
        answer:
          'Botoks odatda 3–8 oy, gialuron filler 6–12 oy saqlanadi. Muddat preparat, zona va metabolizmga bog‘liq.',
      },
      {
        question: 'Peshona ajinlariga filler qilsa bo‘ladimi?',
        answer:
          'Peshona ajinlari ko‘pincha mimik — ular uchun botoks to‘g‘riroq. Filler hajm yo‘qolgan joylar uchun ishlatiladi. Aniq tanlovni shifokor beradi.',
      },
      {
        question: 'Natija tabiiy ko‘rinadimi?',
        answer:
          'Ha, agar doza va nuqtalar to‘g‘ri tanlansa. Maqsad — yuz ifodasini o‘chirish emas, ajin va hajmni yumshoq tuzatish.',
      },
    ],
  },
  ru: {
    summary:
      'Ботокс или филлер: в чём разница, какой морщине и проблеме что нужно, когда их сочетают, сколько держится эффект. Radeski — Фергана.',
    body: ruBody(),
    keyTakeaways: [
      'Ботокс расслабляет мышцу и разглаживает мимическую морщину',
      'Филлер восполняет утраченный объём гиалуроновой кислотой',
      'Морщина только при мимике — чаще ботокс; и в покое — чаще филлер',
      'Ботокс держится 3–8 месяцев, филлер — 6–12 месяцев',
      'Гиалуроновый филлер обратим — его растворяют гиалуронидазой',
    ],
    tags: ['Ботокс', 'Филлер', 'Контурная пластика', 'Ботулинотерапия', 'Мимические морщины', 'Косметолог', 'Фергана', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'После инъекции сильная боль, побледнение или изменение цвета кожи',
      'Опустилось веко или изменилось зрение',
      'На месте филлера плотный болезненный отёк',
      'Результат процедуры в другом месте вас не устраивает',
    ],
    faq: [
      {
        question: 'Можно ли сделать ботокс и филлер в один день?',
        answer:
          'Часто да — они решают разные задачи и объединяются в один план. Последовательность и сроки врач определяет по состоянию лица.',
      },
      {
        question: 'Что держится дольше?',
        answer:
          'Ботокс обычно 3–8 месяцев, гиалуроновый филлер — 6–12 месяцев. Срок зависит от препарата, зоны и обмена веществ.',
      },
      {
        question: 'Можно ли убрать морщины лба филлером?',
        answer:
          'Морщины лба чаще мимические — для них правильнее ботокс. Филлер используют там, где ушёл объём. Точный выбор сделает врач.',
      },
      {
        question: 'Будет ли результат естественным?',
        answer:
          'Да, если правильно подобраны дозы и точки. Цель — не убрать мимику, а мягко скорректировать морщины и объём.',
      },
    ],
  },
  en: {
    summary:
      'Botox or filler: the difference, which line and problem needs which, when they are combined and how long each lasts. Radeski — Fergana.',
    body: enBody(),
    keyTakeaways: [
      'Botox relaxes the muscle and smooths expression lines',
      'A filler replaces lost volume with hyaluronic acid',
      'Lines only when moving — usually Botox; also at rest — usually a filler',
      'Botox lasts 3–8 months, a filler 6–12 months',
      'Hyaluronic fillers are reversible with hyaluronidase',
    ],
    tags: ['Botox', 'Filler', 'Dermal fillers', 'Botulinum therapy', 'Expression lines', 'Cosmetologist', 'Fergana', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Severe pain, blanching or a skin colour change after an injection',
      'An eyelid droops or your vision changes',
      'A hard, painful swelling appears where a filler was placed',
      'You are unhappy with a treatment done elsewhere',
    ],
    faq: [
      {
        question: 'Can Botox and a filler be done on the same day?',
        answer:
          'Often yes — they solve different problems and are combined in one plan. The doctor decides the order and timing based on your face.',
      },
      {
        question: 'Which lasts longer?',
        answer:
          'Botox usually lasts 3–8 months and a hyaluronic filler 6–12 months, depending on the product, area and metabolism.',
      },
      {
        question: 'Can forehead lines be treated with a filler?',
        answer:
          'Forehead lines are usually expression lines, so Botox is the better fit. Fillers are used where volume has been lost. The doctor makes the final choice.',
      },
      {
        question: 'Will it look natural?',
        answer:
          'Yes, when doses and points are chosen well. The aim is not to erase expression but to gently correct lines and volume.',
      },
    ],
  },
};

export const BOTOX_OR_FILLER_ARTICLE: Article = {
  id: 'art-botoks-yoki-filler',
  slug: 'botoks-yoki-filler',
  title: {
    uz: 'Botoks yoki filler: farqi nimada va sizga qaysi biri kerak',
    ru: 'Ботокс или филлер: в чём разница и что нужно именно вам',
    en: 'Botox or Filler: What Is the Difference and Which One Do You Need',
  },
  summary: {
    uz: BOTOX_OR_FILLER_ARTICLE_CATALOG.uz.summary,
    ru: BOTOX_OR_FILLER_ARTICLE_CATALOG.ru.summary,
    en: BOTOX_OR_FILLER_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: BOTOX_OR_FILLER_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: BOTOX_OR_FILLER_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: BOTOX_OR_FILLER_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Mangasaryan Lorena Georgievna',
    ru: 'Мангасарян Лорена Георгиевна',
    en: 'Dr. Lorena Georgievna Mangasaryan',
  },
  date: '2026-11-12',
  image: COVER.uz,
  images: COVER,
  views: 0,
};
