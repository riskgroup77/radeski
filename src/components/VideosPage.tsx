import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Clock, Film, X } from 'lucide-react';
import type { Locale } from '../types';
import { DICTIONARY } from '../data';
import { CLINIC_VIDEOS } from '../data/sitePagesContent';

interface VideosPageProps {
  locale: Locale;
  dictionary?: Record<string, string>;
}

export default function VideosPage({ locale, dictionary }: VideosPageProps) {
  const d = dictionary || DICTIONARY[locale];
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const activeVideo = CLINIC_VIDEOS.find((video) => video.id === activeVideoId) ?? null;

  return (
    <section id="videos-page" className="py-16 bg-brand-white min-h-screen">
      <div className="site-container">
        <div className="text-center max-w-3xl mx-auto mb-14">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {CLINIC_VIDEOS.map((video, index) => (
            <motion.article
              key={video.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className="group bg-brand-white rounded-2xl border border-brand-sectiongray overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <button
                type="button"
                onClick={() => setActiveVideoId(video.id)}
                className="relative aspect-video w-full bg-brand-dark-navy overflow-hidden cursor-pointer"
              >
                <video
                  src={video.src}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-500"
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-brand-gold/90 text-white">
                  {video.category[locale]}
                </span>
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-white/90 bg-black/40 px-2 py-1 rounded-md">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-14 h-14 rounded-full bg-brand-gold/95 text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
                  </span>
                </span>
              </button>

              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-2 mb-2">
                  <Film className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <h2 className="font-extrabold text-brand-text-primary text-base leading-snug">
                    {video.title[locale]}
                  </h2>
                </div>
                <p className="text-brand-text-muted text-sm leading-relaxed font-light">
                  {video.description[locale]}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-brand-text-muted max-w-2xl mx-auto leading-relaxed">
          {locale === 'uz'
            ? 'Videolar tanishuv maqsadida joylashtirilgan. Aniq davolash rejasi shifokor ko‘rigida belgilanadi.'
            : locale === 'ru'
              ? 'Видео размещены в ознакомительных целях. Точный план лечения определяется на приёме.'
              : 'Videos are for reference. Exact treatment plans are set at consultation.'}
        </p>
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
              className="relative w-full max-w-4xl bg-brand-white rounded-2xl overflow-hidden shadow-2xl border border-brand-sectiongray"
            >
              <button
                type="button"
                onClick={() => setActiveVideoId(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 cursor-pointer"
                aria-label={d.closeBtn}
              >
                <X className="w-5 h-5" />
              </button>
              <video
                src={activeVideo.src}
                controls
                autoPlay
                className="w-full aspect-video bg-black"
                playsInline
              />
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-extrabold text-brand-text-primary">{activeVideo.title[locale]}</h3>
                <p className="text-sm text-brand-text-muted mt-2 leading-relaxed">{activeVideo.description[locale]}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
