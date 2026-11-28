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
 * Premature grey hair: why hair turns grey (melanocyte stem cells), what counts as early, the
 * causes worth testing for (B12, iron/ferritin, thyroid, vitamin D, smoking), myths (plucking,
 * stress overnight), and an honest answer: genetic greying cannot be reversed, but a deficiency
 * found early can slow it. When greying comes with hair loss or patches, a trichologist checks
 * for alopecia areata or vitiligo. No claims of a cure.
 */

const COVER = {
  uz: '/articles/sochning-erta-oqarishi-cover-uz.jpg',
  ru: '/articles/sochning-erta-oqarishi-cover-ru.jpg',
  en: '/articles/sochning-erta-oqarishi-cover-en.jpg',
};

function uzBody(): string {
  return `Oq soch — yoshning tabiiy belgisi. Lekin u 20–25 yoshda yoki undan ham ertaroq ko‘paya boshlasa, odamlar sababini bilishni xohlaydi. Ba’zan bu shunchaki irsiyat, ba’zan esa davolasa bo‘ladigan sabab — vitamin tanqisligi yoki qalqonsimon bez muammosi. Quyida soch nega oqarishi, qaysi tahlillarni topshirish kerakligi va nima yordam beradi-yu, nima yordam bermasligini ochiq tushuntiramiz.

## Soch nega oqaradi?

Soch rangini soch follikulasidagi **melanotsitlar** — pigment hujayralari beradi. Yillar o‘tishi bilan bu hujayralarni yangilaydigan zahira (ildiz) hujayralar kamayadi, pigment ishlab chiqarish to‘xtaydi va soch rangsiz o‘sadi. Soch “oqarib qolmaydi” — u **yangidan rangsiz o‘sib chiqadi**.

Soch oqarishi erta hisoblanadi, agar u Osiyo va Yevropa xalqlarida taxminan **20–25 yoshgacha** boshlansa.

## Sabablari

### Irsiyat

Eng ko‘p uchraydigan sabab. Ota-onasi erta oqargan bo‘lsa, farzandida ham shunday bo‘lish ehtimoli yuqori. Bu kasallik emas.

### Tekshirsa bo‘ladigan sabablar

- **B12 vitamini tanqisligi** — ayniqsa go‘sht kam yeyiladigan ovqatlanishda, oshqozon kasalliklarida, ba’zi dorilarni uzoq ichganda;
- **temir tanqisligi** (past ferritin) — ko‘pincha ayollarda;
- **qalqonsimon bez kasalliklari** — gipotireoz va gipertireoz;
- **D vitamini, mis va boshqa moddalar tanqisligi** — kamroq hollarda;
- **chekish** — erta oqarish bilan bog‘liqligi tadqiqotlarda ko‘rsatilgan.

### Stress

Uzoq davom etgan kuchli stress soch oqarishini tezlashtirishi mumkin. Lekin “bir kechada oqarib qolish” afsona: bir kunda rangli soch oq bo‘lib qolmaydi. Bunday holatda ko‘pincha **o‘choqli alopetsiya** bo‘ladi — rangli sochlar to‘kilib, oqlari qoladi va soch to‘satdan oqargandek ko‘rinadi.

## Qachon trixologga borish kerak?

- soch 20 yoshgacha yoki tez ko‘paya boshlasa;
- oqarish bilan birga **soch to‘kilishi** bo‘lsa;
- boshda yoki qoshda **oq soch to‘plami** bilan birga terida oq dog‘ bo‘lsa — vitiligo bo‘lishi mumkin;
- charchoq, bosh aylanishi, oyoq-qo‘l uvishishi, vazn o‘zgarishi bo‘lsa — tanqislik yoki gormon muammosi belgisi.

Trixolog **trixoskopiya** qiladi va kerakli tahlillarni belgilaydi: B12, ferritin, qalqonsimon bez gormonlari, D vitamini. Batafsil: [Trixolog va trixoskopiya](/uz/articles/art-trixolog-trixoskopiya), [Soch to‘kilishida tahlillar](/uz/articles/art-soch-tokilishi-tahlillar-radeski).

## Nima yordam beradi va nima bermaydi?

**Ochiq gapiramiz:** irsiy erta oqarishni qaytaradigan isbotlangan davo yo‘q. Shampun, “oqarishga qarshi” vitamin komplekslari va maskalar oqargan sochni qayta rangli qilmaydi.

Lekin:

- tahlilda **tanqislik topilsa** va to‘ldirilsa, oqarish sekinlashishi, ba’zan esa yangi o‘sayotgan sochlarning bir qismi rangli bo‘lishi mumkin;
- **chekishni tashlash** — soch va teri uchun foydali;
- bosh terisi va soch holatini yaxshilash uchun trixolog muolajalarni tavsiya qilishi mumkin, lekin ular rangni qaytarmaydi.

## Afsonalar

- **“Bitta oq sochni yulsang, o‘rniga ikkitasi chiqadi”** — yo‘q. Bitta follikuladan bitta soch o‘sadi. Lekin tez-tez yulish follikulani shikastlaydi, shuning uchun yulmang.
- **“Oq soch — erta qarish belgisi”** — irsiy oqarish sog‘liq haqida hech narsa demaydi.

Trixolog qabuli: [Trixolog Farg‘onada](/uz/fargona/trixolog), [Trixolog Qo‘qonda](/uz/qoqon/trixolog).

*Ushbu maqola umumiy ma’lumot uchun. Tahlil va davolashni faqat shifokor belgilaydi.*`;
}

