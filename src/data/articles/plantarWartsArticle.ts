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
 * Plantar warts in adults — the painful "corn" on the sole that is really a viral wart.
 * Points: HPV and how it spreads (pools, saunas, gyms, shared slippers, cracks), the signs that
 * tell it from a callus (side-pressure pain, black dots, broken skin lines) confirmed by
 * dermatoscopy, red flags (diabetes, poor circulation, bleeding, colour change, many warts,
 * weak immunity, under the nail), what not to do at home, clinic options the doctor chooses
 * (CO₂ laser, cryodestruction, radio-wave), several sessions and possible recurrence, prevention.
 */

function uzBody(): string {
  return `Oyoq tagidagi so'gal (plantar so'gal) — tovon yoki oyoq kafti terisida paydo bo'ladigan, yurganda og'riydigan qattiq hosila. Ko'pchilik uni oddiy qadoq yoki "kesak" deb o'ylab, oylab kesib, bug'lab yuradi, so'gal esa chuqurlashib, ko'payib boradi. Aslida bu virusli kasallik va unga to'g'ri yondashuv kerak. Bu maqola kattalar uchun; bolalardagi so'gallar haqida ota-onalar bu yerda o'qishlari mumkin: [bolalarda so'gallar](/uz/articles/art-bolalarda-sogal-co2-deka).

## Plantar so'gal nima?

So'galni odam papillomavirusi (HPV) chaqiradi. Virus terining yuzaki qatlamiga kirib, hujayralarning tez o'sishiga sabab bo'ladi. Oyoq tagida tana og'irligi hosilani ichkariga bosadi, shuning uchun plantar so'gal teri ustiga kam chiqadi, ko'proq ichkariga o'sadi va nerv uchlariga bosib og'riq beradi. Shu virus oilasi boshqa joylarda papillomalarni ham chaqiradi — batafsil: [papillomalar](/uz/articles/art-papilloma-olib-tashlash).

## Qanday yuqadi?

Virus nam va iliq joyda yaxshi saqlanadi. Ko'pincha u quyidagi yo'llar bilan yuqadi:

- **basseyn, sauna, hammom va dush** — yalangoyoq yurilganda;
- **sport zali va kiyinish xonalari** — ho'l pol, umumiy gilamchalar;
- **umumiy shippak, paypoq yoki poyabzal** — oila a'zolari orasida ham;
- **terining mayda yoriqlari** — quruq tovon, ishqalanish, terlash virusga yo'l ochadi.

Hamma ham kasallanmaydi: immunitet holati, oyoq terlashi va terining shikastlanishi katta rol o'ynaydi. So'galni tirnash yoki kesish uni oyoqning boshqa joylariga va qo'llarga tarqatadi.

## Belgilari

- oyoq tagida qo'pol, qattiq, yassi hosila — ko'pincha tovon yoki barmoqlar ostida;
- yon tomondan siqilganda og'riq kuchliroq, to'g'ridan bosganda kamroq;
- yuzasida **mayda qora nuqtalar** — bu tiqilib qolgan kichik qon tomirlar;
- teri chiziqlari (naqshi) so'gal ustidan o'tmaydi, uning chetida uziladi;
- atrofida yangi kichik so'gallar paydo bo'lishi ("mozaik" so'gal).

## Qadoqdan qanday farq qiladi?

Qadoq va kesak bosim va ishqalanishdan paydo bo'ladi: teri chiziqlari saqlanadi, qora nuqtalar yo'q, og'riq to'g'ridan bosganda kuchliroq. So'gal esa virusli, yuqumli va boshqacha davolanadi. Uyda ularni ishonchli ajratib bo'lmaydi — shifokor hosilani **dermatoskop** bilan ko'rib tashxisni tasdiqlaydi. Qadoq va kesaklar haqida batafsil: [qadoq va kesaklar](/uz/articles/art-qadoq-va-kesak).

## Qachon albatta shifokorga borish kerak

- **qandli diabet yoki oyoqda qon aylanishi yomon bo'lsa** — uyda hech qanday usul bilan davolamang; har qanday jarohat yaraga aylanishi mumkin, batafsil: [diabetda oyoq parvarishi](/uz/articles/art-diabetda-oyoq-parvarishi);
- hosila qonasa, rangi o'zgarsa yoki tez kattalashsa;
- so'gallar ko'p bo'lsa yoki tez ko'paysa;
- immunitet pasaygan bo'lsa (doimiy dori qabul qilish, surunkali kasalliklar);
- so'gal tirnoq ostida yoki tirnoq yonida bo'lsa;
- og'riq tufayli yurish qiyinlashsa, atrofida qizarish, shish yoki yiring paydo bo'lsa.

Qonaydigan va o'zgaradigan har qanday hosilani shifokor boshqa o'smalardan ajratishi zarur.

## Uyda nima qilmaslik kerak

- so'galni ustara yoki qaychi bilan **kesib olmang** — qon ketadi, infeksiya kiradi, virus tarqaladi;
- kislotalar, "chistotel" (qaldirg'och o'ti) va boshqa xalq vositalari bilan **kuydirmang** — sog'lom teri kuyadi, chuqur yara va chandiq qoladi;
- tashxissiz salon yoki pedikyur xonasida **olib tashlatmang**;
- sog'lom teriga ham tegadigan plastirlarni o'zboshimchalik bilan **yopishtirmang**;
- so'galni tirnamang va kesgan asbobni boshqa joyga ishlatmang.

## Klinikada qanday davolanadi?

Avval shifokor dermatoskopiya o'tkazadi, so'gallar soni, chuqurligi va joylashuvini baholaydi. Usulni shifokor tanlaydi:

- **CO₂ lazer (DEKA SmartXide)** — lazer so'gal to'qimasini qatlamma-qatlam bug'latadi, qon ketishi kam bo'ladi. Klinikamizda plantar so'gal CO₂ lazer bilan olib tashlangan holat ham ko'rsatilgan;
- **krioterapiya (kriodestruksiya)** — so'gal suyuq azot bilan muzlatiladi;
- **radioto'lqin usuli (Surgitron)** — hosila radioto'lqin bilan aniq olib tashlanadi.

Muolaja odatda mahalliy og'riqsizlantirish bilan o'tkaziladi. Chuqur yoki ko'p so'gallarda ko'pincha bir necha seans kerak bo'ladi. Virus terida qolishi mumkinligi sababli qaytalanish ehtimoli bor — shuning uchun nazorat ko'rigi muhim.

## Muolajadan keyin

- jarohatni shifokor aytgandek parvarish qiling va quruq saqlang;
- dastlabki kunlarda yumshoq, keng poyabzal kiying, ortiqcha yurishdan saqlaning;
- basseyn va saunaga shifokor ruxsat bergandan keyin boring;
- yangi hosila paydo bo'lsa, o'zingiz davolamang — ko'rikka keling.

## Oldini olish

- basseyn, sauna va dushda **o'z shippagingizni** kiying;
- oyoqni quruq saqlang, barmoqlar orasini yaxshilab quriting, paypoqni har kuni almashtiring;
- shippak, sochiq va poyabzalni boshqalar bilan bo'lishmang;
- tovonni namlab, yoriqlarning oldini oling;
- so'galni tirnamang va olmang — shunda u tarqalmaydi.

## Farg'ona va Qo'qonda plantar so'galni davolash

Radeski Skin Clinic'da dermatolog va podolog so'galni qadoqdan ajratadi, dermatoskopiya o'tkazadi va sizga mos usulni tanlaydi.

- [So'gal olib tashlash Farg'onada](/uz/fargona/sogal-olib-tashlash) va [Qo'qonda](/uz/qoqon/sogal-olib-tashlash);
- [Podolog Farg'onada](/uz/fargona/podolog) va [Qo'qonda](/uz/qoqon/podolog);
- [Dermatolog Farg'onada](/uz/fargona/dermatolog) va [Qo'qonda](/uz/qoqon/dermatolog);
- [DEKA CO₂ lazer](/uz/services/apparatnaya-kosmetologiya/deka-co2-laser), [Surgitron radioto'lqin](/uz/services/apparatnaya-kosmetologiya/surgitron-radiofrequency), [tirnoq va oyoq patologiyasi klinikasi](/uz/services/clinika-patologii-nogtej).

Oyoq tagidagi og'riqli "qadoq"ni kesmang — avval uning so'gal emasligiga ishonch hosil qiling.`;
}

