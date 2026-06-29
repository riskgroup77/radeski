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
        'Professional ultratovush yuz tozalash',
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
        'Профессиональная ультразвуковая чистка лица',
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
        'Professional ultrasonic facial cleansing',
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
  'in-ekcionnaya-kosmetologiya': {
    uz: {
      overview:
        'Inyeksion kosmetologiya — botulinoterapiya, kontur plastikasi va biorevitalizatsiya orqali yuz konturini tiklash va terini yoshartirish yo\'nalishi. Radeski klinikasida sertifikatlangan preparatlar, aniq dozalar va dermatolog nazoratida xavfsiz inyeksiyalar qo\'llaniladi. Natija tabiiy ko\'rinishni saqlagan holda sezilarli yaxshilanish beradi.',
      indications: [
        'Mimik ajinlar (peshona, ko\'z atrofi, lab ustidagi chiziqlar)',
        'Yuz hajmining kamayishi va kontur o\'zgarishi',
        'Teri quruqligi, suvsizlanish va elastiklikning pasayishi',
        'Lab hajmi va shaklini tuzatish kerakligi',
        'Yoshga bog\'liq teri silliqligi va turgor pasayishi',
      ],
      solutions: [
        'Botulinoterapiya (Botox, Dysport) — mimik ajinlarni yumshatish',
        'Gialuron kislotali fillerlar bilan kontur plastikasi',
        'Biorevitalizatsiya — chuqur namlantirish va tiklanish',
        'Individual inyeksiya protokollari va dozalar',
        'Kombinatsiyalangan anti-age rejalar',
      ],
      benefits: CLINIC_BENEFITS.uz,
      process: STANDARD_PROCESS.uz,
    },
    ru: {
      overview:
        'Инъекционная косметология — направление восстановления контуров лица и омоложения кожи с помощью ботулинотерапии, контурной пластики и биоревитализации. В клинике Radeski применяются сертифицированные препараты под контролем дерматолога.',
      indications: ['Мимические морщины', 'Потеря объема и контуров', 'Сухость и снижение эластичности', 'Коррекция губ', 'Возрастное снижение тургора'],
      solutions: ['Ботулинотерапия', 'Контурная пластика филлерами', 'Биоревитализация', 'Индивидуальные протоколы', 'Комбинированные anti-age схемы'],
      benefits: CLINIC_BENEFITS.ru,
      process: STANDARD_PROCESS.ru,
    },
    en: {
      overview:
        'Injection cosmetology restores facial contours and rejuvenates skin through botulinum therapy, dermal fillers, and biorevitalization. At Radeski Clinic we use certified products under dermatologist supervision for natural-looking results.',
      indications: ['Expression wrinkles', 'Volume loss and contour changes', 'Dryness and reduced elasticity', 'Lip shape correction', 'Age-related loss of firmness'],
      solutions: ['Botulinum therapy', 'Hyaluronic acid fillers', 'Biorevitalization', 'Individual injection protocols', 'Combined anti-aging plans'],
      benefits: CLINIC_BENEFITS.en,
      process: STANDARD_PROCESS.en,
    },
  },
  'lazernaya-epilyaciya': {
    uz: {
      overview:
        'Lazer epilyatsiyasi — istalmagan tana sochlarini uzoq muddatli kamaytirish va yo\'q qilish uchun zamonaviy lazer texnologiyalari. Aleksandrit lazer teri va soch rangiga mos parametrlar bilan ishlaydi, sovitish tizimi bilan xavfsiz va og\'riqsiz muolaja ta\'minlaydi.',
      indications: [
        'Tana va yuzdagi ortiqcha sochlar (gipertrixoz)',
        'O\'sib ketgan sochlar va folikul yallig\'lanishi',
        'Qalin va qora sochlar uchun samarali epilyatsiya',
        'Titrash va mum bilan vaqtinchalik yechimlardan charchaganlar',
        'Teri silliq va toza ko\'rinishini uzoq muddat saqlash istagi',
      ],
      solutions: [
        'Aleksandrit lazer epilyatsiyasi',
        'Sovitish tizimi bilan xavfsiz seanslar',
        'Individual energiya va impuls parametrlari',
        'Kursli davolash rejasi (6–10 seans)',
        'Profilaktik qo\'llab-quvvatlash seanslari',
      ],
      benefits: CLINIC_BENEFITS.uz,
      process: STANDARD_PROCESS.uz,
    },
    ru: {
      overview:
        'Лазерная эпиляция — современное удаление нежелательных волос с длительным эффектом. Александритовый лазер с системой охлаждения обеспечивает безопасные и безболезненные сеансы.',
      indications: ['Гипертрихоз', 'Вросшие волосы', 'Густые темные волосы', 'Неэффективность бритья и воска', 'Желание длительной гладкости кожи'],
      solutions: ['Александритовая эпиляция', 'Сеансы с охлаждением', 'Индивидуальные параметры', 'Курсовое лечение', 'Поддерживающие сеансы'],
      benefits: CLINIC_BENEFITS.ru,
      process: STANDARD_PROCESS.ru,
    },
    en: {
      overview:
        'Laser hair removal uses advanced laser technology for long-term reduction of unwanted hair. Alexandrite laser with integrated cooling delivers safe, comfortable sessions tailored to skin and hair type.',
      indications: ['Hypertrichosis', 'Ingrown hairs', 'Thick dark hair', 'Ineffective shaving or waxing', 'Desire for lasting smooth skin'],
      solutions: ['Alexandrite laser epilation', 'Cooled safe sessions', 'Individual energy settings', 'Course-based treatment', 'Maintenance sessions'],
      benefits: CLINIC_BENEFITS.en,
      process: STANDARD_PROCESS.en,
    },
  },
  'trihologiya-centr-lechenie-volos': {
    uz: {
      overview:
        'Trixologiya — soch va bosh terisi kasalliklarini diagnostika qilish, davolash va tiklash yo\'nalishi. Radeski klinikasida trixoskopiya, mezoterapiya va kompleks terapiya bilan soch to\'kilishi, seboreya va alopeciya holatlari boshqariladi.',
      indications: [
        'Soch to\'kilishi va alopeciya',
        'Bosh terisida seboreya, qichish va qalqonsimon qoplama',
        'Sochning suyultiishi va zaiflashishi',
        'Gormonal yoki stress sababli soch yo\'qolishi',
        'Bosh terisi yallig\'lanishi va noqulaylik',
      ],
      solutions: [
        'Kompyuter trixoskopiyasi — aniq diagnostika',
        'Mezoterapiya va vitamin komplekslari',
        'Dori-darmon va mahalliy terapiya',
        'Parvarish va turmush tarzi tavsiyalari',
        'Natijani kuzatish va qayta baholash',
      ],
      benefits: CLINIC_BENEFITS.uz,
      process: STANDARD_PROCESS.uz,
    },
    ru: {
      overview:
        'Трихология — диагностика и лечение заболеваний волос и кожи головы. В клинике Radeski применяются трихоскопия, мезотерапия и комплексная терапия при выпадении волос и себорее.',
      indications: ['Выпадение волос и алопеция', 'Себорея и зуд кожи головы', 'Истончение волос', 'Гормональное или стрессовое выпадение', 'Воспаление кожи головы'],
      solutions: ['Компьютерная трихоскопия', 'Мезотерапия', 'Медикаментозная терапия', 'Рекомендации по уходу', 'Контроль результата'],
      benefits: CLINIC_BENEFITS.ru,
      process: STANDARD_PROCESS.ru,
    },
    en: {
      overview:
        'Trichology focuses on diagnosing and treating hair and scalp conditions. At Radeski Clinic we use trichoscopy, mesotherapy, and combined therapy for hair loss, seborrhea, and alopecia.',
      indications: ['Hair loss and alopecia', 'Scalp seborrhea and itching', 'Hair thinning', 'Hormonal or stress-related loss', 'Scalp inflammation'],
      solutions: ['Computerized trichoscopy', 'Mesotherapy', 'Medication therapy', 'Care and lifestyle guidance', 'Result monitoring'],
      benefits: CLINIC_BENEFITS.en,
      process: STANDARD_PROCESS.en,
    },
  },
  dermatoonkologiya: {
    uz: {
      overview:
        'Dermato-onkologiya — teridagi xollar, papillomalar va shubhali o\'smalarni erta aniqlash, diagnostika qilish va monitoring qilish yo\'nalishi. PhotoFinder AI skanerlash va biopsiya bilan melanoma xavfini vaqtida baholash mumkin.',
      indications: [
        'Yangi paydo bo\'lgan yoki o\'zgarayotgan teri xollari',
        'Ko\'p sonli papilloma va bormalar',
        'Quyosh kuyishi tarixi va melanoma xavfi',
        'Xol rangi, shakli yoki hajmining o\'zgarishi',
        'Oilaviy melanoma anamnezi',
      ],
      solutions: [
        'PhotoFinder AI bilan butun tana skanerlash',
        'Dermatoskopik ko\'rik va raqamli xaritalash',
        'Teri biopsiyasi va gistologik tahlil',
        'Xavfli o\'smalarni monitoring qilish rejasi',
        'Kerak bo\'lsa, keyingi davolash yo\'nalishini belgilash',
      ],
      benefits: CLINIC_BENEFITS.uz,
      process: STANDARD_PROCESS.uz,
    },
    ru: {
      overview:
        'Дерматоонкология — ранняя диагностика родинок, папиллом и подозрительных новообразований. PhotoFinder с ИИ и биопсия позволяют вовремя оценить риск меланомы.',
      indications: ['Новые или изменяющиеся родинки', 'Множественные папилломы', 'Солнечные ожоги в анамнезе', 'Изменение цвета или формы родинки', 'Семейный анамнез меланомы'],
      solutions: ['Скрининг PhotoFinder', 'Дерматоскопия и картирование', 'Биопсия и гистология', 'План наблюдения', 'Направление на лечение при необходимости'],
      benefits: CLINIC_BENEFITS.ru,
      process: STANDARD_PROCESS.ru,
    },
    en: {
      overview:
        'Dermato-oncology focuses on early detection, diagnosis, and monitoring of moles, papillomas, and suspicious skin lesions. PhotoFinder AI screening and biopsy help assess melanoma risk in time.',
      indications: ['New or changing moles', 'Multiple papillomas', 'History of sunburns', 'Changes in mole color or shape', 'Family history of melanoma'],
      solutions: ['PhotoFinder AI full-body screening', 'Dermoscopy and digital mapping', 'Skin biopsy and histology', 'Surveillance plan', 'Treatment referral when needed'],
      benefits: CLINIC_BENEFITS.en,
      process: STANDARD_PROCESS.en,
    },
  },
  'hirurgicheskaya-dermatologiya': {
    uz: {
      overview:
        'Jarrohlik dermatologiyasi — teridagi o\'smalar, limfoma va boshqa shakllanishlarni minimal chandiq bilan xirurgik usulda olib tashlash yo\'nalishi. Radeski klinikasida kosmetik tikish va Mohs mikrografik jarrohlik kabi yuqori aniqlikdagi usullar qo\'llaniladi.',
      indications: [
        'Teridagi shubhali yoki o\'sib borayotgan o\'smalar',
        'Borma, papilloma va fibroma kabi yumshoq to\'qimali o\'smalar',
        'Teri saratonlari (basalioma, spinocellular karsinoma)',
        'Yuz va bo\'yindagi estetik jihatdan muhim joylardagi o\'smalar',
        'Biopsiya natijasida jarrohlik aralashuvi ko\'rsatilgan holatlar',
      ],
      solutions: [
        'Minimal invaziv xirurgik olib tashlash',
        'Mohs mikrografik jarrohlik (yuz qismi saratonlari)',
        'Kosmetik tikish va chandiqni minimallashtirish',
        'Gistologik tekshiruv bilan bir vaqtda nazorat',
        'Jarrohlikdan keyingi parvarish va kuzatuv',
      ],
      benefits: CLINIC_BENEFITS.uz,
      process: STANDARD_PROCESS.uz,
    },
    ru: {
      overview:
        'Хирургическая дерматология — удаление новообразований кожи с минимальными рубцами. В клинике Radeski применяются косметические швы и микрографическая хирургия Mohs.',
      indications: ['Подозрительные новообразования', 'Бородавки, папилломы, фибромы', 'Рак кожи', 'Образования на лице и шее', 'Показания после биопсии'],
      solutions: ['Малоинвазивное удаление', 'Хирургия Mohs', 'Косметические швы', 'Гистологический контроль', 'Послеоперационный уход'],
      benefits: CLINIC_BENEFITS.ru,
      process: STANDARD_PROCESS.ru,
    },
    en: {
      overview:
        'Surgical dermatology removes skin lesions and tumors with minimal scarring. At Radeski Clinic we perform cosmetic suturing and Mohs micrographic surgery for high-precision results.',
      indications: ['Suspicious or growing lesions', 'Warts, papillomas, fibromas', 'Skin cancers', 'Lesions on face and neck', 'Surgical indication after biopsy'],
      solutions: ['Minimally invasive excision', 'Mohs micrographic surgery', 'Cosmetic suturing', 'Histologic margin control', 'Postoperative care and follow-up'],
      benefits: CLINIC_BENEFITS.en,
      process: STANDARD_PROCESS.en,
    },
  },
  'shkola-psoriaza': {
    uz: {
      overview:
        'Psoriaz maktabi — surunkali psoriaz bilan yashovchi bemorlarga kasallikni nazorat qilish, remissiyani uzaytirish va to\'g\'ri parvarishni o\'rgatish dasturi. Guruhli maslahatlar va shifokor yo\'riqnomasi bilan bemor o\'zini mustaqil boshqarishni o\'rganadi.',
      indications: [
        'Yangi tashxis qo\'yilgan psoriaz bemorlari',
        'Tez-tez kuchayib ketadigan surunkali psoriaz',
        'Uy parvarishi va dori qo\'llashda noaniqlik',
        'Parvarish va turmush tarzi bo\'yicha tizimli yo\'riqnoma kerakligi',
        'Remissiya muddatini uzaytirish istagi',
      ],
      solutions: [
        'Guruhli shifokor maslahatlari',
        'Teri parvarishi va namlantirish rejasi',
        'Kuchayish triggerlarini aniqlash',
        'Dori-darmonlarni to\'g\'ri qo\'llash bo\'yicha o\'qitish',
        'Psixologik qo\'llab-quvvatlash va motivatsiya',
      ],
      benefits: CLINIC_BENEFITS.uz,
      process: STANDARD_PROCESS.uz,
    },
    ru: {
      overview:
        'Школа псориаза — программа обучения пациентов контролю хронического псориаза, продлению ремиссии и правильному уходу за кожей.',
      indications: ['Новый диагноз псориаза', 'Частые обострения', 'Неуверенность в уходе', 'Нужен системный план', 'Желание длительной ремиссии'],
      solutions: ['Групповые консультации', 'План ухода за кожей', 'Выявление триггеров', 'Обучение применению препаратов', 'Психологическая поддержка'],
      benefits: CLINIC_BENEFITS.ru,
      process: STANDARD_PROCESS.ru,
    },
    en: {
      overview:
        'Psoriasis Patient School educates patients on managing chronic psoriasis, extending remission, and proper skin care through group counseling and physician guidance.',
      indications: ['Newly diagnosed psoriasis', 'Frequent flares', 'Uncertainty about home care', 'Need for structured guidance', 'Desire for longer remission'],
      solutions: ['Group medical counseling', 'Skin care and hydration plan', 'Trigger identification', 'Medication use training', 'Psychological support'],
      benefits: CLINIC_BENEFITS.en,
      process: STANDARD_PROCESS.en,
    },
  },
  'shkola-dermatoskopii': {
    uz: {
      overview:
        'Dermatoskopiya maktabi — dermatolog va dermatoonkolog mutaxassislari uchun teri o\'smalarini dermatoskopik diagnostika qilish bo\'yicha amaliy o\'quv dasturi. Haqiqiy klinik holatlar va PhotoFinder atlaslari asosida bilim oshiriladi.',
      indications: [
        'Dermatoskopiya bo\'yicha amaliy ko\'nikmalarni oshirish kerakligi',
        'Xavfli va xavfsiz xollarni farqlashda qiyinchilik',
        'Raqamli diagnostika vositalaridan samarali foydalanish istagi',
        'Klinik holatlarni tahlil qilish tajribasini kengaytirish',
        'Dermatoonkologiya yo\'nalishida malaka oshirish',
      ],
      solutions: [
        'Praktik o\'quv darslari va seminarlar',
        'PhotoFinder va dermatoskop bilan ishlash',
        'Klinik holatlar atlasini tahlil qilish',
        'Yetakchi mutaxassislar bilan amaliy mashg\'ulotlar',
        'Sertifikatlashtirish va bilimni mustahkamlash',
      ],
      benefits: CLINIC_BENEFITS.uz,
      process: STANDARD_PROCESS.uz,
    },
    ru: {
      overview:
        'Школа дерматоскопии — практическая программа для врачей по оптической и цифровой диагностике новообразований кожи на реальных клинических случаях.',
      indications: ['Нужны практические навыки', 'Сложности в дифференциации родинок', 'Освоение цифровой диагностики', 'Расширение клинического опыта', 'Повышение квалификации'],
      solutions: ['Практические курсы', 'Работа с PhotoFinder', 'Разбор клинических атласов', 'Занятия с экспертами', 'Закрепление знаний'],
      benefits: CLINIC_BENEFITS.ru,
      process: STANDARD_PROCESS.ru,
    },
    en: {
      overview:
        'Dermatoscopy School offers practical training for physicians in optical and digital diagnosis of skin lesions using real clinical cases and PhotoFinder atlases.',
      indications: ['Need practical dermoscopy skills', 'Difficulty distinguishing risky moles', 'Digital diagnostics training', 'Expanding clinical experience', 'Professional development'],
      solutions: ['Practical workshops', 'PhotoFinder hands-on training', 'Clinical atlas review', 'Expert-led sessions', 'Knowledge consolidation'],
      benefits: CLINIC_BENEFITS.en,
      process: STANDARD_PROCESS.en,
    },
  },
  'clinika-patologii-nogtej': {
    uz: {
      overview:
        'Tirnoq va oyoq patologiyasi — tirnoq zamburug\'i, o\'sib ketgan tirnoq, yoriqlar va oyoq terisi kasalliklarini tibbiy usullar bilan davolash yo\'nalishi. Dermatologik podolog xizmati og\'riqsiz va steril sharoitda amalga oshiriladi.',
      indications: [
        'Tirnoq zamburug\'i (onikomikoz)',
        'O\'sib ketgan tirnoq va og\'riq',
        'Tirnoq plastinkasining qalinlashishi yoki deformatsiyasi',
        'Tovon yoriqlari va qadoq (natoptysh)',
        'Oyoq terisining quruqligi va yoriqlari',
      ],
      solutions: [
        'Dermatologik podolog konsultatsiyasi',
        'Apparatli tibbiy pedikyur',
        'O\'sib ketgan tirnoqni tuzatish (titan nit)',
        'Antifungal va mahalliy davolash',
        'Profilaktik parvarish tavsiyalari',
      ],
      benefits: CLINIC_BENEFITS.uz,
      process: STANDARD_PROCESS.uz,
    },
    ru: {
      overview:
        'Патология ногтей и стопы — лечение грибка ногтей, вросшего ногтя, трещин и мозолей медицинскими методами под контролем дерматолога-подолога.',
      indications: ['Онихомикоз', 'Вросший ноготь', 'Деформация ногтевой пластины', 'Трещины пяток и мозоли', 'Сухость кожи стоп'],
      solutions: ['Консультация подолога', 'Аппаратный медицинский педикюр', 'Коррекция вросшего ногтя', 'Противогрибковая терапия', 'Профилактический уход'],
      benefits: CLINIC_BENEFITS.ru,
      process: STANDARD_PROCESS.ru,
    },
    en: {
      overview:
        'Nail and foot pathology clinic treats nail fungus, ingrown nails, cracks, and corns using medical methods under dermatologist-podologist supervision.',
      indications: ['Onychomycosis', 'Ingrown toenail', 'Nail plate deformity', 'Heel cracks and corns', 'Dry foot skin'],
      solutions: ['Podology consultation', 'Medical device pedicure', 'Ingrown nail correction', 'Antifungal therapy', 'Preventive foot care'],
      benefits: CLINIC_BENEFITS.en,
      process: STANDARD_PROCESS.en,
    },
  },
  dermatopatologiya: {
    uz: {
      overview:
        'Dermatopatologiya — teri biopsiya namunalarining gistologik va immunogistokimyoviy tahlili orqali aniq tashxis qo\'yish laboratoriya yo\'nalishi. Shubhali o\'smalar va surunkali kasalliklarda hujayra darajasidagi tekshiruv muhim ahamiyatga ega.',
      indications: [
        'Biopsiya olingan teri namunasini tekshirish kerakligi',
        'Yaxshi yoki yomon sifatli o\'sma farqini aniqlash',
        'Surunkali dermatozlarning patomorfologiyasi',
        'Immunogistokimyoviy markerlar bo\'yicha qo\'shimcha tahlil',
        'Boshqa klinik ma\'lumotlar bilan tashxisni tasdiqlash',
      ],
      solutions: [
        'Gistologik mikroskopik tahlil',
        'Immunogistokimyoviy tekshiruvlar',
        'Patolog va dermatolog hamkorligi',
        'Aniq va tez laboratoriya xulosasi',
        'Keyingi davolash strategiyasini belgilash',
      ],
      benefits: CLINIC_BENEFITS.uz,
      process: STANDARD_PROCESS.uz,
    },
    ru: {
      overview:
        'Дерматопатология — гистологический и иммуногистохимический анализ биоптатов кожи для точной верификации диагноза.',
      indications: ['Нужно исследование биопсии', 'Дифференциация доброкачественных и злокачественных образований', 'Патоморфология дерматозов', 'ИГХ-маркеры', 'Подтверждение диагноза'],
      solutions: ['Гистологическое исследование', 'Иммуногистохимия', 'Совместная работа патолога и дерматолога', 'Оперативное заключение', 'План лечения'],
      benefits: CLINIC_BENEFITS.ru,
      process: STANDARD_PROCESS.ru,
    },
    en: {
      overview:
        'Dermatopathology provides histologic and immunohistochemical analysis of skin biopsy samples for accurate diagnosis of lesions and chronic dermatoses.',
      indications: ['Biopsy sample evaluation needed', 'Benign vs malignant differentiation', 'Pathomorphology of dermatoses', 'IHC marker testing', 'Diagnosis confirmation'],
      solutions: ['Histopathology examination', 'Immunohistochemistry', 'Pathologist-dermatologist collaboration', 'Timely lab report', 'Treatment strategy planning'],
      benefits: CLINIC_BENEFITS.en,
      process: STANDARD_PROCESS.en,
    },
  },
  'gen-revo': {
    uz: {
      overview:
        'Gen darajasida fotoomolajeniya — Sciton IPL Forever Young texnologiyasi asosida teri hujayralaridagi qarish genlarining faolligini o\'zgartiruvchi ilg\'or yo\'nalish. Kollegen va elastin ishlab chiqarilishini rag\'batlantiradi, terini jarrohliksiz yoshartiradi.',
      indications: [
        'Yoshga bog\'liq teri eskirishi va ajinlar',
        'Teri elastikligi va turgorining pasayishi',
        'Giperpigmentatsiya va teri rangining notekisligi',
        'Quyosh ta\'siridan fotoeskirish',
        'Profilaktik anti-age kursi istagi',
      ],
      solutions: [
        'Forever Young IPL protokollari',
        'Gen darajasida hujayra yangilanishi',
        'Individual seanslar rejasi (3–5 seans)',
        'Kombinatsiyalangan parvarish tavsiyalari',
        'Uzoq muddatli monitoring va profilaktika',
      ],
      benefits: CLINIC_BENEFITS.uz,
      process: STANDARD_PROCESS.uz,
    },
    ru: {
      overview:
        'Фотоомоложение на генном уровне — направление на базе Sciton IPL Forever Young, модулирующее гены старения и стимулирующее выработку коллагена и эластина.',
      indications: ['Возрастное старение', 'Снижение эластичности', 'Гиперпигментация', 'Фотостарение', 'Профилактический anti-age курс'],
      solutions: ['Протоколы Forever Young IPL', 'Обновление на генном уровне', 'Индивидуальный план сеансов', 'Комбинированный уход', 'Долгосрочный мониторинг'],
      benefits: CLINIC_BENEFITS.ru,
      process: STANDARD_PROCESS.ru,
    },
    en: {
      overview:
        'Gene-level photo-rejuvenation uses Sciton IPL Forever Young technology to modulate aging-related genes and stimulate collagen and elastin for non-surgical skin renewal.',
      indications: ['Age-related aging', 'Reduced elasticity', 'Hyperpigmentation', 'Photoaging', 'Preventive anti-aging course'],
      solutions: ['Forever Young IPL protocols', 'Gene-level cell renewal', 'Individual session plan', 'Combined skincare', 'Long-term monitoring'],
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
        'Yuz, bo\'yin, ko\'krak oldi va qo\'llar uchun xavfsiz qo\'llash',
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
      solutions: ['Sciton IPL apparati bilan foto-yangilash', 'Pigmentatsiyani bosqichma-bosqich yo\'qotish', 'Qon tomirlarni issiq yorug\'lik bilan yopish', 'Teri teksturasini yaxshilash', 'Profilaktik yoshartirish kurslari'],
      benefits: ['Original Sciton IPL uskunalari', 'Iz qoldirmaydi, tiklanish tez', 'Yuz va tana uchun mos', 'Dermatolog nazorati', 'Aniq va bashorat qilinadigan natija'],
      process: [
        'Dermatolog konsultatsiyasi va teri holatini baholash',
        'Teri tozalash va IPL uchun tayyorgarlik',
        'Sciton IPL seansi maxsus ko\'zoynak bilan o\'tkaziladi (15–30 daqiqa)',
        'Tinchlantiruvchi va UV-himoya vositalari qo\'llaniladi',
        '2–4 hafta oralig\'ida takroriy seanslar va natijani kuzatish',
      ],
    },
    ru: {
      overview: 'IPL фотоомоложение — метод омоложения на оригинальной американской технологии Sciton. Импульсы широкополосного света устраняют пигментацию, сосуды и возрастные изменения. Процедура безболезненна и дает быстрый результат.',
      indications: ['Пигментные пятна и мелазма', 'Сосудистые звездочки', 'Неровный тон кожи', 'Возрастные изменения', 'Солнечные пятна'],
      solutions: ['Фотоомоложение на Sciton IPL', 'Поэтапное устранение пигментации', 'Коагуляция сосудов', 'Улучшение текстуры кожи', 'Профилактические курсы'],
      benefits: ['Оригинальное оборудование Sciton', 'Без рубцов и быстрое восстановление', 'Для лица и тела', 'Контроль дерматолога', 'Прогнозируемый результат'],
      process: [
        'Консультация дерматолога и оценка состояния кожи',
        'Очищение кожи и подготовка к IPL',
        'Сеанс Sciton IPL в защитных очках (15–30 минут)',
        'Нанесение успокаивающих и SPF-средств',
        'Повторные сеансы через 2–4 недели и контроль результата',
      ],
    },
    en: {
      overview: 'IPL photo-rejuvenation uses original Sciton US technology. Broad-band light pulses address pigmentation, vascular lesions and age-related changes. The procedure is painless and delivers fast visible results.',
      indications: ['Pigment spots and melasma', 'Vascular lesions and redness', 'Uneven skin tone', 'Age-related skin changes', 'Sun-induced spots'],
      solutions: ['Sciton IPL photo-rejuvenation', 'Stepwise pigmentation removal', 'Vessel coagulation with light energy', 'Skin texture improvement', 'Preventive rejuvenation courses'],
      benefits: ['Original Sciton equipment', 'No scarring and quick recovery', 'Suitable for face and body', 'Dermatologist supervision', 'Predictable results'],
      process: [
        'Dermatologist consultation and skin assessment',
        'Skin cleansing and IPL preparation',
        'Sciton IPL session with protective eyewear (15–30 minutes)',
        'Soothing and SPF products applied after treatment',
        'Repeat sessions every 2–4 weeks with result monitoring',
      ],
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
      indications: ['Yuz mushaklari tonusining pasayishi', 'Shish va limfa to\'planishi', 'Teri elastikligining kamayishi', 'Yuz konturining pasayishi va silkinishi', 'Teri quruqligi va xiraligi'],
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
  'ultratovush-yuz': {
    uz: {
      overview:
        'Professional ultratovush yuz tozalash — yuz terisini chuqur, lekin ehtiyotkorlik bilan tozalash usuli. Ultratovush to\'lqinlari yog\' va mayda kir qoldiqlarini yumshatadi, poralarni ochadi va keyingi parvarish uchun terini tayyorlaydi. Jarrohliksiz, og\'riqsiz muolaja bo\'lib, apparat kosmetologiyasidagi muhim tayyorlovchi bosqich hisoblanadi.',
      indications: [
        'Kengaytirilgan toshma teshiklari va qora nuqtalar',
        'Yog\'li teri, komedonlar va matlik',
        'Teri teksturasining notekisligi',
        'Kosmetik mahsulotlar qatlami va mayda qirqindilar',
        'Muntazam professional tozalash va parvarish kerakligi',
      ],
      solutions: [
        'Professional ultratovush spatula bilan chuqur tozalash',
        'Yog\' va qoldiqlarni ehtiyotkorlik bilan olib tashlash',
        'Poralar ochilgandan keyin tinchlantiruvchi va namlantiruvchi parvarish',
        'IPL yoki biorevitalizatsiya bilan kombinatsiyalangan protokollar',
        'Teri turiga mos individual tozalash chastotasi va davomiyligi',
      ],
      benefits: [
        'Chuqur tozalash — uy parvarishidan ko\'ra samaraliroq',
        'Og\'riqsiz va qulay muolaja',
        'Poralarni ochish va teri nafas olishini yaxshilash',
        'Keyingi apparat muolajalar uchun tayyor teri',
        'Dermatolog va kosmetolog nazorati ostida',
      ],
      process: [
        'Konsultatsiya va teri holatini baholash',
        'Makiyaj va yuz yuzasidagi qoplama olib tashlanadi',
        'Ultratovush spatula bilan tartibli tozalash (20–40 daqiqa)',
        'Tinchlantiruvchi maska yoki namlantiruvchi vositalar qo\'llaniladi',
        'Uy parvarishi va keyingi muolaja tavsiyalari beriladi',
      ],
    },
    ru: {
      overview:
        'Профессиональная ультразвуковая чистка лица — глубокое, но деликатное очищение кожи. Ультразвуковые волны размягчают себум и загрязнения, раскрывают поры и подготавливают кожу к дальнейшему уходу. Процедура безболезненна и является важным этапом аппаратной косметологии.',
      indications: [
        'Расширенные поры и черные точки',
        'Жирная кожа, комедоны и тусклость',
        'Неровная текстура кожи',
        'Накопление косметики и ороговевших клеток',
        'Необходимость регулярного профессионального очищения',
      ],
      solutions: [
        'Глубокая ультразвуковая чистка профессиональным шпателем',
        'Аккуратное удаление себума и загрязнений',
        'Успокаивающий и увлажняющий уход после очищения',
        'Комбинированные протоколы с IPL или биоревитализацией',
        'Индивидуальная частота и длительность процедуры',
      ],
      benefits: [
        'Глубокое очищение эффективнее домашнего ухода',
        'Безболезненная и комфортная процедура',
        'Раскрытие пор и улучшение дыхания кожи',
        'Подготовка кожи к последующим аппаратным процедурам',
        'Контроль дерматолога и косметолога',
      ],
      process: [
        'Консультация и оценка состояния кожи',
        'Снятие макияжа и поверхностных загрязнений',
        'Ультразвуковая чистка шпателем (20–40 минут)',
        'Нанесение успокаивающей маски или увлажняющих средств',
        'Рекомендации по домашнему уходу и следующим процедурам',
      ],
    },
    en: {
      overview:
        'Professional ultrasonic facial cleansing is a deep yet gentle skin cleansing method. Ultrasonic waves soften sebum and impurities, open pores and prepare skin for further care. The procedure is painless and serves as an important preparatory step in device-based cosmetology.',
      indications: [
        'Enlarged pores and blackheads',
        'Oily skin, comedones and dullness',
        'Uneven skin texture',
        'Buildup of cosmetics and dead skin cells',
        'Need for regular professional cleansing',
      ],
      solutions: [
        'Deep cleansing with a professional ultrasonic spatula',
        'Careful removal of sebum and impurities',
        'Soothing and hydrating care after pore cleansing',
        'Combined protocols with IPL or biorevitalization',
        'Individual cleansing frequency and session duration',
      ],
      benefits: [
        'Deeper cleansing than home skincare alone',
        'Painless and comfortable procedure',
        'Pore opening and improved skin breathing',
        'Skin prepared for subsequent device treatments',
        'Dermatologist and cosmetologist supervision',
      ],
      process: [
        'Consultation and skin assessment',
        'Makeup and surface impurities removal',
        'Ultrasonic spatula cleansing (20–40 minutes)',
        'Soothing mask or hydrating products applied',
        'Home care and follow-up treatment recommendations',
      ],
    },
  },
  'det-derm': {
    uz: {
      overview: 'Bolalar dermatologiyasi — go\'daklar va bolalardagi teri kasalliklarini muloyim, xavfsiz va yoshga mos usullar bilan diagnostika qilish va davolash. Atopik dermatit, allergik toshma va tug\'ma teri kasalliklari dermatolog nazoratida boshqariladi.',
      indications: ['Atopik dermatit va ekzema', 'Allergik toshma va qichish', 'Bolalarda akne va seboreya', 'Tug\'ma teri kasalliklari', 'Teri quruqligi va sezgirlik'],
      solutions: ['Bolalar uchun xavfsiz dermatologik ko\'rik', 'Allergiya va triggerlarni aniqlash', 'Yoshga mos mahalliy terapiya', 'Ota-onalarga parvarish bo\'yicha yo\'riqnoma', 'Dinamik kuzatuv va profilaktika'],
      benefits: ['Bolalar terisiga mos yondashuv', 'Xavfsiz va sinchkov diagnostika', 'Ota-ona bilan hamkorlik', 'Individual davolash rejasi', 'Uzoq muddatli nazorat'],
      process: STANDARD_PROCESS.uz,
    },
    ru: {
      overview: 'Детская дерматология — бережная диагностика и лечение кожных заболеваний у детей с первых дней жизни, включая атопический дерматит и аллергические высыпания.',
      indications: ['Атопический дерматит', 'Аллергические высыпания', 'Детское акне и себорея', 'Врожденные дерматозы', 'Сухость и чувствительность кожи'],
      solutions: ['Безопасный осмотр', 'Выявление аллергенов', 'Возрастная местная терапия', 'Обучение родителей уходу', 'Динамическое наблюдение'],
      benefits: ['Подход с учетом возраста', 'Безопасная диагностика', 'Работа с родителями', 'Индивидуальный план', 'Долгосрочный контроль'],
      process: STANDARD_PROCESS.ru,
    },
    en: {
      overview: 'Pediatric dermatology provides gentle, safe diagnosis and treatment of skin conditions in infants and children, including atopic dermatitis and allergic rashes.',
      indications: ['Atopic dermatitis and eczema', 'Allergic rashes and itching', 'Pediatric acne and seborrhea', 'Congenital skin conditions', 'Dryness and sensitivity'],
      solutions: ['Child-safe dermatologic exam', 'Allergy and trigger identification', 'Age-appropriate topical therapy', 'Parent care guidance', 'Ongoing monitoring'],
      benefits: ['Age-appropriate approach', 'Safe thorough diagnostics', 'Parent partnership', 'Individual treatment plan', 'Long-term follow-up'],
      process: STANDARD_PROCESS.en,
    },
  },
  fototerapiya: {
    uz: {
      overview: 'Fototerapiya — tor to\'lqinli UVB (311 nm) nurlari yordamida psoriaz, vitiligo va ekzema kabi kasalliklarni dori-darmonsiz yoki qo\'shimcha davolash usuli. Klinik protokol asosida xavfsiz dozalar qo\'llaniladi.',
      indications: ['Psoriaz plakalari', 'Vitiligo (oq dog\'lar)', 'Ekzema va surunkali dermatit', 'Dori-darmonlarga yetarli javob bermagan holatlar', 'Remissiyani uzaytirish kerakligi'],
      solutions: ['UVB 311 nm fototerapiya seanslari', 'Individual doza va chastota', 'Kombinatsiyalangan terapiya (kerak bo\'lsa)', 'Teri holatini kuzatish', 'Profilaktik qo\'llab-quvvatlash kurslari'],
      benefits: ['Dori-darmonsiz yoki kamroq dori bilan samaradorlik', 'Klinik protokolga mos xavfsizlik', 'Surunkali kasalliklarda uzoq muddatli effekt', 'Mutaxassis nazorati', 'Aniq davolash rejasi'],
      process: ['Dermatolog konsultatsiyasi va kasallik bahosi', 'Fototerapiyaga moslikni aniqlash', 'Birinchi test seansi va doza tanlash', 'Haftalik yoki kunlik seanslar rejasi', 'Natijani kuzatish va reja tuzatish'],
    },
    ru: {
      overview: 'Фототерапия узкополосным UVB 311 нм — лечение псориаза, витилиго и экземы по клиническим протоколам с контролем дозы.',
      indications: ['Псориаз', 'Витилиго', 'Экзема', 'Недостаточный эффект медикаментов', 'Необходимость длительной ремиссии'],
      solutions: ['Сеансы UVB 311 нм', 'Индивидуальная доза', 'Комбинированная терапия', 'Контроль состояния', 'Поддерживающие курсы'],
      benefits: ['Эффективность с минимумом лекарств', 'Протокольная безопасность', 'Длительный эффект', 'Контроль специалиста', 'Четкий план лечения'],
      process: ['Консультация и оценка', 'Определение показаний', 'Тестовый сеанс', 'Курс сеансов', 'Контроль результата'],
    },
    en: {
      overview: 'Phototherapy with narrow-band UVB (311 nm) treats psoriasis, vitiligo, and eczema using safe clinical protocols and controlled dosing.',
      indications: ['Psoriasis plaques', 'Vitiligo', 'Eczema and chronic dermatitis', 'Insufficient medication response', 'Need for longer remission'],
      solutions: ['UVB 311 nm sessions', 'Individual dose and frequency', 'Combined therapy when needed', 'Condition monitoring', 'Maintenance courses'],
      benefits: ['Effective with fewer medications', 'Protocol-based safety', 'Long-term effect for chronic disease', 'Specialist supervision', 'Clear treatment plan'],
      process: ['Consultation and assessment', 'Eligibility evaluation', 'Test session and dosing', 'Scheduled treatment course', 'Result monitoring'],
    },
  },
  immunobiologicheskaya: {
    uz: {
      overview: 'Immunobiologik terapiya — og\'ir va surunkali autoimmun teri kasalliklarini zamonaviy biologik preparatlar bilan davolash. Psoriaz va boshqa qattiq shakldagi holatlarda target terapiya qo\'llaniladi.',
      indications: ['Og\'ir surunkali psoriaz', 'Autoimmun teri kasalliklari', 'An\'anaviy terapiyaga javob bermagan holatlar', 'Keng tarqalgan yallig\'lanish', 'Hayot sifatini pasaytiruvchi surunkali kasallik'],
      solutions: ['Biologik preparatlar bilan target terapiya', 'Dermatolog nazoratida monitoring', 'Laboratoriya ko\'rsatkichlarini kuzatish', 'Xavfsizlik va nojo\'ya ta\'sir nazorati', 'Kompleks davolash rejasi'],
      benefits: ['Ilg\'or target yondashuv', 'Og\'ir holatlarda samaradorlik', 'Mutaxassis nazorati', 'Xavfsizlik protokollari', 'Individual terapiya tanlovi'],
      process: STANDARD_PROCESS.uz,
    },
    ru: {
      overview: 'Иммунобиологическая терапия — лечение тяжелых аутоиммунных заболеваний кожи современными биологическими препаратами.',
      indications: ['Тяжелый псориаз', 'Аутоиммунные дерматозы', 'Неэффективность стандартной терапии', 'Распространенное воспаление', 'Снижение качества жизни'],
      solutions: ['Таргетная биологическая терапия', 'Мониторинг дерматолога', 'Контроль анализов', 'Контроль безопасности', 'Комплексный план'],
      benefits: ['Современный таргетный подход', 'Эффективность при тяжелом течении', 'Контроль специалиста', 'Протоколы безопасности', 'Индивидуальный выбор терапии'],
      process: STANDARD_PROCESS.ru,
    },
    en: {
      overview: 'Immunobiological therapy treats severe autoimmune skin diseases with modern biologic agents under strict dermatologist supervision.',
      indications: ['Severe chronic psoriasis', 'Autoimmune skin diseases', 'Failed conventional therapy', 'Widespread inflammation', 'Quality of life impact'],
      solutions: ['Targeted biologic therapy', 'Dermatologist monitoring', 'Lab parameter tracking', 'Safety surveillance', 'Comprehensive treatment plan'],
      benefits: ['Advanced targeted approach', 'Effective for severe cases', 'Specialist oversight', 'Safety protocols', 'Individual therapy selection'],
      process: STANDARD_PROCESS.en,
    },
  },
  konturnaya: {
    uz: {
      overview: 'Kontur plastikasi — gialuron kislotasidagi sertifikatlangan fillerlar bilan yuz hajmini tiklash, lab va yonoq konturini tuzatish usuli. Natija tabiiy ko\'rinishni saqlaydi.',
      indications: ['Yuz hajmining kamayishi', 'Lab hajmi va shaklini tuzatish', 'Yonoq va iyak konturini aniqlashtirish', 'Nazolabial chiziqlar', 'Yoshga bog\'liq kontur o\'zgarishi'],
      solutions: ['Gialuron kislotali filler inyeksiyalari', 'Individual hajm va zona tanlash', 'Anatomik xavfsizlik qoidalari', 'Bosqichma-bosqich tuzatish', 'Natijani kuzatish va tuzatish'],
      benefits: ['Darhol ko\'rinadigan natija', 'Tabiiy kontur', 'Sertifikatlangan preparatlar', 'Mutaxassis nazorati', 'Minimal tiklanish vaqti'],
      process: ['Konsultatsiya va zona rejalashtirish', 'Teri tozalash va mahalliy behushlik (kerak bo\'lsa)', 'Filler inyeksiyasi aniq texnikada', 'Shakllantirish va massaj', 'Parvarish tavsiyalari va qayta ko\'rik'],
    },
    ru: {
      overview: 'Контурная пластика — восстановление объема и контуров лица сертифицированными филлерами на гиалуроновой кислоте.',
      indications: ['Потеря объема', 'Коррекция губ', 'Скулы и подбородок', 'Носогубные складки', 'Возрастные изменения контуров'],
      solutions: ['Инъекции филлеров', 'Индивидуальный план зон', 'Анатомическая безопасность', 'Поэтапная коррекция', 'Контроль результата'],
      benefits: ['Мгновенный эффект', 'Естественный контур', 'Сертифицированные препараты', 'Контроль специалиста', 'Минимальная реабилитация'],
      process: ['Консультация и планирование', 'Подготовка кожи', 'Инъекция филлера', 'Моделирование', 'Рекомендации по уходу'],
    },
    en: {
      overview: 'Dermal fillers restore facial volume and contours using certified hyaluronic acid gels for natural-looking results.',
      indications: ['Volume loss', 'Lip enhancement', 'Cheek and jawline contouring', 'Nasolabial folds', 'Age-related contour changes'],
      solutions: ['Hyaluronic acid filler injections', 'Individual zone planning', 'Anatomic safety principles', 'Gradual correction', 'Result monitoring'],
      benefits: ['Immediate visible result', 'Natural contours', 'Certified products', 'Specialist supervision', 'Minimal downtime'],
      process: ['Consultation and zone planning', 'Skin preparation', 'Filler injection', 'Shaping and massage', 'Aftercare and follow-up'],
    },
  },
  botulino: {
    uz: {
      overview: 'Botulinoterapiya — Botox va Dysport kabi sertifikatlangan preparatlar bilan mimik ajinlarni yumshatish usuli. Mimik ifoda tabiiy saqlanadi, natija bir necha kundan keyin paydo bo\'ladi.',
      indications: ['Peshona ajinlari', 'Ko\'z atrofidagi «oyoq izi» ajinlari', 'Lab ustidagi gorizontal chiziqlar', 'Mimik ajinlar tufayli charchagan ko\'rinish', 'Profilaktik anti-age maqsadida'],
      solutions: ['Botox/Dysport inyeksiyalari', 'Mimik mushaklarga aniq dozalar', 'Individual zona tanlash', 'Tabiiy ifodani saqlash texnikasi', '3–6 oyda takrorlash rejasi'],
      benefits: ['Tez va samarali natija', 'Jarrohliksiz usul', 'Original preparatlar', 'Dermatolog nazorati', 'Tabiiy ko\'rinish'],
      process: ['Konsultatsiya va zona belgilash', 'Teri tozalash', 'Aniq nuqtalarga inyeksiya', 'Qisqa kuzatuv', 'Parvarish tavsiyalari (24 soat faoliyat cheklovi)'],
    },
    ru: {
      overview: 'Ботулинотерапия — разглаживание мимических морщин сертифицированными препаратами Botox и Dysport с сохранением естественной мимики.',
      indications: ['Морщины лба', 'Морщины вокруг глаз', 'Морщины над губой', 'Усталый вид', 'Профилактика старения'],
      solutions: ['Инъекции ботулотоксина', 'Точные дозы в мышцы', 'Индивидуальные зоны', 'Сохранение мимики', 'План повторных сеансов'],
      benefits: ['Быстрый эффект', 'Без операции', 'Оригинальные препараты', 'Контроль дерматолога', 'Естественный вид'],
      process: ['Консультация', 'Подготовка кожи', 'Инъекции', 'Краткое наблюдение', 'Рекомендации по уходу'],
    },
    en: {
      overview: 'Botulinum therapy smooths expression wrinkles using certified Botox and Dysport while preserving natural facial expression.',
      indications: ['Forehead lines', 'Crow\'s feet', 'Glabellar lines', 'Tired appearance from wrinkles', 'Preventive anti-aging'],
      solutions: ['Botulinum toxin injections', 'Precise muscle dosing', 'Individual zone selection', 'Natural expression technique', 'Repeat session schedule'],
      benefits: ['Fast effective result', 'Non-surgical', 'Original products', 'Dermatologist supervision', 'Natural look'],
      process: ['Consultation and mapping', 'Skin cleansing', 'Targeted injections', 'Brief observation', 'Aftercare guidance'],
    },
  },
  biorev: {
    uz: {
      overview: 'Biorevitalizatsiya — terini chuqur namlantirish va tiklash uchun gialuron kislotasini mikroinyeksiyalar bilan teri ichki qatlamlariga yetkazish usuli. Teri yorqinligi va elastikligi tezda yaxshilanadi.',
      indications: ['Teri quruqligi va suvsizlanish', 'Elastiklikning pasayishi', 'Rangning xiralashishi', 'Yoshga bog\'liq teri eskirishi', 'Jarrohliksiz namlantirish kerakligi'],
      solutions: ['Gialuron kislotasi mikroinyeksiyalari', 'Teri turiga mos preparat tanlash', 'Kursli davolash (3–5 seans)', 'Kombinatsiyalangan parvarish', 'Natijani mustahkamlash'],
      benefits: ['Chuqur namlantirish', 'Tabiiy yorqinlik', 'Og\'riqsiz usul', 'Qisqa tiklanish', 'Mutaxassis nazorati'],
      process: ['Konsultatsiya va teri bahosi', 'Teri tozalash va dezinfeksiya', 'Mikroinyeksiyalar', 'Tinchlantiruvchi parvarish', 'Keyingi seans va uy parvarishi tavsiyalari'],
    },
    ru: {
      overview: 'Биоревитализация — глубокое увлажнение кожи микроинъекциями гиалуроновой кислоты для восстановления сияния и эластичности.',
      indications: ['Сухость кожи', 'Снижение эластичности', 'Тусклый цвет', 'Возрастное старение', 'Потребность в глубоком увлажнении'],
      solutions: ['Микроинъекции гиалуроновой кислоты', 'Подбор препарата', 'Курсовое лечение', 'Комбинированный уход', 'Закрепление результата'],
      benefits: ['Глубокое увлажнение', 'Естественное сияние', 'Безболезненно', 'Короткая реабилитация', 'Контроль специалиста'],
      process: ['Консультация', 'Подготовка кожи', 'Микроинъекции', 'Успокаивающий уход', 'Рекомендации'],
    },
    en: {
      overview: 'Biorevitalization delivers hyaluronic acid via microinjections for deep skin hydration, glow, and elasticity restoration.',
      indications: ['Dry dehydrated skin', 'Reduced elasticity', 'Dull complexion', 'Age-related aging', 'Need for deep hydration'],
      solutions: ['Hyaluronic acid microinjections', 'Product selection by skin type', 'Course treatment', 'Combined skincare', 'Result maintenance'],
      benefits: ['Deep hydration', 'Natural glow', 'Painless procedure', 'Short recovery', 'Specialist supervision'],
      process: ['Consultation and assessment', 'Skin cleansing', 'Microinjections', 'Soothing aftercare', 'Follow-up guidance'],
    },
  },
  'alex-lazer': {
    uz: {
      overview: 'Aleksandrit lazer epilyatsiyasi — yorug\' teri va nozik sochlar uchun samarali lazer usuli. O\'rnatilgan sovitish tizimi terini himoya qiladi, muolaja og\'riqsiz o\'tadi.',
      indications: ['Tana va yuzdagi ortiqcha sochlar', 'Qalin va qora sochlar', 'O\'sib ketgan sochlar', 'Titrash va mumdan charchaganlar', 'Uzoq muddatli silliq teri istagi'],
      solutions: ['Aleksandrit lazer seanslari', 'Sovitish bilan xavfsiz muolaja', 'Individual energiya parametrlari', 'Kursli davolash rejasi', 'Qo\'llab-quvvatlash seanslari'],
      benefits: ['Yuqori samaradorlik', 'Og\'riqsiz va qulay', 'Sovitish himoyasi', 'Aniq natija', 'Mutaxassis nazorati'],
      process: ['Konsultatsiya va teri/soch bahosi', 'Muolaja zonasini tayyorlash', 'Lazer seansi sovitish bilan', 'Tinchlantiruvchi krem', 'Keyingi seans vaqtini belgilash'],
    },
    ru: {
      overview: 'Александритовая эпиляция — эффективный метод для светлой кожи и тонких волос с системой охлаждения для комфорта и безопасности.',
      indications: ['Нежелательные волосы', 'Густые темные волосы', 'Вросшие волосы', 'Усталость от бритья', 'Длительная гладкость'],
      solutions: ['Сеансы александритового лазера', 'Охлаждение кожи', 'Индивидуальные параметры', 'Курсовое лечение', 'Поддерживающие сеансы'],
      benefits: ['Высокая эффективность', 'Безболезненно', 'Защита охлаждением', 'Предсказуемый результат', 'Контроль специалиста'],
      process: ['Консультация', 'Подготовка зоны', 'Лазерный сеанс', 'Успокаивающий уход', 'План следующих сеансов'],
    },
    en: {
      overview: 'Alexandrite laser epilation effectively removes unwanted hair on fair skin with integrated cooling for safe, comfortable sessions.',
      indications: ['Unwanted body and facial hair', 'Thick dark hair', 'Ingrown hairs', 'Tired of shaving or waxing', 'Long-lasting smooth skin'],
      solutions: ['Alexandrite laser sessions', 'Cooled safe treatment', 'Individual settings', 'Course-based plan', 'Maintenance sessions'],
      benefits: ['High effectiveness', 'Painless and comfortable', 'Cooling protection', 'Predictable results', 'Specialist supervision'],
      process: ['Consultation and assessment', 'Treatment area preparation', 'Laser session with cooling', 'Soothing aftercare', 'Next session scheduling'],
    },
  },
  trixoskop: {
    uz: {
      overview: 'Kompyuter trixoskopiyasi — soch va bosh terisini kattalashtirilgan ko\'rinishda tahlil qilib, soch to\'kilishi sababini aniqlash usuli. Aniq tashxis keyingi davolash rejasining asosi bo\'ladi.',
      indications: ['Soch to\'kilishi va alopeciya', 'Sochning suyultiishi', 'Bosh terisi muammolari', 'Sabab noma\'lum bo\'lgan to\'kilish', 'Davolash samaradorligini baholash'],
      solutions: ['Raqamli trixoskopik skanerlash', 'Follikula holatini tahlil', 'Soch zichligi o\'lchovi', 'Shaxsiy davolash rejasi tuzish', 'Qayta tekshiruv va monitoring'],
      benefits: ['Aniq diagnostika', 'Invaziv emas', 'Tez natija', 'Shaxsiy reja', 'Mutaxassis tahlili'],
      process: ['Trixolog konsultatsiyasi', 'Bosh terisini tayyorlash', 'Trixoskopik skanerlash', 'Natijani tushuntirish', 'Davolash rejasini belgilash'],
    },
    ru: {
      overview: 'Компьютерная трихоскопия — цифровой анализ волос и кожи головы для точного определения причины выпадения.',
      indications: ['Выпадение волос', 'Истончение', 'Проблемы кожи головы', 'Неясная причина', 'Оценка лечения'],
      solutions: ['Цифровая трихоскопия', 'Анализ фолликулов', 'Плотность волос', 'Индивидуальный план', 'Повторный контроль'],
      benefits: ['Точная диагностика', 'Неинвазивно', 'Быстрый результат', 'Персональный план', 'Экспертная оценка'],
      process: ['Консультация трихолога', 'Подготовка', 'Сканирование', 'Разбор результата', 'План лечения'],
    },
    en: {
      overview: 'Computerized trichoscopy analyzes hair and scalp at high magnification to determine the cause of hair loss for targeted treatment.',
      indications: ['Hair loss and alopecia', 'Hair thinning', 'Scalp problems', 'Unclear cause of shedding', 'Treatment effectiveness review'],
      solutions: ['Digital trichoscopic scan', 'Follicle analysis', 'Hair density measurement', 'Personalized treatment plan', 'Follow-up monitoring'],
      benefits: ['Accurate diagnosis', 'Non-invasive', 'Fast results', 'Personalized plan', 'Expert analysis'],
      process: ['Trichologist consultation', 'Scalp preparation', 'Trichoscopy scan', 'Results explanation', 'Treatment planning'],
    },
  },
  'photofinder-scan': {
    uz: {
      overview: 'PhotoFinder dermatologik skanerlash — butun tana terisidagi xollarni sun\'iy intellekt yordamida raqamli xaritalash va melanoma xavfini baholash usuli. O\'zgarishlarni vaqtida aniqlash imkonini beradi.',
      indications: ['Ko\'p sonli yoki yangi xollar', 'Xol o\'zgarishi shubhasi', 'Melanoma xavfi omillari', 'Muntazam skrining kerakligi', 'Oldingi xaritalash bilan solishtirish'],
      solutions: ['PhotoFinder AI butun tana skaneri', 'Raqamli xaritalash va arxivlash', 'Xavfli xollarni belgilash', 'Dermatolog tahlili', 'Monitoring rejasi tuzish'],
      benefits: ['Erta aniqlash', 'Yuqori aniqlik', 'Raqamli arxiv', 'Tez va qulay', 'Mutaxassis nazorati'],
      process: ['Konsultatsiya va anamnez', 'Butun tana skanerlash', 'AI tahlil va dermatolog ko\'rigi', 'Xulosalar va tavsiyalar', 'Kerak bo\'lsa biopsiya yoki kuzatuv rejasi'],
    },
    ru: {
      overview: 'Скрининг PhotoFinder — цифровое картирование родинок всего тела с ИИ для оценки риска меланомы.',
      indications: ['Множественные родинки', 'Изменение родинки', 'Факторы риска меланомы', 'Регулярный скрининг', 'Сравнение с предыдущими снимками'],
      solutions: ['Сканер PhotoFinder AI', 'Цифровое картирование', 'Выявление опасных образований', 'Анализ дерматолога', 'План наблюдения'],
      benefits: ['Ранняя диагностика', 'Высокая точность', 'Цифровой архив', 'Быстро и комфортно', 'Контроль специалиста'],
      process: ['Консультация', 'Сканирование тела', 'Анализ ИИ и осмотр', 'Заключение', 'Биопсия или наблюдение'],
    },
    en: {
      overview: 'PhotoFinder mole mapping uses AI to digitally map body moles and assess melanoma risk for early detection.',
      indications: ['Multiple or new moles', 'Suspicious mole changes', 'Melanoma risk factors', 'Regular screening need', 'Comparison with prior maps'],
      solutions: ['PhotoFinder AI full-body scan', 'Digital mapping and archiving', 'High-risk lesion flagging', 'Dermatologist review', 'Surveillance plan'],
      benefits: ['Early detection', 'High accuracy', 'Digital archive', 'Fast and comfortable', 'Specialist oversight'],
      process: ['Consultation and history', 'Full-body scanning', 'AI analysis and exam', 'Report and recommendations', 'Biopsy or follow-up plan'],
    },
  },
  biopsiya: {
    uz: {
      overview: 'Teri biopsiyasi — shubhali o\'smalardan kichik to\'qima namunasi olish va gistologik tahlil orqali aniq tashxis qo\'yish usuli. Dermatoonkologiya va dermatopatologiya hamkorligida amalga oshiriladi.',
      indications: ['Shubhali teri o\'smasi', 'O\'zgarayotgan xol yoki dog\'', 'Xavfli dermatoskopik belgilar', 'Davomiy toshmalar noaniq tashxisda', 'Olib tashlashdan oldin tasdiqlash'],
      solutions: ['Punch yoki insitsional biopsiya', 'Steril sharoitda namuna olish', 'Gistologik laboratoriya tahlili', 'Patolog xulosasi', 'Keyingi davolash strategiyasi'],
      benefits: ['Aniq tashxis', 'Minimal invaziv', 'Tez laboratoriya javobi', 'Xavfsiz usul', 'Mutaxassislar jamoasi'],
      process: ['Konsultatsiya va zona belgilash', 'Mahalliy behushlik', 'Biopsiya olish', 'Jarayon joyini parvarish', 'Gistologiya natijasi va keyingi qadamlar'],
    },
    ru: {
      overview: 'Биопсия кожи — забор образца ткани для гистологического исследования при подозрении на опухолевые процессы.',
      indications: ['Подозрительное образование', 'Изменяющаяся родинка', 'Опасные дерматоскопические признаки', 'Неясный диагноз', 'Верификация перед удалением'],
      solutions: ['Пункционная биопсия', 'Стерильный забор', 'Гистологический анализ', 'Заключение патолога', 'План лечения'],
      benefits: ['Точный диагноз', 'Минимально инвазивно', 'Оперативный ответ лаборатории', 'Безопасно', 'Командная работа специалистов'],
      process: ['Консультация', 'Местная анестезия', 'Биопсия', 'Уход за раной', 'Результат и дальнейшие шаги'],
    },
    en: {
      overview: 'Skin biopsy collects a small tissue sample for histopathology to confirm diagnosis of suspicious skin lesions.',
      indications: ['Suspicious skin lesion', 'Changing mole or patch', 'High-risk dermoscopic signs', 'Unclear persistent rash', 'Pre-excision confirmation'],
      solutions: ['Punch or incisional biopsy', 'Sterile sampling', 'Histology lab analysis', 'Pathology report', 'Treatment strategy'],
      benefits: ['Accurate diagnosis', 'Minimally invasive', 'Timely lab response', 'Safe procedure', 'Specialist team approach'],
      process: ['Consultation and site marking', 'Local anesthesia', 'Biopsy procedure', 'Wound care', 'Pathology results and next steps'],
    },
  },
  'moh-surgery': {
    uz: {
      overview: 'Mohs mikrografik jarrohligi — yuz va bo\'yindagi teri saratonlarini sog\'lom to\'qimalarni maksimal saqlab olib tashlash usuli. Har bir qatlam mikroskop ostida tekshiriladi, shuning uchun aniqlik yuqori.',
      indications: ['Yuz qismidagi basalioma', 'Spinotsellyular karsinoma', 'Qayta paydo bo\'lgan teri saratonlari', 'Estetik jihatdan muhim zonadagi o\'smalar', 'Aniq chegaralar talab qilinadigan holatlar'],
      solutions: ['Mohs mikrografik jarrohlik', 'Bosqichma-bosqich to\'qima tekshiruvi', 'Kosmetik tikish', 'Gistologik nazorat', 'Jarrohlikdan keyingi kuzatuv'],
      benefits: ['Yuqori aniqlik', 'Sog\'lom to\'qimalarni saqlash', 'Keng qamrovli olib tashlash', 'Yuz uchun optimal', 'Malakali jarroh nazorati'],
      process: ['Konsultatsiya va rejalashtirish', 'Birinchi qatlam olib tashlash va mikroskopiya', 'Kerak bo\'lsa qo\'shimcha qatlamlar', 'Yopish va tikish', 'Kuzatuv va profilaktika'],
    },
    ru: {
      overview: 'Микрографическая хирургия Mohs — удаление рака кожи на лице с микроскопическим контролем краев в ходе операции.',
      indications: ['Базалиома на лице', 'Плоскоклеточный рак', 'Рецидивирующий рак кожи', 'Образования в эстетических зонах', 'Нужен точный контроль краев'],
      solutions: ['Хирургия Mohs', 'Послойный микроскопический контроль', 'Косметические швы', 'Гистологический контроль', 'Послеоперационное наблюдение'],
      benefits: ['Высокая точность', 'Сохранение здоровых тканей', 'Полное удаление', 'Оптимально для лица', 'Контроль хирурга'],
      process: ['Консультация', 'Удаление слоя и микроскопия', 'Дополнительные слои при необходимости', 'Ушивание', 'Наблюдение'],
    },
    en: {
      overview: 'Mohs micrographic surgery removes facial skin cancers layer by layer with microscopic margin control for maximum tissue preservation.',
      indications: ['Facial basal cell carcinoma', 'Squamous cell carcinoma', 'Recurrent skin cancer', 'Lesions in cosmetically sensitive areas', 'Need for precise margin control'],
      solutions: ['Mohs micrographic surgery', 'Layer-by-layer microscopic exam', 'Cosmetic closure', 'Histologic margin control', 'Postoperative follow-up'],
      benefits: ['High cure precision', 'Tissue preservation', 'Complete tumor removal', 'Ideal for facial areas', 'Expert surgical oversight'],
      process: ['Consultation and planning', 'First layer excision and microscopy', 'Additional layers if needed', 'Closure and suturing', 'Follow-up care'],
    },
  },
  'consult-group': {
    uz: {
      overview: 'Guruhli shifokor maslahatlari — psoriaz bemorlariga kasallikni boshqarish, parvarish va remissiyani uzaytirish bo\'yicha amaliy yo\'riqnoma berish dasturi.',
      indications: ['Yangi psoriaz tashxisi', 'Tez-tez kuchayishlar', 'Uy parvarishida noaniqlik', 'Dori-darmonlarni to\'g\'ri qo\'llash kerakligi', 'Motivatsiya va qo\'llab-quvvatlash istagi'],
      solutions: ['Guruhli maslahat sessiyalari', 'Parvarish va diet tavsiyalari', 'Triggerlarni aniqlash', 'Savol-javob formati', 'Shaxsiy reja elementlari'],
      benefits: ['Amaliy bilim', 'Bemorlar o\'zaro tajriba', 'Shifokor nazorati', 'Qulay muhit', 'Bepul yoki arzon format'],
      process: ['Ro\'yxatdan o\'tish', 'Guruh sessiyasida qatnashish', 'Parvarish rejasini olish', 'Uyda qo\'llash', 'Keyingi sessiyaga taklif'],
    },
    ru: {
      overview: 'Групповые консультации — практические занятия для пациентов с псориазом по уходу, контролю обострений и продлению ремиссии.',
      indications: ['Новый диагноз', 'Частые обострения', 'Неуверенность в уходе', 'Вопросы по лекарствам', 'Нужна поддержка'],
      solutions: ['Групповые сессии', 'Рекомендации по уходу', 'Выявление триггеров', 'Формат вопросов и ответов', 'Элементы индивидуального плана'],
      benefits: ['Практические знания', 'Обмен опытом', 'Контроль врача', 'Комфортная атмосфера', 'Доступный формат'],
      process: ['Регистрация', 'Участие в сессии', 'Получение плана', 'Домашнее применение', 'Приглашение на следующую встречу'],
    },
    en: {
      overview: 'Group medical counseling provides practical guidance for psoriasis patients on disease management, care, and extending remission.',
      indications: ['New psoriasis diagnosis', 'Frequent flares', 'Uncertainty about home care', 'Medication questions', 'Need for peer support'],
      solutions: ['Group counseling sessions', 'Care and lifestyle advice', 'Trigger identification', 'Q&A format', 'Personal plan elements'],
      benefits: ['Practical knowledge', 'Peer experience sharing', 'Physician guidance', 'Supportive environment', 'Accessible format'],
      process: ['Registration', 'Group session attendance', 'Care plan handout', 'Home implementation', 'Follow-up session invite'],
    },
  },
  'dermatosc-lessons': {
    uz: {
      overview: 'Praktik o\'quv darslari — dermatologlar uchun dermatoskopik diagnostika va PhotoFinder bilan ishlash bo\'yicha amaliy mashg\'ulotlar.',
      indications: ['Dermatoskopiya ko\'nikmalarini oshirish', 'Xavfli xollarni farqlash', 'Raqamli diagnostika o\'rganish', 'Klinik holatlar tajribasi', 'Malaka oshirish'],
      solutions: ['Amaliy seminarlar', 'PhotoFinder bilan ishlash', 'Klinik atlas tahlili', 'Ekspert bilan mashg\'ulot', 'Sertifikatlashtirish'],
      benefits: ['Amaliy tajriba', 'Zamonaviy uskunalar', 'Ekspert yo\'riqnomasi', 'Klinik holatlar bazasi', 'Malaka sertifikati'],
      process: ['Dasturga yozilish', 'Nazariy qism', 'Amaliy mashg\'ulot', 'Holatlarni tahlil qilish', 'Sertifikat va tavsiyalar'],
    },
    ru: {
      overview: 'Практические курсы — обучение дерматологов дерматоскопии и работе с PhotoFinder на реальных клинических случаях.',
      indications: ['Повышение навыков', 'Дифференциация родинок', 'Цифровая диагностика', 'Клинический опыт', 'Повышение квалификации'],
      solutions: ['Практические семинары', 'Работа с PhotoFinder', 'Разбор атласов', 'Занятия с экспертом', 'Сертификация'],
      benefits: ['Практический опыт', 'Современное оборудование', 'Руководство эксперта', 'База клинических случаев', 'Сертификат'],
      process: ['Запись на курс', 'Теория', 'Практика', 'Разбор случаев', 'Сертификат'],
    },
    en: {
      overview: 'Practical training workshops teach dermatologists dermoscopy and PhotoFinder use through hands-on clinical case analysis.',
      indications: ['Skill improvement', 'Risky mole differentiation', 'Digital diagnostics training', 'Clinical case experience', 'Professional development'],
      solutions: ['Practical seminars', 'PhotoFinder training', 'Clinical atlas review', 'Expert-led practice', 'Certification'],
      benefits: ['Hands-on experience', 'Modern equipment', 'Expert guidance', 'Clinical case library', 'Certificate'],
      process: ['Course enrollment', 'Theory session', 'Practical workshop', 'Case analysis', 'Certificate and recommendations'],
    },
  },
  'podolog-dermatolog': {
    uz: {
      overview: 'Dermatologik podolog xizmati — o\'sib ketgan tirnoq, tirnoq zamburug\'i va oyoq patologiyasini tibbiy usullar bilan davolash. Og\'riqsiz va steril sharoitda amalga oshiriladi.',
      indications: ['O\'sib ketgan tirnoq', 'Tirnoq zamburug\'i', 'Tirnoq deformatsiyasi', 'Tovon yoriqlari va qadoq', 'Oyoq og\'rig\'i va yallig\'lanish'],
      solutions: ['Podologik konsultatsiya', 'Tibbiy apparatli pedikyur', 'Titan nit bilan tirnoq tuzatish', 'Antifungal terapiya', 'Profilaktik parvarish'],
      benefits: ['Og\'riqsiz yondashuv', 'Steril sharoit', 'Dermatolog nazorati', 'Aniq natija', 'Uzoq muddatli yechim'],
      process: ['Konsultatsiya va ko\'rik', 'Og\'riqsiz mahalliy behushlik (kerak bo\'lsa)', 'Podologik muolaja', 'Bandaj va parvarish', 'Qayta ko\'rik va profilaktika'],
    },
    ru: {
      overview: 'Дерматологический подолог — лечение вросшего ногтя, грибка и патологии стопы медицинскими методами в стерильных условиях.',
      indications: ['Вросший ноготь', 'Онихомикоз', 'Деформация ногтя', 'Трещины и мозоли', 'Боль и воспаление'],
      solutions: ['Консультация подолога', 'Медицинский педикюр', 'Коррекция титановой нитью', 'Противогрибковая терапия', 'Профилактика'],
      benefits: ['Безболезненно', 'Стерильно', 'Контроль дерматолога', 'Точный результат', 'Долгосрочное решение'],
      process: ['Консультация', 'Анестезия при необходимости', 'Процедура', 'Перевязка', 'Контроль'],
    },
    en: {
      overview: 'Clinical podology treats ingrown nails, nail fungus, and foot pathology using medical methods in sterile conditions.',
      indications: ['Ingrown toenail', 'Nail fungus', 'Nail deformity', 'Heel cracks and corns', 'Pain and inflammation'],
      solutions: ['Podology consultation', 'Medical device pedicure', 'Titanium wire correction', 'Antifungal therapy', 'Preventive care'],
      benefits: ['Painless approach', 'Sterile setting', 'Dermatologist oversight', 'Reliable results', 'Long-term solution'],
      process: ['Consultation and exam', 'Local anesthesia if needed', 'Podology procedure', 'Dressing and care', 'Follow-up'],
    },
  },
  gistolog: {
    uz: {
      overview: 'Gistologik mikroskopik tahlil — teri biopsiya namunalarini laboratoriyada hujayra darajasida o\'rganish orqali aniq tashxis berish.',
      indications: ['Biopsiya namunasi tekshiruvi', 'Yaxshi/yomon sifatli o\'sma farqi', 'Surunkali dermatoz patologiyasi', 'Immunogistokimyoviy markerlar', 'Tashxisni tasdiqlash'],
      solutions: ['Gistologik bo\'yash va mikroskopiya', 'Immunogistokimyoviy tahlil', 'Patolog xulosasi', 'Dermatolog bilan muhokama', 'Davolash strategiyasi'],
      benefits: ['Yuqori aniqlik', 'Tez laboratoriya javobi', 'Mutaxassis patolog', 'Ilmiy asoslangan xulosa', 'Keyingi qadam aniq'],
      process: ['Namuna qabul qilish', 'Laboratoriya tayyorgarligi', 'Mikroskopik tahlil', 'Xulosa yozish', 'Dermatologga uzatish va maslahat'],
    },
    ru: {
      overview: 'Гистологическое исследование — микроскопический анализ биоптатов кожи для верификации диагноза.',
      indications: ['Исследование биопсии', 'Доброкачественность/злокачественность', 'Патоморфология дерматозов', 'ИГХ-маркеры', 'Подтверждение диагноза'],
      solutions: ['Гистологическое окрашивание', 'Иммуногистохимия', 'Заключение патолога', 'Обсуждение с дерматологом', 'Стратегия лечения'],
      benefits: ['Высокая точность', 'Оперативный ответ', 'Патолог-эксперт', 'Научно обоснованное заключение', 'Четкий следующий шаг'],
      process: ['Прием образца', 'Лабораторная подготовка', 'Микроскопия', 'Заключение', 'Передача дерматологу'],
    },
    en: {
      overview: 'Histopathology examines skin biopsy samples at cellular level in the lab for accurate diagnosis.',
      indications: ['Biopsy evaluation', 'Benign vs malignant differentiation', 'Dermatosis pathology', 'IHC markers', 'Diagnosis confirmation'],
      solutions: ['Histologic staining and microscopy', 'Immunohistochemistry', 'Pathology report', 'Dermatologist discussion', 'Treatment strategy'],
      benefits: ['High accuracy', 'Timely lab response', 'Expert pathologist', 'Evidence-based conclusion', 'Clear next steps'],
      process: ['Sample intake', 'Lab preparation', 'Microscopic analysis', 'Report writing', 'Dermatologist handoff'],
    },
  },
  'fy-protocols': {
    uz: {
      overview: 'Forever Young IPL protokollari — Sciton texnologiyasi asosida gen darajasida foto-yangilash bo\'yicha individual seanslar rejasi. Teri kollegen va elastin ishlab chiqarishini rag\'batlantiradi.',
      indications: ['Yoshga bog\'liq teri eskirishi', 'Teri elastikligi pasayishi', 'Giperpigmentatsiya', 'Fotoeskirish', 'Profilaktik yoshartirish'],
      solutions: ['Forever Young IPL protokoli', 'Individual energiya parametrlari', '3–5 seansli kurs', 'UV-himoya parvarishi', 'Uzoq muddatli monitoring'],
      benefits: ['Gen darajasida yangilanish', 'Og\'riqsiz muolaja', 'Original Sciton uskunalari', 'Dermatolog nazorati', 'Uzoq muddatli effekt'],
      process: ['Dermatolog konsultatsiyasi', 'Teri tayyorgarligi va tozalash', 'IPL seansi (15–45 daqiqa)', 'Tinchlantiruvchi parvarish', '2–4 haftada takroriy seans'],
    },
    ru: {
      overview: 'Протоколы Forever Young IPL — индивидуальный курс фотоомоложения на генном уровне на аппарате Sciton.',
      indications: ['Возрастное старение', 'Снижение эластичности', 'Гиперпигментация', 'Фотостарение', 'Профилактика'],
      solutions: ['Протокол Forever Young', 'Индивидуальные параметры', 'Курс 3–5 сеансов', 'SPF-уход', 'Долгосрочный мониторинг'],
      benefits: ['Обновление на генном уровне', 'Безболезненно', 'Оригинальный Sciton', 'Контроль дерматолога', 'Длительный эффект'],
      process: ['Консультация', 'Подготовка кожи', 'Сеанс IPL', 'Успокаивающий уход', 'Повтор через 2–4 недели'],
    },
    en: {
      overview: 'Forever Young IPL protocols deliver individualized gene-level photo-rejuvenation sessions using Sciton technology.',
      indications: ['Age-related aging', 'Reduced elasticity', 'Hyperpigmentation', 'Photoaging', 'Preventive rejuvenation'],
      solutions: ['Forever Young IPL protocol', 'Individual energy settings', '3–5 session course', 'SPF skincare', 'Long-term monitoring'],
      benefits: ['Gene-level renewal', 'Painless treatment', 'Original Sciton equipment', 'Dermatologist supervision', 'Long-lasting effect'],
      process: ['Dermatologist consultation', 'Skin prep and cleansing', 'IPL session (15–45 min)', 'Soothing aftercare', 'Repeat every 2–4 weeks'],
    },
  },
};

const KEYWORD_RULES: { key: string; patterns: string[] }[] = [
  { key: 'ultratovush-yuz', patterns: ['ultratovush', 'ultrazvuk', 'ultrasonic', 'ультразвуков', 'ultrasound facial', 'ultrasound cleansing'] },
  { key: 'fy-protocols', patterns: ['fy-protocol', 'forever young ipl', 'gen-revo'] },
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
  { key: 'biopsiya', patterns: ['biopsi', 'биопси', 'skin biopsy', 'биопсия кожи'] },
  { key: 'gistolog', patterns: ['gistolog', 'гистолог', 'histopath', 'gistologik'] },
  { key: 'moh-surgery', patterns: ['mohs', 'moh ', 'моха', 'микрограф'] },
  { key: 'consult-group', patterns: ['guruhli', 'группов', 'group consult'] },
  { key: 'dermatosc-lessons', patterns: ['dermatoscop', 'дерматоскоп', 'o\'quv dars', 'практическ'] },
  { key: 'podolog-dermatolog', patterns: ['podolog', 'подолог', 'tirnoq', 'ногт'] },
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
