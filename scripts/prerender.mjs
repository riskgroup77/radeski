#!/usr/bin/env node
/**
 * Writes dist/<path>/index.html for every URL in sitemap.xml, using the SSR bundle built
 * from src/prerender/entry.tsx (`vite build --ssr`). nginx serves these files first
 * (`try_files $uri $uri/index.html /index.html`), so crawlers get real per-page HTML; the
 * React app then takes over in the browser.
 *
 * Also refreshes the doctor and video blocks of dist/sitemap.xml from the CMS and
 * leaves dist/.seo-manifest.json (content hash + images per URL) for seoPostBuild.mjs.
 *
 * A failure here never breaks the build — affected URLs simply fall back to the SPA shell.
 */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry.js');
const ORIGIN = 'https://radeski.uz';
const LOCALES = ['uz', 'ru', 'en'];
const DOCTOR_BLOCK_START = '  <!-- Doctor profiles -->';
const DOCTOR_BLOCK_END = '  <url><loc>https://radeski.uz/uz/prices</loc>';
const SERVICE_BLOCK_START = '  <!-- Service pages (CMS) -->';
const SERVICE_BLOCK_END = '  <!-- /Service pages (CMS) -->';
const VIDEO_BLOCK_START = '  <!-- Video pages -->';
const VIDEO_BLOCK_END = '  <!-- /Video pages -->';

function removeBlock(sitemap, startMarker, endMarker) {
  const start = sitemap.indexOf(startMarker);
  const end = sitemap.indexOf(endMarker);
  if (start === -1 || end < start) return sitemap;
  return `${sitemap.slice(0, start).trimEnd()}\n${sitemap.slice(end + endMarker.length).trimStart()}`;
}

/** CMS service categories and sub-services the static sitemap does not list yet. */
function serviceSitemapBlock(paths, sitemap) {
  const lines = [SERVICE_BLOCK_START];
  for (const servicePath of paths) {
    for (const locale of LOCALES) {
      const loc = `${ORIGIN}/${locale}/${servicePath}`;
      if (sitemap.includes(`<loc>${loc}</loc>`)) continue;
      lines.push('  <url>');
      lines.push(`    <loc>${loc}</loc>`);
      lines.push('    <changefreq>weekly</changefreq>');
      lines.push(`    <priority>${locale === 'uz' ? '0.85' : locale === 'ru' ? '0.8' : '0.7'}</priority>`);
      lines.push('  </url>');
    }
  }
  lines.push(SERVICE_BLOCK_END);
  return lines.length > 2 ? lines.join('\n') : '';
}

function doctorSitemapBlock(keys) {
  const lines = [DOCTOR_BLOCK_START];
  for (const key of keys) {
    for (const locale of LOCALES) {
      lines.push('  <url>');
      lines.push(`    <loc>${ORIGIN}/${locale}/doctors/${encodeURIComponent(key)}</loc>`);
      lines.push('    <changefreq>monthly</changefreq>');
      lines.push(`    <priority>${locale === 'uz' ? '0.75' : locale === 'ru' ? '0.7' : '0.65'}</priority>`);
      lines.push('  </url>');
    }
  }
  return lines.join('\n');
}

function videoSitemapBlock(keys) {
  const lines = [VIDEO_BLOCK_START];
  for (const key of keys) {
    for (const locale of LOCALES) {
      lines.push('  <url>');
      lines.push(`    <loc>${ORIGIN}/${locale}/videos/${encodeURIComponent(key)}</loc>`);
      lines.push('    <changefreq>monthly</changefreq>');
      lines.push(`    <priority>${locale === 'uz' ? '0.6' : '0.5'}</priority>`);
      lines.push('  </url>');
    }
  }
  lines.push(VIDEO_BLOCK_END);
  return lines.join('\n');
}

/** Hash of what a crawler reads (title, meta, body) — ignores hashed asset names. */
function contentHash(html) {
  const pick = (re) => (html.match(re) || [, ''])[1];
  const material = [
    pick(/<title>([\s\S]*?)<\/title>/),
    pick(/<meta name="description" content="([^"]*)"/),
    pick(/<link rel="canonical" href="([^"]*)"/),
    pick(/<div id="root">([\s\S]*?)<\/div>\s*<script type="module"/) || pick(/<div id="root">([\s\S]*)$/),
  ].join('\n');
  return createHash('sha1').update(material).digest('hex');
}

