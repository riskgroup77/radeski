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
 * Pityriasis versicolor ("rang-barang temiratki", "отрубевидный лишай"): Malassezia yeast, light
 * or brown patches on the chest and back, why the white spots stay after treatment, how it differs
 * from vitiligo, and that it is not contagious in the usual sense. Diagnosis with a fungal test
 * at the clinic lab (price list: "Zamburug'ga surtma").
 */

const COVER = {
  uz: '/articles/rang-barang-temiratki-cover-uz.jpg',
  ru: '/articles/rang-barang-temiratki-cover-ru.jpg',
  en: '/articles/rang-barang-temiratki-cover-en.jpg',
};

function uzBody(): string {
  return `Ko‘krak, yelka yoki orqada mayda, ozgina po‘st tashlaydigan oq, pushti yoki jigarrang dog‘lar paydo bo‘lsa — bu ko‘pincha **rang-barang (kepaksimon) temiratki** bo‘ladi. U xavfli emas, lekin qaytalanishga moyil, dog‘lar esa davolashdan keyin ham bir muddat qoladi. Quyida uni qanday tanish, vitiligodan farqlash va to‘g‘ri davolashni tushuntiramiz.

## Bu nima?

Rang-barang temiratkini **Malassezia** turidagi achitqi zamburug‘lar keltirib chiqaradi. Ular deyarli hammaning terisida yashaydi, lekin issiq, nam sharoitda, ko‘p terlaganda yoki teri yog‘li bo‘lganda faol ko‘payadi. Shuning uchun kasallik ko‘pincha **yozda va o‘smirlik, yoshlik davrida** chiqadi, qishda esa kamayadi.

Bu odatdagi ma’noda yuqumli kasallik emas: zamburug‘ har kimda bor, kasallik esa organizm va teri holatiga bog‘liq.

## Belgilari

- ko‘krak, orqa, yelka, bo‘yin, ba’zan qo‘ltiq ostida **dumaloq dog‘lar**, bir-biriga qo‘shilib katta joylarni egallashi mumkin;
- rangi **oq, och pushti yoki jigarrang** — “rang-barang” nomi shundan;
- dog‘ ustini qirib ko‘rilsa, **kepakka o‘xshash mayda po‘st** chiqadi;
- odatda qichimaydi yoki ozgina qichiydi;
- quyoshda qoraygan terida oq dog‘lar yanada ko‘rinadi, chunki zamburug‘ ostidagi teri qoraymaydi.

## Vitiligodan qanday farqlanadi?

| Belgi | Rang-barang temiratki | Vitiligo |
|---|---|---|
| Rangi | Och, oq-pushti yoki jigarrang | Sutdek oq, rangsiz |
| Po‘st | Qirib ko‘rilsa mayda po‘st | Po‘st yo‘q |
| Joyi | Ko‘krak, orqa, yelka | Yuz, qo‘l, tirsak, tizza, jinsiy a’zolar |
| Tahlil | Zamburug‘ topiladi | Zamburug‘ yo‘q |

Aniq farqni dermatolog ko‘rik va zamburug‘ tahlili bilan aytadi. Batafsil: [Vitiligo belgilari](/uz/articles/art-vitiligo-belgilari).

## Qanday aniqlanadi?

Dermatolog dog‘larni ko‘radi va po‘stdan **zamburug‘ga surtma** oladi — mikroskopda zamburug‘ iplari va hujayralari ko‘rinadi. Tahlil klinika laboratoriyasida tez bajariladi.

## Qanday davolanadi?

- **Zamburug‘ga qarshi shampun, krem yoki sprey** — faqat boshga emas, dog‘li joylarga ham surtiladi. Ko‘p hollarda shu yetarli.
- **Ichishga beriladigan zamburug‘ga qarshi dori** — dog‘lar katta joyni egallaganda yoki tez-tez qaytalanganda, faqat shifokor buyrug‘i bilan.
- **Qaytalanishning oldini olish** — issiq mavsumdan oldin oyiga bir-ikki marta shampun bilan profilaktik yuvish.

## Nega oq dog‘lar davolashdan keyin ham qoladi?

Zamburug‘ yo‘qolgach ham teri rangi darhol tiklanmaydi: **oq dog‘lar bir necha oy** qolishi mumkin. Bu kasallik qaytganini emas, terining tiklanish vaqti kerakligini bildiradi. Ozgina quyosh (kuyish darajasigacha emas) rangni tenglashtirishga yordam beradi. Dog‘lar yana po‘st tashlay boshlasa — bu qaytalanish belgisi.

## Uyda nima qilish

- ko‘p terlasangiz, tez-tez yuvining va kiyimni almashtiring;
- paxta kiyim kiying, sintetik tor kiyimdan saqlaning;
- yog‘li krem va moylarni dog‘li joyga surtmang;
- shifokorsiz gormonli kremdan foydalanmang — zamburug‘ kuchayadi.

Ko‘rik uchun: [Dermatolog Farg‘onada](/uz/fargona/dermatolog), [Dermatolog Qo‘qonda](/uz/qoqon/dermatolog). Boshqa zamburug‘ kasalliklari haqida: [Teri zamburug‘i](/uz/articles/art-teri-zamburugi).

*Ushbu maqola umumiy ma’lumot uchun. Tashxis va davolashni faqat shifokor belgilaydi.*`;
}

