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
  return `## Bolalarda so‘gallar: nega e’tiborsiz qoldirmaslik kerak?

So‘gallar — bolalar dermatologiga murojaatning eng ko‘p uchraydigan sabablaridan biri. Ular odatda xavfsiz (xavfli o‘sma emas) bo‘lsa-da, tez kattalashishi, boshqa joylarga tarqalishi, og‘riq va psixologik noqulaylik keltirishi mumkin.

Radeski Skin Clinic’da (Farg‘ona va Qo‘qon) bolalarda so‘gallarni olib tashlash zamonaviy italyan **CO₂-lazer DEKA** yordamida o‘tkaziladi — bu yuqori aniqlik va xavfsizlik bilan ajralib turadigan usullardan biri.

## So‘gallar nima uchun paydo bo‘ladi?

Asosiy sabab — **inson papilloma virusi (HPV)**. Yuqish odatda infeksiyalangan teri bilan aloqa yoki umumiy buyumlar orqali bo‘ladi.

Xavf yuqoriroq bo‘ladi, agar bolada:

- immunitet zaiflashgan bo‘lsa;
- basseyn va sport mashg‘ulotlariga borsa;
- tirnoq tishlash odatı bo‘lsa;
- terida mikrojarohatlar bo‘lsa;
- kaft va oyoq terisi haddan tashqari terlasa.

## Qanday turlari ko‘p uchraydi?

Bolalarda ko‘pincha:

- qo‘l va barmoqlardagi oddiy so‘gallar;
- oyoq tagidagi (plantar) so‘gallar;
- yuz va qo‘ldagi yassi so‘gallar;
- tirnoq atrofidagi so‘gallar.

Plantar so‘gallar ayniqsa og‘riqli bo‘lishi mumkin — yurishda doimiy bosim tushadi.

## So‘gallarni olib tashlash shartmi?

Ba’zan so‘gal o‘z-o‘zidan yo‘qolishi mumkin, lekin bu oylar yoki yillar olishi mumkin. Shu vaqt ichida u kattalashishi, og‘rishi yoki virus tarqalish manbaiga aylanishi mumkin.

Olib tashlash ko‘pincha tavsiya etiladi, agar:

- so‘gal tez o‘ssa;
- og‘riq paydo bo‘lsa;
- qonatsa;
- yangi elementlar ko‘paysa;
- yuzda yoki ochiq joylarda bo‘lsa;
- bola tashqi ko‘rinishidan bezovta bo‘lsa yoki uyalishi.

Aniq qaror faqat dermatolog ko‘rigidan so‘ng qabul qilinadi.

## Nega aynan CO₂-lazer DEKA?

Zamonaviy **CO₂-lazer DEKA** so‘gal to‘qimasiga aniq ta’sir qilib, sog‘lom teriga shikastni kamaytirishga yordam beradi.

### Usulning afzalliklari

- yuqori aniqlik;
- sog‘lom teriga minimal shikast;
- qisqa muolaja vaqti;
- kam qon ketishi;
- lazerning sterilizatsiyalovchi ta’siri;
- chandiq xavfining pastligi;
- tezroq bitish.

Shu bois yuz, barmoq, kaft va oyoq tagidagi so‘gallarda ham ko‘rib chiqiladi.

## Muolaja qanday o‘tadi?

Avval dermatolog hosilani ko‘rib, tashxisni tasdiqlaydi.

Kerak bo‘lsa, bola uchun qulaylik yaratish maqsadida **mahalliy og‘riqsizlantirish** qo‘llaniladi. Lazer so‘gal to‘qimasini qatlamma-qatlam bug‘latadi va tomirlarni bir vaqtda koagulyatsiya qiladi — shuning uchun qon ketish va infeksiya xavfi pastroq bo‘ladi.

Bitta so‘galni olib tashlash odatda bir necha daqiqa oladi.

## Bolaga og‘riqlimi?

Ota-onalarning eng ko‘p so‘ragan savoli shu. Mahalliy og‘riqsizlantirishdan keyin bola odatda yengil bosim yoki issiqlikni sezadi. Ko‘pchilik bolalar muolajani tinch o‘tkazadi — lekin sezuvchanlik individual.

## Keyingi parvarish

Shifokor individual tavsiyalar beradi. Ko‘pincha:

- po‘stloqni yirtmaslik;
- zonani toza va quruq saqlash;
- basseyn va saunani vaqtincha cheklash;
- to‘liq bitgunga qadar quyoshdan himoya qilish.

To‘liq tiklanish odatda **1–3 hafta** — o‘lcham va joylashuvga bog‘liq.

## Yangi so‘gallarni oldini olish mumkinmi?

To‘liq xavfsizlik kafolatlanmaydi, lekin ehtimolni kamaytirishga yordam beradi:

- shaxsiy gigiyena;
- basseynida shaxsiy poyabzal;
- jarohatlarni o‘z vaqtida ishlov berish;
- immunitetni mustahkamlash;
- dastlabki belgilarda dermatologga murojaat.

## Nega Radeski Skin Clinic?

Biz kichik bemorlar xavfsizligiga alohida e’tibor beramiz:

- zamonaviy italyan CO₂-lazer DEKA;
- tajribali dermatologlar;
- har bir bolaga individual yondashuv;
- teri hosilalarini aniq baholash;
- qulay muolaja sharoiti;
- zamonaviy klinik standartlar.

## Konsultatsiyaga yoziling

Bolada so‘gal paydo bo‘lsa, tashrifni kechiktirmang. Erta davolash odatda osonroq bo‘ladi va tarqalishni kamaytirishga yordam beradi.

Radeski Skin Clinic mutaxassislari Farg‘ona va Qo‘qonda bolaga mos yondashuvni tanlab, CO₂-lazer DEKA bilan xavfsiz olib tashlash rejasini tuzadi.`;
}

