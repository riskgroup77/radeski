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
 * Perioral dermatitis — the rash around the mouth that steroid creams make worse. Points: what
 * it looks like (sparing the lip border), the triggers (steroid creams, heavy creams), why it
 * flares when the steroid is stopped and why that should be done with a doctor, "zero therapy",
 * and the look-alikes (acne, rosacea, demodicosis, seborrheic dermatitis).
 */

function uzBody(): string {
  return `Perioral dermatit — og'iz atrofida, ba'zan burun-lab burmalari va ko'z atrofida paydo bo'ladigan mayda qizil toshma. U ko'pincha 20–45 yoshdagi ayollarda uchraydi va akne yoki allergiya deb adashtiriladi. Uning muhim xususiyati: gormonli kremlar toshmani vaqtincha "tinchitadi", lekin keyin uni kuchaytiradi. To'g'ri yondashuv bilan perioral dermatit yaxshi davolanadi.

## Perioral dermatit qanday ko'rinadi?

- og'iz atrofida, iyak va burun-lab burmalarida mayda qizil tugunchalar, ba'zan yiringchalar;
- **lab chetida ingichka toza teri chizig'i** qoladi — bu xarakterli belgi;
- teri quruq, po'st tashlaydi;
- qichishishdan ko'ra **achishish va tortishish** ko'proq;
- ba'zan toshma ko'z va burun atrofiga tarqaladi.

## Nima qo'zg'atadi?

- **Gormonli kremlar** — eng ko'p uchraydigan sabab: yuzga uzoq surtilgan gormonli krem yoki burun spreylari;
- **og'ir, yog'li kremlar** va ko'p qatlamli kosmetika;
- tonal vositalar, pudra;
- gormonal o'zgarishlar, ba'zi kontratseptivlar;
- ba'zi odamlarda — ftorli tish pastasi va lab bo'yog'i.

## Boshqa kasalliklardan farqi

Perioral dermatitga o'xshash kasalliklar:

- **[akne](/uz/articles/art-akne)** — komedonlar (qora nuqtalar) bilan, toshma yuzning boshqa joylarida ham;
- **[rozatseya](/uz/articles/art-rozatseya-davolash-radeski)** — yuz markazida doimiy qizarish va tomirlar;
- **[demodekoz](/uz/articles/art-demodekoz)** — demodeks kanasining ko'payishi, qirindi tahlilida aniqlanadi;
- **[seboreyali dermatit](/uz/articles/art-seboreyali-dermatit)** — yog'li po'stlar, qosh va bosh terisi ham zararlanadi;
- **kontakt dermatit** — kosmetika yoki tish pastasiga reaksiya.

Tashxisni dermatolog ko'rik va dermatoskopiya bilan qo'yadi, kerak bo'lsa qirindi tahlili o'tkaziladi.

## Qanday davolanadi?

- **Gormonli kremni to'xtatish** — buni shifokor bilan birga qilish kerak: to'satdan to'xtatilganda toshma 1–2 hafta kuchayishi mumkin. Bu davolash ish bermayotgani emas — shifokor bu davrni yengillashtiradigan reja tuzadi.
- **"Nol terapiya"** — vaqtincha barcha krem, tonal vosita va skrablardan voz kechish, yuzni faqat iliq suv yoki juda yumshoq vosita bilan yuvish.
- **Davolovchi vositalar** — shifokor tayinlaydigan tashqi vositalar, og'irroq holatlarda — ichiladigan dorilar. Kurs bir necha hafta davom etadi.

Toshma tozalangandan keyin kosmetikani asta-sekin, oddiy va yengil vositalardan boshlab qaytaring.

## Qaytmasligi uchun

- Yuzga gormonli kremni faqat shifokor tayinlaganda va qisqa muddat surting.
- Kamroq, lekin yengilroq parvarish vositalarini tanlang.
- Pardozni har kuni kechqurun yumshoq vosita bilan tozalang.
- Tish pastasidan keyin og'iz atrofini suv bilan yuving.
- Qishda ham yuzni ortiqcha yog'li kremlar bilan "himoya" qilmang.

## Farg'ona va Qo'qonda perioral dermatitni davolash

Radeski Skin Clinic'da dermatolog-kosmetolog toshmani ko'zdan kechiradi, perioral dermatitni akne, rozatseya va demodekozdan ajratadi, gormonli kremni xavfsiz to'xtatish va davolash rejasini tuzadi.

- [Yuz qizarishi — qisqacha](/uz/conditions/yuz-qizarishi) va [Rozatseya — qisqacha](/uz/conditions/rozasea);
- [Rozatseyani davolash Farg'onada](/uz/fargona/rozasea-davolash) va [Qo'qonda](/uz/qoqon/rozasea-davolash);
- [Dermatolog Farg'onada](/uz/fargona/dermatolog) va [Qo'qonda](/uz/qoqon/dermatolog).

Og'iz atrofidagi toshmaga "kuchliroq" krem tanlamang: ko'pincha unga kamroq krem va to'g'ri davolash kerak.`;
}