function ruBody(): string {
  return `Подошвенная бородавка — плотное образование на пятке или подушечке стопы, которое болит при ходьбе. Многие принимают её за обычную мозоль или «натоптыш» и месяцами срезают и распаривают, а бородавка тем временем уходит глубже и размножается. На самом деле это вирусное заболевание, и подход к нему нужен другой. Эта статья — о взрослых; родителям о бородавках у детей: [бородавки у детей](/ru/articles/art-bolalarda-sogal-co2-deka).

## Что такое подошвенная бородавка?

Бородавку вызывает вирус папилломы человека (ВПЧ). Он проникает в поверхностный слой кожи и заставляет клетки быстро расти. На подошве вес тела вдавливает образование внутрь, поэтому подошвенная бородавка мало выступает над кожей, растёт вглубь и давит на нервные окончания — отсюда боль. То же семейство вирусов вызывает и папилломы в других местах — подробнее: [папилломы](/ru/articles/art-papilloma-olib-tashlash).

## Как передаётся?

Вирус хорошо сохраняется во влажной и тёплой среде. Чаще всего заражение происходит:

- **в бассейне, сауне, бане и душе** — при ходьбе босиком;
- **в спортзале и раздевалках** — мокрый пол, общие коврики;
- **через общие тапочки, носки или обувь** — в том числе внутри семьи;
- **через мелкие трещины кожи** — сухие пятки, натирание и потливость открывают вирусу дорогу.

Заболевают не все: важны состояние иммунитета, потливость стоп и повреждения кожи. Расчёсывание или срезание бородавки разносит её на другие участки стопы и на руки.

## Признаки

- грубое, плотное, плоское образование на подошве — чаще на пятке или под пальцами;
- боль сильнее при сдавливании с боков, чем при прямом надавливании;
- на поверхности **мелкие чёрные точки** — это затромбированные мелкие сосуды;
- кожный рисунок не проходит через бородавку, а прерывается на её краю;
- вокруг появляются новые маленькие бородавки («мозаичная» бородавка).

## Чем отличается от мозоли?

Мозоль и натоптыш появляются от давления и трения: кожный рисунок сохранён, чёрных точек нет, боль сильнее при прямом надавливании. Бородавка же вирусная, заразная и лечится иначе. Дома надёжно их не различить — врач осматривает образование **дерматоскопом** и подтверждает диагноз. Подробнее о мозолях: [мозоли и натоптыши](/ru/articles/art-qadoq-va-kesak).

## Когда обязательно к врачу

- **сахарный диабет или плохое кровообращение в ногах** — не лечите дома никаким способом; любая ранка может стать язвой, подробнее: [уход за стопами при диабете](/ru/articles/art-diabetda-oyoq-parvarishi);
- образование кровоточит, меняет цвет или быстро растёт;
- бородавок много или они быстро размножаются;
- ослаблен иммунитет (постоянный приём лекарств, хронические болезни);
- бородавка под ногтем или рядом с ним;
- из-за боли трудно ходить, вокруг покраснение, отёк или гной.

Любое кровоточащее и меняющееся образование врач должен отличить от других опухолей.

## Чего не делать дома

- **не срезайте** бородавку лезвием или ножницами — кровотечение, инфекция и распространение вируса;
- **не прижигайте** кислотами, «чистотелом» и другими народными средствами — обжигается здоровая кожа, остаются глубокая рана и рубец;
- **не удаляйте** в салоне или педикюрном кабинете без диагноза;
- **не клейте** самостоятельно пластыри, которые задевают здоровую кожу;
- не расчёсывайте бородавку и не используйте тот же инструмент на других участках.

## Как лечат в клинике?

Сначала врач проводит дерматоскопию, оценивает количество, глубину и расположение бородавок. Метод выбирает врач:

- **CO₂-лазер (DEKA SmartXide)** — лазер послойно испаряет ткань бородавки, кровотечение минимальное. В нашей клинике показан случай удаления подошвенной бородавки CO₂-лазером;
- **криодеструкция** — бородавку замораживают жидким азотом;
- **радиоволновой метод (Surgitron)** — образование точно удаляют радиоволной.

Процедуру обычно проводят под местной анестезией. При глубоких или множественных бородавках часто нужно несколько сеансов. Вирус может оставаться в коже, поэтому рецидив возможен — контрольный осмотр важен.

## После процедуры

- ухаживайте за ранкой так, как сказал врач, и держите её сухой;
- первые дни носите мягкую свободную обувь и меньше ходите;
- в бассейн и сауну — только после разрешения врача;
- появилось новое образование — не лечите сами, приходите на осмотр.

## Профилактика

- в бассейне, сауне и душе носите **свои тапочки**;
- держите стопы сухими, хорошо вытирайте между пальцами, меняйте носки каждый день;
- не делитесь тапочками, полотенцем и обувью;
- увлажняйте пятки, чтобы не было трещин;
- не расчёсывайте и не отрывайте бородавку — так она не распространится.

## Лечение подошвенных бородавок в Фергане и Коканде

В Radeski Skin Clinic дерматолог и подолог отличат бородавку от мозоли, проведут дерматоскопию и подберут подходящий метод.

- [Удаление бородавок в Фергане](/ru/fargona/sogal-olib-tashlash) и [в Коканде](/ru/qoqon/sogal-olib-tashlash);
- [Подолог в Фергане](/ru/fargona/podolog) и [в Коканде](/ru/qoqon/podolog);
- [Дерматолог в Фергане](/ru/fargona/dermatolog) и [в Коканде](/ru/qoqon/dermatolog);
- [CO₂-лазер DEKA](/ru/services/apparatnaya-kosmetologiya/deka-co2-laser), [радиоволновой Surgitron](/ru/services/apparatnaya-kosmetologiya/surgitron-radiofrequency), [клиника патологии ногтей и стопы](/ru/services/clinika-patologii-nogtej).

Не срезайте болезненную «мозоль» на подошве — сначала убедитесь, что это не бородавка.`;
}

