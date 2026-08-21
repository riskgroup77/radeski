import type { ReactNode } from 'react';
import { Calendar, Check, Star } from 'lucide-react';
import AppointmentBookingLink from './AppointmentBookingLink';
import MediaImage from './MediaImage';

interface PageHeroBannerProps {
  image: string;
  badge: string;
  title: string;
  titleAccent?: string;
  description: string;
  note?: string;
  /** Bullet highlights shown between intro copy and CTAs (equipment pages). */
  highlights?: string[];
  /** Short callout under highlights, e.g. “Best for …”. */
  highlightFooter?: string;
  /** Compact spec tags under highlights. */
  specTags?: string[];
  appointmentLabel?: string;
  /** Custom primary CTA (e.g. Daavlin phone links). Replaces appointment button when set. */
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
  after?: ReactNode;
  /** Panoramic product lineups — split layout: copy left, image right. */
  imageVariant?: 'cover' | 'panoramic';
  /** White-background catalog photos — object-contain beside copy, no full-bleed hero. */
  productPhoto?: boolean;
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

export const heroPrimaryCtaSolidClass =
  'flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-gold px-6 py-3.5 text-sm font-bold text-white no-underline shadow-[0_4px_20px_-6px_rgba(196,154,79,0.45)] transition-all hover:bg-brand-gold-dark hover:shadow-[0_8px_24px_-8px_rgba(196,154,79,0.5)]';

export const heroSecondaryCtaSolidClass =
  'flex flex-1 items-center justify-center gap-2 rounded-xl border border-brand-sectiongray bg-brand-white px-6 py-3.5 text-sm font-bold text-brand-text-primary no-underline shadow-sm transition-all hover:border-brand-gold/45 hover:bg-brand-offwhite';

function HeroCtaRow({
  appointmentLabel,
  primaryCta,
  secondaryCta,
  solidButtons = false,
}: Pick<PageHeroBannerProps, 'appointmentLabel' | 'primaryCta' | 'secondaryCta'> & {
  solidButtons?: boolean;
}) {
  if (!appointmentLabel && !primaryCta && !secondaryCta) return null;

  const primaryClass = solidButtons ? heroPrimaryCtaSolidClass : heroPrimaryCtaClass;
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {primaryCta ??
        (appointmentLabel ? (
          <AppointmentBookingLink className={primaryClass}>
            <Calendar className="h-4 w-4 shrink-0" />
            {appointmentLabel}
          </AppointmentBookingLink>
        ) : null)}
      {secondaryCta}
    </div>
  );
}

