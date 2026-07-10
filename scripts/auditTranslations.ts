/**
 * Sayt tarjimalarini (DICTIONARY + barcha kontent kataloglari) chuqur audit qiladi.
 * Muammolar:
 *  - uz/en maydonlarida qolib ketgan kirill harflar
 *  - shubhali lotin transliteratsiyasi (ruscha ildiz lotinda)
 *  - uz == ru yoki en == ru (tarjima qilinmagan)
 *  - triplet parity (uz/ru/en dan biri bo'sh)
 */
import { DICTIONARY } from '../src/data';
import { CATEGORY_CONDITIONS_CATALOG, SUB_CONDITIONS_CATALOG } from '../src/data/serviceConditionsCatalog';
import { CATEGORY_RICH_CATALOG, SUB_SERVICE_RICH_CATALOG } from '../src/data/serviceRichCatalog';
import { SERVICE_ABOUT_CATALOG } from '../src/data/serviceAboutCatalog';
import { CONDITION_WHY_RADESKI } from '../src/data/conditionWhyRadeskiCatalog';
import { PROMO_PAGE_CATALOG } from '../src/data/promoServicePagesCatalog';
import { CLINIC_EQUIPMENT_CATALOG } from '../src/data/clinicEquipmentCatalog';
import { ARTICLE_RICH_CATALOG } from '../src/data/articleRichCatalog';
import { LEGAL_DOCUMENTS } from '../src/data/legalContent';
import { TECHNOLOGIES_PAGE, EQUIPMENT_PARK_PAGE } from '../src/data/advantagePagesContent';
import {
  CUSTOMER_REVIEWS,
  CLINIC_PARTNERS,
  CLINIC_VIDEOS,
  CLINIC_BRANCHES,
  TREATMENT_RESULTS,
} from '../src/data/sitePagesContent';
import { HOME_PROMO_SLIDES } from '../src/data/homePromoCarousel';
import {
  CATEGORY_CONDITION_DEFAULTS,
  SUB_CONDITION_DEFAULTS,
  CONDITION_DETAIL_OVERRIDES,
} from '../src/data/serviceConditionDetailsCatalog';

const CYRILLIC = /[а-яА-ЯёЁ]/;
// Ruscha ildizlar lotinda qolib ketgan bo'lsa (uz/en da bo'lmasligi kerak)
const SUSPICIOUS_LATIN = new RegExp(
  '\\b(' +
    [
      'vracha', 'vrach', 'obrazovaniya', 'obrazovaniy', 'obrazovanie',
      'udalenie', 'udaleniya', 'lecheniya', 'lechenie', 'issledovanie',
      'kachestvennyi', 'osmotr', 'osmort', 'krasnoti', 'krasnoty',
      'kozhi', 'kozha', 'litsa', 'volos', 'nogtey', 'nogtei',
      'protsedura', 'protsedur', 'inektsiya', 'inieksiya', 'inektsii',
      'omolozhenie', 'omolozheniya', 'gemangiom', 'teleangiektazii',
      'sosudistyh', 'sosudistyy', 'shlifovka', 'pigmentatsii',
      'ublazhivanie', 'davolash akne', 'davolash kuperoz',
    ].join('|') +
    ')\\b',
  'i',
);

// EN maydonida o'zbekcha so'zlar qolib ketgan bo'lsa
const UZBEK_WORDS =
  /\b(va|uchun|bilan|davolash|yoki|ko'rik|shifokor|teri|kasallik|natija|xizmat|muolaja|hamda|hisoblanadi|bo'ladi|qilish|mavjud)\b/i;

interface Issue {
  scope: string;
  path: string;
  locale?: string;
  type: string;
  detail: string;
}
const issues: Issue[] = [];

function add(scope: string, path: string, type: string, detail: string, locale?: string) {
  issues.push({ scope, path, type, detail: String(detail).slice(0, 140), locale });
}

/** Locale konteksti bilan rekursiv yurish. */
function walk(node: unknown, scope: string, path: string, locale: string | null) {
  if (node == null) return;

  if (typeof node === 'string') {
    if (locale === 'uz') {
      if (CYRILLIC.test(node)) add(scope, path, 'CYRILLIC_IN_UZ', node, 'uz');
      else if (SUSPICIOUS_LATIN.test(node)) add(scope, path, 'SUSPICIOUS_UZ', node, 'uz');
    } else if (locale === 'en') {
      if (CYRILLIC.test(node)) add(scope, path, 'CYRILLIC_IN_EN', node, 'en');
      else if (SUSPICIOUS_LATIN.test(node)) add(scope, path, 'SUSPICIOUS_EN', node, 'en');
      else if (UZBEK_WORDS.test(node)) add(scope, path, 'UZBEK_IN_EN', node, 'en');
    }
    return;
  }

  if (Array.isArray(node)) {
    node.forEach((item, i) => walk(item, scope, `${path}[${i}]`, locale));
    return;
  }

  if (typeof node === 'object') {
    const obj = node as Record<string, unknown>;
    const keys = Object.keys(obj);
    const hasTriplet = 'uz' in obj && 'ru' in obj && 'en' in obj;

    if (hasTriplet) {
      const uz = obj.uz;
      const ru = obj.ru;
      const en = obj.en;

      // string tripleti — uz==ru / en==ru tekshiruvi
      if (typeof uz === 'string' && typeof ru === 'string' && typeof en === 'string') {
        if (uz && ru && uz === ru) add(scope, path, 'UZ_EQ_RU', uz);
        if (en && ru && en === ru) add(scope, path, 'EN_EQ_RU', en);
        if (!uz?.trim()) add(scope, path, 'EMPTY_UZ', '(bo\'sh)', 'uz');
        if (!en?.trim()) add(scope, path, 'EMPTY_EN', '(bo\'sh)', 'en');
      }

      // array parity (Record<Locale, T[]>)
      if (Array.isArray(uz) && Array.isArray(ru) && Array.isArray(en)) {
        if (uz.length !== ru.length || uz.length !== en.length) {
          add(scope, path, 'ARRAY_LENGTH_MISMATCH', `uz=${uz.length} ru=${ru.length} en=${en.length}`);
        }
      }

      walk(uz, scope, `${path}.uz`, 'uz');
      walk(ru, scope, `${path}.ru`, 'ru');
      walk(en, scope, `${path}.en`, 'en');

      // triplet dan tashqari boshqa kalitlar
      for (const k of keys) {
        if (k === 'uz' || k === 'ru' || k === 'en') continue;
        walk(obj[k], scope, `${path}.${k}`, locale);
      }
      return;
    }

    for (const k of keys) {
      walk(obj[k], scope, path ? `${path}.${k}` : k, locale);
    }
  }
}

