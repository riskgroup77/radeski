import type { DoctorProfileContent } from '../../types';

const DERMATOVENEROLOGY_UZ = [
  'Akne va postakne',
  'Rozatsea (rozasea)',
  'Atopik dermatit',
  'Kontakt va allergik dermatit',
  'Ekzema',
  'Psoriaz',
  'Seboreyali dermatit',
  'Vitiligo',
  'Melazma va boshqa pigmentatsiya buzilishlari',
  "Zamburug'li teri kasalliklari",
  'Bakterial teri infeksiyalari',
  'Virusli teri kasalliklari',
  'Papilloma va kondilomalar',
  "Jinsiy yo'l orqali yuqadigan infeksiyalar",
  "Teri o'smalar va boshqa dermatologik kasalliklar",
];

const TRICHOLOGY_UZ = [
  "Soch to'kilishi",
  'Androgenetik alopetsiya',
  'Diffuz alopetsiya',
  'Alopecia areata',
  'Bosh terisi kasalliklari',
  'Kepek va seboreya',
  'Soch strukturasining buzilishlari',
];

const PODOLOGY_UZ = [
  'Tirnoq deformatsiyalari',
  'Onixomikoz va boshqa tirnoq kasalliklari',
  "Tirnoqning ichga o'sishi",
  'Qadoq va giperkeratoz',
  'Oyoq terisi kasalliklari',
  'Oyoq kaftidagi yoriqlar va boshqa podologik muammolar',
];

const DERMATOCOSMETOLOGY_UZ = [
  'Professional yuz tozalash',
  'Kimyoviy pilinglar',
  'Akne va postakne korreksiyasi',
  'Pigmentatsiya bilan ishlash',
  'Teri qarishi va fotoqarishni korreksiya qilish',
  'Teri sifatini yaxshilash',
  "In'eksion kosmetologiya",
  'Apparat kosmetologiyasi',
  'Individual uy sharoitidagi skincare dasturlarini tanlash',
];

const DIAGNOSTICS_UZ = [
  'Dermatoskopiya',
  'Vud lampasi tekshiruvi',
  'Mikologik tekshiruvlar',
  'Laborator tekshiruvlar',
  'Gistologik tekshiruvlarga yo‘llanma',
  'Differensial diagnostika',
];

