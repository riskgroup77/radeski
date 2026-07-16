import { Building, CheckCircle2, HeartHandshake, Star } from 'lucide-react';
import type { Locale } from '../types';
import { DICTIONARY } from '../data';

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
  },
  {
    key: 'technologies',
    icon: HeartHandshake,
    titleKey: 'features02' as const,
    descKey: 'features02Desc' as const,
  },
  {
    key: 'equipment',
    icon: CheckCircle2,
    titleKey: 'features04' as const,
    descKey: 'features04Desc' as const,
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
        {CARDS.map(({ key, icon: Icon, iconFilled, titleKey, descKey }) => (
          <div
            key={key}
            className={`flex gap-4 items-start h-full w-full rounded-2xl border border-brand-sectiongray shadow-xs ${
              isWide
                ? 'p-6 lg:p-8 bg-brand-offwhite/50 flex-col justify-between'
                : 'p-6 lg:p-8 bg-brand-offwhite'
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
                <h4
                  className={`font-bold text-brand-text-primary ${
                    isWide ? 'text-base' : 'text-sm sm:text-base'
                  }`}
                >
                  {d[titleKey]}
                </h4>
                <p
                  className={`text-brand-text-muted leading-relaxed font-light ${
                    isWide ? 'text-xs mt-2' : 'text-xs mt-1 leading-normal'
                  }`}
                >
                  {d[descKey]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
