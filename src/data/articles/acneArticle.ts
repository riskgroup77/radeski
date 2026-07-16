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

function ruBodyAcne(): string {
  return `## Что такое акне?

Акне (угревая болезнь) — одно из самых распространённых хронических заболеваний кожи. Оно развивается из-за воспаления сальных желёз и волосяных фолликулов. Несмотря на то что многие считают акне исключительно подростковой проблемой, заболевание нередко встречается и у взрослых мужчин и женщин.

Без своевременного лечения акне может привести к образованию стойких рубцов (постакне), пигментных пятен и значительно снизить качество жизни человека.

## Почему появляется акне?

Развитие акне связано сразу с несколькими факторами.

### Повышенная выработка кожного сала

Под влиянием гормонов сальные железы начинают вырабатывать больше себума. Избыток кожного сала закупоривает поры и создаёт благоприятные условия для воспаления.

### Закупорка пор

Отмершие клетки кожи смешиваются с кожным салом и образуют плотные пробки, которые становятся причиной появления комедонов (чёрных и белых точек).

### Размножение бактерий

В закупоренных порах активно размножаются бактерии *Cutibacterium acnes*, что приводит к развитию воспаления и образованию болезненных прыщей.

### Гормональные изменения

Чаще всего акне развивается:

- в подростковом возрасте;
- во время беременности;
- при синдроме поликистозных яичников;
- перед менструацией;
- при некоторых эндокринных нарушениях.

### Наследственность

Если родители страдали тяжёлой формой акне, вероятность появления заболевания значительно выше.

### Дополнительные факторы

Обострение акне могут провоцировать:

- хронический стресс;
- недостаток сна;
- некоторые лекарственные препараты;
- неправильный уход за кожей;
- использование комедогенной косметики.

## Симптомы акне

Проявления заболевания могут быть различными:

- чёрные точки (открытые комедоны);
- белые подкожные комедоны;
- воспалённые красные прыщи;
- гнойнички;
- болезненные глубокие узлы;
- кисты;
- рубцы и пятна после высыпаний.

Акне чаще всего появляется на лице, спине, груди и плечах — именно там расположено наибольшее количество сальных желёз.

## Степени тяжести акне

### Лёгкая степень

Небольшое количество комедонов и единичные воспалительные элементы.

### Средняя степень

Множественные воспалительные высыпания, которые требуют комплексного лечения.

### Тяжёлая степень

Крупные болезненные узлы, кисты и высокий риск образования рубцов.

## Почему нельзя заниматься самолечением?

Самостоятельное использование антибиотиков, спиртовых растворов или агрессивных косметических средств редко приводит к выздоровлению. Напротив, неправильное лечение может усилить воспаление, нарушить защитный барьер кожи и привести к образованию рубцов.

Каждый случай акне требует индивидуального подхода, поэтому лечение должен подбирать врач-дерматолог.

## Современные методы лечения акне

Тактика лечения зависит от возраста пациента, степени тяжести заболевания и причин его возникновения.

В современной дерматологии применяются:

- профессиональный подбор домашнего ухода;
- наружные лекарственные препараты;
- системная терапия при среднетяжёлых и тяжёлых формах;
- лечение гормональных нарушений при наличии показаний;
- процедуры для уменьшения воспаления;
- лечение постакне;
- профилактика образования рубцов.

Для достижения стойкого результата важно не только устранить существующие высыпания, но и предотвратить появление новых.

## Нужно ли сдавать анализы?

Не каждому пациенту необходимы лабораторные исследования.

При необходимости врач может назначить:

- гормональное обследование;
- общий и биохимический анализ крови;
- оценку обмена веществ;
- консультацию эндокринолога или гинеколога.

Объём обследования определяется индивидуально после осмотра.

## Как ухаживать за кожей при акне?

При угревой болезни рекомендуется:

- очищать кожу мягкими средствами два раза в день;
- ежедневно использовать солнцезащитный крем;
- не выдавливать прыщи самостоятельно;
- пользоваться косметикой с пометкой «некомедогенно»;
- соблюдать рекомендации врача.

## Когда необходимо обратиться к дерматологу?

Запишитесь на консультацию, если:

- прыщи сохраняются более 2–3 месяцев;
- высыпания становятся болезненными;
- остаются рубцы или тёмные пятна;
- домашнее лечение не помогает;
- акне появилось во взрослом возрасте.

Раннее обращение к врачу позволяет быстрее добиться ремиссии и значительно снижает риск образования рубцов.

## Лечение акне в Radeski Skin Clinic

В Radeski Skin Clinic лечение акне начинается с тщательной диагностики кожи и определения причин заболевания. Наши специалисты подбирают индивидуальную схему терапии с учётом возраста пациента, типа кожи, степени тяжести акне и сопутствующих заболеваний.

Комплексный подход позволяет не только устранить воспалительные элементы, но и предупредить появление новых высыпаний, рубцов и пигментных пятен.

Если вас беспокоят прыщи или постакне, не откладывайте визит к дерматологу. Чем раньше начато лечение, тем выше вероятность сохранить кожу здоровой и избежать осложнений.`;
}

