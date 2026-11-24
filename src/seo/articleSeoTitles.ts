import type { Locale } from '../types';

/**
 * Short <title> texts for articles whose own headline is longer than Google shows (~60
 * characters). The on-page H1 keeps the full headline; only the search-result title is
 * shortened, keyword first. The brand ("| Radeski…") is appended when it still fits.
 */
export const ARTICLE_SEO_TITLES: Partial<Record<string, Partial<Record<Locale, string>>>> = {
  'art-soch-ekish-fue-dhi': {
    uz: "Soch ekish FUE va DHI: jarayon va narx — Farg'ona",
    ru: "Пересадка волос FUE и DHI: этапы и цена — Фергана",
    en: "Hair Transplant FUE and DHI: Process and Cost — Fergana",
  },
  'art-soch-ekishdan-keyin': {
    uz: "Soch ekishdan keyin: 12 oylik parvarish — Farg'ona",
    ru: "После пересадки волос: уход на 12 месяцев — Фергана",
    en: "After a Hair Transplant: 12-Month Aftercare — Fergana",
  },
  'art-soqol-ekish': {
    uz: "Soqol va mo'ylov ekish: kimga mos — Farg'ona",
    ru: "Пересадка бороды и усов: кому подходит — Фергана",
    en: "Beard and Moustache Transplant — Fergana",
  },
  'art-botoks-yoki-filler': {
    uz: "Botoks yoki filler: farqi va tanlov — Farg'ona",
    ru: "Ботокс или филлер: в чём разница — Фергана",
    en: "Botox or Filler: The Difference — Fergana",
  },
  'art-mezoterapiya': {
    uz: "Mezoterapiya yuz va soch uchun — Farg'ona",
    ru: "Мезотерапия для лица и волос — Фергана",
    en: "Mesotherapy for Face and Hair — Fergana",
  },
  'art-apparatli-kosmetologiya': {
    uz: "Apparatli kosmetologiya: qaysi apparat nima uchun",
    ru: "Аппаратная косметология: какой аппарат для чего",
    en: "Device Cosmetology: Which Device for What — Fergana",
  },
  'art-dermatolog-qabuliga-tayyorgarlik': {
    uz: "Dermatolog qabuliga tayyorgarlik — Farg'ona, Qo'qon",
    ru: "Как подготовиться к дерматологу — Фергана, Коканд",
    en: "Preparing for a Dermatologist Visit — Fergana, Kokand",
  },
  'art-podolog-kim': {
    uz: "Podolog kim va qachon kerak — Farg'ona, Qo'qon",
    ru: "Кто такой подолог и когда к нему идти — Фергана",
    en: "Who Is a Podiatrist and When to Go — Fergana",
  },
  'art-kuperoz': {
    uz: "Kuperoz nima: yuzdagi qizil tomirlar — Farg'ona",
    ru: "Что такое купероз: сосуды на лице — Фергана",
    en: "What Is Couperose: Facial Thread Veins — Fergana",
  },
  'art-yuz-tozalash-turlari': {
    uz: "Yuz tozalash turlari: qaysi biri mos — Farg'ona",
    ru: "Виды чистки лица: какая подходит — Фергана",
    en: "Types of Facial Cleansing: Which Suits You — Fergana",
  },
  'art-bosh-terisi-qichishi': {
    uz: 'Bosh qichishi sabablari: kepak, psoriaz, allergiya',
    ru: 'Почему чешется голова: 7 причин и что делать',
    en: 'Itchy Scalp: 7 Causes and What Helps',
  },
  'art-til-yarasi': {
    uz: 'Til yarasi va yorilishi: sabablari va davosi',
    ru: 'Язва и трещины на языке: причины и лечение',
    en: 'Tongue Sores and Cracks: Causes and Treatment',
  },
  'art-soch-ekish-asoratlari': {
    uz: 'Soch ekish zararlari va asoratlari: nima normal',
    ru: 'Вред и осложнения пересадки волос: что норма',
    en: 'Hair Transplant Side Effects: What Is Normal',
  },
  'art-akne-dermatolog-kosmetolog': {
    uz: "Akne: dermatologga yoki kosmetologga borish kerak?",
  },
  'art-qadoq-va-kesak': {
    uz: "Qadoq va kesaklar: olib tashlash — Farg'ona, Qo'qon",
    ru: 'Мозоли и натоптыши: удаление — Фергана, Коканд',
    en: 'Calluses and corns: removal — Fergana, Kokand',
  },
  'art-erkaklarda-soch-tokilishi': {
    uz: "Erkaklarda soch to'kilishi: sabablari va davolash",
    ru: 'Выпадение волос у мужчин: причины и лечение',
    en: 'Hair loss in men: causes and treatment',
  },
  'art-tovon-yoriqlari': {
    uz: "Tovon yoriqlari: sabablari va davolash — Farg'ona",
    ru: 'Трещины на пятках: причины и лечение — Фергана',
    en: 'Cracked heels: causes and treatment — Fergana',
  },
  'art-lazer-epilyatsiya-kuz-qish': {
    uz: 'Lazer epilyatsiya kuz-qishda: nega aynan hozir',
    ru: 'Лазерная эпиляция осенью и зимой: почему сейчас',
    en: 'Laser hair removal in autumn and winter: why now',
  },
  'art-milium': {
    uz: "Milium: oq donachalarni olib tashlash — Farg'ona",
    ru: 'Милиумы: удаление белых точек — Фергана, Коканд',
    en: 'Milia removal: white bumps — Fergana, Kokand',
  },
  'art-diabetda-oyoq-parvarishi': {
    uz: 'Qandli diabetda oyoq parvarishi: qoidalar',
    ru: 'Уход за стопами при диабете: правила и признаки',
    en: 'Foot care with diabetes: rules and warning signs',
  },
  'art-karbon-piling': {
    uz: "Karbon piling: narx va natija — Farg'ona, Qo'qon",
    ru: 'Карбоновый пилинг: результат — Фергана, Коканд',
    en: 'Carbon peel: how it works — Fergana, Kokand',
  },
  'art-teri-biopsiyasi': {
    uz: "Teri biopsiyasi: qachon kerak va qanday o'tadi — Farg'ona",
    ru: 'Биопсия кожи: когда нужна и как проходит — Фергана',
    en: 'Skin Biopsy: When It Is Needed and How It Works — Fergana',
  },
  'art-ichga-osgan-tirnoq': {
    uz: "Ichiga o'sgan tirnoq: sabablari va davolash — Farg'ona",
    ru: 'Вросший ноготь: причины и лечение — Фергана',
    en: 'Ingrown Toenail: Causes and Treatment — Fergana',
  },
  'art-giperhidroz': {
    uz: "Giperhidroz: ortiqcha terlashni davolash — Farg'ona",
    ru: 'Гипергидроз: лечение потливости — Фергана и Коканд',
    en: 'Hyperhidrosis: Excessive Sweating Treatment — Fergana',
  },
  'art-tirnoq-rangi-ozgarishi': {
    uz: "Tirnoq rangi o'zgarishi: sabablari va xavf — Farg'ona",
    ru: 'Изменение цвета ногтей: причины и риски — Фергана',
    en: 'Nail Color Changes: Causes and Risks — Fergana',
  },
  'art-lablar-yorilishi-xeylit': {
    uz: "Lablar yorilishi va xeylit: qishda parvarish — Farg'ona",
    ru: 'Трещины на губах и хейлит зимой — дерматолог Фергана',
    en: 'Chapped Lips and Cheilitis in Winter — Fergana',
  },
  'art-pigment-doglari-qishda': {
    uz: "Pigment dog'larini davolash kuz–qishda — Farg'ona",
    ru: 'Лечение пигментных пятен осенью и зимой — Фергана',
    en: 'Pigment Spot Treatment in Autumn and Winter — Fergana',
  },
  'art-qizil-yassi-temiratki': {
    uz: "Qizil yassi temiratki: belgilari va davolash — Farg'ona",
    ru: 'Красный плоский лишай: симптомы и лечение — Фергана',
    en: 'Lichen Planus: Symptoms and Treatment — Fergana',
  },
  'art-melanoma': {
    uz: "Melanoma: erta belgilar va tekshiruv — Farg'ona, Qo'qon",
    ru: 'Меланома: ранние признаки и диагностика — Фергана, Коканд',
    en: 'Melanoma: Early Signs and Skin Checks — Fergana, Kokand',
  },
  'art-orab-oluvchi-temiratki': {
    uz: "O'rab oluvchi temiratki: belgilar va davolash — Farg'ona",
    ru: 'Опоясывающий лишай: признаки и лечение — Фергана',
    en: 'Shingles: First Signs and Treatment — Fergana',
  },
  'art-sovuq-allergiyasi': {
    uz: "Sovuq allergiyasi va pernioz: belgilar, xavf — Farg'ona",
    ru: 'Аллергия на холод и ознобление — дерматолог в Фергане',
    en: 'Cold Allergy and Chilblains: Signs, Risks — Fergana',
  },
  'art-vitiligo-belgilari': {
    uz: "Vitiligo: oq dog'lar, belgilari va davolash — Farg'ona",
    ru: 'Витилиго: белые пятна на коже, признаки, лечение — Фергана',
    en: 'Vitiligo: White Patches, First Signs and Treatment — Fergana',
  },
  'art-oyoqdagi-tomir-tori': {
    uz: "Oyoqdagi tomir to'ri: lazer bilan davolash — Farg'ona",
    ru: 'Сосудистые звёздочки на ногах: лазер — Фергана',
    en: 'Spider Veins on Legs: Laser Treatment — Fergana',
  },
  'art-bosh-terisi-psoriazi': {
    uz: "Bosh terisi psoriazi: belgilari va davolash — Farg'ona",
    ru: 'Псориаз кожи головы: признаки и лечение — Фергана',
    en: 'Scalp Psoriasis: Signs and Treatment — Fergana',
  },
  'art-kimyoviy-piling': {
    uz: "Kimyoviy piling: teri yangilanishi va parvarish — Farg'ona",
    ru: 'Химический пилинг лица: показания и уход — Фергана',
    en: 'Chemical Peel: Benefits and Aftercare — Fergana',
  },
  'art-plantar-sogal': {
    uz: "Plantar so'gal: oyoq tagidagi so'galni davolash — Farg'ona",
    ru: 'Подошвенная бородавка: лечение и удаление — Фергана',
    en: 'Plantar Warts: Treatment and Removal — Fergana',
  },
  'art-chipqon-follikulit': {
    uz: "Chipqon va follikulit: davolash — Farg'ona, Qo'qon",
    ru: 'Фурункул и фолликулит: лечение — Фергана, Коканд',
    en: 'Boils and Folliculitis Treatment — Fergana, Kokand',
  },
  'art-aktinik-keratoz': {
    uz: "Aktinik keratoz: quyoshdan dag'al dog'lar — Farg'ona",
    ru: 'Актинический кератоз: шершавые пятна от солнца — Фергана',
    en: 'Actinic Keratosis: Rough Sun Spots — Fergana',
  },
  'art-bolalarda-atopik-dermatit': {
    uz: "Bolalarda atopik dermatit: qishki parvarish — Farg'ona",
    ru: 'Атопический дерматит у детей зимой — Фергана',
    en: 'Atopic Dermatitis in Children: Winter Care — Fergana',
  },
  'art-mort-tirnoqlar': {
    uz: "Mo'rt va qatlanadigan tirnoqlar: parvarish — Farg'ona",
    ru: 'Ломкие и слоящиеся ногти: причины и уход — Фергана',
    en: 'Brittle and Splitting Nails: Causes and Care — Fergana',
  },
  'art-koz-osti-qorayishi': {
    uz: "Ko'z osti qorayishi va shishi: sabablari — Farg'ona",
    ru: 'Тёмные круги и отёки под глазами — Фергана',
    en: 'Dark Circles and Under-Eye Puffiness — Fergana',
  },
  'art-yangi-yil-yuz-parvarishi': {
    uz: "Yangi yil oldidan yuz parvarishi: muolaja rejasi — Farg'ona",
    ru: 'Уход за лицом перед Новым годом: план процедур — Фергана',
    en: 'Skin Care Before New Year: Treatment Timing — Fergana',
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
    uz: 'Teri va badan qichishi sabablari: qachon xavfli',
    ru: 'Зуд кожи: причины и лечение — Фергана, Коканд',
    en: 'Itchy skin: causes and treatment — Fergana, Kokand',
  },
  'art-eshakemi-teri-allergiyasi': {
    uz: "Eshakemi (krapivnitsa): sabablari, belgilari, davosi",
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
  'art-akne': {
    uz: 'Akne nima: sabablari, belgilari va davolash',
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
    uz: 'Atopik dermatit nima: belgilari, bolalarda davolash',
    ru: 'Атопический дерматит: симптомы и лечение',
  },
  'art-bazalioma-teri-raki': {
    uz: 'Bazalioma (teri raki): belgilar va davolash',
    en: 'Basal Cell Carcinoma: Symptoms and Treatment',
  },
  'art-biorevitalizatsiya-radeski': {
    uz: 'Biorevitalizatsiya: ko‘rsatmalar va parvarish',
    en: "What Is Biorevitalization? Results and Course",
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
    uz: "Soch ekish kimga mumkin emas: qarshi ko'rsatmalar",
    ru: 'Противопоказания к пересадке волос',
    en: 'Hair transplant contraindications',
  },
  'art-ipl-fototerapiya-radeski': {
    uz: "IPL fototerapiya: kuperoz, pigment va qizarish",
    ru: 'IPL-фототерапия: покраснения, пигмент и сосуды',
    en: 'IPL Phototherapy: Redness, Pigment & Vessels',
  },
  'art-ipl-terapiya': {
    uz: "IPL terapiya nima va kimga mos — Farg'ona",
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
  'art-photofinder-diagnostika-radeski': {
    en: 'PhotoFinder Mole Mapping: Skin Cancer Screening',
  },
  'art-plazmaferez-teri-kasalliklari': {
    uz: 'Plazmaferez nima: teri kasalliklarida qachon kerak',
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
    uz: 'PRP oldidan tahlillar: to‘liq ro‘yxat va tayyorgarlik',
    ru: 'Анализы перед PRP-терапией: полный список',
    en: 'Blood Tests Before PRP: The Full Checklist',
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
    uz: 'Til raki: alomatlari, belgilari va qanday ko‘rinadi',
    ru: 'Рак языка: первые симптомы и лечение',
    en: 'Tongue Cancer (SCC): Early Signs and Treatment',
  },
  'art-trixolog-trixoskopiya': {
    uz: 'Trixolog kim, trixoskopiya nima va qachon kerak',
    ru: 'Трихоскопия: диагностика причин выпадения волос',
    en: 'Trichoscopy: Finding the Cause of Hair Loss',
  },
  'art-vitiligo-daavlin': {
    uz: 'Vitiligo davolash: Daavlin fototerapiyasi',
    ru: 'Лечение витилиго фототерапией Daavlin',
    en: 'Vitiligo treatment with Daavlin phototherapy',
  },
  'art-klinika-patologii-nogtej-stopy-radeski': {
    uz: "Tirnoq va oyoq kasalliklari: podolog qabuli",
  },
  'art-soch-tokilishi-normal-patologiya-radeski': {
    uz: "Kuniga nechta soch to'kilishi normal? Belgilar",
  },
  'art-deka-co2-chandiqlar-radeski': {
    en: "CO₂ Laser Scar Treatment: Acne Scars and Results",
  },
};
