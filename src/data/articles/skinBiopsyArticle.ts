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
 * Skin biopsy — a patient guide meant to take the fear out of the word. Points: the doctor decides
 * after examination and dermoscopy; when it is needed; punch, shave and excisional types in plain
 * terms; local anaesthetic, minutes, sometimes a stitch; wound care and red flags; histology by a
 * dermatopathologist, result in days to about two weeks; the "biopsy spreads cancer" myth; next steps.
 */

function uzBody(): string {
  return `Teri biopsiyasi — terining kichik bir bo'lagini yoki shubhali hosilani butunligicha olib, mikroskop ostida tekshirish. Ko'p bemorlar "biopsiya" so'zini eshitganda qo'rqib ketadi: og'riydimi, chandiq qoladimi, bu saraton degani emasmi? Aslida biopsiya — tez, odatda kam og'riqli va xavfsiz muolaja. U tashxisni taxmindan aniq javobga aylantiradi. Quyida biopsiya qachon kerakligi, qanday o'tkazilishi va natija nimani anglatishini oddiy tilda tushuntiramiz.

## Teri biopsiyasi nima?

Olingan namuna laboratoriyaga yuboriladi. U yerda dermatopatolog — teri to'qimasini mikroskopda o'rganadigan mutaxassis — hujayralar tuzilishini ko'radi va hosila yoki toshmaning aniq tabiatini aytadi. Bu tekshiruv gistologiya deb ataladi. Dermatoskopiya terini tashqaridan kattalashtirib ko'rsatadi, gistologiya esa uning ichki tuzilishini ochib beradi. Batafsil: [dermatopatologiya](/uz/articles/art-dermatopatologiya-radeski).

## Biopsiya qachon kerak?

Biopsiya hammaga emas, faqat ko'rsatma bo'lganda qilinadi. Qarorni shifokor ko'rik va dermatoskopiyadan keyin qabul qiladi. Odatda u quyidagi hollarda tavsiya etiladi:

- **shubhali xol** — shakli, rangi yoki o'lchami o'zgarayotgan, boshqa xollardan ajralib turadigan; batafsil: [xol tekshiruvi va dermatoskopiya](/uz/articles/art-xol-tekshiruvi-dermatoskopiya);
- **bitmaydigan yara yoki tugun** — bir necha haftadan ko'p saqlanadigan, qonaydigan, qobiq bilan qoplanib yana ochiladigan; bunday belgilar [bazalioma](/uz/articles/art-bazalioma-teri-raki) kabi o'smalarda uchraydi;
- **noaniq toshma** — odatiy davolashga javob bermaydigan yoki bir nechta kasallikka o'xshaydigan;
- **davolashdan oldin tashxisni tasdiqlash** — ayrim surunkali teri kasalliklarida uzoq davolashni boshlashdan oldin aniq tashxis kerak;
- **olib tashlangan hosilani tekshirish** — yaxshi sifatli ko'ringan hosila olib tashlanganda ham shifokor uni gistologiyaga yuborishi mumkin; masalan: [seboreyali keratoz](/uz/articles/art-seboreyali-keratoz).

## Biopsiya turlari

Usulni shifokor hosilaning turi, o'lchami va joylashuviga qarab tanlaydi. Umumiy ma'noda uchta asosiy tur bor:

- **Punch-biopsiya** — maxsus yumaloq asbob bilan bir necha millimetrli teri ustunchasi olinadi; ko'pincha toshmalarda qo'llanadi.
- **Shave (tangensial) biopsiya** — hosilaning yuzaki qismi teri sathida yupqa qilib kesib olinadi; odatda chok kerak bo'lmaydi.
- **Eksizion biopsiya** — hosila atrofidagi ozgina sog'lom teri bilan birga butunligicha olib tashlanadi; shubhali xollarda ko'pincha shu usul afzal ko'riladi, chunki u bir vaqtning o'zida ham tashxis, ham davolash bo'lishi mumkin.

## Muolaja qanday o'tadi va og'riqlimi?

- Shifokor joyni belgilaydi va terini dezinfeksiya qiladi.
- Mahalliy og'riqsizlantirish qilinadi — faqat ingichka igna sanchilishi seziladi, keyin joy uvishadi.
- Namuna olish odatda bir necha daqiqa davom etadi; bosim sezilishi mumkin, lekin og'riq emas.
- Kerak bo'lsa bir-ikki chok qo'yiladi va steril bog'lam yopiladi.

Muolajadan keyin odatda darhol uyga ketish va kundalik ishlarni davom ettirish mumkin. Og'riqsizlantirish ta'siri o'tgach yengil achishish bo'lishi mumkin — bu normal holat.

## Biopsiyadan keyin parvarish

- Bog'lamni shifokor aytgan muddatgacha toza va quruq saqlang.
- Yarani shifokor tavsiya qilgan usulda parvarishlang, o'zingizcha vositalar surtmang.
- Chok bo'lsa, uni olish vaqtini shifokor aytadi.
- Birinchi kunlarda joyni ishqalamang, og'ir jismoniy yuklama va hammom-saunadan saqlaning.
- Ochiq joyda bo'lsa, bitgandan keyin quyoshdan himoya qiling — iz tezroq tiniqlashadi.

**Uyda qilmang:** qobiqni yulmang, yod, spirt yoki xalq vositalarini quymang, choklarni o'zingiz olmang.

**Shoshilinch murojaat qiling, agar:** yara atrofi kuchli qizarib, shishib, issiq bo'lsa, yiring chiqsa, qon bosib turganda ham to'xtamasa yoki isitma ko'tarilsa.

## Natija qachon tayyor va nima beradi?

Namuna gistologik laboratoriyada maxsus tayyorlanadi, bo'yaladi va dermatopatolog tomonidan o'rganiladi. Natija odatda bir necha kundan taxminan ikki haftagacha tayyor bo'ladi; qo'shimcha tekshiruv kerak bo'lsa, ko'proq vaqt olishi mumkin. Aniq muddatni sizga shifokor aytadi.

Gistologik xulosa quyidagilarni ko'rsatadi:

- hosila yaxshi sifatlimi yoki yomon sifatli;
- aniq tashxis — masalan, qaysi turdagi dermatit yoki o'sma;
- eksizion biopsiyada — hosila to'liq olib tashlanganmi (chetlar tozami).

## Keyingi qadamlar

Natijani shifokor siz bilan birga ko'rib chiqadi. Yaxshi sifatli hosilada ko'pincha qo'shimcha davolash kerak emas — faqat kuzatuv. Toshmada aniq tashxis asosida davolash rejasi tuziladi. Agar o'sma topilsa, onkodermatolog keyingi qadamni — qo'shimcha olib tashlash, jarrohlik yoki muntazam kuzatuvni — belgilaydi. Erta topilgan teri o'smalarining ko'pchiligi yaxshi davolanadi.

## Afsona: "Biopsiya saratonni tarqatadi"

Bu eng keng tarqalgan qo'rquv, lekin u to'g'ri emas. To'g'ri o'tkazilgan biopsiya o'smaning tarqalishiga sabab bo'lmaydi. Aksincha, xavfli narsa — biopsiyadan qo'rqib, shubhali hosilani oylab "kuzatib" yurish: bu vaqt yo'qotish demakdir. Biopsiya aniq javob beradi va to'g'ri davolashni o'z vaqtida boshlash imkonini beradi.

## Teri biopsiyasi Farg'ona va Qo'qonda

Radeski Skin Clinic'da shifokor avval ko'rik va dermatoskopiya o'tkazadi, biopsiya kerakligini aniqlaydi, uni mahalliy og'riqsizlantirishda bajaradi va namunani gistologik tekshiruvga yuboradi.

- [Teri biopsiyasi Farg'onada](/uz/fargona/biopsiya) va [Qo'qonda](/uz/qoqon/biopsiya);
- [Onkodermatolog Farg'onada](/uz/fargona/onko-dermatolog) va [Qo'qonda](/uz/qoqon/onko-dermatolog);
- [Xol tekshiruvi Farg'onada](/uz/fargona/xol-tekshiruvi) va [Qo'qonda](/uz/qoqon/xol-tekshiruvi);
- [Teri biopsiyasi va gistologiya](/uz/services/dermatoonkologiya/teri-biopsiyasi-va-gistologiya), [dermatopatologiya](/uz/services/dermatopatologiya).

Biopsiyadan qo'rqmang: bir necha daqiqalik muolaja taxmin o'rniga aniq javob beradi.`;
}

