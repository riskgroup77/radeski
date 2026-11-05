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
 * Scalp psoriasis — the most common site of psoriasis, often mistaken for dandruff for years.
 * Points: signs (thick silvery scale, sharp-edged plaques past the hairline), how it differs from
 * dandruff, seborrheic dermatitis and scalp fungus, temporary hair shedding, winter and stress,
 * not contagious, what not to do at home, diagnosis and doctor-chosen treatment. General
 * psoriasis is covered by art-psoriaz-tashxis-davolash-radeski — linked, not repeated.
 */

function uzBody(): string {
  return `Bosh terisi psoriazi — psoriazning eng ko'p uchraydigan joyi: ko'p bemorlarda kasallik aynan bosh terisida boshlanadi yoki u yerda ham namoyon bo'ladi. Uni ko'pincha oddiy kepak deb o'ylab, yillab shampun almashtirib yurishadi. Aslida bu surunkali yallig'lanish kasalligi bo'lib, to'g'ri tashxis va shifokor tanlagan davolashni talab qiladi. Psoriaz haqida umumiy ma'lumot: [psoriaz: belgilari, tashxisi va davolash](/uz/articles/art-psoriaz-tashxis-davolash-radeski).

## Bosh terisi psoriazi nima?

Psoriaz — immun tizimi ishtirokidagi surunkali kasallik: teri hujayralari odatdagidan ancha tez yangilanadi va yuzada qalin qatlam hosil qiladi. Bosh terisida soch, yog' bezlari va doimiy ishqalanish (taroq, bosh kiyim) tufayli u boshqa joylarga qaraganda qiyinroq kechishi mumkin. Irsiy moyillik muhim rol o'ynaydi. Kasallik haqida qisqacha: [psoriaz](/uz/conditions/psoriaz).

## Belgilari

- **qalin kumushrang-oq po'st** — qatlam-qatlam, sochga yopishib turadi;
- **chegarasi aniq qizil blyashkalar** — sog' teridan yaqqol ajralib turadi;
- **soch chegarasidan chiqish** — peshona, chakka, quloq orqasi va ensada ko'rinadi;
- **qichishish**, ba'zan achishish va taranglik hissi;
- po'st olinganda mayda qon nuqtalari chiqishi.

Bir vaqtda tirsak, tizza yoki tirnoqlarda ham o'zgarishlar bo'lishi mumkin — bu tashxisga yordam beradi.

## Kepak, seboreyali dermatit va zamburug'dan farqi

- **Oddiy kepak** — mayda, yengil oq po'st, qizarish deyarli yo'q, soch chegarasidan chiqmaydi.
- **Seboreyali dermatit** — po'st yog'li, sarg'ish, chegaralari xira; ko'pincha qosh, burun qanotlari va quloq atrofida ham bo'ladi. Batafsil: [seboreyali dermatit](/uz/articles/art-seboreyali-dermatit).
- **Bosh terisi zamburug'i** — ko'proq bolalarda; dumaloq o'choqlarda sochlar sinib qoladi va u yuqumli. Zamburug' infeksiyalari haqida: [teri zamburug'i](/uz/articles/art-teri-zamburugi).
- **Psoriaz** — qalin, quruq kumushrang po'st va aniq chegarali qizil blyashka.

Ba'zan psoriaz va seboreyali dermatit belgilari aralash keladi, shuning uchun farqni shifokor aniqlaydi.

## Sochlar to'kiladimi?

Kuchli yallig'lanish davrida sochning vaqtincha to'kilishi bo'lishi mumkin. Uni qashish, po'stlarni kuch bilan yulib olish va qattiq taroqlash kuchaytiradi — soch po'st bilan birga sug'urilib chiqadi. Odatda yallig'lanish bosilgach sochlar qayta o'sadi, lekin tiklanish tezligi har kimda har xil va yallig'lanish darajasi hamda davolashga bog'liq — buni shifokor kuzatib boradi.

## Nega qishda va stressda kuchayadi?

- qishda havo quruq, quyosh nuri kam — teri quriydi;
- issiq bosh kiyim, issiq fen va isitiladigan xonalar terini qo'shimcha quritadi;
- shamollash va boshqa infeksiyalar kuchayishni qo'zg'atishi mumkin;
- stress, uyqusizlik, chekish va spirtli ichimliklar — psoriazning taniqli qo'zg'atuvchilari.

## Yuqumlimi?

Yo'q. Psoriaz taroq, sochiq, bosh kiyim yoki yaqin muloqot orqali boshqalarga o'tmaydi. Buni yaqinlaringizga va sartaroshga ham tushuntirish foydali.

## Qachon shifokorga borish kerak

- po'st va qizarish kengayib, soch chegarasidan chiqsa;
- qichishish uyquga xalaqit bersa yoki sochlar sezilarli to'kilsa;
- blyashkalar yorilsa, ho'llansa, yiringlasa yoki og'risa — bu infeksiya belgisi bo'lishi mumkin.

**Kechiktirmasdan murojaat qiling**, agar toshma tez butun tanaga tarqalsa, teri butunlay qizarib, isitma va titroq bo'lsa yoki bo'g'imlar shishib og'risa.

## Uyda nima qilmaslik kerak

- po'stlarni tirnoq yoki taroq bilan kuch bilan yulib olish;
- sochni juda issiq fen bilan quritish;
- kerosin, mashina moyi va turli "xalq" aralashmalarini surtish — kuyish va infeksiya xavfi;
- shifokor tayinlamagan gormonli losyon va kremlar — vaqtincha yengillikdan keyin kuchli qaytalanish va teri yupqalashishi mumkin;
- kuchayish davrida sochni tez-tez qattiq kimyoviy bo'yoqlar bilan bo'yash.

## Klinikada tashxis

Dermatolog bosh terisini, butun terini va tirnoqlarni ko'radi, bo'g'imlar haqida so'raydi. Bosh terisi dermatoskop yoki trixoskop bilan kattalashtirib tekshiriladi: psoriazga xos tomir naqshi uni seboreyali dermatit va zamburug'dan farqlashga yordam beradi. Bu usul haqida: [trixolog va trixoskopiya](/uz/articles/art-trixolog-trixoskopiya). Kerak bo'lsa zamburug'ga tahlil, qon tahlillari, kamdan-kam hollarda biopsiya o'tkaziladi.

## Davolash

Davolashni shifokor kasallik darajasi, joylashuvi va umumiy sog'liqqa qarab tanlaydi:

- **maxsus tibbiy shampunlar va bosh terisi uchun vositalar** — po'stni yumshatadi va yallig'lanishni kamaytiradi; qaysi biri va qancha muddat — shifokor tayinlaydi;
- **fototerapiya** — soch nurni to'sgani uchun bosh terisida cheklangan, lekin buning uchun maxsus maqsadli apparatlar mavjud; ko'rsatmani shifokor belgilaydi;
- **o'rta va og'ir psoriazda** — tizimli yoki biologik terapiya; qaror tekshiruvdan keyin shifokor tomonidan qabul qilinadi. Batafsil: [immunobiologik terapiya](/uz/articles/art-immunobiologiya-terapiya-radeski).

Psoriaz surunkali kasallik, lekin to'g'ri davolash bilan uzoq tinch davrga erishish ko'pincha mumkin.

## Har kungi parvarish

- sochni iliq (issiq emas) suvda, yumshoq harakat bilan yuving;
- po'stlarni shifokor tavsiya qilgan usulda yumshating va o'zi ko'chishini kuting;
- qashimang, tirnoqlarni kalta tuting;
- yumshoq taroq ishlating, sochni qattiq tortib bog'lamang;
- stressni boshqaring, yetarli uxlang, chekish va spirtdan voz keching;
- qishda xona havosini namlang.

## Farg'ona va Qo'qonda bosh terisi psoriazini davolash

Radeski Skin Clinic'da dermatolog va trixolog bosh terisini tekshiradi, psoriazni kepak, seboreyali dermatit va zamburug'dan ajratadi va davolash rejasini tuzadi.

- [Psoriaz davolash Farg'onada](/uz/fargona/psoriaz-davolash) va [Qo'qonda](/uz/qoqon/psoriaz-davolash);
- [Trixolog Farg'onada](/uz/fargona/trixolog) va [Qo'qonda](/uz/qoqon/trixolog);
- [Dermatolog Farg'onada](/uz/fargona/dermatolog) va [Qo'qonda](/uz/qoqon/dermatolog);
- [Immunobiologik terapiya](/uz/services/dermatologiya/immunobiologik-terapiya) va [trixoskopiya](/uz/services/trixoskopiya).

Kepak ketmasa va bosh terisi qizarib qichisa — shampunni almashtirishdan oldin dermatologga ko'rining.`;
}

