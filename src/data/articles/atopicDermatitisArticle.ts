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
  return `## Atopik dermatit nima?

Atopik dermatit — terining himoya to'sig'i buziladigan surunkali yallig'lanish kasalligi. Teri quruqroq va sezgirroq bo'lib qoladi, namlikni tezroq yo'qotadi va tashqi ta'sirlarga kuchliroq javob beradi.

Kasallik **yuqumli emas**. Bolalikda yoki kattalar davrida birinchi marta paydo bo'lishi mumkin. Ko'pincha to'lqinsimon kechadi: kuchayish davrlari remissiya bilan almashinadi.

## Asosiy alomatlar

- terining quruqligi va qavatlanishi
- kuchli yoki o'rtacha qichishish
- qizarish va yallig'lanish
- toshmalar
- yoriqlar va qatqaloqlar
- uzoq davom etganda terining qalinlashishi
- terining oshgan sezgirligi

**Bolalarda** toshmalar ko'pincha yuz, yonoq, bosh terisi va oyoq-qo'llarda paydo bo'ladi.

**Kattalarda** — qo'l kaftlari, bo'yin, tirsak va tiza burmalari, yuzda. Qichishish kechqurun va tunda kuchayib, uyquga xalaqit berishi mumkin.

## Sabablar va kuchaytiruvchi omillar

Asosiy omillar: irsiy moyillik, immun tizimi xususiyatlari, teri to'sig'ining buzilishi.

Kuchayishni quyidagilar keltirib chiqarishi mumkin:

- quruq yoki sovuq havo
- issiqlik va terlash
- stress
- ba'zi kosmetika va agressiv yuvish vositalari
- jun va ba'zi matolar
- issiq suv
- infeksiyalar

## Bolalar va kattalarda farqlar

**Bolalarda** teri ayniqsa sezgir. O'z-o'zini davolash mumkin emas — davolash sxemasini faqat dermatolog tanlaydi.

**Kattalarda** doimiy quruqlik, qichishish va davriy kuchayishlar ko'p uchraydi. Triggerlarni aniqlash va uzoq muddatli nazorat strategiyasi muhim.

## Diagnostika

Dermatolog ko'rik, toshmalar va kasallik tarixini baholash asosida tashxis qo'yadi. Zarur bo'lganda qo'shimcha tekshiruvlar buyuriladi.

## Zamonaviy davolash yondashuvi

Davolash bemorning yoshi, og'irlik darajasi va zararlangan maydonga bog'liq. Asosiy maqsad — **teri to'sig'ini tiklash**:

- namlantiruvchi va emolient preparatlar
- yallig'lanish va qichishishni kamaytiruvchi mahalliy terapiya
- og'ir holatlarda tizimli yoki biologik preparatlar (shifokor ko'rsatmasi bilan)
- triggerlarni kamaytirish va uy parvarishi rejasi
- zarur bo'lganda fototerapiya (NB-UVB) kursi

Radeski Skin Clinic da (Farg'ona va Qo'qon) atopik dermatit kompleks yondashuv bilan boshqariladi: diagnostika, individual reja, kuzatuv va ota-onalar uchun yo'riqnoma (bolalar uchun).

## Uy parvarishi — nima muhim?

- qisqa, iliq (issiq emas) du shower
- pH-neytral, xushbo'y emas yuvish vositalari
- teri namligini yo'qotmasdan quritish va darhol emolient
- qichishish paytida tirnashdan saqlash
- kiyimda yumshoq mato, teri ishqalanishini kamaytirish
- stress va uyqu rejimini muvozanatlash

## Xulosa

Atopik dermatit surunkali kasallik, lekin to'g'ri tanlangan davolash yallig'lanish va qichishishni kamaytirishga, teri to'sig'ini tiklashga va kuchayishlar chastotasini sezilarli darajada pasaytirishga yordam beradi. Shifokor bilan muntazam aloqada bo'lish — eng muhim qadam.`;
}

