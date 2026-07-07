import type { Locale } from '../types';

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
    id: 'clinic-tour',
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
    src: '/video-namuna/1.mp4',
    duration: '2:15',
    category: { uz: 'Klinika haqida', ru: 'О клинике', en: 'About clinic' },
  },
  {
    id: 'IPL-therapy',
    title: {
      uz: 'Vitiligo — teriga rang beruvchi melanotsit hujayralarining yo‘qolishi yoki faoliyatining buzilishi natijasida terida oq dog‘lar paydo bo‘ladigan kasallik.',
      ru: 'Как работает терапия IPL Forever Young?',
      en: 'How IPL Forever Young therapy works',
    },
    description: {
      uz: 'Ko‘plab tadqiqotlarda NB-UVB fototerapiya vitiligo uchun eng samarali va xavfsiz usullardan biri deb hisoblanadi. Ayniqsa kasallik faol bo‘lmasa va davolash muntazam olib borilsa, yaxshi natijalar kuzatiladi.',
      ru: 'Протокол обновления кожи на генном уровне и коррекции пигментации.',
      en: 'Gen-level skin renewal and pigmentation correction protocol.',
    },
    src: '/video-namuna/2.mp4',
    duration: '1:48',
    category: { uz: 'Kosmetologiya', ru: 'Косметология', en: 'Cosmetology' },
  },
  {
    id: 'psoriasis-care',
    title: {
      uz: 'Psoriaz — surunkali teri kasalligini kompleks davolash',
      ru: 'Псориаз — комплексное лечение хронического заболевания кожи',
      en: 'Psoriasis — comprehensive chronic skin care',
    },
    description: {
      uz: 'Dermatoskopiya va apparatli texnologiyalar yordamida psoriazni nazorat qilish va davolash.',
      ru: 'Контроль и лечение псориаза с помощью дерматоскопии и аппаратных технологий.',
      en: 'Psoriasis monitoring and treatment with dermatoscopy and device-based therapies.',
    },
    src: '/video-namuna/3.mp4',
    duration: '2:40',
    category: { uz: 'Diagnostika', ru: 'Диагностика', en: 'Diagnostics' },
  },
  {
    id: 'patient-care',
    title: {
      uz: 'Bemorga shaxsiy yondashuv va parvarish',
      ru: 'Индивидуальный подход и уход за пациентом',
      en: 'Personalized patient care journey',
    },
    description: {
      uz: 'Konsultatsiyadan davolashgacha — har bir bosqichda professional qo‘llab-quvvatlash.',
      ru: 'От консультации до лечения — профессиональное сопровождение на каждом этапе.',
      en: 'From consultation to treatment — professional support at every step.',
    },
    src: '/video-namuna/1.mp4',
    duration: '1:30',
    category: { uz: 'Xizmatlar', ru: 'Услуги', en: 'Services' },
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
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.0022026857106!2d71.7864115!3d40.3864115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83461413146b%3A0xe5aef1cb446faab4!2zNSwgTyd6YmVraXN0b24gT3Zvemkga28nY2hhc2ksIEZhcmdvbmEsIE96YmVraXN0YW4!5e0!3m2!1sen!2s!4v1718300000000!5m2!1sen!2s',
    isMain: true,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
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
    comparisonImage: '/promo/do1.jpg',
    beforeImage: '/promo/do1.jpg',
    afterImage: '/promo/do1.jpg',
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
    comparisonImage: '/promo/do2.jpg',
    beforeImage: '/promo/do2.jpg',
    afterImage: '/promo/do2.jpg',
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
    comparisonImage: '/promo/do3.jpg',
    beforeImage: '/promo/do3.jpg',
    afterImage: '/promo/do3.jpg',
    sessions: { uz: '1 operatsiya + nazorat', ru: '1 операция + контроль', en: '1 procedure + follow-up' },
  },
];
