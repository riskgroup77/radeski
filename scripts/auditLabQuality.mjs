import fs from 'fs';
import { translatePriceRuToUz } from '../src/utils/translatePriceRuToUz.ts';

const catalog = JSON.parse(fs.readFileSync('src/data/priceCatalog.json', 'utf8'));
const lab = catalog.categories.find((c) => c.id === 'laboratoriya');

const ugly =
  /\b(bilan reaktiv|obshiy|obshaya|svobodniy|kachestvo|kolichestvo|revmatoidniy|tireotropniy|skorost osedaniya|dlitelnost|protrombinovoe|koalinovoe|trombinovoe|jelchnie|pryamoy|timolovaya|triglitseridi|jeleza|jelezo|visokoy plotnosti|nizkoy plotnosti|mochevaya|natriy|xloridi|folievaya|gomotsistein|folikulostimuliruyushiy|lyuteiniziruyushiy|degidroepiandrosteron|somatotropniy|adrenokortikotropniy|rakoviy|uglevodniy|neyron|ploskokletochnoy|mikoplazma|ureaplazma|gonokokk|trixomonada|gardnerella|allergopaneli|antinuklearnie|interleykin|lyambliyam|askaridam|toksoplazme|virusu|krasnuxi|xlamidiyam|gardnerelle|trixomonade|kandide|brutsellyoz|tuberkulyoz|skringenetika|gipertonicheskoy|azoospermii|mukovistsidoza|genetika|opredelenie|neinvazivnoe|videlenie|gastroinestinalnix|progastrin|medulyarniy|papilomavirus|femoflor|androflor|mocha bo|po nechiporenko|po zimnitskomu|chesotochniy|leishmanioz|proba shuvarskogo|dlitelnost|koalinovoe|mno\b|pti\b|rw -|glyukozo|tolerantniy|fruktozamin|shelochnaya|kislaya|laktodegidrogenaza|xolinesteraza|kreatininkinaza|tsistatin|glyukomatdekarboksilaza|elastaza|kalprotektin|proba reberga|kompleks elektrolitov|folievaya|revmatoidniy|tsiklicheskomu|mioglobin|prokaltsitonin|osteokaltsin|kaltsitonin|mozgovoy|ingibin|aldosteron|adrenalin|paratgormon|afp|estriol|xorionich|papp|rakoviy|cyfra|ne\s*-\s*4|alfa\s*-\s*fetoprotein|indiks roma|antigen ploskokletochnoy|potentsialnogo|insulinopodobniy|adrenokortikotropniy|globulin|ingibin|kortizol \(utro\)|kortizol \(vecher\)|somatotropniy|faktor rosta|adrenokortikotropniy|aldosteron|paratgormon|xgch|tochnoe razvedenie|svobod\.|rakoviy embrionalniy|uglevodniy antigen|jeleza \+|jkt\)|her\s*-\s*2|progastrin|visokochuvstvitelnix|medulyarniy|cheloveka|vpch|femoflor|androflor|allergopaneli|antinuklearnie|fosfolipidam|mitoxondriyam|mieloperoksidazega|modifitsirovannomu|tseliakiya|histone|autoimmunnaya|antineytrofilnie|interleykin|komponent komplementa|lyambliyam|askaridam|exinokokku|gelminti|toksoplazme|virusu|krasnuxi|xlamidiyam|mikoplazme|ureaplazme|gardnerelle|trixomonade|kandide|epshteyn|koklyush|kor ig|tuberkulyoz|salmalyonellyoz|skringenetika|onkoGenetika|gipertonicheskoy|azoospermii|deletsii|mukovistsidoza|mutatsii|genetika|opredelenie|neinvazivnoe|immunogenetika|videlenie|kardio|takrolimus|torch|gistologik isledovanie|gemoglobin konsentratsiyasi|skorost osedaniya|bilan uchastka|bilan 3x|soka prostati\.|kishechnaya gruppa|toksoplazme|virusu gerpesa|virusu krasnuxi|mikoplazme|ureaplazme|helicobacter pylori summarnie|virus epshteyn|brutsellyoz igm|kor igm|koklyush ig|oits \(vich\)|sars-cov|anti-–|tuberkulyoz|retseptoram|panel 27|skringenetika|onkoGenetika|deletsii|mukovistsidoza|genetika sindroma|opredelenie polimorfizma|otalik|kariotip|neinvazivnoe|immunogenetika|videlenie dnk|nipt|kardio genetika|takrolimus|torch|gistologik tekshiruv soskoba|renin\b|mochevina\b|kreatinin\b|albumin\b|ferritin\b|insulin\b|testosteron\b|prolaktin\b|kortizol\b|magniy\b|kaliy\b|kaltsiy\b|mochevina\b)\b/i;

const bad = [];
for (const item of lab.items) {
  const uz = translatePriceRuToUz(item.nameRu);
  if (ugly.test(uz) || /[а-яА-ЯёЁ]/.test(uz)) {
    bad.push({ ru: item.nameRu, uz });
  }
}

fs.writeFileSync('scripts/lab-bad-audit.json', JSON.stringify(bad, null, 2), 'utf8');
console.log('Bad:', bad.length, '/', lab.items.length);
for (const b of bad.slice(0, 20)) {
  console.log('RU:', b.ru);
  console.log('UZ:', b.uz);
  console.log('---');
}
