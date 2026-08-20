import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Smooth-scroll to `location.hash` target after route paint (e.g. #aloqa). */
export function useHashScroll(delayMs = 120) {
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace('#', '').trim();
    if (!id) return;

    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, delayMs);

    return () => window.clearTimeout(timer);
  }, [location.hash, location.pathname, delayMs]);
}
