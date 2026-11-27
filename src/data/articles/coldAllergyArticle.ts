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
 * Skin reacting to cold — what people call "cold allergy". Points: telling apart cold urticaria,
 * chilblains (pernio) and plain cold redness/chapping; who is at risk; the danger of swimming in
 * cold water with cold urticaria (call 103); chilblains that ulcerate or do not heal, Raynaud;
 * what not to do (snow, hot water, heaters, alcohol, steroid creams); the ice-cube test is done
 * only by the doctor; treatment chosen by the doctor (no drug names); everyday protection.
 */

function uzBody(): string {
  return `Qish kelishi bilan ba'zi odamlarda sovuq havoda yoki sovuq suvdan keyin terida qichiydigan pufaklar toshadi, boshqalarda esa qo'l va oyoq barmoqlari, quloqlar qizarib-ko'karib, shishib, achishadi. Xalq orasida bularning barchasini "sovuq allergiyasi" deyishadi, lekin aslida bu turli holatlar: sovuq eshakemisi, pernioz (sovuqdan yallig'lanish) va oddiy sovuqdan qizarish. Ularni farqlash muhim: biri bezarar, boshqasi esa ba'zan hayot uchun xavfli bo'lishi mumkin.

## Uch xil holat — qanday farqlanadi?

- **Sovuq eshakemisi (sovuq allergiyasi)** — sovuq havo, sovuq suv, muzli ichimlik yoki sovuq buyumga tekkandan keyin bir necha daqiqa ichida terida qichiydigan, qavariq pufaklar va qizarish paydo bo'ladi. Ular ko'pincha aynan isinish paytida kuchayadi va odatda 1–2 soatda yo'qoladi. Muzli ichimlikdan keyin lab va og'iz ichi shishishi mumkin.
- **Pernioz (sovuqdan yallig'lanish)** — sovuq va namlikdan 12–24 soat o'tib barmoqlar, oyoq barmoqlari, quloq yoki burunda qizil-binafsha, shishgan dog'lar chiqadi. Ular qichiydi, achishadi, issiqda kuchayadi va 1–3 haftada asta-sekin o'tadi. Muzlash shart emas — salqin va zax havo yetarli.
- **Oddiy sovuqdan qizarish va yorilish** — sovuqda yonoq va burun qizaradi, shamolda teri tortishadi va qipiqlanadi. Iliq xonada qizarish 1–2 soatda o'tadi. Bu allergiya emas, balki quruq teri va himoya qatlamining buzilishi; parvarish haqida batafsil: [qishda teri parvarishi](/uz/articles/art-qishda-teri-parvarishi).

Agar yuz qizarishi isinganda ham ketmasa yoki yuzda tomirlar ko'rinib qolsa, sabab boshqa — masalan, rozatseya bo'lishi mumkin: [yuz qizarishi](/uz/conditions/yuz-qizarishi).

## Kimlarda ko'proq uchraydi?

- **Sovuq eshakemisi** — ko'pincha yoshlarda va o'rta yoshdagilarda, boshqa allergik kasalliklari bor odamlarda; ba'zan infeksiyadan keyin boshlanadi. Bu eshakemining jismoniy omillar qo'zg'atadigan turlaridan biri; eshakemining umumiy sabablari haqida: [teri allergiyasi va eshakemi](/uz/articles/art-eshakemi-teri-allergiyasi).
- **Pernioz** — qon aylanishi sust odamlarda, oriq ayollarda, chekuvchilarda, bolalar va keksalarda, salqin va zax xonada yashaydigan yoki ochiq havoda ishlaydiganlarda. Ba'zan pernioz boshqa kasallikning belgisi bo'ladi, shuning uchun u takrorlansa, shifokor qo'shimcha tekshiruv tayinlashi mumkin.
- **Quruq va sezgir teri** — atopik dermatiti bor odamlarda sovuqdan qizarish va yorilish kuchliroq bo'ladi; batafsil: [atopik dermatit](/uz/articles/art-atopic-dermatitis).

## Qachon xavfli — darhol 103

Sovuq eshakemisida eng xavfli vaziyat — **sovuq suvda cho'milish** (hovuz, ariq, ko'l, dengiz). Butun tana birdaniga sovuqqa tushganda kuchli umumiy reaksiya rivojlanishi mumkin. Darhol tez yordam chaqiring (103), agar:

- lab, til, ko'z qovoqlari yoki tomoq shishsa;
- nafas olish qiyinlashsa, xirillash yoki yutish qiyinligi paydo bo'lsa;
- bosh aylansa, kuchli holsizlik, hushdan ketish yoki yurak tez urishi bo'lsa;
- pufaklar butun tanaga tez tarqalsa.

Suvda hushdan ketish cho'kishga olib kelishi mumkin. Shuning uchun sovuq eshakemisi bor odam hech qachon yolg'iz cho'milmasligi kerak.

Shifokorga tez orada ko'rinish kerak, agar:

- pernioz dog'lari yaraga aylansa, pufak chiqsa, qorayib qolsa yoki 2–3 hafta ichida bitmasa;
- sovuqda barmoqlar avval oqarib, keyin ko'karib, isinganda qizarsa — bu Reyno fenomeni bo'lishi mumkin va tekshiruv talab qiladi;
- teri sezgisini yo'qotsa, oqarib, qattiq bo'lib qolsa (sovuq urishi);
- sovuqqa reaksiya har qishda kuchayib borsa.

## Uyda nima qilmaslik kerak?

- **Qor bilan ishqalamang** — qor terini tirnaydi va sovutishni davom ettiradi.
- **Muzlagan barmoqlarni issiq suv, isitgich, pech yoki olov yonida isitmang** — sezgisi pasaygan teri osongina kuyadi. Iliq (issiq emas) suv va xona harorati yetarli.
- **"Isinish uchun" spirtli ichimlik ichmang** — u tomirlarni kengaytiradi, tana issiqligini tezroq yo'qotadi va xavfni sezdirmaydi.
- **Gormonli kremlarni o'zingizcha surtmang** — ular sababni davolamaydi, uzoq ishlatilganda esa terini yupqalashtiradi.
- **Pufaklarni yormang va qashimang** — infeksiya kirishi mumkin.

## Shifokor qanday aniqlaydi va davolaydi?

Dermatolog shikoyatlarni so'raydi, terini ko'radi va kerak bo'lsa **muz kubigi sinovini** o'tkazadi: plastik paketdagi muz bilakka bir necha daqiqa qo'yiladi, so'ng terida pufak paydo bo'lishi kuzatiladi. Bu sinov faqat klinikada, shifokor nazoratida o'tkaziladi — uyda o'zingizni tekshirib ko'rmang. Ba'zan qon tahlillari tayinlanadi — reaksiya ortida boshqa kasallik yo'qligini aniqlash uchun.

Davolashni shifokor tanlaydi:

- sovuq eshakemisida — shifokor tayinlagan antigistamin turidagi vositalar; ba'zan ularni sovuqqa chiqishdan oldin qabul qilish tavsiya etiladi; og'ir holatlarda shifokor shoshilinch vaziyat uchun harakat rejasini tushuntiradi;
- perniozda — isitish, himoya va shifokor tayinlagan mahalliy vositalar; kerak bo'lsa qon aylanishini yaxshilovchi davolash;
- yorilgan, qizargan terida — tiklovchi parvarish; lablar uchun: [lablar yorilishi va xeylit](/uz/articles/art-lablar-yorilishi-xeylit).

Ko'pchilik bemorlarda to'g'ri himoya va davolash bilan qish ancha yengil o'tadi.

## Har kungi himoya

- **Qatlamli kiyining** — bitta qalin kiyimdan ko'ra bir nechta yupqa qatlam issiqni yaxshiroq saqlaydi.
- **Qo'lqop va issiq, quruq paypoq** — ho'l bo'lsa, darhol almashtiring; quloq va yonoqlarni shapka va sharf bilan yoping.
- **Ko'chaga chiqishdan 20–30 daqiqa oldin** yuzga yumshatuvchi krem, labga gigiyenik balzam surting.
- **Asta-sekin isining** — sovuqdan kelib, darhol issiq dush ostiga yoki isitgich oldiga bormang.
- **Sovuq eshakemisida** — muzli ichimliklardan voz keching, suvga kirishdan oldin uni qo'l bilan tekshiring, yolg'iz cho'milmang.
- **Chekishni tashlang** — chekish tomirlarni toraytiradi.

## Farg'ona va Qo'qonda sovuq allergiyasi bo'yicha dermatolog

Radeski Skin Clinic'da dermatolog sovuqqa reaksiya turini aniqlaydi, kerak bo'lsa muz kubigi sinovini o'tkazadi va har bir bemorga mos davolash va himoya rejasini tuzadi.

- [Dermatolog Farg'onada](/uz/fargona/dermatolog) va [Qo'qonda](/uz/qoqon/dermatolog);
- [Dermatologiya](/uz/services/dermatologiya) va [teri allergiyasi](/uz/conditions/teri-allergiyasi).

Teri har qish sovuqqa "javob" bersa, sababini aniqlash uchun qishning boshidayoq dermatologga murojaat qiling.`;
}

