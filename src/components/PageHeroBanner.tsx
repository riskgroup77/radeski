import type { ReactNode } from 'react';
import { Calendar, Star } from 'lucide-react';
import AppointmentBookingLink from './AppointmentBookingLink';
import MediaImage from './MediaImage';

interface PageHeroBannerProps {
  image: string;
  badge: string;
  title: string;
  titleAccent?: string;
  description: string;
  note?: string;
  appointmentLabel: string;
  secondaryCta?: ReactNode;
  after?: ReactNode;
  /** Panoramic product lineups — split layout: copy left, image right. */
  imageVariant?: 'cover' | 'panoramic';
  /** Cover heroes: push CTAs to the bottom of the glass panel. */
  ctaPosition?: 'inline' | 'bottom';
  imageAlt?: string;
}

const glassPanelClass =
  'rounded-[1.75rem] border border-white/70 bg-white/45 shadow-[0_8px_40px_-12px_rgba(7,27,46,0.18),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-2xl backdrop-saturate-150 ring-1 ring-white/50';

const glassImageFrameClass =
  'relative overflow-hidden rounded-[1.75rem] border border-white/75 bg-white/55 shadow-[0_12px_48px_-16px_rgba(7,27,46,0.2),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl ring-1 ring-white/60';

const glassBadgeClass =
  'inline-flex w-fit items-center gap-2 rounded-full border border-white/80 bg-white/50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-gold shadow-sm backdrop-blur-md sm:text-xs';

export const heroPrimaryCtaClass =
  'flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/90 bg-white/75 px-6 py-3.5 text-sm font-bold text-brand-text-primary no-underline shadow-[0_4px_24px_-6px_rgba(7,27,46,0.15)] backdrop-blur-md transition-all hover:bg-white/95 hover:shadow-[0_8px_28px_-8px_rgba(7,27,46,0.2)]';

export const heroSecondaryCtaClass =
  'flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/90 bg-white/60 px-6 py-3.5 text-sm font-bold text-brand-text-primary no-underline shadow-[0_4px_24px_-6px_rgba(7,27,46,0.12)] backdrop-blur-md transition-all hover:bg-white/85 hover:shadow-[0_8px_28px_-8px_rgba(7,27,46,0.18)]';

function HeroCtaRow({
  appointmentLabel,
  secondaryCta,
}: Pick<PageHeroBannerProps, 'appointmentLabel' | 'secondaryCta'>) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <AppointmentBookingLink className={heroPrimaryCtaClass}>
        <Calendar className="h-4 w-4 shrink-0" />
        {appointmentLabel}
      </AppointmentBookingLink>
      {secondaryCta}
    </div>
  );
}

function HeroCopy({
  badge,
  title,
  titleAccent,
  description,
  note,
  appointmentLabel,
  secondaryCta,
  ctaPosition = 'inline',
}: Pick<
  PageHeroBannerProps,
  | 'badge'
  | 'title'
  | 'titleAccent'
  | 'description'
  | 'note'
  | 'appointmentLabel'
  | 'secondaryCta'
  | 'ctaPosition'
>) {
  const textBlock = (
    <>
      <span className={`mb-5 sm:mb-6 ${glassBadgeClass}`}>
        <Star className="h-3.5 w-3.5 shrink-0 fill-brand-gold text-brand-gold" />
        {badge}
      </span>

      <h1 className="text-3xl font-extrabold leading-[1.14] tracking-tight text-brand-text-primary sm:text-4xl lg:text-[2.65rem] xl:text-5xl">
        {title}
        {titleAccent ? (
          <>
            {' '}
            <span className="font-bold not-italic text-brand-gold">{titleAccent}</span>
          </>
        ) : null}
      </h1>

      <p className="mt-5 max-w-lg text-sm font-light leading-relaxed text-brand-text-secondary sm:mt-6 sm:text-base">
        {description}
      </p>

      {note ? (
        <p className="mt-4 max-w-lg text-sm font-medium leading-relaxed text-brand-text-primary/85 sm:text-[15px]">
          {note}
        </p>
      ) : null}
    </>
  );

  if (ctaPosition === 'bottom') {
    return (
      <div className="flex h-full min-h-0 flex-1 flex-col">
        {textBlock}
        <div className="mt-auto pt-12 sm:pt-14 lg:pt-16 xl:pt-[4.5rem]">
          <HeroCtaRow appointmentLabel={appointmentLabel} secondaryCta={secondaryCta} />
        </div>
      </div>
    );
  }

  return (
    <>
      {textBlock}
      <div className="mt-8 sm:mt-10">
        <HeroCtaRow appointmentLabel={appointmentLabel} secondaryCta={secondaryCta} />
      </div>
    </>
  );
}

export default function PageHeroBanner({
  image,
  badge,
  title,
  titleAccent,
  description,
  note,
  appointmentLabel,
  secondaryCta,
  after,
  imageVariant = 'cover',
  ctaPosition,
  imageAlt = '',
}: PageHeroBannerProps) {
  const isPanoramic = imageVariant === 'panoramic';
  const resolvedCtaPosition = ctaPosition ?? (isPanoramic ? 'inline' : 'bottom');

  if (isPanoramic) {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-[#f7f9fc] to-brand-gold-light/20 py-10 sm:py-12 lg:py-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-6 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 bottom-8 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl"
        />

        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] md:gap-8 lg:gap-10 xl:gap-12">
            <div className={`px-5 py-7 sm:px-7 sm:py-9 lg:px-8 lg:py-10 ${glassPanelClass}`}>
              <HeroCopy
                badge={badge}
                title={title}
                titleAccent={titleAccent}
                description={description}
                note={note}
                appointmentLabel={appointmentLabel}
                secondaryCta={secondaryCta}
                ctaPosition={resolvedCtaPosition}
              />
            </div>

            <div className={`${glassImageFrameClass} p-4 sm:p-5 lg:p-6`}>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(196,154,79,0.08),transparent_55%)]"
              />
              <div className="relative flex min-h-[180px] items-center justify-center sm:min-h-[220px] lg:min-h-[280px] xl:min-h-[320px]">
                <MediaImage
                  src={image}
                  alt={imageAlt}
                  className="h-auto max-h-[200px] w-full object-contain object-center drop-shadow-[0_20px_36px_rgba(7,27,46,0.14)] sm:max-h-[240px] lg:max-h-[300px] xl:max-h-[340px]"
                />
              </div>
            </div>
          </div>
          {after}
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-[680px] w-full flex-col overflow-hidden lg:min-h-[760px] xl:min-h-[820px]">
      <MediaImage
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-dark-navy/62 via-brand-dark-navy/28 to-brand-dark-navy/5"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark-navy/25 via-transparent to-transparent"
      />

      <div className="site-container relative z-10 flex flex-1 flex-col py-10 sm:py-12 lg:py-14 xl:py-16">
        <div className="relative flex min-h-0 max-w-xl flex-1 flex-col lg:max-w-2xl">
          <div
            className={`relative z-10 flex min-h-[420px] flex-1 flex-col px-5 py-8 sm:min-h-[460px] sm:px-7 sm:py-10 lg:min-h-[520px] lg:px-9 lg:py-11 xl:min-h-[580px] xl:py-12 ${glassPanelClass}`}
          >
            <HeroCopy
              badge={badge}
              title={title}
              titleAccent={titleAccent}
              description={description}
              note={note}
              appointmentLabel={appointmentLabel}
              secondaryCta={secondaryCta}
              ctaPosition={resolvedCtaPosition}
            />
          </div>
        </div>
        {after}
      </div>
    </section>
  );
}
