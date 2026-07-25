import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const { translatePriceRuToUz } = await import('../src/utils/translatePriceRuToUz.ts');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'src/data/priceCatalog.json'), 'utf8'));

const ids = ['vichi-dercos', 'vichi-uhodovaya-kosmetika', 'laboratoriya'];

const badPatterns = [
  /[а-яА-ЯёЁ]/,
  /\b(syvorotka|keratoregulyatsiyalovchi|dandruff|scalp|protiv|dlya|volos|golovy|chuvstvitelnoy|zhirnyx|suxix|normalnyx|perxoti|pehoti|enerdzhi|psolyushn|regulir|uspokaivayushchiy|toniziruyushchiy|aminotransferaza|aspartataminotrasferaza|biliрубин|issledovanie|analiz|mazok|soskob|koagulogramma|koprologiya|glyukoza|kreatinin|mochevina|ferritin|testosteron|prolaktin|kortizol|insulin|gemoglobin|holesterin|antitel|antitela|gepatit|sifilis|vich|brutsellez|demodekoz|enterobioz|glist|lyamblii|trihomoniaz|sperma|tsitolog|bak\s|obshchiy|razvernutyy|leykoformul|tromb|fibrinogen|protrombin|gemogлобин|bilirubin|transaminaza|timolovaya|fruktозамин|apolipoprotein|zhelezo|kalciy|kaliy|magniy|kholестерин)\b/i,
  /\b([a-z]{15,})\b/i,
];

function scoreBad(uz) {
  for (const re of badPatterns) {
    if (re.test(uz)) return true;
  }
  return false;
}

let totalIssues = 0;
const issueSamples = [];

for (const cat of catalog.categories.filter((c) => ids.includes(c.id))) {
  console.log('\n===', cat.nameRu, `[${cat.id}]`, `(${cat.items.length} ta) ===`);
  for (const item of cat.items) {
    const uz = translatePriceRuToUz(item.nameRu);
    const bad = scoreBad(uz);
    if (bad) {
      totalIssues++;
      if (issueSamples.length < 40) issueSamples.push({ ru: item.nameRu, uz });
    }
    if (cat.id !== 'laboratoriya') {
      console.log('RU:', item.nameRu);
      console.log('UZ:', uz + (bad ? ' ⚠️' : ''));
      console.log('---');
    }
  }
}

console.log('\n=== Laboratoriya — muammoli namunalar (birinchi 50) ===');
for (const s of issueSamples.filter((x) => !ids.slice(0,2).some(() => false))) {
  // re-filter lab only from samples collected from lab
}
const labCat = catalog.categories.find((c) => c.id === 'laboratoriya');
const labIssues = [];
for (const item of labCat.items) {
  const uz = translatePriceRuToUz(item.nameRu);
  if (scoreBad(uz)) labIssues.push({ ru: item.nameRu, uz });
}
console.log('Laboratoriya jami muammo:', labIssues.length, '/', labCat.items.length);
for (const s of labIssues.slice(0, 55)) {
  console.log('RU:', s.ru);
  console.log('UZ:', s.uz);
  console.log('---');
}
