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
 * Practical companion to "Прыщи у взрослых" (art-pryshchi-u-vzroslykh): this one answers
 * "when should I see a dermatologist", the other one covers treatment methods in depth.
 * Both link to each other and to the city acne pages.
 */

function uzBody(): string {
  return `Akne (husnbuzar) — eng ko'p uchraydigan teri kasalliklaridan biri bo'lib, u faqat o'smirlarda emas, kattalarda ham kuzatiladi. Toshmalar yuzda, iyakda, yonoqlarda, orqa va ko'krakda paydo bo'lib, o'zidan keyin pigment dog'lari va chandiqlar qoldirishi mumkin. To'g'ri tanlangan davolash yallig'lanishni nazorat qilishga va yangi toshmalar xavfini kamaytirishga yordam beradi.

## Akne nima uchun paydo bo'ladi?

Akne sabablari teri yog'ining ko'p ishlab chiqarilishi, teri teshiklarining tiqilishi va teridagi yallig'lanish jarayonlari bilan bog'liq. Toshmalar paydo bo'lishi va kuchayishiga quyidagilar ta'sir qilishi mumkin:

- gormonal o'zgarishlar;
- irsiy moyillik;
- stress va uyqu yetishmasligi;
- teri teshiklarini tiqib qo'yadigan kosmetika vositalari;
- ba'zi dori vositalari.

Kattalardagi ayollarda toshmalar ko'pincha hayz oldidan yoki gormonal o'zgarishlar fonida kuchayadi. Biroq har qanday akne ham gormonal buzilish bilan bog'liq emas — sababni shifokor belgilar va anamnezni hisobga olgan holda aniqlaydi.

## Akne qanday davolanadi?

Davolash toshmalarning og'irligi, teri turi va yallig'lanish bor-yo'qligiga bog'liq. Dermatolog tashqi preparatlar, teri parvarishi vositalari, kerak bo'lsa esa tizimli terapiya tavsiya qilishi mumkin.

Husnbuzarlarni siqmaslik va agressiv uy vositalarini ishlatmaslik muhim: bu yallig'lanishni kuchaytirishi va chandiq paydo bo'lish xavfini oshirishi mumkin.

Barcha bemorlarga mos keladigan yagona sxema yo'q. Shuning uchun davolashni boshlashdan oldin dermatolog ko'rigidan o'tish maqsadga muvofiq. Davolash usullari haqida batafsil: [Kattalarda toshma: sabablari va zamonaviy davolash](/uz/articles/art-pryshchi-u-vzroslykh).

## Qachon dermatologga murojaat qilish kerak?

Konsultatsiyaga yozilish tavsiya etiladi, agar:

- toshmalar uzoq vaqt saqlanib qolsa;
- og'riqli teri osti tugunlari paydo bo'lsa;
- husnbuzarlardan keyin dog' yoki chandiq qolsa;
- uy parvarishi yordam bermasa;
- toshmalar kattalik yoshida to'satdan paydo bo'lsa.

Mutaxassisga erta murojaat qilish mos terapiyani tanlashga va postakne xavfini kamaytirishga yordam beradi. Dog' va chandiqlar qolgan bo'lsa: [Postakne: chandiq va dog'larni qanday yo'qotish mumkin](/uz/articles/art-postakne).

## Farg'ona va Qo'qonda Radeski Skin Clinic'da akne davolash

Radeski Skin Clinic'da teri holatini baholash, tashxisni aniqlash va individual davolash rejasini tuzish uchun [dermatologga](/uz/services/dermatologiya) murojaat qilishingiz mumkin. Mutaxassis toshmalarning og'irligi, teri xususiyatlari va postakne paydo bo'lish xavfini hisobga oladi.

- [Akne davolash Farg'onada](/uz/fargona/akne-davolash) — qabul, narxlar va shifokorlar;
- [Akne davolash Qo'qonda](/uz/qoqon/akne-davolash) — Qo'qon filialida qabul;
- [Nega aknani kosmetolog emas, dermatolog davolashi kerak](/uz/articles/art-akne-dermatolog-kosmetolog).

Agar sizni husnbuzarlar, yallig'lanish yoki aknedan qolgan izlar bezovta qilayotgan bo'lsa, konsultatsiyani kechiktirmang.

Farg'ona yoki Qo'qondagi Radeski Skin Clinic'da dermatolog qabuliga yoziling. O'z vaqtida qo'yilgan tashxis asosli davolash taktikasini tanlashga va teri holatini yaxshilashga yordam beradi.`;
}

