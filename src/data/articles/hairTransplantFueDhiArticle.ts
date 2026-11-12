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
 * Hair transplant FUE vs DHI: how the operation goes step by step, what decides the result and
 * the price (grafts, donor area, method, hairline), and what it cannot do. Facts from the
 * clinic: Dr. Abduvaliyev's profile (FUE, DHI, Long Hair, 1000+ operations), the price list
 * (from 7 000 000), the published FUE cases (6–12 months follow-up), the surgical suite video.
 */

const COVER = {
  uz: '/articles/soch-ekish-fue-dhi-cover-uz.jpg',
  ru: '/articles/soch-ekish-fue-dhi-cover-ru.jpg',
  en: '/articles/soch-ekish-fue-dhi-cover-en.jpg',
};

function uzBody(): string {
  return `Soch ekish — bemorning o‘z soch follikulalarini sochi siyraklashgan yoki to‘kilib ketgan joyga ko‘chirish operatsiyasi. Bugun eng ko‘p qo‘llaniladigan ikki usul — **FUE** va **DHI**. Ikkalasida ham chiziqli chandiq qolmaydi, lekin texnikasi, davomiyligi va qaysi holatga mosligi farq qiladi. Quyida operatsiya qanday o‘tishini, natijaga va narxga nima ta’sir qilishini tushuntiramiz.

## Graft nima va donor zona qayerda?

**Graft** — 1–4 ta sochdan iborat tabiiy follikula guruhi. Graftlar **donor zonadan** — odatda ensa va chakkalardan olinadi. Bu zonadagi sochlar androgenetik alopetsiyada to‘kilmaydi, shuning uchun yangi joyga ko‘chirilgandan keyin ham o‘sishda davom etadi. Donor zona cheksiz emas: nechta graft olish mumkinligi soch zichligi va bosh terisi holatiga bog‘liq. Shu sababli rejani shifokor donor zonani ko‘rib chiqqandan keyin tuzadi.

## FUE usuli qanday o‘tadi?

**FUE (Follicular Unit Extraction)** — graftlarni donor zonadan bittadan, mikro-asbob bilan olish usuli.

1. Donor zona qisqa qirqiladi va mahalliy og‘riqsizlantirish qilinadi.
2. Graftlar birma-bir olinadi va maxsus eritmada saqlanadi.
3. Ekiladigan zonada mikrokanallar ochiladi — ularning yo‘nalishi va burchagi tabiiy soch o‘sishiga mos tanlanadi.
4. Graftlar kanallarga joylanadi.

FUE katta zonalarni yopish va ko‘p graft kerak bo‘lganda qulay.

## DHI usulining farqi

**DHI (Direct Hair Implantation)** — graftlar xuddi FUE’dagidek olinadi, lekin ekishda maxsus **implanter** ishlatiladi: u kanal ochish va graftni joylashni bitta harakatda bajaradi. Bu soch chizig‘i, chakkalar va mavjud sochlar orasiga zichlashtirishda aniqlik beradi. DHI odatda ko‘proq vaqt va mehnat talab qiladi.

**Long Hair** transplantatsiyasida sochlar qisqa qirqilmaydi — bu operatsiyadan keyin o‘zgarishni boshqalarga kamroq bildirishni xohlaganlar uchun variant. Qaysi usul mos ekanini shifokor soch turi, zona va kerakli zichlikka qarab tanlaydi.

## Natijaga nima ta’sir qiladi?

- **To‘kilish sababi.** Avval trixolog trixoskopiya va kerak bo‘lsa tahlillar bilan sababni aniqlaydi. Faol diffuz to‘kilish, o‘choqli alopetsiya yoki temir tanqisligi bo‘lsa, avval davolash kerak.
- **Donor zona sifati** — soch zichligi va qalinligi.
- **Soch chizig‘ini to‘g‘ri chizish** — yuz proporsiyasi va yoshga mos, tabiiy chiziq.
- **Mavjud sochlarni saqlash** — operatsiyadan keyin ham trixologik davolash (masalan, PRP) tavsiya etilishi mumkin.
- **Parvarish** — birinchi haftalarda shifokor ko‘rsatmalariga amal qilish.

## Narx nimaga bog‘liq?

Radeski’da soch ekish **7 000 000 so‘mdan** boshlanadi. Yakuniy narx quyidagilarga bog‘liq:

- ekiladigan **graftlar soni** va zona kattaligi;
- **usul** — FUE, DHI yoki Long Hair;
- donor zona holati va operatsiya murakkabligi.

Aniq narx konsultatsiyada — soch chizig‘i va donor zona baholangandan keyin aytiladi.

## Natija qachon ko‘rinadi?

Ekilgan sochlar odatda dastlabki haftalarda to‘kiladi — bu normal, follikula terida qoladi. Yangi sochlar taxminan **3–4 oydan** o‘sa boshlaydi, yakuniy zichlik **9–12 oyda** shakllanadi. Radeski’da operatsiyadan keyin **6–12 oy** davomida nazorat ko‘riklari o‘tkaziladi.

## Radeski’da kim bajaradi?

Operatsiyani dermatolog-trixolog **Dr. Abduvaliyev Begali Sheraliyevich** bajaradi: soch transplantatsiyasida 4 yillik tajriba va 1000 dan ortiq operatsiya. Operatsiya klinikaning operatsion blokida o‘tadi.

Batafsil: [Soch ekish Farg‘onada](/uz/fargona/soch-ekish), [Soch ekishni qachon qilish mumkin emas](/uz/articles/art-hair-transplant-contraindications), [Soch to‘kilishi: normal yoki kasallik](/uz/articles/art-soch-tokilishi-normal-patologiya-radeski), [Trixolog va trixoskopiya](/uz/articles/art-trixolog-trixoskopiya).`;
}

