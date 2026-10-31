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
 * Itchy skin in depth (condition page: /conditions/teri-qichishi). Itching is a symptom, not a
 * diagnosis: the article sorts the causes (dry skin, skin diseases, internal ones), lists the
 * warning signs and what the dermatologist checks, and links to the condition articles.
 */

function uzBody(): string {
  return `Teri qichishi — dermatologga eng ko'p murojaat qilinadigan shikoyatlardan biri. Qichishish alohida kasallik emas, balki belgi: uning ortida oddiy quruq teridan tortib teri kasalliklari va ichki a'zolar muammolarigacha bo'lgan sabablar turishi mumkin. Shuning uchun uzoq davom etgan qichishishni "o'tib ketar" deb kutmasdan, sababini aniqlash muhim.

## Teri nima uchun qichiydi?

Sabablarni uch guruhga bo'lish mumkin.

**1. Quruq teri (kseroz).** Qishda, isitish mavsumida, issiq dush va tez-tez sovun ishlatishdan keyin teri namlikni yo'qotadi va qichiy boshlaydi. Ayniqsa keksa yoshdagi odamlarda ko'p uchraydi. Bunday qichishish odatda boldir, bel va qo'llarda bo'ladi, toshma kam yoki umuman yo'q.

**2. Teri kasalliklari.** Ko'pincha qichishish toshma bilan birga keladi:

- [ekzema](/uz/articles/art-ekzema) va [atopik dermatit](/uz/articles/art-atopic-dermatitis) — qizarish, pufakchalar, quruq dag'al teri;
- [eshakemi va teri allergiyasi](/uz/articles/art-eshakemi-teri-allergiyasi) — tez paydo bo'lib yo'qoladigan pufaklar;
- qo'tir (skabiyez) — barmoqlar orasi, bilak va belda, kechasi kuchayadi, oila a'zolarida ham bo'ladi;
- teri zamburug'i — halqasimon qichiydigan o'choqlar, ko'pincha chov va oyoqda;
- psoriaz, [seboreyali dermatit](/uz/articles/art-seboreyali-dermatit), qizil yassi temiratki;
- hasharot chaqishi va kontakt dermatit.

**3. Ichki sabablar.** Ba'zan teri toza ko'rinadi, lekin qichishish butun tanada davom etadi. Bunday holatda sabab ichki bo'lishi mumkin:

- jigar va o't yo'llari kasalliklari;
- buyrak yetishmovchiligi;
- qalqonsimon bez kasalliklari, qandli diabet;
- temir tanqisligi va qon kasalliklari;
- ba'zi dorilarga reaksiya;
- homiladorlik;
- kuchli stress va xavotir.

## Qichishishning xavfli belgilari

Quyidagi holatlarda shifokorga tezroq murojaat qiling:

- qichishish 2 haftadan ko'p davom etsa va parvarish yordam bermasa;
- butun tana qichisa, lekin toshma bo'lmasa;
- kechasi kuchayib, uyquni buzsa;
- oilada bir necha kishi qichishishdan shikoyat qilsa;
- vazn yo'qotish, holsizlik, isitma, terlash, teri yoki ko'z oqi sarg'ayishi bilan birga kelsa;
- teri tirnalishdan yara bo'lib, yiringlasa.

## Dermatolog qanday tekshiradi?

Qabulda shifokor qichishish qachon boshlangani, qayerda va qachon kuchayishi, qanday dorilar qabul qilinayotgani haqida so'raydi va terini to'liq ko'zdan kechiradi. Kerak bo'lsa:

- dermatoskopiya — toshmani kattalashtirib ko'rish;
- qirindi tahlili — zamburug' va qo'tir kanasini aniqlash uchun;
- qon tahlillari — umumiy qon tahlili, jigar va buyrak ko'rsatkichlari, qand, qalqonsimon bez gormonlari;
- boshqa mutaxassis konsultatsiyasi — sabab ichki bo'lsa.

## Qichishish qanday davolanadi?

Davolash sababga bog'liq: zamburug'ga zamburug'ga qarshi, qo'tirga — qo'tirga qarshi, ekzemaga — yallig'lanishga qarshi davolash kerak. Sababni bilmasdan surtilgan krem qichishishni vaqtincha kamaytirishi, lekin kasallikni yashirishi mumkin. Shuning uchun gormonli kremlar va antigistamin dorilarni shifokor tayinlaydi.

Surunkali va keng tarqalgan qichishishda, masalan ekzema yoki psoriazda, klinikada [fototerapiya](/uz/services/dermatologiya/fototerapiya) qo'llanishi mumkin.

## Uyda nima qilish mumkin?

- Iliq (issiq emas) suvda qisqa yuvining, keyin terini ishqalamasdan sochiq bilan bosib quriting.
- Yuvingandan keyin 3 daqiqa ichida namlovchi krem surting.
- Xushbo'y sovun, spirtli losonlar va qattiq skrablardan voz keching.
- Paxta matosidan keng kiyim kiying, jun va sintetikani teriga tegizmang.
- Xonadagi havoni namlang, kechasi xona salqin bo'lsin.
- Tirnamang: sovuq kompress yoki namlovchi krem qichishishni yumshatadi. Bolalarning tirnoqlarini qisqa qiling.

## Farg'ona va Qo'qonda teri qichishini tekshirish

Radeski Skin Clinic'da [dermatolog](/uz/services/dermatologiya) qichishish sababini aniqlaydi: terini ko'zdan kechiradi, kerak bo'lsa dermatoskopiya, qirindi tahlili va qon tahlillarini buyuradi, keyin davolash va parvarish rejasini tuzadi.

- [Terining qichishi — qisqacha](/uz/conditions/teri-qichishi);
- [Dermatolog Farg'onada](/uz/fargona/dermatolog) — qabul, narxlar va shifokorlar;
- [Dermatolog Qo'qonda](/uz/qoqon/dermatolog) — Qo'qon filialida qabul;
- qichishish bilan kechadigan kasalliklar: [Ekzema](/uz/articles/art-ekzema), [Eshakemi va teri allergiyasi](/uz/articles/art-eshakemi-teri-allergiyasi), [Atopik dermatit](/uz/articles/art-atopic-dermatitis).

Qichishish hayot sifatini sezilarli pasaytiradi — uyqu, ish va kayfiyatga ta'sir qiladi. Sababi topilsa, uni ko'p hollarda tez bartaraf etish mumkin.`;
}

