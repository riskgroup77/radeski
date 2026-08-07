/**
 * clinic-video-41 ni API ga yuklaydi.
 * Usage: npx tsx scripts/seedVideo41ToApi.ts
 */
import 'dotenv/config';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import {
  adminLogin,
  createVideo,
  getAdminVideos,
  updateVideo,
} from '../src/api/adminApi';
import { mapClinicVideoToCreatePayload } from '../src/api/cmsMappers';
import { CLINIC_VIDEOS } from '../src/data/sitePagesContent';

const REQUEST_DELAY_MS = Number(process.env.SYNC_DELAY_MS || 1200);
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const TARGET = CLINIC_VIDEOS.filter((v) => v.id === 'clinic-video-41');

async function withRetry<T>(label: string, fn: () => Promise<T>): Promise<T> {
  let attempt = 0;
  while (true) {
    try {
      return await fn();
    } catch (error) {
      attempt++;
      const msg = error instanceof Error ? error.message : String(error);
      if (!/too many requests|429/i.test(msg) || attempt > 6) throw error;
      const wait = REQUEST_DELAY_MS * 2 ** attempt;
      console.warn(`Rate limited "${label}", retry ${attempt}/6 in ${wait}ms`);
      await sleep(wait);
    }
  }
}

function probeDuration(filePath: string): string {
  const result = spawnSync(
    'ffprobe',
    [
      '-v',
      'error',
      '-show_entries',
      'format=duration',
      '-of',
      'default=noprint_wrappers=1:nokey=1',
      filePath,
    ],
    { encoding: 'utf8' },
  );
  const seconds = Number(String(result.stdout || '').trim());
  if (!Number.isFinite(seconds)) return '';
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

function loadPublicFile(relativePath: string): File {
  const normalized = relativePath.replace(/^\//, '');
  const filePath = path.join(process.cwd(), 'public', normalized);
  if (!existsSync(filePath)) throw new Error(`File not found: ${filePath}`);
  const buffer = readFileSync(filePath);
  return new File([buffer], path.basename(filePath), { type: 'video/mp4' });
}

function normalizeKey(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

async function main() {
  const username = process.env.ADMIN_USERNAME?.trim() || 'admin';
  const password = process.env.ADMIN_PASSWORD?.trim() || 'radeski2026';

  if (TARGET.length !== 1) throw new Error('clinic-video-41 missing');
  const video = TARGET[0];
  const filePath = path.join(process.cwd(), 'public', video.src.replace(/^\//, ''));
  if (!existsSync(filePath)) throw new Error(`Missing converted file: ${filePath}`);

  console.log('Logging in...');
  const token = (await withRetry('login', () => adminLogin({ username, password }))).access_token;

  const existing = await withRetry('get videos', () => getAdminVideos(token));
  const byTitle = new Map(existing.map((item) => [normalizeKey(item.title_uz), item]));

  const duration = probeDuration(filePath) || video.duration;
  const payload = mapClinicVideoToCreatePayload({ ...video, duration });
  const videoFile = loadPublicFile(video.src);

  const sizeMb = (videoFile.size / (1024 * 1024)).toFixed(1);
  console.log(`Uploading ${video.title.uz} (${sizeMb} MB, ${duration})...`);

  const match = byTitle.get(normalizeKey(video.title.uz));
  if (match) {
    await withRetry(video.title.uz, () =>
      updateVideo(match.id, payload, { video: videoFile }, token),
    );
    console.log('updated');
  } else {
    await withRetry(video.title.uz, () => createVideo(payload, { video: videoFile }, token));
    console.log('created');
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
