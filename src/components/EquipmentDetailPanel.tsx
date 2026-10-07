import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ExternalLink, MapPin, Sparkles, Stethoscope, Tag } from 'lucide-react';
import type { Locale, PriceItem, ServiceCategory } from '../types';
import {
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

interface EquipmentDetailPanelProps {
  entry: ClinicEquipmentEntry;
  locale: Locale;
  category: ServiceCategory;
  prices?: PriceItem[];
  animated?: boolean;
  showImage?: boolean;
}

export default function EquipmentDetailPanel({
  entry,
  locale,
  category,
  prices,
  animated = false,
  showImage = true,
}: EquipmentDetailPanelProps) {
  const labels = getEquipmentSectionLabels(locale);
  const priceItems = getEquipmentPriceItems(entry, locale, prices);
  const priceGroups = groupEquipmentPricesByCategory(priceItems, locale);

  const resolveServiceLabel = (link: (typeof entry.serviceLinks)[0]) => {
    if (link.label) return getLocalizedEquipmentText(link.label, locale);
    const sub = category.subServices.find((s) => s.id === link.subId);
    if (sub) return sub.name[locale];
    return link.subId;
  };

  const content = (
    <div className="space-y-5">
      {showImage ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[minmax(0,220px)_1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-brand-sectiongray bg-brand-offwhite">
            <MediaImage
              src={entry.image}
              alt={getLocalizedEquipmentText(entry.title, locale)}
              className="h-full w-full object-cover object-[center_32%]"
            />
          </div>
          <div className="min-w-0 space-y-3">
            <p className="text-sm font-light leading-relaxed text-brand-text-secondary">
              {getLocalizedEquipmentText(entry.fullDescription, locale)}
            </p>
            <p className="text-xs text-brand-text-muted">
              <span className="font-semibold text-brand-text-primary">{labels.manufacturer}: </span>
              {getLocalizedEquipmentText(entry.manufacturer, locale)}
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-sm font-light leading-relaxed text-brand-text-secondary">
            {getLocalizedEquipmentText(entry.fullDescription, locale)}
          </p>
          <p className="text-xs text-brand-text-muted">
            <span className="font-semibold text-brand-text-primary">{labels.manufacturer}: </span>
            {getLocalizedEquipmentText(entry.manufacturer, locale)}
          </p>
        </div>
      )}

      <div>
        <h6 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand-text-primary">
          <MapPin className="h-3.5 w-3.5 text-brand-gold" />
          {labels.directions}
        </h6>
        <ul className="flex flex-wrap gap-2">
          {entry.directions.map((dir, i) => (
            <li
              key={i}
              className="rounded-lg border border-brand-gold-light/20 bg-brand-gold-light/10 px-2.5 py-1 text-xs text-brand-text-secondary"
            >
              {getLocalizedEquipmentText(dir, locale)}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h6 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand-text-primary">
          <Stethoscope className="h-3.5 w-3.5 text-brand-gold" />
          {labels.indications}
        </h6>
        <ul className="space-y-1.5">
          {entry.indications.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm font-light leading-relaxed text-brand-text-secondary">
              <span className="shrink-0 text-brand-gold">•</span>
              <span>{getLocalizedEquipmentText(item, locale)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-brand-gold-light/15 bg-brand-gold-light/5 p-4">
        <h6 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand-text-primary">
          <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
          {labels.clinicUsage}
        </h6>
        {entry.clinicUsage.map((item, i) => (
          <p key={i} className="text-sm font-light leading-relaxed text-brand-text-secondary">
            {getLocalizedEquipmentText(item, locale)}
          </p>
        ))}
      </div>

      <div>
        <h6 className="mb-2 text-xs font-bold uppercase tracking-wide text-brand-text-primary">{labels.process}</h6>
        <ol className="space-y-1.5">
          {entry.process.map((step, i) => (
            <li key={i} className="flex gap-2.5 text-sm font-light text-brand-text-secondary">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold-light/15 text-[10px] font-bold text-brand-gold">
                {i + 1}
              </span>
              <span>{getLocalizedEquipmentText(step, locale)}</span>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h6 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand-text-primary">
          <Tag className="h-3.5 w-3.5 text-brand-gold" />
          {labels.prices}
        </h6>
        {entry.priceNote && priceItems.length === 0 && (
          <p className="mb-3 text-sm font-light leading-relaxed text-brand-text-secondary">
            <span className="font-semibold text-brand-text-primary">{labels.priceNote}: </span>
            {getLocalizedEquipmentText(entry.priceNote, locale)}
          </p>
        )}
        {priceGroups.length > 0 ? (
          <div className="space-y-4">
            {priceGroups.map((group) => (
              <div key={group.categoryId} className="overflow-hidden rounded-xl border border-brand-sectiongray">
                <div className="bg-brand-offwhite px-3 py-2 text-xs font-bold text-brand-text-primary">
                  {group.title}
                </div>
                <ul className="divide-y divide-brand-offwhite">
                  {group.items.map((item) => (
                    <li key={item.id} className="flex items-start justify-between gap-3 px-3 py-2.5 text-sm">
                      <span className="font-light leading-snug text-brand-text-secondary">
                        {resolvePriceName(item, locale)}
                      </span>
                      <span className="shrink-0 whitespace-nowrap font-bold text-brand-gold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : !entry.priceNote ? (
          <p className="text-sm font-light text-brand-text-muted">{labels.noPrices}</p>
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
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold no-underline hover:text-brand-gold-dark"
              >
                <ExternalLink className="h-3.5 w-3.5" />
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
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-text-secondary no-underline hover:text-brand-text-primary"
        >
          {labels.allPrices}
          <ExternalLink className="h-3.5 w-3.5" />
        </Link>
        <AppointmentBookingLink className="inline-flex items-center gap-1.5 rounded-lg bg-brand-gold px-3 py-2 text-xs font-bold text-white no-underline hover:bg-brand-gold-dark">
          {labels.book}
        </AppointmentBookingLink>
      </div>
    </div>
  );

  if (!animated) return content;

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="overflow-hidden"
    >
      <div className="mt-3 border-t border-brand-sectiongray/80 pb-1 pt-4">{content}</div>
    </motion.div>
  );
}
