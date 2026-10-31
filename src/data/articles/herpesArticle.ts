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
 * Herpes (cold sores) — a common autumn/winter question. Covers how the virus works, the stages
 * of a cold sore, contagiousness, early antiviral treatment, frequent recurrences, and the
 * urgent cases: eye involvement, eczema herpeticum, shingles, newborns and pregnancy.
 */

function uzBody(): string {
  return `Gerpes — oddiy gerpes virusi chaqiradigan kasallik. Eng ko'p uchraydigan ko'rinishi — labda yoki uning atrofida paydo bo'ladigan og'riqli pufakchalar, xalq orasida "lab uchug'i" yoki "shamollash" deyiladi. Virus bilan dunyo aholisining ko'pchiligi zararlangan, lekin har kimda ham toshma chiqavermaydi. Kuz va qishda, shamollash mavsumida gerpes tez-tez qaytadi.

## Gerpes qanday ishlaydi?

Birinchi marta yuqqandan keyin virus organizmdan chiqib ketmaydi — u nerv tugunlarida "uxlab" yotadi. Immunitet zaiflashganda u faollashadi va o'sha joyda yana toshma chiqaradi. Gerpesni qo'zg'atadigan omillar:

- shamollash, gripp, isitma;
- sovuq qotish yoki, aksincha, kuchli quyosh;
- stress, charchoq, uyqu yetishmasligi;
- hayz davri;
- lab shikastlanishi, stomatologik muolajalar;
- immunitetni pasaytiradigan kasalliklar va dorilar.

## Lab gerpesining bosqichlari

1. **Ogohlantiruvchi bosqich** — lab chetida qichishish, achishish, sanchish (bir necha soatdan 1 kungacha).
2. **Pufakchalar** — suyuqlikli mayda pufakchalar to'plami, og'riqli.
3. **Yorilish** — pufakchalar yorilib, nam yaracha hosil bo'ladi; bu eng yuqumli davr.
4. **Qobiq** — yaracha qobiq bilan qoplanadi va odatda 7–10 kunda iz qoldirmay bitadi.

## Gerpes yuqumlimi?

Ha, ayniqsa pufakcha va yaracha davrida. Virus o'pish, umumiy idish, sochiq, lab bo'yog'i va qo'l orqali yuqadi. Toshma bo'lganda:

- o'pishmang va umumiy idishdan foydalanmang;
- toshmaga tegmang, tegsangiz qo'lni yuving — virusni ko'zga o'tkazish xavfli;
- pufakchalarni yormang va qobiqni ko'chirmang;
- **chaqaloqlarni o'pmang** — ular uchun gerpes juda xavfli.

## Qanday davolanadi?

- **Virusga qarshi vositalar** — krem yoki tabletkalar; ularni shifokor tayinlaydi. Eng yaxshi natija davolash **birinchi belgilarda** — qichishish va sanchish bosqichida boshlanganda bo'ladi.
- Og'riq va yallig'lanishni kamaytiruvchi vositalar — shifokor tavsiyasi bilan.
- Lab terisini yumshatuvchi balzam, qobiq bosqichida.

Gerpes yiliga ko'p marta (6 martadan ortiq) qaytsa yoki toshma uzoq bitmasa, shifokor qo'zg'atuvchi omillarni va immunitet holatini tekshiradi va qaytalanishning oldini olish rejasini tavsiya qiladi.

Qishda lablarning qurishi va yorilishi ham gerpesni qo'zg'atishi mumkin: lab parvarishi haqida [qishki teri parvarishi](/uz/articles/art-qishda-teri-parvarishi) maqolasida.

## Qachon zudlik bilan shifokorga borish kerak?

- toshma **ko'z yaqinida** bo'lsa, ko'z qizarsa, og'risa yoki ko'rish yomonlashsa — oftalmologga zudlik bilan;
- **atopik dermatit** yoki ekzemasi bor odamda keng tarqalgan og'riqli pufakchalar paydo bo'lsa;
- tananing bir tomonida tasma shaklida og'riqli pufakchalar chiqsa — bu **belbog'simon temiratki** (opoyasyvayushchiy lishay) bo'lishi mumkin, uni birinchi 72 soatda davolash muhim;
- yuqori isitma, kuchli holsizlik bo'lsa;
- homiladorlikda yoki chaqaloqda toshma bo'lsa;
- immuniteti pasaygan odamda.

Jinsiy a'zolardagi gerpesni dermatovenerolog tekshiradi va davolaydi — qabul maxfiy.

## Farg'ona va Qo'qonda gerpesni davolash

Radeski Skin Clinic'da [dermatovenerolog](/uz/services/dermatologiya) toshmani ko'zdan kechiradi, gerpesni boshqa kasalliklardan ajratadi, davolashni tayinlaydi va tez-tez qaytadigan gerpesda qaytalanishning oldini olish rejasini tuzadi.

- [Dermatolog Farg'onada](/uz/fargona/dermatolog);
- [Dermatolog Qo'qonda](/uz/qoqon/dermatolog).

Gerpesni qancha erta davolasangiz, toshma shuncha kichik bo'ladi va tezroq o'tadi: birinchi sanchishni sezganingizda harakat qiling.`;
}

