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
 * Spider veins on the legs (telangiectasia). Points: small surface vessels vs varicose veins (bulging
 * veins, heaviness, swelling need a phlebologist and often an ultrasound first), causes, urgent signs
 * (one swollen hot painful leg — possible thrombosis; non-healing shin wound; bleeding vein), what not
 * to do at home, laser treatment of small vessels with Lutronic Derma V, why autumn–winter, before/after,
 * prevention. Facial veins are a separate article and are only linked here.
 */

function uzBody(): string {
  return `Oyoqlardagi tomir to'ri (teleangiektaziya) — teri orqali ko'rinib turadigan mayda qizil, binafsha yoki ko'kimtir tomirchalar. Ular ko'pincha sonda, tizza atrofida va boldirda ingichka chiziqlar, "o'rgimchak to'ri" yoki "yulduzcha" shaklida paydo bo'ladi. Ko'pchilik uchun bu estetik muammo, lekin ba'zan u chuqurroq venalar kasalligining birinchi belgisi bo'ladi. Shuning uchun avval tomirlar qanday ekanini aniqlash, keyin davolash muhim.

## Tomir to'ri nima?

Teleangiektaziya — terining yuzaki qatlamidagi kengaygan mayda tomirlar. Ular:

- teri sathidan bo'rtib chiqmaydi;
- odatda og'rimaydi va xalaqit bermaydi;
- barmoq bilan bosilganda qisqa vaqt oqarishi mumkin.

## Varikozdan farqi

Varikoz — kattaroq venalarning kengayishi. Unga quyidagilar xos:

- teri ostida bo'rtib chiqqan, ilon izidek burilgan ko'kimtir tomirlar;
- kechga borib oyoqlarda og'irlik, toliqish, tortishish;
- to'piq va boldir shishi, tunda mushak tortishishi;
- vaqt o'tishi bilan boldir terisining qorayishi va qalinlashishi.

Bunday belgilar bo'lsa yoki tomir to'ri juda keng maydonni egallasa, avval **qon tomir jarrohi (flebolog)** ko'rigi va ko'pincha **venalarning ultratovush tekshiruvi (UTT)** kerak. Ba'zan yuzadagi tomir to'ri chuqurdagi venada qon oqimi buzilganini ko'rsatadi — bunda faqat mayda tomirlarni olib tashlash yetarli emas, ular tez qaytadi. Klinikamizda esa yuzaki mayda tomirlar davolanadi.

## Nima uchun paydo bo'ladi?

- **Irsiyat** — onada yoki buvida bo'lsa, ehtimol yuqoriroq.
- **Uzoq tik turish yoki o'tirish** — sotuvchi, o'qituvchi, ofis xodimi, haydovchi ishi.
- **Homiladorlik** — qon hajmi va gormonlar o'zgaradi, tomirlarga bosim ortadi; ko'pincha cho'zilish izlari bilan bir vaqtda kuzatiladi — batafsil: [striyalar](/uz/articles/art-striya).
- **Gormonal o'zgarishlar** — gormonal vositalar, menopauza.
- **Ortiqcha vazn** va kam harakat.
- **Issiqlik** — tez-tez issiq vanna, sauna, quyoshda kuyish.
- **Lat yeyish** — urilgan joyda tomirchalar qolishi mumkin.

## Qachon shoshilinch yordam kerak?

- **Bir oyoq to'satdan shishsa, issiq, og'riqli va qizarib ketsa** — bu vena trombozi bo'lishi mumkin. Zudlik bilan shoshilinch yordamga murojaat qiling, oyoqni uqalamang. Shu bilan birga nafas qisishi yoki ko'krakda og'riq bo'lsa — darhol 103 ga qo'ng'iroq qiling.
- **Boldirda bitmaydigan yara** — qon tomir jarrohi ko'rigi kerak; qandli diabet bo'lsa xavf yanada yuqori — batafsil: [diabetda oyoq parvarishi](/uz/articles/art-diabetda-oyoq-parvarishi).
- **Tomir yorilib qonasa** — oyoqni yuqoriga ko'taring, toza mato bilan bosib turing va shifokorga boring.
- **Tomir ustida qattiq, og'riqli qizil tasma** paydo bo'lsa.

## Uyda nima qilmaslik kerak?

- "Tomirlarni yo'qotadigan" kremlar va malhamlarga ishonmang — ular kengaygan tomirni olib tashlamaydi.
- Issiq mum va issiq kompress qo'ymang — tomirlar ko'proq kengayadi, teri kuyishi mumkin.
- Igna bilan teshmang va o'zingizga ukol qilmang — qon ketish, infeksiya va chandiq xavfi bor.
- Kompression paypoqni ko'riksiz tanlamang, ayniqsa oyoqda og'riq, shish yoki diabet bo'lsa.
- Shishgan, og'riqli oyoqni uqalamang.

## Klinikada qanday davolanadi?

Avval shifokor oyoqni ko'radi, tomirlarning o'lchami, rangi va joylashuvini baholaydi, varikoz belgilarini so'raydi. Shubha bo'lsa, lazerdan oldin flebolog ko'rigi va UTT tavsiya qilinadi.

Mayda yuzaki tomirlar Radeski Skin Clinic'da **Lutronic Derma V** tomir lazeri bilan davolanadi — batafsil: [Derma V](/uz/services/apparatnaya-kosmetologiya/derma-v-lutronic). Lazer nuri tomir ichidagi qonga yutiladi, tomir yopiladi va keyingi haftalarda asta-sekin kamroq ko'rinadi.

- Odatda bir necha seans kerak, ular orasida bir necha haftalik tanaffus bo'ladi; aniq soni va oralig'ini shifokor belgilaydi.
- Ingichka qizil tomirchalar odatda yaxshiroq javob beradi, yo'g'onroq ko'k tomirlar esa qiyinroq.
- Muolajadan keyin bir necha kun qizarish, yengil shish yoki mayda ko'karish bo'lishi mumkin.
- Lazer ishlangan tomirlarni yo'qotadi, lekin moyillikni emas: yillar o'tib yangilari paydo bo'lishi mumkin.

Yuzdagi tomirlar haqida alohida maqola: [yuzdagi tomir to'ri va Derma V](/uz/articles/art-sosudistaya-setochka-derma-v-radeski).

## Nega kuz va qish qulay?

Qoraygan terida lazer muolajasi xavfliroq: pigment dog'i va kuyish ehtimoli ortadi. Kuz–qishda oyoq quyoshda kam bo'ladi, muolajadan keyin yopiq kiyim va kerak bo'lsa kompression paypoq kiyish qulayroq. Lazer epilyatsiya ham shu sababli shu mavsumda boshlanadi — batafsil: [lazer epilyatsiya kuz–qishda](/uz/articles/art-lazer-epilyatsiya-kuz-qish).

## Muolajadan oldin va keyin

- Bir necha hafta oldin quyoshda toblanmang, solyariy va avtozagardan foydalanmang.
- Muolaja kuni oyoqqa krem surtmang.
- Keyin bir necha kun sauna, hammom, issiq vanna va og'ir sport mashg'ulotlaridan voz keching.
- Ochiq qoladigan teriga quyoshdan himoya kremi surting.
- Shifokor tavsiya qilgan bo'lsa, kompression paypoq kiying.

## Profilaktika

- Ko'proq yuring: piyoda yurish boldir mushaklarini ishlatadi va venalarga yordam beradi.
- Uzoq o'tirsangiz yoki tik tursangiz, har soatda bir necha daqiqa yuring, oyoq uchida ko'tariling.
- Oyoqni oyoq ustiga qo'yib uzoq o'tirmang.
- Vaznni nazorat qiling.
- Qulay, past poshnali poyabzal kiying.
- Dam olayotganda oyoqni biroz yuqoriga ko'tarib qo'ying.
- Kompression paypoqni faqat shifokor maslahatidan keyin kiying.

## Farg'ona va Qo'qonda oyoqdagi tomir to'rini lazer bilan davolash

Radeski Skin Clinic'da shifokor oyoqdagi tomirlarni baholaydi, varikoz belgilari bo'lsa flebologga yo'naltiradi va mayda yuzaki tomirlarni Lutronic Derma V lazeri bilan davolaydi.

- [Lazer bilan tomir olib tashlash Farg'onada](/uz/fargona/lazer-tomir) va [Qo'qonda](/uz/qoqon/lazer-tomir);
- [Qon tomir va qizarish davolash Farg'onada](/uz/fargona/qon-tomir) va [Qo'qonda](/uz/qoqon/qon-tomir);
- [Kosmetolog Farg'onada](/uz/fargona/kosmetolog) va [Qo'qonda](/uz/qoqon/kosmetolog);
- [Lutronic Derma V](/uz/services/apparatnaya-kosmetologiya/derma-v-lutronic), [apparat kosmetologiyasi](/uz/services/apparatnaya-kosmetologiya).

Oyoqdagi tomir to'ri odatda xavfli emas, lekin avval venalar sog'lom ekanini bilish — chiroyli natijaga birinchi qadam.`;
}

