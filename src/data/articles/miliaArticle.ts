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
 * Milia — the small white "seeds" around the eyes that people try to squeeze like pimples.
 * Points: what they are (keratin cysts, not acne), why squeezing fails, newborns, look-alikes
 * that need a doctor (xanthelasma, syringoma, basal cell carcinoma), removal at the clinic.
 */

function uzBody(): string {
  return `Milium — terida paydo bo'ladigan mayda (1–2 mm), qattiq, oq yoki sarg'ish donachalar. Ular ko'pincha ko'z atrofida, qovoqlarda, yonoq va burunda chiqadi. Xalq orasida ularni "oq husnbuzar" yoki "tariq" deyishadi. Milium xavfli emas, lekin yuzda yaqqol ko'rinadi va uni siqib chiqarishga urinish ko'pincha iz qoldiradi.

## Milium nima?

Milium — terining yuzaki qatlamida keratin (shox modda) to'planib qolgan kichik kista. U yog' bezining tiqilishi emas, shuning uchun:

- akne emas va ichida yiring yo'q;
- teshigi yo'q — barmoq bilan siqib chiqarib bo'lmaydi;
- yallig'lanmaydi va odatda og'rimaydi.

## Nima uchun paydo bo'ladi?

- **Chaqaloqlarda** — ko'p uchraydi va bir necha haftada o'z-o'zidan o'tib ketadi; davolash kerak emas.
- **Og'ir, yog'li kremlar** — ayniqsa ko'z atrofida, terini "bo'g'ib" qo'yadi.
- **Quyoshda uzoq qolish** — teri qalinlashadi va yangilanishi sekinlashadi.
- **Teri shikastlanishidan keyin** — kuyish, chuqur piling, lazer yoki ishqalanish o'rnida.
- **Ba'zi teri kasalliklari** va uzoq gormonli krem surtish.

## Nega uyda siqib bo'lmaydi?

Miliumning teshigi yo'q: siqilganda u chiqmaydi, teri esa shikastlanadi. Natija — qizarish, qobiq, infeksiya va keyinchalik dog' yoki kichik chandiq. Igna bilan "teshish" ham xavfli, ayniqsa ko'z yaqinida.

## O'xshash hosilalar — shifokor ko'rigi kerak

Ko'z atrofidagi har qanday oq yoki sarg'ish donacha milium emas:

- **ksantelazma** — qovoqlardagi yassi sarg'ish dog'lar; qondagi xolesterinni tekshirish kerak bo'lishi mumkin;
- **siringoma** — ter bezlarining mayda o'smalari, ko'pincha bir nechta;
- **bazalioma** — sadafsimon, sekin kattalashadigan tugun; batafsil: [bazalioma](/uz/articles/art-bazalioma-teri-raki).

Shuning uchun olib tashlashdan oldin shifokor hosilani dermatoskop bilan ko'radi.

## Klinikada qanday olib tashlanadi?

- **Mexanik usul** — shifokor steril asbob bilan teri ustida mikrokesik qilib, kistani butunligicha chiqaradi; bir necha daqiqa davom etadi, iz qoldirmaydi.
- **CO₂ lazer** — ko'p yoki qayta-qayta chiqadigan miliumlarda; batafsil: [CO₂ lazer](/uz/articles/art-co2-lazer-deka).

Muolajadan keyin 1–3 kun yengil qizarish bo'lishi mumkin. Pardozni shifokor aytgan vaqtdan keyin qo'llang.

## Milium qaytmasligi uchun

- Ko'z atrofiga yengil, "komedogen emas" deb belgilangan vositalar surting.
- Kechasi og'ir yog'li kremlardan voz keching.
- Yumshoq tozalash va muntazam, lekin agressiv bo'lmagan eksfoliatsiya qiling.
- Quyoshdan himoya kremini ishlating.

O'xshash, lekin boshqa o'simtalar haqida: [papillomalar](/uz/articles/art-papilloma-olib-tashlash), [seboreyali keratoz](/uz/articles/art-seboreyali-keratoz).

## Farg'ona va Qo'qonda miliumni olib tashlash

Radeski Skin Clinic'da dermatolog-kosmetolog hosilani tekshiradi, uni boshqa o'simtalardan ajratadi va miliumni xavfsiz olib tashlaydi.

- [Kosmetolog Farg'onada](/uz/fargona/kosmetolog) va [Qo'qonda](/uz/qoqon/kosmetolog);
- [Apparat kosmetologiyasi](/uz/services/apparatnaya-kosmetologiya).

Miliumni siqmang: shifokorda u bir necha daqiqada izsiz olib tashlanadi.`;
}

