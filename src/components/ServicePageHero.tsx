import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import MediaImage from './MediaImage';
import AppointmentBookingLink from './AppointmentBookingLink';
import { getServiceLucideIcon } from '../utils/serviceIcons';

interface ServicePageHeroProps {
  badge: string;
  title: string;
  description: string;
  image?: string | null;
  iconName?: string;
  appointmentLabel: string;
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
}

export default function ServicePageHero({
  badge,
  title,
  description,
  image,
  iconName,
  appointmentLabel,
  secondaryAction,
}: ServicePageHeroProps) {
  const IconComponent = iconName ? getServiceLucideIcon(iconName) : null;

  return (
    <div className="bg-brand-white rounded-3xl border border-brand-sectiongray overflow-hidden shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-0">
        <div className="relative min-h-[260px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[460px] bg-brand-sectiongray/40 order-1">
          {image ? (
            <MediaImage
              src={image}
              alt={title}
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-dark-navy to-brand-dark-navy/90">
              {IconComponent && (
                <div className="w-24 h-24 rounded-3xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center">
                  <IconComponent className="w-12 h-12 text-brand-gold" />
                </div>
              )}
            </div>
          )}
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/10 to-transparent hidden md:block pointer-events-none" />
        </div>

        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-2">
          <span className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-brand-gold-light/15 border border-brand-gold/25 text-brand-gold text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {badge}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold text-brand-text-primary leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-brand-text-secondary text-sm sm:text-base leading-relaxed">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <AppointmentBookingLink className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-sm rounded-xl no-underline shadow-md shadow-brand-gold/20 transition-colors">
              <Calendar className="w-4 h-4" />
              {appointmentLabel}
            </AppointmentBookingLink>
            {secondaryAction && (
              <button
                type="button"
                onClick={secondaryAction.onClick}
                className="inline-flex items-center gap-2 px-6 py-3 border border-brand-sectiongray bg-brand-white hover:bg-brand-offwhite text-brand-text-primary font-semibold text-sm rounded-xl transition-colors cursor-pointer"
              >
                {secondaryAction.label}
                <ArrowRight className="w-4 h-4 text-brand-gold" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