function ruBody(): string {
  return `Если на груди, плечах или спине появились мелкие, слегка шелушащиеся белые, розовые или коричневые пятна — чаще всего это **отрубевидный (разноцветный) лишай**. Он не опасен, но склонен возвращаться, а пятна остаются и после лечения. Разберём, как его узнать, отличить от витилиго и правильно лечить.

## Что это такое?

Отрубевидный лишай вызывают дрожжевые грибки **Malassezia**. Они живут на коже почти у всех, но активно размножаются в тепле и влажности, при сильной потливости и жирной коже. Поэтому болезнь чаще появляется **летом и в подростковом и молодом возрасте**, а зимой стихает.

В обычном смысле это не заразная болезнь: грибок есть у каждого, а заболевание зависит от состояния организма и кожи.

## Признаки

- **округлые пятна** на груди, спине, плечах, шее, иногда в подмышках; могут сливаться в большие участки;
- цвет **белый, светло-розовый или коричневый** — отсюда название «разноцветный»;
- при поскабливании появляется **мелкое отрубевидное шелушение**;
- обычно не чешется или чешется слегка;
- на загорелой коже белые пятна заметнее: кожа под грибком не загорает.

## Как отличить от витилиго?

| Признак | Отрубевидный лишай | Витилиго |
|---|---|---|
| Цвет | Светлый, бело-розовый или коричневый | Молочно-белый, без пигмента |
| Шелушение | Мелкое при поскабливании | Нет |
| Расположение | Грудь, спина, плечи | Лицо, кисти, локти, колени, половые органы |
| Анализ | Грибок найден | Грибка нет |

Точно отличит дерматолог по осмотру и анализу на грибок. Подробнее: [Признаки витилиго](/ru/articles/art-vitiligo-belgilari).

## Как ставят диагноз?

Дерматолог осматривает пятна и берёт с чешуек **соскоб на грибок** — под микроскопом видны нити и клетки грибка. Анализ быстро делают в лаборатории клиники.

## Как лечат?

- **Противогрибковый шампунь, крем или спрей** — наносят не только на голову, но и на пятна. Часто этого достаточно.
- **Противогрибковые таблетки** — при больших площадях или частых рецидивах, только по назначению врача.
- **Профилактика рецидивов** — перед жарким сезоном мыться противогрибковым шампунем раз-два в месяц.

## Почему белые пятна остаются после лечения?

Даже когда грибка уже нет, цвет кожи восстанавливается не сразу: **белые пятна могут держаться несколько месяцев**. Это не возврат болезни, а время на восстановление кожи. Немного солнца (без ожога) помогает выровнять цвет. Если пятна снова начали шелушиться — это признак рецидива.

## Что делать дома

- при сильной потливости чаще мойтесь и меняйте одежду;
- носите хлопок, избегайте тесной синтетики;
- не наносите на пятна жирные кремы и масла;
- не пользуйтесь гормональными кремами без врача — грибок усилится.

Записаться на осмотр: [Дерматолог в Фергане](/ru/fargona/dermatolog), [Дерматолог в Коканде](/ru/qoqon/dermatolog). О других грибковых болезнях: [Грибок кожи](/ru/articles/art-teri-zamburugi).

*Статья носит информационный характер. Диагноз и лечение назначает только врач.*`;
}

