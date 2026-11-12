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
 * Who a podiatrist is and when to see one: the medical difference from a pedicure, the problems
 * a podiatrist treats (ingrown nail, nail fungus, corns and calluses, cracked heels, thickened
 * nails, foot care in diabetes), what happens at the visit. Clinic facts: podiatry price list
 * (titanium wire, removal of an ingrown nail, device nail and heel cleaning, corn treatment,
 * fungus test, laser for onychomycosis), podiatrists who are dermatovenereologists (Usmanova,
 * Karimova), both branches.
 */

const COVER = {
  uz: '/articles/podolog-kim-cover-uz.jpg',
  ru: '/articles/podolog-kim-cover-ru.jpg',
  en: '/articles/podolog-kim-cover-en.jpg',
};

function uzBody(): string {
  return `Ko‘pchilik oyoq muammosi bilan go‘zallik saloniga — pedikyurga boradi. Lekin tirnoq o‘sib kirsa, zamburug‘ bo‘lsa yoki tovon chuqur yorilsa, bu kosmetik emas, **tibbiy** muammo. Ular bilan **podolog** shug‘ullanadi. Quyida podolog kimligini, qachon unga borish kerakligini va qabul qanday o‘tishini tushuntiramiz.

## Podolog kim?

**Podolog** — oyoq panjasi terisi va tirnoqlari kasalliklarini aniqlaydigan va davolaydigan mutaxassis. Radeski’da podologlar — **dermatovenerolog shifokorlar**: ular faqat tirnoqni chiroyli qilmaydi, balki muammo sababini aniqlaydi — zamburug‘mi, infeksiyami, poyabzalmi yoki umumiy kasallik belgisimi.

## Pedikyurdan farqi

| Pedikyur | Podologiya |
|---|---|
| Parvarish va chiroy | Tashxis va davolash |
| Kosmetik usta | Shifokor |
| Sog‘lom oyoq uchun | Muammoli oyoq uchun |
| Kasallikni davolamaydi | Kerak bo‘lsa tahlil oladi va davolaydi |

## Podolog nimalar bilan shug‘ullanadi?

- **Ichiga o‘sgan tirnoq** — og‘riq, qizarish, shish. O‘sib kirgan qismi olib tashlanadi yoki **titan ip** bilan korreksiya qilinadi — u tirnoqni operatsiyasiz to‘g‘ri o‘sishga yo‘naltiradi.
- **Tirnoq zamburug‘i (onixomikoz)** — sarg‘aygan, qalinlashgan, ushalgan tirnoq. Avval **tahlil** bilan tasdiqlanadi, keyin apparat bilan tozalash, lazer va dori vositalari birga qo‘llaniladi.
- **Qadoq va mozollar** — yadroli va yadrosiz; apparat bilan og‘riqsiz olib tashlanadi.
- **Tovon yorilishi** — apparat bilan tozalash va parvarish rejasi.
- **Qalinlashgan va deformatsiyalangan tirnoqlar** — apparat bilan ishlov.
- **Qandli diabetda oyoq parvarishi** — mayda yara ham xavfli bo‘lgani uchun muntazam tibbiy nazorat.

## Qachon podologga borish kerak?

- Tirnoq atrofi og‘riydi, qizargan yoki yiringlagan.
- Tirnoq rangi, qalinligi yoki shakli o‘zgardi.
- Qadoq yurganda og‘riq beradi yoki qayta-qayta paydo bo‘ladi.
- Tovon yoriqlari qonaydi.
- Sizda **qandli diabet** bor — oyoq panjasini muntazam ko‘rsatib turish kerak.

## Qabul qanday o‘tadi?

1. Shikoyatlar va oyoq panjasini ko‘rish; kerak bo‘lsa dermatoskopiya.
2. Kerak bo‘lsa **zamburug‘ tahlili**.
3. Muolaja — ko‘pincha shu kunning o‘zida: apparat bilan tozalash, mozol yoki o‘sib kirgan tirnoqni davolash.
4. Uyda parvarish va poyabzal bo‘yicha tavsiyalar, nazorat vaqti.

## O‘zingiz qilmang

O‘sib kirgan tirnoqni kesish, qadoqni o‘tkir narsa bilan kesish yoki «xalq usullari» bilan kuydirish infeksiya va qaytalanish xavfini oshiradi.

## Radeski’da

Podolog qabuli **Farg‘ona va Qo‘qon** filiallarida. Birinchi konsultatsiya va muolajalar narxi [narxlar sahifasida](/uz/prices).

Batafsil: [Podolog Farg‘onada](/uz/fargona/podolog), [Podolog Qo‘qonda](/uz/qoqon/podolog), [Ichiga o‘sgan tirnoq](/uz/articles/art-onixokriptoz-klinik-holat), [Tirnoq zamburug‘i](/uz/articles/art-tirnoq-zamburugi).`;
}

