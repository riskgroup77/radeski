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
 * Seborrheic keratosis ("age warts", keratomas) — the most common benign growth after 40 and a
 * frequent reason for the growth-removal city pages. Points: harmless and not contagious, but
 * it can look like melanoma, so dermoscopy comes first; removal methods and aftercare.
 */

function uzBody(): string {
  return `Seboreyali keratoz (keratoma) — terining eng ko'p uchraydigan xavfsiz o'simtasi. Xalq orasida uni "keksalik so'gali" yoki "yoshga bog'liq xol" deyishadi. U odatda 40 yoshdan keyin paydo bo'ladi, yillar davomida ko'payadi va kattalashadi. Seboreyali keratoz saratonga aylanmaydi va yuqmaydi, lekin ba'zan xavfli o'simtalarga o'xshaydi — shuning uchun uni shifokorga ko'rsatish kerak.

## Seboreyali keratoz qanday ko'rinadi?

- och jigarrangdan qoragacha bo'lgan dog' yoki bo'rtiq;
- yuzasi g'adir-budur, mumsimon, go'yo teriga "yopishtirilgandek";
- o'lchami bir necha millimetrdan 2–3 santimetrgacha;
- ko'pincha ko'krak, orqa, bo'yin, yuz va bosh terisida;
- bir nechta yoki ko'p bo'lishi mumkin.

Keratoma ba'zan qichiydi, kiyimga ishqalanib qizaradi yoki qonaydi.

## Nima uchun paydo bo'ladi?

Aniq sababi to'liq ma'lum emas. Asosiy omillar:

- yosh — 40 yoshdan keyin ko'payadi;
- irsiyat — oilada ko'p keratomasi bo'lganlarda ko'proq;
- quyosh ta'siri — ochiq joylarda ko'proq uchraydi.

Seboreyali keratoz gigiyena yoki virus bilan bog'liq emas va boshqa odamga o'tmaydi.

## Nega shifokorga ko'rsatish kerak?

Qora, notekis keratoma tashqi ko'rinishidan **melanoma** yoki bazaliomaga o'xshashi mumkin. Shifokor [dermatoskopiya](/uz/articles/art-xol-tekshiruvi-dermatoskopiya)da ularni ajratadi: keratomaning o'ziga xos belgilari bor. Tashxisga shubha bo'lsa, o'simta olib tashlanib, gistologik tekshiruvga yuboriladi.

Shoshilinch ko'rinish kerak, agar:

- dog' tez kattalashsa yoki rangi o'zgarsa;
- qonasa, yara bo'lsa;
- qisqa vaqtda ko'p yangi keratomalar paydo bo'lsa.

## Qanday olib tashlanadi?

Keratomani olib tashlash shart emas — lekin u shikastlansa, qichisa, xalaqit bersa yoki kosmetik noqulaylik tug'dirsa, olib tashlanadi. Usulni shifokor tanlaydi:

- **[CO₂ lazer](/uz/services/apparatnaya-kosmetologiya/deka-co2-laser)** — keratomani qatlamma-qatlam aniq bug'lantiradi, yuz uchun qulay;
- **[radioto'lqin usuli](/uz/services/apparatnaya-kosmetologiya/surgitron-radiofrequency)** — o'simtani kesadi va tomirlarni bir vaqtda yopadi;
- **kriodestruksiya** — sovuq bilan muzlatish, kichik keratomalarda;
- **kyuretaj yoki jarrohlik** — shubhali hosilalarda, to'qimani gistologiyaga yuborish uchun.

Muolaja mahalliy og'riqsizlantirish bilan o'tadi. Uyda kesish, ip bilan bog'lash yoki kuydirish mumkin emas: bu chandiq, infeksiya va eng yomoni — xavfli o'simtani o'tkazib yuborishga olib keladi.

## Olib tashlangandan keyin

- 7–14 kunda tushib ketadigan qobiq paydo bo'ladi — ko'chirmang;
- shifokor aytgan antiseptik bilan ishlov bering;
- 1–2 oy SPF 50 krem surting — dog' qolmasligi uchun;
- olib tashlangan keratoma qaytmaydi, lekin boshqa joylarda yangilari paydo bo'lishi mumkin.

O'xshash, lekin boshqa hosilalar haqida: [papillomalarni olib tashlash](/uz/articles/art-papilloma-olib-tashlash).

## Farg'ona va Qo'qonda keratomalarni olib tashlash

Radeski Skin Clinic'da dermatolog o'simtani dermatoskop bilan tekshiradi, keratomani xavfli hosilalardan ajratadi va [jarrohlik dermatologiyasi](/uz/services/hirurgicheskaya-dermatologiya) bo'limida xavfsiz olib tashlaydi.

- [O'simtalarni olib tashlash Farg'onada](/uz/fargona/osma-olib-tashlash) va [Qo'qonda](/uz/qoqon/osma-olib-tashlash);
- [Xol tekshiruvi Farg'onada](/uz/fargona/xol-tekshiruvi) va [Qo'qonda](/uz/qoqon/xol-tekshiruvi).

Teridagi yangi yoki o'zgarayotgan har qanday dog'ni yiliga bir marta dermatologga ko'rsatish — eng oddiy va ishonchli himoya.`;
}

