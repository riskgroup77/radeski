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
}: PageHeroBannerProps) {
  return (
    <section className="relative flex w-full min-h-[640px] flex-col overflow-hidden lg:min-h-[720px]">
      <MediaImage
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="site-container relative z-10 flex flex-1 flex-col pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16">
        <div className="relative flex min-h-0 flex-1 flex-col max-w-xl lg:max-w-2xl">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-3 -right-2 sm:-left-5 sm:-right-4 lg:-left-10 lg:-right-8 -top-2 -bottom-2 rounded-[1.75rem] bg-[linear-gradient(118deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.92)_36%,rgba(255,255,255,0.68)_66%,rgba(255,255,255,0)_100%)]"
          />
          <div className="relative z-10 flex flex-1 flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-gold sm:mb-7 sm:text-xs">
              <Star className="h-3.5 w-3.5 shrink-0 fill-brand-gold text-brand-gold" />
              {badge}
            </span>

            <h1 className="text-3xl font-extrabold leading-[1.14] tracking-tight text-brand-text-primary sm:text-4xl md:text-[2.75rem] lg:text-5xl">
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

            <div className="mt-8 flex max-w-lg flex-col gap-3 sm:mt-10 sm:flex-row">
              <AppointmentBookingLink className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/80 bg-white px-6 py-3.5 text-sm font-bold text-brand-text-primary no-underline shadow-lg shadow-black/10 transition-colors hover:bg-white/90">
                <Calendar className="h-4 w-4 shrink-0" />
                {appointmentLabel}
              </AppointmentBookingLink>
              {secondaryCta}
            </div>

            <div className="mt-auto hidden min-h-[4.5rem] lg:block" aria-hidden />
          </div>
        </div>
        {after}
      </div>
    </section>
  );
}
