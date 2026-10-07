#!/usr/bin/env node
/**
 * Fetches every public CMS endpoint once and writes them into a single static JSON file
 * (`data/site-snapshot.json`). The site reads this file instead of firing 11 API calls per
 * page load, so visitors never hit the API rate limit and pages render from one gzip'd,
 * cacheable request.
 *
 * Runs at build time (into public/data) and every few minutes from cron on the VPS (into
 * dist/data). Never fails the build: an endpoint that errors keeps its previous value, and
 * if nothing could be fetched the existing file is left untouched.
 *
 * Usage:
 *   node scripts/buildSiteSnapshot.mjs --out public/data [--out dist/data] [--api https://api.radeski.uz]
 */
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const ENDPOINTS = {
  doctors: '/api/doctors',
  services: '/api/services',
  prices: '/api/prices',
  articles: '/api/articles',
  siteTexts: '/api/site-texts',
  partners: '/api/partners',
  reviews: '/api/reviews?published=true',
  branches: '/api/branches',
  treatmentResults: '/api/treatment-results',
  videos: '/api/videos',
  clinicRatings: '/api/clinic-ratings',
  clientCount: '/api/stats/client-count',
};

/**
 * The article list endpoint returns every article's full body. List views only need the
 * card fields below (see mapArticleListItemFromApi); ArticlePage fetches the full article
 * separately — so the snapshot keeps just these and stays small.
 */
const ARTICLE_LIST_FIELDS = [
  'id', 'slug', 'date', 'views', 'image', 'image_uz', 'image_ru', 'image_en',
  'title_uz', 'title_ru', 'title_en', 'summary_uz', 'summary_ru', 'summary_en',
  'author_uz', 'author_ru', 'author_en', 'tags_uz', 'tags_ru', 'tags_en',
];

function slimArticles(articles) {
  return articles.map((article) =>
    Object.fromEntries(ARTICLE_LIST_FIELDS.filter((field) => field in article).map((field) => [field, article[field]])),
  );
}

const REQUEST_DELAY_MS = 150;
const REQUEST_TIMEOUT_MS = 20_000;
const FILE_NAME = 'site-snapshot.json';

function parseArgs(argv) {
  const outDirs = [];
  let api = process.env.SNAPSHOT_API_BASE || 'https://api.radeski.uz';
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--out' && argv[i + 1]) outDirs.push(argv[++i]);
    else if (argv[i] === '--api' && argv[i + 1]) api = argv[++i];
  }
  if (outDirs.length === 0) outDirs.push('public/data');
  return { outDirs, api: api.replace(/\/$/, '') };
}

function readPrevious(outDirs) {
  for (const dir of outDirs) {
    const file = path.join(dir, FILE_NAME);
    if (!existsSync(file)) continue;
    try {
      return JSON.parse(readFileSync(file, 'utf8'));
    } catch {
      // corrupt file — ignore
    }
  }
  return null;
}

function isValidPayload(key, value) {
  if (key === 'clientCount') return value && typeof value === 'object' && 'client_count' in value;
  return Array.isArray(value);
}

async function fetchJson(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      headers: { Accept: 'application/json', 'User-Agent': 'radeski-snapshot/1.0' },
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const { outDirs, api } = parseArgs(process.argv.slice(2));
  const previous = readPrevious(outDirs);
  const data = {};
  const failed = [];

  for (const [key, endpoint] of Object.entries(ENDPOINTS)) {
    try {
      const value = await fetchJson(`${api}${endpoint}`);
      if (!isValidPayload(key, value)) throw new Error('unexpected payload shape');
      data[key] = key === 'articles' ? slimArticles(value) : value;
    } catch (error) {
      failed.push(`${key} (${error instanceof Error ? error.message : error})`);
      if (previous?.data?.[key] !== undefined) data[key] = previous.data[key];
    }
    await sleep(REQUEST_DELAY_MS);
  }

  const fetchedCount = Object.keys(ENDPOINTS).length - failed.length;
  if (fetchedCount === 0) {
    console.warn(`[snapshot] API unreachable (${api}) — keeping existing snapshot.`);
    return;
  }

  const snapshot = { generatedAt: new Date().toISOString(), data };
  const body = JSON.stringify(snapshot);
  for (const dir of outDirs) {
    mkdirSync(dir, { recursive: true });
    const target = path.join(dir, FILE_NAME);
    const tmp = `${target}.${process.pid}.tmp`;
    writeFileSync(tmp, body);
    renameSync(tmp, target); // atomic swap — readers never see a half-written file
  }

  const kb = Math.round(Buffer.byteLength(body) / 1024);
  console.log(`[snapshot] ${fetchedCount}/${Object.keys(ENDPOINTS).length} endpoints, ${kb} KB -> ${outDirs.join(', ')}`);
  if (failed.length) console.warn(`[snapshot] kept previous values for: ${failed.join(', ')}`);
}

main().catch((error) => {
  // Never break a build or cron run because of the snapshot.
  console.warn('[snapshot] failed:', error);
});
