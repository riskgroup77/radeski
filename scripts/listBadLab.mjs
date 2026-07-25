import fs from 'fs';
import { translatePriceRuToUz } from '../src/utils/translatePriceRuToUz.ts';

const catalog = JSON.parse(fs.readFileSync('src/data/priceCatalog.json', 'utf8'));
const lab = catalog.categories.find((c) => c.id === 'laboratoriya');
const cyr = /[а-яА-ЯёЁ]/;
const ugly =
  /\b(da |cherez|posle|t\.ch\.|issled|soskob|glyukoza|gemoglobin|mazok|obshiy|gepatit|inostrantsam|aktivnoe|chastichnoe|podtverjdayushiy|volchanochniy|glikozirovanniy|glikolizirovanniy|natoshak|moche|kala|burun|drugie|prosteyshie|lyamblii|pechenipechenochno|rastvorimomu|antigenuga|tsitologicheskoe|atipicheskie|kletki|leptotrixoz|enterobioz|ostritsi|gribi|chesotki|demodekoz|isledovanie|alaninaminotransferaza|aspartataminotrasferaza|antistreptolizin|kontsentratsiya|sifilis|vich|spid|aktsiya|koagulogramma)\b/i;

const bad = [];
for (const item of lab.items) {
  const uz = translatePriceRuToUz(item.nameRu);
  if (cyr.test(uz) || ugly.test(uz)) bad.push({ ru: item.nameRu, uz });
}
console.log('Bad:', bad.length, '/', lab.items.length);
for (const b of bad) console.log('RU:', b.ru, '\nUZ:', b.uz, '\n---');
