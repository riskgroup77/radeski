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
 * Melasma — the most common reason for "brown patches on the face" (condition page:
 * /conditions/teri-doglari; city pages /fargona/pigmentatsiya, /qoqon/pigmentatsiya). Main
 * points: it is chronic and driven by light and hormones, so sun protection comes first and
 * aggressive heat (strong peels, hot lasers) can make it darker; gentle laser toning helps.
 */

function uzBody(): string {
  return `Melazma — yuzda paydo bo'ladigan jigarrang yoki kulrang-jigarrang dog'lar. Ular ko'pincha yonoqlar, peshona, ustki lab va iyakda simmetrik joylashadi. Melazma xavfli emas va yuqmaydi, lekin surunkali kechadi, quyoshdan keyin qorayadi va ko'pchilik uchun jiddiy kosmetik muammo. Yaxshi xabar: to'g'ri tanlangan davolash va himoya bilan dog'larni sezilarli ochish mumkin.

## Melazma nima uchun paydo bo'ladi?

Melazmada teridagi pigment hujayralari — melanotsitlar — haddan tashqari faol bo'ladi. Buni qo'zg'atuvchi omillar:

- **quyosh nurlari** — ultrabinafsha va hatto ko'rinadigan yorug'lik; asosiy omil;
- **gormonlar** — homiladorlik (shuning uchun "homiladorlik niqobi" deyiladi), gormonal kontratseptivlar;
- **irsiyat** — oilada melazma bo'lganlarda ko'proq uchraydi;
- **issiqlik** — oshxona, sauna, issiq ish joyi;
- **terini ta'sirlovchi kosmetika** va agressiv muolajalar.

Melazma ko'pincha 20–50 yoshdagi ayollarda uchraydi, lekin erkaklarda ham bo'ladi.

## Melazmani boshqa dog'lardan qanday farqlash mumkin?

Yuzdagi har qanday dog' melazma emas:

- **quyosh dog'lari (lentigo)** — aniq chegarali, ko'pincha yoshi kattalarda;
- **akne va yallig'lanishdan keyingi dog'lar** — toshma o'rnida qoladi;
- **xollar va boshqa pigment hosilalari** — ularni albatta [dermatoskopiyada](/uz/articles/art-xol-tekshiruvi-dermatoskopiya) tekshirish kerak.

Shifokor ko'rik va dermatoskopiya bilan dog' turini va qanchalik chuqur joylashganini aniqlaydi — davolash usuli shunga bog'liq.

## Melazma qanday davolanadi?

Melazmani butunlay "o'chirib" bo'lmaydi, lekin uni ancha ochib, nazoratda ushlab turish mumkin. Davolash odatda bir necha bosqichdan iborat:

- **Quyoshdan qat'iy himoya** — har kuni, qishda va bulutli kunda ham, SPF 50 li keng spektrli krem, iloji bo'lsa tonal (rangli) — u ko'rinadigan yorug'likdan ham himoya qiladi. Busiz har qanday davolash samarasiz.
- **Tashqi vositalar** — pigmentni kamaytiruvchi kremlar; ularni va qo'llash sxemasini shifokor tanlaydi.
- **Yumshoq piling** — kurs bilan, terini ta'sirlamasdan.
- **Lazer toning** — [Hollywood Spectra](/uz/services/apparatnaya-kosmetologiya/hollywood-spectra-lutronic) kabi lazerlarda past energiyali protokollar pigmentni asta-sekin parchalaydi. Batafsil: [Hollywood Spectra bilan pigmentatsiyani davolash](/uz/articles/art-pigmentaciya-hollywood-spectra-radeski).

**Muhim:** kuchli piling, qizdiruvchi lazer va IPL melazmani qoraytirishi mumkin. Shuning uchun usul va energiyani faqat melazma bilan ishlash tajribasi bor shifokor tanlashi kerak. IPL va lazerning boshqa pigment turlaridagi imkoniyatlari haqida: [IPL Lumecca bilan pigmentatsiyani davolash](/uz/articles/art-ipl-lumecca-pigmentatsiya-radeski).

## Melazma qaytmasligi uchun

- Quyoshdan himoya kremini har kuni surting va 2–3 soatda yangilang.
- Keng soyabonli shlyapa va quyosh ko'zoynagi taqing.
- Sauna va issiq hammomni cheklang.
- Yangi gormonal dorilarni shifokor bilan kelishing.
- Dog'larni "oqartiruvchi" uy vositalari — limon, sirka, peroksid bilan ishqalamang: ular terini kuydiradi va dog'ni qoraytiradi.
- Natijani saqlash uchun shifokor tavsiya qilgan parvarish va qo'llab-quvvatlovchi muolajalarni davom ettiring.

## Farg'ona va Qo'qonda melazmani davolash

Radeski Skin Clinic'da dermatolog-kosmetolog dog'larni dermatoskop bilan tekshiradi, melazmani boshqa pigment turlaridan ajratadi va [apparat kosmetologiyasi](/uz/services/apparatnaya-kosmetologiya) imkoniyatlari bilan bosqichma-bosqich davolash rejasini tuzadi.

- [Teri dog'lari — qisqacha](/uz/conditions/teri-doglari);
- [Pigmentatsiyani davolash Farg'onada](/uz/fargona/pigmentatsiya);
- [Pigmentatsiyani davolash Qo'qonda](/uz/qoqon/pigmentatsiya).

Melazma bilan sabr kerak: natija bir necha haftada ko'rina boshlaydi, quyoshdan himoya esa umrbod odatga aylanishi kerak.`;
}

