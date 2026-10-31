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
 * Hair loss in women — the overview the trichology pages were missing: the common types
 * (telogen effluvium after childbirth/illness/diets, female pattern thinning, iron and thyroid,
 * traction, alopecia areata), what the trichologist checks, and the treatment options the
 * clinic already has articles for (PRP, thulium laser).
 */

function uzBody(): string {
  return `Soch to'kilishi — ayollarning trixologga murojaat qilishidagi eng ko'p sabab. Sochning kamayishi kayfiyat va o'ziga ishonchga sezilarli ta'sir qiladi, shuning uchun ko'pchilik birinchi navbatda "soch to'kilishiga qarshi" shampun va vitaminlarni sinab ko'radi. Lekin ayollarda soch to'kilishining sabablari har xil va samarali davolash sababni aniqlashdan boshlanadi.

## Normal va ortiqcha to'kilish

Kuniga 50–100 tagacha soch to'kilishi normal. Bu haqda batafsil: [normal va patologik soch to'kilishi](/uz/articles/art-soch-tokilishi-normal-patologiya-radeski). Xavotirga sabab:

- taroqda va yostiqda soch keskin ko'paysa;
- soch ayirmasi kengaysa, bosh terisi ko'rina boshlasa;
- soch o'rimi ingichkalashsa;
- dumaloq sochsiz o'choqlar paydo bo'lsa.

## Ayollarda soch to'kilishining asosiy sabablari

- **Telogen to'kilish** — kuchli stress, yuqori isitmali kasallik, operatsiya, qattiq parhez yoki **tug'ruqdan** 2–3 oy keyin to'satdan ko'p soch to'kiladi. Odatda 6–12 oyda tiklanadi, sababi bartaraf etilsa.
- **Temir tanqisligi va kamqonlik** — ayollarda, ayniqsa ko'p hayz qon yo'qotishida keng tarqalgan.
- **Qalqonsimon bez kasalliklari** — gormonlar ko'p yoki kam bo'lishi sochga ta'sir qiladi.
- **Ayollar tipidagi (androgenetik) sochning siyraklashishi** — tepada, soch ayirmasi bo'ylab asta-sekin ingichkalashish; irsiyat va gormonlar (masalan, polikistoz tuxumdon sindromi) bilan bog'liq.
- **Tortilish alopetsiyasi** — doim qattiq tortilgan soch turmagi, quyruq va o'rimdan peshona va chakkada siyraklashish.
- **O'choqli alopetsiya** — dumaloq sochsiz o'choqlar. Batafsil: [o'choqli alopetsiya](/uz/articles/art-alopecia-areata-klinik-holat).
- **Agressiv parvarish** — tez-tez bo'yash, oqartirish, issiq dazmol va fen.

## Trixolog qanday tekshiradi?

- **So'rov** — to'kilish qachon boshlangani, tug'ruq, kasalliklar, parhezlar, dorilar, hayz sikli;
- **[Trixoskopiya](/uz/articles/art-trixolog-trixoskopiya)** — bosh terisi va soch ildizlarini raqamli kattalashtirish bilan ko'rish; to'kilish turini aniqlaydi;
- **Qon tahlillari** — temir zaxirasi, qalqonsimon bez gormonlari va boshqalar, shifokor tavsiyasi bilan. Batafsil: [soch to'kilishida qanday tahlillar topshiriladi](/uz/articles/art-soch-tokilishi-tahlillar-radeski);
- kerak bo'lsa — ginekolog yoki endokrinolog maslahati.

## Qanday davolanadi?

Davolash sababga bog'liq va bir necha yo'nalishni birlashtiradi:

- **sababni bartaraf etish** — temir tanqisligini to'ldirish, qalqonsimon bezni davolash, parhezni to'g'rilash;
- **tashqi vositalar** — shifokor tanlagan soch o'sishini qo'llab-quvvatlovchi vositalar;
- **[PRP (plazmoterapiya)](/uz/articles/art-plazmotorapiya-soch-prp)** — o'z qon plazmasidan tayyorlangan in'ektsiyalar;
- **[tuliy lazer](/uz/articles/art-thulium-laser-hair-kokand)** — soch follikulalarini rag'batlantiruvchi apparat muolajasi;
- **to'g'ri parvarish** — yumshoq shampun, kam issiqlik, bo'sh turmaklar.

Natija sekin ko'rinadi: soch oyiga taxminan 1 sm o'sadi, shuning uchun birinchi o'zgarishlar 2–3 oydan keyin baholanadi.

## Tug'ruqdan keyin soch to'kilishi

Tug'ruqdan 2–4 oy keyin soch ko'p to'kilishi — juda keng tarqalgan va ko'pincha vaqtinchalik holat. U odatda bir yil ichida tiklanadi. Lekin to'kilish uzoq davom etsa yoki soch siyraklashib qolsa, temir tanqisligi va qalqonsimon bezni tekshirish kerak.

## Farg'ona va Qo'qonda trixolog qabuli

Radeski Skin Clinic'ning [trixologiya markazida](/uz/services/trihologiya-centr-lechenie-volos) trixolog trixoskopiya o'tkazadi, kerakli tahlillarni buyuradi, soch to'kilishi turini aniqlaydi va davolash rejasini tuzadi.

- [Trixolog Farg'onada](/uz/fargona/trixolog) va [Qo'qonda](/uz/qoqon/trixolog);
- [Soch to'kilishini davolash Farg'onada](/uz/fargona/soch-tokilish) va [Qo'qonda](/uz/qoqon/soch-tokilish).

Soch to'kilishini qancha erta tekshirsangiz, follikulalarni saqlab qolish va sochni tiklash imkoniyati shuncha yuqori.`;
}

