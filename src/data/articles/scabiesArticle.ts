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
 * Scabies — the classic cause of night-time itching in several family members. Points that
 * matter to patients: it is not about hygiene, everyone in the household is treated on the same
 * day, bedding is washed or sealed, and itching can last weeks after a successful treatment.
 */

function uzBody(): string {
  return `Qo'tir (skabiyez) — teri ichida yashaydigan mikroskopik qo'tir kanasi chaqiradigan yuqumli kasallik. Uning asosiy belgisi — kechasi kuchayadigan qattiq qichishish. Qo'tir gigiyena yetishmasligidan emas, yaqin teri kontaktidan yuqadi va ko'pincha butun oila a'zolarida birdaniga paydo bo'ladi. To'g'ri davolash bilan u to'liq o'tib ketadi.

## Qo'tir qanday yuqadi?

Qo'tir kanasi bir odamdan ikkinchisiga asosan uzoq va yaqin teri kontakti orqali o'tadi:

- oila a'zolari, birga uxlaydigan odamlar orasida;
- bolalar bog'chasi, maktab-internat, yotoqxona va harbiy qismlarda;
- jinsiy aloqa orqali.

Kiyim, ko'rpa-to'shak va sochiq orqali kamroq yuqadi, lekin bu ham mumkin. Uy hayvonlaridan odamga qo'tir yuqmaydi.

## Qo'tir belgilari

- **kechasi kuchayadigan qichishish** — ko'pincha bir necha oila a'zosida;
- mayda qizil tugunchalar va pufakchalar;
- **qo'tir yo'llari** — teridagi ingichka kulrang chiziqchalar;
- tirnalish izlari va qobiqlar.

Toshma odatda barmoqlar orasida, bilaklarda, tirsaklarda, bel va qorinda, qo'ltiq ostida, dumbada, jinsiy a'zolarda va ko'krak atrofida bo'ladi. **Chaqaloqlarda** kaft, tovon, yuz va bosh terisi ham zararlanishi mumkin.

Birinchi marta yuqqanda qichishish 2–6 haftadan keyin boshlanadi — bu vaqt ichida odam boshqalarga yuqtirib yurishi mumkin.

## Tashxis

Dermatolog toshmani ko'zdan kechiradi va dermatoskop bilan qo'tir yo'llari va kanani qidiradi. Kerak bo'lsa, qirindi olib mikroskopda tekshiriladi. Qo'tirni [ekzema](/uz/articles/art-ekzema), allergiya, [teri zamburug'i](/uz/articles/art-teri-zamburugi) va qichishishning boshqa [sabablari](/uz/articles/art-teri-qichishi)dan ajratish muhim — ularni davolash butunlay boshqacha.

## Qanday davolanadi?

- **Qo'tirga qarshi vosita** — shifokor tayinlaydi. Odatda bo'yindan pastgi butun teriga, barmoqlar orasi va tirnoqlar ostini ham qoldirmay surtiladi; chaqaloqlarda bosh va yuzga ham. Ko'pincha muolaja bir haftadan keyin takrorlanadi.
- **Barcha oila a'zolari bir kunda davolanadi** — belgilari bo'lmaganlari ham. Aks holda kana qaytadan yuqadi.
- **Kiyim va ko'rpa-to'shak** — davolanish kuni 60 °C da yuviladi va dazmollanadi; yuvib bo'lmaydigan narsalar 3 kunga yopiq paketga solinadi.

**Muhim:** muvaffaqiyatli davolashdan keyin ham qichishish 2–4 hafta davom etishi mumkin — bu davolash ish bermagani emas, terining tiklanishi. Vositani o'zboshimchalik bilan qayta-qayta surtmang: bu terini ta'sirlaydi. Qichishishni kamaytirish uchun shifokor alohida tavsiya beradi.

## Bolalarda qo'tir

Bolalar qo'tirni bog'cha va maktabdan olib kelishi mumkin. Bolalar uchun vosita va dozani faqat shifokor tanlaydi. Davolash boshlangandan keyingi kundan bola odatda jamoaga qaytishi mumkin — aniq muddatni shifokor aytadi.

## Farg'ona va Qo'qonda qo'tirni davolash

Radeski Skin Clinic'da [dermatovenerolog](/uz/services/dermatologiya) qichishish sababini aniqlaydi, dermatoskopiya va qirindi tahlilini o'tkazadi, bemor va oila a'zolari uchun davolash rejasini tuzadi. Bolalarni [bolalar dermatologi](/uz/services/dermatologiya/bolalar-dermatologiyasi) qabul qiladi.

- [Terining qichishi — qisqacha](/uz/conditions/teri-qichishi);
- [Dermatolog Farg'onada](/uz/fargona/dermatolog) va [Qo'qonda](/uz/qoqon/dermatolog).

Kechasi qichishish bir necha oila a'zosida bo'lsa, o'z-o'zini davolashni boshlamang — dermatologga birga keling, shunda qo'tir bir marta va butunlay davolanadi.`;
}