function ruBody(): string {
  return `Седина — естественный признак возраста. Но когда её становится больше в 20–25 лет или ещё раньше, хочется понять причину. Иногда это просто наследственность, а иногда — причина, которую можно исправить: дефицит витаминов или проблема щитовидной железы. Честно разберём, почему седеют волосы, какие анализы сдать и что помогает, а что нет.

## Почему волосы седеют?

Цвет волосу дают **меланоциты** — пигментные клетки волосяного фолликула. С годами запас стволовых клеток, которые их обновляют, уменьшается, пигмент перестаёт вырабатываться, и волос растёт бесцветным. Волос не «седеет» — он **отрастает уже бесцветным**.

Седина считается ранней, если у людей азиатского и европейского происхождения она начинается примерно **до 20–25 лет**.

## Причины

### Наследственность

Самая частая причина. Если родители поседели рано, у ребёнка это вероятнее. Это не болезнь.

### Причины, которые можно проверить

- **дефицит витамина B12** — особенно при питании с малым количеством мяса, болезнях желудка, длительном приёме некоторых лекарств;
- **дефицит железа** (низкий ферритин) — чаще у женщин;
- **болезни щитовидной железы** — гипотиреоз и гипертиреоз;
- **дефицит витамина D, меди и других веществ** — реже;
- **курение** — его связь с ранней сединой показана в исследованиях.

### Стресс

Длительный сильный стресс может ускорить поседение. Но «поседеть за одну ночь» — миф: окрашенный волос не становится белым за день. В таких случаях чаще бывает **очаговая алопеция** — пигментированные волосы выпадают, седые остаются, и кажется, что человек внезапно поседел.

## Когда идти к трихологу?

- седина появилась до 20 лет или быстро прибавляется;
- вместе с сединой **выпадают волосы**;
- **пучок белых волос** на голове или в брови вместе с белым пятном на коже — возможно витилиго;
- есть усталость, головокружение, онемение рук и ног, изменение веса — признаки дефицита или гормональной проблемы.

Трихолог проведёт **трихоскопию** и назначит нужные анализы: B12, ферритин, гормоны щитовидной железы, витамин D. Подробнее: [Трихолог и трихоскопия](/ru/articles/art-trixolog-trixoskopiya), [Анализы при выпадении волос](/ru/articles/art-soch-tokilishi-tahlillar-radeski).

## Что помогает и что нет?

**Честно:** доказанного лечения, которое возвращает цвет при наследственной ранней седине, нет. Шампуни, витаминные комплексы «от седины» и маски не делают седые волосы снова цветными.

Но:

- если в анализах **найден дефицит** и его восполнили, поседение может замедлиться, а иногда часть новых волос отрастает с пигментом;
- **отказ от курения** полезен для волос и кожи;
- трихолог может порекомендовать процедуры для улучшения состояния кожи головы и волос, но цвет они не возвращают.

## Мифы

- **«Вырвешь один седой — вырастут два»** — нет. Из одного фолликула растёт один волос. Но частое выдёргивание травмирует фолликул, поэтому не выдёргивайте.
- **«Седина — признак раннего старения»** — наследственная седина ничего не говорит о здоровье.

Приём трихолога: [Трихолог в Фергане](/ru/fargona/trixolog), [Трихолог в Коканде](/ru/qoqon/trixolog).

*Статья носит информационный характер. Анализы и лечение назначает только врач.*`;
}

