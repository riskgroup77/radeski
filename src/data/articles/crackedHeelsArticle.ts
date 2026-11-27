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
 * Cracked heels — a seasonal podiatry article (dry air in winter). Points: causes beyond dry
 * skin (fungus, eczema, psoriasis, diabetes, thyroid), why deep cracks are a wound, home care
 * that works (urea creams, socks overnight), podiatric treatment, and when it is a disease.
 */

function uzBody(): string {
  return `Tovon yoriqlari — tovon terisining qurib, qalinlashib, yorilishi. Ko'pchilik buni oddiy kosmetik muammo deb biladi. Lekin chuqur yoriqlar og'riq beradi, qonaydi va infeksiya uchun ochiq eshikka aylanadi. Qishda, havo quruq bo'lganda, yoriqlar ayniqsa ko'payadi.

## Tovon nima uchun yoriladi?

- **Quruq teri** — sovuq havo, isitish moslamalari, issiq suv va sovun terining namligini oladi.
- **Qalinlashgan teri** — tovonga doimiy bosim tushganda teri qalinlashadi va elastikligini yo'qotadi; qalin qatlam yuk ostida yoriladi.
- **Ochiq poshnali poyabzal va yalangoyoq yurish** — tovon yon tomonga "yoyiladi".
- **Ortiqcha vazn va uzoq tik turish.**
- **Kasalliklar** — oyoq zamburug'i, ekzema, psoriaz, qandli diabet, qalqonsimon bez kasalliklari.

Agar tovon yoriqlari parvarishga qaramay o'tmasa yoki qichishish, po'st tashlash bilan birga kelsa, sabab ko'pincha kasallikda: masalan, [teri zamburug'i](/uz/articles/art-teri-zamburugi) yoki [ekzema](/uz/articles/art-ekzema).

## Xavfli belgilar

- yoriq chuqur, qonaydi yoki og'riydi;
- atrofida qizarish, shish, yiring paydo bo'lsa;
- qandli diabet bor odamda har qanday yoriq — u yaraga aylanishi mumkin.

## Uyda to'g'ri parvarish

- Oyoqni iliq (issiq emas) suvda 10 daqiqa yumshating, keyin pemza bilan yengil ishqalang — qattiq ishqalamang.
- Har kuni kechqurun **mochevina (urea) tutgan krem** surting — u qalin terini yumshatadi va namlikni ushlaydi.
- Krem surtgandan keyin paxta paypoq kiyib uxlang.
- Yopiq, qulay poyabzal kiying, yalangoyoq yurmang.
- Kun davomida yetarli suv iching.

Odatda muntazam parvarish bilan 2–3 haftada sezilarli yaxshilanish bo'ladi.

**Mumkin emas:** qalin terini pichoq yoki ustara bilan kesish, yoriqlarga spirt va yod quyish, qonayotgan yoriqqa skrab qilish.

## Podolog qanday yordam beradi?

- **Apparat bilan ishlov** — qalinlashgan teri og'riqsiz olib tashlanadi, yoriq chetlari tekislanadi; shundan keyin yoriqlar tezroq bitadi.
- **Sababni aniqlash** — zamburug', ekzema yoki boshqa kasallik shubhasi bo'lsa, dermatolog bilan birga tekshiriladi.
- **Parvarish rejasi** — krem, poyabzal va kerak bo'lsa ichki taglik bo'yicha tavsiyalar.

Tovon terisining qalinlashishi qadoqlar bilan bog'liq bo'lsa: [qadoq va kesaklar](/uz/articles/art-qadoq-va-kesak).

## Farg'ona va Qo'qonda tovon yoriqlarini davolash

Radeski Skin Clinic'ning [tirnoq va oyoq patologiyasi klinikasida](/uz/services/clinika-patologii-nogtej) podolog tovonga og'riqsiz ishlov beradi, yoriqlar sababini aniqlaydi va parvarish rejasini tuzadi.

- [Podolog Farg'onada](/uz/fargona/podolog) va [Qo'qonda](/uz/qoqon/podolog);
- qishki parvarish haqida: [qishda teri parvarishi](/uz/articles/art-qishda-teri-parvarishi).

Tovon yoriqlarini erta davolash oson: kichik yoriqni krem va parvarish bitiradi, chuqur yoriqqa esa mutaxassis kerak bo'ladi.`;
}

