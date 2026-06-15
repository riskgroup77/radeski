import { Locale, DoctorCredentials } from '../types';
import { ShieldCheck, CalendarClock, Award, BookOpen, Star } from 'lucide-react';

interface CredentialsGridProps {
  doctorId: string;
  locale: Locale;
  credentials?: DoctorCredentials;
  specialty?: string;
}

export default function CredentialsGrid({ doctorId, locale, credentials, specialty }: CredentialsGridProps) {
  const dict = {
    uz: {
      specialty: "Mutaxassisligi",
      activePractice: "Aktiv amaliyot yillari",
      specialtyCerts: "Ixtisoslashuv sertifikatlari",
      publishedArticles: "Tibbiy ilmiy maqolalar",
      verifiedTrust: "O'zR Sog'liqni saqlash vazirligi tomonidan sertifikatlangan",
    },
    ru: {
      specialty: "Специализация",
      activePractice: "Лет активной практики",
      specialtyCerts: "Сертификаты специалиста",
      publishedArticles: "Научные публикации",
      verifiedTrust: "Верифицировано Министерством здравоохранения РУз",
    },
    en: {
      specialty: "Specialization",
      activePractice: "Years of Active Practice",
      specialtyCerts: "Specialization Certificates",
      publishedArticles: "Published Research Articles",
      verifiedTrust: "Verified by the Ministry of Health of Uzbekistan",
    },
  };

  const t = dict[locale] || dict.en;

  const defaultCredentials: DoctorCredentials = {
    licenseId: '—',
    yearsActive: 0,
    certificatesCount: 0,
    researchCount: 0,
  };

  const creds = credentials || defaultCredentials;

  if (!credentials) {
    return null;
  }

  return (
    <div className="mt-4 p-4.5 bg-brand-offwhite rounded-2xl border border-brand-gold-light/20 shadow-xs" id={`credentials-grid-${doctorId}`}>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-brand-white p-3 rounded-xl border border-brand-sectiongray hover:border-brand-gold-light/40 transition-all flex flex-col justify-between">
          <div className="flex items-center gap-1.5 mb-1 text-brand-gold">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider font-sans truncate">
              {t.specialty}
            </span>
          </div>
          <div className="text-xs sm:text-sm font-extrabold text-brand-text-primary tracking-tight leading-snug">
            {specialty || '—'}
          </div>
        </div>

        <div className="bg-brand-white p-3 rounded-xl border border-brand-sectiongray hover:border-brand-gold-light/40 transition-all flex flex-col justify-between">
          <div className="flex items-center gap-1.5 mb-1 text-brand-gold">
            <CalendarClock className="w-4 h-4 shrink-0" />
            <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider font-sans truncate">
              {t.activePractice}
            </span>
          </div>
          <div className="text-xs sm:text-sm font-extrabold text-brand-text-primary tracking-tight font-sans">
            {creds.yearsActive}{' '}
            <span className="text-[10px] text-brand-gold font-bold uppercase">
              {locale === 'uz' ? 'yil' : locale === 'ru' ? 'лет' : 'yrs'}
            </span>
          </div>
        </div>

        <div className="bg-brand-white p-3 rounded-xl border border-brand-sectiongray hover:border-brand-gold-light/40 transition-all flex flex-col justify-between">
          <div className="flex items-center gap-1.5 mb-1 text-brand-gold">
            <Award className="w-4 h-4 shrink-0" />
            <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider font-sans truncate">
              {t.specialtyCerts}
            </span>
          </div>
          <div className="text-xs sm:text-sm font-extrabold text-brand-text-primary tracking-tight font-sans">
            {creds.certificatesCount}{' '}
            <span className="text-[10px] text-brand-gold font-bold uppercase">
              {locale === 'uz' ? 'ta sertifikat' : locale === 'ru' ? 'серт.' : 'certs'}
            </span>
          </div>
        </div>

        <div className="bg-brand-white p-3 rounded-xl border border-brand-sectiongray hover:border-brand-gold-light/40 transition-all flex flex-col justify-between">
          <div className="flex items-center gap-1.5 mb-1 text-brand-gold">
            <BookOpen className="w-4 h-4 shrink-0" />
            <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider font-sans truncate">
              {t.publishedArticles}
            </span>
          </div>
          <div className="text-xs sm:text-sm font-extrabold text-brand-text-primary tracking-tight font-sans">
            {creds.researchCount}{' '}
            <span className="text-[10px] text-brand-gold font-bold uppercase">
              {locale === 'uz' ? 'ta nashr' : locale === 'ru' ? 'публик.' : 'papers'}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-1.5 justify-center text-[9px] text-emerald-600 font-bold tracking-wide uppercase">
        <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500 shrink-0" />
        <span>{t.verifiedTrust}</span>
      </div>
    </div>
  );
}
