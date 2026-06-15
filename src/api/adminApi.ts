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
} from './types';

function withToken(token?: string | null) {
  return token ?? getAuthToken();
}

function buildMultipartForm(
  data: unknown,
  files?: {
    photo?: File | null;
    image?: File | null;
    subImages?: (File | null)[];
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
  files?.subImages?.forEach((file) => {
    if (file) {
      form.append('sub_images', file);
    }
  });

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
  categoryImage?: File | null,
  subImages: (File | null)[] = [],
  token?: string | null
) {
  const form = buildMultipartForm(payload, { image: categoryImage, subImages });
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
  categoryImage?: File | null,
  subImages: (File | null)[] = [],
  token?: string | null
) {
  const form = buildMultipartForm(payload, { image: categoryImage, subImages });
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

export async function createArticle(
  payload: ArticleCreatePayload,
  coverFile?: File | null,
  token?: string | null
) {
  const form = buildMultipartForm(payload, { image: coverFile });
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
  coverFile?: File | null,
  token?: string | null
) {
  const form = buildMultipartForm(payload, { image: coverFile });
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

export async function getAppointments(token?: string | null) {
  return apiRequest<ApiAppointment[]>('/api/admin/appointments', {}, withToken(token));
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
