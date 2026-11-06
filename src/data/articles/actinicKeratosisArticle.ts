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
 * Actinic (solar) keratosis — rough, sandpaper-like spots on sun-exposed skin in people 40+ who
 * spent years outdoors. Points: a precancerous change (a small share may become squamous cell
 * carcinoma — no percentages), where it appears (face, bald scalp, ears, backs of hands, lower lip),
 * how it differs from seborrheic keratosis, age spots and dry skin, red flags, what not to do,
 * dermatoscopy / biopsy, treatment chosen by the doctor, daily SPF and a yearly skin check.
 */

function uzBody(): string {
  return `Aktinik keratoz — quyosh ko'p tushadigan teri sohalarida paydo bo'ladigan dag'al, qipiqli dog'lar. Barmoq bilan silaganda ular qum qog'ozdek "tirnaladi" va ko'pincha ko'zdan ko'ra qo'l bilan oson seziladi. Aktinik keratoz odatda 40 yoshdan keyin, yillar davomida ochiq havoda ishlagan odamlarda uchraydi: dalada, qurilishda, bozorda, rulda. Farg'ona vodiysining yozgi quyoshi ostida o'tgan yillar terida aynan shunday iz qoldiradi. Bu dog' shunchaki kosmetik muammo emas — u saratonoldi o'zgarish, shuning uchun uni tekshirish va davolash kerak.

## Aktinik keratoz nima?

Aktinik (quyosh) keratoz — ultrabinafsha nurlar uzoq yillar davomida shikastlagan teri hujayralarining o'zgarishi. Teri yuzasida shox modda ortiqcha to'planib, dag'al qobiq hosil qiladi. Dog'lar odatda kichik — bir necha millimetrdan 1–2 sm gacha, pushti, qizg'ish, teri rangida yoki jigarrang bo'ladi va ko'pincha bir nechtasi birga chiqadi.

Nega bu muhim: aktinik keratozning kichik bir qismi vaqt o'tishi bilan **teri yassi hujayrali rakiga** aylanishi mumkin. Qaysi dog' aynan shu yo'lni tutishini oldindan aytib bo'lmaydi, shuning uchun shifokor har birini ko'rib chiqadi.

## Kimlarda va qayerda paydo bo'ladi?

- **Yillar davomida ochiq havoda ishlaganlar** — dehqonlar, quruvchilar, haydovchilar, sotuvchilar.
- **Oq, oson qizaradigan teri** egalari va yoshlikda ko'p marta quyoshda kuyganlar.
- **40 yoshdan oshganlar** — yosh o'tgani sari xavf ortadi.
- **Immuniteti pasaygan odamlar**, masalan, a'zo ko'chirib o'tkazilganlar.

Eng ko'p uchraydigan joylar: yuz (peshona, burun, yonoqlar), sochi to'kilgan erkaklarda bosh terisi, quloqlar, qo'llarning orqa tomoni, bilaklar va pastki lab. Pastki labdagi shakli **aktinik xeylit** deyiladi: lab quruq va qipiqli bo'lib qoladi, lab chegarasi xiralashadi, yoriqlar uzoq bitmaydi.

## Belgilari

- dag'al, qum qog'ozga o'xshash dog' — ko'pincha ko'rinishidan oldin seziladi;
- ustida quruq qobiq yoki qipiq, ko'chsa yana paydo bo'ladi;
- pushti, qizg'ish yoki jigarrang rang;
- ba'zan yengil achishish, qichishish yoki kiyim tekkanda sezgirlik;
- dog' bir muddat yo'qolib, yana qaytib chiqishi mumkin.

## Boshqa dog'lardan farqi

- **Seboreyali keratoz** — teri ustiga "yopishtirilgandek" ko'tarilgan, ko'pincha jigarrang yoki qora dog'; u yaxshi sifatli. Batafsil: [seboreyali keratoz](/uz/articles/art-seboreyali-keratoz).
- **Yosh dog'lari (lentigo)** — tekis, silliq jigarrang dog'lar, ularda dag'allik bo'lmaydi.
- **Oddiy quruq teri** — keng sohada bo'ladi va krem surtilganda yumshaydi; aktinik keratoz esa krem bilan o'tib ketmaydi.

Ko'zga o'xshash bo'lsa ham, aniq tashxisni faqat shifokor qo'yadi. Terida uchraydigan turli dog'lar haqida: [teri dog'lari](/uz/conditions/teri-doglari).

## Qachon tezroq shifokorga borish kerak

Quyidagi belgilar dog' chuqurroq o'zgarayotganini ko'rsatishi mumkin:

- dog' qalinlashsa, tugunga aylansa yoki qattiqlashsa;
- qonasa yoki og'risa;
- tez kattalashsa;
- o'rnida bitmaydigan yara yoki qayta-qayta qobiq paydo bo'lsa;
- labdagi yoriq yoki yara bir necha haftada bitmasa.

Bunday hollarda ko'rikni kechiktirmang. Quyosh ko'rgan terida uchraydigan boshqa o'sma haqida: [bazalioma](/uz/articles/art-bazalioma-teri-raki).

## Uyda nima qilmaslik kerak

- dog'ni tirnash, qobig'ini ko'chirish yoki pichoq, ustara bilan qirish;
- salonda tashxissiz "kuydirish" yoki "olib tashlatish" — dog'ning tabiati noma'lumligicha qoladi, tekshiruv uchun to'qima esa yo'qoladi;
- sirka, limon, sarimsoq va boshqa kislotali xalq vositalarini surtish — ular kuyish va chandiq qoldiradi;
- dorixonadan kremni o'zingizcha tanlash.

## Klinikada tashxis

Shifokor dog'larni ko'zdan kechiradi va **dermatoskopiya** qiladi — maxsus kattalashtiruvchi asbob bilan teri tuzilishini ko'radi. Bu aktinik keratozni boshqa hosilalardan ajratishga yordam beradi. Dog' qalin, qonaydigan yoki shubhali bo'lsa, **biopsiya** olinadi va gistologik tekshiruvga yuboriladi. Batafsil: [teri biopsiyasi](/uz/articles/art-teri-biopsiyasi).

## Davolash

Usulni shifokor dog'lar soni, joyi va qalinligiga qarab tanlaydi:

- **Kriodestruksiya** — dog'ni suyuq azot bilan muzlatish; alohida dog'lar uchun keng qo'llanadi.
- **CO₂ lazer** — o'zgargan qatlamni aniq bug'latish; yuz va lab sohasida ham qo'llanishi mumkin.
- **Olib tashlash va gistologiya** — qalin yoki shubhali dog'larda; to'qima tekshiruvga yuboriladi.
- **Shifokor tayinlagan mahalliy vositalar** — dog'lar ko'p va keng sohada bo'lsa, butun maydon davolanadi.

Davolashdan keyin bir necha kun qizarish va qobiq bo'lishi odatiy. Yangi dog'lar paydo bo'lishi mumkin, shuning uchun shifokor belgilagan muddatlarda nazorat ko'rigiga keling.

## Profilaktika

- **Har kuni SPF** — yuz, quloq, qo'l va bosh terisiga, qishda ham, bulutli kunlarda ham. Qishki parvarish haqida: [qishda teri parvarishi](/uz/articles/art-qishda-teri-parvarishi).
- **Keng soyabonli shlyapa** — ayniqsa sochi siyrak erkaklar uchun.
- **Labga himoya omilli balzam.**
- **Peshin paytida quyoshdan qochish**, dalada ishlaganda yopiq kiyim.
- **Yiliga bir marta teri ko'rigi** — ayniqsa ilgari aktinik keratoz bo'lgan bo'lsa. Batafsil: [xollar va dermatoskopiya](/uz/articles/art-xol-tekshiruvi-dermatoskopiya).

## Aktinik keratozni tekshirish va davolash Farg'ona va Qo'qonda

Radeski Skin Clinic'da onkodermatolog dog'larni dermatoskop bilan tekshiradi, kerak bo'lsa biopsiya oladi va mos davolash usulini tanlaydi.

- [Onkodermatolog Farg'onada](/uz/fargona/onko-dermatolog) va [Qo'qonda](/uz/qoqon/onko-dermatolog);
- [Dermatoskopiya Farg'onada](/uz/fargona/dermatoskopiya) va [Qo'qonda](/uz/qoqon/dermatoskopiya);
- [Xol va dog' tekshiruvi Farg'onada](/uz/fargona/xol-tekshiruvi) va [Qo'qonda](/uz/qoqon/xol-tekshiruvi);
- [Dermatoonkologiya](/uz/services/dermatoonkologiya), [DEKA CO₂ lazer](/uz/services/apparatnaya-kosmetologiya/deka-co2-laser), [Dermatopatologiya](/uz/services/dermatopatologiya).

Dag'al dog'ni e'tiborsiz qoldirmang: erta ko'rik ko'pincha oddiy va qisqa davolash bilan cheklanish imkonini beradi.`;
}

