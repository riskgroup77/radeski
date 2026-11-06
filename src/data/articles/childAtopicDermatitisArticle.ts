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
 * Atopic dermatitis in children — a practical winter plan for parents, not a second general
 * article (that is art-atopic-dermatitis; other childhood rashes are art-bolalarda-teri-toshmalari).
 * Points: why it flares in winter, signs by age, the daily "soak and seal" routine with generous
 * emollient, night itch, food-allergy myths (no diets without a doctor), kindergarten and school,
 * red flags (infection, eczema herpeticum), what not to do, and that the doctor chooses treatment.
 */

function uzBody(): string {
  return `Atopik dermatit — bolalarda eng ko'p uchraydigan surunkali teri kasalliklaridan biri. Qishda ko'plab ota-onalar bir xil manzarani ko'radi: kuzda tinchigan teri yana quruqlashadi, qizaradi, bola kechasi qashinib uxlay olmaydi. Bu maqola kasallikning umumiy tavsifi emas, balki qish oylari uchun amaliy reja: uyda har kuni nima qilish, nimadan saqlanish va qachon shifokorga shoshilish kerak. Kasallik haqida umumiy ma'lumot: [atopik dermatit](/uz/articles/art-atopic-dermatitis) va [atopik dermatit sahifasi](/uz/conditions/atopik-dermatit).

## Nega qishda kuchayadi?

Atopik dermatitda teri to'sig'i (himoya qatlami) zaif: namlikni yomon ushlaydi va tashqi ta'sirlarga sezgir bo'ladi. Qishda unga bir vaqtning o'zida bir nechta omil ta'sir qiladi:

- **isitilgan quruq havo** — xonada namlik keskin kamayadi, teri suvini yo'qotadi;
- **issiq vanna va uzoq cho'miltirish** — issiq suv terining tabiiy yog'larini yuvib ketadi;
- **jun kiyimlar** — dag'al tola terini ishqalaydi va qichishni kuchaytiradi;
- **sovuq va shamol** — ayniqsa yuz va qo'llarda;
- **shamollash va virusli infeksiyalar** — ko'pincha toshma kuchayishidan oldin keladi;
- **qalin kiyintirish va terlash** — ter ham terini qichitadi.

## Belgilar yoshga qarab

- **Chaqaloqlar (taxminan 2 yoshgacha)** — yonoqlarda, peshona va boshda, qo'l va oyoqlarning tashqi yuzasida qizarish, quruqlik, ba'zan namlanish. Taglik sohasi odatda toza qoladi.
- **Kattaroq bolalar** — tirsak va tizza bukilmalarida, bilaklarda, bo'yinda, to'piqlarda quruq, qalinlashgan, qichiydigan dog'lar.
- **Har qanday yoshda** — kuchli qichishish, ayniqsa kechqurun va kechasi; tirnalgan izlar.

Bolalardagi boshqa toshmalardan farqlash uchun: [bolalarda teri toshmalari](/uz/articles/art-bolalarda-teri-toshmalari).

## Har kungi qishki reja

- **Qisqa, iliq cho'miltirish** — 5–10 daqiqa, suv iliq, issiq emas. Yumshoq, hidsiz yuvish vositasi faqat kerakli joylarga.
- **Ishqalamasdan quritish** — sochiq bilan terini yengil bosib namni oling, teri biroz nam qolsin.
- **Darhol namlantirish ("namlab, yopish")** — cho'miltirishdan keyin bir necha daqiqa ichida butun tanaga emolent (yumshatuvchi, namlantiruvchi krem) surting: u terida qolgan namni "yopib" qo'yadi. Kun davomida yana bir necha marta takrorlang, ayniqsa qo'l yuvgandan keyin.
- **Kremni ayamang** — ko'p ota-onalar juda oz surtadi. Emolent mo'l, qalin qatlamda surtiladi; qutisi tez tugashi normal. Qaysi vosita mos kelishini shifokordan so'rang.
- **Paxta kiyim** — teriga tegadigan qatlam paxtadan bo'lsin, jun va sintetikani uning ustidan kiyintiring. Bolani haddan tashqari issiq o'ramang.
- **Kalta tirnoqlar** — tirnoqlarni muntazam kalta va silliq qilib oling; chaqaloqqa kechasi paxta qo'lqop kiydirish mumkin.
- **Xona havosi** — xonani har kuni shamollating, isitgich yonida uxlatmang; havo juda quruq bo'lsa, namlagich foydali bo'lishi mumkin (uni toza saqlang).
- **Kir yuvish** — yumshoq, hidsiz kir yuvish kukuni va yaxshi chayish. Xushbo'y yumshatgichlar, atir va hidli kremlardan voz keching.

Qishki teri parvarishining umumiy qoidalari: [qishda teri parvarishi](/uz/articles/art-qishda-teri-parvarishi).

## Kechasi qichishish va uyqu

Qichishish ko'pincha kechasi kuchayadi va butun oilaning uyqusini buzadi. Xona salqin bo'lsin, uxlashdan oldin emolent surting, bolani yengil paxta kiyimda yotqizing. Agar bola qichishdan muntazam uyg'onib ketsa, bu kasallik faol ekanining belgisi va davolashni shifokor bilan qayta ko'rib chiqish uchun sabab. Qichishish haqida batafsil: [teri qichishi](/uz/articles/art-teri-qichishi).

## Ovqat allergiyasi haqidagi afsonalar

Ota-onalar ko'pincha toshma sababini ovqatdan qidiradi va bola ratsionidan bir nechta mahsulotni olib tashlaydi. Aksariyat bolalarda atopik dermatit faqat ovqat bilan bog'liq emas. Shifokorsiz parhez xavfli: bola o'sish uchun zarur oqsil, kalsiy va vitaminlarni ololmay qolishi mumkin. Agar ma'lum ovqatdan keyin tez reaksiya (shish, eshakemi, qusish) bo'lsa — shifokorga ayting; mahsulotni cheklash faqat tekshiruvdan keyin hal qilinadi.

## Bog'cha va maktab

Tarbiyachi yoki o'qituvchiga bolaning holatini tushuntiring: atopik dermatit yuqumli emas. Bolaga kichik qutida emolent bering va qo'l yuvgandan keyin surtishni o'rgating. Jismoniy tarbiyadan keyin terni yuvib, krem surtish foydali.

## Tez shifokorga ko'rining, agar:

- teri namlansa, sariq qobiqlar yoki yiring paydo bo'lsa, isitma chiqsa — bu infeksiya belgisi bo'lishi mumkin;
- birdaniga og'riqli, to'p-to'p pufakchalar yoki o'yilgan mayda yaralar paydo bo'lsa — bu gerpes infeksiyasining og'ir shakli (ekzema gerpetikum) bo'lishi mumkin va **shu kuniyoq** shifokor kerak; batafsil: [gerpes](/uz/articles/art-gerpes);
- bola yomon uxlasa, vazn olmasa yoki o'sishda ortda qolsa;
- to'g'ri parvarishga qaramay toshma qayta-qayta kuchaysa.

## Uyda nima qilmaslik kerak

- dorixonadan gormonli kremni shifokorsiz olib surtish — yoki aksincha, shifokor tayinlagan davolashni o'zboshimchalik bilan keskin to'xtatish;
- teriga xalq vositalari (o'tlar, sirka, spirt, turli yog'lar) surtish;
- juda issiq suvda cho'miltirish, mochalka bilan ishqalash;
- terini sochiq bilan qattiq artish.

## Klinikada qanday davolanadi?

Bolalar dermatologi terini ko'radi, toshmaning og'irligini baholaydi, kuchaytiruvchi omillarni aniqlaydi va uni boshqa kasalliklardan farqlaydi. Davolashni shifokor tanlaydi:

- **mahalliy yallig'lanishga qarshi vositalar** — shifokor tayinlagan, aniq sxema bo'yicha;
- **fototerapiya** — ba'zi hollarda kattaroq bolalar va o'smirlarda;
- **biologik terapiya** — og'ir holatlarda, mutaxassis qarori bilan; batafsil: [immunobiologik terapiya](/uz/services/dermatologiya/immunobiologik-terapiya).

Atopik dermatit odatda to'lqinsimon kechadi: maqsad — kuchayishlarni kamaytirish va bolaning tinch uxlashi. Ko'p bolalarda yosh bilan holat yengillashadi, lekin bu har bir bolada turlicha.

## Bolalar dermatologi Farg'ona va Qo'qonda

Radeski Skin Clinic'da bolalar dermatologi qishki kuchayishda terini baholaydi va ota-onalar bilan birga parvarish rejasini tuzadi.

- [Dermatolog Farg'onada](/uz/fargona/dermatolog) va [Qo'qonda](/uz/qoqon/dermatolog);
- [Bolalar dermatologiyasi](/uz/services/dermatologiya/bolalar-dermatologiyasi);
- [Fototerapiya](/uz/services/dermatologiya/fototerapiya).

Qishda kremni ayamang va bolani qisqa, iliq suvda cho'miltiring — atopik dermatit nazorati shu oddiy odatlardan boshlanadi.`;
}

