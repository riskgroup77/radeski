/** Insert local commercial SEO URLs (30 landings × 3 locales) + Fargana hub into sitemap.xml */
import path from 'node:path';
import { buildCityHubSitemapXml, buildLocalCommercialSitemapXml } from '../src/seo/sitemapLocalCommercial.ts';
import { readSitemap, writeSitemap } from './sitemapXml.ts';

const root = path.resolve(import.meta.dirname, '..');
const sitemapPath = path.join(root, 'public', 'sitemap.xml');
const markerStart = '<!-- Local commercial SEO -->';
const markerEnd = '<!-- /Local commercial SEO -->';

const block = `${markerStart}
${buildCityHubSitemapXml()}

${buildLocalCommercialSitemapXml()}
${markerEnd}`;

const sitemap = readSitemap(sitemapPath);
let xml = sitemap.xml;

if (xml.includes(markerStart)) {
  const start = xml.indexOf(markerStart);
  const endIdx = xml.indexOf(markerEnd, start);
  if (endIdx === -1) {
    throw new Error(`Invalid sitemap.xml — found "${markerStart}" but no "${markerEnd}" after it`);
  }
  xml = `${xml.slice(0, start)}${block}${xml.slice(endIdx + markerEnd.length)}`;
} else {
  const insertBefore = '</urlset>';
  if (!xml.includes(insertBefore)) {
    throw new Error('Invalid sitemap.xml — missing </urlset>');
  }
  xml = xml.replace(insertBefore, `${block}\n\n${insertBefore}`);
}

sitemap.xml = xml;
writeSitemap(sitemapPath, sitemap);
console.log('Updated local commercial SEO block in public/sitemap.xml');
