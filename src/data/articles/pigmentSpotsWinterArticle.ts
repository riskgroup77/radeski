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
 * Pigment spots and the season — why autumn and winter are the best time to treat sun spots
 * (lentigo), freckles and post-acne marks. Points: melasma is a separate, careful case (linked,
 * not repeated); less sun and no tan lower the risk of new darkening after laser/IPL; a doctor
 * checks every spot with dermoscopy first because a changing spot can be melanoma; IPL,
 * Q-switch (Hollywood Spectra) and thulium (LaseMD Ultra) in general terms; daily SPF all winter;
 * no lemon, peroxide, unknown whitening creams or aggressive home peels.
 */

function uzBody(): string {
  return `Yuz va qo'llardagi pigment dog'lari — kosmetologga eng ko'p murojaat qilinadigan sabablardan biri. Ular yozda quyosh ostida paydo bo'ladi yoki qorayadi, kuzga kelib esa ko'zga yaqqol tashlanadi. Aynan shu payt — kuz va qish — dog'larni davolashni boshlash uchun eng qulay vaqt: quyosh kam, teri qoraymagan, bahorgacha kursni tugatishga ulgurasiz. Lekin har qanday dog'ni "lazer bilan o'chirish"dan oldin uni shifokor ko'rishi shart.

## Qanday pigment dog'lari bo'ladi?

- **Quyosh dog'lari (lentigo)** — aniq chegarali, och yoki to'q jigarrang dog'lar. Ular yillar davomida quyosh ta'sirida yuz, qo'l kafti orqasi, yelka va ko'krakda paydo bo'ladi; xalq orasida "yosh dog'lari" deyiladi.
- **Sepkillar** — mayda, och jigarrang nuqtalar; irsiy bo'ladi, yozda qorayib, qishda biroz ochiladi.
- **Postakne dog'lari** — husnbuzar yoki boshqa yallig'lanish o'rnida qoladigan qizg'ish yoki jigarrang dog'lar.
- **Melazma** — alohida holat. U gormonlar va quyosh bilan bog'liq, yonoq va peshonada keng, simmetrik dog'lar beradi, oson qaytadi va qizdiruvchi muolajalardan qorayishi mumkin. Shuning uchun melazma ehtiyotkor, uzoq reja talab qiladi — batafsil: [melazma](/uz/articles/art-melazma).

## Nega aynan kuz va qish?

- **Quyosh kam** — ultrabinafsha nurlanish yozdagidan ancha past, kunlar qisqa.
- **Teri qoraymagan** — qoraygan terida lazer va IPL energiyasi dog' bilan birga atrofdagi teriga ham yutiladi, kuyish va yangi dog' xavfi oshadi.
- **Seansdan keyin qorayish xavfi kamroq** — lazer yoki IPL'dan keyin teri bir muncha vaqt sezgir bo'ladi; quyosh yangi pigmentatsiyaga olib kelishi mumkin. Qishda bundan saqlanish osonroq.
- **Kurs uchun vaqt yetarli** — odatda bir necha seans kerak; kuzda boshlasangiz, bahorgi quyoshgacha tugatishga ulgurasiz.

Lazer epilyatsiyada ham xuddi shu mantiq ishlaydi: [nega kursni kuz–qishda boshlash kerak](/uz/articles/art-lazer-epilyatsiya-kuz-qish).

## Avval — dermatoskopiya

Har qanday pigment dog'ini davolashdan oldin shifokor uni dermatoskop bilan tekshiradi. Sababi oddiy: ba'zan "oddiy quyosh dog'i" deb o'ylangan hosila melanoma — teri saratonining xavfli turi bo'lib chiqadi. Bunday dog'ni lazer bilan "o'chirish" tashxisni yashiradi va qimmatli vaqtni yo'qotadi.

Darhol shifokorga ko'rining, agar dog':

- tez kattalashsa yoki shakli o'zgarsa;
- chegarasi notekis, rangi bir xil bo'lmasa (qora, ko'k, qizil joylari bo'lsa);
- qavarib chiqsa, qichisa, qonasa yoki yara bo'lsa;
- boshqa dog'laringizdan keskin farq qilsa;
- kattalar yoshida yangi paydo bo'lgan bo'lsa.

Xavfli belgilar va ABCDE qoidasi haqida: [xollar va dermatoskopiya](/uz/articles/art-xol-tekshiruvi-dermatoskopiya). Shubhali dog' lazer bilan emas, onkodermatolog ko'rigi va kerak bo'lsa biopsiya bilan tekshiriladi.

## Klinikada qanday davolanadi?

Usulni shifokor dog' turi, chuqurligi va teri turiga qarab tanlaydi:

- **IPL fotoyoshartirish** — keng spektrli yorug'lik quyosh dog'lari va sepkillarni ochadi, teri rangini tekislaydi. Batafsil: [IPL Lumecca bilan pigmentatsiyani davolash](/uz/articles/art-ipl-lumecca-pigmentatsiya-radeski).
- **Q-switch lazer (Hollywood Spectra)** — juda qisqa impulslar pigmentni mayda zarrachalarga parchalaydi, organizm ularni asta-sekin chiqaradi. Batafsil: [Hollywood Spectra bilan pigmentatsiya](/uz/articles/art-pigmentaciya-hollywood-spectra-radeski).
- **Tuliy lazer (LaseMD Ultra)** — terining yuzaki qatlamini yumshoq yangilaydi, mayda tarqoq pigmentatsiya va notekis rangda yordam beradi. Batafsil: [LaseMD Ultra tuliy lazer](/uz/articles/art-lasemd-ultra-kokand).

Odatda bir necha seans kerak bo'ladi, oraliqlarni shifokor belgilaydi. Seansdan keyin dog' bir necha kun qorayib, mayda qobiq bo'lib ko'chishi mumkin — bu odatiy jarayon. Natija har kimda har xil bo'ladi, yangi dog'lar chiqmasligi esa ko'p jihatdan quyoshdan himoyaga bog'liq.

## Kurs davomida parvarish

- **SPF har kuni, butun qish** — qor ultrabinafsha nurlarini qaytaradi, bulutli kunda ham nur teriga yetadi. SPF 50 li keng spektrli krem surting va tashqarida yangilab turing.
- **Skrab va qattiq cho'tkalar yo'q** — ayniqsa seansdan keyingi kunlarda.
- **Solyariy va qorayish yo'q** — kurs davomida va undan keyin ham.
- **Yumshoq tozalash va namlantirish** — shifokor tavsiya qilgan vositalar bilan.

## Uyda nima qilmaslik kerak

- dog'ga limon, sirka yoki vodorod peroksid surtish — teri kuyadi va dog' yanada qorayadi;
- tarkibi noma'lum "oqartiruvchi" kremlar — ularda terini shikastlovchi moddalar bo'lishi mumkin;
- uyda kuchli kislotali pilinglar qilish;
- dog'ni qirish, tirnash yoki igna bilan "olib tashlash";
- uy apparatlari bilan o'zingizga "lazer seansi" qilish.

## Farg'ona va Qo'qonda pigment dog'larini davolash

Radeski Skin Clinic'da dermatolog-kosmetolog avval dog'larni dermatoskop bilan tekshiradi, keyin dog' turi va teringizga mos usul va kurs rejasini tuzadi.

- [Pigmentatsiyani davolash Farg'onada](/uz/fargona/pigmentatsiya) va [Qo'qonda](/uz/qoqon/pigmentatsiya);
- [Kosmetolog Farg'onada](/uz/fargona/kosmetolog) va [Qo'qonda](/uz/qoqon/kosmetolog);
- [IPL (InMode)](/uz/services/apparatnaya-kosmetologiya/ipl-inmode), [Hollywood Spectra](/uz/services/apparatnaya-kosmetologiya/hollywood-spectra-lutronic) va [LaseMD Ultra](/uz/services/apparatnaya-kosmetologiya/lasemd-ultra-lutronic).

Kuzda boshlangan kurs bahorni tiniqroq teri bilan kutib olishga imkon beradi — faqat quyoshdan himoyani unutmang.`;
}

