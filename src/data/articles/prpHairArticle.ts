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
  return `## Soch uchun plazmotorapiya nima?

Plazmotorapiya (PRP — Platelet Rich Plasma) — bemorning o‘z qonidan ajratilgan, trombotsitlarga boy plazma bilan soch ildizlarini stimullash usuli. Muolaja vaqtida ozgina qon olinadi, maxsus sentrifugada o‘sish omillariga boy plazma ajratiladi va bosh terisiga mikroinyeksiya orqali kiritiladi.

O‘sish omillari soch follikulalarini faollashtiradi, mikrotsirkulyatsiyani yaxshilaydi va to‘qimalarning tabiiy tiklanishini qo‘llab-quvvatlaydi. Bu tashqi «kimyoviy» dori emas — organizmning o‘z biologik resursidan foydalaniladi.

Radeski Skin Clinic’da muolaja trixolog ko‘rigidan keyin o‘tkaziladi: avval soch to‘kilishi sababi aniqlanadi, keyin individual davolash rejasi tuziladi.

## Kimlarga mos keladi?

Shifokor tavsiyasiga ko‘ra plazmotorapiya quyidagi holatlarda ko‘rib chiqilishi mumkin:

- erkak va ayollarda androgenetik alopetsiya;
- diffuz soch to‘kilishi;
- mavsumiy to‘kilish;
- homiladorlik va emizishdan keyingi soch to‘kilishi;
- stress yoki o‘tkazilgan kasalliklardan keyingi to‘kilish;
- soch o‘sishining sekinlashishi;
- sochning yupqalanishi va zichlikning kamayishi;
- quruqlik va mo‘rtlik;
- bo‘yash va boshqa agressiv ta’sirlardan keyin tiklanish.

Ba’zan plazmotorapiya bosh terisi kasalliklarini kompleks davolash rejasiga ham qo‘shiladi — bu faqat shifokor qarori bilan.

## Qachon trixologga murojaat qilish kerak?

Har kuni ko‘p soch to‘kilsa, ajratma kengayib borsa, yupqalanish zonalarini sezsangiz yoki soch sezilarli darajada noziklashgan bo‘lsa, tashrifni kechiktirmang. Qancha erta davolash boshlangansa, faol follikulalarni saqlab qolish ehtimoli shuncha yuqori.

## Qanday natija kutish mumkin?

Kursdan so‘ng ko‘p bemorlar quyidagilarni sezadi:

- soch to‘kilishining kamayishi;
- yangi soch o‘sishining rag‘batlanishi;
- zichlikning oshishi;
- follikulalarning mustahkamlanishi;
- soch tuzilmasining yaxshilanishi;
- tabiiy yaltiroqlikning paydo bo‘lishi;
- bosh terisi yog‘lanishining kamayishi;
- bosh terisi umumiy holatining yaxshilanishi.

Dastlabki o‘zgarishlar odatda 1–2 oyda seziladi; maksimal effekt kurs davomida bosqichma-bosqich shakllanadi. Natija sababga, yoshga va individual xususiyatlarga bog‘liq.

## Necha marta muolaja kerak?

Seanslar sonini shifokor individual belgilaydi. Ko‘pincha 4–6 muolajalik kurs, oraliq 3–4 hafta tavsiya etiladi. Zarurat bo‘lsa, yil davomida qo‘llab-quvvatlovchi seanslar qo‘shiladi.

## Qarshi ko‘rsatmalar

Plazmotorapiya odatda quyidagi holatlarda o‘tkazilmaydi:

- o‘tkir infeksiyalar;
- onkologik kasalliklar;
- qon ivishining buzilishi;
- og‘ir qon kasalliklari;
- homiladorlik va emizish (individual ko‘rsatmalarga qarab);
- bosh terisidagi yallig‘lanishning zo‘rayishi.

Har qanday muolajadan oldin shifokor konsultatsiyasi majburiy.

## Nima uchun kompleks yondashuv muhim?

Soch to‘kilishi — alohida «kasallik» emas, balki belgi. Sabab gormonal o‘zgarishlar, temir tanqisligi, qalqonsimon bez muammolari, stress, vitaminlar yetishmovchiligi va boshqa holatlar bo‘lishi mumkin.

Shuning uchun Radeski Skin Clinic’da davolash trixolog konsultatsiyasi, diagnostika va zarurat bo‘lsa laboratoriya tekshiruvlaridan boshlanadi. Sabab aniqlangach, reja plazmotorapiya, tashqi terapiya, tanqislikni tuzatish va zamonaviy apparat usullarini birlashtirishi mumkin.

## Radeski Skin Clinic’da PRP

Klinikamizda zamonaviy PRP protokollari, steril ishlov standartlari va har bir bemorga individual yondashuv qo‘llaniladi. Soch to‘kilishi bezovta qilsa, o‘z-o‘zini davolashga urinmang — o‘z vaqtida trixolog ko‘rigi sababni aniqlash va eng mos terapiyani tanlashga yordam beradi.`;
}

