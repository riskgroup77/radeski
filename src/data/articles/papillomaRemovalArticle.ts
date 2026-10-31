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
 * Papillomas (skin tags and viral papillomas) and their removal — the article behind the
 * surgical dermatology service and the wart/growth removal city pages. What "papilloma" means
 * in everyday speech, why home removal is risky, the clinic's methods (CO2 laser, radiowave)
 * and aftercare.
 */

function uzBody(): string {
  return `Papilloma — teridan bo'rtib chiqqan kichik yumshoq o'simta. Odatda bo'yin, qo'ltiq osti, ko'z qovoqlari, ko'krak ostida va chov sohasida paydo bo'ladi. Ko'pchilik papillomalar xavfli emas, lekin ular kiyim va zargarlik buyumlariga ilashib shikastlanadi, yallig'lanadi va tashqi ko'rinishga ta'sir qiladi. Ularni xavfsiz olib tashlash — dermatolog ishi.

## Papilloma va so'gal: farqi nima?

Kundalik hayotda "papilloma" deb bir necha xil o'simtani atashadi:

- **Akroxordonlar (osilib turgan papillomalar)** — ingichka oyoqchali yumshoq teri o'simtalari. Ishqalanish, ortiqcha vazn, qandli diabet va homiladorlik bilan bog'liq, yuqumli emas.
- **Virusli papillomalar va so'gallar** — inson papillomavirusi (VPCh) chaqiradi. Qo'l, oyoq kafti, yuzda bo'ladi, kontakt orqali yuqishi mumkin. Bolalardagi so'gallar haqida [alohida maqola](/uz/articles/art-bolalarda-sogal-co2-deka) bor.
- **Jinsiy a'zolardagi o'simtalar (kondilomalar)** — dermatovenerolog tekshiruvi va davolashini talab qiladi.

Qaysi biri ekanligini, shuningdek o'simta xol yoki boshqa hosila emasligini shifokor ko'rik va [dermatoskopiya](/uz/articles/art-xol-tekshiruvi-dermatoskopiya) bilan aniqlaydi.

## Uyda olib tashlash nega xavfli?

- **Ip bilan bog'lash** va kesish qon ketish, infeksiya va chandiqqa olib keladi.
- **Chistotel (qaldirg'och o'ti), kislotali va "kuydiruvchi" vositalar** teri kuyishi va dog' qoldiradi.
- Eng muhimi: o'simta papilloma emas, balki boshqa — jumladan xavfli — hosila bo'lishi mumkin. Uni tekshiruvsiz yo'q qilish tashxisni yo'qotadi.

## Klinikada qanday olib tashlanadi?

Usulni shifokor o'simtaning turi, hajmi va joyiga qarab tanlaydi:

- **[CO₂ lazer](/uz/services/apparatnaya-kosmetologiya/deka-co2-laser)** — o'simtani qatlamma-qatlam aniq bug'lantiradi, qon ketmaydi, yuz va ko'z qovoqlari uchun qulay;
- **[Radioto'lqin usuli (Surgitron)](/uz/services/apparatnaya-kosmetologiya/surgitron-radiofrequency)** — o'simtani radioto'lqin "pichog'i" bilan kesadi va bir vaqtda tomirlarni yopadi;
- **jarrohlik yo'li bilan olib tashlash** — yirik yoki shubhali hosilalarda, to'qimani gistologiyaga yuborish uchun.

Muolaja mahalliy og'riqsizlantirish bilan o'tkaziladi va bir necha daqiqa davom etadi. Shubhali o'simta albatta gistologik tekshiruvga yuboriladi.

## Olib tashlangandan keyin parvarish

- Joyida 5–10 kunda tushib ketadigan qobiq paydo bo'ladi — uni ko'chirmang.
- Shifokor tavsiya qilgan antiseptik bilan ishlov bering.
- Birinchi kunlarda bu joyni bug'lamang, saunaga bormang, hovuzda cho'milmang.
- Yangi teri 1–2 oy quyoshga sezgir bo'ladi — SPF 50 krem surting.

## Papillomalar qaytadimi?

Olib tashlangan papilloma o'sha joyda kamdan-kam qaytadi. Lekin moyillik saqlanadi: vaqt o'tishi bilan boshqa joylarda yangilari paydo bo'lishi mumkin. Vazn, qon shakarini nazorat qilish va terini ishqalanishdan saqlash yangi papillomalar sonini kamaytiradi.

## Farg'ona va Qo'qonda papillomalarni olib tashlash

Radeski Skin Clinic'da dermatolog o'simtani dermatoskop bilan tekshiradi, eng mos usulni tanlaydi va [jarrohlik dermatologiyasi](/uz/services/hirurgicheskaya-dermatologiya) bo'limida xavfsiz olib tashlaydi.

- [So'gal va papilloma olib tashlash Farg'onada](/uz/fargona/sogal-olib-tashlash);
- [So'gal va papilloma olib tashlash Qo'qonda](/uz/qoqon/sogal-olib-tashlash);
- batafsil: [DEKA CO₂ lazer](/uz/articles/art-co2-lazer-deka), [Kontagioz mollyusk](/uz/articles/art-kontagioz-mollyusk-radeski).

Papilloma qonasa, kattalasha boshlasa yoki rangi o'zgarsa, uni olib tashlashni kechiktirmang va albatta dermatologga ko'rsating.`;
}

