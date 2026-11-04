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
 * Lichen planus — itchy flat purple-red bumps that people often mistake for "fungus".
 * Points: an immune-related inflammation, not contagious and not a fungus; skin, mouth, nail,
 * scalp (scarring hair loss — see a trichologist quickly) and genital forms; triggers (stress,
 * some medicines, hepatitis C in some patients); course; dermoscopy and biopsy; doctor-led
 * treatment incl. phototherapy; what not to do; how it differs from pityriasis rosea and psoriasis.
 */

function uzBody(): string {
  return `Qizil yassi temiratki (lixen planus) — teri, og'iz bo'shlig'i, tirnoqlar va ba'zan soch qoplamida uchraydigan surunkali yallig'lanish kasalligi. U ko'pincha kattalarda uchraydi va kuchli qichishish bilan bezovta qiladi. Nomida "temiratki" so'zi bo'lgani uchun ko'pchilik uni zamburug' deb o'ylaydi va zamburug'ga qarshi krem surtadi — bu xato. Kasallikni erta va to'g'ri tanib olish davolashni osonlashtiradi va asoratlarning oldini oladi.

## Qizil yassi temiratki nima?

Bu immunitet tizimining terining o'z hujayralariga qarshi noto'g'ri reaksiyasi bilan bog'liq yallig'lanish. Eng muhim narsalar:

- **yuqumli emas** — oila a'zolariga, umumiy idish, sochiq yoki teginish orqali o'tmaydi;
- **zamburug' ham, mikrob ham emas** — shuning uchun zamburug'ga qarshi vositalar yordam bermaydi;
- **saraton emas**, lekin og'iz shaklida shifokorning muntazam kuzatuvi zarur.

## Sabablari va qo'zg'atuvchi omillar

Aniq sababi hali to'liq ma'lum emas. Asosiy rolni immun reaksiya o'ynaydi, uni quyidagilar qo'zg'atishi mumkin:

- **kuchli stress**, charchoq va uyqusizlik;
- **ba'zi dori vositalari** — toshma dori bilan bog'liq bo'lishi mumkin; dorini o'zingiz to'xtatmang, uni tayinlagan shifokor bilan maslahatlashing;
- **gepatit C** — ba'zi bemorlarda qizil yassi temiratki shu infeksiya bilan birga uchraydi, shuning uchun shifokor qon tahlillarini buyurishi mumkin;
- **og'izda** — o'tkir tish qirralari, noqulay protez yoki plombalarning doimiy ta'sirlashi.

## Belgilari

**Terida** — mayda, yassi, yaltiroq, binafsha-qizil tugunchalar. Ular ko'pincha bilak va bilakning ichki tomonida, boldirda, belning pastki qismida chiqadi va bir-biriga qo'shilib kattaroq dog'lar hosil qilishi mumkin. Boshqa belgilar:

- qichishish — ko'pincha kuchli, ayniqsa kechasi;
- tugunchalar yuzasida mayda oq chiziqlar yoki nozik to'r — shifokorlar uni Uikhem to'ri deyishadi;
- tirnalgan yoki shikastlangan joy bo'ylab, chiziq shaklida yangi tugunchalar paydo bo'lishi.

**Og'izda** — lunjning ichki yuzasida oq, to'rsimon, xuddi to'qilgan ipga o'xshash dog'lar. Ko'pincha og'rimaydi, lekin ba'zan qizarish va og'riqli yaralar paydo bo'ladi, achchiq va issiq taom achishtiradi.

**Tirnoqlarda** — tirnoq yupqalashadi, bo'ylama chiziqlar va yoriqlar paydo bo'ladi, og'ir hollarda tirnoq yo'qolishi mumkin.

**Boshda** — soch to'kilgan, qizargan o'choqlar. Bu shakl chandiq qoldirib, o'sha joyda sochni butunlay yo'qotishga olib kelishi mumkin, shuning uchun trixologga tezroq murojaat qilish kerak.

**Jinsiy a'zolarda** — tugunchalar yoki oq dog'lar, ba'zan og'riqli yaralar. Uyalmasdan dermatovenerologga ko'rining.

Qichishishning boshqa sabablari haqida: [teri qichishi](/uz/articles/art-teri-qichishi).

## Kasallik qancha davom etadi?

Teridagi shakl ko'pincha bir necha oydan bir-ikki yilgacha davom etadi va asta-sekin so'nadi. Og'iz shakli uzoqroq, ba'zan yillar davomida saqlanadi — bunda shifokor ko'rigiga muntazam kelib turish kerak, chunki og'izdagi uzoq yaralarni nazorat qilish muhim. Tuzalgandan keyin terida to'q jigarrang dog'lar qolishi mumkin; ular oylar davomida sekin oqaradi.

## Qachon shifokorga tezroq murojaat qilish kerak?

- og'izda bitmaydigan, kattalashib boradigan yara yoki qattiqlashgan joy paydo bo'lsa;
- boshda soch o'choq-o'choq to'kila boshlasa;
- toshma tez tarqalib, tananing katta qismini egallasa;
- jinsiy a'zolarda og'riqli yaralar bo'lsa;
- yangi dori qabul qila boshlagandan keyin toshma chiqsa;
- qichishish uyqu va ishga xalaqit bersa.

## Uyda nima qilmaslik kerak?

- "Zamburug'" deb o'zingiz zamburug'ga qarshi krem surtmang — u yordam bermaydi, vaqt esa o'tadi.
- Tirnamang: tirnalgan joyda yangi tugunchalar chiqadi.
- Tanishlarning maslahati bilan tasodifiy malhamlar, gormonli kremlar, spirt yoki sirka surtmang.
- Og'iz shaklida achchiq, juda issiq taom va chekishdan saqlaning.

## Klinikada tashxis qanday qo'yiladi?

Dermatolog terini, og'iz bo'shlig'ini, tirnoqlar va sochni ko'zdan kechiradi. **Dermatoskopiya** oq chiziqlarni va tugunchalar tuzilishini aniq ko'rsatadi. Tashxis shubhali bo'lsa yoki og'izda uzoq yara bo'lsa, kichik **biopsiya** olinadi — batafsil: [teri biopsiyasi](/uz/articles/art-teri-biopsiyasi). Kerak bo'lsa shifokor gepatit C va boshqa qon tahlillarini buyuradi.

Qizil yassi temiratkini o'xshash kasalliklardan ajratish kerak:

- **pushti temiratki** — tanada oval pushti dog'lar, odatda avval bitta katta "ona dog'" chiqadi va kasallik bir necha haftada o'tadi; batafsil: [pushti temiratki](/uz/articles/art-pushti-temiratki);
- **psoriaz** — kumushrang qipiqli pilakchalar, ko'pincha tirsak, tizza va boshda; batafsil: [psoriaz](/uz/articles/art-psoriaz-tashxis-davolash-radeski).

## Davolash

Davolashni faqat shifokor tanlaydi — kasallik shakli, tarqalishi va bemorning umumiy holatiga qarab:

- **mahalliy yallig'lanishga qarshi vositalar** — shifokor tayinlagan krem yoki surtmalar, og'iz uchun maxsus vositalar;
- **fototerapiya** — toshma keng tarqalgan bo'lsa, ultrabinafsha nurlar bilan shifokor nazoratida davolash; batafsil: [dermatovenerologiyada fizioterapiya](/uz/articles/art-fizioterapiya-dermatovenereologiya);
- **boshqa usullar** — og'ir yoki uzoq davom etadigan hollarda shifokor tanlaydigan umumiy davolash.

Davolash boshlangach, qichishish odatda kamayadi. Qolgan dog'lar tezroq oqarishi uchun shifokor quyoshdan himoyani maslahat beradi.

## Kundalik parvarish

- Terini yumshoq vositalar bilan yuving va namlantiruvchi krem surting.
- Qattiq, ishqalaydigan kiyimdan voz keching.
- Stressni kamaytirishga va yetarli uxlashga harakat qiling.
- Og'iz shaklida tishlarni yumshoq cho'tka bilan tozalang va stomatologga muntazam boring.

## Farg'ona va Qo'qonda qizil yassi temiratkini davolash

Radeski Skin Clinic'da dermatovenerolog tashxisni aniqlaydi, kasallikni o'xshash holatlardan ajratadi va davolash rejasini tuzadi. Soch qoplamida o'zgarish bo'lsa, trixolog ham ko'radi.

- [Dermatolog Farg'onada](/uz/fargona/dermatolog) va [Qo'qonda](/uz/qoqon/dermatolog);
- [Trixolog Farg'onada](/uz/fargona/trixolog) va [Qo'qonda](/uz/qoqon/trixolog);
- [Dermatologiya](/uz/services/dermatologiya) va [fototerapiya](/uz/services/dermatologiya/fototerapiya).

Qizil yassi temiratki yuqumli emas va davolanadi — muhimi, uni zamburug' deb o'zingiz davolamang.`;
}

