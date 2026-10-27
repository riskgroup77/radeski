import type { ClinicEquipmentDetails, LocalizedEquipmentText } from '../clinicEquipmentCatalog';

function L(uz: string, ru: string, en: string): LocalizedEquipmentText {
  return { uz, ru, en };
}

/** Long sections of the Daavlin M series phototherapy page (loaded with the page, not the app shell). */
export const DAAVLIN_M_SERIES_DETAILS: ClinicEquipmentDetails = {
  about: [
    L(
      "Daavlin M series — Daavlin (AQSh) kompaniyasining modulli fototerapiya tizimi. U tana, qo'l-oyoq va boshqa keng yuzalarni kursli UVB nurlanishi bilan davolash uchun mo'ljallangan. Fototerapiya teriga nazorat qilinadigan dozadagi ultrabinafsha nur bilan ta'sir qilib, surunkali teri kasalliklarida yallig'lanishni kamaytirishga yordam beradi.",
      'Daavlin M series — модульная фототерапевтическая система компании Daavlin (США). Она предназначена для курсового UVB-лечения тела, конечностей и других обширных зон. Фототерапия воздействует на кожу ультрафиолетом в контролируемой дозе и помогает уменьшить воспаление при хронических заболеваниях кожи.',
      'Daavlin M series is a modular phototherapy system made by Daavlin (USA). It is designed for course-based UVB treatment of the body, arms and legs and other large areas. Phototherapy exposes the skin to a controlled dose of ultraviolet light and helps reduce inflammation in chronic skin conditions.',
    ),
    L(
      "Ko'plab bemorlarda toshmalar asosan qo'l va oyoqlarda — tirsak, tizza, boldir, bilak, kaft yoki tovonda joylashadi. Bunday hollarda butun tanani nurlantirish shart emas: faqat zararlangan sohani davolash sog'lom terining keraksiz nurlanishini kamaytiradi. Radeski klinikasida seanslar qo'llar, oyoqlar yoki qo'l va oyoqlar birgalikda tanlangan holda o'tkaziladi.",
      'У многих пациентов высыпания расположены преимущественно на руках и ногах — локтях, коленях, голенях, предплечьях, ладонях или стопах. В таких случаях облучать всё тело не обязательно: лечение только поражённой области уменьшает лишнее облучение здоровой кожи. В клинике Radeski сеансы проводятся с выбором зоны — руки, ноги или руки и ноги вместе.',
      'In many patients the rash is mainly on the arms and legs: the elbows, knees, shins, forearms, palms or soles. In such cases there is no need to treat the whole body; treating only the affected area reduces unnecessary exposure of healthy skin. At Radeski, sessions are given by zone: arms, legs, or arms and legs together.',
    ),
    L(
      "Fototerapiya bitta seans bilan cheklanmaydi — natija kurs davomida asta-sekin shakllanadi. Kursni boshlashdan oldin dermatolog bemorni ko'rikdan o'tkazadi, tashxisni tasdiqlaydi va davolanadigan zonani tanlaydi. Nur dozasi, seanslar chastotasi va kurs davomiyligini shifokor individual belgilaydi.",
      'Фототерапия не ограничивается одним сеансом — результат формируется постепенно на протяжении курса. Перед началом курса дерматолог осматривает пациента, подтверждает диагноз и выбирает зону лечения. Дозу облучения, частоту сеансов и длительность курса врач подбирает индивидуально.',
      'Phototherapy is not a one-off session; results build gradually over a course. Before the course begins, a dermatologist examines you, confirms the diagnosis and chooses the area to treat. The doctor sets the dose, how often you come in and how long the course lasts on an individual basis.',
    ),
  ],
  howItWorks: {
    paragraphs: [
      L(
        "UVB nurlari terining yuzaki qatlamlarida yallig'lanishni qo'llab-quvvatlovchi immun hujayralar faolligini pasaytiradi va psoriazda teri hujayralarining haddan tashqari tez yangilanishini sekinlashtiradi. Vitiligoda nurlanish pigment hosil qiluvchi hujayralarni rag'batlantirishi mumkin. Modulli tuzilish nurlanishni kerakli sohaga yo'naltirish imkonini beradi.",
        'UVB-излучение снижает активность иммунных клеток, поддерживающих воспаление в поверхностных слоях кожи, и при псориазе замедляет избыточно быстрое обновление клеток кожи. При витилиго облучение может стимулировать пигментообразующие клетки. Модульная конструкция позволяет направлять облучение на нужную область.',
        'UVB light reduces the activity of immune cells that drive inflammation in the upper layers of the skin and, in psoriasis, slows the overly fast turnover of skin cells. In vitiligo, the light may stimulate the cells that make pigment. The modular design allows the light to be directed to the area that needs it.',
      ),
      L(
        "Qo'l va oyoq terisi, ayniqsa kaft va tovon terisi, tananing boshqa qismlariga qaraganda qalinroq, shuning uchun bu sohalarda nurga javob boshqacha bo'lishi mumkin. Shifokor dozani zona va terining reaksiyasiga qarab asta-sekin oshiradi. Seans vaqtida ko'zlar va davolanmaydigan sohalar himoyalanadi.",
        'Кожа рук и ног, особенно ладоней и стоп, толще, чем на других участках тела, поэтому реакция на облучение здесь может отличаться. Врач постепенно повышает дозу с учётом зоны и реакции кожи. Во время сеанса глаза и участки, не подлежащие лечению, защищаются.',
        'The skin of the hands and feet, especially the palms and soles, is thicker than elsewhere on the body, so it may respond differently to the light. The doctor raises the dose gradually according to the area and how the skin reacts. Your eyes and any areas not being treated are protected during the session.',
      ),
    ],
    effects: [
      L("Qo'l-oyoqdagi blyashkalarda yallig'lanish va qizarishning kamayishi", 'Уменьшение воспаления и покраснения бляшек на конечностях', 'Less inflammation and redness in plaques on the limbs'),
      L("Po'st tashlash va teri qalinlashuvining kamayishi", 'Уменьшение шелушения и утолщения кожи', 'Less scaling and skin thickening'),
      L("Qichishish va yorilishlar bilan bog'liq noqulaylikning yengillashishi", 'Ослабление зуда и дискомфорта, связанного с трещинами', 'Relief from itching and the discomfort of cracked skin'),
      L("Vitiligo dog'larida pigment qaytishini rag'batlantirish", 'Стимуляция репигментации очагов витилиго', 'Stimulation of repigmentation in vitiligo patches'),
      L("Sog'lom terining keraksiz nurlanishini kamaytirish", 'Снижение лишнего облучения здоровой кожи', 'Less unnecessary exposure of healthy skin'),
    ],
  },
  indicationsIntro: L(
    "M series fototerapiyasi quyidagi holatlarda, ayniqsa toshmalar qo'l-oyoq yoki boshqa aniq sohalarda joylashganda ko'rib chiqilishi mumkin.",
    'Фототерапия M series может рассматриваться в следующих случаях, особенно когда высыпания расположены на конечностях или других чётко ограниченных зонах.',
    'M series phototherapy may be considered in the following cases, especially when the rash is on the arms and legs or other clearly defined areas.',
  ),
  indications: [
    {
      title: L("Qo'l-oyoq va tanadagi psoriaz", 'Псориаз тела и конечностей', 'Psoriasis on the body and limbs'),
      text: L(
        "Tirsak, tizza, boldir va boshqa sohalardagi psoriaz blyashkalari tashqi davolashga yetarlicha javob bermasa, shifokor kursli fototerapiyani qo'shishni taklif qilishi mumkin. Davolash tashqi preparatlar bilan birga olib boriladi.",
        'Если псориатические бляшки на локтях, коленях, голенях и других участках недостаточно отвечают на наружное лечение, врач может предложить добавить курсовую фототерапию. Лечение проводится вместе с наружными препаратами.',
        'If psoriasis plaques on the elbows, knees, shins and elsewhere are not responding well enough to topical treatment, the doctor may suggest adding a course of phototherapy. It is combined with topical medicines.',
      ),
    },
    {
      title: L('Kaft va tovon psoriazi', 'Псориаз ладоней и стоп', 'Psoriasis of the palms and soles'),
      text: L(
        "Kaft va tovondagi psoriaz kundalik hayotga sezilarli xalaqit beradi: teri yoriladi, yurish va qo'l bilan ishlash og'riqli bo'ladi. Bu sohalar terisi qalin bo'lgani uchun davolash ko'pincha uzoqroq davom etadi. Fototerapiya kompleks davolashning bir qismi sifatida ko'rib chiqilishi mumkin.",
        'Псориаз ладоней и стоп заметно мешает повседневной жизни: кожа трескается, ходьба и работа руками становятся болезненными. Поскольку кожа в этих зонах толстая, лечение нередко занимает больше времени. Фототерапия может рассматриваться как часть комплексного лечения.',
        'Psoriasis on the palms and soles gets in the way of daily life: the skin cracks, and walking or working with your hands becomes painful. Because the skin there is thick, treatment often takes longer. Phototherapy may be considered as part of comprehensive treatment.',
      ),
    },
    {
      title: L("Keng sohalardagi vitiligo", 'Витилиго обширных зон', 'Vitiligo over large areas'),
      text: L(
        "Vitiligo dog'lari qo'l, oyoq yoki tananing katta qismida joylashganda fototerapiya pigment qaytishini rag'batlantirish uchun qo'llaniladi. Natija sekin shakllanadi: qo'l barmoqlari va oyoq panjalaridagi dog'lar odatda boshqa sohalarga qaraganda qiyinroq javob beradi.",
        'Когда очаги витилиго расположены на руках, ногах или значительной части тела, фототерапию применяют для стимуляции репигментации. Результат формируется медленно: пятна на пальцах рук и на стопах обычно отвечают хуже, чем на других участках.',
        'When vitiligo patches are on the arms, legs or a large part of the body, phototherapy is used to encourage colour to return. Results come slowly: patches on the fingers and feet usually respond less well than those elsewhere.',
      ),
    },
    {
      title: L("Qo'l ekzemasi va surunkali dermatitlar", 'Экзема кистей и хронические дерматиты', 'Hand eczema and chronic dermatitis'),
      text: L(
        "Surunkali qo'l ekzemasi va atopik dermatitning qo'l-oyoqdagi o'choqlarida fototerapiya yallig'lanish va qichishishni kamaytirishga yordam berishi mumkin. Shu bilan birga qo'zg'atuvchi omillar — masalan, yuvish vositalari bilan aloqa — kamaytirilishi kerak.",
        'При хронической экземе кистей и очагах атопического дерматита на конечностях фототерапия может помочь уменьшить воспаление и зуд. Одновременно нужно сократить контакт с провоцирующими факторами, например с моющими средствами.',
        'For chronic hand eczema and patches of atopic dermatitis on the limbs, phototherapy can help reduce inflammation and itching. At the same time, contact with triggers such as detergents should be reduced.',
      ),
    },
    {
      title: L('Boshqa surunkali dermatozlar', 'Другие хронические дерматозы', 'Other chronic skin conditions'),
      text: L(
        "Nurga javob beradigan ayrim boshqa surunkali teri kasalliklarida ham fototerapiya ko'rib chiqilishi mumkin. Bunday holatlarda usulning maqsadga muvofiqligi va kutilayotgan natijani dermatolog alohida baholaydi.",
        'Фототерапия может рассматриваться и при некоторых других хронических заболеваниях кожи, которые отвечают на облучение. В таких случаях целесообразность метода и ожидаемый результат дерматолог оценивает индивидуально.',
        'Phototherapy may also be considered for some other chronic skin conditions that respond to light. In such cases the dermatologist assesses individually whether the method makes sense and what result to expect.',
      ),
    },
  ],
  suitability: {
    intro: L(
      "M series fototerapiyasi toshmalari asosan qo'l-oyoq yoki aniq chegaralangan sohalarda joylashgan va kursga muntazam qatnasha oladigan bemorlar uchun mos bo'lishi mumkin. Davolashni boshlashdan oldin shifokor quyidagilarni baholaydi:",
      'Фототерапия M series может подойти пациентам, у которых высыпания расположены преимущественно на конечностях или в чётко ограниченных зонах и которые могут регулярно посещать процедуры. Перед началом лечения врач оценивает:',
      'M series phototherapy may suit patients whose rash is mainly on the arms and legs or in clearly defined areas and who can attend sessions regularly. Before treatment begins, the doctor assesses:',
    ),
    checks: [
      L("Tashxis, toshmalar joylashuvi va maydoni", 'Диагноз, локализация и площадь высыпаний', 'The diagnosis and the location and extent of the rash'),
      L("Teri fototipi va quyoshda kuyishga moyillik", 'Фототип кожи и склонность к солнечным ожогам', 'Skin phototype and tendency to sunburn'),
      L("Ilgari teri saratoni yoki shubhali hosilalar bo'lgan-bo'lmagani", 'Наличие в прошлом рака кожи или подозрительных образований', 'Any history of skin cancer or suspicious lesions'),
      L("Yorug'likka sezuvchanlikni oshiradigan dorilar va boshqa davolash", 'Лекарства, повышающие светочувствительность, и другое текущее лечение', 'Medications that increase light sensitivity and other current treatment'),
      L("Avvalgi fototerapiya kurslari va ularga terining javobi", 'Предыдущие курсы фототерапии и реакция кожи на них', 'Previous phototherapy courses and how the skin responded'),
    ],
  },
  contraindications: {
    intro: L(
      "Fototerapiya o'tkazish imkoniyati har bir bemor uchun alohida belgilanadi. Kursni kechiktirish yoki undan voz kechishning asosiy sabablari:",
      'Возможность проведения фототерапии определяется для каждого пациента отдельно. Основные причины отложить курс или отказаться от него:',
      'Whether phototherapy is possible is decided for each patient individually. The main reasons to postpone or avoid a course are:',
    ),
    items: [
      L("Hozirda yoki ilgari melanoma yoki boshqa teri saratoni", 'Меланома или другой рак кожи в настоящем или в прошлом', 'Current or past melanoma or other skin cancer'),
      L("Yorug'likka sezuvchanlik bilan kechadigan kasalliklar, masalan qizil yuguruk (volchanka) yoki porfiriya", 'Заболевания с повышенной светочувствительностью, например красная волчанка или порфирия', 'Conditions involving light sensitivity, such as lupus or porphyria'),
      L("Terining yorug'likka sezuvchanligini oshiradigan dorilarni qabul qilish", 'Приём лекарств, повышающих чувствительность кожи к свету', 'Taking medicines that make the skin more sensitive to light'),
      L("Immunitetni sezilarli pasaytiradigan davolash", 'Лечение, значительно подавляющее иммунитет', 'Treatment that significantly suppresses the immune system'),
      L("Davolanadigan sohada tekshirilmagan shubhali hosilalar", 'Необследованные подозрительные образования в зоне лечения', 'Unexamined suspicious lesions in the treatment area'),
      L("Zonada yangi quyosh kuyishi, ochiq yaralar yoki infeksiya", 'Свежий солнечный ожог, открытые раны или инфекция в зоне облучения', 'A fresh sunburn, open wounds or infection in the treatment area'),
      L("Shifokor fototerapiyani xavfli deb hisoblagan boshqa individual holatlar", 'Иные индивидуальные обстоятельства, при которых врач считает фототерапию небезопасной', 'Other individual circumstances in which the doctor considers phototherapy unsafe'),
    ],
    note: L(
      "Homiladorlik, bolalik yoshi, ko'p sonli xollar va ilgari o'tkazilgan nur bilan davolash holatlarida xavf va foyda alohida baholanadi. Mahalliy fototerapiyada ham ultrabinafsha dozasi yillar davomida to'planishi mumkin, shuning uchun takroriy kurslarda terini muntazam ko'rikdan o'tkazish tavsiya etiladi.",
      'При беременности, в детском возрасте, при большом количестве родинок и после ранее проведённого лучевого лечения соотношение пользы и риска оценивается отдельно. Даже при локальной фототерапии доза ультрафиолета может накапливаться годами, поэтому при повторных курсах рекомендуется регулярный осмотр кожи.',
      'In pregnancy, in children, in people with many moles and after previous radiation treatment, the balance of benefit and risk is assessed separately. Even with localised phototherapy, the ultraviolet dose can build up over the years, so regular skin checks are recommended for repeated courses.',
    ),
  },
  steps: [
    {
      title: L('Konsultatsiya va zona tanlash', 'Консультация и выбор зоны', 'Consultation and choice of area'),
      text: L(
        "Dermatolog tashxisni tasdiqlaydi, toshmalar joylashuvini baholaydi va qaysi zona davolanishini belgilaydi: qo'llar, oyoqlar yoki ikkalasi birga. Kurs maqsadi va kutilayotgan natija muhokama qilinadi.",
        'Дерматолог подтверждает диагноз, оценивает расположение высыпаний и определяет зону лечения: руки, ноги или обе зоны вместе. Обсуждаются цель курса и ожидаемый результат.',
        'The dermatologist confirms the diagnosis, assesses where the rash is and decides which area to treat: arms, legs or both. The aim of the course and the expected result are discussed.',
      ),
    },
    {
      title: L('Dozani belgilash', 'Подбор дозы', 'Setting the dose'),
      text: L(
        "Teri fototipi, zona va kasallik turiga qarab boshlang'ich doza tanlanadi. Keyingi seanslarda u terining javobiga qarab asta-sekin oshiriladi.",
        'С учётом фототипа, зоны и вида заболевания подбирается начальная доза. На последующих сеансах её постепенно повышают в зависимости от реакции кожи.',
        'A starting dose is chosen based on your skin phototype, the area and the condition. In later sessions it is raised gradually according to how your skin responds.',
      ),
    },
    {
      title: L('Fototerapiya seansi', 'Сеанс фототерапии', 'The phototherapy session'),
      text: L(
        "Bemor davolanadigan sohani apparat oldiga joylashtiradi, ko'zlar himoya ko'zoynagi bilan himoyalanadi. Nurlanish qisqa vaqt davom etadi va odatda og'riqsiz; ba'zan yengil iliqlik seziladi.",
        'Пациент располагает зону лечения у аппарата, глаза защищаются очками. Облучение длится недолго и обычно безболезненно; иногда ощущается лёгкое тепло.',
        'You position the area being treated at the device and your eyes are protected with goggles. The exposure is short and usually painless; sometimes you may feel slight warmth.',
      ),
    },
    {
      title: L('Kurs bo\'yicha kuzatuv', 'Контроль по курсу', 'Follow-up during the course'),
      text: L(
        "Har bir seans oldidan terining reaksiyasi so'raladi: kuchli qizarish yoki achishish bo'lsa, doza kamaytiriladi yoki seans ko'chiriladi. Vaqti-vaqti bilan shifokor natijani baholab, kurs rejasiga o'zgartirish kiritadi.",
        'Перед каждым сеансом уточняется реакция кожи: при выраженном покраснении или жжении дозу снижают или сеанс переносят. Периодически врач оценивает результат и вносит изменения в план курса.',
        'Before each session you are asked how your skin reacted: if there is strong redness or burning, the dose is lowered or the session is moved. The doctor reviews the result from time to time and adjusts the plan.',
      ),
    },
    {
      title: L('Uyda parvarish', 'Домашний уход', 'Care at home'),
      text: L(
        "Kurs davomida qo'l va oyoq terisini muntazam namlantirish, yorilishlarni parvarish qilish va seans kunlari qo'shimcha quyosh ta'siridan saqlanish tavsiya etiladi. Qaysi tashqi vositalarni davom ettirishni shifokor aytadi.",
        'Во время курса рекомендуется регулярно увлажнять кожу рук и ног, ухаживать за трещинами и избегать дополнительного солнца в дни сеансов. Какие наружные средства продолжать, скажет врач.',
        'During the course, moisturise the skin of your hands and feet regularly, look after any cracks and avoid extra sun on treatment days. The doctor will tell you which topical products to continue.',
      ),
    },
  ],
  results: {
    intro: L(
      "Natija kurs davomida asta-sekin shakllanadi va tashxis, zona va muntazam qatnashishga bog'liq. Qalin teri sohalarida, masalan kaft va tovonda, o'zgarishlar odatda sekinroq bo'ladi. Natija kafolatlanmaydi, lekin quyidagilar kuzatilishi mumkin:",
      'Результат формируется постепенно в ходе курса и зависит от диагноза, зоны и регулярности посещений. На участках с толстой кожей, например на ладонях и стопах, изменения обычно наступают медленнее. Результат не гарантируется, но возможно:',
      'Results build gradually over the course and depend on the diagnosis, the area and regular attendance. On areas of thick skin, such as the palms and soles, changes usually come more slowly. Results are not guaranteed, but you may see:',
    ),
    items: [
      L("Blyashkalar maydoni va qalinligining kamayishi", 'Уменьшение площади и толщины бляшек', 'Smaller and thinner plaques'),
      L("Po'st tashlash va yorilishlarning kamayishi", 'Уменьшение шелушения и трещин', 'Less scaling and fewer cracks'),
      L("Qichishishning yengillashishi", 'Ослабление зуда', 'Less itching'),
      L("Vitiligo dog'larida asta-sekin rang paydo bo'lishi", 'Постепенное появление пигмента в очагах витилиго', 'Colour gradually returning to vitiligo patches'),
      L("Qo'l va oyoqlar bilan kundalik faoliyatning yengillashishi", 'Облегчение повседневных действий руками и ногами', 'Everyday tasks with your hands and feet becoming easier'),
    ],
  },
  conclusion: [
    L(
      "Daavlin M series — tana va qo'l-oyoqdagi surunkali teri kasalliklarini kursli UVB fototerapiya bilan davolash uchun modulli tizim. U psoriaz, vitiligo va boshqa surunkali dermatozlarda zararlangan sohaga yo'naltirilgan davolashni ta'minlab, sog'lom terining keraksiz nurlanishini kamaytirish imkonini beradi.",
      'Daavlin M series — модульная система для курсового UVB-лечения хронических заболеваний кожи тела и конечностей. При псориазе, витилиго и других хронических дерматозах она позволяет направлять лечение на поражённую зону и уменьшать лишнее облучение здоровой кожи.',
      'Daavlin M series is a modular system for course-based UVB treatment of chronic skin conditions on the body and limbs. For psoriasis, vitiligo and other chronic skin conditions, it lets treatment be directed at the affected area while reducing unnecessary exposure of healthy skin.',
    ),
    L(
      "Radeski klinikasida kurs dermatolog ko'rigi va zona tanlashdan boshlanadi. Shifokor fototerapiya sizga mosligini, seanslar rejasini va natijani qanday kuzatish mumkinligini tushuntirib beradi.",
      'В клинике Radeski курс начинается с осмотра дерматолога и выбора зоны. Врач объяснит, подходит ли вам фототерапия, каким будет план сеансов и как будет оцениваться результат.',
      'At Radeski, the course starts with a dermatologist examination and the choice of treatment area. The doctor will explain whether phototherapy suits you, what the session plan will be and how progress will be checked.',
    ),
  ],
  faq: [
    {
      question: L("Faqat qo'l yoki faqat oyoqqa seans o'tkazish mumkinmi?", 'Можно ли проводить сеансы только на руки или только на ноги?', 'Can I have sessions on just my hands or just my feet?'),
      answer: L(
        "Ha. Radeski klinikasida M series seanslari zona bo'yicha o'tkaziladi: qo'llar, oyoqlar yoki qo'l va oyoqlar birgalikda. Qaysi zonani davolash kerakligini dermatolog toshmalar joylashuviga qarab belgilaydi.",
        'Да. В клинике Radeski сеансы M series проводятся по зонам: руки, ноги или руки и ноги вместе. Какую зону лечить, дерматолог определяет по расположению высыпаний.',
        'Yes. At Radeski, M series sessions are given by zone: arms, legs, or arms and legs together. The dermatologist decides which area to treat based on where the rash is.',
      ),
    },
    {
      question: L("Fototerapiya og'riqlimi?", 'Больно ли делать фототерапию?', 'Is phototherapy painful?'),
      answer: L(
        "Seansning o'zi odatda og'riqsiz kechadi, faqat yengil iliqlik sezilishi mumkin. Seansdan keyin ba'zan yengil qizarish yoki quruqlik paydo bo'ladi. Agar qizarish kuchli bo'lsa yoki achishish uzoq davom etsa, keyingi seansdan oldin shifokorga aytish kerak.",
        'Сам сеанс обычно безболезненный, может ощущаться лишь лёгкое тепло. После сеанса иногда появляются небольшое покраснение или сухость. Если покраснение выраженное или жжение держится долго, нужно сообщить врачу до следующего сеанса.',
        'The session itself is usually painless; you may only feel slight warmth. Afterwards there may be mild redness or dryness. If the redness is strong or burning lasts a long time, tell the doctor before your next session.',
      ),
    },
    {
      question: L('Necha seans kerak?', 'Сколько сеансов нужно?', 'How many sessions are needed?'),
      answer: L(
        "Bu tashxis, zona va terining javobiga bog'liq. Seanslar odatda haftasiga bir necha marta o'tkaziladi, kurs esa bir necha hafta davom etadi; kaft, tovon va vitiligo dog'larida u ko'pincha uzoqroq bo'ladi. Aniq rejani shifokor tuzadi.",
        'Это зависит от диагноза, зоны и реакции кожи. Сеансы обычно проводятся несколько раз в неделю, а курс длится несколько недель; на ладонях, стопах и при витилиго он нередко дольше. Точный план составляет врач.',
        'It depends on the diagnosis, the area and how your skin responds. Sessions are usually held several times a week and a course lasts several weeks; for the palms, soles and vitiligo it is often longer. The doctor draws up the exact plan.',
      ),
    },
    {
      question: L('Bolalar uchun xavfsizmi?', 'Безопасна ли фототерапия для детей?', 'Is it safe for children?'),
      answer: L(
        "Fototerapiya ayrim hollarda bolalarda ham qo'llaniladi, ammo qaror ehtiyotkorlik bilan, foyda va xavfni solishtirib qabul qilinadi. Bola seans davomida qo'l yoki oyog'ini tinch ushlab tura olishi va himoya ko'zoynagini taqishi kerak. Yakuniy qarorni dermatolog qabul qiladi.",
        'Фототерапия в ряде случаев применяется и у детей, однако решение принимается осторожно, с учётом пользы и риска. Ребёнок должен спокойно удерживать руку или ногу во время сеанса и носить защитные очки. Окончательное решение принимает дерматолог.',
        'Phototherapy is used in children in some cases, but the decision is made carefully, weighing benefit against risk. The child needs to keep the hand or leg still during the session and wear protective goggles. The dermatologist makes the final decision.',
      ),
    },
    {
      question: L("Fototerapiya psoriazni butunlay davolaydimi?", 'Вылечит ли фототерапия псориаз полностью?', 'Will phototherapy cure psoriasis completely?'),
      answer: L(
        "Psoriaz — surunkali kasallik, va fototerapiya uni butunlay yo'qotmaydi. Uning maqsadi — toshmalarni kamaytirish va remissiyaga erishishga yordam berish. Qo'zishlar qaytishi mumkin, shuning uchun shifokor kursdan keyin ham parvarish va kuzatuv bo'yicha tavsiyalar beradi.",
        'Псориаз — хроническое заболевание, и фототерапия не устраняет его полностью. Её цель — уменьшить высыпания и помочь достичь ремиссии. Обострения могут возвращаться, поэтому врач даёт рекомендации по уходу и наблюдению и после окончания курса.',
        'Psoriasis is a chronic condition, and phototherapy does not get rid of it for good. Its aim is to reduce the rash and help achieve remission. Flares can come back, so the doctor also gives advice on skincare and follow-up after the course ends.',
      ),
    },
  ],
};
