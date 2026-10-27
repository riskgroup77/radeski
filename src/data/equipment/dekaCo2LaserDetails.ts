import type { ClinicEquipmentDetails, LocalizedEquipmentText } from '../clinicEquipmentCatalog';

function L(uz: string, ru: string, en: string): LocalizedEquipmentText {
  return { uz, ru, en };
}

/** Long sections of the DEKA SmartXide Punto CO₂ laser page (loaded with the page, not the app shell). */
export const DEKA_CO2_LASER_DETAILS: ClinicEquipmentDetails = {
  about: [
    L(
      "CO₂ lazer — dermatologiyada eng ko'p o'rganilgan ablyativ lazerlardan biri. Uning nuri 10 600 nm to'lqin uzunligida ishlaydi va to'qimadagi suv tomonidan juda yaxshi yutiladi. Shu sababli shifokor terining yupqa qatlamini nazorat ostida bug'latishi va chuqurlikni aniq boshqarishi mumkin. Radeski klinikasida Italiyaning DEKA kompaniyasi ishlab chiqargan SmartXide Punto apparati qo'llaniladi.",
      'CO₂-лазер — один из наиболее изученных абляционных лазеров в дерматологии. Его излучение с длиной волны 10 600 нм хорошо поглощается водой, содержащейся в тканях. Благодаря этому врач может контролируемо испарять тонкий слой кожи и точно управлять глубиной воздействия. В клинике Radeski используется аппарат SmartXide Punto итальянской компании DEKA.',
      "The CO₂ laser is one of the most thoroughly studied ablative lasers in dermatology. Its 10,600 nm wavelength is strongly absorbed by the water in skin tissue. This lets the doctor vaporise a thin layer of skin in a controlled way and manage the depth of treatment precisely. At Radeski, the SmartXide Punto made by the Italian company DEKA is used.",
    ),
    L(
      "Apparat ikki asosiy yo'nalishda ishlatiladi. Fraksion rejimda lazer nuri ko'plab mikroskopik ustunchalarga bo'linadi: ular orasida shikastlanmagan teri qoladi va tiklanishni tezlashtiradi. Bu rejim teri yangilanishi, postakne chandiqlari va relef notekisliklari bilan ishlashda qo'llaniladi. PinPoint rejimida esa fokuslangan nur bilan so'g'al, papilloma va shifokor xavfsiz deb tasdiqlagan boshqa hosilalar qavatma-qavat olib tashlanadi.",
      'Аппарат применяется в двух основных направлениях. Во фракционном режиме лазерный луч разделяется на множество микроскопических столбиков, между которыми остаются участки неповреждённой кожи, ускоряющие заживление. Этот режим используют для обновления кожи, коррекции рубцов постакне и неровностей рельефа. В режиме PinPoint сфокусированным лучом послойно удаляют бородавки, папилломы и другие образования, доброкачественность которых подтвердил врач.',
      "The device is used in two main ways. In fractional mode the beam is split into many microscopic columns, with untouched skin left between them to speed up healing. This mode is used for skin resurfacing, post-acne scars and uneven texture. In PinPoint mode a focused beam removes warts, papillomas and other growths that a doctor has confirmed to be benign, layer by layer.",
    ),
    L(
      "Muolaja yuzaki, o'rta yoki chuqur bo'lishi mumkin. Chuqurlik qanchalik katta bo'lsa, ta'sir shunchalik yaqqol, lekin tiklanish davri ham uzoqroq bo'ladi. Qaysi rejim va qanday parametrlar tanlanishini dermatolog teri turi, muammo xususiyati, ishlov beriladigan zona va bemorning tiklanish uchun ajrata oladigan vaqtini hisobga olib belgilaydi.",
      'Процедура может быть поверхностной, средней или глубокой. Чем больше глубина, тем выраженнее эффект, но тем дольше и период восстановления. Какой режим и какие параметры выбрать, дерматолог решает с учётом типа кожи, характера проблемы, зоны обработки и того, сколько времени пациент может выделить на восстановление.',
      "Treatment can be superficial, medium or deep. The deeper it goes, the more noticeable the effect, but the longer the recovery. The dermatologist chooses the mode and settings based on your skin type, the nature of the problem, the treatment area and how much time you can set aside for recovery.",
    ),
  ],
  howItWorks: {
    paragraphs: [
      L(
        "Lazer energiyasi to'qimadagi suv tomonidan yutilib, hujayralarni bir zumda bug'latadi va mikroskopik ablyatsiya kanallarini hosil qiladi. Har bir kanal atrofida yupqa issiqlik zonasi paydo bo'ladi: u kollagen tolalarining qisqarishiga olib keladi va terining tabiiy tiklanish jarayonini ishga tushiradi. Keyingi oylarda teri yangi kollagen va elastin hosil qiladi, shu sababli natija asta-sekin shakllanadi.",
        'Энергия лазера поглощается водой в тканях, мгновенно испаряет клетки и формирует микроскопические каналы абляции. Вокруг каждого канала возникает тонкая зона нагрева: она вызывает сокращение коллагеновых волокон и запускает естественные процессы восстановления кожи. В последующие месяцы кожа вырабатывает новый коллаген и эластин, поэтому результат формируется постепенно.',
        "The laser energy is absorbed by water in the tissue, instantly vaporising cells and creating microscopic ablation channels. A thin zone of heat forms around each channel: it makes collagen fibres contract and starts the skin's natural repair process. Over the following months the skin produces new collagen and elastin, which is why results develop gradually.",
      ),
      L(
        "Fraksion rejimda bir seansda teri yuzasining faqat bir qismiga ishlov beriladi, oradagi sog'lom to'qima esa tiklanish manbai bo'lib xizmat qiladi. Shu sababli teri butun yuza bo'ylab ishlov beriladigan klassik shlifovkaga nisbatan tezroq bitadi. Hosilalarni olib tashlashda shifokor to'qimani qavatma-qavat bug'latadi va chuqurlikni ko'z bilan nazorat qiladi; lazer mayda tomirlarni bir vaqtda koagulyatsiya qilgani uchun qon ketishi odatda minimal bo'ladi.",
        'Во фракционном режиме за один сеанс обрабатывается лишь часть поверхности кожи, а здоровая ткань между зонами воздействия служит источником восстановления. Поэтому кожа заживает быстрее, чем после классической шлифовки всей поверхности. При удалении образований врач послойно испаряет ткань и визуально контролирует глубину; так как лазер одновременно коагулирует мелкие сосуды, кровоточивость обычно минимальна.',
        "In fractional mode only part of the skin surface is treated in one session, and the healthy tissue in between acts as a source of repair. As a result, the skin heals faster than after classic full-surface resurfacing. When removing a growth, the doctor vaporises tissue layer by layer and checks the depth visually; because the laser seals small blood vessels at the same time, bleeding is usually minimal.",
      ),
    ],
    effects: [
      L("Terining yuzaki qatlamining yangilanishi", 'Обновление поверхностного слоя кожи', 'Renewal of the outer layer of the skin'),
      L("Yangi kollagen hosil bo'lishining rag'batlanishi", 'Стимуляция выработки нового коллагена', 'Stimulation of new collagen production'),
      L("Atrofik chandiqlar va notekisliklarning tekislanishi", 'Сглаживание атрофических рубцов и неровностей', 'Smoothing of atrophic scars and irregularities'),
      L("Teri teksturasining yaxshilanishi va g'ovaklarning kamroq ko'rinishi", 'Улучшение текстуры кожи и менее заметные поры', 'Better skin texture and less visible pores'),
      L("Mayda ajinlarning kamroq sezilishi", 'Уменьшение выраженности мелких морщин', 'Fine lines becoming less noticeable'),
      L("Xavfsiz hosilalarning kam qon ketishi bilan aniq olib tashlanishi", 'Точное удаление доброкачественных образований с минимальной кровоточивостью', 'Precise removal of benign growths with minimal bleeding'),
    ],
  },
  indicationsIntro: L(
    "Fraksion CO₂ lazer va PinPoint rejimi quyidagi holatlarda dermatolog ko'rigidan keyin ko'rib chiqilishi mumkin.",
    'Фракционный CO₂-лазер и режим PinPoint могут рассматриваться в следующих случаях после осмотра дерматолога.',
    'Fractional CO₂ and PinPoint mode may be considered in the following situations after a dermatologist has examined you.',
  ),
  indications: [
    {
      title: L('Postakne chandiqlari', 'Рубцы постакне', 'Post-acne scars'),
      text: L(
        "Fraksion CO₂ lazer atrofik postakne chandiqlarini korreksiya qilishning asosiy usullaridan biri hisoblanadi. Chandiqlar odatda bir seansdan keyin to'liq yo'qolmaydi, lekin kurs davomida ular sayozroq va kamroq ko'rinadigan bo'lishi mumkin. Muolajadan oldin faol akne nazorat ostiga olinishi kerak, chunki yallig'langan teriga lazer bilan ishlov berilmaydi.",
        'Фракционный CO₂-лазер считается одним из основных методов коррекции атрофических рубцов постакне. Обычно рубцы не исчезают полностью после одной процедуры, но в ходе курса они могут стать менее глубокими и менее заметными. Перед лечением активное акне должно быть взято под контроль, так как воспалённую кожу лазером не обрабатывают.',
        "Fractional CO₂ is considered one of the main methods for treating atrophic post-acne scars. Scars usually do not disappear completely after one session, but over a course they can become shallower and less visible. Active acne needs to be brought under control first, because inflamed skin is not treated with the laser.",
      ),
    },
    {
      title: L('Boshqa atrofik chandiqlar', 'Другие атрофические рубцы', 'Other atrophic scars'),
      text: L(
        "Suvchechak, jarohat yoki jarrohlik amaliyotidan keyin qolgan botiq chandiqlar ham ayrim hollarda lazer bilan yaxshilanishi mumkin. Shifokor chandiqning turi, yoshi va joylashuvini baholaydi. Keloid va gipertrofik chandiqlar alohida yondashuvni talab qiladi va har doim ham lazer uchun mos emas.",
        'Впалые рубцы после ветряной оспы, травм или хирургических вмешательств в ряде случаев также можно улучшить с помощью лазера. Врач оценивает тип, давность и расположение рубца. Келоидные и гипертрофические рубцы требуют отдельного подхода и не всегда подходят для лазерной коррекции.',
        "Depressed scars left by chickenpox, injuries or surgery can sometimes also be improved with the laser. The doctor assesses the type, age and location of the scar. Keloid and hypertrophic scars need a different approach and are not always suitable for laser treatment.",
      ),
    },
    {
      title: L("Yoshga bog'liq o'zgarishlar va mayda ajinlar", 'Возрастные изменения и мелкие морщины', 'Age-related changes and fine lines'),
      text: L(
        "Fotoqarish belgilari, mayda ajinlar va teri tarangligining biroz pasayishi fraksion shlifovka uchun ko'rsatma bo'lishi mumkin. Kollagen yangilanishi hisobiga teri zichroq va silliqroq ko'rinishi mumkin. Chuqur burmalar va yaqqol osilish holatlarida lazer boshqa usullarning o'rnini bosmaydi — shifokor buni konsultatsiyada ochiq tushuntiradi.",
        'Признаки фотостарения, мелкие морщины и некоторое снижение упругости кожи могут быть показанием к фракционной шлифовке. За счёт обновления коллагена кожа может выглядеть более плотной и гладкой. При глубоких складках и выраженном птозе лазер не заменяет другие методы — врач честно объяснит это на консультации.',
        "Signs of photoaging, fine lines and some loss of firmness can be reasons for fractional resurfacing. As collagen is renewed, the skin may look denser and smoother. For deep folds and marked sagging the laser does not replace other methods, and the doctor will explain this honestly at the consultation.",
      ),
    },
    {
      title: L("Notekis teksturasi va kengaygan g'ovaklar", 'Неровная текстура и расширенные поры', 'Uneven texture and enlarged pores'),
      text: L(
        "Dag'al, notekis yoki g'adir-budur teri yuzasi ham fraksion ta'sirga yaxshi javob berishi mumkin. Muolajadan keyin teri silliqroq bo'lib, g'ovaklar kamroq ko'zga tashlanishi mumkin. Natija teri turi va tanlangan chuqurlikka bog'liq.",
        'Грубая, неровная или бугристая поверхность кожи также может хорошо отвечать на фракционное воздействие. После процедуры кожа может стать более гладкой, а поры — менее заметными. Результат зависит от типа кожи и выбранной глубины.',
        "Rough, uneven or bumpy skin can also respond well to fractional treatment. Afterwards the skin may be smoother and the pores less noticeable. The result depends on your skin type and the depth chosen.",
      ),
    },
    {
      title: L("So'g'al va papillomalar (PinPoint)", 'Бородавки и папилломы (PinPoint)', 'Warts and papillomas (PinPoint)'),
      text: L(
        "PinPoint rejimida fokuslangan nur bilan so'g'al va papillomalar atrofdagi teriga minimal ta'sir qilgan holda olib tashlanadi. Bu hosilalar virus bilan bog'liq bo'lgani uchun keyinchalik yangi elementlar paydo bo'lishi mumkin va ba'zan takroriy muolaja kerak bo'ladi.",
        'В режиме PinPoint сфокусированным лучом удаляют бородавки и папилломы с минимальным воздействием на окружающую кожу. Поскольку эти образования связаны с вирусом, в дальнейшем возможно появление новых элементов, и иногда требуется повторная процедура.',
        "In PinPoint mode a focused beam removes warts and papillomas with minimal effect on the surrounding skin. Because these growths are caused by a virus, new ones can appear later, and a repeat treatment is sometimes needed.",
      ),
    },
    {
      title: L("Xavfsiz teri hosilalari", 'Доброкачественные образования кожи', 'Benign skin growths'),
      text: L(
        "Seboreyali keratoma va boshqa xavfsiz hosilalar faqat dermatolog ularning xavfsizligini tasdiqlagandan keyin olib tashlanadi. Har bir hosila oldin dermatoskop bilan tekshiriladi, kerak bo'lsa gistologik tekshiruv tayinlanadi. Xavfli o'sma gumon qilinsa, lazer bilan bug'latish tanlanmaydi, chunki bunda to'qimani tekshiruvga yuborib bo'lmaydi.",
        'Себорейные кератомы и другие доброкачественные образования удаляют только после того, как дерматолог подтвердил их доброкачественный характер. Каждое образование предварительно осматривают с помощью дерматоскопа, при необходимости назначают гистологическое исследование. При подозрении на злокачественную опухоль лазерное испарение не выбирают, так как в этом случае ткань невозможно отправить на исследование.',
        "Seborrhoeic keratoses and other benign growths are removed only after the dermatologist has confirmed they are harmless. Every lesion is first examined with a dermatoscope, and a histology test is ordered when needed. If a malignant tumour is suspected, laser vaporisation is not used, because the tissue could then not be sent for examination.",
      ),
    },
  ],
  suitability: {
    intro: L(
      "CO₂ lazer chandiqlar, teri relefi yoki yoshga bog'liq o'zgarishlarni korreksiya qilmoqchi bo'lgan va tiklanish davriga tayyor kattalar uchun mos bo'lishi mumkin. Konsultatsiyada shifokor quyidagilarni baholaydi:",
      'CO₂-лазер может подойти взрослым пациентам, которые хотят скорректировать рубцы, рельеф кожи или возрастные изменения и готовы к периоду восстановления. На консультации врач оценивает:',
      "The CO₂ laser may suit adults who want to improve scars, skin texture or age-related changes and are prepared for a recovery period. At the consultation the doctor assesses:",
    ),
    checks: [
      L("Chandiqlar yoki hosilalarning turi, chuqurligi va joylashuvi", 'Тип, глубину и расположение рубцов или образований', 'The type, depth and location of scars or growths'),
      L("Teri fototipi va yallig'lanishdan keyingi pigmentatsiyaga moyillik", 'Фототип кожи и склонность к поствоспалительной пигментации', 'Skin phototype and tendency to post-inflammatory pigmentation'),
      L("Aknening faolligi va hozirgi davolash, jumladan izotretinoin qabul qilish", 'Активность акне и текущее лечение, включая приём изотретиноина', 'How active the acne is and current treatment, including isotretinoin'),
      L("Gerpes, keloid chandiqlar va yara bitishi bilan bog'liq tarix", 'Наличие в анамнезе герпеса, келоидных рубцов и особенности заживления', 'Any history of herpes, keloid scars and how your skin heals'),
      L("Tiklanish davriga va quyoshdan qat'iy himoyalanishga tayyorlik", 'Готовность к периоду восстановления и строгой фотозащите', 'Readiness for the recovery period and strict sun protection'),
    ],
  },
  contraindications: {
    intro: L(
      "Lazer ta'sirini o'tkazish imkoniyati individual hal qilinadi. Muolajani kechiktirish yoki boshqa usulni tanlashning asosiy sabablari:",
      'Возможность лазерного воздействия решается индивидуально. Основные причины отложить процедуру или выбрать другой метод:',
      "Whether laser treatment is possible is decided individually. The main reasons to postpone it or choose another method are:",
    ),
    items: [
      L("Ishlov beriladigan zonadagi faol infeksiya, jumladan gerpesning qo'zishi", 'Активная инфекция в зоне обработки, включая обострение герпеса', 'An active infection in the treatment area, including a herpes flare-up'),
      L("Zonadagi faol yallig'langan akne, dermatit yoki teri shikastlanishi", 'Активное воспалительное акне, дерматит или повреждение кожи в зоне обработки', 'Active inflamed acne, dermatitis or skin damage in the area'),
      L("Yaqinda olingan zagar yoki kuchli quyosh ta'siri", 'Свежий загар или недавнее интенсивное солнечное воздействие', 'A fresh tan or recent intense sun exposure'),
      L("Hali tekshirilmagan shubhali teri hosilalari", 'Подозрительные образования кожи, которые ещё не обследованы', 'Suspicious skin lesions that have not yet been examined'),
      L("Izotretinoin qabul qilish yoki uni yaqinda tugatish — muolaja vaqti shifokor bilan alohida belgilanadi", 'Приём изотретиноина или недавнее окончание курса — сроки процедуры определяются с врачом отдельно', 'Taking isotretinoin or having recently finished it; the timing is agreed with the doctor separately'),
      L("Yara bitishini buzadigan holatlar, masalan nazoratsiz qandli diabet yoki ayrim immun buzilishlar", 'Состояния, нарушающие заживление, например некомпенсированный сахарный диабет или некоторые иммунные нарушения', 'Conditions that impair healing, such as uncontrolled diabetes or certain immune disorders'),
      L("Homiladorlik va emizish davri — rejali estetik muolajalar odatda kechiktiriladi", 'Беременность и грудное вскармливание — плановые эстетические процедуры обычно откладывают', 'Pregnancy and breastfeeding, when elective aesthetic procedures are usually postponed'),
      L("Terining yorug'likka sezuvchanligini oshiradigan dorilar va shifokor xavfli deb hisoblagan boshqa holatlar", 'Препараты, повышающие светочувствительность кожи, и другие обстоятельства, при которых врач считает процедуру небезопасной', 'Medications that increase light sensitivity and other circumstances in which the doctor considers treatment unsafe'),
    ],
    note: L(
      "To'qroq teri fototiplarida muolajadan keyin vaqtinchalik pigmentatsiya paydo bo'lish xavfi yuqoriroq. Bunday hollarda shifokor yumshoqroq parametrlarni tanlashi, terini oldindan tayyorlashni tavsiya qilishi yoki avval sinov zonasida tekshirishi mumkin. Keloid chandiqlarga moyillik alohida baholanadi, gerpes tarixi bo'lsa esa og'iz atrofiga ishlov berishdan oldin profilaktika masalasi muhokama qilinadi.",
      'У пациентов с более тёмными фототипами кожи выше риск временной гиперпигментации после процедуры. В таких случаях врач может выбрать более щадящие параметры, рекомендовать предварительную подготовку кожи или сначала провести тест на небольшом участке. Склонность к келоидным рубцам оценивается отдельно, а при герпесе в анамнезе перед обработкой зоны вокруг рта обсуждается профилактика.',
      "People with darker skin phototypes have a higher risk of temporary hyperpigmentation after treatment. In such cases the doctor may choose gentler settings, recommend preparing the skin beforehand or start with a small test area. A tendency to keloid scarring is assessed separately, and if you have a history of herpes, prevention is discussed before the area around the mouth is treated.",
    ),
  },
  steps: [
    {
      title: L("Konsultatsiya va ko'rik", 'Консультация и осмотр', 'Consultation and examination'),
      text: L(
        "Dermatolog terini ko'zdan kechiradi, shikoyatlar, kasalliklar tarixi, qabul qilinayotgan dorilar va avvalgi muolajalarni aniqlaydi. Hosilani olib tashlash rejalashtirilsa, u dermatoskop bilan tekshiriladi, zarur bo'lsa gistologik tekshiruv tayinlanadi. Shu bosqichda rejim, chuqurlik va taxminiy seanslar soni muhokama qilinadi.",
        'Дерматолог осматривает кожу, уточняет жалобы, историю заболеваний, принимаемые препараты и предыдущие процедуры. Если планируется удаление образования, его исследуют с помощью дерматоскопа, при необходимости назначают гистологию. На этом этапе обсуждаются режим, глубина и ориентировочное количество сеансов.',
        "The dermatologist examines your skin and asks about your concerns, medical history, current medications and previous procedures. If a growth is to be removed, it is checked with a dermatoscope, and histology is ordered if needed. The mode, depth and likely number of sessions are discussed at this stage.",
      ),
    },
    {
      title: L('Tayyorgarlik', 'Подготовка', 'Preparation'),
      text: L(
        "Teri tozalanadi va antiseptik bilan ishlov beriladi. Shlifovkada odatda mahalliy og'riqsizlantiruvchi krem qo'llaniladi, hosilalarni olib tashlashda esa shifokor qaroriga ko'ra in'ektsion mahalliy og'riqsizlantirish qilinishi mumkin. Bemor va xodimlarning ko'zlari maxsus ko'zoynak bilan himoyalanadi.",
        'Кожу очищают и обрабатывают антисептиком. При шлифовке обычно используют местный анестезирующий крем, а при удалении образований по решению врача может проводиться инъекционная местная анестезия. Глаза пациента и персонала защищают специальными очками.',
        "The skin is cleansed and treated with an antiseptic. For resurfacing, a topical anaesthetic cream is usually applied; for removing growths, the doctor may decide on a local anaesthetic injection. Your eyes and the staff's eyes are protected with special goggles.",
      ),
    },
    {
      title: L("Lazer ta'siri", 'Лазерное воздействие', 'Laser treatment'),
      text: L(
        "Shifokor tanlangan zonaga ketma-ket ishlov beradi yoki hosilani qavatma-qavat olib tashlaydi. Muolaja vaqtida issiqlik, sanchish yoki achishish sezilishi mumkin. Davomiyligi zona kattaligiga bog'liq: bitta kichik hosila bir necha daqiqa, butun yuzni shlifovka qilish esa ko'proq vaqt oladi.",
        'Врач последовательно обрабатывает выбранную зону или послойно удаляет образование. Во время процедуры возможны ощущения тепла, покалывания или жжения. Длительность зависит от площади: удаление одного небольшого образования занимает несколько минут, шлифовка всего лица — больше времени.',
        "The doctor treats the chosen area pass by pass or removes the growth layer by layer. You may feel heat, prickling or burning during the procedure. How long it takes depends on the area: one small growth takes a few minutes, while resurfacing the whole face takes longer.",
      ),
    },
    {
      title: L("Muolajadan keyin darhol", 'Сразу после процедуры', 'Straight after the procedure'),
      text: L(
        "Teri sovutiladi va unga tinchlantiruvchi yoki tiklovchi vosita surtiladi. Shifokor uyda teriga qanday qarash, qaysi vositalardan foydalanish va nimalardan vaqtincha voz kechish kerakligini batafsil tushuntiradi.",
        'Кожу охлаждают и наносят успокаивающее или восстанавливающее средство. Врач подробно объясняет, как ухаживать за кожей дома, какими средствами пользоваться и от чего временно отказаться.',
        "The skin is cooled and a soothing or repairing product is applied. The doctor explains in detail how to care for your skin at home, which products to use and what to avoid for a while.",
      ),
    },
    {
      title: L("Tiklanish va kuzatuv", 'Восстановление и наблюдение', 'Recovery and follow-up'),
      text: L(
        "Birinchi kunlarda qizarish, shish, mayda qobiqlar va po'st tashlash odatiy holat hisoblanadi. Qobiqlarni ko'chirish mumkin emas. Tiklanish muddati chuqurlikka bog'liq va bir necha kundan bir-ikki haftagacha davom etishi mumkin. Keyingi seans zarurligi va vaqtini shifokor nazorat ko'rigida belgilaydi.",
        'В первые дни нормальны покраснение, отёк, мелкие корочки и шелушение. Корочки нельзя снимать. Срок восстановления зависит от глубины воздействия и может составлять от нескольких дней до одной-двух недель. Необходимость и сроки следующего сеанса врач определяет на контрольном осмотре.',
        "Redness, swelling, small crusts and peeling are normal in the first days. The crusts should not be picked off. Recovery depends on the depth of treatment and can take from a few days to one or two weeks. The doctor decides at a follow-up visit whether another session is needed and when.",
      ),
    },
  ],
  results: {
    intro: L(
      "Natija bir zumda emas, balki teri tiklanishi va kollagen yangilanishi bilan birga bir necha oy davomida shakllanadi. Shifokor tavsiyalariga amal qilinganda quyidagilar kuzatilishi mumkin:",
      'Результат формируется не сразу, а в течение нескольких месяцев — по мере восстановления кожи и обновления коллагена. При соблюдении рекомендаций врача возможно:',
      "Results do not appear immediately; they develop over several months as the skin heals and collagen is renewed. If you follow the doctor's advice, you may see:",
    ),
    items: [
      L("Chandiqlarning sayozroq va kamroq ko'rinadigan bo'lishi", 'Рубцы становятся менее глубокими и менее заметными', 'Scars becoming shallower and less noticeable'),
      L("Teri relefi va teksturasining tekislanishi", 'Более ровный рельеф и текстура кожи', 'A smoother surface and texture'),
      L("Mayda ajinlarning kamroq sezilishi", 'Менее заметные мелкие морщины', 'Fine lines becoming less visible'),
      L("Terining zichroq va yangiroq ko'rinishi", 'Более плотный и свежий вид кожи', 'Skin that looks firmer and fresher'),
      L("Olib tashlangan hosila o'rnida kichik, asta-sekin oqarib boradigan iz", 'На месте удалённого образования — небольшой след, который постепенно светлеет', 'A small mark where a growth was removed that gradually fades'),
    ],
  },
  conclusion: [
    L(
      "DEKA SmartXide Punto CO₂ lazeri — teri yangilanishi, postakne chandiqlari, yoshga bog'liq o'zgarishlar va xavfsiz hosilalarni olib tashlash uchun qo'llaniladigan universal ablyativ tizim. Uning samarasi va xavfsizligi ko'rsatmalarni to'g'ri tanlash, parametrlarni individual sozlash va tiklanish davridagi tavsiyalarga amal qilishga bog'liq.",
      'CO₂-лазер DEKA SmartXide Punto — универсальная абляционная система, которая применяется для обновления кожи, коррекции рубцов постакне и возрастных изменений, а также для удаления доброкачественных образований. Её эффективность и безопасность зависят от правильного выбора показаний, индивидуальной настройки параметров и соблюдения рекомендаций в период восстановления.',
      "The DEKA SmartXide Punto CO₂ laser is a versatile ablative system used for skin resurfacing, post-acne scars, age-related changes and the removal of benign growths. How effective and safe it is depends on choosing the right indications, setting the parameters individually and following the advice during recovery.",
    ),
    L(
      "Radeski klinikasida har qanday lazer muolajasi dermatolog ko'rigidan boshlanadi. Shifokor CO₂ lazer sizning vazifangizga mos kelishini, qaysi rejim va chuqurlik maqsadga muvofiq ekanini va qancha seans kerak bo'lishi mumkinligini aniqlashga yordam beradi.",
      'В клинике Radeski любая лазерная процедура начинается с осмотра дерматолога. Врач поможет определить, подходит ли CO₂-лазер для вашей задачи, какой режим и глубина будут оправданы и сколько сеансов может понадобиться.',
      "At Radeski, every laser procedure starts with a dermatologist's examination. The doctor will help you work out whether the CO₂ laser suits your goal, which mode and depth make sense and how many sessions may be needed.",
    ),
  ],
  faq: [
    {
      question: L("CO₂ lazer og'riqlimi?", 'Больно ли делать CO₂-лазер?', 'Is CO₂ laser treatment painful?'),
      answer: L(
        "Muolaja vaqtida issiqlik, sanchish yoki achishish sezilishi mumkin. Noqulaylikni kamaytirish uchun shlifovkadan oldin mahalliy og'riqsizlantiruvchi krem, hosilalarni olib tashlashda esa kerak bo'lsa in'ektsion og'riqsizlantirish qo'llaniladi. Sezgilar kuchi chuqurlik va individual sezuvchanlikka bog'liq.",
        'Во время процедуры возможны ощущения тепла, покалывания или жжения. Чтобы уменьшить дискомфорт, перед шлифовкой наносят местный анестезирующий крем, а при удалении образований при необходимости делают инъекционную анестезию. Интенсивность ощущений зависит от глубины и индивидуальной чувствительности.',
        "You may feel heat, prickling or burning during the procedure. To reduce discomfort, a topical anaesthetic cream is applied before resurfacing, and a local anaesthetic injection can be used when removing growths. How it feels depends on the depth and your own sensitivity.",
      ),
    },
    {
      question: L('Necha seans kerak?', 'Сколько нужно сеансов CO₂-лазера?', 'How many sessions will I need?'),
      answer: L(
        "Bu muammoga bog'liq. Kichik hosilani olib tashlash ko'pincha bitta seansda bajariladi, chandiqlar va teri relefini korreksiya qilish uchun esa odatda bir necha seansdan iborat kurs kerak bo'ladi. Seanslar soni va ular orasidagi interval shifokor tomonidan individual belgilanadi.",
        'Это зависит от задачи. Удаление небольшого образования часто выполняется за один сеанс, а для коррекции рубцов и рельефа кожи обычно нужен курс из нескольких процедур. Количество сеансов и интервалы между ними врач определяет индивидуально.',
        "It depends on the goal. A small growth is often removed in one session, while scars and texture usually need a course of several treatments. The doctor sets the number of sessions and the intervals between them individually.",
      ),
    },
    {
      question: L("Tiklanish qancha davom etadi, ishga qachon chiqsa bo'ladi?", 'Сколько длится восстановление и когда можно выйти на работу?', 'How long is recovery and when can I go back to work?'),
      answer: L(
        "Yuzaki muolajadan keyin qizarish va po'st tashlash bir necha kun davom etadi, chuqurroq shlifovkadan keyin esa tiklanish bir-ikki haftagacha cho'zilishi mumkin. Yengil qizarish undan keyin ham bir muddat saqlanishi mumkin. Muhim tadbirlar oldidan muolajani rejalashtirishda buni hisobga oling va muddatni shifokor bilan kelishing.",
        'После поверхностной процедуры покраснение и шелушение сохраняются несколько дней, после более глубокой шлифовки восстановление может занять до одной-двух недель. Лёгкое покраснение может держаться и дольше. Учитывайте это, планируя процедуру перед важными событиями, и согласуйте сроки с врачом.',
        "After superficial treatment, redness and peeling last a few days; after deeper resurfacing, recovery can take up to one or two weeks. Mild redness may last a while longer. Keep this in mind when planning treatment before important events, and agree the timing with your doctor.",
      ),
    },
    {
      question: L("Muolajadan keyin qachon quyoshga chiqsa bo'ladi?", 'Когда после CO₂-лазера можно на солнце?', 'When can I go out in the sun after a CO₂ laser?'),
      answer: L(
        "Tiklanayotgan teri quyoshga juda sezuvchan bo'ladi, shuning uchun muolajadan keyin bir necha hafta davomida quyoshda toblanish va solyariydan voz kechish, har kuni yuqori SPF li vosita ishlatish tavsiya etiladi. Aniq muddatni shifokor muolaja chuqurligi va teri turingizga qarab aytadi.",
        'Восстанавливающаяся кожа очень чувствительна к солнцу, поэтому после процедуры в течение нескольких недель рекомендуется отказаться от загара и солярия и ежедневно использовать средство с высоким SPF. Точный срок врач назовёт с учётом глубины процедуры и вашего типа кожи.',
        "Healing skin is very sensitive to the sun, so for several weeks after treatment you should avoid sunbathing and tanning beds and use a high-SPF product every day. Your doctor will give you the exact period based on the depth of treatment and your skin type.",
      ),
    },
    {
      question: L("Postakne chandiqlari butunlay yo'qoladimi?", 'Исчезнут ли рубцы постакне полностью?', 'Will my acne scars disappear completely?'),
      answer: L(
        "Ko'pincha maqsad chandiqlarni butunlay yo'q qilish emas, balki ularni sezilarli darajada kamroq ko'rinadigan qilishdir. Natija chandiqlar turi va chuqurligi, teri xususiyatlari va o'tkazilgan seanslar soniga bog'liq. Ba'zi hollarda shifokor lazerni boshqa usullar bilan birga qo'llashni tavsiya qiladi.",
        'Чаще всего цель — не полностью убрать рубцы, а сделать их заметно менее выраженными. Результат зависит от типа и глубины рубцов, особенностей кожи и количества проведённых сеансов. В ряде случаев врач рекомендует сочетать лазер с другими методами.',
        "The aim is usually not to erase scars completely but to make them clearly less visible. The result depends on the type and depth of the scars, your skin and the number of sessions. In some cases the doctor recommends combining the laser with other methods.",
      ),
    },
  ],
};
