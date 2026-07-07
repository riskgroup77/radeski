import type { Locale } from '../types';

export interface LocalizedPromoText {
  uz: string;
  ru: string;
  en: string;
}

export interface HomePromoSlide {
  id: string;
  slug: string;
  badge: LocalizedPromoText;
  title: LocalizedPromoText;
  description: LocalizedPromoText;
  image: string;
  /** To'g'ridan-to'g'ri ko'rsatiladigan narx matni (oralig'i yoki maxsus format) */
  fixedPriceText?: LocalizedPromoText;
  /** Qo'shimcha narx qatori (masalan, 2 yonoq narxi) */
  priceNote?: LocalizedPromoText;
  categoryId: string;
  subId?: string;
  priceCategoryId: string;
  priceKeywords?: string[];
  fallbackPriceValue?: number;
}

export const HOME_PROMO_SLIDES: HomePromoSlide[] = [
  {
    id: 'promo-dermataskopiya',
    slug: 'dermataskopiya',
    badge: { uz: 'Dermatologiya', ru: 'Дерматология', en: 'Dermatology' },
    title: {
      uz: 'Dermataskopiya va shifokor ko‘rigi',
      ru: 'Дерматоскопия и осмотр врача',
      en: 'Dermoscopy and doctor consultation',
    },
    description: {
      uz: 'Teridagi hol, dog‘ va o‘smalarni dermatoskop yordamida batafsil tekshirish. Aniq tashxis va xavfsiz davolash rejasi tuziladi.',
      ru: 'Детальный осмотр родинок, пятен и новообразований с помощью дерматоскопа. Точная диагностика и безопасный план лечения.',
      en: 'Detailed examination of moles, spots and lesions with a dermatoscope. Accurate diagnosis and a safe treatment plan.',
    },
    image: '/karusel/dermataskopiya.jpeg',
    fallbackPriceValue: 150000,
    categoryId: 'dermatologiya',
    priceCategoryId: 'konsultatsii',
    priceKeywords: ['дерматовенеролог', 'осмотр', 'ko‘rik', 'konsultatsiya'],
  },
  {
    id: 'promo-ipl',
    slug: 'ipl',
    badge: { uz: 'IPL terapiya', ru: 'IPL-терапия', en: 'IPL therapy' },
    title: {
      uz: 'IPL fotoomolajeniyatsiya',
      ru: 'IPL-фотоомоложение',
      en: 'IPL photo-rejuvenation',
    },
    description: {
      uz: 'Pigmentatsiya, qizarish va yoshga bog‘liq o‘zgarishlarni bartaraf etish. Butun yuz yoki alohida zonalarga individual protokol.',
      ru: 'Устранение пигментации, покраснений и возрастных изменений. Индивидуальный протокол для всего лица или отдельных зон.',
      en: 'Targets pigmentation, redness and age-related changes. Individual protocol for full face or selected zones.',
    },
    image: '/karusel/ipl.webp',
    fallbackPriceValue: 900000,
    priceNote: {
      uz: '2 ta yonoq — 600 000 so‘m',
      ru: '2 щеки — 600 000 сум',
      en: '2 cheeks — 600,000 UZS',
    },
    categoryId: 'apparatnaya-kosmetologiya',
    subId: 'ipl-inmode',
    priceCategoryId: 'fotoomolozhenie-ipl-lumecca',
    priceKeywords: ['лицо', 'yuz', 'face'],
  },
  {
    id: 'promo-podologiya',
    slug: 'podologiya',
    badge: { uz: 'Podologiya', ru: 'Подология', en: 'Podiatry' },
    title: {
      uz: 'Aparat yordamida tirnoq tozalash',
      ru: 'Аппаратная чистка ногтей',
      en: 'Medical device nail cleansing',
    },
    description: {
      uz: 'Tirnoq zamburug‘i, qalinlashish va deformatsiyani tibbiy usulda bartaraf etish. Og‘riqsiz, steril sharoitda professional parvarish.',
      ru: 'Медицинская обработка при грибке, утолщении и деформации ногтей. Безболезненный уход в стерильных условиях.',
      en: 'Medical treatment for nail fungus, thickening and deformity. Painless professional care in sterile conditions.',
    },
    image: '/karusel/podologiya.jpg',
    fallbackPriceValue: 230000,
    categoryId: 'clinika-patologii-nogtej',
    subId: 'podolog-dermatolog',
    priceCategoryId: 'podologiya',
    priceKeywords: ['аппаратная чистка ногтей', 'tirnoq', 'nogte'],
  },
  {
    id: 'promo-karbon-peeling',
    slug: 'karbon-peeling',
    badge: { uz: 'Lazer kosmetologiya', ru: 'Лазерная косметология', en: 'Laser cosmetology' },
    title: {
      uz: 'Karbon piling (Hollywood Spectra)',
      ru: 'Карбоновый пилинг (Hollywood Spectra)',
      en: 'Carbon peeling (Hollywood Spectra)',
    },
    description: {
      uz: 'Q-switch lazer bilan chuqur tozalash: poralar, qora nuqtalar va teri matligini kamaytiradi. Yuz yorqin va silliq ko‘rinadi.',
      ru: 'Глубокое очищение Q-switch лазером: сужает поры, убирает чёрные точки и тусклость. Кожа становится сияющей и гладкой.',
      en: 'Q-switch laser deep cleanse: reduces pores, blackheads and dullness. Skin looks brighter and smoother.',
    },
    image: '/karusel/karbon-peeling.jpeg',
    fallbackPriceValue: 700000,
    categoryId: 'apparatnaya-kosmetologiya',
    subId: 'lazer-biorev',
    priceCategoryId: 'hooywood-spectra',
    priceKeywords: ['карбон', 'karbon', 'carbon', 'piling'],
  },
  {
    id: 'promo-co2-lazer',
    slug: 'co2-lazer',
    badge: { uz: 'CO₂ lazer', ru: 'CO₂-лазер', en: 'CO₂ laser' },
    title: {
      uz: 'Hol va o‘smalarni CO₂ lazer bilan olib tashlash',
      ru: 'Удаление родинок и новообразований CO₂-лазером',
      en: 'CO₂ laser removal of moles and lesions',
    },
    description: {
      uz: 'DEKA SmartXide CO₂ lazer yordamida papilloma, hol va boshqa yaxshi xavfli o‘smalarni minimal travma bilan olib tashlash.',
      ru: 'Удаление папиллом, родинок и других доброкачественных образований лазером DEKA SmartXide с минимальной травмой.',
      en: 'DEKA SmartXide CO₂ laser removes papillomas, moles and other benign lesions with minimal trauma.',
    },
    image: '/karusel/co2-lazer-osmalar.jpg',
    fallbackPriceValue: 30000,
    categoryId: 'hirurgicheskaya-dermatologiya',
    subId: 'moh-surgery',
    priceCategoryId: 'lazernoe-udalenie-dobrokachestvennyh-novoobrazovaniy-na-deka-smarxide-punto-so2-lazere',
    priceKeywords: ['родинк', 'hol', 'образован', 'nevus', 'mole'],
  },
  {
    id: 'promo-qosh-tatu',
    slug: 'qosh-tatu-lazer',
    badge: { uz: 'Lazer terapiya', ru: 'Лазерная терапия', en: 'Laser therapy' },
    title: {
      uz: 'Qoshdagi tatuirashni lazer bilan yo‘qotish',
      ru: 'Лазерное удаление татуажа бровей',
      en: 'Laser eyebrow tattoo removal',
    },
    description: {
      uz: 'Qoshdagi eski tatuirash va pigment izlarini xavfsiz lazer protokoli bilan bosqichma-bosqich yo‘q qilish. Teri tiklanishi nazorat qilinadi.',
      ru: 'Безопасное поэтапное удаление татуажа и пигмента на бровях лазером. Контроль заживления кожи.',
      en: 'Safe step-by-step laser removal of eyebrow tattoo and pigment. Skin healing is monitored.',
    },
    image: '/karusel/qosh-tatu-lazer.jpg',
    fallbackPriceValue: 400000,
    categoryId: 'apparatnaya-kosmetologiya',
    priceCategoryId: 'hooywood-spectra',
    priceKeywords: ['татуаж бровей', 'бров', 'qosh', 'tatu'],
  },
  {
    id: 'promo-lazer-epilyatsiya',
    slug: 'lazer-epilyatsiya',
    badge: { uz: 'Lazer epilyatsiya', ru: 'Лазерная эпиляция', en: 'Laser hair removal' },
    title: {
      uz: 'Lazerniy epilyatsiya — oyoqlar',
      ru: 'Лазерная эпиляция — ноги',
      en: 'Laser hair removal — legs',
    },
    description: {
      uz: 'Aleksandrit lazer bilan istalmagan tuklarni butunlay yo‘qotish. Oyoq uchun samarali, og‘riqsiz va uzoq muddatli natija.',
      ru: 'Александритовый лазер для полного удаления нежелательных волос. Эффективная, безболезненная эпиляция ног.',
      en: 'Alexandrite laser for permanent unwanted hair reduction. Effective, comfortable leg epilation.',
    },
    image: '/karusel/lazerniy-epilyatsiya.jpg',
    fallbackPriceValue: 550000,
    categoryId: 'lazernaya-epilyaciya',
    subId: 'alex-lazer',
    priceCategoryId: 'lazernaya-epilyatsiya',
    priceKeywords: ['ног', 'oyoq', 'leg', 'стоп'],
  },
  {
    id: 'promo-soch-mezoterapiya',
    slug: 'soch-mezoterapiya',
    badge: { uz: 'Trixologiya', ru: 'Трихология', en: 'Trichology' },
    title: {
      uz: 'Soch uchun mezoterapiya',
      ru: 'Мезотерапия для волос',
      en: 'Hair mesotherapy',
    },
    description: {
      uz: 'Soch folikulalarini vitamin va peptid komplekslari bilan oziqlantirish. To‘kilishni kamaytirish va zichlikni tiklash.',
      ru: 'Питание волосяных фолликулов витаминно-пептидными комплексами. Снижение выпадения и восстановление густоты.',
      en: 'Nourishes hair follicles with vitamin and peptide complexes. Reduces shedding and restores density.',
    },
    image: '/karusel/soch-mezoterapiya.jpg',
    fixedPriceText: {
      uz: '400 000 – 480 000 so‘m',
      ru: '400 000 – 480 000 сум',
      en: '400,000 – 480,000 UZS',
    },
    categoryId: 'trihologiya-centr-lechenie-volos',
    subId: 'trixoskop',
    priceCategoryId: 'trihologiya',
    priceKeywords: ['мезотерапия', 'mezoterapiya', 'mesotherapy'],
  },
  {
    id: 'promo-fototerapiya',
    slug: 'fototerapiya',
    badge: { uz: 'Fototerapiya', ru: 'Фототерапия', en: 'Phototherapy' },
    title: {
      uz: 'Fototerapiya (UVB 311 nm)',
      ru: 'Фототерапия (УФB 311 нм)',
      en: 'Phototherapy (UVB 311 nm)',
    },
    description: {
      uz: 'Psoriaz, vitiligo va surunkali teri kasalliklarini dori-darmonsiz, ultrabinafsha nurlar bilan davolash.',
      ru: 'Лечение псориаза, витилиго и хронических кожных заболеваний узкополосным УФB без медикаментов.',
      en: 'Drug-free narrow-band UVB treatment for psoriasis, vitiligo and chronic skin conditions.',
    },
    image: '/karusel/fototerapiya.webp',
    fallbackPriceValue: 70000,
    categoryId: 'dermatologiya',
    subId: 'fototerapiya',
    priceCategoryId: 'fototerapiya',
    priceKeywords: ['UVB', 'фототерапия', 'fototerapiya'],
  },
  {
    id: 'promo-soch-ekish',
    slug: 'soch-ekish',
    badge: { uz: 'Soch ekish', ru: 'Пересадка волос', en: 'Hair transplant' },
    title: {
      uz: 'Soch ekish (FUE transplantatsiya)',
      ru: 'Пересадка волос (FUE-трансплантация)',
      en: 'Hair transplant (FUE)',
    },
    description: {
      uz: 'Zamonaviy FUE usuli bilan soch to‘kilishiga butunlay chek qo‘yish. Tabiiy chiziq, yuqori zichlik va uzoq muddatli natija.',
      ru: 'Современная FUE-трансплантация при выпадении волос. Естественная линия роста, высокая плотность и долгий результат.',
      en: 'Modern FUE transplant for hair loss. Natural hairline, high density and long-lasting results.',
    },
    image: '/karusel/soch-ekish.jpg',
    fixedPriceText: {
      uz: '7 000 000 – 12 000 000 so‘m',
      ru: '7 000 000 – 12 000 000 сум',
      en: '7,000,000 – 12,000,000 UZS',
    },
    categoryId: 'trihologiya-centr-lechenie-volos',
    subId: 'trixoskop',
    priceCategoryId: 'trihologiya',
    priceKeywords: ['трансплантация', 'FUE', 'transplant', 'ekish'],
  },
];

