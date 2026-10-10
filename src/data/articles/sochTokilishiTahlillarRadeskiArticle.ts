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

const COVER = '/karusel/soch-mezoterapiya.jpg';

function uzBody(): string {
  return `## Soch kuchli to‘kilmoqda — nimadan boshlash kerak?

Kuniga 50–100 tagacha soch to‘kilishi normal. Agar soch ancha ko‘p tushayotgan bo‘lsa, zichlik kamaysa, ajratma kengaysa yoki o‘choqlar paydo bo‘lsa — sababni aniqlash kerak. Shampun va vitaminlarni tasodifiy tanlash ko‘pincha natija bermaydi, chunki **sabab har xil**.

![Soch to‘kilishi sababini aniqlash — Radeski Skin Clinic](${COVER})

## Eng ko‘p uchraydigan sabablar

- **Temir tanqisligi** (ayniqsa ayollarda) va kam qonlik;
- **qalqonsimon bez** faoliyatining o‘zgarishi;
- **stress, kasallik, yuqori harorat, keskin ozish** — 2–3 oydan keyin diffuz to‘kilish (telogen effluvium);
- **androgenetik alopetsiya** — irsiyat va gormonlar ta’sirida asta-sekin siyraklashish;
- **o‘choqli alopetsiya** — yumaloq, silliq kal joylar;
- **tug‘ruqdan keyingi** to‘kilish;
- bosh terisi kasalliklari: seboreyali dermatit, zamburug‘, psoriaz;
- ba’zi dorilar va qattiq parhezlar.

## Qanday tahlillar topshiriladi?

Tahlillar ro‘yxatini **trixolog ko‘rikdan keyin** belgilaydi — hammaga bir xil ro‘yxat kerak emas. Ko‘pincha quyidagilar so‘raladi:

1. **Umumiy qon tahlili** — kam qonlik va yallig‘lanish belgilari.
2. **Ferritin va zardob temiri** — temir zaxirasi (soch uchun eng muhim ko‘rsatkichlardan biri).
3. **TTG va erkin T4** — qalqonsimon bez.
4. **Vitamin D** va ko‘rsatmaga ko‘ra **B12**.
5. **Gormonlar** — ayollarda hayz buzilishi, akne yoki ortiqcha tuk o‘sishi bo‘lsa (testosteron, DGEA-S, prolaktin va boshqalar).
6. Kerak bo‘lsa — zamburug‘ tahlili yoki bosh terisi biopsiyasi.

## Trixoskopiya nima beradi?

**Trixoskopiya** — soch va bosh terisini raqamli kamera bilan kattalashtirib ko‘rish. U to‘kilish turini (androgenetik, diffuz, o‘choqli) farqlaydi, follikulalar holatini ko‘rsatadi va davolash samarasini keyinchalik raqamlar bilan solishtirish imkonini beradi. Og‘riqsiz, 15–20 daqiqa.

## Keyin nima bo‘ladi?

Sabab aniqlangach, davolash tanlanadi: tanqislikni to‘ldirish, bosh terisini davolash, PRP-terapiya, Hair Vital yoki Hair Loss Control protokollari, tuliy lazer mezoterapiyasi; ba’zan dermatolog, endokrinolog yoki ginekolog bilan birga. Natija sekin ko‘rinadi: to‘kilish odatda 2–3 oyda kamayadi, yangi soch 4–6 oyda seziladi.

Batafsil: [Farg‘onada soch to‘kilishi davolash](/uz/fargona/soch-tokilish), [Qo‘qonda soch to‘kilishi davolash](/uz/qoqon/soch-tokilish), [Normal va patologik to‘kilish](/uz/articles/art-soch-tokilishi-normal-patologiya-radeski), [Trixolog va trixoskopiya](/uz/articles/art-trixolog-trixoskopiya), [Narxlar](/uz/prices).`;
}