function ruBody(): string {
  return `Акне (угревая болезнь) — одно из распространённых заболеваний кожи, которое встречается не только у подростков, но и у взрослых. Высыпания могут появляться на лице, подбородке, щеках, спине и груди, оставляя после себя пигментные пятна и рубцы. Правильно подобранное лечение помогает контролировать воспаление и снизить риск новых высыпаний.

## Почему появляется акне?

Причины акне связаны с повышенной выработкой кожного сала, закупоркой пор и воспалительными процессами в коже. На появление и обострение высыпаний могут влиять:

- гормональные изменения;
- наследственная предрасположенность;
- стресс и недостаток сна;
- косметические средства, закупоривающие поры;
- некоторые лекарственные препараты.

У взрослых женщин высыпания нередко усиливаются перед менструацией или на фоне гормональных изменений. Однако не каждое акне связано с гормональными нарушениями — причину определяет врач с учётом симптомов и анамнеза.

## Как лечат акне?

Лечение акне зависит от выраженности высыпаний, типа кожи и наличия воспаления. Дерматолог может рекомендовать наружные препараты, средства для ухода за кожей, а при необходимости — системную терапию.

Важно не выдавливать прыщи и не использовать агрессивные домашние средства: это может усилить воспаление и повысить риск образования рубцов.

Не существует единой схемы, которая подходит всем пациентам. Поэтому перед началом лечения желательно пройти осмотр дерматолога. Подробнее о методах лечения: [Прыщи у взрослых: причины и лечение акне](/ru/articles/art-pryshchi-u-vzroslykh).

## Когда нужно обратиться к дерматологу?

Записаться на консультацию рекомендуется, если:

- высыпания сохраняются длительное время;
- появляются болезненные подкожные узлы;
- после прыщей остаются пятна или рубцы;
- домашний уход не помогает;
- высыпания внезапно появились во взрослом возрасте.

Раннее обращение к специалисту помогает подобрать подходящую терапию и снизить риск постакне. Если пятна и рубцы уже остались: [Постакне: как убрать рубцы и пятна после акне](/ru/articles/art-postakne).

## Лечение акне в Radeski Skin Clinic в Фергане и Коканде

В Radeski Skin Clinic можно обратиться к [дерматологу](/ru/services/dermatologiya) для оценки состояния кожи, уточнения диагноза и подбора индивидуального плана лечения. Специалист учитывает выраженность высыпаний, особенности кожи и риск образования постакне.

- [Лечение акне в Фергане](/ru/fargona/akne-davolash) — приём, цены и врачи;
- [Лечение акне в Коканде](/ru/qoqon/akne-davolash) — приём в кокандском филиале;
- [Почему акне нужно лечить у дерматолога, а не у косметолога](/ru/articles/art-akne-dermatolog-kosmetolog).

Если вас беспокоят прыщи, воспаления или следы после акне, не откладывайте консультацию.

Запишитесь на приём к дерматологу в Radeski Skin Clinic в Фергане или Коканде. Своевременная диагностика поможет выбрать обоснованную тактику лечения и улучшить состояние кожи.`;
}

function enBody(): string {
  return `Acne is one of the most common skin conditions, and it affects not only teenagers but adults too. Breakouts can appear on the face, chin, cheeks, back and chest, leaving pigment spots and scars behind. The right treatment helps control inflammation and lowers the risk of new breakouts.

## Why does acne appear?

Acne is linked to excess sebum production, clogged pores and inflammation in the skin. Breakouts can be triggered or made worse by:

- hormonal changes;
- genetic predisposition;
- stress and lack of sleep;
- pore-clogging cosmetics;
- some medicines.

In adult women, breakouts often get worse before menstruation or with hormonal changes. However, not every case of acne is caused by a hormonal disorder — the doctor determines the cause based on symptoms and medical history.

## How is acne treated?

Treatment depends on how severe the breakouts are, the skin type and whether there is inflammation. A dermatologist may recommend topical medicines, skin care products and, when needed, systemic therapy.

It is important not to squeeze pimples or use harsh home remedies: this can increase inflammation and the risk of scarring.

There is no single plan that suits every patient, so it is best to see a dermatologist before starting treatment. More on treatment methods: [Adult acne: causes and modern treatment](/en/articles/art-pryshchi-u-vzroslykh).

## When should you see a dermatologist?

Book a consultation if:

- breakouts last for a long time;
- painful nodules appear under the skin;
- pimples leave spots or scars;
- home care does not help;
- breakouts suddenly appear in adulthood.

Seeing a specialist early helps choose the right therapy and lowers the risk of post-acne marks. If marks and scars have already formed: [Post-acne: how to reduce scars and spots](/en/articles/art-postakne).

## Acne treatment at Radeski Skin Clinic in Fergana and Kokand

At Radeski Skin Clinic you can see a [dermatologist](/en/services/dermatologiya) to assess your skin, confirm the diagnosis and get an individual treatment plan. The specialist takes into account the severity of breakouts, your skin features and the risk of post-acne marks.

- [Acne treatment in Fergana](/en/fargona/akne-davolash) — visits, prices and doctors;
- [Acne treatment in Kokand](/en/qoqon/akne-davolash) — visits at the Kokand branch;
- [Why acne should be treated by a dermatologist, not a cosmetologist](/en/articles/art-akne-dermatolog-kosmetolog).

If pimples, inflammation or acne marks bother you, do not put off the consultation.

Book a dermatologist visit at Radeski Skin Clinic in Fergana or Kokand. A timely diagnosis helps choose a well-founded treatment plan and improve your skin.`;
}