function ruBody(): string {
  return `Псориаз волосистой части головы — самая частая локализация псориаза: у многих пациентов болезнь начинается именно с кожи головы или проявляется там вместе с другими участками. Его часто годами принимают за обычную перхоть и меняют шампуни. На самом деле это хроническое воспалительное заболевание, которому нужны точный диагноз и лечение, подобранное врачом. Общие сведения о болезни: [псориаз: признаки, диагностика и лечение](/ru/articles/art-psoriaz-tashxis-davolash-radeski).

## Что такое псориаз кожи головы?

Псориаз — хроническое заболевание с участием иммунной системы: клетки кожи обновляются намного быстрее обычного и образуют на поверхности толстый слой. На голове из-за волос, сальных желёз и постоянного трения (расчёска, головной убор) он может протекать тяжелее, чем на других участках. Важную роль играет наследственная предрасположенность. Коротко о заболевании: [псориаз](/ru/conditions/psoriaz).

## Признаки

- **толстые серебристо-белые чешуйки** — слоистые, плотно сидят у корней волос;
- **красные бляшки с чёткой границей** — резко отделены от здоровой кожи;
- **выход за линию роста волос** — на лбу, висках, за ушами и на затылке;
- **зуд**, иногда жжение и чувство стянутости;
- мелкие точечные кровотечения при снятии чешуек.

Одновременно могут быть изменения на локтях, коленях или ногтях — это помогает в диагностике.

## Чем отличается от перхоти, себорейного дерматита и грибка

- **Обычная перхоть** — мелкие лёгкие белые чешуйки, покраснения почти нет, за линию волос не выходит.
- **Себорейный дерматит** — чешуйки жирные, желтоватые, границы размытые; часто поражаются брови, крылья носа и кожа вокруг ушей. Подробнее: [себорейный дерматит](/ru/articles/art-seboreyali-dermatit).
- **Грибок кожи головы** — чаще у детей; в округлых очагах волосы обламываются, и он заразен. О грибковых инфекциях: [грибок кожи](/ru/articles/art-teri-zamburugi).
- **Псориаз** — толстые сухие серебристые чешуйки и красная бляшка с чёткой границей.

Иногда признаки псориаза и себорейного дерматита сочетаются, поэтому разницу определяет врач.

## Выпадают ли волосы?

В период сильного воспаления возможно временное выпадение волос. Его усиливают расчёсывание, насильственное сдирание чешуек и грубое вычёсывание — волос выдёргивается вместе с чешуйкой. Обычно, когда воспаление стихает, волосы отрастают, но скорость восстановления у всех разная и зависит от выраженности воспаления и лечения — это врач наблюдает в динамике.

## Почему обостряется зимой и при стрессе?

- зимой воздух сухой, солнца мало — кожа пересыхает;
- тёплые шапки, горячий фен и отапливаемые помещения дополнительно сушат кожу;
- простуды и другие инфекции могут спровоцировать обострение;
- стресс, недосып, курение и алкоголь — известные провокаторы псориаза.

## Заразен ли?

Нет. Псориаз не передаётся через расчёску, полотенце, головной убор или близкое общение. Это полезно объяснить близким и парикмахеру.

## Когда идти к врачу

- шелушение и покраснение расширяются и выходят за линию волос;
- зуд мешает спать или волосы заметно выпадают;
- бляшки трескаются, мокнут, гноятся или болят — это может быть признаком инфекции.

**Обратитесь без промедления**, если сыпь быстро распространяется по всему телу, кожа сплошь краснеет, появляются температура и озноб или суставы опухают и болят.

## Чего не делать дома

- насильно сдирать чешуйки ногтями или расчёской;
- сушить волосы очень горячим феном;
- мазать керосином, машинным маслом и народными смесями — риск ожога и инфекции;
- использовать гормональные лосьоны и кремы без назначения врача — после временного облегчения возможны сильное обострение и истончение кожи;
- часто окрашивать волосы агрессивными красками во время обострения.

## Диагностика в клинике

Дерматолог осматривает кожу головы, всю кожу и ногти, расспрашивает о суставах. Кожу головы изучают под увеличением дерматоскопом или трихоскопом: характерный сосудистый рисунок помогает отличить псориаз от себорейного дерматита и грибка. Об этом методе: [трихолог и трихоскопия](/ru/articles/art-trixolog-trixoskopiya). При необходимости берут анализ на грибок, анализы крови, в редких случаях — биопсию.

## Лечение

Лечение врач подбирает с учётом тяжести, локализации и общего здоровья:

- **специальные лечебные шампуни и средства для кожи головы** — размягчают чешуйки и уменьшают воспаление; какие и как долго — назначает врач;
- **фототерапия** — на голове ограничена, потому что волосы задерживают свет, но для этого есть специальные направленные аппараты; показания определяет врач;
- **при среднетяжёлом и тяжёлом псориазе** — системная или биологическая терапия; решение принимает врач после обследования. Подробнее: [иммунобиологическая терапия](/ru/articles/art-immunobiologiya-terapiya-radeski).

Псориаз — хроническое заболевание, но при правильном лечении часто удаётся добиться длительной ремиссии.

## Ежедневный уход

- мойте голову тёплой (не горячей) водой мягкими движениями;
- размягчайте чешуйки так, как посоветовал врач, и дайте им отойти самостоятельно;
- не расчёсывайте кожу, коротко стригите ногти;
- пользуйтесь мягкой расчёской, не стягивайте волосы туго;
- справляйтесь со стрессом, высыпайтесь, откажитесь от курения и алкоголя;
- зимой увлажняйте воздух в помещении.

## Лечение псориаза кожи головы в Фергане и Коканде

В Radeski Skin Clinic дерматолог и трихолог осмотрят кожу головы, отличат псориаз от перхоти, себорейного дерматита и грибка и составят план лечения.

- [Лечение псориаза в Фергане](/ru/fargona/psoriaz-davolash) и [в Коканде](/ru/qoqon/psoriaz-davolash);
- [Трихолог в Фергане](/ru/fargona/trixolog) и [в Коканде](/ru/qoqon/trixolog);
- [Дерматолог в Фергане](/ru/fargona/dermatolog) и [в Коканде](/ru/qoqon/dermatolog);
- [Иммунобиологическая терапия](/ru/services/dermatologiya/immunobiologik-terapiya) и [трихоскопия](/ru/services/trixoskopiya).

Если перхоть не проходит, а кожа головы краснеет и зудит, — прежде чем менять шампунь, покажитесь дерматологу.`;
}

