import { translatePriceRuToUz } from '../src/utils/translatePriceRuToUz.ts';

const samples = [
  'С реактивный белок',
  'Ревматоидный фактор',
  'Тиреотропный гармон (TTG)',
  'Железа (Кровь)',
  'Мазок из уретры',
  'Скорость оседания эритроцитов (СОЭ)',
  'Протромбиновое время (PT)',
  'Бак исследование со слизистой оболочки из зева',
  'Аллергопанели (смешанная)',
  'Компонент комплемента С3 (С3-Complement Factor)',
  'С-пептид',
];

for (const s of samples) {
  console.log(s, '=>', translatePriceRuToUz(s));
}
