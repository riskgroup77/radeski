import 'dotenv/config';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import {
  adminLogin,
  createTreatmentResult,
  getAdminTreatmentResults,
  updateTreatmentResult,
} from '../src/api/adminApi';
import { mapTreatmentResultToCreatePayload } from '../src/api/cmsMappers';
import { TREATMENT_RESULTS } from '../src/data/sitePagesContent';

const PEDIATRIC_RESULT_IDS = [
  'alopecia-areata-boy-yoqubov',
  'alopecia-areata-child-yoqubov',
] as const;

const normalizeKey = (s: string) => s.trim().toLowerCase();

function loadPublicFile(relativePath: string) {
  const full = path.join(process.cwd(), 'public', relativePath.replace(/^\//, ''));
  if (!existsSync(full)) throw new Error(`Missing file: ${full}`);
  const buf = readFileSync(full);
  return new File([buf], path.basename(full), { type: 'image/jpeg' });
}

async function seedOne(
  token: string,
  existingTitles: Map<string, string>,
) {
  for (const resultId of PEDIATRIC_RESULT_IDS) {
    const target = TREATMENT_RESULTS.find((item) => item.id === resultId);
    if (!target) throw new Error(`Result not found: ${resultId}`);

    const payload = mapTreatmentResultToCreatePayload(target);
    const files = {
      before_image: loadPublicFile(target.beforeImage),
      after_image: loadPublicFile(target.afterImage),
    };

    const matchId = existingTitles.get(normalizeKey(target.title.uz));
    if (matchId) {
      await updateTreatmentResult(matchId, payload, files, token);
      console.log(`updated: ${target.title.uz}`);
      continue;
    }

    const created = await createTreatmentResult(payload, files, token);
    existingTitles.set(normalizeKey(created.title_uz), created.id);
    console.log(`created: ${target.title.uz}`);
  }
}

async function main() {
  if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD) {
    throw new Error('Set ADMIN_USERNAME and ADMIN_PASSWORD');
  }

  const token = await adminLogin(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);
  const existing = await getAdminTreatmentResults(token);
  const existingTitles = new Map(
    existing.map((item) => [normalizeKey(item.title_uz), item.id] as const),
  );

  await seedOne(token, existingTitles);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