function ruBody(): string {
  return `Мелазма — коричневые или серо-коричневые пятна на лице. Чаще всего они расположены симметрично на щеках, лбу, над верхней губой и на подбородке. Мелазма не опасна и не заразна, но протекает хронически, темнеет после солнца и для многих становится серьёзной косметической проблемой. Хорошая новость: при правильно подобранном лечении и защите пятна можно заметно осветлить.

## Почему появляется мелазма?

При мелазме пигментные клетки кожи — меланоциты — работают слишком активно. Провоцируют это:

- **солнце** — ультрафиолет и даже видимый свет; главный фактор;
- **гормоны** — беременность (поэтому её называют «маской беременных»), гормональные контрацептивы;
- **наследственность** — чаще бывает, если мелазма есть у родственников;
- **тепло** — кухня, сауна, горячее рабочее место;
- **раздражающая косметика** и агрессивные процедуры.

Мелазма чаще встречается у женщин 20–50 лет, но бывает и у мужчин.

## Как отличить мелазму от других пятен?

Не каждое пятно на лице — мелазма:

- **солнечные лентиго** — пятна с чёткими границами, чаще у людей старшего возраста;
- **пятна после акне и воспаления** — остаются на месте высыпаний;
- **родинки и другие пигментные образования** — их обязательно нужно проверить на [дерматоскопии](/ru/articles/art-xol-tekshiruvi-dermatoskopiya).

При осмотре и дерматоскопии врач определяет тип пятна и глубину пигмента — от этого зависит метод лечения.

## Как лечат мелазму?

«Стереть» мелазму навсегда нельзя, но её можно заметно осветлить и держать под контролем. Лечение обычно состоит из нескольких шагов:

- **Строгая защита от солнца** — каждый день, даже зимой и в пасмурную погоду: крем SPF 50 широкого спектра, по возможности тональный — он защищает и от видимого света. Без этого любое лечение бесполезно.
- **Наружные средства** — кремы, уменьшающие пигмент; средство и схему подбирает врач.
- **Мягкие пилинги** — курсом, без раздражения кожи.
- **Лазерный тонинг** — щадящие протоколы с низкой энергией на лазерах вроде [Hollywood Spectra](/ru/services/apparatnaya-kosmetologiya/hollywood-spectra-lutronic) постепенно разрушают пигмент. Подробнее: [Лечение пигментации на Hollywood Spectra](/ru/articles/art-pigmentaciya-hollywood-spectra-radeski).

**Важно:** сильные пилинги, «горячие» лазеры и IPL могут сделать мелазму темнее. Поэтому метод и энергию должен выбирать врач с опытом лечения мелазмы. О возможностях IPL и лазеров при других видах пигментации: [Лечение пигментации IPL Lumecca](/ru/articles/art-ipl-lumecca-pigmentatsiya-radeski).

## Чтобы мелазма не возвращалась

- Наносите солнцезащитный крем каждый день и обновляйте его каждые 2–3 часа.
- Носите шляпу с широкими полями и солнцезащитные очки.
- Ограничьте сауну и горячую баню.
- Согласовывайте новые гормональные препараты с врачом.
- Не растирайте пятна «отбеливающими» домашними средствами — лимоном, уксусом, перекисью: они обжигают кожу и делают пятно темнее.
- Чтобы сохранить результат, продолжайте уход и поддерживающие процедуры, которые посоветует врач.

## Лечение мелазмы в Фергане и Коканде

В Radeski Skin Clinic дерматолог-косметолог осмотрит пятна дерматоскопом, отличит мелазму от других видов пигментации и составит поэтапный план лечения с возможностями [аппаратной косметологии](/ru/services/apparatnaya-kosmetologiya).

- [Пигментные пятна — коротко](/ru/conditions/teri-doglari);
- [Лечение пигментации в Фергане](/ru/fargona/pigmentatsiya);
- [Лечение пигментации в Коканде](/ru/qoqon/pigmentatsiya).

С мелазмой нужно терпение: результат начинает проявляться через несколько недель, а защита от солнца должна стать привычкой на всю жизнь.`;
}

