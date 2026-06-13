export type Locale = 'uz' | 'ru' | 'en';

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
  photo: string;
}

export interface PriceItem {
  id: string;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
  price: string;
  category: string;
  ru_price_placeholder?: string;
  en_price_placeholder?: string;
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
  features?: {
    uz: string[];
    ru: string[];
    en: string[];
  };
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
  subServices: ServiceDetail[];
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
  image: string;
  views: number;
}
