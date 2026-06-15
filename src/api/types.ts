export type ApiLocale = 'uz' | 'ru' | 'en';
export type AppointmentStatus = 'new' | 'contacted' | 'completed' | 'canceled';

export interface DoctorCredential {
  id: string;
  doctor_id: string;
  license_id: string | null;
  years_active: number | null;
  certificates_count: number | null;
  research_count: number | null;
}

export interface ApiDoctor {
  id: string;
  name_uz: string;
  name_ru: string;
  name_en: string;
  role_uz: string;
  role_ru: string;
  role_en: string;
  bio_uz: string | null;
  bio_ru: string | null;
  bio_en: string | null;
  experience_uz: string | null;
  experience_ru: string | null;
  experience_en: string | null;
  education_uz: string | null;
  education_ru: string | null;
  education_en: string | null;
  photo: string | null;
  created_at: string;
  credentials: DoctorCredential | null;
}

export interface ApiSubService {
  id: string;
  category_id: string;
  name_uz: string;
  name_ru: string;
  name_en: string;
  description_uz: string | null;
  description_ru: string | null;
  description_en: string | null;
  image: string | null;
}

export interface ApiServiceCategory {
  id: string;
  title_uz: string;
  title_ru: string;
  title_en: string;
  description_uz: string | null;
  description_ru: string | null;
  description_en: string | null;
  icon: string | null;
  image: string | null;
  sub_services: ApiSubService[];
}

export interface ApiPrice {
  id: string;
  category_id: string;
  name_uz: string;
  name_ru: string;
  name_en: string;
  price_value: number;
}

export interface ApiArticleListItem {
  id: string;
  slug: string;
  title_uz: string;
  title_ru: string;
  title_en: string;
  summary_uz: string | null;
  summary_ru: string | null;
  summary_en: string | null;
  author_uz: string | null;
  author_ru: string | null;
  author_en: string | null;
  image: string | null;
  views: number;
  date: string;
}

export interface ApiArticle extends ApiArticleListItem {
  content_uz: string | null;
  content_ru: string | null;
  content_en: string | null;
}

export interface AppointmentCreate {
  phone_number: string;
  service_id?: string | null;
}

export interface ApiAppointment {
  id: string;
  phone_number: string;
  service_id: string | null;
  status: AppointmentStatus;
  created_at: string;
  service_name_uz: string | null;
  service_name_ru: string | null;
  service_name_en: string | null;
}

export interface ApiResponse {
  success: boolean;
  message: string | null;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface TokenResponse {
  access_token: string;
  token_type: 'bearer';
}

export interface DoctorCreatePayload {
  name_uz: string;
  name_ru: string;
  name_en: string;
  role_uz: string;
  role_ru: string;
  role_en: string;
  bio_uz?: string | null;
  bio_ru?: string | null;
  bio_en?: string | null;
  experience_uz?: string | null;
  experience_ru?: string | null;
  experience_en?: string | null;
  education_uz?: string | null;
  education_ru?: string | null;
  education_en?: string | null;
  credentials?: {
    license_id?: string | null;
    years_active?: number | null;
    certificates_count?: number | null;
    research_count?: number | null;
  } | null;
  photo?: string | null;
}

export interface SubServicePayload {
  name_uz: string;
  name_ru: string;
  name_en: string;
  description_uz?: string | null;
  description_ru?: string | null;
  description_en?: string | null;
  image?: string | null;
}

export interface ServiceCategoryCreatePayload {
  id: string;
  title_uz: string;
  title_ru: string;
  title_en: string;
  description_uz?: string | null;
  description_ru?: string | null;
  description_en?: string | null;
  icon?: string | null;
  image?: string | null;
  sub_services?: SubServicePayload[];
}

export interface PriceCreatePayload {
  category_id: string;
  name_uz: string;
  name_ru: string;
  name_en: string;
  price_value: number;
}

export interface ArticleCreatePayload {
  slug: string;
  title_uz: string;
  title_ru: string;
  title_en: string;
  summary_uz?: string | null;
  summary_ru?: string | null;
  summary_en?: string | null;
  content_uz?: string | null;
  content_ru?: string | null;
  content_en?: string | null;
  author_uz?: string | null;
  author_ru?: string | null;
  author_en?: string | null;
  date?: string | null;
  image?: string | null;
}
