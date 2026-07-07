import type { Locale } from '../types';
import { DICTIONARY } from '../data';
import { PageId } from '../routing/paths';
import HomeServicesPromoCarousel from './HomeServicesPromoCarousel';

interface HeroProps {
  locale: Locale;
  onOpenAppointment: () => void;
  onNavigate: (page: PageId) => void;
  clientCount?: number;
  doctorsCount?: number;
}

export default function Hero({ locale, onNavigate, clientCount, doctorsCount }: HeroProps) {
  const d = DICTIONARY[locale];

  return (
    <HomeServicesPromoCarousel
      locale={locale}
      appointmentLabel={d.appointmentBtn}
      clientCount={clientCount}
      doctorsCount={doctorsCount}
      onNavigate={onNavigate}
    />
  );
}
