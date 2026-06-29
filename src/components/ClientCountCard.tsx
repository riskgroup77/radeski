import { useEffect, useRef, useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import type { Locale } from '../types';
import { useAnimatedClientCount } from '../hooks/useAnimatedClientCount';

interface ClientCountCardProps {
  locale: Locale;
  compact?: boolean;
  variant?: 'default' | 'hero';
  apiCount?: number;
}

type CountTheme = 'light' | 'hero';

function formatCount(count: number): string {
  return String(Math.max(0, count));
}

function getCopy(locale: Locale) {
  if (locale === 'uz') {
    return {
      label: 'Mijozlar soni',
      hint: 'Bizga ishonadigan bemorlar',
    };
  }
  if (locale === 'ru') {
    return {
      label: 'Количество клиентов',
      hint: 'Пациенты, которые нам доверяют',
    };
  }
  return {
    label: 'Clients served',
    hint: 'Patients who trust us',
  };
}

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  const previous = ref.current;
  ref.current = value;
  return previous;
}

function padCountStrings(previous: string, current: string): [string, string] {
  const width = Math.max(previous.length, current.length);
  return [previous.padStart(width, '0'), current.padStart(width, '0')];
}

function digitPrev(char: string): string {
  const value = Number.parseInt(char, 10);
  if (Number.isNaN(value)) return char;
  return String((value + 9) % 10);
}

function digitNext(char: string): string {
  const value = Number.parseInt(char, 10);
  if (Number.isNaN(value)) return char;
  return String((value + 1) % 10);
}

function digitClass(theme: CountTheme): string {
  return theme === 'hero'
    ? 'font-black text-white leading-none tabular-nums drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]'
    : 'font-black text-brand-dark-navy leading-none tabular-nums';
}

function StaticDigit({ char, theme }: { char: string; theme: CountTheme }) {
  return <span className={`inline-block ${digitClass(theme)}`}>{char}</span>;
}

function ReelSlot({
  digit,
  variant,
  cls,
}: {
  digit: string;
  variant: 'top' | 'center' | 'bottom';
  cls: string;
}) {
  const variantClass =
    variant === 'top'
      ? 'opacity-80 [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.25)_30%,rgba(0,0,0,0.92)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.25)_30%,rgba(0,0,0,0.92)_100%)]'
      : variant === 'bottom'
        ? 'opacity-80 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.35)_55%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.35)_55%,transparent_100%)]'
        : 'opacity-100';

  return (
    <span
      className={`${cls} h-[1em] w-full flex items-center justify-center ${variantClass}`}
      style={
        variant === 'center'
          ? undefined
          : {
              maskSize: '100% 100%',
              WebkitMaskSize: '100% 100%',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
            }
      }
    >
      {digit}
    </span>
  );
}

function ReelDigit({
  value,
  prevValue,
  shouldAnimate,
  theme,
  flipDelayMs = 0,
}: {
  value: string;
  prevValue: string;
  shouldAnimate: boolean;
  theme: CountTheme;
  flipDelayMs?: number;
}) {
  const [center, setCenter] = useState(value);
  const [scrolling, setScrolling] = useState(false);
  const cls = digitClass(theme);

  useEffect(() => {
    if (!shouldAnimate || value === prevValue) {
      setCenter(value);
      setScrolling(false);
      return;
    }

    let delayTimer: number | undefined;
    let finishTimer: number | undefined;

    const startScroll = () => {
      setScrolling(true);
      finishTimer = window.setTimeout(() => {
        setCenter(value);
        setScrolling(false);
      }, 640);
    };

    if (flipDelayMs > 0) {
      delayTimer = window.setTimeout(startScroll, flipDelayMs);
    } else {
      startScroll();
    }

    return () => {
      if (delayTimer !== undefined) window.clearTimeout(delayTimer);
      if (finishTimer !== undefined) window.clearTimeout(finishTimer);
    };
  }, [value, prevValue, shouldAnimate, flipDelayMs]);

  const topDigit = digitPrev(center);
  const bottomDigit = scrolling ? value : digitNext(center);

  return (
    <span className="inline-block align-middle overflow-visible h-[1em] w-[0.64em] relative">
      <motion.span
        className="absolute inset-x-0 top-0 flex flex-col items-center will-change-transform"
        animate={{ y: scrolling ? '-2em' : '-1em' }}
        transition={{ duration: 0.64, ease: [0.42, 0.04, 0.18, 1] }}
      >
        <ReelSlot digit={topDigit} variant="top" cls={cls} />
        <ReelSlot digit={center} variant="center" cls={cls} />
        <ReelSlot digit={bottomDigit} variant="bottom" cls={cls} />
        {scrolling && <ReelSlot digit={digitNext(value)} variant="bottom" cls={cls} />}
      </motion.span>
    </span>
  );
}

