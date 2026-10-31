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
 * Moles and dermoscopy — the article behind the "mole check" city pages (/fargona/xol-tekshiruvi,
 * /qoqon/xol-tekshiruvi) and the dermato-oncology service: ABCDE warning signs, what dermoscopy
 * and mole mapping show, when a mole is removed and why the tissue goes to histology.
 */

function uzBody(): string {
  return `Xol (nevus) — teridagi pigment hujayralarning to'plami. Deyarli har bir odamda bir nechta xol bo'ladi va ularning aksariyati butun umr bezararligicha qoladi. Lekin teri saratonining eng xavfli turi — melanoma ko'pincha xolga o'xshab boshlanadi yoki mavjud xolda paydo bo'ladi. Shuning uchun xolni vaqtida tekshirish — oddiy, og'riqsiz va hayotni saqlab qoladigan qadam.

## Xolni qachon tekshirish kerak: ABCDE qoidasi

Xolga uyda qarab, quyidagi belgilarga e'tibor bering:

- **A — asimmetriya**: xolning ikki yarmi bir-biriga o'xshamaydi;
- **B — chegara**: chetlari notekis, yirtiq yoki xiralashgan;
- **C — rang**: bir xolda bir nechta rang — jigarrang, qora, qizil, oq yoki ko'kish;
- **D — diametr**: 6 mm dan katta (qalam o'chirg'ichidan katta);
- **E — o'zgarish**: xolning hajmi, shakli, rangi yoki balandligi o'zgaryapti.

Shuningdek, xol qichisa, qonasa, yara bo'lsa yoki boshqa xollardan keskin farq qilsa ("xunuk o'rdakcha" belgisi) — dermatologga ko'rining.

## Kimlar xollarini muntazam tekshirishi kerak?

- 50 tadan ko'p xoli bor odamlar;
- oq teri, sariq yoki malla soch, quyoshda tez kuyadiganlar;
- bolalikda bir necha marta quyoshda qattiq kuyganlar;
- oilasida melanoma bo'lganlar;
- yirik (tug'ma) yoki notekis xollari borlar;
- solyariy va uzoq vaqt quyoshda ishlaydiganlar.

## Dermatoskopiya nima?

Dermatoskopiya — xolni maxsus kattalashtiruvchi asbob (dermatoskop) bilan ko'rish. Shifokor xolning ichki tuzilishi, rang taqsimoti va tomirlarini ko'radi — oddiy ko'z bilan ko'rinmaydigan belgilarni. Muolaja og'riqsiz, bir necha daqiqa davom etadi va hech qanday tayyorgarlik talab qilmaydi.

Ko'p xoli bor odamlarga **xollar xaritasi** (raqamli dermatoskopiya) tavsiya qilinadi: xollar suratga olinib, keyingi tekshiruvda solishtiriladi. Shunda kichik o'zgarishlar ham erta seziladi. Klinikada bu tekshiruv [FotoFinder tizimi](/uz/articles/art-photofinder-diagnostika-radeski) bilan o'tkaziladi.

## Xol qachon olib tashlanadi?

Har bir xolni olib tashlash shart emas. Shifokor olib tashlashni tavsiya qiladi, agar:

- dermatoskopiyada shubhali belgilar bo'lsa;
- xol o'zgarayotgan bo'lsa;
- xol doim kiyim, kamar yoki soqol olishda shikastlansa;
- bemor uni kosmetik sabab bilan olib tashlamoqchi bo'lsa.

Olib tashlangan to'qima **gistologik tekshiruvga** yuboriladi — bu xolning tabiatini aniq ko'rsatadigan yagona usul. Shubhali xolni gistologiyasiz "kuydirib" yo'qotish mumkin emas: tashxis yo'qoladi.

## Xollarni qanday himoya qilish kerak?

- Soat 11:00 dan 16:00 gacha quyoshda uzoq qolmang.
- SPF 30–50 li quyoshdan himoya kremini har 2 soatda yangilang.
- Bolalarni quyoshda kuyishdan ayniqsa ehtiyot qiling.
- Solyariydan voz keching.
- Oyda bir marta terini, jumladan bosh terisi, kaft, tovon va tirnoqlar ostini ko'zdan kechiring.
- Xollarni o'zingiz kesmang, kuydirmang va ip bilan bog'lamang.

## Farg'ona va Qo'qonda xol tekshiruvi

Radeski Skin Clinic'da [dermatoonkolog](/uz/services/dermatoonkologiya) xollarni dermatoskop bilan tekshiradi, kerak bo'lsa xollar xaritasini tuzadi, shubhali xolni olib tashlaydi va [gistologik tekshiruvga](/uz/services/dermatoonkologiya/teri-biopsiyasi-va-gistologiya) yuboradi.

- [Xol tekshiruvi Farg'onada](/uz/fargona/xol-tekshiruvi);
- [Xol tekshiruvi Qo'qonda](/uz/qoqon/xol-tekshiruvi);
- [Dermatoskopiya Farg'onada](/uz/fargona/dermatoskopiya) va [Qo'qonda](/uz/qoqon/dermatoskopiya);
- batafsil: [Bazalioma — teri saratoni](/uz/articles/art-bazalioma-teri-raki).

Melanoma erta bosqichda aniqlansa, ko'p hollarda to'liq davolanadi. Yiliga bir marta xollarni tekshirtirish — buning eng oson yo'li.`;
}

