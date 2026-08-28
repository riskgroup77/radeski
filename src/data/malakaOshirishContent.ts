import type { Locale } from '../types';

type L = Record<Locale, string>;

const L = (uz: string, ru: string, en: string): L => ({ uz, ru, en });

export const MALAKA_OSHIRISH = {
  eyebrow: L('Malaka oshirish', 'ПОВЫШЕНИЕ КВАЛИФИКАЦИИ', 'PROFESSIONAL DEVELOPMENT'),
  title: L(
    'Radeski Skin Clinic da malaka oshirish',
    'Повышение квалификации в Radeski Skin Clinic',
    'Professional development at Radeski Skin Clinic',
  ),
  subtitle: L(
    'Amaliyotdan — zamonaviy ko‘nikmalargacha',
    'От практики — к современным компетенциям',
    'From practice to modern clinical skills',
  ),
  heroIntro: L(
    'Radeski Skin Clinic dermatologiya, kosmetologiya va teri bilan bog‘liq yo‘nalishlarda shifokorlar hamda yosh mutaxassislar uchun tizimli malaka oshirish dasturlarini rivojlantiradi.',
    'Radeski Skin Clinic развивает системные программы повышения квалификации для врачей и молодых специалистов в дерматологии, косметологии и смежных направлениях.',
    'Radeski Skin Clinic builds structured professional development programs for physicians and early-career specialists in dermatology, cosmetology, and related fields.',
  ),
  heroDescription: L(
    'Biz faqat nazariy ma’ruzalar emas — klinik amaliyot, apparatlar ustida trening, master-klass va sertifikatsiya yo‘nalishlarini birlashtiramiz. Maqsad — bemorlar uchun xavfsiz, zamonaviy va dalillarga asoslangan yordam ko‘rsatadigan mutaxassislarni tayyorlash.',
    'Мы объединяем не только теорию, но и клиническую практику, тренинги на аппаратах, мастер-классы и сертификационные программы. Цель — готовить специалистов, которые оказывают безопасную, современную и доказательную помощь пациентам.',
    'We combine more than lectures: clinical practice, device-based training, masterclasses, and certification tracks. The goal is to prepare specialists who deliver safe, modern, evidence-based care.',
  ),
  environment: L(
    'Farg‘ona va Qo‘qondagi klinik bazamizda DEKA lazerlari, dermatoskopiya, trixoskopiya, IPL, fototerapiya va inyeksion kosmetologiya bo‘yicha amaliy o‘quv muhiti mavjud.',
    'На клинической базе в Фергане и Коканде доступна практическая учебная среда: лазеры DEKA, дерматоскопия, трихоскопия, IPL, фототерапия и инъекционная косметология.',
    'Our Fergana and Kokand clinical sites offer hands-on learning with DEKA lasers, dermoscopy, trichoscopy, IPL, phototherapy, and injectable cosmetology.',
  ),
  formulaTitle: L('O‘qitish modeli', 'Модель обучения', 'Learning model'),
  formulaSteps: [
    L('Nazariya', 'Теория', 'Theory'),
    L('Demonstratsiya', 'Демонстрация', 'Demonstration'),
    L('Amaliyot', 'Практика', 'Practice'),
    L('Superviziya', 'Супервизия', 'Supervision'),
    L('Sertifikat', 'Сертификат', 'Certificate'),
  ],

  forWho: {
    title: L('Kimlar uchun', 'ДЛЯ КОГО', 'WHO IT IS FOR'),
    question: L(
      'Malaka oshirish dasturlari kimlarga mo‘ljallangan?',
      'Для кого предназначены программы?',
      'Who are these programs for?',
    ),
    intro: L(
      'Dasturlar dermatologiya va estetik tibbiyot sohasida ishlayotgan shifokorlar, rezidentlar, hamshiralar va klinika xodimlari uchun mo‘ljallangan. Har bir yo‘nalish darajaga mos ravishda tuziladi — boshlang‘ichdan ilg‘or amaliyotgacha.',
      'Программы предназначены для врачей, ординаторов, медсестёр и сотрудников клиник, работающих в дерматологии и эстетической медицине. Каждое направление выстраивается по уровню — от базового до продвинутого.',
      'Programs are designed for physicians, residents, nurses, and clinic staff in dermatology and aesthetic medicine. Each track is tailored by level — from foundational to advanced practice.',
    ),
    audienceTitle: L('Asosiy auditoriya:', 'Основная аудитория:', 'Primary audience:'),
    audience: [
      L('Dermatolog va dermatovenerologlar', 'Дерматологи и дерматовенерологи', 'Dermatologists and dermato-venereologists'),
      L('Kosmetolog va estetik tibbiyot mutaxassislari', 'Косметологи и специалисты эстетической медицины', 'Cosmetologists and aesthetic medicine specialists'),
      L('Ordinatura va magistratura talabalari', 'Ординаторы и магистранты', 'Residents and master’s students'),
      L('Trixolog va podolog mutaxassislari', 'Трихологи и подологи', 'Trichologists and podologists'),
      L('Klinika hamshiralari va tibbiy xodimlar', 'Медсестры и медицинский персонал клиник', 'Clinic nurses and medical staff'),
      L('Yosh mutaxassislar va stajyorlar', 'Молодые специалисты и стажёры', 'Early-career specialists and interns'),
    ],
    note: L(
      'Individual va guruh formatlari mavjud. Dastur tanlashdan oldin qisqa maslahat o‘tkaziladi.',
      'Доступны индивидуальные и групповые форматы. Перед выбором программы проводится короткая консультация.',
      'Individual and group formats are available. A brief consultation is held before choosing a program.',
    ),
  },

  advantages: {
    title: L('Nima uchun Radeski', 'ПОЧЕМУ RADESKI', 'WHY RADESKI'),
    intro: L(
      'Malaka oshirish markazimiz faol klinik amaliyot bilan bog‘langan — o‘qitish real bemor oqimi va zamonaviy uskunalar kontekstida o‘tadi.',
      'Наш центр повышения квалификации связан с активной клинической практикой — обучение проходит в контексте реального потока пациентов и современного оборудования.',
      'Our training center is tied to active clinical practice — learning happens in the context of real patient flow and modern equipment.',
    ),
    items: [
      L('Faol klinik bazada amaliy trening', 'Практические тренинги на действующей клинической базе', 'Hands-on training at an active clinical site'),
      L('DEKA, InMode, Daavlin va boshqa sertifikatlangan uskunalar', 'Оборудование DEKA, InMode, Daavlin и другое сертифицированное', 'DEKA, InMode, Daavlin and other certified devices'),
      L('Tajribali dermatolog va kosmetolog mentorlar', 'Опытные наставники-дерматологи и косметологи', 'Experienced dermatologist and cosmetologist mentors'),
      L('Xalqaro protokollar va klinik tavsiyalar', 'Международные протоколы и клинические рекомендации', 'International protocols and clinical guidelines'),
      L('Sertifikat va davomat hujjatlari', 'Сертификаты и документы о прохождении', 'Certificates and attendance documentation'),
      L('Farg‘ona va Qo‘qon filiallarida qulay joylashuv', 'Удобная локация в филиалах Ферганы и Коканде', 'Convenient locations in Fergana and Kokand branches'),
    ],
  },

  programs: {
    title: L(
      'Malaka oshirish yo‘nalishlari',
      'НАПРАВЛЕНИЯ ПОВЫШЕНИЯ КВАЛИФИКАЦИИ',
      'PROFESSIONAL DEVELOPMENT TRACKS',
    ),
    items: [
      {
        num: '01',
        id: 'certification-courses',
        title: L('Sertifikatsiya kurslari', 'Сертификационные курсы', 'Certification programs'),
        description: L(
          'Dermatoskopiya, trixoskopiya, lazer dermatologiyasi, IPL, fototerapiya va inyeksion kosmetologiya bo‘yicha modul kurslar. Har bir kurs yakunida bilimlarni mustahkamlash va sertifikat berish nazarda tutilgan.',
          'Модульные курсы по дерматоскопии, трихоскопии, лазерной дерматологии, IPL, фототерапии и инъекционной косметологии. По завершении — закрепление знаний и выдача сертификата.',
          'Modular courses in dermoscopy, trichoscopy, laser dermatology, IPL, phototherapy, and injectable cosmetology. Each course ends with knowledge consolidation and certification.',
        ),
        bullets: [
          L('Dermatoskopik ko‘rik', 'Дерматоскопический осмотр', 'Dermoscopic examination'),
          L('Trixoskopiya va alopeciya', 'Трихоскопия и алопеция', 'Trichoscopy and alopecia'),
          L('Lazer xavfsizligi', 'Лазерная безопасность', 'Laser safety'),
          L('IPL va pigment terapiyasi', 'IPL и пигментная терапия', 'IPL and pigment therapy'),
        ],
      },
      {
        num: '02',
        id: 'residency',
        title: L('Ordinatura va stajirovka', 'Ординатура и стажировка', 'Residency and internships'),
        description: L(
          'Yosh shifokorlar uchun klinik holatlar tahlili, qabul protokollari, teri kasalliklarini boshqarish va bemor bilan muloqot bo‘yicha amaliy stajirovka.',
          'Практическая стажировка для молодых врачей: разбор клинических случаев, протоколы приёма, ведение кожных заболеваний и коммуникация с пациентом.',
          'Practical internships for early-career physicians: case discussions, consultation protocols, managing skin disease, and patient communication.',
        ),
        bullets: [
          L('Klinik holatlar tahlili', 'Разбор клинических случаев', 'Clinical case review'),
          L('Mentor nazorati', 'Наставничество', 'Mentor supervision'),
          L('Kuzatuv va hujjatlashtirish', 'Наблюдение и документирование', 'Observation and documentation'),
          L('Etika va xavfsizlik', 'Этика и безопасность', 'Ethics and safety'),
        ],
      },
      {
        num: '03',
        id: 'masterclasses',
        title: L('Master-klasslar', 'Мастер-классы', 'Masterclasses'),
        description: L(
          'Yetakchi mutaxassislar ishtirokida qisqa, chuqur va amaliy master-klasslar: akne va postakne, pigmentatsiya, rozatsea, lazer epilyatsiya va estetik muolajalar.',
          'Короткие, глубокие и практические мастер-классы с ведущими специалистами: акне и постакне, пигментация, розацеа, лазерная эпиляция и эстетические процедуры.',
          'Focused, practical masterclasses with leading specialists: acne and post-acne, pigmentation, rosacea, laser hair removal, and aesthetic procedures.',
        ),
        bullets: [
          L('Jonli demonstratsiya', 'Живая демонстрация', 'Live demonstration'),
          L('Savol-javob sessiyasi', 'Сессия вопросов и ответов', 'Q&A session'),
          L('Protokol va xatolardan saqlanish', 'Протоколы и предотвращение ошибок', 'Protocols and error prevention'),
          L('Kichik guruh formati', 'Формат малых групп', 'Small-group format'),
        ],
      },
      {
        num: '04',
        id: 'hands-on-training',
        title: L('Amaliy treninglar', 'Практические тренинги', 'Hands-on training'),
        description: L(
          'Apparat va uskunalar ustida bevosita amaliyot: dermatoskop, trixoskop, lazer platformalari, UVB kabinalari va inyeksion texnikalar modellar yoki simulyatsiya sharoitida.',
          'Непosredственная практика на аппаратах: дерматоскоп, трихоскоп, лазерные платформы, UVB-кабины и инъекционные техники на моделях или в симуляции.',
          'Direct practice on devices: dermatoscope, trichoscope, laser platforms, UVB cabins, and injection techniques on models or in simulation.',
        ),
        bullets: [
          L('Qo‘l ostida superviziya', 'Супервизия под рукой', 'Hands-on supervision'),
          L('Xavfsizlik protokollari', 'Протоколы безопасности', 'Safety protocols'),
          L('Parametrlarni sozlash', 'Настройка параметров', 'Parameter adjustment'),
          L('Bemor tanlash algoritmi', 'Алгоритм отбора пациентов', 'Patient selection algorithms'),
        ],
      },
      {
        num: '05',
        id: 'laser-training',
        title: L('Lazer texnologiyalari', 'Лазерные технологии', 'Laser technology training'),
        description: L(
          'DEKA CO₂, alexandrite, Derma V tomir lazeri va boshqa platformalar bo‘yicha trening: ko‘rsatmalar, kontraindikatsiyalar, post-protsedura parvarishi va asoratlar profilaktikasi.',
          'Обучение по платформам DEKA CO₂, александрит, сосудистый лазер Derma V и другим: показания, противопоказания, послепроцедурный уход и профилактика осложнений.',
          'Training on DEKA CO₂, alexandrite, Derma V vascular laser, and other platforms: indications, contraindications, aftercare, and complication prevention.',
        ),
        bullets: [
          L('CO₂ ablyatsiya va resurfacing', 'CO₂ абляция и resurfacing', 'CO₂ ablation and resurfacing'),
          L('Lazer epilyatsiya', 'Лазерная эпиляция', 'Laser hair removal'),
          L('Tomir va pigment lazerlari', 'Сосудистые и пигментные лазеры', 'Vascular and pigment lasers'),
          L('Asoratlar boshqaruvi', 'Управление осложнениями', 'Complication management'),
        ],
      },
      {
        num: '06',
        id: 'international-programs',
        title: L('Xalqaro dasturlar', 'Международные программы', 'International programs'),
        description: L(
          'Xorijiy klinikalar, konferensiyalar va hamkor o‘quv markazlari bilan almashinuv, onlayn vebinarlar va qo‘shma master-klasslar. Radeski shifokorlarining xalqaro tajribasi dasturga integratsiya qilinadi.',
          'Обмен с зарубежными клиниками, конференциями и партнёрскими учебными центрами, онлайн-вебинары и совместные мастер-классы. Международный опыт врачей Radeski интегрируется в программу.',
          'Exchange with foreign clinics, conferences, and partner training centers; online webinars and joint masterclasses. Radeski physicians’ international experience is woven into the curriculum.',
        ),
        bullets: [
          L('Xalqaro konferensiyalar', 'Международные конференции', 'International conferences'),
          L('Onlayn vebinarlar', 'Онлайн-вебинары', 'Online webinars'),
          L('Hamkor klinikalar', 'Партнёрские клиники', 'Partner clinics'),
          L('Ingliz va rus tillarida materiallar', 'Материалы на русском и английском', 'Materials in Russian and English'),
        ],
      },
    ],
  },

  cta: {
    title: L(
      'Malaka oshirish dasturiga yoziling',
      'Запишитесь на программу повышения квалификации',
      'Enroll in a professional development program',
    ),
    desc: L(
      'Qaysi yo‘nalish sizga mos ekanini bilish uchun klinikamizga murojaat qiling. Menejerlar dastur formati, davomiyligi va narxlarni tushuntiradi.',
      'Обратитесь в клинику, чтобы узнать, какая программа вам подходит. Менеджеры расскажут о формате, длительности и стоимости.',
      'Contact the clinic to find the program that fits you. Our team will explain format, duration, and fees.',
    ),
    phone: '+998 73 200-73-73',
  },
};
