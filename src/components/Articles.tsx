import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { HelpCircle, Calendar, BookOpen, ChevronRight, Clock } from 'lucide-react';
import ArticleViewsBadge from './ArticleViewsBadge';
import { Locale, Article } from '../types';
import { DICTIONARY } from '../data';
import { articlePath } from '../routing/paths';
import MediaImage from './MediaImage';
import { getLocalizedImage } from '../utils/localizedImage';
import {
  resolveArticleReadingMinutes,
  resolveArticleSummary,
  resolveArticleTags,
} from '../utils/articleContent';

interface ArticlesProps {
  locale: Locale;
  articles?: Article[];
  dictionary?: Record<string, string>;
}

export default function Articles({ locale, articles, dictionary }: ArticlesProps) {
  const d = dictionary || DICTIONARY[locale];
  const dynamicArticles = articles || [];
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    return dynamicArticles.filter((item) => {
      const query = searchQuery.toLowerCase();
      return (
        item.title[locale].toLowerCase().includes(query) ||
        resolveArticleSummary(item, locale).toLowerCase().includes(query) ||
        resolveArticleTags(item, locale).some((tag) => tag.toLowerCase().includes(query))
      );
    });
  }, [searchQuery, locale, dynamicArticles]);

  return (
    <section id="articles-page" className="py-16 bg-brand-white min-h-screen">
      <div className="site-container">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-gold tracking-widest uppercase py-1 px-3 bg-brand-gold-light/10 rounded-full font-sans">
              {locale === 'uz' ? 'Blog & Maqolalar' : locale === 'ru' ? 'Блог и Статьи' : 'Medical Blog & Publications'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text-primary tracking-tight mt-3">
              {d.articlesTitle}
            </h2>
            <p className="text-brand-text-muted mt-4 text-sm sm:text-base">
              {d.articlesDesc}
            </p>
          </div>

          <div className="relative w-full max-w-md mx-auto mb-12">
            <input
              id="article-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={d.searchPlaceholder}
              className="w-full pl-10 pr-4 py-3 bg-brand-offwhite hover:bg-brand-offwhite/55 border border-brand-sectiongray focus:bg-brand-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/25 focus:border-brand-gold transition-all text-sm text-brand-text-primary shadow-sm font-sans"
            />
            <BookOpen className="w-5 h-5 text-brand-text-muted absolute left-3 top-3.5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                id={`art-card-${art.id}`}
                className="bg-brand-white rounded-2xl border border-brand-sectiongray overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <Link
                  to={articlePath(locale, art.id)}
                  className="flex flex-col flex-1 cursor-pointer"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-brand-sectiongray">
                    {getLocalizedImage(art.images, locale) ?? art.image ? (
                      <MediaImage
                        src={(getLocalizedImage(art.images, locale) ?? art.image)!}
                        alt={art.title[locale]}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-brand-text-muted text-xs">
                        {locale === 'uz' ? "Rasm yo'q" : locale === 'ru' ? 'Нет изображения' : 'No image'}
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-1">
                    <div className="flex gap-4 items-center text-[10px] sm:text-xs text-brand-text-muted font-mono mb-3 flex-wrap">
                      <span className="flex items-center gap-1.5 font-light">
                        <Calendar className="w-3.5 h-3.5" />
                        {art.date}
                      </span>
                      <span className="flex items-center gap-1.5 font-light">
                        <Clock className="w-3.5 h-3.5" />
                        {resolveArticleReadingMinutes(art, locale)} {locale === 'uz' ? 'daq' : locale === 'ru' ? 'мин' : 'min'}
                      </span>
                      <ArticleViewsBadge
                        views={art.views}
                        locale={locale}
                        className="text-[10px] sm:text-xs text-brand-text-muted font-mono"
                      />
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {resolveArticleTags(art, locale).slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-bold uppercase tracking-wide text-brand-gold bg-brand-gold-light/10 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-extrabold text-brand-text-primary text-base leading-snug group-hover:text-brand-gold transition-colors">
                      {art.title[locale]}
                    </h3>

                    <p className="text-brand-text-secondary text-xs sm:text-sm mt-3 line-clamp-3 leading-relaxed font-light">
                      {resolveArticleSummary(art, locale)}
                    </p>
                  </div>
                </Link>

                <div className="p-6 pt-0 border-t border-brand-offwhite flex items-center justify-between mt-4">
                  <span className="text-xs text-brand-text-muted italic font-light truncate max-w-[150px]">
                    By {art.author[locale]}
                  </span>
                  <Link
                    to={articlePath(locale, art.id)}
                    className="text-xs text-brand-gold font-bold group-hover:text-brand-gold-dark flex items-center gap-1 cursor-pointer"
                  >
                    <span>{d.readMore}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <HelpCircle className="w-12 h-12 text-brand-text-muted mx-auto mb-4" />
              <p className="text-brand-text-muted text-sm">
                {locale === 'uz' ? 'Hech qanday maqola topilmadi.' : locale === 'ru' ? 'Статьи не найдены.' : 'No articles found matching search.'}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
