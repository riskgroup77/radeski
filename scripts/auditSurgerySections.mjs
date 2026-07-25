import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const { translatePriceRuToUz } = await import('../src/utils/translatePriceRuToUz.ts');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'src/data/priceCatalog.json'), 'utf8'));

const ids = [
  'hirurgicheskaya-dermatologiya',
  'hirurgicheskaya-dematologiya',
  'lazernoe-udalenie-dobrokachestvennyh-novoobrazovaniy-na-deka-smarxide-punto-so2-lazere',
  'kriohirurgiya',
];

for (const cat of catalog.categories) {
  if (!ids.includes(cat.id) && !cat.nameRu.match(/Хирургическая|DEKA|Криохирургия|SmartXide/i)) continue;
  console.log('\n===', cat.nameRu, `[${cat.id}]`, '===');
  for (const item of cat.items) {
    const uz = translatePriceRuToUz(item.nameRu);
    const bad = /\b(dlya|protiv|gacha \d|\(dan \d|vracha|obrazovan|udalenie|lechenie|kozhi|operatsiya|issledovanie|xirurgik olib|radioto|kriodestrukciya qilish)\b/i.test(uz)
      || /^Olib|^Davolash|^Xirurgik olib/i.test(uz);
    console.log(bad ? '!!' : 'OK', 'RU:', item.nameRu);
    console.log('   UZ:', uz);
    console.log('---');
  }
}
