/**
 * Ruscha preyskurant nomlarini tabiiy o'zbekchaga qayta tuzish.
 * So'zma-so'z emas, ma'no va tibbiy terminologiyaga mos tarjima.
 */

const PROTECTED_REPLACEMENTS: [RegExp, string][] = [
  [/С-реактивный/gi, '§CRP§'],
  [/С\s*-\s*реактивный/gi, '§CRP§'],
  [/С\s+реактивный/gi, '§CRP§'],
  [/С-Реактивный/gi, '§CRP§'],
  [/С-пептид/gi, '§CPEP§'],
  [/С\s*-\s*пептид/gi, '§CPEP§'],
  [/Компонент комплемента С3/gi, '§CC3§'],
  [/Компонент комплемента С4/gi, '§CC4§'],
  [/Цистатин С/gi, '§CYS§'],
  [/АТ\s+к/gi, '§ATK§'],
  [/Anti\s+/gi, '§ANTI§'],
  [/IgG/g, '§IGG§'],
  [/IgM/g, '§IGM§'],
  [/IgA/g, '§IGA§'],
  [/HBsAg/gi, '§HBSAG§'],
  [/HCV/gi, '§HCV§'],
  [/HIV/gi, '§HIV§'],
  [/RW/g, '§RW§'],
  [/PRP/gi, '§PRP§'],
  [/SPF/gi, '§SPF§'],
  [/CO₂/g, 'CO2'],
  [/CO2/g, 'CO2'],
];

const UNPROTECT: Record<string, string> = {
  '§CRP§': 'C-reaktiv',
  '§CPEP§': 'C-peptid',
  '§CC3§': 'Komponent komplementi C3',
  '§CC4§': 'Komponent komplementi C4',
  '§CYS§': 'Tsistatin C',
  '§ATK§': 'AT k',
  '§ANTI§': 'Anti-',
  '§IGG§': 'IgG',
  '§IGM§': 'IgM',
  '§IGA§': 'IgA',
  '§HBSAG§': 'HBsAg',
  '§HCV§': 'HCV',
  '§HIV§': 'HIV',
  '§RW§': 'RW',
  '§PRP§': 'PRP',
  '§SPF§': 'SPF',
};

/** Ruscha obyekt iborasi → o'zbekcha obyekt (tuslanmagan) */
const OBJECT_PHRASES: [string, string][] = [
  ['родинок', 'xollar (nevus)'],
  ['новообразований', 'o\'smalar'],
  ['новообразования', 'o\'sma'],
  ['образований в интимной зоне (до 5 мм)', 'intim zonadagi o\'smalar (5 mm gacha)'],
  ['образований в интимной зоне (от 5 мм)', 'intim zonadagi o\'smalar (5 mm dan)'],
  ['образований в области верхних и нижних век (от 1 до 3 мм)', 'yuqori va pastki qovoqdagi o\'smalar (1–3 mm)'],
  ['образований в области верхних и нижних век (от 5 мм)', 'yuqori va pastki qovoqdagi o\'smalar (5 mm dan)'],
  ['пигментации всего лица', 'butun yuz pigmentatsiyasi'],
  ['пигментации всего лица', 'butun yuz pigmentatsiyasi'],
  ['пигментации лицо', 'yuz pigmentatsiyasi'],
  ['пигментации щеки', 'yonoq pigmentatsiyasi'],
  ['пигментации до 5 см²', '5 sm² gacha pigmentatsiya'],
  ['пигментации до 5 см2', '5 sm² gacha pigmentatsiya'],
  ['пигментации до 10 см²', '10 sm² gacha pigmentatsiya'],
  ['пигментации до 10 см 2', '10 sm² gacha pigmentatsiya'],
  ['пигментации', 'pigmentatsiya'],
  ['сосудистых звёздочек на лице', 'yuzdagi qon tomir yulduzchalari'],
  ['сосудистых звездочек на лице', 'yuzdagi qon tomir yulduzchalari'],
  ['телеангиэтазий на крыльях носа', 'burun qanotlaridagi teleangiektaziyalar'],
  ['телеангиэтазий на всём теле', 'butun tanadagi teleangiektaziyalar'],
  ['телеангиэтазий на всем теле', 'butun tanadagi teleangiektaziyalar'],
  ['вен на нижних конечностях', 'pastki oyoq-qo\'llardagi venalar'],
  ['онихомикоза ногтей 1 ноготь', '1 ta tirnoq onixomikozi'],
  ['онихомикоза ногтей', 'tirnoq onixomikozi'],
  ['гемангиом, ангиом, сосудистых новообразований', 'gemangiomalar, angiomalar va qon tomir o\'smalari'],
  ['гемангиом', 'gemangiomalar'],
  ['татуажа бровей', 'qosh tatuaji'],
  ['татуировки 6 см', '6 sm tatuiruvka'],
  ['татуировки', 'tatuiruvka'],
  ['рубцов 5 см²', '5 sm² chandiq'],
  ['рубцов', 'chandiqlar'],
  ['вросшего ногтя', 'o\'sib ketgan tirnoq'],
  ['волос (от)', 'soch transplantatsiyasi'],
  ['волос', 'soch'],
  ['бородавок с помощью аппарата PinPoint laser за 1 кв.см (1 сеанс)', 'PinPoint laser bilan mayda zgardalar (1 kv.sm, 1 seans)'],
  ['за 1 элемент', '1 ta element uchun'],
  ['за 1 кв.см (1 сеанс)', '1 kv.sm uchun (1 seans)'],
  ['(от)', '(dan)'],
  ['(от', '(dan'],
];

