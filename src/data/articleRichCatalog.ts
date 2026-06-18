import type { Article, ArticleRichContent, Locale } from '../types';

type LocalizedArticleCatalog = Record<
  Locale,
  {
    summary?: string;
    body: string;
    keyTakeaways: string[];
    faq: ArticleRichContent['faq'];
    tags: string[];
    whenToSeeDoctor: string[];
  }
>;

const DISCLAIMER: Record<Locale, string> = {
  uz: "Ushbu maqola umumiy ma'lumot berish uchun tayyorlangan va shifokor konsultatsiyasini almashtirmaydi.",
  ru: 'Эта статья носит ознакомительный характер и не заменяет консультацию врача.',
  en: 'This article is for general information only and does not replace a medical consultation.',
};

export { DISCLAIMER };

export const ARTICLE_CATALOG_KEYWORDS: Record<string, string[]> = {
  'papilloma-warts': ['papillom', 'borodav', 'wart', 'hpv', "so'gal", 'бородав', 'папиллом', 'condylom'],
  hemangioma: ['gemangi', 'геманги', 'hemangi', 'vascular', 'qizil xol', 'angioma'],
  psoriasis: ['psoria', 'псориаз', 'psoriasis', 'lishay'],
  acne: ['akne', 'акне', 'acne', 'post-akne', 'комедон'],
  'atopic-dermatitis': ['ekzem', 'atop', 'экзем', 'dermatit', 'allergik'],
  rosacea: ['rozase', 'розаце', 'rosacea', 'qizarish'],
  vitiligo: ['vitili', 'витили', 'depigment'],
  fungal: ['zamburug', 'гриб', 'fungal', 'mikoz', 'микоз', 'onychomyc'],
  'mole-screening': ['nevys', 'nev', 'mole', 'родинк', 'melanom', 'меланом', 'dermatoscopy'],
};

function uzBodyPapilloma(): string {
  return `## Papilloma va so'gallar nima?

Papillomalar (ko'pincha "moli" yoki "o'pka" deb ataladi) va so'gallar — inson papilloma virusi (HPV) ning turli shtammlari tufayli paydo bo'ladigan teri o'smalari. Ular ko'pincha xavfsiz ko'rinadi, lekin ba'zi turlari sekin-asta o'zgarishi, ko'payishi yoki atrofdagi teriga tarqalishi mumkin. Shuning uchun ularni shunchaki "bezak" deb hisoblab e'tiborsiz qoldirish tibbiy jihatdan to'g'ri emas.

## Nima uchun xavfli bo'lishi mumkin?

- **Virus tarqalishi** — o'smani qo'l bilan yechish, tishlash yoki kimyoviy vositalar bilan "yo'qotish" virusni atrofdagi teriga va boshqa odamlarga o'tkazishi mumkin.
- **Jarohat va yallig'lanish** — kiyim ishqalashi, qirqish paytida qon ketishi infeksiya xavfini oshiradi.
- **Ko'rinish o'zgarishi** — rang, shakl yoki hajm tez o'zgarsa, dermatolog tekshiruvi zarur.
- **Immunitet pasayganda ko'payish** — stress, kasallik yoki dori-darmonlar fonida o'smalar soni ortishi mumkin.

## Qanday paydo bo'ladi?

HPV teri yoki shilliq qavatiga mikrojarohatlar orqali kiradi. Nam joylar (qo'l, oyoq, tizza tirsagi), teriga tez-tez ishqalangan joylar va immunitet zaiflashgan paytlar xavfni oshiradi. So'gallar ko'pincha qo'l va oyoqda qattiq qavatli bo'ladi, papillomalar esa bo'yin, qo'llar yoki yuz atrofida yumshoq "o'pka" ko'rinishida uchraydi.

## Diagnostika: nima qilinadi?

Radeski klinikasida dermatolog o'smani ko'zdan kechiradi va kerak bo'lsa **dermatoskop** yoki **PhotoFinder** tizimi bilan chuqurroq baholaydi. Maqsad — o'smaning xavfsiz ekanini tasdiqlash va agressiv davolash usulini tanlash. Ba'zan bir nechta o'sma bir vaqtda tekshiriladi, chunki HPV ba'zan tanada bir vaqtning o'zida bir nechta fokusda namoyon bo'ladi.

## Zamonaviy davolash usullari

| Usul | Qachon qo'llaniladi | Afzallik |
|------|---------------------|----------|
| Lazer koagulyatsiya | Aniq chegarali papillomalar | Minimal qizarish, tez tiklanish |
| Kriyodestruksiya (azot) | So'gallar, mayda o'smalar | Tez, samarali |
| Radioto'lqin | Yumshoq papillomalar, noqulay joylar | Yuqori aniqlik |
| Kompleks protokol | Ko'p sonli o'smalar | Bir necha seansda tozalash |

Muolajadan keyin shifokor uy parvarishi bo'yicha aniq ko'rsatmalar beradi: terini quritish, quyoshdan himoya va infeksiya belgilarini kuzatish.

## Uyda nima qilmaslik kerak?

- Internetdagi "xalq usullari" (sirkaga, sirka, tut yonishi) — kuyish va chandiq qoldiradi.
- O'smani tirish yoki kesish — qon ketishi va tarqalish xavfi.
- Aptekadagi "o'zingiz yo'qoting" kremlarini ko'rsatmasiz ishlatish.

## Profilaktika

Qo'llarni yuvish, jamoat hammomlarida yalang'och oyoq bilan yurmaslik, shaxsiy asboblarni almashmaslik va immunitetni mustahkamlash (uyqu, to'g'ri ovqatlanish) virus xavfini kamaytiradi. Muntazam dermatolog ko'rigi esa yangi o'smalarni erta aniqlashga yordam beradi.`;
}

