import { CLINIC_RATINGS } from '../data';

export function getPlatformLogo(platform: string): string {
  const exact = CLINIC_RATINGS.find(
    (item) => item.platform.toLowerCase() === platform.toLowerCase(),
  );
  if (exact?.logo) return exact.logo;

  const key = platform.toLowerCase();
  if (key.includes('yandex')) return '⭐';
  if (key.includes('google')) return '📍';
  if (key.includes('2gis')) return '🗺️';
  return '★';
}
