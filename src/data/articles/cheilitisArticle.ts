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
 * Chapped lips and cheilitis in winter — a seasonal article. Points: why lips crack (cold, wind,
 * dry heated rooms, little water, licking), the types in plain words (simple chapping, angular
 * cheilitis, allergic contact cheilitis, actinic cheilitis as a precancer), how it differs from
 * herpes and perioral dermatitis, everyday care, what not to do and the red flags. No drug names.
 */

function uzBody(): string {
  return `Qishda ko'pchilik lablarining quruqlashishi, po'st tashlashi va yorilishidan shikoyat qiladi. Ko'p hollarda bu oddiy quruqlik bo'lib, to'g'ri parvarish bilan bir-ikki haftada o'tadi. Lekin lab terisining yallig'lanishi — xeylit — har doim ham faqat sovuqdan emas: ba'zan og'iz burchagidagi infeksiya, kosmetikaga allergiya yoki yillar davomida quyosh ta'sirida paydo bo'lgan o'zgarish sabab bo'ladi. Shuning uchun uzoq bitmaydigan yoriqqa e'tibor berish kerak.

## Xeylit nima?

Xeylit — lablar terisi va qizil hoshiyasining yallig'lanishi. Lab terisi juda yupqa, unda yog' bezlari deyarli yo'q, shuning uchun u namlikni tez yo'qotadi va tashqi ta'sirga sezgir. Odatdagi belgilar:

- quruqlik, tortilish va po'st tashlash;
- gapirganda yoki kulganda og'riydigan yoriqlar;
- qizarish, achishish, ba'zan shish;
- og'iz burchaklarida qobiqli yoriqlar.

## Nega lablar qishda yoriladi?

- **Sovuq va shamol** — lab terisidagi namlikni tez olib ketadi.
- **Isitilgan xonadagi quruq havo** — pech, konditsioner va isitgichlar havoni quritadi.
- **Kam suv ichish** — qishda chanqoq kam seziladi, organizm esa suvga muhtoj.
- **Lablarni yalash odati** — eng ko'p uchraydigan xato. So'lak bir zumga namlaydi, lekin tez bug'lanib, labni yana ham quritadi, so'lakdagi fermentlar esa yupqa terini qitiqlaydi. Natijada "yalash — quruqlik — yana yalash" doirasi hosil bo'ladi.
- **Og'iz orqali nafas olish** — tumov yoki burun bitganda.

Qishda butun teri parvarishi haqida batafsil: [qishda teri parvarishi](/uz/articles/art-qishda-teri-parvarishi).

## Xeylitning asosiy turlari

- **Oddiy quruq, yorilgan lablar** — eng keng tarqalgan tur; sovuq, shamol va yalashdan. To'g'ri parvarishda tez o'tadi.
- **Og'iz burchagidagi yoriqlar (angulyar xeylit)** — burchaklarda qizarish, yoriq va qobiq. Ko'pincha u yerda so'lak to'planib, achitqi zamburug'lari yoki bakteriyalar ko'payadi. Tish protezi to'g'ri kelmasa, tishlar yo'qolgan bo'lsa yoki og'iz burchaklari chuqur bo'lsa, xavf oshadi. Ba'zan sabab — temir yoki B guruhi vitaminlari tanqisligi; buni tahlillar ko'rsatadi, qaysi tekshiruv kerakligini esa shifokor hal qiladi.
- **Allergik kontakt xeylit** — lab bo'yog'i, tish pastasi yoki lab balzami tarkibidagi moddalarga reaksiya. Odatda yangi vosita ishlatila boshlangandan keyin paydo bo'ladi: qichishish, achishish, shish va po'st. Allergik teri yallig'lanishi haqida: [ekzema](/uz/articles/art-ekzema).
- **Aktinik xeylit** — yillar davomida quyosh nuri ta'sirida, asosan pastki labda rivojlanadi. Ko'proq ochiq havoda ishlaydiganlarda va chekuvchilarda uchraydi. Labning qizil hoshiyasi chegarasi xiralashadi, dag'al, qobiqli va bitmaydigan dog' paydo bo'ladi. Bu holat saratonoldi hisoblanadi — uni albatta dermatolog ko'rishi kerak.

## Gerpes va perioral dermatitdan farqi

- **Gerpes (lab uchug'i)** — avval achishish yoki sanchish, keyin bir joyda to'p-to'p mayda suvli pufakchalar, so'ng qobiq. Ko'pincha bir xil joyda qaytalanadi. Batafsil: [gerpes](/uz/articles/art-gerpes).
- **Perioral dermatit** — lab atrofidagi terida mayda qizil toshmalar, lekin lab hoshiyasi yonida ingichka toza teri chizig'i qoladi. Ko'pincha gormonli kremlar va og'ir kosmetikadan kuchayadi. Batafsil: [perioral dermatit](/uz/articles/art-perioral-dermatit).
- **Xeylit** esa lab terisining o'zida bo'ladi: quruqlik, po'st va yoriqlar; pufakchalar odatda bo'lmaydi.

Ularning davolash usuli har xil, shuning uchun bitta "lab kremi" hamma holatga to'g'ri kelmaydi.

## Qachon shifokorga borish kerak?

Dermatologga albatta ko'rining, agar:

- yoriq yoki yara 2–3 haftadan ko'p bitmasa;
- lab qonasa yoki bir joyda qayta-qayta yorilsa;
- labda tugun yoki qattiqlashgan joy paydo bo'lsa;
- labda yoki og'iz ichida oq dog' paydo bo'lsa;
- shish kattalashib, yuzga tarqalsa yoki isitma bo'lsa.

Bu belgilar oddiy quruqlik emas, balki infeksiya, allergiya yoki saratonoldi o'zgarish bo'lishi mumkin. Lab va yuz tez shishib, nafas olish qiyinlashsa — darhol tez yordam chaqiring.

## Uyda nima qilmaslik kerak?

- **Po'stlarni tishlab yoki tirnab ko'chirmang** — yangi yoriq ochiladi va infeksiya kiradi.
- **Spirtli, mentolli, kamforali yoki kuchli xushbo'y vositalarni ishlatmang** — ular salqinlik beradi, lekin labni quritadi va qitiqlaydi.
- **"Quritib qo'yish" usullaridan voz keching** — spirt, yod yoki tuz surtish yoriqni chuqurlashtiradi.
- **Gormonli malham yoki birovning kremini o'zingiz tanlab surtmang** — noto'g'ri vosita xeylitni yoki perioral dermatitni kuchaytirishi mumkin.
- **Lablarni yalamang** — bu quruqlikni faqat kuchaytiradi.

## Klinikada qanday tekshiriladi va davolanadi?

Dermatolog labni ko'radi va so'raydi: qachon boshlangan, qaysi kosmetika ishlatiladi, protez bormi, chekasizmi, quyoshda ko'p bo'lasizmi. Kerak bo'lsa:

- og'iz burchagidan surtma olinadi — zamburug' yoki bakteriyani aniqlash uchun;
- qon tahlillari — temir va vitaminlar darajasini bilish uchun;
- allergiyaga shubha bo'lsa, ehtimoliy moddalar aniqlanadi;
- aktinik xeylitda yoki bitmaydigan yarada — dermatoskopiya va kerak bo'lsa biopsiya.

Davolash sababga qarab tanlanadi: shifokor tayinlagan mahalliy vositalar, allergenni kosmetikadan chiqarish, protezni tuzattirish bo'yicha maslahat. Aktinik xeylitda shifokor muntazam kuzatuv yoki o'zgargan qatlamni olib tashlash usulini tavsiya qiladi. Qaysi yo'l to'g'ri ekanini ko'rikdan keyin shifokor hal qiladi.

## Har kungi parvarish

- **Oddiy, hidsiz lab balzami** — kuniga bir necha marta, ayniqsa tashqariga chiqishdan va uxlashdan oldin.
- **Lablarni yalamaslikka harakat qiling** — balzamni doim yoningizda olib yuring.
- **Xonada havo namlagichi** — ayniqsa yotoqxonada.
- **Yetarli suv** — qishda ham.
- **Quyosh va qorda SPF li lab balzami** — qor quyosh nurini qaytaradi, shuning uchun qishda ham lab kuyadi.
- **Sovuqda sharf** bilan og'iz atrofini yoping.
- **Chekishni tashlang** — bu aktinik xeylit xavfini kamaytiradi.

## Farg'ona va Qo'qonda lablar yorilishi va xeylitni davolash

Radeski Skin Clinic'da dermatolog xeylit turini aniqlaydi, uni gerpes, perioral dermatit va saratonoldi o'zgarishlardan farqlaydi hamda sababga qarab davolashni tanlaydi.

- [Dermatolog Farg'onada](/uz/fargona/dermatolog) va [Qo'qonda](/uz/qoqon/dermatolog);
- [Dermatologiya](/uz/services/dermatologiya).

Qishda lablaringizni yalamang, balzamni yoningizda tuting — 2–3 haftada bitmagan yoriqni esa shifokorga ko'rsating.`;
}

