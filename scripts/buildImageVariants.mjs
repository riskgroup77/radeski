#!/usr/bin/env node
/**
 * Responsive WebP copies of the site's photos, so a phone downloads a 30–80 KB picture
 * instead of the 1–4 MB original uploaded in the admin panel:
 *
 *   public/img-cache/u/<path under /uploads/>-<width>.webp   (CMS uploads from the snapshot)
 *   public/img-cache/s/<path under public/>-<width>.webp     (built-in images > 60 KB)
 *   public/img-cache/index.json   { "<original src>": [480, 960, …] }
 *
 * The site reads index.json (src/utils/imageVariants.ts) and serves srcset/sizes; anything
 * not in the index (e.g. uploaded after the build) is shown as the original. Existing
 * variants are kept, so a rebuild only converts new images. Needs ffmpeg; skipped without it.
 *
 * Usage: node scripts/buildImageVariants.mjs [--force]
 */
import { execFile } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';

const run = promisify(execFile);
const root = process.cwd();
const publicDir = path.join(root, 'public');
const outDir = path.join(publicDir, 'img-cache');
const indexFile = path.join(outDir, 'index.json');
const force = process.argv.includes('--force');
const WIDTHS = [480, 960, 1600];
const STATIC_MIN_BYTES = 60 * 1024;
const MEDIA_ORIGIN = (process.env.VITE_API_URL || 'https://api.radeski.uz').replace(/\/$/, '');
const IMAGE_EXT = /\.(jpe?g|png|webp|jfif)$/i;
const SKIP_DIRS = new Set(['img-cache', 'video-thumbs', 'data', 'videos', 'video-namuna']);

async function hasFfmpeg() {
  try {
    await run('ffmpeg', ['-version']);
    await run('ffprobe', ['-version']);
    return true;
  } catch {
    return false;
  }
}

function walkPublic(dir, rel = '') {
  const found = [];
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    const relPath = rel ? `${rel}/${name}` : name;
    const stat = statSync(full);
    if (stat.isDirectory()) {
      if (!rel && SKIP_DIRS.has(name)) continue;
      found.push(...walkPublic(full, relPath));
    } else if (IMAGE_EXT.test(name) && stat.size >= STATIC_MIN_BYTES) {
      found.push({ src: `/${relPath}`, input: full, key: `s/${relPath}` });
    }
  }
  return found;
}

function snapshotUploads() {
  const file = path.join(publicDir, 'data', 'site-snapshot.json');
  if (!existsSync(file)) return [];
  const uploads = new Set();
  const walk = (value) => {
    if (Array.isArray(value)) value.forEach(walk);
    else if (value && typeof value === 'object') Object.values(value).forEach(walk);
    else if (typeof value === 'string') {
      const match = value.match(/\/uploads\/[^\s?#"']+/);
      if (match && IMAGE_EXT.test(match[0])) uploads.add(match[0]);
    }
  };
  walk(JSON.parse(readFileSync(file, 'utf8')).data);
  return [...uploads].map((src) => ({ src, input: `${MEDIA_ORIGIN}${src}`, key: `u/${src.slice('/uploads/'.length)}` }));
}

async function imageWidth(input) {
  const { stdout } = await run('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width', '-of', 'csv=p=0', input], {
    timeout: 60_000,
  });
  return Number.parseInt(stdout.trim(), 10) || 0;
}

async function convert(input, width, target, hasAlpha) {
  mkdirSync(path.dirname(target), { recursive: true });
  await run(
    'ffmpeg',
    [
      '-y', '-v', 'error', '-i', input,
      '-vf', `scale=${width}:-2:flags=lanczos`,
      ...(hasAlpha ? ['-pix_fmt', 'yuva420p'] : []),
      '-frames:v', '1', '-c:v', 'libwebp', '-quality', '78', '-compression_level', '5',
      target,
    ],
    { timeout: 120_000 },
  );
}

async function main() {
  mkdirSync(outDir, { recursive: true });
  if (!(await hasFfmpeg())) {
    if (!existsSync(indexFile)) writeFileSync(indexFile, '{}\n');
    console.warn('[img-variants] ffmpeg not found — skipped (originals are used)');
    return;
  }
  const previous = existsSync(indexFile) ? JSON.parse(readFileSync(indexFile, 'utf8')) : {};
  const sources = [...snapshotUploads(), ...walkPublic(publicDir)];
  const index = {};
  const tempDir = mkdtempSync(path.join(tmpdir(), 'radeski-img-'));
  let converted = 0;
  const failed = [];

  for (const source of sources) {
    const wanted = (sourceWidth) => {
      const widths = WIDTHS.filter((w) => w < sourceWidth);
      // Always keep one copy (the original width) when it is smaller than every step.
      return widths.length ? widths : [sourceWidth];
    };
    const targetFor = (w) => path.join(outDir, `${source.key}-${w}.webp`);
    const known = previous[source.src];
    if (!force && known?.length && known.every((w) => existsSync(targetFor(w)))) {
      index[source.src] = known;
      continue;
    }
    let localCopy = null;
    try {
      // Download a CMS upload once instead of once per width.
      if (/^https?:/.test(source.input)) {
        const response = await fetch(source.input);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        localCopy = path.join(tempDir, path.basename(source.src));
        writeFileSync(localCopy, Buffer.from(await response.arrayBuffer()));
      }
      const input = localCopy ?? source.input;
      const sourceWidth = await imageWidth(input);
      if (!sourceWidth) throw new Error('unreadable image');
      const widths = wanted(sourceWidth);
      const hasAlpha = /\.png$/i.test(source.src);
      for (const w of widths) {
        if (force || !existsSync(targetFor(w))) {
          await convert(input, w, targetFor(w), hasAlpha);
          converted += 1;
        }
      }
      index[source.src] = widths;
    } catch (error) {
      failed.push(`${source.src}: ${error instanceof Error ? error.message.split('\n')[0] : error}`);
    } finally {
      if (localCopy) rmSync(localCopy, { force: true });
    }
  }
  rmSync(tempDir, { recursive: true, force: true });

  writeFileSync(indexFile, `${JSON.stringify(index)}\n`);
  console.log(`[img-variants] ${Object.keys(index).length} images, ${converted} new files`);
  if (failed.length) console.warn(`[img-variants] failed:\n  ${failed.slice(0, 20).join('\n  ')}`);
}

main().catch((error) => console.warn('[img-variants] skipped:', error));
