import { apiRequest, getAuthToken } from './client';
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

export async function adminLogin(payload: LoginRequest): Promise<TokenResponse> {
  return apiRequest<TokenResponse>('/api/admin/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function createDoctor(payload: DoctorCreatePayload, token?: string | null) {
  return apiRequest<ApiDoctor>('/api/admin/doctors', {
    method: 'POST',
    body: JSON.stringify(payload),
  }, withToken(token));
}

export async function updateDoctor(
  doctorId: string,
  payload: Partial<DoctorCreatePayload>,
  token?: string | null
) {
  return apiRequest<ApiDoctor>(`/api/admin/doctors/${doctorId}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  }, withToken(token));
}

export async function deleteDoctor(doctorId: string, token?: string | null) {
  return apiRequest<ApiResponse>(`/api/admin/doctors/${doctorId}`, {
    method: 'DELETE',
  }, withToken(token));
}

export async function createServiceCategory(payload: ServiceCategoryCreatePayload, token?: string | null) {
  return apiRequest<ApiServiceCategory>('/api/admin/services', {
    method: 'POST',
    body: JSON.stringify(payload),
  }, withToken(token));
}

export async function updateServiceCategory(
  categoryId: string,
  payload: Partial<ServiceCategoryCreatePayload>,
  token?: string | null
) {
  return apiRequest<ApiServiceCategory>(`/api/admin/services/${encodeURIComponent(categoryId)}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  }, withToken(token));
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

export async function createArticle(payload: ArticleCreatePayload, token?: string | null) {
  return apiRequest<ApiArticle>('/api/admin/articles', {
    method: 'POST',
    body: JSON.stringify(payload),
  }, withToken(token));
}

export async function updateArticle(
  articleId: string,
  payload: Partial<ArticleCreatePayload>,
  token?: string | null
) {
  return apiRequest<ApiArticle>(`/api/admin/articles/${articleId}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  }, withToken(token));
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
