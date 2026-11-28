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
 * Mole removal: the rule that a mole is checked by dermatoscopy before it is removed, when removal
 * is advised (medical vs cosmetic), the methods in the price list (laser, radiowave surgery,
 * surgical excision with histology) and why a suspicious mole is excised and sent to the lab
 * rather than burnt off. Links to the mole-check, melanoma and biopsy articles.
 */

const COVER = {
  uz: '/articles/xol-olib-tashlash-cover-uz.jpg',
  ru: '/articles/xol-olib-tashlash-cover-ru.jpg',
  en: '/articles/xol-olib-tashlash-cover-en.jpg',
};

function uzBody(): string {
  return `Xolni olib tashlash — oddiy va tez muolaja. Lekin bitta qoida bor: **xol olib tashlashdan oldin dermatoskop bilan tekshiriladi**. Shu tekshiruv qaysi usulni tanlash, olingan to‘qimani tahlilga yuborish kerakmi-yo‘qmi va umuman olib tashlash kerakmi — shularni hal qiladi.

## Qachon xolni olib tashlash tavsiya qilinadi?

**Tibbiy sabablar:**

- dermatoskopiyada shubhali belgilar topilsa;
- xol o‘zgarayotgan bo‘lsa — kattalashsa, rangi, shakli yoki chegarasi o‘zgarsa;
- qichisa, qonasa, yaralansa;
- doim jarohatlanadigan joyda bo‘lsa — kamar, bo‘yinbog‘, soqol olinadigan joy, oyoq tagi.

**Kosmetik sabablar:** xol ko‘rinishi yoqmasa. Bu holda ham avval dermatoskopiya qilinadi — “oddiy” ko‘ringan xol ham shifokor ko‘zidan o‘tishi kerak.

Xolni qanday tekshirish haqida: [Xol tekshiruvi va dermatoskopiya](/uz/articles/art-xol-tekshiruvi-dermatoskopiya).

## Olib tashlash usullari

Radeski Skin Clinic’da xol quyidagi usullar bilan olib tashlanadi:

- **Lazer bilan olib tashlash** — dermatoskopiyada xavfsiz deb topilgan kichik, yuza xollar uchun. Tez, qon ketmaydi, iz kichik bo‘ladi.
- **Radioto‘lqinli jarrohlik** — xavfsiz teri o‘smalari (xol, keratoma) uchun mahalliy og‘riqsizlantirish bilan. To‘qimani tahlilga yuborish imkonini saqlaydi.
- **Jarrohlik yo‘li bilan kesib olish va chok** — katta, chuqur yoki shubhali xollar uchun. Olingan to‘qima **gistologik tahlilga** yuboriladi.

Usulni shifokor xolning hajmi, joyi, chuqurligi va dermatoskopiya natijasiga qarab tanlaydi.

## Nega shubhali xol “kuydirilmaydi”?

Shubhali xolni lazer yoki boshqa usul bilan bug‘lantirib yuborish mumkin emas: bunda to‘qima yo‘qoladi va **gistologik tahlil qilib bo‘lmaydi**. Agar xol melanoma bo‘lsa, buni o‘z vaqtida bilish imkoni yo‘qoladi. Shuning uchun shubhali xol butunligicha kesib olinadi va laboratoriyada tekshiriladi. Batafsil: [Teri biopsiyasi](/uz/articles/art-teri-biopsiyasi), [Melanoma](/uz/articles/art-melanoma).

## Muolaja qanday o‘tadi?

1. Ko‘rik va dermatoskopiya.
2. Mahalliy og‘riqsizlantirish (in’eksiya yoki krem).
3. Olib tashlash — kichik xol bir necha daqiqada.
4. Kerak bo‘lsa chok yoki himoya bog‘lami, to‘qima laboratoriyaga.

## Keyin qanday parvarish qilinadi?

- joyni toza va quruq saqlang, shifokor bergan vosita bilan ishlang;
- qobiqni ko‘chirmang — u 7–14 kunda o‘zi tushadi;
- birinchi kunlari hammom, sauna va basseyndan saqlaning;
- **3–6 oy quyoshdan himoya** — SPF 50: aks holda o‘rnida qora dog‘ qolishi mumkin;
- gistologiya natijasini albatta oling va shifokorga ko‘rsating.

## Xolni uyda olib tashlash xavfli

Ip bilan bog‘lash, kislotali “xol ketkazuvchi” vositalar, kuydirish — chandiq, infeksiya va eng muhimi, xavfli o‘smani **o‘tkazib yuborish** xavfi. Bunday urinishdan keyin xol qayta o‘sishi va shifokorga ham baholash qiyin bo‘lishi mumkin.

Dermatoskopiya va xol olib tashlash: [Xol tekshiruvi Farg‘onada](/uz/fargona/xol-tekshiruvi), [Xol tekshiruvi Qo‘qonda](/uz/qoqon/xol-tekshiruvi), [O‘sma olib tashlash Farg‘onada](/uz/fargona/osma-olib-tashlash).

*Ushbu maqola umumiy ma’lumot uchun. Xolni olib tashlash zarurligi va usulini shifokor belgilaydi.*`;
}