function ruBody(): string {
  return `## Что такое атопический дерматит?

Атопический дерматит — хроническое воспалительное заболевание кожи с нарушением защитного барьера. Кожа становится суше и чувствительнее, быстрее теряет влагу и сильнее реагирует на внешние раздражители.

Заболевание **не заразно**. Может впервые проявиться в детстве или во взрослом возрасте. Часто течёт волнообразно: периоды обострения сменяются ремиссией.

## Основные симптомы

- сухость и шелушение кожи
- выраженный или умеренный зуд
- покраснение и воспаление
- высыпания
- трещины и корочки
- утолщение кожи при длительном течении
- повышенная чувствительность

**У детей** высыпания часто на лице, щёках, коже головы и конечностях.

**У взрослых** — на кистях, шее, сгибах локтей и колен, лице. Зуд усиливается вечером и ночью, нарушая сон.

## Причины и провоцирующие факторы

Генетическая предрасположенность, особенности иммунной системы, нарушение барьерной функции кожи.

Обострения могут вызывать:

- сухой или холодный воздух
- жара и пот
- стресс
- некоторые косметические средства и агрессивные моющие средства
- шерсть и определённые ткани
- горячая вода
- инфекции

## Диагностика и лечение

Диагноз ставит дерматолог на основании осмотра, характера высыпаний и анамнеза. При необходимости назначаются дополнительные исследования.

Терапия зависит от возраста, тяжести и локализации. Основа — **восстановление кожного барьера**: эмоленты, местная противовоспалительная терапия, при тяжёлых формах — системные или биологические препараты по назначению врача, контроль триггеров, при необходимости курс NB-UVB фототерапии.

В Radeski Skin Clinic (Фергана и Коканд) атопический дерматит ведётся комплексно: диагностика, индивидуальный план, наблюдение и рекомендации родителям (для детей).`;
}

function enBody(): string {
  return `## What is atopic dermatitis?

Atopic dermatitis is a chronic inflammatory skin condition with an impaired protective barrier. Skin becomes drier and more sensitive, loses moisture faster, and reacts more strongly to external irritants.

It is **not contagious**. It can first appear in childhood or adulthood and often follows a wave-like course — flare-ups alternating with remission.

## Main symptoms

- dry, flaking skin
- moderate to severe itching
- redness and inflammation
- rashes
- cracks and crusting
- skin thickening with prolonged course
- increased sensitivity

**In children**, rashes often appear on the face, cheeks, scalp, and limbs.

**In adults**, they commonly affect the hands, neck, elbow and knee creases, and face. Itching tends to worsen in the evening and at night.

## Causes and triggers

Genetic predisposition, immune system factors, and a compromised skin barrier.

Flare-ups can be triggered by dry/cold air, heat, sweating, stress, certain cosmetics, harsh cleansers, wool and some fabrics, hot water, and infections.

## Diagnosis and modern treatment

Diagnosis is made by a dermatologist based on examination, rash pattern, and history. Additional tests may be ordered if needed.

Treatment depends on age, severity, and affected area. The foundation is **restoring the skin barrier** — emollients, topical anti-inflammatory therapy, systemic or biologic options when indicated, trigger control, and NB-UVB phototherapy when appropriate.

At Radeski Skin Clinic (Fergana and Kokand), atopic dermatitis is managed comprehensively: diagnosis, an individual plan, follow-up, and parent guidance for children.`;
}

