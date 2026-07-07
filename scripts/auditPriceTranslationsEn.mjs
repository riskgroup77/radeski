import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const { localizePriceName } = await import('../src/utils/localizePriceName.ts');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'src/data/priceCatalog.json'), 'utf8'));

let cyrillic = 0;
let unchanged = 0;
const samples = [];

for (const cat of catalog.categories) {
  for (const item of cat.items) {
    const ru = item.nameRu;
    const en = localizePriceName(ru, 'en');
    if (/[а-яА-ЯёЁ]/.test(en)) cyrillic++;
    if (en === ru || /^[А-ЯЁ]/.test(en)) unchanged++;
    if (samples.length < 25) samples.push({ cat: cat.nameRu, ru, en });
  }
}

console.log('Total:', catalog.categories.reduce((n, c) => n + c.items.length, 0));
console.log('Cyrillic in EN:', cyrillic);
console.log('Likely untranslated:', unchanged);
for (const s of samples) {
  console.log(`[${s.cat}]`);
  console.log('RU:', s.ru);
  console.log('EN:', s.en);
  console.log('---');
}
