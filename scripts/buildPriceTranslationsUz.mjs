/**
 * Barcha preyskurant nomlarini o'zbekchaga tarjima qilib priceTranslationsUz.json ga yozadi.
 * Kirill qolgan yoki yomon sifatli tarjimalar konsolga chiqariladi.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const { translatePriceRuToUz } = await import('../src/utils/translatePriceRuToUz.ts');

const catalog = JSON.parse(fs.readFileSync(path.join(root, 'src/data/priceCatalog.json'), 'utf8'));

const translations = {};
const cyrillicLeft = [];
const suspicious = [];

function normalizeKey(text) {
  return text.toLowerCase().replace(/ё/g, 'е').replace(/\s+/g, ' ').trim();
}

function hasSuspiciousLatin(uz) {
  return /\b(vracha|obrazovaniya|kozhi|udalenie|lechenie|operatsiya|issledovanie|kachestvennyi)\b/i.test(uz);
}

for (const cat of catalog.categories) {
  for (const item of cat.items) {
    const key = normalizeKey(item.nameRu);
    const uz = translatePriceRuToUz(item.nameRu);
    if (!/[а-яА-ЯёЁ]/.test(uz)) {
      translations[key] = uz;
    } else {
      cyrillicLeft.push({ ru: item.nameRu, uz, cat: cat.nameRu });
    }
    if (hasSuspiciousLatin(uz)) {
      suspicious.push({ ru: item.nameRu, uz, cat: cat.nameRu });
    }
  }
}

const outPath = path.join(root, 'src/data/priceTranslationsUz.json');
fs.writeFileSync(outPath, JSON.stringify(translations, null, 2) + '\n', 'utf8');

console.log('Total:', Object.keys(translations).length);
console.log('Cyrillic remaining:', cyrillicLeft.length);
console.log('Suspicious translit:', suspicious.length);

if (cyrillicLeft.length) {
  console.log('\n--- Cyrillic samples (first 15) ---');
  for (const s of cyrillicLeft.slice(0, 15)) {
    console.log(`[${s.cat}] ${s.ru} => ${s.uz}`);
  }
}

if (suspicious.length) {
  console.log('\n--- Suspicious samples (first 15) ---');
  for (const s of suspicious.slice(0, 15)) {
    console.log(`[${s.cat}] ${s.ru} => ${s.uz}`);
  }
}

console.log(`\nWrote ${outPath}`);
