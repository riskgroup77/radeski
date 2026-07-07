import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const { localizePriceName } = await import('../src/utils/localizePriceName.ts');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'src/data/priceCatalog.json'), 'utf8'));

const TYPO_PATTERNS = [
  /осморт/i,
  /новооброз/i,
  /Hooywood/i,
  /dematolog/i,
  /Лечения /i,
  /верних/i,
  /нижних век/i,
  /Инъкция/i,
  /Авидность/i,
  /от $/,
  /удаление пигментации все лицо/i,
  /гемагингиом/i,
];

const issues = [];
const allNames = [];

for (const cat of catalog.categories) {
  for (const item of cat.items) {
    const raw = item.nameRu;
    const fixed = localizePriceName(raw, 'ru');
    allNames.push({ cat: cat.nameRu, raw, fixed, changed: raw !== fixed });

    for (const p of TYPO_PATTERNS) {
      if (p.test(raw)) issues.push({ type: 'typo', cat: cat.nameRu, raw, pattern: p.source });
    }
    if (raw !== raw.trim()) issues.push({ type: 'whitespace', raw });
    if (/^[а-яё]/i.test(raw) && /[a-z]{3,}/i.test(raw) && !/[A-Z]{2,}/.test(raw)) {
      // mixed case latin in cyrillic sentence (not brands)
    }
    if (raw === fixed && /осморт|новооброз|Hooywood|Лечения пигментации/i.test(raw)) {
      issues.push({ type: 'unfixed', raw, fixed });
    }
  }
}

const changed = allNames.filter((x) => x.changed);
console.log('Total items:', allNames.length);
console.log('Fixed by localizePriceName(ru):', changed.length);
console.log('\n--- Changes sample ---');
for (const x of changed.slice(0, 25)) {
  console.log(`RAW:  ${x.raw}`);
  console.log(`FIX:  ${x.fixed}`);
  console.log('---');
}
console.log('\nTypo pattern hits:', issues.length);
for (const x of issues.slice(0, 20)) {
  console.log(x);
}
