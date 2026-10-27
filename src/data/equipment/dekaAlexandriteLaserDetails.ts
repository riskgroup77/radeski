import type { ClinicEquipmentDetails, LocalizedEquipmentText } from '../clinicEquipmentCatalog';

function L(uz: string, ru: string, en: string): LocalizedEquipmentText {
  return { uz, ru, en };
}

/** Long sections of the DEKA alexandrite laser page (loaded with the page, not the app shell). */
export const DEKA_ALEXANDRITE_LASER_DETAILS: ClinicEquipmentDetails = {
  about: [
    L(
      "Aleksandrit lazer o'z nomini nur hosil qiluvchi faol muhit — aleksandrit kristalidan olgan. U 755 nm to'lqin uzunligida ishlaydi va bu nur melanin pigmenti tomonidan yaxshi yutiladi. Shu sababli 755 nm lazer epilyatsiyasi uchun klassik to'lqin uzunliklaridan biri hisoblanadi. Radeski klinikasida Italiyaning DEKA kompaniyasi ishlab chiqargan aleksandrit lazer qo'llaniladi.",
      'Александритовый лазер получил своё название от активной среды, в которой генерируется излучение, — кристалла александрита. Он работает на длине волны 755 нм, которая хорошо поглощается пигментом меланином. Поэтому 755 нм считается одной из классических длин волн для лазерной эпиляции. В клинике Radeski используется александритовый лазер итальянской компании DEKA.',
      "The alexandrite laser takes its name from the alexandrite crystal that generates its beam. It works at a wavelength of 755 nm, which is well absorbed by the pigment melanin. That is why 755 nm is regarded as one of the classic wavelengths for laser hair removal. At Radeski, an alexandrite laser made by the Italian company DEKA is used.",
    ),
    L(
      "Lazer selektiv fototermoliz tamoyili asosida ishlaydi: energiya asosan pigmentli nishonda — soch tolasi va follikulada — yutiladi va issiqlikka aylanadi. Bu issiqlik sochning o'sishi uchun javob beradigan follikula tuzilmalariga ta'sir qiladi. To'g'ri tanlangan parametrlar va terini sovutish atrofdagi terini ortiqcha qizib ketishdan himoya qilishga yordam beradi.",
      'Лазер работает по принципу селективного фототермолиза: энергия поглощается преимущественно пигментированной мишенью — волосом и фолликулом — и превращается в тепло. Это тепло воздействует на структуры фолликула, отвечающие за рост волоса. Правильно подобранные параметры и охлаждение кожи помогают защитить окружающие ткани от избыточного нагрева.',
      "The laser works on the principle of selective photothermolysis: the energy is absorbed mainly by a pigmented target, the hair shaft and follicle, and turns into heat. That heat acts on the parts of the follicle responsible for hair growth. Well-chosen settings and skin cooling help protect the surrounding skin from overheating.",
    ),
    L(
      "Aleksandrit lazer melanin orqali ishlagani uchun ochiqroq teridagi to'q rangli sochlarda eng yaxshi natija beradi. Oq, oqargan, och sariq va qizg'ish sochlarda pigment kam bo'lgani sababli ta'sir sezilarli darajada zaif bo'ladi, to'q teri esa alohida ehtiyotkorlikni talab qiladi. Epilyatsiyadan tashqari, apparat shifokor baholagandan keyin ayrim pigment dog'lari va ayrim tomir ko'rinishlari uchun ham qo'llanilishi mumkin.",
      'Поскольку александритовый лазер работает через меланин, наилучший результат он даёт на тёмных волосах на более светлой коже. На седых, светлых, белёсых и рыжих волосах пигмента мало, поэтому эффект заметно слабее, а тёмная кожа требует особой осторожности. Помимо эпиляции, аппарат после оценки врача может применяться для некоторых пигментных пятен и отдельных сосудистых проявлений.',
      "Because the alexandrite laser works through melanin, it gives the best results on dark hair on lighter skin. White, grey, light blond and red hair contain little pigment, so the effect is much weaker, and darker skin needs extra caution. Besides hair removal, after a doctor's assessment the device can also be used for some pigment spots and selected vascular concerns.",
    ),
  ],
  howItWorks: {
    paragraphs: [
      L(
        "Soch sikllar bilan o'sadi: faol o'sish (anagen), o'tish (katagen) va tinim (telogen) bosqichlari bor. Lazer faol o'sish bosqichidagi follikulalarga eng samarali ta'sir qiladi, chunki bu davrda soch pigmentga boy bo'ladi va follikula bilan bog'liq turadi. Har bir lahzada sochlarning faqat bir qismi shu bosqichda bo'lgani uchun barqaror natija olish uchun bir necha hafta oralig'ida o'tkaziladigan seanslar kursi kerak bo'ladi.",
        'Волосы растут циклами: есть фаза активного роста (анаген), переходная фаза (катаген) и фаза покоя (телоген). Лазер наиболее эффективно действует на фолликулы в фазе активного роста, когда волос богат пигментом и связан с фолликулом. Поскольку в каждый момент времени в этой фазе находится лишь часть волос, для устойчивого результата нужен курс процедур с интервалом в несколько недель.',
        "Hair grows in cycles: there is an active growth phase (anagen), a transition phase (catagen) and a resting phase (telogen). The laser works best on follicles in the active growth phase, when the hair is rich in pigment and still attached to the follicle. Since only some of the hairs are in this phase at any time, a course of sessions spaced several weeks apart is needed for a lasting result.",
      ),
      L(
        "Pigment dog'lari bilan ishlashda nur dog'dagi melanin tomonidan yutiladi. Muolajadan keyin dog' odatda vaqtincha to'qlashadi, so'ngra keyingi kunlarda mayda qobiqlar bilan asta-sekin ko'chib tushadi. Bu holda parametrlar epilyatsiyadagidan farq qiladi va ularni shifokor dog'ning turi va teri fototipiga qarab tanlaydi.",
        'При работе с пигментными пятнами излучение поглощается меланином пятна. После процедуры пятно обычно временно темнеет, а затем в течение последующих дней постепенно отшелушивается мелкими корочками. Параметры в этом случае отличаются от параметров эпиляции, и врач подбирает их с учётом типа пятна и фототипа кожи.',
        "When treating pigment spots, the light is absorbed by the melanin in the spot. After treatment the spot usually darkens temporarily and then flakes off gradually as fine crusts over the following days. The settings here differ from those used for hair removal, and the doctor chooses them based on the type of spot and your skin phototype.",
      ),
    ],
    effects: [
      L("Sochlar zichligining asta-sekin kamayishi", 'Постепенное уменьшение густоты волос', 'Gradual reduction in hair density'),
      L("Qayta o'sgan sochlarning ingichkaroq va ochroq bo'lishi", 'Отрастающие волосы становятся тоньше и светлее', 'Regrowing hair becoming finer and lighter'),
      L("Teri ichiga o'sib kirgan sochlarning kamayishi", 'Уменьшение количества вросших волос', 'Fewer ingrown hairs'),
      L("Qirish yoki boshqa usullar bilan epilyatsiyaga kamroq ehtiyoj", 'Меньшая потребность в бритье и других способах удаления волос', 'Less need for shaving or other hair removal methods'),
      L("Ayrim yuzaki pigment dog'larining xiralashishi", 'Уменьшение выраженности некоторых поверхностных пигментных пятен', 'Some superficial pigment spots fading'),
    ],
  },
  indicationsIntro: L(
    "Aleksandrit lazer quyidagi holatlarda teri va soch turini baholagandan keyin ko'rib chiqilishi mumkin.",
    'Александритовый лазер может рассматриваться в следующих случаях после оценки типа кожи и волос.',
    'The alexandrite laser may be considered in the following situations after your skin and hair type have been assessed.',
  ),
  indications: [
    {
      title: L("Yuz va tanadagi ortiqcha tuklar", 'Нежелательные волосы на лице и теле', 'Unwanted hair on the face and body'),
      text: L(
        "Lazer epilyatsiyasi yuz, qo'ltiq osti, bikini zonasi, oyoq, qo'l va orqa kabi zonalarda qo'llanilishi mumkin. To'q va qalinroq sochlar odatda yaxshiroq javob beradi. Har bir zona uchun parametrlar va seanslar orasidagi interval alohida tanlanadi.",
        'Лазерная эпиляция может проводиться на лице, в подмышечных впадинах, в зоне бикини, на ногах, руках и спине. Тёмные и более жёсткие волосы обычно лучше отвечают на лечение. Для каждой зоны параметры и интервалы между сеансами подбираются отдельно.',
        "Laser hair removal can be done on the face, underarms, bikini area, legs, arms and back. Dark and coarser hair usually responds better. Settings and the interval between sessions are chosen separately for each area.",
      ),
    },
    {
      title: L("Gormonlar bilan bog'liq ortiqcha tuk o'sishi", 'Избыточный рост волос гормонального происхождения', 'Excess hair growth linked to hormones'),
      text: L(
        "Ayollarda iyak, yuqori lab yoki tanada tuklarning ko'p o'sishi ba'zan gormonal o'zgarishlar bilan bog'liq bo'ladi. Lazer tuklarni kamaytiradi, lekin sababni davolamaydi, shuning uchun shifokor endokrinolog yoki ginekolog ko'rigini tavsiya qilishi mumkin. Bunday hollarda natijani saqlash uchun qo'llab-quvvatlovchi seanslar kerak bo'lishi mumkin.",
        'Избыточный рост волос у женщин на подбородке, над верхней губой или на теле иногда связан с гормональными изменениями. Лазер уменьшает количество волос, но не устраняет причину, поэтому врач может рекомендовать консультацию эндокринолога или гинеколога. В таких случаях для поддержания результата могут понадобиться поддерживающие сеансы.',
        "In women, excess hair on the chin, upper lip or body is sometimes linked to hormonal changes. The laser reduces hair but does not treat the cause, so the doctor may recommend seeing an endocrinologist or gynaecologist. In such cases maintenance sessions may be needed to keep the result.",
      ),
    },
    {
      title: L("O'sib kirgan sochlar va qirishdan keyingi ta'sirlanish", 'Вросшие волосы и раздражение после бритья', 'Ingrown hairs and irritation after shaving'),
      text: L(
        "Muntazam qirish ko'pincha teri ichiga o'sib kirgan sochlar, qizil bo'rtmalar va ulardan keyin qoladigan qora dog'larga olib keladi. Sochlar soni kamayishi bilan bu muammolar ham odatda kamayadi. Faol yallig'langan elementlar bo'lsa, avval ularni tinchlantirish kerak bo'lishi mumkin.",
        'Регулярное бритьё часто приводит к врастанию волос, красным бугоркам и тёмным пятнам, которые остаются после них. По мере уменьшения количества волос эти проблемы обычно тоже уменьшаются. При активных воспалённых элементах сначала может потребоваться их лечение.',
        "Regular shaving often leads to ingrown hairs, red bumps and the dark marks they leave behind. As the number of hairs goes down, these problems usually ease as well. If there are actively inflamed bumps, they may need to be calmed first.",
      ),
    },
    {
      title: L("Pigment dog'lari", 'Пигментные пятна', 'Pigment spots'),
      text: L(
        "Aleksandrit lazer quyosh dog'lari va yoshga bog'liq ayrim yuzaki pigment dog'larini korreksiya qilishda qo'llanilishi mumkin. Har bir qora dog' oddiy pigmentatsiya emas: muolajadan oldin dermatolog dog'ni dermatoskop bilan tekshiradi, shubhali hosilalarga esa tashxis qo'yilmaguncha lazer bilan ishlov berilmaydi. Melazma lazer ta'siridan keyin kuchayishi mumkin, shuning uchun unga alohida yondashiladi.",
        'Александритовый лазер может применяться для коррекции солнечных и некоторых возрастных поверхностных пигментных пятен. Не каждое тёмное пятно является обычной пигментацией: перед процедурой дерматолог осматривает пятно с помощью дерматоскопа, а подозрительные образования до установления диагноза лазером не обрабатывают. Мелазма может усиливаться после лазерного воздействия, поэтому к ней нужен отдельный подход.',
        "The alexandrite laser can be used to treat sun spots and some superficial age-related pigment spots. Not every dark spot is simple pigmentation: before treatment the dermatologist examines the spot with a dermatoscope, and suspicious lesions are not treated with a laser until a diagnosis has been made. Melasma can worsen after laser treatment, so it needs a different approach.",
      ),
    },
    {
      title: L("Ayrim tomir ko'rinishlari", 'Отдельные сосудистые проявления', 'Selected vascular concerns'),
      text: L(
        "Shifokor qaroriga ko'ra aleksandrit lazer ayrim tomir ko'rinishlari bilan ishlashda ham ishlatilishi mumkin. Biroq hamma tomir muammolari uchun bu usul mos emas va ba'zi hollarda boshqa apparat yoki davolash usuli afzalroq bo'ladi. Buni konsultatsiyada shifokor aniqlaydi.",
        'По решению врача александритовый лазер может использоваться и при некоторых сосудистых проявлениях. Однако этот метод подходит не для всех сосудистых проблем, и в ряде случаев предпочтительнее другой аппарат или способ лечения. Это определяет врач на консультации.',
        "At the doctor's discretion, the alexandrite laser may also be used for some vascular concerns. However, it does not suit every vascular problem, and in some cases another device or treatment is preferable. The doctor decides this at the consultation.",
      ),
    },
  ],
  suitability: {
    intro: L(
      "Aleksandrit lazer ortiqcha tuklardan uzoq muddatga qutulishni yoki ayrim pigment dog'larini kamaytirishni istagan kattalar uchun mos bo'lishi mumkin. Konsultatsiyada shifokor quyidagilarni baholaydi:",
      'Александритовый лазер может подойти взрослым, которые хотят надолго уменьшить количество нежелательных волос или скорректировать некоторые пигментные пятна. На консультации врач оценивает:',
      "The alexandrite laser may suit adults who want a long-term reduction in unwanted hair or to treat certain pigment spots. At the consultation the doctor assesses:",
    ),
    checks: [
      L("Teri fototipi va hozirgi zagar bor-yo'qligi", 'Фототип кожи и наличие загара', 'Skin phototype and any current tan'),
      L("Sochlarning rangi, qalinligi va zichligi", 'Цвет, толщину и густоту волос', 'Hair colour, thickness and density'),
      L("Ortiqcha tuk o'sishining mumkin bo'lgan sababi, jumladan gormonal omillar", 'Возможную причину избыточного роста волос, включая гормональные факторы', 'Possible causes of excess hair growth, including hormonal factors'),
      L("Qabul qilinayotgan dorilar va gerpes tarixi", 'Принимаемые лекарства и наличие герпеса в анамнезе', 'Current medications and any history of herpes'),
      L("Zonadagi xollar, tatuirovkalar va avval qo'llangan epilyatsiya usullari", 'Родинки и татуировки в зоне обработки, а также ранее использованные способы удаления волос', 'Moles and tattoos in the area and hair removal methods used before'),
    ],
  },
  contraindications: {
    intro: L(
      "Muolaja o'tkazish imkoniyati individual belgilanadi. Lazer ta'sirini kechiktirish yoki undan voz kechishning asosiy sabablari:",
      'Возможность проведения процедуры определяется индивидуально. Основные причины отложить лазерное воздействие или отказаться от него:',
      "Whether treatment is possible is decided individually. The main reasons to postpone or avoid laser treatment are:",
    ),
    items: [
      L("Yaqinda olingan zagar, solyariy yoki avtozagar", 'Свежий загар, солярий или автозагар', 'A fresh tan, tanning bed use or self-tanner'),
      L("Ishlov beriladigan zonadagi faol infeksiya, jumladan gerpesning qo'zishi", 'Активная инфекция в зоне обработки, включая обострение герпеса', 'An active infection in the treatment area, including a herpes flare-up'),
      L("Zonadagi yallig'lanish, yara yoki kuchli ta'sirlanish", 'Воспаление, раны или выраженное раздражение в зоне обработки', 'Inflammation, wounds or marked irritation in the area'),
      L("Zonadagi tekshirilmagan xollar va shubhali pigmentli hosilalar", 'Необследованные родинки и подозрительные пигментные образования в зоне', 'Unexamined moles and suspicious pigmented lesions in the area'),
      L("Ishlov beriladigan zonadagi tatuirovka yoki doimiy makiyaj", 'Татуировка или перманентный макияж в зоне обработки', 'A tattoo or permanent make-up in the treatment area'),
      L("Terining yorug'likka sezuvchanligini oshiradigan dorilar, shuningdek izotretinoin qabul qilish", 'Препараты, повышающие светочувствительность кожи, а также приём изотретиноина', 'Medications that increase light sensitivity, and taking isotretinoin'),
      L("Homiladorlik va emizish davri — rejali estetik muolajalar odatda kechiktiriladi", 'Беременность и грудное вскармливание — плановые эстетические процедуры обычно откладывают', 'Pregnancy and breastfeeding, when elective aesthetic procedures are usually postponed'),
      L("Shifokor lazer ta'sirini xavfli deb hisoblagan boshqa individual holatlar", 'Индивидуальные обстоятельства, при которых врач считает лазерное воздействие небезопасным', 'Other individual circumstances in which the doctor considers laser treatment unsafe'),
    ],
    note: L(
      "755 nm nur melaninga yaxshi yutilgani sababli to'q teri fototiplarida kuyish va pigment o'zgarishlari xavfi yuqoriroq. Bunday hollarda shifokor ehtiyotkor parametrlarni tanlashi, avval sinov zonasida tekshirishi yoki boshqa usulni tavsiya qilishi mumkin. Keloid chandiqlarga moyillik va surunkali teri kasalliklari ham alohida baholanadi.",
      'Поскольку излучение 755 нм хорошо поглощается меланином, у пациентов с более тёмными фототипами выше риск ожогов и изменений пигментации. В таких случаях врач может выбрать осторожные параметры, сначала провести тест на небольшом участке или рекомендовать другой метод. Склонность к келоидным рубцам и хронические заболевания кожи также оцениваются отдельно.',
      "Because 755 nm light is strongly absorbed by melanin, people with darker skin phototypes have a higher risk of burns and pigment changes. In such cases the doctor may choose cautious settings, test a small area first or recommend a different method. A tendency to keloid scarring and chronic skin conditions are also assessed separately.",
    ),
  },
  steps: [
    {
      title: L('Konsultatsiya', 'Консультация', 'Consultation'),
      text: L(
        "Dermatolog teri fototipi, sochlarning rangi va qalinligini baholaydi, kasalliklar tarixi va qabul qilinayotgan dorilarni aniqlaydi. Zonadagi xollar va dog'lar dermatoskop bilan tekshiriladi. Zarur bo'lsa, kichik maydonda sinov o'tkaziladi va teri reaksiyasi kuzatiladi.",
        'Дерматолог оценивает фототип кожи, цвет и толщину волос, уточняет историю заболеваний и принимаемые препараты. Родинки и пятна в зоне обработки осматривают с помощью дерматоскопа. При необходимости проводится тест на небольшом участке с наблюдением за реакцией кожи.',
        "The dermatologist assesses your skin phototype and hair colour and thickness, and asks about your medical history and current medications. Moles and spots in the area are checked with a dermatoscope. If needed, a small test area is treated and the skin reaction is observed.",
      ),
    },
    {
      title: L('Seansga tayyorgarlik', 'Подготовка к сеансу', 'Preparing for the session'),
      text: L(
        "Muolajadan oldingi haftalarda quyoshda toblanmaslik va avtozagar ishlatmaslik kerak. Sochlarni ildizi bilan yulib oladigan usullar — mum, shugaring, pinset yoki epilyator — muolajadan bir necha hafta oldin to'xtatiladi, chunki lazerga follikuladagi soch kerak. Odatda seansdan bir kun oldin zona qiriladi; aniq tavsiyani shifokor beradi.",
        'В течение нескольких недель до процедуры нельзя загорать и пользоваться автозагаром. Способы, удаляющие волос с корнем, — воск, шугаринг, пинцет или эпилятор — прекращают за несколько недель до процедуры, так как лазеру нужен волос в фолликуле. Обычно зону бреют накануне сеанса; точные рекомендации даёт врач.',
        "In the weeks before treatment you should not sunbathe or use self-tanner. Methods that pull hair out by the root, such as waxing, sugaring, tweezing or epilators, are stopped several weeks beforehand, because the laser needs the hair to be in the follicle. The area is usually shaved the day before the session; your doctor will give you exact instructions.",
      ),
    },
    {
      title: L("Lazer ta'siri", 'Лазерное воздействие', 'Laser treatment'),
      text: L(
        "Bemor va xodimlarning ko'zlari maxsus ko'zoynak bilan himoyalanadi. Shifokor zonaga ketma-ket ishlov beradi, teri esa sovutiladi. Har bir impuls issiqlik yoki teriga rezina urilgandek chertish sifatida sezilishi mumkin. Seans davomiyligi zona kattaligiga bog'liq.",
        'Глаза пациента и персонала защищают специальными очками. Врач последовательно обрабатывает зону, а кожу при этом охлаждают. Каждый импульс может ощущаться как тепло или щелчок резинкой по коже. Длительность сеанса зависит от площади зоны.',
        "Your eyes and the staff's eyes are protected with special goggles. The doctor treats the area section by section while the skin is cooled. Each pulse may feel like warmth or a rubber band snapping against the skin. How long the session takes depends on the size of the area.",
      ),
    },
    {
      title: L("Muolajadan keyin", 'После процедуры', 'After the procedure'),
      text: L(
        "Zonada qizarish va soch follikulalari atrofida mayda shish paydo bo'lishi mumkin, odatda ular bir necha soat yoki bir-ikki kun ichida o'tib ketadi. Birinchi kunlarda issiq vanna, sauna va zonani ishqalashdan saqlaning, har kuni SPF li vosita ishlating. Ishlov berilgan sochlar keyingi haftalarda asta-sekin to'kiladi.",
        'В зоне обработки возможны покраснение и небольшой отёк вокруг волосяных фолликулов, которые обычно проходят в течение нескольких часов или одного-двух дней. В первые дни избегайте горячих ванн, сауны и трения зоны, ежедневно используйте средство с SPF. Обработанные волосы постепенно выпадают в последующие недели.',
        "Redness and small bumps of swelling around the hair follicles may appear and usually settle within a few hours or a day or two. For the first few days avoid hot baths, saunas and rubbing the area, and use SPF every day. The treated hairs gradually fall out over the following weeks.",
      ),
    },
    {
      title: L('Kurs va intervallar', 'Курс и интервалы', 'Course and intervals'),
      text: L(
        "Keyingi seans yangi sochlar faol o'sish bosqichiga kirganda o'tkaziladi. Interval zonaga bog'liq: yuzda u odatda tanaga nisbatan qisqaroq bo'ladi. Seanslar soni va ular orasidagi muddatni shifokor sochlarning javobiga qarab belgilaydi.",
        'Следующий сеанс проводят, когда новые волосы входят в фазу активного роста. Интервал зависит от зоны: на лице он обычно короче, чем на теле. Количество сеансов и промежутки между ними врач определяет по реакции волос.',
        "The next session is done when new hairs enter the active growth phase. The interval depends on the area: on the face it is usually shorter than on the body. The doctor sets the number of sessions and the gaps between them based on how your hair responds.",
      ),
    },
  ],
  results: {
    intro: L(
      "Lazer epilyatsiyasi sochlarni 100% va abadiy yo'qotishni kafolatlamaydi, lekin kurs davomida tuklarni uzoq muddatga sezilarli kamaytirishi mumkin. Natija asta-sekin shakllanadi va quyidagilarda namoyon bo'lishi mumkin:",
      'Лазерная эпиляция не гарантирует полного и навсегда удаления волос, но в ходе курса может заметно и надолго уменьшить их количество. Результат формируется постепенно и может проявляться в следующем:',
      "Laser hair removal does not guarantee that 100% of hair will be gone for ever, but over a course it can reduce hair noticeably and for a long time. Results build up gradually and may include:",
    ),
    items: [
      L("Ishlov berilgan zonada sochlar sonining kamayishi", 'Уменьшение количества волос в обработанной зоне', 'Fewer hairs in the treated area'),
      L("Qayta o'sgan sochlarning ingichkaroq va ochroq bo'lishi", 'Отрастающие волосы становятся тоньше и светлее', 'Regrowing hair that is finer and lighter'),
      L("Epilyatsiya oralig'ining uzayishi", 'Увеличение промежутков между процедурами удаления волос', 'Longer gaps between hair removal'),
      L("O'sib kirgan sochlar va ta'sirlanishning kamayishi", 'Меньше вросших волос и раздражения', 'Fewer ingrown hairs and less irritation'),
      L("Ayrim pigment dog'larining kamroq ko'rinishi", 'Уменьшение заметности некоторых пигментных пятен', 'Some pigment spots becoming less visible'),
    ],
  },
  conclusion: [
    L(
      "DEKA aleksandrit lazeri 755 nm — lazer epilyatsiyasi va ayrim pigment muammolarini korreksiya qilish uchun qo'llaniladigan, yaxshi o'rganilgan texnologiya. U ochiqroq teridagi to'q rangli sochlarda eng yaxshi ishlaydi, natija esa kurs davomida asta-sekin shakllanadi.",
      'Александритовый лазер DEKA 755 нм — хорошо изученная технология, которая применяется для лазерной эпиляции и коррекции некоторых пигментных проблем. Лучше всего он работает на тёмных волосах на более светлой коже, а результат формируется постепенно в ходе курса.',
      "The DEKA 755 nm alexandrite laser is a well-studied technology used for laser hair removal and for treating some pigment concerns. It works best on dark hair on lighter skin, and results build up gradually over a course.",
    ),
    L(
      "Radeski klinikasida lazer muolajasi dermatolog konsultatsiyasidan boshlanadi. Shifokor teringiz va sochlaringiz aleksandrit lazerga mos kelishini baholaydi, kerakli seanslar sonini taxminan aytadi va xavfsiz tayyorgarlik hamda parvarish bo'yicha tavsiyalar beradi.",
      'В клинике Radeski лазерная процедура начинается с консультации дерматолога. Врач оценит, подходят ли ваша кожа и волосы для александритового лазера, ориентировочно определит количество сеансов и даст рекомендации по безопасной подготовке и уходу.',
      "At Radeski, laser treatment starts with a dermatologist's consultation. The doctor will assess whether your skin and hair suit the alexandrite laser, estimate how many sessions may be needed and give you advice on safe preparation and aftercare.",
    ),
  ],
  faq: [
    {
      question: L("Lazer epilyatsiyasi og'riqlimi?", 'Больно ли делать лазерную эпиляцию?', 'Is laser hair removal painful?'),
      answer: L(
        "Ko'pchilik bemorlar impulsni issiqlik yoki teriga rezina urilgandek chertish sifatida his qiladi. Muolaja vaqtida teri sovutiladi, bu noqulaylikni kamaytiradi. Sezgilar zona, sochlarning qalinligi va individual sezuvchanlikka bog'liq; nozik zonalarda ular odatda kuchliroq bo'ladi.",
        'Большинство пациентов ощущают импульс как тепло или щелчок резинкой по коже. Во время процедуры кожу охлаждают, что уменьшает дискомфорт. Ощущения зависят от зоны, толщины волос и индивидуальной чувствительности; в деликатных зонах они обычно сильнее.',
        "Most people feel each pulse as warmth or a rubber band snapping against the skin. The skin is cooled during treatment, which reduces discomfort. How it feels depends on the area, the thickness of the hair and your own sensitivity; delicate areas are usually more sensitive.",
      ),
    },
    {
      question: L('Necha seans kerak?', 'Сколько сеансов лазерной эпиляции нужно?', 'How many sessions will I need?'),
      answer: L(
        "Sochlar sikllar bilan o'sgani uchun bitta seans yetarli emas — odatda bir necha hafta oralig'ida o'tkaziladigan kurs kerak bo'ladi. Seanslar soni zona, soch turi, teri fototipi va gormonal omillarga bog'liq. Aniq rejani shifokor belgilaydi, kursdan keyin ba'zan qo'llab-quvvatlovchi seanslar kerak bo'ladi.",
        'Поскольку волосы растут циклами, одного сеанса недостаточно — обычно нужен курс процедур с интервалом в несколько недель. Количество сеансов зависит от зоны, типа волос, фототипа кожи и гормональных факторов. Точный план определяет врач, после курса иногда нужны поддерживающие сеансы.',
        "Because hair grows in cycles, one session is not enough; a course spaced several weeks apart is usually needed. The number of sessions depends on the area, hair type, skin phototype and hormonal factors. The doctor sets the exact plan, and maintenance sessions are sometimes needed after the course.",
      ),
    },
    {
      question: L("Och rangli yoki oq sochlarni lazer bilan olib tashlasa bo'ladimi?", 'Можно ли удалить лазером светлые или седые волосы?', 'Can the laser remove blond or grey hair?'),
      answer: L(
        "Aleksandrit lazer sochdagi melanin orqali ishlaydi. Oq, oqargan, juda och sariq va qizg'ish sochlarda pigment kam bo'lgani uchun ta'sir sezilarli darajada zaif bo'ladi yoki umuman bo'lmasligi mumkin. Bunday hollarda shifokor boshqa usullarni muhokama qiladi.",
        'Александритовый лазер действует через меланин волоса. В седых, белёсых, очень светлых и рыжих волосах мало пигмента, поэтому эффект заметно слабее или может отсутствовать. В таких случаях врач обсудит другие методы.',
        "The alexandrite laser works through the melanin in the hair. White, grey, very light blond and red hair contain little pigment, so the effect is much weaker or may be absent. In such cases the doctor will discuss other methods.",
      ),
    },
    {
      question: L("Muolajadan keyin qachon quyoshga chiqsa bo'ladi?", 'Когда после лазерной эпиляции можно загорать?', 'When can I go in the sun after treatment?'),
      answer: L(
        "Kurs davomida quyoshda toblanish va solyariydan voz kechish, ochiq zonalarda esa har kuni yuqori SPF li vosita ishlatish tavsiya etiladi. Zagar teriga tushgan nurning bir qismini o'ziga tortadi va kuyish hamda pigment dog'lari xavfini oshiradi. Seansdan keyin qancha vaqt quyoshdan ehtiyot bo'lish kerakligini shifokor aytadi.",
        'На протяжении курса рекомендуется отказаться от загара и солярия, а на открытых участках ежедневно использовать средство с высоким SPF. Загар забирает на себя часть излучения и повышает риск ожогов и пигментных пятен. Сколько времени после сеанса беречься от солнца, скажет врач.',
        "During the course you should avoid sunbathing and tanning beds and use a high-SPF product on exposed areas every day. A tan absorbs part of the laser energy and raises the risk of burns and pigment spots. Your doctor will tell you how long to stay out of the sun after each session.",
      ),
    },
    {
      question: L("Seanslar orasida sochni qirish mumkinmi?", 'Можно ли брить волосы между сеансами?', 'Can I shave between sessions?'),
      answer: L(
        "Ha, seanslar orasida qirish odatda ruxsat etiladi, chunki u follikulani saqlab qoladi. Mum, shugaring, pinset va epilyator bilan sochni ildizi bilan yulib olish esa tavsiya etilmaydi, chunki lazer ta'sir qilishi kerak bo'lgan sochni olib tashlaydi.",
        'Да, бритьё между сеансами обычно разрешено, так как оно сохраняет волос в фолликуле. А вот удалять волосы с корнем воском, шугарингом, пинцетом или эпилятором не рекомендуется — это убирает волос, на который должен воздействовать лазер.',
        "Yes, shaving between sessions is usually allowed because it leaves the hair in the follicle. Pulling hair out by the root with wax, sugaring, tweezers or an epilator is not recommended, because it removes the very hair the laser needs to act on.",
      ),
    },
  ],
};