function ruBodyPapilloma(): string {
  return `## Что такое папилломы и бородавки?

Папилломы и бородавки — это доброкачественные образования кожи, вызванные различными штаммами вируса папилломы человека (ВПЧ). На первый взгляд они кажутся безобидными, однако при травмировании, трении об одежду или снижении иммунитета могут быстро размножаться и требовать профессионального лечения.

## Почему это может быть опасно?

- **Распространение вируса** — самостоятельное удаление или срыв нароста переносит инфекцию на соседние участки кожи.
- **Воспаление и инфекция** — повреждение образования при бритье или ношении тесной обуви повышает риск осложнений.
- **Изменение внешнего вида** — быстрый рост, изменение цвета или формы требуют очного осмотра дерматолога.
- **Множественные высыпания** — при стрессе, болезни или приёме иммуносупрессантов количество элементов может увеличиваться.

## Как происходит заражение?

ВПЧ проникает через микротравмы кожи и слизистых. Чаще всего поражаются влажные зоны, участки трения и кожа при ослабленном иммунитете. Бородавки обычно плотные и локализуются на кистях и стопах, папилломы — мягкие «наросты» на шее, веках, подмышках.

## Диагностика в клинике

Врач-дерматолог оценивает образование визуально и при необходимости использует **дерматоскоп** или систему **PhotoFinder** для дифференциальной диагностики. Это позволяет отличить безопасную бородавку от других новообразований и выбрать оптимальный метод удаления.

## Современные методы лечения

| Метод | Показания | Преимущества |
|-------|-----------|--------------|
| Лазерная коагуляция | Чётко очерченные папилломы | Минимальное рубцевание |
| Криодеструкция (азот) | Бородавки, мелкие элементы | Быстро, эффективно |
| Радиоволновое удаление | Деликатные зоны | Высокая точность |
| Комплексный протокол | Множественные высыпания | Плановое очищение за несколько сеансов |

После процедуры пациент получает рекомендации по уходу: сушка кожи, защита от солнца, контроль признаков воспаления.

## Чего нельзя делать дома

- Народные методы (прижигание, уксус, «выжигание») — ожоги и рубцы.
- Срыв или срезание — риск кровотечения и распространения вируса.
- Самостоятельное применение агрессивных аптечных средств без назначения врача.

## Профилактика

Гигиена рук, личные предметы обихода, защита стоп в общественных местах и укрепление иммунитета снижают риск заражения. Регулярные осмотры у дерматолога помогают выявлять новые элементы на ранней стадии.`;
}

function enBodyPapilloma(): string {
  return `## What are papillomas and warts?

Papillomas and clinical warts are benign skin growths caused by different strains of human papillomavirus (HPV). They may look harmless, but friction, shaving injuries, or immune suppression can trigger rapid spread and make professional treatment necessary.

## Why can they be risky?

- **Viral spread** — picking, cutting, or burning lesions at home transfers HPV to surrounding skin.
- **Inflammation and infection** — damaged growths bleed easily and may become infected.
- **Morphological changes** — fast growth or color/shape changes require dermatologist evaluation.
- **Multiple lesions** — stress, illness, or medication can increase the number of growths.

## How infection happens

HPV enters through micro-injuries in skin or mucosa. Common sites include hands, feet, knees, neck, and areas of chronic friction. Warts are usually firm; papillomas often appear as soft skin tags.

## Diagnosis at the clinic

Our dermatologist performs a clinical exam and may use **dermatoscopy** or **PhotoFinder** imaging to confirm the lesion type and rule out other conditions before removal.

## Modern treatment options

| Method | Indications | Benefits |
|--------|-------------|----------|
| Laser coagulation | Well-defined papillomas | Minimal scarring |
| Cryotherapy (liquid nitrogen) | Warts, small lesions | Fast and effective |
| Radiofrequency removal | Sensitive areas | High precision |
| Combined protocol | Multiple lesions | Staged clearance |

Post-procedure care includes keeping the area dry, sun protection, and monitoring for signs of infection.

## What to avoid at home

- DIY caustic remedies — burns and permanent scars.
- Cutting or tearing lesions — bleeding and viral spread.
- Unsupervised use of aggressive over-the-counter products.

## Prevention

Hand hygiene, personal footwear in public showers, avoiding shared grooming tools, and immune support reduce risk. Regular skin checks help detect new lesions early.`;
}