export const USMONOVA_MOHINABONU_PROFILE: {
  uz: DoctorProfileContent;
  ru: DoctorProfileContent;
  en: DoctorProfileContent;
} = {
  uz: {
    aboutTitle: 'Mutaxassis haqida',
    about: [
      'Usmonova Mohinabonu — dermatovenerolog, dermatokosmetolog, trixolog va podolog. 3+ yillik amaliy ish tajribasiga ega mutaxassis.',
      "Teri, soch, tirnoq va oyoq terisi kasalliklarini diagnostika qilish, davolash va korreksiya qilish bilan shug‘ullanadi. Radeski Skin Clinic da bemorlarni qabul qiladi.",
      "Bemorlarni qabul qilishda individual yondashuv, aniq tashxis va zamonaviy davolash protokollariga alohida e'tibor qaratadi. Har bir bemor uchun teri, soch va tirnoq holatidan kelib chiqib, individual davolash va parvarish rejasi ishlab chiqiladi.",
      "Asosiy maqsad — bemorning dermatologik muammosini chuqur o‘rganish, sababini aniqlash va samarali hamda xavfsiz davolash orqali sog‘lom va chiroyli teriga erishishga yordam berish.",
    ],
    sections: [
      {
        title: "Asosiy yo'nalishlari",
        subsections: [
          { title: 'Dermatovenerologiya', items: DERMATOVENEROLOGY_UZ },
          { title: 'Trixologiya', items: TRICHOLOGY_UZ },
          { title: 'Podologiya', items: PODOLOGY_UZ },
          { title: 'Dermatokosmetologiya', items: DERMATOCOSMETOLOGY_UZ },
        ],
      },
      {
        title: 'Diagnostika',
        paragraphs: [
          'Bemorlarni qabul qilishda zamonaviy klinik va instrumental diagnostika usullaridan foydalanadi. Dermatoskopiya, Vud lampasi tekshiruvi, mikologik tekshiruvlar va zarur hollarda laborator hamda gistologik tekshiruvlarga yo‘llanma berish orqali kasalliklarni aniqlash va differensial diagnostika qilishga alohida e’tibor qaratadi.',
        ],
        items: DIAGNOSTICS_UZ,
      },
      {
        title: 'Davolash yondashuvi',
        paragraphs: [
          'Kasbiy faoliyatida ilmiy asoslangan tibbiyot tamoyillariga qat’iy amal qiladi hamda bemor xavfsizligi, tibbiy etika va individual yondashuvni ustuvor yo‘nalishlar sifatida e’tirof etadi.',
          "O‘z kasbiy malakasini muntazam oshirib boradi, zamonaviy ilmiy tadqiqotlar natijalari va klinik tavsiyalarni amaliyotiga tatbiq etishga alohida e'tibor qaratadi.",
        ],
      },
      {
        title: 'Qabul',
        paragraphs: [
          'Radeski Skin Clinic — Farg‘ona va Qo‘qon filiallari',
          'Teri, soch, tirnoq va oyoq bilan bog‘liq muammolar bo‘yicha kattalar qabul qilinadi.',
        ],
      },
    ],
  },
  ru: {
    aboutTitle: 'О специалисте',
    about: [
      'Усманова Мохинабону — дерматовенеролог, дерматокосметолог, трихолог и подолог. Специалист с более чем 3-летним практическим опытом.',
      'Занимается диагностикой, лечением и коррекцией заболеваний кожи, волос, ногтей и кожи стоп. Принимает пациентов в Radeski Skin Clinic.',
      'При приёме уделяет особое внимание индивидуальному подходу, точной диагностике и современным протоколам лечения. Для каждого пациента разрабатывается индивидуальный план лечения и ухода с учётом состояния кожи, волос и ногтей.',
      'Основная цель — глубоко изучить дерматологическую проблему пациента, выявить причину и помочь достичь здоровой и красивой кожи через эффективное и безопасное лечение.',
    ],
    sections: [
      {
        title: 'Основные направления',
        subsections: [
          {
            title: 'Дерматовенерология',
            items: [
              'Акне и постакне',
              'Розацеа',
              'Атопический дерматит',
              'Контактный и аллергический дерматит',
              'Экзема',
              'Псориаз',
              'Себорейный дерматит',
              'Витилиго',
              'Мелазма и другие нарушения пигментации',
              'Грибковые заболевания кожи',
              'Бактериальные инфекции кожи',
              'Вирусные заболевания кожи',
              'Папилломы и кондиломы',
              'Инфекции, передающиеся половым путём',
              'Образования кожи и другие дерматологические заболевания',
            ],
          },
          {
            title: 'Трихология',
            items: [
              'Выпадение волос',
              'Андrogenетическая алопеция',
              'Диффузная алопеция',
              'Очаговая алопеция (alopecia areata)',
              'Заболевания кожи головы',
              'Перхоть и себорея',
              'Нарушения структуры волос',
            ],
          },
          {
            title: 'Подология',
            items: [
              'Деформации ногтей',
              'Онихомикоз и другие заболевания ногтей',
              'Вросший ноготь',
              'Мозоли и гиперкератоз',
              'Заболевания кожи стоп',
              'Трещины подошвы и другие подологические проблемы',
            ],
          },
          {
            title: 'Дерматокосметология',
            items: [
              'Профессиональное очищение лица',
              'Химические пилинги',
              'Коррекция акне и постакне',
              'Работа с пигментацией',
              'Коррекция старения и фотостарения кожи',
              'Улучшение качества кожи',
              'Инъекционная косметология',
              'Аппаратная косметология',
              'Подбор индивидуальных домашних программ ухода',
            ],
          },
        ],
      },
      {
        title: 'Диагностика',
        paragraphs: [
          'При приёме пациентов использует современные клинические и инструментальные методы диагностики. Особое внимание уделяет дерматоскопии, обследованию лампой Вуда, микологическим исследованиям и при необходимости направлению на лабораторные и гистологические исследования для точной диагностики и дифференциальной диагностики.',
        ],
        items: [
          'Дерматоскопия',
          'Обследование лампой Вуда',
          'Микологические исследования',
          'Лабораторная диагностика',
          'Направление на гистологическое исследование',
          'Дифференциальная диагностика',
        ],
      },
      {
        title: 'Подход к лечению',
        paragraphs: [
          'В работе строго следует принципам доказательной медицины, а безопасность пациента, медицинскую этику и индивидуальный подход считает приоритетными направлениями.',
          'Регулярно повышает квалификацию, уделяя особое внимание внедрению результатов современных научных исследований и клинических рекомендаций в практику.',
        ],
      },
      {
        title: 'Приём',
        paragraphs: [
          'Radeski Skin Clinic — филиалы в Фергане и Коканде',
          'Принимает взрослых с проблемами кожи, волос, ногтей и стоп.',
        ],
      },
    ],
  },
  en: {
    aboutTitle: 'About the specialist',
    about: [
      'Mohinabonu Usmonova is a dermatovenerologist, dermatocosmetologist, trichologist and podiatrist with more than 3 years of hands-on clinical experience.',
      'She specializes in diagnosing, treating and correcting conditions of the skin, hair, nails and feet. She sees patients at Radeski Skin Clinic.',
      'Her consultations emphasize an individualized approach, accurate diagnosis and modern treatment protocols. Each patient receives a personalized treatment and care plan based on the condition of their skin, hair and nails.',
      'Her main goal is to thoroughly assess each dermatologic concern, identify the underlying cause and help patients achieve healthier, clearer skin through effective and safe treatment.',
    ],
    sections: [
      {
        title: 'Main areas of practice',
        subsections: [
          {
            title: 'Dermatovenerology',
            items: [
              'Acne and post-acne',
              'Rosacea',
              'Atopic dermatitis',
              'Contact and allergic dermatitis',
              'Eczema',
              'Psoriasis',
              'Seborrheic dermatitis',
              'Vitiligo',
              'Melasma and other pigmentation disorders',
              'Fungal skin infections',
              'Bacterial skin infections',
              'Viral skin conditions',
              'Papillomas and condylomas',
              'Sexually transmitted infections',
              'Skin lesions and other dermatologic conditions',
            ],
          },
          {
            title: 'Trichology',
            items: [
              'Hair loss',
              'Androgenetic alopecia',
              'Diffuse alopecia',
              'Alopecia areata',
              'Scalp conditions',
              'Dandruff and seborrhea',
              'Hair structure disorders',
            ],
          },
          {
            title: 'Podology',
            items: [
              'Nail deformities',
              'Onychomycosis and other nail diseases',
              'Ingrown nails',
              'Calluses and hyperkeratosis',
              'Foot skin conditions',
              'Heel cracks and other podiatric issues',
            ],
          },
          {
            title: 'Dermatocosmetology',
            items: [
              'Professional facial cleansing',
              'Chemical peels',
              'Acne and post-acne correction',
              'Pigmentation treatment',
              'Correction of skin aging and photoaging',
              'Skin quality improvement',
              'Injection cosmetology',
              'Hardware cosmetology',
              'Personalized at-home skincare programs',
            ],
          },
        ],
      },
      {
        title: 'Diagnostics',
        paragraphs: [
          'She uses modern clinical and instrumental diagnostic methods. Particular attention is paid to dermatoscopy, Wood lamp examination, mycological tests and, when needed, laboratory and histology referrals for accurate and differential diagnosis.',
        ],
        items: [
          'Dermatoscopy',
          'Wood lamp examination',
          'Mycological tests',
          'Laboratory diagnostics',
          'Histology referral when indicated',
          'Differential diagnosis',
        ],
      },
      {
        title: 'Treatment approach',
        paragraphs: [
          'She strictly follows evidence-based medicine and prioritizes patient safety, medical ethics and individualized care.',
          'She regularly upgrades her qualifications, applying modern research findings and clinical guidelines in daily practice.',
        ],
      },
      {
        title: 'Consultations',
        paragraphs: [
          'Radeski Skin Clinic — Fergana and Kokand branches',
          'She accepts adult patients with skin, hair, nail and foot concerns.',
        ],
      },
    ],
  },
};
