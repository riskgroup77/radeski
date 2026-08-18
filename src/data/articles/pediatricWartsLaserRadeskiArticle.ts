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
  return `## Bolalarda so‘gallar: Radeski Skin Clinic da lazer bilan olib tashlash

Bolalardagi so‘gallar — inson papilloma virusi (HPV) bilan bog‘liq keng tarqalgan muammo. Ular qo‘l, barmoq, oyoq tagi, yuz va tananing boshqa joylarida paydo bo‘lishi mumkin.

Ko‘pincha xavfsiz (yaxshi sifatli) bo‘lsa-da, so‘gal kattalashishi, boshqa joylarga tarqalishi, jarohat olishi va bolaga noqulaylik keltirishi mumkin.

Radeski Skin Clinic da bolalarda so‘gallarni zamonaviy lazer uskunasi yordamida tashxislash va olib tashlash o‘tkaziladi. Muolaja usulini shifokor bolani ko‘rib, shaxsiy tarzda tanlaydi.

## Nega bolalarda so‘gal chiqadi?

Asosiy sabab — inson papilloma virusi. U kichik teri shikastlari orqali kirib, infeksiyalangan teri bilan aloqa yoki ba’zi umumiy buyumlar orqali yuqishi mumkin.

Ko‘p uchraydigan joylar:

- barmoqlar va kaftlar;
- tirnoq atrofi;
- oyoq tagi;
- tizza va tirsak;
- yuz.

Bolalarda oddiy, yassi va oyoq tagi (plantar) so‘gallar tez-tez ko‘riladi.

## Bolada so‘galni olib tashlash kerakmi?

Ba’zan so‘gal o‘z-o‘zidan yo‘qolishi mumkin. Lekin kutish har doim ham to‘g‘ri yechim emas.

Olib tashlashni ko‘rib chiqish tavsiya etiladi, agar so‘gal:

- kattalashsa;
- doim jarohat olsa;
- og‘riq yoki qon ketish bo‘lsa;
- yurishga xalaqit qilsa;
- yuzda yoki ko‘rinadigan joyda bo‘lsa;
- tarqalib, yangi elementlar paydo bo‘lsa;
- bolada psixologik noqulaylik keltirsa.

Muolajadan oldin dermatolog hosilani ko‘rib, bu haqiqatan so‘gal ekanligini aniqlaydi.

## Radeski Skin Clinic da bolalarda lazer bilan olib tashlash

Zamonaviy usullardan biri — lazer yordamida olib tashlash.

Radeski Skin Clinic da muolajani shifokor oldindan konsultatsiya va hosila holatini baholaganidan keyin o‘tkazadi.

Lazer to‘g‘ridan-to‘g‘ri o‘zgargan to‘qimalarga ta’sir qiladi — shifokor qayta ishlanadigan maydonni nazorat qiladi.

### Lazer usulining afzalliklari

- hosilaga aniq ta’sir;
- kichik va qiyin joylarni qayta ishlash imkoniyati;
- atrofdagi sog‘lom teriga minimal ta’sir;
- jarrohlik kesimi talab qilinmasligi;
- nisbatan qisqa vaqt;
- ba’zi so‘gallarni bir muolajada olib tashlash imkoniyati.

Lazer mumkinligi, seanslar soni va kutilgan natija so‘gal turi, hajmi va joylashuviga bog‘liq.

## Lazer bilan olib tashlash qanday o‘tadi?

Avval bolani dermatolog ko‘radi, hosilani baholaydi va mos taktikani tanlaydi.

Kerak bo‘lsa, bola uchun qulay bo‘lishi uchun **mahalliy og‘riqsizlantirish** qo‘llanadi.

So‘ngra shifokor lazer bilan so‘gal to‘qimasini qayta ishlaydi. Muolajadan keyin tiklanish davri uchun aniq ko‘rsatmalar beriladi.

Bitish vaqtida paydo bo‘lgan qobiqni o‘zingiz yechib tashlamang — bu chandiq xavfini oshirishi mumkin.

## Bolada lazer bilan olib tashlash og‘riqlimi?

His-tuyg‘ular so‘gal hajmi, joyi va bolaning sezgirligiga bog‘liq.

Kerak bo‘lsa shifokor mahalliy og‘riqsizlantirish qo‘llaydi. Shu sababli muolajadan oldin konsultatsiya majburiy — shifokor bolaning holatini baholab, eng qulay variantni tanlaydi.

## Uyda o‘zingiz olib tashlash mumkinmi?

Uy sharoitida krem, kesish yoki kuydirish tavsiya etilmaydi.

Aggressiv vositalar sog‘lom terini kuyishi, yallig‘lanish yoki chandiq qoldirishi mumkin. Bundan tashqari, har bir teri hosilasi so‘gal emas.

To‘g‘ri birinchi qadam — dermatolog konsultatsiyasi.

## Bolalarda oyoq tagidagi so‘gallar

Plantar so‘gallar bolaga alohida noqulaylik keltirishi mumkin. Yurishda bosim tufayli ba’zan og‘riqli bo‘lib, sport mashg‘ulotlariga xalaqit qiladi.

Shifokor chuqurlik va xususiyatni baholab, mos usulni tanlaydi. Ba’zi hollarda lazer bilan olib tashlash tavsiya etiladi.

## Nega Radeski Skin Clinic?

So‘galni olib tashlashdan oldin dermatolog ko‘rigidan o‘tadi — hosila xarakteri aniqlanadi va shaxsiy davolash rejasi tuziladi.

Biz bolalar teri kasalliklariga alohida e’tibor beramiz va muolajani iloji boricha qulay o‘tkazishga intilamiz.

## Bolada so‘gal paydo bo‘lsa

Hosila kattalashishini yoki yangi elementlar chiqishini kutmay turing.

Radeski Skin Clinic da dermatolog konsultatsiyasiga yoziling. Shifokor hosilani ko‘radi, kerak bo‘lsa dermatoskopiya qiladi va bolaga lazer muolajasi mos kelishini aniqlaydi.

Radeski Skin Clinic — bolalar va kattalar uchun teri kasalliklarini tashxislash va davolash.`;
}

