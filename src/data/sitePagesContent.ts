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
}

export interface TreatmentResult {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  service: LocalizedText;
  beforeImage: string;
  afterImage: string;
  sessions: LocalizedText;
}

export const CLINIC_VIDEOS: ClinicVideo[] = [
  {
    id: 'clinic-tour',
    title: {
      uz: 'Radeski klinikasi — zamonaviy tibbiy markaz',
      ru: 'Клиника Radeski — современный медицинский центр',
      en: 'Radeski Clinic — modern medical center',
    },
    description: {
      uz: 'Steril xonalar, PhotoFinder diagnostika va apparat kosmetologiya bo‘limlari bilan tanishing.',
      ru: 'Познакомьтесь со стерильными кабинетами, диагностикой PhotoFinder и аппаратной косметологией.',
      en: 'Tour sterile rooms, PhotoFinder diagnostics, and hardware cosmetology departments.',
    },
    src: '/video-namuna/1.mp4',
    duration: '2:15',
    category: { uz: 'Klinika haqida', ru: 'О клинике', en: 'About clinic' },
  },
  {
    id: 'IPL-therapy',
    title: {
      uz: 'IPL Forever Young terapiyasi qanday ishlaydi?',
      ru: 'Как работает терапия IPL Forever Young?',
      en: 'How IPL Forever Young therapy works',
    },
    description: {
      uz: 'Gen darajasida teri yangilanishi va pigmentatsiyani yengillashtirish protokoli.',
      ru: 'Протокол обновления кожи на генном уровне и коррекции пигментации.',
      en: 'Gen-level skin renewal and pigmentation correction protocol.',
    },
    src: '/video-namuna/2.mp4',
    duration: '1:48',
    category: { uz: 'Kosmetologiya', ru: 'Косметология', en: 'Cosmetology' },
  },
  {
    id: 'photofinder',
    title: {
      uz: 'PhotoFinder — teri o‘smalarini erta aniqlash',
      ru: 'PhotoFinder — ранняя диагностика новообразований',
      en: 'PhotoFinder — early mole mapping',
    },
    description: {
      uz: 'Kompyuterli dermatoskopiya va xavfli o‘smalarni kuzatish tizimi.',
      ru: 'Компьютерная дерматоскопия и система наблюдения за новообразованиями.',
      en: 'Computerized dermoscopy and mole monitoring workflow.',
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
      uz: 'To‘liq spektr: dermatologiya, kosmetologiya, lazer, laboratoriya, PhotoFinder',
      ru: 'Полный спектр: дерматология, косметология, лазер, лаборатория, PhotoFinder',
      en: 'Full spectrum: dermatology, cosmetology, laser, lab, PhotoFinder',
    },
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.0022026857106!2d71.7864115!3d40.3864115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83461413146b%3A0xe5aef1cb446faab4!2zNSwgTyd6YmVraXN0b24gT3Zvemkga28nY2hhc2ksIEZhcmdvbmEsIE96YmVraXN0YW4!5e0!3m2!1sen!2s!4v1718300000000!5m2!1sen!2s',
    isMain: true,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'margilon-consult',
    name: {
      uz: 'Radeski — Marg‘ilon konsultatsiya markazi',
      ru: 'Radeski — Консультационный центр (Маргилан)',
      en: 'Radeski — Margilan Consultation Center',
    },
    address: {
      uz: "Marg'ilon sh., B. Marg'iloniy ko'chasi, 24-uy",
      ru: 'г. Маргилан, ул. Б. Маргилоний, дом 24',
      en: '24 B. Margiloniy St., Margilan',
    },
    phone: '+998 (73) 200-73-73',
    hours: {
      uz: 'Seshanba, Payshanba, Shanba: 09:00 – 17:00',
      ru: 'Вторник, Четверг, Суббота: 09:00 – 17:00',
      en: 'Tuesday, Thursday, Saturday: 09:00 – 17:00',
    },
    services: {
      uz: 'Dermatolog konsultatsiyasi, trixologiya, kichik kosmetologik muolajalar',
      ru: 'Консультация дерматолога, трихология, малые косметологические процедуры',
      en: 'Dermatology consults, trichology, minor cosmetic procedures',
    },
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.5!2d71.72!3d40.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m2!1s0x0%3A0x0!5e0!3m2!1sen!2s!4v1718300000001!5m2!1sen!2s',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'kokand-lab',
    name: {
      uz: 'Radeski — Qo‘qon laboratoriya punkti',
      ru: 'Radeski — Лабораторный пункт (Коканд)',
      en: 'Radeski — Kokand Lab Point',
    },
    address: {
      uz: "Qo'qon sh., I. Karimov ko'chasi, 15-uy",
      ru: 'г. Коканд, ул. И. Каримов, дом 15',
      en: '15 I. Karimov St., Kokand',
    },
    phone: '+998 (73) 200-73-73',
    hours: {
      uz: 'Dushanba – Juma: 08:30 – 16:30',
      ru: 'Понедельник – Пятница: 08:30 – 16:30',
      en: 'Monday – Friday: 08:30 – 16:30',
    },
    services: {
      uz: 'Teri analizlari, allergik testlar, onkologik markerlar',
      ru: 'Анализы кожи, аллергические тесты, онкомаркеры',
      en: 'Skin panels, allergy tests, oncology markers',
    },
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.5!2d70.94!3d40.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m2!1s0x0%3A0x0!5e0!3m2!1sen!2s!4v1718300000002!5m2!1sen!2s',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
  },
];

