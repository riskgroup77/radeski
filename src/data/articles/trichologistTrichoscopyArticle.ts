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
  return `## Nega soch to‘kilishini e’tiborsiz qoldirmaslik kerak?

Qalin, sog‘lom soch — nafaqat tashqi go‘zallik, balki organizmdagi jarayonlarning ko‘zgusi. Kunlik to‘kilish biroz oshishi, ajratmaning kengayishi, qichishish, yog‘lanishning tezlashishi yoki sochning noziklashishi ba’zan “mavsumiy” deb o‘tkazib yuboriladi. Aslida esa ortida temir tanqisligi, gormonal o‘zgarish, qalqonsimon bez muammosi, stress, surunkali yallig‘lanish yoki androgenezik alopetsiya turishi mumkin.

Shuning uchun eng to‘g‘ri qadam — taxmin qilish emas, balki sababni aniqlash. Bunda trixolog konsultatsiyasi va zamonaviy diagnostika — **trixoskopiya** — muhim rol o‘ynaydi.

## Trixolog kim?

Trixolog — soch va bosh terisi kasalliklarini diagnostika qilish, davolash va oldini olish bilan shug‘ullanadigan shifokor. U nafaqat “to‘kilishni to‘xtatish”, balki nima uchun to‘kilyotganini topishga e’tibor beradi.

Ko‘pincha murojaat sabablari:

- kuchaygan soch to‘kilishi;
- o‘choqli (yoynasimon) kalik;
- androgenezik alopetsiya;
- diffuz (tarqoq) to‘kilish;
- sochning mo‘rtligi va noziklashishi;
- kepak;
- seboreyali dermatit;
- bosh terisida qichishish;
- bosh terisidagi psoriaz;
- bosh terisining yallig‘lanish kasalliklari.

Trixologning asosiy vazifasi — belgini “yopish” emas, balki **asosiy sababni** topib, individual reja tuzish.

## Trixoskopiya nima?

Trixoskopiya — soch va bosh terisini maxsus raqamli apparat (trixoskop) bilan ko‘p marta kattalashtirib ko‘rish usuli. Muolaja og‘riqsiz, nurlanishsiz va tayyorgarlik talab qilmaydi. Odatda 20–30 daqiqa davom etadi.

Trixoskop yordamida shifokor baholaydi:

- soch zichligi;
- har bir soch tolasining qalinligi;
- follikula holati;
- yog‘ bezlari ishi;
- bosh terisi ko‘rinishi;
- yallig‘lanish belgilari;
- zamburug‘li jarayon shubhasi;
- sochning miniatyuralanishi (ingichkalashuvi);
- soch o‘zagining shikastlanishi.

Bu usul “taxminiy ko‘rik”ni aniqroq, hujjatlashgan diagnostikaga aylantiradi. Ba’zan birinchi qabulning o‘zida tashxis yo‘nalishi aniq bo‘ladi.

## Qachon trixoskopiya kerak?

Quyidagi hollarda tezroq murojaat qilish tavsiya etiladi:

- soch odatdagidan ko‘proq to‘kilsa;
- sochlar noziklashib, siyrak ko‘rinsa;
- kal joylar paydo bo‘lsa;
- soch sekin o‘ssa;
- kepak bezovta qilsa;
- qichishish yoki achishish bo‘lsa;
- bosh terisi tez yog‘lansa;
- sochlar mo‘rt va xira bo‘lib qolsa;
- bosh terisining surunkali kasalliklari mavjud bo‘lsa.

Qanchalik erta sabab aniqlansa, soch sichqonini saqlab qolish yoki o‘sishni tiklash imkoniyati shunchalik yuqori bo‘ladi.

## Trixoskopiya qanday kasalliklarni aniqlashga yordam beradi?

Tekshiruv quyidagilarni ajratishda foydali:

- androgenezik alopetsiya;
- diffuz soch to‘kilishi;
- o‘choqli alopetsiya;
- chandiqli (sikatratsion) kalik shakllari;
- seboreyali dermatit;
- bosh terisi psoriazi;
- zamburug‘li zararlanishlar;
- yallig‘lanish jarayonlari;
- bo‘yoq yoki kimyoviy muolajalardan keyingi shikastlanish.

Muhim: trixoskopiya yakka o‘zi “hamma narsani yopmaydi”. Zarurat bo‘lsa, shifokor laboratoriya tahlillari (ferritin, D vitamini, qalqonsimon bez va boshqalar) ni qo‘shadi. Ammo ko‘p hollarda ayni shu usul tashxisni tezroq va aniqroq qiladi.

## Trixolog qabuli qanday o‘tadi?

Konsultatsiya odatda bosqichma-bosqich:

1. batafsil so‘rov (qachon boshlangan, dorilar, stress, tug‘ruq, kasalliklar);
2. bosh terisini ko‘rikdan o‘tkazish;
3. kompyuter trixoskopiyasi;
4. tasvirlarni tahlil qilish;
5. zarurat bo‘lsa — laboratoriya buyurtmasi;
6. individual davolash rejasini tuzish.

Reja yosh, sabab, qo‘shimcha kasalliklar va tekshiruv natijalariga qarab tanlanadi. “Bir xil shampun hammaga” yondashuvi emas — sababga qarab yo‘nalish.

## Trixolog qanday davolashni tavsiya qilishi mumkin?

Diagnostikadan keyin:

- dori terapiyasi;
- plazmotorapiya (PRP);
- bosh terisi mezoterapiyasi;
- vitamin/mineral korreksiya;
- bosh terisi kasalliklarini davolash;
- davolovchi shampun va parvarish vositalarini tanlash;
- ovqatlanish va turmush tarzi bo‘yicha tavsiyalar

ko‘rib chiqilishi mumkin. Eng yaxshi natija ko‘pincha **kompleks** yondashuvda kuzatiladi: sababni tuzatish + mahalliy terapiya + nazorat.

## Nega o‘z-o‘zini davolash xavfli?

Aptekadan “soch uchun vitamin”, xalq usullari yoki tasodifiy shampunlar ba’zan vaqtni kechiktiradi. Soch to‘kilishi sabablari turlicha:

- gormonal buzilishlar;
- temir tanqisligi;
- qalqonsimon bez kasalliklari;
- stress;
- irsiy moyillik;
- bosh terisining yallig‘lanish kasalliklari.

Sabab aniqlanmasa, davolash ko‘pincha past samarali bo‘ladi. Trixoskopiya va shifokor rejalashtiruvi — aynan shu tuzoqdan chiqish yo‘li.

## Radeski Skin Clinic’da trixolog va trixoskopiya

Radeski Skin Clinic’da zamonaviy kompyuter trixoskopiyasi yordamida soch va bosh terisi holati batafsil baholanadi. Mutaxassislar diagnostikaga asoslanib, soch to‘kilishi sababini topishga va shaxsiy davolash rejasini tuzishga e’tibor beradi — Farg‘ona va Qo‘qon bemorlari uchun.

Tashrifni kechiktirmang: erta diagnostika davolash samarasini oshiradi va soch zichligini saqlab qolishga yordam beradi.`;
}