const SORTED_OBJECT_PHRASES = [...OBJECT_PHRASES].sort((a, b) => b[0].length - a[0].length);

/** To'liq ibora — strukturaviy shablonlarsiz */
const FULL_PHRASES: [RegExp, string][] = [
  [/^Первичный осмотр врача дерматовениролога$/i, 'Dermatovenerolog shifokorining birinchi ko\'rigi'],
  [/^Повторный осмотр врача дерматовениролога$/i, 'Dermatovenerolog shifokorining takroriy ko\'rigi'],
  [/^Первичный осмотр врача трихолога \+ трихоскопия$/i, 'Trixolog shifokorining birinchi ko\'rigi + trixoskopiya'],
  [/^Повторный осмотр врача трихолога$/i, 'Trixolog shifokorining takroriy ko\'rigi'],
  [/^Первичный осмотр врача дерматоонколога \+ дерматоскопия$/i, 'Dermatoonkolog shifokorining birinchi ko\'rigi + dermatoskopiya'],
  [/^Повторная консультация к врачу дерматоонколога$/i, 'Dermatoonkolog shifokoriga takroriy konsultatsiya'],
  [/^Первичная консультация подолога$/i, 'Podologning birinchi konsultatsiyasi'],
  [/^Повторный осмотр подолога$/i, 'Podologning takroriy ko\'rigi'],
  [/^Панч-биопсия$/i, 'Panch-biopsiya'],
  [/^Гистологическое исследование$/i, 'Gistologik tekshiruv'],
  [/^Операция \(Базалиома\)$/i, 'Operatsiya (bazalioma)'],
  [/^Лазерное удаление \(за 1 элемент\)$/i, '1 ta element uchun lazer bilan olib tashlash'],
  [/^Лечение пигментации$/i, 'Pigmentatsiyani davolash'],
  [/^Лечение купероза и розации$/i, 'Kuperoz va rozatseani davolash'],
  [/^Лечение акне, красноты, пост-акне \(gold toning\)$/i, 'Akne, qizarish va post-akneni davolash (gold toning)'],
  [/^Карбоновый пилинг\+ gold toning$/i, 'Karbonli piling + gold toning'],
  [/^Механическая чистка лица$/i, 'Yuzni mexanik tozalash'],
  [/^Ультразвуковая чистка лица$/i, 'Yuzni ultratovush bilan tozalash'],
  [/^Удаление вросшего ногтя$/i, 'O\'sib ketgan tirnoqni olib tashlash'],
  [/^Женские руки полностью$/i, 'Ayollar qo\'llari (to\'liq)'],
  [/^Женские ноги полностью$/i, 'Ayollar oyoqlari (to\'liq)'],
  [/^Лицо полностью$/i, 'Yuz (to\'liq)'],
  [/^Кисти рук и пальцы$/i, 'Qo\'l kafti va barmoqlar'],
  [/^Кисти рук$/i, 'Qo\'l kafti'],
  [/^Тыл стоп \+ пальцы$/i, 'Tovon orqasi + barmoqlar'],
  [/^Женский живот$/i, 'Ayol qorni'],
  [/^Женская линия живота$/i, 'Ayol qorin chizig\'i'],
  [/^Мужской живот$/i, 'Erkak qorni'],
  [/^Подмышки$/i, 'Qoltiq osti'],
  [/^Бикини классика$/i, 'Bikini (klassik)'],
  [/^Глубокое бикини$/i, 'Chuqur bikini'],
  [/^Шея$/i, 'Bo\'yin'],
  [/^Спина$/i, 'Orqa'],
  [/^Грудь$/i, 'Ko\'krak'],
  [/^Ягодицы$/i, 'Dumba'],
  [/^Руки$/i, 'Qo\'llar'],
  [/^Ноги$/i, 'Oyoqlar'],
  [/^Тело \(10х10\)$/i, 'Tana (10×10 sm)'],
  [/^Тело \(20х20\)$/i, 'Tana (20×20 sm)'],
  [/^Стрижка ногтей\(за ед\)$/i, 'Tirnoq kesish (1 ta uchun)'],
  [/^Подногтевые бородавки \(от 5 мм до 10 мм\)$/i, 'Tirnoq osti qaltishti (5–10 mm)'],
  [/^Подногтевые бородавки \(до 5 мм\)$/i, 'Tirnoq osti qaltishti (5 mm gacha)'],
  [/^Подногтевые бородавки \(от 10 мм до 15 мм\)$/i, 'Tirnoq osti qaltishti (10–15 mm)'],
  [/^Родинка \(до 5 мм\)$/i, 'Xol (nevus) — lazer bilan olib tashlash (5 mm gacha)'],
  [/^Родинка \(от 5 мм до 10 мм\)$/i, 'Xol (nevus) — lazer bilan olib tashlash (5–10 mm)'],
  [/^Родинка \(от 10 мм\)$/i, 'Xol (nevus) — lazer bilan olib tashlash (10 mm dan)'],
  [/^Общий анализ мочи$/i, 'Siydikning umumiy tahlili'],
  [/^Общий анализ крови \(развернутый\)$/i, 'Qonning kengaytirilgan umumiy tahlili'],
  [/^Общий анализ крови$/i, 'Qonning umumiy tahlili'],
  [/^Витамин Д3$/i, 'D3 vitamini'],
  [/^Виши минерал 89 гель - сыворотка 50мл$/i, 'Vichy Mineral 89 gel-syvorotka 50 ml'],
  [/^Коагулограмма$/i, 'Koagulogramma (qon ivishini tekshirish)'],
  [/^Копрология$/i, 'Kalning umumiy tahlili (koprologiya)'],
  [/^Забор крови$/i, 'Qon olish'],
  [/^Альфа-фетопротеин \(AFP - печень\)$/i, 'Alfa-fetoprotein (AFP — jigar)'],
  [/^RW \(сифилис\)$/i, 'RW (sifilis)'],
  [/^HBsAg \(гепатит В\)$/i, 'HBsAg (B gepatiti)'],
  [/^HVC \(гепатит С\)$/i, 'HCV (C gepatiti)'],
  [/^HIV \(ВИЧ\)$/i, 'HIV (OITS)'],
  [/^Удаление родинок \(от\)$/i, 'Xol (nevus)larni olib tashlash (dan)'],
  [/^Удаление новообразований \(от\)$/i, 'O\'smalarni olib tashlash (dan)'],
  [/^Лазерное удаление вен на нижних конечностях \(от\)$/i, 'Pastki oyoq-qo\'llardagi venalarni lazer bilan olib tashlash (dan)'],
  [/^Лазерное лечение гемангиом, ангиом, сосудистых новообразований \(от\)$/i, 'Gemangiomalar, angiomalar va qon tomir o\'smalarini lazer bilan davolash (dan)'],
  [/^Лазерное удаление сосудистых звёздочек на лице \(от\)$/i, 'Yuzdagi qon tomir yulduzchalarini lazer bilan olib tashlash (dan)'],
  [/^Лазерное удаление телеангиэтазий на всём теле \(от\)$/i, 'Butun tanadagi teleangiektaziyalarni lazer bilan olib tashlash (dan)'],
  [/^Лазерное удаление телеангиэтазий на крыльях носа \(от\)$/i, 'Burun qanotlaridagi teleangiektaziyalarni lazer bilan olib tashlash (dan)'],
  [/^Лечение онихомикоза ногтей \(от\)$/i, 'Tirnoq onixomikozini davolash (dan)'],
  [/^Лечение онихомикоза ногтей 1 ноготь$/i, '1 ta tirnoq onixomikozini davolash'],
  [/^Лазерное лечение гемангиом \(от\)$/i, 'Gemangiomalarni lazer bilan davolash (dan)'],
  [/^Лечение пигментации лицо$/i, 'Yuz pigmentatsiyasini davolash'],
  [/^Лечение пигментации щеки$/i, 'Yonoq pigmentatsiyasini davolash'],
  [/^Лечение пигментации до 5 см²$/i, '5 sm² gacha pigmentatsiyani davolash'],
  [/^Лечение пигментации до 10 см²$/i, '10 sm² gacha pigmentatsiyani davolash'],
  [/^Удаление татуажа бровей$/i, 'Qosh tatuajini olib tashlash'],
  [/^Удаление татуировки 6 см$/i, '6 sm tatuiruvkani olib tashlash'],
  [/^Лечение рубцов 5 см²$/i, '5 sm² chandiqni davolash'],
  [/^Удаление пигментации всего лица$/i, 'Butun yuz pigmentatsiyasini olib tashlash'],
  [/^Удаление образований в интимной зоне \(до 5 мм\)$/i, 'Intim zonadagi o\'smalarni olib tashlash (5 mm gacha)'],
  [/^Удаление образований в интимной зоне \(от 5 мм\)$/i, 'Intim zonadagi o\'smalarni olib tashlash (5 mm dan)'],
  [/^Удаление образований в области верхних и нижних век \(от 1 до 3 мм\)$/i, 'Yuqori va pastki qovoqdagi o\'smalarni olib tashlash (1–3 mm)'],
  [/^Удаление образований в области верхних и нижних век \(от 5 мм\)$/i, 'Yuqori va pastki qovoqdagi o\'smalarni olib tashlash (5 mm dan)'],
  [/^Трансплантация волос \(от\)$/i, 'Soch transplantatsiyasi (dan)'],
  [/^Лечение пигментации$/i, 'Pigmentatsiyani davolash'],
  [/^Блокада с кеналогом$/i, 'Kenalog bilan blokada'],
  [/^Инъекция в\/м без расходного материала$/i, 'Mushak ichiga inyeksiya (sarf materiallarisiz)'],
  [/^капельница без расходных материалов$/i, 'Tomchi terapiya (sarf materiallarisiz)'],
];

