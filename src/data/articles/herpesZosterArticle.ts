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
 * Shingles (herpes zoster) — the chickenpox virus waking up years later. Points: who gets it,
 * one-sided burning pain before the rash, why the first days matter (doctor-prescribed antiviral
 * treatment, no drug names), urgent signs (face/eye/ear, weak immunity, fever, confusion),
 * post-herpetic pain, contagiousness for people who never had chickenpox, what not to do at home,
 * skin care while healing, and vaccination as a topic to discuss with a doctor.
 * Distinct from lip herpes (art-gerpes): same virus family, different disease.
 */

function uzBody(): string {
  return `O'rab oluvchi temiratki (gerpes zoster) — tananing bir tomonida tasma shaklida og'riqli pufakchalar chiqaradigan virusli kasallik. Uni suvchechak chaqiradigan virus keltirib chiqaradi. Birinchi kunlarda u ko'pincha oddiy bel, ko'krak yoki qovurg'a og'rig'i deb o'ylanadi — holbuki aynan shu kunlarda boshlangan davolash eng ko'p foyda beradi.

## O'rab oluvchi temiratki nima?

Suvchechak bilan og'rigan odamda virus butunlay yo'qolmaydi: u nerv tugunlarida yillar davomida "uxlab" yotadi. Immunitet susayganda virus uyg'onadi va nerv bo'ylab teriga chiqadi. Shuning uchun toshma bitta nerv yo'nalishida — tananing faqat bir tomonida, tasma yoki belbog' shaklida joylashadi.

Bu lab uchug'idan boshqa kasallik: viruslar bir oiladan, lekin har xil. Lab uchug'i haqida batafsil: [gerpes](/uz/articles/art-gerpes). Nomi o'xshash bo'lsa ham, [pushti temiratki](/uz/articles/art-pushti-temiratki) va [qizil yassi temiratki](/uz/articles/art-qizil-yassi-temiratki) ham butunlay boshqa kasalliklar.

## Kimlarda ko'proq uchraydi?

- **50 yoshdan oshganlarda** — yosh bilan xavf ortib boradi;
- **immuniteti zaiflashganlarda** — qandli diabet, onkologik kasalliklar, kimyoterapiya, immunitetni pasaytiruvchi davolash, OIV;
- **kuchli stress, charchoq yoki og'ir kasallikdan keyin**;
- yosh va sog'lom odamlarda ham uchraydi, lekin odatda yengilroq o'tadi.

## Birinchi belgilar

- **Toshmadan 1–5 kun oldin** — tananing bir tomonida achishish, sanchiq, kuyish yoki "tok urgandek" og'riq; teri tegishga juda sezgir bo'ladi;
- holsizlik, bosh og'rig'i, ba'zan harorat;
- keyin shu joyda qizarish va **to'p-to'p suvli pufakchalar** — ular tasma bo'lib tananing bir tomonida, ko'pincha ko'krak, qovurg'a yoki bel atrofida joylashadi;
- 7–10 kunda pufakchalar qobiq bilan qoplanadi, teri odatda 2–4 haftada bitadi.

Toshmadan oldingi og'riqni ko'pincha yurak, buyrak yoki umurtqa og'rig'i deb o'ylashadi. Bir tomonlama, kuydiruvchi og'riq va teri sezgirligi bo'lsa, shifokorga ko'rining.

## Nima uchun birinchi kunlar muhim?

Virusga qarshi davolash toshma chiqqanidan keyingi dastlabki kunlarda — ideal holda 72 soat ichida — boshlansa, kasallik odatda yengilroq va qisqaroq o'tadi, uzoq davom etadigan og'riq xavfi kamayadi. Virusga qarshi vositalarni faqat shifokor tayinlaydi: u yosh, immunitet holati va toshma joyiga qarab davolashni tanlaydi. Kechikib qolgan bo'lsangiz ham murojaat qiling — og'riqni nazorat qilish va asoratlarning oldini olish baribir kerak.

## Shoshilinch yordam kerak, agar:

- toshma **yuzda, ko'z atrofida, burun uchida** yoki **quloqda** bo'lsa — ko'rish va eshitishga ta'sir qilishi mumkin; yuz mushaklari bo'shashsa ham shoshiling;
- **immuniteti juda zaif** odamda bo'lsa (kimyoterapiya, transplantatsiya, OIV, og'ir diabet);
- toshma bir tomondan chiqib, **tana bo'ylab tarqalsa**;
- **yuqori harorat**, kuchli bosh og'rig'i, **chalkashlik**, uyquchanlik yoki bo'yin qotishi bo'lsa;
- pufakchalar yiringlasa, atrofi qizarib, shishib borsa.

## Postgerpetik og'riq

Ba'zi bemorlarda, ayniqsa keksalarda, teri bitganidan keyin ham og'riq oylar davomida saqlanadi. Bu postgerpetik nevralgiya deyiladi: kiyim tegishidan ham og'riq, kuyish, sanchish. Erta davolash bu xavfni kamaytiradi. Teri bitgandan keyin ham og'riq davom etsa, shifokorga qayta murojaat qiling — kerak bo'lsa nevrolog bilan birga og'riqni kamaytiradigan davolash tanlanadi.

## Yuqumlimi?

O'rab oluvchi temiratkining o'zi boshqa odamga "temiratki" bo'lib yuqmaydi, lekin pufakchalardagi suyuqlikdan virus yuqishi mumkin. Suvchechak bilan og'rimagan va emlanmagan odam unga tegsa, unda **suvchechak** boshlanadi. Shuning uchun pufakchalar qobiq bilan qoplanguncha:

- toshmani kiyim yoki toza bog'lam ostida yopiq saqlang;
- **homilador ayollar, chaqaloqlar** va immuniteti zaif odamlar bilan yaqin aloqadan saqlaning;
- qo'lingizni tez-tez yuving, sochiqni alohida ishlating.

Bolalardagi toshmalar haqida: [bolalarda teri toshmalari](/uz/articles/art-bolalarda-teri-toshmalari).

## Uyda nima qilmaslik kerak

- butun toshmaga **brilliant yashili** yoki yod surtish — teri quriydi, bitish qiyinlashadi va shifokor toshmani ko'ra olmaydi;
- pufakchalarni **teshish** yoki qobiqlarni ko'chirish — infeksiya va chandiq xavfi;
- **issiq vanna**, hammom va sauna, toshmani ishqalash;
- **gormonli kremlarni** o'zboshimchalik bilan surtish;
- issiq kompress va xalq usullari bilan "kuydirish";
- og'riq o'zi o'tib ketar deb kutish.

## Klinikada tashxis va davolash

Dermatolog tashxisni odatda ko'rikda qo'yadi: bir tomonlama tasma shaklidagi toshma va undan oldingi og'riq juda xos. Shubhali holatlarda qo'shimcha tahlil buyurilishi mumkin. Davolash odatda quyidagilarni o'z ichiga oladi:

- shifokor tayinlagan virusga qarshi vositalar;
- og'riq kuchiga qarab tanlangan og'riq qoldiruvchi davolash;
- teri bitishi uchun mahalliy vositalar;
- zarur bo'lsa oftalmolog, LOR yoki nevrolog maslahati.

## Teri bitayotganda parvarish

- toshmani toza va quruq saqlang; iliq (issiq emas) dushdan keyin ishqalamasdan, bosib quriting;
- keng, paxta kiyim kiying;
- pufakchalarni toza, yopishmaydigan bog'lam bilan yoping;
- bitish davridagi qichishishda tirnamang — shifokordan yordam so'rang; batafsil: [teri qichishi](/uz/conditions/teri-qichishi);
- dam oling, yaxshi uxlang va to'yimli ovqatlaning.

## Oldini olish

O'rab oluvchi temiratkiga qarshi vaksina mavjud. U ko'pincha 50 yoshdan oshganlar va immuniteti zaif odamlarga tavsiya qilinadi. Emlanish sizga to'g'ri kelish-kelmasligini shifokoringiz bilan muhokama qiling. Qandli diabet va boshqa surunkali kasalliklarni nazoratda saqlash ham immunitetni qo'llab-quvvatlaydi.

## Farg'ona va Qo'qonda o'rab oluvchi temiratkini davolash

Radeski Skin Clinic'da dermatolog toshmani ko'rib chiqadi, xavfli belgilarni baholaydi, davolashni tayinlaydi va teri bitishini kuzatib boradi.

- [Dermatolog Farg'onada](/uz/fargona/dermatolog) va [Qo'qonda](/uz/qoqon/dermatolog);
- [Dermatologiya](/uz/services/dermatologiya).

Tananing bir tomonida kuydiruvchi og'riq va pufakchalar paydo bo'lsa, kutmang — dastlabki kunlardayoq shifokorga ko'rining.`;
}

