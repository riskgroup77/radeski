import { getClientCount } from '../api/publicApi';

export const CLIENT_COUNT_UPDATED_EVENT = 'radeski-client-count-updated';

let cachedClientCount = 998;

export function getCachedClientCount(): number {
  return cachedClientCount;
}

export function setCachedClientCount(count: number): void {
  cachedClientCount = Math.max(0, count);
  window.dispatchEvent(
    new CustomEvent<number>(CLIENT_COUNT_UPDATED_EVENT, { detail: cachedClientCount }),
  );
}

export function incrementClientCount(): number {
  const next = getCachedClientCount() + 1;
  setCachedClientCount(next);
  return next;
}

export async function fetchClientCountFromApi(): Promise<number> {
  const result = await getClientCount();
  const count = result.client_count > 0 ? result.client_count : 998;
  setCachedClientCount(count);
  return count;
}
