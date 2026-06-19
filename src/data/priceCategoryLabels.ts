import type { Locale } from '../types';

/** Preyskurant bo'limlari — rasmiy tartib */
export const PRICE_CATEGORY_ORDER: string[] = [
  'konsultatsii',
  'bazovyy',
  '1-serniya-davlin',
  'derma-v',
  'dermatoonkolog',
  'hirurgicheskaya-dermatologiya',
  'hirurgicheskaya-dematologiya',
  'kriohirurgiya',
  'lazernoe-udalenie-dobrokachestvennyh-novoobrazovaniy-na-deka-smarxide-punto-so2-lazere',
  'lazer-pinpoint',
  'lazernaya-ablyatsionnaya-shlifovka-kozhi-glubokaya',
  'lazernaya-ablyatsionnaya-shlifovka-kozhi-srednyaya',
  'lazernaya-ablyatsionnaya-shlifovka-kozhi-poverhnostnaya',
  'lazernaya-epilyatsiya',
  'fotoomolozhenie-ipl-lumecca',
  'fotoomolozhenie-lechenie-sosudistyh-patologiy-rozatsea',
  'fotolechenie-acne-forever-clear',
  'fototerapiya',
  'hooywood-spectra',
  'rf-morfeus-8',
  'inektsionnaya-kosmetologiya',
  'esteticheskaya-kosmetologiya',
  'rejuran',
  'trihologiya',
  'transplantatsiya-melanotsitov',
  'pigmentatsiya',
  'tsifrovaya-dematologiya-dermatoskopiya',
  'pasport-kozhi',
  'podologiya',
  'fizioterapiya',
  'eksimer',
  'davlin-dermapal',
  'dnevnoy-statsionar',
  'statsionar',
  'laboratoriya',
  'allergo-proba-10-punktov',
  'arenda-apparatov',
  'healinte',
  'neo-lyuks',
  'm-seriya',
  'teosyal',
  'vichi-dercos',
  'vichi-uhodovaya',
  'la-rosh',
  'lrp-antigelios-spf',
  'lrp-tsikoplast-lipikar',
  'tserave',
  'provizor',
];

