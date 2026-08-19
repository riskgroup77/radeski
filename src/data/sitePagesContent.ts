import type { Locale } from '../types';
import { CLINIC_MAP_EMBED_URL, getClinicMapOpenUrl, KOKAND_BRANCH_MAP_EMBED_URL, KOKAND_BRANCH_MAP_OPEN_URL, LIEGE_BRANCH_MAP_EMBED_URL, LIEGE_BRANCH_MAP_OPEN_URL, RADE_SKIN_CLINIC_EMAIL, RADE_SKIN_CLINIC_PHONE, RADE_SKIN_CLINIC_WEBSITE } from '../config/links';

type LocalizedText = Record<Locale, string>;

export interface ClinicVideo {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  src: string;
  duration: string;
  category: LocalizedText;
  thumbnail?: string;
  sortOrder?: number;
  isActive?: boolean;
}

export interface ClinicBranch {
  id: string;
  name: LocalizedText;
  address: LocalizedText;
  phone: string;
  /** tel: havolasi uchun (ixtiyoriy; bo‘lmasa phone dan hosil qilinadi) */
  phoneTel?: string;
  hours: LocalizedText;
  services: LocalizedText;
  mapEmbed: string;
  /** Google Maps'da ochish uchun to'g'ri havola (ixtiyoriy) */
  mapUrl?: string;
  website?: string;
  email?: string;
  isMain?: boolean;
  image: string;
  sortOrder?: number;
  isActive?: boolean;
}

export interface TreatmentResult {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  service: LocalizedText;
  beforeImage: string;
  afterImage: string;
  /** Birlashtirilgan oldin/keyin rasm (masalan do1.jpg) */
  comparisonImage?: string;
  sessions: LocalizedText;
  sortOrder?: number;
  published?: boolean;
}

export interface ClinicPartner {
  id: string;
  name: LocalizedText;
  logo: string;
  logoVariant?: 'dark' | 'light';
  sortOrder?: number;
  isActive?: boolean;
}

export interface CustomerReview {
  id: string;
  authorName: string;
  rating: number;
  comment: LocalizedText;
  service?: LocalizedText;
  date: string;
  published: boolean;
}

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'review-1',
    authorName: 'Nilufar A.',
    rating: 5,
    comment: {
      uz: "IPL seanslaridan keyin terim ancha yorqin va tekis bo'ldi. Shifokor har bir bosqichni tushuntirib berdi — juda professional yondashuv.",
      ru: 'После курса IPL кожа стала заметно свежее и ровнее. Врач подробно объяснял каждый этап — очень профессиональный подход.',
      en: 'After IPL sessions my skin became noticeably brighter and smoother. The doctor explained every step — truly professional care.',
    },
    service: { uz: 'IPL terapiya', ru: 'IPL-терапия', en: 'IPL therapy' },
    date: '2025-11-12',
    published: true,
  },
  {
    id: 'review-2',
    authorName: 'Jamshid R.',
    rating: 5,
    comment: {
      uz: "Dermatoskopiya tekshiruvi juda qulay va tez o'tkazildi. Natijalar aniq, shifokor barcha savollarga batafsil javob berdi.",
      ru: 'Обследование дерматоскопией прошло быстро и комфортно. Результаты понятны, врач подробно ответил на все вопросы.',
      en: 'The dermatoscopy exam was quick and comfortable. Results were clear and the doctor answered all my questions in detail.',
    },
    service: { uz: 'Dermatoskopiya', ru: 'Дерматоскопия', en: 'Dermatoscopy' },
    date: '2025-10-28',
    published: true,
  },
  {
    id: 'review-3',
    authorName: 'Dilnoza K.',
    rating: 5,
    comment: {
      uz: "Akne davolash kursidan keyin yuzim sezilarli darajada tozalandi. Klinika sharoiti va xodimlarning muomilasi a'lo darajada.",
      ru: 'После курса лечения акне лицо заметно очистилось. Условия клиники и отношение персонала на высшем уровне.',
      en: 'After acne treatment my face cleared up significantly. Clinic conditions and staff attitude are excellent.',
    },
    service: { uz: 'Dermatologiya', ru: 'Дерматология', en: 'Dermatology' },
    date: '2025-09-15',
    published: true,
  },
  {
    id: 'review-4',
    authorName: 'Aziza M.',
    rating: 5,
    comment: {
      uz: "Kosmetologik muolajalar natijasidan juda mamnunman. Natija tabiiy va uzoq muddatli saqlanmoqda.",
      ru: 'Очень довольна результатом косметологических процедур. Эффект естественный и сохраняется долго.',
      en: 'Very happy with the cosmetic treatment results. The effect looks natural and lasts a long time.',
    },
    service: { uz: 'Kosmetologiya', ru: 'Косметология', en: 'Cosmetology' },
    date: '2025-08-03',
    published: true,
  },
  {
    id: 'review-5',
    authorName: 'Rustam T.',
    rating: 4,
    comment: {
      uz: "Qabulga yozilish oson, navbat tez. Shifokor vaqtida qabul qildi va davolash rejasini aniq tuzdi.",
      ru: 'Записаться легко, очереди почти нет. Врач принял вовремя и составил понятный план лечения.',
      en: 'Booking was easy and wait times are short. The doctor saw me on time and created a clear treatment plan.',
    },
    date: '2025-07-20',
    published: true,
  },
];

export const CLINIC_PARTNERS: ClinicPartner[] = [
  {
    id: 'deka',
    name: { uz: 'DEKA', ru: 'DEKA', en: 'DEKA' },
    logo: '/partners/hamkor1.png',
    logoVariant: 'dark',
  },
  {
    id: 'bella-systech',
    name: { uz: 'Bella-Systech Uzbekistan', ru: 'Bella-Systech Uzbekistan', en: 'Bella-Systech Uzbekistan' },
    logo: '/partners/hamkor2.png',
    logoVariant: 'dark',
  },
  {
    id: 'cynosure-lutronic',
    name: { uz: 'Cynosure & Lutronic', ru: 'Cynosure & Lutronic', en: 'Cynosure & Lutronic' },
    logo: '/partners/hamkor3.jpg',
    logoVariant: 'light',
  },
  {
    id: 'davlin',
    name: { uz: 'Daavlin', ru: 'Davlin', en: 'Davlin' },
    logo: '/partners/hamkor4.jfif',
    logoVariant: 'dark',
    sortOrder: 4,
  },
  {
    id: 'inmode',
    name: { uz: 'InMode', ru: 'InMode', en: 'InMode' },
    logo: '/partners/hamkor5.png',
    logoVariant: 'dark',
    sortOrder: 5,
  },
];

