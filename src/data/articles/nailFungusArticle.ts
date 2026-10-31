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
 * Nail fungus (onychomycosis) in depth — the article behind the "nail fungus treatment" city
 * pages (/fargona/tirnoq-zamburug, /qoqon/tirnoq-zamburug) and the nail clinic. Key points for
 * patients: not every changed nail is fungus (lab confirmation first), the podiatrist's nail
 * cleaning, why treatment takes as long as the nail grows, and prevention of re-infection.
 */

function uzBody(): string {
  return `Tirnoq zamburug'i (onixomikoz) — tirnoq plastinkasi va uning ostidagi to'qimaning zamburug' infeksiyasi. U ko'pincha oyoq tirnoqlarida, ayniqsa bosh barmoqda boshlanadi: tirnoq rangi o'zgaradi, qalinlashadi va uvalanadi. Kasallik o'z-o'zidan o'tmaydi, vaqt o'tishi bilan boshqa tirnoqlarga va oyoq terisiga tarqaladi, oila a'zolariga ham yuqishi mumkin. Yaxshi xabar shuki, to'g'ri tashxis va izchil davolash bilan sog'lom tirnoq qayta o'sib chiqadi.

## Tirnoq zamburug'ining belgilari

- tirnoqda sariq, oq yoki jigarrang dog'lar va yo'llar;
- tirnoqning qalinlashishi va dag'allashishi;
- tirnoq chetining uvalanishi, sinuvchanligi;
- tirnoqning tirnoq yotog'idan ajralishi (onixoliz);
- tirnoq ostida kulrang massa to'planishi, yoqimsiz hid;
- poyabzal kiyganda yoki yurganda noqulaylik va og'riq.

Ko'pincha tirnoq zamburug'i bilan birga oyoq terisi zamburug'i ham bo'ladi: barmoqlar orasida qichishish, yoriqlar va po'st tashlash.

## Har qanday o'zgargan tirnoq — zamburug' emas

Tirnoqning rangi va shakli boshqa sabablardan ham o'zgaradi: tirnoq psoriazi, lat yeyish va tor poyabzal, ichga o'sgan tirnoq, qon aylanishi buzilishi, ba'zan esa jiddiyroq kasalliklar. Shuning uchun davolashni boshlashdan oldin zamburug' **laborator tahlil bilan tasdiqlanishi** kerak: tirnoqdan olingan namuna mikroskopda tekshiriladi. Tasdiqlanmagan "zamburug'ni" oylab davolash vaqt va pulni behuda sarflaydi.

## Kimlarda ko'proq uchraydi?

- oyoq ko'p terlaydigan, tor va havo o'tkazmaydigan poyabzal kiyadiganlarda;
- hovuz, sauna, hammom va sport zalida yalangoyoq yuradiganlarda;
- boshqalarning shippagi, sochig'i va tirnoq qaychisidan foydalanadiganlarda;
- qandli diabet, qon aylanishi buzilgan va immuniteti pasaygan odamlarda;
- keksa yoshda — tirnoq sekin o'sadi;
- tirnoq tez-tez shikastlanadigan sportchilarda;
- oilada kimdadir zamburug' bo'lsa.

## Qanday davolanadi?

Davolash rejasini shifokor tirnoqlar soni, zararlanish chuqurligi va bemorning sog'lig'iga qarab tuzadi:

- **Podologik ishlov** — [dermatologik podolog](/uz/services/clinika-patologii-nogtej/dermatologik-podolog-xizmati) apparat yordamida zararlangan qalin tirnoq qismini og'riqsiz olib tashlaydi. Bu tirnoqni yupqalashtiradi, noqulaylikni kamaytiradi va dori vositalarining ta'sirini kuchaytiradi.
- **Tashqi davolash** — zamburug'ga qarshi laklar va eritmalar, yengil holatlarda.
- **Tizimli davolash** — ko'p tirnoqlar yoki chuqur zararlanishda zamburug'ga qarshi tabletkalar. Ular faqat shifokor tayinlovi bilan, kerak bo'lsa jigar tahlillari nazoratida qabul qilinadi.
- **Oyoq terisini davolash** — tirnoq atrofidagi teri zamburug'i ham bir vaqtda davolanadi, aks holda infeksiya qaytadi.
- **Poyabzal va paypoqlarga ishlov** — zamburug'ga qarshi vosita bilan, qayta yuqishning oldini olish uchun.

## Davolash nega uzoq davom etadi?

Zamburug' yo'qolgan bilan eski tirnoq o'zgarmaydi — sog'lom tirnoq qayta o'sib chiqishi kerak. Qo'l tirnog'i taxminan 4–6 oyda, oyoq tirnog'i esa 12–18 oyda to'liq yangilanadi. Shuning uchun natija asta-sekin, tirnoq asosidan boshlab ko'rinadi. Davolashni muddatidan oldin to'xtatish kasallik qaytishining asosiy sababi.

## Qayta yuqmasligi uchun

- Oyoqni har kuni yuving va barmoqlar orasini yaxshilab quriting.
- Paxta paypoqlarni har kuni almashtiring, poyabzalni navbatma-navbat kiying va quriting.
- Hovuz, sauna va sport zalida shaxsiy shippak kiying.
- Shaxsiy tirnoq qaychisi, sochiq va shippakdan foydalaning.
- Tirnoqlarni to'g'ri chiziq bo'ylab, burchaklarini chuqur kesmasdan qisqartiring.
- Oila a'zolarida ham belgilar bo'lsa, ular ham tekshirilsin.

Qandli diabeti bor odamlar oyoq va tirnoq muammolarini o'zlari kesib-tozalamasligi kerak — buni podolog bajarishi xavfsizroq.

## Farg'ona va Qo'qonda tirnoq zamburug'ini davolash

Radeski Skin Clinic'ning [tirnoq va oyoq patologiyasi klinikasida](/uz/services/clinika-patologii-nogtej) dermatolog va podolog tirnoqlarni ko'zdan kechiradi, kerak bo'lsa tahlil oladi, tirnoqqa podologik ishlov beradi va davolash rejasini tuzadi.

- [Tirnoq zamburug'ini davolash Farg'onada](/uz/fargona/tirnoq-zamburug);
- [Tirnoq zamburug'ini davolash Qo'qonda](/uz/qoqon/tirnoq-zamburug);
- [Podolog Farg'onada](/uz/fargona/podolog) va [Podolog Qo'qonda](/uz/qoqon/podolog);
- boshqa tirnoq muammolari: [Ichga o'sgan tirnoq: klinik holat](/uz/articles/art-onixokriptoz-klinik-holat), [Tirnoq va oyoq patologiyasi klinikasi](/uz/articles/art-klinika-patologii-nogtej-stopy-radeski).

Zamburug' qancha erta davolansa, shuncha kam tirnoq zararlanadi va davolash shuncha qisqa bo'ladi.`;
}

