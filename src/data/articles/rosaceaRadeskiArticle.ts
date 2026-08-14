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
  return `## Radeski Skin Clinic da rozatseya davolash

Rozatseya — yuz terisining surunkali yallig‘lanish kasalligi. Ko‘pincha barqaror qizarish, isitma to‘lqinlari, kengaygan tomirlar, achishish, sezgirlik va ba’zan yallig‘langan toshmalar bilan namoyon bo‘ladi.

Bu faqat “kosmetik nuqson” emas. Kasallik vaqti-vaqti bilan kuchayishi, keyin esa tinch davrga o‘tishi mumkin. Shu bois aniq tashxis va shaxsiy reja belgilarni nazorat qilishga, terini uzoqroq tinch saqlashga yordam beradi.

Radeski Skin Clinic da yondashuv belgilarga, teri holatiga va kuchayishni qo‘zg‘atuvchi omillarga qarab tanlanadi — yagona “hammaga bir xil” sxema yo‘q.

## Rozatseya qanday ko‘rinadi?

Belgilar odamdan odamga farq qiladi. Eng ko‘p uchraydiganlari:

- mag‘iz, burun, iyag va yuz markazining doimiy qizarishi;
- to‘satdan qizarish va isitma to‘lqini;
- achishish yoki ignadek sanchish;
- terining oshgan sezgirligi;
- ko‘zga tashlanadigan kengaygan tomirlar — kuperoz;
- husnbuzarga o‘xshash yallig‘lanish elementlari;
- quruqlik va ta’sirlanish;
- shish;
- ba’zi hollarda terining qalinlashishi.

Bir bemorda asosan qizarish ustun bo‘lishi, boshqasida tomir to‘ri yoki yallig‘lanish toshmalari ustun bo‘lishi mumkin. Shuning uchun universal davolash yo‘q: reja **aynan sizdagi manzaraga** qarab tuziladi.

## Nega paydo bo‘ladi?

Aniq sabab hali to‘liq aniqlanmagan. Rivojlanish va kuchayishga turli omillar ta’sir qilishi mumkin.

Ko‘p uchraydigan qo‘zg‘atuvchilar:

- quyosh nuri;
- issiqlik va qizib ketish;
- keskin harorat o‘zgarishi;
- achchiq ovqat;
- spirtli ichimliklar;
- stress;
- kuchli jismoniy yuklama;
- ba’zi kosmetika vositalari;
- issiq ichimliklar.

Har kishida “o‘z ro‘yxati” bo‘ladi. Belgilarni qisqa kundalikda yozib borish — aynan sizda nima kuchaytirishini aniqlashga yordam beradi.

## Qanday davolanadi?

Asosiy maqsad: belgilarni nazorat qilish, yallig‘lanish va qizarishni kamaytirish, kuchayishlar sonini tushirish va uzoq tinch davrga erishish.

Klinik manzaraga qarab shifokor bir necha yo‘nalishni birga qo‘llashi mumkin.

### Dori terapiyasi

Yallig‘lanish shaklida tashqi vositalar belgilanishi mumkin: masalan, ivermektin, metronidazol yoki azelain kislotasi asosidagi preparatlar. Ayrim hollarda tizimli yallig‘lanishga qarshi vositalar qo‘llanadi. Tanlov belgilarning turi va og‘irligiga bog‘liq.

Antibiotik yoki retseptli dorilarni o‘zingiz boshlash mumkin emas.

### IPL-terapiya

Asosiy muammo barqaror qizarish va tomir o‘zgarishlari bo‘lsa, shifokor IPL (intensiv impulsli yorug‘lik) ni ko‘rib chiqishi mumkin.

IPL qizarish va ko‘rinadigan tomirlarni yumshatishga yordam berishi mumkin. Seanslar soni teri holati baholangandan keyin individual belgilanadi.

### Tomir lazeri

Aniq ko‘rinadigan kengaygan tomirlarda qon-tomir lazer texnologiyalari qo‘llanilishi mumkin. Ular patologik kengaygan tomirlarga ta’sir qilib, ularning ko‘rinishini kamaytirishga yordam beradi.

Apparat va parametrlar tomir turi, teri fototipi va boshqa shaxsiy xususiyatlarga bog‘liq.

Bunday muolajalar terining tomir kasalliklari bilan ishlash tajribasiga ega mutaxassis tomonidan o‘tkazilishi kerak. Noto‘g‘ri parametr kuyish, pigment o‘zgarishi yoki chandiq xavfini oshiradi.

## Rozatseya da uy parvarishi

To‘g‘ri uy parvarishi — davolashning muhim qismi.

Tavsiya etiladi:

- **Mayin tozalash.** Teri to‘sig‘ini buzadigan agressiv yuvish vositalaridan voz keching.
- **Namlash.** To‘siqni saqlash quruqlik va ta’sirlanishni kamaytirishga yordam beradi.
- **Har kuni quyoshdan himoya.** Ultrabinafsha nurlanish kuchayishni qo‘zg‘atishi mumkin — SPF muntazam ishlatilishi kerak.

Ta’sir qiluvchi muolajalarni kamaytiring. Ko‘p sonli faol kremlar, qattiq skrablar yoki agressiv pilinglarni shifokorsiz o‘zingiz boshlamang.

Dermatolog sezgirlik va belgilangan davolashni hisobga olib, shaxsiy parvarish sxemasini tanlaydi.

## Rozatseyani butunlay “davolab yuborish” mumkinmi?

Rozatseya surunkali kasalliklar qatoriga kiradi. Davolashning asosiy yo‘nalishi — belgilarni nazorat qilish va tinch davrni saqlash; “bir umrga yo‘qoladi” degan va’da odatda haqiqatga mos kelmaydi.

Har bemorda kechishi turlicha. Eng yaxshi natija ko‘pincha dori terapiyasi, to‘g‘ri parvarish va kerak bo‘lsa apparat muolajalarining **birgalikda** ishlashi bilan keladi.

## Nega aynan dermatolog kerak?

Yuz qizarishi har doim rozatseya degani emas. O‘xshash belgilar boshqa teri kasalliklarida ham bo‘lishi mumkin.

Dermatolog qizarish xususiyatini, tomirlar, yallig‘lanish elementlari, sezgirlik va boshqa belgilarni baholaydi — so‘ng mos taktika tanlaydi.

Ayniqsa murojaat qiling, agar qizarish doimiy bo‘lib qolsa, tomirlar ko‘rinsa, achishish yoki yallig‘lanish toshmalari paydo bo‘lsa, belgilar asta-sekin kuchaysa.

## Radeski Skin Clinic dagi yondashuv

Biz rozatseyaga kompleks qaraymiz.

Konsultatsiyada shifokor:

- teri holatini baholaydi;
- asosiy belgilarni aniqlaydi;
- kuchaytirishi mumkin bo‘lgan omillarni izlaydi;
- shaxsiy davolash rejasini tuzadi;
- kerak bo‘lsa apparat muolajalarini tavsiya qiladi;
- uy parvarishi bo‘yicha ko‘rsatma beradi;
- dinamikani kuzatadi.

Maqsad — qizarishni bir kunlik yashirish emas, belgilarni nazorat qilish va uzoq tinch davrni saqlash.

Doimiy yuz qizarishi, tomir to‘ri, achishish yoki yallig‘lanish toshmalari bezovta qilsa — Farg‘ona yoki Qo‘qondagi Radeski Skin Clinic da dermatolog konsultatsiyasiga yoziling.`;
}