function enBody(): string {
  return `Small, slightly flaky white, pink or brown patches on the chest, shoulders or back are most often **pityriasis versicolor**. It is not dangerous, but it tends to come back, and the patches linger even after treatment. Here is how to recognise it, tell it from vitiligo and treat it properly.

## What is it?

Pityriasis versicolor is caused by **Malassezia** yeasts. They live on almost everyone’s skin but multiply in warm, humid conditions, with heavy sweating or oily skin. That is why it usually appears **in summer and in teenagers and young adults**, and settles down in winter.

It is not contagious in the usual sense: everyone carries the yeast, and whether the condition develops depends on the body and the skin.

## Signs

- **round patches** on the chest, back, shoulders, neck and sometimes the armpits, which can merge into large areas;
- **white, light pink or brown** colour, hence “versicolor”;
- **fine, bran-like scale** when the patch is gently scraped;
- usually no itch, or only a little;
- on tanned skin the white patches stand out more, because the skin under the yeast does not tan.

## How is it different from vitiligo?

| Feature | Pityriasis versicolor | Vitiligo |
|---|---|---|
| Colour | Pale, white-pink or brown | Milk-white, no pigment |
| Scale | Fine scale when scraped | None |
| Location | Chest, back, shoulders | Face, hands, elbows, knees, genitals |
| Test | Yeast found | No yeast |

A dermatologist tells them apart with an exam and a fungal test. More: [Signs of vitiligo](/en/articles/art-vitiligo-belgilari).

## How is it diagnosed?

The dermatologist looks at the patches and takes a **skin scraping for fungus**; under the microscope the yeast threads and cells are visible. The clinic lab does the test quickly.

## How is it treated?

- **Antifungal shampoo, cream or spray**, applied to the patches as well as the scalp. Often this is enough.
- **Antifungal tablets** for large areas or frequent relapses, only when a doctor prescribes them.
- **Preventing relapse**: washing with an antifungal shampoo once or twice a month before the hot season.

## Why do white patches remain after treatment?

Even when the yeast is gone, skin colour does not come back straight away: **white patches can last several months**. This is not the condition returning but the skin needing time to recover. A little sun, short of burning, helps even out the colour. If the patches start flaking again, that is a sign of relapse.

## What to do at home

- if you sweat a lot, wash and change clothes more often;
- wear cotton and avoid tight synthetics;
- do not put oily creams or oils on the patches;
- do not use steroid creams without a doctor, as they make the yeast worse.

Book an exam: [Dermatologist in Fergana](/en/fargona/dermatolog), [Dermatologist in Kokand](/en/qoqon/dermatolog). Other fungal skin conditions: [Skin fungus](/en/articles/art-teri-zamburugi).

*This article is for general information. Only a doctor can make a diagnosis and prescribe treatment.*`;
}

