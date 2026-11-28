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
 * Periungual and subungual warts (HPV around and under the nail): why they are harder to treat
 * than other warts, nail-biting and picking as the main spread, the rule that a dark streak or a
 * lifting nail is checked by a doctor (not every growth by a nail is a wart), and the clinic's
 * laser removal (price list: "Tirnoq osti qaltishti — lazer bilan olib tashlash",
 * "PinPoint laser bilan mayda so'gallarni davolash").
 */

const COVER = {
  uz: '/articles/tirnoq-osti-sogal-cover-uz.jpg',
  ru: '/articles/tirnoq-osti-sogal-cover-ru.jpg',
  en: '/articles/tirnoq-osti-sogal-cover-en.jpg',
};

function uzBody(): string {
  return `Tirnoq atrofida yoki tirnoq ostida paydo bo‘lgan g‘adir-budir, qattiq o‘simta ko‘pincha **so‘gal** bo‘ladi. Uni papillomavirus (HPV) keltirib chiqaradi. Tirnoq yonidagi so‘gal boshqa joylardagidan qiyinroq davolanadi: u tirnoq ostiga o‘sib kiradi, tirnoqni ko‘taradi va og‘riq beradi. Quyida uni qanday tanish, nega uyda olib tashlash xavfli va klinikada qanday davolanishini tushuntiramiz.

## Belgilari

- tirnoq yonida yoki uchida **g‘adir-budir, qattiq, kulrang-sarg‘ish** o‘simta;
- ustida mayda **qora nuqtalar** — qon tomir kapillyarlari;
- tirnoq ostiga o‘sganda tirnoq **ko‘tariladi**, bosganda og‘riydi;
- atrofida yangi mayda so‘gallar paydo bo‘ladi.

Ko‘pincha qo‘l barmoqlarida, ayniqsa **tirnoq kemiradigan** yoki tirnoq atrofidagi terini yulib oladigan odamlarda va bolalarda uchraydi.

## Nega tarqaladi?

Virus teridagi mayda yoriqlar orqali kiradi. Tirnoq kemirish, kutikulani yulish va so‘galni tirnash virusni qo‘shni barmoqlarga, hatto lab atrofiga olib o‘tadi. Shuning uchun birinchi qoida — **so‘galni kemirmang va tirnamang**.

## Har qanday o‘simta so‘gal emas

Tirnoq yonidagi va ostidagi o‘simtalar orasida so‘galga o‘xshaydigan boshqa holatlar ham bor: piogen granuloma, ekzostoz (suyak o‘simtasi), kamdan-kam hollarda — xavfli o‘sma. Quyidagi hollarda tirnoqni shifokorga albatta ko‘rsating:

- tirnoqda **qora yoki jigarrang bo‘ylama chiziq** paydo bo‘lib, kengayib borsa;
- o‘simta tez o‘ssa, qonasa yoki yara bo‘lsa;
- tirnoq sababsiz ko‘tarilib, bir barmoqda shakli o‘zgarsa;
- 40 yoshdan keyin bitta barmoqda uzoq davom etayotgan o‘simta bo‘lsa.

Bunday hollarda dermatoskopiya va kerak bo‘lsa biopsiya qilinadi. Batafsil: [Tirnoq rangi o‘zgarishi](/uz/articles/art-tirnoq-rangi-ozgarishi).

## Qanday davolanadi?

Radeski Skin Clinic’da tirnoq yonidagi va ostidagi so‘gallar **lazer bilan olib tashlanadi**: mahalliy og‘riqsizlantirishdan keyin so‘gal to‘qimasi qatlam-qatlam bug‘lantiriladi. Tirnoq ostidagi qismga yetish uchun ba’zan tirnoqning ko‘tarilgan cheti qisqartiriladi. Mayda va ko‘p so‘gallarda **PinPoint lazer** nuqtali ta’sir bilan ishlaydi.

Davolashdan keyin:

- joy 1–2 hafta ichida bitadi, birinchi kunlari bog‘lam qo‘yiladi;
- ba’zan bir necha haftadan keyin takroriy muolaja kerak bo‘ladi — virus atrofdagi terida qolgan bo‘lishi mumkin;
- tirnoq ko‘tarilgan bo‘lsa, u yangi o‘sib chiqqanda tekislanadi.

## Uyda nima qilmaslik kerak

- so‘galni kesish, qirqish yoki tirnoq qaychisi bilan olish — qon ketadi va virus tarqaladi;
- kislotali vositalarni tirnoq atrofiga qalin surtish — kuyish va tirnoq to‘shagiga zarar;
- ip bilan bog‘lash yoki kuydirish.

Tirnoqni qisqa kesing, qo‘lni quruq tuting, tirnoq atrofi yorilsa namlovchi krem surting.

## Kimga murojaat qilish kerak?

Dermatolog yoki podolog. Oyoq tagidagi so‘gallar haqida: [Oyoq tagidagi so‘gal](/uz/articles/art-plantar-sogal). Bolalardagi so‘gallar: [Bolalarda so‘gal: lazer bilan davolash](/uz/articles/art-bolalarda-sogal-lazer-radeski). Qabul: [So‘gal olib tashlash Farg‘onada](/uz/fargona/sogal-olib-tashlash), [So‘gal olib tashlash Qo‘qonda](/uz/qoqon/sogal-olib-tashlash), [Podolog Qo‘qonda](/uz/qoqon/podolog).

*Ushbu maqola umumiy ma’lumot uchun. Tashxis va davolashni faqat shifokor belgilaydi.*`;
}