function AnimatedClientCount({
  count,
  size,
  theme = 'light',
  align = 'start',
}: {
  count: number;
  size: 'compact' | 'default' | 'hero';
  theme?: CountTheme;
  align?: 'start' | 'end';
}) {
  const previousCount = usePrevious(count);
  const formatted = formatCount(count);
  const previousFormatted =
    previousCount !== undefined ? formatCount(previousCount) : formatted;
  const [alignedPrevious, alignedCurrent] = padCountStrings(previousFormatted, formatted);
  const shouldAnimate = previousCount !== undefined && count !== previousCount;

  const chars = alignedCurrent.split('');
  const prevChars = alignedPrevious.split('');
  const lastIndex = chars.length - 1;

  if (size === 'hero' && theme === 'hero') {
    const staticChars = chars.slice(0, lastIndex);
    const lastChar = chars[lastIndex] ?? '0';
    const lastPrevChar = prevChars[lastIndex] ?? prevChars[prevChars.length - 1] ?? lastChar;
    const lastShouldFlip = shouldAnimate && lastChar !== lastPrevChar;

    return (
      <span
        className={`inline-flex items-center leading-none gap-[0.03em] ${
          align === 'end' ? 'justify-end' : 'justify-start'
        }`}
        aria-label={formatted}
      >
        {staticChars.map((char, index) => (
          <StaticDigit key={`static-${index}`} char={char} theme={theme} />
        ))}
        <ReelDigit
          value={lastChar}
          prevValue={lastPrevChar}
          shouldAnimate={lastShouldFlip}
          theme={theme}
        />
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-end leading-none w-full ${
        align === 'end' ? 'justify-end' : 'justify-start'
      } ${size === 'hero' ? 'mt-0' : 'mt-1'}`}
    >
      <span
        className={`inline-flex items-end gap-[0.06em] ${digitClass(theme)}`}
        aria-label={formatted}
      >
        {formatted}
      </span>
    </span>
  );
}

export default function ClientCountCard({
  locale,
  compact = false,
  variant = 'default',
  apiCount,
}: ClientCountCardProps) {
  const count = useAnimatedClientCount(apiCount);
  const copy = getCopy(locale);
  const size: 'compact' | 'default' | 'hero' = compact ? 'compact' : variant === 'hero' ? 'hero' : 'default';
  const isHero = variant === 'hero';

  if (isHero) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="w-full lg:w-auto lg:min-w-[min(100%,480px)] xl:min-w-[min(100%,560px)]"
        aria-live="polite"
      >
        <div className="flex flex-col items-center lg:items-end gap-2.5 sm:gap-3 lg:gap-4 w-full rounded-2xl border border-white/20 bg-black/25 backdrop-blur-md px-4 py-4 sm:px-5 sm:py-5 lg:rounded-none lg:border-0 lg:bg-transparent lg:backdrop-blur-none lg:px-0 lg:py-0">
          <p className="font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-white/85 text-[11px] sm:text-xs md:text-sm shrink-0 text-center lg:text-right w-full">
            {copy.label}
          </p>

          {/* Mobile / tablet: static count — fits narrow screens without clipping */}
          <div className="lg:hidden w-full flex justify-center">
            <p
              className="font-black text-white leading-none tabular-nums drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] text-[clamp(2.75rem,16vw,4.75rem)]"
              aria-label={formatCount(count)}
            >
              {formatCount(count)}
            </p>
          </div>

          {/* Desktop: reel animation */}
          <div className="hidden lg:flex text-[clamp(5rem,7vw,8rem)] leading-none py-[0.35em] w-full justify-end overflow-visible">
            <AnimatedClientCount count={count} size="hero" theme="hero" align="end" />
          </div>

          {!compact && (
            <p className="text-white/70 font-medium flex items-center justify-center lg:justify-end gap-1.5 text-[11px] sm:text-xs md:text-sm shrink-0 text-center lg:text-right w-full">
              <TrendingUp className="text-brand-gold shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
              <span>{copy.hint}</span>
            </p>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.55 }}
      className={`relative overflow-hidden rounded-2xl border border-white/30 bg-white/95 backdrop-blur-md shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)] ${
        compact ? 'p-3.5 sm:p-4' : 'p-4 sm:p-5 min-w-[200px] sm:min-w-[240px]'
      }`}
      aria-live="polite"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold" />

      <div className="min-w-0">
        <p className="font-bold uppercase tracking-[0.14em] text-brand-text-muted text-[10px] sm:text-[11px]">
          {copy.label}
        </p>
        <AnimatedClientCount count={count} size={size} theme="light" />
        {!compact && (
          <p className="mt-1.5 text-brand-text-muted font-medium flex items-center gap-1 text-[10px] sm:text-[11px]">
            <TrendingUp className="text-brand-gold shrink-0 w-3 h-3" aria-hidden="true" />
            <span className="line-clamp-1">{copy.hint}</span>
          </p>
        )}
      </div>
    </motion.div>
  );
}
