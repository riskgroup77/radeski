import fs from 'fs';
import { mapPriceFromApi } from '../src/api/mappers.ts';
import { enrichPrices } from '../src/utils/enrichPrices.ts';
import { resolvePriceName } from '../src/utils/priceDisplay.ts';

const res = await fetch('https://api.radeski.uz/api/prices');
const api = await res.json();
const enriched = enrichPrices(api.map(mapPriceFromApi));
const cats = [...new Set(enriched.map((p) => p.category))];

console.log('API:', api.length);
console.log('Enriched (saytda ko\'rinadi):', enriched.length);
console.log('Bo\'limlar:', cats.length);

const samples = [
  'Первичный осмотр врача дерматоонколога + дерматоскопия',
  'Дерматоскопия тела + база данных',
  'Vichy Mineral 89 гель - сыворотка 50мл',
  'Глюкоза',
  'Соскоб на грибы',
];
for (const ru of samples) {
  const item = enriched.find((p) => p.name.ru === ru || (p.name.ru || '').includes(ru.slice(0, 15)));
  if (item) {
    console.log('\nRU:', item.name.ru);
    console.log('UZ:', resolvePriceName(item, 'uz'));
  } else {
    console.log('\nMISSING:', ru);
  }
}
