import type { Article, Locale } from '../types';
import { formatArticleHashtags, resolveArticleTags } from '../utils/articleContent';

interface ArticleHashtagListProps {
  article: Article;
  locale: Locale;
  /** Max hashtags to show (default 6). */
  limit?: number;
  className?: string;
  itemClassName?: string;
}

/**
 * Compact #hashtag row for blog cards, teasers, and related articles.
 * Prefers local SEO tags (Fargona/Qoqon) while keeping topic tags visible.
 */
export default function ArticleHashtagList({
  article,
  locale,
  limit = 6,
  className = 'flex flex-wrap gap-x-2 gap-y-1',
  itemClassName = 'text-[10px] sm:text-[11px] font-semibold text-brand-gold/90',
}: ArticleHashtagListProps) {
  const tags = resolveArticleTags(article, locale);
  const localPriority = /fargona|fergana|qoqon|kokand|фергана|коканд|radeski/i;

  const ordered = [
    ...tags.filter((tag) => localPriority.test(tag)),
    ...tags.filter((tag) => !localPriority.test(tag)),
  ];

  const hashtags = formatArticleHashtags(ordered).slice(0, limit);
  if (!hashtags.length) return null;

  return (
    <div className={className} aria-label="hashtags">
      {hashtags.map((hash) => (
        <span key={hash} className={itemClassName}>
          {hash}
        </span>
      ))}
    </div>
  );
}
