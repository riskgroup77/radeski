#!/usr/bin/env node
/**
 * Writes a maximum-level .gz next to every text file in dist/ (JS, CSS, HTML, JSON, XML, SVG,
 * TXT). With `gzip_static on` nginx sends these instead of compressing on the fly at its
 * default low level — e.g. the main bundle goes out at ~290 KB instead of ~335 KB, at no
 * CPU cost per request. Runs last in `npm run build`, after every step that rewrites files.
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { gzipSync, constants } from 'node:zlib';

const dist = path.resolve(process.cwd(), 'dist');
const TEXT = /\.(js|mjs|css|html|json|xml|svg|txt|webmanifest)$/i;
const MIN_BYTES = 1024;
// data/: a cron rewrites the CMS snapshots every 5 minutes (vps_upgrade_radeski.py) — a .gz
// there would go stale, so those files are compressed by nginx on the fly instead.
const SKIP_DIRS = new Set(['videos', 'img-cache', 'uploads', 'data']);

let files = 0;
let before = 0;
let after = 0;

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) walk(full);
      continue;
    }
    if (!TEXT.test(entry.name) || statSync(full).size < MIN_BYTES) continue;
    const source = readFileSync(full);
    const gz = gzipSync(source, { level: constants.Z_BEST_COMPRESSION });
    if (gz.length >= source.length) continue;
    writeFileSync(`${full}.gz`, gz);
    files += 1;
    before += source.length;
    after += gz.length;
  }
}

walk(dist);
console.log(`[precompress] ${files} files: ${Math.round(before / 1024)} KB -> ${Math.round(after / 1024)} KB (.gz, level 9)`);
