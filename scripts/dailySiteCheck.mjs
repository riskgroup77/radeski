#!/usr/bin/env node
/**
 * Daily health check of the live site (the repeatable part of the site/SEO department routine).
 *
 *   node scripts/dailySiteCheck.mjs [--out audit/daily] [--origin https://radeski.uz]
 *
 * 1. SEO crawl of every sitemap URL (scripts/crawlSiteAudit.mjs): status, indexability,
 *    duplicates, hreflang, JSON-LD, thin pages, orphan pages.
 * 2. Every link and image on those pages: internal targets must answer 200 (redirects are
 *    listed), external links are checked too (social networks that refuse bots are reported
 *    as "not verifiable", not as broken).
 * 3. Contacts: every tel: link and JSON-LD telephone must be one of the clinic's numbers;
 *    WhatsApp / Telegram / booking links are listed with their status.
 *
 * Writes <out>/<YYYY-MM-DD>/{summary.md, links.csv, crawl.csv, crawl.json} and exits with
 * code 1 when something needs fixing (broken internal link, wrong phone, crawl errors).
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const arg = (name, fallback) => (args.includes(name) ? args[args.indexOf(name) + 1] : fallback);
const ORIGIN = arg('--origin', 'https://radeski.uz');
const day = new Date().toISOString().slice(0, 10);
const outDir = path.resolve(arg('--out', 'audit/daily'), day);
mkdirSync(outDir, { recursive: true });

/** The clinic's numbers (src/config/clinicContacts.ts). */
const CLINIC_PHONES = new Set(['+998732007373', '+998952107373']);
const UA = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
const BROWSER_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36';
const BOT_HOSTILE = /(instagram\.com|facebook\.com|t\.me|yandex\.|google\.com\/maps|maps\.google\.com|hipolink\.net)/;

// 1. SEO crawl
console.log('[daily] 1/3 SEO crawl…');
execFileSync(process.execPath, ['scripts/crawlSiteAudit.mjs', '--live', '--out', outDir], { stdio: 'inherit' });
const crawl = JSON.parse(readFileSync(path.join(outDir, 'crawl.json'), 'utf8'));

// 2. Links and images on every page
console.log('[daily] 2/3 links and images…');
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"');
const linksBySource = new Map(); // target -> Set(source page)
const phones = []; // { page, number, where }
async function getHtml(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  return res.ok ? res.text() : '';
}
const pages = crawl.filter((r) => r.status === 200).map((r) => r.url);
let next = 0;
await Promise.all(
  Array.from({ length: 6 }, async () => {
    while (next < pages.length) {
      const page = pages[next++];
      const html = await getHtml(page);
      for (const m of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) addTarget(decode(m[1]), page);
      // <link>: only files the page loads (stylesheets, preloaded images…), not preconnect hints.
      for (const m of html.matchAll(/<link\b([^>]*)>/g)) {
        const rel = m[1].match(/\brel="([^"]+)"/)?.[1] ?? '';
        const href = m[1].match(/\bhref="([^"]+)"/)?.[1];
        if (href && /stylesheet|preload|icon/.test(rel)) addTarget(decode(href), page);
      }
      for (const m of html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) addTarget(decode(m[1]), page);
      for (const m of html.matchAll(/"telephone"\s*:\s*"([^"]+)"/g)) phones.push({ page, number: m[1], where: 'JSON-LD' });
    }
  }),
);
function addTarget(raw, page) {
  if (raw.startsWith('tel:')) {
    phones.push({ page, number: raw.slice(4), where: 'tel: link' });
    return;
  }
  if (raw.startsWith('mailto:') || raw.startsWith('#') || raw.startsWith('data:') || raw.startsWith('javascript:')) return;
  let url;
  try {
    url = new URL(raw, ORIGIN);
  } catch {
    return;
  }
  if (!/^https?:$/.test(url.protocol)) return;
  url.hash = '';
  const key = url.toString();
  if (!linksBySource.has(key)) linksBySource.set(key, new Set());
  linksBySource.get(key).add(page);
}

// Contact and profile links live in the React header/footer, not in the crawler HTML:
// take them from the site config so they are checked every day too.
const linksConfig = readFileSync('src/config/links.ts', 'utf8');
for (const m of linksConfig.matchAll(/'(https:\/\/(?:hipolink|t\.me|www\.instagram|www\.facebook|yandex|www\.google\.com\/maps|maps\.google)[^']*)'/g)) {
  addTarget(m[1], 'src/config/links.ts');
}
const targets = [...linksBySource.keys()];
const results = new Map();
let t = 0;
await Promise.all(
  Array.from({ length: 8 }, async () => {
    while (t < targets.length) {
      const url = targets[t++];
      results.set(url, await check(url));
    }
  }),
);
async function check(url) {
  const internal = url.startsWith(ORIGIN);
  const headers = { 'User-Agent': internal ? UA : BROWSER_UA };
  for (const method of ['HEAD', 'GET']) {
    try {
      const res = await fetch(url, { method, redirect: 'manual', headers, signal: AbortSignal.timeout(20000) });
      if (method === 'HEAD' && (res.status === 405 || res.status === 403 || res.status === 404) && !internal) continue;
      return { status: res.status, location: res.headers.get('location') ?? '' };
    } catch (error) {
      if (method === 'GET') return { status: 0, location: String(error.cause?.code ?? error.name) };
    }
  }
  return { status: 0, location: '' };
}