function ruBody(): string {
  return `Зимой многие жалуются, что губы сохнут, шелушатся и трескаются. Чаще всего это обычная сухость, которая проходит за одну-две недели при правильном уходе. Но воспаление кожи губ — хейлит — не всегда связано только с холодом: иногда причина в инфекции в уголках рта, аллергии на косметику или в изменениях, которые годами накапливались под солнцем. Поэтому на трещину, которая долго не заживает, стоит обратить внимание.

## Что такое хейлит?

Хейлит — воспаление кожи и красной каймы губ. Кожа губ очень тонкая, сальных желёз в ней почти нет, поэтому она быстро теряет влагу и чувствительна к внешним воздействиям. Типичные признаки:

- сухость, стянутость и шелушение;
- трещины, которые болят, когда говоришь или улыбаешься;
- покраснение, жжение, иногда отёк;
- трещины с корочками в уголках рта.

## Почему губы трескаются зимой?

- **Холод и ветер** — быстро уносят влагу с кожи губ.
- **Сухой воздух в отапливаемых помещениях** — батареи, кондиционеры и обогреватели сушат воздух.
- **Мало воды** — зимой жажда слабее, а организму вода нужна по-прежнему.
- **Привычка облизывать губы** — самая частая ошибка. Слюна увлажняет лишь на секунду, затем испаряется и сушит губы ещё сильнее, а ферменты слюны раздражают тонкую кожу. Получается замкнутый круг: облизывание — сухость — снова облизывание.
- **Дыхание ртом** — при насморке и заложенном носе.

Подробнее об уходе за всей кожей зимой: [уход за кожей зимой](/ru/articles/art-qishda-teri-parvarishi).

## Основные виды хейлита

- **Обычные сухие, обветренные губы** — самый частый вариант; от холода, ветра и облизывания. При правильном уходе быстро проходит.
- **Трещины в уголках рта (ангулярный хейлит, «заеды»)** — покраснение, трещины и корочки в уголках. Часто там скапливается слюна и размножаются дрожжевые грибки или бактерии. Риск выше при неподходящих зубных протезах, отсутствии зубов или глубоких складках в уголках рта. Иногда причина — нехватка железа или витаминов группы B; это покажут анализы, а какие именно нужны, решает врач.
- **Аллергический контактный хейлит** — реакция на компоненты помады, зубной пасты или бальзама для губ. Обычно появляется после начала использования нового средства: зуд, жжение, отёк и шелушение. Об аллергическом воспалении кожи: [экзема](/ru/articles/art-ekzema).
- **Актинический хейлит** — развивается годами под действием солнца, в основном на нижней губе. Чаще у тех, кто много работает на улице, и у курильщиков. Граница красной каймы стирается, появляется шероховатый, шелушащийся участок, который не заживает. Это предраковое состояние — его обязательно должен осмотреть дерматолог.

## Чем отличается от герпеса и периорального дерматита

- **Герпес («простуда» на губах)** — сначала жжение или покалывание, затем группа мелких пузырьков с жидкостью на одном месте, потом корочка. Часто повторяется там же. Подробнее: [герпес](/ru/articles/art-gerpes).
- **Периоральный дерматит** — мелкие красные высыпания на коже вокруг рта, но вдоль каймы губ остаётся узкая полоска чистой кожи. Часто усиливается от гормональных кремов и плотной косметики. Подробнее: [периоральный дерматит](/ru/articles/art-perioral-dermatit).
- **Хейлит** затрагивает саму кожу губ: сухость, шелушение и трещины; пузырьков обычно нет.

Лечат их по-разному, поэтому один «крем для губ» не подходит на все случаи.

## Когда идти к врачу?

Обязательно обратитесь к дерматологу, если:

- трещина или ранка не заживает дольше 2–3 недель;
- губа кровоточит или трескается снова и снова в одном месте;
- на губе появился узелок или уплотнение;
- на губе или во рту появилось белое пятно;
- отёк нарастает, распространяется на лицо или поднялась температура.

Это уже не просто сухость: так могут проявляться инфекция, аллергия или предраковые изменения. Если губы и лицо быстро отекают и становится трудно дышать — сразу вызывайте скорую помощь.

## Чего не делать дома?

- **Не скусывайте и не сдирайте корочки** — откроется новая трещина, попадёт инфекция.
- **Не используйте средства со спиртом, ментолом, камфорой или сильной отдушкой** — они дают ощущение прохлады, но сушат и раздражают губы.
- **Откажитесь от попыток «подсушить»** — спирт, йод или соль углубляют трещину.
- **Не подбирайте сами гормональную мазь или чужой крем** — неподходящее средство может усилить хейлит или периоральный дерматит.
- **Не облизывайте губы** — это только усиливает сухость.

## Как обследуют и лечат в клинике?

Дерматолог осматривает губы и уточняет: когда началось, какую косметику вы используете, есть ли протезы, курите ли, много ли бываете на солнце. При необходимости:

- берут мазок из уголка рта — чтобы выявить грибок или бактерии;
- назначают анализы крови — на уровень железа и витаминов;
- при подозрении на аллергию выясняют возможный аллерген;
- при актиническом хейлите или незаживающей ранке — дерматоскопия и при необходимости биопсия.

Лечение подбирают по причине: местные средства, назначенные врачом, исключение аллергена из косметики, рекомендация исправить протез. При актиническом хейлите врач советует регулярное наблюдение или удаление изменённого слоя. Какой путь правильный, врач решает после осмотра.

## Ежедневный уход

- **Простой бальзам для губ без отдушек** — несколько раз в день, особенно перед выходом на улицу и перед сном.
- **Старайтесь не облизывать губы** — держите бальзам всегда под рукой.
- **Увлажнитель воздуха в комнате** — особенно в спальне.
- **Достаточно воды** — и зимой тоже.
- **Бальзам с SPF на солнце и снегу** — снег отражает солнечные лучи, поэтому губы обгорают и зимой.
- **В мороз прикрывайте рот шарфом.**
- **Бросьте курить** — это снижает риск актинического хейлита.

## Лечение трещин на губах и хейлита в Фергане и Коканде

В Radeski Skin Clinic дерматолог определит вид хейлита, отличит его от герпеса, периорального дерматита и предраковых изменений и подберёт лечение по причине.

- [Дерматолог в Фергане](/ru/fargona/dermatolog) и [в Коканде](/ru/qoqon/dermatolog);
- [Дерматология](/ru/services/dermatologiya).

Зимой не облизывайте губы, держите бальзам под рукой — а трещину, которая не зажила за 2–3 недели, покажите врачу.`;
}

