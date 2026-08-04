/**
 * CLINIC_BRANCHES dagi barcha filiallarni API ga sync qiladi.
 * Usage: npx tsx scripts/seedAllBranchesToApi.ts
 */
import 'dotenv/config';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { adminLogin, createBranch, getAdminBranches, updateBranch } from '../src/api/adminApi';
import { mapClinicBranchToCreatePayload } from '../src/api/cmsMappers';
import { CLINIC_BRANCHES } from '../src/data/sitePagesContent';

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

function loadPublicImage(relativePath: string): File | null {
  const normalized = relativePath.replace(/^\//, '');
  const filePath = path.join(process.cwd(), 'public', normalized);
  if (!existsSync(filePath)) return null;
  const buffer = readFileSync(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const type = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg';
  return new File([buffer], path.basename(filePath), { type });
}

function matchBranch(
  existing: Awaited<ReturnType<typeof getAdminBranches>>,
  branch: (typeof CLINIC_BRANCHES)[number],
) {
  if (branch.id === 'liege-rade-skin') {
    return existing.find((item) =>
      /liège|liege|belgi|rade skin|sauvenière|sauveniere/i.test(
        `${item.name_uz} ${item.name_ru} ${item.name_en} ${item.address_uz}`,
      ),
    );
  }
  if (branch.id === 'kokand-branch') {
    return existing.find((item) =>
      /qo[‘']?qon|коканд|kokand|huqandiy/i.test(
        `${item.name_uz} ${item.name_ru} ${item.name_en} ${item.address_uz}`,
      ),
    );
  }
  return existing.find((item) =>
    /farg[‘']?ona|фергана|fergana|ovozi|radeski — bosh/i.test(
      `${item.name_uz} ${item.name_ru} ${item.name_en} ${item.address_uz}`,
    ),
  );
}

async function main() {
  const username = process.env.ADMIN_USERNAME?.trim() || 'admin';
  const password = process.env.ADMIN_PASSWORD?.trim() || 'radeski2026';

  console.log('Logging in...');
  const token = (await withRetry('login', () => adminLogin({ username, password }))).access_token;

  let existing = await withRetry('get branches', () => getAdminBranches(token));

  for (const branch of CLINIC_BRANCHES) {
    const payload = mapClinicBranchToCreatePayload(branch);
    const image = loadPublicImage(branch.image);
    const match = matchBranch(existing, branch);

    if (match) {
      await withRetry(branch.name.uz, () => updateBranch(match.id, payload, image, token));
      console.log('updated:', branch.name.uz);
    } else {
      await withRetry(branch.name.uz, () => createBranch(payload, image, token));
      console.log('created:', branch.name.uz);
      existing = await getAdminBranches(token);
    }
    await sleep(REQUEST_DELAY_MS);
  }

  const after = await getAdminBranches(token);
  console.log('Done — total', after.length);
  after
    .sort((a, b) => a.sort_order - b.sort_order)
    .forEach((b) => console.log(`  ${b.sort_order}. ${b.name_uz} | ${b.phone}`));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
