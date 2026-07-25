import fs from 'fs';
import { translatePriceRuToUz } from '../src/utils/translatePriceRuToUz.ts';

const catalog = JSON.parse(fs.readFileSync('src/data/priceCatalog.json', 'utf8'));
const lab = catalog.categories.find((c) => c.id === 'laboratoriya');

const badPatterns =
  /\b(revmatoidniy|tireotropniy|svobodniy|obshiy|obshaya|kachestvo|kolichestvo|skorost osedaniya|dlitelnost|protrombinovoe|koalinovoe|trombinovoe|jelchnie|pryamoy|timolovaya|triglitseridi|jeleza|visokoy plotnosti|nizkoy plotnosti|mochevaya|folievaya|folikulostimuliruyushiy|lyuteiniziruyushiy|degidroepiandrosteron|somatotropniy|adrenokortikotropniy|rakoviy|uglevodniy|neyron|ploskokletochnoy|allergopaneli|antinuklearnie|interleykin|lyambliyam|askaridam|toksoplazme|virusu|krasnuxi|xlamidiyam|gardnerelle|trixomonade|kandide|brutsellyoz|tuberkulyoz|skringenetika|gipertonicheskoy|azoospermii|mukovistsidoza|genetika|opredelenie|neinvazivnoe|videlenie|gastroinestinalnix|progastrin|medulyarniy|papilomavirus|femoflor|androflor|mocha bo|po nechiporenko|bilan reaktiv|bilan — peptid|bilan3|bilan uchastka|uretradan surtma|qon bez|qon \+|mikoplazma kachestvo|gonokokk|trixomonada)\b/i;

const bad = [];
for (const item of lab.items) {
  const uz = translatePriceRuToUz(item.nameRu);
  if (badPatterns.test(uz) || /[а-яА-ЯёЁ]/.test(uz)) bad.push({ ru: item.nameRu, uz });
}

console.log('Real bad lab translations:', bad.length, '/', lab.items.length);
for (const b of bad.slice(0, 20)) {
  console.log('RU:', b.ru);
  console.log('UZ:', b.uz);
  console.log('---');
}
