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
 * Seborrheic dermatitis in depth. The condition page (/conditions/seboreyali-dermatit) covers
 * seborrhea together with skin fungus in short; this article answers the patient questions:
 * where it appears, how it differs from psoriasis and fungus, home care, when to see a doctor.
 */

function uzBody(): string {
  return `Seboreyali dermatit — teri yog'i ko'p ishlab chiqariladigan joylarda paydo bo'ladigan surunkali yallig'lanish kasalligi. U bosh terisida kepakka o'xshab boshlanadi, yuz, qosh va quloq orqasida qizarish va po'st tashlash bilan davom etadi. Kasallik yuqumli emas va xavfli ham emas, lekin tez-tez qaytadi, qichishtiradi va tashqi ko'rinishga ta'sir qiladi. To'g'ri parvarish va dermatolog tavsiyasi bilan uni uzoq vaqt nazoratda ushlab turish mumkin.

## Seboreyali dermatit qayerda paydo bo'ladi?

Toshma yog' bezlari ko'p joylarda chiqadi:

- bosh terisi — kepak, sarg'ish yog'li po'stlar, qichishish;
- qosh, kiprik chetlari va qoshlar orasi;
- burun-lab burmalari va burun qanotlari;
- quloq orqasi va quloq kanali;
- ko'krak o'rtasi va kuraklar orasi.

Chaqaloqlarda bosh terisidagi sarg'ish qobiqlar ham seboreyali dermatitning bir ko'rinishi bo'lib, odatda o'z-o'zidan o'tib ketadi.

## Nima uchun paydo bo'ladi?

Seboreyali dermatitning yagona sababi yo'q. Uning rivojlanishida bir necha omil ishtirok etadi:

- teri yog'ining ko'p ishlab chiqarilishi;
- teri yuzasida doim yashaydigan *Malassezia* zamburug'iga terining kuchli javobi;
- stress, charchoq va uyqu yetishmasligi;
- sovuq va quruq mavsum — qishda kasallik ko'pincha kuchayadi;
- ba'zi kasalliklar va dorilar — buni shifokor aniqlaydi.

Seboreyali dermatit gigiyena yetishmasligidan paydo bo'lmaydi va boshqa odamga yuqmaydi.

## Boshqa teri kasalliklaridan farqi

Seboreyali dermatitni ko'pincha psoriaz, teri zamburug'i, rozatseya yoki atopik dermatit bilan adashtirishadi. Ularning davolash usuli har xil:

- **psoriaz** — po'stlari qalinroq, kumushrang, chegaralari aniq, tirsak va tizzada ham bo'lishi mumkin;
- **teri zamburug'i** — ko'pincha halqa shaklida bo'ladi va laborator tahlil bilan tasdiqlanadi;
- **rozatseya** — yuzning markazida qizarish va tomirlar ko'rinadi, po'st tashlash kam;
- **atopik dermatit** — kuchli qichishish, quruq teri, ko'pincha bolalikdan boshlanadi.

Shuning uchun "kepakka qarshi" shampun yoki krem yordam bermasa, tashxisni dermatolog qo'yishi kerak. Kerak bo'lsa, dermatoskopiya va laborator tahlil o'tkaziladi.

## Qanday davolanadi?

Seboreyali dermatit surunkali kasallik: maqsad — toshmani tez kamaytirish va qaytalanishlarni kamroq qilish. Davolash rejasini dermatolog toshmaning joyi va og'irligiga qarab tanlaydi:

- bosh terisi uchun zamburug'ga qarshi tarkibli tibbiy shampunlar;
- yuz va tana uchun zamburug'ga qarshi va yallig'lanishga qarshi tashqi vositalar — qisqa kurs bilan;
- terini quritmaydigan yumshoq parvarish vositalari;
- og'ir yoki keng tarqalgan holatlarda — shifokor tayinlaydigan boshqa davolash.

Gormonli kremlarni o'zboshimchalik bilan uzoq surtish mumkin emas: ular yuz terisini yupqalashtirishi va toshmani qaytaradigan qilishi mumkin. Har qanday dori vositasini shifokor tayinlaydi.

## Uyda parvarish

- Boshni yuvishni kechiktirmang — yog' va po'stlar to'planishi qichishishni kuchaytiradi.
- Tibbiy shampunni shifokor aytgan usulda, ko'pirtirib bir necha daqiqa ushlab turing.
- Spirtli losonlar, agressiv skrablar va qattiq sovunlardan voz keching.
- Po'stlarni tirnab olib tashlamang — bu yallig'lanishni kuchaytiradi.
- Stress va uyqu rejimiga e'tibor bering: ular ko'pincha qaytalanishni qo'zg'atadi.

## Qachon dermatologga murojaat qilish kerak?

- Kepak va qichishish oddiy shampunlardan keyin ham o'tmasa.
- Toshma yuz, qosh yoki quloq orqasiga tarqalsa.
- Teri qizarib, yorilsa, namlansa yoki og'risa.
- Toshma tez-tez qaytsa yoki soch to'kilishi bilan birga kelsa.
- Tashxisga ishonchingiz komil bo'lmasa — psoriaz yoki zamburug' ehtimoli bor bo'lsa.

## Farg'ona va Qo'qonda seboreyali dermatitni davolash

Radeski Skin Clinic'da [dermatolog](/uz/services/dermatologiya) terini va bosh terisini ko'zdan kechiradi, kerak bo'lsa dermatoskopiya va laborator tahlil o'tkazadi, keyin uy parvarishi va davolash rejasini tuzadi.

- [Seboreyali dermatit — kasallik haqida qisqacha](/uz/conditions/seboreyali-dermatit);
- [Dermatolog Farg'onada](/uz/fargona/dermatolog) — qabul, narxlar va shifokorlar;
- [Dermatolog Qo'qonda](/uz/qoqon/dermatolog) — Qo'qon filialida qabul;
- soch to'kilishi ham bo'lsa: [Trixolog va trixoskopiya](/uz/articles/art-trixolog-trixoskopiya);
- o'xshash kasalliklar: [Psoriaz: tashxis va davolash](/uz/articles/art-psoriaz-tashxis-davolash-radeski), [Atopik dermatit](/uz/articles/art-atopic-dermatitis).

Kepak, qichishish yoki yuzdagi qizarish bezovta qilsa, konsultatsiyani kechiktirmang: erta boshlangan parvarish toshmani tezroq nazoratga oladi.`;
}