function ruBody(): string {
  return `Чесотка — заразное заболевание, которое вызывает микроскопический чесоточный клещ, живущий в коже. Её главный признак — сильный зуд, который усиливается ночью. Чесотка возникает не из-за недостатка гигиены, а передаётся при тесном контакте кожи и часто появляется сразу у всей семьи. При правильном лечении она проходит полностью.

## Как передаётся чесотка?

Чесоточный клещ переходит от человека к человеку в основном при длительном тесном контакте кожи:

- между членами семьи, людьми, которые спят вместе;
- в детских садах, интернатах, общежитиях и воинских частях;
- при половом контакте.

Через одежду, постельное бельё и полотенца — реже, но тоже возможно. От домашних животных человек чесоткой не заражается.

## Признаки чесотки

- **зуд, усиливающийся ночью** — часто у нескольких членов семьи;
- мелкие красные узелки и пузырьки;
- **чесоточные ходы** — тонкие сероватые линии на коже;
- расчёсы и корочки.

Сыпь обычно бывает между пальцами, на запястьях, локтях, на поясе и животе, в подмышках, на ягодицах, половых органах и вокруг сосков. **У младенцев** могут поражаться ладони, стопы, лицо и кожа головы.

При первом заражении зуд начинается через 2–6 недель — всё это время человек может заражать других.

## Диагностика

Дерматолог осмотрит сыпь и с помощью дерматоскопа найдёт чесоточные ходы и клеща. При необходимости берут соскоб и исследуют под микроскопом. Важно отличить чесотку от [экземы](/ru/articles/art-ekzema), аллергии, [грибка кожи](/ru/articles/art-teri-zamburugi) и других [причин зуда](/ru/articles/art-teri-qichishi) — их лечат совсем по-другому.

## Как лечат чесотку?

- **Противочесоточное средство** — назначает врач. Обычно его наносят на всю кожу ниже шеи, не пропуская промежутки между пальцами и кожу под ногтями; у младенцев — и на голову и лицо. Часто обработку повторяют через неделю.
- **Все члены семьи лечатся в один день** — даже те, у кого нет симптомов. Иначе клещ снова переходит от одного к другому.
- **Одежда и постельное бельё** — в день лечения их стирают при 60 °C и проглаживают; то, что нельзя постирать, на 3 дня убирают в закрытый пакет.

**Важно:** зуд может сохраняться 2–4 недели и после успешного лечения — это не значит, что лечение не помогло, это восстановление кожи. Не наносите средство снова и снова самостоятельно: это раздражает кожу. Как уменьшить зуд, врач посоветует отдельно.

## Чесотка у детей

Дети могут принести чесотку из детского сада и школы. Средство и дозу для ребёнка подбирает только врач. Обычно ребёнок может вернуться в коллектив на следующий день после начала лечения — точный срок скажет врач.

## Лечение чесотки в Фергане и Коканде

В Radeski Skin Clinic [дерматовенеролог](/ru/services/dermatologiya) найдёт причину зуда, проведёт дерматоскопию и соскоб, составит план лечения для пациента и членов семьи. Детей принимает [детский дерматолог](/ru/services/dermatologiya/bolalar-dermatologiyasi).

- [Зуд кожи — коротко](/ru/conditions/teri-qichishi);
- [Дерматолог в Фергане](/ru/fargona/dermatolog) и [в Коканде](/ru/qoqon/dermatolog).

Если ночной зуд у нескольких членов семьи, не начинайте лечиться самостоятельно — приходите к дерматологу вместе, чтобы вылечить чесотку один раз и полностью.`;
}

