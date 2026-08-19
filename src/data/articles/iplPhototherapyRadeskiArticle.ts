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
  return `## Radeski Skin Clinic da IPL-fototerapiya

**IPL** (Intense Pulsed Light — kuchli impulsli yorug‘lik) — dermatologiya va estetik tibbiyotda teridagi qizarish, pigment o‘zgarishlari va tomirli muammolarni tuzatish uchun qo‘llaniladigan zamonaviy usul.

Radeski Skin Clinic da IPL muolajalari zamonaviy uskuna bilan o‘tkaziladi va **avvalo dermatolog konsultatsiyasidan** keyin belgilanadi. Shifokor teri holatini baholaydi, ko‘rsatmalarni aniqlaydi va har bir bemor uchun individual parametrlarni tanlaydi.

## IPL nima?

IPL — teriga ma’lum spektrdagi kuchli yorug‘lik impulslari ta’sir qilishi. Yorug‘lik teridagi **melanin** va **gemoglobin** kabi nishonlar tomonidan yutiladi. Shu orqali pigmentli va tomirli o‘zgarishlarga ta’sir qilish mumkin.

Lazer odatda bitta to‘lqin uzunligi bilan ishlasa, IPL **keng spektrli** yorug‘likdan foydalanadi. Bu bir nechta fotoqarish belgilarini bir reja ichida qamrab olish imkonini beradi.

## IPL qanday muammolarda qo‘llaniladi?

IPL-fototerapiya quyidagilarni tuzatishda yordam berishi mumkin:

- yuz qizarishi va tomirli belgilar;
- kuperoz;
- tomirli «yulduzchalar»;
- pigment dog‘lari;
- sepkil va fotoqarish belgilari;
- notekis teri rangi;
- quyoshdan zarar ko‘rgan terining ayrim belgilari;
- noxush tomirli o‘zgarishlar.

**Rozatseya**da IPL ba’zan kompleks davolashning bir qismi sifatida barqaror qizarish va ko‘rinadigan tomirlarni kamaytirish uchun ko‘rib chiqiladi. Aniq taktika shifokor tomonidan individual tanlanadi.

## Yuz uchun IPL

Yuz IPL-fototerapiyasi — teri holati va ko‘rinishini yaxshilash uchun eng ko‘p so‘raladigan xizmatlardan biri.

Kursdan keyin teri tekisroq ko‘rinishi, alohida pigment va tomir belgilari yengillashi, umumiy rang bir xilroq bo‘lishi mumkin.

Muhim: IPL **barcha teri kasalliklariga** universal yechim emas. Muolajadan oldin o‘zgarish sababini aniqlash va qarshi ko‘rsatmalarni istisno qilish kerak.

## Kuperoz va tomir to‘rigida IPL

Kuperoz — ko‘pincha yonoq, burun va iyakda ko‘rinadigan kengaygan yuzaki tomirlar bilan namoyon bo‘ladi.

IPL yorug‘lik energiyasi tomirdagi gemoglabinga ta’sir qilib, ayrim yuzaki tomir belgilarining ifodasini kamaytirishga yordam beradi.

Seanslar soni tomir to‘rigining og‘irligi, teri xususiyatlari va tanlangan davolash parametrlariga bog‘liq.

## Pigmentatsiyada IPL

IPL ba’zi **yuzaki pigment** va fotoqarish belgilarini tuzatishda qo‘llanilishi mumkin.

Yorug‘lik melanin tomonidan yutiladi; pigment keyin terining tabiiy yangilanish jarayonida asta-sekin chiqib ketadi.

Lekin **har qanday** dog‘ IPL bilan olib tashlanmaydi. Muolajadan oldin shifokor dog‘ni ko‘rib, xarakterini aniqlashi shart. Shubhali pigmentli o‘smalar boshqa diagnostika va yondashuvni talab qiladi.

## Rozatseyada IPL

Rozatseya — barqaror qizarish, kengaygan tomirlar va yuqori sezgirlik bilan kechishi mumkin.

IPL kompleks yondashuvda tomir komponenti va qizarishni kamaytirish uchun qo‘shimcha usul bo‘lishi mumkin.

Rozatseya faqat bitta apparat muolajasi bilan emas, balki kuchaytiruvchi omillarni aniqlash, teri to‘sig‘ini tiklash va kerak bo‘lsa dori terapiyasi bilan ham davolanadi.

## Radeski Skin Clinic da IPL qanday o‘tadi?

Muolajadan oldin shifokor terini ko‘rib chiqadi.

Asosiy bosqichlar:

1. ko‘rik va ko‘rsatmalarni aniqlash;
2. fototip va teri xususiyatlarini baholash;
3. qarshi ko‘rsatmalarni istisno qilish;
4. terini tozalash;
5. individual IPL parametrlarini tanlash;
6. muolajani o‘tkazish;
7. muolajadan keyingi parvarish bo‘yicha tavsiyalar.

Ta’sir vaqtida issiqlik, yengil ignadek ta’sir yoki qisqa «qarsak» his qilinishi mumkin — bu odatiy holat.

## IPL dan keyin nima bo‘ladi?

Muolajadan so‘ng vaqtinchalik qizarish, issiqlik hissi yoki yengil sezgirlik bo‘lishi mumkin.

Pigment bilan ishlaganda alohida dog‘lar vaqtincha to‘qroq ko‘rinishi, keyin asta-sekin qatlam bo‘lib ajralishi mumkin.

IPL dan keyin **quyosh nurlaridan himoya** (SPF) va shifokor tavsiyalariga rioya qilish ayniqsa muhim.

## Necha seans kerak?

Seanslar soni **individual** belgilanadi.

Ba’zi estetik vazifalarda birinchi muolajadan keyin ham yaxshilanish sezilishi mumkin, lekin barqaror natija uchun ko‘pincha kurs tavsiya etiladi.

Seanslar orasidagi interval shifokor tomonidan ishlov beriladigan zona, teri holati va davolash dasturiga qarab tanlanadi.

## Kimga IPL qilinmaydi?

IPLning qarshi ko‘rsatmalari bor. Shifokorga barcha kasalliklar, qabul qilinayotgan dorilar, yaqinda olingan zagar va so‘nggi kosmetologik muolajalar haqida aytib bering.

Ba’zan muolaja vaqtincha kechiktiriladi, masalan:

- ishlov beriladigan zonada faol yallig‘lanish yoki infeksiya bo‘lsa;
- yangi zagar bo‘lsa;
- teri shikastlangan bo‘lsa;
- ayrim kasalliklar va holatlar mavjud bo‘lsa;
- fotosensitivlik keltirib chiqaradigan dorilar qabul qilinsa;
- ishlov beriladigan joyda shubhali teri o‘smalari bo‘lsa.

IPL o‘tkazish mumkinligi yoki yo‘qligi faqat konsultatsiyadan keyin shifokor tomonidan hal qilinadi.

## Nega IPL ni dermatolog o‘tkazishi kerak?

Qizarish, pigment va tomir o‘zgarishlari turli kasalliklarning belgisi bo‘lishi mumkin. Shuning uchun faqat tashqi belgiga emas, balki **sababiga** e’tibor berish muhim.

Radeski Skin Clinic da IPL **tibbiy muolaja** sifatida ko‘riladi — avval teri baholanadi, kerak bo‘lsa qo‘shimcha diagnostika yoki boshqa usul tanlanadi.

## Radeski Skin Clinic da IPL

Biz har bir bemorda individual yondashuvni ustuvor qilamiz. IPL dan oldin shifokor teri holatini baholaydi, ko‘rsatmalarni aniqlaydi va fototip hamda shaxsiy xususiyatlarni hisobga olgan holda parametrlarni tanlaydi.

Agar kuperoz, yuz qizarishi, tomir to‘ri, pigment dog‘lari yoki fotoqarish belgilari bezovta qilsa, Radeski Skin Clinic dermatologiga yoziling.

Muammoning nomiga qarab emas, avvalo **teri o‘zgarishining sababini** aniqlash muhim — shundan keyin to‘g‘ri va xavfsiz davolash tanlanadi.`;
}

