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
 * Beard and moustache transplant: who it suits (patchy growth, scars), when to treat or wait
 * instead (alopecia areata in the beard, young age), how the operation goes (FUE from the back
 * of the head, DHI for direction), recovery and the timeline. Clinic facts: the beard transplant
 * video, Dr. Abduvaliyev's profile (FUE, DHI), the price list (from 7 000 000 for hair).
 */

const COVER = {
  uz: '/articles/soqol-ekish-cover-uz.jpg',
  ru: '/articles/soqol-ekish-cover-ru.jpg',
  en: '/articles/soqol-ekish-cover-en.jpg',
};

function uzBody(): string {
  return `Ko‘p erkaklarda soqol notekis o‘sadi: yonoqda siyrak, iyakda «teshiklar», mo‘ylov bilan soqol tutashmaydi. Ba’zilarda esa chandiq yoki kuyish izi joyida soch o‘smaydi. Bunday holatlarda **soqol va mo‘ylov ekish** — o‘z soch follikulalarini yuzga ko‘chirish — yordam berishi mumkin. Lekin har bir siyrak soqol operatsiyani talab qilmaydi: avval sababini bilish kerak.

## Kimga mos keladi?

- Soqol tabiatan **siyrak yoki notekis** o‘sadigan erkaklar.
- **Chandiq**, kuyish yoki jarohatdan keyin soch o‘smaydigan joylar.
- Mo‘ylov yoki «chakka-soqol» chizig‘ini to‘ldirmoqchi bo‘lganlar.

## Qachon operatsiyaga shoshilmaslik kerak?

- **O‘choqli alopetsiya** — soqolda birdan paydo bo‘lgan yumaloq, silliq o‘choqlar. Bu autoimmun holat bo‘lib, avval davolanadi; faol davrida ko‘chirilgan sochlar ham to‘kilishi mumkin.
- **Yosh** — soqol o‘sishi ko‘pincha 25 yoshgacha davom etadi; erta yoshda shifokor kutishni tavsiya qilishi mumkin.
- Yuz terisidagi **faol yallig‘lanish**, infeksiya yoki nazoratsiz surunkali kasalliklar.

Shuning uchun birinchi qadam — **trixolog konsultatsiyasi**: yuz terisi, donor zona va o‘sish xususiyati baholanadi.

## Operatsiya qanday o‘tadi?

1. **Reja:** soqol chizig‘i, zichlik va graftlar soni belgilanadi.
2. **Graftlar olish:** odatda ensadan, **FUE** usulida — bittadan, chiziqli chandiqsiz.
3. **Ekish:** yuzda soch yo‘nalishi va burchagi juda muhim — soqol sochlari teriga deyarli yotib o‘sadi. Shu sababli **DHI** implanteri yoki juda mayda kanallar ishlatiladi.
4. Hammasi **mahalliy og‘riqsizlantirish** ostida o‘tadi.

## Tiklanish va natija

- Birinchi kunlarda yuzda yengil shish va mayda qobiqchalar bo‘lishi mumkin — ular odatda 1–2 hafta ichida tushadi.
- Soqolni qachon qirtish mumkinligini shifokor aytadi; birinchi haftalarda ekilgan zonani ishqalamaslik muhim.
- Ekilgan sochlar odatda dastlabki haftalarda to‘kiladi — bu normal.
- Yangi soch **3–4 oydan** o‘sa boshlaydi, yakuniy natija taxminan **9–12 oyda**.

Ko‘chirilgan sochlar bosh terisidan olingani uchun ular **o‘sishda davom etadi** — ularni oddiy soqol kabi qirtish va shakllantirish mumkin.

## Radeski’da

Soqol va mo‘ylov ekishni dermatolog-trixolog **Dr. Abduvaliyev Begali Sheraliyevich** bajaradi — FUE va DHI usullarida. Narx graftlar soni va zonaga qarab konsultatsiyada aytiladi.

Batafsil: [Soch ekish Farg‘onada](/uz/fargona/soch-ekish), [Soch ekish FUE va DHI usulida](/uz/articles/art-soch-ekish-fue-dhi), [Soch ekishdan keyin](/uz/articles/art-soch-ekishdan-keyin), [O‘choqli alopetsiya: klinik holat](/uz/articles/art-alopecia-areata-klinik-holat).`;
}