function ruBody(): string {
  return `Опоясывающий лишай (опоясывающий герпес, herpes zoster) — вирусное заболевание, при котором на одной стороне тела появляется болезненная полоса пузырьков. Его вызывает тот же вирус, что и ветрянку. В первые дни его часто принимают за обычную боль в спине, груди или рёбрах — хотя именно лечение, начатое в эти дни, приносит больше всего пользы.

## Что такое опоясывающий лишай?

У человека, переболевшего ветрянкой, вирус не исчезает полностью: он годами «спит» в нервных узлах. Когда иммунитет ослабевает, вирус просыпается и по нерву выходит на кожу. Поэтому сыпь идёт по ходу одного нерва — только на одной стороне тела, полосой или «поясом».

Это не то же самое, что простуда на губах: вирусы из одного семейства, но разные. О герпесе на губах подробнее: [герпес](/ru/articles/art-gerpes). Несмотря на похожие названия, [розовый лишай](/ru/articles/art-pushti-temiratki) и [красный плоский лишай](/ru/articles/art-qizil-yassi-temiratki) — совсем другие болезни.

## У кого бывает чаще?

- **после 50 лет** — с возрастом риск растёт;
- **при ослабленном иммунитете** — сахарный диабет, онкологические заболевания, химиотерапия, лечение, подавляющее иммунитет, ВИЧ;
- **после сильного стресса, переутомления или тяжёлой болезни**;
- бывает и у молодых здоровых людей, но обычно протекает легче.

## Первые признаки

- **За 1–5 дней до сыпи** — на одной стороне тела жжение, покалывание, жгучая или «простреливающая» боль; кожа становится очень чувствительной к прикосновению;
- слабость, головная боль, иногда температура;
- затем на этом месте покраснение и **группы пузырьков с жидкостью** — они идут полосой по одной стороне тела, чаще на груди, рёбрах или пояснице;
- через 7–10 дней пузырьки покрываются корочками, кожа обычно заживает за 2–4 недели.

Боль до появления сыпи часто принимают за сердечную, почечную или боль в позвоночнике. Если боль односторонняя, жгучая и кожа стала чувствительной — покажитесь врачу.

## Почему важны первые дни?

Если противовирусное лечение начать в первые дни после появления сыпи — в идеале в течение 72 часов, — болезнь обычно протекает легче и короче, а риск длительной боли снижается. Противовирусные средства назначает только врач: он подбирает лечение с учётом возраста, состояния иммунитета и места сыпи. Даже если вы опоздали, всё равно обратитесь — контроль боли и профилактика осложнений нужны в любом случае.

## Срочно к врачу, если:

- сыпь **на лице, вокруг глаза, на кончике носа** или **на ухе** — это может повлиять на зрение и слух; торопитесь и при слабости мышц лица;
- сыпь у человека с **очень слабым иммунитетом** (химиотерапия, трансплантация, ВИЧ, тяжёлый диабет);
- сыпь выходит за пределы одной стороны и **распространяется по телу**;
- **высокая температура**, сильная головная боль, **спутанность сознания**, сонливость или напряжение мышц шеи;
- пузырьки гноятся, вокруг нарастают покраснение и отёк.

## Постгерпетическая боль

У части пациентов, особенно пожилых, боль сохраняется месяцами уже после заживления кожи. Это постгерпетическая невралгия: больно даже от прикосновения одежды, жжёт и простреливает. Раннее лечение снижает этот риск. Если боль не проходит после заживления, обратитесь к врачу повторно — при необходимости вместе с неврологом подберут лечение, уменьшающее боль.

## Заразен ли он?

Сам опоясывающий лишай «лишаем» другим не передаётся, но вирус может передаться через жидкость из пузырьков. Если к ней прикоснётся человек, который не болел ветрянкой и не привит, у него начнётся **ветрянка**. Поэтому, пока пузырьки не покрылись корочками:

- держите сыпь закрытой одеждой или чистой повязкой;
- избегайте близкого контакта с **беременными, младенцами** и людьми со слабым иммунитетом;
- чаще мойте руки, пользуйтесь отдельным полотенцем.

О сыпи у детей: [сыпь у детей](/ru/articles/art-bolalarda-teri-toshmalari).

## Чего не делать дома

- мазать всю сыпь **зелёнкой** или йодом — кожа пересыхает, заживает хуже, а врач не видит сыпь;
- **прокалывать пузырьки** или срывать корочки — риск инфекции и рубцов;
- **горячие ванны**, баня и сауна, растирание сыпи;
- самостоятельно наносить **гормональные кремы**;
- «прижигать» горячими компрессами и народными средствами;
- ждать, что боль пройдёт сама.

## Диагностика и лечение в клинике

Дерматолог обычно ставит диагноз при осмотре: односторонняя полоса сыпи и предшествующая боль очень характерны. В сомнительных случаях могут назначить дополнительные анализы. Лечение обычно включает:

- противовирусные средства, назначенные врачом;
- обезболивающее лечение, подобранное по силе боли;
- местные средства для заживления кожи;
- при необходимости консультацию офтальмолога, ЛОР-врача или невролога.

## Уход за кожей при заживлении

- держите сыпь чистой и сухой; после тёплого (не горячего) душа промокайте кожу, не растирая;
- носите свободную хлопковую одежду;
- закрывайте пузырьки чистой неприлипающей повязкой;
- при зуде в период заживления не расчёсывайте — обратитесь к врачу; подробнее: [кожный зуд](/ru/conditions/teri-qichishi);
- отдыхайте, высыпайтесь и полноценно питайтесь.

## Профилактика

Существует вакцина против опоясывающего лишая. Её часто рекомендуют людям старше 50 лет и людям со слабым иммунитетом. Подходит ли вам прививка, обсудите со своим врачом. Контроль сахарного диабета и других хронических болезней тоже поддерживает иммунитет.

## Лечение опоясывающего лишая в Фергане и Коканде

В Radeski Skin Clinic дерматолог осмотрит сыпь, оценит опасные признаки, назначит лечение и будет наблюдать за заживлением кожи.

- [Дерматолог в Фергане](/ru/fargona/dermatolog) и [в Коканде](/ru/qoqon/dermatolog);
- [Дерматология](/ru/services/dermatologiya).

Если на одной стороне тела появились жгучая боль и пузырьки, не ждите — покажитесь врачу в первые же дни.`;
}

