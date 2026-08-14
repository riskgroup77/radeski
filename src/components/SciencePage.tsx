import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, ChevronRight, Play } from 'lucide-react';
import type { Locale } from '../types';
import { SCIENCE } from '../data/scienceContent';
import { doctorsListPath } from '../routing/paths';
import MediaImage from './MediaImage';
import AppointmentBookingLink from './AppointmentBookingLink';
import PageHeroBanner from './PageHeroBanner';

interface SciencePageProps {
  locale: Locale;
}

const IMG = {
  hero: '/science/science-hero.webp',
  patients: '/science/science-patients.webp',
  ethics: '/science/science-ethics.webp',
  doctors: '/science/science-doctors.webp',
  research: '/science/science-research.webp',
  data: '/science/science-data.webp',
  publish: '/science/science-publish.webp',
  protocols: '/science/science-protocols.webp',
  conference: '/science/science-conference.webp',
  international: '/science/science-international.webp',
  mentorship: '/science/science-mentorship.webp',
  future: '/science/science-future.webp',
} as const;

const ACTIVITY_IMAGES: Record<string, string> = {
  '01': IMG.research,
  '02': IMG.data,
  '03': IMG.publish,
  '04': IMG.protocols,
  '05': IMG.conference,
  '06': IMG.international,
  '07': IMG.mentorship,
};

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