function uzBodyAcne(): string {
  return `## Akne nima?

Akne (ugrevaya kasallik) — terining eng keng tarqalgan surunkali kasalliklaridan biri. U yog' bezlari va soch folikullarining yallig'lanishi natijasida rivojlanadi. Ko'pchilik akneni faqat o'smirlik muammosi deb hisoblasa-da, kasallik kattalar erkak va ayollarda ham tez-tez uchraydi.

O'z vaqtida davolanmasa, akne doimiy chandiqlar (postakne), pigment dog'lari hosil bo'lishiga olib kelishi va hayot sifatini sezilarli darajada pasaytirishi mumkin.

## Nima uchun akne paydo bo'ladi?

Akne bir nechta omil bilan bog'liq rivojlanadi.

### Teri yog'ining ortiq ishlab chiqarilishi

Gormonlar ta'sirida yog' bezlari ko'proq sebum ajratadi. Teri yog'ining ortiqchiligi poralarni tiqib, yallig'lanish uchun qulay sharoit yaratadi.

### Poralar tiqilib qolishi

O'lik teri hujayralari teri yog'i bilan aralashib, komedonlar (qora va oq nuqtalar) paydo bo'lishiga sabab bo'ladigan mustahkam to'plamlar hosil qiladi.

### Bakteriyalar ko'payishi

Tiqilgan poralarda *Cutibacterium acnes* bakteriyalari faol ko'payadi. Bu yallig'lanish va og'riqli toshmachalarning paydo bo'lishiga olib keladi.

### Gormonal o'zgarishlar

Akne ko'pincha quyidagi holatlarda rivojlanadi:

- o'smirlik davrida;
- homiladorlik paytida;
- polikistoz tuxumdonlar sindromida;
- hayz oldidan oldin;
- ayrim endokrin kasalliklarda.

### Irsiy moyillik

Ota-onalarda og'ir akne bo'lgan bo'lsa, kasallik kelib chiqish ehtimoli sezilarli darajada yuqoriroq.

### Qo'shimcha omillar

Akne quyidagilar bilan kuchayishi mumkin:

- surunkali stress;
- uyqu yetishmovchiligi;
- ayrim dorilar;
- noto'g'ri teri parvarishi;
- komedogen kosmetikadan foydalanish.

## Akne belgilari

Kasallik turlicha namoyon bo'lishi mumkin:

- qora nuqtalar (ochiq komedonlar);
- oq, teri ostidagi komedonlar;
- qizargan yallig'langan toshmachalar;
- yiringli elementlar;
- og'riqli chuqur tugunlar;
- kistalar;
- toshma ketgach qoladigan chandiqlar va dog'lar.

Akne ko'pincha yuz, orqa, ko'krak va yelkalarda paydo bo'ladi — aynan shu joylarda yog' bezlari ko'proq joylashgan.

## Akne og'irlik darajalari

### Yengil daraja

Komedonlar soni kam va yallig'langan elementlar birma-bir uchraydi.

### O'rta daraja

Ko'plab yallig'langan toshmachalar bo'lib, kompleks davolash talab qilinadi.

### Og'ir daraja

Yirik, og'riqli tugunlar, kistalar va chandiq hosil bo'lish xavfi yuqori.

## Nega o'z-o'zidan davolash xavfli?

Antibiotiklar, spirtli eritmalar yoki agressiv kosmetik vositalarni mustaqil ishlatish ko'pincha yordam bermaydi. Aksincha, noto'g'ri davolash yallig'lanishni kuchaytirishi, terining himoya qatlamini buzishi va chandiqlar paydo bo'lishiga olib kelishi mumkin.

Har bir akne holati individual yondashuvni talab qiladi, shuning uchun davolashni dermatolog shifokor belgilashi kerak.

## Akneni davolashning zamonaviy usullari

Davolash taktikasi bemorni yoshi, kasallik og'irligi va paydo bo'lish sabablariga qarab tanlanadi.

Zamonaviy dermatologiyada quyidagilar qo'llaniladi:

- uy sharoitida parvarishni professional tanlash;
- mahalliy (narigi) dori preparatlari;
- o'rta va og'ir shakllarda tizimli terapiya;
- ko'rsatma bo'lsa, gormonal buzilishlarni tuzatish;
- yallig'lanishni kamaytiruvchi protseduralar;
- postakne davolashi;
- chandiq hosil bo'lishining oldini olish.

Barqaror natijaga erishish uchun mavjud toshmalarni yo'qotish bilan birga yangilarining paydo bo'lishini ham oldini olish muhim.

## Tahlillar topshirish kerakmi?

Har bir bemorga laboratoriya tekshiruvlari shart emas.

Kerak bo'lsa, shifokor quyidagilarni tayinlashi mumkin:

- gormonal tekshiruv;
- umumiy va biokimyoviy qon tahlili;
- moddalar almashinuvini baholash;
- endokrinolog yoki ginekolog maslahati.

Tekshiruv hajmi ko'rikdan keyin individual belgilanadi.

## Akne paytida teriga qanday parvarish qilish kerak?

Ugrevaya kasallikda tavsiya etiladi:

- terini kuniga ikki marta yumshoq vositalar bilan tozalash;
- har kuni quyoshdan himoya kremidan foydalanish;
- toshmalarni o'zingiz bosmaslik;
- «nekomedogen» belgisi bor kosmetikadan foydalanish;
- shifokor tavsiyalariga rioya qilish.

## Qachon dermatologga murojaat qilish kerak?

Quyidagi holatlarda konsultatsiyaga yoziling:

- toshmalar 2–3 oydan ko'proq saqlansa;
- toshmalar og'riqli bo'lib qolsa;
- chandiqlar yoki qorong'i dog'lar qolsa;
- uy sharoitidagi davolash yordam bermasa;
- akne kattalik yoshda paydo bo'lsa.

Shifokorga erta murojaat qilish remissiyaga tezroq erishish va chandiq xavfini sezilarli kamaytirish imkonini beradi.

## Radeski Skin Clinic'da akne davolashi

Radeski Skin Clinic'da akne davolashi terini sinchkov diagnostikasi va kasallik sabablarini aniqlashdan boshlanadi. Mutaxassislarimiz bemorni yoshi, teri turi, akne og'irligi va hamroh kasalliklarni hisobga olgan holda individual terapiya sxemasini tuzadi.

Kompleks yondashuv nafaqat yallig'langan elementlarni bartaraf etish, balki yangi toshmalar, chandiqlar va pigment dog'larining paydo bo'lishini ham oldini olish imkonini beradi.

Agar sizni toshmalar yoki postakne bezovta qilsa, dermatologga tashrifni kechiktirmang. Davolash qanchalik erta boshlansa, terini sog'lom saqlash va asoratlardan qochish ehtimoli shunchalik yuqori bo'ladi.`;
}