function ruBody(): string {
  return `С приходом зимы у одних людей после холодного воздуха или холодной воды на коже появляются зудящие волдыри, у других краснеют, синеют, отекают и жгут пальцы рук и ног, уши. В народе всё это называют «аллергией на холод», но на самом деле это разные состояния: холодовая крапивница, ознобление (перниоз) и обычное покраснение от холода. Различать их важно: одно безобидно, а другое иногда опасно для жизни.

## Три разных состояния — как отличить?

- **Холодовая крапивница («аллергия на холод»)** — через несколько минут после холодного воздуха, холодной воды, ледяного напитка или контакта с холодным предметом появляются зудящие выпуклые волдыри и покраснение. Часто они усиливаются именно при согревании и обычно проходят за 1–2 часа. После ледяного напитка могут отекать губы и слизистая рта.
- **Ознобление (перниоз)** — через 12–24 часа после холода и сырости на пальцах рук и ног, ушах или носу появляются красно-фиолетовые отёчные пятна. Они зудят, жгут, усиливаются в тепле и постепенно проходят за 1–3 недели. Замерзать не обязательно — достаточно прохладной сырой погоды.
- **Обычное покраснение и обветривание** — на холоде краснеют щёки и нос, на ветру кожа стягивается и шелушится. В тёплом помещении покраснение проходит за 1–2 часа. Это не аллергия, а сухость кожи и нарушение её защитного слоя; про уход подробнее: [уход за кожей зимой](/ru/articles/art-qishda-teri-parvarishi).

Если покраснение лица не проходит и в тепле или на лице стали видны сосуды, причина может быть другой — например, розацеа: [покраснение лица](/ru/conditions/yuz-qizarishi).

## У кого встречается чаще?

- **Холодовая крапивница** — чаще у молодых людей и людей среднего возраста, у тех, у кого уже есть другие аллергические заболевания; иногда начинается после инфекции. Это одна из форм крапивницы, вызванной физическими факторами; об общих причинах крапивницы: [аллергия на коже и крапивница](/ru/articles/art-eshakemi-teri-allergiyasi).
- **Ознобление** — у людей с плохим кровообращением, худощавых женщин, курильщиков, детей и пожилых, у тех, кто живёт в прохладном сыром помещении или работает на улице. Иногда ознобление бывает признаком другого заболевания, поэтому при повторении врач может назначить дополнительное обследование.
- **Сухая и чувствительная кожа** — у людей с атопическим дерматитом покраснение и обветривание от холода сильнее; подробнее: [атопический дерматит](/ru/articles/art-atopic-dermatitis).

## Когда опасно — сразу 103

Самая опасная ситуация при холодовой крапивнице — **купание в холодной воде** (бассейн, арык, озеро, море). Когда всё тело сразу оказывается в холоде, может развиться сильная общая реакция. Сразу вызывайте скорую (103), если:

- отекают губы, язык, веки или горло;
- стало трудно дышать, появились хрипы или трудно глотать;
- кружится голова, сильная слабость, обморок или учащённое сердцебиение;
- волдыри быстро распространяются по всему телу.

Потеря сознания в воде может привести к утоплению. Поэтому человеку с холодовой крапивницей никогда нельзя купаться одному.

Показаться врачу в ближайшее время нужно, если:

- пятна ознобления превращаются в язвы, появляются пузыри, кожа чернеет или не заживает 2–3 недели;
- на холоде пальцы сначала белеют, затем синеют, а при согревании краснеют — это может быть феномен Рейно, нужно обследование;
- кожа теряет чувствительность, становится бледной и твёрдой (обморожение);
- реакция на холод усиливается с каждой зимой.

## Чего не делать дома?

- **Не растирайте снегом** — снег царапает кожу и продолжает её охлаждать.
- **Не отогревайте замёрзшие пальцы горячей водой, обогревателем, у печки или костра** — онемевшая кожа легко получает ожог. Достаточно тёплой (не горячей) воды и комнатной температуры.
- **Не пейте алкоголь «для согрева»** — он расширяет сосуды, тело быстрее теряет тепло, а опасность ощущается слабее.
- **Не мажьте гормональные кремы самостоятельно** — они не устраняют причину, а при длительном применении истончают кожу.
- **Не вскрывайте пузыри и не расчёсывайте** — можно занести инфекцию.

## Как врач ставит диагноз и лечит?

Дерматолог расспросит о жалобах, осмотрит кожу и при необходимости проведёт **тест с кубиком льда**: лёд в пластиковом пакете на несколько минут кладут на предплечье и наблюдают, появится ли волдырь. Этот тест проводят только в клинике под контролем врача — не проверяйте себя дома. Иногда назначают анализы крови, чтобы исключить другое заболевание, которое стоит за реакцией.

Лечение подбирает врач:

- при холодовой крапивнице — назначенные врачом средства антигистаминного типа; иногда их советуют принимать перед выходом на холод; при тяжёлом течении врач объяснит план действий на экстренный случай;
- при озноблении — согревание, защита и местные средства, назначенные врачом; при необходимости — лечение, улучшающее кровообращение;
- при обветренной, покрасневшей коже — восстанавливающий уход; для губ: [трещины губ и хейлит](/ru/articles/art-lablar-yorilishi-xeylit).

У большинства пациентов при правильной защите и лечении зима проходит заметно легче.

## Ежедневная защита

- **Одевайтесь слоями** — несколько тонких слоёв держат тепло лучше, чем одна толстая вещь.
- **Перчатки и тёплые сухие носки** — промокли — сразу смените; уши и щёки закрывайте шапкой и шарфом.
- **За 20–30 минут до выхода** нанесите на лицо смягчающий крем, на губы — гигиенический бальзам.
- **Согревайтесь постепенно** — придя с холода, не вставайте сразу под горячий душ и не садитесь вплотную к обогревателю.
- **При холодовой крапивнице** — откажитесь от ледяных напитков, перед купанием проверьте воду рукой, не купайтесь в одиночку.
- **Бросьте курить** — курение сужает сосуды.

## Дерматолог при аллергии на холод в Фергане и Коканде

В Radeski Skin Clinic дерматолог определит тип реакции на холод, при необходимости проведёт тест с кубиком льда и составит для каждого пациента подходящий план лечения и защиты.

- [Дерматолог в Фергане](/ru/fargona/dermatolog) и [в Коканде](/ru/qoqon/dermatolog);
- [Дерматология](/ru/services/dermatologiya) и [аллергия на коже](/ru/conditions/teri-allergiyasi).

Если кожа каждую зиму «отвечает» на холод, обратитесь к дерматологу в начале зимы, чтобы выяснить причину.`;
}

