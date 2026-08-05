import { Link } from 'react-router-dom';
import { CornerUpLeft } from 'lucide-react';
import { Locale, PriceItem, ServiceCategory, ServiceDetail } from '../types';
import { DICTIONARY } from '../data';
import { serviceCategoryPath, servicesListPath } from '../routing/paths';
import ServiceDetailContent from './ServiceDetailContent';
import ServicePageHero from './ServicePageHero';
import { resolveCategoryIcon, resolveSubServiceIcon } from '../utils/serviceIcons';
import { resolveServiceRichContent } from '../utils/serviceContent';
import { getLocalizedImage } from '../utils/localizedImage';
import { buildServiceH1 } from '../seo/pageMeta';

interface ServiceSubPageProps {
  locale: Locale;
  category: ServiceCategory;
  sub: ServiceDetail;
  dictionary?: Record<string, string>;
  prices?: PriceItem[];
  onBackToCategory: () => void;
  onBackToList: () => void;
}

function heroDescription(text: string, maxLength = 300): string {
  const trimmed = text.trim();
  if (trimmed.length <= maxLength) return trimmed;
  const cut = trimmed.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}…`;
}

export default function ServiceSubPage({
  locale,
  category,
  sub,
  dictionary,
  prices,
  onBackToCategory,
  onBackToList,
}: ServiceSubPageProps) {
  const d = dictionary || DICTIONARY[locale];
  const rich = resolveServiceRichContent(sub, category, locale);
  const subImage = getLocalizedImage(sub.images, locale) ?? sub.image ?? getLocalizedImage(category.images, locale) ?? category.image;
  const heroText = heroDescription(rich.overview || sub.description[locale]);

  return (
    <section id={`service-sub-page-${sub.id}`} className="py-8 sm:py-12 bg-brand-offwhite min-h-screen">
      <div className="site-container">
        <div className="flex flex-wrap gap-2 mb-6">
          <Link
            to={servicesListPath(locale)}
            onClick={() => onBackToList()}
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-text-secondary hover:text-brand-text-primary bg-brand-white hover:bg-brand-offwhite px-3.5 py-2 rounded-xl transition-all cursor-pointer border border-brand-sectiongray"
          >
            <CornerUpLeft className="w-4 h-4" />
            {locale === 'uz' ? 'Barcha xizmatlar' : locale === 'ru' ? 'Все услуги' : 'All services'}
          </Link>
          <Link
            to={serviceCategoryPath(locale, category.id)}
            onClick={() => onBackToCategory()}
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-gold hover:text-brand-gold-dark bg-brand-gold-light/10 hover:bg-brand-gold-light/20 px-3.5 py-2 rounded-xl transition-all cursor-pointer border border-brand-gold-light/30"
          >
            {category.title[locale]}
          </Link>
        </div>

        <ServicePageHero
          badge={category.title[locale]}
          title={buildServiceH1(sub.name[locale], locale)}
          description={heroText}
          image={subImage}
          iconName={resolveSubServiceIcon(sub, category) || resolveCategoryIcon(category)}
          appointmentLabel={d.appointmentBtn}
        />

        <div className="mt-8">
          <ServiceDetailContent
            locale={locale}
            category={category}
            sub={sub}
            variant="page"
            prices={prices}
          />
        </div>
      </div>
    </section>
  );
}