function ruBody(): string {
  return `Пигментные пятна на лице и руках — одна из самых частых причин обратиться к косметологу. Они появляются или темнеют летом под солнцем, а к осени становятся особенно заметны. Именно это время — осень и зима — лучше всего подходит для начала лечения: солнца мало, загара нет, и курс успевает закончиться до весны. Но прежде чем «убирать лазером» любое пятно, его обязательно должен осмотреть врач.

## Какие бывают пигментные пятна?

- **Солнечные пятна (лентиго)** — светло- или тёмно-коричневые пятна с чёткими границами. Появляются за годы солнечного воздействия на лице, тыльной стороне кистей, плечах и груди; их называют «возрастными пятнами».
- **Веснушки** — мелкие светло-коричневые точки; передаются по наследству, летом темнеют, зимой немного светлеют.
- **Пятна постакне** — красноватые или коричневые следы на месте прыщей или другого воспаления.
- **Мелазма** — отдельная история. Она связана с гормонами и солнцем, даёт широкие симметричные пятна на щеках и лбу, легко возвращается и может потемнеть от прогревающих процедур. Поэтому мелазме нужен осторожный долгий план — подробнее: [мелазма](/ru/articles/art-melazma).

## Почему именно осень и зима?

- **Мало солнца** — ультрафиолет намного слабее, чем летом, день короче.
- **Нет загара** — на загорелой коже энергия лазера и IPL поглощается не только пятном, но и окружающей кожей, растёт риск ожога и новых пятен.
- **Меньше риск потемнения после сеанса** — после лазера или IPL кожа какое-то время чувствительна, и солнце может вызвать новую пигментацию. Зимой уберечься от этого проще.
- **Хватает времени на курс** — обычно нужно несколько сеансов; начав осенью, вы успеете закончить до весеннего солнца.

С лазерной эпиляцией работает та же логика: [почему курс лучше начинать осенью и зимой](/ru/articles/art-lazer-epilyatsiya-kuz-qish).

## Сначала — дерматоскопия

Перед лечением любого пигментного пятна врач осматривает его дерматоскопом. Причина проста: иногда то, что казалось «обычным солнечным пятном», оказывается меланомой — опасной формой рака кожи. Если такое пятно «стереть» лазером, диагноз будет скрыт, а драгоценное время потеряно.

Срочно покажитесь врачу, если пятно:

- быстро растёт или меняет форму;
- имеет неровные края и неоднородный цвет (чёрные, синие, красные участки);
- приподнимается, чешется, кровоточит или изъязвляется;
- резко отличается от остальных ваших пятен;
- появилось впервые во взрослом возрасте.

О тревожных признаках и правиле ABCDE: [родинки и дерматоскопия](/ru/articles/art-xol-tekshiruvi-dermatoskopiya). Подозрительное пятно проверяют не лазером, а на осмотре онкодерматолога и при необходимости биопсией.

## Как лечат в клинике?

Метод врач выбирает по типу пятна, его глубине и типу кожи:

- **IPL-фотоомоложение** — широкополосный свет осветляет солнечные пятна и веснушки, выравнивает тон кожи. Подробнее: [лечение пигментации на IPL Lumecca](/ru/articles/art-ipl-lumecca-pigmentatsiya-radeski).
- **Q-switch лазер (Hollywood Spectra)** — сверхкороткие импульсы дробят пигмент на мелкие частицы, которые организм постепенно выводит. Подробнее: [пигментация и Hollywood Spectra](/ru/articles/art-pigmentaciya-hollywood-spectra-radeski).
- **Тулиевый лазер (LaseMD Ultra)** — мягко обновляет поверхностный слой кожи, помогает при мелкой рассеянной пигментации и неровном тоне. Подробнее: [тулиевый лазер LaseMD Ultra](/ru/articles/art-lasemd-ultra-kokand).

Обычно нужно несколько сеансов, интервалы между ними определяет врач. После сеанса пятно может на несколько дней потемнеть, а затем сойти мелкой корочкой — это обычный процесс. Результат у всех разный, а появятся ли новые пятна, во многом зависит от защиты от солнца.

## Уход во время курса

- **SPF каждый день, всю зиму** — снег отражает ультрафиолет, и даже в пасмурный день лучи доходят до кожи. Наносите крем SPF 50 широкого спектра и обновляйте его на улице.
- **Никаких скрабов и жёстких щёток** — особенно в первые дни после сеанса.
- **Никакого солярия и загара** — во время курса и после него.
- **Мягкое очищение и увлажнение** — средствами, которые посоветует врач.

## Чего не делать дома

- мазать пятна лимоном, уксусом или перекисью водорода — кожа обжигается, пятно темнеет ещё сильнее;
- пользоваться «отбеливающими» кремами неизвестного состава — в них могут быть вещества, повреждающие кожу;
- делать дома агрессивные кислотные пилинги;
- соскабливать, расчёсывать или «удалять» пятно иглой;
- проводить себе «лазерные сеансы» домашними аппаратами.

## Лечение пигментных пятен в Фергане и Коканде

В Radeski Skin Clinic дерматолог-косметолог сначала осматривает пятна дерматоскопом, а затем составляет план курса и подбирает метод под тип пятен и вашу кожу.

- [Лечение пигментации в Фергане](/ru/fargona/pigmentatsiya) и [в Коканде](/ru/qoqon/pigmentatsiya);
- [Косметолог в Фергане](/ru/fargona/kosmetolog) и [в Коканде](/ru/qoqon/kosmetolog);
- [IPL (InMode)](/ru/services/apparatnaya-kosmetologiya/ipl-inmode), [Hollywood Spectra](/ru/services/apparatnaya-kosmetologiya/hollywood-spectra-lutronic) и [LaseMD Ultra](/ru/services/apparatnaya-kosmetologiya/lasemd-ultra-lutronic).

Курс, начатый осенью, позволяет встретить весну с более ровной кожей — главное, не забывать о защите от солнца.`;
}

