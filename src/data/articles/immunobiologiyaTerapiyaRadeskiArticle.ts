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

const COVER = '/services/dermatologiya/immunobiologicheskaya.jpg';

function uzBody(): string {
  return `## Immunobiologik terapiya nima?

Afsuski, psoriazni davolashda tizimli preparatlar katta tanlov bo'lsa-da, bemorlarning **40–50%** yetarli samaraga, to'liq tolarliksizlik yoki ko'p yon ta'sirlar tufayli ularni qabul qilishni to'xtatishga majbur bo'ladi.

O'rta va og'ir kechadigan psoriaz, qo'shma kasalliklar va og'ir allergik anamnezli bemorlar **individual tizimli terapiya** talab qiladi.

![Immunobiologik terapiya — Radeski Skin Clinic](${COVER})

## Nima uchun zamonaviy biologik preparatlar?

Metotreksat kabi sitostatik va teratogen ta'sirli preparatlar **reproduktiv yoshdagi ayollar**da, ayniqsa homiladorlik rejalashtirilganda cheklanishi kerak. Bunday holatlarda yon ta'sir xavfi past, xavfsizlik profili yuqori bo'lgan **gen-injener biologik preparatlar** ma'qul.

## Stelara (ustekinumab)

Gen-injener terapiyasining oltin standarti — **Stelara** preparati. 10 yildan ortiq dermatologik amaliyotda qo'llaniladi va ishonchli, yuqori faol vositaga ega.

**Ustekinumab** yallig'lanish interleykinlari IL-12 va IL-23 ning p40 subbirligiga bog'lanadi va ularning retseptorlari bilan aloqasini to'sadi.

## Klinik samara

- Ustekinumab **bo'g'imlarga trop** — psoriatik artritda samarali.
- **To'rtinchi inyeksiyadan** keyin onikhodistrofiya belgilari yo'qolishi mumkin.
- PSOLAR reestri: 12 mingdan ortiq bemorning ~**87%** 4 yil davomida ustekinumab bilan davolanishni davom ettirgan — barqaror klinik effekt va qoniqish.

Haqiqiy klinik amaliyotda terapiya davomiyligi uzoq muddatli samarani aks ettiradi. Stelara ko'p yillik qo'llanishda maksimal faollikni saqlaydi.

## Radeski klinikasida

Radeski Skin & Aesthetic Clinic yetakchi dermatologlari psoriaz, **atopik dermatit**, **urtiker**, **suppurativ gidradenit** va **Diverje kasalligi** bemorlariga immunobiologik preparatlar tayinlashda ko'p yillik tajribaga ega.

Bog'liq xizmatlar: [Immunobiologik terapiya](/uz/services/dermatologiya/immunobiologicheskaya), [Psoriaz maktabi](/uz/services/shkola-psoriaza), [Narxlar](/uz/prices).`;
}

