import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import {
  ChevronRight,
  HeartPulse,
  X,
} from 'lucide-react';
import type { Locale, ServiceCategory, ServiceDetail, ServiceConditionTopic } from '../types';
import { findSubServiceCatalogKey } from '../data/serviceRichCatalog';
import {
  getConditionSectionLabels,
  resolveConditionDisplay,
} from '../utils/serviceConditionDetails';
import { serviceSubPath, conditionPath } from '../routing/paths';
import { isDermatologyConditionSlug } from '../data/dermatologyConditionsNav';
import ConditionDetailBody from './ConditionDetailBody';

interface ServiceConditionsSectionProps {
  locale: Locale;
  category: ServiceCategory;
  sub?: ServiceDetail;
  items: ServiceConditionTopic[];
  title: string;
  embedded?: boolean;
}

function ConditionDetailModal({
  condition,
  locale,
  category,
  subCatalogKey,
  labels,
  onClose,
}: {
  condition: ServiceConditionTopic;
  locale: Locale;
  category: ServiceCategory;
  subCatalogKey: string | null;
  labels: ReturnType<typeof getConditionSectionLabels>;
  onClose: () => void;
}) {
  const display = resolveConditionDisplay(condition, locale, category.id, subCatalogKey);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      key="condition-modal-root"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="condition-modal-title"
    >
        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0c1424]/75 backdrop-blur-sm cursor-default"
          aria-label={labels.close}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ type: 'spring', duration: 0.45, bounce: 0.12 }}
          onClick={(event) => event.stopPropagation()}
          className="relative z-10 w-full sm:max-w-3xl lg:max-w-4xl max-h-[92vh] sm:max-h-[88vh] flex flex-col bg-white sm:rounded-2xl shadow-2xl border border-brand-sectiongray overflow-hidden"
        >
          <div className="h-1.5 bg-brand-gold shrink-0" />

          <div className="flex items-start justify-between gap-4 px-5 sm:px-6 pt-5 pb-4 border-b border-brand-offwhite shrink-0">
            <div className="min-w-0 pr-2">
              <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-1">
                {labels.modalEyebrow}
              </p>
              <h3
                id="condition-modal-title"
                className="text-lg sm:text-xl font-extrabold text-brand-text-primary leading-snug"
              >
                {display.title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-text-muted font-light mt-1.5 line-clamp-2">
                {display.summary}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 p-2 rounded-full text-brand-text-muted hover:text-brand-text-primary hover:bg-brand-offwhite transition-colors"
              aria-label={labels.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-y-auto overscroll-contain px-5 sm:px-6 py-5 sm:py-6">
            <ConditionDetailBody
              condition={condition}
              locale={locale}
              category={category}
              subCatalogKey={subCatalogKey}
            />
          </div>
        </motion.div>
      </motion.div>,
    document.body,
  );
}

export default function ServiceConditionsSection({
  locale,
  category,
  sub,
  items,
  title,
  embedded = false,
}: ServiceConditionsSectionProps) {
  const labels = getConditionSectionLabels(locale);
  const subCatalogKey = sub ? findSubServiceCatalogKey(sub, category) : null;
  const [selectedCondition, setSelectedCondition] = useState<ServiceConditionTopic | null>(null);

  if (items.length === 0) return null;

  const list = (
    <div className="space-y-3">
        {items.map((item, index) => {
          const itemId = item.id ?? `${index}`;
          const hasConditionPage = item.id && isDermatologyConditionSlug(item.id);

          return (
            <article
              key={itemId}
              className="bg-brand-offwhite/70 border border-brand-sectiongray rounded-xl overflow-hidden transition-colors hover:border-brand-gold/35 hover:shadow-sm"
            >
              {hasConditionPage ? (
                <Link
                  to={conditionPath(locale, item.id!)}
                  className="w-full text-left p-4 sm:p-5 flex items-start gap-3 group no-underline"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h5 className="text-sm sm:text-base font-bold text-brand-text-primary leading-snug group-hover:text-brand-gold transition-colors">
                        {item.title}
                      </h5>
                      <ChevronRight className="w-5 h-5 text-brand-gold shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <p className="text-sm text-brand-text-secondary font-light leading-relaxed mt-1.5 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => setSelectedCondition(item)}
                  className="w-full text-left p-4 sm:p-5 flex items-start gap-3 cursor-pointer group"
                  aria-haspopup="dialog"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h5 className="text-sm sm:text-base font-bold text-brand-text-primary leading-snug group-hover:text-brand-gold transition-colors">
                        {item.title}
                      </h5>
                      <ChevronRight className="w-5 h-5 text-brand-gold shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <p className="text-sm text-brand-text-secondary font-light leading-relaxed mt-1.5 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </button>
              )}
            </article>
          );
        })}
    </div>
  );

  return (
    <>
      {embedded ? (
        list
      ) : (
        <section className="mt-6">
          <h4 className="flex items-center gap-2 text-sm font-bold text-brand-text-primary mb-1">
            <HeartPulse className="w-4 h-4 text-brand-gold shrink-0" />
            {title}
          </h4>
          <p className="text-xs text-brand-text-muted font-light mb-3 max-w-3xl">{labels.hint}</p>
          {list}
        </section>
      )}

      {selectedCondition && (
        <AnimatePresence>
          <ConditionDetailModal
            key={selectedCondition.id ?? selectedCondition.title}
            condition={selectedCondition}
            locale={locale}
            category={category}
            subCatalogKey={subCatalogKey}
            labels={labels}
            onClose={() => setSelectedCondition(null)}
          />
        </AnimatePresence>
      )}
    </>
  );
}