function ruBody(): string {
  return `## Почему нельзя игнорировать выпадение волос?

Густые, здоровые волосы — не только про красоту, но и про общее состояние организма. Если выпадение усилилось, появился зуд, перхоть, расширился пробор или волосы стали тоньше, это не всегда «сезонность». Причиной могут быть дефицит железа, гормональный сбой, проблемы щитовидной железы, стресс, воспаление кожи головы или андрогенетическая алопеция.

Правильный шаг — не гадать, а найти причину. Здесь помогают консультация трихолога и современная диагностика — **трихоскопия**.

## Кто такой врач-трихолог?

Трихолог занимается диагностикой, лечением и профилактикой заболеваний волос и кожи головы. Его задача — не только «остановить выпадение», но и понять, почему оно возникло.

К специалисту чаще обращаются при:

- усиленном выпадении волос;
- очаговом облысении;
- андрогенетической алопеции;
- диффузном выпадении;
- ломкости и истончении волос;
- перхоти;
- себорейном дерматите;
- зуде кожи головы;
- псориазе волосистой части головы;
- воспалительных заболеваниях кожи головы.

Главная цель — найти **истинную причину**, а не маскировать симптом.

## Что такое трихоскопия?

Трихоскопия — безболезненный метод цифровой диагностики волос и кожи головы с многократным увеличением. Врач использует специальный прибор — трихоскоп. Подготовки не требуется, исследование обычно занимает 20–30 минут.

На приёме оценивают:

- плотность волос;
- толщину волосяного стержня;
- состояние фолликулов;
- работу сальных желёз;
- состояние кожи головы;
- признаки воспаления;
- возможные грибковые изменения;
- миниатюризацию волос;
- повреждения стержня.

Метод превращает обычный осмотр в более точную, документированную диагностику. Во многих случаях направление диагноза становится ясным уже на первом приёме.

## Когда нужна трихоскопия?

Обратитесь к трихологу, если:

- волосы выпадают сильнее обычного;
- стали тоньше и реже;
- появились участки облысения;
- замедлился рост;
- беспокоит перхоть;
- есть зуд или жжение;
- кожа головы быстро жирнеет;
- волосы ломкие и тусклые;
- есть хронические заболевания кожи головы.

Чем раньше проведена диагностика, тем выше шанс сохранить густоту и восстановить рост.

## Какие состояния помогает выявлять трихоскопия?

Исследование полезно при диагностике:

- андрогенетической алопеции;
- диффузного выпадения;
- очаговой алопеции;
- рубцовых форм облысения;
- себорейного дерматита;
- псориаза кожи головы;
- грибковых поражений;
- воспалительных процессов;
- повреждений после окрашивания или химии.

Важно: трихоскопия не отменяет необходимость анализов, если они нужны. Но часто именно она ускоряет и уточняет диагноз.

## Как проходит приём у трихолога?

Обычно консультация включает:

1. подробный опрос;
2. осмотр кожи головы;
3. компьютерную трихоскопию;
4. анализ изображений;
5. при необходимости — лабораторные назначения;
6. индивидуальный план лечения.

План строится с учётом причины, возраста, сопутствующих заболеваний и результатов обследования — без универсальных «шампунов для всех».

## Какие методы лечения может рекомендовать трихолог?

После диагностики возможны:

- медикаментозная терапия;
- плазмотерапия (PRP);
- мезотерапия кожи головы;
- витаминно-минеральная коррекция;
- лечение заболеваний кожи головы;
- подбор лечебного ухода;
- рекомендации по питанию и образу жизни.

Лучший результат чаще даёт **комплексный** подход: устранение причины + локальная терапия + контроль.

## Почему самолечение не помогает?

Витамины «наугад», домашние средства и случайные шампуни нередко отодвигают визит к врачу. Выпадение может быть связано с гормонами, железом, щитовидной железой, стрессом, наследственностью или воспалением. Без причины лечение часто оказывается слабым. Трихоскопия и план врача помогают выйти из этого круга.

## Трихолог и трихоскопия в Radeski Skin Clinic

В Radeski Skin Clinic проводится современная компьютерная трихоскопия для точной оценки волос и кожи головы. Специалисты подбирают персонализированное лечение, направленное на причину выпадения и восстановление здоровья волос — для пациентов в Фергане и Коканде.

Не откладывайте визит: ранняя диагностика повышает эффективность лечения и помогает сохранить густоту.`;
}

