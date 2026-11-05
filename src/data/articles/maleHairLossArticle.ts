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
 * Hair loss in men — the companion to the women's article. Androgenetic alopecia is the main
 * cause; the article explains why early treatment matters (follicles that have closed do not
 * come back), what else it can be, and the options the clinic offers (PRP, thulium laser,
 * medical treatment, transplant as the last step).
 */

function uzBody(): string {
  return `Erkaklarda soch to'kilishi juda keng tarqalgan: 50 yoshga kelib erkaklarning yarmidan ko'pida sochning siyraklashishi seziladi. Ko'pchilik buni "irsiyat, hech narsa qilib bo'lmaydi" deb qabul qiladi. Aslida erta boshlangan davolash jarayonni sekinlashtiradi yoki to'xtatadi va mavjud sochni saqlab qoladi. Asosiy shart — vaqtni yo'qotmaslik.

## Androgenetik alopetsiya — asosiy sabab

Erkaklarda soch to'kilishining 90% ga yaqini **androgenetik alopetsiya** bilan bog'liq. Unda irsiy moyillik tufayli soch follikulalari erkak gormonining faol shakliga sezgir bo'ladi: soch ingichkalashadi, qisqaradi va yillar davomida follikula "yopiladi".

Belgilari:

- peshonaning chakka qismlarida soch chizig'ining orqaga ketishi;
- tepada (toj qismida) siyraklashish;
- sochlarning ingichkalashishi va qisqarishi;
- jarayon asta-sekin, yillar davomida kuchayadi.

Muhim nuqta: **yopilgan follikula qayta tiklanmaydi**. Shuning uchun davolash qancha erta boshlansa, shuncha ko'p soch saqlanadi.

## Boshqa sabablar

Har qanday soch to'kilishi androgenetik emas:

- **telogen to'kilish** — kuchli stress, yuqori isitmali kasallik, operatsiya yoki qattiq parhezdan 2–3 oy keyin butun bosh bo'ylab ko'p to'kilish;
- **o'choqli alopetsiya** — dumaloq sochsiz o'choqlar, soqol va qoshlarda ham bo'lishi mumkin; batafsil: [o'choqli alopetsiya](/uz/articles/art-alopecia-areata-klinik-holat);
- **bosh terisi zamburug'i** — po'st tashlaydigan o'choqlar, sinib qolgan sochlar;
- qalqonsimon bez kasalliklari, temir tanqisligi, ba'zi dorilar;
- [seboreyali dermatit](/uz/articles/art-seboreyali-dermatit) — kepak va qichishish to'kilishni kuchaytirishi mumkin.

## Trixolog qanday tekshiradi?

- **[Trixoskopiya](/uz/articles/art-trixolog-trixoskopiya)** — soch va bosh terisini raqamli kattalashtirish bilan ko'rish; androgenetik jarayonni erta bosqichda, hali ko'zga ko'rinmasidan aniqlaydi;
- **qon tahlillari** — kerak bo'lsa; batafsil: [soch to'kilishida qanday tahlillar topshiriladi](/uz/articles/art-soch-tokilishi-tahlillar-radeski);
- natijani kuzatish uchun suratga olish — davolash samarasini ob'ektiv baholash.

## Qanday davolanadi?

- **Dori vositalari** — tashqi va ichiladigan vositalar soch follikulalariga ta'sirni kamaytiradi va o'sishni qo'llab-quvvatlaydi. Ularni faqat trixolog tayinlaydi, chunki tanlov va nazorat muhim.
- **[PRP (plazmoterapiya)](/uz/articles/art-plazmotorapiya-soch-prp)** — o'z qon plazmasidan tayyorlangan in'ektsiyalar follikulalarni rag'batlantiradi.
- **[Tuliy lazer](/uz/articles/art-thulium-laser-hair-kokand)** — soch o'sishini rag'batlantiruvchi apparat muolajasi.
- **Soch ko'chirib o'tkazish** — follikulalar butunlay yopilgan joylar uchun; uni qilishdan oldin [qarshi ko'rsatmalarni](/uz/articles/art-hair-transplant-contraindications) bilish kerak.

Natija sekin keladi: birinchi o'zgarishlar 3–6 oydan keyin baholanadi, davolash esa ko'pincha uzoq muddatli bo'ladi.

## Nima yordam bermaydi?

"Soch to'kilishiga qarshi" shampunlar, xalq vositalari va tahlilsiz vitaminlar androgenetik jarayonni to'xtatmaydi. Ular faqat vaqtni oladi — bu vaqtda esa follikulalar yopilishda davom etadi.

Ayollarda soch to'kilishi boshqacha kechadi — bu haqda: [ayollarda soch to'kilishi](/uz/articles/art-ayollarda-soch-tokilishi).

## Farg'ona va Qo'qonda trixolog qabuli

Radeski Skin Clinic'ning [trixologiya markazida](/uz/services/trihologiya-centr-lechenie-volos) trixolog trixoskopiya o'tkazadi, soch to'kilishi turini aniqlaydi va davolash rejasini tuzadi.

- [Trixolog Farg'onada](/uz/fargona/trixolog) va [Qo'qonda](/uz/qoqon/trixolog);
- [Soch to'kilishini davolash Farg'onada](/uz/fargona/soch-tokilish) va [Qo'qonda](/uz/qoqon/soch-tokilish).

Sochingiz siyraklashayotganini sezsangiz, trixologga kelishni kechiktirmang: saqlab qolish qayta tiklashdan doim osonroq.`;
}

