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

const normalizeKey = (s: string) => s.trim().toLowerCase();

function loadPublicFile(relativePath: string) {
  const full = path.join(process.cwd(), 'public', relativePath.replace(/^\//, ''));
  if (!existsSync(full)) throw new Error(`Missing file: ${full}`);
  const buf = readFileSync(full);
  return new File([buf], path.basename(full), { type: 'image/jpeg' });
}

async function main() {
  const target = TREATMENT_RESULTS.find((r) => r.id === 'alopecia-areata-boy-yoqubov');
  if (!target) throw new Error('Result not found in catalog');
  if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD) {
    throw new Error('Set ADMIN_USERNAME and ADMIN_PASSWORD');
  }

  const token = await adminLogin(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);
  const existing = await getAdminTreatmentResults(token);
  const match = existing.find((i) => normalizeKey(i.title_uz) === normalizeKey(target.title.uz));
  const payload = mapTreatmentResultToCreatePayload(target);
  const files = {
    before_image: loadPublicFile(target.beforeImage),
    after_image: loadPublicFile(target.afterImage),
  };

  if (match) {
    await updateTreatmentResult(match.id, payload, files, token);
    console.log(`updated: ${target.title.uz}`);
  } else {
    await createTreatmentResult(payload, files, token);
    console.log(`created: ${target.title.uz}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