function ruBody(): string {
  return `Себорейный кератоз (кератома) — самое частое доброкачественное образование кожи. В народе его называют «старческой бородавкой» или «возрастной родинкой». Обычно он появляется после 40 лет, а с годами кератом становится больше. Себорейный кератоз не перерождается в рак и не заразен, но иногда похож на опасные опухоли — поэтому его нужно показать врачу.

## Как выглядит себорейный кератоз?

- пятно или бугорок от светло-коричневого до чёрного цвета;
- поверхность шероховатая, восковидная, будто «приклеенная» к коже;
- размер — от нескольких миллиметров до 2–3 сантиметров;
- чаще на груди, спине, шее, лице и коже головы;
- может быть одна или много.

Кератома иногда чешется, краснеет от трения одеждой или кровоточит.

## Почему появляется?

Точная причина до конца неизвестна. Главные факторы:

- возраст — после 40 лет кератом становится больше;
- наследственность — чаще у тех, у кого много кератом у родственников;
- солнце — чаще на открытых участках кожи.

Себорейный кератоз не связан с гигиеной или вирусами и не передаётся другим людям.

## Зачем показывать врачу?

Тёмная неровная кератома внешне может напоминать **меланому** или базалиому. Врач различает их при [дерматоскопии](/ru/articles/art-xol-tekshiruvi-dermatoskopiya): у кератомы есть характерные признаки. Если диагноз вызывает сомнения, образование удаляют и отправляют на гистологию.

Покажитесь срочно, если:

- пятно быстро растёт или меняет цвет;
- кровоточит или изъязвилось;
- за короткое время появилось много новых кератом.

## Как удаляют кератомы?

Удалять кератому не обязательно — но если она травмируется, чешется, мешает или беспокоит косметически, её удаляют. Метод выбирает врач:

- **[CO₂-лазер](/ru/services/apparatnaya-kosmetologiya/deka-co2-laser)** — точно испаряет кератому слой за слоем, удобен для лица;
- **[радиоволновой метод](/ru/services/apparatnaya-kosmetologiya/surgitron-radiofrequency)** — срезает образование и одновременно запечатывает сосуды;
- **криодеструкция** — замораживание холодом, для небольших кератом;
- **кюретаж или хирургия** — при сомнительных образованиях, чтобы отправить ткань на гистологию.

Процедура проходит под местной анестезией. Нельзя срезать, перевязывать или прижигать кератому дома: это рубцы, инфекция и, что хуже всего, риск пропустить опасную опухоль.

## После удаления

- появится корочка, которая отпадёт через 7–14 дней, — не сдирайте её;
- обрабатывайте антисептиком, который посоветует врач;
- 1–2 месяца наносите SPF 50 — чтобы не осталось пятна;
- удалённая кератома не возвращается, но в других местах могут появиться новые.

О похожих, но других образованиях: [удаление папиллом](/ru/articles/art-papilloma-olib-tashlash).

## Удаление кератом в Фергане и Коканде

В Radeski Skin Clinic дерматолог осмотрит образование дерматоскопом, отличит кератому от опасных опухолей и безопасно удалит её в отделении [хирургической дерматологии](/ru/services/hirurgicheskaya-dermatologiya).

- [Удаление новообразований в Фергане](/ru/fargona/osma-olib-tashlash) и [в Коканде](/ru/qoqon/osma-olib-tashlash);
- [Проверка родинок в Фергане](/ru/fargona/xol-tekshiruvi) и [в Коканде](/ru/qoqon/xol-tekshiruvi).

Раз в год показывать дерматологу любые новые или меняющиеся пятна на коже — самая простая и надёжная защита.`;
}