function ruBody(): string {
  return `Сосудистые звёздочки на ногах (телеангиэктазии) — мелкие красные, фиолетовые или синеватые сосуды, просвечивающие через кожу. Чаще всего они появляются на бёдрах, вокруг колен и на голенях в виде тонких линий, «паутинки» или «звёздочек». Для большинства это эстетическая проблема, но иногда они становятся первым признаком болезни более глубоких вен. Поэтому сначала важно понять, что это за сосуды, и только потом лечить.

## Что такое сосудистые звёздочки?

Телеангиэктазии — расширенные мелкие сосуды в поверхностном слое кожи. Они:

- не выступают над кожей;
- обычно не болят и не мешают;
- при надавливании пальцем могут ненадолго бледнеть.

## Чем отличаются от варикоза

Варикоз — расширение более крупных вен. Для него характерны:

- выступающие под кожей извитые синеватые вены;
- тяжесть, усталость и распирание в ногах к вечеру;
- отёки лодыжек и голеней, ночные судороги в икрах;
- со временем потемнение и уплотнение кожи на голени.

Если такие признаки есть или звёздочки занимают большую площадь, сначала нужен осмотр **сосудистого хирурга (флеболога)** и часто **УЗИ вен**. Иногда поверхностная сеточка говорит о нарушении кровотока в глубокой вене — тогда удалять только мелкие сосуды недостаточно, они быстро вернутся. В нашей клинике лечат именно мелкие поверхностные сосуды.

## Почему появляются?

- **Наследственность** — если звёздочки были у мамы или бабушки, вероятность выше.
- **Долгое стояние или сидение** — работа продавца, учителя, офисного сотрудника, водителя.
- **Беременность** — меняются объём крови и гормоны, нагрузка на сосуды растёт; часто появляются одновременно с растяжками — подробнее: [стрии](/ru/articles/art-striya).
- **Гормональные изменения** — гормональные препараты, менопауза.
- **Лишний вес** и малоподвижность.
- **Тепло** — частые горячие ванны, сауна, солнечные ожоги.
- **Ушибы** — на месте травмы могут остаться сосудики.

## Когда нужна срочная помощь?

- **Одна нога внезапно отекла, стала горячей, болезненной и красной** — это может быть тромбоз вены. Срочно обратитесь за неотложной помощью и не массируйте ногу. Если одновременно появились одышка или боль в груди — немедленно звоните 103.
- **Незаживающая рана на голени** — нужен осмотр сосудистого хирурга; при сахарном диабете риск ещё выше — подробнее: [уход за ногами при диабете](/ru/articles/art-diabetda-oyoq-parvarishi).
- **Вена лопнула и кровоточит** — поднимите ногу, прижмите чистой тканью и обратитесь к врачу.
- **Над веной появился плотный болезненный красный тяж.**

## Чего не делать дома

- Не верьте кремам и мазям, которые «убирают сосуды», — расширенный сосуд они не удаляют.
- Не делайте горячую восковую эпиляцию и горячие компрессы — сосуды расширяются ещё сильнее, возможен ожог.
- Не прокалывайте иглой и не делайте себе уколы — риск кровотечения, инфекции и рубца.
- Не подбирайте компрессионный трикотаж без осмотра, особенно при боли, отёках или диабете.
- Не массируйте отёкшую болезненную ногу.

## Как лечат в клинике?

Сначала врач осматривает ноги, оценивает размер, цвет и расположение сосудов, расспрашивает о признаках варикоза. При сомнениях перед лазером рекомендуют консультацию флеболога и УЗИ.

Мелкие поверхностные сосуды в Radeski Skin Clinic лечат сосудистым лазером **Lutronic Derma V** — подробнее: [Derma V](/ru/services/apparatnaya-kosmetologiya/derma-v-lutronic). Луч поглощается кровью внутри сосуда, сосуд «запаивается» и в следующие недели постепенно становится менее заметным.

- Обычно нужно несколько сеансов с перерывом в несколько недель; точное число и интервал определяет врач.
- Тонкие красные сосудики обычно отвечают лучше, более толстые синие — хуже.
- После процедуры несколько дней возможны покраснение, лёгкий отёк или мелкие синячки.
- Лазер убирает обработанные сосуды, но не склонность к ним: с годами могут появиться новые.

О сосудах на лице — отдельная статья: [сосудистая сеточка на лице и Derma V](/ru/articles/art-sosudistaya-setochka-derma-v-radeski).

## Почему осень и зима?

Лазер на загорелой коже рискованнее: выше вероятность пигментных пятен и ожога. Осенью и зимой ноги меньше бывают на солнце, а после процедуры удобнее носить закрытую одежду и, если нужно, компрессионный трикотаж. По той же причине в этот сезон начинают и лазерную эпиляцию — подробнее: [лазерная эпиляция осенью и зимой](/ru/articles/art-lazer-epilyatsiya-kuz-qish).

## До и после процедуры

- За несколько недель не загорайте, не ходите в солярий и не пользуйтесь автозагаром.
- В день процедуры не наносите крем на ноги.
- Несколько дней после — без сауны, бани, горячей ванны и тяжёлых тренировок.
- На открытую кожу наносите солнцезащитный крем.
- Если врач рекомендовал, носите компрессионный трикотаж.

## Профилактика

- Больше ходите: ходьба заставляет работать икроножные мышцы и помогает венам.
- Если долго сидите или стоите, каждый час несколько минут ходите, поднимайтесь на носки.
- Не сидите подолгу нога на ногу.
- Следите за весом.
- Носите удобную обувь на невысоком каблуке.
- Во время отдыха приподнимайте ноги.
- Компрессионный трикотаж — только после совета врача.

## Лечение сосудистых звёздочек на ногах в Фергане и Коканде

В Radeski Skin Clinic врач оценит сосуды на ногах, при признаках варикоза направит к флебологу, а мелкие поверхностные сосуды удалит лазером Lutronic Derma V.

- [Лазерное удаление сосудов в Фергане](/ru/fargona/lazer-tomir) и [в Коканде](/ru/qoqon/lazer-tomir);
- [Лечение сосудов и покраснения в Фергане](/ru/fargona/qon-tomir) и [в Коканде](/ru/qoqon/qon-tomir);
- [Косметолог в Фергане](/ru/fargona/kosmetolog) и [в Коканде](/ru/qoqon/kosmetolog);
- [Lutronic Derma V](/ru/services/apparatnaya-kosmetologiya/derma-v-lutronic), [аппаратная косметология](/ru/services/apparatnaya-kosmetologiya).

Сосудистые звёздочки обычно не опасны, но убедиться, что вены здоровы, — первый шаг к красивому результату.`;
}

