import { Link } from 'react-router-dom';
import { ArrowLeft, HeartPulse } from 'lucide-react';
import type { Locale, ServiceCategory } from '../types';
import {
  DERMATOLOGY_CATEGORY_ID,
  DERMATOLOGY_CONDITION_NAV,
  getDermatologyConditionNavItem,
  isDermatologyConditionSlug,
} from '../data/dermatologyConditionsNav';
import { getDermatologyConditionTopic } from '../utils/dermatologyConditions';
import {
  conditionPath,
  serviceCategoryPath,
  servicesListPath,
} from '../routing/paths';
import ConditionDetailBody from './ConditionDetailBody';

interface DermatologyConditionPageProps {
  locale: Locale;
  slug: string;
  category: ServiceCategory;
}

export default function DermatologyConditionPage({
  locale,
  slug,
  category,
}: DermatologyConditionPageProps) {
  if (!isDermatologyConditionSlug(slug)) {
    return (
      <div className="site-container py-16 text-center">
        <p className="text-brand-text-muted mb-4">
          {locale === 'uz'
            ? "Sahifa topilmadi."
            : locale === 'ru'
              ? 'Страница не найдена.'
              : 'Page not found.'}
        </p>
        <Link to={servicesListPath(locale)} className="text-brand-gold font-bold">
          {locale === 'uz' ? 'Xizmatlar' : locale === 'ru' ? 'Услуги' : 'Services'}
        </Link>
      </div>
    );
  }

  const navItem = getDermatologyConditionNavItem(slug);
  const condition = getDermatologyConditionTopic(slug, locale);

  if (!condition || !navItem) {
    return (
      <div className="site-container py-16 text-center">
        <p className="text-brand-text-muted mb-4">
          {locale === 'uz'
            ? "Ma'lumot topilmadi."
            : locale === 'ru'
              ? 'Информация не найдена.'
              : 'Information not found.'}
        </p>
        <Link to={serviceCategoryPath(locale, DERMATOLOGY_CATEGORY_ID)} className="text-brand-gold font-bold">
          {locale === 'uz' ? 'Dermatologiya' : locale === 'ru' ? 'Дерматология' : 'Dermatology'}
        </Link>
      </div>
    );
  }

  const eyebrow =
    locale === 'uz'
      ? 'Dermatologiya — kasalliklar'
      : locale === 'ru'
        ? 'Дermatologiya — заболевания'
        : 'Dermatology — conditions';

  return (
    <div className="bg-brand-offwhite/40 min-h-[60vh]">
      <div className="site-container py-8 sm:py-12">
        <nav className="flex flex-wrap items-center gap-2 text-xs text-brand-text-muted mb-6">
          <Link to={servicesListPath(locale)} className="hover:text-brand-gold no-underline">
            {locale === 'uz' ? 'Xizmatlar' : locale === 'ru' ? 'Услуги' : 'Services'}
          </Link>
          <span>/</span>
          <Link
            to={serviceCategoryPath(locale, DERMATOLOGY_CATEGORY_ID)}
            className="hover:text-brand-gold no-underline"
          >
            {category.title[locale] || category.title.uz}
          </Link>
          <span>/</span>
          <span className="text-brand-text-primary font-medium">{navItem.label[locale]}</span>
        </nav>

        <Link
          to={serviceCategoryPath(locale, DERMATOLOGY_CATEGORY_ID)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:text-brand-gold-dark mb-4 no-underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {locale === 'uz' ? 'Dermatologiyaga qaytish' : locale === 'ru' ? 'К dermatologii' : 'Back to dermatology'}
        </Link>

        <header className="mb-8 sm:mb-10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-2 flex items-center gap-2">
            <HeartPulse className="w-4 h-4" />
            {eyebrow}
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-text-primary tracking-tight">
            {navItem.label[locale]}
          </h1>
          <p className="text-sm sm:text-base text-brand-text-muted font-light mt-3 max-w-3xl leading-relaxed">
            {condition.description}
          </p>
        </header>

        <div className="bg-white border border-brand-sectiongray rounded-2xl shadow-sm p-5 sm:p-8">
          <ConditionDetailBody condition={condition} locale={locale} category={category} />
        </div>

        <div className="mt-8 pt-6 border-t border-brand-sectiongray">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-text-muted mb-3">
            {locale === 'uz'
              ? 'Boshqa dermatologik holatlar'
              : locale === 'ru'
                ? 'Другие дерматологические состояния'
                : 'Other dermatology conditions'}
          </p>
          <div className="flex flex-wrap gap-2">
            {DERMATOLOGY_CONDITION_NAV.filter((item) => item.slug !== slug).map((item) => (
              <Link
                key={item.slug}
                to={conditionPath(locale, item.slug)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-brand-sectiongray text-brand-text-secondary hover:border-brand-gold/40 hover:text-brand-gold no-underline transition-colors"
              >
                {item.label[locale]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
