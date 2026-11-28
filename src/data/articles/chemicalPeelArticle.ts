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
 * Chemical peels — controlled exfoliation done by a doctor. Points: superficial vs medium peels,
 * honest scope (what they help and what they do not fix), why autumn–winter, contraindications,
 * how a course goes, normal reactions vs warning signs, aftercare, and the risks of home acid
 * peels and salon peels without a doctor. Clinic peels may be named; the doctor picks one. No prices.
 */

function uzBody(): string {
  return `Kimyoviy piling — terining yuzaki qatlamlarini maxsus kislotali eritmalar yordamida nazorat ostida ko'chirish muolajasi. Eski, xira hujayralar ketadi, teri esa o'zini yangilay boshlaydi: rang tekislanadi, yuz tiniqroq va silliqroq ko'rinadi. Piling oddiy kosmetik "tozalash" emas — bu teriga ta'sir qiladigan tibbiy muolaja, shuning uchun uni shifokor tanlashi va o'tkazishi kerak.

## Piling qanday ishlaydi?

Kislotali eritma terining eng ustki qatlamidagi hujayralar orasidagi bog'lanishni bo'shatadi. Bir necha kundan keyin bu qatlam mayda qipiqlar bo'lib ko'chadi, uning o'rnida yangi, tekisroq teri paydo bo'ladi. Shu bilan birga teri yangilanishi va kollagen hosil bo'lishi rag'batlanadi.

Chuqurligiga qarab pilinglar ikki asosiy turga bo'linadi:

- **Yuzaki piling** — faqat terining ustki qatlamiga ta'sir qiladi; tiklanish tez, odatda kundalik hayotga xalaqit bermaydi. Xiralik, notekis rang va yog'li teri uchun ko'p qo'llanadi.
- **O'rta piling** — chuqurroq ishlaydi; postakne izlari, mayda ajinlar va pigmentga kuchliroq ta'sir qiladi, lekin tiklanish uzoqroq va parvarish talablari qat'iyroq.

Qaysi chuqurlik kerakligi teri turiga, muammoga va tiklanish uchun qancha vaqt ajrata olishingizga bog'liq. Qoramtir yoki sezgir terida shifokor odatda yumshoqroq pilingdan boshlaydi va birinchi muolajadan keyin terining reaksiyasini kuzatadi. Kuchliroq piling har doim ham yaxshiroq natija degani emas.

## Piling nimaga yordam beradi?

- xira, "charchagan" teri;
- notekis teri rangi;
- akne keyingi dog'lar va yengil notekisliklar — batafsil: [postakne](/uz/articles/art-postakne) va [postakne holati](/uz/conditions/postacne);
- mayda ajinlar;
- yog'li teri va kengaygan teshiklar;
- ba'zi pigment dog'lari — [teri dog'lari](/uz/conditions/teri-doglari) haqida.

## Piling nimani tuzatmaydi?

- chuqur chandiqlar — ularga odatda lazer yoki boshqa usullar kerak;
- chuqur ajinlar va teri osilishi;
- faol yallig'langan akne — avval davolash kerak;
- har qanday pigment: ba'zi dog'lar, ayniqsa melazma, ehtiyotkor reja talab qiladi; batafsil: [melazma](/uz/articles/art-melazma).

## Nega aynan kuz va qish?

Piling keyin yangi teri quyoshga juda sezgir bo'ladi. Yozda kuchli quyosh yangi pigment dog'lari paydo bo'lish xavfini oshiradi. Kuz va qishda quyosh pastroq, kun qisqaroq, shuning uchun bu fasl piling kursi uchun odatiy vaqt hisoblanadi. Lekin qishda ham SPF kerak. Pigment uchun lazer variantlari haqida: [pigment dog'larini qishda davolash](/uz/articles/art-pigment-doglari-qishda).

## Qarshi ko'rsatmalar

- faol gerpes (lab uchug'i) — batafsil: [gerpes](/uz/articles/art-gerpes);
- muolaja joyidagi ochiq yaralar, tirnalishlar yoki faol yallig'lanish;
- homiladorlik va emizish davri — ko'p pilinglar bu vaqtda qilinmaydi;
- yaqinda quyoshda yoki solyariyda qoraygan teri;
- akne uchun qabul qilinadigan ba'zi dorilar va teriga surtiladigan kuchli vositalar.

Bularning barchasini shifokor konsultatsiyada so'raydi va tekshiradi.

## Klinikada qanday o'tadi?

1. **Konsultatsiya** — shifokor terini ko'radi, teri turini va muammoni baholaydi, qarshi ko'rsatmalarni aniqlaydi.
2. **Tayyorgarlik** — ba'zan muolajadan oldin bir necha hafta uy parvarishi tavsiya qilinadi.
3. **Muolaja** — teri tozalanadi, eritma surtiladi va shifokor kuzatuvi ostida ma'lum vaqt ushlab turiladi. Yengil achishish yoki issiqlik sezilishi odatiy.
4. **Kurs** — natija odatda bir necha muolajadan iborat kursda keladi, muolajalar orasida bir necha hafta tanaffus bo'ladi.

Klinikada professional pilinglar qo'llanadi, jumladan Innoaesthetics'ning PRX-T33, MCA-35 va T.C. Age pilinglari hamda pigmentatsiya uchun Me Line piling. Qaysi biri sizga mosligini shifokor teri va maqsadga qarab tanlaydi.

## Muolajadan keyin: normal va xavfli

Normal holat: qizarish, terining tortilishi, bir necha kun yengil qipiqlanish.

Klinikaga darhol qo'ng'iroq qiling, agar:

- pufakchalar yoki qobiqlar paydo bo'lsa;
- kuchli og'riq yoki achishish o'tmasa;
- yuz sezilarli shishsa;
- yiringli toshma yoki gerpes toshmasi chiqsa.

## Parvarish

- qipiqlarni yulmang va terini ishqalamang, skrab ishlatmang;
- yumshoq tozalovchi va namlovchi krem;
- har kuni SPF — qishda ham, bulutli kunda ham;
- bir necha kun sauna, hammom va basseynga bormang.

## Uyda piling va shifokorsiz salon xavfi

Internetdan olingan kuchli kislotalar yoki shifokorsiz salonda qilingan piling kuyish, chandiq va yangi pigment dog'lariga olib kelishi mumkin. Ayniqsa qoramtir terida noto'g'ri piling keyin dog'lar uzoq saqlanadi. Teri turini va eritma kuchini faqat shifokor to'g'ri baholaydi.

Yog'li teri va teshiklar uchun yana bir variant — lazerli tozalash: [karbon piling](/uz/articles/art-karbon-piling).

## Farg'ona va Qo'qonda kimyoviy piling

Radeski Skin Clinic'da dermatolog-kosmetolog terini baholaydi, mos pilingni tanlaydi va kursni kuzatadi.

- [Kosmetolog Farg'onada](/uz/fargona/kosmetolog) va [Qo'qonda](/uz/qoqon/kosmetolog);
- [Akne davolash Farg'onada](/uz/fargona/akne-davolash) va [Qo'qonda](/uz/qoqon/akne-davolash);
- [Pigmentatsiya davolash Farg'onada](/uz/fargona/pigmentatsiya) va [Qo'qonda](/uz/qoqon/pigmentatsiya);
- [Ultratovush yuz tozalash](/uz/services/apparatnaya-kosmetologiya/ultratovush-yuz-tozalash) va [in'eksion kosmetologiya](/uz/services/in-ekcionnaya-kosmetologiya).

To'g'ri tanlangan va shifokor kuzatuvidagi piling — kuz-qishda teri rangini tiklashning xavfsiz yo'li.`;
}

