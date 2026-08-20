import { useCallback, useRef, useState, type MouseEvent } from 'react';
import { Maximize2 } from 'lucide-react';
import type { Locale } from '../types';
import { getHomeServiceTeaserMedia } from '../data/homeServiceTeaserVideos';
import MediaImage from './MediaImage';

interface ServiceCategoryTeaserMediaProps {
  categoryId: string;
  locale: Locale;
  alt: string;
  fallbackImage?: string;
  className?: string;
  imageClassName?: string;
  expandLabel?: string;
  lightboxImageSrc?: string;
  onExpand?: (src: string, alt: string, event: MouseEvent) => void;
}

export default function ServiceCategoryTeaserMedia({
  categoryId,
  locale,
  alt,
  fallbackImage,
  className = '',
  imageClassName = '',
  expandLabel,
  lightboxImageSrc,
  onExpand,
}: ServiceCategoryTeaserMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [motionActive, setMotionActive] = useState(false);
  const teaserMedia = getHomeServiceTeaserMedia(categoryId);
  const posterImage = teaserMedia?.poster ?? fallbackImage;
  const videoSrc = teaserMedia?.video;
  const playbackRate = teaserMedia?.playbackRate ?? 1;

  const startMotion = useCallback(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;
    video.playbackRate = playbackRate;
    video.currentTime = 0;
    void video.play().then(() => {
      setMotionActive(true);
    }).catch(() => {
      setMotionActive(false);
    });
  }, [playbackRate, videoSrc]);

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

  const expandSrc = lightboxImageSrc ?? fallbackImage ?? posterImage;

  return (
    <div
      className={`relative overflow-hidden bg-brand-offwhite ${className}`}
      onMouseEnter={startMotion}
      onMouseLeave={stopMotion}
      onFocus={startMotion}
      onBlur={stopMotion}
    >
      <MediaImage
        src={posterImage ?? fallbackImage!}
        alt={alt}
        loading="lazy"
        className={`relative z-0 h-full w-full object-cover object-center transition-all duration-500 ${
          motionActive ? 'scale-[1.02] opacity-0' : `opacity-100 ${imageClassName}`
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
      {onExpand && expandSrc ? (
        <button
          type="button"
          onClick={(event) => onExpand(expandSrc, alt, event)}
          className="absolute top-3 right-3 z-[2] cursor-pointer rounded-lg bg-black/35 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/50"
          aria-label={
            expandLabel ??
            (locale === 'uz' ? 'Rasmni kattalashtirish' : locale === 'ru' ? 'Увеличить изображение' : 'Expand image')
          }
        >
          <Maximize2 className="h-4 w-4" />
        </button>
      ) : null}
    </div>
  );
}