function enBody(): string {
  return `Shingles (herpes zoster) is a viral illness that causes a painful band of blisters on one side of the body. It is caused by the same virus as chickenpox. In the first days it is often mistaken for ordinary back, chest or rib pain — yet treatment started in exactly those days helps the most.

## What is shingles?

After chickenpox the virus never fully leaves the body: it lies "asleep" in nerve roots for years. When immunity weakens, the virus wakes up and travels along a nerve to the skin. That is why the rash follows a single nerve — on one side of the body only, as a stripe or "belt".

It is not the same as cold sores on the lips: the viruses belong to one family but are different. More about cold sores: [herpes](/en/articles/art-gerpes). Despite similar names, [pityriasis rosea](/en/articles/art-pushti-temiratki) and [lichen planus](/en/articles/art-qizil-yassi-temiratki) are entirely different diseases.

## Who gets it?

- **people over 50** — the risk rises with age;
- **people with weakened immunity** — diabetes, cancer, chemotherapy, immune-suppressing treatment, HIV;
- **after severe stress, exhaustion or a serious illness**;
- young healthy people can get it too, but it is usually milder.

## First signs

- **1–5 days before the rash** — burning, tingling, stabbing or "electric" pain on one side of the body; the skin becomes very sensitive to touch;
- tiredness, headache, sometimes fever;
- then redness and **clusters of fluid-filled blisters** in that area — they form a band on one side, most often on the chest, ribs or lower back;
- within 7–10 days the blisters crust over, and the skin usually heals in 2–4 weeks.

The pain before the rash is often taken for heart, kidney or spine pain. If the pain is one-sided and burning and the skin has become sensitive, see a doctor.

## Why do the first days matter?

When antiviral treatment starts in the first days after the rash appears — ideally within 72 hours — the illness is usually milder and shorter, and the risk of long-lasting pain goes down. Antiviral medicines are prescribed only by a doctor, who chooses treatment based on your age, immunity and where the rash is. Even if you are late, still come — pain control and preventing complications are needed anyway.

## Get urgent help if:

- the rash is **on the face, around the eye, on the tip of the nose** or **on the ear** — it can affect sight and hearing; also hurry if facial muscles feel weak;
- the person has **very weak immunity** (chemotherapy, transplant, HIV, severe diabetes);
- the rash spreads beyond one side and **across the body**;
- there is **high fever**, a severe headache, **confusion**, drowsiness or a stiff neck;
- the blisters fill with pus or redness and swelling keep spreading around them.

## Post-herpetic pain

In some people, especially older adults, pain lasts for months after the skin has healed. This is post-herpetic neuralgia: even clothing touching the skin hurts, burns or stabs. Early treatment lowers this risk. If pain continues after the skin heals, see your doctor again — a neurologist may help choose treatment to ease it.

## Is it contagious?

Shingles itself does not pass to others as shingles, but the virus can spread through fluid from the blisters. If someone who has never had chickenpox and is not vaccinated touches it, they can develop **chickenpox**. So until the blisters have crusted over:

- keep the rash covered with clothing or a clean dressing;
- avoid close contact with **pregnant women, babies** and people with weak immunity;
- wash your hands often and use your own towel.

About rashes in children: [skin rashes in children](/en/articles/art-bolalarda-teri-toshmalari).

## What not to do at home

- paint the whole rash with **brilliant green** or iodine — the skin dries out, heals worse and the doctor cannot see the rash;
- **pop the blisters** or pick off crusts — risk of infection and scars;
- take **hot baths**, use a bathhouse or sauna, or rub the rash;
- apply **steroid creams** on your own;
- "burn it out" with hot compresses and folk remedies;
- wait for the pain to pass on its own.

## Diagnosis and treatment at the clinic

A dermatologist usually diagnoses shingles on examination: a one-sided band of rash after a few days of pain is very typical. In unclear cases extra tests may be ordered. Treatment usually includes:

- antiviral medicines prescribed by the doctor;
- pain relief matched to how strong the pain is;
- topical products to help the skin heal;
- if needed, an eye specialist, ENT doctor or neurologist.

## Caring for the skin while it heals

- keep the rash clean and dry; after a warm (not hot) shower, pat the skin dry instead of rubbing;
- wear loose cotton clothing;
- cover blisters with a clean, non-stick dressing;
- if it itches while healing, do not scratch — ask your doctor; more: [itchy skin](/en/conditions/teri-qichishi);
- rest, sleep well and eat properly.

## Prevention

A shingles vaccine exists. It is often recommended for people over 50 and for those with weak immunity. Discuss with your doctor whether it is right for you. Keeping diabetes and other chronic conditions under control also supports your immunity.

## Shingles treatment in Fergana and Kokand

At Radeski Skin Clinic a dermatologist examines the rash, checks for warning signs, prescribes treatment and follows the skin as it heals.

- [Dermatologist in Fergana](/en/fargona/dermatolog) and [in Kokand](/en/qoqon/dermatolog);
- [Dermatology](/en/services/dermatologiya).

If burning pain and blisters appear on one side of your body, do not wait — see a doctor in the very first days.`;
}