function uzBodyHemangioma(): string {
  return `## Gemangioma nima?

Gemangioma — qon tomirlarining tug'ma yoki keyinchalik paydo bo'ladigan xavfsiz (benign) o'smasi. Bolalarda ko'krak yoki yuzda qizil dog' sifatida, kattalarda esa "qizil xol" yoki "vino dog'i" ko'rinishida uchraydi. Ko'pincha estetik muammo tug'diradi, lekin ba'zi joylashuvlar (ko'z yaqinida, labda) funksional xavf ham yaratishi mumkin.

## Turlari va xususiyatlari

- **Bolalar gemangiomalari** — tug'ilganda yoki birinchi haftalarda paydo bo'ladi, tez o'sishi mumkin, keyin o'zi qisqarishi ham mumkin.
- **Kapillyar gemangiomalar** — yuzda qizil dog', bosganda oqaradi.
- **Kavernöz turlar** — chuqurroq joylashgan, ba'zan shish keltiradi.

## Nega shunchaki kuzatish yetarli emas?

Agar dog' tez kattalashsa, qon ketishga moyil bo'lsa, og'riq bersa yoki ko'rinish jiddiy bezovta qilsa, mutaxassis bahosi kerak. Eski usul — jarrohlik bilan kesib tashlash — hozir ko'pincha zamonaviy apparat usullar bilan almashtirilgan.

## BBL va lazer davolash

Radeski klinikasida **Sciton BBL** va selektiv lazer texnologiyalari qon tomirlarini aniq nishonga oladi. Nur energiyasi tomir devorlarini qizdiradi va ularni yopadi, gemangioma esa asta-sekin rangini yo'qotadi va kichrayadi. Sog'lom teri qatlami deyarli zarar ko'rmaydi.

## Muolaja jarayoni

1. Konsultatsiya va teri turi aniqlash
2. Test maydoni (kerak bo'lsa) — reaksiya baholash
3. Asosiy seanslar — odatda 2–5 marta
4. Natija kuzatuvi va quyoshdan himoya

## Kutilgan natija

Kichik kapillyar dog'lar bir necha seansdan keyin sezilarli ochiladi. Katta yoki chuqur gemangiomalar uchun biroz ko'proq vaqt kerak bo'lishi mumkin. Shifokor real kutishlarni oldindan tushuntiradi.

## Uy parvarishi

Muolajadan keyin 48 soat quyosh, sauna va issiq dushdan saqlanish tavsiya etiladi. Terini namlantiruvchi krem va SPF himoya tiklanishni tezlashtiradi.`;
}

function ruBodyHemangioma(): string {
  return `## Что такое гемангиома?

Гемангиома — доброкачественное сосудистое образование кожи. У детей часто проявляется ярким красным пятном на лице или туловище, у взрослых — как «винное пятно» или сосудистая родинка. Помимо эстетического дискомфорта, расположение возле глаз или губ может требовать своевременного вмешательства.

## Виды и особенности

- **Детские гемангиомы** — появляются в раннем возрасте, могут быстро расти, затем частично регрессировать.
- **Капиллярные** — ярко-красные пятна, бледнеют при надавливании.
- **Кавернозные** — более глубокие, иногда вызывают припухлость.

## Когда нужно лечение?

Показано лечение при быстром росте, склонности к кровоточивости, боли или выраженном косметическом дефекте. Хирургическое иссечение уступает место щадящим аппаратным методам.

## Лечение BBL и лазером

В клинике Radeski применяются **Sciton BBL** и селективные лазерные системы. Световая энергия нагревает сосудистые стенки, «склеивает» их, и гемангиома постепенно бледнеет. Окружающие ткани повреждаются минимально.

## Этапы процедуры

1. Консультация и оценка типа поражения
2. Тестовая зона при необходимости
3. Основной курс — обычно 2–5 сеансов
4. Контроль динамики и фотозащита

## Ожидаемый результат

Мелкие капиллярные пятна светлеют после нескольких процедур. Крупные образования требуют более длительного курса. Врач заранее объясняет реалистичные ожидания.

## Уход после процедуры

48 часов избегайте солнца, сауны и горячего душа. Увлажнение и SPF ускоряют восстановление кожи.`;
}

function enBodyHemangioma(): string {
  return `## What is a hemangioma?

A hemangioma is a benign vascular skin lesion. In children it often appears as a bright red patch; in adults as a wine-colored spot or vascular birthmark. Besides aesthetics, location near the eyes or lips may require timely treatment.

## Types and features

- **Infantile hemangiomas** — appear early in life, may grow quickly then partially regress.
- **Capillary types** — bright red, blanch with pressure.
- **Cavernous types** — deeper, sometimes cause swelling.

## When is treatment needed?

Treatment is indicated for rapid growth, bleeding tendency, pain, or significant cosmetic concern. Modern device-based therapy has largely replaced surgical excision for many cases.

## BBL and laser therapy

At Radeski clinic, **Sciton BBL** and selective laser wavelengths target blood vessels precisely. Light energy heats vessel walls, causing gradual fading of the lesion with minimal damage to surrounding skin.

## Treatment steps

1. Consultation and lesion assessment
2. Test spot if needed
3. Main sessions — typically 2–5
4. Follow-up and sun protection

## Expected outcome

Small capillary spots lighten after several sessions. Larger lesions may need a longer course. Your doctor will set realistic expectations upfront.

## Aftercare

Avoid sun, sauna, and hot showers for 48 hours. Moisturizer and SPF support healing.`;
}

