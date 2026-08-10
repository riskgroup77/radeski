import type { Article, ArticleRichContent, Locale } from '../../types';

type LocalizedArticleCatalog = Record<
  Locale,
  {
    summary: string;
    body: string;
    keyTakeaways: string[];
    faq: ArticleRichContent['faq'];
    tags: string[];
    whenToSeeDoctor: string[];
  }
>;

function uzBody(): string {
  return `## Jinsiy a’zoning yassi hujayrali raki nima?

Jinsiy a’zoning yassi hujayrali raki — jinsiy a’zo terisi va shilliq qavati hujayralaridan boshlanadigan xavfli o‘sma. Bu kam uchraydigan onkologik kasallik, biroq o‘z vaqtida tashxis va davolashni talab qiladi.

Yassi hujayrali rak — jinsiy a’zo saratonining eng keng tarqalgan turi. Erta bosqichda aniqlansa, ko‘p hollarda muvaffaqiyatli davolanadi.

O‘sma bosh (glans), sunnat terisi yoki tanasida paydo bo‘lishi mumkin. Dastlab og‘riq sezilmasligi mumkin — shu sababli erkaklar ba’zan shifokorga murojaatni kechiktiradi.

Muhim: jinsiy a’zo terisidagi uzoq qoladigan har qanday o‘zgarish mutaxassis ko‘rigini talab qiladi.

## Qanday ko‘rinishi mumkin?

Boshlanishida o‘sma turlicha bo‘lishi mumkin. Mumkin belgilar:

- qizil yoki oqish dog‘;
- qattiqlik yoki kichik tugun;
- uzoq bitmaydigan yaracha;
- qobiqlanuvchi yoki yuzasi o‘zgargan teri bo‘lagi;
- so‘galsimon o‘simta yoki o‘sish;
- engil tegishda qon ketishi;
- yoqimsiz hid yoki ajralma;
- bosh yoki sunnat terisi ko‘rinishining o‘zgarishi.

Kasallik rivojlansa, chov limfa tugunlari kattalashishi mumkin.

Muhim: ro‘yxatdagi alomatlar avtomatik ravishda saraton demak emas. Xuddi shunday o‘zgarishlar yallig‘lanish, infeksiya va boshqa teri kasalliklarida ham uchraydi. Yakuniy tashxis tekshiruv va zarurat bo‘lsa biopsiyadan keyin qo‘yiladi.

## Sabablari va xavf omillari

Aniq sabab har doim aniqlanmasligi mumkin. Lekin ehtimollikni oshiradigan omillar bor:

- inson papilloma virusi (IPV / HPV), ayniqsa ayrim onkogen turlari;
- chekish;
- fimoz — sunnat terisini to‘liq tortib bo‘lmasligi;
- surunkali yallig‘lanish;
- gigiyena yetishmasligi;
- ayrim prekanseroz teri holatlari;
- yosh, ayniqsa 60 yoshdan keyin.

Bir yoki bir nechta xavf omili bo‘lishi «albatta kasal bo‘lasiz» degani emas.

Ma’lumotlarga ko‘ra, HPV taxminan har uchinchi jinsiy a’zo saratoni holati bilan bog‘liq ko‘riladi.

## Prekanseroz holatlar

Ba’zi teri va shilliq qavat o‘zgarishlari prekanseroz holat hisoblanadi. Masalan:

- Bouen kasalligi — jinsiy a’zo tanasi terisining shikastlanishi;
- Keyra eritroplaziyasi — bosh qismidagi shikastlanish;
- peinil intraepithelial neoplaziya (PeIN)ning boshqa shakllari.

Bunday o‘zgarishlarni e’tiborsiz qoldirmang. Ba’zi shakllarda davolanmasa, invaziv yassi hujayrali rakka o‘tish xavfi bor.

## Qanday tashxis qo‘yiladi?

Tashxis shifokor ko‘rigidan boshlanadi: o‘sma ko‘rinishi, o‘lchami, joylashuvi va o‘zgarish xususiyati baholanadi.

Xavfli jarayonga shubha bo‘lsa, asosiy tasdiqlash usuli — biopsiya. Kichik to‘qima parchasi olinadi va patolog mikroskopda tekshiradi. Ayni gistologik tekshiruv o‘sma turi va xususiyatlarini aniqlaydi.

Zarurat bo‘lsa, kasallik tarqalishi va limfa tugunlarini baholash uchun qo‘shimcha tekshiruvlar buyuriladi.

## Bosqichlar

Kasallik shartli ravishda erta lokal shakllardan tarqalgan jarayongacha bir necha bosqichga bo‘linadi.

Bosqichni aniqlash davolash taktikasini tanlash uchun zarur. Baholashda odatda TNM tizimi ishlatiladi: birlamchi o‘sma o‘lchami va chuqurligi, mintaqaviy limfa tugunlari holati va uzoq metastazlar.

## Davolash

Yondashuv o‘sma o‘lchami va joylashuvi, to‘qimalarga chuqur kirishi, turi va darajasi, limfa tugunlari holati hamda metastazlarga bog‘liq.

Mumkin usullar:

### Jarrohlik

Asosiy usullardan biri. Kichik va yuzaki o‘smalarda ayrim hollarda a’zoni saqlab qoluvchi jarrohlik mumkin. Kengroq jarayonda aralashuv hajmi sezilarli kattaroq bo‘lishi mumkin.

### Nurlanish terapiyasi

Ba’zi lokal o‘smalarda va boshqa klinik holatlarda onkolog qarori bilan qo‘llanilishi mumkin.

### Limfa tugunlari

Yassi hujayrali rak avvalo chov limfa tugunlariga tarqalishi mumkin. Shuning uchun limfa tugunlarini baholash tekshiruv va davolash tanlovining muhim qismi. Ko‘rsatma bo‘lsa, zararlangan tugunlar jarrohlik yo‘li bilan olib tashlanadi.

### Dori vositalari

Tarqalgan shakllarda kimyoterapiya va boshqa zamonaviy tizimli davolash qo‘llanilishi mumkin. Preparat tanlovi klinik holatga bog‘liq.

## Tuzalish mumkinmi?

Ha, ayniqsa kasallik erta bosqichda aniqlansa.

Erta bosqichlarda jinsiy a’zo saratoni ko‘p hollarda yaxshi davolanadi. Prognoz bosqich, o‘sma xususiyatlari, o‘lchami va chuqurligi, limfa tugunlari holatiga bog‘liq.

Shubhali o‘zgarish erta topilsa, o‘z vaqtida davolash va ayrim hollarda a’zo hamda funksiyani saqlab qolish imkoniyati oshadi.

## Qachon shifokorga borish kerak?

Og‘riq yoki sezilarli kattalashishni kutmang. Agar quyidagilarni ko‘rsangiz, murojaat qiling:

- bitmaydigan yaracha;
- yangi o‘sma yoki qattiqlik;
- teri rangining o‘zgarishi;
- bosh yoki tanadagi noodatiy dog‘;
- qon ketishi;
- ajralmalar;
- sunnat terisining o‘zgarishi;
- chov limfa tugunlarining kattalashishi.

Bir necha hafta saqlanadigan yoki asta-sekin kattalashadigan har qanday o‘zgarishni tekshirish muhim.

## Oldini olish

Xavfni mutlaqo yo‘qotib bo‘lmaydi, lekin ba’zi omillarni kamaytirish mumkin:

- intim gigiyenaga rioya qilish;
- chekishdan voz kechish;
- surunkali yallig‘lanishni o‘z vaqtida davolash;
- noodatiy o‘zgarishlarda shifokorga murojaat;
- HPV vaksinatsiyasini shifokor bilan muhokama qilish.

Jinsiy a’zo terisiga muntazam e’tibor shubhali o‘zgarishlarni erta ko‘rishga yordam beradi.

## Xulosa

Jinsiy a’zoning yassi hujayrali raki — kam uchraydigan, lekin jiddiy kasallik. Birinchi belgilari oddiy yallig‘lanish, infeksiya yoki boshqa teri muammosiga o‘xshashi mumkin.

Agar o‘sma, dog‘ yoki yara o‘tib ketmasa — o‘z-o‘zini davolamang. Mutaxassis ko‘rigi va ko‘rsatma bo‘lsa biopsiya kerak.

Erta diagnostika davolash imkoniyatlarini kengaytiradi va prognozni yaxshilaydi.

*Ushbu maqola umumiy ma’lumot uchun. Yakuniy tashxis va davolashni faqat shifokor belgilaydi.*`;
}

