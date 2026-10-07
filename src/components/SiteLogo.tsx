import { SITE_LOGO } from '../data';

type SiteLogoVariant = 'header' | 'footer';

interface SiteLogoProps {
  variant?: SiteLogoVariant;
  className?: string;
}

export default function SiteLogo({ variant = 'header', className = '' }: SiteLogoProps) {
  const isFooter = variant === 'footer';

  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 overflow-visible ${
        isFooter
          ? 'bg-white rounded-md px-3 py-2 border border-slate-200/80 shadow-sm'
          : 'bg-white rounded-md px-1.5 py-1 min-[360px]:px-2 min-[360px]:py-1.5 sm:px-2.5 sm:py-2 border border-slate-100'
      } ${className}`}
    >
      <img
        src={SITE_LOGO}
        alt="Radeski Skin Clinic"
        className={`block object-contain object-center ${
          isFooter
            ? 'h-9 sm:h-10 w-[148px] sm:w-[168px]'
            : 'h-7 w-[112px] min-[360px]:h-8 min-[360px]:w-[128px] sm:h-9 sm:w-[140px] xl:h-10 xl:w-[160px]'
        } max-w-none`}
        decoding="async"
      />
    </span>
  );
}
