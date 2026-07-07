import { Link } from 'react-router-dom';
import { ArrowUpRight, Building, CheckCircle2, HeartHandshake, Star } from 'lucide-react';
import type { Locale } from '../types';
import { DICTIONARY } from '../data';
import { doctorsListPath, pagePath } from '../routing/paths';

interface ClinicAdvantagesCardsProps {
  locale: Locale;
  dictionary?: Record<string, string>;
  /** Kompakt — bosh sahifa; keng — About sahifasi */
  variant?: 'compact' | 'wide';
  showHeading?: boolean;
}

const CARDS = [
  {
    key: 'doctors',
    icon: Star,
    iconFilled: true,
    titleKey: 'features01' as const,
    descKey: 'features01Desc' as const,
    href: (locale: Locale) => doctorsListPath(locale),
  },
  {
    key: 'technologies',
    icon: HeartHandshake,
    titleKey: 'features02' as const,
    descKey: 'features02Desc' as const,
    href: (locale: Locale) => pagePath(locale, 'technologies'),
  },
  {
    key: 'equipment',
    icon: CheckCircle2,
    titleKey: 'features04' as const,
    descKey: 'features04Desc' as const,
    href: (locale: Locale) => pagePath(locale, 'clinic-equipment'),
  },
] as const;

export default function ClinicAdvantagesCards({
  locale,
  dictionary,
  variant = 'compact',
  showHeading = false,
}: ClinicAdvantagesCardsProps) {
  const d = dictionary || DICTIONARY[locale];
  const isWide = variant === 'wide';

  return (
    <div>
      {showHeading && (
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-text-primary tracking-tight">
            {locale === 'uz'
              ? 'Bizning asosiy afzalliklarimiz'
              : locale === 'ru'
                ? 'Наши ключевые преимущества'
                : 'Why Choose Our Clinic?'}
          </h3>
        </div>
      )}

      <div
        className={
          isWide
            ? 'grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full items-stretch'
            : 'grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full items-stretch'
        }
      >
        {CARDS.map(({ key, icon: Icon, iconFilled, titleKey, descKey, href }) => (
          <Link
            key={key}
            to={href(locale)}
            className={`group flex gap-4 items-start h-full w-full rounded-2xl border border-brand-sectiongray shadow-xs transition-all no-underline hover:border-brand-gold/40 hover:shadow-md ${
              isWide
                ? 'p-6 lg:p-8 bg-brand-offwhite/50 hover:bg-brand-white flex-col justify-between'
                : 'p-6 lg:p-8 bg-brand-offwhite hover:bg-brand-white'
            }`}
          >
            <div className={isWide ? 'w-full' : 'contents'}>
              <div
                className={`w-10 h-10 bg-brand-gold-light/10 rounded-xl flex items-center justify-center text-brand-gold border border-brand-gold-light/20 shrink-0 ${
                  isWide ? 'mb-4' : ''
                }`}
              >
                {key === 'equipment' && isWide ? (
                  <Building className="w-5 h-5" />
                ) : (
                  <Icon className={`w-5 h-5 ${iconFilled ? 'fill-current' : ''}`} />
                )}
              </div>
              <div className={isWide ? '' : 'flex-1 min-w-0'}>
                <div className="flex items-start justify-between gap-2">
                  <h4
                    className={`font-bold text-brand-text-primary group-hover:text-brand-gold transition-colors ${
                      isWide ? 'text-base' : 'text-sm sm:text-base'
                    }`}
                  >
                    {d[titleKey]}
                  </h4>
                  <ArrowUpRight className="w-4 h-4 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                </div>
                <p
                  className={`text-brand-text-muted leading-relaxed font-light ${
                    isWide ? 'text-xs mt-2' : 'text-xs mt-1 leading-normal'
                  }`}
                >
                  {d[descKey]}
                </p>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-gold mt-3 uppercase tracking-wide">
                  {locale === 'uz' ? 'Batafsil' : locale === 'ru' ? 'Подробнее' : 'Learn more'}
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
