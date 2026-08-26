import type { DoctorProfileContent } from '../../types';

const DERMATOLOGY_UZ = [
  'Akne va postakne',
  'Atopik dermatit',
  'Kontakt dermatit',
  'Ekzema',
  'Psoriaz',
  'Vitiligo',
  'Seboreyali dermatit',
  'Rozatsea',
  'Urtikariya (eshakemi)',
  'Qichishish bilan kechuvchi dermatozlar',
  'Zamburug‘li teri kasalliklari',
  'Trixofitiya',
  'Mikrosporiya',
  'Pityriazis versikolor (rang-barang temiratki)',
  'Oyoq panjasi va tirnoq zamburug‘lari',
  'Streptodermiya',
  'Impetigo va boshqa bakterial teri infeksiyalari',
  'Gerpes va boshqa virusli teri kasalliklari',
  'So‘gal va papillomalar',
  'Molluskum kontagiozum',
  'Qo‘tir (chesotka)',
  'Bitlash (pedikulyoz)',
  'Taglik dermatiti',
  'Bolalar dermatitlari',
  'Quyosh ta’sirida yuzaga keluvchi dermatozlar',
  'Pigmentatsiya va depigmentatsiya bilan kechuvchi dermatozlar',
  'Teri o‘smalari va turli teri hosilalarini baholash',
];

const TRICHOLOGY_UZ = [
  'Soch to‘kilishi',
  'Androgenetik alopetsiya',
  'Diffuz alopetsiya',
  'O‘choqli alopetsiya',
  'Soch siyraklashishi',
  'Seboreya va bosh terisi kasalliklari',
  'Kepek',
  'Bosh terisi qichishishi',
  'Sochning mo‘rtlashishi va shikastlanishi',
  'Soch va bosh terisi bilan bog‘liq boshqa muammolar',
];

const NAIL_UZ = [
  'Tirnoq zamburug‘i (onixomikoz)',
  'Tirnoq plastinkasining deformatsiyasi',
  'Tirnoq mo‘rtlashishi',
  'Tirnoq rangining o‘zgarishi',
  'Tirnoq atrofidagi yallig‘lanish kasalliklari',
];

const DIAGNOSTICS_UZ = [
  'Dermatoskopiya',
  'Trixoskopiya',
  'Wood lamp tekshiruvi',
  'Laborator diagnostika',
  'Zamburug‘li kasalliklar uchun tekshiruvlar',
  'Differensial diagnostika',
  'Zarur hollarda qo‘shimcha instrumental va laborator tekshiruvlar',
];

