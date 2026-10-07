#!/usr/bin/env node
/**
 * Writes dist/<path>/index.html for every URL in sitemap.xml, using the SSR bundle built
 * from src/prerender/entry.tsx (`vite build --ssr`). nginx serves these files first
 * (`try_files $uri $uri/index.html /index.html`), so crawlers get real per-page HTML; the
 * React app then takes over in the browser.
 *
 * A failure here never breaks the build — affected URLs simply fall back to the SPA shell.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry.js');

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

  const sitemap = readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
  const pathnames = [...new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname))]
    // "/" is the SPA shell itself (it redirects to the saved language).
    .filter((pathname) => pathname !== '/' && pathname !== '');

  const render = createPrerenderer(snapshot);
  let written = 0;
  let noindex = 0;
  const failed = [];

  for (const pathname of pathnames) {
    try {
      const { html, head } = render(pathname, template);
      const relative = decodeURIComponent(pathname).replace(/^\/+/, '').replace(/\/+$/, '');
      if (!relative || relative.includes('..')) continue;
      const file = path.join(dist, relative, 'index.html');
      mkdirSync(path.dirname(file), { recursive: true });
      writeFileSync(file, html);
      written += 1;
      if (head.robots.startsWith('noindex')) noindex += 1;
    } catch (error) {
      failed.push(`${pathname}: ${error instanceof Error ? error.message : error}`);
    }
  }

  console.log(`[prerender] ${written}/${pathnames.length} pages written to dist/`);
  if (noindex) console.warn(`[prerender] ${noindex} sitemap URLs resolve to noindex pages — check the sitemap`);
  if (failed.length) console.warn(`[prerender] failed:\n  ${failed.slice(0, 20).join('\n  ')}`);
}

main().catch((error) => {
  console.warn('[prerender] skipped:', error);
});
