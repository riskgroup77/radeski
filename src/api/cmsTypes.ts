/** CMS modullari — backend migration 005 */

export interface ApiPartnerOut {
  id: string;
  name_uz: string;
  name_ru: string;
  name_en: string;
  logo_url: string | null;
  logo_variant: string | null;
  sort_order: number;
  is_active: boolean;
  created_at: string;
}

export interface PartnerCreatePayload {
  name_uz: string;
  name_ru: string;
  name_en: string;
  logo_variant?: string | null;
  sort_order?: number;
  is_active?: boolean;
}

export interface ApiReviewOut {
  id: string;
  author_name: string;
  rating: number;
  comment_uz: string;
  comment_ru: string | null;
  comment_en: string | null;
  service_uz: string | null;
  service_ru: string | null;
  service_en: string | null;
  published: boolean;
  created_at: string;
}

export interface ReviewCreatePayload {
  author_name: string;
  rating: number;
  comment_uz: string;
  comment_ru?: string;
  comment_en?: string;
  service_uz?: string;
  service_ru?: string;
  service_en?: string;
}

export interface ReviewPatchPayload {
  published?: boolean;
}

export interface ApiBranchOut {
  id: string;
  name_uz: string;
  name_ru: string;
  name_en: string;
  address_uz: string;
  address_ru: string | null;
  address_en: string | null;
  phone: string | null;
  hours_uz: string | null;
  hours_ru: string | null;
  hours_en: string | null;
  services_uz: string | null;
  services_ru: string | null;
  services_en: string | null;
  map_embed: string | null;
  image: string | null;
  is_main: boolean;
  sort_order: number;
  is_active: boolean;
  created_at: string;
}

export interface BranchCreatePayload {
  name_uz: string;
  name_ru: string;
  name_en: string;
  address_uz: string;
  address_ru?: string | null;
  address_en?: string | null;
  phone?: string | null;
  hours_uz?: string | null;
  hours_ru?: string | null;
  hours_en?: string | null;
  services_uz?: string | null;
  services_ru?: string | null;
  services_en?: string | null;
  map_embed?: string | null;
  is_main?: boolean;
  sort_order?: number;
  is_active?: boolean;
}

export interface ApiTreatmentResultOut {
  id: string;
  title_uz: string;
  title_ru: string;
  title_en: string;
  description_uz: string | null;
  description_ru: string | null;
  description_en: string | null;
  service_uz: string | null;
  service_ru: string | null;
  service_en: string | null;
  sessions: string | null;
  before_image: string | null;
  after_image: string | null;
  sort_order: number;
  published: boolean;
  created_at: string;
}

export interface TreatmentResultCreatePayload {
  title_uz: string;
  title_ru: string;
  title_en: string;
  description_uz?: string | null;
  description_ru?: string | null;
  description_en?: string | null;
  service_uz?: string | null;
  service_ru?: string | null;
  service_en?: string | null;
  sessions?: string | null;
  sort_order?: number;
  published?: boolean;
}

export interface ApiClinicVideoOut {
  id: string;
  title_uz: string;
  title_ru: string;
  title_en: string;
  description_uz: string | null;
  description_ru: string | null;
  description_en: string | null;
  src: string;
  thumbnail: string | null;
  duration: string | null;
  category_uz: string | null;
  category_ru: string | null;
  category_en: string | null;
  sort_order: number;
  is_active: boolean;
  created_at: string;
}

export interface ClinicVideoCreatePayload {
  title_uz: string;
  title_ru: string;
  title_en: string;
  description_uz?: string | null;
  description_ru?: string | null;
  description_en?: string | null;
  src: string;
  duration?: string | null;
  category_uz?: string | null;
  category_ru?: string | null;
  category_en?: string | null;
  sort_order?: number;
  is_active?: boolean;
}

export interface ApiClinicRatingOut {
  id: string;
  platform: string;
  rating: number;
  review_count: number;
  url: string | null;
  summary_uz: string | null;
  summary_ru: string | null;
  summary_en: string | null;
  sort_order: number;
  is_active: boolean;
  created_at: string;
}

export interface ClinicRatingCreatePayload {
  platform: string;
  rating: number;
  review_count: number;
  url?: string | null;
  summary_uz?: string | null;
  summary_ru?: string | null;
  summary_en?: string | null;
  sort_order?: number;
  is_active?: boolean;
}

export interface ApiSiteTextOut {
  key: string;
  value_uz: string | null;
  value_ru: string | null;
  value_en: string | null;
  updated_at: string;
}

export interface SiteTextUpdatePayload {
  value_uz?: string | null;
  value_ru?: string | null;
  value_en?: string | null;
}

export interface SiteTextBulkPayload {
  items: Record<string, SiteTextUpdatePayload>;
}

export interface ApiClientCountOut {
  client_count: number;
}
