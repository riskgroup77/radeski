import type { ClinicEquipmentDetails, LocalizedEquipmentText } from '../clinicEquipmentCatalog';

function L(uz: string, ru: string, en: string): LocalizedEquipmentText {
  return { uz, ru, en };
}

/** Long sections of the Hollywood Spectra (Lutronic) device page (loaded with the page, not the app shell). */
export const HOLLYWOOD_SPECTRA_LUTRONIC_DETAILS: ClinicEquipmentDetails = {
  about: [
    L(
      "Hollywood Spectra — Lutronic ishlab chiqaruvchisining Q-switch lazer asosidagi tizimi. Q-switch texnologiyasi nurni juda qisqa (nanosekund davomiyligidagi) va kuchli impulslar bilan beradi. Energiya shunchalik tez yetkaziladiki, pigment zarrachalari asosan mexanik ta'sir hisobiga parchalanadi, atrofdagi to'qima esa nisbatan kam qiziydi.",
      'Hollywood Spectra — система на базе Q-switch лазера производителя Lutronic. Технология Q-switch подаёт излучение очень короткими (наносекундной длительности) мощными импульсами. Энергия доставляется настолько быстро, что частицы пигмента разрушаются преимущественно за счёт механического эффекта, а окружающие ткани нагреваются относительно мало.',
      'Hollywood Spectra is a Q-switch laser system by Lutronic. Q-switch technology delivers light in very short (nanosecond-range), powerful pulses. The energy arrives so quickly that pigment particles break apart mainly through a mechanical effect, while the surrounding tissue heats up relatively little.',
    ),
    L(
      "Radeski klinikasida Hollywood Spectra bir nechta protokol bo'yicha qo'llaniladi: karbon piling, gold toning va pigmentatsiyani davolash. U akne va post-akne izlari, pigment dog'lar, kengaygan teshiklar va terining xira, \"charchagan\" ko'rinishi bilan ishlashda ishlatiladi. Qaysi protokol tanlanishini teri holatiga qarab shifokor belgilaydi.",
      'В клинике Radeski Hollywood Spectra применяется по нескольким протоколам: карбоновый пилинг, gold toning и лечение пигментации. Аппарат используется при акне и постакне, пигментных пятнах, расширенных порах и тусклом, «уставшем» виде кожи. Какой протокол выбрать, врач решает в зависимости от состояния кожи.',
      'At Radeski, Hollywood Spectra is used with several protocols: carbon peeling, gold toning and pigmentation treatment. It is used for acne and post-acne marks, pigment spots, enlarged pores and dull, tired-looking skin. The doctor decides which protocol to use based on the condition of the skin.',
    ),
    L(
      "Har qanday lazer muolajasi kabi, Hollywood Spectra ham dermatolog ko'rigidan boshlanadi. Pigment dog'lar oldindan dermatoskopiya bilan tekshiriladi: har bir qora dog' oddiy pigmentatsiya emas, shubhali hosilalar esa lazer bilan davolanmaydi. Aknening og'ir shakllarida lazer dori bilan davolashning o'rnini bosmaydi.",
      'Как и любая лазерная процедура, Hollywood Spectra начинается с осмотра дерматолога. Пигментные пятна предварительно проверяются дерматоскопией: не каждое тёмное пятно — обычная пигментация, а подозрительные образования лазером не обрабатывают. При тяжёлых формах акне лазер не заменяет медикаментозного лечения.',
      'Like any laser procedure, Hollywood Spectra starts with a dermatologist\'s examination. Pigment spots are checked with dermatoscopy beforehand: not every dark spot is ordinary pigmentation, and suspicious lesions are not treated with the laser. In severe acne, the laser does not replace medical treatment.',
    ),
  ],
  howItWorks: {
    paragraphs: [
      L(
        "Karbon pilingda teriga maxsus ko'mirli (karbon) losonning yupqa qatlami suriladi. U quriydi va teri yuzasi hamda teshiklarga kiradi. Lazer impulslarini karbon zarrachalari yutadi, qiziydi va parchalanadi — ular bilan birga o'lik hujayralar va teshiklardagi yog'ning bir qismi ham olib tashlanadi. Teri yengil qiziydi, bu esa uning yangilanishini rag'batlantirishi mumkin.",
        'При карбоновом пилинге на кожу наносят тонкий слой специального углеродного (карбонового) лосьона. Он подсыхает и заполняет поверхность кожи и поры. Импульсы лазера поглощаются частицами углерода, которые нагреваются и разрушаются — вместе с ними удаляются ороговевшие клетки и часть кожного сала из пор. Кожа слегка прогревается, что может стимулировать её обновление.',
        'In a carbon peel, a thin layer of special carbon lotion is applied to the skin. It dries and fills the skin\'s surface and pores. The laser pulses are absorbed by the carbon particles, which heat up and break apart — taking dead cells and some of the oil in the pores with them. The skin is gently warmed, which may stimulate renewal.',
      ),
      L(
        "Toning protokollari, jumladan gold toning, past energiyali impulslar va bir necha o'tish bilan bajariladi. Ular teridagi pigmentga ko'rinadigan shikastlanishsiz, asta-sekin ta'sir qiladi, shuning uchun natija odatda bir necha seans davomida to'planadi. Energiya, nuqta o'lchami va seanslar orasidagi intervalni shifokor teri fototipi va pigmentatsiya turiga qarab tanlaydi.",
        'Протоколы тонинга, в том числе gold toning, выполняются импульсами низкой энергии в несколько проходов. Они постепенно воздействуют на пигмент в коже без видимого повреждения, поэтому результат обычно накапливается в течение нескольких сеансов. Энергию, размер пятна и интервал между процедурами врач подбирает с учётом фототипа кожи и типа пигментации.',
        'Toning protocols, including gold toning, use low-energy pulses applied in several passes. They act on the pigment in the skin gradually, without visible damage, so results usually build up over several sessions. The doctor chooses the energy, spot size and interval between sessions based on the skin phototype and type of pigmentation.',
      ),
    ],
    effects: [
      L("Teri yuzasi va teshiklarning chuqur tozalanishi", 'Глубокое очищение поверхности кожи и пор', 'Deep cleansing of the skin surface and pores'),
      L("Yog' ajralishi va teshiklarning vaqtincha kamroq ko'rinishi", 'Временное уменьшение жирности и заметности пор', 'Temporarily less oiliness and less visible pores'),
      L("Ayrim pigment dog'lar va post-akne izlarining xiralashishi", 'Осветление некоторых пигментных пятен и следов постакне', 'Some pigment spots and post-acne marks fading'),
      L("Teri rangining bir tekisroq bo'lishi", 'Более ровный тон кожи', 'A more even skin tone'),
      L("Terining tiniqroq va yangiroq ko'rinishi", 'Более чистый и свежий вид кожи', 'Clearer, fresher-looking skin'),
    ],
  },
  indicationsIntro: L(
    "Hollywood Spectra muolajasi dermatolog ko'rigidan so'ng quyidagi muammolarda ko'rib chiqilishi mumkin.",
    'Процедура Hollywood Spectra может рассматриваться после осмотра дерматолога при следующих проблемах.',
    'Hollywood Spectra treatment may be considered after a dermatologist\'s examination for the following concerns.',
  ),
  indications: [
    {
      title: L("Yog'li teri va kengaygan teshiklar", 'Жирная кожа и расширенные поры', 'Oily skin and enlarged pores'),
      text: L(
        "Karbon piling teshiklarni tozalashga va terining yog'liligini vaqtincha kamaytirishga yordam berishi mumkin. Ko'pchilik bemorlar birinchi muolajadan keyinoq terining toza va silliqroq bo'lganini sezadi, ammo barqarorroq natija uchun odatda bir necha seans va to'g'ri uy parvarishi kerak bo'ladi.",
        'Карбоновый пилинг может помочь очистить поры и временно уменьшить жирность кожи. Многие пациенты замечают, что кожа стала чище и глаже уже после первой процедуры, однако для более стойкого результата обычно нужны несколько сеансов и правильный домашний уход.',
        'A carbon peel can help clear pores and temporarily reduce oiliness. Many patients notice that their skin feels cleaner and smoother after the very first session, but a more lasting result usually needs several sessions and proper home care.',
      ),
    },
    {
      title: L('Akne', 'Акне', 'Acne'),
      text: L(
        "Yengil va o'rta darajadagi akneda karbon piling kompleks davolashning qo'shimcha qismi sifatida qo'llanilishi mumkin: u teshiklarni tozalaydi va yog' ajralishini kamaytirishga yordam beradi. Akne sabablari turlicha bo'lgani uchun asosiy davolashni dermatolog tayinlaydi. Og'ir yoki yiringli akneda lazer dori bilan davolash o'rnini bosmaydi.",
        'При лёгкой и средней степени акне карбоновый пилинг может применяться как дополнение к комплексному лечению: он очищает поры и помогает уменьшить выделение кожного сала. Поскольку причины акне различны, основное лечение назначает дерматолог. При тяжёлом или гнойном акне лазер не заменяет медикаментозную терапию.',
        'In mild to moderate acne, a carbon peel can be used as an add-on to a broader treatment plan: it clears pores and helps reduce oil production. Because acne has different causes, the main treatment is prescribed by a dermatologist. In severe or pustular acne, the laser does not replace medication.',
      ),
    },
    {
      title: L('Post-akne izlari', 'Следы постакне', 'Post-acne marks'),
      text: L(
        "Akne o'tgandan keyin qoladigan qizg'ish va jigarrang dog'lar ko'pchilikni bezovta qiladi. Toning protokollari pigmentli izlarni asta-sekin xiralashtirishga va teri rangini tekisroq qilishga yordam berishi mumkin. Chuqur chandiqlar (post-akne chuqurchalari) bu usulning asosiy vazifasi emas — ular uchun shifokor boshqa usullarni ko'rib chiqadi.",
        'Красноватые и коричневые пятна, остающиеся после акне, беспокоят многих пациентов. Протоколы тонинга могут помочь постепенно осветлить пигментированные следы и выровнять тон кожи. Глубокие рубцы (атрофические рубцы постакне) не являются основной задачей этого метода — для них врач рассматривает другие методы.',
        'The reddish and brown marks left after acne bother many patients. Toning protocols can help gradually fade pigmented marks and even out skin tone. Deep scars (atrophic acne scars) are not the main target of this method — for those the doctor will consider other options.',
      ),
    },
    {
      title: L("Pigment dog'lar va melasma", 'Пигментные пятна и мелазма', 'Pigment spots and melasma'),
      text: L(
        "Q-switch lazer quyosh ta'siridan keyingi dog'lar va pigmentatsiyaning ayrim boshqa turlarini korreksiya qilishda qo'llanilishi mumkin. Har bir dog' oldindan dermatoskopiya bilan tekshiriladi. Melasma surunkali va qaytalanishga moyil holat: toning unda faqat shifokor qaroriga ko'ra, ehtiyotkor parametrlar bilan va kompleks davolashning bir qismi sifatida qo'llaniladi, chunki juda tez-tez yoki noto'g'ri tanlangan seanslar teri rangining notekis o'zgarishiga olib kelishi mumkin.",
        'Q-switch лазер может применяться для коррекции солнечных пятен и некоторых других видов пигментации. Каждое пятно предварительно проверяется дерматоскопией. Мелазма — хроническое состояние, склонное к рецидивам: тонинг при ней применяется только по решению врача, с осторожными параметрами и в составе комплексного лечения, поскольку слишком частые или неправильно подобранные сеансы могут привести к неравномерному изменению цвета кожи.',
        'The Q-switch laser can be used to correct sun spots and some other types of pigmentation. Every spot is checked with dermatoscopy beforehand. Melasma is a chronic condition that tends to recur: toning is used for it only at the doctor\'s discretion, with cautious settings and as part of a combined treatment plan, because sessions that are too frequent or poorly adjusted can lead to uneven changes in skin colour.',
      ),
    },
    {
      title: L("Xira teri va notekis tekstura", 'Тусклая кожа и неровная текстура', 'Dull skin and uneven texture'),
      text: L(
        "Terining xira, \"charchagan\" ko'rinishi va mayda notekisliklar bezovta qilganda karbon piling yoki toning teriga tiniqroq va silliqroq ko'rinish berishi mumkin. Bu usul ko'pincha muhim tadbirdan oldin yoki muntazam parvarishning bir qismi sifatida tanlanadi, ammo natija individual bo'ladi.",
        'Когда беспокоят тусклый, «уставший» вид кожи и мелкие неровности, карбоновый пилинг или тонинг могут придать коже более чистый и гладкий вид. Этот метод часто выбирают перед важным событием или как часть регулярного ухода, но результат всегда индивидуален.',
        'When the skin looks dull and tired or has minor irregularities, a carbon peel or toning can give it a clearer, smoother look. The method is often chosen before an important event or as part of regular skincare, but the result is always individual.',
      ),
    },
  ],
  suitability: {
    intro: L(
      "Hollywood Spectra yog'li teri, akne va post-akne izlari, pigment dog'lar yoki terining xiraligi bezovta qiladigan va qisqa tiklanish davriga ega usulni izlayotgan kattalar uchun mos variant bo'lishi mumkin. Muolajani tanlashdan oldin shifokor quyidagilarni baholaydi:",
      'Hollywood Spectra может быть подходящим вариантом для взрослых, которых беспокоят жирная кожа, акне и постакне, пигментные пятна или тусклость кожи и которые ищут метод с коротким периодом восстановления. Перед выбором процедуры врач оценивает:',
      'Hollywood Spectra may suit adults who are bothered by oily skin, acne and post-acne marks, pigment spots or dull skin and who want a method with a short recovery. Before choosing the procedure, the doctor assesses:',
    ),
    checks: [
      L("Teri turi, fototipi va yaqinda quyoshda qorayganlik", 'Тип кожи, фототип и наличие недавнего загара', 'Skin type, phototype and any recent tan'),
      L("Aknening og'irlik darajasi va faol yallig'lanish bor-yo'qligi", 'Степень тяжести акне и наличие активного воспаления', 'How severe the acne is and whether there is active inflammation'),
      L("Pigmentatsiyaning turi — dermatoskopiya natijalari bo'yicha", 'Тип пигментации — по результатам дерматоскопии', 'The type of pigmentation, based on dermatoscopy'),
      L("Qabul qilinayotgan dorilar, ayniqsa retinoidlar", 'Принимаемые лекарства, особенно ретиноиды', 'Current medications, especially retinoids'),
      L("Avvalgi muolajalar va kutilayotgan natijaning realligi", 'Предыдущие процедуры и реалистичность ожиданий', 'Previous procedures and how realistic the expectations are'),
    ],
  },
  contraindications: {
    intro: L(
      "Muolaja o'tkazish imkoniyati individual belgilanadi. Hollywood Spectra ni kechiktirish yoki undan voz kechishning asosiy sabablari:",
      'Возможность проведения процедуры определяется индивидуально. Основные причины отложить Hollywood Spectra или отказаться от неё:',
      'Whether the procedure can be done is decided individually. The main reasons to postpone or avoid Hollywood Spectra are:',
    ),
    items: [
      L("Yaqinda olingan zagar, solyariy yoki avtozagar", 'Свежий загар, солярий или автозагар', 'A fresh tan, tanning beds or self-tanner'),
      L("Ishlov beriladigan zonadagi faol infeksiyalar, jumladan gerpesning qo'zishi", 'Активные инфекции в зоне обработки, включая обострение герпеса', 'Active infections in the treatment area, including a herpes flare-up'),
      L("Kuchli yiringli yallig'lanish yoki ochiq yaralar", 'Выраженное гнойное воспаление или открытые раны', 'Severe pustular inflammation or open wounds'),
      L("Hali tekshirilmagan shubhali dog'lar va hosilalar", 'Подозрительные пятна и образования, которые ещё не обследованы', 'Suspicious spots and lesions that have not yet been examined'),
      L("Yorug'likka sezuvchanlikni oshiradigan dorilar va kasalliklar", 'Лекарства и заболевания, повышающие чувствительность к свету', 'Medications and conditions that increase sensitivity to light'),
      L("Ishlov beriladigan zonadagi tatuirovka yoki doimiy makiyaj", 'Татуировка или перманентный макияж в зоне обработки', 'A tattoo or permanent makeup in the treatment area'),
      L("Homiladorlik va emizish davri — rejali estetik muolajalar odatda kechiktiriladi", 'Беременность и грудное вскармливание — плановые эстетические процедуры обычно откладывают', 'Pregnancy and breastfeeding, when elective aesthetic procedures are usually postponed'),
      L("Shifokor lazer ta'sirini xavfli deb hisoblagan boshqa individual holatlar", 'Другие индивидуальные обстоятельства, при которых врач считает лазерное воздействие небезопасным', 'Other individual circumstances in which the doctor considers laser treatment unsafe'),
    ],
    note: L(
      "Akne uchun tizimli retinoidlar (izotretinoin) qabul qilinganda, keloid chandiqlarga moyillikda, to'q fototipli terida, melasmada va faol dermatologik kasalliklarda xavflar alohida baholanadi. Bunday holatlarda shifokor muolajani kechiktirishi, parametrlarni o'zgartirishi yoki boshqa usulni tavsiya qilishi mumkin.",
      'При приёме системных ретиноидов (изотретиноина) от акне, склонности к келоидным рубцам, тёмном фототипе кожи, мелазме и активных дерматологических заболеваниях риски оцениваются отдельно. В таких случаях врач может отложить процедуру, изменить параметры или предложить другой метод.',
      'Systemic retinoids for acne (isotretinoin), a tendency to keloid scarring, dark skin phototypes, melasma and active skin diseases all require a separate risk assessment. In such cases the doctor may postpone the procedure, change the settings or recommend another method.',
    ),
  },
  steps: [
    {
      title: L('Konsultatsiya va dermatoskopiya', 'Консультация и дерматоскопия', 'Consultation and dermatoscopy'),
      text: L(
        "Dermatolog terini ko'zdan kechiradi, akne, pigmentatsiya va boshqa shikoyatlarni aniqlaydi, pigment dog'larni dermatoskop bilan tekshiradi. Dorilar va avvalgi muolajalar haqida so'raladi. Shundan keyin shifokor mos protokolni — karbon piling, gold toning yoki pigmentatsiyani davolashni — tanlaydi.",
        'Дерматолог осматривает кожу, уточняет жалобы на акне, пигментацию и другие проблемы, проверяет пигментные пятна дерматоскопом. Уточняются принимаемые лекарства и предыдущие процедуры. После этого врач выбирает подходящий протокол — карбоновый пилинг, gold toning или лечение пигментации.',
        'The dermatologist examines the skin, asks about acne, pigmentation and other concerns, and checks pigment spots with a dermatoscope. You will be asked about medications and previous procedures. The doctor then chooses the right protocol — carbon peel, gold toning or pigmentation treatment.',
      ),
    },
    {
      title: L('Teriga tayyorgarlik', 'Подготовка кожи', 'Skin preparation'),
      text: L(
        "Teri makiyaj, krem va yog'dan yaxshilab tozalanadi. Karbon piling tanlangan bo'lsa, teriga karbon losonning yupqa qatlami suriladi va u bir necha daqiqa quritiladi. Bemor va shifokor ko'zni himoya qiluvchi maxsus ko'zoynak taqadi.",
        'Кожу тщательно очищают от макияжа, крема и кожного сала. Если выбран карбоновый пилинг, на кожу наносят тонкий слой карбонового лосьона и дают ему подсохнуть несколько минут. Пациент и врач надевают специальные защитные очки.',
        'The skin is thoroughly cleansed of makeup, cream and oil. If a carbon peel has been chosen, a thin layer of carbon lotion is applied and left to dry for a few minutes. Both patient and doctor wear special protective eyewear.',
      ),
    },
    {
      title: L("Lazer ta'siri", 'Лазерное воздействие', 'Laser treatment'),
      text: L(
        "Shifokor yuz bo'ylab bir necha o'tish bilan ishlov beradi. Karbon pilingda chirsillagan ovoz eshitiladi va yengil issiqlik hamda sanchish sezilishi mumkin. Toning protokollarida sezgilar odatda yanada yumshoqroq bo'ladi. Muolaja, odatda, og'riqsizlantirishsiz o'tkaziladi.",
        'Врач обрабатывает лицо в несколько проходов. При карбоновом пилинге слышны характерные щелчки, может ощущаться лёгкое тепло и покалывание. При протоколах тонинга ощущения обычно ещё мягче. Как правило, процедура проводится без анестезии.',
        'The doctor treats the face in several passes. During a carbon peel you will hear a characteristic crackling and may feel mild warmth and tingling. Toning protocols usually feel even gentler. The procedure is generally done without anesthesia.',
      ),
    },
    {
      title: L('Tozalash va tinchlantirish', 'Очищение и успокоение', 'Cleansing and soothing'),
      text: L(
        "Karbon pilingdan keyin qolgan karbon zarrachalari yuvib tashlanadi. Teriga tinchlantiruvchi vosita va SPF suriladi. Yengil qizarish odatda bir necha soat ichida o'tib ketadi, shuning uchun ko'pchilik bemorlar shu kunning o'zidayoq odatiy ishlariga qaytadi.",
        'После карбонового пилинга остатки углерода смывают. На кожу наносят успокаивающее средство и SPF. Лёгкое покраснение обычно проходит в течение нескольких часов, поэтому большинство пациентов в тот же день возвращаются к привычным делам.',
        'After a carbon peel, any remaining carbon is washed off. A soothing product and SPF are applied. Mild redness usually fades within a few hours, so most patients return to their usual activities the same day.',
      ),
    },
    {
      title: L('Parvarish va kurs', 'Уход и курс', 'Aftercare and course'),
      text: L(
        "Bir necha kun teriga qattiq skrab va ta'sirlantiruvchi vositalarni ishlatmaslik, har kuni SPF surish tavsiya etiladi. Ko'pincha bir necha seanslik kurs kerak bo'ladi; seanslar soni, oralig'i va protokolni shifokor teri reaksiyasiga qarab belgilaydi.",
        'В течение нескольких дней рекомендуется не использовать жёсткие скрабы и раздражающие средства, ежедневно наносить SPF. Чаще всего требуется курс из нескольких сеансов; количество процедур, интервалы и протокол врач определяет с учётом реакции кожи.',
        'For a few days you should avoid harsh scrubs and irritating products and apply SPF daily. A course of several sessions is usually needed; the doctor sets the number of sessions, the intervals and the protocol based on how the skin responds.',
      ),
    },
  ],
  results: {
    intro: L(
      "Karbon pilingdan keyin teri ko'pincha darhol tozaroq va silliqroq ko'rinadi, pigment va post-akne izlari bilan ishlashda esa natija bir necha seans davomida asta-sekin shakllanadi. Kurs davomida quyidagilar kuzatilishi mumkin:",
      'После карбонового пилинга кожа часто сразу выглядит чище и глаже, а при работе с пигментом и следами постакне результат формируется постепенно в течение нескольких сеансов. В ходе курса возможно:',
      'After a carbon peel the skin often looks cleaner and smoother right away, while results for pigment and post-acne marks build up gradually over several sessions. During the course you may see:',
    ),
    items: [
      L("Tozaroq teri va kamroq ko'rinadigan teshiklar", 'Более чистая кожа и менее заметные поры', 'Cleaner skin and less visible pores'),
      L("Yog'li yaltirashning kamayishi", 'Уменьшение жирного блеска', 'Less oily shine'),
      L("Post-akne dog'larining xiralashishi", 'Осветление пятен постакне', 'Post-acne marks fading'),
      L("Ayrim pigment dog'larining kamroq sezilishi va tekisroq rang", 'Уменьшение заметности отдельных пигментных пятен и более ровный тон', 'Some pigment spots becoming less noticeable and a more even tone'),
      L("Terining yangiroq va tiniqroq ko'rinishi", 'Более свежий и сияющий вид кожи', 'A fresher, more radiant look'),
    ],
  },
  conclusion: [
    L(
      "Hollywood Spectra (Lutronic) — karbon piling, gold toning va pigmentatsiyani davolash protokollarini birlashtirgan Q-switch lazer tizimi. U yog'li teri, akne, post-akne izlari, pigment dog'lar va terining xiraligi bilan ishlashda qo'llanilishi mumkin, ammo natija individual bo'lib, hech qanday usul uni kafolatlay olmaydi.",
      'Hollywood Spectra (Lutronic) — Q-switch лазерная система, объединяющая протоколы карбонового пилинга, gold toning и лечения пигментации. Она может применяться при жирной коже, акне, постакне, пигментных пятнах и тусклости кожи, однако результат индивидуален, и ни один метод не может его гарантировать.',
      'Hollywood Spectra (Lutronic) is a Q-switch laser system that combines carbon peeling, gold toning and pigmentation treatment protocols. It can be used for oily skin, acne, post-acne marks, pigment spots and dullness, but results are individual and no method can guarantee them.',
    ),
    L(
      "Radeski klinikasida Hollywood Spectra muolajasi dermatolog konsultatsiyasidan boshlanadi: shifokor terini baholaydi, dog'larni dermatoskopiya bilan tekshiradi, mos protokolni tanlaydi va seanslar sonini belgilaydi. Akne bo'lsa, lazer muolajasi dermatolog tayinlagan asosiy davolash bilan birga rejalashtiriladi.",
      'В клинике Radeski процедура Hollywood Spectra начинается с консультации дерматолога: врач оценивает кожу, проверяет пятна дерматоскопией, подбирает подходящий протокол и определяет количество сеансов. При акне лазерная процедура планируется вместе с основным лечением, назначенным дерматологом.',
      'At Radeski, Hollywood Spectra treatment starts with a dermatologist consultation: the doctor assesses the skin, checks spots with dermatoscopy, selects the right protocol and sets the number of sessions. If you have acne, the laser procedure is planned together with the main treatment prescribed by the dermatologist.',
    ),
  ],
  faq: [
    {
      question: L("Karbon piling og'riqlimi?", 'Больно ли делать карбоновый пилинг?', 'Is a carbon peel painful?'),
      answer: L(
        "Ko'pchilik bemorlar uchun karbon piling yengil o'tadi: chirsillagan ovoz, issiqlik va yengil sanchish seziladi. Odatda og'riqsizlantirish talab qilinmaydi. Sezgilar kuchi sozlamalar va terining individual sezuvchanligiga bog'liq.",
        'Для большинства пациентов карбоновый пилинг проходит легко: ощущаются характерные щелчки, тепло и лёгкое покалывание. Обычно анестезия не требуется. Интенсивность ощущений зависит от настроек и индивидуальной чувствительности кожи.',
        'Most patients find a carbon peel easy to tolerate: you will notice crackling sounds, warmth and light tingling. Anesthesia is usually not needed. How it feels depends on the settings and your skin\'s sensitivity.',
      ),
    },
    {
      question: L('Necha seans kerak?', 'Сколько нужно процедур Hollywood Spectra?', 'How many sessions are needed?'),
      answer: L(
        "Bu vazifaga bog'liq. Tozalovchi effektni ko'pchilik birinchi seansdan keyinoq sezadi, akne, post-akne izlari va pigmentatsiya bilan ishlashda esa odatda bir necha seanslik kurs kerak bo'ladi. Seanslar soni va oralig'ini shifokor belgilaydi.",
        'Это зависит от задачи. Очищающий эффект многие замечают уже после первой процедуры, а для работы с акне, постакне и пигментацией обычно нужен курс из нескольких сеансов. Количество процедур и интервал между ними определяет врач.',
        'It depends on the goal. Many people notice the cleansing effect after the first session, while acne, post-acne marks and pigmentation usually need a course of several sessions. The doctor sets the number of sessions and the interval between them.',
      ),
    },
    {
      question: L('Yozda qilish mumkinmi?', 'Можно ли делать процедуру летом?', 'Can I have it done in summer?'),
      answer: L(
        "Yangi zagar bo'lsa, muolaja odatda kechiktiriladi. Teri qoraymagan bo'lsa va bemor har kuni SPF ishlatib, quyoshdan qat'iy himoyalanishga tayyor bo'lsa, shifokor yozda ham muolajaga ruxsat berishi mumkin. Pigmentatsiya bilan ishlashda quyoshdan himoyalanish ayniqsa muhim — busiz natija tez yo'qolishi mumkin.",
        'При свежем загаре процедуру обычно откладывают. Если кожа не загорелая и пациент готов ежедневно использовать SPF и строго защищаться от солнца, врач может разрешить процедуру и летом. При работе с пигментацией фотозащита особенно важна — без неё результат может быстро утратиться.',
        'If you have a fresh tan, the procedure is usually postponed. If your skin is not tanned and you are ready to use SPF every day and protect yourself strictly from the sun, the doctor may allow it in summer too. Sun protection is especially important when treating pigmentation — without it, the result can be lost quickly.',
      ),
    },
    {
      question: L('Akneni butunlay davolaydimi?', 'Вылечит ли процедура акне полностью?', 'Will it cure my acne?'),
      answer: L(
        "Yo'q, lazer o'z-o'zidan akneni davolamaydi. Karbon piling teshiklarni tozalash va yog' ajralishini kamaytirishga yordam beradi va kompleks davolashning foydali qo'shimchasi bo'lishi mumkin. Aknening sababini aniqlash va asosiy davolashni tayinlash dermatolog vazifasidir.",
        'Нет, лазер сам по себе не излечивает акне. Карбоновый пилинг помогает очищать поры и уменьшать выделение кожного сала и может быть полезным дополнением к комплексному лечению. Выяснить причину акне и назначить основное лечение — задача дерматолога.',
        'No, the laser on its own does not cure acne. A carbon peel helps clear pores and reduce oil production and can be a useful addition to a broader treatment plan. Finding the cause of acne and prescribing the main treatment is the dermatologist\'s job.',
      ),
    },
    {
      question: L("Muolajadan keyin darhol ishga qaytsa bo'ladimi?", 'Можно ли сразу вернуться к работе?', 'Can I go straight back to work?'),
      answer: L(
        "Ko'p hollarda ha: yengil qizarish odatda bir necha soat ichida o'tadi. Pigmentatsiyani davolash protokollaridan keyin ayrim dog'lar vaqtincha qorayishi va keyin ko'chib tushishi mumkin. Muolaja kuni issiq sauna va faol sportdan saqlanish, har kuni SPF ishlatish tavsiya etiladi.",
        'В большинстве случаев да: лёгкое покраснение обычно проходит в течение нескольких часов. После протоколов лечения пигментации отдельные пятна могут временно потемнеть, а затем отшелушиться. В день процедуры рекомендуется избегать горячей сауны и интенсивного спорта, ежедневно использовать SPF.',
        'In most cases, yes: mild redness usually fades within a few hours. After pigmentation protocols some spots may temporarily darken and then flake off. On the day of treatment avoid hot saunas and intense exercise, and use SPF daily.',
      ),
    },
  ],
};
