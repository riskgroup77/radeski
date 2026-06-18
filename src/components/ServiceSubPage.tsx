import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CornerUpLeft } from 'lucide-react';
import { Locale, ServiceCategory, ServiceDetail } from '../types';
import { DICTIONARY } from '../data';
import { serviceCategoryPath, servicesListPath } from '../routing/paths';
import ServiceDetailContent from './ServiceDetailContent';

interface ServiceSubPageProps {
  locale: Locale;
  category: ServiceCategory;
  sub: ServiceDetail;
  dictionary?: Record<string, string>;
  onBackToCategory: () => void;
  onBackToList: () => void;
}

export default function ServiceSubPage({
  locale,
  category,
  sub,
  dictionary,
  onBackToCategory,
  onBackToList,
}: ServiceSubPageProps) {
  const d = dictionary || DICTIONARY[locale];

  return (
    <section id={`service-sub-page-${sub.id}`} className="py-12 sm:py-16 bg-brand-offwhite min-h-screen">
      <div className="site-container">
        <div className="flex flex-wrap gap-2 mb-8">
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

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-brand-white border border-brand-sectiongray rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm"
        >
          <ServiceDetailContent locale={locale} category={category} sub={sub} dictionary={d} />
        </motion.div>
      </div>
    </section>
  );
}
