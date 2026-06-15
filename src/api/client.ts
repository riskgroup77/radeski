const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export class ApiError extends Error {
  status: number;
  detail: unknown;

  constructor(status: number, detail: unknown, message?: string) {
    super(message || ApiError.formatDetail(detail) || `HTTP ${status}`);
    this.name = 'ApiError';
    this.status = status;
    this.detail = detail;
  }

  static formatDetail(detail: unknown): string {
    if (typeof detail === 'string') return detail;
    if (Array.isArray(detail)) {
      return detail.map((item) => item?.msg || String(item)).join(', ');
    }
    if (detail && typeof detail === 'object' && 'detail' in detail) {
      return ApiError.formatDetail((detail as { detail: unknown }).detail);
    }
    return '';
  }
}

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {},
  token?: string | null
): Promise<T> {
  const headers: Record<string, string> = {
    ...(options.headers as Record<string, string> | undefined),
  };

  if (options.body && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new ApiError(response.status, errorBody.detail ?? errorBody, response.statusText);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

export async function apiFormRequest<T>(
  path: string,
  formData: FormData,
  token?: string | null
): Promise<T> {
  const headers: Record<string, string> = {};

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${path}`, {
    method: 'POST',
    headers,
    body: formData,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new ApiError(response.status, errorBody.detail ?? errorBody, response.statusText);
  }

  return response.json() as Promise<T>;
}

export async function apiFormRequestWithMethod<T>(
  path: string,
  method: 'POST' | 'PUT' | 'PATCH',
  formData: FormData,
  token?: string | null
): Promise<T> {
  const headers: Record<string, string> = {};

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: formData,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new ApiError(response.status, errorBody.detail ?? errorBody, response.statusText);
  }

  return response.json() as Promise<T>;
}

export function getApiUrl(): string {
  return API_URL;
}

/** Relative upload paths from API → full URL for <img src> */
export function resolveMediaUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  const base = API_URL.replace(/\/$/, '');
  if (url.startsWith('/')) return `${base}${url}`;
  if (url.startsWith('uploads/')) return `${base}/${url}`;
  return url;
}

export const AUTH_TOKEN_KEY = 'admin_token';

export function getAuthToken(): string | null {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function setAuthToken(token: string): void {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export function clearAuthToken(): void {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}
