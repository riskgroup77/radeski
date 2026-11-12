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
 * Mesotherapy for the face and the scalp: what it is (micro-injections of targeted cocktails),
 * how it differs from biorevitalization (mainly hyaluronic hydration), what each cocktail the
 * clinic prices is for, a typical course, and that hair mesotherapy follows a trichologist's
 * diagnosis. Clinic facts: price list (DQ Hair, Ascorbix 20, Supreall, EGF Genesis, Rejuveyes,
 * Nefertiti Lift, GSH+C1000, DA HA 35), thulium laser mesotherapy for hair, trichology protocols.
 * Course length is given as a usual range, decided by the doctor.
 */

const COVER = {
  uz: '/articles/mezoterapiya-cover-uz.jpg',
  ru: '/articles/mezoterapiya-cover-ru.jpg',
  en: '/articles/mezoterapiya-cover-en.jpg',
};

function uzBody(): string {
  return `Mezoterapiya — teriga yoki bosh terisiga juda ingichka igna bilan **mikroinyeksiyalar** orqali maxsus «kokteyl» yuborish: vitaminlar, aminokislotalar, peptidlar, antioksidantlar, ba’zan gialuron kislotasi. Preparat aynan kerakli joyga — teri qatlamiga yetkaziladi, shuning uchun kremdan ko‘ra kuchliroq ta’sir qiladi. Mezoterapiya yuz uchun ham, soch uchun ham qo‘llaniladi, lekin vazifasi har xil.

## Mezoterapiya va biorevitalizatsiya — farqi

Ikkalasi ham mikroinyeksiya, shuning uchun ko‘pincha adashtiriladi.

- **Biorevitalizatsiya** asosan gialuron kislotasi bilan terini **chuqur namlantiradi** va elastikligini tiklaydi.
- **Mezoterapiya** — **aniq muammoga** mo‘ljallangan kokteyl: yorqinlik, pigment, ko‘z atrofi, teri tonusi yoki soch.

Ko‘pincha shifokor ularni bitta rejada birlashtiradi.

## Yuz uchun mezoterapiya

Radeski’da teri holatiga qarab turli preparatlar tanlanadi:

- **Ascorbix 20**, **GSH+C1000** — C vitamini va antioksidantlar bilan xira, notekis rangli teri uchun;
- **EGF Genesis** — teri tiklanishi va yangilanishini qo‘llab-quvvatlash uchun;
- **DA HA 35** — gialuron kislotali kokteyl, namlantirish va teri sifati uchun;
- **Rejuveyes** — ko‘z atrofidagi nozik teri uchun;
- **Nefertiti Lift** — teri tonusi va yuz-bo‘yin konturi uchun;
- **Supreall** — lipolitik preparat: mahalliy yog‘ to‘planishi va kontur uchun, shifokor ko‘rsatmasi bo‘yicha.

Qaysi preparat kerakligini dermatokosmetolog ko‘rikdan keyin aytadi — «hammaga bir xil» kokteyl yo‘q.

## Soch uchun mezoterapiya

Bosh terisiga qilingan mezoterapiya follikulalarni oziqlantiradi va soch to‘kilishini davolashda yordamchi usul bo‘ladi. Radeski’da **DQ Hair** preparati va tuliy lazer bilan **og‘riqsiz lazer mezoterapiya** qo‘llaniladi.

Muhim: soch to‘kilishining sababi har xil — gormonlar, temir tanqisligi, stress, qalqonsimon bez. Shuning uchun soch mezoterapiyasidan oldin **trixolog** trixoskopiya va kerak bo‘lsa tahlillar bilan sababni aniqlaydi. Sabab davolanmasa, mezoterapiya kutilgan natija bermaydi.

## Muolaja qanday o‘tadi?

1. Ko‘rik va preparat tanlash.
2. Teri tozalanadi va dezinfeksiya qilinadi; kerak bo‘lsa og‘riqsizlantiruvchi krem surtiladi.
3. Ingichka igna bilan mikroinyeksiyalar — odatda 20–40 daqiqa.
4. Keyin 1–2 kun kichik do‘mboqchalar yoki yengil qizarish bo‘lishi mumkin.

Odatda mezoterapiya **kurs** bilan qilinadi — bir necha seans, ma’lum oraliq bilan. Seanslar soni va oralig‘ini shifokor teri yoki soch holatiga qarab belgilaydi.

## Kimga mumkin emas?

Homiladorlik va emizish, preparat tarkibiga allergiya, qon ivishi buzilishi, o‘tkir infeksiya, muolaja joyida yallig‘lanish yoki gerpes, onkologik kasallik bo‘lganda mezoterapiya qilinmaydi yoki keyinga suriladi.

Batafsil: [Biorevitalizatsiya Farg‘onada](/uz/fargona/biorevitalizatsiya), [Soch to‘kilishini davolash Farg‘onada](/uz/fargona/soch-tokilish), [Biorevitalizatsiya nima](/uz/articles/art-biorevitalizatsiya-radeski), [Tuliy lazer va soch](/uz/articles/art-thulium-laser-hair-kokand).`;
}

