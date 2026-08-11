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
  return `## Chandiq nima uchun qoladi?

Chandiq operatsiya, jarohat, kuyish, akne, suvchechak va terining boshqa shikastlanishlaridan keyin paydo bo‘lishi mumkin. Ba’zan vaqt o‘tishi bilan iz deyarli ko‘rinmas bo‘lib qoladi. Boshqa hollarda esa zich, notekis, qizil yoki to‘q rangli bo‘lib atrofidagi teridan aniq ajralib turadi.

**Lazer shlifovkasi** — chandiq to‘qimasini tekisroq, silliqroq va kamroq sezilarli qilishga yordam beradigan zamonaviy korreksiya usuli.

## Lazer shlifovkasi nima?

Bu muolajada lazer tanlangan teri zonalariga ta’sir qiladi va yangilanish jarayonlarini ishga tushiradi.

Chandiq turi, joylashuvi, yoshi va teringiz xususiyatiga qarab shifokor turli lazer texnologiyalarini qo‘llashi mumkin. Nazoratli ta’sir yuzaki qatlamlarni modellashtirishga (yoki olib tashlashga) va yangi kollagen hosil bo‘lishini stimullashga yordam beradi.

Bosqichma-bosqich yaxshilanishi mumkin:

- teri relefi;
- zichlik va elastiklik;
- chandiq rangi;
- notekisliklar ifodalanganligi;
- chandiq bilan sog‘lom teri orasidagi chegaralar.

Muhim: lazer **har doim** chandiqni butunlay yo‘qotmaydi. Asosiy maqsad — uni maksimal darajada kam sezilarli qilib, atrofidagi teriga yaqinlashtirish.

## Qanday chandiqlarda qo‘llaniladi?

### Atrofik chandiqlar

Teri sathidan chuqurroq “chuqurchalar” — ko‘pincha akne, suvchechak yoki yallig‘lanishdan keyin.

### Operatsiyadan keyingi chandiqlar

Jarrohlikdan keyin chiziqli yoki boshqa shakldagi iz qolishi mumkin. Lazer relef, rang va elastiklikni yaxshilashga yordam beradi.

### Jarohat va kuyishdan keyingi izlar

Ba’zi posttravmatik va kuyish chandiqlariida lazer tekstura va tashqi ko‘rinishni yumshatish uchun qo‘llanilishi mumkin.

### Postakne

Kichik chuqurchalar, notekislik va rang o‘zgarishi. Turga qarab shifokor faqat shlifovka yoki kombinatsiyalangan davolashni tanlaydi.

### Gipertrofik chandiqlar

Teri sathidan baland turadigan izlar. Taktika faollik va ifodalanganlikka bog‘liq; ba’zan lazer kompleks terapiyaning bir qismi bo‘ladi.

**Keloid** chandiqlarga ayniqsa ehtiyotkor yondashuv kerak. Har bir keloidga shlifovka mos kelmaydi — avvalo shifokor konsultatsiyasi majburiy.

## Muolaja qanday o‘tadi?

Shifokor chandiqni ko‘rib, quyidagilarni baholaydi:

- turi;
- yoshi;
- chuqurligi;
- rangi;
- zichligi;
- joylashuvi;
- atrofidagi teri holati;
- pigmentatsiya va bitish xususiyatlariga moyillik.

Shundan keyin mos lazer va ta’sir parametrlari tanlanadi.

Seansda issiqlik, sancish yoki achishish sezilishi mumkin. Zarurat bo‘lsa mahalliy og‘riqsizlantirish qo‘llanadi.

Keyin zona qizarishi, yengil shish va sezgirlik bo‘lishi tabiiy. Tiklanish muddati ta’sir chuqurligiga qarab farq qiladi.

## Natija qachon ko‘rinadi?

Effekt birdaniga “tugallanmaydi”. Tiklanish va yangi kollagen sintezi bir necha hafta–oy davom etadi; yakuniy baho shu muddatdan keyin qo‘yiladi.

Sezilarli chandiqlarda bir necha seans kerak bo‘lishi mumkin — sonini shifokor individual belgilaydi.

## Chandiqni butunlay olib tashlash mumkinmi?

Shakllangan chandiqni odatda **to‘liq yo‘qotib bo‘lmaydi**. Zamonaviy lazer esa tashqi ko‘rinishni sezilarli yaxshilashi mumkin: iz tekisroq, yumshoqroq, silliqroq, rang jihatdan atrof teriga yaqinroq va vizual jihatdan kamroq sezilarli bo‘lishi mumkin.

Eng yaxshi natija ko‘pincha **individual kombinatsiyalangan** yondashuvda kuzatiladi.

## Muolajadan keyingi parvarish

Shifokor tavsiyalariga rioya qiling; tiklanishda maxsus vositalar buyurilishi mumkin.

**Quyoshdan himoya muhim.** Lazerdan keyin teri UV ga sezgirroq bo‘ladi — yuqori SPF li krem va kuchli quyoshdan saqlanish zarur.

Paydo bo‘lgan qobiq yoki po‘stni o‘zingiz yulib tashlamang.

## Qarshi ko‘rsatmalar bormi?

Ha. Ba’zi kasalliklar, faol infeksiya, patologik chandiqqa moyillik va boshqa holatlarda muolaja vaqtincha yoki umuman mos kelmasligi mumkin. Faqat yuzma-yuz konsultatsiyadan keyin qaror qabul qilinadi.

## Nima uchun shifokor tanlovi muhim?

Natija faqat apparatga emas — usul, parametrlar va taktika tanloviga ham bog‘liq. Chuqur atrofik, operatsion va gipertrofik chandiqlar bir xil protokolni “ko‘chirib” qo‘yish mumkin emas.

Shu sababli lazer shlifovkasini tajribali dermatolog (yoki lazer texnologiyalari bilan ishlaydigan mutaxassis) konsultatsiyasidan so‘ng o‘tkazing.

## Radeski Skin Clinic’da

Klinikada mutaxassis konsultatsiyasi va chandiq korreksiyasi uchun individual usul tanlanadi: chandiq turi va ifodalanganligi baholanadi, shaxsiy davolash rejasini tuziladi.

Operatsiya, jarohat, kuyish yoki akne izidan bezovta bo‘lsangiz, uni “shunday qolaversa” deb qabul qilish shart emas. Zamonaviy lazer yondashuvlari teri sifatini yaxshilashga va chandiqni kamroq sezilarli qilishga yordam beradi.

Radeski Skin Clinic’da konsultatsiyaga yoziling — shifokor chandiqingizni baholaydi va mos taktika tanlaydi.`;
}

