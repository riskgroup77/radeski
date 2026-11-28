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
 * Laser tattoo removal: how a Q-switched laser breaks up pigment, why it takes a course, what
 * changes the number of sessions (colour, depth, age, amateur vs professional), aftercare and
 * contraindications. Radeski removes tattoos and eyebrow tattooing with Hollywood Spectra
 * (price list: "6 sm tatuiruvkani lazer bilan olib tashlash — Hollywood Spectra").
 */

const COVER = {
  uz: '/articles/tatuirovka-olib-tashlash-cover-uz.jpg',
  ru: '/articles/tatuirovka-olib-tashlash-cover-ru.jpg',
  en: '/articles/tatuirovka-olib-tashlash-cover-en.jpg',
};

function uzBody(): string {
  return `Tatuirovka yoki qosh tatuajidan voz kechishning eng xavfsiz usuli — lazer. Tatuirovka bir seansda yo‘qolmaydi: pigment bosqichma-bosqich, kurs davomida rangsizlanadi. Quyida lazer qanday ishlashi, necha seans kerakligi va muolajadan keyin terini qanday parvarish qilishni tushuntiramiz.

## Lazer tatuirovkani qanday olib tashlaydi?

Tatuirovka bo‘yog‘i terining chuqur qatlamida (dermada) mayda zarrachalar ko‘rinishida turadi. Juda qisqa impulsli lazer (Q-switched) bu zarrachalarni yanada maydaroq bo‘laklarga parchalaydi, teri esa ularni keyingi haftalarda limfa orqali asta-sekin chiqarib yuboradi. Shu sababli natija seansdan keyin darhol emas, **4–8 hafta davomida** ko‘rinadi.

Radeski Skin Clinic’da tatuirovka va qosh tatuaji **Hollywood Spectra** lazeri bilan olib tashlanadi. To‘lqin uzunligi bo‘yoq rangiga qarab tanlanadi: qora va to‘q ko‘k rang yaxshi, qizil va to‘q sariq ranglar sekinroq ketadi.

## Necha seans kerak?

Odatda **bir necha seansdan o‘ntagacha va undan ko‘proq**, oralig‘i **6–8 hafta**. Seanslar soniga ta’sir qiladi:

- **bo‘yoq rangi** — qora rang eng tez ketadi, yashil, sariq va oq eng qiyin;
- **chuqurlik va zichlik** — professional tatuirovka zichroq, havaskor tatuirovka ko‘pincha tezroq ketadi;
- **tatuirovka yoshi** — eski tatuirovka allaqachon qisman xiralashgan;
- **joylashuvi** — qon aylanishi yaxshi joylarda (yuz, bo‘yin) tezroq, oyoq-qo‘l uchlarida sekinroq;
- **teri turi** — qora teri uchun parametrlar ehtiyotkorroq tanlanadi.

Aniq sonni shifokor tatuirovkani ko‘rgandan keyin taxminan aytadi.

## Muolaja qanday o‘tadi?

1. Ko‘rik: tatuirovka rangi, hajmi, teri turi, qarshi ko‘rsatmalar.
2. Ko‘zni himoya qiluvchi ko‘zoynak; kerak bo‘lsa og‘riqsizlantiruvchi krem.
3. Lazer impulslari — rezina bilan chertgandek sezgi. Kichik tatuirovka bir necha daqiqada ishlanadi.
4. Sovutish va himoya kremi.

Seansdan keyin teri qizaradi, ozroq shishadi, tatuirovka oqarib qoladi; 1–2 kunda mayda qobiq paydo bo‘lishi mumkin.

## Muolajadan keyin parvarish

- birinchi kunlari joyni ishqalamang, qobiqlarni ko‘chirmang;
- 2–3 kun hammom, sauna va basseyndan saqlaning;
- shifokor tavsiya qilgan kremni surting;
- **quyoshdan himoya** — SPF 50, ayniqsa yozda: quyosh pigmentli dog‘ qoldirishi mumkin.

## Kimga mumkin emas?

Homiladorlik, faol teri infeksiyasi yoki yallig‘lanish shu joyda, yangi quyoshda qorayish, keloid chandiqqa moyillik, yorug‘likka sezgirlikni oshiruvchi ba’zi dorilar. Bular haqida shifokorga oldindan ayting.

## Qosh tatuaji

Qosh tatuaji ham shu tamoyil bilan olib tashlanadi. Lekin ba’zi tatuaj bo‘yoqlari (jumladan, oq va badan rangli) lazerdan keyin **qorayishi** mumkin, shuning uchun avval kichik sinov qilinadi. Batafsil: [Qosh tatuajini lazer bilan olib tashlash](/uz/articles/art-tatuaj-brovey-hollywood-spectra-radeski).

Tatuirovka o‘rnida chandiq bo‘lsa, uni alohida davolash mumkin: [Chandiqlarni lazer bilan tuzatish](/uz/articles/art-deka-co2-chandiqlar-radeski). Konsultatsiya uchun: [Kosmetolog Farg‘onada](/uz/fargona/kosmetolog), [Kosmetolog Qo‘qonda](/uz/qoqon/kosmetolog).

*Ushbu maqola umumiy ma’lumot uchun. Muolaja zarurligi va soni shifokor ko‘rigida belgilanadi.*`;
}

