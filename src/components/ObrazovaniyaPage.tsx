import { GraduationCap } from 'lucide-react';
import type { Locale } from '../types';
import InstitutionalSectionPage from './InstitutionalSectionPage';

interface ObrazovaniyaPageProps {
  locale: Locale;
}

export default function ObrazovaniyaPage({ locale }: ObrazovaniyaPageProps) {
  return (
    <InstitutionalSectionPage
      locale={locale}
      sectionId="obrazovaniya"
      icon={<GraduationCap className="h-8 w-8 text-brand-gold" strokeWidth={1.75} />}
    />
  );
}
