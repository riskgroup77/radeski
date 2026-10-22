import type { ClinicEquipmentDetails, LocalizedEquipmentText } from '../clinicEquipmentCatalog';

function L(uz: string, ru: string, en: string): LocalizedEquipmentText {
  return { uz, ru, en };
}

/** Long sections of the LaseMD Ultra device page (loaded with the page, not the app shell). */
export const LASEMD_ULTRA_DETAILS: ClinicEquipmentDetails = {
  about: [
    L(
      "Fraksion tizimlar teriga kichik zonalar bilan ta'sir qiladi: ta'sir zonalari orasida shikastlanmagan to'qima qoladi va u tiklanish jarayonida ishtirok etadi.",
      'Фракционные системы воздействуют на кожу небольшими участками, оставляя между зонами воздействия неповреждённые участки ткани, которые участвуют в восстановлении.',
      'Fractional systems treat the skin in small zones, leaving untouched tissue between them that takes part in healing.',
    ),
    L(
      "Tuliy lazerning asosiy xususiyati — asosan terining yuzaki qatlamlari bilan ishlash imkoniyati. Shu sababli bu texnologiya notekis yuz rangi, pigment dog'lar, quyosh ta'siri izlari va dag'al teri bezovta qiladigan bemorlar uchun dolzarb.",
      'Главная особенность тулиевого лазера — возможность работать преимущественно с поверхностными слоями кожи. Это делает технологию интересной для пациентов, которых беспокоят неровный тон лица, пигментные пятна, следы солнечного воздействия и шероховатость кожи.',
      'The key feature of the thulium laser is that it works mainly in the superficial layers of the skin. That makes it relevant for patients concerned about uneven skin tone, pigment spots, sun damage and rough skin.',
    ),
    L(
      "Ta'sir samaradorligi va chuqurligi apparat, muolaja rejimi, teri holati va bemorning individual xususiyatlariga bog'liq.",
      'Эффективность и глубина воздействия зависят от конкретного аппарата, режима процедуры, состояния кожи и индивидуальных особенностей пациента.',
      'How effective and how deep the treatment is depends on the device, the treatment mode, skin condition and individual patient factors.',
    ),
  ],
  howItWorks: {
    paragraphs: [
      L(
        "Lazer nuri to'qimalardagi suv bilan o'zaro ta'sirlashib, nazorat qilinadigan issiqlik ta'siri zonalarini hosil qiladi. Fraksion rejimda bu teri yangilanish jarayonlarini rag'batlantiradi va uning tashqi ko'rinishini asta-sekin yaxshilaydi.",
        'Лазерное излучение взаимодействует с водой, содержащейся в тканях, и создаёт контролируемые зоны термического воздействия. В фракционном режиме это стимулирует процессы обновления кожи и способствует постепенному улучшению её внешнего вида.',
        'The laser energy interacts with the water in the tissue and creates controlled zones of thermal effect. In fractional mode this stimulates skin renewal and gradually improves its appearance.',
      ),
    ],
    effects: [
      L("Ayrim pigment dog'larining asta-sekin xiralashishi", 'Постепенное уменьшение выраженности некоторых пигментных пятен', 'Gradual fading of some pigment spots'),
      L("Teri rangining tekisroq va bir xilroq bo'lishi", 'Более ровный и однородный тон кожи', 'A more even, uniform skin tone'),
      L('Teri teksturasi va silliqligining yaxshilanishi', 'Улучшение текстуры и гладкости', 'Improved texture and smoothness'),
      L('Fotoqarishning ko\'rinadigan belgilari kamayishi', 'Уменьшение видимых признаков фотостарения', 'Fewer visible signs of photoaging'),
      L('Teri umumiy sifatining asta-sekin yaxshilanishi', 'Постепенное улучшение общего качества кожи', 'Gradual improvement in overall skin quality'),
    ],
  },
  indicationsIntro: L(
    "Muolaja quyidagi estetik va dermatologik muammolarda ko'rib chiqilishi mumkin.",
    'Процедура может рассматриваться при наличии следующих эстетических и дерматологических проблем.',
    'Treatment may be considered for the following aesthetic and dermatological concerns.',
  ),
  indications: [
    {
      title: L("Pigment dog'lar", 'Пигментные пятна', 'Pigment spots'),
      text: L(
        "Tuliy lazer yuzaki pigmentatsiyaning ayrim turlarini, jumladan quyosh dog'lari va yoshga bog'liq ayrim pigment o'zgarishlarini korreksiya qilishda qo'llanilishi mumkin. Muolajadan oldin shifokor dog'larning kelib chiqishini aniqlashi kerak: har bir qora dog' oddiy pigmentatsiya emas, ayrim hosilalar esa oldindan diagnostikani talab qiladi.",
        'Тулиевый лазер может применяться для коррекции некоторых видов поверхностной пигментации, включая солнечные пятна и отдельные возрастные пигментные изменения. Перед процедурой врач должен определить происхождение пятен: не каждое тёмное образование является обычной пигментацией, а некоторые новообразования требуют предварительной диагностики.',
        'The thulium laser can be used to correct some types of superficial pigmentation, including sun spots and certain age-related pigment changes. Before treatment the doctor must determine the origin of the spots: not every dark spot is ordinary pigmentation, and some lesions need to be examined first.',
      ),
    },
    {
      title: L('Notekis teri rangi', 'Неровный тон кожи', 'Uneven skin tone'),
      text: L(
        "Agar yuz rangi notekis bo'lib qolgan, quyosh ta'siridan keyin qoraygan joylar paydo bo'lgan yoki teri xira ko'rinsa, lazer ta'siri rangni bir tekisroq qilishga yordam berishi mumkin. Natija pigmentatsiya o'zgarishining sababi va terining individual reaksiyasiga bog'liq.",
        'Если цвет лица стал неоднородным, появились участки потемнения после солнечного воздействия или кожа выглядит тусклой, лазерное воздействие может помочь сделать тон более равномерным. Результат зависит от причины изменения пигментации и индивидуальной реакции кожи.',
        'If the complexion has become uneven, darker patches have appeared after sun exposure or the skin looks dull, laser treatment can help even out the tone. The result depends on the cause of the pigment change and the individual skin response.',
      ),
    },
    {
      title: L('Fotoqarish', 'Фотостарение', 'Photoaging'),
      text: L(
        "Quyosh nurlari vaqt o'tishi bilan pigment dog'lar, teri dag'alligi va fotoshikastlanishning boshqa belgilarini keltirib chiqaradi. Fraksion tuliy lazer fotoqarish belgilari bor terining ko'rinishini yaxshilash uchun qo'llanilishi mumkin. Natijani saqlab qolish uchun quyoshdan muntazam himoyalanish muhim.",
        'Солнечное излучение со временем приводит к появлению пигментных пятен, шероховатости и других признаков фотоповреждения. Фракционный тулиевый лазер может использоваться для улучшения внешнего вида кожи с признаками фотостарения. Для поддержания результата важна регулярная фотозащита.',
        'Over time, sunlight causes pigment spots, roughness and other signs of photodamage. The fractional thulium laser can be used to improve the appearance of photoaged skin. Regular sun protection is essential to maintain the result.',
      ),
    },
    {
      title: L('Notekis teri teksturasi', 'Неровная текстура кожи', 'Uneven skin texture'),
      text: L(
        "Muolaja teri silliqligini yaxshilashga va ayrim yuzaki notekisliklarni kamaytirishga yordam berishi mumkin.",
        'Процедура может способствовать улучшению гладкости кожи и уменьшению выраженности отдельных поверхностных неровностей.',
        'Treatment can help make the skin smoother and reduce some superficial irregularities.',
      ),
    },
  ],
  suitability: {
    intro: L(
      "Tuliy lazer teri rangi va teksturasini yaxshilash, quyosh dog'larini kamaytirish yoki fotoqarishning ayrim belgilarini korreksiya qilishni istagan kattalar uchun mos variant bo'lishi mumkin.",
      'Тулиевый лазер может быть подходящим вариантом для взрослых пациентов, которые хотят улучшить тон и текстуру кожи, уменьшить выраженность солнечных пятен или скорректировать отдельные проявления фотостарения.',
      'The thulium laser may be a good option for adults who want to improve skin tone and texture, reduce sun spots or correct certain signs of photoaging.',
    ),
    checks: [
      L("Teri turi va pigmentatsiyaga moyilligi", 'Тип кожи и её склонность к образованию пигментации', 'Skin type and tendency to pigmentation'),
      L("Pigment o'zgarishlarining xususiyati va chuqurligi", 'Характер и глубина пигментных изменений', 'The nature and depth of pigment changes'),
      L("Terida yallig'lanish va shikastlanishlar bor-yo'qligi", 'Наличие воспаления и повреждений кожи', 'Any inflammation or skin damage'),
      L("Avval o'tkazilgan kosmetologik muolajalar", 'Предшествующие косметологические процедуры', 'Previous cosmetic procedures'),
      L("Qabul qilinayotgan dorilar va yara bitish xususiyatlari", 'Принимаемые лекарства и особенности заживления', 'Current medications and how the skin heals'),
      L("Qarshi ko'rsatmalar bor-yo'qligi va kutilayotgan natijaning realligi", 'Наличие противопоказаний и реалистичность ожидаемого результата', 'Contraindications and realistic expectations'),
    ],
  },
  contraindications: {
    intro: L(
      "Muolaja o'tkazish imkoniyati individual belgilanadi. Davolashni kechiktirish yoki undan voz kechishning asosiy sabablari:",
      'Возможность проведения процедуры определяется индивидуально. К основным причинам отложить лечение или отказаться от него относятся:',
      'Whether treatment is possible is decided individually. The main reasons to postpone or avoid it are:',
    ),
    items: [
      L("Ishlov beriladigan zonadagi faol teri infeksiyalari, jumladan gerpesning qo'zishi", 'Активные инфекции кожи в зоне обработки, включая обострение герпеса', 'Active skin infections in the treatment area, including a herpes flare-up'),
      L("Ta'sir zonasida kuchli yallig'lanish, ta'sirlanish yoki teri shikastlanishi", 'Выраженное воспаление, раздражение или повреждение кожи в предполагаемой зоне воздействия', 'Marked inflammation, irritation or skin damage in the area to be treated'),
      L("Yaqinda olingan zagar yoki yaqinda kuchli quyosh ta'siri", 'Свежий загар или недавнее интенсивное солнечное воздействие', 'A fresh tan or recent intense sun exposure'),
      L('Hali tekshirilmagan shubhali teri hosilalari', 'Подозрительные новообразования, которые ещё не обследованы', 'Suspicious lesions that have not yet been examined'),
      L("To'qimalar bitishi buzilishi bilan kechadigan holatlar", 'Состояния, сопровождающиеся нарушением заживления тканей', 'Conditions that impair tissue healing'),
      L("Terining yorug'likka sezuvchanligini yoki asoratlar xavfini oshiradigan ayrim kasalliklar va dorilar", 'Некоторые заболевания и лекарства, повышающие чувствительность кожи к свету или риск осложнений', 'Certain diseases and medications that increase light sensitivity or the risk of complications'),
      L("Homiladorlik va emizish davri — bu davrda rejali estetik muolajalar odatda kechiktiriladi", 'Беременность и период грудного вскармливания, когда плановые эстетические процедуры обычно откладывают', 'Pregnancy and breastfeeding, when elective aesthetic procedures are usually postponed'),
      L("Shifokor lazer ta'sirini xavfli deb hisoblagan boshqa individual holatlar", 'Индивидуальные обстоятельства, при которых врач считает лазерное воздействие небезопасным', 'Other individual circumstances in which the doctor considers laser treatment unsafe'),
    ],
    note: L(
      "Keloid chandiqlarga moyillik, faol dermatologik kasalliklar, immun buzilishlar va tizimli retinoidlar qabul qilinganda xavflar alohida baholanadi. Bu holatlar barcha lazer tizimlari uchun bir xil taqiq degani emas.",
      'При склонности к келоидным рубцам, активных дерматологических заболеваниях, иммунных нарушениях и приёме системных ретиноидов требуется отдельная оценка рисков. Эти обстоятельства не всегда означают одинаковый запрет для всех лазерных систем.',
      'A tendency to keloid scarring, active skin diseases, immune disorders and the use of systemic retinoids require a separate risk assessment. These circumstances do not always mean the same restriction for every laser system.',
    ),
  },
  steps: [
    {
      title: L('Konsultatsiya', 'Консультация', 'Consultation'),
      text: L(
        "Shifokor terini ko'zdan kechiradi, shikoyatlar, kasalliklar tarixi va avvalgi muolajalarni aniqlaydi. Zarur bo'lsa, qo'shimcha tekshiruvlar tayinlanadi.",
        'Врач осматривает кожу, уточняет жалобы, историю заболеваний и предыдущих процедур. При необходимости назначаются дополнительные обследования.',
        'The doctor examines the skin and asks about complaints, medical history and previous procedures. Additional tests are ordered if needed.',
      ),
    },
    {
      title: L('Teriga tayyorgarlik', 'Подготовка кожи', 'Skin preparation'),
      text: L(
        "Mutaxassis fototip, ishlov beriladigan zona va maqsadni hisobga olib, ta'sir parametrlarini belgilaydi. Zarur bo'lsa, apparat protokoliga muvofiq mahalliy og'riqsizlantiruvchi vosita qo'llaniladi.",
        'Специалист определяет параметры воздействия с учётом фототипа, зоны обработки и поставленной задачи. При необходимости применяется местный анестезирующий препарат — в соответствии с протоколом конкретного аппарата.',
        'The specialist sets the treatment parameters based on skin phototype, the treatment area and the goal. A topical anesthetic is applied when needed, according to the device protocol.',
      ),
    },
    {
      title: L("Lazer ta'siri", 'Лазерное воздействие', 'Laser treatment'),
      text: L(
        "Shifokor tanlangan zonaga ketma-ket ishlov beradi. Muolaja vaqtida bemor issiqlik, sanchish yoki o'rtacha achishishni sezishi mumkin. Sezgilar kuchi sozlamalar va individual sezuvchanlikka bog'liq.",
        'Врач последовательно обрабатывает выбранную область. Во время процедуры пациент может ощущать тепло, покалывание или умеренное жжение. Интенсивность ощущений зависит от настроек и индивидуальной чувствительности.',
        'The doctor treats the selected area step by step. During the procedure you may feel warmth, tingling or moderate burning. How intense it feels depends on the settings and your sensitivity.',
      ),
    },
    {
      title: L('Muolajadan keyingi parvarish', 'Уход после процедуры', 'Aftercare'),
      text: L(
        "Ishlov berilgandan keyin qizarish, biroz shish, quruqlik hissi va mayda po'st tashlash bo'lishi mumkin. Shifokor teriga qanday qarash va odatiy kosmetik vositalarga qachon qaytish mumkinligini tushuntiradi.",
        'После обработки возможны покраснение, небольшая отёчность, ощущение сухости и мелкое шелушение. Врач объясняет, как ухаживать за кожей и когда можно вернуться к привычным косметическим средствам.',
        'Redness, mild swelling, a feeling of dryness and fine flaking may follow. The doctor explains how to care for your skin and when you can return to your usual skincare products.',
      ),
    },
  ],
  results: {
    intro: L(
      "Natija asta-sekin shakllanadi. Dastlabki kunlarda teri qizargan ko'rinishi mumkin, pigmentli joylar esa ba'zan yaxshilanishdan oldin vaqtincha yaqqolroq ko'rinadi. Tiklanish davomida quyidagilar kuzatilishi mumkin:",
      'Результат формируется постепенно. В первые дни кожа может выглядеть покрасневшей, а пигментные участки иногда временно становятся более заметными перед последующим улучшением. По мере восстановления возможно:',
      'Results develop gradually. In the first days the skin may look red, and pigmented areas sometimes become temporarily more visible before they improve. As the skin recovers, you may see:',
    ),
    items: [
      L("Ayrim pigment dog'larining xiralashishi", 'Уменьшение выраженности отдельных пигментных пятен', 'Some pigment spots becoming less visible'),
      L("Teri rangining tekisroq bo'lishi", 'Более ровный тон кожи', 'A more even skin tone'),
      L('Silliqlik va teksturaning yaxshilanishi', 'Улучшение гладкости и текстуры', 'Smoother skin and better texture'),
      L('Fotoqarishning ayrim belgilari kamroq sezilishi', 'Уменьшение заметности некоторых признаков фотостарения', 'Some signs of photoaging becoming less noticeable'),
      L("Terining yangiroq va bir tekis ko'rinishi", 'Более свежий и однородный внешний вид кожи', 'A fresher, more uniform look'),
    ],
  },
  conclusion: [
    L(
      "Tuliy lazer 1927 nm — zamonaviy lazer dermatologiyasi usullaridan biri bo'lib, teri rangi va teksturasini yaxshilash, pigmentatsiyaning ayrim turlari va fotoqarish belgilarini korreksiya qilish uchun qo'llanilishi mumkin.",
      'Тулиевый лазер 1927 нм — один из методов современной лазерной дерматологии, который может применяться для улучшения тона и текстуры кожи, коррекции определённых видов пигментации и признаков фотостарения.',
      'The 1927 nm thulium laser is one of the methods of modern laser dermatology. It can be used to improve skin tone and texture and to correct certain types of pigmentation and signs of photoaging.',
    ),
    L(
      "Xavfsizlik va natija ko'rsatmalarni to'g'ri tanlash, qarshi ko'rsatmalarni baholash, ta'sir parametrlari va tiklanish bo'yicha tavsiyalarga amal qilishga bog'liq.",
      'Безопасность и результат зависят от правильного выбора показаний, оценки противопоказаний, параметров воздействия и соблюдения рекомендаций по восстановлению.',
      'Safety and results depend on choosing the right indications, assessing contraindications, the treatment settings and following the recovery recommendations.',
    ),
    L(
      "Radeski Skin Clinic klinikasida dermatologik va estetik muolajalarni tanlash teri holatini baholash va mutaxassis konsultatsiyasidan boshlanadi. Shifokor lazer ta'siri sizning vazifangizga mos kelishini va qaysi usul eng asosli ekanini aniqlashga yordam beradi.",
      'В Radeski Skin Clinic подбор дерматологических и эстетических процедур начинается с оценки состояния кожи и консультации специалиста. Врач поможет определить, подходит ли лазерное воздействие для конкретной задачи и какой метод будет наиболее обоснованным.',
      'At Radeski Skin Clinic, choosing a dermatological or aesthetic procedure starts with a skin assessment and a specialist consultation. The doctor will help determine whether laser treatment suits your goal and which method is the most appropriate.',
    ),
  ],
  faq: [
    {
      question: L('Tuliy lazer nima?', 'Что такое тулиевый лазер?', 'What is a thulium laser?'),
      answer: L(
        "Tuliy lazer 1927 nm — asosan terining yuzaki qatlamlari bilan ishlaydigan fraksion lazer. U teri sifatini yaxshilash, pigmentatsiyaning ayrim turlarini korreksiya qilish va fotoqarish belgilarini kamaytirish uchun qo'llaniladi. Radeski Skin Clinic klinikasida LaseMD Ultra (Lutronic) apparati ishlatiladi.",
        'Тулиевый лазер 1927 нм — фракционный лазер, который работает преимущественно с поверхностными слоями кожи. Его применяют для улучшения качества кожи, коррекции отдельных видов пигментации и уменьшения признаков фотостарения. В Radeski Skin Clinic используется аппарат LaseMD Ultra (Lutronic).',
        'The 1927 nm thulium laser is a fractional laser that works mainly in the superficial layers of the skin. It is used to improve skin quality, correct certain types of pigmentation and reduce signs of photoaging. Radeski Skin Clinic uses the LaseMD Ultra (Lutronic).',
      ),
    },
    {
      question: L('Tuliy lazer qanday ishlaydi?', 'Как работает тулиевый лазер?', 'How does a thulium laser work?'),
      answer: L(
        "Lazer nuri to'qimalardagi suv bilan o'zaro ta'sirlashib, nazorat qilinadigan issiqlik ta'siri zonalarini hosil qiladi. Zonalar orasida sog'lom to'qima qoladi — bu teri yangilanishini rag'batlantiradi va uning ko'rinishini asta-sekin yaxshilaydi.",
        'Лазерное излучение взаимодействует с водой в тканях и создаёт контролируемые зоны термического воздействия. Между ними остаётся здоровая ткань — это стимулирует обновление кожи и постепенно улучшает её внешний вид.',
        'The laser energy interacts with water in the tissue and creates controlled zones of thermal effect. Healthy tissue remains between them, which stimulates skin renewal and gradually improves its appearance.',
      ),
    },
    {
      question: L("Tuliy lazerga qanday ko'rsatmalar bor?", 'Каковы показания к тулиевому лазеру?', 'What are the indications for a thulium laser?'),
      answer: L(
        "Yuzaki pigmentatsiyaning ayrim turlari (quyosh va yoshga bog'liq dog'lar), notekis teri rangi, fotoqarish belgilari va notekis teri teksturasi. Muolajadan oldin shifokor dog'larning kelib chiqishini aniqlaydi.",
        'Некоторые виды поверхностной пигментации (солнечные и возрастные пятна), неровный тон кожи, признаки фотостарения и неровная текстура кожи. Перед процедурой врач определяет происхождение пятен.',
        'Some types of superficial pigmentation (sun and age spots), uneven skin tone, signs of photoaging and uneven skin texture. Before treatment the doctor determines the origin of the spots.',
      ),
    },
    {
      question: L("Tuliy lazerga qanday qarshi ko'rsatmalar bor?", 'Каковы противопоказания к тулиевому лазеру?', 'What are the contraindications?'),
      answer: L(
        "Zonadagi faol teri infeksiyalari (jumladan gerpes), kuchli yallig'lanish yoki shikastlanish, yangi zagar, tekshirilmagan shubhali hosilalar, yara bitishi buzilishi, yorug'likka sezuvchanlikni oshiradigan dorilar, homiladorlik va emizish davri. Yakuniy qarorni shifokor konsultatsiyada qabul qiladi.",
        'Активные инфекции кожи в зоне обработки (включая герпес), выраженное воспаление или повреждение кожи, свежий загар, необследованные подозрительные образования, нарушение заживления, лекарства, повышающие светочувствительность, беременность и грудное вскармливание. Окончательное решение принимает врач на консультации.',
        'Active skin infections in the area (including herpes), marked inflammation or skin damage, a fresh tan, unexamined suspicious lesions, impaired healing, medications that increase light sensitivity, pregnancy and breastfeeding. The final decision is made by the doctor at the consultation.',
      ),
    },
    {
      question: L('Necha seans kerak?', 'Сколько процедур тулиевого лазера нужно?', 'How many sessions are needed?'),
      answer: L(
        "Individual. Ba'zi bemorlar birinchi seansdan keyin o'zgarishni sezadi, aniq natija uchun odatda kurs tavsiya etiladi. Seanslar soni va interval shifokor tomonidan belgilanadi.",
        'Индивидуально. У некоторых пациентов изменения заметны после первой процедуры, для выраженного результата обычно нужен курс. Количество сеансов и интервал определяет врач.',
        'It is individual. Some patients notice changes after the first session; a course is usually recommended for a clear result. The doctor sets the number of sessions and the interval.',
      ),
    },
    {
      question: L('Tiklanish qancha davom etadi?', 'Сколько длится восстановление после тулиевого лазера?', 'How long is recovery?'),
      answer: L(
        "Qizarish va po'st tashlash odatda bir necha kun davom etadi. Quruqlik 5–7 kun atrofida saqlanishi mumkin. Shu davrda shifokor tavsiyalariga amal qilish va SPF ishlatish muhim.",
        'Покраснение и шелушение обычно сохраняются несколько дней. Сухость может держаться около 5–7 дней. В этот период важно соблюдать рекомендации врача и использовать SPF.',
        "Redness and flaking usually last a few days. Dryness may persist for around 5–7 days. During this time it is important to follow the doctor's advice and use SPF.",
      ),
    },
    {
      question: L('Natija qachon ko\'rinadi?', 'Когда виден результат тулиевого лазера?', 'When are the results visible?'),
      answer: L(
        "Natija asta-sekin shakllanadi: dastlabki kunlarda qizarish bo'lishi mumkin, pigmentli joylar esa yaxshilanishdan oldin vaqtincha yaqqolroq ko'rinishi mumkin. Natijani saqlash uchun quyoshdan muntazam himoyalanish zarur.",
        'Результат формируется постепенно: в первые дни возможно покраснение, а пигментные участки могут временно стать заметнее перед улучшением. Для сохранения результата необходима регулярная фотозащита.',
        'Results develop gradually: redness is possible in the first days, and pigmented areas may become temporarily more visible before they improve. Regular sun protection is needed to keep the result.',
      ),
    },
  ],
};