function ruBody(): string {
  return `Себорейный дерматит — хроническое воспалительное заболевание кожи в зонах, где много сальных желёз. Он начинается с «перхоти» на коже головы и может переходить на лицо, брови и кожу за ушами — с покраснением и шелушением. Болезнь не заразна и не опасна, но часто возвращается, вызывает зуд и влияет на внешний вид. При правильном уходе и рекомендациях дерматолога её можно надолго держать под контролем.

## Где появляется себорейный дерматит?

Высыпания возникают там, где много сальных желёз:

- кожа головы — перхоть, желтоватые жирные чешуйки, зуд;
- брови, края век и межбровье;
- носогубные складки и крылья носа;
- кожа за ушами и наружный слуховой проход;
- середина груди и область между лопатками.

У младенцев желтоватые корочки на коже головы — тоже форма себорейного дерматита; обычно они проходят сами.

## Почему он появляется?

Единой причины нет. В развитии заболевания участвуют несколько факторов:

- повышенная выработка кожного сала;
- выраженная реакция кожи на грибок *Malassezia*, который постоянно живёт на её поверхности;
- стресс, усталость и недосып;
- холодный и сухой сезон — зимой обострения чаще;
- некоторые заболевания и лекарства — это оценивает врач.

Себорейный дерматит не связан с недостатком гигиены и не передаётся другим людям.

## Чем он отличается от других заболеваний кожи

Себорейный дерматит часто путают с псориазом, грибком кожи, розацеа или атопическим дерматитом, а лечатся они по-разному:

- **псориаз** — чешуйки толще, серебристые, границы чёткие, бляшки могут быть и на локтях, коленях;
- **грибок кожи** — часто кольцевидный очаг, подтверждается лабораторным анализом;
- **розацеа** — покраснение и сосуды в центре лица, шелушения мало;
- **атопический дерматит** — сильный зуд, сухая кожа, нередко начинается в детстве.

Поэтому если шампунь «от перхоти» или крем не помогают, диагноз должен поставить дерматолог — при необходимости с дерматоскопией и лабораторным анализом.

## Как лечат себорейный дерматит?

Это хроническое заболевание: цель — быстро уменьшить высыпания и сделать обострения реже. План лечения дерматолог подбирает по расположению и выраженности:

- лечебные шампуни с противогрибковыми компонентами для кожи головы;
- противогрибковые и противовоспалительные средства для лица и тела — короткими курсами;
- мягкий уход, который не пересушивает кожу;
- при тяжёлом или распространённом процессе — другое лечение, которое назначает врач.

Нельзя самостоятельно и долго наносить гормональные кремы: на лице они истончают кожу и могут поддерживать высыпания. Любые препараты назначает врач.

## Уход в домашних условиях

- Не откладывайте мытьё головы — скопление жира и чешуек усиливает зуд.
- Лечебный шампунь используйте так, как сказал врач: вспеньте и подержите несколько минут.
- Откажитесь от спиртовых лосьонов, агрессивных скрабов и жёсткого мыла.
- Не сдирайте чешуйки — это усиливает воспаление.
- Следите за стрессом и сном: они часто провоцируют обострения.

## Когда обращаться к дерматологу?

- Перхоть и зуд не проходят после обычных шампуней.
- Высыпания распространяются на лицо, брови или кожу за ушами.
- Кожа краснеет, трескается, мокнет или болит.
- Обострения повторяются или сопровождаются выпадением волос.
- Вы не уверены в диагнозе — возможно, это псориаз или грибок.

## Лечение себорейного дерматита в Фергане и Коканде

В Radeski Skin Clinic [дерматолог](/ru/services/dermatologiya) осмотрит кожу и кожу головы, при необходимости проведёт дерматоскопию и лабораторный анализ и составит план ухода и лечения.

- [Себорейный дерматит — коротко о заболевании](/ru/conditions/seboreyali-dermatit);
- [Дерматолог в Фергане](/ru/fargona/dermatolog) — приём, цены и врачи;
- [Дерматолог в Коканде](/ru/qoqon/dermatolog) — приём в кокандском филиале;
- если выпадают волосы: [Трихолог и трихоскопия](/ru/articles/art-trixolog-trixoskopiya);
- похожие заболевания: [Псориаз: диагностика и лечение](/ru/articles/art-psoriaz-tashxis-davolash-radeski), [Атопический дерматит](/ru/articles/art-atopic-dermatitis).

Если беспокоят перхоть, зуд или покраснение на лице, не откладывайте консультацию: чем раньше начат уход, тем быстрее высыпания удаётся взять под контроль.`;
}

