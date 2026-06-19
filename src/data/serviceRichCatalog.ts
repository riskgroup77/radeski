import type { Locale, ServiceCategory, ServiceDetail, ServiceRichContent, ServiceConditionTopic } from '../types';

type CatalogRich = Omit<ServiceRichContent, 'conditions'> & { conditions?: ServiceConditionTopic[] };
type LocalizedRich = Record<Locale, CatalogRich>;

const CLINIC_BENEFITS: Record<Locale, string[]> = {
  uz: [
    'Malakali dermatolog va kosmetolog mutaxassislari nazorati',
    'Zamonaviy sertifikatlangan tibbiy uskunalar',
    'Yevropa standartlariga mos steril sharoitlar',
    'Har bir bemorga individual davolash rejasi',
    'Xalqaro protokollarga mos xavfsizlik standartlari',
  ],
  ru: [
    'Контроль квалифицированных дерматологов и косметологов',
    'Современное сертифицированное медицинское оборудование',
    'Стерильные условия по европейским стандартам',
    'Индивидуальный план лечения для каждого пациента',
    'Стандарты безопасности по международным протоколам',
  ],
  en: [
    'Supervision by qualified dermatologists and cosmetologists',
    'Modern certified medical equipment',
    'Sterile conditions meeting European standards',
    'Individual treatment plan for every patient',
    'Safety standards aligned with international protocols',
  ],
};

const STANDARD_PROCESS: Record<Locale, string[]> = {
  uz: [
    'Birinchi konsultatsiya va teri holatini baholash',
    'Anamnez olish va zarur tekshiruvlar',
    'Shaxsiy davolash yoki muolaja rejasi tuzish',
    'Muolajani bajarish va natijani kuzatish',
    'Kerak bo\'lsa, qayta ko\'rik va profilaktika tavsiyalari',
  ],
  ru: [
    'Первичная консультация и оценка состояния кожи',
    'Сбор анамнеза и необходимые обследования',
    'Составление индивидуального плана лечения или процедуры',
    'Проведение процедуры и контроль результата',
    'При необходимости — повторный осмотр и рекомендации по профилактике',
  ],
  en: [
    'Initial consultation and skin assessment',
    'Medical history and required examinations',
    'Personalized treatment or procedure plan',
    'Procedure performance and result monitoring',
    'Follow-up visit and prevention advice when needed',
  ],
};

