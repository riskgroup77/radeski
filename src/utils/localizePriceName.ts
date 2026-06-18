import type { Locale } from '../types';

const TYPO_FIXES: [string, string][] = [
  ['гемагингиом', 'гемангиом'],
  ['новооброзование', 'новообразование'],
  ['осморт', 'осмотр'],
  ['ботулакс', 'ботулотоксин'],
  ['Hooywood', 'Hollywood'],
  ['1 серния', '1 серия'],
  ['давлин', 'Davlin'],
];

const PHRASES_UZ: [string, string][] = [
  ['Микрографическое хирургическое удаление злокачественных новообразований кожи по методу "Mohs"', 'Mohs usuli bo\'yicha xavfli teri o\'smalarini mikrografik xirurgik olib tashlash'],
  ['Первичная консультация и осмотр', 'Birinchi konsultatsiya va ko\'rik'],
  ['Повторная консультация и осмотр', 'Takroriy konsultatsiya va ko\'rik'],
  ['Первичный осмотр врача', 'Shifokorning birinchi ko\'rigi'],
  ['Повторный осмотр врача', 'Shifokorning takroriy ko\'rigi'],
  ['Повторный осмотр', 'Takroriy ko\'rik'],
  ['Первичный осмотр', 'Birinchi ko\'rik'],
  ['Лазерное удаление', 'Lazer bilan olib tashlash'],
  ['Лазерная эпиляция', 'Lazer epilyatsiyasi'],
  ['Лазерное лечение', 'Lazer davolashi'],
  ['Лазерная абляционная шлифовка кожи', 'Terini lazer ablyatsion shlifovkasi'],
  ['Фотоомоложение кожи', 'Terini foto-yoshartirish'],
  ['Фотоомоложение', 'Foto-yoshartirish'],
  ['Фототерапия', 'Fototerapiya'],
  ['Биоревитализация', 'Biorevitalizatsiya'],
  ['Мезотерапия', 'Mezoterapiya'],
  ['Плазмотерапия', 'Plazmoterapiya'],
  ['Контурная пластика губ', 'Lab kontur plastikasi'],
  ['Контурная пластика', 'Kontur plastikasi'],
  ['Инъекции Ботулотоксина', 'Botulotoksin inyeksiyalari'],
  ['Инъекции', 'Inyeksiyalar'],
  ['Удаление родинок', 'Xolarni olib tashlash'],
  ['Удаление новообразований', 'O\'smalarni olib tashlash'],
  ['Удаление', 'Olib tashlash'],
  ['Лечение пигментации', 'Pigmentatsiyani davolash'],
  ['Лечение акне', 'Akneni davolash'],
  ['Лечение рубцов', 'Chandiqlarni davolash'],
  ['Лечение', 'Davolash'],
  ['Коррекция рубца', 'Chandiqni tuzatish'],
  ['Криодеструкция', 'Kriyodestruksiya'],
  ['Криохирургия', 'Krioxirurgiya'],
  ['Гистологическое исследование', 'Gistologik tekshiruv'],
  ['Панч биопсия', 'Panch biopsiyasi'],
  ['Биопсия', 'Biopsiya'],
  ['Чистка лица', 'Yuzni tozalash'],
  ['Механическая чистка лица', 'Mexanik yuz tozalash'],
  ['Ультразвуковая чистка лица', 'Ultratovushli yuz tozalash'],
  ['Пилинг', 'Piling'],
  ['Консультация', 'Konsultatsiya'],
  ['Осмотр', 'Ko\'rik'],
  ['на всём теле', 'butun tanada'],
  ['на нижних конечностях', 'pastki oyoq-qo\'llarda'],
  ['на лице', 'yuzda'],
  ['на крыльях носа', 'burun qanotlarida'],
  ['всё лицо', 'butun yuz'],
  ['всего лица', 'butun yuz'],
  ['1 ноготь', '1 ta tirnoq'],
  ['за 1 элемент', '1 ta element uchun'],
  ['за сеанс', '1 seans uchun'],
  ['от ', 'dan '],
  ['до ', 'gacha '],
  ['процедур', 'protsedura'],
  ['процедура', 'protsedura'],
  ['сеанс', 'seans'],
  ['лицо', 'yuz'],
  ['шея', 'bo\'yin'],
  ['декольте', 'dekolte'],
  ['руки', 'qo\'llar'],
  ['ноги', 'oyoqlar'],
  ['волосы', 'sochlar'],
  ['ногтей', 'tirnoqlar'],
  ['кожи', 'teri'],
  ['кожа', 'teri'],
];