function ruBody(): string {
  return `Выпадение волос — самая частая причина, по которой женщины обращаются к трихологу. Поредение волос заметно влияет на настроение и уверенность в себе, поэтому многие сначала пробуют шампуни и витамины «от выпадения». Но причины выпадения волос у женщин бывают очень разными, и эффективное лечение начинается с поиска причины.

## Нормальное и избыточное выпадение

Терять до 50–100 волос в день — нормально. Подробнее: [нормальное и патологическое выпадение волос](/ru/articles/art-soch-tokilishi-normal-patologiya-radeski). Поводы для беспокойства:

- волос на расчёске и подушке стало резко больше;
- пробор расширился, стала просвечивать кожа головы;
- коса стала тоньше;
- появились круглые очаги без волос.

## Основные причины выпадения волос у женщин

- **Телогеновое выпадение** — через 2–3 месяца после сильного стресса, болезни с высокой температурой, операции, жёсткой диеты или **родов** волосы внезапно выпадают в большом количестве. Обычно восстанавливаются за 6–12 месяцев, если причина устранена.
- **Дефицит железа и анемия** — частая причина у женщин, особенно при обильных менструациях.
- **Заболевания щитовидной железы** — избыток или недостаток гормонов отражается на волосах.
- **Женский (андрогенетический) тип поредения** — постепенное истончение на макушке и по линии пробора; связан с наследственностью и гормонами (например, при синдроме поликистозных яичников).
- **Тракционная алопеция** — поредение у лба и висков от постоянно тугих причёсок, хвостов и кос.
- **Очаговая алопеция** — круглые очаги без волос. Подробнее: [очаговая алопеция](/ru/articles/art-alopecia-areata-klinik-holat).
- **Агрессивный уход** — частое окрашивание, осветление, утюжок и горячий фен.

## Как обследует трихолог?

- **Расспрос** — когда началось выпадение, роды, болезни, диеты, лекарства, менструальный цикл;
- **[Трихоскопия](/ru/articles/art-trixolog-trixoskopiya)** — осмотр кожи головы и корней волос при цифровом увеличении; определяет тип выпадения;
- **Анализы крови** — запасы железа, гормоны щитовидной железы и другие, по назначению врача. Подробнее: [какие анализы сдать при выпадении волос](/ru/articles/art-soch-tokilishi-tahlillar-radeski);
- при необходимости — консультация гинеколога или эндокринолога.

## Как лечат?

Лечение зависит от причины и объединяет несколько направлений:

- **устранение причины** — восполнение дефицита железа, лечение щитовидной железы, коррекция питания;
- **наружные средства** — средства для поддержки роста волос, которые подберёт врач;
- **[PRP (плазмотерапия)](/ru/articles/art-plazmotorapiya-soch-prp)** — инъекции из собственной плазмы крови;
- **[тулиевый лазер](/ru/articles/art-thulium-laser-hair-kokand)** — аппаратная процедура, стимулирующая волосяные фолликулы;
- **правильный уход** — мягкий шампунь, меньше нагрева, свободные причёски.

Результат проявляется не сразу: волосы растут примерно на 1 см в месяц, поэтому первые изменения оценивают через 2–3 месяца.

## Выпадение волос после родов

Сильное выпадение волос через 2–4 месяца после родов — очень частое и обычно временное явление. Как правило, волосы восстанавливаются в течение года. Но если выпадение затянулось или волосы остались редкими, нужно проверить железо и щитовидную железу.

## Приём трихолога в Фергане и Коканде

В [центре трихологии](/ru/services/trihologiya-centr-lechenie-volos) Radeski Skin Clinic трихолог проведёт трихоскопию, назначит нужные анализы, определит тип выпадения и составит план лечения.

- [Трихолог в Фергане](/ru/fargona/trixolog) и [в Коканде](/ru/qoqon/trixolog);
- [Лечение выпадения волос в Фергане](/ru/fargona/soch-tokilish) и [в Коканде](/ru/qoqon/soch-tokilish).

Чем раньше обследовать выпадение волос, тем выше шансы сохранить фолликулы и восстановить густоту.`;
}

