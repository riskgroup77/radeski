import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const { translatePriceRuToUz } = await import('../src/utils/translatePriceRuToUz.ts');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'src/data/priceCatalog.json'), 'utf8'));

const ids = ['dnevnoy-statsionar', 'inektsionnaya-kosmetologiya', 'teosyal'];

for (const cat of catalog.categories.filter((c) => ids.includes(c.id))) {
  console.log('\n===', cat.nameRu, `[${cat.id}]`, '===');
  for (const item of cat.items) {
    const uz = translatePriceRuToUz(item.nameRu);
    const bad = /\b(dlya|protiv|vracha|udalenie|lechenie|kozhi|operatsiya|issledovanie|punktov|metotriksat|kapelnitsa)\b/i.test(uz)
      || /^[a-z]/.test(uz);
    console.log(bad ? '!!' : 'OK', 'RU:', item.nameRu);
    console.log('   UZ:', uz);
    console.log('---');
  }
}
