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
 * Ingrown toenail (onychocryptosis) — a general guide; the real case lives in
 * art-onixokriptoz-klinik-holat and is only linked. Points: causes (round/short cutting, tight
 * shoes, injury, sweating, nail shape, sport), three stages up to "wild flesh", what not to do at
 * home, urgent signs (pus, spreading redness, fever, diabetes), how a podiatrist treats it
 * (processing, correcting braces/plates/wires, minor surgery under local anaesthetic if needed),
 * correct nail cutting and shoes. No medicine names.
 */

function uzBody(): string {
  return `Ichiga o'sgan tirnoq (onixokriptoz) — tirnoq yon chetining atrofdagi yumshoq teriga botib o'sishi. Ko'pincha oyoqning bosh barmog'i zararlanadi. Avvaliga bu shunchaki noqulaylik bo'lib tuyuladi: biroz qizarish va poyabzalda og'riq. Lekin vaqt o'tishi bilan yallig'lanish, yiring va yurishga xalaqit beradigan og'riq paydo bo'lishi mumkin. Yaxshi xabar: erta murojaat qilinsa, ko'pincha jarrohliksiz yordam berish mumkin. Bu maqola — umumiy qo'llanma; podolog qabulidagi haqiqiy holatni [klinik holat](/uz/articles/art-onixokriptoz-klinik-holat) maqolasida o'qishingiz mumkin.

## Ichiga o'sgan tirnoq nima?

Sog'lom tirnoq plastinkasi tirnoq yostiqchasi ustida to'g'ri oldinga o'sadi. Agar uning yon cheti yoki o'tkir burchagi teri ichiga kirib qolsa, teri buni "begona jism" deb qabul qiladi: shishadi, yallig'lanadi va tirnoq atrofida yara hosil bo'ladi. Har bir qadamda bosim tushgani uchun yallig'lanish o'z-o'zidan kamdan-kam o'tadi.

## Nima uchun paydo bo'ladi?

- **Tirnoqni noto'g'ri kesish** — burchaklarni yumaloq qilib va juda kalta kesish eng keng tarqalgan sabab: o'sib kelayotgan chet teriga tiraladi.
- **Tor va siqadigan poyabzal** — uchli tumshuqli tuflilar, baland poshna yoki kichik o'lcham barmoqlarni bir-biriga siqadi.
- **Jarohat** — barmoqni urib olish, ustiga og'ir narsa tushishi.
- **Ko'p terlash** — nam teri yumshaydi va tirnoq chetiga osonroq botadi.
- **Tirnoq shakli va irsiyat** — ba'zi odamlarda tirnoq tabiatan keng yoki chetlari pastga egilgan bo'ladi; bu oilada takrorlanishi mumkin.
- **Sport va yuklama** — futbol, yugurish, raqs va uzoq yurish tirnoqqa takroriy zarba va bosim beradi.

Zamburug' ham tirnoqni qalinlashtirib, shaklini o'zgartirishi mumkin — batafsil: [tirnoq zamburug'i](/uz/articles/art-tirnoq-zamburugi).

## Bosqichlari

- **Boshlang'ich bosqich** — tirnoq cheti yonida qizarish, bosganda va poyabzalda og'riq.
- **Yallig'lanish bosqichi** — shish kuchayadi, teri issiq bo'ladi, tirnoq chetidan yiring chiqishi mumkin.
- **Surunkali bosqich** — tirnoq chetida qizil, oson qonaydigan "yovvoyi go'sht" (granulyatsion to'qima) o'sadi, og'riq doimiy bo'ladi.

Qanchalik erta murojaat qilinsa, davolash shunchalik oddiy va qisqa bo'ladi.

## Uyda nima qilmaslik kerak?

- tirnoq burchagini qaychi bilan "o'yib" kesmang — keyingi safar tirnoq yana chuqurroq o'sadi;
- tirnoq ostini igna, qaychi uchi yoki boshqa narsa bilan kovlamang;
- yiringni siqmang;
- uyda "jarrohlik" qilmang va tibbiy bo'lmagan joyda qildirmang — infeksiya chuqurga tarqalishi mumkin;
- noma'lum malham va xalq usullarini qo'ymang.

Uyda qilish mumkin bo'lgani: oyoqni toza iliq suvda yuvish, yaxshilab quritish, barmoqni siqmaydigan ochiq yoki keng poyabzal kiyish va tez orada podologga yozilish.

## Qachon shoshilinch shifokorga borish kerak?

- yiring chiqsa yoki og'riq tez kuchaysa;
- qizarish barmoqdan oyoq panjasiga tarqalsa;
- isitma yoki titroq bo'lsa;
- qandli diabet yoki oyoqda qon aylanishi yomon bo'lsa — bunda kichik yallig'lanish ham xavfli; batafsil: [diabetda oyoq parvarishi](/uz/articles/art-diabetda-oyoq-parvarishi);
- bir necha kunda yaxshilanmasa yoki muammo qayta-qayta qaytsa.

## Podolog qanday davolaydi?

Avval shifokor barmoqni ko'radi, yallig'lanish darajasini va tirnoq shaklini baholaydi, zamburug' yoki boshqa sabablarni istisno qiladi. Keyin holatga qarab usul tanlanadi:

- **Ehtiyotkor ishlov berish** — teriga botgan chet steril asbob bilan bo'shatiladi, tirnoq va atrofdagi teri tozalanadi, qalinlashgan joylar apparat bilan yupqalashtiriladi. Ko'pincha shuning o'zi og'riqni sezilarli kamaytiradi.
- **Tuzatuvchi tizimlar** — tirnoq ustiga maxsus skoba, plastinka yoki sim o'rnatiladi. Ular tirnoqni asta-sekin, yumshoq to'g'rilaydi va chetini teridan ko'taradi. Bu bir necha hafta yoki oy davom etadigan bosqichma-bosqich jarayon; tizim vaqti-vaqti bilan tekshiriladi va sozlanadi.
- **Yallig'lanishni davolash** — kerak bo'lsa, shifokor tayinlagan mahalliy vositalar.
- **Kichik jarrohlik muolajasi** — og'ir yoki qayta-qayta qaytadigan hollarda shifokor mahalliy og'riqsizlantirish ostida tirnoqning teriga botgan chetini olib tashlashi mumkin. Qaysi usul mosligini shifokor hal qiladi.

## Tirnoqni to'g'ri kesish va poyabzal tanlash

- tirnoqni to'g'ri chiziq bo'ylab kesing, burchaklarni yumaloqlamang;
- juda kalta kesmang — chet barmoq uchi bilan taxminan tenglashsin;
- o'tkir burchaklarni faqat egov bilan yengil silliqlang;
- tirnoqni yuvinishdan keyin, u yumshaganda kesing;
- poyabzal barmoqlarga erkin joy qoldirsin va tumshug'i keng bo'lsin; uni kechqurun, oyoq biroz shishganda o'lchab oling;
- sportda o'lchamga mos poyabzal va paxta paypoq kiying, oyoqni quruq saqlang.

Barmoq va tovondagi qalin teri ham bosim belgisi bo'lishi mumkin: [qadoq va kesaklar](/uz/articles/art-qadoq-va-kesak).

## Ichiga o'sgan tirnoqni davolash Farg'ona va Qo'qonda

Radeski Skin Clinic'ning [tirnoq va oyoq patologiyasi klinikasida](/uz/services/clinika-patologii-nogtej) [dermatolog-podolog](/uz/services/clinika-patologii-nogtej/dermatologik-podolog-xizmati) ichiga o'sgan tirnoqni tekshiradi, yallig'lanishni davolaydi va tirnoqning to'g'ri o'sishiga yordam beradi.

- [Ichiga o'sgan tirnoqni davolash Farg'onada](/uz/fargona/ichga-osgan-tirnoq) va [Qo'qonda](/uz/qoqon/ichga-osgan-tirnoq);
- [Podolog Farg'onada](/uz/fargona/podolog) va [Qo'qonda](/uz/qoqon/podolog).

Tirnoq burchagini o'zingiz kesmang: podologga erta borish og'riqni qisqartiradi va ko'pincha jarrohlikdan qutqaradi.`;
}