function ruBody(): string {
  return `Мезотерапия — введение специального «коктейля» в кожу лица или кожу головы **микроинъекциями** очень тонкой иглой: витамины, аминокислоты, пептиды, антиоксиданты, иногда гиалуроновая кислота. Препарат попадает точно в нужный слой кожи, поэтому действует сильнее крема. Мезотерапию делают и для лица, и для волос, но задачи у них разные.

## Мезотерапия и биоревитализация — разница

Обе процедуры — микроинъекции, поэтому их часто путают.

- **Биоревитализация** в основном **глубоко увлажняет** кожу гиалуроновой кислотой и возвращает упругость.
- **Мезотерапия** — коктейль под **конкретную задачу**: сияние, пигмент, зона вокруг глаз, тонус кожи или волосы.

Часто врач объединяет их в один план.

## Мезотерапия для лица

В Radeski препарат подбирают по состоянию кожи:

- **Ascorbix 20**, **GSH+C1000** — с витамином C и антиоксидантами для тусклой кожи с неровным тоном;
- **EGF Genesis** — для поддержки восстановления и обновления кожи;
- **DA HA 35** — коктейль с гиалуроновой кислотой для увлажнения и качества кожи;
- **Rejuveyes** — для тонкой кожи вокруг глаз;
- **Nefertiti Lift** — для тонуса кожи и контура лица и шеи;
- **Supreall** — липолитик: для локальных жировых отложений и контура, по назначению врача.

Какой препарат нужен, дерматокосметолог скажет после осмотра — универсального коктейля «для всех» нет.

## Мезотерапия для волос

Мезотерапия кожи головы питает фолликулы и служит вспомогательным методом при лечении выпадения волос. В Radeski применяют препарат **DQ Hair** и **безболезненную лазерную мезотерапию** на тулиевом лазере.

Важно: причины выпадения разные — гормоны, дефицит железа, стресс, щитовидная железа. Поэтому перед мезотерапией волос **трихолог** выясняет причину с помощью трихоскопии и при необходимости анализов. Если причину не лечить, мезотерапия не даст ожидаемого результата.

## Как проходит процедура?

1. Осмотр и подбор препарата.
2. Очищение и антисептика кожи; при необходимости крем-анестетик.
3. Микроинъекции тонкой иглой — обычно 20–40 минут.
4. 1–2 дня могут сохраняться небольшие папулы или лёгкое покраснение.

Обычно мезотерапию проводят **курсом** — несколько сеансов с определённым интервалом. Количество сеансов и интервал врач определяет по состоянию кожи или волос.

## Кому нельзя?

Процедуру не проводят или откладывают при беременности и грудном вскармливании, аллергии на компоненты, нарушении свёртываемости крови, острой инфекции, воспалении или герпесе в зоне процедуры, онкологическом заболевании.

Подробнее: [Биоревитализация в Фергане](/ru/fargona/biorevitalizatsiya), [Лечение выпадения волос в Фергане](/ru/fargona/soch-tokilish), [Что такое биоревитализация](/ru/articles/art-biorevitalizatsiya-radeski), [Тулиевый лазер и волосы](/ru/articles/art-thulium-laser-hair-kokand).`;
}

