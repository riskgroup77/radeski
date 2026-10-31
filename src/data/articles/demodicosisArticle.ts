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
 * Demodicosis — a frequent question behind "redness and pimples that do not respond to acne
 * treatment". Points: the mite lives on most adults, disease is overgrowth plus inflammation;
 * the lab test confirms it; steroid creams make it worse; links to rosacea and acne pages.
 */

function uzBody(): string {
  return `Demodekoz — terida yashaydigan mikroskopik demodeks kanasining haddan tashqari ko'payishi bilan bog'liq yallig'lanish. U yuzda qizarish, mayda tugunchalar va yiringchalar, qichishish va terining dag'allashishi bilan namoyon bo'ladi. Ko'pincha akne yoki allergiya deb o'ylashadi va oylab noto'g'ri davolashadi. To'g'ri tashxis qo'yilsa, demodekoz yaxshi davolanadi.

## Demodeks kanasi nima?

Demodeks — soch follikulalari va yog' bezlarida yashaydigan, ko'zga ko'rinmaydigan kana. U kattalarning ko'pchiligida bor va odatda hech qanday muammo tug'dirmaydi. Kasallik kana **ko'payib ketganda** va teri unga yallig'lanish bilan javob berganda boshlanadi. Bunga quyidagilar sabab bo'lishi mumkin:

- yog'li teri va yog' bezlarining faolligi;
- immunitet pasayishi, stress, charchoq;
- gormonli kremlarni uzoq surtish;
- og'ir, yog'li kosmetika va yuvilmagan pardoz;
- rozatseya, oshqozon-ichak kasalliklari.

## Demodekoz belgilari

- yonoq, burun, peshona va iyakda qizarish;
- mayda qizil tugunchalar va yiringchalar;
- qichishish, achishish, ayniqsa kechqurun;
- terining g'adir-budurligi ("qum qog'ozi" kabi), po'st tashlash;
- kengaygan teshiklar va yog'lanish;
- **ko'z qovoqlari zararlanganda** — qovoq chetlari qichishi, qizarishi, kipriklarda qobiqlar, kiprik to'kilishi. Bunda oftalmolog ham ko'rishi kerak.

## Demodekoz, akne va rozatseya

Bu kasalliklar bir-biriga o'xshaydi va ko'pincha birga keladi:

- **[akne](/uz/articles/art-akne)** — ko'proq komedonlar (qora nuqtalar), o'smirlik va yoshlarda;
- **[rozatseya](/uz/articles/art-rozatseya-davolash-radeski)** — yuz markazida doimiy qizarish va tomirlar; demodeks uni kuchaytiradi;
- **demodekoz** — qichishish, dag'al teri, akne davolashiga javob bermaslik.

Shuning uchun tashxisni dermatolog qo'yadi: ko'rik, dermatoskopiya va **qirindi tahlili** — mikroskopda kanalar soni aniqlanadi.

## Qanday davolanadi?

- **Kanaga qarshi tashqi vositalar** — shifokor tayinlaydi, kurs odatda 1–3 oy davom etadi;
- og'ir holatlarda — shifokor tavsiya qilgan ichiladigan dorilar;
- yallig'lanish va qizarishni kamaytirish uchun qo'shimcha davolash;
- rozatseya bilan birga kelsa — uning davolashi, shu jumladan tomir va qizarish uchun apparat muolajalari.

**Muhim:** gormonli kremlar demodekozni vaqtincha "tinchitadi", lekin keyin kasallikni kuchaytiradi. Ularni o'zboshimchalik bilan surtmang.

## Uyda parvarish

- Yuzni kuniga 2 marta yumshoq vosita bilan yuving, kechqurun pardozni albatta tozalang.
- Og'ir yog'li kremlar va tonal vositalardan vaqtincha voz keching.
- Yostiq jildini haftasiga 2–3 marta almashtiring, shaxsiy sochiqdan foydalaning.
- Issiq ichimlik, achchiq ovqat, sauna va quyosh qizarishni kuchaytiradi — cheklang.
- Davolashni natija ko'ringandan keyin ham shifokor aytgan muddatgacha davom ettiring.

Qishda yuz terisini ortiqcha quritmang: yumshoq parvarish bo'yicha [qishki parvarish maqolasi](/uz/articles/art-qishda-teri-parvarishi) yordam beradi.

## Farg'ona va Qo'qonda demodekozni davolash

Radeski Skin Clinic'da [dermatolog](/uz/services/dermatologiya) yuz terisini dermatoskop bilan tekshiradi, kerak bo'lsa qirindi tahlilini buyuradi, demodekozni akne va rozatseyadan ajratadi va davolash rejasini tuzadi.

- [Rozatseya — qisqacha](/uz/conditions/rozasea) va [Akne — qisqacha](/uz/conditions/acne);
- [Rozatseyani davolash Farg'onada](/uz/fargona/rozasea-davolash) va [Qo'qonda](/uz/qoqon/rozasea-davolash);
- [Dermatolog Farg'onada](/uz/fargona/dermatolog) va [Qo'qonda](/uz/qoqon/dermatolog).

Yuzdagi qizarish va toshmalar oddiy akne davolashidan o'tmasa, demodekozni tekshirtiring — sabab topilsa, teri tez tiniqlashadi.`;
}