function ruBody(): string {
  return `## Бородавки у детей: лазерное удаление в Radeski Skin Clinic

Бородавки у детей — распространённая проблема, связанная с вирусом папилломы человека (ВПЧ). Они могут появляться на руках, пальцах, стопах, лице и других участках тела.

Хотя бородавки чаще всего доброкачественны, они могут увеличиваться, распространяться, травмироваться и доставлять ребёнку дискомфорт.

В Radeski Skin Clinic проводится диагностика и лазерное удаление бородавок у детей на современном оборудовании. Метод лечения врач подбирает индивидуально после осмотра.

## Почему у детей появляются бородавки?

Причина — вирус папилломы человека. Он проникает через небольшие повреждения кожи и передаётся при контакте с заражённой кожей или некоторыми предметами общего пользования.

Чаще всего бородавки возникают:

- на пальцах и кистях;
- вокруг ногтей;
- на стопах;
- на коленях и локтях;
- на лице.

У детей особенно часто встречаются обыкновенные, плоские и подошвенные бородавки.

## Нужно ли удалять бородавки ребёнку?

Иногда бородавка действительно может исчезнуть сама. Но ожидание подходит не во всех случаях.

Удаление стоит рассмотреть, если бородавка:

- увеличивается;
- постоянно травмируется;
- болит или кровоточит;
- мешает ходить;
- находится на лице или в другом заметном месте;
- распространяется, появляются новые элементы;
- вызывает у ребёнка психологический дискомфорт.

Перед процедурой врач-дерматолог осматривает образование и подтверждает, что это именно бородавка.

## Лазерное удаление бородавок у детей в Radeski Skin Clinic

Один из современных методов — лазерное удаление.

В Radeski Skin Clinic процедуру проводит врач после консультации и оценки образования.

Лазер воздействует непосредственно на патологически изменённые ткани, и специалист контролирует зону обработки.

### Преимущества лазерного удаления

- точное воздействие на образование;
- возможность обработки небольших и труднодоступных участков;
- минимальное воздействие на окружающую кожу;
- отсутствие необходимости в хирургическом разрезе;
- относительно быстрое проведение;
- возможность удаления некоторых бородавок за одну процедуру.

Однако возможность лазера, число процедур и ожидаемый результат зависят от вида, размера и расположения бородавки.

## Как проходит удаление бородавки лазером?

Сначала ребёнка осматривает врач-дерматолог. Специалист оценивает образование и выбирает тактику.

При необходимости используется местное обезболивание, чтобы процедура была максимально комфортной.

Затем врач обрабатывает бородавку лазером. После процедуры даются рекомендации по уходу за обработанной областью.

Важно соблюдать их в период заживления и не снимать образовавшуюся корочку самостоятельно.

## Больно ли удалять бородавку лазером ребёнку?

Ощущения зависят от размера и расположения бородавки, а также от чувствительности ребёнка.

При необходимости врач использует местное обезболивание. Поэтому перед процедурой обязательна консультация — на ней выбирают оптимальный вариант обезболивания.

## Можно ли удалить бородавку самостоятельно?

Домашние средства, срезание или прижигание не рекомендуются.

Агрессивные препараты могут вызвать ожог здоровой кожи, воспаление или рубец. Кроме того, не каждое образование на коже — бородавка.

Правильный первый шаг — консультация врача-дерматолога.

## Бородавки на стопах у детей

Подошвенные бородавки могут особенно мешать ребёнку. Из-за давления при ходьбе они иногда болезненны и мешают спорту.

Врач определяет глубину и характер образования и после диагностики выбирает подходящий метод. В ряде случаев может быть рекомендовано лазерное удаление.

## Почему важно обратиться в Radeski Skin Clinic?

Удалению предшествует осмотр дерматолога — так определяют характер образования и подбирают индивидуальную тактику.

Мы уделяем особое внимание лечению кожи у детей и стараемся сделать процедуру максимально комфортной для маленького пациента.

## Если у ребёнка появилась бородавка

Не ждите, пока образование увеличится или появятся новые элементы.

Запишитесь к дерматологу в Radeski Skin Clinic. Врач осмотрит образование, при необходимости проведёт дерматоскопию и определит, подходит ли ребёнку лазерное удаление.

Radeski Skin Clinic — диагностика и лечение заболеваний кожи у детей и взрослых.`;
}