function ruBody(): string {
  return `Биопсия кожи — это взятие небольшого участка кожи или подозрительного образования целиком для исследования под микроскопом. Многие пугаются самого слова «биопсия»: будет ли больно, останется ли шрам, не значит ли это, что у меня рак? На самом деле биопсия — быстрая, обычно малоболезненная и безопасная процедура. Она превращает предположение в точный ответ. Ниже простыми словами — когда она нужна, как проходит и что означает результат.

## Что такое биопсия кожи?

Взятый материал отправляют в лабораторию. Там дерматопатолог — специалист, который изучает ткань кожи под микроскопом, — оценивает строение клеток и определяет точную природу образования или сыпи. Это исследование называется гистологией. Дерматоскопия увеличивает кожу снаружи, а гистология показывает её внутреннее строение. Подробнее: [дерматопатология](/ru/articles/art-dermatopatologiya-radeski).

## Когда нужна биопсия?

Биопсию делают не всем, а только по показаниям. Решение принимает врач после осмотра и дерматоскопии. Обычно её рекомендуют, если есть:

- **подозрительная родинка** — меняется форма, цвет или размер, она отличается от остальных; подробнее: [проверка родинок и дерматоскопия](/ru/articles/art-xol-tekshiruvi-dermatoskopiya);
- **незаживающая ранка или узелок** — держится дольше нескольких недель, кровоточит, покрывается корочкой и снова открывается; так может проявляться, например, [базалиома](/ru/articles/art-bazalioma-teri-raki);
- **непонятная сыпь** — не отвечает на обычное лечение или похожа сразу на несколько болезней;
- **нужно подтвердить диагноз перед лечением** — при некоторых хронических заболеваниях кожи до начала длительной терапии важен точный диагноз;
- **удалённое образование** — даже то, что выглядит доброкачественным, врач может отправить на гистологию; например: [себорейный кератоз](/ru/articles/art-seboreyali-keratoz).

## Виды биопсии

Метод врач выбирает по типу, размеру и расположению образования. В общих чертах есть три основных вида:

- **Панч-биопсия** — специальным круглым инструментом берут столбик кожи в несколько миллиметров; часто применяют при сыпи.
- **Шейв (тангенциальная) биопсия** — поверхностную часть образования тонко срезают на уровне кожи; шов обычно не нужен.
- **Эксцизионная биопсия** — образование удаляют целиком вместе с узкой полоской здоровой кожи; при подозрительных родинках её часто предпочитают, потому что она может быть одновременно и диагностикой, и лечением.

## Как проходит процедура и больно ли это?

- Врач размечает участок и обрабатывает кожу антисептиком.
- Делают местную анестезию — чувствуется только укол тонкой иглой, затем участок немеет.
- Сам забор материала обычно занимает несколько минут; можно ощущать давление, но не боль.
- При необходимости накладывают один-два шва и стерильную повязку.

После процедуры обычно можно сразу идти домой и заниматься привычными делами. Когда анестезия пройдёт, возможно лёгкое жжение — это нормально.

## Уход после биопсии

- Держите повязку чистой и сухой столько, сколько скажет врач.
- Ухаживайте за ранкой так, как рекомендовал врач, и не наносите ничего по своему усмотрению.
- Если есть шов, срок его снятия назначит врач.
- В первые дни не трите это место, избегайте тяжёлых нагрузок, бани и сауны.
- Если участок открытый, после заживления защищайте его от солнца — след быстрее посветлеет.

**Чего не делать дома:** не срывайте корочку, не заливайте ранку йодом, спиртом или народными средствами, не снимайте швы сами.

**Срочно обратитесь к врачу, если:** вокруг ранки сильное покраснение, отёк, она горячая, появился гной, кровь не останавливается при прижатии или поднялась температура.

## Когда будет результат и что он даёт?

В гистологической лаборатории материал специально обрабатывают, окрашивают и изучают под микроскопом. Результат обычно готов через несколько дней — примерно до двух недель; если нужны дополнительные исследования, это может занять больше времени. Точный срок вам скажет врач.

Гистологическое заключение показывает:

- доброкачественное образование или злокачественное;
- точный диагноз — например, какой вид дерматита или опухоли;
- при эксцизионной биопсии — удалено ли образование полностью (чистые ли края).

## Что дальше

Врач разбирает результат вместе с вами. При доброкачественном образовании дополнительное лечение часто не нужно — только наблюдение. При сыпи по точному диагнозу составляют план лечения. Если найдена опухоль, онкодерматолог определяет следующий шаг — дополнительное удаление, операцию или регулярное наблюдение. Большинство опухолей кожи, найденных рано, хорошо поддаются лечению.

## Миф: «биопсия разносит рак»

Это самый частый страх, но он неверен. Правильно выполненная биопсия не вызывает распространения опухоли. Опасно как раз обратное — из страха перед биопсией месяцами «наблюдать» подозрительное образование: так теряется время. Биопсия даёт точный ответ и позволяет вовремя начать правильное лечение.

## Биопсия кожи в Фергане и Коканде

В Radeski Skin Clinic врач сначала проводит осмотр и дерматоскопию, определяет, нужна ли биопсия, выполняет её под местной анестезией и отправляет материал на гистологическое исследование.

- [Биопсия кожи в Фергане](/ru/fargona/biopsiya) и [в Коканде](/ru/qoqon/biopsiya);
- [Онкодерматолог в Фергане](/ru/fargona/onko-dermatolog) и [в Коканде](/ru/qoqon/onko-dermatolog);
- [Проверка родинок в Фергане](/ru/fargona/xol-tekshiruvi) и [в Коканде](/ru/qoqon/xol-tekshiruvi);
- [Биопсия кожи и гистология](/ru/services/dermatoonkologiya/teri-biopsiyasi-va-gistologiya), [дерматопатология](/ru/services/dermatopatologiya).

Не бойтесь биопсии: несколько минут процедуры дают точный ответ вместо догадок.`;
}