function ruBody(): string {
  return `## Что такое плазмотерапия для волос?

Плазмотерапия (PRP — Platelet Rich Plasma) — современный метод восстановления волос с использованием собственной плазмы пациента, обогащённой тромбоцитами. Во время процедуры берут небольшое количество крови, в центрифуге выделяют плазму с высокой концентрацией факторов роста и вводят её в кожу головы микроинъекциями.

Факторы роста активизируют волосяные фолликулы, улучшают микроциркуляцию и поддерживают естественное восстановление тканей. Это не «чужой» препарат, а биологический ресурс самого организма.

В Radeski Skin Clinic процедуру проводят после консультации врача-трихолога: сначала выясняют причину выпадения, затем составляют индивидуальный план лечения.

## Кому подходит плазмотерапия?

По решению врача метод может рассматриваться при:

- андрогенетической алопеции у мужчин и женщин;
- диффузном выпадении волос;
- сезонном выпадении;
- выпадении после беременности и грудного вскармливания;
- выпадении после стресса или перенесённых заболеваний;
- замедленном росте волос;
- истончении волос и снижении плотности;
- сухости и ломкости;
- восстановлении после окрашивания и других агрессивных воздействий.

Плазмотерапия также может входить в комплексное лечение заболеваний кожи головы — только по показаниям специалиста.

## Когда стоит обратиться к трихологу?

Если ежедневно теряется много волос, расширяется пробор, появляются участки поредения или волосы заметно истончились, визит лучше не откладывать. Чем раньше начато лечение, тем выше шанс сохранить активные фолликулы.

## Каких результатов ожидать?

После курса PRP многие пациенты отмечают:

- уменьшение выпадения;
- стимуляцию роста новых волос;
- увеличение густоты;
- укрепление фолликулов;
- улучшение структуры волос;
- появление естественного блеска;
- уменьшение жирности кожи головы;
- улучшение общего состояния кожи головы.

Первые изменения обычно заметны через 1–2 месяца; максимальный эффект формируется постепенно в ходе курса. Результат зависит от причины выпадения, возраста и индивидуальных особенностей.

## Сколько процедур необходимо?

Количество сеансов определяет врач. Чаще всего рекомендуют курс из 4–6 процедур с интервалом 3–4 недели. При необходимости назначают поддерживающие процедуры несколько раз в год.

## Есть ли противопоказания?

Плазмотерапию обычно не проводят при:

- острых инфекционных заболеваниях;
- онкологических заболеваниях;
- нарушениях свёртываемости крови;
- тяжёлых заболеваниях крови;
- беременности и грудном вскармливании (по индивидуальным показаниям);
- воспалительных процессах кожи головы в стадии обострения.

Перед процедурой обязательна консультация врача.

## Комплексный подход — залог успеха

Выпадение волос — симптом, а не самостоятельный диагноз. Причинами могут быть гормональные нарушения, дефицит железа, заболевания щитовидной железы, стресс, нехватка витаминов и другие состояния.

Поэтому в Radeski Skin Clinic лечение начинается с консультации трихолога, диагностики и, при необходимости, лабораторного обследования. После выявления причины врач составляет программу, которая может включать плазмотерапию, наружную терапию, коррекцию дефицитов и аппаратные методики.

## Плазмотерапия в Radeski Skin Clinic

Мы используем современные протоколы PRP, соблюдаем стандарты стерильности и индивидуальный подход к каждому пациенту. Если вас беспокоит выпадение волос, не откладывайте визит: своевременная консультация трихолога поможет найти причину и подобрать эффективную терапию для густоты и здоровья волос.`;
}