function enBody(): string {
  return `Hair loss is the most common reason women see a trichologist. Thinning hair affects mood and confidence, so many first try "anti-hair-loss" shampoos and vitamins. But women lose hair for many different reasons, and effective treatment starts with finding the cause.

## Normal and excessive shedding

Losing up to 50–100 hairs a day is normal. More: [normal versus pathological hair loss](/en/articles/art-soch-tokilishi-normal-patologiya-radeski). Reasons for concern:

- far more hair on your brush and pillow;
- a widening parting, with the scalp showing through;
- a thinner ponytail or plait;
- round bald patches.

## Main causes of hair loss in women

- **Telogen effluvium** — 2–3 months after severe stress, an illness with high fever, surgery, a strict diet or **childbirth**, hair suddenly sheds heavily. It usually recovers in 6–12 months once the cause is dealt with.
- **Iron deficiency and anaemia** — common in women, especially with heavy periods.
- **Thyroid disease** — too much or too little thyroid hormone shows in the hair.
- **Female pattern (androgenetic) thinning** — gradual thinning on the crown and along the parting; linked to genetics and hormones (for example polycystic ovary syndrome).
- **Traction alopecia** — thinning at the hairline and temples from tight ponytails, buns and braids.
- **Alopecia areata** — round bald patches. More: [alopecia areata](/en/articles/art-alopecia-areata-klinik-holat).
- **Harsh hair care** — frequent dyeing, bleaching, flat irons and hot hairdryers.

## How does a trichologist investigate?

- **History** — when the shedding started, childbirth, illnesses, diets, medicines, menstrual cycle;
- **[Trichoscopy](/en/articles/art-trixolog-trixoskopiya)** — examining the scalp and hair roots under digital magnification; it identifies the type of hair loss;
- **Blood tests** — iron stores, thyroid hormones and others, as the doctor advises. More: [which tests to take for hair loss](/en/articles/art-soch-tokilishi-tahlillar-radeski);
- when needed — a gynaecologist or endocrinologist.

## How is it treated?

Treatment depends on the cause and usually combines several approaches:

- **dealing with the cause** — replacing iron, treating the thyroid, correcting the diet;
- **topical products** — hair growth support chosen by the doctor;
- **[PRP (plasma therapy)](/en/articles/art-plazmotorapiya-soch-prp)** — injections prepared from your own blood plasma;
- **[thulium laser](/en/articles/art-thulium-laser-hair-kokand)** — a device treatment that stimulates hair follicles;
- **gentle hair care** — mild shampoo, less heat, loose hairstyles.

Results take time: hair grows about 1 cm a month, so the first changes are assessed after 2–3 months.

## Hair loss after childbirth

Heavy shedding 2–4 months after giving birth is very common and usually temporary; hair typically recovers within a year. But if shedding goes on or the hair stays thin, iron levels and the thyroid should be checked.

## Trichologist visits in Fergana and Kokand

At the Radeski Skin Clinic [trichology centre](/en/services/trihologiya-centr-lechenie-volos) a trichologist performs trichoscopy, orders the right tests, identifies the type of hair loss and builds a treatment plan.

- [Trichologist in Fergana](/en/fargona/trixolog) and [in Kokand](/en/qoqon/trixolog);
- [Hair loss treatment in Fergana](/en/fargona/soch-tokilish) and [in Kokand](/en/qoqon/soch-tokilish).

The sooner hair loss is investigated, the better the chances of saving the follicles and restoring thickness.`;
}

