export type Locale = 'uz' | 'ru' | 'en';

export interface LocalizedImages {
  uz: string | null;
  ru: string | null;
  en: string | null;
}

export interface DoctorCredentials {
  licenseId: string;
  yearsActive: number;
  certificatesCount: number;
  researchCount: number;
}

export interface Translation {
  title: string;
  description: string;
}

export interface Doctor {
  id: string;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
  role: {
    uz: string;
    ru: string;
    en: string;
  };
  bio: {
    uz: string;
    ru: string;
    en: string;
  };
  experience: {
    uz: string;
    ru: string;
    en: string;
  };
  education: {
    uz: string;
    ru: string;
    en: string;
  };
  photo: string | null;
  credentials?: DoctorCredentials;
}

export interface PriceItem {
  id: string;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
  price: string;
  priceValue?: number;
  category: string;
  ru_price_placeholder?: string;
  en_price_placeholder?: string;
}

export interface ServiceConditionTopic {
  title: string;
  description: string;
}

export interface ServiceRichContent {
  overview: string;
  /** Kasalliklar va muammolar haqida batafsil ma'lumot */
  conditions: ServiceConditionTopic[];
  indications: string[];
  solutions: string[];
  benefits: string[];
  process: string[];
}

export interface ServiceDetail {
  id: string;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  image?: string | null;
  /** Til bo'yicha rasmlar (uz, ru, en) */
  images?: LocalizedImages;
  icon?: string;
  features?: {
    uz: string[];
    ru: string[];
    en: string[];
  };
  /** To'liq xizmat ma'lumotlari — backenddan keladi */
  richContent?: Partial<Record<Locale, ServiceRichContent>>;
}

export interface ServiceCategory {
  id: string;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  icon: string;
  image?: string | null;
  images?: LocalizedImages;
  subServices: ServiceDetail[];
  /** Kategoriya bo'yicha to'liq ma'lumot — backenddan keladi */
  richContent?: Partial<Record<Locale, ServiceRichContent>>;
  sortOrder?: number;
  isPriceSection?: boolean;
}

export interface Article {
  id: string;
  slug: string;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  summary: {
    uz: string;
    ru: string;
    en: string;
  };
  content: {
    uz: string;
    ru: string;
    en: string;
  };
  author: {
    uz: string;
    ru: string;
    en: string;
  };
  date: string;
  image: string | null;
  images?: LocalizedImages;
  views: number;
  /** To'liq maqola qo'shimcha ma'lumotlari — frontend katalogi yoki backend */
  richContent?: Partial<Record<Locale, ArticleRichContent>>;
}

export interface ArticleFaqItem {
  question: string;
  answer: string;
}

export interface ArticleRichContent {
  keyTakeaways: string[];
  faq: ArticleFaqItem[];
  tags: string[];
  whenToSeeDoctor: string[];
}