function ruBody(): string {
  return `Пересадка волос — операция, при которой собственные волосяные фолликулы пациента переносят в зону поредения или облысения. Сегодня чаще всего используют два метода — **FUE** и **DHI**. При обоих не остаётся линейного рубца, но техника, длительность и показания различаются. Ниже — как проходит операция и что влияет на результат и цену.

## Что такое графт и где донорская зона?

**Графт** — естественная группа из 1–4 волос. Графты берут из **донорской зоны** — обычно с затылка и висков. Эти волосы не выпадают при андрогенетической алопеции и продолжают расти на новом месте. Донорская зона не бесконечна: сколько графтов можно взять, зависит от густоты волос и состояния кожи головы. Поэтому план составляют после осмотра донорской зоны.

## Как проходит FUE?

**FUE (Follicular Unit Extraction)** — забор графтов из донорской зоны по одному микроинструментом.

1. Донорскую зону коротко подстригают и делают местную анестезию.
2. Графты извлекают по одному и хранят в специальном растворе.
3. В зоне пересадки формируют микроканалы — их направление и угол повторяют естественный рост волос.
4. Графты помещают в каналы.

FUE удобен, когда нужно закрыть большую зону и много графтов.

## Чем отличается DHI

При **DHI (Direct Hair Implantation)** графты забирают так же, как при FUE, но пересаживают специальным **имплантером**: он формирует канал и вводит графт одним движением. Это даёт точность на линии роста, висках и при уплотнении между своими волосами. DHI обычно требует больше времени и работы.

При **Long Hair**-трансплантации волосы не стригут коротко — вариант для тех, кто хочет, чтобы изменения после операции были менее заметны окружающим. Метод врач выбирает по типу волос, зоне и нужной густоте.

## Что влияет на результат?

- **Причина выпадения.** Сначала трихолог выясняет её с помощью трихоскопии и при необходимости анализов. При активном диффузном выпадении, очаговой алопеции или дефиците железа сначала нужно лечение.
- **Качество донорской зоны** — густота и толщина волос.
- **Правильная линия роста** — естественная, по пропорциям лица и возрасту.
- **Сохранение своих волос** — после операции может понадобиться трихологическое лечение (например, PRP).
- **Уход** — соблюдение рекомендаций врача в первые недели.

## От чего зависит цена?

В Radeski пересадка волос стоит **от 7 000 000 сум**. Итоговая цена зависит от:

- **количества графтов** и размера зоны;
- **метода** — FUE, DHI или Long Hair;
- состояния донорской зоны и сложности операции.

Точную стоимость называют на консультации — после оценки линии роста и донорской зоны.

## Когда виден результат?

Пересаженные волосы обычно выпадают в первые недели — это нормально, фолликул остаётся в коже. Новые волосы начинают расти примерно через **3–4 месяца**, итоговая густота формируется к **9–12 месяцам**. В Radeski после операции **6–12 месяцев** проводятся контрольные осмотры.

## Кто проводит операцию в Radeski?

Операцию проводит дерматолог-трихолог **Абдувалиев Бегали Шералиевич**: 4 года опыта в трансплантации волос и более 1000 операций. Операция проходит в операционном блоке клиники.

Подробнее: [Пересадка волос в Фергане](/ru/fargona/soch-ekish), [Противопоказания к пересадке волос](/ru/articles/art-hair-transplant-contraindications), [Выпадение волос: норма или болезнь](/ru/articles/art-soch-tokilishi-normal-patologiya-radeski), [Трихолог и трихоскопия](/ru/articles/art-trixolog-trixoskopiya).`;
}

