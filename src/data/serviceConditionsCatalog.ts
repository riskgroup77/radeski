import type { Locale, ServiceConditionTopic } from '../types';

type LocalizedConditions = Record<Locale, ServiceConditionTopic[]>;

export const CATEGORY_CONDITIONS_CATALOG: Record<string, LocalizedConditions> = {
  'apparatnaya-kosmetologiya': {
    uz: [
      {
        title: 'Giperpigmentatsiya (teri rangining ortishi)',
        description:
          'Giperpigmentatsiya — teri ma\'lum qismlarining atrofdagi teriga qaraganda to\'qroq rangga kirishidir. Quyosh nurlari, gormonal o\'zgarishlar (homiladorlik, kontratseptivlar), akne keyingi dog\'lar yoki jarohatlar sabab bo\'lishi mumkin. Melasma ko\'pincha yuzda simmetrik dog\'lar shaklida paydo bo\'ladi. Apparatli kosmetologiyada Sciton IPL va gen darajasida foto-yangilash pigment hujayralarini bosqichma-bosqich yo\'q qiladi, teri rangini tekislaydi va qayta paydo bo\'lishining oldini olish uchun profilaktik reja tuziladi.',
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
          'Akne — yog\' bezlarining faoliyati buzilishi natijasida toshma, qizil to\'plamlar va ba\'zan chuqur izlar paydo bo\'lishi. Davolangandan keyin ham dog\'lar va tekstura o\'zgarishi qolishi mumkin (post-akne). Apparatli kosmetologiya pigment dog\'larni yengillashtiradi, teri teksturasini tekislaydi va kengaytirilgan toshma teshiklarini kamaytirishga yordam beradi. Dermatolog nazoratida xavfsiz protokol tanlanadi.',
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
        id: 'psoriaz',
        title: 'Psoriaz',
        description:
          'Psoriaz — immun tizimi faoliyati buzilishi bilan bog\'liq surunkali kasallik. Qizil dog\'lar va qalqonsimon qoplama tizza, tirsak va bosh terisida paydo bo\'ladi. Radeski klinikasida UVB fototerapiya, mahalliy terapiya va og\'ir holatlarda immunobiologik preparatlar qo\'llaniladi.',
      },
      {
        id: 'vitiligo',
        title: 'Vitiligo',
        description:
          'Vitiligo — terida pigment yo\'qolishi natijasida oq, chegarasi aniq dog\'lar hosil bo\'lishi. Yuz, qo\'llar va tizzalarda ko\'p uchraydi. Tor to\'lqinli UVB va Excimer lazer repigmentatsiyani rag\'batlantiradi.',
      },
      {
        id: 'teri-allergiyasi',
        title: 'Teri allergiyasi',
        description:
          'Teri allergiyasi — kosmetika, oziq-ovqat, metall yoki muhit moddalariga reaksiya: qizarish, qichish va toshma. Allergo-testlar, triggerlarni aniqlash va maxsus terapiya rejalashtiriladi.',
      },
      {
        id: 'ekzema',
        title: 'Ekzema',
        description:
          'Ekzema — surunkali yallig\'lanish bilan qichish, qizarish va teri quruqligi. Stress, iqlim va tirnashchi moddalar kuchaytirishi mumkin. Parvarish rejasi va mahalliy terapiya asosiy yondashuv.',
      },
      {
        id: 'atopik-dermatit',
        title: 'Atopik dermatit',
        description:
          'Atopik dermatit — bolalar va kattalarda uchraydigan surunkali qichish va quruq teri. Allergiya anamnezi bilan bog\'liq bo\'lishi mumkin. Emolientlar, triggerlardan saqlanish va shifokor nazoratidagi terapiya.',
      },
      {
        id: 'teri-doglari',
        title: "Teri dog'lari (pigmentatsiya)",
        description:
          'Pigment dog\'lari — melasma, post-akne dog\'lari va quyosh ta\'siridan rang o\'zgarishi. Dermatolog ko\'rigi va apparat muolajalari (IPL, lazer) individual tanlanadi.',
      },
      {
        id: 'acne',
        title: 'Acne (ugri)',
        description:
          'Acne — folikula va yog\' bezlarining yallig\'lanishi: qizil toshmalar, qopqora nuqtalar va ba\'zan chandiqlar. Gormonlar, stress va noto\'g\'ri parvarish kuchaytiradi. Kompleks davolash — dori, parvarish va apparat.',
      },
      {
        id: 'rozasea',
        title: 'Rozasea',
        description:
          'Rozasea — yuzda doimiy qizarish, kengaygan qon tomirlari va ba\'zan toshmalar. Issiqlik, alkogol va stress kuchaytirishi mumkin. IPL, vaskulyar lazer va parvarish protokollari qo\'llaniladi.',
      },
      {
        id: 'postacne',
        title: 'Postacne',
        description:
          'Postacne — akne tugagach qolgan chandiqlar, ko\'ngillik va pigment dog\'lari. Lazer resurfacing, biorevitalizatsiya va apparatli protokollar teri tekisligini tiklashga yordam beradi.',
      },
      {
        id: 'seboreyali-dermatit',
        title: 'Seboreyali dermatit',
        description:
          'Seboreyali dermatit — bosh terisi va yuzda yog\'li teri, qichish va qalqonsimon qoplama. Stress va zamburug\' faolligi kuchaytirishi mumkin. Antifungal va yallig\'lanishga qarshi terapiya.',
      },
      {
        id: 'yuz-qizarishi',
        title: 'Yuz qizarishi',
        description:
          'Yuz qizarishi — rozasea, kuperoz yoki sezgir teri sababli doimiy yoki vaqtinchalik qizillik. Qon tomirlari kengaygan bo\'lsa, lazer va IPL muolajalari ko\'rsatiladi.',
      },
      {
        id: 'teri-qichishi',
        title: 'Terning qichishi',
        description:
          'Terning qichishi (pruritus) — ekzema, allergiya, quruq teri yoki ichki kasallik belgisi bo\'lishi mumkin. Sababni aniqlash uchun dermatolog ko\'rigi va kerak bo\'lsa qo\'shimcha tekshiruvlar o\'tkaziladi.',
      },
    ],
    ru: [
      { id: 'psoriaz', title: 'Псориаз', description: 'Хроническое иммунное заболевание с красными бляшками и шелушением. Лечение: UVB-фототерапия, местная терапия, биологические препараты.' },
      { id: 'vitiligo', title: 'Витилиго', description: 'Белые чёткие пятна при гибели меланоцитов. Узкополосный UVB и эксимер стимулируют репигментацию.' },
      { id: 'teri-allergiyasi', title: 'Аллергия кожи', description: 'Кожные реакции на косметику, продукты и раздражители. Аллергопробы и целенаправленная терапия.' },
      { id: 'ekzema', title: 'Экзема', description: 'Хроническое воспаление с зудом и покраснением. Уход и местная терапия по индивидуальному плану.' },
      { id: 'atopik-dermatit', title: 'Атопический дерматит', description: 'Хронический зуд и сухость кожи у детей и взрослых. Эмоленты и контроль триггеров.' },
      { id: 'teri-doglari', title: 'Пигментные пятна', description: 'Мелasma, постакне и солнечная пигментация. Осмотр и аппаратные методы (IPL, лазер).' },
      { id: 'acne', title: 'Акне', description: 'Воспаление фолликулов: угри, комедоны. Комплекс: медикаменты, уход и аппаратные процедуры.' },
      { id: 'rozasea', title: 'Розацеа', description: 'Покраснение лица, сосуды, высыпания. IPL, сосудистый лазер и уход.' },
      { id: 'postacne', title: 'Постакне', description: 'Рубцы и пигментация после акне. Лазерное обновление и биоревитализация.' },
      { id: 'seboreyali-dermatit', title: 'Себорейный дерматит', description: 'Жирная кожа, перхоть, зуд. Противовоспалительная и противогрибковая терапия.' },
      { id: 'yuz-qizarishi', title: 'Покраснение лица', description: 'Розацеа, купероз или чувствительная кожа. Лазер и IPL при расширенных сосудах.' },
      { id: 'teri-qichishi', title: 'Зуд кожи', description: 'Может быть симптомом экземы, аллергии или сухости. Диагностика и лечение причины.' },
    ],
    en: [
      { id: 'psoriaz', title: 'Psoriasis', description: 'Chronic immune-mediated plaques and scaling. UVB phototherapy, topicals and biologics for severe cases.' },
      { id: 'vitiligo', title: 'Vitiligo', description: 'Sharply bordered white patches from melanocyte loss. Narrow-band UVB and Excimer laser support repigmentation.' },
      { id: 'teri-allergiyasi', title: 'Skin allergy', description: 'Reactions to cosmetics, food and irritants. Allergy testing and targeted therapy.' },
      { id: 'ekzema', title: 'Eczema', description: 'Chronic inflammation with itch and redness. Care plan and topical therapy.' },
      { id: 'atopik-dermatit', title: 'Atopic dermatitis', description: 'Chronic itch and dryness in children and adults. Emollients and trigger control.' },
      { id: 'teri-doglari', title: 'Skin spots (pigmentation)', description: 'Melasma, post-acne and sun spots. Exam and device treatments (IPL, laser).' },
      { id: 'acne', title: 'Acne', description: 'Follicle inflammation: pimples and comedones. Combined medical, care and device approach.' },
      { id: 'rozasea', title: 'Rosacea', description: 'Facial redness, vessels and bumps. IPL, vascular laser and care protocols.' },
      { id: 'postacne', title: 'Post-acne', description: 'Scars and pigmentation after acne. Laser renewal and biorevitalization.' },
      { id: 'seboreyali-dermatit', title: 'Seborrheic dermatitis', description: 'Oily skin, flaking and itch. Anti-inflammatory and antifungal therapy.' },
      { id: 'yuz-qizarishi', title: 'Facial redness', description: 'Rosacea, couperose or sensitive skin. Laser and IPL for visible vessels.' },
      { id: 'teri-qichishi', title: 'Skin itching', description: 'May signal eczema, allergy or dryness. Diagnosis and cause-based treatment.' },
    ],
  },
  dermatoskopiya: {
    uz: [
      {
        title: 'Shubhali hol (nevus) o\'zgarishi',
        description:
          'Rang, shakl yoki hajm o\'zgarishi melanoma belgisi bo\'lishi mumkin. Dermatoskopiya xavfli va xavfsiz o\'zgarishlarni farqlashga yordam beradi.',
      },
      {
        title: 'Ko\'p sonli hol va dog\'lar',
        description:
          '50 dan ortiq hol bo\'lsa, tizimli butun tana ko\'rigi tavsiya etiladi. Yashirin zonalardagi o\'zgarishlar ham baholanadi.',
      },
      {
        title: 'Papilloma va pigment dog\'',
        description:
          'Virus yoki yoshga bog\'liq o\'smalar dermatoskop orqali aniqroq baholanadi — kerak bo\'lsa biopsiya yoki davolash rejalashtiriladi.',
      },
    ],
    ru: [
      { title: 'Изменение родинки', description: 'Дерматоскопия помогает отличить опасные изменения от доброкачественных.' },
      { title: 'Множественные родинки', description: 'При большом числе nevus рекомендуется системный осмотр всего тела.' },
      { title: 'Папилломы и пигментные пятна', description: 'Дерматоскопическая оценка уточняет тактику — наблюдение или лечение.' },
    ],
    en: [
      { title: 'Changing mole (nevus)', description: 'Dermoscopy helps distinguish dangerous from benign changes.' },
      { title: 'Multiple moles', description: 'With many nevi, systematic full-body screening is recommended.' },
      { title: 'Papillomas and pigmented spots', description: 'Dermoscopic assessment clarifies observation or treatment plan.' },
    ],
  },
  trixoskopiya: {
    uz: [
      {
        title: 'Androgenezik alopeciya',
        description:
          'Erkak va ayollarda soch chizig\'i va tepada suyultirish. Trixoskopiya follikula miniatyuralanishi va soch qalinligi o\'zgarishini ko\'rsatadi — keyin individual terapiya belgilanadi.',
      },
      {
        title: 'Yoynasimon (o\'choqli) alopeciya',
        description:
          'Kal joylar paydo bo\'lganda trixoskop yallig\'lanish va follikula shikastlanish belgilarini aniqlaydi. Erta murojaat tiklanish imkoniyatini oshiradi.',
      },
      {
        title: 'Seboreya va bosh terisi yallig\'lanishi',
        description:
          'Kepak, qichish va yog\'lanish trixoskop orqali baholanadi. Asosiy sabab aniqlangach, parvarish va dori-darmonlar rejalashtiriladi.',
      },
    ],
    ru: [
      { title: 'Андrogenная алопеция', description: 'Трихоскопия показывает миниaturization фолликулов и истончение — назначается индивидуальная терапия.' },
      { title: 'Очаговая алопеция', description: 'При залысинах трихоскопия выявляет признаки воспаления. Раннее обращение повышает шансы восстановления.' },
      { title: 'Себорея и воспаление кожи головы', description: 'Перхоть и зуд оцениваются трихоскопически, затем составляется план лечения.' },
    ],
    en: [
      { title: 'Androgenic alopecia', description: 'Trichoscopy reveals follicle miniaturization and thinning — individual therapy follows.' },
      { title: 'Patchy alopecia', description: 'Trichoscopy detects inflammation markers in bald patches. Early visit improves recovery chances.' },
      { title: 'Seborrhea and scalp inflammation', description: 'Flaking and itching are assessed trichoscopically, then a care and treatment plan is made.' },
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
        title: 'Melanoma xavfi (xavfli xollar — nevus)',
        description:
          'Teridagi xollar (nevus) o\'zgarishi melanoma belgisi bo\'lishi mumkin. Dermatoskopiya yordamida xavfli o\'zgarishlarni erta aniqlash mumkin.',
      },
      {
        title: 'Papilloma va so\'gal',
        description:
          'Virus (HPV) sababli o\'simalar paydo bo\'ladi. Dermatoskopik ko\'rik va kerak bo\'lsa biopsiya bilan aniq tashxis qo\'yiladi.',
      },
    ],
    ru: [
      { title: 'Риск меланомы', description: 'Дерматоскопия выявляет опасные изменения родинок на ранней стадии.' },
      { title: 'Папилломы и бородавки', description: 'Вирусные образования диагностируются дерматоскопически и при необходимости биопсией.' },
    ],
    en: [
      { title: 'Melanoma risk', description: 'Clinical dermatoscopy detects dangerous mole changes at an early stage.' },
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
  'ipl-inmode': {
    uz: [
      {
        title: 'Melasma (gormonal pigmentatsiya)',
        description:
          'Melasma — yuzda simmetrik jigarrang dog\'lar. InMode IPL pigment hujayralarini tanlab yo\'q qiladi, teri rangini bir tekis qiladi. Bir necha seansdan keyin dog\'lar sezilarli ochiladi.',
      },
      {
        title: 'Kuperoz (qon tomir tarmoqlari)',
        description:
          'Yuzda kichik qizil yoki binafsha tomirlar ko\'rinadi. InMode IPL tomirlarni yopadi, qizarishni kamaytiradi. Og\'riqsiz va samarali usul.',
      },
      {
        title: 'Teri rangining notekisligi',
        description:
          'Turli sabablarga ko\'ra teri ba\'zi joylari to\'qroq yoki ochroq bo\'ladi. Individual IPL protokoli rangni tekislaydi, teri yorqinligi va teksturasini yaxshilaydi.',
      },
    ],
    ru: [
      { title: 'Мелазма', description: 'Гормональная пигментация на лице. InMode IPL селективно устраняет пигмент и выравнивает тон за несколько сеансов.' },
      { title: 'Купероз', description: 'Сосудистые звездочки на лице. IPL InMode закрывает сосуды и уменьшает покраснение безболезненно.' },
      { title: 'Неровный тон кожи', description: 'Различия в цвете кожи. Индивидуальный протокол IPL выравнивает тон и улучшает текстуру.' },
    ],
    en: [
      { title: 'Melasma', description: 'Hormonal facial pigmentation. InMode IPL selectively removes pigment and evens tone within several sessions.' },
      { title: 'Couperose', description: 'Facial vascular spider veins. InMode IPL closes vessels and reduces redness painlessly.' },
      { title: 'Uneven skin tone', description: 'Color irregularities on skin. Individual IPL protocol evens tone and improves texture.' },
    ],
  },
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
  'trix-konsult': {
    uz: [
      { title: 'Birinchi murojaat', description: 'Trixoskopik ko\'rik soch va bosh terisi holatini aniq baholaydi — keyingi davolash yo\'nalishi belgilanadi.' },
      { title: 'Bosh terisi muammolari', description: 'Qichish, kepak yoki qizarish trixoskop orqali chuqurroq tahlil qilinadi.' },
    ],
    ru: [
      { title: 'Первичное обращение', description: 'Трихоскопический осмотр оценивает состояние волос и кожи головы — определяется тактика лечения.' },
      { title: 'Проблемы кожи головы', description: 'Зуд, перхоть или покраснение анализируются трихоскопически.' },
    ],
    en: [
      { title: 'First visit', description: 'Trichoscopic exam assesses scalp and hair — treatment direction is defined.' },
      { title: 'Scalp problems', description: 'Itching, flaking or redness are analyzed with trichoscopy.' },
    ],
  },
  'trix-alopecia': {
    uz: [
      { title: 'Diffuz soch to\'kilishi', description: 'Butun boshda suyultirish — trixoskop telogen yoki diffuz alopeciya belgilarini ko\'rsatadi.' },
      { title: 'Androgenezik alopeciya', description: 'Follikula miniatyuralanishi va soch ingichkalashuvi trixoskopda aniq ko\'rinadi.' },
    ],
    ru: [
      { title: 'Диффузное выпадение', description: 'Редение по всей голове — трихоскопия показывает признаки телогена или диффузной алопеции.' },
      { title: 'Андrogenная алопеция', description: 'Мiniaturization фолликулов и истончение волос видны на трихоскопии.' },
    ],
    en: [
      { title: 'Diffuse hair loss', description: 'Thinning across the scalp — trichoscopy shows telogen or diffuse alopecia markers.' },
      { title: 'Androgenic alopecia', description: 'Follicle miniaturization and hair thinning are clearly visible on trichoscopy.' },
    ],
  },
  'trix-monitoring': {
    uz: [
      { title: 'Mezoterapiya natijasi', description: 'Kurs tugagach trixoskop orqali soch zichligi va follikula holati qayta baholanadi.' },
      { title: 'PRP samaradorligi', description: 'Plazmoterapiya seanslari keyin o\'sish va tiklanish dinamikasi trixoskop bilan kuzatiladi.' },
    ],
    ru: [
      { title: 'Результат мезотерапии', description: 'После курса трихоскопия повторно оценивает плотность и состояние фолликулов.' },
      { title: 'Эффективность PRP', description: 'После плазмотерапии динамика роста отслеживается трихоскопически.' },
    ],
    en: [
      { title: 'Mesotherapy results', description: 'After the course, trichoscopy re-assesses density and follicle status.' },
      { title: 'PRP effectiveness', description: 'Growth dynamics after plasma therapy are tracked with trichoscopy.' },
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
      { title: 'Xavfli xollar (nevus) diagnostikasi', description: 'Amaliy darslarda dermatoskopik belgilar bo\'yicha tajriba oshiriladi.' },
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

function slugifyConditionTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[''`ʻʼ]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48) || 'item';
}

function withStableConditionIds(
  items: ServiceConditionTopic[],
  uzItems: ServiceConditionTopic[],
  scope: string,
): ServiceConditionTopic[] {
  return items.map((item, index) => {
    const uzTitle = uzItems[index]?.title ?? item.title;
    return {
      ...item,
      id: uzItems[index]?.id ?? item.id ?? `${scope}-${slugifyConditionTitle(uzTitle)}`,
    };
  });
}

export function getCategoryConditions(categoryId: string, locale: Locale): ServiceConditionTopic[] {
  const uzList = CATEGORY_CONDITIONS_CATALOG[categoryId]?.uz ?? [];
  const items = CATEGORY_CONDITIONS_CATALOG[categoryId]?.[locale] ?? uzList;
  return withStableConditionIds(items, uzList, `cat-${categoryId}`);
}

export function getSubConditions(catalogKey: string, locale: Locale): ServiceConditionTopic[] {
  const uzList = SUB_CONDITIONS_CATALOG[catalogKey]?.uz ?? [];
  const items = SUB_CONDITIONS_CATALOG[catalogKey]?.[locale] ?? uzList;
  return withStableConditionIds(items, uzList, `sub-${catalogKey}`);
}