function ruBody(): string {
  return `Папиллома — небольшой мягкий нарост, выступающий над кожей. Обычно они появляются на шее, в подмышках, на веках, под грудью и в паху. Большинство папиллом не опасны, но они цепляются за одежду и украшения, травмируются, воспаляются и портят внешний вид. Безопасно удалить их — задача дерматолога.

## Папиллома и бородавка: в чём разница?

В обиходе «папилломами» называют несколько разных образований:

- **Акрохордоны (свисающие папилломы)** — мягкие кожные выросты на тонкой ножке. Связаны с трением, лишним весом, сахарным диабетом и беременностью, не заразны.
- **Вирусные папилломы и бородавки** — вызывает вирус папилломы человека (ВПЧ). Бывают на руках, подошвах, лице и могут передаваться при контакте. О бородавках у детей есть [отдельная статья](/ru/articles/art-bolalarda-sogal-co2-deka).
- **Образования на половых органах (кондиломы)** — требуют обследования и лечения у дерматовенеролога.

Что именно перед вами и не является ли нарост родинкой или другим образованием, врач определит при осмотре и [дерматоскопии](/ru/articles/art-xol-tekshiruvi-dermatoskopiya).

## Почему опасно удалять дома?

- **Перевязывание ниткой** и срезание приводят к кровотечению, инфекции и рубцу.
- **Чистотел, кислоты и «прижигающие» средства** оставляют ожоги и пятна.
- Главное: нарост может оказаться не папилломой, а другим — в том числе опасным — образованием. Удалив его без обследования, вы теряете диагноз.

## Как удаляют папилломы в клинике?

Метод врач выбирает по типу, размеру и расположению образования:

- **[CO₂-лазер](/ru/services/apparatnaya-kosmetologiya/deka-co2-laser)** — точно испаряет нарост слой за слоем, без кровотечения, удобен для лица и век;
- **[радиоволновой метод (Surgitron)](/ru/services/apparatnaya-kosmetologiya/surgitron-radiofrequency)** — радиоволновой «нож» срезает нарост и сразу запечатывает сосуды;
- **хирургическое удаление** — для крупных или подозрительных образований, чтобы отправить ткань на гистологию.

Процедура проводится под местной анестезией и занимает несколько минут. Подозрительное образование обязательно отправляют на гистологическое исследование.

## Уход после удаления

- На месте удаления появится корочка, которая отпадёт через 5–10 дней, — не сдирайте её.
- Обрабатывайте ранку антисептиком, который посоветует врач.
- В первые дни не распаривайте это место, не ходите в сауну и бассейн.
- Новая кожа 1–2 месяца чувствительна к солнцу — наносите крем SPF 50.

## Возвращаются ли папилломы?

На месте удалённой папилломы новая появляется редко. Но склонность сохраняется: со временем могут появиться новые в других местах. Контроль веса и сахара крови и защита кожи от трения уменьшают число новых папиллом.

## Удаление папиллом в Фергане и Коканде

В Radeski Skin Clinic дерматолог осмотрит образование дерматоскопом, выберет подходящий метод и безопасно удалит его в отделении [хирургической дерматологии](/ru/services/hirurgicheskaya-dermatologiya).

- [Удаление бородавок и папиллом в Фергане](/ru/fargona/sogal-olib-tashlash);
- [Удаление бородавок и папиллом в Коканде](/ru/qoqon/sogal-olib-tashlash);
- подробнее: [CO₂-лазер DEKA](/ru/articles/art-co2-lazer-deka), [Контагиозный моллюск](/ru/articles/art-kontagioz-mollyusk-radeski).

Если папиллома кровоточит, начала расти или изменила цвет, не откладывайте удаление и обязательно покажите её дерматологу.`;
}