function enBody(): string {
  return `A skin biopsy means taking a small piece of skin, or a suspicious spot as a whole, to examine it under a microscope. Many people are frightened by the word itself: will it hurt, will it scar, does it mean I have cancer? In reality a biopsy is a quick, usually only mildly uncomfortable and safe procedure. It turns a guess into a clear answer. Here, in plain words, is when it is needed, how it is done and what the result means.

## What is a skin biopsy?

The sample is sent to a laboratory. There a dermatopathologist — a specialist who studies skin tissue under the microscope — looks at how the cells are arranged and identifies the exact nature of the growth or rash. This test is called histology. Dermoscopy magnifies the skin from the outside; histology shows its inner structure. More: [dermatopathology](/en/articles/art-dermatopatologiya-radeski).

## When is a biopsy needed?

A biopsy is not done for everyone, only when there is a reason. The doctor decides after an examination and dermoscopy. It is usually recommended for:

- **a suspicious mole** — one that changes shape, colour or size, or stands out from the others; more: [mole check and dermoscopy](/en/articles/art-xol-tekshiruvi-dermatoskopiya);
- **a sore or bump that does not heal** — lasting more than a few weeks, bleeding, crusting over and opening again; this can be a sign of a tumour such as [basal cell carcinoma](/en/articles/art-bazalioma-teri-raki);
- **an unclear rash** — one that does not respond to usual treatment or looks like several conditions at once;
- **confirming a diagnosis before treatment** — in some chronic skin diseases an exact diagnosis matters before long-term therapy starts;
- **a removed growth** — even one that looks benign may be sent to histology; for example: [seborrheic keratosis](/en/articles/art-seboreyali-keratoz).

## Types of biopsy

The doctor chooses the method by the type, size and location of the lesion. Broadly, there are three main types:

- **Punch biopsy** — a small round instrument takes a core of skin a few millimetres wide; often used for rashes.
- **Shave (tangential) biopsy** — the top part of the lesion is sliced off thinly at skin level; usually no stitch is needed.
- **Excisional biopsy** — the whole lesion is removed with a narrow margin of healthy skin; it is often preferred for suspicious moles because it can be both diagnosis and treatment at once.

## How is it done, and does it hurt?

- The doctor marks the area and disinfects the skin.
- A local anaesthetic is given — you feel only the prick of a fine needle, then the area goes numb.
- Taking the sample usually takes a few minutes; you may feel pressure, but not pain.
- If needed, one or two stitches are placed and a sterile dressing applied.

You can usually go home straight away and carry on with your day. Mild stinging once the anaesthetic wears off is normal.

## Care after a biopsy

- Keep the dressing clean and dry for as long as the doctor advises.
- Care for the wound the way the doctor recommends and do not apply anything on your own.
- If there is a stitch, the doctor will tell you when it comes out.
- For the first days avoid rubbing the area, heavy exercise, saunas and steam baths.
- If the site is exposed, protect it from the sun once healed — the mark fades faster.

**Do not at home:** pick off the scab, pour iodine, alcohol or home remedies on the wound, or remove stitches yourself.

**See a doctor urgently if:** the area becomes very red, swollen or hot, there is pus, bleeding does not stop with pressure, or you develop a fever.

## When is the result ready and what does it tell you?

In the histology lab the sample is specially processed, stained and examined. The result is usually ready in a few days to about two weeks; if extra tests are needed, it may take longer. Your doctor will tell you the exact timing.

The histology report shows:

- whether the lesion is benign or malignant;
- the exact diagnosis — for example, which type of dermatitis or tumour;
- after an excisional biopsy — whether the lesion was removed completely (clear margins).

## Next steps

The doctor goes through the result with you. A benign lesion often needs no further treatment, only follow-up. For a rash, a treatment plan is made based on the exact diagnosis. If a tumour is found, the onco-dermatologist decides the next step — further removal, surgery or regular follow-up. Most skin tumours found early respond well to treatment.

## Myth: "a biopsy spreads cancer"

This is the most common fear, and it is not true. A properly performed biopsy does not make a tumour spread. The real risk is the opposite: being afraid of a biopsy and "watching" a suspicious spot for months, losing valuable time. A biopsy gives a clear answer and lets the right treatment start on time.

## Skin biopsy in Fergana and Kokand

At Radeski Skin Clinic the doctor first carries out an examination and dermoscopy, decides whether a biopsy is needed, performs it under local anaesthetic and sends the sample for histology.

- [Skin biopsy in Fergana](/en/fargona/biopsiya) and [in Kokand](/en/qoqon/biopsiya);
- [Onco-dermatologist in Fergana](/en/fargona/onko-dermatolog) and [in Kokand](/en/qoqon/onko-dermatolog);
- [Mole check in Fergana](/en/fargona/xol-tekshiruvi) and [in Kokand](/en/qoqon/xol-tekshiruvi);
- [Skin biopsy and histology](/en/services/dermatoonkologiya/teri-biopsiyasi-va-gistologiya), [dermatopathology](/en/services/dermatopatologiya).

Do not fear a biopsy: a few minutes of procedure give you a clear answer instead of guesswork.`;
}

