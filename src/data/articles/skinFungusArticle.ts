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
 * Fungal skin infections (feet, body, groin, scalp, pityriasis versicolor, candida in folds) —
 * the companion to the nail fungus article. Main points: a scraping confirms the diagnosis,
 * steroid/combination creams disguise fungus, treatment continues after the skin looks clear,
 * pets and family members are a common source.
 */

function uzBody(): string {
  return `Teri zamburug'i (mikoz) — zamburug'lar chaqiradigan teri infeksiyasi. U oyoq, tana, chov sohasi, bosh terisi va teri burmalarida paydo bo'ladi, qichishtiradi va boshqa odamlarga yuqishi mumkin. Teri zamburug'i yaxshi davolanadi, lekin faqat to'g'ri tashxis qo'yilsa: uni ko'pincha ekzema yoki allergiya deb o'ylab, noto'g'ri krem bilan "yashirib" qo'yishadi.

## Teri zamburug'ining turlari

- **Oyoq zamburug'i** — barmoqlar orasida qichishish, yoriqlar, po'st tashlash, oq namlangan teri, yoqimsiz hid. Ko'pincha [tirnoq zamburug'i](/uz/articles/art-tirnoq-zamburugi) bilan birga keladi.
- **Tana zamburug'i (halqasimon temiratki)** — chetlari qizil, bo'rtgan, o'rtasi ochroq halqasimon dog'lar; qichiydi va asta-sekin kattalashadi.
- **Chov zamburug'i** — chov va son ichki tomonida qizil-jigarrang qichiydigan dog'lar, ko'pincha erkaklarda.
- **Bosh terisi zamburug'i** — asosan bolalarda: sochi sinib qolgan, po'st tashlaydigan dumaloq o'choqlar. Ko'pincha mushuk va itlardan yuqadi.
- **Rang-barang temiratki** — ko'krak, yelka va bo'yinda och yoki to'q jigarrang mayda dog'lar; quyoshdan keyin yaqqol ko'rinadi. Uni teri yuzasida doim yashaydigan Malassezia zamburug'i chaqiradi va u yuqumli emas.
- **Kandidoz** — ko'krak osti, qorin burmalari, barmoqlar orasidagi nam qizarish; qandli diabet va ortiqcha vaznda ko'proq.

## Zamburug' qayerdan yuqadi?

- hovuz, sauna, hammom va sport zalida yalangoyoq yurishda;
- umumiy shippak, sochiq, taroq va kiyim orqali;
- kasal hayvonlardan — mushuk, it, quyon;
- oila a'zolaridan;
- terlash, tor va sintetik kiyim, nam poyabzal — zamburug' ko'payishi uchun qulay sharoit.

## Tashxis qanday qo'yiladi?

Dermatolog terini ko'zdan kechiradi va zarur bo'lsa:

- **qirindi tahlili** — teridan po'st olinib, mikroskopda zamburug' izlanadi;
- **Vud lampasi** — ba'zi zamburug'lar uning nurida yaltiraydi.

Tahlil og'riqsiz va tez o'tadi. Zamburug'ni [ekzema](/uz/articles/art-ekzema), psoriaz, [seboreyali dermatit](/uz/articles/art-seboreyali-dermatit) va boshqa toshmalardan ajratish uchun u juda muhim.

## Eng ko'p uchraydigan xato

Gormonli yoki "kombinatsiyalangan" krem zamburug'li toshmaning qizarishi va qichishishini vaqtincha kamaytiradi, lekin zamburug'ni o'ldirmaydi — u teri ostida ko'payishda davom etadi. Natijada toshma kattalashadi, ko'rinishi o'zgaradi va tashxis qo'yish qiyinlashadi. Shuning uchun har qanday qichiydigan dog'ga o'zboshimchalik bilan gormonli krem surtmang.

## Qanday davolanadi?

- **Zamburug'ga qarshi kremlar va eritmalar** — odatda 2–4 hafta; teri tozalangandan keyin ham shifokor aytgan muddatgacha davom ettiriladi, aks holda zamburug' qaytadi.
- **Tabletkalar** — bosh terisi zamburug'ida, keng tarqalgan yoki qaytalanuvchi holatlarda; faqat shifokor tayinlovi bilan.
- **Barcha o'choqlarni birga davolash** — oyoq va tirnoq zamburug'i birga bo'lsa, ikkalasi ham davolanadi.
- **Manbani bartaraf etish** — oila a'zolari tekshiriladi, uy hayvoni veterinarga ko'rsatiladi, poyabzal va kiyimga ishlov beriladi.

## Profilaktika

- Oyoqni har kuni yuving va barmoqlar orasini quriting.
- Paxta paypoq va kiyim kiying, poyabzalni quriting va navbatma-navbat kiying.
- Hovuz, sauna va sport zalida shaxsiy shippak kiying.
- Shaxsiy sochiq, taroq va kiyimdan foydalaning.
- Uy hayvonida tuk to'kilgan dog'lar bo'lsa, veterinarga ko'rsating.
- Qandli diabet bo'lsa, qon shakarini nazorat qiling va teri burmalarini quruq saqlang.

## Farg'ona va Qo'qonda teri zamburug'ini davolash

Radeski Skin Clinic'da [dermatolog](/uz/services/dermatologiya) toshmani ko'zdan kechiradi, kerak bo'lsa qirindi tahlilini buyuradi, zamburug'ni boshqa kasalliklardan ajratadi va davolash rejasini tuzadi. Oyoq va tirnoq zamburug'ini [tirnoq va oyoq patologiyasi klinikasi](/uz/services/clinika-patologii-nogtej) podologlari davolaydi.

- [Dermatolog Farg'onada](/uz/fargona/dermatolog) va [Qo'qonda](/uz/qoqon/dermatolog);
- [Tirnoq zamburug'ini davolash Farg'onada](/uz/fargona/tirnoq-zamburug) va [Qo'qonda](/uz/qoqon/tirnoq-zamburug);
- o'xshash shikoyatlar: [Teri qichishi: sabablari](/uz/articles/art-teri-qichishi).

Zamburug'ni boshlang'ich bosqichda davolash ancha oson: qichiydigan, kattalashayotgan dog'ni ko'rsatishni kechiktirmang.`;
}

