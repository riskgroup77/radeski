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
  return `## Plazmaferez nima?

Plazmaferez — qon maxsus apparat orqali o‘tkaziladigan tibbiy muolaja. Plazma (unda yallig‘lanish yoki autoimmun jarayonni qo‘llab-quvvatlashi mumkin bo‘lgan biologiya faol moddalar bo‘lishi mumkin) vaqtincha ajratiladi, qon hujayralari esa almashtiruvchi eritma bilan organizmga qaytariladi.

Maqsad — yallig‘lanish yoki autoimmun faollikni saqlab turishi mumkin bo‘lgan aylanib yuruvchi moddalar miqdorini kamaytirish. Muhim: plazmaferez kasallik sababini «yo‘qotmaydi», lekin ayrim hollarda asosiy davolash samarasini oshirishi va yallig‘lanish faolligini pasaytirishi mumkin.

Radeski Skin Clinic’da plazmaferez faqat shifokor ko‘rsatmasiga ko‘ra, belgilangan dermatologik holatlarda kompleks terapiya qismi sifatida qo‘llaniladi.

## Qaysi teri kasalliklarida ko‘rib chiqiladi?

Shifokor qaroriga ko‘ra plazmaferez quyidagi holatlarda kompleks rejaaga kiritilishi mumkin:

- o‘rta va og‘ir darajadagi psoriaz;
- keng tarqalgan atopik dermatit shakllari;
- ayrim hollarda surunkali eshakemi;
- autoimmun bullöz dermatologik kasalliklar;
- teri belgilari bilan kechadigan ayrim vaskulit shakllari;
- boshqa kasalliklar — faqat qat’iy tibbiy ko‘rsatmalar bo‘yicha.

Muolaja zarurati faqat ko‘rik va bemorning umumiy holatini baholashdan keyin aniqlanadi. Bu «hamma uchun» usul emas.

## Muolaja qanday o‘tadi?

Davolashdan oldin mutaxassis konsultatsiyasi va kerakli tekshiruvlar o‘tkaziladi.

Seans davomida odatda:

- vena orqali kirish o‘rnatiladi;
- qon plazmaferez apparatidan o‘tadi;
- plazma ajratiladi;
- qon hujayralari organizmga qaytariladi.

Bitta seans odatda 60–120 daqiqa davom etadi. Seanslar soni tashxis va klinik vaziyatga qarab individual belgilanadi.

## Qanday foyda kutish mumkin?

To‘g‘ri tanlangan bemorlarda plazmaferez quyidagilarga yordam berishi mumkin:

- yallig‘lanish ifodalanishining kamayishi;
- qichishishning pasayishi;
- toshmalar maydonining qisqarishi;
- asosiy davolash bilan birga remissiyaga tezroq chiqish;
- ayrim dori vositalariga ehtiyojning kamayishi (faqat davolovchi shifokor qarori bilan).

Samaradorlik kasallik turi, og‘irligi va individual xususiyatlarga bog‘liq.

## Qachon o‘tkazilmaydi?

Qarshi ko‘rsatmalar orasida:

- qon ivishining og‘ir buzilishi;
- aniq ifodalangan anemiya;
- o‘tkir infeksiyalar;
- og‘ir yurak-qon tomir yetishmovchiligi;
- nazoratsiz qon ketishi;
- boshqa ayrim holatlar.

Davolashdan oldin shifokor qarshi ko‘rsatmalarni majburiy baholaydi.

## Nima uchun kompleks davolash muhim?

Ko‘p surunkali teri kasalliklari faqat mahalliy krem bilan cheklanmaydi. Plazmaferez asosiy terapiyani almashtirmaydi — u zamonaviy usullar bilan birgalikda qo‘llaniladi.

Radeski Skin Clinic’da yordam quyidagilarni o‘z ichiga olishi mumkin:

- tajribali dermatolog konsultatsiyasi;
- dermatoskopiya va kerakli diagnostika;
- Daavlin apparatlarida fototerapiya;
- tizimli va tashqi terapiya;
- teri parvarishi va zo‘rayishning oldini olish bo‘yicha tavsiyalar.

Individual yondashuv har bir bemor uchun eng mos dasturni tanlashga yordam beradi.

## Radeski Skin Clinic’da plazmaferez

Surunkali teri kasalligi bezovta qilsa, o‘z-o‘zini davolamang. Zamonaviy dermatologiya kasallikni nazorat qilish va hayot sifatini yaxshilash uchun imkoniyatlarga ega.

Radeski mutaxassislari diagnostika o‘tkazadi, plazmaferez zarurligini baholaydi va xalqaro klinik tavsiyalarni hisobga olgan holda individual davolash rejasini tuzadi.`;
}

