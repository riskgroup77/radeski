import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, ChevronLeft, Play } from 'lucide-react';
import type { Locale } from '../types';
import type { DaavlinModelId } from '../routing/paths';
import { DAAVLIN_CABINS, DAAVLIN_SHARED } from '../data/daavlinFotoKabinalariContent';
import { DAAVLIN_MODEL_DEEP } from '../data/daavlinModelDeepContent';
import {
  daavlinModelPath,
  daavlinSectionPath,
  doctorsListPath,
  pagePath,
} from '../routing/paths';
import MediaImage from './MediaImage';
import AppointmentBookingLink from './AppointmentBookingLink';
import PageHeroBanner, { heroSecondaryCtaSolidClass } from './PageHeroBanner';
import DaavlinFinanceCalculator from './DaavlinFinanceCalculator';

interface DaavlinModelPageProps {
  locale: Locale;
  modelId: DaavlinModelId;
}

const backLabel: Record<Locale, string> = {
  uz: 'Fototerapiya kabinalariga qaytish',
  ru: 'К кабинам фототерапии',
  en: 'Back to phototherapy cabins',
};

const hubLabel: Record<Locale, string> = {
  uz: 'Markaz sahifasi',
  ru: 'Страница центра',
  en: 'Center page',
};

const otherModelsLabel: Record<Locale, string> = {
  uz: 'Boshqa modelllar',
  ru: 'Другие модели',
  en: 'Other models',
};

const benefitsLabel: Record<Locale, string> = {
  uz: 'Asosiy afzalliklar',
  ru: 'Ключевые преимущества',
  en: 'Key benefits',
};

const specsLabel: Record<Locale, string> = {
  uz: 'Texnik belgilari',
  ru: 'Ключевые характеристики',
  en: 'Key specifications',
};

const detailsLabel: Record<Locale, string> = {
  uz: 'Batafsil tavsif',
  ru: 'Подробное описание',
  en: 'In depth',
};

const moreLabel: Record<Locale, string> = {
  uz: 'Batafsil sahifa',
  ru: 'Подробнее',
  en: 'Full details',
};

