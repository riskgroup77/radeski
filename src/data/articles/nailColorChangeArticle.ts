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
 * Nail color changes — a guide by color for the nail clinic. Points: yellow/thick (fungus, but
 * also polish and smoking), white spots (small injuries, the "calcium" myth), whole/half-white
 * nails (internal disease → doctor), green (bacteria under a lifted nail), black after a blow
 * (hematoma grows out), a dark longitudinal stripe (melanonychia — red flags for melanoma), pits
 * and oil-drop spots (psoriasis), onycholysis. Then diagnosis, what not to do, city pages.
 */

function uzBody(): string {
  return `Tirnoq — sog'liq haqida ko'p narsa aytadigan kichik "oyna". Sog'lom tirnoq plastinkasi silliq, yarim shaffof bo'ladi va ostidagi teri tufayli pushti ko'rinadi. Rang o'zgarsa, ko'pincha sababi oddiy: lak, kichik zarba yoki zamburug'. Lekin ba'zan tirnoqdagi o'zgarish ichki kasallik yoki hatto melanoma kabi xavfli holatning birinchi belgisi bo'ladi. Quyida ranglar bo'yicha nima dalolat berishi va qachon shifokorga borish kerakligini ko'rib chiqamiz.

## Tezroq shifokorga ko'rining, agar:

- tirnoqda yangi jigarrang yoki qora chiziq paydo bo'lib, kengayib borsa;
- chiziqning chetlari xira, rangi notekis bo'lsa yoki pigment tirnoq atrofidagi teriga o'tsa;
- tirnoq ostidagi qora dog' zarbasiz paydo bo'lsa yoki tirnoq o'sgani bilan siljimasa;
- tirnoq atrofi qizarib, shishib, og'risa yoki yiring chiqsa;
- bir vaqtda bir nechta yoki barcha tirnoqlar rangi o'zgarsa.

## Sariq va qalinlashgan tirnoq

Eng ko'p uchraydigan sabab — **tirnoq zamburug'i (onixomikoz)**. Tirnoq sarg'ayadi, qalinlashadi, mo'rt bo'lib uvalanadi, o'zgarish ko'pincha chetidan boshlanadi. Batafsil: [tirnoq zamburug'i](/uz/articles/art-tirnoq-zamburugi).

Boshqa sabablar ham bor:

- to'q rangli lakni uzoq vaqt asos (baza)siz surtish — tirnoq bir tekis sarg'ayadi va lakdan dam berilgach asta tiklanadi;
- chekish — barmoq tirnoqlari sarg'ish-jigarrang tusga kiradi;
- yoshga bog'liq o'zgarishlar, psoriaz, ba'zan ichki kasalliklar.

Faqat ko'rinishiga qarab zamburug'ni boshqa sabablardan ishonchli ajratib bo'lmaydi — tahlil kerak.

## Oq dog'lar va oq tirnoq

Tirnoqdagi mayda oq dog'lar va chiziqlar ko'pincha tirnoq o'sish zonasining kichik shikastlanishidan qoladi: barmoqni urib olish, manikyurda kutikulani qattiq itarish. Ularni "kalsiy yetishmasligi" belgisi deyish — afsona. Dog'lar tirnoq bilan birga o'sib chiqadi va o'z-o'zidan yo'qoladi.

Butunlay boshqa holat — butun tirnoq oqarishi yoki tirnoqning yarmi oq, yarmi pushti-jigarrang bo'lishi. Bu jigar, buyrak, qon kasalliklari yoki boshqa ichki muammolar bilan bog'liq bo'lishi mumkin. Bunday tirnoqlarni ko'rsangiz, shifokorga murojaat qiling — kerakli tekshiruvlarni u belgilaydi.

## Yashil tirnoq

Yashil yoki yashil-qora rang ko'pincha **bakterial infeksiya** belgisi. Bakteriyalar tirnoq plastinkasi tagidan ko'chib qolganda hosil bo'lgan bo'shliqda, nam muhitda ko'payadi. Bu qo'li tez-tez suvda bo'ladigan odamlarda va sun'iy tirnoqdan keyin ko'p uchraydi. Davolash usulini shifokor belgilaydi, qo'llarni quruq saqlash esa muhim.

## Zarbadan keyingi qora yoki ko'kimtir-binafsha dog'

Barmoq urilgandan yoki tor poyabzaldan keyin tirnoq ostiga qon quyiladi — **gematoma**. Dog' avval qizil-binafsha, keyin to'q ko'k yoki qora bo'ladi. U tirnoq bilan birga asta oldinga siljiydi va o'sib chiqadi; oyoq tirnog'ida bu bir necha oy davom etadi. Kuchli og'riq bo'lsa, tirnoqning katta qismi qoraysa yoki suyak shikastlanishi gumon qilinsa — shifokorga boring. Dog' zarbasiz paydo bo'lgan va siljimayotgan bo'lsa, bu gematoma bo'lmasligi mumkin.

## Jigarrang yoki qora bo'ylama chiziq

Tirnoq bo'ylab o'tgan jigarrang chiziq — **melanonixiya**. Qoramtir teri egalarida bir nechta tirnoqda bir xil, ingichka chiziqlar ko'pincha zararsiz bo'ladi. Lekin quyidagi holatlarda tirnoq melanomasini istisno qilish uchun shoshilinch tekshiruv kerak:

- chiziq yangi paydo bo'lgan, ayniqsa kattalarda bitta tirnoqda;
- chiziq kengayib yoki to'qlashib bormoqda;
- chetlari xira, ichida turli tusdagi chiziqlar bor;
- pigment kutikula va tirnoq atrofidagi teriga o'tgan;
- tirnoq plastinkasi yorilgan yoki shakli buzilgan.

Xollar kabi tirnoq ham dermatoskop bilan tekshiriladi; batafsil: [xollar va dermatoskopiya](/uz/articles/art-xol-tekshiruvi-dermatoskopiya).

## Chuqurchalar va "yog' tomchisi" dog'lari

Tirnoq yuzasida igna bilan teshilgandek mayda chuqurchalar, plastinka ostidagi sarg'ish-pushti "yog' tomchisi" dog'lari — **psoriaz**ning tipik belgilari. Ular teridagi toshmalar bilan birga yoki ba'zan bo'g'imlardagi og'riq bilan kuzatiladi. Batafsil: [psoriaz](/uz/articles/art-psoriaz-tashxis-davolash-radeski).

## Tirnoqning ko'chishi (onixoliz)

Tirnoq plastinkasi uchidan boshlab tagidan ajraladi, ajralgan qism oq yoki sarg'ish ko'rinadi. Sabablari — shikast, uzun tirnoq, maishiy kimyo, zamburug', psoriaz, qalqonsimon bez muammolari va ba'zi dorilar. Ko'chgan joyda infeksiya oson rivojlanadi.

## Uyda nima qilmaslik kerak

- O'zgargan tirnoqni lak yoki sun'iy tirnoq ostiga yashirmang — bu tashxisni kechiktiradi.
- Tahlilsiz "zamburug'ga qarshi" vositalarni o'zingiz surtmang: zamburug' bo'lmasa vaqt yo'qotiladi, bo'lsa ham keyingi tahlil natijasi buzilishi mumkin.
- Qora qismini kesib, qirib yoki teshib olib tashlashga urinmang.
- Tirnoq atrofidagi teriga agressiv vositalar surtmang.

## Klinikada qanday tekshiriladi

- **Ko'rik** — barcha tirnoqlar, teri va kerak bo'lsa bo'g'imlar ko'riladi.
- **Tirnoq dermatoskopiyasi** — chiziq, dog' va chuqurchalarning tuzilishini kattalashtirib ko'rsatadi.
- **Mikroskopiya va ekma** — zamburug'ni tasdiqlash yoki inkor etish uchun tirnoq qirindisi tekshiriladi.
- **Biopsiya** — chiziq shubhali bo'lsa; to'qima gistologik tekshiriladi, batafsil: [dermatopatologiya](/uz/articles/art-dermatopatologiya-radeski).
- Kerak bo'lsa, qon tahlillari yoki boshqa mutaxassis maslahati.

Davolash sababga bog'liq: zamburug'da shifokor tayinlagan vositalar va podologik ishlov, psoriazda umumiy davolash, gematomada kuzatuv. Tirnoq sekin o'sadi, shuning uchun natija odatda oylar ichida ko'rinadi.

## Kundalik parvarish

- Tirnoqni to'g'ri, juda kalta qilmasdan kesing; kutikulani kesmang.
- Uy ishlarida qo'lqop kiying, qo'llarni quruq saqlang.
- Lak ostiga asos surting va vaqti-vaqti bilan tirnoqqa "dam" bering.
- Keng, qulay poyabzal kiying.
- Tirnoqlarni oyiga bir marta ko'zdan kechiring, yangi chiziq yoki dog'ni suratga olib qo'ying.

## Tirnoq rangi o'zgarishini tekshirish Farg'ona va Qo'qonda

Radeski Skin Clinic'da dermatovenerolog-podolog tirnoqni ko'radi, dermatoskopiya va kerakli tahlillarni o'tkazadi va davolash rejasini tuzadi.

- [Podolog Farg'onada](/uz/fargona/podolog) va [Qo'qonda](/uz/qoqon/podolog);
- [Tirnoq zamburug'ini davolash Farg'onada](/uz/fargona/tirnoq-zamburug) va [Qo'qonda](/uz/qoqon/tirnoq-zamburug);
- [Tirnoq patologiyalari klinikasi](/uz/services/clinika-patologii-nogtej) va [dermatologik podolog xizmati](/uz/services/clinika-patologii-nogtej/dermatologik-podolog-xizmati).

Tirnoqdagi yangi qora chiziqni "o'tib ketar" deb kutmang — erta ko'rik eng ishonchli himoya.`;
}

