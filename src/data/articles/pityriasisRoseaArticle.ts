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
 * Pityriasis rosea (Gibert) — an alarming-looking rash that clears on its own in 6–8 weeks.
 * The value for patients: recognising the herald patch, why a doctor still has to rule out
 * fungus, psoriasis and other infections, care that keeps it from flaring, and pregnancy.
 */

function uzBody(): string {
  return `Pushti temiratki (Jiber temiratkisi) — tanada to'satdan paydo bo'ladigan pushti, po'st tashlaydigan dog'lar bilan kechadigan kasallik. Toshma ko'rinishidan qo'rqinchli, lekin aslida xavfli emas va ko'pincha 6–8 hafta ichida o'z-o'zidan izsiz o'tib ketadi. Asosiy vazifa — uni o'xshash, ammo davolashni talab qiladigan kasalliklardan to'g'ri ajratish.

## Pushti temiratki qanday boshlanadi?

1. **"Ona dog'"** — avval ko'krak, qorin yoki orqada bitta yirikroq (2–5 sm) pushti, oval, chetida mayda po'stli dog' paydo bo'ladi.
2. **Tarqalish** — 1–2 haftadan keyin tanada, yelka va sonlarda ko'plab kichik oval dog'lar chiqadi. Orqada ular ko'pincha "archa shoxlari" kabi qiyshiq joylashadi.
3. **Qichishish** — odatda yengil yoki umuman yo'q, issiq suv va terlashdan keyin kuchayishi mumkin.

Toshma chiqishidan oldin ba'zan yengil holsizlik, bosh og'rig'i va tomoq og'rig'i bo'ladi.

## Nima sababdan paydo bo'ladi?

Pushti temiratki ko'pincha 10–35 yoshda, kuz va bahorda uchraydi. Uni organizmda yashirin yotgan ba'zi viruslarning faollashishi bilan bog'lashadi. Kasallik kam yuqumli: oilada boshqalarda kamdan-kam paydo bo'ladi. Odatda bir marta bo'ladi va qaytmaydi.

## Nega shifokorga ko'rsatish kerak?

Pushti temiratkiga o'xshash toshmalar ko'p va ular davolanadi:

- **[teri zamburug'i](/uz/articles/art-teri-zamburugi)** — qirindi tahlili bilan farqlanadi;
- **psoriazning toshmali shakli** — batafsil: [psoriaz](/uz/articles/art-psoriaz-tashxis-davolash-radeski);
- **nummulyar [ekzema](/uz/articles/art-ekzema)** va dori toshmalari;
- ba'zi infeksiyalar — toshma ularga o'xshasa, shifokor qon tahlilini tavsiya qilishi mumkin.

Dermatolog ko'rik va dermatoskopiya bilan tashxis qo'yadi, kerak bo'lsa qirindi tahlilini o'tkazadi.

## Qanday davolanadi?

Pushti temiratki o'zi o'tadi, shuning uchun maxsus davolash ko'pincha kerak emas. Shifokor quyidagilarni tavsiya qilishi mumkin:

- qichishish bo'lsa — uni kamaytiruvchi vositalar;
- teri quruqligiga qarshi yumshoq namlovchi kremlar;
- uzoq davom etgan yoki keng toshmada — qo'shimcha davolash, shifokor qaroriga ko'ra.

Gormonli va zamburug'ga qarshi kremlarni o'zboshimchalik bilan surtish foydasiz va toshmani o'zgartirib yuboradi.

## Tiklanishni tezlashtiruvchi parvarish

- Iliq (issiq emas) suvda qisqa yuvining, mochalka bilan ishqalamang.
- Paxta matosidan keng kiyim kiying.
- Terlash va qizib ketishdan saqlaning — sport zali va saunani vaqtincha cheklang.
- Teriga spirtli losyon, skrab va xushbo'y vositalarni surtmang.
- Toshma o'tgandan keyin terida och yoki to'q dog'lar qolishi mumkin — ular bir necha oyda yo'qoladi.

## Homiladorlikda

Homilador ayolda pushti temiratkiga o'xshash toshma paydo bo'lsa, albatta shifokorga — dermatolog va ginekologga — ko'rining.

## Farg'ona va Qo'qonda dermatolog qabuli

Radeski Skin Clinic'da [dermatolog](/uz/services/dermatologiya) toshmani ko'zdan kechiradi, pushti temiratkini zamburug', psoriaz va boshqa kasalliklardan ajratadi va parvarish bo'yicha maslahat beradi.

- [Dermatolog Farg'onada](/uz/fargona/dermatolog) va [Qo'qonda](/uz/qoqon/dermatolog);
- o'xshash shikoyatlar: [teri qichishi: sabablari](/uz/articles/art-teri-qichishi).

Pushti temiratki — kutish mumkin bo'lgan kasallik, lekin faqat tashxis aniq bo'lsa: toshmani avval dermatologga ko'rsating.`;
}

