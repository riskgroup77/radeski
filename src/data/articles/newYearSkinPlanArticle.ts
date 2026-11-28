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
 * Skin before the New Year holidays — a timing plan written in mid-December. Procedures that need
 * time to heal go first (peels with flaking; CO2 for scars is usually for after the holidays),
 * slow-onset injections about two weeks out, gentle ones a few days before, home care the day
 * before. Pigment/IPL courses are a winter project. What not to do, red flags after a procedure,
 * and the doctor planning it all at a consultation. No prices, no promises.
 */

function uzBody(): string {
  return `Yangi yil bayramlari yaqinlashganda ko'pchilik bayramga chiroyli teri bilan kirish uchun kosmetologga shoshiladi. Lekin har bir muolajaning o'z tiklanish vaqti bor: ba'zilaridan keyin teri bir necha kun po'st tashlaydi, boshqalarining natijasi esa asta-sekin, kunlar davomida ochiladi. Shuning uchun asosiy savol — nima qilish emas, balki **qachon** qilish. Dekabr o'rtasi rejalashtirish uchun eng to'g'ri payt: hali ulgurish mumkin bo'lgan muolajalar bor, ba'zilarini esa bayramdan keyinga qoldirgan ma'qul.

## Nega vaqt muhim?

Muolajadan keyin teri tiklanishi kerak. Qizarish, shish, mayda ko'karishlar yoki po'st tashlash ko'p muolajalarda odatiy holat — ular xavfli emas, lekin bayram suratlarida ko'rinadi. Tiklanish muolaja turiga, teri turiga va odamning o'ziga bog'liq: bir xil muolajadan keyin bir kishida teri ertasiga tinchlanadi, boshqasida bir hafta ketadi. Shu sababli quyidagi muddatlar taxminiy, aniq rejani shifokor konsultatsiyada tuzadi.

## 3 hafta va undan oldin: tiklanishi uzoq muolajalar

- **Kimyoviy piling** — ayniqsa keyin teri po'st tashlaydigan chuqurroq pilinglar. Po'stlanish odatda bir necha kun davom etadi, teri esa undan keyin ham sezgir bo'lib turadi. Bunday pilingni bayramdan kamida 3–4 hafta oldin qilish kerak. Batafsil: [kimyoviy piling](/uz/articles/art-kimyoviy-piling).
- **CO₂ va fraksion lazer** (chandiqlar uchun) — tiklanish bir necha kundan bir necha haftagacha davom etadi, qizarish esa undan ham uzoq saqlanishi mumkin. Dekabr o'rtasida boshlash bayram ko'rinishi uchun odatda kech: bu muolajani bayramdan keyinga rejalashtiring. Batafsil: [CO₂ lazer bilan chandiqlarni davolash](/uz/articles/art-deka-co2-chandiqlar-radeski).

## Taxminan 2 hafta oldin: natijasi asta-sekin ochiladigan muolajalar

- **Botulinoterapiya** — ta'siri birdaniga emas, bir necha kun davomida rivojlanadi, to'liq natija odatda ikki haftaga yaqin vaqtda ko'rinadi. Shifokor natijani tekshirishi uchun ham vaqt qolishi kerak. Batafsil: [botulinoterapiya](/uz/articles/art-botulinoterapiya-radeski).
- **Biorevitalizatsiya** — inyeksiyadan keyingi mayda do'mboqchalar odatda bir necha kunda so'riladi, lekin ba'zan ko'karishlar biroz uzoqroq qoladi. Batafsil: [biorevitalizatsiya](/uz/articles/art-biorevitalizatsiya-radeski).
- **Fillerlar** ([kontur plastikasi](/uz/services/in-ekcionnaya-kosmetologiya/kontur-plastikasi)) — shish va ko'karish bo'lishi mumkin, ayniqsa lablarda. Ikki hafta shish tushishi va kerak bo'lsa shifokor natijani to'g'rilashi uchun yetadi.

## Bir hafta — bir necha kun oldin: yumshoq muolajalar

- **Karbon piling** — odatda bir necha soatlik yengil qizarish bilan o'tadi; teri tiniqroq, teshiklar torroq ko'rinadi. Batafsil: [karbon piling](/uz/articles/art-karbon-piling).
- **Ultratovushli yuz tozalash** — yumshoq usul, lekin har qanday tozalashdan keyin teri bir kungacha qizarib turishi mumkin. Uni bayramdan bir necha kun oldin qiling, oxirgi kunga qoldirmang.
- **Lazer biorevitalizatsiya** — inyeksiyasiz namlantirish, odatda deyarli tiklanish talab qilmaydi; qishki quruqlikdan keyin teri yangilangan ko'rinadi.

## Bayramdan bir kun oldin: faqat uy parvarishi

Oxirgi kunda yangi muolaja qilmang. Yumshoq tozalash, namlantiruvchi krem, odatdagi niqob — shu yetarli. Teri tinch va dam olgan bo'lishi kerak.

## Pigment va IPL — qishki loyiha, shoshilinch yechim emas

Pigment dog'lari va IPL kurslari bir necha seansdan iborat, ular orasida esa haftalar o'tadi. Bayram oldidan ularni "tez tuzatib qo'yish" bo'lmaydi, lekin qish — bunday kursni boshlash uchun eng qulay vaqt. Batafsil: [pigment dog'larini qishda davolash](/uz/articles/art-pigment-doglari-qishda).

## Bayram kunlarida uy parvarishi

- **Uyqu** — yetarli uxlang; uyqusizlik ko'z ostida shish va xira rang beradi.
- **Spirtli ichimlik va tuz** — kechqurun ko'p tuz va spirt ertalab yuzda shish qoldiradi; ko'proq suv iching.
- **Pardozni albatta yuving** — hatto kech bo'lsa ham; pardoz bilan uxlash teshiklarni tiqadi va toshma beradi.
- **SPF** — qishda ham, ayniqsa muolajadan keyin, quyoshdan himoya kremini surting.
- **Lablar** — sovuq va shamolda yoriladi, himoya balzamini muntazam surting. Batafsil: [lablar yorilishi va xeylit](/uz/articles/art-lablar-yorilishi-xeylit).

## Bayram oldidan nima qilmaslik kerak

- yangi kuchli krem yoki zardobni birinchi marta sinash — allergiya yoki qizarish aynan bayram kuniga to'g'ri kelishi mumkin;
- uyda kislotali piling qilish — kuyish va pigment dog'lari xavfi bor;
- husnbuzarlarni siqish — qizil dog' va yallig'lanish bir necha kun saqlanadi;
- hayotdagi birinchi inyeksiyani bayramdan bir kun oldin qilish — teri qanday javob berishini oldindan bilib bo'lmaydi.

## Qachon darhol shifokorga murojaat qilish kerak

Muolajadan keyin quyidagilar bo'lsa, kutmang:

- shish, og'riq yoki qizarish kamaymay, kuchayib borsa;
- teri oqarib ketsa, ko'kimtir yoki dog'-dog' bo'lib qolsa — ayniqsa filler qilingan joyda;
- pufakchalar, yiring yoki isitma paydo bo'lsa;
- ko'rish buzilsa yoki qovoq osilib qolsa;
- yuzda tez tarqaluvchi toshma, kuchli qichishish yoki nafas qiyinlashsa.

## Hammasi konsultatsiyadan boshlanadi

Qaysi muolaja teringizga mosligini shifokor ko'rikdan keyin hal qiladi: teri turi, sezgirligi, oldingi muolajalar va qabul qilayotgan dori-darmonlaringiz hisobga olinadi. Natija va tiklanish vaqti har kimda har xil, shuning uchun rejani oldindan tuzish muhim.

## Yangi yil oldidan yuz parvarishi Farg'ona va Qo'qonda

Radeski Skin Clinic'da kosmetolog teringizni ko'radi va bayramgacha qolgan vaqtga mos rejani tuzadi.

- [Kosmetolog Farg'onada](/uz/fargona/kosmetolog) va [Qo'qonda](/uz/qoqon/kosmetolog);
- [Apparat kosmetologiyasi](/uz/services/apparatnaya-kosmetologiya) va [inyeksion kosmetologiya](/uz/services/in-ekcionnaya-kosmetologiya);
- [Ultratovushli yuz tozalash](/uz/services/apparatnaya-kosmetologiya/ultratovush-yuz-tozalash) va [lazer biorevitalizatsiya](/uz/services/apparatnaya-kosmetologiya/lazer-biorevitalizatsiya).

Bayramga chiroyli teri bilan kirishning eng yaxshi yo'li — oxirgi kunga qoldirmasdan, hozirdan rejalashtirish.`;
}