function ruBody(): string {
  return `Родинка (невус) — скопление пигментных клеток в коже. Почти у каждого человека есть несколько родинок, и большинство из них всю жизнь остаются безопасными. Но самый опасный вид рака кожи — меланома — часто начинается как родинка или появляется на уже существующей. Поэтому вовремя проверить родинку — простой, безболезненный и спасающий жизнь шаг.

## Когда проверить родинку: правило ABCDE

Осматривая родинки дома, обращайте внимание на:

- **A — асимметрию**: половины родинки не похожи друг на друга;
- **B — границы**: края неровные, рваные или размытые;
- **C — цвет**: несколько цветов в одной родинке — коричневый, чёрный, красный, белый или синеватый;
- **D — диаметр**: больше 6 мм (больше ластика на карандаше);
- **E — эволюцию**: родинка меняет размер, форму, цвет или высоту.

Также покажитесь дерматологу, если родинка чешется, кровоточит, изъязвилась или резко отличается от остальных (признак «гадкого утёнка»).

## Кому нужно регулярно проверять родинки?

- людям, у которых больше 50 родинок;
- со светлой кожей, светлыми или рыжими волосами, кто быстро обгорает;
- тем, кто в детстве несколько раз сильно обгорал на солнце;
- если в семье были случаи меланомы;
- при крупных (врождённых) или неровных родинках;
- тем, кто ходит в солярий или много работает на солнце.

## Что такое дерматоскопия?

Дерматоскопия — осмотр родинки специальным увеличительным прибором (дерматоскопом). Врач видит внутреннюю структуру родинки, распределение пигмента и сосуды — признаки, которые не видны глазом. Процедура безболезненная, занимает несколько минут и не требует подготовки.

Людям с большим количеством родинок рекомендуют **картирование родинок** (цифровую дерматоскопию): родинки фотографируют и сравнивают при следующем осмотре. Так даже небольшие изменения замечают рано. В клинике это обследование проводится на [системе FotoFinder](/ru/articles/art-photofinder-diagnostika-radeski).

## Когда родинку удаляют?

Удалять каждую родинку не нужно. Врач рекомендует удаление, если:

- при дерматоскопии есть подозрительные признаки;
- родинка меняется;
- родинку постоянно травмирует одежда, ремень или бритьё;
- пациент хочет удалить её по косметическим причинам.

Удалённую ткань отправляют на **гистологическое исследование** — это единственный способ точно узнать природу родинки. Подозрительную родинку нельзя «прижигать» без гистологии: диагноз будет потерян.

## Как защитить родинки?

- Не находитесь долго на солнце с 11:00 до 16:00.
- Обновляйте солнцезащитный крем SPF 30–50 каждые 2 часа.
- Особенно берегите от солнечных ожогов детей.
- Откажитесь от солярия.
- Раз в месяц осматривайте кожу, включая волосистую часть головы, ладони, стопы и кожу под ногтями.
- Не срезайте, не прижигайте и не перевязывайте родинки самостоятельно.

## Проверка родинок в Фергане и Коканде

В Radeski Skin Clinic [дерматоонколог](/ru/services/dermatoonkologiya) осмотрит родинки дерматоскопом, при необходимости составит карту родинок, удалит подозрительную родинку и отправит её на [гистологическое исследование](/ru/services/dermatoonkologiya/teri-biopsiyasi-va-gistologiya).

- [Проверка родинок в Фергане](/ru/fargona/xol-tekshiruvi);
- [Проверка родинок в Коканде](/ru/qoqon/xol-tekshiruvi);
- [Дерматоскопия в Фергане](/ru/fargona/dermatoskopiya) и [в Коканде](/ru/qoqon/dermatoskopiya);
- подробнее: [Базалиома — рак кожи](/ru/articles/art-bazalioma-teri-raki).

Меланома, найденная на ранней стадии, в большинстве случаев излечима. Проверять родинки раз в год — самый простой способ этого добиться.`;
}

