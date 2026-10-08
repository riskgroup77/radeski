import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock, Tag } from 'lucide-react';
import type { Locale } from '../types';
import { DICTIONARY } from '../data';
import type { ClinicVideo } from '../data/sitePagesContent';
import { openAppointmentBooking } from '../config/links';
import { pagePath } from '../routing/paths';
import ResolvedVideo from './ResolvedVideo';
import VideoPosterCard from './VideoPosterCard';
import { videoDescription, videoDurationLabel, videoPoster, videoTitle } from '../utils/videoMeta';

interface VideoWatchPageProps {
  video: ClinicVideo;
  videos: ClinicVideo[];
  locale: Locale;
  dictionary?: Record<string, string>;
}

const COPY = {
  uz: { back: 'Barcha videolar', related: 'Boshqa videolar', note: 'Video tanishuv maqsadida. Aniq davolash rejasi shifokor ko‘rigida belgilanadi.' },
  ru: { back: 'Все видео', related: 'Другие видео', note: 'Видео носит ознакомительный характер. Точный план лечения определяется на приёме.' },
  en: { back: 'All videos', related: 'More videos', note: 'For reference only. The exact treatment plan is set at consultation.' },
} as const;

const UZ_MONTHS = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'];

/** "9-sentabr, 2026" — browsers have no Uzbek month names, so uz is formatted by hand. */
function formatVideoDate(value: string | undefined, locale: Locale): string {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  if (locale === 'uz') return `${date.getDate()}-${UZ_MONTHS[date.getMonth()]}, ${date.getFullYear()}`;
  return date.toLocaleDateString(locale === 'ru' ? 'ru-RU' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

/** One video as the main content of its own URL — the page Google can show as a video result. */
export default function VideoWatchPage({ video, videos, locale, dictionary }: VideoWatchPageProps) {
  const d = dictionary || DICTIONARY[locale];
  const copy = COPY[locale];
  const title = videoTitle(video, locale);
  const description = videoDescription(video, locale);
  const duration = videoDurationLabel(video);
  const category = video.category[locale] || video.category.uz;
  const date = formatVideoDate(video.createdAt, locale);

  // Same category first, then the newest of the rest.
  const related = useMemo(() => {
    const others = videos.filter((item) => item.id !== video.id);
    const sameCategory = others.filter((item) => item.category.uz && item.category.uz === video.category.uz);
    return [...sameCategory, ...others.filter((item) => !sameCategory.includes(item))].slice(0, 6);
  }, [videos, video]);

  return (
    <section id="video-watch-page" className="py-8 sm:py-12 bg-brand-white min-h-screen">
      <div className="site-container">
        <Link
          to={pagePath(locale, 'videos')}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold hover:text-brand-gold-dark transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {copy.back}
        </Link>

        <div className="mt-5 grid gap-6 lg:gap-10 md:grid-cols-[minmax(0,360px)_1fr] items-start">
          <div className="w-full max-w-[360px] mx-auto md:mx-0 rounded-2xl overflow-hidden bg-black shadow-xl">
            <ResolvedVideo
              key={video.id}
              src={video.src}
              poster={videoPoster(video)}
              controls
              playsInline
              preload="none"
              className="w-full aspect-[9/16] bg-black object-contain"
              aria-label={title}
            />
          </div>

          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-text-primary tracking-tight leading-tight">
              {title}
            </h1>
            <ul className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-brand-text-muted">
              {category ? (
                <li className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-gold-light/15 text-brand-gold-dark">
                  <Tag className="w-3.5 h-3.5" />
                  {category}
                </li>
              ) : null}
              {duration ? (
                <li className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-offwhite">
                  <Clock className="w-3.5 h-3.5" />
                  {duration}
                </li>
              ) : null}
              {date ? (
                <li className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-offwhite">
                  <CalendarDays className="w-3.5 h-3.5" />
                  <time dateTime={video.createdAt}>{date}</time>
                </li>
              ) : null}
            </ul>
            <p className="mt-5 text-sm sm:text-base text-brand-text-muted leading-relaxed whitespace-pre-line">
              {description}
            </p>
            <button
              type="button"
              onClick={() => openAppointmentBooking()}
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand-gold text-white text-sm font-bold hover:bg-brand-gold-dark transition-colors shadow-md cursor-pointer"
            >
              {d.appointmentBtn}
            </button>
            <p className="mt-6 text-xs text-brand-text-muted leading-relaxed">{copy.note}</p>
          </div>
        </div>

        {related.length > 0 ? (
          <div className="mt-12">
            <h2 className="text-xl font-extrabold text-brand-text-primary mb-5">{copy.related}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
              {related.map((item) => (
                <VideoPosterCard key={item.id} video={item} locale={locale} headingLevel="h3" />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