function ruBody(): string {
  return `Грибок ногтей (онихомикоз) — грибковая инфекция ногтевой пластины и ткани под ней. Чаще всего он начинается на ногтях стоп, особенно на большом пальце: ноготь меняет цвет, утолщается и крошится. Сам грибок не проходит, со временем он переходит на другие ногти и кожу стоп и может передаться членам семьи. Хорошая новость: при правильной диагностике и последовательном лечении отрастает здоровый ноготь.

## Признаки грибка ногтей

- жёлтые, белые или коричневые пятна и полосы на ногте;
- утолщение и огрубение ногтя;
- крошащийся, ломкий край ногтя;
- отслоение ногтя от ногтевого ложа (онихолизис);
- серая масса под ногтем, неприятный запах;
- дискомфорт и боль в обуви и при ходьбе.

Часто вместе с грибком ногтей бывает и грибок кожи стоп: зуд между пальцами, трещины и шелушение.

## Не каждый изменённый ноготь — грибок

Цвет и форма ногтя меняются и по другим причинам: псориаз ногтей, травмы и тесная обувь, вросший ноготь, нарушение кровообращения, иногда более серьёзные заболевания. Поэтому до начала лечения грибок нужно **подтвердить анализом**: образец ногтя исследуют под микроскопом. Месяцы лечения неподтверждённого «грибка» — это потерянное время и деньги.

## У кого грибок бывает чаще?

- у тех, у кого сильно потеют ноги, кто носит тесную обувь, не пропускающую воздух;
- у тех, кто ходит босиком в бассейне, сауне, бане и спортзале;
- у тех, кто пользуется чужими тапочками, полотенцем и маникюрными ножницами;
- у людей с сахарным диабетом, нарушением кровообращения и сниженным иммунитетом;
- у пожилых — ноготь растёт медленнее;
- у спортсменов, у которых ногти часто травмируются;
- если грибок есть у кого-то в семье.

## Как лечат грибок ногтей?

План лечения врач составляет с учётом числа поражённых ногтей, глубины поражения и состояния здоровья:

- **Подологическая обработка** — [дерматологический подолог](/ru/services/clinika-patologii-nogtej/dermatologik-podolog-xizmati) аппаратом безболезненно удаляет поражённую утолщённую часть ногтя. Ноготь становится тоньше, дискомфорт уменьшается, а лекарства действуют лучше.
- **Наружное лечение** — противогрибковые лаки и растворы, в лёгких случаях.
- **Системное лечение** — противогрибковые таблетки при поражении многих ногтей или глубоком поражении. Их принимают только по назначению врача, при необходимости под контролем печёночных анализов.
- **Лечение кожи стоп** — грибок кожи вокруг ногтей лечат одновременно, иначе инфекция вернётся.
- **Обработка обуви и носков** — противогрибковым средством, чтобы не заразиться снова.

## Почему лечение такое долгое?

Когда грибок уничтожен, старый ноготь не меняется — должен отрасти здоровый. Ноготь на руке полностью обновляется примерно за 4–6 месяцев, на ноге — за 12–18 месяцев. Поэтому результат виден постепенно, начиная от основания ногтя. Главная причина рецидива — лечение, прекращённое раньше срока.

## Как не заразиться снова

- Мойте ноги каждый день и тщательно вытирайте промежутки между пальцами.
- Меняйте хлопковые носки ежедневно, чередуйте и просушивайте обувь.
- В бассейне, сауне и спортзале носите свои тапочки.
- Пользуйтесь только своими маникюрными ножницами, полотенцем и тапочками.
- Подстригайте ногти по прямой линии, не срезая глубоко уголки.
- Если признаки есть у членов семьи, пусть обследуются и они.

Людям с сахарным диабетом не стоит самостоятельно срезать и чистить ногти и стопы — безопаснее доверить это подологу.

## Лечение грибка ногтей в Фергане и Коканде

В [клинике патологии ногтей и стопы](/ru/services/clinika-patologii-nogtej) Radeski Skin Clinic дерматолог и подолог осмотрят ногти, при необходимости возьмут анализ, проведут подологическую обработку и составят план лечения.

- [Лечение грибка ногтей в Фергане](/ru/fargona/tirnoq-zamburug);
- [Лечение грибка ногтей в Коканде](/ru/qoqon/tirnoq-zamburug);
- [Подолог в Фергане](/ru/fargona/podolog) и [Подолог в Коканде](/ru/qoqon/podolog);
- другие проблемы ногтей: [Вросший ноготь: клинический случай](/ru/articles/art-onixokriptoz-klinik-holat), [Клиника патологии ногтей и стопы](/ru/articles/art-klinika-patologii-nogtej-stopy-radeski).

Чем раньше начато лечение грибка, тем меньше ногтей он успевает поразить и тем короче лечение.`;
}

