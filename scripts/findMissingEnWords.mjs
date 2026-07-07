import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const catalog = JSON.parse(fs.readFileSync(path.join(root, 'src/data/priceCatalog.json'), 'utf8'));
const mod = await import('../src/utils/translatePriceRuToEn.ts');

const WORDS_EN = mod.WORDS_EN ?? {};
const words = new Map();

function tokenizeRussian(text) {
  const tokens = [];
  let current = '';
  for (const char of text) {
    if (/[а-яА-ЯёЁ]/.test(char)) current += char;
    else {
      if (current) tokens.push(current.toLowerCase());
      current = '';
    }
  }
  if (current) tokens.push(current.toLowerCase());
  return tokens;
}

for (const cat of catalog.categories) {
  for (const item of cat.items) {
    for (const w of tokenizeRussian(item.nameRu)) {
      if (!WORDS_EN[w]) words.set(w, (words.get(w) || 0) + 1);
    }
  }
}

const sorted = [...words.entries()].sort((a, b) => b[1] - a[1]);
console.log('Missing words:', sorted.length);
for (const [w, n] of sorted.slice(0, 120)) {
  console.log(`${n}\t${w}`);
}