function enBody(): string {
  return `Seborrheic keratosis (keratoma) is the most common benign skin growth. People often call it an "age wart" or "old-age mole". It usually appears after 40 and becomes more numerous with the years. It does not turn into cancer and is not contagious, but it can look like dangerous tumours — so it should be shown to a doctor.

## What does seborrheic keratosis look like?

- a spot or bump from light brown to black;
- a rough, waxy surface that looks "stuck on" to the skin;
- from a few millimetres to 2–3 centimetres across;
- most often on the chest, back, neck, face and scalp;
- one or many.

A keratosis sometimes itches, gets red from rubbing clothes, or bleeds.

## Why does it appear?

The exact cause is not fully known. The main factors:

- age — they multiply after 40;
- genetics — more common when relatives have many;
- sun exposure — more common on exposed skin.

Seborrheic keratosis has nothing to do with hygiene or viruses and does not spread to other people.

## Why show it to a doctor?

A dark, irregular keratosis can resemble **melanoma** or basal cell carcinoma. A doctor tells them apart with [dermoscopy](/en/articles/art-xol-tekshiruvi-dermatoskopiya): a keratosis has characteristic features. If there is any doubt, the growth is removed and sent for histology.

See a doctor promptly if:

- a spot grows quickly or changes colour;
- it bleeds or ulcerates;
- many new keratoses appear in a short time.

## How are keratoses removed?

Removal is not required — but if a keratosis gets injured, itches, gets in the way or bothers you cosmetically, it can be removed. The doctor chooses the method:

- **[CO₂ laser](/en/services/apparatnaya-kosmetologiya/deka-co2-laser)** — precisely vaporises the growth layer by layer; well suited to the face;
- **[radiowave method](/en/services/apparatnaya-kosmetologiya/surgitron-radiofrequency)** — cuts the growth and seals the vessels at the same time;
- **cryotherapy** — freezing, for small keratoses;
- **curettage or surgery** — for doubtful lesions, so the tissue can go for histology.

It is done under local anaesthetic. Never cut, tie off or burn a keratosis at home: it means scars, infection and, worst of all, the risk of missing a dangerous tumour.

## After removal

- a crust forms and falls off in 7–14 days — do not pick it;
- treat it with the antiseptic your doctor recommends;
- use SPF 50 for 1–2 months so no mark is left;
- a removed keratosis does not come back, but new ones may appear elsewhere.

For similar but different growths: [papilloma removal](/en/articles/art-papilloma-olib-tashlash).

## Keratosis removal in Fergana and Kokand

At Radeski Skin Clinic a dermatologist examines the growth with a dermatoscope, tells a keratosis apart from dangerous tumours and removes it safely in the [surgical dermatology](/en/services/hirurgicheskaya-dermatologiya) department.

- [Growth removal in Fergana](/en/fargona/osma-olib-tashlash) and [in Kokand](/en/qoqon/osma-olib-tashlash);
- [Mole check in Fergana](/en/fargona/xol-tekshiruvi) and [in Kokand](/en/qoqon/xol-tekshiruvi).

Showing any new or changing spot to a dermatologist once a year is the simplest and most reliable protection.`;
}

