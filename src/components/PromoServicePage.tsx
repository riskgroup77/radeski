import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronDown,
  CornerUpLeft,
  HelpCircle,
  ListOrdered,
  Shield,
  Sparkles,
  Stethoscope,
  Tag,
} from 'lucide-react';
import type { Locale } from '../types';
import type { HomePromoSlide } from '../data/homePromoCarousel';
import { getPromoText, getPromoSlideNeighbors } from '../data/homePromoCarousel';
import {
  getPromoLocalizedText,
  getPromoPageContent,
  type PromoFaqItem,
  type PromoLocalizedText,
  type PromoSection,
  type PromoSubsection,
} from '../data/promoServicePagesCatalog';
import { formatPriceValue } from '../api/mappers';
import { pagePath, promoServicePath, serviceCategoryPath, serviceSubPath } from '../routing/paths';
import AppointmentBookingLink from './AppointmentBookingLink';

interface PromoServicePageProps {
  locale: Locale;
  slide: HomePromoSlide;
  appointmentLabel: string;
}

function t(text: PromoLocalizedText, locale: Locale): string {
  return getPromoLocalizedText(text, locale);
}

function sectionIcon(id: string) {
  if (id === 'faq') return HelpCircle;
  if (id === 'protocol') return ListOrdered;
  if (id === 'recovery') return Shield;
  if (id === 'clinic-advantages') return CheckCircle2;
  return Stethoscope;
}

function PriceBlock({ slide, locale, compact = false }: { slide: HomePromoSlide; locale: Locale; compact?: boolean }) {
  const priceNote = slide.priceNote ? getPromoText(slide.priceNote, locale) : '';
  let mainPrice = '';
  if (slide.fixedPriceText) mainPrice = getPromoText(slide.fixedPriceText, locale);
  else if (slide.fallbackPriceValue) {
    mainPrice = `${formatPriceValue(slide.fallbackPriceValue)}${locale === 'uz' ? ' dan' : ''}`;
  }

  if (!mainPrice && !priceNote) return null;

  return (
    <div className={compact ? 'space-y-1' : 'rounded-2xl border border-brand-gold/30 bg-gradient-to-br from-brand-gold-light/15 to-brand-white p-5 sm:p-6'}>
      {!compact && (
        <div className="flex items-center gap-2 mb-2">
          <Tag className="w-4 h-4 text-brand-gold" />
          <span className="text-xs font-bold uppercase tracking-wide text-brand-text-muted">
            {locale === 'uz' ? 'Narx' : locale === 'ru' ? 'Цена' : 'Price'}
          </span>
        </div>
      )}
      {mainPrice && (
        <p className={`font-extrabold text-brand-gold tabular-nums ${compact ? 'text-xl' : 'text-2xl sm:text-3xl'}`}>
          {mainPrice}
        </p>
      )}
      {priceNote && (
        <p className={`text-brand-text-secondary font-medium ${compact ? 'text-xs mt-1' : 'text-sm mt-2'}`}>
          {priceNote}
        </p>
      )}
    </div>
  );
}