function ruBody(): string {
  return `Ноготь — маленькое «окно», через которое видно многое о здоровье. Здоровая ногтевая пластина гладкая, полупрозрачная и розовая благодаря коже под ней. Если цвет меняется, причина чаще всего простая: лак, небольшой удар или грибок. Но иногда изменение ногтя — первый признак болезни внутренних органов или даже такого опасного состояния, как меланома. Разберём по цветам, о чём это говорит и когда нужно к врачу.

## Обратитесь к врачу без промедления, если:

- на ногте появилась новая коричневая или чёрная полоса и она расширяется;
- края полосы размыты, цвет неравномерный или пигмент переходит на кожу вокруг ногтя;
- тёмное пятно под ногтем появилось без удара или не смещается по мере роста ногтя;
- кожа вокруг ногтя покраснела, отекла, болит или выделяется гной;
- цвет изменился сразу на нескольких или на всех ногтях.

## Жёлтый и утолщённый ноготь

Самая частая причина — **грибок ногтей (онихомикоз)**. Ноготь желтеет, утолщается, крошится; изменения обычно начинаются с края. Подробнее: [грибок ногтей](/ru/articles/art-tirnoq-zamburugi).

Есть и другие причины:

- тёмный лак, который долго носят без базы, — ноготь желтеет равномерно и постепенно восстанавливается после перерыва;
- курение — ногти на пальцах приобретают желтовато-коричневый оттенок;
- возрастные изменения, псориаз, иногда болезни внутренних органов.

Только по внешнему виду надёжно отличить грибок от других причин нельзя — нужен анализ.

## Белые пятна и белый ноготь

Мелкие белые пятнышки и полоски на ногте чаще всего остаются после небольших травм зоны роста ногтя: удар пальцем, слишком сильное отодвигание кутикулы при маникюре. Мнение, что это «нехватка кальция», — миф. Пятна вырастают вместе с ногтем и исчезают сами.

Совсем другая ситуация — когда белеет весь ноготь или он наполовину белый, наполовину розово-коричневый. Это может быть связано с болезнями печени, почек, крови или другими внутренними проблемами. Увидев такие ногти, обратитесь к врачу — он назначит нужные обследования.

## Зелёный ноготь

Зелёный или зелёно-чёрный цвет чаще всего говорит о **бактериальной инфекции**. Бактерии размножаются во влажной полости, которая образуется, когда пластина отслаивается от ложа. Это часто бывает у людей, чьи руки постоянно в воде, и после искусственных ногтей. Лечение подбирает врач, а держать руки сухими очень важно.

## Чёрное или сине-фиолетовое пятно после удара

После удара по пальцу или тесной обуви под ногтем скапливается кровь — **гематома**. Пятно сначала красно-фиолетовое, затем тёмно-синее или чёрное. Оно постепенно сдвигается вперёд вместе с ногтем и вырастает; на ноге это занимает несколько месяцев. При сильной боли, потемнении большей части ногтя или подозрении на травму кости — к врачу. Если пятно появилось без удара и не смещается, это может быть не гематома.

## Коричневая или чёрная продольная полоса

Коричневая полоса вдоль ногтя — **меланонихия**. У людей со смуглой кожей одинаковые тонкие полоски на нескольких ногтях обычно безобидны. Но срочное обследование, чтобы исключить меланому ногтя, нужно, если:

- полоса новая, особенно у взрослого и на одном ногте;
- полоса расширяется или темнеет;
- края размыты, внутри линии разных оттенков;
- пигмент перешёл на кутикулу и кожу вокруг ногтя;
- ногтевая пластина треснула или деформировалась.

Как и родинки, ноготь осматривают дерматоскопом; подробнее: [родинки и дерматоскопия](/ru/articles/art-xol-tekshiruvi-dermatoskopiya).

## Ямки и пятна «масляной капли»

Мелкие ямки на поверхности, будто ноготь проколот иглой, и желтовато-розовые пятна «масляной капли» под пластиной — типичные признаки **псориаза**. Они встречаются вместе с высыпаниями на коже, иногда с болью в суставах. Подробнее: [псориаз](/ru/articles/art-psoriaz-tashxis-davolash-radeski).

## Отслоение ногтя (онихолизис)

Пластина отходит от ложа, начиная с края, отслоившаяся часть выглядит белой или желтоватой. Причины — травма, длинные ногти, бытовая химия, грибок, псориаз, проблемы щитовидной железы и некоторые лекарства. Под отслоившимся ногтем легко развивается инфекция.

## Чего не делать дома

- Не прячьте изменённый ноготь под лаком или искусственным покрытием — это откладывает диагноз.
- Не лечите «грибок» сами без анализа: если это не грибок, теряется время, а если грибок — может исказиться результат будущего анализа.
- Не пытайтесь срезать, соскоблить или проколоть тёмный участок.
- Не наносите агрессивные средства на кожу вокруг ногтя.

## Как обследуют в клинике

- **Осмотр** — врач смотрит все ногти, кожу и при необходимости суставы.
- **Дерматоскопия ногтя** — показывает в увеличении строение полосы, пятна или ямок.
- **Микроскопия и посев** — соскоб ногтя исследуют, чтобы подтвердить или исключить грибок.
- **Биопсия** — при подозрительной полосе; ткань изучают гистологически, подробнее: [дерматопатология](/ru/articles/art-dermatopatologiya-radeski).
- При необходимости — анализы крови или консультация другого специалиста.

Лечение зависит от причины: при грибке — средства, назначенные врачом, и подологическая обработка, при псориазе — общее лечение, при гематоме — наблюдение. Ноготь растёт медленно, поэтому результат обычно заметен через месяцы.

## Ежедневный уход

- Подстригайте ногти прямо и не слишком коротко; кутикулу не срезайте.
- Работайте по дому в перчатках, держите руки сухими.
- Наносите базу под лак и время от времени давайте ногтям «отдохнуть».
- Носите просторную удобную обувь.
- Раз в месяц осматривайте ногти и фотографируйте новую полосу или пятно.

## Проверка изменения цвета ногтей в Фергане и Коканде

В Radeski Skin Clinic дерматовенеролог-подолог осмотрит ноготь, проведёт дерматоскопию и нужные анализы и составит план лечения.

- [Подолог в Фергане](/ru/fargona/podolog) и [в Коканде](/ru/qoqon/podolog);
- [Лечение грибка ногтей в Фергане](/ru/fargona/tirnoq-zamburug) и [в Коканде](/ru/qoqon/tirnoq-zamburug);
- [Клиника патологии ногтей](/ru/services/clinika-patologii-nogtej) и [дерматологическая подологическая помощь](/ru/services/clinika-patologii-nogtej/dermatologik-podolog-xizmati).

Не ждите, что новая тёмная полоса на ногте «пройдёт сама», — ранний осмотр надёжнее всего.`;
}