function ruBody(): string {
  return `## IPL-фототерапия в Radeski Skin Clinic

**IPL** (Intense Pulsed Light — интенсивный импульсный свет) — современная технология, которая применяется в дерматологии и эстетической медицине для коррекции сосудистых и пигментных изменений кожи, покраснений, фотоповреждения и ряда других эстетических проблем.

В Radeski Skin Clinic IPL-процедуры проводятся на современном оборудовании **после предварительной консультации врача-дерматолога**. Специалист оценивает состояние кожи, определяет показания и подбирает индивидуальные параметры процедуры.

## Что такое IPL?

IPL — это технология, при которой на кожу воздействуют интенсивными световыми импульсами определённого спектра. Свет поглощается мишенями в коже — в частности **меланином** и **гемоглобином**, — благодаря чему можно воздействовать на пигментированные и сосудистые образования.

В отличие от лазера, IPL использует **широкий спектр** света, что позволяет работать сразу с несколькими проявлениями фотоповреждения кожи.

## Какие проблемы кожи можно корректировать с помощью IPL?

IPL-фототерапия может применяться для коррекции:

- покраснения кожи и сосудистых проявлений;
- купероза;
- сосудистых «звёздочек»;
- пигментных пятен;
- веснушек и проявлений фотостарения;
- неровного тона кожи;
- некоторых признаков повреждения кожи солнцем;
- нежелательных сосудистых изменений.

При **розацеа** IPL также может использоваться как один из методов комплексной терапии для уменьшения стойкого покраснения и видимых сосудов. Тактика лечения подбирается индивидуально врачом.

## IPL для лица

IPL-фототерапия лица — одна из востребованных процедур для улучшения общего состояния и внешнего вида кожи.

После курса процедур кожа может выглядеть более ровной, уменьшается выраженность отдельных пигментных и сосудистых проявлений, а тон кожи становится визуально более однородным.

Важно понимать, что IPL **не является универсальным способом лечения всех кожных заболеваний**. Перед процедурой необходимо определить причину изменения кожи и исключить противопоказания.

## IPL при куперозе и сосудистой сетке

Купероз проявляется расширенными поверхностными сосудами, чаще всего на щеках, носу и подбородке.

Световая энергия IPL воздействует на гемоглобин в сосуде, что позволяет уменьшать выраженность некоторых поверхностных сосудистых проявлений.

Количество процедур зависит от выраженности сосудистой сетки, особенностей кожи и выбранных параметров лечения.

## IPL при пигментации

IPL может применяться для коррекции некоторых видов **поверхностной пигментации** и фотоповреждения.

Световая энергия поглощается меланином, после чего пигмент постепенно выводится из зоны воздействия естественными процессами обновления кожи.

Однако **не любое** пигментное образование можно удалять с помощью IPL. Перед процедурой врач должен осмотреть образование и определить его характер. Подозрительные пигментные образования требуют другого диагностического подхода.

## IPL при розацеа

При розацеа кожа может характеризоваться стойким покраснением, расширенными сосудами и повышенной чувствительностью.

IPL может использоваться в составе **комплексного подхода** для уменьшения сосудистого компонента и выраженности покраснения.

При этом лечение розацеа не ограничивается одной процедурой: важно определить провоцирующие факторы, состояние кожного барьера и при необходимости подобрать медикаментозную терапию.

## Как проходит процедура IPL в Radeski Skin Clinic?

Перед процедурой врач проводит консультацию и оценивает состояние кожи.

Основные этапы:

1. осмотр и определение показаний;
2. оценка фототипа и особенностей кожи;
3. исключение противопоказаний;
4. очищение кожи;
5. подбор индивидуальных параметров IPL;
6. проведение процедуры;
7. рекомендации по уходу после процедуры.

Во время воздействия пациент может ощущать тепло, лёгкое покалывание или кратковременное пощипывание.

## Что происходит после IPL?

После процедуры возможно временное покраснение кожи, ощущение тепла и небольшая чувствительность.

При работе с пигментными проявлениями отдельные участки могут временно стать более тёмными, после чего пигмент постепенно отшелушивается.

После IPL особенно важно **защищать кожу от ультрафиолета** и соблюдать рекомендации врача.

## Сколько процедур IPL потребуется?

Количество процедур определяется **индивидуально**.

Для некоторых эстетических задач заметный эффект может появиться уже после первой процедуры, однако для достижения более выраженного результата часто рекомендуется курс.

Интервалы между процедурами врач подбирает с учётом зоны обработки, состояния кожи и выбранной программы лечения.

## Кому нельзя проводить IPL?

IPL имеет противопоказания. Перед процедурой необходимо сообщить врачу обо всех заболеваниях, принимаемых препаратах, недавнем загаре и проведённых косметологических процедурах.

В зависимости от ситуации процедура может быть временно отложена при:

- активных воспалительных или инфекционных процессах в зоне воздействия;
- свежем загаре;
- повреждении кожи;
- некоторых заболеваниях и состояниях;
- приёме определённых лекарственных препаратов;
- наличии подозрительных кожных образований в зоне обработки.

Окончательное решение о возможности проведения IPL принимает врач после консультации.

## Почему IPL лучше проводить у врача-дерматолога?

Покраснение, пигментация и сосудистые изменения могут быть проявлениями **разных заболеваний**. Поэтому важно не просто воздействовать на внешний симптом, а правильно определить его причину.

В Radeski Skin Clinic IPL рассматривается как **медицинская процедура**, которая проводится после оценки состояния кожи. При необходимости врач может назначить дополнительную диагностику или выбрать другой метод лечения.

## IPL в Radeski Skin Clinic

Мы уделяем особое внимание индивидуальному подбору лечения. Перед IPL врач оценивает состояние кожи, определяет показания и подбирает параметры процедуры с учётом фототипа и особенностей пациента.

Если вас беспокоят купероз, покраснение лица, сосудистая сетка, пигментные пятна или признаки фотостарения, запишитесь на консультацию к дерматологу Radeski Skin Clinic.

Не выбирайте процедуру только по названию проблемы — **сначала важно установить причину изменения кожи**.`;
}