function ruBody(): string {
  return `## Почему остается рубец?

Рубцы появляются после операций, травм, ожогов, акне, ветряной оспы и других повреждений кожи. Иногда со временем след почти незаметен. В других случаях он остаётся плотным, неровным, красным или тёмным и заметно отличается от окружающей кожи.

**Лазерная шлифовка рубца** — современный способ коррекции: рубцовая ткань становится более ровной, гладкой и менее заметной.

## Что такое лазерная шлифовка рубца?

Во время процедуры лазер воздействует на выбранные участки кожи и запускает её обновление.

В зависимости от типа рубца, его расположения, давности и особенностей кожи врач подбирает подходящую лазерную технологию. Контролируемое воздействие помогает удалить или ремоделировать поверхностные слои и стимулирует синтез нового коллагена.

Постепенно могут улучшаться:

- рельеф кожи;
- плотность и эластичность;
- цвет рубца;
- выраженность неровностей;
- границы между рубцом и здоровой кожей.

Важно: лазерная шлифовка **не всегда** убирает рубец полностью. Главная цель — сделать его максимально малозаметным и приблизить текстуру к окружающей ткани.

## Какие рубцы можно корректировать лазером?

### Атрофические рубцы

Углубления на коже — часто после акне, ветряной оспы или воспалительных процессов.

### Рубцы после операций

После хирургии может остаться линейный или иной по форме след. Лазер помогает улучшить рельеф, цвет и эластичность.

### Рубцы после травм и ожогов

При ряде посттравматических и постожоговых рубцов лазер используют для улучшения текстуры и внешнего вида кожи.

### Рубцы после акне

Постакне часто даёт небольшие углубления, неровности и изменение цвета. Врач может назначить шлифовку или комбинированное лечение.

### Гипертрофические рубцы

Такие рубцы выступают над поверхностью кожи. Тактика зависит от их активности и выраженности; лазер иногда входит в комплексную терапию.

**Келоидные** рубцы требуют особенно осторожного подхода. Шлифовка подходит не каждому келоиду — перед процедурой обязательна консультация врача.

## Как проходит процедура?

Врач осматривает рубец и оценивает:

- тип;
- возраст рубца;
- глубину;
- цвет;
- плотность;
- расположение;
- состояние окружающей кожи;
- склонность к пигментации и особенности заживления.

Затем выбирает лазер и параметры воздействия.

Во время сеанса возможны тепло, покалывание или жжение. При необходимости применяют местную анестезию.

После процедуры зона может быть красной, отёчной и чувствительной. Сроки восстановления зависят от глубины воздействия.

## Когда будет виден результат?

Эффект развивается постепенно. После шлифовки идут процессы восстановления и синтеза коллагена, поэтому итог оценивают через несколько недель или месяцев.

При выраженных рубцах часто нужно несколько процедур — число сеансов определяет врач индивидуально.

## Можно ли полностью убрать рубец?

Сформировавшийся рубец обычно **невозможно удалить полностью**. Современная лазерная коррекция, однако, заметно улучшает внешний вид: рубец может стать более плоским, мягким, гладким, ближе по цвету к окружающей коже и менее заметным при осмотре.

Лучший результат часто даёт **индивидуально подобранная комбинация** методов.

## Уход после лазерной шлифовки

Соблюдайте рекомендации врача; на период восстановления могут назначить специальные средства.

**Особенно важна защита от солнца.** После лазера кожа чувствительнее к ультрафиолету — нужен высокий SPF и ограничение активного солнца.

Не срывайте самостоятельно корочки и шелушение, если они появились.

## Есть ли противопоказания?

Да. При отдельных заболеваниях, активных инфекциях в зоне воздействия, склонности к патологическому рубцеванию и других состояниях процедура может быть временно или постоянно противопоказана. Решение принимается только после очной консультации.

## Почему важен выбор врача?

Результат зависит не только от аппарата, но и от метода, параметров и тактики. Глубокий атрофический, послеоперационный и гипертрофический рубцы требуют разного подхода — один протокол «на всех» не работает.

Поэтому шлифовку проводят после консультации дерматолога или специалиста с опытом лазерных технологий.

## Лазерная шлифовка рубцов в Radeski Skin Clinic

В клинике проводят консультацию и индивидуально подбирают метод коррекции: врач оценивает тип и выраженность рубца и составляет персональный план лечения.

Если вас беспокоит рубец после операции, травмы, ожога или акне, не обязательно мириться с его видом. Современная лазерная коррекция помогает улучшить качество кожи и сделать рубец менее заметным.

Запишитесь на консультацию в Radeski Skin Clinic — врач оценит ваш рубец и подберёт подходящую тактику.`;
}