function ruBody(): string {
  return `Трещины на пятках — это сухость и утолщение кожи пяток, которая лопается. Многие считают это просто косметической проблемой. Но глубокие трещины болят, кровоточат и становятся открытыми воротами для инфекции. Зимой, когда воздух сухой, трещин становится особенно много.

## Почему трескаются пятки?

- **Сухая кожа** — холодный воздух, отопление, горячая вода и мыло забирают влагу.
- **Утолщённая кожа** — от постоянного давления кожа пятки утолщается и теряет эластичность; толстый слой под нагрузкой лопается.
- **Обувь с открытой пяткой и ходьба босиком** — пятка «распластывается» в стороны.
- **Лишний вес и долгое стояние.**
- **Заболевания** — грибок стопы, экзема, псориаз, сахарный диабет, болезни щитовидной железы.

Если трещины не проходят, несмотря на уход, или сопровождаются зудом и шелушением, причиной часто бывает болезнь: например, [грибок кожи](/ru/articles/art-teri-zamburugi) или [экзема](/ru/articles/art-ekzema).

## Тревожные признаки

- трещина глубокая, кровоточит или болит;
- вокруг появились покраснение, отёк, гной;
- у человека с сахарным диабетом любая трещина — она может превратиться в язву.

## Правильный уход дома

- Распарьте стопы в тёплой (не горячей) воде 10 минут, затем мягко обработайте пемзой — не трите сильно.
- Каждый вечер наносите **крем с мочевиной (urea)** — он смягчает утолщённую кожу и удерживает влагу.
- После крема надевайте хлопковые носки на ночь.
- Носите закрытую удобную обувь, не ходите босиком.
- Пейте достаточно воды.

Обычно при регулярном уходе заметное улучшение наступает за 2–3 недели.

**Нельзя:** срезать огрубевшую кожу ножом или лезвием, заливать трещины спиртом и йодом, делать скраб по кровоточащей трещине.

## Как помогает подолог?

- **Аппаратная обработка** — утолщённая кожа безболезненно удаляется, края трещин выравниваются; после этого трещины заживают быстрее.
- **Поиск причины** — при подозрении на грибок, экзему или другое заболевание стопы обследуют вместе с дерматологом.
- **План ухода** — рекомендации по крему, обуви и при необходимости стелькам.

Если утолщение кожи на пятке связано с мозолями: [мозоли и натоптыши](/ru/articles/art-qadoq-va-kesak).

## Лечение трещин на пятках в Фергане и Коканде

В [клинике патологии ногтей и стопы](/ru/services/clinika-patologii-nogtej) Radeski Skin Clinic подолог безболезненно обработает пятки, найдёт причину трещин и составит план ухода.

- [Подолог в Фергане](/ru/fargona/podolog) и [в Коканде](/ru/qoqon/podolog);
- о зимнем уходе: [уход за кожей зимой](/ru/articles/art-qishda-teri-parvarishi).

Трещины на пятках легко вылечить на ранней стадии: маленькую трещину заживят крем и уход, а при глубокой нужен специалист.`;
}

function enBody(): string {
  return `Cracked heels happen when the skin of the heels dries out, thickens and splits. Many people think of it as a cosmetic issue. But deep cracks hurt, bleed and become an open door for infection. In winter, when the air is dry, cracks become especially common.

## Why do heels crack?

- **Dry skin** — cold air, heating, hot water and soap strip away moisture.
- **Thickened skin** — constant pressure makes the heel skin thick and inflexible; the thick layer splits under load.
- **Open-back shoes and walking barefoot** — the heel spreads sideways.
- **Excess weight and long hours standing.**
- **Medical conditions** — athlete's foot, eczema, psoriasis, diabetes, thyroid disease.

If cracks do not heal despite good care, or come with itching and flaking, the cause is often a condition such as a [fungal infection](/en/articles/art-teri-zamburugi) or [eczema](/en/articles/art-ekzema).

## Warning signs

- a crack is deep, bleeds or hurts;
- redness, swelling or pus around it;
- any crack in someone with diabetes — it can turn into an ulcer.

## Good home care

- Soak your feet in warm (not hot) water for 10 minutes, then gently use a pumice stone — do not scrub hard.
- Apply a **urea cream** every evening — it softens thick skin and holds in moisture.
- Put on cotton socks overnight after the cream.
- Wear closed, comfortable shoes and avoid walking barefoot.
- Drink enough water.

With regular care, most people see a clear improvement in 2–3 weeks.

**Do not:** cut thick skin with a knife or razor, pour alcohol or iodine into cracks, or scrub a bleeding crack.

## How does a podiatrist help?

- **Device treatment** — thickened skin is removed painlessly and the edges of cracks smoothed, so they heal faster.
- **Finding the cause** — if fungus, eczema or another condition is suspected, the feet are examined together with a dermatologist.
- **A care plan** — advice on creams, shoes and insoles if needed.

If the thick skin on your heels is linked to calluses, see [calluses and corns](/en/articles/art-qadoq-va-kesak).

## Cracked heel treatment in Fergana and Kokand

At the Radeski Skin Clinic [nail and foot clinic](/en/services/clinika-patologii-nogtej) a podiatrist treats the heels painlessly, finds the cause of the cracks and builds a care plan.

- [Podiatrist in Fergana](/en/fargona/podolog) and [in Kokand](/en/qoqon/podolog);
- winter care: [winter skin care](/en/articles/art-qishda-teri-parvarishi).

Cracked heels are easy to treat early: cream and care heal a small crack, while a deep one needs a specialist.`;
}

