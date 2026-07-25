import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const { translatePriceRuToUz } = await import('../src/utils/translatePriceRuToUz.ts');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'src/data/priceCatalog.json'), 'utf8'));

const ids = [
  'derma-v-sosudistyy-lazer-lechenie-sosudistyh-zvezdochek-kuperoza-i-rozatsii',
  'hooywood-spectra-lechenie-pigmentatsii-post-akne',
  'allergo-proba-10-punktov',
];

for (const cat of catalog.categories.filter((c) => ids.includes(c.id))) {
  console.log('\n===', cat.nameRu, '===');
  for (const item of cat.items) {
    console.log('RU:', item.nameRu);
    console.log('UZ:', translatePriceRuToUz(item.nameRu));
    console.log('---');
  }
}