function enBody(): string {
  return `In winter some people get itchy welts after cold air or cold water, while others find their fingers, toes and ears turning red-purple, swollen and burning. All of this is often called a "cold allergy", but these are different conditions: cold urticaria, chilblains (pernio) and plain cold redness. Telling them apart matters: one is harmless, another can occasionally be life-threatening.

## Three different conditions — how to tell them apart

- **Cold urticaria ("cold allergy")** — within minutes of cold air, cold water, an iced drink or a cold object, itchy raised welts appear. They often worsen as the skin warms up and usually fade within 1–2 hours. After an iced drink the lips and the inside of the mouth may swell.
- **Chilblains (pernio)** — 12–24 hours after cold and damp, red-purple swollen patches appear on the fingers, toes, ears or nose. They itch, burn, get worse in the warmth and slowly settle over 1–3 weeks. Freezing is not needed — cool, damp weather is enough.
- **Plain cold redness and chapping** — the cheeks and nose redden in the cold, and wind leaves the skin tight and flaky. In a warm room the redness fades within 1–2 hours. This is dry skin with a weakened barrier, not an allergy; care tips: [winter skin care](/en/articles/art-qishda-teri-parvarishi).

If facial redness stays after warming up or small vessels show, the cause may be different — rosacea, for example: [facial redness](/en/conditions/yuz-qizarishi).

## Who is more at risk?

- **Cold urticaria** — most often young and middle-aged adults and people who already have other allergic conditions; it sometimes starts after an infection. It is a form of hives triggered by physical factors; general causes of hives: [skin allergy and hives](/en/articles/art-eshakemi-teri-allergiyasi).
- **Chilblains** — people with poor circulation, slim women, smokers, children and older people, and those who live in cool, damp homes or work outdoors. Chilblains are sometimes a sign of another condition, so if they recur the doctor may order tests.
- **Dry, sensitive skin** — people with atopic dermatitis get stronger cold redness and chapping; more: [atopic dermatitis](/en/articles/art-atopic-dermatitis).

## When it is dangerous — call 103 at once

The most dangerous situation with cold urticaria is **swimming in cold water** (a pool, canal, lake or the sea). Sudden cold over the whole body can trigger a severe whole-body reaction. Call an ambulance (103) right away if:

- the lips, tongue, eyelids or throat swell;
- breathing becomes difficult, there is wheezing or trouble swallowing;
- there is dizziness, severe weakness, fainting or a racing heart;
- the welts spread quickly over the whole body.

Fainting in the water can lead to drowning, so a person with cold urticaria should never swim alone.

See a doctor soon if:

- chilblains turn into sores, blister, turn black or have not healed within 2–3 weeks;
- in the cold your fingers first turn white, then blue, and then red as they warm — this may be Raynaud's phenomenon and needs checking;
- the skin loses feeling and becomes pale and hard (frostbite);
- the reaction gets stronger every winter.

## What not to do at home

- **Do not rub with snow** — it scratches and keeps cooling the skin.
- **Do not warm frozen fingers with hot water, a heater, a stove or an open fire** — numb skin burns easily. Lukewarm (not hot) water and room temperature are enough.
- **Do not drink alcohol "to warm up"** — it widens blood vessels, speeds heat loss and dulls your sense of danger.
- **Do not use steroid creams on your own** — they do not treat the cause and thin the skin with long use.
- **Do not pop blisters or scratch** — infection can get in.

## How the doctor diagnoses and treats it

The dermatologist asks about symptoms, examines the skin and, if needed, performs an **ice-cube test**: ice in a plastic bag is placed on the forearm for a few minutes, and the doctor watches whether a welt appears. The test is done only at the clinic under a doctor's supervision — do not try it at home. Blood tests are sometimes ordered to rule out another underlying condition.

The doctor chooses the treatment:

- for cold urticaria — antihistamine-type medicines prescribed by the doctor, sometimes taken before going out into the cold; in severe cases the doctor explains an emergency plan;
- for chilblains — warming, protection and topical treatments prescribed by the doctor; if needed, treatment to improve circulation;
- for chapped, red skin — barrier-repair care; for the lips see [chapped lips and cheilitis](/en/articles/art-lablar-yorilishi-xeylit).

With the right protection and treatment, most patients get through winter far more comfortably.

## Everyday protection

- **Dress in layers** — several thin layers keep warmth better than one thick one.
- **Gloves and warm, dry socks** — change wet ones at once; cover ears and cheeks with a hat and scarf.
- **20–30 minutes before going out**, apply a moisturiser to the face and lip balm to the lips.
- **Warm up gradually** — after coming in, do not jump into a hot shower or sit right by a heater.
- **With cold urticaria** — skip iced drinks, test water with your hand before swimming, never swim alone.
- **Stop smoking** — it narrows blood vessels.

## Dermatologist for cold allergy in Fergana and Kokand

At Radeski Skin Clinic a dermatologist identifies the type of cold reaction, performs an ice-cube test if needed and draws up a personal treatment and protection plan.

- [Dermatologist in Fergana](/en/fargona/dermatolog) and [in Kokand](/en/qoqon/dermatolog);
- [Dermatology](/en/services/dermatologiya) and [skin allergy](/en/conditions/teri-allergiyasi).

If your skin reacts to cold every winter, see a dermatologist early in the season.`;
}

