/**
 * Where the public site gets CMS data from — in this order:
 *
 *   1. a fresh copy in this browser (localStorage, a few minutes old at most)
 *   2. the static snapshot `/data/site-snapshot.json` (rebuilt by cron every few minutes)
 *   3. the live API — only when the snapshot is stale or missing, retried once on HTTP 429
 *   4. any older cached/snapshot value, so a rate-limited or offline API never empties pages
 *
 * Previously every page load fired 11 API requests; a visitor (or many visitors behind one
 * mobile-carrier IP) quickly tripped the API's rate limit and pages fell back to stale
 * built-in data ("Shifokor topilmadi"). Now a normal page load is one static, gzip'd request.
 * The admin panel passes `live: true` and always reads the API directly.
 */
import { ApiError } from './client';

export type PublicDataKey =
  | 'doctors'
  | 'services'
  | 'prices'
  | 'articles'
  | 'siteTexts'
  | 'partners'
  | 'reviews'
  | 'branches'
  | 'treatmentResults'
  | 'videos'
  | 'clinicRatings'
  | 'clientCount';

interface SiteSnapshot {
  generatedAt: string;
  data: Partial<Record<PublicDataKey, unknown>>;
}

interface CacheEntry<T> {
  at: number;
  value: T;
}

const SNAPSHOT_URL = '/data/site-snapshot.json';
/** Snapshot younger than this is used as-is, without touching the API. */
const SNAPSHOT_FRESH_MS = 15 * 60 * 1000;
/** Browser cache for values fetched from the live API. */
const CACHE_TTL_MS = 5 * 60 * 1000;
const CACHE_PREFIX = 'radeski_public_data_v1:';
const RATE_LIMIT_RETRY_MS = 1500;

let snapshotPromise: Promise<SiteSnapshot | null> | null = null;

/** Loads the static snapshot once per page (shared by every data hook). */
export function loadSiteSnapshot(): Promise<SiteSnapshot | null> {
  if (!snapshotPromise) {
    snapshotPromise = fetch(SNAPSHOT_URL, { cache: 'no-cache' })
      .then(async (response) => {
        if (!response.ok) return null;
        const snapshot = (await response.json()) as SiteSnapshot;
        return snapshot && typeof snapshot === 'object' && snapshot.data ? snapshot : null;
      })
      .catch(() => null);
  }
  return snapshotPromise;
}

function isSnapshotFresh(snapshot: SiteSnapshot | null): boolean {
  if (!snapshot) return false;
  const generated = Date.parse(snapshot.generatedAt);
  return Number.isFinite(generated) && Date.now() - generated < SNAPSHOT_FRESH_MS;
}

function readCache<T>(key: PublicDataKey): CacheEntry<T> | null {
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + key);
    return raw ? (JSON.parse(raw) as CacheEntry<T>) : null;
  } catch {
    return null;
  }
}

function writeCache<T>(key: PublicDataKey, value: T): void {
  try {
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ at: Date.now(), value }));
  } catch {
    // quota exceeded / private mode — the snapshot still covers us
  }
}

/** Drops cached API values (after the admin saves, so the site shows the change at once). */
export function clearPublicDataCache(): void {
  try {
    for (let i = localStorage.length - 1; i >= 0; i -= 1) {
      const storageKey = localStorage.key(i);
      if (storageKey?.startsWith(CACHE_PREFIX)) localStorage.removeItem(storageKey);
    }
  } catch {
    // ignore
  }
}

export async function fetchWithRateLimitRetry<T>(fetcher: () => Promise<T>): Promise<T> {
  try {
    return await fetcher();
  } catch (error) {
    if (error instanceof ApiError && error.status === 429) {
      await new Promise((resolve) => setTimeout(resolve, RATE_LIMIT_RETRY_MS));
      return fetcher();
    }
    throw error;
  }
}

export interface PublicDataOptions {
  /** Admin panel: always read the live API (no browser cache, no snapshot shortcut). */
  live?: boolean;
}

/**
 * Resolves one CMS collection. Returns `fallback` only when no source at all has data,
 * so callers keep their existing "use built-in catalog" behaviour for that case.
 */
export async function loadPublicData<T>(
  key: PublicDataKey,
  fetcher: () => Promise<T>,
  fallback: T,
  options: PublicDataOptions = {},
): Promise<T> {
  const cached = options.live ? null : readCache<T>(key);
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) {
    return cached.value;
  }

  const snapshot = await loadSiteSnapshot();
  const snapshotValue = snapshot?.data[key] as T | undefined;
  if (!options.live && snapshotValue !== undefined && isSnapshotFresh(snapshot)) {
    return snapshotValue;
  }

  try {
    const value = await fetchWithRateLimitRetry(fetcher);
    if (!options.live) writeCache(key, value);
    return value;
  } catch (error) {
    console.warn(`[public-data] ${key}: live API failed, using last known data`, error);
    if (cached) return cached.value;
    if (snapshotValue !== undefined) return snapshotValue;
    return fallback;
  }
}
