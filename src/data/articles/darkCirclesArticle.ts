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

/*
 * Dark circles and under-eye puffiness — not one problem but several types (pigment, vascular/thin
 * skin, tear-trough shadow, puffiness), each with its own approach. Points: how to tell the types
 * apart, when swelling is a reason for a doctor and tests rather than a cosmetologist, realistic
 * home care, what not to do near the eyes, clinic options after examination, and honest limits
 * (heredity and bone structure improve only partly). No prices, no promises.
 */

function uzBody(): string {
  return `Ko'z osti qorayishi va shishi — kosmetologga eng ko'p beriladigan savollardan biri. Odam yaxshi uxlagan bo'lsa ham, yuzi "charchagan" ko'rinadi. Aslida "qora doiralar" bitta muammo emas: ularning bir nechta turi bor va har biriga boshqa yondashuv kerak. Shuning uchun avval sababni aniqlash, keyin muolaja tanlash muhim.

## Ko'z osti qorayishining turlari

- **Pigment turi** — teri jigarrang yoki qo'ng'ir tusda. Ko'pincha irsiy bo'ladi; quyosh, ko'zni tez-tez ishqalash va allergiya uni kuchaytiradi. Qoramtir teri turida ko'proq uchraydi.
- **Tomir turi** — ko'z osti terisi juda yupqa va uning ostidagi tomirlar ko'kimtir yoki binafsha tusda ko'rinadi. Charchoq, uyqusizlik va yosh bilan yaqqolroq bo'ladi.
- **Soya turi** — ko'z ostida chuqurcha (ko'z yoshi tarnovi) bor va yorug'lik tushganda soya hosil bo'ladi. Bu tuzilish bilan bog'liq: yog' to'qimasining kamayishi, yosh, suyak tuzilishi.
- **Aralash tur** — ko'pchilikda bir vaqtda ikki-uch sabab bo'ladi.

Oddiy kuzatuv: ko'z osti terisini barmoq bilan yengil tortganda rang deyarli o'zgarmasa — ko'proq pigment; ko'kimtirlik kuchaysa — tomir; yorug'lik to'g'ridan tushganda qorayish kamaysa — soya. Lekin aniq javobni ko'rikda shifokor beradi.

## Ko'z osti shishi nima uchun bo'ladi?

- ko'p tuz, kechqurun ko'p suyuqlik va spirtli ichimliklar;
- uyqusizlik yoki notekis uyqu;
- allergiya — qichishish, aksirish, ko'z yoshlanishi bilan;
- yosh bilan qovoq ostidagi yog' to'qimasining oldinga chiqishi ("xaltachalar");
- ba'zan buyrak, qalqonsimon bez yoki yurak bilan bog'liq muammolar.

Ertalabki shish bir necha soatda o'tib ketsa, u odatda turmush tarzi bilan bog'liq. Agar shish doimiy bo'lsa, oyoqlarda ham shish bo'lsa yoki kuchli charchoq, vazn o'zgarishi, siydik o'zgarishi kabi boshqa belgilar bo'lsa — terapevtga ko'rining va tahlil topshiring. Bunday holatda kosmetik muolaja emas, sababni aniqlash birinchi o'rinda.

## Qachon kosmetolog emas, shifokor kerak?

- shish to'satdan paydo bo'lsa yoki tez kattalashsa;
- faqat bitta ko'z shishsa;
- qovoq qizarib, og'risa, issiq bo'lsa yoki ko'rish o'zgarsa;
- ko'z atrofida qichishadigan, qipiqlanadigan toshma bo'lsa — bu ko'pincha qovoq dermatiti (kontakt allergiya yoki ekzema);
- ko'z ostida yoki qovoqda tugun, donacha yoki o'sib borayotgan hosila bo'lsa.

Nafas qisishi, lab yoki til shishi bilan birga kelgan shish — shoshilinch holat, darhol tez yordam chaqiring. Batafsil: [teri allergiyasi va eshakemi](/uz/articles/art-eshakemi-teri-allergiyasi). Ko'z atrofidagi mayda oq donachalar haqida: [milium](/uz/articles/art-milium).

## Uyda nima qilmaslik kerak

- ko'z atrofiga "oqartiruvchi" kremlar, limon, peroksid yoki uy retseptlarini surtish — bu yerda teri juda yupqa, kuyish va dermatit oson bo'ladi;
- salonlarda shifokor bo'lmagan mutaxassisdan filler yoki "vitamin ukollari" qildirish — ko'z atrofida tomirlar ko'p, asoratlar jiddiy bo'lishi mumkin;
- ko'zni ishqalash va qattiq massaj qilish — pigment va shishni kuchaytiradi;
- shishni tushirish uchun o'zingizcha siydik haydovchi vositalar ichish.

## Uyda nima haqiqatan yordam beradi

- muntazam 7–8 soatlik uyqu, boshni biroz balandroq qo'yib yotish;
- kechqurun kamroq tuz va spirtli ichimlik;
- allergiya bo'lsa — uni shifokor bilan davolash va ko'zni ishqalamaslik;
- har kuni SPF va quyosh ko'zoynagi — pigment turi uchun ayniqsa muhim;
- ertalabki shishga sovuq kompress (toza mato orqali) 5–10 daqiqa;
- ko'z atrofi uchun yengil kremlar — terini namlaydi va biroz yaxshilaydi, lekin ularning ta'siri cheklangan.

## Klinikada qanday aniqlanadi va davolanadi

Kosmetolog-dermatolog terini yaxshi yorug'likda ko'radi, ko'z osti turini va shish sababini aniqlaydi. Agar sabab ichki bo'lsa, avval tahlil va tegishli shifokor. Muolajalar faqat ko'rikdan keyin tanlanadi:

- **Biorevitalizatsiya va teri sifatini yaxshilovchi inyeksiyalar** — ko'z atrofini yoshartirish uchun maxsus preparatlar, masalan Rejuran; yupqa terini zichroq va tiniqroq qiladi, tomir turida foydali. Batafsil: [biorevitalizatsiya](/uz/articles/art-biorevitalizatsiya-radeski).
- **Ko'z yoshi tarnovini filler bilan to'g'irlash** — soya turida; faqat shifokor, yuz anatomiyasini bilgan holda bajaradi. Shish kuchli bo'lsa, filler mos kelmasligi mumkin.
- **Lazer va IPL** — pigment va ko'rinib turgan tomirlar uchun. Batafsil: [pigment dog'larini davolash](/uz/articles/art-pigment-doglari-qishda).
- **Piling** — pigment turida, ko'z atrofiga mos yengil tarkibda. Batafsil: [kimyoviy piling](/uz/articles/art-kimyoviy-piling).
- **Lazer biorevitalizatsiya** — inyeksiyasiz namlantirish va teri sifatini yaxshilash.

Natijalar har xil bo'ladi. Irsiy pigment va suyak tuzilishi bilan bog'liq soya ko'pincha faqat qisman kamayadi — buni oldindan bilish to'g'ri kutishlarni shakllantiradi. Odatda bir nechta usul birga va kurs bilan qo'llanadi, natijani esa SPF va to'g'ri parvarish saqlab turadi. Yuzda boshqa dog'lar ham bo'lsa: [teri dog'lari](/uz/conditions/teri-doglari).

## Farg'ona va Qo'qonda ko'z osti qorayishi va shishini davolash

Radeski Skin Clinic'da kosmetolog-dermatolog ko'z osti turini aniqlaydi, shish sababini tekshiradi va sizga mos rejani taklif qiladi.

- [Kosmetolog Farg'onada](/uz/fargona/kosmetolog) va [Qo'qonda](/uz/qoqon/kosmetolog);
- [Pigmentatsiya davolash Farg'onada](/uz/fargona/pigmentatsiya) va [Qo'qonda](/uz/qoqon/pigmentatsiya);
- [Biorevitalizatsiya](/uz/services/in-ekcionnaya-kosmetologiya/biorevitalizatsiya), [kontur plastikasi (fillerlar)](/uz/services/in-ekcionnaya-kosmetologiya/kontur-plastikasi), [lazer biorevitalizatsiya](/uz/services/apparatnaya-kosmetologiya/lazer-biorevitalizatsiya).

Ko'z osti qorayishini "bitta krem" bilan emas, sababini bilgan holda davolash kerak — buni shifokor ko'rigidan boshlang.`;
}

