#!/usr/bin/env node
/**
 * SEO crawl of every URL in public/sitemap.xml — the evidence table for audits.
 *
 *   node scripts/crawlSiteAudit.mjs --dist [--out audit]   reads the prerendered dist/ files
 *   node scripts/crawlSiteAudit.mjs --live [--out audit]   fetches https://radeski.uz as Googlebot
 *
 * Per URL: HTTP status, title/description (+length), H1, canonical (self?), robots, hreflang
 * set (complete and reciprocal?), JSON-LD types (parse errors, empty FAQ answers), words in the
 * main content, and internal links pointing to the page from other pages' content (header and
 * footer navigation excluded). Writes <out>/crawl.json and <out>/crawl.csv and prints a summary.
 */
import { mkdirSync, readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';

const ORIGIN = 'https://radeski.uz';
const args = process.argv.slice(2);
const live = args.includes('--live');
const outDir = args.includes('--out') ? args[args.indexOf('--out') + 1] : 'audit';
const root = process.cwd();

// Live: the published sitemap. Dist: every prerendered page (dist/<lang>/**/index.html).
function prerenderedUrls() {
  const out = [];
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name === 'index.html') out.push(ORIGIN + '/' + path.relative(path.join(root, 'dist'), dir).split(path.sep).join('/'));
    }
  };
  for (const lang of ['uz', 'ru', 'en']) if (existsSync(path.join(root, 'dist', lang))) walk(path.join(root, 'dist', lang));
  return out.sort();
}
const urls = live
  ? [...new Set([...(await (await fetch(`${ORIGIN}/sitemap.xml`)).text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()))]
  : prerenderedUrls();

const decode = (s) =>
  s
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');
const text = (html) => decode(html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const first = (re, s) => {
  const m = s.match(re);
  return m ? decode(m[1]).trim() : '';
};

async function load(url) {
  if (live) {
    const res = await fetch(url, { redirect: 'manual', headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' } });
    const html = res.status === 200 ? await res.text() : '';
    return { status: res.status, location: res.headers.get('location') ?? '', html };
  }
  const rel = new URL(url).pathname.replace(/^\/+|\/+$/g, '');
  const file = path.join(root, 'dist', rel, 'index.html');
  return existsSync(file) ? { status: 200, location: '', html: readFileSync(file, 'utf8') } : { status: 404, location: '', html: '' };
}

function analyse(url, { status, location, html }) {
  const head = html.slice(0, html.indexOf('</head>') + 1 || undefined);
  const prerender = html.includes('class="prerender"') ? html.slice(html.indexOf('class="prerender"')) : html;
  // Plain prerender body (<main>) or the server-rendered app (<main class=…>, <a class=… href=…>).
  const main = prerender.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? '';
  const contentForLinks = prerender.replace(/<header\b[^>]*>[\s\S]*?<\/header>/, '').replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/, '');
  const jsonLd = [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const types = [];
  let jsonErrors = 0;
  let faqQuestions = 0;
  let faqEmpty = 0;
  for (const block of jsonLd) {
    try {
      const data = JSON.parse(block);
      for (const item of Array.isArray(data) ? data : data['@graph'] ?? [data]) {
        types.push(item['@type']);
        if (item['@type'] === 'FAQPage') {
          for (const q of item.mainEntity ?? []) {
            faqQuestions++;
            if (!q?.name?.trim() || !q?.acceptedAnswer?.text?.trim()) faqEmpty++;
          }
        }
      }
    } catch {
      jsonErrors++;
    }
  }
  const hreflang = Object.fromEntries([...head.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]));
  const canonical = first(/<link rel="canonical" href="([^"]+)"/, head);
  const robots = first(/<meta name="robots" content="([^"]*)"/, head);
  const links = [...contentForLinks.matchAll(/<a\b[^>]*?\shref="(\/[^"#?]*)/g)].map((m) => ORIGIN + m[1].replace(/\/$/, ''));
  const allLinks = [...prerender.matchAll(/<a\b[^>]*?\shref="(\/[^"#?]*)/g)].map((m) => ORIGIN + m[1].replace(/\/$/, ''));
  return {
    url,
    lang: new URL(url).pathname.split('/')[1] || '',
    status,
    redirect: location,
    title: first(/<title>([\s\S]*?)<\/title>/, head),
    description: first(/<meta name="description" content="([^"]*)"/, head),
    h1: first(/<h1[^>]*>([\s\S]*?)<\/h1>/, prerender).replace(/<[^>]+>/g, ''),
    h1Count: (prerender.match(/<h1[\s>]/g) ?? []).length,
    canonical,
    canonicalSelf: canonical === url,
    robots,
    indexable: status === 200 && !/noindex/i.test(robots) && canonical === url,
    hreflang,
    jsonLdTypes: types,
    jsonLdErrors: jsonErrors,
    faqQuestions,
    faqEmpty,
    words: text(main).split(' ').filter(Boolean).length,
    outLinks: [...new Set(links)].filter((l) => l !== url),
    outLinksAll: [...new Set(allLinks)].filter((l) => l !== url),
  };
}

const rows = [];
const queue = [...urls];
const workers = Array.from({ length: live ? 4 : 16 }, async () => {
  while (queue.length) {
    const url = queue.shift();
    try {
      rows.push(analyse(url, await load(url)));
    } catch (error) {
      rows.push({ url, status: 0, error: String(error) });
    }
  }
});
await Promise.all(workers);
rows.sort((a, b) => urls.indexOf(a.url) - urls.indexOf(b.url));

// Inbound links and hreflang reciprocity need the whole set.
const byUrl = new Map(rows.map((r) => [r.url, r]));
for (const r of rows) {
  r.inbound = 0;
  r.inboundWithNav = 0;
}
for (const r of rows) for (const target of r.outLinks ?? []) if (byUrl.has(target)) byUrl.get(target).inbound++;
for (const r of rows) for (const target of r.outLinksAll ?? []) if (byUrl.has(target)) byUrl.get(target).inboundWithNav++;
const titleCount = new Map();
const descCount = new Map();
for (const r of rows) {
  if (r.title) titleCount.set(r.title, (titleCount.get(r.title) ?? 0) + 1);
  if (r.description) descCount.set(r.description, (descCount.get(r.description) ?? 0) + 1);
}
for (const r of rows) {
  const alternates = Object.values(r.hreflang ?? {});
  r.hreflangSelf = alternates.includes(r.url);
  r.hreflangReciprocal = alternates.every((alt) => alt === r.url || !byUrl.has(alt) || Object.values(byUrl.get(alt).hreflang ?? {}).includes(r.url));
  r.duplicateTitle = (titleCount.get(r.title) ?? 0) > 1;
  r.duplicateDescription = (descCount.get(r.description) ?? 0) > 1;
}

mkdirSync(outDir, { recursive: true });
writeFileSync(path.join(outDir, 'crawl.json'), JSON.stringify(rows.map(({ outLinks, outLinksAll, ...r }) => r), null, 2));
const cols = ['url', 'lang', 'status', 'redirect', 'indexable', 'title', 'titleLength', 'description', 'descriptionLength', 'h1', 'h1Count', 'canonicalSelf', 'robots', 'hreflangLangs', 'hreflangSelf', 'hreflangReciprocal', 'jsonLdTypes', 'jsonLdErrors', 'faqQuestions', 'faqEmpty', 'words', 'inbound', 'inboundWithNav', 'duplicateTitle', 'duplicateDescription'];
const csv = [cols.join(',')]
  .concat(
    rows.map((r) =>
      cols
        .map((c) => {
          const v =
            c === 'titleLength' ? (r.title ?? '').length
            : c === 'descriptionLength' ? (r.description ?? '').length
            : c === 'hreflangLangs' ? Object.keys(r.hreflang ?? {}).join(' ')
            : c === 'jsonLdTypes' ? (r.jsonLdTypes ?? []).join(' ')
            : r[c];
          return `"${String(v ?? '').replace(/"/g, '""')}"`;
        })
        .join(','),
    ),
  )
  .join('\n');
writeFileSync(path.join(outDir, 'crawl.csv'), '﻿' + csv);

const count = (f) => rows.filter(f).length;
console.log(`[crawl] ${live ? 'live' : 'dist'}: ${rows.length} URLs`);
console.log(`  status 200: ${count((r) => r.status === 200)}, other: ${count((r) => r.status !== 200)}`);
console.log(`  indexable: ${count((r) => r.indexable)}, canonical not self: ${count((r) => r.status === 200 && !r.canonicalSelf)}, noindex: ${count((r) => /noindex/i.test(r.robots ?? ''))}`);
console.log(`  missing title: ${count((r) => !r.title)}, missing description: ${count((r) => !r.description)}, H1 != 1: ${count((r) => r.h1Count !== 1)}`);
console.log(`  duplicate titles: ${count((r) => r.duplicateTitle)}, duplicate descriptions: ${count((r) => r.duplicateDescription)}`);
console.log(`  hreflang without self: ${count((r) => r.status === 200 && !r.hreflangSelf)}, not reciprocal: ${count((r) => r.status === 200 && !r.hreflangReciprocal)}`);
console.log(`  JSON-LD parse errors: ${count((r) => r.jsonLdErrors > 0)}, empty FAQ answers: ${count((r) => r.faqEmpty > 0)}`);
console.log(`  thin (<150 words in main): ${count((r) => r.status === 200 && r.words < 150)}, no inbound content links: ${count((r) => r.inbound === 0)}, no inbound links at all: ${count((r) => r.inboundWithNav === 0)}`);
console.log(`  -> ${path.join(outDir, 'crawl.csv')}`);
