/**
 * Tuliy lazer 1927 nm (LaseMD Ultra) — ikkita oldin/keyin natijasini CMS ga yuklaydi
 * (title_uz bo'yicha moslashtiradi: bor bo'lsa yangilaydi, yo'q bo'lsa yaratadi).
 *
 * Usage (PowerShell):
 *   $env:ADMIN_USERNAME = "admin"
 *   $env:ADMIN_PASSWORD = "<admin parol>"
 *   npx tsx scripts/seedThuliumResults.ts
 */
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

const RESULT_IDS = ['thulium-pigmentation-cheek-comparison', 'thulium-tone-texture-cheek-comparison'];

const normalizeKey = (s: string) => s.trim().toLowerCase();

function loadPublicFile(relativePath: string) {
  const full = path.join(process.cwd(), 'public', relativePath.replace(/^\//, ''));
  if (!existsSync(full)) throw new Error(`Missing file: ${full}`);
  const buf = readFileSync(full);
  return new File([buf], path.basename(full), { type: 'image/jpeg' });
}

async function main() {
  if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD) {
    throw new Error('Set ADMIN_USERNAME and ADMIN_PASSWORD');
  }

  const { access_token: token } = await adminLogin({
    username: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD,
  });
  const existing = await getAdminTreatmentResults(token);

  for (const id of RESULT_IDS) {
    const target = TREATMENT_RESULTS.find((r) => r.id === id);
    if (!target) throw new Error(`Result not found in catalog: ${id}`);
    const match = existing.find((i) => normalizeKey(i.title_uz) === normalizeKey(target.title.uz));
    const payload = mapTreatmentResultToCreatePayload(target);
    const combined = target.comparisonImage ?? target.beforeImage;
    const files = {
      before_image: loadPublicFile(combined),
      after_image: loadPublicFile(combined),
    };

    if (match) {
      await updateTreatmentResult(match.id, payload, files, token);
      console.log(`updated: ${target.title.uz}`);
    } else {
      await createTreatmentResult(payload, files, token);
      console.log(`created: ${target.title.uz}`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
