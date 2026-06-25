import { useEffect, useState } from 'react';
import {
  CLIENT_COUNT_UPDATED_EVENT,
  fetchClientCountFromApi,
  getCachedClientCount,
} from '../utils/clientCount';

export function useClientCount(initialCount?: number): number {
  const [count, setCount] = useState(() => initialCount ?? getCachedClientCount());

  useEffect(() => {
    if (initialCount !== undefined) {
      setCount(initialCount);
    }
  }, [initialCount]);

  useEffect(() => {
    const onUpdated = (event: Event) => {
      const detail = (event as CustomEvent<number>).detail;
      if (typeof detail === 'number') setCount(detail);
    };
    window.addEventListener(CLIENT_COUNT_UPDATED_EVENT, onUpdated);
    return () => window.removeEventListener(CLIENT_COUNT_UPDATED_EVENT, onUpdated);
  }, []);

  useEffect(() => {
    if (initialCount !== undefined) return;
    void fetchClientCountFromApi()
      .then(setCount)
      .catch(() => setCount(getCachedClientCount()));
  }, [initialCount]);

  return count;
}