export const SKIN_BIOPSY_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Teri biopsiyasi: qachon kerak, qanday o'tkaziladi, og'riqlimi, keyingi parvarish va gistologik natija qachon tayyor bo'ladi. Farg'ona va Qo'qonda onkodermatolog.",
    body: uzBody(),
    keyTakeaways: [
      "Biopsiya kerakligini shifokor ko'rik va dermatoskopiyadan keyin hal qiladi",
      "Muolaja mahalliy og'riqsizlantirishda bir necha daqiqa davom etadi, ba'zan bir-ikki chok qo'yiladi",
      "Asosiy turlari: punch, shave (tangensial) va eksizion — hosila butunligicha olinadi",
      "Natija odatda bir necha kundan taxminan ikki haftagacha tayyor bo'ladi; aniq muddatni shifokor aytadi",
      "To'g'ri o'tkazilgan biopsiya saratonni tarqatmaydi — xavfli narsa tekshiruvni kechiktirish",
    ],
    tags: ['Teri biopsiyasi', 'Gistologiya', 'Dermatopatologiya', 'Shubhali xol', 'Onkodermatolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Xolning shakli, rangi yoki o'lchami o'zgarsa",
      "Yara yoki tugun bir necha hafta ichida bitmasa yoki qonasa",
      "Toshma odatiy davolashga javob bermasa",
      "Biopsiya joyi kuchli qizarib, shishib, yiring chiqsa yoki isitma ko'tarilsa",
      "Biopsiya joyidan qon bosib turganda ham to'xtamasa",
    ],
    faq: [
      {
        question: "Teri biopsiyasi og'riqlimi?",
        answer:
          "Mahalliy og'riqsizlantirish qilingani uchun faqat ingichka igna sanchilishi seziladi. Namuna olish paytida bosim sezilishi mumkin, lekin og'riq odatda bo'lmaydi.",
      },
      {
        question: 'Biopsiyadan keyin chandiq qoladimi?',
        answer:
          "Odatda kichik iz qoladi va vaqt o'tishi bilan tiniqlashadi. Shifokor tavsiyalariga rioya qilish va bitgandan keyin quyoshdan himoya iz kamroq sezilishiga yordam beradi.",
      },
      {
        question: 'Natija qachon tayyor bo\'ladi?',
        answer:
          "Odatda bir necha kundan taxminan ikki haftagacha. Qo'shimcha tekshiruv kerak bo'lsa, ko'proq vaqt olishi mumkin. Aniq muddatni shifokor aytadi.",
      },
      {
        question: 'Biopsiya saratonni tarqatishi mumkinmi?',
        answer:
          "Yo'q, bu keng tarqalgan afsona. To'g'ri o'tkazilgan biopsiya o'smaning tarqalishiga sabab bo'lmaydi. Xavfli narsa — shubhali hosilani tekshirmasdan uzoq kuzatib yurish.",
      },
      {
        question: "Farg'ona va Qo'qonda teri biopsiyasini qayerda qilish mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida shifokor ko'rik va dermatoskopiyadan keyin biopsiya kerakligini aniqlaydi va namunani gistologik tekshiruvga yuboradi. Saytda yoki +998 73 200-73-73 (Farg'ona) yoki +998 95 145 73 73 (Qo'qon) raqamlari orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Биопсия кожи: когда нужна, как проходит, больно ли это, уход после процедуры и когда готов гистологический результат. Онкодерматолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Нужна ли биопсия, решает врач после осмотра и дерматоскопии',
      'Процедура длится несколько минут под местной анестезией, иногда накладывают один-два шва',
      'Основные виды: панч, шейв (тангенциальная) и эксцизионная — образование удаляют целиком',
      'Результат обычно готов через несколько дней — примерно до двух недель; точный срок скажет врач',
      'Правильно выполненная биопсия не разносит рак — опасно откладывать проверку',
    ],
    tags: ['Биопсия кожи', 'Гистология', 'Дерматопатология', 'Подозрительная родинка', 'Онкодерматолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Родинка меняет форму, цвет или размер',
      'Ранка или узелок не заживает несколько недель или кровоточит',
      'Сыпь не проходит при обычном лечении',
      'Место биопсии сильно покраснело, отекло, появился гной или температура',
      'Кровь из места биопсии не останавливается при прижатии',
    ],
    faq: [
      {
        question: 'Больно ли делать биопсию кожи?',
        answer:
          'Под местной анестезией чувствуется только укол тонкой иглой. Во время забора материала возможно ощущение давления, но боли обычно нет.',
      },
      {
        question: 'Остаётся ли шрам после биопсии?',
        answer:
          'Обычно остаётся небольшой след, который со временем светлеет. Соблюдение рекомендаций врача и защита от солнца после заживления делают его менее заметным.',
      },
      {
        question: 'Когда будет готов результат?',
        answer:
          'Обычно через несколько дней — примерно до двух недель. Если нужны дополнительные исследования, срок может быть больше. Точный срок скажет врач.',
      },
      {
        question: 'Может ли биопсия разнести рак?',
        answer:
          'Нет, это распространённый миф. Правильно выполненная биопсия не вызывает распространения опухоли. Опасно другое — долго наблюдать подозрительное образование без проверки.',
      },
      {
        question: 'Где сделать биопсию кожи в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде врач после осмотра и дерматоскопии определит, нужна ли биопсия, и отправит материал на гистологию. Записаться можно на сайте или по телефону +998 73 200-73-73 (Фергана) или +998 95 145 73 73 (Коканд).',
      },
    ],
  },
  en: {
    summary:
      'Skin biopsy: when it is needed, how it is done, whether it hurts, aftercare and when the histology result is ready. Onco-dermatologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'The doctor decides whether a biopsy is needed after an examination and dermoscopy',
      'It takes a few minutes under local anaesthetic, sometimes with one or two stitches',
      'Main types: punch, shave (tangential) and excisional — the whole lesion is removed',
      'The result is usually ready in a few days to about two weeks; the doctor tells you the exact timing',
      'A properly performed biopsy does not spread cancer — delaying the check is the real risk',
    ],
    tags: ['Skin biopsy', 'Histology', 'Dermatopathology', 'Suspicious mole', 'Onco-dermatologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A mole changes shape, colour or size',
      'A sore or bump does not heal within a few weeks or bleeds',
      'A rash does not respond to usual treatment',
      'The biopsy site becomes very red, swollen, has pus or you get a fever',
      'Bleeding from the biopsy site does not stop with pressure',
    ],
    faq: [
      {
        question: 'Does a skin biopsy hurt?',
        answer:
          'With a local anaesthetic you feel only the prick of a fine needle. You may feel pressure while the sample is taken, but usually no pain.',
      },
      {
        question: 'Will a biopsy leave a scar?',
        answer:
          'Usually a small mark remains and fades over time. Following the doctor\'s advice and protecting the site from the sun once healed make it less noticeable.',
      },
      {
        question: 'When will the result be ready?',
        answer:
          'Usually in a few days to about two weeks. If extra tests are needed, it may take longer. Your doctor will tell you the exact timing.',
      },
      {
        question: 'Can a biopsy spread cancer?',
        answer:
          'No, this is a common myth. A properly performed biopsy does not make a tumour spread. The real danger is watching a suspicious spot for a long time without checking it.',
      },
      {
        question: 'Where can I have a skin biopsy in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand the doctor decides after an examination and dermoscopy whether a biopsy is needed and sends the sample for histology. Book on the website or call +998 73 200-73-73 (Fergana) or +998 95 145 73 73 (Kokand).',
      },
    ],
  },
};

