import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import type { Locale } from '../types';
import { MALAKA_OSHIRISH } from '../data/malakaOshirishContent';
import MediaImage from './MediaImage';
import PageHeroBanner from './PageHeroBanner';
import { openAppointmentBooking } from '../config/links';

interface MalakaOshirishPageProps {
  locale: Locale;
}

const IMG = {
  hero: '/malaka-oshirish/malaka-hero.webp',
  workshop: '/malaka-oshirish/malaka-workshop.webp',
  masterclass: '/malaka-oshirish/malaka-masterclass.webp',
  dermoscopy: '/malaka-oshirish/malaka-dermoscopy.webp',
  laser: '/malaka-oshirish/malaka-laser.webp',
  certificate: '/malaka-oshirish/malaka-certificate.webp',
  youngDoctors: '/malaka-oshirish/malaka-young-doctors.webp',
  international: '/malaka-oshirish/malaka-international.webp',
} as const;

const PROGRAM_IMAGES: Record<string, string> = {
  'certification-courses': IMG.certificate,
  residency: IMG.youngDoctors,
  masterclasses: IMG.masterclass,
  'hands-on-training': IMG.workshop,
  'laser-training': IMG.laser,
  'international-programs': IMG.international,
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

export default function MalakaOshirishPage({ locale }: MalakaOshirishPageProps) {
  const c = MALAKA_OSHIRISH;

  return (
    <section id="malaka-oshirish-page" className="min-h-screen bg-brand-offwhite pb-12 sm:pb-16">
      <PageHeroBanner
        image={IMG.hero}
        badge={c.eyebrow[locale]}
        title={c.title[locale]}
        titleAccent={c.subtitle[locale]}
        description={c.heroIntro[locale]}
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
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 overflow-hidden rounded-3xl border border-brand-gold/25 bg-brand-white shadow-sm sm:mb-16"
        >
          <div className="relative min-h-[160px] sm:min-h-[200px]">
            <MediaImage src={IMG.dermoscopy} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
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

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm sm:mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[240px] bg-brand-offwhite lg:min-h-[420px]">
              <MediaImage
                src={IMG.youngDoctors}
                alt={c.forWho.title[locale]}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <SectionHeading eyebrow={c.forWho.title[locale]} title={c.forWho.question[locale]} />
              <p className="mb-5 text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">
                {c.forWho.intro[locale]}
              </p>
              <p className="mb-3 text-sm font-semibold text-brand-text-primary">
                {c.forWho.audienceTitle[locale]}
              </p>
              <ul className="space-y-2">
                {c.forWho.audience.map((item) => (
                  <li key={item.uz} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                    {item[locale]}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-l-4 border-brand-gold pl-4 text-sm font-light text-brand-text-secondary">
                {c.forWho.note[locale]}
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
              <SectionHeading eyebrow={c.advantages.title[locale]} title={c.advantages.intro[locale]} />
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {c.advantages.items.map((item) => (
                  <li key={item.uz} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                    {item[locale]}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative order-1 min-h-[240px] bg-brand-offwhite lg:order-2 lg:min-h-[380px]">
              <MediaImage
                src={IMG.workshop}
                alt={c.advantages.title[locale]}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.article>

        <div className="mb-12 sm:mb-16">
          <SectionHeading title={c.programs.title[locale]} />
          <div className="space-y-8">
            {c.programs.items.map((item, index) => (
              <motion.article
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                className="scroll-mt-28 overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
                >
                  <div className="relative min-h-[220px] bg-brand-offwhite lg:min-h-[320px]">
                    <MediaImage
                      src={PROGRAM_IMAGES[item.id]}
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
                      {item.bullets.map((bullet) => (
                        <li key={bullet.uz} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                          {bullet[locale]}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-brand-gold/25 bg-gradient-to-br from-brand-dark-navy via-brand-dark-navy to-brand-gold/20 p-6 text-center sm:p-10"
        >
          <h2 className="text-xl font-extrabold text-white sm:text-2xl">{c.cta.title[locale]}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-light leading-relaxed text-white/85 sm:text-base">
            {c.cta.desc[locale]}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => openAppointmentBooking()}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-gold px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-gold-dark cursor-pointer"
            >
              {locale === 'uz' ? 'Qabulga yozilish' : locale === 'ru' ? 'Записаться' : 'Book appointment'}
            </button>
            <a
              href={`tel:${c.cta.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white no-underline transition-colors hover:bg-white/15"
            >
              <Phone className="h-4 w-4" />
              {c.cta.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