function ruBody(): string {
  return `Атопический дерматит — одно из самых частых хронических заболеваний кожи у детей. Зимой многие родители видят одну и ту же картину: успокоившаяся за осень кожа снова сохнет, краснеет, а ребёнок ночью чешется и плохо спит. Эта статья — не общее описание болезни, а практический план на зимние месяцы: что делать дома каждый день, чего избегать и когда срочно идти к врачу. Общая информация о болезни: [атопический дерматит](/ru/articles/art-atopic-dermatitis) и [страница об атопическом дерматите](/ru/conditions/atopik-dermatit).

## Почему зимой обострения?

При атопическом дерматите кожный барьер (защитный слой) ослаблен: он плохо удерживает влагу и чувствителен к внешним воздействиям. Зимой на него действуют сразу несколько факторов:

- **сухой воздух от отопления** — влажность в комнате резко падает, кожа теряет воду;
- **горячие и долгие ванны** — горячая вода смывает естественные липиды кожи;
- **шерстяная одежда** — грубые волокна трут кожу и усиливают зуд;
- **мороз и ветер** — особенно на лице и руках;
- **простуды и вирусные инфекции** — часто предшествуют обострению;
- **слишком тёплая одежда и потливость** — пот тоже раздражает кожу.

## Признаки в разном возрасте

- **Младенцы (примерно до 2 лет)** — покраснение, сухость, иногда мокнутие на щеках, лбу и голове, на наружной поверхности рук и ног. Область подгузника обычно остаётся чистой.
- **Дети постарше** — сухие, утолщённые, зудящие участки в локтевых и подколенных сгибах, на запястьях, шее, лодыжках.
- **В любом возрасте** — сильный зуд, особенно вечером и ночью; расчёсы.

Как отличить от других высыпаний у детей: [кожные высыпания у детей](/ru/articles/art-bolalarda-teri-toshmalari).

## Ежедневный зимний план

- **Короткое тёплое купание** — 5–10 минут, вода тёплая, не горячая. Мягкое средство без отдушек — только там, где нужно.
- **Промокнуть, а не растирать** — полотенцем мягко промокните кожу, пусть она останется слегка влажной.
- **Сразу увлажнить («замочить и запечатать»)** — в течение нескольких минут после купания нанесите эмолент (смягчающий, увлажняющий крем) на всё тело: он «запечатывает» оставшуюся в коже влагу. Повторяйте несколько раз в день, особенно после мытья рук.
- **Не жалейте крема** — многие родители наносят слишком мало. Эмолент наносят щедро, плотным слоем; если упаковка быстро заканчивается — это нормально. Какое средство подойдёт, спросите у врача.
- **Хлопковая одежда** — слой, который касается кожи, должен быть из хлопка, шерсть и синтетику надевайте поверх. Не кутайте ребёнка.
- **Короткие ногти** — регулярно подстригайте и подпиливайте ногти; малышу на ночь можно надевать хлопковые варежки.
- **Воздух в комнате** — ежедневно проветривайте, не укладывайте спать рядом с обогревателем; при очень сухом воздухе может помочь увлажнитель (держите его в чистоте).
- **Стирка** — мягкий порошок без отдушек и хорошее полоскание. Откажитесь от ароматных кондиционеров, духов и парфюмированных кремов.

Общие правила зимнего ухода за кожей: [уход за кожей зимой](/ru/articles/art-qishda-teri-parvarishi).

## Ночной зуд и сон

Зуд часто усиливается ночью и нарушает сон всей семьи. Пусть в комнате будет прохладно, перед сном нанесите эмолент, оденьте ребёнка в лёгкую хлопковую пижаму. Если ребёнок регулярно просыпается от зуда, это признак активной болезни и повод вместе с врачом пересмотреть лечение. Подробнее о зуде: [кожный зуд](/ru/articles/art-teri-qichishi).

## Мифы о пищевой аллергии

Родители часто ищут причину сыпи в еде и убирают из рациона ребёнка сразу несколько продуктов. У большинства детей атопический дерматит не связан только с питанием. Диета без врача опасна: ребёнок может недополучать белок, кальций и витамины, нужные для роста. Если после определённой еды быстро появляется реакция (отёк, крапивница, рвота) — скажите врачу; ограничивать продукт решают только после обследования.

## Детский сад и школа

Объясните воспитателю или учителю состояние ребёнка: атопический дерматит не заразен. Дайте ребёнку маленький тюбик эмолента и научите наносить его после мытья рук. После физкультуры полезно смыть пот и нанести крем.

## Срочно к врачу, если:

- кожа мокнет, появились жёлтые корки или гной, поднялась температура — это может быть инфекция;
- внезапно появились болезненные сгруппированные пузырьки или мелкие «выбитые» язвочки — это может быть тяжёлая форма герпетической инфекции (герпетиформная экзема Капоши), нужен врач **в тот же день**; подробнее: [герпес](/ru/articles/art-gerpes);
- ребёнок плохо спит, не набирает вес или отстаёт в росте;
- обострения повторяются, несмотря на правильный уход.

## Чего не делать дома

- покупать в аптеке гормональный крем и мазать без врача — или, наоборот, самовольно резко отменять назначенное лечение;
- наносить на кожу народные средства (травы, уксус, спирт, разные масла);
- купать в очень горячей воде, тереть мочалкой;
- сильно растирать кожу полотенцем.

## Как лечат в клинике?

Детский дерматолог осмотрит кожу, оценит тяжесть, выявит провоцирующие факторы и отличит атопический дерматит от других болезней. Лечение подбирает врач:

- **местные противовоспалительные средства** — по назначению врача, по чёткой схеме;
- **фототерапия** — в некоторых случаях у детей постарше и подростков;
- **биологическая терапия** — при тяжёлом течении, по решению специалиста; подробнее: [иммунобиологическая терапия](/ru/services/dermatologiya/immunobiologik-terapiya).

Атопический дерматит обычно протекает волнами: цель — реже обострения и спокойный сон ребёнка. У многих детей с возрастом состояние становится легче, но у каждого по-своему.

## Детский дерматолог в Фергане и Коканде

В Radeski Skin Clinic детский дерматолог оценит кожу при зимнем обострении и вместе с родителями составит план ухода.

- [Дерматолог в Фергане](/ru/fargona/dermatolog) и [в Коканде](/ru/qoqon/dermatolog);
- [Детская дерматология](/ru/services/dermatologiya/bolalar-dermatologiyasi);
- [Фототерапия](/ru/services/dermatologiya/fototerapiya).

Зимой не жалейте крема и купайте ребёнка коротко в тёплой воде — контроль атопического дерматита начинается с этих простых привычек.`;
}

