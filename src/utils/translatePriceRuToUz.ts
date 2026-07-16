/**
 * Ruscha preyskurant nomlarini o'zbekchaga professional tarjima qilish.
 * Qisman substring almashtirish ishlatilmaydi — faqat to'liq iboralar va so'zma-so'z lug'at.
 */
import type { Locale } from '../types';
import exactUz from '../data/priceTranslationsUz.json';
import { COSMETIC_EXACT_PHRASES_UZ } from '../data/priceCosmeticExactUz';
import { SURGERY_EXACT_PHRASES_UZ } from '../data/priceSurgeryExactUz';
import { LASER_THERAPY_EXACT_PHRASES_UZ } from '../data/priceLaserTherapyExactUz';
import { INJECTION_EXACT_PHRASES_UZ } from '../data/priceInjectionExactUz';
import { REJURAN_RESURFACING_EXACT_PHRASES_UZ } from '../data/priceRejuranResurfacingExactUz';
import { EPILATION_MISC_EXACT_PHRASES_UZ } from '../data/priceEpilationMiscExactUz';
import { SERVICES_EXACT_PHRASES_UZ } from '../data/priceServicesExactUz';
import { ADVANCED_SERVICES_EXACT_PHRASES_UZ } from '../data/priceAdvancedServicesExactUz';
import { LAB_EXACT_PHRASES_UZ } from '../data/priceLabExactUz';
import {
  postProcessPriceUz,
  protectTerms,
  tryStructuralTranslateRuToUz,
} from './priceTranslationStructureUz';

const TYPO_FIXES: [string, string][] = [
  ['гемагингиом', 'гемангиом'],
  ['новооброзование', 'новообразование'],
  ['новооброзований', 'новообразований'],
  ['новооброзовании', 'новообразовании'],
  ['осморт', 'осмотр'],
  ['Hooywood', 'Hollywood'],
  ['1 серния', '1 серия'],
  ['давлин', 'Davlin'],
  ['Лечения', 'Лечение'],
  ['Лечении', 'Лечение'],
  ['Авидность', 'Антитела'],
];