function enBody(): string {
  return `Spider veins on the legs (telangiectasias) are tiny red, purple or bluish vessels visible through the skin. They usually appear on the thighs, around the knees and on the shins as thin lines, "webs" or "stars". Mostly a cosmetic concern, they are sometimes the first sign of a problem in deeper veins — so find out what they are before treating them.

## What are spider veins?

Telangiectasias are widened small vessels in the top layer of the skin. They:

- do not bulge above the skin;
- usually do not hurt or bother you;
- may briefly fade when pressed with a finger.

## How they differ from varicose veins

Varicose veins are widened larger veins. Typical signs are:

- bulging, twisted bluish veins under the skin;
- heavy, tired, aching legs by evening;
- swelling of the ankles and calves, night cramps;
- over time, darker and thicker skin on the shin.

If you have these signs, or the spider veins cover a large area, you first need a **vascular surgeon (phlebologist)** and often a **vein ultrasound**. Sometimes surface veins point to poor blood flow in a deeper vein — then removing only the small vessels is not enough, and they come back quickly. Our clinic treats the small surface vessels.

## Why do they appear?

- **Heredity** — more likely if your mother or grandmother had them.
- **Long hours standing or sitting** — shop, office or driving jobs.
- **Pregnancy** — blood volume and hormones change and the load on vessels grows; they often appear together with stretch marks — more: [stretch marks](/en/articles/art-striya).
- **Hormonal changes** — hormonal medicines, menopause.
- **Extra weight** and little movement.
- **Heat** — frequent hot baths, sauna, sunburn.
- **Bruises** — small vessels may remain at the site of an injury.

## When do you need urgent help?

- **One leg suddenly becomes swollen, hot, painful and red** — this may be a vein thrombosis. Seek emergency care right away and do not massage the leg. If you also feel short of breath or have chest pain, call 103 immediately.
- **A wound on the shin that does not heal** — see a vascular surgeon; with diabetes the risk is even higher — more: [foot care in diabetes](/en/articles/art-diabetda-oyoq-parvarishi).
- **A vein bursts and bleeds** — raise the leg, press with a clean cloth and see a doctor.
- **A firm, painful red cord appears along a vein.**

## What not to do at home

- Do not trust creams and ointments that "remove veins" — they do not take away a widened vessel.
- Do not use hot wax or hot compresses — vessels widen further and the skin can burn.
- Do not prick the veins with a needle or inject yourself — there is a risk of bleeding, infection and scarring.
- Do not pick compression stockings without an examination, especially with pain, swelling or diabetes.
- Do not massage a swollen, painful leg.

## How the clinic treats them

First the doctor examines the vessels and asks about signs of varicose veins. If in doubt, a phlebologist and an ultrasound are recommended before laser.

At Radeski Skin Clinic small surface vessels are treated with the **Lutronic Derma V** vascular laser — more: [Derma V](/en/services/apparatnaya-kosmetologiya/derma-v-lutronic). The light is absorbed by the blood inside the vessel, the vessel closes and gradually becomes less visible over the following weeks.

- Several sessions are usually needed, a few weeks apart; the doctor decides how many.
- Thin red vessels usually respond better than thicker blue ones.
- For a few days afterwards there may be redness, mild swelling or small bruises.
- Laser removes the treated vessels but not the tendency: new ones can appear over the years.

Facial veins are covered in a separate article: [facial spider veins and Derma V](/en/articles/art-sosudistaya-setochka-derma-v-radeski).

## Why autumn and winter?

Laser on tanned skin carries more risk: pigment spots and burns are more likely. In autumn and winter the legs get little sun, and after treatment it is easier to wear covering clothes and, if needed, compression stockings. That is also why laser hair removal is started in this season — more: [laser hair removal in autumn and winter](/en/articles/art-lazer-epilyatsiya-kuz-qish).

## Before and after treatment

- For a few weeks before, do not tan, use a solarium or self-tanner.
- Do not apply cream to the legs on the day of treatment.
- For a few days after, avoid sauna, steam baths, hot baths and heavy workouts.
- Apply sunscreen to exposed skin.
- Wear compression stockings if the doctor recommends them.

## Prevention

- Walk more: walking works the calf muscles and helps the veins.
- If you sit or stand for long, walk for a few minutes every hour and rise onto your toes.
- Avoid sitting with your legs crossed for long periods.
- Keep your weight in check.
- Wear comfortable shoes with a low heel.
- Raise your legs a little when resting.
- Compression stockings only after a doctor's advice.

## Spider vein treatment in Fergana and Kokand

At Radeski Skin Clinic a doctor assesses the veins on your legs, refers you to a phlebologist if there are signs of varicose veins, and treats small surface vessels with the Lutronic Derma V laser.

- [Laser vein removal in Fergana](/en/fargona/lazer-tomir) and [in Kokand](/en/qoqon/lazer-tomir);
- [Vessel and redness treatment in Fergana](/en/fargona/qon-tomir) and [in Kokand](/en/qoqon/qon-tomir);
- [Cosmetologist in Fergana](/en/fargona/kosmetolog) and [in Kokand](/en/qoqon/kosmetolog);
- [Lutronic Derma V](/en/services/apparatnaya-kosmetologiya/derma-v-lutronic), [aesthetic device treatments](/en/services/apparatnaya-kosmetologiya).

Spider veins are usually harmless, but making sure your veins are healthy is the first step to a good result.`;
}