function ruBody(): string {
  return `Герпес — заболевание, которое вызывает вирус простого герпеса. Самое частое его проявление — болезненные пузырьки на губе или вокруг неё, в народе «простуда на губах». Вирусом заражено большинство людей в мире, но высыпания бывают не у всех. Осенью и зимой, в сезон простуд, герпес возвращается особенно часто.

## Как работает герпес?

После первого заражения вирус не покидает организм — он «спит» в нервных узлах. Когда иммунитет ослабевает, вирус активируется и снова вызывает высыпания на том же месте. Обострение провоцируют:

- простуда, грипп, температура;
- переохлаждение или, наоборот, сильное солнце;
- стресс, усталость, недосып;
- менструация;
- травма губы, стоматологические процедуры;
- болезни и лекарства, снижающие иммунитет.

## Стадии герпеса на губах

1. **Предвестники** — зуд, жжение, покалывание на краю губы (от нескольких часов до суток).
2. **Пузырьки** — группа мелких пузырьков с жидкостью, болезненных.
3. **Вскрытие** — пузырьки лопаются, образуется мокнущая ранка; это самый заразный период.
4. **Корочка** — ранка покрывается корочкой и обычно заживает без следа за 7–10 дней.

## Заразен ли герпес?

Да, особенно на стадии пузырьков и ранок. Вирус передаётся при поцелуе, через общую посуду, полотенце, помаду и руки. Пока есть высыпания:

- не целуйтесь и не пользуйтесь общей посудой;
- не трогайте высыпания, а если коснулись — вымойте руки: перенести вирус в глаз опасно;
- не вскрывайте пузырьки и не сдирайте корочку;
- **не целуйте новорождённых** — для них герпес очень опасен.

## Как лечат герпес?

- **Противовирусные средства** — крем или таблетки; их назначает врач. Лучший результат — когда лечение начато **при первых признаках**, на стадии зуда и покалывания.
- Средства, уменьшающие боль и воспаление, — по рекомендации врача.
- Смягчающий бальзам для губ на стадии корочки.

Если герпес возвращается много раз в год (чаще 6 раз) или высыпания долго не заживают, врач проверит провоцирующие факторы и состояние иммунитета и посоветует, как предотвращать рецидивы.

Зимой сухость и трещины губ тоже провоцируют герпес: об уходе за губами — в статье [уход за кожей зимой](/ru/articles/art-qishda-teri-parvarishi).

## Когда срочно к врачу?

- высыпания **рядом с глазом**, глаз покраснел, болит или ухудшилось зрение — срочно к офтальмологу;
- у человека с **атопическим дерматитом** или экземой появились распространённые болезненные пузырьки;
- на одной стороне тела полосой появились болезненные пузырьки — это может быть **опоясывающий лишай**, его важно лечить в первые 72 часа;
- высокая температура, сильная слабость;
- высыпания при беременности или у младенца;
- у человека со сниженным иммунитетом.

Герпес на половых органах обследует и лечит дерматовенеролог — приём конфиденциальный.

## Лечение герпеса в Фергане и Коканде

В Radeski Skin Clinic [дерматовенеролог](/ru/services/dermatologiya) осмотрит высыпания, отличит герпес от других заболеваний, назначит лечение, а при частых рецидивах составит план их профилактики.

- [Дерматолог в Фергане](/ru/fargona/dermatolog);
- [Дерматолог в Коканде](/ru/qoqon/dermatolog).

Чем раньше начато лечение герпеса, тем меньше высыпания и тем быстрее они проходят: действуйте при первом покалывании.`;
}