function ruBody(): string {
  return `## Что такое иммунобиологическая терапия?

К сожалению, несмотря на большой выбор системных средств при лечении псориаза, **40–50%** пациентов вынуждены прекратить приём из-за недостаточной эффективности, непереносимости или побочных реакций.

Пациенты с псориазом среднего и тяжёлого течения, коморбидными состояниями и отягощённым аллергическим анамнезом нуждаются в **персонализированном назначении** системных препаратов.

![Иммунобиологическая терапия — Radeski Skin Clinic](/services/dermatologiya/immunobiologicheskaya.jpg)

## Зачем современные биологические препараты?

Применение **метотрексата**, оказывающего цитостатическое и тератогенное действие, должно быть ограничено у **женщин репродуктивного возраста**, планирующих беременность. В таких случаях целесообразны **генно-инженерные биологические препараты** с низким риском побочных эффектов.

## Stelara (ustekinumab)

Золотым стандартом генно-инженерной терапии является **Stelara** — более 10 лет в дерматологической практике.

**Ustekinumab** связывается с субъединицей p40 воспалительных интерлейкинов IL-12 и IL-23, блокируя их взаимодействие с рецепторами.

## Клинический эффект

- Тропность к суставам — эффективность при **псориатическом артрите**.
- После **четвёртой инъекции** могут исчезнуть проявления **ониходистрофии**.
- Реестр PSOLAR: около **87%** из более 12 тыс. пациентов через 4 года продолжили терапию устекинумабом.

Stelara сохраняет максимальную действенность при многолетнем применении.

## В клинике Radeski

Ведущие дерматологи Radeski Skin & Aesthetic Clinic имеют многолетний опыт назначения **иммунобиологической терапии** при псориазе, **атопическом дерматите**, **крапивнице**, **суппуративном гидрадените** и **болезни Диверже**.

Связанные услуги: [Иммунобиологическая терапия](/ru/services/dermatologiya/immunobiologicheskaya), [Школа псориаза](/ru/services/shkola-psoriaza), [Цены](/ru/prices).`;
}
function enBody(): string {
  return `## What is immunobiological therapy?

Despite many systemic options for psoriasis, **40–50%** of patients stop treatment due to insufficient effect, intolerance, or adverse reactions.

Patients with moderate to severe psoriasis, comorbidities, and significant allergy history need **personalized systemic therapy**.

![Immunobiological therapy — Radeski Skin Clinic](${COVER})

## Why modern biologics?

Methotrexate and similar agents with cytostatic and teratogenic effects should be limited in **women of reproductive age** planning pregnancy. **Genetically engineered biologics** with a safer profile are preferred.

## Stelara (ustekinumab)

The gold standard of biologic therapy is **Stelara**, used in dermatology for more than 10 years.

**Ustekinumab** binds the p40 subunit of inflammatory interleukins IL-12 and IL-23, blocking receptor interaction.

## Clinical outcomes

- Joint tropism — effective in **psoriatic arthritis**.
- After the **fourth injection**, nail dystrophy signs may improve.
- PSOLAR registry: ~**87%** of 12,000+ patients continued ustekinumab at 4 years.

Stelara maintains strong long-term effectiveness in real-world practice.

## At Radeski Clinic

Leading dermatologists at Radeski Skin & Aesthetic Clinic have extensive experience prescribing immunobiological therapy for psoriasis, **atopic dermatitis**, **urticaria**, **hidradenitis suppurativa**, and **Darier disease**.

Related services: [Immunobiological therapy](/en/services/dermatologiya/immunobiologicheskaya), [Psoriasis school](/en/services/shkola-psoriaza), [Prices](/en/prices).`;
}

