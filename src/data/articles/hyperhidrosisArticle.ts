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
 * Hyperhidrosis — excessive sweating of the armpits, palms and feet.
 * Points: normal sweating vs hyperhidrosis, primary (focal, young, symmetric, not at night) vs
 * secondary (whole body, night sweats — thyroid, infection, diabetes, medicines, menopause → tests),
 * red flags, everyday measures (evening antiperspirant, no brands), botulinum therapy for armpits
 * and palms (how it works, lasts months, repeated, contraindications — the doctor decides),
 * and the sweaty feet / skin fungus link. No medicine names, no doses.
 */

function uzBody(): string {
  return `Terlash — organizmning normal himoya mexanizmi: issiqda, jismoniy harakatda yoki hayajonlanganda ter tanani sovutadi. Lekin ba'zi odamlarda ter bezlari ehtiyojdan ancha ko'p ishlaydi: kaftlar salqin xonada ham ho'l bo'ladi, qo'ltiq ostidagi dog'lar kiyimda bir necha daqiqada paydo bo'ladi, oyoqlar doim nam. Bu holat giperhidroz deyiladi. U odatda xavfli emas, lekin hayot sifatiga sezilarli ta'sir qiladi — va uni davolash mumkin.

## Normal terlash va giperhidrozning farqi

Giperhidroz haqida o'ylash kerak, agar:

- ter issiqlik va harakatga bog'liq bo'lmay, tinch holatda ham ko'p ajralsa;
- kiyimni kuniga bir necha marta almashtirishga to'g'ri kelsa, unda dog'lar va sarg'ish izlar qolsa;
- qo'l berib ko'rishish, qog'oz, telefon yoki ruchkani ushlash noqulay bo'lsa;
- oyoq nam bo'lgani uchun poyabzal ichida sirpansa va yoqimsiz hid paydo bo'lsa;
- terlash tufayli ish, o'qish yoki muloqotdan qochsangiz.

## Birlamchi va ikkilamchi giperhidroz

**Birlamchi (fokal) giperhidroz** — eng ko'p uchraydigan turi. U boshqa kasallik belgisi emas: ter bezlarini boshqaradigan nerv signallari kuchliroq ishlaydi. Odatda u:

- bolalik yoki o'smirlikda boshlanadi, ko'pincha oilada ham uchraydi;
- muayyan joylarda bo'ladi — qo'ltiq, kaft, oyoq tagi, ba'zan yuz va peshona;
- ikki tomonda simmetrik bo'ladi;
- uyquda deyarli bo'lmaydi, hayajon va stressda esa kuchayadi.

**Ikkilamchi giperhidroz** — boshqa holatning natijasi. U ko'pincha butun tanada bo'ladi, kattalikda to'satdan boshlanadi va kechasi ham davom etadi. Sabablari orasida:

- qalqonsimon bez faoliyatining oshishi;
- qandli diabet va qon shakarining tushib ketishi;
- infeksiyalar;
- ba'zi dorilarning nojo'ya ta'siri;
- menopauza va boshqa gormonal o'zgarishlar.

Bunday holatda avval sababni topish kerak: shifokor tahlillar buyuradi va kerak bo'lsa endokrinolog yoki terapevtga yo'naltiradi.

## Qachon zudlik bilan shifokorga borish kerak

- kechasi kuchli terlash ozish yoki isitma bilan birga kechsa;
- terlash to'satdan, sababsiz boshlanib, butun tanani qamrab olsa;
- terlash bilan birga yurak tez urishi, qo'l titrashi yoki holsizlik bo'lsa;
- terlash faqat bir tomonda bo'lsa, masalan bitta kaftda;
- ko'krakdagi og'riq yoki nafas qisishi bilan sovuq ter chiqsa — bu shoshilinch holat, tez yordam chaqiring.

## Uyda nima qilmaslik kerak

- suv ichishni cheklamang — terlash kamaymaydi, organizm esa suvsizlanadi;
- terini spirt, sirka yoki boshqa kuchli vositalar bilan quritmang — teri tirnaladi va qichiydi;
- "terlashga qarshi" tabletkalarni o'zingiz tanlab ichmang;
- qo'ltiqni qirgandan keyin darhol antiperspirant surtmang — achishish va yallig'lanish bo'lishi mumkin;
- oyoqdagi qichishish, oqarish va yoriqlarga e'tiborsiz qaramang.

## Kundalik choralar

- **Kiyim** — paxta, zig'ir kabi tabiiy va keng matolar; to'q yoki naqshli kiyimda dog'lar kamroq ko'rinadi.
- **Poyabzal** — havo o'tkazadigan, charm yoki to'r matoli; ikki juftni navbatma-navbat kiyib, yaxshi quriting.
- **Paypoq** — paxtali, kuniga bir-ikki marta almashtiriladi.
- **Gigiyena** — har kuni yuvinish va terini, ayniqsa barmoqlar orasini, yaxshilab quritish.
- **Antiperspirant** — kechqurun, toza va quruq teriga surting: kechasi ter bezlari kam ishlaydi va vosita yaxshiroq ta'sir qiladi. Teri achishsa, shifokor bilan maslahatlashing.
- Achchiq ovqat, kofe va spirtli ichimliklar ba'zilarda terlashni kuchaytiradi.

## Botulinoterapiya: qo'ltiq va kaftlar uchun

Kundalik choralar yetarli bo'lmasa, shifokor botulinoterapiyani taklif qilishi mumkin. Ko'pchilik uni ajinlar muolajasi sifatida biladi ([botulinoterapiya va mimik ajinlar](/uz/articles/art-botulinoterapiya-radeski)), lekin botulin toksini ortiqcha terlashda ham qo'llanadi.

- **Qanday ishlaydi** — preparat nervdan ter beziga keladigan signalni vaqtincha to'sadi va bez kamroq ter ishlab chiqaradi. Ter bezlari olib tashlanmaydi.
- **Muolaja** — teriga juda ingichka igna bilan bir nechta mayda inyeksiya qilinadi; muolaja ko'p vaqt olmaydi va keyin odatdagi hayotga qaytish mumkin.
- **Natija** — ta'sir bir necha kunda boshlanadi va odatda bir necha oy saqlanadi, keyin muolaja takrorlanadi. Davomiyligi har kimda turlicha.
- **Vaqtinchalik ta'sirlar** — inyeksiya joyida yengil og'riq, qizarish yoki ko'karish; kaftlarda ba'zan barmoqlarda qisqa muddatli kuchsizlik.

Qarshi ko'rsatmalar: homiladorlik va emizish davri, nerv-mushak kasalliklari, inyeksiya joyidagi infeksiya yoki yallig'lanish. Muolaja mumkinligini ko'rikdan keyin shifokor hal qiladi.

## Terlagan oyoq va zamburug'

Doim nam oyoq — zamburug' va bakteriyalar uchun qulay muhit. Barmoqlar orasida oqarish, yoriqlar, qichishish va yoqimsiz hid paydo bo'lsa, bu oyoq mikozi bo'lishi mumkin; batafsil: [teri zamburug'i](/uz/articles/art-teri-zamburugi). Zamburug' tirnoqqa ham o'tadi — [tirnoq zamburug'i](/uz/articles/art-tirnoq-zamburugi). Qo'ltiqdagi doimiy namlik esa bichilish va qichishishga olib keladi: [teri qichishi](/uz/articles/art-teri-qichishi). Shuning uchun terlashni kamaytirish teri salomatligi uchun ham foydali.

## Klinikada tashxis va davolash

Dermatolog terlash qachon boshlangani, qaysi joylarda bo'lishi, kechasi davom etishi va oilada uchrashini so'raydi. Ko'rikda teri, bichilish va zamburug' belgilari tekshiriladi. Ikkilamchi giperhidroz gumon qilinsa, qon tahlillari, qalqonsimon bez gormonlari va qon shakari tekshiriladi. Shundan keyin reja tuziladi: kundalik choralar, shifokor tayinlagan mahalliy vositalar yoki botulinoterapiya.

## Farg'ona va Qo'qonda giperhidrozni davolash

Radeski Skin Clinic'da dermatolog va kosmetolog terlash turini aniqlaydi, kerak bo'lsa tekshiruvga yo'naltiradi va mos davolashni tanlaydi.

- [Dermatolog Farg'onada](/uz/fargona/dermatolog) va [Qo'qonda](/uz/qoqon/dermatolog);
- [Kosmetolog Farg'onada](/uz/fargona/kosmetolog) va [Qo'qonda](/uz/qoqon/kosmetolog);
- [Inyeksion kosmetologiya](/uz/services/in-ekcionnaya-kosmetologiya) va [botulinoterapiya](/uz/services/in-ekcionnaya-kosmetologiya/botulinoterapiya-botoks).

Ortiqcha terlashga ko'nikib yashash shart emas: to'g'ri tashxis va davolash bilan u ko'pincha sezilarli kamayadi.`;
}

