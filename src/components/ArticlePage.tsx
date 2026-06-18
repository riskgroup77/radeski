import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import {
  Eye,
  Calendar,
  User,
  CornerUpLeft,
  Share2,
  Loader2,
  ArrowUpRight,
} from 'lucide-react';
import { Locale, Article } from '../types';
import { DICTIONARY } from '../data';
import { getArticleBySlug } from '../api/publicApi';
import { mapArticleFromApi } from '../api/mappers';
import { ApiError } from '../api/client';
import { articlePath, articlesListPath, absoluteUrl } from '../routing/paths';
import { findArticleByRouteParam, resolveArticleApiSlug } from '../utils/articles';
import MediaImage from './MediaImage';

interface ArticlePageProps {
  locale: Locale;
  articleId: string;
  articles: Article[];
  dictionary?: Record<string, string>;
  onBackToList: () => void;
  onOpenArticle: (articleId: string) => void;
}

export default function ArticlePage({
  locale,
  articleId,
  articles,
  dictionary,
  onBackToList,
  onOpenArticle,
}: ArticlePageProps) {
  const d = dictionary || DICTIONARY[locale];
  const previewArticle = findArticleByRouteParam(articleId, articles);
  const [activeArticle, setActiveArticle] = useState<Article | null>(previewArticle ?? null);
  const [detailLoading, setDetailLoading] = useState(true);
  const [detailError, setDetailError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setDetailLoading(true);
    setDetailError(null);

    const preview = findArticleByRouteParam(articleId, articles);
    if (preview) {
      setActiveArticle(preview);
    }

    const apiSlug = resolveArticleApiSlug(articleId, articles);

    getArticleBySlug(apiSlug)
      .then((data) => {
        if (!cancelled) {
          setActiveArticle(mapArticleFromApi(data));
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setDetailError(err instanceof ApiError ? err.message : 'Failed to load article');
          if (!preview) {
            setActiveArticle(null);
          }
        }
      })
      .finally(() => {
        if (!cancelled) setDetailLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [articleId, articles]);

  const relatedArticles = articles
    .filter((art) => art.id !== activeArticle?.id)
    .slice(0, 3);

  const shareUrl = activeArticle
    ? absoluteUrl(articlePath(locale, activeArticle.id))
    : absoluteUrl(articlePath(locale, articleId));

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      window.prompt(
        locale === 'uz' ? 'Havolani nusxalang:' : locale === 'ru' ? 'Скопируйте ссылку:' : 'Copy link:',
        shareUrl,
      );
    }
  };

  return (
    <section id="article-detail-page" className="py-12 sm:py-16 bg-brand-white min-h-screen">
      <div className="site-container">
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
            <span>
              {locale === 'uz' ? 'Maqola yuklanmoqda...' : locale === 'ru' ? 'Загрузка статьи...' : 'Loading article...'}
            </span>
          </div>
        )}

        {detailError && !activeArticle && (
          <div className="max-w-3xl mx-auto p-6 bg-rose-50 border border-rose-100 rounded-2xl text-center">
            <p className="text-sm text-rose-700 mb-5">{detailError}</p>
            <button
              onClick={() => onBackToList()}
              className="px-5 py-2.5 bg-brand-gold text-white font-bold text-xs rounded-xl cursor-pointer"
            >
              {d.backToArticles}
            </button>
          </div>
        )}

        {activeArticle && !detailLoading && (
          <motion.article
            id={`article-page-${activeArticle.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <span className="text-[10px] font-bold text-brand-gold tracking-widest uppercase font-mono py-1 px-2.5 bg-brand-gold-light/10 rounded-md">
                {locale === 'uz' ? 'Dorivor darslik' : locale === 'ru' ? 'Клиническая статья' : 'Verified Clinical Post'}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-text-primary tracking-tight mt-4 leading-tight">
                {activeArticle.title[locale]}
              </h1>

              <div className="flex flex-wrap gap-4 sm:gap-6 items-center text-xs text-brand-text-secondary border-y border-brand-offwhite py-3 mt-6 font-mono font-light">
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
                  {activeArticle.views}{' '}
                  {locale === 'uz' ? "ko'rildi" : locale === 'ru' ? 'просмотров' : 'reads'}
                </span>
              </div>
            </div>

            <div className="h-[280px] sm:h-[380px] lg:h-[420px] w-full rounded-2xl overflow-hidden bg-brand-sectiongray mb-8 border border-brand-offwhite">
              {activeArticle.image ? (
                <MediaImage
                  src={activeArticle.image}
                  alt={activeArticle.title[locale]}
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
              {activeArticle.content[locale] ? (
                <div className="pt-2 font-light text-brand-text-secondary prose-headings:font-display prose-headings:text-brand-text-primary prose-a:text-brand-gold">
                  <ReactMarkdown>{activeArticle.content[locale]}</ReactMarkdown>
                </div>
              ) : (
                <p className="text-brand-text-muted italic">
                  {locale === 'uz'
                    ? "To'liq matn tez orada qo'shiladi."
                    : locale === 'ru'
                      ? 'Полный текст скоро будет добавлен.'
                      : 'Full article content will be available soon.'}
                </p>
              )}
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
              <div className="flex flex-wrap gap-2">
                <a
                  href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(activeArticle.title[locale])}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-brand-offwhite hover:bg-brand-sectiongray border border-brand-sectiongray rounded-lg text-xs font-semibold text-brand-text-secondary transition-colors"
                >
                  Telegram
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-brand-offwhite hover:bg-brand-sectiongray border border-brand-sectiongray rounded-lg text-xs font-semibold text-brand-text-secondary transition-colors"
                >
                  Facebook
                </a>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="px-3 py-1.5 bg-brand-offwhite hover:bg-brand-sectiongray border border-brand-sectiongray rounded-lg text-xs font-semibold text-brand-text-secondary transition-colors cursor-pointer"
                >
                  {locale === 'uz' ? 'Havolani nusxalash' : locale === 'ru' ? 'Копировать ссылку' : 'Copy Link'}
                </button>
              </div>
            </div>

            {relatedArticles.length > 0 && (
              <div className="mt-14 pt-10 border-t border-brand-offwhite">
                <h2 className="text-xl sm:text-2xl font-extrabold text-brand-text-primary tracking-tight mb-6">
                  {locale === 'uz'
                    ? "Boshqa foydali maqolalar"
                    : locale === 'ru'
                      ? 'Другие полезные статьи'
                      : 'More helpful articles'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedArticles.map((art) => (
                    <Link
                      key={art.id}
                      to={articlePath(locale, art.id)}
                      onClick={() => onOpenArticle(art.id)}
                      className="group bg-brand-offwhite hover:bg-brand-white border border-brand-sectiongray rounded-xl p-4 transition-all cursor-pointer"
                    >
                      <span className="text-[10px] text-brand-text-muted font-mono">{art.date}</span>
                      <h3 className="mt-2 text-sm font-bold text-brand-text-primary leading-snug group-hover:text-brand-gold transition-colors line-clamp-2">
                        {art.title[locale]}
                      </h3>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-gold">
                        {d.readMore}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.article>
        )}
      </div>
    </section>
  );
}