function ruBody(): string {
  return `Химический пилинг — процедура контролируемого отшелушивания поверхностных слоёв кожи с помощью специальных кислотных растворов. Старые тусклые клетки уходят, а кожа начинает обновляться: тон выравнивается, лицо выглядит свежее и глаже. Пилинг — это не просто косметическая «чистка», а медицинская процедура, которая воздействует на кожу, поэтому подбирать и проводить её должен врач.

## Как работает пилинг?

Кислотный раствор ослабляет связи между клетками самого верхнего слоя кожи. Через несколько дней этот слой отходит мелкими чешуйками, а на его месте появляется новая, более ровная кожа. Одновременно стимулируются обновление кожи и выработка коллагена.

По глубине пилинги делят на два основных вида:

- **Поверхностный пилинг** — действует только на верхний слой кожи; восстановление быстрое и обычно не мешает повседневной жизни. Его часто применяют при тусклости, неровном тоне и жирной коже.
- **Срединный пилинг** — работает глубже; сильнее влияет на следы постакне, мелкие морщины и пигмент, но восстановление дольше, а требования к уходу строже.

Какая глубина нужна, зависит от типа кожи, проблемы и того, сколько времени вы готовы отвести на восстановление. На смуглой или чувствительной коже врач обычно начинает с более мягкого пилинга и смотрит на реакцию кожи после первой процедуры. Более сильный пилинг — не всегда лучший результат.

## С чем помогает пилинг?

- тусклая, «уставшая» кожа;
- неровный тон кожи;
- пятна и лёгкие неровности после акне — подробнее: [постакне](/ru/articles/art-postakne) и [постакне как состояние](/ru/conditions/postacne);
- мелкие морщины;
- жирная кожа и расширенные поры;
- некоторые пигментные пятна — о [пятнах на коже](/ru/conditions/teri-doglari).

## Что пилинг не исправит?

- глубокие рубцы — для них обычно нужен лазер или другие методы;
- глубокие морщины и провисание кожи;
- активное воспалённое акне — сначала его нужно лечить;
- любой пигмент: некоторые пятна, особенно мелазма, требуют осторожного плана; подробнее: [мелазма](/ru/articles/art-melazma).

## Почему именно осень и зима?

После пилинга новая кожа очень чувствительна к солнцу. Летом яркое солнце повышает риск появления новых пигментных пятен. Осенью и зимой солнце ниже, день короче, поэтому этот сезон считается обычным временем для курса пилингов. Но и зимой нужен SPF. О лазерных вариантах для пигмента: [пигментные пятна зимой](/ru/articles/art-pigment-doglari-qishda).

## Противопоказания

- активный герпес — подробнее: [герпес](/ru/articles/art-gerpes);
- открытые раны, ссадины или активное воспаление в зоне процедуры;
- беременность и грудное вскармливание — многие пилинги в это время не проводят;
- свежий загар, в том числе из солярия;
- некоторые препараты от акне — как для приёма внутрь, так и сильные наружные средства.

Всё это врач уточняет и проверяет на консультации.

## Как проходит процедура в клинике?

1. **Консультация** — врач осматривает кожу, оценивает её тип и проблему, выявляет противопоказания.
2. **Подготовка** — иногда за несколько недель до процедуры назначают домашний уход.
3. **Процедура** — кожу очищают, наносят раствор и выдерживают определённое время под контролем врача. Лёгкое пощипывание или тепло — это нормально.
4. **Курс** — результат обычно достигается курсом из нескольких процедур с перерывами в несколько недель.

В клинике используют профессиональные пилинги, в том числе PRX-T33, MCA-35 и T.C. Age от Innoaesthetics, а также пилинг Me Line для пигментации. Какой из них подходит вам, врач решает по состоянию кожи и цели.

## После процедуры: норма и тревожные признаки

Норма: покраснение, чувство стянутости, лёгкое шелушение в течение нескольких дней.

Сразу звоните в клинику, если:

- появились пузыри или корочки;
- сильная боль или жжение не проходят;
- лицо заметно отекло;
- появились гнойнички или высыпания герпеса.

## Уход

- не срывайте чешуйки, не трите кожу и не пользуйтесь скрабами;
- мягкое очищение и увлажняющий крем;
- ежедневный SPF — и зимой, и в пасмурный день;
- несколько дней без сауны, бани и бассейна.

## Опасность домашних пилингов и салонов без врача

Сильные кислоты, купленные в интернете, или пилинг в салоне без врача могут привести к ожогу, рубцам и новым пигментным пятнам. Особенно на смуглой коже после неправильного пилинга пятна держатся долго. Правильно оценить тип кожи и силу раствора может только врач.

Ещё один вариант для жирной кожи и пор — лазерное очищение: [карбоновый пилинг](/ru/articles/art-karbon-piling).

## Химический пилинг в Фергане и Коканде

В Radeski Skin Clinic дерматолог-косметолог оценит кожу, подберёт подходящий пилинг и будет вести курс.

- [Косметолог в Фергане](/ru/fargona/kosmetolog) и [в Коканде](/ru/qoqon/kosmetolog);
- [Лечение акне в Фергане](/ru/fargona/akne-davolash) и [в Коканде](/ru/qoqon/akne-davolash);
- [Лечение пигментации в Фергане](/ru/fargona/pigmentatsiya) и [в Коканде](/ru/qoqon/pigmentatsiya);
- [Ультразвуковая чистка лица](/ru/services/apparatnaya-kosmetologiya/ultratovush-yuz-tozalash) и [инъекционная косметология](/ru/services/in-ekcionnaya-kosmetologiya).

Правильно подобранный пилинг под контролем врача — безопасный способ вернуть коже ровный тон осенью и зимой.`;
}