function enBody(): string {
  return `## IPL Phototherapy at Radeski Skin Clinic

**IPL** (Intense Pulsed Light) is a modern technology used in dermatology and aesthetic medicine to improve vascular and pigment changes, facial redness, sun-related skin damage, and several other cosmetic concerns.

At Radeski Skin Clinic, IPL is performed on up-to-date equipment **after a dermatologist consultation**. The physician assesses the skin, confirms indications, and selects individual treatment parameters.

## What is IPL?

IPL delivers intense light pulses within a defined spectrum to the skin. The light is absorbed by targets such as **melanin** and **hemoglobin**, which allows treatment of pigment-related and vascular changes.

Unlike a laser that usually works at one wavelength, IPL uses a **broad spectrum** and can address multiple signs of photo-damage within one treatment plan.

## Which skin concerns can IPL help with?

IPL phototherapy may be used to improve:

- facial redness and visible vessels;
- couperose;
- spider veins;
- pigment spots;
- freckles and signs of photoaging;
- uneven skin tone;
- some sun-damage changes;
- unwanted superficial vascular marks.

In **rosacea**, IPL may be considered as part of a combined approach to reduce persistent redness and visible vessels. The exact strategy is chosen individually by the doctor.

## IPL for the face

Facial IPL is one of the most requested options for improving overall skin appearance.

After a course, skin may look more even, individual pigment and vascular signs may soften, and tone may appear more uniform.

IPL is **not a universal treatment for every skin condition**. The cause of the change must be clarified and contraindications ruled out before treatment.

## IPL for couperose and vascular networks

Couperose shows up as dilated superficial vessels, most often on the cheeks, nose, and chin.

IPL light energy acts on hemoglobin in the vessel and can reduce the appearance of some superficial vascular changes.

The number of sessions depends on how pronounced the network is, skin characteristics, and the chosen settings.

## IPL for pigmentation

IPL can help with selected **superficial pigment** and photo-damage changes.

Light is absorbed by melanin; pigment is then gradually cleared through the skin’s natural renewal process.

However, **not every** dark spot should be treated with IPL. The doctor must examine the lesion and define its nature first. Suspicious pigmented lesions need a different diagnostic pathway.

## IPL in rosacea

Rosacea may involve lasting redness, visible vessels, and increased sensitivity.

IPL can be part of a **broader plan** to reduce the vascular component and the look of redness.

Rosacea care is not limited to one device session: triggers, barrier repair, and medicines when needed all matter.

## How IPL is performed at Radeski Skin Clinic

The doctor reviews the skin before treatment.

Main steps:

1. examination and indication check;
2. phototype and skin assessment;
3. exclusion of contraindications;
4. skin cleansing;
5. individual IPL parameter selection;
6. treatment;
7. aftercare advice.

During treatment, warmth, tingling, or brief snapping sensations are common and usually mild.

## What happens after IPL?

Temporary redness, warmth, or mild sensitivity may occur after a session.

When treating pigment, some spots may look darker for a short time before they gradually flake away.

Strict **UV protection** (SPF) and following medical advice are essential after IPL.

## How many IPL sessions are needed?

The number of sessions is set **individually**.

Some aesthetic goals may already look better after the first visit, but a course is often recommended for a more stable result.

Intervals between sessions depend on the treated area, skin condition, and the chosen programme.

## Who should not have IPL?

IPL has contraindications. Tell the doctor about illnesses, medicines, recent tanning, and recent cosmetic procedures.

Treatment may be postponed when, for example:

- there is active inflammation or infection in the treated area;
- tanning is recent;
- the skin is broken or injured;
- certain diseases or conditions apply;
- photosensitising drugs are being taken;
- suspicious lesions are present in the treatment zone.

Whether IPL is appropriate is decided only after consultation.

## Why should IPL be done by a dermatologist?

Redness, pigment, and vascular changes can belong to **different conditions**. Treating the look alone without understanding the cause is risky.

At Radeski Skin Clinic, IPL is treated as a **medical procedure** after skin assessment. Further diagnostics or another method may be chosen when needed.

## IPL at Radeski Skin Clinic

We focus on individual planning. Before IPL, the doctor evaluates the skin, confirms indications, and adjusts parameters to phototype and personal factors.

If couperose, facial redness, vascular networks, pigment spots, or photoaging signs concern you, book a dermatology consultation at Radeski Skin Clinic.

Do not choose a procedure by the name of the problem alone — **find the cause of the skin change first**.`;
}