function enBody(): string {
  return `## What is PRP therapy for hair?

PRP (Platelet Rich Plasma) therapy uses a patient’s own platelet-rich plasma to support hair follicle activity. A small blood sample is taken, spun in a centrifuge to concentrate growth factors, and then delivered into the scalp with microinjections.

Those growth factors help activate follicles, improve microcirculation, and support natural tissue recovery. The material is autologous — it comes from the patient’s own body, not from an external drug product.

At Radeski Skin Clinic, PRP is performed after a trichologist consultation: the cause of hair loss is assessed first, then an individual treatment plan is built.

## Who may benefit?

Depending on medical indication, PRP may be considered for:

- androgenetic alopecia in men and women;
- diffuse hair shedding;
- seasonal hair loss;
- postpartum shedding;
- shedding after stress or illness;
- slowed hair growth;
- thinning and reduced density;
- dryness and brittleness;
- recovery after colouring or other aggressive treatments.

PRP can also be part of a broader scalp-care plan — only when a specialist recommends it.

## When to see a trichologist

If you shed a lot of hair daily, notice a widening part, thinning patches, or clearly finer hair, do not delay the visit. Earlier care improves the chance of preserving active follicles.

## What results to expect

After a course, many patients report:

- reduced shedding;
- stimulation of new growth;
- improved density;
- stronger follicles;
- better hair structure;
- more natural shine;
- less oily scalp;
- overall healthier scalp condition.

First changes are often noticed in 1–2 months; the fullest effect builds gradually through the course. Outcomes depend on the cause, age, and individual factors.

## How many sessions are needed?

The doctor sets the number of sessions individually. A common plan is 4–6 procedures every 3–4 weeks, with maintenance sessions a few times a year if needed.

## Contraindications

PRP is generally not performed in cases of:

- acute infections;
- oncological disease;
- clotting disorders;
- severe blood disorders;
- pregnancy and breastfeeding (case by case);
- active inflammatory scalp flares.

A medical consultation is required before treatment.

## Why a comprehensive approach matters

Hair loss is a symptom, not a diagnosis on its own. Causes may include hormonal imbalance, iron deficiency, thyroid disease, stress, vitamin shortages, and more.

That is why care at Radeski Skin Clinic starts with trichologist assessment, diagnostics, and lab tests when needed. Once the cause is clear, the plan may combine PRP, topical therapy, deficiency correction, and device-based methods.

## PRP at Radeski Skin Clinic

We use modern PRP protocols, sterile technique, and individual planning for every patient. If hair loss worries you, avoid self-treatment — a timely trichologist visit helps identify the cause and choose the most suitable path to denser, healthier hair.`;
}