function enBody(): string {
  return `## Why scars remain visible

Scars can follow surgery, injury, burns, acne, chickenpox and other skin damage. Some fade until barely noticeable. Others stay firm, uneven, red or dark and stand out clearly from the surrounding skin.

**Laser scar resurfacing** is a modern way to refine scar tissue so it looks smoother, more even and less obvious.

## What is laser scar resurfacing?

The laser treats selected areas of skin and triggers renewal.

Depending on scar type, location, age and your skin, the doctor chooses an appropriate laser technology. Controlled energy helps remodel or remove superficial layers and stimulates new collagen.

Over time you may see improvement in:

- skin texture;
- firmness and elasticity;
- scar colour;
- irregularity;
- the border between scar and healthy skin.

Important: laser resurfacing does **not always** erase a scar completely. The main goal is to make it as discreet as possible and closer in texture to nearby skin.

## Which scars can lasers help?

### Atrophic scars

Dips in the skin — often after acne, chickenpox or inflammation.

### Surgical scars

Linear or other post-operative marks. Laser work can improve contour, colour and elasticity.

### Traumatic and burn scars

For some post-traumatic and burn scars, laser care may soften texture and appearance.

### Post-acne scars

Small pits, unevenness and colour change. The doctor may recommend resurfacing alone or a combined plan.

### Hypertrophic scars

Raised scars. Treatment depends on activity and severity; laser may be part of a broader approach.

**Keloids** need special caution. Not every keloid suits resurfacing — an in-person consult comes first.

## How the procedure works

The doctor examines the scar and reviews:

- type;
- age of the scar;
- depth;
- colour;
- firmness;
- location;
- surrounding skin;
- risk of pigmentation and healing tendencies.

Then laser settings are chosen.

During treatment you may feel warmth, tingling or burning. Local anaesthesia is used when needed.

Afterwards the area may be red, swollen and sensitive. Recovery time depends on treatment depth.

## When will I see results?

Results build gradually. Skin repair and new collagen take weeks to months, so final assessment is delayed.

Pronounced scars often need several sessions — the doctor sets the count individually.

## Can a scar be removed completely?

A mature scar usually **cannot be deleted entirely**. Modern laser care can still improve how it looks: flatter, softer, smoother, closer in colour to nearby skin and less noticeable on inspection.

The best outcomes often come from an **individually combined** plan.

## Aftercare

Follow medical advice; special skincare may be prescribed while you heal.

**Sun protection matters.** After laser work skin is more UV-sensitive — use a high SPF and limit strong sun.

Do not pick scabs or peeling if they form.

## Are there contraindications?

Yes. Certain illnesses, active infection in the treatment area, a tendency to abnormal scarring and other conditions may temporarily or permanently rule out the procedure. Decisions are made only after an in-person visit.

## Why the clinician matters

Outcomes depend on method, settings and strategy — not only on the machine. Deep atrophic, surgical and hypertrophic scars need different plans; one protocol does not fit all.

Have laser scar resurfacing only after consulting a dermatologist or a clinician experienced with laser technologies.

## Laser scar care at Radeski Skin Clinic

We start with a specialist consult and choose a personalised correction plan: scar type and severity are assessed, then a treatment pathway is built.

If a scar after surgery, injury, burn or acne bothers you, you do not have to live with it unchanged. Modern laser approaches can improve skin quality and make the mark less visible.

Book a consult at Radeski Skin Clinic so a doctor can assess your scar and recommend the right tactic.`;
}