function enBody(): string {
  return `Mesotherapy delivers a special “cocktail” into the facial skin or scalp with very fine-needle **micro-injections**: vitamins, amino acids, peptides, antioxidants and sometimes hyaluronic acid. The product reaches exactly the skin layer it is meant for, so it acts more strongly than a cream. Mesotherapy is used for both the face and the hair, but with different goals.

## Mesotherapy vs biorevitalization

Both are micro-injections, so they are often confused.

- **Biorevitalization** mainly **hydrates the skin deeply** with hyaluronic acid and restores elasticity.
- **Mesotherapy** is a cocktail aimed at a **specific problem**: glow, pigment, the eye area, skin tone or hair.

Doctors often combine them in one plan.

## Mesotherapy for the face

At Radeski the product is chosen for your skin:

- **Ascorbix 20**, **GSH+C1000** — with vitamin C and antioxidants for dull, uneven skin;
- **EGF Genesis** — to support skin repair and renewal;
- **DA HA 35** — a hyaluronic cocktail for hydration and skin quality;
- **Rejuveyes** — for the delicate skin around the eyes;
- **Nefertiti Lift** — for skin tone and the face and neck contour;
- **Supreall** — a lipolytic product for local fat deposits and contouring, as the doctor prescribes.

The dermatocosmetologist chooses the product after an examination — there is no one-size-fits-all cocktail.

## Mesotherapy for hair

Scalp mesotherapy nourishes the follicles and is a supporting method in treating hair loss. Radeski uses **DQ Hair** and **painless laser mesotherapy** with a thulium laser.

Important: hair loss has many causes — hormones, iron deficiency, stress, thyroid problems. So before hair mesotherapy a **trichologist** finds the cause with trichoscopy and, if needed, tests. If the cause is not treated, mesotherapy will not give the expected result.

## How the treatment goes

1. Examination and choice of product.
2. The skin is cleansed and disinfected; a numbing cream if needed.
3. Micro-injections with a fine needle — usually 20–40 minutes.
4. Small bumps or mild redness may last 1–2 days.

Mesotherapy is usually done as a **course** — several sessions at set intervals. The doctor decides the number of sessions and the interval based on your skin or hair.

## Who should not have it?

It is not done or is postponed during pregnancy and breastfeeding, with an allergy to the ingredients, a bleeding disorder, an acute infection, inflammation or cold sores in the area, or cancer.

Read more: [Biorevitalization in Fergana](/en/fargona/biorevitalizatsiya), [Hair loss treatment in Fergana](/en/fargona/soch-tokilish), [What is biorevitalization](/en/articles/art-biorevitalizatsiya-radeski), [Thulium laser and hair](/en/articles/art-thulium-laser-hair-kokand).`;
}

