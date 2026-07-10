/**
 * Faqat videolarni API ga yuklaydi.
 * Usage: npm run seed:videos
 */
import 'dotenv/config';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import {
  adminLogin,
  createVideo,
  getAdminVideos,
  updateVideo,
} from '../src/api/adminApi';
import { mapClinicVideoToCreatePayload } from '../src/api/cmsMappers';
import { CLINIC_VIDEOS } from '../src/data/sitePagesContent';

const REQUEST_DELAY_MS = Number(process.env.SYNC_DELAY_MS || 800);
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

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

  console.log('Logging in...');
  const token = (await withRetry('login', () => adminLogin({ username, password }))).access_token;

  const existing = await withRetry('get videos', () => getAdminVideos(token));
  const byTitle = new Map(existing.map((item) => [normalizeKey(item.title_uz), item]));
  const bySortOrder = new Map(existing.map((item) => [item.sort_order, item]));

  let created = 0;
  let updated = 0;

  for (const video of CLINIC_VIDEOS) {
    const payload = mapClinicVideoToCreatePayload(video);
    const videoFile = loadPublicFile(video.src);
    const sortOrder = video.sortOrder ?? 0;
    const match =
      byTitle.get(normalizeKey(video.title.uz)) ??
      bySortOrder.get(sortOrder);

    if (match) {
      await withRetry(video.title.uz, () =>
        updateVideo(match.id, payload, { video: videoFile }, token),
      );
      updated++;
      console.log(`updated: ${video.title.uz}`);
    } else {
      await withRetry(video.title.uz, () =>
        createVideo(payload, { video: videoFile }, token),
      );
      created++;
      console.log(`created: ${video.title.uz}`);
    }
    await sleep(REQUEST_DELAY_MS);
  }

  console.log(`Done — created: ${created}, updated: ${updated}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
