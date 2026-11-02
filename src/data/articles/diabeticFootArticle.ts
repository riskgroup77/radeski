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
 * Foot care in diabetes — a patient-safety article for the nail/foot clinic. The red flags come
 * first (a wound, redness, swelling, black skin: see a doctor the same day), then why feet are
 * at risk, a daily routine, what never to do, and the podiatrist's role. No medicine names.
 */

function uzBody(): string {
  return `Qandli diabetda oyoqqa alohida e'tibor kerak. Yuqori qon shakari yillar davomida oyoqning nervlari va qon tomirlariga ta'sir qiladi: oyoq kamroq sezadi, jarohatlar esa sekin bitadi. Natijada oddiy qadoq, tirnoq yoki poyabzal ishqalashi og'ir yaraga aylanishi mumkin. Yaxshi xabar: to'g'ri kundalik parvarish va muntazam ko'rik bunday asoratlarning aksariyatini oldini oladi.

## Shu kuniyoq shifokorga ko'rining, agar:

- oyoqda yara, yoriq yoki pufak bitmasa;
- teri qizarsa, shishsa, issiq bo'lsa yoki yiring chiqsa;
- barmoq yoki tovon terisi qoraysa, ko'karsa;
- oyoqda kuchli og'riq paydo bo'lsa — yoki aksincha, sezgi yo'qolsa;
- isitma bilan birga oyoqda o'zgarish bo'lsa.

Bunday holatlarda kutish mumkin emas — endokrinolog yoki jarroh tekshiruvi kerak.

## Nega diabetda oyoq xavf ostida?

- **Sezgining pasayishi (neyropatiya)** — odam kesik, kuyish yoki tor poyabzal bosganini sezmaydi.
- **Qon aylanishining yomonlashishi** — jarohat sekin bitadi, infeksiyaga qarshilik kamayadi.
- **Quruq teri** — tovon yoriladi, yoriqlar orqali infeksiya kiradi.
- **Oyoq shaklining o'zgarishi** — bosim nuqtalarida qadoqlar paydo bo'ladi, ularning ostida yara rivojlanishi mumkin.

## Har kungi parvarish

- **Oyoqni har kuni ko'zdan kechiring** — tovon va barmoqlar orasini ham. Ko'rish qiyin bo'lsa, ko'zgu ishlating yoki yaqiningizdan yordam so'rang.
- **Iliq suvda yuving** — suv haroratini qo'l yoki termometr bilan tekshiring, oyoq bilan emas.
- **Yaxshilab quriting** — ayniqsa barmoqlar orasini.
- **Yumshatuvchi krem surting** — tovon va oyoq tagiga, lekin barmoqlar orasiga emas.
- **Paxta paypoq** — chokisiz, siqmaydigan, har kuni toza.
- **Poyabzalni tekshiring** — kiyishdan oldin ichini qo'l bilan tekshiring: tosh yoki burmalar bo'lmasin; yangi poyabzalni asta-sekin kiying.

## Hech qachon qilmang

- yalangoyoq yurish — uyda ham;
- qadoq va kesakni o'zingiz kesish, kislotali plastir ishlatish;
- oyoqni grelka, issiq suv yoki pech yonida isitish — kuyishni sezmaslik mumkin;
- tirnoq burchaklarini chuqur kesish;
- jarohatga yod, brilliant yashili yoki spirt quyish.

Qadoq va yoriqlar haqida batafsil: [qadoq va kesaklar](/uz/articles/art-qadoq-va-kesak), [tovon yoriqlari](/uz/articles/art-tovon-yoriqlari).

## Podolog qanday yordam beradi?

Diabetda oyoq parvarishini mutaxassisga topshirish xavfsizroq:

- **tirnoqlarni to'g'ri qisqartirish** va qalinlashgan tirnoqqa ishlov berish;
- **qadoq va qalin terini xavfsiz olib tashlash** — apparat bilan, jarohatsiz;
- **ichga o'sgan tirnoq va zamburug'ni** erta aniqlash va davolash — batafsil: [ichga o'sgan tirnoq](/uz/articles/art-onixokriptoz-klinik-holat), [tirnoq zamburug'i](/uz/articles/art-tirnoq-zamburugi);
- **poyabzal va ortopedik ichki taglik** bo'yicha maslahat.

Ko'rik muntazamligi xavf darajasiga bog'liq: odatda har 1–3 oyda. Qon shakarini nazorat qilish esa asosiy davolash bo'lib qoladi — uni endokrinolog boshqaradi.

## Farg'ona va Qo'qonda diabetda oyoq parvarishi

Radeski Skin Clinic'ning [tirnoq va oyoq patologiyasi klinikasida](/uz/services/clinika-patologii-nogtej) [podolog](/uz/services/clinika-patologii-nogtej/dermatologik-podolog-xizmati) diabeti bor bemorlarning oyog'ini ehtiyotkorlik bilan parvarish qiladi va xavfli belgilarni erta aniqlaydi.

- [Podolog Farg'onada](/uz/fargona/podolog) va [Qo'qonda](/uz/qoqon/podolog).

Diabetda oyoqni har kuni ko'zdan kechirish — eng oddiy va eng samarali himoya.`;
}