export const ATOPIC_DERMATITIS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Atopik dermatit — teri quruqligi, qichishish va toshmalar bilan kechadigan surunkali yallig'lanish. Bolalar va kattalardagi sabab, alomat, diagnostika va zamonaviy davolash yondashuvlari.",
    body: uzBody(),
    keyTakeaways: [
      'Atopik dermatit surunkali kasallik — remissiya va kuchayishlar almashinadi',
      'Asosiy belgilar: quruqlik, qichishish, qizarish, toshmalar',
      'Teri to\'sig\'ini tiklash — davolashning markaziy qismi',
      'Triggerlarni aniqlash uzoq muddatli nazorat uchun muhim',
      'Bolalarda davolash faqat dermatolog rejasiga muvofiq olib boriladi',
    ],
    tags: [
      'Atopik dermatit',
      'Ekzema',
      'Teri quruqligi',
      'Bolalar dermatologiyasi',
      'Fototerapiya',
      'Farg\'ona',
      'Qoqon',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Qichishish uyqu va kundalik hayotni buzsa',
      'Toshmalar tez tarqalsa yoki nam chiqarish paydo bo\'lsa',
      'Infeksiya belgilari (issiqlik, yiring) bo\'lsa',
      'Uy parvarishi va krem yordam bermasa',
      'Bolada belgilar kuchayib borsa',
    ],
    faq: [
      {
        question: 'Atopik dermatit yuqadimi?',
        answer:
          'Yo\'q. Bu yuqumli kasallik emas — oilaviy moyillik va teri to\'sig\'i buzilishi bilan bog\'liq surunkali holat.',
      },
      {
        question: 'Butunlay davolanadimi?',
        answer:
          'Ko\'p bemorlarda belgilar uzoq muddat kamayadi va remissiya saqlanadi, lekin surunkali kasallikni doimiy nazorat qilish kerak bo\'ladi.',
      },
      {
        question: 'Bolalarda qanday boshqariladi?',
        answer:
          'Yumshoq emolientlar, triggerlarni kamaytirish va shifokor belgilagan mahalliy terapiya. Ota-onalar uchun aniq parvarish yo\'riqnomasi beriladi.',
      },
      {
        question: 'Fototerapiya qachon kerak bo\'ladi?',
        answer:
          'Og\'ir yoki keng tarqalgan holatlarda dermatolog NB-UVB kursini ko\'rib chiqishi mumkin — individual baholashdan keyin.',
      },
    ],
  },
  ru: {
    summary:
      'Атопический дерматит — хроническое воспалительное заболевание кожи с сухостью, зудом и высыпаниями. Симптомы, причины, диагностика и современные подходы к лечению.',
    body: ruBody(),
    keyTakeaways: [
      'Атопический дерматит хронический — обострения сменяются ремиссией',
      'Основные симптомы: сухость, зуд, покраснение, высыпания',
      'Восстановление кожного барьера — центр терапии',
      'Важно выявлять триггеры для долгосрочного контроля',
      'У детей лечение только по плану дерматолога',
    ],
    tags: [
      'Атопический дерматит',
      'Экзема',
      'Сухость кожи',
      'Детская дерматология',
      'Фототерапия',
      'Фергана',
      'Коканд',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Зуд мешает сну и повседневной жизни',
      'Высыпания быстро распространяются или мокнут',
      'Признаки инфекции (нагрев, гной)',
      'Домашний уход не помогает',
      'У ребёнка симптомы усиливаются',
    ],
    faq: [
      {
        question: 'Заразен ли атопический дерматит?',
        answer:
          'Нет. Это не инфекция, а хроническое состояние, связанное с наследственностью и нарушением барьера кожи.',
      },
      {
        question: 'Можно ли вылечить полностью?',
        answer:
          'У многих пациентов симптомы длительно уменьшаются, но заболевание требует постоянного контроля.',
      },
      {
        question: 'Как лечат детей?',
        answer:
          'Мягкие эмоленты, снижение триггеров и местная терапия по назначению врача. Родителям даются чёткие рекомендации по уходу.',
      },
      {
        question: 'Когда нужна фототерапия?',
        answer:
          'При тяжёлых или распространённых формах врач может рассмотреть курс NB-UVB после индивидуальной оценки.',
      },
    ],
  },
  en: {
    summary:
      'Atopic dermatitis is a chronic inflammatory skin condition marked by dryness, itching, and rashes. Learn about causes, symptoms, diagnosis, and modern treatment approaches.',
    body: enBody(),
    keyTakeaways: [
      'Atopic dermatitis is chronic — flares alternate with remission',
      'Main signs: dryness, itching, redness, rashes',
      'Restoring the skin barrier is central to therapy',
      'Identifying triggers supports long-term control',
      'In children, treatment follows a dermatologist-led plan only',
    ],
    tags: [
      'Atopic dermatitis',
      'Eczema',
      'Dry skin',
      'Pediatric dermatology',
      'Phototherapy',
      'Fergana',
      'Kokand',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Itching disrupts sleep or daily life',
      'Rashes spread quickly or weep',
      'Signs of infection (warmth, pus)',
      'Home care is not helping',
      'A child\'s symptoms are worsening',
    ],
    faq: [
      {
        question: 'Is atopic dermatitis contagious?',
        answer:
          'No. It is not an infection but a chronic condition linked to genetics and a weakened skin barrier.',
      },
      {
        question: 'Can it be cured completely?',
        answer:
          'Many patients achieve long-lasting improvement, but ongoing management is usually needed.',
      },
      {
        question: 'How is it managed in children?',
        answer:
          'Gentle emollients, trigger reduction, and topical therapy as prescribed. Parents receive clear care guidance.',
      },
      {
        question: 'When is phototherapy considered?',
        answer:
          'For severe or widespread disease, a dermatologist may consider an NB-UVB course after individual assessment.',
      },
    ],
  },
};

export const ATOPIC_DERMATITIS_ARTICLE: Article = {
  id: 'art-atopic-dermatitis',
  slug: 'blog-1786978734429',
  title: {
    uz: 'Atopik dermatit: alomatlari, sabablari va zamonaviy davolash',
    ru: 'Атопический дерматит: симптомы, причины и современное лечение',
    en: 'Atopic Dermatitis: Symptoms, Causes, and Modern Treatment',
  },
  summary: {
    uz: ATOPIC_DERMATITIS_ARTICLE_CATALOG.uz.summary,
    ru: ATOPIC_DERMATITIS_ARTICLE_CATALOG.ru.summary,
    en: ATOPIC_DERMATITIS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: ATOPIC_DERMATITIS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: ATOPIC_DERMATITIS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: ATOPIC_DERMATITIS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov D.D.',
    ru: 'Ашуров Д.Д.',
    en: 'Dr. Ashurov',
  },
  date: '2026-08-17',
  image: '/articles/atopic-dermatitis-cover.png',
  images: {
    uz: '/articles/atopic-dermatitis-cover.png',
    ru: '/articles/atopic-dermatitis-cover.png',
    en: '/articles/atopic-dermatitis-cover.png',
  },
  views: 0,
};
