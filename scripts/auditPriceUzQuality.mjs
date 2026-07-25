import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const { translatePriceRuToUz } = await import('../src/utils/translatePriceRuToUz.ts');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'src/data/priceCatalog.json'), 'utf8'));

const bad = [];

for (const cat of catalog.categories) {
  for (const item of cat.items) {
    const uz = translatePriceRuToUz(item.nameRu);
    const ru = item.nameRu;
    const issues = [];
    if (/^Olib tashlash/i.test(uz)) issues.push('starts-olib-tashlash');
    if (/^Davolash/i.test(uz)) issues.push('starts-davolash');
    if (/^Lazer olib/i.test(uz)) issues.push('starts-lazer-olib');
    if (/^Lazer davolash/i.test(uz)) issues.push('starts-lazer-davolash');
    if (/^Ko'rik/i.test(uz) && /осмотр/i.test(ru)) issues.push('starts-korik');
    if (/^Konsultatsiya/i.test(uz) && /консультация/i.test(ru)) issues.push('starts-konsultatsiya');
    if (/ \(dan\)$/.test(uz)) issues.push('ends-dan-only');
    if (/shifokor shifokor/i.test(uz)) issues.push('dup');
    if (/bilan bilan|da da|uchun uchun/i.test(uz)) issues.push('dup-prep');
    if (/\bterida teri\b/i.test(uz)) issues.push('awkward');
    if (/^Xirurgik/i.test(uz) && !/^Xirurgik/i.test(ru)) issues.push('starts-xirurgik');
    if (issues.length) bad.push({ cat: cat.nameRu, ru, uz, issues });
  }
}

console.log('Bad count:', bad.length);
for (const x of bad.slice(0, 50)) {
  console.log(`[${x.issues.join(',')}] (${x.cat})`);
  console.log('RU:', x.ru);
  console.log('UZ:', x.uz);
  console.log('---');
}
