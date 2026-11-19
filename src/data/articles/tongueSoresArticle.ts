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

/*
 * Tongue sores and cracks: the common benign causes (bite and tooth/denture injury, aphthous
 * ulcers, herpes, thrush, geographic and fissured tongue, oral lichen planus, iron/B12
 * deficiency), what helps, and the one rule that matters — a sore that has not healed in two
 * weeks needs a biopsy. Search Console: "til yarasi davosi", "til yorilishi davolash",
 * "til osti yarasi" (positions 8–9). Links to the tongue cancer article by the same doctor.
 */

const COVER = {
  uz: '/articles/til-yarasi-cover-uz.jpg',
  ru: '/articles/til-yarasi-cover-ru.jpg',
  en: '/articles/til-yarasi-cover-en.jpg',
};

function uzBody(): string {
  return `Tildagi yara yoki yoriq ko‘pchilikda hech bo‘lmaganda bir marta bo‘ladi. Aksariyat hollarda bu zararsiz va 7–14 kunda o‘zi bitadi. Lekin ba’zi o‘zgarishlar davolashni, kamdan-kam hollarda esa shoshilinch tekshiruvni talab qiladi. Quyida til yarasi va til yorilishining sabablari, uyda nima qilish va qachon shifokorga borish kerakligini tushuntiramiz.

## Til yarasining sabablari

### Jarohat

Tilni tishlab olish, o‘tkir tish yoki plomba cheti, yaxshi o‘tirmagan protez, juda issiq ovqat. Yara jarohat joyida bo‘ladi va sabab bartaraf etilgach **1–2 haftada** bitadi. O‘tkir tish yoki protez qolsa, yara qayta-qayta paydo bo‘ladi — stomatologga ko‘rinish kerak.

### Aftoz stomatit (afta)

Dumaloq, **oq-sarg‘ish markazli, qizil hoshiyali** og‘riqli yaracha — tilning yon tomonida, uchida yoki til ostida. Stress, kasallik, hayz, ba’zi ovqatlardan keyin chiqadi va odatda 7–10 kunda bitadi. Tez-tez qaytalansa, temir, B12 va foliy kislotasi tanqisligini tekshirish kerak.

### Gerpes

Mayda pufakchalar to‘plami yorilib, og‘riqli yarachalar qoladi; ko‘pincha lab gerpesi bilan birga. Batafsil: [Gerpes](/uz/articles/art-gerpes).

### Kandidoz (og‘iz zamburug‘i)

Tilda **oq karash**, qirib olinsa ostida qizil, achishuvchi yuza. Antibiotik, ingalyatsion gormon, protez, qandli diabetdan keyin ko‘proq uchraydi.

### Qizil yassi temiratki

Og‘izda **oq to‘rsimon chiziqlar**, ba’zan og‘riqli eroziyalar — tilda va lunjlarda. Surunkali kechadi va dermatolog nazoratini talab qiladi. Batafsil: [Qizil yassi temiratki](/uz/articles/art-qizil-yassi-temiratki).

## Til yorilishi sabablari

- **Burmali (yoriqli) til** — tug‘ma yoki yosh bilan chuqurlashadigan egatlar. Odatda zararsiz, faqat egatlar orasida ovqat qoldig‘i yig‘ilib achishishi mumkin; tilni yumshoq tozalash kifoya.
- **Geografik til** — tilda xaritaga o‘xshash, joyi o‘zgarib turadigan qizil dog‘lar. Zararsiz, ba’zan achchiq ovqatdan achishadi.
- **Temir va B12 tanqisligi** — til silliq, qizil, og‘riqli bo‘lib, yoriqlar paydo bo‘ladi; lab burchaklari ham yoriladi (xeylit). Qon tahlili bilan aniqlanadi.
- **Og‘iz qurishi** — kam suv ichish, ba’zi dorilar, og‘iz bilan nafas olish.

## Qachon xavfli?

Asosiy qoida: **2 hafta ichida bitmagan yara yoki yoriq** shifokor tomonidan ko‘rilishi kerak. Ayniqsa:

- yara og‘riqsiz, lekin bitmayapti yoki kattalashyapti;
- tagida qattiq tugun seziladi;
- oq yoki qizil dog‘ ketmayapti;
- sababsiz qon chiqadi, til uvishadi;
- bo‘yin yoki jag‘ ostida limfa tugunlari kattalashgan.

Bunday hollarda biopsiya kerak bo‘lishi mumkin — tilning xavfli o‘smasini erta topish uchun. Batafsil: [Til raki: alomatlari va belgilari](/uz/articles/art-til-yassi-hujayrali-rak).

## Uyda nima qilish mumkin

- achchiq, nordon, juda issiq va qattiq ovqatdan 1–2 hafta saqlanish;
- ovqatdan keyin og‘izni iliq suv yoki dorixonadagi antiseptik chayqatma bilan chayish;
- yumshoq tish cho‘tkasi, tilni ehtiyotkorlik bilan tozalash;
- chekish va spirtni to‘xtatish — ular bitishni sekinlashtiradi va xavfni oshiradi.

Yarani kuydirish, spirt, tuz yoki soda bilan ishqalash, shifokorsiz gormonli vositalar qo‘llash tavsiya etilmaydi.

## Qaysi shifokorga borish kerak?

Jarohat, tish va protez muammolari — **stomatolog**. Oq to‘rsimon o‘zgarishlar, zamburug‘, gerpes, lab va og‘iz shilliq qavatining teri kasalliklari bilan bog‘liq holatlar — **dermatolog**. Bitmaydigan yara yoki shubhali dog‘ — **onkodermatolog** yoki onkolog ko‘rigi va biopsiya. Radeski’da dermatolog va dermatoonkolog qabuli Farg‘ona va Qo‘qonda: [Onkodermatolog Farg‘onada](/uz/fargona/onko-dermatolog), [Biopsiya](/uz/fargona/biopsiya).

*Ushbu maqola umumiy ma’lumot uchun. Yakuniy tashxis va davolashni faqat shifokor belgilaydi.*`;
}