export const HERPES_ZOSTER_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "O'rab oluvchi temiratki — bir tomonlama og'riq va pufakchalar: kimlarda uchraydi, nega dastlabki kunlar muhim, xavfli belgilar va yuqumliligi. Farg'ona va Qo'qonda dermatolog.",
    body: uzBody(),
    keyTakeaways: [
      "O'rab oluvchi temiratkini suvchechak virusi chaqiradi — u yillar o'tib nerv bo'ylab uyg'onadi",
      "Birinchi belgi — tananing bir tomonida kuydiruvchi og'riq, keyin tasma shaklidagi pufakchalar",
      "Shifokor tayinlagan davolash dastlabki kunlarda boshlansa, kasallik yengilroq o'tadi",
      "Yuz, ko'z yoki quloqdagi toshma, yuqori harorat va chalkashlik — shoshilinch belgilar",
      "Pufakchalar suvchechak bilan og'rimaganlarga, homiladorlar va chaqaloqlarga xavfli; vaksina haqida shifokor bilan gaplashing",
    ],
    tags: ["O'rab oluvchi temiratki", 'Gerpes zoster', 'Suvchechak virusi', "Postgerpetik og'riq", 'Dermatolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Tananing bir tomonida kuydiruvchi og'riq va pufakchalar paydo bo'lsa",
      "Toshma yuzda, ko'z atrofida yoki quloqda bo'lsa — shu kuniyoq",
      "Immuniteti zaif odamda yoki 50 yoshdan oshganda toshma chiqsa",
      "Yuqori harorat, chalkashlik yoki toshma tana bo'ylab tarqalsa",
      "Teri bitgandan keyin ham og'riq davom etsa",
    ],
    faq: [
      {
        question: "O'rab oluvchi temiratki va lab uchug'i bir xil kasallikmi?",
        answer:
          "Yo'q. Ikkalasini ham bir oiladagi viruslar chaqiradi, lekin o'rab oluvchi temiratkini suvchechak virusi keltirib chiqaradi. U tananing bir tomonida tasma shaklida, kuchli og'riq bilan namoyon bo'ladi.",
      },
      {
        question: "O'rab oluvchi temiratki qancha davom etadi?",
        answer:
          "Pufakchalar odatda 7–10 kunda qobiq bilan qoplanadi, teri 2–4 haftada bitadi. Ba'zi bemorlarda, ayniqsa keksalarda, og'riq bundan keyin ham oylab saqlanishi mumkin.",
      },
      {
        question: 'Bemordan boshqalarga yuqadimi?',
        answer:
          "Pufakchalar suyuqligidan virus yuqishi mumkin: suvchechak bilan og'rimagan odamda suvchechak boshlanadi. Pufakchalar qobiq bilan qoplanguncha toshmani yopiq saqlang va homiladorlar, chaqaloqlar bilan yaqin aloqadan saqlaning.",
      },
      {
        question: "Kasallik qayta bo'lishi mumkinmi?",
        answer:
          "Ha, lekin kamdan-kam. Qayta paydo bo'lish xavfi immuniteti zaif odamlarda yuqoriroq. Vaksina bu xavfni kamaytirishi mumkin — u sizga mosligini shifokor bilan muhokama qiling.",
      },
      {
        question: "Farg'ona va Qo'qonda o'rab oluvchi temiratkini qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog toshmani ko'radi, xavfli belgilarni baholaydi va davolashni tayinlaydi. Saytda yoki +998 73 200-73-73 (Farg'ona) yoki +998 95 145 73 73 (Qo'qon) raqamlari orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Опоясывающий лишай — односторонняя боль и полоса пузырьков: у кого бывает, почему важны первые дни, опасные признаки и заразность. Дерматолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Опоясывающий лишай вызывает вирус ветрянки, который через годы просыпается в нерве',
      'Первый признак — жгучая боль на одной стороне тела, затем полоса пузырьков',
      'Лечение, назначенное врачом в первые дни, делает болезнь легче',
      'Сыпь на лице, у глаза или на ухе, высокая температура и спутанность — срочные признаки',
      'Пузырьки опасны для не болевших ветрянкой, беременных и младенцев; о вакцине поговорите с врачом',
    ],
    tags: ['Опоясывающий лишай', 'Опоясывающий герпес', 'Вирус ветрянки', 'Постгерпетическая боль', 'Дерматолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'На одной стороне тела жгучая боль и пузырьки',
      'Сыпь на лице, вокруг глаза или на ухе — в тот же день',
      'Сыпь у человека со слабым иммунитетом или старше 50 лет',
      'Высокая температура, спутанность сознания или сыпь распространяется по телу',
      'Боль сохраняется после заживления кожи',
    ],
    faq: [
      {
        question: 'Опоясывающий лишай и герпес на губах — одно и то же?',
        answer:
          'Нет. Их вызывают вирусы одного семейства, но опоясывающий лишай вызывает вирус ветрянки. Он проявляется полосой сыпи на одной стороне тела и сильной болью.',
      },
      {
        question: 'Сколько длится опоясывающий лишай?',
        answer:
          'Пузырьки обычно покрываются корочками за 7–10 дней, кожа заживает за 2–4 недели. У части пациентов, особенно пожилых, боль может сохраняться месяцами и после этого.',
      },
      {
        question: 'Заразен ли больной для окружающих?',
        answer:
          'Вирус может передаться через жидкость из пузырьков: у человека, не болевшего ветрянкой, начнётся ветрянка. Пока пузырьки не покрылись корочками, держите сыпь закрытой и избегайте близкого контакта с беременными и младенцами.',
      },
      {
        question: 'Может ли болезнь повториться?',
        answer:
          'Да, но редко. Риск повтора выше у людей со слабым иммунитетом. Вакцина может снизить этот риск — обсудите с врачом, подходит ли она вам.',
      },
      {
        question: 'Где лечить опоясывающий лишай в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог осмотрит сыпь, оценит опасные признаки и назначит лечение. Записаться можно на сайте или по телефону +998 73 200-73-73 (Фергана) или +998 95 145 73 73 (Коканд).',
      },
    ],
  },
  en: {
    summary:
      'Shingles — one-sided pain and a band of blisters: who gets it, why the first days matter, warning signs and whether it is contagious. Dermatologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Shingles is caused by the chickenpox virus waking up in a nerve years later',
      'The first sign is burning pain on one side of the body, then a band of blisters',
      'Treatment prescribed by a doctor in the first days makes the illness milder',
      'A rash on the face, near the eye or on the ear, high fever and confusion are urgent signs',
      'Blisters are a risk to people who never had chickenpox, pregnant women and babies; ask your doctor about the vaccine',
    ],
    tags: ['Shingles', 'Herpes zoster', 'Chickenpox virus', 'Post-herpetic pain', 'Dermatologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Burning pain and blisters on one side of the body',
      'A rash on the face, around the eye or on the ear — the same day',
      'A rash in someone with weak immunity or over 50',
      'High fever, confusion or a rash spreading across the body',
      'Pain that continues after the skin has healed',
    ],
    faq: [
      {
        question: 'Are shingles and cold sores the same disease?',
        answer:
          'No. Both are caused by viruses of the same family, but shingles comes from the chickenpox virus. It shows up as a band of rash on one side of the body with strong pain.',
      },
      {
        question: 'How long does shingles last?',
        answer:
          'The blisters usually crust over in 7–10 days and the skin heals in 2–4 weeks. In some people, especially older adults, pain can last for months afterwards.',
      },
      {
        question: 'Can I pass it to others?',
        answer:
          'The virus can spread through fluid from the blisters: someone who never had chickenpox may develop chickenpox. Until the blisters crust over, keep the rash covered and avoid close contact with pregnant women and babies.',
      },
      {
        question: 'Can shingles come back?',
        answer:
          'Yes, but rarely. The risk is higher in people with weak immunity. A vaccine can lower the risk — discuss with your doctor whether it suits you.',
      },
      {
        question: 'Where can I get shingles treated in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist examines the rash, checks for warning signs and prescribes treatment. Book on the website or call +998 73 200-73-73 (Fergana) or +998 95 145 73 73 (Kokand).',
      },
    ],
  },
};