function enBody(): string {
  return `Melasma is brown or grey-brown patches on the face, usually symmetrical on the cheeks, forehead, upper lip and chin. It is not dangerous or contagious, but it is chronic, darkens after sun exposure and is a real cosmetic concern for many people. The good news: with the right treatment and protection the patches can be lightened considerably.

## Why does melasma appear?

In melasma the skin's pigment cells — melanocytes — are overactive. Triggers include:

- **sunlight** — ultraviolet and even visible light; the main factor;
- **hormones** — pregnancy (hence the name "mask of pregnancy"), hormonal contraceptives;
- **genetics** — it is more common when relatives have it;
- **heat** — kitchens, saunas, hot workplaces;
- **irritating cosmetics** and aggressive procedures.

Melasma is most common in women aged 20–50, but men get it too.

## How to tell melasma from other spots

Not every patch on the face is melasma:

- **sun spots (lentigines)** — sharply defined, more common with age;
- **marks after acne and inflammation** — left where a rash was;
- **moles and other pigmented lesions** — these should always be checked with [dermoscopy](/en/articles/art-xol-tekshiruvi-dermatoskopiya).

An examination and dermoscopy show the type of spot and how deep the pigment lies — and that decides the treatment.

## How is melasma treated?

Melasma cannot be erased for good, but it can be lightened considerably and kept under control. Treatment usually has several steps:

- **Strict sun protection** — every day, even in winter and on cloudy days: broad-spectrum SPF 50, ideally tinted, which also blocks visible light. Without it, no treatment works.
- **Topical products** — pigment-reducing creams; the product and routine are chosen by the doctor.
- **Gentle peels** — as a course, without irritating the skin.
- **Laser toning** — gentle low-energy protocols on lasers such as [Hollywood Spectra](/en/services/apparatnaya-kosmetologiya/hollywood-spectra-lutronic) break the pigment down gradually. More: [Pigmentation treatment with Hollywood Spectra](/en/articles/art-pigmentaciya-hollywood-spectra-radeski).

**Important:** strong peels, "hot" lasers and IPL can make melasma darker. That is why the method and energy should be chosen by a doctor experienced with melasma. On IPL and lasers for other types of pigmentation: [Pigmentation treatment with IPL Lumecca](/en/articles/art-ipl-lumecca-pigmentatsiya-radeski).

## Keeping melasma from coming back

- Apply sunscreen every day and reapply every 2–3 hours.
- Wear a wide-brimmed hat and sunglasses.
- Limit saunas and hot baths.
- Discuss any new hormonal medicine with your doctor.
- Do not rub patches with "whitening" home remedies — lemon, vinegar, peroxide: they burn the skin and darken the patch.
- Keep up the skin care and maintenance treatments your doctor recommends to hold the result.

## Melasma treatment in Fergana and Kokand

At Radeski Skin Clinic a dermatologist-cosmetologist examines the patches with a dermatoscope, tells melasma apart from other pigmentation and builds a step-by-step plan using [aesthetic device treatments](/en/services/apparatnaya-kosmetologiya).

- [Skin spots — in brief](/en/conditions/teri-doglari);
- [Pigmentation treatment in Fergana](/en/fargona/pigmentatsiya);
- [Pigmentation treatment in Kokand](/en/qoqon/pigmentatsiya).

Melasma takes patience: results start to show within weeks, and sun protection has to become a lifelong habit.`;
}