function ruBody(): string {
  return `Язвочка или трещина на языке хотя бы раз бывает почти у каждого. Чаще всего это безобидно и проходит само за 7–14 дней. Но некоторые изменения требуют лечения, а в редких случаях — срочного обследования. Разберём причины язв и трещин на языке, что делать дома и когда идти к врачу.

## Причины язв на языке

### Травма

Прикусывание языка, острый край зуба или пломбы, плохо подогнанный протез, слишком горячая еда. Язва находится в месте травмы и заживает за **1–2 недели** после устранения причины. Если острый зуб или протез остаются, язва возвращается — нужен стоматолог.

### Афтозный стоматит (афта)

Круглая болезненная язвочка **с бело-жёлтым центром и красным ободком** — на боковой поверхности, кончике или под языком. Появляется после стресса, болезни, во время менструации, после некоторых продуктов и обычно заживает за 7–10 дней. При частых рецидивах нужно проверить дефицит железа, B12 и фолиевой кислоты.

### Герпес

Группа мелких пузырьков вскрывается, оставляя болезненные язвочки; часто вместе с герпесом на губах. Подробнее: [Герпес](/ru/articles/art-gerpes).

### Кандидоз (молочница)

**Белый налёт** на языке, под которым при снятии видна красная жгущая поверхность. Чаще после антибиотиков, ингаляционных гормонов, при протезах и сахарном диабете.

### Красный плоский лишай

**Белые сетчатые полоски** во рту, иногда болезненные эрозии — на языке и щеках. Течёт хронически и требует наблюдения дерматолога. Подробнее: [Красный плоский лишай](/ru/articles/art-qizil-yassi-temiratki).

## Причины трещин на языке

- **Складчатый (трещиноватый) язык** — врождённые или углубляющиеся с возрастом борозды. Обычно безвреден, но в бороздах скапливаются остатки пищи и может появляться жжение; достаточно мягко очищать язык.
- **Географический язык** — красные пятна, похожие на карту, которые меняют расположение. Безвреден, иногда жжёт от острой пищи.
- **Дефицит железа и B12** — язык гладкий, красный, болезненный, появляются трещины; трескаются и уголки губ (хейлит). Выявляется анализом крови.
- **Сухость во рту** — мало воды, некоторые лекарства, дыхание ртом.

## Когда это опасно?

Главное правило: **язва или трещина, которая не зажила за 2 недели**, должна быть осмотрена врачом. Особенно если:

- язва безболезненная, но не заживает или растёт;
- под ней прощупывается плотный узел;
- белое или красное пятно не проходит;
- есть кровоточивость без причины, онемение языка;
- увеличены лимфоузлы на шее или под челюстью.

В таких случаях может понадобиться биопсия — чтобы рано выявить злокачественную опухоль языка. Подробнее: [Рак языка: симптомы и признаки](/ru/articles/art-til-yassi-hujayrali-rak).

## Что можно делать дома

- 1–2 недели избегать острого, кислого, очень горячего и твёрдого;
- после еды полоскать рот тёплой водой или аптечным антисептическим ополаскивателем;
- мягкая зубная щётка, аккуратная чистка языка;
- отказаться от курения и алкоголя — они замедляют заживление и повышают риск.

Прижигать язву, тереть её спиртом, солью или содой, использовать гормональные средства без врача не рекомендуется.

## К какому врачу идти?

Травма, зубы и протезы — **стоматолог**. Белые сетчатые изменения, грибок, герпес, кожные болезни губ и слизистой рта — **дерматолог**. Незаживающая язва или подозрительное пятно — осмотр **онкодерматолога** или онколога и биопсия. В Radeski приём дерматолога и дерматоонколога в Фергане и Коканде: [Онкодерматолог в Фергане](/ru/fargona/onko-dermatolog), [Биопсия](/ru/fargona/biopsiya).

*Статья носит информационный характер. Диагноз и лечение назначает только врач.*`;
}