function enBody(): string {
  return `A nail is a small "window" onto your health. A healthy nail is smooth, semi-transparent and pink from the skin beneath it. When the color changes, the cause is usually simple: nail polish, a minor knock or fungus. Sometimes, though, it is the first sign of an internal illness or even melanoma. Here is what each color can mean and when to see a doctor.

## See a doctor promptly if:

- a new brown or black stripe appears on a nail and gets wider;
- the stripe has blurred edges, uneven color, or the pigment spreads onto the skin around the nail;
- a dark spot under the nail appears without any injury or does not move as the nail grows;
- the skin around the nail is red, swollen, painful or oozing pus;
- several or all nails change color at once.

## Yellow, thickened nails

The most common cause is **nail fungus (onychomycosis)**. The nail turns yellow, thickens and crumbles, usually starting at the free edge. More: [nail fungus](/en/articles/art-tirnoq-zamburugi).

There are other causes too:

- dark polish worn for a long time without a base coat — the nail yellows evenly and recovers gradually after a break;
- smoking — fingernails take on a yellow-brown tint;
- age-related changes, psoriasis and sometimes internal diseases.

Fungus cannot be reliably told apart from other causes by looks alone — a test is needed.

## White spots and white nails

Small white spots and lines are usually left by minor injuries to the nail's growth zone, such as a knock or a cuticle pushed back too hard. That they mean a "lack of calcium" is a myth. They grow out with the nail.

It is different when the whole nail turns white, or is half white and half pink-brown. This can be linked to liver, kidney or blood disorders. See a doctor, who will decide which tests are needed.

## Green nails

A green or green-black color usually points to a **bacterial infection**. Bacteria multiply in the damp gap that forms when the nail plate lifts off its bed. It is common when hands are often in water and after artificial nails. The doctor chooses the treatment; keeping hands dry matters.

## A black or blue-purple spot after a blow

After a finger is struck or a toe is squeezed by tight shoes, blood collects under the nail — a **hematoma**. The spot is red-purple at first, then dark blue or black. It moves forward with the nail and grows out, which takes months on a toenail. See a doctor if the pain is severe, most of the nail is dark or a bone may be injured. If a dark spot appeared without an injury and does not move, it may not be a hematoma.

## A brown or black lengthwise stripe

A brown band running along the nail is **melanonychia**. In people with darker skin, similar thin stripes on several nails are usually harmless. But an urgent check to rule out nail melanoma is needed when:

- the stripe is new, especially in an adult and on a single nail;
- the stripe is getting wider or darker;
- its edges are blurred and it contains lines of different shades;
- the pigment has spread onto the cuticle and the skin around the nail;
- the nail plate has split or become deformed.

Like moles, nails are examined with a dermatoscope; more: [moles and dermoscopy](/en/articles/art-xol-tekshiruvi-dermatoskopiya).

## Pits and "oil-drop" spots

Tiny pits on the surface, as if the nail had been pricked with a needle, and yellowish-pink "oil-drop" patches under the plate are typical signs of **psoriasis**. They appear together with skin plaques and sometimes with joint pain. More: [psoriasis](/en/articles/art-psoriaz-tashxis-davolash-radeski).

## Nail lifting (onycholysis)

The nail plate separates from its bed, starting at the tip, and the lifted part looks white or yellowish. Causes include injury, long nails, household chemicals, fungus, psoriasis, thyroid problems and some medicines. Infection develops easily under a lifted nail.

## What not to do at home

- Do not hide a changed nail under polish or artificial nails — it delays the diagnosis.
- Do not treat "fungus" yourself without a test: if it is not fungus, time is lost; if it is, a later test may be distorted.
- Do not try to cut, scrape or pierce the dark area.
- Do not apply harsh products to the skin around the nail.

## How the clinic examines nails

- **Examination** — the doctor looks at all nails, the skin and, if needed, the joints.
- **Nail dermoscopy** — magnifies the structure of a stripe, spot or pits.
- **Microscopy and culture** — nail scrapings are tested to confirm or rule out fungus.
- **Biopsy** — when a stripe looks suspicious; the tissue is examined histologically, more: [dermatopathology](/en/articles/art-dermatopatologiya-radeski).
- If needed, blood tests or another specialist's opinion.

Treatment depends on the cause: for fungus, products prescribed by the doctor plus podiatric care; for psoriasis, overall treatment; for a hematoma, observation. Nails grow slowly, so results show over months.

## Everyday nail care

- Cut nails straight across and not too short; do not cut the cuticles.
- Wear gloves for housework and keep your hands dry.
- Use a base coat under polish and give your nails a "rest" from time to time.
- Wear roomy, comfortable shoes.
- Check your nails once a month and photograph any new stripe or spot.

## Nail color changes checked in Fergana and Kokand

At Radeski Skin Clinic a dermatovenereologist-podiatrist examines the nail, performs dermoscopy and the necessary tests, and draws up a treatment plan.

- [Podiatrist in Fergana](/en/fargona/podolog) and [in Kokand](/en/qoqon/podolog);
- [Nail fungus treatment in Fergana](/en/fargona/tirnoq-zamburug) and [in Kokand](/en/qoqon/tirnoq-zamburug);
- [Nail pathology clinic](/en/services/clinika-patologii-nogtej) and [dermatological podiatry service](/en/services/clinika-patologii-nogtej/dermatologik-podolog-xizmati).

Do not wait for a new dark stripe on a nail to "go away" — an early check is the most reliable protection.`;
}

