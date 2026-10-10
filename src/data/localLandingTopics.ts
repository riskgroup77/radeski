import type { LocalizedCopy, LocalCommercialFaq } from './localCommercialSeoCatalog';

/**
 * Substantive content for the city service pages (/uz/fargona/lazer-epilyatsiya …): what the
 * service is, how a visit goes, service-specific questions, and which price-list rows belong
 * to it (exact `name.uz` of the CMS price items). Shared by both cities; the city-specific
 * parts (address, hours, phone, prices "from") are added around it.
 */
/** When the city-page texts below were last revised (shown on the pages and in dateModified). */
export const LOCAL_LANDING_CONTENT_UPDATED = '2026-10-10';

export interface LocalLandingTopic {
  about: LocalizedCopy[];
  steps: LocalizedCopy[];
  faqs: LocalCommercialFaq[];
  /**
   * Uzbek names of the price-list rows shown on the page (order kept; a name matches rows
   * that start with it). "section|name" (price-list section id) picks one row when the name
   * exists in several sections.
   */
  priceNames: string[];
}

function L(uz: string, ru: string, en: string): LocalizedCopy {
  return { uz, ru, en };
}

function Q(question: LocalizedCopy, answer: LocalizedCopy): LocalCommercialFaq {
  return { question, answer };
}

const VISIT_STEPS = {
  consult: L(
    'Shifokor ko‘rigi: shikoyatlar, anamnez va terini dermatoskop bilan baholash',
    'Приём врача: жалобы, анамнез и осмотр кожи с дерматоскопом',
    'Doctor visit: complaints, history and skin examination with a dermatoscope',
  ),
  plan: L(
    'Tashxis va shaxsiy davolash rejasi — muolajalar soni va narxi oldindan aytiladi',
    'Диагноз и индивидуальный план — количество процедур и стоимость озвучиваются заранее',
    'Diagnosis and a personal plan — number of sessions and cost are agreed in advance',
  ),
  followUp: L(
    'Nazorat ko‘rigi va natijani kuzatish',
    'Контрольный осмотр и наблюдение за результатом',
    'Follow-up visit and monitoring of the result',
  ),
};

const DERMATOLOGIST_PRICES = [
  "Dermatovenerolog shifokorining birinchi ko'rigi",
  "Dermatovenerolog shifokorining takroriy ko'rigi",
];

const PHOTOTHERAPY_PRICES = [
  'Daavlin NeoLux (1 seans)',
  'Excimer lazer (1–5 nuqta)',
  'Excimer lazer (5–10 nuqta)',
  "Davlin M — qo'llar va oyoqlar",
  'Davlin 1-seriya (1 seans)',
];

const VASCULAR_PRICES = [
  'Yuzdagi qon tomir yulduzchalarini Derma V lazer bilan olib tashlash (dan)',
  'Burun qanotlaridagi teleangiektaziyalarni Derma V lazer bilan olib tashlash (dan)',
  'Kuperoz va rozatseani davolash (Derma V lazer)',
  "Pastki oyoq-qo'llardagi venalarni Derma V lazer bilan olib tashlash (dan)",
  'Gemangiomalarni Derma V lazer bilan davolash (dan)',
  'Butun tanadagi teleangiektaziyalarni Derma V lazer bilan olib tashlash (dan)',
];

const ONCO_PRICES = [
  "Dermatoonkolog shifokorining birinchi ko'rigi + dermatoskopiya",
  'Dermatoonkolog shifokoriga takroriy konsultatsiya',
  "Butun tana dermatoskopiyasi + ma'lumotlar bazasi",
];