function ruBody(): string {
  return `Зуд кожи — одна из самых частых жалоб на приёме у дерматолога. Зуд — это не отдельная болезнь, а симптом: за ним может стоять что угодно — от обычной сухости кожи до кожных заболеваний и проблем с внутренними органами. Поэтому затяжной зуд не стоит терпеть в надежде, что «само пройдёт», — важно найти причину.

## Почему чешется кожа?

Причины удобно разделить на три группы.

**1. Сухая кожа (ксероз).** Зимой, в отопительный сезон, после горячего душа и частого мытья с мылом кожа теряет влагу и начинает чесаться. Особенно часто это бывает у пожилых людей. Такой зуд обычно на голенях, пояснице и руках, сыпи мало или нет совсем.

**2. Кожные заболевания.** Чаще всего зуд сопровождается высыпаниями:

- [экзема](/ru/articles/art-ekzema) и [атопический дерматит](/ru/articles/art-atopic-dermatitis) — покраснение, пузырьки, сухая грубая кожа;
- [крапивница и аллергия на коже](/ru/articles/art-eshakemi-teri-allergiyasi) — волдыри, которые быстро появляются и исчезают;
- чесотка — между пальцами, на запястьях и поясе, сильнее ночью, бывает у нескольких членов семьи;
- грибок кожи — зудящие кольцевидные очаги, часто в паху и на стопах;
- псориаз, [себорейный дерматит](/ru/articles/art-seboreyali-dermatit), красный плоский лишай;
- укусы насекомых и контактный дерматит.

**3. Внутренние причины.** Иногда кожа выглядит чистой, а зуд держится по всему телу. Тогда причина может быть внутренней:

- заболевания печени и желчных путей;
- почечная недостаточность;
- болезни щитовидной железы, сахарный диабет;
- дефицит железа и заболевания крови;
- реакция на лекарства;
- беременность;
- сильный стресс и тревога.

## Тревожные признаки

Обратитесь к врачу без промедления, если:

- зуд длится больше 2 недель и уход не помогает;
- чешется всё тело, а сыпи нет;
- зуд усиливается ночью и мешает спать;
- на зуд жалуются несколько человек в семье;
- зуд сопровождается похудением, слабостью, температурой, потливостью, желтизной кожи или глаз;
- расчёсы превратились в ранки и гноятся.

## Как обследует дерматолог?

На приёме врач расспросит, когда появился зуд, где и когда он сильнее, какие лекарства вы принимаете, и полностью осмотрит кожу. При необходимости:

- дерматоскопия — осмотр высыпаний при увеличении;
- соскоб — чтобы найти грибок или чесоточного клеща;
- анализы крови — общий анализ, печёночные и почечные показатели, глюкоза, гормоны щитовидной железы;
- консультация другого специалиста — если причина внутренняя.

## Как лечат зуд?

Лечение зависит от причины: грибок лечат противогрибковыми средствами, чесотку — противочесоточными, экзему — противовоспалительными. Крем, нанесённый без диагноза, может на время уменьшить зуд, но скрыть болезнь. Поэтому гормональные кремы и антигистаминные препараты назначает врач.

При хроническом и распространённом зуде, например при экземе или псориазе, в клинике может применяться [фототерапия](/ru/services/dermatologiya/fototerapiya).

## Что можно сделать дома?

- Мойтесь недолго в тёплой (не горячей) воде, кожу промакивайте полотенцем, не растирая.
- В течение 3 минут после душа наносите увлажняющий крем.
- Откажитесь от ароматизированного мыла, спиртовых лосьонов и жёстких скрабов.
- Носите свободную одежду из хлопка, шерсть и синтетика не должны касаться кожи.
- Увлажняйте воздух в комнате, ночью в спальне должно быть прохладно.
- Не расчёсывайте: прохладный компресс или увлажняющий крем смягчают зуд. Детям коротко стригите ногти.

## Обследование при зуде в Фергане и Коканде

В Radeski Skin Clinic [дерматолог](/ru/services/dermatologiya) найдёт причину зуда: осмотрит кожу, при необходимости назначит дерматоскопию, соскоб и анализы крови, а затем составит план лечения и ухода.

- [Зуд кожи — коротко](/ru/conditions/teri-qichishi);
- [Дерматолог в Фергане](/ru/fargona/dermatolog) — приём, цены и врачи;
- [Дерматолог в Коканде](/ru/qoqon/dermatolog) — приём в кокандском филиале;
- заболевания, при которых чешется кожа: [Экзема](/ru/articles/art-ekzema), [Крапивница и аллергия на коже](/ru/articles/art-eshakemi-teri-allergiyasi), [Атопический дерматит](/ru/articles/art-atopic-dermatitis).

Зуд заметно снижает качество жизни — мешает спать, работать, портит настроение. Когда причина найдена, в большинстве случаев его удаётся быстро устранить.`;
}

