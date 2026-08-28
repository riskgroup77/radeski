import type { Locale } from '../types';

/** Preyskurant bo'limlari — rasmiy tartib */
export const PRICE_CATEGORY_ORDER: string[] = [
  'dermatologiya',
  'trihologiya',
  'dermatoonkologiya',
  'dermatokosmetolog',
  'podolog',
  'dermatoonkologiya-2',
  'hirurgicheskaya-dematologiya',
  'lazernoe-udalenie-dobrokachestvennyh-novoobrazovaniy-na-deka-smarxide-punto-so2-lazere',
  'kriohirurgiya',
  'derma-v-sosudistyy-lazer-lechenie-sosudistyh-zvezdochek-kuperoza-i-rozatsii',
  'healinte-fotodinamicheskoe-omolozhenie',
  'hooywood-spectra-lechenie-pigmentatsii-post-akne',
  'allergo-proba-10-punktov',
  'dnevnoy-statsionar',
  'inektsionnaya-kosmetologiya',
  'teosyal',
  'rejuran',
  'lazernaya-ablyatsionnaya-shlifovka-kozhi-glubokaya',
  'lazernaya-ablyatsionnaya-shlifovka-kozhi-poverhnostnaya',
  'lazernaya-ablyatsionnaya-shlifovka-kozhi-srednyaya',
  'lazernaya-epilyatsiya',
  'daavlin-neolux',
  'm-series',
  'eksimer',
  '1-series',
  'arenda-apparatov',
  'daavlin-dermapal',
  'pasport-kozhi',
  'pigmentatsiya',
  'podologiya',
  'morpheus-8-mikroigolchatyy-rf-lifting',
  'transplantatsiya-melanotsitov',
  'trihologiya-2',
  'fizioterapiya',
  'fotoomolozhenie-ipl-lumecca',
  'esteticheskaya-kosmetologiya',
  'kosmeticheskie-sredstva',
  'lrp-antigelios-spf',
  'lrp-tsikoplast-lipikar',
  'cerave',
  'vichi-dercos',
  'vichi-uhodovaya-kosmetika',
  'laboratoriya-umumiy-klinik',
  'laboratoriya-siydik-va-najas',
  'laboratoriya-koagulatsiya',
  'laboratoriya-biokimyo',
  'laboratoriya-gormonal',
  'laboratoriya-infektsiyalar',
  'laboratoriya-immunologiya-allergiya',
  'laboratoriya-mikrobiologiya-pcr',
  'laboratoriya-parazitologiya-mikologiya',
  'laboratoriya-onkomarkerlar',
  'laboratoriya-patomorfologiya',
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
  'allergo-proba-10-punktov': { uz: 'Allergoprobe (10 nuqta)', ru: 'Аллергопроба 10 пунктов', en: 'Allergy panel (10 items)' },
  'arenda-apparatov': { uz: 'Apparatlarni ijaraga berish', ru: 'Аренда аппаратов', en: 'Equipment rental' },
  'vrach-uzi': { uz: 'UZI shifokori', ru: 'Врач УЗИ', en: 'Ultrasound diagnostics' },
  'davlin-dermapal': { uz: 'Davlin Dermapal', ru: 'Davlin Dermapal', en: 'Davlin Dermapal' },
  dermatoonkologiya: {
    uz: 'Dermatoonkologiya (konsultatsiya)',
    ru: 'Дерматоонкология',
    en: 'Dermato-oncology consultations',
  },
  dermatologiya: { uz: 'Dermatologiya', ru: 'Дерматология', en: 'Dermatology' },
  dermatokosmetolog: {
    uz: 'Dermatokosmetolog (konsultatsiya)',
    ru: 'Дерматокосметолог',
    en: 'Dermatocosmetologist consultations',
  },
  podolog: { uz: 'Podolog (konsultatsiya)', ru: 'Подолог', en: 'Podiatrist consultations' },
  'dermatoonkologiya-2': {
    uz: 'Dermatoonkologiya (protseduralar)',
    ru: 'Дерматоонкология (процедуры)',
    en: 'Dermato-oncology procedures',
  },
  'derma-v-sosudistyy-lazer-lechenie-sosudistyh-zvezdochek-kuperoza-i-rozatsii': {
    uz: 'Derma V — qon tomir lazer davolash',
    ru: 'Derma V — сосудистый лазер (лечение сосудистых звёздочек, купероза и розации)',
    en: 'Derma V vascular laser therapy',
  },
  'healinte-fotodinamicheskoe-omolozhenie': {
    uz: 'Healite II (fotodinamik yoshartirish)',
    ru: 'Healite II (фотодинамическое омоложение)',
    en: 'Healite II photodynamic rejuvenation',
  },
  'hooywood-spectra-lechenie-pigmentatsii-post-akne': {
    uz: 'Hollywood Spectra (pigmentatsiya, post-akne)',
    ru: 'Hollywood Spectra (лечение пигментации, пост-акне)',
    en: 'Hollywood Spectra (pigmentation, post-acne)',
  },
  'daavlin-neolux': { uz: 'Daavlin NeoLux', ru: 'Daavlin Neolux', en: 'Daavlin NeoLux' },
  'm-series': { uz: 'Davlin M seriyasi', ru: 'M series', en: 'Davlin M series' },
  '1-series': { uz: 'Davlin 1 seriyasi', ru: '1 series', en: 'Davlin 1 series' },
  'morpheus-8-mikroigolchatyy-rf-lifting': {
    uz: 'Morpheus 8 RF lifting',
    ru: 'Morpheus 8 микроигольчатый RF лифтинг',
    en: 'Morpheus 8 microneedle RF lifting',
  },
  'trihologiya-2': {
    uz: 'Trihologiya (soch kasalliklarini davolash va protseduralar)',
    ru: 'Трихология (лечение)',
    en: 'Trichology treatments',
  },
  'kosmeticheskie-sredstva': {
    uz: 'Kosmetik vositalar',
    ru: 'Косметические средства',
    en: 'Cosmetic products',
  },
  cerave: { uz: 'CeraVe', ru: 'CeraVe', en: 'CeraVe' },
  'vichi-uhodovaya-kosmetika': {
    uz: 'Vichy teri parvarishi',
    ru: 'Vichy уходовая косметика',
    en: 'Vichy skincare',
  },
  'apparatnaya-kosmetologiya': { uz: 'Apparatli kosmetologiya', ru: 'Аппаратная косметология', en: 'Device-based cosmetology' },
  'injektsionnaya-kosmetologiya': { uz: 'Inyeksion kosmetologiya', ru: 'Инъекционная косметология', en: 'Injection cosmetology' },
  'dnevnoy-statsionar': { uz: 'Kunduzgi statsionar', ru: 'Дневной стационар', en: 'Day hospital' },
  'inektsionnaya-kosmetologiya': { uz: 'Inyeksion kosmetologiya', ru: 'Инъекционная косметология', en: 'Injection cosmetology' },
  konsultatsii: { uz: 'Konsultatsiyalar', ru: 'Консультации', en: 'Consultations' },
  kriohirurgiya: { uz: 'Krioxirurgiya', ru: 'Криохирургия', en: 'Cryosurgery' },
  'la-rosh': { uz: 'La Roche-Posay', ru: 'La Roche-Posay', en: 'La Roche-Posay' },
  laboratoriya: { uz: 'Laboratoriya tahlillari', ru: 'Лаборатория', en: 'Laboratory tests' },
  'laboratoriya-umumiy-klinik': {
    uz: 'Laboratoriya: umumiy klinik tahlillar',
    ru: 'Лаборатория: общеклинические анализы',
    en: 'Laboratory: general clinical tests',
  },
  'laboratoriya-siydik-va-najas': {
    uz: 'Laboratoriya: siydik va najas tahlillari',
    ru: 'Лаборатория: анализы мочи и кала',
    en: 'Laboratory: urine and stool tests',
  },
  'laboratoriya-koagulatsiya': {
    uz: 'Laboratoriya: koagulatsiya va gemostaz',
    ru: 'Лаборатория: коагуляция и гемостаз',
    en: 'Laboratory: coagulation and hemostasis',
  },
  'laboratoriya-biokimyo': {
    uz: 'Laboratoriya: biokimyo va mikroelementlar',
    ru: 'Лаборатория: биохимия и микроэлементы',
    en: 'Laboratory: biochemistry and trace elements',
  },
  'laboratoriya-gormonal': {
    uz: 'Laboratoriya: gormonal tahlillar',
    ru: 'Лаборатория: гормональные анализы',
    en: 'Laboratory: hormonal tests',
  },
  'laboratoriya-infektsiyalar': {
    uz: 'Laboratoriya: infeksiyalar va serologiya',
    ru: 'Лаборатория: инфекции и серология',
    en: 'Laboratory: infections and serology',
  },
  'laboratoriya-immunologiya-allergiya': {
    uz: 'Laboratoriya: immunologiya va allergiya',
    ru: 'Лаборатория: иммунология и аллергология',
    en: 'Laboratory: immunology and allergy',
  },
  'laboratoriya-mikrobiologiya-pcr': {
    uz: 'Laboratoriya: mikrobiologiya, bakteriologiya va PTSR',
    ru: 'Лаборатория: микробиология, бактериология и ПЦР',
    en: 'Laboratory: microbiology, bacteriology and PCR',
  },
  'laboratoriya-parazitologiya-mikologiya': {
    uz: 'Laboratoriya: parazitologiya va mikologiya',
    ru: 'Лаборатория: паразитология и микология',
    en: 'Laboratory: parasitology and mycology',
  },
  'laboratoriya-onkomarkerlar': {
    uz: 'Laboratoriya: onkomarkerlar',
    ru: 'Лаборатория: онкомаркеры',
    en: 'Laboratory: tumor markers',
  },
  'laboratoriya-patomorfologiya': {
    uz: 'Laboratoriya: gistologiya va biopsiya',
    ru: 'Лаборатория: гистология и биопсия',
    en: 'Laboratory: histology and biopsy',
  },
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
  pigmentatsiya: { uz: 'Trixopigmentatsiya', ru: 'Пигментация', en: 'Trichopigmentation' },
  podologiya: { uz: 'Podologiya', ru: 'Подология', en: 'Podiatry' },
  provizor: { uz: 'Provizor / sarf materiallari', ru: 'Провизор', en: 'Pharmacy / consumables' },
  rejuran: { uz: 'Rejuran', ru: 'Rejuran', en: 'Rejuran' },
  'rf-morfeus-8': { uz: 'RF Morpheus 8', ru: 'RF Morpheus 8', en: 'RF Morpheus 8' },
  statsionar: { uz: 'Statsionar', ru: 'Стационар', en: 'Inpatient ward' },
  'transplantatsiya-melanotsitov': { uz: 'Melanotsit transplantatsiyasi', ru: 'Трансплантация меланоцитов', en: 'Melanocyte transplantation' },
  trihologiya: { uz: 'Trihologiya (konsultatsiya)', ru: 'Трихология', en: 'Trichology consultations' },
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
  'tsifrovaya-dematologiya-dermatoskopiya': { uz: 'Raqamli dermatologiya (dermatoskopiya)', ru: 'Цифровая дерматоскопия', en: 'Digital dermatoscopy' },
  eksimer: { uz: 'Excimer lazer', ru: 'Эксимер', en: 'Excimer laser' },
  endosfera: { uz: 'Endosfera', ru: 'Эндосфера', en: 'Endosphere' },
  'esteticheskaya-kosmetologiya': { uz: 'Estetik kosmetologiya', ru: 'Эстетическая косметология', en: 'Aesthetic cosmetology' },
};

