import type { ServiceCategory, ServiceDetail } from '../types';

/*
 * Which catalog entry describes a sub-service (by id or by words in its name). Lives apart from
 * serviceRichCatalog so images, routing and the menu can use it without loading the catalog
 * texts (~120 KB). SUB_SERVICE_CATALOG_IDS must list the keys of SUB_SERVICE_RICH_CATALOG —
 * assertSubServiceCatalogIdsInSync() checks it in the prerender build.
 */
export const SUB_SERVICE_CATALOG_IDS: readonly string[] = [
  'ipl-inmode',
  'gene-photo-rejuvenation',
  'lazer-biorev',
  'mikrotoki',
  'ultratovush-yuz',
  'det-derm',
  'fototerapiya',
  'immunobiologicheskaya',
  'konturnaya',
  'botulino',
  'biorev',
  'alex-lazer',
  'derm-konsult',
  'derm-total-body',
  'derm-skin-passport',
  'trix-konsult',
  'trix-alopecia',
  'trix-monitoring',
  'trixoskop',
  'biopsiya',
  'moh-surgery',
  'consult-group',
  'dermatosc-lessons',
  'podolog-dermatolog',
  'gistolog',
  'fy-protocols',
];

const SUB_SERVICE_CATALOG_ID_SET = new Set(SUB_SERVICE_CATALOG_IDS);

const KEYWORD_RULES: { key: string; patterns: string[] }[] = [
  { key: 'ultratovush-yuz', patterns: ['ultratovush', 'ultrazvuk', 'ultrasonic', 'ультразвуков', 'ultrasound facial', 'ultrasound cleansing'] },
  { key: 'fy-protocols', patterns: ['fy-protocol', 'forever young ipl', 'gen-revo'] },
  { key: 'ipl-inmode', patterns: ['ipl inmode', 'inmode ipl', 'ipl foto', 'фотоомоложение ipl', 'ipl photo', 'bbl'] },
  { key: 'hollywood-spectra', patterns: ['hollywood spectra', 'hollywood', 'холливуд', 'gold toning', 'karbon piling'] },
  { key: 'gene-photo-rejuvenation', patterns: ['gen darajasida', 'innovatsion foto', 'forever young', 'генном уровне', 'gene-level'] },
  { key: 'lazer-biorev', patterns: ['lazer biorevital', 'lazer biorev', 'лазерная биоревит', 'laser biorev'] },
  { key: 'mikrotoki', patterns: ['mikrotok', 'микроток', 'microcurrent'] },
  { key: 'det-derm', patterns: ['bolalar dermat', 'детская дермат', 'pediatric dermat'] },
  { key: 'fototerapiya', patterns: ['fototerapi', 'фототерап', 'phototherap'] },
  { key: 'immunobiologicheskaya', patterns: ['immunobiolog', 'иммунобиолог', 'biologic'] },
  { key: 'konturnaya', patterns: ['kontur plast', 'контурн', 'filler', 'fillers'] },
  { key: 'botulino', patterns: ['botulin', 'ботулин', 'botox', 'dysport'] },
  { key: 'biorev', patterns: ['biorevital', 'биоревит'] },
  { key: 'alex-lazer', patterns: ['aleksandrit', 'александрит', 'alexandrite'] },
  { key: 'trixoskop', patterns: ['trixoskop', 'трихоскоп', 'trichoscop'] },
  { key: 'biopsiya', patterns: ['biopsi', 'биопси', 'skin biopsy', 'биопсия кожи'] },
  { key: 'gistolog', patterns: ['gistolog', 'гистолог', 'histopath', 'gistologik'] },
  { key: 'moh-surgery', patterns: ['mohs', 'moh ', 'моха', 'микрограф'] },
  { key: 'consult-group', patterns: ['guruhli', 'группов', 'group consult'] },
  { key: 'dermatosc-lessons', patterns: ['dermatoscop', 'дерматоскоп', 'o\'quv dars', 'практическ'] },
  { key: 'podolog-dermatolog', patterns: ['podolog', 'подолог', 'tirnoq', 'ногт'] },
];

export function findSubServiceCatalogKey(sub: ServiceDetail, _category: ServiceCategory): string | null {
  if (SUB_SERVICE_CATALOG_ID_SET.has(sub.id)) return sub.id;

  const haystack = `${sub.id} ${sub.name.uz} ${sub.name.ru} ${sub.name.en} ${sub.description.uz} ${sub.description.ru}`.toLowerCase();

  for (const rule of KEYWORD_RULES) {
    if (rule.patterns.some((pattern) => haystack.includes(pattern))) {
      return rule.key;
    }
  }

  return null;
}
