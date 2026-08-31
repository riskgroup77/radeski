import MediaImage from './MediaImage';

type ArticleCoverVariant = 'card' | 'compact' | 'hero';

interface ArticleCoverMediaProps {
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
  variant?: ArticleCoverVariant;
  className?: string;
  imageClassName?: string;
}

const SHELL: Record<ArticleCoverVariant, string> = {
  card: 'aspect-[819/1024] bg-neutral-600',
  compact: 'aspect-[819/1024] bg-neutral-600',
  hero: 'aspect-[819/1024] bg-neutral-600',
};

/** Article cover/thumbnail — keeps portrait promo art fully visible (no crop). */
export default function ArticleCoverMedia({
  src,
  alt,
  loading = 'lazy',
  variant = 'card',
  className = '',
  imageClassName = '',
}: ArticleCoverMediaProps) {
  return (
    <div className={`relative w-full overflow-hidden ${SHELL[variant]} ${className}`}>
      <MediaImage
        src={src}
        alt={alt}
        loading={loading}
        className={`w-full h-full object-contain object-center ${imageClassName}`}
      />
    </div>
  );
}
