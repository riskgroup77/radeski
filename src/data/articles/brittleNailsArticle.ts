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
 * Brittle, splitting and peeling nails — usually water, detergents, dry winter air and gel polish,
 * but sometimes the first sign of fungus, nail psoriasis or lichen planus. Points: everyday causes,
 * signs that it is more than cosmetic, what not to do at home (no self-treating fungus without a
 * test, no supplements without tests), how the clinic checks, podology care, nails need months.
 */

function uzBody(): string {
  return `Mo'rt va qatlanadigan tirnoqlar — eng ko'p uchraydigan tirnoq shikoyatlaridan biri. Tirnoq uchi sinadi, qavat-qavat bo'lib ko'chadi, chetlari yoriladi, lak esa bir-ikki kunda ko'chib tushadi. Ko'pincha bunga tashqi omillar — suv, yuvish vositalari, quruq havo — sabab bo'ladi va to'g'ri parvarish bilan holat yaxshilanadi. Lekin ba'zan mo'rtlik tirnoq zamburug'i, psoriaz yoki boshqa kasallikning birinchi belgisi bo'ladi. Shuning uchun qachon krem yetarli va qachon shifokor kerakligini bilish muhim.

## Mo'rt tirnoq nima?

Tirnoq plastinkasi keratinning juda ko'p yupqa qatlamlaridan iborat. Bu qatlamlar orasidagi namlik va yog' muvozanati buzilsa, tirnoq mustahkamligini yo'qotadi:

- **sinuvchanlik** — uchi oson sinadi yoki yoriladi;
- **qatlanish** — tirnoq uchi gorizontal qavatlarga ajraladi;
- **uzunasiga yoriqlar** — tirnoq bo'ylab ingichka chiziqlar va ajralishlar.

Bu holat qo'l tirnoqlarida ko'proq uchraydi, ayniqsa ayollarda va qish oylarida.

## Nima uchun tirnoqlar mo'rt bo'ladi?

- **Suv va yuvish vositalari** — idish yuvish, kir yuvish va tozalash qo'lqopsiz qilinsa, tirnoq qayta-qayta shishib, keyin quriydi. Bu eng ko'p uchraydigan sabab.
- **Sovuq va quruq qish havosi** — isitish tizimlari havoni quritadi, tirnoq va kutikula namlikni yo'qotadi. Qishki parvarish haqida: [qishda teri parvarishi](/uz/articles/art-qishda-teri-parvarishi).
- **Tez-tez gel-lak va qo'pol olib tashlash** — tirnoqni arralash, qirib tashlash va uzoq aseton ta'siri ustki qatlamlarni yupqalashtiradi.
- **Tirnoq jarohatlari** — urilish, tirnoqni asbob sifatida ishlatish, tishlash.
- **Yosh** — yillar o'tishi bilan tirnoq sekinroq o'sadi va quruqroq bo'ladi.
- **Temir tanqisligi va qalqonsimon bez muammolari** — ular tirnoq sifatiga ta'sir qilishi mumkin; qaysi qon tahlillari kerakligini shifokor hal qiladi.
- **Tirnoq zamburug'i** — tirnoq qalinlashadi, sarg'ayadi va uvalanadi; batafsil: [tirnoq zamburug'i](/uz/articles/art-tirnoq-zamburugi).
- **Tirnoq psoriazi** — tirnoqda nuqtali chuqurchalar, dog'lar va ko'chish paydo bo'ladi; batafsil: [psoriaz](/uz/conditions/psoriaz).
- **Qizil yassi temiratki** — tirnoqda uzunasiga chiziqlar va yupqalashish kuzatilishi mumkin; batafsil: [qizil yassi temiratki](/uz/articles/art-qizil-yassi-temiratki).

## Faqat kosmetik muammo emasligini ko'rsatadigan belgilar

Oddiy quruqlikda odatda bir nechta tirnoq bir xil darajada mo'rt bo'ladi. Quyidagi belgilar esa shifokor ko'rigini talab qiladi:

- tirnoq qalinlashsa yoki uvalanib ketsa;
- rangi o'zgarsa — sariq, oq, jigarrang yoki qora dog'lar paydo bo'lsa;
- tirnoq to'shagidan ko'chib, ostida bo'shliq hosil bo'lsa;
- tirnoqda nuqtali chuqurchalar yoki ko'ndalang chiziqlar bo'lsa;
- faqat bitta tirnoq o'zgargan bo'lsa;
- og'riq, qizarish, shish yoki yiring bo'lsa.

Tirnoq ostida yangi paydo bo'lgan qora yoki jigarrang uzunasiga chiziq, ayniqsa kengayib borayotgan bo'lsa, kechiktirmasdan shifokorga ko'rsatilishi kerak. Tirnoq atrofidagi kuchli og'riq, shish va yiring ham tez yordamni talab qiladi. Rang o'zgarishlari haqida batafsil: [tirnoq rangining o'zgarishi](/uz/articles/art-tirnoq-rangi-ozgarishi).

## Uyda nima qilmaslik kerak?

- Tirnoqni tishlash va ko'chgan qatlamlarni yulib olish.
- Kutikulani uyda kesish — u tirnoqning tabiiy himoyasi, kesilganda infeksiya kirishi mumkin.
- Formaldegidli "mustahkamlovchi" laklarni tez-tez surtish — ular tirnoqni yanada mo'rt qilishi va terini ta'sirlashi mumkin.
- Tahlilsiz zamburug'ga qarshi vositalarni o'zingiz qo'llash — mo'rtlik har doim ham zamburug' emas, noto'g'ri davolash esa tashxisni qiyinlashtiradi.

## Klinikada qanday tekshiriladi?

- **Podolog yoki dermatolog ko'rigi** — tirnoqlar, kutikula, qo'l va oyoq terisi ko'rib chiqiladi, odatlar va ish sharoiti so'raladi.
- **Tirnoq dermatoskopiyasi** — kattalashtirish ostida chuqurchalar, chiziqlar, dog'lar va to'shakdan ko'chish baholanadi.
- **Zamburug'ga tahlil** — klinikada tirnoq zamburug'iga tahlil o'tkaziladi; bu davolashni to'g'ri tanlash uchun muhim.
- **Qon tahlillari** — kerak bo'lsa, ularni shifokor tayinlaydi.

## Klinikada qanday yordam beriladi?

Davolash sababga qarab tanlanadi. Podologik parvarishda tirnoqqa apparat bilan ehtiyotkor ishlov beriladi: qalinlashgan va ko'chgan qismlar tozalanadi, chetlar tekislanadi, tirnoq yana sinmasligi uchun to'g'ri shakl beriladi. Zamburug', psoriaz yoki boshqa kasallik aniqlansa, sababning o'zi shifokor tayinlagan vositalar bilan davolanadi. Agar sabab tashqi omillarda bo'lsa, asosiy yordam — kundalik parvarishni o'zgartirish.

## Uyda parvarish

- Uy ishlarida — idish, kir, tozalash — paxta astarli rezina qo'lqop kiying.
- Tirnoqlarni kalta tuting va bir yo'nalishda egovlang, oldinga-orqaga "arralamang".
- Qishda qo'l va kutikula kremini har yuvishdan keyin va kechasi surting.
- Gel-lakdan tanaffus qiling, uni olib tashlashni mutaxassisga ishoning.
- Oddiy lakni asetonsiz suyuqlik bilan, yumshoq olib tashlang.
- To'liq va xilma-xil ovqatlaning. Vitaminlar tirnoqni tez tuzatishiga va'da berib bo'lmaydi — ularni faqat tahlil va shifokor maslahatidan keyin qabul qiling.

Sabr kerak: qo'l tirnog'i to'liq yangilanishi uchun odatda 4–6 oy, oyoq tirnog'i uchun undan ham ko'proq vaqt kerak. Shuning uchun yaxshilanish haftalarda emas, oylarda ko'rinadi.

## Farg'ona va Qo'qonda mo'rt tirnoqlarni tekshirish va davolash

Radeski Skin Clinic'ning [tirnoq patologiyasi klinikasida](/uz/services/clinika-patologii-nogtej) podolog va dermatolog mo'rtlik sababini aniqlaydi, kerak bo'lsa zamburug'ga tahlil o'tkazadi va [dermatologik podolog xizmati](/uz/services/clinika-patologii-nogtej/dermatologik-podolog-xizmati) doirasida tirnoqqa apparat bilan ishlov beradi.

- [Podolog Farg'onada](/uz/fargona/podolog) va [Qo'qonda](/uz/qoqon/podolog);
- [Tirnoq zamburug'ini davolash Farg'onada](/uz/fargona/tirnoq-zamburug) va [Qo'qonda](/uz/qoqon/tirnoq-zamburug).

Mo'rt tirnoqlar ko'pincha parvarishga yaxshi javob beradi — muhimi, sababini vaqtida va to'g'ri aniqlash.`;
}

