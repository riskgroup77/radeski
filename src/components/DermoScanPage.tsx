import { motion } from 'motion/react';
import {
  CheckCircle2,
  ChevronRight,
  Smartphone,
} from 'lucide-react';
import type { Locale } from '../types';
import { DERMO_SCAN } from '../data/dermoScanContent';
import MediaImage from './MediaImage';
import PageHeroBanner, { heroPrimaryCtaSolidClass } from './PageHeroBanner';
import DermoScanAppInstallSection, { DERMOSCAN_APP_INSTALL_SECTION_ID } from './DermoScanAppInstallSection';

interface DermoScanPageProps {
  locale: Locale;
}

function scrollToAppInstall() {
  document.getElementById(DERMOSCAN_APP_INSTALL_SECTION_ID)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

function DownloadAppButton({
  locale,
  className,
}: {
  locale: Locale;
  className: string;
}) {
  return (
    <button type="button" onClick={scrollToAppInstall} className={className}>
      <Smartphone className="h-4 w-4 shrink-0" />
      {DERMO_SCAN.appInstall.heroDownloadCta[locale]}
    </button>
  );
}

const IMG = {
  hero: '/dermoscan/dermoscan-hero.webp',
  analysis: '/dermoscan/dermoscan-analysis.webp',
  monitor: '/dermoscan/dermoscan-monitor.webp',
  philosophy: '/dermoscan/dermoscan-philosophy.webp',
  patient: '/dermoscan/dermoscan-patient.webp',
  doctor: '/dermoscan/dermoscan-doctor.webp',
  ecosystem: '/dermoscan/dermoscan-ecosystem.webp',
  science: '/dermoscan/dermoscan-science.webp',
  together: '/dermoscan/dermoscan-together.webp',
  security: '/dermoscan/dermoscan-security.webp',
  app: '/dermoscan/dermoscan-app.webp',
  future: '/dermoscan/dermoscan-future.webp',
  risk: '/dermoscan/dermoscan-risk.webp',
  treatment: '/dermoscan/dermoscan-treatment.webp',
} as const;

const FEATURE_IMAGES: Record<string, string> = {
  '01': IMG.analysis,
  '02': IMG.monitor,
  '03': IMG.risk,
  '04': IMG.app,
  '05': IMG.treatment,
  '06': IMG.patient,
  '07': IMG.together,
};

const unificationImages = [IMG.app, IMG.philosophy, IMG.analysis, IMG.monitor];

function HeroBanner({ locale }: { locale: Locale }) {
  const c = DERMO_SCAN;

  return (
    <PageHeroBanner
      image={IMG.hero}
      badge={c.eyebrow[locale]}
      title={c.title[locale]}
      titleAccent={c.subtitle[locale]}
      description={c.heroIntro[locale]}
      primaryCta={
        <DownloadAppButton
          locale={locale}
          className={`${heroPrimaryCtaSolidClass} w-full cursor-pointer border-0 sm:w-auto`}
        />
      }
    />
  );
}

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

export default function DermoScanPage({ locale }: DermoScanPageProps) {
  const c = DERMO_SCAN;

  return (
    <section id="dermoscan-page" className="min-h-screen bg-brand-offwhite pb-24 sm:pb-16">
      <HeroBanner locale={locale} />
      <div className="mb-10 border-b border-brand-sectiongray bg-brand-white sm:mb-14">
        <div className="site-container p-6 sm:p-8">
          <p className="max-w-3xl border-l-4 border-brand-gold pl-4 text-sm font-light leading-relaxed text-brand-text-secondary sm:pl-5 sm:text-base">
            {c.heroDescription[locale]}
          </p>
        </div>
      </div>

      <div className="site-container">
        <DermoScanAppInstallSection locale={locale} />

        {/* Four pillars with photos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14"
        >
          <h3 className="mb-6 text-lg font-extrabold text-brand-text-primary sm:text-xl">
            {c.unificationTitle[locale]}
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.unificationItems.map((item, i) => (
              <article
                key={item.uz}
                className="overflow-hidden rounded-2xl border border-brand-sectiongray bg-brand-white shadow-xs"
              >
                <div className="relative aspect-[4/3] bg-brand-offwhite">
                  <MediaImage
                    src={unificationImages[i]}
                    alt={item[locale]}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="px-4 py-3 text-sm font-semibold text-brand-text-primary">{item[locale]}</p>
              </article>
            ))}
          </div>
        </motion.div>

        {/* Principle quote over photo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-12 overflow-hidden rounded-3xl border border-brand-gold/25 shadow-sm sm:mb-16"
        >
          <div className="relative min-h-[180px] sm:min-h-[220px]">
            <MediaImage src={IMG.together} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-brand-dark-navy/82" />
            <div className="relative flex min-h-[180px] items-center p-6 sm:min-h-[220px] sm:p-10">
              <p className="max-w-3xl text-base font-semibold leading-relaxed text-white sm:text-xl">
                {c.principle[locale]}
              </p>
            </div>
          </div>
        </motion.div>

        {/* What is DermaScan — split */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm sm:mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[240px] bg-brand-offwhite lg:min-h-[440px]">
              <MediaImage
                src={IMG.app}
                alt={c.whatIs.title[locale]}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <SectionHeading title={c.whatIs.title[locale]} />
              <div className="space-y-4">
                {c.whatIs.paragraphs.map((p) => (
                  <p key={p.uz} className="text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">
                    {p[locale]}
                  </p>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-brand-sectiongray bg-brand-offwhite p-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-brand-text-secondary">
                    {c.whatIs.notOnly[locale]}
                  </span>
                  <p className="mt-2 text-sm font-medium italic text-brand-text-primary">
                    {c.whatIs.notOnlyQuestion[locale]}
                  </p>
                </div>
                <div className="rounded-xl border border-brand-gold/20 bg-brand-gold-light/10 p-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-brand-gold">
                    {c.whatIs.butAlso[locale]}
                  </span>
                  <p className="mt-2 text-sm font-medium italic text-brand-text-primary">
                    {c.whatIs.butAlsoQuestion[locale]}
                  </p>
                </div>
              </div>
              <p className="mt-6 border-l-4 border-brand-gold pl-4 text-sm font-light text-brand-text-secondary">
                {c.whatIs.dynamicsNote[locale]}
              </p>
            </div>
          </div>
        </motion.article>

        {/* Philosophy — split reverse */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm sm:mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="order-2 flex flex-col justify-center p-6 sm:p-8 lg:order-1 lg:p-10">
              <span className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-gold">
                {c.philosophy.title[locale]}
              </span>
              <h2 className="mb-4 text-xl font-extrabold text-brand-text-primary sm:text-2xl">
                {c.philosophy.modelTitle[locale]}
              </h2>
              <p className="mb-3 text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">
                {c.philosophy.intro[locale]}
              </p>
              <p className="mb-3 text-sm font-light leading-relaxed text-brand-text-secondary">
                {c.philosophy.doctorQualities[locale]}
              </p>
              <p className="text-sm font-light leading-relaxed text-brand-text-secondary">
                {c.philosophy.aiQualities[locale]}
              </p>
              <p className="mt-6 text-sm font-bold text-brand-gold">{c.philosophy.principleTagline[locale]}</p>
            </div>
            <div className="relative order-1 min-h-[240px] bg-brand-offwhite lg:order-2 lg:min-h-[440px]">
              <MediaImage
                src={IMG.philosophy}
                alt={c.philosophy.modelTitle[locale]}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="border-t border-brand-sectiongray p-6 sm:p-8 lg:p-10">
            <p className="mb-3 text-sm font-light text-brand-text-secondary">{c.philosophy.principle[locale]}</p>
            <p className="mb-4 text-sm font-semibold text-brand-text-primary">{c.philosophy.aiHelpsTitle[locale]}</p>
            <ul className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {c.philosophy.aiHelps.map((item) => (
                <li key={item.uz} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                  {item[locale]}
                </li>
              ))}
            </ul>
            <p className="border-t border-brand-sectiongray pt-4 text-xs font-light italic text-brand-text-secondary">
              {c.philosophy.finalNote[locale]}
            </p>
          </div>
        </motion.article>

        {/* Features — photo split cards */}
        <div className="mb-12 sm:mb-16">
          <SectionHeading title={c.features.title[locale]} />
          <div className="space-y-8">
            {c.features.items.map((feature, index) => {
              const reverse = index % 2 === 1;
              const image = FEATURE_IMAGES[feature.num];
              return (
                <motion.article
                  key={feature.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  className="overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                    <div className="relative min-h-[220px] bg-brand-offwhite lg:min-h-[340px]">
                      <MediaImage
                        src={image}
                        alt={feature.title[locale]}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute left-4 top-4 rounded-xl bg-brand-dark-navy/85 px-3 py-1.5">
                        <span className="text-sm font-extrabold text-brand-gold">{feature.num}</span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-8">
                      <h3 className="mb-3 text-lg font-extrabold text-brand-text-primary">{feature.title[locale]}</h3>
                      <p className="mb-4 text-sm font-light leading-relaxed text-brand-text-secondary">
                        {feature.description[locale]}
                      </p>

                      {'note' in feature && feature.note && (
                        <p className="mb-4 rounded-lg border border-brand-gold/15 bg-brand-gold-light/10 px-3 py-2 text-xs text-brand-gold-dark">
                          {feature.note[locale]}
                        </p>
                      )}

                      {'highlight' in feature && feature.highlight && (
                        <p className="mb-4 text-sm font-semibold text-brand-text-primary">{feature.highlight[locale]}</p>
                      )}

                      {'bullets' in feature && feature.bullets && (
                        <ul className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {feature.bullets.map((b) => (
                            <li key={b.uz} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                              {b[locale]}
                            </li>
                          ))}
                        </ul>
                      )}

                      {'priorities' in feature && feature.priorities && (
                        <div className="mb-4 flex flex-wrap gap-3">
                          {feature.priorities.map((p) => (
                            <div
                              key={p.level.uz}
                              className={`min-w-[140px] rounded-xl border px-4 py-3 text-center ${
                                p.color === 'green'
                                  ? 'border-emerald-200 bg-emerald-50'
                                  : p.color === 'amber'
                                    ? 'border-amber-200 bg-amber-50'
                                    : 'border-red-200 bg-red-50'
                              }`}
                            >
                              <span
                                className={`mb-1 block text-xs font-bold uppercase tracking-wide ${
                                  p.color === 'green'
                                    ? 'text-emerald-700'
                                    : p.color === 'amber'
                                      ? 'text-amber-700'
                                      : 'text-red-700'
                                }`}
                              >
                                {p.level[locale]}
                              </span>
                              <span className="text-xs font-light text-brand-text-secondary">{p.label[locale]}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {'timeline' in feature && feature.timeline && (
                        <div className="mb-4 flex flex-wrap items-center gap-2">
                          {feature.timeline.map((step, i) => (
                            <div key={step.uz} className="flex items-center gap-2">
                              <span className="rounded-lg border border-brand-sectiongray bg-brand-offwhite px-3 py-1.5 text-xs font-semibold text-brand-text-primary">
                                {step[locale]}
                              </span>
                              {i < feature.timeline!.length - 1 && (
                                <ChevronRight className="hidden h-4 w-4 text-brand-gold sm:block" />
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {'flow' in feature && feature.flow && (
                        <ol className="space-y-3">
                          {feature.flow.map((step, i) => (
                            <li key={`${step.role.uz}-${i}`} className="flex items-start gap-3">
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-gold/15 text-xs font-extrabold text-brand-gold">
                                {i + 1}
                              </span>
                              <div>
                                <span className="text-xs font-bold uppercase text-brand-gold">{step.role[locale]}</span>
                                <p className="text-sm font-light text-brand-text-secondary">{step.action[locale]}</p>
                              </div>
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Ecosystem — photo background */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-12 overflow-hidden rounded-3xl text-white sm:mb-16"
        >
          <MediaImage src={IMG.ecosystem} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-brand-dark-navy/88" />
          <div className="relative p-6 sm:p-8 lg:p-10">
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-brand-gold">
              {c.ecosystem.title[locale]}
            </span>
            <h2 className="mb-4 text-xl font-extrabold leading-tight sm:text-2xl lg:text-3xl">
              {c.ecosystem.platform[locale]}
            </h2>
            <p className="mb-8 max-w-3xl text-sm font-light leading-relaxed text-white/75">
              {c.ecosystem.intro[locale]}
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {c.ecosystem.components.map((comp) => (
                <div
                  key={comp.uz}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-xs font-medium text-white/90 sm:text-sm"
                >
                  {comp[locale]}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Science + Future */}
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2 sm:mb-16">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm"
          >
            <div className="relative aspect-[16/9] bg-brand-offwhite">
              <MediaImage src={IMG.science} alt={c.science.title[locale]} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="mb-3 text-lg font-extrabold text-brand-text-primary">{c.science.title[locale]}</h3>
              <p className="mb-4 text-sm font-light leading-relaxed text-brand-text-secondary">
                {c.science.intro[locale]}
              </p>
              <ul className="mb-4 space-y-2">
                {c.science.researchAreas.map((area) => (
                  <li key={area.uz} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                    {area[locale]}
                  </li>
                ))}
              </ul>
              <p className="border-l-4 border-brand-gold pl-3 text-xs font-light italic text-brand-text-secondary">
                {c.science.transition[locale]}
              </p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm"
          >
            <div className="relative aspect-[16/9] bg-brand-offwhite">
              <MediaImage src={IMG.future} alt={c.future.title[locale]} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="mb-3 text-lg font-extrabold text-brand-text-primary">{c.future.title[locale]}</h3>
              <p className="mb-4 text-sm font-light leading-relaxed text-brand-text-secondary">
                {c.future.intro[locale]}
              </p>
              <ul className="space-y-2">
                {c.future.directions.map((dir) => (
                  <li key={dir.uz} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                    {dir[locale]}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>

        {/* Security */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm sm:mb-16"
        >
          <div className="relative min-h-[180px] sm:min-h-[240px]">
            <MediaImage src={IMG.security} alt={c.security.title[locale]} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy via-brand-dark-navy/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">{c.security.title[locale]}</span>
              <p className="mt-2 max-w-3xl text-sm font-light text-white/90 sm:text-base">{c.security.intro[locale]}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
            {c.security.principles.map((principle) => (
              <div key={principle.title.uz} className="rounded-2xl border border-brand-sectiongray bg-brand-offwhite p-5">
                <h4 className="mb-2 text-sm font-extrabold text-brand-text-primary">{principle.title[locale]}</h4>
                <p className="text-xs font-light leading-relaxed text-brand-text-secondary">
                  {principle.description[locale]}
                </p>
              </div>
            ))}
          </div>
        </motion.article>

        {/* For patient + doctor */}
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-brand-gold/20 bg-brand-white shadow-sm"
          >
            <div className="relative aspect-[16/10] bg-brand-offwhite">
              <MediaImage src={IMG.patient} alt={c.forPatient.title[locale]} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="mb-3 text-lg font-extrabold text-brand-text-primary">{c.forPatient.title[locale]}</h3>
              <p className="mb-4 text-sm font-light text-brand-text-secondary">{c.forPatient.intro[locale]}</p>
              <ul className="mb-6 space-y-2">
                {c.forPatient.benefits.map((b) => (
                  <li key={b.uz} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                    {b[locale]}
                  </li>
                ))}
              </ul>
              <p className="border-t border-brand-gold/20 pt-4 text-sm font-semibold italic text-brand-text-primary">
                {c.forPatient.tagline[locale]}
              </p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm"
          >
            <div className="relative aspect-[16/10] bg-brand-offwhite">
              <MediaImage src={IMG.doctor} alt={c.forDoctor.title[locale]} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="mb-3 text-lg font-extrabold text-brand-text-primary">{c.forDoctor.title[locale]}</h3>
              <p className="mb-4 text-sm font-light text-brand-text-secondary">{c.forDoctor.intro[locale]}</p>
              <ul className="space-y-2">
                {c.forDoctor.benefits.map((b) => (
                  <li key={b.uz} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                    {b[locale]}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>

        <DownloadAppButton
          locale={locale}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-gold px-5 py-3 text-xs font-bold text-white transition-all hover:bg-brand-gold-dark sm:text-sm cursor-pointer border-0"
        />
      </div>
    </section>
  );
}
