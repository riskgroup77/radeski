import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import {
  ChevronDown,
  Cpu,
  ExternalLink,
  MapPin,
  Sparkles,
  Stethoscope,
  Tag,
} from 'lucide-react';
import type { Locale, PriceItem, ServiceCategory } from '../types';
import {
  getCategoryEquipmentList,
  getLocalizedEquipmentText,
  type ClinicEquipmentEntry,
} from '../data/clinicEquipmentCatalog';
import {
  getEquipmentPriceItems,
  getEquipmentSectionLabels,
  groupEquipmentPricesByCategory,
} from '../utils/clinicEquipment';
import { resolvePriceName } from '../utils/priceDisplay';
import { pagePath, serviceSubPath } from '../routing/paths';
import MediaImage from './MediaImage';
import AppointmentBookingLink from './AppointmentBookingLink';

interface ClinicEquipmentSectionProps {
  locale: Locale;
  category: ServiceCategory;
  prices?: PriceItem[];
  embedded?: boolean;
}

function EquipmentDetailPanel({
  entry,
  locale,
  category,
  prices,
  labels,
}: {
  entry: ClinicEquipmentEntry;
  locale: Locale;
  category: ServiceCategory;
  prices?: PriceItem[];
  labels: ReturnType<typeof getEquipmentSectionLabels>;
}) {
  const priceItems = getEquipmentPriceItems(entry, locale, prices);
  const priceGroups = groupEquipmentPricesByCategory(priceItems, locale);

  const resolveServiceLabel = (link: (typeof entry.serviceLinks)[0]) => {
    if (link.label) return getLocalizedEquipmentText(link.label, locale);
    const sub = category.subServices.find((s) => s.id === link.subId);
    if (sub) return sub.name[locale];
    return link.subId;
  };

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="overflow-hidden"
    >
      <div className="pt-4 pb-1 space-y-5 border-t border-brand-sectiongray/80 mt-3">
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,220px)_1fr] gap-4">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-brand-offwhite border border-brand-sectiongray">
            <MediaImage
              src={entry.image}
              alt={getLocalizedEquipmentText(entry.title, locale)}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-3 min-w-0">
            <p className="text-sm text-brand-text-secondary font-light leading-relaxed">
              {getLocalizedEquipmentText(entry.fullDescription, locale)}
            </p>
            <p className="text-xs text-brand-text-muted">
              <span className="font-semibold text-brand-text-primary">{labels.manufacturer}: </span>
              {getLocalizedEquipmentText(entry.manufacturer, locale)}
            </p>
          </div>
        </div>

        <div>
          <h6 className="flex items-center gap-2 text-xs font-bold text-brand-text-primary uppercase tracking-wide mb-2">
            <MapPin className="w-3.5 h-3.5 text-brand-gold" />
            {labels.directions}
          </h6>
          <ul className="flex flex-wrap gap-2">
            {entry.directions.map((dir, i) => (
              <li
                key={i}
                className="text-xs px-2.5 py-1 rounded-lg bg-brand-gold-light/10 text-brand-text-secondary border border-brand-gold-light/20"
              >
                {getLocalizedEquipmentText(dir, locale)}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className="flex items-center gap-2 text-xs font-bold text-brand-text-primary uppercase tracking-wide mb-2">
            <Stethoscope className="w-3.5 h-3.5 text-brand-gold" />
            {labels.indications}
          </h6>
          <ul className="space-y-1.5">
            {entry.indications.map((item, i) => (
              <li key={i} className="text-sm text-brand-text-secondary font-light leading-relaxed flex gap-2">
                <span className="text-brand-gold shrink-0">•</span>
                <span>{getLocalizedEquipmentText(item, locale)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-brand-gold-light/5 border border-brand-gold-light/15 rounded-xl p-4">
          <h6 className="flex items-center gap-2 text-xs font-bold text-brand-text-primary uppercase tracking-wide mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            {labels.clinicUsage}
          </h6>
          {entry.clinicUsage.map((item, i) => (
            <p key={i} className="text-sm text-brand-text-secondary font-light leading-relaxed">
              {getLocalizedEquipmentText(item, locale)}
            </p>
          ))}
        </div>

        <div>
          <h6 className="text-xs font-bold text-brand-text-primary uppercase tracking-wide mb-2">
            {labels.process}
          </h6>
          <ol className="space-y-1.5">
            {entry.process.map((step, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-brand-text-secondary font-light">
                <span className="w-5 h-5 rounded-full bg-brand-gold-light/15 text-brand-gold text-[10px] font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span>{getLocalizedEquipmentText(step, locale)}</span>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h6 className="flex items-center gap-2 text-xs font-bold text-brand-text-primary uppercase tracking-wide mb-2">
            <Tag className="w-3.5 h-3.5 text-brand-gold" />
            {labels.prices}
          </h6>
          {entry.priceNote && priceItems.length === 0 && (
            <p className="text-sm text-brand-text-secondary font-light leading-relaxed mb-3">
              <span className="font-semibold text-brand-text-primary">{labels.priceNote}: </span>
              {getLocalizedEquipmentText(entry.priceNote, locale)}
            </p>
          )}
          {priceGroups.length > 0 ? (
            <div className="space-y-4">
              {priceGroups.map((group) => (
                <div key={group.categoryId} className="rounded-xl border border-brand-sectiongray overflow-hidden">
                  <div className="px-3 py-2 bg-brand-offwhite text-xs font-bold text-brand-text-primary">
                    {group.title}
                  </div>
                  <ul className="divide-y divide-brand-offwhite">
                    {group.items.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-start justify-between gap-3 px-3 py-2.5 text-sm"
                      >
                        <span className="text-brand-text-secondary font-light leading-snug">
                          {resolvePriceName(item, locale)}
                        </span>
                        <span className="font-bold text-brand-gold whitespace-nowrap shrink-0">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : !entry.priceNote ? (
            <p className="text-sm text-brand-text-muted font-light">{labels.noPrices}</p>
          ) : null}
        </div>

        {entry.serviceLinks.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {entry.serviceLinks.map((link) => {
              const catId = link.categoryId === category.id ? category.id : link.categoryId;
              const path = serviceSubPath(locale, catId, link.subId);
              return (
                <Link
                  key={`${link.categoryId}-${link.subId}`}
                  to={path}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:text-brand-gold-dark no-underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>
                    {labels.relatedService}: {resolveServiceLabel(link)}
                  </span>
                </Link>
              );
            })}
          </div>
        )}

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            to={pagePath(locale, 'prices')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-text-secondary hover:text-brand-text-primary no-underline"
          >
            {labels.allPrices}
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          <AppointmentBookingLink className="inline-flex items-center gap-1.5 px-3 py-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs rounded-lg no-underline">
            {labels.book}
          </AppointmentBookingLink>
        </div>
      </div>
    </motion.div>
  );
}

export default function ClinicEquipmentSection({
  locale,
  category,
  prices,
  embedded = false,
}: ClinicEquipmentSectionProps) {
  const labels = getEquipmentSectionLabels(locale);
  const equipmentList = getCategoryEquipmentList(category.id);
  const [openId, setOpenId] = useState<string | null>(null);

  if (equipmentList.length === 0) return null;

  const list = (
    <div className="space-y-3">
        {equipmentList.map((entry) => {
          const isOpen = openId === entry.id;
          const title = getLocalizedEquipmentText(entry.title, locale);
          const summary = getLocalizedEquipmentText(entry.shortDescription, locale);

          return (
            <article
              key={entry.id}
              className={`bg-brand-offwhite/70 border rounded-xl overflow-hidden transition-colors ${
                isOpen ? 'border-brand-gold/40 shadow-sm' : 'border-brand-sectiongray'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : entry.id)}
                className="w-full text-left p-4 sm:p-5 flex items-start gap-3 cursor-pointer group"
                aria-expanded={isOpen}
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-brand-sectiongray bg-brand-white hidden sm:block">
                  <MediaImage src={entry.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="text-sm sm:text-base font-bold text-brand-text-primary leading-snug group-hover:text-brand-gold transition-colors">
                      {title}
                    </h5>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-gold shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  {!isOpen && (
                    <p className="text-sm text-brand-text-secondary font-light leading-relaxed mt-1.5 line-clamp-2">
                      {summary}
                    </p>
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                    <EquipmentDetailPanel
                      entry={entry}
                      locale={locale}
                      category={category}
                      prices={prices}
                      labels={labels}
                    />
                  </div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
    </div>
  );

  if (embedded) return list;

  return (
    <section className="mt-6">
      <h4 className="flex items-center gap-2 text-sm font-bold text-brand-text-primary mb-1">
        <Cpu className="w-4 h-4 text-brand-gold shrink-0" />
        {labels.sectionTitle}
      </h4>
      <p className="text-xs text-brand-text-muted font-light mb-3 max-w-3xl">{labels.hint}</p>
      {list}
    </section>
  );
}
