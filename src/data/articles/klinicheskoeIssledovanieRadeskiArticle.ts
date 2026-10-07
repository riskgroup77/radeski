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

const COVER = '/brand/brand-medical.webp';

function uzBody(): string {
  return `## Klinik tadqiqot nima?

**Klinik tadqiqot (КИ)** — odamlar ishtirokida o'tkaziladigan ilmiy ish: yangi dori yoki uslubning **samarasi va xavfsizligi** baholanadi, mavjud preparatning ko'rsatmalarini kengaytirish mumkin. Shuningdek, yangi invaziv va noinvaziv **davolash hamda diagnostika** usullari o'rganiladi.

![Klinik tadqiqot — Radeski Skin Clinic](${COVER})

## Klinik tekshiruv usullari

Klinik metodlar: **anamnez** (kasallik tarixi), ko'rik, **palpatsiya**, perkussiya, auskultatsiya. Anamnez bemor va yaqinlaridan so'roq orqali olinadi.

## Tadqiqot turlari

Ilmiy ish **nazariy**, nazariy-eksperimental va **eksperimental** bo'lishi mumkin — qo'llaniladigan usul va vositalarga bog'liq.

## Nima uchun klinik tadqiqotlar kerak?

Ular yangi terapiyaning **xavfsizligi va samarasini** isbotlaydi va dori bozorida chiqish uchun majburiy shart hisoblanadi. Qat'iy ilmiy yondashuv ham **effekt**, ham ishtirokchilar **xavfsizligi**ni ta'minlaydi.

## Kim o'tkazadi?

**Tadqiqotchi-shifokorlar** — o'z sohasida malakali mutaxassislar. Ular tadqiqotni to'g'ri o'tkazish, bemorlarni jalb qilish va ularning xavfsizligi uchun javobgardir.

## «Klinik jihatdan isbotlangan» degani

Bu — odamlar ishtirokidagi barcha ilmiy ishlar: yangi yoki mavjud dori/tibbiy buyumning samara va xavfsizligi baholanadi.

## Klinik sinov fazalari

| Faza | Maqsad |
|------|--------|
| **I** | 20–80 kishida xavfsizlik, doza oralig'i, yon ta'sirlar |
| **II** | Kengroq guruh, maqsadli kasallik bo'yicha samara |
| **III** | Katta ko'lam, ro'yxatdan oldin yakuniy baho |
| **IV** | Ro'yxatdan keyin — real hayotda samara va xavfsizlikni aniqlashtirish |

**IV faza** preparat aptekada paydo bo'lgandan **keyin** ham davom etadi.

## Radeski va GCP

Radeski Skin & Aesthetic Clinic da klinik tadqiqotlarda ishtirok etuvchi **shifokor-tadqiqotchilar GCP sertifikatiga** ega. GCP (Good Clinical Practice) — xalqaro standart bo'lib, bemor huquqlari va ma'lumotlar sifati kafolatlanadi.

Bog'liq: [Ilm-fan](/uz/science), [Klinika haqida](/uz/about), [Xizmatlar](/uz/services).`;
}

