import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const { translatePriceRuToUz } = await import('../src/utils/translatePriceRuToUz.ts');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'src/data/priceCatalog.json'), 'utf8'));

const ids = [
  'esteticheskaya-kosmetologiya',
  'kosmeticheskie-sredstva',
  'lrp-antigelios-spf',
  'lrp-tsikoplast-lipikar',
  'cerave',
];

const suspicious = /\b(syvorotka|ochishchayushchiy|uvlazhnyayushchiy|krem-gel|problemnoy|mikropiling|antigelios|tsikoplast|lipikar|ochishchayushchiy|dlya|protiv|nesovershenstv|chuvstvitelnoy|mehanicheskaya|ultrazvukovaya)\b/i;
const badLatin = /\b(Innoaestetic|Innoaesthetics|syvorotka|ochishch|uvlazhn|problemn|antigelios|tsikoplast|lipikar|mikropiling|mehanich|ultrazvuk|chuvstviteln|nesovershenstv|protiv|dlya|krem-gel|gel-krem)\b/i;

let issues = 0;

for (const cat of catalog.categories.filter((c) => ids.includes(c.id))) {
  console.log('\n===', cat.nameRu, `[${cat.id}]`, '===');
  for (const item of cat.items) {
    const uz = translatePriceRuToUz(item.nameRu);
    const flag = badLatin.test(uz) || /[а-яА-ЯёЁ]/.test(uz) ? ' ⚠️' : '';
    if (flag) issues++;
    console.log('RU:', item.nameRu);
    console.log('UZ:', uz + flag);
    console.log('---');
  }
}

console.log('\nTotal issues:', issues);