function ruBody(): string {
  return `Потоотделение — нормальный защитный механизм: в жару, при нагрузке или волнении пот охлаждает тело. Но у некоторых людей потовые железы работают гораздо сильнее, чем нужно: ладони влажные даже в прохладной комнате, пятна под мышками появляются на одежде за несколько минут, стопы постоянно мокрые. Это состояние называется гипергидрозом. Обычно оно не опасно, но заметно снижает качество жизни — и его можно лечить.

## Нормальная потливость и гипергидроз

О гипергидрозе стоит задуматься, если:

- пот выделяется обильно даже в покое, без жары и нагрузки;
- одежду приходится менять несколько раз в день, на ней остаются пятна и желтоватые следы;
- неловко пожимать руку, держать бумагу, телефон или ручку;
- стопы скользят в обуви из-за влаги и появляется неприятный запах;
- из-за потливости вы избегаете работы, учёбы или общения.

## Первичный и вторичный гипергидроз

**Первичный (локальный) гипергидроз** — самый частый вариант. Это не признак другой болезни: просто сильнее работают нервные сигналы, управляющие потовыми железами. Обычно он:

- начинается в детстве или подростковом возрасте, часто встречается у родственников;
- затрагивает определённые зоны — подмышки, ладони, стопы, иногда лицо и лоб;
- симметричен с обеих сторон;
- почти не проявляется во сне, а при волнении и стрессе усиливается.

**Вторичный гипергидроз** — следствие другого состояния. Чаще он охватывает всё тело, начинается внезапно во взрослом возрасте и продолжается ночью. Среди причин:

- повышенная функция щитовидной железы;
- сахарный диабет и падение уровня сахара в крови;
- инфекции;
- побочное действие некоторых лекарств;
- менопауза и другие гормональные изменения.

В таком случае сначала нужно найти причину: врач назначит анализы и при необходимости направит к эндокринологу или терапевту.

## Когда срочно к врачу

- сильная ночная потливость вместе с похудением или температурой;
- потливость началась внезапно, без причины, и охватывает всё тело;
- вместе с потом — сердцебиение, дрожь в руках или слабость;
- потеет только одна сторона, например одна ладонь;
- холодный пот с болью в груди или одышкой — это неотложное состояние, вызывайте скорую.

## Чего не делать дома

- не ограничивайте питьё — пота меньше не станет, а организм обезводится;
- не сушите кожу спиртом, уксусом или другими агрессивными средствами — появится раздражение и зуд;
- не принимайте самостоятельно «таблетки от потливости»;
- не наносите антиперспирант сразу после бритья подмышек — возможны жжение и воспаление;
- не оставляйте без внимания зуд, побеление и трещины на стопах.

## Повседневные меры

- **Одежда** — натуральные свободные ткани: хлопок, лён; на тёмной или пёстрой одежде пятна менее заметны.
- **Обувь** — дышащая, из кожи или сетки; чередуйте две пары и хорошо их просушивайте.
- **Носки** — хлопковые, менять один-два раза в день.
- **Гигиена** — ежедневный душ и тщательное высушивание кожи, особенно между пальцами.
- **Антиперспирант** — наносите вечером на чистую сухую кожу: ночью потовые железы менее активны, и средство действует лучше. Если кожа раздражается, посоветуйтесь с врачом.
- Острая еда, кофе и алкоголь у некоторых людей усиливают потливость.

## Ботулинотерапия подмышек и ладоней

Если повседневных мер недостаточно, врач может предложить ботулинотерапию. Многие знают её как процедуру от морщин ([ботулинотерапия и мимические морщины](/ru/articles/art-botulinoterapiya-radeski)), но ботулотоксин применяют и при повышенной потливости.

- **Как работает** — препарат временно блокирует сигнал от нерва к потовой железе, и железа выделяет меньше пота. Сами потовые железы не удаляются.
- **Процедура** — в кожу делают несколько мелких уколов очень тонкой иглой; это занимает немного времени, после процедуры можно вернуться к обычным делам.
- **Результат** — эффект появляется через несколько дней и обычно держится несколько месяцев, затем процедуру повторяют. Длительность у всех разная.
- **Временные эффекты** — небольшая болезненность, покраснение или синячок в месте укола; на ладонях иногда кратковременная слабость в пальцах.

Противопоказания: беременность и кормление грудью, нервно-мышечные заболевания, инфекция или воспаление в зоне укола. Возможна ли процедура, решает врач после осмотра.

## Потливость стоп и грибок

Постоянно влажная стопа — удобная среда для грибка и бактерий. Если между пальцами появились побеление, трещины, зуд и неприятный запах, это может быть микоз стоп; подробнее: [грибок кожи](/ru/articles/art-teri-zamburugi). Грибок переходит и на ногти — [грибок ногтей](/ru/articles/art-tirnoq-zamburugi). А постоянная влажность под мышками приводит к опрелостям и зуду: [зуд кожи](/ru/articles/art-teri-qichishi). Поэтому уменьшение потливости полезно и для здоровья кожи.

## Диагностика и лечение в клинике

Дерматолог расспросит, когда началась потливость, какие зоны затронуты, бывает ли она ночью и есть ли она у родственников. При осмотре проверяют кожу, опрелости и признаки грибка. Если есть подозрение на вторичный гипергидроз, назначают анализы крови, гормоны щитовидной железы и сахар крови. Затем составляют план: повседневные меры, местные средства, назначенные врачом, или ботулинотерапия.

## Лечение гипергидроза в Фергане и Коканде

В Radeski Skin Clinic дерматолог и косметолог определят тип потливости, при необходимости направят на обследование и подберут подходящее лечение.

- [Дерматолог в Фергане](/ru/fargona/dermatolog) и [в Коканде](/ru/qoqon/dermatolog);
- [Косметолог в Фергане](/ru/fargona/kosmetolog) и [в Коканде](/ru/qoqon/kosmetolog);
- [Инъекционная косметология](/ru/services/in-ekcionnaya-kosmetologiya) и [ботулинотерапия](/ru/services/in-ekcionnaya-kosmetologiya/botulinoterapiya-botoks).

Мириться с повышенной потливостью не обязательно: при правильной диагностике и лечении её часто удаётся заметно уменьшить.`;
}

