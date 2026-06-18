import type { Locale } from '../types';

const TYPO_FIXES: [string, string][] = [
  ['гемагингиом', 'гемангиом'],
  ['новооброзование', 'новообразование'],
  ['осморт', 'осмотр'],
  ['ботулакс', 'ботулотоксин'],
  ['Hooywood', 'Hollywood'],
  ['1 серния', '1 серия'],
  ['давлин', 'Davlin'],
  ['Лечения', 'Лечение'],
  ['Лечении', 'Лечение'],
];

const PHRASES_UZ: [string, string][] = [
  ['Микрографическое хирургическое удаление злокачественных новообразований кожи по методу "Mohs"', 'Mohs usuli bo\'yicha xavfli teri o\'smalarini mikrografik xirurgik olib tashlash'],
  ['Лазерное удаление доброкачественных эпидермальных новообразований кожи', 'Terining xavfsiz epidermal o\'smalarini lazer bilan olib tashlash'],
  ['Лазерное удаление доброкачественных новообразований кожи', 'Terining xavfsiz o\'smalarini lazer bilan olib tashlash'],
  ['Радиоволновая хирургия 1 образования (доброкачественные внутридермальные новообразования кожи - родинки/невусы) с анестезией', '1 ta ichki teri o\'smasini (xol/nevus) radioto\'lqin xirurgiyasi, anesteziya bilan'],
  ['Радиоволновая хирургия 1 образования (доброкачественные эпидермальные новообразования кожи - кератомы, родинки/невусы) с анестезией', '1 ta epidermal o\'smani radioto\'lqin xirurgiyasi, anesteziya bilan'],
  ['Первичная консультация и осмотр', 'Birinchi konsultatsiya va ko\'rik'],
  ['Повторная консультация и осмотр', 'Takroriy konsultatsiya va ko\'rik'],
  ['Первичный осмотр врача', 'Shifokorning birinchi ko\'rigi'],
  ['Повторный осмотр врача', 'Shifokorning takroriy ko\'rigi'],
  ['Трансвагинальное (ТВ) исследование матки и яичников с допплерографией', 'Bachadon va tuxumdonlarni transvaginal (TV) tekshiruv, doppler bilan'],
  ['Трансвагинальное (ТВ) исследование матки и яичников', 'Bachadon va tuxumdonlarni transvaginal (TV) tekshiruv'],
  ['Трансабдоминальное (ТА) исследование матки и яичников с допплерографией', 'Bachadon va tuxumdonlarni transabdominal (TA) tekshiruv, doppler bilan'],
  ['Трансабдоминальное (ТА) исследование матки и яичников', 'Bachadon va tuxumdonlarni transabdominal (TA) tekshiruv'],
  ['Лазерная абляционная шлифовка кожи', 'Terini lazer ablyatsion shlifovkasi'],
  ['Лазерное удаление вен на нижних конечностях', 'Pastki oyoq-qo\'llardagi venalarni lazer bilan olib tashlash'],
  ['Лазерное удаление сосудистых звездочек на лице', 'Yuzdagi qon tomir yulduzchalarini lazer bilan olib tashlash'],
  ['Лазерное удаление телеангиэтазий на крыльях носа', 'Burun qanotlaridagi teleangiektaziyalarni lazer bilan olib tashlash'],
  ['Лазерное удаление телеангиэтазий на всём теле', 'Butun tanadagi teleangiektaziyalarni lazer bilan olib tashlash'],
  ['Лазерное лечение гемангиом, ангиом, сосудистых новообразований', 'Gemangiomalar, angiomalar va qon tomir o\'smalarini lazer davolash'],
  ['удаление пигментации все лицо', 'Butun yuz pigmentatsiyasini olib tashlash'],
  ['Лечение пигментации лицо', 'Yuz pigmentatsiyasini davolash'],
  ['Лечение пигментации щеки', 'Yonoq pigmentatsiyasini davolash'],
  ['Лечение пигментации до 5 см2', '5 sm² gacha pigmentatsiyani davolash'],
  ['Лечение пигментации до 10 см 2', '10 sm² gacha pigmentatsiyani davolash'],
  ['Лечения пигментации', 'Pigmentatsiyani davolash'],
  ['Осветление зоны бикини', 'Bikini zonasini yoritish'],
  ['Удаление татуажа бровей', 'Qosh tatuajini olib tashlash'],
  ['Удаление татуировки', 'Tatuiruvkani olib tashlash'],
  ['Лечение рубцов', 'Chandiqlarni davolash'],
  ['Face art лечение розацеа акне', 'Face Art — rozatsea va akneni davolash'],
  ['Лечение акне, красноты, пост акне (gold toning)', 'Akne, qizarish va post-akneni davolash (gold toning)'],
  ['карбоновый пилинг+ gold toning', 'Karbonli piling + gold toning'],
  ['Процедура 1 серия', '1-seriya protsedura'],
  ['сосудистых новообразований', 'qon tomir o\'smalari'],
  ['новообразований', 'o\'smalar'],
  ['пигментации', 'pigmentatsiyasi'],
  ['пигментация', 'pigmentatsiya'],
  ['родинки', 'xollar'],
  ['невусы', 'nevuslar'],
  ['кератомы', 'keratomalar'],
  ['зоны бикини', 'bikini zonasi'],
  ['бровей', 'qoshlar'],
  ['рубцов', 'chandiqlar'],
  ['рубца', 'chandiq'],
  ['розацеа', 'rozatsea'],
  ['акне', 'akne'],
  ['онихомикоза', 'onixomikoz'],
  ['телеангиэтазий', 'teleangiektaziyalar'],
  ['звездочек', 'yulduzchalar'],
  ['гемангиом', 'gemangiomalar'],
  ['ангиом', 'angiomalar'],
  ['Лазерное лечение гемангиом', 'Gemangiomalarni lazer davolash'],
  ['Лечение онихомикоза ногтей', 'Tirnoq onixomikozini davolash'],
  ['Механическая чистка лица', 'Yuzni mexanik tozalash'],
  ['Ультразвуковая чистка лица', 'Yuzni ultratovush bilan tozalash'],
  ['Уход за кожей лица', 'Yuz terisini parvarish qilish'],
  ['Чистка на аппарате aquapire', 'Aquapire apparatida tozalash'],
  ['Гистологическое исследование', 'Gistologik tekshiruv'],
  ['Фотоомоложение кожи', 'Terini foto-yoshartirish'],
  ['Фотоомоложение', 'Foto-yoshartirish'],
  ['Лазерная эпиляция', 'Lazer epilyatsiyasi'],
  ['Лазерное удаление', 'Lazer bilan olib tashlash'],
  ['Лазерное лечение', 'Lazer davolashi'],
  ['Контурная пластика губ', 'Lab kontur plastikasi'],
  ['Контурная пластика', 'Kontur plastikasi'],
  ['Инъекции Ботулотоксина', 'Botulotoksin inyeksiyalari'],
  ['Удаление родинок', 'Xolarni olib tashlash'],
  ['Удаление новообразований', 'O\'smalarni olib tashlash'],
  ['Удаление татуажа', 'Tatuajni olib tashlash'],
  ['Удаление татуировки', 'Tatuiruvkani olib tashlash'],
  ['Лечение пигментации', 'Pigmentatsiyani davolash'],
  ['Лечение акне', 'Akneni davolash'],
  ['Лечение рубцов', 'Chandiqlarni davolash'],
  ['Лечение купероза и розации', 'Kuperoz va rozatseani davolash'],
  ['Лечение купероза', 'Kuperozni davolash'],
  ['Коррекция рубца', 'Chandiqni tuzatish'],
  ['Панч биопсия', 'Panch biopsiyasi'],
  ['Чистка лица', 'Yuzni tozalash'],
  ['Повторный осмотр', 'Takroriy ko\'rik'],
  ['Первичный осмотр', 'Birinchi ko\'rik'],
  ['Криодеструкция', 'Kriyodestruksiya'],
  ['Криохирургия', 'Krioxirurgiya'],
  ['Биоревитализация', 'Biorevitalizatsiya'],
  ['Мезотерапия', 'Mezoterapiya'],
  ['Плазмотерапия', 'Plazmoterapiya'],
  ['Фототерапия', 'Fototerapiya'],
  ['Консультация', 'Konsultatsiya'],
  ['Инъекции', 'Inyeksiyalar'],
  ['Инъекция', 'Inyeksiya'],
  ['Удаление', 'Olib tashlash'],
  ['Лечение', 'Davolash'],
  ['Осмотр', 'Ko\'rik'],
  ['Процедура', 'Protsedura'],
  ['Операция', 'Operatsiya'],
  ['Обработка', 'Ishlov berish'],
  ['Осветление', 'Yoritish'],
  ['карбоновый пилинг', 'karbonli piling'],
  ['на нижних конечностях', 'pastki oyoq-qo\'llarda'],
  ['на крыльях носа', 'burun qanotlarida'],
  ['на всём теле', 'butun tanada'],
  ['на лице', 'yuzda'],
  ['всё лицо', 'butun yuz'],
  ['всего лица', 'butun yuz'],
  ['с анестезией', 'anesteziya bilan'],
  ['с допплерографией', 'doppler bilan'],
  ['за 1 элемент', '1 ta element uchun'],
  ['за сеанс', '1 seans uchun'],
  ['1 ноготь', '1 ta tirnoq'],
  ['1 серия', '1-seriya'],
  ['от ', 'dan '],
  ['до ', 'gacha '],
  ['процедур', 'protsedura'],
  ['процедура', 'protsedura'],
  ['сеанс', 'seans'],
  ['Волосы', 'Sochlar'],
  ['волосы', 'sochlar'],
  ['Лицо', 'Yuz'],
  ['лицо', 'yuz'],
  ['Щеки', 'Yonoqlar'],
  ['щеки', 'yonoqlar'],
  ['Нос', 'Burun'],
  ['нос', 'burun'],
  ['Лоб', 'Peshona'],
  ['Шея', 'Bo\'yin'],
  ['шея', 'bo\'yin'],
  ['декольте', 'dekolte'],
  ['Декольте', 'Dekolte'],
  ['руки', 'qo\'llar'],
  ['Руки', 'Qo\'llar'],
  ['ноги', 'oyoqlar'],
  ['Ноги', 'Oyoqlar'],
  ['ногтей', 'tirnoqlar'],
  ['кожи', 'teri'],
  ['кожа', 'teri'],
  ['зона', 'zona'],
  ['Зона', 'Zona'],
  ['Забор крови', 'Qon olish'],
  ['крови', 'qon'],
  ['анализ', 'tahlil'],
  ['Электрокардиография', 'EKG (elektrokardiografiya)'],
  ['Фолликулометрия', 'Follikulometriya'],
  ['Базалиома', 'Bazalioma'],
  ['Бесплатно', 'Bepul'],
];