const PHRASES_EN: [string, string][] = [
  ['Микрографическое хирургическое удаление злокачественных новообразований кожи по методу "Mohs"', 'Mohs micrographic surgery for malignant skin lesions'],
  ['Первичная консультация и осмотр', 'Primary consultation and examination'],
  ['Повторная консультация и осмотр', 'Follow-up consultation and examination'],
  ['Первичный осмотр врача', 'Primary physician examination'],
  ['Повторный осмотр врача', 'Follow-up physician examination'],
  ['Повторный осмотр', 'Follow-up visit'],
  ['Первичный осмотр', 'Primary examination'],
  ['Лазерное удаление', 'Laser removal'],
  ['Лазерная эпиляция', 'Laser hair removal'],
  ['Лазерное лечение', 'Laser treatment'],
  ['Лазерная абляционная шлифовка кожи', 'Laser ablative skin resurfacing'],
  ['Фотоомоложение кожи', 'Skin photorejuvenation'],
  ['Фотоомоложение', 'Photorejuvenation'],
  ['Фототерапия', 'Phototherapy'],
  ['Биоревитализация', 'Biorevitalization'],
  ['Мезотерапия', 'Mesotherapy'],
  ['Плазмотерапия', 'Plasma therapy (PRP)'],
  ['Контурная пластика губ', 'Lip contouring'],
  ['Контурная пластика', 'Contour plastic'],
  ['Инъекции Ботулотоксина', 'Botulinum toxin injections'],
  ['Инъекции', 'Injections'],
  ['Удаление родинок', 'Mole removal'],
  ['Удаление новообразований', 'Lesion removal'],
  ['Удаление', 'Removal'],
  ['Лечение пигментации', 'Pigmentation treatment'],
  ['Лечение акне', 'Acne treatment'],
  ['Лечение рубцов', 'Scar treatment'],
  ['Лечение', 'Treatment'],
  ['Коррекция рубца', 'Scar correction'],
  ['Криодеструкция', 'Cryodestruction'],
  ['Криохирургия', 'Cryosurgery'],
  ['Гистологическое исследование', 'Histology examination'],
  ['Панч биопсия', 'Punch biopsy'],
  ['Биопсия', 'Biopsy'],
  ['Чистка лица', 'Facial cleansing'],
  ['Механическая чистка лица', 'Manual facial cleansing'],
  ['Ультразвуковая чистка лица', 'Ultrasonic facial cleansing'],
  ['Пилинг', 'Peeling'],
  ['Консультация', 'Consultation'],
  ['Осмотр', 'Examination'],
  ['на всём теле', 'full body'],
  ['на нижних конечностях', 'lower limbs'],
  ['на лице', 'face'],
  ['на крыльях носа', 'nose wings'],
  ['всё лицо', 'full face'],
  ['всего лица', 'full face'],
  ['1 ноготь', '1 nail'],
  ['за 1 элемент', 'per lesion'],
  ['за сеанс', 'per session'],
  ['от ', 'from '],
  ['до ', 'up to '],
  ['процедур', 'sessions'],
  ['процедура', 'procedure'],
  ['сеанс', 'session'],
  ['лицо', 'face'],
  ['шея', 'neck'],
  ['декольте', 'décolleté'],
  ['руки', 'hands'],
  ['ноги', 'legs'],
  ['волосы', 'hair'],
  ['ногтей', 'nails'],
  ['кожи', 'skin'],
  ['кожа', 'skin'],
];

function applyTypos(text: string): string {
  let result = text;
  for (const [from, to] of TYPO_FIXES) {
    result = result.replace(new RegExp(from, 'gi'), to);
  }
  return result;
}

function applyPhrases(text: string, phrases: [string, string][]): string {
  let result = text;
  for (const [from, to] of phrases) {
    result = result.replace(new RegExp(from, 'gi'), to);
  }
  return result.replace(/\s+/g, ' ').trim();
}

export function localizePriceName(nameRu: string, locale: Locale): string {
  const normalized = applyTypos(nameRu.trim());
  if (locale === 'ru') return normalized;
  if (locale === 'uz') return applyPhrases(normalized, PHRASES_UZ);
  return applyPhrases(normalized, PHRASES_EN);
}