export const NAIL_COLOR_CHANGE_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Tirnoq rangi o'zgarishi: sariq, oq, yashil, qora dog' va jigarrang chiziq nima dalolat beradi, qachon melanoma xavfi bor va qanday tekshiriladi. Farg'ona va Qo'qonda podolog.",
    body: uzBody(),
    keyTakeaways: [
      "Sariq va qalin tirnoq ko'pincha zamburug', lekin lak va chekish ham sabab bo'ladi — tahlil kerak",
      "Mayda oq dog'lar — kichik shikast izlari, \"kalsiy yetishmasligi\" emas",
      "Butun yoki yarim oq tirnoq ichki kasallik bilan bog'liq bo'lishi mumkin — shifokorga ko'rining",
      "Yangi, kengayayotgan yoki chetlari xira qora chiziq melanomani istisno qilish uchun shoshilinch tekshiruv talab qiladi",
      "Klinikada ko'rik, tirnoq dermatoskopiyasi, mikroskopiya va kerak bo'lsa biopsiya o'tkaziladi",
    ],
    tags: ['Tirnoq rangi', "Tirnoq zamburug'i", 'Melanonixiya', 'Tirnoq psoriazi', 'Podolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Tirnoqda yangi jigarrang yoki qora chiziq paydo bo'lsa yoki u kengaysa",
      "Pigment tirnoq atrofidagi teriga o'tsa",
      "Qora dog' zarbasiz paydo bo'lsa yoki tirnoq bilan siljimasa",
      "Tirnoq atrofi qizarsa, shishsa, og'risa yoki yiring chiqsa",
      "Bir nechta yoki barcha tirnoqlar oqarsa yoki rangi o'zgarsa",
    ],
    faq: [
      {
        question: "Tirnoqdagi oq dog'lar kalsiy yetishmasligidanmi?",
        answer:
          "Yo'q, bu keng tarqalgan afsona. Mayda oq dog'lar ko'pincha tirnoq o'sish zonasining kichik shikastlanishidan qoladi va tirnoq bilan birga o'sib chiqadi. Butun tirnoq oqarsa esa shifokorga ko'rinish kerak.",
      },
      {
        question: "Tirnoqdagi qora chiziq har doim xavflimi?",
        answer:
          "Har doim emas: qoramtir terili odamlarda bir nechta tirnoqdagi bir xil ingichka chiziqlar ko'pincha zararsiz. Ammo yangi, kengayayotgan, chetlari xira chiziq yoki atrof teriga o'tgan pigment melanomani istisno qilish uchun shoshilinch tekshiruv talab qiladi.",
      },
      {
        question: "Zarbadan keyingi qora tirnoq qachon o'tadi?",
        answer:
          "Gematoma tirnoq bilan birga asta o'sib chiqadi: qo'lda bir necha hafta-oy, oyoqda bir necha oy. Kuchli og'riq bo'lsa yoki dog' siljimasa, shifokorga boring.",
      },
      {
        question: "Sariq tirnoq — albatta zamburug'mi?",
        answer:
          "Ko'pincha, lekin har doim emas: lak, chekish, psoriaz va yoshga bog'liq o'zgarishlar ham tirnoqni sarg'aytiradi. Zamburug'ni mikroskopiya yoki ekma bilan tasdiqlash kerak, shundan keyingina shifokor davolashni tanlaydi.",
      },
      {
        question: "Farg'ona va Qo'qonda tirnoq rangi o'zgarishini qayerda tekshirish mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatovenerolog-podolog tirnoqni ko'radi, dermatoskopiya va kerakli tahlillarni o'tkazadi. Saytda yoki +998 73 200-73-73 (Farg'ona) yoki +998 95 145 73 73 (Qo'qon) raqamlari orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Изменение цвета ногтей: о чём говорят жёлтые, белые, зелёные, чёрные пятна и тёмная полоса, когда есть риск меланомы и как проводят обследование. Подолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Жёлтый толстый ноготь — часто грибок, но причиной бывают лак и курение — нужен анализ',
      'Мелкие белые пятна — следы небольших травм, а не «нехватка кальция»',
      'Полностью или наполовину белый ноготь может быть связан с болезнями внутренних органов — нужен врач',
      'Новая, расширяющаяся или размытая тёмная полоса требует срочного обследования, чтобы исключить меланому',
      'В клинике проводят осмотр, дерматоскопию ногтя, микроскопию и при необходимости биопсию',
    ],
    tags: ['Цвет ногтей', 'Грибок ногтей', 'Меланонихия', 'Псориаз ногтей', 'Подолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'На ногте появилась новая коричневая или чёрная полоса или она расширяется',
      'Пигмент перешёл на кожу вокруг ногтя',
      'Тёмное пятно появилось без удара или не смещается с ростом ногтя',
      'Кожа вокруг ногтя покраснела, отекла, болит или гноится',
      'Побелели или изменили цвет несколько или все ногти',
    ],
    faq: [
      {
        question: 'Белые пятна на ногтях — от нехватки кальция?',
        answer:
          'Нет, это распространённый миф. Мелкие белые пятна чаще всего остаются после небольших травм зоны роста ногтя и вырастают вместе с ним. Если же белеет весь ноготь, нужно показаться врачу.',
      },
      {
        question: 'Тёмная полоса на ногте всегда опасна?',
        answer:
          'Не всегда: у людей со смуглой кожей одинаковые тонкие полоски на нескольких ногтях обычно безобидны. Но новая, расширяющаяся полоса с размытыми краями или пигмент на коже вокруг ногтя требуют срочного обследования, чтобы исключить меланому.',
      },
      {
        question: 'Когда пройдёт чёрный ноготь после удара?',
        answer:
          'Гематома постепенно вырастает вместе с ногтем: на руке за несколько недель или месяцев, на ноге за несколько месяцев. При сильной боли или если пятно не смещается — к врачу.',
      },
      {
        question: 'Жёлтый ноготь — это обязательно грибок?',
        answer:
          'Часто, но не всегда: ноготь желтеет и от лака, курения, псориаза и с возрастом. Грибок нужно подтвердить микроскопией или посевом, и только после этого врач подбирает лечение.',
      },
      {
        question: 'Где проверить изменение цвета ногтей в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматовенеролог-подолог осмотрит ноготь, проведёт дерматоскопию и нужные анализы. Записаться можно на сайте или по телефону +998 73 200-73-73 (Фергана) или +998 95 145 73 73 (Коканд).',
      },
    ],
  },
  en: {
    summary:
      'Nail color changes: what yellow, white, green and black nails or a dark stripe mean, when melanoma must be ruled out and how nails are examined. Podiatrists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Yellow, thick nails are often fungus, but polish and smoking can cause them too — a test is needed',
      'Small white spots are marks of minor injuries, not a "lack of calcium"',
      'A fully or half-white nail can be linked to internal disease — see a doctor',
      'A new, widening or blurred dark stripe needs an urgent check to rule out melanoma',
      'The clinic uses examination, nail dermoscopy, microscopy and, if needed, a biopsy',
    ],
    tags: ['Nail color', 'Nail fungus', 'Melanonychia', 'Nail psoriasis', 'Podiatrist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A new brown or black stripe appears on a nail or gets wider',
      'Pigment spreads onto the skin around the nail',
      'A dark spot appears without an injury or does not move as the nail grows',
      'The skin around the nail is red, swollen, painful or has pus',
      'Several or all nails turn white or change color',
    ],
    faq: [
      {
        question: 'Are white spots on nails caused by a lack of calcium?',
        answer:
          'No, that is a common myth. Small white spots are usually left by minor injuries to the nail growth zone and grow out with the nail. If the whole nail turns white, see a doctor.',
      },
      {
        question: 'Is a dark stripe on a nail always dangerous?',
        answer:
          'Not always: in people with darker skin, similar thin stripes on several nails are usually harmless. But a new, widening stripe with blurred edges, or pigment on the surrounding skin, needs an urgent check to rule out melanoma.',
      },
      {
        question: 'How long does a black nail after an injury take to clear?',
        answer:
          'A hematoma slowly grows out with the nail: weeks to months on a finger, several months on a toe. See a doctor if the pain is severe or the spot does not move.',
      },
      {
        question: 'Is a yellow nail always fungus?',
        answer:
          'Often, but not always: polish, smoking, psoriasis and ageing can also turn nails yellow. Fungus should be confirmed by microscopy or culture before the doctor chooses treatment.',
      },
      {
        question: 'Where in Fergana and Kokand can I have nail color changes checked?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatovenereologist-podiatrist examines the nail and performs dermoscopy and the necessary tests. Book on the website or call +998 73 200-73-73 (Fergana) or +998 95 145 73 73 (Kokand).',
      },
    ],
  },
};

