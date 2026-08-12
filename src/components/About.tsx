import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Globe2, MapPin, ArrowRight } from 'lucide-react';
import { Locale } from '../types';
import { DICTIONARY, CLINIC_RATINGS, GALLERY_IMAGS, CLINIC_EXPERIENCE_YEARS } from '../data';
import { CLINIC_HISTORY } from '../data/clinicHistoryContent';
import {
  APPOINTMENT_LINK_REL,
  APPOINTMENT_LINK_TARGET,
  LIEGE_BRANCH_MAP_OPEN_URL,
  RADE_SKIN_CLINIC_WEBSITE,
  resolveClinicRatingUrl,
} from '../config/links';
import { pagePath } from '../routing/paths';
import ClinicAdvantagesCards from './ClinicAdvantagesCards';

interface AboutProps {
  locale: Locale;
  onOpenAppointment: () => void;
  dictionary?: any;
}

export default function About({ locale, onOpenAppointment, dictionary }: AboutProps) {
  const d = dictionary || DICTIONARY[locale];
  const [activeGalleryIdx, setActiveGalleryIdx] = useState<number | null>(null);

  useEffect(() => {
    if (activeGalleryIdx === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveGalleryIdx(null);
      } else if (event.key === 'ArrowLeft') {
        setActiveGalleryIdx((prev) =>
          prev !== null ? (prev - 1 + GALLERY_IMAGS.length) % GALLERY_IMAGS.length : null
        );
      } else if (event.key === 'ArrowRight') {
        setActiveGalleryIdx((prev) =>
          prev !== null ? (prev + 1) % GALLERY_IMAGS.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeGalleryIdx]);

  const showPrevGalleryImage = (event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveGalleryIdx((prev) =>
      prev !== null ? (prev - 1 + GALLERY_IMAGS.length) % GALLERY_IMAGS.length : null
    );
  };

  const showNextGalleryImage = (event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveGalleryIdx((prev) =>
      prev !== null ? (prev + 1) % GALLERY_IMAGS.length : null
    );
  };

  return (
    <section id="about-page" className="py-16 bg-brand-white">
      <div className="site-container">
        {/* Core content row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold text-brand-gold tracking-widest uppercase py-1 px-3 bg-brand-gold-light/10 rounded-full">
              {d.navAbout}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text-primary tracking-tight mt-4">
              {d.aboutHeader}
            </h1>
            <p className="text-brand-text-secondary mt-6 leading-relaxed text-sm sm:text-base font-light">
              {d.aboutParagraph1}
            </p>
            <p className="text-brand-text-secondary mt-4 leading-relaxed text-sm sm:text-base font-light">
              {d.aboutParagraph2}
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-4 bg-brand-offwhite rounded-xl border border-brand-sectiongray">
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-gold block">{CLINIC_EXPERIENCE_YEARS}+</span>
                <span className="text-xs text-brand-text-muted font-medium">{d.yearsActive}</span>
              </div>
              <div className="p-4 bg-brand-offwhite rounded-xl border border-brand-sectiongray">
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-gold block">50,000+</span>
                <span className="text-xs text-brand-text-muted font-medium">{locale === 'uz' ? "Tuzalgan bemorlar" : locale === 'ru' ? "Счастливых пациентов" : "Healed Patient Cases"}</span>
              </div>
            </div>
          </motion.div>

          {/* Clinic video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden h-[320px] sm:h-[400px] border border-slate-150 shadow-lg bg-black"
          >
            <iframe
              src="https://www.youtube.com/embed/Hb8W-e1HZ_g"
              title={locale === 'uz' ? 'Radeski klinikasi haqida video' : locale === 'ru' ? 'Видео о клинике Radeski' : 'About Radeski Clinic video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>
        </div>

        {/* History & strategic evolution */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mb-20"
        >
          <div className="rounded-3xl border border-brand-gold/25 bg-gradient-to-br from-brand-offwhite via-brand-white to-brand-gold-light/10 p-8 sm:p-10 lg:p-12 shadow-sm">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                {CLINIC_HISTORY.eyebrow[locale]}
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-text-primary tracking-tight">
                {CLINIC_HISTORY.title[locale]}
              </h2>
              <p className="mt-3 text-base sm:text-lg font-medium text-brand-text-secondary leading-relaxed">
                {CLINIC_HISTORY.subtitle[locale]}
              </p>
              <p className="mt-4 text-sm sm:text-base text-brand-text-muted font-light leading-relaxed">
                {CLINIC_HISTORY.intro[locale]}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-text-muted mr-1">
                {CLINIC_HISTORY.evolutionLabel[locale]}:
              </span>
              {CLINIC_HISTORY.evolutionSteps.map((step, idx) => (
                <span key={step[locale]} className="inline-flex items-center gap-2">
                  <span className="rounded-full border border-brand-gold/30 bg-white px-3 py-1.5 text-xs font-semibold text-brand-text-primary shadow-xs">
                    {step[locale]}
                  </span>
                  {idx < CLINIC_HISTORY.evolutionSteps.length - 1 && (
                    <ArrowRight className="hidden sm:block h-3.5 w-3.5 text-brand-gold/70 shrink-0" aria-hidden />
                  )}
                </span>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CLINIC_HISTORY.stats.map((stat) => (
                <div
                  key={stat.label[locale]}
                  className="rounded-2xl border border-brand-sectiongray bg-white/80 px-5 py-4 text-center sm:text-left"
                >
                  <span className="text-2xl font-extrabold text-brand-gold block">{stat.value}</span>
                  <span className="text-xs text-brand-text-muted font-medium mt-1 block">{stat.label[locale]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 relative">
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-gold/60 via-brand-gold/30 to-transparent hidden sm:block" aria-hidden />
            <div className="space-y-8">
              {CLINIC_HISTORY.stages.map((stage, idx) => (
                <motion.article
                  key={stage.id}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -16 : 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="relative sm:pl-14"
                >
                  <div className="hidden sm:flex absolute left-3 top-6 h-6 w-6 items-center justify-center rounded-full border-2 border-brand-gold bg-brand-white shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-brand-gold" />
                  </div>
                  <div className="rounded-2xl border border-brand-sectiongray bg-brand-white p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-brand-gold bg-brand-gold-light/15 px-2.5 py-1 rounded-full">
                          {stage.year[locale]}
                        </span>
                        <h3 className="mt-3 text-xl sm:text-2xl font-extrabold text-brand-text-primary tracking-tight">
                          {stage.title[locale]}
                        </h3>
                        <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-brand-text-muted">
                          <MapPin className="h-4 w-4 text-brand-gold shrink-0" aria-hidden />
                          {stage.place[locale]}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {stage.paragraphs.map((para) => (
                        <p key={para[locale].slice(0, 48)} className="text-sm sm:text-base text-brand-text-secondary leading-relaxed font-light">
                          {para[locale]}
                        </p>
                      ))}
                    </div>
                    {stage.highlight && (
                      <div className="mt-5 flex flex-wrap gap-3">
                        <a
                          href={RADE_SKIN_CLINIC_WEBSITE}
                          target={APPOINTMENT_LINK_TARGET}
                          rel={APPOINTMENT_LINK_REL}
                          className="inline-flex items-center gap-2 rounded-xl border border-brand-gold/30 bg-brand-gold-light/10 px-4 py-2.5 text-xs font-bold text-brand-text-primary hover:bg-brand-gold/10 transition-colors"
                        >
                          <Globe2 className="h-4 w-4 text-brand-gold" aria-hidden />
                          {stage.highlight[locale]}
                        </a>
                        <a
                          href={LIEGE_BRANCH_MAP_OPEN_URL}
                          target={APPOINTMENT_LINK_TARGET}
                          rel={APPOINTMENT_LINK_REL}
                          className="inline-flex items-center gap-2 rounded-xl border border-brand-sectiongray px-4 py-2.5 text-xs font-semibold text-brand-text-secondary hover:border-brand-gold/40 transition-colors"
                        >
                          <MapPin className="h-4 w-4" aria-hidden />
                          {locale === 'uz' ? 'Belgiya manzili' : locale === 'ru' ? 'Адрес в Бельгии' : 'Belgium address'}
                        </a>
                      </div>
                    )}
                    {stage.id === 'kokand' && (
                      <div className="mt-5">
                        <a
                          href={pagePath(locale, 'qoqon')}
                          className="inline-flex items-center gap-2 text-sm font-bold text-brand-gold hover:text-brand-gold-dark transition-colors"
                        >
                          {locale === 'uz' ? 'Qo‘qon filiali sahifasi' : locale === 'ru' ? 'Страница филиала в Коканде' : 'Kokand branch page'}
                          <ArrowRight className="h-4 w-4" aria-hidden />
                        </a>
                      </div>
                    )}
                    {stage.id === 'fergana' && (
                      <div className="mt-5">
                        <a
                          href={pagePath(locale, 'branches')}
                          className="inline-flex items-center gap-2 text-sm font-bold text-brand-gold hover:text-brand-gold-dark transition-colors"
                        >
                          {locale === 'uz' ? 'Barcha filiallar' : locale === 'ru' ? 'Все филиалы' : 'All branches'}
                          <ArrowRight className="h-4 w-4" aria-hidden />
                        </a>
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Benefits cards bento grid */}
        <div className="mb-20">
          <ClinicAdvantagesCards locale={locale} dictionary={d} variant="wide" showHeading />
        </div>

        {/* Sterility & Safety module */}
        <div className="bg-brand-sectiongray p-8 sm:p-12 rounded-3xl border border-brand-gold/20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20">
          <div className="md:col-span-8">
            <span className="text-brand-gold font-bold text-xs uppercase tracking-wider block mb-2">{locale === 'uz' ? "Sterilizatsiya va xavfsizlik" : locale === 'ru' ? "Стерилизация и безопасность" : "Sterility Standards"}</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text-primary tracking-tight">
              {d.safetyTitle}
            </h3>
            <p className="text-brand-text-secondary text-sm sm:text-base mt-4 leading-relaxed font-light">
              {d.safetyDesc}
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <button
              onClick={onOpenAppointment}
              className="py-3 px-6 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs rounded-xl active:scale-98 transition-all shadow-lg shadow-brand-gold/10 cursor-pointer"
            >
              {locale === 'uz' ? "Sterillik kafolati bilan yozilish" : locale === 'ru' ? "Запись со стандартом стерильности" : "Book safe clinical consult"}
            </button>
          </div>
        </div>

        {/* Gallery grid */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-text-primary tracking-tight">
              {locale === 'uz' ? "Fotogalereya" : locale === 'ru' ? "Фотогалерея клиники" : "Clinic photo-tour"}
            </h3>
            <p className="text-brand-text-muted text-xs sm:text-sm mt-2">
              {locale === 'uz' ? "Radeski klinikasining ichki va modern kabinet ko'rinishlari" : locale === 'ru' ? "Посмотрите на условия нашего стационара и передовое аппаратное оснащение" : "Explore our clinical treatment, consulting rooms, and high-tech devices"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {GALLERY_IMAGS.map((img, idx) => (
              <button
                key={img.name}
                type="button"
                onClick={() => setActiveGalleryIdx(idx)}
                className="group relative h-48 rounded-2xl overflow-hidden shadow-xs hover:shadow-md cursor-pointer border border-brand-sectiongray active:scale-99 transition-all"
              >
                <img
                  src={img.src}
                  alt={`Radeski clinic ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Trust Platform Ratings */}
        <div className="mt-20 border-t border-brand-sectiongray pt-10 text-center">
          <p className="text-xs font-bold text-brand-text-muted uppercase tracking-widest">{d.ratingsTitle}</p>
          <div className="flex justify-center gap-6 sm:gap-14 flex-wrap mt-6">
            {CLINIC_RATINGS.map((plat) => {
              const reviewUrl = resolveClinicRatingUrl(plat.platform, plat.url);
              const inner = (
                <>
                  <span className="text-xl">{plat.logo}</span>
                  <div className="text-left leading-none">
                    <span className="font-extrabold text-brand-text-primary text-sm sm:text-base leading-none block">
                      {plat.rating} / 5.0
                    </span>
                    <span className="text-[10px] text-brand-text-muted uppercase tracking-wider font-light leading-none">
                      {plat.platform} ({plat.count}+ {d.reviewsCount})
                    </span>
                  </div>
                </>
              );

              return reviewUrl ? (
                <a
                  key={plat.platform}
                  href={reviewUrl}
                  target={APPOINTMENT_LINK_TARGET}
                  rel={APPOINTMENT_LINK_REL}
                  className="flex items-center gap-3 hover:text-brand-gold transition-colors cursor-pointer"
                  aria-label={plat.platform}
                >
                  {inner}
                </a>
              ) : (
                <div key={plat.platform} className="flex items-center gap-3">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeGalleryIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveGalleryIdx(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a121e]/92 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setActiveGalleryIdx(null);
              }}
              className="absolute top-4 right-4 text-white hover:text-slate-300 p-2.5 hover:bg-white/10 rounded-full transition-all z-10"
              aria-label={locale === 'uz' ? 'Yopish' : locale === 'ru' ? 'Закрыть' : 'Close'}
            >
              <X className="w-6 h-6" />
            </button>

            <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/80 text-xs font-mono tracking-wider">
              {activeGalleryIdx + 1} / {GALLERY_IMAGS.length}
            </span>

            <div
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={GALLERY_IMAGS[activeGalleryIdx].src}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  src={GALLERY_IMAGS[activeGalleryIdx].src}
                  alt={`Radeski clinic ${activeGalleryIdx + 1}`}
                  className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
                />
              </AnimatePresence>

              <button
                type="button"
                onClick={showPrevGalleryImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                aria-label={locale === 'uz' ? 'Oldingi rasm' : locale === 'ru' ? 'Предыдущее' : 'Previous'}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={showNextGalleryImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                aria-label={locale === 'uz' ? 'Keyingi rasm' : locale === 'ru' ? 'Следующее' : 'Next'}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