function ruBody(): string {
  return `## Что такое плазмаферез?

Плазмаферез — медицинская процедура, при которой кровь пациента проходит через специальный аппарат. Плазма, содержащая биологически активные вещества, временно отделяется от клеток крови, а клетки возвращаются в кровоток вместе с замещающим раствором.

Цель — уменьшить количество циркулирующих веществ, которые могут поддерживать воспалительный или аутоиммунный процесс. Важно: плазмаферез не устраняет причину заболевания, но в отдельных случаях помогает снизить активность воспаления и повысить эффективность основной терапии.

В Radeski Skin Clinic плазмаферез применяется по показаниям врача как часть комплексной терапии при определённых дерматологических заболеваниях.

## При каких кожных заболеваниях может применяться?

По решению врача плазмаферез может быть включён в комплексное лечение при:

- псориазе средней и тяжёлой степени;
- распространённых формах атопического дерматита;
- хронической крапивнице в отдельных случаях;
- аутоиммунных буллёзных дерматозах;
- некоторых формах васкулитов с кожными проявлениями;
- других заболеваниях — только по строгим медицинским показаниям.

Необходимость процедуры определяется после осмотра и оценки общего состояния пациента. Это не универсальный метод «для всех».

## Как проходит процедура?

Перед лечением проводят консультацию специалиста и необходимое обследование.

Во время сеанса обычно:

- устанавливается венозный доступ;
- кровь проходит через аппарат плазмафереза;
- происходит отделение плазмы;
- клетки крови возвращаются в организм.

Одна процедура чаще всего длится от 60 до 120 минут. Количество сеансов определяют индивидуально — в зависимости от диагноза и клинической ситуации.

## Какие преимущества возможны?

При правильном отборе пациентов плазмаферез может способствовать:

- снижению выраженности воспаления;
- уменьшению кожного зуда;
- уменьшению площади высыпаний;
- более быстрому достижению ремиссии в сочетании с основным лечением;
- снижению потребности в отдельных препаратах (только по решению лечащего врача).

Эффективность зависит от заболевания, его тяжести и индивидуальных особенностей.

## Когда плазмаферез не проводят?

Среди противопоказаний:

- тяжёлые нарушения свёртываемости крови;
- выраженная анемия;
- острые инфекционные заболевания;
- тяжёлая сердечно-сосудистая недостаточность;
- неконтролируемое кровотечение;
- ряд других состояний.

Перед лечением врач обязательно оценивает возможные противопоказания.

## Почему важно комплексное лечение?

Большинство хронических кожных заболеваний требуют комплексного подхода. Плазмаферез не заменяет основную терапию, а применяется вместе с современными методами лечения.

В Radeski Skin Clinic помощь может включать:

- консультацию опытного дерматолога;
- дерматоскопию и необходимые диагностические исследования;
- фототерапию на аппаратах Daavlin;
- системную и наружную терапию;
- рекомендации по уходу за кожей и профилактике обострений.

Индивидуальный подход позволяет подобрать наиболее эффективную программу для каждого пациента.

## Плазмаферез в Radeski Skin Clinic

Если вы страдаете хроническим кожным заболеванием, не занимайтесь самолечением. Современная дерматология располагает методами, которые помогают контролировать болезнь и улучшать качество жизни.

Специалисты Radeski Skin Clinic проведут диагностику, определят необходимость плазмафереза и составят индивидуальный план лечения с учётом международных клинических рекомендаций.`;
}