export const LASER_SCAR_RESURFACING_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Chandiqlarni lazer shlifovkasi: operatsiya, jarohat, kuyish va akne izlarini kamroq sezilarli qilish. Radeski Skin Clinic’da shifokor konsultatsiyasi va individual reja.',
    body: uzBody(),
    keyTakeaways: [
      'Lazer shlifovkasi chandiqni silliqroq va kamroq sezilarli qilishga yordam beradi — lekin har doim to‘liq yo‘qotmaydi',
      'Atrofik, operatsion, posttravmatik, postakne va ayrim gipertrofik izlarda qo‘llanilishi mumkin',
      'Natija asta-sekin (haftalar–oylar); og‘ir hollarda bir necha seans kerak',
      'Keloid va boshqa sezgir holatlarda faqat shifokor qarori — o‘zingiz urinmang',
    ],
    tags: [
      'Lazer shlifovka',
      'Chandiq',
      'Postakne',
      'Lazer korreksiya',
      'Dermatologiya',
      'Fargona',
      'Qoqon',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Operatsiya, jarohat yoki kuyishdan keyin chandiq bezovta qilsa',
      'Postakne chuqurchalari yoki notekis relef saqlansa',
      'Chandiq qizarib, qalinlashib yoki o‘zgarib borsa',
      'Keloidga o‘xshash o‘sish gumon qilinsa',
      'Uy vositalari natija bermasa',
    ],
    faq: [
      {
        question: 'Chandiqni lazer bilan butunlay olib tashlash mumkinmi?',
        answer:
          'Shakllangan chandiqni odatda to‘liq yo‘qotib bo‘lmaydi. Maqsad — relef, rang va sezilarlilikni sezilarli yaxshilash.',
      },
      {
        question: 'Necha seans kerak?',
        answer:
          'Chandiq turi, chuqurligi va reaksiyaga bog‘liq. Ba’zan 1–2, ba’zan bir necha muolaja — faqat shifokor belgilaydi.',
      },
      {
        question: 'Muolaja og‘riqlimi?',
        answer:
          'Issiqlik, sancish yoki achishish bo‘lishi mumkin; zaruratda mahalliy og‘riqsizlantirish qo‘llanadi.',
      },
      {
        question: 'Quyoshga chiqish mumkinmi?',
        answer:
          'Tiklanishda qat’iy fotohimoya kerak: yuqori SPF va kuchli quyoshdan saqlanish — pigmentatsiya xavfini kamaytiradi.',
      },
    ],
  },
  ru: {
    summary:
      'Лазерная шлифовка рубцов и шрамов после операций, травм, ожогов и акне. Современная коррекция в Radeski Skin Clinic — консультация врача и индивидуальный план.',
    body: ruBody(),
    keyTakeaways: [
      'Лазерная шлифовка делает рубец ровнее и менее заметным, но не всегда удаляет его полностью',
      'Подходит для атрофических, послеоперационных, посттравматических, постакне и части гипертрофических рубцов',
      'Результат нарастает неделями и месяцами; выраженные рубцы часто требуют курса',
      'Келоиды и сложные случаи — только после очной оценки врача',
    ],
    tags: [
      'Лазерная шлифовка',
      'Рубцы',
      'Постакне',
      'Лазерная коррекция',
      'Дерматология',
      'Фергана',
      'Коканд',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Беспокоит рубец после операции, травмы или ожога',
      'Сохраняются углубления и неровности постакне',
      'Рубец краснеет, уплотняется или меняется',
      'Есть подозрение на келоидный рост',
      'Домашние средства не помогают',
    ],
    faq: [
      {
        question: 'Можно ли полностью убрать рубец лазером?',
        answer:
          'Сформировавшийся рубец обычно нельзя удалить полностью. Цель — заметно улучшить рельеф, цвет и видимость.',
      },
      {
        question: 'Сколько процедур нужно?',
        answer:
          'Зависит от типа, глубины и реакции кожи. Иногда 1–2 сеанса, иногда курс — решение только у врача.',
      },
      {
        question: 'Больно ли делать шлифовку?',
        answer:
          'Возможны тепло, покалывание или жжение; при необходимости используют местную анестезию.',
      },
      {
        question: 'Можно ли загорать после процедуры?',
        answer:
          'В период восстановления нужна строгая фотозащита: высокий SPF и ограничение активного солнца снижают риск пигментации.',
      },
    ],
  },
  en: {
    summary:
      'Laser scar resurfacing for marks after surgery, injury, burns and acne. Modern scar correction at Radeski Skin Clinic — doctor consult and a personal plan.',
    body: enBody(),
    keyTakeaways: [
      'Laser resurfacing softens and blends scars but does not always erase them completely',
      'May help atrophic, surgical, traumatic, post-acne and some hypertrophic scars',
      'Results develop over weeks to months; deeper scars often need a course',
      'Keloids and complex cases need an in-person medical decision first',
    ],
    tags: [
      'Laser resurfacing',
      'Scars',
      'Post-acne',
      'Laser correction',
      'Dermatology',
      'Fergana',
      'Kokand',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'A surgical, injury or burn scar bothers you',
      'Post-acne pits or uneven texture persist',
      'A scar becomes redder, firmer or changes',
      'You suspect keloid growth',
      'Home remedies are not helping',
    ],
    faq: [
      {
        question: 'Can laser remove a scar completely?',
        answer:
          'A mature scar usually cannot be erased entirely. The aim is a clear improvement in contour, colour and visibility.',
      },
      {
        question: 'How many sessions will I need?',
        answer:
          'It depends on scar type, depth and healing. Some people need 1–2 visits; others need a course — only the doctor decides.',
      },
      {
        question: 'Does resurfacing hurt?',
        answer:
          'Warmth, tingling or burning can occur; local anaesthesia is used when needed.',
      },
      {
        question: 'Can I go in the sun afterwards?',
        answer:
          'Use strict sun protection while healing: high SPF and less intense sun lower the risk of pigment changes.',
      },
    ],
  },
};

