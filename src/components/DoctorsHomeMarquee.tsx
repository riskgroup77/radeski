import type { Doctor, Locale } from '../types';
import MediaImage from './MediaImage';

interface DoctorsHomeMarqueeProps {
  doctors: Doctor[];
  locale: Locale;
  ariaLabel: string;
  educationLabel: string;
  viewProfileLabel: string;
  onDoctorClick: (doctorId: string) => void;
}

function DoctorCard({
  doctor,
  locale,
  educationLabel,
  viewProfileLabel,
  onDoctorClick,
}: {
  doctor: Doctor;
  locale: Locale;
  educationLabel: string;
  viewProfileLabel: string;
  onDoctorClick: (doctorId: string) => void;
}) {
  const experienceSuffix =
    locale === 'uz' ? 'yil tajriba' : locale === 'ru' ? 'лет практики' : 'years practice';

  return (
    <article className="flex w-[min(82vw,280px)] shrink-0 flex-col justify-between overflow-hidden rounded-xl border border-brand-sectiongray bg-brand-white shadow-xs transition-all hover:shadow-sm sm:w-[280px] lg:w-[300px]">
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-offwhite">
        {doctor.photo ? (
          <MediaImage
            src={doctor.photo}
            alt={doctor.name[locale]}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-xs text-brand-text-muted">—</div>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-dark-navy/50 to-transparent" />
        <span className="absolute bottom-3 left-3 rounded-full bg-brand-gold px-2.5 py-0.5 text-[10px] font-bold text-white shadow-sm">
          {doctor.experience[locale]} {experienceSuffix}
        </span>
      </div>
      <div className="p-5">
        <span className="font-mono text-[10px] font-bold uppercase tracking-wide text-brand-gold">
          {doctor.role[locale]}
        </span>
        <button
          type="button"
          onClick={() => onDoctorClick(doctor.id)}
          className="mt-1 w-full cursor-pointer text-left text-md font-extrabold leading-snug tracking-tight text-brand-text-primary transition-colors hover:text-brand-gold sm:text-base"
        >
          {doctor.name[locale]}
        </button>
        {doctor.education[locale] && (
          <div className="mt-2">
            <span className="text-xs font-extrabold uppercase tracking-wide text-brand-text-primary">
              {educationLabel}
            </span>
            <p className="mt-1 line-clamp-2 text-sm font-semibold leading-relaxed text-brand-text-primary">
              {doctor.education[locale]}
            </p>
          </div>
        )}
        <p className="mt-2 line-clamp-2 text-xs font-light leading-relaxed text-brand-text-muted">
          {doctor.bio[locale]}
        </p>
        <button
          type="button"
          onClick={() => onDoctorClick(doctor.id)}
          className="mt-4 w-full cursor-pointer rounded-lg bg-brand-gold-light/10 py-2.5 text-center text-xs font-bold text-brand-gold-dark transition-colors hover:bg-brand-gold-light/20"
        >
          {viewProfileLabel}
        </button>
      </div>
    </article>
  );
}

export default function DoctorsHomeMarquee({
  doctors,
  locale,
  ariaLabel,
  educationLabel,
  viewProfileLabel,
  onDoctorClick,
}: DoctorsHomeMarqueeProps) {
  if (doctors.length === 0) return null;

  const loopItems = [...doctors, ...doctors];

  return (
    <div className="partners-marquee group/marquee relative overflow-hidden py-1" aria-label={ariaLabel}>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-brand-white via-brand-white/80 to-transparent sm:w-16"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-brand-white via-brand-white/80 to-transparent sm:w-16"
        aria-hidden="true"
      />

      <div className="partners-marquee-track flex w-max gap-5 sm:gap-6 lg:gap-8">
        {loopItems.map((doctor, index) => (
          <DoctorCard
            key={`${doctor.id}-${index}`}
            doctor={doctor}
            locale={locale}
            educationLabel={educationLabel}
            viewProfileLabel={viewProfileLabel}
            onDoctorClick={onDoctorClick}
          />
        ))}
      </div>
    </div>
  );
}
