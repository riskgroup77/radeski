import { Users } from 'lucide-react';
import { motion } from 'motion/react';
import type { Locale } from '../types';
import { useClientCount } from '../hooks/useClientCount';

interface ClientCountBarProps {
  locale: Locale;
}

function formatCount(count: number, locale: Locale): string {
  const localeTag = locale === 'uz' ? 'uz-UZ' : locale === 'ru' ? 'ru-RU' : 'en-US';
  return count.toLocaleString(localeTag);
}

export default function ClientCountBar({ locale }: ClientCountBarProps) {
  const count = useClientCount();

  const label =
    locale === 'uz'
      ? 'Mijozlar soni'
      : locale === 'ru'
        ? 'Количество клиентов'
        : 'Clients served';

  return (
    <div className="bg-gradient-to-r from-brand-dark-navy via-brand-deep-blue to-brand-dark-navy border-b border-brand-gold/20">
      <div className="site-container py-2.5 sm:py-3">
        <div className="flex items-center justify-center gap-2 sm:gap-3 text-center">
          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold shrink-0" aria-hidden="true" />
          <span className="text-[11px] sm:text-sm text-slate-300 font-medium tracking-wide">
            {label}:
          </span>
          <motion.span
            key={count}
            initial={{ opacity: 0.6, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="text-base sm:text-lg font-black text-brand-gold tabular-nums tracking-tight"
          >
            {formatCount(count, locale)}
          </motion.span>
        </div>
      </div>
    </div>
  );
}