function enBody(): string {
  return `Nail fungus (onychomycosis) is a fungal infection of the nail plate and the tissue beneath it. It most often starts on the toenails, especially the big toe: the nail changes colour, thickens and crumbles. It does not go away on its own; over time it spreads to other nails and to the skin of the feet, and it can pass to family members. The good news: with the right diagnosis and consistent treatment a healthy nail grows back.

## Signs of nail fungus

- yellow, white or brown spots and streaks on the nail;
- a thickened, rough nail;
- a crumbling, brittle nail edge;
- the nail lifting off the nail bed (onycholysis);
- grey debris under the nail and an unpleasant smell;
- discomfort or pain in shoes and when walking.

Nail fungus often comes with athlete's foot: itching between the toes, cracks and flaking.

## Not every changed nail is fungus

Nails also change colour and shape for other reasons: nail psoriasis, injury and tight shoes, an ingrown nail, poor circulation, and sometimes more serious conditions. That is why fungus should be **confirmed by a lab test** before treatment: a nail sample is examined under the microscope. Months of treating an unconfirmed "fungus" waste time and money.

## Who gets it more often?

- people whose feet sweat a lot and who wear tight shoes that do not breathe;
- people who walk barefoot in pools, saunas, bathhouses and gyms;
- people who share slippers, towels and nail scissors;
- people with diabetes, poor circulation or weakened immunity;
- older people — their nails grow more slowly;
- athletes, whose nails are injured often;
- anyone with a family member who has fungus.

## How is nail fungus treated?

The doctor builds the plan around how many nails are affected, how deep the infection goes and your general health:

- **Podiatric nail care** — a [dermatological podiatrist](/en/services/clinika-patologii-nogtej/dermatologik-podolog-xizmati) painlessly removes the thickened infected part of the nail with a device. The nail becomes thinner, discomfort eases and medicines work better.
- **Topical treatment** — antifungal lacquers and solutions, in mild cases.
- **Systemic treatment** — antifungal tablets when many nails are affected or the infection is deep. They are taken only on a doctor's prescription, with liver tests when needed.
- **Treating the skin of the feet** — fungus on the skin around the nails is treated at the same time, otherwise the infection returns.
- **Treating shoes and socks** — with an antifungal product, to avoid re-infection.

## Why does treatment take so long?

Once the fungus is gone, the old nail does not change — a healthy nail has to grow out. A fingernail is fully renewed in about 4–6 months, a toenail in 12–18 months. So the result shows gradually, starting from the base of the nail. Stopping treatment too early is the main reason it comes back.

## How to avoid re-infection

- Wash your feet every day and dry carefully between the toes.
- Change cotton socks daily; alternate and dry your shoes.
- Wear your own slippers in pools, saunas and gyms.
- Use only your own nail scissors, towel and slippers.
- Cut nails straight across without cutting deep into the corners.
- If family members have signs too, have them checked.

People with diabetes should not cut and clean their nails and feet themselves — it is safer to leave this to a podiatrist.

## Nail fungus treatment in Fergana and Kokand

At the Radeski Skin Clinic [nail and foot clinic](/en/services/clinika-patologii-nogtej) a dermatologist and podiatrist examine the nails, take a sample when needed, carry out podiatric nail care and build a treatment plan.

- [Nail fungus treatment in Fergana](/en/fargona/tirnoq-zamburug);
- [Nail fungus treatment in Kokand](/en/qoqon/tirnoq-zamburug);
- [Podiatrist in Fergana](/en/fargona/podolog) and [Podiatrist in Kokand](/en/qoqon/podolog);
- other nail problems: [Ingrown nail: a clinical case](/en/articles/art-onixokriptoz-klinik-holat), [Nail and foot clinic](/en/articles/art-klinika-patologii-nogtej-stopy-radeski).

The earlier nail fungus is treated, the fewer nails it reaches and the shorter the treatment.`;
}