function enBody(): string {
  return `Atopic dermatitis is one of the most common long-term skin conditions in children. In winter many parents see skin that settled in autumn turn dry and red again, and a child who scratches at night. This is not a general overview but a practical winter plan: daily care at home, what to avoid and when to see a doctor quickly. For the general picture: [atopic dermatitis](/en/articles/art-atopic-dermatitis) and the [atopic dermatitis page](/en/conditions/atopik-dermatit).

## Why does it flare in winter?

In atopic dermatitis the skin barrier is weak: it holds moisture poorly and reacts easily. In winter several things hit it at once:

- **dry heated air** — indoor humidity drops sharply and the skin loses water;
- **hot, long baths** — hot water washes away the skin's natural oils;
- **wool** — coarse fibres rub the skin and make the itch worse;
- **cold and wind** — especially on the face and hands;
- **colds and viral infections** — often come just before a flare;
- **over-dressing and sweating** — sweat irritates the skin too.

## Signs at different ages

- **Babies (up to about 2 years)** — redness, dryness and sometimes weeping on the cheeks, forehead and scalp, and on the outer sides of the arms and legs. The nappy area usually stays clear.
- **Older children** — dry, thickened, itchy patches in the elbow and knee folds, on the wrists, neck and ankles.
- **At any age** — strong itch, especially in the evening and at night; scratch marks.

To tell it apart from other childhood rashes: [skin rashes in children](/en/articles/art-bolalarda-teri-toshmalari).

## The daily winter plan

- **A short, lukewarm bath** — 5–10 minutes, warm water, not hot. A mild, fragrance-free wash only where it is needed.
- **Pat dry, don't rub** — press the towel gently so the skin stays slightly damp.
- **Moisturise straight away ("soak and seal")** — within a few minutes of the bath apply an emollient (a softening, moisturising cream) all over: it seals in the water left in the skin. Repeat several times a day, especially after hand washing.
- **Be generous with cream** — many parents use far too little. Emollient goes on thickly and generously; a tub running out quickly is normal. Ask the doctor which product suits your child.
- **Cotton clothes** — the layer touching the skin should be cotton, with wool or synthetics on top. Don't over-wrap the child.
- **Short nails** — keep nails short and smooth; babies can wear cotton mittens at night.
- **Room air** — air the room every day and don't let the child sleep next to a heater; if the air is very dry a humidifier may help (keep it clean).
- **Laundry** — a mild, fragrance-free washing powder and a good rinse. Skip scented fabric softeners, perfumes and fragranced creams.

General winter skin-care rules: [winter skin care](/en/articles/art-qishda-teri-parvarishi).

## Night-time itch and sleep

Itching often worsens at night. Keep the bedroom cool, apply emollient before bed and dress the child in light cotton pyjamas. If the child regularly wakes up scratching, the disease is active and it is time to review the treatment with the doctor. More on itch: [itchy skin](/en/articles/art-teri-qichishi).

## Food allergy myths

Parents often look for the cause of the rash in food and cut several foods from the child's diet. In most children atopic dermatitis is not driven by food alone. A diet without a doctor is risky: the child may miss the protein, calcium and vitamins needed for growth. If a specific food causes a fast reaction (swelling, hives, vomiting), tell the doctor; restricting it is decided only after an assessment.

## Kindergarten and school

Tell the teacher that atopic dermatitis is not contagious. Give the child a small tube of emollient to apply after washing hands and after PE.

## See a doctor quickly if:

- the skin weeps, yellow crusts or pus appear, or the child has a fever — this may be an infection;
- painful clustered blisters or small punched-out sores appear suddenly — this may be a severe herpes infection (eczema herpeticum) and needs a doctor **the same day**; more: [herpes](/en/articles/art-gerpes);
- the child sleeps poorly, does not gain weight or falls behind in growth;
- flares keep coming back despite good care.

## What not to do at home

- buy a steroid cream at the pharmacy and use it without a doctor — or, the other way round, stop prescribed treatment abruptly on your own;
- put folk remedies on the skin (herbs, vinegar, alcohol, assorted oils);
- bathe the child in very hot water or scrub with a washcloth;
- rub the skin hard with a towel.

## How is it treated at the clinic?

A paediatric dermatologist examines the skin, assesses severity, looks for triggers and rules out other conditions. The doctor chooses the treatment:

- **topical anti-inflammatory treatment** — prescribed by the doctor, on a clear schedule;
- **phototherapy** — in some cases for older children and teenagers;
- **biological therapy** — for severe disease, decided by a specialist; more: [immunobiological therapy](/en/services/dermatologiya/immunobiologik-terapiya).

Atopic dermatitis comes in waves: the goal is fewer flares and good sleep. In many children it eases with age, but every child is different.

## Paediatric dermatologist in Fergana and Kokand

At Radeski Skin Clinic a paediatric dermatologist assesses the skin during a winter flare and works out a care plan together with the parents.

- [Dermatologist in Fergana](/en/fargona/dermatolog) and [in Kokand](/en/qoqon/dermatolog);
- [Paediatric dermatology](/en/services/dermatologiya/bolalar-dermatologiyasi);
- [Phototherapy](/en/services/dermatologiya/fototerapiya).

This winter, be generous with cream and keep baths short and lukewarm — controlling atopic dermatitis starts with these simple habits.`;
}