function ruBody(): string {
  return `Перед новогодними праздниками многие спешат к косметологу, чтобы встретить их с красивой кожей. Но у каждой процедуры своё время восстановления: после одних кожа несколько дней шелушится, у других результат раскрывается постепенно, в течение нескольких дней. Поэтому главный вопрос — не что сделать, а **когда**. Середина декабря — самое время составить план: часть процедур ещё можно успеть, а некоторые лучше перенести на после праздников.

## Почему важны сроки?

После процедуры коже нужно восстановиться. Покраснение, отёк, небольшие синяки или шелушение — обычное дело после многих процедур. Это не опасно, но заметно на праздничных фотографиях. Восстановление зависит от вида процедуры, типа кожи и самого человека: после одной и той же процедуры у одного кожа успокаивается на следующий день, у другого — через неделю. Поэтому сроки ниже ориентировочные, точный план составляет врач на консультации.

## За 3 недели и раньше: процедуры с долгим восстановлением

- **Химический пилинг** — особенно более глубокие пилинги, после которых кожа шелушится. Шелушение обычно длится несколько дней, а кожа остаётся чувствительной и после этого. Такой пилинг делают не позже чем за 3–4 недели до праздника. Подробнее: [химический пилинг](/ru/articles/art-kimyoviy-piling).
- **CO₂ и фракционный лазер** (при рубцах) — восстановление занимает от нескольких дней до нескольких недель, а покраснение может держаться ещё дольше. Начинать в середине декабря ради праздничного вида обычно поздно: запланируйте эту процедуру на после праздников. Подробнее: [лечение рубцов CO₂-лазером](/ru/articles/art-deka-co2-chandiqlar-radeski).

## Примерно за 2 недели: процедуры, результат которых раскрывается постепенно

- **Ботулинотерапия** — эффект развивается не сразу, а в течение нескольких дней; полный результат обычно виден ближе к двум неделям. Нужно оставить время и на контрольный осмотр врача. Подробнее: [ботулинотерапия](/ru/articles/art-botulinoterapiya-radeski).
- **Биоревитализация** — небольшие бугорки после инъекций обычно рассасываются за несколько дней, но синяки иногда держатся дольше. Подробнее: [биоревитализация](/ru/articles/art-biorevitalizatsiya-radeski).
- **Филлеры** ([контурная пластика](/ru/services/in-ekcionnaya-kosmetologiya/kontur-plastikasi)) — возможны отёк и синяки, особенно на губах. Двух недель хватает, чтобы отёк сошёл, а врач при необходимости скорректировал результат.

## За неделю — несколько дней: мягкие процедуры

- **Карбоновый пилинг** — обычно проходит с лёгким покраснением на несколько часов; кожа выглядит чище, поры — уже. Подробнее: [карбоновый пилинг](/ru/articles/art-karbon-piling).
- **Ультразвуковая чистка лица** — мягкий метод, но после любой чистки кожа может быть красной до суток. Делайте её за несколько дней до праздника, не в последний день.
- **Лазерная биоревитализация** — увлажнение без инъекций, обычно почти не требует восстановления; после зимней сухости кожа выглядит обновлённой.

## За день до праздника: только домашний уход

В последний день не делайте новых процедур. Мягкое очищение, увлажняющий крем, привычная маска — этого достаточно. Кожа должна быть спокойной и отдохнувшей.

## Пигмент и IPL — зимний проект, а не срочное решение

Курсы против пигментных пятен и IPL состоят из нескольких сеансов с перерывами в несколько недель. «Быстро исправить» пигмент перед праздником не получится, но зима — лучшее время, чтобы начать такой курс. Подробнее: [лечение пигментных пятен зимой](/ru/articles/art-pigment-doglari-qishda).

## Домашний уход в праздничные дни

- **Сон** — высыпайтесь; недосып даёт отёки под глазами и тусклый цвет лица.
- **Алкоголь и соль** — много солёного и алкоголя вечером утром оборачиваются отёками на лице; пейте больше воды.
- **Обязательно снимайте макияж** — даже поздно ночью; сон в косметике забивает поры и вызывает высыпания.
- **SPF** — зимой тоже, особенно после процедур, наносите солнцезащитный крем.
- **Губы** — трескаются на холоде и ветру, регулярно пользуйтесь защитным бальзамом. Подробнее: [трещины на губах и хейлит](/ru/articles/art-lablar-yorilishi-xeylit).

## Чего не делать перед праздником

- впервые пробовать новый сильный крем или сыворотку — аллергия или покраснение может прийтись как раз на праздник;
- делать кислотный пилинг дома — есть риск ожога и пигментных пятен;
- выдавливать прыщи — красные пятна и воспаление держатся несколько дней;
- делать первую в жизни инъекцию за день до праздника — заранее неизвестно, как отреагирует кожа.

## Когда срочно обратиться к врачу

Не ждите, если после процедуры:

- отёк, боль или покраснение не уменьшаются, а нарастают;
- кожа побледнела, стала синюшной или пятнистой — особенно в месте введения филлера;
- появились пузырьки, гной или температура;
- ухудшилось зрение или опустилось веко;
- на лице быстро распространяется сыпь, сильный зуд или стало трудно дышать.

## Всё начинается с консультации

Какая процедура подходит именно вашей коже, врач решает после осмотра: учитываются тип кожи, её чувствительность, прошлые процедуры и лекарства, которые вы принимаете. Результат и время восстановления у всех разные, поэтому план важно составить заранее.

## Уход за лицом перед Новым годом в Фергане и Коканде

В Radeski Skin Clinic косметолог осмотрит кожу и составит план, подходящий к оставшемуся до праздника времени.

- [Косметолог в Фергане](/ru/fargona/kosmetolog) и [в Коканде](/ru/qoqon/kosmetolog);
- [Аппаратная косметология](/ru/services/apparatnaya-kosmetologiya) и [инъекционная косметология](/ru/services/in-ekcionnaya-kosmetologiya);
- [Ультразвуковая чистка лица](/ru/services/apparatnaya-kosmetologiya/ultratovush-yuz-tozalash) и [лазерная биоревитализация](/ru/services/apparatnaya-kosmetologiya/lazer-biorevitalizatsiya).

Лучший способ встретить праздник с красивой кожей — не откладывать на последний день, а составить план уже сейчас.`;
}