export const LASER_SCAR_RESURFACING_ARTICLE: Article = {
  id: 'art-lazernaya-shlifovka-rubcov',
  slug: 'lazernaya-shlifovka-rubcov',
  title: {
    uz: 'Chandiqlarni lazer shlifovkasi: izni kamroq sezilarli qilish | Radeski Skin Clinic',
    ru: 'Лазерная шлифовка рубцов: как сделать шрам менее заметным | Radeski Skin Clinic',
    en: 'Laser Scar Resurfacing: Making Scars Less Visible | Radeski Skin Clinic',
  },
  summary: {
    uz: LASER_SCAR_RESURFACING_ARTICLE_CATALOG.uz.summary,
    ru: LASER_SCAR_RESURFACING_ARTICLE_CATALOG.ru.summary,
    en: LASER_SCAR_RESURFACING_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: LASER_SCAR_RESURFACING_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: LASER_SCAR_RESURFACING_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: LASER_SCAR_RESURFACING_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-08-11',
  image: '/articles/laser-scar-resurfacing-cover.webp',
  images: {
    uz: '/articles/laser-scar-resurfacing-cover.webp',
    ru: '/articles/laser-scar-resurfacing-cover.webp',
    en: '/articles/laser-scar-resurfacing-cover.webp',
  },
  views: 0,
};