const CATEGORY_ALIASES: Record<string, string> = {
  rezhuran: 'rejuran',
  'injektsionnaya-kosmetologiya': 'inektsionnaya-kosmetologiya',
  'in-ekcionnaya-kosmetologiya': 'inektsionnaya-kosmetologiya',
  'trihologiya-centr-lechenie-volos': 'trihologiya',
  dermatoonkolog: 'dermatoonkologiya',
  'lazernaya-epilyaciya': 'lazernaya-epilyatsiya',
  tserave: 'cerave',
  'vichi-uhodovaya': 'vichi-uhodovaya-kosmetika',
  healinte: 'healinte-fotodinamicheskoe-omolozhenie',
  'hooywood-spectra': 'hooywood-spectra-lechenie-pigmentatsii-post-akne',
  'derma-v': 'derma-v-sosudistyy-lazer-lechenie-sosudistyh-zvezdochek-kuperoza-i-rozatsii',
  'rf-morfeus-8': 'morpheus-8-mikroigolchatyy-rf-lifting',
  'neo-lyuks': 'daavlin-neolux',
  'm-seriya': 'm-series',
  '1-serniya-davlin': '1-series',
  konsultatsii: 'dermatologiya',
  'clinika-patologii-nogtej': 'podologiya',
};

/**
 * Preyskurant bo'limlari → backend service category_id.
 * API faqat xizmat kategoriyalari ID sini qabul qiladi (masalan dermatoonkologiya).
 */