function ruBody(): string {
  return `## Что такое клиническое исследование?

**Клиническое исследование (КИ)** — научное исследование с участием людей для оценки **эффективности и безопасности** нового лекарства или метода, а также расширения показаний известных препаратов. Изучаются и новые инвазивные и неинвазивные методы лечения и диагностики.

![Клиническое исследование — Radeski Skin Clinic](${COVER})

## Клинические методы обследования

К ним относятся **анамнез**, осмотр, **пальпация**, перкуссия, аuscultация. Анамнез — история болезни, полученная при опросе пациента и родственников.

## Виды исследований

Исследования бывают **теоретические**, теоретико-экспериментальные и **экспериментальные** — в зависимости от методов.

## Зачем нужны КИ?

Они доказывают **безопасность и эффективность** терапии и являются обязательным этапом вывода препарата на рынок. Строгий научный подход защищает и результат, и участников.

## Кто проводит?

**Исследователи-врачи** — квалифицированные специалисты, ответственные за проведение исследования, включение пациентов и их безопасность.

## Клинически доказано

Под этим понимаются все исследования с участием людей, оценивающие эффективность и безопасность новых или уже зарегистрированных средств.

## Фазы клинических испытаний

| Фаза | Суть |
|------|------|
| **I** | 20–80 человек: безопасность, дозы, побочные эффекты |
| **II** | Больше участников с целевым заболеванием |
| **III** | Крупные исследования перед регистрацией |
| **IV** | После регистрации — уточнение эффективности в практике |

**Фаза IV** проводится **после** появления препарата в аптеках.

## Radeski и GCP

Врачи-исследователи Radeski Skin & Aesthetic Clinic, участвующие в КИ, имеют сертификаты **GCP** (Good Clinical Practice) — международный стандарт защиты прав пациентов и качества данных.

Связанное: [Наука](/ru/science), [О клинике](/ru/about), [Услуги](/ru/services).`;
}

function enBody(): string {
  return `## What is a clinical trial?

A **clinical trial (CT)** is research involving people to evaluate **efficacy and safety** of a new drug or method, or to expand indications for existing treatments. New invasive and non-invasive **therapies and diagnostics** may also be studied.

![Clinical research — Radeski Skin Clinic](${COVER})

## Clinical examination methods

These include **history taking**, physical exam, **palpation**, percussion, and auscultation.

## Types of research

Studies may be theoretical, theoretical-experimental, or **experimental**, depending on methods used.

## Why clinical trials matter

They demonstrate **safety and effectiveness** and are required before market approval. Rigorous science protects both outcomes and participants.

## Who conducts them?

**Investigator physicians** — qualified specialists responsible for proper conduct, enrollment, and participant safety.

## Clinically proven

All human research aimed at evaluating safety and effectiveness of new or registered medical products.

## Trial phases

| Phase | Focus |
|-------|--------|
| **I** | 20–80 subjects: safety, dosing, side effects |
| **II** | Larger group with target condition |
| **III** | Pivotal trials before approval |
| **IV** | Post-marketing real-world monitoring |

**Phase IV** continues **after** the drug is available in pharmacies.

## Radeski and GCP

Investigators at Radeski Skin & Aesthetic Clinic participating in trials hold **GCP** (Good Clinical Practice) certificates — the international standard for patient rights and data quality.

Related: [Science](/en/science), [About](/en/about), [Services](/en/services).`;
}