function enBody(): string {
  return `Itchy skin is one of the most common reasons people see a dermatologist. Itching is not a disease in itself but a symptom: behind it can be anything from ordinary dry skin to skin diseases and problems with internal organs. That is why long-lasting itching should not be left in the hope that it will pass — the cause needs to be found.

## Why does skin itch?

The causes fall into three groups.

**1. Dry skin (xerosis).** In winter, during the heating season, and after hot showers and frequent soap, the skin loses moisture and starts to itch. It is especially common in older people. This itch usually affects the shins, lower back and arms, with little or no rash.

**2. Skin diseases.** Most often the itch comes with a rash:

- [eczema](/en/articles/art-ekzema) and [atopic dermatitis](/en/articles/art-atopic-dermatitis) — redness, blisters, dry rough skin;
- [hives and skin allergy](/en/articles/art-eshakemi-teri-allergiyasi) — welts that appear and fade quickly;
- scabies — between the fingers, on the wrists and waist, worse at night, often in several family members;
- fungal infection — itchy ring-shaped patches, often in the groin and on the feet;
- psoriasis, [seborrheic dermatitis](/en/articles/art-seboreyali-dermatit), lichen planus;
- insect bites and contact dermatitis.

**3. Internal causes.** Sometimes the skin looks clear but the whole body itches. Then the cause may be internal:

- liver and bile duct disease;
- kidney failure;
- thyroid disease, diabetes;
- iron deficiency and blood disorders;
- a reaction to medicines;
- pregnancy;
- severe stress and anxiety.

## Warning signs

See a doctor promptly if:

- the itch lasts more than 2 weeks and skin care does not help;
- your whole body itches but there is no rash;
- the itch gets worse at night and keeps you awake;
- several people in the family are itching;
- it comes with weight loss, weakness, fever, sweating, or yellowing of the skin or eyes;
- scratches have turned into sores and are infected.

## How does a dermatologist investigate?

The doctor asks when the itch started, where and when it is worse and which medicines you take, and examines all of your skin. When needed:

- dermoscopy — looking at the rash under magnification;
- a skin scraping — to find fungus or the scabies mite;
- blood tests — full blood count, liver and kidney markers, glucose, thyroid hormones;
- a referral to another specialist — if the cause is internal.

## How is itching treated?

Treatment depends on the cause: fungus is treated with antifungals, scabies with anti-scabies treatment, eczema with anti-inflammatory treatment. A cream applied without a diagnosis may ease the itch for a while but hide the disease. That is why steroid creams and antihistamines are prescribed by a doctor.

For chronic, widespread itch — in eczema or psoriasis, for example — the clinic may use [phototherapy](/en/services/dermatologiya/fototerapiya).

## What can you do at home?

- Keep showers short and warm (not hot), and pat your skin dry instead of rubbing.
- Apply moisturiser within 3 minutes of showering.
- Avoid scented soap, alcohol-based lotions and harsh scrubs.
- Wear loose cotton clothing; keep wool and synthetics off your skin.
- Humidify the air and keep the bedroom cool at night.
- Do not scratch: a cool compress or moisturiser soothes the itch. Keep children's nails short.

## Itchy skin check-up in Fergana and Kokand

At Radeski Skin Clinic a [dermatologist](/en/services/dermatologiya) finds the cause of the itch: examines the skin, orders dermoscopy, a scraping and blood tests when needed, and then builds a treatment and care plan.

- [Itchy skin — in brief](/en/conditions/teri-qichishi);
- [Dermatologist in Fergana](/en/fargona/dermatolog) — visits, prices and doctors;
- [Dermatologist in Kokand](/en/qoqon/dermatolog) — visits at the Kokand branch;
- conditions that make skin itch: [Eczema](/en/articles/art-ekzema), [Hives and skin allergy](/en/articles/art-eshakemi-teri-allergiyasi), [Atopic dermatitis](/en/articles/art-atopic-dermatitis).

Itching takes a real toll on sleep, work and mood. Once the cause is found, it can usually be dealt with quickly.`;
}