export const LEG_VEINS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Oyoqlardagi tomir to'ri: varikozdan farqi, sabablari, xavfli belgilar, Lutronic Derma V lazeri bilan davolash va profilaktika. Farg'ona va Qo'qonda kosmetolog.",
    body: uzBody(),
    keyTakeaways: [
      "Tomir to'ri — terining yuzaki qatlamidagi mayda kengaygan tomirlar, bo'rtib chiqmaydi",
      "Bo'rtgan venalar, og'irlik va shish — varikoz belgisi: avval flebolog va UTT kerak",
      "Bir oyoq to'satdan shishib, qizarib og'risa — tromboz bo'lishi mumkin, zudlik bilan yordam kerak",
      "Mayda tomirlar Lutronic Derma V lazeri bilan bir necha seansda davolanadi, sonini shifokor belgilaydi",
      "Kuz–qish — lazer uchun qulay mavsum; harakat va vazn nazorati yangi tomirlarni kamaytiradi",
    ],
    tags: ["Tomir to'ri", 'Teleangiektaziya', 'Oyoqdagi tomirlar', 'Derma V', 'Lazer', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Bir oyoq to'satdan shishsa, issiq, og'riqli va qizil bo'lsa — zudlik bilan",
      "Venalar bo'rtib chiqsa, oyoqda og'irlik va kechki shish bo'lsa",
      "Boldirda yara bitmasa yoki teri qoraysa",
      "Tomir yorilib qonasa",
      "Tomir to'ri tez ko'payib, keng maydonni egallasa",
    ],
    faq: [
      {
        question: "Oyoqdagi tomir to'ri xavflimi?",
        answer:
          "Mayda yuzaki tomirlar odatda sog'liq uchun xavfli emas. Lekin bo'rtgan venalar, og'irlik va shish bo'lsa, bu varikoz belgisi bo'lishi mumkin — avval flebolog ko'rigi va venalar UTT kerak.",
      },
      {
        question: 'Necha seans kerak?',
        answer:
          "Odatda bir necha seans, ular orasida bir necha haftalik tanaffus bilan. Aniq soni tomirlar soni, rangi va qalinligiga bog'liq — uni shifokor ko'rikdan keyin belgilaydi.",
      },
      {
        question: "Lazer muolajasi og'riqlimi?",
        answer:
          "Ko'pchilik uni qisqa sanchish yoki issiqlik sifatida his qiladi. Keyin bir necha kun qizarish, yengil shish yoki mayda ko'karish bo'lishi mumkin, ular o'z-o'zidan o'tadi.",
      },
      {
        question: "Homiladorlikda tomir to'rini davolash mumkinmi?",
        answer:
          "Homiladorlik va emizish davrida lazer muolajasi odatda keyinga qoldiriladi. Bu davrda paydo bo'lgan tomirlarning bir qismi tug'ruqdan keyin kamayishi mumkin; keyin shifokor holatni qayta baholaydi.",
      },
      {
        question: "Farg'ona va Qo'qonda oyoqdagi tomir to'rini qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida shifokor oyoqdagi tomirlarni baholaydi va mayda yuzaki tomirlarni Lutronic Derma V lazeri bilan davolaydi. Saytda yoki +998 73 200-73-73 (Farg'ona) yoki +998 95 145 73 73 (Qo'qon) raqamlari orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Сосудистые звёздочки на ногах: чем отличаются от варикоза, причины, опасные признаки, лазер Lutronic Derma V и профилактика. Косметолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Сосудистые звёздочки — мелкие расширенные сосуды в поверхностном слое кожи, они не выступают',
      'Выступающие вены, тяжесть и отёки — признаки варикоза: сначала флеболог и УЗИ вен',
      'Внезапно отекла, покраснела и болит одна нога — возможен тромбоз, нужна срочная помощь',
      'Мелкие сосуды лечат лазером Lutronic Derma V за несколько сеансов, их число определяет врач',
      'Осень и зима — удобный сезон для лазера; движение и контроль веса снижают риск новых сосудов',
    ],
    tags: ['Сосудистые звёздочки', 'Телеангиэктазии', 'Сосуды на ногах', 'Derma V', 'Лазер', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Одна нога внезапно отекла, горячая, болит и покраснела — срочно',
      'Вены выступают, ноги тяжёлые и отекают к вечеру',
      'На голени не заживает рана или темнеет кожа',
      'Вена лопнула и кровоточит',
      'Звёздочек быстро становится больше и они занимают большую площадь',
    ],
    faq: [
      {
        question: 'Опасны ли сосудистые звёздочки на ногах?',
        answer:
          'Мелкие поверхностные сосуды обычно не опасны для здоровья. Но если есть выступающие вены, тяжесть и отёки, это может быть варикоз — сначала нужен осмотр флеболога и УЗИ вен.',
      },
      {
        question: 'Сколько нужно сеансов?',
        answer:
          'Обычно несколько сеансов с перерывом в несколько недель. Точное число зависит от количества, цвета и толщины сосудов — его определяет врач после осмотра.',
      },
      {
        question: 'Больно ли лазерное удаление?',
        answer:
          'Большинство ощущает короткие покалывания или тепло. Несколько дней после могут быть покраснение, лёгкий отёк или мелкие синячки — они проходят сами.',
      },
      {
        question: 'Можно ли лечить звёздочки во время беременности?',
        answer:
          'Во время беременности и кормления грудью лазерное лечение обычно откладывают. Часть сосудов, появившихся в этот период, может уменьшиться после родов; затем врач заново оценит ситуацию.',
      },
      {
        question: 'Где удалить сосудистые звёздочки на ногах в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде врач оценит сосуды на ногах и удалит мелкие поверхностные сосуды лазером Lutronic Derma V. Записаться можно на сайте или по телефону +998 73 200-73-73 (Фергана) или +998 95 145 73 73 (Коканд).',
      },
    ],
  },
  en: {
    summary:
      'Spider veins on the legs: how they differ from varicose veins, causes, warning signs, Lutronic Derma V laser treatment and prevention. Cosmetologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Spider veins are small widened vessels in the top layer of the skin and do not bulge',
      'Bulging veins, heavy legs and swelling suggest varicose veins: see a phlebologist and get an ultrasound first',
      'One leg suddenly swollen, red and painful may be a thrombosis — seek urgent care',
      'Small vessels are treated with the Lutronic Derma V laser over several sessions; the doctor decides how many',
      'Autumn and winter suit laser treatment; movement and weight control reduce new veins',
    ],
    tags: ['Spider veins', 'Telangiectasia', 'Leg veins', 'Derma V', 'Laser', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'One leg is suddenly swollen, hot, painful and red — urgently',
      'Veins bulge and legs feel heavy and swell by evening',
      'A wound on the shin does not heal or the skin darkens',
      'A vein bursts and bleeds',
      'Spider veins spread quickly over a large area',
    ],
    faq: [
      {
        question: 'Are spider veins on the legs dangerous?',
        answer:
          'Small surface vessels are usually not a health risk. But bulging veins, heaviness and swelling may mean varicose veins — see a phlebologist and get a vein ultrasound first.',
      },
      {
        question: 'How many sessions are needed?',
        answer:
          'Usually several, a few weeks apart. The exact number depends on how many vessels there are, their colour and thickness — the doctor decides after the examination.',
      },
      {
        question: 'Does laser treatment hurt?',
        answer:
          'Most people feel brief stinging or warmth. For a few days afterwards there may be redness, mild swelling or small bruises, which settle on their own.',
      },
      {
        question: 'Can spider veins be treated during pregnancy?',
        answer:
          'Laser treatment is usually postponed during pregnancy and breastfeeding. Some vessels that appear in this period may fade after childbirth; the doctor then reassesses.',
      },
      {
        question: 'Where can I have leg spider veins treated in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a doctor assesses the veins on your legs and treats small surface vessels with the Lutronic Derma V laser. Book on the website or call +998 73 200-73-73 (Fergana) or +998 95 145 73 73 (Kokand).',
      },
    ],
  },
};