function ruBody(): string {
  return `## Бородавки у детей: почему их нельзя игнорировать

Бородавки — одна из самых частых причин обращения к детскому дерматологу. Несмотря на то что это доброкачественные образования, они могут быстро увеличиваться, распространяться на другие участки, вызывать боль и психологический дискомфорт.

В Radeski Skin Clinic (Фергана и Коканд) удаление бородавок у детей проводится на современном **CO₂-лазере DEKA** (Италия) — одном из точных и бережных методов лечения.

## Почему появляются бородавки?

Причина — **вирус папилломы человека (ВПЧ)**. Заражение происходит при контакте с инфицированной кожей или через предметы общего пользования.

Риск выше у детей:

- с ослабленным иммунитетом;
- посещающих бассейны и спортивные секции;
- имеющих привычку грызть ногти;
- при микротравмах кожи;
- при повышенной потливости стоп и ладоней.

## Какие бывают бородавки?

У детей чаще встречаются:

- обыкновенные бородавки на руках и пальцах;
- подошвенные бородавки;
- плоские бородавки на лице и руках;
- околоногтевые бородавки.

Подошвенные особенно болезненны: при ходьбе на них постоянно приходится давление.

## Нужно ли удалять бородавки?

Иногда бородавки исчезают сами, но ждать приходится месяцами или годами. За это время образование может вырасти, начать болеть или стать источником распространения вируса.

Удаление обычно рекомендуют, если:

- бородавка быстро растёт;
- появляется боль;
- образование кровоточит;
- элементов становится больше;
- они на лице или открытых участках;
- ребёнок испытывает дискомфорт или стесняется внешности.

Решение принимает дерматолог после осмотра.

## Почему именно CO₂-лазер DEKA?

Современный **CO₂-лазер DEKA** позволяет удалить бородавку точечно, воздействуя преимущественно на патологическую ткань.

### Преимущества метода

- высокая точность;
- минимальное повреждение здоровой кожи;
- быстрая процедура;
- минимальная кровоточивость;
- стерилизующее действие лазера;
- низкий риск рубцов;
- относительно быстрое заживление.

Поэтому метод часто выбирают для лица, пальцев, ладоней и подошв.

## Как проходит процедура?

Врач-дерматолог осматривает образование и подтверждает диагноз.

При необходимости используют **местную анестезию**, чтобы ребёнку было комфортнее. Лазер послойно испаряет ткани бородавки и одновременно коагулирует сосуды — кровотечение обычно минимально, риск инфицирования ниже.

Удаление одной бородавки чаще всего занимает несколько минут.

## Больно ли ребёнку?

Это частый вопрос родителей. После местной анестезии обычно ощущается лёгкое давление или тепло. Большинство детей переносит процедуру спокойно, хотя чувствительность индивидуальна.

## Уход после удаления

Врач даёт персональные рекомендации. Как правило:

- не сдирать корочку;
- держать зону чистой и сухой;
- временно ограничить бассейн и сауну;
- защищать кожу от солнца до полного заживления.

Полное восстановление обычно занимает **1–3 недели** — зависит от размера и расположения.

## Можно ли предотвратить новые бородавки?

Полностью исключить риск нельзя, но снизить вероятность помогают:

- личная гигиена;
- индивидуальная обувь в бассейне;
- своевременная обработка ссадин;
- укрепление иммунитета;
- обращение к дерматологу при первых признаках.

## Почему выбирают Radeski Skin Clinic?

Мы уделяем особое внимание безопасности маленьких пациентов:

- итальянский CO₂-лазер DEKA;
- опытные дерматологи;
- индивидуальный подход к ребёнку;
- точная оценка кожных новообразований;
- комфортные условия процедуры;
- современные клинические стандарты.

## Запишитесь на консультацию

Если у ребёнка появилась бородавка, не откладывайте визит. Чем раньше начато лечение, тем проще убрать образование и снизить риск распространения.

Специалисты Radeski Skin Clinic в Фергане и Коканде подберут подходящий план и безопасно удалят бородавку на CO₂-лазере DEKA.`;
}