function ruBody(): string {
  return `## Лечение розацеа в Radeski Skin Clinic

Розацеа — хроническое воспалительное заболевание кожи, которое чаще всего проявляется стойким покраснением лица, приливами жара, расширенными сосудами, жжением, чувствительностью и иногда воспалительными высыпаниями.

Это не только косметическая проблема. Заболевание может обостряться и снова переходить в более спокойный период. Поэтому точная диагностика и индивидуальный план помогают контролировать симптомы и дольше удерживать кожу в хорошем состоянии.

В Radeski Skin Clinic лечение подбирается по проявлениям, состоянию кожи и факторам, которые провоцируют обострения — универсальной схемы «для всех» нет.

## Как проявляется розацеа?

Картина у разных людей разная. Чаще всего встречаются:

- стойкое покраснение щёк, носа, подбородка и центра лица;
- внезапные приливы жара и покраснения;
- жжение или покалывание;
- повышенная чувствительность кожи;
- видимые расширенные сосуды — купероз;
- воспалительные элементы, похожие на прыщи;
- сухость и раздражение;
- отёчность;
- в части случаев — утолщение кожи.

У одного человека на первом плане покраснение, у другого — сосудистая сетка или воспалительные высыпания. Поэтому универсального лечения нет: терапия строится **под конкретные проявления**.

## Почему возникает розацеа?

Точная причина до конца не установлена. На развитие и обострения могут влиять разные факторы.

К частым триггерам относят:

- солнце;
- жару и перегрев;
- резкие перепады температуры;
- острую пищу;
- алкоголь;
- стресс;
- интенсивные нагрузки;
- некоторые косметические средства;
- горячие напитки.

Набор триггеров индивидуален. Короткий дневник симптомов помогает понять, что именно провоцирует обострение у конкретного человека.

## Как лечат розацеа?

Главная задача — контролировать проявления, уменьшить воспаление и покраснение, снизить частоту обострений и добиться длительной ремиссии.

В зависимости от картины врач может сочетать несколько подходов.

### Медикаментозное лечение

При воспалительной форме назначают наружные средства — например, на основе ивермектина, метронидазола или азелаиновой кислоты. В части случаев используют системные противовоспалительные препараты. Выбор зависит от характера и выраженности симптомов.

Самостоятельно начинать антибиотики или другие рецептурные средства не следует.

### IPL-терапия

Если на первом плане стойкое покраснение и сосудистые изменения, врач может рассмотреть IPL (интенсивный импульсный свет).

IPL может уменьшать выраженность покраснения и видимых сосудов. Число процедур определяют индивидуально после оценки кожи.

### Лазерное лечение сосудов

При выраженных сосудистых изменениях применяют сосудистые лазерные технологии. Они воздействуют на патологически расширенные сосуды и помогают сделать их менее заметными.

Аппарат и параметры зависят от типа сосудов, фототипа кожи и других индивидуальных особенностей.

Такие процедуры должен выполнять специалист с опытом работы с сосудистыми заболеваниями кожи. Неверно подобранные параметры повышают риск ожогов, изменения пигмента и рубцов.

## Уход за кожей при розацеа

Домашний уход — важная часть лечения.

Рекомендуется:

- **Мягкое очищение.** Без агрессивных средств, которые ломают кожный барьер.
- **Увлажнение.** Поддержка барьера уменьшает сухость и раздражение.
- **Ежедневная защита от солнца.** Ультрафиолет может провоцировать обострение — SPF нужен регулярно.

Минимум раздражающих процедур. Не стоит самостоятельно наслаивать много активных средств, жёсткие скрабы или агрессивные пилинги без консультации врача.

Дерматолог подберёт схему ухода с учётом чувствительности кожи и уже назначенного лечения.

## Можно ли полностью вылечить розацеа?

Розацеа относится к хроническим заболеваниям. Лечение направлено прежде всего на контроль симптомов и поддержание ремиссии, а не на обещание окончательного «исчезновения навсегда».

У разных пациентов течение разное. Лучший результат чаще даёт сочетание лекарственной терапии, правильного ухода и — при необходимости — аппаратных процедур.

## Почему важно обратиться к дерматологу?

Покраснение лица не всегда означает розацеа. Похожие симптомы бывают и при других заболеваниях кожи.

Дерматолог оценивает характер покраснения, сосуды, воспалительные элементы, чувствительность и другие признаки — и уже затем выбирает тактику.

Особенно важно прийти к врачу, если покраснение становится постоянным, появляются сосуды, жжение, воспалительные высыпания или симптомы постепенно усиливаются.

## Как мы работаем в Radeski Skin Clinic

Мы придерживаемся комплексного подхода.

На консультации врач:

- оценивает состояние кожи;
- определяет основные проявления;
- выявляет возможные провоцирующие факторы;
- составляет индивидуальный план лечения;
- при необходимости рекомендует аппаратные процедуры;
- даёт рекомендации по домашнему уходу;
- контролирует динамику.

Цель — не на день спрятать покраснение, а помочь контролировать розацеа и удерживать длительную ремиссию.

Если беспокоит постоянное покраснение лица, сосудистая сетка, жжение или воспалительные высыпания, запишитесь к дерматологу в Radeski Skin Clinic в Фергане или Коканде.`;
}