function enBody(): string {
  return `Grey hair is a natural sign of age. But when it multiplies at 20–25 or even earlier, people want to know why. Sometimes it is simply genetic; sometimes the cause can be fixed, such as a vitamin deficiency or a thyroid problem. Here, honestly, is why hair turns grey, which tests to have and what does and does not help.

## Why does hair turn grey?

Hair gets its colour from **melanocytes**, the pigment cells in the hair follicle. Over the years the stem cells that renew them run down, pigment production stops and the hair grows without colour. Hair does not “turn” grey: it **grows out already colourless**.

Greying is considered premature when it starts before about **20–25** in people of Asian and European descent.

## Causes

### Genetics

The most common cause. If your parents went grey early, you are more likely to as well. It is not a disease.

### Causes worth testing for

- **vitamin B12 deficiency**, especially with a diet low in meat, stomach conditions or long-term use of some medicines;
- **iron deficiency** (low ferritin), more often in women;
- **thyroid disease**, both under- and overactive;
- **vitamin D, copper and other deficiencies**, less often;
- **smoking**, which studies link with early greying.

### Stress

Long, severe stress can speed up greying. But “going grey overnight” is a myth: pigmented hair does not turn white in a day. What usually happens is **alopecia areata**: pigmented hairs fall out, the grey ones stay, and the hair seems to have greyed suddenly.

## When to see a trichologist

- greying starts before 20 or is increasing fast;
- it comes with **hair loss**;
- a **tuft of white hair** on the head or in an eyebrow comes with a white patch of skin, which may be vitiligo;
- you have tiredness, dizziness, numb hands or feet, or weight changes, which can point to a deficiency or hormone problem.

The trichologist performs **trichoscopy** and orders the tests you need: B12, ferritin, thyroid hormones, vitamin D. More: [Trichologist and trichoscopy](/en/articles/art-trixolog-trixoskopiya), [Tests for hair loss](/en/articles/art-soch-tokilishi-tahlillar-radeski).

## What helps and what does not?

**Honestly:** no proven treatment brings the colour back in genetic early greying. Shampoos, “anti-grey” vitamin complexes and masks do not make grey hair coloured again.

However:

- if a test **finds a deficiency** and it is corrected, greying may slow, and sometimes some new hairs grow in with pigment;
- **stopping smoking** helps hair and skin;
- a trichologist may suggest treatments to improve the scalp and hair, but they do not restore colour.

## Myths

- **“Pull out one grey hair and two grow back”**: no. One follicle grows one hair. But frequent pulling damages the follicle, so do not pull them.
- **“Grey hair means early ageing”**: genetic greying says nothing about your health.

Book a trichologist: [Trichologist in Fergana](/en/fargona/trixolog), [Trichologist in Kokand](/en/qoqon/trixolog).

*This article is for general information. Only a doctor can order tests and prescribe treatment.*`;
}