export const LOCAL_LANDING_TOPICS: Record<string, LocalLandingTopic> = {
  dermatolog: {
    about: [
      L(
        'Dermatolog — teri, soch, tirnoq va shilliq qavat kasalliklarini aniqlaydigan va davolaydigan shifokor. Radeski Skin Clinic’da qabulni dermatovenerologlar olib boradi: akne, ekzema, atopik dermatit, psoriaz, vitiligo, zamburug‘ infeksiyalari, allergik toshmalar, so‘gal va xollar bo‘yicha.',
        'Дерматолог — врач, который диагностирует и лечит болезни кожи, волос, ногтей и слизистых. В Radeski Skin Clinic приём ведут дерматовенерологи: акне, экзема, атопический дерматит, псориаз, витилиго, грибковые инфекции, аллергические высыпания, бородавки и родинки.',
        'A dermatologist diagnoses and treats diseases of the skin, hair, nails and mucosa. At Radeski Skin Clinic, dermatovenerologists see patients with acne, eczema, atopic dermatitis, psoriasis, vitiligo, fungal infections, allergic rashes, warts and moles.',
      ),
      L(
        'Klinikada laboratoriya, dermatoskopiya, fototerapiya (Daavlin) va lazer apparatlari bir joyda bo‘lgani uchun tashxis va davolash boshqa joyga yo‘naltirmasdan, bitta rejada olib boriladi.',
        'Лаборатория, дерматоскопия, фототерапия Daavlin и лазеры находятся в одной клинике, поэтому диагностика и лечение проходят по одному плану, без направлений в другие места.',
        'The lab, dermatoscopy, Daavlin phototherapy and lasers are under one roof, so diagnosis and treatment follow a single plan without referrals elsewhere.',
      ),
    ],
    steps: [
      VISIT_STEPS.consult,
      L('Kerak bo‘lsa tahlillar: qon, zamburug‘ tahlili, biopsiya', 'При необходимости анализы: кровь, исследование на грибок, биопсия', 'Tests when needed: blood, fungal test, biopsy'),
      VISIT_STEPS.plan,
      VISIT_STEPS.followUp,
    ],
    faqs: [
      Q(
        L('Dermatolog qabuliga yo‘llanma kerakmi?', 'Нужно ли направление к дерматологу?', 'Do I need a referral?'),
        L('Yo‘q, qabulga to‘g‘ridan-to‘g‘ri yozilishingiz mumkin.', 'Нет, записаться можно напрямую.', 'No, you can book directly.'),
      ),
      Q(
        L('Bolalarni ham qabul qilasizmi?', 'Принимаете ли детей?', 'Do you see children?'),
        L('Ha, bolalar dermatologik muammolari bilan ham murojaat qilish mumkin.', 'Да, детей с кожными проблемами тоже принимаем.', 'Yes, children with skin problems are seen too.'),
      ),
    ],
    priceNames: [...DERMATOLOGIST_PRICES, "Zamburug' tahlili (silliq teri va sochli bosh qismidan)"],
  },

  trixolog: {
    about: [
      L(
        'Trixolog — soch va bosh terisi kasalliklari bo‘yicha shifokor. Soch to‘kilishi, siyraklashish, alopetsiya (o‘choqli, androgenetik, diffuz), qazg‘oq va bosh terisi qichishi sabablarini aniqlaydi.',
        'Трихолог — врач по заболеваниям волос и кожи головы. Выясняет причины выпадения и поредения волос, алопеции (очаговой, андрогенетической, диффузной), перхоти и зуда кожи головы.',
        'A trichologist treats hair and scalp disorders: hair loss and thinning, alopecia (areata, androgenetic, diffuse), dandruff and scalp itching.',
      ),
      L(
        'Birinchi qabulda raqamli trixoskopiya qilinadi — soch follikulalari kattalashtirilgan holda ko‘riladi. Davolash rejasida PRP-terapiya, mezoterapiya, tuliy lazer va kerak bo‘lsa soch ekish bor.',
        'На первом приёме проводится цифровая трихоскопия — фолликулы рассматриваются под увеличением. В плане лечения — PRP-терапия, мезотерапия, тулиевый лазер и при показаниях пересадка волос.',
        'The first visit includes digital trichoscopy of the follicles under magnification. Treatment options include PRP, mesotherapy, thulium laser and, when indicated, hair transplant.',
      ),
    ],
    steps: [
      L('Trixolog ko‘rigi va raqamli trixoskopiya', 'Осмотр трихолога и цифровая трихоскопия', 'Trichologist exam and digital trichoscopy'),
      L('Kerak bo‘lsa qon tahlillari (gormonlar, ferritin, vitaminlar)', 'При необходимости анализы крови (гормоны, ферритин, витамины)', 'Blood tests when needed (hormones, ferritin, vitamins)'),
      VISIT_STEPS.plan,
      L('Kurs davomida trixoskopik nazorat', 'Трихоскопический контроль в ходе курса', 'Trichoscopy check-ups during the course'),
    ],
    faqs: [
      Q(
        L('Natija qachon ko‘rinadi?', 'Когда будет виден результат?', 'When will I see results?'),
        L('Soch o‘sishi sekin jarayon: odatda 2–3 oydan keyin to‘kilish kamayadi, yangi soch 4–6 oyda ko‘rinadi.', 'Рост волос — медленный процесс: выпадение обычно уменьшается через 2–3 месяца, новые волосы видны через 4–6 месяцев.', 'Hair growth is slow: shedding usually drops after 2–3 months, new hair shows in 4–6 months.'),
      ),
      Q(
        L('Erkaklar ham murojaat qiladimi?', 'Обращаются ли мужчины?', 'Do men come too?'),
        L('Ha, androgenetik alopetsiya erkaklarda ko‘p uchraydi va erta boshlangan davolash samaraliroq.', 'Да, андрогенетическая алопеция у мужчин встречается часто, и раннее лечение эффективнее.', 'Yes, androgenetic alopecia is common in men and early treatment works better.'),
      ),
    ],
    priceNames: [
      "Trixolog shifokorining birinchi ko'rigi + trixoskopiya",
      "Trixolog shifokorining takroriy ko'rigi",
      'PRP terapiya (sochlar uchun)',
      'PRP terapiya (yarim hajm)',
      'Hair Vital (Ispaniya) — ayollar uchun',
      'Hair Loss Control — erkaklar uchun',
      'Soch ekish (narxdan boshlab)',
    ],
  },

  podolog: {
    about: [
      L(
        'Podolog — oyoq panjasi, tovon va tirnoqlar muammolari bilan ishlaydigan mutaxassis: o‘sib ketgan tirnoq, tirnoq zamburug‘i, qadoq va mozollar, tovon yorilishi, tirnoq qalinlashishi.',
        'Подолог — специалист по проблемам стоп, пяток и ногтей: вросший ноготь, грибок ногтей, мозоли и натоптыши, трещины пяток, утолщение ногтей.',
        'A podiatrist deals with foot, heel and nail problems: ingrown nails, nail fungus, calluses and corns, cracked heels and thickened nails.',
      ),
      L(
        'Tibbiy pedikyur apparat bilan, steril asboblarda bajariladi. O‘sib ketgan tirnoq ko‘p hollarda operatsiyasiz — titan ip yoki korreksiya bilan to‘g‘rilanadi.',
        'Медицинский педикюр выполняется аппаратом и стерильными инструментами. Вросший ноготь во многих случаях исправляется без операции — титановой нитью или коррекцией.',
        'Medical pedicure is done with a device and sterile instruments. An ingrown nail can often be corrected without surgery, using a titanium thread or bracing.',
      ),
    ],
    steps: [
      L('Podolog konsultatsiyasi va oyoqni ko‘rik', 'Консультация подолога и осмотр стоп', 'Podiatrist consultation and foot exam'),
      L('Zamburug‘ga shubha bo‘lsa — laborator tahlil', 'При подозрении на грибок — лабораторный анализ', 'Lab test if fungus is suspected'),
      L('Apparat bilan tozalash, korreksiya yoki davolash muolajasi', 'Аппаратная обработка, коррекция или лечебная процедура', 'Device treatment, correction or therapy session'),
      L('Uy parvarishi bo‘yicha tavsiyalar', 'Рекомендации по домашнему уходу', 'Home care advice'),
    ],
    faqs: [
      Q(
        L('Qandli diabeti bor bemorlarni qabul qilasizmi?', 'Принимаете ли пациентов с диабетом?', 'Do you treat diabetic feet?'),
        L('Ha, diabetik oyoq parvarishi ehtiyotkorlik bilan, shifokor nazoratida bajariladi.', 'Да, уход за диабетической стопой проводится бережно, под контролем врача.', 'Yes, diabetic foot care is done carefully under medical supervision.'),
      ),
      Q(
        L('O‘sib ketgan tirnoqni olib tashlash og‘riqlimi?', 'Больно ли удалять вросший ноготь?', 'Is ingrown nail treatment painful?'),
        L('Muolaja mahalliy og‘riqsizlantirish bilan qilinadi; ko‘p hollarda tirnoqni to‘liq olib tashlash shart emas.', 'Процедура проходит под местной анестезией; во многих случаях удалять ноготь полностью не нужно.', 'It is done under local anaesthesia, and the whole nail often does not need removing.'),
      ),
    ],
    priceNames: [
      'Podologning birinchi konsultatsiyasi',
      "O'sib ketgan tirnoqni olib tashlash",
      "Titan ip (o'sib ketgan tirnoq uchun)",
      'Tirnoqlarni apparat bilan tozalash',
      'Tovonni apparat bilan tozalash',
      'Mozolini davolash (yadrosiz)',
    ],
  },

  'akne-davolash': {
    about: [
      L(
        'Akne (husnbuzar) — yog‘ bezlari va soch follikulalarining yallig‘lanishi. U faqat o‘smirlarda emas, kattalarda ham uchraydi va noto‘g‘ri davolansa chandiq hamda dog‘lar (postakne) qoldiradi.',
        'Акне — воспаление сальных желёз и волосяных фолликулов. Встречается не только у подростков, но и у взрослых, а при неправильном лечении оставляет рубцы и пятна (постакне).',
        'Acne is inflammation of the oil glands and hair follicles. It affects adults as well as teenagers and, if treated poorly, leaves scars and marks (post-acne).',
      ),
      L(
        'Davolash akne darajasiga qarab tanlanadi: tashqi va ichki dori vositalari, pilinglar, Hollywood Spectra lazeri, IPL va Face Art protokoli. Postakne uchun DEKA CO₂ lazer shlifovkasi qo‘llaniladi.',
        'Лечение подбирается по степени акне: наружные и системные препараты, пилинги, лазер Hollywood Spectra, IPL и протокол Face Art. При постакне применяется шлифовка CO₂-лазером DEKA.',
        'Treatment depends on acne severity: topical and oral medication, peels, Hollywood Spectra laser, IPL and the Face Art protocol. Post-acne scars are treated with DEKA CO₂ laser resurfacing.',
      ),
    ],
    steps: [
      VISIT_STEPS.consult,
      L('Kerak bo‘lsa gormon va boshqa tahlillar', 'При необходимости гормональные и другие анализы', 'Hormone and other tests when needed'),
      L('Dori + apparat muolajalaridan iborat kurs', 'Курс из препаратов и аппаратных процедур', 'A course of medication plus device sessions'),
      L('Postakne va dog‘larni tuzatish', 'Коррекция постакне и пятен', 'Correction of post-acne marks'),
    ],
    faqs: [
      Q(
        L('Akne qancha vaqtda davolanadi?', 'Сколько длится лечение акне?', 'How long does acne treatment take?'),
        L('Yengil shakli 1–2 oyda yaxshilanadi, o‘rta va og‘ir shakllari 3–6 oy davolanadi.', 'Лёгкая форма улучшается за 1–2 месяца, средняя и тяжёлая лечатся 3–6 месяцев.', 'Mild acne improves in 1–2 months; moderate and severe forms take 3–6 months.'),
      ),
      Q(
        L('Uyda husnbuzarni siqish mumkinmi?', 'Можно ли выдавливать прыщи дома?', 'Can I squeeze pimples at home?'),
        L('Yo‘q — bu infeksiyani chuqurlashtiradi va chandiq qoldiradi.', 'Нет — это углубляет инфекцию и оставляет рубцы.', 'No — it drives infection deeper and causes scars.'),
      ),
    ],
    priceNames: [
      "Dermatovenerolog shifokorining birinchi ko'rigi",
      'Akne, qizarish va post-akneni davolash — Hollywood Spectra (gold toning)',
      'Face Art — rozatsea va akneni davolash',
      'Karbonli piling — Hollywood Spectra',
      'Yuz tozalash: PRX-T33 piling',
    ],
  },

  'soch-tokilish': {
    about: [
      L(
        'Kuniga 50–100 tagacha soch to‘kilishi normal. Undan ko‘p bo‘lsa, soch siyraklashsa yoki o‘choqlar paydo bo‘lsa — sababni aniqlash kerak: gormonlar, temir tanqisligi, stress, qalqonsimon bez, irsiyat yoki bosh terisi kasalligi.',
        'Выпадение до 50–100 волос в день — норма. Если больше, волосы редеют или появились очаги — нужно искать причину: гормоны, дефицит железа, стресс, щитовидная железа, наследственность или болезнь кожи головы.',
        'Losing up to 50–100 hairs a day is normal. If it is more, the hair thins or patches appear, the cause must be found: hormones, iron deficiency, stress, thyroid, genetics or a scalp disease.',
      ),
      L(
        'Radeski’da trixolog trixoskopiya va tahlillar asosida tashxis qo‘yadi va davolashni tanlaydi: PRP-terapiya, Hair Vital / Hair Loss Control protokollari, tuliy lazer mezoterapiyasi, kerak bo‘lsa soch ekish.',
        'В Radeski трихолог ставит диагноз по трихоскопии и анализам и подбирает лечение: PRP-терапия, протоколы Hair Vital / Hair Loss Control, мезотерапия тулиевым лазером, при показаниях — пересадка волос.',
        'At Radeski the trichologist diagnoses with trichoscopy and lab tests and chooses treatment: PRP, Hair Vital / Hair Loss Control protocols, thulium laser mesotherapy and, if indicated, hair transplant.',
      ),
    ],
    steps: [
      L('Trixoskopiya — sochning holatini kattalashtirib ko‘rish', 'Трихоскопия — осмотр волос под увеличением', 'Trichoscopy — magnified hair exam'),
      L('Sababni aniqlash uchun qon tahlillari', 'Анализы крови для поиска причины', 'Blood tests to find the cause'),
      VISIT_STEPS.plan,
      L('Har 2–3 oyda trixoskopik nazorat', 'Контроль трихоскопией каждые 2–3 месяца', 'Trichoscopy check every 2–3 months'),
    ],
    faqs: [
      Q(
        L('Shampun yoki vitaminlar yetarli emasmi?', 'Разве не хватит шампуня или витаминов?', 'Aren’t shampoo or vitamins enough?'),
        L('Sabab aniqlanmasa, shampun va vitaminlar ko‘pincha yordam bermaydi — avval tashxis kerak.', 'Без выявленной причины шампуни и витамины часто не помогают — сначала нужен диагноз.', 'Without a diagnosis shampoo and vitamins often do not help — diagnosis comes first.'),
      ),
      Q(
        L('PRP-terapiya nechta seans qilinadi?', 'Сколько сеансов PRP нужно?', 'How many PRP sessions are needed?'),
        L('Odatda 4–6 seanslik kurs, 2–4 hafta oralig‘ida; aniq soni trixolog tomonidan belgilanadi.', 'Обычно курс 4–6 сеансов с интервалом 2–4 недели; точное число определяет трихолог.', 'Usually 4–6 sessions 2–4 weeks apart; the trichologist sets the exact number.'),
      ),
    ],
    priceNames: [
      "Trixolog shifokorining birinchi ko'rigi + trixoskopiya",
      'PRP terapiya (sochlar uchun)',
      'PRP terapiya (yarim hajm)',
      'Kenalog bilan blokada (sochlar)',
      'Hair Vital (Ispaniya) — ayollar uchun',
      'Hair Loss Control — erkaklar uchun',
    ],
  },

  'tirnoq-zamburug': {
    about: [
      L(
        'Tirnoq zamburug‘i (onixomikoz) — tirnoqning sarg‘ayishi, qalinlashishi, mo‘rtlashishi va ko‘chishi bilan kechadigan infeksiya. O‘z-o‘zidan o‘tmaydi va boshqa tirnoqlarga hamda oila a’zolariga yuqishi mumkin.',
        'Грибок ногтей (онихомикоз) — инфекция, при которой ноготь желтеет, утолщается, крошится и отслаивается. Сам не проходит и может передаться на другие ногти и членам семьи.',
        'Nail fungus (onychomycosis) makes nails yellow, thick, brittle and lifting. It does not go away on its own and can spread to other nails and family members.',
      ),
      L(
        'Tashxis laborator tahlil bilan tasdiqlanadi. Davolashda tirnoqni apparat bilan tozalash, lazer terapiyasi va dori vositalari birga qo‘llaniladi — bu tez va qayta qaytishning oldini oladi.',
        'Диагноз подтверждается лабораторным анализом. В лечении сочетаются аппаратная обработка ногтя, лазерная терапия и препараты — так быстрее и меньше рецидивов.',
        'The diagnosis is confirmed by a lab test. Treatment combines device cleaning of the nail, laser therapy and medication — faster and with fewer relapses.',
      ),
    ],
    steps: [
      L('Podolog yoki dermatolog ko‘rigi', 'Осмотр подолога или дерматолога', 'Podiatrist or dermatologist exam'),
      L('Tirnoqdan zamburug‘ tahlili', 'Анализ ногтя на грибок', 'Fungal test of the nail'),
      L('Apparat bilan tozalash + lazer seanslari', 'Аппаратная обработка + сеансы лазера', 'Device cleaning plus laser sessions'),
      L('Sog‘lom tirnoq o‘sib chiqquncha nazorat', 'Наблюдение, пока не отрастёт здоровый ноготь', 'Follow-up until a healthy nail grows out'),
    ],
    faqs: [
      Q(
        L('Davolash qancha davom etadi?', 'Сколько длится лечение?', 'How long does treatment take?'),
        L('Qo‘l tirnoqlari 4–6 oyda, oyoq tirnoqlari 9–12 oyda to‘liq yangilanadi.', 'Ногти на руках обновляются за 4–6 месяцев, на ногах — за 9–12 месяцев.', 'Fingernails renew in 4–6 months, toenails in 9–12 months.'),
      ),
      Q(
        L('Lazer og‘riqlimi?', 'Больно ли лазерное лечение?', 'Is the laser painful?'),
        L('Yo‘q, faqat iliqlik seziladi; og‘riqsizlantirish kerak emas.', 'Нет, ощущается только тепло; обезболивание не нужно.', 'No, only warmth is felt; no anaesthesia is needed.'),
      ),
    ],
    priceNames: [
      'Podologning birinchi konsultatsiyasi',
      "Qo'l tirnoqlaridan zamburug' tahlili",
      'Tirnoq onixomikozini lazer bilan davolash (dan)',
      '1 ta tirnoq onixomikozini lazer bilan davolash',
      'Tirnoqlarni apparat bilan tozalash',
    ],
  },

  'osma-olib-tashlash': {
    about: [
      L(
        'Teridagi o‘smalar — xollar (nevuslar), papillomalar, keratomalar, fibromalar, aterom va lipomalar. Ularni olib tashlashdan oldin dermatoonkolog dermatoskopiya bilan xavfsizligini baholaydi.',
        'Новообразования кожи — родинки (невусы), папилломы, кератомы, фибромы, атеромы и липомы. Перед удалением дерматоонколог оценивает их безопасность с помощью дерматоскопии.',
        'Skin growths include moles (nevi), papillomas, keratomas, fibromas, atheromas and lipomas. Before removal, a dermato-oncologist checks them with dermatoscopy.',
      ),
      L(
        'Olib tashlash usuli o‘smaga qarab tanlanadi: DEKA SmartXide CO₂ lazer, Surgitron radioto‘lqin, krioxirurgiya yoki jarrohlik. Kerak bo‘lsa to‘qima gistologik tekshiruvga yuboriladi.',
        'Метод удаления выбирается по образованию: CO₂-лазер DEKA SmartXide, радиоволна Surgitron, криохирургия или хирургическое иссечение. При необходимости ткань отправляется на гистологию.',
        'The method depends on the growth: DEKA SmartXide CO₂ laser, Surgitron radiowave, cryosurgery or surgical excision. Tissue is sent for histology when needed.',
      ),
    ],
    steps: [
      L('Dermatoonkolog ko‘rigi va dermatoskopiya', 'Осмотр дерматоонколога и дерматоскопия', 'Dermato-oncologist exam and dermatoscopy'),
      L('Usulni tanlash: lazer, radioto‘lqin, kriyo yoki jarrohlik', 'Выбор метода: лазер, радиоволна, крио или хирургия', 'Choosing the method: laser, radiowave, cryo or surgery'),
      L('Mahalliy og‘riqsizlantirish bilan olib tashlash', 'Удаление под местной анестезией', 'Removal under local anaesthesia'),
      L('Kerak bo‘lsa gistologiya va nazorat', 'Гистология при необходимости и контроль', 'Histology if needed and follow-up'),
    ],
    faqs: [
      Q(
        L('Olib tashlangan joyda iz qoladimi?', 'Остаётся ли след после удаления?', 'Will there be a scar?'),
        L('Lazer va radioto‘lqin usullarida odatda deyarli sezilmaydigan iz qoladi; bu o‘smaning o‘lchami va chuqurligiga bog‘liq.', 'После лазера и радиоволны след обычно едва заметен; это зависит от размера и глубины образования.', 'Laser and radiowave usually leave a barely visible mark, depending on the size and depth.'),
      ),
      Q(
        L('Har qanday xolni olib tashlash mumkinmi?', 'Можно ли удалить любую родинку?', 'Can any mole be removed?'),
        L('Avval dermatoskopiya qilinadi; shubhali xollar faqat gistologiya bilan olib tashlanadi.', 'Сначала проводится дерматоскопия; подозрительные родинки удаляются только с гистологией.', 'Dermatoscopy comes first; suspicious moles are removed only with histology.'),
      ),
    ],
    priceNames: [
      "Dermatoonkolog shifokorining birinchi ko'rigi + dermatoskopiya",
      'DEKA SmartXide CO₂ — 1 ta element uchun lazer bilan olib tashlash',
      'Xol (nevus) — lazer bilan olib tashlash (5 mm gacha)',
      "Shave (seyv) usuli — teri o'smalarini olib tashlash",
      "O'smalarni olib tashlash (dan)",
    ],
  },

  'psoriaz-davolash': {
    about: [
      L(
        'Psoriaz — surunkali autoimmun kasallik: terida qizil, ko‘chuvchi pilakchalar paydo bo‘ladi, ko‘pincha tirsak, tizza va bosh terisida. Yuqumli emas. To‘liq davolab bo‘lmaydi, ammo uzoq remissiyaga erishish mumkin.',
        'Псориаз — хроническое аутоиммунное заболевание: на коже появляются красные шелушащиеся бляшки, чаще на локтях, коленях и коже головы. Не заразен. Полностью не излечивается, но можно добиться длительной ремиссии.',
        'Psoriasis is a chronic autoimmune disease with red, scaly plaques, often on the elbows, knees and scalp. It is not contagious. It cannot be cured, but long remission is achievable.',
      ),
      L(
        'Radeski’da psoriaz kompleks davolanadi: tashqi vositalar, Daavlin tor polosali UVB (311 nm) fototerapiyasi va eksimer lazer (308 nm), og‘ir holatlarda immunobiologik terapiya. Fototerapiya gormonlarga bog‘liqlikni kamaytiradi.',
        'В Radeski псориаз лечат комплексно: наружные средства, узкополосная UVB-фототерапия Daavlin (311 нм) и эксимерный лазер (308 нм), в тяжёлых случаях — иммунобиологическая терапия. Фототерапия снижает зависимость от гормонов.',
        'At Radeski psoriasis is treated comprehensively: topical therapy, Daavlin narrowband UVB (311 nm) phototherapy, the excimer laser (308 nm) and, in severe cases, biologic therapy. Phototherapy reduces reliance on steroids.',
      ),
    ],
    steps: [
      VISIT_STEPS.consult,
      L('Tahlillar va psoriaz og‘irligini baholash', 'Анализы и оценка тяжести псориаза', 'Tests and severity assessment'),
      L('Fototerapiya kursi (odatda haftasiga 2–3 marta)', 'Курс фототерапии (обычно 2–3 раза в неделю)', 'Phototherapy course (usually 2–3 times a week)'),
      L('Remissiyani ushlab turish rejasi', 'План поддержания ремиссии', 'Plan to maintain remission'),
    ],
    faqs: [
      Q(
        L('Fototerapiya xavfsizmi?', 'Безопасна ли фототерапия?', 'Is phototherapy safe?'),
        L('Tor polosali UVB dozasi shifokor tomonidan hisoblanadi va seanslar nazoratda o‘tadi; bu dunyoda keng qo‘llaniladigan usul.', 'Дозу узкополосного UVB рассчитывает врач, сеансы проходят под контролем; метод широко применяется в мире.', 'The narrowband UVB dose is set by the doctor and sessions are supervised; it is a widely used method.'),
      ),
      Q(
        L('Nechta seans kerak?', 'Сколько сеансов нужно?', 'How many sessions are needed?'),
        L('Ko‘pincha 20–30 seans; birinchi yaxshilanish 3–4 haftada ko‘rinadi.', 'Обычно 20–30 сеансов; первое улучшение заметно через 3–4 недели.', 'Usually 20–30 sessions; first improvement shows in 3–4 weeks.'),
      ),
    ],
    priceNames: [DERMATOLOGIST_PRICES[0], ...PHOTOTHERAPY_PRICES],
  },

  'vitiligo-davolash': {
    about: [
      L(
        'Vitiligo — terida pigment (melanin) yo‘qolib, oq dog‘lar paydo bo‘ladigan kasallik. Yuqumli emas. Erta boshlangan davolash dog‘lar kengayishini to‘xtatish va rangni qaytarish imkoniyatini oshiradi.',
        'Витилиго — заболевание, при котором кожа теряет пигмент (меланин) и появляются белые пятна. Не заразно. Раннее лечение повышает шанс остановить рост пятен и вернуть цвет.',
        'Vitiligo causes loss of skin pigment (melanin) and white patches. It is not contagious. Early treatment improves the chance of stopping spread and restoring colour.',
      ),
      L(
        'Davolashda Daavlin tor polosali UVB fototerapiyasi, eksimer lazer (308 nm) — kichik dog‘lar uchun nuqtali ta’sir, tashqi vositalar va barqaror holatlarda melanotsit transplantatsiyasi qo‘llaniladi.',
        'В лечении применяются узкополосная UVB-фототерапия Daavlin, эксимерный лазер (308 нм) для точечного воздействия на небольшие пятна, наружные средства и при стабильном витилиго — трансплантация меланоцитов.',
        'Treatment uses Daavlin narrowband UVB, the 308 nm excimer laser for small patches, topical therapy and, in stable vitiligo, melanocyte transplantation.',
      ),
    ],
    steps: [
      VISIT_STEPS.consult,
      L('Vud lampasi va tahlillar bilan baholash', 'Оценка лампой Вуда и анализами', 'Assessment with a Wood lamp and tests'),
      L('Fototerapiya yoki eksimer lazer kursi', 'Курс фототерапии или эксимерного лазера', 'Phototherapy or excimer laser course'),
      L('Barqaror dog‘lar uchun melanotsit transplantatsiyasi', 'Трансплантация меланоцитов для стабильных пятен', 'Melanocyte transplant for stable patches'),
    ],
    faqs: [
      Q(
        L('Vitiligo to‘liq davolanadimi?', 'Лечится ли витилиго полностью?', 'Can vitiligo be cured?'),
        L('Natija dog‘ joyi va davomiyligiga bog‘liq: yuz va bo‘yindagi dog‘lar yaxshiroq javob beradi, qo‘l-oyoq uchlari sekinroq.', 'Результат зависит от расположения и давности пятен: лицо и шея отвечают лучше, кисти и стопы — медленнее.', 'It depends on location and duration: face and neck respond best, hands and feet more slowly.'),
      ),
      Q(
        L('Bolalarga fototerapiya qilish mumkinmi?', 'Можно ли детям фототерапию?', 'Can children have phototherapy?'),
        L('Ko‘rsatma bo‘lsa — ha, shifokor nazoratida va yoshga mos doza bilan.', 'При показаниях — да, под контролем врача и с дозой по возрасту.', 'If indicated — yes, supervised and with an age-appropriate dose.'),
      ),
    ],
    priceNames: [DERMATOLOGIST_PRICES[0], ...PHOTOTHERAPY_PRICES.slice(0, 3), 'Melanotsit transplantatsiyasi (1 sm²)'],
  },

  'rozasea-davolash': {
    about: [
      L(
        'Rozatsea — yuzda doimiy qizarish, ko‘rinadigan tomirlar, ba’zan husnbuzarga o‘xshash toshmalar bilan kechadigan surunkali kasallik. Issiqlik, quyosh, achchiq ovqat va stress kuchaytiradi.',
        'Розацеа — хроническое заболевание с постоянным покраснением лица, видимыми сосудами и иногда высыпаниями, похожими на акне. Обостряется от жары, солнца, острой еды и стресса.',
        'Rosacea is a chronic condition with persistent facial redness, visible vessels and sometimes acne-like bumps. Heat, sun, spicy food and stress make it worse.',
      ),
      L(
        'Davolash dori vositalari bilan birga Derma V (Lutronic) qon-tomir lazeri va IPL fototerapiyasini o‘z ichiga oladi — ular qizarishni va kengaygan tomirlarni kamaytiradi. Face Art protokoli yallig‘lanishni tinchlantiradi.',
        'Лечение включает препараты, а также сосудистый лазер Derma V (Lutronic) и IPL-фототерапию — они уменьшают покраснение и расширенные сосуды. Протокол Face Art успокаивает воспаление.',
        'Treatment combines medication with the Derma V (Lutronic) vascular laser and IPL, which reduce redness and dilated vessels. The Face Art protocol calms inflammation.',
      ),
    ],
    steps: [
      VISIT_STEPS.consult,
      L('Qo‘zg‘atuvchilarni aniqlash va parvarish tavsiyalari', 'Выявление провоцирующих факторов и советы по уходу', 'Identifying triggers and skincare advice'),
      L('Derma V yoki IPL seanslari (odatda 2–4 ta)', 'Сеансы Derma V или IPL (обычно 2–4)', 'Derma V or IPL sessions (usually 2–4)'),
      VISIT_STEPS.followUp,
    ],
    faqs: [
      Q(
        L('Lazerdan keyin qizarish qaytadimi?', 'Вернётся ли покраснение после лазера?', 'Will redness come back after laser?'),
        L('Rozatsea surunkali, shuning uchun yiliga 1–2 qo‘llab-quvvatlovchi seans va to‘g‘ri parvarish tavsiya etiladi.', 'Розацеа хроническая, поэтому рекомендуются 1–2 поддерживающих сеанса в год и правильный уход.', 'Rosacea is chronic, so 1–2 maintenance sessions a year and proper skincare are advised.'),
      ),
      Q(
        L('Yozda davolash mumkinmi?', 'Можно ли лечиться летом?', 'Can it be treated in summer?'),
        L('Ha, Derma V yozda ham qo‘llanadi; quyoshdan himoya kremi majburiy.', 'Да, Derma V применяется и летом; солнцезащитный крем обязателен.', 'Yes, Derma V can be used in summer; sunscreen is a must.'),
      ),
    ],
    priceNames: [DERMATOLOGIST_PRICES[0], ...VASCULAR_PRICES.slice(0, 3), 'Face Art — rozatsea va akneni davolash'],
  },

  pigmentatsiya: {
    about: [
      L(
        'Pigment dog‘lari — melazma, quyosh dog‘lari (lentigo), sepkil va postakne izlari. Ular teri ostidagi melanin ko‘payishidan paydo bo‘ladi; ba’zilari gormonlar, homiladorlik va quyosh bilan bog‘liq.',
        'Пигментные пятна — мелазма, солнечные пятна (лентиго), веснушки и следы постакне. Они возникают из-за избытка меланина; часть связана с гормонами, беременностью и солнцем.',
        'Pigment spots include melasma, sun spots (lentigines), freckles and post-acne marks. They come from excess melanin, some linked to hormones, pregnancy and sun.',
      ),
      L(
        'Avval dog‘ turi dermatoskopiya bilan aniqlanadi (xavfli o‘smani istisno qilish uchun). Keyin Hollywood Spectra lazeri, IPL Lumecca va pigmentga qarshi pilinglar tanlanadi.',
        'Сначала тип пятна определяется дерматоскопией (чтобы исключить опасное образование). Затем подбираются лазер Hollywood Spectra, IPL Lumecca и пилинги против пигментации.',
        'First the spot type is checked with dermatoscopy to rule out a dangerous lesion. Then Hollywood Spectra laser, IPL Lumecca and anti-pigment peels are chosen.',
      ),
    ],
    steps: [
      L('Dermatoskopiya bilan dog‘ turini aniqlash', 'Определение типа пятна дерматоскопией', 'Identifying the spot type with dermatoscopy'),
      VISIT_STEPS.plan,
      L('Lazer yoki IPL seanslari, kerak bo‘lsa piling', 'Сеансы лазера или IPL, при необходимости пилинг', 'Laser or IPL sessions, peels if needed'),
      L('Quyoshdan himoya va uy parvarishi', 'Защита от солнца и домашний уход', 'Sun protection and home care'),
    ],
    faqs: [
      Q(
        L('Pigmentatsiya qaytib chiqadimi?', 'Возвращается ли пигментация?', 'Does pigmentation come back?'),
        L('Melazma qaytishga moyil — shuning uchun quyoshdan himoya va qo‘llab-quvvatlovchi parvarish muhim.', 'Мелазма склонна к рецидивам — поэтому важны защита от солнца и поддерживающий уход.', 'Melasma tends to recur, so sun protection and maintenance care matter.'),
      ),
      Q(
        L('Necha seans kerak?', 'Сколько сеансов нужно?', 'How many sessions?'),
        L('Odatda 2–5 seans, 3–4 hafta oralig‘ida.', 'Обычно 2–5 сеансов с интервалом 3–4 недели.', 'Usually 2–5 sessions 3–4 weeks apart.'),
      ),
    ],
    priceNames: [
      '5 sm² gacha pigmentatsiyani davolash — Hollywood Spectra',
      'Yonoq pigmentatsiyasini davolash — Hollywood Spectra',
      'Yuz pigmentatsiyasini davolash — Hollywood Spectra',
      'Butun yuz pigmentatsiyasini lazer bilan olib tashlash',
      'Me Line pigmentatsiyaga qarshi piling',
    ],
  },

  'lazer-epilyatsiya': {
    about: [
      L(
        'Lazer epilyatsiya keraksiz tuklarni uzoq muddatga yo‘qotadi: lazer nuri soch follikulasidagi pigmentni qizdiradi va uning o‘sishini to‘xtatadi. Radeski’da italyan DEKA Moveo aleksandrit lazeri (755 nm) qo‘llaniladi.',
        'Лазерная эпиляция надолго избавляет от нежелательных волос: луч нагревает пигмент в фолликуле и останавливает его рост. В Radeski используется итальянский александритовый лазер DEKA Moveo (755 нм).',
        'Laser hair removal gives long-lasting results: the beam heats pigment in the follicle and stops its growth. Radeski uses the Italian DEKA Moveo alexandrite laser (755 nm).',
      ),
      L(
        'Moveo sovutish tizimi bilan ishlaydi, shuning uchun muolaja deyarli og‘riqsiz. Kurs odatda 6–8 seansdan iborat, chunki tuklar turli o‘sish bosqichida bo‘ladi. Muolajani tibbiy ma’lumotli mutaxassis bajaradi.',
        'Moveo работает с охлаждением, поэтому процедура почти безболезненна. Курс обычно 6–8 сеансов, так как волосы находятся в разных фазах роста. Процедуру выполняет специалист с медицинским образованием.',
        'Moveo has built-in cooling, so the procedure is almost painless. A course is usually 6–8 sessions because hairs are in different growth phases. It is performed by a medically trained specialist.',
      ),
    ],
    steps: [
      L('Konsultatsiya: teri va tuk turini baholash', 'Консультация: оценка типа кожи и волос', 'Consultation: skin and hair type assessment'),
      L('Tayyorgarlik: 1–2 kun oldin soqol bilan olish, quyoshdan saqlanish', 'Подготовка: побрить зону за 1–2 дня, избегать загара', 'Preparation: shave 1–2 days before, avoid tanning'),
      L('Seans: 10–60 daqiqa, zonaga qarab', 'Сеанс: 10–60 минут в зависимости от зоны', 'Session: 10–60 minutes depending on the area'),
      L('Keyingi seans 4–8 haftadan keyin', 'Следующий сеанс через 4–8 недель', 'Next session in 4–8 weeks'),
    ],
    faqs: [
      Q(
        L('Necha seansda tuklar yo‘qoladi?', 'За сколько сеансов уходят волосы?', 'How many sessions are needed?'),
        L('Ko‘pincha 6–8 seans; har seansdan keyin tuklar siyraklashadi va ingichkalashadi.', 'Обычно 6–8 сеансов; после каждого волосы редеют и истончаются.', 'Usually 6–8; hair gets sparser and finer after each.'),
      ),
      Q(
        L('Yozda lazer epilyatsiya qilish mumkinmi?', 'Можно ли делать лазерную эпиляцию летом?', 'Can it be done in summer?'),
        L('Mumkin, agar teri yangi qoraymagan bo‘lsa; muolajadan keyin 2 hafta quyoshda qoraymaslik kerak.', 'Можно, если кожа не загорела недавно; после процедуры 2 недели нельзя загорать.', 'Yes, if the skin is not freshly tanned; avoid tanning for 2 weeks after.'),
      ),
    ],
    priceNames: [
      'lazernaya-epilyatsiya|Yuqori lab',
      'lazernaya-epilyatsiya|Qoltiq osti',
      'Ayol klassik bikini',
      "Ayol oyoqlari: tovondan tizzagacha (50%)",
      'Ayol oyoqlari (to‘liq)',
      "Ayol qo'llari (to'liq)",
      'Yuz (to‘liq)',
    ],
  },

  dermatoskopiya: {
    about: [
      L(
        'Dermatoskopiya — teridagi xol va dog‘larni maxsus optik apparat bilan 10–20 baravar kattalashtirib tekshirish. Og‘riqsiz, 15–30 daqiqa davom etadi va melanoma hamda boshqa teri saratonlarini erta aniqlashning asosiy usuli.',
        'Дерматоскопия — исследование родинок и пятен специальным оптическим прибором с увеличением в 10–20 раз. Безболезненна, занимает 15–30 минут и является основным методом ранней диагностики меланомы и других видов рака кожи.',
        'Dermatoscopy examines moles and spots with a special optical device at 10–20× magnification. It is painless, takes 15–30 minutes and is the main way to detect melanoma and other skin cancers early.',
      ),
      L(
        'Radeski’da butun tana dermatoskopiyasi raqamli ma’lumotlar bazasiga saqlanadi — keyingi tekshiruvlarda har bir xolning o‘zgarishi solishtiriladi.',
        'В Radeski дерматоскопия всего тела сохраняется в цифровой базе — при следующих осмотрах изменения каждой родинки сравниваются.',
        'At Radeski whole-body dermatoscopy is stored in a digital database, so each mole can be compared at later visits.',
      ),
    ],
    steps: [
      L('Shikoyat va xavf omillarini so‘rash', 'Сбор жалоб и факторов риска', 'Complaints and risk factors'),
      L('Xollarni dermatoskop bilan tekshirish', 'Осмотр родинок дерматоскопом', 'Examining moles with a dermatoscope'),
      L('Natija va tavsiya: kuzatish yoki olib tashlash', 'Заключение: наблюдение или удаление', 'Result: monitoring or removal'),
      L('Xavf guruhida — yillik nazorat', 'В группе риска — ежегодный контроль', 'Yearly check for high-risk patients'),
    ],
    faqs: [
      Q(
        L('Kimga dermatoskopiya kerak?', 'Кому нужна дерматоскопия?', 'Who needs dermatoscopy?'),
        L('Xollari ko‘p, xoli o‘zgargan, oilasida teri saratoni bo‘lgan va quyoshda ko‘p bo‘ladigan odamlarga.', 'Людям с большим количеством родинок, изменившейся родинкой, раком кожи у родственников и тем, кто много бывает на солнце.', 'People with many moles, a changing mole, family history of skin cancer or lots of sun exposure.'),
      ),
      Q(
        L('Tayyorgarlik kerakmi?', 'Нужна ли подготовка?', 'Is preparation needed?'),
        L('Yo‘q; faqat tekshiriladigan joyga krem va kosmetika surtmang.', 'Нет; только не наносите крем и косметику на осматриваемые участки.', 'No; just avoid creams and make-up on the areas to be checked.'),
      ),
    ],
    priceNames: ONCO_PRICES,
  },

  'qon-tomir': {
    about: [
      L(
        'Yuzdagi qizarish va tomir to‘rlari (kuperoz, teleangiektaziya) — kengaygan kapillyarlar. Ular kremlar bilan yo‘qolmaydi, lekin qon-tomir lazeri ularni xavfsiz yopadi.',
        'Покраснение и сосудистые сеточки на лице (купероз, телеангиэктазии) — это расширенные капилляры. Кремами они не убираются, а сосудистый лазер безопасно их закрывает.',
        'Facial redness and spider veins (couperose, telangiectasia) are dilated capillaries. Creams do not remove them, but a vascular laser closes them safely.',
      ),
      L(
        'Radeski’da Derma V (Lutronic, Koreya) lazeri qo‘llaniladi: yuz va burun qanotlaridagi tomirlar, gemangiomalar va oyoqdagi mayda venalar davolanadi. Muolaja tez, teri kesilmaydi.',
        'В Radeski применяется лазер Derma V (Lutronic, Корея): сосуды на лице и крыльях носа, гемангиомы и мелкие вены на ногах. Процедура быстрая, без разрезов.',
        'Radeski uses the Derma V laser (Lutronic, Korea) for facial and nasal vessels, haemangiomas and small leg veins. It is quick and needs no incisions.',
      ),
    ],
    steps: [
      VISIT_STEPS.consult,
      L('Tomir turi va chuqurligiga qarab lazer rejimini tanlash', 'Подбор режима лазера по типу и глубине сосуда', 'Choosing laser settings by vessel type and depth'),
      L('Lazer seansi (10–30 daqiqa)', 'Сеанс лазера (10–30 минут)', 'Laser session (10–30 minutes)'),
      L('Kerak bo‘lsa 3–4 haftadan keyin takroriy seans', 'При необходимости повтор через 3–4 недели', 'Repeat in 3–4 weeks if needed'),
    ],
    faqs: [
      Q(
        L('Muolajadan keyin iz qoladimi?', 'Остаются ли следы после процедуры?', 'Are there marks afterwards?'),
        L('Bir necha kun yengil qizarish yoki shish bo‘lishi mumkin, keyin o‘tib ketadi.', 'Несколько дней может быть лёгкое покраснение или отёк, затем проходит.', 'Mild redness or swelling may last a few days, then fades.'),
      ),
      Q(
        L('Necha seans kerak?', 'Сколько нужно сеансов?', 'How many sessions?'),
        L('Mayda tomirlar ko‘pincha 1–2 seansda, kuperoz 2–4 seansda yo‘qoladi.', 'Мелкие сосуды часто уходят за 1–2 сеанса, купероз — за 2–4.', 'Small vessels often clear in 1–2 sessions, couperose in 2–4.'),
      ),
    ],
    priceNames: VASCULAR_PRICES,
  },

  'sogal-olib-tashlash': {
    about: [
      L(
        'So‘gallar — inson papilloma virusi (HPV) chaqiradigan yaxshi sifatli o‘smalar. Ular tarqalishi va boshqa odamlarga yuqishi mumkin, oyoq kaftidagi so‘gallar esa yurganda og‘riq beradi.',
        'Бородавки — доброкачественные образования, вызванные вирусом папилломы человека (ВПЧ). Они могут распространяться и передаваться другим людям, а подошвенные бородавки болят при ходьбе.',
        'Warts are benign growths caused by human papillomavirus (HPV). They can spread and pass to others, and plantar warts hurt when walking.',
      ),
      L(
        'Radeski’da so‘gallar DEKA SmartXide CO₂ lazeri, Surgitron radioto‘lqini yoki krioxirurgiya bilan olib tashlanadi. Bolalar uchun ham mos, mahalliy og‘riqsizlantirish bilan.',
        'В Radeski бородавки удаляют CO₂-лазером DEKA SmartXide, радиоволной Surgitron или криохирургией. Подходит и детям, под местной анестезией.',
        'At Radeski warts are removed with the DEKA SmartXide CO₂ laser, Surgitron radiowave or cryosurgery, under local anaesthesia — suitable for children too.',
      ),
    ],
    steps: [
      L('Dermatolog ko‘rigi va dermatoskopiya', 'Осмотр дерматолога и дерматоскопия', 'Dermatologist exam and dermatoscopy'),
      L('Usulni tanlash: lazer, radioto‘lqin yoki kriyo', 'Выбор метода: лазер, радиоволна или крио', 'Choosing laser, radiowave or cryo'),
      L('Olib tashlash (bir necha daqiqa)', 'Удаление (несколько минут)', 'Removal (a few minutes)'),
      L('Yarani parvarish qilish tavsiyalari', 'Рекомендации по уходу за раной', 'Wound care advice'),
    ],
    faqs: [
      Q(
        L('So‘gal qayta chiqadimi?', 'Может ли бородавка появиться снова?', 'Can warts come back?'),
        L('Virus organizmda qolishi mumkin, shuning uchun yangi so‘gallar paydo bo‘lsa erta olib tashlash tavsiya etiladi.', 'Вирус может оставаться в организме, поэтому новые бородавки лучше удалять рано.', 'The virus can persist, so new warts are best removed early.'),
      ),
      Q(
        L('Bolalarga lazer qilish mumkinmi?', 'Можно ли лазер детям?', 'Is laser OK for children?'),
        L('Ha, mahalliy og‘riqsizlantirish bilan; muolaja qisqa davom etadi.', 'Да, под местной анестезией; процедура короткая.', 'Yes, under local anaesthesia; the procedure is short.'),
      ),
    ],
    priceNames: [
      'DEKA SmartXide CO₂ — 1 ta element uchun lazer bilan olib tashlash',
      "Teri xavfsiz yuzaki o'smalarining kriyodestruksiyasi",
      'PinPoint laser bilan mayda zgardalarni davolash (1 kv.sm, 1 seans)',
      "Yuqumli mol'yuskni radioto'lqin bilan olib tashlash (1 ta element uchun, 10 taga",
    ],
  },

  trixoskopiya: {
    about: [
      L(
        'Trixoskopiya — soch va bosh terisini raqamli kamera bilan kattalashtirib tekshirish. Soch qalinligi, follikulalar soni, o‘sish bosqichlari va bosh terisi holati aniq ko‘rinadi.',
        'Трихоскопия — осмотр волос и кожи головы цифровой камерой с увеличением. Хорошо видны толщина волос, количество фолликулов, фазы роста и состояние кожи головы.',
        'Trichoscopy examines hair and scalp with a magnifying digital camera, showing hair thickness, follicle count, growth phases and scalp condition.',
      ),
      L(
        'Bu tekshiruv soch to‘kilishi turini (androgenetik, diffuz, o‘choqli) farqlash va davolash samarasini raqamlar bilan kuzatish imkonini beradi. Og‘riqsiz, 15–20 daqiqa.',
        'Исследование позволяет различить тип выпадения (андрогенетическое, диффузное, очаговое) и отслеживать эффект лечения в цифрах. Безболезненно, 15–20 минут.',
        'It distinguishes the type of hair loss (androgenetic, diffuse, patchy) and tracks treatment results in numbers. Painless, 15–20 minutes.',
      ),
    ],
    steps: [
      L('Trixolog bilan suhbat', 'Беседа с трихологом', 'Talk with the trichologist'),
      L('Raqamli trixoskopiya', 'Цифровая трихоскопия', 'Digital trichoscopy'),
      L('Natijani tushuntirish va davolash rejasi', 'Разбор результата и план лечения', 'Explaining results and treatment plan'),
      L('Kursdan keyin takroriy trixoskopiya', 'Повторная трихоскопия после курса', 'Repeat trichoscopy after the course'),
    ],
    faqs: [
      Q(
        L('Trixoskopiyaga qanday tayyorlanish kerak?', 'Как подготовиться к трихоскопии?', 'How to prepare?'),
        L('Tekshiruvdan 2–3 kun oldin sochni bo‘yamang, oldingi kuni yuvish mumkin; lak va gel ishlatmang.', 'Не окрашивайте волосы за 2–3 дня, мыть можно накануне; не используйте лак и гель.', 'Do not dye hair 2–3 days before; wash the day before; no spray or gel.'),
      ),
      Q(
        L('Trixoskopiya og‘riqlimi?', 'Больно ли это?', 'Does it hurt?'),
        L('Yo‘q, kamera faqat bosh terisiga tegadi.', 'Нет, камера лишь касается кожи головы.', 'No, the camera only touches the scalp.'),
      ),
    ],
    priceNames: ["Trixolog shifokorining birinchi ko'rigi + trixoskopiya", "Trixolog shifokorining takroriy ko'rigi"],
  },

  'xol-tekshiruvi': {
    about: [
      L(
        'Xol (nevus) tekshiruvi — xollarning xavfsizligini dermatoskopiya bilan baholash. Shakli notekis, rangi o‘zgargan, kattalashgan, qichiyotgan yoki qonayotgan xollarni darhol ko‘rsatish kerak.',
        'Проверка родинок (невусов) — оценка их безопасности с помощью дерматоскопии. Родинки неровной формы, изменившие цвет, растущие, зудящие или кровоточащие нужно показать врачу сразу.',
        'A mole (nevus) check assesses safety with dermatoscopy. Moles that are irregular, changing colour, growing, itching or bleeding should be shown to a doctor promptly.',
      ),
      L(
        'Dermatoonkolog ABCDE qoidasi va dermatoskopik belgilar bo‘yicha xulosa beradi: kuzatish, raqamli bazaga olish yoki gistologiya bilan olib tashlash.',
        'Дерматоонколог даёт заключение по правилу ABCDE и дерматоскопическим признакам: наблюдение, внесение в цифровую базу или удаление с гистологией.',
        'The dermato-oncologist decides by the ABCDE rule and dermatoscopic signs: monitoring, digital mapping or removal with histology.',
      ),
    ],
    steps: [
      L('Xollarni ko‘rik va dermatoskopiya', 'Осмотр и дерматоскопия родинок', 'Exam and dermatoscopy of moles'),
      L('Xavf darajasini baholash', 'Оценка степени риска', 'Risk assessment'),
      L('Kerak bo‘lsa xavfsiz olib tashlash', 'Безопасное удаление при необходимости', 'Safe removal if needed'),
      L('Rejali nazorat', 'Плановый контроль', 'Scheduled follow-up'),
    ],
    faqs: [
      Q(
        L('Xolni olib tashlash xavflimi?', 'Опасно ли удалять родинку?', 'Is mole removal dangerous?'),
        L('Dermatoskopiyadan keyin, to‘g‘ri usul bilan olib tashlash xavfsiz; shubhali xol gistologiyaga yuboriladi.', 'После дерматоскопии и правильным методом удаление безопасно; подозрительная родинка отправляется на гистологию.', 'After dermatoscopy and with the right method it is safe; suspicious moles go to histology.'),
      ),
      Q(
        L('Qanchalik tez-tez tekshirish kerak?', 'Как часто проверяться?', 'How often to check?'),
        L('Xavf guruhida — yiliga bir marta, boshqalarga xol o‘zgarganda.', 'В группе риска — раз в год, остальным — при изменении родинки.', 'Yearly if high-risk, otherwise whenever a mole changes.'),
      ),
    ],
    priceNames: [...ONCO_PRICES, 'Xol (nevus) — lazer bilan olib tashlash (5 mm gacha)'],
  },

  biopsiya: {
    about: [
      L(
        'Teri biopsiyasi — tashxisni aniqlash uchun teridan kichik bo‘lak olib, mikroskop ostida (gistologik) tekshirish. Shubhali o‘smalar, noaniq toshmalar va surunkali teri kasalliklarida qo‘llaniladi.',
        'Биопсия кожи — взятие небольшого участка кожи для исследования под микроскопом (гистологии). Применяется при подозрительных образованиях, неясных высыпаниях и хронических болезнях кожи.',
        'A skin biopsy takes a small piece of skin for microscopic (histological) examination. It is used for suspicious growths, unclear rashes and chronic skin diseases.',
      ),
      L(
        'Panch-biopsiya mahalliy og‘riqsizlantirish bilan bir necha daqiqada bajariladi. Radeski’da dermatopatologiya yo‘nalishi bor — natijani dermatologiyani biladigan patolog baholaydi.',
        'Панч-биопсия выполняется под местной анестезией за несколько минут. В Radeski есть направление дерматопатологии — результат оценивает патолог, специализирующийся на коже.',
        'A punch biopsy takes a few minutes under local anaesthesia. Radeski has a dermatopathology service, so a skin-specialised pathologist reads the result.',
      ),
    ],
    steps: [
      L('Shifokor ko‘rigi va biopsiya joyini tanlash', 'Осмотр и выбор места биопсии', 'Exam and choosing the biopsy site'),
      L('Mahalliy og‘riqsizlantirish va namuna olish', 'Местная анестезия и забор образца', 'Local anaesthesia and sampling'),
      L('Gistologik tekshiruv', 'Гистологическое исследование', 'Histological examination'),
      L('Natija bo‘yicha davolash rejasi', 'План лечения по результату', 'Treatment plan based on the result'),
    ],
    faqs: [
      Q(
        L('Natija qachon tayyor bo‘ladi?', 'Когда будет готов результат?', 'When is the result ready?'),
        L('Odatda 7–14 kun ichida.', 'Обычно в течение 7–14 дней.', 'Usually within 7–14 days.'),
      ),
      Q(
        L('Biopsiyadan keyin chandiq qoladimi?', 'Остаётся ли рубец после биопсии?', 'Will it leave a scar?'),
        L('Kichik, 2–4 mm li iz qoladi va vaqt o‘tib bilinmay ketadi.', 'Остаётся маленький след 2–4 мм, со временем он малозаметен.', 'A small 2–4 mm mark that fades over time.'),
      ),
    ],
    priceNames: ['Panch-biopsiya', 'dermatoonkologiya-2|Biopsiya'],
  },

  'onko-dermatolog': {
    about: [
      L(
        'Onkodermatolog (dermatoonkolog) — teri o‘smalarini, jumladan melanoma, bazalioma va yassi hujayrali saratonni aniqlaydigan va davolaydigan shifokor. Teri saratoni erta topilsa, ko‘p hollarda to‘liq davolanadi.',
        'Онкодерматолог (дерматоонколог) — врач, который выявляет и лечит опухоли кожи, включая меланому, базалиому и плоскоклеточный рак. Рак кожи, найденный рано, в большинстве случаев излечим.',
        'An oncodermatologist (dermato-oncologist) detects and treats skin tumours, including melanoma, basal cell and squamous cell carcinoma. Skin cancer found early is curable in most cases.',
      ),
      L(
        'Radeski’da dermatoskopiya, biopsiya, gistologiya va Mohs mikrografik jarrohligi bir joyda — Mohs usuli o‘smani sog‘lom to‘qimani maksimal saqlagan holda olib tashlaydi.',
        'В Radeski дерматоскопия, биопсия, гистология и микрографическая хирургия Мооса — в одном месте. Метод Мооса удаляет опухоль, максимально сохраняя здоровые ткани.',
        'Radeski offers dermatoscopy, biopsy, histology and Mohs micrographic surgery in one place; Mohs removes the tumour while sparing as much healthy tissue as possible.',
      ),
    ],
    steps: [
      L('Dermatoonkolog ko‘rigi va dermatoskopiya', 'Осмотр дерматоонколога и дерматоскопия', 'Dermato-oncologist exam and dermatoscopy'),
      L('Biopsiya va gistologiya', 'Биопсия и гистология', 'Biopsy and histology'),
      L('Davolash: jarrohlik, Mohs, krioxirurgiya yoki lazer', 'Лечение: хирургия, Моос, криохирургия или лазер', 'Treatment: surgery, Mohs, cryosurgery or laser'),
      L('Uzoq muddatli kuzatuv', 'Длительное наблюдение', 'Long-term follow-up'),
    ],
    faqs: [
      Q(
        L('Qanday belgilar xavotirli?', 'Какие признаки тревожны?', 'Which signs are worrying?'),
        L('Tez kattalashayotgan, qonayotgan, bitmaydigan yara, rangi va shakli o‘zgargan xol.', 'Быстро растущее, кровоточащее или незаживающее образование, родинка с изменившимся цветом и формой.', 'A fast-growing, bleeding or non-healing lesion, or a mole that changes colour or shape.'),
      ),
      Q(
        L('Bazalioma xavflimi?', 'Опасна ли базалиома?', 'Is basal cell carcinoma dangerous?'),
        L('U kamdan-kam tarqaladi, ammo atrof to‘qimalarni yemiradi — shuning uchun erta olib tashlash kerak.', 'Она редко метастазирует, но разрушает окружающие ткани — поэтому её нужно удалять рано.', 'It rarely spreads but destroys nearby tissue, so it should be removed early.'),
      ),
    ],
    priceNames: [
      ...ONCO_PRICES.slice(0, 2),
      'Panch-biopsiya',
      'Operatsiya (bazalioma)',
      "Nemelanom xavfli teri o'smalarining krioxirurgiyasi (bazal hujayrali va tekis hu",
    ],
  },

  ipl: {
    about: [
      L(
        'IPL (intensiv impulsli yorug‘lik) — keng spektrli yorug‘lik bilan pigment dog‘lari, qizarish, mayda tomirlar va yuz terisi notekisligini davolash. Radeski’da InMode Lumecca IPL qo‘llaniladi.',
        'IPL (интенсивный импульсный свет) — лечение пигментных пятен, покраснения, мелких сосудов и неровного тона кожи широкополосным светом. В Radeski используется IPL InMode Lumecca.',
        'IPL (intense pulsed light) treats pigment spots, redness, small vessels and uneven skin tone with broadband light. Radeski uses the InMode Lumecca IPL.',
      ),
      L(
        'Muolaja 20–30 daqiqa davom etadi, reabilitatsiya deyarli yo‘q: dog‘lar bir necha kunda to‘qlashib, so‘ng ko‘chib tushadi. Odatda 1–3 seans yetarli.',
        'Процедура длится 20–30 минут, реабилитации почти нет: пятна за несколько дней темнеют и затем отшелушиваются. Обычно достаточно 1–3 сеансов.',
        'A session takes 20–30 minutes with almost no downtime: spots darken for a few days and then flake off. Usually 1–3 sessions are enough.',
      ),
    ],
    steps: [
      VISIT_STEPS.consult,
      L('Teri turi va muammoga qarab rejim tanlash', 'Подбор режима по типу кожи и задаче', 'Choosing settings by skin type and goal'),
      L('IPL seansi', 'Сеанс IPL', 'IPL session'),
      L('3–4 haftadan keyin natijani baholash', 'Оценка результата через 3–4 недели', 'Reviewing results after 3–4 weeks'),
    ],
    faqs: [
      Q(
        L('IPL lazerdan nimasi bilan farq qiladi?', 'Чем IPL отличается от лазера?', 'How is IPL different from laser?'),
        L('Lazer bitta to‘lqin uzunligida ishlaydi, IPL esa keng spektrda — bir seansda pigment va tomirlarga birga ta’sir qiladi.', 'Лазер работает на одной длине волны, IPL — в широком спектре и за один сеанс воздействует и на пигмент, и на сосуды.', 'A laser uses one wavelength; IPL is broadband and treats pigment and vessels in the same session.'),
      ),
      Q(
        L('IPL dan keyin quyoshga chiqish mumkinmi?', 'Можно ли на солнце после IPL?', 'Can I go in the sun after IPL?'),
        L('2 hafta davomida SPF 50 krem bilan himoyalanish kerak.', 'В течение 2 недель нужна защита кремом SPF 50.', 'Use SPF 50 for 2 weeks.'),
      ),
    ],
    priceNames: [
      'fotoomolozhenie-ipl-lumecca|Burun',
      'fotoomolozhenie-ipl-lumecca|Yonoq',
      'fotoomolozhenie-ipl-lumecca|Yuz',
      "fotoomolozhenie-ipl-lumecca|Yuz + bo'yin yoki dekolte",
      "fotoomolozhenie-ipl-lumecca|Qo'l kafti",
    ],
  },

  'lazer-tomir': {
    about: [
      L(
        'Lazer bilan tomir olib tashlash — yuz, burun va oyoqdagi ko‘rinadigan tomirlar (teleangiektaziya), qon-tomir yulduzchalari va gemangiomalarni teri kesmasdan yo‘qotish.',
        'Лазерное удаление сосудов — устранение видимых сосудов на лице, носу и ногах (телеангиэктазий), сосудистых звёздочек и гемангиом без разрезов.',
        'Laser vein removal clears visible vessels on the face, nose and legs (telangiectasia), spider veins and haemangiomas without incisions.',
      ),
      L(
        'Derma V (Lutronic) lazeri qondagi gemoglobinga ta’sir qilib tomirni yopadi, atrofdagi teri zararlanmaydi. Mayda tomirlar ko‘pincha 1–2 seansda yo‘qoladi.',
        'Лазер Derma V (Lutronic) воздействует на гемоглобин и закрывает сосуд, не повреждая окружающую кожу. Мелкие сосуды часто уходят за 1–2 сеанса.',
        'The Derma V (Lutronic) laser targets haemoglobin and seals the vessel without harming the surrounding skin. Small vessels often clear in 1–2 sessions.',
      ),
    ],
    steps: [
      VISIT_STEPS.consult,
      L('Tomir diametri va joyiga qarab rejim', 'Режим по диаметру и расположению сосуда', 'Settings by vessel size and location'),
      L('Lazer seansi', 'Сеанс лазера', 'Laser session'),
      L('Natijani 3–4 haftadan keyin baholash', 'Оценка через 3–4 недели', 'Review after 3–4 weeks'),
    ],
    faqs: [
      Q(
        L('Oyoqdagi tomirlarni ham olib tashlaysizmi?', 'Удаляете ли сосуды на ногах?', 'Do you treat leg veins?'),
        L('Ha, mayda tomirlar va to‘rlar lazer bilan; katta varikoz venalar uchun flebolog ko‘rigi kerak.', 'Да, мелкие сосуды и сеточки — лазером; при крупных варикозных венах нужен флеболог.', 'Yes, small veins and networks by laser; large varicose veins need a phlebologist.'),
      ),
      Q(
        L('Muolaja og‘riqlimi?', 'Больно ли это?', 'Is it painful?'),
        L('Rezinka urilgandek qisqa sezgi bo‘ladi; sovutish tizimi noqulaylikni kamaytiradi.', 'Ощущение как короткий щелчок резинки; охлаждение снижает дискомфорт.', 'It feels like a quick rubber-band snap; cooling reduces discomfort.'),
      ),
    ],
    priceNames: VASCULAR_PRICES,
  },
};

/** Topic key for a landing slug (the IPL pages carry the city in their slug). */
export function landingTopicKey(slug: string): string {
  return slug === 'ipl-qoqon' || slug === 'ipl-fargona' ? 'ipl' : slug;
}

export function getLocalLandingTopic(slug: string): LocalLandingTopic | undefined {
  return LOCAL_LANDING_TOPICS[landingTopicKey(slug)];
}