const PHRASES_EN: [string, string][] = [
  ['Микрографическое хирургическое удаление злокачественных новообразований кожи по методу "Mohs"', 'Mohs micrographic surgery for malignant skin lesions'],
  ['Лазерное удаление доброкачественных эпидермальных новообразований кожи', 'Laser removal of benign epidermal skin lesions'],
  ['Лазерное удаление доброкачественных новообразований кожи', 'Laser removal of benign skin lesions'],
  ['Первичная консультация и осмотр', 'Primary consultation and examination'],
  ['Повторная консультация и осмотр', 'Follow-up consultation and examination'],
  ['Первичный осмотр врача', 'Primary physician examination'],
  ['Повторный осмотр врача', 'Follow-up physician examination'],
  ['Трансвагинальное (ТВ) исследование матки и яичников с допплерографией', 'Transvaginal ultrasound of uterus and ovaries with Doppler'],
  ['Трансвагинальное (ТВ) исследование матки и яичников', 'Transvaginal ultrasound of uterus and ovaries'],
  ['Трансабдоминальное (ТА) исследование матки и яичников с допплерографией', 'Transabdominal ultrasound of uterus and ovaries with Doppler'],
  ['Трансабдоминальное (ТА) исследование матки и яичников', 'Transabdominal ultrasound of uterus and ovaries'],
  ['Лазерная абляционная шлифовка кожи', 'Laser ablative skin resurfacing'],
  ['Лазерное удаление вен на нижних конечностях', 'Laser removal of leg veins'],
  ['Лазерное удаление сосудистых звездочек на лице', 'Laser removal of facial spider veins'],
  ['Лазерное удаление телеангиэтазий на крыльях носа', 'Laser treatment of nose telangiectasias'],
  ['Лазерное удаление телеангиэтазий на всём теле', 'Laser treatment of body telangiectasias'],
  ['Лазерное лечение гемангиом', 'Laser treatment of hemangiomas'],
  ['удаление пигментации все лицо', 'Full-face pigmentation removal'],
  ['Лечение пигментации лицо', 'Facial pigmentation treatment'],
  ['Лечение пигментации щеки', 'Cheek pigmentation treatment'],
  ['Осветление зоны бикини', 'Bikini area lightening'],
  ['Удаление татуажа бровей', 'Eyebrow permanent makeup removal'],
  ['Face art лечение розацеа акне', 'Face Art rosacea and acne treatment'],
  ['Лечение акне, красноты, пост акне (gold toning)', 'Acne, redness and post-acne treatment (gold toning)'],
  ['карбоновый пилинг+ gold toning', 'Carbon peel + gold toning'],
  ['Процедура 1 серия', 'Session 1 procedure'],
  ['Лечение онихомикоза ногтей', 'Onychomycosis nail treatment'],
  ['Механическая чистка лица', 'Manual facial cleansing'],
  ['Ультразвуковая чистка лица', 'Ultrasonic facial cleansing'],
  ['Уход за кожей лица', 'Facial skin care'],
  ['Гистологическое исследование', 'Histology examination'],
  ['Фотоомоложение кожи', 'Skin photorejuvenation'],
  ['Фотоомоложение', 'Photorejuvenation'],
  ['Лазерная эпиляция', 'Laser hair removal'],
  ['Лазерное удаление', 'Laser removal'],
  ['Лазерное лечение', 'Laser treatment'],
  ['Контурная пластика губ', 'Lip contouring'],
  ['Контурная пластика', 'Contour plastic'],
  ['Инъекции Ботулотоксина', 'Botulinum toxin injections'],
  ['Удаление родинок', 'Mole removal'],
  ['Удаление новообразований', 'Lesion removal'],
  ['Удаление татуажа', 'Permanent makeup removal'],
  ['Удаление татуировки', 'Tattoo removal'],
  ['Лечение пигментации', 'Pigmentation treatment'],
  ['Лечение акне', 'Acne treatment'],
  ['Лечение рубцов', 'Scar treatment'],
  ['Лечение купероза и розации', 'Couperose and rosacea treatment'],
  ['Коррекция рубца', 'Scar correction'],
  ['Панч биопсия', 'Punch biopsy'],
  ['Чистка лица', 'Facial cleansing'],
  ['Повторный осмотр', 'Follow-up visit'],
  ['Первичный осмотр', 'Primary examination'],
  ['Криодеструкция', 'Cryodestruction'],
  ['Криохирургия', 'Cryosurgery'],
  ['Биоревитализация', 'Biorevitalization'],
  ['Мезотерапия', 'Mesotherapy'],
  ['Плазмотерапия', 'Plasma therapy (PRP)'],
  ['Фототерапия', 'Phototherapy'],
  ['Консультация', 'Consultation'],
  ['Инъекции', 'Injections'],
  ['Инъекция', 'Injection'],
  ['Удаление', 'Removal'],
  ['Лечение', 'Treatment'],
  ['Осмотр', 'Examination'],
  ['Процедура', 'Procedure'],
  ['Операция', 'Surgery'],
  ['Обработка', 'Treatment'],
  ['на всём теле', 'full body'],
  ['на нижних конечностях', 'lower limbs'],
  ['на лице', 'on face'],
  ['на крыльях носа', 'on nose wings'],
  ['всё лицо', 'full face'],
  ['всего лица', 'full face'],
  ['с анестезией', 'with anesthesia'],
  ['с допплерографией', 'with Doppler'],
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
  ['зона', 'zone'],
  ['Волосы', 'Hair'],
  ['Лицо', 'Face'],
  ['Забор крови', 'Blood draw'],
  ['Электрокардиография', 'Electrocardiography (ECG)'],
  ['Фолликулометрия', 'Folliculometry'],
  ['Базалиома', 'Basal cell carcinoma'],
  ['Бесплатно', 'Free'],
];