export const COLD_ALLERGY_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Sovuq allergiyasi, pernioz va oddiy sovuqdan qizarish: qanday farqlanadi, sovuq suvda cho'milish xavfi, nima qilmaslik va qanday himoyalanish. Farg'ona va Qo'qonda dermatolog.",
    body: uzBody(),
    keyTakeaways: [
      "Sovuq eshakemisi, pernioz va oddiy sovuqdan qizarish — turli holatlar",
      "Sovuq eshakemisida sovuq suvda cho'milish xavfli: lab-til shishi, nafas qisishi, hushdan ketish — darhol 103",
      "Pernioz yaraga aylansa, qoraysa yoki 2–3 haftada bitmasa — shifokorga",
      "Qor bilan ishqalash, issiq suv, isitgich va spirtli ichimlik bilan isinish zararli",
      "Muz kubigi sinovini faqat shifokor o'tkazadi, davolashni ham shifokor tanlaydi",
    ],
    tags: ['Sovuq allergiyasi', 'Sovuq eshakemisi', 'Pernioz', 'Qishki teri', 'Dermatolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Sovuqdan keyin pufaklar takror-takror toshsa",
      "Muzli ichimlikdan keyin lab yoki og'iz ichi shishsa",
      "Barmoqlardagi dog'lar yaraga aylansa, qoraysa yoki 2–3 haftada bitmasa",
      "Sovuqda barmoqlar oqarib, keyin ko'karsa",
      "Yuz qizarishi isinganda ham ketmasa",
    ],
    faq: [
      {
        question: "Sovuq allergiyasi o'tib ketadimi?",
        answer:
          "Ko'p hollarda sovuq eshakemisi bir necha yil ichida asta-sekin susayadi, lekin uning qancha davom etishini oldindan aytib bo'lmaydi. Shu davrda himoya choralari va shifokor tayinlagan davolash muhim.",
      },
      {
        question: "Muz kubigi sinovini uyda qilsa bo'ladimi?",
        answer:
          "Yo'q. Sezgir odamlarda sinov kuchli reaksiya berishi mumkin. Uni shifokor klinikada, nazorat ostida o'tkazadi va natijani to'g'ri baholaydi.",
      },
      {
        question: 'Pernioz va sovuq urishining farqi nima?',
        answer:
          "Pernioz salqin, zax havoda, muzlamasdan paydo bo'ladi: qizil-binafsha, qichiydigan, shishgan dog'lar. Sovuq urishida esa to'qima muzlaydi: teri oqaradi, qattiqlashadi va sezgisini yo'qotadi — bu shoshilinch yordam talab qiladi.",
      },
      {
        question: "Sovuq allergiyasi bilan cho'milish mumkinmi?",
        answer:
          "Faqat shifokor bilan maslahatlashgandan keyin. Sovuq suvda butun tana reaksiyasi xavfi bor: yolg'iz cho'milmang, suvni avval qo'l bilan tekshiring, lab yoki til shishsa, bosh aylansa — darhol suvdan chiqing va 103 raqamiga qo'ng'iroq qiling.",
      },
      {
        question: "Farg'ona va Qo'qonda sovuq allergiyasini qayerda tekshirish mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog sovuqqa reaksiya turini aniqlaydi va davolash rejasini tuzadi. Saytda yoki +998 73 200-73-73 (Farg'ona) yoki +998 95 145 73 73 (Qo'qon) raqamlari orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Аллергия на холод, ознобление и обычное покраснение от холода: как отличить, чем опасно купание в холодной воде, чего не делать и как защититься. Дерматолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Холодовая крапивница, ознобление и обычное покраснение от холода — разные состояния',
      'При холодовой крапивнице опасно купание в холодной воде: отёк губ и языка, одышка, обморок — сразу 103',
      'Если ознобление изъязвляется, чернеет или не заживает 2–3 недели — к врачу',
      'Растирание снегом, горячая вода, обогреватель и алкоголь «для согрева» вредны',
      'Тест с кубиком льда проводит только врач, и лечение тоже подбирает врач',
    ],
    tags: ['Аллергия на холод', 'Холодовая крапивница', 'Ознобление', 'Кожа зимой', 'Дерматолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'После холода снова и снова появляются волдыри',
      'После ледяного напитка отекают губы или рот',
      'Пятна на пальцах изъязвляются, чернеют или не заживают 2–3 недели',
      'На холоде пальцы белеют, а затем синеют',
      'Покраснение лица не проходит и в тепле',
    ],
    faq: [
      {
        question: 'Проходит ли аллергия на холод?',
        answer:
          'Часто холодовая крапивница постепенно ослабевает в течение нескольких лет, но заранее сказать, сколько она продлится, нельзя. В это время важны меры защиты и лечение, назначенное врачом.',
      },
      {
        question: 'Можно ли сделать тест с кубиком льда дома?',
        answer:
          'Нет. У чувствительных людей тест может вызвать сильную реакцию. Его проводит врач в клинике под контролем и правильно оценивает результат.',
      },
      {
        question: 'Чем ознобление отличается от обморожения?',
        answer:
          'Ознобление возникает в прохладную сырую погоду без замерзания: красно-фиолетовые зудящие отёчные пятна. При обморожении ткани замерзают: кожа бледнеет, твердеет и теряет чувствительность — это требует срочной помощи.',
      },
      {
        question: 'Можно ли купаться при аллергии на холод?',
        answer:
          'Только после консультации врача. В холодной воде есть риск реакции всего организма: не купайтесь в одиночку, сначала проверьте воду рукой, при отёке губ или языка, головокружении сразу выходите из воды и звоните 103.',
      },
      {
        question: 'Где проверить аллергию на холод в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог определит тип реакции на холод и составит план лечения. Записаться можно на сайте или по телефону +998 73 200-73-73 (Фергана) или +998 95 145 73 73 (Коканд).',
      },
    ],
  },
  en: {
    summary:
      'Cold allergy, chilblains and plain cold redness: how to tell them apart, why cold-water swimming can be dangerous, what not to do and how to protect your skin. Dermatologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Cold urticaria, chilblains and plain cold redness are different conditions',
      'With cold urticaria, cold-water swimming is dangerous: swollen lips or tongue, breathing trouble, fainting — call 103',
      'Chilblains that ulcerate, turn black or have not healed in 2–3 weeks need a doctor',
      'Rubbing with snow, hot water, heaters and alcohol "to warm up" do harm',
      'Only the doctor does the ice-cube test, and the doctor chooses the treatment',
    ],
    tags: ['Cold allergy', 'Cold urticaria', 'Chilblains', 'Winter skin', 'Dermatologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Welts keep appearing after cold exposure',
      'Lips or the mouth swell after an iced drink',
      'Patches on the fingers or toes ulcerate, turn black or do not heal in 2–3 weeks',
      'Fingers turn white and then blue in the cold',
      'Facial redness does not fade after warming up',
    ],
    faq: [
      {
        question: 'Does cold allergy go away?',
        answer:
          'Cold urticaria often fades gradually over several years, but how long it will last cannot be predicted. In the meantime, protection and the treatment prescribed by the doctor matter.',
      },
      {
        question: 'Can I do the ice-cube test at home?',
        answer:
          'No. In sensitive people the test can trigger a strong reaction. The doctor performs it at the clinic under supervision and interprets the result correctly.',
      },
      {
        question: 'How are chilblains different from frostbite?',
        answer:
          'Chilblains appear in cool, damp weather without freezing: red-purple, itchy, swollen patches. In frostbite the tissue freezes: the skin turns pale, hard and numb — this needs urgent help.',
      },
      {
        question: 'Can I swim if I have a cold allergy?',
        answer:
          'Only after talking to your doctor. Cold water carries a risk of a whole-body reaction: never swim alone, test the water with your hand first, and if your lips or tongue swell or you feel dizzy, get out of the water at once and call 103.',
      },
      {
        question: 'Where in Fergana and Kokand can I get a cold allergy checked?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist identifies the type of reaction to cold and draws up a treatment plan. Book on the website or call +998 73 200-73-73 (Fergana) or +998 95 145 73 73 (Kokand).',
      },
    ],
  },
};