const LAB_PATTERNS: [RegExp, (...args: string[]) => string][] = [
  [/^Общий анализ крови \((.+)\)$/i, (x) => `Qonning umumiy tahlili (${translateLabFragment(x)})`],
  [/^Общий анализ мочи \((.+)\)$/i, (x) => `Siydikning umumiy tahlili (${translateLabFragment(x)})`],
  [/^Общий анализ (.+)$/i, (x) => `${translateLabFragment(x)}ning umumiy tahlili`],
  [/^Общий белок$/i, () => 'Umumiy belok'],
  [/^Общий холестерин$/i, () => 'Umumiy xolesterin'],
  [/^Общий билирубин$/i, () => 'Umumiy bilirubin'],
  [/^Общий Билирубин$/i, () => 'Umumiy bilirubin'],
  [/^Общий мазок на (.+)$/i, (x) => `Umumiy surtma (${translateLabFragment(x)})`],
  [/^Соскоб на (.+)$/i, (x) => `${translateLabFragment(x)}ga surtma`],
  [/^Моча на (.+)$/i, (x) => `Siydikdagi ${translateLabFragment(x)}`],
  [/^Анализ кала на (.+)$/i, (x) => `Kal tahlili: ${translateLabFragment(x)}`],
  [/^Анализ на (.+)$/i, (x) => `${translateLabFragment(x)} tahlili`],
  [/^Кал на (.+)$/i, (x) => `Kal tahlili: ${translateLabFragment(x)}`],
  [/^Тест на (.+)$/i, (x) => `${translateLabFragment(x)} testi`],
  [/^Проба на (.+)$/i, (x) => `${translateLabFragment(x)} probasi`],
  [/^Глюкоза в моче$/i, () => 'Siydikdagi glukoza'],
  [/^Глюкоза мочи$/i, () => 'Siydikdagi glukoza'],
  [/^Глюкоза$/i, () => 'Qondagi glukoza'],
  [/^Коагулограмма$/i, () => 'Koagulogramma (qon ivishini tekshirish)'],
  [/^Копрология$/i, () => 'Koproskopiya (kal tahlili)'],
  [/^Демодекоз$/i, () => 'Demodekoz (surtma)'],
  [/^Гистологическое исследование$/i, () => 'Gistologik tekshiruv'],
  [/^Антитела к (.+) \((.+)\)$/i, (x, y) => `${translateLabFragment(x)}ga antitanalar (${y})`],
  [/^Антитела к (.+)$/i, (x) => `${translateLabFragment(x)}ga antitanalar`],
  [/^Анти-(.+)$/i, (x) => `${translateLabFragment(x)}ga antitanalar`],
  [/^АТ к (.+)$/i, (x) => `${translateLabFragment(x)}ga AT`],
  [/^(.+) IgG$/i, (x) => `${translateLabFragment(x)} IgG antitanalari`],
  [/^(.+) IgM$/i, (x) => `${translateLabFragment(x)} IgM antitanalari`],
  [/^(.+) IgA$/i, (x) => `${translateLabFragment(x)} IgA antitanalari`],
  [/^Бак исследование (.+)$/i, (x) => `Bakteriologik tekshiruv: ${translateLabFragment(x)}`],
  [/^Бак иследование (.+)$/i, (x) => `Bakteriologik tekshiruv: ${translateLabFragment(x)}`],
  [/^Нативный мазок на (.+)$/i, (x) => `${translateLabFragment(x)} uchun native surtma`],
  [/^Мазок из (.+)$/i, (x) => `${translateLabFragment(x)}dan surtma`],
  [/^Мазок на (.+)$/i, (x) => `${translateLabFragment(x)} uchun surtma`],
  [/^Мазок (.+)$/i, (x) => `${translateLabFragment(x)} surtmasi`],
  [/^Время (.+)$/i, (x) => `${translateLabFragment(x)} vaqti`],
  [/^Витамин (.+)$/i, (x) => `${x}-vitamin`],
  [/^(.+) – (.+)$/i, (x, y) => `${translateLabFragment(x)} — ${translateLabFragment(y)}`],
  [/^(.+) - (.+)$/i, (x, y) => `${translateLabFragment(x)} — ${translateLabFragment(y)}`],
];