function enBody(): string {
  return `A chemical peel is a controlled exfoliation of the top layers of the skin using special acid solutions. Old, dull cells come away and the skin starts to renew itself: the tone evens out and the face looks fresher and smoother. A peel is not just a cosmetic "cleanse" — it is a medical procedure that acts on the skin, so a doctor should choose and perform it.

## How does a peel work?

The acid solution loosens the bonds between cells in the very top layer of the skin. Over the next few days this layer comes away in fine flakes, and newer, more even skin appears underneath. At the same time skin renewal and collagen production are stimulated.

By depth, peels fall into two main types:

- **Superficial peels** — act only on the top layer; recovery is quick and usually does not interfere with daily life. Often used for dullness, uneven tone and oily skin.
- **Medium peels** — work deeper; they have a stronger effect on post-acne marks, fine lines and pigment, but recovery takes longer and aftercare is stricter.

Which depth you need depends on your skin type, the problem and how much time you can give to recovery. On darker or sensitive skin the doctor usually starts with a gentler peel and watches how the skin reacts after the first session. A stronger peel does not always mean a better result.

## What can a peel help with?

- dull, "tired" skin;
- uneven skin tone;
- marks and mild unevenness after acne — more: [post-acne](/en/articles/art-postakne) and [post-acne as a condition](/en/conditions/postacne);
- fine lines;
- oily skin and enlarged pores;
- some pigment spots — about [skin spots](/en/conditions/teri-doglari).

## What a peel will not fix

- deep scars — these usually need laser or other methods;
- deep wrinkles and sagging skin;
- active inflamed acne — it needs treating first;
- every kind of pigment: some spots, especially melasma, need a careful plan; more: [melasma](/en/articles/art-melazma).

## Why autumn and winter?

After a peel the new skin is very sensitive to the sun. In summer, strong sunlight raises the risk of new pigment spots. In autumn and winter the sun is lower and days are shorter, so this is the usual season for a course of peels. Sunscreen is still needed in winter, though. For laser options for pigment: [treating pigment spots in winter](/en/articles/art-pigment-doglari-qishda).

## Contraindications

- active herpes (cold sores) — more: [herpes](/en/articles/art-gerpes);
- open wounds, scratches or active inflammation in the treatment area;
- pregnancy and breastfeeding — many peels are not done at this time;
- a fresh tan, including from a tanning bed;
- some acne medicines, taken by mouth or strong ones applied to the skin.

The doctor asks about and checks all of this at the consultation.

## How it goes at the clinic

1. **Consultation** — the doctor examines the skin, assesses its type and the problem, and rules out contraindications.
2. **Preparation** — sometimes home care is recommended for a few weeks before the procedure.
3. **The procedure** — the skin is cleansed, the solution is applied and left for a set time under the doctor's watch. Mild stinging or warmth is normal.
4. **A course** — results usually come from a course of several sessions, a few weeks apart.

The clinic uses professional peels, including PRX-T33, MCA-35 and T.C. Age by Innoaesthetics, and Me Line peel for pigmentation. The doctor chooses which one suits you based on your skin and your goal.

## After the peel: normal vs warning signs

Normal: redness, a feeling of tightness, light flaking for a few days.

Call the clinic straight away if:

- blisters or crusts appear;
- strong pain or burning does not settle;
- the face swells noticeably;
- pus spots or a herpes rash appear.

## Aftercare

- do not pick the flakes, rub the skin or use scrubs;
- gentle cleansing and a moisturiser;
- daily SPF — in winter and on cloudy days too;
- no sauna, steam bath or pool for a few days.

## The dangers of home acid peels and salons without a doctor

Strong acids bought online, or a peel done in a salon without a doctor, can cause burns, scars and new pigment spots. On darker skin in particular, spots after a wrong peel can last a long time. Only a doctor can properly judge your skin type and the right strength of solution.

Another option for oily skin and pores is laser cleansing: [carbon peel](/en/articles/art-karbon-piling).

## Chemical peels in Fergana and Kokand

At Radeski Skin Clinic a dermatologist-cosmetologist assesses your skin, chooses a suitable peel and follows the course.

- [Cosmetologist in Fergana](/en/fargona/kosmetolog) and [in Kokand](/en/qoqon/kosmetolog);
- [Acne treatment in Fergana](/en/fargona/akne-davolash) and [in Kokand](/en/qoqon/akne-davolash);
- [Pigmentation treatment in Fergana](/en/fargona/pigmentatsiya) and [in Kokand](/en/qoqon/pigmentatsiya);
- [Ultrasonic facial cleansing](/en/services/apparatnaya-kosmetologiya/ultratovush-yuz-tozalash) and [injectable cosmetology](/en/services/in-ekcionnaya-kosmetologiya).

A well-chosen peel under a doctor's eye is a safe way to bring back an even skin tone in autumn and winter.`;
}

