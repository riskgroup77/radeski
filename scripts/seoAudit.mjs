#!/usr/bin/env node
/**
 * Technical SEO check of the built site (dist/), run at the end of every build:
 * titles/descriptions (missing, duplicate, too long), exactly one H1, canonical + hreflang,
 * no noindex pages in the sitemap, valid JSON-LD, images with alt text, and internal links
 * that point at pages which do not exist. Prints a summary; never fails the build.
 *
 * Usage: node scripts/seoAudit.mjs [--verbose]
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const dist = path.join(process.cwd(), 'dist');
const ORIGIN = 'https://radeski.uz';
const verbose = process.argv.includes('--verbose');
const TITLE_MAX = 60;
const DESC_MAX = 160;
// Paths the app serves without a prerendered file (see nginx $radeski_spa_known).
const SPA_SECTIONS = /^\/(uz|ru|en)(\/(about|services|conditions|doctors|prices|articles|videos|branches|qoqon|fargona|results|technologies|daavlin-foto-kabinalari|dermoscan|science|obrazovaniya|malaka-oshirish|tele-dermatology|skin-pathology-center|brend|terms|privacy|fikr|promo)(\/.*)?)?\/?$/;

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (name === 'index.html') out.push(full);
  }
  return out;
}

const decode = (text) =>
  text.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const pick = (html, re) => (html.match(re) || [])[1];

function main() {
  if (!existsSync(dist)) return console.warn('[seo-audit] no dist/ — skipped');
  const sitemap = readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
  const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  const pages = walk(dist).filter((file) => path.relative(dist, file) !== 'index.html');
  const existing = new Set(pages.map((file) => `/${path.relative(dist, path.dirname(file)).split(path.sep).join('/')}`));

  const issues = {};
  const add = (kind, url, detail = '') => (issues[kind] ??= []).push(detail ? `${url} — ${detail}` : url);
  const titles = new Map();
  const descriptions = new Map();
  const brokenLinks = new Map();

  for (const file of pages) {
    const html = readFileSync(file, 'utf8');
    const url = `${ORIGIN}/${path.relative(dist, path.dirname(file)).split(path.sep).join('/')}`;
    const title = decode(pick(html, /<title>([\s\S]*?)<\/title>/) || '');
    const description = decode(pick(html, /<meta name="description" content="([^"]*)"/) || '');
    const robots = pick(html, /<meta name="robots" content="([^"]*)"/) || '';
    const canonical = pick(html, /<link rel="canonical" href="([^"]*)"/);
    const body = pick(html, /<div id="root">([\s\S]*)<\/div>\s*<script type="module"/) || pick(html, /<div id="root">([\s\S]*)$/) || '';
    const h1Count = (body.match(/<h1[\s>]/g) || []).length;

    if (!title) add('title missing', url);
    else if (title.length > TITLE_MAX) add('title too long', url, `${title.length}`);
    if (!description) add('description missing', url);
    else if (description.length > DESC_MAX) add('description too long', url, `${description.length}`);
    if (title) titles.set(title, [...(titles.get(title) ?? []), url]);
    if (description) descriptions.set(description, [...(descriptions.get(description) ?? []), url]);
    if (h1Count !== 1) add('H1 count is not 1', url, `${h1Count}`);
    if (!canonical) add('canonical missing', url);
    else if (sitemapUrls.has(url) && canonical !== url) add('sitemap URL is not canonical', url, canonical);
    if (!/hreflang="x-default"/.test(html)) add('hreflang missing', url);
    if (robots.startsWith('noindex') && sitemapUrls.has(url)) add('noindex page in sitemap', url);

    for (const [, json] of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      try {
        JSON.parse(json);
      } catch {
        add('invalid JSON-LD', url);
      }
    }
    for (const [tag] of body.matchAll(/<img\b[^>]*>/g)) {
      if (!/\balt="[^"]+"/.test(tag)) add('image without alt', url, (tag.match(/src="([^"]+)"/) || [])[1] || '');
    }
    for (const [, href] of body.matchAll(/<a [^>]*href="(\/[^"#?]*)/g)) {
      const clean = decodeURIComponent(href).replace(/\/$/, '') || '/';
      if (clean === '/' || existing.has(clean) || existsSync(path.join(dist, clean))) continue;
      if (!SPA_SECTIONS.test(clean)) brokenLinks.set(clean, [...(brokenLinks.get(clean) ?? []), url]);
    }
  }

  for (const [title, urls] of titles) if (urls.length > 1) add('duplicate title', title, `${urls.length} pages: ${urls.slice(0, 3).join(', ')}`);
  for (const [, urls] of descriptions) if (urls.length > 1) add('duplicate description', urls[0], `${urls.length} pages`);
  for (const [href, urls] of brokenLinks) add('link to unknown page', href, `from ${urls.length} page(s), e.g. ${urls[0]}`);
  for (const url of sitemapUrls) {
    const local = new URL(url).pathname.replace(/\/$/, '');
    if (local && !existing.has(local)) add('sitemap URL without page', url);
  }

  const kinds = Object.keys(issues);
  console.log(`[seo-audit] ${pages.length} pages, ${sitemapUrls.size} sitemap URLs — ${kinds.length ? `${kinds.length} issue types` : 'no issues'}`);
  for (const kind of kinds) {
    console.log(`  ${kind}: ${issues[kind].length}`);
    for (const line of issues[kind].slice(0, verbose ? 50 : 3)) console.log(`    · ${line}`);
  }
}

try {
  main();
} catch (error) {
  console.warn('[seo-audit] skipped:', error);
}
