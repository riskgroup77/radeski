import { Eye } from 'lucide-react';
import type { Locale } from '../types';
import { formatArticleViewsCount, formatArticleViewsLabel } from '../utils/articleViews';

interface ArticleViewsBadgeProps {
  views: unknown;
  locale: Locale;
  variant?: 'compact' | 'full';
  className?: string;
}

export default function ArticleViewsBadge({
  views,
  locale,
  variant = 'compact',
  className = '',
}: ArticleViewsBadgeProps) {
  const count = formatArticleViewsCount(views, locale);
  const label = variant === 'full' ? formatArticleViewsLabel(views, locale) : count;
  const ariaLabel = formatArticleViewsLabel(views, locale);

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-light ${className}`}
      title={ariaLabel}
      aria-label={ariaLabel}
    >
      <Eye className="w-3.5 h-3.5 shrink-0 opacity-80" aria-hidden />
      <span className="tabular-nums">{label}</span>
    </span>
  );
}
