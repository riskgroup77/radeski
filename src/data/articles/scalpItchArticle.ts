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
 * Itchy scalp: the common causes (seborrheic dermatitis and dandruff, scalp psoriasis, contact
 * dermatitis from hair dye and shampoo, fungal infection, lice, dry scalp, nerves), how to tell
 * them apart, what helps at home and what does not, when itching comes with hair loss. Search
 * Console: "bosh qichishi sabablari" (position 8.5, no page answering it). Clinic facts: trichology
 * and dermatology in both branches, trichoscopy, scraping for fungus.
 */

const COVER = {
  uz: '/articles/bosh-terisi-qichishi-cover-uz.jpg',
  ru: '/articles/bosh-terisi-qichishi-cover-ru.jpg',
  en: '/articles/bosh-terisi-qichishi-cover-en.jpg',
};

function uzBody(): string {
  return `Bosh terisining qichishi — trixolog va dermatologga eng ko‘p murojaat qilinadigan shikoyatlardan biri. Ko‘pincha sababi oddiy: noto‘g‘ri shampun yoki quruq havo. Lekin qichish kepak, qizarish, yaralar yoki soch to‘kilishi bilan birga kelsa, bu teri kasalligi belgisi bo‘lishi mumkin. Quyida bosh qichishining asosiy sabablari, ularni qanday farqlash va qachon shifokorga borish kerakligini tushuntiramiz.

## Bosh qichishining asosiy sabablari

### 1. Seboreyali dermatit va kepak

Eng ko‘p uchraydigan sabab. Yog‘ bezlari faol joylarda — bosh terisi, qosh, burun yonlari — **sarg‘ish, yog‘li kepak**, qizarish va qichish paydo bo‘ladi. Kuz-qishda, stress va uyqusizlikdan keyin kuchayadi. Batafsil: [Seboreyali dermatit](/uz/articles/art-seboreyali-dermatit).

### 2. Bosh terisi psoriazi

Aniq chegarali, **qalin, kumushrang qatlamli** pilakchalar. Ko‘pincha soch chegarasidan peshonaga, quloq orqasiga chiqadi. Qichish kuchli bo‘lishi mumkin, qatlamni qirib olsa qonaydi. Batafsil: [Bosh terisi psoriazi](/uz/articles/art-bosh-terisi-psoriazi).

### 3. Kontakt dermatit (allergiya)

Soch bo‘yog‘i, yangi shampun, lak yoki niqobdan keyin **1–3 kun ichida** boshlangan qichish, qizarish, achishish. Ayniqsa qora bo‘yoqlardagi parafenilendiamin (PPD) kuchli allergen. Yuz va quloqlar shishsa — shoshilinch ko‘rik kerak.

### 4. Zamburug‘ infeksiyasi

Bolalarda ko‘proq uchraydi: **dumaloq o‘choqlar**, sochlar sinib qisqa “to‘nka” qoladi, kepaklanish. Kattalarda ham bo‘ladi, ayniqsa uy hayvonlari bilan aloqada. Tashxis qirindi tahlili bilan qo‘yiladi; oddiy shampun yordam bermaydi. Batafsil: [Teri zamburug‘i](/uz/articles/art-teri-zamburugi).

### 5. Bit (pedikulyoz)

Asosan ensa va quloq orqasida kuchli qichish, sochda mayda oq **sirkalar** (tuxumlar) yopishgan bo‘ladi. Bolalar jamoasida tez tarqaladi, butun oilani tekshirish kerak.

### 6. Quruq bosh terisi

Qishda isitish, issiq suv va tez-tez yuvishdan bosh terisi quriydi: mayda oq kepak, tortishish hissi, lekin qizarish deyarli yo‘q. Yumshoq shampun va kamroq issiq suv ko‘pincha yetarli.

### 7. Asab va boshqa sabablar

Stress, xavotir, ba’zi dorilar, qandli diabet, jigar va qalqonsimon bez kasalliklari ham qichish berishi mumkin. Terida o‘zgarish ko‘rinmasa-yu, qichish uzoq davom etsa, umumiy tekshiruv kerak.

## Sababni qanday farqlash mumkin?

| Belgilar | Ehtimoliy sabab |
|---|---|
| Sarg‘ish yog‘li kepak, qosh va burun yonlarida ham qizarish | Seboreyali dermatit |
| Qalin kumushrang qatlam, aniq chegara, tirsak-tizzada ham dog‘lar | Psoriaz |
| Bo‘yoq yoki yangi vositadan keyin qizarish va achishish | Kontakt dermatit |
| Dumaloq o‘choq, sochlar sinib qolgan | Zamburug‘ |
| Ensada qichish, sochda oq sirkalar | Bit |
| Mayda oq kepak, qizarish yo‘q, qishda kuchayadi | Quruq teri |

Jadval faqat yo‘nalish beradi. Bir nechta sabab birga bo‘lishi mumkin, aniq tashxisni shifokor qo‘yadi.

## Qichish va soch to‘kilishi

Kuchli qichish va qashlash soch ildizini jarohatlaydi, yallig‘lanish esa sochning o‘sish bosqichini buzadi. Shuning uchun seboreyali dermatit, psoriaz va zamburug‘da soch ko‘proq to‘kilishi mumkin. Odatda sabab davolangach, to‘kilish ham kamayadi. Agar o‘choqli to‘kilish yoki chandiq paydo bo‘lsa, trixoskopiya qilinadi: [Trixolog va trixoskopiya](/uz/articles/art-trixolog-trixoskopiya).

## Uyda nima qilish mumkin va nima mumkin emas

**Foydali:**

- yumshoq, atirsiz shampun; boshni iliq (issiq emas) suv bilan yuvish;
- kepakka qarshi shampun (ketokonazol, sink piriton, salitsil kislota) — ko‘rsatmaga qarab haftasiga 2–3 marta, ko‘pikni 3–5 daqiqa ushlab turib;
- fenni sovuq rejimda ishlatish, qattiq taroqdan voz kechish;
- yangi bo‘yoq yoki vositadan oldin quloq orqasida 48 soatlik sinov.

**Zararli:**

- tirnoq bilan qashlash va qatlamlarni qirib olish — infeksiya va soch to‘kilishiga olib keladi;
- shifokorsiz gormonli malhamlarni uzoq qo‘llash;
- sirka, kerosin, sarimsoq kabi xalq usullari — kimyoviy kuyish va allergiya beradi;
- zamburug‘ yoki bitda faqat oddiy shampunga umid qilish.

## Radeski’da qanday tekshiriladi

Dermatolog yoki trixolog bosh terisini kattalashtirib ko‘radi, kerak bo‘lsa **trixoskopiya** qiladi, zamburug‘ga shubha bo‘lsa qirindi oladi. Tashxisga qarab maxsus shampun va losyonlar, yallig‘lanishga qarshi davolash, psoriazda esa fototerapiya tanlanadi. Qabul Farg‘ona va Qo‘qon filiallarida: [Trixolog Farg‘onada](/uz/fargona/trixolog), [Dermatolog Qo‘qonda](/uz/qoqon/dermatolog).

*Ushbu maqola umumiy ma’lumot uchun. Yakuniy tashxis va davolashni faqat shifokor belgilaydi.*`;
}