function ruBody(): string {
  return `Вросший ноготь (онихокриптоз) — это врастание бокового края ногтя в окружающую мягкую кожу. Чаще всего страдает большой палец стопы. Сначала это кажется мелкой неприятностью: лёгкое покраснение и боль в обуви. Но со временем могут появиться воспаление, гной и боль, мешающая ходить. Хорошая новость: при раннем обращении часто удаётся помочь без операции. Эта статья — общее руководство; реальный случай с приёма подолога описан в статье [клинический случай](/ru/articles/art-onixokriptoz-klinik-holat).

## Что такое вросший ноготь?

Здоровая ногтевая пластина растёт прямо вперёд по ногтевому ложу. Если её боковой край или острый уголок уходит в кожу, кожа воспринимает его как «инородное тело»: отекает, воспаляется, и рядом с ногтем образуется ранка. Поскольку при каждом шаге на палец давит вес тела, воспаление редко проходит само.

## Почему ноготь врастает?

- **Неправильная стрижка** — закруглённые и слишком коротко срезанные уголки — самая частая причина: отрастающий край упирается в кожу.
- **Тесная и узкая обувь** — узкий носок, высокий каблук или маленький размер сдавливают пальцы.
- **Травма** — удар пальцем, падение тяжёлого предмета на стопу.
- **Повышенная потливость** — влажная кожа размягчается, и край ногтя легче в неё врезается.
- **Форма ногтя и наследственность** — у некоторых людей ноготь от природы широкий или с загнутыми вниз краями; это может повторяться в семье.
- **Спорт и нагрузки** — футбол, бег, танцы и долгая ходьба дают повторяющиеся удары и давление на ноготь.

Грибок тоже утолщает ноготь и меняет его форму — подробнее: [грибок ногтей](/ru/articles/art-tirnoq-zamburugi).

## Стадии

- **Начальная** — покраснение у края ногтя, боль при надавливании и в обуви.
- **Воспалительная** — отёк нарастает, кожа горячая, из-под края ногтя может выделяться гной.
- **Хроническая** — у края ногтя разрастается красная, легко кровоточащая «дикая плоть» (грануляционная ткань), боль становится постоянной.

Чем раньше обратиться, тем проще и короче лечение.

## Чего нельзя делать дома?

- не вырезайте уголок ногтя ножницами — в следующий раз ноготь врастёт ещё глубже;
- не ковыряйте под ногтем иглой, кончиком ножниц и другими предметами;
- не выдавливайте гной;
- не делайте «операцию» сами и не доверяйте её немедицинским кабинетам — инфекция может уйти вглубь;
- не прикладывайте случайные мази и народные средства.

Что можно дома: мыть стопу чистой тёплой водой, хорошо её вытирать, носить открытую или свободную обувь, не давящую на палец, и в ближайшее время записаться к подологу.

## Когда срочно к врачу?

- появился гной или боль быстро усиливается;
- покраснение распространяется с пальца на стопу;
- есть температура или озноб;
- у вас сахарный диабет или плохое кровообращение в ногах — тогда опасно даже небольшое воспаление; подробнее: [уход за стопами при диабете](/ru/articles/art-diabetda-oyoq-parvarishi);
- за несколько дней не становится лучше или проблема возвращается снова и снова.

## Как лечит подолог?

Сначала врач осматривает палец, оценивает степень воспаления и форму ногтя, исключает грибок и другие причины. Затем метод выбирают по ситуации:

- **Бережная обработка** — вросший край освобождают стерильным инструментом, ноготь и кожу вокруг очищают, утолщённые участки истончают аппаратом. Часто уже это заметно уменьшает боль.
- **Корректирующие системы** — на ноготь устанавливают специальную скобу, пластину или проволоку. Они постепенно и мягко выпрямляют ноготь и приподнимают его край над кожей. Это поэтапный процесс на несколько недель или месяцев; систему периодически проверяют и подтягивают.
- **Лечение воспаления** — при необходимости местные средства, назначенные врачом.
- **Небольшое хирургическое вмешательство** — в запущенных или повторяющихся случаях врач может под местной анестезией удалить вросший край ногтя. Какой метод подходит, решает врач.

## Как правильно стричь ногти и выбирать обувь

- стригите ноготь по прямой линии, не закругляя уголки;
- не срезайте слишком коротко — край должен быть примерно на уровне кончика пальца;
- острые уголки лишь слегка сглаживайте пилкой;
- стригите ногти после мытья, когда они мягче;
- в обуви пальцам должно быть свободно, носок — широким; примеряйте её вечером, когда стопа немного отекает;
- для спорта выбирайте обувь по размеру и хлопковые носки, держите стопы сухими.

Огрубевшая кожа на пальцах и пятке тоже бывает признаком давления: [мозоли и натоптыши](/ru/articles/art-qadoq-va-kesak).

## Лечение вросшего ногтя в Фергане и Коканде

В [клинике патологии ногтей и стопы](/ru/services/clinika-patologii-nogtej) Radeski Skin Clinic [дерматолог-подолог](/ru/services/clinika-patologii-nogtej/dermatologik-podolog-xizmati) осмотрит вросший ноготь, вылечит воспаление и поможет ногтю расти правильно.

- [Лечение вросшего ногтя в Фергане](/ru/fargona/ichga-osgan-tirnoq) и [в Коканде](/ru/qoqon/ichga-osgan-tirnoq);
- [Подолог в Фергане](/ru/fargona/podolog) и [в Коканде](/ru/qoqon/podolog).

Не вырезайте уголок ногтя сами: ранний визит к подологу сокращает время боли и часто избавляет от операции.`;
}