function enBody(): string {
  return `## What is plasmapheresis?

Plasmapheresis is a medical procedure in which a patient’s blood passes through a specialised device. Plasma that may contain biologically active substances is temporarily separated from blood cells; the cells are then returned to the bloodstream with a replacement solution.

The goal is to reduce circulating substances that can sustain inflammatory or autoimmune activity. Importantly, plasmapheresis does not remove the root cause of disease, but in selected cases it may lower inflammatory activity and improve the effect of primary therapy.

At Radeski Skin Clinic, plasmapheresis is used only when medically indicated, as part of comprehensive care for certain dermatological conditions.

## When may it be considered for skin disease?

On a doctor’s decision, plasmapheresis may be included in combined treatment for:

- moderate to severe psoriasis;
- widespread forms of atopic dermatitis;
- chronic urticaria in selected cases;
- autoimmune bullous dermatoses;
- some vasculitides with skin involvement;
- other conditions — only under strict medical indications.

Need for the procedure is decided after examination and assessment of overall health. It is not a universal option for every patient.

## How does the procedure work?

Treatment starts with a specialist consultation and required investigations.

During a session, typically:

- venous access is established;
- blood passes through the plasmapheresis device;
- plasma is separated;
- blood cells are returned to the body.

One session usually lasts 60–120 minutes. The number of sessions is set individually based on diagnosis and clinical situation.

## Possible benefits

In carefully selected patients, plasmapheresis may help:

- reduce inflammatory intensity;
- lessen itch;
- shrink the area of eruptions;
- reach remission faster alongside main therapy;
- lower the need for certain medicines (only by the treating doctor’s decision).

Effectiveness depends on the disease, its severity, and individual factors.

## When it is not performed

Contraindications include:

- severe clotting disorders;
- marked anaemia;
- acute infections;
- severe cardiovascular failure;
- uncontrolled bleeding;
- certain other conditions.

The doctor always reviews contraindications before treatment.

## Why comprehensive care matters

Most chronic skin diseases need a combined approach. Plasmapheresis does not replace primary therapy — it is used together with modern treatment methods.

At Radeski Skin Clinic, care may include:

- consultation with an experienced dermatologist;
- dermatoscopy and needed diagnostic tests;
- phototherapy on Daavlin devices;
- systemic and topical therapy;
- guidance on skincare and flare prevention.

An individual plan helps choose the most suitable programme for each patient.

## Plasmapheresis at Radeski Skin Clinic

If you live with a chronic skin disease, avoid self-treatment. Modern dermatology offers ways to control disease activity and improve quality of life.

Radeski specialists will diagnose the condition, decide whether plasmapheresis is appropriate, and build an individual treatment plan aligned with international clinical recommendations.`;
}