function ruBody(): string {
  return `Ломкие и слоящиеся ногти — одна из самых частых жалоб. Кончик ногтя обламывается, расслаивается на пластинки, края трескаются, а лак держится день-два. Чаще всего виноваты внешние факторы — вода, моющие средства, сухой воздух — и правильный уход заметно улучшает состояние. Но иногда ломкость бывает первым признаком грибка, псориаза или другого заболевания. Поэтому важно понимать, когда достаточно крема, а когда нужен врач.

## Что такое ломкие ногти?

Ногтевая пластина состоит из множества тонких слоёв кератина. Если между ними нарушается баланс влаги и жиров, ноготь теряет прочность:

- **ломкость** — кончик легко ломается или трескается;
- **слоение** — свободный край расщепляется на горизонтальные пластинки;
- **продольные трещины** — тонкие линии и расщепления вдоль ногтя.

Чаще это касается ногтей на руках, особенно у женщин и в зимние месяцы.

## Почему ногти становятся ломкими?

- **Вода и моющие средства** — если мыть посуду, стирать и убираться без перчаток, ноготь то набухает, то пересыхает. Это самая частая причина.
- **Холодный и сухой зимний воздух** — отопление сушит воздух, ногти и кутикула теряют влагу. Об уходе зимой: [уход за кожей зимой](/ru/articles/art-qishda-teri-parvarishi).
- **Частый гель-лак и грубое снятие** — опил, соскабливание и долгий контакт с ацетоном истончают верхние слои.
- **Травмы ногтей** — удары, привычка использовать ноготь как инструмент, обкусывание.
- **Возраст** — с годами ногти растут медленнее и становятся суше.
- **Дефицит железа и проблемы щитовидной железы** — могут влиять на качество ногтей; какие анализы крови нужны, решает врач.
- **Грибок ногтей** — ноготь утолщается, желтеет и крошится; подробнее: [грибок ногтей](/ru/articles/art-tirnoq-zamburugi).
- **Псориаз ногтей** — точечные ямки, пятна и отслоение пластины; подробнее: [псориаз](/ru/conditions/psoriaz).
- **Красный плоский лишай** — возможны продольные борозды и истончение ногтя; подробнее: [красный плоский лишай](/ru/articles/art-qizil-yassi-temiratki).

## Признаки, что это не просто косметика

При обычной сухости ломкими становятся сразу несколько ногтей, примерно одинаково. Осмотр врача нужен, если:

- ноготь утолщается или крошится;
- меняется цвет — жёлтые, белые, коричневые или чёрные пятна;
- пластина отходит от ложа и под ней появляется пустота;
- на ногте точечные ямки или поперечные борозды;
- изменился только один ноготь;
- есть боль, покраснение, отёк или гной.

Новая тёмная продольная полоса под ногтем, особенно если она расширяется, — повод показаться врачу без промедления. Сильная боль, отёк и гной вокруг ногтя тоже требуют быстрой помощи. Подробнее о цвете ногтей: [изменение цвета ногтей](/ru/articles/art-tirnoq-rangi-ozgarishi).

## Чего не делать дома?

- Грызть ногти и отрывать отслоившиеся пластинки.
- Срезать кутикулу дома — это естественная защита ногтя, через порез может попасть инфекция.
- Часто наносить «укрепляющие» лаки с формальдегидом — они могут сделать ноготь ещё более ломким и раздражать кожу.
- Лечить себя противогрибковыми средствами без анализа — ломкость не всегда грибок, а неверное лечение затрудняет диагностику.

## Как проверяют в клинике?

- **Осмотр подолога или дерматолога** — ногти, кутикула, кожа рук и стоп, вопросы о привычках и условиях работы.
- **Дерматоскопия ногтя** — при увеличении оценивают ямки, борозды, пятна и отслоение.
- **Анализ на грибок** — в клинике проводят анализ на грибок ногтей; это важно для правильного выбора лечения.
- **Анализы крови** — при необходимости их назначает врач.

## Чем помогают в клинике?

Лечение подбирают по причине. При подологическом уходе ноготь бережно обрабатывают аппаратом: удаляют утолщённые и отслоившиеся участки, выравнивают края, придают форму, при которой ноготь меньше ломается. Если найден грибок, псориаз или другое заболевание, лечат саму причину средствами, которые назначит врач. Если причина во внешних факторах, главная помощь — изменить ежедневный уход.

## Уход дома

- Для домашних дел — посуда, стирка, уборка — надевайте резиновые перчатки с хлопковой подкладкой.
- Держите ногти короткими и подпиливайте в одном направлении, не «пилите» туда-обратно.
- Зимой наносите крем для рук и кутикулы после каждого мытья и на ночь.
- Делайте перерывы в гель-лаке и доверяйте его снятие мастеру.
- Обычный лак снимайте мягко, жидкостью без ацетона.
- Питайтесь полноценно и разнообразно. Витамины не гарантируют быстрого результата — принимайте их только после анализов и по совету врача.

Нужно терпение: ноготь на руке полностью обновляется обычно за 4–6 месяцев, на ноге — ещё дольше. Поэтому улучшение видно не через недели, а через месяцы.

## Лечение ломких ногтей в Фергане и Коканде

В [клинике патологии ногтей](/ru/services/clinika-patologii-nogtej) Radeski Skin Clinic подолог и дерматолог выяснят причину ломкости, при необходимости проведут анализ на грибок и в рамках [дерматологической подологии](/ru/services/clinika-patologii-nogtej/dermatologik-podolog-xizmati) аппаратно обработают ногти.

- [Подолог в Фергане](/ru/fargona/podolog) и [в Коканде](/ru/qoqon/podolog);
- [Лечение грибка ногтей в Фергане](/ru/fargona/tirnoq-zamburug) и [в Коканде](/ru/qoqon/tirnoq-zamburug).

Ломкие ногти обычно хорошо отвечают на уход — главное вовремя и правильно найти причину.`;
}