function enBody(): string {
  return `Scabies is a contagious condition caused by a microscopic mite that lives in the skin. Its main sign is intense itching that gets worse at night. Scabies is not about poor hygiene — it spreads through close skin contact and often appears in the whole family at once. With the right treatment it clears completely.

## How does scabies spread?

The mite passes from person to person mainly through prolonged close skin contact:

- between family members and people who share a bed;
- in nurseries, boarding schools, dormitories and barracks;
- through sexual contact.

Spread through clothing, bedding and towels is less common but possible. People do not catch scabies from pets.

## Signs of scabies

- **itching that gets worse at night** — often in several family members;
- small red bumps and blisters;
- **burrows** — thin greyish lines in the skin;
- scratch marks and crusts.

The rash usually affects the spaces between the fingers, wrists, elbows, waist and belly, armpits, buttocks, genitals and the skin around the nipples. **In babies** the palms, soles, face and scalp can be affected too.

After a first infection the itching starts 2–6 weeks later — and during that time the person can infect others.

## Diagnosis

A dermatologist examines the rash and uses a dermatoscope to find burrows and the mite. When needed, a scraping is examined under the microscope. Scabies has to be told apart from [eczema](/en/articles/art-ekzema), allergy, [fungal infection](/en/articles/art-teri-zamburugi) and other [causes of itching](/en/articles/art-teri-qichishi) — they are treated completely differently.

## How is scabies treated?

- **An anti-scabies treatment** prescribed by the doctor. It is usually applied to all the skin from the neck down, including between the fingers and under the nails; in babies the head and face too. It is often repeated after a week.
- **Everyone in the household is treated on the same day** — including those without symptoms. Otherwise the mite keeps passing back and forth.
- **Clothes and bedding** — washed at 60 °C and ironed on the day of treatment; anything that cannot be washed goes into a sealed bag for 3 days.

**Important:** itching can last 2–4 weeks even after successful treatment — this is the skin recovering, not treatment failure. Do not keep reapplying the product on your own: it irritates the skin. Your doctor will advise separately on easing the itch.

## Scabies in children

Children can bring scabies home from nursery or school. The product and dose for a child are chosen only by a doctor. Usually a child can go back to nursery or school the day after treatment starts — the doctor will confirm.

## Scabies treatment in Fergana and Kokand

At Radeski Skin Clinic a [dermatovenereologist](/en/services/dermatologiya) finds the cause of the itch, performs dermoscopy and a scraping, and builds a treatment plan for the patient and the family. Children are seen by a [paediatric dermatologist](/en/services/dermatologiya/bolalar-dermatologiyasi).

- [Itchy skin — in brief](/en/conditions/teri-qichishi);
- [Dermatologist in Fergana](/en/fargona/dermatolog) and [in Kokand](/en/qoqon/dermatolog).

If several family members itch at night, do not start treating yourselves — come to the dermatologist together, so scabies is treated once and for good.`;
}

