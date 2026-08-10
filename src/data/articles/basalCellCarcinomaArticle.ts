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
  return `## Bazalioma (bazal hujayrali teri raki) nima?

Bazal hujayrali teri raki — yoki kundalik tilda **bazalioma** — eng ko‘p uchraydigan teri raklaridan biri. U epidermisning eng pastki (bazal) qavati hujayralaridan boshlanadi.

Nomida “rak” bo‘lsa-da, bazalioma odatda sekin o‘sadi va boshqa a’zolarga juda kam metastaz beradi. Lekin bu uni “e’tiborsiz qoldirish mumkin” degani emas. Davolanmasa, o‘sma asta-sekin kattalashadi va atrofdagi to‘qimalarni shikastlashi mumkin. Shu bois shubhali hosila chiqsa — shifokorga ko‘rsatish muhim.

## Bazalioma qanday ko‘rinadi?

Boshlanishida kichik, deyarli sezilmaydigan hosila bo‘lishi mumkin. Shu sababli ba’zan moliya, toshmaga yoki oddiy yaraga o‘xshatiladi.

Eng tipik belgilar:

- yaltiroq yoki yarim tiniq “marvarid” papula;
- pushti, qizg‘ish yoki teri rangidagi hosila;
- uzoq bitmaydigan yara;
- vaqti-vaqti bilan tushib, yana paydo bo‘ladigan qobiqcha;
- yengil shikastlanishdan ham qon ketishi;
- zich teri maydoni;
- asta-sekin kattalashuv;
- ko‘tarilgan chetli yaracha.

Bazalioma ko‘pincha quyoshga ko‘p ochiq joylarda chiqadi: yuz, burun, quloq, qovoq, bo‘yin, bosh terisi va boshqa ochiq zonalar.

## Nima uchun paydo bo‘ladi?

Asosiy xavf omili — uzoq muddatli ultrabinafsha (UV) ta’siri.

Xavfni oshiradi:

- quyoshda uzoq turish;
- ayniqsa bolalikdagi quyosh kuyishi;
- solyariy;
- oson kuyadigan ochiq rang teri;
- yillar davomida to‘plangan quyosh yuklamasi;
- oldin bo‘lgan teri raki;
- immunitetni pastaytiradigan ayrim holatlar.

Shunday bo‘lsa-da, “men hech qachon kuymayman” degan odamda ham bazalioma paydo bo‘lishi mumkin.

## Bazalioma xavflimi?

Ko‘plab boshqa teri raklariga qaraganda o‘sishi sekinroq va metastaz ehtimoli past.

Lekin o‘sma **joyida** to‘qimalarni buzishi mumkin: teri, teri osti, xatto xaftaga yoki chuqurroq tuzilmalarga yetishi mumkin. Ko‘z, burun, quloq atrofida joylashsa — davolashni kechiktirish ayniqsa xavfli.

## Oddiy yara yoki moldan qanday farq qiladi?

Tashqi ko‘rinishga qarab o‘zingiz aniq tashxis qo‘ya olmaysiz.

Shubha uyg‘onsin, agar hosila:

- bir necha haftada bitmasa;
- doim qobiq bilan qoplanib tursa;
- vaqti-vaqti bilan qonatsa;
- kattalashsa;
- shakli yoki ko‘rinishi o‘zgarsa;
- “bitib” yana shu joyda qayta chiqsa.

Har bir shunday o‘zgarish rak emas — boshqa kasalliklar ham bo‘lishi mumkin. Yakuniy tashxisni shifokor qo‘yadi.

## Qanday tashxis qo‘yiladi?

Avval dermatolog yoki dermatoonkolog ko‘rigi o‘tkaziladi.

Keyin ko‘pincha **dermatoskopiya** — maxsus apparat bilan chuqurroq ko‘rish. Ko‘z bilan ko‘rinmaydigan tuzilmalar aniqlanadi.

Shubha bo‘lsa, **biopsiya** tavsiya etilishi mumkin: kichik to‘qima bo‘lagi laboratoriya orqali tekshiriladi. Ayni gistologik natija tashxisni tasdiqlaydi yoki rad etadi.

## Qanday davolanadi?

Yondashuv o‘sma o‘lchami, joylashuvi, turi, chuqurligi va boshqa omillarga bog‘liq:

- jarrohlik yo‘li bilan olib tashlash;
- chegara nazorati bilan maxsus olib tashlash usullari;
- ayrim sirtiy shakllarda mahalliy dori terapiyasi;
- mos holatlarda fotodinamik terapiya;
- nurlanish terapiyasi;
- juda kam hollarda — tizimli davolash.

Usul tashxis tasdiqlangach individual tanlanadi. Qancha erta aniqlansa, davolash odatda shuncha osonroq va sog‘lom to‘qimalarni saqlash imkoniyati yuqoriroq.

## Oldini olish mumkinmi?

Xavfni nolga tushirish mumkin emas, lekin kamaytirish mumkin:

- yuqori SPF kremdan foydalanish;
- quyoshda uzoq turganda himoyani yangilash;
- bosh kiyim va yopqichli kiyim;
- to‘g‘ridan-to‘g‘ri quyoshdan uzoq turish;
- solyariydan voz kechish;
- terini o‘zingiz muntazam ko‘zdan kechirish;
- shubhali hosilada dermatologga murojaat.

## Qachon shifokorga borish kerak?

Yangi yara, tuguncha yoki dog‘ bitmasa, o‘ssa, qonatsa yoki doim qobiqlansa — dermatologga boring. Yuz va ochiq joylarga alohida e’tibor bering.

## Asosiy xulosa

Bazalioma ko‘pincha o‘z vaqtida topilsa yaxshi davolanadi. Hosilani “kattalashib qolsin” yoki “og‘risin” deb kutib o‘tirmang. Uzoq turgan yoki o‘zgarayotgan har qanday hosilani shifokorga ko‘rsatish — eng to‘g‘ri qadam.

*Ushbu maqola umumiy ma’lumot uchun. Yakuniy tashxis va davolashni faqat shifokor belgilaydi.*`;
}

