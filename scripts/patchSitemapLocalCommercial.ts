/** Insert local commercial SEO URLs (30 landings × 3 locales) + Fargana hub into sitemap.xml */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { buildCityHubSitemapXml, buildLocalCommercialSitemapXml } from '../src/seo/sitemapLocalCommercial.ts';

const root = path.resolve(import.meta.dirname, '..');
const sitemapPath = path.join(root, 'public', 'sitemap.xml');
const markerStart = '<!-- Local commercial SEO -->';
const markerEnd = '<!-- /Local commercial SEO -->';

const block = `${markerStart}
${buildCityHubSitemapXml()}

${buildLocalCommercialSitemapXml()}
${markerEnd}`;

let xml = readFileSync(sitemapPath, 'utf8');

if (xml.includes(markerStart)) {
  const start = xml.indexOf(markerStart);
  const end = xml.indexOf(markerEnd) + markerEnd.length;
  xml = `${xml.slice(0, start)}${block}${xml.slice(end)}`;
} else {
  const insertBefore = '</urlset>';
  if (!xml.includes(insertBefore)) {
    throw new Error('Invalid sitemap.xml — missing </urlset>');
  }
  xml = xml.replace(insertBefore, `${block}\n\n${insertBefore}`);
}

writeFileSync(sitemapPath, xml, 'utf8');
console.log('Updated local commercial SEO block in public/sitemap.xml');