function ruBody(): string {
  return `Выпадение волос у мужчин встречается очень часто: к 50 годам поредение заметно больше чем у половины мужчин. Многие принимают это как «наследственность, ничего не поделаешь». На самом деле лечение, начатое рано, замедляет или останавливает процесс и сохраняет имеющиеся волосы. Главное условие — не терять время.

## Андрогенетическая алопеция — главная причина

Около 90% случаев выпадения волос у мужчин связано с **андрогенетической алопецией**. Из-за наследственной предрасположенности волосяные фолликулы становятся чувствительны к активной форме мужского гормона: волосы истончаются, укорачиваются, и за годы фолликул «закрывается».

Признаки:

- линия роста волос отступает в области висков;
- поредение на макушке;
- волосы становятся тоньше и короче;
- процесс медленно нарастает годами.

Важно: **закрывшийся фолликул не восстанавливается**. Поэтому чем раньше начато лечение, тем больше волос удаётся сохранить.

## Другие причины

Не каждое выпадение — андрогенетическое:

- **телогеновое выпадение** — через 2–3 месяца после сильного стресса, болезни с высокой температурой, операции или жёсткой диеты волосы выпадают по всей голове;
- **очаговая алопеция** — круглые очаги без волос, бывает и на бороде и бровях; подробнее: [очаговая алопеция](/ru/articles/art-alopecia-areata-klinik-holat);
- **грибок кожи головы** — шелушащиеся очаги, обломанные волосы;
- болезни щитовидной железы, дефицит железа, некоторые лекарства;
- [себорейный дерматит](/ru/articles/art-seboreyali-dermatit) — перхоть и зуд могут усиливать выпадение.

## Как обследует трихолог?

- **[Трихоскопия](/ru/articles/art-trixolog-trixoskopiya)** — осмотр волос и кожи головы при цифровом увеличении; выявляет андрогенетический процесс на ранней стадии, когда он ещё не заметен глазу;
- **анализы крови** — при необходимости; подробнее: [какие анализы сдать при выпадении волос](/ru/articles/art-soch-tokilishi-tahlillar-radeski);
- фотофиксация для контроля — чтобы объективно оценить эффект лечения.

## Как лечат?

- **Лекарственные средства** — наружные и системные препараты уменьшают воздействие на фолликулы и поддерживают рост. Их назначает только трихолог: важны выбор и контроль.
- **[PRP (плазмотерапия)](/ru/articles/art-plazmotorapiya-soch-prp)** — инъекции из собственной плазмы стимулируют фолликулы.
- **[Тулиевый лазер](/ru/articles/art-thulium-laser-hair-kokand)** — аппаратная процедура для стимуляции роста волос.
- **Пересадка волос** — для зон, где фолликулы уже закрылись; перед ней важно знать [противопоказания](/ru/articles/art-hair-transplant-contraindications).

Результат приходит постепенно: первые изменения оценивают через 3–6 месяцев, а лечение чаще всего длительное.

## Что не помогает?

Шампуни «от выпадения», народные средства и витамины без анализов не останавливают андрогенетический процесс. Они только отнимают время — а фолликулы тем временем продолжают закрываться.

У женщин выпадение волос протекает иначе — об этом: [выпадение волос у женщин](/ru/articles/art-ayollarda-soch-tokilishi).

## Приём трихолога в Фергане и Коканде

В [центре трихологии](/ru/services/trihologiya-centr-lechenie-volos) Radeski Skin Clinic трихолог проведёт трихоскопию, определит тип выпадения и составит план лечения.

- [Трихолог в Фергане](/ru/fargona/trixolog) и [в Коканде](/ru/qoqon/trixolog);
- [Лечение выпадения волос в Фергане](/ru/fargona/soch-tokilish) и [в Коканде](/ru/qoqon/soch-tokilish).

Если вы замечаете поредение, не откладывайте визит к трихологу: сохранить всегда проще, чем восстановить.`;
}