function enBodyAcne(): string {
  return `## What is acne?

Acne is one of the most common chronic skin conditions. It develops when sebaceous glands and hair follicles become inflamed. Although many people think of acne as a teenage problem only, it frequently affects adult men and women as well.

Without timely treatment, acne can lead to persistent scars (post-acne marks), pigmentation, and a noticeable decline in quality of life.

## Why does acne develop?

Acne is driven by several factors working together.

### Excess sebum production

Hormonal changes cause sebaceous glands to produce more sebum. Excess oil clogs pores and creates an environment where inflammation can take hold.

### Clogged pores

Dead skin cells mix with sebum and form plugs that appear as comedones (blackheads and whiteheads).

### Bacterial overgrowth

Inside blocked pores, *Cutibacterium acnes* bacteria multiply actively, triggering inflammation and painful breakouts.

### Hormonal shifts

Acne often appears:

- during adolescence;
- in pregnancy;
- with polycystic ovary syndrome;
- before menstruation;
- with certain endocrine disorders.

### Genetics

If parents had severe acne, the likelihood of developing the condition is significantly higher.

### Additional triggers

Flares may be provoked by:

- chronic stress;
- lack of sleep;
- certain medications;
- improper skincare;
- comedogenic cosmetics.

## Symptoms of acne

Signs can vary widely:

- blackheads (open comedones);
- whiteheads (closed comedones);
- inflamed red pimples;
- pustules;
- painful deep nodules;
- cysts;
- scars and dark marks after breakouts.

Acne most often affects the face, back, chest, and shoulders — areas with the highest concentration of sebaceous glands.

## Severity levels

### Mild

A small number of comedones and occasional inflammatory lesions.

### Moderate

Multiple inflamed breakouts that require comprehensive treatment.

### Severe

Large painful nodules, cysts, and a high risk of scarring.

## Why self-treatment is risky

Using antibiotics, alcohol-based solutions, or harsh cosmetic products on your own rarely leads to recovery. Incorrect treatment can worsen inflammation, damage the skin barrier, and cause scarring.

Every case of acne needs an individualized approach, so treatment should be prescribed by a dermatologist.

## Modern acne treatment options

The treatment plan depends on the patient's age, severity, and underlying causes.

Modern dermatology may include:

- professional selection of home skincare;
- topical medications;
- systemic therapy for moderate to severe cases;
- hormonal treatment when indicated;
- in-clinic procedures to reduce inflammation;
- post-acne treatment;
- scar prevention.

Lasting improvement requires clearing existing lesions and preventing new ones from forming.

## Do you need lab tests?

Not every patient needs laboratory workup.

When appropriate, your doctor may order:

- hormonal evaluation;
- complete and biochemical blood tests;
- metabolic assessment;
- referral to an endocrinologist or gynecologist.

The scope of testing is determined individually after examination.

## Skincare tips for acne-prone skin

Recommended habits include:

- cleansing gently twice daily;
- using sunscreen every day;
- avoiding squeezing pimples;
- choosing products labeled non-comedogenic;
- following your doctor's recommendations.

## When should you see a dermatologist?

Book a consultation if:

- breakouts last more than 2–3 months;
- lesions become painful;
- scars or dark spots remain;
- home treatment is not helping;
- acne appears in adulthood.

Early medical care helps achieve remission faster and significantly lowers the risk of scarring.

## Acne treatment at Radeski Skin Clinic

At Radeski Skin Clinic, acne care begins with thorough skin assessment and identifying the root causes. Our specialists build an individualized treatment plan based on age, skin type, acne severity, and any co-existing conditions.

A comprehensive approach helps clear active inflammation and helps prevent new breakouts, scars, and pigmentation.

If pimples or post-acne marks concern you, do not delay a dermatology visit. The earlier treatment starts, the better the chance of keeping skin healthy and avoiding complications.`;
}

