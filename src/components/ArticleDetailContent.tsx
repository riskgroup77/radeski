import { useMemo, useState, type ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock,
  HelpCircle,
  Stethoscope,
  Tag,
} from 'lucide-react';
import type { Article, Locale } from '../types';
import {
  extractArticleHeadings,
  getArticleDisclaimer,
  getArticleSectionLabels,
  resolveArticleBody,
  resolveArticleRichContent,
  resolveArticleReadingMinutes,
  resolveArticleSummary,
} from '../utils/articleContent';
import AppointmentBookingLink from './AppointmentBookingLink';

interface ArticleDetailContentProps {
  article: Article;
  locale: Locale;
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-');
}

export default function ArticleDetailContent({ article, locale }: ArticleDetailContentProps) {
  const labels = getArticleSectionLabels(locale);
  const summary = resolveArticleSummary(article, locale);
  const body = resolveArticleBody(article, locale);
  const rich = resolveArticleRichContent(article, locale);
  const readingMinutes = resolveArticleReadingMinutes(article, locale);
  const toc = useMemo(() => extractArticleHeadings(body), [body]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const markdownComponents = useMemo(
    () => ({
      h2: ({ children }: { children?: ReactNode }) => {
        const text = String(children);
        const id = slugifyHeading(text);
        return (
          <h2
            id={id}
            className="scroll-mt-28 text-xl sm:text-2xl font-extrabold text-brand-text-primary mt-10 mb-4 leading-tight"
          >
            {children}
          </h2>
        );
      },
      h3: ({ children }: { children?: ReactNode }) => {
        const text = String(children);
        const id = slugifyHeading(text);
        return (
          <h3
            id={id}
            className="scroll-mt-28 text-lg font-bold text-brand-text-primary mt-7 mb-3 leading-snug"
          >
            {children}
          </h3>
        );
      },
      p: ({ children }: { children?: ReactNode }) => (
        <p className="text-sm sm:text-base text-brand-text-secondary font-light leading-relaxed mb-4">
          {children}
        </p>
      ),
      ul: ({ children }: { children?: ReactNode }) => (
        <ul className="list-disc pl-5 space-y-2 mb-5 text-sm sm:text-base text-brand-text-secondary font-light">
          {children}
        </ul>
      ),
      ol: ({ children }: { children?: ReactNode }) => (
        <ol className="list-decimal pl-5 space-y-2 mb-5 text-sm sm:text-base text-brand-text-secondary font-light">
          {children}
        </ol>
      ),
      li: ({ children }: { children?: ReactNode }) => (
        <li className="leading-relaxed">{children}</li>
      ),
      strong: ({ children }: { children?: ReactNode }) => (
        <strong className="font-semibold text-brand-text-primary">{children}</strong>
      ),
      table: ({ children }: { children?: ReactNode }) => (
        <div className="overflow-x-auto mb-6 rounded-xl border border-brand-sectiongray">
          <table className="min-w-full text-sm">{children}</table>
        </div>
      ),
      thead: ({ children }: { children?: ReactNode }) => (
        <thead className="bg-brand-offwhite text-brand-text-primary">{children}</thead>
      ),
      th: ({ children }: { children?: ReactNode }) => (
        <th className="px-4 py-3 text-left font-bold border-b border-brand-sectiongray">{children}</th>
      ),
      td: ({ children }: { children?: ReactNode }) => (
        <td className="px-4 py-3 border-b border-brand-offwhite text-brand-text-secondary font-light">
          {children}
        </td>
      ),
    }),
    [],
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_240px] gap-10">
      <div className="min-w-0">
        <div className="flex flex-wrap gap-2 mb-5">
          {rich.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold bg-brand-gold-light/10 px-2.5 py-1 rounded-full"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-brand-text-muted bg-brand-offwhite px-2.5 py-1 rounded-full">
            <Clock className="w-3 h-3" />
            {readingMinutes} {labels.minRead} {labels.readingTime.toLowerCase()}
          </span>
        </div>

        <p className="font-medium text-brand-text-primary bg-brand-gold-light/5 p-4 sm:p-5 rounded-xl border-l-4 border-brand-gold leading-relaxed text-sm sm:text-base">
          {summary}
        </p>

        {rich.keyTakeaways.length > 0 && (
          <section className="mt-8 bg-brand-dark-navy text-white rounded-2xl p-5 sm:p-6">
            <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-gold mb-4">
              <BookOpen className="w-4 h-4" />
              {labels.keyTakeaways}
            </h2>
            <ul className="space-y-3">
              {rich.keyTakeaways.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm font-light leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {body ? (
          <div className="pt-4 prose prose-slate max-w-none">
            <ReactMarkdown components={markdownComponents}>{body}</ReactMarkdown>
          </div>
        ) : (
          <p className="text-brand-text-muted italic mt-6">
            {locale === 'uz'
              ? "To'liq matn tez orada qo'shiladi."
              : locale === 'ru'
                ? 'Полный текст скоро будет добавлен.'
                : 'Full article content will be available soon.'}
          </p>
        )}

        {rich.whenToSeeDoctor.length > 0 && (
          <section className="mt-10 bg-rose-50/80 border border-rose-100 rounded-2xl p-5 sm:p-6">
            <h2 className="flex items-center gap-2 text-sm font-bold text-rose-800 mb-4">
              <Stethoscope className="w-4 h-4" />
              {labels.whenToSeeDoctor}
            </h2>
            <ul className="space-y-2">
              {rich.whenToSeeDoctor.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-rose-900/90 font-light leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {rich.faq.length > 0 && (
          <section className="mt-10">
            <h2 className="flex items-center gap-2 text-lg font-extrabold text-brand-text-primary mb-4">
              <HelpCircle className="w-5 h-5 text-brand-gold" />
              {labels.faq}
            </h2>
            <div className="space-y-3">
              {rich.faq.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-brand-sectiongray rounded-xl overflow-hidden bg-brand-white"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left cursor-pointer hover:bg-brand-offwhite/60 transition-colors"
                    >
                      <span className="text-sm font-semibold text-brand-text-primary leading-snug">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-brand-gold shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-sm text-brand-text-secondary font-light leading-relaxed border-t border-brand-offwhite pt-3">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <p className="mt-10 text-xs text-brand-text-muted italic border-t border-brand-offwhite pt-6 leading-relaxed">
          <strong className="font-semibold text-brand-text-secondary not-italic">
            {labels.disclaimer}:{' '}
          </strong>
          {getArticleDisclaimer(locale)}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <AppointmentBookingLink className="inline-flex items-center gap-2 px-5 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs sm:text-sm rounded-xl transition-all no-underline">
            {locale === 'uz'
              ? 'Dermatologga yozilish'
              : locale === 'ru'
                ? 'Записаться к дерматологу'
                : 'Book dermatologist visit'}
          </AppointmentBookingLink>
        </div>
      </div>

      {toc.length > 0 && (
        <aside className="hidden lg:block">
          <div className="sticky top-28 bg-brand-offwhite/80 border border-brand-sectiongray rounded-2xl p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-4">
              {labels.tableOfContents}
            </h3>
            <nav className="space-y-2">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block text-xs leading-snug hover:text-brand-gold transition-colors ${
                    item.level === 3 ? 'pl-3 text-brand-text-muted' : 'font-semibold text-brand-text-secondary'
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      )}
    </div>
  );
}