function enBody(): string {
  return `Hair loss in men is very common: by 50, more than half of men have noticeable thinning. Many accept it as "genetics, nothing to be done". In fact, treatment started early slows or stops the process and keeps the hair you have. The key is not to lose time.

## Androgenetic alopecia — the main cause

About 90% of hair loss in men is **androgenetic alopecia** (male pattern baldness). Because of an inherited sensitivity, hair follicles react to the active form of the male hormone: hairs get thinner and shorter, and over the years the follicle "closes".

Signs:

- the hairline recedes at the temples;
- thinning on the crown;
- hairs become finer and shorter;
- the process builds up slowly over years.

Key point: **a follicle that has closed does not recover**. So the earlier treatment starts, the more hair is saved.

## Other causes

Not all hair loss is androgenetic:

- **telogen effluvium** — heavy shedding all over the scalp 2–3 months after severe stress, an illness with high fever, surgery or a crash diet;
- **alopecia areata** — round bald patches, which can also affect the beard and eyebrows; more: [alopecia areata](/en/articles/art-alopecia-areata-klinik-holat);
- **scalp ringworm** — flaky patches with broken hairs;
- thyroid disease, iron deficiency, some medicines;
- [seborrheic dermatitis](/en/articles/art-seboreyali-dermatit) — dandruff and itching can make shedding worse.

## How does a trichologist investigate?

- **[Trichoscopy](/en/articles/art-trixolog-trixoskopiya)** — examining the hair and scalp under digital magnification; it detects androgenetic thinning early, before it is visible to the eye;
- **blood tests** — when needed; more: [which tests to take for hair loss](/en/articles/art-soch-tokilishi-tahlillar-radeski);
- photos for follow-up — to judge the effect of treatment objectively.

## How is it treated?

- **Medicines** — topical and oral treatments reduce the hormonal effect on follicles and support growth. Only a trichologist should prescribe them: choice and monitoring matter.
- **[PRP (plasma therapy)](/en/articles/art-plazmotorapiya-soch-prp)** — injections from your own blood plasma stimulate the follicles.
- **[Thulium laser](/en/articles/art-thulium-laser-hair-kokand)** — a device treatment to stimulate hair growth.
- **Hair transplant** — for areas where follicles have already closed; know the [contraindications](/en/articles/art-hair-transplant-contraindications) first.

Results come gradually: the first changes are assessed after 3–6 months, and treatment is usually long-term.

## What does not help?

"Anti-hair-loss" shampoos, folk remedies and vitamins taken without tests do not stop androgenetic thinning. They only use up time — while the follicles keep closing.

Hair loss in women works differently — see [hair loss in women](/en/articles/art-ayollarda-soch-tokilishi).

## Trichologist visits in Fergana and Kokand

At the Radeski Skin Clinic [trichology centre](/en/services/trihologiya-centr-lechenie-volos) a trichologist performs trichoscopy, identifies the type of hair loss and builds a treatment plan.

- [Trichologist in Fergana](/en/fargona/trixolog) and [in Kokand](/en/qoqon/trixolog);
- [Hair loss treatment in Fergana](/en/fargona/soch-tokilish) and [in Kokand](/en/qoqon/soch-tokilish).

If you notice thinning, do not put off seeing a trichologist: keeping hair is always easier than restoring it.`;
}

