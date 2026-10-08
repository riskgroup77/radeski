import type { Locale } from '../types';
import type { ClinicVideo } from '../data/sitePagesContent';
import thumbIndex from '../../public/video-thumbs/index.json';
import { formatVideoDuration } from './clinicVideos';

/**
 * Per-video facts used by the videos page, the watch pages and video SEO:
 * cover image, real duration/size (from scripts/buildVideoThumbnails.mjs), readable URL key.
 */
type VideoFileInfo = { width: number; height: number; duration: number };
const VIDEO_FILES = thumbIndex as Record<string, VideoFileInfo>;

export function videoFileInfo(video: Pick<ClinicVideo, 'id'>): VideoFileInfo | undefined {
  return VIDEO_FILES[video.id];
}

/** Cover image: the one uploaded in the admin panel, else the frame generated at build time. */
export function videoPoster(video: Pick<ClinicVideo, 'id' | 'thumbnail'>): string | undefined {
  if (video.thumbnail) return video.thumbnail;
  return VIDEO_FILES[video.id] ? `/video-thumbs/${video.id}.webp` : undefined;
}

export function videoDurationSeconds(video: Pick<ClinicVideo, 'id' | 'duration'>): number {
  const measured = VIDEO_FILES[video.id]?.duration;
  if (measured) return measured;
  const [minutes, seconds] = String(video.duration || '').split(':').map(Number);
  return Number.isFinite(minutes) && Number.isFinite(seconds) ? minutes * 60 + seconds : 0;
}

/** "1:04" for the badge; empty when unknown (the CMS stores "0:00" for every upload). */
export function videoDurationLabel(video: Pick<ClinicVideo, 'id' | 'duration'>): string {
  const seconds = videoDurationSeconds(video);
  return seconds > 0 ? formatVideoDuration(seconds) : '';
}

/** ISO 8601 duration for schema.org (PT1M4S). */
export function isoDuration(seconds: number): string | undefined {
  if (!seconds) return undefined;
  const minutes = Math.floor(seconds / 60);
  const rest = Math.round(seconds % 60);
  return `PT${minutes ? `${minutes}M` : ''}${rest || !minutes ? `${rest}S` : ''}`;
}

/** Title without emoji/pictographs — for <title>, H1 and structured data. */
export function cleanVideoText(text: string | undefined): string {
  return String(text || '')
    .replace(/[\p{Extended_Pictographic}\u{1F3FB}-\u{1F3FF}‍️]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function videoTitle(video: Pick<ClinicVideo, 'title'>, locale: Locale): string {
  return cleanVideoText(video.title[locale] || video.title.uz);
}

export function videoDescription(video: Pick<ClinicVideo, 'description' | 'title'>, locale: Locale): string {
  return cleanVideoText(video.description[locale] || video.description.uz) || videoTitle(video, locale);
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[ʻʼ‘’'`]/g, '')
    .replace(/₂/g, '2')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Public URL key, same in every language (hreflang): "<uzbek-title-slug>-<first 8 id chars>".
 * The id part keeps old links working when a title is edited.
 */
function videoIdPart(id: string): string {
  return /^[0-9a-f]{8}-/i.test(id) ? id.slice(0, 8).toLowerCase() : slugify(id);
}

export function videoRouteKey(video: Pick<ClinicVideo, 'id' | 'title'>): string {
  const idPart = videoIdPart(video.id);
  let slug = slugify(cleanVideoText(video.title.uz || video.title.en));
  if (slug.length > 60) slug = slug.slice(0, 60).replace(/-[^-]*$/, '');
  return slug ? `${slug}-${idPart}` : idPart;
}

export function findVideoByRouteParam<T extends Pick<ClinicVideo, 'id' | 'title'>>(
  param: string | null | undefined,
  videos: T[],
): T | undefined {
  if (!param) return undefined;
  const key = param.toLowerCase();
  return (
    videos.find((video) => videoRouteKey(video) === key) ??
    videos.find((video) => video.id === param) ??
    videos.find((video) => key === videoIdPart(video.id) || key.endsWith(`-${videoIdPart(video.id)}`))
  );
}

export function videoPath(locale: Locale, key: string): string {
  return `/${locale}/videos/${encodeURIComponent(key)}`;
}

export function getVideoKeyFromPathname(pathname: string): string | null {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length >= 3 && segments[1] === 'videos') {
    try {
      return decodeURIComponent(segments[2]);
    } catch {
      return segments[2];
    }
  }
  return null;
}