function enBody(): string {
  return `An ingrown toenail (onychocryptosis) is when the side edge of a nail grows into the soft skin next to it. The big toe is affected most often. At first it seems like a minor nuisance: a little redness and pain in shoes. Over time, though, inflammation, pus and pain that makes walking difficult can develop. The good news: if you come early, it can often be helped without surgery. This article is a general guide; for a real case from a podiatrist's practice, read our [clinical case](/en/articles/art-onixokriptoz-klinik-holat).

## What is an ingrown toenail?

A healthy nail plate grows straight forward along the nail bed. If its side edge or a sharp corner pushes into the skin, the skin treats it as a "foreign body": it swells, becomes inflamed and a small wound forms beside the nail. Because body weight presses on the toe with every step, the inflammation rarely settles on its own.

## Why does a nail grow in?

- **Cutting the nail wrongly** — rounding the corners and cutting too short is the most common cause: the edge grows back into the skin.
- **Tight, narrow shoes** — pointed toes, high heels or too small a size squeeze the toes together.
- **Injury** — stubbing the toe or dropping something heavy on the foot.
- **Heavy sweating** — moist skin softens and the nail edge cuts into it more easily.
- **Nail shape and heredity** — some people naturally have wide nails or nails with edges that curve down; this can run in families.
- **Sport and strain** — football, running, dancing and long walks bring repeated knocks and pressure on the nail.

Fungus can also thicken a nail and change its shape — more: [nail fungus](/en/articles/art-tirnoq-zamburugi).

## Stages

- **Early stage** — redness beside the nail edge, pain when pressed and in shoes.
- **Inflamed stage** — swelling increases, the skin feels hot and pus may come from the nail edge.
- **Chronic stage** — red, easily bleeding "wild flesh" (granulation tissue) grows over the nail edge and the pain becomes constant.

The earlier you come, the simpler and shorter the treatment.

## What not to do at home

- do not cut out the corner of the nail with scissors — next time it grows in even deeper;
- do not dig under the nail with a needle, scissor tips or anything else;
- do not squeeze out pus;
- do not do "surgery" yourself or let a non-medical salon do it — infection can spread deeper;
- do not apply random ointments or folk remedies.

What you can do at home: wash the foot in clean warm water, dry it well, wear open or roomy shoes that do not press on the toe, and book a podiatrist soon.

## When to see a doctor urgently

- there is pus or the pain is quickly getting worse;
- redness spreads from the toe onto the foot;
- you have a fever or chills;
- you have diabetes or poor circulation in the legs — then even mild inflammation is dangerous; more: [foot care with diabetes](/en/articles/art-diabetda-oyoq-parvarishi);
- it does not improve within a few days, or keeps coming back.

## How does a podiatrist treat it?

First the doctor examines the toe, assesses the inflammation and the shape of the nail, and rules out fungus and other causes. The method is then chosen for the situation:

- **Careful processing** — the ingrown edge is freed with a sterile instrument, the nail and surrounding skin are cleaned, and thickened areas are thinned with a device. Often this alone noticeably reduces the pain.
- **Correcting systems** — a special brace, plate or wire is fitted to the nail. It gradually and gently straightens the nail and lifts its edge away from the skin. This is a step-by-step process lasting weeks or months; the system is checked and adjusted from time to time.
- **Treating inflammation** — local treatments prescribed by the doctor, if needed.
- **A minor surgical procedure** — in advanced or recurrent cases the doctor may remove the ingrown edge of the nail under local anaesthetic. The doctor decides which method is right.

## Cutting nails correctly and choosing shoes

- cut the nail straight across without rounding the corners;
- do not cut too short — the edge should be roughly level with the tip of the toe;
- only lightly smooth sharp corners with a file;
- cut nails after washing, when they are softer;
- shoes should leave the toes room and have a wide toe box; try them on in the evening, when the feet are slightly swollen;
- for sport, wear shoes that fit and cotton socks, and keep your feet dry.

Hard skin on the toes and heels can also be a sign of pressure: [calluses and corns](/en/articles/art-qadoq-va-kesak).

## Ingrown toenail treatment in Fergana and Kokand

At the Radeski Skin Clinic [nail and foot clinic](/en/services/clinika-patologii-nogtej) a [dermatologist-podiatrist](/en/services/clinika-patologii-nogtej/dermatologik-podolog-xizmati) examines the ingrown nail, treats the inflammation and helps the nail grow correctly.

- [Ingrown toenail treatment in Fergana](/en/fargona/ichga-osgan-tirnoq) and [in Kokand](/en/qoqon/ichga-osgan-tirnoq);
- [Podiatrist in Fergana](/en/fargona/podolog) and [in Kokand](/en/qoqon/podolog).

Do not cut out the nail corner yourself: seeing a podiatrist early shortens the pain and often spares you surgery.`;
}

