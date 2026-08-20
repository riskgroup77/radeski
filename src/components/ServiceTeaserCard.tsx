import { useCallback, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { Locale, ServiceCategory } from '../types';
import { getHomeServiceTeaserMedia } from '../data/homeServiceTeaserVideos';
import { getLocalizedImage } from '../utils/localizedImage';
import MediaImage from './MediaImage';

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [motionActive, setMotionActive] = useState(false);
  const teaserMedia = getHomeServiceTeaserMedia(category.id);
  const fallbackImage = getLocalizedImage(category.images, locale) ?? category.image;
  const posterImage = teaserMedia?.poster ?? fallbackImage;
  const videoSrc = teaserMedia?.video;

  const startMotion = useCallback(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;
    video.currentTime = 0;
    void video.play().then(() => {
      setMotionActive(true);
    }).catch(() => {
      setMotionActive(false);
    });
  }, [videoSrc]);

  const stopMotion = useCallback(() => {
    const video = videoRef.current;
    setMotionActive(false);
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  }, []);

  if (!posterImage && !fallbackImage) {
    return null;
  }

  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-sectiongray bg-brand-white shadow-xs transition-all hover:shadow-lg sm:rounded-3xl"
      onMouseEnter={startMotion}
      onMouseLeave={stopMotion}
      onFocus={startMotion}
      onBlur={stopMotion}
    >
      <div className="relative aspect-[16/11] min-h-[180px] overflow-hidden bg-brand-offwhite sm:aspect-[5/3] sm:min-h-[260px] lg:min-h-[300px]">
        <MediaImage
          src={posterImage}
          alt={category.title[locale]}
          loading="lazy"
          className={`relative z-0 h-full w-full object-cover object-center transition-all duration-500 ${
            motionActive ? 'scale-[1.02] opacity-0' : 'opacity-100 group-hover:scale-[1.03]'
          }`}
        />
        {videoSrc ? (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterImage}
            aria-hidden
            className={`service-teaser-hover-video pointer-events-none absolute inset-0 z-[1] h-full w-full object-cover object-center transition-opacity duration-500 ${
              motionActive ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : null}
      </div>

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