function enBody(): string {
  return `## Warts in children: laser removal at Radeski Skin Clinic

Warts in children are a common problem linked to human papillomavirus (HPV). They can appear on the hands, fingers, soles, face, and other areas.

Although usually benign, warts can grow, spread, get injured, and cause discomfort.

At Radeski Skin Clinic, childhood warts are diagnosed and removed with modern laser equipment. The doctor chooses the approach individually after examining the child.

## Why do warts appear in children?

The cause is human papillomavirus. It enters through small breaks in the skin and can spread through contact with infected skin or shared items.

Warts often appear on:

- fingers and palms;
- around the nails;
- the soles of the feet;
- knees and elbows;
- the face.

Common, flat, and plantar warts are especially frequent in children.

## Does a child’s wart need removal?

Sometimes a wart may clear on its own. Waiting is not the right choice in every case.

Removal is worth considering if the wart:

- is getting larger;
- is injured again and again;
- hurts or bleeds;
- makes walking difficult;
- is on the face or another visible area;
- is spreading with new spots;
- affects the child’s confidence or comfort.

Before treatment, a dermatologist confirms that the lesion is actually a wart.

## Laser wart removal for children at Radeski Skin Clinic

One modern option is laser removal.

At Radeski Skin Clinic the session is done by a doctor after consultation and assessment of the lesion.

The laser acts directly on changed tissue, and the specialist controls the treated area.

### Advantages of laser removal

- precise action on the lesion;
- access to small or hard-to-reach areas;
- minimal effect on surrounding healthy skin;
- no surgical incision;
- relatively quick sessions;
- some warts can be removed in a single visit.

Whether laser is suitable, how many sessions are needed, and what to expect depend on the type, size, and location of the wart.

## What happens during laser removal?

First, a dermatologist examines the child, assesses the wart, and chooses a plan.

If needed, **local anesthesia** is used so the session is as comfortable as possible.

The doctor then treats the wart with the laser. Afterward you receive clear aftercare instructions.

Follow them during healing and do not pick off the scab yourself.

## Is laser wart removal painful for a child?

Sensations depend on size, location, and the child’s sensitivity.

When needed, the doctor uses local anesthesia. That is why a consultation comes first — to choose the best option for your child.

## Can you remove a wart at home?

Home creams, cutting, or burning are not recommended.

Harsh products can burn healthy skin, cause inflammation, or leave a scar. Not every skin bump is a wart.

The right first step is a dermatologist visit.

## Plantar warts in children

Warts on the soles can be especially bothersome. Pressure while walking may cause pain and interfere with sports.

The doctor assesses depth and type, then chooses the best method. In some cases laser removal is recommended.

## Why Radeski Skin Clinic?

Removal is preceded by a dermatologist’s exam — to confirm what the lesion is and build an individual plan.

We pay special attention to children’s skin conditions and aim to keep the procedure as comfortable as possible.

## If your child has a wart

Do not wait until it grows or new spots appear.

Book a dermatologist visit at Radeski Skin Clinic. The doctor will examine the lesion, use dermoscopy if needed, and decide whether laser removal is appropriate.

Radeski Skin Clinic — diagnosis and treatment of skin conditions in children and adults.`;
}

