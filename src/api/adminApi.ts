import { apiRequest, getAuthToken, apiFormRequestWithMethod } from './client';
import {
  TokenResponse,
  LoginRequest,
  ApiDoctor,
  ApiServiceCategory,
  ApiPrice,
  ApiArticle,
  ApiResponse,
  ApiAppointment,
  DoctorCreatePayload,
  ServiceCategoryCreatePayload,
  PriceCreatePayload,
  ArticleCreatePayload,
  AppointmentStatus,
  PriceBulkImportPayload,
  PriceBulkImportResult,
} from './types';
import type {
  ApiBranchOut,
  ApiClinicRatingOut,
  ApiClinicVideoOut,
  ApiPartnerOut,
  ApiReviewOut,
  ApiSiteTextOut,
  ApiTreatmentResultOut,
  BranchCreatePayload,
  ClinicRatingCreatePayload,
  ClinicVideoCreatePayload,
  PartnerCreatePayload,
  ReviewPatchPayload,
  SiteTextBulkPayload,
  SiteTextUpdatePayload,
  TreatmentResultCreatePayload,
} from './cmsTypes';
import type { Locale } from '../types';
import type { LocalizedImageFiles } from '../utils/localizedImage';
import { hasLocalizedImageFiles } from '../utils/localizedImage';

export type SubLocalizedImageArrays = Partial<Record<Locale, File[]>>;

function withToken(token?: string | null) {
  return token ?? getAuthToken();
}

function appendLocalizedImages(form: FormData, files?: LocalizedImageFiles) {
  if (!files) return;
  if (files.uz) form.append('image_uz', files.uz);
  if (files.ru) form.append('image_ru', files.ru);
  if (files.en) form.append('image_en', files.en);
}

function appendSubLocalizedImageArrays(form: FormData, arrays?: SubLocalizedImageArrays) {
  if (!arrays) return;
  (['uz', 'ru', 'en'] as Locale[]).forEach((locale) => {
    arrays[locale]?.forEach((file) => {
      if (file) form.append(`sub_images_${locale}`, file);
    });
  });
}

function buildMultipartForm(
  data: unknown,
  files?: {
    photo?: File | null;
    image?: File | null;
    localizedImages?: LocalizedImageFiles;
    subImages?: (File | null)[];
    subLocalizedImageArrays?: SubLocalizedImageArrays;
  }
): FormData {
  const form = new FormData();
  form.append('data', JSON.stringify(data));

  if (files?.photo) {
    form.append('photo', files.photo);
  }
  if (files?.image) {
    form.append('image', files.image);
  }
  appendLocalizedImages(form, files?.localizedImages);
  files?.subImages?.forEach((file) => {
    if (file) {
      form.append('sub_images', file);
    }
  });
  appendSubLocalizedImageArrays(form, files?.subLocalizedImageArrays);

  return form;
}