function ruBody(): string {
  return `С проблемами стоп многие идут в салон — на педикюр. Но если ноготь врастает, появился грибок или пятка глубоко трескается, это уже не косметическая, а **медицинская** проблема. Ими занимается **подолог**. Объясняем, кто это, когда к нему идти и как проходит приём.

## Кто такой подолог?

**Подолог** — специалист, который диагностирует и лечит болезни кожи и ногтей стоп. В Radeski подологи — **врачи-дерматовенерологи**: они не просто приводят ногти в порядок, а выясняют причину — грибок, инфекция, обувь или признак общего заболевания.

## Отличие от педикюра

| Педикюр | Подология |
|---|---|
| Уход и красота | Диагностика и лечение |
| Мастер | Врач |
| Для здоровых стоп | Для проблемных стоп |
| Не лечит болезни | При необходимости берёт анализ и лечит |

## Чем занимается подолог?

- **Вросший ноготь** — боль, покраснение, отёк. Вросшую часть удаляют или корректируют **титановой нитью** — она без операции направляет ноготь в правильный рост.
- **Грибок ногтей (онихомикоз)** — пожелтевший, утолщённый, крошащийся ноготь. Сначала подтверждают **анализом**, затем сочетают аппаратную обработку, лазер и препараты.
- **Мозоли и натоптыши** — со стержнем и без; удаляют аппаратно, без боли.
- **Трещины пяток** — аппаратная обработка и план ухода.
- **Утолщённые и деформированные ногти** — аппаратная обработка.
- **Уход за стопами при диабете** — регулярный медицинский контроль, потому что опасна даже мелкая ранка.

## Когда идти к подологу?

- Вокруг ногтя боль, покраснение или нагноение.
- Изменился цвет, толщина или форма ногтя.
- Мозоль болит при ходьбе или появляется снова и снова.
- Трещины на пятках кровоточат.
- У вас **сахарный диабет** — стопы нужно регулярно показывать врачу.

## Как проходит приём?

1. Жалобы и осмотр стоп; при необходимости дерматоскопия.
2. При необходимости **анализ на грибок**.
3. Процедура — часто в тот же день: аппаратная обработка, лечение мозоли или вросшего ногтя.
4. Рекомендации по уходу и обуви, дата контроля.

## Не делайте сами

Вырезать вросший ноготь, срезать мозоль острым предметом или прижигать «народными средствами» — повышает риск инфекции и рецидива.

## В Radeski

Подолог принимает в филиалах в **Фергане и Коканде**. Стоимость первичной консультации и процедур — на [странице цен](/ru/prices).

Подробнее: [Подолог в Фергане](/ru/fargona/podolog), [Подолог в Коканде](/ru/qoqon/podolog), [Вросший ноготь](/ru/articles/art-onixokriptoz-klinik-holat), [Грибок ногтей](/ru/articles/art-tirnoq-zamburugi).`;
}

