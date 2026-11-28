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
 * Scalp ringworm in children (tinea capitis: microsporia, trichophytosis — "temiratki",
 * "стригущий лишай"): round scaly patches with broken hairs, spread from cats, dogs and other
 * children, why creams alone do not cure it, the fungal test of the scalp at the clinic lab
 * (price list: "Zamburug' tahlili (sochli bosh qismi)"), home hygiene and when the child can
 * go back to school or kindergarten.
 */

const COVER = {
  uz: '/articles/bolalarda-bosh-temiratkisi-cover-uz.jpg',
  ru: '/articles/bolalarda-bosh-temiratkisi-cover-ru.jpg',
  en: '/articles/bolalarda-bosh-temiratkisi-cover-en.jpg',
};

function uzBody(): string {
  return `Bolaning boshida dumaloq, po‘st tashlaydigan, sochlari sinib qolgan joy paydo bo‘lsa, bu ko‘pincha **bosh terisi temiratkisi** — sochli bosh terisining zamburug‘ kasalligi (mikrosporiya yoki trixofitiya). U asosan 3–12 yoshli bolalarda uchraydi va **yuqumli**. Yaxshi xabar: to‘g‘ri tashxis va to‘liq davolash bilan soch odatda to‘liq tiklanadi.

## Qanday yuqadi?

- **mushuk va itlardan**, ayniqsa ko‘chadagi mushuk bolalaridan — eng ko‘p uchraydigan manba;
- boshqa boladan — taroq, shapka, sochiq, yostiq orqali;
- kamroq hollarda tuproqdan.

Kasal hayvonda ham junsiz, po‘st tashlaydigan joylar bo‘lishi mumkin — uni ham veterinarga ko‘rsatish kerak, aks holda bola qayta yuqtiradi.

## Belgilari

- boshda bitta yoki bir nechta **dumaloq o‘choq**, ustida kulrang yoki oq po‘st;
- o‘choqdagi sochlar **teri sathidan 1–3 mm balandlikda sinib** qolgan, xuddi qirqilgandek;
- qichish bo‘lishi yoki bo‘lmasligi mumkin;
- ba’zan o‘choq shishadi, yiringlaydi va og‘riqli bo‘ladi (**kerion**) — bunda kechiktirmasdan shifokorga borish kerak;
- bo‘yin, yuz yoki tanada ham qizil halqasimon dog‘lar bo‘lishi mumkin.

## Nimalar bilan adashtiriladi?

Seboreyali dermatit (kepak), bosh terisi psoriazi, o‘choqli alopetsiya. O‘choqli alopetsiyada teri silliq va po‘stsiz bo‘ladi; temiratkida esa po‘st va singan sochlar bor. Farqni dermatolog aytadi. Batafsil: [O‘choqli alopetsiya: klinik holat](/uz/articles/art-alopecia-areata-klinik-holat).

## Qanday aniqlanadi?

Dermatolog boshni ko‘radi, kerak bo‘lsa **trixoskopiya** qiladi va o‘choqdan soch va po‘st olib **zamburug‘ tahlili**ga yuboradi. Tahlil klinika laboratoriyasida bajariladi va zamburug‘ turini aniqlashga yordam beradi.

## Nega faqat krem yordam bermaydi?

Zamburug‘ soch ichiga va soch follikulasining chuqur qismiga kiradi. Krem faqat teri yuzasiga ta’sir qiladi va u yerga yetib bormaydi. Shuning uchun bosh terisi temiratkisida odatda:

- **ichishga beriladigan zamburug‘ga qarshi dori** — bolaning yoshi va vazniga qarab, faqat shifokor buyrug‘i bilan, odatda bir necha hafta;
- **zamburug‘ga qarshi shampun** — boshqalarga yuqish xavfini kamaytirish uchun;
- **nazorat tahlillari** — davolash qachon tugashini tahlil natijasi hal qiladi, belgilar yo‘qolgani emas.

Davolashni erta to‘xtatish kasallik qaytishining asosiy sababi.

## Uyda nima qilish kerak?

- bolaning taroq, shapka, sochiq va yostiq jildini alohida qiling, issiq suvda yuving;
- taroq va soch asboblarini dezinfeksiya qiling;
- oilaning boshqa bolalari va kattalar boshini ham ko‘rib chiqing;
- uy hayvonini veterinarga ko‘rsating;
- sochni qirib tashlash shart emas.

## Bog‘cha va maktab

Davolash boshlangandan va shifokor ruxsat bergandan keyin bola odatda jamoaga qaytishi mumkin. Aniq muddatni shifokor tahlil va bolaning holatiga qarab aytadi.

Bolalar dermatologi: [Bolalar dermatologi Qo‘qonda](/uz/qoqon/bolalar-dermatologi), [Dermatolog Farg‘onada](/uz/fargona/dermatolog). Teridagi zamburug‘ haqida: [Teri zamburug‘i](/uz/articles/art-teri-zamburugi), bolalardagi toshmalar: [Bolalarda teri toshmalari](/uz/articles/art-bolalarda-teri-toshmalari).

*Ushbu maqola umumiy ma’lumot uchun. Bolaga dori va dozani faqat shifokor belgilaydi.*`;
}