function ruBody(): string {
  return `При сахарном диабете стопам нужно особое внимание. Высокий сахар крови годами действует на нервы и сосуды ног: стопы хуже чувствуют, а раны медленно заживают. В итоге обычная мозоль, ноготь или натёртость от обуви могут превратиться в тяжёлую язву. Хорошая новость: правильный ежедневный уход и регулярные осмотры предотвращают большинство таких осложнений.

## Обратитесь к врачу в тот же день, если:

- на стопе рана, трещина или пузырь, который не заживает;
- кожа покраснела, отекла, стала горячей или появился гной;
- кожа пальца или пятки потемнела, посинела;
- появилась сильная боль в стопе — или, наоборот, пропала чувствительность;
- изменения на стопе сопровождаются температурой.

В таких случаях ждать нельзя — нужен осмотр эндокринолога или хирурга.

## Почему при диабете стопы в зоне риска?

- **Снижение чувствительности (нейропатия)** — человек не чувствует порез, ожог или давление тесной обуви.
- **Ухудшение кровообращения** — раны заживают медленно, защита от инфекции снижается.
- **Сухая кожа** — пятки трескаются, через трещины проникает инфекция.
- **Изменение формы стопы** — в точках давления появляются мозоли, под ними может развиться язва.

## Ежедневный уход

- **Осматривайте стопы каждый день** — включая пятки и промежутки между пальцами. Если трудно, используйте зеркало или попросите близкого.
- **Мойте в тёплой воде** — проверяйте температуру рукой или термометром, а не стопой.
- **Тщательно вытирайте** — особенно между пальцами.
- **Наносите смягчающий крем** — на пятки и подошву, но не между пальцами.
- **Хлопковые носки** — без швов, не сдавливающие, каждый день чистые.
- **Проверяйте обувь** — перед тем как надеть, проведите рукой внутри: нет ли камешков и складок; новую обувь разнашивайте постепенно.

## Никогда не делайте

- не ходите босиком — даже дома;
- не срезайте мозоли сами и не используйте кислотные пластыри;
- не грейте ноги грелкой, горячей водой или у обогревателя — можно не почувствовать ожог;
- не вырезайте глубоко уголки ногтей;
- не заливайте раны йодом, зелёнкой или спиртом.

Подробнее о мозолях и трещинах: [мозоли и натоптыши](/ru/articles/art-qadoq-va-kesak), [трещины на пятках](/ru/articles/art-tovon-yoriqlari).

## Как помогает подолог?

При диабете уход за стопами безопаснее доверить специалисту:

- **правильная обрезка ногтей** и обработка утолщённых ногтей;
- **безопасное удаление мозолей и огрубевшей кожи** — аппаратом, без травм;
- **раннее выявление и лечение вросшего ногтя и грибка** — подробнее: [вросший ноготь](/ru/articles/art-onixokriptoz-klinik-holat), [грибок ногтей](/ru/articles/art-tirnoq-zamburugi);
- **советы по обуви и ортопедическим стелькам**.

Частота осмотров зависит от степени риска: обычно раз в 1–3 месяца. А главным лечением остаётся контроль сахара крови — им руководит эндокринолог.

## Уход за стопами при диабете в Фергане и Коканде

В [клинике патологии ногтей и стопы](/ru/services/clinika-patologii-nogtej) Radeski Skin Clinic [подолог](/ru/services/clinika-patologii-nogtej/dermatologik-podolog-xizmati) бережно ухаживает за стопами пациентов с диабетом и рано выявляет тревожные признаки.

- [Подолог в Фергане](/ru/fargona/podolog) и [в Коканде](/ru/qoqon/podolog).

При диабете ежедневный осмотр стоп — самая простая и самая действенная защита.`;
}