function enBody(): string {
  return `Sweating is normal: in the heat, during exercise or when we are nervous, sweat cools the body. But in some people the sweat glands work far harder than needed: palms are wet even in a cool room, underarm patches show on clothes within minutes, feet are always damp. This is called hyperhidrosis. It is usually not dangerous, but it noticeably affects quality of life — and it can be treated.

## Normal sweating vs hyperhidrosis

Think about hyperhidrosis if:

- you sweat heavily even at rest, without heat or exertion;
- you change clothes several times a day, and they show patches and yellowish marks;
- shaking hands or holding paper, a phone or a pen feels awkward;
- your feet slip in your shoes and smell unpleasant;
- you avoid work, study or social situations because of sweating.

## Primary and secondary hyperhidrosis

**Primary (focal) hyperhidrosis** is the most common type. It is not a sign of another disease: the nerve signals that control the sweat glands are simply more active. It usually:

- starts in childhood or the teenage years and often runs in families;
- affects specific areas — underarms, palms, soles, sometimes the face and forehead;
- is symmetrical on both sides;
- hardly happens during sleep, but gets worse with excitement and stress.

**Secondary hyperhidrosis** is the result of another condition. It more often affects the whole body, starts suddenly in adulthood and continues at night. Causes include:

- an overactive thyroid;
- diabetes and drops in blood sugar;
- infections;
- side effects of some medicines;
- menopause and other hormonal changes.

Then the cause must be found first: the doctor orders tests and, if needed, refers you to an endocrinologist or a general physician.

## When to see a doctor urgently

- heavy night sweats together with weight loss or fever;
- sweating that started suddenly, for no reason, and covers the whole body;
- sweating with a racing heart, trembling hands or weakness;
- sweating on one side only, for example one palm;
- a cold sweat with chest pain or shortness of breath — this is an emergency, call an ambulance.

## What not to do at home

- do not cut down on drinking — you will not sweat less, but you will get dehydrated;
- do not dry the skin with alcohol, vinegar or other harsh products — it becomes irritated and itchy;
- do not take "anti-sweating pills" on your own;
- do not apply antiperspirant right after shaving your underarms — it can sting and inflame the skin;
- do not ignore itching, whitish skin or cracks on your feet.

## Everyday measures

- **Clothing** — loose, natural fabrics such as cotton and linen; patches show less on dark or patterned clothes.
- **Shoes** — breathable leather or mesh; alternate two pairs and let them dry well.
- **Socks** — cotton, changed once or twice a day.
- **Hygiene** — a daily wash and thorough drying of the skin, especially between the toes.
- **Antiperspirant** — apply it in the evening to clean, dry skin: the sweat glands are less active at night, so it works better. If your skin gets irritated, talk to a doctor.
- Spicy food, coffee and alcohol make some people sweat more.

## Botulinum therapy for underarms and palms

If everyday measures are not enough, the doctor may suggest botulinum therapy. Most people know it as a treatment for wrinkles ([botulinum therapy and expression lines](/en/articles/art-botulinoterapiya-radeski)), but botulinum toxin is also used for excessive sweating.

- **How it works** — the product temporarily blocks the signal from the nerve to the sweat gland, so the gland produces less sweat. The sweat glands themselves are not removed.
- **The procedure** — several tiny injections with a very fine needle; it is quick, and you can return to your usual day afterwards.
- **The result** — the effect starts within a few days and typically lasts several months, after which the procedure is repeated. How long it lasts varies from person to person.
- **Temporary effects** — mild soreness, redness or a small bruise at the injection site; on the palms, sometimes brief weakness in the fingers.

Contraindications include pregnancy and breastfeeding, neuromuscular diseases, and infection or inflammation at the injection site. The doctor decides after an examination whether it suits you.

## Sweaty feet and fungus

A constantly damp foot is an ideal place for fungi and bacteria. Whitish skin, cracks, itching and an unpleasant smell between the toes may be athlete's foot; more: [skin fungus](/en/articles/art-teri-zamburugi). Fungus can spread to the nails too — [nail fungus](/en/articles/art-tirnoq-zamburugi). Constant moisture in the underarms leads to chafing and itching: [itchy skin](/en/articles/art-teri-qichishi). That is why reducing sweating is good for skin health as well.

## Diagnosis and treatment at the clinic

The dermatologist asks when the sweating started, where it occurs, whether it happens at night and whether relatives have it. The examination checks the skin for chafing and signs of fungus. If secondary hyperhidrosis is suspected, blood tests, thyroid hormones and blood sugar are checked. Then a plan is made: everyday measures, topical products prescribed by the doctor, or botulinum therapy.

## Hyperhidrosis treatment in Fergana and Kokand

At Radeski Skin Clinic a dermatologist and a cosmetologist determine the type of sweating, refer you for tests if needed and choose the right treatment.

- [Dermatologist in Fergana](/en/fargona/dermatolog) and [in Kokand](/en/qoqon/dermatolog);
- [Cosmetologist in Fergana](/en/fargona/kosmetolog) and [in Kokand](/en/qoqon/kosmetolog);
- [Injectable cosmetology](/en/services/in-ekcionnaya-kosmetologiya) and [botulinum therapy](/en/services/in-ekcionnaya-kosmetologiya/botulinoterapiya-botoks).

You do not have to live with excessive sweating: with the right diagnosis and treatment it can often be reduced significantly.`;
}