function enBody(): string {
  return `Brittle and splitting nails are one of the most common nail complaints. The tip breaks, peels into layers, the edges crack and polish chips within a day or two. Most often the cause is external — water, detergents, dry air — and the right care makes a real difference. Sometimes, though, brittleness is the first sign of nail fungus, psoriasis or another condition. So it helps to know when a cream is enough and when to see a doctor.

## What are brittle nails?

The nail plate is made of many thin layers of keratin. When the balance of moisture and lipids between them is lost, the nail loses its strength:

- **brittleness** — the tip breaks or cracks easily;
- **splitting** — the free edge separates into horizontal layers;
- **lengthwise cracks** — fine lines and splits along the nail.

It mostly affects fingernails, especially in women and during the winter months.

## Why do nails become brittle?

- **Water and detergents** — washing dishes, laundry and cleaning without gloves make the nail swell and then dry out again and again. This is the most common cause.
- **Cold, dry winter air** — heating dries the air, and nails and cuticles lose moisture. On winter care: [winter skin care](/en/articles/art-qishda-teri-parvarishi).
- **Frequent gel polish and harsh removal** — filing, scraping and long acetone soaks thin the top layers.
- **Nail injuries** — knocks, using nails as tools, biting.
- **Age** — over the years nails grow more slowly and become drier.
- **Iron deficiency and thyroid problems** — can affect nail quality; the doctor decides which blood tests are needed.
- **Nail fungus** — the nail thickens, turns yellow and crumbles; more: [nail fungus](/en/articles/art-tirnoq-zamburugi).
- **Nail psoriasis** — pinpoint pits, spots and lifting of the nail; more: [psoriasis](/en/conditions/psoriaz).
- **Lichen planus** — can cause lengthwise ridges and thinning of the nail; more: [lichen planus](/en/articles/art-qizil-yassi-temiratki).

## Signs it may be more than cosmetic

With ordinary dryness several nails are usually brittle to a similar degree. See a doctor if:

- a nail thickens or crumbles;
- the colour changes — yellow, white, brown or black patches;
- the nail lifts from its bed, leaving a gap underneath;
- there are pinpoint pits or crosswise lines;
- only one nail has changed;
- there is pain, redness, swelling or pus.

A new dark lengthwise streak under a nail, especially one that is widening, should be shown to a doctor without delay. Severe pain, swelling and pus around a nail also need prompt care. More on nail colour: [nail colour changes](/en/articles/art-tirnoq-rangi-ozgarishi).

## What not to do at home

- Biting nails or peeling off the loose layers.
- Cutting cuticles at home — they protect the nail, and a cut lets infection in.
- Frequently using "strengthening" polishes with formaldehyde — they can make nails even more brittle and irritate the skin.
- Treating yourself with antifungal products without a test — brittleness is not always fungus, and the wrong treatment makes diagnosis harder.

## How the clinic checks

- **Podologist or dermatologist exam** — the nails, cuticles and the skin of the hands and feet are examined, and you are asked about habits and work.
- **Nail dermatoscopy** — pits, lines, spots and lifting are assessed under magnification.
- **Fungus test** — the clinic does a nail fungus analysis; it matters for choosing the right treatment.
- **Blood tests** — ordered by the doctor if needed.

## How the clinic helps

Treatment depends on the cause. In podology care the nail is gently worked with an apparatus: thickened and lifted parts are cleaned away, the edges are smoothed and the nail is given a shape that breaks less. If fungus, psoriasis or another condition is found, the cause itself is treated with what the doctor prescribes. If the cause is external, the main help is changing everyday care.

## Care at home

- Wear rubber gloves with a cotton lining for housework — dishes, laundry, cleaning.
- Keep nails short and file them in one direction rather than sawing back and forth.
- In winter apply hand and cuticle cream after every wash and at night.
- Take breaks from gel polish and leave its removal to a professional.
- Remove ordinary polish gently with an acetone-free remover.
- Eat a balanced, varied diet. Vitamins cannot promise a quick fix — take them only after tests and on a doctor's advice.

Be patient: a fingernail usually takes about 4–6 months to grow out completely, a toenail even longer. So improvement shows over months, not weeks.

## Brittle nail care in Fergana and Kokand

At Radeski Skin Clinic's [nail pathology clinic](/en/services/clinika-patologii-nogtej) a podologist and dermatologist find the cause of brittleness, run a fungus test if needed and treat the nails with an apparatus as part of [dermatological podology](/en/services/clinika-patologii-nogtej/dermatologik-podolog-xizmati).

- [Podologist in Fergana](/en/fargona/podolog) and [in Kokand](/en/qoqon/podolog);
- [Nail fungus treatment in Fergana](/en/fargona/tirnoq-zamburug) and [in Kokand](/en/qoqon/tirnoq-zamburug).

Brittle nails usually respond well to care — the key is finding the cause early and correctly.`;
}

