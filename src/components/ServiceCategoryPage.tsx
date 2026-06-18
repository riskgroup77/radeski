import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, CornerUpLeft } from 'lucide-react';
import { Locale, ServiceCategory } from '../types';
import { DICTIONARY } from '../data';
import { serviceSubPath, servicesListPath } from '../routing/paths';
import MediaImage from './MediaImage';
import { getServiceLucideIcon, resolveCategoryIcon } from '../utils/serviceIcons';
import { getServiceSectionLabels } from '../utils/serviceContent';
import ServiceDetailContent from './ServiceDetailContent';
import AppointmentBookingLink from './AppointmentBookingLink';
import { getLocalizedImage } from '../utils/localizedImage';

interface ServiceCategoryPageProps {
  locale: Locale;
  category: ServiceCategory;
  dictionary?: Record<string, string>;
  onOpenAppointment: (serviceId?: string) => void;
  onOpenSub: (subId: string) => void;
  onBackToList: () => void;
}

export default function ServiceCategoryPage({
  locale,
  category,
  dictionary,
  onOpenAppointment,
  onOpenSub,
  onBackToList,
}: ServiceCategoryPageProps) {
  const d = dictionary || DICTIONARY[locale];
  const labels = getServiceSectionLabels(locale);

  const categoryImage = getLocalizedImage(category.images, locale) ?? category.image;

  const renderIcon = (iconName: string, className = 'w-6 h-6 text-brand-gold') => {
    const IconComponent = getServiceLucideIcon(iconName);
    return <IconComponent className={className} />;
  };

  return (
    <section id="service-category-page" className="py-12 sm:py-16 bg-brand-offwhite min-h-screen">
      <div className="site-container">
        <Link
          to={servicesListPath(locale)}
          onClick={() => onBackToList()}
          className="inline-flex items-center gap-2 text-xs font-semibold text-brand-text-secondary hover:text-brand-text-primary bg-brand-white hover:bg-brand-offwhite px-3.5 py-2 rounded-xl transition-all cursor-pointer mb-8 border border-brand-sectiongray"
        >
          <CornerUpLeft className="w-4 h-4" />
          {locale === 'uz' ? "Barcha xizmatlarga qaytish" : locale === 'ru' ? 'Назад ко всем услугам' : 'Back to all services'}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-brand-white border border-brand-sectiongray rounded-3xl overflow-hidden shadow-sm"
        >
          {categoryImage ? (
            <div className="relative aspect-[21/9] sm:aspect-[16/7] min-h-[220px] sm:min-h-[280px] overflow-hidden bg-brand-offwhite">
              <MediaImage
                src={categoryImage}
                alt={category.title[locale]}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ) : (
            <div className="p-8 sm:p-10 bg-brand-dark-navy flex items-center gap-4">
              <div className="w-14 h-14 bg-brand-gold/15 rounded-2xl flex items-center justify-center border border-brand-gold/25">
                {renderIcon(resolveCategoryIcon(category), 'w-7 h-7 text-brand-gold')}
              </div>
            </div>
          )}

          <div className="p-6 sm:p-8 lg:p-10">
            <span className="text-xs font-bold text-brand-gold tracking-widest uppercase">
              {d.navServices}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-text-primary mt-2 tracking-tight leading-tight">
              {category.title[locale]}
            </h1>

            <div className="mt-6 sm:mt-8">
              <ServiceDetailContent locale={locale} category={category} dictionary={d} compact />
            </div>

            <div className="mt-8 pt-6 border-t border-brand-offwhite flex flex-wrap gap-3">
              <AppointmentBookingLink className="inline-flex items-center gap-2 px-5 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs sm:text-sm rounded-xl transition-all no-underline shadow-sm">
                <span>{d.appointmentBtn}</span>
                <ArrowUpRight className="w-4 h-4" />
              </AppointmentBookingLink>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 sm:mt-12">
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-text-primary tracking-tight mb-2">
            {locale === 'uz' ? 'Ushbu yo\'nalishdagi muolajalar' : locale === 'ru' ? 'Процедуры в этом направлении' : 'Procedures in this specialty'}
          </h2>
          <p className="text-sm text-brand-text-muted font-light mb-6 max-w-3xl">
            {locale === 'uz'
              ? 'Har bir muolaja haqida to\'liq ma\'lumot: qachon murojaat qilish, mavjud yechimlar, afzalliklar va davolash jarayoni.'
              : locale === 'ru'
                ? 'Полная информация о каждой процедуре: когда обращаться, доступные решения, преимущества и этапы лечения.'
                : 'Full details for each procedure: when to seek treatment, available solutions, benefits, and treatment steps.'}
          </p>

          <div className="space-y-6">
            {category.subServices.map((sub) => {
              const subImage = getLocalizedImage(sub.images, locale) ?? sub.image;
              return (
              <article
                key={sub.id}
                id={`service-sub-${sub.id}`}
                className="bg-brand-white border border-brand-sectiongray rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all"
              >
                {subImage && (
                  <div className="relative aspect-[16/9] sm:aspect-[21/9] min-h-[200px] overflow-hidden bg-brand-offwhite">
                    <MediaImage
                      src={subImage}
                      alt={sub.name[locale]}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                )}

                <div className="p-5 sm:p-6 lg:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <Link
                      to={serviceSubPath(locale, category.id, sub.id)}
                      onClick={() => onOpenSub(sub.id)}
                      className="text-lg sm:text-xl font-extrabold text-brand-text-primary leading-snug hover:text-brand-gold transition-colors no-underline"
                    >
                      {sub.name[locale]}
                    </Link>
                    <Link
                      to={serviceSubPath(locale, category.id, sub.id)}
                      onClick={() => onOpenSub(sub.id)}
                      className="text-xs sm:text-sm text-brand-gold hover:text-brand-gold-dark font-bold inline-flex items-center gap-1 cursor-pointer no-underline shrink-0"
                    >
                      <span>{labels.readMore}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <ServiceDetailContent
                    locale={locale}
                    category={category}
                    sub={sub}
                    dictionary={d}
                    compact
                  />

                  <div className="mt-6 pt-4 border-t border-brand-offwhite flex flex-wrap gap-4">
                    <Link
                      to={serviceSubPath(locale, category.id, sub.id)}
                      onClick={() => onOpenSub(sub.id)}
                      className="text-xs sm:text-sm text-brand-gold hover:text-brand-gold-dark font-bold inline-flex items-center gap-1 no-underline"
                    >
                      <span>{labels.readMore}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => onOpenAppointment(sub.id)}
                      className="text-xs sm:text-sm text-brand-text-muted hover:text-brand-text-primary font-semibold cursor-pointer"
                    >
                      {d.appointmentBtn}
                    </button>
                  </div>
                </div>
              </article>
            );
            })}
          </div>

          {category.subServices.length === 0 && (
            <div className="text-center py-12 bg-brand-white rounded-2xl border border-brand-sectiongray">
              <p className="text-sm text-brand-text-muted">
                {locale === 'uz'
                  ? 'Ushbu kategoriyada muolajalar ro\'yxati hozircha mavjud emas.'
                  : locale === 'ru'
                    ? 'Список процедур для этой категории пока недоступен.'
                    : 'Procedure list for this category is not available yet.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