export const CATEGORY_RICH_CATALOG: Record<string, LocalizedRich> = {
  'apparatnaya-kosmetologiya': {
    uz: {
      overview:
        'Apparat kosmetologiyasi — bu jarrohliksiz, zamonaviy tibbiy uskunalar yordamida terini yoshartirish, tozalash va estetik muammolarni bartaraf etish yo\'nalishi. Radeski klinikasida Sciton IPL, gen darajasida foto-yangilash, mikrotoklar va lazer biorevitalizatsiya kabi ilg\'or texnologiyalar qo\'llaniladi. Muolajalar og\'riqsiz o\'tadi, tiklanish vaqti qisqa bo\'ladi va har bir bemorga teri turi hamda muammosiga qarab individual protokol tuziladi.',
      indications: [
        'Teri rangidagi notekislik, dog\'lar va giperpigmentatsiya',
        'Yoshga bog\'liq teri eskirishi, ajinlar va elastiklikning pasayishi',
        'Qon tomir tarmoqlari, qizarish va rozaseya belgilari',
        'Yuz konturining pasayishi va mushak tonusining zaiflashi',
        'Teri quruqligi, xiraligi va tabiiy yorqinlikning yo\'qolishi',
        'Akne va post-akne dog\'lari, kengaytirilgan toshma teshiklari',
      ],
      solutions: [
        'Gen darajasida innovatsion foto-yangilash (Sciton IPL Forever Young)',
        'IPL foto-yangilash — pigmentatsiya va qon tomirlarni yo\'qotish',
        'Lazer biorevitalizatsiya — chuqur namlantirish va tiklanish',
        'Mikrotok terapiyasi — limfodrenaj va yuz liftingi',
        'Kombinatsiyalangan apparat protokollari (masalan, IPL + mikrotok)',
        'Profilaktik yoshartirish kurslari va mavsumiy teri tiklash rejalari',
      ],
      benefits: CLINIC_BENEFITS.uz,
      process: STANDARD_PROCESS.uz,
    },
    ru: {
      overview:
        'Аппаратная косметология — это направление безоперационного омоложения, очищения и коррекции эстетических проблем кожи с помощью современного медицинского оборудования. В клинике Radeski применяются передовые технологии Sciton IPL, фотоомоложение на генном уровне, микротоки и лазерная биоревитализация. Процедуры безболезненны, требуют минимального восстановления, а протокол подбирается индивидуально.',
      indications: [
        'Неровный тон кожи, пигментные пятна и гиперпигментация',
        'Возрастное старение, морщины и снижение эластичности',
        'Сосудистые звездочки, покраснения и розацеа',
        'Потеря контуров лица и снижение мышечного тонуса',
        'Сухость, тусклость и потеря естественного сияния',
        'Акне, постакне и расширенные поры',
      ],
      solutions: [
        'Инновационное фотоомоложение на генном уровне (Sciton IPL Forever Young)',
        'IPL фотоомоложение — устранение пигментации и сосудов',
        'Лазерная биоревитализация — глубокое увлажнение и восстановление',
        'Микротоковая терапия — лимфодренаж и лифтинг',
        'Комбинированные аппаратные протоколы',
        'Профилактические курсы омоложения',
      ],
      benefits: CLINIC_BENEFITS.ru,
      process: STANDARD_PROCESS.ru,
    },
    en: {
      overview:
        'Hardware cosmetology is a non-surgical field focused on skin rejuvenation, cleansing, and aesthetic correction using advanced medical devices. At Radeski Clinic we use Sciton IPL, gene-level photo-rejuvenation, microcurrent therapy, and laser biorevitalization. Procedures are painless, require minimal downtime, and every patient receives a personalized protocol.',
      indications: [
        'Uneven skin tone, spots and hyperpigmentation',
        'Age-related aging, wrinkles and reduced elasticity',
        'Vascular lesions, redness and rosacea signs',
        'Facial contour loss and reduced muscle tone',
        'Dryness, dullness and loss of natural glow',
        'Acne, post-acne marks and enlarged pores',
      ],
      solutions: [
        'Gene-level innovative photo-rejuvenation (Sciton IPL Forever Young)',
        'IPL photo-rejuvenation for pigmentation and vessels',
        'Laser biorevitalization for deep hydration',
        'Microcurrent therapy for lymphatic drainage and lifting',
        'Combined device protocols',
        'Preventive rejuvenation courses',
      ],
      benefits: CLINIC_BENEFITS.en,
      process: STANDARD_PROCESS.en,
    },
  },
  dermatologiya: {
    uz: {
      overview:
        'Dermatologiya yo\'nalishi teri kasalliklarini aniq diagnostika qilish, davolash va uzoq muddatli nazorat qilishga qaratilgan. Radeski klinikasida vitiligo, psoriaz, ekzema, allergik toshma va boshqa surunkali kasalliklar zamonaviy protokollar asosida davolanadi. Har bir bemor uchun individual terapiya rejasi tuziladi va natija muntazam kuzatiladi.',
      indications: [
        'Psoriaz, vitiligo, ekzema va surunkali dermatit',
        'Allergik toshma va atopik dermatit',
        'Akne, seborreya va teri zamburug\'i',
        'Bolalarda teri kasalliklari',
        'Autoimmun va qattiq shakldagi teri kasalliklari',
      ],
      solutions: [
        'Keng qamrovli dermatologik konsultatsiya va diagnostika',
        'Fototerapiya (UVB 311 nm)',
        'Immunobiologik va target terapiya',
        'Bolalar dermatologiyasi',
        'Kompleks davolash va profilaktika rejasi',
      ],
      benefits: CLINIC_BENEFITS.uz,
      process: STANDARD_PROCESS.uz,
    },
    ru: {
      overview:
        'Дерматология направлена на точную диагностику, лечение и долгосрочный контроль заболеваний кожи. В клинике Radeski лечат витилиго, псориаз, экзему, аллергические высыпания и другие хронические состояния по современным протоколам.',
      indications: ['Псориаз, витилиго, экзема', 'Аллергический дерматит', 'Акне и себорея', 'Детские дерматозы', 'Тяжелые аутоиммунные заболевания кожи'],
      solutions: ['Дерматологическая диагностика', 'Фототерапия UVB 311 нм', 'Иммунобиологическая терапия', 'Детская дерматология', 'Комплексное лечение'],
      benefits: CLINIC_BENEFITS.ru,
      process: STANDARD_PROCESS.ru,
    },
    en: {
      overview:
        'Dermatology focuses on accurate diagnosis, treatment, and long-term monitoring of skin diseases. At Radeski Clinic we treat vitiligo, psoriasis, eczema, allergic rashes, and chronic conditions using modern clinical protocols.',
      indications: ['Psoriasis, vitiligo, eczema', 'Allergic dermatitis', 'Acne and seborrhea', 'Pediatric skin conditions', 'Severe autoimmune skin diseases'],
      solutions: ['Comprehensive dermatologic diagnostics', 'UVB 311 nm phototherapy', 'Immunobiological therapy', 'Pediatric dermatology', 'Combined treatment plans'],
      benefits: CLINIC_BENEFITS.en,
      process: STANDARD_PROCESS.en,
    },
  },
};