function ruBody(): string {
  return `## Что такое базальноклеточный рак кожи (базалиома)?

Базальноклеточный рак кожи — или **базалиома** — один из самых распространённых видов рака кожи. Он развивается из клеток базального слоя эпидермиса — самого нижнего слоя кожи.

Несмотря на слово «рак», базалиома обычно растёт медленно и крайне редко даёт метастазы. Это не повод её игнорировать: без лечения опухоль постепенно увеличивается и может повреждать окружающие ткани. Поэтому подозрительное образование на коже лучше показать врачу.

## Как выглядит базалиома?

В начале это может быть небольшое, почти незаметное образование. Его иногда путают с родинкой, прыщом или обычной ранкой.

Характерные признаки:

- небольшая блестящая или полупрозрачная «жемчужная» папула;
- розовое, красноватое или телесное образование;
- долго незаживающая ранка;
- корочка, которая отпадает и появляется снова;
- кровоточивость даже после лёгкой травмы;
- плотный участок кожи;
- постепенное увеличение;
- язвочка с приподнятыми краями.

Чаще всего базалиома возникает на участках, которые регулярно бывают на солнце: лицо, нос, уши, веки, шея, волосистая часть головы и другие открытые зоны.

## Почему возникает базалиома?

Главный фактор риска — длительное воздействие ультрафиолета.

Риск повышают:

- частое пребывание на солнце;
- солнечные ожоги, особенно в детстве;
- регулярные посещения солярия;
- светлая кожа, легко обгорающая;
- многолетняя солнечная нагрузка;
- ранее перенесённый рак кожи;
- состояния со сниженным иммунитетом.

При этом базалиома может появиться и у человека, который не считает себя любителем загара.

## Насколько она опасна?

По сравнению со многими другими видами рака кожи базалиома растёт относительно медленно, а вероятность метастазирования низкая.

Но она может разрушать ткани **на месте**: кожу, подкожную клетчатку, хрящ и даже более глубокие структуры. Особенно не стоит откладывать лечение, если очаг рядом с глазом, носом, ухом или в другой сложной анатомической зоне.

## Как отличить от обычной ранки или родинки?

Самостоятельно по внешнему виду поставить диагноз нельзя.

Подозрение уместно, если образование:

- не заживает несколько недель;
- постоянно покрывается корочкой;
- периодически кровоточит;
- растёт;
- меняет форму или вид;
- «заживает» и снова появляется на том же месте.

Не каждое такое изменение — рак. Похожие признаки бывают и при других заболеваниях. Окончательный диагноз ставит врач.

## Как диагностируют?

Первый этап — осмотр дерматолога или дерматоонколога.

Затем часто используют **дерматоскопию** — осмотр специальным прибором, чтобы увидеть структуры, неразличимые невооружённым глазом.

При подозрении рекомендуют **биопсию**: небольшой фрагмент ткани исследуют в лаборатории. Гистология подтверждает или исключает диагноз.

## Как лечат?

Метод зависит от размера, расположения, типа опухоли, глубины и других факторов:

- хирургическое удаление;
- специальные методы с контролем краёв;
- местная лекарственная терапия при части поверхностных форм;
- фотодинамическая терапия в подходящих случаях;
- лучевая терапия;
- системное лечение при редких запущенных формах.

Выбор индивидуален после осмотра и подтверждения диагноза. Чем раньше обнаружена базалиома, тем проще обычно лечение и тем больше шансов сохранить здоровые ткани вокруг.

## Можно ли предотвратить?

Полностью риск исключить нельзя, но его можно снизить:

- используйте крем с высоким SPF;
- обновляйте защиту при долгом пребывании на солнце;
- носите головной убор и закрытую одежду;
- избегайте длительного прямого солнца;
- не посещайте солярии;
- регулярно осматривайте кожу сами;
- при подозрительном образовании обращайтесь к дерматологу.

## Когда идти к врачу?

Новая ранка, узелок или пятно не заживает, растёт, кровоточит или постоянно покрывается корочкой — покажитесь дерматологу. Особое внимание — к лицу и другим открытым зонам.

## Главное

Базальноклеточный рак в большинстве случаев хорошо поддаётся лечению при своевременном обращении. Не ждите, пока образование станет большим или начнёт болеть. Любое длительно существующее или меняющееся образование лучше показать врачу.

*Статья носит ознакомительный характер и не заменяет консультацию врача.*`;
}

