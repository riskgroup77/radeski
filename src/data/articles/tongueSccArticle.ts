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
  return `## Tilning yassi hujayrali raki nima?

Tilning yassi hujayrali raki — til shilliq qavati hujayralaridan boshlanadigan xavfli o‘sma. Kasallik nisbatan kam uchraydi, biroq erta bosqichda kuchli og‘riq bermasligi mumkin. Shu sababli odamlar ba’zan “oddiy yaracha” deb o‘ylab kechiktiradi. Ayni shu kechikish eng katta xavf omillaridan biri.

Til ichki yuzasi yassi (skuamoz) hujayralar bilan qoplangan. Ular nazoratsiz bo‘linib ketsa, o‘sma hosil bo‘ladi — nomi shundan. Ko‘pincha jarayon tilning yon tomonlarida, kamroq uchida yoki ildiz qismida paydo bo‘ladi.

Muhim: erta murojaat bilan to‘liq tuzalish imkoniyati sezilarli oshadi. O‘z-o‘zini davolash yoki “o‘tib ketadi” deb kutish emas — shifokor bahosi kerak.

## Nima uchun paydo bo‘lishi mumkin?

Yagona “majburiy” sabab yo‘q. Lekin xavfni oshiradigan omillar bor:

- sigaret, kalyan va boshqa tamaki mahsulotlari;
- tez-tez iste’mol qilinadigan spirtli ichimliklar;
- tilning o‘tkir tish, plomba yoki protez chetiga uzoq vaqt shikastlanishi;
- og‘iz gigiyenasining yomonligi;
- ba’zi HPV (inson papilloma virusi) turlari;
- 45–50 yoshdan keyin yosh;
- oldin bo‘lgan og‘iz shilliq qavati prekanseroz holatlari.

Xavf omili bo‘lishi “albatta kasal bo‘lasiz” degani emas. Lekin og‘izdagi uzoq qoladigan yara yoki dog‘ga e’tibor kuchaytirish kerak.

## Birinchi belgilari

Erta bosqich stomatit yoki oddiy yaraga o‘xshashi mumkin. Quyidagilar ogohlantirishi kerak:

- 2 haftadan ortiq bitmaydigan til yarasi;
- oq yoki qizil dog‘;
- qattiq joy yoki “bo‘rtma”;
- gapirish yoki ovqatlanishda og‘riq;
- begona narsa turgan dek his;
- sababsiz qon ketishi;
- og‘izdan yoqimsiz hid;
- tilning uyqusirashi (nuvemiya);
- bo‘yindagi limfa tugunlarining kattalashishi.

Har bir yara rak emas. Lekin **uysiz bitmasa** — shifokorga borish majburiy emas, balki zarur.

## Kasallik qanday ko‘rinishi mumkin?

Erta: kichik yaracha, yoriq, zich oq yoki qizil dog‘.

Kattalashganda:

- notekis chetli chuqur yara;
- qon ketishi;
- til to‘qimasining buzilishi;
- nutq va ovqatlanish qiyinlashishi.

Kuchli og‘riqni kutib o‘tirish kerak emas — og‘riq kechikishi mumkin.

## Qanday tashxis qo‘yiladi?

Shifokor og‘iz bo‘shlig‘ini ko‘radi va zarurat bo‘lsa buyuradi:

- kattalashtirib ko‘rik (shu jumladan dermatoskopiya yoki maxsus ko‘rik);
- biopsiya (tozaga kichik to‘qima olib tekshirish) — asosiy tasdiqlash usuli;
- limfa tugunlarini UZI;
- jarayon tarqalishini baholash uchun KT yoki MRT.

Biopsiyasiz yakuniy tashxis odatda qo‘yilmaydi.

## Davolash qanday bo‘lishi mumkin?

Yondashuv o‘sma o‘lchami va bosqichiga bog‘liq:

- jarrohlik yo‘li bilan olib tashlash;
- nurlanish terapiyasi;
- kimyoterapiya;
- ayrim hollarda target yoki immunoterapiya.

Erta aniqlanganda o‘smani to‘liq olib tashlash va hayot sifatini saqlash imkoniyati yuqoriroq bo‘ladi. Davolash rejasi onkolog, jarroh va tegishli mutaxassislar jamoasi tomonidan tuziladi.

## Oldini olish mumkinmi?

Xavfni nolga tushirish mumkin emas, lekin sezilarli kamaytirish mumkin:

- chekishdan voz kechish;
- spirtni cheklash;
- stomatologga muntazam borish;
- og‘iz kasalliklarini o‘z vaqtida davolash;
- tilning surunkali shikastlanishini oldini olish;
- yara yoki dog‘ 2 haftadan ortiq qolsa — shifokorga murojaat.

## Qachon zudlik bilan shifokorga borish kerak?

Kechiktirmang, agar:

- og‘izdagi yara 14 kundan ortiq bitmasa;
- tilda qattiqlik paydo bo‘lsa;
- sababsiz qon chiqsa;
- yutish yoki gapirish og‘risa;
- bo‘yin limfa tugunlari kattalashsa.

Erta diagnostika davolash samarasini va to‘liq tuzalish ehtimolini oshiradi.

## Xulosa

Tilning yassi hujayrali raki — jiddiy kasallik, lekin erta bosqichda davolash ancha samarali. Agar tilda uzoq bitmaydigan yara, dog‘ yoki qattiqlik bo‘lsa, xalq usullariga umid qilmang. O‘z vaqtida ko‘rik — eng to‘g‘ri qadam.

*Ushbu maqola umumiy ma’lumot uchun. Yakuniy tashxis va davolashni faqat shifokor belgilaydi.*`;
}

