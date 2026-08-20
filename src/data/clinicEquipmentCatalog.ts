import type { Locale, PriceItem } from '../types';

export interface LocalizedEquipmentText {
  uz: string;
  ru: string;
  en: string;
}

export interface ClinicEquipmentServiceLink {
  categoryId: string;
  subId: string;
  label?: LocalizedEquipmentText;
}

export interface ClinicEquipmentEntry {
  id: string;
  title: LocalizedEquipmentText;
  shortDescription: LocalizedEquipmentText;
  fullDescription: LocalizedEquipmentText;
  manufacturer: LocalizedEquipmentText;
  image: string;
  serviceLinks: ClinicEquipmentServiceLink[];
  /** Preyskurant bo'lim ID lari (jumladan asosiy ro'yxatdan yashirilganlar) */
  priceCategoryIds: string[];
  /** Bo'lim ichida nom bo'yicha filtrlash */
  priceKeywords?: string[];
  /** Narx katalogda yo'q bo'lsa */
  priceNote?: LocalizedEquipmentText;
  directions: LocalizedEquipmentText[];
  indications: LocalizedEquipmentText[];
  clinicUsage: LocalizedEquipmentText[];
  process: LocalizedEquipmentText[];
}

function L(uz: string, ru: string, en: string): LocalizedEquipmentText {
  return { uz, ru, en };
}

/** Radeski klinikasi apparat parki — faqat klinikada mavjud uskunalar */
export const APPARATLI_KOSMETOLOGIYA_EQUIPMENT_IDS = [
  'plazmoforez',
  'daavlin-neolux',
  'daavlin-m-series',
  'daavlin-aquex',
  'deka-co2-laser',
  'deka-alexandrite-laser',
  'surgitron-radiofrequency',
  'ipl-inmode',
  'derma-v-lutronic',
  'hollywood-spectra-lutronic',
] as const;

export type ClinicEquipmentId = (typeof APPARATLI_KOSMETOLOGIYA_EQUIPMENT_IDS)[number];