export const PRP_HAIR_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Soch uchun plazmotorapiya (PRP) Farg‘ona va Qo‘qonda: kimlarga mos, qanday o‘tadi va Radeski Skin Clinic’da trixolog qanday individual reja tuzadi.',
    body: uzBody(),
    keyTakeaways: [
      'PRP — bemorning o‘z trombotsitlarga boy plazmasi bilan soch follikulalarini stimullash',
      'Muolaja sabab aniqlangach, trixolog rejasiga ko‘ra o‘tkaziladi',
      'Kurs ko‘pincha 4–6 seans, oraliq 3–4 hafta',
      'Soch to‘kilishi belgi — kompleks diagnostika muhim',
    ],
    tags: ['PRP', 'Plazmotorapiya', 'Soch to‘kilishi', 'Trixologiya', 'Fargona', 'Qoqon', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Har kuni ko‘p soch to‘kilsa',
      'Ajratma kengayib borsa yoki yupqalanish zonasi paydo bo‘lsa',
      'Soch sezilarli darajada noziklashgan bo‘lsa',
      'Stress, kasallik yoki tug‘ruqdan keyin to‘kilish kuchaysa',
      'Uy sharoitidagi vositalar yordam bermasa',
    ],
    faq: [
      {
        question: 'PRP og‘riqlimi?',
        answer:
          'Mikroinyeksiyalar yengil noqulaylik berishi mumkin; shifokor kerak bo‘lsa, qulaylikni oshirish choralarini qo‘llaydi. Aksariyat bemorlar muolajani yaxshi ko‘taradi.',
      },
      {
        question: 'Natija qachon ko‘rinadi?',
        answer:
          'Dastlabki o‘zgarishlar odatda 1–2 oyda seziladi. To‘liq effekt kurs davomida bosqichma-bosqich shakllanadi.',
      },
      {
        question: 'PRP yakka o‘zi yetadimi?',
        answer:
          'Ba’zan yetarli, lekin ko‘pincha eng yaxshi natija kompleks yondashuvda — sababni tuzatish, tashqi terapiya va shifokor tavsiyalari bilan birga — kuzatiladi.',
      },
      {
        question: 'Homiladorlikda qilish mumkinmi?',
        answer:
          'Odatda homiladorlik va emizishda PRP individual baholanadi; ko‘p hollarda muolaja kechiktiriladi. Yakuniy qarorni shifokor beradi.',
      },
    ],
  },
  ru: {
    summary:
      'Плазмотерапия волос (PRP) в Фергане и Коканде: кому подходит, как проходит процедура и как в Radeski Skin Clinic составляют план у трихолога.',
    body: ruBody(),
    keyTakeaways: [
      'PRP использует собственную тромбоцитарную плазму пациента',
      'Процедуру назначают после оценки причины выпадения',
      'Чаще всего курс — 4–6 сеансов с интервалом 3–4 недели',
      'Выпадение волос — симптом; важна комплексная диагностика',
    ],
    tags: ['PRP', 'Плазмотерапия', 'Выпадение волос', 'Трихология', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Ежедневно теряется много волос',
      'Расширяется пробор или появляются зоны поредения',
      'Волосы заметно истончились',
      'Усилилось выпадение после стресса, болезни или родов',
      'Домашние средства не помогают',
    ],
    faq: [
      {
        question: 'Больно ли делать PRP?',
        answer:
          'Микроинъекции могут давать лёгкий дискомфорт; при необходимости врач повышает комфорт процедуры. Большинство пациентов переносят сеанс хорошо.',
      },
      {
        question: 'Когда будет результат?',
        answer:
          'Первые изменения обычно заметны через 1–2 месяца. Максимальный эффект развивается постепенно в ходе курса.',
      },
      {
        question: 'Достаточно ли одной плазмотерапии?',
        answer:
          'Иногда да, но чаще лучший результат даёт комплексный подход: устранение причины, наружная терапия и рекомендации врача.',
      },
      {
        question: 'Можно ли при беременности?',
        answer:
          'При беременности и грудном вскармливании PRP оценивают индивидуально; часто процедуру откладывают. Решение принимает врач.',
      },
    ],
  },
  en: {
    summary:
      'PRP hair therapy in Fergana and Kokand: who it may suit, how it works, and how Radeski Skin Clinic builds an individual plan with a trichologist.',
    body: enBody(),
    keyTakeaways: [
      'PRP uses the patient’s own platelet-rich plasma',
      'Treatment follows assessment of the cause of hair loss',
      'A typical course is 4–6 sessions every 3–4 weeks',
      'Hair loss is a symptom — comprehensive diagnostics matter',
    ],
    tags: ['PRP', 'Hair loss', 'Trichology', 'Scalp care', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Daily hair shedding is heavy',
      'The part widens or thinning patches appear',
      'Hair becomes clearly finer',
      'Shedding rises after stress, illness, or childbirth',
      'Home remedies are not helping',
    ],
    faq: [
      {
        question: 'Is PRP painful?',
        answer:
          'Microinjections may cause mild discomfort; the doctor can improve comfort when needed. Most patients tolerate the session well.',
      },
      {
        question: 'When will I see results?',
        answer:
          'First changes are often noticed in 1–2 months. The fullest effect builds gradually through the course.',
      },
      {
        question: 'Is PRP enough on its own?',
        answer:
          'Sometimes yes, but better outcomes often come from a combined plan that also addresses the cause and includes topical care.',
      },
      {
        question: 'Can I have PRP while pregnant?',
        answer:
          'During pregnancy and breastfeeding, PRP is assessed case by case and is often deferred. Your doctor makes the final decision.',
      },
    ],
  },
};

export const PRP_HAIR_ARTICLE: Article = {
  id: 'art-plazmotorapiya-soch-prp',
  slug: 'plazmotorapiya-soch-prp',
  title: {
    uz: 'Soch uchun plazmotorapiya: kimlarga mos va qanday natija kutish mumkin?',
    ru: 'Плазмотерапия для волос: кому подходит процедура и каких результатов ожидать?',
    en: 'PRP Therapy for Hair: Who It Suits and What Results to Expect',
  },
  summary: {
    uz: PRP_HAIR_ARTICLE_CATALOG.uz.summary,
    ru: PRP_HAIR_ARTICLE_CATALOG.ru.summary,
    en: PRP_HAIR_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: PRP_HAIR_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: PRP_HAIR_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: PRP_HAIR_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-07-21',
  image: null,
  images: {
    uz: null,
    ru: null,
    en: null,
  },
  views: 0,
};