export const PITYRIASIS_VERSICOLOR_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Rang-barang (kepaksimon) temiratki: ko‘krak va orqadagi oq, pushti yoki jigarrang dog‘lar. Sababi, vitiligodan farqi, zamburug‘ tahlili, davolash va nega oq dog‘lar davolashdan keyin ham bir necha oy qoladi.',
    body: uzBody(),
    keyTakeaways: [
      'Rang-barang temiratkini terida doim bor Malassezia achitqi zamburug‘i keltirib chiqaradi',
      'Issiq mavsumda, ko‘p terlaganda va yog‘li terida ko‘proq chiqadi',
      'Tashxis zamburug‘ga surtma bilan tasdiqlanadi',
      'Oq dog‘lar davolashdan keyin ham bir necha oy qolishi mumkin — bu qaytalanish emas',
      'Gormonli krem zamburug‘ni kuchaytiradi',
    ],
    tags: ['Rang-barang temiratki', 'Kepaksimon temiratki', 'Oq dog‘lar', 'Teri zamburug‘i', 'Malassezia', 'Dermatolog', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Dog‘lar katta joyga tarqalsa',
      'Har yili qaytalansa',
      'Dog‘lar vitiligo yoki boshqa kasallikka o‘xshasa',
      'Dorixona vositasi 2–4 haftada yordam bermasa',
    ],
    faq: [
      {
        question: 'Rang-barang temiratki yuqadimi?',
        answer:
          'Odatdagi ma’noda yo‘q. Malassezia zamburug‘i deyarli hammaning terisida bor; kasallik issiq, nam sharoit, terlash va teri holatiga bog‘liq. Oila a’zolaridan ajralib yashash shart emas.',
      },
      {
        question: 'Davolashdan keyin oq dog‘lar qachon ketadi?',
        answer:
          'Zamburug‘ yo‘qolgandan keyin teri rangi bir necha oyda tiklanadi. Dog‘lar po‘st tashlamasa, bu qaytalanish emas. Ozgina quyosh rangni tenglashtirishga yordam beradi.',
      },
      {
        question: 'Uni vitiligodan qanday farqlash mumkin?',
        answer:
          'Rang-barang temiratkida dog‘ qirib ko‘rilsa mayda po‘st chiqadi va tahlilda zamburug‘ topiladi. Vitiligoda dog‘ sutdek oq, po‘stsiz bo‘ladi. Aniq farqni dermatolog aytadi.',
      },
      {
        question: 'Nega har yozda qaytadi?',
        answer:
          'Issiq va namlik zamburug‘ ko‘payishi uchun qulay. Shuning uchun shifokor ba’zan issiq mavsumdan oldin oyiga bir-ikki marta zamburug‘ga qarshi shampun bilan profilaktik yuvishni tavsiya qiladi.',
      },
    ],
  },
  ru: {
    summary:
      'Отрубевидный (разноцветный) лишай: белые, розовые или коричневые пятна на груди и спине. Причина, отличие от витилиго, анализ на грибок, лечение и почему белые пятна держатся несколько месяцев после лечения.',
    body: ruBody(),
    keyTakeaways: [
      'Отрубевидный лишай вызывают грибки Malassezia, которые всегда есть на коже',
      'Чаще появляется в жару, при потливости и жирной коже',
      'Диагноз подтверждает соскоб на грибок',
      'Белые пятна могут держаться месяцами после лечения — это не рецидив',
      'Гормональный крем усиливает грибок',
    ],
    tags: ['Отрубевидный лишай', 'Разноцветный лишай', 'Белые пятна', 'Грибок кожи', 'Malassezia', 'Дерматолог', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Пятна распространяются на большую площадь',
      'Лишай возвращается каждый год',
      'Пятна похожи на витилиго или другое заболевание',
      'Аптечное средство не помогает 2–4 недели',
    ],
    faq: [
      {
        question: 'Заразен ли отрубевидный лишай?',
        answer:
          'В обычном смысле нет. Грибок Malassezia есть на коже почти у всех; болезнь зависит от жары, влажности, потливости и состояния кожи. Изолироваться от семьи не нужно.',
      },
      {
        question: 'Когда пройдут белые пятна после лечения?',
        answer:
          'Цвет кожи восстанавливается за несколько месяцев после того, как грибок уничтожен. Если пятна не шелушатся, это не рецидив. Немного солнца помогает выровнять цвет.',
      },
      {
        question: 'Как отличить его от витилиго?',
        answer:
          'При отрубевидном лишае пятно мелко шелушится при поскабливании и в анализе находят грибок. При витилиго пятно молочно-белое, без шелушения. Точно отличит дерматолог.',
      },
      {
        question: 'Почему он возвращается каждое лето?',
        answer:
          'Жара и влажность благоприятны для грибка. Поэтому врач иногда советует перед жарким сезоном мыться противогрибковым шампунем раз-два в месяц для профилактики.',
      },
    ],
  },
  en: {
    summary:
      'Pityriasis versicolor: white, pink or brown patches on the chest and back. The cause, how it differs from vitiligo, the fungal test, treatment and why white patches can last months after treatment.',
    body: enBody(),
    keyTakeaways: [
      'It is caused by Malassezia yeasts that normally live on the skin',
      'It is more common in hot weather, with sweating and oily skin',
      'A skin scraping for fungus confirms the diagnosis',
      'White patches can last months after treatment; that is not a relapse',
      'Steroid creams make it worse',
    ],
    tags: ['Pityriasis versicolor', 'Tinea versicolor', 'White patches', 'Skin fungus', 'Malassezia', 'Dermatologist', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'The patches cover a large area',
      'It comes back every year',
      'The patches look like vitiligo or another condition',
      'A pharmacy product has not helped in 2–4 weeks',
    ],
    faq: [
      {
        question: 'Is pityriasis versicolor contagious?',
        answer:
          'Not in the usual sense. Malassezia lives on almost everyone’s skin; the condition depends on heat, humidity, sweating and skin state. There is no need to keep away from your family.',
      },
      {
        question: 'When will the white patches fade after treatment?',
        answer:
          'Skin colour recovers over several months once the yeast is gone. If the patches are not flaking, it is not a relapse. A little sun helps even out the colour.',
      },
      {
        question: 'How can I tell it from vitiligo?',
        answer:
          'In pityriasis versicolor the patch shows fine scale when scraped and the test finds yeast. In vitiligo the patch is milk-white without scale. A dermatologist can tell for sure.',
      },
      {
        question: 'Why does it come back every summer?',
        answer:
          'Heat and humidity favour the yeast. A doctor may suggest washing with an antifungal shampoo once or twice a month before the hot season to prevent it.',
      },
    ],
  },
};

export const PITYRIASIS_VERSICOLOR_ARTICLE: Article = {
  id: 'art-rang-barang-temiratki',
  slug: 'rang-barang-temiratki',
  title: {
    uz: 'Rang-barang temiratki: teridagi oq va jigarrang dog‘lar sababi va davosi',
    ru: 'Отрубевидный лишай: белые и коричневые пятна на коже, причины и лечение',
    en: 'Pityriasis Versicolor: White and Brown Skin Patches, Causes and Treatment',
  },
  summary: {
    uz: PITYRIASIS_VERSICOLOR_ARTICLE_CATALOG.uz.summary,
    ru: PITYRIASIS_VERSICOLOR_ARTICLE_CATALOG.ru.summary,
    en: PITYRIASIS_VERSICOLOR_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: PITYRIASIS_VERSICOLOR_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: PITYRIASIS_VERSICOLOR_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: PITYRIASIS_VERSICOLOR_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: "Murodov Muhammadsolih Azamat o'g'li",
    ru: 'Муродов Мухаммадсолих Азамат угли',
    en: 'Muhammadsolih Azamat ugli Murodov',
  },
  date: '2026-12-19',
  image: COVER.uz,
  images: COVER,
  views: 0,
};
