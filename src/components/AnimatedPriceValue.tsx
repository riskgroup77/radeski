import { useEffect, useRef, useState } from 'react';
import type { PriceItem } from '../types';
import { formatPriceValue, parsePriceValue } from '../api/mappers';
import { useCountUp } from '../hooks/useCountUp';

interface AnimatedPriceValueProps {
  item: PriceItem;
  freeLabel: string;
  className?: string;
  /** Stagger delay in ms when row enters view */
  delay?: number;
}

function resolveNumericTarget(item: PriceItem): number {
  if (typeof item.priceValue === 'number') return item.priceValue;
  return parsePriceValue(item.price);
}

export default function AnimatedPriceValue({
  item,
  freeLabel,
  className = '',
  delay = 0,
}: AnimatedPriceValueProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const numericTarget = resolveNumericTarget(item);
  const isFree = numericTarget === 0 && item.priceValue === 0;
  const hasNumericPrice = numericTarget > 0;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '40px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [item.id]);

  const animatedValue = useCountUp(numericTarget, {
    enabled: isVisible && hasNumericPrice,
    delay,
    duration: Math.min(1400, 850 + Math.log10(Math.max(numericTarget, 10)) * 120),
  });

  if (isFree) {
    return (
      <span ref={ref} className={className}>
        {freeLabel}
      </span>
    );
  }

  if (!hasNumericPrice) {
    return (
      <span ref={ref} className={className}>
        {item.price}
      </span>
    );
  }

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {formatPriceValue(animatedValue)}
    </span>
  );
}