function ruBody(): string {
  return `Зуд кожи головы — одна из самых частых жалоб у трихолога и дерматолога. Нередко причина простая: неподходящий шампунь или сухой воздух. Но если зуд сопровождается перхотью, покраснением, ранками или выпадением волос, это может быть признаком болезни кожи. Разберём основные причины, как их отличить и когда идти к врачу.

## Основные причины зуда кожи головы

### 1. Себорейный дерматит и перхоть

Самая частая причина. В зонах с активными сальными железами — коже головы, бровях, у крыльев носа — появляются **желтоватые жирные чешуйки**, покраснение и зуд. Усиливается осенью и зимой, после стресса и недосыпа. Подробнее: [Себорейный дерматит](/ru/articles/art-seboreyali-dermatit).

### 2. Псориаз кожи головы

Чётко очерченные бляшки с **толстыми серебристыми чешуйками**, часто переходящие за линию роста волос на лоб и за уши. Зуд бывает сильным, при снятии чешуек — кровоточивость. Подробнее: [Псориаз кожи головы](/ru/articles/art-bosh-terisi-psoriazi).

### 3. Контактный дерматит (аллергия)

Зуд, покраснение и жжение через **1–3 дня** после окрашивания, нового шампуня, лака или маски. Особенно сильный аллерген — парафенилендиамин (PPD) в тёмных красках. Если отекают лицо и уши — нужен срочный осмотр.

### 4. Грибковая инфекция

Чаще у детей: **округлые очаги**, волосы обламываются и оставляют короткие «пеньки», шелушение. Бывает и у взрослых, особенно при контакте с домашними животными. Диагноз ставят по соскобу; обычный шампунь не помогает. Подробнее: [Грибок кожи](/ru/articles/art-teri-zamburugi).

### 5. Вши (педикулёз)

Сильный зуд в основном на затылке и за ушами, на волосах — приклеенные мелкие белые **гниды**. Быстро распространяется в детских коллективах, проверять нужно всю семью.

### 6. Сухость кожи головы

Зимой от отопления, горячей воды и частого мытья кожа головы пересыхает: мелкие белые чешуйки, чувство стянутости, но почти без покраснения. Часто хватает мягкого шампуня и менее горячей воды.

### 7. Нервы и другие причины

Стресс, тревога, некоторые лекарства, сахарный диабет, болезни печени и щитовидной железы тоже могут вызывать зуд. Если на коже изменений нет, а зуд держится долго, нужно общее обследование.

## Как отличить причину

| Признаки | Вероятная причина |
|---|---|
| Желтоватые жирные чешуйки, покраснение на бровях и у носа | Себорейный дерматит |
| Толстые серебристые чешуйки, чёткие границы, бляшки на локтях и коленях | Псориаз |
| Покраснение и жжение после краски или нового средства | Контактный дерматит |
| Округлый очаг, обломанные волосы | Грибок |
| Зуд на затылке, белые гниды на волосах | Вши |
| Мелкие белые чешуйки без покраснения, хуже зимой | Сухость кожи |

Таблица лишь подсказывает направление. Причин может быть несколько, точный диагноз ставит врач.

## Зуд и выпадение волос

Сильный зуд и расчёсы травмируют волосяные луковицы, а воспаление нарушает фазу роста волос. Поэтому при себорейном дерматите, псориазе и грибке волосы могут выпадать сильнее. Обычно после лечения причины выпадение уменьшается. Если появились очаги облысения или рубцы, проводят трихоскопию: [Трихолог и трихоскопия](/ru/articles/art-trixolog-trixoskopiya).

## Что можно делать дома, а что нельзя

**Полезно:**

- мягкий шампунь без отдушек, мыть голову тёплой (не горячей) водой;
- шампунь от перхоти (кетоконазол, пиритион цинка, салициловая кислота) — по инструкции 2–3 раза в неделю, держа пену 3–5 минут;
- холодный режим фена, отказ от жёсткой расчёски;
- тест за ухом за 48 часов до новой краски или средства.

**Вредно:**

- расчёсывать ногтями и сдирать чешуйки — это ведёт к инфекции и выпадению волос;
- долго использовать гормональные мази без врача;
- народные средства вроде уксуса, керосина, чеснока — дают химический ожог и аллергию;
- надеяться только на обычный шампунь при грибке или вшах.

## Как обследуют в Radeski

Дерматолог или трихолог осматривает кожу головы под увеличением, при необходимости делает **трихоскопию**, при подозрении на грибок берёт соскоб. По диагнозу подбирают лечебные шампуни и лосьоны, противовоспалительное лечение, при псориазе — фототерапию. Приём в филиалах в Фергане и Коканде: [Трихолог в Фергане](/ru/fargona/trixolog), [Дерматолог в Коканде](/ru/qoqon/dermatolog).

*Статья носит информационный характер. Диагноз и лечение назначает только врач.*`;
}