function enBody(): string {
  return `A plantar wart is a hard growth on the heel or ball of the foot that hurts when you walk. Many people take it for an ordinary callus or corn and spend months paring and soaking it, while the wart grows deeper and multiplies. In fact it is a viral infection and needs a different approach. This article is about adults; parents can read about warts in children here: [warts in children](/en/articles/art-bolalarda-sogal-co2-deka).

## What is a plantar wart?

Warts are caused by the human papillomavirus (HPV). The virus enters the top layer of the skin and makes its cells grow quickly. On the sole, body weight pushes the growth inwards, so a plantar wart barely rises above the skin, grows deeper instead and presses on nerve endings — hence the pain. The same family of viruses causes papillomas elsewhere on the body — more: [papillomas](/en/articles/art-papilloma-olib-tashlash).

## How does it spread?

The virus survives well in warm, damp places. Most often it is picked up:

- **at pools, saunas, bathhouses and showers** — when walking barefoot;
- **at gyms and changing rooms** — wet floors, shared mats;
- **through shared slippers, socks or shoes** — within the family too;
- **through tiny cracks in the skin** — dry heels, friction and sweating open the way for the virus.

Not everyone gets infected: immunity, sweaty feet and damaged skin all play a part. Picking or cutting a wart spreads it to other parts of the foot and to the hands.

## Signs

- a rough, hard, flat growth on the sole — usually on the heel or under the toes;
- pain is worse when squeezed from the sides than when pressed straight on;
- **tiny black dots** on the surface — small clotted blood vessels;
- the skin lines do not run across the wart but break off at its edge;
- new small warts appear around it (a "mosaic" wart).

## How is it different from a callus?

Calluses and corns come from pressure and friction: the skin lines are preserved, there are no black dots, and pain is worse with direct pressure. A wart is viral, contagious and treated differently. You cannot reliably tell them apart at home — the doctor examines the growth with a **dermatoscope** and confirms the diagnosis. More about calluses: [calluses and corns](/en/articles/art-qadoq-va-kesak).

## When you must see a doctor

- **diabetes or poor circulation in the legs** — do not treat it at home by any method; any small wound can turn into an ulcer, more: [foot care in diabetes](/en/articles/art-diabetda-oyoq-parvarishi);
- the growth bleeds, changes colour or grows fast;
- there are many warts or they multiply quickly;
- your immunity is weakened (long-term medication, chronic illness);
- the wart is under or next to a nail;
- the pain makes walking hard, or there is redness, swelling or pus around it.

Any growth that bleeds or changes must be told apart from other tumours by a doctor.

## What not to do at home

- **do not cut it out** with a blade or scissors — bleeding, infection and spreading the virus;
- **do not burn it** with acids, "celandine" or other folk remedies — healthy skin gets burned, leaving a deep wound and a scar;
- **do not have it removed** in a salon or pedicure room without a diagnosis;
- **do not stick on plasters** yourself that also cover healthy skin;
- do not pick the wart or use the same tool on other areas.

## How is it treated at the clinic?

First the doctor performs dermatoscopy and assesses the number, depth and location of the warts. The doctor then chooses the method:

- **CO₂ laser (DEKA SmartXide)** — the laser vaporises the wart tissue layer by layer with little bleeding. Our clinic has shown a case of a plantar wart removed with the CO₂ laser;
- **cryodestruction** — the wart is frozen with liquid nitrogen;
- **radio-wave method (Surgitron)** — the growth is removed precisely with radio waves.

The procedure is usually done under local anaesthetic. Deep or multiple warts often need more than one session. The virus can stay in the skin, so recurrence is possible — which is why a follow-up visit matters.

## Aftercare

- care for the wound as the doctor tells you and keep it dry;
- in the first days wear soft, roomy shoes and walk less;
- go back to pools and saunas only once the doctor allows it;
- if a new growth appears, do not treat it yourself — come in for a check.

## Prevention

- wear **your own slippers** at pools, saunas and showers;
- keep your feet dry, dry well between the toes and change socks daily;
- do not share slippers, towels or shoes;
- moisturise your heels to prevent cracks;
- do not pick or pull at a wart — that keeps it from spreading.

## Plantar wart treatment in Fergana and Kokand

At Radeski Skin Clinic a dermatologist and podiatrist tell a wart from a callus, perform dermatoscopy and choose the method that suits you.

- [Wart removal in Fergana](/en/fargona/sogal-olib-tashlash) and [in Kokand](/en/qoqon/sogal-olib-tashlash);
- [Podiatrist in Fergana](/en/fargona/podolog) and [in Kokand](/en/qoqon/podolog);
- [Dermatologist in Fergana](/en/fargona/dermatolog) and [in Kokand](/en/qoqon/dermatolog);
- [DEKA CO₂ laser](/en/services/apparatnaya-kosmetologiya/deka-co2-laser), [Surgitron radio-wave](/en/services/apparatnaya-kosmetologiya/surgitron-radiofrequency), [nail and foot pathology clinic](/en/services/clinika-patologii-nogtej).

Do not cut a painful "callus" on your sole — first make sure it is not a wart.`;
}