function HeroHighlights({
  highlights,
  highlightFooter,
  specTags,
  lightSurface = false,
}: Pick<PageHeroBannerProps, 'highlights' | 'highlightFooter' | 'specTags'> & {
  lightSurface?: boolean;
}) {
  if (!highlights?.length && !highlightFooter && !specTags?.length) return null;

  const listClass = lightSurface
    ? 'space-y-2.5 rounded-2xl border border-brand-sectiongray bg-brand-offwhite/90 p-4 sm:p-5'
    : 'space-y-2.5 rounded-2xl border border-white/55 bg-white/30 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-sm sm:p-5';

  const tagClass = lightSurface
    ? 'rounded-lg border border-brand-sectiongray bg-brand-white px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-text-secondary sm:text-xs'
    : 'rounded-lg border border-white/70 bg-white/45 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-text-secondary backdrop-blur-sm sm:text-xs';

  return (
    <div className="mt-5 flex flex-1 flex-col gap-4 sm:mt-6">
      {highlights && highlights.length > 0 ? (
        <ul className={listClass}>
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-brand-text-primary/90">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-gold/35 bg-white">
                <Check className="h-3 w-3 text-brand-gold" strokeWidth={2.5} />
              </span>
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {specTags && specTags.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {specTags.map((tag) => (
            <span key={tag} className={tagClass}>
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      {highlightFooter ? (
        <p className="rounded-xl border border-brand-gold/25 bg-brand-gold-light/15 px-4 py-3 text-sm font-semibold leading-snug text-brand-text-primary/90">
          {highlightFooter}
        </p>
      ) : null}
    </div>
  );
}

function HeroCopy({
  badge,
  title,
  titleAccent,
  description,
  note,
  highlights,
  highlightFooter,
  specTags,
  appointmentLabel,
  primaryCta,
  secondaryCta,
  ctaPosition = 'inline',
  lightSurface = false,
  solidButtons = false,
}: Pick<
  PageHeroBannerProps,
  | 'badge'
  | 'title'
  | 'titleAccent'
  | 'description'
  | 'note'
  | 'highlights'
  | 'highlightFooter'
  | 'specTags'
  | 'appointmentLabel'
  | 'primaryCta'
  | 'secondaryCta'
  | 'ctaPosition'
> & { lightSurface?: boolean; solidButtons?: boolean }) {
  const hasMiddleContent =
    Boolean(note) ||
    Boolean(highlights?.length) ||
    Boolean(highlightFooter) ||
    Boolean(specTags?.length);
  const showCtas = Boolean(appointmentLabel || primaryCta || secondaryCta);

  const badgeClass = lightSurface
    ? 'inline-flex w-fit items-center gap-2 rounded-full border border-brand-gold/25 bg-brand-gold-light/20 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-gold shadow-sm sm:text-xs'
    : glassBadgeClass;

  const textBlock = (
    <>
      <span className={`mb-5 sm:mb-6 ${badgeClass}`}>
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
        <p className="mt-4 max-w-xl text-sm font-normal leading-relaxed text-brand-text-primary/88 sm:text-[15px]">
          {note}
        </p>
      ) : null}
    </>
  );

  if (ctaPosition === 'bottom') {
    return (
      <div className="flex h-full min-h-0 flex-1 flex-col">
        {textBlock}
        <HeroHighlights
          highlights={highlights}
          highlightFooter={highlightFooter}
          specTags={specTags}
          lightSurface={lightSurface}
        />
        <div
          className={
            hasMiddleContent
              ? 'mt-auto pt-6 sm:pt-8'
              : showCtas
                ? 'mt-auto pt-12 sm:pt-14 lg:pt-16 xl:pt-[4.5rem]'
                : 'mt-auto'
          }
        >
          {showCtas ? (
            <HeroCtaRow
              appointmentLabel={appointmentLabel}
              primaryCta={primaryCta}
              secondaryCta={secondaryCta}
              solidButtons={solidButtons}
            />
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <>
      {textBlock}
      <HeroHighlights
        highlights={highlights}
        highlightFooter={highlightFooter}
        specTags={specTags}
        lightSurface={lightSurface}
      />
      {showCtas ? (
        <div className={hasMiddleContent ? 'mt-6 sm:mt-8' : 'mt-8 sm:mt-10'}>
          <HeroCtaRow
            appointmentLabel={appointmentLabel}
            primaryCta={primaryCta}
            secondaryCta={secondaryCta}
            solidButtons={solidButtons}
          />
        </div>
      ) : null}
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
  highlights,
  highlightFooter,
  specTags,
  appointmentLabel,
  primaryCta,
  secondaryCta,
  after,
  imageVariant = 'cover',
  productPhoto = false,
  ctaPosition,
  imageAlt = '',
}: PageHeroBannerProps) {
  const isPanoramic = imageVariant === 'panoramic';
  const resolvedCtaPosition = ctaPosition ?? (isPanoramic ? 'inline' : 'bottom');
  const useProductLayout = isPanoramic && productPhoto;

  if (isPanoramic) {
    const copyPanelClass = useProductLayout
      ? 'rounded-[1.75rem] border border-brand-sectiongray bg-brand-white px-5 py-7 shadow-[0_8px_40px_-16px_rgba(7,27,46,0.1)] sm:px-7 sm:py-9 lg:px-8 lg:py-10'
      : `px-5 py-7 sm:px-7 sm:py-9 lg:px-8 lg:py-10 ${glassPanelClass}`;

    const imagePanelClass = useProductLayout
      ? 'relative overflow-hidden rounded-[1.75rem] border border-brand-sectiongray bg-gradient-to-br from-white via-slate-50 to-brand-gold-light/15 p-5 shadow-[0_12px_48px_-20px_rgba(7,27,46,0.12)] sm:p-6 lg:p-8'
      : `${glassImageFrameClass} p-4 sm:p-5 lg:p-6`;

    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-offwhite via-[#f7f9fc] to-brand-gold-light/15 py-10 sm:py-12 lg:py-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-6 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 bottom-8 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl"
        />

        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-10 xl:gap-12">
            <div className={copyPanelClass}>
              <HeroCopy
                badge={badge}
                title={title}
                titleAccent={titleAccent}
                description={description}
                note={note}
                highlights={highlights}
                highlightFooter={highlightFooter}
                specTags={specTags}
                appointmentLabel={appointmentLabel}
                primaryCta={primaryCta}
                secondaryCta={secondaryCta}
                ctaPosition={resolvedCtaPosition}
                lightSurface={useProductLayout}
                solidButtons={useProductLayout}
              />
            </div>

            <div className={imagePanelClass}>
              {!useProductLayout ? (
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(196,154,79,0.08),transparent_55%)]"
                />
              ) : (
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(196,154,79,0.07),transparent_58%)]"
                />
              )}
              <div
                className={`relative flex items-center justify-center ${
                  useProductLayout
                    ? 'min-h-[240px] sm:min-h-[300px] lg:min-h-full lg:py-4'
                    : 'min-h-[180px] sm:min-h-[220px] lg:min-h-[280px] xl:min-h-[320px]'
                }`}
              >
                <MediaImage
                  src={image}
                  alt={imageAlt || title}
                  className={
                    useProductLayout
                      ? 'h-auto max-h-[220px] w-full object-contain object-center drop-shadow-[0_24px_48px_rgba(7,27,46,0.14)] sm:max-h-[280px] lg:max-h-[420px] xl:max-h-[460px]'
                      : 'h-auto max-h-[200px] w-full object-contain object-center drop-shadow-[0_20px_36px_rgba(7,27,46,0.14)] sm:max-h-[240px] lg:max-h-[300px] xl:max-h-[340px]'
                  }
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
              highlights={highlights}
              highlightFooter={highlightFooter}
              specTags={specTags}
              appointmentLabel={appointmentLabel}
              primaryCta={primaryCta}
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