function ruBody(): string {
  return `Розовый лишай (лишай Жибера) — заболевание, при котором на теле внезапно появляются розовые шелушащиеся пятна. Сыпь выглядит пугающе, но на самом деле не опасна и обычно проходит сама без следа за 6–8 недель. Главная задача — правильно отличить его от похожих болезней, которые требуют лечения.

## Как начинается розовый лишай?

1. **«Материнская бляшка»** — сначала на груди, животе или спине появляется одно более крупное (2–5 см) розовое овальное пятно с мелким шелушением по краю.
2. **Распространение** — через 1–2 недели на туловище, плечах и бёдрах появляется много мелких овальных пятен. На спине они часто расположены косо, как «ветви ёлки».
3. **Зуд** — обычно слабый или его нет совсем, может усиливаться после горячей воды и потоотделения.

Перед появлением сыпи иногда бывают лёгкая слабость, головная боль и боль в горле.

## Почему он появляется?

Розовый лишай чаще бывает в 10–35 лет, осенью и весной. Его связывают с активацией некоторых вирусов, которые скрыто живут в организме. Заразен он мало: у других членов семьи появляется редко. Обычно болеют один раз, и лишай не возвращается.

## Зачем показывать врачу?

Похожих высыпаний много, и они лечатся:

- **[грибок кожи](/ru/articles/art-teri-zamburugi)** — отличается по соскобу;
- **каплевидный псориаз** — подробнее: [псориаз](/ru/articles/art-psoriaz-tashxis-davolash-radeski);
- **нуммулярная [экзема](/ru/articles/art-ekzema)** и лекарственная сыпь;
- некоторые инфекции — если сыпь похожа на них, врач может порекомендовать анализ крови.

Дерматолог ставит диагноз при осмотре и дерматоскопии, при необходимости берёт соскоб.

## Как лечат?

Розовый лишай проходит сам, поэтому специальное лечение часто не нужно. Врач может посоветовать:

- при зуде — средства, которые его уменьшают;
- мягкие увлажняющие кремы против сухости кожи;
- при затяжной или распространённой сыпи — дополнительное лечение по решению врача.

Самостоятельно мазать гормональные и противогрибковые кремы бесполезно, а сыпь от них меняет вид.

## Уход, который ускоряет выздоровление

- Мойтесь недолго в тёплой (не горячей) воде, не трите кожу мочалкой.
- Носите свободную одежду из хлопка.
- Избегайте потливости и перегрева — на время ограничьте спортзал и сауну.
- Не наносите на кожу спиртовые лосьоны, скрабы и ароматизированные средства.
- После сыпи на коже могут остаться светлые или тёмные пятна — они проходят за несколько месяцев.

## При беременности

Если у беременной появилась сыпь, похожая на розовый лишай, обязательно покажитесь врачу — дерматологу и гинекологу.

## Приём дерматолога в Фергане и Коканде

В Radeski Skin Clinic [дерматолог](/ru/services/dermatologiya) осмотрит сыпь, отличит розовый лишай от грибка, псориаза и других заболеваний и посоветует, как ухаживать за кожей.

- [Дерматолог в Фергане](/ru/fargona/dermatolog) и [в Коканде](/ru/qoqon/dermatolog);
- похожие жалобы: [зуд кожи: причины](/ru/articles/art-teri-qichishi).

Розовый лишай — болезнь, которую можно переждать, но только при точном диагнозе: сначала покажите сыпь дерматологу.`;
}