function ruBody(): string {
  return `Демодекоз — воспаление кожи, связанное с чрезмерным размножением микроскопического клеща демодекса. Он проявляется покраснением лица, мелкими узелками и гнойничками, зудом и огрубением кожи. Его часто принимают за акне или аллергию и месяцами лечат неправильно. При верном диагнозе демодекоз хорошо поддаётся лечению.

## Что такое клещ демодекс?

Демодекс — невидимый глазу клещ, который живёт в волосяных фолликулах и сальных железах. Он есть у большинства взрослых и обычно не вызывает проблем. Болезнь начинается, когда клещ **размножается слишком сильно**, а кожа отвечает воспалением. К этому приводят:

- жирная кожа и активная работа сальных желёз;
- снижение иммунитета, стресс, усталость;
- длительное применение гормональных кремов;
- тяжёлая жирная косметика и несмытый макияж;
- розацеа, заболевания желудочно-кишечного тракта.

## Признаки демодекоза

- покраснение щёк, носа, лба и подбородка;
- мелкие красные узелки и гнойнички;
- зуд, жжение, особенно по вечерам;
- шероховатость кожи («как наждачная бумага»), шелушение;
- расширенные поры и жирный блеск;
- **при поражении век** — зуд и покраснение краёв век, корочки на ресницах, выпадение ресниц. В этом случае нужен и осмотр офтальмолога.

## Демодекоз, акне и розацеа

Эти заболевания похожи и часто сочетаются:

- **[акне](/ru/articles/art-akne)** — больше комедонов (чёрных точек), у подростков и молодых людей;
- **[розацеа](/ru/articles/art-rozatseya-davolash-radeski)** — стойкое покраснение и сосуды в центре лица; демодекс её усиливает;
- **демодекоз** — зуд, грубая кожа, нет эффекта от лечения акне.

Поэтому диагноз ставит дерматолог: осмотр, дерматоскопия и **соскоб** — под микроскопом определяют количество клещей.

## Как лечат демодекоз?

- **Наружные противоклещевые средства** — назначает врач, курс обычно 1–3 месяца;
- в тяжёлых случаях — препараты внутрь по назначению врача;
- дополнительное лечение для уменьшения воспаления и покраснения;
- при сочетании с розацеа — её лечение, включая аппаратные процедуры от сосудов и покраснения.

**Важно:** гормональные кремы временно «успокаивают» демодекоз, но потом усиливают болезнь. Не мажьте их самостоятельно.

## Уход дома

- Умывайтесь 2 раза в день мягким средством, вечером обязательно снимайте макияж.
- На время откажитесь от тяжёлых жирных кремов и тональных средств.
- Меняйте наволочку 2–3 раза в неделю, пользуйтесь своим полотенцем.
- Горячие напитки, острая еда, сауна и солнце усиливают покраснение — ограничьте их.
- Продолжайте лечение столько, сколько сказал врач, даже когда кожа уже очистилась.

Зимой не пересушивайте кожу лица: о мягком уходе — в [статье о зимнем уходе](/ru/articles/art-qishda-teri-parvarishi).

## Лечение демодекоза в Фергане и Коканде

В Radeski Skin Clinic [дерматолог](/ru/services/dermatologiya) осмотрит кожу лица дерматоскопом, при необходимости назначит соскоб, отличит демодекоз от акне и розацеа и составит план лечения.

- [Розацеа — коротко](/ru/conditions/rozasea) и [Акне — коротко](/ru/conditions/acne);
- [Лечение розацеа в Фергане](/ru/fargona/rozasea-davolash) и [в Коканде](/ru/qoqon/rozasea-davolash);
- [Дерматолог в Фергане](/ru/fargona/dermatolog) и [в Коканде](/ru/qoqon/dermatolog).

Если покраснение и высыпания на лице не проходят от обычного лечения акне, проверьтесь на демодекоз — когда причина найдена, кожа быстро очищается.`;
}