function ruBody(): string {
  return `Периоральный дерматит — мелкая красная сыпь вокруг рта, иногда в носогубных складках и вокруг глаз. Чаще всего он бывает у женщин 20–45 лет, и его путают с акне или аллергией. Важная особенность: гормональные кремы на время «успокаивают» сыпь, но потом усиливают её. При правильном подходе периоральный дерматит хорошо лечится.

## Как выглядит периоральный дерматит?

- мелкие красные узелки, иногда гнойнички вокруг рта, на подбородке и в носогубных складках;
- **у края губ остаётся тонкая полоска чистой кожи** — характерный признак;
- кожа сухая, шелушится;
- больше **жжение и стянутость**, чем зуд;
- иногда сыпь переходит на кожу вокруг глаз и носа.

## Что его провоцирует?

- **Гормональные кремы** — самая частая причина: гормональный крем, который долго мазали на лицо, или назальные спреи;
- **тяжёлые жирные кремы** и многослойная косметика;
- тональные средства, пудра;
- гормональные изменения, некоторые контрацептивы;
- у некоторых людей — фторсодержащая зубная паста и помада.

## Чем отличается от других заболеваний

На периоральный дерматит похожи:

- **[акне](/ru/articles/art-akne)** — с комедонами (чёрными точками), сыпь и на других участках лица;
- **[розацеа](/ru/articles/art-rozatseya-davolash-radeski)** — стойкое покраснение и сосуды в центре лица;
- **[демодекоз](/ru/articles/art-demodekoz)** — размножение клеща демодекса, выявляется соскобом;
- **[себорейный дерматит](/ru/articles/art-seboreyali-dermatit)** — жирные чешуйки, поражаются брови и кожа головы;
- **контактный дерматит** — реакция на косметику или зубную пасту.

Диагноз дерматолог ставит при осмотре и дерматоскопии, при необходимости проводят соскоб.

## Как лечат?

- **Отмена гормонального крема** — это нужно делать вместе с врачом: при резкой отмене сыпь может усилиться на 1–2 недели. Это не значит, что лечение не помогает, — врач составит план, который облегчит этот период.
- **«Нулевая терапия»** — на время отказаться от всех кремов, тональных средств и скрабов, умываться только тёплой водой или очень мягким средством.
- **Лечебные средства** — наружные препараты по назначению врача, в более тяжёлых случаях — таблетки. Курс длится несколько недель.

Когда кожа очистится, возвращайте косметику постепенно, начиная с простых лёгких средств.

## Чтобы не вернулся

- Мажьте лицо гормональным кремом только по назначению врача и коротким курсом.
- Выбирайте меньше средств, но более лёгкие.
- Каждый вечер снимайте макияж мягким средством.
- После чистки зубов умывайте кожу вокруг рта водой.
- Не «защищайте» лицо зимой слишком жирными кремами.

## Лечение периорального дерматита в Фергане и Коканде

В Radeski Skin Clinic дерматолог-косметолог осмотрит сыпь, отличит периоральный дерматит от акне, розацеа и демодекоза, составит план безопасной отмены гормонального крема и лечения.

- [Покраснение лица — коротко](/ru/conditions/yuz-qizarishi) и [Розацеа — коротко](/ru/conditions/rozasea);
- [Лечение розацеа в Фергане](/ru/fargona/rozasea-davolash) и [в Коканде](/ru/qoqon/rozasea-davolash);
- [Дерматолог в Фергане](/ru/fargona/dermatolog) и [в Коканде](/ru/qoqon/dermatolog).

Не подбирайте для сыпи вокруг рта «крем посильнее»: чаще всего ей нужно меньше кремов и правильное лечение.`;
}

