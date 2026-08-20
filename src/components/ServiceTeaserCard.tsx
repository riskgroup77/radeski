import { ArrowRight } from 'lucide-react';
import type { Locale, ServiceCategory } from '../types';
import { getLocalizedImage } from '../utils/localizedImage';
import ServiceCategoryTeaserMedia from './ServiceCategoryTeaserMedia';

interface ServiceTeaserCardProps {
  category: ServiceCategory;
  locale: Locale;
  viewDetailsLabel: string;
  onOpen: (categoryId: string) => void;
}

export default function ServiceTeaserCard({
  category,
  locale,
  viewDetailsLabel,
  onOpen,
}: ServiceTeaserCardProps) {
  const fallbackImage = getLocalizedImage(category.images, locale) ?? category.image;

  if (!fallbackImage) {
    return null;
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-sectiongray bg-brand-white shadow-xs transition-all hover:shadow-lg sm:rounded-3xl">
      <ServiceCategoryTeaserMedia
        categoryId={category.id}
        locale={locale}
        alt={category.title[locale]}
        fallbackImage={fallbackImage}
        className="aspect-[16/11] min-h-[180px] sm:aspect-[5/3] sm:min-h-[260px] lg:min-h-[300px]"
        imageClassName="group-hover:scale-[1.03]"
      />

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 lg:p-7">
        <div>
          <button
            type="button"
            onClick={() => onOpen(category.id)}
            className="w-full cursor-pointer text-left text-lg font-extrabold leading-snug text-brand-text-primary transition-colors hover:text-brand-gold sm:text-xl"
          >
            {category.title[locale]}
          </button>
          <p className="mt-3 line-clamp-4 text-sm font-light leading-relaxed text-brand-text-secondary sm:text-base">
            {category.description[locale]}
          </p>
        </div>
        <button
          type="button"
          onClick={() => onOpen(category.id)}
          className="mt-6 inline-flex cursor-pointer items-center gap-1 text-left text-xs font-bold text-brand-gold hover:text-brand-gold-dark sm:text-sm"
        >
          <span>{viewDetailsLabel}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}
