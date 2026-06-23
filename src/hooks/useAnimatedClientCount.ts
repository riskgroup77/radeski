import { useEffect, useState } from 'react';
import {
  CLIENT_COUNT_UPDATED_EVENT,
  incrementClientCount,
} from '../utils/clientCount';
import { useClientCount } from './useClientCount';

const FLIP_DELAY_MS = 800;

function getRefreshIncrementKey(): string {
  return `radeski_client_incr_${Math.round(performance.timeOrigin)}`;
}

/**
 * Sahifa ochilganda avval joriy son, ~800ms dan keyin +1 (flip animatsiya).
 * Qabul bosilganda ham liveCount orqali yangilanadi.
 */
export function useAnimatedClientCount(): number {
  const liveCount = useClientCount();
  const [displayCount, setDisplayCount] = useState(() => liveCount);

  useEffect(() => {
    setDisplayCount(liveCount);
  }, [liveCount]);

  useEffect(() => {
    const loadKey = getRefreshIncrementKey();
    if (sessionStorage.getItem(loadKey) === 'done') {
      return;
    }

    let timer: number | undefined = window.setTimeout(() => {
      timer = undefined;
      if (sessionStorage.getItem(loadKey) === 'done') {
        return;
      }
      sessionStorage.setItem(loadKey, 'done');
      incrementClientCount();
    }, FLIP_DELAY_MS);

    const cancelScheduledIncrement = () => {
      if (timer !== undefined) {
        window.clearTimeout(timer);
        timer = undefined;
      }
      sessionStorage.setItem(loadKey, 'done');
    };

    window.addEventListener(CLIENT_COUNT_UPDATED_EVENT, cancelScheduledIncrement);

    return () => {
      if (timer !== undefined) {
        window.clearTimeout(timer);
      }
      window.removeEventListener(CLIENT_COUNT_UPDATED_EVENT, cancelScheduledIncrement);
    };
  }, []);

  return displayCount;
}