export const CLINIC_VIDEOS: ClinicVideo[] = [
  {
    id: 'clinic-video-1',
    sortOrder: 33,
    title: {
      uz: 'Janus Pro: kompyuterli yuz tahlili',
      ru: 'Janus Pro: компьютерный анализ лица',
      en: 'Janus Pro: computerized facial analysis',
    },
    description: {
      uz: 'Qabul va Janus Pro tizimi yordamida yuz terisini chuqur tahlil qilish jarayoni.',
      ru: 'Приём и глубокий анализ кожи лица с системой Janus Pro.',
      en: 'Consultation and in-depth facial skin analysis with the Janus Pro system.',
    },
    src: '/videos/1.mp4',
    duration: '0:50',
    category: { uz: 'Instagram', ru: 'Instagram', en: 'Instagram' },
  },
  {
    id: 'clinic-video-2',
    sortOrder: 32,
    title: {
      uz: 'Lazer epilyatsiyasi — qo‘ltiq osti',
      ru: 'Лазерная эпиляция — подмышечная зона',
      en: 'Laser hair removal — underarms',
    },
    description: {
      uz: 'Qo‘ltiq ostidagi tuklarni og‘riqsiz va qulay lazer epilyatsiyasi bilan olib tashlash.',
      ru: 'Безболезненная и комфортная лазерная эпиляция в зоне подмышек.',
      en: 'Painless, comfortable laser hair removal for the underarm area.',
    },
    src: '/videos/2.mp4',
    duration: '0:53',
    category: { uz: 'Instagram', ru: 'Instagram', en: 'Instagram' },
  },
  {
    id: 'clinic-video-3',
    sortOrder: 31,
    title: {
      uz: 'DEKA SmartXide CO2 lazer muolajasi',
      ru: 'Лазерное лечение DEKA SmartXide CO2',
      en: 'DEKA SmartXide CO2 laser treatment',
    },
    description: {
      uz: 'Postakne chandiqlari va teri nuqsonlarini DEKA SmartXide Punto CO2 lazer bilan davolash.',
      ru: 'Лечение рубцов постакне и дефектов кожи лазером DEKA SmartXide Punto CO2.',
      en: 'Treating post-acne scars and skin imperfections with the DEKA SmartXide Punto CO2 laser.',
    },
    src: '/videos/3.mp4',
    duration: '1:03',
    category: { uz: 'Instagram', ru: 'Instagram', en: 'Instagram' },
  },
  {
    id: 'clinic-video-4',
    sortOrder: 30,
    title: {
      uz: 'Lazer epilyatsiyasi jarayoni',
      ru: 'Процесс лазерной эпиляции',
      en: 'Laser hair removal procedure',
    },
    description: {
      uz: 'Oyoq va tanadagi tuklarni zamonaviy lazer apparati yordamida olib tashlash.',
      ru: 'Удаление волос на ногах и теле с помощью современного лазерного аппарата.',
      en: 'Removing body and leg hair with a modern laser device.',
    },
    src: '/videos/4.mp4',
    duration: '0:17',
    category: { uz: 'Instagram', ru: 'Instagram', en: 'Instagram' },
  },
  {
    id: 'clinic-video-5',
    sortOrder: 29,
    title: {
      uz: 'Sosudist lazer va yuz yoshartirish',
      ru: 'Сосудистый лазер и омоложение лица',
      en: 'Vascular laser and facial rejuvenation',
    },
    description: {
      uz: 'Tomirli muammolar (rozatsea, qizarish) va yuz terisini lazer bilan yangilash.',
      ru: 'Лечение сосудистых проблем (розацеа, покраснения) и лазерное омоложение лица.',
      en: 'Treating vascular issues (rosacea, redness) and laser facial rejuvenation.',
    },
    src: '/videos/5.mp4',
    duration: '1:01',
    category: { uz: 'Instagram', ru: 'Instagram', en: 'Instagram' },
  },
  {
    id: 'clinic-video-6',
    sortOrder: 28,
    title: {
      uz: 'Soch to‘kilishi — davolash bosqichlari',
      ru: 'Выпадение волос — этапы лечения',
      en: 'Hair loss — treatment stages',
    },
    description: {
      uz: 'Shifokor soch to‘kilishi sabablari va davolashning uchinchi bosqichini tushuntiradi.',
      ru: 'Врач объясняет причины выпадения волос и третий этап лечения.',
      en: 'A physician explains hair loss causes and the third stage of treatment.',
    },
    src: '/videos/6.mp4',
    duration: '1:15',
    category: { uz: 'Instagram', ru: 'Instagram', en: 'Instagram' },
  },
  {
    id: 'clinic-video-7',
    sortOrder: 27,
    title: {
      uz: 'Bosh terisi qichishishi sabablari',
      ru: 'Причины зуда кожи головы',
      en: 'Causes of scalp itching',
    },
    description: {
      uz: 'Bosh terisi qichishishi nima uchun kuchayadi va qanday oldini olish mumkin.',
      ru: 'Почему усиливается зуд кожи головы и как его предотвратить.',
      en: 'Why scalp itching worsens and how to prevent it.',
    },
    src: '/videos/7.mp4',
    duration: '1:02',
    category: { uz: 'Instagram', ru: 'Instagram', en: 'Instagram' },
  },
  {
    id: 'clinic-video-8',
    sortOrder: 26,
    title: {
      uz: 'Fototerapiya (NB-UVB) kabinasi',
      ru: 'Кабинет фототерапии (NB-UVB)',
      en: 'Phototherapy (NB-UVB) booth',
    },
    description: {
      uz: 'Vitiligo, psoriaz va boshqa teri kasalliklari uchun fototerapiya apparati tanitilmoqda.',
      ru: 'Представление аппарата фототерапии для лечения витилиго, псориаза и других заболеваний кожи.',
      en: 'Introducing the phototherapy device for vitiligo, psoriasis, and other skin conditions.',
    },
    src: '/videos/8.mp4',
    duration: '1:14',
    category: { uz: 'Instagram', ru: 'Instagram', en: 'Instagram' },
  },
  {
    id: 'clinic-video-9',
    sortOrder: 25,
    title: {
      uz: 'Samarasiz teri parvarishi usullari',
      ru: 'Неэффективные методы ухода за кожей',
      en: 'Ineffective skincare methods',
    },
    description: {
      uz: 'Shifokor foyda bermaydigan teri parvarishi usullari haqida ogohlantiradi.',
      ru: 'Врач предупреждает о методах ухода за кожей, которые не приносят пользы.',
      en: 'A physician warns about skincare methods that do not work.',
    },
    src: '/videos/9.mp4',
    duration: '1:20',
    category: { uz: 'Instagram', ru: 'Instagram', en: 'Instagram' },
  },
  {
    id: 'clinic-video-10',
    sortOrder: 24,
    title: {
      uz: 'Soch transplantatsiyasi',
      ru: 'Трансплантация волос',
      en: 'Hair transplantation',
    },
    description: {
      uz: 'Operatsion blokda soch ekish xizmati va natijadan oldin/keyin misollari.',
      ru: 'Услуга пересадки волос в операционном блоке и примеры до/после.',
      en: 'Hair transplant service in the surgical suite with before/after examples.',
    },
    src: '/videos/10.mp4',
    duration: '0:39',
    category: { uz: 'Instagram', ru: 'Instagram', en: 'Instagram' },
  },
  {
    id: 'clinic-video-12',
    sortOrder: 23,
    title: {
      uz: 'InMode IPL — sog‘lom va yorqin teri',
      ru: 'InMode IPL — здоровая и сияющая кожа',
      en: 'InMode IPL — healthy, radiant skin',
    },
    description: {
      uz: 'Radeski klinikasida InMode IPL texnologiyasi bilan sog‘lom, chiroyli va yorqin teriga ega bo‘ling!',
      ru: 'В клинике Radeski технология InMode IPL помогает сделать кожу здоровой, красивой и сияющей.',
      en: 'At Radeski Clinic, InMode IPL technology helps you achieve healthy, beautiful, radiant skin.',
    },
    src: '/videos/12.mp4',
    duration: '0:44',
    category: { uz: 'Kosmetologiya', ru: 'Косметология', en: 'Cosmetology' },
  },
  {
    id: 'clinic-video-13',
    sortOrder: 22,
    title: {
      uz: 'DEKA CO₂ lazer muolajasi',
      ru: 'Процедура на лазере DEKA CO₂',
      en: 'DEKA CO₂ laser treatment',
    },
    description: {
      uz: 'DEKA CO₂ lazer apparatida muolaja — teri nuqsonlari va yangilanish uchun zamonaviy yondashuv.',
      ru: 'Современная процедура на лазерном аппарате DEKA CO₂ для коррекции и обновления кожи.',
      en: 'A modern DEKA CO₂ laser procedure for skin correction and renewal.',
    },
    src: '/videos/13.mp4',
    duration: '0:48',
    category: { uz: 'Lazer terapiya', ru: 'Лазерная терапия', en: 'Laser therapy' },
  },
  {
    id: 'clinic-video-14',
    sortOrder: 21,
    title: {
      uz: 'Lutronic Derma V — pigment va tomirlar',
      ru: 'Lutronic Derma V — пигмент и сосуды',
      en: 'Lutronic Derma V — pigment and vessels',
    },
    description: {
      uz: 'Lutronic Derma V apparatida pigmentatsiya va qon tomirlar to‘rini davolash.',
      ru: 'Лечение пигментации и сосудистой сетки на аппарате Lutronic Derma V.',
      en: 'Treating pigmentation and vascular networks with the Lutronic Derma V device.',
    },
    src: '/videos/14.mp4',
    duration: '1:04',
    category: { uz: 'Dermatologiya', ru: 'Дерматология', en: 'Dermatology' },
  },
  {
    id: 'clinic-video-15',
    sortOrder: 20,
    title: {
      uz: 'Tovon yorilishining sabablari',
      ru: 'Почему трескаются пятки',
      en: 'Why heels crack',
    },
    description: {
      uz: 'Tovon yorilishi nima uchun paydo bo‘ladi va qachon podologga murojaat qilish kerak.',
      ru: 'Из-за чего появляются трещины на пятках и когда стоит обратиться к подологу.',
      en: 'What causes cracked heels and when to see a podiatrist.',
    },
    src: '/videos/15.mp4',
    duration: '1:10',
    category: { uz: 'Podologiya', ru: 'Подология', en: 'Podiatry' },
  },
  {
    id: 'clinic-video-16',
    sortOrder: 19,
    title: {
      uz: 'Soch ekishdan keyingi rejim',
      ru: 'Режим после пересадки волос',
      en: 'Aftercare after hair transplant',
    },
    description: {
      uz: 'Soch ekishdan keyin qanday rejimga rioya qilish kerak — tiklanish uchun muhim maslahatlar.',
      ru: 'Какой режим соблюдать после пересадки волос — важные рекомендации для восстановления.',
      en: 'What routine to follow after a hair transplant — key tips for recovery.',
    },
    src: '/videos/16.mp4',
    duration: '0:55',
    category: { uz: 'Trixologiya', ru: 'Трихология', en: 'Trichology' },
  },
  {
    id: 'clinic-video-17',
    sortOrder: 18,
    title: {
      uz: 'Trixolog tavsiya qiladigan muolajalar',
      ru: 'Процедуры, которые рекомендует трихолог',
      en: 'Treatments a trichologist recommends',
    },
    description: {
      uz: 'Sochning turli kasalliklarida trixolog qanday muolajalarni tavsiya qiladi?',
      ru: 'Какие процедуры рекомендует трихолог при разных заболеваниях волос?',
      en: 'Which treatments does a trichologist recommend for different hair conditions?',
    },
    src: '/videos/17.mp4',
    duration: '0:45',
    category: { uz: 'Trixologiya', ru: 'Трихология', en: 'Trichology' },
  },
  {
    id: 'clinic-video-18',
    sortOrder: 17,
    title: {
      uz: 'Melazmani Radeski’da davolash',
      ru: 'Лечение мелазмы в Radeski',
      en: 'Melasma treatment at Radeski',
    },
    description: {
      uz: 'Radeski klinikasida melazma qanday davolanadi — individual yondashuv va zamonaviy usullar.',
      ru: 'Как в клинике Radeski лечат мелазму — индивидуальный подход и современные методы.',
      en: 'How melasma is treated at Radeski Clinic — individual plans and modern methods.',
    },
    src: '/videos/18.mp4',
    duration: '1:09',
    category: { uz: 'Dermatologiya', ru: 'Дерматология', en: 'Dermatology' },
  },
  {
    id: 'clinic-video-19',
    sortOrder: 16,
    title: {
      uz: 'Teri parvarishi uchun nima qilinadi?',
      ru: 'Что входит в уход за кожей?',
      en: 'What does skin care include?',
    },
    description: {
      uz: 'Teri parvarishi uchun klinikada qanday bosqichlar va tavsiyalar qo‘llaniladi.',
      ru: 'Какие этапы и рекомендации входят в профессиональный уход за кожей в клинике.',
      en: 'Which steps and recommendations make up professional clinic skin care.',
    },
    src: '/videos/19.mp4',
    duration: '1:05',
    category: { uz: 'Kosmetologiya', ru: 'Косметология', en: 'Cosmetology' },
  },
  {
    id: 'clinic-video-20',
    sortOrder: 15,
    title: {
      uz: 'Soqol va soch ekish',
      ru: 'Пересадка бороды и волос',
      en: 'Beard and hair transplant',
    },
    description: {
      uz: 'Erkaklar uchun soqol ekish, ayollar uchun androgenetik alopesiyada soch ekish.',
      ru: 'Пересадка бороды для мужчин и пересадка волос при андрогенетической алопеции у женщин.',
      en: 'Beard transplant for men and hair transplant for women with androgenetic alopecia.',
    },
    src: '/videos/20.mp4',
    duration: '0:33',
    category: { uz: 'Trixologiya', ru: 'Трихология', en: 'Trichology' },
  },
  {
    id: 'clinic-video-21',
    sortOrder: 14,
    title: {
      uz: 'Sochlar uchun PRP foydasi',
      ru: 'Польза PRP для волос',
      en: 'Benefits of PRP for hair',
    },
    description: {
      uz: 'Sochlar uchun PRP muolajasining foydasi — zichlik, o‘sish va soch to‘kilishini kamaytirish.',
      ru: 'Польза PRP-процедуры для волос: плотность, рост и снижение выпадения.',
      en: 'How PRP treatment helps hair density, growth, and reduced shedding.',
    },
    src: '/videos/21.mp4',
    duration: '0:52',
    category: { uz: 'Trixologiya', ru: 'Трихология', en: 'Trichology' },
  },
  {
    id: 'clinic-video-22',
    sortOrder: 13,
    title: {
      uz: 'Trixologdan foydali tavsiyalar',
      ru: 'Полезные советы трихолога',
      en: 'Helpful tips from a trichologist',
    },
    description: {
      uz: 'Sochlaringiz salomatligi uchun trixolog shifokordan foydali tavsiyalar.',
      ru: 'Полезные рекомендации трихолога для здоровья ваших волос.',
      en: 'Practical trichologist advice for healthier hair.',
    },
    src: '/videos/22.mp4',
    duration: '1:22',
    category: { uz: 'Trixologiya', ru: 'Трихология', en: 'Trichology' },
  },
  {
    id: 'clinic-video-30',
    sortOrder: 12,
    title: {
      uz: 'Endi siz shifokor-dermatologdan 7 ta asosiy insaytni bilasiz!',
      ru: 'Теперь вы знаете 7 ключевых инсайтов от врача-дерматолога!',
      en: 'Now you know 7 key insights from a dermatologist!',
    },
    description: {
      uz: 'Maslahat yoki muolajalarga yozilish uchun istalgan filialimizga murojaat qilishingiz mumkin.',
      ru: 'Для записи на консультацию или процедуры вы можете обратиться в любой наш филиал.',
      en: 'To book a consultation or treatment, you can contact any of our branches.',
    },
    src: '/videos/30.mp4',
    duration: '1:01',
    category: { uz: 'Dermatologiya', ru: 'Дерматология', en: 'Dermatology' },
  },
  {
    id: 'clinic-video-31',
    sortOrder: 11,
    title: {
      uz: 'Kosmetologiya xizmatlari uchun super aksiya',
      ru: 'Супер-акция на услуги косметологии',
      en: 'Super promo on cosmetology services',
    },
    description: {
      uz: 'PRP + yuz tozalash va mezoterapiya + yuz tozalash paketlari — chegirmali narxlar haqida qisqa video.',
      ru: 'Пакеты PRP + чистка лица и мезотерапия + чистка лица — короткое видео о ценах со скидкой.',
      en: 'PRP + facial cleansing and mesotherapy + facial cleansing packages — a short video about discounted prices.',
    },
    src: '/videos/31.mp4',
    duration: '0:39',
    category: { uz: 'Kosmetologiya', ru: 'Косметология', en: 'Cosmetology' },
  },
  {
    id: 'clinic-video-34',
    sortOrder: 10,
    title: {
      uz: 'Sochlar uchun plazmotorapiya 400 000 so‘m o‘rniga 250 000 so‘m!',
      ru: 'Плазмотерапия для волос: 250 000 сум вместо 400 000 сум!',
      en: 'Hair PRP therapy: 250,000 UZS instead of 400,000 UZS!',
    },
    description: {
      uz: 'Qo‘qonda Radeski Skin Clinic ochilishi munosabati bilan super-aksiya. Soch to‘kilishi, siyraklashish yoki o‘sish to‘xtagan bo‘lsa — plazmotorapiya aynan shu holatlar uchun.',
      ru: 'Супер-акция к открытию Radeski Skin Clinic в Коканде. Если беспокоит сильное выпадение, поредение или остановка роста волос — плазмотерапия как раз для вас.',
      en: 'A special opening promo for Radeski Skin Clinic in Kokand. If heavy shedding, thinning, or stalled hair growth worries you — PRP therapy is designed for this.',
    },
    src: '/videos/34.mp4',
    duration: '0:37',
    category: { uz: 'Trixologiya', ru: 'Трихология', en: 'Trichology' },
  },
  {
    id: 'clinic-video-35',
    sortOrder: 9,
    title: {
      uz: 'Tibbiy pedikyur 230 000 so‘m o‘rniga 180 000 so‘m!',
      ru: 'Медицинский педикюр: 180 000 сум вместо 230 000 сум!',
      en: 'Medical pedicure: 180,000 UZS instead of 230,000 UZS!',
    },
    description: {
      uz: 'Qo‘qon filiali ochilishi munosabati bilan aksiya. Og‘riqli tirnoq botishi, qalinlashish yoki deformatsiya bo‘lsa — oddiy pedikyur yetmaydi; biz murakkab hollarni ham steril, og‘riqsiz va xavfsiz qabul qilamiz.',
      ru: 'Акция к открытию филиала в Коканде. При вросшем ногте, утолщении или деформации обычный педикюр не поможет — принимаем даже сложные случаи стерильно, без боли и с минимальным риском осложнений.',
      en: 'Opening promo for our Kokand branch. For ingrown nails, thickening, or deformation, a regular pedicure is not enough — we treat even complex cases in sterile conditions, with comfort and low complication risk.',
    },
    src: '/videos/35.mp4',
    duration: '0:37',
    category: { uz: 'Podologiya', ru: 'Подология', en: 'Podiatry' },
  },
  {
    id: 'clinic-video-36',
    sortOrder: 8,
    title: {
      uz: 'Qo‘qonda dermatologdan bepul konsultatsiya!',
      ru: 'Бесплатная консультация дерматолога в Коканде!',
      en: 'Free dermatologist consultation in Kokand!',
    },
    description: {
      uz: 'Radeski Skin Clinic Qo‘qon filiali ochilishi munosabati bilan vitiligoni davolash bo‘yicha dermatolog konsultatsiyasi bepul. Tajriba va zamonaviy uskunalar to‘g‘ri tashxis va eng samarali davoni tanlashga yordam beradi.',
      ru: 'К открытию филиала Radeski Skin Clinic в Коканде — бесплатная консультация дерматолога по лечению витилиго. Опыт врачей и современное оборудование помогают поставить точный диагноз и выбрать эффективную терапию.',
      en: 'For the opening of Radeski Skin Clinic in Kokand — a free dermatologist consultation on vitiligo care. Our specialists’ experience and modern equipment support accurate diagnosis and the most effective treatment plan.',
    },
    src: '/videos/36.mp4',
    duration: '0:30',
    category: { uz: 'Dermatologiya', ru: 'Дерматология', en: 'Dermatology' },
  },
  {
    id: 'clinic-video-37',
    sortOrder: 7,
    title: {
      uz: '1 daqiqada qabulga qanday yozilish mumkin?',
      ru: 'Как записаться на приём за 1 минуту?',
      en: 'How to book an appointment in 1 minute?',
    },
    description: {
      uz: 'Qisqa video orqali qadamma-qadam yo‘riqnomani ko‘ring va muolajalarga o‘zingizga qulay vaqtda yoziling.',
      ru: 'Посмотрите пошаговую инструкцию в коротком видео и запишитесь на процедуры в удобное для вас время.',
      en: 'Watch this short step-by-step guide and book your treatment at a time that works for you.',
    },
    src: '/videos/37.mp4',
    duration: '0:51',
    category: { uz: 'Yo‘riqnoma', ru: 'Инструкция', en: 'How-to' },
  },
  {
    id: 'clinic-video-38',
    sortOrder: 6,
    title: {
      uz: 'DEKA Tetra Pro lazer: ajin, dog‘ va chandiqlarga zamonaviy yechim',
      ru: 'Лазер Tetra Pro от DEKA: новый уровень ухода от морщин, пятен и рубцов',
      en: 'DEKA Tetra Pro laser: a modern answer to wrinkles, spots, and scars',
    },
    description: {
      uz: 'Jarrohsiz va tez tiklanish bilan: lazer silliqlash, ajinlarni kamaytirish, pigment dog‘larini ochish, chandiq va shramlarni yumshatish, yumshoq yoshartirish. Radeski Skin Clinic’da DEKA Tetra Pro — teri sifatini yaxshilash uchun aniq va qulay yondashuv.',
      ru: 'Без операций и с быстрым восстановлением: лазерная шлифовка, уменьшение морщин, работа с пигментными пятнами, лечение рубцов и шрамов, деликатное омоложение. В Radeski Skin Clinic лазер Tetra Pro от DEKA помогает бережно улучшить качество кожи.',
      en: 'No surgery and a shorter recovery: laser resurfacing, wrinkle refinement, pigment-spot care, scar improvement, and gentle rejuvenation. At Radeski Skin Clinic, DEKA Tetra Pro offers a precise, comfortable way to improve skin quality.',
    },
    src: '/videos/38.mp4',
    duration: '0:53',
    category: { uz: 'Lazer kosmetologiya', ru: 'Лазерная косметология', en: 'Laser aesthetics' },
  },
  {
    id: 'clinic-video-39',
    sortOrder: 6,
    title: {
      uz: 'Aquex Daavlin: kaft va tovon terlashiga og‘riqsiz yechim',
      ru: 'Aquex Daavlin: безопасное решение против потливости ладоней и стоп',
      en: 'Aquex Daavlin: a gentle solution for sweaty palms and soles',
    },
    description: {
      uz: 'Nam kaftlar va tovonlar noqulaylik keltiradimi? Aquex Daavlin uskunasi bilan giperhidrozni (ortiqcha terlashni) og‘riqsiz, ukolsiz va uzoq tiklanishsiz kamaytirish mumkin — organizm uchun xavfsiz yondashuv. Radeski Skin Clinic’da qulaylik va ishonchli natija uchun individual reja tuziladi.',
      ru: 'Устали от влажных ладоней и дискомфорта? Аппарат Aquex Daavlin помогает снизить избыточную потливость кистей и стоп без уколов, боли и долгой реабилитации — мягко и безопасно для организма. В Radeski Skin Clinic подбираем индивидуальный курс для заметного комфорта.',
      en: 'Tired of damp palms and daily discomfort? Aquex Daavlin therapy can reduce excessive sweating of the hands and feet without injections, pain, or long downtime — a body-friendly approach. At Radeski Skin Clinic we build an individual plan for more comfortable, drier skin.',
    },
    src: '/videos/39.mp4',
    duration: '0:48',
    category: { uz: 'Dermatologiya', ru: 'Дерматология', en: 'Dermatology' },
  },
  {
    id: 'clinic-video-40',
    sortOrder: 6,
    title: {
      uz: 'Klinikamizda ish kunlari qanday o‘tishini ko‘rsatamiz😉',
      ru: 'Показываем, как проходит рабочий день в нашей клинике😉',
      en: 'A look inside a working day at our clinic😉',
    },
    description: {
      uz: 'Radeski Skin Clinic jamoasining ish kuni: qabul, diagnostika va bemorlarga e’tibor. Klinikamiz muhitini video orqali yaqindan ko‘ring.',
      ru: 'Рабочий день команды Radeski Skin Clinic: приём, диагностика и забота о пациентах. Короткое видео о атмосфере и ритме нашей клиники.',
      en: 'A day with the Radeski Skin Clinic team: consultations, diagnostics, and patient care. Watch a short glimpse of our clinic’s everyday pace.',
    },
    src: '/videos/40.mp4',
    duration: '2:05',
    category: { uz: 'Klinika hayoti', ru: 'Жизнь клиники', en: 'Clinic life' },
  },
  {
    id: 'clinic-video-41',
    sortOrder: 5,
    title: {
      uz: '🫧 Radeski Skin Clinic’da go‘zallik oyligi!',
      ru: '🫧 Месяц красоты в Radeski Skin Clinic!',
      en: '🫧 Beauty Month at Radeski Skin Clinic!',
    },
    description: {
      uz: 'Bir qator kosmetologik muolajalar uchun aksiya: PRP + yuz tozalash — 600 000 so‘m; mezoterapiya + yuz tozalash — 700 000 so‘m; piling + yuz tozalash — 700 000 so‘m; karbonli piling + yuz tozalash — 800 000 so‘m.',
      ru: 'Специальные пакеты процедур: PRP + чистка лица — 600 000 сум; мезотерапия + чистка лица — 700 000 сум; пилинг + чистка лица — 700 000 сум; карбоновый пилинг + чистка лица — 800 000 сум.',
      en: 'Special treatment packages: PRP + facial cleansing — 600,000 UZS; mesotherapy + facial cleansing — 700,000 UZS; peel + facial cleansing — 700,000 UZS; carbon peel + facial cleansing — 800,000 UZS.',
    },
    src: '/videos/41.mp4',
    duration: '0:40',
    category: { uz: 'Aksiya', ru: 'Акция', en: 'Promo' },
  },
  {
    id: 'clinic-video-42',
    sortOrder: 4,
    title: {
      uz: '🔍 Seboreyali dermatit qanday davolanadi?',
      ru: '🔍 Как лечится себорейный дерматит?',
      en: '🔍 How is seborrheic dermatitis treated?',
    },
    description: {
      uz: 'Tizimli terapiya zamburug‘ga qarshi preparatlarni (itrakonazol, flukonazol) o‘z ichiga oladi — ular kasallik qaytalangan (retsidiv) davrda va og‘ir shakllarida qo‘llaniladi.\n\n📌 Tashqi terapiya:\n1. 2% ketokonazol, qatron (degot), rux pirition va siklopiroks saqlovchi shampunlar.\n2. Kortikosteroidli losyonlar (faqat qisqa kurslar bilan).\n\n📌 Bosh terisini parvarish qilish:\n1. Sirt faol moddalar (PAV) va sulfatlarsiz shampunlar bilan mayin tozalash.\n2. Bosh terisini namlantirish.\n3. Yog‘li tabiiy moylar va agressiv soch turmaklash usullarini butunlay istisno qilish.\n\nSeboreyali dermatitga qarshi samarali davolash choralarini tanlash uchun konsultatsiyamizga yoziling.',
      ru: 'Системная терапия включает противогрибковые препараты (итраконазол, флуконазол) — их применяют при рецидивах и тяжёлых формах.\n\n📌 Наружная терапия:\n1. Шампуни с 2% кетоконазолом, дёгтем, пиритионом цинка и циклопироксом.\n2. Лосьоны с кортикостероидами (только короткими курсами).\n\n📌 Уход за кожей головы:\n1. Мягкое очищение шампунями без сульфатов и агрессивных ПАВ.\n2. Увлажнение кожи головы.\n3. Полный отказ от жирных натуральных масел и агрессивных способов укладки.\n\nЗапишитесь на консультацию, чтобы подобрать эффективную схему лечения себорейного дерматита.',
      en: 'Systemic care may include antifungal medicines (itraconazole, fluconazole) — used for flares, recurrent disease, and more severe forms.\n\n📌 Topical care:\n1. Shampoos with 2% ketoconazole, tar, zinc pyrithione, or ciclopirox.\n2. Corticosteroid lotions (short courses only).\n\n📌 Scalp care steps:\n1. Gentle cleansing with sulfate-free, mild-surfactant shampoos.\n2. Moisturizing the scalp.\n3. Avoiding oily natural oils and aggressive styling.\n\nBook a consultation so we can choose an effective plan for seborrheic dermatitis.',
    },
    src: '/videos/42.mp4',
    duration: '1:02',
    category: { uz: 'Dermatologiya', ru: 'Дерматология', en: 'Dermatology' },
  },
  {
    id: 'clinic-video-43',
    sortOrder: 3,
    title: {
      uz: '👌 Silliq teri — o‘tmish izlarisiz: bu mumkin!',
      ru: '👌 Гладкая кожа без следов прошлого — это реально!',
      en: '👌 Smooth skin without traces of the past — it is possible!',
    },
    description: {
      uz: 'Chandiqlarni lazer bilan olib tashlash jarayonini ko‘rsatamiz.\n\nMuolaja ilg‘or Tetra PRO apparatida o‘tkaziladi — u teri relyefini samarali va ehtiyotkor tekislaydi, yangilanishni va kollagen ishlab chiqarishni kuchaytiradi.\n\nChandiqlardan xalos bo‘ling va o‘zingizga ishonchni qaytaring.',
      ru: 'Показываем процесс лазерного удаления шрамов.\n\nПроцедура проводится на передовом аппарате Tetra PRO — он эффективно и деликатно выравнивает рельеф кожи, запуская мощный процесс обновления и выработки коллагена.\n\nИзбавьтесь от рубцов и верните уверенность в себе.',
      en: 'We show the laser scar-removal process step by step.\n\nThe procedure is done on the advanced Tetra PRO device — it reshapes skin texture effectively yet gently, boosting renewal and collagen production.\n\nLeave scars behind and regain confidence in your skin.',
    },
    src: '/videos/43.mp4',
    duration: '0:52',
    category: { uz: 'Lazer', ru: 'Лазер', en: 'Laser' },
  },
  {
    id: 'clinic-video-44',
    sortOrder: 2,
    title: {
      uz: '👌 Deka Moveo lazer epilyatsiyasi endi Qo‘qonda!',
      ru: '👌 Лазерная эпиляция Deka Moveo теперь в Коканде!',
      en: '👌 Deka Moveo laser hair removal is now in Kokand!',
    },
    description: {
      uz: 'Qo‘qondagi Radeski Skin Clinic’da premium toifadagi Deka Moveo aleksandrit lazeri yordamida.\n\nNima uchun aynan Deka Moveo’ni tanlashadi:\n\n🔥 To‘liq kurs sizni istalmagan tuklardan biryo‘la xalos qiladi.\n🧊 Kontaktli sovutish tizimiga ega noyob safir nasadkasi muolajani mutlaqo qulay tarzda o‘tishini ta’minlaydi.\n⚡️ Seans minimal vaqtni oladi.\n☀️ Terining istalgan turi va hatto qoraygan teriga ham mos keladi.',
      ru: 'В Radeski Skin Clinic в Коканде — на премиальном александритовом лазере Deka Moveo.\n\nПочему выбирают именно Deka Moveo:\n\n🔥 Полный курс помогает надолго избавиться от нежелательных волос.\n🧊 Уникальная сапфировая насадка с контактным охлаждением делает процедуру максимально комфортной.\n⚡️ Сеанс занимает минимум времени.\n☀️ Подходит для любого типа кожи — в том числе для уже загорелой.',
      en: 'At Radeski Skin Clinic in Kokand — with the premium Deka Moveo alexandrite laser.\n\nWhy people choose Deka Moveo:\n\n🔥 A full course helps you leave unwanted hair behind for the long term.\n🧊 A unique sapphire tip with contact cooling keeps the session comfortable.\n⚡️ Each appointment takes minimal time.\n☀️ Suitable for all skin types — including tanned skin.',
    },
    src: '/videos/44.mp4',
    duration: '0:45',
    category: { uz: 'Lazer epilyatsiya', ru: 'Лазерная эпиляция', en: 'Laser hair removal' },
  },
  {
    id: 'clinic-video-45',
    sortOrder: 1,
    title: {
      uz: '🧬 100 yoki 1000 bemor — bu juda ko‘p odamga yordam berganimizdir',
      ru: '🧬 100 или 1000 пациентов — это очень много людей, которым мы помогли',
      en: '🧬 100 or 1,000 patients — that is a great many people we were able to help',
    },
    description: {
      uz: 'Ba’zan raqamlar ortidagi insonlarni unutib qo‘yamiz: 100 yoki 1000 bemor — bu yordam olgan juda ko‘p odam.\n\nRadeski jamoasi har kuni shu uchun ishlaydi: siz sog‘lom bo‘ling, o‘zingizni yaxshi his qiling.',
      ru: 'Иногда за цифрами теряются живые люди: 100 или 1000 пациентов — это очень много тех, кому мы смогли помочь.\n\nКоманда Radeski каждый день работает ради этого: чтобы вы были здоровы и чувствовали себя счастливее.',
      en: 'Numbers can hide the people behind them: 100 or 1,000 patients means a great many lives we were able to support.\n\nThe Radeski team works every day for this: so you can be healthier and happier.',
    },
    src: '/videos/45.mp4',
    duration: '0:14',
    category: { uz: 'Klinika', ru: 'О клинике', en: 'Clinic' },
  },
  {
    id: 'clinic-video-46',
    sortOrder: 2,
    title: {
      uz: 'IPL — bu shunchaki “dog‘ni yo‘qotish” emas',
      ru: 'IPL — это не просто «убрать пятно»',
      en: 'IPL is more than “erasing a spot”',
    },
    description: {
      uz: 'Intensiv impulsli yorug‘lik terining chuqur qatlamlariga yetib, hujayra darajasida tabiiy tiklanishni ishga tushiradi.\n\nProtsedura nima beradi:\n\n↳ Pigment dog‘larini kamaytirish\n↳ Teri tusini tekislash\n↳ Filtrsiz, sog‘lom porlash\n\nBu niqoblash emas. Bu terini ichkaridan tiklash.',
      ru: 'Интенсивный импульсный свет проникает в глубокие слои кожи и запускает естественное восстановление на клеточном уровне.\n\nЧто даёт процедура:\n\n↳ Осветление пигментных пятен\n↳ Более ровный тон кожи\n↳ Здоровое сияние без фильтров\n\nЭто не маскировка. Это восстановление кожи изнутри.',
      en: 'Intense pulsed light reaches deeper skin layers and starts natural repair at cell level.\n\nWhat the session can do:\n\n↳ Fade pigment spots\n↳ Even out skin tone\n↳ A healthy glow — no filters\n\nThis is not covering a mark. It is helping the skin recover from within.',
    },
    src: '/videos/46.mp4',
    duration: '0:46',
    category: { uz: 'IPL', ru: 'IPL', en: 'IPL' },
  },
  {
    id: 'clinic-video-47',
    sortOrder: 1,
    title: {
      uz: '💉 Hamma jim turibdi, lekin biz aytamiz!',
      ru: '💉 Все молчат — а мы скажем прямо',
      en: '💉 Everyone stays quiet — we will say it out loud',
    },
    description: {
      uz: 'Shifokorlarimiz dalillarga asoslangan tibbiyot va haqiqatan ishlaydigan, tasdiqlangan davolash usullariga tayanadi.\n\nChunki bizning asosiy vazifamiz — umid sotish emas, balki sizni davolash!',
      ru: 'Наши врачи опираются на доказательную медицину и методы лечения, эффективность которых подтверждена на практике.\n\nПотому что наша главная задача — не продавать надежду, а помогать вам лечиться!',
      en: 'Our doctors rely on evidence-based medicine and treatment methods that are proven to work in practice.\n\nBecause our main job is not to sell hope — it is to help you get better.',
    },
    src: '/videos/47.mp4',
    duration: '1:08',
    category: { uz: 'Klinika', ru: 'О клинике', en: 'Clinic' },
  },
  {
    id: 'clinic-video-48',
    sortOrder: 0,
    title: {
      uz: 'Kosmetologimizning tavsiyasini saqlab qo‘ying va qora nuqtalarni unuting 👌',
      ru: 'Запомните совет нашего косметолога — и забудьте о чёрных точках 👌',
      en: 'Keep your cosmetologist’s advice — and leave blackheads behind 👌',
    },
    description: {
      uz: 'Qora nuqtalar (komedonlar) ko‘pincha noto‘g‘ri parvarish yoki o‘zingiz tanlagan “tez yechim”lardan kuchayadi.\n\nKosmetologimiz teri holatingizga mos reja beradi: tozalash, namlash va kerak bo‘lsa klinik muolajalar — shunda nuqtalar asta-sekin kamayadi, teri toza va barqaror ko‘rinadi.',
      ru: 'Чёрные точки (комедоны) часто усиливаются из‑за неправильного ухода или «быстрых решений», которые выбирают сами.\n\nНаш косметолог подберёт план под вашу кожу: очищение, увлажнение и при необходимости клинические процедуры — тогда точки постепенно уменьшаются, а кожа выглядит чище и ровнее.',
      en: 'Blackheads (comedones) often get worse with the wrong routine or DIY “quick fixes.”\n\nOur cosmetologist builds a plan for your skin: cleansing, hydration, and clinic sessions when needed — so spots fade gradually and the skin looks clearer and more even.',
    },
    src: '/videos/48.mp4',
    duration: '0:24',
    category: { uz: 'Kosmetologiya', ru: 'Косметология', en: 'Cosmetology' },
  },
];

