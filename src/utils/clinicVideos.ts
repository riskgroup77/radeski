import type { ClinicVideo } from '../data/sitePagesContent';

/** Extract numeric sequence from video src or id (e.g. /videos/41.mp4 → 41). */
export function extractClinicVideoNumber(video: { id?: string; src?: string }): number {
  const srcMatch = String(video.src || '').match(/(?:^|\/)(\d+)\.mp4(?:\?|$)/i);
  if (srcMatch) return Number(srcMatch[1]);

  const id = String(video.id || '');
  const idMatch = id.match(/(?:clinic-video-|video-)(\d+)$/i);
  if (idMatch) return Number(idMatch[1]);

  return 0;
}

function normalizeVideoTextKey(value?: string): string {
  return String(value || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Same title + duration = same clip (e.g. re-uploaded API rows). */
function videoContentFingerprint(video: ClinicVideo): string {
  const title = normalizeVideoTextKey(video.title?.uz || video.title?.ru || video.title?.en);
  const duration = normalizeVideoTextKey(video.duration);
  return `${title}|${duration}`;
}

function normalizeVideoSrcKey(src?: string): string {
  if (!src) return '';
  try {
    const pathname = src.includes('://') ? new URL(src).pathname : src;
    return pathname.split('/').pop()?.toLowerCase() || '';
  } catch {
    return src.split('/').pop()?.toLowerCase() || '';
  }
}

/** Bir xil video (id, raqam, src yoki kontent) ikki marta ko'rinmasin. */
export function dedupeClinicVideos(videos: ClinicVideo[]): ClinicVideo[] {
  const seenIds = new Set<string>();
  const seenNumbers = new Set<number>();
  const seenSrcKeys = new Set<string>();
  const seenContentKeys = new Set<string>();
  const result: ClinicVideo[] = [];

  for (const video of videos) {
    if (video.id && seenIds.has(video.id)) continue;

    const num = extractClinicVideoNumber(video);
    if (num > 0 && seenNumbers.has(num)) continue;

    const srcKey = normalizeVideoSrcKey(video.src);
    if (srcKey && seenSrcKeys.has(srcKey)) continue;

    const contentKey = videoContentFingerprint(video);
    if (contentKey && contentKey !== '|' && seenContentKeys.has(contentKey)) continue;

    if (video.id) seenIds.add(video.id);
    if (num > 0) seenNumbers.add(num);
    if (srcKey) seenSrcKeys.add(srcKey);
    if (contentKey && contentKey !== '|') seenContentKeys.add(contentKey);
    result.push(video);
  }

  return result;
}

/**
 * Public videos list: lower sortOrder first.
 * On ties (or missing order), newer video number comes first.
 */
export function sortClinicVideosNewestFirst<T extends { sortOrder?: number; id?: string; src?: string }>(
  items: T[],
): T[] {
  return [...items].sort((a, b) => {
    const orderA = a.sortOrder;
    const orderB = b.sortOrder;
    const hasA = orderA !== undefined && orderA !== null && Number.isFinite(Number(orderA));
    const hasB = orderB !== undefined && orderB !== null && Number.isFinite(Number(orderB));

    if (hasA && hasB && Number(orderA) !== Number(orderB)) {
      return Number(orderA) - Number(orderB);
    }
    if (hasA && !hasB) return -1;
    if (!hasA && hasB) return 1;

    return extractClinicVideoNumber(b) - extractClinicVideoNumber(a);
  });
}

export function formatVideoDuration(seconds: number): string {
  const total = Math.max(0, Math.round(seconds));
  const minutes = Math.floor(total / 60);
  const remainder = total % 60;
  return `${minutes}:${String(remainder).padStart(2, '0')}`;
}

export function mapApiClinicVideos(items: ClinicVideo[]): ClinicVideo[] {
  return sortClinicVideosNewestFirst(
    dedupeClinicVideos(items.filter((item) => item.isActive !== false)),
  );
}

/** Assign unique sortOrder so highest video number = 1 (newest first). */
export function assignNewestFirstSortOrders<T extends { id?: string; src?: string; sortOrder?: number }>(
  items: T[],
): T[] {
  const ranked = [...items].sort(
    (a, b) => extractClinicVideoNumber(b) - extractClinicVideoNumber(a),
  );
  const orderByKey = new Map<T, number>();
  ranked.forEach((item, index) => {
    orderByKey.set(item, index + 1);
  });
  return items.map((item) => ({
    ...item,
    sortOrder: orderByKey.get(item) ?? item.sortOrder,
  }));
}
