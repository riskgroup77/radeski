import 'dotenv/config';
import { adminLogin, getAdminVideos, updateVideo } from '../src/api/adminApi';
import { mapClinicVideoToCreatePayload } from '../src/api/cmsMappers';
import { CLINIC_VIDEOS } from '../src/data/clinicVideosCatalog';

async function main() {
  const video = CLINIC_VIDEOS.find((v) => v.id === 'clinic-video-30');
  if (!video) throw new Error('clinic-video-30 missing');

  const token = (
    await adminLogin({
      username: process.env.ADMIN_USERNAME?.trim() || 'admin',
      password: process.env.ADMIN_PASSWORD?.trim() || (() => { throw new Error('ADMIN_PASSWORD env var is required'); })(),
    })
  ).access_token;

  const existing = await getAdminVideos(token);
  const match =
    existing.find((v) => v.sort_order === 30) ||
    existing.find((v) =>
      /uy usullari|7 ta asosiy|7 ключевых|7 key insights/i.test(
        `${v.title_uz} ${v.title_ru} ${v.title_en}`,
      ),
    );

  if (!match) throw new Error('API video 30 not found');

  const payload = mapClinicVideoToCreatePayload(video);
  await updateVideo(match.id, payload, {}, token);
  console.log('updated', match.id);
  console.log('title_uz=', payload.title_uz);
  console.log('desc_uz=', payload.description_uz);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
