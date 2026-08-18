/**
 * Generate nginx map for article alias -> canonical art-* 301 redirects.
 * Usage: npx tsx scripts/generateArticleNginxRedirects.ts
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import {
  buildArticleRedirectPairs,
  buildNginxArticleRedirectMap,
} from '../src/seo/buildArticleRedirects';

const API_URL = process.env.VITE_API_URL?.trim() || 'https://api.radeski.uz';
const OUT = path.join(process.cwd(), 'nginx', 'radeski-article-redirects.map.conf');

async function fetchApiArticles(): Promise<Array<{ id: string; slug: string }>> {
  try {
    const res = await fetch(`${API_URL}/api/articles`);
    if (!res.ok) {
      console.warn(`API articles fetch failed: ${res.status}`);
      return [];
    }
    const data = (await res.json()) as Array<{ id: string; slug: string }>;
    console.log(`Fetched ${data.length} API articles from ${API_URL}`);
    return data;
  } catch (error) {
    console.warn('API articles fetch error:', error);
    return [];
  }
}

async function main() {
  const apiArticles = await fetchApiArticles();
  const pairs = buildArticleRedirectPairs(apiArticles);
  const mapConf = buildNginxArticleRedirectMap(pairs);
  const outDir = path.dirname(OUT);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(OUT, mapConf, 'utf8');
  console.log(`Wrote ${pairs.length} redirects -> ${OUT}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
