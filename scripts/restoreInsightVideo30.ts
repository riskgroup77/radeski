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

async function main() {
  const token = (
    await adminLogin({
      username: process.env.ADMIN_USERNAME?.trim() || 'admin',
      password: process.env.ADMIN_PASSWORD?.trim() || (() => { throw new Error('ADMIN_PASSWORD env var is required'); })(),
    })
  ).access_token;

  const existing = await getAdminVideos(token);
  console.log('admin_total', existing.length);

  for (const v of existing) {
    if (/insayt|insight|7 ta|endi siz|1 daqiqada|yozilish/i.test(`${v.title_uz} ${v.title_ru}`)) {
      console.log('hit', v.sort_order, v.title_uz);
    }
  }

  const insight = CLINIC_VIDEOS.find((v) => v.id === 'clinic-video-30');
  if (!insight) throw new Error('clinic-video-30 missing locally');

  const already = existing.find((v) =>
    /7 ta asosiy|7 ключевых|7 key insights|endi siz shifokor/i.test(
      `${v.title_uz} ${v.title_ru} ${v.title_en}`,
    ),
  );

  if (already) {
    console.log('insight already exists', already.id, already.title_uz);
    return;
  }

  const filePath = path.join(process.cwd(), 'public', insight.src.replace(/^\//, ''));
  if (!existsSync(filePath)) throw new Error(`Missing ${filePath}`);

  const probe = spawnSync(
    'ffprobe',
    ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=noprint_wrappers=1:nokey=1', filePath],
    { encoding: 'utf8' },
  );
  const seconds = Number(String(probe.stdout || '').trim());
  const duration = Number.isFinite(seconds)
    ? `${Math.floor(seconds / 60)}:${String(Math.round(seconds % 60)).padStart(2, '0')}`
    : insight.duration;

  const buffer = readFileSync(filePath);
  const videoFile = new File([buffer], path.basename(filePath), { type: 'video/mp4' });
  const payload = mapClinicVideoToCreatePayload({ ...insight, duration, sortOrder: 6 });

  console.log('Recreating insight video...');
  await createVideo(payload, { video: videoFile }, token);
  console.log('recreated');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