function enBody(): string {
  return `Almost everyone gets a sore or crack on the tongue at some point. Most are harmless and heal on their own within 7–14 days. But some need treatment and, rarely, an urgent check. Here are the causes of tongue sores and cracks, what to do at home and when to see a doctor.

## Causes of tongue sores

### Injury

Biting your tongue, a sharp tooth or filling edge, a poorly fitting denture, very hot food. The sore sits where the injury happened and heals within **1–2 weeks** once the cause is removed. If the sharp tooth or denture stays, the sore keeps coming back — see a dentist.

### Aphthous ulcers (canker sores)

A round, painful sore **with a white-yellow centre and red rim** — on the side, tip or underside of the tongue. They appear after stress, illness, during periods or after certain foods, and usually heal in 7–10 days. If they recur often, check for iron, B12 and folate deficiency.

### Herpes

A cluster of small blisters bursts and leaves painful sores, often together with a cold sore on the lip. More: [Herpes](/en/articles/art-gerpes).

### Thrush (oral candidiasis)

A **white coating** on the tongue that leaves a red, burning surface when scraped off. More common after antibiotics, inhaled steroids, with dentures and diabetes.

### Lichen planus

**White lace-like lines** in the mouth, sometimes with painful erosions — on the tongue and cheeks. It is chronic and needs dermatologist follow-up. More: [Lichen planus](/en/articles/art-qizil-yassi-temiratki).

## Causes of tongue cracks

- **Fissured tongue** — grooves present from birth or deepening with age. Usually harmless, but food can collect in the grooves and burn; gentle tongue cleaning is enough.
- **Geographic tongue** — map-like red patches that change position. Harmless, sometimes sore with spicy food.
- **Iron and B12 deficiency** — a smooth, red, sore tongue with cracks; the corners of the mouth crack too (cheilitis). A blood test confirms it.
- **Dry mouth** — too little water, some medicines, mouth breathing.

## When is it dangerous?

The key rule: **a sore or crack that has not healed in 2 weeks** must be seen by a doctor. Especially if:

- the sore is painless but does not heal or grows;
- you can feel a firm lump under it;
- a white or red patch does not go away;
- there is unexplained bleeding or numbness;
- lymph nodes in the neck or under the jaw are enlarged.

A biopsy may then be needed to find a malignant tongue tumour early. More: [Tongue cancer: symptoms and signs](/en/articles/art-til-yassi-hujayrali-rak).

## What to do at home

- avoid spicy, sour, very hot and hard foods for 1–2 weeks;
- rinse with warm water or a pharmacy antiseptic mouthwash after meals;
- use a soft toothbrush and clean the tongue gently;
- stop smoking and alcohol — they slow healing and raise the risk.

Cauterising the sore, rubbing it with alcohol, salt or soda, or using steroid products without a doctor is not recommended.

## Which doctor to see?

Injury, teeth and dentures — a **dentist**. White lace-like changes, fungus, herpes and skin conditions of the lips and oral lining — a **dermatologist**. A non-healing sore or suspicious patch — an **oncodermatologist** or oncologist and a biopsy. Radeski has dermatologists and a dermato-oncologist in Fergana and Kokand: [Oncodermatologist in Fergana](/en/fargona/onko-dermatolog), [Biopsy](/en/fargona/biopsiya).

*This article is for general information. Only a doctor can make a diagnosis and prescribe treatment.*`;
}