function enBody(): string {
  return `Demodicosis is skin inflammation linked to an overgrowth of the microscopic Demodex mite. It shows up as facial redness, small bumps and pustules, itching and rough skin. It is often mistaken for acne or allergy and treated wrongly for months. Once correctly diagnosed, it responds well to treatment.

## What is the Demodex mite?

Demodex is a mite, invisible to the eye, that lives in hair follicles and oil glands. Most adults have it, and usually it causes no trouble. Disease starts when the mite **multiplies too much** and the skin reacts with inflammation. Contributing factors:

- oily skin and active oil glands;
- lowered immunity, stress, fatigue;
- long-term use of steroid creams;
- heavy, greasy cosmetics and make-up left on overnight;
- rosacea and digestive disorders.

## Signs of demodicosis

- redness on the cheeks, nose, forehead and chin;
- small red bumps and pustules;
- itching and burning, especially in the evening;
- rough, "sandpaper" skin and flaking;
- enlarged pores and oiliness;
- **when the eyelids are affected** — itchy, red lid margins, crusts on the lashes, lash loss. An ophthalmologist should also see this.

## Demodicosis, acne and rosacea

These conditions look alike and often occur together:

- **[acne](/en/articles/art-akne)** — more comedones (blackheads), in teenagers and young adults;
- **[rosacea](/en/articles/art-rozatseya-davolash-radeski)** — persistent redness and visible vessels in the centre of the face; Demodex makes it worse;
- **demodicosis** — itching, rough skin, no response to acne treatment.

So the diagnosis is made by a dermatologist: an examination, dermoscopy and a **skin scraping**, in which the mites are counted under the microscope.

## How is demodicosis treated?

- **Topical anti-mite treatment** — prescribed by the doctor, usually for 1–3 months;
- in severe cases, oral medicines prescribed by the doctor;
- additional treatment to calm inflammation and redness;
- when rosacea is present too, its treatment, including device procedures for vessels and redness.

**Important:** steroid creams calm demodicosis for a while but then make it worse. Do not use them on your own.

## Home care

- Wash your face twice a day with a gentle cleanser and always remove make-up at night.
- Pause heavy, greasy creams and foundations for a while.
- Change your pillowcase 2–3 times a week and use your own towel.
- Hot drinks, spicy food, saunas and sun worsen redness — cut back on them.
- Keep up treatment for as long as the doctor said, even once the skin has cleared.

Do not over-dry facial skin in winter: our [winter skin care article](/en/articles/art-qishda-teri-parvarishi) covers gentle care.

## Demodicosis treatment in Fergana and Kokand

At Radeski Skin Clinic a [dermatologist](/en/services/dermatologiya) examines the facial skin with a dermatoscope, orders a scraping when needed, tells demodicosis apart from acne and rosacea and builds a treatment plan.

- [Rosacea — in brief](/en/conditions/rozasea) and [Acne — in brief](/en/conditions/acne);
- [Rosacea treatment in Fergana](/en/fargona/rozasea-davolash) and [in Kokand](/en/qoqon/rozasea-davolash);
- [Dermatologist in Fergana](/en/fargona/dermatolog) and [in Kokand](/en/qoqon/dermatolog).

If facial redness and spots do not clear with ordinary acne treatment, get checked for demodicosis — once the cause is found, the skin clears quickly.`;
}