function ruBody(): string {
  return `Красный плоский лишай (лихен планус) — хроническое воспалительное заболевание, которое поражает кожу, слизистую рта, ногти, а иногда и волосистую часть головы. Чаще оно встречается у взрослых и сильно беспокоит зудом. Из-за слова «лишай» в названии многие считают его грибком и мажут противогрибковыми кремами — это ошибка. Чем раньше болезнь правильно распознана, тем проще лечение и меньше риск осложнений.

## Что такое красный плоский лишай?

Это воспаление, связанное с ошибочной реакцией иммунной системы против собственных клеток кожи. Главное, что нужно знать:

- **он не заразен** — не передаётся родным через посуду, полотенца или прикосновения;
- **это не грибок и не бактерия** — поэтому противогрибковые средства не помогают;
- **это не рак**, но при поражении рта нужно регулярное наблюдение врача.

## Причины и провоцирующие факторы

Точная причина до конца не известна. Главную роль играет иммунная реакция, а запустить её могут:

- **сильный стресс**, переутомление и недосып;
- **некоторые лекарства** — сыпь может быть связана с препаратом; не отменяйте его сами, обсудите это с врачом, который его назначил;
- **гепатит C** — у части пациентов красный плоский лишай сочетается с этой инфекцией, поэтому врач может назначить анализы крови;
- **во рту** — постоянное раздражение острыми краями зубов, неудобными протезами или пломбами.

## Симптомы

**На коже** — мелкие плоские блестящие узелки фиолетово-красного цвета. Чаще всего они появляются на запястьях и внутренней стороне предплечий, на голенях, на пояснице и могут сливаться в более крупные бляшки. Другие признаки:

- зуд — часто сильный, особенно ночью;
- на поверхности узелков — тонкие белые линии или нежная сеточка, врачи называют её сеткой Уикхема;
- новые узелки, появляющиеся полосой вдоль царапины или места травмы.

**Во рту** — белые кружевные, похожие на сеточку участки на внутренней поверхности щёк. Обычно они не болят, но иногда появляются покраснение и болезненные язвочки, острая и горячая еда вызывает жжение.

**На ногтях** — ноготь истончается, появляются продольные бороздки и трещины, в тяжёлых случаях ноготь может быть утрачен.

**На голове** — покрасневшие очаги выпадения волос. Эта форма может оставлять рубцы, и волосы на этом месте уже не вырастут, поэтому к трихологу нужно обратиться как можно скорее.

**На половых органах** — узелки или белые пятна, иногда болезненные эрозии. Не стесняйтесь показаться дерматовенерологу.

О других причинах зуда: [зуд кожи](/ru/articles/art-teri-qichishi).

## Сколько длится болезнь?

Кожная форма обычно длится от нескольких месяцев до года-двух и постепенно затихает. Форма во рту держится дольше, иногда годами, — в этом случае нужны регулярные осмотры, потому что длительные язвы во рту важно контролировать. После заживления на коже могут остаться тёмно-коричневые пятна; они светлеют медленно, в течение месяцев.

## Когда обратиться к врачу без промедления?

- во рту появилась незаживающая или растущая язва, уплотнение;
- на голове начали выпадать волосы очагами;
- сыпь быстро распространяется и занимает большую часть тела;
- на половых органах болезненные язвочки;
- сыпь появилась после начала приёма нового лекарства;
- зуд мешает спать и работать.

## Чего не делать дома?

- Не лечите «грибок» сами противогрибковыми кремами — они не помогут, а время уйдёт.
- Не расчёсывайте: на месте царапин появляются новые узелки.
- Не мажьте случайные мази по совету знакомых, гормональные кремы, спирт или уксус.
- При форме во рту избегайте острой и очень горячей еды и курения.

## Как ставят диагноз в клинике?

Дерматолог осматривает кожу, полость рта, ногти и волосы. **Дерматоскопия** хорошо показывает белые линии и строение узелков. Если диагноз сомнителен или во рту давно не заживает язва, берут небольшую **биопсию** — подробнее: [биопсия кожи](/ru/articles/art-teri-biopsiyasi). При необходимости врач назначит анализ на гепатит C и другие анализы крови.

Красный плоский лишай нужно отличать от похожих болезней:

- **розовый лишай** — овальные розовые пятна на теле, обычно сначала появляется одна крупная «материнская бляшка», и болезнь проходит за несколько недель; подробнее: [розовый лишай](/ru/articles/art-pushti-temiratki);
- **псориаз** — бляшки с серебристыми чешуйками, чаще на локтях, коленях и голове; подробнее: [псориаз](/ru/articles/art-psoriaz-tashxis-davolash-radeski).

## Лечение

Лечение выбирает только врач — по форме болезни, её распространённости и общему состоянию пациента:

- **местные противовоспалительные средства** — кремы или мази, назначенные врачом, специальные средства для рта;
- **фототерапия** — при распространённой сыпи лечение ультрафиолетом под контролем врача; подробнее: [физиотерапия в дерматовенерологии](/ru/articles/art-fizioterapiya-dermatovenereologiya);
- **другие методы** — общее лечение, которое врач подбирает при тяжёлом или затяжном течении.

После начала лечения зуд обычно уменьшается. Чтобы оставшиеся пятна светлели быстрее, врач посоветует защиту от солнца.

## Повседневный уход

- Мойте кожу мягкими средствами и наносите увлажняющий крем.
- Откажитесь от жёсткой, натирающей одежды.
- Старайтесь снизить стресс и высыпаться.
- При форме во рту чистите зубы мягкой щёткой и регулярно посещайте стоматолога.

## Лечение красного плоского лишая в Фергане и Коканде

В Radeski Skin Clinic дерматовенеролог уточнит диагноз, отличит болезнь от похожих состояний и составит план лечения. При изменениях на коже головы пациента осмотрит и трихолог.

- [Дерматолог в Фергане](/ru/fargona/dermatolog) и [в Коканде](/ru/qoqon/dermatolog);
- [Трихолог в Фергане](/ru/fargona/trixolog) и [в Коканде](/ru/qoqon/trixolog);
- [Дерматология](/ru/services/dermatologiya) и [фототерапия](/ru/services/dermatologiya/fototerapiya).

Красный плоский лишай не заразен и поддаётся лечению — главное, не лечите его сами как грибок.`;
}

