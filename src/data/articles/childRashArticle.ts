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
 * Rashes in children — a parent's guide for the paediatric dermatology service. Emergency signs
 * come first (a rash that does not fade under a pressed glass with fever: call 103), then the
 * common causes, each linked to its own article, and what parents should not do.
 */

function uzBody(): string {
  return `Bolalarda teri toshmalari juda ko'p uchraydi va ota-onalarni ko'pincha xavotirga soladi. Aksariyat toshmalar xavfsiz va tez o'tadi, lekin ba'zilari shifokor ko'rigini, kamdan-kam hollarda esa shoshilinch yordamni talab qiladi. Ushbu maqola qachon xavotir olish va qachon dermatologga borish kerakligini tushunishga yordam beradi.

## Darhol tez yordam chaqiring (103)

Quyidagi holatlarda kutmang:

- toshma **bosilganda yo'qolmasa** va bolada isitma bo'lsa. Tekshirish oson: shaffof stakanni toshmaga bosing — agar dog'lar stakan orqali ko'rinib tursa, darhol 103 ga qo'ng'iroq qiling;
- bola juda holsiz, uyquchan, bezovta yoki yig'isi to'xtamasa;
- nafas olish qiyinlashsa, lab, yuz yoki til shishsa;
- terida keng pufaklar paydo bo'lib, teri ko'chsa;
- 3 oylikkacha bo'lgan chaqaloqda isitma va toshma bo'lsa.

## Bolalarda eng ko'p uchraydigan toshmalar

- **Atopik dermatit** — quruq, qizargan, qichiydigan teri; yonoqlar, tirsak va tizza burmalarida. Batafsil: [atopik dermatit](/uz/articles/art-atopic-dermatitis).
- **Eshakemi va allergiya** — tez paydo bo'lib yo'qoladigan qichiydigan pufaklar. Batafsil: [eshakemi va teri allergiyasi](/uz/articles/art-eshakemi-teri-allergiyasi).
- **Pampers (taglik) dermatiti** — taglik ostida qizarish; tez-tez almashtirish, havo vannalari va himoya kremi yordam beradi. Burmalarda chuqur qizarish va atrofida mayda dog'lar bo'lsa, bu zamburug' bo'lishi mumkin.
- **Terlama** — issiqdan bo'yin, ko'krak va orqada mayda qizil toshma; bolani ortiqcha o'rash kerak emas.
- **Virusli toshmalar** — suvchechak, qizilcha va boshqa infeksiyalar; ko'pincha isitma bilan birga. Suvchechakdagi pufakchalarni yormang.
- **Kontagioz mollyusk** — markazi botiq mayda marvaridsimon tugunchalar. Batafsil: [kontagioz mollyusk](/uz/articles/art-kontagioz-mollyusk-radeski).
- **So'gallar** — qo'l va oyoqda qattiq o'simtalar. Batafsil: [bolalarda so'gallar](/uz/articles/art-bolalarda-sogal-co2-deka).
- **Qo'tir** — kechasi qichishish, barmoqlar orasida toshma, oilada ham bo'ladi. Batafsil: [qo'tir](/uz/articles/art-qotir).
- **Teri va bosh terisi zamburug'i** — halqasimon dog'lar yoki sochi sinib qolgan dumaloq o'choqlar, ko'pincha mushuk va itlardan. Batafsil: [teri zamburug'i](/uz/articles/art-teri-zamburugi).
- **Gerpes** — lab atrofida pufakchalar. Batafsil: [gerpes](/uz/articles/art-gerpes).

## Ota-onalar nima qilmasligi kerak?

- Kattalar uchun mo'ljallangan krem va dorilarni bolaga surtmang.
- Gormonli kremni o'zboshimchalik bilan ishlatmang — ayniqsa yuz va taglik ostida.
- Yod, brilliant yashili va spirtni keng toshmaga surtmang: ular terini kuydiradi va shifokorga toshmani ko'rishga xalaqit beradi.
- Pufakcha va qobiqlarni yormang, bolaning tirnoqlarini qisqa qiling.
- Toshma bilan bog'chaga yubormasdan oldin yuqumli emasligini aniqlang.

## Shifokorga qachon borish kerak?

- toshma 2–3 kunda o'tmasa yoki tarqalsa;
- kuchli qichishish uyquni buzsa;
- toshma namlansa, yiringlasa yoki og'risa;
- oilada boshqalarda ham shunga o'xshash toshma bo'lsa;
- toshma yangi ovqat yoki dori bilan bog'liq bo'lsa.

Qabulga kelishdan oldin toshmani **telefonga suratga oling** — ba'zi toshmalar tez yo'qoladi.

## Farg'ona va Qo'qonda bolalar dermatologi

Radeski Skin Clinic'da [bolalar dermatologi](/uz/services/dermatologiya/bolalar-dermatologiyasi) toshmani ko'zdan kechiradi, kerak bo'lsa dermatoskopiya va qirindi tahlilini o'tkazadi va bola yoshiga mos davolash va parvarishni tanlaydi.

- [Dermatologiya bo'limi](/uz/services/dermatologiya);
- [Dermatolog Farg'onada](/uz/fargona/dermatolog) va [Qo'qonda](/uz/qoqon/dermatolog).

Bolaning terisi kattalarnikidan yupqa va sezgir: toshmani o'zingiz "davolashdan" oldin uni shifokorga ko'rsating.`;
}