function ruBody(): string {
  return `У многих мужчин борода растёт неравномерно: редкая на щеках, «пробелы» на подбородке, усы не соединяются с бородой. У других на месте рубца или ожога волосы не растут. В таких случаях может помочь **пересадка бороды и усов** — перенос собственных фолликулов на лицо. Но не каждая редкая борода требует операции: сначала нужно понять причину.

## Кому подходит?

- Мужчинам с **редкой или неравномерной** бородой от природы.
- При участках без волос после **рубца**, ожога или травмы.
- Тем, кто хочет заполнить линию усов или переход от висков к бороде.

## Когда не стоит спешить с операцией?

- **Очаговая алопеция** — внезапные круглые гладкие очаги в бороде. Это аутоиммунное состояние, его сначала лечат; в активной фазе могут выпасть и пересаженные волосы.
- **Возраст** — рост бороды часто продолжается до 25 лет; в молодом возрасте врач может посоветовать подождать.
- **Активное воспаление** кожи лица, инфекция или некомпенсированные хронические болезни.

Поэтому первый шаг — **консультация трихолога**: оценка кожи лица, донорской зоны и особенностей роста.

## Как проходит операция?

1. **План:** линия бороды, густота и количество графтов.
2. **Забор графтов:** обычно с затылка, методом **FUE** — по одному, без линейного рубца.
3. **Пересадка:** на лице очень важны направление и угол — волосы бороды растут почти прижатыми к коже. Поэтому используют имплантер **DHI** или очень мелкие каналы.
4. Всё проходит под **местной анестезией**.

## Восстановление и результат

- В первые дни возможен лёгкий отёк и мелкие корочки — обычно они отходят за 1–2 недели.
- Когда можно бриться, скажет врач; в первые недели важно не тереть зону пересадки.
- Пересаженные волосы обычно выпадают в первые недели — это нормально.
- Новые волосы растут с **3–4 месяцев**, итог — примерно к **9–12 месяцам**.

Пересаженные волосы взяты с головы, поэтому **продолжают расти** — их можно брить и оформлять как обычную бороду.

## В Radeski

Пересадку бороды и усов проводит дерматолог-трихолог **Абдувалиев Бегали Шералиевич** — методами FUE и DHI. Стоимость зависит от количества графтов и зоны и называется на консультации.

Подробнее: [Пересадка волос в Фергане](/ru/fargona/soch-ekish), [Пересадка волос FUE и DHI](/ru/articles/art-soch-ekish-fue-dhi), [После пересадки волос](/ru/articles/art-soch-ekishdan-keyin), [Очаговая алопеция: клинический случай](/ru/articles/art-alopecia-areata-klinik-holat).`;
}

function enBody(): string {
  return `Many men have an uneven beard: sparse on the cheeks, gaps on the chin, a moustache that does not join the beard. Others have no hair growth over a scar or burn. In these cases a **beard and moustache transplant** — moving your own follicles to the face — can help. But not every sparse beard needs surgery: the cause comes first.

## Who is it for?

- Men whose beard is naturally **sparse or patchy**.
- Hairless areas after a **scar**, burn or injury.
- Anyone wanting to fill in the moustache line or the sideburn-to-beard connection.

## When not to rush into surgery

- **Alopecia areata** — sudden round, smooth patches in the beard. It is an autoimmune condition that is treated first; while it is active, transplanted hair can fall out too.
- **Age** — beard growth often continues until about 25, so a doctor may advise waiting when you are young.
- **Active inflammation** of the facial skin, infection or uncontrolled chronic illness.

So the first step is a **trichologist consultation**: the facial skin, the donor area and how your hair grows are assessed.

## How the operation goes

1. **Plan:** the beard line, density and number of grafts.
2. **Harvesting:** usually from the back of the head with **FUE** — one by one, no linear scar.
3. **Implanting:** on the face direction and angle matter a lot — beard hair grows almost flat to the skin — so a **DHI** implanter or very small channels are used.
4. Everything is done under **local anaesthesia**.

## Recovery and results

- Mild swelling and small crusts are possible in the first days; they usually come off within 1–2 weeks.
- The doctor tells you when you can shave; avoid rubbing the area in the first weeks.
- Transplanted hairs usually shed in the first weeks — this is normal.
- New hair grows from **3–4 months**; the final result is at about **9–12 months**.

The transplanted hair comes from the scalp, so it **keeps growing** — you can shave and shape it like a normal beard.

## At Radeski

Beard and moustache transplants are performed by dermatologist-trichologist **Dr. Begali Sheraliyevich Abduvaliyev** with FUE and DHI. The price depends on the number of grafts and the area and is given at the consultation.

Read more: [Hair transplant in Fergana](/en/fargona/soch-ekish), [Hair transplant with FUE and DHI](/en/articles/art-soch-ekish-fue-dhi), [After a hair transplant](/en/articles/art-soch-ekishdan-keyin), [Alopecia areata: a clinical case](/en/articles/art-alopecia-areata-klinik-holat).`;
}

