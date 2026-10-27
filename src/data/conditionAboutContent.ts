// Own types and L() (like conditionWhyRadeskiCatalog.ts): serviceConditionDetailsCatalog imports
// this file, so importing from it here would be circular.
interface LocalizedConditionText {
  uz: string;
  ru: string;
  en: string;
}

interface LocalizedConditionSection {
  title: LocalizedConditionText;
  description: LocalizedConditionText;
}

function L(uz: string, ru: string, en: string): LocalizedConditionText {
  return { uz, ru, en };
}

export interface ConditionAbout {
  aboutTitle?: LocalizedConditionText;
  aboutOverview?: LocalizedConditionText;
  aboutSections?: LocalizedConditionSection[];
  aboutFooter?: LocalizedConditionText;
}

function S(title: LocalizedConditionText, description: LocalizedConditionText): LocalizedConditionSection {
  return { title, description };
}

/** Kasallik sahifalari uchun "kasallik haqida" bloki (uz / ru / en) */
export const CONDITION_ABOUT: Record<string, ConditionAbout> = {
  acne: {
    aboutTitle: L(
      'Akne (husnbuzar) haqida nimalarni bilish kerak',
      'Что нужно знать об акне (угревой болезни)',
      'What you should know about acne',
    ),
    aboutOverview: L(
      "Akne — yog' bezlari va soch follikulalarining surunkali kasalligi bo'lib, u ko'pincha o'smirlik davrida boshlanadi, ammo 25–35 yoshda va undan keyin ham davom etishi yoki birinchi marta paydo bo'lishi mumkin. Toshmalar asosan yuz, ko'krak va yelkada joylashadi va nafaqat teri holatiga, balki o'ziga bo'lgan ishonchga ham ta'sir qiladi. Akne davolash Farg'ona va Qo'qonda dermatologga eng ko'p murojaat qilinadigan yo'nalishlardan biri, chunki o'z-o'zidan davolashga urinishlar ko'pincha chandiq va dog'lar bilan yakunlanadi. Quyida kasallik belgilari, sabablari va shifokorga qachon borish kerakligi haqida asosiy ma'lumotlar keltirilgan.",
      'Акне, или угревая болезнь, — хроническое заболевание сальных желёз и волосяных фолликулов. Чаще всего оно начинается в подростковом возрасте, но нередко сохраняется у взрослых или впервые появляется в 25–35 лет и позже. Высыпания располагаются на лице, груди и спине и влияют не только на состояние кожи, но и на самооценку. Лечение угрей в Фергане и Коканде — один из самых частых поводов обратиться к дерматологу, ведь попытки справиться с прыщами самостоятельно нередко оставляют рубцы и пятна. Ниже — главное о симптомах, причинах и о том, когда пора к врачу.',
      'Acne is a chronic condition of the oil glands and hair follicles. It usually starts in the teenage years, but it often persists into adulthood or appears for the first time at 25–35 or later. Breakouts typically affect the face, chest and back, and they influence not only the skin but also self-confidence. Acne treatment is one of the most common reasons people in Fergana and Kokand see a dermatologist, because self-treatment and squeezing frequently leave scars and dark marks. Below is the essential information on symptoms, causes, severity and when to seek medical help.',
    ),
    aboutSections: [
      S(
        L('Belgilari va og\'irlik darajalari', 'Симптомы и степени тяжести', 'Symptoms and severity'),
        L(
          "Akne bir nechta turdagi elementlar bilan namoyon bo'ladi: yopiq komedonlar teri ostidagi mayda oq tugunchalar, ochiq komedonlar esa qora nuqtalar ko'rinishida bo'ladi. Yallig'langan papulalar qizil va og'riqli bo'rtiqlar, pustulalar esa yiringli uchli toshmalardir. Yengil shaklda asosan komedonlar va bir nechta papulalar uchraydi, o'rtacha shaklda yallig'langan toshmalar ko'payib, ko'krak va yelkaga tarqaladi. Og'ir shaklda teri ostida chuqur, og'riqli tugunlar va kistalar hosil bo'ladi — aynan ular chandiq qoldirish xavfi eng yuqori elementlardir. Kattalar aknesi alohida ajratiladi: u ko'pincha ayollarda iyak va jag' chizig'ida joylashadi va gormonal omillar bilan bog'liq.",
          'Акне проявляется несколькими типами элементов: закрытые комедоны выглядят как мелкие белые узелки под кожей, открытые — как чёрные точки. Воспалённые папулы — это красные болезненные бугорки, пустулы — прыщи с гнойной головкой. При лёгкой форме преобладают комедоны и единичные папулы, при средней воспалённых элементов становится много и они переходят на грудь и спину. При тяжёлой форме под кожей образуются глубокие болезненные узлы и кисты — именно они чаще всего оставляют рубцы. Отдельно выделяют акне взрослых: у женщин оно обычно располагается на подбородке и по линии нижней челюсти и связано с гормональными колебаниями.',
          'Acne shows up as several types of lesions: closed comedones (whiteheads) are small pale bumps under the skin, while open comedones look like blackheads. Inflamed papules are red, tender bumps, and pustules are pimples with a visible pus head. Mild acne consists mostly of comedones and a few papules; in moderate acne inflamed spots become numerous and spread to the chest and back. Severe acne produces deep, painful nodules and cysts under the skin — these carry the highest risk of scarring. Adult acne is a separate pattern: in women it typically sits on the chin and jawline and is linked to hormonal fluctuations.',
        ),
      ),
      S(
        L('Sabablari va kuchaytiruvchi omillar', 'Причины и провоцирующие факторы', 'Causes and triggers'),
        L(
          "Akne to'rtta asosiy jarayon natijasida rivojlanadi: yog' bezlarining ortiqcha faolligi, follikula og'zining shox hujayralar bilan tiqilib qolishi, Cutibacterium acnes bakteriyasining ko'payishi va yallig'lanish. Androgen gormonlar ta'sirini o'smirlik davri, hayz sikli, homiladorlik va polikistoz tuxumdon sindromi kabi holatlar kuchaytiradi. Irsiyat ham muhim: ota-onasida og'ir akne bo'lganlarda xavf yuqoriroq. Komedogen kosmetika, qalin tonal kremlar, toshmalarni siqish, stress, uyqu yetishmasligi va ba'zi dori vositalari holatni yomonlashtirishi mumkin. Ovqatlanishning roli individual: ba'zi bemorlarda shirinliklar va yuqori glikemik indeksli mahsulotlar kuchayishga sabab bo'ladi.",
          'Акне развивается в результате четырёх процессов: избыточной работы сальных желёз, закупорки устья фолликула ороговевшими клетками, размножения бактерий Cutibacterium acnes и воспаления. Действие андрогенов усиливается в подростковом возрасте, в определённые дни цикла, во время беременности и при таких состояниях, как синдром поликистозных яичников. Важна наследственность: если у родителей было тяжёлое акне, риск у детей выше. Ухудшать состояние могут комедогенная косметика, плотный тональный крем, выдавливание прыщей, стресс, недосып и некоторые лекарства. Роль питания индивидуальна: у части пациентов обострения связаны со сладким и продуктами с высоким гликемическим индексом.',
          'Acne develops through four processes: overactive oil glands, plugging of the follicle opening with dead skin cells, overgrowth of Cutibacterium acnes bacteria and inflammation. The effect of androgen hormones is stronger during puberty, at certain points of the menstrual cycle, in pregnancy and in conditions such as polycystic ovary syndrome. Genetics matter too: if your parents had severe acne, your risk is higher. Comedogenic cosmetics, heavy foundation, picking and squeezing, stress, lack of sleep and some medications can all make acne worse. The role of diet is individual: some patients notice flares after sweets and high-glycaemic foods.',
        ),
      ),
      S(
        L('Dermatolog tashxisni qanday qo\'yadi', 'Как дерматолог ставит диагноз', 'How a dermatologist diagnoses acne'),
        L(
          "Tashxis dermatolog ko'rigidan boshlanadi: shifokor toshmalar turi, joylashuvi, og'irligi va chandiqlar bor-yo'qligini baholaydi. Dermatoskopiya aknedan tashqari rozasea, perioral dermatit yoki follikulit kabi o'xshash kasalliklarni farqlashga yordam beradi. Gormonal buzilish belgilari — hayz siklining buzilishi, ortiqcha tuk o'sishi, keskin vazn o'zgarishi — bo'lsa, gormonlar tahlili va ginekolog yoki endokrinolog maslahati tavsiya etilishi mumkin. Shundan so'ng davolash rejasi tuziladi: mahalliy vositalar, kerak bo'lsa ichki terapiya va apparat muolajalari kombinatsiyasini faqat shifokor tanlaydi va natijani nazorat qiladi.",
          'Диагностика начинается с осмотра: врач оценивает тип высыпаний, их расположение, степень тяжести и наличие рубцов. Дерматоскопия помогает отличить акне от похожих состояний — розацеа, периорального дерматита или фолликулита. Если есть признаки гормональных нарушений — сбои цикла, избыточный рост волос, резкие изменения веса, — могут понадобиться анализы на гормоны и консультация гинеколога или эндокринолога. После этого составляется план лечения: местные средства, при необходимости системная терапия и аппаратные процедуры подбираются только врачом, который затем контролирует результат.',
          'Diagnosis starts with an examination: the doctor assesses the type of lesions, where they are, how severe the acne is and whether scars are present. Dermatoscopy helps distinguish acne from look-alike conditions such as rosacea, perioral dermatitis or folliculitis. If there are signs of a hormonal imbalance — irregular periods, excess hair growth, sudden weight change — hormone tests and a gynaecologist or endocrinologist consultation may be recommended. A treatment plan follows: topical products, systemic therapy when needed and in-clinic procedures are chosen only by the doctor, who then monitors the response.',
        ),
      ),
      S(
        L('Qachon dermatologga murojaat qilish kerak', 'Когда нужно обратиться к дерматологу', 'When to see a dermatologist'),
        L(
          "Agar uy parvarishi 2–3 oy ichida natija bermasa, toshmalar og'riqli tugunlar ko'rinishida bo'lsa yoki ular o'rnida chuqurchalar va dog'lar qola boshlagan bo'lsa, dermatologga murojaat qilish kerak. Akne kutilmaganda kattalik yoshida paydo bo'lsa, hayz buzilishi yoki ortiqcha tuk o'sishi bilan birga kelsa, bu tekshiruv uchun jiddiy sabab. Isitma va bo'g'imlardagi og'riq bilan kechadigan to'satdan kuchli toshmalar shoshilinch ko'rikni talab qiladi. Akne kayfiyat, muloqot va o'ziga bo'lgan ishonchga ta'sir qilayotgan bo'lsa ham kutib o'tirmang — erta davolash chandiqlar oldini olishning eng yaxshi yo'li.",
          'К дерматологу стоит идти, если домашний уход не помогает 2–3 месяца, высыпания превращаются в болезненные узлы или на их месте начинают оставаться ямки и пятна. Если акне неожиданно появилось во взрослом возрасте и сочетается со сбоями цикла или избыточным ростом волос, это серьёзный повод для обследования. Внезапные обильные высыпания с температурой и болью в суставах требуют срочного осмотра. Не откладывайте визит и в том случае, если прыщи влияют на настроение, общение и уверенность в себе: раннее лечение — лучший способ избежать рубцов.',
          'See a dermatologist if home care has not helped after 2–3 months, if spots turn into painful lumps, or if pits and marks start to remain where pimples used to be. Acne that appears unexpectedly in adulthood together with irregular periods or excess hair growth is a solid reason to get checked. A sudden, severe breakout with fever and joint pain needs urgent assessment. Do not wait either if acne affects your mood, social life or confidence — early treatment is the best way to prevent scarring.',
        ),
      ),
      S(
        L('Uy parvarishi va profilaktika', 'Домашний уход и профилактика', 'Home care and prevention'),
        L(
          "Yuzni kuniga ikki marta yumshoq, sovunsiz vosita bilan yuving va terini quritib yubormang — haddan tashqari tozalash yog' ajralishini kuchaytiradi. Non-comedogenic (komedon hosil qilmaydigan) belgili namlantiruvchi va quyoshdan himoya vositalarini tanlang. Toshmalarni siqmang: bu yallig'lanishni chuqurlashtiradi va chandiq hamda pigment dog'lari xavfini oshiradi. Yostiq jildini tez-tez almashtiring, telefon ekranini tozalang va yuzga qo'l tekkizmaslikka harakat qiling. Shifokor belgilagan vositalarni tavsiyaga ko'ra muntazam qo'llang — natija odatda bir necha haftadan keyin ko'rina boshlaydi.",
          'Умывайтесь дважды в день мягким средством без мыла и не пересушивайте кожу — агрессивное очищение только усиливает выработку кожного сала. Выбирайте увлажняющий крем и солнцезащитное средство с пометкой non-comedogenic. Не выдавливайте прыщи: это загоняет воспаление глубже и повышает риск рубцов и пигментных пятен. Чаще меняйте наволочку, протирайте экран телефона и старайтесь не трогать лицо руками. Назначенные врачом средства используйте регулярно и строго по рекомендации — результат обычно становится заметен через несколько недель.',
          'Wash your face twice a day with a gentle, soap-free cleanser and avoid over-drying — harsh cleansing only boosts oil production. Choose a moisturiser and sunscreen labelled non-comedogenic. Do not squeeze pimples: it drives inflammation deeper and raises the risk of scars and dark marks. Change your pillowcase often, wipe your phone screen and try not to touch your face. Use the products your doctor prescribes regularly and exactly as advised — improvement usually becomes visible after several weeks.',
        ),
      ),
      S(
        L('Akne haqidagi keng tarqalgan afsonalar', 'Распространённые мифы об акне', 'Common acne myths'),
        L(
          "Eng keng tarqalgan afsonalardan biri — akne faqat o'smirlarda bo'ladi va o'z-o'zidan o'tib ketadi; aslida kasallik yillar davom etib, chandiq qoldirishi mumkin. Akne iflos teri belgisi emas: haddan tashqari yuvish va spirtli losonlar holatni faqat yomonlashtiradi. Quyosh toshmalarni vaqtincha yashirsa-da, keyinchalik pigmentatsiya va yangi kuchayishga olib keladi. Do'stingizga yordam bergan dori sizga mos kelmasligi mumkin — davolash akne turi va teri xususiyatlariga qarab individual tanlanadi.",
          'Один из самых живучих мифов — что акне бывает только у подростков и проходит само; на деле болезнь может тянуться годами и оставлять рубцы. Угри — не признак грязной кожи: частое умывание и спиртовые лосьоны лишь ухудшают ситуацию. Солнце на время маскирует высыпания, но затем приводит к пигментации и новому обострению. Средство, которое помогло подруге, может не подойти вам: лечение подбирается индивидуально — по форме акне и особенностям кожи.',
          'One of the most persistent myths is that acne only affects teenagers and always clears up on its own; in reality it can last for years and leave scars. Acne is not a sign of dirty skin: frequent washing and alcohol-based toners only make it worse. Sun exposure may hide breakouts for a while, but it later leads to pigmentation and new flares. A product that worked for a friend may not suit you — treatment is chosen individually, based on the type of acne and your skin.',
        ),
      ),
    ],
    aboutFooter: L(
      "Akne davolash Farg'ona yoki Qo'qonda kerak bo'lsa, Radeski Skin Clinic dermatologiga konsultatsiyaga yoziling — shifokor teringizni ko'rib chiqib, sizga mos davolash rejasini tuzadi.",
      'Если вам нужно лечение акне в Фергане или Коканде, запишитесь на консультацию к дерматологу Radeski Skin Clinic — врач осмотрит кожу и составит подходящий именно вам план лечения.',
      'If you are looking for acne treatment in Fergana or Kokand, book a consultation with a dermatologist at Radeski Skin Clinic — the doctor will examine your skin and build a treatment plan that suits you.',
    ),
  },

  'atopik-dermatit': {
    aboutTitle: L(
      'Atopik dermatit haqida nimalarni bilish kerak',
      'Что важно знать об атопическом дерматите',
      'What you should know about atopic dermatitis',
    ),
    aboutOverview: L(
      "Atopik dermatit — terining surunkali, yuqumli bo'lmagan yallig'lanish kasalligi bo'lib, kuchli qichish, quruqlik va davriy kuchayishlar bilan kechadi. U ko'pincha hayotning birinchi yillarida boshlanadi: bolalarda atopik dermatit eng ko'p uchraydigan teri kasalliklaridan biri, ammo kattalarda ham davom etishi yoki birinchi marta paydo bo'lishi mumkin. Kasallikni bir martada butunlay yo'qotadigan universal dori yo'q, lekin to'g'ri parvarish va shifokor kuzatuvi bilan uzoq remissiyaga erishish va hayot sifatini sezilarli yaxshilash mumkin. Quyida ota-onalar va kattalar bemorlar uchun eng muhim ma'lumotlar jamlangan.",
      'Атопический дерматит — хроническое незаразное воспалительное заболевание кожи, которое протекает с сильным зудом, сухостью и периодическими обострениями. Чаще всего оно начинается в первые годы жизни: атопический дерматит у детей — одно из самых распространённых кожных заболеваний, но он может сохраняться или впервые появиться и у взрослых. Универсального средства, которое избавит от болезни раз и навсегда, нет, однако правильный уход и наблюдение у врача позволяют добиться длительной ремиссии и заметно улучшить качество жизни. Ниже собрано главное, что нужно знать родителям и взрослым пациентам.',
      'Atopic dermatitis is a chronic, non-contagious inflammatory skin disease marked by intense itching, dryness and recurring flares. It usually begins in the first years of life — atopic dermatitis in children is one of the most common skin conditions — but it can persist into adulthood or appear for the first time in adults. There is no single medicine that cures it once and for all, yet the right skincare and regular follow-up with a doctor make long remissions possible and significantly improve quality of life. Here is the key information for parents and adult patients.',
    ),
    aboutSections: [
      S(
        L('Belgilari: yoshga qarab qanday ko\'rinadi', 'Симптомы в разном возрасте', 'Symptoms at different ages'),
        L(
          "Asosiy belgi — kuchli qichish, u ayniqsa kechasi kuchayadi va uyquni buzadi. Chaqaloqlar va kichik bolalarda qizil, ba'zan namlanib turadigan dog'lar yonoqlar, bosh terisi va qo'l-oyoqlarning tashqi yuzasida paydo bo'ladi. Kattaroq bolalar va kattalarda toshmalar tirsak va tizza bukilmalarida, bo'yin, bilak va qovoqlarda joylashadi. Doimiy qashish natijasida teri qalinlashadi, chiziqlari aniq bo'lib qoladi (lixenifikatsiya), yoriqlar va tirnalgan joylar paydo bo'ladi. Teri umuman quruq, qipiqlanadigan va har qanday ta'sirga sezgir bo'ladi.",
          'Главный симптом — сильный зуд, который особенно мучает по ночам и нарушает сон. У младенцев и малышей красные, иногда мокнущие пятна появляются на щеках, волосистой части головы и наружной поверхности рук и ног. У детей постарше и взрослых высыпания располагаются в локтевых и подколенных сгибах, на шее, запястьях и веках. Из-за постоянного расчёсывания кожа утолщается, её рисунок становится грубее (лихенификация), появляются трещины и расчёсы. В целом кожа сухая, шелушащаяся и реагирует на малейшие раздражители.',
          'The main symptom is intense itching that is often worse at night and disturbs sleep. In babies and toddlers, red and sometimes weeping patches appear on the cheeks, scalp and outer surfaces of the arms and legs. In older children and adults the rash typically affects the elbow and knee creases, neck, wrists and eyelids. Constant scratching thickens the skin and exaggerates its lines (lichenification), leaving cracks and scratch marks. Overall the skin is dry, flaky and reacts to the slightest irritation.',
        ),
      ),
      S(
        L('Sabablari va kuchaytiruvchi omillar', 'Причины и триггеры обострений', 'Causes and flare triggers'),
        L(
          "Atopik dermatit asosida teri to'siq funksiyasining buzilishi va immun tizimining allergik yo'nalishdagi faolligi yotadi: teri namlikni yaxshi ushlab turolmaydi, shu sababli tirnash keltiruvchi moddalar va mikroblar oson kirib boradi. Kasallik ko'pincha oilaviy bo'ladi va allergik rinit hamda bronxial astma bilan birga uchraydi. Kuchayishlarga quruq havo va qish mavsumi, issiqlik va terlash, jun kiyimlar, xushbo'y sovun va kir yuvish kukunlari, chang kanalari, uy hayvonlari, stress va ba'zi bemorlarda ayrim oziq-ovqat mahsulotlari sabab bo'lishi mumkin. Har bir bemorning triggerlari turlicha, shuning uchun ularni aniqlash davolashning muhim qismidir.",
          'В основе атопического дерматита — нарушение барьерной функции кожи и склонность иммунной системы к аллергическим реакциям: кожа плохо удерживает влагу, поэтому раздражители и микробы легко проникают внутрь. Заболевание часто носит семейный характер и сочетается с аллергическим ринитом и бронхиальной астмой. Обострения могут провоцировать сухой воздух и зимний сезон, жара и потливость, шерстяная одежда, ароматизированное мыло и стиральные порошки, клещи домашней пыли, домашние животные, стресс, а у части пациентов — отдельные продукты питания. Набор триггеров у каждого свой, поэтому их выявление — важная часть лечения.',
          'Atopic dermatitis is driven by a weakened skin barrier combined with an immune system prone to allergic reactions: the skin cannot hold on to moisture, so irritants and microbes get in easily. It often runs in families and goes hand in hand with hay fever and asthma. Flares can be triggered by dry air and winter, heat and sweating, wool clothing, scented soaps and laundry detergents, house dust mites, pets, stress and, in some patients, certain foods. Every patient has a different set of triggers, so identifying them is an essential part of treatment.',
        ),
      ),
      S(
        L('Dermatolog tashxisni qanday qo\'yadi', 'Как ставится диагноз', 'How the diagnosis is made'),
        L(
          "Atopik dermatit tashxisi asosan klinik: dermatolog toshmalar ko'rinishi, joylashuvi, kasallik tarixi va oiladagi allergik kasalliklarni baholaydi. Kerak bo'lsa dermatoskopiya va qirma tahlillari o'xshash kasalliklar — kontakt dermatit, seboreyali dermatit, qo'tir yoki zamburug' infeksiyasidan farqlashga yordam beradi. Allergiya shubhasi bo'lsa, allergo-proba yoki qon tahlillari tavsiya etiladi, ammo ijobiy natija har doim ham aynan shu mahsulot kasallikni qo'zg'atayotganini anglatmaydi — natijani shifokor talqin qiladi. Bolalarda o'z-o'zidan qat'iy parhezga o'tish tavsiya etilmaydi, chunki bu o'sish va rivojlanishga zarar yetkazishi mumkin.",
          'Диагноз атопического дерматита ставится в основном клинически: дерматолог оценивает характер и расположение высыпаний, историю болезни и аллергические заболевания в семье. При необходимости дерматоскопия и соскобы помогают исключить похожие состояния — контактный и себорейный дерматит, чесотку или грибковую инфекцию. При подозрении на аллергию назначают аллергопробы или анализы крови, но положительный результат не всегда означает, что именно этот продукт вызывает обострения, — интерпретирует его врач. Самостоятельно сажать ребёнка на строгую диету не стоит: это может навредить росту и развитию.',
          'Atopic dermatitis is diagnosed mainly on clinical grounds: the dermatologist looks at the appearance and location of the rash, the course of the disease and any allergies in the family. When needed, dermatoscopy and skin scrapings help rule out look-alikes such as contact or seborrhoeic dermatitis, scabies or fungal infection. If allergy is suspected, skin prick tests or blood tests may be ordered, but a positive result does not always mean that a particular food is causing flares — the doctor interprets it. Putting a child on a strict diet without medical advice is not recommended, as it can harm growth and development.',
        ),
      ),
      S(
        L('Qachon shifokorga murojaat qilish kerak', 'Когда срочно нужен врач', 'When to see a doctor'),
        L(
          "Agar qichish uyquni buzsa, bola bezovta va injiq bo'lib qolsa yoki oddiy namlantiruvchi vositalar yordam bermasa, dermatologga murojaat qiling. Toshmalarda sariq qobiqlar, yiring, to'satdan og'riq yoki isitma paydo bo'lishi bakterial infeksiya belgisi bo'lishi mumkin. Mayda pufakchalar va chuqurchali yaralar tez tarqalsa, bu gerpes infeksiyasining xavfli asorati bo'lishi ehtimoli bor va shoshilinch ko'rikni talab qiladi. Kasallik tez-tez kuchayib, maktab, ish yoki oilaviy hayotga xalaqit bersa, davolash rejasini shifokor bilan qayta ko'rib chiqish vaqti kelgan.",
          'Обратитесь к дерматологу, если зуд мешает спать, ребёнок стал беспокойным и капризным или обычные увлажняющие средства не помогают. Жёлтые корки, гной, внезапная болезненность очагов или температура могут говорить о присоединении бактериальной инфекции. Если быстро распространяются мелкие пузырьки и язвочки с вдавлением в центре, это может быть опасное осложнение — герпетическая инфекция, и нужен срочный осмотр. Если обострения случаются часто и мешают учёбе, работе или семейной жизни, пора вместе с врачом пересмотреть план лечения.',
          'See a dermatologist if itching disrupts sleep, your child becomes restless and irritable, or ordinary moisturisers are not helping. Yellow crusts, pus, sudden pain in the patches or fever may signal a bacterial infection. Rapidly spreading small blisters and punched-out sores can be a dangerous complication — a herpes virus infection — and need urgent assessment. If flares are frequent and interfere with school, work or family life, it is time to review the treatment plan with your doctor.',
        ),
      ),
      S(
        L('Uy parvarishi: emolientlar va kundalik odatlar', 'Домашний уход: эмоленты и привычки', 'Home care: emollients and daily habits'),
        L(
          "Parvarishning asosi — emolientlar, ya'ni terini namlantiruvchi va to'siqni tiklovchi vositalarni kuniga kamida ikki marta, remissiya davrida ham muntazam surtish. Cho'milish qisqa (5–10 daqiqa) va iliq suvda bo'lishi, keyin terini ishqalamasdan sochiq bilan bosib quritib, darhol emolient surtish tavsiya etiladi. Paxta kiyimlar, xushbo'ysiz yuvish vositalari, xonadagi mo'tadil harorat va namlik kuchayishlar sonini kamaytiradi. Bolaning tirnoqlarini qisqa kesib turing va kechasi qashishni kamaytirish choralarini ko'ring. Yallig'lanishga qarshi vositalar va ularni qo'llash muddatini faqat shifokor belgilaydi.",
          'Основа ухода — эмоленты, то есть средства, которые увлажняют кожу и восстанавливают её барьер; их наносят не реже двух раз в день, в том числе в период ремиссии. Купание должно быть коротким (5–10 минут) и в тёплой воде, после чего кожу промакивают полотенцем, не растирая, и сразу наносят эмолент. Хлопковая одежда, стиральные средства без отдушек, умеренная температура и влажность в комнате снижают число обострений. Коротко стригите ребёнку ногти и продумайте, как уменьшить расчёсывание ночью. Противовоспалительные средства и длительность их применения определяет только врач.',
          'The foundation of care is emollients — products that moisturise the skin and restore its barrier — applied at least twice a day, including during remission. Baths should be short (5–10 minutes) and lukewarm; afterwards pat the skin dry without rubbing and apply an emollient straight away. Cotton clothing, fragrance-free detergents and moderate room temperature and humidity reduce the number of flares. Keep your child’s nails short and look for ways to reduce night-time scratching. Anti-inflammatory treatments and how long to use them are decided only by the doctor.',
        ),
      ),
      S(
        L('Keng tarqalgan afsonalar', 'Распространённые мифы', 'Common myths'),
        L(
          "Atopik dermatit yuqumli emas — u boshqa bolalarga yoki oila a'zolariga yuqmaydi. Ko'pchilik kasallik sababi faqat ovqatda deb hisoblaydi, ammo aksariyat hollarda asosiy muammo teri to'sig'ida, oziq-ovqat esa faqat ayrim bemorlarda rol o'ynaydi. Gormonal kremlardan qo'rqish tushunarli, biroq shifokor tanlagan va to'g'ri muddat qo'llangan zamonaviy mahalliy vositalar xavfsiz hisoblanadi, nazoratsiz foydalanish esa haqiqatan zararli. Ko'p bolalarda yosh o'tishi bilan kasallik yengillashadi, lekin teri sezgirligi saqlanishi mumkin, shuning uchun parvarishni to'xtatmaslik kerak.",
          'Атопический дерматит не заразен — он не передаётся другим детям и членам семьи. Многие уверены, что всё дело только в питании, но в большинстве случаев главная проблема — в коже и её барьере, а пищевые продукты играют роль лишь у части пациентов. Страх перед гормональными мазями понятен, однако современные местные средства, подобранные врачом и применяемые правильным курсом, считаются безопасными, а вот бесконтрольное использование действительно вредно. У многих детей с возрастом болезнь ослабевает, но чувствительность кожи может остаться, поэтому уход бросать нельзя.',
          'Atopic dermatitis is not contagious — it cannot spread to other children or family members. Many people believe food is the whole story, but in most cases the core problem lies in the skin barrier, and diet plays a role only for some patients. Fear of steroid creams is understandable, yet modern topical treatments chosen by a doctor and used for the right length of time are considered safe; it is unsupervised use that causes harm. Many children improve as they grow, but the skin may stay sensitive, so skincare should not be abandoned.',
        ),
      ),
    ],
    aboutFooter: L(
      "Bolangizda yoki o'zingizda atopik dermatit belgilari bo'lsa, Farg'ona yoki Qo'qondagi Radeski Skin Clinic dermatologiga yoziling — shifokor yoshga mos parvarish va kuzatuv rejasini tuzib beradi.",
      'Если у вас или вашего ребёнка есть признаки атопического дерматита, запишитесь к дерматологу Radeski Skin Clinic в Фергане или Коканде — врач составит уход и план наблюдения с учётом возраста.',
      'If you or your child have signs of atopic dermatitis, book an appointment with a dermatologist at Radeski Skin Clinic in Fergana or Kokand — the doctor will put together an age-appropriate care and follow-up plan.',
    ),
  },

  postacne: {
    aboutTitle: L(
      'Postakne haqida nimalarni bilish kerak',
      'Что важно знать о постакне',
      'What you should know about post-acne marks and scars',
    ),
    aboutOverview: L(
      "Postakne — akne yallig'lanishidan keyin terida qoladigan o'zgarishlar majmuasi: qizil va to'q dog'lar, chuqurchalar, notekis relyef va kengaygan g'ovaklar. Ular ayniqsa toshmalar siqilganda, akne uzoq davolanmaganda yoki chuqur tugunli shaklda kechganda paydo bo'ladi. Ba'zi o'zgarishlar, masalan, pigment dog'lari vaqt o'tishi bilan sezilarli darajada ochilishi mumkin, chandiqlar esa odatda faqat muolajalar yordamida yaxshilanadi. Qaysi usul mos kelishini tushunish uchun avvalo postakne turini dermatolog bilan aniqlash muhim.",
      'Постакне — это совокупность изменений, которые остаются на коже после воспалений акне: красные и тёмные пятна, ямки, неровный рельеф и расширенные поры. Чаще всего они появляются, если прыщи выдавливали, акне долго не лечили или оно протекало с глубокими узлами. Некоторые изменения, например пигментные пятна, со временем могут заметно посветлеть, а рубцы, как правило, удаётся улучшить только с помощью процедур. Чтобы понять, какой метод подойдёт, сначала нужно вместе с дерматологом определить тип постакне.',
      'Post-acne is the group of changes left on the skin after acne inflammation: red and dark marks, pits, uneven texture and enlarged pores. They are most likely when pimples were squeezed, acne went untreated for a long time or it involved deep nodules. Some changes, such as dark marks, can fade considerably over time, whereas scars usually improve only with in-clinic treatment. To understand which approach will work, the first step is to identify your type of post-acne with a dermatologist.',
    ),
    aboutSections: [
      S(
        L('Postakne turlari: dog\'lar va chandiqlar', 'Виды постакне: пятна и рубцы', 'Types of post-acne: marks and scars'),
        L(
          "Postakne ikki katta guruhga bo'linadi: rang o'zgarishlari va chandiqlar. Yallig'lanishdan keyingi eritema — kengaygan mayda tomirlar bilan bog'liq qizil yoki pushti dog'lar, ular ochiq terida ko'proq uchraydi. Yallig'lanishdan keyingi giperpigmentatsiya — jigarrang yoki to'q dog'lar bo'lib, qoramag'iz terida, ayniqsa kuchli quyosh ostida, uzoq saqlanadi. Atrofik chandiqlar teri sathidan pastda joylashadi: tor va chuqur (icepick), aniq qirrali (boxcar) va to'lqinsimon (rolling) chandiqlar ajratiladi. Kamroq hollarda, ayniqsa ko'krak va yelkada, bo'rtib chiqqan gipertrofik yoki keloid chandiqlar hosil bo'ladi.",
          'Постакне делят на две большие группы: изменения цвета и рубцы. Поствоспалительная эритема — красные или розовые пятна, связанные с расширенными мелкими сосудами; чаще встречается у людей со светлой кожей. Поствоспалительная гиперпигментация — коричневые и тёмные пятна, которые на смуглой коже, особенно под активным солнцем, держатся долго. Атрофические рубцы расположены ниже уровня кожи: различают узкие и глубокие (icepick), с чёткими краями (boxcar) и волнообразные (rolling). Реже, чаще на груди и спине, образуются выступающие гипертрофические или келоидные рубцы.',
          'Post-acne falls into two broad groups: colour changes and scars. Post-inflammatory erythema means red or pink marks caused by small dilated vessels and is more common in fair skin. Post-inflammatory hyperpigmentation means brown or dark marks that last a long time on darker skin, especially under strong sun. Atrophic scars sit below the skin surface: narrow and deep icepick scars, sharp-edged boxcar scars and wave-like rolling scars. Less often, mainly on the chest and back, raised hypertrophic or keloid scars form.',
        ),
      ),
      S(
        L('Nima uchun chandiq va dog\'lar qoladi', 'Почему остаются рубцы и пятна', 'Why scars and marks form'),
        L(
          "Chandiq yallig'lanish follikula devorini yorib, chuqur to'qimalarga tarqalganda va kollagen tolalari shikastlanganda hosil bo'ladi. Xavfni chuqur tugunli va kistoz akne, davolashni kechiktirish, toshmalarni siqish va teriga mexanik shikast yetkazish oshiradi. Irsiy moyillik ham muhim: ba'zi odamlarda hatto o'rtacha akne ham chandiq qoldiradi. Pigment dog'larining uzoq saqlanishiga himoyasiz quyosh va agressiv uy pilinglari sabab bo'ladi. Shuning uchun postakne profilaktikasi aknening o'zini o'z vaqtida davolashdan boshlanadi.",
          'Рубец образуется, когда воспаление разрушает стенку фолликула, распространяется в глубокие слои кожи и повреждает коллагеновые волокна. Риск повышают узловатое и кистозное акне, затянутое лечение, выдавливание прыщей и любая механическая травма кожи. Значение имеет и наследственность: у некоторых людей рубцы остаются даже после акне средней тяжести. Пигментные пятна дольше сохраняются из-за солнца без защиты и агрессивных домашних пилингов. Поэтому профилактика постакне начинается со своевременного лечения самого акне.',
          'A scar forms when inflammation ruptures the follicle wall, spreads into the deeper skin and damages collagen fibres. The risk is higher with nodular and cystic acne, delayed treatment, squeezing spots and any mechanical injury to the skin. Genetics play a part too: some people scar even after moderate acne. Dark marks last longer with unprotected sun exposure and harsh at-home peels. That is why preventing post-acne starts with treating active acne on time.',
        ),
      ),
      S(
        L('Konsultatsiya va tashxis', 'Консультация и диагностика', 'Consultation and assessment'),
        L(
          "Konsultatsiyada dermatolog terini turli yorug'likda ko'rib, chandiqlar turi, chuqurligi va tarqalishini baholaydi, dog'larning qizil (tomir) yoki jigarrang (pigment) tabiatga ega ekanini aniqlaydi. Dermatoskopiya pigment va tomir komponentini farqlashga yordam beradi, bu esa to'g'ri usul tanlash uchun muhim. Asosiy shart — faol akne nazorat ostida bo'lishi kerak, aks holda yangi toshmalar natijani buzadi. Shundan so'ng teri turi, mavsum va bemorning kutishlariga qarab bosqichma-bosqich reja tuziladi; chandiqlarni tuzatish odatda bir necha seansni talab qiladi.",
          'На консультации дерматолог осматривает кожу при разном освещении, оценивает тип, глубину и распространённость рубцов и определяет, какой природы пятна — красные (сосудистые) или коричневые (пигментные). Дерматоскопия помогает разделить пигментный и сосудистый компоненты, а от этого зависит выбор метода. Главное условие — активное акне должно быть под контролем, иначе новые высыпания сведут результат на нет. Затем с учётом типа кожи, сезона и ожиданий пациента составляется поэтапный план; коррекция рубцов, как правило, требует нескольких сеансов.',
          'During the consultation the dermatologist examines the skin under different lighting, assesses the type, depth and extent of scarring and determines whether marks are red (vascular) or brown (pigment). Dermatoscopy helps separate the pigment and vascular components, which guides the choice of method. The key condition is that active acne must be under control; otherwise new breakouts will undo the results. A step-by-step plan is then built around skin type, season and your expectations, and scar correction usually takes several sessions.',
        ),
      ),
      S(
        L('Qachon dermatologga borish kerak', 'Когда стоит обратиться к врачу', 'When to see a dermatologist'),
        L(
          "Agar dog'lar 6–12 oy ichida o'z-o'zidan ochilmasa, chuqurchalar paydo bo'lgan bo'lsa yoki yangi toshmalar to'xtamayotgan bo'lsa, dermatologga murojaat qilish vaqti keldi. Chandiq qattiqlashib, bo'rtib chiqsa, qichisa yoki og'risa, bu keloid belgisi bo'lishi mumkin va alohida yondashuvni talab qiladi. Akne hali faol bo'lsa, avvalo uni davolash kerak, chunki faol yallig'lanish fonida chandiq muolajalari kutilgan natijani bermaydi. Postakne o'ziga bo'lgan ishonchingizga ta'sir qilayotgan bo'lsa, buni ham murojaat uchun yetarli sabab deb biling.",
          'Пора к дерматологу, если пятна не бледнеют сами за 6–12 месяцев, появились ямки или продолжают возникать новые высыпания. Если рубец уплотняется, выступает над кожей, зудит или болит, это может быть келоид, который требует особого подхода. Если акне всё ещё активно, сначала нужно лечить его: на фоне воспаления процедуры по коррекции рубцов не дают ожидаемого результата. И если постакне влияет на вашу уверенность в себе, это тоже достаточный повод для консультации.',
          'It is time to see a dermatologist if marks have not faded on their own within 6–12 months, pits have appeared or new breakouts keep coming. A scar that hardens, rises above the skin, itches or hurts may be a keloid and needs a special approach. If acne is still active, it has to be treated first, because scar procedures performed on inflamed skin do not deliver the expected results. And if post-acne is affecting your confidence, that alone is a good enough reason to book a consultation.',
        ),
      ),
      S(
        L('Uy parvarishi va quyoshdan himoya', 'Домашний уход и защита от солнца', 'Home care and sun protection'),
        L(
          "Uyda eng muhim qadam — har kuni SPF 30–50 li quyoshdan himoya vositasini qo'llash, chunki ultrabinafsha nurlar pigment dog'larini to'qroq va uzoq saqlanadigan qiladi. Toshmalarni siqmang va qobiqlarni ko'chirmang. Yumshoq tozalash va namlantirish teri to'sig'ini tiklashga yordam beradi. Kuchli kislotalar, skrablar va internetdagi uy pilinglari kuyish va yangi pigmentatsiyaga olib kelishi mumkin. Rangni tekislovchi faol vositalarni shifokor tavsiyasi bilan tanlash xavfsizroq.",
          'Самый важный шаг дома — ежедневное солнцезащитное средство с SPF 30–50: ультрафиолет делает пигментные пятна темнее и стойче. Не выдавливайте прыщи и не сдирайте корочки. Мягкое очищение и увлажнение помогают восстановить кожный барьер. Сильные кислоты, скрабы и домашние пилинги из интернета могут вызвать ожог и новую пигментацию. Активные средства, выравнивающие тон, безопаснее подбирать по рекомендации врача.',
          'The most important step at home is a daily sunscreen with SPF 30–50, because UV light makes dark marks deeper and longer-lasting. Do not squeeze spots or pick off scabs. Gentle cleansing and moisturising help restore the skin barrier. Strong acids, scrubs and DIY peels from the internet can burn the skin and cause new pigmentation. It is safer to choose tone-evening actives on your doctor’s advice.',
        ),
      ),
      S(
        L('Postakne haqidagi afsonalar', 'Мифы о постакне', 'Post-acne myths'),
        L(
          "Chandiqlar o'z-o'zidan yo'qolib ketadi degan fikr noto'g'ri: qizil va jigarrang dog'lar ko'pincha ochiladi, ammo chuqurchalar saqlanib qoladi. Bitta muolaja bilan teri butunlay tekis bo'ladi degan va'dalar ham real emas — odatda kombinatsiyalangan usullar va bir necha seans kerak bo'ladi, natija esa individual. Qoramag'iz teri apparat muolajalariga umuman mos emas degan fikr ham to'liq to'g'ri emas: to'g'ri tanlangan usul va parametrlar bilan muolajalar xavfsiz o'tkazilishi mumkin. Ba'zi muolajalar yoz oylarida cheklanadi, shuning uchun vaqtni shifokor bilan oldindan rejalashtirish muhim.",
          'Миф, что рубцы со временем исчезнут сами: красные и коричневые пятна действительно часто светлеют, но ямки остаются. Нереальны и обещания идеально ровной кожи после одной процедуры — обычно нужны комбинированные методы и несколько сеансов, а результат индивидуален. Не совсем верно и мнение, что смуглой коже аппаратные процедуры противопоказаны: при правильно выбранном методе и параметрах их можно проводить безопасно. Некоторые процедуры ограничены в летние месяцы, поэтому сроки лечения лучше заранее спланировать с врачом.',
          'It is a myth that scars disappear on their own: red and brown marks often fade, but pits remain. Promises of perfectly smooth skin after a single session are unrealistic as well — combined methods and several sessions are usually needed, and results vary from person to person. The belief that darker skin can never have device treatments is not quite right either: with the right method and settings, procedures can be done safely. Some treatments are limited in the summer months, so it is worth planning the timing with your doctor in advance.',
        ),
      ),
    ],
    aboutFooter: L(
      "Postakne bo'yicha Radeski Skin Clinic dermatologi Farg'ona yoki Qo'qonda konsultatsiya o'tkazib, teringizga mos bosqichma-bosqich reja tuzib beradi.",
      'Запишитесь на консультацию по постакне к дерматологу Radeski Skin Clinic в Фергане или Коканде — врач оценит рубцы и пятна и составит поэтапный план, подходящий вашей коже.',
      'Book a post-acne consultation with a dermatologist at Radeski Skin Clinic in Fergana or Kokand — the doctor will assess your marks and scars and create a step-by-step plan for your skin.',
    ),
  },

  rozasea: {
    aboutTitle: L(
      'Rozasea haqida nimalarni bilish kerak',
      'Что важно знать о розацеа',
      'What you should know about rosacea',
    ),
    aboutOverview: L(
      "Rozasea — yuz terisining surunkali yallig'lanish kasalligi bo'lib, asosan yonoq, burun, peshona va iyakda qizarish, ko'rinadigan tomirlar va toshmalar bilan namoyon bo'ladi. U ko'pincha 30 yoshdan keyin boshlanadi, ayollarda ko'proq uchraydi, erkaklarda esa og'irroq kechishi mumkin. Rozasea to'lqinsimon kechadi: kuchayishlar remissiya davrlari bilan almashinadi. Uni butunlay davolab bo'lmasa-da, triggerlarni bilish, to'g'ri parvarish va shifokor tanlagan terapiya bilan holatni yaxshi nazorat qilish mumkin.",
      'Розацеа — хроническое воспалительное заболевание кожи лица, которое проявляется покраснением щёк, носа, лба и подбородка, заметными сосудами и высыпаниями. Обычно оно начинается после 30 лет, чаще встречается у женщин, а у мужчин может протекать тяжелее. Розацеа развивается волнообразно: обострения сменяются периодами ремиссии. Полностью вылечить её нельзя, но, зная свои триггеры, правильно ухаживая за кожей и получая подобранную врачом терапию, можно надёжно держать болезнь под контролем.',
      'Rosacea is a chronic inflammatory skin disease of the face that causes redness of the cheeks, nose, forehead and chin, visible blood vessels and bumps. It usually starts after the age of 30, is more common in women and can be more severe in men. Rosacea runs in waves, with flares alternating with calmer periods. It cannot be cured completely, but knowing your triggers, using the right skincare and following a treatment plan chosen by a doctor keep it well under control.',
    ),
    aboutSections: [
      S(
        L('Rozasea belgilari', 'Симптомы розацеа', 'Symptoms of rosacea'),
        L(
          "Ilk belgilar — issiqlik, hayajon yoki achchiq taomdan keyin yuzning tez-tez va uzoq qizarib ketishi. Vaqt o'tishi bilan qizarish doimiy bo'lib qoladi, burun va yonoqlarda mayda kengaygan tomirlar — telangiektaziyalar ko'rinadi. Ko'pchilik bemorlarda yonish, achishish, quruqlik va kosmetikaga sezgirlik kuzatiladi. Rozasea ko'zlarga ham ta'sir qilishi mumkin: qumdek sezgi, qizarish va qovoqlar yallig'lanishi paydo bo'ladi. Uni aknedan farqlaydigan muhim belgi — komedonlar, ya'ni qora nuqtalar bo'lmasligi.",
          'Первые признаки — частые и затяжные приливы краски к лицу после тепла, волнения или острой еды. Со временем покраснение становится постоянным, на носу и щеках появляются мелкие расширенные сосуды — телеангиэктазии. Многие пациенты жалуются на жжение, покалывание, сухость и плохую переносимость косметики. Розацеа может затрагивать и глаза: появляются ощущение песка, покраснение и воспаление век. Важное отличие от акне — при розацеа нет комедонов, то есть чёрных точек.',
          'Early signs are frequent, prolonged flushing after heat, emotion or spicy food. Over time the redness becomes permanent, and small dilated vessels called telangiectasias appear on the nose and cheeks. Many patients experience burning, stinging, dryness and intolerance to cosmetics. Rosacea can also affect the eyes, causing a gritty feeling, redness and eyelid inflammation. An important difference from acne is that rosacea has no comedones — no blackheads or whiteheads.',
        ),
      ),
      S(
        L('Rozasea shakllari', 'Формы розацеа', 'Types of rosacea'),
        L(
          "Shifokorlar rozaseaning bir nechta ko'rinishini ajratadi va ular bitta bemorda birga uchrashi mumkin. Eritematoz-telangiektatik shaklda asosiy muammo — doimiy qizarish va tomir to'ri. Papulo-pustulyoz shakl qizarish fonida qizil tugunchalar va yiringchalar bilan kechadi, shuning uchun uni ko'pincha akne bilan adashtirishadi. Fimatoz shaklda teri qalinlashadi va ko'pincha burun kattalashadi (rinofima) — bu asosan erkaklarda uchraydi. Ko'z rozaseasi ko'z va qovoqlarni zararlaydi va oftalmolog kuzatuvini ham talab qiladi.",
          'Врачи выделяют несколько форм розацеа, и у одного пациента они могут сочетаться. При эритематозно-телеангиэктатической форме главная проблема — стойкое покраснение и сосудистая сеточка. Папуло-пустулёзная форма протекает с красными узелками и гнойничками на фоне покраснения, поэтому её часто путают с акне. При фиматозной форме кожа утолщается, нередко увеличивается нос (ринофима) — это встречается в основном у мужчин. Офтальморозацеа поражает глаза и веки и требует наблюдения также у офтальмолога.',
          'Doctors recognise several forms of rosacea, and one patient can have more than one. In erythematotelangiectatic rosacea the main problem is persistent redness and a network of visible vessels. Papulopustular rosacea adds red bumps and pus spots on a red background, which is why it is often mistaken for acne. In phymatous rosacea the skin thickens and the nose may enlarge (rhinophyma), mostly in men. Ocular rosacea affects the eyes and eyelids and also requires follow-up with an ophthalmologist.',
        ),
      ),
      S(
        L('Sabablari va triggerlar', 'Причины и триггеры', 'Causes and triggers'),
        L(
          "Rozaseaning aniq sababi to'liq o'rganilmagan, ammo yuz tomirlarining ortiqcha reaktivligi, tug'ma immunitetning haddan tashqari faolligi va terida yashovchi Demodex kanalarining ko'payishi muhim rol o'ynaydi. Irsiy moyillik ham bor, ochiq rangli terida kasallik ko'proq uchraydi. Kuchayishlarni quyosh, issiq yoki sovuq havo, shamol, issiq ichimliklar, alkogol, achchiq taomlar, hammom va sauna, jismoniy zo'riqish va stress qo'zg'atadi. Farg'ona vodiysining issiq yozi va quyoshli kunlari ko'p bemorlar uchun asosiy trigger hisoblanadi. Nazoratsiz gormonal kremlar ham holatni og'irlashtirib, rozasimon dermatitga olib kelishi mumkin.",
          'Точная причина розацеа до конца не изучена, но важную роль играют повышенная реактивность сосудов лица, избыточная активность врождённого иммунитета и размножение клещей Demodex, живущих на коже. Есть и наследственная предрасположенность, чаще болеют люди со светлой кожей. Обострения провоцируют солнце, жара или холод, ветер, горячие напитки, алкоголь, острая пища, баня и сауна, физические нагрузки и стресс. Жаркое лето и обилие солнечных дней в Ферганской долине для многих пациентов становятся главным триггером. Бесконтрольное применение гормональных кремов тоже утяжеляет течение и может приводить к стероидному розацеаподобному дерматиту.',
          'The exact cause of rosacea is not fully understood, but overreactive facial blood vessels, an overactive innate immune response and overgrowth of Demodex mites that live on the skin all play a role. There is a hereditary tendency, and fair-skinned people are affected more often. Flares are triggered by sun, heat or cold, wind, hot drinks, alcohol, spicy food, saunas and steam baths, intense exercise and stress. The hot summers and abundant sunshine of the Fergana Valley are a major trigger for many patients. Unsupervised use of steroid creams can also make things worse and lead to steroid-induced rosacea-like dermatitis.',
        ),
      ),
      S(
        L('Dermatolog tashxisni qanday qo\'yadi', 'Как дерматолог ставит диагноз', 'How a dermatologist diagnoses rosacea'),
        L(
          "Rozasea tashxisi dermatolog ko'rigi asosida qo'yiladi: shifokor qizarish xarakteri, tomirlar, toshmalar turi va ko'zdagi belgilarni baholaydi. Dermatoskopiya tomir naqshini va Demodex belgilarini ko'rishga yordam beradi, kerak bo'lsa kanaga qirma tahlili olinadi. Akne, seboreyali va perioral dermatit, kontakt allergiya kabi o'xshash holatlar istisno qilinadi, kam hollarda tizimli kasalliklar, masalan, qizil yugurik (lyupus) ham tekshiriladi. Tashxisdan so'ng shakliga qarab mahalliy, ichki yoki apparat davolash tanlanadi va shaxsiy triggerlar ro'yxati tuziladi.",
          'Диагноз розацеа ставится на осмотре у дерматолога: врач оценивает характер покраснения, сосуды, тип высыпаний и признаки поражения глаз. Дерматоскопия помогает увидеть сосудистый рисунок и признаки демодекоза, при необходимости берут соскоб на клеща. Исключают похожие состояния — акне, себорейный и периоральный дерматит, контактную аллергию, а в редких случаях проверяют системные заболевания, например красную волчанку. После постановки диагноза в зависимости от формы подбирают местное, системное или аппаратное лечение и составляют список личных триггеров.',
          'Rosacea is diagnosed during a dermatologist’s examination: the doctor assesses the pattern of redness, the vessels, the type of bumps and any eye involvement. Dermatoscopy shows the vascular pattern and signs of Demodex, and a skin scraping for mites may be taken if needed. Look-alikes such as acne, seborrhoeic and perioral dermatitis and contact allergy are ruled out, and in rare cases systemic diseases such as lupus are checked. Once the diagnosis is clear, topical, oral or device-based treatment is chosen according to the form, and a list of your personal triggers is drawn up.',
        ),
      ),
      S(
        L('Qachon shifokorga murojaat qilish kerak', 'Когда обращаться к врачу', 'When to see a doctor'),
        L(
          "Yuz qizarishi bir necha haftadan ortiq saqlansa, toshmalar paydo bo'lsa yoki odatdagi kosmetika achishtira boshlasa, dermatologga murojaat qiling. Ko'zda qum sezgisi, yoshlanish, qizarish yoki ko'rish xiralashishi bo'lsa, oftalmolog ko'rigi ham zarur. Burun terisining qalinlashishi va shakli o'zgarishi kech bosqich belgisi — bu holatda davolashni kechiktirmaslik kerak. Agar o'zingiz sotib olgan kremlardan keyin holat yomonlashgan bo'lsa, shifokorga ko'rsating va keyingi qadamni u bilan kelishib oling.",
          'Обратитесь к дерматологу, если покраснение лица держится дольше нескольких недель, появились высыпания или привычная косметика начала жечь. При ощущении песка в глазах, слезотечении, покраснении глаз или затуманивании зрения нужен и осмотр офтальмолога. Утолщение кожи носа и изменение его формы — признак поздней стадии, в этом случае откладывать лечение нельзя. Если состояние ухудшилось после кремов, купленных самостоятельно, покажитесь врачу и обсудите с ним дальнейшие шаги.',
          'See a dermatologist if facial redness lasts more than a few weeks, bumps appear or your usual cosmetics start to sting. A gritty feeling in the eyes, watering, eye redness or blurred vision also call for an ophthalmologist’s check. Thickening of the skin on the nose and a change in its shape are signs of a late stage, and treatment should not be delayed. If your skin got worse after creams you bought yourself, show it to a doctor and agree on the next steps together.',
        ),
      ),
      S(
        L('Parvarish va keng tarqalgan afsonalar', 'Уход и распространённые мифы', 'Skincare and common myths'),
        L(
          "Rozasea parvarishi yumshoq bo'lishi kerak: spirt, mentol, kuchli kislotalar va skrablarsiz, xushbo'ysiz vositalar hamda har kuni keng spektrli quyosh himoyasi. Yuzni iliq, issiq bo'lmagan suv bilan yuving va sochiq bilan ishqalamang; shaxsiy triggerlar kundaligi qaysi omillar sizga ta'sir qilishini tushunishga yordam beradi. Rozasea gigiyena yetishmasligi belgisi ham, yuqumli kasallik ham emas, u faqat alkogol ichadiganlarda bo'ladi degan fikr ham noto'g'ri. Kengaygan tomirlar kremlar bilan yo'qolmaydi — ular uchun odatda apparat usullari qo'llaniladi.",
          'Уход при розацеа должен быть максимально мягким: средства без спирта, ментола, сильных кислот, скрабов и отдушек, а также ежедневная защита от солнца широкого спектра. Умывайтесь тёплой, а не горячей водой и не растирайте лицо полотенцем; дневник триггеров поможет понять, что именно вызывает обострения. Розацеа — не признак плохой гигиены и не заразное заболевание, а мнение, что она бывает только у тех, кто пьёт алкоголь, — миф. Расширенные сосуды не исчезают от кремов — для них обычно применяют аппаратные методы.',
          'Rosacea skincare should be as gentle as possible: products free of alcohol, menthol, strong acids, scrubs and fragrance, plus daily broad-spectrum sun protection. Wash with lukewarm rather than hot water and do not rub your face with a towel; a trigger diary helps you see what sets off your flares. Rosacea is not a sign of poor hygiene and it is not contagious, and the idea that only people who drink alcohol get it is a myth. Visible vessels do not disappear with creams — device-based treatments are usually used for them.',
        ),
      ),
    ],
    aboutFooter: L(
      "Rozasea belgilarini sezsangiz, Farg'ona yoki Qo'qondagi Radeski Skin Clinic dermatologiga konsultatsiyaga yoziling — shakliga mos davolash va parvarish rejasi birgalikda tuziladi.",
      'Если вы заметили у себя признаки розацеа, запишитесь на консультацию к дерматологу Radeski Skin Clinic в Фергане или Коканде — вместе с врачом вы составите план лечения и ухода с учётом формы заболевания.',
      'If you notice signs of rosacea, book a consultation with a dermatologist at Radeski Skin Clinic in Fergana or Kokand — together you will build a treatment and skincare plan suited to your type of rosacea.',
    ),
  },

  'teri-doglari': {
    aboutTitle: L(
      'Teri dog\'lari va pigmentatsiya haqida nimalarni bilish kerak',
      'Что важно знать о пигментных пятнах',
      'What you should know about skin spots and pigmentation',
    ),
    aboutOverview: L(
      "Terida paydo bo'ladigan dog'lar turlicha: ba'zilari faqat kosmetik muammo, boshqalari esa shifokor nazoratini talab qiladi. Yuzdagi pigment dog'lari — melasma, sepkillar, quyosh dog'lari va akne yoki jarohatdan keyingi dog'lar — Farg'ona vodiysining quyoshli iqlimida ayniqsa ko'p uchraydi. Shu bilan birga, xollar va yangi paydo bo'lgan yoki o'zgarayotgan dog'lar melanoma kabi xavfli o'smalarni istisno qilish uchun dermatoskopiya bilan tekshirilishi kerak. Shuning uchun har qanday dog'ni oqartirishdan oldin uning tabiatini dermatolog aniqlashi muhim.",
      'Пятна на коже бывают очень разными: одни — лишь косметическая проблема, другие требуют врачебного контроля. Пигментные пятна на лице — мелазма, веснушки, солнечное лентиго и пятна после акне или травм — особенно часто встречаются в солнечном климате Ферганской долины. При этом родинки, а также новые или меняющиеся пятна обязательно нужно проверять с помощью дерматоскопии, чтобы исключить меланому и другие опасные образования. Поэтому прежде чем осветлять любое пятно, важно, чтобы дерматолог определил его природу.',
      'Spots on the skin vary widely: some are purely cosmetic, while others need medical monitoring. Pigmentation on the face — melasma, freckles, sun spots and marks left after acne or injury — is especially common in the sunny climate of the Fergana Valley. At the same time, moles and any new or changing spots must be checked with dermatoscopy to rule out melanoma and other dangerous growths. That is why a dermatologist should identify what a spot is before any lightening treatment begins.',
    ),
    aboutSections: [
      S(
        L('Pigment dog\'larining turlari', 'Виды пигментных пятен', 'Types of skin spots'),
        L(
          "Melasma — yonoq, peshona, yuqori lab va iyakda simmetrik joylashgan jigarrang dog'lar; ko'pincha ayollarda, homiladorlik yoki gormonal o'zgarishlardan keyin paydo bo'ladi. Sepkillar (efelidlar) — mayda, och jigarrang nuqtalar, ular yozda to'qlashib, qishda ochiladi. Quyosh lentigosi — yosh o'tishi bilan yuz, qo'l va yelkada paydo bo'ladigan aniq chegarali dog'lar. Yallig'lanishdan keyingi giperpigmentatsiya akne, kuyish, ekzema yoki noto'g'ri muolajadan keyin qoladi. Bundan tashqari, xollar (nevuslar), seboreyali keratoma va ba'zi kasalliklarga xos dog'lar ham uchraydi va ular alohida baholanadi.",
          'Мелазма — коричневые пятна, симметрично расположенные на щеках, лбу, над верхней губой и на подбородке; чаще возникает у женщин после беременности или на фоне гормональных изменений. Веснушки (эфелиды) — мелкие светло-коричневые точки, которые летом темнеют, а зимой бледнеют. Солнечное лентиго — чётко очерченные пятна, которые с возрастом появляются на лице, кистях и плечах. Поствоспалительная гиперпигментация остаётся после акне, ожогов, экземы или неудачных процедур. Кроме того, встречаются родинки (невусы), себорейный кератоз и пятна, характерные для некоторых заболеваний, — их оценивают отдельно.',
          'Melasma consists of brown patches arranged symmetrically on the cheeks, forehead, upper lip and chin; it mostly affects women and often appears after pregnancy or hormonal changes. Freckles (ephelides) are small light-brown dots that darken in summer and fade in winter. Solar lentigines, or sun spots, are well-defined patches that appear with age on the face, hands and shoulders. Post-inflammatory hyperpigmentation remains after acne, burns, eczema or a poorly chosen procedure. There are also moles (naevi), seborrhoeic keratoses and spots typical of certain diseases, which are assessed separately.',
        ),
      ),
      S(
        L('Sabablari', 'Причины пигментации', 'What causes pigmentation'),
        L(
          "Pigment dog'larining asosiy sababi — melanotsit hujayralarining ortiqcha melanin ishlab chiqarishi. Eng kuchli qo'zg'atuvchi — ultrabinafsha nurlar, jumladan, bulutli kunlarda va deraza orqali tushadigan quyosh. Gormonal omillar — homiladorlik, gormonal kontratseptivlar, qalqonsimon bez muammolari — melasmaga moyillikni oshiradi. Terining yallig'lanishi va shikastlanishi, agressiv pilinglar, ba'zi dori vositalari va atir-upa moddalari ham dog' qoldirishi mumkin. Irsiyat va teri turi ham muhim: qoramag'iz terida pigmentatsiya osonroq paydo bo'ladi va sekinroq ketadi.",
          'Главная причина пигментных пятен — избыточная выработка меланина клетками-меланоцитами. Самый сильный провокатор — ультрафиолет, в том числе в пасмурные дни и через оконное стекло. Гормональные факторы — беременность, гормональные контрацептивы, проблемы со щитовидной железой — повышают склонность к мелазме. Пятна могут оставлять воспаление и травмы кожи, агрессивные пилинги, некоторые лекарства и компоненты парфюмерии. Важны наследственность и тип кожи: на смуглой коже пигментация появляется легче и уходит медленнее.',
          'The main cause of pigment spots is excess melanin produced by pigment cells called melanocytes. The strongest trigger is ultraviolet light, including on cloudy days and through window glass. Hormonal factors — pregnancy, hormonal contraceptives, thyroid problems — increase the tendency to melasma. Skin inflammation and injury, aggressive peels, some medicines and fragrance ingredients can also leave spots behind. Genetics and skin type matter as well: in darker skin, pigmentation develops more easily and fades more slowly.',
        ),
      ),
      S(
        L('Tashxis: ko\'rik va dermatoskopiya', 'Диагностика: осмотр и дерматоскопия', 'Diagnosis: examination and dermatoscopy'),
        L(
          "Dermatolog dog'larni ko'rib chiqib, ularning soni, rangi, chegarasi va joylashuvini baholaydi. Dermatoskopiya — og'riqsiz tekshiruv bo'lib, maxsus kattalashtiruvchi asbob yordamida dog' tuzilishini ko'rishga va xavfsiz pigmentatsiyani shubhali o'zgarishdan farqlashga imkon beradi. Vud lampasi melasmaning chuqurligini baholashga yordam berishi mumkin. Agar dog' shubhali bo'lsa, oqartiruvchi yoki lazer muolajalari boshlanmaydi — avval qo'shimcha tekshiruv yoki onkolog maslahati tavsiya etiladi. Gormonal sabab gumon qilinganda boshqa mutaxassislar bilan hamkorlik qilinadi.",
          'Дерматолог осматривает пятна и оценивает их количество, цвет, границы и расположение. Дерматоскопия — безболезненное исследование с помощью специального увеличительного прибора, которое позволяет рассмотреть структуру пятна и отличить безопасную пигментацию от подозрительного образования. Лампа Вуда помогает оценить глубину залегания пигмента при мелазме. Если пятно вызывает подозрение, осветляющие и лазерные процедуры не начинают — сначала рекомендуют дополнительное обследование или консультацию онколога. При подозрении на гормональную причину к лечению подключают других специалистов.',
          'The dermatologist examines the spots and assesses their number, colour, borders and location. Dermatoscopy is a painless examination with a special magnifying device that reveals the structure of a spot and helps tell harmless pigmentation from a suspicious lesion. A Wood’s lamp can help estimate how deep melasma pigment lies. If a spot looks suspicious, no lightening or laser treatment is started — further tests or an oncologist’s opinion come first. When a hormonal cause is suspected, other specialists are involved.',
        ),
      ),
      S(
        L('Xavfli belgilar: qachon tezda tekshirish kerak', 'Тревожные признаки: когда нужно срочно провериться', 'Warning signs: when to get checked promptly'),
        L(
          "Har qanday yangi paydo bo'lgan yoki o'zgarayotgan dog' va xolni dermatologga ko'rsatish kerak. ABCDE qoidasi yordam beradi: assimetriya (A), notekis chegara (B), bir nechta rang (C), diametri 6 mm dan katta (D) va vaqt o'tishi bilan o'zgarish (E). Qichish, qonash, yara hosil bo'lishi, atrofida qizarish yoki boshqa xollardan keskin farq qiladigan xol ham tezda ko'rikni talab qiladi. Melanoma erta aniqlanganda samarali davolanadi, shuning uchun kutib o'tirmaslik kerak. Ko'p xolli odamlarga va oilasida teri saratoni bo'lganlarga muntazam dermatoskopik kuzatuv tavsiya etiladi.",
          'Любое новое или меняющееся пятно и родинку нужно показать дерматологу. Помогает правило ABCDE: асимметрия (A), неровные границы (B), несколько оттенков цвета (C), диаметр больше 6 мм (D) и изменения со временем (E). Быстрого осмотра требуют также родинки, которые зудят, кровоточат, изъязвляются, окружены покраснением или резко отличаются от остальных. Меланома, выявленная на ранней стадии, хорошо поддаётся лечению, поэтому откладывать визит нельзя. Людям с большим количеством родинок и с раком кожи в семье рекомендуется регулярное дерматоскопическое наблюдение.',
          'Any new or changing spot or mole should be shown to a dermatologist. The ABCDE rule helps: Asymmetry, irregular Borders, several Colours, a Diameter over 6 mm and Evolution, or change over time. A mole that itches, bleeds, ulcerates, has redness around it or looks very different from your other moles also needs prompt assessment. Melanoma caught early is highly treatable, so do not put off the visit. People with many moles or a family history of skin cancer are advised to have regular dermatoscopic check-ups.',
        ),
      ),
      S(
        L('Parvarish va profilaktika', 'Уход и профилактика', 'Skincare and prevention'),
        L(
          "Pigmentatsiyaning eng samarali profilaktikasi — har kuni SPF 30–50 li keng spektrli quyosh himoyasi, uni har 2 soatda, terlaganda va suvdan keyin yangilash, shlyapa va ko'zoynakdan foydalanish. Ayniqsa soat 11 dan 16 gacha to'g'ridan-to'g'ri quyoshdan saqlaning. Dog'larni limon, sirka yoki internetdagi kuchli oqartiruvchi aralashmalar bilan ketkazishga urinmang — bu kuyish va yangi, to'qroq dog'larga olib kelishi mumkin. Rangni tekislovchi vositalar va ularning kombinatsiyasini shifokor tanlaydi. Melasma qaytalanishga moyil, shuning uchun natijani saqlash uchun uzoq muddatli parvarish kerak.",
          'Самая эффективная профилактика пигментации — ежедневная солнцезащита широкого спектра с SPF 30–50: обновляйте её каждые 2 часа, после потоотделения и купания, носите шляпу и солнцезащитные очки. Особенно избегайте прямого солнца с 11 до 16 часов. Не пытайтесь выводить пятна лимоном, уксусом или сильными отбеливающими смесями из интернета — это может привести к ожогу и новым, более тёмным пятнам. Осветляющие средства и их сочетание подбирает врач. Мелазма склонна возвращаться, поэтому для сохранения результата нужен длительный поддерживающий уход.',
          'The most effective way to prevent pigmentation is daily broad-spectrum sunscreen with SPF 30–50, reapplied every 2 hours and after sweating or swimming, together with a hat and sunglasses. Avoid direct sun especially between 11 am and 4 pm. Do not try to remove spots with lemon, vinegar or strong bleaching mixtures from the internet — they can burn the skin and cause new, darker marks. Lightening products and how to combine them are chosen by the doctor. Melasma tends to come back, so long-term maintenance care is needed to keep results.',
        ),
      ),
      S(
        L('Keng tarqalgan afsonalar', 'Распространённые мифы', 'Common myths'),
        L(
          "Barcha dog'larni bitta lazer bilan butunlay olib tashlash mumkin degan fikr noto'g'ri: melasma kabi holatlar noto'g'ri tanlangan muolajadan keyin hatto kuchayishi mumkin. Xolni shifokor olib tashlasa, saraton paydo bo'ladi degan qo'rquv asossiz — xavfli bo'lgani o'zgarayotgan xolni e'tiborsiz qoldirish. Qishda quyosh himoyasi kerak emas degan fikr ham xato, chunki ultrabinafsha nurlar yil davomida ta'sir qiladi. Xollarni uyda kuydirish, bog'lash yoki tekshiruvsiz olib tashlash xavfli, chunki bunda to'qima gistologik tekshiruvsiz qoladi va melanoma o'tkazib yuborilishi mumkin.",
          'Миф, что любые пятна можно навсегда убрать одним лазером: мелазма и некоторые другие виды пигментации после неправильно подобранной процедуры могут даже усилиться. Страх, что удаление родинки врачом вызывает рак, необоснован — опасно как раз игнорировать меняющуюся родинку. Ошибочно и мнение, что зимой солнцезащита не нужна: ультрафиолет действует круглый год. Прижигать, перевязывать или удалять родинки дома и без обследования опасно — ткань не попадает на гистологическое исследование, и меланому можно пропустить.',
          'It is a myth that any spot can be removed for good with a single laser session: melasma and some other types of pigmentation can even get worse after the wrong procedure. The fear that having a mole removed by a doctor causes cancer is unfounded — what is dangerous is ignoring a mole that is changing. Skipping sunscreen in winter is also a mistake, because UV light acts all year round. Burning, tying off or removing moles at home or without an examination is risky: the tissue never reaches histology, and melanoma can be missed.',
        ),
      ),
    ],
    aboutFooter: L(
      "Teringizdagi dog'lar yoki xollar sizni bezovta qilsa, Farg'ona yoki Qo'qondagi Radeski Skin Clinic'da dermatoskopiya bilan dermatolog ko'rigidan o'ting — xavfsizlik baholangach, sizga mos yo'l tanlanadi.",
      'Если вас беспокоят пигментные пятна или родинки, пройдите осмотр дерматолога с дерматоскопией в Radeski Skin Clinic в Фергане или Коканде — после оценки безопасности врач подберёт подходящий вам подход.',
      'If spots or moles on your skin concern you, have a dermatologist examination with dermatoscopy at Radeski Skin Clinic in Fergana or Kokand — once safety is assessed, the right approach for you will be chosen.',
    ),
  },

  'teri-qichishi': {
    aboutTitle: L(
      'Teri qichishi haqida nimalarni bilish kerak',
      'Зуд кожи: причины и когда идти к врачу',
      'Itchy skin: causes and when to see a doctor',
    ),
    aboutOverview: L(
      "Teri qichishi (pruritus) — dermatologga murojaat qilishning eng keng tarqalgan sabablaridan biri. U qisqa muddatli bo'lishi, masalan, hasharot chaqishi yoki quruq havodan keyin paydo bo'lishi, yoki olti haftadan ortiq davom etib, surunkali shaklga o'tishi mumkin. Qichish ko'pincha teri kasalliklari bilan bog'liq, ammo ba'zan u jigar, buyrak, qalqonsimon bez, qon kasalliklari yoki qandli diabet kabi ichki muammolarning yagona belgisi bo'ladi. Shuning uchun uzoq davom etayotgan qichishni faqat krem bilan bostirish emas, balki sababini ko'rik va tahlillar orqali aniqlash kerak.",
      'Зуд кожи (прурит) — одна из самых частых причин обращения к дерматологу. Он может быть кратковременным, например после укуса насекомого или из-за сухого воздуха, а может длиться дольше шести недель и переходить в хроническую форму. Чаще всего зуд связан с кожными заболеваниями, но иногда он оказывается единственным признаком болезней печени, почек, щитовидной железы, крови или сахарного диабета. Поэтому затяжной зуд нельзя просто «гасить» кремом — причину нужно найти с помощью осмотра и анализов.',
      'Itchy skin (pruritus) is one of the most common reasons people see a dermatologist. It can be short-lived — after an insect bite or from dry air, for example — or last longer than six weeks and become chronic. Itching is most often linked to skin conditions, but sometimes it is the only sign of an internal problem such as liver, kidney or thyroid disease, a blood disorder or diabetes. That is why persistent itching should not simply be suppressed with a cream; its cause needs to be found through examination and tests.',
    ),
    aboutSections: [
      S(
        L('Qichish qanday namoyon bo\'ladi', 'Как проявляется зуд', 'How itching shows up'),
        L(
          "Qichish butun tanada yoki faqat ma'lum joyda — bosh terisi, qo'llar, oyoqlar, chov sohasi yoki orqada bo'lishi mumkin. Ba'zan u toshma, qizarish, pufakchalar yoki qipiqlanish bilan birga keladi, ba'zan esa teri tashqi tomondan mutlaqo sog'lom ko'rinadi. Qashish natijasida tirnalgan izlar, qobiqlar, terining qalinlashishi va to'q dog'lar paydo bo'ladi, bu esa qichish–qashish aylanasini yanada kuchaytiradi. Kechasi kuchayadigan qichish uyquni buzadi, charchoq va asabiylashishga olib keladi. Qichish qachon boshlangani, qayerda joylashgani va nima uni kuchaytirishi haqidagi ma'lumot shifokor uchun juda muhim.",
          'Зуд может охватывать всё тело или отдельные участки — кожу головы, руки, ноги, паховую область или спину. Иногда он сопровождается сыпью, покраснением, пузырьками или шелушением, а иногда кожа внешне выглядит совершенно здоровой. От расчёсывания появляются ссадины, корочки, утолщение кожи и тёмные пятна, и порочный круг «зуд — расчёсывание» только усиливается. Зуд, который усиливается ночью, нарушает сон и приводит к усталости и раздражительности. Для врача очень важно знать, когда зуд появился, где он локализуется и что его усиливает.',
          'Itching can affect the whole body or specific areas such as the scalp, arms, legs, groin or back. Sometimes it comes with a rash, redness, blisters or flaking, and sometimes the skin looks completely normal. Scratching leaves scratch marks, crusts, thickened skin and dark patches, which only feed the itch–scratch cycle. Itching that gets worse at night disrupts sleep and leads to fatigue and irritability. For the doctor it is very important to know when the itch started, where it is and what makes it worse.',
        ),
      ),
      S(
        L('Teri qichishining sabablari', 'Зуд кожи: основные причины', 'Common causes of itchy skin'),
        L(
          "Teri bilan bog'liq eng ko'p uchraydigan sabablar — quruq teri (kseroz), ekzema va atopik dermatit, allergik va kontakt dermatit, eshakemi (krapivnitsa), psoriaz, zamburug' infeksiyalari, qo'tir va bitlar. Tizimli sabablar qatoriga jigar va o't yo'llari kasalliklari, surunkali buyrak yetishmovchiligi, qalqonsimon bez faoliyatining buzilishi, qandli diabet, temir tanqisligi va ba'zi qon kasalliklari kiradi. Qichish ayrim dori vositalarining nojo'ya ta'siri, homiladorlik yoki asab tizimi muammolari bilan ham bog'liq bo'lishi mumkin; keksa yoshdagi odamlarda u ko'pincha teri qurishi tufayli kuzatiladi. Stress har qanday qichishni kuchaytiradi, ammo uni asosiy sabab deb faqat boshqa holatlar istisno qilingandan keyin hisoblash mumkin.",
          'Среди кожных причин чаще всего встречаются сухость кожи (ксероз), экзема и атопический дерматит, аллергический и контактный дерматит, крапивница, псориаз, грибковые инфекции, чесотка и педикулёз. К системным причинам относятся болезни печени и желчевыводящих путей, хроническая почечная недостаточность, нарушения работы щитовидной железы, сахарный диабет, дефицит железа и некоторые заболевания крови. Зуд также бывает побочным эффектом лекарств, может появляться при беременности или проблемах нервной системы; у пожилых людей он часто связан с сухостью кожи. Стресс усиливает любой зуд, но считать его главной причиной можно только после того, как исключены другие.',
          'The most common skin-related causes are dry skin (xerosis), eczema and atopic dermatitis, allergic and contact dermatitis, hives (urticaria), psoriasis, fungal infections, scabies and lice. Systemic causes include liver and bile duct disease, chronic kidney disease, thyroid disorders, diabetes, iron deficiency and certain blood disorders. Itching can also be a side effect of medication or be linked to pregnancy or nerve problems, and in older people it is frequently due to dry skin. Stress makes any itch worse, but it should be considered the main cause only after other conditions have been ruled out.',
        ),
      ),
      S(
        L('Dermatolog sababni qanday aniqlaydi', 'Как дерматолог ищет причину', 'How a dermatologist finds the cause'),
        L(
          "Dermatolog avval batafsil so'raydi: qichish qachon boshlangan, qayerda, qanday sharoitda kuchayadi, qanday dori va kosmetika ishlatilgan, oila a'zolarida ham qichish bormi. So'ngra butun teri ko'zdan kechiriladi, kerak bo'lsa dermatoskopiya, zamburug' yoki qo'tirga qirma tahlili olinadi. Allergiya gumon qilinganda allergo-proba tavsiya etiladi. Teri sog'lom ko'rinsa yoki qichish uzoq davom etsa, qon tahlillari — umumiy tahlil, jigar va buyrak ko'rsatkichlari, qand, qalqonsimon bez gormonlari, temir — buyuriladi va zarur bo'lsa boshqa mutaxassislarga yo'naltiriladi.",
          'Сначала дерматолог подробно расспрашивает: когда начался зуд, где он ощущается, в каких условиях усиливается, какие лекарства и косметику вы используете, чешется ли кто-то ещё из членов семьи. Затем осматривается вся кожа, при необходимости проводится дерматоскопия, берутся соскобы на грибок или чесоточного клеща. При подозрении на аллергию рекомендуют аллергопробы. Если кожа выглядит здоровой или зуд длится долго, назначают анализы крови — общий анализ, печёночные и почечные показатели, сахар, гормоны щитовидной железы, железо — и при необходимости направляют к другим специалистам.',
          'First the dermatologist asks detailed questions: when the itching began, where you feel it, what makes it worse, which medicines and cosmetics you use and whether anyone else in the family is itchy. Then the whole skin is examined, with dermatoscopy and scrapings for fungus or scabies mites if needed. If allergy is suspected, allergy testing is recommended. If the skin looks normal or the itch has lasted a long time, blood tests are ordered — full blood count, liver and kidney function, blood sugar, thyroid hormones and iron — and you may be referred to other specialists.',
        ),
      ),
      S(
        L('Qachon tezda shifokorga borish kerak', 'Когда нужно срочно к врачу', 'When to see a doctor promptly'),
        L(
          "Qichish ikki haftadan ortiq davom etsa, uyquni buzsa yoki namlantiruvchi vositalardan keyin ham kamaymasa, dermatologga murojaat qiling. Qichish bilan birga sababsiz ozish, kechasi kuchli terlash, isitma, holsizlik, teri yoki ko'z oqining sarg'ayishi, siydik rangining o'zgarishi bo'lsa, bu tizimli kasallik belgisi bo'lishi mumkin va tezda tekshiruvdan o'tish kerak. Oiladagi bir necha kishida bir vaqtda qichish paydo bo'lishi qo'tirga xos. Qichish bilan birga lab, til yoki yuz shishsa va nafas olish qiyinlashsa, darhol tez yordam chaqiring.",
          'Обратитесь к дерматологу, если зуд не проходит дольше двух недель, мешает спать или не уменьшается даже при использовании увлажняющих средств. Если зуд сопровождается необъяснимой потерей веса, ночной потливостью, температурой, слабостью, пожелтением кожи или белков глаз, изменением цвета мочи, это может быть признаком системного заболевания, и обследоваться нужно как можно скорее. Если зуд одновременно появился у нескольких членов семьи, это характерно для чесотки. Если на фоне зуда отекают губы, язык или лицо и становится трудно дышать, немедленно вызывайте скорую помощь.',
          'See a dermatologist if itching lasts more than two weeks, keeps you awake or does not ease with moisturisers. Itching together with unexplained weight loss, night sweats, fever, weakness, yellowing of the skin or the whites of the eyes, or a change in urine colour may point to a systemic disease and should be investigated without delay. Itching that starts in several family members at the same time is typical of scabies. If itching comes with swelling of the lips, tongue or face and difficulty breathing, call emergency services immediately.',
        ),
      ),
      S(
        L('Uy parvarishi', 'Что можно сделать дома', 'What you can do at home'),
        L(
          "Iliq, issiq bo'lmagan suvda qisqa dush qabul qiling, qattiq mochalka va ishqorli sovundan voz keching. Cho'milgandan keyin darhol xushbo'ysiz namlantiruvchi krem yoki emolient surting, ayniqsa qish va issiq yoz oylarida. Paxtali, keng kiyimlar kiying, xonani juda qizdirmang va havoni namlang. Tirnoqlarni qisqa kesing; qashish o'rniga salqin kompress qo'yish yengillik berishi mumkin. Allergiyaga qarshi yoki gormonal vositalarni o'z-o'zidan uzoq muddat qo'llamang — ular sababni yashirib, tashxisni qiyinlashtiradi.",
          'Принимайте короткий душ с тёплой, а не горячей водой, откажитесь от жёсткой мочалки и щелочного мыла. Сразу после душа наносите увлажняющий крем или эмолент без отдушек — особенно зимой и в жаркие летние месяцы. Носите свободную хлопковую одежду, не перегревайте комнату и увлажняйте воздух. Коротко стригите ногти; вместо того чтобы чесать кожу, попробуйте прохладный компресс — он может принести облегчение. Не используйте самостоятельно и подолгу противоаллергические или гормональные средства: они маскируют причину и затрудняют диагностику.',
          'Take short showers in lukewarm rather than hot water, and skip rough washcloths and alkaline soap. Apply a fragrance-free moisturiser or emollient right after bathing, especially in winter and in the hot summer months. Wear loose cotton clothing, avoid overheating your room and keep the air humidified. Keep nails short; instead of scratching, try a cool compress, which can bring relief. Do not use antihistamines or steroid creams on your own for long periods — they can mask the cause and make diagnosis harder.',
        ),
      ),
      S(
        L('Keng tarqalgan afsonalar', 'Распространённые заблуждения', 'Common misconceptions'),
        L(
          "Qichish har doim allergiya degan fikr noto'g'ri — allergiya ko'p sabablardan faqat biri. Teri sog'lom ko'rinsa, qichish jiddiy emas degan xulosa ham xato: aynan shunday holatlarda ichki kasalliklarni tekshirish muhim. Qichishni faqat asab bilan bog'lab, tekshiruvsiz tinchlantiruvchi vositalar ichish haqiqiy sababni o'tkazib yuborishga olib kelishi mumkin. Qo'tir faqat gigiyenaga rioya qilmaydiganlarda bo'ladi degan fikr ham noto'g'ri — u yaqin aloqa orqali har kimga yuqishi mumkin.",
          'Распространённое заблуждение — что зуд всегда означает аллергию; на деле аллергия лишь одна из многих причин. Ошибочно и мнение, что если кожа выглядит здоровой, то зуд не опасен: именно в таких случаях особенно важно проверить внутренние органы. Если списывать зуд только на нервы и принимать успокоительные без обследования, можно пропустить настоящую причину. Неверно и то, что чесотка бывает лишь у тех, кто не соблюдает гигиену: она передаётся при тесном контакте и может появиться у любого.',
          'A common misconception is that itching always means allergy; in fact, allergy is just one of many possible causes. It is also wrong to assume that itching is harmless if the skin looks normal — that is exactly when checking for internal disease matters most. Blaming the itch on nerves alone and taking sedatives without an examination can mean missing the real cause. Nor is scabies limited to people with poor hygiene: it spreads through close contact and can affect anyone.',
        ),
      ),
    ],
    aboutFooter: L(
      "Teri qichishi sizni bezovta qilayotgan bo'lsa, Farg'ona yoki Qo'qondagi Radeski Skin Clinic dermatologiga murojaat qiling — ko'rik va kerakli tahlillar orqali sababini aniqlashga yordam beramiz.",
      'Если вас беспокоит зуд кожи, обратитесь к дерматологу Radeski Skin Clinic в Фергане или Коканде — с помощью осмотра и необходимых анализов мы поможем найти его причину.',
      'If itchy skin is bothering you, see a dermatologist at Radeski Skin Clinic in Fergana or Kokand — with an examination and the right tests we will help find the cause.',
    ),
  },

  'yuz-qizarishi': {
    aboutTitle: L(
      'Yuz qizarishi haqida nimalarni bilish kerak',
      'Покраснение лица: что важно знать',
      'Facial redness: what you should know',
    ),
    aboutOverview: L(
      "Yuz qizarishi alohida kasallik emas, balki turli holatlarning belgisi: oddiy hayajon va issiqlikka reaksiyadan tortib rozasea, kuperoz, dermatit yoki ichki kasalliklargacha. Qisqa muddatli va tez o'tib ketadigan qizarish ko'pincha xavfsiz, ammo doimiy, takrorlanuvchi yoki achishish, qichish va toshmalar bilan kechadigan qizarish dermatolog ko'rigini talab qiladi. To'g'ri davolash aynan sababga bog'liq, shuning uchun hammaga mos universal krem yoki muolaja yo'q. Quyida yuz qizarishining asosiy sabablari va qachon shifokorga borish kerakligi haqida ma'lumot berilgan.",
      'Покраснение лица — не отдельная болезнь, а симптом самых разных состояний: от обычной реакции на волнение и жару до розацеа, купероза, дерматита или внутренних заболеваний. Кратковременное покраснение, которое быстро проходит, чаще всего безопасно, а вот стойкое, повторяющееся или сопровождающееся жжением, зудом и высыпаниями требует осмотра дерматолога. Правильное лечение зависит именно от причины, поэтому универсального крема или процедуры, которые подошли бы всем, не существует. Ниже — об основных причинах покраснения лица и о том, когда стоит обратиться к врачу.',
      'Facial redness is not a disease in itself but a sign of many different conditions — from a normal reaction to emotion or heat to rosacea, couperose, dermatitis or internal disease. Brief redness that fades quickly is usually harmless, while persistent or recurring redness, or redness with burning, itching or a rash, needs a dermatologist’s assessment. The right treatment depends on the cause, so there is no single cream or procedure that suits everyone. Below you will find the main causes of a red face and when to see a doctor.',
    ),
    aboutSections: [
      S(
        L('Yuz qizarishining ko\'rinishlari', 'Как выглядит покраснение лица', 'What facial redness looks like'),
        L(
          "Yuz qizarishi bir necha ko'rinishda bo'lishi mumkin. Vaqtinchalik qizarish issiqlik, hayajon yoki ovqatdan keyin paydo bo'lib, bir necha daqiqada o'tadi. Doimiy diffuz qizarish yonoq va burunda saqlanib qoladi va ko'pincha issiqlik va yonish hissi bilan kechadi. Kuperozda yonoq va burun qanotlarida ingichka qizil yoki binafsha tomirchalar to'ri ko'rinadi. Qizarish qipiqlanish, qichish, pufakchalar yoki tugunchalar bilan birga kelsa, bu dermatit, allergiya yoki rozasea belgisi bo'lishi mumkin.",
          'Покраснение лица бывает разным. Кратковременный прилив появляется после жары, волнения или еды и проходит за несколько минут. Стойкое разлитое покраснение держится на щеках и носу и часто сопровождается ощущением жара и жжения. При куперозе на щеках и крыльях носа видна сеточка тонких красных или фиолетовых сосудов. Если покраснение сочетается с шелушением, зудом, пузырьками или узелками, это может говорить о дерматите, аллергии или розацеа.',
          'Facial redness can take several forms. Transient flushing appears after heat, emotion or a meal and fades within minutes. Persistent diffuse redness stays on the cheeks and nose and is often accompanied by a feeling of heat and burning. In couperose, a network of fine red or purple vessels is visible on the cheeks and sides of the nose. Redness with flaking, itching, blisters or bumps may point to dermatitis, allergy or rosacea.',
        ),
      ),
      S(
        L('Yuz qizarishining sabablari', 'Причины покраснения лица', 'Causes of facial redness'),
        L(
          "Eng ko'p uchraydigan teri sabablari — rozasea, kuperoz (kengaygan kapillyarlar), sezgir va shikastlangan teri to'sig'i, seboreyali dermatit, kontakt allergik dermatit va perioral dermatit. Qizarish nazoratsiz gormonal kremlar, agressiv pilinglar, retinoid va kislotali vositalarni noto'g'ri qo'llash yoki salon muolajalaridan keyin ham paydo bo'ladi. Tashqi omillar — quyosh, sovuq va shamol, issiq ichimliklar, alkogol, achchiq taom va stress — holatni kuchaytiradi. Kam hollarda yuz qizarishi tizimli sabablar bilan bog'liq: qizil yugurik (lyupus) va dermatomiozit kabi autoimmun kasalliklar, gormonal o'zgarishlar va menopauza, qon bosimi muammolari yoki ba'zi dorilarning nojo'ya ta'siri.",
          'Самые частые кожные причины — розацеа, купероз (расширенные капилляры), чувствительная кожа с нарушенным барьером, себорейный, контактный аллергический и периоральный дерматит. Покраснение возникает и после бесконтрольного применения гормональных кремов, агрессивных пилингов, неправильного использования ретиноидов и кислот или салонных процедур. Усиливают его внешние факторы — солнце, холод и ветер, горячие напитки, алкоголь, острая еда и стресс. Реже покраснение лица связано с системными причинами: аутоиммунными заболеваниями, такими как красная волчанка и дерматомиозит, гормональными изменениями и менопаузой, проблемами с давлением или побочным действием лекарств.',
          'The most common skin causes are rosacea, couperose (dilated capillaries), sensitive skin with a damaged barrier, and seborrhoeic, allergic contact and perioral dermatitis. Redness can also follow unsupervised use of steroid creams, aggressive peels, incorrect use of retinoids and acids, or salon treatments. External factors — sun, cold and wind, hot drinks, alcohol, spicy food and stress — make it worse. Less often a red face has a systemic cause: autoimmune diseases such as lupus and dermatomyositis, hormonal changes and menopause, blood pressure problems or side effects of medication.',
        ),
      ),
      S(
        L('Dermatolog tashxisni qanday qo\'yadi', 'Как дерматолог выясняет причину', 'How a dermatologist finds the cause'),
        L(
          "Dermatolog qizarish qachon va qanday sharoitda paydo bo'lishini, qancha davom etishini, qanday kosmetika va dorilar ishlatilganini batafsil so'raydi. Ko'rik va dermatoskopiya tomirlar naqshi, yallig'lanish va qipiqlanish xarakterini baholashga imkon beradi — bu rozasea, kuperoz va dermatitni farqlashda muhim. Kerak bo'lsa Demodex yoki zamburug'ga qirma tahlili, allergo-proba yoki qon tahlillari tavsiya etiladi. Autoimmun yoki gormonal kasallik gumon qilinganda bemor tegishli mutaxassisga yo'naltiriladi, chunki bunday holatda faqat terini davolash yetarli emas.",
          'Дерматолог подробно расспрашивает, когда и при каких обстоятельствах появляется покраснение, сколько оно длится, какую косметику и лекарства вы используете. Осмотр и дерматоскопия позволяют оценить сосудистый рисунок, характер воспаления и шелушения — это важно, чтобы отличить розацеа от купероза и дерматита. При необходимости назначают соскоб на демодекс или грибок, аллергопробы или анализы крови. Если есть подозрение на аутоиммунное или гормональное заболевание, пациента направляют к профильному специалисту: в таком случае лечить только кожу недостаточно.',
          'The dermatologist asks in detail when and in what situations the redness appears, how long it lasts and which cosmetics and medicines you use. Examination and dermatoscopy reveal the vessel pattern and the nature of inflammation and flaking, which is key to telling rosacea from couperose and dermatitis. When needed, a scraping for Demodex or fungus, allergy testing or blood tests are recommended. If an autoimmune or hormonal disease is suspected, you are referred to the relevant specialist, because treating the skin alone would not be enough.',
        ),
      ),
      S(
        L('Qachon shifokorga murojaat qilish kerak', 'Когда обращаться к врачу', 'When to see a doctor'),
        L(
          "Qizarish bir necha haftadan ortiq saqlansa, tobora kuchaysa yoki toshmalar, qipiqlanish va kuchli achishish bilan kechsa, dermatologga murojaat qiling. Burun va yonoqlarda kapalak shaklidagi qizarish bo'g'imlarda og'riq, holsizlik va isitma bilan birga kelsa, bu tizimli kasallik belgisi bo'lishi mumkin va tez tekshiruv talab qiladi. Ko'zlar qizarishi va qum sezgisi qo'shilsa, ko'z rozaseasini istisno qilish kerak. Yuz to'satdan shishib, qizarib, nafas olish qiyinlashsa — bu o'tkir allergik reaksiya, darhol tez yordam chaqiring.",
          'Обратитесь к дерматологу, если покраснение держится дольше нескольких недель, постепенно усиливается или сопровождается высыпаниями, шелушением и сильным жжением. Покраснение в форме бабочки на носу и щеках вместе с болью в суставах, слабостью и температурой может быть признаком системного заболевания и требует быстрого обследования. Если присоединились покраснение глаз и ощущение песка, нужно исключить офтальморозацеа. Если лицо внезапно отекает и краснеет, а дышать становится трудно, — это острая аллергическая реакция, немедленно вызывайте скорую помощь.',
          'See a dermatologist if redness lasts more than a few weeks, keeps getting worse or comes with a rash, flaking and strong burning. A butterfly-shaped redness across the nose and cheeks together with joint pain, fatigue and fever may signal a systemic disease and needs prompt investigation. If red, gritty eyes join in, ocular rosacea should be ruled out. Sudden swelling and redness of the face with difficulty breathing is an acute allergic reaction — call emergency services immediately.',
        ),
      ),
      S(
        L('Sezgir va qizaruvchan teri parvarishi', 'Уход за чувствительной кожей, склонной к покраснению', 'Caring for sensitive, redness-prone skin'),
        L(
          "Sezgir va qizaruvchan teri uchun parvarish oddiy va yumshoq bo'lishi kerak: xushbo'ysiz, spirtsiz tozalovchi va teri to'sig'ini tiklovchi krem. Har kuni keng spektrli quyosh himoyasini qo'llang — Farg'ona vodiysining quyoshli iqlimida bu ayniqsa muhim. Skrab, qattiq cho'tka, issiq suv, sauna va yuzni ishqalashdan saqlaning. Yangi kosmetikani avval kichik joyda sinab ko'ring va bir vaqtda bir nechta faol vositani boshlamang. Shaxsiy triggerlarni — ovqat, ichimlik, havo sharoitini — yozib borish kuchayishlarni kamaytirishga yordam beradi.",
          'Уход за чувствительной кожей, склонной к покраснению, должен быть простым и мягким: очищающее средство без отдушек и спирта и крем, восстанавливающий кожный барьер. Ежедневно наносите солнцезащитное средство широкого спектра — в солнечном климате Ферганской долины это особенно важно. Избегайте скрабов, жёстких щёточек, горячей воды, сауны и растирания лица. Новую косметику сначала тестируйте на небольшом участке и не вводите несколько активных средств одновременно. Записывайте свои триггеры — еду, напитки, погодные условия: это помогает сократить число обострений.',
          'Care for sensitive, redness-prone skin should be simple and gentle: a fragrance-free, alcohol-free cleanser and a cream that repairs the skin barrier. Apply broad-spectrum sunscreen every day — especially important in the sunny climate of the Fergana Valley. Avoid scrubs, stiff brushes, hot water, saunas and rubbing your face. Patch-test new cosmetics on a small area first and never start several active products at once. Keeping a note of your triggers — foods, drinks, weather — helps reduce flare-ups.',
        ),
      ),
      S(
        L('Keng tarqalgan afsonalar', 'Распространённые мифы', 'Common myths'),
        L(
          "Yuz qizarishi shunchaki yupqa teri belgisi va hech narsa qilib bo'lmaydi degan fikr noto'g'ri — sababi aniqlansa, holatni sezilarli yaxshilash mumkin. Kengaygan tomirchalar krem yoki niqoblar bilan yo'qolmaydi; ular uchun odatda vaskulyar lazer yoki IPL kabi apparat usullari qo'llaniladi. Gormonal krem qizarishni tezda kamaytirsa-da, uzoq qo'llanganda teri yupqalashadi va tomirlar ko'payadi. Har qanday qizarish rozasea emas: allergiya, dermatit va boshqa holatlar butunlay boshqacha davolanadi.",
          'Миф, что покраснение лица — просто признак тонкой кожи и с этим ничего не поделать: если найти причину, состояние можно заметно улучшить. Расширенные сосуды не исчезают от кремов и масок — для них обычно применяют аппаратные методы, например сосудистый лазер или IPL. Гормональный крем быстро снимает покраснение, но при длительном применении истончает кожу и делает сосуды заметнее. И не всякое покраснение — это розацеа: аллергия, дерматит и другие состояния лечатся совершенно иначе.',
          'It is a myth that a red face simply means thin skin and nothing can be done: once the cause is found, the condition can improve significantly. Dilated vessels do not disappear with creams or masks — they are usually treated with devices such as a vascular laser or IPL. A steroid cream calms redness quickly, but long-term use thins the skin and makes vessels more visible. And not every red face is rosacea: allergy, dermatitis and other conditions are treated in completely different ways.',
        ),
      ),
    ],
    aboutFooter: L(
      "Yuz qizarishi sizni bezovta qilsa, Farg'ona yoki Qo'qondagi Radeski Skin Clinic dermatologiga konsultatsiyaga yoziling — avval sababi aniqlanadi, keyin sizga mos davolash va parvarish tanlanadi.",
      'Если вас беспокоит покраснение лица, запишитесь на консультацию к дерматологу Radeski Skin Clinic в Фергане или Коканде — сначала мы выясним причину, а затем подберём подходящее лечение и уход.',
      'If facial redness bothers you, book a consultation with a dermatologist at Radeski Skin Clinic in Fergana or Kokand — we will first find the cause and then choose the right treatment and skincare for you.',
    ),
  },
};
