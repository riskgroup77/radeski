import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Locale } from '../types';
import { DICTIONARY } from '../data';
import type { ClinicVideo } from '../data/sitePagesContent';
import VideoPosterCard from './VideoPosterCard';
import ClinicVideoModal from './ClinicVideoModal';

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
                transition={{ delay: Math.min(index, 12) * 0.04 }}
                className="group"
              >
                <VideoPosterCard video={video} locale={locale} onOpen={(item) => setActiveVideoId(item.id)} />
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
        {activeVideo ? (
          <ClinicVideoModal
            video={activeVideo}
            locale={locale}
            dictionary={d}
            onClose={() => setActiveVideoId(null)}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