function enBody(): string {
  return `Pityriasis rosea is a rash of pink, scaly patches that appears suddenly on the body. It looks alarming but is not dangerous and usually clears on its own without a trace in 6–8 weeks. The main task is to tell it apart from similar conditions that do need treatment.

## How does pityriasis rosea start?

1. **The "herald patch"** — first a single larger (2–5 cm) pink oval patch with fine scaling at the edge appears on the chest, belly or back.
2. **Spread** — 1–2 weeks later many small oval patches appear on the trunk, upper arms and thighs. On the back they often run at a slant, like the branches of a fir tree.
3. **Itching** — usually mild or absent; it can get worse after hot water and sweating.

Before the rash some people feel slightly unwell, with a headache or sore throat.

## Why does it appear?

It is most common between 10 and 35 years of age, in autumn and spring. It is linked to the reactivation of certain viruses that lie dormant in the body. It is not very contagious: other family members rarely get it. It usually happens once and does not come back.

## Why see a doctor?

Many rashes look similar, and they need treatment:

- **[fungal infection](/en/articles/art-teri-zamburugi)** — told apart with a skin scraping;
- **guttate psoriasis** — more: [psoriasis](/en/articles/art-psoriaz-tashxis-davolash-radeski);
- **nummular [eczema](/en/articles/art-ekzema)** and drug rashes;
- some infections — if the rash resembles them, the doctor may suggest a blood test.

A dermatologist makes the diagnosis with an examination and dermoscopy, and takes a scraping when needed.

## How is it treated?

Pityriasis rosea clears on its own, so special treatment is often not needed. The doctor may advise:

- something to ease itching, if it itches;
- gentle moisturisers for dry skin;
- additional treatment for a long-lasting or widespread rash, at the doctor's discretion.

Steroid and antifungal creams used on your own do not help and change how the rash looks.

## Care that speeds recovery

- Keep showers short and warm (not hot), and do not scrub with a washcloth.
- Wear loose cotton clothing.
- Avoid sweating and overheating — cut back on the gym and sauna for a while.
- Do not apply alcohol lotions, scrubs or fragranced products.
- Light or dark marks may remain after the rash — they fade over a few months.

## In pregnancy

If a pregnant woman develops a rash like pityriasis rosea, she should see a doctor — both a dermatologist and her gynaecologist.

## Dermatologist visits in Fergana and Kokand

At Radeski Skin Clinic a [dermatologist](/en/services/dermatologiya) examines the rash, tells pityriasis rosea apart from fungus, psoriasis and other conditions, and advises on skin care.

- [Dermatologist in Fergana](/en/fargona/dermatolog) and [in Kokand](/en/qoqon/dermatolog);
- similar complaints: [itchy skin: causes](/en/articles/art-teri-qichishi).

Pityriasis rosea is a condition you can wait out — but only once the diagnosis is certain: show the rash to a dermatologist first.`;
}

