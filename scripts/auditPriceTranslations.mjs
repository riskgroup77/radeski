import { readFileSync } from 'fs';
import { createRequire } from 'module';

// Quick audit without full TS - read catalog and simulate via dynamic import
const catalog = JSON.parse(readFileSync('src/data/priceCatalog.json', 'utf8'));

const { localizePriceName } = await import('../src/utils/localizePriceName.ts');

let mixed = 0;
const samples = [];

for (const cat of catalog.categories) {
  for (const item of cat.items) {
    const uz = localizePriceName(item.nameRu, 'uz');
    if (/[а-яА-ЯёЁ]/.test(uz)) mixed++;
    if (samples.length < 30) {
      samples.push({ ru: item.nameRu, uz, cat: cat.nameRu });
    }
  }
}

const total = catalog.categories.reduce((n, c) => n + c.items.length, 0);
console.log('Total items:', total);
console.log('Mixed Cyrillic in UZ:', mixed);
console.log('\n--- First 20 samples ---\n');
for (const s of samples.slice(0, 20)) {
  console.log(`[${s.cat}]`);
  console.log('RU:', s.ru);
  console.log('UZ:', s.uz);
  console.log('---');
}