function enBody(): string {
  return `A mole (naevus) is a cluster of pigment cells in the skin. Almost everyone has a few moles, and most stay harmless for life. But melanoma, the most dangerous skin cancer, often starts as a mole or appears in an existing one. That is why having a mole checked in time is a simple, painless and potentially life-saving step.

## When to check a mole: the ABCDE rule

When looking at your moles at home, watch for:

- **A — asymmetry**: the two halves do not match;
- **B — border**: ragged, notched or blurred edges;
- **C — colour**: several colours in one mole — brown, black, red, white or bluish;
- **D — diameter**: larger than 6 mm (bigger than a pencil eraser);
- **E — evolution**: the mole changes in size, shape, colour or height.

Also see a dermatologist if a mole itches, bleeds, ulcerates or looks very different from your other moles (the "ugly duckling" sign).

## Who should have their moles checked regularly?

- people with more than 50 moles;
- people with fair skin, blond or red hair, who burn easily;
- anyone who had several bad sunburns in childhood;
- people with a family history of melanoma;
- people with large (congenital) or irregular moles;
- sunbed users and people who work outdoors.

## What is dermoscopy?

Dermoscopy is examining a mole with a special magnifying instrument (a dermatoscope). The doctor sees the mole's inner structure, pigment pattern and blood vessels — features invisible to the naked eye. It is painless, takes a few minutes and needs no preparation.

People with many moles are advised to have **mole mapping** (digital dermoscopy): the moles are photographed and compared at the next visit, so even small changes are caught early. At the clinic this is done with the [FotoFinder system](/en/articles/art-photofinder-diagnostika-radeski).

## When is a mole removed?

Not every mole needs removing. The doctor recommends removal if:

- dermoscopy shows suspicious features;
- the mole is changing;
- clothing, a belt or shaving keeps injuring it;
- the patient wants it removed for cosmetic reasons.

The removed tissue is sent for **histology** — the only way to know exactly what the mole is. A suspicious mole must never be burned off without histology: the diagnosis would be lost.

## How to protect your moles

- Avoid long sun exposure between 11:00 and 16:00.
- Reapply SPF 30–50 sunscreen every 2 hours.
- Take special care to keep children from getting sunburnt.
- Avoid sunbeds.
- Check your skin once a month, including the scalp, palms, soles and under the nails.
- Never cut, burn or tie off moles yourself.

## Mole checks in Fergana and Kokand

At Radeski Skin Clinic a [dermato-oncologist](/en/services/dermatoonkologiya) examines moles with a dermatoscope, maps them when needed, removes a suspicious mole and sends it for [histology](/en/services/dermatoonkologiya/teri-biopsiyasi-va-gistologiya).

- [Mole check in Fergana](/en/fargona/xol-tekshiruvi);
- [Mole check in Kokand](/en/qoqon/xol-tekshiruvi);
- [Dermoscopy in Fergana](/en/fargona/dermatoskopiya) and [in Kokand](/en/qoqon/dermatoskopiya);
- in depth: [Basal cell carcinoma — skin cancer](/en/articles/art-bazalioma-teri-raki).

Melanoma found at an early stage can usually be cured. A yearly mole check is the easiest way to make sure it is found early.`;
}

