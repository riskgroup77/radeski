import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';
import type { Locale } from '../types';
import { DICTIONARY } from '../data';
import {
  getInstitutionalNavSection,
  institutionalTopicHref,
  type InstitutionalNavId,
} from '../data/institutionalNavContent';
import { pagePath } from '../routing/paths';

interface InstitutionalSectionPageProps {
  locale: Locale;
  sectionId: InstitutionalNavId;
  icon: ReactNode;
}

export default function InstitutionalSectionPage({
  locale,
  sectionId,
  icon,
}: InstitutionalSectionPageProps) {
  const d = DICTIONARY[locale];
  const section = getInstitutionalNavSection(sectionId);
  const comingSoonTitle =
    locale === 'uz'
      ? "Bo'lim to'ldirilmoqda"
      : locale === 'ru'
        ? 'Раздел наполняется'
        : 'Section in progress';
  const comingSoonDesc =
    locale === 'uz'
      ? "Rektor topshirig'i bo'yicha ushbu yo'nalishlar alohida tayyorlanadi. Quyida mavzular ro'yxati — tez orada har biri uchun alohida sahifa ochiladi."
      : locale === 'ru'
        ? 'По поручению ректора темы этого раздела готовятся отдельно. Ниже — список направлений; для каждого скоро откроется отдельная страница.'
        : 'Per the rector’s directive, topics in this section are being prepared separately. Below is the list of areas — each will soon have its own page.';

  return (
    <section
      id={`${sectionId}-page`}
      className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-brand-offwhite via-[#f7f9fc] to-brand-gold-light/10 pb-16 pt-10 sm:pt-14"
    >
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-8 text-center sm:mb-10">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-gold/25 bg-brand-gold-light/15 shadow-sm">
              {icon}
            </div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
              {section.label[locale]}
            </p>
            <h1 className="mb-3 text-2xl font-extrabold tracking-tight text-brand-text-primary sm:text-3xl">
              {section.dropdownTitle[locale]}
            </h1>
            <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">
              {section.dropdownHint[locale]}
            </p>
          </div>

          {section.topics.length > 0 ? (
            <div className="mb-8 grid gap-2 sm:grid-cols-2">
              {section.topics.map((topic) => (
                <Link
                  key={topic.id}
                  id={topic.hash ?? topic.id}
                  to={institutionalTopicHref(locale, section, topic)}
                  className="group flex items-center justify-between rounded-xl border border-slate-150 bg-white px-4 py-3.5 text-sm font-medium text-brand-text-secondary no-underline shadow-sm transition-all hover:border-brand-gold/30 hover:bg-brand-gold-light/5 hover:text-brand-text-primary"
                >
                  <span>{topic.label[locale]}</span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-brand-gold/70 transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          ) : null}

          <div className="rounded-2xl border border-brand-gold/20 bg-white/80 px-5 py-5 text-center shadow-sm sm:px-8">
            <h2 className="mb-2 text-lg font-bold text-brand-text-primary">{comingSoonTitle}</h2>
            <p className="mx-auto mb-6 max-w-xl text-sm font-light leading-relaxed text-brand-text-secondary">
              {comingSoonDesc}
            </p>
            <Link
              to={pagePath(locale, 'home')}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-6 py-3.5 text-sm font-bold text-white no-underline shadow-[0_4px_20px_-6px_rgba(196,154,79,0.45)] transition-colors hover:bg-brand-gold-dark"
            >
              <ArrowLeft className="h-4 w-4" />
              {d.backToHome}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