function enBody(): string {
  return `Seborrheic dermatitis is a chronic inflammatory skin condition in areas rich in oil glands. It often starts as "dandruff" on the scalp and can spread to the face, eyebrows and behind the ears, with redness and flaking. It is not contagious or dangerous, but it tends to come back, itches and affects appearance. With the right care and a dermatologist's advice it can be kept under control for long periods.

## Where does seborrheic dermatitis appear?

Patches appear where oil glands are abundant:

- the scalp — dandruff, yellowish greasy flakes, itching;
- the eyebrows, eyelid margins and between the brows;
- the folds beside the nose and the sides of the nose;
- behind the ears and in the ear canal;
- the centre of the chest and between the shoulder blades.

In babies, yellowish crusts on the scalp ("cradle cap") are a form of seborrheic dermatitis and usually clear on their own.

## Why does it happen?

There is no single cause. Several factors are involved:

- increased sebum production;
- a strong skin reaction to *Malassezia*, a yeast that normally lives on the skin;
- stress, fatigue and lack of sleep;
- cold, dry seasons — flares are more common in winter;
- some illnesses and medicines — a doctor assesses this.

Seborrheic dermatitis is not caused by poor hygiene and does not spread to other people.

## How it differs from other skin conditions

It is often confused with psoriasis, fungal infection, rosacea or atopic dermatitis, which are treated differently:

- **psoriasis** — thicker, silvery scales with sharp borders; plaques may also be on the elbows and knees;
- **fungal infection** — often a ring-shaped patch, confirmed by a lab test;
- **rosacea** — redness and visible vessels in the centre of the face, little flaking;
- **atopic dermatitis** — intense itching and dry skin, often starting in childhood.

So if an anti-dandruff shampoo or cream does not help, a dermatologist should make the diagnosis, with dermoscopy and a lab test when needed.

## How is it treated?

It is a chronic condition: the aim is to clear the patches quickly and make flares less frequent. The dermatologist chooses the plan by location and severity:

- medicated antifungal shampoos for the scalp;
- antifungal and anti-inflammatory products for the face and body, in short courses;
- gentle skin care that does not dry the skin;
- for severe or widespread disease, other treatment prescribed by the doctor.

Do not use steroid creams on your own for long periods: on the face they thin the skin and can keep the rash going. All medicines are prescribed by a doctor.

## Home care

- Do not put off washing your hair — built-up oil and flakes make itching worse.
- Use a medicated shampoo as your doctor advised: lather it and leave it on for a few minutes.
- Avoid alcohol-based lotions, harsh scrubs and strong soap.
- Do not pick at the flakes — it increases inflammation.
- Watch stress and sleep: they often trigger flares.

## When should you see a dermatologist?

- Dandruff and itching do not go away with ordinary shampoos.
- The rash spreads to the face, eyebrows or behind the ears.
- The skin becomes red, cracked, weepy or painful.
- Flares keep coming back or come with hair loss.
- You are not sure of the diagnosis — it might be psoriasis or a fungal infection.

## Seborrheic dermatitis treatment in Fergana and Kokand

At Radeski Skin Clinic a [dermatologist](/en/services/dermatologiya) examines the skin and scalp, performs dermoscopy and a lab test when needed, and builds a care and treatment plan.

- [Seborrheic dermatitis — the condition in brief](/en/conditions/seboreyali-dermatit);
- [Dermatologist in Fergana](/en/fargona/dermatolog) — visits, prices and doctors;
- [Dermatologist in Kokand](/en/qoqon/dermatolog) — visits at the Kokand branch;
- if you are also losing hair: [Trichologist and trichoscopy](/en/articles/art-trixolog-trixoskopiya);
- similar conditions: [Psoriasis: diagnosis and treatment](/en/articles/art-psoriaz-tashxis-davolash-radeski), [Atopic dermatitis](/en/articles/art-atopic-dermatitis).

If dandruff, itching or facial redness bother you, do not put off the consultation: the earlier care starts, the faster the rash comes under control.`;
}