export const SUB_SERVICE_RICH_CATALOG: Record<string, LocalizedRich> = {
  'gene-photo-rejuvenation': {
    uz: {
      overview:
        'Gen darajasida innovatsion foto-yangilash — Sciton IPL Forever Young texnologiyasiga asoslangan ilg\'or apparat muolajasi. U teri hujayralaridagi qarish bilan bog\'liq genlarning faolligini o\'zgartiradi, kollegen va elastin ishlab chiqarishni rag\'batlantiradi. Muolaja og\'riqsiz, jarrohliksiz o\'tadi va bir necha seans ichida giperpigmentatsiya, dog\'lar hamda teri rangidagi notekisliklarni sezilarli darajada yengillashtiradi.',
      indications: [
        'Yuz va tana terisidagi giperpigmentatsiya (qora dog\'lar, melasma)',
        'Quyosh dog\'lari va yoshga bog\'liq pigmentatsiya',
        'Teri rangining notekisligi, xiraligi va matligi',
        'Mimik va yosh ajinlari (yengil va o\'rtacha darajada)',
        'Qon tomir tarmoqlari, qizarish va rozaseya belgilari',
        'Teri elastikligi va turgorining pasayishi',
      ],
      solutions: [
        'Sciton IPL Forever Young protokoli — gen darajasida hujayra yangilanishi',
        'Tor spektrli yuqori intensivlikli yorug\'lik impulslari',
        'Pigmentatsiyani bosqichma-bosqich yo\'q qilish (odatda 3–5 seans)',
        'Qon tomir va qizarishni kamaytirish uchun maxsus filtrlar',
        'Kollagen sintezini faollashtirish uchun kombinatsiyalangan rejalar',
        'Individual teri turiga moslashtirilgan energiya parametrlari',
      ],
      benefits: [
        'Og\'riqsiz va tezkor apparat muolajasi — reabilitatsiya deyarli talab qilmaydi',
        'Giperpigmentatsiyani bir necha seansda sezilarli darajada yo\'qotish',
        'AQShda ishlab chiqarilgan original Sciton IPL uskunalari',
        'Dermatolog va kosmetolog mutaxassislari doimiy nazorati ostida',
        'Yuz, bo\'yin, dekoldé va qo\'llar uchun xavfsiz qo\'llash',
        'Uzoq muddatli yoshartirish va profilaktik effekt',
      ],
      process: [
        'Dermatolog konsultatsiyasi: teri turi, shikoyatlar va kutilyotgan natija aniqlanadi',
        'Teri holati baholanadi, foto hujjatlashtirish va muolajaga tayyorgarlik',
        'Teri tozalanganidan keyin maxsus ko\'zoynak bilan IPL seansi o\'tkaziladi (15–45 daqiqa)',
        'Muolajadan so\'ng tinchlantiruvchi va UV-himoya kremlari qo\'llaniladi',
        '2–4 hafta oralig\'ida takroriy seanslar va natijani kuzatish, parvarish tavsiyalari',
      ],
    },
    ru: {
      overview:
        'Инновационное фотоомоложение на генном уровне — передовая аппаратная процедура на базе Sciton IPL Forever Young. Она изменяет активность генов, связанных со старением клеток кожи, стимулируя выработку коллагена и эластина. Процедура безболезненна, неинвазивна и заметно уменьшает гиперпигментацию и неровный тон уже за несколько сеансов.',
      indications: [
        'Гиперпигментация на лице и теле (пятна, мелазма)',
        'Солнечные пятна и возрастная пигментация',
        'Неровный тон, тусклость и матовость кожи',
        'Мимические и возрастные морщины (легкая и средняя степень)',
        'Сосудистые звездочки, покраснения и розацеа',
        'Снижение эластичности и тургора кожи',
      ],
      solutions: [
        'Протокол Sciton IPL Forever Young — обновление на генном уровне',
        'Импульсы высокоинтенсивного света узкого спектра',
        'Поэтапное устранение пигментации (обычно 3–5 сеансов)',
        'Специальные фильтры для сосудов и покраснений',
        'Комбинированные схемы для стимуляции коллагена',
        'Индивидуальные параметры энергии под тип кожи',
      ],
      benefits: [
        'Безболезненная быстрая процедура с минимальным восстановлением',
        'Заметное уменьшение гиперпигментации за несколько сеансов',
        'Оригинальное оборудование Sciton IPL из США',
        'Постоянный контроль дерматологов и косметологов',
        'Безопасно для лица, шеи, декольте и рук',
        'Долговременный омолаживающий и профилактический эффект',
      ],
      process: [
        'Консультация дерматолога: тип кожи, жалобы и ожидаемый результат',
        'Оценка состояния кожи, фотодокументирование и подготовка',
        'Сеанс IPL в защитных очках после очищения кожи (15–45 минут)',
        'Нанесение успокаивающих и SPF-средств после процедуры',
        'Повторные сеансы через 2–4 недели и контроль результата',
      ],
    },
    en: {
      overview:
        'Gene-level innovative photo-rejuvenation is an advanced device-based procedure using Sciton IPL Forever Young technology. It modulates aging-related gene activity and stimulates collagen and elastin production. The treatment is painless, non-invasive, and significantly reduces hyperpigmentation and uneven tone within a few sessions.',
      indications: [
        'Facial and body hyperpigmentation (spots, melasma)',
        'Sun spots and age-related pigmentation',
        'Uneven tone, dullness and matte skin',
        'Expression and age wrinkles (mild to moderate)',
        'Vascular lesions, redness and rosacea',
        'Reduced skin elasticity and turgor',
      ],
      solutions: [
        'Sciton IPL Forever Young protocol — gene-level renewal',
        'Narrow-spectrum high-intensity light pulses',
        'Stepwise pigmentation removal (typically 3–5 sessions)',
        'Special filters for vessels and redness',
        'Combined protocols to stimulate collagen',
        'Energy parameters tailored to skin type',
      ],
      benefits: [
        'Painless fast procedure with minimal downtime',
        'Significant hyperpigmentation reduction in few sessions',
        'Original US-made Sciton IPL equipment',
        'Continuous dermatologist and cosmetologist supervision',
        'Safe for face, neck, décolleté and hands',
        'Long-term rejuvenation and preventive effect',
      ],
      process: [
        'Dermatologist consultation: skin type, concerns and expected outcome',
        'Skin assessment, photo documentation and preparation',
        'IPL session with protective eyewear after cleansing (15–45 min)',
        'Soothing and SPF products applied after treatment',
        'Repeat sessions every 2–4 weeks with result monitoring',
      ],
    },
  },
  'bbl-foto': {
    uz: {
      overview:
        'IPL foto-yangilash — Sciton kompaniyasining original Amerika texnologiyasi bo\'yicha terini yoshartirish va tiklash usuli. Keng spektrli yorug\'lik impulslari pigmentatsiya, qon tomir tarmoqlari va yoshga bog\'liq o\'zgarishlarni bir vaqtning o\'zida bartaraf etadi. Muolaja og\'riqsiz, qisqa vaqt ichida natija beradi.',
      indications: ['Pigment dog\'lar va melasma', 'Qon tomir tarmoqlari va qizarish', 'Teri rangining notekisligi', 'Yoshga bog\'liq teri eskirishi', 'Quyosh ta\'siridan paydo bo\'lgan dog\'lar'],
      solutions: ['Sciton IPL apparati bilan fotoomolajeniyani', 'Pigmentatsiyani bosqichma-bosqich yo\'qotish', 'Qon tomirlarni ko\'tarilgan temperatura bilan yopish', 'Teri teksturasini yaxshilash', 'Profilaktik yoshartirish kurslari'],
      benefits: ['Original Sciton IPL uskunalari', 'Chandiqsiz va tez tiklanish', 'Yuz va tana uchun mos', 'Dermatolog nazorati', 'Aniq va bashorat qilinadigan natija'],
      process: STANDARD_PROCESS.uz,
    },
    ru: {
      overview: 'IPL фотоомоложение — метод омоложения на оригинальной американской технологии Sciton. Импульсы широкополосного света устраняют пигментацию, сосуды и возрастные изменения. Процедура безболезненна и дает быстрый результат.',
      indications: ['Пигментные пятна и мелазма', 'Сосудистые звездочки', 'Неровный тон кожи', 'Возрастные изменения', 'Солнечные пятна'],
      solutions: ['Фотоомоложение на Sciton IPL', 'Поэтапное устранение пигментации', 'Коагуляция сосудов', 'Улучшение текстуры кожи', 'Профилактические курсы'],
      benefits: ['Оригинальное оборудование Sciton', 'Без рубцов и быстрое восстановление', 'Для лица и тела', 'Контроль дерматолога', 'Прогнозируемый результат'],
      process: STANDARD_PROCESS.ru,
    },
    en: {
      overview: 'IPL photo-rejuvenation uses original Sciton US technology. Broad-band light pulses address pigmentation, vascular lesions and age-related changes. The procedure is painless and delivers fast visible results.',
      indications: ['Pigment spots and melasma', 'Vascular lesions and redness', 'Uneven skin tone', 'Age-related skin changes', 'Sun-induced spots'],
      solutions: ['Sciton IPL photo-rejuvenation', 'Stepwise pigmentation removal', 'Vessel coagulation', 'Skin texture improvement', 'Preventive rejuvenation courses'],
      benefits: ['Original Sciton equipment', 'No scarring and quick recovery', 'Suitable for face and body', 'Dermatologist supervision', 'Predictable results'],
      process: STANDARD_PROCESS.en,
    },
  },
  'lazer-biorev': {
    uz: {
      overview:
        'Lazer biorevitalizatsiya — lazer energiyasi va gialuron kislotasini birlashtirgan zamonaviy usul bo\'lib, terini chuqur namlantiradi va tiklaydi. U teri ichki qatlamlariga mikroelementlar yetkazib, elastiklik va yorqinlikni tiklaydi. Muolaja minimal invaziv, og\'riqsiz va qisqa reabilitatsiya bilan o\'tadi.',
      indications: ['Quruq va suvsiz teri', 'Teri elastikligining pasayishi', 'Rangning xiralashishi', 'Yoshga bog\'liq teri eskirishi', 'Akne va post-akne oq izlari'],
      solutions: ['Lazer-assotsiatsiyalangan biorevitalizatsiya', 'Gialuron kislotasi bilan chuqur namlantirish', 'Kollagen sintezini rag\'batlantirish', 'Teri tiklanishini tezlashtirish', 'Kombinatsiyalangan parvarish rejasi'],
      benefits: ['Chuqur va uzoq muddatli namlantirish', 'Og\'riqsiz va xavfsiz usul', 'Tabiiy yorqinlik va elastiklik', 'Qisqa tiklanish vaqti', 'Mutaxassis nazorati'],
      process: STANDARD_PROCESS.uz,
    },
    ru: {
      overview: 'Лазерная биоревитализация сочетает лазерную энергию и гиалуроновую кислоту для глубокого увлажнения и восстановления кожи. Процедура минимально инвазивна, безболезненна и требует короткого восстановления.',
      indications: ['Сухая обезвоженная кожа', 'Снижение эластичности', 'Тусклый цвет лица', 'Возрастное старение', 'Постакне и рубцы'],
      solutions: ['Лазер-ассоциированная биоревитализация', 'Глубокое увлажнение гиалуроновой кислотой', 'Стимуляция коллагена', 'Ускорение восстановления кожи', 'Комбинированный уход'],
      benefits: ['Глубокое длительное увлажнение', 'Безболезненный безопасный метод', 'Естественное сияние', 'Короткая реабилитация', 'Контроль специалиста'],
      process: STANDARD_PROCESS.ru,
    },
    en: {
      overview: 'Laser biorevitalization combines laser energy and hyaluronic acid for deep skin hydration and recovery. The procedure is minimally invasive, painless, and requires short downtime.',
      indications: ['Dry dehydrated skin', 'Reduced elasticity', 'Dull complexion', 'Age-related aging', 'Post-acne marks'],
      solutions: ['Laser-associated biorevitalization', 'Deep hyaluronic hydration', 'Collagen stimulation', 'Accelerated skin recovery', 'Combined care plan'],
      benefits: ['Deep long-lasting hydration', 'Painless safe method', 'Natural glow and elasticity', 'Short recovery', 'Specialist supervision'],
      process: STANDARD_PROCESS.en,
    },
  },
  mikrotoki: {
    uz: {
      overview:
        'Mikrotok terapiyasi — past chastotali o\'zgaruvchan tok impulslari yordamida yuz mushaklari tonusini tiklash, limfodrenajni yaxshilash va terini mustahkamlash usuli. Muolaja og\'riqsiz, qulay va darhol yuz konturini yaxshilashga yordam beradi.',
      indications: ['Yuz mushaklari tonusining pasayishi', 'Shish va limfa to\'planishi', 'Teri elastikligining kamayishi', 'Yuz konturining silliqlanishi', 'Teri quruqligi va xiraligi'],
      solutions: ['Past chastotali mikrotok terapiyasi', 'Limfodrenaj va lifting effekti', 'Teri tiklanishini rag\'batlantirish', 'Kombinatsiyalangan parvarish', 'Kursli muolaja rejasi'],
      benefits: ['Jarrohliksiz yondashuv', 'Og\'riqsiz va qulay', 'Darhol yuz konturini yaxshilash', 'Minimal nojo\'ya ta\'sir', 'Har qanday yosh uchun mos'],
      process: STANDARD_PROCESS.uz,
    },
    ru: {
      overview: 'Микротоковая терапия восстанавливает тонус мышц лица, улучшает лимфодренаж и укрепляет кожу с помощью импульсов низкой частоты. Процедура безболезненна и дает мгновенное улучшение контура.',
      indications: ['Снижение тонуса мышц', 'Отеки и застой лимфы', 'Потеря эластичности', 'Опущение контуров', 'Сухость и тусклость'],
      solutions: ['Микротоки низкой частоты', 'Лимфодренаж и лифтинг', 'Стимуляция восстановления', 'Комбинированный уход', 'Курсовое лечение'],
      benefits: ['Безоперационный подход', 'Безболезненно', 'Мгновенное улучшение контура', 'Минимум побочных эффектов', 'Подходит для любого возраста'],
      process: STANDARD_PROCESS.ru,
    },
    en: {
      overview: 'Microcurrent therapy restores facial muscle tone, improves lymphatic drainage and strengthens skin using low-frequency impulses. The procedure is painless and provides immediate contour improvement.',
      indications: ['Reduced muscle tone', 'Swelling and lymph stagnation', 'Loss of elasticity', 'Facial contour sagging', 'Dryness and dullness'],
      solutions: ['Low-frequency microcurrents', 'Lymphatic drainage and lifting', 'Recovery stimulation', 'Combined skincare', 'Course-based treatment'],
      benefits: ['Non-surgical approach', 'Painless and comfortable', 'Immediate contour improvement', 'Minimal side effects', 'Suitable for all ages'],
      process: STANDARD_PROCESS.en,
    },
  },
};

