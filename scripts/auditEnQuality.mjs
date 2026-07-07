import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const { translatePriceRuToEn } = await import('../src/utils/translatePriceRuToEn.ts');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'src/data/priceCatalog.json'), 'utf8'));

const suspiciousRe =
  /(kh|ym|ovna|skiy|skaya|punkt|proba|metotri|krasnot|glubok|poverkh|kontakt|Obrabotka|pokhuden|frantsiya|Omolozhenie|vokrug|golova|Trikho|vrosshego|protiv|sukhoy|zhirnykh|perkhoti|nesovershenstv|uchet|lekarstven|loson|ochen|normalnoy|konditsioner|pekhoti|kislotami|obluchenie|vnutrivenno|apparat|baza dannykh|golovy|tserave|vichi)/i;

const bad = [];
for (const cat of catalog.categories) {
  for (const item of cat.items) {
    const en = translatePriceRuToEn(item.nameRu);
    if (suspiciousRe.test(en)) bad.push({ ru: item.nameRu, en, cat: cat.nameRu });
  }
}

console.log('Suspicious:', bad.length);
for (const s of bad.slice(0, 80)) {
  console.log(`[${s.cat}]`);
  console.log('RU:', s.ru);
  console.log('EN:', s.en);
  console.log('---');
}