function ruBody(): string {
  return `Тёмные круги и отёки под глазами — один из самых частых вопросов к косметологу. Человек выспался, а лицо всё равно выглядит «уставшим». На самом деле «круги» — это не одна проблема: у них несколько типов, и к каждому нужен свой подход. Поэтому сначала важно понять причину, а уже потом выбирать процедуру.

## Типы тёмных кругов

- **Пигментный** — кожа коричневатого или буроватого оттенка. Часто это наследственность; солнце, привычка тереть глаза и аллергия усиливают его. Чаще встречается у людей со смуглой кожей.
- **Сосудистый** — кожа под глазами очень тонкая, и сосуды под ней просвечивают синеватым или фиолетовым цветом. Сильнее заметен при усталости, недосыпе и с возрастом.
- **Теневой** — под глазом есть впадина (носослёзная борозда), и при освещении в ней появляется тень. Это связано со строением: уменьшение жировой ткани, возраст, строение костей.
- **Смешанный** — у многих одновременно две-три причины.

Простое наблюдение: если слегка натянуть кожу под глазом пальцем и цвет почти не меняется — скорее пигмент; если синева усиливается — сосуды; если круги бледнеют при прямом свете — тень. Но точный ответ даёт врач на осмотре.

## Почему появляются отёки под глазами?

- много соли, много жидкости на ночь и алкоголь;
- недосып или нерегулярный сон;
- аллергия — с зудом, чиханием, слезотечением;
- выпячивание жировой ткани под веком с возрастом («мешки»);
- иногда — проблемы с почками, щитовидной железой или сердцем.

Если утренний отёк проходит за несколько часов, он обычно связан с образом жизни. Если отёк держится постоянно, отекают и ноги или есть другие признаки — сильная усталость, изменение веса, изменения мочи, — обратитесь к терапевту и сдайте анализы. В этом случае на первом месте не косметическая процедура, а поиск причины.

## Когда нужен не косметолог, а врач?

- отёк появился внезапно или быстро нарастает;
- отекает только один глаз;
- веко покраснело, болит, горячее на ощупь или изменилось зрение;
- вокруг глаз зудящая, шелушащаяся сыпь — часто это дерматит век (контактная аллергия или экзема);
- под глазом или на веке есть узелок, бугорок или растущее образование.

Отёк вместе с затруднённым дыханием, отёком губ или языка — неотложное состояние, сразу вызывайте скорую. Подробнее: [аллергия на коже и крапивница](/ru/articles/art-eshakemi-teri-allergiyasi). О мелких белых зёрнышках вокруг глаз: [милиумы](/ru/articles/art-milium).

## Чего не делать дома

- наносить вокруг глаз «отбеливающие» кремы, лимон, перекись или домашние рецепты — кожа здесь очень тонкая, ожог и дерматит возникают легко;
- делать филлеры или «витаминные уколы» в салоне у специалиста без медицинского образования — вокруг глаз много сосудов, осложнения могут быть серьёзными;
- тереть глаза и делать сильный массаж — это усиливает пигментацию и отёки;
- самостоятельно пить мочегонные средства, чтобы убрать отёки.

## Что действительно помогает дома

- регулярный сон 7–8 часов, голова чуть выше на подушке;
- меньше соли и алкоголя по вечерам;
- при аллергии — лечить её с врачом и не тереть глаза;
- ежедневно SPF и солнцезащитные очки — особенно важно при пигментном типе;
- при утренних отёках — холодный компресс (через чистую ткань) на 5–10 минут;
- лёгкие кремы для зоны вокруг глаз — увлажняют и немного улучшают вид, но их эффект ограничен.

## Как определяют причину и лечат в клинике

Косметолог-дерматолог осматривает кожу при хорошем освещении, определяет тип кругов и причину отёков. Если причина внутренняя — сначала анализы и профильный врач. Процедуры подбирают только после осмотра:

- **Биоревитализация и инъекции для качества кожи** — специальные препараты для омоложения зоны вокруг глаз, например Rejuran; делают тонкую кожу плотнее и ровнее по тону, полезны при сосудистом типе. Подробнее: [биоревитализация](/ru/articles/art-biorevitalizatsiya-radeski).
- **Коррекция носослёзной борозды филлером** — при теневом типе; выполняет только врач, знающий анатомию лица. При выраженных отёках филлер может не подойти.
- **Лазер и IPL** — при пигменте и видимых сосудах. Подробнее: [лечение пигментных пятен](/ru/articles/art-pigment-doglari-qishda).
- **Пилинг** — при пигментном типе, мягкий состав, подходящий для зоны у глаз. Подробнее: [химический пилинг](/ru/articles/art-kimyoviy-piling).
- **Лазерная биоревитализация** — увлажнение и улучшение качества кожи без инъекций.

Результаты у всех разные. Наследственный пигмент и тень, связанная со строением костей, чаще всего уменьшаются лишь частично — лучше знать это заранее, чтобы ожидания были реалистичными. Обычно сочетают несколько методов курсом, а результат поддерживают SPF и правильный уход. Если на лице есть и другие пятна: [пятна на коже](/ru/conditions/teri-doglari).

## Лечение тёмных кругов и отёков под глазами в Фергане и Коканде

В Radeski Skin Clinic косметолог-дерматолог определит тип кругов, проверит причину отёков и предложит подходящий план.

- [Косметолог в Фергане](/ru/fargona/kosmetolog) и [в Коканде](/ru/qoqon/kosmetolog);
- [Лечение пигментации в Фергане](/ru/fargona/pigmentatsiya) и [в Коканде](/ru/qoqon/pigmentatsiya);
- [Биоревитализация](/ru/services/in-ekcionnaya-kosmetologiya/biorevitalizatsiya), [контурная пластика (филлеры)](/ru/services/in-ekcionnaya-kosmetologiya/kontur-plastikasi), [лазерная биоревитализация](/ru/services/apparatnaya-kosmetologiya/lazer-biorevitalizatsiya).

Тёмные круги лечат не «одним кремом», а зная их причину, — начните с осмотра у врача.`;
}