function ruBody(): string {
  return `Сыпь у детей встречается очень часто и нередко пугает родителей. Большинство высыпаний безопасны и быстро проходят, но некоторые требуют осмотра врача, а в редких случаях — срочной помощи. Эта статья поможет понять, когда стоит волноваться и когда идти к дерматологу.

## Срочно вызывайте скорую (103)

Не ждите, если:

- сыпь **не бледнеет при надавливании**, а у ребёнка температура. Проверить просто: прижмите к сыпи прозрачный стакан — если пятна видны сквозь стекло, сразу звоните 103;
- ребёнок очень вялый, сонливый, беспокойный или не перестаёт плакать;
- стало трудно дышать, отекают губы, лицо или язык;
- на коже распространённые пузыри и кожа отслаивается;
- у младенца до 3 месяцев температура и сыпь.

## Самые частые высыпания у детей

- **Атопический дерматит** — сухая, красная, зудящая кожа на щеках, в локтевых и подколенных сгибах. Подробнее: [атопический дерматит](/ru/articles/art-atopic-dermatitis).
- **Крапивница и аллергия** — зудящие волдыри, которые быстро появляются и исчезают. Подробнее: [крапивница и аллергия на коже](/ru/articles/art-eshakemi-teri-allergiyasi).
- **Пелёночный дерматит** — покраснение под подгузником; помогают частая смена подгузника, воздушные ванны и защитный крем. Если в складках яркое покраснение с мелкими пятнышками вокруг, это может быть грибок.
- **Потница** — мелкая красная сыпь на шее, груди и спине от перегрева; ребёнка не нужно кутать.
- **Вирусные сыпи** — ветрянка, краснуха и другие инфекции, часто с температурой. Пузырьки при ветрянке не вскрывайте.
- **Контагиозный моллюск** — мелкие перламутровые узелки с вдавлением в центре. Подробнее: [контагиозный моллюск](/ru/articles/art-kontagioz-mollyusk-radeski).
- **Бородавки** — плотные наросты на руках и ногах. Подробнее: [бородавки у детей](/ru/articles/art-bolalarda-sogal-co2-deka).
- **Чесотка** — ночной зуд, сыпь между пальцами, бывает у всей семьи. Подробнее: [чесотка](/ru/articles/art-qotir).
- **Грибок кожи и волосистой части головы** — кольцевидные пятна или круглые очаги с обломанными волосами, часто от кошек и собак. Подробнее: [грибок кожи](/ru/articles/art-teri-zamburugi).
- **Герпес** — пузырьки вокруг губ. Подробнее: [герпес](/ru/articles/art-gerpes).

## Чего не стоит делать родителям?

- Не мажьте ребёнку кремы и лекарства для взрослых.
- Не используйте гормональный крем самостоятельно — особенно на лице и под подгузником.
- Не мажьте обширную сыпь йодом, зелёнкой и спиртом: они обжигают кожу и мешают врачу рассмотреть сыпь.
- Не вскрывайте пузырьки и корочки, коротко стригите ребёнку ногти.
- Прежде чем вести ребёнка с сыпью в детский сад, выясните, что она не заразна.

## Когда идти к врачу?

- сыпь не проходит за 2–3 дня или распространяется;
- сильный зуд мешает спать;
- сыпь мокнет, гноится или болит;
- похожая сыпь у других членов семьи;
- сыпь связана с новой едой или лекарством.

Перед приёмом **сфотографируйте сыпь на телефон** — некоторые высыпания быстро исчезают.

## Детский дерматолог в Фергане и Коканде

В Radeski Skin Clinic [детский дерматолог](/ru/services/dermatologiya/bolalar-dermatologiyasi) осмотрит сыпь, при необходимости проведёт дерматоскопию и соскоб и подберёт лечение и уход по возрасту ребёнка.

- [Отделение дерматологии](/ru/services/dermatologiya);
- [Дерматолог в Фергане](/ru/fargona/dermatolog) и [в Коканде](/ru/qoqon/dermatolog).

Кожа ребёнка тоньше и чувствительнее, чем у взрослого: прежде чем «лечить» сыпь самостоятельно, покажите её врачу.`;
}