function ruBody(): string {
  return `Удаление родинки — простая и быстрая процедура. Но правило одно: **перед удалением родинку проверяют дерматоскопом**. Именно этот осмотр решает, каким методом удалять, нужно ли отправлять ткань на анализ и нужно ли удалять вообще.

## Когда родинку советуют удалить?

**Медицинские причины:**

- на дерматоскопии найдены подозрительные признаки;
- родинка меняется — растёт, меняет цвет, форму или границы;
- чешется, кровоточит, изъязвляется;
- постоянно травмируется — ремень, воротник, зона бритья, подошва.

**Косметические причины:** родинка не нравится внешне. И в этом случае сначала делают дерматоскопию — «обычная» на вид родинка тоже должна пройти через взгляд врача.

Как проверяют родинки: [Проверка родинок и дерматоскопия](/ru/articles/art-xol-tekshiruvi-dermatoskopiya).

## Методы удаления

В Radeski Skin Clinic родинки удаляют:

- **Лазером** — небольшие поверхностные родинки, признанные на дерматоскопии безопасными. Быстро, без кровотечения, след небольшой.
- **Радиоволновой хирургией** — доброкачественные образования кожи (родинки, кератомы) под местной анестезией. Позволяет сохранить ткань для анализа.
- **Хирургическим иссечением со швом** — крупные, глубокие или подозрительные родинки. Удалённую ткань отправляют на **гистологию**.

Метод врач выбирает по размеру, расположению, глубине родинки и результату дерматоскопии.

## Почему подозрительную родинку не «прижигают»?

Подозрительную родинку нельзя испарить лазером или другим способом: ткань исчезает, и **гистологию сделать невозможно**. Если это была меланома, узнать об этом вовремя уже не получится. Поэтому подозрительную родинку иссекают целиком и исследуют в лаборатории. Подробнее: [Биопсия кожи](/ru/articles/art-teri-biopsiyasi), [Меланома](/ru/articles/art-melanoma).

## Как проходит процедура?

1. Осмотр и дерматоскопия.
2. Местная анестезия (укол или крем).
3. Удаление — небольшая родинка за несколько минут.
4. При необходимости шов или защитная повязка, ткань — в лабораторию.

## Как ухаживать после удаления?

- держите место чистым и сухим, обрабатывайте средством, которое дал врач;
- не сдирайте корочку — она отпадёт сама за 7–14 дней;
- первые дни без бани, сауны и бассейна;
- **3–6 месяцев защиты от солнца** — SPF 50, иначе на месте может остаться тёмное пятно;
- обязательно получите результат гистологии и покажите врачу.

## Удалять родинку дома опасно

Перевязывание ниткой, кислотные «средства от родинок», прижигание — это риск рубца, инфекции и, главное, **пропустить злокачественную опухоль**. После таких попыток родинка может вырасти снова, а врачу будет труднее её оценить.

Дерматоскопия и удаление родинок: [Проверка родинок в Фергане](/ru/fargona/xol-tekshiruvi), [Проверка родинок в Коканде](/ru/qoqon/xol-tekshiruvi), [Удаление новообразований в Фергане](/ru/fargona/osma-olib-tashlash).

*Статья носит информационный характер. Необходимость и метод удаления определяет врач.*`;
}