export const DEMODICOSIS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Demodekoz: yuzda qizarish, toshma, qichishish va dag'al teri. Demodeks kanasi nima, akne va rozatseyadan farqi, qirindi tahlili, davolash va parvarish. Farg'ona va Qo'qonda dermatolog.",
    body: uzBody(),
    keyTakeaways: [
      "Demodeks kanasi ko'pchilikda bor — kasallik u ko'payib ketganda boshlanadi",
      "Belgilari: qizarish, tugunchalar, qichishish, g'adir-budur teri, qovoqlar zararlanishi",
      'Akne va rozatseyaga o\'xshaydi — tashxis qirindi tahlili bilan tasdiqlanadi',
      'Davolash 1–3 oy davom etadi va shifokor tayinlaydi',
      'Gormonli kremlar demodekozni kuchaytiradi',
    ],
    tags: ['Demodekoz', 'Demodeks', 'Yuzda qizarish', 'Rozatseya', 'Dermatolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Yuzdagi toshma akne davolashidan o'tmasa",
      "Qizarish, qichishish va achishish doimiy bo'lsa",
      "Ko'z qovoqlari qichisa, kipriklarda qobiq bo'lsa",
      "Gormonli kremdan keyin toshma kuchaygan bo'lsa",
      'Teri g\'adir-budur va po\'st tashlasa',
    ],
    faq: [
      {
        question: 'Demodekoz yuqumlimi?',
        answer:
          "Demodeks kanasi kattalarning ko'pchiligida bor, shuning uchun kasallik \"yuqish\"dan emas, kananing ko'payib ketishidan kelib chiqadi. Shunga qaramay, davolanish paytida shaxsiy sochiq va yostiqdan foydalanish tavsiya qilinadi.",
      },
      {
        question: 'Demodekozni butunlay davolash mumkinmi?',
        answer:
          "Kanani teridan butunlay yo'qotish shart emas — u normal mikroflora qismi. Davolashning maqsadi — uning sonini kamaytirish va yallig'lanishni bartaraf etish. Kurs to'liq o'tilsa va parvarishga rioya qilinsa, teri uzoq vaqt toza qoladi.",
      },
      {
        question: 'Demodekozni qanday tahlil aniqlaydi?',
        answer:
          "Teri yuzasidan qirindi yoki namuna olinib, mikroskopda kanalar soni aniqlanadi. Tahlil og'riqsiz va tez o'tadi. Natijani dermatolog ko'rik bilan birga baholaydi.",
      },
      {
        question: 'Demodekozda pardoz qilish mumkinmi?',
        answer:
          "Davolanish davrida og'ir tonal vositalar va yog'li kremlardan voz kechish yaxshi. Yengil, \"komedogen emas\" deb belgilangan vositalardan foydalanish va kechqurun pardozni albatta yuvish kerak.",
      },
      {
        question: "Farg'ona va Qo'qonda demodekozni qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog terini dermatoskop bilan tekshiradi, kerak bo'lsa qirindi tahlilini buyuradi va davolash rejasini tuzadi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Демодекоз: покраснение, высыпания, зуд и грубая кожа лица. Что такое клещ демодекс, отличие от акне и розацеа, соскоб, лечение и уход. Дерматолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Клещ демодекс есть у большинства людей — болезнь начинается при его чрезмерном размножении',
      'Признаки: покраснение, узелки, зуд, шероховатая кожа, поражение век',
      'Похож на акне и розацеа — диагноз подтверждают соскобом',
      'Лечение длится 1–3 месяца и назначается врачом',
      'Гормональные кремы усиливают демодекоз',
    ],
    tags: ['Демодекоз', 'Демодекс', 'Покраснение лица', 'Розацеа', 'Дерматолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Высыпания на лице не проходят от лечения акне',
      'Постоянные покраснение, зуд и жжение',
      'Чешутся веки, корочки на ресницах',
      'Высыпания усилились после гормонального крема',
      'Кожа шероховатая и шелушится',
    ],
    faq: [
      {
        question: 'Заразен ли демодекоз?',
        answer:
          'Клещ демодекс есть у большинства взрослых, поэтому болезнь возникает не от «заражения», а от чрезмерного размножения клеща. Тем не менее во время лечения лучше пользоваться своим полотенцем и подушкой.',
      },
      {
        question: 'Можно ли вылечить демодекоз полностью?',
        answer:
          'Полностью избавлять кожу от клеща не нужно — он часть нормальной микрофлоры. Цель лечения — уменьшить его количество и снять воспаление. Если пройти курс до конца и соблюдать уход, кожа надолго остаётся чистой.',
      },
      {
        question: 'Какой анализ выявляет демодекоз?',
        answer:
          'С поверхности кожи берут соскоб или образец и под микроскопом считают клещей. Анализ безболезненный и быстрый. Результат дерматолог оценивает вместе с осмотром.',
      },
      {
        question: 'Можно ли пользоваться косметикой при демодекозе?',
        answer:
          'На время лечения лучше отказаться от плотных тональных средств и жирных кремов. Пользуйтесь лёгкими средствами с пометкой «некомедогенно» и обязательно снимайте макияж вечером.',
      },
      {
        question: 'Где лечить демодекоз в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог осмотрит кожу дерматоскопом, при необходимости назначит соскоб и составит план лечения. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Demodicosis: facial redness, spots, itching and rough skin. What the Demodex mite is, how it differs from acne and rosacea, the scraping test, treatment and care. Dermatologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Most people carry the Demodex mite — disease starts when it overgrows',
      'Signs: redness, bumps, itching, rough skin, eyelid involvement',
      'It mimics acne and rosacea — a skin scraping confirms it',
      'Treatment lasts 1–3 months and is prescribed by a doctor',
      'Steroid creams make demodicosis worse',
    ],
    tags: ['Demodicosis', 'Demodex', 'Facial redness', 'Rosacea', 'Dermatologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Facial spots do not clear with acne treatment',
      'Constant redness, itching and burning',
      'Itchy eyelids or crusts on the lashes',
      'The rash got worse after a steroid cream',
      'The skin is rough and flaky',
    ],
    faq: [
      {
        question: 'Is demodicosis contagious?',
        answer:
          'Most adults carry the Demodex mite, so the disease comes from the mite overgrowing rather than from catching it. Even so, use your own towel and pillow during treatment.',
      },
      {
        question: 'Can demodicosis be cured completely?',
        answer:
          'There is no need to clear the mite entirely — it is part of the normal skin flora. Treatment aims to reduce its numbers and calm the inflammation. Finish the course and keep up the care, and the skin stays clear for a long time.',
      },
      {
        question: 'Which test detects demodicosis?',
        answer:
          'A scraping or sample is taken from the skin surface and the mites are counted under a microscope. It is quick and painless. The dermatologist reads the result together with the examination.',
      },
      {
        question: 'Can I wear make-up with demodicosis?',
        answer:
          'During treatment it is better to avoid heavy foundations and greasy creams. Use light products labelled "non-comedogenic" and always remove make-up at night.',
      },
      {
        question: 'Where can I get demodicosis treated in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist examines the skin with a dermatoscope, orders a scraping when needed and builds a treatment plan. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const DEMODICOSIS_ARTICLE: Article = {
  id: 'art-demodekoz',
  slug: 'demodekoz',
  title: {
    uz: "Demodekoz: yuzdagi qizarish va toshma sababi — belgilari, tahlil va davolash",
    ru: 'Демодекоз: покраснение и высыпания на лице — признаки, анализ и лечение',
    en: 'Demodicosis: Facial Redness and Spots — Signs, Testing and Treatment',
  },
  summary: {
    uz: DEMODICOSIS_ARTICLE_CATALOG.uz.summary,
    ru: DEMODICOSIS_ARTICLE_CATALOG.ru.summary,
    en: DEMODICOSIS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: DEMODICOSIS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: DEMODICOSIS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: DEMODICOSIS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: "Turg'unov Shohruz Ilxomjon o'g'li",
    ru: 'Тургунов Шохруз Илхомжон угли',
    en: 'Dr. Shohruz Ilxomjon ugli Turgunov',
  },
  date: '2026-11-05',
  image: '/articles/demodekoz-cover.jpg',
  images: {
    uz: '/articles/demodekoz-cover.jpg',
    ru: '/articles/demodekoz-cover.jpg',
    en: '/articles/demodekoz-cover.jpg',
  },
  views: 0,
};