export const HYPERHIDROSIS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Ortiqcha terlash (giperhidroz): qo'ltiq, kaft va oyoq — normal terlashdan farqi, sabablari, xavfli belgilar, kundalik choralar va botulinoterapiya. Farg'ona va Qo'qonda dermatolog va kosmetolog.",
    body: uzBody(),
    keyTakeaways: [
      "Giperhidroz — ter bezlarining ehtiyojdan ortiq ishlashi; u davolanadi",
      "Birlamchi giperhidroz yoshlikda boshlanadi, simmetrik va kechasi bo'lmaydi",
      "Butun tanada va kechasi terlash boshqa kasallik belgisi bo'lishi mumkin — tekshiruv kerak",
      "Antiperspirantni kechqurun quruq teriga surting, tabiiy kiyim va havo o'tkazadigan poyabzal tanlang",
      "Botulinoterapiya qo'ltiq va kaftdagi terlashni odatda bir necha oyga kamaytiradi; mumkinligini shifokor hal qiladi",
    ],
    tags: ['Giperhidroz', "Ortiqcha terlash", "Qo'ltiq terlashi", 'Kaft terlashi', 'Botulinoterapiya', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Kechasi kuchli terlash ozish yoki isitma bilan birga bo'lsa",
      "Terlash kattalikda to'satdan boshlanib, butun tanani qamrab olsa",
      "Terlash bilan yurak tez urishi, qo'l titrashi yoki holsizlik bo'lsa",
      "Terlash ish, muloqot va kundalik hayotga xalaqit bersa",
      "Oyoqda oqarish, yoriqlar, qichishish yoki yoqimsiz hid paydo bo'lsa",
    ],
    faq: [
      {
        question: "Giperhidroz o'z-o'zidan o'tadimi?",
        answer:
          "Birlamchi giperhidroz ko'pincha yillar davom etadi, lekin ba'zilarda yosh bilan kamayadi. Ikkilamchi giperhidroz esa sababi davolanganda odatda kamayadi. Har ikki holatda ham terlashni sezilarli kamaytirish mumkin.",
      },
      {
        question: "Terni botulinoterapiya bilan to'xtatish zararli emasmi?",
        answer:
          "Muolaja faqat inyeksiya qilingan kichik sohada ter bezlarini vaqtincha tinchlantiradi. Tananing qolgan qismi terlashda davom etadi, shuning uchun issiqlik almashinuvi buzilmaydi. Qarshi ko'rsatmalarni shifokor ko'rikda tekshiradi.",
      },
      {
        question: "Botulinoterapiya natijasi qancha saqlanadi?",
        answer:
          "Odatda bir necha oy; davomiyligi organizmga va sohaga bog'liq. Ta'sir pasaygach, muolaja takrorlanadi.",
      },
      {
        question: "Kechasi terlash nimani bildiradi?",
        answer:
          "Birlamchi giperhidroz uyquda deyarli bo'lmaydi. Kechasi kuchli terlash, ayniqsa ozish yoki isitma bilan, boshqa kasallik belgisi bo'lishi mumkin — shifokorga murojaat qilib, tahlil topshirish kerak.",
      },
      {
        question: "Farg'ona va Qo'qonda giperhidrozni qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog va kosmetolog terlash sababini aniqlaydi va mos davolashni, jumladan botulinoterapiyani tanlaydi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Повышенная потливость (гипергидроз) подмышек, ладоней и стоп: отличие от нормы, причины, тревожные признаки, повседневные меры и ботулинотерапия. Дерматолог и косметолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Гипергидроз — избыточная работа потовых желёз, и его можно лечить',
      'Первичный гипергидроз начинается в юности, симметричен и не проявляется ночью',
      'Потливость всего тела и ночная потливость могут быть признаком другой болезни — нужно обследование',
      'Наносите антиперспирант вечером на сухую кожу, выбирайте натуральную одежду и дышащую обувь',
      'Ботулинотерапия обычно уменьшает потливость подмышек и ладоней на несколько месяцев; возможность процедуры решает врач',
    ],
    tags: ['Гипергидроз', 'Повышенная потливость', 'Потливость подмышек', 'Потливость ладоней', 'Ботулинотерапия', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Сильная ночная потливость с похудением или температурой',
      'Потливость внезапно началась во взрослом возрасте и охватывает всё тело',
      'Вместе с потом — сердцебиение, дрожь в руках или слабость',
      'Потливость мешает работе, общению и обычной жизни',
      'На стопах побеление, трещины, зуд или неприятный запах',
    ],
    faq: [
      {
        question: 'Проходит ли гипергидроз сам?',
        answer:
          'Первичный гипергидроз часто сохраняется годами, хотя у некоторых с возрастом ослабевает. Вторичный обычно уменьшается, когда лечат его причину. В обоих случаях потливость можно заметно уменьшить.',
      },
      {
        question: 'Не вредно ли «отключать» пот ботулинотерапией?',
        answer:
          'Процедура временно успокаивает потовые железы только на небольшом участке, куда сделаны уколы. Остальное тело продолжает потеть, поэтому терморегуляция не нарушается. Противопоказания врач проверяет на осмотре.',
      },
      {
        question: 'Сколько держится эффект ботулинотерапии?',
        answer:
          'Обычно несколько месяцев; длительность зависит от организма и зоны. Когда эффект ослабевает, процедуру повторяют.',
      },
      {
        question: 'О чём говорит ночная потливость?',
        answer:
          'Первичный гипергидроз во сне почти не проявляется. Сильная ночная потливость, особенно с похудением или температурой, может быть признаком другого заболевания — нужно обратиться к врачу и сдать анализы.',
      },
      {
        question: 'Где лечить гипергидроз в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог и косметолог выяснят причину потливости и подберут лечение, в том числе ботулинотерапию. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Excessive sweating (hyperhidrosis) of the underarms, palms and feet: how it differs from normal, causes, warning signs, everyday measures and botulinum therapy. Dermatologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Hyperhidrosis means the sweat glands work more than needed — and it can be treated',
      'Primary hyperhidrosis starts young, is symmetrical and does not happen at night',
      'Whole-body sweating and night sweats can be a sign of another illness — get checked',
      'Apply antiperspirant in the evening to dry skin; choose natural fabrics and breathable shoes',
      'Botulinum therapy typically reduces underarm and palm sweating for several months; the doctor decides if it suits you',
    ],
    tags: ['Hyperhidrosis', 'Excessive sweating', 'Underarm sweating', 'Sweaty palms', 'Botulinum therapy', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Heavy night sweats with weight loss or fever',
      'Sweating started suddenly in adulthood and covers the whole body',
      'Sweating comes with a racing heart, trembling hands or weakness',
      'Sweating interferes with work, social life and daily activities',
      'Whitish skin, cracks, itching or a bad smell on the feet',
    ],
    faq: [
      {
        question: 'Does hyperhidrosis go away on its own?',
        answer:
          'Primary hyperhidrosis often lasts for years, although in some people it eases with age. Secondary hyperhidrosis usually improves once its cause is treated. In both cases sweating can be reduced noticeably.',
      },
      {
        question: 'Is it harmful to "switch off" sweating with botulinum therapy?',
        answer:
          'The procedure only calms the sweat glands temporarily in the small area that was injected. The rest of the body keeps sweating, so temperature control is not affected. The doctor checks for contraindications at the examination.',
      },
      {
        question: 'How long does botulinum therapy last?',
        answer:
          'Typically several months; it depends on the person and the area. When the effect wears off, the procedure is repeated.',
      },
      {
        question: 'What do night sweats mean?',
        answer:
          'Primary hyperhidrosis hardly happens during sleep. Heavy night sweats, especially with weight loss or fever, can be a sign of another condition — see a doctor and have tests.',
      },
      {
        question: 'Where can I get hyperhidrosis treated in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist and a cosmetologist find the cause of the sweating and choose treatment, including botulinum therapy. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const HYPERHIDROSIS_ARTICLE: Article = {
  id: 'art-giperhidroz',
  slug: 'giperhidroz',
  title: {
    uz: "Ortiqcha terlash (giperhidroz): qo'ltiq, kaft va oyoq — sabablari va davolash",
    ru: 'Повышенная потливость (гипергидроз): подмышки, ладони и стопы — причины и лечение',
    en: 'Excessive Sweating (Hyperhidrosis): Underarms, Palms and Feet — Causes and Treatment',
  },
  summary: {
    uz: HYPERHIDROSIS_ARTICLE_CATALOG.uz.summary,
    ru: HYPERHIDROSIS_ARTICLE_CATALOG.ru.summary,
    en: HYPERHIDROSIS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: HYPERHIDROSIS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: HYPERHIDROSIS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: HYPERHIDROSIS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Mangasaryan Lorena Georgievna',
    ru: 'Мангасарян Лорена Георгиевна',
    en: 'Dr. Lorena Georgievna Mangasaryan',
  },
  date: '2026-11-24',
  image: '/articles/giperhidroz-cover.jpg',
  images: {
    uz: '/articles/giperhidroz-cover.jpg',
    ru: '/articles/giperhidroz-cover.jpg',
    en: '/articles/giperhidroz-cover.jpg',
  },
  views: 0,
};