function ruBody(): string {
  return `Самый безопасный способ избавиться от татуировки или татуажа бровей — лазер. За один сеанс татуировка не исчезает: пигмент светлеет постепенно, курсом. Разберём, как работает лазер, сколько нужно сеансов и как ухаживать за кожей после процедуры.

## Как лазер удаляет татуировку?

Краситель татуировки лежит в глубоком слое кожи (дерме) в виде мелких частиц. Лазер с очень коротким импульсом (Q-switched) дробит их на ещё более мелкие фрагменты, которые кожа в следующие недели постепенно выводит через лимфу. Поэтому результат виден не сразу после сеанса, а **в течение 4–8 недель**.

В Radeski Skin Clinic татуировки и татуаж бровей удаляют лазером **Hollywood Spectra**. Длина волны подбирается под цвет пигмента: чёрный и тёмно-синий уходят хорошо, красный и оранжевый — медленнее.

## Сколько нужно сеансов?

Обычно **от нескольких до десяти и больше**, с интервалом **6–8 недель**. На количество влияют:

- **цвет** — быстрее всего уходит чёрный, труднее всего зелёный, жёлтый и белый;
- **глубина и плотность** — профессиональная татуировка плотнее, любительская часто уходит быстрее;
- **возраст татуировки** — старая уже частично выцвела;
- **расположение** — на лице и шее быстрее, на кистях и стопах медленнее;
- **фототип кожи** — для смуглой кожи параметры подбирают осторожнее.

Примерное число сеансов врач называет после осмотра.

## Как проходит процедура?

1. Осмотр: цвет, размер, фототип, противопоказания.
2. Защитные очки; при необходимости обезболивающий крем.
3. Лазерные импульсы — ощущение как от щелчка резинкой. Небольшая татуировка обрабатывается за несколько минут.
4. Охлаждение и защитный крем.

После сеанса кожа краснеет, немного отекает, татуировка белеет; через 1–2 дня могут появиться мелкие корочки.

## Уход после процедуры

- первые дни не тереть место и не сдирать корочки;
- 2–3 дня без бани, сауны и бассейна;
- наносить крем, который рекомендовал врач;
- **защита от солнца** — SPF 50, особенно летом: солнце может оставить пигментное пятно.

## Кому нельзя?

Беременность, активная инфекция или воспаление в зоне, свежий загар, склонность к келоидным рубцам, некоторые препараты, повышающие светочувствительность. Скажите о них врачу заранее.

## Татуаж бровей

Татуаж удаляют по тому же принципу. Но некоторые пигменты татуажа (в том числе белые и телесные) после лазера могут **потемнеть**, поэтому сначала делают небольшой тест. Подробнее: [Удаление татуажа бровей лазером](/ru/articles/art-tatuaj-brovey-hollywood-spectra-radeski).

Если на месте татуировки остался рубец, его можно лечить отдельно: [Лазерная коррекция рубцов](/ru/articles/art-deka-co2-chandiqlar-radeski). Консультация: [Косметолог в Фергане](/ru/fargona/kosmetolog), [Косметолог в Коканде](/ru/qoqon/kosmetolog).

*Статья носит информационный характер. Необходимость и число процедур определяет врач на осмотре.*`;
}