export async function adminLogin(payload: LoginRequest): Promise<TokenResponse> {
  return apiRequest<TokenResponse>('/api/admin/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function createDoctor(
  payload: DoctorCreatePayload,
  photoFile?: File | null,
  token?: string | null
) {
  const form = buildMultipartForm(payload, { photo: photoFile });
  return apiFormRequestWithMethod<ApiDoctor>(
    '/api/admin/doctors',
    'POST',
    form,
    withToken(token)
  );
}

export async function updateDoctor(
  doctorId: string,
  payload: Partial<DoctorCreatePayload>,
  photoFile?: File | null,
  token?: string | null
) {
  const form = buildMultipartForm(payload, { photo: photoFile });
  return apiFormRequestWithMethod<ApiDoctor>(
    `/api/admin/doctors/${doctorId}`,
    'PUT',
    form,
    withToken(token)
  );
}

export async function deleteDoctor(doctorId: string, token?: string | null) {
  return apiRequest<ApiResponse>(`/api/admin/doctors/${doctorId}`, {
    method: 'DELETE',
  }, withToken(token));
}

export async function createServiceCategory(
  payload: ServiceCategoryCreatePayload,
  categoryImages?: LocalizedImageFiles,
  subImages: (File | null)[] = [],
  token?: string | null
) {
  const form = buildMultipartForm(payload, {
    localizedImages: categoryImages,
    subImages,
  });
  return apiFormRequestWithMethod<ApiServiceCategory>(
    '/api/admin/services',
    'POST',
    form,
    withToken(token)
  );
}

export async function updateServiceCategory(
  categoryId: string,
  payload: Partial<ServiceCategoryCreatePayload>,
  categoryImages?: LocalizedImageFiles,
  subImages: (File | null)[] = [],
  subLocalizedImageArrays?: SubLocalizedImageArrays,
  token?: string | null
) {
  const form = buildMultipartForm(payload, {
    localizedImages: categoryImages,
    subImages,
    subLocalizedImageArrays,
  });
  return apiFormRequestWithMethod<ApiServiceCategory>(
    `/api/admin/services/${encodeURIComponent(categoryId)}`,
    'PUT',
    form,
    withToken(token)
  );
}

export async function deleteServiceCategory(categoryId: string, token?: string | null) {
  return apiRequest<ApiResponse>(`/api/admin/services/${encodeURIComponent(categoryId)}`, {
    method: 'DELETE',
  }, withToken(token));
}

export async function createPrice(payload: PriceCreatePayload, token?: string | null) {
  return apiRequest<ApiPrice>('/api/admin/prices', {
    method: 'POST',
    body: JSON.stringify(payload),
  }, withToken(token));
}

export async function updatePrice(
  priceId: string,
  payload: Partial<PriceCreatePayload>,
  token?: string | null
) {
  return apiRequest<ApiPrice>(`/api/admin/prices/${priceId}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  }, withToken(token));
}

export async function deletePrice(priceId: string, token?: string | null) {
  return apiRequest<ApiResponse>(`/api/admin/prices/${priceId}`, {
    method: 'DELETE',
  }, withToken(token));
}

export async function getAdminDoctors(token?: string | null) {
  return apiRequest<ApiDoctor[]>('/api/admin/doctors', {}, withToken(token));
}

export async function getAdminServices(token?: string | null) {
  return apiRequest<ApiServiceCategory[]>('/api/admin/services', {}, withToken(token));
}

export async function getAdminPrices(categoryId?: string, token?: string | null) {
  const query = categoryId ? `?category_id=${encodeURIComponent(categoryId)}` : '';
  return apiRequest<ApiPrice[]>(`/api/admin/prices${query}`, {}, withToken(token));
}

export async function getAdminArticles(token?: string | null) {
  return apiRequest<ApiArticle[]>('/api/admin/articles', {}, withToken(token));
}

export async function importPrices(
  payload: PriceBulkImportPayload,
  token?: string | null,
) {
  return apiRequest<PriceBulkImportResult>('/api/admin/prices/import', {
    method: 'POST',
    body: JSON.stringify(payload),
  }, withToken(token));
}

export async function createArticle(
  payload: ArticleCreatePayload,
  coverFiles?: LocalizedImageFiles,
  token?: string | null
) {
  const form = buildMultipartForm(payload, {
    localizedImages: coverFiles,
    image: coverFiles?.uz ?? null,
  });
  return apiFormRequestWithMethod<ApiArticle>(
    '/api/admin/articles',
    'POST',
    form,
    withToken(token)
  );
}

export async function updateArticle(
  articleId: string,
  payload: Partial<ArticleCreatePayload>,
  coverFiles?: LocalizedImageFiles,
  token?: string | null
) {
  const form = buildMultipartForm(payload, {
    localizedImages: coverFiles,
    image: coverFiles?.uz ?? null,
  });
  return apiFormRequestWithMethod<ApiArticle>(
    `/api/admin/articles/${articleId}`,
    'PUT',
    form,
    withToken(token)
  );
}

export async function deleteArticle(articleId: string, token?: string | null) {
  return apiRequest<ApiResponse>(`/api/admin/articles/${articleId}`, {
    method: 'DELETE',
  }, withToken(token));
}

export async function getAppointments(
  options?: { status?: AppointmentStatus },
  token?: string | null,
) {
  const query = options?.status ? `?status=${encodeURIComponent(options.status)}` : '';
  return apiRequest<ApiAppointment[]>(`/api/admin/appointments${query}`, {}, withToken(token));
}

export async function updateAppointmentStatus(
  appointmentId: string,
  status: AppointmentStatus,
  token?: string | null
) {
  return apiRequest<ApiAppointment>(`/api/admin/appointments/${appointmentId}`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  }, withToken(token));
}

function buildCmsMultipartForm(data: unknown, files?: Record<string, File | null | undefined>): FormData {
  const form = new FormData();
  form.append('data', JSON.stringify(data));
  if (files) {
    Object.entries(files).forEach(([key, file]) => {
      if (file) form.append(key, file);
    });
  }
  return form;
}

// --- CMS: Partners ---
export async function getAdminPartners(token?: string | null) {
  return apiRequest<ApiPartnerOut[]>('/api/admin/partners', {}, withToken(token));
}

export async function createPartner(
  payload: PartnerCreatePayload,
  logoFile?: File | null,
  token?: string | null,
) {
  const form = buildCmsMultipartForm(payload, { logo: logoFile });
  return apiFormRequestWithMethod<ApiPartnerOut>('/api/admin/partners', 'POST', form, withToken(token));
}

export async function updatePartner(
  partnerId: string,
  payload: Partial<PartnerCreatePayload>,
  logoFile?: File | null,
  token?: string | null,
) {
  const form = buildCmsMultipartForm(payload, { logo: logoFile });
  return apiFormRequestWithMethod<ApiPartnerOut>(
    `/api/admin/partners/${partnerId}`,
    'PUT',
    form,
    withToken(token),
  );
}

export async function deletePartner(partnerId: string, token?: string | null) {
  return apiRequest<ApiResponse>(`/api/admin/partners/${partnerId}`, { method: 'DELETE' }, withToken(token));
}

// --- CMS: Reviews ---
export async function getAdminReviews(token?: string | null) {
  return apiRequest<ApiReviewOut[]>('/api/admin/reviews', {}, withToken(token));
}

export async function patchReview(
  reviewId: string,
  payload: ReviewPatchPayload,
  token?: string | null,
) {
  return apiRequest<ApiReviewOut>(`/api/admin/reviews/${reviewId}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  }, withToken(token));
}