function ruBody(): string {
  return `Шершавое плотное разрастание вокруг ногтя или под ногтем чаще всего оказывается **бородавкой**. Её вызывает вирус папилломы человека (ВПЧ). Околоногтевая бородавка лечится труднее, чем на других местах: она прорастает под ноготь, приподнимает его и болит. Разберём, как её узнать, почему опасно удалять её дома и как её лечат в клинике.

## Признаки

- **шершавое, плотное, серо-желтоватое** разрастание у края ногтя или под его кончиком;
- на поверхности мелкие **чёрные точки** — капилляры;
- при росте под ноготь он **приподнимается** и болит при надавливании;
- вокруг появляются новые мелкие бородавки.

Чаще на пальцах рук, особенно у тех, кто **грызёт ногти** или обрывает кожу вокруг них, и у детей.

## Почему распространяется?

Вирус проникает через мелкие трещинки кожи. Грызение ногтей, обрывание кутикулы и расчёсывание бородавки переносят вирус на соседние пальцы и даже на кожу вокруг губ. Поэтому первое правило — **не грызть и не трогать бородавку**.

## Не каждое разрастание — бородавка

Среди образований у ногтя и под ногтем бывают похожие на бородавку: пиогенная гранулёма, экзостоз (костный нарост), редко — злокачественная опухоль. Обязательно покажите ноготь врачу, если:

- на ногте появилась **тёмная или коричневая продольная полоса**, которая расширяется;
- образование быстро растёт, кровоточит или изъязвляется;
- ноготь без причины приподнимается и меняет форму на одном пальце;
- после 40 лет на одном пальце долго держится образование.

В таких случаях делают дерматоскопию и при необходимости биопсию. Подробнее: [Изменение цвета ногтей](/ru/articles/art-tirnoq-rangi-ozgarishi).

## Как лечат?

В Radeski Skin Clinic околоногтевые и подногтевые бородавки **удаляют лазером**: после местной анестезии ткань бородавки послойно испаряют. Чтобы добраться до части под ногтем, иногда укорачивают приподнятый край ногтя. При мелких множественных бородавках работает **PinPoint-лазер** с точечным воздействием.

После лечения:

- место заживает за 1–2 недели, первые дни под повязкой;
- иногда через несколько недель нужна повторная процедура — вирус может оставаться в окружающей коже;
- приподнятый ноготь выравнивается, когда отрастёт новый.

## Чего не делать дома

- срезать, сковыривать или удалять маникюрными ножницами — будет кровь, вирус распространится;
- толстым слоем наносить кислотные средства вокруг ногтя — ожог и повреждение ногтевого ложа;
- перевязывать ниткой или прижигать.

Коротко стригите ногти, держите руки сухими, при трещинах вокруг ногтя пользуйтесь увлажняющим кремом.

## К кому обращаться?

К дерматологу или подологу. О бородавках на подошве: [Подошвенная бородавка](/ru/articles/art-plantar-sogal). О бородавках у детей: [Бородавки у детей: лазерное лечение](/ru/articles/art-bolalarda-sogal-lazer-radeski). Приём: [Удаление бородавок в Фергане](/ru/fargona/sogal-olib-tashlash), [Удаление бородавок в Коканде](/ru/qoqon/sogal-olib-tashlash), [Подолог в Коканде](/ru/qoqon/podolog).

*Статья носит информационный характер. Диагноз и лечение назначает только врач.*`;
}

