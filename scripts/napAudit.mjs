#!/usr/bin/env node
/**
 * Contacts (NAP) audit of every sitemap page: address, phones, hours, JSON-LD.
 *
 *   node scripts/napAudit.mjs            # live site (https://radeski.uz)
 *   node scripts/napAudit.mjs --dist     # local build in dist/
 *
 * Writes audit/nap/<label>.json (one row per URL with its findings) and prints a summary.
 * Rules (management, 23.11 and 27.11.2026):
 *   Fergana: O'zbekiston Ovozi 1B; +998 73 200 73 73 and +998 95 210 73 73; Mon–Sat 08–18.
 *   Kokand: 47-MFY, Huqandiy 144A; +998 95 145 73 73; every day 08–20.
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ORIGIN = 'https://radeski.uz';
const useDist = process.argv.includes('--dist');
const labelArg = process.argv.find((a) => a.startsWith('--label='));
const label = labelArg ? labelArg.slice(8) : `${new Date().toISOString().slice(0, 10)}-${useDist ? 'dist' : 'live'}`;

const FERGANA_TEL = new Set(['998732007373', '998952107373']);
const KOKAND_TEL = '998951457373';
/** Numbers that are not the clinic's but are correct where they appear (Daavlin distributor). */
const KNOWN_OTHER = new Set(['998904090029', '998905832857']);