export const PLANTAR_WARTS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Oyoq tagidagi so'gal: HPV qanday yuqadi, qadoqdan farqi, xavfli belgilar, uyda nima qilmaslik va klinikada lazer, krio yoki radioto'lqin bilan davolash. Farg'ona va Qo'qonda podolog.",
    body: uzBody(),
    keyTakeaways: [
      "Plantar so'gal — HPV chaqiradigan yuqumli hosila, oddiy qadoq emas",
      "Basseyn, sauna, sport zali va umumiy shippak orqali yuqadi",
      "Yon tomondan siqilganda og'riq, qora nuqtalar va uzilgan teri chiziqlari — so'gal belgilari; tashxisni shifokor dermatoskop bilan tasdiqlaydi",
      "Diabet yoki qon aylanishi yomon bo'lsa, uyda davolash mumkin emas",
      "Usulni shifokor tanlaydi: CO₂ lazer, krioterapiya yoki radioto'lqin; ko'pincha bir necha seans kerak, qaytalanish mumkin",
    ],
    tags: ["Plantar so'gal", "Oyoq tagidagi so'gal", 'HPV', 'Podolog', 'CO₂ lazer', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Qandli diabet yoki oyoqda qon aylanishi buzilgan bo'lsa — har qanday so'gal bilan",
      "So'gal qonasa, rangi o'zgarsa yoki tez kattalashsa",
      "So'gallar ko'p bo'lsa yoki tez ko'paysa",
      "So'gal tirnoq ostida yoki yonida bo'lsa",
      "Atrofida qizarish, shish, yiring paydo bo'lsa yoki og'riq yurishga xalaqit bersa",
    ],
    faq: [
      {
        question: "Plantar so'gal o'z-o'zidan o'tadimi?",
        answer:
          "Ba'zan kattalarda ham o'tib ketishi mumkin, lekin ko'pincha oylab saqlanadi, chuqurlashadi va ko'payadi. Og'riq bo'lsa yoki so'gallar ko'paysa, kutmasdan shifokorga ko'rining.",
      },
      {
        question: "So'galni qadoqdan qanday ajratish mumkin?",
        answer:
          "So'galda yuzada mayda qora nuqtalar bo'ladi, teri chiziqlari uning chetida uziladi va yon tomondan siqilganda og'riq kuchayadi. Lekin aniq tashxisni faqat shifokor dermatoskop bilan qo'yadi.",
      },
      {
        question: "Olib tashlangandan keyin so'gal qaytadimi?",
        answer:
          "Qaytalanish mumkin, chunki virus terida qolishi mumkin. Shuning uchun ba'zan bir necha seans va nazorat ko'rigi kerak bo'ladi; o'z shippagini kiyish va oyoqni quruq saqlash yangi so'gallar xavfini kamaytiradi.",
      },
      {
        question: "Plantar so'gal bilan basseynga borish mumkinmi?",
        answer:
          "So'gal yuqumli, shuning uchun davolanguncha basseyn va saunaga bormaslik yoki faqat o'z shippagingizda borish ma'qul. Muolajadan keyin qachon borish mumkinligini shifokor aytadi.",
      },
      {
        question: "Farg'ona va Qo'qonda plantar so'galni qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog va podolog so'galni tekshiradi, dermatoskopiya o'tkazadi va mos davolash usulini tanlaydi. Saytda yoki +998 73 200-73-73 (Farg'ona) yoki +998 95 145 73 73 (Qo'qon) raqamlari orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Подошвенная бородавка: как передаётся ВПЧ, чем отличается от мозоли, опасные признаки, чего не делать дома и лечение лазером, криодеструкцией или радиоволной. Подолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Подошвенная бородавка — заразное образование, вызванное ВПЧ, а не мозоль',
      'Заражаются в бассейне, сауне, спортзале и через общие тапочки',
      'Боль при сдавливании с боков, чёрные точки и прерванный кожный рисунок — признаки бородавки; диагноз подтверждает врач дерматоскопом',
      'При диабете или плохом кровообращении лечить дома нельзя',
      'Метод выбирает врач: CO₂-лазер, криодеструкция или радиоволна; часто нужно несколько сеансов, рецидив возможен',
    ],
    tags: ['Подошвенная бородавка', 'Бородавка на стопе', 'ВПЧ', 'Подолог', 'CO₂-лазер', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Сахарный диабет или нарушенное кровообращение в ногах — при любой бородавке',
      'Бородавка кровоточит, меняет цвет или быстро растёт',
      'Бородавок много или они быстро размножаются',
      'Бородавка под ногтем или рядом с ним',
      'Вокруг покраснение, отёк, гной или боль мешает ходить',
    ],
    faq: [
      {
        question: 'Проходит ли подошвенная бородавка сама?',
        answer:
          'Иногда и у взрослых она проходит, но чаще сохраняется месяцами, уходит вглубь и размножается. Если есть боль или бородавок становится больше, не ждите и покажитесь врачу.',
      },
      {
        question: 'Как отличить бородавку от мозоли?',
        answer:
          'У бородавки на поверхности мелкие чёрные точки, кожный рисунок прерывается на её краю, а боль сильнее при сдавливании с боков. Но точный диагноз ставит только врач с помощью дерматоскопа.',
      },
      {
        question: 'Возвращается ли бородавка после удаления?',
        answer:
          'Рецидив возможен, потому что вирус может оставаться в коже. Поэтому иногда нужно несколько сеансов и контрольный осмотр; свои тапочки и сухие стопы снижают риск новых бородавок.',
      },
      {
        question: 'Можно ли ходить в бассейн с подошвенной бородавкой?',
        answer:
          'Бородавка заразна, поэтому до лечения лучше не ходить в бассейн и сауну или ходить только в своих тапочках. Когда можно вернуться после процедуры, скажет врач.',
      },
      {
        question: 'Где лечить подошвенную бородавку в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог и подолог осмотрят бородавку, проведут дерматоскопию и подберут метод лечения. Записаться можно на сайте или по телефону +998 73 200-73-73 (Фергана) или +998 95 145 73 73 (Коканд).',
      },
    ],
  },
  en: {
    summary:
      'Plantar warts: how HPV spreads, how a wart differs from a callus, warning signs, what not to do at home and treatment with laser, cryo or radio waves. Podiatrists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'A plantar wart is a contagious growth caused by HPV, not a callus',
      'It spreads at pools, saunas, gyms and through shared slippers',
      'Pain on side pressure, black dots and broken skin lines point to a wart; a doctor confirms it with a dermatoscope',
      'With diabetes or poor circulation, never treat it at home',
      'The doctor chooses the method: CO₂ laser, cryodestruction or radio waves; several sessions are often needed and recurrence is possible',
    ],
    tags: ['Plantar warts', 'Wart on the sole', 'HPV', 'Podiatrist', 'CO₂ laser', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Diabetes or poor circulation in the legs — with any wart',
      'The wart bleeds, changes colour or grows fast',
      'There are many warts or they multiply quickly',
      'The wart is under or next to a nail',
      'Redness, swelling or pus around it, or pain that makes walking hard',
    ],
    faq: [
      {
        question: 'Does a plantar wart go away on its own?',
        answer:
          'Sometimes it does, even in adults, but more often it lasts for months, grows deeper and multiplies. If it hurts or more warts appear, do not wait — see a doctor.',
      },
      {
        question: 'How can I tell a wart from a callus?',
        answer:
          'A wart has tiny black dots on the surface, the skin lines break off at its edge, and it hurts more when squeezed from the sides. But only a doctor with a dermatoscope can make a reliable diagnosis.',
      },
      {
        question: 'Does a wart come back after removal?',
        answer:
          'It can, because the virus may stay in the skin. That is why several sessions and a follow-up visit are sometimes needed; your own slippers and dry feet lower the risk of new warts.',
      },
      {
        question: 'Can I go to the pool with a plantar wart?',
        answer:
          'Warts are contagious, so until it is treated it is better to skip pools and saunas or go only in your own slippers. The doctor will tell you when you can return after the procedure.',
      },
      {
        question: 'Where can I have a plantar wart treated in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist and podiatrist examine the wart, perform dermatoscopy and choose the treatment. Book on the website or call +998 73 200-73-73 (Fergana) or +998 95 145 73 73 (Kokand).',
      },
    ],
  },
};

