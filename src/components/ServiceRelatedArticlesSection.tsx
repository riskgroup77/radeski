import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { Locale, Article } from '../types';
import { DICTIONARY } from '../data';
import { articlePath } from '../routing/paths';
import { resolveArticleRouteKey } from '../utils/articles';
import { getRelatedArticlesForService } from '../utils/serviceRelatedArticles';
import ArticleCoverMedia from './ArticleCoverMedia';
import ArticleHashtagList from './ArticleHashtagList';
import { getLocalizedImage } from '../utils/localizedImage';
import { resolveArticleSummary } from '../utils/articleContent';

interface ServiceRelatedArticlesSectionProps {
  locale: Locale;
  categoryId: string;
  subId?: string;
  articles: Article[];
  dictionary?: Record<string, string>;
}

const SECTION_TITLE: Record<Locale, string> = {
  uz: "Ushbu xizmat bo'yicha foydali maqolalar",
  ru: 'Полезные статьи по этой услуге',
  en: 'Helpful articles for this service',
};

const SECTION_DESC: Record<Locale, string> = {
  uz: "Shifokorlarimiz tayyorlagan ma'lumotlar — simptomlar, davolash va profilaktika haqida.",
  ru: 'Материалы наших врачей о симптомах, лечении и профилактике по данному направлению.',
  en: 'Articles from our doctors on symptoms, treatment, and prevention for this specialty.',
};

export default function ServiceRelatedArticlesSection({
  locale,
  categoryId,
  subId,
  articles,
  dictionary,
}: ServiceRelatedArticlesSectionProps) {
  const d = dictionary || DICTIONARY[locale];
  const related = getRelatedArticlesForService(articles, categoryId, subId);

  if (related.length === 0) return null;

  return (
    <div className="mt-14 pt-10 border-t border-brand-sectiongray">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold tracking-widest uppercase py-1 px-3 bg-brand-gold-light/10 rounded-full mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          {locale === 'uz' ? 'Maqolalar' : locale === 'ru' ? 'Статьи' : 'Articles'}
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-brand-text-primary tracking-tight">
          {SECTION_TITLE[locale]}
        </h2>
        <p className="text-sm text-brand-text-muted mt-2 max-w-3xl">{SECTION_DESC[locale]}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {related.map((art) => {
          const image = getLocalizedImage(art.images, locale) ?? art.image;
          return (
            <Link
              key={art.id}
              to={articlePath(locale, resolveArticleRouteKey(art))}
              className="group bg-brand-white hover:bg-brand-offwhite border border-brand-sectiongray rounded-2xl overflow-hidden transition-all shadow-sm hover:shadow-md cursor-pointer flex flex-col"
            >
              {image ? (
                <ArticleCoverMedia
                  src={image}
                  alt={art.title[locale]}
                  variant="compact"
                  imageClassName="group-hover:scale-[1.01] transition-transform duration-300"
                />
              ) : (
                <div className="w-full aspect-[819/1024] bg-brand-offwhite flex items-center justify-center text-brand-text-muted text-xs">
                  {locale === 'uz' ? "Rasm yo'q" : locale === 'ru' ? 'Нет изображения' : 'No image'}
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col">
                <span className="text-[10px] text-brand-text-muted font-mono">{art.date}</span>
                <ArticleHashtagList
                  article={art}
                  locale={locale}
                  limit={4}
                  className="flex flex-wrap gap-x-2 gap-y-1 mt-2"
                  itemClassName="text-[10px] font-semibold text-brand-gold/90"
                />
                <h3 className="mt-2 text-sm font-bold text-brand-text-primary leading-snug group-hover:text-brand-gold transition-colors line-clamp-2">
                  {art.title[locale]}
                </h3>
                <p className="mt-2 text-xs text-brand-text-secondary line-clamp-3 font-light flex-1">
                  {resolveArticleSummary(art, locale)}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-brand-gold group-hover:text-brand-gold-dark">
                  {d.readMore}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