const LAB_TERMS: Record<string, string> = {
  мочи: 'siydik',
  моче: 'siydikda',
  моча: 'siydik',
  крови: 'qon',
  кала: 'kal',
  кале: 'kalda',
  носа: 'burun',
  грибы: 'zamburug\'',
  грибок: 'zamburug\'',
  демодекоз: 'demodekoz',
  чесотки: 'qichishcha',
  энтеробиоз: 'enterobioz',
  острицы: 'kaltakesaklar',
  простейшие: 'oddiy bir hujayralilar',
  лямблии: 'lambliyalar',
  гемоглобин: 'gemoglobin',
  гликозированный: 'glikozillangan',
  гликолизированный: 'glikozillangan',
  общий: 'umumiy',
  обший: 'umumiy',
  флору: 'flora',
  лептотрихоз: 'leptotriks',
  'желчные пигменты': 'o\'t pigmentlari',
  ацетон: 'atseton',
  'яйца гельминтов': 'gelmint tuxumlari',
  'скрытую кровь': 'yashirin qon',
  сифилис: 'sifilis',
  вич: 'OITS',
  гепатит: 'gepatit',
  аланинаминотрансфераза: 'alanin aminotransferaza',
  аспартатаминотрасфераза: 'aspartat aminotransferaza',
  антистрептолизин: 'antistreptolizin-O',
  коагулограмма: 'koagulogramma',
  копрология: 'koproskopiya',
  соскоб: 'surtma',
  мазок: 'surtma',
  билирубин: 'bilirubin',
  холестерин: 'xolesterin',
  железа: 'Temir',
  кальций: 'Kalsiy',
  калий: 'Kaliy',
  магний: 'Magniy',
  инсулин: 'Insulin',
  кортизол: 'Kortizol',
  ферритин: 'Ferritin',
  renin: 'Renin',
  аскарида: 'Askariid',
  трихомониаз: 'Trixomoniyaz',
  'слизистой оболочки из зева': 'tomoq shilliq qavatidan',
  'уретры': 'uretra',
  'свертываемости крови': 'qon ivish',
  'ранняя диагностика беременности': 'erta homiladorlikni aniqlash',
  'гепатит в': 'B gepatiti',
  'гепатит с': 'C gepatiti',
  'гепатит b': 'B gepatiti',
  perxoti: 'kech',
  ochisheniya: 'tozalash',
  problemnoy: 'muammoli',
  suxix: 'quruq',
  zhirnyx: 'yog\'li',
  normalnyx: 'normal',
  chuvstvitelnoy: 'sezgir',
  volos: 'soch',
  kozhi: 'teri',
  golovy: 'bosh terisi',
  'общий белок': 'umumiy belok',
  'без лейкоформулы': 'leykotsit formulasisiz',
  '24 показателей': '24 ko\'rsatkich',
  'развернутый': 'kengaytirilgan',
  тиреоглобулину: 'tireoglobulin',
  териопироксидазе: 'tireoperoksidaza',
};

