/**
 * Hamkorlar, mijoz fikrlari, davolash natijalari va videolarni statik katalogdan API ga yuklaydi.
 *
 * Usage:
 *   set ADMIN_USERNAME=admin
 *   set ADMIN_PASSWORD=radeski2026
 *   npm run seed:cms
 */
import 'dotenv/config';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import {
  adminLogin,
  createPartner,
  getAdminPartners,
  updatePartner,
  createAdminReview,
  getAdminReviews,
  createTreatmentResult,
  getAdminTreatmentResults,
  updateTreatmentResult,
  createVideo,
  getAdminVideos,
  updateVideo,
} from '../src/api/adminApi';
import {
  mapPartnerToCreatePayload,
  mapReviewToAdminCreatePayload,
  mapTreatmentResultToCreatePayload,
  mapClinicVideoToCreatePayload,
} from '../src/api/cmsMappers';
import {
  CLINIC_PARTNERS,
  CLINIC_VIDEOS,
  CUSTOMER_REVIEWS,
  TREATMENT_RESULTS,
} from '../src/data/sitePagesContent';

const REQUEST_DELAY_MS = Number(process.env.SYNC_DELAY_MS || 400);
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function withRetry<T>(label: string, fn: () => Promise<T>): Promise<T> {
  let attempt = 0;
  while (true) {
    try {
      return await fn();
    } catch (error) {
      attempt++;
      const msg = error instanceof Error ? error.message : String(error);
      if (!/too many requests|429/i.test(msg) || attempt > 5) throw error;
      const wait = REQUEST_DELAY_MS * 2 ** attempt;
      console.warn(`Rate limited "${label}", retry ${attempt}/5 in ${wait}ms`);
      await sleep(wait);
    }
  }
}

function mimeFromPath(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.png') return 'image/png';
  if (ext === '.jpg' || ext === '.jpeg' || ext === '.jfif') return 'image/jpeg';
  if (ext === '.webp') return 'image/webp';
  if (ext === '.mp4') return 'video/mp4';
  if (ext === '.mov') return 'video/quicktime';
  return 'application/octet-stream';
}

