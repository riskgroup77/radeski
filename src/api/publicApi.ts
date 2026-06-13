import { apiRequest } from './client';
import {
  ApiDoctor,
  ApiServiceCategory,
  ApiPrice,
  ApiArticleListItem,
  ApiArticle,
  AppointmentCreate,
  ApiResponse,
} from './types';

export async function getHealth() {
  return apiRequest<{ status: string; service: string }>('/health');
}

export async function getDoctors(): Promise<ApiDoctor[]> {
  return apiRequest<ApiDoctor[]>('/api/doctors');
}

export async function getDoctor(doctorId: string): Promise<ApiDoctor> {
  return apiRequest<ApiDoctor>(`/api/doctors/${doctorId}`);
}

export async function getServices(): Promise<ApiServiceCategory[]> {
  return apiRequest<ApiServiceCategory[]>('/api/services');
}

export async function getPrices(): Promise<ApiPrice[]> {
  return apiRequest<ApiPrice[]>('/api/prices');
}

export async function getArticles(search?: string): Promise<ApiArticleListItem[]> {
  const query = search?.trim() ? `?search=${encodeURIComponent(search.trim())}` : '';
  return apiRequest<ApiArticleListItem[]>(`/api/articles${query}`);
}

export async function getArticleBySlug(slug: string): Promise<ApiArticle> {
  return apiRequest<ApiArticle>(`/api/articles/${encodeURIComponent(slug)}`);
}

export async function createAppointment(payload: AppointmentCreate): Promise<ApiResponse> {
  return apiRequest<ApiResponse>('/api/appointments', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