async function main() {
  const { createPrerenderer } = await import(pathToFileURL(ssrEntry).href);

  const template = readFileSync(path.join(dist, 'index.html'), 'utf8');
  if (!template.includes('<div id="root"></div>')) {
    throw new Error('dist/index.html has no empty #root — refusing to prerender over it');
  }

  const snapshotFile = [
    path.join(dist, 'data', 'site-snapshot.json'),
    path.join(root, 'public', 'data', 'site-snapshot.json'),
  ].find((file) => existsSync(file));
  const snapshot = snapshotFile ? JSON.parse(readFileSync(snapshotFile, 'utf8')) : { data: {} };
  if (!snapshotFile) console.warn('[prerender] no site snapshot — using built-in content only');

  const prerenderer = createPrerenderer(snapshot);

  // Doctor profiles come from the CMS: rebuild that sitemap block with readable slugs.
  const sitemapPath = path.join(dist, 'sitemap.xml');
  let sitemap = readFileSync(sitemapPath, 'utf8');
  const start = sitemap.indexOf(DOCTOR_BLOCK_START);
  const end = sitemap.indexOf(DOCTOR_BLOCK_END);
  if (snapshot.data?.doctors?.length && start !== -1 && end > start) {
    sitemap = `${sitemap.slice(0, start)}${doctorSitemapBlock(prerenderer.doctorKeys)}\n\n${sitemap.slice(end)}`;
  }

  // Service categories / sub-services added in the admin panel (readable URLs).
  sitemap = removeBlock(sitemap, SERVICE_BLOCK_START, SERVICE_BLOCK_END);
  const serviceBlock = serviceSitemapBlock(prerenderer.servicePaths ?? [], sitemap);
  if (serviceBlock) sitemap = sitemap.replace('</urlset>', `${serviceBlock}\n</urlset>`);

  // One watch page per clinic video (the page Google can show as a video result).
  sitemap = removeBlock(sitemap, VIDEO_BLOCK_START, VIDEO_BLOCK_END);
  if (prerenderer.videoKeys?.length) {
    sitemap = sitemap.replace('</urlset>', `${videoSitemapBlock(prerenderer.videoKeys)}\n</urlset>`);
  }
  writeFileSync(sitemapPath, sitemap);

  const pathnames = [...new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname))]
    // "/" is the SPA shell itself (it redirects to the saved language).
    .filter((pathname) => pathname !== '/' && pathname !== '');

  const manifest = {};
  let noindex = 0;
  const failed = [];

  for (const pathname of pathnames) {
    try {
      const { html, head, images, published, video } = prerenderer.render(pathname, template);
      const relative = decodeURIComponent(pathname).replace(/^\/+/, '').replace(/\/+$/, '');
      if (!relative || relative.includes('..')) continue;
      const file = path.join(dist, relative, 'index.html');
      mkdirSync(path.dirname(file), { recursive: true });
      writeFileSync(file, html);
      manifest[`${ORIGIN}${pathname}`] = { hash: contentHash(html), images, published, video };
      if (head.robots.startsWith('noindex')) noindex += 1;
    } catch (error) {
      failed.push(`${pathname}: ${error instanceof Error ? error.message : error}`);
    }
  }

  writeFileSync(path.join(dist, '.seo-manifest.json'), JSON.stringify(manifest));
  if (prerenderer.llmsTxt) writeFileSync(path.join(dist, 'llms.txt'), prerenderer.llmsTxt());
  console.log(`[prerender] ${Object.keys(manifest).length}/${pathnames.length} pages written to dist/`);
  if (noindex) console.warn(`[prerender] ${noindex} sitemap URLs resolve to noindex pages — check the sitemap`);
  if (failed.length) console.warn(`[prerender] failed:\n  ${failed.slice(0, 20).join('\n  ')}`);
}

main().catch((error) => {
  console.warn('[prerender] skipped:', error);
});