function enBody(): string {
  return `An itchy scalp is one of the most common reasons people see a trichologist or dermatologist. Often the cause is simple: the wrong shampoo or dry air. But when itching comes with flakes, redness, sores or hair loss, it may be a sign of a skin condition. Below are the main causes, how to tell them apart and when to see a doctor.

## Main causes of an itchy scalp

### 1. Seborrheic dermatitis and dandruff

The most common cause. Where oil glands are active — the scalp, eyebrows, sides of the nose — **yellowish, greasy flakes**, redness and itching appear. It gets worse in autumn and winter, and after stress or poor sleep. More: [Seborrheic dermatitis](/en/articles/art-seboreyali-dermatit).

### 2. Scalp psoriasis

Sharply outlined plaques with **thick, silvery scales**, often spreading past the hairline onto the forehead and behind the ears. Itching can be intense, and scales bleed when picked off. More: [Scalp psoriasis](/en/articles/art-bosh-terisi-psoriazi).

### 3. Contact dermatitis (allergy)

Itching, redness and burning **1–3 days** after hair dye, a new shampoo, hairspray or mask. Para-phenylenediamine (PPD) in dark dyes is a particularly strong allergen. If the face and ears swell, see a doctor urgently.

### 4. Fungal infection

More common in children: **round patches**, hairs break off leaving short stubs, flaking. Adults get it too, especially with pets at home. It is diagnosed with a scraping; ordinary shampoo does not help. More: [Skin fungus](/en/articles/art-teri-zamburugi).

### 5. Head lice

Strong itching mainly at the back of the head and behind the ears, with tiny white **nits** stuck to the hair. It spreads quickly among children, so the whole family should be checked.

### 6. Dry scalp

In winter, heating, hot water and frequent washing dry the scalp: small white flakes, a tight feeling, but hardly any redness. A gentle shampoo and cooler water are often enough.

### 7. Nerves and other causes

Stress, anxiety, some medicines, diabetes, liver and thyroid disease can also cause itching. If the skin looks normal but itching lasts, a general check-up is needed.

## How to tell the cause

| Signs | Likely cause |
|---|---|
| Yellowish greasy flakes, redness on eyebrows and beside the nose | Seborrheic dermatitis |
| Thick silvery scales, sharp borders, patches on elbows and knees | Psoriasis |
| Redness and burning after dye or a new product | Contact dermatitis |
| Round patch, broken hairs | Fungus |
| Itching at the back of the head, white nits on hair | Lice |
| Small white flakes, no redness, worse in winter | Dry scalp |

The table only points in a direction. Several causes can coexist; a doctor makes the diagnosis.

## Itching and hair loss

Strong itching and scratching injure the hair roots, and inflammation disrupts the growth phase. So hair may shed more with seborrheic dermatitis, psoriasis and fungus. Shedding usually eases once the cause is treated. Bald patches or scarring call for trichoscopy: [Trichologist and trichoscopy](/en/articles/art-trixolog-trixoskopiya).

## What to do at home — and what not to

**Helpful:**

- a gentle, fragrance-free shampoo; wash with warm, not hot, water;
- an anti-dandruff shampoo (ketoconazole, zinc pyrithione, salicylic acid) 2–3 times a week as directed, leaving the lather on for 3–5 minutes;
- a cool hairdryer setting and a soft brush;
- a 48-hour patch test behind the ear before a new dye or product.

**Harmful:**

- scratching with nails and picking off scales — this leads to infection and hair loss;
- long-term steroid ointments without a doctor;
- home remedies such as vinegar, kerosene or garlic — they cause chemical burns and allergy;
- relying on ordinary shampoo for fungus or lice.

## How we check it at Radeski

A dermatologist or trichologist examines the scalp under magnification, performs **trichoscopy** if needed and takes a scraping when fungus is suspected. Depending on the diagnosis, medicated shampoos and lotions, anti-inflammatory treatment or, for psoriasis, phototherapy are chosen. Appointments in Fergana and Kokand: [Trichologist in Fergana](/en/fargona/trixolog), [Dermatologist in Kokand](/en/qoqon/dermatolog).

*This article is for general information. Only a doctor can make a diagnosis and prescribe treatment.*`;
}

