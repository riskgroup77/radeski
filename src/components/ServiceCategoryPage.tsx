import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, CornerUpLeft } from 'lucide-react';
import { Locale, ServiceCategory } from '../types';
import { DICTIONARY } from '../data';
import { servicesListPath } from '../routing/paths';
import MediaImage from './MediaImage';
import { getServiceLucideIcon, resolveSubServiceIcon } from '../utils/serviceIcons';

interface ServiceCategoryPageProps {
  locale: Locale;
  category: ServiceCategory;
  dictionary?: Record<string, string>;
  onOpenAppointment: (serviceId?: string) => void;
  onBackToList: () => void;
}

export default function ServiceCategoryPage({
  locale,
  category,
  dictionary,
  onOpenAppointment,
  onBackToList,
}: ServiceCategoryPageProps) {
  const d = dictionary || DICTIONARY[locale];

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
          {category.image ? (
            <div className="relative aspect-[21/9] sm:aspect-[16/7] min-h-[220px] sm:min-h-[280px] overflow-hidden bg-brand-offwhite">
              <MediaImage
                src={category.image}
                alt={category.title[locale]}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ) : (
            <div className="p-8 sm:p-10 bg-brand-dark-navy flex items-center gap-4">
              <div className="w-14 h-14 bg-brand-gold/15 rounded-2xl flex items-center justify-center border border-brand-gold/25">
                {renderIcon(category.icon, 'w-7 h-7 text-brand-gold')}
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
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-brand-text-secondary font-light leading-relaxed max-w-4xl">
              {category.description[locale]}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenAppointment(category.id)}
                className="inline-flex items-center gap-2 px-5 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer shadow-sm"
              >
                <span>{d.appointmentBtn}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 sm:mt-12">
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-text-primary tracking-tight mb-2">
            {locale === 'uz' ? 'Ushbu yo\'nalishdagi muolajalar' : locale === 'ru' ? 'Процедуры в этом направлении' : 'Procedures in this specialty'}
          </h2>
          <p className="text-sm text-brand-text-muted font-light mb-6">
            {locale === 'uz'
              ? 'Quyida ushbu xizmat kategoriyasiga kiradigan barcha muolajalar va ularning batafsil tavsifi keltirilgan.'
              : locale === 'ru'
                ? 'Ниже представлен полный перечень процедур этой категории с подробным описанием.'
                : 'Below is the full list of procedures in this category with detailed descriptions.'}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
            {category.subServices.map((sub) => (
              <article
                key={sub.id}
                id={`service-sub-${sub.id}`}
                className="bg-brand-white border border-brand-sectiongray rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all"
              >
                {sub.image ? (
                  <div className="relative aspect-[16/10] min-h-[180px] overflow-hidden bg-brand-offwhite">
                    <MediaImage
                      src={sub.image}
                      alt={sub.name[locale]}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ) : (
                  <div className="p-5 sm:p-6 pb-0 flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-gold-light/10 rounded-xl flex items-center justify-center border border-brand-gold-light/20 shrink-0">
                      {renderIcon(resolveSubServiceIcon(sub, category.icon), 'w-5 h-5 text-brand-gold')}
                    </div>
                  </div>
                )}

                <div className={`p-5 sm:p-6 ${sub.image ? '' : 'pt-3'}`}>
                  <h3 className="text-lg font-extrabold text-brand-text-primary leading-snug">
                    {sub.name[locale]}
                  </h3>
                  <p className="mt-3 text-sm text-brand-text-secondary font-light leading-relaxed">
                    {sub.description[locale]}
                  </p>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-start gap-2 text-xs text-brand-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span>
                        {locale === 'uz'
                          ? 'Malakali mutaxassis nazorati ostida bajariladi'
                          : locale === 'ru'
                            ? 'Выполняется под контролем квалифицированного специалиста'
                            : 'Performed under qualified specialist supervision'}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenAppointment(sub.id)}
                    className="mt-5 text-xs sm:text-sm text-brand-gold hover:text-brand-gold-dark font-bold inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>{d.appointmentBtn}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
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