export const NAIL_COLOR_CHANGE_ARTICLE: Article = {
  id: 'art-tirnoq-rangi-ozgarishi',
  slug: 'tirnoq-rangi-ozgarishi',
  title: {
    uz: "Tirnoq rangining o'zgarishi: nima dalolat beradi va qachon xavfli",
    ru: 'Изменение цвета ногтей: о чём говорит и когда это опасно',
    en: 'Nail Color Changes: What They Mean and When They Are Dangerous',
  },
  summary: {
    uz: NAIL_COLOR_CHANGE_ARTICLE_CATALOG.uz.summary,
    ru: NAIL_COLOR_CHANGE_ARTICLE_CATALOG.ru.summary,
    en: NAIL_COLOR_CHANGE_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: NAIL_COLOR_CHANGE_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: NAIL_COLOR_CHANGE_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: NAIL_COLOR_CHANGE_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Karimova Iroda',
    ru: 'Каримова Ирода',
    en: 'Dr. Iroda Karimova',
  },
  date: '2026-11-25',
  image: '/articles/tirnoq-rangi-cover.jpg',
  images: {
    uz: '/articles/tirnoq-rangi-cover.jpg',
    ru: '/articles/tirnoq-rangi-cover.jpg',
    en: '/articles/tirnoq-rangi-cover.jpg',
  },
  views: 0,
};
