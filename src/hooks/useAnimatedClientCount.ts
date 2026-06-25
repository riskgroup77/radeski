import { useEffect, useState } from 'react';
import { useClientCount } from './useClientCount';

/**
 * Mijozlar sonini ko'rsatadi; qabulga yozilish bosilganda +1 oshadi.
 */
export function useAnimatedClientCount(apiCount?: number): number {
  const liveCount = useClientCount(apiCount);
  const [displayCount, setDisplayCount] = useState(() => liveCount);

  useEffect(() => {
    setDisplayCount(liveCount);
  }, [liveCount]);

  return displayCount;
}