function enBody(): string {
  return `Dark circles and under-eye puffiness are among the most common questions people bring to a cosmetologist. You may have slept well and still look "tired". In fact, dark circles are not one problem: there are several types, and each needs a different approach. That is why the first step is finding the cause, and only then choosing a treatment.

## Types of dark circles

- **Pigment type** — the skin is brownish. It is often hereditary; sun, frequent eye rubbing and allergies make it worse. It is more common in darker skin.
- **Vascular type** — the skin under the eyes is very thin, and the vessels beneath it show through as bluish or purple. It looks stronger with fatigue, lack of sleep and age.
- **Shadow type** — there is a hollow under the eye (the tear trough), and light creates a shadow in it. This is about structure: loss of fat tissue, age and bone shape.
- **Mixed type** — many people have two or three causes at once.

A simple observation: if you gently stretch the skin under the eye with a finger and the colour barely changes, it is more likely pigment; if the blue deepens, it is vessels; if the circles fade under direct light, it is a shadow. But the real answer comes from a doctor's examination.

## Why does puffiness happen?

- a lot of salt, a lot of fluid at night, and alcohol;
- lack of sleep or irregular sleep;
- allergies — with itching, sneezing and watery eyes;
- fat tissue under the eyelid bulging forward with age ("bags");
- sometimes problems with the kidneys, thyroid or heart.

If morning puffiness goes down within a few hours, it is usually linked to lifestyle. If the swelling is constant, your legs swell too, or there are other signs — marked tiredness, weight change, changes in urine — see a general physician and have tests done. In that case finding the cause comes before any cosmetic procedure.

## When you need a doctor rather than a cosmetologist

- the swelling appears suddenly or grows quickly;
- only one eye is swollen;
- the eyelid is red, painful, warm, or your vision changes;
- there is an itchy, flaky rash around the eyes — often eyelid dermatitis (contact allergy or eczema);
- there is a lump, bump or growing spot under the eye or on the eyelid.

Swelling together with difficulty breathing or swelling of the lips or tongue is an emergency — call an ambulance at once. More: [skin allergy and hives](/en/articles/art-eshakemi-teri-allergiyasi). For tiny white bumps around the eyes: [milia](/en/articles/art-milium).

## What not to do at home

- apply "whitening" creams, lemon, peroxide or home recipes around the eyes — the skin here is very thin and burns or dermatitis happen easily;
- have fillers or "vitamin injections" in a salon from someone who is not a doctor — the eye area has many vessels and complications can be serious;
- rub your eyes or massage hard — it makes pigment and puffiness worse;
- take water pills on your own to bring the swelling down.

## What really helps at home

- regular 7–8 hours of sleep, with your head slightly raised;
- less salt and alcohol in the evening;
- if you have allergies, treat them with a doctor and do not rub your eyes;
- daily SPF and sunglasses — especially important for the pigment type;
- for morning puffiness, a cold compress (through a clean cloth) for 5–10 minutes;
- light eye creams — they moisturise and help a little, but their effect is limited.

## How the clinic finds the cause and treats it

A dermatologist-cosmetologist examines the skin in good light and identifies the type of circles and the cause of puffiness. If the cause is internal, tests and the right specialist come first. Treatments are chosen only after the examination:

- **Biorevitalization and skin-quality injections** — dedicated products for eye-area rejuvenation, such as Rejuran; they make thin skin denser and more even in tone and help with the vascular type. More: [biorevitalization](/en/articles/art-biorevitalizatsiya-radeski).
- **Tear-trough correction with filler** — for the shadow type; done only by a doctor who knows facial anatomy. If puffiness is marked, filler may not be suitable.
- **Laser and IPL** — for pigment and visible vessels. More: [treating pigment spots](/en/articles/art-pigment-doglari-qishda).
- **Peels** — for the pigment type, with a gentle formula suitable near the eyes. More: [chemical peels](/en/articles/art-kimyoviy-piling).
- **Laser biorevitalization** — hydration and better skin quality without injections.

Results differ from person to person. Hereditary pigment and shadows caused by bone structure usually improve only partly — knowing this in advance keeps expectations realistic. Several methods are usually combined as a course, and SPF and good daily care help keep the result. If you have other spots on your face too: [skin spots](/en/conditions/teri-doglari).

## Dark circles and under-eye puffiness treatment in Fergana and Kokand

At Radeski Skin Clinic a dermatologist-cosmetologist identifies the type of circles, checks the cause of puffiness and suggests a plan that suits you.

- [Cosmetologist in Fergana](/en/fargona/kosmetolog) and [in Kokand](/en/qoqon/kosmetolog);
- [Pigmentation treatment in Fergana](/en/fargona/pigmentatsiya) and [in Kokand](/en/qoqon/pigmentatsiya);
- [Biorevitalization](/en/services/in-ekcionnaya-kosmetologiya/biorevitalizatsiya), [dermal fillers](/en/services/in-ekcionnaya-kosmetologiya/kontur-plastikasi), [laser biorevitalization](/en/services/apparatnaya-kosmetologiya/lazer-biorevitalizatsiya).

Dark circles are treated not with "one cream" but by knowing their cause — start with a doctor's examination.`;
}

