import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, GraduationCap } from 'lucide-react';
import type { Locale } from '../types';
import { DICTIONARY } from '../data';
import { pagePath } from '../routing/paths';

interface ObrazovaniyaPageProps {
  locale: Locale;
}

export default function ObrazovaniyaPage({ locale }: ObrazovaniyaPageProps) {
  const d = DICTIONARY[locale];

  return (
    <section
      id="obrazovaniya-page"
      className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-gradient-to-br from-brand-offwhite via-[#f7f9fc] to-brand-gold-light/15 px-4 py-16 sm:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="w-full max-w-lg text-center"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-gold/25 bg-brand-gold-light/15 shadow-sm">
          <GraduationCap className="h-8 w-8 text-brand-gold" strokeWidth={1.75} />
        </div>

        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
          {d.navObrazovaniya}
        </p>

        <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-brand-text-primary sm:text-3xl">
          {d.obrazovaniyaComingSoonTitle}
        </h1>

        <p className="mx-auto mb-8 max-w-md text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">
          {d.obrazovaniyaComingSoonDesc}
        </p>

        <Link
          to={pagePath(locale, 'home')}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-6 py-3.5 text-sm font-bold text-white no-underline shadow-[0_4px_20px_-6px_rgba(196,154,79,0.45)] transition-colors hover:bg-brand-gold-dark"
        >
          <ArrowLeft className="h-4 w-4" />
          {d.backToHome}
        </Link>
      </motion.div>
    </section>
  );
}
