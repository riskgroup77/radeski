import type { Locale } from '../types';

/**
 * Short <title> texts for articles whose own headline is longer than Google shows (~60
 * characters). The on-page H1 keeps the full headline; only the search-result title is
 * shortened, keyword first. The brand ("| Radeski…") is appended when it still fits.
 */
export const ARTICLE_SEO_TITLES: Partial<Record<string, Partial<Record<Locale, string>>>> = {
  'art-akne-dermatolog-kosmetolog': {
    uz: 'Akne: dermatolog yoki kosmetolog davolashi kerak?',
  },
  'art-alopecia-areata-klinik-holat': {
    uz: "Soch to'kilishi: diagnostika va to'g'ri davolash",
    ru: 'Выпадение волос: диагностика вместо шампуня',
    en: "Hair Loss Diagnosis: Why Shampoo Isn't Enough",
  },
  'art-atopic-dermatitis': {
    ru: 'Атопический дерматит: симптомы и лечение',
  },
  'art-bazalioma-teri-raki': {
    uz: 'Bazalioma (teri raki): belgilar va davolash',
    en: 'Basal Cell Carcinoma: Symptoms and Treatment',
  },
  'art-biorevitalizatsiya-radeski': {
    uz: 'Biorevitalizatsiya: ko‘rsatmalar va parvarish',
    en: 'Biorevitalization: Indications and Aftercare',
  },
  'art-bolalarda-sogal-co2-deka': {
    uz: 'Bolalarda so‘gal: CO₂-lazer DEKA bilan olib tashlash',
    ru: 'Бородавки у детей: удаление CO₂-лазером DEKA',
  },
  'art-botulinoterapiya-radeski': {
    en: 'Botox & Dysport for Expression Lines: Aftercare',
  },
  'art-co2-lazer-deka': {
    uz: 'CO₂-lazer DEKA: jarrohliksiz teri yoshartirish',
    ru: 'CO₂-лазер DEKA: омоложение кожи без операции',
  },
  'art-deka-moveo-epilyatsiya-tayyorgarlik': {
    uz: 'DEKA Moveo lazer epilyatsiyasiga tayyorgarlik',
    ru: 'Подготовка к лазерной эпиляции DEKA Moveo',
  },
  'art-deka-moveo-fergana-faq': {
    uz: "DEKA Moveo lazer epilyatsiyasi Farg'onada: FAQ",
    en: 'DEKA Moveo Laser Hair Removal in Fergana: FAQ',
  },
  'art-dermatopatologiya-radeski': {
    uz: 'Dermatopatologiya: biopsiya va o‘sma tashxisi',
  },
  'art-dnevnoj-stacionar-radeski': {
    ru: 'Дневной стационар: обследование и наблюдение врача',
  },
  'art-fizioterapiya-dermatovenereologiya': {
    uz: 'Dermatologiyada fizioterapiya: usullar va foydasi',
    ru: 'Физиотерапия в дерматологии: методы и показания',
    en: 'Physiotherapy in Dermatology: Methods & Benefits',
  },
  'art-hair-transplant-contraindications': {
    uz: "Soch ekishga qarshi ko'rsatmalar",
    ru: 'Противопоказания к пересадке волос',
  },
  'art-ipl-fototerapiya-radeski': {
    uz: 'IPL-fototerapiya: qizarish, pigment va tomirlar',
    ru: 'IPL-фототерапия: покраснения, пигмент и сосуды',
    en: 'IPL Phototherapy: Redness, Pigment & Vessels',
  },
  'art-ipl-terapiya': {
    uz: 'IPL-terapiya Farg‘onada: nima va kimga mos',
    ru: 'IPL-терапия в Фергане: что это и кому подходит',
  },
  'art-jinsiy-azo-yassi-hujayrali-rak': {
    uz: 'Jinsiy a’zo yassi hujayrali raki: belgilar va davolash',
    ru: 'Плоскоклеточный рак полового члена: лечение',
    en: 'Penile Squamous Cell Carcinoma: Signs & Treatment',
  },
  'art-lazer-epilyatsiya-samara-xatolar': {
    uz: 'Lazer epilyatsiya samara bermayaptimi? 3 ta xato',
    ru: 'Лазерная эпиляция не помогает? 3 частые ошибки',
    en: 'Laser Hair Removal Not Working? 3 Common Mistakes',
  },
  'art-onixokriptoz-klinik-holat': {
    uz: "O'sib ketgan tirnoq: klinik holat, Qo'qon",
    ru: 'Вросший ноготь: клинический случай, Коканд',
    en: 'Ingrown Toenail Treatment: Clinical Case, Kokand',
  },
  'art-plazmaferez-teri-kasalliklari': {
    uz: 'Teri kasalliklarida plazmaferez: qachon kerak',
    ru: 'Плазмаферез при кожных заболеваниях: когда нужен',
  },
  'art-plazmotorapiya-soch-prp': {
    uz: 'Soch uchun plazmotorapiya: kimga mos va natija',
    ru: 'Плазмотерапия волос: кому подходит и результаты',
  },
  'art-postakne': {
    uz: "Postakne: chandiq va dog'larni kamaytirish",
  },
  'art-prp-terapiya-oldidan-tahlillar': {
    uz: 'PRP-terapiya oldidan qanday tahlillar kerak?',
    ru: 'Анализы перед PRP-терапией: полный список',
  },
  'art-psoriaz-klinik-keys-bahridinov-radeski': {
    ru: 'Псориаз: клинический случай и лечение',
    en: 'Psoriasis: Clinical Case and Combined Treatment',
  },
  'art-rozatseya-davolash-radeski': {
    uz: 'Rozatseya davolash: yuz qizarishi va tomirlar',
    ru: 'Лечение розацеа: покраснение и сосуды на лице',
    en: 'Rosacea Treatment: Facial Redness and Vessels',
  },
  'art-til-yassi-hujayrali-rak': {
    uz: 'Til raki: birinchi belgilar va davolash',
    ru: 'Рак языка: первые симптомы и лечение',
    en: 'Tongue Cancer (SCC): Early Signs and Treatment',
  },
  'art-trixolog-trixoskopiya': {
    uz: 'Trixoskopiya: soch to‘kilishi sababini aniqlash',
    ru: 'Трихоскопия: диагностика причин выпадения волос',
    en: 'Trichoscopy: Finding the Cause of Hair Loss',
  },
  'art-vitiligo-daavlin': {
    uz: 'Vitiligo davolash: Daavlin fototerapiyasi',
    ru: 'Лечение витилиго фототерапией Daavlin',
  },
};
