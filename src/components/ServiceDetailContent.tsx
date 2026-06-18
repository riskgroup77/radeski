import { CheckCircle2, HeartPulse, ListOrdered, Sparkles, Stethoscope, Target } from 'lucide-react';
import type { Locale, ServiceCategory, ServiceDetail, ServiceConditionTopic } from '../types';
import {
  getServiceSectionLabels,
  resolveCategoryRichContent,
  resolveServiceRichContent,
} from '../utils/serviceContent';
import { getServiceLucideIcon, resolveCategoryIcon, resolveSubServiceIcon } from '../utils/serviceIcons';
import { getLocalizedImage } from '../utils/localizedImage';
import AppointmentBookingLink from './AppointmentBookingLink';
import MediaImage from './MediaImage';

interface ServiceDetailContentProps {
  locale: Locale;
  category: ServiceCategory;
  sub?: ServiceDetail;
  dictionary?: Record<string, string>;
  compact?: boolean;
}

function ConditionsSection({
  title,
  items,
}: {
  title: string;
  items: ServiceConditionTopic[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="mt-6">
      <h4 className="flex items-center gap-2 text-sm font-bold text-brand-text-primary mb-3">
        <HeartPulse className="w-4 h-4 text-brand-gold shrink-0" />
        {title}
      </h4>
      <div className="space-y-4">
        {items.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="bg-brand-offwhite/70 border border-brand-sectiongray rounded-xl p-4 sm:p-5"
          >
            <h5 className="text-sm sm:text-base font-bold text-brand-text-primary leading-snug mb-2">
              {item.title}
            </h5>
            <p className="text-sm text-brand-text-secondary font-light leading-relaxed">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function BulletSection({
  title,
  icon: Icon,
  items,
  numbered,
}: {
  title: string;
  icon: typeof CheckCircle2;
  items: string[];
  numbered?: boolean;
}) {
  if (items.length === 0) return null;

  return (
    <section className="mt-6">
      <h4 className="flex items-center gap-2 text-sm font-bold text-brand-text-primary mb-3">
        <Icon className="w-4 h-4 text-brand-gold shrink-0" />
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={`${title}-${index}`}
            className="flex items-start gap-2.5 text-sm text-brand-text-secondary font-light leading-relaxed"
          >
            {numbered ? (
              <span className="w-5 h-5 rounded-full bg-brand-gold-light/15 text-brand-gold text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                {index + 1}
              </span>
            ) : (
              <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ServiceDetailContent({
  locale,
  category,
  sub,
  dictionary,
  compact = false,
}: ServiceDetailContentProps) {
  const labels = getServiceSectionLabels(locale);
  const d = dictionary;
  const rich = sub
    ? resolveServiceRichContent(sub, category, locale)
    : resolveCategoryRichContent(category, locale);

  const subImage = sub ? getLocalizedImage(sub.images, locale) ?? sub.image : null;
  const iconName = sub ? resolveSubServiceIcon(sub, category) : resolveCategoryIcon(category);
  const IconComponent = getServiceLucideIcon(iconName);
  const title = sub ? sub.name[locale] : category.title[locale];

  return (
    <div className={compact ? '' : 'max-w-4xl'}>
      {!compact && (
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 bg-brand-gold-light/10 rounded-2xl flex items-center justify-center border border-brand-gold-light/25 shrink-0">
            <IconComponent className="w-7 h-7 text-brand-gold" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-brand-gold tracking-widest uppercase">
              {category.title[locale]}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-brand-text-primary mt-1 leading-tight">
              {title}
            </h2>
          </div>
        </div>
      )}

      {subImage && !compact && (
        <div className="relative aspect-[16/9] max-h-[320px] rounded-2xl overflow-hidden bg-brand-offwhite mb-6 border border-brand-sectiongray">
          <MediaImage src={subImage} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      <section>
        <h4 className="flex items-center gap-2 text-sm font-bold text-brand-text-primary mb-2">
          <Stethoscope className="w-4 h-4 text-brand-gold" />
          {labels.about}
        </h4>
        <p className="text-sm sm:text-base text-brand-text-secondary font-light leading-relaxed bg-brand-gold-light/5 border-l-4 border-brand-gold rounded-r-xl p-4 sm:p-5">
          {rich.overview}
        </p>
      </section>

      <ConditionsSection title={labels.conditions} items={rich.conditions} />
      <BulletSection title={labels.indications} icon={Target} items={rich.indications} />
      <BulletSection title={labels.solutions} icon={Sparkles} items={rich.solutions} />
      <BulletSection title={labels.benefits} icon={CheckCircle2} items={rich.benefits} />
      <BulletSection title={labels.process} icon={ListOrdered} items={rich.process} numbered />

      {!compact && (
        <div className="mt-8 pt-6 border-t border-brand-offwhite flex flex-wrap gap-3">
          <AppointmentBookingLink className="inline-flex items-center gap-2 px-5 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs sm:text-sm rounded-xl transition-all no-underline">
            {d?.appointmentBtn ?? (locale === 'uz' ? 'Qabulga yozilish' : locale === 'ru' ? 'Записаться' : 'Book Appointment')}
          </AppointmentBookingLink>
        </div>
      )}
    </div>
  );
}