function ruBody(): string {
  return `Грибок кожи (микоз) — инфекция кожи, которую вызывают грибы. Он появляется на стопах, теле, в паху, на коже головы и в складках, вызывает зуд и может передаваться другим людям. Грибок кожи хорошо лечится, но только при правильном диагнозе: его часто принимают за экзему или аллергию и «маскируют» неподходящим кремом.

## Виды грибка кожи

- **Грибок стоп** — зуд между пальцами, трещины, шелушение, белая размокшая кожа, неприятный запах. Часто сочетается с [грибком ногтей](/ru/articles/art-tirnoq-zamburugi).
- **Грибок гладкой кожи (кольцевидный)** — кольцевидные пятна с красным приподнятым краем и светлым центром; зудят и постепенно увеличиваются.
- **Паховый грибок** — красно-коричневые зудящие пятна в паху и на внутренней поверхности бёдер, чаще у мужчин.
- **Грибок волосистой части головы (стригущий лишай)** — в основном у детей: округлые шелушащиеся очаги с обломанными волосами. Часто передаётся от кошек и собак.
- **Разноцветный (отрубевидный) лишай** — светлые или тёмно-коричневые мелкие пятна на груди, плечах и шее; хорошо видны после загара. Его вызывает гриб Malassezia, который постоянно живёт на коже, и он не заразен.
- **Кандидоз** — мокнущее покраснение под грудью, в складках живота, между пальцами; чаще при сахарном диабете и лишнем весе.

## Откуда берётся грибок?

- при ходьбе босиком в бассейне, сауне, бане и спортзале;
- через общие тапочки, полотенца, расчёски и одежду;
- от больных животных — кошек, собак, кроликов;
- от членов семьи;
- потливость, тесная и синтетическая одежда, влажная обувь создают условия для размножения грибка.

## Как ставят диагноз?

Дерматолог осмотрит кожу и при необходимости проведёт:

- **соскоб** — чешуйки кожи исследуют под микроскопом в поисках грибка;
- **осмотр лампой Вуда** — некоторые грибы светятся в её лучах.

Анализ безболезненный и быстрый. Он очень важен, чтобы отличить грибок от [экземы](/ru/articles/art-ekzema), псориаза, [себорейного дерматита](/ru/articles/art-seboreyali-dermatit) и других высыпаний.

## Самая частая ошибка

Гормональный или «комбинированный» крем на время уменьшает покраснение и зуд грибкового пятна, но не убивает грибок — он продолжает размножаться. В итоге пятно увеличивается, меняет вид, и поставить диагноз становится сложнее. Поэтому не мажьте любое зудящее пятно гормональным кремом самостоятельно.

## Как лечат грибок кожи?

- **Противогрибковые кремы и растворы** — обычно 2–4 недели; лечение продолжают и после очищения кожи столько, сколько сказал врач, иначе грибок возвращается.
- **Таблетки** — при грибке кожи головы, распространённых или повторяющихся формах; только по назначению врача.
- **Лечение всех очагов сразу** — если есть грибок стоп и ногтей, лечат и то, и другое.
- **Устранение источника** — обследуют членов семьи, животное показывают ветеринару, обрабатывают обувь и одежду.

## Профилактика

- Мойте ноги каждый день и вытирайте промежутки между пальцами.
- Носите хлопковые носки и одежду, просушивайте и чередуйте обувь.
- В бассейне, сауне и спортзале — только свои тапочки.
- Пользуйтесь своим полотенцем, расчёской и одеждой.
- Если у питомца появились пятна без шерсти, покажите его ветеринару.
- При сахарном диабете контролируйте сахар крови и держите кожные складки сухими.

## Лечение грибка кожи в Фергане и Коканде

В Radeski Skin Clinic [дерматолог](/ru/services/dermatologiya) осмотрит высыпания, при необходимости назначит соскоб, отличит грибок от других заболеваний и составит план лечения. Грибок стоп и ногтей лечат подологи [клиники патологии ногтей и стопы](/ru/services/clinika-patologii-nogtej).

- [Дерматолог в Фергане](/ru/fargona/dermatolog) и [в Коканде](/ru/qoqon/dermatolog);
- [Лечение грибка ногтей в Фергане](/ru/fargona/tirnoq-zamburug) и [в Коканде](/ru/qoqon/tirnoq-zamburug);
- похожие жалобы: [Зуд кожи: причины](/ru/articles/art-teri-qichishi).

Грибок гораздо проще вылечить на ранней стадии: не откладывайте визит, если пятно чешется и растёт.`;
}