export const CLINIC_BRANCHES: ClinicBranch[] = [
  {
    id: 'fergana-main',
    name: {
      uz: 'Radeski — Bosh klinika (Farg‘ona)',
      ru: 'Radeski — Главная клиника (Фергана)',
      en: 'Radeski — Main Clinic (Fergana)',
    },
    address: {
      uz: "Farg'ona sh., O'zbekiston Ovozi ko'chasi, 1A-bino",
      ru: 'г. Фергана, ул. Узбекистон Овози, дом 1А',
      en: '1A Uzbekiston Ovozi St., Fergana City',
    },
    phone: '+998 (73) 200-73-73',
    hours: {
      uz: 'Dushanba – Shanba: 08:00 – 18:00',
      ru: 'Понедельник – Суббота: 08:00 – 18:00',
      en: 'Monday – Saturday: 08:00 – 18:00',
    },
    services: {
      uz: 'To‘liq spektr: dermatologiya, kosmetologiya, lazer, laboratoriya, dermatoskopiya',
      ru: 'Полный спектр: дерматология, косметология, лазер, лаборатория, дерматоскопия',
      en: 'Full spectrum: dermatology, cosmetology, laser, lab, dermatoscopy',
    },
    mapEmbed: CLINIC_MAP_EMBED_URL,
    mapUrl: getClinicMapOpenUrl(),
    isMain: true,
    image: '/gallery/rasmfilial1.jpg',
    sortOrder: 1,
  },
  {
    id: 'kokand-branch',
    name: {
      uz: 'Dermatolog Qo‘qon — Radeski Skin Clinic',
      ru: 'Дерматолог Коканд — Radeski Skin Clinic',
      en: 'Dermatologist Kokand — Radeski Skin Clinic',
    },
    address: {
      uz: "Qo'qon sh., 47-MFI, Huqandiy mavzesi, 144A",
      ru: 'г. Коканд, 47-МФЙ, массив Хукандий, 144А',
      en: '144A Huqandiy Block, 47-MFI, Kokand City',
    },
    phone: '+998 95 210 73 73',
    hours: {
      uz: 'Dushanba – Shanba: 08:00 – 18:00',
      ru: 'Понедельник – Суббота: 08:00 – 18:00',
      en: 'Monday – Saturday: 08:00 – 18:00',
    },
    services: {
      uz: 'To‘liq spektr: dermatologiya, kosmetologiya, lazer, laboratoriya, dermatoskopiya',
      ru: 'Полный спектр: дерматология, косметология, лазер, лаборатория, дерматоскопия',
      en: 'Full spectrum: dermatology, cosmetology, laser, lab, dermatoscopy',
    },
    mapEmbed: KOKAND_BRANCH_MAP_EMBED_URL,
    mapUrl: KOKAND_BRANCH_MAP_OPEN_URL,
    isMain: false,
    image: '/gallery/rasmfilial2.jpg',
    sortOrder: 2,
  },
  {
    id: 'liege-rade-skin',
    name: {
      uz: 'Rade Skin Clinic — Filial (Liège, Belgiya)',
      ru: 'Rade Skin Clinic — Филиал (Льеж, Бельгия)',
      en: 'Rade Skin Clinic — Branch (Liège, Belgium)',
    },
    address: {
      uz: 'Boulevard de la Sauvenière 67, 4000 Liège, Belgiya',
      ru: 'Boulevard de la Sauvenière 67, 4000 Льеж, Бельгия',
      en: 'Boulevard de la Sauvenière 67, 4000 Liège, Belgium',
    },
    phone: RADE_SKIN_CLINIC_PHONE.display,
    phoneTel: RADE_SKIN_CLINIC_PHONE.tel,
    hours: {
      uz: 'Qabul: oldindan yozilish | Favqulodda aloqa: 24/7',
      ru: 'Приём: по записи | Экстренная связь: 24/7',
      en: 'Appointments by booking | Emergency contact: 24/7',
    },
    services: {
      uz: 'Estetik tibbiyot, teri parvarishi, lazer epilyatsiya, soch to‘kilishi, yoshartirish',
      ru: 'Эстетическая медицина, уход за кожей, лазерная эпиляция, выпадение волос, anti-age',
      en: 'Aesthetic medicine, skin care, laser hair removal, hair loss care, anti-age',
    },
    mapEmbed: LIEGE_BRANCH_MAP_EMBED_URL,
    mapUrl: LIEGE_BRANCH_MAP_OPEN_URL,
    website: RADE_SKIN_CLINIC_WEBSITE,
    email: RADE_SKIN_CLINIC_EMAIL,
    isMain: false,
    image: '/gallery/rade-skin-clinic-liege.png',
    sortOrder: 3,
  },
];