export const BRITTLE_NAILS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Mo'rt va qatlanadigan tirnoqlar: suv, qish havosi va gel-lak, zamburug' va psoriaz, xavfli belgilar, klinikada tekshiruv va uyda parvarish. Farg'ona va Qo'qonda podolog.",
    body: uzBody(),
    keyTakeaways: [
      "Ko'pincha sabab — suv, yuvish vositalari, quruq qish havosi va gel-lak",
      "Qalinlashish, rang o'zgarishi, ko'chish va bitta tirnoqdagi o'zgarish shifokor ko'rigini talab qiladi",
      "Zamburug'ga qarshi vositalarni tahlilsiz qo'llamang",
      "Klinikada ko'rik, tirnoq dermatoskopiyasi va zamburug'ga tahlil sababni aniqlaydi",
      "Tirnoq sekin o'sadi — yaxshilanish oylar davomida ko'rinadi",
    ],
    tags: [
      "Mo'rt tirnoqlar",
      'Qatlanadigan tirnoqlar',
      'Tirnoq parvarishi',
      'Podolog',
      "Tirnoq zamburug'i",
      "Farg'ona",
      "Qo'qon",
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      "Tirnoq qalinlashsa, uvalansa yoki to'shagidan ko'chsa",
      "Tirnoq rangi o'zgarsa yoki ostida qora chiziq paydo bo'lsa",
      "Tirnoqda nuqtali chuqurchalar yoki chiziqlar bo'lsa",
      "Faqat bitta tirnoq o'zgargan bo'lsa",
      "Tirnoq atrofida og'riq, shish yoki yiring bo'lsa",
    ],
    faq: [
      {
        question: "Mo'rt tirnoqlar uchun vitamin ichish kerakmi?",
        answer:
          "Vitaminlar har doim ham yordam bermaydi va tez natijani kafolatlamaydi. Temir yoki boshqa moddalar tanqisligi borligini tahlillar ko'rsatadi — ularni shifokor tayinlaydi va natijaga qarab maslahat beradi.",
      },
      {
        question: "Gel-lak tirnoqni buzadimi?",
        answer:
          "Gel-lakning o'zi emas, ko'pincha uni tez-tez qo'yish va qo'pol olib tashlash tirnoqni yupqalashtiradi. Tanaffus qiling va olib tashlashni mutaxassisga ishoning.",
      },
      {
        question: "Mo'rtlik zamburug'mi yoki oddiy quruqlik ekanini qanday bilsa bo'ladi?",
        answer:
          "Zamburug'da tirnoq odatda qalinlashadi, rangi o'zgaradi va uvalanadi, ko'pincha oyoqda boshlanadi. Aniq javobni faqat tahlil beradi — klinikada tirnoq zamburug'iga tahlil o'tkaziladi.",
      },
      {
        question: 'Tirnoq qancha vaqtda tiklanadi?',
        answer:
          "Qo'l tirnog'i to'liq yangilanishi uchun odatda 4–6 oy, oyoq tirnog'i uchun undan ko'proq vaqt kerak. Shuning uchun parvarish natijasi oylar davomida ko'rinadi.",
      },
      {
        question: "Farg'ona va Qo'qonda mo'rt tirnoqlarni qayerda tekshirish mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida podolog va dermatolog tirnoqni ko'radi, kerak bo'lsa zamburug'ga tahlil o'tkazadi va tirnoqqa apparat bilan ishlov beradi. Saytda yoki +998 73 200-73-73 (Farg'ona) yoki +998 95 145 73 73 (Qo'qon) raqamlari orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Ломкие и слоящиеся ногти: вода, зимний воздух и гель-лак, грибок и псориаз, тревожные признаки, проверка в клинике и уход дома. Подолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Чаще всего причина — вода, моющие средства, сухой зимний воздух и гель-лак',
      'Утолщение, смена цвета, отслоение и изменение одного ногтя требуют осмотра врача',
      'Не используйте противогрибковые средства без анализа',
      'Осмотр, дерматоскопия ногтя и анализ на грибок помогают найти причину',
      'Ногти растут медленно — улучшение видно через месяцы',
    ],
    tags: [
      'Ломкие ногти',
      'Слоящиеся ногти',
      'Уход за ногтями',
      'Подолог',
      'Грибок ногтей',
      'Фергана',
      'Коканд',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Ноготь утолщается, крошится или отходит от ложа',
      'Меняется цвет ногтя или под ним появилась тёмная полоса',
      'На ногте точечные ямки или борозды',
      'Изменился только один ноготь',
      'Вокруг ногтя боль, отёк или гной',
    ],
    faq: [
      {
        question: 'Нужно ли пить витамины при ломких ногтях?',
        answer:
          'Витамины помогают не всегда и не дают быстрого результата. Есть ли дефицит железа или других веществ, покажут анализы — их назначает врач и по результатам даёт рекомендации.',
      },
      {
        question: 'Портит ли гель-лак ногти?',
        answer:
          'Чаще вредит не сам гель-лак, а частое покрытие и грубое снятие, которые истончают ноготь. Делайте перерывы и доверяйте снятие мастеру.',
      },
      {
        question: 'Как понять, грибок это или просто сухость?',
        answer:
          'При грибке ноготь обычно утолщается, меняет цвет и крошится, часто начинается на ногах. Точный ответ даёт только анализ — в клинике проводят анализ на грибок ногтей.',
      },
      {
        question: 'Сколько времени восстанавливается ноготь?',
        answer:
          'Ноготь на руке полностью обновляется обычно за 4–6 месяцев, на ноге — дольше. Поэтому результат ухода заметен через месяцы.',
      },
      {
        question: 'Где проверить ломкие ногти в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде подолог и дерматолог осмотрят ногти, при необходимости проведут анализ на грибок и аппаратно обработают ногти. Записаться можно на сайте или по телефону +998 73 200-73-73 (Фергана) или +998 95 145 73 73 (Коканд).',
      },
    ],
  },
  en: {
    summary:
      'Brittle and splitting nails: water, winter air and gel polish, fungus and psoriasis, warning signs, clinic checks and care at home. Podologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'The usual causes are water, detergents, dry winter air and gel polish',
      'Thickening, colour change, lifting or a change in a single nail needs a doctor',
      'Do not use antifungal products without a test',
      'An exam, nail dermatoscopy and a fungus test find the cause',
      'Nails grow slowly — improvement shows over months',
    ],
    tags: [
      'Brittle nails',
      'Splitting nails',
      'Nail care',
      'Podologist',
      'Nail fungus',
      'Fergana',
      'Kokand',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'A nail thickens, crumbles or lifts from its bed',
      'The nail changes colour or a dark streak appears under it',
      'There are pinpoint pits or lines on the nail',
      'Only one nail has changed',
      'Pain, swelling or pus around the nail',
    ],
    faq: [
      {
        question: 'Should I take vitamins for brittle nails?',
        answer:
          'Vitamins do not always help and do not give quick results. Tests show whether you lack iron or anything else — the doctor orders them and advises based on the results.',
      },
      {
        question: 'Does gel polish ruin nails?',
        answer:
          'It is usually not the gel itself but frequent application and harsh removal that thin the nail. Take breaks and leave removal to a professional.',
      },
      {
        question: 'How can I tell fungus from simple dryness?',
        answer:
          'With fungus the nail usually thickens, changes colour and crumbles, and it often starts on the toes. Only a test gives a clear answer — the clinic does a nail fungus analysis.',
      },
      {
        question: 'How long does a nail take to recover?',
        answer:
          'A fingernail usually takes 4–6 months to grow out completely, a toenail longer. That is why the results of care show over months.',
      },
      {
        question: 'Where in Fergana and Kokand can I have brittle nails checked?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a podologist and dermatologist examine the nails, run a fungus test if needed and treat the nails with an apparatus. Book on the website or call +998 73 200-73-73 (Fergana) or +998 95 145 73 73 (Kokand).',
      },
    ],
  },
};