function ruBody(): string {
  return `Актинический кератоз — шершавые, шелушащиеся пятна на участках кожи, которые много видят солнце. Если провести по ним пальцем, они царапают, как наждачная бумага, и часто их легче нащупать, чем увидеть. Обычно актинический кератоз появляется после 40 лет у людей, которые годами работали на открытом воздухе: в поле, на стройке, на рынке, за рулём. Годы под летним солнцем Ферганской долины оставляют на коже именно такой след. Это не просто косметический дефект, а предраковое изменение, поэтому его нужно проверить и лечить.

## Что такое актинический кератоз?

Актинический (солнечный) кератоз — изменение клеток кожи, которые много лет повреждались ультрафиолетом. На поверхности кожи скапливается лишнее роговое вещество и образуется шершавая корочка. Пятна обычно небольшие — от нескольких миллиметров до 1–2 см, розовые, красноватые, телесного цвета или коричневые, часто их сразу несколько.

Почему это важно: небольшая часть очагов актинического кератоза со временем может перейти в **плоскоклеточный рак кожи**. Заранее сказать, какое именно пятно пойдёт по этому пути, нельзя, поэтому врач оценивает каждое.

## У кого и где появляется?

- **Те, кто годами работает на открытом воздухе** — фермеры, строители, водители, продавцы.
- **Люди со светлой, легко краснеющей кожей** и те, кто в молодости часто обгорал.
- **Люди старше 40 лет** — с возрастом риск растёт.
- **Люди со сниженным иммунитетом**, например после пересадки органов.

Самые частые места: лицо (лоб, нос, щёки), кожа головы у мужчин с залысинами, уши, тыльная сторона кистей, предплечья и нижняя губа. Форма на нижней губе называется **актинический хейлит**: губа становится сухой и шелушащейся, граница губы размывается, трещины долго не заживают.

## Признаки

- шершавое пятно, похожее на наждачную бумагу, — часто его сначала нащупывают;
- сухая корочка или чешуйки, которые после отпадания появляются снова;
- розовый, красноватый или коричневый цвет;
- иногда лёгкое жжение, зуд или чувствительность при касании одежды;
- пятно может на время исчезнуть и вернуться.

## Чем отличается от других пятен

- **Себорейный кератоз** — возвышается над кожей, будто «приклеен», часто коричневый или чёрный; это доброкачественное образование. Подробнее: [себорейный кератоз](/ru/articles/art-seboreyali-keratoz).
- **Возрастные пятна (лентиго)** — плоские, гладкие коричневые пятна без шершавости.
- **Обычная сухая кожа** — занимает большую площадь и смягчается от крема; актинический кератоз от крема не проходит.

Даже если на вид пятна похожи, точный диагноз ставит только врач. О разных пятнах на коже: [пятна на коже](/ru/conditions/teri-doglari).

## Когда идти к врачу быстрее

Эти признаки могут говорить о том, что пятно меняется глубже:

- пятно утолщается, превращается в узел или уплотняется;
- кровоточит или болит;
- быстро растёт;
- на его месте появляется незаживающая ранка или корочка, которая образуется снова и снова;
- трещина или ранка на губе не заживает несколько недель.

В таких случаях не откладывайте осмотр. О другой опухоли, которая часто встречается на коже, видевшей много солнца: [базалиома](/ru/articles/art-bazalioma-teri-raki).

## Чего не делать дома

- расчёсывать пятно, сдирать корочку, соскабливать ножом или бритвой;
- «прижигать» или «удалять» пятно в салоне без диагноза — природа пятна остаётся неизвестной, а ткань для исследования теряется;
- мазать уксус, лимон, чеснок и другие народные кислоты — они оставляют ожоги и рубцы;
- самостоятельно подбирать аптечные кремы.

## Диагностика в клинике

Врач осматривает пятна и проводит **дерматоскопию** — смотрит на структуру кожи через специальный увеличительный прибор. Это помогает отличить актинический кератоз от других образований. Если пятно толстое, кровоточит или вызывает сомнения, берут **биопсию** и отправляют ткань на гистологию. Подробнее: [биопсия кожи](/ru/articles/art-teri-biopsiyasi).

## Лечение

Метод врач выбирает по количеству, расположению и толщине очагов:

- **Криодеструкция** — замораживание жидким азотом; широко применяется при единичных пятнах.
- **CO₂-лазер** — точное выпаривание изменённого слоя; можно использовать и на лице, и на губе.
- **Удаление с гистологией** — при толстых или подозрительных очагах; ткань отправляют на исследование.
- **Местные средства, назначенные врачом** — когда очагов много и они занимают большую площадь, лечат весь участок.

После лечения несколько дней обычно сохраняются покраснение и корочки. Могут появиться новые очаги, поэтому приходите на контрольные осмотры в сроки, которые назначит врач.

## Профилактика

- **SPF каждый день** — на лицо, уши, кисти и кожу головы, в том числе зимой и в пасмурные дни. Об уходе зимой: [уход за кожей зимой](/ru/articles/art-qishda-teri-parvarishi).
- **Шляпа с широкими полями** — особенно для мужчин с редеющими волосами.
- **Бальзам для губ с защитным фактором.**
- **Избегайте солнца в полуденные часы**, при работе в поле носите закрытую одежду.
- **Раз в год осмотр кожи** — особенно если актинический кератоз уже был. Подробнее: [родинки и дерматоскопия](/ru/articles/art-xol-tekshiruvi-dermatoskopiya).

## Диагностика и лечение актинического кератоза в Фергане и Коканде

В Radeski Skin Clinic онкодерматолог осмотрит пятна дерматоскопом, при необходимости возьмёт биопсию и подберёт подходящий метод лечения.

- [Онкодерматолог в Фергане](/ru/fargona/onko-dermatolog) и [в Коканде](/ru/qoqon/onko-dermatolog);
- [Дерматоскопия в Фергане](/ru/fargona/dermatoskopiya) и [в Коканде](/ru/qoqon/dermatoskopiya);
- [Проверка родинок и пятен в Фергане](/ru/fargona/xol-tekshiruvi) и [в Коканде](/ru/qoqon/xol-tekshiruvi);
- [Дерматоонкология](/ru/services/dermatoonkologiya), [CO₂-лазер DEKA](/ru/services/apparatnaya-kosmetologiya/deka-co2-laser), [Дерматопатология](/ru/services/dermatopatologiya).

Не оставляйте шершавое пятно без внимания: при раннем осмотре часто удаётся обойтись простым и коротким лечением.`;
}