function enBody(): string {
  return `Removing a mole is a quick, simple procedure. But there is one rule: **a mole is checked with a dermatoscope before it is removed**. That check decides which method to use, whether the tissue goes to the lab and whether it needs removing at all.

## When is removal advised?

**Medical reasons:**

- dermatoscopy shows suspicious features;
- the mole is changing: growing, or changing colour, shape or border;
- it itches, bleeds or ulcerates;
- it keeps getting injured, under a belt or collar, where you shave or on the sole.

**Cosmetic reasons:** you do not like how it looks. Dermatoscopy comes first here too: even an ordinary-looking mole should pass a doctor’s eye.

How moles are checked: [Mole check and dermatoscopy](/en/articles/art-xol-tekshiruvi-dermatoskopiya).

## Removal methods

At Radeski Skin Clinic moles are removed by:

- **Laser**, for small, superficial moles that dermatoscopy shows to be safe. Fast, bloodless, with a small mark.
- **Radiowave surgery**, for benign skin growths (moles, keratomas) under local anaesthetic. It keeps the tissue available for testing.
- **Surgical excision with stitches**, for large, deep or suspicious moles. The tissue is sent for **histology**.

The doctor chooses the method from the mole’s size, location, depth and the dermatoscopy result.

## Why is a suspicious mole not “burnt off”?

A suspicious mole must not be vaporised by laser or any other means: the tissue disappears and **histology becomes impossible**. If it was a melanoma, the chance to find out in time is lost. So a suspicious mole is cut out whole and examined in the lab. More: [Skin biopsy](/en/articles/art-teri-biopsiyasi), [Melanoma](/en/articles/art-melanoma).

## What happens during the procedure?

1. Examination and dermatoscopy.
2. Local anaesthetic (injection or cream).
3. Removal, which takes a few minutes for a small mole.
4. Stitches or a protective dressing if needed; tissue goes to the lab.

## Aftercare

- keep the area clean and dry and use the product the doctor gave you;
- do not pick the scab; it falls off by itself in 7–14 days;
- avoid baths, saunas and pools for the first days;
- **protect it from the sun for 3–6 months** with SPF 50, or a dark mark may remain;
- always collect the histology result and show it to the doctor.

## Removing moles at home is dangerous

Tying with thread, acid “mole removers” and burning risk scarring, infection and, above all, **missing a malignant tumour**. After such attempts the mole may grow back and be harder for a doctor to assess.

Dermatoscopy and mole removal: [Mole check in Fergana](/en/fargona/xol-tekshiruvi), [Mole check in Kokand](/en/qoqon/xol-tekshiruvi), [Lesion removal in Fergana](/en/fargona/osma-olib-tashlash).

*This article is for general information. Whether and how a mole is removed is decided by the doctor.*`;
}