function enBody(): string {
  return `Rashes are very common in children and often worry parents. Most are harmless and clear quickly, but some need a doctor's examination and, rarely, urgent help. This article helps you tell when to worry and when to see a dermatologist.

## Call an ambulance right away (103)

Do not wait if:

- a rash **does not fade when pressed** and your child has a fever. It is easy to check: press a clear glass against the rash — if the spots are still visible through the glass, call 103 at once;
- your child is very floppy, drowsy, irritable or will not stop crying;
- breathing becomes difficult, or the lips, face or tongue swell;
- widespread blisters appear and the skin peels;
- a baby under 3 months has a fever and a rash.

## The most common rashes in children

- **Atopic dermatitis** — dry, red, itchy skin on the cheeks and in the elbow and knee creases. More: [atopic dermatitis](/en/articles/art-atopic-dermatitis).
- **Hives and allergy** — itchy welts that come and go quickly. More: [hives and skin allergy](/en/articles/art-eshakemi-teri-allergiyasi).
- **Nappy rash** — redness under the nappy; frequent changes, nappy-free time and a barrier cream help. Bright redness in the folds with small spots around it may be a yeast infection.
- **Heat rash** — tiny red spots on the neck, chest and back from overheating; do not over-wrap your child.
- **Viral rashes** — chickenpox, rubella and other infections, often with fever. Do not pop chickenpox blisters.
- **Molluscum contagiosum** — small pearly bumps with a dimple in the centre. More: [molluscum contagiosum](/en/articles/art-kontagioz-mollyusk-radeski).
- **Warts** — firm growths on the hands and feet. More: [warts in children](/en/articles/art-bolalarda-sogal-co2-deka).
- **Scabies** — night-time itching, a rash between the fingers, often in the whole family. More: [scabies](/en/articles/art-qotir).
- **Fungal infection of the skin and scalp** — ring-shaped patches or round patches with broken hairs, often from cats and dogs. More: [fungal skin infections](/en/articles/art-teri-zamburugi).
- **Cold sores** — blisters around the lips. More: [herpes](/en/articles/art-gerpes).

## What parents should not do

- Do not use adult creams and medicines on a child.
- Do not use steroid cream on your own — especially on the face and under the nappy.
- Do not paint a widespread rash with iodine, brilliant green or alcohol: they burn the skin and make it harder for the doctor to see the rash.
- Do not pop blisters or pick crusts; keep your child's nails short.
- Before sending a child with a rash to nursery, find out whether it is contagious.

## When to see a doctor

- the rash does not clear in 2–3 days or spreads;
- severe itching disturbs sleep;
- the rash weeps, oozes pus or hurts;
- other family members have a similar rash;
- the rash is linked to a new food or medicine.

Before the visit, **take a photo of the rash** — some rashes fade quickly.

## Paediatric dermatologist in Fergana and Kokand

At Radeski Skin Clinic a [paediatric dermatologist](/en/services/dermatologiya/bolalar-dermatologiyasi) examines the rash, performs dermoscopy and a scraping when needed, and chooses treatment and care suited to the child's age.

- [Dermatology department](/en/services/dermatologiya);
- [Dermatologist in Fergana](/en/fargona/dermatolog) and [in Kokand](/en/qoqon/dermatolog).

A child's skin is thinner and more sensitive than an adult's: show a rash to a doctor before trying to "treat" it yourself.`;
}