export const MESOTHERAPY_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Mezoterapiya yuz va soch uchun: biorevitalizatsiyadan farqi, qaysi preparat nima uchun, soch mezoterapiyasidan oldin trixolog, muolaja va kurs. Radeski — Farg'ona.",
    body: uzBody(),
    keyTakeaways: [
      'Mezoterapiya — aniq muammoga mo‘ljallangan kokteyl mikroinyeksiyasi',
      'Biorevitalizatsiya asosan namlantiradi, mezoterapiya maqsadli ta’sir qiladi',
      'Preparat teri holatiga qarab ko‘rikdan keyin tanlanadi',
      'Soch mezoterapiyasidan oldin to‘kilish sababini trixolog aniqlaydi',
      'Odatda kurs bilan qilinadi; seanslar sonini shifokor belgilaydi',
    ],
    tags: ['Mezoterapiya', 'Soch mezoterapiyasi', 'Biorevitalizatsiya', 'Yuz parvarishi', 'Kosmetolog', 'Trixolog', "Farg'ona", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Muolajadan keyin qizarish va shish 2–3 kundan ko‘p davom etyapti',
      'Inyeksiya joyida og‘riqli, issiq do‘mboq yoki yiring paydo bo‘ldi',
      'Soch kuchli to‘kilyapti yoki o‘choqlar paydo bo‘ldi',
      'Teri rangi notekisligi tez o‘zgaryapti',
    ],
    faq: [
      {
        question: 'Mezoterapiya og‘riqlimi?',
        answer:
          'Igna juda ingichka, ko‘pchilik buni chidasa bo‘ladigan sanchiq sifatida his qiladi. Kerak bo‘lsa og‘riqsizlantiruvchi krem surtiladi; soch uchun og‘riqsiz lazer mezoterapiya ham bor.',
      },
      {
        question: 'Natija qachon ko‘rinadi?',
        answer:
          'Yuzda teri holati odatda bir necha seansdan keyin yaxshilanadi. Soch uchun natija sekinroq — oylar bilan baholanadi va to‘kilish sababini davolashga bog‘liq.',
      },
      {
        question: 'Mezoterapiyani biorevitalizatsiya bilan birga qilsa bo‘ladimi?',
        answer:
          'Ha, ko‘pincha ular bitta rejada birlashtiriladi: biorevitalizatsiya namlantiradi, mezoterapiya aniq muammoga ishlaydi. Ketma-ketlikni shifokor belgilaydi.',
      },
      {
        question: 'Soch to‘kilishiga faqat mezoterapiya yetadimi?',
        answer:
          'Ko‘pincha yo‘q. Mezoterapiya yordamchi usul; avval trixolog to‘kilish sababini aniqlaydi va kompleks davolashni tanlaydi.',
      },
    ],
  },
  ru: {
    summary:
      'Мезотерапия для лица и волос: отличие от биоревитализации, какой препарат для чего, трихолог перед мезотерапией волос, процедура и курс. Radeski — Фергана.',
    body: ruBody(),
    keyTakeaways: [
      'Мезотерапия — микроинъекции коктейля под конкретную задачу',
      'Биоревитализация в основном увлажняет, мезотерапия действует прицельно',
      'Препарат подбирают по состоянию кожи после осмотра',
      'Перед мезотерапией волос трихолог выясняет причину выпадения',
      'Обычно проводится курсом; число сеансов определяет врач',
    ],
    tags: ['Мезотерапия', 'Мезотерапия волос', 'Биоревитализация', 'Уход за лицом', 'Косметолог', 'Трихолог', 'Фергана', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Покраснение и отёк после процедуры держатся больше 2–3 дней',
      'На месте укола болезненный горячий бугорок или гной',
      'Сильное выпадение волос или появились очаги',
      'Неровный тон кожи быстро меняется',
    ],
    faq: [
      {
        question: 'Больно ли делать мезотерапию?',
        answer:
          'Игла очень тонкая, большинство ощущает терпимые уколы. При необходимости наносят крем-анестетик; для волос есть и безболезненная лазерная мезотерапия.',
      },
      {
        question: 'Когда виден результат?',
        answer:
          'На лице состояние кожи обычно улучшается через несколько сеансов. Для волос результат медленнее — его оценивают через месяцы, и он зависит от лечения причины выпадения.',
      },
      {
        question: 'Можно ли сочетать мезотерапию с биоревитализацией?',
        answer:
          'Да, их часто объединяют в один план: биоревитализация увлажняет, мезотерапия работает с конкретной задачей. Последовательность определяет врач.',
      },
      {
        question: 'Хватит ли только мезотерапии при выпадении волос?',
        answer:
          'Чаще нет. Мезотерапия — вспомогательный метод; сначала трихолог выясняет причину выпадения и подбирает комплексное лечение.',
      },
    ],
  },
  en: {
    summary:
      'Mesotherapy for the face and hair: how it differs from biorevitalization, which product is for what, seeing a trichologist first for hair, the procedure and course. Radeski — Fergana.',
    body: enBody(),
    keyTakeaways: [
      'Mesotherapy is micro-injection of a cocktail aimed at a specific problem',
      'Biorevitalization mainly hydrates; mesotherapy targets a goal',
      'The product is chosen for your skin after an examination',
      'Before hair mesotherapy a trichologist finds the cause of hair loss',
      'Usually done as a course; the doctor sets the number of sessions',
    ],
    tags: ['Mesotherapy', 'Hair mesotherapy', 'Biorevitalization', 'Facial care', 'Cosmetologist', 'Trichologist', 'Fergana', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Redness and swelling last more than 2–3 days after treatment',
      'A painful, hot lump or pus appears at an injection site',
      'Heavy hair loss or bald patches appear',
      'Uneven skin tone is changing quickly',
    ],
    faq: [
      {
        question: 'Does mesotherapy hurt?',
        answer:
          'The needle is very fine and most people feel tolerable pricks. A numbing cream can be used; for hair there is also painless laser mesotherapy.',
      },
      {
        question: 'When will I see results?',
        answer:
          'On the face skin usually improves after a few sessions. For hair it is slower — judged over months — and depends on treating the cause of hair loss.',
      },
      {
        question: 'Can mesotherapy be combined with biorevitalization?',
        answer:
          'Yes, they are often combined: biorevitalization hydrates and mesotherapy targets a specific problem. The doctor sets the order.',
      },
      {
        question: 'Is mesotherapy alone enough for hair loss?',
        answer:
          'Usually not. It is a supporting method; a trichologist first finds the cause and chooses a combined treatment.',
      },
    ],
  },
};

export const MESOTHERAPY_ARTICLE: Article = {
  id: 'art-mezoterapiya',
  slug: 'mezoterapiya',
  title: {
    uz: 'Mezoterapiya yuz va soch uchun: nima, kimga va biorevitalizatsiyadan farqi',
    ru: 'Мезотерапия для лица и волос: что это, кому подходит и чем отличается от биоревитализации',
    en: 'Mesotherapy for Face and Hair: What It Is, Who It Suits and How It Differs from Biorevitalization',
  },
  summary: {
    uz: MESOTHERAPY_ARTICLE_CATALOG.uz.summary,
    ru: MESOTHERAPY_ARTICLE_CATALOG.ru.summary,
    en: MESOTHERAPY_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: MESOTHERAPY_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: MESOTHERAPY_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: MESOTHERAPY_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Mangasaryan Lorena Georgievna',
    ru: 'Мангасарян Лорена Георгиевна',
    en: 'Dr. Lorena Georgievna Mangasaryan',
  },
  date: '2026-11-12',
  image: COVER.uz,
  images: COVER,
  views: 0,
};