function ruBody(): string {
  return `Милиумы — мелкие (1–2 мм) плотные белые или желтоватые «зёрнышки» на коже. Чаще всего они появляются вокруг глаз, на веках, щеках и носу. В народе их называют «белыми угрями» или «просянкой». Милиумы не опасны, но заметны на лице, а попытка их выдавить часто оставляет след.

## Что такое милиум?

Милиум — маленькая киста в поверхностном слое кожи, в которой скопился кератин (роговое вещество). Это не закупорка сальной железы, поэтому:

- это не акне и внутри нет гноя;
- у него нет отверстия — выдавить пальцами нельзя;
- он не воспаляется и обычно не болит.

## Почему появляются?

- **У новорождённых** — встречаются часто и проходят сами за несколько недель; лечить не нужно.
- **Тяжёлые жирные кремы** — особенно вокруг глаз, «душат» кожу.
- **Долгое пребывание на солнце** — кожа утолщается и медленнее обновляется.
- **После повреждения кожи** — на месте ожога, глубокого пилинга, лазера или трения.
- **Некоторые кожные заболевания** и длительное применение гормональных кремов.

## Почему нельзя выдавливать дома?

У милиума нет выхода: при сдавливании он не выходит, а кожа травмируется. Результат — покраснение, корочка, инфекция и потом пятно или маленький рубец. «Прокалывать» иглой тоже опасно, особенно рядом с глазом.

## Похожие образования — нужен осмотр врача

Не каждое белое или желтоватое зёрнышко у глаз — милиум:

- **ксантелазма** — плоские желтоватые бляшки на веках; может понадобиться анализ на холестерин;
- **сирингома** — мелкие опухоли потовых желёз, обычно несколько;
- **базалиома** — перламутровый, медленно растущий узелок; подробнее: [базалиома](/ru/articles/art-bazalioma-teri-raki).

Поэтому перед удалением врач осматривает образование дерматоскопом.

## Как удаляют в клинике?

- **Механически** — врач стерильным инструментом делает микронадрез над кистой и извлекает её целиком; занимает несколько минут и не оставляет следа.
- **CO₂-лазер** — при множественных или повторяющихся милиумах; подробнее: [CO₂-лазер](/ru/articles/art-co2-lazer-deka).

После процедуры 1–3 дня возможно лёгкое покраснение. Косметику наносите через срок, который скажет врач.

## Чтобы милиумы не возвращались

- Вокруг глаз используйте лёгкие средства с пометкой «некомедогенно».
- Откажитесь от тяжёлых жирных кремов на ночь.
- Мягко очищайте кожу и делайте регулярную, но неагрессивную эксфолиацию.
- Пользуйтесь солнцезащитным кремом.

О похожих, но других образованиях: [папилломы](/ru/articles/art-papilloma-olib-tashlash), [себорейный кератоз](/ru/articles/art-seboreyali-keratoz).

## Удаление милиумов в Фергане и Коканде

В Radeski Skin Clinic дерматолог-косметолог осмотрит образование, отличит его от других опухолей и безопасно удалит милиумы.

- [Косметолог в Фергане](/ru/fargona/kosmetolog) и [в Коканде](/ru/qoqon/kosmetolog);
- [Аппаратная косметология](/ru/services/apparatnaya-kosmetologiya).

Не выдавливайте милиумы: у врача их удаляют за несколько минут и без следа.`;
}