function enBody(): string {
  return `A laser is the safest way to get rid of a tattoo or eyebrow tattooing. A tattoo does not vanish in one session: the pigment fades step by step over a course. Here is how the laser works, how many sessions it takes and how to care for the skin afterwards.

## How does a laser remove a tattoo?

Tattoo ink sits deep in the skin (the dermis) as tiny particles. A laser with very short pulses (Q-switched) shatters them into even smaller fragments, which the body clears through the lymph over the following weeks. That is why the result shows not straight after the session but **over 4–8 weeks**.

At Radeski Skin Clinic tattoos and eyebrow tattooing are removed with the **Hollywood Spectra** laser. The wavelength is matched to the ink colour: black and dark blue respond well, red and orange more slowly.

## How many sessions?

Usually **from a few to ten or more**, **6–8 weeks apart**. The number depends on:

- **colour**: black clears fastest, green, yellow and white are hardest;
- **depth and density**: professional tattoos are denser, amateur ones often clear faster;
- **age of the tattoo**: an old one has already partly faded;
- **location**: faster on the face and neck, slower on hands and feet;
- **skin type**: settings are chosen more carefully for darker skin.

The doctor gives an estimate after seeing the tattoo.

## What happens during a session?

1. Assessment: colour, size, skin type, contraindications.
2. Protective eyewear and, if needed, a numbing cream.
3. Laser pulses, which feel like a rubber band snapping. A small tattoo takes a few minutes.
4. Cooling and a protective cream.

Afterwards the skin is red and slightly swollen and the tattoo turns white; small crusts may form in 1–2 days.

## Aftercare

- for the first days, do not rub the area or pick the crusts;
- avoid baths, saunas and pools for 2–3 days;
- use the cream the doctor recommends;
- **sun protection**, SPF 50, especially in summer: sun can leave a pigment mark.

## Who should not have it?

Pregnancy, an active infection or inflammation in the area, a fresh tan, a tendency to keloid scars, and some medicines that increase light sensitivity. Tell the doctor about these beforehand.

## Eyebrow tattooing

Eyebrow tattooing is removed the same way. But some cosmetic inks, including white and skin-toned ones, can **darken** after laser, so a small test spot is done first. More: [Laser removal of eyebrow tattooing](/en/articles/art-tatuaj-brovey-hollywood-spectra-radeski).

If a scar remains where the tattoo was, it can be treated separately: [Laser scar correction](/en/articles/art-deka-co2-chandiqlar-radeski). Book a consultation: [Cosmetologist in Fergana](/en/fargona/kosmetolog), [Cosmetologist in Kokand](/en/qoqon/kosmetolog).

*This article is for general information. The need for treatment and the number of sessions are decided by the doctor.*`;
}

