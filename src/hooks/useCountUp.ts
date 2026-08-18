import { useEffect, useRef, useState } from 'react';

function easeOutCubic(progress: number): number {
  return 1 - (1 - progress) ** 3;
}

type UseCountUpOptions = {
  duration?: number;
  delay?: number;
  enabled?: boolean;
};

export function useCountUp(target: number, options: UseCountUpOptions = {}): number {
  const { duration = 1100, delay = 0, enabled = true } = options;
  const [value, setValue] = useState(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    if (!enabled) {
      setValue(0);
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    setValue(0);
    const startAt = performance.now() + delay;

    const tick = (now: number) => {
      if (now < startAt) {
        frameRef.current = requestAnimationFrame(tick);
        return;
      }

      const progress = Math.min((now - startAt) / duration, 1);
      setValue(Math.round(target * easeOutCubic(progress)));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration, delay, enabled]);

  return value;
}