function simpleTransliterateWord(word: string): string {
  const map: Record<string, string> = {
    а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'j',
    з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o',
    п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'x', ц: 'ts',
    ч: 'ch', ш: 'sh', щ: 'sh', ъ: '', ы: 'i', ь: '', э: 'e', ю: 'yu', я: 'ya',
  };
  return word
    .split('')
    .map((char) => {
      const lower = char.toLowerCase();
      const tr = map[lower];
      if (!tr) return char;
      return char === lower ? tr : tr.charAt(0).toUpperCase() + tr.slice(1);
    })
    .join('');
}

function translateLabFragment(text: string): string {
  const trimmed = text.trim();
  const lower = trimmed.toLowerCase();
  if (LAB_TERMS[lower]) return LAB_TERMS[lower];
  if (!/[а-яё]/i.test(trimmed)) return trimmed;
  return trimmed
    .split(/\s+/)
    .map((word) => {
      const wLower = word.toLowerCase().replace(/[(),]/g, '');
      if (LAB_TERMS[wLower]) return LAB_TERMS[wLower];
      return simpleTransliterateWord(word);
    })
    .join(' ');
}

function protectTerms(text: string): string {
  let result = text;
  for (const [re, repl] of PROTECTED_REPLACEMENTS) {
    result = result.replace(re, repl);
  }
  return result;
}

