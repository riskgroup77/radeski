#!/usr/bin/env node
/** Insert or refresh doctor profile URLs in public/sitemap.xml (fetches live API doctors). */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDoctorSitemapXml } from '../src/seo/sitemapDoctors.ts';
import { doctorRouteKey } from '../src/utils/doctorSlug.ts';
import { readSitemap, replaceUrlSection, writeSitemap } from './sitemapXml.ts';

const API_URL = process.env.VITE_API_URL?.trim() || 'https://api.radeski.uz';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sitemapPath = path.join(root, 'public', 'sitemap.xml');

async function fetchDoctorIds(): Promise<string[]> {
  const res = await fetch(`${API_URL}/api/doctors`);
  if (!res.ok) {
    throw new Error(`API doctors fetch failed: ${res.status}`);
  }
  const data = (await res.json()) as Array<{ id: string; name_uz?: string; name_en?: string }>;
  // Readable slugs (/uz/doctors/ashurov-dilshod-davlatovich) — same keys the site links to.
  return data
    .map((doctor) => doctorRouteKey({ id: doctor.id, name: { uz: doctor.name_uz ?? '', ru: '', en: doctor.name_en ?? '' } }))
    .filter(Boolean);
}

/** /uz/doctors/<slug> profile pages — not the /uz/doctors list pages. */
const DOCTOR_PROFILE_LOC = /^https:\/\/radeski\.uz\/(uz|ru|en)\/doctors\/[^/]+$/;

async function main() {
  const doctorIds = await fetchDoctorIds();
  console.log(`Fetched ${doctorIds.length} doctors from ${API_URL}`);
  if (doctorIds.length === 0) {
    throw new Error('API returned no doctors — refusing to wipe doctor profiles from sitemap.xml');
  }
  const sitemap = readSitemap(sitemapPath);
  sitemap.xml = replaceUrlSection(sitemap.xml, {
    isSectionUrl: (loc) => DOCTOR_PROFILE_LOC.test(loc),
    comment: 'Doctor profiles',
    block: buildDoctorSitemapXml(doctorIds),
    insertAfter: '  <url><loc>https://radeski.uz/en/doctors</loc><changefreq>monthly</changefreq><priority>0.75</priority></url>',
  });
  writeSitemap(sitemapPath, sitemap);
  console.log(`Updated doctor profiles in sitemap (${doctorIds.length * 3} URLs).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
