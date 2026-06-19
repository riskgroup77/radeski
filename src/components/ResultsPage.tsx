import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowLeftRight, CalendarClock } from 'lucide-react';
import type { Locale } from '../types';
import { DICTIONARY } from '../data';
import { TREATMENT_RESULTS } from '../data/sitePagesContent';
import MediaImage from './MediaImage';

interface ResultsPageProps {
  locale: Locale;
  dictionary?: Record<string, string>;
  onOpenAppointment?: () => void;
}

export default function ResultsPage({ locale, dictionary, onOpenAppointment }: ResultsPageProps) {
  const d = dictionary || DICTIONARY[locale];
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const serviceFilters = [
    { id: 'all', label: locale === 'uz' ? 'Barchasi' : locale === 'ru' ? 'Все' : 'All' },
    ...Array.from(new Set(TREATMENT_RESULTS.map((item) => item.service[locale]))).map((label) => ({
      id: label,
      label,
    })),
  ];

  const filteredResults =
    activeFilter === 'all'
      ? TREATMENT_RESULTS
      : TREATMENT_RESULTS.filter((item) => item.service[locale] === activeFilter);

  return (
    <section id="results-page" className="py-16 bg-brand-white min-h-screen">
      <div className="site-container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-gold tracking-widest uppercase py-1 px-3 bg-brand-gold-light/10 rounded-full">
            {d.navResults}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text-primary mt-3 tracking-tight">
            {d.resultsTitle}
          </h1>
          <p className="text-brand-text-muted mt-4 text-sm sm:text-base leading-relaxed">
            {d.resultsDesc}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {serviceFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-brand-gold text-white shadow-sm'
                  : 'bg-brand-offwhite border border-brand-sectiongray text-brand-text-secondary hover:border-brand-gold/40'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {filteredResults.map((result, index) => (
            <motion.article
              key={result.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-brand-white rounded-2xl border border-brand-sectiongray overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="grid grid-cols-2 gap-0.5 bg-brand-sectiongray">
                <div className="relative aspect-[4/5] bg-brand-offwhite">
                  <MediaImage
                    src={result.beforeImage}
                    alt={`${result.title[locale]} — before`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-black/55 text-white">
                    {locale === 'uz' ? 'Oldin' : locale === 'ru' ? 'До' : 'Before'}
                  </span>
                </div>
                <div className="relative aspect-[4/5] bg-brand-offwhite">
                  <MediaImage
                    src={result.afterImage}
                    alt={`${result.title[locale]} — after`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-brand-gold/90 text-white">
                    {locale === 'uz' ? 'Keyin' : locale === 'ru' ? 'После' : 'After'}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wide">
                    {result.service[locale]}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-brand-text-muted font-mono">
                    <CalendarClock className="w-3 h-3" />
                    {result.sessions[locale]}
                  </span>
                </div>
                <h2 className="font-extrabold text-brand-text-primary text-base leading-snug flex items-start gap-2">
                  <ArrowLeftRight className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  {result.title[locale]}
                </h2>
                <p className="text-brand-text-muted text-sm mt-2 leading-relaxed font-light">
                  {result.description[locale]}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 bg-gradient-to-r from-brand-dark-navy to-brand-deep-blue rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden">
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-gold/15 rounded-full blur-2xl" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <Sparkles className="w-8 h-8 text-brand-gold mx-auto mb-3" />
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {locale === 'uz'
                ? 'Siz ham shunday natijaga erishishingiz mumkin'
                : locale === 'ru'
                  ? 'Вы тоже можете получить такой результат'
                  : 'You can achieve similar results too'}
            </h3>
            <p className="text-slate-300 text-sm mt-3 leading-relaxed">
              {locale === 'uz'
                ? 'Har bir holat individual. Aniq prognoz va davolash rejasi shifokor ko‘rigida belgilanadi.'
                : locale === 'ru'
                  ? 'Каждый случай индивидуален. Точный прогноз и план лечения определяются на приёме.'
                  : 'Every case is individual. Exact prognosis and treatment plan are set at consultation.'}
            </p>
            {onOpenAppointment && (
              <button
                type="button"
                onClick={onOpenAppointment}
                className="mt-6 px-8 py-3.5 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                {d.appointmentBtn}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