export const PEDIATRIC_WARTS_LASER_RADESKI_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Bolalarda so‘gallar: sabablari, qachon olib tashlash kerak va Radeski Skin Clinic da lazer muolajasi. Dermatolog konsultatsiyasi va shaxsiy reja.',
    body: uzBody(),
    keyTakeaways: [
      'Boladagi so‘gallar HPV bilan bog‘liq — o‘z-o‘zidan ketishi mumkin, lekin tarqalishi ham tez bo‘lishi mumkin',
      'Kattalashish, og‘riq, yuzdagi joylashuv yoki psixologik noqulaylik bo‘lsa — dermatolog ko‘rigi kerak',
      'Lazer hosilga aniq ta‘sir qiladi; seanslar soni turi va hajmga bog‘liq',
      'Uyda kesish yoki kuydirish xavfli — avval tashxis',
      'Radeski da muolajadan oldin ko‘rik va kerak bo‘lsa dermatoskopiya o‘tkaziladi',
    ],
    tags: [
      'Bolalarda so‘gal',
      'HPV',
      'Lazer',
      'Plantar so‘gal',
      'Bolalar dermatologi',
      'Farg‘ona',
      'Qo‘qon',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'So‘gal tez kattalashsa',
      'Og‘riq yoki qon ketish bo‘lsa',
      'Yurish qiyinlashsa (oyoq tagi)',
      'Yuzda yoki ko‘rinadigan joyda bo‘lsa',
      'Yangi elementlar ko‘paysa',
      'Bola bezovta bo‘lsa yoki uyalsa',
      'Hosilning so‘gal ekaniga ishonchingiz komil emas',
    ],
    faq: [
      {
        question: 'Bolada so‘galni lazer bilan olib tashlash mumkinmi?',
        answer:
          'Ha, bolalarda lazer qo‘llanilishi mumkin. Muolaja shifokor bolani ko‘rib, holatni baholaganidan keyin belgilanadi.',
      },
      {
        question: 'Nechta seans kerak bo‘ladi?',
        answer:
          'So‘gal hajmi, chuqurligi, turi va joyiga bog‘liq. Ba’zida bir marta yetadi, ba’zida takroriy muolaja kerak.',
      },
      {
        question: 'Chandiq qoladimi?',
        answer:
          'Xavf chuqurlik, usul, teri xususiyati va tiklanish davrida ko‘rsatmalarga rioya qilishga bog‘liq. Shuning uchun mutaxassis va to‘g‘ri parvarish muhim.',
      },
      {
        question: 'Yuzdagi so‘galni olib tashlash mumkinmi?',
        answer:
          'Ba’zi hollarda ha. Ayniqsa yuzda avval aniq tashxis va mos usul tanlash juda muhim.',
      },
      {
        question: 'Qaysi shifokorga murojaat qilish kerak?',
        answer:
          'Dermatologga. U hosila xarakterini aniqlaydi va bolaga mos davolash usulini tanlaydi.',
      },
    ],
  },
  ru: {
    summary:
      'Бородавки у детей: причины, когда нужно удаление и лазерное лечение в Radeski Skin Clinic. Консультация дерматолога и индивидуальный план.',
    body: ruBody(),
    keyTakeaways: [
      'Детские бородавки связаны с ВПЧ — иногда проходят сами, но могут быстро распространяться',
      'При росте, боли, расположении на лице или дискомфорте ребёнка нужен осмотр дерматолога',
      'Лазер воздействует точечно; число процедур зависит от вида и размера',
      'Домашнее срезание или прижигание опасны — сначала диагноз',
      'В Radeski перед процедурой — осмотр и при необходимости дерматоскопия',
    ],
    tags: [
      'Бородавки у детей',
      'ВПЧ',
      'Лазер',
      'Подошвенные бородавки',
      'Детский дерматолог',
      'Фергана',
      'Коканд',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Бородавка быстро увеличивается',
      'Есть боль или кровотечение',
      'Мешает ходить (подошвенная)',
      'Находится на лице или в заметном месте',
      'Появляются новые элементы',
      'Ребёнок стесняется или страдает',
      'Не уверены, что это бородавка',
    ],
    faq: [
      {
        question: 'Можно ли удалить бородавку ребёнку лазером?',
        answer:
          'Да, лазер может применяться у детей. Возможность процедуры определяет врач после осмотра.',
      },
      {
        question: 'Сколько процедур необходимо?',
        answer:
          'Зависит от размера, глубины, вида и расположения. Иногда достаточно одной, иногда нужно повторное лечение.',
      },
      {
        question: 'Остаётся ли шрам после лазерного удаления?',
        answer:
          'Риск зависит от глубины, метода, особенностей кожи и соблюдения рекомендаций. Поэтому важны специалист и правильный уход.',
      },
      {
        question: 'Можно ли удалять бородавки на лице?',
        answer:
          'В некоторых случаях да. На лице особенно важны точная диагностика и правильный выбор метода.',
      },
      {
        question: 'К какому врачу обращаться с бородавкой у ребёнка?',
        answer:
          'К дерматологу. Он определит характер образования и подберёт подходящее лечение.',
      },
    ],
  },
  en: {
    summary:
      'Warts in children: causes, when removal is needed, and laser treatment at Radeski Skin Clinic. Dermatologist consultation and a personal plan.',
    body: enBody(),
    keyTakeaways: [
      'Childhood warts are HPV-related — they may clear alone but can spread quickly',
      'Growing, painful, facial, or distressing warts need a dermatologist’s assessment',
      'Laser acts precisely; session count depends on type and size',
      'Home cutting or burning is risky — diagnosis comes first',
      'At Radeski, an exam and dermoscopy when needed come before treatment',
    ],
    tags: [
      'Warts in children',
      'HPV',
      'Laser',
      'Plantar warts',
      'Pediatric dermatologist',
      'Fergana',
      'Kokand',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'The wart is growing quickly',
      'There is pain or bleeding',
      'Walking is difficult (plantar wart)',
      'It is on the face or a visible area',
      'New spots are appearing',
      'The child is upset or embarrassed',
      'You are not sure it is a wart',
    ],
    faq: [
      {
        question: 'Can a child’s wart be removed with a laser?',
        answer:
          'Yes, laser can be used in children. The doctor decides after an examination.',
      },
      {
        question: 'How many sessions are needed?',
        answer:
          'It depends on size, depth, type, and location. Sometimes one session is enough; sometimes repeat treatment is needed.',
      },
      {
        question: 'Will there be a scar?',
        answer:
          'Risk depends on depth, method, skin type, and aftercare. That is why a specialist and proper healing matter.',
      },
      {
        question: 'Can facial warts be removed?',
        answer:
          'In some cases yes. On the face, accurate diagnosis and the right method are especially important.',
      },
      {
        question: 'Which doctor should we see?',
        answer:
          'A dermatologist. They will confirm what the lesion is and choose suitable treatment.',
      },
    ],
  },
};

