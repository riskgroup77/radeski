import { useState, useEffect, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowLeftRight, CalendarClock, X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Locale } from '../types';
import { DICTIONARY } from '../data';
import type { TreatmentResult } from '../data/sitePagesContent';
import MediaImage from './MediaImage';

type ResultGalleryItem = { src: string; alt: string; label: string };

function buildResultGallery(result: TreatmentResult, locale: Locale): ResultGalleryItem[] {
  const title = result.title[locale];
  const beforeLabel = locale === 'uz' ? 'Oldin' : locale === 'ru' ? 'До' : 'Before';
  const afterLabel = locale === 'uz' ? 'Keyin' : locale === 'ru' ? 'После' : 'After';
  const stepLabel = locale === 'uz' ? 'bosqich' : locale === 'ru' ? 'этап' : 'stage';
  const combinedLabel =
    locale === 'uz' ? 'Oldin · Keyin' : locale === 'ru' ? 'До · После' : 'Before · After';

  if (result.comparisonImage) {
    return [{ src: result.comparisonImage, alt: `${title} — ${combinedLabel}`, label: combinedLabel }];
  }

  const items: ResultGalleryItem[] = [];
  if (result.beforeImage) {
    items.push({ src: result.beforeImage, alt: `${title} — ${beforeLabel}`, label: beforeLabel });
  }
  result.journeyImages?.forEach((src, index) => {
    items.push({
      src,
      alt: `${title} — ${stepLabel} ${index + 2}`,
      label: `${stepLabel} ${index + 2}`,
    });
  });
  if (result.afterImage) {
    items.push({ src: result.afterImage, alt: `${title} — ${afterLabel}`, label: afterLabel });
  }
  return items;
}

interface ResultsPageProps {
  locale: Locale;
  dictionary?: Record<string, string>;
  results: TreatmentResult[];
  loading?: boolean;
  onOpenAppointment?: () => void;
}