function ruBody(): string {
  return `Если на голове у ребёнка появился круглый шелушащийся участок с обломанными волосами, чаще всего это **стригущий лишай волосистой части головы** — грибковое поражение кожи головы (микроспория или трихофития). Он встречается в основном у детей 3–12 лет и **заразен**. Хорошая новость: при правильном диагнозе и полном лечении волосы обычно полностью восстанавливаются.

## Как передаётся?

- **от кошек и собак**, особенно уличных котят — самый частый источник;
- от другого ребёнка — через расчёски, шапки, полотенца, подушки;
- реже — из почвы.

У больного животного тоже могут быть участки без шерсти и с шелушением — его нужно показать ветеринару, иначе ребёнок заразится снова.

## Признаки

- один или несколько **круглых очагов** на голове с серыми или белыми чешуйками;
- волосы в очаге **обломаны на высоте 1–3 мм** над кожей, будто подстрижены;
- зуд может быть или не быть;
- иногда очаг отекает, гноится и болит (**керион**) — тогда к врачу без промедления;
- красные кольцевидные пятна могут быть и на шее, лице или теле.

## С чем путают?

С себорейным дерматитом (перхотью), псориазом кожи головы, очаговой алопецией. При очаговой алопеции кожа гладкая, без шелушения; при лишае есть чешуйки и обломанные волосы. Различие определит дерматолог. Подробнее: [Очаговая алопеция: клинический случай](/ru/articles/art-alopecia-areata-klinik-holat).

## Как ставят диагноз?

Дерматолог осматривает голову, при необходимости делает **трихоскопию** и берёт из очага волосы и чешуйки на **анализ на грибок**. Анализ выполняют в лаборатории клиники, он помогает определить вид грибка.

## Почему одного крема мало?

Грибок проникает внутрь волоса и в глубокую часть волосяного фолликула. Крем действует только на поверхности кожи и туда не доходит. Поэтому при стригущем лишае головы обычно назначают:

- **противогрибковый препарат внутрь** — по возрасту и весу ребёнка, только по назначению врача, обычно на несколько недель;
- **противогрибковый шампунь** — чтобы снизить риск заразить других;
- **контрольные анализы** — когда заканчивать лечение, решает результат анализа, а не исчезновение симптомов.

Раннее прекращение лечения — главная причина возврата болезни.

## Что делать дома?

- выделите ребёнку отдельные расчёску, шапку, полотенце и наволочку, стирайте в горячей воде;
- дезинфицируйте расчёски и аксессуары для волос;
- осмотрите головы других детей и взрослых в семье;
- покажите домашнее животное ветеринару;
- брить голову не нужно.

## Детский сад и школа

После начала лечения и разрешения врача ребёнок обычно может вернуться в коллектив. Точный срок врач назовёт по анализам и состоянию ребёнка.

Детский дерматолог: [Детский дерматолог в Коканде](/ru/qoqon/bolalar-dermatologi), [Дерматолог в Фергане](/ru/fargona/dermatolog). О грибке кожи: [Грибок кожи](/ru/articles/art-teri-zamburugi), о сыпи у детей: [Высыпания у детей](/ru/articles/art-bolalarda-teri-toshmalari).

*Статья носит информационный характер. Препарат и дозу ребёнку назначает только врач.*`;
}

