import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, Clock, Eye, Calendar, User, CornerUpLeft, BookOpen, ChevronRight, Share2 } from 'lucide-react';
import { Locale } from '../types';
import { DICTIONARY, ARTICLES } from '../data';

interface ArticlesProps {
  locale: Locale;
}

export default function Articles({ locale }: ArticlesProps) {
  const d = DICTIONARY[locale];
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter(item => {
      return (
        item.title[locale].toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary[locale].toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content[locale].toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [searchQuery, locale]);

  const activeArticle = useMemo(() => {
    return ARTICLES.find(a => a.id === selectedArticleId);
  }, [selectedArticleId]);

  return (
    <section id="articles-page" className="py-16 bg-brand-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {!activeArticle ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Head block */}
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs font-bold text-brand-gold tracking-widest uppercase py-1 px-3 bg-brand-gold-light/10 rounded-full font-sans">
                  {locale === 'uz' ? "Blog & Maqolalar" : locale === 'ru' ? "Блог и Статьи" : "Medical Blog & Publications"}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text-primary tracking-tight mt-3">
                  {d.articlesTitle}
                </h2>
                <p className="text-brand-text-muted mt-4 text-sm sm:text-base">
                  {d.articlesDesc}
                </p>
              </div>

              {/* Serach bar */}
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

              {/* Articles lists grids */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((art) => (
                  <div
                    key={art.id}
                    id={`art-card-${art.id}`}
                    className="bg-brand-white rounded-2xl border border-brand-sectiongray overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image Frame */}
                      <div className="relative h-56 w-full overflow-hidden bg-brand-sectiongray">
                        <img
                          src={art.image}
                          alt={art.title[locale]}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                        />
                      </div>

                      {/* Info wrap */}
                      <div className="p-6">
                        <div className="flex gap-4 items-center text-[10px] sm:text-xs text-brand-text-muted font-mono mb-3">
                          <span className="flex items-center gap-1.5 font-light">
                            <Calendar className="w-3.5 h-3.5" />
                            {art.date}
                          </span>
                          <span className="flex items-center gap-1.5 font-light">
                            <Eye className="w-3.5 h-3.5" />
                            {art.views} {locale === 'uz' ? "marta ko'rildi" : locale === 'ru' ? "просмотров" : "reads"}
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
                        onClick={() => setSelectedArticleId(art.id)}
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
                    {locale === 'uz' ? "Hech qanday maqola topilmadi." : locale === 'ru' ? "Статьи не найдены." : "No articles found matching search."}
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
              {/* Back CTA */}
              <button
                onClick={() => setSelectedArticleId(null)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-text-secondary hover:text-brand-text-primary bg-brand-offwhite hover:bg-brand-sectiongray px-3.5 py-2 rounded-xl transition-all cursor-pointer mb-8 border border-brand-sectiongray"
              >
                <CornerUpLeft className="w-4 h-4" />
                <span>{d.backToArticles}</span>
              </button>

              {/* Header inside detail */}
              <div className="mb-6">
                <span className="text-[10px] font-bold text-brand-gold tracking-widest uppercase font-mono py-1 px-2.5 bg-brand-gold-light/10 rounded-md">
                  {locale === 'uz' ? "Dorivor darslik" : locale === 'ru' ? "Клиническая статья" : "Verified Clinical Post"}
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
                    {activeArticle.views} {locale === 'uz' ? "ko'rildi" : locale === 'ru' ? "просмотров" : "reads"}
                  </span>
                </div>
              </div>

              {/* Large Image */}
              <div className="h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden bg-brand-sectiongray mb-8 border border-brand-offwhite">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title[locale]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Full Content */}
              <div className="prose prose-slate max-w-none text-brand-text-secondary leading-relaxed text-sm sm:text-base font-light space-y-6">
                <p className="font-medium text-brand-text-primary bg-brand-gold-light/5 p-4 sm:p-5 rounded-xl border-l-4 border-brand-gold leading-normal">
                  {activeArticle.summary[locale]}
                </p>
                <div className="pt-2 whitespace-pre-line font-light text-brand-text-secondary">
                  {activeArticle.content[locale]}
                </div>
              </div>

              {/* Share box simulated */}
              <div className="border-t border-brand-offwhite pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 text-xs text-brand-text-muted leading-tight">
                  <Share2 className="w-4 h-4 text-brand-text-muted" />
                  <span>{locale === 'uz' ? "Ushbu ma'lumotni do'stlaringiz bilan ulashing:" : locale === 'ru' ? "Поделитесь полезной статьей:" : "Share this clinical advisory:"}</span>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1.5 bg-brand-offwhite hover:bg-brand-sectiongray border border-brand-sectiongray rounded-lg text-xs font-semibold text-brand-text-secondary transition-colors cursor-pointer">Telegram</span>
                  <span className="px-3 py-1.5 bg-brand-offwhite hover:bg-brand-sectiongray border border-brand-sectiongray rounded-lg text-xs font-semibold text-brand-text-secondary transition-colors cursor-pointer">Facebook</span>
                  <span className="px-3 py-1.5 bg-brand-offwhite hover:bg-brand-sectiongray border border-brand-sectiongray rounded-lg text-xs font-semibold text-brand-text-secondary transition-colors cursor-pointer">Copy Link</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