export const HERPES_ZOSTER_ARTICLE: Article = {
  id: 'art-orab-oluvchi-temiratki',
  slug: 'orab-oluvchi-temiratki',
  title: {
    uz: "O'rab oluvchi temiratki (gerpes zoster): birinchi belgilar, xavfli holatlar va davolash",
    ru: 'Опоясывающий лишай (опоясывающий герпес): первые признаки, опасные симптомы и лечение',
    en: 'Shingles (Herpes Zoster): First Signs, Warning Signs and Treatment',
  },
  summary: {
    uz: HERPES_ZOSTER_ARTICLE_CATALOG.uz.summary,
    ru: HERPES_ZOSTER_ARTICLE_CATALOG.ru.summary,
    en: HERPES_ZOSTER_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: HERPES_ZOSTER_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: HERPES_ZOSTER_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: HERPES_ZOSTER_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: "Turg'unov Shohruz Ilxomjon o'g'li",
    ru: 'Тургунов Шохруз Илхомжон угли',
    en: 'Dr. Shohruz Ilxomjon ugli Turgunov',
  },
  date: '2026-11-28',
  image: '/articles/temiratki-zoster-cover.jpg',
  images: {
    uz: '/articles/temiratki-zoster-cover.jpg',
    ru: '/articles/temiratki-zoster-cover.jpg',
    en: '/articles/temiratki-zoster-cover.jpg',
  },
  views: 0,
};