function enBody(): string {
  return `Many people take foot problems to a salon for a pedicure. But an ingrown nail, nail fungus or deeply cracked heels are not cosmetic — they are **medical** problems, and they are treated by a **podiatrist**. Here is who a podiatrist is, when to see one and how the visit goes.

## Who is a podiatrist?

A **podiatrist** diagnoses and treats conditions of the skin and nails of the feet. At Radeski the podiatrists are **dermatovenereologists**: they do not just tidy the nails, they find the cause — fungus, infection, footwear or a sign of a general illness.

## How it differs from a pedicure

| Pedicure | Podiatry |
|---|---|
| Care and looks | Diagnosis and treatment |
| A beautician | A doctor |
| For healthy feet | For problem feet |
| Does not treat disease | Takes tests and treats when needed |

## What does a podiatrist treat?

- **Ingrown toenails** — pain, redness, swelling. The ingrown part is removed or corrected with a **titanium wire**, which guides the nail to grow properly without surgery.
- **Nail fungus (onychomycosis)** — yellow, thick, crumbly nails. It is confirmed with a **test** first, then device cleaning, laser and medicines are combined.
- **Corns and calluses** — with or without a core; removed painlessly with a device.
- **Cracked heels** — device treatment and a care plan.
- **Thick and deformed nails** — device treatment.
- **Foot care in diabetes** — regular medical checks, because even a small wound is dangerous.

## When to see a podiatrist

- The skin around a nail is painful, red or pus-filled.
- A nail has changed colour, thickness or shape.
- A corn hurts when walking or keeps coming back.
- Heel cracks bleed.
- You have **diabetes** — your feet need regular checks.

## How the visit goes

1. Your complaints and an examination of the feet; dermatoscopy if needed.
2. A **fungus test** if needed.
3. Treatment — often on the same day: device cleaning, corn or ingrown nail treatment.
4. Advice on care and footwear, and a follow-up date.

## Do not do it yourself

Cutting out an ingrown nail, slicing a corn with something sharp or burning it with home remedies raises the risk of infection and recurrence.

## At Radeski

Podiatrists see patients at the **Fergana and Kokand** branches. Prices for the first consultation and treatments are on the [prices page](/en/prices).

Read more: [Podiatrist in Fergana](/en/fargona/podolog), [Podiatrist in Kokand](/en/qoqon/podolog), [Ingrown toenail](/en/articles/art-onixokriptoz-klinik-holat), [Nail fungus](/en/articles/art-tirnoq-zamburugi).`;
}