function enBody(): string {
  return `A hair transplant moves the patient’s own hair follicles into thinning or bald areas. The two most common methods today are **FUE** and **DHI**. Neither leaves a linear scar, but the technique, length of the procedure and best use differ. Here is how the operation goes and what affects the result and the price.

## What is a graft and where is the donor area?

A **graft** is a natural group of 1–4 hairs. Grafts are taken from the **donor area** — usually the back and sides of the head. These hairs do not fall out in androgenetic alopecia and keep growing in their new place. The donor area is limited: how many grafts can be taken depends on hair density and scalp condition, so the plan is made after the doctor examines it.

## How FUE works

**FUE (Follicular Unit Extraction)** takes grafts from the donor area one by one with a micro-instrument.

1. The donor area is trimmed short and numbed with local anaesthesia.
2. Grafts are extracted one by one and kept in a special solution.
3. Micro-channels are made in the recipient area, angled like natural hair growth.
4. The grafts are placed into the channels.

FUE suits larger areas that need many grafts.

## How DHI differs

In **DHI (Direct Hair Implantation)** grafts are taken the same way, but they are placed with a special **implanter** that makes the channel and inserts the graft in one movement. This gives precision at the hairline, temples and when adding density between existing hairs. DHI usually takes more time and work.

A **Long Hair** transplant is done without shaving the hair short — an option for people who want the change to be less noticeable after surgery. The doctor chooses the method by hair type, area and target density.

## What affects the result?

- **The cause of hair loss.** A trichologist first finds it with trichoscopy and, if needed, tests. Active diffuse shedding, alopecia areata or iron deficiency must be treated first.
- **Donor quality** — hair density and thickness.
- **A well-drawn hairline** — natural and suited to facial proportions and age.
- **Keeping your own hair** — trichology treatment (such as PRP) may be advised after surgery.
- **Aftercare** — following the doctor’s instructions in the first weeks.

## What does the price depend on?

At Radeski a hair transplant starts at **7,000,000 UZS**. The final price depends on:

- the **number of grafts** and size of the area;
- the **method** — FUE, DHI or Long Hair;
- the donor area and how complex the operation is.

The exact price is given at the consultation, after the hairline and donor area are assessed.

## When will I see the result?

Transplanted hairs usually shed in the first weeks — this is normal, the follicle stays in the skin. New hair starts growing after about **3–4 months**, and the final density forms by **9–12 months**. Radeski follows patients up for **6–12 months** after surgery.

## Who performs it at Radeski?

The operation is performed by dermatologist-trichologist **Dr. Begali Sheraliyevich Abduvaliyev**: 4 years in hair transplantation and more than 1,000 operations. It takes place in the clinic’s surgical suite.

Read more: [Hair transplant in Fergana](/en/fargona/soch-ekish), [When a hair transplant is not advised](/en/articles/art-hair-transplant-contraindications), [Hair loss: normal or a problem](/en/articles/art-soch-tokilishi-normal-patologiya-radeski), [Trichologist and trichoscopy](/en/articles/art-trixolog-trixoskopiya).`;
}

