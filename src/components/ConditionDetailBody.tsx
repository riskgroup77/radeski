import { Link } from 'react-router-dom';
import {
  ExternalLink,
  ListOrdered,
  Sparkles,
  Stethoscope,
} from 'lucide-react';
import type { Locale, ServiceCategory, ServiceConditionTopic } from '../types';
import { getLocalizedConditionText } from '../data/serviceConditionDetailsCatalog';
import {
  getConditionSectionLabels,
  resolveConditionDisplay,
} from '../utils/serviceConditionDetails';
import { serviceSubPath } from '../routing/paths';
import MediaImage from './MediaImage';
import AppointmentBookingLink from './AppointmentBookingLink';

interface ConditionDetailBodyProps {
  condition: ServiceConditionTopic;
  locale: Locale;
  category: ServiceCategory;
  subCatalogKey?: string | null;
}

export default function ConditionDetailBody({
  condition,
  locale,
  category,
  subCatalogKey = null,
}: ConditionDetailBodyProps) {
  const labels = getConditionSectionLabels(locale);
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
    const cat = category.id === categoryId ? category : category;
    const subService = cat.subServices.find((s) => s.id === subId);
    return subService?.name[locale] ?? subId;
  };

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,280px)_1fr] gap-4 sm:gap-6">
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
          <h2 className="text-base sm:text-lg font-extrabold text-brand-text-primary leading-snug">
            {whyTitle}
          </h2>
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
                  <h3 className="text-sm font-bold text-brand-text-primary mb-1">{section.title}</h3>
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
          <h3 className="flex items-center gap-2 text-xs font-bold text-brand-text-primary uppercase tracking-wide mb-2">
            <Stethoscope className="w-3.5 h-3.5 text-brand-gold" />
            {labels.clinicApproach}
          </h3>
          {meta.clinicApproach.map((item, i) => (
            <p key={i} className="text-sm text-brand-text-secondary font-light leading-relaxed">
              {getLocalizedConditionText(item, locale)}
            </p>
          ))}
        </div>
      )}

      {meta.treatments && meta.treatments.length > 0 && (
        <div>
          <h3 className="flex items-center gap-2 text-xs font-bold text-brand-text-primary uppercase tracking-wide mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            {labels.treatments}
          </h3>
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
          <h3 className="flex items-center gap-2 text-xs font-bold text-brand-text-primary uppercase tracking-wide mb-2">
            <ListOrdered className="w-3.5 h-3.5 text-brand-gold" />
            {labels.process}
          </h3>
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
