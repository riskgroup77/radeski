import { Microscope } from 'lucide-react';
import type { Locale } from '../types';
import InstitutionalSectionPage from './InstitutionalSectionPage';

interface SkinPathologyCenterPageProps {
  locale: Locale;
}

export default function SkinPathologyCenterPage({ locale }: SkinPathologyCenterPageProps) {
  return (
    <InstitutionalSectionPage
      locale={locale}
      sectionId="skin-pathology-center"
      icon={<Microscope className="h-8 w-8 text-brand-gold" strokeWidth={1.75} />}
    />
  );
}
