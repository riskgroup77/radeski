/**
 * Belgiya (Liège) Rade Skin Clinic filialini API ga qo'shadi.
 * Usage: npx tsx scripts/seedLiegeBranchToApi.ts
 */
import 'dotenv/config';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { adminLogin, createBranch, getAdminBranches, updateBranch } from '../src/api/adminApi';
import { mapClinicBranchToCreatePayload } from '../src/api/cmsMappers';
import { CLINIC_BRANCHES } from '../src/data/sitePagesContent';

const REQUEST_DELAY_MS = Number(process.env.SYNC_DELAY_MS || 800);
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const TARGET = CLINIC_BRANCHES.find((b) => b.id === 'liege-rade-skin');

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

function loadImage(): File | null {
  const filePath = path.join(process.cwd(), 'public', 'gallery', 'rade-skin-clinic-liege.png');
  if (!existsSync(filePath)) return null;
  const buffer = readFileSync(filePath);
  return new File([buffer], 'rade-skin-clinic-liege.png', { type: 'image/png' });
}

async function main() {
  if (!TARGET) throw new Error('liege-rade-skin branch missing in CLINIC_BRANCHES');

  const username = process.env.ADMIN_USERNAME?.trim() || 'admin';
  const password = process.env.ADMIN_PASSWORD?.trim() || 'radeski2026';

  console.log('Logging in...');
  const token = (await withRetry('login', () => adminLogin({ username, password }))).access_token;
  const existing = await withRetry('get branches', () => getAdminBranches(token));

  const match = existing.find((item) =>
    /liège|liege|belgi|rade skin|sauvenière|sauveniere/i.test(
      `${item.name_uz} ${item.name_ru} ${item.name_en} ${item.address_uz}`,
    ),
  );

  const payload = mapClinicBranchToCreatePayload(TARGET);
  const image = loadImage();

  if (match) {
    await withRetry('update liege', () => updateBranch(match.id, payload, image, token));
    console.log('updated:', TARGET.name.uz);
  } else {
    await withRetry('create liege', () => createBranch(payload, image, token));
    console.log('created:', TARGET.name.uz);
  }

  const after = await getAdminBranches(token);
  console.log(
    'branches:',
    after.map((b) => `${b.sort_order}:${b.name_uz}`).join(' | '),
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
