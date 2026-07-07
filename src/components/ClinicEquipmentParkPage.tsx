import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, CornerUpLeft, Cpu } from 'lucide-react';
import type { Locale, PriceItem, ServiceCategory } from '../types';
import { EQUIPMENT_PARK_PAGE } from '../data/advantagePagesContent';
import { SERVICE_CATEGORIES } from '../data';
import { pagePath, serviceCategoryPath } from '../routing/paths';
import MediaImage from './MediaImage';
import ClinicEquipmentSection from './ClinicEquipmentSection';
import AppointmentBookingLink from './AppointmentBookingLink';

interface ClinicEquipmentParkPageProps {
  locale: Locale;
  prices?: PriceItem[];
  serviceCategories?: ServiceCategory[];
}

export default function ClinicEquipmentParkPage({
  locale,
  prices,
  serviceCategories = SERVICE_CATEGORIES,
}: ClinicEquipmentParkPageProps) {
  const content = EQUIPMENT_PARK_PAGE;
  const apparatusCategory =
    serviceCategories.find((c) => c.id === 'apparatnaya-kosmetologiya') ??
    SERVICE_CATEGORIES.find((c) => c.id === 'apparatnaya-kosmetologiya')!;

  return (
    <section id="clinic-equipment-page" className="py-12 sm:py-16 bg-brand-offwhite min-h-screen">
      <div className="site-container">
        <Link
          to={pagePath(locale, 'home')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-brand-text-secondary hover:text-brand-text-primary bg-brand-white hover:bg-brand-offwhite px-3.5 py-2 rounded-xl transition-all no-underline mb-8 border border-brand-sectiongray"
        >
          <CornerUpLeft className="w-4 h-4" />
          {locale === 'uz' ? 'Bosh sahifaga qaytish' : locale === 'ru' ? 'На главную' : 'Back to home'}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-brand-white border border-brand-sectiongray rounded-3xl overflow-hidden shadow-sm mb-10"
        >
          <div className="relative aspect-[21/9] sm:aspect-[16/7] min-h-[200px] overflow-hidden bg-brand-offwhite">
            <MediaImage
              src={content.heroImage}
              alt={content.title[locale]}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy/80 via-brand-dark-navy/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <span className="text-xs font-bold text-brand-gold tracking-widest uppercase">
                {locale === 'uz' ? 'Afzalliklar' : locale === 'ru' ? 'Преимущества' : 'Advantages'}
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight leading-tight">
                {content.title[locale]}
              </h1>
              <p className="text-sm sm:text-base text-white/85 mt-2 max-w-2xl font-light">
                {content.subtitle[locale]}
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-sm sm:text-base text-brand-text-secondary font-light leading-relaxed border-l-4 border-brand-gold pl-4 sm:pl-5 bg-brand-gold-light/5 rounded-r-xl py-4">
              {content.overview[locale]}
            </p>
          </div>
        </motion.div>

        <div className="space-y-6 mb-10">
          {content.blocks.map((block, index) => (
            <motion.article
              key={block.title.uz}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-brand-white border border-brand-sectiongray rounded-2xl p-5 sm:p-6 lg:p-8"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {block.image && (
                  <div className="w-full sm:w-40 h-32 sm:h-auto sm:min-h-[120px] rounded-xl overflow-hidden shrink-0 bg-brand-offwhite">
                    <MediaImage src={block.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="w-5 h-5 text-brand-gold shrink-0" />
                    <h2 className="text-lg font-extrabold text-brand-text-primary">{block.title[locale]}</h2>
                  </div>
                  <p className="text-sm text-brand-text-secondary font-light leading-relaxed">
                    {block.description[locale]}
                  </p>
                  {block.bullets && (
                    <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {block.bullets[locale].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-brand-text-secondary font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="bg-brand-white border border-brand-sectiongray rounded-2xl p-5 sm:p-6 lg:p-8 shadow-xs">
          <ClinicEquipmentSection locale={locale} category={apparatusCategory} prices={prices} />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to={serviceCategoryPath(locale, 'apparatnaya-kosmetologiya')}
            className="inline-flex items-center gap-2 px-5 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs sm:text-sm rounded-xl transition-all no-underline"
          >
            {content.ctaLabel[locale]}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            to={pagePath(locale, 'prices')}
            className="inline-flex items-center gap-2 px-5 py-3 bg-brand-white border border-brand-sectiongray hover:border-brand-gold/40 text-brand-text-primary font-bold text-xs sm:text-sm rounded-xl transition-all no-underline"
          >
            {locale === 'uz' ? 'Preyskurant' : locale === 'ru' ? 'Прейскурант' : 'Price list'}
            <ArrowUpRight className="w-4 h-4 text-brand-gold" />
          </Link>
          <AppointmentBookingLink className="inline-flex items-center gap-2 px-5 py-3 text-brand-text-muted hover:text-brand-text-primary font-semibold text-xs sm:text-sm no-underline">
            {locale === 'uz' ? 'Qabulga yozilish' : locale === 'ru' ? 'Записаться' : 'Book appointment'}
          </AppointmentBookingLink>
        </div>
      </div>
    </section>
  );
}
