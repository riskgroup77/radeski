import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Calendar,
  User,
  CornerUpLeft,
  Share2,
  Loader2,
  ArrowUpRight,
  Clock,
} from 'lucide-react';
import { Locale, Article } from '../types';
import { DICTIONARY } from '../data';
import { getLocalizedImage } from '../utils/localizedImage';
import { enrichArticle } from '../utils/enrichArticles';
import { resolveArticleReadingMinutes, resolveArticleSummary } from '../utils/articleContent';
import { getArticleBySlug } from '../api/publicApi';
import { mapArticleFromApi } from '../api/mappers';
import { ApiError } from '../api/client';
import { articlePath, articlesListPath, absoluteUrl } from '../routing/paths';
import { findArticleByRouteParam, resolveArticleApiSlug } from '../utils/articles';
import MediaImage from './MediaImage';
import ArticleDetailContent from './ArticleDetailContent';
import ArticleViewsBadge from './ArticleViewsBadge';

interface ArticlePageProps {
  locale: Locale;
  articleId: string;
  articles: Article[];
  dictionary?: Record<string, string>;
  onBackToList: () => void;
  onOpenArticle: (articleId: string) => void;
  onViewsUpdate?: (match: { id: string; slug: string }, views: number) => void;
}

function buildPreviewArticle(articleId: string, articles: Article[]): Article | null {
  const preview = findArticleByRouteParam(articleId, articles);
  return preview ? enrichArticle(preview) : null;
}

export default function ArticlePage({
  locale,
  articleId,
  articles,
  dictionary,
  onBackToList,
  onOpenArticle: _onOpenArticle,
  onViewsUpdate,
}: ArticlePageProps) {
  const d = dictionary || DICTIONARY[locale];
  const articlesRef = useRef(articles);
  articlesRef.current = articles;
  const onViewsUpdateRef = useRef(onViewsUpdate);
  onViewsUpdateRef.current = onViewsUpdate;

  const [activeArticle, setActiveArticle] = useState<Article | null>(() =>
    buildPreviewArticle(articleId, articles),
  );
  const [detailLoading, setDetailLoading] = useState(
    () => !buildPreviewArticle(articleId, articles),
  );
  const [detailRefreshing, setDetailRefreshing] = useState(false);
  const [detailError, setDetailError] = useState<string | null>(null);

  useEffect(() => {
    const preview = buildPreviewArticle(articleId, articlesRef.current);
    setDetailError(null);
    if (preview) {
      setActiveArticle(preview);
      setDetailLoading(false);
    } else {
      setActiveArticle(null);
      setDetailLoading(true);
    }
  }, [articleId]);

  useEffect(() => {
    let cancelled = false;
    const preview = buildPreviewArticle(articleId, articlesRef.current);
    const apiSlug = resolveArticleApiSlug(articleId, articlesRef.current);

    if (preview) {
      setDetailRefreshing(true);
    }

    getArticleBySlug(apiSlug)
      .then((data) => {
        if (cancelled) return;
        const mapped = enrichArticle(mapArticleFromApi(data));
        setActiveArticle(mapped);
        if (mapped.views !== preview?.views) {
          onViewsUpdateRef.current?.({ id: mapped.id, slug: mapped.slug }, mapped.views);
        }
      })
      .catch((err) => {
        if (cancelled) return;
        setDetailError(err instanceof ApiError ? err.message : 'Failed to load article');
        if (!preview) {
          setActiveArticle(null);
        }
      })
      .finally(() => {
        if (cancelled) return;
        setDetailLoading(false);
        setDetailRefreshing(false);
      });

    return () => {
      cancelled = true;
    };
  }, [articleId]);

  const relatedArticles = articles
    .filter((art) => art.id !== activeArticle?.id)
    .slice(0, 3);

  const shareUrl = activeArticle
    ? absoluteUrl(articlePath(locale, activeArticle.id))
    : absoluteUrl(articlePath(locale, articleId));

  const articleImage = activeArticle
    ? getLocalizedImage(activeArticle.images, locale) ?? activeArticle.image
    : null;

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

        {detailLoading && !activeArticle && (
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

        {activeArticle && (
          <motion.article
            id={`article-page-${activeArticle.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {detailRefreshing && (
              <div className="mb-4 flex items-center gap-2 text-[11px] text-brand-text-muted">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>
                  {locale === 'uz'
                    ? "To'liq maqola yangilanmoqda..."
                    : locale === 'ru'
                      ? 'Обновление полной версии статьи...'
                      : 'Refreshing full article...'}
                </span>
              </div>
            )}

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
                <ArticleViewsBadge
                  views={activeArticle.views}
                  locale={locale}
                  variant="full"
                  className="text-xs text-brand-text-secondary shrink-0"
                />
                <span className="flex items-center gap-1.5 shrink-0">
                  <Clock className="w-4 h-4 text-brand-text-muted" />
                  {resolveArticleReadingMinutes(activeArticle, locale)}{' '}
                  {locale === 'uz' ? 'daq' : locale === 'ru' ? 'мин' : 'min'}
                </span>
              </div>
            </div>

            <div className="h-[280px] sm:h-[380px] lg:h-[420px] w-full rounded-2xl overflow-hidden bg-brand-sectiongray mb-8 border border-brand-offwhite">
              {articleImage ? (
                <MediaImage
                  src={articleImage}
                  alt={activeArticle.title[locale]}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-brand-text-muted text-sm">
                  {locale === 'uz' ? "Rasm yo'q" : locale === 'ru' ? 'Нет изображения' : 'No image'}
                </div>
              )}
            </div>

            <ArticleDetailContent article={activeArticle} locale={locale} />

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
                  {relatedArticles.map((art) => {
                    const relatedImage = getLocalizedImage(art.images, locale) ?? art.image;
                    return (
                    <Link
                      key={art.id}
                      to={articlePath(locale, art.id)}
                      className="group bg-brand-offwhite hover:bg-brand-white border border-brand-sectiongray rounded-xl overflow-hidden transition-all cursor-pointer"
                    >
                      {relatedImage && (
                        <div className="h-28 overflow-hidden bg-brand-sectiongray">
                          <MediaImage
                            src={relatedImage}
                            alt={art.title[locale]}
                            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform"
                          />
                        </div>
                      )}
                      <div className="p-4">
                      <span className="text-[10px] text-brand-text-muted font-mono">{art.date}</span>
                      <h3 className="mt-2 text-sm font-bold text-brand-text-primary leading-snug group-hover:text-brand-gold transition-colors line-clamp-2">
                        {art.title[locale]}
                      </h3>
                      <p className="mt-2 text-xs text-brand-text-muted line-clamp-2 font-light">
                        {resolveArticleSummary(art, locale)}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-gold">
                        {d.readMore}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                      </div>
                    </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.article>
        )}
      </div>
    </section>
  );
}
