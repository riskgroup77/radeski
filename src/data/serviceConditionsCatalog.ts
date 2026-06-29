import type { Locale, ServiceConditionTopic } from '../types';

type LocalizedConditions = Record<Locale, ServiceConditionTopic[]>;

export const CATEGORY_CONDITIONS_CATALOG: Record<string, LocalizedConditions> = {
  'apparatnaya-kosmetologiya': {
    uz: [
      {
        title: 'Giperpigmentatsiya (teri rangining ortishi)',
        description:
          'Giperpigmentatsiya — teri ma\'lum qismlarining atrofdagi teriga qaraganda to\'qroq rangga kirishidir. Quyosh nurlari, gormonal o\'zgarishlar (homiladorlik, kontratseptivlar), akne keyingi dog\'lar yoki jarohatlar sabab bo\'lishi mumkin. Melasma ko\'pincha yuzda simmetrik dog\'lar shaklida paydo bo\'ladi. Apparat kosmetologiyasida Sciton IPL va gen darajasida foto-yangilash pigment hujayralarini bosqichma-bosqich yo\'q qiladi, teri rangini tekislaydi va qayta paydo bo\'lishining oldini olish uchun profilaktik reja tuziladi.',
      },
      {
        title: 'Rozaseya va qon tomir tarmoqlari',
        description:
          'Rozaseya — yuzda doimiy yoki vaqti-vaqti bilan qizarish, kichik qon tomir tarmoqlari (kuperoz) va ba\'zan toshma bilan kechadigan surunkali holat. Issiq, stress, alkogol va quyosh nurlari kuchaytirishi mumkin. IPL apparat muolajasi qon tomirlarni issiq yorug\'lik bilan yopadi, qizarishni kamaytiradi va teri to\'qimasini mustahkamlaydi. Og\'riqsiz usul bo\'lib, bir necha seansdan keyin sezilarli yaxshilanish kuzatiladi.',
      },
      {
        title: 'Yoshga bog\'liq teri eskirishi va ajinlar',
        description:
          'Yosh o\'tishi bilan terida kollegen va elastin kamayadi, ajinlar, teri silliqligi va turgor pasayadi. Mimik ajinlari peshona, ko\'z atrofi va lab atrofida paydo bo\'ladi. Gen darajasida foto-yangilash qarish genlarining faolligini o\'zgartiradi, yangi kollegen ishlab chiqarilishini rag\'batlantiradi. Natijada teri zichroq, yorqinroq va yoshroq ko\'rinadi — jarrohliksiz va tabiiy usulda.',
      },
      {
        title: 'Akne va post-akne dog\'lari',
        description:
          'Akne — yog\' bezlarining faoliyati buzilishi natijasida toshma, qizil to\'plamlar va ba\'zan chuqur izlar paydo bo\'lishi. Davolangandan keyin ham dog\'lar va tekstura o\'zgarishi qolishi mumkin (post-akne). Apparat kosmetologiyasi pigment dog\'larni yengillashtiradi, teri teksturasini tekislaydi va kengaytirilgan toshma teshiklarini kamaytirishga yordam beradi. Dermatolog nazoratida xavfsiz protokol tanlanadi.',
      },
      {
        title: 'Teri quruqligi va suvsizlanishi',
        description:
          'Teri epidermisida namlik yetishmovchiligi quruqlik, tig\'izlik, xiralik va noqulaylik hissini keltirib chiqaradi. Yoshi, iqlim, noto\'g\'ri parvarish yoki tibbiy holatlar sabab bo\'lishi mumkin. Lazer biorevitalizatsiya va IPL terining namlik balansini tiklaydi, gialuron kislotasi va tiklanish jarayonlarini faollashtiradi. Teri yumshoq, silliq va sog\'lom ko\'rinishga ega bo\'ladi.',
      },
      {
        title: 'Yuz konturining pasayishi va mushak tonusi',
        description:
          'Limfa to\'planishi, mushak tonusining pasayishi va teri elastikligining kamayishi yuz konturining «erishi» va shish ko\'rinishiga olib keladi. Mikrotok terapiyasi past chastotali tok impulslari bilan mushaklarni faollashtiradi, limfani yaxshilaydi va lifting effektini beradi. Jarrohliksiz, og\'riqsiz usul bo\'lib, darhol va uzoq muddatli natija beradi.',
      },
    ],
    ru: [
      {
        title: 'Гиперпигментация',
        description:
          'Гиперпигментация — потемнение участков кожи из-за солнца, гормонов, постакне или травм. Мелазма проявляется симметричными пятнами на лице. Аппаратная косметология с Sciton IPL постепенно устраняет пигмент и выравнивает тон кожи.',
      },
      {
        title: 'Розацеа и сосудистые звездочки',
        description:
          'Розацеа — хроническое покраснение лица, сосудистая сетка и чувствительность кожи. IPL-терапия коагулирует мелкие сосуды и уменьшает воспаление без боли и длительной реабилитации.',
      },
      {
        title: 'Возрастное старение и морщины',
        description:
          'С возрастом снижается выработка коллагена и эластина, появляются морщины и потеря упругости. Фотоомоложение на генном уровне стимулирует обновление клеток и естественное омоложение без операции.',
      },
      {
        title: 'Акне и постакне',
        description:
          'Акне оставляет пятна, рубцы и неровную текстуру. Аппаратные методы осветляют пигментацию, сужают поры и улучшают рельеф кожи под контролем дерматолога.',
      },
      {
        title: 'Сухость и обезвоженность кожи',
        description:
          'Недостаток влаги вызывает стянутость, тусклость и шелушение. Лазерная биоревитализация и IPL восстанавливают гидробаланс и сияние кожи.',
      },
      {
        title: 'Потеря контуров лица',
        description:
          'Снижение тонуса мышц и лимфостаз приводят к отекам и «плывущему» контуру. Микротоки стимулируют мышцы и лимфодренаж, обеспечивая лифтинг-эффект.',
      },
    ],
    en: [
      {
        title: 'Hyperpigmentation',
        description:
          'Hyperpigmentation is darkening of skin areas caused by sun, hormones, post-acne marks or injury. Melasma often appears as symmetric facial patches. Sciton IPL gradually removes pigment and evens skin tone.',
      },
      {
        title: 'Rosacea and vascular lesions',
        description:
          'Rosacea causes chronic facial redness, visible vessels and sensitivity. IPL therapy coagulates small vessels and reduces inflammation painlessly with minimal downtime.',
      },
      {
        title: 'Age-related aging and wrinkles',
        description:
          'Collagen and elastin decline leads to wrinkles and loss of firmness. Gene-level photo-rejuvenation stimulates cell renewal for natural non-surgical rejuvenation.',
      },
      {
        title: 'Acne and post-acne',
        description:
          'Acne leaves spots, scars and uneven texture. Device-based treatments lighten pigmentation, refine pores and improve skin relief under dermatologist supervision.',
      },
      {
        title: 'Dryness and dehydration',
        description:
          'Lack of moisture causes tightness, dullness and flaking. Laser biorevitalization and IPL restore hydration balance and natural glow.',
      },
      {
        title: 'Facial contour loss',
        description:
          'Reduced muscle tone and lymph stagnation cause puffiness and sagging contours. Microcurrents stimulate muscles and lymphatic drainage for a lifting effect.',
      },
    ],
  },
  dermatologiya: {
    uz: [
      {
        title: 'Psoriaz',
        description:
          'Psoriaz — autoimmun xarakterli surunkali teri kasalligi bo\'lib, qizil dog\'lar va qalqonsimon oq-qizil qoplama bilan namoyon bo\'ladi. Tizza, tirsak, bosh terisi va tana qismlarida uchraydi. Radeski klinikasida fototerapiya (UVB 311 nm), mahalliy terapiya va og\'ir holatlarda immunobiologik preparatlar qo\'llaniladi. Maqsad — asoratlarni kamaytirish va remissiya muddatini uzaytirish.',
      },
      {
        title: 'Vitiligo',
        description:
          'Vitiligo — terida pigment (melanin) yo\'qolishi natijasida oq dog\'lar paydo bo\'lishi. Immun tizimi melanotsitlarga ta\'sir qiladi. Tor to\'lqinli UVB fototerapiya pigment qayta tiklanishini rag\'batlantiradi. Davolash uzoq muddatli, individual rejim asosida olib boriladi.',
      },
      {
        title: 'Ekzema va atopik dermatit',
        description:
          'Ekzema — qichish, qizarish va teri quruqligi bilan kechadigan surunkali yallig\'lanish. Atopik dermatit bolalarda ham katta yoshlarda ham uchraydi. Allergenlarni aniqlash, parvarish rejasi va zarur bo\'lsa dori-darmonlar bilan kompleks yondashuv qo\'llaniladi.',
      },
      {
        title: 'Allergik toshma va kontakt dermatit',
        description:
          'Allergik reaksiyalar mahsulotlar, oziq-ovqat yoki muhit allergenlari bilan bog\'liq bo\'lishi mumkin. Teri qizaradi, qichishadi va toshma chiqadi. Allergiya testlari, triggerlarni aniqlash va maxsus terapiya rejalashtiriladi.',
      },
      {
        title: 'Seborreya va teri zamburug\'i',
        description:
          'Seborreya — yog\'li teri, qichish va qalqonsimon qoplama bilan kechadi, ko\'pincha bosh terisida. Zamburug\'i (mikoz) tirnoq va teri qatlamlarini zararlaydi. Antifungal va yallig\'lanishga qarshi davolash, shuningdek parvarish tavsiyalari beriladi.',
      },
    ],
    ru: [
      { title: 'Псориаз', description: 'Хроническое аутоиммунное заболевание с красными бляшками и шелушением. Лечение: фототерапия UVB, местная терапия, биологические препараты при тяжелом течении.' },
      { title: 'Витилиго', description: 'Потеря пигмента с белыми пятнами на коже. Узкополосная UVB-фототерапия стимулирует репигментацию по индивидуальному плану.' },
      { title: 'Экзема и атопический дерматит', description: 'Хроническое воспаление с зудом и сухостью. Комплексный подход: выявление триггеров, уход и медикаментозная терапия.' },
      { title: 'Аллергический дерматит', description: 'Кожные высыпания при контакте с аллергенами. Диагностика, исключение триггеров и целенаправленное лечение.' },
      { title: 'Себорея и микоз', description: 'Жирная кожа, перхоть, грибковые поражения. Противогрибковая и противовоспалительная терапия с рекомендациями по уходу.' },
    ],
    en: [
      { title: 'Psoriasis', description: 'Chronic autoimmune disease with red plaques and scaling. Treatment includes UVB phototherapy, topical therapy and biologics for severe cases.' },
      { title: 'Vitiligo', description: 'Loss of pigment causing white patches. Narrow-band UVB phototherapy stimulates repigmentation on an individual plan.' },
      { title: 'Eczema and atopic dermatitis', description: 'Chronic inflammation with itching and dryness. Comprehensive approach: trigger identification, care and medication.' },
      { title: 'Allergic dermatitis', description: 'Skin rashes from allergen contact. Diagnostics, trigger avoidance and targeted treatment.' },
      { title: 'Seborrhea and fungal infections', description: 'Oily skin, dandruff and mycosis. Antifungal and anti-inflammatory therapy with care guidance.' },
    ],
  },
  'in-ekcionnaya-kosmetologiya': {
    uz: [
      {
        title: 'Mimik ajinlar (botulinoterapiya)',
        description:
          'Mimik ajinlar peshona, ko\'z atrofi va labda paydo bo\'ladi. Botulinoterapiya mimik mushaklarini vaqtincha bo\'shashtiradi, terini tekislaydi va tabiiy ifodani saqlaydi.',
      },
      {
        title: 'Hajm yo\'qolishi va kontur o\'zgarishi',
        description:
          'Yosh bilan yuzda hajm kamayadi, yonoq va lab konturi o\'zgaradi. Gialuron kislotali fillerlar hajmni tiklaydi, yuz shaklini yoshartadi.',
      },
      {
        title: 'Teri quruqligi va suvsizlanishi',
        description:
          'Biorevitalizatsiya teri ichki qatlamlarini namlantiradi, elastiklik va yorqinlikni qaytaradi. Inyeksion usul chuqur va uzoq muddatli ta\'sir beradi.',
      },
    ],
    ru: [
      { title: 'Мимические морщины', description: 'Ботулинотерапия расслабляет мышцы и разглаживает морщины, сохраняя естественную мимику.' },
      { title: 'Потеря объема', description: 'Филлеры на гиалуроновой кислоте восстанавливают контуры лица и объем.' },
      { title: 'Сухость кожи', description: 'Биоревитализация глубоко увлажняет кожу и возвращает сияние.' },
    ],
    en: [
      { title: 'Expression wrinkles', description: 'Botulinum therapy relaxes muscles and smooths wrinkles while preserving natural expression.' },
      { title: 'Volume loss', description: 'Hyaluronic acid fillers restore facial contours and volume.' },
      { title: 'Skin dryness', description: 'Biorevitalization deeply hydrates skin and restores glow.' },
    ],
  },
  'lazernaya-epilyaciya': {
    uz: [
      {
        title: 'Gipertrixoz (ortiqcha tana sochlari)',
        description:
          'Gormonal, genetik yoki kosmetik sabablarga ko\'ra istalmagan sochlar paydo bo\'ladi. Aleksandrit lazer soch folikulasini yo\'q qiladi, teri silliq va toza bo\'ladi.',
      },
      {
        title: 'Ingrown sochlar (o\'sib ketgan soch)',
        description:
          'Noto\'g\'ri epilyatsiya yoki qalin sochlar teri ostiga o\'sib, yallig\'lanish keltiradi. Lazer epilyatsiya folikulni butunlay yo\'q qilib, muammoni uzoq muddat hal qiladi.',
      },
    ],
    ru: [
      { title: 'Гипертрихоз', description: 'Александритовый лазер разрушает волосяной фолликул и обеспечивает длительную гладкость кожи.' },
      { title: 'Вросшие волосы', description: 'Лазерная эпиляция устраняет фолликул и предотвращает воспаление.' },
    ],
    en: [
      { title: 'Hypertrichosis', description: 'Alexandrite laser destroys hair follicles for long-lasting smooth skin.' },
      { title: 'Ingrown hairs', description: 'Laser epilation eliminates follicles and prevents inflammation.' },
    ],
  },
  'trihologiya-centr-lechenie-volos': {
    uz: [
      {
        title: 'Alopeciya (soch to\'kilishi)',
        description:
          'Soch to\'kilishi stress, gormonlar, avitaminoz yoki autoimmun sabablarga ko\'ra yuzaga keladi. Trixoskopiya sababni aniqlaydi, keyin mezoterapiya va dori-darmonlar qo\'llaniladi.',
      },
      {
        title: 'Seboreya va bosh terisi yallig\'lanishi',
        description:
          'Bosh terisida qichish, qalqonsimon qoplama va qizarish kuzatiladi. Kompleks davolash va parvarish rejasi tuziladi.',
      },
    ],
    ru: [
      { title: 'Алопеция', description: 'Трихоскопия определяет причину выпадения, затем назначается комплексное лечение.' },
      { title: 'Себорея кожи головы', description: 'Перхоть, зуд и воспаление лечатся комплексно под контролем трихолога.' },
    ],
    en: [
      { title: 'Alopecia', description: 'Trichoscopy identifies hair loss cause, then combined treatment is prescribed.' },
      { title: 'Scalp seborrhea', description: 'Dandruff, itching and inflammation are treated comprehensively.' },
    ],
  },
  'dermatoonkologiya': {
    uz: [
      {
        title: 'Melanoma xavfi (xavfli xollar)',
        description:
          'Teridagi xollar o\'zgarishi melanoma belgisi bo\'lishi mumkin. PhotoFinder AI yordamida xavfli o\'zgarishlarni erta aniqlash mumkin.',
      },
      {
        title: 'Papilloma va borma',
        description:
          'Virus (HPV) sababli o\'simalar paydo bo\'ladi. Dermatoskopik ko\'rik va kerak bo\'lsa biopsiya bilan aniq tashxis qo\'yiladi.',
      },
    ],
    ru: [
      { title: 'Риск меланомы', description: 'PhotoFinder с ИИ выявляет опасные изменения родинок на ранней стадии.' },
      { title: 'Папилломы и бородавки', description: 'Вирусные образования диагностируются дерматоскопически и при необходимости биопсией.' },
    ],
    en: [
      { title: 'Melanoma risk', description: 'PhotoFinder AI detects dangerous mole changes at an early stage.' },
      { title: 'Papillomas and warts', description: 'Viral lesions are diagnosed dermoscopically and by biopsy when needed.' },
    ],
  },
  'hirurgicheskaya-dermatologiya': {
    uz: [
      { title: 'Teri o\'smalari', description: 'Borma, papilloma va fibromalarni xirurgik olib tashlash kosmetik tikish bilan amalga oshiriladi.' },
      { title: 'Teri saratonlari', description: 'Mohs jarrohligi yuz qismidagi saratonlarni yuqori aniqlik bilan davolaydi.' },
    ],
    ru: [
      { title: 'Новообразования кожи', description: 'Хирургическое удаление бородавок, папиллом и фибром с косметическими швами.' },
      { title: 'Рак кожи', description: 'Хирургия Mohs эффективно лечит рак кожи на лице.' },
    ],
    en: [
      { title: 'Skin lesions', description: 'Surgical removal of warts, papillomas and fibromas with cosmetic suturing.' },
      { title: 'Skin cancer', description: 'Mohs surgery effectively treats skin cancer on the face.' },
    ],
  },
  'shkola-psoriaza': {
    uz: [
      { title: 'Surunkali psoriaz', description: 'Maktab bemorlarga kasallikni boshqarish va remissiyani uzaytirishni o\'rgatadi.' },
    ],
    ru: [
      { title: 'Хронический псориаз', description: 'Школа обучает пациентов контролю заболевания и продлению ремиссии.' },
    ],
    en: [
      { title: 'Chronic psoriasis', description: 'The school teaches patients disease control and remission extension.' },
    ],
  },
  'shkola-dermatoskopii': {
    uz: [
      { title: 'Dermatoskopiya', description: 'Shifokorlar uchun teri o\'smalarini optik diagnostika qilish bo\'yicha o\'quv dasturi.' },
    ],
    ru: [
      { title: 'Дерматоскопия', description: 'Обучающая программа для врачей по оптической диагностике новообразований.' },
    ],
    en: [
      { title: 'Dermatoscopy', description: 'Training program for physicians in optical diagnosis of skin lesions.' },
    ],
  },
  'clinika-patologii-nogtej': {
    uz: [
      { title: 'Tirnoq zamburug\'i', description: 'Onikomikoz tirnoq qalinlashishi va rang o\'zgarishi bilan kechadi. Tibbiy davolash talab qilinadi.' },
      { title: 'O\'sib ketgan tirnoq', description: 'Og\'riq va yallig\'lanish keltiradi. Podologik tuzatish samarali yechim beradi.' },
    ],
    ru: [
      { title: 'Грибок ногтей', description: 'Онихомикоз проявляется утолщением и изменением цвета ногтя.' },
      { title: 'Вросший ноготь', description: 'Вызывает боль и воспаление. Подологическая коррекция эффективна.' },
    ],
    en: [
      { title: 'Nail fungus', description: 'Onychomycosis causes thickened discolored nails. Medical treatment is required.' },
      { title: 'Ingrown toenail', description: 'Causes pain and inflammation. Podologic correction is effective.' },
    ],
  },
  dermatopatologiya: {
    uz: [
      { title: 'Gistologik tahlil', description: 'Biopsiya namunalarining mikroskopik tekshiruvi aniq tashxis uchun asos hisoblanadi.' },
    ],
    ru: [
      { title: 'Гистологический анализ', description: 'Микроскопическое исследование биоптатов — основа точного диагноза.' },
    ],
    en: [
      { title: 'Histologic analysis', description: 'Microscopic examination of biopsies is the basis for accurate diagnosis.' },
    ],
  },
  'gen-revo': {
    uz: [
      { title: 'Gen darajasida yoshartirish', description: 'Forever Young IPL qarish genlarining faolligini o\'zgartiradi, kollegen yangilanishini rag\'batlantiradi.' },
    ],
    ru: [
      { title: 'Омоложение на генном уровне', description: 'Forever Young IPL модулирует гены старения и стимулирует обновление коллагена.' },
    ],
    en: [
      { title: 'Gene-level rejuvenation', description: 'Forever Young IPL modulates aging genes and stimulates collagen renewal.' },
    ],
  },
};