const API_PARENT_FOR_PRICE_CATEGORIES: Record<string, string[]> = {
  dermatologiya: [
    'dermatologiya',
    'dermatokosmetolog',
    'podolog',
    'laboratoriya',
    'laboratoriya-umumiy-klinik',
    'laboratoriya-siydik-va-najas',
    'laboratoriya-koagulatsiya',
    'laboratoriya-biokimyo',
    'laboratoriya-gormonal',
    'laboratoriya-infektsiyalar',
    'laboratoriya-immunologiya-allergiya',
    'laboratoriya-mikrobiologiya-pcr',
    'laboratoriya-parazitologiya-mikologiya',
    'laboratoriya-onkomarkerlar',
    'laboratoriya-patomorfologiya',
    'dnevnoy-statsionar',
    'allergo-proba-10-punktov',
    'kosmeticheskie-sredstva',
    'lrp-antigelios-spf',
    'lrp-tsikoplast-lipikar',
    'cerave',
    'vichi-dercos',
    'vichi-uhodovaya-kosmetika',
  ],
  dermatoonkologiya: [
    'dermatoonkologiya',
    'dermatoonkologiya-2',
    'pasport-kozhi',
    'pigmentatsiya',
    'transplantatsiya-melanotsitov',
  ],
  'trihologiya-centr-lechenie-volos': ['trihologiya', 'trihologiya-2'],
  'apparatnaya-kosmetologiya': [
    'fotoomolozhenie-ipl-lumecca',
    'esteticheskaya-kosmetologiya',
    'hooywood-spectra-lechenie-pigmentatsii-post-akne',
    'morpheus-8-mikroigolchatyy-rf-lifting',
    'derma-v-sosudistyy-lazer-lechenie-sosudistyh-zvezdochek-kuperoza-i-rozatsii',
    'healinte-fotodinamicheskoe-omolozhenie',
    'daavlin-neolux',
    'm-series',
    'eksimer',
    '1-series',
    'daavlin-dermapal',
    'fizioterapiya',
    'arenda-apparatov',
  ],
  'in-ekcionnaya-kosmetologiya': ['inektsionnaya-kosmetologiya', 'teosyal', 'rejuran'],
  dermatoskopiya: [
    'tsifrovaya-dematologiya-dermatoskopiya',
    'pasport-kozhi',
    'dermatoonkolog',
    'konsultatsii',
  ],
  'lazernaya-epilyaciya': ['lazernaya-epilyatsiya'],
  'hirurgicheskaya-dermatologiya': [
    'hirurgicheskaya-dermatologiya',
    'hirurgicheskaya-dematologiya',
    'kriohirurgiya',
    'lazernoe-udalenie-dobrokachestvennyh-novoobrazovaniy-na-deka-smarxide-punto-so2-lazere',
    'lazernaya-ablyatsionnaya-shlifovka-kozhi-glubokaya',
    'lazernaya-ablyatsionnaya-shlifovka-kozhi-poverhnostnaya',
    'lazernaya-ablyatsionnaya-shlifovka-kozhi-srednyaya',
  ],
  'clinika-patologii-nogtej': ['podologiya'],
};

