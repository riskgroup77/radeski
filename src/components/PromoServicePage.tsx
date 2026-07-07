import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronDown,
  CornerUpLeft,
  HelpCircle,
  ListOrdered,
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

function PriceBlock({ slide, locale }: { slide: HomePromoSlide; locale: Locale }) {
  const priceNote = slide.priceNote ? getPromoText(slide.priceNote, locale) : '';
  let mainPrice = '';
  if (slide.fixedPriceText) mainPrice = getPromoText(slide.fixedPriceText, locale);
  else if (slide.fallbackPriceValue) mainPrice = `${formatPriceValue(slide.fallbackPriceValue)}${locale === 'uz' ? ' dan' : locale === 'ru' ? '' : ''}`;

  if (!mainPrice && !priceNote) return null;

  return (
    <div className="rounded-2xl border border-brand-gold/25 bg-brand-gold-light/10 p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-2">
        <Tag className="w-4 h-4 text-brand-gold" />
        <span className="text-xs font-bold uppercase tracking-wide text-brand-text-muted">
          {locale === 'uz' ? 'Narx' : locale === 'ru' ? 'Цена' : 'Price'}
        </span>
      </div>
      {mainPrice && <p className="text-2xl sm:text-3xl font-extrabold text-brand-gold tabular-nums">{mainPrice}</p>}
      {priceNote && <p className="text-sm text-brand-text-secondary mt-2 font-medium">{priceNote}</p>}
    </div>
  );
}