export const SCABIES_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Qo'tir (skabiyez): kechasi kuchayadigan qichishish, qanday yuqadi, belgilari, dermatoskopiya, butun oilani bir kunda davolash va uydagi ishlov. Farg'ona va Qo'qonda dermatovenerolog.",
    body: uzBody(),
    keyTakeaways: [
      "Qo'tir yaqin teri kontaktidan yuqadi, gigiyena yetishmasligidan emas",
      "Asosiy belgi — kechasi kuchayadigan qichishish, ko'pincha bir necha oila a'zosida",
      'Tashxis dermatoskopiya va qirindi tahlili bilan tasdiqlanadi',
      "Barcha oila a'zolari bir kunda davolanadi, kiyim va ko'rpa-to'shakka ishlov beriladi",
      "Davolashdan keyin qichishish 2–4 hafta davom etishi mumkin — bu normal",
    ],
    tags: ["Qo'tir", 'Skabiyez', 'Kechasi qichishish', 'Dermatovenerolog', 'Bolalar dermatologi', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Kechasi qichishish bir necha oila a\'zosida bo\'lsa',
      "Barmoqlar orasida, bilakda va belda qichiydigan toshma",
      "Bolada qichishish va toshma bog'cha yoki maktabdan keyin boshlansa",
      "Tirnalgan joylar yiringlasa",
      'Davolashdan 4 hafta keyin ham qichishish o\'tmasa',
    ],
    faq: [
      {
        question: "Qo'tir o'z-o'zidan o'tadimi?",
        answer:
          "Yo'q. Qo'tir kanasi teri ichida ko'payishda davom etadi va kasallik boshqalarga yuqadi. Uni faqat qo'tirga qarshi davolash yo'qotadi.",
      },
      {
        question: "Belgisi bo'lmagan oila a'zolari ham davolanishi kerakmi?",
        answer:
          "Ha. Qichishish 2–6 hafta keyin boshlanadi, shuning uchun belgisi yo'q odam ham kanani yuqtirgan bo'lishi mumkin. Hamma bir kunda davolanmasa, qo'tir qaytib keladi.",
      },
      {
        question: 'Davolashdan keyin ham nega qichiydi?',
        answer:
          "Kana o'lgandan keyin ham teri bir necha hafta allergik reaksiya bilan javob beradi. 2–4 hafta qichishish normal. Agar u kuchaysa yoki yangi qo'tir yo'llari paydo bo'lsa, shifokorga qayta ko'rining.",
      },
      {
        question: "Uy hayvonlaridan qo'tir yuqadimi?",
        answer:
          "Odamdagi qo'tirni boshqa kana chaqiradi, uy hayvonlaridan u yuqmaydi. Hayvondagi teri kasalligi bo'lsa, uni veterinar davolaydi.",
      },
      {
        question: "Farg'ona va Qo'qonda qo'tirni qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatovenerolog tashxis qo'yadi va bemor hamda oila a'zolari uchun davolash rejasini tuzadi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Чесотка: зуд, усиливающийся ночью, как передаётся, признаки, дерматоскопия, лечение всей семьи в один день и обработка вещей. Дерматовенеролог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Чесотка передаётся при тесном контакте кожи, а не из-за плохой гигиены',
      'Главный признак — зуд, сильнее ночью, часто у нескольких членов семьи',
      'Диагноз подтверждают дерматоскопией и соскобом',
      'Всех членов семьи лечат в один день, вещи и бельё обрабатывают',
      'Зуд после лечения может держаться 2–4 недели — это нормально',
    ],
    tags: ['Чесотка', 'Чесоточный клещ', 'Зуд ночью', 'Дерматовенеролог', 'Детский дерматолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Ночной зуд у нескольких членов семьи',
      'Зудящая сыпь между пальцами, на запястьях и поясе',
      'У ребёнка зуд и сыпь после детского сада или школы',
      'Расчёсы гноятся',
      'Зуд не проходит через 4 недели после лечения',
    ],
    faq: [
      {
        question: 'Проходит ли чесотка сама?',
        answer:
          'Нет. Клещ продолжает размножаться в коже, и болезнь передаётся другим. Избавиться от неё можно только противочесоточным лечением.',
      },
      {
        question: 'Нужно ли лечить членов семьи без симптомов?',
        answer:
          'Да. Зуд начинается через 2–6 недель, поэтому человек без симптомов уже может быть заражён. Если не лечить всех в один день, чесотка возвращается.',
      },
      {
        question: 'Почему кожа чешется и после лечения?',
        answer:
          'Даже после гибели клеща кожа несколько недель отвечает аллергической реакцией. Зуд 2–4 недели — это нормально. Если он усиливается или появляются новые ходы, покажитесь врачу снова.',
      },
      {
        question: 'Можно ли заразиться чесоткой от домашних животных?',
        answer:
          'Чесотку человека вызывает другой клещ, от питомцев она не передаётся. Если у животного кожное заболевание, его лечит ветеринар.',
      },
      {
        question: 'Где лечить чесотку в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматовенеролог поставит диагноз и составит план лечения для пациента и членов семьи. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Scabies: itching that is worse at night, how it spreads, signs, dermoscopy, treating the whole household on one day and cleaning bedding. Dermatovenereologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Scabies spreads through close skin contact, not poor hygiene',
      'The main sign is itching that is worse at night, often in several family members',
      'Dermoscopy and a skin scraping confirm the diagnosis',
      'The whole household is treated on the same day; clothes and bedding are cleaned',
      'Itching can last 2–4 weeks after treatment — that is normal',
    ],
    tags: ['Scabies', 'Scabies mite', 'Night itching', 'Dermatovenereologist', 'Paediatric dermatologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Several family members itch at night',
      'An itchy rash between the fingers, on the wrists and waist',
      'A child starts itching after nursery or school',
      'Scratches become infected',
      'Itching has not settled 4 weeks after treatment',
    ],
    faq: [
      {
        question: 'Does scabies go away on its own?',
        answer:
          'No. The mite keeps multiplying in the skin and the condition spreads to others. Only anti-scabies treatment gets rid of it.',
      },
      {
        question: 'Do family members without symptoms need treatment?',
        answer:
          'Yes. Itching starts 2–6 weeks after infection, so someone without symptoms may already have it. If everyone is not treated on the same day, scabies comes back.',
      },
      {
        question: 'Why does my skin still itch after treatment?',
        answer:
          'Even after the mites die, the skin reacts allergically for several weeks. Itching for 2–4 weeks is normal. If it gets worse or new burrows appear, see the doctor again.',
      },
      {
        question: 'Can people catch scabies from pets?',
        answer:
          'Human scabies is caused by a different mite and is not caught from pets. A pet with a skin condition should see a vet.',
      },
      {
        question: 'Where can I get scabies treated in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatovenereologist makes the diagnosis and builds a treatment plan for the patient and the family. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const SCABIES_ARTICLE: Article = {
  id: 'art-qotir',
  slug: 'qotir',
  title: {
    uz: "Qo'tir (skabiyez): kechasi qichishish, qanday yuqadi va butun oilani davolash",
    ru: 'Чесотка: ночной зуд, как передаётся и как лечить всю семью',
    en: 'Scabies: Night-Time Itching, How It Spreads and Treating the Whole Family',
  },
  summary: {
    uz: SCABIES_ARTICLE_CATALOG.uz.summary,
    ru: SCABIES_ARTICLE_CATALOG.ru.summary,
    en: SCABIES_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: SCABIES_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: SCABIES_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: SCABIES_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Karimova Iroda',
    ru: 'Каримова Ирода',
    en: 'Dr. Iroda Karimova',
  },
  date: '2026-11-08',
  image: '/articles/qotir-cover.webp',
  images: {
    uz: '/articles/qotir-cover.webp',
    ru: '/articles/qotir-cover.webp',
    en: '/articles/qotir-cover.webp',
  },
  views: 0,
};
