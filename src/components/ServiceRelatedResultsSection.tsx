import { useState, useEffect, type MouseEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeftRight, ChevronLeft, ChevronRight, Sparkles, X } from 'lucide-react';
import type { Locale } from '../types';
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

interface ServiceRelatedResultsSectionProps {
  locale: Locale;
  results: TreatmentResult[];
}

const SECTION_TITLE: Record<Locale, string> = {
  uz: 'Oldin va keyin natijalar',
  ru: 'Результаты до и после',
  en: 'Before and after results',
};

const SECTION_DESC: Record<Locale, string> = {
  uz: "Ushbu apparat yoki muolaja bo'yicha klinikamizdagi haqiqiy davolash natijalari.",
  ru: 'Реальные результаты лечения в нашей клинике по данному аппарату или процедуре.',
  en: 'Real treatment outcomes at our clinic for this device or procedure.',
};

export default function ServiceRelatedResultsSection({
  locale,
  results,
}: ServiceRelatedResultsSectionProps) {
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

  if (results.length === 0) return null;

  const openGallery = (result: TreatmentResult, event?: MouseEvent) => {
    event?.stopPropagation();
    const items = buildResultGallery(result, locale);
    if (items.length === 0) return;
    setExpandedGallery({ items, index: 0, title: result.title[locale] });
  };

  return (
    <>
      <div className="mt-14 border-t border-brand-sectiongray pt-10">
        <div className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-gold-light/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-gold">
            <Sparkles className="h-3.5 w-3.5" />
            {locale === 'uz' ? 'Natijalar' : locale === 'ru' ? 'Результаты' : 'Results'}
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-brand-text-primary sm:text-2xl">
            {SECTION_TITLE[locale]}
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-brand-text-muted">{SECTION_DESC[locale]}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((result) => {
            const gallery = buildResultGallery(result, locale);
            const preview = gallery[0];
            if (!preview) return null;

            return (
              <button
                key={result.id}
                type="button"
                onClick={() => openGallery(result)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-brand-sectiongray bg-brand-white text-left shadow-sm transition-all hover:shadow-md"
              >
                <div
                  className={`relative overflow-hidden ${result.comparisonImage ? 'aspect-[2/1] bg-brand-sectiongray' : 'aspect-[4/3] bg-brand-offwhite'}`}
                >
                  <MediaImage
                    src={preview.src}
                    alt={preview.alt}
                    className={`h-full w-full transition-transform duration-300 group-hover:scale-[1.03] ${result.comparisonImage ? 'object-cover object-[center_42%]' : 'object-cover object-center'}`}
                  />
                  <span className="absolute left-3 top-3 rounded-lg bg-brand-dark-navy/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    {preview.label}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold leading-snug text-brand-text-primary">{result.title[locale]}</h3>
                  <p className="mt-1 line-clamp-2 text-xs font-light text-brand-text-secondary">
                    {result.description[locale]}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold">
                    <ArrowLeftRight className="h-3.5 w-3.5" />
                    {locale === 'uz' ? "Barcha rasmlarni ko'rish" : locale === 'ru' ? 'Смотреть все фото' : 'View all photos'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {expandedGallery && expandedItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark-navy/90 p-4"
            onClick={() => setExpandedGallery(null)}
          >
            <button
              type="button"
              onClick={() => setExpandedGallery(null)}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {expandedGallery.items.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setExpandedGallery((current) =>
                      current
                        ? {
                            ...current,
                            index: (current.index - 1 + current.items.length) % current.items.length,
                          }
                        : null,
                    );
                  }}
                  className="absolute left-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:left-6"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setExpandedGallery((current) =>
                      current
                        ? {
                            ...current,
                            index: (current.index + 1) % current.items.length,
                          }
                        : null,
                    );
                  }}
                  className="absolute right-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:right-6"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            ) : null}

            <div className="max-h-[90vh] max-w-4xl" onClick={(event) => event.stopPropagation()}>
              <MediaImage
                src={expandedItem.src}
                alt={expandedItem.alt}
                className="max-h-[78vh] w-auto max-w-full rounded-xl object-contain"
              />
              <p className="mt-3 text-center text-sm font-semibold text-white">{expandedGallery.title}</p>
              <p className="mt-1 text-center text-xs text-white/75">{expandedItem.label}</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