export const LEG_VEINS_ARTICLE: Article = {
  id: 'art-oyoqdagi-tomir-tori',
  slug: 'oyoqdagi-tomir-tori',
  title: {
    uz: "Oyoqlardagi tomir to'ri: varikozdan farqi, sabablari va lazer bilan davolash",
    ru: 'Сосудистые звёздочки на ногах: отличие от варикоза, причины и лазерное удаление',
    en: 'Spider Veins on the Legs: How They Differ from Varicose Veins, Causes and Laser Removal',
  },
  summary: {
    uz: LEG_VEINS_ARTICLE_CATALOG.uz.summary,
    ru: LEG_VEINS_ARTICLE_CATALOG.ru.summary,
    en: LEG_VEINS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: LEG_VEINS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: LEG_VEINS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: LEG_VEINS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Kamolova Barno',
    ru: 'Камолова Барно',
    en: 'Dr. Barno Kamolova',
  },
  date: '2026-11-28',
  image: '/articles/oyoq-tomir-tori-cover.jpg',
  images: {
    uz: '/articles/oyoq-tomir-tori-cover.jpg',
    ru: '/articles/oyoq-tomir-tori-cover.jpg',
    en: '/articles/oyoq-tomir-tori-cover.jpg',
  },
  views: 0,
};
