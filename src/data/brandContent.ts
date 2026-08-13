import type { Locale } from '../types';

type L = Record<Locale, string>;

const L = (uz: string, ru: string, en: string): L => ({ uz, ru, en });

export type BrandArchitectureId =
  | 'medical-dermatology'
  | 'dermato-oncology'
  | 'phototherapy'
  | 'laser-dermatology'
  | 'trichology'
  | 'research'
  | 'academy'
  | 'digital'
  | 'skin-hospital';

export const BRAND_NAV_TITLE = L(
  'Radeski ekotizimi',
  'Экосистема Radeski',
  'Radeski ecosystem',
);

export const BRAND_NAV_OVERVIEW = L(
  'Brend haqida',
  'О бренде',
  'About the brand',
);

export const BRAND_NAV_ABOUT_PAGE = L(
  'Klinika sahifasi',
  'Страница о клинике',
  'About the clinic',
);

export const BRAND = {
  eyebrow: L('Radeski klinik brendi', 'Бренд Radeski Skin Clinic', 'The Radeski Skin Clinic brand'),
  title: L('Radeski Skin Clinic', 'Radeski Skin Clinic', 'Radeski Skin Clinic'),
  subtitle: L(
    'Yangi avlod ixtisoslashgan tibbiy brendi',
    'Специализированный медицинский бренд нового поколения',
    'A next-generation specialized medical brand',
  ),
  intro: L(
    'Radeski Skin Clinic dermatologiya, dermato-onkologiya, trixologiya, fototerapiya, lazer va estetik tibbiyot bo‘yicha yagona ekotizim yaratadi.',
    'Radeski Skin Clinic — специализированный медицинский бренд нового поколения, создающий интегрированную экосистему в области дерматологии, дерматоонкологии, трихологии, фототерапии, лазерной и эстетической медицины.',
    'Radeski Skin Clinic is building an integrated ecosystem in dermatology, dermato-oncology, trichology, phototherapy, laser and aesthetic medicine.',
  ),
  fourTitle: L(
    'Brend to‘rtta asosiy ustunga quriladi:',
    'Бренд строится на сочетании четырех фундаментальных компонентов:',
    'The brand is built on four foundations:',
  ),
  fourEn: 'Medical Excellence + Technology + Science + Accessibility',
  fourLocal: L(
    'Professional tibbiyot + texnologiya + ilm-fan + ochiqlik',
    'Профессиональная медицина + технологии + наука + доступность',
    'Professional medicine + technology + science + accessibility',
  ),
  expertLine: L(
    'Radeski — bemorga yaqin, ekspert dermatologiya.',
    'Radeski — это экспертная дерматология, доступная пациенту.',
    'Radeski is expert dermatology that stays within the patient’s reach.',
  ),
  humanLine: L(
    'Brend tibbiy ekspertiza va zamonaviy texnologiyani birlashtiradi — bemorga insoniy munosabatni saqlagan holda.',
    'Бренд объединяет медицинскую экспертизу и современные технологии, сохраняя при этом человеческое отношение к пациенту.',
    'The brand brings together medical expertise and modern technology, while keeping a human relationship with the patient.',
  ),
  ideaTitle: L('Brend g‘oyasi', 'В основе бренда лежит идея', 'The idea at the core of the brand'),
  idea: L(
    'Ilg‘or dermatologiya bemor qayerda yashashidan qat’i nazar, har bir inson uchun ochiq bo‘lishi kerak.',
    'Передовая дерматология должна быть доступна каждому пациенту независимо от места его проживания.',
    'Advanced dermatology should be available to every patient, wherever they live.',
  ),

  mission: {
    title: L('Radeski Skin Clinic missiyasi', 'Миссия бренда Radeski Skin Clinic', 'The Radeski Skin Clinic mission'),
    text: L(
      'Bemor kerakli ixtisoslashgan yordamni yashash joyiga imkon qadar yaqin olsin. Shifokor esa zamonaviy bilim, texnologiya va kasbiy o‘sishga ega bo‘lsin.',
      'Radeski стремится сделать так, чтобы пациент мог получить необходимую специализированную помощь максимально близко к месту проживания, а врач — иметь доступ к современным знаниям, технологиям и профессиональному развитию.',
      'Radeski works so that patients can get the specialist care they need as close to home as possible — and so that physicians have access to current knowledge, technology, and professional growth.',
    ),
  },

  philosophy: {
    title: L('Brend falsafasi', 'Философия бренда', 'Brand philosophy'),
    intro: L(
      'Radeski falsafasi beshta tamoyil atrofida quriladi.',
      'Философия Radeski строится вокруг пяти принципов.',
      'The Radeski philosophy is built around five principles.',
    ),
    principles: [
      {
        id: 'patient-first',
        name: 'Patient First',
        title: L('Bemor — markazda', 'Пациент является центром', 'The patient is at the centre'),
        text: L(
          'Biz nafaqat kasallikni, balki insonni davolaymiz: hayot sifati, ruhiy qulaylik va terining uzoq muddatli salomatligi.',
          'Пациент является центром медицинской системы. Мы лечим не только заболевание, но и человека, его качество жизни, психологический комфорт и долгосрочное здоровье кожи.',
          'The patient sits at the centre of care. We treat not only the disease, but the person — quality of life, emotional comfort, and the long-term health of the skin.',
        ),
      },
      {
        id: 'evidence-based',
        name: 'Evidence Based',
        title: L('Dalillarga tayanamiz', 'Основано на доказательствах', 'Grounded in evidence'),
        text: L(
          'Har bir tibbiy qaror zamonaviy ilmiy ma’lumotlar, klinik tavsiyalar va professional ekspertizaga tayanadi.',
          'Каждое медицинское решение должно основываться на современных научных данных, клинических рекомендациях и профессиональной экспертизе.',
          'Every medical decision should rest on current scientific data, clinical guidelines, and professional expertise.',
        ),
      },
      {
        id: 'technology-driven',
        name: 'Technology Driven',
        title: L('Texnologiya bilan', 'Технологии в основе', 'Driven by technology'),
        text: L(
          'Zamonaviy dermatologiya texnologiyasiz bo‘lmaydi. Radeski tashxis va davolash texnologiyalari, raqamli yechimlar, fototerapiya, lazer tibbiyoti va sun’iy intellekt vositalarini joriy etishga intiladi.',
          'Современная дерматология невозможна без технологий. Radeski стремится внедрять современные диагностические и лечебные технологии, цифровые решения, фототерапию, лазерную медицину и инструменты искусственного интеллекта.',
          'Modern dermatology cannot exist without technology. Radeski works to bring in current diagnostic and treatment technology, digital tools, phototherapy, laser medicine, and AI.',
        ),
      },
      {
        id: 'continuous-learning',
        name: 'Continuous Learning',
        title: L('Tinmay o‘rganish', 'Непрерывное обучение', 'Continuous learning'),
        text: L(
          'Tibbiyot tinmay rivojlanadi. Shuning uchun Radeski bir vaqtning o‘zida klinika, ta’lim maydoni va ilmiy muhit bo‘lishi kerak.',
          'Медицина постоянно развивается. Поэтому Radeski должна одновременно быть клиникой, образовательной платформой и научной средой.',
          'Medicine keeps moving. That is why Radeski should be a clinic, a learning platform, and a scientific environment at the same time.',
        ),
      },
      {
        id: 'accessible-excellence',
        name: 'Accessible Excellence',
        title: L('Yuqori sifat — ochiq', 'Доступное высокое качество', 'Excellence within reach'),
        text: L(
          'Yuqori sifatli tibbiy yordam faqat poytaxt yoki yirik markazlar aholisining imtiyozi bo‘lmasligi kerak.',
          'Высокое качество медицинской помощи не должно быть привилегией только жителей столицы или крупных медицинских центров.',
          'High-quality care should not be a privilege reserved for capital cities or large medical centres.',
        ),
      },
    ],
  },

  architectureTitle: L(
    'Radeski Skin Clinic arxitekturasi',
    'Архитектура Radeski Skin Clinic',
    'The architecture of Radeski Skin Clinic',
  ),
};

