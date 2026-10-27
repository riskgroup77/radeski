import type { ClinicEquipmentDetails, LocalizedEquipmentText } from '../clinicEquipmentCatalog';

function L(uz: string, ru: string, en: string): LocalizedEquipmentText {
  return { uz, ru, en };
}

/** Long sections of the InMode IPL device page (loaded with the page, not the app shell). */
export const IPL_INMODE_DETAILS: ClinicEquipmentDetails = {
  about: [
    L(
      "IPL (Intense Pulsed Light — intensiv impulsli yorug'lik) lazer emas: apparat bitta to'lqin uzunligidagi nur o'rniga keng spektrli yorug'lik chaqnashlarini hosil qiladi. Maxsus filtrlar spektrning keraksiz qismini kesib tashlaydi va yorug'likni aniq maqsadga — pigmentga yoki mayda qon tomirlariga yo'naltiradi. Shu sababli bitta muolaja davomida bir nechta estetik muammo bilan ishlash mumkin.",
      'IPL (Intense Pulsed Light, интенсивный импульсный свет) — это не лазер: вместо излучения одной длины волны аппарат генерирует вспышки света широкого спектра. Специальные фильтры отсекают ненужную часть спектра и направляют свет на определённую мишень — пигмент или мелкие сосуды. Благодаря этому за одну процедуру можно работать сразу с несколькими эстетическими проблемами.',
      'IPL (Intense Pulsed Light) is not a laser: instead of light of a single wavelength, the device produces flashes of broad-spectrum light. Special filters cut off the part of the spectrum that is not needed and direct the light at a specific target — pigment or small blood vessels. This is why one procedure can address several aesthetic concerns at once.',
    ),
    L(
      "Radeski klinikasida InMode IPL tizimi foto-yangilash muolajalari uchun qo'llaniladi: yuz, bo'yin, dekolte, qo'llar va alohida zonalar terisidagi pigment dog'lar, mayda qon tomirlar, qizarish va quyosh ta'siri izlari bilan ishlashda. Bu jarrohliksiz usul — teri kesilmaydi, va ko'p hollarda bemor muolajadan keyin odatiy kundalik hayotiga tez qaytadi.",
      'В клинике Radeski система InMode IPL применяется для процедур фотоомоложения: при пигментных пятнах, мелких сосудах, покраснении и следах солнечного воздействия на коже лица, шеи, декольте, рук и отдельных зон. Это безоперационный метод — кожа не разрезается, и в большинстве случаев пациент быстро возвращается к привычной жизни после процедуры.',
      'At Radeski, the InMode IPL system is used for photo-rejuvenation: for pigment spots, small vessels, redness and sun damage on the face, neck, décolleté, hands and individual areas. It is a non-surgical method — the skin is not cut, and in most cases patients return to their normal routine quickly after the procedure.',
    ),
    L(
      "Natija ko'p jihatdan ko'rsatmalar qanchalik to'g'ri tanlanganiga bog'liq. Shuning uchun muolajadan oldin dermatolog terini ko'rikdan o'tkazadi, fototipni baholaydi va pigment dog'larni dermatoskopiya yordamida tekshiradi. Yorug'lik bilan faqat tabiati aniqlangan va xavfsiz deb topilgan hosilalarga ishlov beriladi.",
      'Результат во многом зависит от того, насколько правильно подобраны показания. Поэтому перед процедурой дерматолог осматривает кожу, оценивает фототип и проверяет пигментные пятна с помощью дерматоскопии. Светом обрабатываются только те образования, природа которых установлена и которые признаны безопасными для такого воздействия.',
      'The result depends largely on how well the indications are chosen. That is why, before the procedure, a dermatologist examines the skin, assesses the phototype and checks pigment spots with dermatoscopy. Only lesions whose nature has been established and that are considered safe for this kind of treatment are treated with light.',
    ),
  ],
  howItWorks: {
    paragraphs: [
      L(
        "IPL selektiv fototermoliz tamoyiliga asoslanadi. Yorug'lik energiyasini pigment dog'laridagi melanin va qon tomirlaridagi gemoglobin yutadi va issiqlikka aylantiradi, atrofdagi to'qima esa nisbatan kamroq qiziydi. Natijada pigment to'plamlari asta-sekin teri yuzasiga ko'tarilib, po'st bilan ko'chib tushadi, mayda qon tomirlar esa bekilib, organizm tomonidan asta-sekin so'rilib ketadi.",
        'В основе IPL лежит принцип селективного фототермолиза. Энергию света поглощают меланин в пигментных пятнах и гемоглобин в сосудах, превращая её в тепло, тогда как окружающие ткани нагреваются значительно меньше. В результате скопления пигмента постепенно поднимаются к поверхности кожи и отшелушиваются, а мелкие сосуды запаиваются и со временем рассасываются организмом.',
        'IPL is based on the principle of selective photothermolysis. Light energy is absorbed by melanin in pigment spots and by hemoglobin in blood vessels and converted into heat, while the surrounding tissue heats up much less. As a result, clusters of pigment gradually rise to the surface and flake off, and small vessels close and are gradually cleared by the body.',
      ),
      L(
        "Yorug'lik va issiqlik ta'siri dermadagi tabiiy tiklanish jarayonlarini ham rag'batlantirishi mumkin, shuning uchun kurs davomida ko'plab bemorlar teri umumiy ko'rinishi yangilanganini sezadi. Filtr, energiya va impuls davomiyligi kabi parametrlarni shifokor teri fototipi, ishlov beriladigan zona va aniq vazifaga qarab individual tanlaydi.",
        'Световое и тепловое воздействие может также стимулировать естественные процессы восстановления в дерме, поэтому в ходе курса многие пациенты отмечают, что кожа в целом выглядит свежее. Фильтр, энергию и длительность импульса врач подбирает индивидуально — с учётом фототипа кожи, зоны обработки и конкретной задачи.',
        'The light and heat can also stimulate natural repair processes in the dermis, which is why many patients notice that their skin looks fresher overall during a course. The doctor chooses the filter, energy and pulse duration individually, based on the skin phototype, the treatment area and the specific goal.',
      ),
    ],
    effects: [
      L("Yuzaki pigment dog'larining asta-sekin xiralashishi", 'Постепенное осветление поверхностных пигментных пятен', 'Gradual fading of superficial pigment spots'),
      L("Mayda qon tomirlar va qizarishning kamroq ko'rinishi", 'Уменьшение заметности мелких сосудов и покраснения', 'Small vessels and redness becoming less visible'),
      L("Teri rangining tekisroq va bir xilroq bo'lishi", 'Более ровный и однородный тон кожи', 'A more even, uniform skin tone'),
      L("Fotoqarishning ko'rinadigan belgilari kamayishi", 'Уменьшение видимых признаков фотостарения', 'Fewer visible signs of photoaging'),
      L("Terining yangiroq va tiniqroq ko'rinishi", 'Более свежий и сияющий вид кожи', 'A fresher, clearer-looking complexion'),
    ],
  },
  indicationsIntro: L(
    "IPL muolajasi dermatolog ko'rigidan so'ng quyidagi estetik muammolarda ko'rib chiqilishi mumkin.",
    'Процедура IPL может рассматриваться после осмотра дерматолога при следующих эстетических проблемах.',
    'IPL treatment may be considered after a dermatologist\'s examination for the following aesthetic concerns.',
  ),
  indications: [
    {
      title: L("Quyosh va yoshga bog'liq pigment dog'lar", 'Солнечные и возрастные пигментные пятна', 'Sun and age spots'),
      text: L(
        "IPL lentigo, sepkillar va quyosh ta'siridan keyin paydo bo'lgan boshqa yuzaki dog'larni korreksiya qilishda qo'llanilishi mumkin. Muolajadan oldin shifokor har bir dog'ni dermatoskopiya bilan tekshiradi: har qanday qora dog' oddiy pigmentatsiya emas, shubhali hosilalar esa yorug'lik bilan davolanmaydi va alohida tekshiruvni talab qiladi.",
        'IPL может применяться для коррекции лентиго, веснушек и других поверхностных пятен, появившихся после солнечного воздействия. Перед процедурой врач проверяет каждое пятно с помощью дерматоскопии: не всякое тёмное пятно — обычная пигментация, а подозрительные образования светом не обрабатывают — они требуют отдельного обследования.',
        'IPL can be used to correct lentigines, freckles and other superficial spots caused by sun exposure. Before treatment the doctor checks every spot with dermatoscopy: not every dark spot is ordinary pigmentation, and suspicious lesions are not treated with light — they need a separate examination.',
      ),
    },
    {
      title: L('Kuperoza va mayda qon tomirlar', 'Купероз и мелкие сосуды', 'Couperose and small vessels'),
      text: L(
        "Burun qanotlari, yonoqlar va iyakdagi ingichka qizil tomirchalar IPL bilan ishlov berishga yaxshi javob berishi mumkin. Yorug'lik gemoglobin orqali tomir devorini qizdiradi va tomir asta-sekin kamroq ko'rinadigan bo'ladi. Yirikroq yoki chuqurroq joylashgan tomirlar uchun shifokor boshqa usulni tavsiya qilishi mumkin.",
        'Тонкие красные сосуды на крыльях носа, щеках и подбородке могут хорошо отвечать на обработку IPL. Свет через гемоглобин нагревает стенку сосуда, и он постепенно становится менее заметным. Для более крупных или глубоко расположенных сосудов врач может предложить другой метод.',
        'Fine red vessels on the sides of the nose, the cheeks and the chin can respond well to IPL. The light heats the vessel wall through hemoglobin, and the vessel gradually becomes less visible. For larger or deeper vessels the doctor may suggest a different method.',
      ),
    },
    {
      title: L("Rozaseya bilan bog'liq qizarish", 'Покраснение при розацеа', 'Redness in rosacea'),
      text: L(
        "Rozaseyada IPL doimiy qizarish va ko'rinadigan tomirlarni kamaytirishga yordam berishi mumkin. Shuni bilish muhimki, yorug'lik bilan davolash rozaseyani butunlay yo'qotmaydi: u kompleks davolashning bir qismi bo'lib, qo'zishni keltirib chiqaruvchi omillarni nazorat qilish va dermatolog tavsiya qilgan parvarish bilan birga olib boriladi.",
        'При розацеа IPL может помочь уменьшить стойкое покраснение и видимые сосуды. Важно понимать, что световое лечение не избавляет от розацеа полностью: это часть комплексной терапии, которая проводится вместе с контролем провоцирующих факторов и уходом, назначенным дерматологом.',
        'In rosacea, IPL can help reduce persistent redness and visible vessels. It is important to understand that light treatment does not cure rosacea: it is one part of a combined treatment plan, together with controlling triggers and the skincare prescribed by a dermatologist.',
      ),
    },
    {
      title: L('Notekis teri rangi va fotoqarish', 'Неровный тон кожи и фотостарение', 'Uneven skin tone and photoaging'),
      text: L(
        "Yillar davomida quyosh ta'siri yuz, bo'yin, dekolte va qo'llar terisida dog'lar, qizarish va xiralikni qoldiradi. IPL bir vaqtning o'zida pigment va qon tomir komponentiga ta'sir qilgani uchun teri rangini tekisroq qilishga yordam berishi mumkin. Natijani saqlash uchun quyoshdan muntazam himoyalanish zarur.",
        'Годы солнечного воздействия оставляют на коже лица, шеи, декольте и рук пятна, покраснение и тусклость. Поскольку IPL одновременно воздействует на пигментный и сосудистый компоненты, он может помочь сделать тон кожи более ровным. Для сохранения результата необходима регулярная фотозащита.',
        'Years of sun exposure leave spots, redness and dullness on the face, neck, décolleté and hands. Because IPL acts on both the pigment and the vascular component at the same time, it can help even out skin tone. Regular sun protection is needed to keep the result.',
      ),
    },
    {
      title: L("Melasma — alohida ehtiyotkorlik bilan", 'Мелазма — с особой осторожностью', 'Melasma — with particular caution'),
      text: L(
        "Melasma surunkali holat bo'lib, issiqlik va yorug'lik ta'sirida ba'zan kuchayishi mumkin. Shu sababli IPL melasmada faqat shifokor qaroriga ko'ra, ehtiyotkor parametrlar bilan va odatda kompleks davolashning bir qismi sifatida ko'rib chiqiladi. Ayrim hollarda shifokor boshqa usulni afzal ko'radi.",
        'Мелазма — хроническое состояние, которое под действием тепла и света иногда может усиливаться. Поэтому IPL при мелазме рассматривается только по решению врача, с осторожными параметрами и, как правило, в составе комплексного лечения. В некоторых случаях врач отдаёт предпочтение другому методу.',
        'Melasma is a chronic condition that can sometimes get worse with heat and light. For this reason IPL is considered for melasma only at the doctor\'s discretion, with cautious settings and usually as part of a combined treatment plan. In some cases the doctor will prefer a different method.',
      ),
    },
  ],
  suitability: {
    intro: L(
      "InMode IPL tizimi pigment dog'lar, mayda qon tomirlar yoki notekis teri rangi bezovta qiladigan va jarrohliksiz, qisqa tiklanish davriga ega usulni izlayotgan kattalar uchun mos variant bo'lishi mumkin. Muolajani tanlashdan oldin shifokor quyidagilarni baholaydi:",
      'Система InMode IPL может быть подходящим вариантом для взрослых, которых беспокоят пигментные пятна, мелкие сосуды или неровный тон кожи и которые ищут безоперационный метод с коротким периодом восстановления. Перед выбором процедуры врач оценивает:',
      'The InMode IPL system may suit adults who are bothered by pigment spots, small vessels or uneven skin tone and who are looking for a non-surgical method with a short recovery. Before choosing the procedure, the doctor assesses:',
    ),
    checks: [
      L("Teri fototipi va yaqinda quyoshda qorayganlik", 'Фототип кожи и наличие недавнего загара', 'Skin phototype and any recent tan'),
      L("Dog'larning tabiati — dermatoskopiya natijalari bo'yicha", 'Природу пятен — по результатам дерматоскопии', 'The nature of the spots, based on dermatoscopy'),
      L("Qon tomir o'zgarishlarining turi, kattaligi va joylashuvi", 'Тип, размер и расположение сосудистых изменений', 'The type, size and location of vascular changes'),
      L("Qabul qilinayotgan dorilar, ayniqsa yorug'likka sezuvchanlikni oshiruvchilar", 'Принимаемые лекарства, особенно повышающие светочувствительность', 'Current medications, especially those that increase light sensitivity'),
      L("Avvalgi muolajalar va kutilayotgan natijaning realligi", 'Предыдущие процедуры и реалистичность ожиданий', 'Previous procedures and how realistic the expectations are'),
    ],
  },
  contraindications: {
    intro: L(
      "Muolaja o'tkazish imkoniyati har bir bemor uchun individual belgilanadi. IPL ni kechiktirish yoki undan voz kechishning asosiy sabablari:",
      'Возможность проведения процедуры определяется для каждого пациента индивидуально. Основные причины отложить IPL или отказаться от него:',
      'Whether the procedure can be done is decided individually for each patient. The main reasons to postpone or avoid IPL are:',
    ),
    items: [
      L("Yaqinda olingan zagar, solyariy yoki avtozagar vositalari", 'Свежий загар, солярий или средства для автозагара', 'A fresh tan, tanning beds or self-tanning products'),
      L("Ishlov beriladigan zonadagi faol teri infeksiyalari, jumladan gerpesning qo'zishi", 'Активные инфекции кожи в зоне обработки, включая обострение герпеса', 'Active skin infections in the treatment area, including a herpes flare-up'),
      L("Ta'sir zonasida yallig'lanish, ta'sirlanish yoki teri shikastlanishi", 'Воспаление, раздражение или повреждение кожи в зоне воздействия', 'Inflammation, irritation or damaged skin in the treatment area'),
      L("Hali tekshirilmagan shubhali dog'lar va hosilalar", 'Подозрительные пятна и образования, которые ещё не обследованы', 'Suspicious spots and lesions that have not yet been examined'),
      L("Yorug'likka sezuvchanlikni oshiradigan dorilar va kasalliklar", 'Лекарства и заболевания, повышающие чувствительность к свету', 'Medications and conditions that increase sensitivity to light'),
      L("Ishlov beriladigan zonadagi tatuirovka yoki doimiy makiyaj", 'Татуировка или перманентный макияж в зоне обработки', 'A tattoo or permanent makeup in the treatment area'),
      L("Homiladorlik va emizish davri — rejali estetik muolajalar odatda kechiktiriladi", 'Беременность и грудное вскармливание — плановые эстетические процедуры обычно откладывают', 'Pregnancy and breastfeeding, when elective aesthetic procedures are usually postponed'),
      L("Shifokor yorug'lik ta'sirini xavfli deb hisoblagan boshqa individual holatlar", 'Другие индивидуальные обстоятельства, при которых врач считает световое воздействие небезопасным', 'Other individual circumstances in which the doctor considers light treatment unsafe'),
    ],
    note: L(
      "To'q fototipli terida, keloid chandiqlarga moyillikda, tizimli retinoidlar qabul qilinganda, yorug'lik bilan qo'zg'aladigan tutqanoqlarda va faol dermatologik kasalliklarda xavflar alohida baholanadi. Bunday holatlarda shifokor parametrlarni o'zgartirishi, muolajani kechiktirishi yoki boshqa usulni tavsiya qilishi mumkin.",
      'При тёмном фототипе кожи, склонности к келоидным рубцам, приёме системных ретиноидов, эпилепсии со световой провокацией приступов и активных дерматологических заболеваниях риски оцениваются отдельно. В таких случаях врач может изменить параметры, отложить процедуру или предложить другой метод.',
      'Dark skin phototypes, a tendency to keloid scarring, systemic retinoid use, light-triggered epilepsy and active skin diseases all require a separate risk assessment. In such cases the doctor may change the settings, postpone the procedure or recommend another method.',
    ),
  },
  steps: [
    {
      title: L('Konsultatsiya va dermatoskopiya', 'Консультация и дерматоскопия', 'Consultation and dermatoscopy'),
      text: L(
        "Dermatolog terini ko'zdan kechiradi, shikoyatlar, kasalliklar tarixi, dorilar va avvalgi muolajalar haqida so'raydi. Pigment dog'lar dermatoskop bilan tekshiriladi. Shundan keyin shifokor IPL mos keladimi yoki yo'qligini va taxminiy reja qanday bo'lishini tushuntiradi.",
        'Дерматолог осматривает кожу, уточняет жалобы, историю заболеваний, принимаемые лекарства и предыдущие процедуры. Пигментные пятна проверяются дерматоскопом. После этого врач объясняет, подходит ли IPL и каким может быть примерный план лечения.',
        'The dermatologist examines the skin and asks about your concerns, medical history, medications and previous procedures. Pigment spots are checked with a dermatoscope. The doctor then explains whether IPL is suitable and what the approximate plan might be.',
      ),
    },
    {
      title: L('Muolajaga tayyorgarlik', 'Подготовка к процедуре', 'Preparing for the procedure'),
      text: L(
        "Muolajadan oldingi davrda quyoshda qorayishdan, solyariy va avtozagardan saqlanish tavsiya etiladi. Shifokor zarur bo'lsa, ayrim kosmetik vositalarni vaqtincha to'xtatishni so'raydi. Muolaja kuni teri makiyajdan tozalanadi.",
        'В период перед процедурой рекомендуется избегать загара, солярия и автозагара. При необходимости врач попросит временно отменить некоторые косметические средства. В день процедуры кожу очищают от макияжа.',
        'Before the procedure you should avoid tanning, tanning beds and self-tanners. If needed, the doctor will ask you to stop certain skincare products for a while. On the day of treatment the skin is cleansed of makeup.',
      ),
    },
    {
      title: L('IPL seansi', 'Сеанс IPL', 'The IPL session'),
      text: L(
        "Bemorga ko'zni himoya qiluvchi ko'zoynak kiygiziladi, teriga yupqa sovuq gel suriladi. Shifokor zonaga ketma-ket yorug'lik chaqnashlari bilan ishlov beradi. Har bir chaqnashda issiqlik va yengil chimchilash hissi sezilishi mumkin; uning kuchi sozlamalar va individual sezuvchanlikka bog'liq.",
        'Пациенту надевают защитные очки, на кожу наносят тонкий слой охлаждающего геля. Врач последовательно обрабатывает зону вспышками света. При каждой вспышке может ощущаться тепло и лёгкое пощёлкивание; интенсивность ощущений зависит от настроек и индивидуальной чувствительности.',
        'You wear protective goggles, and a thin layer of cool gel is applied to the skin. The doctor treats the area with a series of light flashes. Each flash may feel warm, like a light snap on the skin; how strong it feels depends on the settings and your sensitivity.',
      ),
    },
    {
      title: L('Muolajadan keyingi parvarish', 'Уход после процедуры', 'Aftercare'),
      text: L(
        "Muolajadan keyin teri bir necha soat qizargan va biroz shishgan bo'lishi mumkin. Pigment dog'lar vaqtincha qorayadi va keyingi kunlarda asta-sekin ko'chib tushadi — ularni qirib tashlash mumkin emas. Shifokor tinchlantiruvchi parvarish va SPF ishlatish bo'yicha tavsiyalar beradi.",
        'После процедуры кожа может несколько часов оставаться покрасневшей и слегка отёчной. Пигментные пятна временно темнеют и в последующие дни постепенно отшелушиваются — сдирать их нельзя. Врач даёт рекомендации по успокаивающему уходу и использованию SPF.',
        'After the procedure the skin may stay red and slightly swollen for a few hours. Pigment spots temporarily darken and gradually flake off over the following days — they must not be picked. The doctor gives advice on soothing skincare and SPF.',
      ),
    },
    {
      title: L('Kurs va kuzatuv', 'Курс и наблюдение', 'Course and follow-up'),
      text: L(
        "Ko'pincha bir necha seanslik kurs kerak bo'ladi — shifokor teri holatiga qarab, masalan, 3–5 seans tavsiya qilishi mumkin. Seanslar soni, oralig'i va parametrlari teri reaksiyasiga qarab shifokor tomonidan belgilanadi.",
        'Чаще всего требуется курс из нескольких сеансов — в зависимости от состояния кожи врач может рекомендовать, например, 3–5 процедур. Количество сеансов, интервалы и параметры врач определяет с учётом реакции кожи.',
        'A course of several sessions is usually needed — depending on the skin, the doctor may recommend, for example, 3–5 sessions. The doctor sets the number of sessions, the intervals and the settings based on how the skin responds.',
      ),
    },
  ],
  results: {
    intro: L(
      "Natija asta-sekin shakllanadi: pigment dog'lar avval qorayib, so'ng ko'chib tushadi, qon tomirlar esa bir necha hafta ichida kamroq ko'rinadigan bo'ladi. Kurs davomida quyidagilar kuzatilishi mumkin:",
      'Результат формируется постепенно: пигментные пятна сначала темнеют, затем отшелушиваются, а сосуды в течение нескольких недель становятся менее заметными. В ходе курса возможно:',
      'Results develop gradually: pigment spots first darken and then flake off, and vessels become less visible over several weeks. During the course you may see:',
    ),
    items: [
      L("Ayrim pigment dog'larining xiralashishi yoki yo'qolishi", 'Осветление или исчезновение отдельных пигментных пятен', 'Some pigment spots fading or clearing'),
      L("Qizarish va mayda tomirlarning kamroq sezilishi", 'Уменьшение покраснения и заметности мелких сосудов', 'Less redness and fewer visible small vessels'),
      L("Teri rangining bir tekisroq bo'lishi", 'Более ровный тон кожи', 'A more even skin tone'),
      L("Quyosh ta'siri izlarining kamroq ko'rinishi", 'Менее заметные следы солнечного воздействия', 'Less visible sun damage'),
      L("Terining umumiy yangiroq ko'rinishi", 'Более свежий общий вид кожи', 'A generally fresher look'),
    ],
  },
  conclusion: [
    L(
      "InMode IPL tizimi — pigment dog'lar, mayda qon tomirlar, qizarish va fotoqarish belgilari bilan jarrohliksiz ishlashga imkon beradigan foto-yangilash usuli. U bitta muolajada bir nechta muammoga ta'sir qilishi mumkin, ammo natija va seanslar soni har bir bemorda turlicha bo'ladi va hech qanday usul aniq natijani kafolatlay olmaydi.",
      'Система InMode IPL — метод фотоомоложения, который позволяет безоперационно работать с пигментными пятнами, мелкими сосудами, покраснением и признаками фотостарения. Он может воздействовать на несколько проблем за одну процедуру, однако результат и количество сеансов у каждого пациента разные, и ни один метод не может гарантировать конкретный результат.',
      'The InMode IPL system is a photo-rejuvenation method for non-surgical treatment of pigment spots, small vessels, redness and signs of photoaging. It can address several concerns in one procedure, but results and the number of sessions vary from patient to patient, and no method can guarantee a specific outcome.',
    ),
    L(
      "Radeski klinikasida IPL muolajasi dermatolog konsultatsiyasi va dog'larni dermatoskopik tekshirishdan boshlanadi. Shifokor yorug'lik bilan davolash sizning vazifangizga mos kelishini aniqlaydi, protokolni tanlaydi va muolajadan keyingi parvarish hamda quyoshdan himoyalanish bo'yicha batafsil tavsiyalar beradi.",
      'В клинике Radeski процедура IPL начинается с консультации дерматолога и дерматоскопического осмотра пятен. Врач определяет, подходит ли световое лечение для вашей задачи, подбирает протокол и даёт подробные рекомендации по уходу после процедуры и защите от солнца.',
      'At Radeski, IPL treatment starts with a dermatologist consultation and a dermatoscopic check of the spots. The doctor determines whether light treatment suits your goal, selects the protocol and gives detailed advice on aftercare and sun protection.',
    ),
  ],
  faq: [
    {
      question: L("IPL og'riqlimi?", 'Больно ли делать IPL?', 'Is IPL painful?'),
      answer: L(
        "Ko'pchilik bemorlar har bir chaqnashni issiqlik va teriga rezina tasma tekkandek yengil chimchilash sifatida tasvirlaydi. Sovuq gel noqulaylikni kamaytiradi. Sezgilar kuchi zona, sozlamalar va individual sezuvchanlikka bog'liq; odatda muolaja og'riqsizlantirishsiz o'tkaziladi.",
        'Большинство пациентов описывают каждую вспышку как тепло и лёгкий щелчок, будто по коже щёлкнули резинкой. Охлаждающий гель уменьшает дискомфорт. Интенсивность ощущений зависит от зоны, настроек и индивидуальной чувствительности; обычно процедура проводится без анестезии.',
        'Most patients describe each flash as warmth and a light snap, like a rubber band flicked against the skin. The cool gel reduces discomfort. How it feels depends on the area, the settings and your sensitivity; the procedure is usually done without anesthesia.',
      ),
    },
    {
      question: L('Necha seans kerak?', 'Сколько нужно сеансов IPL?', 'How many IPL sessions are needed?'),
      answer: L(
        "Bu individual. Ayrim dog'lar bir-ikki seansdan keyin sezilarli xiralashadi, qon tomirlar va umumiy foto-yangilash uchun esa odatda kurs kerak bo'ladi. Shifokor teri holatiga qarab, masalan, 3–5 seans tavsiya qilishi mumkin; aniq soni va oralig'ini shifokor belgilaydi.",
        'Это индивидуально. Некоторые пятна заметно светлеют после одной-двух процедур, а для сосудов и общего фотоомоложения обычно нужен курс. В зависимости от состояния кожи врач может рекомендовать, например, 3–5 сеансов; точное количество и интервалы определяет врач.',
        'It is individual. Some spots fade noticeably after one or two sessions, while vessels and overall photo-rejuvenation usually need a course. Depending on the skin, the doctor may recommend, for example, 3–5 sessions; the exact number and intervals are set by the doctor.',
      ),
    },
    {
      question: L('IPL ni yozda qilish mumkinmi?', 'Можно ли делать IPL летом?', 'Can I have IPL in summer?'),
      answer: L(
        "Yangi zagar IPL uchun jiddiy to'siq, chunki qoraygan teri yorug'likni ko'proq yutadi va asoratlar xavfi oshadi. Shuning uchun muolaja ko'pincha quyosh kamroq bo'lgan mavsumga rejalashtiriladi. Agar teri qoraymagan bo'lsa va bemor quyoshdan qat'iy himoyalanishga tayyor bo'lsa, shifokor yozda ham muolajaga ruxsat berishi mumkin — qarorni shifokor qabul qiladi.",
        'Свежий загар — серьёзное препятствие для IPL, поскольку загорелая кожа сильнее поглощает свет и риск осложнений возрастает. Поэтому процедуру чаще планируют на сезон с менее активным солнцем. Если кожа не загорелая и пациент готов строго защищаться от солнца, врач может разрешить процедуру и летом — решение принимает врач.',
        'A fresh tan is a serious obstacle to IPL, because tanned skin absorbs more light and the risk of complications rises. That is why treatment is often planned for the less sunny season. If your skin is not tanned and you are ready to protect it strictly from the sun, the doctor may allow treatment in summer too — the decision is the doctor\'s.',
      ),
    },
    {
      question: L("Nima uchun muolajadan keyin dog'lar qorayadi?", 'Почему пятна темнеют после IPL?', 'Why do spots get darker after IPL?'),
      answer: L(
        "Bu odatiy reaksiya: yorug'lik ta'sirida pigment teri yuzasiga ko'tariladi va dog' vaqtincha qoraroq ko'rinadi. Keyingi kunlarda u mayda qobiqcha bo'lib ko'chib tushadi. Dog'larni qirish yoki ishqalash mumkin emas — bu iz qoldirishi mumkin. Agar reaksiya sizni xavotirga solsa, shifokorga murojaat qiling.",
        'Это обычная реакция: под действием света пигмент поднимается к поверхности, и пятно временно выглядит темнее. В последующие дни оно отшелушивается мелкими корочками. Сдирать или тереть пятна нельзя — это может оставить след. Если реакция вас беспокоит, обратитесь к врачу.',
        'This is a normal reaction: the light brings pigment up to the surface, so the spot temporarily looks darker. Over the following days it flakes off as tiny crusts. Do not pick or rub the spots — this can leave a mark. If the reaction worries you, contact your doctor.',
      ),
    },
    {
      question: L('Muolajadan keyin ishga chiqsa bo\'ladimi?', 'Можно ли сразу выйти на работу после IPL?', 'Can I go back to work right after IPL?'),
      answer: L(
        "Ko'p hollarda ha: qizarish va yengil shish odatda bir necha soat yoki bir-ikki kun ichida kamayadi. Bir necha kun issiq vanna, sauna, faol sport va quyoshdan saqlanish tavsiya etiladi. Har kuni SPF ishlatish majburiy.",
        'В большинстве случаев да: покраснение и лёгкая отёчность обычно уменьшаются в течение нескольких часов или одного-двух дней. Несколько дней рекомендуется избегать горячей ванны, сауны, интенсивного спорта и солнца. Ежедневное использование SPF обязательно.',
        'In most cases, yes: redness and mild swelling usually settle within a few hours or a day or two. For a few days you should avoid hot baths, saunas, intense exercise and the sun. Daily SPF is essential.',
      ),
    },
  ],
};