export const INGROWN_NAIL_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Ichiga o'sgan tirnoq: sabablari, bosqichlari, uyda nima qilmaslik kerak, qachon shoshilinch yordam kerak va tirnoqni jarrohliksiz tuzatish. Farg'ona va Qo'qonda podolog.",
    body: uzBody(),
    keyTakeaways: [
      "Eng ko'p sabab — tirnoq burchaklarini yumaloq va kalta kesish hamda tor poyabzal",
      "Erta bosqichda ko'pincha jarrohliksiz — ishlov berish va tuzatuvchi tizimlar bilan yordam beriladi",
      "Tirnoq burchagini o'yib kesmang, tirnoq ostini kovlamang va yiringni siqmang",
      "Yiring, tarqalayotgan qizarish, isitma yoki diabet — shoshilinch shifokorga",
      "Tirnoqni to'g'ri chiziq bo'ylab kesing va barmoqlarni siqmaydigan poyabzal kiying",
    ],
    tags: ["Ichiga o'sgan tirnoq", 'Onixokriptoz', 'Bosh barmoq', 'Podolog', "Tirnoq va oyoq klinikasi", "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Tirnoq cheti yonida qizarish va og'riq bir necha kunda o'tmasa",
      "Yiring chiqsa yoki og'riq tez kuchaysa",
      "Qizarish oyoq panjasiga tarqalsa yoki isitma bo'lsa",
      "Qandli diabet yoki oyoqda qon aylanishi yomon bo'lsa",
      "Tirnoq chetida \"yovvoyi go'sht\" o'ssa yoki muammo qayta-qayta qaytsa",
    ],
    faq: [
      {
        question: "Ichiga o'sgan tirnoq o'z-o'zidan o'tadimi?",
        answer:
          "Juda erta bosqichda, to'g'ri poyabzal va parvarish bilan ba'zan yengillashadi. Lekin tirnoq cheti teriga botgan bo'lsa, u odatda yana o'sib, yallig'lanishni qaytaradi — shuning uchun podolog ko'rigi kerak.",
      },
      {
        question: 'Har doim operatsiya kerakmi?',
        answer:
          "Yo'q. Ko'p hollarda ehtiyotkor ishlov berish va tirnoqni asta-sekin to'g'rilaydigan tuzatuvchi tizimlar (skoba, plastinka, sim) yetarli. Kichik jarrohlik muolajasi og'ir yoki qayta-qayta qaytadigan hollarda kerak bo'lishi mumkin; buni shifokor hal qiladi.",
      },
      {
        question: "Tuzatuvchi skoba yoki plastinka og'riqlimi?",
        answer:
          "Odatda yo'q: tizim tirnoq ustiga o'rnatiladi va teriga tegmaydi. U tirnoqni yumshoq to'g'rilaydi, shuning uchun natija bir necha hafta yoki oy ichida asta-sekin keladi.",
      },
      {
        question: "Tirnoq qaytadan ichiga o'smasligi uchun nima qilish kerak?",
        answer:
          "Tirnoqni to'g'ri chiziq bo'ylab, juda kalta emas kesing, burchaklarni yumaloqlamang, keng poyabzal kiying va oyoqni quruq saqlang. Tirnoq shakli sabab bo'lsa, podolog uzoqroq tuzatishni tavsiya qilishi mumkin.",
      },
      {
        question: "Farg'ona va Qo'qonda ichiga o'sgan tirnoqni qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog-podolog ichiga o'sgan tirnoqni tekshiradi va holatga mos davolash usulini tanlaydi. Saytda yoki +998 73 200-73-73 (Farg'ona) yoki +998 95 145 73 73 (Qo'qon) raqamlari orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Вросший ноготь: причины, стадии, чего нельзя делать дома, когда нужна срочная помощь и как вросший ноготь исправляют без операции. Подолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Самые частые причины — закруглённые и слишком короткие уголки ногтя и тесная обувь',
      'На ранней стадии часто помогают без операции — обработкой и корректирующими системами',
      'Не вырезайте уголок ногтя, не ковыряйте под ним и не выдавливайте гной',
      'Гной, распространяющееся покраснение, температура или диабет — срочно к врачу',
      'Стригите ноготь по прямой и носите обувь, которая не сдавливает пальцы',
    ],
    tags: ['Вросший ноготь', 'Онихокриптоз', 'Большой палец стопы', 'Подолог', 'Клиника стопы', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Покраснение и боль у края ногтя не проходят за несколько дней',
      'Появился гной или боль быстро усиливается',
      'Покраснение переходит на стопу или поднялась температура',
      'Сахарный диабет или плохое кровообращение в ногах',
      'У края ногтя разрастается «дикая плоть» или проблема возвращается',
    ],
    faq: [
      {
        question: 'Может ли вросший ноготь пройти сам?',
        answer:
          'На самой ранней стадии при правильной обуви и уходе иногда становится легче. Но если край ногтя уже ушёл в кожу, он обычно отрастает снова и воспаление возвращается — поэтому нужен осмотр подолога.',
      },
      {
        question: 'Всегда ли нужна операция?',
        answer:
          'Нет. Во многих случаях достаточно бережной обработки и корректирующих систем (скоба, пластина, проволока), которые постепенно выпрямляют ноготь. Небольшое хирургическое вмешательство может понадобиться в запущенных или повторяющихся случаях; решает врач.',
      },
      {
        question: 'Больно ли носить корректирующую скобу или пластину?',
        answer:
          'Обычно нет: система крепится на ноготь и не касается кожи. Она мягко выпрямляет ноготь, поэтому результат приходит постепенно, за несколько недель или месяцев.',
      },
      {
        question: 'Что делать, чтобы ноготь не врастал снова?',
        answer:
          'Стригите ноготь по прямой и не слишком коротко, не закругляйте уголки, носите свободную обувь и держите стопы сухими. Если причина в форме ногтя, подолог может посоветовать более длительную коррекцию.',
      },
      {
        question: 'Где лечить вросший ноготь в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог-подолог осмотрит вросший ноготь и подберёт подходящий метод лечения. Записаться можно на сайте или по телефону +998 73 200-73-73 (Фергана) или +998 95 145 73 73 (Коканд).',
      },
    ],
  },
  en: {
    summary:
      'Ingrown toenail: causes, stages, what not to do at home, when you need urgent help and how the nail can be corrected without surgery. Podiatrists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'The commonest causes are rounded, too-short nail corners and tight shoes',
      'In the early stage it can often be helped without surgery — with processing and correcting systems',
      'Do not cut out the nail corner, dig under the nail or squeeze pus',
      'Pus, spreading redness, fever or diabetes — see a doctor urgently',
      'Cut nails straight across and wear shoes that do not squeeze the toes',
    ],
    tags: ['Ingrown toenail', 'Onychocryptosis', 'Big toe', 'Podiatrist', 'Foot clinic', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Redness and pain at the nail edge do not settle within a few days',
      'There is pus or the pain is quickly getting worse',
      'Redness spreads onto the foot or you have a fever',
      'You have diabetes or poor circulation in the legs',
      '"Wild flesh" grows at the nail edge or the problem keeps coming back',
    ],
    faq: [
      {
        question: 'Can an ingrown toenail go away on its own?',
        answer:
          'At the very earliest stage, proper shoes and care sometimes ease it. But once the nail edge has grown into the skin, it usually grows back in and the inflammation returns — so a podiatrist should take a look.',
      },
      {
        question: 'Is surgery always needed?',
        answer:
          'No. In many cases careful processing and correcting systems (a brace, plate or wire) that gradually straighten the nail are enough. A minor surgical procedure may be needed in advanced or recurrent cases; the doctor decides.',
      },
      {
        question: 'Does a correcting brace or plate hurt?',
        answer:
          'Usually not: the system sits on the nail and does not touch the skin. It straightens the nail gently, so the result comes gradually, over weeks or months.',
      },
      {
        question: 'How can I stop the nail growing in again?',
        answer:
          'Cut the nail straight across and not too short, do not round the corners, wear roomy shoes and keep your feet dry. If the nail shape is the cause, a podiatrist may recommend longer correction.',
      },
      {
        question: 'Where can I get an ingrown toenail treated in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist-podiatrist examines the ingrown nail and chooses the right treatment. Book on the website or call +998 73 200-73-73 (Fergana) or +998 95 145 73 73 (Kokand).',
      },
    ],
  },
};