function enBody(): string {
  return `A papilloma is a small, soft growth that sticks out from the skin. They usually appear on the neck, in the armpits, on the eyelids, under the breasts and in the groin. Most are harmless, but they catch on clothing and jewellery, get injured, become inflamed and affect appearance. Removing them safely is a job for a dermatologist.

## Papillomas and warts: what is the difference?

In everyday speech "papilloma" covers several different growths:

- **Skin tags (acrochordons)** — soft skin growths on a thin stalk. Linked to friction, excess weight, diabetes and pregnancy; not contagious.
- **Viral papillomas and warts** — caused by human papillomavirus (HPV). They appear on the hands, soles and face and can spread by contact. There is [a separate article](/en/articles/art-bolalarda-sogal-co2-deka) on warts in children.
- **Genital growths (condylomas)** — need examination and treatment by a dermatovenereologist.

Which one you have — and whether the growth is really a papilloma and not a mole or something else — the doctor decides with an examination and [dermoscopy](/en/articles/art-xol-tekshiruvi-dermatoskopiya).

## Why is home removal risky?

- **Tying with thread** and cutting cause bleeding, infection and scarring.
- **Celandine, acids and "burning" products** leave burns and marks.
- Most importantly, the growth may not be a papilloma but something else — including something dangerous. Destroying it without an examination loses the diagnosis.

## How are papillomas removed at the clinic?

The doctor chooses the method by the type, size and location of the growth:

- **[CO₂ laser](/en/services/apparatnaya-kosmetologiya/deka-co2-laser)** — precisely vaporises the growth layer by layer, without bleeding; well suited to the face and eyelids;
- **[radiowave method (Surgitron)](/en/services/apparatnaya-kosmetologiya/surgitron-radiofrequency)** — a radiowave "knife" cuts the growth and seals the vessels at the same time;
- **surgical removal** — for large or suspicious growths, so the tissue can be sent for histology.

It is done under local anaesthetic and takes a few minutes. A suspicious growth is always sent for histology.

## Aftercare

- A crust forms and falls off in 5–10 days — do not pick it.
- Treat the spot with the antiseptic your doctor recommends.
- For the first few days avoid steaming the area, saunas and swimming pools.
- The new skin stays sun-sensitive for 1–2 months — use SPF 50.

## Do papillomas come back?

A removed papilloma rarely grows back in the same spot. But the tendency remains: new ones may appear elsewhere over time. Keeping weight and blood sugar in check and protecting the skin from friction reduce the number of new ones.

## Papilloma removal in Fergana and Kokand

At Radeski Skin Clinic a dermatologist examines the growth with a dermatoscope, chooses the right method and removes it safely in the [surgical dermatology](/en/services/hirurgicheskaya-dermatologiya) department.

- [Wart and papilloma removal in Fergana](/en/fargona/sogal-olib-tashlash);
- [Wart and papilloma removal in Kokand](/en/qoqon/sogal-olib-tashlash);
- in depth: [DEKA CO₂ laser](/en/articles/art-co2-lazer-deka), [Molluscum contagiosum](/en/articles/art-kontagioz-mollyusk-radeski).

If a papilloma bleeds, starts to grow or changes colour, do not put off removal — and have a dermatologist look at it.`;
}

