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

const COVER = '/services/in-ekcionnaya/biorev.jpg';

function uzBody(): string {
  return `## Biorevitalizatsiya nima?

**Biorevitalizatsiya** — Radeski Skin & Aesthetic Clinic da yosh o‘zgarishlarini oldini olish va tuzatish uchun qo‘llaniladigan samarali usul. Muolajaning maqsadi — terining qariyishining asosiy sababi bo‘lgan **suv balansini yo‘qotish** va namlikni ushlab turish qobiliyatining pasayishiga ta’sir qilishdir.

Preparatlar terini **gialuron kislotasi** bilan to‘ydiradi: teri namlanadi, gidrobalans tiklanadi. Natijada ingichka ajinlar va qatlamchalar tekislanadi, qariyish jarayonlari sekinlashadi, charchoq belgilari kamayadi.

![Biorevitalizatsiya — Radeski Skin Clinic](${COVER})

## Biorevitalizatsiyaning afzalliklari

### Tabiiy yoshartirish

Yoshi bilan hujayralardagi **elastin** va **kollagen** miqdori kamayadi, teri quruq va sarko‘z bo‘ladi. Preparatdagi gialuron kislotasi to‘qimalarga tushgach bu moddalarning sintezini rag‘batlantiradi, terini tabiiy yo‘l bilan ozuqa va namlik bilan ta’minlaydi.

### Tez natija

Ko‘rinadigan effekt deyarli darhol paydo bo‘ladi — **1–2 seansdan** keyin seziladi.

### Uzoq muddatli ta’sir

Muolaja ajinlar va quruq, sarko‘z yuz haqida uzoq vaqt unutish imkonini beradi. Natija **taxminan 6 oy** saqlanadi; to‘g‘ri parvarishda teri bir necha yil elastik va yangi ko‘rinishda qolishi mumkin.

## Biorevitalizatsiya qanday o‘tadi?

Gialuron kislotasi bilan biorevitalizatsiya — **inyeksion muolajalar kursi**. Ingichka, travmatik bo‘lmagan ignalar muayyan chuqurlikda yuz, qo‘llar, ko‘z qopog‘i va dekolte zonasidagi muammoli hududga kiradi.

Paydo bo‘lgan kichik teshiklar immunitetni qo‘shimcha rag‘batlantiradi va **regeneratsiya** jarayonlarini ishga tushiradi. Muolaja deyarli og‘riqsiz — zona oldindan anesteziya preparati bilan ishlov beriladi.

- **Bir seans:** 45–60 daqiqa
- **Kurs:** odatda 4–6 seans, shifokor belgilaydi
- **To‘liq kurs:** kamida yiliga bir marta; oraliqda massaj va boshqa qo‘llab-quvvatlovchi kosmetologik parvarish tavsiya etilishi mumkin

**Narx** tanlangan preparatga bog‘liq. Preparatni shifokor bemor terisini ko‘rib, xohlagan effektga qarab konsultatsiyada aniqlaydi.

## Ko‘rsatmalar

25 yoshda hujayralar foydali moddalarni kamroq ishlab chiqarishni boshlaydi — shu paytdan yosh o‘zgarishlarini oldini olish haqida o‘ylash ma’qul. Asosiy ko‘rsatmalar:

- ajinlar paydo bo‘lishi yoki ularning oldini olish;
- yosh o‘zgarishlari: sarko‘zlik, quruqlik;
- yuz rangining o‘zgarishi: xiralik, pigment dog‘lari, ko‘z ostidagi doiralar;
- kengaygan poralar, faol seboreya;
- plastik operatsiyalar, shlifovka yoki pilingdan keyin hujayralarni tiklash.

## Qarshi ko‘rsatmalar

Biorevitalizatsiya qachon qilinmaydi?

- qon va tomir kasalliklari;
- qandli diabet;
- onkologiya, sil kasalligi va boshqa og‘ir holatlar;
- gialuron kislotasiga individual sezuvchanlik;
- homiladorlik va emizish davri;
- virusli yoki ichak infeksiyalari.

**Yosh** nisbiy qarshi ko‘rsatma: 25 yoshgacha odatda tavsiya etilmaydi. Istisno — juda quruq teri bo‘lsa, 20–25 yoshda gidrobalansni tiklash mumkin.

**Tug‘ma dog‘lar** to‘g‘ridan-to‘g‘ri qarshi ko‘rsatma emas — igna tug‘ma ichiga kiritilmaydi, lekin ular orasiga qo‘yiladi.

## Effekt qancha davom etadi?

Gialuron kislotasining ta’siri **ikkinchi muolajadan** keyin aniq bo‘ladi; yakuniy effekt **to‘rtinchi seansdan** keyin erishiladi va **taxminan 6 oy** saqlanadi. Teri porlaydi, ancha elastik bo‘ladi — teri ichki qatlamlarida **gidrorezerv** hosil bo‘lib, dermani namlaydi va normallashtiradi.

Birinchi inyeksiyalardan keyin, ayniqsa isitish mavsumida, yuzda vaqtinchalik quruqlik bo‘lishi mumkin — bu odatiy holat. Bir necha kun ichida o‘tadi. Shuningdek, inyeksiya joylarida 1–3 kun davomida kichik papulalar (to‘pishlar) paydo bo‘lishi mumkin — ular ham o‘z-o‘zidan yo‘qoladi.

Ko‘pincha kurs **4–6 muolajadan** iborat, ular orasida **2 hafta** tanaffus qilinadi. Kurslar orasida qo‘llab-quvvatlovchi muolajalar shifokor tomonidan belgilanadi.

## Muolajadan keyingi parvarish

Maxsus tayyorgarlik talab qilinmaydi. Muolajadan keyin bir necha kun davomida yuzni travmalashi mumkin bo‘lgan narsalardan saqlaning:

- massaj;
- faol sport;
- sauna va hammom;
- 1–2 kun makiyajdan voz kechish;
- qo‘llar bilan yuzga tegmaslik — shifalanish tezlashadi, infeksiya xavfi kamayadi.

Kosmetolog bilan qanday parvarish vositalaridan foydalanish mumkinligini muhokama qiling — ba’zan odatdagi parvarish yetarli, ba’zan maxsus vositalar tavsiya etiladi.

## Biorevitalizatsiya narxi

Muolaja xavfsiz va to‘g‘ri o‘tishi uchun Radeski Skin Clinic ning malakali kosmetolog-shifokorlariga murojaat qiling. Ular:

1. terini batafsil baholaydi;
2. narx va preparatni aytadi;
3. seanslarni professional o‘tkazadi;
4. keyingi parvarish bo‘yicha tavsiyalar beradi.

Bog‘liq xizmatlar: [Inyeksion kosmetologiya](/uz/services/in-ekcionnaya-kosmetologiya), [Lazer biorevitalizatsiya](/uz/services/apparatnaya-kosmetologiya/lazer-biorev), [Narxlar](/uz/prices).`;
}