export const TREATMENT_RESULTS: TreatmentResult[] = [
  {
    id: 'do1-acne',
    sortOrder: 1,
    title: {
      uz: 'Akne va post-akne davolash',
      ru: 'Лечение акне и постакне',
      en: 'Acne and post-acne treatment',
    },
    description: {
      uz: 'Yuz va iyak qismidagi faol akne, qizarish va yallig‘lanish kompleks apparat terapiyasi bilan bartaraf etildi. Teri teksturasi silliqlandi, dog‘lar yengillashdi.',
      ru: 'Активное акне, покраснение и воспаление на щеке и челюсти устранены комплексной аппаратной терапией. Текстура кожи выровнялась, пятна осветлились.',
      en: 'Active acne, redness and inflammation on the cheek and jaw were cleared with combined device therapy. Skin texture smoothed and marks lightened.',
    },
    service: { uz: 'Dermatologiya', ru: 'Дерматология', en: 'Dermatology' },
    beforeImage: '/promo/do1do.jpg',
    afterImage: '/promo/do1posle.jpg',
    sessions: { uz: '6–8 seans', ru: '6–8 сеансов', en: '6–8 sessions' },
  },
  {
    id: 'do2-nail-fungus',
    sortOrder: 2,
    title: {
      uz: 'Tirnoq zamburug‘i (onikomikoz)',
      ru: 'Грибок ногтей (онихомикоз)',
      en: 'Nail fungus (onychomycosis)',
    },
    description: {
      uz: 'Qalinlashgan, sarg‘aygan va parchalanayotgan tirnoqlar tibbiy podologik davolashdan keyin tabiiy rang va mustahkamlikka qaytdi.',
      ru: 'Утолщённые, пожелтевшие и крошащиеся ногти после подологического лечения восстановили естественный цвет и прочность.',
      en: 'Thickened, yellowed and crumbling nails regained natural color and strength after clinical podology treatment.',
    },
    service: { uz: 'Podologiya', ru: 'Подология', en: 'Podiatry' },
    beforeImage: '/promo/do2do.jpg',
    afterImage: '/promo/do2posle.jpg',
    sessions: { uz: '4–6 oy kurs', ru: '4–6 месяцев', en: '4–6 month course' },
  },
  {
    id: 'do3-hair-transplant',
    sortOrder: 3,
    title: {
      uz: 'Soch ekish',
      ru: 'Пересадка волос',
      en: 'Hair transplant',
    },
    description: {
      uz: 'Tepa va cho‘kka soch to‘kilishi (androgenetik alopeciya). Soch ekish natijasida zich, tabiiy ko‘rinishdagi soch qoplami tiklandi.',
      ru: 'Выпадение волос на макушке и темени (андрогенетическая алопеция). После пересадки волос восстановлена густая, естественная шевелюра.',
      en: 'Crown and vertex hair loss (androgenetic alopecia). Hair transplant restored dense, natural-looking hair coverage.',
    },
    service: { uz: 'Trixologiya', ru: 'Трихология', en: 'Trichology' },
    beforeImage: '/promo/do3do.jpg',
    afterImage: '/promo/do3posle.jpg',
    sessions: { uz: '1 operatsiya + nazorat', ru: '1 операция + контроль', en: '1 procedure + follow-up' },
  },
  {
    id: 'laser-lesion-removal',
    sortOrder: 4,
    title: {
      uz: 'Teri o‘smalarini lazer bilan olib tashlash',
      ru: 'Лазерное удаление новообразований',
      en: 'Laser removal of skin lesions',
    },
    description: {
      uz: 'Teridagi kichik qizil angioma va nevus lazer apparati bilan bir seansda xavfsiz olib tashlandi. Muolajadan keyin atrofdagi teri saqlangan, iz minimal qoldi — kundalik hayotga tez qaytish mumkin.',
      ru: 'Небольшая красная ангиома и родинка на коже безопасно удалены лазером за один сеанс. Окружающая кожа сохранена, рубец минимальный — быстрое возвращение к обычной жизни.',
      en: 'A small red angioma and nevus were safely removed with laser in a single session. Surrounding skin was preserved with minimal scarring — quick return to daily activities.',
    },
    service: {
      uz: 'Lazer bilan olib tashlash',
      ru: 'Лазерное удаление',
      en: 'Laser removal',
    },
    beforeImage: '/results/laser-removal-before.jpg',
    afterImage: '/results/laser-removal-after.jpg',
    sessions: { uz: '1 seans', ru: '1 сеанс', en: '1 session' },
  },
  {
    id: 'hair-transplant-clinic-result',
    sortOrder: 5,
    title: {
      uz: 'Soch ekish — klinika natijasi',
      ru: 'Пересадка волос — результат',
      en: 'Hair transplant — clinical result',
    },
    description: {
      uz: 'Androgenetik alopeciya: tepa va frontal zona uchun individual chiziq belgilab, FUE usulida graftlar ekildi. Operatsiyadan keyin tabiiy zichlik va simmetrik chiziq tiklandi; nazorat va parvarish rejasi berildi.',
      ru: 'Андрогенетическая алопеция: индивидуальная линия роста и пересадка графтов методом FUE. После процедуры восстановлена естественная плотность и симметричная линия; назначен контроль и уход.',
      en: 'Androgenetic alopecia: custom hairline planning and FUE graft placement. Natural density and a symmetric hairline were restored; follow-up and aftercare protocol provided.',
    },
    service: {
      uz: 'Soch ekish',
      ru: 'Пересадка волос',
      en: 'Hair transplant',
    },
    beforeImage: '/results/hair-transplant-before.jpg',
    afterImage: '/results/hair-transplant-after.jpg',
    sessions: { uz: '1 operatsiya + 6–12 oy nazorat', ru: '1 операция + контроль 6–12 мес.', en: '1 procedure + 6–12 mo follow-up' },
  },
  {
    id: 'psoriasis-arms-elbows',
    sortOrder: 6,
    title: {
      uz: 'Psoriaz — qo‘llar va tirsaklar',
      ru: 'Псориаз — руки и локти',
      en: 'Psoriasis — arms and elbows',
    },
    description: {
      uz: 'Tirsak va bilaklardagi qalin oq-qizil plakalar kompleks terapiya (UVB 311 nm fototerapiya, mahalliy vositalar va kurs rejasi) bilan sezilarli yengillashdi. Qizarish va qoplamalar kamaydi, teri tekisroq bo‘ldi.',
      ru: 'Плотные бело-красные бляшки на локтях и предплечьях заметно уменьшились после комплексной терапии (UVB 311 нм, местные средства и курс). Покраснение и шелушение снизились, кожа стала ровнее.',
      en: 'Thick white-red plaques on elbows and forearms improved significantly with combined therapy (UVB 311 nm phototherapy, topical care and a structured course). Redness and scaling decreased; skin texture smoothed.',
    },
    service: { uz: 'Psoriaz', ru: 'Псориаз', en: 'Psoriasis' },
    beforeImage: '/results/psoriasis-arms-before.jpg',
    afterImage: '/results/psoriasis-arms-after.jpg',
    sessions: { uz: '12–20 seans kurs', ru: '12–20 сеансов курса', en: '12–20 session course' },
  },
  {
    id: 'psoriasis-knees-shins',
    sortOrder: 7,
    title: {
      uz: 'Psoriaz — tizzalar va boldirlar',
      ru: 'Псориаз — колени и голени',
      en: 'Psoriasis — knees and shins',
    },
    description: {
      uz: 'Tizza va boldirlardagi keng plakali psoriaz belgilari davolash kursidan keyin deyarli to‘liq remissiyaga yaqinlashdi. Faol qoplamalar yo‘qolgan, faqat yengil rang o‘zgarishlari qolgan — bemor kundalik faoliyatiga qaytgan.',
      ru: 'Распространённый бляшечный псориаз на коленях и голенях после курса лечения практически перешёл в ремиссию. Активные высыпания исчезли, остались лишь лёгкие поствоспалительные изменения — пациент вернулся к обычной жизни.',
      en: 'Extensive plaque psoriasis on knees and shins reached near-complete remission after treatment. Active lesions cleared with only mild post-inflammatory changes remaining — patient returned to normal daily life.',
    },
    service: { uz: 'Psoriaz', ru: 'Псориаз', en: 'Psoriasis' },
    beforeImage: '/results/psoriasis-legs-before.jpg',
    afterImage: '/results/psoriasis-legs-after.jpg',
    sessions: { uz: '16–24 seans kurs', ru: '16–24 сеанса курса', en: '16–24 session course' },
  },
];
