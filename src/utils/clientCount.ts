import { getClientCount } from '../api/publicApi';

export const CLIENT_COUNT_UPDATED_EVENT = 'radeski-client-count-updated';
export const CLIENT_COUNT_STORAGE_KEY = 'radeski-client-count';
export const DEFAULT_CLIENT_COUNT = 998;

function normalizeClientCount(value: unknown): number | null {
  const parsed =
    typeof value === 'number'
      ? value
      : typeof value === 'string'
        ? Number.parseInt(value, 10)
        : Number.NaN;

  if (!Number.isFinite(parsed) || parsed < 0) return null;
  return Math.floor(parsed);
}

export function readStoredClientCount(): number | null {
  if (typeof window === 'undefined') return null;

  try {
    return normalizeClientCount(window.localStorage.getItem(CLIENT_COUNT_STORAGE_KEY));
  } catch {
    return null;
  }
}

function persistClientCount(count: number): void {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem(CLIENT_COUNT_STORAGE_KEY, String(count));
  } catch {
    // Private mode, quota exceeded, or storage disabled.
  }
}

let cachedClientCount = readStoredClientCount() ?? DEFAULT_CLIENT_COUNT;

export function getCachedClientCount(): number {
  return cachedClientCount;
}

/** API, localStorage va xotira qiymatlaridan eng kattasini tanlaydi (mahalliy +1 lar yo'qolmasin). */
export function resolveClientCount(apiCount?: number | null): number {
  const api = normalizeClientCount(apiCount);
  const apiBase = api && api > 0 ? api : DEFAULT_CLIENT_COUNT;
  const stored = readStoredClientCount() ?? DEFAULT_CLIENT_COUNT;
  return Math.max(apiBase, stored, cachedClientCount);
}

export function setCachedClientCount(count: number): void {
  const normalized = normalizeClientCount(count) ?? DEFAULT_CLIENT_COUNT;
  cachedClientCount = normalized;
  persistClientCount(normalized);

  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent<number>(CLIENT_COUNT_UPDATED_EVENT, { detail: cachedClientCount }),
    );
  }
}

export function incrementClientCount(): number {
  const next = getCachedClientCount() + 1;
  setCachedClientCount(next);
  return next;
}

export async function fetchClientCountFromApi(): Promise<number> {
  const result = await getClientCount();
  const count = resolveClientCount(result.client_count);
  setCachedClientCount(count);
  return count;
}
