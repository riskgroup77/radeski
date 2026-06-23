import { useEffect, useState } from 'react';
import {
  CLIENT_COUNT_UPDATED_EVENT,
  getClientCount,
} from '../utils/clientCount';

export function useClientCount(): number {
  const [count, setCount] = useState(() => getClientCount());

  useEffect(() => {
    const sync = () => setCount(getClientCount());
    const onUpdated = (event: Event) => {
      const detail = (event as CustomEvent<number>).detail;
      setCount(typeof detail === 'number' ? detail : getClientCount());
    };

    window.addEventListener(CLIENT_COUNT_UPDATED_EVENT, onUpdated);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(CLIENT_COUNT_UPDATED_EVENT, onUpdated);
      window.removeEventListener('storage', sync);
    };
  }, []);

  return count;
}
