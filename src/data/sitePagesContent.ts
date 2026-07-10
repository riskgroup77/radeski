import type { Locale } from '../types';
import { CLINIC_MAP_EMBED_URL, getClinicMapOpenUrl, KOKAND_BRANCH_MAP_EMBED_URL, KOKAND_BRANCH_MAP_OPEN_URL } from '../config/links';

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
  hours: LocalizedText;
  services: LocalizedText;
  mapEmbed: string;
  /** Google Maps'da ochish uchun to'g'ri havola (ixtiyoriy) */
  mapUrl?: string;
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
    sortOrder: 1,
    title: {
      uz: 'Radeski klinikasi — zamonaviy tibbiy markaz',
      ru: 'Клиника Radeski — современный медицинский центр',
      en: 'Radeski Clinic — modern medical center',
    },
    description: {
      uz: 'Steril xonalar, dermatoskopiya va apparatli kosmetologiya bo‘limlari bilan tanishing.',
      ru: 'Познакомьтесь со стерильными кабинетами, дерматоскопией и аппаратной косметологией.',
      en: 'Tour sterile rooms, dermatoscopy, and hardware cosmetology departments.',
    },
    src: '/videos/1.mp4',
    duration: '0:49',
    category: { uz: 'Instagram', ru: 'Instagram', en: 'Instagram' },
  },
  {
    id: 'clinic-video-2',
    sortOrder: 2,
    title: {
      uz: 'Vitiligo va fototerapiya',
      ru: 'Витилиго и фототерапия',
      en: 'Vitiligo and phototherapy',
    },
    description: {
      uz: 'NB-UVB fototerapiya vitiligo uchun samarali va xavfsiz usul hisoblanadi.',
      ru: 'Фототерапия NB-UVB — эффективный и безопасный метод лечения витилиго.',
      en: 'NB-UVB phototherapy is an effective and safe vitiligo treatment.',
    },
    src: '/videos/2.mp4',
    duration: '0:52',
    category: { uz: 'Instagram', ru: 'Instagram', en: 'Instagram' },
  },
  {
    id: 'clinic-video-3',
    sortOrder: 3,
    title: {
      uz: 'Psoriaz — kompleks davolash',
      ru: 'Псориаз — комплексное лечение',
      en: 'Psoriasis — comprehensive treatment',
    },
    description: {
      uz: 'Dermatoskopiya va apparatli texnologiyalar yordamida psoriazni nazorat qilish.',
      ru: 'Контроль и лечение псориаза с помощью дерматоскопии и аппаратных технологий.',
      en: 'Psoriasis monitoring and treatment with dermatoscopy and device therapies.',
    },
    src: '/videos/3.mp4',
    duration: '1:02',
    category: { uz: 'Instagram', ru: 'Instagram', en: 'Instagram' },
  },
  {
    id: 'clinic-video-4',
    sortOrder: 4,
    title: {
      uz: 'Bemorga shaxsiy yondashuv',
      ru: 'Индивидуальный подход к пациенту',
      en: 'Personalized patient care',
    },
    description: {
      uz: 'Konsultatsiyadan davolashgacha — har bir bosqichda professional qo‘llab-quvvatlash.',
      ru: 'От консультации до лечения — профессиональное сопровождение на каждом этапе.',
      en: 'From consultation to treatment — professional support at every step.',
    },
    src: '/videos/4.mp4',
    duration: '0:17',
    category: { uz: 'Instagram', ru: 'Instagram', en: 'Instagram' },
  },
  {
    id: 'clinic-video-5',
    sortOrder: 5,
    title: {
      uz: 'Apparatli kosmetologiya',
      ru: 'Аппаратная косметология',
      en: 'Hardware cosmetology',
    },
    description: {
      uz: 'Zamonaviy apparatlar yordamida terini yangilash va muammolarni bartaraf etish.',
      ru: 'Омоложение кожи и решение эстетических задач с помощью современного оборудования.',
      en: 'Skin renewal and aesthetic care with modern clinical devices.',
    },
    src: '/videos/5.mp4',
    duration: '1:01',
    category: { uz: 'Instagram', ru: 'Instagram', en: 'Instagram' },
  },
  {
    id: 'clinic-video-6',
    sortOrder: 6,
    title: {
      uz: 'Dermatoskopiya va diagnostika',
      ru: 'Дерматоскопия и диагностика',
      en: 'Dermatoscopy and diagnostics',
    },
    description: {
      uz: 'Teridagi o‘zgarishlarni aniq aniqlash va to‘g‘ri davolash rejasini tuzish.',
      ru: 'Точная диагностика изменений кожи и составление плана лечения.',
      en: 'Accurate skin assessment and personalized treatment planning.',
    },
    src: '/videos/6.mp4',
    duration: '1:15',
    category: { uz: 'Instagram', ru: 'Instagram', en: 'Instagram' },
  },
  {
    id: 'clinic-video-7',
    sortOrder: 7,
    title: {
      uz: 'IPL terapiya',
      ru: 'IPL-терапия',
      en: 'IPL therapy',
    },
    description: {
      uz: 'Pigmentatsiya, qizarish va teri rangini tekislash uchun IPL protokollari.',
      ru: 'IPL-протоколы для коррекции пигментации, покраснений и тона кожи.',
      en: 'IPL protocols for pigmentation, redness and skin tone correction.',
    },
    src: '/videos/7.mp4',
    duration: '1:02',
    category: { uz: 'Instagram', ru: 'Instagram', en: 'Instagram' },
  },
  {
    id: 'clinic-video-8',
    sortOrder: 8,
    title: {
      uz: 'Laser epilyatsiya',
      ru: 'Лазерная эпиляция',
      en: 'Laser hair removal',
    },
    description: {
      uz: 'Laser texnologiyasi yordamida uzoq muddatli va xavfsiz tuklarni olib tashlash.',
      ru: 'Долговременное и безопасное удаление волос лазерными технологиями.',
      en: 'Long-lasting, safe hair removal with laser technology.',
    },
    src: '/videos/8.mp4',
    duration: '1:14',
    category: { uz: 'Instagram', ru: 'Instagram', en: 'Instagram' },
  },
  {
    id: 'clinic-video-9',
    sortOrder: 9,
    title: {
      uz: 'Podologiya xizmatlari',
      ru: 'Подологические услуги',
      en: 'Podiatry services',
    },
    description: {
      uz: 'Tirnoq va oyoq terisi muammolarini professional podologik yondashuv bilan davolash.',
      ru: 'Лечение проблем ногтей и кожи стоп с профессиональным подологическим подходом.',
      en: 'Professional podology care for nail and foot skin concerns.',
    },
    src: '/videos/9.mp4',
    duration: '1:19',
    category: { uz: 'Instagram', ru: 'Instagram', en: 'Instagram' },
  },
  {
    id: 'clinic-video-10',
    sortOrder: 10,
    title: {
      uz: 'Klinika hayoti',
      ru: 'Жизнь клиники',
      en: 'Clinic life',
    },
    description: {
      uz: 'Radeski jamoasi, bemorlar va kundalik klinika jarayonlari haqida qisqa lavha.',
      ru: 'Короткий ролик о команде Radeski, пациентах и буднях клиники.',
      en: 'A short look at the Radeski team, patients, and daily clinic workflow.',
    },
    src: '/videos/10.mp4',
    duration: '0:39',
    category: { uz: 'Instagram', ru: 'Instagram', en: 'Instagram' },
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
      uz: 'Radeski — Filial (Qo‘qon)',
      ru: 'Radeski — Филиал (Коканд)',
      en: 'Radeski — Branch (Kokand)',
    },
    address: {
      uz: "Qo'qon sh., 47-MFI, Huqandiy mavzesi, 144A",
      ru: 'г. Коканд, 47-МФЙ, массив Хукандий, 144А',
      en: '144A Huqandiy Block, 47-MFI, Kokand City',
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
    mapEmbed: KOKAND_BRANCH_MAP_EMBED_URL,
    mapUrl: KOKAND_BRANCH_MAP_OPEN_URL,
    isMain: false,
    image: '/gallery/rasmfilial2.jpg',
    sortOrder: 2,
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
      uz: 'Soch transplantatsiyasi (FUE)',
      ru: 'Пересадка волос (FUE)',
      en: 'Hair transplant (FUE)',
    },
    description: {
      uz: 'Tepa va cho‘kka soch to‘kilishi (androgenetik alopeciya). FUE transplantatsiyasi natijasida zich, tabiiy ko‘rinishdagi soch qoplami tiklandi.',
      ru: 'Выпадение волос на макушке и темени (андрогенетическая алопеция). После FUE-трансплантации восстановлена густая, естественная шевелюра.',
      en: 'Crown and vertex hair loss (androgenetic alopecia). FUE transplant restored dense, natural-looking hair coverage.',
    },
    service: { uz: 'Trixologiya', ru: 'Трихология', en: 'Trichology' },
    beforeImage: '/promo/do3do.jpg',
    afterImage: '/promo/do3posle.jpg',
    sessions: { uz: '1 operatsiya + nazorat', ru: '1 операция + контроль', en: '1 procedure + follow-up' },
  },
];
