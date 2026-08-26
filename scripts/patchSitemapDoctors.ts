#!/usr/bin/env node
/** Insert or refresh doctor profile URLs in public/sitemap.xml (fetches live API doctors). */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDoctorSitemapXml } from '../src/seo/sitemapDoctors.ts';

const API_URL = process.env.VITE_API_URL?.trim() || 'https://api.radeski.uz';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sitemapPath = path.join(root, 'public', 'sitemap.xml');

async function fetchDoctorIds(): Promise<string[]> {
  const res = await fetch(`${API_URL}/api/doctors`);
  if (!res.ok) {
    throw new Error(`API doctors fetch failed: ${res.status}`);
  }
  const data = (await res.json()) as Array<{ id: string }>;
  return data.map((doctor) => doctor.id).filter(Boolean);
}

function upsertDoctorBlock(xml: string, block: string): string {
  const startMarker = '  <!-- Doctor profiles -->';
  const endMarker = '  <url><loc>https://radeski.uz/uz/prices</loc>';

  if (xml.includes(startMarker)) {
    const startIdx = xml.indexOf(startMarker);
    const endIdx = xml.indexOf(endMarker);
    if (endIdx === -1) throw new Error('Could not find end marker after doctor profiles');
    return `${xml.slice(0, startIdx)}${block}\n\n${xml.slice(endIdx)}`;
  }

  const insertAfter = '  <url><loc>https://radeski.uz/en/doctors</loc><changefreq>monthly</changefreq><priority>0.75</priority></url>';
  const insertIdx = xml.indexOf(insertAfter);
  if (insertIdx === -1) {
    throw new Error('Could not find doctors list block in sitemap.xml');
  }
  const after = insertIdx + insertAfter.length;
  return `${xml.slice(0, after)}\n\n${block}\n${xml.slice(after)}`;
}

async function main() {
  const doctorIds = await fetchDoctorIds();
  console.log(`Fetched ${doctorIds.length} doctors from ${API_URL}`);
  const block = buildDoctorSitemapXml(doctorIds);
  const xml = readFileSync(sitemapPath, 'utf8');
  writeFileSync(sitemapPath, upsertDoctorBlock(xml, block), 'utf8');
  console.log(`Updated doctor profiles in sitemap (${doctorIds.length * 3} URLs).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