const KEYWORD_RULES: { key: string; patterns: string[] }[] = [
  { key: 'gene-photo-rejuvenation', patterns: ['gen darajasida', 'innovatsion foto', 'forever young', 'генном уровне', 'gene-level'] },
  { key: 'bbl-foto', patterns: ['IPL foto', 'bbl-foto', 'bbl ', 'IPL '] },
  { key: 'lazer-biorev', patterns: ['lazer biorevital', 'lazer biorev', 'лазерная биоревит', 'laser biorev'] },
  { key: 'mikrotoki', patterns: ['mikrotok', 'микроток', 'microcurrent'] },
  { key: 'det-derm', patterns: ['bolalar dermat', 'детская дермат', 'pediatric dermat'] },
  { key: 'fototerapiya', patterns: ['fototerapi', 'фототерап', 'phototherap'] },
  { key: 'immunobiologicheskaya', patterns: ['immunobiolog', 'иммунобиолог', 'biologic'] },
  { key: 'konturnaya', patterns: ['kontur plast', 'контурн', 'filler', 'fillers'] },
  { key: 'botulino', patterns: ['botulin', 'ботулин', 'botox', 'dysport'] },
  { key: 'biorev', patterns: ['biorevital', 'биоревит'] },
  { key: 'alex-lazer', patterns: ['aleksandrit', 'александрит', 'alexandrite'] },
  { key: 'trixoskop', patterns: ['trixoskop', 'трихоскоп', 'trichoscop'] },
  { key: 'photofinder-scan', patterns: ['photofinder', 'photo finder'] },
  { key: 'biopsiya', patterns: ['biopsi', 'биопси', 'histolog'] },
  { key: 'moh-surgery', patterns: ['mohs', 'moh ', 'моха', 'микрограф'] },
  { key: 'consult-group', patterns: ['guruhli', 'группов', 'group consult'] },
  { key: 'dermatosc-lessons', patterns: ['dermatoscop', 'дерматоскоп', 'o\'quv dars', 'практическ'] },
  { key: 'podolog-dermatolog', patterns: ['podolog', 'подолог', 'tirnoq', 'ногт'] },
  { key: 'gistolog', patterns: ['gistolog', 'гистолог', 'histopath'] },
  { key: 'fy-protocols', patterns: ['forever young', 'fy-protocol', 'gen-revo'] },
];

export function findSubServiceCatalogKey(sub: ServiceDetail, _category: ServiceCategory): string | null {
  if (SUB_SERVICE_RICH_CATALOG[sub.id]) return sub.id;

  const haystack = `${sub.id} ${sub.name.uz} ${sub.name.ru} ${sub.name.en} ${sub.description.uz} ${sub.description.ru}`.toLowerCase();

  for (const rule of KEYWORD_RULES) {
    if (rule.patterns.some((pattern) => haystack.includes(pattern))) {
      return rule.key;
    }
  }

  return null;
}
