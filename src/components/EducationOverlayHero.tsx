import type { ReactNode } from 'react';
import MediaImage from './MediaImage';

interface EducationOverlayHeroProps {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description: string;
  programNum?: string;
  after?: ReactNode;
}

export default function EducationOverlayHero({
  image,
  imageAlt,
  eyebrow,
  title,
  titleAccent,
  description,
  programNum,
  after,
}: EducationOverlayHeroProps) {
  return (
    <section className="relative flex min-h-[min(68vh,520px)] w-full flex-col justify-end overflow-hidden sm:min-h-[min(72vh,600px)] lg:min-h-[min(76vh,680px)]">
      <MediaImage
        src={image}
        alt={imageAlt}
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover object-[center_32%]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark-navy/95 via-brand-dark-navy/55 to-brand-dark-navy/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-dark-navy/50 via-transparent to-transparent"
      />

      <div className="site-container relative z-10 pb-8 pt-16 sm:pb-10 sm:pt-20 lg:pb-12 lg:pt-24">
        <div className="max-w-3xl">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">{eyebrow}</p>
          {programNum ? (
            <span className="mb-3 inline-flex rounded-xl bg-brand-dark-navy/80 px-3 py-1.5 text-sm font-extrabold text-brand-gold ring-1 ring-white/10">
              {programNum}
            </span>
          ) : null}
          <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            {title}
            {titleAccent ? (
              <>
                {' '}
                <span className="text-brand-gold">{titleAccent}</span>
              </>
            ) : null}
          </h1>
          <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-white/90 sm:mt-4 sm:text-base lg:text-[17px]">
            {description}
          </p>
        </div>
        {after}
      </div>
    </section>
  );
}