export const TATTOO_REMOVAL_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Tatuirovka va qosh tatuajini lazer bilan olib tashlash: lazer qanday ishlaydi, necha seans kerak, rang va chuqurlik natijaga qanday ta’sir qiladi, muolajadan keyin parvarish va qarshi ko‘rsatmalar.',
    body: uzBody(),
    keyTakeaways: [
      'Tatuirovka bir seansda emas, 6–8 hafta oralig‘idagi kurs bilan ketadi',
      'Qora rang eng tez, yashil, sariq va oq eng sekin ketadi',
      'Natija seansdan keyingi 4–8 hafta ichida ko‘rinadi',
      'Muolajadan keyin quyoshdan himoya shart',
      'Qosh tatuajining ba’zi bo‘yoqlari qorayishi mumkin, shuning uchun avval sinov qilinadi',
    ],
    tags: ['Tatuirovka olib tashlash', 'Lazer', 'Qosh tatuaji', 'Hollywood Spectra', 'Kosmetologiya', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Tatuirovka joyida qizarish, shish yoki yiring bo‘lsa',
      'Tatuirovka ostida chandiq yoki tugun paydo bo‘lsa',
      'Tatuirovka joyida xol o‘zgarsa',
      'Uyda “tatuirovka ketkazuvchi” vositadan keyin kuyish bo‘lsa',
    ],
    faq: [
      {
        question: 'Tatuirovkani olib tashlash og‘riqlimi?',
        answer:
          'Sezgi rezina bilan chertgandek. Kerak bo‘lsa og‘riqsizlantiruvchi krem va sovutish qo‘llaniladi. Kichik tatuirovka bir necha daqiqada ishlanadi.',
      },
      {
        question: 'Tatuirovka butunlay ketadimi?',
        answer:
          'Ko‘p hollarda tatuirovka ko‘rinmaydigan yoki deyarli ko‘rinmaydigan darajagacha rangsizlanadi. Ba’zi ranglar (yashil, sariq, oq) to‘liq ketmasligi mumkin — shifokor buni oldindan aytadi.',
      },
      {
        question: 'Seanslar oralig‘i qancha bo‘lishi kerak?',
        answer:
          'Odatda 6–8 hafta: teri parchalangan pigmentni chiqarib ulgurishi va tiklanishi kerak. Tezroq qilish natijani tezlashtirmaydi, faqat teriga zarar qiladi.',
      },
      {
        question: 'Chandiq qolmaydimi?',
        answer:
          'To‘g‘ri parametr va parvarishda chandiq kam uchraydi. Qobiqlarni ko‘chirish va quyosh xavfni oshiradi. Avvaldan bor chandiq lazer bilan alohida tuzatiladi.',
      },
    ],
  },
  ru: {
    summary:
      'Лазерное удаление татуировки и татуажа бровей: как работает лазер, сколько нужно сеансов, как влияют цвет и глубина, уход после процедуры и противопоказания.',
    body: ruBody(),
    keyTakeaways: [
      'Татуировка уходит не за один сеанс, а курсом с интервалом 6–8 недель',
      'Быстрее всего уходит чёрный, медленнее всего зелёный, жёлтый и белый',
      'Результат проявляется в течение 4–8 недель после сеанса',
      'После процедуры обязательна защита от солнца',
      'Некоторые пигменты татуажа могут потемнеть, поэтому сначала делают тест',
    ],
    tags: ['Удаление татуировки', 'Лазер', 'Татуаж бровей', 'Hollywood Spectra', 'Косметология', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'На месте татуировки покраснение, отёк или гной',
      'Под татуировкой появился рубец или узелок',
      'Изменилась родинка в зоне татуировки',
      'Ожог после домашнего «выводителя тату»',
    ],
    faq: [
      {
        question: 'Больно ли удалять татуировку?',
        answer:
          'Ощущение похоже на щелчок резинкой. При необходимости используют обезболивающий крем и охлаждение. Небольшая татуировка обрабатывается за несколько минут.',
      },
      {
        question: 'Татуировка уходит полностью?',
        answer:
          'В большинстве случаев она светлеет до незаметной или почти незаметной. Некоторые цвета (зелёный, жёлтый, белый) могут не уйти полностью — врач предупредит об этом заранее.',
      },
      {
        question: 'Какой интервал между сеансами?',
        answer:
          'Обычно 6–8 недель: коже нужно вывести раздробленный пигмент и восстановиться. Частые сеансы не ускоряют результат, а только травмируют кожу.',
      },
      {
        question: 'Не останется ли рубца?',
        answer:
          'При правильных параметрах и уходе рубцы редки. Риск повышают сдирание корочек и солнце. Уже имеющийся рубец корректируют лазером отдельно.',
      },
    ],
  },
  en: {
    summary:
      'Laser removal of tattoos and eyebrow tattooing: how the laser works, how many sessions it takes, how colour and depth affect the result, aftercare and contraindications.',
    body: enBody(),
    keyTakeaways: [
      'A tattoo clears over a course of sessions 6–8 weeks apart, not in one',
      'Black clears fastest; green, yellow and white are slowest',
      'The result shows over 4–8 weeks after each session',
      'Sun protection after treatment is a must',
      'Some cosmetic inks can darken, so a test spot comes first',
    ],
    tags: ['Tattoo removal', 'Laser', 'Eyebrow tattoo', 'Hollywood Spectra', 'Cosmetology', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Redness, swelling or pus at the tattoo',
      'A scar or lump forms under the tattoo',
      'A mole within the tattoo changes',
      'A burn after a home “tattoo remover”',
    ],
    faq: [
      {
        question: 'Does tattoo removal hurt?',
        answer:
          'It feels like a rubber band snapping. A numbing cream and cooling are used when needed. A small tattoo takes a few minutes.',
      },
      {
        question: 'Will the tattoo go completely?',
        answer:
          'In most cases it fades until it is invisible or nearly so. Some colours (green, yellow, white) may not clear fully, and the doctor tells you this beforehand.',
      },
      {
        question: 'How far apart should sessions be?',
        answer:
          'Usually 6–8 weeks: the skin needs time to clear the shattered ink and recover. More frequent sessions do not speed things up; they only harm the skin.',
      },
      {
        question: 'Will it leave a scar?',
        answer:
          'With the right settings and aftercare, scarring is uncommon. Picking crusts and sun exposure raise the risk. An existing scar is treated separately with laser.',
      },
    ],
  },
};

export const TATTOO_REMOVAL_ARTICLE: Article = {
  id: 'art-tatuirovka-olib-tashlash',
  slug: 'tatuirovka-olib-tashlash',
  title: {
    uz: 'Tatuirovkani lazer bilan olib tashlash: necha seans va qanday parvarish',
    ru: 'Лазерное удаление татуировки: сколько сеансов и какой уход',
    en: 'Laser Tattoo Removal: How Many Sessions and What Aftercare',
  },
  summary: {
    uz: TATTOO_REMOVAL_ARTICLE_CATALOG.uz.summary,
    ru: TATTOO_REMOVAL_ARTICLE_CATALOG.ru.summary,
    en: TATTOO_REMOVAL_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: TATTOO_REMOVAL_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: TATTOO_REMOVAL_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: TATTOO_REMOVAL_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Kodirova Dilafruzxon',
    ru: 'Кодирова Дилафрузхон',
    en: 'Dr. Dilafruzkhon Kodirova',
  },
  date: '2026-12-17',
  image: COVER.uz,
  images: COVER,
  views: 0,
};