export const SKIN_BIOPSY_ARTICLE: Article = {
  id: 'art-teri-biopsiyasi',
  slug: 'teri-biopsiyasi',
  title: {
    uz: "Teri biopsiyasi: qachon kerak, qanday o'tkaziladi va natija nimani ko'rsatadi",
    ru: 'Биопсия кожи: когда нужна, как проходит и что показывает результат',
    en: 'Skin Biopsy: When It Is Needed, How It Is Done and What the Result Shows',
  },
  summary: {
    uz: SKIN_BIOPSY_ARTICLE_CATALOG.uz.summary,
    ru: SKIN_BIOPSY_ARTICLE_CATALOG.ru.summary,
    en: SKIN_BIOPSY_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: SKIN_BIOPSY_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: SKIN_BIOPSY_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: SKIN_BIOPSY_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: "Yo'qubov Farrux Farhodjonovich",
    ru: 'Якубов Фаррух Фарходжонович',
    en: 'Dr. Farrukh Farhodjonovich Yoqubov',
  },
  date: '2026-11-22',
  image: '/articles/teri-biopsiyasi-cover.jpg',
  images: {
    uz: '/articles/teri-biopsiyasi-cover.jpg',
    ru: '/articles/teri-biopsiyasi-cover.jpg',
    en: '/articles/teri-biopsiyasi-cover.jpg',
  },
  views: 0,
};
