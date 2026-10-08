import type { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock } from 'lucide-react';
import type { Locale } from '../types';
import type { ClinicVideo } from '../data/sitePagesContent';
import ResolvedVideo from './ResolvedVideo';
import { videoDurationLabel, videoPath, videoPoster, videoRouteKey, videoTitle } from '../utils/videoMeta';

interface VideoPosterCardProps {
  video: ClinicVideo;
  locale: Locale;
  /** Plain click handler (e.g. open the quick-view modal); modified clicks still open the page. */
  onOpen?: (video: ClinicVideo) => void;
  headingLevel?: 'h2' | 'h3';
}

/**
 * A video tile: cover image (no <video> download until played), category, duration, title.
 * It is a real link to the video's own page, so crawlers can reach every watch page.
 */
export default function VideoPosterCard({ video, locale, onOpen, headingLevel = 'h2' }: VideoPosterCardProps) {
  const poster = videoPoster(video);
  const duration = videoDurationLabel(video);
  const title = videoTitle(video, locale);
  const Heading = headingLevel;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!onOpen || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onOpen(video);
  };

  return (
    <Link
      to={videoPath(locale, videoRouteKey(video))}
      onClick={handleClick}
      className="group relative block w-full aspect-[9/16] rounded-2xl overflow-hidden bg-brand-dark-navy shadow-md hover:shadow-xl transition-shadow"
    >
      {poster ? (
        <img
          src={poster}
          alt={title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
        />
      ) : (
        <ResolvedVideo
          src={video.src}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="metadata"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-slate-950/20" />
      {video.category[locale] ? (
        <span className="absolute top-2 left-2 max-w-[70%] truncate text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-brand-gold/90 text-white">
          {video.category[locale]}
        </span>
      ) : null}
      {duration ? (
        <span className="absolute top-2 right-2 inline-flex items-center gap-1 text-[9px] font-mono font-semibold text-white/90 bg-black/40 px-1.5 py-0.5 rounded-md">
          <Clock className="w-2.5 h-2.5" />
          {duration}
        </span>
      ) : null}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-10 h-10 rounded-full bg-brand-gold/95 text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
          <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
        </span>
      </span>
      <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
        <Heading className="font-extrabold text-white text-xs leading-snug line-clamp-2">{title}</Heading>
      </div>
    </Link>
  );
}