export const BRAND_ARCHITECTURE: {
  id: BrandArchitectureId;
  image: string;
  name: string;
  role: L;
  title: L;
  description: L;
}[] = [
  {
    id: 'medical-dermatology',
    image: '/brand/brand-medical.webp',
    name: 'Medical Dermatology',
    role: L('Yadro', 'Ядро', 'The core'),
    title: L('Tibbiy dermatologiya', 'Медицинская дерматология', 'Medical Dermatology'),
    description: L(
      'Brendning klinik yadrosi: teri kasalliklarini tashxislash va davolash, bemor bilan uzoq muddatli kuzatuv.',
      'Клиническое ядро бренда: диагностика и лечение заболеваний кожи, долгосрочное наблюдение за пациентом.',
      'The clinical core of the brand: diagnosing and treating skin disease, and following patients over time.',
    ),
  },
  {
    id: 'dermato-oncology',
    image: '/brand/brand-oncology.webp',
    name: 'Dermato-Oncology',
    role: L('Ekspert yo‘nalish', 'Экспертное направление', 'Expert direction'),
    title: L('Dermato-onkologiya', 'Дерматоонкология', 'Dermato-Oncology'),
    description: L(
      'Teri o‘smalari va xavfli o‘zgarishlarga chuqur e’tibor: erta aniqlash, kuzatuv va mutaxassis yondashuvi.',
      'Глубокая экспертиза в области опухолей кожи и настораживающих изменений: раннее выявление, наблюдение и специализированный подход.',
      'Deep expertise in skin tumours and concerning changes: early detection, monitoring, and a specialist approach.',
    ),
  },
  {
    id: 'phototherapy',
    image: '/brand/brand-phototherapy.webp',
    name: 'Phototherapy',
    role: L('Texnologik yo‘nalish', 'Технологическое направление', 'Technology direction'),
    title: L('Fototerapiya', 'Фототерапия', 'Phototherapy'),
    description: L(
      'Surunkali teri kasalliklarida nurlanish bilan davolash — Daavlin kabinalari va klinik fototerapiya yo‘li.',
      'Лечение хронических заболеваний кожи светом: кабины Daavlin и клиническая фототерапия.',
      'Treating chronic skin disease with light: Daavlin cabins and clinical phototherapy.',
    ),
  },
  {
    id: 'laser-dermatology',
    image: '/brand/brand-laser.webp',
    name: 'Laser Dermatology',
    role: L('Yuqori texnologik yo‘nalish', 'Высокотехнологичное направление', 'High-tech direction'),
    title: L('Lazer dermatologiyasi', 'Лазерная дерматология', 'Laser Dermatology'),
    description: L(
      'Lazer usullari orqali aniq, nazoratli ta’sir: tibbiy va estetik vazifalar uchun.',
      'Точное, контролируемое воздействие лазером — для медицинских и эстетических задач.',
      'Precise, controlled laser treatment for medical and aesthetic needs.',
    ),
  },
  {
    id: 'trichology',
    image: '/brand/brand-trichology.webp',
    name: 'Trichology',
    role: L('Ixtisoslashgan yo‘nalish', 'Специализированное направление', 'Specialized direction'),
    title: L('Trixologiya', 'Трихология', 'Trichology'),
    description: L(
      'Soch va bosh terisi kasalliklariga alohida e’tibor: tashxis, davolash va uzoq kuzatuv.',
      'Отдельное внимание к заболеваниям волос и кожи головы: диагностика, лечение и длительное наблюдение.',
      'Focused care for hair and scalp conditions: diagnosis, treatment, and long-term follow-up.',
    ),
  },
  {
    id: 'research',
    image: '/brand/brand-evidence.webp',
    name: 'Research',
    role: L('Intellektual kapital', 'Интеллектуальный капитал', 'Intellectual capital'),
    title: L('Tadqiqot', 'Исследования', 'Research'),
    description: L(
      'Klinik tajribani bilimga aylantirish: tahlil, nashrlar va davolashni takomillashtirish.',
      'Превращать клинический опыт в знание: анализ, публикации и совершенствование лечения.',
      'Turning clinical experience into knowledge: analysis, publications, and better treatment.',
    ),
  },
  {
    id: 'academy',
    image: '/brand/brand-academy.webp',
    name: 'Academy',
    role: L('Inson kapitali', 'Человеческий капитал', 'Human capital'),
    title: L('Akademiya', 'Академия', 'Academy'),
    description: L(
      'Yosh shifokorlarni o‘qitish, tajriba uzatish va kasbiy o‘sish muhiti.',
      'Обучение молодых врачей, передача опыта и среда профессионального роста.',
      'Training young physicians, passing on experience, and a setting for professional growth.',
    ),
  },
  {
    id: 'digital',
    image: '/brand/brand-digital.webp',
    name: 'Digital',
    role: L('Kengayish imkoniyati', 'Масштабируемость', 'Scalability'),
    title: L('Raqamli yo‘nalish', 'Цифровое направление', 'Digital'),
    description: L(
      'DermaScan, raqamli kuzatuv va sun’iy intellekt — brendni kengaytirish va bemorni yaqinroq kuzatish vositalari.',
      'DermaScan, цифровое наблюдение и искусственный интеллект — инструменты масштабирования бренда и более близкого сопровождения пациента.',
      'DermaScan, digital follow-up and AI — tools to scale the brand and stay closer to the patient.',
    ),
  },
  {
    id: 'skin-hospital',
    image: '/brand/brand-hospital.webp',
    name: 'Skin Hospital',
    role: L('Flagman', 'Флагман', 'Flagship'),
    title: L('Teri shifoxonasi', 'Skin Hospital', 'Skin Hospital'),
    description: L(
      'Brendning flagman modeli: chuqur ixtisos, to‘liq klinik yo‘l va yuqori standartdagi teri shifoxonasi.',
      'Флагманская модель бренда: глубокая специализация, полный клинический путь и высокий стандарт кожного госпиталя.',
      'The flagship model of the brand: deep specialization, a full clinical pathway, and a high-standard skin hospital.',
    ),
  },
];
