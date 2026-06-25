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
import type {
  ApiBranchOut,
  ApiClinicRatingOut,
  ApiClinicVideoOut,
  ApiClientCountOut,
  ApiPartnerOut,
  ApiReviewOut,
  ApiSiteTextOut,
  ApiTreatmentResultOut,
  ReviewCreatePayload,
} from './cmsTypes';

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

const inflightArticleBySlug = new Map<string, Promise<ApiArticle>>();

export async function getArticleBySlug(slug: string): Promise<ApiArticle> {
  const key = slug.trim();
  const pending = inflightArticleBySlug.get(key);
  if (pending) return pending;

  const promise = apiRequest<ApiArticle>(`/api/articles/${encodeURIComponent(key)}`).finally(() => {
    inflightArticleBySlug.delete(key);
  });
  inflightArticleBySlug.set(key, promise);
  return promise;
}

export async function createAppointment(payload: AppointmentCreate): Promise<ApiResponse> {
  return apiRequest<ApiResponse>('/api/appointments', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function getPartners(): Promise<ApiPartnerOut[]> {
  return apiRequest<ApiPartnerOut[]>('/api/partners');
}

export async function getReviews(published = true): Promise<ApiReviewOut[]> {
  const query = published ? '?published=true' : '?published=false';
  return apiRequest<ApiReviewOut[]>(`/api/reviews${query}`);
}

export async function createReview(payload: ReviewCreatePayload): Promise<ApiReviewOut> {
  return apiRequest<ApiReviewOut>('/api/reviews', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function getBranches(): Promise<ApiBranchOut[]> {
  return apiRequest<ApiBranchOut[]>('/api/branches');
}

export async function getTreatmentResults(): Promise<ApiTreatmentResultOut[]> {
  return apiRequest<ApiTreatmentResultOut[]>('/api/treatment-results');
}

export async function getVideos(): Promise<ApiClinicVideoOut[]> {
  return apiRequest<ApiClinicVideoOut[]>('/api/videos');
}

export async function getClinicRatings(): Promise<ApiClinicRatingOut[]> {
  return apiRequest<ApiClinicRatingOut[]>('/api/clinic-ratings');
}

export async function getClientCount(): Promise<ApiClientCountOut> {
  return apiRequest<ApiClientCountOut>('/api/stats/client-count');
}

export async function getSiteTexts(): Promise<ApiSiteTextOut[]> {
  return apiRequest<ApiSiteTextOut[]>('/api/site-texts');
}
