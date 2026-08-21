import { Link } from 'react-router-dom';
import { ArrowRight, CornerUpLeft } from 'lucide-react';
import { Article, Locale, PriceItem, ServiceCategory } from '../types';
import { DICTIONARY } from '../data';
import { serviceSubPath, servicesListPath } from '../routing/paths';
import MediaImage from './MediaImage';
import { resolveCategoryIcon } from '../utils/serviceIcons';
import { getServiceSectionLabels, resolveCategoryRichContent } from '../utils/serviceContent';
import ServiceDetailContent from './ServiceDetailContent';
import ServicePageHero from './ServicePageHero';
import { resolveCategoryImage, resolveSubServiceImage } from '../utils/serviceImages';
import { buildServiceH1 } from '../seo/pageMeta';
import ServiceRelatedArticlesSection from './ServiceRelatedArticlesSection';

interface ServiceCategoryPageProps {
  locale: Locale;
  category: ServiceCategory;
  articles?: Article[];
  dictionary?: Record<string, string>;
  prices?: PriceItem[];
  onOpenAppointment: (serviceId?: string) => void;
  onOpenSub: (subId: string) => void;
  onBackToList: () => void;
}

function heroDescription(text: string, maxLength = 300): string {
  const trimmed = text.trim();
  if (trimmed.length <= maxLength) return trimmed;
  const cut = trimmed.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}…`;
}

export default function ServiceCategoryPage({
  locale,
  category,
  articles = [],
  dictionary,
  prices,
  onOpenSub,
  onBackToList,
}: ServiceCategoryPageProps) {
  const d = dictionary || DICTIONARY[locale];
  const labels = getServiceSectionLabels(locale);
  const rich = resolveCategoryRichContent(category, locale);
  const categoryImage = resolveCategoryImage(category, locale);
  const heroText = heroDescription(rich.overview || category.description[locale]);

  return (
    <section id="service-category-page" className="py-8 sm:py-12 bg-brand-offwhite min-h-screen">
      <div className="site-container">
        <Link
          to={servicesListPath(locale)}
          onClick={() => onBackToList()}
          className="inline-flex items-center gap-2 text-xs font-semibold text-brand-text-secondary hover:text-brand-text-primary bg-brand-white px-3.5 py-2 rounded-xl transition-colors cursor-pointer mb-6 border border-brand-sectiongray"
        >
          <CornerUpLeft className="w-4 h-4" />
          {locale === 'uz' ? "Barcha xizmatlarga qaytish" : locale === 'ru' ? 'Назад ко всем услугам' : 'Back to all services'}
        </Link>

        <ServicePageHero
          badge={d.navServices}
          title={buildServiceH1(category.title[locale], locale)}
          description={heroText}
          image={categoryImage}
          categoryId={category.id}
          locale={locale}
          iconName={resolveCategoryIcon(category)}
          appointmentLabel={d.appointmentBtn}
        />

        <div className="mt-8">
          <ServiceDetailContent
            locale={locale}
            category={category}
            variant="page"
            prices={prices}
          />
        </div>

        {category.subServices.length > 0 && (
          <div className="mt-12">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-text-primary tracking-tight">
                {locale === 'uz'
                  ? "Ushbu yo'nalishdagi muolajalar"
                  : locale === 'ru'
                    ? 'Процедуры в этом направлении'
                    : 'Procedures in this specialty'}
              </h2>
              <p className="text-sm text-brand-text-muted mt-2 max-w-3xl">
                {locale === 'uz'
                  ? 'Har bir muolaja bo\'yicha batafsil ma\'lumot va individual konsultatsiya.'
                  : locale === 'ru'
                    ? 'Подробная информация и индивидуальная консультация по каждой процедуре.'
                    : 'Detailed information and individual consultation for each procedure.'}
              </p>
            </div>

            <div className="space-y-4">
              {category.subServices.map((sub) => {
                const subImage = resolveSubServiceImage(category, sub, locale);
                return (
                  <article
                    key={sub.id}
                    id={`service-sub-${sub.id}`}
                    className="bg-brand-white border border-brand-sectiongray rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,240px)_1fr] min-h-0">
                      <div className="relative min-h-[180px] md:min-h-[200px] bg-brand-offwhite">
                        {subImage ? (
                          <MediaImage
                            src={subImage}
                            alt={sub.name[locale]}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark-navy/90 to-brand-dark-navy" />
                        )}
                      </div>

                      <div className="p-5 sm:p-6 lg:p-7 flex flex-col justify-center">
                        <Link
                          to={serviceSubPath(locale, category.id, sub.id)}
                          onClick={() => onOpenSub(sub.id)}
                          className="text-lg sm:text-xl font-extrabold text-brand-text-primary leading-snug hover:text-brand-gold transition-colors no-underline"
                        >
                          {sub.name[locale]}
                        </Link>
                        <p className="mt-2 text-sm text-brand-text-secondary leading-relaxed line-clamp-3">
                          {sub.description[locale]}
                        </p>
                        <Link
                          to={serviceSubPath(locale, category.id, sub.id)}
                          onClick={() => onOpenSub(sub.id)}
                          className="mt-4 inline-flex items-center gap-1.5 text-sm text-brand-gold hover:text-brand-gold-dark font-bold no-underline w-fit"
                        >
                          <span>{labels.readMore}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        <ServiceRelatedArticlesSection
          locale={locale}
          categoryId={category.id}
          articles={articles}
          dictionary={d}
        />
      </div>
    </section>
  );
}