export const MALE_HAIR_LOSS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Erkaklarda soch to'kilishi: androgenetik alopetsiya belgilari, boshqa sabablar, trixoskopiya, dori vositalari, PRP, tuliy lazer va soch ko'chirish. Farg'ona va Qo'qonda trixolog.",
    body: uzBody(),
    keyTakeaways: [
      "Erkaklarda soch to'kilishining asosiy sababi — androgenetik alopetsiya",
      "Yopilgan follikula tiklanmaydi — davolash qancha erta bo'lsa, shuncha ko'p soch saqlanadi",
      "Trixoskopiya jarayonni ko'zga ko'rinmasidan oldin aniqlaydi",
      "Davolash: trixolog tayinlaydigan dorilar, PRP, tuliy lazer, kerak bo'lsa soch ko'chirish",
      "Shampun va tahlilsiz vitaminlar androgenetik jarayonni to'xtatmaydi",
    ],
    tags: ["Soch to'kilishi", "Erkaklarda soch to'kilishi", 'Androgenetik alopetsiya', 'Trixolog', 'Trixoskopiya', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Chakkalarda soch chizig'i orqaga keta boshlasa",
      "Tepada (toj qismida) siyraklashish sezilsa",
      "Soch qisqa vaqtda ko'p to'kilsa",
      "Dumaloq sochsiz o'choqlar paydo bo'lsa",
      "Soch to'kilishi qichishish va po'st tashlash bilan birga kelsa",
    ],
    faq: [
      {
        question: "Androgenetik alopetsiyani to'xtatish mumkinmi?",
        answer:
          "Ko'pchilik hollarda — ha, jarayonni sekinlashtirish yoki to'xtatish mumkin, ayniqsa erta boshlansa. Lekin davolash uzoq muddatli: to'xtatilsa, to'kilish odatda qaytadi.",
      },
      {
        question: "Soch to'kilishi irsiy bo'lsa, davolanish foydasizmi?",
        answer:
          "Yo'q. Irsiyat moyillikni belgilaydi, lekin uning qanchalik tez rivojlanishiga davolash ta'sir qiladi. Erta murojaat qilganlar sochining katta qismini saqlab qoladi.",
      },
      {
        question: 'Natija qachon ko\'rinadi?',
        answer:
          "Soch sekin o'sadi, shuning uchun birinchi natija 3–6 oydan keyin baholanadi. Trixoskopiya va suratlar o'zgarishni ob'ektiv ko'rsatadi.",
      },
      {
        question: 'Soch ko\'chirish kimga kerak?',
        answer:
          "Follikulalar butunlay yopilgan joylar uchun. Soch ko'chirishdan oldin va keyin ham qolgan sochni saqlash uchun davolash kerak bo'ladi. Qarshi ko'rsatmalarni trixolog baholaydi.",
      },
      {
        question: "Farg'ona va Qo'qonda trixolog qayerda qabul qiladi?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida trixolog trixoskopiya o'tkazadi va davolash rejasini tuzadi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Выпадение волос у мужчин: признаки андрогенетической алопеции, другие причины, трихоскопия, лекарства, PRP, тулиевый лазер и пересадка. Трихолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Главная причина выпадения волос у мужчин — андрогенетическая алопеция',
      'Закрывшийся фолликул не восстанавливается — чем раньше лечение, тем больше волос сохраняется',
      'Трихоскопия выявляет процесс раньше, чем он станет заметен',
      'Лечение: препараты по назначению трихолога, PRP, тулиевый лазер, при необходимости пересадка',
      'Шампуни и витамины без анализов не останавливают андрогенетическое выпадение',
    ],
    tags: ['Выпадение волос', 'Выпадение волос у мужчин', 'Андрогенетическая алопеция', 'Трихолог', 'Трихоскопия', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Линия роста волос отступает на висках',
      'Заметно поредение на макушке',
      'Волосы резко выпадают за короткое время',
      'Появились круглые очаги без волос',
      'Выпадение сопровождается зудом и шелушением',
    ],
    faq: [
      {
        question: 'Можно ли остановить андрогенетическую алопецию?',
        answer:
          'В большинстве случаев — да, процесс можно замедлить или остановить, особенно если начать рано. Но лечение длительное: если его прекратить, выпадение обычно возвращается.',
      },
      {
        question: 'Если выпадение наследственное, лечение бесполезно?',
        answer:
          'Нет. Наследственность определяет предрасположенность, но на скорость процесса влияет лечение. Те, кто обращается рано, сохраняют большую часть волос.',
      },
      {
        question: 'Когда будет виден результат?',
        answer:
          'Волосы растут медленно, поэтому первый результат оценивают через 3–6 месяцев. Трихоскопия и фото показывают изменения объективно.',
      },
      {
        question: 'Кому нужна пересадка волос?',
        answer:
          'Для зон, где фолликулы полностью закрылись. До и после пересадки нужно лечение, чтобы сохранить оставшиеся волосы. Противопоказания оценивает трихолог.',
      },
      {
        question: 'Где принимает трихолог в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде трихолог проведёт трихоскопию и составит план лечения. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Hair loss in men: signs of male pattern baldness, other causes, trichoscopy, medicines, PRP, thulium laser and transplant. Trichologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'The main cause of hair loss in men is androgenetic alopecia',
      'A closed follicle does not recover — the earlier the treatment, the more hair is kept',
      'Trichoscopy detects thinning before it becomes visible',
      'Treatment: medicines prescribed by a trichologist, PRP, thulium laser, and transplant if needed',
      'Shampoos and vitamins without tests do not stop male pattern hair loss',
    ],
    tags: ['Hair loss', 'Hair loss in men', 'Male pattern baldness', 'Trichologist', 'Trichoscopy', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'The hairline is receding at the temples',
      'Thinning on the crown',
      'Hair is falling out fast',
      'Round bald patches appear',
      'Hair loss comes with itching and flaking',
    ],
    faq: [
      {
        question: 'Can male pattern baldness be stopped?',
        answer:
          'In most cases it can be slowed or stopped, especially if treatment starts early. But treatment is long-term: if it stops, shedding usually returns.',
      },
      {
        question: 'If it is hereditary, is treatment pointless?',
        answer:
          'No. Genetics sets the tendency, but treatment affects how fast it progresses. Men who come early keep most of their hair.',
      },
      {
        question: 'When will I see results?',
        answer:
          'Hair grows slowly, so the first result is judged after 3–6 months. Trichoscopy and photos show changes objectively.',
      },
      {
        question: 'Who needs a hair transplant?',
        answer:
          'It is for areas where follicles have closed completely. Treatment is still needed before and after to keep the remaining hair. The trichologist assesses contraindications.',
      },
      {
        question: 'Where can I see a trichologist in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a trichologist performs trichoscopy and builds a treatment plan. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const MALE_HAIR_LOSS_ARTICLE: Article = {
  id: 'art-erkaklarda-soch-tokilishi',
  slug: 'erkaklarda-soch-tokilishi',
  title: {
    uz: "Erkaklarda soch to'kilishi: androgenetik alopetsiyani qanday to'xtatish mumkin",
    ru: 'Выпадение волос у мужчин: как остановить андрогенетическую алопецию',
    en: 'Hair Loss in Men: How to Stop Male Pattern Baldness',
  },
  summary: {
    uz: MALE_HAIR_LOSS_ARTICLE_CATALOG.uz.summary,
    ru: MALE_HAIR_LOSS_ARTICLE_CATALOG.ru.summary,
    en: MALE_HAIR_LOSS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: MALE_HAIR_LOSS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: MALE_HAIR_LOSS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: MALE_HAIR_LOSS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: "Turg'unov Shohruz Ilxomjon o'g'li",
    ru: 'Тургунов Шохруз Илхомжон угли',
    en: 'Dr. Shohruz Ilxomjon ugli Turgunov',
  },
  date: '2026-11-16',
  image: '/articles/erkaklarda-soch-tokilishi-cover.jpg',
  images: {
    uz: '/articles/erkaklarda-soch-tokilishi-cover.jpg',
    ru: '/articles/erkaklarda-soch-tokilishi-cover.jpg',
    en: '/articles/erkaklarda-soch-tokilishi-cover.jpg',
  },
  views: 0,
};
