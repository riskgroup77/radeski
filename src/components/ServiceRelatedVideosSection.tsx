import { useState } from 'react';
import { Play, Video } from 'lucide-react';
import type { Locale } from '../types';
import type { ClinicVideo } from '../data/sitePagesContent';
import MediaImage from './MediaImage';
import ClinicVideoModal from './ClinicVideoModal';

interface ServiceRelatedVideosSectionProps {
  locale: Locale;
  videos: ClinicVideo[];
}

const SECTION_TITLE: Record<Locale, string> = {
  uz: "Ushbu yo'nalish bo'yicha videolar",
  ru: 'Видео по этому направлению',
  en: 'Videos for this specialty',
};

const SECTION_DESC: Record<Locale, string> = {
  uz: 'Klinikamizdagi muolajalar, apparatlar va natijalar haqida qisqa videolar.',
  ru: 'Короткие видео о процедурах, аппаратах и результатах в нашей клинике.',
  en: 'Short videos about procedures, devices, and outcomes at our clinic.',
};

export default function ServiceRelatedVideosSection({ locale, videos }: ServiceRelatedVideosSectionProps) {
  const [activeVideo, setActiveVideo] = useState<ClinicVideo | null>(null);

  if (videos.length === 0) return null;

  return (
    <>
      <div className="mt-14 border-t border-brand-sectiongray pt-10">
        <div className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-gold-light/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-gold">
            <Video className="h-3.5 w-3.5" />
            {locale === 'uz' ? 'Videolar' : locale === 'ru' ? 'Видео' : 'Videos'}
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-brand-text-primary sm:text-2xl">
            {SECTION_TITLE[locale]}
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-brand-text-muted">{SECTION_DESC[locale]}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {videos.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setActiveVideo(video)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-brand-sectiongray bg-brand-white text-left shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-brand-dark-navy">
                {video.thumbnail ? (
                  <MediaImage
                    src={video.thumbnail}
                    alt={video.title[locale]}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-white/40">
                    <Video className="h-10 w-10" />
                  </div>
                )}
                <span className="absolute inset-0 flex items-center justify-center bg-brand-dark-navy/25 transition-colors group-hover:bg-brand-dark-navy/35">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gold text-white shadow-lg">
                    <Play className="h-5 w-5 fill-current" />
                  </span>
                </span>
                {video.duration ? (
                  <span className="absolute bottom-2 right-2 rounded-md bg-black/65 px-1.5 py-0.5 text-[10px] font-bold text-white">
                    {video.duration}
                  </span>
                ) : null}
              </div>
              <div className="p-3">
                <h3 className="line-clamp-2 text-xs font-bold leading-snug text-brand-text-primary sm:text-sm">
                  {video.title[locale]}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeVideo ? (
        <ClinicVideoModal
          video={activeVideo}
          locale={locale}
          onClose={() => setActiveVideo(null)}
        />
      ) : null}
    </>
  );
}
