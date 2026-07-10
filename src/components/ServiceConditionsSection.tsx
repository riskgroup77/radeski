import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import {
  ChevronRight,
  ExternalLink,
  HeartPulse,
  ListOrdered,
  Sparkles,
  Stethoscope,
  X,
} from 'lucide-react';
import type { Locale, ServiceCategory, ServiceDetail, ServiceConditionTopic } from '../types';
import { findSubServiceCatalogKey } from '../data/serviceRichCatalog';
import {
  getConditionSectionLabels,
  resolveConditionDisplay,
} from '../utils/serviceConditionDetails';
import { getLocalizedConditionText } from '../data/serviceConditionDetailsCatalog';
import { serviceSubPath } from '../routing/paths';
import MediaImage from './MediaImage';
import AppointmentBookingLink from './AppointmentBookingLink';

interface ServiceConditionsSectionProps {
  locale: Locale;
  category: ServiceCategory;
  sub?: ServiceDetail;
  items: ServiceConditionTopic[];
  title: string;
  embedded?: boolean;
}

function ConditionDetailBody({
  condition,
  locale,
  category,
  subCatalogKey,
  labels,
}: {
  condition: ServiceConditionTopic;
  locale: Locale;
  category: ServiceCategory;
  subCatalogKey: string | null;
  labels: ReturnType<typeof getConditionSectionLabels>;
}) {
  const display = resolveConditionDisplay(condition, locale, category.id, subCatalogKey);
  const { meta } = display;

  const whyTitle =
    condition.aboutTitle ??
    (meta.aboutTitle ? getLocalizedConditionText(meta.aboutTitle, locale) : null);
  const whyOverview =
    condition.aboutOverview ??
    (meta.aboutOverview ? getLocalizedConditionText(meta.aboutOverview, locale) : null);
  const whySections =
    condition.aboutSections ??
    meta.aboutSections?.map((section) => ({
      title: getLocalizedConditionText(section.title, locale),
      description: getLocalizedConditionText(section.description, locale),
    }));
  const whyFooter =
    condition.aboutFooter ??
    (meta.aboutFooter ? getLocalizedConditionText(meta.aboutFooter, locale) : null);

  const resolveServiceLabel = (categoryId: string, subId: string) => {
    const subService = category.subServices.find((s) => s.id === subId);
    return subService?.name[locale] ?? subId;
  };

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,240px)_1fr] gap-4 sm:gap-6">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-brand-offwhite border border-brand-sectiongray">
          <MediaImage src={display.image} alt={display.title} className="w-full h-full object-cover" />
        </div>
        <div className="space-y-3 min-w-0">
          <p className="text-sm sm:text-base text-brand-text-secondary font-light leading-relaxed">
            {display.fullDescription}
          </p>
        </div>
      </div>

      {whyTitle && (
        <div className="bg-brand-gold-light/5 border-l-4 border-brand-gold rounded-r-xl p-4 sm:p-5 space-y-4">
          <h6 className="text-base sm:text-lg font-extrabold text-brand-text-primary leading-snug">
            {whyTitle}
          </h6>
          {whyOverview && (
            <p className="text-sm sm:text-base text-brand-text-secondary font-light leading-relaxed">
              {whyOverview}
            </p>
          )}
          {whySections && whySections.length > 0 && (
            <div className="space-y-4 pt-1">
              <p className="text-xs font-bold text-brand-text-primary uppercase tracking-wide">
                {labels.advantages}
              </p>
              {whySections.map((section, index) => (
                <div key={`${section.title}-${index}`}>
                  <h6 className="text-sm font-bold text-brand-text-primary mb-1">
                    {section.title}
                  </h6>
                  <p className="text-sm text-brand-text-secondary font-light leading-relaxed">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          )}
          {whyFooter && (
            <p className="text-sm sm:text-base text-brand-text-secondary font-light leading-relaxed pt-2 border-t border-brand-gold/15">
              {whyFooter}
            </p>
          )}
        </div>
      )}

      {meta.clinicApproach && meta.clinicApproach.length > 0 && !whySections?.length && (
        <div className="bg-brand-gold-light/5 border border-brand-gold-light/15 rounded-xl p-4 sm:p-5">
          <h6 className="flex items-center gap-2 text-xs font-bold text-brand-text-primary uppercase tracking-wide mb-2">
            <Stethoscope className="w-3.5 h-3.5 text-brand-gold" />
            {labels.clinicApproach}
          </h6>
          {meta.clinicApproach.map((item, i) => (
            <p key={i} className="text-sm text-brand-text-secondary font-light leading-relaxed">
              {getLocalizedConditionText(item, locale)}
            </p>
          ))}
        </div>
      )}

      {meta.treatments && meta.treatments.length > 0 && (
        <div>
          <h6 className="flex items-center gap-2 text-xs font-bold text-brand-text-primary uppercase tracking-wide mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            {labels.treatments}
          </h6>
          <ul className="space-y-1.5">
            {meta.treatments.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-brand-text-secondary font-light">
                <span className="text-brand-gold shrink-0">•</span>
                <span>{getLocalizedConditionText(item, locale)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {meta.process && meta.process.length > 0 && (
        <div>
          <h6 className="flex items-center gap-2 text-xs font-bold text-brand-text-primary uppercase tracking-wide mb-2">
            <ListOrdered className="w-3.5 h-3.5 text-brand-gold" />
            {labels.process}
          </h6>
          <ol className="space-y-1.5">
            {meta.process.map((step, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-brand-text-secondary font-light">
                <span className="w-5 h-5 rounded-full bg-brand-gold-light/15 text-brand-gold text-[10px] font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span>{getLocalizedConditionText(step, locale)}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {meta.serviceLinks && meta.serviceLinks.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {meta.serviceLinks.map((link) => (
            <Link
              key={`${link.categoryId}-${link.subId}`}
              to={serviceSubPath(locale, link.categoryId, link.subId)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:text-brand-gold-dark no-underline"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>
                {labels.relatedService}: {resolveServiceLabel(link.categoryId, link.subId)}
              </span>
            </Link>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-3 pt-2 border-t border-brand-sectiongray">
        <AppointmentBookingLink className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs rounded-lg no-underline">
          {labels.book}
        </AppointmentBookingLink>
      </div>
    </div>
  );
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
              labels={labels}
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

          return (
            <article
              key={itemId}
              className="bg-brand-offwhite/70 border border-brand-sectiongray rounded-xl overflow-hidden transition-colors hover:border-brand-gold/35 hover:shadow-sm"
            >
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