export function buildHomePromoSlides(): HomePromoSlide[] {
  return HOME_PROMO_SLIDES;
}

export function findPromoSlideBySlug(slug: string): HomePromoSlide | undefined {
  const normalized = decodeURIComponent(slug).toLowerCase();
  return HOME_PROMO_SLIDES.find(
    (slide) =>
      slide.slug === normalized ||
      slide.id === normalized ||
      slide.id === `promo-${normalized}`,
  );
}

export function getPromoSlideNeighbors(slug: string): {
  prev: HomePromoSlide | null;
  next: HomePromoSlide | null;
} {
  const index = HOME_PROMO_SLIDES.findIndex((slide) => slide.slug === slug);
  if (index < 0) return { prev: null, next: null };
  return {
    prev: HOME_PROMO_SLIDES[(index - 1 + HOME_PROMO_SLIDES.length) % HOME_PROMO_SLIDES.length],
    next: HOME_PROMO_SLIDES[(index + 1) % HOME_PROMO_SLIDES.length],
  };
}

export function getPromoText(text: LocalizedPromoText, locale: Locale): string {
  return text[locale] || text.uz;
}

export function getPromoCarouselLabels(locale: Locale) {
  return locale === 'uz'
    ? {
        priceFrom: 'dan',
        price: 'Narx',
        priceDetails: 'Narx tafsilotlari',
        details: 'Batafsil',
        aria: 'Klinika xizmatlari karuseli',
        prev: 'Oldingi',
        next: 'Keyingi',
      }
    : locale === 'ru'
      ? {
          priceFrom: 'от',
          price: 'Цена',
          priceDetails: 'Детали цены',
          details: 'Подробнее',
          aria: 'Карусель услуг клиники',
          prev: 'Назад',
          next: 'Далее',
        }
      : {
          priceFrom: 'from',
          price: 'Price',
          priceDetails: 'Price details',
          details: 'Learn more',
          aria: 'Clinic services carousel',
          prev: 'Previous',
          next: 'Next',
        };
}