export default function ResultsPage({ locale, dictionary, results, loading = false, onOpenAppointment }: ResultsPageProps) {
  const d = dictionary || DICTIONARY[locale];
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [expandedGallery, setExpandedGallery] = useState<{
    items: ResultGalleryItem[];
    index: number;
    title: string;
  } | null>(null);

  const expandedItem = expandedGallery ? expandedGallery.items[expandedGallery.index] : null;

  useEffect(() => {
    if (!expandedGallery) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExpandedGallery(null);
        return;
      }
      if (expandedGallery.items.length <= 1) return;
      if (event.key === 'ArrowLeft') {
        setExpandedGallery((current) =>
          current
            ? {
                ...current,
                index: (current.index - 1 + current.items.length) % current.items.length,
              }
            : null,
        );
      }
      if (event.key === 'ArrowRight') {
        setExpandedGallery((current) =>
          current
            ? {
                ...current,
                index: (current.index + 1) % current.items.length,
              }
            : null,
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedGallery]);

  const openLightbox = (result: TreatmentResult, src: string, event?: MouseEvent) => {
    event?.stopPropagation();
    const items = buildResultGallery(result, locale);
    const index = items.findIndex((item) => item.src === src);
    if (index < 0) return;
    setExpandedGallery({ items, index, title: result.title[locale] });
  };

  const navigateLightbox = (direction: 'prev' | 'next', event: MouseEvent) => {
    event.stopPropagation();
    setExpandedGallery((current) => {
      if (!current || current.items.length <= 1) return current;
      const nextIndex =
        direction === 'prev'
          ? (current.index - 1 + current.items.length) % current.items.length
          : (current.index + 1) % current.items.length;
      return { ...current, index: nextIndex };
    });
  };

  const serviceFilters = [
    { id: 'all', label: locale === 'uz' ? 'Barchasi' : locale === 'ru' ? 'Все' : 'All' },
    ...Array.from(new Set(results.map((item) => item.service[locale]))).map((label) => ({
      id: label,
      label,
    })),
  ];

  const filteredResults =
    activeFilter === 'all'
      ? results
      : results.filter((item) => item.service[locale] === activeFilter);

  return (
    <section id="results-page" className="py-10 sm:py-12 bg-brand-white min-h-screen">
      <div className="site-container">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs font-bold text-brand-gold tracking-widest uppercase py-1 px-3 bg-brand-gold-light/10 rounded-full">
            {d.navResults}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-text-primary mt-2.5 tracking-tight">
            {d.resultsTitle}
          </h1>
          <p className="text-brand-text-muted mt-3 text-sm leading-relaxed">
            {d.resultsDesc}
          </p>
        </div>

        {!loading && results.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
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
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {loading ? (
            <div className="col-span-full py-16 text-center text-brand-text-muted text-sm">
              {locale === 'uz' ? 'Natijalar yuklanmoqda...' : locale === 'ru' ? 'Загрузка результатов...' : 'Loading results...'}
            </div>
          ) : filteredResults.length === 0 ? (
            <div className="col-span-full py-16 text-center text-brand-text-muted text-sm leading-relaxed">
              {locale === 'uz'
                ? 'Hozircha davolash natijalari joylashtirilmagan.'
                : locale === 'ru'
                  ? 'Результаты лечения пока не добавлены.'
                  : 'Treatment results have not been added yet.'}
            </div>
          ) : (
          filteredResults.map((result, index) => (
            <motion.article
              key={result.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex h-full flex-col bg-brand-white rounded-xl border border-brand-sectiongray overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className={result.comparisonImage ? '' : 'grid grid-cols-2 gap-0.5 bg-brand-sectiongray'}>
                {result.comparisonImage ? (
                  <button
                    type="button"
                    onClick={(event) => openLightbox(result, result.comparisonImage!, event)}
                    className="relative aspect-[4/3] bg-brand-offwhite w-full cursor-zoom-in group"
                    aria-label={locale === 'uz' ? 'Rasmni kattalashtirish' : locale === 'ru' ? 'Увеличить изображение' : 'Expand image'}
                  >
                    <MediaImage
                      src={result.comparisonImage}
                      alt={`${result.title[locale]} — ${locale === 'uz' ? 'Oldin / Keyin' : locale === 'ru' ? 'До / После' : 'Before / After'}`}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <span className="absolute top-1.5 left-1/2 -translate-x-1/2 text-[8px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-black/55 text-white whitespace-nowrap">
                      {locale === 'uz' ? 'Oldin · Keyin' : locale === 'ru' ? 'До · После' : 'Before · After'}
                    </span>
                  </button>
                ) : (
                <>
                <button
                  type="button"
                  onClick={(event) => result.beforeImage && openLightbox(result, result.beforeImage, event)}
                  disabled={!result.beforeImage}
                  className="relative aspect-square bg-brand-offwhite cursor-zoom-in group disabled:cursor-default"
                  aria-label={locale === 'uz' ? 'Oldin rasmni kattalashtirish' : locale === 'ru' ? 'Увеличить фото «до»' : 'Expand before image'}
                >
                  {result.beforeImage ? (
                    <MediaImage
                      src={result.beforeImage}
                      alt={`${result.title[locale]} — before`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] text-brand-text-muted bg-brand-offwhite">
                      {locale === 'uz' ? 'Oldin' : locale === 'ru' ? 'До' : 'Before'}
                    </div>
                  )}
                  {result.beforeImage && (
                  <span className="absolute top-1.5 left-1.5 text-[8px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-black/55 text-white">
                    {locale === 'uz' ? 'Oldin' : locale === 'ru' ? 'До' : 'Before'}
                  </span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={(event) => result.afterImage && openLightbox(result, result.afterImage, event)}
                  disabled={!result.afterImage}
                  className="relative aspect-square bg-brand-offwhite cursor-zoom-in group disabled:cursor-default"
                  aria-label={locale === 'uz' ? 'Keyin rasmni kattalashtirish' : locale === 'ru' ? 'Увеличить фото «после»' : 'Expand after image'}
                >
                  {result.afterImage ? (
                    <MediaImage
                      src={result.afterImage}
                      alt={`${result.title[locale]} — after`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] text-brand-text-muted bg-brand-offwhite">
                      {locale === 'uz' ? 'Keyin' : locale === 'ru' ? 'После' : 'After'}
                    </div>
                  )}
                  {result.afterImage && (
                  <span className="absolute top-1.5 left-1.5 text-[8px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-brand-gold/90 text-white">
                    {locale === 'uz' ? 'Keyin' : locale === 'ru' ? 'После' : 'After'}
                  </span>
                  )}
                </button>
                </>
                )}
              </div>

              <div className="flex flex-1 flex-col p-3 sm:p-3.5">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[9px] font-bold text-brand-gold uppercase tracking-wide truncate">
                    {result.service[locale]}
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-1 text-[9px] text-brand-text-muted font-mono">
                    <CalendarClock className="w-2.5 h-2.5" />
                    {result.sessions[locale]}
                  </span>
                </div>
                <h2 className="font-bold text-brand-text-primary text-sm leading-snug flex items-start gap-1.5 line-clamp-2">
                  <ArrowLeftRight className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                  {result.title[locale]}
                </h2>
                <p className="text-brand-text-muted text-xs mt-1.5 leading-relaxed font-light line-clamp-2">
                  {result.description[locale]}
                </p>

                {result.journeyImages && result.journeyImages.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-brand-sectiongray">
                    <p className="text-[9px] font-bold text-brand-text-secondary uppercase tracking-wide mb-2">
                      {locale === 'uz'
                        ? 'Davolash bosqichlari'
                        : locale === 'ru'
                          ? 'Этапы лечения'
                          : 'Treatment stages'}
                    </p>
                    <div className="flex gap-1.5 overflow-x-auto pb-1 -mx-0.5 px-0.5 scrollbar-thin">
                      {result.journeyImages.map((src, stepIndex) => (
                        <button
                          key={src}
                          type="button"
                          onClick={(event) => openLightbox(result, src, event)}
                          className="relative shrink-0 w-[72px] sm:w-[80px] aspect-[3/4] rounded-md overflow-hidden bg-brand-offwhite border border-brand-sectiongray cursor-zoom-in group"
                          aria-label={
                            locale === 'uz'
                              ? `${stepIndex + 2}-bosqichni kattalashtirish`
                              : locale === 'ru'
                                ? `Увеличить этап ${stepIndex + 2}`
                                : `Expand stage ${stepIndex + 2}`
                          }
                        >
                          <MediaImage
                            src={src}
                            alt={`${result.title[locale]} — ${locale === 'uz' ? 'bosqich' : locale === 'ru' ? 'этап' : 'stage'} ${stepIndex + 2}`}
                            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.05]"
                          />
                          <span className="absolute bottom-1 left-1 text-[8px] font-bold px-1 py-0.5 rounded bg-black/60 text-white">
                            {stepIndex + 2}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          ))
          )}
        </div>

        <div className="mt-10 sm:mt-12 bg-gradient-to-r from-brand-dark-navy to-brand-deep-blue rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden">
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

      <AnimatePresence>
        {expandedGallery && expandedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedGallery(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[#0a121e]/92 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setExpandedGallery(null);
              }}
              className="absolute top-4 right-4 text-white hover:text-slate-300 p-2.5 hover:bg-white/10 rounded-full transition-all z-10 cursor-pointer"
              aria-label={locale === 'uz' ? 'Yopish' : locale === 'ru' ? 'Закрыть' : 'Close'}
            >
              <X className="w-6 h-6" />
            </button>

            {expandedGallery.items.length > 1 && (
              <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/80 text-xs font-mono tracking-wider">
                {expandedGallery.index + 1} / {expandedGallery.items.length}
              </span>
            )}

            <div
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={expandedItem.src}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-full max-h-[80vh] flex items-center justify-center"
                >
                  <MediaImage
                    src={expandedItem.src}
                    alt={expandedItem.alt}
                    className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-xl shadow-2xl border border-white/10"
                  />
                </motion.div>
              </AnimatePresence>

              {expandedGallery.items.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(event) => navigateLightbox('prev', event)}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer"
                    aria-label={locale === 'uz' ? 'Oldingi rasm' : locale === 'ru' ? 'Предыдущее' : 'Previous'}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={(event) => navigateLightbox('next', event)}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer"
                    aria-label={locale === 'uz' ? 'Keyingi rasm' : locale === 'ru' ? 'Следующее' : 'Next'}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center px-4 max-w-xl">
              <p className="text-white/90 text-sm font-medium">{expandedGallery.title}</p>
              <p className="text-white/65 text-xs mt-1">{expandedItem.label}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