function ruBody(): string {
  return `## Сильно выпадают волосы — с чего начать?

До 50–100 волос в день — норма. Если волос выпадает заметно больше, густота уменьшается, пробор расширяется или появились очаги — нужно искать причину. Случайно подобранные шампуни и витамины часто не помогают, потому что **причины разные**.

![Поиск причины выпадения волос — Radeski Skin Clinic](${COVER})

## Самые частые причины

- **дефицит железа** (особенно у женщин) и анемия;
- нарушения работы **щитовидной железы**;
- **стресс, болезнь, высокая температура, резкое похудение** — диффузное выпадение через 2–3 месяца (телогеновое);
- **андрогенетическая алопеция** — постепенное поредение под влиянием наследственности и гормонов;
- **очаговая алопеция** — круглые гладкие участки без волос;
- выпадение **после родов**;
- болезни кожи головы: себорейный дерматит, грибок, псориаз;
- некоторые лекарства и жёсткие диеты.

## Какие анализы сдают?

Список анализов определяет **трихолог после осмотра** — одинаковый набор нужен не всем. Чаще всего это:

1. **Общий анализ крови** — анемия и признаки воспаления.
2. **Ферритин и сывороточное железо** — запас железа (один из важнейших показателей для волос).
3. **ТТГ и свободный Т4** — щитовидная железа.
4. **Витамин D**, по показаниям **B12**.
5. **Гормоны** — у женщин при нарушениях цикла, акне или избыточном росте волос (тестостерон, ДГЭА-С, пролактин и др.).
6. При необходимости — анализ на грибок или биопсия кожи головы.

## Что даёт трихоскопия?

**Трихоскопия** — осмотр волос и кожи головы цифровой камерой с увеличением. Она различает тип выпадения (андрогенетическое, диффузное, очаговое), показывает состояние фолликулов и позволяет потом сравнить результат лечения в цифрах. Безболезненно, 15–20 минут.

## Что дальше?

Когда причина найдена, подбирается лечение: восполнение дефицитов, лечение кожи головы, PRP-терапия, протоколы Hair Vital или Hair Loss Control, мезотерапия тулиевым лазером; иногда вместе с дерматологом, эндокринологом или гинекологом. Результат появляется постепенно: выпадение обычно уменьшается за 2–3 месяца, новые волосы заметны через 4–6 месяцев.

Подробнее: [Лечение выпадения волос в Фергане](/ru/fargona/soch-tokilish), [Лечение выпадения волос в Коканде](/ru/qoqon/soch-tokilish), [Нормальное и патологическое выпадение](/ru/articles/art-soch-tokilishi-normal-patologiya-radeski), [Цены](/ru/prices).`;
}

function enBody(): string {
  return `## Heavy hair loss — where to start?

Losing up to 50–100 hairs a day is normal. If much more falls out, density drops, the parting widens or patches appear, the cause needs to be found — random shampoos and vitamins often fail because **causes differ**.

![Finding the cause of hair loss — Radeski Skin Clinic](${COVER})

## Common causes

Iron deficiency and anaemia, thyroid disorders, stress/illness/fever/rapid weight loss (diffuse shedding 2–3 months later), androgenetic alopecia, alopecia areata, postpartum shedding, scalp diseases (seborrheic dermatitis, fungus, psoriasis), some medicines and strict diets.

## Which tests?

The trichologist chooses tests after the examination. Most often: complete blood count; ferritin and serum iron; TSH and free T4; vitamin D and, if indicated, B12; hormones for women with cycle problems, acne or excess hair growth; a fungal test or scalp biopsy when needed.

## What does trichoscopy show?

A magnified digital exam of hair and scalp that distinguishes the type of hair loss, shows follicle condition and lets results be compared later. Painless, 15–20 minutes.

## Next steps

Treatment follows the cause: correcting deficiencies, scalp treatment, PRP, Hair Vital or Hair Loss Control protocols, thulium laser mesotherapy. Shedding usually eases in 2–3 months; new hair shows in 4–6 months.

Read more: [Hair loss treatment in Fergana](/en/fargona/soch-tokilish), [Hair loss treatment in Kokand](/en/qoqon/soch-tokilish), [Prices](/en/prices).`;
}