function enBody(): string {
  return `Scalp psoriasis is the most common place for psoriasis to appear: in many patients the disease starts on the scalp or shows up there alongside other areas. It is often mistaken for ordinary dandruff, and people switch shampoos for years. In fact it is a chronic inflammatory condition that needs an accurate diagnosis and treatment chosen by a doctor. For psoriasis in general: [psoriasis: signs, diagnosis and treatment](/en/articles/art-psoriaz-tashxis-davolash-radeski).

## What is scalp psoriasis?

Psoriasis is a chronic condition driven by the immune system: skin cells renew much faster than normal and build up into a thick layer on the surface. On the scalp, hair, oil glands and constant friction (combs, hats) can make it more stubborn than elsewhere. Inherited tendency plays an important role. In brief: [psoriasis](/en/conditions/psoriaz).

## Signs

- **thick silvery-white scales** — layered, stuck firmly to the hair roots;
- **red plaques with sharp edges** — clearly separated from healthy skin;
- **spreading past the hairline** — onto the forehead, temples, behind the ears and the nape;
- **itching**, sometimes burning and a feeling of tightness;
- tiny pinpoint bleeding when scales are removed.

There may be changes on the elbows, knees or nails at the same time — this helps with the diagnosis.

## How it differs from dandruff, seborrheic dermatitis and fungus

- **Ordinary dandruff** — small, light white flakes, almost no redness, does not go past the hairline.
- **Seborrheic dermatitis** — greasy, yellowish scale with blurred edges; often also on the eyebrows, sides of the nose and around the ears. More: [seborrheic dermatitis](/en/articles/art-seboreyali-dermatit).
- **Scalp fungus** — more common in children; hairs break off in round patches, and it is contagious. On fungal infections: [skin fungus](/en/articles/art-teri-zamburugi).
- **Psoriasis** — thick, dry silvery scale on a sharply outlined red plaque.

Sometimes signs of psoriasis and seborrheic dermatitis overlap, so the doctor makes the distinction.

## Does hair fall out?

Temporary hair shedding is possible during strong inflammation. Scratching, forcibly picking off scales and harsh combing make it worse — the hair is pulled out together with the scale. Usually hair grows back once the inflammation settles, but how fast it recovers differs from person to person and depends on how severe the inflammation is and on treatment — the doctor follows this over time.

## Why does it get worse in winter and with stress?

- winter air is dry and there is little sunlight — the skin dries out;
- warm hats, a hot hair-dryer and heated rooms dry the skin further;
- colds and other infections can trigger a flare;
- stress, poor sleep, smoking and alcohol are well-known psoriasis triggers.

## Is it contagious?

No. Psoriasis does not spread through combs, towels, hats or close contact. It helps to explain this to family and to your hairdresser.

## When to see a doctor

- scaling and redness spread and go past the hairline;
- itching disturbs sleep or hair is noticeably shedding;
- plaques crack, weep, ooze pus or hurt — this may be a sign of infection.

**Seek help without delay** if the rash spreads quickly over the whole body, the skin turns red all over with fever and chills, or joints become swollen and painful.

## What not to do at home

- forcibly pick or comb off scales with nails or a comb;
- dry your hair with a very hot hair-dryer;
- apply kerosene, motor oil or folk mixtures — risk of burns and infection;
- use steroid lotions or creams without a prescription — brief relief may be followed by a strong flare and skin thinning;
- dye your hair often with harsh chemical dyes during a flare.

## Diagnosis at the clinic

The dermatologist examines the scalp, the rest of the skin and the nails, and asks about the joints. The scalp is looked at under magnification with a dermatoscope or trichoscope: the typical blood-vessel pattern of psoriasis helps tell it apart from seborrheic dermatitis and fungus. About this method: [trichologist and trichoscopy](/en/articles/art-trixolog-trixoskopiya). If needed, a fungal test, blood tests and, rarely, a biopsy are done.

## Treatment

The doctor chooses treatment based on severity, location and general health:

- **special medicated shampoos and scalp products** — soften scale and reduce inflammation; which ones and for how long is decided by the doctor;
- **phototherapy** — limited on the scalp because hair blocks the light, but targeted devices exist for this; the doctor decides whether it is indicated;
- **for moderate to severe psoriasis** — systemic or biological therapy; the decision is made by the doctor after an assessment. More: [immunobiological therapy](/en/articles/art-immunobiologiya-terapiya-radeski).

Psoriasis is a chronic condition, but with the right treatment a long calm period is often achievable.

## Daily care

- wash your hair in warm (not hot) water with gentle movements;
- soften scales the way your doctor advised and let them come off on their own;
- do not scratch, and keep your nails short;
- use a soft brush and do not tie your hair back tightly;
- manage stress, get enough sleep, avoid smoking and alcohol;
- humidify the air indoors in winter.

## Scalp psoriasis treatment in Fergana and Kokand

At Radeski Skin Clinic a dermatologist and trichologist examine the scalp, tell psoriasis apart from dandruff, seborrheic dermatitis and fungus, and build a treatment plan.

- [Psoriasis treatment in Fergana](/en/fargona/psoriaz-davolash) and [in Kokand](/en/qoqon/psoriaz-davolash);
- [Trichologist in Fergana](/en/fargona/trixolog) and [in Kokand](/en/qoqon/trixolog);
- [Dermatologist in Fergana](/en/fargona/dermatolog) and [in Kokand](/en/qoqon/dermatolog);
- [Immunobiological therapy](/en/services/dermatologiya/immunobiologik-terapiya) and [trichoscopy](/en/services/trixoskopiya).

If "dandruff" will not go away and your scalp is red and itchy, see a dermatologist before trying yet another shampoo.`;
}