function enBody(): string {
  return `A fungal skin infection (tinea, mycosis) is caused by fungi. It appears on the feet, body, groin, scalp and in skin folds, itches and can spread to other people. It responds well to treatment — but only with the right diagnosis: it is often mistaken for eczema or allergy and masked with the wrong cream.

## Types of fungal skin infection

- **Athlete's foot** — itching between the toes, cracks, flaking, white soggy skin and odour. It often comes with [nail fungus](/en/articles/art-tirnoq-zamburugi).
- **Ringworm of the body** — ring-shaped patches with a red, raised edge and a paler centre; they itch and slowly grow.
- **Jock itch** — itchy red-brown patches in the groin and inner thighs, more common in men.
- **Scalp ringworm** — mostly in children: round, flaky patches with broken hairs. Often caught from cats and dogs.
- **Pityriasis versicolor** — small light or dark brown spots on the chest, shoulders and neck, most visible after a tan. It is caused by Malassezia yeast, which normally lives on the skin, and it is not contagious.
- **Candida** — moist redness under the breasts, in belly folds and between the fingers; more common with diabetes and excess weight.

## Where does the fungus come from?

- walking barefoot in pools, saunas, bathhouses and gyms;
- shared slippers, towels, combs and clothing;
- infected animals — cats, dogs, rabbits;
- family members;
- sweating, tight synthetic clothing and damp shoes create ideal conditions for fungus.

## How is it diagnosed?

The dermatologist examines the skin and, when needed, performs:

- **a skin scraping** — flakes of skin are examined under the microscope for fungus;
- **a Wood's lamp exam** — some fungi glow under its light.

It is quick and painless, and it matters: it tells fungus apart from [eczema](/en/articles/art-ekzema), psoriasis, [seborrheic dermatitis](/en/articles/art-seboreyali-dermatit) and other rashes.

## The most common mistake

A steroid or "combination" cream briefly reduces the redness and itch of a fungal patch, but it does not kill the fungus — which keeps spreading. The patch grows, changes appearance and becomes harder to diagnose. So do not put steroid cream on any itchy patch on your own.

## How is it treated?

- **Antifungal creams and solutions** — usually for 2–4 weeks; continued after the skin clears for as long as the doctor says, or the fungus returns.
- **Tablets** — for scalp ringworm and widespread or recurring infections; only on a doctor's prescription.
- **Treating every site together** — if both feet and nails are affected, both are treated.
- **Removing the source** — family members are checked, pets see a vet, shoes and clothes are treated.

## Prevention

- Wash your feet daily and dry between the toes.
- Wear cotton socks and clothing; dry and alternate your shoes.
- Wear your own slippers in pools, saunas and gyms.
- Use your own towel, comb and clothes.
- If a pet has bald patches, take it to a vet.
- With diabetes, keep blood sugar under control and skin folds dry.

## Fungal skin infection treatment in Fergana and Kokand

At Radeski Skin Clinic a [dermatologist](/en/services/dermatologiya) examines the rash, orders a scraping when needed, tells fungus apart from other conditions and builds a treatment plan. Foot and nail fungus are treated by the podiatrists of the [nail and foot clinic](/en/services/clinika-patologii-nogtej).

- [Dermatologist in Fergana](/en/fargona/dermatolog) and [in Kokand](/en/qoqon/dermatolog);
- [Nail fungus treatment in Fergana](/en/fargona/tirnoq-zamburug) and [in Kokand](/en/qoqon/tirnoq-zamburug);
- similar complaints: [Itchy skin: causes](/en/articles/art-teri-qichishi).

Fungus is much easier to treat early: do not put off a visit if a patch itches and keeps growing.`;
}