function enBody(): string {
  return `With diabetes, the feet need special attention. Over the years high blood sugar affects the nerves and blood vessels of the legs: the feet feel less and wounds heal slowly. As a result an ordinary callus, toenail or rubbing shoe can turn into a serious ulcer. The good news: proper daily care and regular check-ups prevent most of these complications.

## See a doctor the same day if:

- a wound, crack or blister on the foot is not healing;
- the skin is red, swollen, hot or there is pus;
- the skin of a toe or heel turns dark or blue;
- there is severe pain in the foot — or, the opposite, loss of feeling;
- changes in the foot come with a fever.

Do not wait in these cases — an endocrinologist or surgeon needs to see you.

## Why are the feet at risk with diabetes?

- **Reduced feeling (neuropathy)** — you may not notice a cut, burn or tight shoe.
- **Poorer circulation** — wounds heal slowly and resistance to infection drops.
- **Dry skin** — heels crack and infection gets in through the cracks.
- **Changes in foot shape** — calluses form at pressure points, and ulcers can develop beneath them.

## Daily care

- **Check your feet every day** — including the heels and between the toes. Use a mirror or ask someone to help if needed.
- **Wash in warm water** — test the temperature with your hand or a thermometer, not your foot.
- **Dry thoroughly** — especially between the toes.
- **Apply a softening cream** — to the heels and soles, but not between the toes.
- **Cotton socks** — seamless, non-constricting, clean every day.
- **Check your shoes** — run your hand inside before putting them on to find stones or folds; break in new shoes gradually.

## Never

- walk barefoot — even at home;
- cut calluses yourself or use acid plasters;
- warm your feet with a hot-water bottle, hot water or a heater — you may not feel a burn;
- cut deep into the corners of your nails;
- pour iodine, brilliant green or alcohol on wounds.

More on calluses and cracks: [calluses and corns](/en/articles/art-qadoq-va-kesak), [cracked heels](/en/articles/art-tovon-yoriqlari).

## How does a podiatrist help?

With diabetes it is safer to leave foot care to a specialist:

- **correct nail trimming** and care of thickened nails;
- **safe removal of calluses and hard skin** — with a device, without injury;
- **early detection and treatment of ingrown nails and fungus** — more: [ingrown nail](/en/articles/art-onixokriptoz-klinik-holat), [nail fungus](/en/articles/art-tirnoq-zamburugi);
- **advice on shoes and orthotic insoles**.

How often to come depends on your risk level: usually every 1–3 months. Blood sugar control remains the main treatment — managed by an endocrinologist.

## Diabetic foot care in Fergana and Kokand

At the Radeski Skin Clinic [nail and foot clinic](/en/services/clinika-patologii-nogtej) a [podiatrist](/en/services/clinika-patologii-nogtej/dermatologik-podolog-xizmati) carefully looks after the feet of patients with diabetes and spots warning signs early.

- [Podiatrist in Fergana](/en/fargona/podolog) and [in Kokand](/en/qoqon/podolog).

With diabetes, checking your feet every day is the simplest and most effective protection.`;
}