export const SCALP_PSORIASIS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Bosh terisi psoriazi: belgilari, kepak va seboreyali dermatitdan farqi, soch to'kiladimi, nega qishda kuchayadi, uyda nima qilmaslik va davolash. Farg'ona va Qo'qonda dermatolog va trixolog.",
    body: uzBody(),
    keyTakeaways: [
      "Bosh terisi — psoriazning eng ko'p uchraydigan joyi, uni ko'pincha kepak deb o'ylashadi",
      "Qalin kumushrang po'st va soch chegarasidan chiqqan aniq chegarali blyashkalar — asosiy belgilar",
      "Psoriaz yuqumli emas; soch vaqtincha to'kilishi mumkin, odatda yallig'lanish bosilgach qayta o'sadi",
      "Po'stni kuch bilan yulish, kerosin va xalq vositalari, retseptsiz gormonli losyonlar zarar qiladi",
      "Davolashni dermatolog tanlaydi: tibbiy shampunlar, fototerapiya yoki og'ir holatda tizimli terapiya",
    ],
    tags: ['Bosh terisi psoriazi', 'Psoriaz', 'Kepak', "Soch to'kilishi", 'Trixolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Po'st va qizarish soch chegarasidan chiqib, kengayib borsa",
      "Qichishish uyquga xalaqit bersa",
      "Sochlar sezilarli to'kila boshlasa",
      "Blyashkalar yorilsa, ho'llansa, yiringlasa yoki og'risa",
      "Toshma butun tanaga tarqalsa, isitma bo'lsa yoki bo'g'imlar shishib og'risa — kechiktirmasdan",
    ],
    faq: [
      {
        question: 'Bosh terisi psoriazi yuqadimi?',
        answer:
          "Yo'q. Psoriaz yuqumli kasallik emas: taroq, sochiq, bosh kiyim yoki yaqin muloqot orqali boshqalarga o'tmaydi.",
      },
      {
        question: "Psoriazdan sochlar to'kilib ketadimi?",
        answer:
          "Kuchli yallig'lanishda vaqtincha to'kilish bo'lishi mumkin, qashish va po'stni yulish uni kuchaytiradi. Odatda yallig'lanish bosilgach sochlar qayta o'sadi, lekin tiklanishni shifokor kuzatib boradi.",
      },
      {
        question: 'Psoriazni kepakdan qanday farqlash mumkin?',
        answer:
          "Kepak — mayda yengil po'st, qizarishsiz. Psoriazda po'st qalin, kumushrang, ostida chegarasi aniq qizil blyashka bo'ladi va u ko'pincha soch chegarasidan chiqadi. Aniq farqni dermatolog trixoskopiya bilan aniqlaydi.",
      },
      {
        question: "Oddiy shampun bilan davolasa bo'ladimi?",
        answer:
          "Oddiy kepakka qarshi shampunlar psoriazda odatda yetarli emas. Shifokor maxsus tibbiy shampun va bosh terisi uchun vositalarni tayinlaydi, kerak bo'lsa boshqa davolash usullarini qo'shadi.",
      },
      {
        question: "Farg'ona va Qo'qonda bosh terisi psoriazini qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog va trixolog bosh terisini tekshiradi va davolash rejasini tuzadi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Псориаз кожи головы: признаки, отличие от перхоти и себорейного дерматита, выпадают ли волосы, почему обостряется зимой, чего не делать дома и лечение. Дерматолог и трихолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Кожа головы — самое частое место псориаза, его часто принимают за перхоть',
      'Толстые серебристые чешуйки и бляшки с чёткой границей, выходящие за линию волос, — главные признаки',
      'Псориаз не заразен; волосы могут временно выпадать и обычно отрастают, когда воспаление стихает',
      'Сдирание чешуек, керосин и народные средства, гормональные лосьоны без назначения вредят',
      'Лечение подбирает дерматолог: лечебные шампуни, фототерапия или при тяжёлом течении системная терапия',
    ],
    tags: ['Псориаз кожи головы', 'Псориаз', 'Перхоть', 'Выпадение волос', 'Трихолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Шелушение и покраснение расширяются и выходят за линию волос',
      'Зуд мешает спать',
      'Волосы начали заметно выпадать',
      'Бляшки трескаются, мокнут, гноятся или болят',
      'Сыпь распространилась по всему телу, есть температура или суставы опухли и болят — без промедления',
    ],
    faq: [
      {
        question: 'Заразен ли псориаз кожи головы?',
        answer:
          'Нет. Псориаз не инфекционное заболевание: он не передаётся через расчёску, полотенце, головной убор или близкое общение.',
      },
      {
        question: 'Выпадают ли волосы при псориазе?',
        answer:
          'При сильном воспалении возможно временное выпадение, его усиливают расчёсывание и сдирание чешуек. Обычно, когда воспаление стихает, волосы отрастают, но восстановление наблюдает врач.',
      },
      {
        question: 'Как отличить псориаз от перхоти?',
        answer:
          'Перхоть — мелкие лёгкие чешуйки без покраснения. При псориазе чешуйки толстые, серебристые, под ними красная бляшка с чёткой границей, часто выходящая за линию волос. Точно различить поможет трихоскопия у дерматолога.',
      },
      {
        question: 'Можно ли лечиться обычным шампунем?',
        answer:
          'Обычных шампуней от перхоти при псориазе, как правило, недостаточно. Врач назначит специальный лечебный шампунь и средства для кожи головы, а при необходимости добавит другие методы лечения.',
      },
      {
        question: 'Где лечить псориаз кожи головы в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог и трихолог осмотрят кожу головы и составят план лечения. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Scalp psoriasis: signs, how it differs from dandruff and seborrheic dermatitis, hair shedding, why winter makes it worse, what not to do at home and treatment. Dermatologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'The scalp is the most common site of psoriasis, and it is often mistaken for dandruff',
      'Thick silvery scale and sharp-edged plaques spreading past the hairline are the key signs',
      'Psoriasis is not contagious; hair may shed temporarily and usually regrows once inflammation settles',
      'Picking off scales, kerosene and folk remedies, and steroid lotions without a prescription do harm',
      'A dermatologist chooses treatment: medicated shampoos, phototherapy or, if severe, systemic therapy',
    ],
    tags: ['Scalp psoriasis', 'Psoriasis', 'Dandruff', 'Hair loss', 'Trichologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Scaling and redness spread past the hairline',
      'Itching disturbs your sleep',
      'Hair starts shedding noticeably',
      'Plaques crack, weep, ooze pus or hurt',
      'The rash spreads over the whole body, with fever or swollen painful joints — without delay',
    ],
    faq: [
      {
        question: 'Is scalp psoriasis contagious?',
        answer:
          'No. Psoriasis is not an infection: it does not spread through combs, towels, hats or close contact.',
      },
      {
        question: 'Does psoriasis make hair fall out?',
        answer:
          'Temporary shedding is possible with strong inflammation, and scratching or picking scales makes it worse. Hair usually regrows once inflammation settles, but the doctor follows the recovery.',
      },
      {
        question: 'How can I tell psoriasis from dandruff?',
        answer:
          'Dandruff is small, light flakes without redness. In psoriasis the scale is thick and silvery over a sharply outlined red plaque that often goes past the hairline. A dermatologist can tell them apart with trichoscopy.',
      },
      {
        question: 'Can I treat it with an ordinary shampoo?',
        answer:
          'Ordinary anti-dandruff shampoos are usually not enough for psoriasis. The doctor prescribes a special medicated shampoo and scalp products and adds other treatments if needed.',
      },
      {
        question: 'Where can I treat scalp psoriasis in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist and trichologist examine the scalp and build a treatment plan. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const SCALP_PSORIASIS_ARTICLE: Article = {
  id: 'art-bosh-terisi-psoriazi',
  slug: 'bosh-terisi-psoriazi',
  title: {
    uz: "Bosh terisi psoriazi: belgilari, kepakdan farqi va davolash — sochlar to'kiladimi?",
    ru: 'Псориаз кожи головы: признаки, отличие от перхоти и лечение — выпадают ли волосы?',
    en: 'Scalp Psoriasis: Signs, How It Differs from Dandruff and Treatment — Does Hair Fall Out?',
  },
  summary: {
    uz: SCALP_PSORIASIS_ARTICLE_CATALOG.uz.summary,
    ru: SCALP_PSORIASIS_ARTICLE_CATALOG.ru.summary,
    en: SCALP_PSORIASIS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: SCALP_PSORIASIS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: SCALP_PSORIASIS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: SCALP_PSORIASIS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Baxriddinov Zuxriddin Muxiddinovich',
    ru: 'Бахриддинов Зухриддин Мухиддинович',
    en: 'Dr. Zuxriddin Muxiddinovich Baxriddinov',
  },
  date: '2026-12-04',
  image: '/articles/bosh-terisi-psoriazi-cover.jpg',
  images: {
    uz: '/articles/bosh-terisi-psoriazi-cover.jpg',
    ru: '/articles/bosh-terisi-psoriazi-cover.jpg',
    en: '/articles/bosh-terisi-psoriazi-cover.jpg',
  },
  views: 0,
};
