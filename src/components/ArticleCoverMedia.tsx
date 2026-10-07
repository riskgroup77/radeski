import MediaImage from './MediaImage';

type ArticleCoverVariant = 'card' | 'compact' | 'related' | 'hero';

interface ArticleCoverMediaProps {
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
  variant?: ArticleCoverVariant;
  /** Portret promo rasmlar (6 ta aparat maqolasi) — to'liq, katta ko'rinish */
  promoPortrait?: boolean;
  className?: string;
  imageClassName?: string;
}

const PROMO_SHELL: Record<ArticleCoverVariant, string> = {
  card: 'min-h-[240px] sm:min-h-[260px] bg-neutral-800',
  compact: 'min-h-[180px] sm:min-h-[200px] bg-neutral-800',
  related: 'min-h-[240px] sm:min-h-[260px] md:min-h-[280px] bg-neutral-800',
  hero: 'aspect-[819/1024] bg-neutral-600',
};

const DEFAULT_SHELL: Record<ArticleCoverVariant, string> = {
  card: 'h-56 sm:h-60 bg-brand-sectiongray',
  compact: 'h-36 sm:h-40 bg-brand-sectiongray',
  related: 'h-52 sm:h-56 md:h-60 bg-brand-sectiongray',
  hero: 'h-[280px] sm:h-[380px] lg:h-[420px] bg-brand-sectiongray',
};

export default function ArticleCoverMedia({
  src,
  alt,
  loading = 'lazy',
  variant = 'card',
  promoPortrait = false,
  className = '',
  imageClassName = '',
}: ArticleCoverMediaProps) {
  const shellClass = promoPortrait ? PROMO_SHELL[variant] : DEFAULT_SHELL[variant];
  const imageFit = promoPortrait ? 'object-contain object-center p-1' : 'object-cover object-center';

  return (
    <div className={`relative w-full overflow-hidden ${shellClass} ${className}`}>
      <MediaImage
        src={src}
        alt={alt}
        loading={loading}
        className={`w-full h-full ${imageFit} ${imageClassName}`}
      />
    </div>
  );
}
