export const CLIENT_COUNT_STORAGE_KEY = 'radeski_client_count_v1';
export const CLIENT_COUNT_BASE = 998;
export const CLIENT_COUNT_UPDATED_EVENT = 'radeski-client-count-updated';

export function getClientCount(): number {
  try {
    const saved = localStorage.getItem(CLIENT_COUNT_STORAGE_KEY);
    if (saved) {
      const parsed = Number.parseInt(saved, 10);
      if (!Number.isNaN(parsed) && parsed >= CLIENT_COUNT_BASE) {
        return parsed;
      }
    }
  } catch {
    /* ignore */
  }
  return CLIENT_COUNT_BASE;
}

export function incrementClientCount(): number {
  const next = getClientCount() + 1;
  try {
    localStorage.setItem(CLIENT_COUNT_STORAGE_KEY, String(next));
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent<number>(CLIENT_COUNT_UPDATED_EVENT, { detail: next }));
  return next;
}
