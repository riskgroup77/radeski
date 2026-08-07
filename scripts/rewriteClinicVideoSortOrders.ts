/**
 * CLINIC_VIDEOS ichida sortOrder ni eng yangi → 1 qilib qayta yozadi.
 * Usage: npx tsx scripts/rewriteClinicVideoSortOrders.ts
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const filePath = path.join(process.cwd(), 'src/data/sitePagesContent.ts');
let text = readFileSync(filePath, 'utf8');
const start = text.indexOf('export const CLINIC_VIDEOS');
const end = text.indexOf('export const CLINIC_BRANCHES');
if (start < 0 || end < 0) throw new Error('CLINIC_VIDEOS / CLINIC_BRANCHES markers not found');

const block = text.slice(start, end);
const nums: number[] = [];
for (const m of block.matchAll(/id: 'clinic-video-(\d+)'/g)) {
  nums.push(Number(m[1]));
}
const unique = [...new Set(nums)].sort((a, b) => b - a);
const orderMap = new Map(unique.map((n, i) => [n, i + 1]));

const newBlock = block.replace(
  /id: 'clinic-video-(\d+)'([\s\S]*?)sortOrder: \d+/g,
  (full, id, mid) => {
    const ord = orderMap.get(Number(id));
    if (!ord) return full;
    return `id: 'clinic-video-${id}'${mid}sortOrder: ${ord}`;
  },
);

writeFileSync(filePath, text.slice(0, start) + newBlock + text.slice(end));
console.log(
  `Updated ${unique.length} videos. Newest clinic-video-${unique[0]} → sortOrder 1; oldest clinic-video-${unique[unique.length - 1]} → ${orderMap.get(unique[unique.length - 1])}`,
);