const rows = targets.map((url) => {
  const { status, location } = results.get(url);
  const internal = url.startsWith(ORIGIN);
  let verdict = 'ok';
  if (status >= 300 && status < 400) verdict = internal ? 'redirect' : 'ok';
  if (status === 0 || status >= 400) verdict = !internal && BOT_HOSTILE.test(url) ? 'not verifiable (blocks bots)' : 'BROKEN';
  return { url, internal, status, location, verdict, pages: linksBySource.get(url).size, example: [...linksBySource.get(url)][0] };
});
const csv = ['url,internal,status,redirect_to,verdict,pages_linking,example_page']
  .concat(rows.map((r) => [r.url, r.internal, r.status, r.location, r.verdict, r.pages, r.example].map((v) => `"${String(v).replace(/"/g, '""')}"`).join(',')))
  .join('\n');
writeFileSync(path.join(outDir, 'links.csv'), '﻿' + csv);

// 3. Contacts
console.log('[daily] 3/3 contacts…');
const normalize = (n) => '+' + n.replace(/[^\d]/g, '');
const wrongPhones = phones.filter((p) => !CLINIC_PHONES.has(normalize(p.number)));
const contactLinks = rows.filter((r) => /wa\.me|whatsapp|t\.me|hipolink|instagram|facebook/.test(r.url));

// Summary
const broken = rows.filter((r) => r.verdict === 'BROKEN');
// Internal pages that answer 200 but are not in the sitemap (old slugs, aliases): link the
// sitemap URL instead, or redirect them (nginx/radeski-article-redirects.map.conf).
const sitemapUrls = new Set(crawl.map((r) => r.url));
const offSitemap = rows.filter((r) => {
  if (!r.internal || r.status !== 200) return false;
  const { pathname } = new URL(r.url);
  return pathname !== '/' && !/\.[a-z0-9]{2,5}$/i.test(pathname) && !sitemapUrls.has(r.url.replace(/\/$/, ''));
});
const redirects = rows.filter((r) => r.verdict === 'redirect');
const count = (f) => crawl.filter(f).length;
const crawlIssues = {
  'not 200': count((r) => r.status !== 200),
  'noindex / canonical elsewhere': count((r) => !r.indexable),
  'duplicate title': count((r) => r.duplicateTitle),
  'duplicate description': count((r) => r.duplicateDescription),
  'hreflang errors': count((r) => !r.hreflangSelf || !r.hreflangReciprocal),
  'JSON-LD errors': count((r) => r.jsonLdErrors > 0),
  'empty FAQ answers': count((r) => r.faqEmpty > 0),
  'no internal links at all': count((r) => r.inboundWithNav === 0),
};
const thin = crawl.filter((r) => r.status === 200 && r.words < 150 && !r.url.includes('/videos/'));
const md = [
  `# Radeski — kunlik sayt tekshiruvi ${day}`,
  '',
  `Manba: ${ORIGIN}/sitemap.xml — ${crawl.length} URL`,
  '',
  '## 1. SEO crawl',
  ...Object.entries(crawlIssues).map(([k, v]) => `- ${k}: **${v}**`),
  `- thin pages (<150 words, videos excluded): ${thin.length}`,
  '',
  '## 2. Havolalar va rasmlar',
  `- tekshirilgan manzillar: ${rows.length} (ichki ${rows.filter((r) => r.internal).length}, tashqi ${rows.filter((r) => !r.internal).length})`,
  `- **buzuq: ${broken.length}**`,
  ...broken.slice(0, 50).map((r) => `  - ${r.status} ${r.url} (masalan: ${r.example})`),
  `- ichki redirectlar: ${redirects.length}`,
  ...redirects.slice(0, 20).map((r) => `  - ${r.status} ${r.url} → ${r.location}`),
  `- bot bilan tekshirib bo'lmaydiganlar (Instagram, Facebook va h.k.): ${rows.filter((r) => r.verdict.startsWith('not verifiable')).length}`,
  `- sitemap'da yo'q sahifaga ichki havolalar (200): ${offSitemap.length}`,
  ...offSitemap.slice(0, 30).map((r) => `  - ${r.url} (masalan: ${r.example})`),
  '',
  '## 3. Kontaktlar',
  `- tel: havolalar va JSON-LD telefonlari: ${phones.length}, rasmiy raqamlarga mos kelmaydi: **${wrongPhones.length}**`,
  ...[...new Set(wrongPhones.map((p) => `${p.number} (${p.where}, ${p.page})`))].slice(0, 20).map((s) => `  - ${s}`),
  `- WhatsApp havolalari: ${contactLinks.filter((r) => /wa\.me|whatsapp/.test(r.url)).length}`,
  ...contactLinks.map((r) => `- ${r.url} — ${r.status} (${r.verdict}), ${r.pages} sahifada`),
  '',
];
writeFileSync(path.join(outDir, 'summary.md'), md.join('\n'));
console.log(md.join('\n'));
const failing = broken.filter((r) => r.internal).length + wrongPhones.length + crawlIssues['not 200'] + crawlIssues['JSON-LD errors'];
process.exit(failing > 0 ? 1 : 0);