function enBody(): string {
  return `## Why hair shedding should not be ignored

Thick, healthy hair reflects more than appearance — it can mirror overall health. Heavier daily shedding, a widening part, itch, faster oiliness, or finer strands are often dismissed as “seasonal.” In reality, iron deficiency, hormone shifts, thyroid issues, stress, scalp inflammation, or androgenetic alopecia may sit underneath.

The right step is not guessing — it is finding the cause. A trichologist consultation and modern scalp imaging — **trichoscopy** — play a key role.

## Who is a trichologist?

A trichologist diagnoses, treats, and helps prevent hair and scalp disorders. The goal is not only to “stop shedding,” but to understand why it started.

People often seek care for:

- increased hair shedding;
- patchy alopecia;
- androgenetic alopecia;
- diffuse thinning;
- brittle, finer hair;
- dandruff;
- seborrheic dermatitis;
- scalp itch;
- scalp psoriasis;
- inflammatory scalp conditions.

The core task is to identify the **true driver** and build an individual plan.

## What is trichoscopy?

Trichoscopy is a painless digital exam of hair and scalp under high magnification. The doctor uses a trichoscope. No special preparation is needed, and the visit usually takes 20–30 minutes.

It helps assess:

- hair density;
- shaft thickness;
- follicle appearance;
- oil-gland activity;
- scalp condition;
- signs of inflammation;
- clues to fungal disease;
- hair miniaturization;
- shaft damage.

Trichoscopy turns a simple visual check into clearer, documented diagnostics. In many cases, the diagnostic direction becomes clear during the first visit.

## When should you get trichoscopy?

See a trichologist if:

- shedding is heavier than usual;
- hair looks thinner or sparser;
- bald patches appear;
- growth feels slow;
- dandruff bothers you;
- itch or burning appears;
- the scalp gets oily quickly;
- hair feels brittle and dull;
- you have chronic scalp disease.

Earlier diagnosis usually means a better chance to protect density and restore growth.

## What can trichoscopy help identify?

It supports diagnosis of:

- androgenetic alopecia;
- diffuse shedding;
- alopecia areata;
- scarring forms of hair loss;
- seborrheic dermatitis;
- scalp psoriasis;
- fungal scalp disease;
- inflammation;
- damage after coloring or chemical procedures.

Trichoscopy does not always replace lab tests when they are needed — but it often makes diagnosis faster and more precise.

## What happens at a trichologist visit?

A typical consultation includes:

1. a detailed history;
2. scalp examination;
3. computer trichoscopy;
4. image review;
5. lab tests when indicated;
6. an individual treatment plan.

The plan considers cause, age, coexisting conditions, and findings — not one shampoo for everyone.

## What treatments may be recommended?

After diagnosis, options may include:

- medication;
- PRP (plasma therapy);
- scalp mesotherapy;
- vitamin/mineral correction;
- treatment of scalp disease;
- medical care products;
- lifestyle and nutrition advice.

The strongest results usually come from a **combined** approach: fix the cause + local therapy + follow-up.

## Why self-treatment falls short

Random vitamins, home remedies, and untargeted shampoos often delay proper care. Shedding may relate to hormones, iron, thyroid disease, stress, genetics, or inflammation. Without the cause, results stay weak. Trichoscopy and a doctor-led plan help break that cycle.

## Trichologist care and trichoscopy at Radeski Skin Clinic

At Radeski Skin Clinic, modern computer trichoscopy helps evaluate hair and scalp in detail. Specialists build personalized plans aimed at the cause of hair loss and healthier regrowth — for patients in Fergana and Kokand.

Do not delay: earlier diagnosis improves treatment success and helps protect density.`;
}