export const KLINICHESKOE_ISSLEDOVANIE_RADESKI_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Klinik tadqiqot: fazalar I–IV, GCP, xavfsizlik va samara — Radeski Skin Clinic shifokor-tadqiqotchilari.',
    body: uzBody(),
    keyTakeaways: [
      'Klinik tadqiqot dori va uslublarning samarasini isbotlaydi',
      'I–IV fazalar xavfsizlikdan real amaliyotgacha ketma-ketlik',
      'GCP sertifikati bemor huquqlarini himoya qiladi',
      'Radeski shifokorlari KI da ishtirok etadi',
      'Klinik jihatdan isbotlangan — odamlar ishtirokidagi ilmiy standart',
    ],
    tags: ['Klinik tadqiqot', 'GCP', 'Ilm-fan', 'Dermatologiya', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Klinik tadqiqotga qatnashish taklif qilinganda — shifokor bilan batafsil suhbat',
      'Yangi preparat sinovlari haqida ma\'lumot kerak bo\'lsa',
      'Davolanish protokoli klinik standartlarga mosligini bilmoqchi bo\'lsangiz',
    ],
    faq: [
      {
        question: 'Klinik tadqiqot xavfsizmi?',
        answer:
          'Etik komitet, informirovanniy rozilik va GCP qoidalari ishtirokchi xavfsizligini nazorat qiladi.',
      },
      {
        question: 'I va IV faza farqi nima?',
        answer:
          'I faza — dastlabki xavfsizlik; IV faza — preparat bozorga chiqqandan keyingi kuzatuv.',
      },
      {
        question: 'GCP nima?',
        answer:
          'Good Clinical Practice — klinik tadqiqotlarni o\'tkazishning xalqaro sifat standarti.',
      },
    ],
  },
  ru: {
    summary:
      'Клиническое исследование: фазы I–IV, GCP, безопасность и эффективность — исследователи Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'КИ доказывает эффективность и безопасность терапии',
      'Фазы I–IV — от первичной безопасности до пострегистрационного мониторинга',
      'GCP защищает права пациентов',
      'Врачи Radeski участвуют в КИ',
      'Клинически доказано — стандарт исследований с участием людей',
    ],
    tags: ['Клиническое исследование', 'GCP', 'Наука', 'дерматология', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'При приглашении в клиническое исследование — обсудите с врачом',
      'Нужна информация о протоколах лечения',
      'Интересует соответствие терапии международным стандартам',
    ],
    faq: [
      {
        question: 'Безопасны ли клинические исследования?',
        answer:
          'Этический комитет, информированное согласие и GCP контролируют безопасность участников.',
      },
      {
        question: 'Чем отличаются фазы I и IV?',
        answer:
          'Фаза I — первичная безопасность; фаза IV — наблюдение после регистрации препарата.',
      },
      {
        question: 'Что такое GCP?',
        answer:
          'Good Clinical Practice — международный стандарт проведения клинических исследований.',
      },
    ],
  },
  en: {
    summary:
      'Clinical trials: phases I–IV, GCP, safety and efficacy — Radeski Skin Clinic investigators.',
    body: enBody(),
    keyTakeaways: [
      'Clinical trials prove treatment safety and efficacy',
      'Phases I–IV span first-in-human to post-marketing surveillance',
      'GCP protects participant rights',
      'Radeski physicians participate in trials',
      'Clinically proven means rigorous human research standards',
    ],
    tags: ['Clinical trial', 'GCP', 'Science', 'Dermatology', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'When invited to a clinical trial — discuss with your physician',
      'If you need information on study protocols',
      'When comparing care to international evidence standards',
    ],
    faq: [
      {
        question: 'Are clinical trials safe?',
        answer:
          'Ethics review, informed consent, and GCP rules monitor participant safety.',
      },
      {
        question: 'Difference between phase I and IV?',
        answer:
          'Phase I — initial safety; phase IV — monitoring after the drug is on the market.',
      },
      {
        question: 'What is GCP?',
        answer:
          'Good Clinical Practice — the international quality standard for clinical research.',
      },
    ],
  },
};

export const KLINICHESKOE_ISSLEDOVANIE_RADESKI_ARTICLE: Article = {
  id: 'art-klinicheskoe-issledovanie-radeski',
  slug: 'klinicheskoe-issledovanie-radeski',
  title: {
    uz: 'Klinik tadqiqot: fazalar va GCP',
    ru: 'Клиническое исследование: фазы и GCP',
    en: 'Clinical Research: Phases and GCP',
  },
  summary: {
    uz: KLINICHESKOE_ISSLEDOVANIE_RADESKI_ARTICLE_CATALOG.uz.summary,
    ru: KLINICHESKOE_ISSLEDOVANIE_RADESKI_ARTICLE_CATALOG.ru.summary,
    en: KLINICHESKOE_ISSLEDOVANIE_RADESKI_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: KLINICHESKOE_ISSLEDOVANIE_RADESKI_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: KLINICHESKOE_ISSLEDOVANIE_RADESKI_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: KLINICHESKOE_ISSLEDOVANIE_RADESKI_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: { uz: 'Radeski Skin Clinic', ru: 'Radeski Skin Clinic', en: 'Radeski Skin Clinic' },
  date: '2026-09-24',
  image: COVER,
  images: { uz: COVER, ru: COVER, en: COVER },
  views: 0,
};