function uzBodyPsoriasis(): string {
  return `## Psoriaz nima?

Psoriaz (chang qoqmasi) — surunkali autoimmun kasallik bo'lib, terida qizil dog'lar va oq-qattiq qobiqlanish bilan namoyon bo'ladi. Bu faqat "teri kasalligi" emas — ba'zan bo'g'imlar, tirnoqlar ham ta'sirlanadi. To'liq davolash hozircha mumkin emas, lekin zamonaviy tibbiyot remissiyani uzoq yillar saqlash imkonini beradi.

## Nima uchun muhim?

Psoriaz bemorlarning 2–3% ini tashvishga soladi. Kasallik yuzaga kelgan joyda qichishish, qon ketishi va ijtimoiy noqulaylik tug'diradi. Erta va to'g'ri davolash bilan teri tozaligi 90–95% gacha yetishi mumkin.

## Xavf omillari va triggerlar

- Stress va uyqusizlik
- Infeksiyalar (tonsillit, streptokok)
- Ayrim dorilar
- Alcohol va chekish
- Quruq sovuq ob-havo

## Zamonaviy davolash yo'nalishlari

### Topikal terapiya
Kortikosteroid kremlar, D-vitamin analoglari va moisturizatorlar yengil va o'rta shakllarda birinchi qadam.

### Fototerapiya (UVB 311 nm)
Keng tarqalgan dog'lar uchun eng samarali va xavfsiz usullardan biri. Narrow-band UVB terini tanlab ta'sir qiladi, immunitetni tartibga keltiradi.

### Tizimli va biologik preparatlar
Og'ir psoriazda mutaxassis nazoratida zamonaviy biologik dorilar qo'llaniladi.

## Radeski klinikasidagi yondashuv

Biz **individual protokol** tuzamiz: teri holati, maydon, yoshi va hamroh kasalliklarni hisobga olgan holda. "Psoriaz maktabi" dasturimizda bemorlarga parvarish, ovqatlanish va stressni boshqarish bo'yicha amaliy maslahatlar beriladi.

## Uyda remissiyani uzaytirish

- Kunlik namlantiruvchi krem (fragrance-free)
- Qisqa issiq dush, agressiv sovunlardan voz kechish
- Yumshoq matoli kiyim
- Triggerlarni kundalik daftarda kuzatish
- Muntazam shifokor ko'rigi

## Qachon shoshilinch yordam kerak?

Butun tanani qamrab olgan qizarish, isitma va umumiy holsizlik — erythroderma belgilari bo'lishi mumkin. Bunday holatda darhol tibbiy yordam kerak.`;
}

function ruBodyPsoriasis(): string {
  return `## Что такое псориаз?

Псориаз — хроническое иммуноассоциированное заболевание кожи с красными бляшками и серебристыми чешуйками. Поражение может распространяться на суставы и ногти. Полного излечения пока нет, но современная терапия позволяет достигать длительной ремиссии.

## Почему это важно?

Псориаз встречается у 2–3% населения. Зуд, кровоточивость и социальный дискомфорт снижают качество жизни. При раннем и правильном лечении очистка кожи достигает 90–95%.

## Факторы риска и триггеры

- Стресс и недосыпание
- Инфекции (тонзиллит, стрептококк)
- Некоторые лекарства
- Алкоголь и курение
- Сухой холодный климат

## Современные методы лечения

### Наружная терапия
Кортикостероиды, аналоги витамина D и увлажняющие средства — первая линия при лёгкой и средней форме.

### Фототерапия (УФБ 311 нм)
Один из самых эффективных методов при распространённых высыпаниях. Узкополосное УФБ воздействует избирательно на кожу.

### Системная и биологическая терапия
При тяжёлом течении под контролем специалиста назначаются современные биопрепараты.

## Подход в клинике Radeski

Мы составляем **индивидуальный протокол** с учётом площади поражения, возраста и сопутствующих заболеваний. В рамках «Школы псориаза» пациенты получают практические рекомендации по уходу, питанию и управлению стрессом.

## Как продлить ремиссию дома

- Ежедневное увлажнение без отдушек
- Короткий тёплый душ, отказ от агрессивного мыла
- Мягкая одежда из натуральных тканей
- Дневник триггеров
- Регулярные визиты к врачу

## Когда нужна срочная помощь?

Генерализованное покраснение, лихорадка и слабость могут указывать на эритродермию — требуется немедленная медицинская помощь.`;
}

function enBodyPsoriasis(): string {
  return `## What is psoriasis?

Psoriasis is a chronic immune-mediated skin disease with red plaques and silvery scaling. Joints and nails may also be affected. A complete cure is not yet available, but modern therapy can maintain long remission periods.

## Why it matters

Psoriasis affects 2–3% of people worldwide. Itching, bleeding lesions, and social discomfort reduce quality of life. Early proper treatment can achieve 90–95% skin clearance.

## Risk factors and triggers

- Stress and poor sleep
- Infections (tonsillitis, streptococcus)
- Certain medications
- Alcohol and smoking
- Dry cold climate

## Modern treatment pathways

### Topical therapy
Corticosteroids, vitamin D analogues, and moisturizers are first-line for mild to moderate disease.

### Phototherapy (UVB 311 nm)
Highly effective for widespread plaques. Narrow-band UVB acts selectively on affected skin.

### Systemic and biologic therapy
Severe cases may require specialist-supervised biologics.

## Approach at Radeski clinic

We build an **individual protocol** based on lesion area, age, and comorbidities. Our "Psoriasis Patient School" provides practical guidance on skincare, nutrition, and stress management.

## Extending remission at home

- Daily fragrance-free moisturizers
- Short lukewarm showers, gentle cleansers
- Soft breathable clothing
- Trigger diary
- Regular medical follow-up

## When to seek urgent care

Generalized redness with fever and malaise may signal erythroderma — seek immediate medical attention.`;
}