function unprotectTerms(text: string): string {
  let result = text;
  for (const [key, val] of Object.entries(UNPROTECT)) {
    result = result.replaceAll(key, val);
  }
  return result;
}

function mapObjectPhrase(ruObject: string): string {
  let obj = ruObject.trim();
  for (const [from, to] of SORTED_OBJECT_PHRASES) {
    const re = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    obj = obj.replace(re, to);
  }
  return obj.trim();
}

function withAccusative(objectUz: string): string {
  const obj = objectUz.trim();
  if (!obj) return obj;
  if (/ni$|ini$|larini$/.test(obj)) return obj;

  const parenMatch = obj.match(/^(.+?)\s+(\(.+\))$/);
  if (parenMatch) {
    return `${withAccusative(parenMatch[1])} ${parenMatch[2]}`;
  }

  if (obj.endsWith('lar')) return `${obj.slice(0, -3)}larni`;
  if (/[aeiouöü]/i.test(obj.slice(-1))) return `${obj}ni`;
  return `${obj}ni`;
}

type FragmentTranslator = (text: string) => string;

function buildActionPhrase(
  action: 'remove' | 'treat' | 'laser-remove' | 'laser-treat',
  ruObject: string,
  suffix: string,
  translateFragment: FragmentTranslator,
): string {
  let obj = mapObjectPhrase(ruObject);
  if (/[а-яё]/i.test(obj)) {
    obj = translateFragment(obj);
  }
  const accusative = withAccusative(obj);

  const templates = {
    remove: `${accusative} olib tashlash`,
    treat: `${accusative} davolash`,
    'laser-remove': `${accusative} lazer bilan olib tashlash`,
    'laser-treat': `${accusative} lazer bilan davolash`,
  };

  return `${templates[action]}${suffix}`.replace(/\s+/g, ' ').trim();
}

const STRUCTURAL_PATTERNS: {
  re: RegExp;
  action: 'remove' | 'treat' | 'laser-remove' | 'laser-treat';
  suffixGroup?: number;
}[] = [
  { re: /^Удаление (.+?) \((от)\)$/i, action: 'remove', suffixGroup: 0 },
  { re: /^Удаление (.+)$/i, action: 'remove' },
  { re: /^Лечение (.+?) \((от)\)$/i, action: 'treat', suffixGroup: 0 },
  { re: /^Лечение (.+)$/i, action: 'treat' },
  { re: /^Лазерное удаление (.+?) \((от)\)$/i, action: 'laser-remove', suffixGroup: 0 },
  { re: /^Лазерное удаление (.+)$/i, action: 'laser-remove' },
  { re: /^Лазерное лечение (.+?) \((от)\)$/i, action: 'laser-treat', suffixGroup: 0 },
  { re: /^Лазерное лечение (.+)$/i, action: 'laser-treat' },
  { re: /^Осветление (.+)$/i, action: 'treat' },
  { re: /^Коррекция (.+)$/i, action: 'treat' },
  { re: /^Обработка (.+)$/i, action: 'treat' },
  { re: /^Стрижка (.+)$/i, action: 'remove' },
];

export function tryTranslateLabRuToUz(text: string): string | null {
  const normalized = text.trim();
  for (const [re, builder] of LAB_PATTERNS) {
    const m = normalized.match(re);
    if (m) {
      const args = m.slice(1).map((part) => translateLabFragment(part));
      return builder(...args);
    }
  }
  return null;
}