export const CHILD_RASH_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Bolalarda teri toshmalari: qachon darhol tez yordam chaqirish kerak (stakan testi), eng ko'p uchraydigan sabablar, ota-onalar xatolari va bolalar dermatologiga qachon borish. Farg'ona va Qo'qonda.",
    body: uzBody(),
    keyTakeaways: [
      "Bosilganda yo'qolmaydigan toshma va isitma — darhol 103",
      "Ko'pchilik bolalar toshmalari xavfsiz: atopik dermatit, terlama, taglik dermatiti, allergiya",
      "Kattalar kremlari va gormonli vositalarni bolaga o'zboshimchalik bilan surtmang",
      "Toshma 2–3 kunda o'tmasa yoki tarqalsa — dermatologga",
      "Qabulga kelishdan oldin toshmani suratga oling",
    ],
    tags: ['Bolalarda toshma', 'Bolalar dermatologi', 'Taglik dermatiti', 'Atopik dermatit', 'Allergiya', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Toshma bosilganda yo'qolmasa va isitma bo'lsa — darhol 103",
      "Toshma 2–3 kunda o'tmasa yoki tarqalsa",
      'Qichishish uyquni buzsa',
      "Toshma namlansa, yiringlasa yoki og'risa",
      "Oilada boshqalarda ham toshma bo'lsa",
    ],
    faq: [
      {
        question: 'Stakan testi qanday qilinadi?',
        answer:
          "Shaffof stakanni toshmaga mahkam bosing. Oddiy toshma bosilganda oqarib ketadi. Agar dog'lar stakan orqali ham ko'rinib tursa va bolada isitma bo'lsa, bu xavfli infeksiya belgisi bo'lishi mumkin — darhol 103 ga qo'ng'iroq qiling.",
      },
      {
        question: 'Toshma bilan bolani bog\'chaga yuborish mumkinmi?',
        answer:
          "Bu toshma turiga bog'liq. Suvchechak, qo'tir, zamburug' va ba'zi boshqa toshmalar yuqumli. Shifokor tashxis qo'yib, qachon jamoaga qaytish mumkinligini aytadi.",
      },
      {
        question: 'Taglik dermatitini qanday davolash kerak?',
        answer:
          "Taglikni tez-tez almashtiring, terini yumshoq yuving va quriting, havo vannalari qiling va himoya kremi surting. 3 kunda yaxshilanmasa yoki burmalarda yorqin qizarish bo'lsa, shifokorga ko'rsating — zamburug' bo'lishi mumkin.",
      },
      {
        question: 'Bolalarda gormonli kremni ishlatish mumkinmi?',
        answer:
          "Faqat shifokor tayinlaganda va u aytgan muddatda. Bolalar terisi yupqa, gormonli vositalar unga tezroq so'riladi, shuning uchun o'zboshimchalik bilan ishlatish xavfli.",
      },
      {
        question: "Farg'ona va Qo'qonda bolalar dermatologi qayerda qabul qiladi?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida bolalar dermatologi toshmani ko'zdan kechiradi va bola yoshiga mos davolash tanlaydi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Сыпь у детей: когда сразу вызывать скорую (тест со стаканом), самые частые причины, ошибки родителей и когда идти к детскому дерматологу. Фергана и Коканд.',
    body: ruBody(),
    keyTakeaways: [
      'Сыпь, которая не бледнеет при надавливании, и температура — сразу 103',
      'Большинство детских сыпей безопасны: атопический дерматит, потница, пелёночный дерматит, аллергия',
      'Не мажьте ребёнку взрослые и гормональные кремы самостоятельно',
      'Сыпь не проходит за 2–3 дня или распространяется — к дерматологу',
      'Перед приёмом сфотографируйте сыпь',
    ],
    tags: ['Сыпь у детей', 'Детский дерматолог', 'Пелёночный дерматит', 'Атопический дерматит', 'Аллергия', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Сыпь не бледнеет при надавливании и есть температура — сразу 103',
      'Сыпь не проходит за 2–3 дня или распространяется',
      'Зуд мешает спать',
      'Сыпь мокнет, гноится или болит',
      'Похожая сыпь у других членов семьи',
    ],
    faq: [
      {
        question: 'Как сделать тест со стаканом?',
        answer:
          'Плотно прижмите прозрачный стакан к сыпи. Обычная сыпь при надавливании бледнеет. Если пятна видны сквозь стекло и у ребёнка температура, это может быть признаком опасной инфекции — сразу звоните 103.',
      },
      {
        question: 'Можно ли водить ребёнка с сыпью в детский сад?',
        answer:
          'Зависит от вида сыпи. Ветрянка, чесотка, грибок и некоторые другие высыпания заразны. Врач поставит диагноз и скажет, когда можно вернуться в коллектив.',
      },
      {
        question: 'Как лечить пелёночный дерматит?',
        answer:
          'Чаще меняйте подгузник, мягко очищайте и просушивайте кожу, устраивайте воздушные ванны и наносите защитный крем. Если за 3 дня лучше не стало или в складках яркое покраснение, покажите ребёнка врачу — это может быть грибок.',
      },
      {
        question: 'Можно ли детям гормональные кремы?',
        answer:
          'Только по назначению врача и на срок, который он укажет. Кожа ребёнка тонкая, гормональные средства всасываются быстрее, поэтому применять их самостоятельно опасно.',
      },
      {
        question: 'Где принимает детский дерматолог в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде детский дерматолог осмотрит сыпь и подберёт лечение по возрасту ребёнка. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Rashes in children: when to call an ambulance at once (the glass test), the most common causes, mistakes parents make and when to see a paediatric dermatologist. Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'A rash that does not fade when pressed, plus fever — call 103 at once',
      'Most childhood rashes are harmless: atopic dermatitis, heat rash, nappy rash, allergy',
      'Do not use adult or steroid creams on a child on your own',
      'A rash that lasts 2–3 days or spreads needs a dermatologist',
      'Take a photo of the rash before the visit',
    ],
    tags: ['Rash in children', 'Paediatric dermatologist', 'Nappy rash', 'Atopic dermatitis', 'Allergy', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A rash that does not fade when pressed, with fever — call 103',
      'The rash lasts more than 2–3 days or spreads',
      'Itching disturbs sleep',
      'The rash weeps, oozes pus or hurts',
      'Other family members have a similar rash',
    ],
    faq: [
      {
        question: 'How do I do the glass test?',
        answer:
          'Press a clear glass firmly against the rash. An ordinary rash fades under pressure. If the spots are still visible through the glass and your child has a fever, it can be a sign of a dangerous infection — call 103 immediately.',
      },
      {
        question: 'Can my child go to nursery with a rash?',
        answer:
          'It depends on the rash. Chickenpox, scabies, fungal infections and some others are contagious. The doctor makes the diagnosis and tells you when your child can go back.',
      },
      {
        question: 'How do I treat nappy rash?',
        answer:
          'Change nappies often, clean and dry the skin gently, allow nappy-free time and use a barrier cream. If it is not better in 3 days or the folds are bright red, see a doctor — it may be a yeast infection.',
      },
      {
        question: 'Can children use steroid creams?',
        answer:
          "Only when a doctor prescribes them, and only for as long as advised. A child's skin is thin and absorbs steroids faster, so using them on your own is risky.",
      },
      {
        question: 'Where is there a paediatric dermatologist in Fergana and Kokand?',
        answer:
          "At the Radeski Skin Clinic branches in Fergana and Kokand a paediatric dermatologist examines the rash and chooses treatment suited to the child's age. Book on the website or call +998 73 200-73-73.",
      },
    ],
  },
};

export const CHILD_RASH_ARTICLE: Article = {
  id: 'art-bolalarda-teri-toshmalari',
  slug: 'bolalarda-teri-toshmalari',
  title: {
    uz: "Bolalarda teri toshmalari: qachon xavotir olish va qachon dermatologga borish kerak",
    ru: 'Сыпь у ребёнка: когда волноваться и когда идти к дерматологу',
    en: 'Rashes in Children: When to Worry and When to See a Dermatologist',
  },
  summary: {
    uz: CHILD_RASH_ARTICLE_CATALOG.uz.summary,
    ru: CHILD_RASH_ARTICLE_CATALOG.ru.summary,
    en: CHILD_RASH_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: CHILD_RASH_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: CHILD_RASH_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: CHILD_RASH_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Usmanova Mohinabonu Anvarovna',
    ru: 'Усманова Мохинабону Анваровна',
    en: 'Dr. Mohinabonu Anvarovna Usmanova',
  },
  date: '2026-11-10',
  image: '/articles/bolalarda-teri-toshmalari-cover.jpg',
  images: {
    uz: '/articles/bolalarda-teri-toshmalari-cover.jpg',
    ru: '/articles/bolalarda-teri-toshmalari-cover.jpg',
    en: '/articles/bolalarda-teri-toshmalari-cover.jpg',
  },
  views: 0,
};
