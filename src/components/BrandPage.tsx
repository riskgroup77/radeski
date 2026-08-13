import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import type { Locale } from '../types';
import { BRAND, BRAND_ARCHITECTURE } from '../data/brandContent';
import { doctorsListPath, pagePath } from '../routing/paths';
import MediaImage from './MediaImage';
import AppointmentBookingLink from './AppointmentBookingLink';

interface BrandPageProps {
  locale: Locale;
}

const PHILOSOPHY_IMAGES = [
  '/brand/brand-patient-first.webp',
  '/brand/brand-evidence.webp',
  '/brand/brand-digital.webp',
  '/brand/brand-academy.webp',
  '/brand/brand-hospital.webp',
];

const ctaDoctors: Record<Locale, string> = {
  uz: 'Shifokorlar bilan tanishing',
  ru: 'Познакомиться с врачами',
  en: 'Meet our physicians',
};

const ctaAppointment: Record<Locale, string> = {
  uz: 'Qabulga yozilish',
  ru: 'Записаться на приём',
  en: 'Book an appointment',
};

export default function BrandPage({ locale }: BrandPageProps) {
  const c = BRAND;
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace('#', '');
    if (!id) return;
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
    return () => window.clearTimeout(t);
  }, [location.hash, location.pathname]);

  return (
    <section id="brand-page" className="min-h-screen bg-brand-offwhite pb-12 sm:pb-16">
      <div className="overflow-hidden border-b border-brand-sectiongray bg-brand-dark-navy">
        <div className="relative min-h-[280px] overflow-hidden aspect-[16/10] sm:aspect-[16/7] sm:min-h-[360px]">
          <MediaImage src="/brand/brand-hero.webp" alt={c.title[locale]} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy via-brand-dark-navy/55 to-brand-dark-navy/15" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
            <div className="site-container">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                {c.eyebrow[locale]}
              </span>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {c.title[locale]}
              </h1>
              <p className="mt-2 max-w-2xl text-base font-light text-white/90 sm:text-lg">{c.subtitle[locale]}</p>
              <p className="mt-4 max-w-3xl text-sm font-light leading-relaxed text-white/75 sm:text-base">
                {c.intro[locale]}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="site-container pt-10 sm:pt-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white p-6 shadow-sm sm:mb-16 sm:p-8 lg:p-10"
        >
          <p className="mb-3 text-sm font-semibold text-brand-text-primary">{c.fourTitle[locale]}</p>
          <p className="mb-2 text-lg font-extrabold tracking-tight text-brand-gold sm:text-xl">{c.fourEn}</p>
          <p className="mb-6 text-sm font-light text-brand-text-secondary">{c.fourLocal[locale]}</p>
          <p className="mb-3 text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">
            {c.expertLine[locale]}
          </p>
          <p className="mb-6 text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">
            {c.humanLine[locale]}
          </p>
          <div className="rounded-2xl border border-brand-gold/20 bg-brand-gold-light/10 p-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-gold">{c.ideaTitle[locale]}</p>
            <p className="text-sm font-semibold leading-relaxed text-brand-text-primary sm:text-base">{c.idea[locale]}</p>
          </div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm sm:mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[240px] bg-brand-offwhite lg:min-h-[360px]">
              <MediaImage
                src="/brand/brand-patient-first.webp"
                alt={c.mission.title[locale]}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <span className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-gold">
                {c.mission.title[locale]}
              </span>
              <p className="text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">
                {c.mission.text[locale]}
              </p>
            </div>
          </div>
        </motion.article>

        <div className="mb-12 sm:mb-16">
          <div className="mb-8">
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-brand-gold">
              {c.philosophy.title[locale]}
            </span>
            <h2 className="text-xl font-extrabold text-brand-text-primary sm:text-2xl">{c.philosophy.intro[locale]}</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {c.philosophy.principles.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm"
              >
                <div className="relative aspect-[16/9] bg-brand-offwhite">
                  <MediaImage src={PHILOSOPHY_IMAGES[i]} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-5 sm:p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">{p.name}</span>
                  <h3 className="mt-1 mb-2 text-lg font-extrabold text-brand-text-primary">{p.title[locale]}</h3>
                  <p className="text-sm font-light leading-relaxed text-brand-text-secondary">{p.text[locale]}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <h2 className="mb-8 text-xl font-extrabold text-brand-text-primary sm:text-2xl lg:text-3xl">
          {c.architectureTitle[locale]}
        </h2>
        <div className="space-y-8">
          {BRAND_ARCHITECTURE.map((item, index) => (
            <motion.article
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              className="scroll-mt-[180px] overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="relative min-h-[220px] bg-brand-offwhite lg:min-h-[300px]">
                  <MediaImage
                    src={item.image}
                    alt={item.title[locale]}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-8">
                  <span className="mb-1 text-xs font-bold uppercase tracking-widest text-brand-gold">
                    {item.name} · {item.role[locale]}
                  </span>
                  <h3 className="mb-3 text-lg font-extrabold text-brand-text-primary">{item.title[locale]}</h3>
                  <p className="text-sm font-light leading-relaxed text-brand-text-secondary">{item.description[locale]}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to={doctorsListPath(locale)}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-gold px-5 py-3 text-xs font-bold text-white no-underline transition-all hover:bg-brand-gold-dark sm:text-sm"
          >
            {ctaDoctors[locale]}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <AppointmentBookingLink
            locale={locale}
            className="inline-flex items-center gap-2 rounded-xl border border-brand-sectiongray bg-brand-white px-5 py-3 text-xs font-bold text-brand-text-primary no-underline transition-all hover:bg-brand-offwhite sm:text-sm"
          >
            {ctaAppointment[locale]}
          </AppointmentBookingLink>
          <Link
            to={pagePath(locale, 'about')}
            className="inline-flex items-center gap-2 rounded-xl border border-brand-sectiongray bg-brand-white px-5 py-3 text-xs font-bold text-brand-text-primary no-underline transition-all hover:bg-brand-offwhite sm:text-sm"
          >
            {locale === 'uz' ? 'Klinika haqida' : locale === 'ru' ? 'О клинике' : 'About the clinic'}
            <CheckCircle2 className="h-4 w-4 text-brand-gold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
