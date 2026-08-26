#!/usr/bin/env node
/** Fail if sitemap.xml contains URLs that redirect (SPA or nginx rules). */
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { isSitemapExcludedUrl } from '../src/seo/sitemapRedirectRules.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const xml = readFileSync(path.join(root, 'public', 'sitemap.xml'), 'utf8');
const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const bad = locs.filter(isSitemapExcludedUrl);
if (bad.length > 0) {
  console.error('Sitemap contains redirecting URLs:');
  for (const url of bad) console.error(`  - ${url}`);
  process.exit(1);
}

console.log(`OK: ${locs.length} sitemap URLs, none are known redirect sources.`);