export const IPL_PHOTOTHERAPY_RADESKI_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Radeski Skin Clinic da IPL-fototerapiya: qizarish, kuperoz, pigment dog‘lari va tomir o‘zgarishlarini qanday tuzatish mumkin — ko‘rsatmalar, jarayon, seanslar soni va qarshi ko‘rsatmalar.',
    body: uzBody(),
    keyTakeaways: [
      'IPL — keng spektrli impulsli yorug‘lik; melanin va gemoglobin orqali pigment va tomirlarga ta’sir qiladi',
      'Kuperoz, qizarish, dog‘lar va fotoqarish belgilarida ko‘rib chiqiladi — avvalo dermatolog ko‘rigi shart',
      'Har qanday dog‘ IPL bilan emas; shubhali o‘smalar boshqa tekshiruv talab qiladi',
      'Seanslar soni individual; muolajadan keyin SPF va shifokor tavsiyalari muhim',
    ],
    tags: [
      'IPL',
      'IPL fototerapiya',
      'Kuperoz',
      'Pigmentatsiya',
      'Rozatseya',
      'Tomir yulduzchalari',
      'Fotoqarish',
      'Farg‘ona',
      'Qo‘qon',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Yuzda doimiy qizarish yoki tomir to‘ri paydo bo‘lsa',
      'Pigment dog‘lari tez o‘zgarayotgan bo‘lsa',
      'Dog‘ning xarakteri noaniq yoki shubhali ko‘rinsa',
      'Rozatseya belgilari kuchayayotgan bo‘lsa',
      'IPL kursini boshlashdan oldin ko‘rsatma va qarshi ko‘rsatmalarni bilmoqchi bo‘lsangiz',
    ],
    faq: [
      {
        question: 'IPL lazerdan nimasi bilan farq qiladi?',
        answer:
          'Lazer odatda bitta to‘lqin uzunligida ishlaydi. IPL kengroq spektrdan foydalanadi va bir reja ichida pigment, tomirlar va umumiy teri holatiga ta’sir qilishi mumkin.',
      },
      {
        question: 'Bir seans yetadimi?',
        answer:
          'Ba’zan birinchi seansdan keyin yaxshilanish seziladi, lekin barqaror natija uchun ko‘pincha kurs kerak. Aniq son shifokor bahosidan keyin belgilanadi.',
      },
      {
        question: 'Har qanday dog‘ni IPL bilan olib tashlash mumkinmi?',
        answer:
          'Yo‘q. Shifokor avval dog‘ni ko‘rib, xavfsiz ekanini tasdiqlashi kerak. Shubhali o‘smalar boshqa usul bilan tekshiriladi.',
      },
      {
        question: 'Rozatseya uchun IPL yetarlimi?',
        answer:
          'Ko‘pincha yo‘q — rozatseya kompleks davolanadi: parvarish, kuchaytiruvchi omillarni nazorat qilish, kerak bo‘lsa dori va IPL yoki tomir lazeri birgalikda.',
      },
      {
        question: 'Muolajadan keyin nima qilish kerak?',
        answer:
          'Har kuni SPF ishlating, quyoshga chiqishni cheklang va shifokor bergan parvarish rejasiga rioya qiling. Pigment bilan ishlaganda dog‘lar vaqtincha to‘qroq bo‘lishi mumkin — bu odatiy jarayon.',
      },
    ],
  },
  ru: {
    summary:
      'IPL-фототерапия в Radeski Skin Clinic: эффективное решение для покраснений, пигментации и сосудистых изменений — показания, этапы процедуры, курс лечения и противопоказания.',
    body: ruBody(),
    keyTakeaways: [
      'IPL использует широкий спектр света и воздействует на меланин и гемоглобин в коже',
      'Помогает при куперозе, покраснении, пигментных пятнах и признаках фотостарения — после консультации дерматолога',
      'Не любое пигментное образование можно лечить IPL; подозрительные элементы требуют другой диагностики',
      'Число процедур индивидуально; после IPL критичны SPF и рекомендации врача',
    ],
    tags: [
      'IPL',
      'IPL фототерапия',
      'Купероз',
      'Пигментация',
      'Розацеа',
      'Сосудистые звёздочки',
      'Фотостарение',
      'Фергана',
      'Коканд',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Есть стойкое покраснение лица или сосудистая сетка',
      'Пигментные пятна быстро меняются',
      'Характер пятна неясен или вызывает сомнения',
      'Симптомы розацеа усиливаются',
      'Нужна оценка показаний и противопоказаний перед курсом IPL',
    ],
    faq: [
      {
        question: 'Чем IPL отличается от лазера?',
        answer:
          'Лазер обычно работает на одной длине волны. IPL использует более широкий спектр и может воздействовать на пигмент, сосуды и общее состояние кожи в рамках одного плана.',
      },
      {
        question: 'Достаточно ли одной процедуры?',
        answer:
          'Иногда улучшение заметно уже после первого сеанса, но для устойчивого результата часто нужен курс. Точное число определяет врач после осмотра.',
      },
      {
        question: 'Можно ли удалить любое пятно с помощью IPL?',
        answer:
          'Нет. Врач должен осмотреть образование и подтвердить безопасность процедуры. Подозрительные элементы требуют другого обследования.',
      },
      {
        question: 'Хватит ли IPL при розацеа?',
        answer:
          'Обычно нет — розацеа лечат комплексно: уход, контроль провоцирующих факторов, при необходимости медикаменты и IPL или сосудистый лазер.',
      },
      {
        question: 'Что делать после процедуры?',
        answer:
          'Ежедневно использовать SPF, ограничить солнечное воздействие и следовать рекомендациям врача. При работе с пигментом участки могут временно темнеть — это нормальный этап.',
      },
    ],
  },
  en: {
    summary:
      'IPL phototherapy at Radeski Skin Clinic: a medical approach to redness, pigmentation, and vascular changes — indications, procedure steps, course length, and contraindications.',
    body: enBody(),
    keyTakeaways: [
      'IPL uses broad-spectrum pulsed light acting on melanin and hemoglobin in the skin',
      'May help couperose, redness, pigment spots, and photoaging signs — after dermatologist assessment',
      'Not every pigmented lesion is suitable for IPL; suspicious spots need separate evaluation',
      'Session count is individual; SPF and medical aftercare are essential after IPL',
    ],
    tags: [
      'IPL',
      'IPL phototherapy',
      'Couperose',
      'Pigmentation',
      'Rosacea',
      'Spider veins',
      'Photoaging',
      'Fergana',
      'Kokand',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'You have lasting facial redness or a visible vascular network',
      'Pigment spots are changing quickly',
      'A spot looks unclear or suspicious',
      'Rosacea symptoms are worsening',
      'You want indications and contraindications checked before starting IPL',
    ],
    faq: [
      {
        question: 'How is IPL different from laser?',
        answer:
          'A laser usually uses one wavelength. IPL uses a broader spectrum and can address pigment, vessels, and overall skin appearance within one plan.',
      },
      {
        question: 'Is one session enough?',
        answer:
          'Some improvement may appear after the first visit, but a course is often needed for a stable result. The doctor sets the exact number after examination.',
      },
      {
        question: 'Can IPL remove any dark spot?',
        answer:
          'No. The doctor must examine the lesion and confirm it is safe to treat. Suspicious lesions need a different work-up.',
      },
      {
        question: 'Is IPL alone enough for rosacea?',
        answer:
          'Usually not — rosacea is managed with care, trigger control, medicines when needed, and IPL or vascular laser as part of a broader plan.',
      },
      {
        question: 'What should I do after treatment?',
        answer:
          'Use SPF daily, limit sun exposure, and follow your doctor’s aftercare plan. Pigment spots may temporarily darken before they flake — that can be normal.',
      },
    ],
  },
};