function ruBody(): string {
  return `## Что такое биоревитализация?

**Биоревитализация** в Radeski Skin & Aesthetic Clinic — эффективная методика для профилактики и коррекции возрастных изменений. Задача процедуры — воздействовать на основную причину старения эпидермиса: **потерю водного баланса** и способности удерживать влагу.

Препараты насыщают кожу **гиалуроновой кислотой**, которая увлажняет её и восстанавливает водный баланс. В результате морщинки и складки разглаживаются, процессы старения замедляются, а признаки увядания исчезают.

![Биоревитализация — Radeski Skin Clinic](${COVER})

## Преимущества биоревитализации

### Естественное омоложение

Концентрация эластина и коллагена в клетках с возрастом уменьшается, кожа становится сухой и дряблой. Попадая в ткани, гиалуроновая кислота запускает генерацию этих веществ, питает и увлажняет кожу естественным образом.

### Быстрый результат

Видимый эффект проявляется практически сразу — он будет заметен уже через **1–2 сеанса**.

### Продолжительный эффект

Процедура позволяет надолго забыть о морщинах и дряблом сухом лице. Результат сохраняется **до полугода**, а при правильном уходе кожа остаётся эластичной и свежей несколько лет.

## Как проходит биоревитализация

Биоревитализация гиалуроновой кислотой — **курс инъекционных процедур**, во время которых тонкие атравматичные иглы проникают точно в проблемную зону на определённую глубину в районе лица, рук, век и зоны декольте.

Образующиеся проколы дополнительно стимулируют иммунитет и запускают процессы **регенерации**. Операция практически безболезненна — зона заранее обрабатывается анестезирующим препаратом.

- **Один сеанс:** 45–60 минут
- **Курс:** обычно 4–6 процедур по назначению врача
- **Полный курс:** не реже одного раза в полгода; между курсами — поддерживающие процедуры (массаж и другой уход по рекомендации врача)

**Цена** формируется в зависимости от выбранного препарата. Препарат определяет доктор на очной консультации по состоянию кожи и желаемому эффекту.

## Показания

В 25 лет выработка клетками собственных полезных веществ начинает протекать менее активно — стоит задуматься о профилактике возрастных изменений. Основные показания:

- возникновение морщин или их профилактика;
- возрастные изменения: дряблость, сухость кожи;
- изменение цвета лица: потускнение, пигментные пятна, круги под глазами;
- расширенные поры, повышенная активность сальных желёз;
- восстановление клеток после пластических операций, шлифовки, пилингов.

## Противопоказания

Кому нельзя делать биоревитализацию?

- заболевания крови и сосудов;
- сахарный диабет;
- онкология, туберкулёз и другие тяжёлые состояния;
- индивидуальная непереносимость гиалуроновой кислоты;
- беременность и период лактации;
- вирусные или кишечные инфекции.

**Возраст** — относительное противопоказание: до 25 лет уколы обычно не делают. Исключение — очень сухая кожа, тогда можно восстановить гидробаланс в 20–25 лет.

**Родинки** сами по себе не являются противопоказанием — инъекции ставят между ними, но не непосредственно в родимое пятно.

## Длительность эффекта

Действие гиалуроновой кислоты очевидно уже после **второй процедуры**, окончательный эффект достигается после **четвёртой** и длится примерно **6 месяцев**. Кожа начинает сиять, становится более эластичной — создаётся **гидрорезерв**, который увлажняет и нормализует дерму.

После первых инъекций, особенно в отопительный период, может ощущаться сухость — это нормально и скоро пройдёт. Первые несколько дней на местах уколов могут быть бугорки-папулы — они исчезнут через 1–3 дня.

Чаще всего биоревитализация выполняется курсом из **4–6 процедур** с **двухнедельным** интервалом. Между курсами назначают поддерживающие процедуры.

## Уход после биоревитализации

Специальная подготовка не требуется. После процедуры несколько дней следует воздержаться от:

- массажа;
- активного спорта;
- бани и сауны;
- макияжа на пару дней;
- прикосновений к лицу руками — так заживление пройдёт быстрее, а риск инфицирования снизится.

Обсудите с косметологом, какими средствами можно пользоваться после биоревитализации.

## Сколько стоит биоревитализация?

Чтобы процедура прошла правильно без негативных последствий, обратитесь к квалифицированным врачам-косметологам Radeski Skin Clinic. Они внимательно продиагностируют, сообщат стоимость, профессионально выполнят сеансы и дадут рекомендации по дальнейшему уходу.

Связанные услуги: [Инъекционная косметология](/ru/services/in-ekcionnaya-kosmetologiya), [Лазерная биоревитализация](/ru/services/apparatnaya-kosmetologiya/lazer-biorev), [Цены](/ru/prices).`;
}

