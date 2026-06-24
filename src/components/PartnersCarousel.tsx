import { HeartHandshake } from 'lucide-react';
import type { ClinicPartner } from '../data/sitePagesContent';
import MediaImage from './MediaImage';

type PartnersLocale = 'uz' | 'ru' | 'en';

interface PartnersCarouselProps {
  partners: ClinicPartner[];
  locale: PartnersLocale;
  ariaLabel: string;
  badgeLabel: string;
}

function PartnerCard({
  partner,
  locale,
  badgeLabel,
}: {
  partner: ClinicPartner;
  locale: PartnersLocale;
  badgeLabel: string;
}) {
  return (
    <article className="group relative flex w-[min(82vw,300px)] shrink-0 flex-col overflow-hidden rounded-2xl border border-brand-sectiongray/80 bg-white shadow-sm transition-all duration-300 hover:border-brand-gold/35 hover:shadow-lg hover:shadow-brand-gold/10 sm:w-[300px] lg:w-[320px]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex min-h-[152px] items-center justify-center border-b border-brand-sectiongray/60 bg-white px-6 py-7 sm:min-h-[168px] sm:px-8">
        {partner.logo ? (
          <MediaImage
            src={partner.logo}
            alt={partner.name[locale] || partner.name.uz}
            className="relative z-10 max-h-14 w-full max-w-[240px] object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:max-h-16 md:max-h-[72px]"
          />
        ) : (
          <span className="text-brand-text-muted/40 text-xs">—</span>
        )}
      </div>

      <div className="flex flex-1 flex-col items-center justify-center bg-white px-5 py-4 text-center">
        <p className="text-sm font-extrabold text-brand-text-primary leading-snug sm:text-base">
          {partner.name[locale] || partner.name.uz}
        </p>
        <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-brand-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
          <HeartHandshake className="h-3 w-3" aria-hidden="true" />
          {badgeLabel}
        </span>
      </div>
    </article>
  );
}

export default function PartnersCarousel({
  partners,
  locale,
  ariaLabel,
  badgeLabel,
}: PartnersCarouselProps) {
  if (partners.length === 0) return null;

  const loopItems = [...partners, ...partners];

  return (
    <div
      className="partners-marquee group/marquee relative overflow-hidden py-1"
      aria-label={ariaLabel}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-brand-white via-brand-white/80 to-transparent sm:w-16"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-brand-white via-brand-white/80 to-transparent sm:w-16"
        aria-hidden="true"
      />

      <div className="partners-marquee-track flex w-max gap-5 sm:gap-6 lg:gap-8">
        {loopItems.map((partner, index) => (
          <PartnerCard
            key={`${partner.id}-${index}`}
            partner={partner}
            locale={locale}
            badgeLabel={badgeLabel}
          />
        ))}
      </div>
    </div>
  );
}