export const BRITTLE_NAILS_ARTICLE: Article = {
  id: 'art-mort-tirnoqlar',
  slug: 'mort-tirnoqlar',
  title: {
    uz: "Mo'rt va qatlanadigan tirnoqlar: sabablari, xavfli belgilar va to'g'ri parvarish",
    ru: 'Ломкие и слоящиеся ногти: причины, тревожные признаки и правильный уход',
    en: 'Brittle and Splitting Nails: Causes, Warning Signs and the Right Care',
  },
  summary: {
    uz: BRITTLE_NAILS_ARTICLE_CATALOG.uz.summary,
    ru: BRITTLE_NAILS_ARTICLE_CATALOG.ru.summary,
    en: BRITTLE_NAILS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: BRITTLE_NAILS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: BRITTLE_NAILS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: BRITTLE_NAILS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Karimova Iroda',
    ru: 'Каримова Ирода',
    en: 'Dr. Iroda Karimova',
  },
  date: '2026-12-10',
  image: '/articles/mort-tirnoqlar-cover.jpg',
  images: {
    uz: '/articles/mort-tirnoqlar-cover.jpg',
    ru: '/articles/mort-tirnoqlar-cover.jpg',
    en: '/articles/mort-tirnoqlar-cover.jpg',
  },
  views: 0,
};