export const DARK_CIRCLES_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Ko'z osti qorayishi va shishi: pigment, tomir va soya turlari, shish sabablari, qachon shifokor kerak va klinikada nima yordam beradi. Farg'ona va Qo'qonda kosmetolog.",
    body: uzBody(),
    keyTakeaways: [
      "Ko'z osti qorayishining bir nechta turi bor: pigment, tomir, soya va aralash",
      "Doimiy shish, oyoqlarda ham shish yoki boshqa belgilar bo'lsa — terapevt va tahlil kerak",
      "To'satdan, bir tomonlama yoki og'riqli shish va qichishadigan toshma — shifokorga sabab",
      "Uyqu, kamroq tuz, SPF, ishqalamaslik va sovuq kompress haqiqatan yordam beradi",
      "Muolaja ko'rikdan keyin tanlanadi; irsiy va tuzilish bilan bog'liq turlar qisman yaxshilanadi",
    ],
    tags: ["Ko'z osti qorayishi", "Ko'z osti shishi", 'Qora doiralar', 'Biorevitalizatsiya', 'Kosmetolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Shish to'satdan paydo bo'lsa yoki faqat bitta ko'z shishsa",
      "Qovoq qizarsa, og'risa yoki ko'rish o'zgarsa",
      "Ko'z atrofida qichishadigan, qipiqlanadigan toshma bo'lsa",
      "Shish doimiy bo'lsa yoki oyoqlar ham shishsa",
      "Ko'z ostida yoki qovoqda tugun yoki o'sib borayotgan hosila bo'lsa",
    ],
    faq: [
      {
        question: "Ko'z osti qorayishi irsiy bo'lsa, uni yo'qotib bo'ladimi?",
        answer:
          "Irsiy pigment va suyak tuzilishi bilan bog'liq soya odatda faqat qisman kamayadi. Muolajalar ularni kamroq sezilarli qiladi, natijani esa SPF va to'g'ri parvarish saqlab turadi.",
      },
      {
        question: "Ko'z kremlari qora doiralarni ketkazadimi?",
        answer:
          "Ko'z kremlari terini namlaydi va biroz yaxshilaydi, lekin pigment, tomir yoki chuqurchani to'liq ketkaza olmaydi. Ular parvarishning bir qismi, asosiy davolash emas.",
      },
      {
        question: "Ertalabki shish xavflimi?",
        answer:
          "Bir necha soatda o'tib ketadigan ertalabki shish odatda tuz, uyqu yoki allergiya bilan bog'liq. Shish doimiy bo'lsa, oyoqlar ham shishsa yoki boshqa belgilar bo'lsa, terapevtga ko'rining.",
      },
      {
        question: "Ko'z yoshi tarnoviga filler hammaga mos keladimi?",
        answer:
          "Yo'q. Filler asosan soya turida yordam beradi va faqat shifokor tomonidan ko'rikdan keyin qilinadi. Shish kuchli bo'lsa yoki teri juda yupqa bo'lsa, boshqa usul tanlanishi mumkin.",
      },
      {
        question: "Farg'ona va Qo'qonda ko'z osti qorayishini qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida kosmetolog-dermatolog ko'z osti turini aniqlaydi va mos muolajani tanlaydi. Saytda yoki +998 73 200-73-73 (Farg'ona) yoki +998 95 145 73 73 (Qo'qon) raqamlari orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Тёмные круги и отёки под глазами: пигментный, сосудистый и теневой типы, причины отёков, когда нужен врач и что помогает в клинике. Косметолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'У тёмных кругов несколько типов: пигментный, сосудистый, теневой и смешанный',
      'Постоянные отёки, отёки ног или другие симптомы — повод для терапевта и анализов',
      'Внезапный, односторонний или болезненный отёк и зудящая сыпь — повод для врача',
      'Сон, меньше соли, SPF, отказ от трения глаз и холодный компресс действительно помогают',
      'Процедуры подбирают после осмотра; наследственные и «костные» типы улучшаются частично',
    ],
    tags: ['Тёмные круги под глазами', 'Отёки под глазами', 'Мешки под глазами', 'Биоревитализация', 'Косметолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Отёк появился внезапно или отекает только один глаз',
      'Веко покраснело, болит или изменилось зрение',
      'Вокруг глаз зудящая, шелушащаяся сыпь',
      'Отёки держатся постоянно или отекают и ноги',
      'Под глазом или на веке узелок или растущее образование',
    ],
    faq: [
      {
        question: 'Можно ли убрать наследственные тёмные круги?',
        answer:
          'Наследственный пигмент и тень, связанная со строением костей, обычно уменьшаются лишь частично. Процедуры делают их менее заметными, а результат поддерживают SPF и правильный уход.',
      },
      {
        question: 'Помогают ли кремы для глаз от тёмных кругов?',
        answer:
          'Кремы для глаз увлажняют и немного улучшают вид кожи, но не убирают полностью пигмент, сосуды или впадину. Это часть ухода, а не основное лечение.',
      },
      {
        question: 'Опасны ли утренние отёки?',
        answer:
          'Утренний отёк, который проходит за несколько часов, обычно связан с солью, сном или аллергией. Если отёки постоянные, отекают ноги или есть другие симптомы, обратитесь к терапевту.',
      },
      {
        question: 'Подходит ли филлер в носослёзную борозду всем?',
        answer:
          'Нет. Филлер помогает в основном при теневом типе и вводится только врачом после осмотра. При выраженных отёках или очень тонкой коже могут выбрать другой метод.',
      },
      {
        question: 'Где лечить тёмные круги под глазами в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде косметолог-дерматолог определит тип кругов и подберёт подходящую процедуру. Записаться можно на сайте или по телефону +998 73 200-73-73 (Фергана) или +998 95 145 73 73 (Коканд).',
      },
    ],
  },
  en: {
    summary:
      'Dark circles and under-eye puffiness: pigment, vascular and shadow types, causes of swelling, when to see a doctor and what helps at the clinic. Cosmetologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Dark circles come in several types: pigment, vascular, shadow and mixed',
      'Constant puffiness, swollen legs or other symptoms call for a physician and tests',
      'Sudden, one-sided or painful swelling and an itchy rash are reasons to see a doctor',
      'Sleep, less salt, SPF, not rubbing and a cold compress genuinely help',
      'Treatment is chosen after examination; hereditary and bone-related types improve only partly',
    ],
    tags: ['Dark circles', 'Under-eye puffiness', 'Under-eye bags', 'Biorevitalization', 'Cosmetologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Swelling appears suddenly or only one eye is swollen',
      'The eyelid is red, painful or your vision changes',
      'An itchy, flaky rash appears around the eyes',
      'Puffiness is constant or your legs swell too',
      'A lump or growing spot appears under the eye or on the eyelid',
    ],
    faq: [
      {
        question: 'Can hereditary dark circles be removed?',
        answer:
          'Hereditary pigment and shadows caused by bone structure usually improve only partly. Treatment makes them less noticeable, and SPF and good daily care help keep the result.',
      },
      {
        question: 'Do eye creams get rid of dark circles?',
        answer:
          'Eye creams moisturise and improve the skin a little, but they cannot fully remove pigment, vessels or a hollow. They are part of daily care, not the main treatment.',
      },
      {
        question: 'Is morning puffiness dangerous?',
        answer:
          'Morning puffiness that goes down within a few hours is usually linked to salt, sleep or allergies. If it is constant, your legs swell or there are other symptoms, see a general physician.',
      },
      {
        question: 'Is tear-trough filler right for everyone?',
        answer:
          'No. Filler mainly helps the shadow type and is injected only by a doctor after an examination. With marked puffiness or very thin skin, another method may be chosen.',
      },
      {
        question: 'Where can I treat dark circles in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist-cosmetologist identifies the type of circles and chooses a suitable treatment. Book on the website or call +998 73 200-73-73 (Fergana) or +998 95 145 73 73 (Kokand).',
      },
    ],
  },
};