const PRICE_TO_API_CATEGORY: Record<string, string> = (() => {
  const map: Record<string, string> = {};

  for (const [apiId, priceId] of Object.entries(CATEGORY_ALIASES)) {
    map[priceId] = apiId;
  }

  for (const [apiId, priceIds] of Object.entries(API_PARENT_FOR_PRICE_CATEGORIES)) {
    for (const priceId of priceIds) {
      map[priceId] = apiId;
    }
  }

  return map;
})();

/** API yoki preyskurant category_id ni preyskurant bo'limi ID siga aylantiradi (admin forma uchun) */
export function toPriceSectionCategory(categoryId: string): string {
  const id = categoryId.trim();
  if (!id) return 'dermatologiya';
  if (PRICE_CATEGORY_ORDER.includes(id)) return id;

  const alias = CATEGORY_ALIASES[id];
  if (alias && PRICE_CATEGORY_ORDER.includes(alias)) return alias;

  for (const [apiId, priceIds] of Object.entries(API_PARENT_FOR_PRICE_CATEGORIES)) {
    if (apiId === id) {
      const match = priceIds.find((priceId) => PRICE_CATEGORY_ORDER.includes(priceId));
      if (match) return match;
    }
  }

  return id;
}

/**
 * Admin/API ga yuborish uchun haqiqiy service category_id ni aniqlaydi.
 * Preyskurant bo'limi (masalan dermatoonkolog) → API ID (masalan dermatoonkologiya).
 */
export function resolvePriceCategoryForApi(
  categoryId: string,
  serviceCategoryIds: string[] = [],
): string {
  const normalized = categoryId.trim();
  if (!normalized) return 'dermatologiya';

  const mapped = priceCategoryToApiId(normalized);

  if (serviceCategoryIds.length === 0) {
    return mapped;
  }

  if (serviceCategoryIds.includes(mapped)) return mapped;
  if (serviceCategoryIds.includes(normalized)) return normalized;

  for (const serviceId of serviceCategoryIds) {
    if (priceCategoryToApiId(serviceId) === mapped) return serviceId;
  }

  return mapped;
}

/** Preyskurant/katalog category_id ni API ga yuborish uchun service category_id ga aylantiradi */
export function priceCategoryToApiId(categoryId: string): string {
  if (!categoryId) return 'dermatologiya';
  return PRICE_TO_API_CATEGORY[categoryId] ?? categoryId;
}

/** API category_id ni preyskurant ko'rinishi uchun (agar alias bo'lsa) */
export function apiCategoryToPriceCategory(categoryId: string): string {
  return CATEGORY_ALIASES[categoryId] ?? categoryId;
}

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
