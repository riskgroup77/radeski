/** Extract numeric sequence from video src or id (e.g. /videos/41.mp4 → 41). */
export function extractClinicVideoNumber(video: { id?: string; src?: string }): number {
  const srcMatch = String(video.src || '').match(/(?:^|\/)(\d+)\.mp4(?:\?|$)/i);
  if (srcMatch) return Number(srcMatch[1]);
  const idMatch = String(video.id || '').match(/(\d+)(?:\D*)$/);
  if (idMatch) return Number(idMatch[1]);
  return 0;
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

export function mapApiClinicVideos<T extends { isActive?: boolean; sortOrder?: number; id?: string; src?: string }>(
  items: T[],
): T[] {
  return sortClinicVideosNewestFirst(items.filter((item) => item.isActive !== false));
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
