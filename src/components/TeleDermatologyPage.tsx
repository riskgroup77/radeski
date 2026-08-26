import { Video } from 'lucide-react';
import type { Locale } from '../types';
import InstitutionalSectionPage from './InstitutionalSectionPage';

interface TeleDermatologyPageProps {
  locale: Locale;
}

export default function TeleDermatologyPage({ locale }: TeleDermatologyPageProps) {
  return (
    <InstitutionalSectionPage
      locale={locale}
      sectionId="tele-dermatology"
      icon={<Video className="h-8 w-8 text-brand-gold" strokeWidth={1.75} />}
    />
  );
}