function enBody(): string {
  return `Perioral dermatitis is a rash of small red bumps around the mouth, sometimes in the nose-to-mouth folds and around the eyes. It is most common in women aged 20–45 and is often mistaken for acne or allergy. Its key feature: steroid creams calm it for a while but then make it worse. With the right approach it responds well to treatment.

## What does perioral dermatitis look like?

- small red bumps, sometimes pustules, around the mouth, on the chin and in the nose-to-mouth folds;
- **a thin strip of clear skin along the lip border** — a characteristic sign;
- dry, flaky skin;
- more **burning and tightness** than itching;
- sometimes the rash spreads around the eyes and nose.

## What triggers it?

- **Steroid creams** — the most common cause: a steroid cream used on the face for a long time, or nasal sprays;
- **heavy, greasy creams** and layered cosmetics;
- foundation and powder;
- hormonal changes and some contraceptives;
- in some people, fluoride toothpaste and lipstick.

## How it differs from other conditions

Look-alikes include:

- **[acne](/en/articles/art-akne)** — with comedones (blackheads), and spots elsewhere on the face;
- **[rosacea](/en/articles/art-rozatseya-davolash-radeski)** — persistent redness and visible vessels in the centre of the face;
- **[demodicosis](/en/articles/art-demodekoz)** — an overgrowth of Demodex mites, found on a skin scraping;
- **[seborrheic dermatitis](/en/articles/art-seboreyali-dermatit)** — greasy flakes, also on the eyebrows and scalp;
- **contact dermatitis** — a reaction to cosmetics or toothpaste.

A dermatologist makes the diagnosis with an examination and dermoscopy, and a scraping when needed.

## How is it treated?

- **Stopping the steroid cream** — do this together with your doctor: stopping suddenly can make the rash flare for 1–2 weeks. That does not mean treatment has failed — the doctor will plan how to ease this period.
- **"Zero therapy"** — pausing all creams, foundations and scrubs and washing the face only with lukewarm water or a very gentle cleanser.
- **Treatment** — topical products prescribed by the doctor and, in more severe cases, tablets. The course lasts several weeks.

Once the skin clears, reintroduce cosmetics gradually, starting with simple, light products.

## Keeping it from coming back

- Use steroid cream on the face only when a doctor prescribes it, and only briefly.
- Use fewer, lighter products.
- Remove make-up every evening with a gentle cleanser.
- Rinse the skin around your mouth with water after brushing your teeth.
- Do not "protect" your face with very greasy creams in winter.

## Perioral dermatitis treatment in Fergana and Kokand

At Radeski Skin Clinic a dermatologist-cosmetologist examines the rash, tells perioral dermatitis apart from acne, rosacea and demodicosis, and plans how to stop a steroid cream safely and treat the rash.

- [Facial redness — in brief](/en/conditions/yuz-qizarishi) and [Rosacea — in brief](/en/conditions/rozasea);
- [Rosacea treatment in Fergana](/en/fargona/rozasea-davolash) and [in Kokand](/en/qoqon/rozasea-davolash);
- [Dermatologist in Fergana](/en/fargona/dermatolog) and [in Kokand](/en/qoqon/dermatolog).

Do not reach for a "stronger" cream for a rash around the mouth: more often it needs fewer creams and the right treatment.`;
}