function ruBody(): string {
  return `## Что такое плоскоклеточный рак полового члена?

Плоскоклеточный рак полового члена — злокачественная опухоль, которая развивается из клеток кожи и слизистых оболочек полового члена. Это редкое онкологическое заболевание, однако оно требует своевременной диагностики и лечения.

Плоскоклеточный рак — наиболее распространённый тип рака полового члена. При выявлении на ранней стадии заболевание во многих случаях успешно поддаётся лечению.

Опухоль может появиться на головке, крайней плоти или стволе. На ранних этапах сильной боли может не быть — поэтому мужчины иногда откладывают визит к врачу.

Важно: любое длительно существующее изменение кожи полового члена требует осмотра специалиста.

## Как выглядит заболевание?

На начальной стадии признаки могут быть разными:

- красное или белёсое пятно;
- уплотнение или небольшой узел;
- язвочка, которая долго не заживает;
- участок с шелушением или изменённой поверхностью кожи;
- разрастание или образование, напоминающее бородавку;
- кровоточивость при лёгком прикосновении;
- неприятный запах или выделения;
- изменение внешнего вида головки или крайней плоти.

При прогрессировании могут увеличиваться паховые лимфатические узлы.

Важно: эти симптомы не означают автоматически наличие рака. Похожие изменения бывают при воспалительных, инфекционных и других дерматологических заболеваниях. Окончательный диагноз ставится после обследования и, при необходимости, биопсии.

## Причины и факторы риска

Точную причину удаётся установить не всегда. Но есть факторы, повышающие вероятность заболевания:

- инфекция вирусом папилломы человека (ВПЧ), особенно некоторыми онкогенными типами;
- курение;
- фимоз — невозможность полностью отвести крайнюю плоть;
- хроническое воспаление;
- недостаточная гигиена;
- некоторые предраковые заболевания кожи;
- возраст, особенно старше 60 лет.

Наличие одного или нескольких факторов риска не означает, что рак обязательно разовьётся.

По доступным данным, ВПЧ связывают примерно с третью случаев рака полового члена.

## Предраковые заболевания

Отдельные изменения кожи и слизистой могут относиться к предраковым состояниям. Например:

- болезнь Боуэна — поражение кожи ствола;
- эритроплазия Кейра — поражение головки;
- другие формы пенильной интраэпителиальной неоплазии (PeIN).

Такие изменения нельзя оставлять без внимания. При определённых формах и отсутствии лечения есть риск перехода в инвазивный плоскоклеточный рак.

## Как диагностируют?

Диагностика начинается с осмотра врача: оценивают внешний вид, размер, расположение и характер изменений.

При подозрении на злокачественный процесс основным методом подтверждения является биопсия. Небольшой фрагмент ткани исследуют под микроскопом. Именно гистология определяет тип опухоли и её характеристики.

В зависимости от ситуации могут потребоваться дополнительные исследования для оценки распространённости процесса и состояния лимфатических узлов.

## Стадии

Условно заболевание делят на несколько стадий — от ранних локализованных форм до распространённого процесса.

Определение стадии нужно для выбора оптимальной тактики лечения. Обычно используют систему TNM: размер и глубина первичной опухоли, состояние регионарных лимфоузлов и наличие отдалённых метастазов.

## Лечение

Тактика зависит от размера и расположения опухоли, глубины проникновения, типа и степени злокачественности, состояния лимфатических узлов и наличия метастазов.

Возможные методы:

### Хирургическое лечение

Один из основных методов. При небольших и поверхностных опухолях в отдельных случаях возможно органосохраняющее вмешательство. При более распространённых опухолях объём операции может быть значительно больше.

### Лучевая терапия

Может применяться при некоторых локализованных опухолях и в других клинических ситуациях по решению онколога.

### Лечение лимфатических узлов

Плоскоклеточный рак полового члена может в первую очередь распространяться в паховые лимфоузлы. Поэтому их оценка — важная часть обследования и выбора лечения. По показаниям выполняют хирургическое удаление поражённых узлов.

### Лекарственная терапия

При распространённых формах используют системное лечение, включая химиотерапию и другие современные подходы. Выбор препаратов зависит от конкретной ситуации.

## Можно ли вылечить?

Да — особенно если заболевание выявлено на ранней стадии.

При ранних стадиях рак полового члена во многих случаях хорошо поддаётся лечению. Прогноз зависит от стадии, характеристик опухоли, её размера и глубины, а также от состояния лимфатических узлов.

Чем раньше обнаружено подозрительное образование, тем больше возможностей для своевременного лечения и, в ряде случаев, сохранения органа и его функции.

## Когда обратиться к врачу?

Не стоит ждать, пока образование начнёт болеть или заметно увеличится. Обратитесь к врачу, если заметили:

- язвочку, которая не заживает;
- новое образование или уплотнение;
- изменение цвета кожи;
- необычное пятно на головке или стволе;
- кровоточивость;
- выделения;
- изменение крайней плоти;
- увеличение паховых лимфатических узлов.

Особенно важно обследовать любое изменение, которое сохраняется несколько недель или постепенно растёт.

## Профилактика

Полностью исключить риск невозможно, но можно снизить влияние ряда факторов:

- соблюдать интимную гигиену;
- отказаться от курения;
- своевременно лечить хронические воспалительные заболевания;
- обращаться к врачу при любых необычных изменениях;
- обсуждать с врачом вакцинацию против ВПЧ.

Регулярное внимание к состоянию кожи полового члена помогает заметить подозрительные изменения раньше.

## Главное

Плоскоклеточный рак полового члена — редкое, но серьёзное заболевание. Первые проявления могут быть похожи на обычное воспаление, инфекцию или другое кожное заболевание.

Если появилось образование, пятно или язва, которые не проходят, не занимайтесь самолечением. Нужен осмотр специалиста и, при показаниях, биопсия.

Ранняя диагностика расширяет возможности лечения и улучшает прогноз.

*Материал носит ознакомительный характер и не заменяет консультацию врача.*`;
}