export const PLASMAPHERESIS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Teri kasalliklarida plazmaferez Farg‘ona va Qo‘qonda: qachon ko‘rsatiladi va nima uchun Radeski Skin Clinic’da u faqat kompleks terapiya qismi sifatida qo‘llaniladi.',
    body: uzBody(),
    keyTakeaways: [
      'Plazmaferez — qon plazmasini apparatda ajratish; sababni yo‘qotmaydi, lekin yallig‘lanish faolligini pasaytirishi mumkin',
      'Faqat shifokor ko‘rsatmasiga ko‘ra, tanlangan dermatologik holatlarda',
      'Seans odatda 60–120 daqiqa; soni individual',
      'Asosiy terapiyani almashtirmaydi — kompleks yondashuv muhim',
    ],
    tags: ['Plazmaferez', 'Psoriaz', 'Dermatologiya', 'Kompleks terapiya', 'Fargona', 'Qoqon', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Surunkali teri kasalligi zo‘rayib borsa',
      'Mahalliy davolash yetarli bo‘lmasa',
      'Keng tarqalgan toshmalar yoki kuchli qichishish bo‘lsa',
      'Autoimmun yoki og‘ir dermatologik tashxis muhokama qilinayotgan bo‘lsa',
      'O‘z-o‘zini davolash natija bermasa',
    ],
    faq: [
      {
        question: 'Plazmaferez kasallikni butunlay davolaydimi?',
        answer:
          'Yo‘q. Bu usul sababni yo‘qotmaydi; ayrim holatlarda asosiy davolash bilan birga yallig‘lanishni kamaytirishga yordam beradi.',
      },
      {
        question: 'Har qanday teri kasalligida qilinadimi?',
        answer:
          'Yo‘q. Faqat qat’iy ko‘rsatmalar va shifokor qarori bilan. Ko‘rik va tekshiruvlardan keyin zarurat aniqlanadi.',
      },
      {
        question: 'Seans qancha davom etadi?',
        answer:
          'Odatda 60–120 daqiqa. Seanslar soni tashxis va klinik vaziyatga qarab belgilanadi.',
      },
      {
        question: 'Fototerapiya o‘rniga o‘tadimi?',
        answer:
          'Yo‘q. Plazmaferez fototerapiya yoki boshqa asosiy usullarni almashtirmaydi — kerak bo‘lsa, ular bilan birgalikda qo‘llaniladi.',
      },
    ],
  },
  ru: {
    summary:
      'Плазмаферез при кожных заболеваниях в Фергане и Коканде: когда может быть полезен и почему в Radeski Skin Clinic его применяют только как часть комплексной терапии.',
    body: ruBody(),
    keyTakeaways: [
      'Плазмаферез отделяет плазму аппаратно; причину болезни не устраняет, но может снизить активность воспаления',
      'Назначается только по показаниям врача при отдельных дерматологических состояниях',
      'Сеанс обычно длится 60–120 минут; число процедур индивидуально',
      'Не заменяет основную терапию — важен комплексный подход',
    ],
    tags: ['Плазмаферез', 'Псориаз', 'Дерматология', 'Комплексная терапия', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Хроническое заболевание кожи обостряется',
      'Местного лечения недостаточно',
      'Есть распространённые высыпания или сильный зуд',
      'Обсуждается аутоиммунный или тяжёлый дерматологический диагноз',
      'Самолечение не помогает',
    ],
    faq: [
      {
        question: 'Плазмаферез полностью лечит заболевание?',
        answer:
          'Нет. Метод не устраняет причину; в отдельных случаях помогает снизить воспаление вместе с основной терапией.',
      },
      {
        question: 'Делают ли при любом кожном заболевании?',
        answer:
          'Нет. Только по строгим показаниям и решению врача после осмотра и обследования.',
      },
      {
        question: 'Сколько длится сеанс?',
        answer:
          'Обычно 60–120 минут. Количество сеансов зависит от диагноза и клинической ситуации.',
      },
      {
        question: 'Заменяет ли фототерапию?',
        answer:
          'Нет. Плазмаферез не заменяет фототерапию или другие базовые методы — при необходимости применяется вместе с ними.',
      },
    ],
  },
  en: {
    summary:
      'Plasmapheresis for skin disease in Fergana and Kokand: when it may help and why Radeski Skin Clinic uses it only as part of comprehensive care.',
    body: enBody(),
    keyTakeaways: [
      'Plasmapheresis separates plasma with a device; it does not cure the cause, but may lower inflammatory activity',
      'Used only when a doctor indicates it for selected dermatological conditions',
      'A session usually lasts 60–120 minutes; session count is individual',
      'It does not replace primary therapy — combined care matters',
    ],
    tags: ['Plasmapheresis', 'Psoriasis', 'Dermatology', 'Combined therapy', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A chronic skin disease is flaring',
      'Topical care alone is not enough',
      'Eruptions are widespread or itch is severe',
      'An autoimmune or severe dermatological diagnosis is under discussion',
      'Self-treatment is not helping',
    ],
    faq: [
      {
        question: 'Does plasmapheresis fully cure the disease?',
        answer:
          'No. It does not remove the cause; in selected cases it may help reduce inflammation alongside primary therapy.',
      },
      {
        question: 'Is it used for every skin condition?',
        answer:
          'No. Only under strict indications and after medical assessment.',
      },
      {
        question: 'How long is one session?',
        answer:
          'Usually 60–120 minutes. The number of sessions depends on diagnosis and clinical context.',
      },
      {
        question: 'Does it replace phototherapy?',
        answer:
          'No. Plasmapheresis does not replace phototherapy or other core methods — it may be combined with them when appropriate.',
      },
    ],
  },
};

export const PLASMAPHERESIS_ARTICLE: Article = {
  id: 'art-plazmaferez-teri-kasalliklari',
  slug: 'plazmaferez-teri-kasalliklari',
  title: {
    uz: 'Teri kasalliklarida plazmaferez: qachon muolaja foydali bo‘lishi mumkin?',
    ru: 'Плазмаферез при кожных заболеваниях: когда процедура может быть полезна?',
    en: 'Plasmapheresis for Skin Diseases: When the Procedure May Help',
  },
  summary: {
    uz: PLASMAPHERESIS_ARTICLE_CATALOG.uz.summary,
    ru: PLASMAPHERESIS_ARTICLE_CATALOG.ru.summary,
    en: PLASMAPHERESIS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: PLASMAPHERESIS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: PLASMAPHERESIS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: PLASMAPHERESIS_ARTICLE_CATALOG.en.body.slice(0, 500),
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
