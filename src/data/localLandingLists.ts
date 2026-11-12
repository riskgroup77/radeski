import type { LocalizedCopy } from './localCommercialSeoCatalog';

/**
 * "Who is it for?" and "Treatment approach" lists of the city service pages, per topic (both
 * cities share them). The catalog entries had one- or two-word placeholders ("Plakalar",
 * "Terapiya"); these lists only restate what each topic's text in localLandingTopics already
 * says — devices, methods and prices the clinic lists — so they add no new claims.
 */
export interface LandingLists {
  whoFor: LocalizedCopy[];
  methods: LocalizedCopy[];
}

function L(uz: string, ru: string, en: string): LocalizedCopy {
  return { uz, ru, en };
}

export const LANDING_LISTS: Record<string, LandingLists> = {
  'akne-davolash': {
    whoFor: [
      L('O‘smirlik va kattalar aknesi', 'Подростковое и взрослое акне', 'Teenage and adult acne'),
      L('Yallig‘langan husnbuzar va qora nuqtalar', 'Воспалённые высыпания и чёрные точки', 'Inflamed spots and blackheads'),
      L('Akne izlari: dog‘lar va chandiqlar (postakne)', 'Следы акне: пятна и рубцы (постакне)', 'Acne marks: spots and scars (post-acne)'),
      L('O‘zi davolanib, natija bo‘lmaganlar', 'Самолечение не помогло', 'Self-treatment has not worked'),
    ],
    methods: [
      L('Dermatolog ko‘rigi, kerak bo‘lsa gormon tahlillari', 'Осмотр дерматолога, при необходимости гормональные анализы', 'Dermatologist visit, hormone tests if needed'),
      L('Tashqi va ichki dori vositalari', 'Наружные и системные препараты', 'Topical and oral medicines'),
      L('Hollywood Spectra lazeri, IPL va Face Art protokoli', 'Лазер Hollywood Spectra, IPL и протокол Face Art', 'Hollywood Spectra laser, IPL and the Face Art protocol'),
      L('Pilinglar: karbonli piling, PRX-T33', 'Пилинги: карбоновый, PRX-T33', 'Peels: carbon peel, PRX-T33'),
      L('Postakne uchun DEKA CO₂ lazer shlifovkasi', 'Шлифовка постакне лазером DEKA CO₂', 'DEKA CO₂ laser resurfacing for acne scars'),
    ],
  },
  'psoriaz-davolash': {
    whoFor: [
      L('Tirsak, tizza va tanadagi qizil, ko‘chuvchi pilakchalar', 'Красные шелушащиеся бляшки на локтях, коленях и теле', 'Red scaly plaques on elbows, knees and body'),
      L('Bosh terisi psoriazi', 'Псориаз кожи головы', 'Scalp psoriasis'),
      L('Tez-tez qaytalanadigan yoki keng tarqalgan psoriaz', 'Частые обострения или распространённый псориаз', 'Frequent flares or widespread psoriasis'),
      L('Gormonli kremlarga bog‘liqlikni kamaytirmoqchi bo‘lganlar', 'Желающим снизить зависимость от гормональных мазей', 'Wanting to rely less on steroid creams'),
    ],
    methods: [
      L('Daavlin tor polosali UVB (311 nm) fototerapiyasi', 'Узкополосная UVB-фототерапия Daavlin (311 нм)', 'Daavlin narrowband UVB phototherapy (311 nm)'),
      L('Eksimer lazer (308 nm) — alohida o‘choqlar uchun', 'Эксимерный лазер (308 нм) — для отдельных очагов', 'Excimer laser (308 nm) for single patches'),
      L('Tashqi davolash vositalari', 'Наружная терапия', 'Topical treatment'),
      L('Og‘ir holatlarda immunobiologik terapiya', 'При тяжёлом течении — иммунобиологическая терапия', 'Biologic therapy for severe cases'),
      L('Remissiyani ushlab turish rejasi', 'План поддержания ремиссии', 'A plan to keep remission'),
    ],
  },
  'vitiligo-davolash': {
    whoFor: [
      L('Terida oq dog‘lar paydo bo‘lgan yoki kengayayotganlar', 'Появились или растут белые пятна на коже', 'White patches that appeared or are spreading'),
      L('Yuz, qo‘l va ochiq joylardagi vitiligo', 'Витилиго на лице, руках и открытых участках', 'Vitiligo on the face, hands and exposed areas'),
      L('Uzoq vaqt o‘zgarmagan (barqaror) dog‘lar', 'Давно не меняющиеся (стабильные) пятна', 'Long-standing stable patches'),
    ],
    methods: [
      L('Vud lampasi va tahlillar bilan baholash', 'Оценка лампой Вуда и анализы', 'Wood’s lamp assessment and tests'),
      L('Daavlin tor polosali UVB fototerapiyasi', 'Узкополосная UVB-фототерапия Daavlin', 'Daavlin narrowband UVB phototherapy'),
      L('Eksimer lazer (308 nm) — kichik dog‘larga nuqtali', 'Эксимерный лазер (308 нм) — точечно на небольшие пятна', 'Excimer laser (308 nm) targeted at small patches'),
      L('Tashqi davolash vositalari', 'Наружная терапия', 'Topical treatment'),
      L('Barqaror dog‘lar uchun melanotsit transplantatsiyasi', 'Трансплантация меланоцитов для стабильных пятен', 'Melanocyte transplantation for stable patches'),
    ],
  },
  'rozasea-davolash': {
    whoFor: [
      L('Yuzda doimiy qizarish va ko‘rinadigan tomirlar', 'Постоянное покраснение и видимые сосуды на лице', 'Persistent facial redness and visible vessels'),
      L('Husnbuzarga o‘xshash toshmalar bilan rozatsea', 'Розацеа с высыпаниями, похожими на акне', 'Rosacea with acne-like bumps'),
      L('Issiq, quyosh yoki achchiq ovqatdan qizarish kuchayadi', 'Покраснение усиливают жара, солнце или острая еда', 'Redness worse with heat, sun or spicy food'),
    ],
    methods: [
      L('Dori vositalari bilan davolash', 'Медикаментозное лечение', 'Medical treatment'),
      L('Derma V (Lutronic) qon-tomir lazeri', 'Сосудистый лазер Derma V (Lutronic)', 'Derma V (Lutronic) vascular laser'),
      L('IPL fototerapiyasi', 'IPL-фототерапия', 'IPL phototherapy'),
      L('Face Art — yallig‘lanishni tinchlantiruvchi protokol', 'Face Art — протокол, снимающий воспаление', 'Face Art calming protocol'),
      L('Qo‘zg‘atuvchilarni aniqlash va parvarish tavsiyalari', 'Поиск провоцирующих факторов и рекомендации по уходу', 'Finding triggers and skincare advice'),
    ],
  },
  pigmentatsiya: {
    whoFor: [
      L('Melazma (gormonal, homiladorlikdan keyingi dog‘lar)', 'Мелазма (гормональные пятна, после беременности)', 'Melasma (hormonal or after pregnancy)'),
      L('Quyosh dog‘lari (lentigo) va sepkillar', 'Солнечные пятна (лентиго) и веснушки', 'Sun spots (lentigines) and freckles'),
      L('Akne izlari va qoramtir dog‘lar', 'Следы акне и тёмные пятна', 'Acne marks and dark spots'),
    ],
    methods: [
      L('Avval dermatoskopiya — dog‘ turini aniqlash', 'Сначала дерматоскопия — определить тип пятна', 'Dermatoscopy first to identify the spot'),
      L('Hollywood Spectra lazeri', 'Лазер Hollywood Spectra', 'Hollywood Spectra laser'),
      L('IPL Lumecca', 'IPL Lumecca', 'IPL Lumecca'),
      L('Pigmentga qarshi piling (Me Line)', 'Депигментирующий пилинг (Me Line)', 'Depigmenting peel (Me Line)'),
      L('Quyoshdan himoya va uy parvarishi rejasi', 'Защита от солнца и домашний уход', 'Sun protection and home care plan'),
    ],
  },
  'qon-tomir': {
    whoFor: [
      L('Yuzda qizarish va kuperoz', 'Покраснение лица и купероз', 'Facial redness and couperose'),
      L('Yuz va burun qanotlaridagi tomir to‘rlari', 'Сосудистые сеточки на лице и крыльях носа', 'Thread veins on the face and sides of the nose'),
      L('Rozatseada kengaygan tomirlar', 'Расширенные сосуды при розацеа', 'Dilated vessels in rosacea'),
    ],
    methods: [
      L('Derma V (Lutronic, Koreya) qon-tomir lazeri', 'Сосудистый лазер Derma V (Lutronic, Корея)', 'Derma V (Lutronic, Korea) vascular laser'),
      L('Tomir turi va chuqurligiga mos rejim', 'Режим под тип и глубину сосуда', 'Settings matched to vessel type and depth'),
      L('Seans 10–30 daqiqa, teri kesilmaydi', 'Сеанс 10–30 минут, без разрезов', '10–30 minute session, no incisions'),
      L('Kerak bo‘lsa 3–4 haftadan keyin takroriy seans', 'При необходимости повтор через 3–4 недели', 'Repeat session after 3–4 weeks if needed'),
    ],
  },
  'lazer-tomir': {
    whoFor: [
      L('Yuz va burundagi ko‘rinadigan tomirlar', 'Видимые сосуды на лице и носу', 'Visible vessels on the face and nose'),
      L('Oyoqdagi mayda venalar va tomir yulduzchalari', 'Мелкие вены и сосудистые звёздочки на ногах', 'Small leg veins and spider veins'),
      L('Gemangiomalar', 'Гемангиомы', 'Haemangiomas'),
      L('Tanadagi teleangiektaziyalar', 'Телеангиэктазии на теле', 'Telangiectasias on the body'),
    ],
    methods: [
      L('Derma V (Lutronic) lazeri — tomirni yopadi, teri zararlanmaydi', 'Лазер Derma V (Lutronic) — закрывает сосуд, не повреждая кожу', 'Derma V (Lutronic) laser closes the vessel without harming the skin'),
      L('Tomir diametri va joyiga qarab rejim', 'Режим по диаметру и расположению сосуда', 'Settings by vessel size and location'),
      L('Mayda tomirlar ko‘pincha 1–2 seansda', 'Мелкие сосуды часто за 1–2 сеанса', 'Small vessels often clear in 1–2 sessions'),
      L('Natijani 3–4 haftadan keyin baholash', 'Оценка результата через 3–4 недели', 'Result check after 3–4 weeks'),
    ],
  },
  'lazer-epilyatsiya': {
    whoFor: [
      L('Yuz, qo‘ltiq osti, bikini, qo‘l va oyoqdagi keraksiz tuklar', 'Нежелательные волосы на лице, подмышках, бикини, руках и ногах', 'Unwanted hair on the face, underarms, bikini, arms and legs'),
      L('Qirtishdan keyin terining qitiqlanishi va o‘sib kirgan tuklar', 'Раздражение после бритья и вросшие волосы', 'Shaving rash and ingrown hairs'),
      L('Uzoq muddatli natija xohlaganlar', 'Желающим долгосрочного результата', 'Wanting long-lasting results'),
    ],
    methods: [
      L('DEKA Moveo aleksandrit lazeri (755 nm, Italiya)', 'Александритовый лазер DEKA Moveo (755 нм, Италия)', 'DEKA Moveo alexandrite laser (755 nm, Italy)'),
      L('Sovutish tizimi — deyarli og‘riqsiz', 'Система охлаждения — почти без боли', 'Built-in cooling — almost painless'),
      L('Kurs odatda 6–8 seans, 4–8 hafta oralig‘ida', 'Курс обычно 6–8 сеансов с интервалом 4–8 недель', 'Usually 6–8 sessions, 4–8 weeks apart'),
      L('Tibbiy ma’lumotli mutaxassis bajaradi', 'Процедуру проводит специалист с медицинским образованием', 'Performed by a medically trained specialist'),
    ],
  },
  ipl: {
    whoFor: [
      L('Pigment dog‘lari va sepkillar', 'Пигментные пятна и веснушки', 'Pigment spots and freckles'),
      L('Yuzdagi qizarish va mayda tomirlar', 'Покраснение и мелкие сосуды на лице', 'Facial redness and small vessels'),
      L('Notekis teri rangi va fotoqarish', 'Неровный тон кожи и фотостарение', 'Uneven skin tone and sun damage'),
    ],
    methods: [
      L('InMode Lumecca IPL', 'InMode Lumecca IPL', 'InMode Lumecca IPL'),
      L('Teri turi va muammoga mos rejim', 'Режим под тип кожи и задачу', 'Settings for skin type and problem'),
      L('Seans 20–30 daqiqa, reabilitatsiya deyarli yo‘q', 'Сеанс 20–30 минут, почти без реабилитации', '20–30 minute session, almost no downtime'),
      L('Odatda 1–3 seans', 'Обычно 1–3 сеанса', 'Usually 1–3 sessions'),
    ],
  },
  'sogal-olib-tashlash': {
    whoFor: [
      L('Qo‘l va tanadagi so‘gallar', 'Бородавки на руках и теле', 'Warts on the hands and body'),
      L('Oyoq tagidagi og‘riqli so‘gallar', 'Болезненные подошвенные бородавки', 'Painful plantar warts'),
      L('Molluskum kontagiozum va papillomalar', 'Контагиозный моллюск и папилломы', 'Molluscum contagiosum and papillomas'),
      L('Bolalar va kattalar', 'Дети и взрослые', 'Children and adults'),
    ],
    methods: [
      L('Dermatolog ko‘rigi va dermatoskopiya', 'Осмотр дерматолога и дерматоскопия', 'Dermatologist visit and dermatoscopy'),
      L('DEKA SmartXide CO₂ lazer', 'Лазер DEKA SmartXide CO₂', 'DEKA SmartXide CO₂ laser'),
      L('Surgitron radioto‘lqin usuli', 'Радиоволновой метод Surgitron', 'Surgitron radiofrequency'),
      L('Krioxirurgiya', 'Криохирургия', 'Cryosurgery'),
      L('Mahalliy og‘riqsizlantirish, bir necha daqiqa', 'Местная анестезия, несколько минут', 'Local anaesthesia, a few minutes'),
    ],
  },
  'osma-olib-tashlash': {
    whoFor: [
      L('Xollar (nevuslar) va papillomalar', 'Родинки (невусы) и папилломы', 'Moles (naevi) and papillomas'),
      L('Keratomalar va fibromalar', 'Кератомы и фибромы', 'Keratomas and fibromas'),
      L('Aterom va lipomalar', 'Атеромы и липомы', 'Atheromas and lipomas'),
      L('Kiyim ishqalaydigan yoki tez o‘zgarayotgan o‘smalar', 'Образования, которые натирает одежда или которые быстро меняются', 'Growths rubbed by clothing or changing quickly'),
    ],
    methods: [
      L('Avval dermatoonkolog ko‘rigi va dermatoskopiya', 'Сначала осмотр дерматоонколога и дерматоскопия', 'Dermato-oncologist visit and dermatoscopy first'),
      L('DEKA SmartXide CO₂ lazer', 'Лазер DEKA SmartXide CO₂', 'DEKA SmartXide CO₂ laser'),
      L('Surgitron radioto‘lqin yoki krioxirurgiya', 'Радиоволна Surgitron или криохирургия', 'Surgitron radiofrequency or cryosurgery'),
      L('Jarrohlik usuli (kerak bo‘lsa)', 'Хирургическое удаление (при показаниях)', 'Surgical removal when indicated'),
      L('Kerak bo‘lsa gistologik tekshiruv', 'При необходимости гистологическое исследование', 'Histology when needed'),
    ],
  },
  'tirnoq-zamburug': {
    whoFor: [
      L('Tirnoq sarg‘aygan, qalinlashgan yoki mo‘rt bo‘lsa', 'Ноготь пожелтел, утолщился или крошится', 'Yellow, thick or brittle nails'),
      L('Tirnoq ko‘chib chiqayotgan bo‘lsa', 'Ноготь отслаивается', 'A nail lifting off'),
      L('Oilada zamburug‘ boshqalarga yuqqan bo‘lsa', 'Грибок передался членам семьи', 'Fungus spreading in the family'),
      L('Oldingi davolashdan keyin qaytgan zamburug‘', 'Грибок вернулся после лечения', 'Fungus back after earlier treatment'),
    ],
    methods: [
      L('Podolog yoki dermatolog ko‘rigi', 'Осмотр подолога или дерматолога', 'Podiatrist or dermatologist visit'),
      L('Tirnoqdan zamburug‘ tahlili', 'Анализ ногтя на грибок', 'Nail fungus test'),
      L('Tirnoqni apparat bilan tozalash', 'Аппаратная обработка ногтя', 'Device nail cleaning'),
      L('Lazer terapiyasi', 'Лазерная терапия', 'Laser therapy'),
      L('Dori vositalari va sog‘lom tirnoq o‘sguncha nazorat', 'Препараты и контроль до отрастания здорового ногтя', 'Medicines and follow-up until a healthy nail grows'),
    ],
  },
  'soch-tokilish': {
    whoFor: [
      L('Kuniga 100 tadan ko‘p soch to‘kilsa', 'Выпадает больше 100 волос в день', 'Losing more than 100 hairs a day'),
      L('Soch siyraklashgan yoki o‘choqlar paydo bo‘lgan', 'Волосы поредели или появились очаги', 'Thinning hair or bald patches'),
      L('Stress, tug‘ruq yoki kasallikdan keyingi to‘kilish', 'Выпадение после стресса, родов или болезни', 'Shedding after stress, childbirth or illness'),
      L('Androgenetik to‘kilish (erkaklar va ayollar)', 'Андрогенетическое выпадение (мужчины и женщины)', 'Androgenetic hair loss (men and women)'),
    ],
    methods: [
      L('Trixoskopiya va sababni topish uchun qon tahlillari', 'Трихоскопия и анализы крови для поиска причины', 'Trichoscopy and blood tests to find the cause'),
      L('PRP-terapiya', 'PRP-терапия', 'PRP therapy'),
      L('Hair Vital (ayollar) / Hair Loss Control (erkaklar) protokollari', 'Протоколы Hair Vital (женщины) / Hair Loss Control (мужчины)', 'Hair Vital (women) / Hair Loss Control (men) protocols'),
      L('Tuliy lazer mezoterapiyasi', 'Мезотерапия тулиевым лазером', 'Thulium laser mesotherapy'),
      L('Kerak bo‘lsa soch ekish', 'При показаниях — пересадка волос', 'Hair transplant if indicated'),
    ],
  },
  trixoskopiya: {
    whoFor: [
      L('Soch to‘kilishi sababini bilmoqchi bo‘lganlar', 'Хотите узнать причину выпадения волос', 'Wanting to know why hair is falling out'),
      L('Androgenetik, diffuz yoki o‘choqli to‘kilishni farqlash', 'Различить андрогенетическое, диффузное и очаговое выпадение', 'Telling androgenetic, diffuse and patchy loss apart'),
      L('Davolash samarasini raqamlar bilan kuzatish', 'Отслеживать эффект лечения в цифрах', 'Tracking treatment results in numbers'),
    ],
    methods: [
      L('Raqamli trixoskopiya — og‘riqsiz, 15–20 daqiqa', 'Цифровая трихоскопия — безболезненно, 15–20 минут', 'Digital trichoscopy — painless, 15–20 minutes'),
      L('Soch qalinligi, follikulalar soni va bosh terisi holatini o‘lchash', 'Измерение толщины волос, числа фолликулов и состояния кожи головы', 'Measuring hair thickness, follicle count and scalp health'),
      L('Natijani tushuntirish va davolash rejasi', 'Разбор результата и план лечения', 'Explaining the result and a treatment plan'),
      L('Kursdan keyin takroriy trixoskopiya', 'Повторная трихоскопия после курса', 'Repeat trichoscopy after the course'),
    ],
  },
  'xol-tekshiruvi': {
    whoFor: [
      L('Xoli ko‘p yoki yangi xollar paydo bo‘layotganlar', 'Много родинок или появляются новые', 'Many moles or new ones appearing'),
      L('Shakli notekis, rangi o‘zgargan yoki kattalashgan xol', 'Родинка неровной формы, изменила цвет или выросла', 'A mole with an irregular shape, new colour or growth'),
      L('Qichiyotgan yoki qonayotgan xol', 'Родинка чешется или кровоточит', 'An itchy or bleeding mole'),
      L('Oilada teri saratoni bo‘lganlar', 'Рак кожи у родственников', 'Family history of skin cancer'),
    ],
    methods: [
      L('Dermatoonkolog ko‘rigi va dermatoskopiya', 'Осмотр дерматоонколога и дерматоскопия', 'Dermato-oncologist visit and dermatoscopy'),
      L('ABCDE qoidasi bo‘yicha xavfni baholash', 'Оценка риска по правилу ABCDE', 'Risk assessment by the ABCDE rule'),
      L('Butun tana dermatoskopiyasi va raqamli baza', 'Дерматоскопия всего тела и цифровая база', 'Whole-body dermatoscopy with a digital record'),
      L('Kerak bo‘lsa xavfsiz olib tashlash va gistologiya', 'При необходимости безопасное удаление и гистология', 'Safe removal and histology when needed'),
    ],
  },
  biopsiya: {
    whoFor: [
      L('Shubhali teri o‘smasi', 'Подозрительное образование кожи', 'A suspicious skin growth'),
      L('Sababi aniq bo‘lmagan toshma', 'Сыпь неясного происхождения', 'A rash with an unclear cause'),
      L('Tashxisni tasdiqlash kerak bo‘lgan surunkali teri kasalligi', 'Хроническое заболевание кожи, где нужен точный диагноз', 'A chronic skin condition that needs a confirmed diagnosis'),
    ],
    methods: [
      L('Panch-biopsiya mahalliy og‘riqsizlantirish bilan', 'Панч-биопсия под местной анестезией', 'Punch biopsy under local anaesthesia'),
      L('Bir necha daqiqada namuna olish', 'Забор материала за несколько минут', 'Sampling in a few minutes'),
      L('Gistologik tekshiruv — dermatopatolog baholaydi', 'Гистология — оценивает дерматопатолог', 'Histology read by a dermatopathologist'),
      L('Natija bo‘yicha davolash rejasi', 'План лечения по результату', 'A treatment plan based on the result'),
    ],
  },
  'onko-dermatolog': {
    whoFor: [
      L('O‘zgarayotgan yoki shubhali xol va dog‘lar', 'Меняющиеся или подозрительные родинки и пятна', 'Changing or suspicious moles and spots'),
      L('Bitmaydigan yara yoki o‘sib borayotgan o‘sma', 'Незаживающая ранка или растущее образование', 'A sore that will not heal or a growing lump'),
      L('Melanoma, bazalioma yoki yassi hujayrali saraton shubhasi', 'Подозрение на меланому, базалиому или плоскоклеточный рак', 'Suspected melanoma, basal cell or squamous cell carcinoma'),
      L('Teri saratonidan keyin kuzatuv', 'Наблюдение после рака кожи', 'Follow-up after skin cancer'),
    ],
    methods: [
      L('Dermatoskopiya', 'Дерматоскопия', 'Dermatoscopy'),
      L('Biopsiya va gistologiya', 'Биопсия и гистология', 'Biopsy and histology'),
      L('Jarrohlik va Mohs mikrografik jarrohligi', 'Хирургия и микрографическая хирургия Мооса', 'Surgery and Mohs micrographic surgery'),
      L('Krioxirurgiya yoki lazer', 'Криохирургия или лазер', 'Cryosurgery or laser'),
      L('Uzoq muddatli kuzatuv', 'Длительное наблюдение', 'Long-term follow-up'),
    ],
  },
  dermatoskopiya: {
    whoFor: [
      L('Xol va dog‘larini tekshirtirmoqchi bo‘lganlar', 'Хотите проверить родинки и пятна', 'Wanting moles and spots checked'),
      L('Yangi yoki o‘zgarayotgan xol', 'Новая или меняющаяся родинка', 'A new or changing mole'),
      L('Xavf guruhi: ko‘p xol, oq teri, oilada teri saratoni', 'Группа риска: много родинок, светлая кожа, рак кожи в семье', 'Higher risk: many moles, fair skin, family history'),
      L('Har yili nazoratdan o‘tishni xohlaganlar', 'Ежегодный контроль', 'An annual check-up'),
    ],
    methods: [
      L('Dermatoskop bilan 10–20 baravar kattalashtirib ko‘rish', 'Осмотр дерматоскопом с увеличением в 10–20 раз', 'Dermatoscope exam at 10–20× magnification'),
      L('Og‘riqsiz, 15–30 daqiqa', 'Безболезненно, 15–30 минут', 'Painless, 15–30 minutes'),
      L('Butun tana dermatoskopiyasi raqamli bazaga saqlanadi', 'Дерматоскопия всего тела с сохранением в цифровой базе', 'Whole-body dermatoscopy saved to a digital record'),
      L('Xulosa: kuzatish yoki olib tashlash', 'Заключение: наблюдение или удаление', 'Conclusion: monitor or remove'),
    ],
  },
};