export const GREY_HAIR_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Sochning erta oqarishi: soch nega oqaradi, qaysi yosh erta hisoblanadi, B12, temir, qalqonsimon bez va boshqa tekshirsa bo‘ladigan sabablar, stress haqidagi afsonalar va nima haqiqatan yordam beradi.',
    body: uzBody(),
    keyTakeaways: [
      'Soch oqarmaydi — u yangidan rangsiz o‘sib chiqadi',
      'Erta oqarishning eng ko‘p sababi — irsiyat',
      'B12, ferritin, qalqonsimon bez gormonlari va D vitaminini tekshirish mumkin',
      'Irsiy oqarishni qaytaradigan isbotlangan davo yo‘q',
      'Topilgan tanqislikni to‘ldirish oqarishni sekinlashtirishi mumkin',
    ],
    tags: ['Soch oqarishi', 'Erta oq soch', 'B12 tanqisligi', 'Trixolog', 'Soch salomatligi', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Soch 20 yoshgacha oqara boshlasa',
      'Oqarish bilan birga soch to‘kilsa',
      'Oq soch to‘plami terida oq dog‘ bilan birga bo‘lsa',
      'Charchoq, uvishish yoki vazn o‘zgarishi ham bo‘lsa',
    ],
    faq: [
      {
        question: 'Erta oqargan sochni qaytarsa bo‘ladimi?',
        answer:
          'Irsiy oqarishda — yo‘q, isbotlangan davo yo‘q. Agar sabab B12, temir yetishmasligi yoki qalqonsimon bez muammosi bo‘lsa, uni davolash oqarishni sekinlashtirishi mumkin.',
      },
      {
        question: 'Soch oqarganda qanday tahlil topshirish kerak?',
        answer:
          'Ko‘pincha B12 vitamini, ferritin, qalqonsimon bez gormonlari va D vitamini. Aniq ro‘yxatni trixolog ko‘rikdan va shikoyatlardan keyin belgilaydi.',
      },
      {
        question: 'Stressdan soch oqaradimi?',
        answer:
          'Uzoq davom etgan kuchli stress oqarishni tezlashtirishi mumkin. Lekin bir kechada oqarib qolish afsona: odatda bunda o‘choqli alopetsiya bo‘lib, rangli sochlar to‘kiladi va oqlari qoladi.',
      },
      {
        question: 'Oq sochni yulsam, ko‘payadimi?',
        answer:
          'Yo‘q, bitta follikuladan bitta soch o‘sadi. Lekin tez-tez yulish follikulani shikastlaydi va vaqt o‘tib u yerda soch o‘smay qolishi mumkin.',
      },
    ],
  },
  ru: {
    summary:
      'Ранняя седина: почему седеют волосы, какой возраст считается ранним, B12, железо, щитовидная железа и другие проверяемые причины, мифы о стрессе и что действительно помогает.',
    body: ruBody(),
    keyTakeaways: [
      'Волос не седеет — он отрастает уже бесцветным',
      'Самая частая причина ранней седины — наследственность',
      'Можно проверить B12, ферритин, гормоны щитовидной железы и витамин D',
      'Доказанного лечения, возвращающего цвет при наследственной седине, нет',
      'Восполнение найденного дефицита может замедлить поседение',
    ],
    tags: ['Седина', 'Ранняя седина', 'Дефицит B12', 'Трихолог', 'Здоровье волос', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Седина появилась до 20 лет',
      'Вместе с сединой выпадают волосы',
      'Пучок белых волос с белым пятном на коже',
      'Есть усталость, онемение или изменение веса',
    ],
    faq: [
      {
        question: 'Можно ли вернуть цвет при ранней седине?',
        answer:
          'При наследственной седине — нет, доказанного лечения нет. Если причина — дефицит B12, железа или проблема щитовидной железы, её лечение может замедлить поседение.',
      },
      {
        question: 'Какие анализы сдать при ранней седине?',
        answer:
          'Чаще всего витамин B12, ферритин, гормоны щитовидной железы и витамин D. Точный список трихолог определит после осмотра и расспроса.',
      },
      {
        question: 'Седеют ли от стресса?',
        answer:
          'Длительный сильный стресс может ускорить поседение. Но поседеть за ночь — миф: обычно это очаговая алопеция, когда пигментированные волосы выпадают, а седые остаются.',
      },
      {
        question: 'Если вырвать седой волос, их станет больше?',
        answer:
          'Нет, из одного фолликула растёт один волос. Но частое выдёргивание травмирует фолликул, и со временем волос на этом месте может перестать расти.',
      },
    ],
  },
  en: {
    summary:
      'Premature grey hair: why hair goes grey, what counts as early, B12, iron, thyroid and other testable causes, myths about stress and what genuinely helps.',
    body: enBody(),
    keyTakeaways: [
      'Hair does not turn grey: it grows out colourless',
      'Genetics is the most common cause of early greying',
      'B12, ferritin, thyroid hormones and vitamin D can be tested',
      'No proven treatment restores colour in genetic greying',
      'Correcting a deficiency that is found can slow greying',
    ],
    tags: ['Grey hair', 'Premature greying', 'B12 deficiency', 'Trichologist', 'Hair health', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Greying starts before age 20',
      'It comes with hair loss',
      'A white tuft of hair comes with a white skin patch',
      'You also have tiredness, numbness or weight changes',
    ],
    faq: [
      {
        question: 'Can premature grey hair be reversed?',
        answer:
          'Not when it is genetic: there is no proven treatment. If the cause is a B12 or iron deficiency or a thyroid problem, treating it may slow the greying.',
      },
      {
        question: 'Which tests should I have for early grey hair?',
        answer:
          'Usually vitamin B12, ferritin, thyroid hormones and vitamin D. The trichologist sets the exact list after the exam and your history.',
      },
      {
        question: 'Can stress turn hair grey?',
        answer:
          'Long, severe stress can speed up greying. But going grey overnight is a myth: usually it is alopecia areata, where pigmented hairs fall out and grey ones remain.',
      },
      {
        question: 'If I pull out a grey hair, will more grow?',
        answer:
          'No, one follicle grows one hair. But pulling often damages the follicle, and over time hair may stop growing there.',
      },
    ],
  },
};

export const GREY_HAIR_ARTICLE: Article = {
  id: 'art-sochning-erta-oqarishi',
  slug: 'sochning-erta-oqarishi',
  title: {
    uz: 'Sochning erta oqarishi: sabablari, tahlillar va nima yordam beradi',
    ru: 'Ранняя седина: причины, анализы и что помогает',
    en: 'Premature Grey Hair: Causes, Tests and What Helps',
  },
  summary: {
    uz: GREY_HAIR_ARTICLE_CATALOG.uz.summary,
    ru: GREY_HAIR_ARTICLE_CATALOG.ru.summary,
    en: GREY_HAIR_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: GREY_HAIR_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: GREY_HAIR_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: GREY_HAIR_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Abdvaliyev Begali',
    ru: 'Абдвалиев Бегали',
    en: 'Dr. Begali Abdvaliyev',
  },
  date: '2026-12-25',
  image: COVER.uz,
  images: COVER,
  views: 0,
};