export const PERIORAL_DERMATITIS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Perioral dermatit: og'iz atrofidagi mayda qizil toshma. Belgilari, gormonli kremlar va og'ir kosmetika ta'siri, akne va rozatseyadan farqi, \"nol terapiya\" va davolash. Farg'ona va Qo'qonda dermatolog.",
    body: uzBody(),
    keyTakeaways: [
      "Perioral dermatit — og'iz atrofidagi mayda qizil toshma, lab chetida toza chiziq qoladi",
      "Eng ko'p sabab — yuzga uzoq surtilgan gormonli kremlar",
      "Gormonli kremni shifokor bilan to'xtatish kerak — toshma vaqtincha kuchayishi mumkin",
      '"Nol terapiya" va shifokor tayinlagan davolash bir necha haftada natija beradi',
      "Akne, rozatseya va demodekozga o'xshaydi — tashxisni dermatolog qo'yadi",
    ],
    tags: ['Perioral dermatit', "Og'iz atrofidagi toshma", 'Gormonli krem', 'Rozatseya', 'Kosmetolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Og'iz atrofida 2 haftadan ko'p toshma bo'lsa",
      "Gormonli kremni to'xtatganda toshma kuchaysa",
      "Toshma ko'z va burun atrofiga tarqalsa",
      "Akne kremlari yordam bermasa",
      "Achishish va tortishish kundalik hayotga xalaqit bersa",
    ],
    faq: [
      {
        question: 'Perioral dermatit yuqumlimi?',
        answer:
          "Yo'q. U teri reaksiyasi bo'lib, boshqa odamga yuqmaydi. Asosiy rolni gormonli kremlar, og'ir kosmetika va terining o'z xususiyatlari o'ynaydi.",
      },
      {
        question: 'Perioral dermatit qancha davolanadi?',
        answer:
          "Odatda kurs bir necha haftadan 2–3 oygacha davom etadi. Gormonli krem uzoq ishlatilgan bo'lsa, tiklanish ko'proq vaqt oladi. Davolashni muddatidan oldin to'xtatmaslik muhim.",
      },
      {
        question: 'Davolanish paytida pardoz qilish mumkinmi?',
        answer:
          "Yaxshisi yo'q: tonal vosita va pudra toshmani ushlab turadi. Teri tozalangandan keyin kosmetikani asta-sekin, yengil vositalardan boshlab qaytaring.",
      },
      {
        question: 'Gormonli kremni nega to\'satdan to\'xtatish mumkin emas?',
        answer:
          "To'satdan to'xtatilganda toshma 1–2 hafta kuchayishi mumkin, va ko'pchilik yana kremga qaytadi — bu kasallikni uzaytiradi. Shifokor bu davrni yengillashtiradigan reja tuzadi.",
      },
      {
        question: "Farg'ona va Qo'qonda perioral dermatitni qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog-kosmetolog toshmani ko'zdan kechiradi va davolash rejasini tuzadi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Периоральный дерматит: мелкая красная сыпь вокруг рта. Признаки, роль гормональных кремов и тяжёлой косметики, отличие от акне и розацеа, «нулевая терапия» и лечение. Дерматолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Периоральный дерматит — мелкая красная сыпь вокруг рта, у края губ остаётся чистая полоска',
      'Самая частая причина — гормональные кремы, которые долго мазали на лицо',
      'Отменять гормональный крем нужно с врачом — сыпь может временно усилиться',
      '«Нулевая терапия» и лечение по назначению врача дают результат за несколько недель',
      'Похож на акне, розацеа и демодекоз — диагноз ставит дерматолог',
    ],
    tags: ['Периоральный дерматит', 'Сыпь вокруг рта', 'Гормональный крем', 'Розацеа', 'Косметолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Сыпь вокруг рта держится дольше 2 недель',
      'Сыпь усилилась после отмены гормонального крема',
      'Сыпь перешла на кожу вокруг глаз и носа',
      'Кремы от акне не помогают',
      'Жжение и стянутость мешают в повседневной жизни',
    ],
    faq: [
      {
        question: 'Заразен ли периоральный дерматит?',
        answer:
          'Нет. Это реакция кожи, другим людям она не передаётся. Главную роль играют гормональные кремы, тяжёлая косметика и особенности самой кожи.',
      },
      {
        question: 'Сколько лечится периоральный дерматит?',
        answer:
          'Обычно курс длится от нескольких недель до 2–3 месяцев. Если гормональный крем применяли долго, восстановление занимает больше времени. Важно не прекращать лечение раньше срока.',
      },
      {
        question: 'Можно ли краситься во время лечения?',
        answer:
          'Лучше нет: тональные средства и пудра поддерживают сыпь. Когда кожа очистится, возвращайте косметику постепенно, начиная с лёгких средств.',
      },
      {
        question: 'Почему нельзя резко отменять гормональный крем?',
        answer:
          'При резкой отмене сыпь может усилиться на 1–2 недели, и многие снова возвращаются к крему — это затягивает болезнь. Врач составит план, который облегчит этот период.',
      },
      {
        question: 'Где лечить периоральный дерматит в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог-косметолог осмотрит сыпь и составит план лечения. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Perioral dermatitis: a rash of small red bumps around the mouth. Signs, the role of steroid creams and heavy cosmetics, how it differs from acne and rosacea, "zero therapy" and treatment. Dermatologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Perioral dermatitis is a rash of small red bumps around the mouth that spares the lip border',
      'The most common cause is steroid cream used on the face for a long time',
      'Stop a steroid cream together with your doctor — the rash may flare for a while',
      '"Zero therapy" plus prescribed treatment clears it within weeks',
      'It resembles acne, rosacea and demodicosis — a dermatologist makes the diagnosis',
    ],
    tags: ['Perioral dermatitis', 'Rash around the mouth', 'Steroid cream', 'Rosacea', 'Cosmetologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A rash around the mouth lasts more than 2 weeks',
      'The rash got worse after stopping a steroid cream',
      'It spreads around the eyes and nose',
      'Acne creams do not help',
      'Burning and tightness affect daily life',
    ],
    faq: [
      {
        question: 'Is perioral dermatitis contagious?',
        answer:
          'No. It is a skin reaction and does not spread to other people. Steroid creams, heavy cosmetics and the skin itself play the main roles.',
      },
      {
        question: 'How long does treatment take?',
        answer:
          'Usually from a few weeks to 2–3 months. If a steroid cream was used for a long time, recovery takes longer. It is important not to stop treatment early.',
      },
      {
        question: 'Can I wear make-up during treatment?',
        answer:
          'Better not: foundation and powder keep the rash going. Once the skin clears, reintroduce cosmetics gradually, starting with light products.',
      },
      {
        question: 'Why should a steroid cream not be stopped suddenly?',
        answer:
          'Stopping suddenly can make the rash flare for 1–2 weeks, and many people go back to the cream — which prolongs the condition. The doctor plans how to ease this period.',
      },
      {
        question: 'Where can I get perioral dermatitis treated in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist-cosmetologist examines the rash and builds a treatment plan. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const PERIORAL_DERMATITIS_ARTICLE: Article = {
  id: 'art-perioral-dermatit',
  slug: 'perioral-dermatit',
  title: {
    uz: "Perioral dermatit: og'iz atrofidagi toshma — sabablari va to'g'ri davolash",
    ru: 'Периоральный дерматит: сыпь вокруг рта — причины и правильное лечение',
    en: 'Perioral Dermatitis: The Rash Around the Mouth — Causes and the Right Treatment',
  },
  summary: {
    uz: PERIORAL_DERMATITIS_ARTICLE_CATALOG.uz.summary,
    ru: PERIORAL_DERMATITIS_ARTICLE_CATALOG.ru.summary,
    en: PERIORAL_DERMATITIS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: PERIORAL_DERMATITIS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: PERIORAL_DERMATITIS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: PERIORAL_DERMATITIS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Kamolova Barno',
    ru: 'Камолова Барно',
    en: 'Dr. Barno Kamolova',
  },
  date: '2026-11-14',
  image: '/articles/perioral-dermatit-cover.jpg',
  images: {
    uz: '/articles/perioral-dermatit-cover.jpg',
    ru: '/articles/perioral-dermatit-cover.jpg',
    en: '/articles/perioral-dermatit-cover.jpg',
  },
  views: 0,
};