export const PLANTAR_WARTS_ARTICLE: Article = {
  id: 'art-plantar-sogal',
  slug: 'plantar-sogal',
  title: {
    uz: "Oyoq tagidagi so'gal (plantar so'gal): qadoqdan farqi, xavfli belgilar va davolash",
    ru: 'Подошвенная бородавка: чем отличается от мозоли, опасные признаки и лечение',
    en: 'Plantar Warts: How They Differ From Calluses, Warning Signs and Treatment',
  },
  summary: {
    uz: PLANTAR_WARTS_ARTICLE_CATALOG.uz.summary,
    ru: PLANTAR_WARTS_ARTICLE_CATALOG.ru.summary,
    en: PLANTAR_WARTS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: PLANTAR_WARTS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: PLANTAR_WARTS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: PLANTAR_WARTS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Usmanova Mohinabonu Anvarovna',
    ru: 'Усманова Мохинабону Анваровна',
    en: 'Dr. Mohinabonu Anvarovna Usmanova',
  },
  date: '2026-12-06',
  image: '/articles/plantar-sogal-cover.jpg',
  images: {
    uz: '/articles/plantar-sogal-cover.jpg',
    ru: '/articles/plantar-sogal-cover.jpg',
    en: '/articles/plantar-sogal-cover.jpg',
  },
  views: 0,
};
