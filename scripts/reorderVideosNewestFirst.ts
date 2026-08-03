/**
 * Yangi videolarni tepaga chiqaradi (sort_order 1..5),
 * qolganlarini shu tartibdan keyin qayta raqamlaydi.
 * Usage: npx tsx scripts/reorderVideosNewestFirst.ts
 */
import 'dotenv/config';
import { adminLogin, getAdminVideos, updateVideo } from '../src/api/adminApi';

const REQUEST_DELAY_MS = Number(process.env.SYNC_DELAY_MS || 400);
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Eng yangi birinchi: 38, 37, 36, 35, 34, 31, 30 */
const NEWEST_FIRST_MARKERS = [
  /tetra pro|deka tetra/i,
  /1 daqiqada qabul|qanday yozilish mumkin|как записаться на приём|how to book an appointment/i,
  /dermatologdan bepul konsultatsiya/i,
  /tibbiy pedikyur/i,
  /plazmotorapiya 400|plazmotorapiya.*250/i,
  /kosmetologiya xizmatlari uchun super aksiya/i,
  /7 ta asosiy insayt/i,
];

async function main() {
  const token = (
    await adminLogin({
      username: process.env.ADMIN_USERNAME?.trim() || 'admin',
      password: process.env.ADMIN_PASSWORD?.trim() || 'radeski2026',
    })
  ).access_token;

  const videos = await getAdminVideos(token);
  const used = new Set<string>();
  const top: typeof videos = [];

  for (const pattern of NEWEST_FIRST_MARKERS) {
    const match = videos.find(
      (v) => !used.has(v.id) && pattern.test(`${v.title_uz} ${v.title_ru} ${v.title_en}`),
    );
    if (!match) {
      console.warn(`Not found for pattern: ${pattern}`);
      continue;
    }
    used.add(match.id);
    top.push(match);
  }

  const rest = videos
    .filter((v) => !used.has(v.id))
    .sort((a, b) => (a.sort_order ?? 999) - (b.sort_order ?? 999));

  const ordered = [...top, ...rest];
  console.log(`Reordering ${ordered.length} videos...`);

  for (let i = 0; i < ordered.length; i++) {
    const video = ordered[i];
    const nextOrder = i + 1;
    if (video.sort_order === nextOrder) {
      console.log(`  keep ${nextOrder}: ${video.title_uz}`);
      continue;
    }
    await updateVideo(
      video.id,
      {
        title_uz: video.title_uz,
        title_ru: video.title_ru,
        title_en: video.title_en,
        description_uz: video.description_uz,
        description_ru: video.description_ru,
        description_en: video.description_en,
        duration: video.duration,
        category_uz: video.category_uz,
        category_ru: video.category_ru,
        category_en: video.category_en,
        sort_order: nextOrder,
        is_active: video.is_active,
      },
      {},
      token,
    );
    console.log(`  ${video.sort_order} -> ${nextOrder}: ${video.title_uz}`);
    await sleep(REQUEST_DELAY_MS);
  }

  console.log('Done.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