export const CHEMICAL_PEEL_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Kimyoviy piling: teri qanday yangilanadi, yuzaki va o'rta piling, nimaga yordam beradi, nega kuz-qishda, qarshi ko'rsatmalar va parvarish. Farg'ona va Qo'qonda kosmetolog.",
    body: uzBody(),
    keyTakeaways: [
      "Kimyoviy piling — terining ustki qatlamini nazorat ostida ko'chirish va yangilash",
      "Xiralik, notekis rang, postakne dog'lari, mayda ajinlar va yog'li teriga yordam beradi",
      "Chuqur chandiq va osilgan terini tuzatmaydi; melazma alohida reja talab qiladi",
      "Kuz va qish — piling kursi uchun qulay vaqt, lekin SPF har kuni kerak",
      "Pilingni shifokor tanlaydi; uyda kuchli kislota kuyish va dog' qoldirishi mumkin",
    ],
    tags: ['Kimyoviy piling', 'Teri yangilanishi', 'Postakne', 'Pigmentatsiya', 'Kosmetolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Piling keyin pufakchalar yoki qobiqlar paydo bo'lsa",
      "Kuchli og'riq yoki achishish o'tmasa",
      "Yuz sezilarli shishsa",
      "Piling keyin yiringli toshma yoki gerpes chiqsa",
      "Uyda yoki salonda qilingan piling keyin dog'lar qolsa",
    ],
    faq: [
      {
        question: "Kimyoviy piling og'riqlimi?",
        answer:
          "Odatda yengil achishish yoki issiqlik seziladi, u muolaja tugagach tez o'tadi. O'rta pilinglarda sezgilar kuchliroq bo'lishi mumkin; shifokor jarayonni kuzatib boradi.",
      },
      {
        question: 'Nechta muolaja kerak?',
        answer:
          "Bu teri va maqsadga bog'liq. Odatda natija bir necha muolajadan iborat kursda keladi, oralig'i bir necha hafta. Aniq rejani shifokor konsultatsiyada tuzadi.",
      },
      {
        question: 'Piling keyin ishga chiqsa bo\'ladimi?',
        answer:
          "Yuzaki pilingdan keyin ko'pincha ha — faqat yengil qizarish va qipiqlanish bo'ladi. O'rta pilingdan keyin tiklanish uzoqroq, buni oldindan rejalashtirish kerak.",
      },
      {
        question: 'Yozda piling qilsa bo\'ladimi?',
        answer:
          "Ba'zi yengil pilinglar yil bo'yi qilinadi, lekin kuchli quyosh yangi dog'lar xavfini oshiradi. Shuning uchun kurs ko'pincha kuz-qishga rejalashtiriladi va har kuni SPF surtiladi.",
      },
      {
        question: "Farg'ona va Qo'qonda kimyoviy pilingni qayerda qilish mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog-kosmetolog terini baholaydi va mos pilingni tanlaydi. Saytda yoki +998 73 200-73-73 (Farg'ona) yoki +998 95 145 73 73 (Qo'qon) raqamlari orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Химический пилинг: как обновляется кожа, поверхностный и срединный пилинг, с чем помогает, почему осенью и зимой, противопоказания и уход. Косметолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Химический пилинг — контролируемое отшелушивание и обновление верхнего слоя кожи',
      'Помогает при тусклости, неровном тоне, следах постакне, мелких морщинах и жирной коже',
      'Не исправит глубокие рубцы и провисание; мелазма требует отдельного плана',
      'Осень и зима — удобное время для курса, но SPF нужен каждый день',
      'Пилинг подбирает врач; сильные кислоты дома могут оставить ожог и пятна',
    ],
    tags: ['Химический пилинг', 'Обновление кожи', 'Постакне', 'Пигментация', 'Косметолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'После пилинга появились пузыри или корочки',
      'Сильная боль или жжение не проходят',
      'Лицо заметно отекло',
      'После пилинга появились гнойнички или герпес',
      'После домашнего или салонного пилинга остались пятна',
    ],
    faq: [
      {
        question: 'Больно ли делать химический пилинг?',
        answer:
          'Обычно ощущается лёгкое пощипывание или тепло, которое быстро проходит после процедуры. При срединных пилингах ощущения могут быть сильнее; врач контролирует процесс.',
      },
      {
        question: 'Сколько нужно процедур?',
        answer:
          'Это зависит от кожи и цели. Обычно результат даёт курс из нескольких процедур с перерывом в несколько недель. Точный план врач составит на консультации.',
      },
      {
        question: 'Можно ли выйти на работу после пилинга?',
        answer:
          'После поверхностного пилинга чаще всего да — будут лишь лёгкое покраснение и шелушение. После срединного восстановление дольше, его лучше спланировать заранее.',
      },
      {
        question: 'Можно ли делать пилинг летом?',
        answer:
          'Некоторые мягкие пилинги делают круглый год, но яркое солнце повышает риск новых пятен. Поэтому курс чаще планируют на осень и зиму и ежедневно пользуются SPF.',
      },
      {
        question: 'Где сделать химический пилинг в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог-косметолог оценит кожу и подберёт подходящий пилинг. Записаться можно на сайте или по телефону +998 73 200-73-73 (Фергана) или +998 95 145 73 73 (Коканд).',
      },
    ],
  },
  en: {
    summary:
      'Chemical peels: how skin renews, superficial vs medium peels, what they help with, why autumn and winter, contraindications and aftercare. Cosmetologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'A chemical peel is a controlled exfoliation that renews the top layer of the skin',
      'It helps with dullness, uneven tone, post-acne marks, fine lines and oily skin',
      'It will not fix deep scars or sagging; melasma needs a separate plan',
      'Autumn and winter suit a course of peels, but daily SPF is still a must',
      'A doctor chooses the peel; strong acids at home can leave burns and spots',
    ],
    tags: ['Chemical peel', 'Skin renewal', 'Post-acne', 'Pigmentation', 'Cosmetologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Blisters or crusts appear after a peel',
      'Strong pain or burning does not settle',
      'The face swells noticeably',
      'Pus spots or herpes appear after a peel',
      'Spots remain after a home or salon peel',
    ],
    faq: [
      {
        question: 'Does a chemical peel hurt?',
        answer:
          'Usually there is mild stinging or warmth that fades quickly once the peel is finished. Medium peels can feel stronger; the doctor watches the process throughout.',
      },
      {
        question: 'How many sessions are needed?',
        answer:
          'It depends on your skin and goal. Results usually come from a course of several sessions a few weeks apart. The doctor draws up the exact plan at the consultation.',
      },
      {
        question: 'Can I go to work after a peel?',
        answer:
          'After a superficial peel, usually yes — there is only mild redness and flaking. Recovery after a medium peel takes longer, so it is best planned in advance.',
      },
      {
        question: 'Can I have a peel in summer?',
        answer:
          'Some gentle peels are done all year, but strong sun raises the risk of new spots. That is why a course is usually planned for autumn and winter, with sunscreen every day.',
      },
      {
        question: 'Where can I get a chemical peel in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist-cosmetologist assesses your skin and chooses a suitable peel. Book on the website or call +998 73 200-73-73 (Fergana) or +998 95 145 73 73 (Kokand).',
      },
    ],
  },
};