function ruBody(): string {
  return `## Что такое плоскоклеточный рак языка?

Плоскоклеточный рак языка — злокачественная опухоль, исходящая из клеток слизистой оболочки языка. Заболевание встречается не чаще многих других онкологических процессов полости рта, но опасно тем, что на ранней стадии может почти не болеть. Именно поэтому люди иногда принимают его за «обычную язвочку» и теряют время.

Внутренняя поверхность языка покрыта плоскими (сквамозными) клетками. Если часть из них начинает бесконтрольно делиться, формируется опухоль — отсюда и название. Чаще очаг появляется на боковых поверхностях языка, реже — на кончике или корне.

Чем раньше человек обращается к врачу, тем выше шанс полного выздоровления. Самолечение и стратегия «само пройдёт» здесь особенно рискованны.

## Почему возникает рак языка?

Единой обязательной причины нет, но есть факторы, повышающие риск:

- курение сигарет, кальяна и других табачных изделий;
- частое употребление алкоголя;
- длительные травмы языка острыми краями зубов, пломб или протезов;
- плохая гигиена полости рта;
- некоторые типы вируса папилломы человека (ВПЧ);
- возраст старше 45–50 лет;
- ранее перенесённые предраковые заболевания слизистой рта.

Наличие факторов риска не означает, что болезнь обязательно разовьётся. Но требует более внимательного отношения к длительно сохраняющимся язвам и пятнам во рту.

## Первые симптомы

На ранней стадии болезнь можно спутать со стоматитом или простой язвой. Насторожить должны:

- язва на языке, не заживающая более двух недель;
- белое или красное пятно;
- уплотнение или «шишка»;
- боль при разговоре или еде;
- ощущение инородного тела;
- кровоточивость без видимой причины;
- неприятный запах изо рта;
- онемение языка;
- увеличение лимфоузлов на шее.

Не каждая язва — рак. Но если она **долго не проходит**, визит к врачу обязателен.

## Как выглядит рак языка?

В начале это может быть небольшая язвочка, трещинка или плотное белое/красное пятно.

По мере роста появляются:

- глубокая язва с неровными краями;
- кровоточивость;
- разрушение тканей языка;
- затруднение речи и приёма пищи.

Не стоит ждать сильной боли — она может присоединиться поздно.

## Как ставят диагноз?

Врач осматривает полость рта и при необходимости назначает:

- осмотр с увеличением (в том числе дерматоскопию или специализированный осмотр);
- биопсию — главный метод подтверждения;
- УЗИ лимфоузлов;
- КТ или МРТ для оценки распространённости процесса.

Без биопсии окончательный диагноз обычно не ставят.

## Лечение

Тактика зависит от размера опухоли и стадии:

- хирургическое удаление;
- лучевая терапия;
- химиотерапия;
- в отдельных случаях — таргетная или иммунная терапия.

При раннем выявлении часто удаётся полностью убрать опухоль и сохранить приемлемое качество жизни. План лечения формирует профильная онкологическая команда.

## Можно ли предотвратить?

Полностью исключить риск нельзя, но его можно заметно снизить:

- отказаться от курения;
- ограничить алкоголь;
- регулярно посещать стоматолога;
- вовремя лечить заболевания полости рта;
- избегать хронических травм языка;
- обращаться к врачу, если язва или пятно держатся более двух недель.

## Когда нужно срочно к врачу?

Не откладывайте приём, если:

- язва во рту не заживает дольше 14 дней;
- появилось уплотнение на языке;
- возникла кровь без причины;
- стало больно глотать или говорить;
- увеличились шейные лимфоузлы.

Ранняя диагностика повышает эффективность лечения и шансы на полное выздоровление.

## Заключение

Плоскоклеточный рак языка — серьёзное заболевание, которое легче лечить на ранней стадии. Длительно незаживающая язва, уплотнение или необычное пятно — повод не для народного лечения, а для медицинского осмотра.

*Статья носит ознакомительный характер и не заменяет консультацию врача.*`;
}

