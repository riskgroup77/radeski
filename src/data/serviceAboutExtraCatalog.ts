import type { Locale } from '../types';
import type { ServiceAboutContent } from './serviceAboutOverrides';

/** «Xizmat haqida» — qo'shimcha matnlar (SEO uchun yupqa xizmat sahifalari) */
export const SERVICE_ABOUT_EXTRA: Record<string, Record<Locale, ServiceAboutContent>> = {
  gistolog: {
    uz: {
      aboutTitle: "Gistologik mikroskopik tahlil nima va u nima uchun kerak?",
      overview:
        "Gistologik tahlil — biopsiya yoki olib tashlangan teri hosilasidan olingan to'qimani mikroskop ostida o'rganish. Bu tekshiruv ko'rik va dermatoskopiya javob bera olmagan savollarga hujayra darajasida aniqlik kiritadi va davolash rejasini tanlashga asos bo'ladi.",
      aboutSections: [
        {
          title: 'Kimlar uchun tavsiya etiladi',
          description:
            "Tahlil shubhali hol yoki o'smaning tabiatini aniqlash, olib tashlangan hosila to'liq kesilganini tekshirish va surunkali toshmalar sababini topish uchun buyuriladi. U psoriaz, ekzema, liken va autoimmun dermatozlar kabi bir-biriga o'xshash kasalliklarni farqlashda ham yordam beradi. Tekshiruvga yo'llanmani dermatolog yoki dermatoonkolog klinik ko'rik natijasiga qarab beradi.",
        },
        {
          title: 'Namuna qanday tekshiriladi',
          description:
            "Radeski klinikasida olingan namuna maxsus eritmada fiksatsiya qilinadi va bemorning klinik ma'lumotlari bilan birga laboratoriyaga yuboriladi. U yerda to'qimaga ishlov beriladi, juda yupqa kesmalar tayyorlanadi va bo'yaladi. Patolog shifokor kesmalarni mikroskop ostida o'rganadi, zarur bo'lsa immunogistokimyoviy bo'yashlar bilan to'ldiradi. Natija yozma xulosa sifatida rasmiylashtiriladi.",
        },
        {
          title: 'Natija qanday talqin qilinadi',
          description:
            "Gistologik xulosa alohida emas, balki klinik ko'rinish, dermatoskopiya va kasallik tarixi bilan birga baholanadi. Shu sababli natijani davolovchi dermatolog bemor bilan muhokama qiladi va keyingi qadamlarni tushuntiradi. Ba'zan yakuniy javob uchun qo'shimcha bo'yash yoki takroriy biopsiya kerak bo'lishi mumkin — bu xulosada alohida ko'rsatiladi.",
        },
        {
          title: 'Bemor nimani bilishi kerak',
          description:
            "Tahlilning o'zi bemordan alohida tayyorgarlik talab qilmaydi: barcha bosqichlar namuna olingandan keyin laboratoriyada bajariladi. Javob muddati tekshiruv hajmiga va qo'shimcha usullar kerakligiga bog'liq, shuning uchun uni shifokor aniqlashtirib beradi. Xulosani mustaqil talqin qilmang — uni albatta dermatolog bilan ko'rib chiqing.",
        },
      ],
      aboutFooter:
        "Biopsiya natijasini tushunish yoki gistologik tekshiruv kerakligini aniqlash uchun Farg'ona yoki Qo'qondagi Radeski dermatologiga yoziling — shifokor keyingi qadamlarni batafsil tushuntiradi.",
    },
    ru: {
      aboutTitle: 'Что такое гистологическое исследование кожи и зачем оно нужно?',
      overview:
        'Гистологическое исследование — это изучение под микроскопом ткани, полученной при биопсии или удалении образования кожи. Оно даёт ответ на клеточном уровне там, где осмотра и дерматоскопии недостаточно, и становится основой для выбора лечения.',
      aboutSections: [
        {
          title: 'Кому назначается',
          description:
            'Исследование назначают, чтобы уточнить характер подозрительного образования, проверить, полностью ли удалена опухоль, и найти причину хронических высыпаний. Оно помогает различить похожие между собой заболевания — псориаз, экзему, лишай, аутоиммунные дерматозы. Направление выдаёт дерматолог или дерматоонколог по результатам клинического осмотра.',
        },
        {
          title: 'Как исследуется образец',
          description:
            'В клинике Radeski полученный материал фиксируют в специальном растворе и вместе с клиническими данными пациента направляют в лабораторию. Там ткань проходит обработку, из неё готовят тончайшие срезы и окрашивают их. Врач-патолог изучает срезы под микроскопом и при необходимости дополняет исследование иммуногистохимическими окрасками. Результат оформляется в виде письменного заключения.',
        },
        {
          title: 'Как трактуется результат',
          description:
            'Гистологическое заключение оценивают не отдельно, а вместе с клинической картиной, данными дерматоскопии и историей заболевания. Поэтому результат обсуждает с пациентом лечащий дерматолог и объясняет дальнейшие шаги. Иногда для окончательного ответа нужны дополнительные окраски или повторная биопсия — это отдельно указывается в заключении.',
        },
        {
          title: 'Что важно знать пациенту',
          description:
            'Само исследование не требует от пациента особой подготовки: все этапы выполняются в лаборатории после взятия образца. Сроки зависят от объёма работы и необходимости дополнительных методов, поэтому их уточняет врач. Не пытайтесь трактовать заключение самостоятельно — обязательно обсудите его с дерматологом.',
        },
      ],
      aboutFooter:
        'Чтобы разобраться в результате биопсии или понять, нужна ли вам гистология, запишитесь к дерматологу Radeski в Фергане или Коканде — врач подробно объяснит дальнейшую тактику.',
    },
    en: {
      aboutTitle: 'What is skin histopathology and why is it needed?',
      overview:
        'Histopathology is the microscopic examination of tissue taken during a skin biopsy or the removal of a skin lesion. It answers questions at the cellular level when a visual exam and dermoscopy are not enough, and it forms the basis for choosing treatment.',
      aboutSections: [
        {
          title: 'Who it is for',
          description:
            'The test is ordered to clarify the nature of a suspicious mole or growth, to check whether a removed tumour was excised completely, and to find the cause of chronic rashes. It also helps tell apart conditions that look alike, such as psoriasis, eczema, lichen planus and autoimmune skin diseases. A dermatologist or dermato-oncologist refers you based on the clinical examination.',
        },
        {
          title: 'How the sample is examined',
          description:
            'At Radeski, the sample is fixed in a special solution and sent to the laboratory together with your clinical details. There the tissue is processed, cut into very thin sections and stained. A pathologist studies the sections under the microscope and, when needed, adds immunohistochemical stains. The findings are issued as a written report.',
        },
        {
          title: 'How the result is interpreted',
          description:
            'A histology report is never read in isolation: it is weighed together with the clinical picture, dermoscopy findings and your medical history. That is why your treating dermatologist goes through the result with you and explains the next steps. Sometimes extra stains or a repeat biopsy are needed for a final answer, and the report will say so.',
        },
        {
          title: 'What patients should know',
          description:
            'The test itself requires no preparation from you, since every stage happens in the laboratory after the sample is taken. How long it takes depends on the amount of work and whether additional methods are needed, so your doctor will give you an estimate. Please do not try to interpret the report on your own; always review it with a dermatologist.',
        },
      ],
      aboutFooter:
        'To understand a biopsy result or find out whether you need histology, book a Radeski dermatologist in Fergana or Kokand — the doctor will explain the next steps in detail.',
    },
  },

  dermatopatologiya: {
    uz: {
      aboutTitle: "Dermatopatologiya: tashxis mikroskop ostida tasdiqlanganda",
      overview:
        "Dermatopatologiya — dermatologiya va patologik anatomiya tutashgan yo'nalish bo'lib, teri, soch va tirnoq kasalliklarini to'qima namunalari asosida tashxislaydi. Radeski klinikasida bu yo'nalish biopsiya, gistologik tahlil va dermatolog maslahatini yagona diagnostika zanjiriga birlashtiradi.",
      aboutSections: [
        {
          title: "Yo'nalish nimani o'z ichiga oladi",
          description:
            "Asosiy usul — biopsiya namunalarini gistologik mikroskopik tahlil qilish, kerak bo'lganda immunogistokimyoviy tekshiruvlar bilan to'ldirish. Bu usullar o'smaning yaxshi yoki yomon sifatli ekanini, uning turi va chegaralarini baholash hamda yallig'lanishli dermatozlar shaklini farqlash imkonini beradi. Shu tariqa taxminiy tashxis aniq tashxisga aylanadi.",
        },
        {
          title: 'Diagnostika qanday tashkil etilgan',
          description:
            "Avval dermatolog bemorni ko'rikdan o'tkazadi, dermatoskopiya qiladi va biopsiya kerakligini aniqlaydi. So'ng mahalliy og'riqsizlantirish ostida kichik namuna olinadi va u klinik ma'lumotlar bilan birga laboratoriyaga yuboriladi. Namunani patolog o'rganadi, xulosani esa davolovchi shifokor bemor bilan birga muhokama qiladi.",
        },
        {
          title: 'Klinitsist va patolog hamkorligi',
          description:
            "Ko'plab teri kasalliklari mikroskop ostida bir-biriga o'xshaydi, shuning uchun patologga to'liq klinik ma'lumot berilishi muhim. Radeski shifokorlari namunaga hosila joylashuvi, kasallik davomiyligi va taxminiy tashxisni ilova qiladi. Bunday hamkorlik xulosa aniqligini oshiradi, murakkab holatlarda esa qo'shimcha tekshiruv zarurligini o'z vaqtida aniqlashga yordam beradi.",
        },
        {
          title: "Natijadan keyin nima bo'ladi",
          description:
            "Xulosa asosida dermatolog davolash rejasini tuzadi: kuzatuv, dori terapiyasi, jarrohlik yo'li bilan olib tashlash yoki boshqa mutaxassisga yo'naltirish. Agar natija klinik ko'rinishga mos kelmasa, shifokor namunani qayta ko'rib chiqish yoki takroriy biopsiya taklif qilishi mumkin. Bemor har bir qadam nima uchun kerakligini tushunib qaror qabul qiladi.",
        },
      ],
      aboutFooter:
        "Teringizdagi o'zgarish aniq tashxis talab qilsa, Farg'ona yoki Qo'qondagi Radeski dermatologi qabuliga yoziling — shifokor biopsiya va gistologik tahlil kerakligini baholaydi.",
    },
    ru: {
      aboutTitle: 'Дерматопатология: когда диагноз подтверждается под микроскопом',
      overview:
        'Дерматопатология — направление на стыке дерматологии и патологической анатомии, которое ставит диагноз при заболеваниях кожи, волос и ногтей по образцам ткани. В клинике Radeski оно объединяет биопсию, гистологическое исследование и консультацию дерматолога в единую диагностическую цепочку.',
      aboutSections: [
        {
          title: 'Что входит в направление',
          description:
            'Основной метод — гистологическое микроскопическое исследование биоптатов, при необходимости дополненное иммуногистохимией. Эти методы позволяют определить, доброкачественное образование или злокачественное, оценить его тип и границы, а также различить формы воспалительных дерматозов. Так предварительный диагноз становится точным.',
        },
        {
          title: 'Как организована диагностика',
          description:
            'Сначала дерматолог осматривает пациента, проводит дерматоскопию и решает, нужна ли биопсия. Затем под местной анестезией берётся небольшой образец, который вместе с клиническими данными направляется в лабораторию. Образец изучает патолог, а заключение лечащий врач обсуждает вместе с пациентом.',
        },
        {
          title: 'Совместная работа клинициста и патолога',
          description:
            'Многие заболевания кожи под микроскопом выглядят похоже, поэтому патологу важно получить полную клиническую информацию. Врачи Radeski прилагают к образцу сведения о локализации, длительности заболевания и предполагаемом диагнозе. Такое взаимодействие повышает точность заключения, а в сложных случаях помогает вовремя понять, что нужны дополнительные исследования.',
        },
        {
          title: 'Что происходит после результата',
          description:
            'На основании заключения дерматолог составляет план: наблюдение, лекарственная терапия, хирургическое удаление или направление к другому специалисту. Если результат не совпадает с клинической картиной, врач может предложить пересмотр препаратов или повторную биопсию. Пациент принимает решение, понимая, зачем нужен каждый шаг.',
        },
      ],
      aboutFooter:
        'Если изменение на коже требует точного диагноза, запишитесь к дерматологу Radeski в Фергане или Коканде — врач оценит, нужны ли биопсия и гистологическое исследование.',
    },
    en: {
      aboutTitle: 'Dermatopathology: when the diagnosis is confirmed under the microscope',
      overview:
        'Dermatopathology sits where dermatology meets pathology: it diagnoses diseases of the skin, hair and nails from tissue samples. At Radeski it links biopsy, histological analysis and dermatologist consultation into one diagnostic pathway.',
      aboutSections: [
        {
          title: 'What it covers',
          description:
            'The core method is microscopic histological examination of biopsy samples, supplemented by immunohistochemistry when needed. These methods show whether a growth is benign or malignant, help assess its type and margins, and distinguish between forms of inflammatory skin disease. In this way a working diagnosis becomes a confirmed one.',
        },
        {
          title: 'How the diagnostic process works',
          description:
            'First, a dermatologist examines you, performs dermoscopy and decides whether a biopsy is needed. A small sample is then taken under local anaesthesia and sent to the laboratory along with your clinical details. A pathologist examines the sample, and your treating doctor reviews the report with you.',
        },
        {
          title: 'Clinician and pathologist working together',
          description:
            'Many skin conditions look similar under the microscope, so the pathologist needs full clinical information. Radeski doctors send each sample with notes on its location, how long the problem has lasted and the suspected diagnosis. This collaboration makes the report more accurate and, in complex cases, helps identify early on when further tests are needed.',
        },
        {
          title: 'What happens after the result',
          description:
            'Based on the report, the dermatologist draws up a plan: monitoring, medication, surgical removal or referral to another specialist. If the result does not fit the clinical picture, the doctor may suggest a second review of the slides or a repeat biopsy. You make each decision knowing why the step is needed.',
        },
      ],
      aboutFooter:
        'If a skin change needs a precise diagnosis, book a Radeski dermatologist in Fergana or Kokand — the doctor will assess whether a biopsy and histology are needed.',
    },
  },

  botulino: {
    uz: {
      aboutTitle: "Botulinoterapiya (Botoks) haqida nimalarni bilish kerak?",
      overview:
        "Botulinoterapiya — botulotoksin preparatini mimik mushaklarga kichik dozalarda yuborib, ularning faolligini vaqtincha pasaytiradigan inyeksion usul. Mushak bo'shashgach, uning ustidagi teri tekislanadi va mimik ajinlar kamroq ko'rinadi.",
      aboutSections: [
        {
          title: 'Kimlar uchun mos',
          description:
            "Muolaja asosan peshona, qosh orasi va ko'z atrofidagi dinamik ajinlar bilan murojaat qilgan kattalar uchun tavsiya etiladi. Ajinlar hali chuqurlashmagan bosqichda u ayniqsa yaxshi natija beradi. Chuqur statik burmalar va hajm yo'qolishida botulinoterapiyaning o'zi yetarli bo'lmasligi mumkin — bunda shifokor boshqa usullarni ham taklif qiladi.",
        },
        {
          title: "Muolaja qanday o'tadi",
          description:
            "Radeski klinikasida avval dermatolog konsultatsiya o'tkazadi: mimikani kuzatadi, salomatlik holati va qabul qilinayotgan dorilar haqida so'raydi. So'ng inyeksiya nuqtalari belgilanadi, teri antiseptik bilan tozalanadi va juda ingichka igna bilan preparat yuboriladi. Muolaja odatda qisqa vaqt oladi, keyin bemor bir oz kuzatuvda qoladi.",
        },
        {
          title: "Qarshi ko'rsatmalar va ehtiyot choralari",
          description:
            "Homiladorlik va emizish davri, nerv-mushak kasalliklari, inyeksiya sohasidagi yallig'lanish yoki infeksiya, shuningdek o'tkir kasallik holatida muolaja o'tkazilmaydi. Ba'zi dorilar ham to'sqinlik qilishi mumkin, shuning uchun ularni oldindan shifokorga ayting. Ozroq shish, ko'karish yoki bosh og'rig'i kabi nojo'ya holatlar odatda vaqtinchalik bo'ladi.",
        },
        {
          title: 'Natija va muolajadan keyin',
          description:
            "Ta'sir odatda 3–7 kunda boshlanadi, taxminan ikki haftada to'liq namoyon bo'ladi va bir necha oy saqlanadi; muddat har kimda turlicha. Birinchi kun inyeksiya joylarini uqalamaslik, sauna, issiq vanna va jadal sportdan saqlanish tavsiya etiladi. Taxminan ikki haftadan keyingi nazorat ko'rigida shifokor natijani baholaydi va kerak bo'lsa tuzatish kiritadi.",
        },
      ],
      aboutFooter:
        "Botulinoterapiya sizga mos keladimi, bilish uchun Farg'ona yoki Qo'qondagi Radeski dermatologi konsultatsiyasiga yoziling.",
    },
    ru: {
      aboutTitle: 'Что важно знать о ботулинотерапии (Ботокс)?',
      overview:
        'Ботулинотерапия — инъекционный метод, при котором препарат ботулотоксина в малых дозах вводят в мимические мышцы, временно снижая их активность. Когда мышца расслабляется, кожа над ней разглаживается, и мимические морщины становятся менее заметными.',
      aboutSections: [
        {
          title: 'Кому подходит',
          description:
            'Процедуру рекомендуют взрослым пациентам с динамическими морщинами на лбу, между бровями и вокруг глаз. Особенно хороший результат она даёт, пока морщины ещё не стали глубокими. При глубоких статических заломах и потере объёма одной ботулинотерапии может быть недостаточно — тогда врач предложит и другие методы.',
        },
        {
          title: 'Как проходит процедура',
          description:
            'В клинике Radeski сначала проводится консультация дерматолога: врач наблюдает за мимикой, уточняет состояние здоровья и принимаемые лекарства. Затем отмечаются точки инъекций, кожа обрабатывается антисептиком, и препарат вводится очень тонкой иглой. Процедура обычно занимает немного времени, после неё пациент ненадолго остаётся под наблюдением.',
        },
        {
          title: 'Противопоказания и меры предосторожности',
          description:
            'Процедуру не проводят при беременности и кормлении грудью, нервно-мышечных заболеваниях, воспалении или инфекции в зоне инъекций, а также при остром заболевании. Некоторые лекарства тоже могут быть препятствием, поэтому заранее сообщите о них врачу. Небольшой отёк, синяк или головная боль обычно проходят самостоятельно.',
        },
        {
          title: 'Результат и что делать после',
          description:
            'Эффект обычно начинается через 3–7 дней, полностью проявляется примерно за две недели и сохраняется несколько месяцев; срок индивидуален. В первые сутки не рекомендуется массировать зоны инъекций, посещать сауну, принимать горячую ванну и интенсивно заниматься спортом. На контрольном осмотре примерно через две недели врач оценит результат и при необходимости проведёт коррекцию.',
        },
      ],
      aboutFooter:
        'Чтобы узнать, подходит ли вам ботулинотерапия, запишитесь на консультацию дерматолога Radeski в Фергане или Коканде.',
    },
    en: {
      aboutTitle: 'What should you know about botulinum therapy (Botox)?',
      overview:
        'Botulinum therapy is an injectable treatment in which small doses of botulinum toxin are placed into the muscles of facial expression to temporarily reduce their activity. As the muscle relaxes, the skin above it smooths out and expression lines become less visible.',
      aboutSections: [
        {
          title: 'Who it suits',
          description:
            'The treatment is recommended for adults with dynamic wrinkles on the forehead, between the brows and around the eyes. It works especially well before lines have become deep. For deep static creases and volume loss, botulinum therapy alone may not be enough, and the doctor will suggest other options as well.',
        },
        {
          title: 'How the procedure works',
          description:
            'At Radeski, it starts with a dermatologist consultation: the doctor watches how your face moves and asks about your health and any medications. The injection points are then marked, the skin is cleaned with an antiseptic and the product is injected with a very fine needle. The procedure is usually short, and you stay for a brief observation afterwards.',
        },
        {
          title: 'Contraindications and precautions',
          description:
            'The treatment is not performed during pregnancy or breastfeeding, in neuromuscular disorders, with inflammation or infection at the injection site, or during an acute illness. Some medications may also rule it out, so tell your doctor about them in advance. Mild swelling, bruising or a headache are usually temporary.',
        },
        {
          title: 'Results and aftercare',
          description:
            'The effect usually begins within 3–7 days, reaches its full extent in about two weeks and lasts several months; the duration varies from person to person. For the first day, avoid rubbing the injection sites, saunas, hot baths and intense exercise. At a follow-up visit about two weeks later, the doctor assesses the result and makes adjustments if needed.',
        },
      ],
      aboutFooter:
        'To find out whether botulinum therapy is right for you, book a consultation with a Radeski dermatologist in Fergana or Kokand.',
    },
  },

  konturnaya: {
    uz: {
      aboutTitle: "Kontur plastikasi: tabiiy natija uchun nimalarni bilish kerak?",
      overview:
        "Kontur plastikasi — gialuron kislotasi asosidagi gel (filler)ni teri ostiga yoki chuqurroq qatlamlarga yuborib, yo'qolgan hajmni to'ldirish va yuz konturini tuzatish usuli. Maqsad yuzni o'zgartirish emas, balki uning tabiiy nisbatlarini saqlagan holda yangilangan ko'rinish berishdir.",
      aboutSections: [
        {
          title: 'Qachon tavsiya etiladi',
          description:
            "Usul lab hajmi va shaklini tuzatish, yonoq, iyak va jag' chizig'ini aniqlashtirish, nazolabial burmalarni yumshatish uchun qo'llaniladi. U yosh bilan yuzaga keladigan hajm yo'qolishida ham, ba'zi tug'ma assimetriyalarda ham foydali bo'lishi mumkin. Qaysi zona va qancha hajm kerakligini shifokor yuz anatomiyasini baholab belgilaydi.",
        },
        {
          title: 'Muolaja bosqichlari',
          description:
            "Radeski klinikasida konsultatsiyada shifokor yuzni turli burchaklardan ko'radi, bemor istagini tinglaydi va real natija haqida ochiq gapiradi. Muolaja kuni teri tozalanadi va zararsizlantiriladi, kerak bo'lsa mahalliy og'riqsizlantiruvchi krem qo'yiladi. Filler igna yoki kanyula yordamida, qon tomirlar joylashuvini hisobga olib, kichik porsiyalarda yuboriladi, so'ng zona yengil modellashtiriladi.",
        },
        {
          title: "Xavfsizlik va qarshi ko'rsatmalar",
          description:
            "Homiladorlik va emizish, muolaja sohasida gerpes yoki boshqa yallig'lanish, qon ivishining buzilishi va ba'zi autoimmun kasalliklar to'sqinlik qilishi mumkin. Odatdagi vaqtinchalik reaksiyalar — shish, qizarish va ko'karish. Kamdan-kam hollarda jiddiyroq asoratlar uchraydi, shuning uchun muolajani yuz anatomiyasini yaxshi biladigan shifokor bajaradi va bemorga qaysi belgilarda darhol murojaat qilish kerakligini tushuntiradi.",
        },
        {
          title: 'Natija qancha saqlanadi',
          description:
            "Hajm muolajadan so'ng darhol ko'rinadi, yakuniy shakl esa shish qaytgach, taxminan ikki haftada aniqlanadi. Gialuron kislotasi asta-sekin so'riladi, shu sababli natija bir necha oydan bir yilgacha yoki undan ko'proq saqlanishi mumkin — bu zona va organizm xususiyatlariga bog'liq. Dastlabki kunlarda sauna, faol sport va zonani qattiq bosishdan saqlanish tavsiya etiladi.",
        },
      ],
      aboutFooter:
        "Tabiiy va xavfsiz kontur plastikasi rejasini tuzish uchun Farg'ona yoki Qo'qondagi Radeski shifokori konsultatsiyasiga yoziling.",
    },
    ru: {
      aboutTitle: 'Контурная пластика: что нужно знать для естественного результата?',
      overview:
        'Контурная пластика — метод, при котором гель (филлер) на основе гиалуроновой кислоты вводят под кожу или в более глубокие слои, чтобы восполнить утраченный объём и скорректировать контуры лица. Цель — не изменить лицо, а освежить его, сохранив естественные пропорции.',
      aboutSections: [
        {
          title: 'Когда рекомендуется',
          description:
            'Метод применяют для коррекции объёма и формы губ, подчёркивания скул, подбородка и линии челюсти, смягчения носогубных складок. Он может быть полезен как при возрастной потере объёма, так и при некоторых врождённых асимметриях. Какие зоны и какой объём нужны, врач определяет, оценив анатомию лица.',
        },
        {
          title: 'Этапы процедуры',
          description:
            'В клинике Radeski на консультации врач осматривает лицо с разных ракурсов, выслушивает пожелания пациента и честно говорит о реалистичном результате. В день процедуры кожу очищают и обеззараживают, при необходимости наносят местный анестезирующий крем. Филлер вводят иглой или канюлей небольшими порциями с учётом расположения сосудов, после чего зону мягко моделируют.',
        },
        {
          title: 'Безопасность и противопоказания',
          description:
            'Препятствием могут быть беременность и кормление грудью, герпес или другое воспаление в зоне процедуры, нарушения свёртываемости крови и некоторые аутоиммунные заболевания. Обычные временные реакции — отёк, покраснение и синяки. Серьёзные осложнения встречаются редко, поэтому процедуру выполняет врач, хорошо знающий анатомию лица, и объясняет, при каких признаках нужно сразу обратиться в клинику.',
        },
        {
          title: 'Сколько держится результат',
          description:
            'Объём виден сразу после процедуры, а окончательная форма проявляется примерно через две недели, когда спадёт отёк. Гиалуроновая кислота постепенно рассасывается, поэтому результат может сохраняться от нескольких месяцев до года и дольше — это зависит от зоны и особенностей организма. В первые дни рекомендуется избегать сауны, активного спорта и сильного давления на зону.',
        },
      ],
      aboutFooter:
        'Чтобы составить план естественной и безопасной контурной пластики, запишитесь на консультацию врача Radeski в Фергане или Коканде.',
    },
    en: {
      aboutTitle: 'Dermal fillers: what to know for a natural-looking result',
      overview:
        'Dermal fillers are hyaluronic acid gels injected under the skin or into deeper layers to replace lost volume and refine facial contours. The goal is not to change your face but to refresh it while keeping its natural proportions.',
      aboutSections: [
        {
          title: 'When it is recommended',
          description:
            'Fillers are used to adjust lip volume and shape, define the cheekbones, chin and jawline, and soften nasolabial folds. They can help both with age-related volume loss and with some inborn asymmetries. The doctor decides which areas to treat and how much product is needed after assessing your facial anatomy.',
        },
        {
          title: 'Steps of the procedure',
          description:
            'At Radeski, the consultation includes looking at your face from different angles, listening to your wishes and being honest about what is realistic. On the day of treatment the skin is cleansed and disinfected, and a topical numbing cream is applied if needed. The filler is injected in small amounts with a needle or cannula, taking the position of blood vessels into account, and the area is then gently shaped.',
        },
        {
          title: 'Safety and contraindications',
          description:
            'Pregnancy and breastfeeding, cold sores or other inflammation in the treatment area, bleeding disorders and some autoimmune conditions may rule out the procedure. Common temporary reactions include swelling, redness and bruising. Serious complications are rare, which is why the treatment is done by a doctor with a thorough knowledge of facial anatomy, who will tell you which signs mean you should contact the clinic straight away.',
        },
        {
          title: 'How long results last',
          description:
            'Volume is visible right after treatment, and the final shape settles in about two weeks once swelling has gone down. Hyaluronic acid is gradually absorbed, so results may last from several months to a year or longer, depending on the area and your body. For the first few days, avoid saunas, strenuous exercise and pressing hard on the treated area.',
        },
      ],
      aboutFooter:
        'To plan natural, safe filler treatment, book a consultation with a Radeski doctor in Fergana or Kokand.',
    },
  },

  'alex-lazer': {
    uz: {
      aboutTitle: "Aleksandrit lazer epilyatsiyasi qanday ishlaydi?",
      overview:
        "Aleksandrit lazeri 755 nm to'lqin uzunligidagi nur chiqaradi: u sochdagi melanin pigmenti tomonidan yutilib, soch follikulasini qizdiradi va uning o'sish qobiliyatini kamaytiradi. Usul ochiq va o'rtacha rangli teridagi to'q rangli sochlar uchun ayniqsa mos keladi.",
      aboutSections: [
        {
          title: 'Kimlar uchun mos',
          description:
            "Muolaja yuz, qo'ltiq osti, oyoqlar, bikini zonasi va tananing boshqa qismlaridagi ortiqcha sochlardan xalos bo'lmoqchi bo'lganlar uchun mo'ljallangan. U tez-tez qirish yoki mum bilan bog'liq o'sib ketgan sochlar muammosida ham yordam berishi mumkin. Oq, kulrang, sariq yoki malla sochlarda pigment kam bo'lgani uchun lazer samaradorligi past bo'ladi.",
        },
        {
          title: "Muolaja qanday o'tadi",
          description:
            "Radeski klinikasida avval shifokor teri turi, soch rangi va qalinligini baholaydi, kerak bo'lsa kichik sinov sohasida tekshiradi. Muolajadan bir kun oldin zonadagi sochlar qirib olinadi. Seans davomida lazer impulslari sovitish bilan birga beriladi — bemor engil issiqlik yoki chimchilashni his qiladi. Oxirida teriga tinchlantiruvchi vosita surtiladi.",
        },
        {
          title: 'Cheklovlar va ehtiyot choralari',
          description:
            "Yaqinda quyoshda qorayish yoki solyariy, muolaja sohasidagi yallig'lanish va teri kasalliklari, homiladorlik hamda yorug'likka sezuvchanlikni oshiradigan ba'zi dorilar muolajaga to'sqinlik qilishi mumkin. Qoramtir yoki qorayib qolgan terida pigmentatsiya va kuyish xavfi ortadi, shuning uchun bunday hollarda shifokor boshqa yechim taklif qilishi mumkin. Kurs davomida sochni yulish yoki mum ishlatish tavsiya etilmaydi.",
        },
        {
          title: 'Natija va kurs',
          description:
            "Lazer faqat faol o'sish bosqichidagi sochlarga ta'sir qiladi, shuning uchun bir necha haftalik oraliq bilan bir nechta seans kerak bo'ladi. Har seansdan keyin sochlar siyraklashib, ingichkalashadi; seanslar soni zona, gormonal fon va soch xususiyatlariga bog'liq. Muolajadan keyin qisqa muddat qizarish bo'lishi mumkin, quyoshdan himoya kremi esa butun kurs davomida zarur.",
        },
      ],
      aboutFooter:
        "Teringiz va sochingizga mos epilyatsiya rejasini bilish uchun Farg'ona yoki Qo'qondagi Radeski shifokori konsultatsiyasiga yoziling.",
    },
    ru: {
      aboutTitle: 'Как работает александритовая лазерная эпиляция?',
      overview:
        'Александритовый лазер излучает свет с длиной волны 755 нм: его поглощает пигмент меланин в волосе, фолликул нагревается и теряет способность к росту. Метод особенно подходит для удаления тёмных волос на светлой и средней по тону коже.',
      aboutSections: [
        {
          title: 'Кому подходит',
          description:
            'Процедура предназначена для тех, кто хочет избавиться от нежелательных волос на лице, в подмышечных впадинах, на ногах, в зоне бикини и других участках тела. Она также может помочь при вросших волосах, связанных с частым бритьём или восковой эпиляцией. На седых, светлых и рыжих волосах пигмента мало, поэтому эффективность лазера невысока.',
        },
        {
          title: 'Как проходит процедура',
          description:
            'В клинике Radeski врач сначала оценивает тип кожи, цвет и толщину волос, при необходимости проводит тест на небольшом участке. За день до процедуры волосы в зоне сбривают. Во время сеанса лазерные импульсы подаются вместе с охлаждением — пациент ощущает лёгкое тепло или покалывание. В конце на кожу наносят успокаивающее средство.',
        },
        {
          title: 'Ограничения и меры предосторожности',
          description:
            'Препятствием могут стать свежий загар или солярий, воспаление и кожные заболевания в зоне процедуры, беременность, а также некоторые лекарства, повышающие чувствительность к свету. На смуглой или загорелой коже возрастает риск пигментации и ожога, поэтому в таких случаях врач может предложить другое решение. Во время курса не рекомендуется выщипывать волосы или использовать воск.',
        },
        {
          title: 'Результат и курс',
          description:
            'Лазер действует только на волосы в фазе активного роста, поэтому нужен курс из нескольких сеансов с интервалом в несколько недель. После каждого сеанса волосы становятся реже и тоньше; количество процедур зависит от зоны, гормонального фона и особенностей волос. После сеанса возможно кратковременное покраснение, а солнцезащитный крем нужен на протяжении всего курса.',
        },
      ],
      aboutFooter:
        'Чтобы узнать, какой план эпиляции подходит вашей коже и волосам, запишитесь на консультацию врача Radeski в Фергане или Коканде.',
    },
    en: {
      aboutTitle: 'How does alexandrite laser hair removal work?',
      overview:
        'The alexandrite laser emits light at a wavelength of 755 nm, which is absorbed by the melanin pigment in hair; the follicle heats up and its ability to grow is reduced. The method is especially suited to removing dark hair on light to medium skin tones.',
      aboutSections: [
        {
          title: 'Who it suits',
          description:
            'The treatment is designed for people who want to get rid of unwanted hair on the face, underarms, legs, bikini area and other parts of the body. It can also help with ingrown hairs caused by frequent shaving or waxing. Grey, white, blonde and red hair contains little pigment, so the laser is much less effective on it.',
        },
        {
          title: 'How the procedure works',
          description:
            'At Radeski, the doctor first assesses your skin type and the colour and thickness of your hair, and may do a test patch on a small area. The day before treatment, the area is shaved. During the session, laser pulses are delivered together with cooling, and you may feel mild warmth or a snapping sensation. A soothing product is applied to the skin at the end.',
        },
        {
          title: 'Limits and precautions',
          description:
            'A recent tan or sunbed use, inflammation or skin disease in the treatment area, pregnancy and certain light-sensitising medications may rule out treatment. Darker or tanned skin carries a higher risk of pigment changes and burns, so in such cases the doctor may suggest a different option. Plucking or waxing is not recommended during the course.',
        },
        {
          title: 'Results and course',
          description:
            'The laser only affects hairs in the active growth phase, so a course of several sessions a few weeks apart is needed. After each session hair becomes sparser and finer; the number of sessions depends on the area, hormones and hair characteristics. Brief redness may follow treatment, and sunscreen is needed throughout the course.',
        },
      ],
      aboutFooter:
        'To find the hair removal plan that suits your skin and hair, book a consultation with a Radeski doctor in Fergana or Kokand.',
    },
  },

  'moh-surgery': {
    uz: {
      aboutTitle: "Mohs mikrografik jarrohligi: teri saratonini aniq va tejamkor olib tashlash",
      overview:
        "Mohs jarrohligi — ayrim teri saratonlarini qatlam-baqatlam olib tashlab, har bir qatlam chegarasini jarrohlik davomida mikroskop ostida tekshiradigan usul. U o'sma to'liq olib tashlanganini nazorat qilish bilan birga sog'lom to'qimani imkon qadar saqlash imkonini beradi.",
      aboutSections: [
        {
          title: "Qachon qo'llaniladi",
          description:
            "Usul asosan bazal hujayrali karsinoma (bazalioma) va ba'zi yassi hujayrali karsinomalar uchun qo'llaniladi, ayniqsa o'sma yuz, burun, quloq, qovoq yoki lab kabi to'qimani tejash muhim bo'lgan sohada joylashganda. Qayta paydo bo'lgan yoki chegaralari noaniq o'smalarda ham ko'rib chiqiladi. Har bir teri saratoniga Mohs kerak emas: ko'p hollarda oddiy kesib olib tashlash yoki boshqa usullar yetarli.",
        },
        {
          title: 'Jarrohlik bosqichlari',
          description:
            "Muolaja mahalliy og'riqsizlantirish ostida o'tkaziladi. Shifokor ko'rinadigan o'smani yupqa chegara bilan olib tashlaydi, to'qimani xaritada belgilaydi va mikroskopik tekshiruvga tayyorlaydi. Chegarada o'sma hujayralari topilsa, faqat o'sha joydan qo'shimcha qatlam olinadi; jarayon chegaralar toza bo'lguncha takrorlanadi. Shundan so'ng yara tikiladi yoki holatga qarab boshqa usulda yopiladi.",
        },
        {
          title: 'Qaror qanday qabul qilinadi',
          description:
            "Mohs usulini qo'llash to'g'risidagi qarorni dermatoonkolog ko'rik, dermatoskopiya va odatda oldindan o'tkazilgan biopsiya natijasi asosida qabul qiladi. Radeski klinikasida shifokor o'smaning turi, o'lchami va joylashuvini baholab, aynan sizning holatingizga mos davolash usulini tushuntiradi. Ba'zi hollarda boshqa ixtisoslashgan markaz bilan hamkorlikda davolash tavsiya etilishi mumkin.",
        },
        {
          title: 'Jarrohlikdan keyin',
          description:
            "Har bir qatlamni tekshirishga vaqt kerak bo'lgani uchun muolaja bir necha soat davom etishi mumkin. Keyingi kunlarda yara parvarishi bo'yicha ko'rsatmalarga amal qilish va tikuvlarni olish uchun belgilangan vaqtda kelish muhim. Teri saratonini boshdan kechirgan bemorlarga yangi o'zgarishlarni o'z vaqtida aniqlash uchun muntazam dermatologik kuzatuv va quyoshdan himoya tavsiya etiladi.",
        },
      ],
      aboutFooter:
        "Teri saratoni aniqlangan yoki unga shubha bo'lsa, Farg'ona yoki Qo'qondagi Radeski dermatoonkologiga yoziling — shifokor davolash variantlarini batafsil tushuntiradi.",
    },
    ru: {
      aboutTitle: 'Микрографическая хирургия Mohs: точное и бережное удаление рака кожи',
      overview:
        'Хирургия Mohs — метод послойного удаления некоторых видов рака кожи, при котором края каждого слоя исследуются под микроскопом прямо в ходе операции. Он позволяет контролировать полноту удаления опухоли и при этом максимально сохранить здоровые ткани.',
      aboutSections: [
        {
          title: 'Когда применяется',
          description:
            'Метод используется прежде всего при базальноклеточном раке (базалиоме) и некоторых формах плоскоклеточного рака, особенно когда опухоль расположена там, где важно сберечь ткани, — на лице, носу, ушах, веках или губах. Его также рассматривают при рецидивирующих опухолях и опухолях с нечёткими границами. Mohs нужен не при каждом раке кожи: во многих случаях достаточно обычного иссечения или других методов.',
        },
        {
          title: 'Этапы операции',
          description:
            'Вмешательство проводится под местной анестезией. Врач удаляет видимую опухоль с тонким краем, картирует ткань и готовит её к микроскопическому исследованию. Если в крае обнаруживаются опухолевые клетки, дополнительный слой берут только из этого участка; процесс повторяют, пока края не станут чистыми. Затем рану ушивают или закрывают другим способом в зависимости от ситуации.',
        },
        {
          title: 'Как принимается решение',
          description:
            'Решение о применении метода Mohs принимает дерматоонколог на основании осмотра, дерматоскопии и, как правило, предварительной биопсии. В клинике Radeski врач оценивает тип, размер и расположение опухоли и объясняет, какой метод лечения подходит именно в вашем случае. Иногда может быть рекомендовано лечение совместно с другим специализированным центром.',
        },
        {
          title: 'После операции',
          description:
            'Поскольку на исследование каждого слоя нужно время, процедура может длиться несколько часов. В последующие дни важно соблюдать рекомендации по уходу за раной и прийти на снятие швов в назначенное время. Пациентам, перенёсшим рак кожи, рекомендуется регулярное наблюдение у дерматолога и защита от солнца, чтобы вовремя заметить новые изменения.',
        },
      ],
      aboutFooter:
        'Если у вас выявлен рак кожи или есть подозрение на него, запишитесь к дерматоонкологу Radeski в Фергане или Коканде — врач подробно объяснит варианты лечения.',
    },
    en: {
      aboutTitle: 'Mohs micrographic surgery: precise, tissue-sparing removal of skin cancer',
      overview:
        'Mohs surgery removes certain skin cancers layer by layer, with the margins of each layer checked under the microscope during the operation itself. This lets the surgeon confirm that the tumour has been fully removed while sparing as much healthy tissue as possible.',
      aboutSections: [
        {
          title: 'When it is used',
          description:
            'The method is used mainly for basal cell carcinoma and some squamous cell carcinomas, especially when the tumour sits where saving tissue matters, such as the face, nose, ears, eyelids or lips. It is also considered for recurrent tumours and those with poorly defined borders. Not every skin cancer needs Mohs; in many cases standard excision or other methods are sufficient.',
        },
        {
          title: 'Steps of the surgery',
          description:
            'The procedure is done under local anaesthesia. The surgeon removes the visible tumour with a thin margin, maps the tissue and prepares it for microscopic examination. If tumour cells are found at the edge, an extra layer is taken only from that spot, and the process is repeated until the margins are clear. The wound is then stitched or closed by another method, depending on the situation.',
        },
        {
          title: 'How the decision is made',
          description:
            'The decision to use Mohs surgery is made by a dermato-oncologist based on examination, dermoscopy and usually a prior biopsy. At Radeski, the doctor assesses the type, size and location of the tumour and explains which treatment suits your particular case. Sometimes treatment in cooperation with another specialised centre may be recommended.',
        },
        {
          title: 'After surgery',
          description:
            'Because each layer takes time to examine, the procedure can last several hours. In the following days it is important to follow wound-care instructions and return on time to have stitches removed. Anyone who has had skin cancer is advised to have regular dermatology check-ups and use sun protection so that new changes are caught early.',
        },
      ],
      aboutFooter:
        'If you have been diagnosed with skin cancer or suspect it, book a Radeski dermato-oncologist in Fergana or Kokand — the doctor will explain your treatment options in detail.',
    },
  },

  'podolog-dermatolog': {
    uz: {
      aboutTitle: "Dermatologik podolog xizmati: tirnoq va oyoq salomatligiga tibbiy yondashuv",
      overview:
        "Dermatologik podolog xizmati — oyoq terisi va tirnoqlar muammolarini kosmetik emas, tibbiy nuqtai nazardan hal qiladigan yo'nalish. Podologik muolajalar dermatolog nazoratida va tashxis aniqlangandan keyin bajariladi.",
      aboutSections: [
        {
          title: 'Kimlarga kerak',
          description:
            "Xizmat o'sib ketgan tirnoq, tirnoq qalinlashishi va deformatsiyasi, tirnoq zamburug'iga shubha, qadoq, tovon yoriqlari va oyoqdagi og'riqli qattiq teri bilan murojaat qilganlar uchun mo'ljallangan. Qandli diabet, qon aylanishi buzilishi yoki oyoq shakli o'zgargan bemorlar uchun muntazam professional parvarish ayniqsa muhim. Bunday bemorlarda har qanday muolaja alohida ehtiyotkorlik bilan rejalashtiriladi.",
        },
        {
          title: "Qabul qanday o'tadi",
          description:
            "Radeski klinikasida avval tirnoq va oyoq terisi ko'rikdan o'tkaziladi, kerak bo'lsa dermatoskopiya qilinadi yoki zamburug'ni tasdiqlash uchun laboratoriya tahliliga namuna olinadi. So'ng muolaja steril asboblar bilan bajariladi: tirnoqqa apparatli ishlov berish, qadoq va qalinlashgan terini olib tashlash, o'sib ketgan tirnoq chetini bo'shatish yoki korreksiya tizimini o'rnatish. Kerak bo'lsa mahalliy og'riqsizlantirish qo'llaniladi.",
        },
        {
          title: 'Cheklovlar va xavfsizlik',
          description:
            "Kuchli yiringli yallig'lanish, ochiq yara yoki diabetik oyoq yarasi bo'lsa, avval davolash yoki boshqa mutaxassis maslahati kerak bo'lishi mumkin. Zamburug' tashxisi tasdiqlanmaguncha antifungal dorilar tayinlanmaydi, chunki tirnoq o'zgarishlari boshqa sabablarga ham bog'liq bo'lishi mumkin. Barcha asboblar har bir bemordan keyin sterilizatsiyadan o'tkaziladi.",
        },
        {
          title: 'Natijadan nimani kutish mumkin',
          description:
            "Ko'p hollarda og'riq va bosim birinchi muolajadan keyin kamayadi, ammo tirnoq shaklini to'g'rilash va zamburug'ni davolash bir necha oy talab qiladi, chunki sog'lom tirnoq sekin o'sadi. Shifokor uy parvarishi, poyabzal tanlash va gigiyena bo'yicha tavsiyalar beradi. Qayta ko'riklar natijani nazorat qilish va muammo qaytalanishining oldini olishga yordam beradi.",
        },
      ],
      aboutFooter:
        "Tirnoq yoki oyoq muammosi bezovta qilsa, Farg'ona yoki Qo'qondagi Radeski dermatologi qabuliga yoziling — shifokor tashxis qo'yib, mos muolajani tanlaydi.",
    },
    ru: {
      aboutTitle: 'Дерматологический подолог: медицинский подход к здоровью ногтей и стоп',
      overview:
        'Дерматологическая подология — направление, которое решает проблемы кожи стоп и ногтей не с косметической, а с медицинской точки зрения. Подологические процедуры выполняются под контролем дерматолога и после уточнения диагноза.',
      aboutSections: [
        {
          title: 'Кому это нужно',
          description:
            'Услуга предназначена для пациентов с вросшим ногтем, утолщением и деформацией ногтей, подозрением на грибок, мозолями, трещинами на пятках и болезненными уплотнениями кожи стоп. Регулярный профессиональный уход особенно важен при сахарном диабете, нарушениях кровообращения и деформациях стопы. У таких пациентов любую процедуру планируют с особой осторожностью.',
        },
        {
          title: 'Как проходит приём',
          description:
            'В клинике Radeski сначала осматривают ногти и кожу стоп, при необходимости проводят дерматоскопию или берут материал на лабораторный анализ для подтверждения грибка. Затем процедура выполняется стерильными инструментами: аппаратная обработка ногтя, удаление мозолей и огрубевшей кожи, освобождение вросшего края ногтя или установка корректирующей системы. При необходимости применяется местная анестезия.',
        },
        {
          title: 'Ограничения и безопасность',
          description:
            'При выраженном гнойном воспалении, открытой ране или диабетической язве стопы сначала может потребоваться лечение или консультация другого специалиста. Противогрибковые препараты не назначают, пока диагноз не подтверждён, ведь изменения ногтей могут иметь и другие причины. Все инструменты после каждого пациента проходят стерилизацию.',
        },
        {
          title: 'Чего ожидать',
          description:
            'Во многих случаях боль и давление уменьшаются уже после первой процедуры, однако исправление формы ногтя и лечение грибка занимают несколько месяцев, потому что здоровый ноготь растёт медленно. Врач даёт рекомендации по домашнему уходу, выбору обуви и гигиене. Повторные осмотры помогают контролировать результат и предотвратить рецидив.',
        },
      ],
      aboutFooter:
        'Если вас беспокоят ногти или стопы, запишитесь к дерматологу Radeski в Фергане или Коканде — врач поставит диагноз и подберёт подходящую процедуру.',
    },
    en: {
      aboutTitle: 'Dermatological podology: a medical approach to nail and foot health',
      overview:
        'Dermatological podology deals with problems of the foot skin and nails from a medical rather than cosmetic standpoint. Podology procedures are carried out under dermatologist supervision once the diagnosis has been clarified.',
      aboutSections: [
        {
          title: 'Who needs it',
          description:
            'The service is for patients with ingrown toenails, thickened or deformed nails, suspected nail fungus, corns and calluses, cracked heels and painful hard skin on the feet. Regular professional care is especially important for people with diabetes, poor circulation or foot deformities. For these patients every procedure is planned with particular caution.',
        },
        {
          title: 'How the visit works',
          description:
            'At Radeski, the nails and foot skin are examined first; if needed, dermoscopy is performed or a sample is sent to the laboratory to confirm fungus. The procedure is then carried out with sterile instruments: device-based nail treatment, removal of calluses and thickened skin, freeing an ingrown nail edge or fitting a correction system. Local anaesthesia is used when needed.',
        },
        {
          title: 'Limits and safety',
          description:
            'With severe pus-forming inflammation, an open wound or a diabetic foot ulcer, treatment or another specialist\'s opinion may be needed first. Antifungal medication is not prescribed until the diagnosis is confirmed, because nail changes can have other causes. All instruments are sterilised after every patient.',
        },
        {
          title: 'What to expect',
          description:
            'In many cases pain and pressure ease after the first procedure, but correcting nail shape and treating fungus take several months because a healthy nail grows slowly. The doctor will advise you on home care, choice of footwear and hygiene. Follow-up visits help monitor progress and prevent the problem from coming back.',
        },
      ],
      aboutFooter:
        'If your nails or feet are bothering you, book a Radeski dermatologist in Fergana or Kokand — the doctor will make a diagnosis and choose the right procedure.',
    },
  },
};