function enBody(): string {
  return `## Rosacea care at Radeski Skin Clinic

Rosacea is a chronic inflammatory skin condition. It often shows as lasting facial redness, heat flushes, visible vessels, burning, sensitivity, and sometimes inflamed spots.

It is not “just a cosmetic issue.” Flares can come and go. A clear diagnosis and a personal plan help keep symptoms under control and the skin calmer for longer.

At Radeski Skin Clinic the approach follows your signs, your skin, and what tends to trigger flares — there is no one protocol for everyone.

## How does rosacea show?

It looks different from person to person. Common signs include:

- lasting redness of the cheeks, nose, chin, and centre of the face;
- sudden flushes of heat and colour;
- burning or stinging;
- higher skin sensitivity;
- visible dilated vessels (couperose);
- inflamed spots that can look like acne;
- dryness and irritation;
- puffiness;
- in some cases, thickening of the skin.

One person may mainly have redness; another, a vessel network or inflammatory spots. There is no universal treatment: care is built **around the picture in front of us**.

## Why does it happen?

The exact cause is not fully known. Many factors can influence how it starts and how it flares.

Frequent triggers include:

- sun;
- heat and overheating;
- sharp temperature swings;
- spicy food;
- alcohol;
- stress;
- intense exercise;
- some cosmetic products;
- hot drinks.

The mix is personal. A short symptom diary can show what actually flares *your* skin.

## How is rosacea treated?

The aim is to control signs, calm inflammation and redness, reduce how often flares happen, and support a longer quiet period.

Depending on the picture, a doctor may combine several methods.

### Medicines

For an inflammatory form, topical medicines may be used — for example, ivermectin, metronidazole, or azelaic acid. In some cases, systemic anti-inflammatory medicines are added. Choice depends on the type and strength of symptoms.

Do not start antibiotics or other prescription medicines on your own.

### IPL

If lasting redness and vessel changes lead the picture, the doctor may consider IPL (intense pulsed light).

IPL can soften redness and the look of vessels. The number of sessions is set after the skin is assessed — not from a fixed package.

### Vascular laser

For clearer dilated vessels, vascular laser technology may be used. It targets abnormally widened vessels and can make them less visible.

The device and settings depend on vessel type, skin phototype, and other personal factors.

This work should be done by someone experienced with vascular skin conditions. Wrong settings raise the risk of burns, pigment change, or scarring.

## Home care in rosacea

Daily care is part of treatment, not an extra.

Helpful habits:

- **Gentle cleansing.** Skip harsh washes that break the skin barrier.
- **Moisturise.** A stronger barrier means less dryness and sting.
- **Daily sun protection.** UV light can trigger flares — SPF belongs in the routine.

Keep irritating procedures to a minimum. Do not layer many actives, harsh scrubs, or aggressive peels without medical advice.

A dermatologist can build a home routine around your sensitivity and the treatment already prescribed.

## Can rosacea be fully “cured”?

Rosacea is a chronic condition. Care is aimed at controlling symptoms and keeping remission — not at promising it will vanish forever.

The course differs from person to person. The best results often come from medicines, sensible home care, and device-based sessions when they are indicated — **together**.

## Why see a dermatologist?

Redness on the face is not always rosacea. Similar signs appear in other skin diseases.

A dermatologist judges the type of redness, vessels, inflammatory spots, sensitivity, and other clues — then chooses a plan.

See a doctor especially if redness becomes constant, vessels show, burning or inflamed spots appear, or signs slowly get worse.

## How we work at Radeski Skin Clinic

We take a combined approach.

At the visit the doctor:

- assesses the skin;
- names the main signs;
- looks for likely triggers;
- builds a personal treatment plan;
- recommends device-based care if needed;
- gives home-care guidance;
- follows how the skin changes.

The goal is not to hide redness for a day, but to help you control rosacea and keep a longer quiet period.

If lasting facial redness, a vessel network, burning, or inflamed spots bother you, book a dermatologist visit at Radeski Skin Clinic in Fergana or Kokand.`;
}