export const SKIN_ITCHING_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Teri nima uchun qichiydi: quruq teri, ekzema, eshakemi, qo'tir, zamburug' va ichki sabablar. Xavfli belgilar, dermatolog tekshiruvi va uyda parvarish. Farg'ona va Qo'qonda dermatolog qabuli.",
    body: uzBody(),
    keyTakeaways: [
      'Qichishish — kasallik emas, belgi: sababini aniqlash kerak',
      "Eng ko'p sabablar: quruq teri, ekzema, eshakemi, qo'tir, zamburug'",
      "Toshmasiz butun tana qichishi ichki kasallik belgisi bo'lishi mumkin",
      "Dermatolog dermatoskopiya, qirindi va qon tahlillari bilan sababni topadi",
      "Sababni bilmasdan gormonli krem surtmang — u kasallikni yashirishi mumkin",
    ],
    tags: ['Teri qichishi', 'Qichishish', 'Quruq teri', "Qo'tir", 'Dermatolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Qichishish 2 haftadan ko'p davom etsa",
      "Butun tana qichisa, lekin toshma bo'lmasa",
      'Kechasi kuchayib, uyquni buzsa',
      'Oilada bir necha kishi qichishishdan shikoyat qilsa',
      "Vazn yo'qotish, isitma yoki teri sarg'ayishi bilan birga kelsa",
    ],
    faq: [
      {
        question: 'Nima uchun kechasi teri ko\'proq qichiydi?',
        answer:
          "Kechasi tana harorati ko'tariladi, teri namlikni ko'proq yo'qotadi, chalg'ituvchi narsalar kamayadi — shuning uchun qichishish kuchliroq seziladi. Kechasi kuchayadigan qichishish qo'tirning ham belgisi bo'lishi mumkin, ayniqsa oila a'zolarida ham bo'lsa.",
      },
      {
        question: "Toshmasiz teri qichishi nimadan bo'ladi?",
        answer:
          "Ko'pincha quruq teridan. Lekin butun tana uzoq qichisa va toshma bo'lmasa, jigar, buyrak, qalqonsimon bez kasalliklari, temir tanqisligi yoki dorilarga reaksiya sabab bo'lishi mumkin. Shifokor qon tahlillarini buyuradi.",
      },
      {
        question: 'Qichishishda antigistamin dori ichish kerakmi?',
        answer:
          "Antigistamin dorilar allergik qichishishda, masalan eshakemida yordam beradi, lekin quruq teri yoki ekzemada ta'siri kam bo'lishi mumkin. Dorini va dozasini shifokor sababga qarab tayinlaydi.",
      },
      {
        question: 'Qichishish stressdan bo\'lishi mumkinmi?',
        answer:
          "Ha, stress qichishishni kuchaytiradi va ba'zan uning asosiy sababi bo'ladi. Lekin \"asab qichishishi\" degan xulosa boshqa sabablar — teri va ichki kasalliklar — tekshirib chiqilgandan keyingina qilinadi.",
      },
      {
        question: "Farg'ona va Qo'qonda teri qichishini qayerda tekshirish mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog terini ko'zdan kechiradi, kerak bo'lsa dermatoskopiya, qirindi va qon tahlillarini buyuradi va davolash rejasini tuzadi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Почему чешется кожа: сухость, экзема, крапивница, чесотка, грибок и внутренние причины. Тревожные признаки, обследование у дерматолога и уход дома. Дерматолог Radeski Skin Clinic в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Зуд — не болезнь, а симптом: нужно найти причину',
      'Частые причины: сухая кожа, экзема, крапивница, чесотка, грибок',
      'Зуд всего тела без сыпи может быть признаком внутреннего заболевания',
      'Дерматолог находит причину с помощью дерматоскопии, соскоба и анализов крови',
      'Не мажьте гормональный крем без диагноза — он может скрыть болезнь',
    ],
    tags: ['Зуд кожи', 'Кожа чешется', 'Сухая кожа', 'Чесотка', 'Дерматолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Зуд длится больше 2 недель',
      'Чешется всё тело, а сыпи нет',
      'Зуд усиливается ночью и мешает спать',
      'На зуд жалуются несколько человек в семье',
      'Зуд с похудением, температурой или желтизной кожи',
    ],
    faq: [
      {
        question: 'Почему кожа сильнее чешется ночью?',
        answer:
          'Ночью повышается температура тела, кожа теряет больше влаги, а отвлекающих факторов меньше — поэтому зуд ощущается сильнее. Ночной зуд может быть и признаком чесотки, особенно если чешутся и другие члены семьи.',
      },
      {
        question: 'Отчего чешется кожа без сыпи?',
        answer:
          'Чаще всего — от сухости кожи. Но если всё тело долго чешется без высыпаний, причиной могут быть болезни печени, почек, щитовидной железы, дефицит железа или реакция на лекарства. Врач назначит анализы крови.',
      },
      {
        question: 'Нужно ли пить антигистаминные при зуде?',
        answer:
          'Антигистаминные помогают при аллергическом зуде, например при крапивнице, но при сухой коже или экземе могут действовать слабо. Препарат и дозу врач подбирает по причине зуда.',
      },
      {
        question: 'Может ли зуд быть от нервов?',
        answer:
          'Да, стресс усиливает зуд, а иногда становится его главной причиной. Но вывод о «нервном зуде» делают только после того, как исключены другие причины — кожные и внутренние заболевания.',
      },
      {
        question: 'Где обследоваться при зуде кожи в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог осмотрит кожу, при необходимости назначит дерматоскопию, соскоб и анализы крови и составит план лечения. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Why skin itches: dryness, eczema, hives, scabies, fungus and internal causes. Warning signs, what a dermatologist checks and home care. Dermatologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Itching is a symptom, not a disease: the cause has to be found',
      'Common causes: dry skin, eczema, hives, scabies, fungus',
      'Whole-body itching without a rash can be a sign of an internal disease',
      'A dermatologist finds the cause with dermoscopy, a scraping and blood tests',
      'Do not use steroid creams without a diagnosis — they can hide the disease',
    ],
    tags: ['Itchy skin', 'Itching', 'Dry skin', 'Scabies', 'Dermatologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'The itch lasts more than 2 weeks',
      'Your whole body itches but there is no rash',
      'The itch is worse at night and keeps you awake',
      'Several people in the family are itching',
      'The itch comes with weight loss, fever or yellow skin',
    ],
    faq: [
      {
        question: 'Why is itching worse at night?',
        answer:
          'At night body temperature rises, the skin loses more moisture and there are fewer distractions, so the itch feels stronger. Night-time itching can also be a sign of scabies, especially if other family members itch too.',
      },
      {
        question: 'What causes itching without a rash?',
        answer:
          'Most often dry skin. But if the whole body itches for a long time without a rash, liver, kidney or thyroid disease, iron deficiency or a reaction to medicines may be the cause. The doctor will order blood tests.',
      },
      {
        question: 'Should I take antihistamines for itching?',
        answer:
          'Antihistamines help with allergic itch such as hives, but may do little for dry skin or eczema. The doctor chooses the medicine and dose according to the cause.',
      },
      {
        question: 'Can itching be caused by stress?',
        answer:
          'Yes, stress makes itching worse and is sometimes its main cause. But "nervous itch" is concluded only after other causes — skin and internal diseases — have been ruled out.',
      },
      {
        question: 'Where can I get itchy skin checked in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist examines the skin, orders dermoscopy, a scraping and blood tests when needed and builds a treatment plan. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const SKIN_ITCHING_ARTICLE: Article = {
  id: 'art-teri-qichishi',
  slug: 'teri-qichishi',
  title: {
    uz: "Teri qichishi: sabablari, xavfli belgilar va davolash — nima uchun teri qichiydi",
    ru: 'Зуд кожи: причины, тревожные признаки и лечение — почему чешется кожа',
    en: 'Itchy Skin: Causes, Warning Signs and Treatment — Why Your Skin Itches',
  },
  summary: {
    uz: SKIN_ITCHING_ARTICLE_CATALOG.uz.summary,
    ru: SKIN_ITCHING_ARTICLE_CATALOG.ru.summary,
    en: SKIN_ITCHING_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: SKIN_ITCHING_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: SKIN_ITCHING_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: SKIN_ITCHING_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Baxriddinov Zuxriddin Muxiddinovich',
    ru: 'Бахриддинов Зухриддин Мухиддинович',
    en: 'Dr. Zuxriddin Muxiddinovich Baxriddinov',
  },
  date: '2026-10-29',
  image: '/articles/teri-qichishi-cover.jpg',
  images: {
    uz: '/articles/teri-qichishi-cover.jpg',
    ru: '/articles/teri-qichishi-cover.jpg',
    en: '/articles/teri-qichishi-cover.jpg',
  },
  views: 0,
};