const CATEGORY_LABELS: Record<string, Record<Locale, string>> = {
  bazovyy: { uz: 'Asosiy', ru: 'Базовый', en: 'Basic' },
  '1-serniya-davlin': { uz: 'Davlin — 1 seriya', ru: '1 серия Davlin', en: 'Davlin — 1 session' },
  'derma-v': { uz: 'Derma V (lazer terapiya)', ru: 'Derma V', en: 'Derma V laser therapy' },
  eptaderm: { uz: 'Eptaderm mahsulotlari', ru: 'Eptaderm', en: 'Eptaderm products' },
  healinte: { uz: 'Healite II', ru: 'Healinte', en: 'Healite II' },
  'hooywood-spectra': { uz: 'Hollywood Spectra lazer', ru: 'Hollywood Spectra', en: 'Hollywood Spectra laser' },
  teosyal: { uz: 'TEOSYAL fillerlari', ru: 'TEOSYAL', en: 'TEOSYAL fillers' },
  'vichi-dercos': { uz: 'Vichy Dercos (soch parvarishi)', ru: 'Vichy Dercos', en: 'Vichy Dercos hair care' },
  'vichi-uhodovaya': { uz: 'Vichy teri parvarishi', ru: 'Vichy уходовая', en: 'Vichy skincare' },
  'allergo-proba-10-punktov': { uz: 'Allergo-test (10 punkt)', ru: 'Аллергопроба 10 пунктов', en: 'Allergy panel (10 items)' },
  'arenda-apparatov': { uz: 'Apparatlarni ijaraga berish', ru: 'Аренда аппаратов', en: 'Equipment rental' },
  'vrach-uzi': { uz: 'UZI shifokori', ru: 'Врач УЗИ', en: 'Ultrasound diagnostics' },
  'davlin-dermapal': { uz: 'Davlin Dermapal', ru: 'Davlin Dermapal', en: 'Davlin Dermapal' },
  dermatoonkolog: { uz: 'Dermatoonkologiya', ru: 'Дерматоонколог', en: 'Dermato-oncology' },
  dermatologiya: { uz: 'Dermatologiya', ru: 'Дерматология', en: 'Dermatology' },
  'apparatnaya-kosmetologiya': { uz: 'Apparat kosmetologiya', ru: 'Аппаратная косметология', en: 'Device-based cosmetology' },
  'injektsionnaya-kosmetologiya': { uz: 'Inyeksion kosmetologiya', ru: 'Инъекционная косметология', en: 'Injection cosmetology' },
  'dnevnoy-statsionar': { uz: 'Kunduzgi statsionar', ru: 'Дневной стационар', en: 'Day hospital' },
  'inektsionnaya-kosmetologiya': { uz: 'Inyeksion kosmetologiya', ru: 'Инъекционная косметология', en: 'Injection cosmetology' },
  konsultatsii: { uz: 'Konsultatsiyalar', ru: 'Консультации', en: 'Consultations' },
  kriohirurgiya: { uz: 'Krioxirurgiya', ru: 'Криохирургия', en: 'Cryosurgery' },
  'la-rosh': { uz: 'La Roche-Posay', ru: 'La Roche-Posay', en: 'La Roche-Posay' },
  laboratoriya: { uz: 'Laboratoriya tahlillari', ru: 'Лаборатория', en: 'Laboratory tests' },
  'lazer-pinpoint': { uz: 'PinPoint lazer', ru: 'Лазер PinPoint', en: 'PinPoint laser' },
  'lazernaya-ablyatsionnaya-shlifovka-kozhi-glubokaya': {
    uz: 'Lazer ablyatsion shlifovka (chuqur)',
    ru: 'Лазерная абляционная шлифовка (глубокая)',
    en: 'Laser ablative resurfacing (deep)',
  },
  'lazernaya-ablyatsionnaya-shlifovka-kozhi-poverhnostnaya': {
    uz: 'Lazer ablyatsion shlifovka (yuza)',
    ru: 'Лазерная абляционная шлифовка (поверхностная)',
    en: 'Laser ablative resurfacing (superficial)',
  },
  'lazernaya-ablyatsionnaya-shlifovka-kozhi-srednyaya': {
    uz: 'Lazer ablyatsion shlifovka (o\'rta)',
    ru: 'Лазерная абляционная шлифовка (средняя)',
    en: 'Laser ablative resurfacing (medium)',
  },
  'lazernaya-epilyatsiya': { uz: 'Lazer epilyatsiya', ru: 'Лазерная эпиляция', en: 'Laser hair removal' },
  'lazernoe-udalenie-dobrokachestvennyh-novoobrazovaniy-na-deka-smarxide-punto-so2-lazere': {
    uz: 'DEKA SmartXide CO2 lazer bilan olib tashlash',
    ru: 'Лазерное удаление на DEKA SmartXide CO2',
    en: 'DEKA SmartXide CO2 laser removal',
  },
  'lrp-antigelios-spf': { uz: 'LRP Anthelios SPF', ru: 'LRP Anthelios (SPF)', en: 'LRP Anthelios SPF' },
  'lrp-tsikoplast-lipikar': { uz: 'LRP Cicaplast / Lipikar', ru: 'LRP Cicaplast, Lipikar', en: 'LRP Cicaplast / Lipikar' },
  'm-seriya': { uz: 'M-seriya', ru: 'М серия', en: 'M series' },
  'neo-lyuks': { uz: 'Neo Lux', ru: 'NEO Lux', en: 'Neo Lux' },
  'pasport-kozhi': { uz: 'Teri pasporti', ru: 'Паспорт кожи', en: 'Skin passport' },
  pigmentatsiya: { uz: 'Pigmentatsiya', ru: 'Пигментация', en: 'Pigmentation' },
  podologiya: { uz: 'Podologiya', ru: 'Подология', en: 'Podiatry' },
  provizor: { uz: 'Provizor / sarf materiallari', ru: 'Провизор', en: 'Pharmacy / consumables' },
  rejuran: { uz: 'Rejuran', ru: 'Rejuran', en: 'Rejuran' },
  'rf-morfeus-8': { uz: 'RF Morpheus 8', ru: 'RF Morpheus 8', en: 'RF Morpheus 8' },
  statsionar: { uz: 'Statsionar', ru: 'Стационар', en: 'Inpatient ward' },
  'transplantatsiya-melanotsitov': { uz: 'Melanotsit transplantatsiyasi', ru: 'Трансплантация меланоцитов', en: 'Melanocyte transplantation' },
  trihologiya: { uz: 'Trihologiya', ru: 'Трихология', en: 'Trichology' },
  fizioterapiya: { uz: 'Fizioterapiya', ru: 'Физиотерапия', en: 'Physiotherapy' },
  'fotolechenie-acne-forever-clear': { uz: 'Forever Clear akne fotodavolash', ru: 'Forever Clear — лечение акне', en: 'Forever Clear acne phototherapy' },
  'fotoomolozhenie-forever-young': { uz: 'Forever Young foto-yoshartirish', ru: 'Фотоомоложение Forever Young', en: 'Forever Young photorejuvenation' },
  'fotoomolozhenie-ipl-lumecca': { uz: 'IPL Lumecca foto-yoshartirish', ru: 'Фотоомоложение IPL (Lumecca)', en: 'IPL Lumecca photorejuvenation' },
  'fotoomolozhenie-bbl-bbl-omolozhenie': { uz: 'IPL foto-yoshartirish', ru: 'Фотоомоложение IPL', en: 'IPL photorejuvenation' },
  'fotoomolozhenie-lechenie-sosudistyh-patologiy-rozatsea': {
    uz: 'Qon tomir va rozatsea fotodavolash',
    ru: 'Лечение сосудов и розацеа',
    en: 'Vascular lesions & rosacea phototherapy',
  },
  fototerapiya: { uz: 'Fototerapiya (UVB / Excimer)', ru: 'Фототерапия', en: 'Phototherapy (UVB / Excimer)' },
  'hirurgicheskaya-dematologiya': { uz: 'Xirurgik dermatologiya', ru: 'Хирургическая дерматология', en: 'Surgical dermatology' },
  'hirurgicheskaya-dermatologiya': { uz: 'Xirurgik dermatologiya', ru: 'Хирургическая дерматология', en: 'Surgical dermatology' },
  tserave: { uz: 'CeraVe', ru: 'CeraVe', en: 'CeraVe' },
  'tsifrovaya-dematologiya-dermatoskopiya': { uz: 'Raqamli dermatologiya (FotoFinder)', ru: 'Цифровая дерматоскопия', en: 'Digital dermatoscopy (FotoFinder)' },
  eksimer: { uz: 'Excimer lazer', ru: 'Эксимер', en: 'Excimer laser' },
  endosfera: { uz: 'Endosfera', ru: 'Эндосфера', en: 'Endosphere' },
  'esteticheskaya-kosmetologiya': { uz: 'Estetik kosmetologiya', ru: 'Эстетическая косметология', en: 'Aesthetic cosmetology' },
};

const CATEGORY_ALIASES: Record<string, string> = {
  rezhuran: 'rejuran',
  'injektsionnaya-kosmetologiya': 'inektsionnaya-kosmetologiya',
  trikhologiya: 'trihologiya',
  dermatoonkologiya: 'dermatoonkolog',
  'lazernaya-epilyaciya': 'lazernaya-epilyatsiya',
};

function resolveCategoryKey(categoryId: string): string {
  return CATEGORY_ALIASES[categoryId] ?? categoryId;
}

export function getPriceCategoryLabel(categoryId: string, locale: Locale): string {
  const key = resolveCategoryKey(categoryId);
  const labels = CATEGORY_LABELS[key];
  if (labels?.[locale]) return labels[locale];
  return categoryId;
}
export function getPriceCategoryOptions(locale: Locale): { id: string; title: string }[] {
  return PRICE_CATEGORY_ORDER.map((id) => ({
    id,
    title: getPriceCategoryLabel(id, locale),
  })).filter((item) => item.title);
}