export const BEARD_TRANSPLANT_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Soqol va mo'ylov ekish: kimga mos, qachon kutish kerak, operatsiya qanday o'tadi (FUE, DHI), tiklanish va natija qachon ko'rinadi. Radeski — Farg'ona.",
    body: uzBody(),
    keyTakeaways: [
      'Soqol ekish siyrak, notekis soqol va chandiq joylari uchun',
      'Soqoldagi o‘choqli alopetsiya avval davolanadi',
      'Graftlar odatda ensadan FUE bilan olinadi, yuzga yo‘nalishi bo‘yicha ekiladi',
      'Ekilgan soqol o‘sishda davom etadi — uni qirtish mumkin',
      'Yangi soch 3–4 oydan, yakuniy natija 9–12 oyda',
    ],
    tags: ['Soqol ekish', 'Mo‘ylov ekish', 'Soch ekish', 'FUE', 'DHI', 'Trixolog', "Farg'ona", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Soqolda birdan yumaloq, silliq o‘choqlar paydo bo‘ldi',
      'Yuz terisida qichishuvchi yoki yiringli toshma bor',
      'Chandiq joyida soch o‘smayapti va buni tuzatmoqchisiz',
      'Soqol ekishdan keyin kuchli qizarish yoki og‘riq bor',
    ],
    faq: [
      {
        question: 'Ekilgan soqol tabiiy ko‘rinadimi?',
        answer:
          'Ha, agar graftlar yuzdagi tabiiy o‘sish yo‘nalishi va burchagida joylansa. Shuning uchun soqol chizig‘i va zichlik shifokor bilan oldindan rejalashtiriladi.',
      },
      {
        question: 'Ekilgan soqolni qirtsa bo‘ladimi?',
        answer:
          'Ha. Ko‘chirilgan sochlar bosh terisidan olingani uchun o‘sishda davom etadi va oddiy soqol kabi qirtiladi. Birinchi marta qachon qirtish mumkinligini shifokor aytadi.',
      },
      {
        question: 'Natija qachon ko‘rinadi?',
        answer:
          'Ekilgan sochlar avval to‘kiladi, yangi soch 3–4 oydan o‘sa boshlaydi va yakuniy natija taxminan 9–12 oyda shakllanadi.',
      },
      {
        question: 'Soqol ekish narxi qancha?',
        answer:
          'Narx kerakli graftlar soni va zonaga bog‘liq. U trixolog konsultatsiyasida, soqol chizig‘i va donor zona baholangandan keyin aytiladi.',
      },
    ],
  },
  ru: {
    summary:
      'Пересадка бороды и усов: кому подходит, когда лучше подождать, как проходит операция (FUE, DHI), восстановление и когда виден результат. Radeski — Фергана.',
    body: ruBody(),
    keyTakeaways: [
      'Пересадка бороды — при редкой, неравномерной бороде и на рубцах',
      'Очаговую алопецию в бороде сначала лечат',
      'Графты обычно берут с затылка методом FUE и пересаживают по направлению роста',
      'Пересаженная борода продолжает расти — её можно брить',
      'Новые волосы с 3–4 месяцев, итог — к 9–12 месяцам',
    ],
    tags: ['Пересадка бороды', 'Пересадка усов', 'Пересадка волос', 'FUE', 'DHI', 'Трихолог', 'Фергана', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'В бороде внезапно появились круглые гладкие очаги',
      'На коже лица зудящая или гнойная сыпь',
      'На рубце не растут волосы, и вы хотите это исправить',
      'После пересадки бороды сильное покраснение или боль',
    ],
    faq: [
      {
        question: 'Выглядит ли пересаженная борода естественно?',
        answer:
          'Да, если графты расположены по естественному направлению и углу роста на лице. Поэтому линию бороды и густоту заранее планируют с врачом.',
      },
      {
        question: 'Можно ли брить пересаженную бороду?',
        answer:
          'Да. Пересаженные волосы взяты с головы и продолжают расти, их бреют как обычную бороду. Когда побриться первый раз, скажет врач.',
      },
      {
        question: 'Когда виден результат?',
        answer:
          'Пересаженные волосы сначала выпадают, новые начинают расти через 3–4 месяца, итог формируется примерно к 9–12 месяцам.',
      },
      {
        question: 'Сколько стоит пересадка бороды?',
        answer:
          'Цена зависит от нужного количества графтов и зоны. Её называют на консультации трихолога после оценки линии бороды и донорской зоны.',
      },
    ],
  },
  en: {
    summary:
      'Beard and moustache transplant: who it suits, when to wait, how the operation goes (FUE, DHI), recovery and when results show. Radeski — Fergana.',
    body: enBody(),
    keyTakeaways: [
      'A beard transplant is for sparse or patchy beards and scars',
      'Alopecia areata in the beard is treated first',
      'Grafts usually come from the back of the head with FUE and follow the growth direction',
      'A transplanted beard keeps growing — you can shave it',
      'New hair from 3–4 months; the final result at 9–12 months',
    ],
    tags: ['Beard transplant', 'Moustache transplant', 'Hair transplant', 'FUE', 'DHI', 'Trichologist', 'Fergana', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Round, smooth bald patches suddenly appear in your beard',
      'There is an itchy or pus-filled rash on your face',
      'Hair does not grow over a scar and you want to fix it',
      'There is strong redness or pain after a beard transplant',
    ],
    faq: [
      {
        question: 'Does a transplanted beard look natural?',
        answer:
          'Yes, when grafts are placed at the natural angle and direction of facial hair. That is why the beard line and density are planned with the doctor in advance.',
      },
      {
        question: 'Can I shave a transplanted beard?',
        answer:
          'Yes. The hair comes from the scalp and keeps growing, so you shave it like a normal beard. The doctor tells you when you can shave the first time.',
      },
      {
        question: 'When will I see the result?',
        answer:
          'Transplanted hairs shed first, new hair grows after 3–4 months and the final result forms at about 9–12 months.',
      },
      {
        question: 'How much does a beard transplant cost?',
        answer:
          'It depends on the number of grafts and the area. The price is given at the trichologist consultation after the beard line and donor area are assessed.',
      },
    ],
  },
};

export const BEARD_TRANSPLANT_ARTICLE: Article = {
  id: 'art-soqol-ekish',
  slug: 'soqol-ekish',
  title: {
    uz: 'Soqol va mo‘ylov ekish: kimga mos, qanday o‘tadi va natija qachon ko‘rinadi',
    ru: 'Пересадка бороды и усов: кому подходит, как проходит и когда виден результат',
    en: 'Beard and Moustache Transplant: Who It Suits, How It Works and When You See Results',
  },
  summary: {
    uz: BEARD_TRANSPLANT_ARTICLE_CATALOG.uz.summary,
    ru: BEARD_TRANSPLANT_ARTICLE_CATALOG.ru.summary,
    en: BEARD_TRANSPLANT_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: BEARD_TRANSPLANT_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: BEARD_TRANSPLANT_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: BEARD_TRANSPLANT_ARTICLE_CATALOG.en.body.slice(0, 500),
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