export function tryStructuralTranslateRuToUz(
  text: string,
  translateFragment: FragmentTranslator,
): string | null {
  const normalized = protectTerms(text.trim());

  for (const [re, uz] of FULL_PHRASES) {
    if (re.test(normalized)) return uz;
  }

  const lab = tryTranslateLabRuToUz(normalized);
  if (lab) return unprotectTerms(lab);

  for (const { re, action, suffixGroup } of STRUCTURAL_PATTERNS) {
    const m = normalized.match(re);
    if (!m) continue;
    const objectPart = m[1]?.trim() ?? '';
    let suffix = '';
    if (suffixGroup === 0 && m[2]) suffix = ' (dan)';
    else if (objectPart.includes('(от)')) suffix = ' (dan)';
    const objectClean = objectPart.replace(/\s*\(от\)\s*$/i, '').trim();
    const result = buildActionPhrase(action, objectClean, suffix, translateFragment);
    return unprotectTerms(result);
  }

  return null;
}

/** O'lcham qavslaridagi tartib: (gacha 5 mm) → (5 mm gacha) */
function fixSizeSuffixOrder(text: string): string {
  let result = text;
  result = result.replace(
    /\((dan)\s+(\d+(?:[.,]\d+)?)\s*(mm|sm|ml|mg|ta)\s+gacha\s+(\d+(?:[.,]\d+)?)\s*(mm|sm|ml|mg|ta)\)/gi,
    '($2 $3 dan $4 $5 gacha)',
  );
  result = result.replace(
    /\((gacha)\s+(\d+(?:[.,]\d+)?)\s*(mm|sm|ml|mg|ta|kv\.sm)\)/gi,
    '($2 $3 gacha)',
  );
  result = result.replace(
    /\((dan)\s+(\d+(?:[.,]\d+)?)\s*(mm|sm|ml|mg|ta|kv\.sm)\)/gi,
    '($2 $3 dan)',
  );
  return result;
}

/** Xol/xollar yonida (nevus) qo'shilishi kerak — qizil xol (gemangioma) bundan mustasno */
export function normalizeMoleTermsUz(text: string): string {
  if (!text || !/\bxol/i.test(text)) return text;

  let result = text
    .replace(/\(\s*keratoma,\s*xol\s*\/\s*nevus\s*\)/gi, '(keratoma, xol (nevus))')
    .replace(/\(\s*xol\s*\/\s*nevus\s*\)/gi, '(xol (nevus))')
    .replace(/\bxol\s*\/\s*nevus\b/gi, 'xol (nevus)');

  const replacements: [RegExp, string][] = [
    [/\bxollaringiz\b(?!\s*\(nevus\))/gi, 'xollar (nevus)ingiz'],
    [/\bxollarini\b(?!\s*\(nevus\))/gi, 'xollar (nevus)ini'],
    [/\bxollarni\b(?!\s*\(nevus\))/gi, 'xollar (nevus)ni'],
    [/\bxollari\b(?!\s*\(nevus\))/gi, 'xollar (nevus)i'],
    [/\bxollar\b(?!\s*\(nevus\))/gi, 'xollar (nevus)'],
    [/\bxolni\b(?!\s*\(nevus\))/gi, 'xol (nevus)ni'],
    [/\bxolning\b(?!\s*\(nevus\))/gi, 'xol (nevus)ning'],
    [/\bxolga\b(?!\s*\(nevus\))/gi, 'xol (nevus)ga'],
    [/\bxolda\b(?!\s*\(nevus\))/gi, 'xol (nevus)da'],
    [/\bxoldan\b(?!\s*\(nevus\))/gi, 'xol (nevus)dan'],
    [/\bxol\b(?!\s*\(nevus\))/gi, 'xol (nevus)'],
  ];

  for (const [re, repl] of replacements) {
    result = result.replace(re, (match, offset) => {
      const before = result.slice(Math.max(0, offset - 8), offset).toLowerCase();
      if (before.endsWith('qizil ')) return match;
      const isCapitalized = match[0] === match[0].toUpperCase() && match[0] !== match[0].toLowerCase();
      if (!isCapitalized) return repl;
      return repl.charAt(0).toUpperCase() + repl.slice(1);
    });
  }

  return result.replace(/\(nevus\)\s*\(nevus\)/gi, '(nevus)');
}