function enBody(): string {
  return `## What is basal cell carcinoma (basalioma)?

Basal cell carcinoma — often called **basalioma** — is one of the most common skin cancers. It starts in cells of the basal layer of the epidermis, the deepest part of the outer skin.

Despite the word “cancer,” basalioma usually grows slowly and very rarely spreads to distant organs. That does not mean it is safe to ignore. Without care, the growth enlarges over time and can damage nearby tissues. Any suspicious skin spot should be checked by a doctor.

## How does it look?

Early on it may be small and easy to miss — sometimes mistaken for a mole, pimple, or simple sore.

Typical clues include:

- a shiny or translucent “pearly” papule;
- a pink, reddish, or skin-colored lesion;
- a sore that will not heal;
- a crust that falls off and returns;
- bleeding after even mild trauma;
- a firm patch of skin;
- gradual enlargement;
- an ulcer with raised edges.

It most often appears on sun-exposed areas: face, nose, ears, eyelids, neck, scalp, and other open skin.

## Why does it develop?

The main risk factor is long-term ultraviolet (UV) exposure.

Risk rises with:

- frequent sun time;
- sunburns, especially in childhood;
- regular tanning beds;
- fair skin that burns easily;
- years of cumulative sun load;
- a prior skin cancer;
- some immune-weakening conditions.

Still, basalioma can appear even in people who do not think of themselves as “sun lovers.”

## How dangerous is it?

Compared with many other skin cancers, basalioma grows more slowly and has a low chance of metastasis.

But it can destroy tissue **locally** — skin, fat, cartilage, and sometimes deeper structures. Delay is especially risky near the eye, nose, ear, or other complex anatomy.

## How to tell it from a simple sore or mole?

You cannot confirm the diagnosis by look alone.

Be concerned if a lesion:

- does not heal for weeks;
- keeps forming a crust;
- bleeds now and then;
- enlarges;
- changes shape or appearance;
- seems to heal, then returns in the same place.

Not every such change is cancer — other conditions can look similar. A doctor makes the final call.

## How is it diagnosed?

First comes an exam by a dermatologist or dermato-oncologist.

**Dermoscopy** often follows — magnified inspection that reveals structures invisible to the naked eye.

If needed, a **biopsy** is advised: a small tissue sample is studied in the lab. Histology confirms or rules out basal cell carcinoma.

## How is it treated?

The method depends on size, location, subtype, depth, and other factors:

- surgical removal;
- margin-controlled excision techniques;
- topical medicines for some superficial forms;
- photodynamic therapy in suitable cases;
- radiation therapy;
- systemic treatment for rare advanced forms.

The plan is individual after exam and confirmation. Earlier detection usually means simpler treatment and better preservation of healthy tissue.

## Can it be prevented?

Risk cannot be reduced to zero, but it can be lowered:

- use high-SPF sunscreen;
- reapply during long sun exposure;
- wear a hat and protective clothing;
- limit direct midday sun;
- avoid tanning beds;
- check your skin regularly;
- see a dermatologist for suspicious spots.

## When to see a doctor

See a dermatologist if a new sore, nodule, or patch does not heal, grows, bleeds, or keeps crusting — especially on the face and other sun-exposed areas.

## Bottom line

Basal cell carcinoma is usually very treatable when found early. Do not wait for a lesion to become large or painful. Any long-lasting or changing spot is worth a medical review.

*This article is for general information and does not replace a doctor’s consultation.*`;
}

