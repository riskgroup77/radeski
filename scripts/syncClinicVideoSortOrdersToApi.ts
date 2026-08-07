/**
 * Barcha videolar sort_order ni API da yangilaydi (fayl qayta yuklamaydi).
 * Usage: npx tsx scripts/syncClinicVideoSortOrdersToApi.ts
 */
import 'dotenv/config';
import { adminLogin, getAdminVideos, updateVideo } from '../src/api/adminApi';
import { CLINIC_VIDEOS } from '../src/data/sitePagesContent';
import { extractClinicVideoNumber } from '../src/utils/clinicVideos';

const REQUEST_DELAY_MS = Number(process.env.SYNC_DELAY_MS || 500);
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

function normalizeKey(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

function srcKey(src: string): string {
  const m = String(src || '').match(/(\d+)\.mp4/i);
  return m ? m[1] : normalizeKey(src);
}

async function main() {
  const username = process.env.ADMIN_USERNAME?.trim() || 'admin';
  const password = process.env.ADMIN_PASSWORD?.trim() || 'radeski2026';

  console.log('Logging in...');
  const token = (await withRetry('login', () => adminLogin({ username, password }))).access_token;
  const existing = await withRetry('list', () => getAdminVideos(token));

  const byNum = new Map<string, (typeof existing)[number]>();
  const byTitle = new Map<string, (typeof existing)[number]>();
  for (const item of existing) {
    byNum.set(srcKey(item.src), item);
    byTitle.set(normalizeKey(item.title_uz || ''), item);
  }

  let updated = 0;
  let missed = 0;

  for (const video of CLINIC_VIDEOS) {
    const match =
      byNum.get(String(extractClinicVideoNumber(video))) ||
      byNum.get(srcKey(video.src)) ||
      byTitle.get(normalizeKey(video.title.uz));

    if (!match?.id) {
      console.warn('No API match for', video.id, video.title.uz);
      missed++;
      continue;
    }

    const desired = video.sortOrder ?? 999;
    if (match.sort_order === desired) {
      console.log('ok', video.id, '→', desired);
      continue;
    }

    await withRetry(video.id, () =>
      updateVideo(
        match.id,
        {
          title_uz: match.title_uz,
          title_ru: match.title_ru || match.title_uz,
          title_en: match.title_en || match.title_uz,
          description_uz: match.description_uz,
          description_ru: match.description_ru,
          description_en: match.description_en,
          src: match.src,
          duration: match.duration,
          category_uz: match.category_uz,
          category_ru: match.category_ru,
          category_en: match.category_en,
          sort_order: desired,
          is_active: match.is_active !== false,
        },
        undefined,
        token,
      ),
    );
    updated++;
    console.log('updated', video.id, match.sort_order, '→', desired);
    await sleep(REQUEST_DELAY_MS);
  }

  console.log(`Done. updated=${updated}, missed=${missed}, local=${CLINIC_VIDEOS.length}, api=${existing.length}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
