/**
 * priceCatalog.json dagi nameRu va bo'lim nomlarini to'liq ruscha normalizatsiya qiladi.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const { normalizePriceRu, normalizePriceCategoryRu } = await import('../src/utils/normalizePriceRu.ts');

const catalogPath = path.join(root, 'src/data/priceCatalog.json');
const rawPath = path.join(root, 'scripts/price-list-raw.txt');
const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));

let itemChanges = 0;
let catChanges = 0;

for (const cat of catalog.categories) {
  const newCatName = normalizePriceCategoryRu(cat.nameRu);
  if (newCatName !== cat.nameRu) {
    catChanges++;
    cat.nameRu = newCatName;
  }
  for (const item of cat.items) {
    const fixed = normalizePriceRu(item.nameRu);
    if (fixed !== item.nameRu) {
      itemChanges++;
      item.nameRu = fixed;
    }
  }
}

fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2) + '\n', 'utf8');

const rawLines = [];
for (const cat of catalog.categories) {
  rawLines.push(cat.nameRu);
  for (const item of cat.items) {
    const price = Number.isInteger(item.priceValue)
      ? `${item.priceValue},00`
      : String(item.priceValue).replace('.', ',');
    rawLines.push(`${item.nameRu}\t${price}`);
  }
  rawLines.push('');
}
fs.writeFileSync(rawPath, rawLines.join('\n').trimEnd() + '\n', 'utf8');

console.log(`Category names fixed: ${catChanges}`);
console.log(`Item names fixed: ${itemChanges}`);
console.log(`Wrote ${catalogPath}`);
console.log(`Wrote ${rawPath}`);