// DICTIONARY (uz/ru/en top-level)
const dict = DICTIONARY as Record<string, Record<string, string>>;
for (const key of Object.keys(dict.uz)) {
  const uz = dict.uz[key];
  const ru = dict.ru[key];
  const en = dict.en[key];
  if (uz && CYRILLIC.test(uz)) add('DICTIONARY', key, 'CYRILLIC_IN_UZ', uz, 'uz');
  if (en && CYRILLIC.test(en)) add('DICTIONARY', key, 'CYRILLIC_IN_EN', en, 'en');
  if (uz && SUSPICIOUS_LATIN.test(uz)) add('DICTIONARY', key, 'SUSPICIOUS_UZ', uz, 'uz');
  if (en && SUSPICIOUS_LATIN.test(en)) add('DICTIONARY', key, 'SUSPICIOUS_EN', en, 'en');
  if (uz && ru && uz === ru) add('DICTIONARY', key, 'UZ_EQ_RU', uz);
  if (en && ru && en === ru) add('DICTIONARY', key, 'EN_EQ_RU', en);
  if (!(key in dict.ru)) add('DICTIONARY', key, 'MISSING_RU', key);
  if (!(key in dict.en)) add('DICTIONARY', key, 'MISSING_EN', key);
}

const catalogs: [string, unknown][] = [
  ['CATEGORY_CONDITIONS', CATEGORY_CONDITIONS_CATALOG],
  ['SUB_CONDITIONS', SUB_CONDITIONS_CATALOG],
  ['CATEGORY_RICH', CATEGORY_RICH_CATALOG],
  ['SUB_SERVICE_RICH', SUB_SERVICE_RICH_CATALOG],
  ['SERVICE_ABOUT', SERVICE_ABOUT_CATALOG],
  ['CONDITION_WHY_RADESKI', CONDITION_WHY_RADESKI],
  ['PROMO_PAGE', PROMO_PAGE_CATALOG],
  ['CLINIC_EQUIPMENT', CLINIC_EQUIPMENT_CATALOG],
  ['ARTICLE_RICH', ARTICLE_RICH_CATALOG],
  ['LEGAL_DOCUMENTS', LEGAL_DOCUMENTS],
  ['TECHNOLOGIES_PAGE', TECHNOLOGIES_PAGE],
  ['EQUIPMENT_PARK_PAGE', EQUIPMENT_PARK_PAGE],
  ['CUSTOMER_REVIEWS', CUSTOMER_REVIEWS],
  ['CLINIC_PARTNERS', CLINIC_PARTNERS],
  ['CLINIC_VIDEOS', CLINIC_VIDEOS],
  ['CLINIC_BRANCHES', CLINIC_BRANCHES],
  ['TREATMENT_RESULTS', TREATMENT_RESULTS],
  ['HOME_PROMO_SLIDES', HOME_PROMO_SLIDES],
  ['CATEGORY_CONDITION_DEFAULTS', CATEGORY_CONDITION_DEFAULTS],
  ['SUB_CONDITION_DEFAULTS', SUB_CONDITION_DEFAULTS],
  ['CONDITION_DETAIL_OVERRIDES', CONDITION_DETAIL_OVERRIDES],
];

for (const [name, data] of catalogs) {
  walk(data, name, '', null);
}

const byType = new Map<string, Issue[]>();
for (const i of issues) {
  const list = byType.get(i.type) ?? [];
  list.push(i);
  byType.set(i.type, list);
}

console.log(`Total issues: ${issues.length}`);
for (const [type, list] of [...byType.entries()].sort((a, b) => b[1].length - a[1].length)) {
  console.log(`\n=== ${type} (${list.length}) ===`);
  for (const i of list.slice(0, 60)) {
    console.log(`  [${i.scope}] ${i.path}: ${i.detail}`);
  }
  if (list.length > 60) console.log(`  ... and ${list.length - 60} more`);
}