function enBody(): string {
  return `A rough, hard growth around or under a nail is most often a **wart**, caused by the human papillomavirus (HPV). Warts by the nail are harder to treat than elsewhere: they grow under the nail, lift it and hurt. Here is how to recognise one, why removing it at home is risky and how the clinic treats it.

## Signs

- a **rough, hard, grey-yellow** growth beside the nail or under its tip;
- tiny **black dots** on the surface, which are capillaries;
- when it grows under the nail, the nail **lifts** and hurts when pressed;
- new small warts appear around it.

They are most common on the fingers, especially in people who **bite their nails** or pull at the skin around them, and in children.

## Why do they spread?

The virus enters through tiny cracks in the skin. Nail-biting, picking the cuticle and scratching the wart carry the virus to neighbouring fingers and even around the lips. So the first rule is **do not bite or pick the wart**.

## Not every growth is a wart

Some growths by or under the nail look like warts but are something else: a pyogenic granuloma, an exostosis (bone spur) or, rarely, a malignant tumour. Show the nail to a doctor if:

- a **dark or brown stripe** appears along the nail and widens;
- the growth enlarges quickly, bleeds or ulcerates;
- the nail lifts or changes shape on one finger for no reason;
- a growth persists on one finger after the age of 40.

Dermatoscopy and, if needed, a biopsy are done in these cases. More: [Nail colour changes](/en/articles/art-tirnoq-rangi-ozgarishi).

## How are they treated?

At Radeski Skin Clinic warts around and under the nail are **removed by laser**: after a local anaesthetic, the wart tissue is vaporised layer by layer. To reach the part under the nail, the lifted edge of the nail is sometimes trimmed. For many small warts, the **PinPoint laser** works point by point.

After treatment:

- the area heals in 1–2 weeks, under a dressing for the first days;
- a repeat session is sometimes needed a few weeks later, as the virus can remain in the surrounding skin;
- a lifted nail flattens as the new nail grows.

## What not to do at home

- cut, pick or remove it with nail scissors, which causes bleeding and spreads the virus;
- apply thick layers of acid products around the nail, which can burn the skin and damage the nail bed;
- tie it off with thread or burn it.

Keep nails short and hands dry, and use a moisturiser if the skin around the nail cracks.

## Who to see

A dermatologist or podiatrist. Warts on the sole: [Plantar warts](/en/articles/art-plantar-sogal). Warts in children: [Warts in children: laser treatment](/en/articles/art-bolalarda-sogal-lazer-radeski). Book a visit: [Wart removal in Fergana](/en/fargona/sogal-olib-tashlash), [Wart removal in Kokand](/en/qoqon/sogal-olib-tashlash), [Podiatrist in Kokand](/en/qoqon/podolog).

*This article is for general information. Only a doctor can make a diagnosis and prescribe treatment.*`;
}