function enBody(): string {
  return `## What is biorevitalization?

**Biorevitalization** at Radeski Skin & Aesthetic Clinic is an effective method for preventing and correcting age-related skin changes. The procedure targets the main cause of epidermal aging: **loss of water balance** and the ability to retain moisture.

Products saturate the skin with **hyaluronic acid**, which hydrates it and restores water balance. As a result, fine lines and folds smooth out, aging processes slow down, and signs of fatigue fade.

![Biorevitalization — Radeski Skin Clinic](${COVER})

## Benefits of biorevitalization

### Natural rejuvenation

Elastin and collagen levels decrease with age, leaving skin dry and lax. Hyaluronic acid in the injectable products stimulates production of these substances and nourishes the skin naturally.

### Fast results

Visible improvement appears almost immediately — often after **1–2 sessions**.

### Long-lasting effect

The procedure helps you forget about wrinkles and dry, sagging skin for a long time. Results last **about six months**; with proper care, skin can remain elastic and fresh for years.

## How biorevitalization is performed

Hyaluronic acid biorevitalization is a **course of injection treatments**. Fine, minimally traumatic needles reach the problem area at a set depth on the face, hands, eyelids, and décolleté.

The micro-punctures additionally stimulate immunity and trigger **regeneration**. The procedure is virtually painless — the area is pre-treated with anesthetic.

- **One session:** 45–60 minutes
- **Course:** usually 4–6 sessions as prescribed
- **Full course:** at least once every six months; supportive care (massage and other treatments) may be recommended between courses

**Price** depends on the chosen product. The physician selects it at consultation based on skin condition and desired outcome.

## Indications

From age 25, cells produce beneficial substances less actively — preventive care becomes relevant. Main indications:

- wrinkles or their prevention;
- age-related laxity and dryness;
- dull complexion, pigmentation, under-eye circles;
- enlarged pores, increased sebaceous activity;
- recovery after plastic surgery, resurfacing, or peels.

## Contraindications

Biorevitalization should not be performed if you have:

- blood or vascular disease;
- diabetes;
- oncology, tuberculosis, or other serious conditions;
- individual intolerance to hyaluronic acid;
- pregnancy or breastfeeding;
- viral or intestinal infections.

**Age** is a relative contraindication: injections are usually not recommended before 25. Exception — very dry skin, when hydrobalance can be restored at 20–25.

**Moles** are not a direct contraindication — injections are placed between them, not into the mole itself.

## How long does the effect last?

Hyaluronic acid action is evident after the **second procedure**; final effect is reached after the **fourth** and lasts about **six months**. Skin glows and becomes more elastic — a **hydro-reserve** forms in deep layers, hydrating and normalizing the dermis.

Temporary dryness after the first injections, especially in heating season, is normal. Small papules at injection sites may appear for 1–3 days and resolve on their own.

Most often biorevitalization is done as **4–6 procedures** with a **two-week** interval. Supportive treatments are prescribed between courses.

## Aftercare

No special preparation is required. For several days after treatment avoid:

- massage;
- intense exercise;
- sauna and bath;
- makeup for a couple of days;
- touching the face with hands — healing is faster and infection risk is lower.

Discuss post-procedure skincare with your cosmetologist.

## Biorevitalization cost at Radeski

For safe, professional treatment, consult qualified cosmetologists at Radeski Skin Clinic. They will assess your skin, explain cost and product choice, perform sessions professionally, and provide aftercare guidance.

Related services: [Injection cosmetology](/en/services/in-ekcionnaya-kosmetologiya), [Laser biorevitalization](/en/services/apparatnaya-kosmetologiya/lazer-biorev), [Prices](/en/prices).`;
}

