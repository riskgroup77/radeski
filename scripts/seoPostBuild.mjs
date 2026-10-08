#!/usr/bin/env node
/**
 * After prerendering:
 *
 *  1. <lastmod> per sitemap URL — the date the page's *content* last changed (tracked by a
 *     content hash in .seo-state.json, which persists on the server between deploys). A date
 *     that only moves when content moves is what makes search engines trust lastmod.
 *  2. Image sitemap entries (<image:image>) for article covers and doctor photos.
 *  3. IndexNow (Yandex, Bing, Seznam, Naver…): notifies only the URLs whose content changed,
 *     when INDEXNOW=1 (set by the VPS deploy — never from local builds).
 *
 * Never breaks the build.
 */
import { existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const HOST = 'radeski.uz';
const INDEXNOW_KEY = '5d7aae4b827e366bd372b102fbf9e1a8'; // public by design: served at /<key>.txt
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const stateFile = process.env.SEO_STATE_FILE || path.join(root, '.seo-state.json');

const today = new Date().toISOString().slice(0, 10);

function escapeXml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

async function pingIndexNow(urls) {
  for (let i = 0; i < urls.length; i += 10000) {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls.slice(i, i + 10000),
      }),
    });
    console.log(`[indexnow] ${urls.slice(i, i + 10000).length} URLs -> HTTP ${response.status}`);
  }
}

async function main() {
  const manifestPath = path.join(dist, '.seo-manifest.json');
  if (!existsSync(manifestPath)) {
    console.warn('[seo] no prerender manifest — sitemap left as is');
    return;
  }
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  const firstRun = !existsSync(stateFile);
  const state = firstRun ? {} : JSON.parse(readFileSync(stateFile, 'utf8'));

  const changed = [];
  for (const [url, entry] of Object.entries(manifest)) {
    const previous = state[url];
    if (previous?.hash === entry.hash) continue;
    // New or changed content. On the very first run use the article's own date when known.
    const lastmod = firstRun && entry.published ? entry.published : today;
    state[url] = { hash: entry.hash, lastmod };
    if (!firstRun || !previous) changed.push(url);
  }

  // Rewrite sitemap <url> blocks with lastmod + images.
  const sitemapPath = path.join(dist, 'sitemap.xml');
  let sitemap = readFileSync(sitemapPath, 'utf8');
  if (!sitemap.includes('xmlns:image=')) {
    sitemap = sitemap.replace('<urlset', '<urlset xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"');
  }
  sitemap = sitemap.replace(/<url>([\s\S]*?)<\/url>/g, (block, inner) => {
    const loc = inner.match(/<loc>([^<]+)<\/loc>/)?.[1];
    if (!loc) return block;
    let body = inner.replace(/\s*<lastmod>[^<]*<\/lastmod>/g, '').replace(/\s*<image:image>[\s\S]*?<\/image:image>/g, '');
    const lastmod = state[loc]?.lastmod;
    if (lastmod) body = body.replace(/(<loc>[^<]+<\/loc>)/, `$1<lastmod>${lastmod}</lastmod>`);
    const images = manifest[loc]?.images ?? [];
    if (images.length) {
      const tail = body.match(/\s*$/)?.[0] ?? '';
      body = `${body.trimEnd()}${images.map((src) => `\n    <image:image><image:loc>${escapeXml(src)}</image:loc></image:image>`).join('')}${tail}`;
    }
    return `<url>${body}</url>`;
  });
  writeFileSync(sitemapPath, sitemap);
  writeFileSync(stateFile, JSON.stringify(state));
  rmSync(manifestPath, { force: true });

  const withLastmod = (sitemap.match(/<lastmod>/g) || []).length;
  const withImages = (sitemap.match(/<image:image>/g) || []).length;
  console.log(`[seo] sitemap: ${withLastmod} lastmod, ${withImages} images; ${changed.length} changed URLs${firstRun ? ' (first run)' : ''}`);

  if (process.env.INDEXNOW === '1' && changed.length) {
    await pingIndexNow(changed).catch((error) => console.warn('[indexnow] failed:', error));
  }
}

main().catch((error) => console.warn('[seo] skipped:', error));
