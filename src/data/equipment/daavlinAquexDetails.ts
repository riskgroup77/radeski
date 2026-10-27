import type { ClinicEquipmentDetails, LocalizedEquipmentText } from '../clinicEquipmentCatalog';

function L(uz: string, ru: string, en: string): LocalizedEquipmentText {
  return { uz, ru, en };
}

/** Long sections of the Daavlin Aquex iontophoresis page (loaded with the page, not the app shell). */
export const DAAVLIN_AQUEX_DETAILS: ClinicEquipmentDetails = {
  about: [
    L(
      "Ionoforez — kuchsiz doimiy elektr toki yordamida zaryadlangan dori moddalarini teri orqali to'qimalarga yetkazish usuli. Daavlin Aquex — Daavlin (AQSh) kompaniyasining ionoforez apparati bo'lib, dermatologiyada mahalliy davolashni qo'llab-quvvatlash uchun ishlatiladi.",
      'Ионофорез — метод введения заряженных лекарственных веществ через кожу в ткани с помощью слабого постоянного электрического тока. Daavlin Aquex — аппарат ионофореза компании Daavlin (США), который используется в дерматологии для поддержки местного лечения.',
      'Iontophoresis uses a weak direct electric current to carry charged medicinal substances through the skin into the tissues. Daavlin Aquex is an iontophoresis device made by Daavlin (USA) and used in dermatology to support local treatment.',
    ),
    L(
      "Teri tashqi muhitdan himoya qiluvchi to'siq vazifasini bajaradi, shuning uchun surtma yoki krem tarkibidagi ko'plab moddalar unga chuqur kira olmaydi. Ionoforez ayrim moddalarning bu to'siqdan o'tishini kuchaytirishi mumkin. Shu sababli u teri kasalliklarini mahalliy davolashda, terini namlantirish va tiklashda, shuningdek shifokor tayinlagan preparatlarni yetkazishda qo'shimcha usul sifatida qo'llaniladi.",
      'Кожа служит барьером, защищающим организм от внешней среды, поэтому многие вещества из мазей и кремов не проникают в неё глубоко. Ионофорез может усиливать прохождение некоторых веществ через этот барьер. Поэтому его применяют как дополнительный метод при местном лечении заболеваний кожи, для её увлажнения и восстановления, а также для введения препаратов, назначенных врачом.',
      'The skin acts as a barrier that protects the body from the outside world, so many substances in ointments and creams do not penetrate deeply. Iontophoresis can help some substances pass through this barrier. That is why it is used as an additional method in the local treatment of skin conditions, for hydrating and restoring the skin, and for delivering medicines prescribed by the doctor.',
    ),
    L(
      "Radeski klinikasida Aquex ionoforezi dermatolog nazoratida, individual protokol asosida o'tkaziladi. Muolajadan oldin shifokor terini ko'zdan kechiradi, tashxisni aniqlaydi va qaysi preparat, qaysi zona va qancha seans kerakligini belgilaydi.",
      'В клинике Radeski ионофорез Aquex проводится под контролем дерматолога по индивидуальному протоколу. Перед процедурой врач осматривает кожу, уточняет диагноз и определяет, какой препарат, какая зона и сколько сеансов необходимо.',
      'At Radeski, Aquex iontophoresis is carried out under a dermatologist\'s supervision according to an individual protocol. Before treatment, the doctor examines your skin, clarifies the diagnosis and decides which preparation, which area and how many sessions are needed.',
    ),
  ],
  howItWorks: {
    paragraphs: [
      L(
        "Muolaja vaqtida teriga elektrodlar joylashtiriladi; ular odatda preparat eritmasi yoki suv bilan namlangan prokladkalar orqali teriga tegadi. Apparat kuchsiz doimiy tok hosil qiladi va zaryadlangan zarrachalar o'zi bilan bir xil zaryadli elektroddan itarilib, teriga yo'naladi. Tok kuchi asta-sekin oshiriladi va butun seans davomida nazorat qilinadi.",
        'Во время процедуры на кожу помещают электроды; как правило, они контактируют с кожей через прокладки, смоченные раствором препарата или водой. Аппарат создаёт слабый постоянный ток, и заряженные частицы, отталкиваясь от одноимённо заряженного электрода, направляются в кожу. Сила тока повышается постепенно и контролируется на протяжении всего сеанса.',
        'During the procedure, electrodes are placed on the skin, usually in contact with it through pads soaked in a solution of the preparation or in water. The device produces a weak direct current, and charged particles are pushed away from the electrode with the same charge and into the skin. The current is increased gradually and monitored throughout the session.',
      ),
      L(
        "Qaysi modda va qanday konsentratsiyada ishlatilishini faqat shifokor belgilaydi. Har qanday preparat ham ionoforez uchun mos emas: modda zaryadlangan bo'lishi va bu usulda qo'llanishga ruxsat etilgan bo'lishi kerak.",
        'Какое вещество и в какой концентрации использовать, определяет только врач. Не каждый препарат подходит для ионофореза: вещество должно нести заряд и быть допущено к применению этим методом.',
        'Only the doctor decides which substance to use and at what concentration. Not every preparation is suitable for iontophoresis: it must carry an electric charge and be approved for use with this method.',
      ),
    ],
    effects: [
      L("Ayrim preparatlarning teri to'sig'idan o'tishini kuchaytirish", 'Усиление прохождения некоторых препаратов через кожный барьер', 'Helping some preparations pass through the skin barrier'),
      L("Mahalliy dermatologik davolashni qo'llab-quvvatlash", 'Поддержка местной дерматологической терапии', 'Support for local dermatological treatment'),
      L("Terining namligi va qulaylik hissini yaxshilash", 'Улучшение увлажнённости кожи и ощущения комфорта', 'Better skin hydration and comfort'),
      L("Preparatni aniq zonaga yo'naltirish", 'Направленное введение препарата в определённую зону', 'Delivering a preparation to a specific area'),
    ],
  },
  indicationsIntro: L(
    "Aquex ionoforezi quyidagi holatlarda dermatolog tomonidan ko'rib chiqilishi mumkin. Usul odatda kompleks davolash rejasining bir qismi bo'ladi.",
    'Ионофорез Aquex может рассматриваться дерматологом в следующих ситуациях. Как правило, метод входит в комплексный план лечения.',
    'A dermatologist may consider Aquex iontophoresis in the following situations. The method is usually part of a comprehensive treatment plan.',
  ),
  indications: [
    {
      title: L('Teri quruqligi va suvsizlanishi', 'Сухость и обезвоженность кожи', 'Dry and dehydrated skin'),
      text: L(
        "Teri quruq, tortishib turgandek va po'st tashlaydigan bo'lsa, ionoforez namlantiruvchi va tiklovchi vositalar ta'sirini qo'llab-quvvatlashi mumkin. Avvalo quruqlik sababini aniqlash muhim: u parvarish xatolari, iqlim yoki teri kasalligi bilan bog'liq bo'lishi mumkin.",
        'Если кожа сухая, стянутая и шелушится, ионофорез может поддержать действие увлажняющих и восстанавливающих средств. Прежде всего важно установить причину сухости: она может быть связана с ошибками ухода, климатом или заболеванием кожи.',
        'If your skin is dry, tight and flaky, iontophoresis can support the effect of moisturising and restorative products. The first step is to find the cause of the dryness, which may be linked to skincare habits, climate or a skin condition.',
      ),
    },
    {
      title: L('Teri kasalliklarini mahalliy davolash', 'Местное лечение заболеваний кожи', 'Local treatment of skin conditions'),
      text: L(
        "Ayrim dermatozlarda ionoforez shifokor tayinlagan preparatni aynan zararlangan sohaga yetkazish uchun qo'llanilishi mumkin. U asosiy davolash o'rnini bosmaydi va unga qo'shimcha sifatida ishlatiladi.",
        'При некоторых дерматозах ионофорез может применяться для введения назначенного врачом препарата непосредственно в поражённую зону. Он не заменяет основное лечение и используется как его дополнение.',
        'In some skin conditions, iontophoresis can be used to deliver a prescribed preparation directly to the affected area. It does not replace the main treatment but is used alongside it.',
      ),
    },
    {
      title: L('Shifokor tayinlagan preparatlar bilan terapiya', 'Терапия назначенными препаратами', 'Therapy with prescribed preparations'),
      text: L(
        "Preparat tanlovi tashxis, zona va bemorning individual xususiyatlariga bog'liq. Shifokor allergik reaksiyalar tarixini hisobga oladi va faqat ionoforez uchun mos bo'lgan vositalarni tanlaydi.",
        'Выбор препарата зависит от диагноза, зоны и индивидуальных особенностей пациента. Врач учитывает историю аллергических реакций и выбирает только средства, подходящие для ионофореза.',
        'The choice of preparation depends on the diagnosis, the area and your individual characteristics. The doctor takes any history of allergic reactions into account and chooses only products that are suitable for iontophoresis.',
      ),
    },
    {
      title: L('Tiklanish va parvarish protokollari', 'Протоколы восстановления и ухода', 'Recovery and care protocols'),
      text: L(
        "Boshqa dermatologik yoki estetik muolajalardan keyin teri tiklanishini qo'llab-quvvatlash uchun ionoforez kompleks rejaga kiritilishi mumkin. Muolajalar ketma-ketligi va ular orasidagi interval shifokor tomonidan belgilanadi.",
        'Ионофорез может включаться в комплексный план для поддержки восстановления кожи после других дерматологических или эстетических процедур. Последовательность процедур и интервалы между ними определяет врач.',
        'Iontophoresis may be included in a comprehensive plan to support skin recovery after other dermatological or aesthetic procedures. The doctor decides the order of procedures and the intervals between them.',
      ),
    },
  ],
  suitability: {
    intro: L(
      "Aquex ionoforezi mahalliy davolash yoki terini tiklashni talab qiladigan, elektr tokiga nisbatan qarshi ko'rsatmalari bo'lmagan bemorlar uchun mos bo'lishi mumkin. Muolajadan oldin shifokor quyidagilarni baholaydi:",
      'Ионофорез Aquex может подойти пациентам, которым требуется местное лечение или восстановление кожи и у которых нет противопоказаний к воздействию электрического тока. Перед процедурой врач оценивает:',
      'Aquex iontophoresis may suit patients who need local treatment or skin recovery and have no contraindications to electric current. Before the procedure, the doctor assesses:',
    ),
    checks: [
      L("Tashxis va teri holati, davolanadigan zonada yaralar yoki yoriqlar bor-yo'qligi", 'Диагноз и состояние кожи, наличие ран или трещин в зоне воздействия', 'The diagnosis and skin condition, including any wounds or cracks in the area'),
      L("Yurak stimulyatori yoki boshqa implantatsiya qilingan elektron qurilmalar", 'Наличие кардиостимулятора или других имплантированных электронных устройств', 'Any pacemaker or other implanted electronic device'),
      L("Davolanadigan sohadagi metall implantlar", 'Металлические импланты в зоне воздействия', 'Metal implants in the treatment area'),
      L("Dori preparatlariga allergiya", 'Аллергия на лекарственные препараты', 'Allergies to medicines'),
      L("Surunkali kasalliklar va qabul qilinayotgan dorilar", 'Хронические заболевания и принимаемые лекарства', 'Chronic illnesses and current medications'),
    ],
  },
  contraindications: {
    intro: L(
      "Ionoforez o'tkazish imkoniyati individual belgilanadi. Muolajani kechiktirish yoki undan voz kechishning asosiy sabablari:",
      'Возможность проведения ионофореза определяется индивидуально. Основные причины отложить процедуру или отказаться от неё:',
      'Whether iontophoresis is possible is decided individually. The main reasons to postpone or avoid it are:',
    ),
    items: [
      L("Yurak stimulyatori, defibrillyator yoki boshqa implantatsiya qilingan elektron qurilmalar", 'Кардиостимулятор, дефибриллятор или другие имплантированные электронные устройства', 'A pacemaker, defibrillator or other implanted electronic device'),
      L("Tok o'tadigan sohadagi metall implantlar", 'Металлические импланты в зоне прохождения тока', 'Metal implants in the path of the current'),
      L("Homiladorlik", 'Беременность', 'Pregnancy'),
      L("Epilepsiya va ayrim yurak ritmi buzilishlari", 'Эпилепсия и некоторые нарушения сердечного ритма', 'Epilepsy and certain heart rhythm disorders'),
      L("Davolanadigan zonada ochiq yaralar, chuqur yoriqlar yoki teri infeksiyasi", 'Открытые раны, глубокие трещины или инфекция кожи в зоне воздействия', 'Open wounds, deep cracks or a skin infection in the treatment area'),
      L("Ishlatiladigan preparatga allergiya yoki o'ta sezuvchanlik", 'Аллергия или повышенная чувствительность к используемому препарату', 'Allergy or hypersensitivity to the preparation being used'),
      L("Isitma va o'tkir infeksion kasalliklar", 'Повышенная температура и острые инфекционные заболевания', 'Fever and acute infections'),
      L("Davolanadigan sohada tekshirilmagan shubhali hosilalar", 'Необследованные подозрительные образования в зоне воздействия', 'Unexamined suspicious lesions in the treatment area'),
    ],
    note: L(
      "Teri sezuvchanligi buzilgan, qandli diabet bilan og'rigan bemorlarda va bolalarda xavflar alohida baholanadi. Mayda kesilgan joylar seans oldidan himoya vositasi bilan yopilishi mumkin. Yakuniy qarorni shifokor qabul qiladi.",
      'У пациентов с нарушенной чувствительностью кожи, сахарным диабетом, а также у детей риски оцениваются отдельно. Мелкие порезы перед сеансом могут закрываться защитным средством. Окончательное решение принимает врач.',
      'Risks are assessed separately in people with reduced skin sensation, people with diabetes and children. Small cuts may be covered with a protective product before the session. The doctor makes the final decision.',
    ),
  },
  steps: [
    {
      title: L('Konsultatsiya', 'Консультация', 'Consultation'),
      text: L(
        "Dermatolog terini ko'zdan kechiradi, shikoyatlar, kasallik tarixi, allergiyalar va implantatsiya qilingan qurilmalar haqida so'raydi. Shundan so'ng preparat, zona va seanslar rejasi belgilanadi.",
        'Дерматолог осматривает кожу, уточняет жалобы, историю заболевания, аллергии и наличие имплантированных устройств. После этого определяются препарат, зона и план сеансов.',
        'The dermatologist examines your skin and asks about your complaints, medical history, allergies and any implanted devices. The preparation, area and session plan are then decided.',
      ),
    },
    {
      title: L('Teriga tayyorgarlik', 'Подготовка кожи', 'Skin preparation'),
      text: L(
        "Davolanadigan soha tozalanadi, uzuk, bilaguzuk va boshqa metall taqinchoqlar yechiladi. Mayda kesilgan yoki tirnalgan joylar bo'lsa, ular himoya vositasi bilan yopiladi.",
        'Зону воздействия очищают, снимают кольца, браслеты и другие металлические украшения. Мелкие порезы и царапины при наличии закрывают защитным средством.',
        'The treatment area is cleaned and rings, bracelets and other metal jewellery are removed. Any small cuts or scratches are covered with a protective product.',
      ),
    },
    {
      title: L('Ionoforez seansi', 'Сеанс ионофореза', 'The iontophoresis session'),
      text: L(
        "Elektrodlar namlangan prokladkalar orqali teriga joylashtiriladi, tok kuchi asta-sekin oshiriladi. Bemor yengil sanchish yoki chumoli yurgandek sezgini his qilishi mumkin. Noqulaylik kuchaysa, buni darhol xodimga aytish kerak — tok kuchi kamaytiriladi.",
        'Электроды размещают на коже через смоченные прокладки, силу тока повышают постепенно. Пациент может ощущать лёгкое покалывание или «мурашки». Если дискомфорт усиливается, нужно сразу сообщить персоналу — силу тока уменьшат.',
        'The electrodes are placed on the skin over moistened pads and the current is increased gradually. You may feel mild tingling or prickling. If the discomfort gets stronger, tell the staff straight away and the current will be reduced.',
      ),
    },
    {
      title: L('Muolajadan keyingi parvarish', 'Уход после процедуры', 'Aftercare'),
      text: L(
        "Seansdan keyin elektrod joylashgan sohada vaqtincha qizarish yoki yengil quruqlik bo'lishi mumkin, u odatda o'z-o'zidan o'tib ketadi. Shifokor teriga qanday qarash va keyingi seans qachon bo'lishini tushuntiradi.",
        'После сеанса в месте наложения электродов возможны временное покраснение или лёгкая сухость, которые обычно проходят самостоятельно. Врач объяснит, как ухаживать за кожей и когда будет следующий сеанс.',
        'After the session there may be temporary redness or mild dryness where the electrodes were placed; this usually settles on its own. The doctor will explain how to care for your skin and when the next session will be.',
      ),
    },
  ],
  results: {
    intro: L(
      "Ionoforez natijasi uning maqsadi, ishlatilgan preparat va teri holatiga bog'liq. Ta'sir asta-sekin shakllanadi va kafolatlanmaydi. Kurs davomida quyidagilar kuzatilishi mumkin:",
      'Результат ионофореза зависит от его задачи, используемого препарата и состояния кожи. Эффект формируется постепенно и не гарантируется. В ходе курса возможно:',
      'The outcome of iontophoresis depends on its purpose, the preparation used and the condition of the skin. The effect builds gradually and is not guaranteed. During a course you may see:',
    ),
    items: [
      L("Teri quruqligi va tortishish hissining kamayishi", 'Уменьшение сухости и чувства стянутости', 'Less dryness and tightness'),
      L("Mahalliy yallig'lanish va noqulaylikning yengillashishi", 'Ослабление местного воспаления и дискомфорта', 'Less local inflammation and discomfort'),
      L("Asosiy mahalliy davolashga javobning yaxshilanishi", 'Улучшение ответа на основную местную терапию', 'A better response to the main local treatment'),
      L("Teri tiklanishining qo'llab-quvvatlanishi", 'Поддержка восстановления кожи', 'Support for skin recovery'),
    ],
  },
  conclusion: [
    L(
      "Daavlin Aquex ionoforezi — kuchsiz elektr toki yordamida shifokor tayinlagan preparatlarni teriga yetkazish va mahalliy dermatologik davolashni qo'llab-quvvatlash usuli. U asosiy davolash o'rnini bosmaydi, balki kompleks rejaning bir qismi sifatida qo'llaniladi.",
      'Ионофорез Daavlin Aquex — метод введения назначенных врачом препаратов в кожу с помощью слабого электрического тока и поддержки местной дерматологической терапии. Он не заменяет основное лечение, а применяется как часть комплексного плана.',
      'Daavlin Aquex iontophoresis uses a weak electric current to deliver prescribed preparations into the skin and support local dermatological treatment. It does not replace the main treatment but is used as part of a comprehensive plan.',
    ),
    L(
      "Radeski klinikasida ionoforez dermatolog ko'rigidan so'ng, individual protokol asosida o'tkaziladi. Shifokor usul sizga mosligini, qaysi preparat ishlatilishini va kurs qanday rejalashtirilishini tushuntirib beradi.",
      'В клинике Radeski ионофорез проводится после осмотра дерматолога по индивидуальному протоколу. Врач объяснит, подходит ли вам метод, какой препарат будет использоваться и как планируется курс.',
      'At Radeski, iontophoresis is carried out after a dermatologist examination, following an individual protocol. The doctor will explain whether the method suits you, which preparation will be used and how the course is planned.',
    ),
  ],
  faq: [
    {
      question: L("Ionoforez og'riqlimi?", 'Больно ли делать ионофорез?', 'Is iontophoresis painful?'),
      answer: L(
        "Odatda yo'q. Seans vaqtida yengil sanchish yoki chumoli yurgandek sezgi bo'lishi mumkin. Tok kuchi asta-sekin oshiriladi va noqulaylik kuchaysa, darhol kamaytiriladi. Seansdan keyin elektrod joyida vaqtincha qizarish bo'lishi mumkin.",
        'Как правило, нет. Во время сеанса может ощущаться лёгкое покалывание или «мурашки». Силу тока повышают постепенно и сразу уменьшают, если дискомфорт усиливается. После сеанса в месте электрода возможно временное покраснение.',
        'Usually not. During the session you may feel mild tingling or prickling. The current is increased gradually and turned down straight away if the discomfort grows. There may be temporary redness where the electrode was afterwards.',
      ),
    },
    {
      question: L('Necha seans kerak?', 'Сколько сеансов ионофореза нужно?', 'How many sessions are needed?'),
      answer: L(
        "Seanslar soni muolaja maqsadi, preparat va teri holatiga bog'liq. Ko'pincha kurs tavsiya etiladi, ayrim yo'nalishlarda esa natijani saqlash uchun keyinchalik qo'llab-quvvatlovchi seanslar kerak bo'ladi. Aniq rejani shifokor belgilaydi.",
        'Количество сеансов зависит от задачи процедуры, препарата и состояния кожи. Чаще всего рекомендуется курс, а в некоторых случаях для сохранения результата затем нужны поддерживающие сеансы. Точный план определяет врач.',
        'The number of sessions depends on the goal, the preparation and the condition of the skin. A course is usually recommended, and in some cases maintenance sessions are needed afterwards to keep the result. The doctor sets the exact plan.',
      ),
    },
    {
      question: L("Elektr toki xavfli emasmi?", 'Не опасен ли электрический ток?', 'Is the electric current dangerous?'),
      answer: L(
        "Ionoforezda kuchsiz doimiy tok ishlatiladi va uning kuchi seans davomida nazorat qilinadi. Asosiy xavf implantatsiya qilingan elektron qurilmalar, tok yo'lidagi metall implantlar va zararlangan teri bilan bog'liq — shuning uchun ular haqida shifokorga oldindan aytish kerak.",
        'При ионофорезе используется слабый постоянный ток, сила которого контролируется в течение сеанса. Основные риски связаны с имплантированными электронными устройствами, металлическими имплантами на пути тока и повреждённой кожей — поэтому о них нужно заранее сообщить врачу.',
        'Iontophoresis uses a weak direct current whose strength is monitored throughout the session. The main risks relate to implanted electronic devices, metal implants in the path of the current and damaged skin, so tell the doctor about these beforehand.',
      ),
    },
    {
      question: L('Bolalar uchun xavfsizmi?', 'Безопасен ли ионофорез для детей?', 'Is iontophoresis safe for children?'),
      answer: L(
        "Ionoforez ayrim hollarda bolalarda ham qo'llaniladi, ammo qaror alohida ehtiyotkorlik bilan qabul qilinadi: tok kuchi, preparat va seans davomiyligi yoshga moslashtiriladi. Bola sezgilarini aytib bera olishi muhim. Bolaga usul mos-mosligini faqat dermatolog hal qiladi.",
        'Ионофорез в ряде случаев применяется и у детей, но решение принимается с особой осторожностью: сила тока, препарат и длительность сеанса подбираются с учётом возраста. Важно, чтобы ребёнок мог рассказать о своих ощущениях. Подходит ли метод ребёнку, решает только дерматолог.',
        'Iontophoresis is used in children in some cases, but the decision is made with particular care: the current, the preparation and the session length are adjusted for age. It is important that the child can describe how it feels. Only a dermatologist can decide whether the method is suitable for a child.',
      ),
    },
  ],
};