export const ROSACEA_RADESKI_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Radeski Skin Clinic da rozatseya: tashxis, dori terapiyasi, IPL va tomir lazeri, sezgir teri parvarishi. Maqsad — belgilarni nazorat qilish va uzoq tinch davr.',
    body: uzBody(),
    keyTakeaways: [
      'Rozatseya — surunkali yallig‘lanish; “bir umrga yo‘qoladi” degan va’da odatda mos kelmaydi',
      'Belgilar turlicha — reja aynan sizdagi manzaraga qarab tuziladi',
      'Dori, parvarish va kerak bo‘lsa IPL yoki tomir lazeri birga ishlashi mumkin',
      'Yuz qizarishi har doim rozatseya emas — avval dermatolog tashxisi',
      'Agressiv skrab va pilinglarni shifokorsiz boshlamang',
    ],
    tags: [
      'Rozatseya',
      'Yuz qizarishi',
      'Kuperoz',
      'IPL',
      'Tomir lazeri',
      'Dermatolog',
      'Farg‘ona',
      'Qo‘qon',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Yuz qizarishi doimiy bo‘lib qolsa',
      'Tomir to‘ri ko‘rinsa',
      'Achishish yoki ignadek sanchish bo‘lsa',
      'Yallig‘lanish toshmalari chiqsa',
      'Belgilar asta-sekin kuchaysa',
      'O‘zingiz tanlagan krem va skrablar yordam bermasa',
    ],
    faq: [
      {
        question: 'Rozatseyani butunlay davolash mumkinmi?',
        answer:
          'Bu surunkali holat. Maqsad — belgilarni nazorat qilish va tinch davrni saqlash, “bir marta va abadiy yo‘qoladi” degan va’da emas.',
      },
      {
        question: 'IPL har doim kerakmi?',
        answer:
          'Yo‘q. IPL asosan barqaror qizarish va tomir o‘zgarishlarida ko‘rib chiqiladi. Yallig‘lanish shaklida avval dori reja kerak bo‘lishi mumkin.',
      },
      {
        question: 'Nima kuchaytiradi?',
        answer:
          'Quyosh, issiqlik, keskin harorat, achchiq ovqat, spirt, stress va ba’zi kosmetika. Ro‘yxat shaxsiy — kundalik yordam beradi.',
      },
      {
        question: 'Skrab va piling qilsa bo‘ladimi?',
        answer:
          'Qattiq skrab va agressiv pilinglar sezgir terini ta’sirlaydi. Avval dermatolog bilan kelishilgan mayin parvarish.',
      },
      {
        question: 'Qayerda ko‘rik o‘tkaziladi?',
        answer:
          'Radeski Skin Clinic da Farg‘ona va Qo‘qonda. Shifokor tashxis, reja, kerak bo‘lsa apparat usullari va uy parvarishini birga tuzadi.',
      },
    ],
  },
  ru: {
    summary:
      'Лечение розацеа в Radeski Skin Clinic: диагностика, медикаментозная терапия, IPL и лазер сосудов, уход за чувствительной кожей. Цель — контроль симптомов и длительная ремиссия.',
    body: ruBody(),
    keyTakeaways: [
      'Розацеа — хроническое воспаление; обещание «вылечить навсегда» обычно не соответствует реальности',
      'Проявления разные — план строится под вашу картину',
      'Лекарства, уход и при необходимости IPL или сосудистый лазер работают вместе',
      'Покраснение лица — не всегда розацеа: сначала диагноз дерматолога',
      'Жёсткие скрабы и агрессивные пилинги без врача лучше не начинать',
    ],
    tags: [
      'Розацеа',
      'Покраснение лица',
      'Купероз',
      'IPL',
      'Сосудистый лазер',
      'Дерматолог',
      'Фергана',
      'Коканд',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Покраснение лица стало постоянным',
      'Появилась сосудистая сетка',
      'Есть жжение или покалывание',
      'Выходят воспалительные элементы',
      'Симптомы постепенно усиливаются',
      'Самостоятельный уход и скрабы не помогают',
    ],
    faq: [
      {
        question: 'Можно ли полностью вылечить розацеа?',
        answer:
          'Это хроническое состояние. Лечение направлено на контроль симптомов и ремиссию, а не на обещание, что болезнь исчезнет навсегда.',
      },
      {
        question: 'IPL нужен всем?',
        answer:
          'Нет. IPL чаще рассматривают при стойком покраснении и сосудистых изменениях. При воспалительной форме сначала может понадобиться лекарственная схема.',
      },
      {
        question: 'Что провоцирует обострения?',
        answer:
          'Солнце, жара, перепады температуры, острая пища, алкоголь, стресс и часть косметики. Набор индивидуален — помогает дневник.',
      },
      {
        question: 'Можно ли делать скрабы и пилинги?',
        answer:
          'Жёсткие скрабы и агрессивные пилинги часто раздражают чувствительную кожу. Сначала мягкий уход, согласованный с дерматологом.',
      },
      {
        question: 'Где пройти консультацию?',
        answer:
          'В Radeski Skin Clinic в Фергане и Коканде. Врач собирает диагноз, план, при необходимости аппаратные методы и домашний уход.',
      },
    ],
  },
  en: {
    summary:
      'Rosacea care at Radeski Skin Clinic: diagnosis, medicines, IPL and vascular laser, care for sensitive skin. The aim is symptom control and a longer quiet period.',
    body: enBody(),
    keyTakeaways: [
      'Rosacea is chronic; a promise of a one-time “cure” is usually misleading',
      'Signs differ — the plan follows your picture, not a package',
      'Medicines, home care, and IPL or vascular laser when needed work together',
      'Facial redness is not always rosacea — start with a dermatologist',
      'Do not start harsh scrubs or aggressive peels on your own',
    ],
    tags: [
      'Rosacea',
      'Facial redness',
      'Couperose',
      'IPL',
      'Vascular laser',
      'Dermatologist',
      'Fergana',
      'Kokand',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Redness on the face has become constant',
      'A vessel network is visible',
      'There is burning or stinging',
      'Inflamed spots appear',
      'Signs slowly get worse',
      'Self-chosen creams and scrubs do not help',
    ],
    faq: [
      {
        question: 'Can rosacea be fully cured?',
        answer:
          'It is a chronic condition. Care aims to control symptoms and keep a quiet period — not to promise it will vanish forever.',
      },
      {
        question: 'Does everyone need IPL?',
        answer:
          'No. IPL is mainly considered for lasting redness and vessel changes. An inflammatory form may need medicines first.',
      },
      {
        question: 'What triggers flares?',
        answer:
          'Sun, heat, temperature swings, spicy food, alcohol, stress, and some cosmetics. The mix is personal — a short diary helps.',
      },
      {
        question: 'Are scrubs and peels allowed?',
        answer:
          'Harsh scrubs and aggressive peels often irritate sensitive skin. Start with a gentle routine agreed with a dermatologist.',
      },
      {
        question: 'Where can I be seen?',
        answer:
          'At Radeski Skin Clinic in Fergana and Kokand. The doctor builds diagnosis, a plan, device-based care if needed, and home guidance.',
      },
    ],
  },
};

export const ROSACEA_RADESKI_ARTICLE: Article = {
  id: 'art-rozatseya-davolash-radeski',
  slug: 'rozatseya-davolash-radeski',
  title: {
    uz: 'Rozatseya davolashi Radeski Skin Clinic da — yuz qizarishi va tomirlar',
    ru: 'Лечение розацеа в Radeski Skin Clinic — покраснение и сосуды на лице',
    en: 'Rosacea Treatment at Radeski Skin Clinic — Facial Redness and Vessels',
  },
  summary: {
    uz: ROSACEA_RADESKI_ARTICLE_CATALOG.uz.summary,
    ru: ROSACEA_RADESKI_ARTICLE_CATALOG.ru.summary,
    en: ROSACEA_RADESKI_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: ROSACEA_RADESKI_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: ROSACEA_RADESKI_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: ROSACEA_RADESKI_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-08-14',
  image: '/karusel/ipl.webp',
  images: {
    uz: '/karusel/ipl.webp',
    ru: '/karusel/ipl.webp',
    en: '/karusel/ipl.webp',
  },
  views: 0,
};
