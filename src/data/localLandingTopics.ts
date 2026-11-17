import type { LocalizedCopy, LocalCommercialFaq } from './localCommercialSeoCatalog';

/**
 * Substantive content for the city service pages (/uz/fargona/lazer-epilyatsiya …): what the
 * service is, how a visit goes, service-specific questions, and which price-list rows belong
 * to it (exact `name.uz` of the CMS price items). Shared by both cities; the city-specific
 * parts (address, hours, phone, prices "from") are added around it.
 */
/** When the city-page texts below were last revised (shown on the pages and in dateModified). */
export const LOCAL_LANDING_CONTENT_UPDATED = '2026-11-17';

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
  /** The topic's own FAQ answers the price question: no generated "how much is it?" entry. */
  hasPriceFaq?: boolean;
  /** Prices are per unit (botulinum toxin): "from 30 000 per unit", not "from 30 000". */
  priceUnit?: LocalizedCopy;
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
      L(
        'Dermatologga qachon borish kerak: toshma, qichish yoki qizarish 1–2 haftada o‘tmasa; xolning shakli, rangi yoki hajmi o‘zgarsa; yara bitmasa; akne chandiq qoldira boshlasa; tirnoq yoki soch holati o‘zgarsa. Erta murojaat qilinsa, davolash odatda qisqaroq bo‘ladi.',
        'Когда идти к дерматологу: сыпь, зуд или покраснение не проходят за 1–2 недели; родинка меняет форму, цвет или размер; ранка не заживает; акне начинает оставлять рубцы; изменились ногти или волосы. При раннем обращении лечение обычно короче.',
        'When to see a dermatologist: a rash, itch or redness that lasts beyond 1–2 weeks; a mole changing shape, colour or size; a sore that does not heal; acne starting to scar; changes in nails or hair. Treatment is usually shorter when started early.',
      ),
      L(
        'Qabuldan oldin toshmaga 2–3 kun shifokor buyurmagan krem surtmang va dog‘larni bo‘yanish bilan yopmang — shifokor terini asl holida ko‘rishi kerak. Ishlatayotgan dori va kremlaringiz ro‘yxatini, oldingi tahlil natijalarini olib keling.',
        'За 2–3 дня до приёма не наносите на высыпания кремы, которые не назначал врач, и не маскируйте пятна косметикой — врач должен увидеть кожу как есть. Возьмите список лекарств и кремов, которыми пользуетесь, и прежние анализы.',
        'For 2–3 days before the visit, do not put creams the doctor has not prescribed on the rash and do not cover spots with make-up: the doctor needs to see the skin as it is. Bring a list of your medicines and creams and any earlier test results.',
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
      Q(
        L('Tahlillarni klinikaning o‘zida topshirsa bo‘ladimi?', 'Можно ли сдать анализы в самой клинике?', 'Can tests be done at the clinic?'),
        L(
          'Ha, klinikada laboratoriya bor: qon tahlillari va zamburug‘ tahlili shu yerda olinadi, kerak bo‘lsa biopsiya ham qilinadi. Natijalar bilan shifokor davolash rejasini tuzadi.',
          'Да, в клинике есть лаборатория: анализы крови и исследование на грибок берут на месте, при необходимости делают биопсию. По результатам врач составляет план лечения.',
          'Yes, the clinic has its own lab: blood tests and fungal tests are taken on site, and a biopsy can be done when needed. The doctor builds the treatment plan from the results.',
        ),
      ),
      Q(
        L('Xolni tekshirtirish kerakmi?', 'Нужно ли проверять родинки?', 'Should I have a mole checked?'),
        L(
          'Xol o‘zgarsa, qichisa, qonasa yoki boshqalardan keskin farq qilsa — ha. Dermatoskopiya og‘riqsiz va bir necha daqiqa davom etadi; shubhali xol bo‘lsa, shifokor dermatoonkolog ko‘rigi yoki biopsiyani tavsiya qiladi.',
          'Да, если родинка меняется, чешется, кровоточит или заметно отличается от остальных. Дерматоскопия безболезненна и занимает несколько минут; при подозрительной родинке врач рекомендует осмотр дерматоонколога или биопсию.',
          'Yes, if a mole changes, itches, bleeds or looks clearly different from the others. Dermatoscopy is painless and takes a few minutes; for a suspicious mole the doctor recommends a dermato-oncologist review or a biopsy.',
        ),
      ),
      Q(
        L('Takroriy qabul kerakmi?', 'Нужен ли повторный приём?', 'Is a follow-up visit needed?'),
        L(
          'Ko‘p kasalliklarda — ha: shifokor davolash samarasini baholash va rejani to‘g‘rilash uchun nazorat sanasini davolash turiga qarab belgilaydi.',
          'При большинстве заболеваний — да: врач назначает дату контроля в зависимости от лечения, чтобы оценить эффект и скорректировать план.',
          'For most conditions, yes: the doctor sets a check-up date that suits the treatment, to see how it works and adjust the plan.',
        ),
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
      L(
        'Trixologga qachon borish kerak: soch odatdagidan ko‘p to‘kilsa yoki bir necha hafta to‘kilishda davom etsa, sochlar siyraklashib bosh terisi ko‘rina boshlasa, dumaloq kal joy paydo bo‘lsa, bosh terisi qichisa yoki po‘st tashlasa. Tug‘ruq, kasallik yoki kuchli stressdan keyingi to‘kilish ham ko‘rikni talab qiladi.',
        'Когда идти к трихологу: волосы выпадают сильнее обычного или выпадение длится несколько недель, волосы редеют и просвечивает кожа головы, появился круглый очаг облысения, кожа головы зудит или шелушится. Выпадение после родов, болезни или сильного стресса тоже стоит показать врачу.',
        'When to see a trichologist: more hair falls out than usual or the shedding lasts several weeks, hair thins so the scalp shows, a round bald patch appears, or the scalp itches or flakes. Shedding after childbirth, illness or severe stress is also worth a check.',
      ),
      L(
        'Shampun va vitaminlarni o‘zboshimchalik bilan almashtirish ko‘pincha vaqtni yo‘qotadi: to‘kilishning sababi har xil — gormonlar, temir yetishmasligi, qalqonsimon bez, autoimmun jarayon yoki irsiyat. Trixolog avval sababni aniqlaydi, keyin davolashni tanlaydi.',
        'Самостоятельная смена шампуней и витаминов часто отнимает время: причины выпадения разные — гормоны, дефицит железа, щитовидная железа, аутоиммунный процесс или наследственность. Трихолог сначала находит причину, затем подбирает лечение.',
        'Switching shampoos and vitamins on your own often wastes time: hair loss has many causes — hormones, iron deficiency, the thyroid, an autoimmune process or heredity. A trichologist finds the cause first, then chooses the treatment.',
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
      Q(
        L('Trixoskopiya og‘riqlimi?', 'Больно ли делать трихоскопию?', 'Is trichoscopy painful?'),
        L(
          'Yo‘q. Trixoskopiya — bosh terisi va sochni maxsus kamera bilan kattalashtirib ko‘rish; hech narsa kesilmaydi va ukol qilinmaydi.',
          'Нет. Трихоскопия — осмотр кожи головы и волос специальной камерой с увеличением; ничего не разрезают и не колют.',
          'No. Trichoscopy means looking at the scalp and hair through a special magnifying camera; nothing is cut or injected.',
        ),
      ),
      Q(
        L('Kuniga qancha soch to‘kilishi normal?', 'Сколько волос в день выпадает в норме?', 'How much daily hair shedding is normal?'),
        L(
          'Odatda kuniga 50–100 tagacha soch to‘kilishi normal hisoblanadi. Undan ko‘p bo‘lsa, to‘kilish bir necha hafta davom etsa yoki sochlar siyraklashsa, sababini tekshirish kerak.',
          'Обычно нормой считается до 50–100 волос в день. Если выпадает больше, выпадение длится несколько недель или волосы заметно редеют, причину нужно проверить.',
          'Losing up to about 50–100 hairs a day is usually considered normal. If you lose more, the shedding lasts several weeks or the hair visibly thins, the cause should be checked.',
        ),
      ),
      Q(
        L('Qabulga qanday tayyorlanish kerak?', 'Как подготовиться к приёму?', 'How should I prepare for the visit?'),
        L(
          'Qabul kuni sochga lak, gel va boshqa uslub vositalarini surtmang — bosh terisi trixoskopda aniq ko‘rinishi kerak. Oxirgi qon tahlillari bo‘lsa, olib keling.',
          'В день приёма не наносите на волосы лак, гель и другие средства для укладки — кожа головы должна хорошо просматриваться при трихоскопии. Возьмите последние анализы крови, если они есть.',
          'On the day of the visit, do not use hairspray, gel or other styling products, so the scalp is clearly visible in trichoscopy. Bring your latest blood tests if you have them.',
        ),
      ),
      Q(
        L('Ayollarda soch to‘kilishini davolaysizmi?', 'Лечите ли выпадение волос у женщин?', 'Do you treat hair loss in women?'),
        L(
          'Ha. Ayollarda ko‘pincha diffuz to‘kilish, temir yetishmasligi yoki gormonal sabablar uchraydi; trixolog trixoskopiya va tahlillar asosida reja tuzadi.',
          'Да. У женщин часто встречаются диффузное выпадение, дефицит железа или гормональные причины; трихолог составляет план по данным трихоскопии и анализов.',
          'Yes. In women, diffuse shedding, iron deficiency or hormonal causes are common; the trichologist builds the plan from trichoscopy and test results.',
        ),
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
      L(
        'Podologga qachon borish kerak: tirnoq atrofi qizarib og‘risa, tirnoq qalinlashib, sarg‘ayib yoki uvalanib qolsa, tovonda chuqur yoriqlar paydo bo‘lsa, qadoq yurganda og‘riq bersa. Qandli diabetda oyoqdagi har qanday yara yoki rang o‘zgarishini kechiktirmasdan ko‘rsatish kerak.',
        'Когда идти к подологу: кожа вокруг ногтя краснеет и болит, ноготь утолщается, желтеет или крошится, на пятках появились глубокие трещины, мозоль болит при ходьбе. При сахарном диабете любую ранку или изменение цвета стопы нужно показать без промедления.',
        'When to see a podiatrist: the skin around a nail is red and sore, a nail thickens, yellows or crumbles, deep heel cracks appear, or a callus hurts when walking. With diabetes, any sore or colour change on the foot should be shown without delay.',
      ),
      L(
        'Tirnoq zamburug‘i bir muolajada o‘tmaydi: oyoq tirnog‘i to‘liq yangilanishi uchun odatda 6–12 oy kerak. Shuning uchun davolash — apparat bilan tozalash, dori vositalari va uy parvarishi — bosqichma-bosqich olib boriladi, natija esa yangi o‘sayotgan sog‘lom tirnoqda ko‘rinadi.',
        'Грибок ногтей не проходит за одну процедуру: ноготь на ноге полностью обновляется обычно за 6–12 месяцев. Поэтому лечение — аппаратная обработка, препараты и домашний уход — идёт поэтапно, а результат виден по отрастающему здоровому ногтю.',
        'Nail fungus does not clear in one session: a toenail usually takes 6–12 months to grow out completely. Treatment — device cleaning, medicines and home care — therefore goes in stages, and the result shows in the healthy nail growing in.',
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
      Q(
        L('Tirnoq zamburug‘ini davolash qancha davom etadi?', 'Сколько длится лечение грибка ногтей?', 'How long does nail fungus treatment take?'),
        L(
          'Odatda bir necha oy: oyoq tirnog‘i 6–12 oyda to‘liq yangilanadi. Podolog zararlangan qismni apparat bilan tozalaydi, shifokor dori vositalarini belgilaydi, nazorat ko‘riklarida natija baholanadi.',
          'Обычно несколько месяцев: ноготь на ноге полностью обновляется за 6–12 месяцев. Подолог аппаратно обрабатывает поражённую часть, врач назначает препараты, результат оценивают на контрольных осмотрах.',
          'Usually several months: a toenail grows out fully in 6–12 months. The podiatrist cleans the affected part with a device, the doctor prescribes medicines, and progress is checked at follow-up visits.',
        ),
      ),
      Q(
        L('Titan ip nima va qanday ishlaydi?', 'Что такое титановая нить и как она работает?', 'What is a titanium thread and how does it work?'),
        L(
          'Bu o‘sib ketgan tirnoq chetini asta-sekin ko‘tarib, to‘g‘ri o‘sishga yo‘naltiradigan yupqa ip. U operatsiyasiz qo‘yiladi va tirnoq o‘sishiga qarab almashtiriladi.',
          'Это тонкая нить, которая постепенно приподнимает край вросшего ногтя и направляет его рост правильно. Её ставят без операции и меняют по мере роста ногтя.',
          'It is a thin thread that gradually lifts the edge of an ingrown nail and guides it to grow straight. It is fitted without surgery and replaced as the nail grows.',
        ),
      ),
      Q(
        L('Tibbiy pedikyur oddiy pedikyurdan nimasi bilan farq qiladi?', 'Чем медицинский педикюр отличается от обычного?', 'How is a medical pedicure different from a regular one?'),
        L(
          'Tibbiy pedikyurni oyoq muammolarini biladigan mutaxassis steril asboblar va apparat bilan bajaradi. Maqsad — qadoq, qalinlashgan tirnoq va yoriqlarni davolash, faqat chiroyli ko‘rinish emas.',
          'Медицинский педикюр выполняет специалист по проблемам стоп стерильными инструментами и аппаратом. Цель — лечение мозолей, утолщённых ногтей и трещин, а не только внешний вид.',
          'A medical pedicure is done by a foot specialist with sterile instruments and a device. Its aim is to treat calluses, thickened nails and cracks, not only to look good.',
        ),
      ),
      Q(
        L('Qadoqni o‘zim kesib tashlasam bo‘ladimi?', 'Можно ли срезать мозоль самому?', 'Can I cut a callus myself?'),
        L(
          'Tavsiya etilmaydi: chuqur kesish infeksiya va yara xavfini oshiradi, ayniqsa qandli diabetda. Podolog qadoqni apparat bilan xavfsiz olib tashlaydi.',
          'Не рекомендуется: глубокий срез повышает риск инфекции и раны, особенно при диабете. Подолог безопасно удалит мозоль аппаратом.',
          'It is not recommended: cutting deep raises the risk of infection and wounds, especially with diabetes. A podiatrist removes a callus safely with a device.',
        ),
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
      L(
        'Qachon dermatologga kelish kerak: husnbuzar 2–3 oy davomida dorixona vositalari bilan kamaymasa, chuqur og‘riqli tugunlar paydo bo‘lsa, dog‘ yoki chuqurcha izlar qola boshlasa, akne 25 yoshdan keyin boshlansa yoki hayz sikli buzilishi bilan birga kechsa. Erta davolash chandiqlar paydo bo‘lishining oldini oladi — postakneni tuzatish aknening o‘zini davolashdan ancha uzoq davom etadi.',
        'Когда идти к дерматологу: высыпания не уменьшаются за 2–3 месяца аптечных средств, появились глубокие болезненные узлы, начинают оставаться пятна или рубчики, акне началось после 25 лет или сочетается с нарушением цикла. Раннее лечение предотвращает рубцы — исправлять постакне гораздо дольше, чем лечить само акне.',
        'When to see a dermatologist: spots do not improve after 2–3 months of pharmacy products, deep painful nodules appear, marks or pitted scars start to remain, acne begins after 25 or comes with irregular periods. Early treatment prevents scarring — fixing post-acne takes far longer than treating acne itself.',
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
      Q(
        L('Ovqat aknega ta’sir qiladimi?', 'Влияет ли питание на акне?', 'Does diet affect acne?'),
        L('Ba’zi odamlarda shirinlik, oq un mahsulotlari va ko‘p sut ichish toshmalarni kuchaytirishi mumkin. Parhez yolg‘iz o‘zi aknani davolamaydi, ammo davolashga yordam beradi.', 'У части людей сладкое, белая мука и много молока могут усиливать высыпания. Одна диета акне не лечит, но помогает лечению.', 'In some people sweets, white flour and a lot of milk can make breakouts worse. Diet alone does not cure acne, but it supports treatment.'),
      ),
      Q(
        L('Davolash boshida toshmalar ko‘payishi normalmi?', 'Нормально ли, что в начале лечения высыпаний больше?', 'Is it normal for acne to get worse at first?'),
        L('Retinoidlar bilan davolash boshida 2–4 hafta ichida vaqtincha kuchayish bo‘lishi mumkin. Bu haqida shifokorga ayting — dozani o‘zgartirish kerak bo‘lishi mumkin, lekin davolashni o‘zingiz to‘xtatmang.', 'В начале лечения ретиноидами в первые 2–4 недели возможно временное обострение. Сообщите врачу — может понадобиться коррекция дозы, но не прекращайте лечение самостоятельно.', 'Retinoids can cause a temporary flare in the first 2–4 weeks. Tell your doctor — the dose may need adjusting — but do not stop treatment on your own.'),
      ),
      Q(
        L('Postakne izlari qanday ketkaziladi?', 'Как убрать следы постакне?', 'How are post-acne marks treated?'),
        L('Qizil va qora dog‘lar uchun IPL va lazer toning, chuqurcha chandiqlar uchun fraksion CO₂ lazer va boshqa usullar qo‘llaniladi. Davolash faol akne tinchlangandan keyin boshlanadi.', 'Для красных и тёмных пятен применяют IPL и лазерный тонинг, для рубцов-ямок — фракционный CO₂-лазер и другие методы. Лечение начинают после стихания активного акне.', 'Red and dark marks respond to IPL and laser toning; pitted scars to fractional CO₂ laser and other methods. Treatment starts once active acne has calmed down.'),
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
      L(
        'Qachon trixologga kelish kerak: soch 2–3 oydan ortiq ko‘p to‘kilsa, soch ayrilgan chiziq yoki tepa qismi siyraklasa, bosh terisida tuksiz o‘choq paydo bo‘lsa, soch to‘kilishi qichish, qipiq yoki og‘riq bilan kechsa. Tug‘ruq, og‘ir kasallik, qattiq parhez yoki stressdan 2–3 oy keyin boshlangan to‘kilish ko‘pincha vaqtinchalik bo‘ladi, ammo temir tanqisligi va qalqonsimon bez muammolarini tahlil bilan istisno qilish kerak.',
        'Когда идти к трихологу: волосы выпадают сильнее обычного дольше 2–3 месяцев, редеет пробор или макушка, появился очаг без волос, выпадение сопровождается зудом, перхотью или болезненностью. Выпадение через 2–3 месяца после родов, тяжёлой болезни, жёсткой диеты или стресса часто временное, но дефицит железа и проблемы щитовидной железы нужно исключить анализами.',
        'When to see a trichologist: shedding lasts more than 2–3 months, the parting or crown thins, a bald patch appears, or hair loss comes with itching, dandruff or tenderness. Shedding 2–3 months after childbirth, a serious illness, a strict diet or stress is often temporary, but iron deficiency and thyroid problems should be ruled out with tests.',
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
      Q(
        L('Soch to‘kilishi uchun qanday tahlillar topshiriladi?', 'Какие анализы сдают при выпадении волос?', 'Which tests are done for hair loss?'),
        L('Ko‘pincha umumiy qon tahlili, ferritin, qalqonsimon bez gormonlari, D vitamini, ayollarda esa kerak bo‘lsa jinsiy gormonlar. Aniq ro‘yxatni trixolog ko‘rikdan keyin belgilaydi.', 'Чаще всего общий анализ крови, ферритин, гормоны щитовидной железы, витамин D, у женщин при необходимости — половые гормоны. Точный список врач определяет после осмотра.', 'Usually a full blood count, ferritin, thyroid hormones and vitamin D, plus sex hormones for women when needed. The trichologist sets the exact list after the exam.'),
      ),
      Q(
        L('Soch to‘kilishi o‘z-o‘zidan to‘xtaydimi?', 'Пройдёт ли выпадение само?', 'Will hair loss stop by itself?'),
        L('Stress yoki kasallikdan keyingi diffuz to‘kilish ko‘pincha 3–6 oyda o‘tadi. Androgenetik alopesiya esa davolashsiz asta-sekin kuchayadi, shuning uchun turini aniqlash muhim.', 'Диффузное выпадение после стресса или болезни часто проходит за 3–6 месяцев. Андрогенетическая алопеция без лечения постепенно прогрессирует, поэтому важно определить тип.', 'Diffuse shedding after stress or illness often settles within 3–6 months. Androgenetic alopecia slowly progresses without treatment, so identifying the type matters.'),
      ),
      Q(
        L('Natija qachon ko‘rinadi?', 'Когда будет виден результат?', 'When will results show?'),
        L('Soch sekin o‘sadi: to‘kilish kamayishi odatda 6–8 haftada, yangi sochlar o‘sishi 3–6 oyda seziladi. Natija trixoskopiya bilan raqamlarda solishtiriladi.', 'Волосы растут медленно: уменьшение выпадения обычно заметно через 6–8 недель, рост новых волос — через 3–6 месяцев. Результат сравнивают по трихоскопии в цифрах.', 'Hair grows slowly: less shedding is usually noticed in 6–8 weeks and new growth in 3–6 months. Progress is measured with trichoscopy.'),
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

  // Facts from the clinic's own materials: the surgeon's profile (abduvaliyevBegaliProfile:
  // FUE, DHI, Long Hair, 4 years, 1000+ operations), the price list (from 7 000 000), the
  // published FUE cases (follow-up 6–12 months) and the clinic videos (beard, women, aftercare).
  'soch-ekish': {
    about: [
      L(
        'Soch ekish (transplantatsiya) — sochi siyraklashgan yoki to‘kilib ketgan joyga bemorning o‘z soch follikulalarini ko‘chirib o‘tkazish operatsiyasi. Follikulalar donor zonadan — odatda ensa va chakkadan olinadi: bu sochlar androgenetik alopetsiyada to‘kilmaydi, shuning uchun yangi joyda ham o‘sishda davom etadi.',
        'Пересадка волос (трансплантация) — операция, при которой собственные волосяные фолликулы пациента переносят в зону поредения или облысения. Фолликулы берут из донорской зоны — обычно с затылка и висков: эти волосы не выпадают при андрогенетической алопеции и продолжают расти на новом месте.',
        'A hair transplant moves the patient’s own hair follicles into thinning or bald areas. Follicles are taken from the donor area — usually the back and sides of the head: these hairs do not fall out in androgenetic alopecia, so they keep growing in their new place.',
      ),
      L(
        'Radeski’da operatsiyani dermatolog-trixolog Dr. Abduvaliyev Begali Sheraliyevich bajaradi: soch transplantatsiyasida 4 yillik tajriba va 1000 dan ortiq operatsiya. FUE va DHI usullari, Long Hair transplantatsiyasi va soqol ekish qilinadi; ko‘rsatma bo‘lsa, androgenetik alopetsiyasi bor ayollarga ham soch ekiladi. Operatsiya klinikaning operatsion blokida o‘tadi.',
        'В Radeski операцию проводит дерматолог-трихолог Абдувалиев Бегали Шералиевич: 4 года опыта в трансплантации волос и более 1000 операций. Выполняются методы FUE и DHI, Long Hair трансплантация и пересадка бороды; при показаниях волосы пересаживают и женщинам с андрогенетической алопецией. Операция проходит в операционном блоке клиники.',
        'At Radeski the operation is performed by dermatologist-trichologist Dr. Begali Abduvaliyev: 4 years in hair transplantation and more than 1,000 operations. FUE and DHI, Long Hair transplants and beard transplants are offered; women with androgenetic alopecia are also treated when indicated. The operation takes place in the clinic’s surgical suite.',
      ),
      L(
        'Soch ekishdan oldin trixolog to‘kilish sababini aniqlaydi (trixoskopiya, kerak bo‘lsa qon tahlillari) va donor zonani baholaydi. To‘kilish faol bo‘lsa yoki sababi boshqa bo‘lsa — diffuz to‘kilish, o‘choqli alopetsiya, temir yoki gormon muammosi — avval davolash buyuriladi: ekilgan sochlar bilan birga o‘zingizning sochlaringizni ham saqlab qolish kerak.',
        'Перед пересадкой трихолог выясняет причину выпадения (трихоскопия, при необходимости анализы крови) и оценивает донорскую зону. Если выпадение активное или причина другая — диффузное выпадение, очаговая алопеция, дефицит железа, гормоны — сначала назначают лечение: важно сохранить не только пересаженные, но и собственные волосы.',
        'Before a transplant the trichologist finds the cause of hair loss (trichoscopy, blood tests if needed) and assesses the donor area. If the loss is active or has another cause — diffuse shedding, alopecia areata, iron or hormone problems — treatment comes first: your own hair needs saving as well as the transplanted grafts.',
      ),
      L(
        'Natija bosqichma-bosqich ko‘rinadi: ekilgan sochlar odatda dastlabki haftalarda to‘kiladi (follikula saqlanib qoladi — bu normal), yangi sochlar taxminan 3–4 oydan o‘sa boshlaydi, yakuniy zichlik 9–12 oyda shakllanadi. Radeski’da operatsiyadan keyin 6–12 oy davomida nazorat ko‘riklari o‘tkaziladi.',
        'Результат проявляется постепенно: пересаженные волосы обычно выпадают в первые недели (фолликул остаётся — это норма), новые волосы начинают расти примерно через 3–4 месяца, итоговая густота формируется к 9–12 месяцам. В Radeski после операции 6–12 месяцев проводятся контрольные осмотры.',
        'Results come in stages: transplanted hairs usually shed in the first weeks (the follicle stays — this is normal), new hair starts growing after about 3–4 months, and the final density forms by 9–12 months. Radeski follows patients up for 6–12 months after the operation.',
      ),
    ],
    steps: [
      L(
        'Trixolog konsultatsiyasi va trixoskopiya: to‘kilish sababi va donor zona baholanadi',
        'Консультация трихолога и трихоскопия: причина выпадения и оценка донорской зоны',
        'Trichologist consultation and trichoscopy: cause of hair loss and donor area assessment',
      ),
      L(
        'Reja: soch chizig‘i belgilanadi, usul (FUE yoki DHI), graftlar soni va narx oldindan aytiladi',
        'План: рисуется линия роста, выбирается метод (FUE или DHI), количество графтов и стоимость озвучиваются заранее',
        'Plan: the hairline is drawn, the method (FUE or DHI), number of grafts and cost are agreed in advance',
      ),
      L(
        'Operatsiya kuni: operatsion blokda, mahalliy og‘riqsizlantirish ostida',
        'День операции: в операционном блоке, под местной анестезией',
        'Operation day: in the surgical suite, under local anaesthesia',
      ),
      L(
        'Tiklanish: parvarish bo‘yicha yozma ko‘rsatmalar va 6–12 oy nazorat ko‘riklari',
        'Восстановление: письменные рекомендации по уходу и контрольные осмотры 6–12 месяцев',
        'Recovery: written aftercare instructions and follow-up visits for 6–12 months',
      ),
    ],
    faqs: [
      Q(
        L('Soch ekish narxi qancha?', 'Сколько стоит пересадка волос?', 'How much does a hair transplant cost?'),
        L(
          'Radeski’da soch ekish 7 000 000 so‘mdan boshlanadi, ko‘pincha 7–12 mln so‘m oralig‘ida. Yakuniy narx graftlar soni va usulga bog‘liq — u konsultatsiyada, soch chizig‘i va donor zona baholangandan keyin aytiladi.',
          'В Radeski пересадка волос стоит от 7 000 000 сум, чаще всего 7–12 млн сум. Итоговая цена зависит от количества графтов и метода — её называют на консультации после оценки линии роста и донорской зоны.',
          'At Radeski a hair transplant starts at 7,000,000 UZS, most often 7–12 million UZS. The final price depends on the number of grafts and the method — it is given at the consultation after the hairline and donor area are assessed.',
        ),
      ),
      Q(
        L('FUE va DHI usullarining farqi nimada?', 'Чем отличаются методы FUE и DHI?', 'What is the difference between FUE and DHI?'),
        L(
          'Ikkalasida ham graftlar donor zonadan bittadan, chandiq qoldirmasdan olinadi. FUE’da graftlar oldindan ochilgan mikrokanallarga joylanadi, DHI’da esa maxsus implanter bilan kanal ochish va ekish bir harakatda bajariladi. Qaysi biri mosligini shifokor soch turi, zona va zichlikka qarab tanlaydi.',
          'В обоих методах графты берут из донорской зоны по одному, без линейного рубца. При FUE их помещают в заранее подготовленные микроканалы, при DHI специальный имплантер формирует канал и вводит графт одним движением. Подходящий метод врач выбирает по типу волос, зоне и нужной густоте.',
          'In both, grafts are taken from the donor area one by one, without a linear scar. In FUE they are placed into pre-made micro-channels; in DHI a special implanter makes the channel and places the graft in one movement. The doctor picks the method by hair type, area and target density.',
        ),
      ),
      Q(
        L('Ekilgan sochlar to‘kilib ketadimi?', 'Выпадут ли пересаженные волосы?', 'Will the transplanted hair fall out?'),
        L(
          'Dastlabki haftalarda ekilgan soch tolalari odatda to‘kiladi — bu normal: follikula terida qoladi va taxminan 3–4 oydan yangi soch o‘sadi. Donor zonadan olingan follikulalar androgenetik to‘kilishga chidamli, shuning uchun natija uzoq muddatli.',
          'В первые недели пересаженные стержни волос обычно выпадают — это нормально: фолликул остаётся в коже, и примерно через 3–4 месяца растёт новый волос. Фолликулы из донорской зоны устойчивы к андрогенетическому выпадению, поэтому результат долговременный.',
          'In the first weeks the transplanted hair shafts usually shed — this is normal: the follicle stays in the skin and new hair grows in about 3–4 months. Donor follicles resist androgenetic hair loss, so the result lasts.',
        ),
      ),
      Q(
        L('Kimga soch ekish mumkin emas?', 'Кому нельзя пересаживать волосы?', 'Who should not have a hair transplant?'),
        L(
          'Qon ivishi buzilganda, qandli diabet nazoratsiz bo‘lsa, o‘tkir infeksiya, bosh terisida faol yallig‘lanish, faol o‘choqli alopetsiya yoki onkologik kasallikning faol davrida operatsiya qilinmaydi yoki keyinga suriladi. Homiladorlik va emizish davrida ham kutish kerak. Qaror konsultatsiyada qabul qilinadi.',
          'Операцию не проводят или откладывают при нарушениях свёртываемости крови, некомпенсированном диабете, острой инфекции, активном воспалении кожи головы, активной очаговой алопеции и в активной фазе онкологического заболевания. При беременности и грудном вскармливании тоже нужно подождать. Решение принимается на консультации.',
          'The operation is not done or is postponed with bleeding disorders, uncontrolled diabetes, acute infection, active scalp inflammation, active alopecia areata or active cancer treatment. Pregnancy and breastfeeding are also a reason to wait. The decision is made at the consultation.',
        ),
      ),
      Q(
        L('Ayollarga va soqolga ham ekish mumkinmi?', 'Можно ли пересадить волосы женщинам и в бороду?', 'Can women and beards be treated too?'),
        L(
          'Ha. Androgenetik alopetsiyasi bor ayollarga, donor zona yetarli bo‘lsa, soch ekiladi; erkaklarga soqol va mo‘ylov ekish ham qilinadi. Ayollarda avval gormonal va temir tanqisligi sabablari tekshiriladi.',
          'Да. Женщинам с андрогенетической алопецией пересадку делают при достаточной донорской зоне; мужчинам выполняют пересадку бороды и усов. У женщин сначала проверяют гормональные причины и дефицит железа.',
          'Yes. Women with androgenetic alopecia can have a transplant when the donor area allows; men can have beard and moustache transplants. In women hormonal causes and iron deficiency are checked first.',
        ),
      ),
      Q(
        L('Operatsiyadan keyin nimalarga e’tibor berish kerak?', 'Что важно после операции?', 'What matters after the operation?'),
        L(
          'Shifokor yozma parvarish rejasini beradi: bosh terisini qanday yuvish, qaysi kunlardan sport, hammom va quyoshga chiqish mumkinligi. Ekilgan zonani ishqalamaslik va bosh kiyimni ko‘rsatmaga ko‘ra kiyish muhim. Nazorat ko‘riklari natijani kuzatish va kerak bo‘lsa sochni qo‘llab-quvvatlovchi davolash uchun o‘tkaziladi.',
          'Врач даёт письменный план ухода: как мыть кожу головы, с какого дня можно спорт, баню и солнце. Важно не тереть пересаженную зону и носить головной убор по рекомендации. Контрольные визиты нужны, чтобы следить за результатом и при необходимости поддержать волосы лечением.',
          'The doctor gives a written aftercare plan: how to wash the scalp and when sport, sauna and sun are allowed again. Do not rub the grafted area and wear headwear as advised. Follow-up visits track the result and add supportive hair treatment if needed.',
        ),
      ),
    ],
    // The operation only: the page's "from" price is the lowest row, and a consultation row
    // would make it read "hair transplant from 150 000".
    priceNames: ['Soch ekish (narxdan boshlab)'],
    hasPriceFaq: true,
  },

  // Facts from the clinic's own materials: the botulinum therapy article (products, 15–20 min,
  // onset ~1 week, result at 2 weeks, lasts 3–8 months, contraindications, aftercare), the
  // price list (per unit; hyperhidrosis) and Dr. Mangasaryan's profile (Full Face).
  botoks: {
    about: [
      L(
        'Botoks (botulinoterapiya) — mimik mushaklarga A tipidagi botulotoksin preparatini kiritib, ajinlarni yumshatish usuli. Mushak vaqtincha bo‘shashadi, teri tekislanadi, yuz ifodasi esa tabiiy qoladi. Radeski’da sertifikatlangan preparatlar qo‘llaniladi — Dysport, Relatoks, Kseomin; qaysi biri mosligini shifokor konsultatsiyada tanlaydi.',
        'Ботокс (ботулинотерапия) — введение препарата ботулотоксина типа А в мимические мышцы, чтобы разгладить морщины. Мышца временно расслабляется, кожа выравнивается, а мимика остаётся естественной. В Radeski используют сертифицированные препараты — Dysport, Релатокс, Ксеомин; подходящий выбирает врач на консультации.',
        'Botox (botulinum therapy) relaxes the facial expression muscles with a type A botulinum toxin product so wrinkles soften. The muscle relaxes for a while, the skin smooths out, and the face still looks natural. Radeski uses certified products — Dysport, Relatox, Xeomin; the doctor chooses at the consultation.',
      ),
      L(
        'Eng ko‘p qilinadigan zonalar: peshonadagi gorizontal ajinlar, qoshlar orasidagi vertikal chiziqlar, ko‘z atrofidagi «o‘rdak oyoqlari», yuqori lab ustidagi mayda ajinlar, bo‘yin va tushgan lab burchaklari. Botulotoksin ortiqcha terlashni (giperhidroz) davolashda ham qo‘llaniladi — qo‘ltiq osti, kaft va oyoq tagi.',
        'Самые частые зоны: горизонтальные морщины лба, вертикальные складки между бровями, «гусиные лапки» вокруг глаз, мелкие морщины над верхней губой, шея и опущенные уголки губ. Ботулотоксин также применяют для лечения повышенной потливости (гипергидроза) — подмышки, ладони и стопы.',
        'The most common areas are horizontal forehead lines, vertical frown lines between the brows, crow’s feet, fine lines above the upper lip, the neck and drooping mouth corners. Botulinum toxin is also used to treat excessive sweating (hyperhidrosis) — underarms, palms and soles.',
      ),
      L(
        'Natija bosqichma-bosqich keladi: preparat taxminan bir haftadan keyin ta’sir qila boshlaydi, yakuniy natija 2 haftada baholanadi va 3–8 oy saqlanadi. Muolaja odatda har 4–12 oyda takrorlanadi. Botoks faqat mimik ajinlarni yumshatadi; teri elastikligi yo‘qolgan statik ajinlar uchun biorevitalizatsiya, kontur plastika yoki lazer kerak bo‘lishi mumkin.',
        'Результат проявляется постепенно: препарат начинает действовать примерно через неделю, итог оценивают через 2 недели, и он держится 3–8 месяцев. Обычно процедуру повторяют раз в 4–12 месяцев. Ботокс разглаживает только мимические морщины; для статических, связанных с потерей упругости, может понадобиться биоревитализация, контурная пластика или лазер.',
        'Results build up: the product starts working after about a week, the final result is assessed at 2 weeks and lasts 3–8 months. The treatment is usually repeated every 4–12 months. Botox only softens expression lines; static wrinkles from lost elasticity may need biorevitalization, fillers or laser.',
      ),
      L(
        'Radeski’da inyeksiyalarni shifokor-kosmetolog Mangasaryan Lorena Georgievna bajaradi: mimik ajinlar korreksiyasi va kompleks botulinoterapiya (Full Face). Doza va nuqtalar har bir bemor uchun alohida belgilanadi — tabiiy ifodani saqlash va ptoz yoki asimmetriya kabi nojo‘ya ta’sirlarning oldini olish uchun.',
        'В Radeski инъекции проводит врач-косметолог Мангасарян Лорена Георгиевна: коррекция мимических морщин и комплексная ботулинотерапия (Full Face). Дозы и точки подбираются индивидуально — чтобы сохранить естественную мимику и избежать нежелательных эффектов, таких как птоз или асимметрия.',
        'At Radeski the injections are done by cosmetologist Dr. Lorena Mangasaryan: expression-line correction and full-face botulinum therapy. Doses and injection points are chosen for each patient to keep expressions natural and avoid side effects such as eyelid droop or asymmetry.',
      ),
    ],
    steps: [
      L(
        'Konsultatsiya: zonalar, mimika va qarshi ko‘rsatmalar baholanadi, preparat tanlanadi',
        'Консультация: оценка зон, мимики и противопоказаний, выбор препарата',
        'Consultation: areas, facial movement and contraindications are assessed, the product is chosen',
      ),
      L(
        'Muolaja: 15–20 daqiqa, ingichka igna bilan; odatda og‘riqsizlantirish kerak emas, xohlasangiz krem surtiladi',
        'Процедура: 15–20 минут, тонкой иглой; обычно без анестезии, по желанию — крем-анестетик',
        'Treatment: 15–20 minutes with a fine needle; usually no anaesthesia, a numbing cream if you prefer',
      ),
      L(
        'Bir necha kun: yuz massaji, sauna, faol sport va alkogoldan saqlanish',
        'Несколько дней: без массажа лица, сауны, активного спорта и алкоголя',
        'For a few days: no facial massage, sauna, intense exercise or alcohol',
      ),
      L(
        '2 haftadan keyin nazorat: natija baholanadi, kerak bo‘lsa korreksiya qilinadi',
        'Контроль через 2 недели: оценка результата и при необходимости коррекция',
        'Check-up at 2 weeks: the result is assessed and touched up if needed',
      ),
    ],
    faqs: [
      Q(
        L('Botoks narxi qancha?', 'Сколько стоит ботокс?', 'How much does Botox cost?'),
        L(
          'Narx birlik bo‘yicha hisoblanadi: botulotoksin 1 birligi 30 000 so‘mdan, Relatoks 1 birligi 55 000 so‘m. Umumiy narx zonalar va kerakli birliklar soniga bog‘liq — u konsultatsiyada aytiladi. Giperhidrozni davolash 1 300 000 so‘mdan.',
          'Цена считается за единицу: ботулотоксин — от 30 000 сум за единицу, Релатокс — 55 000 сум за единицу. Итоговая стоимость зависит от зон и количества единиц и называется на консультации. Лечение гипергидроза — от 1 300 000 сум.',
          'The price is per unit: botulinum toxin from 30,000 UZS per unit, Relatox 55,000 UZS per unit. The total depends on the areas and units needed and is given at the consultation. Hyperhidrosis treatment starts at 1,300,000 UZS.',
        ),
      ),
      Q(
        L('Natija qancha vaqt saqlanadi?', 'Сколько держится эффект?', 'How long does it last?'),
        L(
          'Odatda 3–8 oy. Preparat ta’siri asta-sekin kamayadi, mushaklar yana faollashadi — shuning uchun muolaja har 4–12 oyda takrorlanadi. Takroriy muolajalar mushak atrofiyasiga olib kelmaydi.',
          'Обычно 3–8 месяцев. Действие препарата постепенно ослабевает, мышцы снова включаются — поэтому процедуру повторяют раз в 4–12 месяцев. Повторные процедуры не вызывают атрофии мышц.',
          'Usually 3–8 months. The effect fades gradually and the muscles become active again, so the treatment is repeated every 4–12 months. Repeat treatments do not cause muscle atrophy.',
        ),
      ),
      Q(
        L('Yuz «niqob»dek qotib qolmaydimi?', 'Не будет ли лицо «маской»?', 'Will my face look frozen?'),
        L(
          'Yo‘q, agar doza va nuqtalar to‘g‘ri tanlansa. Maqsad — ajinni yumshatish, mimikani o‘chirish emas: shifokor har bir zonaga kerakli miqdorni kiritadi va 2 haftadan keyin natijani tekshiradi.',
          'Нет, если правильно подобраны дозы и точки. Цель — смягчить морщину, а не убрать мимику: врач вводит в каждую зону нужное количество и через 2 недели проверяет результат.',
          'No, when doses and points are chosen correctly. The aim is to soften the line, not erase expression: the doctor puts the right amount into each area and checks the result at 2 weeks.',
        ),
      ),
      Q(
        L('Kimga botoks qilish mumkin emas?', 'Кому нельзя делать ботокс?', 'Who should not have Botox?'),
        L(
          'Homiladorlik va emizish davrida, og‘ir kasalliklarda (gepatit, onkologiya, gemofiliya), surunkali kasallik kuchayganda, yuzda yallig‘lanish yoki gerpes bo‘lganda, asab tizimiga ta’sir qiluvchi ayrim dorilar qabul qilinayotganda muolaja qilinmaydi yoki keyinga suriladi.',
          'Процедуру не проводят или откладывают при беременности и грудном вскармливании, тяжёлых заболеваниях (гепатит, онкология, гемофилия), обострении хронических болезней, воспалении или герпесе на лице и при приёме некоторых препаратов, влияющих на нервную систему.',
          'It is not done or is postponed during pregnancy and breastfeeding, with serious illnesses (hepatitis, cancer, haemophilia), flare-ups of chronic disease, facial inflammation or cold sores, and with some medicines that act on the nervous system.',
        ),
      ),
      Q(
        L('Botoks yoki filler — qaysi biri kerak?', 'Ботокс или филлер — что выбрать?', 'Botox or filler — which do I need?'),
        L(
          'Botoks mimik ajinlarni yumshatadi (peshona, qosh orasi, ko‘z atrofi). Filler — gialuron kislotasi — yo‘qolgan hajmni to‘ldiradi (lab, yonoq, nazolabial chiziqlar). Ko‘pincha ikkalasi birga rejalashtiriladi; nima kerakligini shifokor ko‘rikda aytadi.',
          'Ботокс разглаживает мимические морщины (лоб, межбровье, вокруг глаз). Филлер на гиалуроновой кислоте восполняет потерянный объём (губы, скулы, носогубные складки). Часто их планируют вместе; что нужно именно вам, врач скажет на осмотре.',
          'Botox softens expression lines (forehead, frown lines, around the eyes). A hyaluronic acid filler restores lost volume (lips, cheeks, nasolabial folds). They are often planned together; the doctor will say what you need at the visit.',
        ),
      ),
    ],
    priceNames: [
      'Botulotoksin inyeksiyasi (1 birlik)',
      'Relatoks botulotoksin (1 birlik)',
      'Gipergidroz — botulotoksin bilan davolash',
      'Gipergidroz — Relatoks preparati bilan davolash',
    ],
    hasPriceFaq: true,
    priceUnit: L('1 birligi', 'единицу', 'unit'),
  },

  // Facts from the clinic's own materials: the biorevitalization article (45–60 min sessions,
  // course of 4–6 two weeks apart, effect after the 2nd and final after the 4th session, ~6
  // months, indications/contraindications, papules 1–3 days), the price list (products) and
  // Dr. Mangasaryan's profile (biorevitalization, PRP).
  biorevitalizatsiya: {
    about: [
      L(
        'Biorevitalizatsiya — gialuron kislotasini mikroinyeksiyalar bilan terining chuqur qatlamiga yuborish. Yosh bilan teri namlikni ushlab turish qobiliyatini yo‘qotadi: quruqlik, xiralik, mayda ajinlar va sarko‘zlik shundan. Gialuron kislotasi teri ichida suvni ushlab turadi va o‘z kollageni hamda elastini ishlab chiqarilishini rag‘batlantiradi.',
        'Биоревитализация — введение гиалуроновой кислоты микроинъекциями в глубокие слои кожи. С возрастом кожа теряет способность удерживать влагу — отсюда сухость, тусклость, мелкие морщины и вялость. Гиалуроновая кислота удерживает воду внутри кожи и стимулирует выработку собственного коллагена и эластина.',
        'Biorevitalization delivers hyaluronic acid into the deeper skin layers with micro-injections. With age skin loses its ability to hold moisture — hence dryness, dullness, fine lines and sagging. Hyaluronic acid holds water inside the skin and stimulates its own collagen and elastin.',
      ),
      L(
        'Radeski’da preparat teri turi va vazifaga qarab tanlanadi: ABG Lab (AQSh), Revi Silk / Strong / Eye (Rossiya), MesoEye C71 va Revi Eye — ko‘z atrofi uchun, TEOSYAL PureSense Redensity — terini namlantirish uchun, Rejuran (PDRN) — terini tiklash va chandiqlar uchun. Plazmoterapiya (PRP) — bemorning o‘z qon plazmasi bilan muqobil variant.',
        'В Radeski препарат подбирают по типу кожи и задаче: ABG Lab (США), Revi Silk / Strong / Eye (Россия), MesoEye C71 и Revi Eye — для зоны вокруг глаз, TEOSYAL PureSense Redensity — для увлажнения, Rejuran (PDRN) — для восстановления кожи и рубцов. Плазмотерапия (PRP) — вариант с собственной плазмой пациента.',
        'At Radeski the product is chosen by skin type and goal: ABG Lab (USA), Revi Silk / Strong / Eye (Russia), MesoEye C71 and Revi Eye for the eye area, TEOSYAL PureSense Redensity for hydration, Rejuran (PDRN) for skin repair and scars. Plasma therapy (PRP) uses the patient’s own plasma instead.',
      ),
      L(
        'Muolaja kurs bilan qilinadi: odatda 4–6 seans, oralig‘i 2 hafta; bir seans 45–60 daqiqa. Effekt 1–2 seansdan keyin seziladi, yakuniy natija to‘rtinchi seansdan keyin shakllanadi va taxminan 6 oy saqlanadi — shuning uchun kurs kamida yiliga bir marta takrorlanadi. Yuz, ko‘z atrofi, bo‘yin, dekolte va qo‘llarga qilinadi.',
        'Процедуру проводят курсом: обычно 4–6 сеансов с интервалом 2 недели, один сеанс — 45–60 минут. Эффект заметен после 1–2 сеансов, итог формируется после четвёртого и держится около 6 месяцев — поэтому курс повторяют минимум раз в год. Зоны: лицо, вокруг глаз, шея, декольте и кисти рук.',
        'It is done as a course: usually 4–6 sessions two weeks apart, 45–60 minutes each. The effect shows after 1–2 sessions, the final result forms after the fourth and lasts about 6 months, so the course is repeated at least once a year. Areas: face, around the eyes, neck, décolleté and hands.',
      ),
      L(
        'Radeski’da biorevitalizatsiyani shifokor-kosmetolog Mangasaryan Lorena Georgievna o‘tkazadi — anti-age kosmetologiya, biorevitalizatsiya, kollagenostimulyatsiya va PRP-terapiya. Ignasiz variant ham bor: lazer biorevitalizatsiya — gialuron kislotasi sovuq (atermal) lazer yordamida teriga yetkaziladi.',
        'В Radeski биоревитализацию проводит врач-косметолог Мангасарян Лорена Георгиевна — anti-age косметология, биоревитализация, коллагеностимуляция и PRP-терапия. Есть и вариант без игл — лазерная биоревитализация: гиалуроновую кислоту доставляют в кожу холодным (атермальным) лазером.',
        'At Radeski biorevitalization is done by cosmetologist Dr. Lorena Mangasaryan — anti-age cosmetology, biorevitalization, collagen stimulation and PRP. There is also a needle-free option: laser biorevitalization, where a cold (athermal) laser delivers hyaluronic acid into the skin.',
      ),
    ],
    steps: [
      L(
        'Konsultatsiya: teri holati va qarshi ko‘rsatmalar baholanadi, preparat va seanslar soni tanlanadi',
        'Консультация: оценка кожи и противопоказаний, выбор препарата и числа сеансов',
        'Consultation: skin and contraindications are assessed, the product and number of sessions chosen',
      ),
      L(
        'Seans: 45–60 daqiqa, teri tozalanadi, ingichka igna bilan mikroinyeksiyalar',
        'Сеанс: 45–60 минут, очищение кожи и микроинъекции тонкой иглой',
        'Session: 45–60 minutes, skin cleansing and micro-injections with a fine needle',
      ),
      L(
        'Keyingi kunlar: 1–3 kun kichik do‘mboqchalar bo‘lishi normal, 1–2 kun makiyajsiz',
        'Следующие дни: мелкие папулы 1–3 дня — норма, 1–2 дня без макияжа',
        'The next days: small bumps for 1–3 days are normal, no make-up for 1–2 days',
      ),
      L(
        'Kurs: 4–6 seans 2 hafta oralig‘ida, keyin qo‘llab-quvvatlovchi parvarish',
        'Курс: 4–6 сеансов через 2 недели, затем поддерживающий уход',
        'Course: 4–6 sessions two weeks apart, then maintenance care',
      ),
    ],
    faqs: [
      Q(
        L('Biorevitalizatsiya narxi qancha?', 'Сколько стоит биоревитализация?', 'How much is biorevitalization?'),
        L(
          'Narx preparatga bog‘liq: plazmoterapiya (PRP) — 400 000 so‘m, ABG Lab va Revi preparatlari — 1 800 000 – 2 730 000 so‘m, TEOSYAL Redensity va Rejuran — 1 600 000 – 3 200 000 so‘m (bir muolaja). Kurs uchun umumiy narx konsultatsiyada aytiladi.',
          'Цена зависит от препарата: плазмотерапия (PRP) — 400 000 сум, препараты ABG Lab и Revi — 1 800 000 – 2 730 000 сум, TEOSYAL Redensity и Rejuran — 1 600 000 – 3 200 000 сум (за процедуру). Стоимость курса называют на консультации.',
          'The price depends on the product: plasma therapy (PRP) 400,000 UZS, ABG Lab and Revi 1,800,000–2,730,000 UZS, TEOSYAL Redensity and Rejuran 1,600,000–3,200,000 UZS (per treatment). The course total is given at the consultation.',
        ),
      ),
      Q(
        L('Necha seans kerak va natija qancha saqlanadi?', 'Сколько нужно сеансов и сколько держится эффект?', 'How many sessions, and how long does it last?'),
        L(
          'Odatda 4–6 seans, 2 hafta oralig‘ida. Effekt 1–2 seansdan keyin seziladi, yakuniy natija to‘rtinchi seansdan keyin va taxminan 6 oy saqlanadi. Kurs kamida yiliga bir marta takrorlanadi.',
          'Обычно 4–6 сеансов с интервалом 2 недели. Эффект заметен после 1–2 сеансов, итог — после четвёртого, и держится около 6 месяцев. Курс повторяют минимум раз в год.',
          'Usually 4–6 sessions two weeks apart. The effect shows after 1–2 sessions, the final result after the fourth, lasting about 6 months. Repeat the course at least once a year.',
        ),
      ),
      Q(
        L('Biorevitalizatsiya va filler — farqi nima?', 'Чем биоревитализация отличается от филлера?', 'How is it different from a filler?'),
        L(
          'Ikkalasida ham gialuron kislotasi bor, lekin vazifasi har xil. Biorevitalizatsiya terini ichidan namlantiradi va sifatini yaxshilaydi — hajm qo‘shmaydi. Filler (kontur plastika) zichroq gel bilan lab, yonoq yoki chuqur chiziqlarga hajm beradi.',
          'В обоих — гиалуроновая кислота, но задачи разные. Биоревитализация увлажняет кожу изнутри и улучшает её качество — объём не добавляет. Филлер (контурная пластика) более плотным гелем добавляет объём губам, скулам или глубоким складкам.',
          'Both contain hyaluronic acid but do different jobs. Biorevitalization hydrates the skin from within and improves its quality — it adds no volume. A filler is a denser gel that adds volume to lips, cheeks or deep folds.',
        ),
      ),
      Q(
        L('Kimga mumkin emas?', 'Кому нельзя?', 'Who should not have it?'),
        L(
          'Qon va tomir kasalliklari, qandli diabet, onkologiya, sil, gialuron kislotasiga sezuvchanlik, homiladorlik va emizish, virusli yoki ichak infeksiyasi bo‘lganda qilinmaydi. 25 yoshgacha odatda tavsiya etilmaydi — juda quruq teri bundan mustasno.',
          'Не проводят при заболеваниях крови и сосудов, диабете, онкологии, туберкулёзе, чувствительности к гиалуроновой кислоте, беременности и грудном вскармливании, вирусной или кишечной инфекции. До 25 лет обычно не рекомендуют — кроме очень сухой кожи.',
          'It is not done with blood or vascular disorders, diabetes, cancer, tuberculosis, sensitivity to hyaluronic acid, pregnancy and breastfeeding, or a viral or gut infection. It is usually not advised under 25, except for very dry skin.',
        ),
      ),
      Q(
        L('Ignasiz variant bormi?', 'Есть ли вариант без уколов?', 'Is there a needle-free option?'),
        L(
          'Ha — lazer biorevitalizatsiya: past molekulyar gialuron kislotasi sovuq (atermal) lazer yordamida teriga ignasiz yetkaziladi. Qaysi usul mos ekanini shifokor teri holatiga qarab aytadi.',
          'Да — лазерная биоревитализация: низкомолекулярную гиалуроновую кислоту доставляют в кожу холодным (атермальным) лазером, без уколов. Какой метод подходит, врач скажет по состоянию кожи.',
          'Yes — laser biorevitalization: low-molecular hyaluronic acid is delivered into the skin by a cold (athermal) laser, without needles. The doctor will say which method suits your skin.',
        ),
      ),
    ],
    // One row per name (matchPrices takes the first row that starts with it).
    priceNames: [
      'Biorevitalizatsiya: plazmoterapiya',
      'Biorevitalizatsiya: ABG Lab LCC New York',
      'Biorevitalizatsiya: ABG Lab Meso-Xantin F199',
      'Biorevitalizatsiya: MesoEye C71',
      'Biorevitalizatsiya: Revi Eye',
      'Biorevitalizatsiya: Revi Silk',
      'Biorevitalizatsiya: Revi Strong',
      'TEOSYAL PureSense Redensity 1, 1 ml',
      'TEOSYAL PureSense Redensity 1, 3 ml',
      'TEOSYAL PureSense Redensity 2',
      'Rejuran (PDRN',
      'Rejuran i',
      'Rejuran S',
    ],
    hasPriceFaq: true,
  },

  // Facts from the clinic's own materials: the dermal filler and lip filler articles (zones,
  // 1–2 ml / ~20 injections, swelling 2–4 days, no active kissing 5–7 days, 6–12 months,
  // contraindications, before/after care), the price list (products) and Dr. Mangasaryan's
  // profile (lips, face contour, Full Face, dissolving fillers with hyaluronidase).
  'kontur-plastika': {
    about: [
      L(
        'Kontur plastika — gialuron kislotasi asosidagi filler bilan yuzga hajm berish va konturni tiklash. Gialuron kislotasi terining tabiiy tarkibiy qismi: u suvni ushlab turadi, shuning uchun filler yo‘qolgan hajmni to‘ldiradi va terini namlantiradi. Natija muolajadan keyin darhol ko‘rinadi.',
        'Контурная пластика — восполнение объёма и восстановление контуров лица филлером на основе гиалуроновой кислоты. Гиалуроновая кислота — естественный компонент кожи: она удерживает воду, поэтому филлер заполняет утраченный объём и увлажняет кожу. Результат виден сразу после процедуры.',
        'Dermal fillers restore volume and facial contours with a hyaluronic acid gel. Hyaluronic acid is a natural part of the skin: it holds water, so the filler replaces lost volume and hydrates the skin. The result is visible straight after the treatment.',
      ),
      L(
        'Tuzatiladigan zonalar: lab hajmi va konturi, tushgan lab burchaklari, og‘iz atrofidagi mayda ajinlar, nazolabial chiziqlar, yonoq, iyak va yuz ovali, yoshga bog‘liq hajm yo‘qolishi va asimmetriya. Maqsad — «sun’iy» effekt emas, tabiiy shakl.',
        'Корректируемые зоны: объём и контур губ, опущенные уголки рта, мелкие морщины вокруг рта, носогубные складки, скулы, подбородок и овал лица, возрастная потеря объёма и асимметрия. Цель — не «искусственный» эффект, а естественная форма.',
        'Areas treated: lip volume and outline, drooping mouth corners, fine lines around the mouth, nasolabial folds, cheeks, chin and jawline, age-related volume loss and asymmetry. The goal is a natural shape, not an “overdone” look.',
      ),
      L(
        'Radeski’da sertifikatlangan fillerlar qo‘llaniladi: Juvederm (Ultra Smile, Ultra 3) va TEOSYAL — lab uchun Kiss, chuqur kontur uchun PureSense Ultra Deep, yuz ifodasi va hajm uchun dinamik RHA 1–4. Bir seansda odatda 1–2 ml preparat ingichka igna bilan kichik dozalarda kiritiladi; natija preparat va metabolizmga qarab 6–12 oy saqlanadi.',
        'В Radeski используют сертифицированные филлеры: Juvederm (Ultra Smile, Ultra 3) и TEOSYAL — Kiss для губ, PureSense Ultra Deep для глубоких контуров, динамические RHA 1–4 для мимических зон и объёма. За сеанс обычно вводят 1–2 мл тонкой иглой небольшими порциями; эффект держится 6–12 месяцев в зависимости от препарата и обмена веществ.',
        'Radeski uses certified fillers: Juvederm (Ultra Smile, Ultra 3) and TEOSYAL — Kiss for lips, PureSense Ultra Deep for deep contouring, dynamic RHA 1–4 for expressive areas and volume. A session usually uses 1–2 ml injected in small amounts with a fine needle; results last 6–12 months depending on the product and metabolism.',
      ),
      L(
        'Kontur plastikani shifokor-kosmetolog Mangasaryan Lorena Georgievna bajaradi: lab kontur plastikasi, yuz konturi va hajmi korreksiyasi, kompleks Full Face. Kerak bo‘lsa, avval boshqa joyda kiritilgan gialuron filler gialuronidaza bilan eritiladi.',
        'Контурную пластику проводит врач-косметолог Мангасарян Лорена Георгиевна: контурная пластика губ, коррекция контуров и объёма лица, комплексный Full Face. При необходимости ранее введённый гиалуроновый филлер растворяют гиалуронидазой.',
        'Fillers are done by cosmetologist Dr. Lorena Mangasaryan: lip fillers, facial contour and volume correction, full-face plans. If needed, a hyaluronic filler injected elsewhere can first be dissolved with hyaluronidase.',
      ),
    ],
    steps: [
      L(
        'Konsultatsiya: zonalar va proporsiyalar baholanadi, filler va hajm (ml) tanlanadi',
        'Консультация: оценка зон и пропорций, выбор филлера и объёма (мл)',
        'Consultation: areas and proportions are assessed, the filler and volume (ml) chosen',
      ),
      L(
        'Tayyorgarlik: 1 hafta solyariy va plyajsiz, 48 soat alkogolsiz; qon suyultiruvchi dorilar shifokor bilan kelishiladi',
        'Подготовка: неделю без солярия и пляжа, 48 часов без алкоголя; препараты, разжижающие кровь, — по согласованию с врачом',
        'Preparation: no tanning for a week, no alcohol for 48 hours; blood thinners only as agreed with the doctor',
      ),
      L(
        'Muolaja: ingichka igna, kichik dozalar, natija darhol ko‘rinadi',
        'Процедура: тонкая игла, небольшие порции, результат виден сразу',
        'Treatment: fine needle, small amounts, the result shows immediately',
      ),
      L(
        'Keyin: 24–48 soat zonaga tegmaslik va massaj qilmaslik, 2–4 kun shish bo‘lishi normal, nazorat ko‘rigi',
        'После: 24–48 часов не трогать и не массировать зону, отёк 2–4 дня — норма, контрольный осмотр',
        'Afterwards: do not touch or massage the area for 24–48 hours, swelling for 2–4 days is normal, follow-up visit',
      ),
    ],
    faqs: [
      Q(
        L('Kontur plastika narxi qancha?', 'Сколько стоит контурная пластика?', 'How much do fillers cost?'),
        L(
          'Narx preparatga bog‘liq: Juvederm Ultra Smile — 1 600 000 so‘m, Juvederm Ultra 3 — 2 225 000 so‘m, TEOSYAL fillerlari — 2 000 000 – 3 000 000 so‘m (bir shprits). Nechta shprits kerakligi zonalarga qarab konsultatsiyada aytiladi.',
          'Цена зависит от препарата: Juvederm Ultra Smile — 1 600 000 сум, Juvederm Ultra 3 — 2 225 000 сум, филлеры TEOSYAL — 2 000 000 – 3 000 000 сум (за шприц). Сколько шприцев нужно, скажут на консультации по зонам.',
          'The price depends on the product: Juvederm Ultra Smile 1,600,000 UZS, Juvederm Ultra 3 2,225,000 UZS, TEOSYAL fillers 2,000,000–3,000,000 UZS (per syringe). How many syringes you need is decided at the consultation.',
        ),
      ),
      Q(
        L('Natija qancha saqlanadi?', 'Сколько держится результат?', 'How long does it last?'),
        L(
          'Odatda 6–12 oy — preparat, zona va metabolizmga bog‘liq. Gialuron kislotasi asta-sekin tabiiy yo‘l bilan so‘riladi; qayta muolaja vaqtini shifokor belgilaydi.',
          'Обычно 6–12 месяцев — зависит от препарата, зоны и обмена веществ. Гиалуроновая кислота постепенно рассасывается естественным путём; время повторной процедуры определяет врач.',
          'Usually 6–12 months, depending on the product, area and metabolism. Hyaluronic acid is gradually absorbed naturally; the doctor decides when to repeat.',
        ),
      ),
      Q(
        L('Og‘riydimi, shish qancha davom etadi?', 'Больно ли и сколько держится отёк?', 'Does it hurt, and how long is the swelling?'),
        L(
          'Ingichka igna ishlatiladi, ko‘p fillerlar tarkibida og‘riqsizlantiruvchi bor. Vaqtincha shish, ko‘karish va yengil og‘riq 2–4 kun normal. Labga qilinganda faol o‘pishdan 5–7 kun saqlanish tavsiya etiladi.',
          'Используется тонкая игла, многие филлеры содержат анестетик. Временный отёк, синяк и лёгкая боль 2–4 дня — норма. После губ рекомендуется 5–7 дней воздержаться от активных поцелуев.',
          'A fine needle is used and many fillers contain an anaesthetic. Temporary swelling, bruising and mild soreness for 2–4 days are normal. After lip fillers avoid active kissing for 5–7 days.',
        ),
      ),
      Q(
        L('Natija yoqmasa nima qilinadi?', 'Что делать, если результат не понравился?', 'What if I do not like the result?'),
        L(
          'Gialuron filler qaytariladigan muolaja: kerak bo‘lsa, shifokor uni gialuronidaza fermenti bilan eritadi. Shu usul bilan boshqa joyda noto‘g‘ri kiritilgan filler ham tuzatiladi.',
          'Гиалуроновый филлер обратим: при необходимости врач растворяет его ферментом гиалуронидазой. Так же исправляют неудачно введённый в другом месте филлер.',
          'A hyaluronic filler is reversible: if needed the doctor dissolves it with the enzyme hyaluronidase. The same method corrects filler placed badly elsewhere.',
        ),
      ),
      Q(
        L('Kimga mumkin emas?', 'Кому нельзя?', 'Who should not have it?'),
        L(
          'Filler tarkibiga allergiya, homiladorlik va emizish, nazoratsiz qandli diabet, o‘tkir infeksiya (gripp, ORVI, gerpes) bo‘lganda qilinmaydi yoki keyinga suriladi.',
          'Не проводят или откладывают при аллергии на компоненты филлера, беременности и грудном вскармливании, некомпенсированном диабете, острой инфекции (грипп, ОРВИ, герпес).',
          'It is not done or is postponed with an allergy to filler ingredients, pregnancy and breastfeeding, uncontrolled diabetes, or an acute infection (flu, cold, cold sores).',
        ),
      ),
    ],
    // Fillers only (skin boosters such as Redensity and Volite are on the biorevitalization page).
    priceNames: [
      'Lab kontur plastikasi: Juvederm Ultra Smile',
      'Lab kontur plastikasi: Juvederm Ultra 3',
      'TEOSYAL Kiss 0.7 ml',
      'TEOSYAL PureSense Kiss',
      'TEOSYAL PureSense Ultra Deep',
      'TEOSYAL RHA 1',
      'TEOSYAL RHA 2',
      'TEOSYAL RHA 3',
      'TEOSYAL RHA 4',
    ],
    hasPriceFaq: true,
  },

  // Facts from the clinic's own materials: the pediatric dermatology service (infants and
  // children, atopic dermatitis, allergic rash, congenital conditions, parent guidance), the
  // doctors' profiles (Turgunov, Karimova: adults and children), the pediatric wart CO₂-laser
  // cases (Ashurov: minutes per wart, healing 1–3 weeks) and the pediatric alopecia areata case.
  'bolalar-dermatologi': {
    about: [
      L(
        'Bolalar dermatologi chaqaloqlik davridan o‘smirlikkacha bo‘lgan bolalarning teri, soch va tirnoq kasalliklarini aniqlaydi va davolaydi. Bola terisi yupqa va sezgir, shuning uchun dori, doza va muolaja yoshga qarab tanlanadi, ota-onaga esa uyda parvarish bo‘yicha aniq yo‘riqnoma beriladi.',
        'Детский дерматолог диагностирует и лечит болезни кожи, волос и ногтей у детей — от младенчества до подросткового возраста. Детская кожа тонкая и чувствительная, поэтому препараты, дозы и процедуры подбираются по возрасту, а родители получают чёткую инструкцию по домашнему уходу.',
        'A pediatric dermatologist diagnoses and treats skin, hair and nail conditions in children — from infancy to the teenage years. Children’s skin is thin and sensitive, so medicines, doses and procedures are chosen for the child’s age, and parents get clear instructions for care at home.',
      ),
      L(
        'Ko‘p murojaat qilinadigan holatlar: atopik dermatit va ekzema, allergik toshma va eshakemi, taglik dermatiti, so‘gal va molluskum kontagiozum, impetigo, gerpes, qo‘tir va bitlash, o‘choqli alopetsiya, o‘smirlik aknesi va seboreya, tug‘ma dog‘lar, xol va pigment o‘zgarishlari.',
        'Частые причины обращения: атопический дерматит и экзема, аллергическая сыпь и крапивница, пелёночный дерматит, бородавки и контагиозный моллюск, импетиго, герпес, чесотка и педикулёз, очаговая алопеция, подростковое акне и себорея, врождённые пятна, родинки и нарушения пигментации.',
        'Common reasons to visit: atopic dermatitis and eczema, allergic rash and hives, nappy rash, warts and molluscum contagiosum, impetigo, cold sores, scabies and head lice, alopecia areata, teenage acne and seborrhoea, birthmarks, moles and pigment changes.',
      ),
      L(
        'Radeski’da bolani dermatovenerologlar qabul qiladi; xol va tug‘ma dog‘lar og‘riqsiz dermatoskopiya bilan tekshiriladi. So‘gal va o‘smalar kerak bo‘lsa DEKA CO₂ lazer bilan olib tashlanadi — bitta so‘gal odatda bir necha daqiqa oladi, tiklanish 1–3 hafta. O‘choqli alopetsiya va surunkali kasalliklarda bola dinamik kuzatuvda bo‘ladi.',
        'В Radeski детей принимают дерматовенерологи; родинки и врождённые пятна проверяют безболезненной дерматоскопией. Бородавки и образования при необходимости удаляют лазером DEKA CO₂ — одна бородавка обычно занимает несколько минут, заживление 1–3 недели. При очаговой алопеции и хронических болезнях ребёнок находится под динамическим наблюдением.',
        'At Radeski children are seen by dermatovenereologists; moles and birthmarks are checked with painless dermatoscopy. Warts and growths are removed with the DEKA CO₂ laser when needed — one wart usually takes a few minutes and heals in 1–3 weeks. Children with alopecia areata or chronic conditions stay under regular follow-up.',
      ),
    ],
    steps: [
      L(
        'Ko‘rik ota-ona bilan: shikoyatlar, ovqatlanish, ishlatilayotgan krem va dorilar, allergiya so‘raladi',
        'Осмотр вместе с родителем: жалобы, питание, используемые кремы и лекарства, аллергии',
        'Visit with a parent: complaints, diet, creams and medicines used, allergies',
      ),
      L(
        'Kerak bo‘lsa dermatoskopiya yoki tahlillar',
        'При необходимости дерматоскопия или анализы',
        'Dermatoscopy or tests if needed',
      ),
      L(
        'Yoshga mos davolash rejasi va uyda parvarish bo‘yicha yozma yo‘riqnoma',
        'План лечения по возрасту и письменная инструкция по уходу дома',
        'An age-appropriate treatment plan and written home-care instructions',
      ),
      VISIT_STEPS.followUp,
    ],
    faqs: [
      Q(
        L('Bolalarni necha yoshdan qabul qilasiz?', 'С какого возраста вы принимаете детей?', 'From what age do you see children?'),
        L(
          'Chaqaloqlik davridan boshlab: go‘daklar, maktab yoshidagi bolalar va o‘smirlar qabul qilinadi. Bola ota-onasi yoki vasiysi bilan keladi.',
          'С младенчества: принимаем грудных детей, школьников и подростков. Ребёнок приходит с родителем или опекуном.',
          'From infancy: babies, school-age children and teenagers are seen. A child comes with a parent or guardian.',
        ),
      ),
      Q(
        L('Qabulga qanday tayyorlanish kerak?', 'Как подготовиться к приёму?', 'How should we prepare for the visit?'),
        L(
          'Ishlatilayotgan krem va dorilarni (yoki ularning nomini) olib keling. Toshma kelib-ketsa, uning rasmini telefonda saqlang. Qabul kuni toshmaga krem surtmaslik tavsiya etiladi — shifokor terini asl holida ko‘rishi kerak.',
          'Возьмите кремы и лекарства, которыми пользуетесь (или их названия). Если сыпь то появляется, то исчезает, сфотографируйте её. В день приёма лучше не наносить крем на сыпь — врачу нужно увидеть кожу как есть.',
          'Bring the creams and medicines you use (or their names). If the rash comes and goes, take a photo of it. On the day of the visit avoid putting cream on the rash — the doctor needs to see the skin as it is.',
        ),
      ),
      Q(
        L('Atopik dermatit butunlay davolanadimi?', 'Можно ли вылечить атопический дерматит?', 'Can atopic dermatitis be cured?'),
        L(
          'Atopik dermatit surunkali kasallik, lekin uni nazorat qilish mumkin: muntazam namlantirish, triggerlardan saqlanish va kuchayish davrida shifokor buyurgan davolash. Ko‘p bolalarda yosh o‘tishi bilan kasallik yengillashadi.',
          'Атопический дерматит — хроническое заболевание, но его можно контролировать: регулярное увлажнение, исключение триггеров и лечение по назначению врача при обострении. У многих детей с возрастом болезнь становится мягче.',
          'Atopic dermatitis is chronic but can be controlled: regular moisturising, avoiding triggers and treatment prescribed by the doctor during flares. In many children it becomes milder with age.',
        ),
      ),
      Q(
        L('Bolalardagi so‘gal qanday olib tashlanadi?', 'Как удаляют бородавки у детей?', 'How are warts removed in children?'),
        L(
          'Avval shifokor bu haqiqatan so‘gal ekanini tekshiradi. Kerak bo‘lsa, so‘gal DEKA CO₂ lazer bilan olib tashlanadi: bittasiga odatda bir necha daqiqa ketadi, tiklanish 1–3 hafta. Uyda kesish, kuydirish yoki agressiv vositalar tavsiya etilmaydi — chandiq va yallig‘lanish xavfi bor.',
          'Сначала врач проверяет, действительно ли это бородавка. При необходимости её удаляют лазером DEKA CO₂: на одну обычно уходит несколько минут, заживление 1–3 недели. Срезать, прижигать или использовать агрессивные средства дома не рекомендуется — есть риск рубца и воспаления.',
          'First the doctor confirms it really is a wart. If needed it is removed with the DEKA CO₂ laser: one usually takes a few minutes and heals in 1–3 weeks. Cutting, burning or harsh products at home are not advised — they risk scarring and inflammation.',
        ),
      ),
      Q(
        L('Bolaning xol va tug‘ma dog‘larini tekshirish kerakmi?', 'Нужно ли проверять родинки и родимые пятна у ребёнка?', 'Should a child’s moles and birthmarks be checked?'),
        L(
          'Ha, ayniqsa xol tez kattalashsa, shakli yoki rangi o‘zgarsa, qonasa yoki qichisa. Dermatoskopiya og‘riqsiz, bolaga hech qanday noqulaylik tug‘dirmaydi.',
          'Да, особенно если родинка быстро растёт, меняет форму или цвет, кровоточит или чешется. Дерматоскопия безболезненна и не доставляет ребёнку неудобств.',
          'Yes, especially if a mole grows quickly, changes shape or colour, bleeds or itches. Dermatoscopy is painless and causes the child no discomfort.',
        ),
      ),
    ],
    priceNames: DERMATOLOGIST_PRICES,
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
      L(
        'Tirnoqning sarg‘ayishi va qalinlashishi har doim ham zamburug‘ emas: psoriaz, jarohat, tor poyabzal va qarilik o‘zgarishlari ham shunday ko‘rinadi. Shuning uchun davolashdan oldin tirnoqdan namuna olinib, laboratoriyada zamburug‘ tasdiqlanadi. Davolash davomida poyabzal va paypoqlarni ham zararsizlantirish, oyoqni quruq saqlash va umumiy sochiqdan foydalanmaslik kerak — aks holda infeksiya qaytadi.',
        'Пожелтение и утолщение ногтя — не всегда грибок: так же выглядят псориаз, травма, тесная обувь и возрастные изменения. Поэтому до лечения берут образец ногтя и подтверждают грибок в лаборатории. Во время лечения нужно обрабатывать обувь и носки, держать стопы сухими и не пользоваться общими полотенцами — иначе инфекция вернётся.',
        'A yellow, thick nail is not always fungus: psoriasis, injury, tight shoes and ageing look similar. So a nail sample is checked in the lab before treatment. During treatment, disinfect shoes and socks, keep feet dry and do not share towels, or the infection will come back.',
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
      Q(
        L('Faqat malham yoki lak bilan davolasa bo‘ladimi?', 'Можно ли вылечить только мазью или лаком?', 'Can creams or lacquers alone cure it?'),
        L('Faqat tirnoq chetida kichik zararlanish bo‘lsa — ba’zan ha. Tirnoqning katta qismi yoki ildizi zararlangan bo‘lsa, tozalash, lazer va kerak bo‘lsa ichiladigan dori birga kerak.', 'Только при небольшом поражении края ногтя — иногда да. Если поражена большая часть ногтя или его основание, нужны чистка, лазер и при необходимости таблетки.', 'Only for a small area at the nail edge — sometimes. If much of the nail or its base is affected, cleaning, laser and, if needed, tablets are combined.'),
      ),
      Q(
        L('Zamburug‘ boshqalarga yuqadimi?', 'Заразен ли грибок для других?', 'Is nail fungus contagious?'),
        L('Ha, umumiy poyabzal, sochiq, hammom va basseyn orqali yuqishi mumkin. Oila a’zolarida ham belgilar bo‘lsa, ular ham tekshirilgani yaxshi.', 'Да, он передаётся через общую обувь, полотенца, баню и бассейн. Если признаки есть у членов семьи, им тоже лучше обследоваться.', 'Yes, it spreads through shared shoes, towels, saunas and pools. If family members have signs, they should be checked too.'),
      ),
      Q(
        L('Sog‘lom tirnoq qachon o‘sib chiqadi?', 'Когда отрастёт здоровый ноготь?', 'When will a healthy nail grow back?'),
        L('Oyoq tirnog‘i to‘liq yangilanishi uchun 9–12 oy kerak. Davolash muvaffaqiyatli bo‘lsa, ildiz tomondan toza tirnoq o‘sib kelayotgani bir necha oyda ko‘rinadi.', 'Ноготь на ноге полностью обновляется за 9–12 месяцев. При успешном лечении чистый ноготь у основания становится виден через несколько месяцев.', 'A toenail takes 9–12 months to fully renew. With successful treatment, clear nail growing from the base shows within a few months.'),
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
      L(
        'Qachon ko‘rikka kelish kerak: xol tez kattalashsa, rangi yoki chegarasi o‘zgarsa, qonasa, qichisa yoki atrofida yangi dog‘lar paydo bo‘lsa. Kiyim, soqol olish yoki taqinchoq doim jarohatlaydigan o‘smalar ham olib tashlanadi — bunday joyda ular ko‘proq yallig‘lanadi.',
        'Когда приходить: родинка быстро растёт, меняет цвет или границы, кровоточит, чешется или вокруг появились новые пятна. Удаляют и образования, которые постоянно травмируются одеждой, бритьём или украшениями, — в таких местах они чаще воспаляются.',
        'When to come: a mole grows quickly, changes colour or border, bleeds, itches or new spots appear around it. Growths that are constantly rubbed by clothing, shaving or jewellery are also removed, since they get inflamed more often.',
      ),
      L(
        'Uyda o‘smani bog‘lab, kuydirib yoki dorixona vositalari bilan ketkazish xavfli: to‘qima gistologiyaga tushmaydi, xavfli o‘sma o‘tkazib yuboriladi, chandiq va infeksiya ehtimoli oshadi. Olib tashlangandan keyin qobiq o‘zi tushguncha teginmaslik, 1–2 hafta saunadan voz kechish va joyni SPF 50 bilan himoyalash kerak.',
        'Удалять образование дома — перевязывать, прижигать, сводить аптечными средствами — опасно: ткань не попадает на гистологию, злокачественная опухоль может быть пропущена, растёт риск рубца и инфекции. После удаления корочку не трогают до её отпадения, 1–2 недели избегают бани и защищают место кремом SPF 50.',
        'Removing a growth at home — tying it off, burning it, using pharmacy products — is dangerous: no tissue reaches histology, a malignant tumour can be missed, and scarring and infection are more likely. After removal, leave the crust alone until it falls off, skip the sauna for 1–2 weeks and protect the area with SPF 50.',
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
      Q(
        L('Olib tashlash og‘riqlimi?', 'Больно ли удалять?', 'Does removal hurt?'),
        L('Muolaja mahalliy og‘riqsizlantirish bilan o‘tadi, faqat ukol paytida qisqa sanchiq seziladi. Kichik o‘smani olib tashlash ko‘pincha 10–20 daqiqa davom etadi.', 'Процедура проходит под местной анестезией, ощущается только короткий укол. Удаление небольшого образования обычно занимает 10–20 минут.', 'It is done under local anaesthesia; you only feel the brief injection. Removing a small growth usually takes 10–20 minutes.'),
      ),
      Q(
        L('Yozda olib tashlash mumkinmi?', 'Можно ли удалять летом?', 'Can it be done in summer?'),
        L('Ha, agar joy kiyim yoki plastir bilan yopiladi va SPF 50 qo‘llanilsa. Shubhali xolni olib tashlashni mavsum tufayli kechiktirmaslik kerak.', 'Да, если место закрыто одеждой или пластырем и используется SPF 50. Удаление подозрительной родинки не стоит откладывать из‑за сезона.', 'Yes, if the area is covered by clothing or a plaster and SPF 50 is used. A suspicious mole should not wait for the season.'),
      ),
      Q(
        L('Olib tashlangan xol yana paydo bo‘ladimi?', 'Может ли родинка появиться снова?', 'Can the mole come back?'),
        L('To‘liq olib tashlangan o‘sma odatda qaytmaydi. Yuzaki usulda olinganda ba’zan qoldiq pigment ko‘rinadi — bunda nazorat ko‘rigida shifokor qaror qiladi.', 'Полностью удалённое образование обычно не возвращается. После поверхностного удаления иногда виден остаточный пигмент — тогда решение принимает врач на контрольном осмотре.', 'A completely removed growth usually does not return. After superficial removal some residual pigment may show; the doctor decides at the follow-up visit.'),
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
      L(
        'Psoriazni kuchaytiruvchi omillar: stress, infeksiyalar (ayniqsa tomoq), teri jarohatlari, chekish, spirt, ortiqcha vazn va ba’zi dorilar. Bo‘g‘imlarda og‘riq, ertalabki qotish yoki barmoqlar shishishi paydo bo‘lsa, buni albatta shifokorga ayting — bu psoriatik artrit belgisi bo‘lishi mumkin va alohida davolashni talab qiladi.',
        'Обострения псориаза провоцируют стресс, инфекции (особенно горла), травмы кожи, курение, алкоголь, лишний вес и некоторые лекарства. Если появились боли в суставах, утренняя скованность или отёк пальцев, обязательно скажите врачу — это может быть псориатический артрит, который требует отдельного лечения.',
        'Psoriasis flares are triggered by stress, infections (especially throat), skin injury, smoking, alcohol, excess weight and some medicines. If you notice joint pain, morning stiffness or swollen fingers, tell your doctor — it may be psoriatic arthritis, which needs separate treatment.',
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
      Q(
        L('Psoriaz yuqumlimi?', 'Заразен ли псориаз?', 'Is psoriasis contagious?'),
        L('Yo‘q. Psoriaz teginish, umumiy idish yoki basseyn orqali yuqmaydi — bu immun tizimi bilan bog‘liq kasallik.', 'Нет. Псориаз не передаётся через прикосновения, посуду или бассейн — это болезнь, связанная с иммунной системой.', 'No. Psoriasis does not spread through touch, dishes or pools — it is an immune-related disease.'),
      ),
      Q(
        L('Bosh terisidagi psoriaz qanday davolanadi?', 'Как лечат псориаз кожи головы?', 'How is scalp psoriasis treated?'),
        L('Maxsus shampun, losyon va qatlamni yumshatuvchi vositalar qo‘llaniladi; soch orasidagi o‘choqlar uchun eksimer lazer qulay. Qatlamni qirib olish yoki tirnash ahvolni yomonlashtiradi.', 'Применяют специальные шампуни, лосьоны и средства, размягчающие корки; для очагов среди волос удобен эксимерный лазер. Сдирать корки и расчёсывать нельзя — это ухудшает состояние.', 'Medicated shampoos, lotions and scale-softening products are used; the excimer laser suits patches within the hair. Picking or scratching off scales makes it worse.'),
      ),
      Q(
        L('Remissiya qancha davom etadi?', 'Сколько длится ремиссия?', 'How long does remission last?'),
        L('Har kimda har xil: oylar yoki yillar. Teri namligini saqlash, kuchaytiruvchi omillardan qochish va qo‘llab-quvvatlovchi davolash remissiyani uzaytiradi.', 'У всех по-разному: месяцы или годы. Увлажнение кожи, отказ от провоцирующих факторов и поддерживающее лечение продлевают ремиссию.', 'It varies: months or years. Moisturising, avoiding triggers and maintenance treatment extend remission.'),
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
      L(
        'Qachon kelish kerak: terida sababsiz oqargan yoki sutdek oq dog‘ paydo bo‘lsa, ayniqsa u kattalashsa yoki yangi dog‘lar qo‘shilsa. Oq dog‘ni faqat vitiligo deb bo‘lmaydi — rang-barang lishay, oq lishay va dog‘dan keyingi gipopigmentatsiya ham shunday ko‘rinadi, shuning uchun tashxisni shifokor qo‘yadi.',
        'Когда приходить: на коже без причины появилось побелевшее или молочно-белое пятно, особенно если оно растёт или добавляются новые. Белое пятно — не всегда витилиго: так же выглядят отрубевидный и белый лишай, гипопигментация после воспаления, поэтому диагноз ставит врач.',
        'When to come: a pale or milk-white patch appears for no reason, especially if it grows or new ones follow. Not every white patch is vitiligo — pityriasis versicolor, pityriasis alba and post-inflammatory hypopigmentation look similar, so a doctor should make the diagnosis.',
      ),
      L(
        'Vitiligo ba’zan qalqonsimon bez kasalliklari bilan birga uchraydi, shuning uchun shifokor tahlillarni ham tavsiya qilishi mumkin. Davolash bir necha oy davom etadi: natija bosqichma-bosqich, dog‘ chetidan va soch follikulalari atrofidan nuqtali pigment ko‘rinishida keladi. Kurs davomida dog‘larni quyosh kuyishidan himoya qilish va teri jarohatlarini kamaytirish muhim.',
        'Витилиго иногда сочетается с болезнями щитовидной железы, поэтому врач может назначить анализы. Лечение длится несколько месяцев: результат приходит постепенно — точечным пигментом по краю пятна и вокруг волосяных фолликулов. Во время курса важно защищать пятна от солнечных ожогов и меньше травмировать кожу.',
        'Vitiligo sometimes goes together with thyroid disease, so the doctor may order tests. Treatment takes several months: colour returns gradually, as dots of pigment at the edge of a patch and around hair follicles. During the course it is important to prevent sunburn on the patches and avoid skin injury.',
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
      Q(
        L('Vitiligo yuqumlimi yoki irsiymi?', 'Заразно ли витилиго, передаётся ли по наследству?', 'Is vitiligo contagious or hereditary?'),
        L('Yuqumli emas — u teginish, umumiy idish yoki ovqat orqali yuqmaydi. Oilada vitiligo bo‘lsa, moyillik biroz yuqoriroq, ammo bu kasallik albatta o‘tadi degani emas.', 'Не заразно — не передаётся через прикосновения, общую посуду или еду. Если витилиго есть у родственников, предрасположенность немного выше, но это не значит, что болезнь обязательно появится.', 'It is not contagious — it does not spread through touch, shared dishes or food. A family history slightly raises the risk, but does not mean the disease will appear.'),
      ),
      Q(
        L('Ovqat vitiligoga ta’sir qiladimi?', 'Влияет ли питание на витилиго?', 'Does diet affect vitiligo?'),
        L('Muayyan ovqatni yeyish yoki tashlash vitiligoni davolamaydi. Muvozanatli ovqatlanish foydali, qattiq parhezlar esa shifokor tavsiyasisiz kerak emas.', 'Отказ от каких-то продуктов или их употребление витилиго не лечит. Сбалансированное питание полезно, а строгие диеты без рекомендации врача не нужны.', 'Eating or avoiding particular foods does not treat vitiligo. A balanced diet helps; strict diets are not needed without a doctor’s advice.'),
      ),
      Q(
        L('Natija qachon ko‘rinadi?', 'Когда будет виден результат?', 'When will results show?'),
        L('Fototerapiyada birinchi pigment orollari odatda 2–3 oyda paydo bo‘ladi. Kurs dog‘lar faolligi va joyiga qarab rejalashtiriladi va nazorat ko‘riklarida baholanadi.', 'При фототерапии первые островки пигмента обычно появляются через 2–3 месяца. Курс планируется по активности и расположению пятен и оценивается на контрольных осмотрах.', 'With phototherapy, the first islands of pigment usually appear in 2–3 months. The course is planned around how active the patches are and where they are, and reviewed at follow-up visits.'),
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
      L(
        'Rozatsea ko‘pincha 30 yoshdan keyin, och terili odamlarda boshlanadi va akne yoki allergiya deb adashtiriladi. Gormonli kremlar vaqtincha yordam bergandek tuyuladi, lekin keyin rozatseani kuchaytiradi — shuning uchun ularni o‘zingiz qo‘llamang. Kundalik yumshoq parvarish, mineral SPF va qizarishni qo‘zg‘atuvchi omillarni (achchiq ovqat, issiq ichimlik, sauna, spirt) aniqlab chetlash davolashning muhim qismi.',
        'Розацеа чаще начинается после 30 лет у людей со светлой кожей и её путают с акне или аллергией. Гормональные кремы сначала будто помогают, но потом усиливают розацеа — не используйте их самостоятельно. Мягкий ежедневный уход, минеральный SPF и выявление провокаторов покраснения (острая еда, горячие напитки, сауна, алкоголь) — важная часть лечения.',
        'Rosacea usually starts after 30 in fair-skinned people and is often mistaken for acne or allergy. Steroid creams seem to help at first but then make rosacea worse — do not use them on your own. Gentle daily care, mineral SPF and identifying flushing triggers (spicy food, hot drinks, sauna, alcohol) are an important part of treatment.',
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
      Q(
        L('Rozatsea butunlay davolanadimi?', 'Можно ли вылечить розацеа навсегда?', 'Can rosacea be cured?'),
        L('Rozatsea surunkali kasallik, lekin uni yaxshi nazorat qilish mumkin: dorilar toshmalarni, lazer va IPL esa qizarish va tomirlarni kamaytiradi. Vaqti-vaqti bilan qo‘llab-quvvatlovchi davolash kerak bo‘ladi.', 'Розацеа — хроническое заболевание, но его можно хорошо контролировать: лекарства убирают высыпания, лазер и IPL — покраснение и сосуды. Время от времени нужно поддерживающее лечение.', 'Rosacea is chronic but can be well controlled: medicines clear the bumps, laser and IPL reduce redness and vessels. Maintenance treatment is needed from time to time.'),
      ),
      Q(
        L('Rozatseada qanday kosmetika ishlatish mumkin?', 'Какую косметику можно при розацеа?', 'Which skincare is safe with rosacea?'),
        L('Spirtsiz, atirsiz, yumshoq yuvish vositalari va namlantiruvchilar; quyoshdan mineral (sink, titan dioksid) SPF. Skrab, kislotali pilinglar va mentolli vositalardan saqlaning.', 'Без спирта и отдушек, мягкие очищающие и увлажняющие средства; минеральный SPF (цинк, диоксид титана). Избегайте скрабов, кислотных пилингов и средств с ментолом.', 'Alcohol-free, fragrance-free gentle cleansers and moisturisers, plus mineral SPF (zinc, titanium dioxide). Avoid scrubs, acid peels and menthol products.'),
      ),
      Q(
        L('Rozatsea ko‘zga ta’sir qiladimi?', 'Может ли розацеа поражать глаза?', 'Can rosacea affect the eyes?'),
        L('Ha, ba’zan ko‘zda qumdek sezish, qizarish va qovoq yallig‘lanishi bo‘ladi. Bunday belgilarda shifokorga ayting, kerak bo‘lsa oftalmolog ham ko‘radi.', 'Да, иногда появляются ощущение песка, покраснение глаз и воспаление век. При таких признаках скажите врачу, при необходимости подключается офтальмолог.', 'Yes, sometimes there is a gritty feeling, red eyes and eyelid inflammation. Mention these signs to your doctor; an ophthalmologist may be involved.'),
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
      L(
        'Dog‘ turini bilish muhim, chunki usul har xil: quyosh dog‘lari lazer va IPL ga yaxshi javob beradi, melazma esa issiqlik va qattiq ta’sirdan kuchayishi mumkin, shuning uchun unda yumshoq lazer toning va kremlar tanlanadi. Agar dog‘ yangi paydo bo‘lgan, notekis rangli yoki tez o‘zgarayotgan bo‘lsa, kosmetik muolajadan oldin uni dermatoskopiya bilan tekshirish shart.',
        'Важно знать тип пятна, потому что методы разные: солнечные пятна хорошо отвечают на лазер и IPL, а мелазма может усиливаться от нагрева и агрессивного воздействия, поэтому для неё подбирают мягкий лазерный тонинг и кремы. Если пятно новое, неравномерно окрашено или быстро меняется, перед косметической процедурой его обязательно проверяют дерматоскопом.',
        'Knowing the type of spot matters because the methods differ: sun spots respond well to laser and IPL, while melasma can worsen with heat and aggressive treatment, so gentle laser toning and creams are chosen. A new, unevenly coloured or quickly changing spot must be checked with dermatoscopy before any cosmetic procedure.',
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
      Q(
        L('Melazma nima?', 'Что такое мелазма?', 'What is melasma?'),
        L('Melazma — yonoq, peshona va yuqori labda simmetrik jigarrang dog‘lar. Ko‘pincha ayollarda, homiladorlik, gormonal dorilar va quyosh ta’sirida paydo bo‘ladi. U surunkali, qaytishga moyil va uzoq parvarishni talab qiladi.', 'Мелазма — симметричные коричневые пятна на щеках, лбу и над верхней губой. Чаще у женщин, на фоне беременности, гормональных препаратов и солнца. Она хроническая, склонна возвращаться и требует длительного ухода.', 'Melasma is symmetrical brown patches on the cheeks, forehead and upper lip. It is more common in women and linked to pregnancy, hormonal medicines and sun. It is chronic, tends to return and needs long-term care.'),
      ),
      Q(
        L('Oqartiruvchi kremlar yordam beradimi?', 'Помогают ли отбеливающие кремы?', 'Do whitening creams help?'),
        L('Shifokor tanlagan vositalar (azelain kislota, retinoidlar va boshqalar) yordam beradi. Noma’lum tarkibli “oqartiruvchi” kremlar simob yoki gormon saqlashi mumkin va terini shikastlaydi.', 'Помогают средства, подобранные врачом (азелаиновая кислота, ретиноиды и др.). «Отбеливающие» кремы неизвестного состава могут содержать ртуть или гормоны и повреждают кожу.', 'Products chosen by a doctor (azelaic acid, retinoids and others) help. "Whitening" creams of unknown composition may contain mercury or steroids and damage the skin.'),
      ),
      Q(
        L('Yozda pigmentatsiyani davolash mumkinmi?', 'Можно ли лечить пигментацию летом?', 'Can pigmentation be treated in summer?'),
        L('Kremlar va yumshoq protokollar bilan — ha, qat’iy SPF 50 sharti bilan. Kuchliroq lazer kurslari odatda kuz va qishda rejalashtiriladi.', 'Кремами и мягкими протоколами — да, при строгом SPF 50. Более интенсивные лазерные курсы обычно планируют на осень и зиму.', 'With creams and gentle protocols — yes, with strict SPF 50. Stronger laser courses are usually planned for autumn and winter.'),
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
      L(
        'Lazer tukdagi qora pigmentga ta’sir qiladi, shuning uchun qora va to‘q tuklarda natija eng yaxshi bo‘ladi. Oq, kul rang va juda och sariq tuklarda pigment kam — ularga lazer deyarli ta’sir qilmaydi; buni mutaxassis konsultatsiyada oldindan aytadi.',
        'Лазер действует на тёмный пигмент волоса, поэтому лучший результат — на тёмных волосах. В седых, белых и очень светлых волосах пигмента мало, на них лазер почти не действует; специалист предупредит об этом на консультации.',
        'The laser targets dark pigment in the hair, so dark hair responds best. White, grey and very light blond hair has little pigment and barely responds; the specialist will tell you this at the consultation.',
      ),
      L(
        'Muolaja kechiktiriladi yoki qilinmaydi: homiladorlik davrida; muolaja zonasida yallig‘lanish, yara, gerpes yoki infeksiya bo‘lsa; teri yaqinda quyoshda qoraygan bo‘lsa; yorug‘likka sezuvchanlikni oshiradigan dorilar (masalan, izotretinoin) qabul qilinayotganda. Xollar va tatuirovkalar muolaja vaqtida yopib qo‘yiladi.',
        'Процедуру откладывают или не проводят: при беременности; при воспалении, ранах, герпесе или инфекции в зоне; при свежем загаре; при приёме препаратов, повышающих светочувствительность (например, изотретиноина). Родинки и татуировки во время процедуры закрывают.',
        'The procedure is postponed or not done: during pregnancy; with inflammation, wounds, herpes or infection in the area; on freshly tanned skin; while taking medicines that increase light sensitivity (for example isotretinoin). Moles and tattoos are covered during the session.',
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
        L('Epilyatsiya nima va depilyatsiyadan farqi nima?', 'Что такое эпиляция и чем она отличается от депиляции?', 'What is epilation and how is it different from depilation?'),
        L('Epilyatsiya — tukni ildizi (follikulasi) bilan birga yo‘qotish: lazer follikulani shikastlaydi va tuk asta-sekin o‘smay qo‘yadi. Depilyatsiya (ustara, krem) faqat teri ustidagi qismni olib tashlaydi, tuk 1–3 kunda qayta o‘sadi.', 'Эпиляция — удаление волоса вместе с корнем (фолликулом): лазер повреждает фолликул, и волосы постепенно перестают расти. Депиляция (бритва, крем) убирает только часть над кожей, волос отрастает за 1–3 дня.', 'Epilation removes hair together with its root (follicle): the laser damages the follicle so hair gradually stops growing. Depilation (razor, cream) removes only the part above the skin, and hair grows back in 1–3 days.'),
      ),
      Q(
        L('Necha seansda tuklar yo‘qoladi?', 'За сколько сеансов уходят волосы?', 'How many sessions are needed?'),
        L('Ko‘pincha 6–8 seans; har seansdan keyin tuklar siyraklashadi va ingichkalashadi.', 'Обычно 6–8 сеансов; после каждого волосы редеют и истончаются.', 'Usually 6–8; hair gets sparser and finer after each.'),
      ),
      Q(
        L('Yozda lazer epilyatsiya qilish mumkinmi?', 'Можно ли делать лазерную эпиляцию летом?', 'Can it be done in summer?'),
        L('Mumkin, agar teri yangi qoraymagan bo‘lsa; muolajadan keyin 2 hafta quyoshda qoraymaslik kerak.', 'Можно, если кожа не загорела недавно; после процедуры 2 недели нельзя загорать.', 'Yes, if the skin is not freshly tanned; avoid tanning for 2 weeks after.'),
      ),
      Q(
        L('Lazer epilyatsiya og‘riqlimi?', 'Больно ли делать лазерную эпиляцию?', 'Does laser hair removal hurt?'),
        L(
          'DEKA Moveo sovutish tizimi bilan ishlaydi: ko‘pchilik buni yengil iliqlik yoki chimchilash kabi his qiladi. Sezgir zonalarda his qilish kuchliroq bo‘lishi mumkin.',
          'DEKA Moveo работает с охлаждением: большинство ощущает лёгкое тепло или покалывание. На чувствительных зонах ощущения могут быть сильнее.',
          'DEKA Moveo has built-in cooling: most people feel mild warmth or tingling. Sensitive areas may feel stronger.',
        ),
      ),
      Q(
        L('Muolajadan keyin nimalarga e’tibor berish kerak?', 'Что делать после процедуры?', 'What should I do after a session?'),
        L(
          '1–2 kun issiq vanna, sauna va zonani qattiq ishqalashdan saqlaning, 2 hafta quyoshda qoraymang va SPF ishlating. Yengil qizarish odatda bir necha soatda o‘tadi.',
          '1–2 дня избегайте горячей ванны, сауны и трения зоны, 2 недели не загорайте и пользуйтесь SPF. Лёгкое покраснение обычно проходит за несколько часов.',
          'For 1–2 days avoid hot baths, the sauna and rubbing the area; do not tan for 2 weeks and use SPF. Mild redness usually fades within a few hours.',
        ),
      ),
      Q(
        L('Kimga lazer epilyatsiya mumkin emas?', 'Кому нельзя лазерную эпиляцию?', 'Who should not have laser hair removal?'),
        L(
          'Homiladorlik davrida, muolaja zonasida yallig‘lanish, yara, gerpes yoki infeksiya bo‘lsa, yangi qorayishda va yorug‘likka sezuvchanlikni oshiradigan dorilar qabul qilinayotganda. Boshqa kasalliklar bo‘lsa, mutaxassis konsultatsiyada baholaydi.',
          'При беременности, при воспалении, ранах, герпесе или инфекции в зоне, при свежем загаре и при приёме препаратов, повышающих светочувствительность. При других заболеваниях специалист оценит возможность на консультации.',
          'During pregnancy, with inflammation, wounds, herpes or infection in the area, on fresh tans and while taking medicines that increase light sensitivity. Other conditions are assessed at the consultation.',
        ),
      ),
      Q(
        L('Oq yoki och tuklarni olib tashlasa bo‘ladimi?', 'Удаляет ли лазер светлые и седые волосы?', 'Does the laser remove light or grey hair?'),
        L(
          'Deyarli yo‘q: aleksandrit lazeri tukdagi pigmentga ta’sir qiladi, oq va juda och tuklarda esa pigment kam. Bunday holatda mutaxassis boshqa yechimni tavsiya qiladi.',
          'Практически нет: александритовый лазер действует на пигмент волоса, а в седых и очень светлых волосах его мало. В таком случае специалист подскажет другое решение.',
          'Hardly: the alexandrite laser acts on hair pigment, and white or very light hair has little of it. The specialist will suggest another option in that case.',
        ),
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
      L(
        'Yiliga bir marta xollarni tekshirish ayniqsa quyidagilarga tavsiya etiladi: tanasida ko‘p xol borlar, oilasida melanoma bo‘lganlar, och terili va tez kuyadiganlar, quyoshda ko‘p ishlaydiganlar. Uyda oyiga bir marta ko‘zgu oldida terini ko‘zdan kechirish va yangi yoki o‘zgargan xolni suratga olib qo‘yish foydali — keyin uni shifokorga ko‘rsatish oson bo‘ladi.',
        'Проверять родинки раз в год особенно рекомендуется тем, у кого много родинок, у кого в семье была меланома, людям со светлой, легко обгорающей кожей и тем, кто много работает на солнце. Дома полезно раз в месяц осматривать кожу перед зеркалом и фотографировать новую или изменившуюся родинку — потом её легко показать врачу.',
        'A yearly mole check is especially advised for people with many moles, a family history of melanoma, fair skin that burns easily, or who work outdoors. At home, check your skin in a mirror once a month and photograph any new or changing mole — it is then easy to show the doctor.',
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
      Q(
        L('Dermatoskopiya xolni olib tashlash bilan bir xilmi?', 'Дерматоскопия — это удаление родинки?', 'Is dermatoscopy the same as removal?'),
        L('Yo‘q, dermatoskopiya faqat ko‘rik: hech narsa kesilmaydi. Natijaga qarab shifokor xolni kuzatishni yoki olib tashlashni tavsiya qiladi.', 'Нет, дерматоскопия — только осмотр, ничего не удаляется. По результату врач рекомендует наблюдение или удаление.', 'No, dermatoscopy is only an examination; nothing is cut. Based on the result the doctor advises monitoring or removal.'),
      ),
      Q(
        L('Bolalarga dermatoskopiya qilish mumkinmi?', 'Можно ли делать дерматоскопию детям?', 'Can children have dermatoscopy?'),
        L('Ha, u og‘riqsiz va xavfsiz. Ayniqsa katta tug‘ma xollari bor bolalarni muntazam kuzatish tavsiya etiladi.', 'Да, это безболезненно и безопасно. Особенно рекомендуется регулярно наблюдать детей с крупными врождёнными родинками.', 'Yes, it is painless and safe. Regular monitoring is especially advised for children with large congenital moles.'),
      ),
      Q(
        L('Tekshiruvdan keyin nima beriladi?', 'Что выдают после обследования?', 'What do I get after the exam?'),
        L('Shifokor xulosasi: qaysi xollar xavfsiz, qaysilarini kuzatish yoki olib tashlash kerak. Butun tana tekshiruvida suratlar bazaga saqlanadi va keyingi safar solishtiriladi.', 'Заключение врача: какие родинки безопасны, какие наблюдать или удалить. При осмотре всего тела снимки сохраняются в базе и сравниваются в следующий раз.', 'A doctor’s report: which moles are safe and which to monitor or remove. With a whole-body exam the images are stored and compared next time.'),
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
      L(
        'Yuzdagi tomirlar ko‘pincha och teri, irsiyat, quyosh, harorat o‘zgarishi, rozatsea va spirt bilan bog‘liq. Lazer ko‘rinadigan tomirlarni yo‘qotadi, lekin moyillikni o‘zgartirmaydi — shuning uchun natijani saqlash uchun SPF, issiq sauna va qattiq skrablardan ehtiyot bo‘lish, rozatsea bo‘lsa uni davolash kerak.',
        'Сосуды на лице чаще связаны со светлой кожей, наследственностью, солнцем, перепадами температуры, розацеа и алкоголем. Лазер убирает видимые сосуды, но не меняет предрасположенность — поэтому для сохранения результата нужны SPF, осторожность с горячей сауной и жёсткими скрабами, а при розацеа — её лечение.',
        'Facial vessels are linked to fair skin, genetics, sun, temperature changes, rosacea and alcohol. The laser removes visible vessels but not the tendency, so keeping the result needs SPF, care with hot saunas and harsh scrubs, and treating rosacea if present.',
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
      Q(
        L('Kuperozni kremlar bilan yo‘qotsa bo‘ladimi?', 'Можно ли убрать купероз кремами?', 'Can creams remove couperose?'),
        L('Kremlar qizarishni biroz kamaytirishi va terini himoya qilishi mumkin, lekin kengaygan tomirni yopmaydi. Ko‘rinadigan tomirlar uchun lazer yoki IPL kerak.', 'Кремы могут немного уменьшить покраснение и защитить кожу, но расширенный сосуд не закрывают. Для видимых сосудов нужен лазер или IPL.', 'Creams can reduce redness a little and protect the skin, but they do not close dilated vessels. Visible vessels need laser or IPL.'),
      ),
      Q(
        L('Muolajadan keyin qanday parvarish kerak?', 'Какой уход после процедуры?', 'What aftercare is needed?'),
        L('1–2 kun issiq vanna, sauna, sport va spirtdan saqlaning, yuzni ishqalamang, SPF 50 qo‘llang. Engil shish va qizarish 1–3 kunda o‘tadi.', '1–2 дня избегайте горячей ванны, сауны, спорта и алкоголя, не трите лицо, используйте SPF 50. Лёгкий отёк и покраснение проходят за 1–3 дня.', 'For 1–2 days avoid hot baths, saunas, exercise and alcohol, do not rub your face, and use SPF 50. Mild swelling and redness settle in 1–3 days.'),
      ),
      Q(
        L('Bolalardagi gemangiomani davolash mumkinmi?', 'Лечат ли гемангиомы у детей?', 'Are haemangiomas treated in children?'),
        L('Ha, shifokor ko‘rigidan keyin. Ba’zi gemangiomalar o‘zi kichrayadi, ba’zilari esa — ayniqsa yuzda yoki tez o‘sayotganlari — erta davolashni talab qiladi.', 'Да, после осмотра врача. Некоторые гемангиомы уменьшаются сами, а другие — особенно на лице или быстро растущие — требуют раннего лечения.', 'Yes, after a doctor’s exam. Some haemangiomas shrink on their own, while others — especially on the face or fast-growing — need early treatment.'),
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
      L(
        'So‘gallar namlik va mayda jarohatlar orqali yuqadi: basseyn, umumiy hammom, tirnoq atrofini tishlash va soqol olish ularni tarqatadi. Uyda kislotali suyuqliklar yoki kuydirish bilan ketkazishga urinish ko‘pincha chandiq qoldiradi va so‘galni chuqurlashtiradi. Tez o‘sayotgan, qonayotgan yoki odatdagidan boshqacha ko‘rinadigan “so‘gal”ni olib tashlashdan oldin shifokor dermatoskopiya bilan tekshiradi.',
        'Бородавки передаются через влагу и микротравмы: бассейн, общая баня, привычка грызть кожу у ногтей и бритьё их распространяют. Попытки свести их дома кислотами или прижиганием часто оставляют рубец и загоняют бородавку глубже. Быстро растущую, кровоточащую или необычную «бородавку» врач перед удалением проверяет дерматоскопом.',
        'Warts spread through moisture and tiny injuries: pools, shared bathrooms, biting the skin around nails and shaving all spread them. Removing them at home with acids or burning often leaves a scar and drives the wart deeper. A fast-growing, bleeding or unusual "wart" is checked with dermatoscopy before removal.',
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
      Q(
        L('Oyoq kaftidagi so‘galni qadoqdan qanday farqlash mumkin?', 'Как отличить подошвенную бородавку от мозоли?', 'How do I tell a plantar wart from a callus?'),
        L('So‘galda teri chiziqlari uziladi va ichida mayda qora nuqtalar ko‘rinadi, yon tomondan siqilganda og‘riydi. Qadoqda teri chiziqlari saqlanadi. Aniq farqni shifokor yoki podolog aytadi.', 'На бородавке прерывается кожный рисунок и видны мелкие чёрные точки, она болит при сдавливании с боков. На мозоли рисунок кожи сохранён. Точно отличит врач или подолог.', 'A wart interrupts the skin lines and shows tiny black dots, and hurts when squeezed from the sides. A callus keeps the skin lines. A doctor or podiatrist can tell for sure.'),
      ),
      Q(
        L('Olib tashlashdan keyin qanday parvarish kerak?', 'Какой уход после удаления?', 'What aftercare is needed after removal?'),
        L('Qobiq o‘zi tushguncha teginmang, joyni quruq va toza saqlang, 1–2 hafta basseyn va saunadan voz keching. Bitish odatda 1–2 hafta davom etadi.', 'Не трогайте корочку до её отпадения, держите место сухим и чистым, 1–2 недели избегайте бассейна и сауны. Заживление обычно занимает 1–2 недели.', 'Leave the crust until it falls off, keep the area clean and dry, and skip pools and saunas for 1–2 weeks. Healing usually takes 1–2 weeks.'),
      ),
      Q(
        L('So‘gal o‘z-o‘zidan yo‘qolishi mumkinmi?', 'Может ли бородавка пройти сама?', 'Can a wart go away on its own?'),
        L('Ha, ayniqsa bolalarda bir necha oy yoki yilda yo‘qolishi mumkin. Lekin og‘riq bersa, ko‘paysa yoki boshqalarga yuqish xavfi bo‘lsa, olib tashlash ma’qul.', 'Да, особенно у детей, за несколько месяцев или лет. Но если она болит, множится или есть риск заразить других, её лучше удалить.', 'Yes, especially in children, within months or years. But if it hurts, multiplies or may spread to others, removal is better.'),
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
      L(
        'Trixoskopiya tahlillar bilan birga soch to‘kilishining sababini topishga yordam beradi va keyingi ko‘riklarda davolash natijasini xolis baholash imkonini beradi: soch zichligi va qalinligi raqamlarda solishtiriladi. Tekshiruv soch to‘kilishi, siyraklashish, o‘choqli to‘kilish, bosh terisining qichishi va qipiq, shuningdek soch ekish yoki PRP kursidan oldin tavsiya qilinadi.',
        'Трихоскопия вместе с анализами помогает найти причину выпадения и позволяет объективно оценивать результат лечения на повторных визитах: густота и толщина волос сравниваются в цифрах. Обследование рекомендуют при выпадении, поредении, очаговом выпадении, зуде и перхоти кожи головы, а также перед пересадкой волос или курсом PRP.',
        'Together with tests, trichoscopy helps find the cause of hair loss and lets the doctor objectively assess treatment at follow-ups: hair density and thickness are compared in numbers. It is recommended for shedding, thinning, patchy hair loss, itchy or flaky scalp, and before a hair transplant or PRP course.',
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
      Q(
        L('Trixoskopiyadan keyin tashxis darhol aytiladimi?', 'Диагноз сообщают сразу после трихоскопии?', 'Is the diagnosis given right after trichoscopy?'),
        L('Ko‘pincha dastlabki xulosa shu kuni aytiladi. To‘liq tashxis va davolash rejasi tahlil natijalari bilan birga tuziladi.', 'Чаще всего предварительное заключение сообщают в тот же день. Полный диагноз и план лечения составляют вместе с результатами анализов.', 'A preliminary conclusion is usually given the same day. The full diagnosis and plan are made together with the test results.'),
      ),
      Q(
        L('Fototrixogramma nima?', 'Что такое фототрихограмма?', 'What is a phototrichogram?'),
        L('Bosh terisining kichik qismida sochlar qisqartirilib, bir necha kundan keyin suratga olinadi. Bu o‘sayotgan va to‘kilayotgan sochlar ulushini aniq hisoblash imkonini beradi.', 'На небольшом участке кожи головы волосы подстригают и через несколько дней фотографируют. Это позволяет точно посчитать долю растущих и выпадающих волос.', 'Hair is trimmed on a small scalp area and photographed a few days later. This allows an accurate count of growing versus shedding hairs.'),
      ),
      Q(
        L('Qanchalik tez-tez takrorlash kerak?', 'Как часто повторять?', 'How often should it be repeated?'),
        L('Davolash davomida odatda har 3–4 oyda — natijani solishtirish uchun.', 'Во время лечения обычно каждые 3–4 месяца — для сравнения результата.', 'During treatment, usually every 3–4 months to compare progress.'),
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
      L(
        'ABCDE qoidasi uyda xollarni kuzatishga yordam beradi: A — asimmetriya, B — notekis chegaralar, C — bir nechta rang, D — diametri 6 mm dan katta, E — o‘zgarish (kattalashish, ko‘tarilish, qichish). Bulardan bittasi bo‘lsa ham shifokorga ko‘rsating. Shuningdek, boshqa xollaringizga o‘xshamaydigan “begona” xol ham tekshirilishi kerak.',
        'Правило ABCDE помогает следить за родинками дома: A — асимметрия, B — неровные границы, C — несколько цветов, D — диаметр больше 6 мм, E — изменения (рост, возвышение, зуд). Даже один признак — повод показать родинку врачу. Также проверяют родинку, непохожую на остальные («гадкий утёнок»).',
        'The ABCDE rule helps monitor moles at home: A — asymmetry, B — irregular border, C — several colours, D — diameter over 6 mm, E — evolving (growing, raised, itchy). Even one sign is a reason to see a doctor. A mole that looks different from your others (the "ugly duckling") should be checked too.',
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
      Q(
        L('Xolga shikast yetsa nima qilish kerak?', 'Что делать, если травмировал родинку?', 'What if I injure a mole?'),
        L('Toza bosim bilan qonni to‘xtating, antiseptik surting va xolni ko‘rsatib qo‘ying. Shikast o‘zi xolni xavfli qilmaydi, lekin bitmasa yoki o‘zgarsa, tekshirish shart.', 'Остановите кровь чистым давлением, обработайте антисептиком и покажите родинку врачу. Травма сама по себе не делает её опасной, но если место не заживает или меняется, проверка обязательна.', 'Stop the bleeding with clean pressure, apply antiseptic and have the mole checked. An injury alone does not make it dangerous, but if it does not heal or changes, examination is a must.'),
      ),
      Q(
        L('Xollar soni ko‘payishi normalmi?', 'Нормально ли, что родинок становится больше?', 'Is it normal to get new moles?'),
        L('30–35 yoshgacha yangi xollar paydo bo‘lishi normal. Kattalarda to‘satdan paydo bo‘lgan yoki tez o‘sayotgan xolni albatta tekshirish kerak.', 'Появление новых родинок до 30–35 лет — норма. У взрослых внезапно появившуюся или быстро растущую родинку обязательно нужно проверить.', 'New moles up to age 30–35 are normal. In adults, a suddenly appearing or fast-growing mole must be checked.'),
      ),
      Q(
        L('Homiladorlikda xollar o‘zgaradimi?', 'Меняются ли родинки при беременности?', 'Do moles change in pregnancy?'),
        L('Gormonlar ta’sirida xollar biroz to‘qlashishi mumkin. Lekin notekis o‘sish yoki shakl o‘zgarishi homiladorlikda ham tekshiriladi — dermatoskopiya xavfsiz.', 'Под действием гормонов родинки могут немного потемнеть. Но неравномерный рост или изменение формы проверяют и при беременности — дерматоскопия безопасна.', 'Hormones can darken moles slightly. Uneven growth or a change in shape is still checked in pregnancy — dermatoscopy is safe.'),
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
      L(
        'Biopsiya qachon kerak: o‘sma xavfli bo‘lishi mumkinligiga shubha bo‘lsa, toshma odatdagi davolashga javob bermasa yoki bir necha kasallik bir xil ko‘rinsa. Usul vazifaga qarab tanlanadi: panch-biopsiya (dumaloq kichik namuna), shave-biopsiya (yuzaki qatlam) yoki o‘smani butunlay kesib olish (eksizion biopsiya).',
        'Когда нужна биопсия: есть подозрение на злокачественность образования, сыпь не отвечает на обычное лечение или несколько болезней выглядят одинаково. Метод выбирают по задаче: панч-биопсия (небольшой круглый образец), шейв-биопсия (поверхностный слой) или полное иссечение образования (эксцизионная биопсия).',
        'When a biopsy is needed: a growth may be malignant, a rash does not respond to usual treatment, or several diseases look alike. The method depends on the goal: punch biopsy (a small round sample), shave biopsy (the surface layer) or removing the whole growth (excisional biopsy).',
      ),
      L(
        'Tayyorgarlik oddiy: qon suyultiruvchi dorilar, allergiya va qandli diabet haqida shifokorga oldindan ayting — dorini o‘zingiz to‘xtatmang. Biopsiyadan keyin joyni 24 soat ho‘llamaslik, so‘ng kuniga bir marta yuvib, bog‘lam almashtirish tavsiya etiladi; chok qo‘yilgan bo‘lsa, u 7–14 kunda olinadi.',
        'Подготовка простая: заранее скажите врачу о препаратах, разжижающих кровь, аллергии и диабете — сами лекарство не отменяйте. После биопсии место 24 часа не мочат, затем раз в день промывают и меняют повязку; если наложен шов, его снимают через 7–14 дней.',
        'Preparation is simple: tell the doctor in advance about blood thinners, allergies and diabetes — do not stop any medicine yourself. Keep the site dry for 24 hours, then wash it once a day and change the dressing; stitches, if any, come out after 7–14 days.',
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
      Q(
        L('Biopsiya og‘riqlimi?', 'Больно ли делать биопсию?', 'Does a biopsy hurt?'),
        L('Mahalliy og‘riqsizlantirishdan keyin namuna olish sezilmaydi; faqat ukol paytida qisqa sanchiq bo‘ladi. Keyingi kunlarda engil sezgirlik bo‘lishi mumkin.', 'После местной анестезии забор образца не ощущается, чувствуется только короткий укол. В следующие дни возможна лёгкая болезненность.', 'After local anaesthesia the sampling is not felt; only the injection stings briefly. The site may be slightly tender for a few days.'),
      ),
      Q(
        L('Biopsiya o‘smaning tarqalishiga sabab bo‘ladimi?', 'Может ли биопсия спровоцировать рост опухоли?', 'Can a biopsy make a tumour spread?'),
        L('Yo‘q, to‘g‘ri bajarilgan biopsiya o‘smaning tarqalishiga olib kelmaydi. Aksincha, aniq tashxis davolashni kechiktirmaslikka yordam beradi.', 'Нет, правильно выполненная биопсия не вызывает распространения опухоли. Наоборот, точный диагноз помогает не откладывать лечение.', 'No, a properly performed biopsy does not cause a tumour to spread. An accurate diagnosis helps avoid delaying treatment.'),
      ),
      Q(
        L('Natija nima bo‘yicha beriladi?', 'Что содержит заключение?', 'What does the report contain?'),
        L('Gistologik xulosada to‘qima tuzilishi va tashxis yoziladi, o‘sma olib tashlangan bo‘lsa — chetlari tozaligi ham. Xulosani shifokor tushuntiradi va keyingi qadamni belgilaydi.', 'В гистологическом заключении описывается строение ткани и диагноз, а если образование удалено — и чистота краёв. Заключение объясняет врач и определяет следующий шаг.', 'The histology report describes the tissue and gives the diagnosis, and for a removed growth, whether the margins are clear. The doctor explains it and sets the next step.'),
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
      L(
        'Teri saratoni xavfi yuqori bo‘lganlar: och terili va sepkilli odamlar, bolaligida ko‘p quyosh kuyishini boshdan kechirganlar, ochiq havoda ishlaydiganlar, oilasida melanoma bo‘lganlar, 50 tadan ko‘p xoli borlar va immuniteti pasaygan bemorlar. Ular yiliga bir marta dermatoonkologga ko‘rinishi, quyoshdan himoyalanishi va solyariydan voz kechishi tavsiya etiladi.',
        'В группе повышенного риска рака кожи: люди со светлой кожей и веснушками, перенёсшие частые солнечные ожоги в детстве, работающие на открытом воздухе, имеющие родственников с меланомой, более 50 родинок, а также пациенты со сниженным иммунитетом. Им рекомендуют раз в год показываться дерматоонкологу, защищаться от солнца и отказаться от солярия.',
        'People at higher risk of skin cancer include those with fair, freckled skin, frequent childhood sunburns, outdoor jobs, a family history of melanoma, more than 50 moles, or a weakened immune system. They should see a dermato-oncologist once a year, protect themselves from the sun and avoid sunbeds.',
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
      Q(
        L('Melanoma qanday ko‘rinadi?', 'Как выглядит меланома?', 'What does melanoma look like?'),
        L('Ko‘pincha notekis chegarali, bir necha rangli, kattalashayotgan xol yoki yangi paydo bo‘lgan qoramtir dog‘. Ba’zan pushti, pigmentsiz bo‘ladi — shuning uchun o‘zgarayotgan har qanday o‘smani ko‘rsatish kerak.', 'Чаще это родинка с неровными краями, несколькими цветами, которая растёт, или новое тёмное пятно. Иногда она розовая, без пигмента, поэтому любое меняющееся образование нужно показать врачу.', 'Often a growing mole with an irregular border and several colours, or a new dark spot. Sometimes it is pink without pigment, so any changing growth should be shown to a doctor.'),
      ),
      Q(
        L('Mohs jarrohligi kimga kerak?', 'Кому нужна операция Мооса?', 'Who needs Mohs surgery?'),
        L('Asosan yuz, quloq, burun va ko‘z atrofidagi bazalioma va yassi hujayrali rakda, shuningdek qaytalangan yoki chegarasi noaniq o‘smalarda — sog‘lom to‘qimani saqlash muhim bo‘lgan joylarda.', 'В основном при базалиоме и плоскоклеточном раке на лице, ушах, носу и вокруг глаз, а также при рецидивных опухолях или с нечёткими границами — там, где важно сохранить здоровые ткани.', 'Mainly for basal and squamous cell carcinoma on the face, ears, nose and around the eyes, and for recurrent or poorly defined tumours — where sparing healthy tissue matters.'),
      ),
      Q(
        L('Teri saratonidan keyin qanday kuzatuv kerak?', 'Какое наблюдение нужно после рака кожи?', 'What follow-up is needed after skin cancer?'),
        L('Shifokor belgilagan oraliqda — odatda dastlabki yillarda 3–6 oyda bir marta — butun teri ko‘rigi va dermatoskopiya. Yangi o‘sma paydo bo‘lish xavfi yuqoriroq bo‘lgani uchun quyoshdan himoya muhim.', 'С интервалом, который назначит врач, — обычно в первые годы раз в 3–6 месяцев — осмотр всей кожи и дерматоскопия. Риск новой опухоли выше, поэтому важна защита от солнца.', 'Full skin checks and dermatoscopy at intervals set by the doctor — usually every 3–6 months in the first years. The risk of a new tumour is higher, so sun protection matters.'),
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
      L(
        'IPL kimga mos: yuz va qo‘llardagi quyosh dog‘lari (lentigo), kuperoz va rozatsea qizarishi, mayda tomir to‘rlari va teri rangining notekisligida. Melazma, juda qora (to‘q) teri va yangi qorayish IPL uchun ehtiyotkorlik talab qiladi — bunday hollarda shifokor boshqa usulni tavsiya qilishi mumkin.',
        'Кому подходит IPL: солнечные пятна (лентиго) на лице и руках, покраснение при куперозе и розацеа, мелкая сосудистая сетка и неровный тон кожи. Мелазма, очень смуглая кожа и свежий загар требуют осторожности — в таких случаях врач может предложить другой метод.',
        'Who IPL suits: sun spots (lentigines) on the face and hands, redness from couperose and rosacea, fine vessel networks and uneven skin tone. Melasma, very dark skin and a fresh tan need caution — the doctor may suggest another method.',
      ),
      L(
        'Seansdan oldin 2–4 hafta quyoshda qoraymaslik va solyariyga bormaslik kerak. Homiladorlik, faol teri infeksiyasi, yorug‘likka sezgirlikni oshiruvchi dorilar va izotretinoin bilan davolanish IPL ni kechiktirish sababi bo‘ladi. Seansdan keyin bir necha soat qizarish va iliqlik sezilishi normal.',
        'За 2–4 недели до сеанса нельзя загорать и посещать солярий. Беременность, активная кожная инфекция, препараты, повышающие чувствительность к свету, и лечение изотретиноином — причины отложить IPL. После сеанса несколько часов сохраняются покраснение и ощущение тепла — это нормально.',
        'Avoid tanning and sunbeds for 2–4 weeks before a session. Pregnancy, an active skin infection, light-sensitising medicines and isotretinoin treatment are reasons to postpone IPL. Redness and warmth for a few hours afterwards are normal.',
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
      Q(
        L('IPL og‘riqlimi?', 'Больно ли делать IPL?', 'Does IPL hurt?'),
        L('Har bir impulsda rezina tasma urilgandek qisqa iliq chaqish seziladi. Sovutuvchi gel va moslangan rejim noqulaylikni kamaytiradi, og‘riqsizlantirish odatda kerak emas.', 'При каждой вспышке ощущается короткий тёплый щелчок, как от резинки. Охлаждающий гель и подобранный режим уменьшают дискомфорт, обезболивание обычно не нужно.', 'Each pulse feels like a brief warm snap of a rubber band. Cooling gel and tailored settings reduce discomfort; anaesthesia is usually not needed.'),
      ),
      Q(
        L('Seansdan keyin ishga chiqish mumkinmi?', 'Можно ли сразу на работу?', 'Can I go back to work right away?'),
        L('Ha. Qizarish odatda bir necha soatda o‘tadi, ertasi kuni makiyaj qilish mumkin. Dog‘lar to‘qlashib ko‘chguncha ularni ishqalamaslik kerak.', 'Да. Покраснение обычно проходит за несколько часов, на следующий день можно наносить макияж. Пока пятна темнеют и отшелушиваются, их нельзя тереть.', 'Yes. Redness usually fades within hours and make-up can be worn the next day. Do not rub the spots while they darken and flake.'),
      ),
      Q(
        L('IPL natijasi qancha saqlanadi?', 'Сколько держится результат IPL?', 'How long do IPL results last?'),
        L('Olib tashlangan dog‘lar qaytmaydi, ammo quyosh yangilarini paydo qilishi mumkin. Har kuni SPF qo‘llash va kerak bo‘lsa yiliga bir marta qo‘llab-quvvatlovchi seans natijani uzoq saqlaydi.', 'Удалённые пятна не возвращаются, но солнце может вызвать новые. Ежедневный SPF и при необходимости поддерживающий сеанс раз в год сохраняют результат надолго.', 'Removed spots do not return, but the sun can cause new ones. Daily SPF and, if needed, a yearly maintenance session keep the result.'),
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
      L(
        'Lazerdan oldin 2–4 hafta quyoshda qoraymaslik, muolaja kuni yuzga krem va makiyaj surtmaslik kerak. Homiladorlik, faol teri infeksiyasi, yangi qorayish va yorug‘likka sezgirlikni oshiruvchi dorilar muolajani kechiktirish sababi bo‘ladi. Oyoqdagi katta varikoz tomirlar lazer bilan emas, flebolog tomonidan davolanadi — buni ko‘rikda shifokor aniqlaydi.',
        'За 2–4 недели до лазера нельзя загорать, в день процедуры не наносят крем и макияж. Беременность, активная кожная инфекция, свежий загар и препараты, повышающие светочувствительность, — причины отложить процедуру. Крупные варикозные вены на ногах лечит флеболог, а не лазер, — это врач определяет на осмотре.',
        'Avoid tanning for 2–4 weeks before the laser, and do not wear cream or make-up on the day. Pregnancy, active skin infection, a fresh tan and light-sensitising medicines are reasons to postpone. Large varicose veins on the legs are treated by a phlebologist, not the laser — the doctor decides at the exam.',
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
      Q(
        L('Tomir qayta paydo bo‘ladimi?', 'Появятся ли сосуды снова?', 'Will the vessels come back?'),
        L('Yopilgan tomir qaytmaydi, lekin moyillik saqlansa vaqt o‘tib yangi tomirlar paydo bo‘lishi mumkin. Bunda qo‘llab-quvvatlovchi seans o‘tkaziladi.', 'Закрытый сосуд не возвращается, но при сохранении предрасположенности со временем могут появиться новые. Тогда проводят поддерживающий сеанс.', 'A closed vessel does not return, but new ones can appear over time if the tendency remains. A maintenance session then helps.'),
      ),
      Q(
        L('Seansdan keyin ko‘karish bo‘ladimi?', 'Бывают ли синяки после сеанса?', 'Will there be bruising?'),
        L('Ba’zi rejimlarda kichik ko‘karish yoki qizil nuqtalar paydo bo‘lishi mumkin, ular 5–10 kunda o‘tadi. Ko‘pincha faqat qisqa qizarish va engil shish bo‘ladi.', 'При некоторых режимах возможны небольшие синяки или красные точки, они проходят за 5–10 дней. Чаще бывает только кратковременное покраснение и лёгкий отёк.', 'Some settings may cause small bruises or red dots that fade in 5–10 days. Usually there is only brief redness and mild swelling.'),
      ),
      Q(
        L('Necha seans kerak?', 'Сколько сеансов нужно?', 'How many sessions are needed?'),
        L('Mayda tomirlar ko‘pincha 1–2 seansda, kuperoz va gemangiomalar 2–4 seansda kamayadi. Seanslar orasidagi oraliq odatda 4–6 hafta.', 'Мелкие сосуды часто уходят за 1–2 сеанса, купероз и гемангиомы — за 2–4. Интервал между сеансами обычно 4–6 недель.', 'Small vessels often clear in 1–2 sessions; couperose and haemangiomas in 2–4. Sessions are usually 4–6 weeks apart.'),
      ),
    ],
    priceNames: VASCULAR_PRICES,
  },

  kosmetolog: {
    about: [
      L(
        'Kosmetolog — yuz va tana terisining sifati, rangi, relyefi va yoshga bog‘liq o‘zgarishlari bilan ishlaydigan mutaxassis. Radeski Skin Clinic’da kosmetologik muolajalarni dermatokosmetologlar — dermatologiya ma’lumotiga ega shifokorlar bajaradi: yuz tozalash, pilinglar, pigmentatsiya, akne va postakne, kengaygan g‘ovaklar, biorevitalizatsiya va botulinoterapiya.',
        'Косметолог работает с качеством, цветом и рельефом кожи лица и тела, а также с возрастными изменениями. В Radeski Skin Clinic косметологические процедуры проводят дерматокосметологи — врачи с дерматологическим образованием: чистка лица, пилинги, пигментация, акне и постакне, расширенные поры, биоревитализация и ботулинотерапия.',
        'A cosmetologist works with the quality, tone and texture of facial and body skin and with age-related changes. At Radeski Skin Clinic, cosmetic treatments are done by dermatocosmetologists — doctors trained in dermatology: facial cleansing, peels, pigmentation, acne and post-acne, enlarged pores, biorevitalization and botulinum therapy.',
      ),
      L(
        'Birinchi qabulda yuz JANUS PRO apparatida skanerlanadi, so‘ng muolajalar teri holatiga qarab tanlanadi. Klinikada IPL (InMode), Hollywood Spectra, Derma V va fraksion CO₂ lazer kabi tibbiy apparatlar bor. Tibbiy protokol degani: muolajadan oldin ko‘rsatma va qarshi ko‘rsatmalar tekshiriladi, apparat rejimi teri fototipi va muammoga qarab tanlanadi, muolaja va natija bemorning tibbiy kartasiga yoziladi.',
        'На первом приёме лицо сканируется на аппарате JANUS PRO, затем процедуры подбираются по состоянию кожи. В клинике есть медицинские аппараты — IPL (InMode), Hollywood Spectra, Derma V, фракционный CO₂-лазер, — Медицинский протокол означает: перед процедурой проверяются показания и противопоказания, режим аппарата подбирается по фототипу кожи и проблеме, процедура и результат фиксируются в медицинской карте.',
        'At the first visit the face is scanned with the JANUS PRO device, then treatments are chosen for the skin’s condition. The clinic has medical devices — IPL (InMode), Hollywood Spectra, Derma V and a fractional CO₂ laser — A medical protocol means that indications and contraindications are checked first, device settings are chosen for the skin phototype and the problem, and the treatment and result are recorded in the patient’s medical file.',
      ),
      L(
        'Dermatokosmetolog kosmetik muammoning sababini ham ko‘radi: akne, rozatsea yoki pigmentatsiya ortida kasallik bo‘lsa, davolash dermatolog bilan birga rejalashtiriladi.',
        'Дерматокосметолог видит и причину косметической проблемы: если за акне, розацеа или пигментацией стоит заболевание, лечение планируется вместе с дерматологом.',
        'A dermatocosmetologist also looks for the cause: if acne, rosacea or pigmentation is driven by a skin disease, treatment is planned together with a dermatologist.',
      ),
      L(
        'Muolajalar har kimga ham birdek mos emas. Odatda kechiktiriladi yoki boshqa usul tanlanadi: homiladorlik va emizish davrida, muolaja sohasida faol yallig‘lanish, infeksiya yoki gerpes bo‘lsa, yangi quyosh kuyishi yoki qorayishdan keyin, izotretinoin bilan davolanish paytida va undan keyingi oylarda, keloid chandiqqa moyillikda. Shubhali xol yoki dog‘ bo‘lsa, avval dermatolog dermatoskopiya qiladi.',
        'Процедуры подходят не всем. Обычно их откладывают или выбирают другой метод при беременности и грудном вскармливании, активном воспалении, инфекции или герпесе в зоне процедуры, после свежего загара или солнечного ожога, во время лечения изотретиноином и в течение нескольких месяцев после него, при склонности к келоидным рубцам. Если есть подозрительная родинка или пятно, сначала дерматолог проводит дерматоскопию.',
        'Treatments are not right for everyone. They are usually postponed, or another method is chosen, during pregnancy and breastfeeding, with active inflammation, infection or herpes in the area, after a fresh tan or sunburn, during isotretinoin treatment and for some months after it, and with a tendency to keloid scars. A suspicious mole or spot is first checked by a dermatologist with dermoscopy.',
      ),
    ],
    steps: [
      L('Dermatokosmetolog ko‘rigi va JANUS PRO bilan yuzni skanerlash', 'Осмотр дерматокосметолога и сканирование лица на JANUS PRO', 'Dermatocosmetologist visit and JANUS PRO face scan'),
      VISIT_STEPS.plan,
      L('Muolaja: tozalash, piling, apparat yoki in’eksion protokol', 'Процедура: чистка, пилинг, аппаратный или инъекционный протокол', 'Treatment: cleansing, peel, device or injectable protocol'),
      L('Uy parvarishi va quyoshdan himoya (SPF) bo‘yicha tavsiyalar', 'Рекомендации по домашнему уходу и защите от солнца (SPF)', 'Home care and sun protection (SPF) advice'),
    ],
    faqs: [
      Q(
        L('Kosmetolog va dermatokosmetolog o‘rtasida qanday farq bor?', 'Чем косметолог отличается от дерматокосметолога?', 'How is a cosmetologist different from a dermatocosmetologist?'),
        L(
          'Dermatokosmetolog — dermatologiya ma’lumotiga ega shifokor. U muammoning sababini aniqlaydi va kerak bo‘lsa davolashni ham tayinlaydi; muolajalar tibbiy ko‘rsatma va qarshi ko‘rsatmalarni hisobga olib tanlanadi.',
          'Дерматокосметолог — врач с дерматологическим образованием. Он выясняет причину проблемы и при необходимости назначает лечение; процедуры подбираются с учётом показаний и противопоказаний.',
          'A dermatocosmetologist is a doctor trained in dermatology who finds the cause of the problem and prescribes treatment when needed; procedures are chosen with indications and contraindications in mind.',
        ),
      ),
      Q(
        L('Muolajadan keyin qizarish bo‘ladimi?', 'Бывает ли покраснение после процедур?', 'Will my skin be red afterwards?'),
        L(
          'Ba’zi pilinglar va lazer muolajalaridan keyin qisqa muddatli qizarish yoki po‘st tashlash bo‘lishi mumkin. Shifokor parvarish va SPF bo‘yicha aniq tavsiya beradi.',
          'После некоторых пилингов и лазерных процедур возможны кратковременное покраснение или шелушение. Врач даёт точные рекомендации по уходу и SPF.',
          'Some peels and laser treatments can cause short-lived redness or flaking. The doctor gives clear aftercare and SPF advice.',
        ),
      ),
      Q(
        L('Birinchi qabulga nima bilan kelish kerak?', 'С чем прийти на первый приём?', 'What should I bring to the first visit?'),
        L(
          'Yuzni bo‘yanishsiz olib kelgan ma’qul. Ishlatayotgan krem va vositalaringiz, qabul qilayotgan dorilar haqida shifokorga ayting.',
          'Лучше прийти без макияжа и рассказать врачу о кремах и средствах, которыми вы пользуетесь, и о принимаемых лекарствах.',
          'It is best to come without make-up and tell the doctor about the creams and products you use and any medication you take.',
        ),
      ),
      Q(
        L('Kimga kosmetologik muolajalar mumkin emas?', 'Кому нельзя делать косметологические процедуры?', 'Who should not have cosmetic treatments?'),
        L(
          'Homiladorlik va emizish, muolaja sohasidagi yallig‘lanish, infeksiya yoki gerpes, yangi quyosh kuyishi, izotretinoin bilan davolanish va keloid chandiqqa moyillik — eng ko‘p uchraydigan cheklovlar. Ular har bir muolaja uchun alohida baholanadi, shuning uchun dastlab shifokor ko‘rigi o‘tkaziladi.',
          'Самые частые ограничения — беременность и грудное вскармливание, воспаление, инфекция или герпес в зоне процедуры, свежий солнечный ожог, лечение изотретиноином и склонность к келоидным рубцам. Они оцениваются для каждой процедуры отдельно, поэтому сначала проводится осмотр врача.',
          'The most common limits are pregnancy and breastfeeding, inflammation, infection or herpes in the area, a fresh sunburn, isotretinoin treatment and a tendency to keloid scars. They are assessed for each treatment separately, which is why a doctor’s examination comes first.',
        ),
      ),
    ],
    priceNames: [
      "Dermatokosmetolog shifokorining birinchi ko'rigi",
      'Yuz tozalash: Innoaestetic kosmetikasi bilan ultratovush yuz tozalash',
      'Yuz tozalash: PRX-T33 piling',
      'Karbonli piling — Hollywood Spectra',
      'Akne, qizarish va post-akneni davolash — Hollywood Spectra (gold toning)',
      'Me Line pigmentatsiyaga qarshi piling',
    ],
  },

  'ichga-osgan-tirnoq': {
    about: [
      L(
        'Ichiga o‘sgan tirnoq (onixokriptoz) — tirnoq chetining barmoq terisiga botib o‘sishi. Ko‘pincha oyoq bosh barmog‘ida uchraydi va og‘riq, qizarish, shish, ba’zan yiringlash bilan kechadi. Ko‘p uchraydigan sabablar — tirnoqni juda qisqa yoki burchaklarini chuqur kesish, tor poyabzal va jarohatlar.',
        'Вросший ноготь (онихокриптоз) — врастание края ногтя в кожу пальца. Чаще всего страдает большой палец стопы: появляются боль, покраснение, отёк, иногда нагноение. Частые причины — слишком короткая стрижка или глубоко срезанные уголки, тесная обувь и травмы.',
        'An ingrown toenail (onychocryptosis) is the nail edge growing into the skin of the toe. It most often affects the big toe and causes pain, redness, swelling and sometimes infection. Common causes are cutting nails too short or the corners too deep, tight shoes and injuries.',
      ),
      L(
        'Radeski Skin Clinic’da podolog muammoning darajasini baholab, usulni tanlaydi: teriga botgan tirnoq qismini ehtiyotkorlik bilan olib tashlash va titan ip bilan tirnoqning o‘sish yo‘nalishini asta-sekin to‘g‘rilash. Titan ip tirnoq chetlarini ko‘tarib, teriga bosimni kamaytiradi — ko‘p hollarda tirnoqni to‘liq olib tashlash shart emas.',
        'В Radeski Skin Clinic подолог оценивает стадию и выбирает метод: аккуратное удаление вросшей в кожу части ногтя и постепенная коррекция направления роста титановой нитью. Нить приподнимает края ногтя и снижает давление на кожу — во многих случаях удалять ноготь полностью не нужно.',
        'At Radeski Skin Clinic the podiatrist assesses the stage and chooses the method: careful removal of the part of the nail that has grown into the skin and gradual correction of its growth direction with a titanium wire. The wire lifts the nail edges and relieves pressure on the skin — in many cases the whole nail does not need removing.',
      ),
      L(
        'Agar tirnoq ilgari olib tashlangan bo‘lsa-yu, muammo qaytgan bo‘lsa, faqat olib tashlash yetarli emas — o‘sish yo‘nalishini to‘g‘rilash kerak. Klinikamizdagi II darajali onixokriptoz bo‘yicha shunday klinik holat va 6 oylik natija saytdagi maqolada bosqichma-bosqich ko‘rsatilgan.',
        'Если ноготь уже удаляли, а проблема вернулась, одного удаления мало — нужно исправить направление роста. Такой клинический случай онихокриптоза II степени из практики клиники с результатом через 6 месяцев пошагово разобран в статье на сайте.',
        'If the nail was removed before and the problem came back, removal alone is not enough — the growth direction has to be corrected. A stage II case from the clinic’s practice, with the result after 6 months, is shown step by step in an article on the site.',
      ),
    ],
    steps: [
      L('Podolog ko‘rigi: tirnoq cheti, yallig‘lanish va qaytalanish xavfini baholash', 'Осмотр подолога: край ногтя, воспаление и риск рецидива', 'Podiatrist exam: nail edge, inflammation and risk of recurrence'),
      L('Teriga botgan qismni mahalliy og‘riqsizlantirish bilan olib tashlash va tozalash', 'Удаление вросшей части под местной анестезией и обработка', 'Removal of the ingrown part under local anaesthesia and cleaning'),
      L('Tirnoqqa apparat bilan ishlov berish va titan ip o‘rnatish', 'Аппаратная обработка ногтя и установка титановой нити', 'Device treatment of the nail and fitting the titanium wire'),
      L('Nazorat ko‘riklari va uy parvarishi: tirnoqni juda qisqa kesmaslik, burchaklarini chuqur olmaslik', 'Контрольные осмотры и домашний уход: не стричь ноготь слишком коротко и не срезать уголки глубоко', 'Follow-up visits and home care: do not cut the nail too short or the corners too deep'),
    ],
    faqs: [
      Q(
        L('Tirnoqni butunlay olib tashlash kerakmi?', 'Нужно ли удалять ноготь полностью?', 'Does the whole nail have to be removed?'),
        L(
          'Ko‘p hollarda yo‘q: teriga botgan qism olib tashlanadi, tirnoq esa titan ip bilan to‘g‘ri yo‘nalishda o‘stiriladi. Usulni podolog ko‘rikdan keyin tanlaydi.',
          'Во многих случаях нет: удаляется вросшая часть, а ноготь с помощью титановой нити выращивается в правильном направлении. Метод выбирает подолог после осмотра.',
          'In many cases no: the ingrown part is removed and the nail is guided to grow in the right direction with a titanium wire. The podiatrist chooses the method after the exam.',
        ),
      ),
      Q(
        L('Nega muammo operatsiyadan keyin qaytadi?', 'Почему проблема возвращается после операции?', 'Why does it come back after surgery?'),
        L(
          'Tirnoq olib tashlanib, uning o‘sish yo‘nalishi to‘g‘rilanmasa, yangi tirnoq yana teriga botishi mumkin. Shuning uchun titan ip bilan korreksiya qilinadi.',
          'Если ноготь удалить, но не исправить направление роста, новый ноготь снова может врасти. Поэтому проводится коррекция титановой нитью.',
          'If the nail is removed but its growth direction is not corrected, the new nail can grow in again. That is why it is corrected with a titanium wire.',
        ),
      ),
      Q(
        L('Bolalarni qabul qilasizmi?', 'Принимаете ли детей?', 'Do you see children?'),
        L(
          'Ha, kattalar va bolalardagi tirnoq muammolari bo‘yicha qabul qilinadi.',
          'Да, принимаем взрослых и детей с проблемами ногтей.',
          'Yes, adults and children with nail problems are seen.',
        ),
      ),
    ],
    priceNames: [
      'Podologning birinchi konsultatsiyasi',
      "O'sib ketgan tirnoqni olib tashlash",
      "Titan ip (o'sib ketgan tirnoq uchun)",
      'Tirnoqlarni apparat bilan tozalash',
    ],
  },
};

/** Topic key for a landing slug (the IPL pages carry the city in their slug). */
export function landingTopicKey(slug: string): string {
  return slug === 'ipl-qoqon' || slug === 'ipl-fargona' ? 'ipl' : slug;
}

export function getLocalLandingTopic(slug: string): LocalLandingTopic | undefined {
  return LOCAL_LANDING_TOPICS[landingTopicKey(slug)];
}