function enBody(): string {
  return `Actinic keratosis is a rough, scaly spot on skin that gets a lot of sun. Run a finger over it and it feels like sandpaper — it is often easier to feel than to see. It usually appears after 40 in people who spent years working outdoors: in the fields, on building sites, at the market, behind the wheel. Years under the summer sun of the Fergana valley leave exactly this kind of mark on the skin. It is not just a cosmetic issue: it is a precancerous change, so it should be checked and treated.

## What is actinic keratosis?

Actinic (solar) keratosis is a change in skin cells damaged by ultraviolet light over many years. Excess keratin builds up on the surface and forms a rough crust. The spots are usually small — from a few millimetres to 1–2 cm — and pink, reddish, skin-coloured or brown, often several at once.

Why it matters: a small share of actinic keratoses may turn into **squamous cell carcinoma of the skin** over time. Nobody can tell in advance which spot will take that path, so the doctor assesses each one.

## Who gets it and where?

- **People who have worked outdoors for years** — farmers, builders, drivers, market sellers.
- **People with fair skin that reddens easily**, and those who often got sunburnt when young.
- **People over 40** — the risk grows with age.
- **People with weakened immunity**, for example after an organ transplant.

The most common sites are the face (forehead, nose, cheeks), the scalp in balding men, the ears, the backs of the hands, the forearms and the lower lip. On the lower lip it is called **actinic cheilitis**: the lip becomes dry and scaly, its border blurs, and cracks are slow to heal.

## Signs

- a rough, sandpaper-like spot — often felt before it is seen;
- a dry crust or scale that comes back after it falls off;
- pink, reddish or brown colour;
- sometimes mild burning, itching or tenderness when clothing rubs it;
- a spot may fade for a while and then return.

## How it differs from other spots

- **Seborrheic keratosis** — raised and "stuck-on", often brown or black; it is benign. More: [seborrheic keratosis](/en/articles/art-seboreyali-keratoz).
- **Age spots (lentigines)** — flat, smooth brown spots with no roughness.
- **Ordinary dry skin** — covers a wide area and softens with moisturiser; actinic keratosis does not go away with cream.

Even when spots look alike, only a doctor can make the diagnosis. About different skin spots: [skin spots](/en/conditions/teri-doglari).

## When to see a doctor sooner

These signs may mean a spot is changing more deeply:

- it thickens, becomes a lump or hardens;
- it bleeds or hurts;
- it grows quickly;
- a sore that does not heal, or a crust that keeps re-forming, appears in its place;
- a crack or sore on the lip does not heal within a few weeks.

In these cases do not put off the visit. About another growth common on sun-damaged skin: [basal cell carcinoma](/en/articles/art-bazalioma-teri-raki).

## What not to do at home

- scratch the spot, pick off the crust, or scrape it with a knife or razor;
- have it "burned off" or "removed" at a salon without a diagnosis — the nature of the spot stays unknown and the tissue needed for testing is lost;
- apply vinegar, lemon, garlic or other folk acids — they cause burns and scars;
- choose pharmacy creams on your own.

## Diagnosis at the clinic

The doctor examines the spots and performs **dermatoscopy** — looking at the skin's structure through a special magnifying instrument. This helps tell actinic keratosis apart from other growths. If a spot is thick, bleeds or looks suspicious, a **biopsy** is taken and sent for histology. More: [skin biopsy](/en/articles/art-teri-biopsiyasi).

## Treatment

The doctor chooses the method based on the number, location and thickness of the spots:

- **Cryodestruction** — freezing the spot with liquid nitrogen; widely used for single spots.
- **CO₂ laser** — precise vaporisation of the changed layer; it can also be used on the face and lip.
- **Removal with histology** — for thick or suspicious spots; the tissue is sent for examination.
- **Topical treatments prescribed by the doctor** — when there are many spots over a wide area, the whole field is treated.

Redness and crusting for a few days after treatment are normal. New spots can appear, so come back for follow-up checks at the times your doctor sets.

## Prevention

- **SPF every day** — on the face, ears, hands and scalp, in winter and on cloudy days too. About winter care: [winter skin care](/en/articles/art-qishda-teri-parvarishi).
- **A wide-brimmed hat** — especially for men with thinning hair.
- **A lip balm with sun protection.**
- **Avoid the midday sun**, and wear covering clothes when working in the fields.
- **A skin check once a year** — especially if you have had actinic keratosis before. More: [moles and dermatoscopy](/en/articles/art-xol-tekshiruvi-dermatoskopiya).

## Actinic keratosis check and treatment in Fergana and Kokand

At Radeski Skin Clinic an oncodermatologist examines the spots with a dermatoscope, takes a biopsy if needed and chooses the right treatment.

- [Oncodermatologist in Fergana](/en/fargona/onko-dermatolog) and [in Kokand](/en/qoqon/onko-dermatolog);
- [Dermatoscopy in Fergana](/en/fargona/dermatoskopiya) and [in Kokand](/en/qoqon/dermatoskopiya);
- [Mole and spot check in Fergana](/en/fargona/xol-tekshiruvi) and [in Kokand](/en/qoqon/xol-tekshiruvi);
- [Dermato-oncology](/en/services/dermatoonkologiya), [DEKA CO₂ laser](/en/services/apparatnaya-kosmetologiya/deka-co2-laser), [Dermatopathology](/en/services/dermatopatologiya).

Do not ignore a rough spot: an early check often means a simple, short treatment is enough.`;
}

