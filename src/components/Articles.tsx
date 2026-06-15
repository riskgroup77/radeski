import { useMemo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { HelpCircle, Eye, Calendar, User, CornerUpLeft, BookOpen, ChevronRight, Share2, Loader2 } from 'lucide-react';
import { Locale, Article } from '../types';
import { DICTIONARY } from '../data';
import { getArticleBySlug } from '../api/publicApi';
import { mapArticleFromApi } from '../api/mappers';
import { ApiError } from '../api/client';
import { articlesListPath } from '../routing/paths';

interface ArticlesProps {
  locale: Locale;
  articles?: Article[];
  dictionary?: Record<string, string>;
  articleSlug?: string | null;
  onOpenArticle: (slug: string) => void;
  onBackToList: () => void;
}

export default function Articles({
  locale,
  articles,
  dictionary,
  articleSlug = null,
  onOpenArticle,
  onBackToList,
}: ArticlesProps) {
  const d = dictionary || DICTIONARY[locale];
  const dynamicArticles = articles || [];
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    return dynamicArticles.filter((item) => {
      const query = searchQuery.toLowerCase();
      return (
        item.title[locale].toLowerCase().includes(query) ||
        item.summary[locale].toLowerCase().includes(query)
      );
    });
  }, [searchQuery, locale, dynamicArticles]);

  useEffect(() => {
    if (!articleSlug) {
      setActiveArticle(null);
      setDetailError(null);
      return;
    }

    let cancelled = false;
    setDetailLoading(true);
    setDetailError(null);

    getArticleBySlug(articleSlug)
      .then((data) => {
        if (!cancelled) {
          setActiveArticle(mapArticleFromApi(data));
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setDetailError(err instanceof ApiError ? err.message : 'Failed to load article');
          setActiveArticle(null);
        }
      })
      .finally(() => {
        if (!cancelled) setDetailLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [articleSlug]);

  return (
    <section id="articles-page" className="py-16 bg-brand-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {!articleSlug ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
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
                  <div
                    key={art.id}
                    id={`art-card-${art.id}`}
                    className="bg-brand-white rounded-2xl border border-brand-sectiongray overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative h-56 w-full overflow-hidden bg-brand-sectiongray">
                        {art.image ? (
                          <img
                            src={art.image}
                            alt={art.title[locale]}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-brand-text-muted text-xs">
                            {locale === 'uz' ? "Rasm yo'q" : locale === 'ru' ? 'Нет изображения' : 'No image'}
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <div className="flex gap-4 items-center text-[10px] sm:text-xs text-brand-text-muted font-mono mb-3">
                          <span className="flex items-center gap-1.5 font-light">
                            <Calendar className="w-3.5 h-3.5" />
                            {art.date}
                          </span>
                          <span className="flex items-center gap-1.5 font-light">
                            <Eye className="w-3.5 h-3.5" />
                            {art.views} {locale === 'uz' ? "marta ko'rildi" : locale === 'ru' ? 'просмотров' : 'reads'}
                          </span>
                        </div>

                        <h3 className="font-extrabold text-brand-text-primary text-base leading-snug group-hover:text-brand-gold transition-colors">
                          {art.title[locale]}
                        </h3>

                        <p className="text-brand-text-secondary text-xs sm:text-sm mt-3 line-clamp-3 leading-relaxed font-light">
                          {art.summary[locale]}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-brand-offwhite flex items-center justify-between mt-4">
                      <span className="text-xs text-brand-text-muted italic font-light truncate max-w-[150px]">
                        By {art.author[locale]}
                      </span>
                      <button
                        onClick={() => onOpenArticle(art.slug)}
                        className="text-xs text-brand-gold font-bold group-hover:text-brand-gold-dark flex items-center gap-1 cursor-pointer"
                      >
                        <span>{d.readMore}</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
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
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="max-w-3xl mx-auto"
            >
              <Link
                to={articlesListPath(locale)}
                onClick={() => onBackToList()}
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-text-secondary hover:text-brand-text-primary bg-brand-offwhite hover:bg-brand-sectiongray px-3.5 py-2 rounded-xl transition-all cursor-pointer mb-8 border border-brand-sectiongray"
              >
                <CornerUpLeft className="w-4 h-4" />
                <span>{d.backToArticles}</span>
              </Link>

              {detailLoading && (
                <div className="flex items-center justify-center gap-2 py-20 text-brand-text-muted">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{locale === 'uz' ? 'Maqola yuklanmoqda...' : locale === 'ru' ? 'Загрузка статьи...' : 'Loading article...'}</span>
                </div>
              )}

              {detailError && (
                <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl text-sm text-rose-700">
                  {detailError}
                </div>
              )}

              {activeArticle && !detailLoading && (
                <>
                  <div className="mb-6">
                    <span className="text-[10px] font-bold text-brand-gold tracking-widest uppercase font-mono py-1 px-2.5 bg-brand-gold-light/10 rounded-md">
                      {locale === 'uz' ? 'Dorivor darslik' : locale === 'ru' ? 'Клиническая статья' : 'Verified Clinical Post'}
                    </span>
                    <h1 className="text-2xl sm:text-3xl md:text-3xl font-extrabold text-brand-text-primary tracking-tight mt-4 leading-tight">
                      {activeArticle.title[locale]}
                    </h1>

                    <div className="flex gap-4 sm:gap-6 items-center text-xs text-brand-text-secondary border-y border-brand-offwhite py-3 mt-6 font-mono font-light">
                      <span className="flex items-center gap-1.5 shrink-0">
                        <User className="w-4 h-4 text-brand-text-muted" />
                        {activeArticle.author[locale]}
                      </span>
                      <span className="flex items-center gap-1.5 shrink-0">
                        <Calendar className="w-4 h-4 text-brand-text-muted" />
                        {activeArticle.date}
                      </span>
                      <span className="flex items-center gap-1.5 shrink-0">
                        <Eye className="w-4 h-4 text-brand-text-muted" />
                        {activeArticle.views} {locale === 'uz' ? "ko'rildi" : locale === 'ru' ? 'просмотров' : 'reads'}
                      </span>
                    </div>
                  </div>

                  <div className="h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden bg-brand-sectiongray mb-8 border border-brand-offwhite">
                    {activeArticle.image ? (
                      <img
                        src={activeArticle.image}
                        alt={activeArticle.title[locale]}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-brand-text-muted text-sm">
                        {locale === 'uz' ? "Rasm yo'q" : locale === 'ru' ? 'Нет изображения' : 'No image'}
                      </div>
                    )}
                  </div>

                  <div className="prose prose-slate max-w-none text-brand-text-secondary leading-relaxed text-sm sm:text-base font-light space-y-6">
                    <p className="font-medium text-brand-text-primary bg-brand-gold-light/5 p-4 sm:p-5 rounded-xl border-l-4 border-brand-gold leading-normal">
                      {activeArticle.summary[locale]}
                    </p>
                    <div className="pt-2 font-light text-brand-text-secondary prose-headings:font-display prose-headings:text-brand-text-primary prose-a:text-brand-gold">
                      <ReactMarkdown>{activeArticle.content[locale]}</ReactMarkdown>
                    </div>
                  </div>

                  <div className="border-t border-brand-offwhite pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-xs text-brand-text-muted leading-tight">
                      <Share2 className="w-4 h-4 text-brand-text-muted" />
                      <span>
                        {locale === 'uz'
                          ? "Ushbu ma'lumotni do'stlaringiz bilan ulashing:"
                          : locale === 'ru'
                            ? 'Поделитесь полезной статьей:'
                            : 'Share this clinical advisory:'}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1.5 bg-brand-offwhite hover:bg-brand-sectiongray border border-brand-sectiongray rounded-lg text-xs font-semibold text-brand-text-secondary transition-colors cursor-pointer">
                        Telegram
                      </span>
                      <span className="px-3 py-1.5 bg-brand-offwhite hover:bg-brand-sectiongray border border-brand-sectiongray rounded-lg text-xs font-semibold text-brand-text-secondary transition-colors cursor-pointer">
                        Facebook
                      </span>
                      <span className="px-3 py-1.5 bg-brand-offwhite hover:bg-brand-sectiongray border border-brand-sectiongray rounded-lg text-xs font-semibold text-brand-text-secondary transition-colors cursor-pointer">
                        Copy Link
                      </span>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