export const ADULT_ACNE_DERMATOLOGIST_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Kattalarda akne nima uchun paydo bo'ladi, qanday davolanadi va qachon dermatologga murojaat qilish kerak. Farg'ona va Qo'qonda Radeski Skin Clinic dermatologi qabuli.",
    body: uzBody(),
    keyTakeaways: [
      "Akne nafaqat o'smirlarda, balki kattalarda ham uchraydi",
      "Asosiy sabablar — teri yog'ining ko'payishi, teshiklarning tiqilishi va yallig'lanish",
      "Har qanday akne ham gormonal buzilish bilan bog'liq emas — sababni shifokor aniqlaydi",
      "Husnbuzarlarni siqish yallig'lanish va chandiq xavfini oshiradi",
      "Davolash rejasi individual: dermatolog ko'rigidan boshlash kerak",
    ],
    tags: ['Akne', 'Kattalarda akne', 'Dermatolog', 'Postakne', 'Fargona', 'Qoqon', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Toshmalar uzoq vaqt saqlanib qolsa',
      "Og'riqli teri osti tugunlari paydo bo'lsa",
      "Husnbuzarlardan keyin dog' yoki chandiq qolsa",
      'Uy parvarishi yordam bermasa',
      "Toshmalar kattalik yoshida to'satdan paydo bo'lsa",
    ],
    faq: [
      {
        question: "Nega akne kattalarda ham paydo bo'ladi?",
        answer:
          "Akne teri yog'ining ko'payishi, teshiklarning tiqilishi va yallig'lanish bilan bog'liq. Gormonal o'zgarishlar, irsiyat, stress va uyqu yetishmasligi, teshiklarni tiqadigan kosmetika va ba'zi dorilar toshmalarni kuchaytirishi mumkin.",
      },
      {
        question: 'Kattalardagi akne har doim gormonlar bilan bog\'liqmi?',
        answer:
          "Yo'q. Ayollarda toshmalar ko'pincha hayz oldidan kuchayadi, lekin har qanday akne ham gormonal buzilish emas. Sababni dermatolog belgilar va anamnez asosida aniqlaydi.",
      },
      {
        question: 'Husnbuzarlarni siqsa bo\'ladimi?',
        answer:
          "Yo'q. Siqish va agressiv uy vositalari yallig'lanishni kuchaytiradi va chandiq paydo bo'lish xavfini oshiradi.",
      },
      {
        question: 'Qachon dermatologga borish kerak?',
        answer:
          "Toshmalar uzoq davom etsa, og'riqli tugunlar paydo bo'lsa, dog' yoki chandiq qolsa, uy parvarishi yordam bermasa yoki akne kattalik yoshida to'satdan boshlansa.",
      },
      {
        question: "Farg'ona va Qo'qonda aknani qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog teri holatini baholaydi, tashxisni aniqlaydi va individual davolash rejasini tuzadi. Qabulga sayt orqali yoki +998 73 200-73-73 raqami orqali yozilish mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Почему появляется акне у взрослых, как его лечат и когда пора к дерматологу. Приём дерматолога в Radeski Skin Clinic в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Акне встречается не только у подростков, но и у взрослых',
      'Основные причины — избыток кожного сала, закупорка пор и воспаление',
      'Не каждое акне связано с гормонами — причину определяет врач',
      'Выдавливание прыщей усиливает воспаление и повышает риск рубцов',
      'План лечения индивидуален: начинать стоит с осмотра дерматолога',
    ],
    tags: ['Акне', 'Акне у взрослых', 'Дерматолог', 'Постакне', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Высыпания сохраняются длительное время',
      'Появляются болезненные подкожные узлы',
      'После прыщей остаются пятна или рубцы',
      'Домашний уход не помогает',
      'Высыпания внезапно появились во взрослом возрасте',
    ],
    faq: [
      {
        question: 'Почему акне появляется у взрослых?',
        answer:
          'Акне связано с повышенной выработкой кожного сала, закупоркой пор и воспалением. Обострения могут вызывать гормональные изменения, наследственность, стресс и недостаток сна, комедогенная косметика и некоторые препараты.',
      },
      {
        question: 'Акне у взрослых всегда связано с гормонами?',
        answer:
          'Нет. У женщин высыпания часто усиливаются перед менструацией, но не каждое акне — гормональное нарушение. Причину определяет дерматолог с учётом симптомов и анамнеза.',
      },
      {
        question: 'Можно ли выдавливать прыщи?',
        answer:
          'Нет. Выдавливание и агрессивные домашние средства усиливают воспаление и повышают риск образования рубцов.',
      },
      {
        question: 'Когда нужно обратиться к дерматологу?',
        answer:
          'Если высыпания сохраняются долго, появляются болезненные узлы, остаются пятна или рубцы, домашний уход не помогает или акне внезапно появилось во взрослом возрасте.',
      },
      {
        question: 'Где лечить акне в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог оценит состояние кожи, уточнит диагноз и составит индивидуальный план лечения. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Why acne appears in adults, how it is treated and when to see a dermatologist. Dermatology visits at Radeski Skin Clinic in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Acne affects adults as well as teenagers',
      'The main causes are excess sebum, clogged pores and inflammation',
      'Not all acne is hormonal — a doctor determines the cause',
      'Squeezing pimples increases inflammation and the risk of scars',
      'Treatment is individual: start with a dermatologist visit',
    ],
    tags: ['Acne', 'Adult acne', 'Dermatologist', 'Post-acne', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Breakouts last for a long time',
      'Painful nodules appear under the skin',
      'Pimples leave spots or scars',
      'Home care does not help',
      'Breakouts suddenly appear in adulthood',
    ],
    faq: [
      {
        question: 'Why does acne appear in adults?',
        answer:
          'Acne is linked to excess sebum, clogged pores and inflammation. Flare-ups can be triggered by hormonal changes, genetics, stress and lack of sleep, pore-clogging cosmetics and some medicines.',
      },
      {
        question: 'Is adult acne always hormonal?',
        answer:
          'No. In women breakouts often get worse before menstruation, but not all acne is a hormonal disorder. A dermatologist determines the cause based on symptoms and medical history.',
      },
      {
        question: 'Can I squeeze pimples?',
        answer: 'No. Squeezing and harsh home remedies increase inflammation and the risk of scarring.',
      },
      {
        question: 'When should I see a dermatologist?',
        answer:
          'If breakouts last a long time, painful nodules appear, spots or scars remain, home care does not help, or acne suddenly starts in adulthood.',
      },
      {
        question: 'Where can I get acne treatment in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand, a dermatologist assesses your skin, confirms the diagnosis and builds an individual treatment plan. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const ADULT_ACNE_DERMATOLOGIST_ARTICLE: Article = {
  id: 'art-akne-u-vzroslykh',
  slug: 'akne-u-vzroslykh',
  title: {
    uz: "Kattalarda akne: sabablari, davolash va qachon dermatologga murojaat qilish kerak",
    ru: 'Акне у взрослых: причины, лечение и когда обращаться к дерматологу',
    en: 'Adult Acne: Causes, Treatment and When to See a Dermatologist',
  },
  summary: {
    uz: ADULT_ACNE_DERMATOLOGIST_ARTICLE_CATALOG.uz.summary,
    ru: ADULT_ACNE_DERMATOLOGIST_ARTICLE_CATALOG.ru.summary,
    en: ADULT_ACNE_DERMATOLOGIST_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: ADULT_ACNE_DERMATOLOGIST_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: ADULT_ACNE_DERMATOLOGIST_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: ADULT_ACNE_DERMATOLOGIST_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-10-22',
  image: '/articles/akne-u-vzroslykh-cover.jpg',
  images: {
    uz: '/articles/akne-u-vzroslykh-cover.jpg',
    ru: '/articles/akne-u-vzroslykh-cover.jpg',
    en: '/articles/akne-u-vzroslykh-cover.jpg',
  },
  views: 0,
};