function loadPublicFile(relativePath: string): File {
  const normalized = relativePath.replace(/^\//, '');
  const filePath = path.join(process.cwd(), 'public', normalized);
  if (!existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  const buffer = readFileSync(filePath);
  let name = path.basename(filePath);
  let mime = mimeFromPath(filePath);
  if (name.toLowerCase().endsWith('.jfif')) {
    name = name.replace(/\.jfif$/i, '.jpg');
    mime = 'image/jpeg';
  }
  return new File([buffer], name, { type: mime });
}

function normalizeKey(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

async function seedPartners(token: string) {
  const existing = await getAdminPartners(token);
  const byName = new Map(existing.map((item) => [normalizeKey(item.name_uz), item]));

  let created = 0;
  let updated = 0;

  for (const [index, partner] of CLINIC_PARTNERS.entries()) {
    const payload = mapPartnerToCreatePayload({
      ...partner,
      sortOrder: partner.sortOrder ?? index + 1,
    });
    const logoFile = loadPublicFile(partner.logo);
    const match = byName.get(normalizeKey(partner.name.uz));

    if (match) {
      await withRetry(partner.name.uz, () => updatePartner(match.id, payload, logoFile, token));
      updated++;
      console.log(`  partner updated: ${partner.name.uz}`);
    } else {
      await withRetry(partner.name.uz, () => createPartner(payload, logoFile, token));
      created++;
      console.log(`  partner created: ${partner.name.uz}`);
    }
    await sleep(REQUEST_DELAY_MS);
  }

  return { created, updated };
}

async function seedReviews(token: string) {
  const existing = await getAdminReviews(token);
  const byAuthor = new Map(
    existing.map((item) => [normalizeKey(item.author_name), item]),
  );

  let created = 0;
  let skipped = 0;

  for (const review of CUSTOMER_REVIEWS.filter((item) => item.published)) {
    const payload = mapReviewToAdminCreatePayload(review);
    const match = byAuthor.get(normalizeKey(review.authorName));

    if (match) {
      skipped++;
      console.log(`  review exists: ${review.authorName}`);
      continue;
    }

    await withRetry(review.authorName, () => createAdminReview(payload, token));
    created++;
    console.log(`  review created: ${review.authorName}`);
    await sleep(REQUEST_DELAY_MS);
  }

  return { created, skipped };
}

async function seedTreatmentResults(token: string) {
  const existing = await getAdminTreatmentResults(token);
  const byTitle = new Map(existing.map((item) => [normalizeKey(item.title_uz), item]));

  let created = 0;
  let updated = 0;

  for (const result of TREATMENT_RESULTS) {
    const payload = mapTreatmentResultToCreatePayload(result);
    if (!result.beforeImage && !result.afterImage) {
      console.warn(`  skip result (no image): ${result.title.uz}`);
      continue;
    }

    const files: { before_image?: File; after_image?: File } = {};
    if (result.beforeImage) {
      files.before_image = loadPublicFile(result.beforeImage);
    }
    if (result.afterImage) {
      files.after_image = loadPublicFile(result.afterImage);
    }
    const match = byTitle.get(normalizeKey(result.title.uz));

    if (match) {
      await withRetry(result.title.uz, () =>
        updateTreatmentResult(match.id, payload, files, token),
      );
      updated++;
      console.log(`  result updated: ${result.title.uz}`);
    } else {
      await withRetry(result.title.uz, () => createTreatmentResult(payload, files, token));
      created++;
      console.log(`  result created: ${result.title.uz}`);
    }
    await sleep(REQUEST_DELAY_MS);
  }

  return { created, updated };
}

async function seedVideos(token: string) {
  const existing = await getAdminVideos(token);
  const byTitle = new Map(existing.map((item) => [normalizeKey(item.title_uz), item]));

  let created = 0;
  let updated = 0;

  for (const video of CLINIC_VIDEOS) {
    const payload = mapClinicVideoToCreatePayload(video);
    if (!video.src) {
      console.warn(`  skip video (no src): ${video.title.uz}`);
      continue;
    }

    const videoFile = loadPublicFile(video.src);
    const match = byTitle.get(normalizeKey(video.title.uz));

    if (match) {
      await withRetry(video.title.uz, () =>
        updateVideo(match.id, payload, { video: videoFile }, token),
      );
      updated++;
      console.log(`  video updated: ${video.title.uz}`);
    } else {
      await withRetry(video.title.uz, () =>
        createVideo(payload, { video: videoFile }, token),
      );
      created++;
      console.log(`  video created: ${video.title.uz}`);
    }
    await sleep(REQUEST_DELAY_MS);
  }

  return { created, updated };
}

async function main() {
  const username = process.env.ADMIN_USERNAME?.trim() || 'admin';
  const password = process.env.ADMIN_PASSWORD?.trim() || 'radeski2026';

  console.log('Logging in...');
  const tokenRes = await adminLogin({ username, password });
  const token = tokenRes.access_token;

  console.log('\nPartners:');
  const partners = await seedPartners(token);

  console.log('\nReviews:');
  const reviews = await seedReviews(token);

  console.log('\nTreatment results:');
  const results = await seedTreatmentResults(token);

  console.log('\nVideos:');
  const videos = await seedVideos(token);

  console.log('\nDone.');
  console.log(
    `Partners — created: ${partners.created}, updated: ${partners.updated}`,
  );
  console.log(`Reviews — created: ${reviews.created}, skipped: ${reviews.skipped}`);
  console.log(
    `Results — created: ${results.created}, updated: ${results.updated}`,
  );
  console.log(`Videos — created: ${videos.created}, updated: ${videos.updated}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
