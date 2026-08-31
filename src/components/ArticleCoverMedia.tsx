import MediaImage from './MediaImage';

type ArticleCoverVariant = 'card' | 'compact' | 'hero';

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

const PROMO_SHELL = 'aspect-[819/1024] bg-neutral-600';

const DEFAULT_SHELL: Record<ArticleCoverVariant, string> = {
  card: 'h-56 bg-brand-sectiongray',
  compact: 'h-28 bg-brand-sectiongray',
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
  const shellClass = promoPortrait ? PROMO_SHELL : DEFAULT_SHELL[variant];
  const imageFit = promoPortrait ? 'object-contain object-center' : 'object-cover object-center';

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