function FaqList({ items, locale }: { items: PromoFaqItem[]; locale: Locale }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="rounded-xl border border-brand-sectiongray overflow-hidden bg-brand-white">
          <button
            type="button"
            onClick={() => setOpen(open === index ? null : index)}
            className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left cursor-pointer hover:bg-brand-offwhite transition-colors"
          >
            <span className="text-sm font-semibold text-brand-text-primary">{t(item.question, locale)}</span>
            <ChevronDown className={`w-4 h-4 text-brand-gold shrink-0 transition-transform ${open === index ? 'rotate-180' : ''}`} />
          </button>
          {open === index && (
            <div className="px-4 pb-4 text-sm text-brand-text-secondary leading-relaxed font-light border-t border-brand-sectiongray pt-3">
              {t(item.answer, locale)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Subsections({ items, locale }: { items: PromoSubsection[]; locale: Locale }) {
  return (
    <div className="space-y-5">
      {items.map((sub, i) => (
        <div key={i} className="rounded-xl bg-brand-offwhite border border-brand-sectiongray p-4 sm:p-5">
          <h4 className="text-sm font-bold text-brand-text-primary mb-2">{t(sub.title, locale)}</h4>
          {sub.paragraphs?.map((p, j) => (
            <p key={j} className="text-sm text-brand-text-secondary font-light leading-relaxed mb-2 last:mb-0">
              {t(p, locale)}
            </p>
          ))}
          {sub.bullets && sub.bullets.length > 0 && (
            <ul className="mt-3 space-y-1.5">
              {sub.bullets.map((b, k) => (
                <li key={k} className="flex items-start gap-2 text-sm text-brand-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                  {t(b, locale)}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

function SectionBlock({ section, locale }: { section: PromoSection; locale: Locale }) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <h3 className="text-lg sm:text-xl font-extrabold text-brand-text-primary mb-3 flex items-center gap-2">
        {section.id === 'faq' ? <HelpCircle className="w-5 h-5 text-brand-gold" /> : section.id === 'protocol' ? <ListOrdered className="w-5 h-5 text-brand-gold" /> : <Stethoscope className="w-5 h-5 text-brand-gold" />}
        {t(section.title, locale)}
      </h3>
      {section.intro && <p className="text-sm sm:text-base text-brand-text-secondary font-light leading-relaxed mb-4">{t(section.intro, locale)}</p>}
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="text-sm sm:text-base text-brand-text-secondary font-light leading-relaxed mb-3">
          {t(p, locale)}
        </p>
      ))}
      {section.bullets && (
        <ul className="space-y-2 mb-4">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-brand-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
              {t(b, locale)}
            </li>
          ))}
        </ul>
      )}
      {section.subsections && <Subsections items={section.subsections} locale={locale} />}
      {section.steps && (
        <ol className="space-y-4">
          {section.steps.map((step, i) => (
            <li key={i} className="rounded-xl border border-brand-sectiongray bg-brand-white p-4 sm:p-5">
              <div className="flex gap-3">
                <span className="w-8 h-8 rounded-full bg-brand-gold-light/20 text-brand-gold text-sm font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-brand-text-primary text-sm sm:text-base">{t(step.title, locale)}</h4>
                  <p className="text-sm text-brand-text-secondary font-light mt-1 leading-relaxed">{t(step.description, locale)}</p>
                  {step.details && step.details.length > 0 && (
                    <ul className="mt-3 pl-1 space-y-1 border-l-2 border-brand-gold/30 ml-1">
                      {step.details.map((d, j) => (
                        <li key={j} className="text-xs sm:text-sm text-brand-text-muted pl-3">{t(d, locale)}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      )}
      {section.tiers && (
        <div className="grid gap-3 sm:grid-cols-2">
          {section.tiers.map((tier, i) => (
            <div key={i} className="rounded-xl border border-brand-sectiongray bg-brand-offwhite p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-brand-text-muted">{t(tier.label, locale)}</p>
              <p className="text-lg font-extrabold text-brand-gold mt-1 tabular-nums">{t(tier.value, locale)}</p>
              {tier.note && <p className="text-xs text-brand-text-muted mt-1">{t(tier.note, locale)}</p>}
            </div>
          ))}
        </div>
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
        <p className="text-brand-text-muted">{locale === 'uz' ? 'Ma\'lumot topilmadi' : 'Content not found'}</p>
        <Link to={pagePath(locale, 'home')} className="text-brand-gold mt-4 inline-block">{locale === 'uz' ? 'Bosh sahifa' : 'Home'}</Link>
      </section>
    );
  }

  return (
    <section id={`promo-page-${slide.slug}`} className="py-10 sm:py-14 bg-brand-offwhite min-h-screen">
      <div className="site-container">
        <div className="flex flex-wrap gap-2 mb-6">
          <Link to={pagePath(locale, 'home')} className="inline-flex items-center gap-2 text-xs font-semibold text-brand-text-secondary hover:text-brand-text-primary bg-brand-white px-3.5 py-2 rounded-xl border border-brand-sectiongray">
            <CornerUpLeft className="w-4 h-4" />
            {locale === 'uz' ? 'Bosh sahifa' : locale === 'ru' ? 'Главная' : 'Home'}
          </Link>
          <Link to={relatedPath} className="inline-flex items-center gap-2 text-xs font-semibold text-brand-gold bg-brand-gold-light/10 px-3.5 py-2 rounded-xl border border-brand-gold/25">
            {getPromoText(slide.badge, locale)}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 xl:gap-12">
          <div>
            <div className="bg-brand-white rounded-3xl border border-brand-sectiongray overflow-hidden shadow-sm mb-8">
              <div className="p-3 sm:p-4 bg-brand-offwhite flex items-center justify-center min-h-[260px] sm:min-h-[320px]">
                <img
                  src={slide.image}
                  alt={title}
                  className="w-full h-auto max-h-[420px] object-contain object-center"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="p-6 sm:p-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold-light/15 border border-brand-gold/25 text-brand-gold text-xs font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  {getPromoText(slide.badge, locale)}
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-text-primary leading-tight">{title}</h1>
                <p className="mt-4 text-brand-text-secondary text-sm sm:text-base leading-relaxed font-light">{getPromoText(slide.description, locale)}</p>
                <div className="mt-6">
                  <PriceBlock slide={slide} locale={locale} />
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <AppointmentBookingLink className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-sm rounded-xl no-underline">
                    <Calendar className="w-4 h-4" />
                    {appointmentLabel}
                  </AppointmentBookingLink>
                  <Link to={relatedPath} className="inline-flex items-center gap-2 px-6 py-3 border border-brand-sectiongray bg-brand-white hover:bg-brand-offwhite text-brand-text-primary font-semibold text-sm rounded-xl no-underline">
                    {locale === 'uz' ? 'Barcha xizmatlar' : locale === 'ru' ? 'Все услуги' : 'All services'}
                    <ArrowRight className="w-4 h-4 text-brand-gold" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              {content.sections.map((section) => (
                <div key={section.id} className="bg-brand-white rounded-2xl border border-brand-sectiongray p-5 sm:p-7 shadow-sm">
                  <SectionBlock section={section} locale={locale} />
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-between">
              {neighbors.prev && (
                <Link
                  to={promoServicePath(locale, neighbors.prev.slug)}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border border-brand-sectiongray bg-brand-white hover:border-brand-gold/40 text-sm font-semibold text-brand-text-primary no-underline"
                >
                  <ArrowLeft className="w-4 h-4 text-brand-gold" />
                  <span className="line-clamp-1">{getPromoText(neighbors.prev.title, locale)}</span>
                </Link>
              )}
              {neighbors.next && (
                <Link
                  to={promoServicePath(locale, neighbors.next.slug)}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border border-brand-sectiongray bg-brand-white hover:border-brand-gold/40 text-sm font-semibold text-brand-text-primary no-underline sm:ml-auto"
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
                  {locale === 'uz' ? 'Bo\'limlar' : locale === 'ru' ? 'Разделы' : 'Sections'}
                </p>
                <ul className="space-y-1">
                  {content.sections.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="block text-sm text-brand-text-secondary hover:text-brand-gold py-1.5 transition-colors">
                        {t(s.title, locale)}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <PriceBlock slide={slide} locale={locale} />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