export const CLINIC_EQUIPMENT_CATALOG: Record<ClinicEquipmentId, ClinicEquipmentEntry> = {
  plazmoforez: {
    id: 'plazmoforez',
    title: L('Plazmoforez', 'Плазмофорез', 'Plasmapheresis'),
    shortDescription: L(
      'Plazma ajratish va tozalash usuli — teri va organizm uchun kompleks regeneratsiya protokoli.',
      'Метод плазмосепарации и очищения — комплексный регенеративный протокол для кожи и организма.',
      'Plasma separation and cleansing — a comprehensive regenerative protocol for skin and the body.',
    ),
    fullDescription: L(
      'Plazmoforez — qon plazmasini maxsus apparat yordamida ajratib, tozalangan plazmani qayta infuziya qilish usuli. Radeski klinikasida teri yangilanishi, immunitetni qo\'llab-quvvatlash va kompleks dermatologik protokollarning bir qismi sifatida qo\'llaniladi. Muolaja shifokor konsultatsiyasi va laboratoriya ko\'rsatkichlariga qarab rejalashtiriladi.',
      'Плазмофорез — метод сепарации плазмы крови с последующей инфузией очищенной плазмы. В клинике Radeski применяется для обновления кожи, поддержки иммунитета и в составе комплексных дерматологических протоколов. Процедура планируется после консультации врача и оценки лабораторных показателей.',
      'Plasmapheresis separates blood plasma and reinfuses purified plasma. At Radeski Clinic it supports skin renewal, immune balance, and complex dermatology protocols. Treatment is planned after physician consultation and lab assessment.',
    ),
    manufacturer: L('Professional plasmapheresis system', 'Профессиональная система плазмофореза', 'Professional plasmapheresis system'),
    image: '/gallery/4.webp',
    serviceLinks: [
      { categoryId: 'dermatologiya', subId: 'fototerapiya' },
      { categoryId: 'in-ekcionnaya-kosmetologiya', subId: 'biorev' },
    ],
    priceCategoryIds: ['fizioterapiya'],
    priceKeywords: ['плазмафорез', 'plazmaforez', 'plazmoforez'],
    directions: [
      L('Fizioterapiya va regeneratsiya', 'Физиотерапия и регенерация', 'Physiotherapy and regeneration'),
      L('Kompleks dermatologik protokollar', 'Комплексные дерматологические протоколы', 'Complex dermatology protocols'),
    ],
    indications: [
      L('Teri yangilanishi va tiklanish protokollari', 'Протоколы обновления и восстановления кожи', 'Skin renewal and recovery protocols'),
      L('Kompleks teri kasalliklari davolash rejasi', 'Комплексные планы лечения кожных заболеваний', 'Complex skin disease treatment plans'),
      L('Shifokor ko\'rsatmasi bo\'yicha regeneratsiya', 'Регенерация по назначению врача', 'Regeneration per physician protocol'),
    ],
    clinicUsage: [
      L(
        'Preyskurantda «Plazmaforez» — 1 500 000 so\'m. Aniq protokol, seanslar soni va tayyorgarlik shifokor konsultatsiyasida belgilanadi.',
        'В прейскуранте «Плазмафорез» — 1 500 000 сум. Протокол, число сеансов и подготовка определяются на консультации врача.',
        'Price list: Plasmapheresis — 1,500,000 UZS. Protocol, session count and preparation are set at physician consultation.',
      ),
    ],
    process: [
      L('Konsultatsiya va laboratoriya ko\'rsatkichlari', 'Консультация и лабораторные показатели', 'Consultation and lab tests'),
      L('Plazmoforez seansi', 'Сеанс плазмофореза', 'Plasmapheresis session'),
      L('Kuzatuv va keyingi parvarish tavsiyasi', 'Наблюдение и рекомендации по уходу', 'Follow-up and care recommendations'),
    ],
  },
  'daavlin-neolux': {
    id: 'daavlin-neolux',
    title: L('Daavlin NeoLux fototerapiya', 'Фототерапия Daavlin NeoLux', 'Daavlin NeoLux phototherapy'),
    shortDescription: L(
      'Daavlin NeoLux — tor spektrli UVB fototerapiya apparati.',
      'Daavlin NeoLux — аппарат узкополосной UVB-фототерапии.',
      'Daavlin NeoLux — narrow-band UVB phototherapy device.',
    ),
    fullDescription: L(
      'Daavlin NeoLux — Germaniya va AQShda ishlab chiqarilgan professional fototerapiya tizimi. Tor to\'lqinli UVB nurlanish psoriaz, vitiligo, ekzema va boshqa surunkali teri kasalliklarini davolashda qo\'llaniladi. Radeski klinikasida individual dozalar, kurs rejasi va remissiya kuzatuvi dermatolog nazoratida olib boriladi.',
      'Daavlin NeoLux — профессиональная фототерапевтическая система. Узкополосное UVB-излучение применяется при псориазе, витилиго, экземе и других хронических заболеваниях кожи. В клинике Radeski индивидуальные дозы, курс и контроль ремиссии проводятся под наблюдением дерматолога.',
      'Daavlin NeoLux is a professional phototherapy system. Narrow-band UVB treats psoriasis, vitiligo, eczema and other chronic skin conditions. At Radeski Clinic, dosing, courses and remission monitoring are supervised by a dermatologist.',
    ),
    manufacturer: L('Daavlin (AQSh)', 'Daavlin (США)', 'Daavlin (USA)'),
    image: '/gallery/7.webp',
    serviceLinks: [{ categoryId: 'dermatologiya', subId: 'fototerapiya' }],
    priceCategoryIds: ['daavlin-neolux'],
    directions: [
      L('Dermatologiya — fototerapiya', 'Дерматология — фототерапия', 'Dermatology — phototherapy'),
      L('Surunkali teri kasalliklari davolash', 'Лечение хронических заболеваний кожи', 'Chronic skin disease treatment'),
    ],
    indications: [
      L('Psoriaz plakalari', 'Бляшечный псориаз', 'Plaque psoriasis'),
      L('Vitiligo', 'Витилиго', 'Vitiligo'),
      L('Atopik dermatit va ekzema', 'Атопический дерматит и экзема', 'Atopic dermatitis and eczema'),
    ],
    clinicUsage: [
      L(
        'Preyskurant: Neo Lux seansi — 70 000 so\'m. Kurs davomiyligi va chastota kasallik faolligiga qarab individual belgilanadi.',
        'Прейскурант: сеанс Neo Lux — 70 000 сум. Длительность и частота курса определяются индивидуально.',
        'Price list: Neo Lux session — 70,000 UZS. Course length and frequency are individualized.',
      ),
    ],
    process: [
      L('Dermatolog ko\'rigi va zona baholash', 'Осмотр дерматолога и оценка зон', 'Dermatologist exam and zone assessment'),
      L('NeoLux fototerapiya seansi', 'Сеанс фототерапии NeoLux', 'NeoLux phototherapy session'),
      L('Natija kuzatuvi va keyingi seans rejalashtirish', 'Контроль результата и план следующего сеанса', 'Result monitoring and next session planning'),
    ],
  },
  'daavlin-m-series': {
    id: 'daavlin-m-series',
    title: L('Daavlin M series fototerapiya', 'Фототерапия Daavlin M series', 'Daavlin M series phototherapy'),
    shortDescription: L(
      'Daavlin M series — modulli fototerapiya kabineti, keng zona qamrovi.',
      'Daavlin M series — модульный фототерапевтический кабинет с широким охватом зон.',
      'Daavlin M series — modular phototherapy cabinet for broad treatment areas.',
    ),
    fullDescription: L(
      'Daavlin M series — Daavlin ishlab chiqaruvchisining modulli fototerapiya tizimi. Tana, qo\'l-oyoq va keng yuzalar uchun kursli UVB protokollari qo\'llaniladi. Radeski klinikasida psoriaz, vitiligo va boshqa fotosensitiv kasalliklarda samarali kurs davolanish uchun ishlatiladi.',
      'Daavlin M series — модульная фототерапевтическая система Daavlin. Подходит для курсового UVB-лечения тела, конечностей и обширных зон. В клинике Radeski эффективна при псориазе, витилиго и других фоточувствительных заболеваниях.',
      'Daavlin M series is Daavlin\'s modular phototherapy system for body, limbs and large areas. At Radeski Clinic it supports effective course treatment for psoriasis, vitiligo and other photosensitive conditions.',
    ),
    manufacturer: L('Daavlin (AQSh)', 'Daavlin (США)', 'Daavlin (USA)'),
    image: '/gallery/6.webp',
    serviceLinks: [{ categoryId: 'dermatologiya', subId: 'fototerapiya' }],
    priceCategoryIds: ['m-series'],
    directions: [
      L('Dermatologiya — kursli fototerapiya', 'Дерматология — курсовая фототерапия', 'Dermatology — course phototherapy'),
      L('Tana va ekstremitetalar zonasi', 'Зоны тела и конечностей', 'Body and extremity zones'),
    ],
    indications: [
      L('Psoriaz (tana va ekstremitetalar)', 'Псориаз (тело и конечности)', 'Psoriasis (body and limbs)'),
      L('Vitiligo keng zonalar', 'Витилиго обширных зон', 'Vitiligo of large areas'),
      L('Surunkali dermatozlar', 'Хронические дерматозы', 'Chronic dermatoses'),
    ],
    clinicUsage: [
      L(
        'Preyskurant: qo\'l — 50 000 so\'m, oyoq — 50 000 so\'m, qo\'l+oyoq — 90 000 so\'m. Kurs rejasi shifokor belgilaydi.',
        'Прейскурант: руки — 50 000 сум, ноги — 50 000 сум, руки+ноги — 90 000 сум. Курс назначает врач.',
        'Price list: arms — 50,000 UZS, legs — 50,000 UZS, arms+legs — 90,000 UZS. Course planned by physician.',
      ),
    ],
    process: [
      L('Konsultatsiya va zona tanlash', 'Консультация и выбор зоны', 'Consultation and zone selection'),
      L('M series fototerapiya seansi', 'Сеанс фототерапии M series', 'M series phototherapy session'),
      L('Kurs bo\'yicha kuzatuv', 'Контроль по курсу', 'Course follow-up'),
    ],
  },
  'daavlin-aquex': {
    id: 'daavlin-aquex',
    title: L('Daavlin Aquex ionoforez', 'Ионофорез Daavlin Aquex', 'Daavlin Aquex iontophoresis'),
    shortDescription: L(
      'Daavlin Aquex — ionoforez apparati, dori preparatlarini teriga yetkazish.',
      'Daavlin Aquex — аппарат ионофореза для доставки препаратов в кожу.',
      'Daavlin Aquex — iontophoresis device for transdermal drug delivery.',
    ),
    fullDescription: L(
      'Daavlin Aquex — ionoforez (elektr toki yordamida dori moddalarini teriga yetkazish) uskunasi. Teri kasalliklarini mahalliy davolash, terini namlantirish va shifokor tayinlagan preparatlarni chuqur qatlamlarga yetkazish uchun qo\'llaniladi. Radeski klinikasida dermatolog nazoratida, individual protokol asosida ishlatiladi.',
      'Daavlin Aquex — аппарат ионофореза для трансдермальной доставки лекарственных средств. Применяется для местного лечения кожных заболеваний, увлажнения и введения препаратов в глубокие слои кожи. В клинике Radeski используется под контролем дерматолога по индивидуальному протоколу.',
      'Daavlin Aquex delivers medications into the skin via iontophoresis. It supports local treatment of skin conditions, hydration and deep delivery of prescribed agents. At Radeski Clinic it is used under dermatologist supervision with individualized protocols.',
    ),
    manufacturer: L('Daavlin (AQSh)', 'Daavlin (США)', 'Daavlin (USA)'),
    image: '/gallery/5.webp',
    serviceLinks: [{ categoryId: 'dermatologiya', subId: 'fototerapiya' }],
    priceCategoryIds: ['fizioterapiya'],
    priceKeywords: ['ионофорез', 'ionoforez', 'aquex'],
    priceNote: L(
      'Aquex ionoforez narxi protokol va zona bo\'yicha konsultatsiyada aniqlanadi.',
      'Стоимость ионофореза Aquex определяется на консультации по протоколу и зоне.',
      'Aquex iontophoresis pricing is confirmed at consultation based on protocol and zone.',
    ),
    directions: [
      L('Dermatologiya — mahalliy davolash', 'Дерматология — местное лечение', 'Dermatology — local treatment'),
      L('Terini chuqur namlantirish va tiklash', 'Глубокое увлажнение и восстановление кожи', 'Deep skin hydration and recovery'),
    ],
    indications: [
      L('Teri quruqligi va dehidratatsiya', 'Сухость и обезвоженность кожи', 'Dryness and skin dehydration'),
      L('Mahalliy teri kasalliklari protokollari', 'Протоколы местного лечения кожи', 'Local skin treatment protocols'),
      L('Shifokor tayinlagan preparatlar bilan terapiya', 'Терапия с назначенными препаратами', 'Therapy with prescribed agents'),
    ],
    clinicUsage: [
      L(
        'Ionoforez seansi davomiyligi va preparat tanlovi kasallik turiga qarab belgilanadi. Qabulga yozilish orqali aniq narx va reja olishingiz mumkin.',
        'Длительность сеанса и выбор препарата зависят от заболевания. Запишитесь на приём для точной цены и плана.',
        'Session length and preparation depend on the condition. Book a consultation for exact pricing and plan.',
      ),
    ],
    process: [
      L('Konsultatsiya va teri tayyorgarligi', 'Консультация и подготовка кожи', 'Consultation and skin preparation'),
      L('Aquex ionoforez seansi', 'Сеанс ионофореза Aquex', 'Aquex iontophoresis session'),
      L('Parvarish va kuzatuv tavsiyasi', 'Рекомендации по уходу и наблюдению', 'Aftercare and follow-up advice'),
    ],
  },
  'deka-co2-laser': {
    id: 'deka-co2-laser',
    title: L('DEKA CO₂ Laser SmartXide Punto', 'DEKA CO₂ Laser SmartXide Punto', 'DEKA CO₂ Laser SmartXide Punto'),
    shortDescription: L(
      'Fraksion CO₂ lazer — teri yangilanishi, postakne chandiqlari va PinPoint rejimi.',
      'Фракционный CO₂-лазер — обновление кожи, рубцы постакне и режим PinPoint.',
      'Fractional CO₂ laser — skin renewal, post-acne scars and PinPoint mode.',
    ),
    fullDescription: L(
      'DEKA SmartXide Punto CO₂-lazer Radeski Skin Clinic’da fraksion mikrozonalar orqali kollagen yangilanishini rag‘batlantiradi, teri relefini tekislaydi va shifokor ko‘rsatmasi bo‘yicha xavfsiz o‘smalarni nazoratli olib tashlaydi. PinPoint rejimi so‘g‘al va papillomalarni minimal travma bilan davolash imkonini beradi. Farg‘ona va Qo‘qon filiallarida har bir bemor uchun energiya, chuqurlik va maydon dermatolog tomonidan individual sozlanadi.',
      'Лазер DEKA SmartXide Punto CO₂ в Radeski Skin Clinic стимулирует обновление коллагена через фракционные микрозоны, выравнивает рельеф и по показаниям удаляет доброкачественные образования. Режим PinPoint позволяет работать с бородавками и папилломами с минимальной травмой. В филиалах Ферганы и Коканда энергия, глубина и зона настраиваются индивидуально дерматологом.',
      'DEKA SmartXide Punto CO₂ at Radeski Skin Clinic stimulates collagen renewal through fractional micro-zones, smooths texture and removes benign lesions when indicated. PinPoint mode supports warts and papillomas with minimal trauma. At Fergana and Kokand branches, energy, depth and treatment field are set individually by a dermatologist.',
    ),
    manufacturer: L('DEKA (Italiya)', 'DEKA (Италия)', 'DEKA (Italy)'),
    image: '/daavlin/model-deka-co2-laser.webp',
    serviceLinks: [
      {
        categoryId: 'apparatnaya-kosmetologiya',
        subId: 'lazer-biorev',
        label: L('Fraksion CO₂ teri yangilanishi', 'Фракционное CO₂-омоложение', 'Fractional CO₂ renewal'),
      },
      {
        categoryId: 'hirurgicheskaya-dermatologiya',
        subId: 'moh-surgery',
        label: L('PinPoint — o‘smalar olib tashlash', 'PinPoint — удаление образований', 'PinPoint — lesion removal'),
      },
    ],
    priceCategoryIds: [
      'lazernoe-udalenie-dobrokachestvennyh-novoobrazovaniy-na-deka-smarxide-punto-so2-lazere',
      'lazernaya-ablyatsionnaya-shlifovka-kozhi-poverhnostnaya',
      'lazernaya-ablyatsionnaya-shlifovka-kozhi-srednyaya',
      'lazernaya-ablyatsionnaya-shlifovka-kozhi-glubokaya',
    ],
    directions: [
      L('Fraksion CO₂ teri yangilanishi', 'Фракционное CO₂-обновление', 'Fractional CO₂ skin renewal'),
      L('Postakne chandiqlari va relef', 'Постакне и рубцы', 'Post-acne scars and texture'),
      L('PinPoint — so‘g‘al va papillomalar', 'PinPoint — бородavки и папилломы', 'PinPoint — warts and papillomas'),
    ],
    indications: [
      L('Postakne chandiqlari va teri teksturasi', 'Рубцы постакне и текстура кожи', 'Post-acne scars and skin texture'),
      L('Yoshga bog‘liq teri o‘zgarishlari', 'Возрастные изменения кожи', 'Age-related skin changes'),
      L('Shifokor tasdiqlagan xavfsiz o‘smalar', 'Доброкачественные образования по назначению врача', 'Physician-approved benign lesions'),
    ],
    clinicUsage: [
      L(
        'Preyskurantda DEKA SmartXide CO₂ bilan olib tashlash va ablyatsion shlifovka (yuza, o‘rta, chuqur) pozitsiyalari mavjud. Aniq protokol konsultatsiyada belgilanadi.',
        'В прейскуранте — удаление на DEKA SmartXide CO₂ и абляционная шлифовка (поверхностная, средняя, глубокая). Протокол определяется на консультации.',
        'Price list includes DEKA SmartXide CO₂ removal and ablative resurfacing (superficial, medium, deep). Protocol is set at consultation.',
      ),
    ],
    process: [
      L('Dermatolog ko‘rigi va muammo bahosi', 'Осмотр дерматолога и оценка задачи', 'Dermatologist exam and goal assessment'),
      L('CO₂ yoki PinPoint seansi', 'Сеанс CO₂ или PinPoint', 'CO₂ or PinPoint session'),
      L('Parvarish, SPF va kuzatuv', 'Уход, SPF и наблюдение', 'Aftercare, SPF and follow-up'),
    ],
  },
  'deka-alexandrite-laser': {
    id: 'deka-alexandrite-laser',
    title: L('DEKA Alexandrite Laser 755 nm', 'DEKA Alexandrite Laser 755 nm', 'DEKA Alexandrite Laser 755 nm'),
    shortDescription: L(
      '755 nm aleksandrit lazer — lazerniy epilyatsiya va pigment muolajalari.',
      'Александритовый лазер 755 нм — лазерная эпиляция и работа с пигментом.',
      '755 nm alexandrite laser — laser hair removal and pigment care.',
    ),
    fullDescription: L(
      'DEKA aleksandrit lazer 755 nm to‘lqin uzunligida melanin va soch folikulasi ustiga yuqori selektiv ta’sir qiladi. Radeski Skin Clinic’da lazerniy epilyatsiya, pigment dog‘lari va ayrim vascular ko‘rinishlar uchun shifokor protokoli asosida qo‘llaniladi. Soch turi, teri fototipi va zona baholanadi; seanslar oralig‘i va energiya individual reja bo‘yicha belgilanadi.',
      'Александритовый лазер DEKA 755 нм селективно воздействует на меланин и волосяной фолликул. В Radeski Skin Clinic применяется для лазерной эпиляции, пигментных пятен и отдельных сосудистых проявлений по протоколу врача. Оцениваются тип волос, фототип и зона; интервалы и энергия задаются индивидуальным планом.',
      'DEKA alexandrite laser at 755 nm selectively targets melanin and hair follicles. At Radeski Skin Clinic it supports laser hair removal, pigmented spots and selected vascular signs under medical protocol. Hair type, phototype and zone are assessed; intervals and energy follow an individual plan.',
    ),
    manufacturer: L('DEKA (Italiya)', 'DEKA (Италия)', 'DEKA (Italy)'),
    image: '/daavlin/model-deka-alexandrite-laser.webp',
    serviceLinks: [
      {
        categoryId: 'apparatnaya-kosmetologiya',
        subId: 'ipl-inmode',
        label: L('Lazerniy epilyatsiya', 'Лазерная эпиляция', 'Laser hair removal'),
      },
    ],
    priceCategoryIds: ['lazernaya-epilyatsiya'],
    directions: [
      L('Lazerniy epilyatsiya', 'Лазерная эпиляция', 'Laser hair removal'),
      L('Pigment dog‘lari', 'Пигментные пятна', 'Pigment spots'),
      L('Ayrim vascular ko‘rinishlar', 'Отдельные сосудистые проявления', 'Selected vascular signs'),
    ],
    indications: [
      L('Ortiqcha tuk o‘sishi', 'Нежелательные волосы', 'Unwanted hair growth'),
      L('Pigmentatsiya va dog‘lar', 'Пигментация и пятна', 'Pigmentation and spots'),
      L('Teri turi va kontraindikatsiyalar hisobga olinadi', 'С учётом типа кожи и противопоказаний', 'With skin type and contraindications in mind'),
    ],
    clinicUsage: [
      L(
        'Preyskurantda lazer epilyatsiya pozitsiyalari mavjud — zona va seanslar soni shifokor belgilaydi. Test seans yoki to‘liq kurs individual tanlanadi.',
        'В прейскуранте — позиции лазерной эпиляции; зону и число сеансов назначает врач. Тест или полный курс выбирается индивидуально.',
        'Price list includes laser hair removal positions; zone and session count are set by the physician. Test spot or full course is chosen individually.',
      ),
    ],
    process: [
      L('Teri va soch turi baholanadi', 'Оцениваются кожа и тип волос', 'Skin and hair type assessment'),
      L('DEKA aleksandrit seansi', 'Сеанс александритового лазера DEKA', 'DEKA alexandrite laser session'),
      L('Oraliq va quyosh himoyasi tavsiyasi', 'Интервалы и рекомендации SPF', 'Intervals and sun protection advice'),
    ],
  },
  'surgitron-radiofrequency': {
    id: 'surgitron-radiofrequency',
    title: L('Surgitron Radiofrequency', 'Surgitron Radiofrequency', 'Surgitron Radiofrequency'),
    shortDescription: L(
      'Radioto‘lqin jarrohligi — papillomalar, mollyusk va xavfsiz o‘smalarni minimal iz bilan olib tashlash.',
      'Радиоволновая хирургия — удаление папиллом, моллюска и доброкачественных образований с минимальным рубцом.',
      'Radiofrequency surgery — papillomas, molluscum and benign lesions with minimal scarring.',
    ),
    fullDescription: L(
      'Surgitron radioto‘lqin ignasi yumshoq kesish va koagulyatsiya beradi — atrofdagi sog‘lom to‘qimagaga minimal issiqlik tarqalishi bilan. Radeski Skin Clinic’da papillomalar, kontagioz mollyusk, keratoma va shifokor tasdiqlagan xavfsiz o‘smalar olib tashlanadi; murakkab anatomik zonalar (ko‘z qovoqlari atrofi, inguinal hudud) uchun mos. Har bir o‘sma oldin dermatoskopik baholanadi.',
      'Радиоволновая игла Surgitron обеспечивает мягкий разрез и коagulyацию с минимальным нагревом соседних тканей. В Radeski Skin Clinic удаляют папилломы, контагиозный моллюск, кератомы и доброкачественные образования по показаниям; подходит для деликатных зон. Каждое образование предварительно оценивают дерматоскопически.',
      'Surgitron RF provides gentle cutting and coagulation with minimal heat spread to surrounding tissue. At Radeski Skin Clinic papillomas, molluscum, keratomas and physician-approved benign lesions are removed; suited to delicate anatomical areas. Each lesion is assessed dermoscopically first.',
    ),
    manufacturer: L('Ellman (AQSh)', 'Ellman (США)', 'Ellman (USA)'),
    image: '/daavlin/model-surgitron-radiofrequency.webp',
    serviceLinks: [
      {
        categoryId: 'hirurgicheskaya-dermatologiya',
        subId: 'moh-surgery',
        label: L('Radioto‘lqin jarrohligi', 'Радиоволновая хирургия', 'Radiofrequency surgery'),
      },
    ],
    priceCategoryIds: ['hirurgicheskaya-dermatologiya', 'hirurgicheskaya-dematologiya', 'kriohirurgiya'],
    priceKeywords: ['радиоволнов', 'radioto', 'surgitron', 'моллюск', 'mollyusk', 'papillom'],
    directions: [
      L('Xirurgik dermatologiya — radioto‘lqin', 'Хирургическая дерматология — радиоволна', 'Surgical dermatology — RF'),
      L('Papilloma va mollyusk olib tashlash', 'Удаление папиллом и моллюска', 'Papilloma and molluscum removal'),
      L('Murakkab anatomik zonalar', 'Сложные анатомические зоны', 'Complex anatomical areas'),
    ],
    indications: [
      L('Papillomalar va yumshoq fibromalar', 'Папилломы и мягкие фибромы', 'Papillomas and soft fibromas'),
      L('Kontagioz mollyusk', 'Контагиозный моллюск', 'Molluscum contagiosum'),
      L('Keratoma va shifokor tasdiqlagan nevuslar', 'Кератомы и нevусы по показаниям', 'Keratomas and indicated nevi'),
    ],
    clinicUsage: [
      L(
        'Preyskurantda radioto‘lqin xirurgiyasi pozitsiyalari mavjud — ichki/epidermal o‘smalar, murakkab zonalar va mollyusk uchun alohida tariflar. Anesteziya kerak bo‘lsa shifokor belgilaydi.',
        'В прейскуранте — позиции радиоволновой хирургии: внутридермальные/эпидермальные образования, сложные зоны и моллюск. Анестезия назначается при необходимости.',
        'Price list includes radiofrequency surgery positions — intradermal/epidermal lesions, complex zones and molluscum. Anaesthesia when needed is ordered by the physician.',
      ),
    ],
    process: [
      L('Dermatoskopik ko‘rik va ko‘rsatmalar', 'Дерматоскопия и показания', 'Dermoscopy and indications'),
      L('Surgitron RF muolajasi', 'Процедура Surgitron RF', 'Surgitron RF procedure'),
      L('Parvarish va kuzatuv tavsiyalari', 'Рекомendatsii по уходу и наблюдению', 'Aftercare and follow-up advice'),
    ],
  },
  'ipl-inmode': {
    id: 'ipl-inmode',
    title: L('IPL InMode', 'IPL InMode', 'IPL InMode'),
    shortDescription: L(
      'InMode IPL — pigmentatsiya, qon tomirlari va teri tonini yaxshilash.',
      'InMode IPL — пигментация, сосуды и тон кожи.',
      'InMode IPL — pigmentation, vessels and skin tone improvement.',
    ),
    fullDescription: L(
      'InMode IPL — yuqori intensivlikli impulsli yorug\'lik (IPL) tizimi. Pigment dog\'lar, qon tomir tarmoqlari, yuz qizarishi va yoshga bog\'liq o\'zgarishlarni jarrohliksiz bartaraf etishga yordam beradi. Radeski klinikasida yuz, bo\'yin, dekolté va alohida zonalar uchun preyskurantda aniq narxlar bilan xizmat ko\'rsatiladi.',
      'InMode IPL — система импульсного света высокой интенсивности. Помогает безоперационно устранить пигментные пятна, сосуды, покраснения и возрастные изменения. В клинике Radeski процедуры для лица, шеи, декольте и отдельных зон представлены в прейскуранте.',
      'InMode IPL is a high-intensity pulsed-light system for non-surgical treatment of pigment, vessels, redness and age-related changes. At Radeski Clinic, face, neck, décolleté and individual zones are listed in the price catalog.',
    ),
    manufacturer: L('InMode', 'InMode', 'InMode'),
    image: '/gallery/3.webp',
    serviceLinks: [{ categoryId: 'apparatnaya-kosmetologiya', subId: 'ipl-inmode' }],
    priceCategoryIds: ['fotoomolozhenie-ipl-lumecca'],
    directions: [
      L('Apparatli kosmetologiya — IPL foto-yangilash', 'Аппаратная косметология — IPL фотоомоложение', 'Device cosmetology — IPL photo-rejuvenation'),
      L('Pigmentatsiya va qon tomir muammolari', 'Пигментация и сосудистые проблемы', 'Pigmentation and vascular concerns'),
    ],
    indications: [
      L('Pigment dog\'lar va melasma', 'Пигментные пятна и мелазма', 'Pigment spots and melasma'),
      L('Qon tomirlari va rozaseya belgilari', 'Сосудистые проявления и розацеа', 'Vascular lesions and rosacea signs'),
      L('Teri rangidagi notekislik', 'Неровный тон кожи', 'Uneven skin tone'),
    ],
    clinicUsage: [
      L(
        'Preyskurantda yuz, yuz+bo\'yin+dekolté, qo\'llar va alohida zonalar uchun pozitsiyalar mavjud. Shifokor teri holatiga qarab 3–5 seanslik kurs tavsiya qilishi mumkin.',
        'В прейскуранте — лицо, лицо+шея+декольте, руки и отдельные зоны. Врач может рекомендовать курс из 3–5 сеансов.',
        'Price list includes face, face+neck+décolleté, hands and individual zones. Physician may recommend a 3–5 session course.',
      ),
    ],
    process: [
      L('Konsultatsiya va teri tayyorgarligi', 'Консультация и подготовка кожи', 'Consultation and skin preparation'),
      L('IPL InMode seansi', 'Сеанс IPL InMode', 'IPL InMode session'),
      L('SPF va tinchlantiruvchi parvarish', 'SPF и успокаивающий уход', 'SPF and soothing aftercare'),
    ],
  },
  'derma-v-lutronic': {
    id: 'derma-v-lutronic',
    title: L('Derma V (Lutronic)', 'Derma V (Lutronic)', 'Derma V (Lutronic)'),
    shortDescription: L(
      'Lutronic Derma V — qon tomir va pigmentatsiyani lazer bilan davolash.',
      'Lutronic Derma V — лазерное лечение сосудов и пигментации.',
      'Lutronic Derma V — laser treatment for vessels and pigmentation.',
    ),
    fullDescription: L(
      'Derma V — Lutronic ishlab chiqaruvchisining sosudist va pigmentatsiyaga qaratilgan lazer tizimi. Kuperoza, rozaseya, qon tomir yulduzchalari va pigment dog\'larni aniq nishonlab davolash imkonini beradi. Radeski klinikasida yuz va tana zonalarida dermatolog nazoratida qo\'llaniladi.',
      'Derma V — лазерная система Lutronic для сосудистых и пигментных изменений. Позволяет точечно лечить купероз, розацеа, сосудистые звёздочки и пигментные пятна. В клинике Radeski применяется на лице и теле под контролем дерматолога.',
      'Derma V is Lutronic\'s laser system for vascular and pigment concerns. It precisely treats couperose, rosacea, spider veins and pigment spots. At Radeski Clinic it is used on face and body under dermatologist supervision.',
    ),
    manufacturer: L('Lutronic', 'Lutronic', 'Lutronic'),
    image: '/gallery/2.webp',
    serviceLinks: [{ categoryId: 'apparatnaya-kosmetologiya', subId: 'ipl-inmode' }],
    priceCategoryIds: ['derma-v-sosudistyy-lazer-lechenie-sosudistyh-zvezdochek-kuperoza-i-rozatsii'],
    directions: [
      L('Sosudist lazer terapiya', 'Сосудистая лазерная терапия', 'Vascular laser therapy'),
      L('Kuperoza va rozaseya davolash', 'Лечение купероза и розацеа', 'Couperose and rosacea treatment'),
    ],
    indications: [
      L('Qon tomir yulduzchalari (telangiiektaziya)', 'Сосудистые звёздочки (телеангиэктазии)', 'Spider veins (telangiectasia)'),
      L('Kuperoza va yuz qizarishi', 'Купероз и покраснение лица', 'Couperose and facial redness'),
      L('Pigmentatsiya va dog\'lar', 'Пигментация и пятна', 'Pigmentation and spots'),
    ],
    clinicUsage: [
      L(
        'Preyskurantda kuperoza va rozaseya davolash, yuzdagi qon tomirlarni olib tashlash va butun yuz pigmentatsiyasi uchun alohida pozitsiyalar mavjud. Aniq narx zona va holatga qarab belgilanadi.',
        'В прейскуранте — лечение купероза и розацеа, удаление сосудов на лице, пигментация всего лица. Точная стоимость зависит от зоны и состояния.',
        'Price list includes couperose/rosacea treatment, facial vessel removal and full-face pigmentation. Exact cost depends on zone and condition.',
      ),
    ],
    process: [
      L('Dermatolog ko\'rigi va zona belgilash', 'Осмотр дерматолога и разметка зоны', 'Dermatologist exam and zone marking'),
      L('Derma V lazer seansi', 'Сеанс лазера Derma V', 'Derma V laser session'),
      L('Tiklanish va UV-himoya tavsiyasi', 'Восстановление и рекомендации SPF', 'Recovery and SPF recommendations'),
    ],
  },
  'hollywood-spectra-lutronic': {
    id: 'hollywood-spectra-lutronic',
    title: L('Hollywood Spectra (Lutronic)', 'Hollywood Spectra (Lutronic)', 'Hollywood Spectra (Lutronic)'),
    shortDescription: L(
      'Q-switch lazer — karbon piling, gold toning va pigmentatsiya davolash.',
      'Q-switch лазер — карбоновый пилинг, gold toning и лечение пигментации.',
      'Q-switch laser — carbon peel, gold toning and pigmentation treatment.',
    ),
    fullDescription: L(
      'Hollywood Spectra — Lutronic ishlab chiqaruvchisining Q-switch lazer asosidagi yuz tozalash va teri yangilanishi tizimi. Karbon piling, gold toning va pigmentatsiyani davolash protokollari mavjud. Radeski klinikasida akne, post-akne qizarishi, pigment dog\'lar va teri matligini kamaytirish uchun qo\'llaniladi.',
      'Hollywood Spectra — система лазерного очищения и обновления кожи на базе Q-switch лазера Lutronic. Доступны протоколы карбонового пилинга, gold toning и лечения пигментации. В клинике Radeski применяется при акне, постакне, пигментных пятнах и тусклости кожи.',
      'Hollywood Spectra is Lutronic\'s Q-switch laser system for facial cleansing and skin renewal. Protocols include carbon peeling, gold toning and pigmentation treatment. At Radeski Clinic it addresses acne, post-acne redness, pigment spots and dullness.',
    ),
    manufacturer: L('Lutronic', 'Lutronic', 'Lutronic'),
    image: '/gallery/8.webp',
    serviceLinks: [{ categoryId: 'apparatnaya-kosmetologiya', subId: 'ipl-inmode' }],
    priceCategoryIds: ['hooywood-spectra-lechenie-pigmentatsii-post-akne'],
    directions: [
      L('Apparatli kosmetologiya — lazer tozalash', 'Аппаратная косметология — лазерное очищение', 'Device cosmetology — laser cleansing'),
      L('Pigmentatsiya va akne izlari', 'Пигментация и следы акне', 'Pigmentation and acne marks'),
    ],
    indications: [
      L('Pigment dog\'lar va melasma', 'Пигментные пятна и мелазма', 'Pigment spots and melasma'),
      L('Akne va post-akne qizarishi', 'Акне и постакне покраснение', 'Acne and post-acne redness'),
      L('Teri matligi va tekstura', 'Тусклость и текстура кожи', 'Dullness and skin texture'),
    ],
    clinicUsage: [
      L(
        'Preyskurantda Hollywood Spectra pigmentatsiya va post-akne davolash pozitsiyalari mavjud. Protokol (karbon piling, gold toning) shifokor tanlaydi.',
        'В прейскуранте — позиции Hollywood Spectra при пигментации и постакне. Протокол (карбон-пилинг, gold toning) выбирает врач.',
        'Price list includes Hollywood Spectra for pigmentation and post-acne. Protocol (carbon peel, gold toning) is selected by the physician.',
      ),
    ],
    process: [
      L('Teri tayyorgarligi', 'Подготовка кожи', 'Skin preparation'),
      L('Hollywood Spectra lazer seansi', 'Сеанс лазера Hollywood Spectra', 'Hollywood Spectra laser session'),
      L('Tinchlantiruvchi parvarish va SPF', 'Успокаивающий уход и SPF', 'Soothing care and SPF'),
    ],
  },
};

export function getClinicEquipment(id: ClinicEquipmentId, locale: Locale): ClinicEquipmentEntry {
  return CLINIC_EQUIPMENT_CATALOG[id];
}

export function getLocalizedEquipmentText(
  text: LocalizedEquipmentText,
  locale: Locale,
): string {
  return text[locale] || text.uz;
}

export function getCategoryEquipmentList(_categoryId: string): ClinicEquipmentEntry[] {
  return APPARATLI_KOSMETOLOGIYA_EQUIPMENT_IDS.map((id) => CLINIC_EQUIPMENT_CATALOG[id]);
}

export function equipmentToSummary(entry: ClinicEquipmentEntry, locale: Locale) {
  return {
    title: getLocalizedEquipmentText(entry.title, locale),
    description: getLocalizedEquipmentText(entry.shortDescription, locale),
  };
}