export const SEBORRHEIC_KERATOSIS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Seboreyali keratoz (keratoma): 40 yoshdan keyingi jigarrang \"so'gallar\". Xavfli emas, lekin melanomaga o'xshashi mumkin — dermatoskopiya, olib tashlash usullari va parvarish. Farg'ona va Qo'qonda dermatolog.",
    body: uzBody(),
    keyTakeaways: [
      "Seboreyali keratoz — xavfsiz o'simta, saratonga aylanmaydi va yuqmaydi",
      "Qora, notekis keratoma melanomaga o'xshashi mumkin — dermatoskopiya kerak",
      "Olib tashlash shart emas, lekin shikastlansa yoki xalaqit bersa olib tashlanadi",
      "CO₂ lazer, radioto'lqin, kriodestruksiya yoki jarrohlik usuli",
      "Uyda kesish va kuydirish — chandiq va xavfli o'simtani o'tkazib yuborish xavfi",
    ],
    tags: ['Seboreyali keratoz', 'Keratoma', "Keksalik so'gali", "O'simta olib tashlash", 'Dermatolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Dog' tez kattalashsa yoki rangi o'zgarsa",
      "Qonasa yoki yara bo'lsa",
      "Qisqa vaqtda ko'p yangi keratomalar paydo bo'lsa",
      "Kiyimga ilashib doim shikastlansa",
      "Dog' xolmi yoki keratomami — ishonchingiz bo'lmasa",
    ],
    faq: [
      {
        question: "Seboreyali keratoz saratonga aylanadimi?",
        answer:
          "Yo'q, seboreyali keratoz xavfsiz o'simta va saratonga aylanmaydi. Lekin melanoma unga o'xshab ko'rinishi mumkin, shuning uchun yangi yoki o'zgargan dog'ni dermatoskopiyada tekshirish kerak.",
      },
      {
        question: 'Keratomani olib tashlash og\'riqlimi?',
        answer:
          "Yo'q. Muolaja mahalliy og'riqsizlantirish bilan bir necha daqiqada o'tadi. Keyin bir necha kun yengil noqulaylik bo'lishi mumkin.",
      },
      {
        question: 'Olib tashlangandan keyin iz qoladimi?',
        answer:
          "Ko'pincha deyarli sezilmaydigan och dog' qoladi va u vaqt o'tishi bilan teri rangiga yaqinlashadi. Qobiqni ko'chirmaslik va 1–2 oy quyoshdan himoya natijani yaxshilaydi.",
      },
      {
        question: 'Keratomalar qaytadimi?',
        answer:
          "Olib tashlangan keratoma o'sha joyda qaytmaydi. Lekin moyillik saqlanadi va boshqa joylarda yangilari paydo bo'lishi mumkin — ularni ham xuddi shunday olib tashlash mumkin.",
      },
      {
        question: "Farg'ona va Qo'qonda keratomani qayerda olib tashlash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog o'simtani dermatoskop bilan tekshiradi va CO₂ lazer, radioto'lqin yoki jarrohlik usulida olib tashlaydi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Себорейный кератоз (кератома): коричневые «бородавки» после 40 лет. Не опасен, но может быть похож на меланому — дерматоскопия, методы удаления и уход. Дерматолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Себорейный кератоз — доброкачественное образование, не перерождается в рак и не заразен',
      'Тёмная неровная кератома может быть похожа на меланому — нужна дерматоскопия',
      'Удалять не обязательно, но при травмах и дискомфорте кератому удаляют',
      'CO₂-лазер, радиоволна, криодеструкция или хирургия',
      'Срезать и прижигать дома — рубцы и риск пропустить опасную опухоль',
    ],
    tags: ['Себорейный кератоз', 'Кератома', 'Старческая бородавка', 'Удаление новообразований', 'Дерматолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Пятно быстро растёт или меняет цвет',
      'Кровоточит или изъязвилось',
      'За короткое время появилось много новых кератом',
      'Постоянно травмируется одеждой',
      'Вы не уверены, родинка это или кератома',
    ],
    faq: [
      {
        question: 'Перерождается ли себорейный кератоз в рак?',
        answer:
          'Нет, себорейный кератоз — доброкачественное образование и в рак не перерождается. Но меланома может выглядеть похоже, поэтому новое или изменившееся пятно нужно проверить на дерматоскопии.',
      },
      {
        question: 'Больно ли удалять кератому?',
        answer:
          'Нет. Процедура проходит под местной анестезией и занимает несколько минут. Потом несколько дней возможен лёгкий дискомфорт.',
      },
      {
        question: 'Остаётся ли след после удаления?',
        answer:
          'Чаще всего остаётся едва заметное светлое пятно, которое со временем выравнивается по цвету с кожей. Лучше результат будет, если не сдирать корочку и 1–2 месяца защищать кожу от солнца.',
      },
      {
        question: 'Возвращаются ли кератомы?',
        answer:
          'Удалённая кератома на том же месте не возвращается. Но склонность сохраняется, и в других местах могут появиться новые — их также можно удалить.',
      },
      {
        question: 'Где удалить кератому в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог осмотрит образование дерматоскопом и удалит его CO₂-лазером, радиоволной или хирургически. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Seborrheic keratosis: brown "age warts" after 40. Harmless, but it can look like melanoma — dermoscopy, removal methods and aftercare. Dermatologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Seborrheic keratosis is benign, does not turn into cancer and is not contagious',
      'A dark, irregular keratosis can look like melanoma — dermoscopy is needed',
      'Removal is optional, but done when it is injured or bothersome',
      'CO₂ laser, radiowave, cryotherapy or surgery',
      'Cutting or burning at home risks scars and missing a dangerous tumour',
    ],
    tags: ['Seborrheic keratosis', 'Keratoma', 'Age warts', 'Growth removal', 'Dermatologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A spot grows quickly or changes colour',
      'It bleeds or ulcerates',
      'Many new keratoses appear in a short time',
      'Clothing keeps injuring it',
      'You are not sure whether it is a mole or a keratosis',
    ],
    faq: [
      {
        question: 'Can seborrheic keratosis turn into cancer?',
        answer:
          'No, it is benign and does not become cancer. But melanoma can look similar, so a new or changing spot should be checked with dermoscopy.',
      },
      {
        question: 'Does keratosis removal hurt?',
        answer:
          'No. It is done under local anaesthetic and takes a few minutes. There may be mild discomfort for a few days.',
      },
      {
        question: 'Will it leave a mark?',
        answer:
          'Usually a barely visible pale spot remains, which evens out with the surrounding skin over time. Leaving the crust alone and protecting the skin from the sun for 1–2 months improves the result.',
      },
      {
        question: 'Do keratoses come back?',
        answer:
          'A removed keratosis does not return in the same place. But the tendency remains, and new ones may appear elsewhere — these can be removed the same way.',
      },
      {
        question: 'Where can I have a keratosis removed in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist examines the growth with a dermatoscope and removes it with CO₂ laser, radiowave or surgery. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const SEBORRHEIC_KERATOSIS_ARTICLE: Article = {
  id: 'art-seboreyali-keratoz',
  slug: 'seboreyali-keratoz',
  title: {
    uz: "Seboreyali keratoz (keratoma): 40 yoshdan keyingi dog'lar — xavflimi va qanday olib tashlanadi",
    ru: 'Себорейный кератоз (кератома): опасна ли и как её удалить',
    en: 'Seborrheic Keratosis: Is It Dangerous and How Is It Removed?',
  },
  summary: {
    uz: SEBORRHEIC_KERATOSIS_ARTICLE_CATALOG.uz.summary,
    ru: SEBORRHEIC_KERATOSIS_ARTICLE_CATALOG.ru.summary,
    en: SEBORRHEIC_KERATOSIS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: SEBORRHEIC_KERATOSIS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: SEBORRHEIC_KERATOSIS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: SEBORRHEIC_KERATOSIS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: "Yo'qubov Farrux Farhodjonovich",
    ru: 'Якубов Фаррух Фарходжонович',
    en: 'Dr. Farrukh Farhodjonovich Yoqubov',
  },
  date: '2026-11-09',
  image: '/articles/seboreyali-keratoz-cover.jpg',
  images: {
    uz: '/articles/seboreyali-keratoz-cover.jpg',
    ru: '/articles/seboreyali-keratoz-cover.jpg',
    en: '/articles/seboreyali-keratoz-cover.jpg',
  },
  views: 0,
};