function enBody(): string {
  return `Pigment spots on the face and hands are one of the most common reasons people see a cosmetologist. They appear or darken in the summer sun and become most noticeable by autumn. And that is exactly the best time to start treating them: in autumn and winter there is little sun, no tan, and enough time to finish a course before spring. But before any spot is "lasered off", a doctor has to look at it.

## What kinds of pigment spots are there?

- **Sun spots (lentigines)** — light or dark brown spots with clear edges. They build up over years of sun on the face, the backs of the hands, shoulders and chest, and are often called "age spots".
- **Freckles** — small light brown dots; they run in families, darken in summer and fade a little in winter.
- **Post-acne marks** — reddish or brown marks left where pimples or other inflammation used to be.
- **Melasma** — a separate story. It is linked to hormones and sun, causes broad, symmetrical patches on the cheeks and forehead, comes back easily and can darken after heat-based treatments. That is why melasma needs a careful, long-term plan — more: [melasma](/en/articles/art-melazma).

## Why autumn and winter?

- **Less sun** — UV levels are much lower than in summer and days are shorter.
- **No tan** — in tanned skin, laser and IPL energy is absorbed not only by the spot but by the surrounding skin too, raising the risk of burns and new spots.
- **Lower risk of darkening after a session** — after laser or IPL the skin stays sensitive for a while, and sun can trigger new pigmentation. In winter it is easier to avoid.
- **Time for a full course** — several sessions are usually needed; start in autumn and you can finish before the spring sun.

The same logic applies to laser hair removal: [why start your course in autumn and winter](/en/articles/art-lazer-epilyatsiya-kuz-qish).

## First — dermoscopy

Before treating any pigment spot, the doctor examines it with a dermatoscope. The reason is simple: sometimes what looks like an "ordinary sun spot" turns out to be melanoma, a dangerous form of skin cancer. Lasering such a spot away hides the diagnosis and loses precious time.

See a doctor promptly if a spot:

- grows quickly or changes shape;
- has irregular edges and uneven colour (black, blue or red areas);
- becomes raised, itches, bleeds or forms a sore;
- looks clearly different from your other spots;
- has appeared for the first time in adulthood.

For warning signs and the ABCDE rule: [moles and dermoscopy](/en/articles/art-xol-tekshiruvi-dermatoskopiya). A suspicious spot is checked not with a laser but by an oncodermatologist and, if needed, a biopsy.

## How is it treated at the clinic?

The doctor chooses the method by the type and depth of the spot and your skin type:

- **IPL photorejuvenation** — broad-spectrum light fades sun spots and freckles and evens out skin tone. More: [treating pigmentation with IPL Lumecca](/en/articles/art-ipl-lumecca-pigmentatsiya-radeski).
- **Q-switched laser (Hollywood Spectra)** — ultra-short pulses break pigment into tiny particles that the body gradually clears. More: [pigmentation and Hollywood Spectra](/en/articles/art-pigmentaciya-hollywood-spectra-radeski).
- **Thulium laser (LaseMD Ultra)** — gently renews the top layer of the skin and helps with fine, scattered pigmentation and uneven tone. More: [LaseMD Ultra thulium laser](/en/articles/art-lasemd-ultra-kokand).

Several sessions are usually needed, and the doctor sets the intervals. After a session a spot may darken for a few days and then flake off as a fine crust — this is a normal part of the process. Results vary from person to person, and whether new spots appear depends largely on sun protection.

## Care during the course

- **SPF every day, all winter** — snow reflects UV, and rays reach the skin even on cloudy days. Use a broad-spectrum SPF 50 and reapply when outdoors.
- **No scrubs or harsh brushes** — especially in the days after a session.
- **No sunbeds or tanning** — during the course and afterwards.
- **Gentle cleansing and moisturising** — with products your doctor recommends.

## What not to do at home

- rub spots with lemon, vinegar or hydrogen peroxide — the skin burns and the spot gets darker;
- use "whitening" creams of unknown composition — they may contain substances that damage the skin;
- do aggressive acid peels at home;
- scrape, scratch or try to "remove" a spot with a needle;
- give yourself "laser sessions" with home devices.

## Pigment spot treatment in Fergana and Kokand

At Radeski Skin Clinic a dermatologist-cosmetologist first examines your spots with a dermatoscope, then builds a course plan and picks the method that suits the type of spots and your skin.

- [Pigmentation treatment in Fergana](/en/fargona/pigmentatsiya) and [in Kokand](/en/qoqon/pigmentatsiya);
- [Cosmetologist in Fergana](/en/fargona/kosmetolog) and [in Kokand](/en/qoqon/kosmetolog);
- [IPL (InMode)](/en/services/apparatnaya-kosmetologiya/ipl-inmode), [Hollywood Spectra](/en/services/apparatnaya-kosmetologiya/hollywood-spectra-lutronic) and [LaseMD Ultra](/en/services/apparatnaya-kosmetologiya/lasemd-ultra-lutronic).

A course started in autumn lets you greet spring with clearer skin — just do not forget your sunscreen.`;
}