export const SCALP_ITCH_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Bosh qichishi sabablari: seboreyali dermatit va kepak, psoriaz, bo‘yoqqa allergiya, zamburug‘, bit va quruq teri. Qanday farqlash, uyda nima qilish va qachon trixologga borish.',
    body: uzBody(),
    keyTakeaways: [
      'Eng ko‘p sabab — seboreyali dermatit (yog‘li kepak)',
      'Qalin kumushrang qatlam psoriaz belgisi bo‘lishi mumkin',
      'Bo‘yoqdan 1–3 kun keyin boshlangan qichish — allergiya ehtimoli',
      'Zamburug‘ va bitni oddiy shampun davolamaydi',
      'Qashlash va qatlamni qirib olish soch to‘kilishini kuchaytiradi',
    ],
    tags: ['Bosh qichishi', 'Kepak', 'Seboreyali dermatit', 'Bosh terisi psoriazi', 'Trixolog', 'Soch to‘kilishi', 'Farg‘ona', 'Qo‘qon', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Qichish 2 haftadan ortiq davom etsa yoki uyqu buzilsa',
      'Qalin qatlam, qonaydigan yoki yiringli yaralar bo‘lsa',
      'Dumaloq tuksiz o‘choq yoki sochlar sinib qolsa',
      'Bo‘yoqdan keyin yuz yoki quloqlar shishsa',
      'Qichish bilan birga soch ko‘p to‘kilsa',
    ],
    faq: [
      {
        question: 'Bosh qichishining eng ko‘p sababi nima?',
        answer:
          'Ko‘pincha seboreyali dermatit (yog‘li kepak) va quruq bosh terisi. Kamroq — psoriaz, bo‘yoqqa allergiya, zamburug‘ va bit. Aniq sababni shifokor ko‘rik bilan aniqlaydi.',
      },
      {
        question: 'Kepakka qarshi shampun qachon yordam bermaydi?',
        answer:
          'Psoriaz, zamburug‘ infeksiyasi, bit va allergiyada oddiy kepak shampuni yetarli emas. 2–4 hafta ichida yaxshilanish bo‘lmasa, dermatolog yoki trixologga murojaat qiling.',
      },
      {
        question: 'Bosh qichishidan soch to‘kiladimi?',
        answer:
          'Yallig‘lanish va qashlash soch to‘kilishini kuchaytirishi mumkin. Sabab davolangach, to‘kilish odatda kamayadi; o‘choqli to‘kilishda trixoskopiya qilinadi.',
      },
      {
        question: 'Bolada bosh qichisa nima qilish kerak?',
        answer:
          'Avval sochni bit va sirkalarga tekshiring. Dumaloq o‘choqlar yoki sinib qolgan sochlar bo‘lsa, zamburug‘ bo‘lishi mumkin — bolani dermatologga ko‘rsating.',
      },
    ],
  },
  ru: {
    summary:
      'Почему чешется кожа головы: себорейный дерматит и перхоть, псориаз, аллергия на краску, грибок, вши и сухость. Как отличить причину, что делать дома и когда идти к трихологу.',
    body: ruBody(),
    keyTakeaways: [
      'Самая частая причина — себорейный дерматит (жирная перхоть)',
      'Толстые серебристые чешуйки могут быть признаком псориаза',
      'Зуд через 1–3 дня после окрашивания — вероятная аллергия',
      'Грибок и вши обычным шампунем не лечатся',
      'Расчёсы и сдирание чешуек усиливают выпадение волос',
    ],
    tags: ['Зуд кожи головы', 'Перхоть', 'Себорейный дерматит', 'Псориаз кожи головы', 'Трихолог', 'Выпадение волос', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Зуд длится дольше 2 недель или мешает спать',
      'Есть толстые корки, кровоточащие или гнойные ранки',
      'Появился округлый очаг без волос или волосы обламываются',
      'После окрашивания отекли лицо или уши',
      'Вместе с зудом сильно выпадают волосы',
    ],
    faq: [
      {
        question: 'Какая самая частая причина зуда кожи головы?',
        answer:
          'Чаще всего себорейный дерматит (жирная перхоть) и сухость кожи головы. Реже — псориаз, аллергия на краску, грибок и вши. Точную причину врач определяет при осмотре.',
      },
      {
        question: 'Когда шампунь от перхоти не помогает?',
        answer:
          'При псориазе, грибковой инфекции, вшах и аллергии обычного шампуня от перхоти недостаточно. Если за 2–4 недели нет улучшения, обратитесь к дерматологу или трихологу.',
      },
      {
        question: 'Выпадают ли волосы от зуда кожи головы?',
        answer:
          'Воспаление и расчёсы могут усиливать выпадение. После лечения причины выпадение обычно уменьшается; при очаговом выпадении делают трихоскопию.',
      },
      {
        question: 'Что делать, если у ребёнка чешется голова?',
        answer:
          'Сначала проверьте волосы на вшей и гниды. Если есть округлые очаги или обломанные волосы, возможен грибок — покажите ребёнка дерматологу.',
      },
    ],
  },
  en: {
    summary:
      'Why your scalp itches: seborrheic dermatitis and dandruff, psoriasis, hair-dye allergy, fungus, lice and dryness. How to tell the cause, what to do at home and when to see a trichologist.',
    body: enBody(),
    keyTakeaways: [
      'The most common cause is seborrheic dermatitis (greasy dandruff)',
      'Thick silvery scales may point to psoriasis',
      'Itching 1–3 days after hair dye suggests an allergy',
      'Fungus and lice are not treated by ordinary shampoo',
      'Scratching and picking scales make hair loss worse',
    ],
    tags: ['Itchy scalp', 'Dandruff', 'Seborrheic dermatitis', 'Scalp psoriasis', 'Trichologist', 'Hair loss', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Itching lasts more than 2 weeks or disturbs sleep',
      'There are thick crusts, bleeding or pus-filled sores',
      'A round bald patch appears or hairs break off',
      'The face or ears swell after hair dye',
      'Itching comes with heavy hair shedding',
    ],
    faq: [
      {
        question: 'What is the most common cause of an itchy scalp?',
        answer:
          'Most often seborrheic dermatitis (greasy dandruff) and a dry scalp. Less often psoriasis, hair-dye allergy, fungus or lice. A doctor finds the exact cause on examination.',
      },
      {
        question: 'When does anti-dandruff shampoo not help?',
        answer:
          'It is not enough for psoriasis, fungal infection, lice or allergy. If there is no improvement in 2–4 weeks, see a dermatologist or trichologist.',
      },
      {
        question: 'Can an itchy scalp cause hair loss?',
        answer:
          'Inflammation and scratching can increase shedding. It usually eases once the cause is treated; patchy hair loss calls for trichoscopy.',
      },
      {
        question: 'What should I do if my child’s scalp itches?',
        answer:
          'First check the hair for lice and nits. Round patches or broken hairs may mean fungus — have a dermatologist examine your child.',
      },
    ],
  },
};

export const SCALP_ITCH_ARTICLE: Article = {
  id: 'art-bosh-terisi-qichishi',
  slug: 'bosh-terisi-qichishi',
  title: {
    uz: 'Bosh terisi qichishi: 7 ta sabab, qanday farqlash va qachon trixologga borish',
    ru: 'Почему чешется кожа головы: 7 причин, как их отличить и когда идти к трихологу',
    en: 'Itchy Scalp: 7 Causes, How to Tell Them Apart and When to See a Trichologist',
  },
  summary: {
    uz: SCALP_ITCH_ARTICLE_CATALOG.uz.summary,
    ru: SCALP_ITCH_ARTICLE_CATALOG.ru.summary,
    en: SCALP_ITCH_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: SCALP_ITCH_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: SCALP_ITCH_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: SCALP_ITCH_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Abdvaliyev Begali Sheraliyevich',
    ru: 'Абдвалиев Бегали Шералиевич',
    en: 'Dr. Begali Sheraliyevich Abdvaliyev',
  },
  date: '2026-11-28',
  image: COVER.uz,
  images: COVER,
  views: 0,
};