export const IMMUNOBIOLOGIYA_TERAPIYA_RADESKI_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Immunobiologik terapiya: psoriaz, Stelara (ustekinumab), individual yondashuv va xavfsizlik — Radeski Skin Clinic.',
    body: uzBody(),
    keyTakeaways: [
      'Og\'ir psoriazda biologik preparatlar individual tanlanadi',
      'Stelara (ustekinumab) 10+ yillik klinik tajribaga ega',
      'Metotreksat reproduktiv yoshda cheklanishi mumkin',
      'PSOLAR: 4 yilda 87% davolanishni davom ettirgan',
      'Atopik dermatit, urtiker va boshqa immunitet kasalliklarida ham qo\'llaniladi',
    ],
    tags: ['Immunobiologik terapiya', 'Psoriaz', 'Stelara', 'Ustekinumab', 'Dermatologiya', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Psoriaz o\'rta yoki og\'ir kechayotgan bo\'lsa',
      'Mahalliy terapiya yetarli bo\'lmaganda',
      'Qo\'shma og\'riq yoki tirnoq o\'zgarishlari bo\'lsa',
      'Oldingi tizimli preparatlar yordam bermagan bo\'lsa',
    ],
    faq: [
      {
        question: 'Immunobiologik terapiya kimlar uchun?',
        answer:
          'O\'rta-og\'ir psoriaz, psoriatik artrit va boshqa immunitetga bog\'liq kasalliklarda, shifokor ko\'rsatmasi bo\'yicha.',
      },
      {
        question: 'Stelara qancha tez ishlaydi?',
        answer:
          'Individual. Ba\'zi belgilar bir necha haftada, tirnoq o\'zgarishlari bir necha inyeksiyadan keyin yaxshilanishi mumkin.',
      },
      {
        question: 'Homiladorlikda mumkinmi?',
        answer:
          'Reja shifokor bilan individual muhokama qilinadi. Metotreksatdan farqli olaroq, biologik preparatlar reproduktiv yoshda alohida baholanadi.',
      },
    ],
  },
  ru: {
    summary:
      'Иммунобиологическая терапия: псориаз, Stelara (устекинумаб), персональный подход и безопасность — Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'При тяжёлом псориазе назначаются биологические препараты индивидуально',
      'Stelara (устекинумаб) — более 10 лет клинического опыта',
      'Метотрексат ограничен у женщин репродуктивного возраста',
      'PSOLAR: 87% продолжили терапию через 4 года',
      'Также при атопическом дерматите, крапивнице и других иммунных заболеваниях',
    ],
    tags: ['Иммунобиологическая терапия', 'Псориаз', 'Stelara', 'Ustekinumab', 'Dermatologiya', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Псориаз средней или тяжёлой степени',
      'Местная терапия недостаточна',
      'Есть боль в суставах или изменения ногтей',
      'Предыдущие системные препараты не помогли',
    ],
    faq: [
      {
        question: 'Кому показана иммунобиологическая терапия?',
        answer:
          'При средне-тяжёлом псориазе, псориатическом артрите и других иммуноопосредованных заболеваниях по назначению врача.',
      },
      {
        question: 'Как быстро действует Stelara?',
        answer:
          'Индивидуально. Некоторые проявления — через недели, изменения ногтей — после нескольких инъекций.',
      },
      {
        question: 'Можно ли при беременности?',
        answer:
          'План обсуждается с врачом индивидуально. Биологические препараты оцениваются отдельно от метотрексата.',
      },
    ],
  },
  en: {
    summary:
      'Immunobiological therapy: psoriasis, Stelara (ustekinumab), personalized approach and safety — Radeski Skin Clinic.',
    body: enBody(),
    keyTakeaways: [
      'Biologics are selected individually for severe psoriasis',
      'Stelara (ustekinumab) has 10+ years of clinical use',
      'Methotrexate is limited in reproductive-age women',
      'PSOLAR: 87% continued therapy at 4 years',
      'Also used in atopic dermatitis, urticaria, and other immune conditions',
    ],
    tags: ['Immunobiological therapy', 'Psoriasis', 'Stelara', 'Ustekinumab', 'Dermatology', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Moderate or severe psoriasis',
      'Topical therapy is insufficient',
      'Joint pain or nail changes are present',
      'Previous systemic drugs were ineffective',
    ],
    faq: [
      {
        question: 'Who is immunobiological therapy for?',
        answer:
          'Moderate to severe psoriasis, psoriatic arthritis, and other immune-mediated conditions under physician supervision.',
      },
      {
        question: 'How fast does Stelara work?',
        answer:
          'Individual. Some signs improve within weeks; nail changes may improve after several injections.',
      },
      {
        question: 'Is it safe in pregnancy?',
        answer:
          'The plan is discussed individually with your physician. Biologics are evaluated separately from methotrexate.',
      },
    ],
  },
};

export const IMMUNOBIOLOGIYA_TERAPIYA_RADESKI_ARTICLE: Article = {
  id: 'art-immunobiologiya-terapiya-radeski',
  slug: 'immunobiologik-terapiya-radeski',
  title: {
    uz: 'Immunobiologik terapiya: psoriaz va Stelara',
    ru: 'Иммунобиологическая терапия: псориаз и Stelara',
    en: 'Immunobiological Therapy: Psoriasis and Stelara',
  },
  summary: {
    uz: IMMUNOBIOLOGIYA_TERAPIYA_RADESKI_ARTICLE_CATALOG.uz.summary,
    ru: IMMUNOBIOLOGIYA_TERAPIYA_RADESKI_ARTICLE_CATALOG.ru.summary,
    en: IMMUNOBIOLOGIYA_TERAPIYA_RADESKI_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: IMMUNOBIOLOGIYA_TERAPIYA_RADESKI_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: IMMUNOBIOLOGIYA_TERAPIYA_RADESKI_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: IMMUNOBIOLOGIYA_TERAPIYA_RADESKI_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: { uz: 'Radeski Skin Clinic', ru: 'Radeski Skin Clinic', en: 'Radeski Skin Clinic' },
  date: '2026-09-22',
  image: COVER,
  images: { uz: COVER, ru: COVER, en: COVER },
  views: 0,
};