export const DARK_CIRCLES_ARTICLE: Article = {
  id: 'art-koz-osti-qorayishi',
  slug: 'koz-osti-qorayishi',
  title: {
    uz: "Ko'z osti qorayishi va shishi: turlari, sabablari va nima haqiqatan yordam beradi",
    ru: 'Тёмные круги и отёки под глазами: типы, причины и что действительно помогает',
    en: 'Dark Circles and Under-Eye Puffiness: Types, Causes and What Really Helps',
  },
  summary: {
    uz: DARK_CIRCLES_ARTICLE_CATALOG.uz.summary,
    ru: DARK_CIRCLES_ARTICLE_CATALOG.ru.summary,
    en: DARK_CIRCLES_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: DARK_CIRCLES_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: DARK_CIRCLES_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: DARK_CIRCLES_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Mangasaryan Lorena Georgievna',
    ru: 'Мангасарян Лорена Георгиевна',
    en: 'Dr. Lorena Georgievna Mangasaryan',
  },
  date: '2026-11-28',
  image: '/articles/koz-osti-cover.jpg',
  images: {
    uz: '/articles/koz-osti-cover.jpg',
    ru: '/articles/koz-osti-cover.jpg',
    en: '/articles/koz-osti-cover.jpg',
  },
  views: 0,
};
