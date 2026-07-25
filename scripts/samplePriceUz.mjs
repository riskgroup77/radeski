import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const { translatePriceRuToUz } = await import('../src/utils/translatePriceRuToUz.ts');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'src/data/priceCatalog.json'), 'utf8'));

const cats = ['La Roche-Posay', 'Vichy', 'CeraVe', 'Лаборатория', 'Косметика'];
for (const cat of catalog.categories) {
  if (!cats.some((c) => cat.nameRu.includes(c))) continue;
  console.log('\n===', cat.nameRu, '===');
  for (const item of cat.items.slice(0, 8)) {
    console.log('RU:', item.nameRu);
    console.log('UZ:', translatePriceRuToUz(item.nameRu));
    console.log('---');
  }
}

const issues = [];
for (const cat of catalog.categories) {
  for (const item of cat.items) {
    const uz = translatePriceRuToUz(item.nameRu);
    if (/[а-яА-ЯёЁ]/.test(uz)) issues.push({ ru: item.nameRu, uz });
    if (/\b(dlya|protiv|problem|ochisheniya|volos|kozhi|golovy|pechen|Alьfa)\b/i.test(uz))
      issues.push({ ru: item.nameRu, uz, type: 'latin-ru' });
  }
}
console.log('\nCyrillic:', issues.filter((i) => !i.type).length);
console.log('Latin-RU fragments:', issues.filter((i) => i.type).length);
for (const x of issues.filter((i) => i.type).slice(0, 25)) {
  console.log('LAT', x.ru, '=>', x.uz);
}