function enBody(): string {
  return `In winter many people complain that their lips get dry, flaky and cracked. Most of the time this is simple dryness that settles within a week or two with the right care. But cheilitis — inflammation of the lips — is not always about the cold: it can be an infection in the mouth corners, a cosmetic allergy or sun damage built up over years. A crack that will not heal deserves attention.

## What is cheilitis?

Cheilitis is inflammation of the skin and red border of the lips. Lip skin is very thin and has almost no oil glands, so it dries out quickly. Typical signs:

- dryness, tightness and peeling;
- cracks that hurt when you talk or smile;
- redness, burning, sometimes swelling;
- crusted cracks in the corners of the mouth.

## Why do lips crack in winter?

- **Cold and wind** — quickly draw moisture out of the lip skin.
- **Dry air in heated rooms** — radiators, air conditioners and heaters dry the air.
- **Too little water** — winter dulls thirst, not the body's need.
- **Licking your lips** — the most common mistake. Saliva moistens for a moment, then evaporates and dries the lips further, while its enzymes irritate the skin: licking, dryness, more licking.
- **Breathing through the mouth** — with a cold or a blocked nose.

More on looking after your skin in winter: [winter skin care](/en/articles/art-qishda-teri-parvarishi).

## The main types of cheilitis

- **Simple dry, chapped lips** — the most common type, from cold, wind and licking; it clears quickly with care.
- **Cracks in the corners of the mouth (angular cheilitis)** — redness, splits and crusts at the corners. Saliva often collects there, letting yeast or bacteria grow. Poorly fitting dentures, missing teeth or deep corner folds raise the risk. Sometimes the cause is low iron or B vitamins; the doctor decides which tests are needed.
- **Allergic contact cheilitis** — a reaction to ingredients in lipstick, toothpaste or lip balm. It usually follows a new product: itching, burning, swelling and peeling. On allergic skin inflammation: [eczema](/en/articles/art-ekzema).
- **Actinic cheilitis** — develops over years of sun exposure, mostly on the lower lip. It is more common in outdoor workers and smokers. The lip border blurs and a rough, scaly patch appears that does not heal. This is precancerous, so a dermatologist must always see it.

## How it differs from herpes and perioral dermatitis

- **Herpes (cold sores)** — tingling, then a cluster of tiny blisters in one spot, then a crust; it often returns to the same place. More: [herpes](/en/articles/art-gerpes).
- **Perioral dermatitis** — small red bumps around the mouth with a narrow clear strip along the lip border; steroid creams and heavy cosmetics worsen it. More: [perioral dermatitis](/en/articles/art-perioral-dermatit).
- **Cheilitis** affects the lip skin itself: dryness, peeling and cracks, usually without blisters.

Each is treated differently, so no single "lip cream" fits every case.

## When to see a doctor

See a dermatologist if:

- a crack or sore has not healed in 2–3 weeks;
- the lip bleeds or keeps splitting in the same spot;
- a lump or firm area appears on the lip;
- a white patch appears on the lip or inside the mouth;
- swelling grows, spreads to the face or comes with a fever.

This may be an infection, an allergy or a precancerous change. If the lips and face swell quickly and breathing gets difficult, call an ambulance at once.

## What not to do at home

- **Do not bite or peel off the flakes** — this opens a new crack and lets infection in.
- **Avoid products with alcohol, menthol, camphor or strong fragrance** — they feel cooling but dry and irritate the lips.
- **Do not try to "dry it out"** — alcohol, iodine or salt only deepen the crack.
- **Do not pick a steroid ointment or someone else's cream yourself** — the wrong product can make cheilitis or perioral dermatitis worse.
- **Do not lick your lips.**

## How the clinic diagnoses and treats it

The dermatologist examines your lips and asks about cosmetics, dentures, smoking and sun exposure. If needed:

- a swab is taken from the corner of the mouth to look for yeast or bacteria;
- blood tests check iron and vitamin levels;
- if an allergy is suspected, the likely trigger is identified;
- for actinic cheilitis or a sore that will not heal — dermatoscopy and, if needed, a biopsy.

Treatment depends on the cause: topical products prescribed by the doctor, removing the allergen from your cosmetics, advice on having dentures adjusted. For actinic cheilitis the doctor recommends follow-up or removal of the changed layer — the choice is made after the examination.

## Everyday care

- **A simple, fragrance-free lip balm** — several times a day, especially before going outside and before bed.
- **Keep the balm with you** so you do not lick your lips.
- **A humidifier at home** — especially in the bedroom.
- **Enough water**, even in winter.
- **An SPF lip balm in sun and snow** — snow reflects sunlight, so lips burn in winter too.
- **A scarf over the mouth** in frost.
- **Stop smoking** — it lowers the risk of actinic cheilitis.

## Treating chapped lips and cheilitis in Fergana and Kokand

At Radeski Skin Clinic a dermatologist identifies the type of cheilitis, rules out herpes, perioral dermatitis and precancer, and treats the cause.

- [Dermatologist in Fergana](/en/fargona/dermatolog) and [in Kokand](/en/qoqon/dermatolog);
- [Dermatology](/en/services/dermatologiya).

In winter, do not lick your lips and keep a balm handy — and show a doctor any crack that has not healed in 2–3 weeks.`;
}