export const IPL_PHOTOTHERAPY_RADESKI_ARTICLE: Article = {
  id: 'art-ipl-fototerapiya-radeski',
  slug: 'ipl-fototerapiya-radeski',
  title: {
    uz: 'IPL-fototerapiya Radeski Skin Clinic da — qizarish, pigment va tomirlar',
    ru: 'IPL-фототерапия в Radeski Skin Clinic: эффективное решение для покраснений, пигментации и сосудистых изменений',
    en: 'IPL Phototherapy at Radeski Skin Clinic — Redness, Pigment, and Vascular Changes',
  },
  summary: {
    uz: IPL_PHOTOTHERAPY_RADESKI_ARTICLE_CATALOG.uz.summary,
    ru: IPL_PHOTOTHERAPY_RADESKI_ARTICLE_CATALOG.ru.summary,
    en: IPL_PHOTOTHERAPY_RADESKI_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: IPL_PHOTOTHERAPY_RADESKI_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: IPL_PHOTOTHERAPY_RADESKI_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: IPL_PHOTOTHERAPY_RADESKI_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-08-19',
  image: '/karusel/ipl.webp',
  images: {
    uz: '/karusel/ipl.webp',
    ru: '/karusel/ipl.webp',
    en: '/karusel/ipl.webp',
  },
  views: 0,
};