function enBody(): string {
  return `Milia are tiny (1–2 mm), firm, white or yellowish "seeds" in the skin. They most often appear around the eyes, on the eyelids, cheeks and nose. They are harmless, but noticeable on the face — and trying to squeeze them out often leaves a mark.

## What are milia?

A milium is a small cyst in the top layer of the skin filled with keratin. It is not a blocked oil gland, so:

- it is not acne and there is no pus inside;
- it has no opening — it cannot be squeezed out with fingers;
- it does not get inflamed and usually does not hurt.

## Why do they appear?

- **In newborns** — very common and clear on their own within weeks; no treatment needed.
- **Heavy, greasy creams** — especially around the eyes, they "smother" the skin.
- **Long sun exposure** — the skin thickens and renews more slowly.
- **After skin damage** — at the site of a burn, deep peel, laser or friction.
- **Some skin conditions** and long-term use of steroid creams.

## Why not squeeze them at home?

A milium has no way out: squeezing does not remove it but injures the skin. The result is redness, crusting, infection and later a mark or tiny scar. Pricking it with a needle is risky too, especially near the eye.

## Look-alikes that need a doctor

Not every white or yellowish bump near the eyes is a milium:

- **xanthelasma** — flat yellowish plaques on the eyelids; a cholesterol test may be needed;
- **syringoma** — tiny benign sweat-gland growths, usually several;
- **basal cell carcinoma** — a pearly, slowly growing bump; more: [basal cell carcinoma](/en/articles/art-bazalioma-teri-raki).

That is why the doctor examines the bump with a dermatoscope before removing it.

## How are they removed at the clinic?

- **Mechanically** — the doctor makes a micro-incision over the cyst with a sterile instrument and lifts it out whole; it takes minutes and leaves no mark.
- **CO₂ laser** — for many or recurring milia; more: [CO₂ laser](/en/articles/art-co2-lazer-deka).

There may be mild redness for 1–3 days. Wait as long as the doctor advises before applying make-up.

## Keeping milia from coming back

- Use light, "non-comedogenic" products around the eyes.
- Avoid heavy, greasy night creams.
- Cleanse gently and exfoliate regularly but not aggressively.
- Use sunscreen.

For similar but different growths: [papillomas](/en/articles/art-papilloma-olib-tashlash), [seborrheic keratosis](/en/articles/art-seboreyali-keratoz).

## Milia removal in Fergana and Kokand

At Radeski Skin Clinic a dermatologist-cosmetologist examines the bump, tells it apart from other growths and removes milia safely.

- [Cosmetologist in Fergana](/en/fargona/kosmetolog) and [in Kokand](/en/qoqon/kosmetolog);
- [Aesthetic device treatments](/en/services/apparatnaya-kosmetologiya).

Do not squeeze milia: a doctor removes them in minutes without a trace.`;
}

