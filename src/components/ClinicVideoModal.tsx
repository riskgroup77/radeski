import { useEffect } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import type { Locale } from '../types';
import type { ClinicVideo } from '../data/sitePagesContent';
import { DICTIONARY } from '../data';
import ResolvedVideo from './ResolvedVideo';
import { videoPoster, videoTitle } from '../utils/videoMeta';

interface ClinicVideoModalProps {
  video: ClinicVideo;
  locale: Locale;
  dictionary?: Record<string, string>;
  onClose: () => void;
}

export default function ClinicVideoModal({
  video,
  locale,
  dictionary,
  onClose,
}: ClinicVideoModalProps) {
  const d = dictionary || DICTIONARY[locale];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[320] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="clinic-video-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#0c1424]/85 backdrop-blur-sm cursor-pointer border-0 p-0"
        onClick={onClose}
        aria-label={d.closeBtn}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        className="relative z-[321] w-full max-w-sm bg-brand-white rounded-2xl overflow-hidden shadow-2xl border border-brand-sectiongray flex flex-col max-h-[min(96vh,920px)]"
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-brand-sectiongray bg-brand-white shrink-0">
          <h3
            id="clinic-video-modal-title"
            className="flex-1 min-w-0 text-sm sm:text-base font-extrabold text-brand-text-primary leading-snug line-clamp-2 pr-1"
          >
            {videoTitle(video, locale)}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-brand-gold text-white text-xs font-bold hover:bg-brand-gold-dark transition-colors cursor-pointer shadow-sm"
            aria-label={d.closeBtn}
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">{d.closeBtn}</span>
          </button>
        </div>

        <div className="relative bg-black shrink-0">
          <ResolvedVideo
            src={video.src}
            poster={videoPoster(video)}
            controls
            autoPlay
            className="w-full aspect-[9/16] max-h-[min(62vh,640px)] bg-black object-contain mx-auto"
            playsInline
          />
        </div>

        <div className="p-4 sm:p-5 overflow-y-auto overscroll-contain">
          <p className="text-sm text-brand-text-muted leading-relaxed whitespace-pre-line">
            {video.description[locale]}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