export const SHOHRUZ_TURGUNOV_PROFILE: {
  uz: DoctorProfileContent;
  ru: DoctorProfileContent;
  en: DoctorProfileContent;
} = {
  uz: {
    aboutTitle: 'Mutaxassis haqida',
    about: [
      "Turg'unov Shohruz Ilxomjon o'g'li — teri, soch va tirnoq kasalliklarini tashxislash va davolash bilan shug'ullanuvchi dermatovenerolog-trixolog.",
      "Dermatologiya sohasida 3+ yildan ortiq amaliy tajribaga ega. Bemorlarni zamonaviy diagnostika usullari asosida ko'rikdan o'tkazib, kasallik sababini aniqlash va har bir bemor uchun individual davolash rejasini ishlab chiqishga e'tibor qaratadi.",
    ],
    sections: [
      {
        title: "Asosiy yo'nalishlari",
        subsections: [
          { title: 'Dermatologiya', items: DERMATOLOGY_UZ },
          { title: 'Trixologiya', items: TRICHOLOGY_UZ },
          { title: 'Tirnoq kasalliklari', items: NAIL_UZ },
        ],
      },
      {
        title: 'Diagnostika',
        paragraphs: [
          "Bemorning shikoyatlari va klinik ko'rigidan tashqari, zaruratga ko'ra quyidagi usullar qo'llaniladi:",
        ],
        items: DIAGNOSTICS_UZ,
      },
      {
        title: 'Davolash yondashuvi',
        paragraphs: [
          "Davolash kasallikning turi, og'irlik darajasi, bemorning yoshi va individual xususiyatlarini hisobga olgan holda belgilanadi.",
          "Asosiy maqsad — faqat tashqi belgilarni vaqtincha kamaytirish emas, balki kasallik sababini aniqlash, to'g'ri tashxis qo'yish va uzoq muddatli nazoratga erishish.",
        ],
      },
      {
        title: 'Ilmiy va pedagogik faoliyat',
        paragraphs: [
          'Dermatologiya yo\'nalishida professional bilim va ko\'nikmalarini muntazam rivojlantirib boradi.',
          'Shuningdek, dermatologiya bo\'yicha talabalarga ta\'lim berish va ilmiy faoliyat bilan shug\'ullanadi.',
        ],
      },
      {
        title: 'Qabul',
        paragraphs: [
          'Radeski Skin Clinic — Qo\'qon filiali',
          'Teri, soch va tirnoq bilan bog\'liq muammolar bo\'yicha kattalar va bolalar qabul qilinadi.',
        ],
      },
    ],
  },
  ru: {
    aboutTitle: 'О специалисте',
    about: [
      'Тургунов Шохруз Илхомжон угли — дерматовенеролог-трихолог, занимающийся диагностикой и лечением заболеваний кожи, волос и ногтей.',
      'Имеет более 3 лет практического опыта в дерматологии. Уделяет особое внимание обследованию пациентов с применением современных диагностических методов, выявлению причины заболевания и составлению индивидуального плана лечения для каждого пациента.',
    ],
    sections: [
      {
        title: 'Основные направления',
        subsections: [
          {
            title: 'Дерматология',
            items: [
              'Акне и постакне',
              'Атопический дерматит',
              'Контактный дерматит',
              'Экзема',
              'Псориаз',
              'Витилиго',
              'Себорейный дерматит',
              'Розацеа',
              'Крапивница',
              'Дерматозы с зудом',
              'Грибковые заболевания кожи',
              'Трихофития',
              'Микроспория',
              'Разноцветный лишай',
              'Грибковые поражения стоп и ногтей',
              'Стрептодермия',
              'Импетиго и другие бактериальные инфекции кожи',
              'Герпес и другие вирусные заболевания кожи',
              'Бородавки и папилломы',
              'Контагиозный моллюск',
              'Чесотка',
              'Пediculosis (вшивость)',
              'Подгузниковый дерматит',
              'Детские дерматиты',
              'Фотодermatозы',
              'Нарушения пигментации и депигментации',
              'Оценка образований кожи и различных высыпаний',
            ],
          },
          {
            title: 'Трихология',
            items: [
              'Выпадение волос',
              'Андrogenетическая алопеция',
              'Диффузная алопеция',
              'Очаговая алопеция',
              'Истончение волос',
              'Себорея и заболевания кожи головы',
              'Перхоть',
              'Зуд кожи головы',
              'Ломкость и повреждение волос',
              'Другие проблемы волос и кожи головы',
            ],
          },
          {
            title: 'Заболевания ногтей',
            items: [
              'Грибок ногтей (онихомикоз)',
              'Деформация ногтевой пластины',
              'Ломкость ногтей',
              'Изменение цвета ногтей',
              'Воспалительные заболевания вокруг ногтя',
            ],
          },
        ],
      },
      {
        title: 'Диагностика',
        paragraphs: [
          'Помимо жалоб пациента и клинического осмотра, при необходимости применяются:',
        ],
        items: [
          'Дерматоскопия',
          'Трихоскопия',
          'Обследование лампой Вуда',
          'Лабораторная диагностика',
          'Обследования на грибковые заболевания',
          'Дифференциальная диагностика',
          'Дополнительные инструментальные и лабораторные исследования при необходимости',
        ],
      },
      {
        title: 'Подход к лечению',
        paragraphs: [
          'Лечение определяется с учётом типа заболевания, степени тяжести, возраста пациента и индивидуальных особенностей.',
          'Главная цель — не временно уменьшить внешние проявления, а выявить причину заболевания, поставить точный диагноз и достичь долгосрочного контроля.',
        ],
      },
      {
        title: 'Научная и педагогическая деятельность',
        paragraphs: [
          'Регулярно развивает профессиональные знания и навыки в области дерматологии.',
          'Также занимается обучением студентов по дерматологии и научной деятельностью.',
        ],
      },
      {
        title: 'Приём',
        paragraphs: [
          'Radeski Skin Clinic — филиал в Коканде',
          'Принимает взрослых и детей с проблемами кожи, волос и ногтей.',
        ],
      },
    ],
  },
  en: {
    aboutTitle: 'About the specialist',
    about: [
      'Shohruz Ilxomjon ugli Turgunov is a dermatovenerologist and trichologist specializing in the diagnosis and treatment of skin, hair and nail conditions.',
      'He has more than 3 years of hands-on experience in dermatology. His focus is on examining patients using modern diagnostic methods, identifying the cause of disease and developing an individualized treatment plan for each patient.',
    ],
    sections: [
      {
        title: 'Main areas of practice',
        subsections: [
          {
            title: 'Dermatology',
            items: [
              'Acne and post-acne',
              'Atopic dermatitis',
              'Contact dermatitis',
              'Eczema',
              'Psoriasis',
              'Vitiligo',
              'Seborrheic dermatitis',
              'Rosacea',
              'Urticaria (hives)',
              'Itchy dermatoses',
              'Fungal skin infections',
              'Tinea (ringworm)',
              'Microsporia',
              'Pityriasis versicolor',
              'Foot and nail fungal infections',
              'Streptoderma',
              'Impetigo and other bacterial skin infections',
              'Herpes and other viral skin conditions',
              'Warts and papillomas',
              'Molluscum contagiosum',
              'Scabies',
              'Pediculosis (lice)',
              'Diaper dermatitis',
              'Pediatric dermatitis',
              'Photodermatoses',
              'Pigmentation and depigmentation disorders',
              'Assessment of skin lesions and various eruptions',
            ],
          },
          {
            title: 'Trichology',
            items: [
              'Hair loss',
              'Androgenetic alopecia',
              'Diffuse alopecia',
              'Alopecia areata',
              'Hair thinning',
              'Seborrhea and scalp conditions',
              'Dandruff',
              'Scalp itching',
              'Hair brittleness and damage',
              'Other hair and scalp concerns',
            ],
          },
          {
            title: 'Nail conditions',
            items: [
              'Nail fungus (onychomycosis)',
              'Nail plate deformity',
              'Brittle nails',
              'Nail discoloration',
              'Inflammatory conditions around the nail',
            ],
          },
        ],
      },
      {
        title: 'Diagnostics',
        paragraphs: [
          'In addition to the patient interview and clinical examination, the following methods may be used when indicated:',
        ],
        items: [
          'Dermoscopy',
          'Trichoscopy',
          'Wood lamp examination',
          'Laboratory diagnostics',
          'Tests for fungal infections',
          'Differential diagnosis',
          'Additional instrumental and laboratory tests when necessary',
        ],
      },
      {
        title: 'Treatment approach',
        paragraphs: [
          'Treatment is tailored to the type of condition, severity, patient age and individual characteristics.',
          'The primary goal is not to temporarily mask external signs, but to identify the cause of disease, establish an accurate diagnosis and achieve long-term control.',
        ],
      },
      {
        title: 'Research and teaching',
        paragraphs: [
          'He continuously develops his professional knowledge and skills in dermatology.',
          'He also teaches dermatology to students and is engaged in scientific work.',
        ],
      },
      {
        title: 'Appointments',
        paragraphs: [
          'Radeski Skin Clinic — Kokand branch',
          'He accepts adults and children with skin, hair and nail concerns.',
        ],
      },
    ],
  },
};