export const PIGMENT_SPOTS_WINTER_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Pigment dog'larini davolash uchun nega kuz va qish eng qulay vaqt: lentigo, sepkil, postakne dog'lari, avval dermatoskopiya, IPL va lazer, qishda SPF. Farg'ona va Qo'qonda kosmetolog.",
    body: uzBody(),
    keyTakeaways: [
      "Kuz va qishda quyosh kam, teri qoraymagan — seansdan keyin qorayish xavfi pastroq",
      "Quyosh dog'lari, sepkillar va postakne dog'lari yaxshi davolanadi; melazma alohida, ehtiyotkor reja talab qiladi",
      "Har qanday dog' davolashdan oldin dermatoskopiyada tekshiriladi — o'zgarayotgan dog' melanoma bo'lishi mumkin",
      "IPL, Q-switch yoki tuliy lazerni shifokor dog' va teri turiga qarab tanlaydi; odatda bir necha seans kerak",
      "Butun qish SPF har kuni, skrab va qorayish yo'q; limon, peroksid va noma'lum oqartiruvchi kremlar zararli",
    ],
    tags: ["Pigment dog'lari", 'Lentigo', 'Sepkil', 'IPL', 'Hollywood Spectra', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Dog' tez kattalashsa yoki shakli o'zgarsa",
      "Dog'ning chegarasi notekis, rangi bir xil bo'lmasa",
      "Dog' qavarib chiqsa, qichisa, qonasa yoki yara bo'lsa",
      "Kattalar yoshida yangi dog' paydo bo'lsa",
      "Uy vositalaridan keyin dog' qorayib, teri kuysa yoki qizarsa",
    ],
    faq: [
      {
        question: "Nega pigment dog'larini yozda davolab bo'lmaydi?",
        answer:
          "Yozda quyosh kuchli va teri ko'pincha qoraygan bo'ladi: lazer yoki IPL energiyasi atrofdagi teriga ham yutiladi, seansdan keyin esa quyosh yangi dog' qoldirishi mumkin. Shuning uchun ko'p muolajalar kuz–qishda xavfsizroq.",
      },
      {
        question: 'Necha seans kerak bo\'ladi?',
        answer:
          "Odatda bir necha seans. Ularning soni va oraliqlari dog' turi, chuqurligi va teringizga bog'liq — buni ko'rikdan keyin shifokor belgilaydi.",
      },
      {
        question: "Dog'lar qaytib chiqadimi?",
        answer:
          "Olib tashlangan dog' odatda qaytmaydi, lekin quyosh ta'sirida yangilari paydo bo'lishi mumkin. Melazma esa oson qaytadi. Har kungi SPF va qorayishdan saqlanish natijani saqlashga yordam beradi.",
      },
      {
        question: "Nega lazerdan oldin dermatoskopiya kerak?",
        answer:
          "Ba'zi xavfli hosilalar, jumladan melanoma, oddiy dog'ga o'xshab ko'rinadi. Dermatoskopiya dog' tuzilishini ko'rsatadi; shubha bo'lsa, lazer o'rniga onkodermatolog ko'rigi va biopsiya tavsiya qilinadi.",
      },
      {
        question: "Farg'ona va Qo'qonda pigment dog'larini qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog-kosmetolog dog'larni dermatoskop bilan tekshiradi va mos davolash kursini tanlaydi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Почему осень и зима — лучшее время лечить пигментные пятна: лентиго, веснушки, пятна постакне, сначала дерматоскопия, IPL и лазер, SPF зимой. Косметолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Осенью и зимой мало солнца и нет загара — риск потемнения после сеанса ниже',
      'Солнечные пятна, веснушки и пятна постакне хорошо поддаются лечению; мелазме нужен отдельный осторожный план',
      'Любое пятно перед лечением проверяют дерматоскопом — меняющееся пятно может быть меланомой',
      'IPL, Q-switch или тулиевый лазер врач выбирает по типу пятна и кожи; обычно нужно несколько сеансов',
      'Всю зиму SPF каждый день, без скрабов и загара; лимон, перекись и отбеливающие кремы неизвестного состава вредны',
    ],
    tags: ['Пигментные пятна', 'Лентиго', 'Веснушки', 'IPL', 'Hollywood Spectra', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Пятно быстро растёт или меняет форму',
      'У пятна неровные края и неоднородный цвет',
      'Пятно приподнимается, чешется, кровоточит или изъязвляется',
      'Во взрослом возрасте появилось новое пятно',
      'После домашних средств пятно потемнело, кожа обожжена или покраснела',
    ],
    faq: [
      {
        question: 'Почему пигментные пятна не лечат летом?',
        answer:
          'Летом солнце сильное, а кожа часто загорелая: энергия лазера или IPL поглощается и окружающей кожей, а после сеанса солнце может оставить новое пятно. Поэтому многие процедуры безопаснее проводить осенью и зимой.',
      },
      {
        question: 'Сколько понадобится сеансов?',
        answer:
          'Обычно несколько. Их число и интервалы зависят от типа и глубины пятна и вашей кожи — это определяет врач после осмотра.',
      },
      {
        question: 'Возвращаются ли пятна?',
        answer:
          'Удалённое пятно обычно не возвращается, но под солнцем могут появиться новые. Мелазма же возвращается легко. Ежедневный SPF и отказ от загара помогают сохранить результат.',
      },
      {
        question: 'Зачем дерматоскопия перед лазером?',
        answer:
          'Некоторые опасные образования, в том числе меланома, выглядят как обычное пятно. Дерматоскопия показывает структуру пятна; при сомнении вместо лазера рекомендуют осмотр онкодерматолога и биопсию.',
      },
      {
        question: 'Где лечить пигментные пятна в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог-косметолог осмотрит пятна дерматоскопом и подберёт подходящий курс лечения. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Why autumn and winter are the best time to treat pigment spots: sun spots, freckles, post-acne marks, dermoscopy first, IPL and laser, winter SPF. Cosmetologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Autumn and winter mean little sun and no tan — a lower risk of darkening after a session',
      'Sun spots, freckles and post-acne marks respond well; melasma needs its own careful plan',
      'Every spot is checked with dermoscopy before treatment — a changing spot can be melanoma',
      'The doctor chooses IPL, Q-switched or thulium laser by spot and skin type; several sessions are usual',
      'SPF every day all winter, no scrubs or tanning; lemon, peroxide and unknown whitening creams do harm',
    ],
    tags: ['Pigment spots', 'Sun spots', 'Freckles', 'IPL', 'Hollywood Spectra', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A spot grows quickly or changes shape',
      'A spot has irregular edges or uneven colour',
      'A spot becomes raised, itches, bleeds or forms a sore',
      'A new spot appears in adulthood',
      'After home remedies a spot darkens or the skin is burned or red',
    ],
    faq: [
      {
        question: 'Why not treat pigment spots in summer?',
        answer:
          'Summer sun is strong and skin is often tanned: laser or IPL energy is absorbed by the surrounding skin too, and after a session the sun can leave a new spot. That is why many treatments are safer in autumn and winter.',
      },
      {
        question: 'How many sessions will I need?',
        answer:
          'Usually several. The number and intervals depend on the type and depth of the spots and your skin — the doctor decides after the examination.',
      },
      {
        question: 'Do the spots come back?',
        answer:
          'A treated spot usually does not return, but new ones can appear with sun exposure. Melasma, however, comes back easily. Daily SPF and avoiding tanning help keep the result.',
      },
      {
        question: 'Why is dermoscopy needed before laser?',
        answer:
          'Some dangerous growths, including melanoma, can look like an ordinary spot. Dermoscopy shows the structure of the spot; if in doubt, an oncodermatologist review and biopsy are advised instead of laser.',
      },
      {
        question: 'Where can I treat pigment spots in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist-cosmetologist examines your spots with a dermatoscope and chooses a suitable treatment course. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const PIGMENT_SPOTS_WINTER_ARTICLE: Article = {
  id: 'art-pigment-doglari-qishda',
  slug: 'pigment-doglari-qishda',
  title: {
    uz: "Pigment dog'larini davolash: nega aynan kuz va qish eng qulay vaqt",
    ru: 'Лечение пигментных пятен: почему осень и зима — лучшее время',
    en: 'Pigment Spot Treatment: Why Autumn and Winter Are the Best Time',
  },
  summary: {
    uz: PIGMENT_SPOTS_WINTER_ARTICLE_CATALOG.uz.summary,
    ru: PIGMENT_SPOTS_WINTER_ARTICLE_CATALOG.ru.summary,
    en: PIGMENT_SPOTS_WINTER_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: PIGMENT_SPOTS_WINTER_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: PIGMENT_SPOTS_WINTER_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: PIGMENT_SPOTS_WINTER_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Kamolova Barno',
    ru: 'Камолова Барно',
    en: 'Dr. Barno Kamolova',
  },
  date: '2026-11-27',
  image: '/articles/pigment-doglari-qishda-cover.jpg',
  images: {
    uz: '/articles/pigment-doglari-qishda-cover.jpg',
    ru: '/articles/pigment-doglari-qishda-cover.jpg',
    en: '/articles/pigment-doglari-qishda-cover.jpg',
  },
  views: 0,
};
