import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  CornerUpLeft,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  Activity,
  Cpu,
  Stethoscope,
  Building2,
  Home,
  BadgeCheck,
} from 'lucide-react';
import type { Locale } from '../types';
import type { DaavlinSectionId } from '../routing/paths';
import {
  DAAVLIN_ABOUT,
  DAAVLIN_CABINS,
  DAAVLIN_CLINIC,
  DAAVLIN_CONTACTS,
  DAAVLIN_DISEASES,
  DAAVLIN_RESULTS,
  DAAVLIN_SECTION_MEDIA,
  DAAVLIN_SECTION_NAV,
  DAAVLIN_SHARED,
} from '../data/daavlinFotoKabinalariContent';
import {
  daavlinSectionPath,
  doctorsListPath,
  pagePath,
  serviceSubPath,
} from '../routing/paths';
import MediaImage from './MediaImage';
import AppointmentBookingLink from './AppointmentBookingLink';

interface DaavlinFotoKabinalariPageProps {
  locale: Locale;
  section: DaavlinSectionId;
}

const benefitIcons = [ShieldCheck, Sparkles, Activity, Cpu];
const audienceIcons = [Stethoscope, Building2, Home];

function SectionNav({ locale, section }: { locale: Locale; section: DaavlinSectionId }) {
  return (
    <nav
      aria-label="Daavlin Distributor sections"
      className="mb-8 rounded-2xl border border-brand-sectiongray bg-brand-white p-1.5 sm:p-2 shadow-sm"
    >
      <ul className="m-0 grid list-none grid-cols-2 gap-1.5 p-0 sm:grid-cols-3 lg:grid-cols-6">
        {DAAVLIN_SECTION_NAV.map((item) => {
          const active = item.id === section;
          return (
            <li key={item.id} className="min-w-0">
              <Link
                to={daavlinSectionPath(locale, item.id)}
                aria-current={active ? 'page' : undefined}
                className={`flex h-full min-h-[3rem] w-full items-center justify-center rounded-xl px-2 py-2.5 text-center text-[11px] font-semibold leading-snug no-underline transition-all sm:min-h-[3.25rem] sm:text-xs lg:text-[13px] ${
                  active
                    ? 'bg-brand-gold text-white shadow-sm'
                    : 'border border-transparent text-brand-text-secondary hover:border-brand-sectiongray hover:bg-brand-offwhite hover:text-brand-text-primary'
                }`}
              >
                <span className="block w-full text-balance">{item.label[locale]}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function Hero({
  locale,
  section,
  title,
  subtitle,
  tagline,
}: {
  locale: Locale;
  section: DaavlinSectionId;
  title: string;
  subtitle: string;
  tagline?: string;
}) {
  const s = DAAVLIN_SHARED;
  const heroSrc = DAAVLIN_SECTION_MEDIA[section].hero;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm"
    >
      <div className="relative min-h-[200px] overflow-hidden bg-brand-offwhite aspect-[21/9] sm:aspect-[16/7]">
        <MediaImage src={heroSrc} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy/88 via-brand-dark-navy/40 to-brand-dark-navy/10" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">{s.eyebrow[locale]}</span>
          <p className="mt-1 text-sm font-medium text-white/70">{s.brandTitle[locale]}</p>
          <h1 className="mt-1 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 max-w-2xl text-sm font-light text-white/85 sm:text-base">{subtitle}</p>
          {tagline ? (
            <p className="mt-3 max-w-3xl text-xs font-medium text-brand-gold-light sm:text-sm">{tagline}</p>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-brand-sectiongray bg-brand-white p-6 shadow-xs sm:p-8 ${className}`}>
      {children}
    </div>
  );
}

function Paragraphs({ locale, items }: { locale: Locale; items: Record<Locale, string>[] }) {
  return (
    <div className="space-y-4">
      {items.map((p) => (
        <p key={p.uz} className="text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">
          {p[locale]}
        </p>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function MidBand({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      className="overflow-hidden rounded-3xl border border-brand-sectiongray shadow-sm"
    >
      <div className="relative aspect-[21/9] min-h-[140px] sm:aspect-[16/6]">
        <MediaImage src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-navy/25 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
}

function PhotoGallery({ images, alts }: { images: string[]; alts: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {images.map((src, i) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="overflow-hidden rounded-2xl border border-brand-sectiongray bg-brand-offwhite shadow-xs"
        >
          <div className="relative aspect-[4/3]">
            <MediaImage src={src} alt={alts[i] ?? ''} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function SplitSection({
  locale,
  image,
  imageAlt,
  title,
  paragraphs,
  reverse = false,
}: {
  locale: Locale;
  image: string;
  imageAlt: string;
  title: string;
  paragraphs: Record<Locale, string>[];
  reverse?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <div className="relative min-h-[220px] bg-brand-offwhite lg:min-h-full">
          <MediaImage src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <h2 className="mb-4 text-lg font-extrabold text-brand-text-primary sm:text-xl">{title}</h2>
          <Paragraphs locale={locale} items={paragraphs} />
        </div>
      </div>
    </motion.article>
  );
}

function AboutBody({ locale }: { locale: Locale }) {
  const c = DAAVLIN_ABOUT;
  const s = DAAVLIN_SHARED;
  const media = DAAVLIN_SECTION_MEDIA.about;
  const partnershipImg = media.gallery?.[0] ?? media.mid;
  const clinicImg = media.gallery?.[1] ?? media.mid;
  const resultsImg = media.gallery?.[2] ?? media.mid;
  const missionBand = media.gallery?.[3] ?? media.mid;
  const cabinImg = media.gallery?.[4] ?? media.mid;

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Safety ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl border border-brand-gold/30 bg-brand-dark-navy shadow-sm"
      >
        <div className="absolute inset-0 opacity-35">
          <MediaImage src={media.mid} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-navy via-brand-dark-navy/92 to-brand-dark-navy/75" />
        <div className="relative flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gold/20">
            <BadgeCheck className="h-6 w-6 text-brand-gold" />
          </div>
          <p className="text-sm font-light leading-relaxed text-white/90 sm:text-base">{c.safeBanner[locale]}</p>
        </div>
      </motion.div>

      {/* Official representation — editorial split */}
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[260px] bg-brand-offwhite lg:min-h-[420px]">
            <MediaImage
              src={partnershipImg}
              alt={c.sections[0].title[locale]}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-brand-dark-navy/10" />
            <span className="absolute bottom-5 left-5 rounded-full bg-brand-dark-navy/80 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-gold">
              {c.storyEyebrow[locale]}
            </span>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">Daavlin · Uzbekistan</p>
            <h2 className="mt-2 text-xl font-extrabold tracking-tight text-brand-text-primary sm:text-2xl">
              {c.sections[0].title[locale]}
            </h2>
            <div className="mt-5 space-y-4">
              {c.sections[0].paragraphs.map((p) => (
                <p key={p.uz} className="text-sm font-light leading-relaxed text-brand-text-secondary sm:text-[15px]">
                  {p[locale]}
                </p>
              ))}
            </div>
          </div>
        </div>
      </motion.article>

      {/* Mission cinematic band */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl border border-brand-sectiongray shadow-sm"
      >
        <div className="absolute inset-0">
          <MediaImage src={missionBand} alt={c.missionLabel[locale]} className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-navy/92 via-brand-dark-navy/78 to-brand-dark-navy/45" />
        </div>
        <div className="relative grid grid-cols-1 gap-8 p-7 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">{c.missionLabel[locale]}</p>
            <blockquote className="mt-4 text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl lg:text-[1.65rem]">
              “{c.missionQuote[locale]}”
            </blockquote>
          </div>
          <div className="flex items-end">
            <p className="border-l-2 border-brand-gold pl-4 text-sm font-light leading-relaxed text-white/80">
              {c.missionAside[locale]}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Stats ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-brand-sectiongray bg-brand-white p-5 shadow-sm sm:p-7"
      >
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
          {c.stats.map((stat) => (
            <div key={stat.value} className="text-center lg:text-left">
              <p className="text-2xl font-extrabold tracking-tight text-brand-gold sm:text-3xl">{stat.value}</p>
              <p className="mt-1.5 text-xs font-medium leading-snug text-brand-text-secondary sm:text-sm">
                {stat.label[locale]}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-5 border-t border-brand-sectiongray pt-4 text-[11px] font-light text-brand-text-muted">
          {c.statsNote[locale]}
        </p>
      </motion.div>

      {/* Audiences */}
      <div>
        <h2 className="mb-5 px-1 text-lg font-extrabold text-brand-text-primary sm:text-xl">{c.audiencesTitle[locale]}</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {c.audiences.map((a, i) => {
            const Icon = audienceIcons[i] ?? Sparkles;
            return (
              <motion.article
                key={a.title.uz}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-brand-sectiongray bg-brand-white p-5 shadow-xs sm:p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/10">
                  <Icon className="h-5 w-5 text-brand-gold" />
                </div>
                <h3 className="mb-2 text-base font-bold text-brand-text-primary">{a.title[locale]}</h3>
                <p className="text-sm font-light leading-relaxed text-brand-text-secondary">{a.text[locale]}</p>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Therapy education */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm"
      >
        <div className="relative aspect-[21/8] min-h-[120px] sm:min-h-[160px]">
          <MediaImage src={cabinImg} alt={c.therapyTitle[locale]} className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy/80 via-brand-dark-navy/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
            <h2 className="text-lg font-extrabold text-white sm:text-xl">{c.therapyTitle[locale]}</h2>
            <p className="mt-1 max-w-2xl text-sm font-light text-white/85">{c.therapyIntro[locale]}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          {c.therapyModes.map((mode, i) => (
            <div
              key={mode.name}
              className={`p-6 sm:p-8 ${i === 0 ? 'border-b border-brand-sectiongray md:border-b-0 md:border-r' : ''}`}
            >
              <span className="inline-block rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-bold text-brand-gold">
                {mode.name}
              </span>
              <h3 className="mt-3 text-base font-extrabold text-brand-text-primary">{mode.title[locale]}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-brand-text-secondary">{mode.text[locale]}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-brand-sectiongray bg-brand-offwhite/60 px-6 py-5 sm:px-8">
          <Paragraphs locale={locale} items={[c.sections[2].paragraphs[0]]} />
        </div>
      </motion.section>

      {/* Benefits with visual accent */}
      <div>
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="px-1 text-lg font-extrabold text-brand-text-primary sm:text-xl">{c.benefitsTitle[locale]}</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {c.benefits.map((b, i) => {
            const Icon = benefitIcons[i] ?? Sparkles;
            const accent = i === 0 ? clinicImg : i === 1 ? resultsImg : null;
            return (
              <motion.article
                key={b.title.uz}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="overflow-hidden rounded-2xl border border-brand-sectiongray bg-brand-white shadow-xs"
              >
                {accent ? (
                  <div className="relative h-28 bg-brand-offwhite sm:h-32">
                    <MediaImage src={accent} alt="" className="h-full w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-white via-transparent to-transparent" />
                  </div>
                ) : null}
                <div className="p-5 sm:p-6">
                  <Icon className="mb-3 h-5 w-5 text-brand-gold" />
                  <h3 className="mb-2 text-base font-bold text-brand-text-primary">{b.title[locale]}</h3>
                  <p className="text-sm font-light leading-relaxed text-brand-text-secondary">{b.text[locale]}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Closing gallery strip */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[partnershipImg, cabinImg, clinicImg, resultsImg].map((src, i) => (
          <motion.div
            key={`${src}-${i}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`overflow-hidden rounded-2xl border border-brand-sectiongray bg-brand-offwhite ${
              i === 0 ? 'col-span-2 aspect-[16/9] lg:col-span-2 lg:aspect-auto lg:min-h-[200px]' : 'aspect-[4/3]'
            }`}
          >
            <MediaImage src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-brand-sectiongray bg-gradient-to-br from-brand-white via-brand-white to-brand-gold/10 p-6 shadow-sm sm:p-8"
      >
        <p className="mb-5 max-w-2xl text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">
          {c.helpNote[locale]}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to={daavlinSectionPath(locale, 'cabins')}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-gold px-5 py-3 text-xs font-bold text-white no-underline hover:bg-brand-gold-dark sm:text-sm"
          >
            {s.ctaExplore[locale]}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            to={daavlinSectionPath(locale, 'contacts')}
            className="inline-flex items-center gap-2 rounded-xl border border-brand-sectiongray bg-brand-white px-5 py-3 text-xs font-bold text-brand-text-primary no-underline sm:text-sm"
          >
            {DAAVLIN_SECTION_NAV.find((n) => n.id === 'contacts')?.label[locale]}
            <ArrowUpRight className="h-4 w-4 text-brand-gold" />
          </Link>
          <Link
            to={daavlinSectionPath(locale, 'radeski-skin-clinic')}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-brand-text-muted no-underline hover:text-brand-text-primary sm:text-sm"
          >
            Radeski Skin Clinic
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

function ClinicBody({ locale }: { locale: Locale }) {
  const c = DAAVLIN_CLINIC;
  const s = DAAVLIN_SHARED;
  const media = DAAVLIN_SECTION_MEDIA['radeski-skin-clinic'];
  const consultImg = media.gallery?.[0] ?? media.mid;
  const cabinImg = media.gallery?.[1] ?? media.mid;
  const branchImg = media.gallery?.[2] ?? media.mid;
  const pathwayBand = media.gallery?.[3] ?? media.mid;
  const lightImg = media.gallery?.[4] ?? media.mid;

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Clinic vs distributor ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl border border-brand-gold/30 bg-brand-dark-navy shadow-sm"
      >
        <div className="absolute inset-0 opacity-30">
          <MediaImage src={media.mid} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-navy via-brand-dark-navy/92 to-brand-dark-navy/70" />
        <div className="relative flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gold/20">
            <Stethoscope className="h-6 w-6 text-brand-gold" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">{c.splitTitle[locale]}</p>
            <p className="mt-2 text-sm font-light leading-relaxed text-white/90 sm:text-base">{c.note[locale]}</p>
          </div>
        </div>
      </motion.div>

      {/* What happens — editorial split */}
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[260px] bg-brand-offwhite lg:min-h-[420px]">
            <MediaImage
              src={consultImg}
              alt={c.sections[0].title[locale]}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy/50 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 rounded-full bg-brand-dark-navy/80 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-gold">
              {c.storyEyebrow[locale]}
            </span>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">Fergana · Kokand</p>
            <h2 className="mt-2 text-xl font-extrabold tracking-tight text-brand-text-primary sm:text-2xl">
              {c.sections[0].title[locale]}
            </h2>
            <div className="mt-5 space-y-4">
              {c.sections[0].paragraphs.map((p) => (
                <p key={p.uz} className="text-sm font-light leading-relaxed text-brand-text-secondary sm:text-[15px]">
                  {p[locale]}
                </p>
              ))}
            </div>
          </div>
        </div>
      </motion.article>

      {/* Promise cinematic band */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl border border-brand-sectiongray shadow-sm"
      >
        <div className="absolute inset-0">
          <MediaImage src={pathwayBand} alt={c.promiseLabel[locale]} className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-navy/92 via-brand-dark-navy/78 to-brand-dark-navy/45" />
        </div>
        <div className="relative grid grid-cols-1 gap-8 p-7 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">{c.promiseLabel[locale]}</p>
            <blockquote className="mt-4 text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl lg:text-[1.65rem]">
              “{c.promiseQuote[locale]}”
            </blockquote>
          </div>
          <div className="flex items-end">
            <p className="border-l-2 border-brand-gold pl-4 text-sm font-light leading-relaxed text-white/80">
              {c.promiseAside[locale]}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-brand-sectiongray bg-brand-white p-5 shadow-sm sm:p-7"
      >
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
          {c.stats.map((stat) => (
            <div key={stat.value + stat.label.uz} className="text-center lg:text-left">
              <p className="text-2xl font-extrabold tracking-tight text-brand-gold sm:text-3xl">{stat.value}</p>
              <p className="mt-1.5 text-xs font-medium leading-snug text-brand-text-secondary sm:text-sm">
                {stat.label[locale]}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Patient pathway 01–04 */}
      <div>
        <div className="mb-5 px-1">
          <h2 className="text-lg font-extrabold text-brand-text-primary sm:text-xl">{c.pathwayTitle[locale]}</h2>
          <p className="mt-2 max-w-3xl text-sm font-light text-brand-text-secondary">{c.pathwayIntro[locale]}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {c.pathway.map((step, i) => (
            <motion.article
              key={step.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-2xl border border-brand-sectiongray bg-brand-white p-5 shadow-xs sm:p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gold/15 text-xs font-extrabold text-brand-gold">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-brand-text-primary">{step.title[locale]}</h3>
              </div>
              <p className="text-sm font-light leading-relaxed text-brand-text-secondary">{step.text[locale]}</p>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Services + cabin visual */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm"
      >
        <div className="relative aspect-[21/8] min-h-[120px] sm:min-h-[160px]">
          <MediaImage src={cabinImg} alt={c.servicesTitle[locale]} className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy/80 via-brand-dark-navy/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
            <h2 className="text-lg font-extrabold text-white sm:text-xl">{c.servicesTitle[locale]}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
          {c.services.map((svc, i) => (
            <div
              key={svc.title.uz}
              className={`p-5 sm:p-6 ${
                i % 2 === 0 ? 'sm:border-r border-brand-sectiongray' : ''
              } ${i < 2 ? 'border-b border-brand-sectiongray' : ''}`}
            >
              <h3 className="text-base font-bold text-brand-text-primary">{svc.title[locale]}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-brand-text-secondary">{svc.text[locale]}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Branches */}
      <div>
        <h2 className="mb-5 px-1 text-lg font-extrabold text-brand-text-primary sm:text-xl">{c.branchesTitle[locale]}</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {c.branches.map((branch, i) => (
            <motion.article
              key={branch.city.uz}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-brand-sectiongray bg-brand-white shadow-xs"
            >
              <div className="relative aspect-[16/9] bg-brand-offwhite">
                <MediaImage
                  src={i === 0 ? branchImg : lightImg}
                  alt={branch.city[locale]}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">{branch.role[locale]}</p>
                  <p className="mt-1 text-lg font-extrabold text-white">{branch.city[locale]}</p>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="mb-2 flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                  <p className="text-sm font-light leading-relaxed text-brand-text-secondary">{branch.text[locale]}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Gallery mosaic */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[consultImg, cabinImg, branchImg, pathwayBand].map((src, i) => (
          <motion.div
            key={`${src}-${i}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`overflow-hidden rounded-2xl border border-brand-sectiongray bg-brand-offwhite ${
              i === 0 ? 'col-span-2 aspect-[16/9] lg:col-span-2 lg:aspect-auto lg:min-h-[200px]' : 'aspect-[4/3]'
            }`}
          >
            <MediaImage src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-brand-sectiongray bg-gradient-to-br from-brand-white via-brand-white to-brand-gold/10 p-6 shadow-sm sm:p-8"
      >
        <p className="mb-5 max-w-2xl text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">
          {c.note[locale]}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to={doctorsListPath(locale)}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-gold px-5 py-3 text-xs font-bold text-white no-underline hover:bg-brand-gold-dark sm:text-sm"
          >
            {s.ctaDoctors[locale]}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <AppointmentBookingLink className="inline-flex items-center gap-2 rounded-xl border border-brand-sectiongray bg-brand-white px-5 py-3 text-xs font-bold text-brand-text-primary no-underline sm:text-sm">
            {s.ctaBook[locale]}
            <ArrowUpRight className="h-4 w-4 text-brand-gold" />
          </AppointmentBookingLink>
          <Link
            to={serviceSubPath(locale, 'dermatologiya', 'fototerapiya')}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-brand-text-muted no-underline hover:text-brand-text-primary sm:text-sm"
          >
            {s.ctaFototerapiya[locale]}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            to={daavlinSectionPath(locale, 'contacts')}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-brand-text-muted no-underline hover:text-brand-text-primary sm:text-sm"
          >
            {DAAVLIN_SECTION_NAV.find((n) => n.id === 'contacts')?.label[locale]}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

function CabinsBody({ locale }: { locale: Locale }) {
  const c = DAAVLIN_CABINS;
  const s = DAAVLIN_SHARED;
  const media = DAAVLIN_SECTION_MEDIA.cabins;
  const homeImg = media.gallery?.[0] ?? media.mid;
  const clinicImg = media.gallery?.[1] ?? media.mid;
  const targetImg = media.gallery?.[2] ?? media.mid;
  const promiseBand = media.gallery?.[3] ?? media.hero;
  const neoluxImg = media.gallery?.[4] ?? media.mid;

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Distributor ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl border border-brand-gold/30 bg-brand-dark-navy shadow-sm"
      >
        <div className="absolute inset-0 opacity-30">
          <MediaImage src={media.mid} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-navy via-brand-dark-navy/92 to-brand-dark-navy/70" />
        <div className="relative flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gold/20">
            <Cpu className="h-6 w-6 text-brand-gold" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              {locale === 'uz' ? 'Rasmiy sotuv · Daavlin' : locale === 'ru' ? 'Официальные продажи · Daavlin' : 'Official sales · Daavlin'}
            </p>
            <p className="mt-2 text-sm font-light leading-relaxed text-white/90 sm:text-base">{c.closing[locale]}</p>
          </div>
        </div>
      </motion.div>

      {/* Editorial intro split */}
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[260px] bg-brand-offwhite lg:min-h-[420px]">
            <MediaImage
              src={neoluxImg}
              alt={c.title[locale]}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy/50 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 rounded-full bg-brand-dark-navy/80 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-gold">
              {c.storyEyebrow[locale]}
            </span>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">Home · Clinic · Practice</p>
            <h2 className="mt-2 text-xl font-extrabold tracking-tight text-brand-text-primary sm:text-2xl">
              {locale === 'uz'
                ? 'To‘liq spektr fototerapiya'
                : locale === 'ru'
                  ? 'Полный спектр фототерапии'
                  : 'Full-spectrum phototherapy'}
            </h2>
            <p className="mt-5 text-sm font-light leading-relaxed text-brand-text-secondary sm:text-[15px]">{c.intro[locale]}</p>
            <p className="mt-4 text-sm font-light leading-relaxed text-brand-text-secondary sm:text-[15px]">{c.introExtra[locale]}</p>
          </div>
        </div>
      </motion.article>

      {/* Promise band */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl border border-brand-sectiongray shadow-sm"
      >
        <div className="absolute inset-0">
          <MediaImage src={promiseBand} alt={c.promiseLabel[locale]} className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-navy/92 via-brand-dark-navy/78 to-brand-dark-navy/45" />
        </div>
        <div className="relative grid grid-cols-1 gap-8 p-7 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">{c.promiseLabel[locale]}</p>
            <blockquote className="mt-4 text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl lg:text-[1.65rem]">
              “{c.promiseQuote[locale]}”
            </blockquote>
          </div>
          <div className="flex items-end">
            <p className="border-l-2 border-brand-gold pl-4 text-sm font-light leading-relaxed text-white/80">
              {c.promiseAside[locale]}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-brand-sectiongray bg-brand-white p-5 shadow-sm sm:p-7"
      >
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
          {c.stats.map((stat) => (
            <div key={stat.value + stat.label.uz} className="text-center lg:text-left">
              <p className="text-2xl font-extrabold tracking-tight text-brand-gold sm:text-3xl">{stat.value}</p>
              <p className="mt-1.5 text-xs font-medium leading-snug text-brand-text-secondary sm:text-sm">
                {stat.label[locale]}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Three directions */}
      <div>
        <h2 className="mb-5 px-1 text-lg font-extrabold text-brand-text-primary sm:text-xl">{c.solutionsTitle[locale]}</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {c.blocks.map((block, i) => (
            <motion.article
              key={block.title.uz}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="overflow-hidden rounded-2xl border border-brand-sectiongray bg-brand-white shadow-xs"
            >
              {'image' in block && block.image ? (
                <div className="relative aspect-[16/11] bg-brand-offwhite">
                  <MediaImage src={block.image} alt={block.title[locale]} className="h-full w-full object-cover" loading="lazy" />
                </div>
              ) : null}
              <div className="p-5 sm:p-6">
                <h3 className="mb-3 text-base font-extrabold text-brand-text-primary">{block.title[locale]}</h3>
                <p className="text-sm font-light leading-relaxed text-brand-text-secondary">{block.text[locale]}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* How to choose */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm"
      >
        <div className="relative aspect-[21/8] min-h-[120px] sm:min-h-[150px]">
          <MediaImage src={clinicImg} alt={c.chooseTitle[locale]} className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy/80 via-brand-dark-navy/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
            <h2 className="text-lg font-extrabold text-white sm:text-xl">{c.chooseTitle[locale]}</h2>
            <p className="mt-1 max-w-2xl text-sm font-light text-white/85">{c.chooseIntro[locale]}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {c.choose.map((item, i) => (
            <div
              key={item.title.uz}
              className={`p-5 sm:p-6 ${i < 2 ? 'border-b border-brand-sectiongray md:border-b-0 md:border-r' : ''}`}
            >
              <h3 className="text-base font-bold text-brand-text-primary">{item.title[locale]}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-brand-text-secondary">{item.text[locale]}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Process 01-04 */}
      <div>
        <h2 className="mb-5 px-1 text-lg font-extrabold text-brand-text-primary sm:text-xl">{c.processTitle[locale]}</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {c.process.map((step, i) => (
            <motion.article
              key={step.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-2xl border border-brand-sectiongray bg-brand-white p-5 shadow-xs"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gold/15 text-xs font-extrabold text-brand-gold">
                {step.step}
              </span>
              <h3 className="mt-3 text-base font-bold text-brand-text-primary">{step.title[locale]}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-brand-text-secondary">{step.text[locale]}</p>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Gallery mosaic before models */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[homeImg, clinicImg, targetImg, promiseBand].map((src, i) => (
          <motion.div
            key={`${src}-${i}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`overflow-hidden rounded-2xl border border-brand-sectiongray bg-brand-offwhite ${
              i === 0 ? 'col-span-2 aspect-[16/9] lg:col-span-2 lg:aspect-auto lg:min-h-[200px]' : 'aspect-[4/3]'
            }`}
          >
            <MediaImage src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
          </motion.div>
        ))}
      </div>

      {/* Rich model lineup (kept & enhanced framing) */}
      <div>
        <h2 className="mb-2 px-1 text-lg font-extrabold text-brand-text-primary sm:text-xl">{c.lineupTitle[locale]}</h2>
        <p className="mb-4 px-1 text-sm font-light text-brand-text-secondary sm:text-base">{c.lineupIntro[locale]}</p>
        <div className="mb-6 flex flex-wrap gap-2 px-1">
          {c.lineup.map((item) => (
            <a
              key={item.id}
              href={`#model-${item.id}`}
              className="rounded-full border border-brand-sectiongray bg-brand-white px-3 py-1.5 text-xs font-semibold text-brand-text-secondary no-underline transition-colors hover:border-brand-gold hover:text-brand-text-primary"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="space-y-6">
          {c.lineup.map((item, index) => (
            <motion.article
              key={item.id}
              id={`model-${item.id}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: Math.min(index * 0.04, 0.16) }}
              className="overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 ${
                  index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="relative min-h-[220px] bg-brand-offwhite lg:min-h-[320px]">
                  <MediaImage
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-brand-dark-navy/85 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-gold">
                    {item.badge[locale]}
                  </div>
                </div>

                <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">Daavlin</p>
                  <h3 className="mt-1 text-xl font-extrabold tracking-tight text-brand-text-primary sm:text-2xl">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-brand-text-primary">{item.tagline[locale]}</p>
                  <p className="mt-3 text-sm font-light leading-relaxed text-brand-text-secondary">
                    {item.summary[locale]}
                  </p>

                  <div className="mt-4 space-y-3">
                    {item.details.map((p) => (
                      <p key={p.uz} className="text-sm font-light leading-relaxed text-brand-text-secondary">
                        {p[locale]}
                      </p>
                    ))}
                  </div>

                  <div className="mt-5">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-brand-text-muted">
                      {locale === 'uz' ? 'Afzalliklar' : locale === 'ru' ? 'Преимущества' : 'Benefits'}
                    </p>
                    <BulletList items={item.benefits[locale]} />
                  </div>

                  <p className="mt-5 rounded-xl border border-brand-sectiongray bg-brand-offwhite/80 px-4 py-3 text-sm font-medium leading-snug text-brand-text-primary">
                    {item.bestFor[locale]}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.specs[locale].map((spec) => (
                      <li
                        key={spec}
                        className="rounded-lg border border-brand-sectiongray bg-brand-white px-2.5 py-1 text-[11px] font-semibold text-brand-text-secondary"
                      >
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <MidBand src={media.hero} alt={c.lineupTitle[locale]} />

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-brand-sectiongray bg-gradient-to-br from-brand-white via-brand-white to-brand-gold/10 p-6 shadow-sm sm:p-8"
      >
        <p className="mb-5 max-w-2xl text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">
          {c.closing[locale]}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to={daavlinSectionPath(locale, 'contacts')}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-gold px-5 py-3 text-xs font-bold text-white no-underline hover:bg-brand-gold-dark sm:text-sm"
          >
            {DAAVLIN_SECTION_NAV.find((n) => n.id === 'contacts')?.label[locale]}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            to={pagePath(locale, 'clinic-equipment')}
            className="inline-flex items-center gap-2 rounded-xl border border-brand-sectiongray bg-brand-white px-5 py-3 text-xs font-bold text-brand-text-primary no-underline sm:text-sm"
          >
            {s.ctaEquipment[locale]}
            <ArrowUpRight className="h-4 w-4 text-brand-gold" />
          </Link>
          <Link
            to={daavlinSectionPath(locale, 'radeski-skin-clinic')}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-brand-text-muted no-underline hover:text-brand-text-primary sm:text-sm"
          >
            Radeski Skin Clinic
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

function ResultsBody({ locale }: { locale: Locale }) {
  const c = DAAVLIN_RESULTS;
  const s = DAAVLIN_SHARED;
  const media = DAAVLIN_SECTION_MEDIA['clinical-results'];
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm sm:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="relative min-h-[200px] bg-brand-offwhite">
          <MediaImage src={media.mid} alt={c.title[locale]} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="flex flex-col justify-center gap-6 p-6 sm:p-8 lg:p-10">
          <div>
            <p className="text-4xl font-extrabold tracking-tight text-brand-gold sm:text-5xl">82%</p>
            <p className="mt-1 text-sm font-medium text-brand-text-primary">
              {locale === 'uz'
                ? 'nb-UVB bo‘yicha orientir: deyarli toza teri'
                : locale === 'ru'
                  ? 'ориентир NB-UVB: практически чистая кожа'
                  : 'NB-UVB benchmark: nearly clear skin'}
            </p>
          </div>
          <div>
            <p className="text-4xl font-extrabold tracking-tight text-brand-dark-navy sm:text-5xl">~5</p>
            <p className="mt-1 text-sm font-medium text-brand-text-secondary">
              {locale === 'uz' ? 'hafta ichida kuzatilgan muddat' : locale === 'ru' ? 'недель — типичный ориентир' : 'weeks — typical benchmark'}
            </p>
          </div>
        </div>
      </motion.div>

      <SplitSection
        locale={locale}
        image={media.gallery?.[1] ?? media.mid}
        imageAlt={c.sections[0].title[locale]}
        title={c.sections[0].title[locale]}
        paragraphs={c.sections[0].paragraphs}
      />
      <SplitSection
        locale={locale}
        image={media.gallery?.[2] ?? media.mid}
        imageAlt={c.sections[1].title[locale]}
        title={c.sections[1].title[locale]}
        paragraphs={c.sections[1].paragraphs}
        reverse
      />

      <Card>
        <h2 className="mb-4 text-base font-extrabold text-brand-text-primary">{c.bulletsTitle[locale]}</h2>
        <BulletList items={c.bullets[locale]} />
      </Card>
      <div className="flex flex-wrap gap-3">
        <Link
          to={pagePath(locale, 'results')}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-gold px-5 py-3 text-xs font-bold text-white no-underline hover:bg-brand-gold-dark sm:text-sm"
        >
          {s.ctaResults[locale]}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <AppointmentBookingLink className="inline-flex items-center gap-2 rounded-xl border border-brand-sectiongray bg-brand-white px-5 py-3 text-xs font-bold text-brand-text-primary no-underline sm:text-sm">
          {s.ctaBook[locale]}
          <ArrowUpRight className="h-4 w-4 text-brand-gold" />
        </AppointmentBookingLink>
      </div>
    </div>
  );
}

function DiseasesBody({ locale }: { locale: Locale }) {
  const c = DAAVLIN_DISEASES;
  const media = DAAVLIN_SECTION_MEDIA['skin-diseases'];
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm lg:grid-cols-2">
        <div className="relative min-h-[220px] bg-brand-offwhite">
          <MediaImage src={media.mid} alt={c.dermTitle[locale]} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <p className="mb-4 text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">{c.intro[locale]}</p>
          <h2 className="mb-2 text-base font-extrabold text-brand-text-primary">{c.dermTitle[locale]}</h2>
          <p className="text-sm font-light leading-relaxed text-brand-text-secondary">{c.dermBody[locale]}</p>
        </div>
      </div>

      <Card className="border-l-4 border-l-brand-gold">
        <h2 className="mb-2 text-base font-extrabold text-brand-text-primary">{c.safeTitle[locale]}</h2>
        <p className="text-sm font-light leading-relaxed text-brand-text-secondary">{c.safeBody[locale]}</p>
      </Card>

      <MidBand src={media.gallery?.[1] ?? media.mid} alt={c.title[locale]} />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {c.blocks.map((block, i) => (
          <article key={block.title.uz} className="overflow-hidden rounded-2xl border border-brand-sectiongray bg-brand-white shadow-xs">
            {i < 2 && media.gallery?.[i] ? (
              <div className="relative aspect-[16/8] bg-brand-offwhite">
                <MediaImage
                  src={media.gallery[i]}
                  alt={block.title[locale]}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : null}
            <div className="p-5 sm:p-6">
              <h3 className="mb-2 text-base font-bold text-brand-text-primary">{block.title[locale]}</h3>
              <p className="text-sm font-light leading-relaxed text-brand-text-secondary">{block.text[locale]}</p>
            </div>
          </article>
        ))}
      </div>

      <Card>
        <h2 className="mb-4 text-base font-extrabold text-brand-text-primary">{c.whenTitle[locale]}</h2>
        <BulletList items={c.whenBullets[locale]} />
      </Card>
    </div>
  );
}

function ContactsBody({ locale }: { locale: Locale }) {
  const c = DAAVLIN_CONTACTS;
  const s = DAAVLIN_SHARED;
  const media = DAAVLIN_SECTION_MEDIA.contacts;
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-brand-sectiongray bg-brand-white shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[240px] bg-brand-offwhite">
          <MediaImage src={media.mid} alt={c.title[locale]} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="p-6 sm:p-8">
          <p className="mb-6 text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">{c.intro[locale]}</p>
          <div className="grid grid-cols-1 gap-3">
            <a
              href={`tel:${s.phonePrimary.replace(/\s/g, '')}`}
              className="flex items-start gap-3 rounded-xl border border-brand-sectiongray bg-brand-offwhite p-4 no-underline"
            >
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
              <div>
                <p className="mb-1 text-xs font-bold uppercase text-brand-text-muted">Tel</p>
                <p className="text-sm font-semibold text-brand-text-primary">{s.phonePrimary}</p>
                <p className="text-sm font-semibold text-brand-text-primary">{s.phoneSecondary}</p>
              </div>
            </a>
            <div className="flex items-start gap-3 rounded-xl border border-brand-sectiongray bg-brand-offwhite p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
              <div>
                <p className="mb-1 text-xs font-bold uppercase text-brand-text-muted">
                  {locale === 'uz' ? 'Manzil' : locale === 'ru' ? 'Адрес' : 'Address'}
                </p>
                <p className="text-sm font-semibold leading-snug text-brand-text-primary">{s.address[locale]}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-brand-sectiongray bg-brand-offwhite p-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
              <div>
                <p className="mb-1 text-xs font-bold uppercase text-brand-text-muted">
                  {locale === 'uz' ? 'Ish vaqti' : locale === 'ru' ? 'Режим работы' : 'Hours'}
                </p>
                <p className="text-sm font-semibold leading-snug text-brand-text-primary">{s.hours[locale]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {media.gallery ? (
        <PhotoGallery
          images={media.gallery}
          alts={[
            locale === 'uz' ? 'Klinik kirish' : locale === 'ru' ? 'Вход в клинику' : 'Clinic entrance',
            locale === 'uz' ? 'Qabulxona' : locale === 'ru' ? 'Ресепшн' : 'Reception',
            locale === 'uz' ? 'Davolash kabinasi' : locale === 'ru' ? 'Кабинет лечения' : 'Treatment cabin',
          ]}
        />
      ) : null}

      <Card>
        <h2 className="mb-4 text-base font-extrabold text-brand-text-primary">{c.helpTitle[locale]}</h2>
        <BulletList items={c.helpBullets[locale]} />
      </Card>
      <Card>
        <h2 className="mb-2 text-base font-extrabold text-brand-text-primary">{c.requestTitle[locale]}</h2>
        <p className="mb-4 text-sm font-light leading-relaxed text-brand-text-secondary">{c.requestBody[locale]}</p>
        <div className="mb-4 flex flex-wrap gap-3">
          <a
            href={`tel:${s.phonePrimary.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-gold px-5 py-3 text-xs font-bold text-white no-underline hover:bg-brand-gold-dark sm:text-sm"
          >
            {s.phonePrimary}
            <Phone className="h-4 w-4" />
          </a>
          <AppointmentBookingLink className="inline-flex items-center gap-2 rounded-xl border border-brand-sectiongray bg-brand-white px-5 py-3 text-xs font-bold text-brand-text-primary no-underline sm:text-sm">
            {s.ctaBook[locale]}
            <ArrowUpRight className="h-4 w-4 text-brand-gold" />
          </AppointmentBookingLink>
          <a
            href="https://radeski-distributor.uz/kontakty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-brand-text-muted no-underline hover:text-brand-text-primary sm:text-sm"
          >
            {s.ctaDistributor[locale]}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <p className="text-xs font-light text-brand-text-muted">{c.legal[locale]}</p>
      </Card>
    </div>
  );
}

export default function DaavlinFotoKabinalariPage({ locale, section }: DaavlinFotoKabinalariPageProps) {
  const meta =
    section === 'radeski-skin-clinic'
      ? DAAVLIN_CLINIC
      : section === 'cabins'
        ? DAAVLIN_CABINS
        : section === 'clinical-results'
          ? DAAVLIN_RESULTS
          : section === 'skin-diseases'
            ? DAAVLIN_DISEASES
            : section === 'contacts'
              ? DAAVLIN_CONTACTS
              : DAAVLIN_ABOUT;

  const tagline = section === 'about' ? DAAVLIN_ABOUT.heroTag[locale] : undefined;

  return (
    <section id="daavlin-foto-kabinalari-page" className="min-h-screen bg-brand-offwhite py-12 sm:py-16">
      <div className="site-container">
        <Link
          to={pagePath(locale, 'home')}
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-brand-sectiongray bg-brand-white px-3.5 py-2 text-xs font-semibold text-brand-text-secondary no-underline transition-all hover:bg-brand-offwhite hover:text-brand-text-primary"
        >
          <CornerUpLeft className="h-4 w-4" />
          {locale === 'uz' ? 'Bosh sahifaga qaytish' : locale === 'ru' ? 'На главную' : 'Back to home'}
        </Link>

        <SectionNav locale={locale} section={section} />
        <Hero
          locale={locale}
          section={section}
          title={meta.title[locale]}
          subtitle={meta.subtitle[locale]}
          tagline={tagline}
        />

        {section === 'about' && <AboutBody locale={locale} />}
        {section === 'radeski-skin-clinic' && <ClinicBody locale={locale} />}
        {section === 'cabins' && <CabinsBody locale={locale} />}
        {section === 'clinical-results' && <ResultsBody locale={locale} />}
        {section === 'skin-diseases' && <DiseasesBody locale={locale} />}
        {section === 'contacts' && <ContactsBody locale={locale} />}
      </div>
    </section>
  );
}