export const CRACKED_HEELS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Tovon yoriqlari: nima uchun paydo bo'ladi, qachon kasallik belgisi, uyda to'g'ri parvarish (mochevinali krem), podologda ishlov va xavfli belgilar. Farg'ona va Qo'qonda podolog.",
    body: uzBody(),
    keyTakeaways: [
      "Tovon yoriqlari — quruq va qalinlashgan terining yorilishi; qishda ko'payadi",
      "Chuqur yoriq — jarohat: og'riydi, qonaydi va infeksiya kirishi mumkin",
      "Mochevinali krem va kechasi paxta paypoq — eng samarali uy parvarishi",
      "Parvarishdan o'tmaydigan yoriqlar zamburug', ekzema yoki diabet belgisi bo'lishi mumkin",
      "Podolog qalin terini og'riqsiz olib tashlaydi, shundan keyin yoriqlar tez bitadi",
    ],
    tags: ['Tovon yoriqlari', 'Oyoq parvarishi', 'Quruq teri', 'Podolog', "Tirnoq va oyoq klinikasi", "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Yoriq chuqur, qonaydi yoki og'riydi",
      "Atrofida qizarish, shish yoki yiring",
      "Qandli diabet bo'lsa — har qanday yoriqda",
      "Parvarish 2–3 haftada yordam bermasa",
      "Yoriqlar qichishish va po'st tashlash bilan birga kelsa",
    ],
    faq: [
      {
        question: 'Tovon yoriqlari qancha vaqtda bitadi?',
        answer:
          "Yuzaki yoriqlar muntazam parvarish bilan 2–3 haftada yaxshilanadi. Chuqur yoriqlar podologik ishlovdan keyin tezroq bitadi, lekin parvarishni davom ettirish kerak, aks holda ular qaytadi.",
      },
      {
        question: 'Qanday krem yaxshi yordam beradi?',
        answer:
          "Mochevina (urea) tutgan oyoq kremlari qalin terini yumshatadi va namlikni ushlaydi. Teringiz holatiga mos konsentratsiyani podolog yoki dermatolog tavsiya qiladi.",
      },
      {
        question: 'Tovon yoriqlari kasallik belgisi bo\'lishi mumkinmi?',
        answer:
          "Ha. Oyoq zamburug'i, ekzema, psoriaz, qandli diabet va qalqonsimon bez kasalliklari tovon terisini quritib, yoriqlarga olib keladi. Parvarish yordam bermasa, sababini tekshirish kerak.",
      },
      {
        question: 'Qandli diabetda tovon yoriqlarini qanday parvarish qilish kerak?',
        answer:
          "Ehtiyotkorlik bilan: issiq suv, pichoq va kuchli ishqalash mumkin emas. Har kuni oyoqni ko'zdan kechiring va har qanday yoriq bilan podolog yoki shifokorga murojaat qiling.",
      },
      {
        question: "Farg'ona va Qo'qonda tovon yoriqlarini qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida podolog tovonga og'riqsiz ishlov beradi va parvarish rejasini tuzadi. Saytda yoki +998 73 200-73-73 (Farg'ona) yoki +998 95 145 73 73 (Qo'qon) raqamlari orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Трещины на пятках: почему появляются, когда это признак болезни, правильный уход дома (крем с мочевиной), обработка у подолога и тревожные признаки. Подолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Трещины на пятках — растрескивание сухой и утолщённой кожи; зимой их больше',
      'Глубокая трещина — это рана: болит, кровоточит и может инфицироваться',
      'Крем с мочевиной и хлопковые носки на ночь — самый действенный домашний уход',
      'Трещины, которые не проходят от ухода, могут быть признаком грибка, экземы или диабета',
      'Подолог безболезненно удаляет утолщённую кожу, после чего трещины быстро заживают',
    ],
    tags: ['Трещины на пятках', 'Уход за стопами', 'Сухая кожа', 'Подолог', 'Клиника стопы', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Трещина глубокая, кровоточит или болит',
      'Вокруг покраснение, отёк или гной',
      'Сахарный диабет — при любой трещине',
      'Уход не помог за 2–3 недели',
      'Трещины с зудом и шелушением',
    ],
    faq: [
      {
        question: 'Сколько заживают трещины на пятках?',
        answer:
          'Поверхностные трещины при регулярном уходе улучшаются за 2–3 недели. Глубокие быстрее заживают после обработки у подолога, но уход нужно продолжать, иначе они вернутся.',
      },
      {
        question: 'Какой крем лучше помогает?',
        answer:
          'Кремы для стоп с мочевиной (urea) смягчают утолщённую кожу и удерживают влагу. Подходящую концентрацию для вашей кожи посоветует подолог или дерматолог.',
      },
      {
        question: 'Могут ли трещины на пятках быть признаком болезни?',
        answer:
          'Да. Грибок стопы, экзема, псориаз, сахарный диабет и болезни щитовидной железы сушат кожу пяток и приводят к трещинам. Если уход не помогает, нужно искать причину.',
      },
      {
        question: 'Как ухаживать за трещинами при сахарном диабете?',
        answer:
          'Осторожно: нельзя горячую воду, лезвия и сильное трение. Ежедневно осматривайте стопы и при любой трещине обращайтесь к подологу или врачу.',
      },
      {
        question: 'Где лечить трещины на пятках в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде подолог безболезненно обработает пятки и составит план ухода. Записаться можно на сайте или по телефону +998 73 200-73-73 (Фергана) или +998 95 145 73 73 (Коканд).',
      },
    ],
  },
  en: {
    summary:
      'Cracked heels: why they appear, when they signal a disease, good home care (urea cream), podiatric treatment and warning signs. Podiatrists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Cracked heels are dry, thickened skin splitting; they are more common in winter',
      'A deep crack is a wound: it hurts, bleeds and can become infected',
      'Urea cream and cotton socks overnight are the most effective home care',
      'Cracks that do not heal with care can signal fungus, eczema or diabetes',
      'A podiatrist painlessly removes thick skin, after which cracks heal quickly',
    ],
    tags: ['Cracked heels', 'Foot care', 'Dry skin', 'Podiatrist', 'Foot clinic', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A crack is deep, bleeds or hurts',
      'Redness, swelling or pus around it',
      'Diabetes — for any crack',
      'Care has not helped in 2–3 weeks',
      'Cracks come with itching and flaking',
    ],
    faq: [
      {
        question: 'How long do cracked heels take to heal?',
        answer:
          'Shallow cracks improve in 2–3 weeks with regular care. Deep cracks heal faster after podiatric treatment, but care must continue or they come back.',
      },
      {
        question: 'Which cream works best?',
        answer:
          'Foot creams with urea soften thick skin and hold in moisture. A podiatrist or dermatologist can recommend the right strength for your skin.',
      },
      {
        question: 'Can cracked heels be a sign of disease?',
        answer:
          'Yes. Athlete\'s foot, eczema, psoriasis, diabetes and thyroid disease dry out the heel skin and cause cracks. If care does not help, the cause should be found.',
      },
      {
        question: 'How should cracked heels be cared for with diabetes?',
        answer:
          'Carefully: no hot water, blades or hard scrubbing. Check your feet every day and see a podiatrist or doctor about any crack.',
      },
      {
        question: 'Where can I get cracked heels treated in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a podiatrist treats the heels painlessly and builds a care plan. Book on the website or call +998 73 200-73-73 (Fergana) or +998 95 145 73 73 (Kokand).',
      },
    ],
  },
};

export const CRACKED_HEELS_ARTICLE: Article = {
  id: 'art-tovon-yoriqlari',
  slug: 'tovon-yoriqlari',
  title: {
    uz: "Tovon yoriqlari: sabablari, uyda parvarish va podolog yordami",
    ru: 'Трещины на пятках: причины, уход дома и помощь подолога',
    en: 'Cracked Heels: Causes, Home Care and Podiatrist Help',
  },
  summary: {
    uz: CRACKED_HEELS_ARTICLE_CATALOG.uz.summary,
    ru: CRACKED_HEELS_ARTICLE_CATALOG.ru.summary,
    en: CRACKED_HEELS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: CRACKED_HEELS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: CRACKED_HEELS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: CRACKED_HEELS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Usmanova Mohinabonu Anvarovna',
    ru: 'Усманова Мохинабону Анваровна',
    en: 'Dr. Mohinabonu Anvarovna Usmanova',
  },
  date: '2026-11-17',
  image: '/articles/tovon-yoriqlari-cover.jpg',
  images: {
    uz: '/articles/tovon-yoriqlari-cover.jpg',
    ru: '/articles/tovon-yoriqlari-cover.jpg',
    en: '/articles/tovon-yoriqlari-cover.jpg',
  },
  views: 0,
};