function enBody(): string {
  return `## What is squamous cell carcinoma of the tongue?

Squamous cell carcinoma of the tongue is a malignant tumor that arises from the lining cells of the tongue. It is not among the most common cancers overall, yet it is dangerous because early stages may cause little pain. People sometimes mistake it for a simple mouth ulcer and wait too long.

The tongue surface is covered by flat (squamous) cells. When some of them divide without control, a tumor forms — that is the name. The growth most often appears on the sides of the tongue, less often on the tip or base.

Earlier care means a better chance of full recovery. Home remedies and “it will pass” thinking are especially risky here.

## Why does it develop?

There is no single inevitable cause, but risk rises with:

- smoking cigarettes, hookah, and other tobacco products;
- frequent alcohol use;
- long-standing trauma from sharp teeth, fillings, or dentures;
- poor oral hygiene;
- certain human papillomavirus (HPV) types;
- age over 45–50;
- prior precancerous changes of the oral mucosa.

Risk factors do not mean cancer is certain. They do mean lasting sores or patches in the mouth deserve closer attention.

## Early warning signs

Early disease can look like stomatitis or a common ulcer. Be alert to:

- a tongue ulcer lasting more than two weeks;
- a white or red patch;
- a firm lump or nodule;
- pain when speaking or eating;
- a foreign-body sensation;
- bleeding without a clear cause;
- bad breath;
- tongue numbness;
- enlarged neck lymph nodes.

Not every ulcer is cancer. But an ulcer that **does not heal** needs medical review.

## How may it look?

Early: a small ulcer, fissure, or firm white/red patch.

Later:

- a deeper ulcer with irregular edges;
- bleeding;
- tissue breakdown;
- difficulty speaking or eating.

Do not wait for severe pain — it may arrive late.

## How is it diagnosed?

The doctor examines the mouth and may order:

- magnified inspection (including dermoscopy or specialized exam);
- biopsy — the key confirmatory test;
- ultrasound of lymph nodes;
- CT or MRI to assess spread.

A final diagnosis is usually not made without biopsy.

## Treatment options

Care depends on tumor size and stage:

- surgical removal;
- radiation therapy;
- chemotherapy;
- targeted or immunotherapy in selected cases.

When found early, complete removal and good quality of life are more often achievable. An oncology team builds the plan.

## Can it be prevented?

Risk cannot be reduced to zero, but it can be lowered:

- quit smoking;
- limit alcohol;
- see a dentist regularly;
- treat oral disease promptly;
- avoid chronic tongue trauma;
- seek care if an ulcer or patch lasts more than two weeks.

## When to seek care urgently

Do not delay if:

- an oral ulcer lasts longer than 14 days;
- a firm area appears on the tongue;
- unexplained bleeding occurs;
- swallowing or speaking becomes painful;
- neck lymph nodes enlarge.

Earlier diagnosis improves treatment success and the chance of full recovery.

## Bottom line

Squamous cell carcinoma of the tongue is serious — and far more treatable early. A long-lasting ulcer, firm spot, or unusual patch is a reason for a medical exam, not for self-treatment.

*This article is for general information and does not replace a doctor’s consultation.*`;
}