function enBody(): string {
  return `As the New Year holidays approach, many people rush to a cosmetologist to look their best. But every treatment has its own recovery time: after some, the skin flakes for several days; with others, the result builds gradually over days. So the key question is not what to do, but **when**. Mid-December is the right moment to plan: some treatments still fit in, while others are better left until after the holidays.

## Why timing matters

After a treatment the skin needs to recover. Redness, swelling, small bruises or flaking are common after many procedures — they are not dangerous, but they show in holiday photos. Recovery depends on the treatment, the skin type and the person: after the same procedure one person's skin settles the next day, another's takes a week. That is why the timings below are approximate, and the exact plan is made by the doctor at a consultation.

## Three weeks or more before: treatments that need time to heal

- **Chemical peels** — especially deeper peels that make the skin flake. Flaking usually lasts several days, and the skin stays sensitive afterwards. Such a peel should be done at least 3–4 weeks before the event. More: [chemical peels](/en/articles/art-kimyoviy-piling).
- **CO₂ and fractional laser** (for scars) — recovery takes from several days to several weeks, and redness may last even longer. Starting in mid-December is usually too late for a holiday look: plan it for after the holidays. More: [CO₂ laser for scars](/en/articles/art-deka-co2-chandiqlar-radeski).

## About two weeks before: treatments whose effect builds gradually

- **Botulinum therapy** — the effect does not appear at once but develops over several days; the full result is usually seen closer to two weeks. Leave time for a follow-up check with the doctor too. More: [botulinum therapy](/en/articles/art-botulinoterapiya-radeski).
- **Biorevitalization** — the small bumps after the injections usually settle within a few days, though bruises sometimes last a little longer. More: [biorevitalization](/en/articles/art-biorevitalizatsiya-radeski).
- **Fillers** ([contouring](/en/services/in-ekcionnaya-kosmetologiya/kontur-plastikasi)) — swelling and bruising are possible, especially on the lips. Two weeks is enough for swelling to go down and for the doctor to adjust the result if needed.

## A week to a few days before: gentle treatments

- **Carbon peel** — usually just mild redness for a few hours; the skin looks clearer and pores look smaller. More: [carbon peel](/en/articles/art-karbon-piling).
- **Ultrasonic facial cleansing** — a gentle method, but after any cleansing the skin can stay red for up to a day. Do it a few days before the event, not on the last day.
- **Laser biorevitalization** — hydration without injections that usually needs almost no recovery; after winter dryness the skin looks refreshed.

## The day before: home care only

Do not try any new treatment on the last day. Gentle cleansing, a moisturiser, your usual mask — that is enough. The skin should be calm and rested.

## Pigment and IPL: a winter project, not a last-minute fix

Courses for pigment spots and IPL take several sessions a few weeks apart. Pigment cannot be "quickly fixed" before a party, but winter is the best time to start such a course. More: [treating pigment spots in winter](/en/articles/art-pigment-doglari-qishda).

## Home care during the holidays

- **Sleep** — get enough of it; lack of sleep means puffy eyes and a dull complexion.
- **Alcohol and salt** — a salty, boozy evening shows as a puffy face in the morning; drink more water.
- **Always remove make-up** — even late at night; sleeping in make-up clogs pores and causes breakouts.
- **SPF** — in winter too, especially after treatments, apply sunscreen.
- **Lips** — they crack in cold and wind; use a protective balm regularly. More: [chapped lips and cheilitis](/en/articles/art-lablar-yorilishi-xeylit).

## What not to do before the holidays

- trying a new strong cream or serum for the first time — an allergy or redness may land right on the big day;
- doing an acid peel at home — it risks burns and pigment spots;
- squeezing spots — the red marks and inflammation last for days;
- booking your first-ever injection the day before an event — there is no way to know in advance how your skin will react.

## When to see a doctor urgently

Do not wait if after a treatment:

- swelling, pain or redness get worse instead of better;
- the skin turns pale, bluish or blotchy — especially where a filler was injected;
- blisters, pus or a fever appear;
- your vision changes or an eyelid droops;
- a rash spreads quickly over the face, with strong itching or difficulty breathing.

## It all starts with a consultation

The doctor decides which treatment suits your skin after an examination, taking into account your skin type, its sensitivity, previous treatments and any medicines you take. Results and recovery times differ from person to person, so it pays to plan ahead.

## Pre-holiday skin care in Fergana and Kokand

At Radeski Skin Clinic a cosmetologist examines your skin and builds a plan that fits the time left before the holidays.

- [Cosmetologist in Fergana](/en/fargona/kosmetolog) and [in Kokand](/en/qoqon/kosmetolog);
- [Aesthetic device treatments](/en/services/apparatnaya-kosmetologiya) and [injectable cosmetology](/en/services/in-ekcionnaya-kosmetologiya);
- [Ultrasonic facial cleansing](/en/services/apparatnaya-kosmetologiya/ultratovush-yuz-tozalash) and [laser biorevitalization](/en/services/apparatnaya-kosmetologiya/lazer-biorevitalizatsiya).

The best way to greet the holidays with good skin is not to leave it to the last day, but to make a plan now.`;
}