function enBody(): string {
  return `Lichen planus is a long-lasting inflammatory condition that affects the skin, the inside of the mouth, the nails and sometimes the scalp. It mostly appears in adults and is often very itchy. Because its Uzbek and Russian names sound like "ringworm", many people assume it is a fungus and apply antifungal creams — a mistake. The sooner it is recognised correctly, the easier it is to treat and the lower the risk of complications.

## What is lichen planus?

It is inflammation caused by the immune system mistakenly reacting against the body's own skin cells. The key facts:

- **it is not contagious** — it does not pass to family members through dishes, towels or touch;
- **it is not a fungus or a bacterial infection** — so antifungal products do not help;
- **it is not cancer**, but the mouth form needs regular check-ups with a doctor.

## Causes and triggers

The exact cause is not fully understood. An immune reaction plays the main role, and it can be set off by:

- **severe stress**, exhaustion and lack of sleep;
- **some medicines** — the rash may be linked to a drug; do not stop it yourself, discuss it with the doctor who prescribed it;
- **hepatitis C** — in some patients lichen planus occurs together with this infection, so the doctor may order blood tests;
- **in the mouth** — constant irritation from sharp tooth edges, poorly fitting dentures or fillings.

## Signs

**On the skin** — small, flat, shiny purple-red bumps. They most often appear on the wrists and inner forearms, the shins and the lower back, and can merge into larger patches. Other signs:

- itching — often strong, especially at night;
- fine white lines or a delicate net on the surface of the bumps — doctors call them Wickham striae;
- new bumps appearing in a line along a scratch or an injury.

**In the mouth** — white, lacy, net-like patches on the inside of the cheeks. They are usually painless, but sometimes redness and painful sores appear, and spicy or hot food stings.

**On the nails** — the nail thins, lengthwise ridges and splits appear, and in severe cases the nail can be lost.

**On the scalp** — red patches of hair loss. This form can leave scarring, after which hair no longer grows in that spot, so see a trichologist quickly.

**On the genitals** — bumps or white patches, sometimes painful sores. Do not feel embarrassed to see a dermatovenereologist.

For other causes of itching: [itchy skin](/en/articles/art-teri-qichishi).

## How long does it last?

The skin form usually lasts from a few months to a year or two and fades gradually. The mouth form lasts longer, sometimes for years — it needs regular check-ups, because long-standing mouth sores should be monitored. After healing, dark brown spots may remain on the skin; they fade slowly over months.

## When to see a doctor promptly

- a mouth sore that does not heal, grows or feels hard;
- patchy hair loss on the scalp;
- a rash that spreads quickly over a large part of the body;
- painful sores on the genitals;
- a rash that started after a new medicine;
- itching that disturbs sleep or work.

## What not to do at home

- Do not treat it yourself as "fungus" with antifungal creams — they will not help, and time is lost.
- Do not scratch: new bumps appear where the skin is scratched.
- Do not apply random ointments recommended by friends, steroid creams, alcohol or vinegar.
- With the mouth form, avoid spicy or very hot food and smoking.

## How the clinic makes the diagnosis

The dermatologist examines the skin, mouth, nails and hair. **Dermoscopy** clearly shows the white lines and the structure of the bumps. If the diagnosis is uncertain or a mouth sore has lasted a long time, a small **biopsy** is taken — more: [skin biopsy](/en/articles/art-teri-biopsiyasi). If needed, the doctor orders a hepatitis C test and other blood tests.

Lichen planus has to be told apart from similar conditions:

- **pityriasis rosea** — oval pink patches on the body, usually starting with one larger "herald patch", and it clears within a few weeks; more: [pityriasis rosea](/en/articles/art-pushti-temiratki);
- **psoriasis** — plaques with silvery scale, most often on the elbows, knees and scalp; more: [psoriasis](/en/articles/art-psoriaz-tashxis-davolash-radeski).

## Treatment

Only a doctor chooses the treatment, based on the form of the disease, how widespread it is and the patient's overall health:

- **local anti-inflammatory treatment** — creams or ointments prescribed by the doctor, special products for the mouth;
- **phototherapy** — for widespread rash, ultraviolet light treatment under a doctor's supervision; more: [physiotherapy in dermatovenereology](/en/articles/art-fizioterapiya-dermatovenereologiya);
- **other options** — whole-body treatment the doctor selects for severe or long-lasting cases.

Itching usually eases once treatment starts. To help the remaining spots fade, the doctor will recommend sun protection.

## Everyday care

- Wash with gentle products and use a moisturiser.
- Avoid rough clothing that rubs.
- Try to reduce stress and get enough sleep.
- With the mouth form, brush with a soft toothbrush and see a dentist regularly.

## Lichen planus treatment in Fergana and Kokand

At Radeski Skin Clinic a dermatovenereologist confirms the diagnosis, tells it apart from look-alike conditions and draws up a treatment plan. If the scalp is affected, a trichologist examines it as well.

- [Dermatologist in Fergana](/en/fargona/dermatolog) and [in Kokand](/en/qoqon/dermatolog);
- [Trichologist in Fergana](/en/fargona/trixolog) and [in Kokand](/en/qoqon/trixolog);
- [Dermatology](/en/services/dermatologiya) and [phototherapy](/en/services/dermatologiya/fototerapiya).

Lichen planus is not contagious and can be treated — just do not treat it yourself as a fungus.`;
}

