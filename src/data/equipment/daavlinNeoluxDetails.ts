import type { ClinicEquipmentDetails, LocalizedEquipmentText } from '../clinicEquipmentCatalog';

function L(uz: string, ru: string, en: string): LocalizedEquipmentText {
  return { uz, ru, en };
}

/** Long sections of the Daavlin NeoLux phototherapy page (loaded with the page, not the app shell). */
export const DAAVLIN_NEOLUX_DETAILS: ClinicEquipmentDetails = {
  about: [
    L(
      "Fototerapiya — teriga ultrabinafsha nurlarning ma'lum diapazoni bilan qat'iy dozalangan holda ta'sir qilish orqali surunkali teri kasalliklarini davolash usuli. Daavlin NeoLux — Daavlin kompaniyasining tor polosali UVB (NB-UVB) fototerapiya apparati bo'lib, dermatologiya amaliyotida aynan shu maqsadda qo'llaniladi.",
      'Фототерапия — метод лечения хронических заболеваний кожи строго дозированным ультрафиолетовым излучением определённого диапазона. Daavlin NeoLux — аппарат узкополосной UVB-фототерапии (NB-UVB) компании Daavlin, который используется в дерматологической практике именно для этой задачи.',
      'Phototherapy treats chronic skin conditions with carefully measured doses of ultraviolet light in a specific range. Daavlin NeoLux is a narrow-band UVB (NB-UVB) phototherapy device made by Daavlin and used in dermatology for exactly this purpose.',
    ),
    L(
      "Tor polosali UVB dermatologiyada eng ko'p qo'llaniladigan fototerapiya turlaridan biri. U psoriaz, vitiligo, atopik dermatit, ekzema va ayrim boshqa surunkali dermatozlarda — ayniqsa toshmalar keng maydonni egallaganda yoki faqat tashqi vositalar yetarli bo'lmaganda — tavsiya etilishi mumkin. Odatda bu usul nurlanishga sezuvchanlikni oshiradigan tabletkalarsiz o'tkaziladi.",
      'Узкополосный UVB — один из наиболее часто применяемых в дерматологии видов фототерапии. Его могут рекомендовать при псориазе, витилиго, атопическом дерматите, экземе и некоторых других хронических дерматозах — особенно если высыпания занимают большую площадь или одних наружных средств недостаточно. Обычно метод проводится без приёма таблеток, повышающих чувствительность к излучению.',
      'Narrow-band UVB is one of the most widely used forms of phototherapy in dermatology. It may be recommended for psoriasis, vitiligo, atopic dermatitis, eczema and some other chronic skin conditions, especially when the rash covers a large area or topical treatment alone is not enough. It is usually done without tablets that make the skin more sensitive to light.',
    ),
    L(
      "Fototerapiya — kursli davolash: natija bitta seansdan keyin emas, balki muntazam seanslar davomida asta-sekin shakllanadi. Radeski klinikasida kurs dermatolog ko'rigidan boshlanadi; nur dozasi, seanslar chastotasi va kurs davomiyligi tashxis, teri fototipi va terining nurga javobiga qarab individual belgilanadi.",
      'Фототерапия — курсовое лечение: результат формируется не после одного сеанса, а постепенно, на фоне регулярных процедур. В клинике Radeski курс начинается с осмотра дерматолога; доза облучения, частота сеансов и длительность курса подбираются индивидуально с учётом диагноза, фототипа кожи и её реакции на облучение.',
      'Phototherapy is given as a course: results build gradually over regular sessions rather than after a single one. At Radeski, the course starts with a dermatologist examination, and the dose, how often you come in and how long the course lasts are set individually based on the diagnosis, your skin phototype and how your skin responds to the light.',
    ),
  ],
  howItWorks: {
    paragraphs: [
      L(
        "Tor polosali UVB nurlari terining yuzaki qatlamlariga ta'sir qiladi. Ular yallig'lanishda ishtirok etadigan immun hujayralar faolligini pasaytiradi, psoriazda esa teri hujayralarining haddan tashqari tez bo'linishini sekinlashtiradi. Vitiligoda nurlanish pigment hujayralari — melanotsitlarni rag'batlantirib, dog'larda rang qaytishiga yordam berishi mumkin.",
        'Узкополосное UVB-излучение воздействует на поверхностные слои кожи. Оно снижает активность иммунных клеток, участвующих в воспалении, а при псориазе замедляет избыточно быстрое деление клеток кожи. При витилиго облучение может стимулировать пигментные клетки — меланоциты — и способствовать возвращению цвета в очагах.',
        'Narrow-band UVB acts on the upper layers of the skin. It calms the immune cells involved in inflammation and, in psoriasis, slows down the overly fast division of skin cells. In vitiligo, the light may stimulate pigment cells (melanocytes) and help colour return to the patches.',
      ),
      L(
        "Birinchi seanslarda doza past bo'ladi va terining javobiga qarab asta-sekin oshiriladi. Bu davolash ta'siri va kuyish xavfini kamaytirish o'rtasida muvozanat saqlashga imkon beradi. Seans vaqtida ko'zlar maxsus himoya ko'zoynagi bilan himoyalanadi, davolash talab qilinmaydigan sohalar esa zarur bo'lsa yopiladi.",
        'На первых сеансах доза небольшая и постепенно повышается в зависимости от реакции кожи. Это позволяет соблюдать баланс между лечебным эффектом и снижением риска ожога. Во время сеанса глаза защищают специальными очками, а участки, не требующие лечения, при необходимости закрывают.',
        'The first sessions use a low dose, which is then raised step by step depending on how the skin reacts. This balances the treatment effect against the risk of burning. During the session your eyes are protected with special goggles, and areas that do not need treatment are covered when necessary.',
      ),
    ],
    effects: [
      L("Yallig'lanish va qizarishning kamayishi", 'Уменьшение воспаления и покраснения', 'Less inflammation and redness'),
      L("Psoriaz blyashkalarining yupqalashishi va po'st tashlashning kamayishi", 'Уменьшение толщины псориатических бляшек и шелушения', 'Thinner psoriasis plaques and less scaling'),
      L("Qichishishning yengillashishi", 'Ослабление зуда', 'Less itching'),
      L("Vitiligo dog'larida pigment qaytishini rag'batlantirish", 'Стимуляция репигментации очагов витилиго', 'Stimulation of repigmentation in vitiligo patches'),
      L("Ayrim bemorlarda remissiyani qo'llab-quvvatlash", 'Поддержка ремиссии у части пациентов', 'Support for remission in some patients'),
    ],
  },
  indicationsIntro: L(
    "NeoLux fototerapiyasi quyidagi surunkali teri kasalliklarida ko'rib chiqilishi mumkin. Usulni qo'llash qarori tashxis tasdiqlangandan so'ng dermatolog tomonidan qabul qilinadi.",
    'Фототерапия NeoLux может рассматриваться при следующих хронических заболеваниях кожи. Решение о применении метода принимает дерматолог после подтверждения диагноза.',
    'NeoLux phototherapy may be considered for the following chronic skin conditions. A dermatologist decides whether to use it once the diagnosis has been confirmed.',
  ),
  indications: [
    {
      title: L('Psoriaz', 'Псориаз', 'Psoriasis'),
      text: L(
        "Blyashkali psoriazda, ayniqsa toshmalar tananing katta qismini egallaganda, tor polosali UVB keng qo'llaniladigan usullardan biri. Nurlanish blyashkalarning qalinligi, qizarishi va po'st tashlashini kamaytirishga yordam berishi mumkin. Kurs davomida tashqi davolash odatda davom ettiriladi.",
        'При бляшечном псориазе, особенно когда высыпания занимают значительную часть тела, узкополосный UVB относится к широко применяемым методам. Облучение может помочь уменьшить толщину бляшек, покраснение и шелушение. Наружное лечение во время курса, как правило, продолжается.',
        'For plaque psoriasis, especially when it covers a large part of the body, narrow-band UVB is one of the widely used treatments. The light can help reduce plaque thickness, redness and scaling. Topical treatment usually continues during the course.',
      ),
    },
    {
      title: L('Vitiligo', 'Витилиго', 'Vitiligo'),
      text: L(
        "Vitiligoda fototerapiya dog'larda pigment qaytishini rag'batlantirish uchun qo'llaniladi. Natija sekin shakllanadi va dog'larning joylashuvi, kasallik davomiyligi va faolligiga bog'liq: yuz va bo'yindagi dog'lar ko'pincha qo'l barmoqlaridagi dog'larga qaraganda yaxshiroq javob beradi. Bu kasallikda uzoq kurs talab qilinishi mumkin.",
        'При витилиго фототерапия применяется для стимуляции репигментации очагов. Результат формируется медленно и зависит от локализации пятен, давности и активности заболевания: очаги на лице и шее часто отвечают лучше, чем на пальцах рук. При этом заболевании может потребоваться длительный курс.',
        'In vitiligo, phototherapy is used to encourage colour to return to the patches. Results come slowly and depend on where the patches are and how long and how actively the disease has been present: patches on the face and neck often respond better than those on the fingers. A long course may be needed.',
      ),
    },
    {
      title: L('Atopik dermatit va ekzema', 'Атопический дерматит и экзема', 'Atopic dermatitis and eczema'),
      text: L(
        "Kasallik surunkali kechib, emolentlar va tashqi davolash yetarli nazoratni ta'minlamasa, shifokor fototerapiyani qo'shishni taklif qilishi mumkin. U yallig'lanish va qichishishni kamaytirishga yordam beradi. Kasallik keskin qo'zigan davrda fototerapiya odatda kechiktiriladi.",
        'Если заболевание протекает хронически, а эмоленты и наружная терапия не обеспечивают достаточного контроля, врач может предложить добавить фототерапию. Она помогает уменьшить воспаление и зуд. В период острого обострения фототерапию обычно откладывают.',
        'If the condition is chronic and emollients and topical treatment are not keeping it under control, the doctor may suggest adding phototherapy. It helps reduce inflammation and itching. During an acute flare, phototherapy is usually postponed.',
      ),
    },
    {
      title: L('Surunkali qichishish', 'Хронический зуд', 'Chronic itching'),
      text: L(
        "Ayrim hollarda uzoq davom etadigan qichishishda ham tor polosali UVB qo'llaniladi. Avval qichishish sababini aniqlash muhim, chunki u nafaqat teri, balki ichki a'zolar kasalliklari bilan ham bog'liq bo'lishi mumkin.",
        'В отдельных случаях узкополосный UVB применяют и при длительном зуде. Предварительно важно установить его причину, поскольку зуд может быть связан не только с кожей, но и с заболеваниями внутренних органов.',
        'In some cases narrow-band UVB is also used for long-lasting itching. It is important to find the cause first, because itching can be linked not only to the skin but also to conditions of the internal organs.',
      ),
    },
    {
      title: L('Boshqa surunkali dermatozlar', 'Другие хронические дерматозы', 'Other chronic skin conditions'),
      text: L(
        "Fototerapiya ayrim boshqa surunkali teri kasalliklarida, masalan qizil yassi temiratkining ayrim shakllarida ham ko'rib chiqilishi mumkin. Bunday holatlarda usulning maqsadga muvofiqligini dermatolog alohida baholaydi.",
        'Фототерапия может рассматриваться и при некоторых других хронических заболеваниях кожи, например при отдельных формах красного плоского лишая. В таких случаях целесообразность метода дерматолог оценивает индивидуально.',
        'Phototherapy may also be considered for some other chronic skin conditions, for example certain forms of lichen planus. In such cases the dermatologist assesses individually whether the method makes sense.',
      ),
    },
  ],
  suitability: {
    intro: L(
      "NeoLux fototerapiyasi tashxisi tasdiqlangan surunkali teri kasalligi bo'lgan va kursga muntazam qatnashish imkoniga ega bemorlar uchun mos bo'lishi mumkin. Kursni boshlashdan oldin shifokor quyidagilarni baholaydi:",
      'Фототерапия NeoLux может подойти пациентам с подтверждённым хроническим заболеванием кожи, которые могут регулярно посещать процедуры. Перед началом курса врач оценивает:',
      'NeoLux phototherapy may suit patients with a confirmed chronic skin condition who are able to attend sessions regularly. Before the course begins, the doctor assesses:',
    ),
    checks: [
      L("Tashxis va kasallikning faollik darajasi", 'Диагноз и степень активности заболевания', 'The diagnosis and how active the disease is'),
      L("Teri fototipi va quyoshda kuyishga moyillik", 'Фототип кожи и склонность к солнечным ожогам', 'Skin phototype and tendency to sunburn'),
      L("Ilgari teri saratoni yoki atipik xollar bo'lgan-bo'lmagani", 'Наличие в прошлом рака кожи или атипичных родинок', 'Any history of skin cancer or atypical moles'),
      L("Terining yorug'likka sezuvchanligini oshirishi mumkin bo'lgan dorilar", 'Лекарства, которые могут повышать чувствительность кожи к свету', 'Medications that may make the skin more sensitive to light'),
      L("Avvalgi fototerapiya kurslari va ularning natijalari", 'Предыдущие курсы фототерапии и их результаты', 'Previous phototherapy courses and their results'),
    ],
  },
  contraindications: {
    intro: L(
      "Fototerapiyani o'tkazish imkoniyati individual belgilanadi. Kursni kechiktirish yoki undan voz kechishning asosiy sabablari:",
      'Возможность проведения фототерапии определяется индивидуально. Основные причины отложить курс или отказаться от него:',
      'Whether phototherapy is possible is decided individually. The main reasons to postpone or avoid a course are:',
    ),
    items: [
      L("Hozirda yoki ilgari melanoma yoki boshqa teri saratoni", 'Меланома или другой рак кожи в настоящем или в прошлом', 'Current or past melanoma or other skin cancer'),
      L("Yorug'likka sezuvchanlik bilan kechadigan kasalliklar, masalan qizil yuguruk (volchanka) yoki porfiriya", 'Заболевания, протекающие с повышенной светочувствительностью, например красная волчанка или порфирия', 'Conditions involving light sensitivity, such as lupus or porphyria'),
      L("Terining yorug'likka sezuvchanligini oshiradigan dorilarni qabul qilish", 'Приём лекарств, повышающих чувствительность кожи к свету', 'Taking medicines that increase the skin\'s sensitivity to light'),
      L("Immunitetni sezilarli pasaytiradigan davolash", 'Лечение, значительно подавляющее иммунитет', 'Treatment that significantly suppresses the immune system'),
      L("Hali tekshirilmagan shubhali teri hosilalari", 'Подозрительные новообразования кожи, которые ещё не обследованы', 'Suspicious skin lesions that have not yet been examined'),
      L("Nurlanish zonasida yangi quyosh kuyishi yoki kuchli yallig'lanish", 'Свежий солнечный ожог или выраженное воспаление в зоне облучения', 'A fresh sunburn or marked inflammation in the treatment area'),
      L("Ayrim ko'z kasalliklari, jumladan katarakta — alohida baholashni talab qiladi", 'Некоторые заболевания глаз, включая катаракту, — требуют отдельной оценки', 'Certain eye conditions, including cataracts, which need a separate assessment'),
      L("Shifokor fototerapiyani xavfli deb hisoblagan boshqa individual holatlar", 'Иные индивидуальные обстоятельства, при которых врач считает фототерапию небезопасной', 'Other individual circumstances in which the doctor considers phototherapy unsafe'),
    ],
    note: L(
      "Homiladorlik, bolalik yoshi, ko'p sonli xollar va ilgari o'tkazilgan nur bilan davolash holatlarida xavf va foyda alohida baholanadi. Ultrabinafsha nurlanishning umumiy dozasi ko'p yillar davomida to'planishi mumkin, shuning uchun uzoq yoki takroriy kurslarda terini muntazam ko'rikdan o'tkazish tavsiya etiladi.",
      'При беременности, в детском возрасте, при большом количестве родинок и после ранее проведённого лучевого лечения соотношение пользы и риска оценивается отдельно. Суммарная доза ультрафиолета может накапливаться годами, поэтому при длительных или повторных курсах рекомендуется регулярный осмотр кожи.',
      'In pregnancy, in children, in people with many moles and after previous radiation treatment, the balance of benefit and risk is assessed separately. The total ultraviolet dose can build up over the years, so regular skin checks are recommended for long or repeated courses.',
    ),
  },
  steps: [
    {
      title: L("Dermatolog ko'rigi", 'Осмотр дерматолога', 'Dermatologist examination'),
      text: L(
        "Shifokor tashxisni tasdiqlaydi, zararlangan sohalarni baholaydi, kasallik tarixi va qabul qilinayotgan dorilar haqida so'raydi. Fototerapiya sizga mos kelishi va kurs maqsadi muhokama qilinadi.",
        'Врач подтверждает диагноз, оценивает поражённые зоны, уточняет историю заболевания и принимаемые лекарства. Обсуждается, подходит ли вам фототерапия и какова цель курса.',
        'The doctor confirms the diagnosis, assesses the affected areas and asks about your medical history and medications. Together you discuss whether phototherapy suits you and what the course is meant to achieve.',
      ),
    },
    {
      title: L('Dozani belgilash', 'Подбор дозы', 'Setting the dose'),
      text: L(
        "Teri fototipi va kasallik turiga qarab boshlang'ich doza tanlanadi. Keyingi seanslarda doza terining javobiga qarab asta-sekin o'zgartiriladi.",
        'С учётом фототипа кожи и вида заболевания подбирается начальная доза. На последующих сеансах доза постепенно меняется в зависимости от реакции кожи.',
        'A starting dose is chosen based on your skin phototype and the condition being treated. In later sessions the dose is adjusted gradually according to how your skin responds.',
      ),
    },
    {
      title: L('Fototerapiya seansi', 'Сеанс фототерапии', 'The phototherapy session'),
      text: L(
        "Bemor himoya ko'zoynagini taqadi, davolash talab qilinmaydigan sohalar zarur bo'lsa yopiladi. Nurlanish qisqa vaqt davom etadi va odatda og'riqsiz kechadi; ba'zan yengil iliqlik seziladi.",
        'Пациент надевает защитные очки, участки, не требующие лечения, при необходимости закрываются. Облучение длится недолго и обычно проходит безболезненно; иногда ощущается лёгкое тепло.',
        'You put on protective goggles, and areas that do not need treatment are covered if necessary. The exposure is short and usually painless; sometimes you may feel slight warmth.',
      ),
    },
    {
      title: L('Kurs davomida kuzatuv', 'Наблюдение в ходе курса', 'Monitoring during the course'),
      text: L(
        "Har bir seans oldidan terining avvalgi nurlanishga javobi so'raladi. Qizarish, achishish yoki qichishish kuchaysa, shifokor dozani kamaytiradi yoki seansni ko'chiradi. Vaqti-vaqti bilan natija baholanadi va kurs rejasi tuzatiladi.",
        'Перед каждым сеансом уточняется, как кожа отреагировала на предыдущее облучение. При выраженном покраснении, жжении или усилении зуда врач снижает дозу или переносит сеанс. Периодически результат оценивается и план курса корректируется.',
        'Before each session you are asked how your skin reacted to the previous one. If there is marked redness, burning or more itching, the doctor lowers the dose or moves the session. The result is reviewed regularly and the plan adjusted.',
      ),
    },
    {
      title: L('Uyda parvarish', 'Домашний уход', 'Care at home'),
      text: L(
        "Kurs davomida terini namlantiruvchi vositalardan foydalanish va seans kunlari qo'shimcha quyosh nuri ta'siridan saqlanish tavsiya etiladi. Shifokor qaysi tashqi vositalarni davom ettirish mumkinligini tushuntiradi.",
        'Во время курса рекомендуется использовать увлажняющие средства и в дни сеансов избегать дополнительного солнечного облучения. Врач объяснит, какие наружные средства можно продолжать.',
        'During the course it is advisable to use moisturisers and to avoid extra sun exposure on treatment days. The doctor will explain which topical products you can keep using.',
      ),
    },
  ],
  results: {
    intro: L(
      "Fototerapiya natijasi asta-sekin, bir necha hafta davomida shakllanadi va kasallik turi, uning faolligi hamda kursga muntazam qatnashishga bog'liq. Natija kafolatlanmaydi, lekin kurs davomida quyidagilar kuzatilishi mumkin:",
      'Результат фототерапии формируется постепенно, в течение нескольких недель, и зависит от вида заболевания, его активности и регулярности посещения процедур. Результат не гарантируется, но в ходе курса возможно:',
      'Results from phototherapy develop gradually over several weeks and depend on the condition, how active it is and how regularly you attend. Results are not guaranteed, but during the course you may see:',
    ),
    items: [
      L("Toshmalar maydoni va qalinligining kamayishi", 'Уменьшение площади и толщины высыпаний', 'Smaller and thinner patches of rash'),
      L("Qichishish va noqulaylikning yengillashishi", 'Ослабление зуда и дискомфорта', 'Less itching and discomfort'),
      L("Vitiligo dog'larida asta-sekin rang paydo bo'lishi", 'Постепенное появление пигмента в очагах витилиго', 'Colour gradually returning to vitiligo patches'),
      L("Tashqi davolashga ehtiyojning kamayishi", 'Снижение потребности в наружной терапии', 'Less need for topical treatment'),
      L("Ayrim bemorlarda remissiya davrining uzayishi", 'Удлинение ремиссии у части пациентов', 'Longer remission in some patients'),
    ],
  },
  conclusion: [
    L(
      "Daavlin NeoLux bilan o'tkaziladigan tor polosali UVB fototerapiya — psoriaz, vitiligo, atopik dermatit va boshqa surunkali teri kasalliklarini davolashda qo'llaniladigan dermatologik usul. U kursli, dozasi nazorat qilinadigan davolash bo'lib, natija muntazamlik va shifokor tavsiyalariga amal qilishga bog'liq.",
      'Узкополосная UVB-фототерапия на аппарате Daavlin NeoLux — дерматологический метод лечения псориаза, витилиго, атопического дерматита и других хронических заболеваний кожи. Это курсовое лечение с контролируемой дозой, результат которого зависит от регулярности и соблюдения рекомендаций врача.',
      'Narrow-band UVB phototherapy with the Daavlin NeoLux is a dermatological treatment for psoriasis, vitiligo, atopic dermatitis and other chronic skin conditions. It is a course-based treatment with a controlled dose, and the result depends on regular attendance and following the doctor\'s advice.',
    ),
    L(
      "Radeski klinikasida fototerapiya dermatolog ko'rigi bilan boshlanadi. Shifokor usul sizga mosligini, kutilayotgan natijani va kurs davomida qanday kuzatuv o'tkazilishini tushuntirib beradi.",
      'В клинике Radeski фототерапия начинается с осмотра дерматолога. Врач объяснит, подходит ли вам метод, какого результата можно ожидать и как будет проходить наблюдение в ходе курса.',
      'At Radeski, phototherapy starts with a dermatologist examination. The doctor will explain whether the method suits you, what result you can realistically expect and how you will be monitored during the course.',
    ),
  ],
  faq: [
    {
      question: L("Fototerapiya og'riqlimi?", 'Больно ли делать фототерапию?', 'Is phototherapy painful?'),
      answer: L(
        "Yo'q, seansning o'zi odatda og'riqsiz: bemor faqat yengil iliqlikni sezishi mumkin. Seansdan keyin ba'zan quyoshda biroz kuygandek qizarish yoki quruqlik paydo bo'ladi. Kuchli qizarish yoki achishish bo'lsa, keyingi seansdan oldin shifokorga aytish kerak.",
        'Нет, сам сеанс обычно безболезненный: пациент может ощущать лишь лёгкое тепло. После сеанса иногда появляются покраснение, похожее на лёгкий солнечный ожог, или сухость. При выраженном покраснении или жжении нужно сообщить врачу до следующего сеанса.',
        'No, the session itself is usually painless; you may only feel slight warmth. Afterwards there may sometimes be redness like a mild sunburn, or dryness. If there is strong redness or burning, tell the doctor before your next session.',
      ),
    },
    {
      question: L('Necha seans kerak?', 'Сколько сеансов фототерапии нужно?', 'How many sessions are needed?'),
      answer: L(
        "Seanslar soni tashxis va terining javobiga bog'liq. Odatda seanslar haftasiga bir necha marta o'tkaziladi va kurs bir necha hafta davom etadi; vitiligoda u ko'pincha uzoqroq bo'ladi. Aniq chastota va kurs davomiyligini dermatolog belgilaydi.",
        'Количество сеансов зависит от диагноза и реакции кожи. Обычно процедуры проводятся несколько раз в неделю, а курс длится несколько недель; при витилиго он, как правило, дольше. Точную частоту и длительность курса определяет дерматолог.',
        'It depends on the diagnosis and how your skin responds. Sessions are usually held several times a week and a course lasts several weeks; for vitiligo it is often longer. The dermatologist sets the exact frequency and course length.',
      ),
    },
    {
      question: L('Bolalar uchun xavfsizmi?', 'Безопасна ли фототерапия для детей?', 'Is phototherapy safe for children?'),
      answer: L(
        "Tor polosali UVB ayrim hollarda bolalarda ham qo'llaniladi, ammo qaror alohida ehtiyotkorlik bilan qabul qilinadi. Bola himoya ko'zoynagini taqib, seans davomida tinch tura olishi kerak. Bolaga fototerapiya mos-mosligini faqat dermatolog ko'rikdan so'ng hal qiladi.",
        'Узкополосный UVB в ряде случаев применяется и у детей, однако решение принимается с особой осторожностью. Ребёнок должен носить защитные очки и спокойно стоять во время сеанса. Подходит ли фототерапия ребёнку, решает только дерматолог после осмотра.',
        'Narrow-band UVB is used in children in some cases, but the decision is made with particular care. The child needs to wear protective goggles and stay still during the session. Only a dermatologist can decide after an examination whether phototherapy is suitable for a child.',
      ),
    },
    {
      question: L("Fototerapiya solyariy yoki quyoshda toblanishdan farq qiladimi?", 'Чем фототерапия отличается от солярия или загара?', 'How is phototherapy different from a sunbed or sunbathing?'),
      answer: L(
        "Ha. Fototerapiyada davolash uchun tanlangan tor diapazondagi nur ishlatiladi, doza esa har bir seansda shifokor tomonidan nazorat qilinadi. Solyariy va quyosh nurlari boshqa spektrga ega va nazoratsiz ta'sir qiladi, shuning uchun ular fototerapiya o'rnini bosa olmaydi.",
        'Да. В фототерапии используется излучение узкого диапазона, выбранного для лечения, а доза контролируется врачом на каждом сеансе. Солярий и солнце имеют другой спектр и действуют бесконтрольно, поэтому заменить фототерапию они не могут.',
        'Yes. Phototherapy uses a narrow range of light chosen for treatment, and the dose is controlled by the doctor at every session. Sunbeds and sunlight have a different spectrum and are not controlled, so they cannot replace phototherapy.',
      ),
    },
    {
      question: L("Fototerapiya teri saratoni xavfini oshiradimi?", 'Повышает ли фототерапия риск рака кожи?', 'Does phototherapy increase the risk of skin cancer?'),
      answer: L(
        "Har qanday ultrabinafsha nurlanish kabi, fototerapiyada ham uzoq muddatli xavf umumiy dozaga bog'liq. Shu sababli shifokor dozani nazorat qiladi, kurslar sonini hisobga oladi va terini muntazam ko'rikdan o'tkazishni tavsiya qiladi. Ilgari teri saratoni bo'lgan bemorlarda usul odatda qo'llanilmaydi.",
        'Как и при любом ультрафиолетовом облучении, отдалённый риск при фототерапии связан с суммарной дозой. Поэтому врач контролирует дозу, учитывает количество курсов и рекомендует регулярно осматривать кожу. Пациентам, у которых ранее был рак кожи, метод, как правило, не применяют.',
        'As with any ultraviolet exposure, the long-term risk of phototherapy is linked to the total dose. That is why the doctor controls the dose, keeps track of the number of courses and recommends regular skin checks. The method is generally not used in people who have had skin cancer.',
      ),
    },
  ],
};