export const MELASMA_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Melazma — yuzdagi jigarrang dog'lar: sabablari (quyosh, gormonlar), boshqa dog'lardan farqi, quyoshdan himoya, kremlar, piling va lazer toning. Farg'ona va Qo'qonda dermatolog-kosmetolog.",
    body: uzBody(),
    keyTakeaways: [
      "Melazma xavfli emas, lekin surunkali va quyoshdan keyin qorayadi",
      "Asosiy omillar — quyosh nuri, gormonlar va irsiyat",
      'Har kuni SPF 50 — davolashning birinchi va majburiy sharti',
      "Kuchli piling, qizdiruvchi lazer va IPL melazmani qoraytirishi mumkin",
      "Past energiyali lazer toning va shifokor tanlagan kremlar dog'larni ochadi",
    ],
    tags: ['Melazma', "Yuzdagi dog'lar", 'Pigmentatsiya', 'Lazer toning', 'Kosmetolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Yuzda jigarrang dog'lar paydo bo'lib, kattalashsa",
      "Dog'lar homiladorlik yoki gormonal dorilardan keyin chiqsa",
      'Uy vositalari va kremlar yordam bermasa',
      "Dog' notekis, bir necha rangli yoki o'zgaruvchan bo'lsa",
      'Lazer yoki pilingdan keyin dog\' qoraygan bo\'lsa',
    ],
    faq: [
      {
        question: 'Melazma butunlay o\'tib ketadimi?',
        answer:
          "Ba'zan homiladorlikdan keyin yoki gormonal dori to'xtatilganda melazma o'zi ochiladi. Ko'pincha esa u surunkali kechadi: davolash bilan dog'lar sezilarli ochiladi, lekin quyosh ta'sirida qaytishi mumkin — shuning uchun himoya doimiy bo'lishi kerak.",
      },
      {
        question: 'Melazmani lazer bilan olib tashlash mumkinmi?',
        answer:
          "Mumkin, lekin ehtiyotkorlik bilan. Past energiyali lazer toning pigmentni asta-sekin parchalaydi. Kuchli, qizdiruvchi lazer esa melazmani qoraytirishi mumkin — protokolni tajribali shifokor tanlashi kerak.",
      },
      {
        question: 'Qishda ham quyoshdan himoya kremi kerakmi?',
        answer:
          "Ha. Qishda ham ultrabinafsha va ko'rinadigan yorug'lik teriga yetib boradi, deraza orqali ham. Melazmada SPF 50 krem yil bo'yi har kuni surtiladi.",
      },
      {
        question: 'Homiladorlikda melazmani davolash mumkinmi?',
        answer:
          "Homiladorlikda asosiy vosita — quyoshdan himoya. Ko'pgina pigmentga qarshi vositalar va muolajalar bu davrda qo'llanmaydi. Faol davolash rejasini shifokor tug'ruq va emizishdan keyin tuzadi.",
      },
      {
        question: "Farg'ona va Qo'qonda melazmani qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog-kosmetolog dog'larni dermatoskop bilan tekshiradi va himoya, kremlar va lazer toningdan iborat reja tuzadi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Мелазма — коричневые пятна на лице: причины (солнце, гормоны), отличие от других пятен, защита от солнца, кремы, пилинги и лазерный тонинг. Дерматолог-косметолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Мелазма не опасна, но хроническая и темнеет после солнца',
      'Главные факторы — солнце, гормоны и наследственность',
      'SPF 50 каждый день — первое и обязательное условие лечения',
      'Сильные пилинги, «горячие» лазеры и IPL могут сделать мелазму темнее',
      'Щадящий лазерный тонинг и кремы, подобранные врачом, осветляют пятна',
    ],
    tags: ['Мелазма', 'Пигментные пятна', 'Пигментация на лице', 'Лазерный тонинг', 'Косметолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'На лице появились и растут коричневые пятна',
      'Пятна появились после беременности или гормональных препаратов',
      'Домашние средства и кремы не помогают',
      'Пятно неровное, разноцветное или меняется',
      'Пятно потемнело после лазера или пилинга',
    ],
    faq: [
      {
        question: 'Проходит ли мелазма полностью?',
        answer:
          'Иногда мелазма бледнеет сама после беременности или отмены гормональных препаратов. Чаще она хроническая: при лечении пятна заметно светлеют, но под солнцем могут вернуться — поэтому защита нужна постоянно.',
      },
      {
        question: 'Можно ли удалить мелазму лазером?',
        answer:
          'Можно, но осторожно. Лазерный тонинг с низкой энергией постепенно разрушает пигмент. Сильный «горячий» лазер может сделать мелазму темнее — протокол должен подбирать опытный врач.',
      },
      {
        question: 'Нужен ли солнцезащитный крем зимой?',
        answer:
          'Да. Ультрафиолет и видимый свет достигают кожи и зимой, и даже через окно. При мелазме крем SPF 50 наносят каждый день круглый год.',
      },
      {
        question: 'Можно ли лечить мелазму при беременности?',
        answer:
          'Во время беременности главное средство — защита от солнца. Многие средства и процедуры против пигментации в этот период не применяют. Активное лечение врач назначает после родов и кормления грудью.',
      },
      {
        question: 'Где лечить мелазму в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог-косметолог осмотрит пятна дерматоскопом и составит план из защиты, кремов и лазерного тонинга. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Melasma — brown patches on the face: causes (sun, hormones), how it differs from other spots, sun protection, creams, peels and laser toning. Dermatologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Melasma is not dangerous, but it is chronic and darkens in the sun',
      'The main factors are sunlight, hormones and genetics',
      'Daily SPF 50 is the first and essential part of treatment',
      'Strong peels, "hot" lasers and IPL can darken melasma',
      'Gentle laser toning and doctor-chosen creams lighten the patches',
    ],
    tags: ['Melasma', 'Facial pigmentation', 'Dark spots', 'Laser toning', 'Cosmetologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Brown patches appear on your face and grow',
      'Patches appear after pregnancy or hormonal medicines',
      'Home remedies and creams do not help',
      'A spot is irregular, multicoloured or changing',
      'A patch darkened after a laser or peel',
    ],
    faq: [
      {
        question: 'Does melasma go away completely?',
        answer:
          'Sometimes it fades on its own after pregnancy or after stopping hormonal medicines. More often it is chronic: treatment lightens the patches considerably, but the sun can bring them back — so protection must be constant.',
      },
      {
        question: 'Can melasma be removed with a laser?',
        answer:
          'Yes, but carefully. Low-energy laser toning breaks the pigment down gradually. A strong "hot" laser can darken melasma — the protocol should be chosen by an experienced doctor.',
      },
      {
        question: 'Do I need sunscreen in winter?',
        answer:
          'Yes. Ultraviolet and visible light reach the skin in winter too, even through windows. With melasma, SPF 50 is applied every day all year round.',
      },
      {
        question: 'Can melasma be treated during pregnancy?',
        answer:
          'During pregnancy the main tool is sun protection. Many anti-pigment products and procedures are not used then. The doctor plans active treatment after birth and breastfeeding.',
      },
      {
        question: 'Where can I get melasma treated in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist-cosmetologist examines the patches with a dermatoscope and builds a plan of protection, creams and laser toning. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const MELASMA_ARTICLE: Article = {
  id: 'art-melazma',
  slug: 'melazma',
  title: {
    uz: "Melazma: yuzdagi jigarrang dog'lar — sabablari va zamonaviy davolash",
    ru: 'Мелазма: коричневые пятна на лице — причины и современное лечение',
    en: 'Melasma: Brown Patches on the Face — Causes and Modern Treatment',
  },
  summary: {
    uz: MELASMA_ARTICLE_CATALOG.uz.summary,
    ru: MELASMA_ARTICLE_CATALOG.ru.summary,
    en: MELASMA_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: MELASMA_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: MELASMA_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: MELASMA_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Mangasaryan Lorena Georgievna',
    ru: 'Мангасарян Лорена Георгиевна',
    en: 'Dr. Lorena Georgievna Mangasaryan',
  },
  date: '2026-11-03',
  image: '/articles/melazma-cover.jpg',
  images: {
    uz: '/articles/melazma-cover.jpg',
    ru: '/articles/melazma-cover.jpg',
    en: '/articles/melazma-cover.jpg',
  },
  views: 0,
};