export const SUBUNGUAL_WART_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Tirnoq atrofidagi va tirnoq ostidagi so‘gal: belgilari, nega tarqaladi, qaysi o‘simtalar so‘gal emas va shifokorga ko‘rsatish kerak, lazer bilan olib tashlash va uyda nima qilmaslik kerak.',
    body: uzBody(),
    keyTakeaways: [
      'Tirnoq yonidagi so‘galni papillomavirus keltirib chiqaradi',
      'Tirnoq kemirish va so‘galni tirnash uni boshqa barmoqlarga tarqatadi',
      'Tirnoqdagi kengayib borayotgan qora chiziq — shifokorga ko‘rsatish sababi',
      'Klinikada so‘gal mahalliy og‘riqsizlantirish bilan lazer orqali olib tashlanadi',
      'Uyda kesish va kislota bilan kuydirish tirnoq to‘shagiga zarar qiladi',
    ],
    tags: ['Tirnoq osti so‘gali', 'Tirnoq atrofi so‘gali', 'So‘gal', 'HPV', 'Lazer', 'Podolog', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'So‘gal tirnoq ostiga o‘sib, tirnoqni ko‘tarsa',
      'Tirnoqda kengayib borayotgan qora chiziq paydo bo‘lsa',
      'O‘simta tez o‘ssa, qonasa yoki yara bo‘lsa',
      'So‘gallar ko‘payib, boshqa barmoqlarga tarqalsa',
    ],
    faq: [
      {
        question: 'Tirnoq ostidagi so‘gal o‘zi ketadimi?',
        answer:
          'Ba’zan so‘gallar o‘zi yo‘qoladi, lekin tirnoq yonidagisi ko‘pincha yillar davom etadi, tirnoq ostiga o‘sib, uni ko‘taradi. Erta olib tashlansa, davolash osonroq bo‘ladi.',
      },
      {
        question: 'Lazer bilan olib tashlash og‘riqlimi?',
        answer:
          'Muolaja mahalliy og‘riqsizlantirish bilan bajariladi, shuning uchun og‘riq sezilmaydi. Keyingi kunlarda bosganda ozgina og‘riq bo‘lishi mumkin, u 1–2 haftada o‘tadi.',
      },
      {
        question: 'So‘gal qaytadan chiqishi mumkinmi?',
        answer:
          'Ha, virus atrofdagi terida qolishi mumkin, shuning uchun ba’zan takroriy muolaja kerak bo‘ladi. Tirnoq kemirmaslik va so‘galni tirnamaslik qaytalanish xavfini kamaytiradi.',
      },
      {
        question: 'Bolada tirnoq yonida so‘gal bo‘lsa nima qilish kerak?',
        answer:
          'Bolani tirnoq kemirishdan to‘xtatishga harakat qiling, so‘galni ochiq tirnatmang va dermatologga ko‘rsating. Bolalarda ham so‘gal mahalliy og‘riqsizlantirish bilan lazer orqali olib tashlanadi.',
      },
    ],
  },
  ru: {
    summary:
      'Околоногтевая и подногтевая бородавка: признаки, почему распространяется, какие образования не бородавка и требуют осмотра, лазерное удаление и чего не делать дома.',
    body: ruBody(),
    keyTakeaways: [
      'Околоногтевую бородавку вызывает вирус папилломы человека',
      'Грызение ногтей и расчёсывание переносят её на другие пальцы',
      'Расширяющаяся тёмная полоса на ногте — повод показаться врачу',
      'В клинике бородавку удаляют лазером под местной анестезией',
      'Срезание и прижигание кислотой дома повреждают ногтевое ложе',
    ],
    tags: ['Подногтевая бородавка', 'Околоногтевая бородавка', 'Бородавка', 'ВПЧ', 'Лазер', 'Подолог', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Бородавка проросла под ноготь и приподняла его',
      'На ногте появилась расширяющаяся тёмная полоса',
      'Образование быстро растёт, кровоточит или изъязвляется',
      'Бородавок становится больше, они переходят на другие пальцы',
    ],
    faq: [
      {
        question: 'Проходит ли подногтевая бородавка сама?',
        answer:
          'Иногда бородавки исчезают сами, но околоногтевые часто держатся годами, прорастают под ноготь и приподнимают его. Чем раньше её удалить, тем проще лечение.',
      },
      {
        question: 'Больно ли удалять лазером?',
        answer:
          'Процедуру делают под местной анестезией, поэтому боли нет. В следующие дни может быть небольшая болезненность при надавливании, она проходит за 1–2 недели.',
      },
      {
        question: 'Может ли бородавка появиться снова?',
        answer:
          'Да, вирус может оставаться в окружающей коже, поэтому иногда нужна повторная процедура. Отказ от привычки грызть ногти и трогать бородавку снижает риск рецидива.',
      },
      {
        question: 'Что делать, если у ребёнка бородавка у ногтя?',
        answer:
          'Постарайтесь отучить ребёнка грызть ногти, не давайте расчёсывать бородавку и покажите её дерматологу. Детям бородавки тоже удаляют лазером под местной анестезией.',
      },
    ],
  },
  en: {
    summary:
      'Warts around and under the nail: signs, why they spread, which growths are not warts and need a check, laser removal and what not to do at home.',
    body: enBody(),
    keyTakeaways: [
      'Warts by the nail are caused by the human papillomavirus',
      'Nail-biting and picking spread them to other fingers',
      'A widening dark stripe on a nail is a reason to see a doctor',
      'The clinic removes them by laser under local anaesthetic',
      'Cutting or burning with acid at home damages the nail bed',
    ],
    tags: ['Subungual wart', 'Periungual wart', 'Wart', 'HPV', 'Laser', 'Podiatrist', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A wart has grown under the nail and lifted it',
      'A widening dark stripe appears on a nail',
      'A growth enlarges quickly, bleeds or ulcerates',
      'Warts are multiplying and spreading to other fingers',
    ],
    faq: [
      {
        question: 'Will a wart under the nail go away on its own?',
        answer:
          'Warts sometimes clear by themselves, but those by the nail often last for years, grow underneath and lift the nail. The earlier it is removed, the easier treatment is.',
      },
      {
        question: 'Does laser removal hurt?',
        answer:
          'It is done under local anaesthetic, so there is no pain during the procedure. It may be a little sore to press for a few days, settling within 1–2 weeks.',
      },
      {
        question: 'Can the wart come back?',
        answer:
          'Yes, the virus can stay in the surrounding skin, so a repeat session is sometimes needed. Stopping nail-biting and not picking the wart lower the risk.',
      },
      {
        question: 'What should I do if my child has a wart by the nail?',
        answer:
          'Try to stop the nail-biting, do not let the child pick the wart and show it to a dermatologist. Children’s warts are also removed by laser under local anaesthetic.',
      },
    ],
  },
};

export const SUBUNGUAL_WART_ARTICLE: Article = {
  id: 'art-tirnoq-osti-sogal',
  slug: 'tirnoq-osti-sogal',
  title: {
    uz: 'Tirnoq ostidagi va atrofidagi so‘gal: sabablari va lazer bilan olib tashlash',
    ru: 'Подногтевая и околоногтевая бородавка: причины и удаление лазером',
    en: 'Warts Under and Around the Nail: Causes and Laser Removal',
  },
  summary: {
    uz: SUBUNGUAL_WART_ARTICLE_CATALOG.uz.summary,
    ru: SUBUNGUAL_WART_ARTICLE_CATALOG.ru.summary,
    en: SUBUNGUAL_WART_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: SUBUNGUAL_WART_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: SUBUNGUAL_WART_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: SUBUNGUAL_WART_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Karimova Iroda',
    ru: 'Каримова Ирода',
    en: 'Iroda Karimova',
  },
  date: '2026-12-24',
  image: COVER.uz,
  images: COVER,
  views: 0,
};