export async function deleteReview(reviewId: string, token?: string | null) {
  return apiRequest<ApiResponse>(`/api/admin/reviews/${reviewId}`, { method: 'DELETE' }, withToken(token));
}

// --- CMS: Branches ---
export async function getAdminBranches(token?: string | null) {
  return apiRequest<ApiBranchOut[]>('/api/admin/branches', {}, withToken(token));
}

export async function createBranch(
  payload: BranchCreatePayload,
  imageFile?: File | null,
  token?: string | null,
) {
  const form = buildCmsMultipartForm(payload, { image: imageFile });
  return apiFormRequestWithMethod<ApiBranchOut>('/api/admin/branches', 'POST', form, withToken(token));
}

export async function updateBranch(
  branchId: string,
  payload: Partial<BranchCreatePayload>,
  imageFile?: File | null,
  token?: string | null,
) {
  const form = buildCmsMultipartForm(payload, { image: imageFile });
  return apiFormRequestWithMethod<ApiBranchOut>(
    `/api/admin/branches/${branchId}`,
    'PUT',
    form,
    withToken(token),
  );
}

export async function deleteBranch(branchId: string, token?: string | null) {
  return apiRequest<ApiResponse>(`/api/admin/branches/${branchId}`, { method: 'DELETE' }, withToken(token));
}

// --- CMS: Treatment results ---
export async function getAdminTreatmentResults(token?: string | null) {
  return apiRequest<ApiTreatmentResultOut[]>('/api/admin/treatment-results', {}, withToken(token));
}

export async function createTreatmentResult(
  payload: TreatmentResultCreatePayload,
  files?: { before_image?: File | null; after_image?: File | null },
  token?: string | null,
) {
  const form = buildCmsMultipartForm(payload, files);
  return apiFormRequestWithMethod<ApiTreatmentResultOut>(
    '/api/admin/treatment-results',
    'POST',
    form,
    withToken(token),
  );
}

