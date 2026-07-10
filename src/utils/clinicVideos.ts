export function formatVideoDuration(seconds: number): string {
  const total = Math.max(0, Math.round(seconds));
  const minutes = Math.floor(total / 60);
  const remainder = total % 60;
  return `${minutes}:${String(remainder).padStart(2, '0')}`;
}

export function mapApiClinicVideos<T extends { isActive?: boolean; sortOrder?: number }>(
  items: T[],
): T[] {
  return items
    .filter((item) => item.isActive !== false)
    .sort((a, b) => (a.sortOrder ?? 999) - (b.sortOrder ?? 999));
}