export const TREATMENT_RESULTS: TreatmentResult[] = [
  {
    id: 'acne-protocol',
    title: {
      uz: 'Akne va post-akne izlari',
      ru: 'Акне и постакне',
      en: 'Acne and post-acne marks',
    },
    description: {
      uz: 'Kompleks apparat va dori terapiyasi natijasida teri teksturasi tekislashdi.',
      ru: 'После комплексной аппаратной и медикаментозной терапии выровнялась текстура кожи.',
      en: 'Complex device and medical therapy improved skin texture.',
    },
    service: { uz: 'Dermatologiya', ru: 'Дерматология', en: 'Dermatology' },
    beforeImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600',
    sessions: { uz: '6 seans', ru: '6 сеансов', en: '6 sessions' },
  },
  {
    id: 'pigmentation-IPL',
    title: {
      uz: 'Pigmentatsiya va melazma',
      ru: 'Пигментация и мелазма',
      en: 'Pigmentation and melasma',
    },
    description: {
      uz: 'IPL fotoomolajeniyasi yordamida dog‘lar rangi yengillashdi, teri yorqinlashdi.',
      ru: 'IPL-фотоомоложение осветлило пятна и освежило тон кожи.',
      en: 'IPL photo-rejuvenation lightened spots and refreshed skin tone.',
    },
    service: { uz: 'IPL terapiya', ru: 'IPL-терапия', en: 'IPL therapy' },
    beforeImage: 'https://images.unsplash.com/photo-1515377901643-2147e8ceb3f5?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600',
    sessions: { uz: '4 seans', ru: '4 сеанса', en: '4 sessions' },
  },
  {
    id: 'rosacea-care',
    title: {
      uz: 'Kuperoz va qizarish',
      ru: 'Купероз и покраснение',
      en: 'Rosacea and redness',
    },
    description: {
      uz: 'Lazer va parvarish protokoli qizarishni kamaytirdi, tomirlar ko‘rinishi yengillashdi.',
      ru: 'Лазерный протокол уменьшил покраснение и сосудистую сетку.',
      en: 'Laser care protocol reduced redness and visible vessels.',
    },
    service: { uz: 'Lazer terapiya', ru: 'Лазерная терапия', en: 'Laser therapy' },
    beforeImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1487412947727-2ce5edd0efd3?auto=format&fit=crop&q=80&w=600',
    sessions: { uz: '3 seans', ru: '3 сеанса', en: '3 sessions' },
  },
  {
    id: 'hair-restoration',
    title: {
      uz: 'Soch to‘kilishi (trixologiya)',
      ru: 'Выпадение волос (трихология)',
      en: 'Hair loss (trichology)',
    },
    description: {
      uz: 'Plazmoterapiya va trixoskopik nazorat bilan soch zichligi oshdi.',
      ru: 'Плазмотерапия и трихоскопический контроль увеличили густоту волос.',
      en: 'Plasma therapy and trichoscopy monitoring increased hair density.',
    },
    service: { uz: 'Trixologiya', ru: 'Трихология', en: 'Trichology' },
    beforeImage: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=600',
    sessions: { uz: '5 seans', ru: '5 сеансов', en: '5 sessions' },
  },
  {
    id: 'scar-revision',
    title: {
      uz: 'Chandiqlar va izlar',
      ru: 'Рубцы и шрамы',
      en: 'Scars and marks',
    },
    description: {
      uz: 'Mikroigli va lazer kombinatsiyasi chandiq chuqurligini kamaytirdi.',
      ru: 'Комбинация микроигл и лазера уменьшила глубину рубцов.',
      en: 'Microneedling and laser combo reduced scar depth.',
    },
    service: { uz: 'Estetik dermatologiya', ru: 'Эстетическая дерматология', en: 'Aesthetic dermatology' },
    beforeImage: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600',
    sessions: { uz: '7 seans', ru: '7 сеансов', en: '7 sessions' },
  },
  {
    id: 'antiaging-IPL',
    title: {
      uz: 'Yoshartirish va teri elastikligi',
      ru: 'Омоложение и эластичность',
      en: 'Rejuvenation and elasticity',
    },
    description: {
      uz: 'IPL va inyeksion protokol yuz konturini tikladi, teri silliqroq bo‘ldi.',
      ru: 'IPL и инъекционный протокол восстановили контур и гладкость кожи.',
      en: 'IPL and injection protocol restored contour and smoother skin.',
    },
    service: { uz: 'Inyeksion kosmetologiya', ru: 'Инъекционная косметология', en: 'Injection cosmetology' },
    beforeImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600',
    sessions: { uz: '4 seans', ru: '4 сеанса', en: '4 sessions' },
  },
];