export async function updateTreatmentResult(
  resultId: string,
  payload: Partial<TreatmentResultCreatePayload>,
  files?: { before_image?: File | null; after_image?: File | null },
  token?: string | null,
) {
  const form = buildCmsMultipartForm(payload, files);
  return apiFormRequestWithMethod<ApiTreatmentResultOut>(
    `/api/admin/treatment-results/${resultId}`,
    'PUT',
    form,
    withToken(token),
  );
}

export async function deleteTreatmentResult(resultId: string, token?: string | null) {
  return apiRequest<ApiResponse>(`/api/admin/treatment-results/${resultId}`, {
    method: 'DELETE',
  }, withToken(token));
}

// --- CMS: Videos ---
export async function getAdminVideos(token?: string | null) {
  return apiRequest<ApiClinicVideoOut[]>('/api/admin/videos', {}, withToken(token));
}

export async function createVideo(
  payload: ClinicVideoCreatePayload,
  thumbnailFile?: File | null,
  token?: string | null,
) {
  const form = buildCmsMultipartForm(payload, { thumbnail: thumbnailFile });
  return apiFormRequestWithMethod<ApiClinicVideoOut>('/api/admin/videos', 'POST', form, withToken(token));
}

export async function updateVideo(
  videoId: string,
  payload: Partial<ClinicVideoCreatePayload>,
  thumbnailFile?: File | null,
  token?: string | null,
) {
  const form = buildCmsMultipartForm(payload, { thumbnail: thumbnailFile });
  return apiFormRequestWithMethod<ApiClinicVideoOut>(
    `/api/admin/videos/${videoId}`,
    'PUT',
    form,
    withToken(token),
  );
}

export async function deleteVideo(videoId: string, token?: string | null) {
  return apiRequest<ApiResponse>(`/api/admin/videos/${videoId}`, { method: 'DELETE' }, withToken(token));
}

// --- CMS: Clinic ratings ---
export async function getAdminClinicRatings(token?: string | null) {
  return apiRequest<ApiClinicRatingOut[]>('/api/admin/clinic-ratings', {}, withToken(token));
}

export async function createClinicRating(payload: ClinicRatingCreatePayload, token?: string | null) {
  return apiRequest<ApiClinicRatingOut>('/api/admin/clinic-ratings', {
    method: 'POST',
    body: JSON.stringify(payload),
  }, withToken(token));
}

export async function updateClinicRating(
  ratingId: string,
  payload: Partial<ClinicRatingCreatePayload>,
  token?: string | null,
) {
  return apiRequest<ApiClinicRatingOut>(`/api/admin/clinic-ratings/${ratingId}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  }, withToken(token));
}

export async function deleteClinicRating(ratingId: string, token?: string | null) {
  return apiRequest<ApiResponse>(`/api/admin/clinic-ratings/${ratingId}`, {
    method: 'DELETE',
  }, withToken(token));
}

// --- CMS: Site texts ---
export async function getAdminSiteTexts(token?: string | null) {
  return apiRequest<ApiSiteTextOut[]>('/api/admin/site-texts', {}, withToken(token));
}

export async function updateSiteText(
  key: string,
  payload: SiteTextUpdatePayload,
  token?: string | null,
) {
  return apiRequest<ApiSiteTextOut>(`/api/admin/site-texts/${encodeURIComponent(key)}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  }, withToken(token));
}

export async function bulkUpdateSiteTexts(payload: SiteTextBulkPayload, token?: string | null) {
  return apiRequest<ApiSiteTextOut[]>('/api/admin/site-texts', {
    method: 'PUT',
    body: JSON.stringify(payload),
  }, withToken(token));
}

export async function deleteSiteText(key: string, token?: string | null) {
  return apiRequest<ApiResponse>(`/api/admin/site-texts/${encodeURIComponent(key)}`, {
    method: 'DELETE',
  }, withToken(token));
}

export { hasLocalizedImageFiles };