export const INGROWN_NAIL_ARTICLE: Article = {
  id: 'art-ichga-osgan-tirnoq',
  slug: 'ichga-osgan-tirnoq',
  title: {
    uz: "Ichiga o'sgan tirnoq (onixokriptoz): sabablari, bosqichlari va podologda davolash",
    ru: 'Вросший ноготь (онихокриптоз): причины, стадии и лечение у подолога',
    en: 'Ingrown Toenail (Onychocryptosis): Causes, Stages and Treatment by a Podiatrist',
  },
  summary: {
    uz: INGROWN_NAIL_ARTICLE_CATALOG.uz.summary,
    ru: INGROWN_NAIL_ARTICLE_CATALOG.ru.summary,
    en: INGROWN_NAIL_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: INGROWN_NAIL_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: INGROWN_NAIL_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: INGROWN_NAIL_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Usmanova Mohinabonu Anvarovna',
    ru: 'Усманова Мохинабону Анваровна',
    en: 'Dr. Mohinabonu Anvarovna Usmanova',
  },
  date: '2026-11-23',
  image: '/articles/ichga-osgan-tirnoq-cover.webp',
  images: {
    uz: '/articles/ichga-osgan-tirnoq-cover.webp',
    ru: '/articles/ichga-osgan-tirnoq-cover.webp',
    en: '/articles/ichga-osgan-tirnoq-cover.webp',
  },
  views: 0,
};