export const COLD_ALLERGY_ARTICLE: Article = {
  id: 'art-sovuq-allergiyasi',
  slug: 'sovuq-allergiyasi',
  title: {
    uz: "Sovuq allergiyasi va pernioz: sovuqdan terida pufak, qizarish va shish — qachon xavfli",
    ru: 'Аллергия на холод и ознобление: волдыри, покраснение и отёк от холода — когда это опасно',
    en: 'Cold Allergy and Chilblains: Welts, Redness and Swelling from the Cold — When It Is Dangerous',
  },
  summary: {
    uz: COLD_ALLERGY_ARTICLE_CATALOG.uz.summary,
    ru: COLD_ALLERGY_ARTICLE_CATALOG.ru.summary,
    en: COLD_ALLERGY_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: COLD_ALLERGY_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: COLD_ALLERGY_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: COLD_ALLERGY_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Kodirova Dilafruzxon',
    ru: 'Кодирова Дилафрузхон',
    en: 'Dr. Dilafruzkhon Kodirova',
  },
  date: '2026-12-01',
  image: '/articles/sovuq-allergiyasi-cover.jpg',
  images: {
    uz: '/articles/sovuq-allergiyasi-cover.jpg',
    ru: '/articles/sovuq-allergiyasi-cover.jpg',
    en: '/articles/sovuq-allergiyasi-cover.jpg',
  },
  views: 0,
};