export const FEMALE_HAIR_LOSS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Ayollarda soch to'kilishi: tug'ruqdan keyingi va telogen to'kilish, temir tanqisligi, qalqonsimon bez, androgenetik siyraklashish. Trixoskopiya, tahlillar va davolash. Farg'ona va Qo'qonda trixolog.",
    body: uzBody(),
    keyTakeaways: [
      "Kuniga 50–100 tagacha soch to'kilishi normal",
      "Ko'p sabablar: tug'ruq, stress, parhez, temir tanqisligi, qalqonsimon bez, irsiyat",
      'Trixoskopiya va qon tahlillari to\'kilish turini va sababini aniqlaydi',
      "Davolash sababga bog'liq: sababni bartaraf etish, tashqi vositalar, PRP, tuliy lazer",
      "Natija 2–3 oydan keyin baholanadi — soch sekin o'sadi",
    ],
    tags: ["Soch to'kilishi", "Ayollarda soch to'kilishi", 'Trixolog', 'Trixoskopiya', "Tug'ruqdan keyin soch", "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Soch to'kilishi keskin ko'paysa",
      'Soch ayirmasi kengayib, bosh terisi ko\'rinsa',
      "Dumaloq sochsiz o'choqlar paydo bo'lsa",
      "Tug'ruqdan bir yil o'tib ham to'kilish davom etsa",
      "To'kilish holsizlik, hayz buzilishi yoki vazn o'zgarishi bilan birga kelsa",
    ],
    faq: [
      {
        question: 'Vitaminlar soch to\'kilishini to\'xtatadimi?',
        answer:
          "Faqat ma'lum bir moddaning tanqisligi bo'lsa — masalan, temir. Tahlilsiz vitamin ichish ko'pincha natija bermaydi va sababni yashiradi. Avval trixolog tekshiruvi va tahlillar kerak.",
      },
      {
        question: "Tug'ruqdan keyin soch qachon tiklanadi?",
        answer:
          "Ko'pincha 6–12 oy ichida. Agar to'kilish bir yildan ko'p davom etsa yoki soch siyraklashib qolsa, temir tanqisligi va qalqonsimon bezni tekshirish kerak.",
      },
      {
        question: 'Soch to\'kilishi butunlay davolanadimi?',
        answer:
          "Telogen to'kilish va tanqislik bilan bog'liq to'kilish sabab bartaraf etilsa to'liq tiklanadi. Androgenetik siyraklashish surunkali — uni to'xtatish va sochni sezilarli yaxshilash mumkin, lekin davolash uzoq muddatli bo'ladi.",
      },
      {
        question: 'Trixoskopiya qanday o\'tkaziladi?',
        answer:
          "Trixolog maxsus kamera bilan bosh terisi va soch ildizlarini kattalashtirib ko'radi. Muolaja og'riqsiz, 15–20 daqiqa davom etadi va soch to'kilishi turini aniqlashga yordam beradi.",
      },
      {
        question: "Farg'ona va Qo'qonda trixolog qayerda qabul qiladi?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida trixolog trixoskopiya o'tkazadi, tahlillarni buyuradi va davolash rejasini tuzadi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Выпадение волос у женщин: после родов и телогеновое, дефицит железа, щитовидная железа, андрогенетическое поредение. Трихоскопия, анализы и лечение. Трихолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Терять до 50–100 волос в день — нормально',
      'Причин много: роды, стресс, диеты, дефицит железа, щитовидная железа, наследственность',
      'Трихоскопия и анализы крови определяют тип и причину выпадения',
      'Лечение зависит от причины: её устранение, наружные средства, PRP, тулиевый лазер',
      'Результат оценивают через 2–3 месяца — волосы растут медленно',
    ],
    tags: ['Выпадение волос', 'Выпадение волос у женщин', 'Трихолог', 'Трихоскопия', 'Волосы после родов', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Выпадение волос резко усилилось',
      'Пробор расширился, просвечивает кожа головы',
      'Появились круглые очаги без волос',
      'Через год после родов выпадение продолжается',
      'Выпадение со слабостью, нарушением цикла или изменением веса',
    ],
    faq: [
      {
        question: 'Помогают ли витамины от выпадения волос?',
        answer:
          'Только если есть дефицит конкретного вещества — например, железа. Витамины без анализов часто не дают результата и скрывают причину. Сначала нужен осмотр трихолога и анализы.',
      },
      {
        question: 'Когда восстанавливаются волосы после родов?',
        answer:
          'Чаще всего за 6–12 месяцев. Если выпадение длится дольше года или волосы остались редкими, нужно проверить железо и щитовидную железу.',
      },
      {
        question: 'Можно ли вылечить выпадение волос полностью?',
        answer:
          'Телогеновое выпадение и выпадение из-за дефицита полностью проходят, если устранить причину. Андрогенетическое поредение хроническое — его можно остановить и заметно улучшить густоту, но лечение будет длительным.',
      },
      {
        question: 'Как проходит трихоскопия?',
        answer:
          'Трихолог специальной камерой осматривает кожу головы и корни волос при увеличении. Процедура безболезненная, занимает 15–20 минут и помогает определить тип выпадения.',
      },
      {
        question: 'Где принимает трихолог в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде трихолог проведёт трихоскопию, назначит анализы и составит план лечения. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Hair loss in women: after childbirth and telogen effluvium, iron deficiency, thyroid, female pattern thinning. Trichoscopy, tests and treatment. Trichologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Losing up to 50–100 hairs a day is normal',
      'Many causes: childbirth, stress, diets, iron deficiency, thyroid, genetics',
      'Trichoscopy and blood tests identify the type and cause of hair loss',
      'Treatment depends on the cause: fixing it, topical products, PRP, thulium laser',
      'Results are judged after 2–3 months — hair grows slowly',
    ],
    tags: ['Hair loss', 'Hair loss in women', 'Trichologist', 'Trichoscopy', 'Postpartum hair loss', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Shedding has suddenly increased',
      'Your parting is wider and the scalp shows through',
      'Round bald patches appear',
      'Shedding continues a year after childbirth',
      'Hair loss comes with tiredness, irregular periods or weight change',
    ],
    faq: [
      {
        question: 'Do vitamins stop hair loss?',
        answer:
          'Only if you lack a specific nutrient — iron, for example. Taking vitamins without tests often does nothing and hides the cause. A trichologist exam and tests come first.',
      },
      {
        question: 'When does hair recover after childbirth?',
        answer:
          'Usually within 6–12 months. If shedding lasts more than a year or the hair stays thin, iron and thyroid should be checked.',
      },
      {
        question: 'Can hair loss be cured completely?',
        answer:
          'Telogen effluvium and deficiency-related shedding recover fully once the cause is fixed. Female pattern thinning is chronic — it can be stopped and visibly improved, but treatment is long-term.',
      },
      {
        question: 'What happens during trichoscopy?',
        answer:
          'The trichologist examines the scalp and hair roots with a special magnifying camera. It is painless, takes 15–20 minutes and helps identify the type of hair loss.',
      },
      {
        question: 'Where can I see a trichologist in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a trichologist performs trichoscopy, orders tests and builds a treatment plan. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const FEMALE_HAIR_LOSS_ARTICLE: Article = {
  id: 'art-ayollarda-soch-tokilishi',
  slug: 'ayollarda-soch-tokilishi',
  title: {
    uz: "Ayollarda soch to'kilishi: sabablari, tekshiruv va davolash — trixolog maslahati",
    ru: 'Выпадение волос у женщин: причины, обследование и лечение — советы трихолога',
    en: 'Hair Loss in Women: Causes, Tests and Treatment — Trichologist Advice',
  },
  summary: {
    uz: FEMALE_HAIR_LOSS_ARTICLE_CATALOG.uz.summary,
    ru: FEMALE_HAIR_LOSS_ARTICLE_CATALOG.ru.summary,
    en: FEMALE_HAIR_LOSS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: FEMALE_HAIR_LOSS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: FEMALE_HAIR_LOSS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: FEMALE_HAIR_LOSS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Abdvaliyev Begali',
    ru: 'Абдвалиев Бегали',
    en: 'Dr. Begali Abdvaliyev',
  },
  date: '2026-11-13',
  image: '/articles/ayollarda-soch-tokilishi-cover.jpg',
  images: {
    uz: '/articles/ayollarda-soch-tokilishi-cover.jpg',
    ru: '/articles/ayollarda-soch-tokilishi-cover.jpg',
    en: '/articles/ayollarda-soch-tokilishi-cover.jpg',
  },
  views: 0,
};