export const TONGUE_SCC_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Tilning yassi hujayrali raki: erta belgilar, xavf omillari, biopsiya va zamonaviy davolash. Qachon yara “oddiy stomatit” emas — Radeski Skin Clinic qo‘llanmasi.',
    body: uzBody(),
    keyTakeaways: [
      'Erta bosqichda kuchli og‘riq bo‘lmasligi mumkin — kechiktirish xavfli',
      '2 haftadan ortiq bitmaydigan yara shifokor ko‘rigini talab qiladi',
      'Biopsiya — tashxisni tasdiqlashning asosiy usuli',
      'Erta aniqlash davolash samarasi va tuzalish ehtimolini oshiradi',
    ],
    tags: [
      'Til raki',
      'Yassi hujayrali rak',
      'Og‘iz onkologiyasi',
      'Til yarasi',
      'Biopsiya',
      'HPV',
      'Dermatoonkologiya',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Tildagi yara 14 kundan ortiq bitmasa',
      'Oq/qizil dog‘ yoki qattiqlik paydo bo‘lsa',
      'Sababsiz qon ketishi bo‘lsa',
      'Yutish yoki gapirish og‘risa',
      'Bo‘yin limfa tugunlari kattalashsa',
    ],
    faq: [
      {
        question: 'Har bir til yarasi rakmi?',
        answer:
          'Yo‘q. Ko‘p yaralar zararsiz. Lekin 2 haftadan ortiq bitmasa, shifokor ko‘rigi zarur — o‘z-o‘zini davolash bilan kutib bo‘lmaydi.',
      },
      {
        question: 'Tashxis qanday tasdiqlanadi?',
        answer:
          'Asosiy usul — biopsiya. Zarurat bo‘lsa UZI, KT yoki MRT ham qo‘shiladi.',
      },
      {
        question: 'Chekish to‘xtatilsa xavf kamayadimi?',
        answer:
          'Ha, tamaki va spirtni cheklash xavfni sezilarli pasaytiradi, lekin nolga tushirmaydi. Muntazam stomatolog nazorati ham muhim.',
      },
      {
        question: 'Erta bosqichda davolash mumkinmi?',
        answer:
          'Ko‘pincha ha. Erta aniqlanganda o‘smani to‘liq olib tashlash va yaxshi natija imkoniyati yuqoriroq.',
      },
    ],
  },
  ru: {
    summary:
      'Плоскоклеточный рак языка: первые симптомы, факторы риска, биопсия и современные методы лечения. Когда язва — повод к врачу, а не к самолечению.',
    body: ruBody(),
    keyTakeaways: [
      'На ранней стадии сильной боли может не быть — нельзя откладывать осмотр',
      'Язва дольше 2 недель требует консультации врача',
      'Биопсия — главный способ подтвердить диагноз',
      'Раннее выявление повышает шансы на полное выздоровление',
    ],
    tags: [
      'Рак языка',
      'Плоскоклеточный рак',
      'Онкология полости рта',
      'Язва языка',
      'Биопсия',
      'ВПЧ',
      'Дерматоонкология',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Язва на языке не заживает более 14 дней',
      'Появилось пятно или уплотнение',
      'Есть кровоточивость без причины',
      'Больно глотать или говорить',
      'Увеличились лимфоузлы на шее',
    ],
    faq: [
      {
        question: 'Каждая язва на языке — это рак?',
        answer:
          'Нет. Многие язвы доброкачественные. Но если она не заживает дольше двух недель, нужен осмотр врача.',
      },
      {
        question: 'Как подтверждают диагноз?',
        answer:
          'Основной метод — биопсия. При необходимости добавляют УЗИ, КТ или МРТ.',
      },
      {
        question: 'Помогает ли отказ от курения?',
        answer:
          'Да, отказ от табака и ограничение алкоголя заметно снижают риск, хотя полностью его не убирают. Важны и регулярные визиты к стоматологу.',
      },
      {
        question: 'Можно ли вылечить на ранней стадии?',
        answer:
          'Часто да. При раннем выявлении опухоль нередко удаётся полностью убрать с хорошим прогнозом.',
      },
    ],
  },
  en: {
    summary:
      'Squamous cell carcinoma of the tongue: early signs, risk factors, biopsy, and modern treatment — when a non-healing ulcer needs a doctor, not home care.',
    body: enBody(),
    keyTakeaways: [
      'Early disease may cause little pain — delay is dangerous',
      'An ulcer lasting over 2 weeks needs medical review',
      'Biopsy is the main way to confirm the diagnosis',
      'Earlier detection improves treatment success and recovery odds',
    ],
    tags: [
      'Tongue cancer',
      'Squamous cell carcinoma',
      'Oral oncology',
      'Tongue ulcer',
      'Biopsy',
      'HPV',
      'Dermato-oncology',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'A tongue ulcer lasts longer than 14 days',
      'A patch or firm lump appears',
      'There is unexplained bleeding',
      'Swallowing or speaking becomes painful',
      'Neck lymph nodes enlarge',
    ],
    faq: [
      {
        question: 'Is every tongue ulcer cancer?',
        answer:
          'No. Many ulcers are benign. But lasting more than two weeks means you should see a doctor.',
      },
      {
        question: 'How is the diagnosis confirmed?',
        answer:
          'Biopsy is the key test. Ultrasound, CT, or MRI may be added when needed.',
      },
      {
        question: 'Does quitting smoking help?',
        answer:
          'Yes — stopping tobacco and limiting alcohol meaningfully lower risk, though not to zero. Regular dental care also matters.',
      },
      {
        question: 'Can early-stage disease be cured?',
        answer:
          'Often yes. When found early, complete tumor removal and a favorable outlook are more achievable.',
      },
    ],
  },
};

export const TONGUE_SCC_ARTICLE: Article = {
  id: 'art-til-yassi-hujayrali-rak',
  slug: 'til-yassi-hujayrali-rak',
  title: {
    uz: 'Tilning yassi hujayrali raki: birinchi belgilar, sabablar va zamonaviy davolash',
    ru: 'Плоскоклеточный рак языка: первые симптомы, причины и современные методы лечения',
    en: 'Squamous Cell Carcinoma of the Tongue: Early Signs, Causes, and Modern Treatment',
  },
  summary: {
    uz: TONGUE_SCC_ARTICLE_CATALOG.uz.summary,
    ru: TONGUE_SCC_ARTICLE_CATALOG.ru.summary,
    en: TONGUE_SCC_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: TONGUE_SCC_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: TONGUE_SCC_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: TONGUE_SCC_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-08-07',
  image: null,
  images: {
    uz: null,
    ru: null,
    en: null,
  },
  views: 0,
};