export const PITYRIASIS_ROSEA_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Pushti temiratki (Jiber): \"ona dog'\" va tanadagi pushti oval dog'lar. Sabablari, o'z-o'zidan o'tishi, zamburug' va psoriazdan farqi, parvarish va homiladorlik. Farg'ona va Qo'qonda dermatolog.",
    body: uzBody(),
    keyTakeaways: [
      "Pushti temiratki \"ona dog'\" bilan boshlanib, 1–2 haftada tanaga tarqaladi",
      "Xavfli emas va ko'pincha 6–8 haftada o'z-o'zidan o'tadi",
      "Zamburug', psoriaz va ekzemaga o'xshaydi — tashxisni dermatolog qo'yadi",
      "Issiq suv, ishqalash va terlash toshmani kuchaytiradi",
      "Homiladorlikda bunday toshma bo'lsa, albatta shifokorga ko'rining",
    ],
    tags: ['Pushti temiratki', 'Jiber temiratkisi', 'Teri toshmasi', "Teri dog'lari", 'Dermatolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Tanada to'satdan pushti po'stli dog'lar paydo bo'lsa",
      'Toshma 3 oydan ko\'p davom etsa',
      'Kuchli qichishish bo\'lsa',
      "Kaft va tovonlarda ham toshma bo'lsa",
      "Homiladorlikda toshma paydo bo'lsa",
    ],
    faq: [
      {
        question: 'Pushti temiratki yuqumlimi?',
        answer:
          "Kam yuqumli. Uni yashirin viruslarning faollashishi bilan bog'lashadi va oila a'zolarida kamdan-kam paydo bo'ladi. Karantin kerak emas, oddiy gigiyena yetarli.",
      },
      {
        question: 'Pushti temiratki qancha davom etadi?',
        answer:
          "Ko'pincha 6–8 hafta, ba'zan 12 haftagacha. Toshma 3 oydan ko'p davom etsa yoki ko'rinishi o'zgarsa, shifokorga qayta ko'rining.",
      },
      {
        question: 'Pushti temiratkida cho\'milish mumkinmi?',
        answer:
          "Ha, mumkin, lekin iliq suvda, qisqa va mochalkasiz. Issiq vanna, sauna va qattiq ishqalash toshmani kuchaytiradi.",
      },
      {
        question: 'Pushti temiratki qaytadimi?',
        answer:
          "Odatda kasallik bir marta bo'ladi va qaytmaydi. Toshma qayta-qayta chiqsa, bu boshqa kasallik bo'lishi mumkin — dermatologga ko'rining.",
      },
      {
        question: "Farg'ona va Qo'qonda qayerda tekshirish mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog toshmani ko'zdan kechiradi, kerak bo'lsa qirindi tahlilini o'tkazadi va parvarish bo'yicha maslahat beradi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Розовый лишай Жибера: «материнская бляшка» и розовые овальные пятна на теле. Причины, самостоятельное прохождение, отличие от грибка и псориаза, уход и беременность. Дерматолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Розовый лишай начинается с «материнской бляшки» и через 1–2 недели распространяется по телу',
      'Он не опасен и обычно проходит сам за 6–8 недель',
      'Похож на грибок, псориаз и экзему — диагноз ставит дерматолог',
      'Горячая вода, трение и пот усиливают сыпь',
      'Если такая сыпь при беременности — обязательно к врачу',
    ],
    tags: ['Розовый лишай', 'Лишай Жибера', 'Сыпь на теле', 'Пятна на коже', 'Дерматолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'На теле внезапно появились розовые шелушащиеся пятна',
      'Сыпь держится дольше 3 месяцев',
      'Сильный зуд',
      'Сыпь есть и на ладонях и подошвах',
      'Сыпь появилась при беременности',
    ],
    faq: [
      {
        question: 'Заразен ли розовый лишай?',
        answer:
          'Мало. Его связывают с активацией скрытых вирусов, и у членов семьи он появляется редко. Карантин не нужен, достаточно обычной гигиены.',
      },
      {
        question: 'Сколько длится розовый лишай?',
        answer:
          'Чаще всего 6–8 недель, иногда до 12 недель. Если сыпь держится дольше 3 месяцев или меняет вид, покажитесь врачу снова.',
      },
      {
        question: 'Можно ли мыться при розовом лишае?',
        answer:
          'Да, можно, но в тёплой воде, недолго и без мочалки. Горячая ванна, сауна и сильное трение усиливают сыпь.',
      },
      {
        question: 'Возвращается ли розовый лишай?',
        answer:
          'Обычно им болеют один раз, и он не возвращается. Если сыпь появляется снова и снова, это может быть другое заболевание — покажитесь дерматологу.',
      },
      {
        question: 'Где провериться в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог осмотрит сыпь, при необходимости возьмёт соскоб и посоветует уход. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Pityriasis rosea: a "herald patch" and pink oval patches on the body. Causes, how it clears on its own, how it differs from fungus and psoriasis, care and pregnancy. Dermatologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Pityriasis rosea starts with a "herald patch" and spreads over the body in 1–2 weeks',
      'It is not dangerous and usually clears on its own in 6–8 weeks',
      'It resembles fungus, psoriasis and eczema — a dermatologist makes the diagnosis',
      'Hot water, rubbing and sweat make the rash worse',
      'A rash like this in pregnancy needs a doctor',
    ],
    tags: ['Pityriasis rosea', 'Herald patch', 'Body rash', 'Skin patches', 'Dermatologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Pink, scaly patches suddenly appear on the body',
      'The rash lasts more than 3 months',
      'Severe itching',
      'The rash also affects the palms and soles',
      'A rash appears during pregnancy',
    ],
    faq: [
      {
        question: 'Is pityriasis rosea contagious?',
        answer:
          'Hardly. It is linked to the reactivation of dormant viruses, and family members rarely get it. No isolation is needed; ordinary hygiene is enough.',
      },
      {
        question: 'How long does it last?',
        answer:
          'Usually 6–8 weeks, sometimes up to 12. If the rash lasts longer than 3 months or changes, see the doctor again.',
      },
      {
        question: 'Can I shower with pityriasis rosea?',
        answer:
          'Yes, but keep it short, warm and without a washcloth. Hot baths, saunas and hard rubbing make the rash worse.',
      },
      {
        question: 'Does pityriasis rosea come back?',
        answer:
          'It usually happens once and does not return. If a rash keeps coming back, it may be something else — see a dermatologist.',
      },
      {
        question: 'Where can I get it checked in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist examines the rash, takes a scraping when needed and advises on care. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const PITYRIASIS_ROSEA_ARTICLE: Article = {
  id: 'art-pushti-temiratki',
  slug: 'pushti-temiratki',
  title: {
    uz: "Pushti temiratki (Jiber): tanadagi pushti dog'lar — xavflimi va qancha davom etadi",
    ru: 'Розовый лишай Жибера: розовые пятна на теле — опасно ли и сколько длится',
    en: 'Pityriasis Rosea: Pink Patches on the Body — Is It Dangerous and How Long Does It Last',
  },
  summary: {
    uz: PITYRIASIS_ROSEA_ARTICLE_CATALOG.uz.summary,
    ru: PITYRIASIS_ROSEA_ARTICLE_CATALOG.ru.summary,
    en: PITYRIASIS_ROSEA_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: PITYRIASIS_ROSEA_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: PITYRIASIS_ROSEA_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: PITYRIASIS_ROSEA_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: "Turg'unov Shohruz Ilxomjon o'g'li",
    ru: 'Тургунов Шохруз Илхомжон угли',
    en: 'Dr. Shohruz Ilxomjon ugli Turgunov',
  },
  date: '2026-11-11',
  image: '/articles/pushti-temiratki-cover.webp',
  images: {
    uz: '/articles/pushti-temiratki-cover.webp',
    ru: '/articles/pushti-temiratki-cover.webp',
    en: '/articles/pushti-temiratki-cover.webp',
  },
  views: 0,
};
