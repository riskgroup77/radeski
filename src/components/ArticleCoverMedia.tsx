import MediaImage from './MediaImage';

type ArticleCoverVariant = 'card' | 'compact' | 'related' | 'hero';

interface ArticleCoverMediaProps {
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
  /** 'high' for the article page cover — the page's largest element on phones (LCP). */
  fetchPriority?: 'high' | 'low' | 'auto';
  variant?: ArticleCoverVariant;
  /**
   * Portrait promo posters (6 equipment articles): shown whole (object-contain) over a
   * blurred copy of themselves, in the same frame as every other article cover.
   */
  promoPortrait?: boolean;
  className?: string;
  imageClassName?: string;
}

/** One frame per variant for every article, so cards and heroes line up. */
const SHELL: Record<ArticleCoverVariant, string> = {
  card: 'h-56 sm:h-60 bg-brand-sectiongray',
  compact: 'h-36 sm:h-40 bg-brand-sectiongray',
  related: 'h-52 sm:h-56 md:h-60 bg-brand-sectiongray',
  hero: 'h-[280px] sm:h-[380px] lg:h-[420px] bg-brand-sectiongray',
};

export default function ArticleCoverMedia({
  src,
  alt,
  loading = 'lazy',
  fetchPriority,
  variant = 'card',
  promoPortrait = false,
  className = '',
  imageClassName = '',
}: ArticleCoverMediaProps) {
  return (
    <div className={`relative w-full overflow-hidden ${SHELL[variant]} ${className}`}>
      {promoPortrait ? (
        <MediaImage
          src={src}
          alt=""
          aria-hidden="true"
          loading={loading}
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl opacity-60"
        />
      ) : null}
      <MediaImage
        src={src}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        className={`relative w-full h-full object-center ${promoPortrait ? 'object-contain' : 'object-cover'} ${imageClassName}`}
      />
    </div>
  );
}
