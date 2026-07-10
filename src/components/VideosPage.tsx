import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Clock, X } from 'lucide-react';
import type { Locale } from '../types';
import { DICTIONARY } from '../data';
import type { ClinicVideo } from '../data/sitePagesContent';
import ResolvedVideo from './ResolvedVideo';

interface VideosPageProps {
  locale: Locale;
  dictionary?: Record<string, string>;
  videos: ClinicVideo[];
  loading?: boolean;
}

export default function VideosPage({ locale, dictionary, videos, loading = false }: VideosPageProps) {
  const d = dictionary || DICTIONARY[locale];
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const activeVideo = videos.find((video) => video.id === activeVideoId) ?? null;

  return (
    <section id="videos-page" className="py-16 bg-brand-white min-h-screen">
      <div className="site-container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-gold tracking-widest uppercase py-1 px-3 bg-brand-gold-light/10 rounded-full">
            {d.navVideos}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text-primary mt-3 tracking-tight">
            {d.videosTitle}
          </h1>
          <p className="text-brand-text-muted mt-4 text-sm sm:text-base leading-relaxed">
            {d.videosDesc}
          </p>
        </div>

        {loading ? (
          <div className="py-16 text-center text-brand-text-muted text-sm">
            {locale === 'uz' ? 'Videolar yuklanmoqda...' : locale === 'ru' ? 'Загрузка видео...' : 'Loading videos...'}
          </div>
        ) : videos.length === 0 ? (
          <div className="py-16 text-center text-brand-text-muted text-sm leading-relaxed">
            {locale === 'uz'
              ? 'Hozircha klinika videolari joylashtirilmagan.'
              : locale === 'ru'
                ? 'Видео клиники пока не добавлены.'
                : 'Clinic videos have not been added yet.'}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            {videos.map((video, index) => (
              <motion.article
                key={video.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="group"
              >
                <button
                  type="button"
                  onClick={() => setActiveVideoId(video.id)}
                  className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-brand-dark-navy shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <ResolvedVideo
                    src={video.src}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    muted
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-slate-950/20" />
                  <span className="absolute top-2 left-2 text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-brand-gold/90 text-white">
                    {video.category[locale]}
                  </span>
                  <span className="absolute top-2 right-2 inline-flex items-center gap-1 text-[9px] font-mono font-semibold text-white/90 bg-black/40 px-1.5 py-0.5 rounded-md">
                    <Clock className="w-2.5 h-2.5" />
                    {video.duration}
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-10 h-10 rounded-full bg-brand-gold/95 text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                    </span>
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                    <h2 className="font-extrabold text-white text-xs leading-snug line-clamp-2">
                      {video.title[locale]}
                    </h2>
                  </div>
                </button>
              </motion.article>
            ))}
          </div>
        )}

        {!loading && videos.length > 0 && (
          <p className="mt-8 text-center text-xs text-brand-text-muted max-w-2xl mx-auto leading-relaxed">
            {locale === 'uz'
              ? 'Videolar tanishuv maqsadida joylashtirilgan. Aniq davolash rejasi shifokor ko‘rigida belgilanadi.'
              : locale === 'ru'
                ? 'Видео размещены в ознакомительных целях. Точный план лечения определяется на приёме.'
                : 'Videos are for reference. Exact treatment plans are set at consultation.'}
          </p>
        )}
      </div>

      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#0c1424]/80 backdrop-blur-sm"
              onClick={() => setActiveVideoId(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              className="relative w-full max-w-sm bg-brand-white rounded-2xl overflow-hidden shadow-2xl border border-brand-sectiongray"
            >
              <button
                type="button"
                onClick={() => setActiveVideoId(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 cursor-pointer"
                aria-label={d.closeBtn}
              >
                <X className="w-5 h-5" />
              </button>
              <ResolvedVideo
                src={activeVideo.src}
                controls
                autoPlay
                className="w-full aspect-[9/16] bg-black object-cover"
                playsInline
              />
              <div className="p-5">
                <h3 className="text-base font-extrabold text-brand-text-primary">{activeVideo.title[locale]}</h3>
                <p className="text-sm text-brand-text-muted mt-2 leading-relaxed">{activeVideo.description[locale]}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
