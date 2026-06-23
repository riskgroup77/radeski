import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HomeCarouselProps<T> {
  items: T[];
  visibleCount: number;
  autoPlayMs?: number;
  getKey: (item: T) => string;
  renderItem: (item: T) => ReactNode;
  gridClassName?: string;
  gridGapClassName?: string;
  ariaLabel?: string;
  arrowsInside?: boolean;
  className?: string;
  dotsClassName?: string;
}

function getVisibleItems<T>(items: T[], start: number, count: number): T[] {
  if (items.length === 0) return [];
  const visible = Math.min(count, items.length);
  return Array.from({ length: visible }, (_, index) => items[(start + index) % items.length]);
}

export default function HomeCarousel<T>({
  items,
  visibleCount,
  autoPlayMs = 5000,
  getKey,
  renderItem,
  gridClassName = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  gridGapClassName = 'gap-6',
  ariaLabel = 'Carousel',
  arrowsInside = false,
  className = '',
  dotsClassName = 'mt-8',
}: HomeCarouselProps<T>) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const canRotate = items.length > visibleCount;

  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    setIndex(0);
  }, [items.length]);

  useEffect(() => {
    if (!canRotate || paused || autoPlayMs <= 0) return;
    const timer = window.setInterval(goNext, autoPlayMs);
    return () => window.clearInterval(timer);
  }, [canRotate, paused, autoPlayMs, goNext]);

  if (items.length === 0) return null;

  const visibleItems = getVisibleItems(items, index, visibleCount);

  const arrowBase =
    'absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-brand-white border border-brand-sectiongray shadow-md text-brand-gold hover:bg-brand-gold hover:text-white transition-colors cursor-pointer flex items-center justify-center';
  const prevArrowClass = arrowsInside
    ? `${arrowBase} left-3 sm:left-4`
    : `${arrowBase} left-0 -translate-x-1/2 sm:-translate-x-full hidden sm:flex`;
  const nextArrowClass = arrowsInside
    ? `${arrowBase} right-3 sm:right-4`
    : `${arrowBase} right-0 translate-x-1/2 sm:translate-x-full hidden sm:flex`;

  return (
    <div
      className={`relative ${className}`}
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className={`grid flex-1 auto-rows-fr ${gridGapClassName} ${gridClassName}`}>
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item, itemIndex) => (
            <motion.div
              key={`${getKey(item)}-${index}-${itemIndex}`}
              className="h-full"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {renderItem(item)}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {canRotate && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className={prevArrowClass}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className={nextArrowClass}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className={`flex justify-center gap-2 shrink-0 ${dotsClassName}`}>
            {items.map((item, dotIndex) => (
              <button
                key={getKey(item)}
                type="button"
                onClick={() => setIndex(dotIndex)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  dotIndex === index ? 'w-6 bg-brand-gold' : 'w-2 bg-brand-sectiongray hover:bg-brand-gold/40'
                }`}
                aria-label={`Go to slide ${dotIndex + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