export const SEBORRHEIC_DERMATITIS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Seboreyali dermatit: kepak, yuz va qoshdagi qizarish va po'st tashlash. Sabablari, psoriaz va zamburug'dan farqi, davolash va uy parvarishi. Farg'ona va Qo'qonda dermatolog qabuli.",
    body: uzBody(),
    keyTakeaways: [
      "Seboreyali dermatit — yog' bezlari ko'p joylardagi surunkali yallig'lanish: bosh terisi, qosh, burun-lab burmalari, quloq orqasi",
      "Yuqumli emas va gigiyena yetishmasligidan paydo bo'lmaydi",
      "Psoriaz, zamburug' va rozatseyaga o'xshaydi — tashxisni dermatolog qo'yadi",
      "Davolash shampun, tashqi vositalar va parvarishdan iborat; dorilarni shifokor tayinlaydi",
      'Gormonli kremlarni yuzga o‘zboshimchalik bilan uzoq surtish mumkin emas',
    ],
    tags: ['Seboreyali dermatit', 'Kepak', 'Dermatolog', 'Bosh terisi', 'Fargona', 'Qoqon', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Kepak va qichishish oddiy shampunlardan keyin ham o'tmasa",
      "Toshma yuz, qosh yoki quloq orqasiga tarqalsa",
      "Teri qizarib, yorilsa, namlansa yoki og'risa",
      "Toshma tez-tez qaytsa yoki soch to'kilishi bilan birga kelsa",
      "Tashxisga ishonch bo'lmasa — psoriaz yoki zamburug' ehtimoli",
    ],
    faq: [
      {
        question: 'Seboreyali dermatit yuqumlimi?',
        answer:
          "Yo'q. U teri yog'i, Malassezia zamburug'iga terining javobi va boshqa ichki omillar bilan bog'liq. Boshqa odamga yuqmaydi va gigiyena yetishmasligidan paydo bo'lmaydi.",
      },
      {
        question: 'Seboreyali dermatitni butunlay davolash mumkinmi?',
        answer:
          "Bu surunkali kasallik: u qaytishi mumkin. To'g'ri davolash va muntazam parvarish bilan toshmani tez nazoratga olish va qaytalanishlarni ancha kamaytirish mumkin.",
      },
      {
        question: 'Oddiy kepak va seboreyali dermatitning farqi nimada?',
        answer:
          "Kepak — bosh terisidagi yengil po'st tashlash. Seboreyali dermatitda qizarish, yog'li sarg'ish po'stlar va qichishish bo'ladi, toshma yuz, qosh va quloq orqasiga ham tarqalishi mumkin.",
      },
      {
        question: 'Psoriazdan qanday farqlanadi?',
        answer:
          "Psoriazda po'stlar qalinroq, kumushrang va chegaralari aniq bo'ladi, tirsak va tizzada ham uchraydi. Ba'zan ikkalasini ajratish qiyin — shuning uchun tashxisni dermatolog qo'yadi.",
      },
      {
        question: "Farg'ona va Qo'qonda qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog teri va bosh terisini ko'rib, kerak bo'lsa dermatoskopiya va tahlil o'tkazadi va davolash rejasini tuzadi. Qabulga sayt orqali yoki +998 73 200-73-73 raqami orqali yoziling.",
      },
    ],
  },
  ru: {
    summary:
      'Себорейный дерматит: перхоть, покраснение и шелушение на лице и бровях. Причины, отличие от псориаза и грибка, лечение и домашний уход. Приём дерматолога в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Себорейный дерматит — хроническое воспаление в зонах с сальными железами: кожа головы, брови, носогубные складки, за ушами',
      'Не заразен и не связан с недостатком гигиены',
      'Похож на псориаз, грибок и розацеа — диагноз ставит дерматолог',
      'Лечение — шампуни, наружные средства и уход; препараты назначает врач',
      'Нельзя самостоятельно и долго наносить гормональные кремы на лицо',
    ],
    tags: ['Себорейный дерматит', 'Перхоть', 'Дерматолог', 'Кожа головы', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Перхоть и зуд не проходят после обычных шампуней',
      'Высыпания распространяются на лицо, брови или за уши',
      'Кожа краснеет, трескается, мокнет или болит',
      'Обострения повторяются или сопровождаются выпадением волос',
      'Нет уверенности в диагнозе — возможно, псориаз или грибок',
    ],
    faq: [
      {
        question: 'Себорейный дерматит заразен?',
        answer:
          'Нет. Он связан с кожным салом, реакцией кожи на грибок Malassezia и другими внутренними факторами. Другим людям не передаётся и не возникает из-за недостатка гигиены.',
      },
      {
        question: 'Можно ли вылечить себорейный дерматит навсегда?',
        answer:
          'Это хроническое заболевание, и оно может возвращаться. При правильном лечении и регулярном уходе высыпания быстро удаётся взять под контроль, а обострения становятся заметно реже.',
      },
      {
        question: 'Чем перхоть отличается от себорейного дерматита?',
        answer:
          'Перхоть — лёгкое шелушение кожи головы. При себорейном дерматите есть покраснение, жирные желтоватые чешуйки и зуд, а высыпания могут переходить на лицо, брови и кожу за ушами.',
      },
      {
        question: 'Как отличить себорейный дерматит от псориаза?',
        answer:
          'При псориазе чешуйки толще, серебристые, с чёткими границами, бляшки бывают и на локтях, коленях. Иногда их трудно различить — поэтому диагноз ставит дерматолог.',
      },
      {
        question: 'Где лечить себорейный дерматит в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог осмотрит кожу и кожу головы, при необходимости проведёт дерматоскопию и анализ и составит план лечения. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Seborrheic dermatitis: dandruff, redness and flaking on the face and brows. Causes, how it differs from psoriasis and fungus, treatment and home care. Dermatology visits in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Seborrheic dermatitis is chronic inflammation in oil-rich areas: scalp, brows, nose folds, behind the ears',
      'It is not contagious and not caused by poor hygiene',
      'It resembles psoriasis, fungus and rosacea — a dermatologist makes the diagnosis',
      'Treatment combines shampoos, topical products and care; medicines are prescribed by a doctor',
      'Do not use steroid creams on the face on your own for long periods',
    ],
    tags: ['Seborrheic dermatitis', 'Dandruff', 'Dermatologist', 'Scalp', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Dandruff and itching persist after ordinary shampoos',
      'The rash spreads to the face, eyebrows or behind the ears',
      'The skin turns red, cracks, weeps or hurts',
      'Flares keep coming back or come with hair loss',
      'You are not sure of the diagnosis — it might be psoriasis or fungus',
    ],
    faq: [
      {
        question: 'Is seborrheic dermatitis contagious?',
        answer:
          'No. It is linked to sebum, the skin’s reaction to the Malassezia yeast and other internal factors. It does not spread to other people and is not caused by poor hygiene.',
      },
      {
        question: 'Can seborrheic dermatitis be cured for good?',
        answer:
          'It is a chronic condition and can come back. With the right treatment and regular care the rash comes under control quickly and flares become much less frequent.',
      },
      {
        question: 'What is the difference between dandruff and seborrheic dermatitis?',
        answer:
          'Dandruff is mild flaking of the scalp. Seborrheic dermatitis adds redness, greasy yellowish scales and itching, and can spread to the face, eyebrows and behind the ears.',
      },
      {
        question: 'How is it different from psoriasis?',
        answer:
          'Psoriasis has thicker, silvery scales with sharp borders and can also affect the elbows and knees. The two can be hard to tell apart, which is why a dermatologist makes the diagnosis.',
      },
      {
        question: 'Where can I get treatment in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand, a dermatologist examines the skin and scalp, performs dermoscopy and a lab test when needed, and builds a treatment plan. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const SEBORRHEIC_DERMATITIS_ARTICLE: Article = {
  id: 'art-seboreyali-dermatit',
  slug: 'seboreyali-dermatit',
  title: {
    uz: "Seboreyali dermatit: sabablari, belgilari va davolash — kepak, yuz va qoshdagi qizarish",
    ru: 'Себорейный дерматит: причины, симптомы и лечение — перхоть, покраснение на лице и бровях',
    en: 'Seborrheic Dermatitis: Causes, Symptoms and Treatment — Dandruff and Facial Redness',
  },
  summary: {
    uz: SEBORRHEIC_DERMATITIS_ARTICLE_CATALOG.uz.summary,
    ru: SEBORRHEIC_DERMATITIS_ARTICLE_CATALOG.ru.summary,
    en: SEBORRHEIC_DERMATITIS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: SEBORRHEIC_DERMATITIS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: SEBORRHEIC_DERMATITIS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: SEBORRHEIC_DERMATITIS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-10-27',
  image: '/articles/seboreyali-dermatit-cover.jpg',
  images: {
    uz: '/articles/seboreyali-dermatit-cover.jpg',
    ru: '/articles/seboreyali-dermatit-cover.jpg',
    en: '/articles/seboreyali-dermatit-cover.jpg',
  },
  views: 0,
};
