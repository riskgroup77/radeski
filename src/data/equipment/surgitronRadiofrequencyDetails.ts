import type { ClinicEquipmentDetails, LocalizedEquipmentText } from '../clinicEquipmentCatalog';

function L(uz: string, ru: string, en: string): LocalizedEquipmentText {
  return { uz, ru, en };
}

/** Long sections of the Surgitron radiofrequency surgery page (loaded with the page, not the app shell). */
export const SURGITRON_RADIOFREQUENCY_DETAILS: ClinicEquipmentDetails = {
  about: [
    L(
      "Surgitron — AQShning Ellman kompaniyasi ishlab chiqargan radioto'lqin jarrohligi apparati. U to'qimani kesish va koagulyatsiya qilish uchun yuqori chastotali radioto'lqin energiyasidan foydalanadi. Skalpeldan farqli o'laroq, to'qimaga mexanik bosim berilmaydi, klassik elektrokoagulyatsiyadan farqli ravishda esa elektrodning o'zi qizimaydi — issiqlik bevosita to'qima hujayralarida hosil bo'ladi.",
      'Surgitron — аппарат радиоволновой хирургии американской компании Ellman. Он использует энергию высокочастотных радиоволн для рассечения и коагуляции тканей. В отличие от скальпеля, на ткань не оказывается механическое давление, а в отличие от классической электрокоагуляции, сам электрод не нагревается — тепло образуется непосредственно в клетках ткани.',
      "Surgitron is a radiofrequency surgery device made by the American company Ellman. It uses high-frequency radio wave energy to cut and coagulate tissue. Unlike a scalpel, it puts no mechanical pressure on the tissue, and unlike classic electrocautery, the electrode itself does not heat up: the heat is generated directly in the tissue cells.",
    ),
    L(
      "Dermatologiyada apparat terining xavfsiz hosilalarini olib tashlash uchun qo'llaniladi: papillomalar, yumshoq fibromalar, kontagioz mollyusk, keratomalar va ko'rsatma bo'yicha ayrim nevuslar. Ingichka elektrodlar ko'z qovoqlari atrofi, bo'yin, qo'ltiq osti va chov sohasi kabi nozik zonalarda ham aniq ishlash imkonini beradi.",
      'В дерматологии аппарат применяется для удаления доброкачественных образований кожи: папиллом, мягких фибром, контагиозного моллюска, кератом и, по показаниям, некоторых невусов. Тонкие электроды позволяют точно работать и в деликатных зонах — около век, на шее, в подмышечных впадинах и в паховой области.',
      "In dermatology the device is used to remove benign skin growths: papillomas, soft fibromas (skin tags), molluscum contagiosum, keratomas and, when indicated, certain moles. Fine electrodes allow precise work even in delicate areas such as around the eyelids, the neck, the underarms and the groin.",
    ),
    L(
      "Radeski klinikasida asosiy qoida — hech bir hosila tekshiruvsiz olib tashlanmaydi. Dermatolog avval uni dermatoskop bilan ko'radi, shubha bo'lsa gistologik tekshiruv tayinlaydi. Radioto'lqin bilan kesib olingan to'qimani zarur bo'lsa gistologiyaga yuborish mumkin. Agar xavfli o'sma gumon qilinsa, davolash taktikasi boshqacha tanlanadi va bemor tegishli mutaxassisga yo'naltirilishi mumkin.",
      'В клинике Radeski действует главное правило: ни одно образование не удаляют без обследования. Дерматолог сначала осматривает его с помощью дерматоскопа, а при сомнениях назначает гистологическое исследование. Ткань, иссечённую радиоволной, при необходимости можно отправить на гистологию. Если есть подозрение на злокачественную опухоль, тактику лечения выбирают иначе, и пациента могут направить к профильному специалисту.',
      "At Radeski the key rule is that no growth is removed without being examined first. The dermatologist checks it with a dermatoscope and orders a histology test if there is any doubt. Tissue removed with the radio wave can be sent for histology when needed. If a malignant tumour is suspected, a different treatment approach is chosen and you may be referred to the appropriate specialist.",
    ),
  ],
  howItWorks: {
    paragraphs: [
      L(
        "Yuqori chastotali tok ingichka elektrod orqali to'qimaga uzatiladi. Hujayralarning qarshiligi bu energiyani issiqlikka aylantiradi: hujayra ichidagi suv bir zumda bug'lanadi va elektrod chizig'i bo'ylab hujayralar bir-biridan ajraladi. Shu tarzda kesish deyarli bosimsiz amalga oshiriladi, atrofdagi sog'lom to'qimaning qizishi esa cheklangan bo'ladi.",
        'Высокочастотный ток подаётся в ткань через тонкий электрод. Сопротивление клеток преобразует эту энергию в тепло: внутриклеточная вода мгновенно испаряется, и клетки вдоль линии движения электрода расходятся. Так разрез выполняется практически без давления, а нагрев окружающих здоровых тканей остаётся ограниченным.',
        "High-frequency current is delivered into the tissue through a fine electrode. The resistance of the cells turns this energy into heat: the water inside the cells evaporates instantly and the cells along the electrode's path separate. The cut is made with almost no pressure, and heating of the surrounding healthy tissue stays limited.",
      ),
      L(
        "Apparatda bir nechta ish rejimi bor: kesish, koagulyatsiya bilan birga kesish va koagulyatsiya. Shifokor hosilaning turi, o'lchami va joylashuviga qarab rejimni va elektrod shaklini tanlaydi. Koagulyatsiya mayda tomirlarni yopadi, shuning uchun muolaja odatda kam qon ketishi bilan o'tadi, yara esa yupqa qobiq ostida bitadi.",
        'В аппарате есть несколько режимов: разрез, разрез с коагуляцией и коагуляция. Врач выбирает режим и форму электрода в зависимости от типа, размера и расположения образования. Коагуляция запечатывает мелкие сосуды, поэтому процедура обычно проходит с минимальной кровоточивостью, а рана заживает под тонкой корочкой.',
        "The device has several modes: cutting, cutting with coagulation, and coagulation. The doctor chooses the mode and electrode shape based on the type, size and location of the growth. Coagulation seals small blood vessels, so the procedure usually involves minimal bleeding, and the wound heals under a thin crust.",
      ),
    ],
    effects: [
      L("Hosilaning ingichka elektrod bilan aniq olib tashlanishi", 'Точное удаление образования тонким электродом', 'Precise removal of the growth with a fine electrode'),
      L("Bir vaqtdagi koagulyatsiya hisobiga minimal qon ketishi", 'Минимальная кровоточивость за счёт одновременной коагуляции', 'Minimal bleeding thanks to simultaneous coagulation'),
      L("Atrofdagi to'qimalarning cheklangan qizishi", 'Ограниченный нагрев окружающих тканей', 'Limited heating of surrounding tissue'),
      L("Kerak bo'lsa to'qimani gistologiyaga yuborish imkoniyati", 'Возможность при необходимости отправить ткань на гистологию', 'The option of sending tissue for histology when needed'),
      L("Kichik qobiq ostida ozoda bitish", 'Аккуратное заживление под небольшой корочкой', 'Neat healing under a small crust'),
    ],
  },
  indicationsIntro: L(
    "Radioto'lqin bilan olib tashlash dermatolog hosilani tekshirib, uning xavfsizligini tasdiqlagandan keyin quyidagi holatlarda ko'rib chiqilishi mumkin.",
    'Радиоволновое удаление может рассматриваться в следующих случаях после того, как дерматолог обследовал образование и подтвердил его доброкачественный характер.',
    'Radiofrequency removal may be considered in the following cases once a dermatologist has examined the growth and confirmed that it is benign.',
  ),
  indications: [
    {
      title: L('Papillomalar va yumshoq fibromalar', 'Папилломы и мягкие фибромы', 'Papillomas and skin tags'),
      text: L(
        "Bo'yin, qo'ltiq osti, ko'krak ostidagi va boshqa zonalardagi osilib turgan mayda hosilalar ko'pincha kiyim bilan ishqalanadi va shikastlanadi. Radioto'lqin bilan ular tez va minimal iz bilan olib tashlanadi. Papillomalar virus bilan bog'liq bo'lishi mumkinligi sababli vaqt o'tishi bilan yangi elementlar paydo bo'lishi mumkin.",
        'Мелкие свисающие образования на шее, в подмышечных впадинах, под грудью и в других зонах часто натираются одеждой и травмируются. С помощью радиоволны их удаляют быстро и с минимальным следом. Поскольку папилломы могут быть связаны с вирусом, со временем возможно появление новых элементов.',
        "Small hanging growths on the neck, underarms, under the breasts and elsewhere are often rubbed and injured by clothing. The radio wave removes them quickly and with minimal marks. Because papillomas can be linked to a virus, new ones may appear over time.",
      ),
    },
    {
      title: L('Kontagioz mollyusk', 'Контагиозный моллюск', 'Molluscum contagiosum'),
      text: L(
        "Kontagioz mollyusk — markazida botiqchasi bor mayda, marvaridsimon tugunchalar ko'rinishidagi virusli teri infeksiyasi. U yuqumli va teri bo'ylab tarqalishi mumkin. Elementlarni olib tashlash tarqalishni cheklashga yordam beradi; davolash usulini, ayniqsa bolalarda, shifokor individual tanlaydi.",
        'Контагиозный моллюск — вирусная инфекция кожи в виде мелких перламутровых узелков с вдавлением в центре. Он заразен и может распространяться по коже. Удаление элементов помогает ограничить распространение; способ лечения, особенно у детей, врач подбирает индивидуально.',
        "Molluscum contagiosum is a viral skin infection that appears as small pearly bumps with a dimple in the centre. It is contagious and can spread across the skin. Removing the bumps helps limit the spread; the doctor chooses the treatment individually, especially for children.",
      ),
    },
    {
      title: L('Seboreyali keratomalar', 'Себорейные кератомы', 'Seborrhoeic keratoses'),
      text: L(
        "Keratomalar yosh o'tishi bilan paydo bo'ladigan, ko'pincha jigarrang, yuzasi g'adir-budur xavfsiz hosilalardir. Ular kosmetik noqulaylik tug'dirsa yoki kiyim bilan shikastlansa, olib tashlanishi mumkin. Tashqi ko'rinishi bo'yicha ular ba'zan boshqa hosilalarga o'xshab ketadi, shuning uchun dermatoskopik tekshiruv majburiy.",
        'Кератомы — доброкачественные образования, которые появляются с возрастом, часто коричневого цвета, с шероховатой поверхностью. Их можно удалить, если они доставляют косметический дискомфорт или травмируются одеждой. Внешне они иногда похожи на другие образования, поэтому дерматоскопическое обследование обязательно.',
        "Keratoses are benign growths that appear with age, often brown with a rough surface. They can be removed if they bother you cosmetically or get caught on clothing. They can sometimes look like other lesions, so a dermatoscopic examination is essential.",
      ),
    },
    {
      title: L("Ko'rsatma bo'yicha xollar (nevuslar)", 'Родинки (невусы) по показаниям', 'Moles (naevi) when indicated'),
      text: L(
        "Doimiy shikastlanadigan yoki kosmetik noqulaylik tug'diradigan xavfsiz xollar faqat dermatolog dermatoskopiya o'tkazib, olib tashlashga ruxsat berganidan keyin olib tashlanadi. Zarur bo'lsa olingan to'qima gistologik tekshiruvga yuboriladi. Xavfli o'zgarish belgilari bo'lgan xollar bu usul bilan olib tashlanmaydi — ular uchun boshqa taktika tanlanadi.",
        'Доброкачественные родинки, которые постоянно травмируются или доставляют косметический дискомфорт, удаляют только после дерматоскопии и разрешения дерматолога. При необходимости удалённую ткань отправляют на гистологическое исследование. Родинки с признаками злокачественного перерождения этим методом не удаляют — для них выбирается другая тактика.',
        "Benign moles that are repeatedly injured or bother you cosmetically are removed only after dermoscopy and with the dermatologist's approval. When needed, the removed tissue is sent for histology. Moles with signs of malignant change are not removed this way; a different approach is chosen for them.",
      ),
    },
    {
      title: L("Nozik zonalardagi hosilalar", 'Образования в деликатных зонах', 'Growths in delicate areas'),
      text: L(
        "Ko'z qovoqlari atrofi, bo'yin, qo'ltiq osti va chov sohasidagi hosilalarni olib tashlash alohida aniqlikni talab qiladi. Ingichka elektrodlar va issiqlik tarqalishining cheklanganligi bunday zonalarda ehtiyotkorlik bilan ishlash imkonini beradi. Har bir holatda usul mosligini shifokor ko'rikda baholaydi.",
        'Удаление образований около век, на шее, в подмышечных впадинах и в паховой области требует особой точности. Тонкие электроды и ограниченное распространение тепла позволяют бережно работать в таких зонах. В каждом конкретном случае врач оценивает, подходит ли метод, на осмотре.',
        "Removing growths around the eyelids, on the neck, in the underarms and in the groin calls for particular precision. Fine electrodes and limited heat spread make careful work in these areas possible. In each case the doctor assesses at the examination whether the method is suitable.",
      ),
    },
  ],
  suitability: {
    intro: L(
      "Radioto'lqin jarrohligi xavfsizligi tasdiqlangan hosilalarni tez va minimal iz bilan olib tashlamoqchi bo'lgan bemorlar uchun mos bo'lishi mumkin. Muolajadan oldin shifokor quyidagilarni baholaydi:",
      'Радиоволновая хирургия может подойти пациентам, которые хотят быстро и с минимальным следом удалить образования, доброкачественность которых подтверждена. Перед процедурой врач оценивает:',
      "Radiofrequency surgery may suit patients who want growths that have been confirmed as benign removed quickly and with minimal marks. Before the procedure the doctor assesses:",
    ),
    checks: [
      L("Dermatoskopiya natijasi bo'yicha hosilaning xususiyati", 'Характер образования по результатам дерматоскопии', 'The nature of the growth based on dermoscopy'),
      L("Hosilaning o'lchami, chuqurligi va joylashuvi", 'Размер, глубину и расположение образования', 'The size, depth and location of the growth'),
      L("Yurak stimulyatori yoki boshqa implantatsiya qilingan elektron qurilmalar bor-yo'qligi", 'Наличие кардиостимулятора или других имплантированных электронных устройств', 'Whether you have a pacemaker or other implanted electronic devices'),
      L("Qon ivishining buzilishi va qonni suyultiruvchi dorilar qabul qilish", 'Нарушения свёртываемости крови и приём препаратов, разжижающих кровь', 'Bleeding disorders and blood-thinning medications'),
      L("Mahalliy og'riqsizlantiruvchi vositalarga allergiya va yara bitish xususiyatlari", 'Аллергия на местные анестетики и особенности заживления', 'Allergy to local anaesthetics and how your skin heals'),
    ],
  },
  contraindications: {
    intro: L(
      "Muolaja o'tkazish imkoniyati individual hal qilinadi. Olib tashlashni kechiktirish yoki boshqa usulni tanlashning asosiy sabablari:",
      'Возможность проведения процедуры решается индивидуально. Основные причины отложить удаление или выбрать другой метод:',
      "Whether the procedure is possible is decided individually. The main reasons to postpone removal or choose another method are:",
    ),
    items: [
      L("Xavfli o'sma gumoni — tashxis aniqlanmaguncha hosila bu usul bilan olib tashlanmaydi", 'Подозрение на злокачественную опухоль — до уточнения диагноза образование этим методом не удаляют', 'Suspicion of a malignant tumour: the growth is not removed this way until the diagnosis is clear'),
      L("Zonadagi faol infeksiya yoki yallig'lanish, jumladan gerpesning qo'zishi", 'Активная инфекция или воспаление в зоне, включая обострение герпеса', 'An active infection or inflammation in the area, including a herpes flare-up'),
      L("Yurak stimulyatori va boshqa implantatsiya qilingan elektron qurilmalar — alohida baholash talab etiladi", 'Кардиостимулятор и другие имплантированные электронные устройства — требуется отдельная оценка', 'A pacemaker or other implanted electronic device, which requires a separate assessment'),
      L("Qon ivishining buzilishi yoki antikoagulyantlar qabul qilish — xavf oldindan baholanadi", 'Нарушения свёртываемости крови или приём антикоагулянтов — риск оценивается заранее', 'Bleeding disorders or anticoagulant use, where the risk is assessed in advance'),
      L("Isitma va o'tkir kasalliklar, kompensatsiyalanmagan surunkali kasalliklar", 'Повышенная температура и острые заболевания, декомпенсированные хронические болезни', 'Fever, acute illness or uncontrolled chronic disease'),
      L("Yara bitishini buzadigan holatlar, masalan nazoratsiz qandli diabet", 'Состояния, нарушающие заживление, например некомпенсированный сахарный диабет', 'Conditions that impair healing, such as uncontrolled diabetes'),
      L("Homiladorlik — rejali muolajalar odatda kechiktiriladi, qaror individual qabul qilinadi", 'Беременность — плановые процедуры обычно откладывают, решение принимается индивидуально', 'Pregnancy, when elective procedures are usually postponed and the decision is made individually'),
      L("Mahalliy og'riqsizlantiruvchi vositalarga allergiya — bunday holda boshqa variant tanlanadi", 'Аллергия на местные анестетики — в этом случае подбирается другой вариант', 'Allergy to local anaesthetics, in which case another option is chosen'),
    ],
    note: L(
      "Keloid chandiqlarga moyillik bo'lsa, iz qolish xavfi alohida muhokama qilinadi. Papilloma va kontagioz mollyusk virus bilan bog'liq: hosilani olib tashlash virusning o'zini yo'qotmaydi, shuning uchun vaqt o'tishi bilan yangi elementlar paydo bo'lishi mumkin.",
      'При склонности к келоидным рубцам риск образования следа обсуждается отдельно. Папилломы и контагиозный моллюск связаны с вирусом: удаление образования не устраняет сам вирус, поэтому со временем могут появиться новые элементы.',
      "If you tend to form keloid scars, the risk of a mark is discussed separately. Papillomas and molluscum contagiosum are linked to viruses: removing a growth does not remove the virus itself, so new ones can appear over time.",
    ),
  },
  steps: [
    {
      title: L("Konsultatsiya va dermatoskopiya", 'Консультация и дерматоскопия', 'Consultation and dermoscopy'),
      text: L(
        "Dermatolog hosilani ko'zdan kechiradi va dermatoskop bilan tekshiradi, kasalliklar tarixi, qabul qilinayotgan dorilar va allergiyalarni aniqlaydi. Shubha bo'lsa, olib tashlashdan oldin qo'shimcha tekshiruv yoki gistologiya tayinlanadi. Shu bosqichda usul tanlanadi va muolaja tartibi tushuntiriladi.",
        'Дерматолог осматривает образование и исследует его с помощью дерматоскопа, уточняет историю заболеваний, принимаемые препараты и аллергии. При сомнениях до удаления назначают дополнительное обследование или гистологию. На этом этапе выбирают метод и объясняют ход процедуры.',
        "The dermatologist looks at the growth and checks it with a dermatoscope, and asks about your medical history, medications and allergies. If there is any doubt, further tests or histology are arranged before removal. The method is chosen and the procedure explained at this stage.",
      ),
    },
    {
      title: L("Og'riqsizlantirish", 'Обезболивание', 'Anaesthesia'),
      text: L(
        "Zona antiseptik bilan ishlov beriladi. Hosilaning o'lchami va joylashuviga qarab shifokor mahalliy og'riqsizlantirishni — in'ektsiya yoki kremni — qo'llaydi. Juda mayda elementlarda ba'zan og'riqsizlantirish talab qilinmaydi.",
        'Зону обрабатывают антисептиком. В зависимости от размера и расположения образования врач проводит местное обезболивание — инъекционное или с помощью крема. Для очень мелких элементов обезболивание иногда не требуется.',
        "The area is cleaned with an antiseptic. Depending on the size and location of the growth, the doctor uses local anaesthesia, either an injection or a numbing cream. Very small growths sometimes do not need anaesthesia at all.",
      ),
    },
    {
      title: L("Hosilani olib tashlash", 'Удаление образования', 'Removing the growth'),
      text: L(
        "Shifokor mos rejim va elektrodni tanlab, hosilani kesib oladi yoki qavatma-qavat olib tashlaydi. Bitta kichik hosilani olib tashlash odatda bir necha daqiqa davom etadi. Zarur bo'lsa olingan to'qima gistologik tekshiruvga yuboriladi.",
        'Врач выбирает подходящий режим и электрод и иссекает образование или удаляет его послойно. Удаление одного небольшого образования обычно занимает несколько минут. При необходимости удалённую ткань отправляют на гистологическое исследование.',
        "The doctor selects the right mode and electrode and either excises the growth or removes it layer by layer. Removing one small growth usually takes a few minutes. When needed, the removed tissue is sent for histology.",
      ),
    },
    {
      title: L("Yaraga ishlov berish", 'Обработка раны', 'Wound care'),
      text: L(
        "Muolajadan keyin yara antiseptik bilan ishlov beriladi. Kerak bo'lsa koagulyatsiya bilan mayda qon ketishi to'xtatiladi. Shifokor uyda yaraga qanday qarash kerakligini batafsil tushuntiradi.",
        'После процедуры рану обрабатывают антисептиком. При необходимости небольшую кровоточивость останавливают коагуляцией. Врач подробно объясняет, как ухаживать за раной дома.',
        "After the procedure the wound is treated with an antiseptic. Any minor bleeding is stopped with coagulation if needed. The doctor explains in detail how to look after the wound at home.",
      ),
    },
    {
      title: L("Parvarish va kuzatuv", 'Уход и наблюдение', 'Aftercare and follow-up'),
      text: L(
        "Hosila o'rnida mayda qobiq paydo bo'ladi va u odatda bir-ikki hafta ichida o'z-o'zidan tushadi. Qobiqni ko'chirish, zonani ishqalash va bitguncha quyoshda toblanish mumkin emas. Gistologiya o'tkazilgan bo'lsa, natija shifokor bilan muhokama qilinadi.",
        'На месте образования появляется небольшая корочка, которая обычно отпадает самостоятельно в течение одной-двух недель. Нельзя снимать корочку, тереть зону и загорать до заживления. Если проводилась гистология, её результат обсуждают с врачом.',
        "A small crust forms where the growth was and usually falls off on its own within one or two weeks. Do not pick the crust, rub the area or sunbathe until it has healed. If histology was done, you discuss the result with your doctor.",
      ),
    },
  ],
  results: {
    intro: L(
      "Qobiq tushgandan keyin hosila o'rnida odatda pushti rangli dog' qoladi va u bir necha hafta davomida asta-sekin teri rangiga yaqinlashadi. Iz qanchalik sezilarli bo'lishi hosilaning chuqurligi, zona va terining individual xususiyatlariga bog'liq. Natijada quyidagilar kutilishi mumkin:",
      'После отпадения корочки на месте образования обычно остаётся розовое пятно, которое в течение нескольких недель постепенно приближается к цвету окружающей кожи. Насколько заметным будет след, зависит от глубины образования, зоны и индивидуальных особенностей кожи. В результате можно ожидать:',
      "Once the crust falls off, a pink spot usually remains where the growth was, and over several weeks it gradually blends into the surrounding skin. How noticeable the mark will be depends on the depth of the growth, the area and your skin. You can expect:",
    ),
    items: [
      L("Hosilaning olib tashlanishi va u bilan bog'liq noqulaylikning yo'qolishi", 'Удаление образования и связанного с ним дискомфорта', 'The growth gone, along with the discomfort it caused'),
      L("O'rnida kichik, ozoda iz", 'Небольшой аккуратный след на его месте', 'A small, neat mark in its place'),
      L("Pushti dog'ning asta-sekin oqarishi", 'Постепенное посветление розового пятна', 'The pink spot gradually fading'),
      L("Kiyim bilan shikastlanish xavfining yo'qolishi", 'Отсутствие риска травмирования одеждой', 'No more risk of the growth being caught on clothing'),
      L("Gistologiya o'tkazilgan bo'lsa — hosila tabiati haqida aniq ma'lumot", 'Если проводилась гистология, — точные сведения о природе образования', 'If histology was done, a clear answer about what the growth was'),
    ],
  },
  conclusion: [
    L(
      "Surgitron radioto'lqin apparati — xavfsiz teri hosilalarini aniq, kam qon ketishi bilan va atrofdagi to'qimalarga cheklangan ta'sir bilan olib tashlash usuli. U papillomalar, mollyusk, keratomalar va ko'rsatma bo'yicha ayrim xollarni olib tashlashda, shu jumladan nozik zonalarda qo'llaniladi.",
      'Радиоволновой аппарат Surgitron — способ удаления доброкачественных образований кожи с высокой точностью, минимальной кровоточивостью и ограниченным воздействием на окружающие ткани. Он применяется для удаления папиллом, моллюска, кератом и, по показаниям, некоторых родинок, в том числе в деликатных зонах.',
      "The Surgitron radiofrequency device is a way of removing benign skin growths precisely, with minimal bleeding and limited effect on the surrounding tissue. It is used to remove papillomas, molluscum, keratoses and, when indicated, certain moles, including in delicate areas.",
    ),
    L(
      "Radeski klinikasida har qanday hosilani olib tashlash dermatolog ko'rigi va dermatoskopiyadan boshlanadi. Shifokor hosila xavfsiz ekanini tasdiqlaydi, kerak bo'lsa gistologik tekshiruv tayinlaydi va eng mos usulni tanlaydi.",
      'В клинике Radeski удаление любого образования начинается с осмотра дерматолога и дерматоскопии. Врач подтверждает доброкачественный характер образования, при необходимости назначает гистологию и выбирает наиболее подходящий метод.',
      "At Radeski, removing any growth starts with a dermatologist's examination and dermoscopy. The doctor confirms that the growth is benign, orders histology if needed and chooses the most suitable method.",
    ),
  ],
  faq: [
    {
      question: L("Radioto'lqin bilan olib tashlash og'riqlimi?", 'Больно ли удалять образования радиоволной?', 'Is radiofrequency removal painful?'),
      answer: L(
        "Muolaja mahalliy og'riqsizlantirish ostida o'tkaziladi, shuning uchun jarayon vaqtida odatda faqat yengil bosim yoki issiqlik seziladi. Eng noqulay lahza ko'pincha og'riqsizlantiruvchi in'ektsiyaning o'zi bo'ladi. Juda mayda elementlar ba'zan og'riqsizlantirishsiz olib tashlanadi.",
        'Процедуру проводят под местной анестезией, поэтому во время удаления обычно ощущается лишь лёгкое давление или тепло. Самым неприятным моментом чаще всего бывает сам укол анестетика. Очень мелкие элементы иногда удаляют без обезболивания.',
        "The procedure is done under local anaesthesia, so during removal you usually feel only slight pressure or warmth. The most uncomfortable moment is often the anaesthetic injection itself. Very small growths are sometimes removed without anaesthesia.",
      ),
    },
    {
      question: L("Olib tashlangandan keyin chandiq qoladimi?", 'Останется ли рубец после удаления?', 'Will there be a scar?'),
      answer: L(
        "Radioto'lqin atrofdagi to'qimani kam qizdirgani uchun yara odatda ozoda bitadi. Biroq iz qolish ehtimoli hosilaning chuqurligi, zona, terining xususiyatlari va parvarish tavsiyalariga amal qilinishiga bog'liq. Qobiqni ko'chirmaslik va zonani quyoshdan himoya qilish muhim.",
        'Поскольку радиоволна мало нагревает окружающие ткани, рана обычно заживает аккуратно. Однако вероятность следа зависит от глубины образования, зоны, особенностей кожи и соблюдения рекомендаций по уходу. Важно не снимать корочку и защищать зону от солнца.',
        "Because the radio wave heats the surrounding tissue only slightly, the wound usually heals neatly. Whether a mark remains depends on the depth of the growth, the area, your skin and how well you follow the aftercare advice. It is important not to pick the crust and to protect the area from the sun.",
      ),
    },
    {
      question: L("Xolni olib tashlash xavfli emasmi?", 'Не опасно ли удалять родинку?', 'Is it dangerous to remove a mole?'),
      answer: L(
        "Xavfli tomoni — tekshiruvsiz olib tashlash. Shuning uchun Radeski klinikasida har bir xol avval dermatoskop bilan tekshiriladi, shubha bo'lsa gistologiya tayinlanadi. Xavfli o'zgarish belgilari bo'lgan xollar radioto'lqin bilan olib tashlanmaydi — ular uchun boshqa taktika tanlanadi.",
        'Опасно удалять родинку без обследования. Поэтому в клинике Radeski каждую родинку сначала исследуют с помощью дерматоскопа, а при сомнениях назначают гистологию. Родинки с признаками злокачественного перерождения радиоволной не удаляют — для них выбирают другую тактику.',
        "What is dangerous is removing a mole without examining it. That is why at Radeski every mole is first checked with a dermatoscope, and histology is ordered if there is any doubt. Moles with signs of malignant change are not removed with the radio wave; a different approach is chosen for them.",
      ),
    },
    {
      question: L("Papilloma yoki mollyusk qayta paydo bo'lishi mumkinmi?", 'Могут ли папилломы или моллюск появиться снова?', 'Can papillomas or molluscum come back?'),
      answer: L(
        "Olib tashlangan hosila o'rnida odatda qayta o'smaydi, lekin papilloma va mollyusk virus bilan bog'liq bo'lgani uchun boshqa joylarda yangi elementlar paydo bo'lishi mumkin. Bunday holda ular ham shifokor ko'rigidan keyin olib tashlanadi.",
        'На месте удалённого образования оно обычно не вырастает снова, но поскольку папилломы и моллюск связаны с вирусом, в других местах могут появиться новые элементы. В таком случае их также удаляют после осмотра врача.',
        "A growth does not usually come back in the exact spot where it was removed, but because papillomas and molluscum are caused by viruses, new ones may appear elsewhere. If that happens, they can also be removed after a doctor's examination.",
      ),
    },
    {
      question: L("Muolajadan keyin zonani ho'llash va quyoshga chiqish mumkinmi?", 'Можно ли мочить зону и бывать на солнце после удаления?', 'Can I get the area wet or go in the sun afterwards?'),
      answer: L(
        "Birinchi kunlarda zonani ho'llash bo'yicha shifokor aniq tavsiya beradi; odatda qobiqni ishqalash va bug'lash tavsiya etilmaydi. Qobiq tushib, teri to'liq bitguncha quyoshda toblanmaslik, keyin ham bir necha hafta davomida pushti dog'ni SPF bilan himoya qilish kerak — bu pigmentli iz qolish xavfini kamaytiradi.",
        'Насчёт того, можно ли мочить зону в первые дни, врач даст точные рекомендации; обычно не советуют тереть и распаривать корочку. До отпадения корочки и полного заживления нельзя загорать, а ещё несколько недель розовое пятно стоит защищать средством с SPF — это снижает риск пигментированного следа.',
        "Your doctor will tell you exactly when you can get the area wet; rubbing or steaming the crust is usually not advised. Avoid sunbathing until the crust has fallen off and the skin has fully healed, and protect the pink spot with SPF for several weeks after that to lower the risk of a darker mark.",
      ),
    },
  ],
};
