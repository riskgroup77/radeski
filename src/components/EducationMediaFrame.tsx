import type { ReactNode } from 'react';
import MediaImage from './MediaImage';

type EducationMediaVariant = 'card' | 'programHero' | 'banner' | 'split';

const FRAME_CLASS: Record<EducationMediaVariant, string> = {
  /** Grid cards on /obrazovaniya — matches 4:3 source images */
  card: 'aspect-[4/3] w-full',
  /** Full-width hero on program detail pages */
  programHero: 'aspect-[4/3] w-full sm:aspect-[3/2]',
  /** Wide formula / intro strip */
  banner: 'aspect-[16/9] w-full sm:aspect-[21/9]',
  /** Malaka-style split column — keep 4:3 at every breakpoint to avoid wide shallow crops */
  split: 'aspect-[4/3] w-full',
};

interface EducationMediaFrameProps {
  src: string;
  alt: string;
  variant?: EducationMediaVariant;
  className?: string;
  imageClassName?: string;
  loading?: 'lazy' | 'eager';
  children?: ReactNode;
}

export default function EducationMediaFrame({
  src,
  alt,
  variant = 'card',
  className = '',
  imageClassName = '',
  loading = 'lazy',
  children,
}: EducationMediaFrameProps) {
  return (
    <div
      className={`relative overflow-hidden bg-brand-offwhite ${FRAME_CLASS[variant]} ${className}`}
    >
      <MediaImage
        src={src}
        alt={alt}
        loading={loading}
        className={`h-full w-full object-cover object-[center_32%] ${imageClassName}`}
      />
      {children}
    </div>
  );
}
