import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const { translatePriceRuToUz } = await import('../src/utils/translatePriceRuToUz.ts');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'src/data/priceCatalog.json'), 'utf8'));

const ids = [
  'rejuran',
  'lazernaya-ablyatsionnaya-shlifovka-kozhi-glubokaya',
  'lazernaya-ablyatsionnaya-shlifovka-kozhi-poverhnostnaya',
];

for (const cat of catalog.categories.filter((c) => ids.includes(c.id))) {
  console.log('\n===', cat.nameRu, `[${cat.id}]`, '===');
  for (const item of cat.items) {
    const uz = translatePriceRuToUz(item.nameRu);
    console.log('RU:', item.nameRu);
    console.log('UZ:', uz);
    console.log('---');
  }
}