function enBody(): string {
  return `## Warts in children: why they should not be ignored

Warts are one of the most common reasons families see a pediatric dermatologist. Even though they are benign, they can grow quickly, spread to other areas, cause pain, and affect a child’s confidence.

At Radeski Skin Clinic (Fergana and Kokand), childhood warts are removed with a modern Italian **DEKA CO₂ laser** — a precise, controlled option when treatment is needed.

## Why do warts appear?

Warts are caused by **human papillomavirus (HPV)**. Infection usually happens through contact with infected skin or shared surfaces.

Risk is higher in children who:

- have a temporarily weaker immune response;
- attend swimming pools or sports clubs;
- bite their nails;
- have small skin injuries;
- have sweaty palms or soles.

## Which types are most common?

In children, we most often see:

- common warts on hands and fingers;
- plantar warts on the soles;
- flat warts on the face and hands;
- periungual warts around the nails.

Plantar warts can be especially painful because walking constantly presses on them.

## Do warts always need removal?

Some warts resolve on their own, but that can take months or years. During that time they may enlarge, hurt, or spread the virus.

Removal is often considered when:

- the wart grows quickly;
- pain develops;
- it bleeds;
- new lesions appear;
- they are on the face or visible areas;
- the child feels discomfort or is embarrassed.

The final decision is made after a dermatologist examination.

## Why DEKA CO₂ laser?

A modern **DEKA CO₂ laser** can remove wart tissue with high precision while limiting injury to surrounding healthy skin.

### Advantages

- high precision;
- less damage to healthy skin;
- short procedure time;
- minimal bleeding;
- laser’s sterilizing effect;
- lower scar risk;
- relatively quick healing.

That makes it a practical option for the face, fingers, palms, and soles.

## How does the procedure work?

The dermatologist examines the lesion and confirms the diagnosis.

When needed, **local anesthesia** is used for comfort. The laser vaporizes wart tissue layer by layer while coagulating vessels, so bleeding and infection risk stay low.

Removing one wart usually takes only a few minutes.

## Is it painful for the child?

This is parents’ most common question. After local anesthesia, children typically feel mild pressure or warmth. Most tolerate the procedure calmly, though sensitivity varies.

## Aftercare

Your doctor will give personalized instructions. Usually you should:

- not pick the crust;
- keep the area clean and dry;
- pause swimming pools and saunas for a while;
- protect the skin from sun until healed.

Full recovery commonly takes **1–3 weeks**, depending on size and location.

## Can new warts be prevented?

Risk cannot be fully eliminated, but you can lower it by:

- good personal hygiene;
- personal footwear in pools;
- prompt care for cuts and scrapes;
- supporting overall immunity;
- seeing a dermatologist at the first signs.

## Why families choose Radeski Skin Clinic

We focus on safety for young patients:

- modern Italian DEKA CO₂ laser;
- experienced dermatologists;
- individual care for each child;
- careful assessment of skin growths;
- comfortable treatment conditions;
- contemporary clinical standards.

## Book a consultation

If your child has a wart, do not wait too long. Earlier treatment is usually simpler and helps reduce spread.

The Radeski Skin Clinic team in Fergana and Kokand will choose a suitable plan and remove the wart safely with DEKA CO₂ laser when indicated.`;
}