export const SKIN_FUNGUS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Teri zamburug'i: oyoq, tana, chov, bosh terisi zamburug'i, rang-barang temiratki va kandidoz. Belgilari, qirindi tahlili, gormonli krem xatosi, davolash va profilaktika. Farg'ona va Qo'qonda dermatolog.",
    body: uzBody(),
    keyTakeaways: [
      "Teri zamburug'i qichiydi, kattalashadi va yuqishi mumkin",
      "Tashxisni qirindi tahlili tasdiqlaydi — ekzema va psoriazdan ajratish uchun",
      "Gormonli krem zamburug'ni yashiradi va kuchaytiradi",
      "Davolash teri tozalangandan keyin ham shifokor aytgan muddatgacha davom etadi",
      "Oila a'zolari va uy hayvonlari — keng tarqalgan manba",
    ],
    tags: ["Teri zamburug'i", 'Mikoz', "Oyoq zamburug'i", 'Temiratki', 'Dermatolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Qichiydigan dog' kattalashsa yoki ko'paysa",
      "Bolada sochi to'kilgan dumaloq o'choq paydo bo'lsa",
      "Barmoqlar orasida yoriq va namlanish o'tmasa",
      "Gormonli kremdan keyin dog' o'zgargan yoki kattalashgan bo'lsa",
      "Qandli diabet bo'lsa va teri burmalarida qizarish paydo bo'lsa",
    ],
    faq: [
      {
        question: "Teri zamburug'i yuqumlimi?",
        answer:
          "Ko'pchilik turlari — ha: kontakt, umumiy buyumlar va hayvonlar orqali yuqadi. Rang-barang temiratki va teri burmalaridagi kandidoz esa odatda boshqa odamga yuqmaydi.",
      },
      {
        question: "Zamburug'ni qancha davolash kerak?",
        answer:
          "Teri zamburug'i odatda 2–4 haftada davolanadi, bosh terisi zamburug'i — uzoqroq. Muhimi, teri tozalangandan keyin ham davolashni shifokor aytgan muddatgacha to'xtatmaslik.",
      },
      {
        question: 'Rang-barang temiratki nega qaytadi?',
        answer:
          "Uni chaqiradigan Malassezia zamburug'i teri yuzasida doim yashaydi. Issiq, nam havo va terlash uning ko'payishiga yordam beradi, shuning uchun yozda kasallik qaytishi mumkin. Shifokor qaytalanishning oldini olish sxemasini tavsiya qiladi.",
      },
      {
        question: "Davolanishdan keyin dog'lar qoladimi?",
        answer:
          "Rang-barang temiratkidan keyin terining rangi bir necha hafta yoki oy davomida notekis bo'lishi mumkin — bu infeksiya qolgani emas, rang asta-sekin tiklanadi. Boshqa turlarda teri odatda iz qoldirmay tiklanadi.",
      },
      {
        question: "Farg'ona va Qo'qonda teri zamburug'ini qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog toshmani ko'zdan kechiradi, kerak bo'lsa qirindi tahlilini buyuradi va davolash rejasini tuzadi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Грибок кожи: стопы, тело, пах, кожа головы, разноцветный лишай и кандидоз. Признаки, соскоб, ошибка с гормональными кремами, лечение и профилактика. Дерматолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Грибок кожи чешется, растёт и может передаваться',
      'Диагноз подтверждает соскоб — чтобы отличить от экземы и псориаза',
      'Гормональный крем маскирует и усиливает грибок',
      'Лечение продолжают и после очищения кожи — столько, сколько скажет врач',
      'Члены семьи и домашние животные — частый источник',
    ],
    tags: ['Грибок кожи', 'Микоз', 'Грибок стопы', 'Лишай', 'Дерматолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Зудящее пятно растёт или пятен становится больше',
      'У ребёнка круглый очаг с выпавшими волосами',
      'Трещины и мокнутие между пальцами не проходят',
      'Пятно изменилось или выросло после гормонального крема',
      'Сахарный диабет и покраснение в кожных складках',
    ],
    faq: [
      {
        question: 'Заразен ли грибок кожи?',
        answer:
          'Большинство видов — да: передаются при контакте, через общие вещи и от животных. Разноцветный лишай и кандидоз в складках кожи обычно другим людям не передаются.',
      },
      {
        question: 'Сколько лечится грибок кожи?',
        answer:
          'Грибок гладкой кожи обычно лечат 2–4 недели, грибок кожи головы — дольше. Главное — не прекращать лечение, когда кожа очистилась, а продолжать столько, сколько сказал врач.',
      },
      {
        question: 'Почему возвращается разноцветный лишай?',
        answer:
          'Гриб Malassezia, который его вызывает, постоянно живёт на коже. Жара, влажность и пот помогают ему размножаться, поэтому летом болезнь может вернуться. Врач посоветует схему профилактики рецидивов.',
      },
      {
        question: 'Остаются ли пятна после лечения?',
        answer:
          'После разноцветного лишая цвет кожи может быть неровным несколько недель или месяцев — это не остаток инфекции, пигмент восстанавливается постепенно. При других видах кожа обычно восстанавливается без следа.',
      },
      {
        question: 'Где лечить грибок кожи в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог осмотрит высыпания, при необходимости назначит соскоб и составит план лечения. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      "Fungal skin infections: feet, body, groin, scalp, pityriasis versicolor and candida. Signs, the skin scraping test, the steroid cream mistake, treatment and prevention. Dermatologists in Fergana and Kokand.",
    body: enBody(),
    keyTakeaways: [
      'Fungal skin infections itch, spread and can be passed on',
      'A skin scraping confirms the diagnosis and rules out eczema and psoriasis',
      'Steroid creams mask fungus and make it worse',
      'Treatment continues after the skin clears, for as long as the doctor says',
      'Family members and pets are a common source',
    ],
    tags: ['Fungal skin infection', 'Tinea', "Athlete's foot", 'Ringworm', 'Dermatologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'An itchy patch grows or new patches appear',
      'A child has a round patch with hair loss',
      'Cracks and sogginess between the toes do not clear',
      'A patch changed or grew after a steroid cream',
      'You have diabetes and redness in skin folds',
    ],
    faq: [
      {
        question: 'Are fungal skin infections contagious?',
        answer:
          'Most types are — they spread by contact, shared items and animals. Pityriasis versicolor and candida in skin folds usually do not pass to other people.',
      },
      {
        question: 'How long does treatment take?',
        answer:
          'Body ringworm is usually treated for 2–4 weeks; scalp ringworm takes longer. The key is not to stop when the skin looks clear but to continue for as long as the doctor says.',
      },
      {
        question: 'Why does pityriasis versicolor keep coming back?',
        answer:
          'The Malassezia yeast behind it lives on the skin all the time. Heat, humidity and sweat help it multiply, so it can return in summer. The doctor can suggest a routine to prevent recurrences.',
      },
      {
        question: 'Will marks remain after treatment?',
        answer:
          'After pityriasis versicolor the skin colour may stay uneven for weeks or months — that is not leftover infection; the pigment recovers gradually. Other types usually heal without a trace.',
      },
      {
        question: 'Where can I get a fungal skin infection treated in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist examines the rash, orders a scraping when needed and builds a treatment plan. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const SKIN_FUNGUS_ARTICLE: Article = {
  id: 'art-teri-zamburugi',
  slug: 'teri-zamburugi',
  title: {
    uz: "Teri zamburug'i (mikoz): oyoq, tana va chov — belgilari, tahlil va davolash",
    ru: 'Грибок кожи (микоз): стопы, тело и пах — признаки, анализ и лечение',
    en: 'Fungal Skin Infections: Feet, Body and Groin — Signs, Testing and Treatment',
  },
  summary: {
    uz: SKIN_FUNGUS_ARTICLE_CATALOG.uz.summary,
    ru: SKIN_FUNGUS_ARTICLE_CATALOG.ru.summary,
    en: SKIN_FUNGUS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: SKIN_FUNGUS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: SKIN_FUNGUS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: SKIN_FUNGUS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Usmanova Mohinabonu Anvarovna',
    ru: 'Усманова Мохинабону Анваровна',
    en: 'Dr. Mohinabonu Anvarovna Usmanova',
  },
  date: '2026-11-07',
  image: '/articles/teri-zamburugi-cover.webp',
  images: {
    uz: '/articles/teri-zamburugi-cover.webp',
    ru: '/articles/teri-zamburugi-cover.webp',
    en: '/articles/teri-zamburugi-cover.webp',
  },
  views: 0,
};
