import type { ClinicEquipmentDetails, LocalizedEquipmentText } from '../clinicEquipmentCatalog';

function L(uz: string, ru: string, en: string): LocalizedEquipmentText {
  return { uz, ru, en };
}

/** Long sections of the plasmapheresis device page (loaded with the page, not the app shell). */
export const PLAZMOFOREZ_DETAILS: ClinicEquipmentDetails = {
  about: [
    L(
      "Plazmoforez (plazmaferez deb ham yoziladi) — organizmdan tashqarida o'tkaziladigan muolaja: bemorning qoni steril bir martalik tizim orqali maxsus apparatga yo'naltiriladi, u yerda qonning suyuq qismi — plazma — qon hujayralaridan ajratiladi. Plazma shifokor tanlagan protokol bo'yicha qayta ishlanadi, so'ngra qon hujayralari va tozalangan plazma organizmga qaytariladi.",
      "Плазмофорез (также встречается написание «плазмаферез») — экстракорпоральная процедура: кровь пациента через стерильную одноразовую систему поступает в специальный аппарат, где жидкая часть крови — плазма — отделяется от клеток крови. Плазма обрабатывается по протоколу, выбранному врачом, после чего клетки крови и очищенная плазма возвращаются в организм.",
      "Plasmapheresis is an extracorporeal procedure, meaning it takes place outside the body: the patient's blood passes through a sterile single-use circuit into a dedicated device, where the liquid part of the blood, the plasma, is separated from the blood cells. The plasma is processed according to the protocol chosen by the doctor, and the blood cells and purified plasma are then returned to the body.",
    ),
    L(
      "Dermatologiyada plazmoforez mustaqil davo usuli hisoblanmaydi. U kompleks davolash rejasining bir qismi sifatida ko'rib chiqiladi: surunkali, tez-tez qaytalanadigan yoki og'ir kechayotgan teri kasalliklarida, asosiy davolash yetarlicha natija bermagan hollarda shifokor uni qo'shimcha usul sifatida taklif qilishi mumkin. Radeski klinikasida plazmoforez teri yangilanishi va tiklanishiga qaratilgan protokollarda ham qo'llaniladi.",
      "В дерматологии плазмофорез не является самостоятельным методом лечения. Его рассматривают как часть комплексного плана: при хронических, часто рецидивирующих или тяжело протекающих заболеваниях кожи, когда основная терапия даёт недостаточный эффект, врач может предложить его в качестве дополнительного метода. В клинике Radeski плазмофорез также применяется в протоколах, направленных на обновление и восстановление кожи.",
      "In dermatology, plasmapheresis is not a stand-alone treatment. It is considered as part of a comprehensive plan: for chronic, frequently relapsing or severe skin conditions where the main therapy has not worked well enough, the doctor may suggest it as an additional method. At Radeski, plasmapheresis is also used in protocols aimed at skin renewal and recovery.",
    ),
    L(
      "Plazmoforez qon bilan bog'liq invaziv muolaja bo'lgani uchun unga tayyorgarlik oddiy kosmetologik muolajalarga qaraganda jiddiyroq. Avval dermatolog bemorni ko'rikdan o'tkazadi, kasallik tarixini o'rganadi va laboratoriya tahlillari natijalarini baholaydi. Muolaja o'tkazilishi, seanslar soni va ular orasidagi interval faqat shifokor tomonidan belgilanadi.",
      "Поскольку плазмофорез — инвазивная процедура, связанная с кровью, подготовка к нему серьёзнее, чем к обычным косметологическим процедурам. Сначала дерматолог осматривает пациента, изучает историю заболевания и оценивает результаты лабораторных анализов. Решение о проведении процедуры, количество сеансов и интервал между ними определяет только врач.",
      "Because plasmapheresis is an invasive, blood-related procedure, preparing for it is more involved than for ordinary cosmetic treatments. First, a dermatologist examines the patient, reviews the medical history and assesses the laboratory results. Only the doctor decides whether the procedure is appropriate, how many sessions are needed and how far apart they should be.",
    ),
  ],
  howItWorks: {
    paragraphs: [
      L(
        "Muolaja vaqtida venaga steril bir martalik tizim ulanadi. Qon apparat orqali o'tadi va u yerda plazma qon hujayralaridan ajratiladi. Plazma protokolga muvofiq qayta ishlanadi, hajm yo'qotilishi esa shifokor belgilagan eritmalar bilan qoplanadi. Tizimda qon ivib qolmasligi uchun maxsus antikoagulyant eritma ishlatiladi, butun jarayon tibbiyot xodimi nazoratida kechadi.",
        "Во время процедуры к вене подключается стерильная одноразовая система. Кровь проходит через аппарат, где плазма отделяется от клеток крови. Плазма обрабатывается в соответствии с протоколом, а потеря объёма восполняется растворами, назначенными врачом. Чтобы кровь не свёртывалась в системе, используется специальный антикоагулянтный раствор; весь процесс проходит под контролем медицинского персонала.",
        "During the procedure a sterile single-use circuit is connected to a vein. The blood passes through the device, where the plasma is separated from the blood cells. The plasma is processed according to the protocol, and any loss of volume is replaced with solutions prescribed by the doctor. An anticoagulant solution keeps the blood from clotting in the circuit, and the whole process is monitored by medical staff.",
      ),
      L(
        "Plazma bilan birga uning tarkibidagi ayrim moddalar — masalan, yallig'lanish va immun reaksiyalarida ishtirok etadigan ba'zi oqsillar va immun komplekslar — miqdori vaqtincha kamayishi mumkin. Shu sababli plazmoforez ayrim surunkali yallig'lanishli teri kasalliklarida kompleks terapiyaga qo'shimcha sifatida qo'llaniladi. Ta'sir darajasi har bir bemorda turlicha bo'ladi va uni oldindan kafolatlab bo'lmaydi.",
        "Вместе с плазмой может временно снижаться содержание некоторых входящих в неё веществ — например, отдельных белков и иммунных комплексов, участвующих в воспалительных и иммунных реакциях. Поэтому плазмофорез применяют как дополнение к комплексной терапии при некоторых хронических воспалительных заболеваниях кожи. Выраженность эффекта у разных пациентов различается и не может быть гарантирована заранее.",
        "Along with the plasma, the levels of some substances it carries may be temporarily reduced, for example certain proteins and immune complexes involved in inflammatory and immune reactions. That is why plasmapheresis is used as an addition to comprehensive therapy for some chronic inflammatory skin conditions. How strong the effect is varies from patient to patient and cannot be guaranteed in advance.",
      ),
    ],
    effects: [
      L("Plazmadagi ayrim yallig'lanish omillari miqdorining vaqtincha kamayishi", 'Временное снижение содержания некоторых факторов воспаления в плазме', 'A temporary reduction in some inflammatory factors in the plasma'),
      L("Asosiy dermatologik davolashni qo'llab-quvvatlash", 'Поддержка основной дерматологической терапии', 'Support for the main dermatological treatment'),
      L("Ayrim bemorlarda toshmalar faolligining pasayishi", 'Снижение активности высыпаний у части пациентов', 'Less active rashes in some patients'),
      L("Qichishish kabi bezovta qiluvchi belgilarning yengillashishi", 'Облегчение беспокоящих симптомов, например зуда', 'Relief of troublesome symptoms such as itching'),
      L("Teri tiklanish jarayonlarini qo'llab-quvvatlash", 'Поддержка процессов восстановления кожи', 'Support for the skin\'s recovery processes'),
    ],
  },
  indicationsIntro: L(
    "Plazmoforez quyidagi holatlarda kompleks davolashning bir qismi sifatida ko'rib chiqilishi mumkin. Har bir holatda uning maqsadga muvofiqligini shifokor alohida baholaydi.",
    'Плазмофорез может рассматриваться как часть комплексного лечения в следующих ситуациях. Целесообразность процедуры врач оценивает в каждом случае отдельно.',
    'Plasmapheresis may be considered as part of comprehensive treatment in the following situations. The doctor assesses whether it makes sense in each individual case.',
  ),
  indications: [
    {
      title: L('Psoriaz va atopik dermatit', 'Псориаз и атопический дерматит', 'Psoriasis and atopic dermatitis'),
      text: L(
        "Kasallik og'ir kechayotgan, tez-tez qo'zg'ayotgan yoki odatiy davolashga yetarlicha javob bermayotgan hollarda shifokor plazmoforezni kompleks terapiyaga qo'shishni ko'rib chiqishi mumkin. U tashqi va tizimli davolashning o'rnini bosmaydi, balki ular bilan birga qo'llaniladi. Natija kasallik shakli va faolligiga bog'liq.",
        'При тяжёлом течении, частых обострениях или недостаточном ответе на стандартное лечение врач может рассмотреть включение плазмофореза в комплексную терапию. Он не заменяет наружное и системное лечение, а применяется вместе с ними. Результат зависит от формы и активности заболевания.',
        'When the disease is severe, flares often or does not respond well enough to standard treatment, the doctor may consider adding plasmapheresis to comprehensive therapy. It does not replace topical or systemic treatment but is used alongside them. The outcome depends on the form and activity of the disease.',
      ),
    },
    {
      title: L('Surunkali eshakemi va allergik dermatozlar', 'Хроническая крапивница и аллергодерматозы', 'Chronic urticaria and allergic skin conditions'),
      text: L(
        "Uzoq davom etadigan eshakemi va ayrim allergik teri reaksiyalarida plazmoforez qo'shimcha usul sifatida qo'llanilishi mumkin. Bunda eng muhimi — kasallik sababini aniqlash va qo'zg'atuvchi omillar bilan aloqani kamaytirish. Plazmoforez bu choralar o'rnini bosmaydi.",
        'При длительно текущей крапивнице и некоторых аллергических реакциях кожи плазмофорез может использоваться как дополнительный метод. Главное при этом — установить причину заболевания и уменьшить контакт с провоцирующими факторами. Плазмофорез эти меры не заменяет.',
        'For long-lasting urticaria and some allergic skin reactions, plasmapheresis may be used as an additional method. The key steps remain finding the cause and reducing contact with triggers. Plasmapheresis does not replace these measures.',
      ),
    },
    {
      title: L("Yallig'lanishli akne", 'Воспалительное акне', 'Inflammatory acne'),
      text: L(
        "Toshmalar ko'p, chuqur va qaytalanuvchi bo'lgan ayrim hollarda plazmoforez kompleks davolash rejasining bir qismi sifatida muhokama qilinishi mumkin. Asosiy davolash baribir dermatolog tayinlagan tashqi va tizimli preparatlar hamda to'g'ri teri parvarishi bo'lib qoladi.",
        'В отдельных случаях, когда высыпаний много, они глубокие и рецидивируют, плазмофорез может обсуждаться как часть комплексного плана лечения. Основой терапии при этом остаются наружные и системные препараты, назначенные дерматологом, и правильный уход за кожей.',
        'In some cases, when breakouts are numerous, deep and keep coming back, plasmapheresis may be discussed as part of a comprehensive treatment plan. The foundation of treatment is still the topical and systemic medicines prescribed by the dermatologist and proper skincare.',
      ),
    },
    {
      title: L('Teri yangilanishi va tiklanish protokollari', 'Протоколы обновления и восстановления кожи', 'Skin renewal and recovery protocols'),
      text: L(
        "Radeski klinikasida plazmoforez teri holatini yaxshilashga qaratilgan kompleks protokollarning bir qismi sifatida ham qo'llaniladi. Bunday hollarda u boshqa muolajalar va uyda teri parvarishi bilan birga rejalashtiriladi. Natija individual bo'lib, terining boshlang'ich holatiga bog'liq.",
        'В клинике Radeski плазмофорез также используется как часть комплексных протоколов, направленных на улучшение состояния кожи. В таких случаях его планируют вместе с другими процедурами и домашним уходом. Результат индивидуален и зависит от исходного состояния кожи.',
        'At Radeski, plasmapheresis is also used as part of comprehensive protocols aimed at improving skin condition. In these cases it is planned together with other procedures and home skincare. Results are individual and depend on the starting condition of the skin.',
      ),
    },
    {
      title: L('Murakkab va aralash holatlar', 'Сложные и сочетанные случаи', 'Complex and combined cases'),
      text: L(
        "Agar teri kasalligi boshqa a'zolar holati bilan bog'liq bo'lsa yoki unga bir nechta omil ta'sir qilayotgan bo'lsa, shifokor plazmoforezni umumiy rejaga qo'shish asosli ekanini baholaydi. Zarur bo'lsa, boshqa mutaxassislar bilan maslahatlashish tavsiya etiladi.",
        'Если заболевание кожи связано с состоянием других органов или на него влияет несколько факторов, врач оценивает, обосновано ли включение плазмофореза в общий план. При необходимости рекомендуется консультация смежных специалистов.',
        'If a skin condition is linked to the health of other organs or is influenced by several factors, the doctor assesses whether adding plasmapheresis to the overall plan is justified. A consultation with other specialists is recommended when needed.',
      ),
    },
  ],
  suitability: {
    intro: L(
      "Plazmoforez surunkali teri kasalligi bo'lgan, umumiy ahvoli barqaror va laboratoriya ko'rsatkichlari muolajaga to'sqinlik qilmaydigan kattalar uchun ko'rib chiqilishi mumkin. Qaror qabul qilishdan oldin shifokor quyidagilarni baholaydi:",
      'Плазмофорез может рассматриваться для взрослых пациентов с хроническим заболеванием кожи, стабильным общим состоянием и лабораторными показателями, которые не препятствуют процедуре. Перед принятием решения врач оценивает:',
      'Plasmapheresis may be considered for adults with a chronic skin condition whose general health is stable and whose laboratory results do not rule out the procedure. Before deciding, the doctor assesses:',
    ),
    checks: [
      L("Umumiy qon tahlili va qon ivish ko'rsatkichlari", 'Общий анализ крови и показатели свёртываемости', 'Complete blood count and clotting tests'),
      L("Arterial bosim va yurak-qon tomir tizimi holati", 'Артериальное давление и состояние сердечно-сосудистой системы', 'Blood pressure and cardiovascular health'),
      L("Venalar holati va ularga xavfsiz kirish imkoniyati", 'Состояние вен и возможность безопасного венозного доступа', 'The condition of the veins and safe venous access'),
      L("Surunkali kasalliklar va qabul qilinayotgan dorilar, ayniqsa qon suyultiruvchi vositalar", 'Хронические заболевания и принимаемые лекарства, особенно препараты, разжижающие кровь', 'Chronic illnesses and current medications, especially blood thinners'),
      L("Teri kasalligining turi, faolligi va avvalgi davolash natijalari", 'Тип и активность заболевания кожи, результаты предыдущего лечения', 'The type and activity of the skin condition and the results of previous treatment'),
    ],
  },
  contraindications: {
    intro: L(
      "Plazmoforez invaziv muolaja bo'lgani uchun cheklovlar ro'yxati estetik muolajalarga qaraganda kengroq. Muolajani kechiktirish yoki undan voz kechishning asosiy sabablari:",
      'Поскольку плазмофорез — инвазивная процедура, список ограничений шире, чем у эстетических процедур. Основные причины отложить процедуру или отказаться от неё:',
      'Because plasmapheresis is invasive, the list of restrictions is longer than for aesthetic procedures. The main reasons to postpone or avoid it are:',
    ),
    items: [
      L("Qon ketish yoki qon ivishining buzilishi", 'Кровотечение или нарушения свёртываемости крови', 'Bleeding or clotting disorders'),
      L("Og'ir kamqonlik (anemiya) yoki qondagi oqsil miqdorining sezilarli pastligi", 'Выраженная анемия или значительно сниженный уровень белка в крови', 'Severe anaemia or a markedly low blood protein level'),
      L("Past yoki beqaror arterial bosim", 'Низкое или нестабильное артериальное давление', 'Low or unstable blood pressure'),
      L("Og'ir yurak kasalliklari va yurak ritmining buzilishlari", 'Тяжёлые заболевания сердца и нарушения сердечного ритма', 'Serious heart disease or heart rhythm disorders'),
      L("O'tkir infeksion kasalliklar va isitma", 'Острые инфекционные заболевания и повышенная температура', 'Acute infections and fever'),
      L("Venalar holati muolajani xavfsiz o'tkazishga imkon bermasligi", 'Состояние вен, не позволяющее безопасно провести процедуру', 'Veins that do not allow the procedure to be done safely'),
      L("Antikoagulyant yoki muolajada ishlatiladigan eritmalarga allergiya", 'Аллергия на антикоагулянт или растворы, используемые во время процедуры', 'Allergy to the anticoagulant or the solutions used during the procedure'),
      L("Homiladorlik va emizish davri — bu davrda qaror faqat qat'iy tibbiy ko'rsatma bo'yicha, alohida baholash asosida qabul qilinadi", 'Беременность и грудное вскармливание — в этот период решение принимается только по строгим медицинским показаниям после отдельной оценки', 'Pregnancy and breastfeeding, when a decision is made only for strict medical reasons after a separate assessment'),
    ],
    note: L(
      "Qon suyultiruvchi dorilar qabul qilinganda, qandli diabet, buyrak yoki jigar kasalliklari bo'lganda, shuningdek ilgari tibbiy muolajalar vaqtida hushdan ketish holatlari kuzatilgan bo'lsa, xavflar alohida baholanadi. Bu holatlarning barchasi muolajadan qat'iy voz kechishni anglatmaydi — yakuniy qarorni shifokor qabul qiladi.",
      'При приёме препаратов, разжижающих кровь, при сахарном диабете, заболеваниях почек или печени, а также если ранее во время медицинских процедур случались обмороки, риски оцениваются отдельно. Не все эти обстоятельства означают безусловный отказ от процедуры — окончательное решение принимает врач.',
      'Risks are assessed separately for people taking blood thinners, people with diabetes, kidney or liver disease, and anyone who has fainted during medical procedures in the past. Not all of these circumstances mean the procedure is ruled out; the doctor makes the final decision.',
    ),
  },
  steps: [
    {
      title: L('Konsultatsiya', 'Консультация', 'Consultation'),
      text: L(
        "Dermatolog terini ko'zdan kechiradi, shikoyatlar, kasallik tarixi, qabul qilinayotgan dorilar va avvalgi davolash haqida so'raydi. Shundan so'ng plazmoforez sizning holatingizda asosli yoki yo'qligini aniqlaydi.",
        'Дерматолог осматривает кожу, уточняет жалобы, историю заболевания, принимаемые лекарства и предыдущее лечение. После этого определяет, обоснован ли плазмофорез в вашей ситуации.',
        'The dermatologist examines your skin and asks about your complaints, medical history, current medications and previous treatment, then decides whether plasmapheresis is justified in your case.',
      ),
    },
    {
      title: L('Laboratoriya tekshiruvi', 'Лабораторное обследование', 'Laboratory tests'),
      text: L(
        "Shifokor zarur tahlillarni tayinlaydi, masalan, umumiy qon tahlili va qon ivish ko'rsatkichlari. Natijalarga qarab muolaja rejalashtiriladi yoki kechiktiriladi.",
        'Врач назначает необходимые анализы, например общий анализ крови и показатели свёртываемости. По их результатам процедуру планируют или откладывают.',
        'The doctor orders the necessary tests, such as a complete blood count and clotting tests. Depending on the results, the procedure is scheduled or postponed.',
      ),
    },
    {
      title: L('Muolaja kuni tayyorgarlik', 'Подготовка в день процедуры', 'Preparing on the day'),
      text: L(
        "Odatda muolajadan oldin yengil ovqatlanish, yetarlicha suyuqlik ichish va yaxshi dam olish tavsiya etiladi — aniq ko'rsatmalarni shifokor beradi. Seans oldidan arterial bosim va puls o'lchanadi.",
        'Обычно перед процедурой рекомендуют лёгкий приём пищи, достаточное количество жидкости и хороший отдых — точные указания даёт врач. Перед сеансом измеряют артериальное давление и пульс.',
        'A light meal, enough fluids and a good rest beforehand are usually recommended; the doctor gives the exact instructions. Blood pressure and pulse are checked before the session.',
      ),
    },
    {
      title: L('Plazmoforez seansi', 'Сеанс плазмофореза', 'The plasmapheresis session'),
      text: L(
        "Bemor qulay holatda joylashadi, venaga bir martalik steril tizim ulanadi. Seans davomida tibbiyot xodimi ahvolni kuzatib boradi. Yengil holsizlik, bosh aylanishi yoki lab atrofida uvishish sezilsa, buni darhol xodimga aytish kerak.",
        'Пациент располагается в удобном положении, к вене подключают одноразовую стерильную систему. Во время сеанса медицинский персонал наблюдает за самочувствием. При слабости, головокружении или покалывании вокруг губ нужно сразу сообщить об этом персоналу.',
        'You are made comfortable and a sterile single-use circuit is connected to a vein. Staff monitor how you feel throughout. If you notice weakness, dizziness or tingling around the lips, tell the staff straight away.',
      ),
    },
    {
      title: L('Kuzatuv va tavsiyalar', 'Наблюдение и рекомендации', 'Observation and aftercare'),
      text: L(
        "Seansdan keyin bemor qisqa vaqt kuzatuv ostida qoladi. Shifokor suyuqlik ichish, shu kuni jismoniy yuklamani cheklash, punksiya joyini parvarish qilish va keyingi seans haqida tavsiyalar beradi.",
        'После сеанса пациент некоторое время остаётся под наблюдением. Врач даёт рекомендации по питьевому режиму, ограничению физической нагрузки в этот день, уходу за местом пункции и следующему сеансу.',
        'After the session you stay under observation for a short time. The doctor advises you on drinking fluids, limiting physical activity that day, caring for the puncture site and the next session.',
      ),
    },
  ],
  results: {
    intro: L(
      "Plazmoforez natijasi kasallik turi, uning faolligi va kompleks davolashning boshqa qismlariga bog'liq. Ta'sir hamma bemorlarda bir xil emas va kafolatlanmaydi. Asosiy davolash bilan birga quyidagilar kuzatilishi mumkin:",
      'Результат плазмофореза зависит от вида заболевания, его активности и остальных компонентов комплексного лечения. Эффект неодинаков у разных пациентов и не гарантируется. В сочетании с основной терапией возможно:',
      'The outcome of plasmapheresis depends on the type and activity of the disease and on the rest of the treatment plan. The effect differs between patients and is not guaranteed. Together with the main therapy, you may see:',
    ),
    items: [
      L("Toshmalar va yallig'lanish faolligining kamayishi", 'Уменьшение высыпаний и активности воспаления', 'Fewer rashes and less active inflammation'),
      L('Qichishishning yengillashishi', 'Ослабление зуда', 'Less itching'),
      L("Asosiy davolashga javobning yaxshilanishi", 'Улучшение ответа на основную терапию', 'A better response to the main treatment'),
      L("Ayrim bemorlarda remissiya davrining uzayishi", 'Удлинение периода ремиссии у части пациентов', 'Longer periods of remission in some patients'),
      L("Terining umumiy holati va ko'rinishining yaxshilanishi", 'Улучшение общего состояния и внешнего вида кожи', 'Better overall skin condition and appearance'),
    ],
  },
  conclusion: [
    L(
      "Plazmoforez — dermatologiyada kompleks davolashning yordamchi usuli. U surunkali va qaytalanuvchi teri kasalliklarida, shuningdek teri tiklanishi protokollarida qo'llanilishi mumkin, ammo asosiy davolash o'rnini bosmaydi va har bir bemorga ham ko'rsatilmaydi.",
      'Плазмофорез — вспомогательный метод комплексного лечения в дерматологии. Он может применяться при хронических и рецидивирующих заболеваниях кожи, а также в протоколах восстановления кожи, однако не заменяет основную терапию и показан не каждому пациенту.',
      'Plasmapheresis is a supporting method within comprehensive dermatological treatment. It can be used for chronic and relapsing skin conditions and in skin recovery protocols, but it does not replace the main therapy and is not suitable for every patient.',
    ),
    L(
      "Radeski klinikasida plazmoforez dermatolog konsultatsiyasi va laboratoriya ko'rsatkichlarini baholashdan so'ng rejalashtiriladi. Shifokor muolaja sizga foyda keltirishi mumkinligini, uning xavflarini va qaysi davolash usuli eng asosli ekanini tushuntirib beradi.",
      'В клинике Radeski плазмофорез планируется после консультации дерматолога и оценки лабораторных показателей. Врач объяснит, может ли процедура принести вам пользу, какие у неё риски и какой метод лечения будет наиболее обоснованным.',
      'At Radeski, plasmapheresis is planned after a dermatologist consultation and a review of your laboratory results. The doctor will explain whether the procedure is likely to help you, what its risks are and which treatment approach is the most appropriate.',
    ),
  ],
  faq: [
    {
      question: L('Plazmoforez nima va u nima uchun qilinadi?', 'Что такое плазмофорез и зачем его делают?', 'What is plasmapheresis and why is it done?'),
      answer: L(
        "Plazmoforez — qondan plazmani maxsus apparat yordamida ajratib, uni qayta ishlash va qon hujayralari bilan birga organizmga qaytarish usuli. Dermatologiyada u surunkali teri kasalliklarini kompleks davolashda va teri tiklanishi protokollarida qo'shimcha usul sifatida qo'llaniladi.",
        'Плазмофорез — метод, при котором плазму отделяют от крови с помощью специального аппарата, обрабатывают и возвращают в организм вместе с клетками крови. В дерматологии его используют как дополнительный метод в комплексном лечении хронических заболеваний кожи и в протоколах восстановления кожи.',
        'Plasmapheresis separates plasma from the blood with a dedicated device, processes it and returns it to the body together with the blood cells. In dermatology it is used as an additional method in the comprehensive treatment of chronic skin conditions and in skin recovery protocols.',
      ),
    },
    {
      question: L("Plazmoforez og'riqlimi?", 'Больно ли делать плазмофорез?', 'Is plasmapheresis painful?'),
      answer: L(
        "Sezgilar odatda venadan qon olishga o'xshaydi: igna kiritilganda qisqa muddatli noqulaylik bo'ladi, seansning o'zi esa ko'pincha og'riqsiz kechadi. Ba'zi bemorlar yengil holsizlik, sovqotish yoki lab atrofida uvishishni sezadi — bunday holatda xodimga aytish kerak.",
        'Ощущения обычно похожи на забор крови из вены: при введении иглы возникает кратковременный дискомфорт, сам сеанс чаще всего проходит безболезненно. Некоторые пациенты отмечают лёгкую слабость, озноб или покалывание вокруг губ — об этом нужно сообщить персоналу.',
        'It usually feels like having blood taken: there is brief discomfort when the needle goes in, and the session itself is usually painless. Some people feel mild weakness, chills or tingling around the lips, and should tell the staff if they do.',
      ),
    },
    {
      question: L('Necha seans kerak?', 'Сколько сеансов плазмофореза нужно?', 'How many sessions are needed?'),
      answer: L(
        "Seanslar soni individual: u tashxis, kasallik faolligi, laboratoriya ko'rsatkichlari va muolajani ko'tarish holatiga bog'liq. Kurs davomiyligi va seanslar orasidagi intervalni shifokor belgilaydi va zarur bo'lsa, kurs davomida o'zgartiradi.",
        'Количество сеансов индивидуально: оно зависит от диагноза, активности заболевания, лабораторных показателей и переносимости процедуры. Длительность курса и интервал между сеансами определяет врач и при необходимости корректирует их по ходу лечения.',
        'The number of sessions is individual and depends on the diagnosis, disease activity, laboratory results and how well you tolerate the procedure. The doctor sets the length of the course and the interval between sessions and adjusts them during treatment if needed.',
      ),
    },
    {
      question: L("Plazmoforezdan keyin qanday nojo'ya ta'sirlar bo'lishi mumkin?", 'Какие побочные эффекты бывают после плазмофореза?', 'What side effects can occur after plasmapheresis?'),
      answer: L(
        "Ko'pincha vaqtinchalik holsizlik, bosh aylanishi, arterial bosimning pasayishi va igna kiritilgan joyda ko'karish kuzatilishi mumkin. Kamdan-kam hollarda eritmalarga reaksiya bo'ladi. Shuning uchun muolaja tibbiy nazorat ostida o'tkaziladi va seansdan keyin bemor kuzatiladi.",
        'Чаще всего возможны временная слабость, головокружение, снижение артериального давления и синяк в месте введения иглы. В редких случаях бывает реакция на растворы. Поэтому процедуру проводят под медицинским контролем, а после сеанса пациент находится под наблюдением.',
        'The most common effects are temporary weakness, dizziness, a drop in blood pressure and a bruise where the needle went in. Reactions to the solutions are rare. That is why the procedure is done under medical supervision and you are observed afterwards.',
      ),
    },
    {
      question: L('Bolalarga plazmoforez qilish mumkinmi?', 'Можно ли делать плазмофорез детям?', 'Can children have plasmapheresis?'),
      answer: L(
        "Bolalarda plazmoforez faqat qat'iy tibbiy ko'rsatmalar bo'yicha va alohida baholashdan so'ng ko'rib chiqiladi. Teri yangilanishi kabi rejali maqsadlarda u odatda kattalar uchun rejalashtiriladi. Bolaga bu usul mos-mosligini faqat shifokor konsultatsiyada hal qiladi.",
        'У детей плазмофорез рассматривается только по строгим медицинским показаниям и после отдельной оценки. Для плановых задач, например обновления кожи, его, как правило, планируют для взрослых. Подходит ли метод ребёнку, решает только врач на консультации.',
        'In children, plasmapheresis is considered only for strict medical reasons and after a separate assessment. For elective goals such as skin renewal it is generally planned for adults. Only the doctor can decide at a consultation whether the method is suitable for a child.',
      ),
    },
  ],
};