export function postProcessPriceUz(_ru: string, uz: string): string {
  let result = unprotectTerms(uz);
  result = fixSizeSuffixOrder(result);

  const fixes: [RegExp, string][] = [
    [/^Lazer bilan olib tashlash (.+) \(dan\)$/i, '$1 lazer bilan olib tashlash (dan)'],
    [/^Lazer bilan davolash (.+) \(dan\)$/i, '$1 lazer bilan davolash (dan)'],
    [/\bOlib tashlash\b/g, 'olib tashlash'],
    [/\bDavolash\b/g, 'davolash'],
    [/\bLazer olib tashlash\b/g, 'lazer bilan olib tashlash'],
    [/\bLazer davolash\b/g, 'lazer bilan davolash'],
    [/\bBilan — reaktivniy belok\b/gi, 'C-reaktiv belok'],
    [/\bBilan — reaktivniy\b/gi, 'C-reaktiv'],
    [/\bS — reaktivniy\b/gi, 'C-reaktiv'],
    [/\bdlya problemnoy teri\b/gi, 'muammoli teri uchun'],
    [/\bdlya ochisheniya\b/gi, 'tozalash uchun'],
    [/\bprotiv perxoti\b/gi, 'kechga qarshi'],
    [/\bprotiv vypadeniya volos\b/gi, 'soch to\'kilishiga qarshi'],
    [/\bdlya suxix volos\b/gi, 'quruq soch uchun'],
    [/\bdlya zhirnyx volos\b/gi, 'yog\'li soch uchun'],
    [/\bdlya normalnyx i zhirnyx\b/gi, 'normal va yog\'li soch uchun'],
    [/\bdlya chuvstvitelnoy kozhi golovy\b/gi, 'sezgir bosh terisi uchun'],
    [/\bpenka\b/gi, 'ko\'pik'],
    [/\bobshiy tahlil mochi\b/gi, 'Siydikning umumiy tahlili'],
    [/\bobshiy tahlil krovi\b/gi, 'Qonning umumiy tahlili'],
    [/\bbak tekshiruv so slizistoy\b/gi, 'Bakteriologik tekshiruv: tomoq shilliq qavatidan'],
    [/\bnativniy mazok da trixomoniaz\b/gi, 'Trixomoniyaz uchun native surtma'],
    [/\bvremya svertivaemosti qon\b/gi, 'Qon ivish vaqti'],
    [/\bkaftdan qo'l\b/gi, 'Qo\'l kafti'],
    [/\bayollar qorin\b/gi, 'Ayol qorni'],
    [/\bpodnogtevie borodavki\b/gi, 'Tirnoq osti qaltishti'],
    [/\btransplantatsiya soch \(dan\)\b/gi, 'Soch transplantatsiyasi (dan)'],
    [/\bAnti — SARS — CoV — 2\b/gi, 'Anti-SARS-CoV-2'],
    [/\bVirus Epshteyna — Barra\b/gi, 'Epstein-Barr virusi'],
    [/\bAntitanalar k askaridam\b/gi, 'Askariidga antitanalar'],
    [/\bAntitanalar k kandide\b/gi, 'Kandidaga antitanalar'],
    [/\bqon tomir zvyozdochek da yuzda\b/gi, 'yuzdagi qon tomir yulduzchalarini'],
    [/\bteleangiektaziya da butun tana\b/gi, 'butun tanadagi teleangiektaziyalarni'],
    [/\bteleangiektaziya da qanotlarida burun\b/gi, 'burun qanotlaridagi teleangiektaziyalarni'],
    [/\bgemangioma, angioma, qon tomir o'smalar\b/gi, 'gemangiomalar, angiomalar va qon tomir o\'smalarini'],
    [/\bvenalar da pastki oyoq — qo'llarda\b/gi, 'pastki oyoq-qo\'llardagi venalarni'],
    [/\bintim zone\b/gi, 'intim zona'],
    [/\bverxnix va pastki qovoq\b/gi, 'yuqori va pastki qovoq'],
    [/\bPanch — Biopsiya\b/g, 'Panch-biopsiya'],
    [/\bMezoterapiya:\s*/g, 'Mezoterapiya: '],
    [/\(\s+/g, '('],
    [/\s+\)/g, ')'],
    [/\s{2,}/g, ' '],
  ];

  for (const [re, repl] of fixes) {
    result = result.replace(re, repl);
  }

  result = normalizeMoleTermsUz(result);

  if (/[а-яА-ЯёЁ]/.test(result)) {
    result = result.replace(/[\p{Script=Cyrillic}]+/gu, (run) =>
      run
        .split(/\s+/)
        .map((word) => simpleTransliterateWord(word))
        .join(' '),
    );
  }

  // Capitalize first letter if starts lowercase action phrase
  if (/^[a-z]/.test(result) && /^(olib|davolash|lazer|yuz|qo'l|tirnoq|soch|intim|butun|pastki|burun|gemangioma|trixomon)/i.test(result)) {
    result = result.charAt(0).toUpperCase() + result.slice(1);
  }

  return result.trim();
}

export { protectTerms, unprotectTerms };
