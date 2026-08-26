import { Link } from 'react-router-dom';
import type { Locale } from '../types';
import {
  getInstitutionalNavSection,
  institutionalTopicHref,
  type InstitutionalNavId,
} from '../data/institutionalNavContent';
import { pagePath } from '../routing/paths';

interface InstitutionalMegaMenuProps {
  locale: Locale;
  activeSectionId: InstitutionalNavId;
  onNavigate?: () => void;
}

export default function InstitutionalMegaMenu({
  locale,
  activeSectionId,
  onNavigate,
}: InstitutionalMegaMenuProps) {
  const section = getInstitutionalNavSection(activeSectionId);
  const overviewLabel =
    locale === 'uz'
      ? "Bo'lim haqida"
      : locale === 'ru'
        ? 'О разделе'
        : 'Section overview';

  const comingSoonNote =
    locale === 'uz'
      ? "Mavzular alohida tayyorlanmoqda — tez orada to'ldiriladi."
      : locale === 'ru'
        ? 'Темы готовятся отдельно — раздел скоро будет наполнен.'
        : 'Topics are being prepared separately — this section will be filled in soon.';

  return (
    <div className="absolute left-0 right-0 top-full z-[190] pt-1">
      <div
        className="border-b border-brand-gold/15 bg-white/98 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)] backdrop-blur-md animate-in fade-in slide-in-from-top-1 duration-200"
        role="region"
        aria-label={section.dropdownTitle[locale]}
      >
      <div className="site-container py-4 sm:py-5">
        <div className="mb-3 flex flex-wrap items-end justify-between gap-3 border-b border-brand-sectiongray/70 pb-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gold">
              {section.dropdownTitle[locale]}
            </p>
            <p className="mt-1 max-w-3xl text-xs font-light leading-relaxed text-brand-text-secondary sm:text-sm">
              {section.dropdownHint[locale]}
            </p>
          </div>
          <Link
            to={pagePath(locale, section.pageId)}
            onClick={onNavigate}
            className="shrink-0 rounded-lg border border-brand-gold/25 bg-brand-gold-light/10 px-3 py-1.5 text-[11px] font-semibold text-brand-gold-dark no-underline transition-colors hover:bg-brand-gold-light/20 sm:text-xs"
          >
            {overviewLabel}
          </Link>
        </div>

        {section.topics.length > 0 ? (
          <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {section.topics.map((topic) => (
              <Link
                key={topic.id}
                to={institutionalTopicHref(locale, section, topic)}
                onClick={onNavigate}
                className="group rounded-lg px-3 py-2.5 text-[13px] font-medium leading-snug text-brand-text-secondary no-underline transition-colors hover:bg-brand-offwhite hover:text-brand-text-primary"
              >
                <span className="inline-flex items-start gap-2">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-gold/70 transition-colors group-hover:bg-brand-gold"
                    aria-hidden="true"
                  />
                  <span>{topic.label[locale]}</span>
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-dashed border-brand-gold/25 bg-brand-gold-light/5 px-4 py-3 text-sm font-light leading-relaxed text-brand-text-secondary">
            {comingSoonNote}
          </p>
        )}
      </div>
      </div>
    </div>
  );
}