export const TRICHOLOGIST_TRICHOSCOPY_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Trixolog kim va trixoskopiya nima: soch to‘kilishi sababini topish, bosh terisini baholash va Radeski Skin Clinic’da individual davolash rejasini tuzish haqida to‘liq qo‘llanma.',
    body: uzBody(),
    keyTakeaways: [
      'Trixolog soch to‘kilishi sababini topishga e’tibor beradi',
      'Trixoskopiya — og‘riqsiz raqamli diagnostika (20–30 daqiqa)',
      'Erta tekshiruv soch zichligini saqlash imkonini oshiradi',
      'Eng yaxshi natija kompleks reja va sababni tuzatish bilan keladi',
    ],
    tags: [
      'Trixolog',
      'Trixoskopiya',
      'Soch to‘kilishi',
      'Alopetsiya',
      'Bosh terisi',
      'Fargona',
      'Qoqon',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Soch odatdagidan ko‘proq to‘kilsa',
      'Ajratma kengaysa yoki kal joy chiqsa',
      'Qichishish, kepak yoki tez yog‘lanish bezovta qilsa',
      'Sochlar sezilarli noziklashgan bo‘lsa',
      'Uy vositalari yordam bermasa',
    ],
    faq: [
      {
        question: 'Trixoskopiya og‘riqlimi?',
        answer:
          'Yo‘q. Bu og‘riqsiz, nurlanishsiz raqamli ko‘rik; odatda 20–30 daqiqa davom etadi va maxsus tayyorgarlik talab qilmaydi.',
      },
      {
        question: 'Trixoskopiya tahlillarni almashtiradimi?',
        answer:
          'Ko‘pincha diagnostikani tezlashtiradi, lekin zarurat bo‘lsa shifokor ferritin, D vitamini yoki gormonlar kabi tahlillarni ham buyuradi.',
      },
      {
        question: 'Natija qachon ko‘rinadi?',
        answer:
          'Bu sabab va tanlangan davolashga bog‘liq. To‘g‘ri reja bilan o‘zgarishlar bosqichma-bosqich kuzatiladi; shifokor nazorati muhim.',
      },
      {
        question: 'PRP har doim kerakmi?',
        answer:
          'Yo‘q. PRP ba’zi holatlarda tavsiya etiladi, lekin avval sabab aniqlanadi. Har bir bemorga individual yondashuv qo‘llanadi.',
      },
    ],
  },
  ru: {
    summary:
      'Врач-трихолог и трихоскопия: как найти причину выпадения волос, оценить кожу головы и подобрать лечение в Radeski Skin Clinic — Фергана и Коканд.',
    body: ruBody(),
    keyTakeaways: [
      'Трихолог ищет причину выпадения, а не только симптом',
      'Трихоскопия — безболезненная цифровая диагностика за 20–30 минут',
      'Раннее обследование повышает шанс сохранить густоту',
      'Лучший результат даёт комплексный план по причине',
    ],
    tags: [
      'Трихолог',
      'Трихоскопия',
      'Выпадение волос',
      'Алопеция',
      'Кожа головы',
      'Фергана',
      'Коканд',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Волосы выпадают сильнее обычного',
      'Расширяется пробор или появляются залысины',
      'Беспокоят зуд, перхоть или быстрая жирность',
      'Волосы заметно истончились',
      'Домашние средства не помогают',
    ],
    faq: [
      {
        question: 'Больно ли делать трихоскопию?',
        answer:
          'Нет. Это безболезненный цифровой осмотр без излучения; обычно занимает 20–30 минут и не требует подготовки.',
      },
      {
        question: 'Заменяет ли трихоскопия анализы?',
        answer:
          'Она часто ускоряет диагноз, но при необходимости врач также назначит ферритин, витамин D или гормональные исследования.',
      },
      {
        question: 'Когда будет результат лечения?',
        answer:
          'Зависит от причины и выбранной схемы. При правильном плане изменения развиваются постепенно; важен контроль врача.',
      },
      {
        question: 'Всегда ли нужна PRP?',
        answer:
          'Нет. PRP назначают по показаниям после выяснения причины. Подход всегда индивидуальный.',
      },
    ],
  },
  en: {
    summary:
      'Trichologist and trichoscopy: how modern scalp imaging finds the cause of hair loss and guides treatment at Radeski Skin Clinic in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'A trichologist looks for the cause of hair loss, not just the symptom',
      'Trichoscopy is a painless digital exam that usually takes 20–30 minutes',
      'Earlier assessment improves the chance of protecting density',
      'Best results come from a cause-based, combined plan',
    ],
    tags: [
      'Trichologist',
      'Trichoscopy',
      'Hair loss',
      'Alopecia',
      'Scalp care',
      'Fergana',
      'Kokand',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Shedding is heavier than usual',
      'The part widens or bald patches appear',
      'Itch, dandruff, or fast oiliness bother you',
      'Hair has become clearly finer',
      'Home remedies are not helping',
    ],
    faq: [
      {
        question: 'Does trichoscopy hurt?',
        answer:
          'No. It is a painless digital exam without radiation, usually lasting 20–30 minutes with no special prep.',
      },
      {
        question: 'Does trichoscopy replace blood tests?',
        answer:
          'It often speeds diagnosis, but your doctor may still order ferritin, vitamin D, or hormone tests when needed.',
      },
      {
        question: 'When will treatment show results?',
        answer:
          'It depends on the cause and plan. With the right approach, changes build gradually — follow-up matters.',
      },
      {
        question: 'Is PRP always required?',
        answer:
          'No. PRP is used when indicated after the cause is clear. Care is always individualized.',
      },
    ],
  },
};

export const TRICHOLOGIST_TRICHOSCOPY_ARTICLE: Article = {
  id: 'art-trixolog-trixoskopiya',
  slug: 'trixolog-va-trixoskopiya',
  title: {
    uz: 'Trixolog va trixoskopiya: soch to‘kilishi sababini zamonaviy diagnostika',
    ru: 'Врач-трихолог и трихоскопия: современная диагностика причин выпадения волос',
    en: 'Trichologist and Trichoscopy: Modern Diagnosis of Hair-Loss Causes',
  },
  summary: {
    uz: TRICHOLOGIST_TRICHOSCOPY_ARTICLE_CATALOG.uz.summary,
    ru: TRICHOLOGIST_TRICHOSCOPY_ARTICLE_CATALOG.ru.summary,
    en: TRICHOLOGIST_TRICHOSCOPY_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: TRICHOLOGIST_TRICHOSCOPY_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: TRICHOLOGIST_TRICHOSCOPY_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: TRICHOLOGIST_TRICHOSCOPY_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-08-06',
  image: null,
  images: {
    uz: null,
    ru: null,
    en: null,
  },
  views: 0,
};