export const MOLE_CHECK_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Xolni qachon tekshirish kerak: ABCDE qoidasi, xavf guruhlari, dermatoskopiya va xollar xaritasi, xolni olib tashlash va gistologiya. Farg'ona va Qo'qonda dermatoonkolog.",
    body: uzBody(),
    keyTakeaways: [
      "Ko'pchilik xollar bezarar, lekin melanoma ko'pincha xolga o'xshab boshlanadi",
      "ABCDE: asimmetriya, notekis chegara, bir necha rang, 6 mm dan katta, o'zgarish",
      "Dermatoskopiya og'riqsiz va bir necha daqiqa davom etadi",
      "Ko'p xoli borlarga xollar xaritasi — o'zgarishlarni erta ko'rish uchun",
      "Olib tashlangan xol albatta gistologik tekshiruvga yuboriladi",
    ],
    tags: ['Xol', 'Dermatoskopiya', 'Melanoma', 'Xol olib tashlash', 'Dermatoonkolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Xol hajmi, shakli yoki rangi o'zgarsa",
      'Xol qichisa, qonasa yoki yara bo\'lsa',
      "Xolning chetlari notekis yoki bir necha rangli bo'lsa",
      "Kattalikda yangi xol paydo bo'lsa",
      "Oilada melanoma bo'lgan bo'lsa — yiliga bir marta",
    ],
    faq: [
      {
        question: "Xolni olib tashlash xavflimi?",
        answer:
          "Shifokor tomonidan to'g'ri olib tashlangan xol xavfli emas. Xavf — shubhali xolni tekshiruvsiz kuydirish yoki o'zboshimchalik bilan kesish: bunda tashxis yo'qoladi va jarohat infeksiyalanishi mumkin.",
      },
      {
        question: 'Dermatoskopiya og\'riqlimi?',
        answer:
          "Yo'q. Shifokor dermatoskopni teriga tekkizib yoki yaqin tutib qaraydi. Muolaja og'riqsiz, xavfsiz, bir necha daqiqa davom etadi va tayyorgarlik talab qilmaydi.",
      },
      {
        question: 'Xollarni qanchada bir tekshirish kerak?',
        answer:
          "Xavf guruhidagilarga — yiliga bir marta yoki shifokor aytgan muddatda. Qolganlar oyda bir marta terini o'zlari ko'zdan kechirishi va o'zgarish sezilsa dermatologga borishi kifoya.",
      },
      {
        question: "Xol qichisa, bu saraton belgisimi?",
        answer:
          "Har doim emas — xol kiyimdan ishqalanib ham qichishi mumkin. Lekin qichishish, qonash yoki o'zgarish dermatoskopiya o'tkazish uchun sabab: shifokor xavfli belgilarni istisno qiladi.",
      },
      {
        question: "Farg'ona va Qo'qonda xollarni qayerda tekshirish mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatoonkolog xollarni dermatoskop bilan tekshiradi, kerak bo'lsa xollar xaritasini tuzadi va shubhali xolni gistologiya bilan olib tashlaydi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Когда проверять родинку: правило ABCDE, группы риска, дерматоскопия и картирование родинок, удаление и гистология. Дерматоонколог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Большинство родинок безопасны, но меланома часто начинается как родинка',
      'ABCDE: асимметрия, неровные края, несколько цветов, больше 6 мм, изменения',
      'Дерматоскопия безболезненна и занимает несколько минут',
      'При множестве родинок — картирование, чтобы заметить изменения рано',
      'Удалённую родинку обязательно отправляют на гистологию',
    ],
    tags: ['Родинки', 'Дерматоскопия', 'Меланома', 'Удаление родинок', 'Дерматоонколог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Родинка меняет размер, форму или цвет',
      'Родинка чешется, кровоточит или изъязвилась',
      'Края родинки неровные или в ней несколько цветов',
      'Во взрослом возрасте появилась новая родинка',
      'В семье была меланома — раз в год',
    ],
    faq: [
      {
        question: 'Опасно ли удалять родинку?',
        answer:
          'Родинка, правильно удалённая врачом, не опасна. Опасно прижигать подозрительную родинку без обследования или срезать её самостоятельно: диагноз теряется, а рана может инфицироваться.',
      },
      {
        question: 'Больно ли делать дерматоскопию?',
        answer:
          'Нет. Врач прикладывает дерматоскоп к коже или держит его рядом. Процедура безболезненная, безопасная, длится несколько минут и не требует подготовки.',
      },
      {
        question: 'Как часто проверять родинки?',
        answer:
          'Людям из группы риска — раз в год или в срок, который назначит врач. Остальным достаточно раз в месяц осматривать кожу самостоятельно и при изменениях идти к дерматологу.',
      },
      {
        question: 'Если родинка чешется — это рак?',
        answer:
          'Не всегда — родинка может чесаться и от трения одеждой. Но зуд, кровоточивость или изменения — повод сделать дерматоскопию: врач исключит опасные признаки.',
      },
      {
        question: 'Где проверить родинки в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматоонколог осмотрит родинки дерматоскопом, при необходимости составит карту родинок и удалит подозрительную с гистологией. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'When to check a mole: the ABCDE rule, risk groups, dermoscopy and mole mapping, removal and histology. Dermato-oncologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Most moles are harmless, but melanoma often starts as a mole',
      'ABCDE: asymmetry, irregular border, several colours, over 6 mm, evolving',
      'Dermoscopy is painless and takes a few minutes',
      'With many moles, mole mapping catches changes early',
      'A removed mole is always sent for histology',
    ],
    tags: ['Moles', 'Dermoscopy', 'Melanoma', 'Mole removal', 'Dermato-oncologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A mole changes in size, shape or colour',
      'A mole itches, bleeds or ulcerates',
      'A mole has irregular edges or several colours',
      'A new mole appears in adulthood',
      'Melanoma runs in the family — once a year',
    ],
    faq: [
      {
        question: 'Is mole removal dangerous?',
        answer:
          'A mole removed properly by a doctor is not dangerous. What is risky is burning off a suspicious mole without examination or cutting it yourself: the diagnosis is lost and the wound can become infected.',
      },
      {
        question: 'Does dermoscopy hurt?',
        answer:
          'No. The doctor places the dermatoscope on or near the skin. It is painless, safe, takes a few minutes and needs no preparation.',
      },
      {
        question: 'How often should moles be checked?',
        answer:
          'People at risk — once a year or as often as the doctor advises. Everyone else can check their skin monthly and see a dermatologist if anything changes.',
      },
      {
        question: 'Is an itchy mole a sign of cancer?',
        answer:
          'Not always — a mole can itch from rubbing clothes. But itching, bleeding or change is a reason for dermoscopy, so the doctor can rule out warning signs.',
      },
      {
        question: 'Where can I have my moles checked in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermato-oncologist examines moles with a dermatoscope, maps them when needed and removes suspicious ones with histology. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const MOLE_CHECK_ARTICLE: Article = {
  id: 'art-xol-tekshiruvi-dermatoskopiya',
  slug: 'xol-tekshiruvi-dermatoskopiya',
  title: {
    uz: "Xollar va dermatoskopiya: qaysi xol xavfli — ABCDE qoidasi va tekshiruv",
    ru: 'Родинки и дерматоскопия: какая родинка опасна — правило ABCDE и проверка',
    en: 'Moles and Dermoscopy: Which Mole Is Dangerous — the ABCDE Rule and Check-ups',
  },
  summary: {
    uz: MOLE_CHECK_ARTICLE_CATALOG.uz.summary,
    ru: MOLE_CHECK_ARTICLE_CATALOG.ru.summary,
    en: MOLE_CHECK_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: MOLE_CHECK_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: MOLE_CHECK_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: MOLE_CHECK_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: "Yo'qubov Farrux Farhodjonovich",
    ru: 'Якубов Фаррух Фарходжонович',
    en: 'Dr. Farrukh Farhodjonovich Yoqubov',
  },
  date: '2026-11-01',
  image: '/articles/xol-tekshiruvi-cover.jpg',
  images: {
    uz: '/articles/xol-tekshiruvi-cover.jpg',
    ru: '/articles/xol-tekshiruvi-cover.jpg',
    en: '/articles/xol-tekshiruvi-cover.jpg',
  },
  views: 0,
};
