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

export { hasLocalizedImageFiles };