const KOKAND_WORD = /qo[‘'’`]?qon|qo&#x27;qon|коканд|kokand|huqandiy|хукандий/gi;
const FERGANA_WORD = /farg[‘'’`]?ona|farg&#x27;ona|фергана|ферган|fergana|ovozi|овози/gi;

function decode(s) {
  return s
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function visibleText(html) {
  return decode(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' '),
  ).replace(/\s+/g, ' ');
}

/**
 * Which branch a number or time at `index` belongs to: a "(City)" label right after it wins,
 * otherwise the city named last in the `span` characters before it.
 */
function cityBefore(text, index, span = 220) {
  const after = text.slice(index, index + 40).match(/^[+\d\s\-():.]*?\(([^)]{3,20})\)/);
  if (after) {
    if (new RegExp(KOKAND_WORD.source, 'i').test(after[1])) return 'kokand';
    if (new RegExp(FERGANA_WORD.source, 'i').test(after[1])) return 'fergana';
  }
  const chunk = text.slice(Math.max(0, index - span), index);
  let k = -1;
  let f = -1;
  for (const m of chunk.matchAll(KOKAND_WORD)) k = m.index;
  for (const m of chunk.matchAll(FERGANA_WORD)) f = m.index;
  if (k < 0 && f < 0) return null;
  return k > f ? 'kokand' : 'fergana';
}

function ctx(text, index, len = 70) {
  return text.slice(Math.max(0, index - len), index + len).trim();
}

function auditPage(url, html) {
  const issues = [];
  const add = (type, detail) => issues.push({ type, detail });
  const text = visibleText(html);

  // 1. Old Fergana address 1A
  for (const m of text.matchAll(/(ovozi|овози)[^.;|]{0,30}?\b1\s?[AА]\b|\b1\s?[AА][- ](bino|uzbekiston|o['‘]zbekiston)/gi)) {
    add('fergana_address_1A', ctx(text, m.index));
  }

  // 2. Phones
  const phones = new Map();
  for (const m of text.matchAll(/\+?\s?998[\s\-()]*\d{2}[\s\-()]*\d{3}[\s\-]*\d{2}[\s\-]*\d{2}/g)) {
    const digits = m[0].replace(/\D/g, '');
    phones.set(digits, (phones.get(digits) || 0) + 1);
    if (digits === '998952107373' || digits === '998732007373') {
      if (cityBefore(text, m.index) === 'kokand') add('fergana_phone_next_to_kokand', ctx(text, m.index));
    } else if (digits === KOKAND_TEL) {
      if (cityBefore(text, m.index) === 'fergana') add('kokand_phone_next_to_fergana', ctx(text, m.index));
    } else if (!KNOWN_OTHER.has(digits)) {
      add('unknown_phone', `${m[0].trim()} — ${ctx(text, m.index, 50)}`);
    }
  }
  for (const m of html.matchAll(/href="tel:([^"]+)"/g)) {
    const digits = m[1].replace(/\D/g, '');
    if (!FERGANA_TEL.has(digits) && digits !== KOKAND_TEL && !KNOWN_OTHER.has(digits)) add('unknown_tel_link', m[1]);
  }

  // 3. Kokand hours must be every day 08–20
  for (const m of text.matchAll(/18[:.]00|6\s?PM/g)) {
    if (cityBefore(text, m.index, 160) === 'kokand') add('kokand_hours_18', ctx(text, m.index));
  }

  // 4. Kokand address spelling
  for (const m of text.matchAll(/47-MFI|Huqandiy Block|Huqandiy mahallasi/gi)) add('kokand_address_variant', ctx(text, m.index));

  // 5. JSON-LD
  for (const m of html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
    let data;
    try {
      data = JSON.parse(m[1]);
    } catch {
      add('jsonld_parse_error', m[1].slice(0, 80));
      continue;
    }
    const walk = (node) => {
      if (Array.isArray(node)) return node.forEach(walk);
      if (!node || typeof node !== 'object') return;
      const addr = node.address && typeof node.address === 'object' ? JSON.stringify(node.address) : '';
      if (addr) {
        const tel = [].concat(node.telephone || []).map((t) => String(t).replace(/\D/g, ''));
        const hours = [].concat(node.openingHoursSpecification || []);
        if (/huqandiy|хукандий|kokand|коканд|qo'qon/i.test(addr)) {
          if (tel.length && !tel.includes(KOKAND_TEL)) add('jsonld_kokand_phone', tel.join(','));
          for (const h of hours) {
            if (h.closes !== '20:00' || ![].concat(h.dayOfWeek || []).includes('Sunday')) {
              add('jsonld_kokand_hours', `${[].concat(h.dayOfWeek || []).length} days, ${h.opens}-${h.closes}`);
            }
          }
        } else if (/ovozi|овози/i.test(addr)) {
          if (!/1B|1Б/.test(addr)) add('jsonld_fergana_address', addr.slice(0, 120));
          if (tel.length && !tel.every((t) => FERGANA_TEL.has(t))) add('jsonld_fergana_phone', tel.join(','));
        }
      }
      Object.values(node).forEach(walk);
    };
    walk(data);
  }

  return { url, issues, phones: Object.fromEntries(phones) };
}

async function loadUrls() {
  const xml = useDist
    ? readFileSync('dist/sitemap.xml', 'utf8')
    : await (await fetch(`${ORIGIN}/sitemap.xml`, { cache: 'no-store' })).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function loadHtml(url) {
  if (useDist) {
    const path = new URL(url).pathname.replace(/\/$/, '');
    const file = join('dist', path, 'index.html');
    return existsSync(file) ? readFileSync(file, 'utf8') : null;
  }
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, { cache: 'no-store', headers: { 'User-Agent': 'RadeskiNapAudit/1.0' }, signal: AbortSignal.timeout(25000) });
      if (!res.ok) return null;
      return await res.text();
    } catch {
      await new Promise((r) => setTimeout(r, 1500));
    }
  }
  return null;
}

const urls = await loadUrls();
const rows = [];
let next = 0;
async function worker() {
  while (next < urls.length) {
    const url = urls[next++];
    const html = await loadHtml(url);
    rows.push(html == null ? { url, issues: [{ type: 'not_loaded', detail: '' }], phones: {} } : auditPage(url, html));
  }
}
await Promise.all(Array.from({ length: useDist ? 1 : 6 }, worker));
rows.sort((a, b) => a.url.localeCompare(b.url));

const counts = {};
for (const r of rows) for (const i of r.issues) counts[i.type] = (counts[i.type] || 0) + 1;
const bad = rows.filter((r) => r.issues.length);

mkdirSync('audit/nap', { recursive: true });
writeFileSync(`audit/nap/${label}.json`, JSON.stringify({ label, source: useDist ? 'dist' : ORIGIN, checked: rows.length, counts, rows }, null, 1));
console.log(`checked ${rows.length} pages, ${bad.length} with issues -> audit/nap/${label}.json`);
console.log(counts);
