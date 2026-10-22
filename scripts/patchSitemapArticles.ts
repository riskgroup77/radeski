#!/usr/bin/env node
/** Regenerate the Articles block in public/sitemap.xml with hreflang alternates. */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildArticleSitemapXml } from '../src/seo/sitemapArticles.ts';
import { readSitemap, replaceUrlSection, writeSitemap } from './sitemapXml.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sitemapPath = path.join(root, 'public', 'sitemap.xml');
const sitemap = readSitemap(sitemapPath);

// Only the article <url> entries are swapped; sections after them (local SEO, etc.) stay untouched.
sitemap.xml = replaceUrlSection(sitemap.xml, {
  isSectionUrl: (loc) => loc.includes('/articles/art-'),
  comment: 'Articles',
  block: buildArticleSitemapXml(),
});

writeSitemap(sitemapPath, sitemap);
console.log('Updated article hreflang block in public/sitemap.xml');