export const TONGUE_SORES_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Til yarasi va til yorilishi: jarohat, afta, gerpes, kandidoz, burmali va geografik til, vitamin tanqisligi. Uyda nima qilish, qaysi shifokorga borish va qachon biopsiya kerak.',
    body: uzBody(),
    keyTakeaways: [
      'Ko‘p til yaralari zararsiz va 7–14 kunda bitadi',
      'Tez-tez qaytalanuvchi aftalarda temir va B12 tekshiriladi',
      'Burmali va geografik til odatda davolashni talab qilmaydi',
      '2 haftada bitmagan yara shifokor ko‘rigini talab qiladi',
      'Kuydirish va shifokorsiz gormonli vositalar tavsiya etilmaydi',
    ],
    tags: ['Til yarasi', 'Til yorilishi', 'Afta', 'Stomatit', 'Kandidoz', 'Til osti yarasi', 'Og‘iz shilliq qavati', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Yara yoki yoriq 2 haftada bitmasa',
      'Yara ostida qattiq tugun sezilsa',
      'Oq yoki qizil dog‘ ketmasa',
      'Aftalar oyiga bir necha marta qaytalansa',
      'Til uvishsa yoki bo‘yinda limfa tugunlari kattalashsa',
    ],
    faq: [
      {
        question: 'Til yarasi necha kunda bitadi?',
        answer:
          'Jarohat va afta odatda 7–14 kunda bitadi. Sabab (o‘tkir tish, protez) qolsa, yara qaytadi. 2 haftadan ortiq qolgan yara shifokorga ko‘rsatilishi kerak.',
      },
      {
        question: 'Til yorilishi xavflimi?',
        answer:
          'Ko‘pincha yo‘q: burmali va geografik til zararsiz. Ammo til silliq, qizil va og‘riqli bo‘lsa, temir yoki B12 tanqisligi bo‘lishi mumkin — qon tahlili kerak.',
      },
      {
        question: 'Til ostidagi yara nima bo‘lishi mumkin?',
        answer:
          'Ko‘pincha afta yoki jarohat. Lekin til osti va og‘iz tubida bitmaydigan yara yoki qattiq joy bo‘lsa, biopsiya bilan xavfli o‘smani istisno qilish kerak.',
      },
      {
        question: 'Til yarasiga qaysi shifokor qaraydi?',
        answer:
          'Jarohat va protez muammolarida — stomatolog; zamburug‘, gerpes, qizil yassi temiratki kabi holatlarda — dermatolog; bitmaydigan yarada — onkodermatolog yoki onkolog.',
      },
    ],
  },
  ru: {
    summary:
      'Язвы и трещины на языке: травма, афты, герпес, кандидоз, складчатый и географический язык, дефицит витаминов. Что делать дома, к какому врачу идти и когда нужна биопсия.',
    body: ruBody(),
    keyTakeaways: [
      'Большинство язв на языке безобидны и заживают за 7–14 дней',
      'При частых афтах проверяют железо и B12',
      'Складчатый и географический язык обычно не требуют лечения',
      'Язва, не зажившая за 2 недели, требует осмотра врача',
      'Прижигание и гормональные средства без врача не рекомендуются',
    ],
    tags: ['Язва на языке', 'Трещины на языке', 'Афта', 'Стоматит', 'Кандидоз', 'Язва под языком', 'Слизистая рта', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Язва или трещина не заживает 2 недели',
      'Под язвой прощупывается плотный узел',
      'Белое или красное пятно не проходит',
      'Афты возникают несколько раз в месяц',
      'Немеет язык или увеличились лимфоузлы на шее',
    ],
    faq: [
      {
        question: 'За сколько дней заживает язва на языке?',
        answer:
          'Травма и афта обычно заживают за 7–14 дней. Если причина (острый зуб, протез) остаётся, язва возвращается. Язву дольше 2 недель нужно показать врачу.',
      },
      {
        question: 'Опасны ли трещины на языке?',
        answer:
          'Чаще нет: складчатый и географический язык безобидны. Но если язык гладкий, красный и болезненный, возможен дефицит железа или B12 — нужен анализ крови.',
      },
      {
        question: 'Что может быть язва под языком?',
        answer:
          'Чаще всего афта или травма. Но незаживающая язва или уплотнение под языком и на дне рта требуют биопсии, чтобы исключить злокачественную опухоль.',
      },
      {
        question: 'Какой врач лечит язвы на языке?',
        answer:
          'При травме и проблемах с протезом — стоматолог; при грибке, герпесе, красном плоском лишае — дерматолог; при незаживающей язве — онкодерматолог или онколог.',
      },
    ],
  },
  en: {
    summary:
      'Tongue sores and cracks: injury, canker sores, herpes, thrush, fissured and geographic tongue, vitamin deficiency. What to do at home, which doctor to see and when a biopsy is needed.',
    body: enBody(),
    keyTakeaways: [
      'Most tongue sores are harmless and heal in 7–14 days',
      'Frequent canker sores call for iron and B12 tests',
      'Fissured and geographic tongue usually need no treatment',
      'A sore not healed in 2 weeks needs a doctor’s exam',
      'Cauterising and steroids without a doctor are not recommended',
    ],
    tags: ['Tongue sore', 'Tongue cracks', 'Canker sore', 'Stomatitis', 'Oral thrush', 'Sore under the tongue', 'Oral mucosa', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A sore or crack has not healed in 2 weeks',
      'You can feel a firm lump under the sore',
      'A white or red patch does not go away',
      'Canker sores come back several times a month',
      'The tongue feels numb or neck lymph nodes are enlarged',
    ],
    faq: [
      {
        question: 'How long does a tongue sore take to heal?',
        answer:
          'Injuries and canker sores usually heal in 7–14 days. If the cause (a sharp tooth, a denture) remains, the sore returns. A sore lasting over 2 weeks should be seen by a doctor.',
      },
      {
        question: 'Are cracks on the tongue dangerous?',
        answer:
          'Usually not: fissured and geographic tongue are harmless. But a smooth, red, sore tongue may mean iron or B12 deficiency — a blood test is needed.',
      },
      {
        question: 'What can a sore under the tongue be?',
        answer:
          'Most often a canker sore or injury. But a non-healing sore or firm area under the tongue or on the floor of the mouth needs a biopsy to rule out a malignant tumour.',
      },
      {
        question: 'Which doctor treats tongue sores?',
        answer:
          'A dentist for injuries and denture problems; a dermatologist for fungus, herpes or lichen planus; an oncodermatologist or oncologist for a non-healing sore.',
      },
    ],
  },
};

export const TONGUE_SORES_ARTICLE: Article = {
  id: 'art-til-yarasi',
  slug: 'til-yarasi',
  title: {
    uz: 'Til yarasi va til yorilishi: sabablari, davosi va qachon xavfli',
    ru: 'Язва и трещины на языке: причины, лечение и когда это опасно',
    en: 'Tongue Sores and Cracks: Causes, Treatment and When to Worry',
  },
  summary: {
    uz: TONGUE_SORES_ARTICLE_CATALOG.uz.summary,
    ru: TONGUE_SORES_ARTICLE_CATALOG.ru.summary,
    en: TONGUE_SORES_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: TONGUE_SORES_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: TONGUE_SORES_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: TONGUE_SORES_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-12-14',
  image: COVER.uz,
  images: COVER,
  views: 0,
};