function enBody(): string {
  return `## What is squamous cell carcinoma of the penis?

Penile squamous cell carcinoma is a malignant tumor that arises from cells of the skin and mucosal surfaces of the penis. It is uncommon, but it still needs timely diagnosis and treatment.

Squamous cell carcinoma is the most frequent type of penile cancer. When found early, it is often highly treatable.

The tumor may appear on the glans, foreskin, or shaft. Early disease may cause little pain — so men sometimes postpone seeing a doctor.

Important: any lasting change on the penile skin deserves a specialist exam.

## How can it look?

Early signs vary. Possible features include:

- a red or whitish patch;
- a firm area or small nodule;
- an ulcer that will not heal;
- a scaly or altered skin surface;
- a wart-like growth;
- bleeding after light contact;
- unpleasant odor or discharge;
- a change in the appearance of the glans or foreskin.

As disease advances, inguinal lymph nodes may enlarge.

Important: these signs do not automatically mean cancer. Similar changes occur with inflammation, infection, and other skin conditions. A final diagnosis follows evaluation and, when needed, biopsy.

## Causes and risk factors

A single cause is not always found. Factors that raise risk include:

- human papillomavirus (HPV), especially certain high-risk types;
- smoking;
- phimosis — inability to fully retract the foreskin;
- chronic inflammation;
- poor hygiene;
- some precancerous skin conditions;
- older age, especially after 60.

Having one or more risk factors does not mean cancer will definitely develop.

Available data link HPV with roughly one-third of penile cancer cases.

## Precancerous conditions

Some skin and mucosal changes are considered precancerous, for example:

- Bowen disease — involvement of shaft skin;
- erythroplasia of Queyrat — involvement of the glans;
- other forms of penile intraepithelial neoplasia (PeIN).

These changes should not be ignored. In some forms, untreated disease can progress to invasive squamous cell carcinoma.

## How is it diagnosed?

Assessment starts with a clinical exam: appearance, size, location, and character of the change.

If malignancy is suspected, biopsy is the main confirmatory test. A small tissue sample is reviewed under the microscope. Histology establishes tumor type and key features.

Further imaging or tests may be needed to assess spread and lymph nodes.

## Stages

The disease is often described in stages — from early localized forms to more extensive disease.

Staging guides treatment planning. Clinicians commonly use the TNM system: size and depth of the primary tumor, regional lymph-node status, and distant metastases.

## Treatment

Treatment depends on tumor size and site, depth of invasion, type and grade, lymph-node status, and metastases.

Possible approaches:

### Surgery

Surgery is a cornerstone of care. For small, superficial tumors, organ-sparing surgery may be possible in selected cases. More extensive tumors may require a larger operation.

### Radiation therapy

Radiation may be used for some localized tumors and in other situations decided by the oncology team.

### Lymph-node management

Penile squamous cell carcinoma often spreads first to inguinal lymph nodes. Assessing those nodes is central to work-up and treatment choice. When indicated, involved nodes are removed surgically.

### Systemic therapy

For advanced disease, systemic options such as chemotherapy and other modern drug approaches may be used. Drug choice depends on the clinical picture.

## Can it be cured?

Yes — especially when found early.

Early-stage penile cancer often responds well to treatment. Outlook depends on stage, tumor features, size and depth, and lymph-node involvement.

The earlier a suspicious lesion is found, the greater the chance of timely care and, in some cases, organ and function preservation.

## When to see a doctor

Do not wait for pain or major growth. Seek care if you notice:

- an ulcer that does not heal;
- a new growth or firm spot;
- a change in skin color;
- an unusual patch on the glans or shaft;
- bleeding;
- discharge;
- a foreskin change;
- enlarged inguinal lymph nodes.

Any change lasting several weeks or slowly enlarging deserves evaluation.

## Prevention

Risk cannot be eliminated entirely, but some factors can be reduced:

- practice good genital hygiene;
- quit smoking;
- treat chronic inflammatory disease promptly;
- see a doctor for unusual changes;
- discuss HPV vaccination with a clinician.

Regular attention to penile skin helps detect suspicious changes earlier.

## Bottom line

Squamous cell carcinoma of the penis is rare but serious. First signs can mimic ordinary inflammation, infection, or another skin problem.

If a growth, patch, or ulcer does not resolve, do not self-treat. You need a specialist exam and, when indicated, a biopsy.

Earlier diagnosis widens treatment options and improves prognosis.

*This article is for general information and does not replace a doctor’s consultation.*`;
}

