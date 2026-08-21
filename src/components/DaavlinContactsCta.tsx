import { Phone } from 'lucide-react';
import type { Locale } from '../types';
import { DAAVLIN_SHARED } from '../data/daavlinFotoKabinalariContent';
import {
  heroPrimaryCtaSolidClass,
  heroSecondaryCtaSolidClass,
} from './PageHeroBanner';

function daavlinTelHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}

const phoneLabel: Record<Locale, string> = {
  uz: 'Telefon',
  ru: 'Телефон',
  en: 'Phone',
};

const contactTitle: Record<Locale, string> = {
  uz: 'Bog‘lanish',
  ru: 'Связаться с нами',
  en: 'Contact us',
};

const contactHint: Record<Locale, string> = {
  uz: 'Konsultatsiya, narx va yetkazib berish bo‘yicha qo‘ng‘iroq qiling',
  ru: 'Звоните по консультации, ценам и поставке оборудования',
  en: 'Call for consultation, pricing, and equipment delivery',
};

export type DaavlinContactsVariant = 'card' | 'strip' | 'hero';

interface DaavlinContactsCtaProps {
  locale: Locale;
  variant?: DaavlinContactsVariant;
  /** Optional lead text above phones (card / strip). */
  note?: string;
  className?: string;
}

const PHONES = ['phonePrimary', 'phoneSecondary'] as const;

function PhoneButton({
  phone,
  className,
  prominent = false,
}: {
  phone: string;
  className: string;
  prominent?: boolean;
}) {
  return (
    <a href={daavlinTelHref(phone)} className={className}>
      <Phone className={`h-4 w-4 shrink-0 ${prominent ? '' : 'text-brand-gold'}`} />
      {phone}
    </a>
  );
}

function PhoneTiles({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const s = DAAVLIN_SHARED;
  const phones = [s.phonePrimary, s.phoneSecondary];

  return (
    <div className={`grid gap-3 ${compact ? 'sm:grid-cols-2' : 'sm:grid-cols-2'}`}>
      {phones.map((phone) => (
        <a
          key={phone}
          href={daavlinTelHref(phone)}
          className="group flex items-center gap-3 rounded-2xl border border-brand-gold/25 bg-gradient-to-br from-brand-gold/10 to-brand-white p-4 no-underline transition-all hover:border-brand-gold/45 hover:shadow-sm"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gold text-white shadow-sm transition-transform group-hover:scale-105">
            <Phone className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-wider text-brand-text-muted">
              {phoneLabel[locale]}
            </p>
            <p className="mt-0.5 text-sm font-bold text-brand-text-primary group-hover:text-brand-gold sm:text-base">
              {phone}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default function DaavlinContactsCta({
  locale,
  variant = 'strip',
  note,
  className = '',
}: DaavlinContactsCtaProps) {
  const s = DAAVLIN_SHARED;
  const phones = PHONES.map((key) => s[key]);

  if (variant === 'hero') {
    return (
      <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
        <PhoneButton phone={phones[0]} className={heroPrimaryCtaSolidClass} prominent />
        <PhoneButton phone={phones[1]} className={heroSecondaryCtaSolidClass} />
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div
        className={`rounded-3xl border border-brand-sectiongray bg-gradient-to-br from-brand-white via-brand-white to-brand-gold/10 p-6 shadow-sm sm:p-8 ${className}`}
      >
        {note ? (
          <p className="mb-5 max-w-2xl text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">
            {note}
          </p>
        ) : null}
        <div className="mb-5">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">{phoneLabel[locale]}</p>
          <h3 className="mt-1 text-lg font-extrabold text-brand-text-primary sm:text-xl">
            {contactTitle[locale]}
          </h3>
          <p className="mt-2 max-w-xl text-sm font-light text-brand-text-secondary">{contactHint[locale]}</p>
        </div>
        <PhoneTiles locale={locale} />
      </div>
    );
  }

  return (
    <div className={className}>
      {note ? (
        <p className="mb-4 max-w-2xl text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">
          {note}
        </p>
      ) : null}
      <div className="flex flex-wrap gap-3">
        {phones.map((phone, i) => (
          <PhoneButton
            key={phone}
            phone={phone}
            prominent={i === 0}
            className={
              i === 0
                ? 'inline-flex items-center gap-2 rounded-xl bg-brand-gold px-5 py-3 text-xs font-bold text-white no-underline transition-all hover:bg-brand-gold-dark sm:text-sm'
                : 'inline-flex items-center gap-2 rounded-xl border border-brand-sectiongray bg-brand-white px-5 py-3 text-xs font-bold text-brand-text-primary no-underline transition-all hover:border-brand-gold/40 hover:bg-brand-offwhite sm:text-sm'
            }
          />
        ))}
      </div>
    </div>
  );
}