function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-8 sm:mb-10">
      {eyebrow && (
        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-brand-gold">
          {eyebrow}
        </span>
      )}
      <h2 className="text-xl font-extrabold leading-tight tracking-tight text-brand-text-primary sm:text-2xl lg:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export default function SciencePage({ locale }: SciencePageProps) {
  const c = SCIENCE;

  return (
    <section id="science-page" className="min-h-screen bg-brand-offwhite pb-12 sm:pb-16">
      <PageHeroBanner
        image={IMG.hero}
        badge={c.eyebrow[locale]}
        title={c.title[locale]}
        titleAccent={c.subtitle[locale]}
        description={c.heroIntro[locale]}
        appointmentLabel={ctaAppointment[locale]}
        secondaryCta={
          <Link
            to={doctorsListPath(locale)}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/80 bg-white px-6 py-3.5 text-sm font-bold text-brand-text-primary no-underline shadow-lg shadow-black/10 transition-colors hover:bg-white/90"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-gold/40">
              <Play className="ml-0.5 h-3 w-3 fill-brand-gold text-brand-gold" />
            </span>
            {ctaDoctors[locale]}
          </Link>
        }
      />

      <div className="mb-10 border-b border-brand-sectiongray bg-brand-white sm:mb-14">
        <div className="site-container p-6 sm:p-8">
          <p className="max-w-3xl border-l-4 border-brand-gold pl-4 text-sm font-light leading-relaxed text-brand-text-secondary sm:pl-5 sm:text-base">
            {c.heroDescription[locale]}
          </p>
          <p className="mt-4 max-w-3xl text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">
            {c.environment[locale]}
          </p>
        </div>
      </div>

      <div className="site-container">
        {/* Formula */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 overflow-hidden rounded-3xl border border-brand-gold/25 bg-brand-white shadow-sm sm:mb-16"
        >
          <div className="relative min-h-[160px] sm:min-h-[200px]">
            <MediaImage src={IMG.future} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-brand-dark-navy/82" />
            <div className="relative p-6 sm:p-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-gold">
                {c.formulaTitle[locale]}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {c.formulaSteps.map((step, i) => (
                  <div key={step.uz} className="flex items-center gap-2">
                    <span className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white sm:text-sm">
                      {step[locale]}
                    </span>
                    {i < c.formulaSteps.length - 1 && (
                      <ChevronRight className="hidden h-4 w-4 text-brand-gold sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* For patients */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm sm:mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[240px] bg-brand-offwhite lg:min-h-[420px]">
              <MediaImage
                src={IMG.patients}
                alt={c.forPatients.title[locale]}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <SectionHeading eyebrow={c.forPatients.title[locale]} title={c.forPatients.question[locale]} />
              <p className="mb-5 text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">
                {c.forPatients.intro[locale]}
              </p>
              <p className="mb-3 text-sm font-semibold text-brand-text-primary">
                {c.forPatients.scienceHelpsTitle[locale]}
              </p>
              <ul className="space-y-2">
                {c.forPatients.scienceHelps.map((item) => (
                  <li key={item.uz} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                    {item[locale]}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-l-4 border-brand-gold pl-4 text-sm font-light text-brand-text-secondary">
                {c.forPatients.qualityNote[locale]}
              </p>
            </div>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm sm:mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="order-2 flex flex-col justify-center p-6 sm:p-8 lg:order-1 lg:p-10">
              <h3 className="mb-4 text-lg font-extrabold text-brand-text-primary sm:text-xl">
                {c.forPatients.learningTitle[locale]}
              </h3>
              <p className="mb-5 text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">
                {c.forPatients.learningIntro[locale]}
              </p>
              <p className="mb-3 text-sm font-semibold text-brand-text-primary">
                {c.forPatients.cultureTitle[locale]}
              </p>
              <ul className="space-y-2">
                {c.forPatients.culture.map((item) => (
                  <li key={item.uz} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                    {item[locale]}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative order-1 min-h-[240px] bg-brand-offwhite lg:order-2 lg:min-h-[380px]">
              <MediaImage
                src={IMG.doctors}
                alt={c.forPatients.learningTitle[locale]}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.article>

        {/* Ethics */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm sm:mb-16"
        >
          <div className="relative min-h-[180px] sm:min-h-[240px]">
            <MediaImage src={IMG.ethics} alt={c.ethics.title[locale]} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy via-brand-dark-navy/55 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">{c.ethics.title[locale]}</span>
              <p className="mt-2 max-w-3xl text-sm font-light text-white/90 sm:text-base">{c.ethics.intro[locale]}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 sm:p-8">
            <p className="rounded-2xl border border-brand-sectiongray bg-brand-offwhite p-5 text-sm font-light leading-relaxed text-brand-text-secondary">
              {c.ethics.voluntary[locale]}
            </p>
            <p className="rounded-2xl border border-brand-gold/20 bg-brand-gold-light/10 p-5 text-sm font-semibold leading-relaxed text-brand-text-primary">
              {c.ethics.principle[locale]}
            </p>
          </div>
        </motion.article>

        {/* For doctors */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm sm:mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[240px] bg-brand-offwhite lg:min-h-[380px]">
              <MediaImage
                src={IMG.mentorship}
                alt={c.forDoctors.subtitle[locale]}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <SectionHeading eyebrow={c.forDoctors.title[locale]} title={c.forDoctors.subtitle[locale]} />
              <p className="mb-5 text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">
                {c.forDoctors.intro[locale]}
              </p>
              <p className="mb-3 text-sm font-semibold text-brand-text-primary">{c.forDoctors.rolesTitle[locale]}</p>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {c.forDoctors.roles.map((role) => (
                  <li key={role.uz} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                    {role[locale]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.article>

        {/* Activities */}
        <div className="mb-12 sm:mb-16">
          <SectionHeading title={c.activities.title[locale]} />
          <div className="space-y-8">
            {c.activities.items.map((item, index) => (
              <motion.article
                key={item.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                className="overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <div className="relative min-h-[220px] bg-brand-offwhite lg:min-h-[320px]">
                    <MediaImage
                      src={ACTIVITY_IMAGES[item.num]}
                      alt={item.title[locale]}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute left-4 top-4 rounded-xl bg-brand-dark-navy/85 px-3 py-1.5">
                      <span className="text-sm font-extrabold text-brand-gold">{item.num}</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-8">
                    <h3 className="mb-3 text-lg font-extrabold text-brand-text-primary">{item.title[locale]}</h3>
                    <p className="mb-4 text-sm font-light leading-relaxed text-brand-text-secondary">
                      {item.description[locale]}
                    </p>
                    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {item.bullets.map((b) => (
                        <li key={b.uz} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                          {b[locale]}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
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
        </div>
      </div>
    </section>
  );
}