export const DIABETIC_FOOT_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Qandli diabetda oyoq parvarishi: qachon shu kuniyoq shifokorga borish kerak, nega oyoq xavf ostida, har kungi parvarish, hech qachon qilmaslik kerak bo'lgan narsalar va podolog yordami. Farg'ona va Qo'qonda.",
    body: uzBody(),
    keyTakeaways: [
      "Diabetda oyoq kam sezadi va jarohatlar sekin bitadi — kichik qadoq ham yaraga aylanishi mumkin",
      "Yara, qizarish, shish, terining qorayishi — shu kuniyoq shifokorga",
      "Oyoqni har kuni ko'zdan kechirish — eng samarali himoya",
      "Yalangoyoq yurmang, qadoqni o'zingiz kesmang, oyoqni grelka bilan isitmang",
      "Podolog tirnoq va qadoqlarni xavfsiz parvarish qiladi; qon shakarini endokrinolog nazorat qiladi",
    ],
    tags: ['Qandli diabet', 'Diabetik oyoq', 'Oyoq parvarishi', 'Podolog', "Tirnoq va oyoq klinikasi", "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Oyoqda bitmaydigan yara, yoriq yoki pufak",
      "Qizarish, shish, issiqlik yoki yiring",
      "Barmoq yoki tovon terisining qorayishi",
      "Oyoqda kuchli og'riq yoki sezgining yo'qolishi",
      "Ichga o'sgan tirnoq yoki qadoq — ehtiyotkor parvarish uchun",
    ],
    faq: [
      {
        question: 'Diabetda oyoqni qanchada bir tekshirtirish kerak?',
        answer:
          "Uyda — har kuni o'zingiz ko'zdan kechirasiz. Podolog va shifokor ko'rigi xavf darajasiga qarab odatda har 1–3 oyda, muammo bo'lsa — darhol.",
      },
      {
        question: 'Diabetda pedikyur qilish mumkinmi?',
        answer:
          "Oddiy salon pedikyuri jarohat va infeksiya xavfi tufayli tavsiya etilmaydi. Tibbiy (apparat) pedikyurni diabetli bemorlar bilan ishlash tajribasiga ega podolog qilishi xavfsizroq.",
      },
      {
        question: 'Qanday poyabzal kiyish kerak?',
        answer:
          "Keng, yumshoq, barmoqlarni siqmaydigan, yopiq poyabzal va chokisiz paxta paypoq. Oyoq shakli o'zgargan bo'lsa, ortopedik ichki taglik kerak bo'lishi mumkin — podolog maslahat beradi.",
      },
      {
        question: 'Oyoqdagi kichik jarohatni qanday parvarish qilish kerak?',
        answer:
          "Toza suv bilan yuving, shifokor tavsiya qilgan antiseptik bilan ishlov bering va toza bog'lam qo'ying. Jarohat 2–3 kunda yaxshilanmasa yoki qizarsa, darhol shifokorga ko'rining.",
      },
      {
        question: "Farg'ona va Qo'qonda diabetda oyoq parvarishini qayerda qilish mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida podolog diabeti bor bemorlarning oyog'ini ehtiyotkorlik bilan parvarish qiladi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Уход за стопами при сахарном диабете: когда к врачу в тот же день, почему стопы в зоне риска, ежедневный уход, чего нельзя делать и помощь подолога. Фергана и Коканд.',
    body: ruBody(),
    keyTakeaways: [
      'При диабете стопы хуже чувствуют, а раны медленно заживают — даже маленькая мозоль может стать язвой',
      'Рана, покраснение, отёк, потемнение кожи — к врачу в тот же день',
      'Ежедневный осмотр стоп — самая действенная защита',
      'Не ходите босиком, не срезайте мозоли сами, не грейте ноги грелкой',
      'Подолог безопасно ухаживает за ногтями и мозолями; сахар крови контролирует эндокринолог',
    ],
    tags: ['Сахарный диабет', 'Диабетическая стопа', 'Уход за стопами', 'Подолог', 'Клиника стопы', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Незаживающая рана, трещина или пузырь на стопе',
      'Покраснение, отёк, жар или гной',
      'Потемнение кожи пальца или пятки',
      'Сильная боль в стопе или потеря чувствительности',
      'Вросший ноготь или мозоль — для бережного ухода',
    ],
    faq: [
      {
        question: 'Как часто проверять стопы при диабете?',
        answer:
          'Дома — каждый день самостоятельно. Осмотр подолога и врача — в зависимости от риска, обычно раз в 1–3 месяца, а при проблеме — сразу.',
      },
      {
        question: 'Можно ли делать педикюр при диабете?',
        answer:
          'Обычный салонный педикюр не рекомендуется из-за риска травм и инфекции. Безопаснее медицинский (аппаратный) педикюр у подолога с опытом работы с пациентами с диабетом.',
      },
      {
        question: 'Какую обувь носить?',
        answer:
          'Свободную, мягкую, закрытую, не сдавливающую пальцы, и хлопковые носки без швов. При изменении формы стопы могут понадобиться ортопедические стельки — подскажет подолог.',
      },
      {
        question: 'Как ухаживать за маленькой ранкой на стопе?',
        answer:
          'Промойте чистой водой, обработайте антисептиком, который посоветует врач, и наложите чистую повязку. Если за 2–3 дня не стало лучше или появилось покраснение, сразу обратитесь к врачу.',
      },
      {
        question: 'Где ухаживать за стопами при диабете в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде подолог бережно ухаживает за стопами пациентов с диабетом. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Foot care with diabetes: when to see a doctor the same day, why feet are at risk, daily care, what never to do and how a podiatrist helps. Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'With diabetes the feet feel less and wounds heal slowly — even a small callus can become an ulcer',
      'A wound, redness, swelling or darkening skin — see a doctor the same day',
      'Checking your feet every day is the most effective protection',
      'Do not walk barefoot, cut calluses yourself or warm your feet with a hot-water bottle',
      'A podiatrist safely cares for nails and calluses; an endocrinologist manages blood sugar',
    ],
    tags: ['Diabetes', 'Diabetic foot', 'Foot care', 'Podiatrist', 'Foot clinic', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A wound, crack or blister on the foot that will not heal',
      'Redness, swelling, heat or pus',
      'A toe or heel turning dark',
      'Severe foot pain or loss of feeling',
      'An ingrown nail or callus — for careful treatment',
    ],
    faq: [
      {
        question: 'How often should feet be checked with diabetes?',
        answer:
          'At home — every day, by yourself. A podiatrist and doctor check-up depending on your risk, usually every 1–3 months, and immediately if there is a problem.',
      },
      {
        question: 'Can I have a pedicure if I have diabetes?',
        answer:
          'A regular salon pedicure is not recommended because of the risk of injury and infection. A medical (device) pedicure by a podiatrist experienced with diabetic patients is safer.',
      },
      {
        question: 'What shoes should I wear?',
        answer:
          'Roomy, soft, closed shoes that do not squeeze the toes, with seamless cotton socks. If your foot shape has changed, orthotic insoles may be needed — a podiatrist will advise.',
      },
      {
        question: 'How should I care for a small wound on the foot?',
        answer:
          'Rinse with clean water, apply the antiseptic your doctor recommends and cover with a clean dressing. If it is not better in 2–3 days or gets red, see a doctor straight away.',
      },
      {
        question: 'Where can I get diabetic foot care in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a podiatrist carefully looks after the feet of patients with diabetes. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const DIABETIC_FOOT_ARTICLE: Article = {
  id: 'art-diabetda-oyoq-parvarishi',
  slug: 'diabetda-oyoq-parvarishi',
  title: {
    uz: "Qandli diabetda oyoq parvarishi: xavfli belgilar va har kungi qoidalar",
    ru: 'Уход за стопами при сахарном диабете: тревожные признаки и ежедневные правила',
    en: 'Foot Care with Diabetes: Warning Signs and Daily Rules',
  },
  summary: {
    uz: DIABETIC_FOOT_ARTICLE_CATALOG.uz.summary,
    ru: DIABETIC_FOOT_ARTICLE_CATALOG.ru.summary,
    en: DIABETIC_FOOT_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: DIABETIC_FOOT_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: DIABETIC_FOOT_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: DIABETIC_FOOT_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Karimova Iroda',
    ru: 'Каримова Ирода',
    en: 'Dr. Iroda Karimova',
  },
  date: '2026-11-20',
  image: '/articles/diabetda-oyoq-parvarishi-cover.jpg',
  images: {
    uz: '/articles/diabetda-oyoq-parvarishi-cover.jpg',
    ru: '/articles/diabetda-oyoq-parvarishi-cover.jpg',
    en: '/articles/diabetda-oyoq-parvarishi-cover.jpg',
  },
  views: 0,
};