function uzBodyGeneral(): string {
  return `## Teri salomatligi haqida

Teri — organizmning eng katta organi va birinchi himoya qavati. Teri muammolari ko'pincha faqat estetik emas, balki ichki kasalliklar yoki atrof-muhit omillarining aksidir. To'g'ri ma'lumot va vaqtida murojaat ko'p muammolarning oldini oladi.

## Eng ko'p uchraydigan muammolar

- Akne va post-akne dog'lari
- Ekzema va allergik reaksiyalar
- Pigmentatsiya va melazma
- Quruq teri va seborreya
- Soch tokilishi va tirnoq o'zgarishlari
- Teri o'smalari va nevüs kuzatuvi

## Nega o'z-o'zidan davolash xavfli?

Internetdagi maslahatlar har bir bemorga mos kelmaydi. Noto'g'ri krem yallig'lanishni kuchaytirishi, steroidli dorilarni ko'rsatmasiz ishlatish terini incitishi, o'smalarni kechiktirilgan tekshiruv esa jiddiy oqibatlarga olib kelishi mumkin.

## Dermatolog qanday yordam beradi?

Mutaxassis anamnez oladi, terini ko'zdan kechiradi va kerak bo'lsa dermatoskopiya, laboratoriya yoki apparat muolajalarni tavsiya qiladi. Radeski klinikasida har bir bemor uchun **shaxsiy davolash rejasi** tuziladi.

## Profilaktika tamoyillari

- Kundalik SPF himoya (hatto bulutli havoda ham)
- Teri turiga mos tozalovchi va namlantiruvchi
- Suv ichish va muvozanatli ovqatlanish
- Stressni boshqarish va yetarli uyqu
- Yiliga kamida bir marta teri tekshiruvi

## Xulosa

Teri salomatligi — uzoq muddatli parvarish va professional nazorat natijasidir. Savollaringiz bo'lsa, dermatologimizga murojaat qiling — aniq tashxis va xavfsiz davolash rejasi tuziladi.`;
}

function ruBodyGeneral(): string {
  return `## О здоровье кожи

Кожа — крупнейший орган и первая линия защиты организма. Проблемы кожи часто отражают внутренние процессы или влияние среды. Своевременная информация и обращение к врачу предотвращают многие осложнения.

## Распространённые проблемы

- Акне и постакне
- Экзема и аллергические реакции
- Пигментация и мелазма
- Сухость и себорея
- Выпадение волос и изменения ногтей
- Новообразования и наблюдение родинок

## Почему самолечение опасно?

Советы из интернета не учитывают индивидуальные особенности. Неправильный крем усиливает воспаление, бесконтрольные стероиды истончают кожу, отложенная диагностика новообразований может быть опасной.

## Как помогает дерматолог?

Специалист собирает анамнез, осматривает кожу и при необходимости назначает дерматоскопию, анализы или аппаратные процедуры. В клинике Radeski составляется **индивидуальный план лечения**.

## Принципы профилактики

- Ежедневная SPF-защита
- Очищение и увлажнение по типу кожи
- Достаточное питьё и сбалансированное питание
- Управление стрессом и полноценный сон
- Ежегодный осмотр кожи

## Заключение

Здоровье кожи — результат регулярного ухода и профессионального контроля. При вопросах обратитесь к нашему дерматологу для точной диагностики и безопасного лечения.`;
}

function enBodyGeneral(): string {
  return `## About skin health

The skin is the body's largest organ and first protective barrier. Skin issues often reflect internal factors or environmental exposure—not just aesthetics. Reliable information and timely medical care prevent many complications.

## Common concerns

- Acne and post-acne marks
- Eczema and allergic reactions
- Pigmentation and melasma
- Dryness and seborrhea
- Hair loss and nail changes
- Skin growths and mole monitoring

## Why self-treatment is risky

Online advice rarely fits your individual case. Wrong creams worsen inflammation; unsupervised steroids thin the skin; delayed evaluation of growths can be dangerous.

## How a dermatologist helps

A specialist takes history, examines the skin, and may recommend dermatoscopy, labs, or device-based therapy. At Radeski clinic, every patient receives a **personalized treatment plan**.

## Prevention principles

- Daily SPF protection
- Cleansing and moisturizing matched to skin type
- Hydration and balanced nutrition
- Stress management and adequate sleep
- At least annual skin check

## Conclusion

Healthy skin comes from consistent care and professional follow-up. Contact our dermatology team for accurate diagnosis and safe treatment.`;
}

