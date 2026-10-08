#!/usr/bin/env node
/**
 * Creates a cover image (poster) for every clinic video that has none, plus its real
 * duration and size, into public/video-thumbs/:
 *
 *   public/video-thumbs/<videoId>.webp   — the poster (max 1280 px, WebP)
 *   public/video-thumbs/index.json        — { [videoId]: { width, height, duration } }
 *
 * The site uses them as <video poster>, as card images on the videos page (instead of 44
 * <video> elements), and in VideoObject structured data / the video sitemap — Google only
 * shows video results when a thumbnail exists.
 *
 * ffmpeg reads the videos over HTTP with range requests, so only the first seconds of each
 * file are downloaded. The thumbnail filter picks the most representative frame from
 * ~8 seconds instead of a random (often black or blurred) first frame.
 *
 * Requires ffmpeg + ffprobe on PATH. Existing posters are kept (use --force to redo).
 * Usage: node scripts/buildVideoThumbnails.mjs [--force]
 */
import { execFile } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { promisify } from 'node:util';

const run = promisify(execFile);
const root = process.cwd();
const outDir = path.join(root, 'public', 'video-thumbs');
const indexFile = path.join(outDir, 'index.json');
const force = process.argv.includes('--force');
const MEDIA_ORIGIN = (process.env.VITE_API_URL || 'https://api.radeski.uz').replace(/\/$/, '');

/** Same rule as resolveMediaUrl(): any …/uploads/… URL (even an old localhost one) lives on the API host. */
function mediaUrl(src) {
  const uploads = src.match(/\/uploads\/[^\s?#]+/)?.[0];
  return uploads ? `${MEDIA_ORIGIN}${uploads}` : src;
}

async function hasTool(name) {
  try {
    await run(name, ['-version']);
    return true;
  } catch {
    return false;
  }
}

async function probe(url) {
  const { stdout } = await run(
    'ffprobe',
    ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height:stream_tags=rotate:format=duration', '-of', 'json', url],
    { timeout: 60_000 },
  );
  const data = JSON.parse(stdout);
  const stream = data.streams?.[0] ?? {};
  let { width = 0, height = 0 } = stream;
  const rotate = Math.abs(Number(stream.tags?.rotate ?? 0));
  if (rotate === 90 || rotate === 270) [width, height] = [height, width];
  return { width, height, duration: Math.round(Number(data.format?.duration ?? 0)) };
}

async function extractPoster(url, duration, target) {
  // Skip the very first second (often a fade-in), stay inside short clips.
  const start = duration > 4 ? 1 : 0;
  const window = Math.max(1, Math.min(8, duration - start || 8));
  await run(
    'ffmpeg',
    [
      '-y', '-v', 'error',
      '-ss', String(start), '-t', String(window), '-i', url,
      '-vf', "thumbnail=90,scale='min(1280,iw)':-2",
      '-frames:v', '1', '-c:v', 'libwebp', '-quality', '80',
      target,
    ],
    { timeout: 180_000 },
  );
}

async function main() {
  if (!(await hasTool('ffmpeg')) || !(await hasTool('ffprobe'))) {
    console.warn('[video-thumbs] ffmpeg/ffprobe not found — skipped');
    return;
  }
  const snapshotFile = path.join(root, 'public', 'data', 'site-snapshot.json');
  if (!existsSync(snapshotFile)) {
    console.warn('[video-thumbs] no site snapshot (run `npm run snapshot` first) — skipped');
    return;
  }
  const videos = (JSON.parse(readFileSync(snapshotFile, 'utf8')).data?.videos ?? []).filter(
    (video) => video.is_active !== false && video.src,
  );

  mkdirSync(outDir, { recursive: true });
  const index = existsSync(indexFile) ? JSON.parse(readFileSync(indexFile, 'utf8')) : {};
  let created = 0;
  const failed = [];

  for (const video of videos) {
    const target = path.join(outDir, `${video.id}.webp`);
    if (!force && index[video.id] && existsSync(target)) continue;
    try {
      const url = mediaUrl(video.src);
      const info = await probe(url);
      await extractPoster(url, info.duration, target);
      if (!existsSync(target) || statSync(target).size === 0) throw new Error('no frame extracted');
      index[video.id] = info;
      created += 1;
      console.log(`[video-thumbs] ${video.id}  ${info.width}x${info.height}  ${info.duration}s  ${Math.round(statSync(target).size / 1024)} KB`);
    } catch (error) {
      failed.push(`${video.id}: ${error instanceof Error ? error.message.split('\n')[0] : error}`);
    }
  }

  writeFileSync(indexFile, `${JSON.stringify(index, null, 2)}\n`);
  console.log(`[video-thumbs] ${created} new, ${Object.keys(index).length} total`);
  if (failed.length) console.warn(`[video-thumbs] failed:\n  ${failed.join('\n  ')}`);
}

main().catch((error) => console.warn('[video-thumbs] skipped:', error));
