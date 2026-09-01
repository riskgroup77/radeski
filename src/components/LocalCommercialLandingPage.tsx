import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, Phone, Stethoscope } from 'lucide-react';
import type { Locale } from '../types';
import {
  COMPETITIVE_ADVANTAGES,
  POSITIONING_FORMULA,
  type LocalCommercialLanding,
  getLocalizedCopy,
  localCommercialPath,
} from '../data/localCommercialSeoCatalog';
import { CLINIC_PHONE_KOKAND, CLINIC_PHONE_PRIMARY } from '../config/clinicContacts';
import { KOKAND_BRANCH_MAP_OPEN_URL, getClinicMapOpenUrl } from '../config/links';
import {
  articlePath,
  conditionPath,
  pagePath,
  promoServicePath,
  serviceCategoryPath,
} from '../routing/paths';
import AppointmentBookingLink from './AppointmentBookingLink';

interface LocalCommercialLandingPageProps {
  locale: Locale;
  landing: LocalCommercialLanding;
  appointmentLabel: string;
}

function t(copy: { uz: string; ru: string; en: string }, locale: Locale): string {
  return getLocalizedCopy(copy, locale);
}

export default function LocalCommercialLandingPage({
  locale,
  landing,
  appointmentLabel,
}: LocalCommercialLandingPageProps) {
  const isKokand = landing.city === 'qoqon';
  const hubPage = isKokand ? 'qoqon' : 'fargona';
  const phone = isKokand ? CLINIC_PHONE_KOKAND : CLINIC_PHONE_PRIMARY;
  const mapUrl = isKokand ? KOKAND_BRANCH_MAP_OPEN_URL : getClinicMapOpenUrl();

  const hubLabel =
    locale === 'uz'
      ? isKokand
        ? "Qo'qon filiali"
        : "Farg'ona filiali"
      : locale === 'ru'
        ? isKokand
          ? 'Филиал в Коканде'
          : 'Филиал в Фергане'
        : isKokand
          ? 'Kokand branch'
          : 'Fergana branch';

  const relatedLabel =
    locale === 'uz' ? 'Foydali maqolalar' : locale === 'ru' ? 'Полезные статьи' : 'Related articles';
  const servicesLabel =
    locale === 'uz' ? 'Bog‘liq xizmatlar' : locale === 'ru' ? 'Связанные услуги' : 'Related services';
  const advantagesTitle =
    locale === 'uz' ? 'Nima uchun Radeski?' : locale === 'ru' ? 'Почему Radeski?' : 'Why Radeski?';
  const positioningTitle =
    locale === 'uz' ? 'Klinika haqida' : locale === 'ru' ? 'О клинике' : 'About the clinic';
  const whoForTitle = locale === 'uz' ? 'Kimlar uchun?' : locale === 'ru' ? 'Кому подходит?' : 'Who is it for?';
  const faqTitle = locale === 'uz' ? 'Tez-tez so‘raladigan savollar' : locale === 'ru' ? 'Частые вопросы' : 'FAQ';

  return (
    <section className="py-12 bg-brand-offwhite min-h-screen">
      <div className="site-container max-w-4xl">
        <Link
          to={pagePath(locale, hubPage)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold no-underline hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          {hubLabel}
        </Link>

        <span className="mt-4 inline-flex text-xs font-bold text-brand-gold tracking-widest uppercase py-1 px-3 bg-brand-gold-light/10 rounded-full">
          Radeski Skin Clinic — {hubLabel}
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text-primary tracking-tight mt-4 leading-tight">
          {t(landing.h1, locale)}
        </h1>
        <p className="mt-4 text-brand-text-secondary text-sm sm:text-base leading-relaxed max-w-3xl">
          {t(landing.lead, locale)}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <AppointmentBookingLink className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-sm rounded-xl no-underline shadow-md">
            {appointmentLabel}
          </AppointmentBookingLink>
          <a
            href={`tel:${phone.tel}`}
            className="inline-flex items-center gap-2 px-6 py-3 border border-brand-sectiongray bg-brand-white text-brand-text-primary font-semibold text-sm rounded-xl no-underline"
          >
            <Phone className="w-4 h-4 text-brand-gold" />
            {phone.display}
          </a>
          <Link
            to={pagePath(locale, 'results')}
            className="inline-flex items-center gap-2 px-6 py-3 text-brand-gold font-semibold text-sm no-underline"
          >
            {locale === 'uz' ? 'Natijalar' : locale === 'ru' ? 'Результаты' : 'Results'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-10 p-5 sm:p-6 bg-brand-white rounded-2xl border border-brand-sectiongray">
          <h2 className="text-lg font-extrabold text-brand-text-primary">{t(landing.problemTitle, locale)}</h2>
          <p className="mt-2 text-sm text-brand-text-secondary leading-relaxed">{t(landing.problemText, locale)}</p>
        </div>

        <h2 className="mt-10 text-xl font-extrabold text-brand-text-primary">{whoForTitle}</h2>
        <ul className="mt-3 space-y-2">
          {landing.whoFor.map((item) => (
            <li key={item.uz} className="flex gap-2 text-sm text-brand-text-secondary">
              <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              {t(item, locale)}
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-xl font-extrabold text-brand-text-primary">{t(landing.methodsTitle, locale)}</h2>
        <ul className="mt-3 space-y-2">
          {landing.methods.map((item) => (
            <li key={item.uz} className="flex gap-2 text-sm text-brand-text-secondary">
              <Stethoscope className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              {t(item, locale)}
            </li>
          ))}
        </ul>
        {landing.equipmentNote && (
          <p className="mt-3 text-sm text-brand-text-muted italic">{t(landing.equipmentNote, locale)}</p>
        )}

        <h2 className="mt-10 text-xl font-extrabold text-brand-text-primary">{advantagesTitle}</h2>
        <ul className="mt-3 space-y-2">
          {COMPETITIVE_ADVANTAGES.map((item) => (
            <li key={item.uz} className="flex gap-2 text-sm text-brand-text-secondary">
              <span className="text-brand-gold font-bold">✓</span>
              {t(item, locale)}
            </li>
          ))}
        </ul>

        <div className="mt-10 p-5 sm:p-6 bg-brand-gold-light/10 rounded-2xl border border-brand-gold/20">
          <h2 className="text-lg font-extrabold text-brand-text-primary">{positioningTitle}</h2>
          <p className="mt-2 text-sm text-brand-text-secondary leading-relaxed">{t(POSITIONING_FORMULA, locale)}</p>
        </div>

        <h2 className="mt-10 text-xl font-extrabold text-brand-text-primary">{servicesLabel}</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            to={serviceCategoryPath(locale, landing.serviceCategoryId)}
            className="px-4 py-2 bg-brand-white border border-brand-sectiongray rounded-xl text-sm font-semibold text-brand-text-primary no-underline hover:border-brand-gold/40"
          >
            {locale === 'uz' ? 'Xizmat bo‘limi' : locale === 'ru' ? 'Раздел услуг' : 'Service category'}
          </Link>
          {landing.conditionSlug && (
            <Link
              to={conditionPath(locale, landing.conditionSlug)}
              className="px-4 py-2 bg-brand-white border border-brand-sectiongray rounded-xl text-sm font-semibold text-brand-text-primary no-underline hover:border-brand-gold/40"
            >
              {locale === 'uz' ? 'Kasallik haqida' : locale === 'ru' ? 'О заболевании' : 'Condition info'}
            </Link>
          )}
          {landing.promoSlug && (
            <Link
              to={promoServicePath(locale, landing.promoSlug)}
              className="px-4 py-2 bg-brand-white border border-brand-sectiongray rounded-xl text-sm font-semibold text-brand-text-primary no-underline hover:border-brand-gold/40"
            >
              {locale === 'uz' ? 'Muolaja sahifasi' : locale === 'ru' ? 'Страница процедуры' : 'Procedure page'}
            </Link>
          )}
          <Link
            to={pagePath(locale, 'doctors')}
            className="px-4 py-2 bg-brand-white border border-brand-sectiongray rounded-xl text-sm font-semibold text-brand-text-primary no-underline hover:border-brand-gold/40"
          >
            {locale === 'uz' ? 'Shifokorlar' : locale === 'ru' ? 'Врачи' : 'Doctors'}
          </Link>
        </div>

        {landing.articleRouteKeys && landing.articleRouteKeys.length > 0 && (
          <>
            <h2 className="mt-10 text-xl font-extrabold text-brand-text-primary">{relatedLabel}</h2>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {landing.articleRouteKeys.map((key) => (
                <Link
                  key={key}
                  to={articlePath(locale, key)}
                  className="p-4 bg-brand-white rounded-xl border border-brand-sectiongray hover:border-brand-gold/40 text-sm font-semibold text-brand-text-primary no-underline"
                >
                  {key.replace(/^art-/, '').replace(/-/g, ' ')}
                </Link>
              ))}
            </div>
          </>
        )}

        <h2 className="mt-10 text-xl font-extrabold text-brand-text-primary">{faqTitle}</h2>
        <div className="mt-4 space-y-3">
          {landing.faqs.map((faq) => (
            <details key={faq.question.uz} className="p-4 bg-brand-white rounded-xl border border-brand-sectiongray group">
              <summary className="font-semibold text-sm text-brand-text-primary cursor-pointer list-none flex justify-between gap-2">
                {t(faq.question, locale)}
                <span className="text-brand-gold group-open:rotate-90 transition-transform">›</span>
              </summary>
              <p className="mt-2 text-sm text-brand-text-secondary leading-relaxed">{t(faq.answer, locale)}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 p-5 bg-brand-white rounded-2xl border border-brand-sectiongray flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex gap-2 text-sm">
            <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
            <span>{hubLabel}</span>
          </div>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-gold"
          >
            {locale === 'uz' ? 'Xaritada ochish' : locale === 'ru' ? 'Открыть на карте' : 'Open map'}
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <p className="mt-6 text-xs text-brand-text-muted">
          {locale === 'uz'
            ? `Boshqa shahar: ${isKokand ? "Farg'ona" : "Qo'qon"} filiali — `
            : locale === 'ru'
              ? `Другой филиал: ${isKokand ? 'Фергана' : 'Коканд'} — `
              : `Other branch: ${isKokand ? 'Fergana' : 'Kokand'} — `}
          <Link
            to={pagePath(locale, isKokand ? 'fargona' : 'qoqon')}
            className="text-brand-gold font-semibold no-underline hover:underline"
          >
            {locale === 'uz'
              ? isKokand
                ? "Farg'ona sahifasi"
                : "Qo'qon sahifasi"
              : locale === 'ru'
                ? isKokand
                  ? 'Страница Ферганы'
                  : 'Страница Коканда'
                : isKokand
                  ? 'Fergana page'
                  : 'Kokand page'}
          </Link>
        </p>
      </div>
    </section>
  );
}