export const PEDIATRIC_WARTS_LASER_RADESKI_ARTICLE: Article = {
  id: 'art-bolalarda-sogal-lazer-radeski',
  slug: 'bolalarda-sogal-lazer-radeski',
  title: {
    uz: 'Bolalarda so‘gallar: lazer bilan olib tashlash | Radeski Skin Clinic',
    ru: 'Лазерное удаление бородавок у детей | Radeski Skin Clinic',
    en: 'Laser Wart Removal in Children | Radeski Skin Clinic',
  },
  summary: {
    uz: PEDIATRIC_WARTS_LASER_RADESKI_ARTICLE_CATALOG.uz.summary,
    ru: PEDIATRIC_WARTS_LASER_RADESKI_ARTICLE_CATALOG.ru.summary,
    en: PEDIATRIC_WARTS_LASER_RADESKI_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: PEDIATRIC_WARTS_LASER_RADESKI_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: PEDIATRIC_WARTS_LASER_RADESKI_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: PEDIATRIC_WARTS_LASER_RADESKI_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-08-18',
  image: '/karusel/co2-lazer-osmalar.jpg',
  images: {
    uz: '/karusel/co2-lazer-osmalar.jpg',
    ru: '/karusel/co2-lazer-osmalar.jpg',
    en: '/karusel/co2-lazer-osmalar.jpg',
  },
  views: 0,
};