const TAKEAWAYS = {
  papilloma: {
    uz: [
      'Papilloma va so\'gallar HPV bilan bog\'liq — o\'zboshimchalik bilan yo\'qotmang',
      'Dermatoskop tekshiruvi xavfsizlik va to\'g\'ri usul tanlash uchun muhim',
      'Lazer, azot yoki radioto\'lqin — zamonaviy va chandiqsiz variantlar',
      'Immunitet va gigiyena profilaktikada asosiy omil',
    ],
    ru: [
      'Папилломы и бородавки связаны с ВПЧ — не удаляйте самостоятельно',
      'Дерматоскопия важна для безопасности и выбора метода',
      'Лазер, азот или радиоволна — современные методы с минимальным рубцеванием',
      'Иммунитет и гигиена — ключ к профилактике',
    ],
    en: [
      'Papillomas and warts are HPV-related — avoid DIY removal',
      'Dermatoscopy ensures safe diagnosis and method selection',
      'Laser, cryotherapy, or radiofrequency offer minimal scarring',
      'Immunity and hygiene are central to prevention',
    ],
  },
  hemangioma: {
    uz: [
      'Gemangioma — qon tomir o\'smasi, ko\'pincha apparat usuli bilan davolanadi',
      'BBL va lazer sog\'lom terini saqlab, dog\'ni asta-sekin ochadi',
      'Tez o\'sish yoki qon ketishda shifokorga murojaat qiling',
      'Muolajadan keyin quyoshdan himoya majburiy',
    ],
    ru: [
      'Гемангиома — сосудистое образование, чаще лечится аппаратными методами',
      'BBL и лазер постепенно осветляют пятно, сохраняя здоровую кожу',
      'При быстром росте или кровоточивости обратитесь к врачу',
      'После процедуры обязательна защита от солнца',
    ],
    en: [
      'Hemangiomas are vascular lesions, often treated with devices',
      'BBL and laser fade spots while sparing healthy skin',
      'Seek care for rapid growth or bleeding',
      'Sun protection is mandatory after treatment',
    ],
  },
  psoriasis: {
    uz: [
      'Psoriaz surunkali kasallik — remissiyani uzaytirish mumkin',
      'UVB 311 nm fototerapiya keng tarqalgan dog\'lar uchun samarali',
      'Triggerlarni aniqlash va kundalik parvarish muhim',
      'Og\'ir holatda tizimli davolash kerak bo\'lishi mumkin',
    ],
    ru: [
      'Псориаз хронический — ремиссию можно длительно поддерживать',
      'Фототерапия УФБ 311 нм эффективна при распространённых высыпаниях',
      'Важно выявлять триггеры и соблюдать ежедневный уход',
      'При тяжёлом течении может потребоваться системная терапия',
    ],
    en: [
      'Psoriasis is chronic — long remission is achievable',
      'UVB 311 nm phototherapy works well for widespread plaques',
      'Identify triggers and maintain daily skincare',
      'Severe cases may need systemic therapy',
    ],
  },
  general: {
    uz: [
      'Teri muammolari vaqtida tekshirilishi kerak',
      'O\'z-o\'zidan davolash ko\'pincha holatni yomonlashtiradi',
      'SPF va namlantirish — kundalik parvarish asosi',
      'Dermatolog individual reja tuzadi',
    ],
    ru: [
      'Проблемы кожи требуют своевременной оценки',
      'Самолечение часто ухудшает состояние',
      'SPF и увлажнение — основа ежедневного ухода',
      'Дерматолог составляет индивидуальный план',
    ],
    en: [
      'Skin problems should be evaluated promptly',
      'Self-treatment often worsens the condition',
      'SPF and moisturizers are daily care essentials',
      'A dermatologist builds an individual plan',
    ],
  },
};

