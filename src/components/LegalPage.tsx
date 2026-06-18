import { Link } from 'react-router-dom';
import { FileText, Shield, ArrowLeft, CalendarDays } from 'lucide-react';
import { Locale } from '../types';
import { LEGAL_DOCUMENTS, LegalPageType } from '../data/legalContent';
import { pagePath } from '../routing/paths';

interface LegalPageProps {
  locale: Locale;
  type: LegalPageType;
}

export default function LegalPage({ locale, type }: LegalPageProps) {
  const doc = LEGAL_DOCUMENTS[type];
  const Icon = type === 'terms' ? FileText : Shield;
  const otherType: LegalPageType = type === 'terms' ? 'privacy' : 'terms';
  const otherDoc = LEGAL_DOCUMENTS[otherType];

  const updatedLabel =
    locale === 'uz' ? "So'nggi yangilanish" : locale === 'ru' ? 'Последнее обновление' : 'Last updated';

  return (
    <section id={`${type}-page`} className="py-16 bg-brand-offwhite min-h-screen">
      <div className="site-container">
        <Link
          to={pagePath(locale, 'home')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-brand-text-secondary hover:text-brand-gold-dark bg-brand-white border border-brand-sectiongray px-3.5 py-2 rounded-xl transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {locale === 'uz' ? 'Bosh sahifaga qaytish' : locale === 'ru' ? 'На главную' : 'Back to home'}
        </Link>

        <div className="bg-brand-white rounded-2xl border border-brand-sectiongray shadow-sm overflow-hidden">
          <div className="px-6 sm:px-10 py-8 sm:py-10 border-b border-brand-sectiongray bg-gradient-to-br from-brand-white to-brand-offwhite">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-gold-light/15 border border-brand-gold-light/30 flex items-center justify-center text-brand-gold shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-brand-gold tracking-widest uppercase">
                  Radeski Skin & Aesthetic Clinic
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-text-primary tracking-tight mt-1">
                  {doc.pageTitle[locale]}
                </h1>
                <p className="text-brand-text-muted text-sm sm:text-base mt-2 leading-relaxed">
                  {doc.pageSubtitle[locale]}
                </p>
                <p className="inline-flex items-center gap-1.5 text-xs text-brand-text-muted mt-4 font-mono">
                  <CalendarDays className="w-3.5 h-3.5" />
                  {updatedLabel}: {doc.lastUpdated}
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 sm:px-10 py-8 sm:py-10 space-y-8">
            <p className="text-brand-text-secondary text-sm sm:text-base leading-relaxed font-light border-l-4 border-brand-gold pl-4">
              {doc.intro[locale]}
            </p>

            {doc.sections.map((section, index) => (
              <div key={index} className="space-y-3">
                <h2 className="text-base sm:text-lg font-bold text-brand-text-primary tracking-tight">
                  {section.title[locale]}
                </h2>
                <div className="space-y-3">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-brand-text-secondary text-sm sm:text-base leading-relaxed font-light"
                    >
                      {paragraph[locale]}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="px-6 sm:px-10 py-6 border-t border-brand-sectiongray bg-brand-offwhite/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-xs text-brand-text-muted">
              {locale === 'uz'
                ? "Savollar bo'yicha: info@radeski.uz | +998 (73) 200-73-73"
                : locale === 'ru'
                  ? 'По вопросам: info@radeski.uz | +998 (73) 200-73-73'
                  : 'Questions: info@radeski.uz | +998 (73) 200-73-73'}
            </p>
            <Link
              to={pagePath(locale, otherType)}
              className="text-xs font-bold text-brand-gold hover:text-brand-gold-dark transition-colors"
            >
              {otherDoc.pageTitle[locale]} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