export const PENILE_SCC_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Jinsiy a’zoning yassi hujayrali raki: birinchi belgilar, sabablar, biopsiya, bosqichlar va zamonaviy davolash. Qachon yaracha «oddiy yallig‘lanish» emas — Radeski Skin Clinic qo‘llanmasi.',
    body: uzBody(),
    keyTakeaways: [
      'Erta bosqichda kuchli og‘riq bo‘lmasligi mumkin — kechiktirish xavfli',
      'Bir necha hafta bitmaydigan yara yoki dog‘ shifokor ko‘rigini talab qiladi',
      'Biopsiya — tashxisni tasdiqlashning asosiy usuli',
      'Erta aniqlash davolash imkoniyatini va a’zoni saqlash ehtimolini oshiradi',
    ],
    tags: [
      'Jinsiy a’zo raki',
      'Yassi hujayrali rak',
      'Penis saratoni',
      'Biopsiya',
      'HPV',
      'Prekanseroz',
      'Dermatoonkologiya',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Jinsiy a’zodagi yara bir necha hafta bitmasa',
      'Yangi dog‘, tugun yoki qattiqlik paydo bo‘lsa',
      'Qon ketishi yoki ajralma bo‘lsa',
      'Sunnat terisi yoki bosh ko‘rinishi o‘zgarsa',
      'Chov limfa tugunlari kattalashsa',
    ],
    faq: [
      {
        question: 'Har bir yaracha saratonmi?',
        answer:
          'Yo‘q. Ko‘p o‘zgarishlar yallig‘lanish yoki infeksiya bilan bog‘liq. Lekin uzoq bitmasa yoki o‘ssa, shifokor ko‘rigi zarur.',
      },
      {
        question: 'Tashxis qanday tasdiqlanadi?',
        answer:
          'Asosiy usul — biopsiya. Zarurat bo‘lsa limfa tugunlari va tarqalishni baholash uchun qo‘shimcha tekshiruvlar qo‘shiladi.',
      },
      {
        question: 'HPV xavfni oshiradimi?',
        answer:
          'Ha, ayrim onkogen HPV turlari xavfni oshiradi. Taxminan har uchinchi holatda HPV bog‘liqligi ko‘rsatiladi. Vaksinatsiyani shifokor bilan muhokama qilish mumkin.',
      },
      {
        question: 'Erta bosqichda tuzalish mumkinmi?',
        answer:
          'Ko‘pincha ha. Erta aniqlashda davolash samarasi yuqoriroq, ayrim hollarda a’zo va funksiyani saqlash imkoniyati ham saqlanadi.',
      },
    ],
  },
  ru: {
    summary:
      'Плоскоклеточный рак полового члена: первые симптомы, причины и факторы риска, диагностика, биопсия, стадии и современные методы лечения.',
    body: ruBody(),
    keyTakeaways: [
      'На ранней стадии сильной боли может не быть — осмотр нельзя откладывать',
      'Язва или пятно, сохраняющиеся неделями, требуют врача',
      'Биопсия — основной способ подтвердить диагноз',
      'Раннее выявление расширяет возможности лечения и сохранения органа',
    ],
    tags: [
      'Рак полового члена',
      'Плоскоклеточный рак',
      'Плоскоклеточный рак пениса',
      'Опухоль полового члена',
      'Биопсия',
      'ВПЧ',
      'Предраковые заболевания',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Язвочка на половом члене не заживает несколько недель',
      'Появилось новое пятно, уплотнение или образование',
      'Есть кровоточивость или выделения',
      'Изменилась крайняя плоть или головка',
      'Увеличились паховые лимфоузлы',
    ],
    faq: [
      {
        question: 'Каждая язвочка — это рак?',
        answer:
          'Нет. Многие изменения связаны с воспалением или инфекцией. Но если очаг не проходит или растёт, нужен осмотр врача.',
      },
      {
        question: 'Как подтверждают диагноз?',
        answer:
          'Основной метод — биопсия. При необходимости оценивают лимфоузлы и распространённость процесса дополнительными исследованиями.',
      },
      {
        question: 'Связан ли ВПЧ с этим раком?',
        answer:
          'Да, отдельные онкогенные типы ВПЧ повышают риск. Примерно с третью случаев рак полового члена связывают с ВПЧ. Вакцинацию стоит обсудить с врачом.',
      },
      {
        question: 'Можно ли вылечить на ранней стадии?',
        answer:
          'Часто да. Раннее выявление повышает шансы на успешное лечение и в ряде случаев помогает сохранить орган и функцию.',
      },
    ],
  },
  en: {
    summary:
      'Penile squamous cell carcinoma: early symptoms, causes and risk factors, diagnosis, biopsy, stages, and modern treatment options.',
    body: enBody(),
    keyTakeaways: [
      'Early disease may cause little pain — do not delay an exam',
      'An ulcer or patch lasting weeks needs medical review',
      'Biopsy is the main way to confirm the diagnosis',
      'Earlier detection widens treatment and organ-sparing options',
    ],
    tags: [
      'Penile cancer',
      'Squamous cell carcinoma',
      'Penile SCC',
      'Penile tumor',
      'Biopsy',
      'HPV',
      'Precancerous conditions',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'A penile ulcer lasts several weeks',
      'A new patch, nodule, or firm spot appears',
      'There is bleeding or discharge',
      'The foreskin or glans changes appearance',
      'Inguinal lymph nodes enlarge',
    ],
    faq: [
      {
        question: 'Is every ulcer cancer?',
        answer:
          'No. Many changes are inflammatory or infectious. But a lesion that fails to heal or keeps growing needs a doctor’s review.',
      },
      {
        question: 'How is the diagnosis confirmed?',
        answer:
          'Biopsy is the key test. Further studies may assess lymph nodes and disease extent when needed.',
      },
      {
        question: 'Does HPV raise the risk?',
        answer:
          'Yes — certain high-risk HPV types increase risk and are linked with about one-third of penile cancer cases. Ask a clinician about vaccination.',
      },
      {
        question: 'Can early-stage disease be cured?',
        answer:
          'Often yes. Finding it early improves treatment success and, in some cases, the chance of preserving the organ and its function.',
      },
    ],
  },
};

export const PENILE_SCC_ARTICLE: Article = {
  id: 'art-jinsiy-azo-yassi-hujayrali-rak',
  slug: 'jinsiy-azo-yassi-hujayrali-rak',
  title: {
    uz: 'Jinsiy a’zoning yassi hujayrali raki: belgilar, sabablar, tashxis va davolash',
    ru: 'Плоскоклеточный рак полового члена — симптомы, диагностика и лечение',
    en: 'Squamous Cell Carcinoma of the Penis: Symptoms, Diagnosis, and Treatment',
  },
  summary: {
    uz: PENILE_SCC_ARTICLE_CATALOG.uz.summary,
    ru: PENILE_SCC_ARTICLE_CATALOG.ru.summary,
    en: PENILE_SCC_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: PENILE_SCC_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: PENILE_SCC_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: PENILE_SCC_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-08-10',
  image: null,
  images: {
    uz: null,
    ru: null,
    en: null,
  },
  views: 0,
};