export const SUB_CONDITIONS_CATALOG: Record<string, LocalizedConditions> = {
  'gene-photo-rejuvenation': {
    uz: [
      {
        title: 'Melasma (gormonal pigmentatsiya)',
        description:
          'Melasma — yuzda, ayniqsa yonoq, lab ustida va peshonada simmetrik jigarrang dog\'lar. Homiladorlik, kontratseptivlar yoki quyosh ta\'siri kuchaytiradi. IPL Forever Young pigment hujayralarini tanlab yo\'q qiladi, teri rangini bir tekis qiladi. Bir necha seansdan keyin dog\'lar sezilarli ochiladi.',
      },
      {
        title: 'Lentigo va quyosh dog\'lari',
        description:
          'Quyosh nurlari uzoq muddatli ta\'sirida yuz va qo\'llarda kichik jigarrang dog\'lar paydo bo\'ladi. Bu melanin to\'planishi natijasidir. Foto-yangilash dog\'larni bosqichma-bosqich yo\'qotadi va yangi pigmentatsiyaning oldini olish uchun SPF parvarish o\'rgatiladi.',
      },
      {
        title: 'Kuperoz (qon tomir tarmoqlari)',
        description:
          'Yuzda, ayniqsa burun va yonoqlarda kichik qizil yoki binafsha tomirlar ko\'rinadi. Rozaseyaning bir shakli bo\'lishi mumkin. IPL maxsus filtri tomirlarni yopadi, qizarishni kamaytiradi. Og\'riqsiz, tez va samarali usul.',
      },
      {
        title: 'Fotoeskirish (photoaging)',
        description:
          'Quyosh UV nurlari terida erta qarishni tezlashtiradi: ajinlar, quruqlik, pigmentatsiya. Gen darajasida foto-yangilash UV zararini kompensatsiya qiladi, kollegen yangilanishini rag\'batlantiradi va terini yoshroq holatga qaytaradi.',
      },
      {
        title: 'Teri rangining notekisligi',
        description:
          'Turli sabablarga ko\'ra teri ba\'zi joylari to\'qroq yoki ochroq bo\'ladi. Bu estetik va psixologik noqulaylik tug\'dirishi mumkin. Individual IPL protokoli rangni tekislaydi, teri yorqinligi va teksturasini yaxshilaydi.',
      },
    ],
    ru: [
      { title: 'Мелазма', description: 'Гормональная пигментация на лице. IPL Forever Young селективно устраняет пигмент и выравнивает тон за несколько сеансов.' },
      { title: 'Лентиго и солнечные пятна', description: 'Пигментные пятна от солнца. Фотоомоложение постепенно осветляет их и обучает защите SPF.' },
      { title: 'Купероз', description: 'Сосудистые звездочки на лице. IPL закрывает сосуды и уменьшает покраснение безболезненно.' },
      { title: 'Фотостарение', description: 'Преждевременное старение от UV. Генное фотоомоложение стимулирует коллаген и возвращает молодость кожи.' },
      { title: 'Неровный тон кожи', description: 'Различия в цвете кожи. Индивидуальный протокол IPL выравнивает тон и улучшает текстуру.' },
    ],
    en: [
      { title: 'Melasma', description: 'Hormonal facial pigmentation. IPL Forever Young selectively removes pigment and evens tone within several sessions.' },
      { title: 'Lentigo and sun spots', description: 'Sun-induced brown spots. Photo-rejuvenation gradually lightens them with SPF prevention guidance.' },
      { title: 'Couperose', description: 'Facial vascular spider veins. IPL closes vessels and reduces redness painlessly.' },
      { title: 'Photoaging', description: 'Premature aging from UV damage. Gene-level rejuvenation stimulates collagen renewal.' },
      { title: 'Uneven skin tone', description: 'Color irregularities on skin. Individual IPL protocol evens tone and improves texture.' },
    ],
  },
  'bbl-foto': {
    uz: [
      {
        title: 'Pigment dog\'lar',
        description:
          'Teri yuzasida melanin to\'planishi natijasida jigarrang yoki sariq dog\'lar paydo bo\'ladi. IPL yorug\'lik energiyasi pigmentni parchalaydi, tananing tabiiy jarayoni orqali dog\' asta-sekin yo\'qoladi.',
      },
      {
        title: 'Sosudistiy yulduzchalar',
        description:
          'Yuzda mayda qon tomirlari kengayib, qizil chiziqlar ko\'rinadi. IPL issiqlik energiyasi bilan tomirlarni yopadi, teri rangi bir xil bo\'ladi.',
      },
    ],
    ru: [
      { title: 'Пигментные пятна', description: 'Скопление меланина на коже. IPL разрушает пигмент, и пятна постепенно исчезают.' },
      { title: 'Сосудистые звездочки', description: 'Расширенные капилляры на лице. IPL коагулирует сосуды и выравнивает цвет.' },
    ],
    en: [
      { title: 'Pigment spots', description: 'Melanin accumulation on skin. IPL breaks down pigment and spots fade gradually.' },
      { title: 'Vascular spider veins', description: 'Dilated capillaries on face. IPL coagulates vessels and evens skin color.' },
    ],
  },
  mikrotoki: {
    uz: [
      {
        title: 'Limfostaz va yuz shishi',
        description:
          'Limfa to\'planishi yuzni shishqoq ko\'rsatadi, kontur yo\'qoladi. Mikrotoklar limfa oqimini yaxshilaydi, shishni kamaytiradi va yuzni yengillashtiradi.',
      },
      {
        title: 'Mushak tonusining pasayishi',
        description:
          'Yosh yoki kam harakat sabab yuz mushaklari zaiflashadi. Mikrotok impulslari mushaklarni faollashtiradi, tabiiy lifting effektini beradi.',
      },
    ],
    ru: [
      { title: 'Лимфостаз и отеки', description: 'Застой лимфы вызывает отечность лица. Микротоки улучшают дренаж и уменьшают припухлость.' },
      { title: 'Снижение мышечного тонуса', description: 'Ослабление мышц лица. Микротоки активируют мышцы и дают лифтинг-эффект.' },
    ],
    en: [
      { title: 'Lymphostasis and puffiness', description: 'Lymph stagnation causes facial swelling. Microcurrents improve drainage and reduce puffiness.' },
      { title: 'Reduced muscle tone', description: 'Weakening of facial muscles. Microcurrents activate muscles for a natural lifting effect.' },
    ],
  },
  'lazer-biorev': {
    uz: [
      {
        title: 'Dehidratatsiya (teri suvsizligi)',
        description:
          'Teri yetarli namlik olmaganda quruq, tig\'iz va xira bo\'ladi. Lazer biorevitalizatsiya gialuron kislotasini chuqur qatlamlarga yetkazadi, namlik balansini tiklaydi.',
      },
      {
        title: 'Elastiklikning pasayishi',
        description:
          'Kollegen va elastin kamayganda teri sarkoyadi. Lazer energiyasi tiklanish jarayonlarini faollashtiradi, teri mustahkamlanadi.',
      },
    ],
    ru: [
      { title: 'Обезвоженность кожи', description: 'Недостаток влаги вызывает сухость. Лазерная биоревитализация доставляет гиалуроновую кислоту в глубокие слои.' },
      { title: 'Потеря эластичности', description: 'Снижение коллагена. Лазер стимулирует процессы восстановления и упругость кожи.' },
    ],
    en: [
      { title: 'Skin dehydration', description: 'Lack of moisture causes dryness. Laser biorevitalization delivers hyaluronic acid to deep layers.' },
      { title: 'Loss of elasticity', description: 'Collagen decline. Laser energy stimulates recovery processes and skin firmness.' },
    ],
  },
  'ultratovush-yuz': {
    uz: [
      {
        title: 'Kengaytirilgan toshma teshiklari',
        description:
          'Yog\' va kir to\'planishi poralarni kengaytiradi, teri noaniq va muammoli ko\'rinadi. Ultratovush tozalash poralarni yumshatadi, ichki qatlamdan tozalaydi va keyingi parvarish uchun tayyorlaydi.',
      },
      {
        title: 'Qora nuqtalar va komedonlar',
        description:
          'Tor poralarda yog\' va qoldiqlar to\'planib qora nuqtalar hosil bo\'ladi. Professional ultratovush spatula bu qatlamlarni ehtiyotkorlik bilan olib tashlaydi, yangi toshma paydo bo\'lishini kamaytiradi.',
      },
      {
        title: 'Yog\'li teri va matlik',
        description:
          'Seboreya yoki noto\'g\'ri parvarish terini yog\'li va xira qiladi. Ultratovush tozalash ortiqcha yog\'ni kamaytiradi, teri nafas olishini yaxshilaydi va yorqinroq ko\'rinish beradi.',
      },
      {
        title: 'Teri teksturasining notekisligi',
        description:
          'Qattiq qoplama va mayda qirqindilar teri sirtini tekislamaydi. Chuqur tozalashdan keyin teri silliqroq, yumshoqroq va kosmetik mahsulotlarni yaxshiroq qabul qiladi.',
      },
    ],
    ru: [
      { title: 'Расширенные поры', description: 'Скопление себума расширяет поры. Ультразвуковая чистка мягко очищает кожу в глубоких слоях и подготавливает к дальнейшему уходу.' },
      { title: 'Черные точки и комедоны', description: 'Закупорка пор вызывает черные точки. Профессиональная ультразвуковая шпатель-чистка аккуратно удаляет содержимое пор.' },
      { title: 'Жирная кожа и тусклость', description: 'Избыток себума делает кожу жирной и тусклой. Ультразвуковая чистка нормализует работу сальных желез и улучшает цвет лица.' },
      { title: 'Неровная текстура кожи', description: 'Омертвевшие клетки и загрязнения ухудшают рельеф. После глубокой чистки кожа становится более гладкой и восприимчивой к уходу.' },
    ],
    en: [
      { title: 'Enlarged pores', description: 'Sebum buildup widens pores. Ultrasonic cleansing gently cleanses deep layers and prepares skin for further care.' },
      { title: 'Blackheads and comedones', description: 'Clogged pores form blackheads. Professional ultrasonic spatula cleansing carefully removes debris from pores.' },
      { title: 'Oily skin and dullness', description: 'Excess sebum makes skin oily and dull. Ultrasonic cleansing normalizes oil balance and improves complexion.' },
      { title: 'Uneven skin texture', description: 'Dead cells and impurities roughen skin surface. After deep cleansing, skin becomes smoother and more receptive to skincare.' },
    ],
  },
  'det-derm': {
    uz: [
      { title: 'Atopik dermatit', description: 'Bolalarda qichish, qizarish va quruq teri bilan kechadi. Yumshoq terapiya va ota-ona yo\'riqnomasi bilan boshqariladi.' },
      { title: 'Allergik toshma', description: 'Allergenlar bilan bog\'liq teri reaksiyalari. Triggerlarni aniqlash va xavfsiz davolash rejalashtiriladi.' },
    ],
    ru: [
      { title: 'Атопический дерматит', description: 'Зуд, покраснение и сухость кожи у детей. Лечение мягкими методами под контролем дерматолога.' },
      { title: 'Аллергические высыпания', description: 'Кожные реакции на аллергены. Выявление триггеров и безопасная терапия.' },
    ],
    en: [
      { title: 'Atopic dermatitis', description: 'Itching, redness and dry skin in children. Managed with gentle therapy and parent guidance.' },
      { title: 'Allergic rashes', description: 'Skin reactions to allergens. Trigger identification and safe treatment planning.' },
    ],
  },
  fototerapiya: {
    uz: [
      { title: 'Psoriaz', description: 'Qizil plakalar va qalqonsimon qoplama. UVB 311 nm fototerapiya plakalarni kamaytiradi va remissiya muddatini uzaytiradi.' },
      { title: 'Vitiligo', description: 'Pigment yo\'qolishi bilan oq dog\'lar. Tor to\'lqinli UVB repigmentatsiyani rag\'batlantiradi.' },
    ],
    ru: [
      { title: 'Псориаз', description: 'Красные бляшки со шелушением. UVB 311 нм уменьшает высыпания и продлевает ремиссию.' },
      { title: 'Витилиго', description: 'Белые пятна при потере пигмента. Узкополосный UVB стимулирует репигментацию.' },
    ],
    en: [
      { title: 'Psoriasis', description: 'Red scaly plaques. UVB 311 nm phototherapy reduces lesions and extends remission.' },
      { title: 'Vitiligo', description: 'White patches from pigment loss. Narrow-band UVB stimulates repigmentation.' },
    ],
  },
  immunobiologicheskaya: {
    uz: [
      { title: 'Og\'ir surunkali psoriaz', description: 'Keng tarqalgan plakalar va an\'anaviy terapiyaga javob bermagan holatlar. Biologik preparatlar target yondashuv beradi.' },
    ],
    ru: [
      { title: 'Тяжелый псориаз', description: 'Распространенные бляшки при неэффективности стандартной терапии. Биологические препараты дают таргетный эффект.' },
    ],
    en: [
      { title: 'Severe chronic psoriasis', description: 'Widespread plaques unresponsive to standard therapy. Biologics provide targeted treatment.' },
    ],
  },
  konturnaya: {
    uz: [
      { title: 'Yuz hajmi kamayishi', description: 'Yosh bilan yonoq va lab hajmi kamayadi. Gialuron kislotali fillerlar konturni tiklaydi.' },
      { title: 'Nazolabial chiziqlar', description: 'Burun va lab atrofidagi chuqurlashgan chiziqlar. Filler bilan to\'ldiriladi.' },
    ],
    ru: [
      { title: 'Потеря объема лица', description: 'С возрастом уменьшается объем скул и губ. Филлеры восстанавливают контуры.' },
      { title: 'Носогубные складки', description: 'Глубокие складки от носа к губам. Корректируются филлерами.' },
    ],
    en: [
      { title: 'Facial volume loss', description: 'Cheeks and lips lose volume with age. Hyaluronic fillers restore contours.' },
      { title: 'Nasolabial folds', description: 'Deep lines from nose to mouth. Corrected with fillers.' },
    ],
  },
  botulino: {
    uz: [
      { title: 'Mimik ajinlar', description: 'Peshona, ko\'z atrofi va lab ustidagi ajinlar. Botulinoterapiya mushaklarni yumshatadi, terini tekislaydi.' },
    ],
    ru: [
      { title: 'Мимические морщины', description: 'Морщины лба, вокруг глаз и над губой. Ботулинотерапия расслабляет мышцы и разглаживает кожу.' },
    ],
    en: [
      { title: 'Expression wrinkles', description: 'Forehead, eye area and upper lip wrinkles. Botulinum therapy relaxes muscles and smooths skin.' },
    ],
  },
  biorev: {
    uz: [
      { title: 'Teri suvsizlanishi', description: 'Gialuron kislotasi mikroinyeksiyalari terini chuqur namlantiradi va yorqinlikni qaytaradi.' },
    ],
    ru: [
      { title: 'Обезвоженность кожи', description: 'Микроинъекции гиалуроновой кислоты глубоко увлажняют кожу и возвращают сияние.' },
    ],
    en: [
      { title: 'Skin dehydration', description: 'Hyaluronic acid microinjections deeply hydrate skin and restore glow.' },
    ],
  },
  'alex-lazer': {
    uz: [
      { title: 'Gipertrixoz', description: 'Aleksandrit lazer soch folikulasini yo\'q qiladi, teri uzoq muddat silliq bo\'ladi.' },
      { title: 'O\'sib ketgan sochlar', description: 'Lazer folikulni butunlay yo\'q qilib, yallig\'lanishni oldini oladi.' },
    ],
    ru: [
      { title: 'Гипертрихоз', description: 'Александритовый лазер разрушает фолликул и обеспечивает длительную гладкость.' },
      { title: 'Вросшие волосы', description: 'Лазер устраняет фолликул и предотвращает воспаление.' },
    ],
    en: [
      { title: 'Hypertrichosis', description: 'Alexandrite laser destroys follicles for long-lasting smooth skin.' },
      { title: 'Ingrown hairs', description: 'Laser eliminates follicles and prevents inflammation.' },
    ],
  },
  trixoskop: {
    uz: [
      { title: 'Alopeciya', description: 'Trixoskopiya soch to\'kilishi sababini aniqlaydi, keyin individual davolash rejalashtiriladi.' },
      { title: 'Bosh terisi seboreyasi', description: 'Qichish va qalqonsimon qoplama. Kompleks terapiya va parvarish tavsiya etiladi.' },
    ],
    ru: [
      { title: 'Алопеция', description: 'Трихоскопия определяет причину выпадения, затем составляется план лечения.' },
      { title: 'Себорея кожи головы', description: 'Зуд и перхоть. Назначается комплексная терапия.' },
    ],
    en: [
      { title: 'Alopecia', description: 'Trichoscopy identifies hair loss cause, then an individual treatment plan is made.' },
      { title: 'Scalp seborrhea', description: 'Itching and flaking. Combined therapy and care are recommended.' },
    ],
  },
  'photofinder-scan': {
    uz: [
      { title: 'Melanoma xavfi', description: 'PhotoFinder AI xavfli xol o\'zgarishlarini erta aniqlashga yordam beradi.' },
      { title: 'Ko\'p sonli xollar', description: 'Butun tana raqamli xaritalash yangi va o\'zgargan xollarni kuzatish imkonini beradi.' },
    ],
    ru: [
      { title: 'Риск меланомы', description: 'PhotoFinder с ИИ выявляет опасные изменения родинок на ранней стадии.' },
      { title: 'Множественные родинки', description: 'Цифровое картирование всего тела позволяет отслеживать новые и изменившиеся образования.' },
    ],
    en: [
      { title: 'Melanoma risk', description: 'PhotoFinder AI helps detect dangerous mole changes early.' },
      { title: 'Multiple moles', description: 'Full-body digital mapping tracks new and changing lesions.' },
    ],
  },
  biopsiya: {
    uz: [
      { title: 'Shubhali o\'sma', description: 'Biopsiya aniq tashxis uchun zarur. Gistologik tahlil yaxshi yoki yomon sifatli jarayonni aniqlaydi.' },
    ],
    ru: [
      { title: 'Подозрительное образование', description: 'Биопсия необходима для точного диагноза. Гистология определяет доброкачественность или злокачественность.' },
    ],
    en: [
      { title: 'Suspicious lesion', description: 'Biopsy is needed for accurate diagnosis. Histology determines benign vs malignant process.' },
    ],
  },
  'moh-surgery': {
    uz: [
      { title: 'Yuzdagi teri saratonlari', description: 'Mohs jarrohligi basalioma va spinotsellyular karsinomani sog\'lom to\'qimalarni saqlab olib tashlaydi.' },
    ],
    ru: [
      { title: 'Рак кожи на лице', description: 'Хирургия Mohs удаляет базалиому и плоскоклеточный рак с сохранением здоровых тканей.' },
    ],
    en: [
      { title: 'Facial skin cancer', description: 'Mohs surgery removes basal cell and squamous carcinoma while preserving healthy tissue.' },
    ],
  },
  'consult-group': {
    uz: [
      { title: 'Psoriaz nazorati', description: 'Guruhli maslahatlar parvarish, diet va kuchayishlarning oldini olish bo\'yicha amaliy bilim beradi.' },
    ],
    ru: [
      { title: 'Контроль псориаза', description: 'Групповые консультации дают практические знания по уходу и предотвращению обострений.' },
    ],
    en: [
      { title: 'Psoriasis control', description: 'Group counseling provides practical knowledge on care and preventing flares.' },
    ],
  },
  'dermatosc-lessons': {
    uz: [
      { title: 'Xavfli xollar diagnostikasi', description: 'Amaliy darslarda dermatoskopik belgilar bo\'yicha tajriba oshiriladi.' },
    ],
    ru: [
      { title: 'Диагностика опасных родинок', description: 'На практических курсах отрабатываются дерматоскопические признаки.' },
    ],
    en: [
      { title: 'Risky mole diagnosis', description: 'Practical workshops build skills in dermoscopic signs of dangerous lesions.' },
    ],
  },
  'podolog-dermatolog': {
    uz: [
      { title: 'O\'sib ketgan tirnoq', description: 'Podologik tuzatish og\'riqni kamaytiradi va tirnoq o\'sishini to\'g\'rilaydi.' },
      { title: 'Tirnoq zamburug\'i', description: 'Antifungal terapiya va tibbiy pedikyur bilan davolash samarali natija beradi.' },
    ],
    ru: [
      { title: 'Вросший ноготь', description: 'Подологическая коррекция уменьшает боль и исправляет рост ногтя.' },
      { title: 'Грибок ногтей', description: 'Противогрибковая терапия и медицинский педикюр дают эффективный результат.' },
    ],
    en: [
      { title: 'Ingrown toenail', description: 'Podologic correction reduces pain and corrects nail growth.' },
      { title: 'Nail fungus', description: 'Antifungal therapy and medical pedicure deliver effective results.' },
    ],
  },
  gistolog: {
    uz: [
      { title: 'Gistologik tashxis', description: 'Mikroskopik tahlil biopsiya namunasidagi patologik o\'zgarishlarni aniqlaydi.' },
    ],
    ru: [
      { title: 'Гистологический диагноз', description: 'Микроскопический анализ выявляет патологические изменения в биоптате.' },
    ],
    en: [
      { title: 'Histologic diagnosis', description: 'Microscopic analysis identifies pathological changes in biopsy samples.' },
    ],
  },
  'fy-protocols': {
    uz: [
      { title: 'Fotoeskirish', description: 'UV zarari terini erta qaritadi. Forever Young IPL kollegen yangilanishini rag\'batlantiradi.' },
      { title: 'Giperpigmentatsiya', description: 'Dog\'lar va rang notekisligi IPL protokollari bilan bosqichma-bosqich yengillashtiriladi.' },
    ],
    ru: [
      { title: 'Фотостарение', description: 'UV-повреждение ускоряет старение. Forever Young IPL стимулирует обновление коллагена.' },
      { title: 'Гиперпигментация', description: 'Пятна и неровный тон постепенно осветляются протоколами IPL.' },
    ],
    en: [
      { title: 'Photoaging', description: 'UV damage accelerates aging. Forever Young IPL stimulates collagen renewal.' },
      { title: 'Hyperpigmentation', description: 'Spots and uneven tone are gradually lightened with IPL protocols.' },
    ],
  },
};

export function getCategoryConditions(categoryId: string, locale: Locale): ServiceConditionTopic[] {
  return CATEGORY_CONDITIONS_CATALOG[categoryId]?.[locale] ?? CATEGORY_CONDITIONS_CATALOG[categoryId]?.uz ?? [];
}

export function getSubConditions(catalogKey: string, locale: Locale): ServiceConditionTopic[] {
  return SUB_CONDITIONS_CATALOG[catalogKey]?.[locale] ?? SUB_CONDITIONS_CATALOG[catalogKey]?.uz ?? [];
}