function enBody(): string {
  return `A round, scaly patch with broken hairs on a child’s head is most often **scalp ringworm** (tinea capitis), a fungal infection of the scalp caused by Microsporum or Trichophyton. It mostly affects children aged 3–12 and **is contagious**. The good news: with the right diagnosis and a full course of treatment, the hair usually grows back completely.

## How does it spread?

- **from cats and dogs**, especially stray kittens, the most common source;
- from another child, through combs, hats, towels and pillows;
- less often from soil.

An infected animal may also have bald, scaly patches. It should see a vet, or the child will catch it again.

## Signs

- one or more **round patches** on the head with grey or white scale;
- hairs in the patch **broken off 1–3 mm above the skin**, as if trimmed;
- itching may or may not be present;
- sometimes the patch swells, oozes pus and hurts (a **kerion**), which needs a doctor without delay;
- red ring-shaped patches may also appear on the neck, face or body.

## What is it mistaken for?

Seborrhoeic dermatitis (dandruff), scalp psoriasis and alopecia areata. In alopecia areata the skin is smooth and not scaly; in ringworm there is scale and broken hair. A dermatologist can tell them apart. More: [Alopecia areata: a clinical case](/en/articles/art-alopecia-areata-klinik-holat).

## How is it diagnosed?

The dermatologist examines the scalp, uses **trichoscopy** if needed and takes hairs and scale from the patch for a **fungal test**. The clinic lab runs the test, which also helps identify the type of fungus.

## Why is a cream not enough?

The fungus gets inside the hair and deep into the follicle, where a cream applied to the skin cannot reach. So scalp ringworm is usually treated with:

- **antifungal medicine by mouth**, dosed by the child’s age and weight, only as prescribed by a doctor, usually for several weeks;
- **antifungal shampoo** to lower the risk of passing it on;
- **follow-up tests**: the test result, not the disappearance of symptoms, decides when treatment ends.

Stopping treatment early is the main reason it comes back.

## What to do at home

- give the child their own comb, hat, towel and pillowcase and wash them in hot water;
- disinfect combs and hair accessories;
- check the scalps of other children and adults in the family;
- take the pet to a vet;
- there is no need to shave the head.

## Nursery and school

Once treatment has started and the doctor allows it, the child can usually return. The doctor gives the exact timing based on the tests and the child’s condition.

Paediatric dermatology: [Paediatric dermatologist in Kokand](/en/qoqon/bolalar-dermatologi), [Dermatologist in Fergana](/en/fargona/dermatolog). About skin fungus: [Skin fungus](/en/articles/art-teri-zamburugi); about rashes in children: [Skin rashes in children](/en/articles/art-bolalarda-teri-toshmalari).

*This article is for general information. Only a doctor can choose a child’s medicine and dose.*`;
}