export const MOLE_REMOVAL_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Xolni olib tashlash: nega avval dermatoskopiya qilinadi, qachon tibbiy sabab bilan olib tashlash kerak, lazer, radioto‘lqin va jarrohlik usullari, gistologiya, keyingi parvarish va uyda olib tashlash xavfi.',
    body: uzBody(),
    keyTakeaways: [
      'Xol olib tashlashdan oldin dermatoskopiya bilan tekshiriladi',
      'Kichik xavfsiz xol lazer yoki radioto‘lqin bilan olib tashlanadi',
      'Shubhali xol butunligicha kesib olinadi va gistologiyaga yuboriladi',
      'Olib tashlangan joyni 3–6 oy quyoshdan himoya qilish kerak',
      'Uyda ip, kislota yoki kuydirish bilan olib tashlash xavfli',
    ],
    tags: ['Xol olib tashlash', 'Nevus', 'Dermatoskopiya', 'Lazer', 'Radioto‘lqinli jarrohlik', 'Gistologiya', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Xol kattalashsa yoki rangi, shakli o‘zgarsa',
      'Qichisa, qonasa yoki yaralansa',
      'Yangi, boshqalardan farq qiladigan xol paydo bo‘lsa',
      'Xol doim jarohatlansa',
    ],
    faq: [
      {
        question: 'Xolni olib tashlash xavflimi?',
        answer:
          'Dermatoskopiyadan keyin to‘g‘ri usul bilan olib tashlangan xol xavfli emas. Xavf — uyda olib tashlashda yoki shubhali xolni tahlilsiz yo‘q qilishda: bunda melanomani o‘tkazib yuborish mumkin.',
      },
      {
        question: 'Xol olib tashlangandan keyin iz qoladimi?',
        answer:
          'Kichik xolni lazer yoki radioto‘lqin bilan olishda iz odatda kichik va vaqt bilan oqaradi. Kesib olinganda ingichka chandiq qoladi. Quyoshdan himoya iz qorayishining oldini oladi.',
      },
      {
        question: 'Olib tashlangan xolni tahlilga yuborish shartmi?',
        answer:
          'Shubhali yoki kesib olingan xol albatta gistologiyaga yuboriladi. Kichik, dermatoskopiyada aniq xavfsiz xolni shifokor lazer bilan olib tashlashi mumkin — bu qarorni ko‘rikda shifokor qiladi.',
      },
      {
        question: 'Qishda xol olib tashlagan yaxshimi?',
        answer:
          'Qish va kuzda quyosh kamroq bo‘lgani uchun parvarish osonroq. Lekin shubhali xolni mavsumni kutmasdan, darhol ko‘rsatish va kerak bo‘lsa olib tashlash kerak.',
      },
    ],
  },
  ru: {
    summary:
      'Удаление родинок: почему сначала дерматоскопия, когда удалять по медицинским показаниям, лазер, радиоволна и хирургия, гистология, уход после удаления и опасность удаления дома.',
    body: ruBody(),
    keyTakeaways: [
      'Перед удалением родинку проверяют дерматоскопом',
      'Небольшую безопасную родинку удаляют лазером или радиоволной',
      'Подозрительную родинку иссекают целиком и отправляют на гистологию',
      'Место удаления 3–6 месяцев защищают от солнца',
      'Удалять родинку дома ниткой, кислотой или прижиганием опасно',
    ],
    tags: ['Удаление родинок', 'Невус', 'Дерматоскопия', 'Лазер', 'Радиоволновая хирургия', 'Гистология', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Родинка растёт или меняет цвет и форму',
      'Чешется, кровоточит или изъязвляется',
      'Появилась новая родинка, не похожая на другие',
      'Родинка постоянно травмируется',
    ],
    faq: [
      {
        question: 'Опасно ли удалять родинку?',
        answer:
          'Родинка, удалённая правильным методом после дерматоскопии, не опасна. Опасно удалять дома или уничтожать подозрительную родинку без анализа: так можно пропустить меланому.',
      },
      {
        question: 'Остаётся ли след после удаления?',
        answer:
          'После удаления небольшой родинки лазером или радиоволной след обычно маленький и со временем светлеет. После иссечения остаётся тонкий рубец. Защита от солнца предотвращает потемнение следа.',
      },
      {
        question: 'Обязательно ли отправлять родинку на анализ?',
        answer:
          'Подозрительную или иссечённую родинку обязательно отправляют на гистологию. Небольшую, явно безопасную на дерматоскопии родинку врач может удалить лазером — это решение принимается на осмотре.',
      },
      {
        question: 'Лучше удалять родинки зимой?',
        answer:
          'Осенью и зимой солнца меньше, поэтому уход проще. Но подозрительную родинку нужно показать и при необходимости удалить сразу, не дожидаясь сезона.',
      },
    ],
  },
  en: {
    summary:
      'Mole removal: why dermatoscopy comes first, when removal is medically advised, laser, radiowave and surgical methods, histology, aftercare and the risks of removing moles at home.',
    body: enBody(),
    keyTakeaways: [
      'A mole is checked with a dermatoscope before removal',
      'A small, safe mole can be removed by laser or radiowave',
      'A suspicious mole is cut out whole and sent for histology',
      'Protect the area from the sun for 3–6 months',
      'Removing a mole at home with thread, acid or burning is dangerous',
    ],
    tags: ['Mole removal', 'Nevus', 'Dermatoscopy', 'Laser', 'Radiowave surgery', 'Histology', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A mole is growing or changing colour or shape',
      'It itches, bleeds or ulcerates',
      'A new mole looks different from the others',
      'A mole keeps getting injured',
    ],
    faq: [
      {
        question: 'Is mole removal dangerous?',
        answer:
          'A mole removed by the right method after dermatoscopy is not dangerous. The danger lies in home removal or destroying a suspicious mole without testing it, which can mean a missed melanoma.',
      },
      {
        question: 'Will removal leave a mark?',
        answer:
          'After laser or radiowave removal of a small mole the mark is usually small and fades over time. Excision leaves a thin scar. Sun protection keeps the mark from darkening.',
      },
      {
        question: 'Does every removed mole go to the lab?',
        answer:
          'A suspicious or excised mole always goes for histology. A small mole that is clearly safe on dermatoscopy may be removed by laser; the doctor decides this at the visit.',
      },
      {
        question: 'Is winter a better time to remove moles?',
        answer:
          'Autumn and winter have less sun, so aftercare is easier. But a suspicious mole should be shown and, if needed, removed straight away without waiting for the season.',
      },
    ],
  },
};

export const MOLE_REMOVAL_ARTICLE: Article = {
  id: 'art-xol-olib-tashlash',
  slug: 'xol-olib-tashlash',
  title: {
    uz: 'Xolni olib tashlash: qachon kerak, qaysi usul va keyingi parvarish',
    ru: 'Удаление родинок: когда нужно, каким методом и уход после',
    en: 'Mole Removal: When It Is Needed, Which Method and Aftercare',
  },
  summary: {
    uz: MOLE_REMOVAL_ARTICLE_CATALOG.uz.summary,
    ru: MOLE_REMOVAL_ARTICLE_CATALOG.ru.summary,
    en: MOLE_REMOVAL_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: MOLE_REMOVAL_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: MOLE_REMOVAL_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: MOLE_REMOVAL_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-12-22',
  image: COVER.uz,
  images: COVER,
  views: 0,
};