export const LICHEN_PLANUS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Qizil yassi temiratki — qichiydigan binafsha-qizil tugunchalar: yuqumli emas va zamburug' emas. Belgilar, og'iz va soch shakli, tashxis va davolash. Farg'ona va Qo'qonda dermatolog.",
    body: uzBody(),
    keyTakeaways: [
      "Qizil yassi temiratki — immunitet bilan bog'liq yallig'lanish, yuqumli emas va zamburug' emas",
      "Asosiy belgi — yaltiroq binafsha-qizil qichiydigan tugunchalar, yuzasida mayda oq chiziqlar",
      "Og'izda oq to'rsimon dog'lar, tirnoqlarda yupqalashish, boshda chandiqli soch to'kilishi bo'lishi mumkin",
      "Tashxis ko'rik, dermatoskopiya va kerak bo'lsa biopsiya bilan qo'yiladi; gepatit C tekshirilishi mumkin",
      "Davolashni shifokor tanlaydi: mahalliy vositalar, keng tarqalganda fototerapiya",
    ],
    tags: ['Qizil yassi temiratki', 'Lixen planus', 'Teri qichishi', "Og'iz shilliq qavati", 'Fototerapiya', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Og'izda bitmaydigan yoki kattalashadigan yara paydo bo'lsa",
      "Boshda soch o'choq-o'choq to'kila boshlasa",
      "Toshma tez tarqalib, tananing katta qismini egallasa",
      "Yangi dori qabul qila boshlagandan keyin toshma chiqsa",
      "Qichishish uyqu va ishga xalaqit bersa",
    ],
    faq: [
      {
        question: 'Qizil yassi temiratki yuqumlimi?',
        answer:
          "Yo'q. Bu immunitet bilan bog'liq yallig'lanish, infeksiya emas. U oila a'zolariga teginish, idish yoki sochiq orqali o'tmaydi.",
      },
      {
        question: "Zamburug'ga qarshi krem yordam beradimi?",
        answer:
          "Yo'q. Qizil yassi temiratki zamburug' emas, shuning uchun bunday kremlar foyda bermaydi. Davolashni dermatolog tashxisdan keyin tanlaydi.",
      },
      {
        question: 'Kasallik qancha davom etadi?',
        answer:
          "Teridagi shakl odatda bir necha oydan bir-ikki yilgacha davom etadi. Og'iz shakli uzoqroq saqlanishi mumkin va muntazam ko'rikni talab qiladi.",
      },
      {
        question: "Tuzalgandan keyin dog'lar qoladimi?",
        answer:
          "Ko'pincha to'q jigarrang dog'lar qoladi. Ular oylar davomida sekin oqaradi; quyoshdan himoya bunga yordam beradi.",
      },
      {
        question: "Farg'ona va Qo'qonda qizil yassi temiratkini qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatovenerolog tashxisni aniqlaydi va davolash rejasini tuzadi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Красный плоский лишай — зудящие фиолетово-красные узелки: не заразен и не грибок. Симптомы, формы во рту и на голове, диагностика и лечение. Дерматолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Красный плоский лишай — воспаление, связанное с иммунитетом; он не заразен и не является грибком',
      'Главный признак — блестящие фиолетово-красные зудящие узелки с тонкими белыми линиями',
      'Возможны белые кружевные участки во рту, истончение ногтей и рубцовое выпадение волос',
      'Диагноз ставят по осмотру, дерматоскопии и при необходимости биопсии; могут проверить гепатит C',
      'Лечение выбирает врач: местные средства, при распространённой сыпи — фототерапия',
    ],
    tags: ['Красный плоский лишай', 'Лихен планус', 'Зуд кожи', 'Слизистая рта', 'Фототерапия', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Во рту появилась незаживающая или растущая язва',
      'На голове волосы начали выпадать очагами',
      'Сыпь быстро распространяется по телу',
      'Сыпь появилась после начала приёма нового лекарства',
      'Зуд мешает спать и работать',
    ],
    faq: [
      {
        question: 'Заразен ли красный плоский лишай?',
        answer:
          'Нет. Это воспаление, связанное с иммунитетом, а не инфекция. Он не передаётся близким через прикосновения, посуду или полотенца.',
      },
      {
        question: 'Помогут ли противогрибковые кремы?',
        answer:
          'Нет. Красный плоский лишай — не грибок, поэтому такие кремы бесполезны. Лечение подбирает дерматолог после постановки диагноза.',
      },
      {
        question: 'Сколько длится болезнь?',
        answer:
          'Кожная форма обычно длится от нескольких месяцев до года-двух. Форма во рту может держаться дольше и требует регулярных осмотров.',
      },
      {
        question: 'Остаются ли пятна после выздоровления?',
        answer:
          'Часто остаются тёмно-коричневые пятна. Они медленно светлеют в течение месяцев; защита от солнца помогает этому.',
      },
      {
        question: 'Где лечить красный плоский лишай в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматовенеролог уточнит диагноз и составит план лечения. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Lichen planus — itchy purple-red bumps that are neither contagious nor a fungus. Signs, mouth and scalp forms, diagnosis and treatment. Dermatologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Lichen planus is immune-related inflammation — not contagious and not a fungus',
      'The main sign is shiny, itchy purple-red bumps with fine white lines on top',
      'It can cause white lacy patches in the mouth, thin nails and scarring hair loss',
      'Diagnosis is by examination, dermoscopy and sometimes a biopsy; hepatitis C may be checked',
      'The doctor chooses treatment: local products, and phototherapy for widespread rash',
    ],
    tags: ['Lichen planus', 'Purple bumps on skin', 'Itchy skin', 'Oral lichen planus', 'Phototherapy', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A mouth sore does not heal or keeps growing',
      'Hair starts falling out in patches',
      'The rash spreads quickly over the body',
      'The rash appeared after starting a new medicine',
      'Itching disturbs sleep or work',
    ],
    faq: [
      {
        question: 'Is lichen planus contagious?',
        answer:
          'No. It is immune-related inflammation, not an infection. It does not pass to others through touch, dishes or towels.',
      },
      {
        question: 'Will antifungal creams help?',
        answer:
          'No. Lichen planus is not a fungus, so these creams do not work. A dermatologist chooses treatment after making the diagnosis.',
      },
      {
        question: 'How long does it last?',
        answer:
          'The skin form usually lasts from a few months to a year or two. The mouth form can last longer and needs regular check-ups.',
      },
      {
        question: 'Do spots remain after it heals?',
        answer:
          'Dark brown spots often remain. They fade slowly over months, and sun protection helps.',
      },
      {
        question: 'Where can lichen planus be treated in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatovenereologist confirms the diagnosis and draws up a treatment plan. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const LICHEN_PLANUS_ARTICLE: Article = {
  id: 'art-qizil-yassi-temiratki',
  slug: 'qizil-yassi-temiratki',
  title: {
    uz: "Qizil yassi temiratki (lixen planus): belgilari, sabablari va davolash — yuqumlimi?",
    ru: 'Красный плоский лишай: симптомы, причины и лечение — заразен ли он?',
    en: 'Lichen Planus: Symptoms, Causes and Treatment — Is It Contagious?',
  },
  summary: {
    uz: LICHEN_PLANUS_ARTICLE_CATALOG.uz.summary,
    ru: LICHEN_PLANUS_ARTICLE_CATALOG.ru.summary,
    en: LICHEN_PLANUS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: LICHEN_PLANUS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: LICHEN_PLANUS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: LICHEN_PLANUS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: "Murodov Muhammadsolih Azamat o'g'li",
    ru: 'Муродов Мухаммадсолих Азамат угли',
    en: 'Dr. Muhammadsolih Azamat ugli Murodov',
  },
  date: '2026-11-28',
  image: '/articles/qizil-yassi-temiratki-cover.jpg',
  images: {
    uz: '/articles/qizil-yassi-temiratki-cover.jpg',
    ru: '/articles/qizil-yassi-temiratki-cover.jpg',
    en: '/articles/qizil-yassi-temiratki-cover.jpg',
  },
  views: 0,
};
