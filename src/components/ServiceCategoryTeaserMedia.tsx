import { useCallback, useEffect, useRef, useState, type MouseEvent } from 'react';
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
  /** hover — play on pointer enter (services grid); always — loop on page hero */
  motionMode?: 'hover' | 'always';
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
  motionMode = 'hover',
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
    if (motionMode === 'always') return;
    const video = videoRef.current;
    setMotionActive(false);
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  }, [motionMode]);

  // The page hero's poster is the main image (LCP): the looping video only starts once the
  // poster has loaded, the page has finished loading and the browser is idle, so the ~400 KB
  // clip never competes with the page's own scripts and data. Skipped on Data Saver / 2G.
  const [posterReady, setPosterReady] = useState(false);
  useEffect(() => {
    if (motionMode !== 'always' || !videoSrc || !posterReady) return;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (connection?.saveData || /2g$/.test(connection?.effectiveType ?? '')) return;
    let cancelled = false;
    let idleHandle: number | undefined;
    const begin = () => {
      if (!cancelled) startMotion();
    };
    const whenIdle = () => {
      idleHandle = window.requestIdleCallback
        ? window.requestIdleCallback(begin, { timeout: 3000 })
        : window.setTimeout(begin, 1500);
    };
    if (document.readyState === 'complete') whenIdle();
    else window.addEventListener('load', whenIdle, { once: true });
    return () => {
      cancelled = true;
      window.removeEventListener('load', whenIdle);
      if (idleHandle !== undefined) {
        if (window.cancelIdleCallback) window.cancelIdleCallback(idleHandle);
        else window.clearTimeout(idleHandle);
      }
      const video = videoRef.current;
      setMotionActive(false);
      if (!video) return;
      video.pause();
      video.currentTime = 0;
    };
  }, [motionMode, videoSrc, startMotion, posterReady]);

  if (!posterImage && !fallbackImage) {
    return null;
  }

  const expandSrc = lightboxImageSrc ?? fallbackImage ?? posterImage;

  return (
    <div
      className={`relative overflow-hidden bg-brand-offwhite ${className}`}
      onMouseEnter={motionMode === 'hover' ? startMotion : undefined}
      onMouseLeave={motionMode === 'hover' ? stopMotion : undefined}
      onFocus={motionMode === 'hover' ? startMotion : undefined}
      onBlur={motionMode === 'hover' ? stopMotion : undefined}
    >
      <MediaImage
        src={posterImage ?? fallbackImage!}
        alt={alt}
        // 'always' is the page hero: its poster is the page's main image, so it loads first.
        loading={motionMode === 'always' ? 'eager' : 'lazy'}
        fetchPriority={motionMode === 'always' ? 'high' : 'auto'}
        onLoad={motionMode === 'always' ? () => setPosterReady(true) : undefined}
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
          // Nothing is downloaded until play() (hover, or the idle start above for the hero).
          preload="none"
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