export const BIOREVITALIZATSIYA_RADESKI_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Biorevitalizatsiya — gialuron kislotasi bilan terini chuqur namlantirish va yoshartirish. Ko‘rsatmalar, qarshi ko‘rsatmalar, kurs, parvarish va Radeski Skin Clinic da narx.',
    body: uzBody(),
    keyTakeaways: [
      'Biorevitalizatsiya terining suv balansini va namligini tiklaydi',
      'Natija 1–2 seansdan keyin seziladi, 6 oygacha saqlanishi mumkin',
      'Kurs odatda 4–6 muolaja, 2 hafta interval bilan',
      '25 yoshdan keyin profilaktika va tuzatish uchun mos',
      'Narx va preparat shifokor konsultatsiyasida aniqlanadi',
    ],
    tags: [
      'Biorevitalizatsiya',
      'Gialuron kislotasi',
      'Inyeksion kosmetologiya',
      'Yuz yoshartirish',
      'Teri namlantirish',
      'Radeski Skin Clinic',
      'Farg\'ona',
    ],
    whenToSeeDoctor: [
      'Yuzda quruqlik, xiralik yoki ajinlar paydo bo‘lsa',
      'Pigment dog‘lari va kengaygan poralar bezovta qilsa',
      'Operatsiya yoki pilingdan keyin terini tiklash kerak bo‘lsa',
      'Biorevitalizatsiya qarshi ko‘rsatmalarini tekshirish uchun',
    ],
    faq: [
      {
        question: 'Biorevitalizatsiya necha seansdan iborat?',
        answer:
          'Ko‘pincha 4–6 muolaja, ular orasida taxminan 2 hafta. Aniq reja shifokor teri holatiga qarab tuziladi.',
      },
      {
        question: 'Effekt qachon ko‘rinadi?',
        answer:
          'Birinchi o‘zgarishlar 1–2 seansdan keyin seziladi. Yakuniy natija odatda to‘rtinchi muolajadan keyin shakllanadi.',
      },
      {
        question: '25 yoshgacha qilish mumkinmi?',
        answer:
          'Odatda 25 yoshgacha tavsiya etilmaydi. Juda quruq teri bo‘lsa, 20–25 yoshda istisno qilib gidrobalans tiklanishi mumkin.',
      },
      {
        question: 'Tug‘ma dog‘lar bilan qilish mumkinmi?',
        answer:
          'Tug‘malar to‘g‘ridan-to‘g‘ri qarshi ko‘rsatma emas — igna tug‘ma ichiga emas, atrofidagi hududga qo‘yiladi.',
      },
      {
        question: 'Muolajadan keyin nimalardan saqlanish kerak?',
        answer:
          'Bir necha kun massaj, sport, sauna, makiyaj va qo‘llar bilan yuzga tegishdan voz kechish tavsiya etiladi.',
      },
    ],
  },
  ru: {
    summary:
      'Биоревитализация — глубокое увлажнение и омоложение кожи гиалуроновой кислотой. Показания, противопоказания, курс, уход и стоимость в Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'Биоревитализация восстанавливает водный баланс и увлажнение кожи',
      'Эффект заметен через 1–2 сеанса, сохраняется до 6 месяцев',
      'Курс обычно 4–6 процедур с интервалом 2 недели',
      'Подходит для профилактики и коррекции после 25 лет',
      'Препарат и стоимость определяются на консультации',
    ],
    tags: [
      'Биоревитализация',
      'Гиалуроновая кислота',
      'Инъекционная косметология',
      'Омоложение лица',
      'Увлажнение кожи',
      'Radeski Skin Clinic',
      'Фергана',
    ],
    whenToSeeDoctor: [
      'Появились сухость, тусклость или морщины на лице',
      'Беспокоят пигментные пятна и расширенные поры',
      'Нужно восстановление после операции или пилинга',
      'Нужно проверить противопоказания к биоревитализации',
    ],
    faq: [
      {
        question: 'Сколько сеансов в курсе биоревитализации?',
        answer:
          'Чаще всего 4–6 процедур с интервалом около 2 недель. Точный план составляет врач по состоянию кожи.',
      },
      {
        question: 'Когда будет виден эффект?',
        answer:
          'Первые изменения заметны через 1–2 сеанса. Окончательный результат обычно формируется после четвёртой процедуры.',
      },
      {
        question: 'Можно ли делать до 25 лет?',
        answer:
          'Обычно до 25 лет не рекомендуется. При очень сухой коже возможно восстановление гидробаланса в 20–25 лет.',
      },
      {
        question: 'Можно ли при родинках на лице?',
        answer:
          'Родинки не являются прямым противопоказанием — инъекции ставят между ними, не в само родимое пятно.',
      },
      {
        question: 'От чего воздержаться после процедуры?',
        answer:
          'Несколько дней избегайте массажа, спорта, сауны, макияжа и прикосновений к лицу руками.',
      },
    ],
  },
  en: {
    summary:
      'Biorevitalization — deep skin hydration and rejuvenation with hyaluronic acid. Indications, contraindications, course, aftercare, and pricing at Radeski Skin Clinic.',
    body: enBody(),
    keyTakeaways: [
      'Biorevitalization restores skin water balance and hydration',
      'Results appear after 1–2 sessions and may last up to 6 months',
      'Course is usually 4–6 sessions with a 2-week interval',
      'Suitable for prevention and correction from age 25',
      'Product and cost are determined at consultation',
    ],
    tags: [
      'Biorevitalization',
      'Hyaluronic acid',
      'Injection cosmetology',
      'Facial rejuvenation',
      'Skin hydration',
      'Radeski Skin Clinic',
      'Fergana',
    ],
    whenToSeeDoctor: [
      'Dryness, dullness, or wrinkles on the face',
      'Pigmentation and enlarged pores are a concern',
      'Recovery needed after surgery or peeling',
      'You need to check contraindications for biorevitalization',
    ],
    faq: [
      {
        question: 'How many sessions are in a biorevitalization course?',
        answer:
          'Usually 4–6 procedures about two weeks apart. Your physician sets the exact plan based on skin condition.',
      },
      {
        question: 'When will I see results?',
        answer:
          'First changes appear after 1–2 sessions. Final effect typically forms after the fourth procedure.',
      },
      {
        question: 'Can it be done before age 25?',
        answer:
          'Usually not recommended before 25. Very dry skin may be an exception at 20–25 to restore hydrobalance.',
      },
      {
        question: 'Is it safe if I have moles on my face?',
        answer:
          'Moles are not a direct contraindication — injections are placed between them, not into the mole.',
      },
      {
        question: 'What should I avoid after treatment?',
        answer:
          'For several days avoid massage, sports, sauna, makeup, and touching your face with your hands.',
      },
    ],
  },
};

