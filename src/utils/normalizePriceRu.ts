/**
 * Ruscha preyskurant nomlarini professional ko'rinishga keltirish.
 */

const TYPO_FIXES: [string, string][] = [
  ['гемагингиом', 'гемангиом'],
  ['новооброзование', 'новообразований'],
  ['новооброзований', 'новообразований'],
  ['новооброзовании', 'новообразовании'],
  ['осморт', 'осмотр'],
  ['ботулакс', 'ботулотоксин'],
  ['Hooywood', 'Hollywood'],
  ['1 серния', '1 серия'],
  ['давлин', 'Davlin'],
  ['Лечения пигментации', 'Лечение пигментации'],
  ['Лечения ', 'Лечение '],
  ['Лечении ', 'Лечение '],
  ['дематолог', 'дерматолог'],
  ['Инъкция', 'Инъекция'],
  ['Авидность', 'Антитела'],
  ['верних', 'верхних'],
  ['ангиом,сосудистых', 'ангиом, сосудистых'],
  ['1до ', '1 до '],
  ['1до', '1 до'],
  ['пост акне', 'пост-акне'],
  ['Панч биопсия', 'Панч-биопсия'],
  ['Аллерго проба', 'Аллергопроба'],
  ['удаление пигментации все лицо', 'Удаление пигментации всего лица'],
  ['удаление пигментации', 'Удаление пигментации'],
  ['НА DEKA SMARXIDE PUNTO СО2 ЛАЗЕРЕ', 'на аппарате DEKA SmartXide Punto CO₂'],
  ['ДНЕВНОЙ СТАЦИОНАР', 'Дневной стационар'],
  ['Нео люкс', 'Neo Lux'],
];

const EXACT_RU: Record<string, string> = {
  'удаление пигментации все лицо': 'Удаление пигментации всего лица',
  'Удаление новообразование от': 'Удаление новообразований (от)',
  'Удаление родинок от': 'Удаление родинок (от)',
  'Лазерное удаление вен на нижних конечностях от': 'Лазерное удаление вен на нижних конечностях (от)',
  'Лазерное лечение гемангиом, ангиом, сосудистых новообразований от':
    'Лазерное лечение гемангиом, ангиом, сосудистых новообразований (от)',
  'Лазерное удаление сосудистых звездочек на лице от': 'Лазерное удаление сосудистых звёздочек на лице (от)',
  'Лазерное удаление телеангиэтазий на всём теле от': 'Лазерное удаление телеангиэтазий на всём теле (от)',
  'Лазерное удаление телеангиэтазий на крыльях носа от': 'Лазерное удаление телеангиэтазий на крыльях носа (от)',
  'Лечение онихомикоза ногтей от': 'Лечение онихомикоза ногтей (от)',
  'Лазерное лечение гемангиом от': 'Лазерное лечение гемангиом (от)',
  'Трансплантация волос от': 'Трансплантация волос (от)',
  'Удаление образований в области верхних и нижних век (от 1 до 3мм)':
    'Удаление образований в области верхних и нижних век (от 1 до 3 мм)',
  'Удаление образований в интимной зоне (до 5мм)': 'Удаление образований в интимной зоне (до 5 мм)',
  'Удаление образований в интимной зоне (от 5мм)': 'Удаление образований в интимной зоне (от 5 мм)',
  'Инъекция в/м без расходного материала': 'Инъекция в/м без расходного материала',
  'капельница без расходных материалов': 'Капельница без расходных материалов',
  'верхняя губа': 'Верхняя губа',
  'задняя часть шеи': 'Задняя часть шеи',
  'межбровье': 'Межбровье',
};

const CATEGORY_RU: Record<string, string> = {
  'Хирургическая дематология': 'Хирургическая дерматология',
  'Hooywood Spectra (лечение пигментации, пост акне)':
    'Hollywood Spectra (лечение пигментации, пост-акне)',
  'ДНЕВНОЙ СТАЦИОНАР': 'Дневной стационар',
  'Лазерное удаление доброкачественных новообразований НА DEKA SMARXIDE PUNTO СО2 ЛАЗЕРЕ':
    'Лазерное удаление доброкачественных новообразований на аппарате DEKA SmartXide Punto CO₂',
  'Derma v сосудистый лазер (лечение сосудистых звездочек, купероза и розации)':
    'Derma V — сосудистый лазер (лечение сосудистых звёздочек, купероза и розации)',
  'Healinte (фотодинамическое омоложение)': 'Healite II (фотодинамическое омоложение)',
  'Аллерго проба 10 пунктов': 'Аллергопроба (10 пунктов)',
  'Vichi dercos': 'Vichy Dercos',
  'Vichi уходовая косметика': 'Vichy — уходовая косметика',
  'ЛРП Антигелиос(СПФ)': 'La Roche-Posay Anthelios (SPF)',
  'ЛРП цикопласт, липикар': 'La Roche-Posay Cicaplast, Lipikar',
};

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function applyTypos(text: string): string {
  let result = text;
  for (const [from, to] of TYPO_FIXES) {
    result = result.replace(new RegExp(escapeRegExp(from), 'gi'), to);
  }
  return result;
}

function normalizeKey(text: string): string {
  return text.toLowerCase().replace(/ё/g, 'е').replace(/\s+/g, ' ').trim();
}

function capitalizeFirst(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return trimmed;
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

function normalizeSpacing(text: string): string {
  return text
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.;:!?)])/g, '$1')
    .replace(/\(\s+/g, '(')
    .replace(/\s+\)/g, ')')
    .replace(/(\d)\s*мм/g, '$1 мм')
    .replace(/(\d)\s*см\s*2/g, '$1 см²')
    .replace(/,\s*/g, ', ')
    .trim();
}

export function normalizePriceRu(nameRu: string): string {
  let text = nameRu.trim();
  if (!text) return '';

  const exactKey = normalizeKey(text);
  for (const [key, value] of Object.entries(EXACT_RU)) {
    if (normalizeKey(key) === exactKey) return value;
  }

  text = applyTypos(text);
  text = normalizeSpacing(text);

  if (/\sот$/i.test(text) && !/\(от\)$/i.test(text)) {
    text = text.replace(/\sот$/i, ' (от)');
  }

  if (/^[а-яё]/.test(text)) {
    text = capitalizeFirst(text);
  }

  return text;
}

export function normalizePriceCategoryRu(nameRu: string): string {
  const trimmed = nameRu.trim();
  if (!trimmed) return '';

  if (CATEGORY_RU[trimmed]) return CATEGORY_RU[trimmed];

  for (const [key, value] of Object.entries(CATEGORY_RU)) {
    if (normalizeKey(key) === normalizeKey(trimmed)) return value;
  }

  return normalizePriceRu(trimmed);
}
