import type { ClinicEquipmentDetails, LocalizedEquipmentText } from '../clinicEquipmentCatalog';

function L(uz: string, ru: string, en: string): LocalizedEquipmentText {
  return { uz, ru, en };
}

/** Long sections of the Derma V (Lutronic) device page (loaded with the page, not the app shell). */
export const DERMA_V_LUTRONIC_DETAILS: ClinicEquipmentDetails = {
  about: [
    L(
      "Derma V — Lutronic ishlab chiqaruvchisining qon tomir va pigment o'zgarishlariga qaratilgan lazer tizimi. Keng spektrli yorug'lik beradigan IPL apparatlaridan farqli ravishda, lazer qat'iy belgilangan to'lqin uzunligidagi nur chiqaradi. Bu energiyani aniq nishonga — alohida qon tomirga yoki pigment dog'ga — yo'naltirish va atrofdagi teriga ta'sirni kamaytirish imkonini beradi.",
      'Derma V — лазерная система производителя Lutronic, предназначенная для работы с сосудистыми и пигментными изменениями. В отличие от IPL-аппаратов, которые дают свет широкого спектра, лазер излучает свет строго заданной длины волны. Это позволяет направлять энергию точно в мишень — отдельный сосуд или пигментное пятно — и уменьшать воздействие на окружающую кожу.',
      'Derma V is a laser system by Lutronic designed for vascular and pigment changes. Unlike IPL devices, which produce broad-spectrum light, a laser emits light of a strictly defined wavelength. This allows the energy to be aimed precisely at the target — an individual vessel or pigment spot — while reducing the effect on the surrounding skin.',
    ),
    L(
      "Radeski klinikasida Derma V yuz va tana zonalarida dermatolog nazorati ostida qo'llaniladi: kuperoza, rozaseyadagi qizarish, qon tomir yulduzchalari (telangiektaziyalar) va pigment dog'lar bilan ishlashda. Shifokor ko'rinib turgan tomirlarga nuqtali ishlov berishi yoki qizarish zonasini butunlay qamrab olishi mumkin — bu muammoning turiga bog'liq.",
      'В клинике Radeski Derma V применяется на лице и теле под контролем дерматолога: при куперозе, покраснении при розацеа, сосудистых звёздочках (телеангиэктазиях) и пигментных пятнах. Врач может точечно обрабатывать видимые сосуды или работать по всей зоне покраснения — в зависимости от типа проблемы.',
      'At Radeski, Derma V is used on the face and body under a dermatologist\'s supervision: for couperose, rosacea-related redness, spider veins (telangiectasias) and pigment spots. The doctor may treat visible vessels point by point or work across the whole area of redness — depending on the type of problem.',
    ),
    L(
      "Har qanday qizarish ham qon tomir muammosi emas: u allergik yoki seboreyali dermatit, rozaseya, dorilarga reaksiya va boshqa holatlar belgisi bo'lishi mumkin. Shuning uchun lazerdan oldin dermatolog qizarish sababini aniqlaydi, pigment dog'lar esa dermatoskopiya yordamida tekshiriladi. Davolash rejasi shu tekshiruv natijalariga asoslanadi.",
      'Не всякое покраснение — это сосудистая проблема: оно может быть признаком аллергического или себорейного дерматита, розацеа, реакции на лекарства и других состояний. Поэтому перед лазером дерматолог выясняет причину покраснения, а пигментные пятна проверяет с помощью дерматоскопии. План лечения строится на результатах этого обследования.',
      'Not every kind of redness is a vascular problem: it can be a sign of allergic or seborrheic dermatitis, rosacea, a reaction to medication and other conditions. That is why, before any laser treatment, the dermatologist identifies the cause of the redness and checks pigment spots with dermatoscopy. The treatment plan is based on the results of this examination.',
    ),
  ],
  howItWorks: {
    paragraphs: [
      L(
        "Derma V selektiv fototermoliz tamoyili asosida ishlaydi. Lazer nurini qon tomirlaridagi gemoglobin yoki pigment dog'laridagi melanin yutadi. Yutilgan energiya issiqlikka aylanadi: tomir devori qiziydi va bekiladi, keyinchalik organizm uni asta-sekin so'rib yuboradi; pigment to'plamlari esa parchalanib, tabiiy yo'l bilan chiqib ketadi yoki po'st bilan ko'chib tushadi.",
        'Derma V работает по принципу селективного фототермолиза. Лазерное излучение поглощается гемоглобином в сосудах или меланином в пигментных пятнах. Поглощённая энергия превращается в тепло: стенка сосуда нагревается и запаивается, после чего организм постепенно её рассасывает; скопления пигмента разрушаются и выводятся естественным путём или отшелушиваются.',
        'Derma V works on the principle of selective photothermolysis. The laser light is absorbed by hemoglobin in blood vessels or by melanin in pigment spots. The absorbed energy turns into heat: the vessel wall heats up and closes, and the body then gradually clears it; clusters of pigment break down and are removed naturally or flake off.',
      ),
      L(
        "Ta'sir parametrlarini shifokor tomirlarning diametri va chuqurligi, pigmentning turi, teri fototipi va ishlov beriladigan zonaga qarab tanlaydi. Oyoqlardagi yirik yoki varikoz tomirlar yuzaki lazer bilan davolanmaydi — bunday hollarda avval flebolog yoki tomir jarrohi ko'rigi kerak bo'ladi.",
        'Параметры воздействия врач подбирает с учётом диаметра и глубины сосудов, типа пигмента, фототипа кожи и зоны обработки. Крупные или варикозные вены на ногах поверхностным лазером не лечат — в таких случаях сначала необходима консультация флеболога или сосудистого хирурга.',
        'The doctor chooses the treatment settings based on the diameter and depth of the vessels, the type of pigment, the skin phototype and the treatment area. Large or varicose veins on the legs are not treated with a surface laser — in such cases a phlebologist or vascular surgeon should be consulted first.',
      ),
    ],
    effects: [
      L("Ko'rinadigan mayda qon tomirlarning kamayishi", 'Уменьшение видимых мелких сосудов', 'Fewer visible small vessels'),
      L("Doimiy qizarishning kamroq sezilishi", 'Уменьшение стойкого покраснения', 'Less persistent redness'),
      L("Ayrim pigment dog'larining xiralashishi", 'Осветление некоторых пигментных пятен', 'Some pigment spots fading'),
      L("Teri rangining bir tekisroq bo'lishi", 'Более ровный тон кожи', 'A more even skin tone'),
      L("Yuzning tinchroq va sog'lomroq ko'rinishi", 'Более спокойный и здоровый вид лица', 'A calmer, healthier-looking complexion'),
    ],
  },
  indicationsIntro: L(
    "Derma V lazeri dermatolog ko'rigidan so'ng quyidagi qon tomir va pigment muammolarida ko'rib chiqilishi mumkin.",
    'Лазер Derma V может рассматриваться после осмотра дерматолога при следующих сосудистых и пигментных проблемах.',
    'The Derma V laser may be considered after a dermatologist\'s examination for the following vascular and pigment concerns.',
  ),
  indications: [
    {
      title: L('Qon tomir yulduzchalari (telangiektaziyalar)', 'Сосудистые звёздочки (телеангиэктазии)', 'Spider veins (telangiectasias)'),
      text: L(
        "Burun qanotlari, yonoqlar va iyakdagi ingichka qizil yoki ko'kimtir tomirchalar — lazer bilan ishlashning eng ko'p uchraydigan sabablaridan biri. Lazer nuqtali ta'sir qilgani uchun shifokor har bir ko'rinadigan tomirga alohida ishlov bera oladi. Ayrim tomirlar bitta seansdan keyin sezilarli kamayadi, boshqalari esa takroriy muolajani talab qiladi.",
        'Тонкие красные или синеватые сосуды на крыльях носа, щеках и подбородке — одна из самых частых причин обращения к лазеру. Благодаря точечному воздействию врач может обработать каждый видимый сосуд отдельно. Некоторые сосуды заметно уменьшаются после одной процедуры, другие требуют повторной обработки.',
        'Fine red or bluish vessels on the sides of the nose, the cheeks and the chin are one of the most common reasons to see a laser specialist. Because the laser acts precisely, the doctor can treat each visible vessel separately. Some vessels fade noticeably after one session; others need repeat treatment.',
      ),
    },
    {
      title: L('Kuperoza', 'Купероз', 'Couperose'),
      text: L(
        "Kuperozada yonoqlar va burun atrofida mayda tomirlar to'ri va doimiy qizarish paydo bo'ladi. Derma V ko'rinadigan tomirlarni kamaytirishga va yuz rangini tekisroq qilishga yordam berishi mumkin. Natijani saqlash uchun haddan tashqari issiqlik, quyosh va terini ta'sirlantiruvchi vositalardan saqlanish muhim.",
        'При куперозе на щеках и вокруг носа появляется сеточка мелких сосудов и стойкое покраснение. Derma V может помочь уменьшить видимые сосуды и сделать цвет лица более ровным. Для сохранения результата важно избегать перегрева, солнца и раздражающих кожу средств.',
        'In couperose, a network of small vessels and persistent redness appears on the cheeks and around the nose. Derma V can help reduce visible vessels and even out the complexion. To keep the result, it is important to avoid overheating, sun and products that irritate the skin.',
      ),
    },
    {
      title: L("Rozaseyadagi qizarish", 'Покраснение при розацеа', 'Redness in rosacea'),
      text: L(
        "Rozaseyaning qon tomir komponenti — doimiy qizarish va ko'rinadigan tomirlar — lazer ta'siriga javob berishi mumkin. Biroq lazer rozaseyani butunlay davolamaydi: u dermatolog tayinlagan kompleks davolashning bir qismi bo'lib, qo'zg'atuvchi omillarni nazorat qilish va to'g'ri parvarish bilan birga olib boriladi. Faol yallig'lanish bosqichida avval uni tinchlantirish kerak bo'lishi mumkin.",
        'Сосудистый компонент розацеа — стойкое покраснение и видимые сосуды — может отвечать на лазерное воздействие. Однако лазер не излечивает розацеа полностью: это часть комплексного лечения, назначенного дерматологом, вместе с контролем провоцирующих факторов и правильным уходом. В стадии активного воспаления сначала может потребоваться его купирование.',
        'The vascular component of rosacea — persistent redness and visible vessels — can respond to laser treatment. However, the laser does not cure rosacea: it is one part of a combined treatment plan prescribed by a dermatologist, together with controlling triggers and proper skincare. If there is active inflammation, it may need to be calmed first.',
      ),
    },
    {
      title: L("Pigment dog'lar va yuz pigmentatsiyasi", 'Пигментные пятна и пигментация лица', 'Pigment spots and facial pigmentation'),
      text: L(
        "Derma V quyosh va yoshga bog'liq ayrim yuzaki pigment dog'lar hamda butun yuzdagi notekis pigmentatsiyani korreksiya qilishda qo'llanilishi mumkin. Har bir dog' oldindan dermatoskopiya bilan tekshiriladi: shubhali hosilalar lazer bilan davolanmaydi va alohida tekshiruvni talab qiladi. Melasmada lazer ta'siri faqat shifokor qaroriga ko'ra va alohida ehtiyotkorlik bilan ko'rib chiqiladi.",
        'Derma V может применяться для коррекции некоторых поверхностных солнечных и возрастных пигментных пятен, а также неравномерной пигментации всего лица. Каждое пятно предварительно проверяется дерматоскопией: подозрительные образования лазером не обрабатывают — они требуют отдельного обследования. При мелазме лазерное воздействие рассматривается только по решению врача и с особой осторожностью.',
        'Derma V can be used to correct some superficial sun and age spots, as well as uneven pigmentation across the face. Every spot is checked with dermatoscopy first: suspicious lesions are not treated with the laser and need a separate examination. In melasma, laser treatment is considered only at the doctor\'s discretion and with particular caution.',
      ),
    },
    {
      title: L("Tanadagi mayda yuzaki tomirlar", 'Мелкие поверхностные сосуды на теле', 'Small superficial vessels on the body'),
      text: L(
        "Bo'yin, dekolte va tananing boshqa qismlaridagi mayda yuzaki tomir o'zgarishlari ham shifokor ko'rigidan keyin lazer bilan davolanishi mumkin. Oyoqlardagi tomirlar alohida baholanadi: chuqur venoz muammolarda lazer yordam bermaydi va avval tomir tizimini tekshirish zarur.",
        'Мелкие поверхностные сосудистые изменения на шее, декольте и других участках тела также могут лечиться лазером после осмотра врача. Сосуды на ногах оцениваются отдельно: при глубоких венозных проблемах лазер не помогает, и сначала необходимо обследование сосудистой системы.',
        'Small superficial vascular changes on the neck, décolleté and other parts of the body can also be treated with the laser after a doctor\'s examination. Leg vessels are assessed separately: the laser does not help with deeper venous problems, and the vascular system needs to be examined first.',
      ),
    },
  ],
  suitability: {
    intro: L(
      "Derma V yuzida yoki tanasida ko'rinadigan mayda tomirlar, doimiy qizarish yoki pigment dog'lar bezovta qiladigan kattalar uchun mos variant bo'lishi mumkin. Lazerni tanlashdan oldin shifokor quyidagilarni baholaydi:",
      'Derma V может быть подходящим вариантом для взрослых, которых беспокоят видимые мелкие сосуды, стойкое покраснение или пигментные пятна на лице или теле. Перед выбором лазера врач оценивает:',
      'Derma V may suit adults who are bothered by visible small vessels, persistent redness or pigment spots on the face or body. Before choosing laser treatment, the doctor assesses:',
    ),
    checks: [
      L("Qizarishning sababi — qon tomir, yallig'lanish yoki boshqa holat", 'Причину покраснения — сосудистую, воспалительную или иную', 'The cause of the redness — vascular, inflammatory or something else'),
      L("Tomirlarning kattaligi, chuqurligi va joylashuvi", 'Размер, глубину и расположение сосудов', 'The size, depth and location of the vessels'),
      L("Pigment dog'larining tabiati — dermatoskopiya bo'yicha", 'Природу пигментных пятен — по данным дерматоскопии', 'The nature of pigment spots, based on dermatoscopy'),
      L("Teri fototipi va yaqinda quyoshda qorayganlik", 'Фототип кожи и наличие недавнего загара', 'Skin phototype and any recent tan'),
      L("Qabul qilinayotgan dorilar va umumiy salomatlik holati", 'Принимаемые лекарства и общее состояние здоровья', 'Current medications and general health'),
    ],
  },
  contraindications: {
    intro: L(
      "Lazer muolajasini o'tkazish imkoniyati individual belgilanadi. Derma V ni kechiktirish yoki undan voz kechishning asosiy sabablari:",
      'Возможность лазерной процедуры определяется индивидуально. Основные причины отложить лечение на Derma V или отказаться от него:',
      'Whether laser treatment is possible is decided individually. The main reasons to postpone or avoid Derma V treatment are:',
    ),
    items: [
      L("Yaqinda olingan zagar, solyariy yoki avtozagar", 'Свежий загар, солярий или автозагар', 'A fresh tan, tanning beds or self-tanner'),
      L("Ishlov beriladigan zonadagi faol infeksiyalar, jumladan gerpesning qo'zishi", 'Активные инфекции в зоне обработки, включая обострение герпеса', 'Active infections in the treatment area, including a herpes flare-up'),
      L("Ta'sir zonasida kuchli yallig'lanish yoki teri shikastlanishi", 'Выраженное воспаление или повреждение кожи в зоне воздействия', 'Marked inflammation or damaged skin in the treatment area'),
      L("Hali tekshirilmagan shubhali dog'lar va hosilalar", 'Подозрительные пятна и образования, которые ещё не обследованы', 'Suspicious spots and lesions that have not yet been examined'),
      L("Yorug'likka sezuvchanlikni oshiradigan dorilar va kasalliklar", 'Лекарства и заболевания, повышающие чувствительность к свету', 'Medications and conditions that increase sensitivity to light'),
      L("To'qimalar bitishi buzilishi bilan kechadigan holatlar", 'Состояния с нарушением заживления тканей', 'Conditions that impair tissue healing'),
      L("Homiladorlik va emizish davri — rejali estetik muolajalar odatda kechiktiriladi", 'Беременность и грудное вскармливание — плановые эстетические процедуры обычно откладывают', 'Pregnancy and breastfeeding, when elective aesthetic procedures are usually postponed'),
      L("Shifokor lazer ta'sirini xavfli deb hisoblagan boshqa individual holatlar", 'Другие индивидуальные обстоятельства, при которых врач считает лазерное воздействие небезопасным', 'Other individual circumstances in which the doctor considers laser treatment unsafe'),
    ],
    note: L(
      "Qon ivishiga ta'sir qiluvchi dorilar qabul qilinganda, keloid chandiqlarga moyillikda, tizimli retinoidlar qabul qilinganda, to'q fototipli terida va faol dermatologik kasalliklarda xavflar alohida baholanadi. Hech qachon dorini o'zingiz to'xtatmang — bu haqda shifokor bilan maslahatlashing.",
      'При приёме препаратов, влияющих на свёртываемость крови, склонности к келоидным рубцам, приёме системных ретиноидов, тёмном фототипе кожи и активных дерматологических заболеваниях риски оцениваются отдельно. Никогда не отменяйте лекарства самостоятельно — обсудите это с врачом.',
      'Medications that affect blood clotting, a tendency to keloid scarring, systemic retinoid use, dark skin phototypes and active skin diseases all require a separate risk assessment. Never stop a medication on your own — discuss it with your doctor.',
    ),
  },
  steps: [
    {
      title: L("Dermatolog ko'rigi", 'Осмотр дерматолога', 'Dermatologist examination'),
      text: L(
        "Shifokor terini ko'zdan kechiradi, qizarish va tomirlarning sababini aniqlaydi, pigment dog'larni dermatoskop bilan tekshiradi. Kasalliklar tarixi, dorilar va avvalgi muolajalar haqida so'raladi. Shundan keyin shifokor lazer mos keladimi yoki yo'qligini tushuntiradi.",
        'Врач осматривает кожу, выясняет причину покраснения и появления сосудов, проверяет пигментные пятна дерматоскопом. Уточняются история заболеваний, принимаемые лекарства и предыдущие процедуры. После этого врач объясняет, подходит ли лазерное лечение.',
        'The doctor examines the skin, identifies the cause of the redness and vessels, and checks pigment spots with a dermatoscope. You will be asked about your medical history, medications and previous procedures. The doctor then explains whether laser treatment is suitable.',
      ),
    },
    {
      title: L('Zonani belgilash va tayyorgarlik', 'Разметка зоны и подготовка', 'Marking the area and preparation'),
      text: L(
        "Teri makiyaj va kremlardan tozalanadi, ishlov beriladigan tomirlar va dog'lar aniqlanadi. Shifokor zona, fototip va vazifaga qarab lazer parametrlarini tanlaydi. Bemor va shifokor ko'zni himoya qiluvchi maxsus ko'zoynak taqadi.",
        'Кожу очищают от макияжа и кремов, определяют сосуды и пятна, которые будут обрабатываться. Врач подбирает параметры лазера с учётом зоны, фототипа и задачи. Пациент и врач надевают специальные защитные очки.',
        'The skin is cleansed of makeup and creams, and the vessels and spots to be treated are identified. The doctor sets the laser parameters based on the area, phototype and goal. Both patient and doctor wear special protective eyewear.',
      ),
    },
    {
      title: L("Lazer ta'siri", 'Лазерное воздействие', 'Laser treatment'),
      text: L(
        "Shifokor tanlangan tomirlar va dog'larga ketma-ket impulslar bilan ishlov beradi. Muolaja vaqtida issiqlik va teriga rezina tasma tekkandek qisqa chimchilash sezilishi mumkin. Noqulaylikni kamaytirish uchun teri sovutilishi mumkin; sezgilar kuchi sozlamalar va individual sezuvchanlikka bog'liq.",
        'Врач последовательно обрабатывает выбранные сосуды и пятна импульсами. Во время процедуры может ощущаться тепло и короткое пощёлкивание, как от резинки. Для уменьшения дискомфорта кожа может охлаждаться; интенсивность ощущений зависит от настроек и индивидуальной чувствительности.',
        'The doctor treats the selected vessels and spots with a series of pulses. During the procedure you may feel warmth and a brief snap, like a rubber band. The skin may be cooled to reduce discomfort; how strong it feels depends on the settings and your sensitivity.',
      ),
    },
    {
      title: L('Muolajadan keyingi holat', 'Состояние сразу после процедуры', 'Right after the procedure'),
      text: L(
        "Ishlov berilgan joyda qizarish va biroz shish paydo bo'lishi mumkin, ayrim tomirlar darhol xiralashadi. Pigment dog'lar vaqtincha qorayib, keyingi kunlarda ko'chib tushadi. Kamdan-kam hollarda mayda qobiqchalar yoki ko'karish kuzatiladi — ular odatda o'z-o'zidan o'tib ketadi.",
        'В обработанной зоне могут появиться покраснение и небольшой отёк, некоторые сосуды бледнеют сразу. Пигментные пятна временно темнеют и в последующие дни отшелушиваются. В редких случаях возникают мелкие корочки или синячки — обычно они проходят самостоятельно.',
        'Redness and slight swelling may appear in the treated area, and some vessels fade immediately. Pigment spots temporarily darken and flake off over the following days. Occasionally small crusts or bruises appear — they usually resolve on their own.',
      ),
    },
    {
      title: L('Parvarish va kuzatuv', 'Уход и наблюдение', 'Aftercare and follow-up'),
      text: L(
        "Bir necha kun issiq vanna, sauna, faol sport va spirtli ichimliklardan saqlanish, har kuni SPF ishlatish tavsiya etiladi. Takroriy seans kerakmi va qachon — buni shifokor teri reaksiyasini ko'rib chiqib belgilaydi.",
        'В течение нескольких дней рекомендуется избегать горячей ванны, сауны, интенсивного спорта и алкоголя, ежедневно использовать SPF. Нужна ли повторная процедура и когда — врач определяет, оценив реакцию кожи.',
        'For a few days you should avoid hot baths, saunas, intense exercise and alcohol, and use SPF every day. Whether a repeat session is needed, and when, is decided by the doctor after assessing how the skin has responded.',
      ),
    },
  ],
  results: {
    intro: L(
      "Ayrim tomirlar muolaja vaqtidayoq xiralashadi, ammo yakuniy natija bir necha hafta davomida, organizm bekilgan tomirlarni so'rib yuborgani sari shakllanadi. Kurs davomida quyidagilar kuzatilishi mumkin:",
      'Некоторые сосуды бледнеют уже во время процедуры, но окончательный результат формируется в течение нескольких недель — по мере того как организм рассасывает запаянные сосуды. В ходе лечения возможно:',
      'Some vessels fade during the procedure itself, but the final result develops over several weeks as the body clears the closed vessels. Over the course of treatment you may see:',
    ),
    items: [
      L("Ko'rinadigan tomirchalarning kamayishi yoki yo'qolishi", 'Уменьшение или исчезновение видимых сосудов', 'Visible vessels reducing or disappearing'),
      L("Doimiy qizarishning kamroq sezilishi", 'Уменьшение стойкого покраснения', 'Less persistent redness'),
      L("Ayrim pigment dog'larining xiralashishi", 'Осветление отдельных пигментных пятен', 'Some pigment spots fading'),
      L("Yuz rangining bir tekisroq bo'lishi", 'Более ровный цвет лица', 'A more even complexion'),
      L("Terining tinchroq va sog'lomroq ko'rinishi", 'Более спокойный и здоровый вид кожи', 'Calmer, healthier-looking skin'),
    ],
  },
  conclusion: [
    L(
      "Derma V (Lutronic) — qon tomir yulduzchalari, kuperoza, rozaseyadagi qizarish va ayrim pigment dog'lar bilan aniq, nuqtali ishlashga imkon beradigan lazer tizimi. Natija tomirlar va pigmentning turi, teri holati va individual reaksiyaga bog'liq; yangi tomirlar paydo bo'lishiga moyillik saqlanishi mumkin, shuning uchun hech qanday usul abadiy natijani kafolatlamaydi.",
      'Derma V (Lutronic) — лазерная система, позволяющая точно и точечно работать с сосудистыми звёздочками, куперозом, покраснением при розацеа и отдельными пигментными пятнами. Результат зависит от типа сосудов и пигмента, состояния кожи и индивидуальной реакции; склонность к появлению новых сосудов может сохраняться, поэтому ни один метод не гарантирует пожизненного результата.',
      'Derma V (Lutronic) is a laser system for precise, targeted treatment of spider veins, couperose, rosacea-related redness and some pigment spots. Results depend on the type of vessels and pigment, the skin\'s condition and individual response; the tendency to form new vessels may remain, so no method can guarantee a permanent result.',
    ),
    L(
      "Radeski klinikasida Derma V bilan davolash dermatolog konsultatsiyasidan boshlanadi: shifokor qizarish sababini aniqlaydi, dog'larni dermatoskopiya bilan tekshiradi, lazer sizga mos keladimi yoki yo'qligini baholaydi va davolash rejasini tuzadi. Seanslar soni va protokolni shifokor belgilaydi.",
      'В клинике Radeski лечение на Derma V начинается с консультации дерматолога: врач выясняет причину покраснения, проверяет пятна дерматоскопией, оценивает, подходит ли вам лазер, и составляет план лечения. Количество сеансов и протокол определяет врач.',
      'At Radeski, treatment with Derma V starts with a dermatologist consultation: the doctor identifies the cause of the redness, checks spots with dermatoscopy, assesses whether the laser suits you and draws up a treatment plan. The number of sessions and the protocol are set by the doctor.',
    ),
  ],
  faq: [
    {
      question: L("Lazer bilan tomirlarni olib tashlash og'riqlimi?", 'Больно ли удалять сосуды лазером?', 'Is laser vein removal painful?'),
      answer: L(
        "Ko'pchilik bemorlar sezgini issiqlik va teriga rezina tasma tekkandek qisqa chimchilash deb tasvirlaydi. Burun qanotlari kabi sezgir joylarda noqulaylik kuchliroq bo'lishi mumkin. Teri sovutilishi noqulaylikni kamaytiradi; odatda muolaja yaxshi o'tkaziladi.",
        'Большинство пациентов описывают ощущения как тепло и короткий щелчок, будто по коже щёлкнули резинкой. На чувствительных участках, например на крыльях носа, дискомфорт может быть сильнее. Охлаждение кожи уменьшает неприятные ощущения; обычно процедура переносится хорошо.',
        'Most patients describe it as warmth and a brief snap, like a rubber band flicked against the skin. In sensitive areas such as the sides of the nose, it may feel stronger. Cooling the skin reduces discomfort; the procedure is usually well tolerated.',
      ),
    },
    {
      question: L('Necha seans kerak?', 'Сколько нужно процедур на Derma V?', 'How many sessions are needed?'),
      answer: L(
        "Bu individual. Ayrim yakka tomirlar bitta seansdan keyin sezilarli kamayadi, kuperoza, rozaseya va keng tarqalgan qizarishda esa odatda bir necha seans kerak bo'ladi. Seanslar soni va ular orasidagi interval shifokor tomonidan teri reaksiyasiga qarab belgilanadi.",
        'Индивидуально. Отдельные единичные сосуды могут заметно уменьшиться после одной процедуры, а при куперозе, розацеа и распространённом покраснении обычно требуется несколько сеансов. Количество процедур и интервал между ними врач определяет с учётом реакции кожи.',
        'It is individual. Some single vessels fade noticeably after one session, while couperose, rosacea and widespread redness usually need several sessions. The doctor sets the number of sessions and the interval between them based on how the skin responds.',
      ),
    },
    {
      question: L("Derma V ni yozda qilish mumkinmi?", 'Можно ли делать лазер на сосуды летом?', 'Can I have vascular laser treatment in summer?'),
      answer: L(
        "Asosiy shart — terida yangi zagar bo'lmasligi, chunki qoraygan teri nurni ko'proq yutadi va asoratlar xavfi oshadi. Teri qoraymagan bo'lsa va bemor quyoshdan qat'iy himoyalanishga tayyor bo'lsa, shifokor yozda ham muolajaga ruxsat berishi mumkin. Yakuniy qarorni shifokor qabul qiladi.",
        'Главное условие — отсутствие свежего загара, поскольку загорелая кожа сильнее поглощает излучение и риск осложнений возрастает. Если кожа не загорелая и пациент готов строго защищаться от солнца, врач может разрешить процедуру и летом. Окончательное решение принимает врач.',
        'The main condition is that you do not have a fresh tan, because tanned skin absorbs more light and the risk of complications rises. If your skin is not tanned and you are ready to protect it strictly from the sun, the doctor may allow treatment in summer too. The final decision is the doctor\'s.',
      ),
    },
    {
      question: L("Tomirlar qaytadan paydo bo'ladimi?", 'Появятся ли сосуды снова?', 'Will the vessels come back?'),
      answer: L(
        "Bekilgan tomir odatda qaytib tiklanmaydi, ammo kuperoza va rozaseyaga moyillik saqlanib qoladi, shuning uchun vaqt o'tishi bilan yangi tomirlar paydo bo'lishi mumkin. Quyoshdan himoyalanish, haddan tashqari issiqlik va qo'zg'atuvchi omillardan saqlanish natijani uzoqroq saqlashga yordam beradi. Zarur bo'lsa, shifokor qo'llab-quvvatlovchi seans tavsiya qiladi.",
        'Запаянный сосуд, как правило, не восстанавливается, однако склонность к куперозу и розацеа сохраняется, поэтому со временем могут появиться новые сосуды. Защита от солнца, отказ от перегрева и контроль провоцирующих факторов помогают дольше сохранить результат. При необходимости врач рекомендует поддерживающую процедуру.',
        'A vessel that has been closed usually does not reopen, but the tendency to couperose and rosacea remains, so new vessels may appear over time. Sun protection, avoiding overheating and controlling triggers help the result last longer. If needed, the doctor will recommend a maintenance session.',
      ),
    },
    {
      question: L("Muolajadan keyin qanday ko'rinaman?", 'Как я буду выглядеть после процедуры?', 'What will I look like after the procedure?'),
      answer: L(
        "Odatda bir necha soatdan bir necha kungacha qizarish va yengil shish saqlanadi; ular yengil makiyaj bilan yashirilishi mumkin, agar shifokor ruxsat bersa. Pigment dog'lar vaqtincha qorayadi. Kamdan-kam hollarda mayda ko'karishlar paydo bo'ladi. Ko'pchilik bemorlar kundalik ishlariga tez qaytadi.",
        'Обычно от нескольких часов до нескольких дней сохраняются покраснение и лёгкая отёчность; если врач разрешит, их можно скрыть лёгким макияжем. Пигментные пятна временно темнеют. В редких случаях появляются небольшие синячки. Большинство пациентов быстро возвращаются к обычным делам.',
        'Redness and mild swelling usually last from a few hours to a few days; if the doctor allows, they can be covered with light makeup. Pigment spots temporarily darken. Small bruises occasionally appear. Most patients return to their usual activities quickly.',
      ),
    },
  ],
};