/** To'liq moslik — eng ustuvor */
const EXACT_PHRASES_UZ: [string, string][] = [
  ...SURGERY_EXACT_PHRASES_UZ,
  ...LASER_THERAPY_EXACT_PHRASES_UZ,
  ...INJECTION_EXACT_PHRASES_UZ,
  ...REJURAN_RESURFACING_EXACT_PHRASES_UZ,
  ...EPILATION_MISC_EXACT_PHRASES_UZ,
  ['Первичный осмотр врача дерматовениролога', 'Dermatovenerolog shifokorining birinchi ko\'rigi'],
  ['Повторный осмотр врача дерматовениролога', 'Dermatovenerolog shifokorining takroriy ko\'rigi'],
  ['Первичный осмотр врача трихолога + трихоскопия', 'Trixolog shifokorining birinchi ko\'rigi + trixoskopiya'],
  ['Повторный осмотр врача трихолога', 'Trixolog shifokorining takroriy ko\'rigi'],
  ['Первичный осмотр врача дерматоонколога + дерматоскопия', 'Dermatoonkolog shifokorining birinchi ko\'rigi + dermatoskopiya'],
  ['Повторная консультация к врачу дерматоонколога', 'Dermatoonkolog shifokoriga takroriy konsultatsiya'],
  [
    'Первичный осмотр врача дерматокосметолога + сканирование лица на аппарате JANUS PRO',
    'Dermatokosmetolog shifokorining birinchi ko\'rigi + JANUS PRO apparatida yuz skanerlash',
  ],
  ['Повторный осмотр врача дерматокосметолога', 'Dermatokosmetolog shifokorining takroriy ko\'rigi'],
  ['Первичная консультация подолога', 'Podologning birinchi konsultatsiyasi'],
  ['Повторный осмотр подолога', 'Podologning takroriy ko\'rigi'],
  [
    'Микрографическое хирургическое удаление злокачественных новообразований кожи по методу "Mohs" (базовый пакет с привлечением пластического хирурга)',
    'Mohs usuli bo\'yicha xavfli teri o\'smalarini mikrografik xirurgik olib tashlash (asosiy paket, plastik xirurg jalb qilingan)',
  ],
  [
    'Микрографическое хирургическое удаление злокачественных новообразований кожи по методу "Mohs" (базовый пакет)',
    'Mohs usuli bo\'yicha xavfli teri o\'smalarini mikrografik xirurgik olib tashlash (asosiy paket)',
  ],
  [
    'Микрографическое хирургическое удаление злокачественных новообразований кожи по методу "Mohs" в периорбитальной области (реконструктивный этап выполняется офтальмохирургом, д.м.н.)',
    'Mohs usuli bo\'yicha ko\'z atrofi (periorbital) hududidagi xavfli teri o\'smalarini olib tashlash (rekonstruktiv bosqich oftalmoxirurg, d.m.n. tomonidan)',
  ],
  [
    'Радиоволновая хирургия 1 образования (доброкачественные внутридермальные новообразования кожи - родинки/невусы) с анестезией',
    '1 ta xavfsiz ichki teri o\'smasini (xol (nevus)) radioto\'lqin xirurgiyasi, anesteziya bilan',
  ],
  [
    'Радиоволновая хирургия 1 образования (доброкачественные эпидермальные новообразования кожи - кератомы, родинки/невусы) с анестезией',
    '1 ta xavfsiz epidermal teri o\'smasini (keratoma, xol (nevus)) radioto\'lqin xirurgiyasi, anesteziya bilan',
  ],
  [
    'Радиоволновая хирургия 1 образования в сложных анатомических зонах (веки, паховая область, слизистые) с анестезией',
    'Murakkab anatomik zonadagi 1 ta o\'smani radioto\'lqin xirurgiyasi (ko\'z qovoqlari, inguinal hudud, shilliq qavatlar), anesteziya bilan',
  ],
  [
    'Радиоволновое удаление контагиозного моллюска (за 1 элемент): до 10 образований',
    'Yuqumli mol\'yuskni radioto\'lqin bilan olib tashlash (1 ta element uchun, 10 tagacha o\'sma)',
  ],
  [
    'Хирургическое удаление доброкачественных новообразований кожи больших размеров и новообразований кожи, которые расположены в анатомически сложных участках І уровня сложности',
    'Katta hajmdagi va I darajali murakkab anatomik joylashuvdagi xavfsiz teri o\'smalarini xirurgik olib tashlash',
  ],
  ['Shave (Шейв) - удаление новообразований кожи', 'Shave (seyv) — teri o\'smalarini olib tashlash'],
  ['Удаление родинок (от)', 'Xol (nevus)larni olib tashlash (dan)'],
  ['Удаление новообразований (от)', 'O\'smalarni olib tashlash (dan)'],
  ['Удаление новообразований (от)', 'O\'smalarni olib tashlash (dan)'],
  ['Операция (Базалиома)', 'Operatsiya (bazalioma)'],
  ['Гистологическое исследование', 'Gistologik tekshiruv'],
  ['Панч биопсия', 'Panch-biopsiya'],
  ['Биопсия', 'Biopsiya'],
  ['Женские руки полностью', 'Ayollar qo\'llari to\'liq'],
  ['Женские ноги полностью', 'Ayollar oyoqlari to\'liq'],
  ['Лицо полностью', 'Yuz to\'liq'],
  ['Кисти рук и пальцы', 'Qo\'l kafti va barmoqlar'],
  ['Тыл стоп + пальцы', 'Tovon orqasi + barmoqlar'],
  ['задняя часть шеи', 'Bo\'yinning orqa qismi'],
  ['Первая степень сложности (один-два элемента)', 'Birinchi murakkablik darajasi (1–2 element)'],
  ['Вторая степень сложности (от трех до семи элементов)', 'Ikkinchi murakkablik darajasi (3–7 element)'],
  ['Третья степень сложности (от восьми до пятнадцати элементов)', 'Uchinchi murakkablik darajasi (8–15 element)'],
  ['Криодеструкция рубца аэрозольным методом', 'Chandiqni aerozol usulida kriyodestruksiya qilish'],
  [
    'Криохирургия немеланомных злокачественных опухолей кожи (Базальноклеточный карцинома, плоскоклеточная карцинома)',
    'Terining nemelanom xavfli o\'smalarini krioxirurgiya (bazal hujayrali va tekis hujayrali kartsinoma)',
  ],
  [
    'Криохирургия предраковых состояний кожи (лейкоплакия, актинический кератоз, актинический хейлит, болезнь Боуэна)',
    'Terining saraton oldi holatlarini krioxirurgiya (leykoplakiya, aktinik keratoz, aktinik xeylit, Bouen kasalligi)',
  ],
  [
    'Лазерное лечение бородавок с помощью аппарата PinPoint laser за 1 кв.см (1 сеанс)',
    'PinPoint laser apparati bilan mayda zgardalarni lazer davolash (1 kv.sm, 1 seans)',
  ],
  ['Инъкция в/м без расходного материала', 'Intramuskulyar inyeksiya (sarf materialisiz)'],
  ['капельница без расходных материалов', 'Tomchi terapiya (sarf materiallarisiz)'],
  ['Нео люкс', 'Neo Lux'],
  [
    'Лечение акне, красноты, пост-акне (gold toning)',
    'Akne, qizarish va post-akneni davolash (gold toning)',
  ],
  ['Карбоновый пилинг+ gold toning', 'Karbonli piling + gold toning'],
  ['Лечение купероза и розации', 'Kuperoz va rozatseani davolash'],
  [
    'СА-242 раковый антиген для диагностики рака поджелудочной железы толстог7о кишечника прямой кишки',
    'SA-242 — oshqozon osti bezi, qalin ichak va to\'g\'ri ichak saratonini aniqlash uchun onkogen antigen',
  ],
  [
    'Комплекс: (Cand.albicans, Cand.glabrata, Cand.krusei) (мазок, моча, ротоглотка)',
    'Kompleks: Candida albicans, C. glabrata, C. krusei (surtma, siydik, og\'iz-boqish)',
  ],
  [
    'Скрин Микоз РТ-ПЦР(выявление и типированиевозбудителей грибковых инфекций)',
    'Mikoz skriningi RT-PTSR (zamburug\' infeksiyalari qo\'zg\'atolchilarini aniqlash va tipizatsiya qilish)',
  ],
  [
    '12-ОРЗ-панель РТ-ПЦР (острые респираторные заболевания)',
    '12-ORZ panel RT-PTSR (o\'tkir respirator kasalliklar)',
  ],
  [
    'АБ-ГенРезиста РТ-ПЦР (выявление генов резистентности к антибиотикам)',
    'AB-GenRezista RT-PTSR (antibiotiklarga chidamlilik genlarini aniqlash)',
  ],
  ...COSMETIC_EXACT_PHRASES_UZ,
  ...SERVICES_EXACT_PHRASES_UZ,
  ...ADVANCED_SERVICES_EXACT_PHRASES_UZ,
  ...LAB_EXACT_PHRASES_UZ,
];