export const NAIL_FUNGUS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Tirnoq zamburug'i (onixomikoz): tirnoq sarg'ayishi, qalinlashishi va uvalanishi. Belgilari, tahlil bilan tasdiqlash, podologik ishlov va davolash muddati. Farg'ona va Qo'qonda podolog va dermatolog.",
    body: uzBody(),
    keyTakeaways: [
      "Tirnoq zamburug'i o'z-o'zidan o'tmaydi va boshqa tirnoqlarga tarqaladi",
      "Har qanday o'zgargan tirnoq zamburug' emas — davolashdan oldin tahlil kerak",
      "Podolog zararlangan qalin tirnoq qismini og'riqsiz olib tashlaydi",
      "Oyoq tirnog'i 12–18 oyda yangilanadi — davolashni oxirigacha davom ettiring",
      "Qayta yuqmasligi uchun poyabzal, paypoq va oyoq terisi ham davolanadi",
    ],
    tags: ["Tirnoq zamburug'i", 'Onixomikoz', 'Podolog', "Oyoq zamburug'i", 'Dermatolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Tirnoq rangi o'zgarsa, qalinlashsa yoki uvalansa",
      "Tirnoq yotog'idan ajrala boshlasa",
      "Yurganda yoki poyabzalda og'riq bo'lsa",
      "Qandli diabet bo'lsa va oyoqda har qanday o'zgarish paydo bo'lsa",
      "Uy sharoitidagi vositalar 2–3 oyda natija bermasa",
    ],
    faq: [
      {
        question: "Tirnoq zamburug'i yuqumlimi?",
        answer:
          "Ha. Zamburug' umumiy shippak, sochiq, tirnoq qaychisi orqali hamda hovuz, sauna va hammomda yalangoyoq yurganda yuqadi. Oila a'zolarida ham belgilar bo'lsa, hamma birga tekshirilishi kerak.",
      },
      {
        question: "Tirnoq zamburug'ini qancha vaqtda davolash mumkin?",
        answer:
          "Zamburug'ning o'zi bir necha oyda yo'qotiladi, lekin sog'lom tirnoq qayta o'sishi kerak: qo'lda 4–6 oy, oyoqda 12–18 oy. Natija tirnoq asosidan boshlab asta-sekin ko'rinadi.",
      },
      {
        question: "Podologik ishlov og'riqlimi?",
        answer:
          "Yo'q. Podolog maxsus apparat bilan faqat zararlangan, qalinlashgan tirnoq qismini olib tashlaydi — muolaja og'riqsiz o'tadi va ko'pincha yurishdagi noqulaylikni darhol kamaytiradi.",
      },
      {
        question: "Tabletkasiz faqat lak bilan davolash mumkinmi?",
        answer:
          "Yengil holatlarda, faqat tirnoqning chetki qismi zararlangan bo'lsa — ha, podologik ishlov va tashqi vositalar yetarli bo'lishi mumkin. Ko'p tirnoqlar yoki tirnoq asosi zararlanganda shifokor tizimli davolashni tavsiya qilishi mumkin.",
      },
      {
        question: "Farg'ona va Qo'qonda tirnoq zamburug'ini qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog va podolog tirnoqlarni ko'zdan kechiradi, tahlil oladi, podologik ishlov beradi va davolash rejasini tuzadi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Грибок ногтей (онихомикоз): пожелтение, утолщение и ломкость ногтя. Признаки, подтверждение анализом, подологическая обработка и сроки лечения. Подолог и дерматолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Грибок ногтей сам не проходит и переходит на другие ногти',
      'Не каждый изменённый ноготь — грибок: до лечения нужен анализ',
      'Подолог безболезненно удаляет поражённую утолщённую часть ногтя',
      'Ноготь на ноге обновляется за 12–18 месяцев — лечение нужно довести до конца',
      'Чтобы не заразиться снова, лечат также кожу стоп, обувь и носки',
    ],
    tags: ['Грибок ногтей', 'Онихомикоз', 'Подолог', 'Грибок стопы', 'Дерматолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Ноготь изменил цвет, утолщился или крошится',
      'Ноготь начал отслаиваться от ложа',
      'Боль при ходьбе или в обуви',
      'Сахарный диабет и любые изменения на стопах',
      'Домашние средства не помогли за 2–3 месяца',
    ],
    faq: [
      {
        question: 'Заразен ли грибок ногтей?',
        answer:
          'Да. Грибок передаётся через общие тапочки, полотенца, маникюрные ножницы, а также при ходьбе босиком в бассейне, сауне и бане. Если признаки есть у членов семьи, обследоваться нужно всем вместе.',
      },
      {
        question: 'Сколько лечится грибок ногтей?',
        answer:
          'Сам грибок уничтожают за несколько месяцев, но здоровый ноготь должен отрасти: на руках — за 4–6 месяцев, на ногах — за 12–18 месяцев. Результат виден постепенно, начиная от основания ногтя.',
      },
      {
        question: 'Больно ли делать подологическую обработку?',
        answer:
          'Нет. Подолог специальным аппаратом удаляет только поражённую, утолщённую часть ногтя — процедура безболезненная и часто сразу уменьшает дискомфорт при ходьбе.',
      },
      {
        question: 'Можно ли вылечить грибок только лаком, без таблеток?',
        answer:
          'В лёгких случаях, когда поражён только край ногтя, — да: подологической обработки и наружных средств может быть достаточно. Если поражено много ногтей или основание ногтя, врач может рекомендовать системное лечение.',
      },
      {
        question: 'Где лечить грибок ногтей в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог и подолог осмотрят ногти, возьмут анализ, проведут подологическую обработку и составят план лечения. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Nail fungus (onychomycosis): yellow, thick, crumbling nails. Signs, lab confirmation, podiatric nail care and how long treatment takes. Podiatrists and dermatologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Nail fungus does not go away on its own and spreads to other nails',
      'Not every changed nail is fungus — a lab test comes before treatment',
      'A podiatrist painlessly removes the thickened infected part of the nail',
      'A toenail takes 12–18 months to grow out — finish the treatment',
      'To prevent re-infection, the skin of the feet, shoes and socks are treated too',
    ],
    tags: ['Nail fungus', 'Onychomycosis', 'Podiatrist', "Athlete's foot", 'Dermatologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A nail changes colour, thickens or crumbles',
      'The nail starts lifting off the nail bed',
      'It hurts to walk or wear shoes',
      'You have diabetes and notice any change on your feet',
      'Home remedies have not helped in 2–3 months',
    ],
    faq: [
      {
        question: 'Is nail fungus contagious?',
        answer:
          'Yes. It spreads through shared slippers, towels and nail scissors, and when walking barefoot in pools, saunas and bathhouses. If family members have signs too, everyone should be checked together.',
      },
      {
        question: 'How long does nail fungus treatment take?',
        answer:
          'The fungus itself is cleared in a few months, but a healthy nail has to grow out: 4–6 months for fingernails, 12–18 months for toenails. The result shows gradually, starting from the base of the nail.',
      },
      {
        question: 'Is podiatric nail care painful?',
        answer:
          'No. The podiatrist uses a special device to remove only the thickened infected part of the nail — the procedure is painless and often eases discomfort when walking straight away.',
      },
      {
        question: 'Can nail fungus be treated with lacquer alone, without tablets?',
        answer:
          'In mild cases, when only the edge of the nail is affected, yes — podiatric care and topical products may be enough. When many nails or the base of the nail are affected, the doctor may recommend systemic treatment.',
      },
      {
        question: 'Where can I get nail fungus treated in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist and podiatrist examine the nails, take a sample, carry out podiatric nail care and build a treatment plan. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const NAIL_FUNGUS_ARTICLE: Article = {
  id: 'art-tirnoq-zamburugi',
  slug: 'tirnoq-zamburugi',
  title: {
    uz: "Tirnoq zamburug'i (onixomikoz): belgilari, sabablari va davolash — podolog maslahati",
    ru: 'Грибок ногтей (онихомикоз): признаки, причины и лечение — советы подолога',
    en: 'Nail Fungus (Onychomycosis): Signs, Causes and Treatment — Podiatrist Advice',
  },
  summary: {
    uz: NAIL_FUNGUS_ARTICLE_CATALOG.uz.summary,
    ru: NAIL_FUNGUS_ARTICLE_CATALOG.ru.summary,
    en: NAIL_FUNGUS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: NAIL_FUNGUS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: NAIL_FUNGUS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: NAIL_FUNGUS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Karimova Iroda',
    ru: 'Каримова Ирода',
    en: 'Dr. Iroda Karimova',
  },
  date: '2026-10-31',
  image: '/articles/tirnoq-zamburugi-cover.jpg',
  images: {
    uz: '/articles/tirnoq-zamburugi-cover.jpg',
    ru: '/articles/tirnoq-zamburugi-cover.jpg',
    en: '/articles/tirnoq-zamburugi-cover.jpg',
  },
  views: 0,
};