export const BASAL_CELL_CARCINOMA_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Bazalioma (bazal hujayrali teri raki): qanday ko‘rinadi, nima uchun chiqadi, qachon shifokorga borish kerak va qanday davolanadi — Radeski Skin Clinic qo‘llanmasi.',
    body: uzBody(),
    keyTakeaways: [
      'Bazalioma odatda sekin o‘sadi, lekin e’tiborsiz qoldirilmasligi kerak',
      'Uzoq bitmaydigan yara, “marvarid” papula yoki qayta qobiqlanish — shubha belgisi',
      'Tashxis dermatoskopiya va zarurat bo‘lsa biopsiya bilan qo‘yiladi',
      'Erta topilsa davolash odatda osonroq va atrof to‘qimalar yaxshiroq saqlanadi',
    ],
    tags: [
      'Bazalioma',
      'Bazal hujayrali rak',
      'Teri raki',
      'Dermatoskopiya',
      'Biopsiya',
      'Quyosh himoyasi',
      'Dermatoonkologiya',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Bir necha haftada bitmaydigan yara yoki qobiq bo‘lsa',
      'Yaltiroq “marvarid” tuguncha yoki o‘sib boruvchi dog‘ chiqsa',
      'Hosila qonatsa yoki shakli o‘zgarsa',
      'Yuz, burun, quloq yoki qovoq atrofida yangi hosila paydo bo‘lsa',
      'Oldin teri raki bo‘lgan bo‘lsangiz va yangi o‘zgarish ko‘rsangiz',
    ],
    faq: [
      {
        question: 'Bazalioma metastaz beradimi?',
        answer:
          'Juda kam. Lekin joyida to‘qimalarni buzishi mumkin — shuning uchun davolashni kechiktirish to‘g‘ri emas.',
      },
      {
        question: 'O‘zim tashxis qo‘ya olamanmi?',
        answer:
          'Yo‘q. Tashqi ko‘rinish aldovchi bo‘lishi mumkin. Aniq javob uchun dermatolog ko‘rigi va zarurat bo‘lsa biopsiya kerak.',
      },
      {
        question: 'Quyoshdan himoya yordam beradimi?',
        answer:
          'Ha. SPF, kiyim va solyariydan voz kechish xavfni sezilarli pasaytiradi, lekin nolga tushirmaydi.',
      },
      {
        question: 'Davolash og‘irmi?',
        answer:
          'Usul hosilaga bog‘liq. Erta bosqichda ko‘pincha mahalliy olib tashlash yetarli bo‘ladi; shifokor eng mos variantni tanlaydi.',
      },
    ],
  },
  ru: {
    summary:
      'Базальноклеточный рак кожи (базалиома): как выглядит, почему возникает, когда идти к врачу и как лечат — практический гид Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'Базалиома обычно растёт медленно, но её нельзя игнорировать',
      'Долго незаживающая ранка, «жемчужная» папула или повторная корочка — повод к осмотру',
      'Диагноз ставят после осмотра, дерматоскопии и при необходимости биопсии',
      'Чем раньше выявлена, тем проще лечение и сохраннее окружающие ткани',
    ],
    tags: [
      'Базалиома',
      'Базальноклеточный рак',
      'Рак кожи',
      'Дерматоскопия',
      'Биопсия',
      'Защита от солнца',
      'Дерматоонкология',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Ранка или корочка не проходит несколько недель',
      'Появилась блестящая «жемчужная» папула или растущее пятно',
      'Образование кровоточит или меняет вид',
      'Новый очаг на лице, носу, ухе или около века',
      'Был рак кожи в прошлом и появилось новое изменение',
    ],
    faq: [
      {
        question: 'Даёт ли базалиома метастазы?',
        answer:
          'Очень редко. Но она может разрушать ткани на месте, поэтому лечение лучше не откладывать.',
      },
      {
        question: 'Можно ли поставить диагноз самому?',
        answer:
          'Нет. Внешний вид обманчив. Нужен осмотр дерматолога и при необходимости биопсия.',
      },
      {
        question: 'Помогает ли защита от солнца?',
        answer:
          'Да. SPF, одежда и отказ от солярия заметно снижают риск, хотя полностью его не убирают.',
      },
      {
        question: 'Болезненно ли лечение?',
        answer:
          'Зависит от метода. На ранней стадии часто достаточно локального удаления; врач выбирает подходящий вариант.',
      },
    ],
  },
  en: {
    summary:
      'Basal cell carcinoma (basalioma): how it looks, why it develops, when to see a doctor, and how it is treated — a practical guide from Radeski Skin Clinic.',
    body: enBody(),
    keyTakeaways: [
      'Basalioma usually grows slowly, but should not be ignored',
      'A non-healing sore, pearly papule, or recurring crust needs review',
      'Diagnosis uses exam, dermoscopy, and biopsy when needed',
      'Earlier detection means simpler treatment and better tissue sparing',
    ],
    tags: [
      'Basalioma',
      'Basal cell carcinoma',
      'Skin cancer',
      'Dermoscopy',
      'Biopsy',
      'Sun protection',
      'Dermato-oncology',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'A sore or crust lasts several weeks',
      'A shiny pearly bump or growing patch appears',
      'The lesion bleeds or changes appearance',
      'A new spot appears on the face, nose, ear, or eyelid area',
      'You had skin cancer before and notice a new change',
    ],
    faq: [
      {
        question: 'Does basalioma metastasize?',
        answer:
          'Very rarely. It can still destroy tissue locally, so delayed care is unsafe.',
      },
      {
        question: 'Can I diagnose it myself?',
        answer:
          'No. Looks can mislead. You need a dermatologist exam and biopsy when indicated.',
      },
      {
        question: 'Does sun protection help?',
        answer:
          'Yes. SPF, clothing, and avoiding tanning beds meaningfully lower risk, though not to zero.',
      },
      {
        question: 'Is treatment painful?',
        answer:
          'It depends on the method. Early cases often need only local removal; your doctor chooses the best option.',
      },
    ],
  },
};

export const BASAL_CELL_CARCINOMA_ARTICLE: Article = {
  id: 'art-bazalioma-teri-raki',
  slug: 'bazalioma-teri-raki',
  title: {
    uz: 'Bazal hujayrali teri raki (bazalioma): belgilar, sabablar va davolash',
    ru: 'Базальноклеточный рак кожи: симптомы, причины и лечение',
    en: 'Basal Cell Carcinoma (Basalioma): Symptoms, Causes, and Treatment',
  },
  summary: {
    uz: BASAL_CELL_CARCINOMA_ARTICLE_CATALOG.uz.summary,
    ru: BASAL_CELL_CARCINOMA_ARTICLE_CATALOG.ru.summary,
    en: BASAL_CELL_CARCINOMA_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: BASAL_CELL_CARCINOMA_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: BASAL_CELL_CARCINOMA_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: BASAL_CELL_CARCINOMA_ARTICLE_CATALOG.en.body.slice(0, 500),
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