const WORDS_UZ: Record<string, string> = {
  первичный: 'birinchi',
  первичная: 'birinchi',
  повторный: 'takroriy',
  повторная: 'takroriy',
  осмотр: 'ko\'rik',
  консультация: 'konsultatsiya',
  врача: 'shifokor',
  врачу: 'shifokoriga',
  врач: 'shifokor',
  удаление: 'olib tashlash',
  лечение: 'davolash',
  операция: 'operatsiya',
  биопсия: 'biopsiya',
  панч: 'panch',
  гистологическое: 'gistologik',
  исследование: 'tekshiruv',
  исследования: 'tekshiruv',
  новообразований: 'o\'smalar',
  новообразования: 'o\'sma',
  новообразование: 'o\'sma',
  образований: 'o\'smalar',
  образования: 'o\'sma',
  образование: 'o\'sma',
  кожи: 'teri',
  коже: 'terida',
  кожа: 'teri',
  родинок: 'xollar (nevus)',
  родинки: 'xollar (nevus)',
  родинка: 'xol (nevus)',
  невусы: 'nevuslar',
  невус: 'nevus',
  кератомы: 'keratomalar',
  кератома: 'keratoma',
  анестезией: 'anesteziya bilan',
  анестезия: 'anesteziya',
  лазерное: 'lazer',
  лазерная: 'lazer',
  лазерный: 'lazer',
  лазер: 'lazer',
  удалении: 'olib tashlash',
  удаления: 'olib tashlash',
  удалить: 'olib tashlash',
  доброкачественных: 'xavfsiz',
  доброкачественные: 'xavfsiz',
  злокачественных: 'xavfli',
  эпидермальных: 'epidermal',
  эпидермальные: 'epidermal',
  внутридермальные: 'ichki teri',
  внутридермальных: 'ichki teri',
  хирургическое: 'xirurgik',
  хирургическая: 'xirurgik',
  хирургический: 'xirurgik',
  микрографическое: 'mikrografik',
  радиоволновая: 'radioto\'lqin',
  радиоволновое: 'radioto\'lqin',
  радиоволновой: 'radioto\'lqin',
  контагиозного: 'yuqumli',
  моллюска: 'mol\'yusk',
  элемент: 'element',
  элементов: 'element',
  элементы: 'element',
  за: 'uchun',
  от: 'dan',
  до: 'gacha',
  с: 'bilan',
  и: 'va',
  на: 'da',
  в: '',
  по: 'bo\'yicha',
  методу: 'usuli',
  пакет: 'paket',
  базовый: 'asosiy',
  базовая: 'asosiy',
  привлечением: 'jalb qilingan',
  пластического: 'plastik',
  хирурга: 'xirurg',
  лицо: 'yuz',
  лица: 'yuz',
  лице: 'yuzda',
  щеки: 'yonoq',
  щека: 'yonoq',
  нос: 'burun',
  носа: 'burun',
  лоб: 'peshona',
  шея: 'bo\'yin',
  шеи: 'bo\'yin',
  декольте: 'dekolte',
  руки: 'qo\'llar',
  рук: 'qo\'l',
  ноги: 'oyoqlar',
  ног: 'oyoq',
  волосы: 'sochlar',
  волос: 'soch',
  ногтей: 'tirnoqlar',
  ноготь: 'tirnoq',
  ногтя: 'tirnoq',
  зона: 'zona',
  зоны: 'zona',
  бикини: 'bikini',
  бровей: 'qosh',
  татуажа: 'tatuaj',
  татуировки: 'tatuiruvka',
  татуировка: 'tatuiruvka',
  пигментации: 'pigmentatsiya',
  пигментация: 'pigmentatsiya',
  пигментацию: 'pigmentatsiya',
  рубцов: 'chandiqlar',
  рубца: 'chandiq',
  рубц: 'chandiq',
  акне: 'akne',
  розацеа: 'rozatsea',
  розации: 'rozatsea',
  купероза: 'kuperoz',
  купероз: 'kuperoz',
  гемангиом: 'gemangioma',
  гемангиомы: 'gemangiomalar',
  ангиом: 'angioma',
  ангиомы: 'angiomalar',
  сосудистых: 'qon tomir',
  сосудистые: 'qon tomir',
  звездочек: 'yulduzchalar',
  звездочки: 'yulduzcha',
  телеангиэтазий: 'teleangiektaziya',
  телеангиэтазии: 'teleangiektaziya',
  вен: 'venalar',
  вены: 'vena',
  нижних: 'pastki',
  конечностях: 'oyoq-qo\'llarda',
  конечностей: 'oyoq-qo\'llar',
  крыльях: 'qanotlarida',
  всём: 'butun',
  теле: 'tana',
  телу: 'tanada',
  чистка: 'tozalash',
  механическая: 'mexanik',
  ультразвуковая: 'ultratovush',
  уход: 'parvarish',
  фотоомоложение: 'foto-yoshartirish',
  фототерапия: 'fototerapiya',
  эпиляция: 'epilyatsiya',
  эпиляции: 'epilyatsiya',
  криодеструкция: 'kriyodestruksiya',
  криохирургия: 'krioxirurgiya',
  биоревитализация: 'biorevitalizatsiya',
  мезотерапия: 'mezoterapiya',
  плазмотерапия: 'plazmoterapiya',
  контурная: 'kontur',
  пластика: 'plastika',
  губ: 'lab',
  инъекции: 'inyeksiyalar',
  инъекция: 'inyeksiya',
  инъекционная: 'inyeksion',
  ботулотоксина: 'botulotoksin',
  ботулотоксин: 'botulotoksin',
  процедура: 'protsedura',
  процедуры: 'protsedura',
  процедур: 'protsedura',
  сеанс: 'seans',
  сеанса: 'seans',
  серия: 'seriya',
  серии: 'seriya',
  осветление: 'yoritish',
  коррекция: 'tuzatish',
  шлифовка: 'shlifovka',
  абляционная: 'ablyatsion',
  абляционной: 'ablyatsion',
  глубокая: 'chuqur',
  средняя: 'o\'rta',
  поверхностная: 'yuza',
  пилинг: 'piling',
  карбоновый: 'karbonli',
  пост: 'post',
  качественный: 'sifatli',
  количественный: 'miqdoriy',
  антитела: 'antitanalar',
  антител: 'antitanalar',
  кровь: 'qon',
  крови: 'qon',
  слюна: 'tupruk',
  слюны: 'tupruk',
  гепатит: 'gepatit',
  туберкулез: 'sil kasalligi',
  анализ: 'tahlil',
  тест: 'test',
  забор: 'olib olish',
  бесплатно: 'bepul',
  интимной: 'intim',
  интимная: 'intim',
  области: 'hudud',
  область: 'hudud',
  век: 'qovoq',
  веки: 'qovoq',
  верних: 'yuqori',
  нижних: 'pastki',
  мм: 'mm',
  см: 'sm',
  см2: 'sm²',
  первая: 'birinchi',
  вторая: 'ikkinchi',
  третья: 'uchinchi',
  степень: 'daraja',
  сложности: 'murakkabligi',
  сложность: 'murakkablik',
  одного: 'bitta',
  один: 'bir',
  два: 'ikki',
  двух: 'ikki',
  трех: 'uch',
  трёх: 'uch',
  семи: 'yetti',
  восьми: 'sakkiz',
  пятнадцати: 'o\'n besh',
  аэрозольным: 'aerozol',
  методом: 'usulida',
  немеланомных: 'nemelanom',
  опухолей: 'o\'smalar',
  опухоли: 'o\'sma',
  базальноклеточный: 'bazal hujayrali',
  плоскоклеточная: 'tekis hujayrali',
  карцинома: 'kartsinoma',
  предраковых: 'saraton oldi',
  состояний: 'holatlari',
  состояния: 'holati',
  лейкоплакия: 'leykoplakiya',
  актинический: 'aktinik',
  актиническая: 'aktinik',
  кератоз: 'keratoz',
  хейлит: 'xeylit',
  болезнь: 'kasallik',
  боуэна: 'Bouen',
  инъкция: 'inyeksiya',
  капельница: 'tomchi terapiya',
  расходного: 'sarf',
  расходных: 'sarf',
  материала: 'materiali',
  материалов: 'materiallari',
  без: 'siz',
  женские: 'ayollar',
  женская: 'ayollar',
  женский: 'ayollar',
  женское: 'ayollar',
  мужские: 'erkaklar',
  мужская: 'erkaklar',
  мужской: 'erkaklar',
  полностью: 'to\'liq',
  пальцы: 'barmoqlar',
  пальцев: 'barmoq',
  тыл: 'orqa',
  стоп: 'tovon',
  задняя: 'orqa',
  часть: 'qism',
  части: 'qismi',
  верхняя: 'yuqori',
  нижние: 'pastki',
  губа: 'lab',
  включая: 'jumladan',
  ареолы: 'areola',
  молочных: 'sut',
  желез: 'bezlari',
  белая: 'oq',
  линия: 'chiziq',
  живота: 'qorin',
  живот: 'qorin',
  спина: 'orqa',
  спины: 'orqa',
  бедер: 'son',
  колена: 'tizza',
  локтя: 'tirsak',
  локоть: 'tirsak',
  ягодицы: 'dumba',
  классическое: 'klassik',
  подмышечные: 'qoltiq',
  впадины: 'chuqurligi',
  бакенбарды: 'bakkenbardlar',
  бородавок: 'zgar',
  помощью: 'yordamida',
  аппарата: 'apparat',
  кв: 'kv',
  рубец: 'chandiq',
  стрии: 'striyalar',
  тело: 'tana',
  генотипирование: 'genotiplashtirish',
  вирус: 'virus',
  сальмонеллёз: 'salmalyonellyoz',
  хламидия: 'xlamidiya',
  пневмония: 'pnevmoniya',
  бруцеллез: 'brutsellyoz',
  краснухе: 'qizamiq',
  токоплазме: 'toksoplazma',
  токсоплазме: 'toksoplazma',
  площадь: 'maydon',
  зон: 'zona',
  упаковка: 'qadoq',
  упаковки: 'qadoq',
  флакон: 'flakon',
  тюбик: 'tyubik',
  мл: 'ml',
  мг: 'mg',
  таблетки: 'tabletka',
  капсулы: 'kapsula',
  крем: 'krem',
  сыворотка: 'syvorotka',
  шампунь: 'shampun',
  маска: 'maska',
  тоник: 'tonik',
  молочко: 'sut',
  увлажняющий: 'namlovchi',
  восстанавливающий: 'tiklovchi',
  защитный: 'himoya',
  солнцезащитный: 'quyoshdan himoya',
  дневной: 'kunduzgi',
  ночной: 'tungi',
  универсальный: 'universal',
  набор: 'to\'plam',
  комплекс: 'kompleks',
  курс: 'kurs',
  межбровье: 'qoshlar orasi',
  титановая: 'titan',
  нить: 'ip',
  дарсонваль: 'Darsonval',
  бальзам: 'balzam',
  для: 'uchun',
  чувствительной: 'sezgir',
  чувствительная: 'sezgir',
  размером: 'o\'lchamida',
  ладонь: 'kaft',
  одна: 'bitta',
  вуаль: 'vual',
  спрей: 'sprey',
  очищающий: 'tozalovchi',
  тела: 'tana',
  цикопласт: 'Cicaplast',
  липикар: 'Lipikar',
  сканирование: 'skanerlash',
  аппарате: 'apparatda',
  дня: 'kun',
  дней: 'kun',
};

