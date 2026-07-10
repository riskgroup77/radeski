import {
  CheckCircle2,
  HeartPulse,
  ListOrdered,
  Sparkles,
  Stethoscope,
  Target,
} from 'lucide-react';
import type { Locale, PriceItem, ServiceCategory, ServiceDetail } from '../types';
import {
  getServiceSectionLabels,
  resolveCategoryRichContent,
  resolveServiceRichContent,
  streamlineServiceRichContent,
} from '../utils/serviceContent';
import ClinicEquipmentSection from './ClinicEquipmentSection';
import ServiceConditionsSection from './ServiceConditionsSection';

interface ServiceDetailContentProps {
  locale: Locale;
  category: ServiceCategory;
  sub?: ServiceDetail;
  dictionary?: Record<string, string>;
  variant?: 'page' | 'compact';
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
      <div className="flex items-center gap-2.5 mb-4">
        <span className="w-9 h-9 rounded-xl bg-brand-gold-light/15 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-brand-gold" />
        </span>
        <h3 className="text-lg sm:text-xl font-extrabold text-brand-text-primary">{title}</h3>
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
        <li key={index} className="flex items-start gap-2.5 text-sm text-brand-text-secondary leading-relaxed">
          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
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
          className="relative pl-12 pr-4 py-4 rounded-xl border border-brand-sectiongray bg-brand-offwhite/40"
        >
          <span className="absolute left-4 top-4 w-7 h-7 rounded-full bg-brand-gold text-white text-xs font-bold flex items-center justify-center">
            {index + 1}
          </span>
          <p className="text-sm text-brand-text-secondary leading-relaxed">{item}</p>
        </li>
      ))}
    </ol>
  );
}

export default function ServiceDetailContent({
  locale,
  category,
  sub,
  variant = 'page',
  prices,
}: ServiceDetailContentProps) {
  const labels = getServiceSectionLabels(locale);
  const rawRich = sub
    ? resolveServiceRichContent(sub, category, locale)
    : resolveCategoryRichContent(category, locale);
  const rich = streamlineServiceRichContent(rawRich);

  if (variant === 'compact') {
    return (
      <p className="text-sm text-brand-text-secondary font-light leading-relaxed line-clamp-3">
        {rich.overview}
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <SectionCard icon={Stethoscope} title={labels.about}>
        {rich.aboutTitle && (
          <h4 className="text-base font-bold text-brand-text-primary mb-2">{rich.aboutTitle}</h4>
        )}
        <p className="text-sm sm:text-base text-brand-text-secondary leading-relaxed">{rich.overview}</p>
        {rich.aboutSections?.map((section, index) => (
          <div key={`${section.title}-${index}`} className="mt-4 pt-4 border-t border-brand-sectiongray/80">
            <h5 className="text-sm font-bold text-brand-text-primary mb-1.5">{section.title}</h5>
            <p className="text-sm text-brand-text-secondary leading-relaxed">{section.description}</p>
          </div>
        ))}
        {rich.aboutFooter && (
          <p className="mt-4 text-sm text-brand-text-secondary leading-relaxed border-t border-brand-gold/15 pt-4">
            {rich.aboutFooter}
          </p>
        )}
      </SectionCard>

      {!sub && category.id === 'apparatnaya-kosmetologiya' && (
        <SectionCard icon={Sparkles} title={labels.equipment}>
          <ClinicEquipmentSection locale={locale} category={category} prices={prices} embedded />
        </SectionCard>
      )}

      {rich.conditions.length > 0 && (
        <SectionCard icon={HeartPulse} title={labels.conditions}>
          <ServiceConditionsSection
            locale={locale}
            category={category}
            sub={sub}
            items={rich.conditions}
            title=""
            embedded
          />
        </SectionCard>
      )}

      {rich.indications.length > 0 && (
        <SectionCard icon={Target} title={labels.indications}>
          <BulletGrid items={rich.indications} />
        </SectionCard>
      )}

      {rich.solutions.length > 0 && (
        <SectionCard icon={Sparkles} title={labels.solutions}>
          <BulletGrid items={rich.solutions} />
        </SectionCard>
      )}

      {rich.benefits.length > 0 && (
        <SectionCard icon={CheckCircle2} title={labels.benefits} highlight>
          <BulletGrid items={rich.benefits} />
        </SectionCard>
      )}

      {rich.process.length > 0 && (
        <SectionCard icon={ListOrdered} title={labels.process}>
          <ProcessSteps items={rich.process} />
        </SectionCard>
      )}
    </div>
  );
}
