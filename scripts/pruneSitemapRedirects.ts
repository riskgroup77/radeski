#!/usr/bin/env node
/** Remove redirecting URLs from public/sitemap.xml */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { isSitemapExcludedUrl } from '../src/seo/sitemapRedirectRules.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sitemapPath = path.join(root, 'public', 'sitemap.xml');
const xml = readFileSync(sitemapPath, 'utf8');

const urlBlockRegex = /\s*<url>[\s\S]*?<\/url>/g;
const locRegex = /<loc>([^<]+)<\/loc>/;

let removed = 0;
const kept: string[] = [];

for (const block of xml.match(urlBlockRegex) ?? []) {
  const loc = block.match(locRegex)?.[1];
  if (loc && isSitemapExcludedUrl(loc)) {
    removed++;
    console.log(`  remove: ${loc}`);
    continue;
  }
  kept.push(block);
}

const header = xml.slice(0, xml.search(urlBlockRegex));
const footer = xml.slice(xml.lastIndexOf('</urlset>'));
const next = `${header}${kept.join('\n')}\n${footer}`;

writeFileSync(sitemapPath, next, 'utf8');
console.log(`\nPruned ${removed} redirecting URLs from sitemap.xml (${kept.length} kept).`);