export const SOCH_TOKILISHI_TAHLILLAR_RADESKI_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Soch kuchli to‘kilsa qanday tahlillar topshirish kerak: eng ko‘p uchraydigan sabablar, ferritin, qalqonsimon bez, vitamin D va gormonlar, trixoskopiya va keyingi davolash. Farg‘ona va Qo‘qonda trixolog.',
    body: uzBody(),
    keyTakeaways: [
      'Soch to‘kilishining sababi har xil — avval tashxis, keyin davolash',
      'Ferritin, qon tahlili va qalqonsimon bez ko‘rsatkichlari ko‘pincha tekshiriladi',
      'Trixoskopiya to‘kilish turini farqlaydi va natijani kuzatishga yordam beradi',
      'Natija sekin: 2–3 oyda kamayish, 4–6 oyda yangi soch',
    ],
    whenToSeeDoctor: [
      'To‘kilish bir necha haftadan beri kamaymayotgan bo‘lsa',
      'Ajratma kengaysa yoki soch siyraklashsa',
      'Kal o‘choqlar paydo bo‘lsa',
      'Bosh terisi qichisa, qizarsa yoki po‘st tashlasa',
    ],
    faq: [
      { question: 'Soch to‘kilishida birinchi qaysi tahlilni topshirish kerak?', answer: 'Ko‘pincha umumiy qon tahlili, ferritin, TTG va vitamin D; aniq ro‘yxatni trixolog ko‘rikdan keyin belgilaydi.' },
      { question: 'Vitamin ichsam yetarli emasmi?', answer: 'Sabab aniqlanmasa, vitaminlar ko‘pincha yordam bermaydi; tanqislik bo‘lmasa ortiqcha ichish foydasiz.' },
      { question: 'Trixoskopiya og‘riqlimi?', answer: 'Yo‘q, kamera faqat bosh terisiga tegadi; tekshiruv 15–20 daqiqa.' },
      { question: 'Qaysi shifokorga borish kerak?', answer: 'Trixologga (soch va bosh terisi mutaxassisi). Radeski’da Farg‘ona va Qo‘qon filiallarida qabul qilinadi.' },
    ],
    tags: ['Soch to‘kilishi', 'Trixolog', 'Trixoskopiya', 'Tahlillar', 'Farg‘ona', 'Qo‘qon', 'Radeski Skin Clinic'],
  },
  ru: {
    summary:
      'Какие анализы сдать при сильном выпадении волос: частые причины, ферритин, щитовидная железа, витамин D и гормоны, трихоскопия и дальнейшее лечение. Трихолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Причины выпадения разные — сначала диагноз, потом лечение',
      'Чаще проверяют общий анализ крови, ферритин и щитовидную железу',
      'Трихоскопия различает тип выпадения и помогает следить за результатом',
      'Результат постепенный: уменьшение за 2–3 месяца, новые волосы через 4–6',
    ],
    whenToSeeDoctor: [
      'Выпадение не уменьшается несколько недель',
      'Расширяется пробор или редеют волосы',
      'Появились очаги облысения',
      'Кожа головы зудит, краснеет или шелушится',
    ],
    faq: [
      { question: 'Какой анализ сдать первым при выпадении волос?', answer: 'Чаще всего общий анализ крови, ферритин, ТТГ и витамин D; точный список трихолог определяет после осмотра.' },
      { question: 'Разве не хватит витаминов?', answer: 'Без выявленной причины витамины часто не помогают; при отсутствии дефицита они бесполезны.' },
      { question: 'Больно ли делать трихоскопию?', answer: 'Нет, камера лишь касается кожи головы; исследование занимает 15–20 минут.' },
      { question: 'К какому врачу идти?', answer: 'К трихологу. В Radeski приём в Фергане и Коканде.' },
    ],
    tags: ['Выпадение волос', 'Трихолог', 'Трихоскопия', 'Анализы', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
  },
  en: {
    summary:
      'Which tests to take for heavy hair loss: common causes, ferritin, thyroid, vitamin D and hormones, trichoscopy and next steps. Trichologist in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Hair loss has different causes — diagnosis first',
      'Blood count, ferritin and thyroid tests are checked most often',
      'Trichoscopy identifies the type of hair loss and tracks results',
      'Results are gradual: less shedding in 2–3 months, new hair in 4–6',
    ],
    whenToSeeDoctor: ['Shedding lasts several weeks', 'Wider parting or thinning', 'Bald patches', 'Itchy, red or flaky scalp'],
    faq: [
      { question: 'Which test first for hair loss?', answer: 'Usually blood count, ferritin, TSH and vitamin D; the trichologist sets the list after the exam.' },
      { question: 'Are vitamins enough?', answer: 'Without a found cause they often do not help.' },
      { question: 'Is trichoscopy painful?', answer: 'No — the camera only touches the scalp; it takes 15–20 minutes.' },
    ],
    tags: ['Hair loss', 'Trichologist', 'Trichoscopy', 'Blood tests', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
  },
};

export const SOCH_TOKILISHI_TAHLILLAR_RADESKI_ARTICLE: Article = {
  id: 'art-soch-tokilishi-tahlillar-radeski',
  slug: 'soch-tokilishi-qanday-tahlillar-radeski',
  title: {
    uz: 'Soch kuchli to‘kilmoqda: qanday tahlillar kerak?',
    ru: 'Сильно выпадают волосы: какие анализы сдать?',
    en: 'Heavy Hair Loss: Which Tests Do You Need?',
  },
  summary: {
    uz: SOCH_TOKILISHI_TAHLILLAR_RADESKI_ARTICLE_CATALOG.uz.summary,
    ru: SOCH_TOKILISHI_TAHLILLAR_RADESKI_ARTICLE_CATALOG.ru.summary,
    en: SOCH_TOKILISHI_TAHLILLAR_RADESKI_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: SOCH_TOKILISHI_TAHLILLAR_RADESKI_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: SOCH_TOKILISHI_TAHLILLAR_RADESKI_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: SOCH_TOKILISHI_TAHLILLAR_RADESKI_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Radeski Skin Clinic shifokorlari jamoasi',
    ru: 'Команда врачей Radeski Skin Clinic',
    en: 'Radeski Skin Clinic medical team',
  },
  date: '2026-10-10',
  image: COVER,
  images: { uz: COVER, ru: COVER, en: COVER },
  views: 0,
};