export const CHILD_SCALP_RINGWORM_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Bolalarda bosh terisi temiratkisi (mikrosporiya, trixofitiya): qanday yuqadi, belgilari, zamburug‘ tahlili, nega faqat krem yetarli emas, uyda gigiyena va bola qachon bog‘cha yoki maktabga qaytishi mumkin.',
    body: uzBody(),
    keyTakeaways: [
      'Bosh terisi temiratkisi ko‘pincha mushuk va itlardan yuqadi',
      'Belgisi — po‘stli dumaloq o‘choq va 1–3 mm balandlikda singan sochlar',
      'Tashxis bosh terisidan olingan zamburug‘ tahlili bilan tasdiqlanadi',
      'Odatda ichishga beriladigan dori kerak — faqat shifokor buyrug‘i bilan',
      'Davolash tugashini tahlil natijasi hal qiladi',
    ],
    tags: ['Bosh terisi temiratkisi', 'Mikrosporiya', 'Trixofitiya', 'Bolalarda zamburug‘', 'Bolalar dermatologi', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Boshda po‘stli dumaloq o‘choq va singan sochlar bo‘lsa',
      'O‘choq shishib, yiringlasa yoki og‘risa',
      'Oilada boshqa bolalarda ham shunday o‘choqlar paydo bo‘lsa',
      'Uy hayvonida junsiz joylar bo‘lsa',
    ],
    faq: [
      {
        question: 'Bosh terisi temiratkisi yuqumlimi?',
        answer:
          'Ha. U hayvonlardan va boshqa bolalardan taroq, shapka, sochiq orqali yuqadi. Shuning uchun bolaning buyumlari alohida qilinadi, oiladagilar va uy hayvoni ham tekshiriladi.',
      },
      {
        question: 'Temiratkini faqat krem bilan davolasa bo‘ladimi?',
        answer:
          'Sochli bosh terisida odatda yo‘q: zamburug‘ soch ichiga kiradi va krem u yerga yetmaydi. Ichishga beriladigan dorini shifokor bolaning yoshi va vazniga qarab buyuradi.',
      },
      {
        question: 'Soch qayta o‘sadimi?',
        answer:
          'Ko‘p hollarda ha, to‘liq davolashdan keyin soch tiklanadi. Kerion kabi kuchli yallig‘lanishda o‘z vaqtida davolanmasa, chandiq va doimiy kal joy qolishi mumkin — shuning uchun erta murojaat muhim.',
      },
      {
        question: 'Bolaning sochini qirib tashlash kerakmi?',
        answer:
          'Shart emas. Davolash ichishga beriladigan dori va shampun bilan olib boriladi. Taroq, shapka va yostiq jildini alohida qilish va yuvish muhimroq.',
      },
    ],
  },
  ru: {
    summary:
      'Стригущий лишай головы у детей (микроспория, трихофития): как передаётся, признаки, анализ на грибок, почему одного крема мало, гигиена дома и когда ребёнку можно в садик или школу.',
    body: ruBody(),
    keyTakeaways: [
      'Стригущий лишай головы чаще всего передаётся от кошек и собак',
      'Признак — круглый шелушащийся очаг и волосы, обломанные на высоте 1–3 мм',
      'Диагноз подтверждает анализ на грибок с кожи головы',
      'Обычно нужен препарат внутрь — только по назначению врача',
      'Когда заканчивать лечение, решает анализ',
    ],
    tags: ['Стригущий лишай', 'Микроспория', 'Трихофития', 'Грибок у детей', 'Детский дерматолог', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'На голове шелушащийся круглый очаг и обломанные волосы',
      'Очаг отекает, гноится или болит',
      'Такие же очаги появились у других детей в семье',
      'У домашнего животного участки без шерсти',
    ],
    faq: [
      {
        question: 'Заразен ли стригущий лишай?',
        answer:
          'Да. Он передаётся от животных и других детей через расчёски, шапки, полотенца. Поэтому ребёнку выделяют отдельные вещи, а членов семьи и домашнее животное тоже осматривают.',
      },
      {
        question: 'Можно ли вылечить лишай только кремом?',
        answer:
          'На волосистой части головы обычно нет: грибок проникает в волос, и крем туда не доходит. Препарат внутрь назначает врач по возрасту и весу ребёнка.',
      },
      {
        question: 'Отрастут ли волосы?',
        answer:
          'В большинстве случаев да, после полного лечения волосы восстанавливаются. При сильном воспалении (керион) без своевременного лечения может остаться рубец и стойкая проплешина — поэтому важно обратиться рано.',
      },
      {
        question: 'Нужно ли брить ребёнка налысо?',
        answer:
          'Нет. Лечат препаратом внутрь и шампунем. Важнее выделить отдельные расчёску, шапку и наволочку и стирать их.',
      },
    ],
  },
  en: {
    summary:
      'Scalp ringworm in children (tinea capitis): how it spreads, signs, the fungal test, why a cream alone is not enough, home hygiene and when the child can return to nursery or school.',
    body: enBody(),
    keyTakeaways: [
      'Scalp ringworm is most often caught from cats and dogs',
      'The sign is a round scaly patch with hairs broken 1–3 mm above the skin',
      'A fungal test of the scalp confirms the diagnosis',
      'Medicine by mouth is usually needed, only as prescribed by a doctor',
      'The test result decides when treatment ends',
    ],
    tags: ['Scalp ringworm', 'Tinea capitis', 'Microsporia', 'Fungal infection in children', 'Paediatric dermatologist', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A round scaly patch with broken hairs on the head',
      'The patch swells, oozes pus or hurts',
      'Other children in the family get similar patches',
      'Your pet has bald patches',
    ],
    faq: [
      {
        question: 'Is scalp ringworm contagious?',
        answer:
          'Yes. It spreads from animals and other children through combs, hats and towels. The child gets their own things, and the family and pets are checked too.',
      },
      {
        question: 'Can it be treated with cream alone?',
        answer:
          'On the scalp, usually not: the fungus gets into the hair, where cream cannot reach. A doctor prescribes medicine by mouth based on the child’s age and weight.',
      },
      {
        question: 'Will the hair grow back?',
        answer:
          'In most cases yes, after a full course of treatment. Severe inflammation (a kerion) left untreated can leave a scar and a permanent bald spot, which is why an early visit matters.',
      },
      {
        question: 'Should the child’s head be shaved?',
        answer:
          'No. Treatment is medicine by mouth and shampoo. Giving the child their own comb, hat and pillowcase and washing them matters more.',
      },
    ],
  },
};

export const CHILD_SCALP_RINGWORM_ARTICLE: Article = {
  id: 'art-bolalarda-bosh-temiratkisi',
  slug: 'bolalarda-bosh-temiratkisi',
  title: {
    uz: 'Bolalarda bosh terisi temiratkisi: belgilari, yuqishi va davolash',
    ru: 'Стригущий лишай на голове у ребёнка: признаки, заражение и лечение',
    en: 'Scalp Ringworm in Children: Signs, Spread and Treatment',
  },
  summary: {
    uz: CHILD_SCALP_RINGWORM_ARTICLE_CATALOG.uz.summary,
    ru: CHILD_SCALP_RINGWORM_ARTICLE_CATALOG.ru.summary,
    en: CHILD_SCALP_RINGWORM_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: CHILD_SCALP_RINGWORM_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: CHILD_SCALP_RINGWORM_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: CHILD_SCALP_RINGWORM_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: "Turg'unov Shohruz Ilxomjon o'g'li",
    ru: 'Тургунов Шохруз Илхомжон угли',
    en: 'Shohruz Ilxomjon ugli Turgunov',
  },
  date: '2026-12-23',
  image: COVER.uz,
  images: COVER,
  views: 0,
};