export const CHEILITIS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Qishda lablar nega yoriladi: sovuq, shamol, quruq havo va yalash odati. Xeylit turlari, gerpesdan farqi, parvarish va xavfli belgilar. Farg'ona va Qo'qonda dermatolog.",
    body: uzBody(),
    keyTakeaways: [
      "Qishda lablar sovuq, shamol, quruq havo va kam suvdan yoriladi; yalash odati quruqlikni kuchaytiradi",
      "Og'iz burchagidagi yoriqlar ko'pincha zamburug' yoki bakteriyalar bilan bog'liq, ba'zan temir yoki vitamin tanqisligi bilan",
      "Lab bo'yog'i, tish pastasi va balzam allergik xeylit chaqirishi mumkin",
      "Pastki labdagi bitmaydigan dag'al dog' — aktinik xeylit, uni dermatolog ko'rishi shart",
      "2–3 haftada bitmagan yoriq, tugun yoki oq dog' — shifokorga borish uchun sabab",
    ],
    tags: ['Xeylit', 'Lablar yorilishi', 'Quruq lablar', "Og'iz burchagi yoriqlari", 'Dermatolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Yoriq yoki yara 2–3 haftadan ko'p bitmasa",
      "Lab qonasa yoki bir joyda qayta-qayta yorilsa",
      "Labda tugun yoki qattiqlashgan joy paydo bo'lsa",
      "Labda yoki og'iz ichida oq dog' paydo bo'lsa",
      "Shish kattalashib yuzga tarqalsa yoki isitma bo'lsa",
    ],
    faq: [
      {
        question: 'Lablarni yalash nega zarar?',
        answer:
          "So'lak bir zumga namlaydi, keyin bug'lanib, labni yana ham quritadi, undagi fermentlar esa yupqa terini qitiqlaydi. Shuning uchun yalagan sari lab ko'proq yoriladi.",
      },
      {
        question: "Og'iz burchagidagi yoriqlar nimadan bo'ladi?",
        answer:
          "Ko'pincha burchaklarda so'lak to'planib, achitqi zamburug'lari yoki bakteriyalar ko'payadi; protez va tishlar yo'qligi xavfni oshiradi. Ba'zan temir yoki B vitaminlari tanqisligi sabab bo'ladi — qaysi tahlil kerakligini shifokor hal qiladi.",
      },
      {
        question: 'Xeylitni gerpesdan qanday farqlash mumkin?',
        answer:
          "Gerpes achishish bilan boshlanadi va bir joyda to'p-to'p suvli pufakchalar chiqaradi, ko'pincha o'sha joyda qaytalanadi. Xeylitda esa quruqlik, po'st va yoriqlar bo'ladi, pufakchalar odatda bo'lmaydi.",
      },
      {
        question: 'Qanday lab balzami tanlash kerak?',
        answer:
          "Oddiy, hidsiz, mentol va spirtsiz balzam. Quyoshli kunlarda va qorda SPF li balzam ishlating. Yangi balzamdan keyin achishish yoki shish bo'lsa, uni to'xtating va dermatologga ko'rining.",
      },
      {
        question: "Farg'ona va Qo'qonda lablar yorilishi va xeylitni qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog xeylit turini aniqlaydi va sababga qarab davolashni tanlaydi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Почему зимой трескаются губы: холод, ветер, сухой воздух и привычка облизывать. Виды хейлита, отличие от герпеса, уход и опасные признаки. Дерматолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Зимой губы трескаются от холода, ветра, сухого воздуха и нехватки воды; облизывание усиливает сухость',
      'Заеды в уголках рта часто связаны с грибком или бактериями, иногда — с нехваткой железа или витаминов',
      'Помада, зубная паста и бальзам могут вызвать аллергический хейлит',
      'Незаживающий шероховатый участок на нижней губе — актинический хейлит, его должен осмотреть дерматолог',
      'Трещина дольше 2–3 недель, узелок или белое пятно — повод пойти к врачу',
    ],
    tags: ['Хейлит', 'Трещины на губах', 'Сухие губы', 'Заеды', 'Дерматолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Трещина или ранка не заживает дольше 2–3 недель',
      'Губа кровоточит или трескается снова в одном месте',
      'На губе появился узелок или уплотнение',
      'На губе или во рту появилось белое пятно',
      'Отёк нарастает, переходит на лицо или поднялась температура',
    ],
    faq: [
      {
        question: 'Почему вредно облизывать губы?',
        answer:
          'Слюна увлажняет лишь на мгновение, затем испаряется и сушит губы ещё сильнее, а её ферменты раздражают тонкую кожу. Чем чаще облизываешь, тем сильнее трескаются губы.',
      },
      {
        question: 'Откуда берутся заеды в уголках рта?',
        answer:
          'Чаще всего в уголках скапливается слюна и размножаются дрожжевые грибки или бактерии; протезы и отсутствие зубов повышают риск. Иногда причина — нехватка железа или витаминов группы B; какие анализы нужны, решает врач.',
      },
      {
        question: 'Как отличить хейлит от герпеса?',
        answer:
          'Герпес начинается с жжения и даёт группу пузырьков с жидкостью на одном месте, часто повторяясь там же. При хейлите — сухость, шелушение и трещины, пузырьков обычно нет.',
      },
      {
        question: 'Какой бальзам для губ выбрать?',
        answer:
          'Простой, без отдушек, ментола и спирта. В солнечные дни и на снегу — бальзам с SPF. Если после нового бальзама появились жжение или отёк, прекратите его использовать и покажитесь дерматологу.',
      },
      {
        question: 'Где лечить трещины на губах и хейлит в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог определит вид хейлита и подберёт лечение по причине. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Why lips crack in winter: cold, wind, dry air and licking. Types of cheilitis, how it differs from herpes, everyday care and warning signs. Dermatologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'In winter lips crack from cold, wind, dry air and too little water; licking makes it worse',
      'Cracks in the corners of the mouth are often linked to yeast or bacteria, sometimes to low iron or vitamins',
      'Lipstick, toothpaste and lip balm can cause allergic cheilitis',
      'A rough patch on the lower lip that will not heal may be actinic cheilitis and needs a dermatologist',
      'A crack lasting over 2–3 weeks, a lump or a white patch is a reason to see a doctor',
    ],
    tags: ['Cheilitis', 'Chapped lips', 'Dry lips', 'Angular cheilitis', 'Dermatologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A crack or sore has not healed in 2–3 weeks',
      'The lip bleeds or keeps splitting in the same spot',
      'A lump or firm area appears on the lip',
      'A white patch appears on the lip or inside the mouth',
      'Swelling grows, spreads to the face or comes with a fever',
    ],
    faq: [
      {
        question: 'Why is licking your lips harmful?',
        answer:
          'Saliva moistens for a moment, then evaporates and dries the lips even more, and its enzymes irritate the thin skin. The more you lick, the more your lips crack.',
      },
      {
        question: 'What causes cracks in the corners of the mouth?',
        answer:
          'Usually saliva collects in the corners and yeast or bacteria grow there; dentures and missing teeth raise the risk. Sometimes low iron or B vitamins are the cause — the doctor decides which tests are needed.',
      },
      {
        question: 'How can I tell cheilitis from herpes?',
        answer:
          'Herpes starts with burning and forms a cluster of fluid-filled blisters in one spot, often returning to the same place. Cheilitis brings dryness, peeling and cracks, usually without blisters.',
      },
      {
        question: 'Which lip balm should I choose?',
        answer:
          'A simple one without fragrance, menthol or alcohol. On sunny days and in snow, use one with SPF. If a new balm causes burning or swelling, stop using it and see a dermatologist.',
      },
      {
        question: 'Where can I have chapped lips and cheilitis treated in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist identifies the type of cheilitis and chooses treatment based on the cause. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const CHEILITIS_ARTICLE: Article = {
  id: 'art-lablar-yorilishi-xeylit',
  slug: 'lablar-yorilishi-xeylit',
  title: {
    uz: "Lablar yorilishi va xeylit: qishda lablarni qanday himoya qilish va qachon shifokorga borish kerak",
    ru: 'Трещины на губах и хейлит: как защитить губы зимой и когда идти к врачу',
    en: 'Chapped Lips and Cheilitis: How to Protect Your Lips in Winter and When to See a Doctor',
  },
  summary: {
    uz: CHEILITIS_ARTICLE_CATALOG.uz.summary,
    ru: CHEILITIS_ARTICLE_CATALOG.ru.summary,
    en: CHEILITIS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: CHEILITIS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: CHEILITIS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: CHEILITIS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Baxriddinov Zuxriddin Muxiddinovich',
    ru: 'Бахриддинов Зухриддин Мухиддинович',
    en: 'Dr. Zuxriddin Muxiddinovich Baxriddinov',
  },
  date: '2026-11-26',
  image: '/articles/lablar-yorilishi-cover.jpg',
  images: {
    uz: '/articles/lablar-yorilishi-cover.jpg',
    ru: '/articles/lablar-yorilishi-cover.jpg',
    en: '/articles/lablar-yorilishi-cover.jpg',
  },
  views: 0,
};
