import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, CornerUpLeft, Sparkles } from 'lucide-react';
import type { Locale } from '../types';
import { TECHNOLOGIES_PAGE } from '../data/advantagePagesContent';
import { doctorsListPath, pagePath, serviceCategoryPath } from '../routing/paths';
import MediaImage from './MediaImage';
import AppointmentBookingLink from './AppointmentBookingLink';

interface TechnologiesPageProps {
  locale: Locale;
}

export default function TechnologiesPage({ locale }: TechnologiesPageProps) {
  const content = TECHNOLOGIES_PAGE;

  return (
    <section id="technologies-page" className="py-12 sm:py-16 bg-brand-offwhite min-h-screen">
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

        <div className="space-y-8">
          {content.blocks.map((block, index) => (
            <motion.article
              key={block.title.uz}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.05 }}
              className="bg-brand-white border border-brand-sectiongray rounded-2xl overflow-hidden shadow-xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,280px)_1fr] gap-0">
                {block.image && (
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[240px] bg-brand-offwhite">
                    <MediaImage
                      src={block.image}
                      alt={block.title[locale]}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-5 sm:p-6 lg:p-8">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold-light/10 border border-brand-gold-light/20 flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5 text-brand-gold" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-extrabold text-brand-text-primary leading-snug pt-1">
                      {block.title[locale]}
                    </h2>
                  </div>
                  <p className="text-sm text-brand-text-secondary font-light leading-relaxed">
                    {block.description[locale]}
                  </p>
                  {block.bullets && (
                    <ul className="mt-4 space-y-2">
                      {block.bullets[locale].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-brand-text-secondary font-light"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
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

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to={doctorsListPath(locale)}
            className="inline-flex items-center gap-2 px-5 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs sm:text-sm rounded-xl transition-all no-underline"
          >
            {content.ctaLabel[locale]}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            to={serviceCategoryPath(locale, 'dermatoonkologiya')}
            className="inline-flex items-center gap-2 px-5 py-3 bg-brand-white border border-brand-sectiongray hover:border-brand-gold/40 text-brand-text-primary font-bold text-xs sm:text-sm rounded-xl transition-all no-underline"
          >
            {locale === 'uz' ? 'Dermato-onkologiya' : locale === 'ru' ? 'Дерматоонкология' : 'Dermato-oncology'}
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
