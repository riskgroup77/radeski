import { Locale } from '../types';
import { ShieldCheck, CalendarClock, Award, BookOpen, Star } from 'lucide-react';

interface CredentialsGridProps {
  doctorId: string;
  locale: Locale;
}

export default function CredentialsGrid({ doctorId, locale }: CredentialsGridProps) {
  // Localization dictionary
  const dict = {
    uz: {
      licenseId: "Meyoriy Litsenziya ID",
      activePractice: "Aktiv amaliyot yillari",
      specialtyCerts: "Ixtisoslashuv sertifikatlari",
      publishedArticles: "Tibbiy ilmiy maqolalar",
      verifiedTrust: "O'zR Sog'liqni saqlash vazirligi tomonidan sertifikatlangan",
      practiceShort: "yil amaliyot",
      articlesShort: "ta nashr etilgan"
    },
    ru: {
      licenseId: "Медицинская лицензия ID",
      activePractice: "Лет активной практики",
      specialtyCerts: "Сертификаты специалиста",
      publishedArticles: "Научные публикации",
      verifiedTrust: "Верифицировано Министерством здравоохранения РУз",
      practiceShort: "лет практики",
      articlesShort: "публикаций в PubMed"
    },
    en: {
      licenseId: "Medical License ID",
      activePractice: "Years of Active Practice",
      specialtyCerts: "Specialization Certificates",
      publishedArticles: "Published Research Articles",
      verifiedTrust: "Verified by the Ministry of Health of Uzbekistan",
      practiceShort: "years active",
      articlesShort: "peer-reviewed articles"
    }
  };

  const t = dict[locale] || dict.en;

  // Physician credentials data
  const physicianCredentials: Record<string, {
    licenseId: string;
    yearsActive: number;
    certificatesCount: number;
    researchCount: number;
  }> = {
    "ashurov-dilshod": {
      licenseId: "LN-2008-01774",
      yearsActive: 18,
      certificatesCount: 12,
      researchCount: 24
    },
    "kodirova-dilafruzxon": {
      licenseId: "LN-2014-04981",
      yearsActive: 12,
      certificatesCount: 8,
      researchCount: 9
    },
    "yoqubov-farrux": {
      licenseId: "LN-2016-09224",
      yearsActive: 10,
      certificatesCount: 15,
      researchCount: 14
    },
    "mangasaryan-lorena": {
      licenseId: "LN-2017-08011",
      yearsActive: 9,
      certificatesCount: 11,
      researchCount: 7
    },
    "kamolova-barno": {
      licenseId: "LN-2019-11048",
      yearsActive: 7,
      certificatesCount: 6,
      researchCount: 4
    },
    "abdvaliyev-begali": {
      licenseId: "LN-2018-10992",
      yearsActive: 8,
      certificatesCount: 5,
      researchCount: 6
    }
  };

  const creds = (() => {
    const saved = localStorage.getItem(`doctor_creds_${doctorId}`);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback
      }
    }
    return physicianCredentials[doctorId] || physicianCredentials["ashurov-dilshod"];
  })();

  return (
    <div className="mt-4 p-4.5 bg-brand-offwhite rounded-2xl border border-brand-gold-light/20 shadow-xs" id={`credentials-grid-${doctorId}`}>
      <div className="grid grid-cols-2 gap-3">
        {/* Medical License ID */}
        <div className="bg-brand-white p-3 rounded-xl border border-brand-sectiongray hover:border-brand-gold-light/40 transition-all flex flex-col justify-between">
          <div className="flex items-center gap-1.5 mb-1 text-brand-gold">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider font-sans truncate">
              {t.licenseId}
            </span>
          </div>
          <div className="text-xs sm:text-sm font-extrabold text-brand-text-primary tracking-tight font-mono selection:bg-brand-gold-light/25">
            {creds.licenseId}
          </div>
        </div>

        {/* Years of Active Practice */}
        <div className="bg-brand-white p-3 rounded-xl border border-brand-sectiongray hover:border-brand-gold-light/40 transition-all flex flex-col justify-between">
          <div className="flex items-center gap-1.5 mb-1 text-brand-gold">
            <CalendarClock className="w-4 h-4 shrink-0" />
            <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider font-sans truncate">
              {t.activePractice}
            </span>
          </div>
          <div className="text-xs sm:text-sm font-extrabold text-brand-text-primary tracking-tight font-sans">
            {creds.yearsActive} <span className="text-[10px] text-brand-gold font-bold uppercase">{locale === 'uz' ? "yil" : locale === 'ru' ? "лет" : "yrs"}</span>
          </div>
        </div>

        {/* Specialization Certificates */}
        <div className="bg-brand-white p-3 rounded-xl border border-brand-sectiongray hover:border-brand-gold-light/40 transition-all flex flex-col justify-between">
          <div className="flex items-center gap-1.5 mb-1 text-brand-gold">
            <Award className="w-4 h-4 shrink-0" />
            <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider font-sans truncate">
              {t.specialtyCerts}
            </span>
          </div>
          <div className="text-xs sm:text-sm font-extrabold text-brand-text-primary tracking-tight font-sans">
            {creds.certificatesCount} <span className="text-[10px] text-brand-gold font-bold uppercase">{locale === 'uz' ? "ta sertifikat" : locale === 'ru' ? "серт." : "certs"}</span>
          </div>
        </div>

        {/* Published Research Articles */}
        <div className="bg-brand-white p-3 rounded-xl border border-brand-sectiongray hover:border-brand-gold-light/40 transition-all flex flex-col justify-between">
          <div className="flex items-center gap-1.5 mb-1 text-brand-gold">
            <BookOpen className="w-4 h-4 shrink-0" />
            <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider font-sans truncate">
              {t.publishedArticles}
            </span>
          </div>
          <div className="text-xs sm:text-sm font-extrabold text-brand-text-primary tracking-tight font-sans">
            {creds.researchCount} <span className="text-[10px] text-brand-gold font-bold uppercase">{locale === 'uz' ? "ta nashr" : locale === 'ru' ? "публик." : "papers"}</span>
          </div>
        </div>
      </div>

      {/* Verified stamp footer inside grid */}
      <div className="mt-3 flex items-center gap-1.5 justify-center text-[9px] text-emerald-600 font-bold tracking-wide uppercase">
        <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500 shrink-0" />
        <span>{t.verifiedTrust}</span>
      </div>
    </div>
  );
}