export const HAIR_TRANSPLANT_FUE_DHI_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Soch ekish FUE va DHI usullari: graft va donor zona, operatsiya bosqichlari, natija va narxga ta'sir qiluvchi omillar, natija qachon ko'rinadi. Radeski — Farg'ona.",
    body: uzBody(),
    keyTakeaways: [
      'FUE va DHI’da graftlar bittadan olinadi, chiziqli chandiq qolmaydi',
      'DHI implanter bilan ekadi — soch chizig‘i va zichlashtirishda aniqroq',
      'Natija to‘kilish sababi, donor zona va to‘g‘ri chizilgan soch chizig‘iga bog‘liq',
      'Narx graftlar soni, usul va zona kattaligiga qarab konsultatsiyada aytiladi',
      'Yangi soch 3–4 oydan o‘sadi, yakuniy natija 9–12 oyda',
    ],
    tags: ['Soch ekish', 'FUE', 'DHI', 'Long Hair', 'Soch transplantatsiyasi', 'Trixolog', "Farg'ona", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Peshona chizig‘i orqaga ketyapti yoki tepada soch siyraklashgan',
      'Soch to‘kilishi bir necha oydan beri davom etyapti',
      'Davolash yordam bermadi va soch ekish imkoniyatini bilmoqchisiz',
      'Avvalgi soch ekishdan keyin natija sizni qoniqtirmayapti',
    ],
    faq: [
      {
        question: 'FUE yoki DHI — qaysi biri yaxshi?',
        answer:
          'Bittasi har doim yaxshi emas. FUE katta zonalar uchun qulay, DHI soch chizig‘i va zichlashtirishda aniqroq. Shifokor soch turi, zona va kerakli zichlikka qarab usulni tanlaydi.',
      },
      {
        question: 'Necha graft kerak bo‘ladi?',
        answer:
          'Bu zona kattaligi, kerakli zichlik va donor zona imkoniyatiga bog‘liq. Aniq son konsultatsiyada, soch chizig‘i chizilib, donor zona baholangandan keyin aytiladi.',
      },
      {
        question: 'Operatsiya og‘riqlimi?',
        answer:
          'Operatsiya mahalliy og‘riqsizlantirish ostida o‘tadi. Keyingi kunlarda yengil noqulaylik bo‘lishi mumkin; shifokor nima qilish kerakligini yozma ravishda tushuntiradi.',
      },
      {
        question: 'Ekilgan soch qayta to‘kiladimi?',
        answer:
          'Dastlabki haftalarda ekilgan soch tolalari odatda to‘kiladi — bu normal. Follikula qoladi va 3–4 oydan yangi soch o‘sadi. Donor zonadan olingan sochlar androgenetik to‘kilishga chidamli.',
      },
      {
        question: 'Farg‘onada soch ekishni qayerda qilish mumkin?',
        answer:
          'Radeski Skin Clinic’da soch ekishni Dr. Abduvaliyev Begali bajaradi. Konsultatsiyaga saytdan yoki +998 73 200-73-73 orqali yozilishingiz mumkin.',
      },
    ],
  },
  ru: {
    summary:
      'Пересадка волос методами FUE и DHI: графты и донорская зона, этапы операции, что влияет на результат и цену, когда виден результат. Radeski — Фергана.',
    body: ruBody(),
    keyTakeaways: [
      'При FUE и DHI графты берут по одному, линейного рубца нет',
      'DHI пересаживает имплантером — точнее на линии роста и при уплотнении',
      'Результат зависит от причины выпадения, донорской зоны и правильной линии роста',
      'Цена зависит от числа графтов, метода и зоны и называется на консультации',
      'Новые волосы растут с 3–4 месяцев, итог — к 9–12 месяцам',
    ],
    tags: ['Пересадка волос', 'FUE', 'DHI', 'Long Hair', 'Трансплантация волос', 'Трихолог', 'Фергана', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Отступает линия роста или редеет макушка',
      'Волосы выпадают уже несколько месяцев',
      'Лечение не помогло, и вы хотите узнать о пересадке',
      'Результат прошлой пересадки вас не устраивает',
    ],
    faq: [
      {
        question: 'FUE или DHI — что лучше?',
        answer:
          'Универсально лучшего нет. FUE удобен для больших зон, DHI точнее на линии роста и при уплотнении. Врач выбирает метод по типу волос, зоне и нужной густоте.',
      },
      {
        question: 'Сколько графтов понадобится?',
        answer:
          'Зависит от размера зоны, нужной густоты и возможностей донорской зоны. Точное число называют на консультации после разметки линии роста и оценки донорской зоны.',
      },
      {
        question: 'Больно ли во время операции?',
        answer:
          'Операция проходит под местной анестезией. В следующие дни возможен лёгкий дискомфорт; врач письменно объясняет, что делать.',
      },
      {
        question: 'Выпадут ли пересаженные волосы?',
        answer:
          'В первые недели пересаженные стержни обычно выпадают — это нормально. Фолликул остаётся, и через 3–4 месяца растёт новый волос. Донорские волосы устойчивы к андрогенетическому выпадению.',
      },
      {
        question: 'Где сделать пересадку волос в Фергане?',
        answer:
          'В Radeski Skin Clinic пересадку волос проводит Абдувалиев Бегали. Записаться на консультацию можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Hair transplant with FUE and DHI: grafts and the donor area, the steps of the operation, what affects the result and price, and when you see results. Radeski — Fergana.',
    body: enBody(),
    keyTakeaways: [
      'FUE and DHI take grafts one by one and leave no linear scar',
      'DHI places grafts with an implanter — more precise at the hairline and for density',
      'The result depends on the cause of hair loss, the donor area and a well-drawn hairline',
      'The price depends on grafts, method and area and is given at the consultation',
      'New hair grows from 3–4 months; the final result is at 9–12 months',
    ],
    tags: ['Hair transplant', 'FUE', 'DHI', 'Long Hair', 'Hair transplantation', 'Trichologist', 'Fergana', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Your hairline is receding or your crown is thinning',
      'Hair loss has lasted several months',
      'Treatment has not helped and you want to know about a transplant',
      'You are unhappy with a previous transplant',
    ],
    faq: [
      {
        question: 'FUE or DHI — which is better?',
        answer:
          'Neither is always better. FUE suits larger areas; DHI is more precise at the hairline and for adding density. The doctor chooses by hair type, area and target density.',
      },
      {
        question: 'How many grafts will I need?',
        answer:
          'It depends on the size of the area, the density you want and what the donor area allows. The exact number is given at the consultation after the hairline is drawn and the donor area assessed.',
      },
      {
        question: 'Does the operation hurt?',
        answer:
          'It is done under local anaesthesia. Mild discomfort is possible in the following days; the doctor explains in writing what to do.',
      },
      {
        question: 'Will the transplanted hair fall out?',
        answer:
          'In the first weeks the transplanted hair shafts usually shed — this is normal. The follicle stays and new hair grows after 3–4 months. Donor hair resists androgenetic hair loss.',
      },
      {
        question: 'Where can I get a hair transplant in Fergana?',
        answer:
          'At Radeski Skin Clinic hair transplants are performed by Dr. Begali Abduvaliyev. Book a consultation on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const HAIR_TRANSPLANT_FUE_DHI_ARTICLE: Article = {
  id: 'art-soch-ekish-fue-dhi',
  slug: 'soch-ekish-fue-dhi',
  title: {
    uz: 'Soch ekish FUE va DHI usulida: jarayon, natija va narxga nima ta’sir qiladi',
    ru: 'Пересадка волос FUE и DHI: как проходит, от чего зависят результат и цена',
    en: 'Hair Transplant with FUE and DHI: The Process, Results and What Affects the Price',
  },
  summary: {
    uz: HAIR_TRANSPLANT_FUE_DHI_ARTICLE_CATALOG.uz.summary,
    ru: HAIR_TRANSPLANT_FUE_DHI_ARTICLE_CATALOG.ru.summary,
    en: HAIR_TRANSPLANT_FUE_DHI_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: HAIR_TRANSPLANT_FUE_DHI_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: HAIR_TRANSPLANT_FUE_DHI_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: HAIR_TRANSPLANT_FUE_DHI_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Abdvaliyev Begali Sheraliyevich',
    ru: 'Абдвалиев Бегали Шералиевич',
    en: 'Dr. Begali Sheraliyevich Abdvaliyev',
  },
  date: '2026-11-12',
  image: COVER.uz,
  images: COVER,
  views: 0,
};