export const ACNE_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Akne nima uchun paydo bo'lishi, qanday belgilar bilan namoyon bo'lishi va zamonaviy dermatologiyada qanday davolanishini bilib oling. Radeski Skin Clinic mutaxassislari individual yondashuv haqida.",
    body: uzBodyAcne(),
    keyTakeaways: [
      "Akne — surunkali kasallik; o'z-o'zidan davolash ko'pincha yallig'lanishni kuchaytiradi",
      'Gormonlar, poralar tiqilishi va bakteriyalar asosiy sabablar qatorida',
      'Og\'irlik darajasiga qarab mahalliy yoki tizimli terapiya tanlanadi',
      'Erta dermatolog murojaati chandiq va postakne xavfini kamaytiradi',
    ],
    tags: ['Akne', 'Postakne', 'Dermatologiya', 'Teri parvarishi'],
    whenToSeeDoctor: [
      'Toshmalar 2–3 oydan ko\'proq saqlansa',
      'Toshmalar og\'riqli bo\'lib qolsa',
      'Chandiqlar yoki qorong\'i dog\'lar qolsa',
      'Uy sharoitidagi davolash yordam bermasa',
      'Akne kattalik yoshda paydo bo\'lsa',
    ],
    faq: [
      {
        question: 'Akne faqat o\'smirlarda bo\'ladimi?',
        answer:
          'Yo\'q. Akne kattalar ayol va erkaklarda ham, ayniqsa gormonal o\'zgarishlar fonida tez-tez uchraydi.',
      },
      {
        question: 'Toshmalarni bosish mumkinmi?',
        answer:
          'Tavsiya etilmaydi. Bu yallig\'lanishni kuchaytiradi, infeksiya va chandiq xavfini oshiradi.',
      },
      {
        question: 'Akne butunlay davolanadimi?',
        answer:
          'Ko\'pgina holatlarda toshmalar to\'liq tozalanadi va uzoq remissiya saqlanadi, lekin davolash individual reja asosida olib boriladi.',
      },
    ],
  },
  ru: {
    summary:
      'Узнайте, почему появляется акне, как распознать его симптомы и степень тяжести, и какие современные методы лечения применяются в дерматологии. Индивидуальный подход специалистов Radeski Skin Clinic.',
    body: ruBodyAcne(),
    keyTakeaways: [
      'Акне — хроническое заболевание; самолечение часто усиливает воспаление',
      'Гормоны, закупорка пор и бактерии — ключевые факторы развития',
      'Терапия подбирается по степени тяжести: наружная или системная',
      'Раннее обращение к дерматологу снижает риск рубцов и постакне',
    ],
    tags: ['Акне', 'Постакне', 'Дерматология', 'Уход за кожей'],
    whenToSeeDoctor: [
      'Прыщи сохраняются более 2–3 месяцев',
      'Высыпания становятся болезненными',
      'Остаются рубцы или тёмные пятна',
      'Домашнее лечение не помогает',
      'Акне появилось во взрослом возрасте',
    ],
    faq: [
      {
        question: 'Акне бывает только у подростков?',
        answer:
          'Нет. Акне часто встречается и у взрослых мужчин и женщин, особенно на фоне гормональных изменений.',
      },
      {
        question: 'Можно ли выдавливать прыщи?',
        answer:
          'Не рекомендуется. Это усиливает воспаление и повышает риск инфекции и рубцов.',
      },
      {
        question: 'Можно ли полностью вылечить акне?',
        answer:
          'Во многих случаях высыпания полностью очищаются и длительная ремиссия достижима, но лечение всегда подбирается индивидуально.',
      },
    ],
  },
  en: {
    summary:
      'Learn why acne develops, how to recognize symptoms and severity, and which modern dermatology treatments are available. Individual care from Radeski Skin Clinic specialists.',
    body: enBodyAcne(),
    keyTakeaways: [
      'Acne is chronic; self-treatment often worsens inflammation',
      'Hormones, clogged pores, and bacteria are key drivers',
      'Therapy is tailored by severity: topical or systemic options',
      'Early dermatology care lowers scarring and post-acne risk',
    ],
    tags: ['Acne', 'Post-acne', 'Dermatology', 'Skincare'],
    whenToSeeDoctor: [
      'Breakouts last more than 2–3 months',
      'Lesions become painful',
      'Scars or dark spots remain',
      'Home treatment is not helping',
      'Acne appears in adulthood',
    ],
    faq: [
      {
        question: 'Is acne only a teenage condition?',
        answer:
          'No. Acne is common in adult men and women too, especially with hormonal changes.',
      },
      {
        question: 'Is it okay to squeeze pimples?',
        answer:
          'It is not recommended. Squeezing increases inflammation and the risk of infection and scars.',
      },
      {
        question: 'Can acne be fully treated?',
        answer:
          'In many cases breakouts clear completely and long remission is achievable, but treatment is always individualized.',
      },
    ],
  },
};

export const ACNE_ARTICLE: Article = {
  id: 'art-akne',
  slug: 'akne',
  title: {
    uz: 'Akne: sabablar, belgilar va zamonaviy davolash usullari',
    ru: 'Акне: причины, симптомы и современные методы лечения',
    en: 'Acne: Causes, Symptoms, and Modern Treatment Options',
  },
  summary: {
    uz: ACNE_ARTICLE_CATALOG.uz.summary,
    ru: ACNE_ARTICLE_CATALOG.ru.summary,
    en: ACNE_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: ACNE_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: ACNE_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: ACNE_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-07-11',
  image: '/karusel/karbon-peeling.jpeg',
  images: {
    uz: '/karusel/karbon-peeling.jpeg',
    ru: '/karusel/karbon-peeling.jpeg',
    en: '/karusel/karbon-peeling.jpeg',
  },
  views: 0,
};