export const ACTINIC_KERATOSIS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Aktinik keratoz — quyosh ko'rgan terida dag'al, qipiqli dog'lar: nega saratonoldi, boshqa dog'lardan farqi, xavfli belgilar, tashxis va davolash. Farg'ona va Qo'qonda onkodermatolog.",
    body: uzBody(),
    keyTakeaways: [
      "Aktinik keratoz — yillar davomida quyosh shikastlagan terida paydo bo'ladigan dag'al, qum qog'ozga o'xshash dog'",
      "Bu saratonoldi o'zgarish: kichik bir qismi yassi hujayrali rakka aylanishi mumkin",
      "Yuz, bosh terisi, quloqlar, qo'llar va pastki labda ko'p uchraydi",
      "Tashxis dermatoskopiya bilan, kerak bo'lsa biopsiya bilan qo'yiladi",
      "Har kuni SPF, shlyapa va yiliga bir marta teri ko'rigi yangi dog'larni kamaytiradi",
    ],
    tags: ['Aktinik keratoz', 'Quyosh keratozi', "Dag'al dog'lar", 'Aktinik xeylit', 'Onkodermatolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Quyosh ko'rgan terida dag'al, qipiqli dog' paydo bo'lsa",
      "Dog' qalinlashsa, qattiqlashsa yoki tez kattalashsa",
      "Dog' qonasa yoki og'risa",
      "O'rnida bitmaydigan yara yoki qayta-qayta qobiq paydo bo'lsa",
      "Pastki labda quruqlik, qipiq yoki bitmaydigan yoriq bo'lsa",
    ],
    faq: [
      {
        question: 'Aktinik keratoz saratonmi?',
        answer:
          "Yo'q, bu saratonoldi o'zgarish. Ko'pchilik dog'lar rakka aylanmaydi, lekin kichik bir qismi vaqt o'tishi bilan yassi hujayrali rakka o'tishi mumkin. Shuning uchun dog'larni shifokorga ko'rsatish va davolash tavsiya etiladi.",
      },
      {
        question: "Aktinik keratoz o'z-o'zidan o'tib ketadimi?",
        answer:
          "Ba'zi dog'lar vaqtincha yo'qolishi mumkin, lekin ko'pincha qaytadi va yangilari chiqadi. Qaysi dog' xavfli ekanini faqat shifokor ko'rik va dermatoskopiya orqali baholaydi.",
      },
      {
        question: 'Davolash og\'riqlimi?',
        answer:
          "Kriodestruksiya va lazer odatda qisqa davom etadi va yengil achishish bilan o'tadi; kerak bo'lsa mahalliy og'riqsizlantirish qo'llanadi. Bir necha kun qizarish va qobiq bo'lishi odatiy.",
      },
      {
        question: 'Qishda ham quyoshdan himoya kerakmi?',
        answer:
          "Ha. Qishda ham ultrabinafsha nurlar teriga ta'sir qiladi. Yuz, quloq, qo'l va bosh terisiga har kuni SPF surtish yangi dog'lar paydo bo'lishini kamaytiradi.",
      },
      {
        question: "Farg'ona va Qo'qonda aktinik keratozni qayerda tekshirish mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida onkodermatolog dog'larni dermatoskop bilan tekshiradi va mos davolashni tanlaydi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Актинический кератоз — шершавые пятна на коже, видевшей много солнца: почему это предрак, отличия от других пятен, опасные признаки, диагностика и лечение. Онкодерматолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Актинический кератоз — шершавое, похожее на наждачку пятно на коже, которую годами повреждало солнце',
      'Это предраковое изменение: небольшая часть очагов может перейти в плоскоклеточный рак',
      'Чаще всего встречается на лице, коже головы, ушах, кистях и нижней губе',
      'Диагноз ставят по дерматоскопии, при необходимости — по биопсии',
      'Ежедневный SPF, шляпа и ежегодный осмотр кожи снижают появление новых очагов',
    ],
    tags: ['Актинический кератоз', 'Солнечный кератоз', 'Шершавые пятна', 'Актинический хейлит', 'Онкодерматолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'На коже, видевшей много солнца, появилось шершавое шелушащееся пятно',
      'Пятно утолщается, уплотняется или быстро растёт',
      'Пятно кровоточит или болит',
      'На его месте незаживающая ранка или корочка, которая образуется снова',
      'Сухость, шелушение или незаживающая трещина на нижней губе',
    ],
    faq: [
      {
        question: 'Актинический кератоз — это рак?',
        answer:
          'Нет, это предраковое изменение. Большинство очагов в рак не переходит, но небольшая часть со временем может перейти в плоскоклеточный рак. Поэтому пятна стоит показать врачу и лечить.',
      },
      {
        question: 'Может ли актинический кератоз пройти сам?',
        answer:
          'Отдельные пятна могут на время исчезнуть, но часто возвращаются, и появляются новые. Какое пятно опасно, оценивает только врач по осмотру и дерматоскопии.',
      },
      {
        question: 'Больно ли лечение?',
        answer:
          'Криодеструкция и лазер обычно занимают немного времени и сопровождаются лёгким жжением; при необходимости используют местную анестезию. Несколько дней покраснения и корочек — это нормально.',
      },
      {
        question: 'Нужна ли защита от солнца зимой?',
        answer:
          'Да. Ультрафиолет действует на кожу и зимой. Ежедневный SPF на лицо, уши, кисти и кожу головы снижает появление новых пятен.',
      },
      {
        question: 'Где проверить актинический кератоз в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде онкодерматолог осмотрит пятна дерматоскопом и подберёт лечение. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Actinic keratosis — rough, scaly spots on sun-damaged skin: why it is precancerous, how it differs from other spots, red flags, diagnosis and treatment. Oncodermatologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Actinic keratosis is a rough, sandpaper-like spot on skin damaged by years of sun',
      'It is a precancerous change: a small share may turn into squamous cell carcinoma',
      'It is most common on the face, scalp, ears, hands and lower lip',
      'Diagnosis is made by dermatoscopy and, if needed, a biopsy',
      'Daily SPF, a hat and a yearly skin check reduce new spots',
    ],
    tags: ['Actinic keratosis', 'Solar keratosis', 'Rough skin spots', 'Actinic cheilitis', 'Oncodermatologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A rough, scaly spot appears on sun-exposed skin',
      'A spot thickens, hardens or grows quickly',
      'A spot bleeds or hurts',
      'A sore that does not heal, or a crust that keeps re-forming',
      'Dryness, scaling or a crack that will not heal on the lower lip',
    ],
    faq: [
      {
        question: 'Is actinic keratosis cancer?',
        answer:
          'No, it is a precancerous change. Most spots never become cancer, but a small share may turn into squamous cell carcinoma over time. That is why the spots should be shown to a doctor and treated.',
      },
      {
        question: 'Can actinic keratosis go away on its own?',
        answer:
          'Some spots may fade for a while, but they often come back and new ones appear. Only a doctor can judge which spot is risky, by examination and dermatoscopy.',
      },
      {
        question: 'Does treatment hurt?',
        answer:
          'Cryodestruction and laser are usually quick and cause mild stinging; local anaesthetic is used if needed. A few days of redness and crusting are normal.',
      },
      {
        question: 'Do I need sun protection in winter?',
        answer:
          'Yes. Ultraviolet light reaches the skin in winter too. Daily SPF on the face, ears, hands and scalp reduces new spots.',
      },
      {
        question: 'Where can I have actinic keratosis checked in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand an oncodermatologist examines the spots with a dermatoscope and chooses the treatment. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const ACTINIC_KERATOSIS_ARTICLE: Article = {
  id: 'art-aktinik-keratoz',
  slug: 'aktinik-keratoz',
  title: {
    uz: "Aktinik keratoz: quyoshdan keyingi dag'al dog'lar — nega xavfli va qanday davolanadi",
    ru: 'Актинический кератоз: шершавые пятна от солнца — чем опасны и как их лечат',
    en: 'Actinic Keratosis: Rough Sun Spots — Why They Matter and How They Are Treated',
  },
  summary: {
    uz: ACTINIC_KERATOSIS_ARTICLE_CATALOG.uz.summary,
    ru: ACTINIC_KERATOSIS_ARTICLE_CATALOG.ru.summary,
    en: ACTINIC_KERATOSIS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: ACTINIC_KERATOSIS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: ACTINIC_KERATOSIS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: ACTINIC_KERATOSIS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: "Yo'qubov Farrux Farhodjonovich",
    ru: 'Якубов Фаррух Фарходжонович',
    en: 'Dr. Farrukh Farhodjonovich Yoqubov',
  },
  date: '2026-12-08',
  image: '/articles/aktinik-keratoz-cover.jpg',
  images: {
    uz: '/articles/aktinik-keratoz-cover.jpg',
    ru: '/articles/aktinik-keratoz-cover.jpg',
    en: '/articles/aktinik-keratoz-cover.jpg',
  },
  views: 0,
};