function sortPhrases(phrases: [string, string][]): [string, string][] {
  return [...phrases].sort((a, b) => b[0].length - a[0].length);
}

const SORTED_PHRASES_UZ = sortPhrases(PHRASES_UZ);
const SORTED_PHRASES_EN = sortPhrases(PHRASES_EN);

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
    result = result.replace(new RegExp(escapeRegExp(from), 'gi'), to);
  }
  return result.replace(/\s+/g, ' ').trim();
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Qolgan kirill so'zlarni lotincha transkriptsiya qilish (oxirgi zaxira). */
function transliterateRuToLatin(text: string): string {
  const map: Record<string, string> = {
    а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'j',
    з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o',
    п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'x', ц: 'ts',
    ч: 'ch', ш: 'sh', щ: 'sh', ъ: '', ы: 'i', ь: '', э: 'e', ю: 'yu', я: 'ya',
  };

  return text
    .split('')
    .map((char) => {
      const lower = char.toLowerCase();
      const tr = map[lower];
      if (!tr) return char;
      return char === lower ? tr : tr.charAt(0).toUpperCase() + tr.slice(1);
    })
    .join('');
}

export function localizePriceName(nameRu: string, locale: Locale): string {
  const normalized = applyTypos(nameRu.trim());
  if (!normalized) return '';

  if (locale === 'ru') return normalized;

  const phrases = locale === 'uz' ? SORTED_PHRASES_UZ : SORTED_PHRASES_EN;
  let result = applyPhrases(normalized, phrases);

  if (locale === 'uz' && /[а-яА-ЯёЁ]/.test(result)) {
    result = transliterateRuToLatin(result);
  }

  return result.replace(/\s+/g, ' ').trim();
}