function FaqList({ items, locale }: { items: PromoFaqItem[]; locale: Locale }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="rounded-xl border border-brand-sectiongray overflow-hidden bg-brand-offwhite/50">
          <button
            type="button"
            onClick={() => setOpen(open === index ? null : index)}
            className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left cursor-pointer hover:bg-brand-white transition-colors"
          >
            <span className="text-sm font-semibold text-brand-text-primary">{t(item.question, locale)}</span>
            <ChevronDown className={`w-4 h-4 text-brand-gold shrink-0 transition-transform ${open === index ? 'rotate-180' : ''}`} />
          </button>
          {open === index && (
            <div className="px-4 pb-4 text-sm text-brand-text-secondary leading-relaxed border-t border-brand-sectiongray/80 pt-3 bg-brand-white">
              {t(item.answer, locale)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function BulletList({ items, locale }: { items: PromoLocalizedText[]; locale: Locale }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map((bullet, index) => (
        <li key={index} className="flex items-start gap-2.5 text-sm text-brand-text-secondary">
          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
          <span>{t(bullet, locale)}</span>
        </li>
      ))}
    </ul>
  );
}

function Subsections({ items, locale, compact }: { items: PromoSubsection[]; locale: Locale; compact?: boolean }) {
  if (compact && items.length === 1 && items[0].bullets) {
    return <BulletList items={items[0].bullets} locale={locale} />;
  }

  return (
    <div className="space-y-4">
      {items.map((sub, index) => (
        <div key={index}>
          <h4 className="text-sm font-bold text-brand-text-primary mb-2">{t(sub.title, locale)}</h4>
          {sub.paragraphs?.map((paragraph, j) => (
            <p key={j} className="text-sm text-brand-text-secondary leading-relaxed mb-2 last:mb-0">
              {t(paragraph, locale)}
            </p>
          ))}
          {sub.bullets && sub.bullets.length > 0 && <BulletList items={sub.bullets} locale={locale} />}
        </div>
      ))}
    </div>
  );
}

function SectionBlock({ section, locale }: { section: PromoSection; locale: Locale }) {
  const Icon = sectionIcon(section.id);

  return (
    <section id={section.id} className="scroll-mt-28">
      <div className="flex items-center gap-2.5 mb-4">
        <span className="w-9 h-9 rounded-xl bg-brand-gold-light/15 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-brand-gold" />
        </span>
        <h3 className="text-lg sm:text-xl font-extrabold text-brand-text-primary">{t(section.title, locale)}</h3>
      </div>

      {section.intro && (
        <p className="text-sm sm:text-base text-brand-text-secondary leading-relaxed mb-4">{t(section.intro, locale)}</p>
      )}

      {section.paragraphs?.map((paragraph, index) => (
        <p key={index} className="text-sm sm:text-base text-brand-text-secondary leading-relaxed mb-3 last:mb-0">
          {t(paragraph, locale)}
        </p>
      ))}

      {section.bullets && <BulletList items={section.bullets} locale={locale} />}

      {section.subsections && (
        <Subsections
          items={section.subsections}
          locale={locale}
          compact={section.id === 'indications' || section.id === 'recovery'}
        />
      )}

      {section.steps && (
        <ol className="space-y-3">
          {section.steps.map((step, index) => (
            <li
              key={index}
              className="relative pl-12 pr-4 py-4 rounded-xl border border-brand-sectiongray bg-brand-offwhite/40"
            >
              <span className="absolute left-4 top-4 w-7 h-7 rounded-full bg-brand-gold text-white text-xs font-bold flex items-center justify-center">
                {index + 1}
              </span>
              <h4 className="font-bold text-brand-text-primary text-sm sm:text-base">{t(step.title, locale)}</h4>
              <p className="text-sm text-brand-text-secondary mt-1 leading-relaxed">{t(step.description, locale)}</p>
              {step.details && step.details.length > 0 && (
                <ul className="mt-2.5 space-y-1">
                  {step.details.map((detail, j) => (
                    <li key={j} className="text-xs sm:text-sm text-brand-text-muted flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 shrink-0" />
                      {t(detail, locale)}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      )}

      {section.faq && <FaqList items={section.faq} locale={locale} />}
    </section>
  );
}

export default function PromoServicePage({ locale, slide, appointmentLabel }: PromoServicePageProps) {
  const content = getPromoPageContent(slide.id);
  const title = getPromoText(slide.title, locale);
  const neighbors = getPromoSlideNeighbors(slide.slug);
  const relatedPath = slide.subId
    ? serviceSubPath(locale, slide.categoryId, slide.subId)
    : serviceCategoryPath(locale, slide.categoryId);

  if (!content) {
    return (
      <section className="py-20 text-center">
        <p className="text-brand-text-muted">{locale === 'uz' ? "Ma'lumot topilmadi" : 'Content not found'}</p>
        <Link to={pagePath(locale, 'home')} className="text-brand-gold mt-4 inline-block">
          {locale === 'uz' ? 'Bosh sahifa' : 'Home'}
        </Link>
      </section>
    );
  }

  return (
    <section id={`promo-page-${slide.slug}`} className="py-8 sm:py-12 bg-brand-offwhite min-h-screen">
      <div className="site-container">
        <div className="flex flex-wrap gap-2 mb-6">
          <Link
            to={pagePath(locale, 'home')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-text-secondary hover:text-brand-text-primary bg-brand-white px-3.5 py-2 rounded-xl border border-brand-sectiongray transition-colors"
          >
            <CornerUpLeft className="w-4 h-4" />
            {locale === 'uz' ? 'Bosh sahifa' : locale === 'ru' ? 'Главная' : 'Home'}
          </Link>
          <Link
            to={relatedPath}
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-gold bg-brand-gold-light/10 px-3.5 py-2 rounded-xl border border-brand-gold/25"
          >
            {getPromoText(slide.badge, locale)}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-8 xl:gap-10">
          <div>
            {/* Hero: rasm chapda, matn o'ngda */}
            <div className="bg-brand-white rounded-3xl border border-brand-sectiongray overflow-hidden shadow-md mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 min-h-0">
                <div className="relative min-h-[260px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[480px] bg-brand-sectiongray/40 order-1">
                  <img
                    src={slide.image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/10 to-transparent hidden md:block pointer-events-none" />
                </div>

                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-2">
                  <span className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-brand-gold-light/15 border border-brand-gold/25 text-brand-gold text-xs font-semibold mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    {getPromoText(slide.badge, locale)}
                  </span>
                  <h1 className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold text-brand-text-primary leading-tight">
                    {title}
                  </h1>
                  <p className="mt-4 text-brand-text-secondary text-sm sm:text-base leading-relaxed">
                    {getPromoText(slide.description, locale)}
                  </p>
                  <div className="mt-6">
                    <PriceBlock slide={slide} locale={locale} />
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <AppointmentBookingLink className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-sm rounded-xl no-underline shadow-md shadow-brand-gold/20 transition-colors">
                      <Calendar className="w-4 h-4" />
                      {appointmentLabel}
                    </AppointmentBookingLink>
                    <Link
                      to={relatedPath}
                      className="inline-flex items-center gap-2 px-6 py-3 border border-brand-sectiongray bg-brand-white hover:bg-brand-offwhite text-brand-text-primary font-semibold text-sm rounded-xl no-underline transition-colors"
                    >
                      {locale === 'uz' ? 'Barcha xizmatlar' : locale === 'ru' ? 'Все услуги' : 'All services'}
                      <ArrowRight className="w-4 h-4 text-brand-gold" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {content.sections.map((section) => (
                <article
                  key={section.id}
                  className="bg-brand-white rounded-2xl border border-brand-sectiongray p-5 sm:p-7 shadow-sm"
                >
                  <SectionBlock section={section} locale={locale} />
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-between">
              {neighbors.prev && (
                <Link
                  to={promoServicePath(locale, neighbors.prev.slug)}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border border-brand-sectiongray bg-brand-white hover:border-brand-gold/40 text-sm font-semibold text-brand-text-primary no-underline transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 text-brand-gold" />
                  <span className="line-clamp-1">{getPromoText(neighbors.prev.title, locale)}</span>
                </Link>
              )}
              {neighbors.next && (
                <Link
                  to={promoServicePath(locale, neighbors.next.slug)}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border border-brand-sectiongray bg-brand-white hover:border-brand-gold/40 text-sm font-semibold text-brand-text-primary no-underline sm:ml-auto transition-colors"
                >
                  <span className="line-clamp-1">{getPromoText(neighbors.next.title, locale)}</span>
                  <ArrowRight className="w-4 h-4 text-brand-gold shrink-0" />
                </Link>
              )}
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <nav className="rounded-2xl border border-brand-sectiongray bg-brand-white p-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wide text-brand-text-muted mb-3">
                  {locale === 'uz' ? "Bo'limlar" : locale === 'ru' ? 'Разделы' : 'Sections'}
                </p>
                <ul className="space-y-0.5">
                  {content.sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block text-sm text-brand-text-secondary hover:text-brand-gold py-1.5 transition-colors"
                      >
                        {t(section.title, locale)}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="rounded-2xl border border-brand-sectiongray bg-brand-white p-4 shadow-sm">
                <PriceBlock slide={slide} locale={locale} compact />
                <AppointmentBookingLink className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-sm rounded-xl no-underline transition-colors">
                  <Calendar className="w-4 h-4" />
                  {appointmentLabel}
                </AppointmentBookingLink>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