export const CHILD_ATOPIC_DERMATITIS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Bolalarda atopik dermatit qishda nega kuchayadi: yoshga qarab belgilar, cho'miltirish va namlantirish rejasi, xavfli belgilar va nima qilmaslik kerak. Farg'ona va Qo'qonda bolalar dermatologi.",
    body: uzBody(),
    keyTakeaways: [
      "Qishda quruq havo, issiq suv, jun va shamollash atopik dermatitni kuchaytiradi",
      "Qisqa iliq cho'miltirish, bosib quritish va darhol mo'l emolent — kundalik asos",
      "Emolent kuniga bir necha marta va ayamasdan surtiladi",
      "Shifokorsiz parhez va gormonli krem xavfli; tayinlangan davolashni keskin to'xtatmang",
      "Yiring, sariq qobiq, isitma yoki to'satdan og'riqli pufakchalar — tez shifokorga",
    ],
    tags: ['Atopik dermatit', 'Bolalar dermatologi', 'Bolalarda ekzema', 'Qishki parvarish', 'Emolent', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Teri namlansa, sariq qobiq yoki yiring paydo bo'lsa",
      "Toshma bilan birga isitma chiqsa",
      "To'satdan og'riqli, to'p-to'p pufakchalar yoki o'yilgan yaralar paydo bo'lsa",
      "Bola qichishdan yomon uxlasa yoki vazn olmasa",
      "To'g'ri parvarishga qaramay toshma qayta-qayta kuchaysa",
    ],
    faq: [
      {
        question: "Atopik dermatitli bolani har kuni cho'miltirish mumkinmi?",
        answer:
          "Ha, agar cho'miltirish qisqa (5–10 daqiqa) va suv iliq bo'lsa. Asosiysi — terini ishqalamasdan quritib, bir necha daqiqa ichida emolent surtish.",
      },
      {
        question: 'Emolentni qancha va necha marta surtish kerak?',
        answer:
          "Mo'l, qalin qatlamda — butun tanaga cho'miltirishdan keyin va kun davomida yana bir necha marta, teri quruqlashganda. Qaysi vosita mos kelishini shifokor maslahat beradi.",
      },
      {
        question: "Bolaning ratsionidan shirinlik yoki sutni olib tashlash kerakmi?",
        answer:
          "Shifokorsiz yo'q. Aksariyat bolalarda atopik dermatit faqat ovqatga bog'liq emas, ortiqcha parhez esa o'sishga zarar qilishi mumkin. Ovqatdan keyin tez reaksiya bo'lsa, shifokorga ayting.",
      },
      {
        question: "Atopik dermatit boshqa bolalarga yuqadimi?",
        answer:
          "Yo'q, atopik dermatit yuqumli emas. Bola bog'cha va maktabga bemalol borishi mumkin; faqat teriga infeksiya tushgan bo'lsa, shifokor ko'rigi kerak.",
      },
      {
        question: "Farg'ona va Qo'qonda bolalardagi atopik dermatitni qayerda tekshirish mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida bolalar dermatologi terini ko'radi va qishki parvarish hamda davolash rejasini tuzadi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Почему атопический дерматит у детей обостряется зимой: признаки по возрасту, план купания и увлажнения, тревожные признаки и чего не делать. Детский дерматолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Зимой атопический дерматит усиливают сухой воздух, горячая вода, шерсть и простуды',
      'Короткое тёплое купание, промокнуть и сразу щедро нанести эмолент — ежедневная основа',
      'Эмолент наносят несколько раз в день и не экономят',
      'Диета и гормональный крем без врача опасны; назначенное лечение нельзя резко отменять',
      'Гной, жёлтые корки, температура или внезапные болезненные пузырьки — срочно к врачу',
    ],
    tags: ['Атопический дерматит', 'Детский дерматолог', 'Экзема у детей', 'Зимний уход', 'Эмолент', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Кожа мокнет, появились жёлтые корки или гной',
      'Сыпь сопровождается температурой',
      'Внезапно появились болезненные сгруппированные пузырьки или «выбитые» язвочки',
      'Ребёнок плохо спит из-за зуда или не набирает вес',
      'Обострения повторяются, несмотря на правильный уход',
    ],
    faq: [
      {
        question: 'Можно ли купать ребёнка с атопическим дерматитом каждый день?',
        answer:
          'Да, если купание короткое (5–10 минут) и вода тёплая. Главное — промокнуть кожу, не растирая, и в течение нескольких минут нанести эмолент.',
      },
      {
        question: 'Сколько и как часто наносить эмолент?',
        answer:
          'Щедро, плотным слоем — на всё тело после купания и ещё несколько раз в день, когда кожа сохнет. Какое средство подойдёт, подскажет врач.',
      },
      {
        question: 'Нужно ли убирать из рациона сладкое или молоко?',
        answer:
          'Без врача — нет. У большинства детей атопический дерматит не связан только с едой, а лишняя диета может навредить росту. Если после еды быстро возникает реакция, скажите врачу.',
      },
      {
        question: 'Заразен ли атопический дерматит?',
        answer:
          'Нет, атопический дерматит не заразен. Ребёнок может ходить в сад и школу; осмотр врача нужен, если на коже появились признаки инфекции.',
      },
      {
        question: 'Где в Фергане и Коканде проверить атопический дерматит у ребёнка?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде детский дерматолог осмотрит кожу и составит план зимнего ухода и лечения. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Why atopic dermatitis in children flares in winter: signs by age, a bathing and moisturising plan, red flags and what not to do. Paediatric dermatologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Dry air, hot water, wool and colds make atopic dermatitis worse in winter',
      'A short lukewarm bath, pat dry and generous emollient straight away — the daily basis',
      'Emollient goes on several times a day, and generously',
      'Diets and steroid creams without a doctor are risky; never stop prescribed treatment abruptly',
      'Pus, yellow crusts, fever or sudden painful blisters — see a doctor quickly',
    ],
    tags: ['Atopic dermatitis', 'Paediatric dermatologist', 'Eczema in children', 'Winter care', 'Emollient', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'The skin weeps, or yellow crusts or pus appear',
      'The rash comes with a fever',
      'Painful clustered blisters or punched-out sores appear suddenly',
      'The child sleeps badly because of itch or does not gain weight',
      'Flares keep returning despite good care',
    ],
    faq: [
      {
        question: 'Can a child with atopic dermatitis be bathed every day?',
        answer:
          'Yes, if the bath is short (5–10 minutes) and the water lukewarm. What matters is patting the skin dry and applying emollient within a few minutes.',
      },
      {
        question: 'How much emollient, and how often?',
        answer:
          'Generously, in a thick layer — all over after the bath and several more times a day whenever the skin feels dry. The doctor will advise which product suits your child.',
      },
      {
        question: 'Should I cut sweets or milk from my child\'s diet?',
        answer:
          'Not without a doctor. In most children atopic dermatitis is not caused by food alone, and unnecessary diets can harm growth. If a food causes a fast reaction, tell the doctor.',
      },
      {
        question: 'Is atopic dermatitis contagious?',
        answer:
          'No, it is not contagious. The child can go to kindergarten and school; a doctor should check the skin if it shows signs of infection.',
      },
      {
        question: 'Where in Fergana and Kokand can my child be seen for atopic dermatitis?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a paediatric dermatologist examines the skin and draws up a winter care and treatment plan. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const CHILD_ATOPIC_DERMATITIS_ARTICLE: Article = {
  id: 'art-bolalarda-atopik-dermatit',
  slug: 'bolalarda-atopik-dermatit',
  title: {
    uz: "Bolalarda atopik dermatit: qishda ota-onalar uchun parvarish rejasi",
    ru: 'Атопический дерматит у детей: зимний план ухода для родителей',
    en: 'Atopic Dermatitis in Children: A Winter Care Plan for Parents',
  },
  summary: {
    uz: CHILD_ATOPIC_DERMATITIS_ARTICLE_CATALOG.uz.summary,
    ru: CHILD_ATOPIC_DERMATITIS_ARTICLE_CATALOG.ru.summary,
    en: CHILD_ATOPIC_DERMATITIS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: CHILD_ATOPIC_DERMATITIS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: CHILD_ATOPIC_DERMATITIS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: CHILD_ATOPIC_DERMATITIS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Kodirova Dilafruzxon',
    ru: 'Кодирова Дилафрузхон',
    en: 'Dr. Dilafruzkhon Kodirova',
  },
  date: '2026-12-09',
  image: '/articles/bolalarda-atopik-dermatit-cover.jpg',
  images: {
    uz: '/articles/bolalarda-atopik-dermatit-cover.jpg',
    ru: '/articles/bolalarda-atopik-dermatit-cover.jpg',
    en: '/articles/bolalarda-atopik-dermatit-cover.jpg',
  },
  views: 0,
};