function enBody(): string {
  return `Herpes is caused by the herpes simplex virus. Its most common form is painful blisters on or around the lip, known as cold sores or fever blisters. Most of the world's population carries the virus, but not everyone gets sores. In autumn and winter, during cold and flu season, herpes comes back especially often.

## How does herpes work?

After the first infection the virus never leaves the body — it lies dormant in nerve ganglia. When immunity dips, it reactivates and causes sores in the same place again. Triggers include:

- colds, flu and fever;
- getting chilled or, the opposite, strong sun;
- stress, fatigue, lack of sleep;
- periods;
- lip injury and dental work;
- illnesses and medicines that lower immunity.

## Stages of a cold sore

1. **Warning stage** — itching, burning or tingling at the edge of the lip (a few hours to a day).
2. **Blisters** — a cluster of small, painful fluid-filled blisters.
3. **Weeping** — the blisters burst into a raw sore; this is the most contagious stage.
4. **Crust** — the sore crusts over and usually heals without a mark in 7–10 days.

## Is herpes contagious?

Yes, especially at the blister and sore stages. It spreads through kissing, shared cups and cutlery, towels, lipstick and hands. While you have a sore:

- do not kiss or share cups and cutlery;
- do not touch the sore, and wash your hands if you do — spreading the virus to the eye is dangerous;
- do not pop blisters or pick the crust;
- **do not kiss newborns** — herpes is very dangerous for them.

## How is herpes treated?

- **Antiviral medicines** — cream or tablets, prescribed by the doctor. They work best when started **at the first signs**, during the itching and tingling stage.
- Products that ease pain and inflammation — as the doctor advises.
- A soothing lip balm at the crust stage.

If herpes returns many times a year (more than 6) or sores are slow to heal, the doctor looks at triggers and immunity and advises on preventing recurrences.

In winter, dry, cracked lips can also trigger herpes: lip care is covered in our [winter skin care](/en/articles/art-qishda-teri-parvarishi) article.

## When to see a doctor urgently

- sores **near the eye**, or the eye is red, painful or vision has worsened — see an ophthalmologist urgently;
- someone with **atopic dermatitis** or eczema develops widespread painful blisters;
- painful blisters appear in a band on one side of the body — this may be **shingles**, which is best treated within the first 72 hours;
- high fever or severe weakness;
- sores during pregnancy or in a baby;
- anyone with weakened immunity.

Genital herpes is examined and treated by a dermatovenereologist — visits are confidential.

## Herpes treatment in Fergana and Kokand

At Radeski Skin Clinic a [dermatovenereologist](/en/services/dermatologiya) examines the sores, tells herpes apart from other conditions, prescribes treatment and, for frequent recurrences, plans how to prevent them.

- [Dermatologist in Fergana](/en/fargona/dermatolog);
- [Dermatologist in Kokand](/en/qoqon/dermatolog).

The earlier herpes is treated, the smaller the sore and the faster it heals: act at the first tingle.`;
}