const EXACT_UZ_MAP: Record<string, string> = {
  ...(exactUz as Record<string, string>),
};

const SORTED_EXACT_PHRASES = [...EXACT_PHRASES_UZ].sort((a, b) => b[0].length - a[0].length);

function normalizeKey(text: string): string {
  return text
    .toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/\s+/g, ' ')
    .trim();
}

function applyTypos(text: string): string {
  let result = text;
  for (const [from, to] of TYPO_FIXES) {
    result = result.replace(new RegExp(escapeRegExp(from), 'gi'), to);
  }
  return result;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** So'z chegarasida iborani almashtirish — ichki qismni buzmaydi */
function applyBoundaryPhrases(text: string, phrases: [string, string][]): string {
  let result = text;
  for (const [from, to] of phrases) {
    const pattern = new RegExp(
      `(?<![\\p{L}\\p{N}])${escapeRegExp(from)}(?![\\p{L}\\p{N}])`,
      'giu',
    );
    result = result.replace(pattern, to);
  }
  return result;
}

function translateToken(token: string): string {
  if (!token) return token;
  if (!/[а-яА-ЯёЁ]/.test(token)) return token;

  const lower = token.toLowerCase();
  // "С" (Cyrillic es) as standalone abbreviation — not preposition "s/bilan"
  if (token.length === 1 && lower === 'с') return 'C';

  const mapped = WORDS_UZ[lower];
  if (mapped !== undefined) {
    if (!mapped) return '';
    const isCapital = token[0] === token[0].toUpperCase() && token[0] !== token[0].toLowerCase();
    if (!isCapital) return mapped;
    return mapped.charAt(0).toUpperCase() + mapped.slice(1);
  }

  return transliterateToken(token);
}

function transliterateToken(token: string): string {
  const map: Record<string, string> = {
    а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'j',
    з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o',
    п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'x', ц: 'ts',
    ч: 'ch', ш: 'sh', щ: 'sh', ъ: '', ы: 'i', ь: '', э: 'e', ю: 'yu', я: 'ya',
  };
  return token
    .split('')
    .map((char) => {
      const lower = char.toLowerCase();
      const tr = map[lower];
      if (!tr) return char;
      return char === lower ? tr : tr.charAt(0).toUpperCase() + tr.slice(1);
    })
    .join('');
}

function translateFragment(text: string): string {
  const protectedText = protectTerms(text);
  const structural = tryStructuralTranslateRuToUz(protectedText, translateFragment);
  if (structural) return structural;

  const tokens = tokenizeRussian(protectedText);
  return tokens
    .map((token) => {
      if (!/[а-яА-ЯёЁ]/.test(token)) return token;
      return translateToken(token);
    })
    .join('');
}

function tokenizeRussian(text: string): string[] {
  const tokens: string[] = [];
  let current = '';
  let mode: 'cyr' | 'lat' | 'other' = 'other';

  const flush = () => {
    if (current) tokens.push(current);
    current = '';
  };

  for (const char of text) {
    if (/[а-яА-ЯёЁ]/.test(char)) {
      if (mode !== 'cyr') flush();
      mode = 'cyr';
      current += char;
    } else if (/[a-zA-Z0-9]/.test(char)) {
      if (mode !== 'lat') flush();
      mode = 'lat';
      current += char;
    } else {
      flush();
      mode = 'other';
      tokens.push(char);
    }
  }
  flush();
  return tokens;
}

function cleanupUz(text: string): string {
  return text
    .replace(/\u044C/g, '')
    .replace(/\u044A/g, '')
    .replace(/\s+([,.;:!?])/g, '$1')
    .replace(/\(\s+/g, '(')
    .replace(/\s+\)/g, ')')
    .replace(/\s*—\s*/g, ' — ')
    .replace(/(?<=[\p{L}\p{N}])\s*-\s*(?=[\p{L}\p{N}])/gu, '-')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+da\s+da/g, 'da')
    .replace(/\s+bilan\s+bilan/g, 'bilan')
    .trim();
}