export const BIOREVITALIZATSIYA_RADESKI_ARTICLE: Article = {
  id: 'art-biorevitalizatsiya-radeski',
  slug: 'biorevitalizatsiya-gialuron-kislota-radeski',
  title: {
    uz: 'Biorevitalizatsiya: gialuron kislotasi, ko‘rsatmalar va parvarish',
    ru: 'Биоревитализация: гиалуроновая кислота, показания и уход',
    en: 'Biorevitalization: Hyaluronic Acid, Indications, and Aftercare',
  },
  summary: {
    uz: BIOREVITALIZATSIYA_RADESKI_ARTICLE_CATALOG.uz.summary,
    ru: BIOREVITALIZATSIYA_RADESKI_ARTICLE_CATALOG.ru.summary,
    en: BIOREVITALIZATSIYA_RADESKI_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: BIOREVITALIZATSIYA_RADESKI_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: BIOREVITALIZATSIYA_RADESKI_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: BIOREVITALIZATSIYA_RADESKI_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Radeski Skin Clinic',
    ru: 'Radeski Skin Clinic',
    en: 'Radeski Skin Clinic',
  },
  date: '2026-09-10',
  image: COVER,
  images: {
    uz: COVER,
    ru: COVER,
    en: COVER,
  },
  views: 0,
};