export const PODIATRIST_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Podolog kim va qachon kerak: pedikyurdan farqi, ichiga o'sgan tirnoq, tirnoq zamburug'i, qadoq, tovon yorilishi, diabetda oyoq parvarishi. Farg'ona va Qo'qon.",
    body: uzBody(),
    keyTakeaways: [
      'Podolog — oyoq terisi va tirnoqlarini davolaydigan shifokor, pedikyur ustasi emas',
      'Ichiga o‘sgan tirnoq titan ip bilan operatsiyasiz tuzatilishi mumkin',
      'Tirnoq zamburug‘i avval tahlil bilan tasdiqlanadi',
      'Qadoq va mozollar apparat bilan og‘riqsiz olib tashlanadi',
      'Qandli diabetda oyoqni muntazam ko‘rsatib turish shart',
    ],
    tags: ['Podolog', 'Podologiya', 'Ichiga o‘sgan tirnoq', 'Tirnoq zamburug‘i', 'Qadoq', 'Tovon yorilishi', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Tirnoq atrofi og‘riydi, qizargan yoki yiringlagan',
      'Tirnoq rangi, qalinligi yoki shakli o‘zgardi',
      'Qadoq yurganda og‘riq beradi',
      'Tovon yoriqlari qonaydi',
      'Qandli diabet bilan oyoqda yara yoki yoriq paydo bo‘ldi',
    ],
    faq: [
      {
        question: 'Podolog va pedikyur ustasining farqi nima?',
        answer:
          'Pedikyur ustasi sog‘lom oyoqni parvarish qiladi. Podolog — shifokor: u tirnoq va teri kasalliklarini aniqlaydi, kerak bo‘lsa tahlil oladi va davolaydi.',
      },
      {
        question: 'Ichiga o‘sgan tirnoqni operatsiyasiz tuzatsa bo‘ladimi?',
        answer:
          'Ko‘p hollarda ha — titan ip tirnoqni to‘g‘ri o‘sishga yo‘naltiradi. Kuchli yallig‘lanishda o‘sib kirgan qismini olib tashlash kerak bo‘lishi mumkin; usulni podolog tanlaydi.',
      },
      {
        question: 'Podolog muolajasi og‘riqlimi?',
        answer:
          'Apparat bilan tozalash va mozolni olib tashlash odatda og‘riqsiz. O‘sib kirgan tirnoqni olib tashlashda mahalliy og‘riqsizlantirish ishlatiladi.',
      },
      {
        question: 'Farg‘ona va Qo‘qonda podolog qabuli bormi?',
        answer: 'Ha, Radeski Skin Clinic’ning ikkala filialida podolog qabul qiladi. Saytdan yoki telefon orqali yoziling.',
      },
    ],
  },
  ru: {
    summary:
      'Кто такой подолог и когда к нему идти: отличие от педикюра, вросший ноготь, грибок ногтей, мозоли, трещины пяток, уход за стопами при диабете. Фергана и Коканд.',
    body: ruBody(),
    keyTakeaways: [
      'Подолог — врач, который лечит кожу и ногти стоп, а не мастер педикюра',
      'Вросший ноготь часто корректируют титановой нитью без операции',
      'Грибок ногтей сначала подтверждают анализом',
      'Мозоли и натоптыши удаляют аппаратно и без боли',
      'При сахарном диабете стопы нужно регулярно показывать врачу',
    ],
    tags: ['Подолог', 'Подология', 'Вросший ноготь', 'Грибок ногтей', 'Мозоли', 'Трещины пяток', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Вокруг ногтя боль, покраснение или нагноение',
      'Изменился цвет, толщина или форма ногтя',
      'Мозоль болит при ходьбе',
      'Трещины на пятках кровоточат',
      'При диабете на стопе появилась ранка или трещина',
    ],
    faq: [
      {
        question: 'Чем подолог отличается от мастера педикюра?',
        answer:
          'Мастер ухаживает за здоровыми стопами. Подолог — врач: он диагностирует болезни ногтей и кожи, при необходимости берёт анализ и лечит.',
      },
      {
        question: 'Можно ли исправить вросший ноготь без операции?',
        answer:
          'Часто да — титановая нить направляет ноготь в правильный рост. При сильном воспалении может понадобиться удалить вросшую часть; метод выбирает подолог.',
      },
      {
        question: 'Больно ли у подолога?',
        answer:
          'Аппаратная обработка и удаление мозоли обычно безболезненны. При удалении вросшего ногтя используют местную анестезию.',
      },
      {
        question: 'Есть ли подолог в Фергане и Коканде?',
        answer: 'Да, подолог принимает в обоих филиалах Radeski Skin Clinic. Запишитесь на сайте или по телефону.',
      },
    ],
  },
  en: {
    summary:
      'Who a podiatrist is and when to see one: the difference from a pedicure, ingrown nails, nail fungus, corns, cracked heels and foot care in diabetes. Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'A podiatrist is a doctor treating foot skin and nails, not a pedicurist',
      'An ingrown nail can often be corrected with a titanium wire, without surgery',
      'Nail fungus is confirmed with a test first',
      'Corns and calluses are removed painlessly with a device',
      'With diabetes, your feet need regular checks',
    ],
    tags: ['Podiatrist', 'Podiatry', 'Ingrown toenail', 'Nail fungus', 'Corns', 'Cracked heels', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'The skin around a nail is painful, red or pus-filled',
      'A nail has changed colour, thickness or shape',
      'A corn hurts when walking',
      'Heel cracks bleed',
      'You have diabetes and a wound or crack appears on your foot',
    ],
    faq: [
      {
        question: 'What is the difference between a podiatrist and a pedicurist?',
        answer:
          'A pedicurist cares for healthy feet. A podiatrist is a doctor who diagnoses nail and skin conditions, takes tests when needed and treats them.',
      },
      {
        question: 'Can an ingrown nail be fixed without surgery?',
        answer:
          'Often yes — a titanium wire guides the nail to grow correctly. With strong inflammation the ingrown part may need removing; the podiatrist chooses the method.',
      },
      {
        question: 'Does podiatry treatment hurt?',
        answer:
          'Device cleaning and corn removal are usually painless. Local anaesthesia is used when an ingrown nail is removed.',
      },
      {
        question: 'Is there a podiatrist in Fergana and Kokand?',
        answer: 'Yes, podiatrists see patients at both Radeski Skin Clinic branches. Book on the website or by phone.',
      },
    ],
  },
};

export const PODIATRIST_ARTICLE: Article = {
  id: 'art-podolog-kim',
  slug: 'podolog-kim',
  title: {
    uz: 'Podolog kim va qachon kerak: pedikyurdan farqi va qanday muammolarni davolaydi',
    ru: 'Кто такой подолог и когда к нему идти: отличие от педикюра и что он лечит',
    en: 'Who Is a Podiatrist and When to See One: How It Differs from a Pedicure',
  },
  summary: {
    uz: PODIATRIST_ARTICLE_CATALOG.uz.summary,
    ru: PODIATRIST_ARTICLE_CATALOG.ru.summary,
    en: PODIATRIST_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: PODIATRIST_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: PODIATRIST_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: PODIATRIST_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Usmanova Mohinabonu Anvarovna',
    ru: 'Усманова Мохинабону Анваровна',
    en: 'Dr. Mohinabonu Anvarovna Usmanova',
  },
  date: '2026-11-12',
  image: COVER.uz,
  images: COVER,
  views: 0,
};