export function translatePriceRuToUz(nameRu: string): string {
  const normalized = applyTypos(nameRu.trim());
  if (!normalized) return '';

  const exactKey = normalizeKey(normalized);

  for (const [from, to] of EXACT_PHRASES_UZ) {
    if (normalizeKey(from) === exactKey) return postProcessPriceUz(normalized, to);
  }

  const protectedText = protectTerms(normalized);
  const structural = tryStructuralTranslateRuToUz(protectedText, translateFragment);
  if (structural) {
    return postProcessPriceUz(normalized, structural);
  }

  const cached = EXACT_UZ_MAP[exactKey];
  if (cached && !/[а-яА-ЯёЁ]/.test(cached)) {
    return postProcessPriceUz(normalized, cached);
  }

  const text = applyBoundaryPhrases(protectedText, SORTED_EXACT_PHRASES);
  const translated = translateFragment(text);
  return postProcessPriceUz(normalized, cleanupUz(finalizeCyrillic(translated)));
}

/** Qolgan kirill qismlarini tozalash */
function finalizeCyrillic(text: string): string {
  if (!/[а-яА-ЯёЁ]/.test(text)) return text;
  return text.replace(/[\p{Script=Cyrillic}]+/gu, (run) =>
    tokenizeRussian(run).map((t) => translateToken(t)).join(''),
  );
}
