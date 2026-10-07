import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import {
  CheckCircle2,
  Cpu,
  ExternalLink,
  ListOrdered,
  Sparkles,
  Stethoscope,
  Tag,
  Target,
} from 'lucide-react';
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
import { getServiceSectionLabels } from '../utils/serviceContent';
import { resolvePriceName } from '../utils/priceDisplay';
import { pagePath, serviceSubPath } from '../routing/paths';
import AppointmentBookingLink from './AppointmentBookingLink';

interface EquipmentDetailContentProps {
  entry: ClinicEquipmentEntry;
  locale: Locale;
  category: ServiceCategory;
  prices?: PriceItem[];
}

function SectionCard({
  icon: Icon,
  title,
  children,
  highlight,
}: {
  icon: typeof Stethoscope;
  title: string;
  children: ReactNode;
  highlight?: boolean;
}) {
  return (
    <article
      className={`rounded-2xl border p-5 sm:p-7 shadow-sm ${
        highlight
          ? 'border-brand-gold/30 bg-gradient-to-br from-brand-gold-light/10 to-brand-white'
          : 'border-brand-sectiongray bg-brand-white'
      }`}
    >
      <div className="mb-4 flex items-center gap-2.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-gold-light/15">
          <Icon className="h-5 w-5 text-brand-gold" />
        </span>
        <h3 className="text-lg font-extrabold text-brand-text-primary sm:text-xl">{title}</h3>
      </div>
      {children}
    </article>
  );
}

function BulletGrid({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2.5 text-sm leading-relaxed text-brand-text-secondary">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProcessSteps({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ol className="space-y-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="relative rounded-xl border border-brand-sectiongray bg-brand-offwhite/40 py-4 pl-12 pr-4"
        >
          <span className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-brand-gold text-xs font-bold text-white">
            {index + 1}
          </span>
          <p className="text-sm leading-relaxed text-brand-text-secondary">{item}</p>
        </li>
      ))}
    </ol>
  );
}

export default function EquipmentDetailContent({
  entry,
  locale,
  category,
  prices,
}: EquipmentDetailContentProps) {
  const labels = getEquipmentSectionLabels(locale);
  const serviceLabels = getServiceSectionLabels(locale);
  const priceItems = getEquipmentPriceItems(entry, locale, prices);
  const priceGroups = groupEquipmentPricesByCategory(priceItems, locale);

  const resolveServiceLabel = (link: (typeof entry.serviceLinks)[0]) => {
    if (link.label) return getLocalizedEquipmentText(link.label, locale);
    const sub = category.subServices.find((s) => s.id === link.subId);
    if (sub) return sub.name[locale];
    return link.subId;
  };

  const directions = entry.directions.map((item) => getLocalizedEquipmentText(item, locale));
  const indications = entry.indications.map((item) => getLocalizedEquipmentText(item, locale));
  const processSteps = entry.process.map((item) => getLocalizedEquipmentText(item, locale));

  return (
    <div className="space-y-6">
      <SectionCard icon={Stethoscope} title={serviceLabels.about}>
        <p className="text-sm leading-relaxed text-brand-text-secondary sm:text-base">
          {getLocalizedEquipmentText(entry.fullDescription, locale)}
        </p>
        <p className="mt-4 border-t border-brand-sectiongray/80 pt-4 text-sm text-brand-text-secondary">
          <span className="font-semibold text-brand-text-primary">{labels.manufacturer}: </span>
          {getLocalizedEquipmentText(entry.manufacturer, locale)}
        </p>
      </SectionCard>

      {directions.length > 0 ? (
        <SectionCard icon={Cpu} title={labels.directions}>
          <ul className="flex flex-wrap gap-2">
            {directions.map((dir) => (
              <li
                key={dir}
                className="rounded-lg border border-brand-gold-light/20 bg-brand-gold-light/10 px-3 py-1.5 text-xs font-medium text-brand-text-secondary sm:text-sm"
              >
                {dir}
              </li>
            ))}
          </ul>
        </SectionCard>
      ) : null}

      {indications.length > 0 ? (
        <SectionCard icon={Target} title={serviceLabels.indications}>
          <BulletGrid items={indications} />
        </SectionCard>
      ) : null}

      {entry.clinicUsage.length > 0 ? (
        <SectionCard icon={Sparkles} title={labels.clinicUsage} highlight>
          <div className="space-y-3">
            {entry.clinicUsage.map((item, index) => (
              <p key={index} className="text-sm leading-relaxed text-brand-text-secondary sm:text-base">
                {getLocalizedEquipmentText(item, locale)}
              </p>
            ))}
          </div>
        </SectionCard>
      ) : null}

      {processSteps.length > 0 ? (
        <SectionCard icon={ListOrdered} title={serviceLabels.process}>
          <ProcessSteps items={processSteps} />
        </SectionCard>
      ) : null}

      <SectionCard icon={Tag} title={labels.prices}>
        {entry.priceNote && priceItems.length === 0 ? (
          <p className="mb-4 text-sm leading-relaxed text-brand-text-secondary">
            <span className="font-semibold text-brand-text-primary">{labels.priceNote}: </span>
            {getLocalizedEquipmentText(entry.priceNote, locale)}
          </p>
        ) : null}
        {priceGroups.length > 0 ? (
          <div className="space-y-4">
            {priceGroups.map((group) => (
              <div key={group.categoryId} className="overflow-hidden rounded-xl border border-brand-sectiongray">
                <div className="bg-brand-offwhite px-4 py-2.5 text-xs font-bold text-brand-text-primary sm:text-sm">
                  {group.title}
                </div>
                <ul className="divide-y divide-brand-offwhite">
                  {group.items.map((item) => (
                    <li key={item.id} className="flex items-start justify-between gap-3 px-4 py-3 text-sm">
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
          <p className="text-sm text-brand-text-muted">{labels.noPrices}</p>
        ) : null}
      </SectionCard>

      {entry.serviceLinks.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {entry.serviceLinks.map((link) => {
            const catId = link.categoryId === category.id ? category.id : link.categoryId;
            const path = serviceSubPath(locale, catId, link.subId);
            return (
              <Link
                key={`${link.categoryId}-${link.subId}`}
                to={path}
                className="inline-flex items-center gap-2 rounded-xl border border-brand-gold-light/30 bg-brand-gold-light/10 px-4 py-2.5 text-xs font-bold text-brand-gold no-underline transition-colors hover:bg-brand-gold-light/20 sm:text-sm"
              >
                <ExternalLink className="h-4 w-4 shrink-0" />
                {labels.relatedService}: {resolveServiceLabel(link)}
              </Link>
            );
          })}
        </div>
      ) : null}

      <div className="flex flex-wrap gap-3 pt-2">
        <Link
          to={pagePath(locale, 'prices')}
          className="inline-flex items-center gap-2 rounded-xl border border-brand-sectiongray bg-brand-white px-5 py-2.5 text-sm font-semibold text-brand-text-secondary no-underline transition-colors hover:bg-brand-offwhite"
        >
          {labels.allPrices}
          <ExternalLink className="h-4 w-4" />
        </Link>
        <AppointmentBookingLink className="inline-flex items-center gap-2 rounded-xl bg-brand-gold px-5 py-2.5 text-sm font-bold text-white no-underline shadow-md shadow-brand-gold/20 transition-colors hover:bg-brand-gold-dark">
          {labels.book}
        </AppointmentBookingLink>
      </div>
    </div>
  );
}