export const PAPILLOMA_REMOVAL_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Papillomalar: turlari, so'galdan farqi, uyda olib tashlash xavfi, CO₂ lazer va radioto'lqin bilan olib tashlash, keyingi parvarish. Farg'ona va Qo'qonda dermatolog.",
    body: uzBody(),
    keyTakeaways: [
      "Ko'pchilik papillomalar xavfli emas, lekin shikastlanadi va yallig'lanadi",
      "Akroxordonlar yuqumli emas; virusli papilloma va so'gallar VPCh bilan bog'liq",
      'Ip bilan bog\'lash va kuydiruvchi vositalar — chandiq, kuyish va tashxis yo\'qolishi',
      "Klinikada CO₂ lazer, radioto'lqin yoki jarrohlik usuli bilan bir necha daqiqada",
      'Shubhali o\'simta gistologiyaga yuboriladi',
    ],
    tags: ['Papilloma', "So'gal", 'Papilloma olib tashlash', 'CO₂ lazer', 'Dermatolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Papilloma qonasa yoki shikastlansa',
      "Kattalasha boshlasa yoki rangi o'zgarsa",
      "Ko'p papillomalar qisqa vaqtda paydo bo'lsa",
      "Jinsiy a'zolarda o'simta paydo bo'lsa",
      "O'simta xolga o'xshasa",
    ],
    faq: [
      {
        question: 'Papillomani olib tashlash og\'riqlimi?',
        answer:
          "Yo'q. Muolaja mahalliy og'riqsizlantirish bilan o'tkaziladi va bir necha daqiqa davom etadi. Keyin bir necha kun yengil noqulaylik bo'lishi mumkin.",
      },
      {
        question: 'Olib tashlangan joyda iz qoladimi?',
        answer:
          "Kichik papillomalardan keyin odatda deyarli sezilmaydigan iz qoladi. Natija o'simtaning hajmiga, usulga va parvarishga bog'liq: qobiqni ko'chirmaslik va quyoshdan himoya muhim.",
      },
      {
        question: 'Papilloma yuqumlimi?',
        answer:
          "Akroxordonlar yuqumli emas. Virusli papilloma va so'gallar esa kontakt orqali yuqishi mumkin — shaxsiy sochiq va gigiyena vositalaridan foydalaning.",
      },
      {
        question: 'Homiladorlikda papillomani olib tashlash mumkinmi?',
        answer:
          "Homiladorlikda paydo bo'lgan papillomalar ba'zan tug'ruqdan keyin kichrayadi. Olib tashlash zarurligini va muddatini shifokor ko'rikdan keyin hal qiladi.",
      },
      {
        question: "Farg'ona va Qo'qonda papillomani qayerda olib tashlash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog o'simtani dermatoskop bilan tekshiradi va CO₂ lazer, radioto'lqin yoki jarrohlik usulida olib tashlaydi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Папилломы: виды, отличие от бородавок, чем опасно удаление дома, удаление CO₂-лазером и радиоволной, уход после процедуры. Дерматолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Большинство папиллом не опасны, но травмируются и воспаляются',
      'Акрохордоны не заразны; вирусные папилломы и бородавки связаны с ВПЧ',
      'Нитка и прижигающие средства — рубцы, ожоги и потерянный диагноз',
      'В клинике — CO₂-лазер, радиоволна или хирургически, за несколько минут',
      'Подозрительное образование отправляют на гистологию',
    ],
    tags: ['Папилломы', 'Бородавки', 'Удаление папиллом', 'CO₂-лазер', 'Дерматолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Папиллома кровоточит или травмируется',
      'Начала расти или изменила цвет',
      'За короткое время появилось много папиллом',
      'Образование на половых органах',
      'Нарост похож на родинку',
    ],
    faq: [
      {
        question: 'Больно ли удалять папиллому?',
        answer:
          'Нет. Процедура проводится под местной анестезией и занимает несколько минут. Потом несколько дней возможен лёгкий дискомфорт.',
      },
      {
        question: 'Остаётся ли след после удаления?',
        answer:
          'После небольших папиллом обычно остаётся едва заметный след. Результат зависит от размера образования, метода и ухода: важно не сдирать корочку и защищать кожу от солнца.',
      },
      {
        question: 'Заразны ли папилломы?',
        answer:
          'Акрохордоны не заразны. Вирусные папилломы и бородавки могут передаваться при контакте — пользуйтесь своим полотенцем и средствами гигиены.',
      },
      {
        question: 'Можно ли удалять папилломы при беременности?',
        answer:
          'Папилломы, появившиеся во время беременности, иногда уменьшаются после родов. Нужно ли удаление и когда — решает врач после осмотра.',
      },
      {
        question: 'Где удалить папилломы в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог осмотрит образование дерматоскопом и удалит его CO₂-лазером, радиоволной или хирургически. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Papillomas: types, how they differ from warts, why home removal is risky, removal with CO₂ laser and radiowave, aftercare. Dermatologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Most papillomas are harmless, but they get injured and inflamed',
      'Skin tags are not contagious; viral papillomas and warts are linked to HPV',
      'Thread and burning products cause scars, burns and a lost diagnosis',
      'At the clinic: CO₂ laser, radiowave or surgery, in a few minutes',
      'A suspicious growth is sent for histology',
    ],
    tags: ['Papillomas', 'Skin tags', 'Warts', 'Papilloma removal', 'CO₂ laser', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A papilloma bleeds or gets injured',
      'It starts to grow or changes colour',
      'Many papillomas appear in a short time',
      'A growth appears on the genitals',
      'The growth looks like a mole',
    ],
    faq: [
      {
        question: 'Does papilloma removal hurt?',
        answer:
          'No. It is done under local anaesthetic and takes a few minutes. There may be mild discomfort for a few days afterwards.',
      },
      {
        question: 'Will it leave a mark?',
        answer:
          'Small papillomas usually leave a barely visible mark. The result depends on the size, the method and aftercare: do not pick the crust and protect the skin from the sun.',
      },
      {
        question: 'Are papillomas contagious?',
        answer:
          'Skin tags are not. Viral papillomas and warts can spread by contact — use your own towel and toiletries.',
      },
      {
        question: 'Can papillomas be removed during pregnancy?',
        answer:
          'Papillomas that appear in pregnancy sometimes shrink after birth. Whether and when to remove them is decided by the doctor after an examination.',
      },
      {
        question: 'Where can I have papillomas removed in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist examines the growth with a dermatoscope and removes it with CO₂ laser, radiowave or surgery. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const PAPILLOMA_REMOVAL_ARTICLE: Article = {
  id: 'art-papilloma-olib-tashlash',
  slug: 'papilloma-olib-tashlash',
  title: {
    uz: "Papillomalar: nima uchun paydo bo'ladi va qanday xavfsiz olib tashlanadi",
    ru: 'Папилломы на коже: почему появляются и как их безопасно удалить',
    en: 'Skin Papillomas: Why They Appear and How to Remove Them Safely',
  },
  summary: {
    uz: PAPILLOMA_REMOVAL_ARTICLE_CATALOG.uz.summary,
    ru: PAPILLOMA_REMOVAL_ARTICLE_CATALOG.ru.summary,
    en: PAPILLOMA_REMOVAL_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: PAPILLOMA_REMOVAL_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: PAPILLOMA_REMOVAL_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: PAPILLOMA_REMOVAL_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-11-02',
  image: '/articles/papilloma-olib-tashlash-cover.jpg',
  images: {
    uz: '/articles/papilloma-olib-tashlash-cover.jpg',
    ru: '/articles/papilloma-olib-tashlash-cover.jpg',
    en: '/articles/papilloma-olib-tashlash-cover.jpg',
  },
  views: 0,
};