export const NEW_YEAR_SKIN_PLAN_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Yangi yil oldidan yuz parvarishi: piling, botulinoterapiya, filler va tozalashni bayramdan qancha oldin qilish, uy parvarishi va nimalardan saqlanish. Farg'ona va Qo'qonda kosmetolog.",
    body: uzBody(),
    keyTakeaways: [
      "Tiklanishi uzoq muolajalar (po'st tashlaydigan piling) bayramdan kamida 3–4 hafta oldin qilinadi",
      "Chandiqlar uchun CO₂ lazerni odatda bayramdan keyinga rejalashtirish ma'qul",
      "Botulinoterapiya, biorevitalizatsiya va fillerlar uchun taxminan 2 hafta qoldiring",
      "Karbon piling va ultratovushli tozalash — bir necha kun oldin, oxirgi kunda faqat uy parvarishi",
      "Aniq rejani shifokor konsultatsiyada tuzadi: natija va tiklanish har kimda har xil",
    ],
    tags: ['Yangi yil', 'Yuz parvarishi', 'Kimyoviy piling', 'Botulinoterapiya', 'Kosmetolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Muolajadan keyin shish, og'riq yoki qizarish kuchayib borsa",
      "Filler qilingan joyda teri oqarsa, ko'karsa yoki dog'-dog' bo'lsa",
      "Pufakchalar, yiring yoki isitma paydo bo'lsa",
      "Ko'rish buzilsa yoki qovoq osilib qolsa",
      "Yuzda toshma tez tarqalsa yoki nafas qiyinlashsa",
    ],
    faq: [
      {
        question: 'Bayramdan bir hafta oldin kimyoviy piling qilsa bo\'ladimi?',
        answer:
          "Po'st tashlaydigan piling uchun bu odatda kech: teri bayram kunida hali po'stlanib yoki sezgir bo'lib turishi mumkin. Bir hafta qolganda shifokor yumshoqroq muolajani, masalan, karbon pilingni taklif qilishi mumkin.",
      },
      {
        question: 'Botoks bayramgacha ulguradimi?',
        answer:
          "Botulinoterapiyaning ta'siri bir necha kun ichida rivojlanadi va to'liq natija odatda ikki haftaga yaqin ko'rinadi. Shuning uchun uni bayramdan taxminan 2 hafta oldin qilish, shifokor ko'rigiga ham vaqt qoldirish ma'qul.",
      },
      {
        question: 'Fillerdan keyin shish qancha davom etadi?',
        answer:
          "Bu odamga va joyga bog'liq: ko'pincha shish va ko'karishlar bir necha kunda kamayadi, lablarda biroz uzoqroq bo'lishi mumkin. Shuning uchun fillerni bayramdan taxminan 2 hafta oldin rejalashtiring.",
      },
      {
        question: 'Bayramdan bir kun oldin nima qilsam bo\'ladi?',
        answer:
          "Faqat uy parvarishi: yumshoq tozalash, namlantiruvchi krem va odatdagi niqob. Yangi kuchli vositalar, uyda kislotali piling va husnbuzarlarni siqishdan saqlaning.",
      },
      {
        question: "Farg'ona va Qo'qonda bayram oldidan yuz parvarishini qayerda rejalashtirish mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida kosmetolog teringizni ko'rib, bayramgacha qolgan vaqtga mos muolajalarni tanlaydi. Saytda yoki +998 73 200-73-73 (Farg'ona) yoki +998 95 145 73 73 (Qo'qon) raqamlari orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Уход за лицом перед Новым годом: за сколько до праздника делать пилинг, ботулинотерапию, филлеры и чистку, домашний уход и чего избегать. Косметолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Процедуры с долгим восстановлением (пилинг с шелушением) делают минимум за 3–4 недели',
      'CO₂-лазер при рубцах обычно лучше запланировать на после праздников',
      'Для ботулинотерапии, биоревитализации и филлеров оставьте около 2 недель',
      'Карбоновый пилинг и ультразвуковая чистка — за несколько дней, в последний день только домашний уход',
      'Точный план составляет врач на консультации: результат и восстановление у всех разные',
    ],
    tags: ['Новый год', 'Уход за лицом', 'Химический пилинг', 'Ботулинотерапия', 'Косметолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'После процедуры отёк, боль или покраснение нарастают',
      'Кожа в месте введения филлера побледнела, посинела или стала пятнистой',
      'Появились пузырьки, гной или температура',
      'Ухудшилось зрение или опустилось веко',
      'Сыпь быстро распространяется по лицу или трудно дышать',
    ],
    faq: [
      {
        question: 'Можно ли сделать химический пилинг за неделю до праздника?',
        answer:
          'Для пилинга с шелушением это обычно поздно: в праздник кожа может ещё шелушиться или оставаться чувствительной. За неделю врач может предложить более мягкую процедуру, например карбоновый пилинг.',
      },
      {
        question: 'Успеет ли ботокс подействовать к празднику?',
        answer:
          'Эффект ботулинотерапии развивается в течение нескольких дней, полный результат обычно виден ближе к двум неделям. Поэтому её лучше делать примерно за 2 недели до праздника, оставив время на осмотр врача.',
      },
      {
        question: 'Сколько держится отёк после филлеров?',
        answer:
          'Это зависит от человека и зоны: чаще отёк и синяки уменьшаются за несколько дней, на губах могут держаться чуть дольше. Поэтому филлеры планируйте примерно за 2 недели до праздника.',
      },
      {
        question: 'Что можно сделать за день до праздника?',
        answer:
          'Только домашний уход: мягкое очищение, увлажняющий крем и привычная маска. Избегайте новых сильных средств, домашних кислотных пилингов и выдавливания прыщей.',
      },
      {
        question: 'Где в Фергане и Коканде спланировать уход за лицом перед праздниками?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде косметолог осмотрит кожу и подберёт процедуры под оставшееся до праздника время. Записаться можно на сайте или по телефону +998 73 200-73-73 (Фергана) или +998 95 145 73 73 (Коканд).',
      },
    ],
  },
  en: {
    summary:
      'Skin care before New Year: how far ahead to book peels, botulinum therapy, fillers and cleansing, holiday home care and what to avoid. Cosmetologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Treatments with long recovery (peels that flake) go at least 3–4 weeks before the event',
      'CO₂ laser for scars is usually best planned for after the holidays',
      'Allow about 2 weeks for botulinum therapy, biorevitalization and fillers',
      'Carbon peel and ultrasonic cleansing a few days before; the last day is for home care only',
      'The doctor makes the exact plan at a consultation: results and recovery vary between people',
    ],
    tags: ['New Year', 'Facial care', 'Chemical peel', 'Botulinum therapy', 'Cosmetologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Swelling, pain or redness get worse after a treatment',
      'Skin where a filler was injected turns pale, bluish or blotchy',
      'Blisters, pus or a fever appear',
      'Your vision changes or an eyelid droops',
      'A rash spreads quickly over the face or breathing becomes difficult',
    ],
    faq: [
      {
        question: 'Can I have a chemical peel a week before the holidays?',
        answer:
          'For a peel that makes the skin flake, that is usually too late: on the day the skin may still be flaking or sensitive. With a week left, the doctor may suggest something gentler, such as a carbon peel.',
      },
      {
        question: 'Will Botox take effect in time for the holidays?',
        answer:
          'Botulinum therapy takes effect over several days, and the full result is usually seen closer to two weeks. So it is best done about 2 weeks before the event, leaving time for a check with the doctor.',
      },
      {
        question: 'How long does swelling last after fillers?',
        answer:
          'It depends on the person and the area: swelling and bruises usually ease within a few days, and may last a little longer on the lips. So plan fillers about 2 weeks ahead.',
      },
      {
        question: 'What can I do the day before the holidays?',
        answer:
          'Home care only: gentle cleansing, a moisturiser and your usual mask. Avoid new strong products, home acid peels and squeezing spots.',
      },
      {
        question: 'Where in Fergana and Kokand can I plan pre-holiday skin care?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a cosmetologist examines your skin and chooses treatments that fit the time left before the holidays. Book on the website or call +998 73 200-73-73 (Fergana) or +998 95 145 73 73 (Kokand).',
      },
    ],
  },
};