export const HERPES_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Gerpes (lab uchug'i): nima uchun qaytadi, bosqichlari, qanday yuqadi, virusga qarshi davolash va qachon zudlik bilan shifokorga borish kerak. Farg'ona va Qo'qonda dermatovenerolog.",
    body: uzBody(),
    keyTakeaways: [
      "Gerpes virusi organizmda umrbod qoladi va immunitet pasayganda qaytadi",
      "Davolash birinchi belgilarda — qichishish va sanchishda boshlansa eng samarali",
      "Pufakcha va yaracha davrida juda yuqumli — chaqaloqlarni o'pmang",
      'Ko\'z yaqinidagi toshma va tasmasimon og\'riqli toshma — zudlik bilan shifokorga',
      "Yiliga 6 martadan ko'p qaytsa — qaytalanishning oldini olish rejasi kerak",
    ],
    tags: ['Gerpes', "Lab uchug'i", 'Belbog\'simon temiratki', 'Virusli infeksiya', 'Dermatovenerolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Toshma ko'z yaqinida bo'lsa yoki ko'z og'risa",
      "Atopik dermatit fonida keng toshma paydo bo'lsa",
      'Tananing bir tomonida tasmasimon og\'riqli pufakchalar',
      "Gerpes yiliga 6 martadan ko'p qaytsa",
      "Toshma 10 kundan ko'p bitmasa",
    ],
    faq: [
      {
        question: 'Gerpesdan butunlay qutulish mumkinmi?',
        answer:
          "Hozircha virusni organizmdan butunlay chiqarib yuboradigan dori yo'q. Lekin virusga qarshi davolash toshmani tez bitiradi, to'g'ri profilaktika esa qaytalanishlarni ancha kamaytiradi.",
      },
      {
        question: 'Gerpesni nima bilan surtish kerak?',
        answer:
          "Virusga qarshi kremlar birinchi belgilarda yaxshi yordam beradi. Tish pastasi, spirt, yod kabi uy vositalari terini kuydiradi va bitishni sekinlashtiradi. Qaysi vosita va qancha muddatga kerakligini shifokor aytadi.",
      },
      {
        question: 'Gerpes bilan ishga yoki maktabga borish mumkinmi?',
        answer:
          "Lab gerpesi bilan odatda borish mumkin, lekin gigiyenaga qat'iy rioya qiling: toshmaga tegmang, qo'lni tez-tez yuving, shaxsiy idish va sochiqdan foydalaning, o'pishmang.",
      },
      {
        question: 'Belbog\'simon temiratki va gerpes bir xilmi?',
        answer:
          "Yo'q. Belbog'simon temiratkini suvchechak virusi chaqiradi. U tananing bir tomonida tasma shaklida og'riqli pufakchalar bilan namoyon bo'ladi va uni birinchi 72 soatda davolash muhim — darhol shifokorga murojaat qiling.",
      },
      {
        question: "Farg'ona va Qo'qonda gerpesni qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatovenerolog toshmani ko'zdan kechiradi, davolashni tayinlaydi va tez-tez qaytadigan gerpesda profilaktika rejasini tuzadi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Герпес на губах: почему возвращается, стадии, как передаётся, противовирусное лечение и когда срочно к врачу. Дерматовенеролог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Вирус герпеса остаётся в организме на всю жизнь и активируется при снижении иммунитета',
      'Лечение эффективнее всего при первых признаках — зуде и покалывании',
      'На стадии пузырьков и ранок очень заразен — не целуйте младенцев',
      'Высыпания у глаза и болезненная сыпь полосой — срочно к врачу',
      'Если герпес возвращается чаще 6 раз в год — нужен план профилактики',
    ],
    tags: ['Герпес', 'Простуда на губах', 'Опоясывающий лишай', 'Вирусная инфекция', 'Дерматовенеролог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Высыпания рядом с глазом или боль в глазу',
      'Распространённая сыпь на фоне атопического дерматита',
      'Болезненные пузырьки полосой на одной стороне тела',
      'Герпес возвращается чаще 6 раз в год',
      'Высыпания не заживают дольше 10 дней',
    ],
    faq: [
      {
        question: 'Можно ли избавиться от герпеса навсегда?',
        answer:
          'Пока нет лекарства, которое полностью удаляет вирус из организма. Но противовирусное лечение быстро заживляет высыпания, а правильная профилактика заметно уменьшает число рецидивов.',
      },
      {
        question: 'Чем мазать герпес на губах?',
        answer:
          'При первых признаках хорошо помогают противовирусные кремы. Домашние средства — зубная паста, спирт, йод — обжигают кожу и замедляют заживление. Какое средство и на какой срок нужно, скажет врач.',
      },
      {
        question: 'Можно ли с герпесом ходить на работу или в школу?',
        answer:
          'С герпесом на губах обычно можно, но строго соблюдайте гигиену: не трогайте высыпания, чаще мойте руки, пользуйтесь своей посудой и полотенцем, не целуйтесь.',
      },
      {
        question: 'Опоясывающий лишай и герпес — одно и то же?',
        answer:
          'Нет. Опоясывающий лишай вызывает вирус ветряной оспы. Он проявляется болезненными пузырьками полосой на одной стороне тела, и его важно лечить в первые 72 часа — сразу обратитесь к врачу.',
      },
      {
        question: 'Где лечить герпес в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматовенеролог осмотрит высыпания, назначит лечение и при частом герпесе составит план профилактики. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Cold sores (herpes): why they come back, the stages, how herpes spreads, antiviral treatment and when to see a doctor urgently. Dermatovenereologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'The herpes virus stays in the body for life and reactivates when immunity dips',
      'Treatment works best at the first signs — itching and tingling',
      'Very contagious at the blister and sore stages — do not kiss babies',
      'Sores near the eye and a painful band-like rash need a doctor urgently',
      'More than 6 recurrences a year call for a prevention plan',
    ],
    tags: ['Herpes', 'Cold sores', 'Shingles', 'Viral infection', 'Dermatovenereologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Sores near the eye or eye pain',
      'A widespread rash in someone with atopic dermatitis',
      'Painful blisters in a band on one side of the body',
      'Herpes returns more than 6 times a year',
      'Sores take longer than 10 days to heal',
    ],
    faq: [
      {
        question: 'Can herpes be cured for good?',
        answer:
          'There is no medicine yet that removes the virus from the body completely. But antiviral treatment heals sores quickly, and the right prevention reduces recurrences considerably.',
      },
      {
        question: 'What should I put on a cold sore?',
        answer:
          'Antiviral creams help well at the first signs. Home remedies such as toothpaste, alcohol or iodine burn the skin and slow healing. The doctor will tell you which product to use and for how long.',
      },
      {
        question: 'Can I go to work or school with a cold sore?',
        answer:
          'Usually yes, but keep strict hygiene: do not touch the sore, wash your hands often, use your own cups and towel, and avoid kissing.',
      },
      {
        question: 'Are shingles and herpes the same thing?',
        answer:
          'No. Shingles is caused by the chickenpox virus. It appears as painful blisters in a band on one side of the body and is best treated within the first 72 hours — see a doctor straight away.',
      },
      {
        question: 'Where can I get herpes treated in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatovenereologist examines the sores, prescribes treatment and plans prevention for frequent recurrences. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const HERPES_ARTICLE: Article = {
  id: 'art-gerpes',
  slug: 'gerpes',
  title: {
    uz: "Gerpes (lab uchug'i): nima uchun qaytadi va qanday tez davolanadi",
    ru: 'Герпес на губах: почему возвращается и как быстро вылечить',
    en: 'Cold Sores (Herpes): Why They Come Back and How to Treat Them Fast',
  },
  summary: {
    uz: HERPES_ARTICLE_CATALOG.uz.summary,
    ru: HERPES_ARTICLE_CATALOG.ru.summary,
    en: HERPES_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: HERPES_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: HERPES_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: HERPES_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Baxriddinov Zuxriddin Muxiddinovich',
    ru: 'Бахриддинов Зухриддин Мухиддинович',
    en: 'Dr. Zuxriddin Muxiddinovich Baxriddinov',
  },
  date: '2026-11-06',
  image: '/articles/gerpes-cover.webp',
  images: {
    uz: '/articles/gerpes-cover.webp',
    ru: '/articles/gerpes-cover.webp',
    en: '/articles/gerpes-cover.webp',
  },
  views: 0,
};
