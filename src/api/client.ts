const API_BACKEND = 'https://radeskiapi.arxivfjsti.uz';
const PRODUCTION_HOSTS = new Set(['radeski.uz', 'www.radeski.uz']);

function resolveApiBaseUrl(): string {
  // Production: always same-origin /api proxy — ignores baked VITE_API_URL
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    if (PRODUCTION_HOSTS.has(host)) {
      return '';
    }
  }

  const envUrl =
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL) ||
    (typeof process !== 'undefined' ? process.env.VITE_API_URL : undefined);

  if (typeof envUrl === 'string' && envUrl.trim()) {
    return envUrl.trim().replace(/\/$/, '');
  }

  if (typeof window !== 'undefined') {
    return '';
  }

  return API_BACKEND;
}

function getApiBaseUrl(): string {
  return resolveApiBaseUrl();
}

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

  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    if (response.status === 401) {
      handleUnauthorizedResponse(token);
    }
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

  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    method: 'POST',
    headers,
    body: formData,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    if (response.status === 401) {
      handleUnauthorizedResponse(token);
    }
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

  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    method,
    headers,
    body: formData,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    if (response.status === 401) {
      handleUnauthorizedResponse(token);
    }
    throw new ApiError(response.status, errorBody.detail ?? errorBody, response.statusText);
  }

  return response.json() as Promise<T>;
}

export function getApiUrl(): string {
  return getApiBaseUrl();
}

/** Relative upload paths from API → full URL for <img src> */
export function resolveMediaUrl(url: string | null | undefined): string | null {
  if (!url) return null;

  const base = (getApiBaseUrl() || API_BACKEND).replace(/\/$/, '');

  const uploadsPath = url.match(/\/uploads\/[^\s?#]+/)?.[0];
  if (uploadsPath) {
    return `${base}${uploadsPath}`;
  }

  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  if (url.startsWith('/uploads/')) return `${base}${url}`;
  if (url.startsWith('uploads/')) return `${base}/${url}`;
  if (url.startsWith('/')) return url;
  return url;
}

/** API upload URL ekanligini tekshiradi (localhost yoki /uploads/) */
export function isApiUploadMediaUrl(url: string | null | undefined): boolean {
  if (!url) return false;
  return /\/uploads\//.test(url) || /localhost|127\.0\.0\.1/.test(url);
}

export const AUTH_TOKEN_KEY = 'admin_token';
export const ADMIN_SESSION_EXPIRED_EVENT = 'radeski-admin-session-expired';

export function getAuthToken(): string | null {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function setAuthToken(token: string): void {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export function clearAuthToken(): void {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

export function dispatchSessionExpired(): void {
  clearAuthToken();
  window.dispatchEvent(new CustomEvent(ADMIN_SESSION_EXPIRED_EVENT));
}

export function isUnauthorizedError(error: unknown): boolean {
  return error instanceof ApiError && error.status === 401;
}

function getTokenExpiryMs(token: string): number | null {
  try {
    const parts = token.split('.');
    if (parts.length < 2) return null;
    const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
    if (typeof payload.exp !== 'number') return null;
    return payload.exp * 1000;
  } catch {
    return null;
  }
}

export function isAuthTokenExpired(token?: string | null, leewayMs = 30_000): boolean {
  const value = token ?? getAuthToken();
  if (!value) return true;
  const expiresAt = getTokenExpiryMs(value);
  if (!expiresAt) return false;
  return Date.now() >= expiresAt - leewayMs;
}

function handleUnauthorizedResponse(token?: string | null): void {
  if (token) {
    dispatchSessionExpired();
  }
}
