/**
 * Barcha preyskurant nomlarini inglizchaga tarjima qilib priceTranslationsEn.json ga yozadi.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const { translatePriceRuToEn } = await import('../src/utils/translatePriceRuToEn.ts');

const catalog = JSON.parse(fs.readFileSync(path.join(root, 'src/data/priceCatalog.json'), 'utf8'));

const translations = {};
const cyrillicLeft = [];
const suspicious = [];

function normalizeKey(text) {
  return text.toLowerCase().replace(/ё/g, 'е').replace(/\s+/g, ' ').trim();
}

function hasSuspiciousLatin(en) {
  return /\b(vracha|obrazovaniya|kozhi|udalenie|lechenie|operatsiya|issledovanie|kachestvennyi|gemangiom|teleangiektazii)\b/i.test(
    en,
  );
}

for (const cat of catalog.categories) {
  for (const item of cat.items) {
    const key = normalizeKey(item.nameRu);
    const en = translatePriceRuToEn(item.nameRu, { skipCache: true });
    if (!/[а-яА-ЯёЁ]/.test(en)) {
      translations[key] = en;
    } else {
      cyrillicLeft.push({ ru: item.nameRu, en, cat: cat.nameRu });
    }
    if (hasSuspiciousLatin(en)) {
      suspicious.push({ ru: item.nameRu, en, cat: cat.nameRu });
    }
  }
}

const outPath = path.join(root, 'src/data/priceTranslationsEn.json');
fs.writeFileSync(outPath, JSON.stringify(translations, null, 2) + '\n', 'utf8');

console.log('Total:', Object.keys(translations).length);
console.log('Cyrillic remaining:', cyrillicLeft.length);
console.log('Suspicious translit:', suspicious.length);

if (cyrillicLeft.length) {
  console.log('\n--- Cyrillic samples (first 20) ---');
  for (const s of cyrillicLeft.slice(0, 20)) {
    console.log(`[${s.cat}] ${s.ru} => ${s.en}`);
  }
}

if (suspicious.length) {
  console.log('\n--- Suspicious samples (first 15) ---');
  for (const s of suspicious.slice(0, 15)) {
    console.log(`[${s.cat}] ${s.ru} => ${s.en}`);
  }
}

console.log(`\nWrote ${outPath}`);