export const NEW_YEAR_SKIN_PLAN_ARTICLE: Article = {
  id: 'art-yangi-yil-yuz-parvarishi',
  slug: 'yangi-yil-yuz-parvarishi',
  title: {
    uz: "Yangi yil oldidan yuz parvarishi: qaysi muolajani qachon qilish kerak — kosmetolog rejasi",
    ru: 'Уход за лицом перед Новым годом: какую процедуру когда делать — план косметолога',
    en: "Skin Care Before New Year: Which Treatment to Do When — a Cosmetologist's Timing Plan",
  },
  summary: {
    uz: NEW_YEAR_SKIN_PLAN_ARTICLE_CATALOG.uz.summary,
    ru: NEW_YEAR_SKIN_PLAN_ARTICLE_CATALOG.ru.summary,
    en: NEW_YEAR_SKIN_PLAN_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: NEW_YEAR_SKIN_PLAN_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: NEW_YEAR_SKIN_PLAN_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: NEW_YEAR_SKIN_PLAN_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Kamolova Barno',
    ru: 'Камолова Барно',
    en: 'Dr. Barno Kamolova',
  },
  date: '2026-11-28',
  image: '/articles/yangi-yil-parvarish-cover.jpg',
  images: {
    uz: '/articles/yangi-yil-parvarish-cover.jpg',
    ru: '/articles/yangi-yil-parvarish-cover.jpg',
    en: '/articles/yangi-yil-parvarish-cover.jpg',
  },
  views: 0,
};
