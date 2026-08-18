#!/usr/bin/env node
/** Regenerate the Articles block in public/sitemap.xml with hreflang alternates. */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildArticleSitemapXml } from '../src/seo/sitemapArticles.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sitemapPath = path.join(root, 'public', 'sitemap.xml');
const xml = readFileSync(sitemapPath, 'utf8');

const startMarker = '  <!-- Articles';
const endMarker = '</urlset>';

const startIdx = xml.indexOf(startMarker);
const endIdx = xml.lastIndexOf(endMarker);
if (startIdx === -1 || endIdx === -1) {
  throw new Error('Could not locate Articles section in sitemap.xml');
}

const head = xml.slice(0, startIdx);
const tail = xml.slice(endIdx);

writeFileSync(sitemapPath, `${head}${buildArticleSitemapXml()}\n${tail}`, 'utf8');
console.log('Updated article hreflang block in public/sitemap.xml');