export default function DaavlinModelPage({ locale, modelId }: DaavlinModelPageProps) {
  const model = DAAVLIN_CABINS.lineup.find((item) => item.id === modelId);
  const deep = DAAVLIN_MODEL_DEEP[modelId];
  const others = DAAVLIN_CABINS.lineup.filter((item) => item.id !== modelId);
  const s = DAAVLIN_SHARED;

  if (!model || !deep) {
    return (
      <section className="min-h-[50vh] bg-brand-offwhite py-16 text-center">
        <p className="text-brand-text-muted">
          {locale === 'uz' ? 'Model topilmadi' : locale === 'ru' ? 'Модель не найдена' : 'Model not found'}
        </p>
        <Link
          to={daavlinSectionPath(locale, 'cabins')}
          className="mt-4 inline-block font-semibold text-brand-gold no-underline"
        >
          {backLabel[locale]}
        </Link>
      </section>
    );
  }

  return (
    <section id={`daavlin-model-${model.id}`} className="min-h-screen bg-brand-offwhite pb-12 sm:pb-16">
      <PageHeroBanner
        image={model.image}
        imageVariant="panoramic"
        productPhoto
        imageAlt={model.name}
        badge={model.badge[locale]}
        title={model.name}
        titleAccent={model.brandAccent?.[locale] ?? 'Daavlin'}
        description={model.tagline[locale]}
        note={model.summary[locale]}
        highlights={model.benefits[locale]}
        specTags={model.specs[locale]}
        highlightFooter={model.bestFor[locale]}
        appointmentLabel={s.ctaBook[locale]}
        secondaryCta={
          <Link to={daavlinSectionPath(locale, 'cabins')} className={heroSecondaryCtaSolidClass}>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-gold/35 bg-brand-gold-light/20">
              <Play className="ml-0.5 h-3 w-3 fill-brand-gold text-brand-gold" />
            </span>
            {backLabel[locale]}
          </Link>
        }
      />

      <div className="site-container pt-8 sm:pt-10">
        <nav
          aria-label={locale === 'uz' ? 'Navigatsiya' : locale === 'ru' ? 'Навигация' : 'Navigation'}
          className="mb-10 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-brand-sectiongray/90 bg-brand-white/95 px-4 py-3.5 shadow-[0_8px_32px_-16px_rgba(7,27,46,0.12)] backdrop-blur-sm sm:px-5"
        >
          <Link
            to={daavlinSectionPath(locale, 'cabins')}
            className="inline-flex items-center gap-2 rounded-xl px-2 py-1.5 text-xs font-semibold text-brand-text-secondary no-underline transition-colors hover:text-brand-gold sm:text-sm"
          >
            <ChevronLeft className="h-4 w-4 shrink-0" />
            {backLabel[locale]}
          </Link>
          <Link
            to={daavlinSectionPath(locale, 'about')}
            className="inline-flex items-center gap-2 rounded-xl px-2 py-1.5 text-xs font-semibold text-brand-text-secondary no-underline transition-colors hover:text-brand-gold sm:text-sm"
          >
            {hubLabel[locale]}
            <ArrowUpRight className="h-4 w-4 shrink-0 opacity-70" />
          </Link>
        </nav>

        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-brand-sectiongray bg-brand-white p-6 shadow-sm sm:p-8"
          >
            <h2 className="mb-3 text-lg font-extrabold text-brand-text-primary">{deep.roleTitle[locale]}</h2>
            <p className="text-sm font-light leading-relaxed text-brand-text-secondary">{deep.roleBody[locale]}</p>
            <h3 className="mb-3 mt-8 text-base font-extrabold text-brand-text-primary">
              {deep.clinicTitle[locale]}
            </h3>
            <p className="text-sm font-light leading-relaxed text-brand-text-secondary">
              {deep.clinicBody[locale]}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-brand-sectiongray bg-brand-white p-6 shadow-sm sm:p-8"
          >
            <h2 className="mb-4 text-lg font-extrabold text-brand-text-primary">{detailsLabel[locale]}</h2>
            <div className="space-y-4">
              {model.details.map((p) => (
                <p key={p.uz} className="text-sm font-light leading-relaxed text-brand-text-secondary">
                  {p[locale]}
                </p>
              ))}
            </div>
            <h3 className="mb-3 mt-8 text-sm font-extrabold uppercase tracking-wide text-brand-text-primary">
              {benefitsLabel[locale]}
            </h3>
            <ul className="space-y-2">
              {model.benefits[locale].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm font-light text-brand-text-secondary">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 rounded-3xl border border-brand-sectiongray bg-brand-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="mb-5 text-lg font-extrabold text-brand-text-primary sm:text-xl">
            {deep.featuresTitle[locale]}
          </h2>
          <ol className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {deep.features.map((feature, index) => (
              <li
                key={feature.uz}
                className="flex gap-3 rounded-2xl border border-brand-sectiongray/80 bg-brand-offwhite/60 p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-dark-navy text-sm font-bold text-brand-gold">
                  {index + 1}
                </span>
                <p className="text-sm font-light leading-relaxed text-brand-text-secondary">{feature[locale]}</p>
              </li>
            ))}
          </ol>
          <h3 className="mb-3 mt-8 text-sm font-extrabold uppercase tracking-wide text-brand-text-primary">
            {specsLabel[locale]}
          </h3>
          <div className="flex flex-wrap gap-2">
            {model.specs[locale].map((spec) => (
              <span
                key={`detail-${spec}`}
                className="rounded-xl border border-brand-sectiongray bg-brand-offwhite px-3 py-2 text-xs font-semibold text-brand-text-secondary"
              >
                {spec}
              </span>
            ))}
          </div>
        </motion.div>

        <DaavlinFinanceCalculator locale={locale} modelId={modelId} />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 rounded-3xl border border-brand-sectiongray bg-gradient-to-br from-brand-white via-brand-white to-brand-gold/10 p-6 shadow-sm sm:p-8"
        >
          <h2 className="mb-4 text-lg font-extrabold text-brand-text-primary">{deep.pathwayTitle[locale]}</h2>
          <ol className="space-y-3">
            {deep.pathway.map((step, index) => (
              <li key={step.uz} className="flex gap-3 text-sm font-light leading-relaxed text-brand-text-secondary">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span>{step[locale]}</span>
              </li>
            ))}
          </ol>
        </motion.div>

        <div className="mb-10 flex flex-wrap gap-3">
          <Link
            to={daavlinSectionPath(locale, 'contacts')}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-gold px-5 py-3 text-xs font-bold text-white no-underline transition-all hover:bg-brand-gold-dark sm:text-sm"
          >
            {locale === 'uz' ? 'Konsultatsiya / buyurtma' : locale === 'ru' ? 'Консультация / заказ' : 'Consult / order'}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <AppointmentBookingLink className="inline-flex items-center gap-2 rounded-xl border border-brand-sectiongray bg-brand-white px-5 py-3 text-xs font-bold text-brand-text-primary no-underline transition-all hover:bg-brand-offwhite sm:text-sm">
            {s.ctaBook[locale]}
          </AppointmentBookingLink>
          <Link
            to={doctorsListPath(locale)}
            className="inline-flex items-center gap-2 rounded-xl border border-brand-sectiongray bg-brand-white px-5 py-3 text-xs font-bold text-brand-text-primary no-underline transition-all hover:bg-brand-offwhite sm:text-sm"
          >
            {s.ctaDoctors[locale]}
          </Link>
          <Link
            to={pagePath(locale, 'clinic-equipment')}
            className="inline-flex items-center gap-2 rounded-xl border border-brand-sectiongray bg-brand-white px-5 py-3 text-xs font-bold text-brand-text-primary no-underline transition-all hover:bg-brand-offwhite sm:text-sm"
          >
            {s.ctaEquipment[locale]}
          </Link>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-extrabold text-brand-text-primary sm:text-xl">
            {otherModelsLabel[locale]}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.id}
                to={daavlinModelPath(locale, item.id as DaavlinModelId)}
                className="group overflow-hidden rounded-2xl border border-brand-sectiongray bg-brand-white no-underline shadow-xs transition-shadow hover:shadow-md"
              >
                <div className="relative flex min-h-[220px] items-center justify-center bg-gradient-to-br from-white via-slate-50 to-brand-gold-light/10 p-6 sm:p-8 lg:min-h-[360px]">
                  <MediaImage
                    src={item.image}
                    alt={item.name}
                    className="max-h-[240px] w-full object-contain drop-shadow-[0_20px_40px_rgba(7,27,46,0.12)] transition-transform duration-300 group-hover:scale-[1.02] sm:max-h-[280px] lg:max-h-[320px]"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-gold">{item.badge[locale]}</p>
                  <h3 className="mt-1 text-base font-extrabold text-brand-text-primary">{item.name}</h3>
                  <p className="mt-1 line-clamp-2 text-xs font-light text-brand-text-secondary">
                    {item.tagline[locale]}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-gold">
                    {moreLabel[locale]}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