export const MILIA_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Milium — ko'z atrofidagi mayda oq donachalar: nima, nega akne emas, nega siqib bo'lmaydi, o'xshash hosilalar va klinikada xavfsiz olib tashlash. Farg'ona va Qo'qonda kosmetolog.",
    body: uzBody(),
    keyTakeaways: [
      "Milium — keratin to'plangan mayda kista, akne emas",
      "Teshigi yo'q — siqib chiqarib bo'lmaydi, urinish iz qoldiradi",
      "Chaqaloqlardagi milium o'z-o'zidan o'tadi",
      "Ksantelazma, siringoma va bazaliomadan farqlash uchun shifokor ko'rigi kerak",
      "Klinikada steril asbob yoki CO₂ lazer bilan bir necha daqiqada, izsiz olib tashlanadi",
    ],
    tags: ['Milium', "Oq donachalar", "Ko'z atrofi", 'Kosmetolog', 'CO₂ lazer', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Milium ko'payib borsa yoki xalaqit bersa",
      "Qovoqlarda yassi sarg'ish dog'lar paydo bo'lsa",
      "Donacha kattalashsa, sadafsimon bo'lsa yoki qonasa",
      "Siqishdan keyin qizarish va yallig'lanish bo'lsa",
      "Milium terining shikastlanishidan keyin ko'p chiqsa",
    ],
    faq: [
      {
        question: 'Milium o\'z-o\'zidan o\'tadimi?',
        answer:
          "Chaqaloqlarda — ha, bir necha haftada. Kattalarda milium ko'pincha oylab yoki yillab saqlanadi va olib tashlashni talab qiladi.",
      },
      {
        question: 'Miliumni olib tashlash og\'riqlimi?',
        answer:
          "Deyarli yo'q. Shifokor steril asbob bilan mikrokesik qilib, kistani chiqaradi; muolaja bir necha daqiqa davom etadi. Kerak bo'lsa mahalliy og'riqsizlantirish qo'llanadi.",
      },
      {
        question: 'Milium qaytadimi?',
        answer:
          "Olib tashlangan milium qaytmaydi, lekin yangilari paydo bo'lishi mumkin. Yengil kremlar, yumshoq eksfoliatsiya va quyoshdan himoya buni kamaytiradi.",
      },
      {
        question: 'Milium va oq husnbuzarning farqi nima?',
        answer:
          "Oq husnbuzar (yopiq komedon) yog' bezining tiqilishi, u ko'pincha yallig'lanadi. Milium esa keratinli kista: qattiq, yallig'lanmaydi va siqilganda chiqmaydi.",
      },
      {
        question: "Farg'ona va Qo'qonda miliumni qayerda olib tashlash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog-kosmetolog miliumni tekshiradi va xavfsiz olib tashlaydi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Милиумы — мелкие белые зёрнышки вокруг глаз: что это, почему не акне, почему их нельзя выдавить, похожие образования и безопасное удаление в клинике. Косметолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Милиум — маленькая киста с кератином, а не акне',
      'У него нет отверстия — выдавить нельзя, попытки оставляют следы',
      'Милиумы у новорождённых проходят сами',
      'Чтобы отличить от ксантелазмы, сирингомы и базалиомы, нужен осмотр врача',
      'В клинике их удаляют стерильным инструментом или CO₂-лазером за минуты и без следа',
    ],
    tags: ['Милиумы', 'Белые точки на лице', 'Просянка', 'Косметолог', 'CO₂-лазер', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Милиумов становится больше или они мешают',
      'На веках появились плоские желтоватые бляшки',
      'Зёрнышко растёт, перламутровое или кровоточит',
      'После выдавливания покраснение и воспаление',
      'Много милиумов после повреждения кожи',
    ],
    faq: [
      {
        question: 'Проходят ли милиумы сами?',
        answer:
          'У новорождённых — да, за несколько недель. У взрослых милиумы часто сохраняются месяцами и годами и требуют удаления.',
      },
      {
        question: 'Больно ли удалять милиумы?',
        answer:
          'Почти нет. Врач делает микронадрез стерильным инструментом и извлекает кисту; процедура занимает несколько минут. При необходимости используют местную анестезию.',
      },
      {
        question: 'Возвращаются ли милиумы?',
        answer:
          'Удалённый милиум не возвращается, но могут появиться новые. Лёгкие кремы, мягкая эксфолиация и защита от солнца снижают этот риск.',
      },
      {
        question: 'Чем милиум отличается от белого угря?',
        answer:
          'Белый угорь (закрытый комедон) — закупорка сальной железы, он часто воспаляется. Милиум — кератиновая киста: плотный, не воспаляется и не выдавливается.',
      },
      {
        question: 'Где удалить милиумы в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог-косметолог осмотрит милиумы и безопасно их удалит. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Milia — tiny white bumps around the eyes: what they are, why they are not acne, why they cannot be squeezed, look-alikes and safe removal at the clinic. Cosmetologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'A milium is a tiny keratin cyst, not acne',
      'It has no opening — it cannot be squeezed out, and trying leaves marks',
      'Milia in newborns clear on their own',
      'A doctor should rule out xanthelasma, syringoma and basal cell carcinoma',
      'At the clinic they are removed with a sterile instrument or CO₂ laser in minutes, without a trace',
    ],
    tags: ['Milia', 'White bumps on face', 'Around the eyes', 'Cosmetologist', 'CO₂ laser', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Milia are multiplying or bother you',
      'Flat yellowish plaques appear on the eyelids',
      'A bump grows, looks pearly or bleeds',
      'Redness and inflammation after squeezing',
      'Many milia after skin damage',
    ],
    faq: [
      {
        question: 'Do milia go away on their own?',
        answer:
          'In newborns, yes, within weeks. In adults they often last months or years and need removing.',
      },
      {
        question: 'Does milia removal hurt?',
        answer:
          'Hardly. The doctor makes a micro-incision with a sterile instrument and lifts the cyst out; it takes a few minutes. Local anaesthetic is used if needed.',
      },
      {
        question: 'Do milia come back?',
        answer:
          'A removed milium does not come back, but new ones can appear. Light creams, gentle exfoliation and sun protection reduce the risk.',
      },
      {
        question: 'How is a milium different from a whitehead?',
        answer:
          'A whitehead (closed comedone) is a blocked oil gland and often gets inflamed. A milium is a keratin cyst: firm, not inflamed and impossible to squeeze out.',
      },
      {
        question: 'Where can I have milia removed in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist-cosmetologist examines and safely removes milia. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const MILIA_ARTICLE: Article = {
  id: 'art-milium',
  slug: 'milium',
  title: {
    uz: "Milium: ko'z atrofidagi oq donachalar — nima va qanday xavfsiz olib tashlanadi",
    ru: 'Милиумы: белые точки вокруг глаз — что это и как безопасно удалить',
    en: 'Milia: White Bumps Around the Eyes — What They Are and How to Remove Them Safely',
  },
  summary: {
    uz: MILIA_ARTICLE_CATALOG.uz.summary,
    ru: MILIA_ARTICLE_CATALOG.ru.summary,
    en: MILIA_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: MILIA_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: MILIA_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: MILIA_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Mangasaryan Lorena Georgievna',
    ru: 'Мангасарян Лорена Георгиевна',
    en: 'Dr. Lorena Georgievna Mangasaryan',
  },
  date: '2026-11-19',
  image: '/articles/milium-cover.webp',
  images: {
    uz: '/articles/milium-cover.webp',
    ru: '/articles/milium-cover.webp',
    en: '/articles/milium-cover.webp',
  },
  views: 0,
};