export const ARTICLE_RICH_CATALOG: Record<string, LocalizedArticleCatalog> = {
  'papilloma-warts': {
    uz: {
      summary:
        "Papillomalar va so'gallar — HPV bilan bog'liq o'smalar. Nega ularni e'tiborsiz qoldirmaslik, qanday tekshiriladi va zamonaviy usullar bilan qanday xavfsiz olib tashlanishi haqida to'liq qo'llanma.",
      body: uzBodyPapilloma(),
      keyTakeaways: TAKEAWAYS.papilloma.uz,
      tags: ['HPV', 'Papilloma', "So'g'al", 'Dermatologiya'],
      whenToSeeDoctor: [
        "O'sma tez kattalashsa yoki rangi o'zgarsa",
        'Qon ketishi yoki og\'riq paydo bo\'lsa',
        'Bir nechta yangi o\'smalar bir vaqtda chiqsa',
        'Uy usullari yordam bermasa',
      ],
      faq: [
        {
          question: 'Papilloma o\'zi yo\'qoladimi?',
          answer:
            'Ba\'zan kichik o\'smalar immunitet kuchayganda kichrayishi mumkin, lekin ko\'pchilik holatda professional olib tashlash tezroq va xavfsizroq.',
        },
        {
          question: 'Muolaja og\'riqlimi?',
          answer:
            'Zamonaviy usullar (lazer, radioto\'lqin) odatda yengil noqulaylik bilan o\'tadi; kriyoterapiya qisqa vaqt sovuq his qoldiradi.',
        },
        {
          question: 'Chandiq qoladimi?',
          answer:
            'To\'g\'ri usul va tajribali mutaxassis bilan ishlov berilganda chandiq ehtimoli minimal.',
        },
      ],
    },
    ru: {
      summary:
        'Папилломы и бородавки связаны с ВПЧ. Полное руководство: почему важно не игнорировать, как проходит диагностика и безопасное удаление современными методами.',
      body: ruBodyPapilloma(),
      keyTakeaways: TAKEAWAYS.papilloma.ru,
      tags: ['ВПЧ', 'Папилломы', 'Бородавки', 'Дерматология'],
      whenToSeeDoctor: [
        'Быстрый рост или изменение цвета',
        'Кровоточивость или боль',
        'Появление множества новых элементов',
        'Неэффективность домашних методов',
      ],
      faq: [
        {
          question: 'Папиллома может исчезнуть сама?',
          answer:
            'Иногда при укреплении иммунитета элемент уменьшается, но профессиональное удаление быстрее и безопаснее.',
        },
        {
          question: 'Больно ли удалять?',
          answer:
            'Современные методы вызывают лишь лёгкий дискомфорт; криотерапия даёт кратковременное ощущение холода.',
        },
        {
          question: 'Останутся ли рубцы?',
          answer:
            'При правильном методе и опытном враче риск рубцевания минимален.',
        },
      ],
    },
    en: {
      summary:
        'Papillomas and warts are HPV-related growths. A complete guide to risks, diagnosis, and safe modern removal.',
      body: enBodyPapilloma(),
      keyTakeaways: TAKEAWAYS.papilloma.en,
      tags: ['HPV', 'Papilloma', 'Warts', 'Dermatology'],
      whenToSeeDoctor: [
        'Rapid growth or color change',
        'Bleeding or pain',
        'Multiple new lesions appearing',
        'Home remedies fail',
      ],
      faq: [
        {
          question: 'Can a papilloma disappear on its own?',
          answer:
            'Sometimes small lesions shrink when immunity improves, but professional removal is usually faster and safer.',
        },
        {
          question: 'Is removal painful?',
          answer:
            'Modern methods cause mild discomfort; cryotherapy feels briefly cold.',
        },
        {
          question: 'Will there be scars?',
          answer:
            'With the right technique and experienced clinician, scarring risk is minimal.',
        },
      ],
    },
  },
  hemangioma: {
    uz: {
      summary:
        "Qizil tomirli dog'lar va gemangiomalarni BBL foto-terapiya va lazer bilan xavfsiz davolash — qanday ishlaydi va nima kutish mumkin.",
      body: uzBodyHemangioma(),
      keyTakeaways: TAKEAWAYS.hemangioma.uz,
      tags: ['Gemangioma', 'BBL', 'Lazer', 'Qizil xol'],
      whenToSeeDoctor: [
        "Dog' tez kattalashsa",
        'Qon ketishi yoki og\'riq bo\'lsa',
        'Ko\'z yoki lab yaqinida joylashgan bo\'lsa',
        'Estetik jihatdan bezovta qilsa',
      ],
      faq: [
        {
          question: 'Bolalar gemangiomasi o\'z-o\'zidan o\'tadimi?',
          answer:
            'Ba\'zi infantil gemangiomalar bir necha yil ichida o\'zi qisqaradi, lekin shifokor dinamikasini kuzatishi kerak.',
        },
        {
          question: 'Necha seans kerak?',
          answer:
            'Odatda 2–5 seans, lekin dog\' hajmi va chuqurligiga bog\'liq.',
        },
      ],
    },
    ru: {
      summary:
        'Безопасное лечение красных сосудистых пятен и гемангиом с помощью BBL и лазера — как это работает и чего ожидать.',
      body: ruBodyHemangioma(),
      keyTakeaways: TAKEAWAYS.hemangioma.ru,
      tags: ['Гемангиома', 'BBL', 'Лазер', 'Сосуды'],
      whenToSeeDoctor: [
        'Быстрый рост пятна',
        'Кровоточивость или боль',
        'Расположение у глаз или губ',
        'Выраженный косметический дефект',
      ],
      faq: [
        {
          question: 'Детская гемангиома проходит сама?',
          answer:
            'Некоторые инфантильные гемангиомы регрессируют, но динамику должен контролировать врач.',
        },
        {
          question: 'Сколько сеансов нужно?',
          answer:
            'Обычно 2–5, в зависимости от размера и глубины поражения.',
        },
      ],
    },
    en: {
      summary:
        'Safe treatment of red vascular spots and hemangiomas with BBL and laser — how it works and what to expect.',
      body: enBodyHemangioma(),
      keyTakeaways: TAKEAWAYS.hemangioma.en,
      tags: ['Hemangioma', 'BBL', 'Laser', 'Vascular'],
      whenToSeeDoctor: [
        'Rapid spot growth',
        'Bleeding or pain',
        'Location near eyes or lips',
        'Significant cosmetic concern',
      ],
      faq: [
        {
          question: 'Do infantile hemangiomas go away alone?',
          answer:
            'Some regress over years, but a physician should monitor progression.',
        },
        {
          question: 'How many sessions are needed?',
          answer:
            'Typically 2–5, depending on size and depth.',
        },
      ],
    },
  },
  psoriasis: {
    uz: {
      summary:
        "Psoriazni nazorat qilish, remissiyani uzaytirish va UVB 311 fototerapiyaning roli — ilmiy asoslangan qo'llanma.",
      body: uzBodyPsoriasis(),
      keyTakeaways: TAKEAWAYS.psoriasis.uz,
      tags: ['Psoriaz', 'Fototerapiya', 'UVB', 'Remissiya'],
      whenToSeeDoctor: [
        'Dog\'lar tez tarqalsa',
        'Bo\'g\'im og\'rig\'i qo\'shilsa',
        'Butun tana qizarishi va isitma bo\'lsa',
        'Uy parvarishi yordam bermasa',
      ],
      faq: [
        {
          question: 'Psoriaz butunlay davolanadimi?',
          answer:
            'Hozircha to\'liq davolash mumkin emas, lekin zamonaviy terapiya uzoq remissiya beradi.',
        },
        {
          question: 'UVB xavflimi?',
          answer:
            'Narrow-band UVB 311 nm klinik nazoratda xavfsiz hisoblanadi; seanslar shifokor rejasi bo\'yicha o\'tkaziladi.',
        },
      ],
    },
    ru: {
      summary:
        'Контроль псориаза, продление ремиссии и роль фототерапии УФБ 311 — научно обоснованное руководство.',
      body: ruBodyPsoriasis(),
      keyTakeaways: TAKEAWAYS.psoriasis.ru,
      tags: ['Псориаз', 'Фототерапия', 'УФБ', 'Ремиссия'],
      whenToSeeDoctor: [
        'Быстрое распространение высыпаний',
        'Боль в суставах',
        'Генерализованное покраснение с лихорадкой',
        'Неэффективность домашнего ухода',
      ],
      faq: [
        {
          question: 'Псориаз можно вылечить полностью?',
          answer:
            'Полного излечения пока нет, но современная терапия обеспечивает длительную ремиссию.',
        },
        {
          question: 'Опасна ли фототерапия?',
          answer:
            'Узкополосное УФБ 311 нм безопасно под контролем врача по индивидуальному плану.',
        },
      ],
    },
    en: {
      summary:
        'Controlling psoriasis, extending remission, and the role of UVB 311 phototherapy — an evidence-based guide.',
      body: enBodyPsoriasis(),
      keyTakeaways: TAKEAWAYS.psoriasis.en,
      tags: ['Psoriasis', 'Phototherapy', 'UVB', 'Remission'],
      whenToSeeDoctor: [
        'Rapid spread of plaques',
        'Joint pain develops',
        'Generalized redness with fever',
        'Home care is insufficient',
      ],
      faq: [
        {
          question: 'Can psoriasis be cured completely?',
          answer:
            'A full cure is not yet available, but modern therapy achieves long remission.',
        },
        {
          question: 'Is phototherapy dangerous?',
          answer:
            'Narrow-band UVB 311 nm is considered safe under clinical supervision.',
        },
      ],
    },
  },
  'general-dermatology': {
    uz: {
      summary:
        "Teri salomatligi, ko'p uchraydigan muammolar va dermatologga qachon murojaat qilish kerakligi haqida foydali ma'lumot.",
      body: uzBodyGeneral(),
      keyTakeaways: TAKEAWAYS.general.uz,
      tags: ['Teri parvarishi', 'Dermatologiya', 'Profilaktika'],
      whenToSeeDoctor: [
        'Yangi yoki o\'zgarayotgan teri dog\'i',
        'Uzoq davom etayotgan qichishish',
        'Dorilar yordam bermasa',
        'Yillik profilaktik tekshiruv vaqti kelganda',
      ],
      faq: [
        {
          question: 'Qaysi krem teri uchun yaxshi?',
          answer:
            'Teri turi va muammoga qarab tanlanadi — dermatolog maslahatisiz universal "eng yaxshi" krem yo\'q.',
        },
      ],
    },
    ru: {
      summary:
        'Полезная информация о здоровье кожи, распространённых проблемах и когда обращаться к дерматологу.',
      body: ruBodyGeneral(),
      keyTakeaways: TAKEAWAYS.general.ru,
      tags: ['Уход за кожей', 'Дерматология', 'Профилактика'],
      whenToSeeDoctor: [
        'Новое или изменяющееся пятно',
        'Длительный зуд',
        'Нет эффекта от лечения',
        'Плановый профилактический осмотр',
      ],
      faq: [
        {
          question: 'Какой крем лучше для кожи?',
          answer:
            'Выбор зависит от типа кожи и диагноза — универсального «лучшего» крема без врача не существует.',
        },
      ],
    },
    en: {
      summary:
        'Useful information on skin health, common concerns, and when to see a dermatologist.',
      body: enBodyGeneral(),
      keyTakeaways: TAKEAWAYS.general.en,
      tags: ['Skincare', 'Dermatology', 'Prevention'],
      whenToSeeDoctor: [
        'New or changing skin spot',
        'Persistent itching',
        'Treatment is not working',
        'Annual preventive check-up',
      ],
      faq: [
        {
          question: 'Which cream is best for skin?',
          answer:
            'Selection depends on skin type and diagnosis — there is no universal "best" cream without medical advice.',
        },
      ],
    },
  },
};

export function findArticleCatalogKey(article: Pick<Article, 'id' | 'slug' | 'title'>): string {
  const haystack = `${article.id} ${article.slug} ${article.title.uz} ${article.title.ru} ${article.title.en}`.toLowerCase();

  for (const [key, keywords] of Object.entries(ARTICLE_CATALOG_KEYWORDS)) {
    if (keywords.some((keyword) => haystack.includes(keyword.toLowerCase()))) {
      return key;
    }
  }

  return 'general-dermatology';
}