export const PEDIATRIC_WARTS_CO2_DEKA_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Bolalarda so‘gallarni Farg‘ona va Qo‘qonda Radeski Skin Clinic’da CO₂-lazer DEKA bilan xavfsiz olib tashlash: sabablari, qachon kerak, muolaja va keyingi parvarish.',
    body: uzBody(),
    keyTakeaways: [
      'Bolalardagi so‘gallar HPV bilan bog‘liq bo‘lishi mumkin va tez tarqalishi mumkin',
      'CO₂-lazer DEKA aniq ta’sir qilib, sog‘lom teriga shikastni kamaytirishga yordam beradi',
      'Mahalliy og‘riqsizlantirish bilan ko‘p bolalar muolajani tinch o‘tkazadi',
      'Tiklanish odatda 1–3 hafta; po‘stloqni yirtmaslik va quyoshdan himoya muhim',
    ],
    tags: [
      'Bolalarda sogal',
      'CO2 lazer',
      'DEKA',
      'HPV',
      'Dermatologiya',
      'Fargona',
      'Qoqon',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'So‘gal tez o‘sayotgan bo‘lsa',
      'Og‘riq, qonash yoki yangi elementlar paydo bo‘lsa',
      'Yuzda yoki ochiq joylarda joylashgan bo‘lsa',
      'Oyoq tagidagi so‘gal yurishni qiyinlashtirsa',
      'Uy sharoitida o‘zingiz olib tashlamoqchi bo‘lsangiz — avval dermatologga murojaat qiling',
    ],
    faq: [
      {
        question: 'Boladagi so‘gal o‘z-o‘zidan o‘tib ketadimi?',
        answer:
          'Ba’zan ha, lekin bu uzoq davom etishi mumkin. Shu vaqt ichida u kattalashishi yoki tarqalishi mumkin — shuning uchun dermatolog bahosi muhim.',
      },
      {
        question: 'CO₂-lazer og‘riqlimi?',
        answer:
          'Kerak bo‘lsa mahalliy og‘riqsizlantirish qo‘llaniladi. Ko‘pincha yengil bosim yoki issiqlik seziladi.',
      },
      {
        question: 'Chandiq qoladimi?',
        answer:
          'Zamonaviy CO₂-lazer bilan chandiq xavfi pastroq, lekin natija joylashuv, o‘lcham va bitishga bog‘liq.',
      },
      {
        question: 'Farg‘ona va Qo‘qonda qayerda olib tashlash mumkin?',
        answer:
          'Radeski Skin Clinic’da dermatolog ko‘rigidan so‘ng DEKA CO₂-lazer bilan individual reja tuziladi.',
      },
    ],
  },
  ru: {
    summary:
      'Безопасное удаление бородавок у детей в Фергане и Коканде на CO₂-лазере DEKA в Radeski Skin Clinic: причины, показания, ход процедуры и уход.',
    body: ruBody(),
    keyTakeaways: [
      'Детские бородавки связаны с ВПЧ и могут быстро распространяться',
      'CO₂-лазер DEKA позволяет точечно убрать патологическую ткань',
      'При местной анестезии большинство детей переносит процедуру спокойно',
      'Заживление обычно занимает 1–3 недели; корочку сдирать нельзя',
    ],
    tags: [
      'Бородавки у детей',
      'CO2 лазер',
      'DEKA',
      'ВПЧ',
      'Дерматология',
      'Фергана',
      'Коканд',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Бородавка быстро растёт',
      'Появились боль, кровотечение или новые элементы',
      'Образование на лице или открытых участках',
      'Подошвенная бородавка мешает ходить',
      'Хотите удалить самостоятельно — сначала покажитесь дерматологу',
    ],
    faq: [
      {
        question: 'Может ли бородавка у ребёнка пройти сама?',
        answer:
          'Иногда да, но ожидание может затянуться на месяцы и годы. За это время возможны рост и распространение — нужен осмотр дерматолога.',
      },
      {
        question: 'Больно ли удалять лазером?',
        answer:
          'При необходимости используется местная анестезия. Обычно ощущается лёгкое давление или тепло.',
      },
      {
        question: 'Останется ли шрам?',
        answer:
          'Риск рубца при современном CO₂-лазере ниже, но результат зависит от зоны, размера и заживления.',
      },
      {
        question: 'Где удаляют бородавки у детей в Фергане и Коканде?',
        answer:
          'В Radeski Skin Clinic после консультации дерматолога составляют план удаления на CO₂-лазере DEKA.',
      },
    ],
  },
  en: {
    summary:
      'Safe childhood wart removal in Fergana and Kokand with DEKA CO₂ laser at Radeski Skin Clinic: causes, when to treat, the procedure, and aftercare.',
    body: enBody(),
    keyTakeaways: [
      'Childhood warts are HPV-related and can spread quickly',
      'DEKA CO₂ laser targets wart tissue with high precision',
      'With local anesthesia, most children tolerate treatment calmly',
      'Healing usually takes 1–3 weeks; do not pick the crust',
    ],
    tags: [
      'Warts in children',
      'CO2 laser',
      'DEKA',
      'HPV',
      'Dermatology',
      'Fergana',
      'Kokand',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'The wart is growing quickly',
      'There is pain, bleeding, or new lesions',
      'It is on the face or a visible area',
      'A plantar wart makes walking painful',
      'You are considering home removal — see a dermatologist first',
    ],
    faq: [
      {
        question: 'Can a child’s wart go away on its own?',
        answer:
          'Sometimes yes, but it may take a long time. During that period it can grow or spread — a dermatologist assessment is important.',
      },
      {
        question: 'Is laser removal painful?',
        answer:
          'Local anesthesia is used when needed. Most children feel only mild pressure or warmth.',
      },
      {
        question: 'Will there be a scar?',
        answer:
          'Modern CO₂ laser treatment has a relatively low scar risk, but results depend on location, size, and healing.',
      },
      {
        question: 'Where can childhood warts be removed in Fergana and Kokand?',
        answer:
          'At Radeski Skin Clinic, a dermatologist plans DEKA CO₂ laser removal after examination when it is indicated.',
      },
    ],
  },
};

export const PEDIATRIC_WARTS_CO2_DEKA_ARTICLE: Article = {
  id: 'art-bolalarda-sogal-co2-deka',
  slug: 'bolalarda-sogal-olib-tashlash-co2-lazer-deka-fargona',
  title: {
    uz: 'Bolalarda so‘gallar: CO₂-lazer DEKA bilan xavfsiz olib tashlash | Radeski Skin Clinic',
    ru: 'Бородавки у детей: безопасное удаление CO₂-лазером DEKA в Radeski Skin Clinic',
    en: 'Warts in Children: Safe Removal with DEKA CO₂ Laser at Radeski Skin Clinic',
  },
  summary: {
    uz: PEDIATRIC_WARTS_CO2_DEKA_ARTICLE_CATALOG.uz.summary,
    ru: PEDIATRIC_WARTS_CO2_DEKA_ARTICLE_CATALOG.ru.summary,
    en: PEDIATRIC_WARTS_CO2_DEKA_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: PEDIATRIC_WARTS_CO2_DEKA_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: PEDIATRIC_WARTS_CO2_DEKA_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: PEDIATRIC_WARTS_CO2_DEKA_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-08-03',
  image: null,
  images: { uz: null, ru: null, en: null },
  views: 0,
};