export const CHEMICAL_PEEL_ARTICLE: Article = {
  id: 'art-kimyoviy-piling',
  slug: 'kimyoviy-piling',
  title: {
    uz: "Kimyoviy piling: teri yangilanishi, kimga mos va nega kuz-qishda qilinadi",
    ru: 'Химический пилинг: обновление кожи, кому подходит и почему его делают осенью и зимой',
    en: 'Chemical Peels: Skin Renewal, Who They Suit and Why Autumn and Winter Are Best',
  },
  summary: {
    uz: CHEMICAL_PEEL_ARTICLE_CATALOG.uz.summary,
    ru: CHEMICAL_PEEL_ARTICLE_CATALOG.ru.summary,
    en: CHEMICAL_PEEL_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: CHEMICAL_PEEL_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: CHEMICAL_PEEL_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: CHEMICAL_PEEL_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Usmanova Mohinabonu Anvarovna',
    ru: 'Усманова Мохинабону Анваровна',
    en: 'Dr. Mohinabonu Anvarovna Usmanova',
  },
  date: '2026-11-28',
  image: '/articles/kimyoviy-piling-cover.jpg',
  images: {
    uz: '/articles/kimyoviy-piling-cover.jpg',
    ru: '/articles/kimyoviy-piling-cover.jpg',
    en: '/articles/kimyoviy-piling-cover.jpg',
  },
  views: 0,
};
