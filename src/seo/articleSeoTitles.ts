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
  'art-qotir': {
    uz: "Qo'tir (skabiyez): davolash — Farg'ona, Qo'qon",
    ru: 'Чесотка: признаки и лечение — Фергана, Коканд',
    en: 'Scabies: signs and treatment — Fergana, Kokand',
  },
  'art-seboreyali-keratoz': {
    uz: "Seboreyali keratoz: olib tashlash — Farg'ona, Qo'qon",
    ru: 'Себорейный кератоз: удаление — Фергана, Коканд',
    en: 'Seborrheic keratosis: removal — Fergana, Kokand',
  },
  'art-bolalarda-teri-toshmalari': {
    uz: 'Bolalarda teri toshmalari: qachon xavotir olish kerak',
    ru: 'Сыпь у ребёнка: когда волноваться — Фергана, Коканд',
    en: 'Rashes in children: when to worry — Fergana, Kokand',
  },
  'art-pushti-temiratki': {
    uz: 'Pushti temiratki (Jiber): belgilari va parvarish',
    ru: 'Розовый лишай Жибера: признаки и уход',
    en: 'Pityriasis rosea: signs and care — Fergana, Kokand',
  },
  'art-striya': {
    uz: "Cho'zilish izlari (striya): davolash — Farg'ona",
    ru: 'Растяжки (стрии): лечение — Фергана, Коканд',
    en: 'Stretch marks: treatment — Fergana, Kokand',
  },
  'art-ayollarda-soch-tokilishi': {
    uz: "Ayollarda soch to'kilishi: sabablari va davolash",
    ru: 'Выпадение волос у женщин: причины и лечение',
    en: 'Hair loss in women: causes and treatment',
  },
  'art-perioral-dermatit': {
    uz: "Perioral dermatit: og'iz atrofidagi toshma — davolash",
    ru: 'Периоральный дерматит: сыпь вокруг рта — лечение',
    en: 'Perioral dermatitis: rash around the mouth',
  },
  'art-xol-tekshiruvi-dermatoskopiya': {
    uz: "Xol tekshiruvi va dermatoskopiya — Farg'ona, Qo'qon",
    ru: 'Проверка родинок и дерматоскопия — Фергана, Коканд',
    en: 'Mole check and dermoscopy — Fergana, Kokand',
  },
  'art-papilloma-olib-tashlash': {
    uz: "Papilloma olib tashlash: usullar — Farg'ona, Qo'qon",
    ru: 'Удаление папиллом: методы — Фергана, Коканд',
    en: 'Papilloma removal: methods — Fergana, Kokand',
  },
  'art-melazma': {
    uz: "Melazma: sabablari va davolash — Farg'ona, Qo'qon",
    ru: 'Мелазма: причины и лечение — Фергана, Коканд',
    en: 'Melasma: causes and treatment — Fergana, Kokand',
  },
  'art-qishda-teri-parvarishi': {
    uz: 'Qishda teri parvarishi: quruqlik va yoriqlar',
    ru: 'Уход за кожей зимой: сухость и трещины',
    en: 'Winter skin care: dryness and cracks',
  },
  'art-demodekoz': {
    uz: "Demodekoz: belgilari va davolash — Farg'ona, Qo'qon",
    ru: 'Демодекоз: признаки и лечение — Фергана, Коканд',
    en: 'Demodicosis: signs and treatment — Fergana, Kokand',
  },
  'art-gerpes': {
    uz: "Gerpes (lab uchug'i): davolash — Farg'ona, Qo'qon",
    ru: 'Герпес на губах: лечение — Фергана, Коканд',
    en: 'Cold sores (herpes): treatment — Fergana, Kokand',
  },
  'art-teri-zamburugi': {
    uz: "Teri zamburug'i: belgilari va davolash — Farg'ona",
    ru: 'Грибок кожи: признаки и лечение — Фергана, Коканд',
    en: 'Fungal skin infection: treatment — Fergana, Kokand',
  },
  'art-ekzema': {
    uz: "Ekzema: sabablari va davolash — Farg'ona, Qo'qon",
    ru: 'Экзема: причины и лечение — Фергана, Коканд',
    en: 'Eczema: causes and treatment — Fergana, Kokand',
  },
  'art-teri-qichishi': {
    uz: "Teri qichishi: sabablari va davolash — Farg'ona, Qo'qon",
    ru: 'Зуд кожи: причины и лечение — Фергана, Коканд',
    en: 'Itchy skin: causes and treatment — Fergana, Kokand',
  },
  'art-eshakemi-teri-allergiyasi': {
    uz: 'Eshakemi va teri allergiyasi: belgilari va davolash',
    ru: 'Крапивница и аллергия на коже: симптомы и лечение',
    en: 'Hives and skin allergy: symptoms and treatment',
  },
  'art-tirnoq-zamburugi': {
    uz: "Tirnoq zamburug'i: belgilari va davolash — Farg'ona, Qo'qon",
    ru: 'Грибок ногтей: признаки и лечение — Фергана, Коканд',
    en: 'Nail fungus: signs and treatment — Fergana, Kokand',
  },
  'art-seboreyali-dermatit': {
    uz: "Seboreyali dermatit: sabablari va davolash",
    ru: 'Себорейный дерматит: причины и лечение',
    en: 'Seborrheic dermatitis: causes and treatment',
  },
  'art-akne-u-vzroslykh': {
    uz: 'Kattalarda akne: qachon dermatologga borish kerak',
    ru: 'Акне у взрослых: когда идти к дерматологу',
    en: 'Adult acne: when to see a dermatologist',
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
    en: 'Warts in children: CO₂ laser removal',
  },
  'art-botulinoterapiya-radeski': {
    en: 'Botox & Dysport for Expression Lines: Aftercare',
  },
  'art-co2-lazer-deka': {
    uz: 'CO₂-lazer DEKA: jarrohliksiz teri yoshartirish',
    ru: 'CO₂-лазер DEKA: омоложение кожи без операции',
    en: 'DEKA CO₂ laser: skin rejuvenation',
  },
  'art-deka-moveo-epilyatsiya-tayyorgarlik': {
    uz: 'DEKA Moveo lazer epilyatsiyasiga tayyorgarlik',
    ru: 'Подготовка к лазерной эпиляции DEKA Moveo',
    en: 'Preparing for alexandrite laser hair removal',
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
    en: 'Hair transplant contraindications',
  },
  'art-ipl-fototerapiya-radeski': {
    uz: 'IPL-fototerapiya: qizarish, pigment va tomirlar',
    ru: 'IPL-фототерапия: покраснения, пигмент и сосуды',
    en: 'IPL Phototherapy: Redness, Pigment & Vessels',
  },
  'art-ipl-terapiya': {
    uz: 'IPL-terapiya Farg‘onada: nima va kimga mos',
    ru: 'IPL-терапия в Фергане: что это и кому подходит',
    en: 'IPL therapy in Fergana: what it treats',
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
    en: 'Plasmapheresis for skin diseases',
  },
  'art-plazmotorapiya-soch-prp': {
    uz: 'Soch uchun plazmotorapiya: kimga mos va natija',
    ru: 'Плазмотерапия волос: кому подходит и результаты',
    en: 'PRP for hair: who it suits and results',
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
    en: 'Vitiligo treatment with Daavlin phototherapy',
  },
};
