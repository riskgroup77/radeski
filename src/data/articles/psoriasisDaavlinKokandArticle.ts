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

function uzBody(): string {
  return `## Qo‘qonda psoriazni Daavlin fototerapiyasi bilan davolash

Psoriaz — terida qizarish, qipiqlanish, qichishish va aniq chegaralangan plakalar paydo bo‘lishi bilan kechadigan surunkali immun-yallig‘lanish kasalligi. U yuqumli emas. Kasallikni hozircha butunlay yo‘qotishning yagona usuli mavjud emas, ammo to‘g‘ri tanlangan davolash simptomlarni nazorat qilish, terini tozalash va uzoq remissiyaga erishishga yordam beradi.

Radeski Skin Clinic’da psoriazni davolashda AQShda ishlab chiqarilgan professional **Daavlin** uskunalaridagi **tor tasma UVB-fototerapiya (311–312 nm)** qo‘llaniladi. Bu usul xalqaro dermatologik amaliyotda psoriazning keng tan olingan, samarali va nazorat qilinadigan davolash yo‘nalishlaridan biridir.

## Daavlin fototerapiyasi nima?

Daavlin — 40 yildan ortiq vaqtdan beri tibbiy fototerapiya tizimlarini ishlab chiqayotgan Amerika kompaniyasi. Uning apparatlari teriga UVB nurlanishining faqat davolovchi diapazonini — 311–312 nm to‘lqin uzunligini aniq dozada yetkazadi.

Tor tasma UVB keng diapazonli UVB bilan solishtirganda kerakli to‘lqinlarni aniqroq qo‘llaydi. Bu yallig‘lanishni kamaytirishga yordam beradi va doza dermatolog tomonidan to‘g‘ri hisoblanganda kuyish xavfini nazorat qilish imkonini beradi.

## Fototerapiya psoriazga qanday ta’sir qiladi?

Psoriazda teri hujayralari odatdagidan tez yangilanadi va mahalliy immun yallig‘lanish kuchayadi. Nazoratli UVB nuri ushbu jarayonlarga bir necha yo‘l bilan ta’sir qiladi:

- teri hujayralarining ortiqcha tez bo‘linishini sekinlashtiradi;
- o‘choqlardagi immun faollikni pasaytiradi;
- qizarish va yallig‘lanishni kamaytiradi;
- qichishish va qipiqlanishni yengillashtiradi;
- psoriatik plakalarning asta-sekin tekislanishiga yordam beradi.

Natija darhol paydo bo‘lmaydi. Teri davolashga bosqichma-bosqich javob beradi, shu sababli muntazamlik va belgilangan kursga rioya qilish muhim.

## Kimlarga tavsiya qilinishi mumkin?

Dermatolog tor tasma UVB-fototerapiyani quyidagi holatlarda ko‘rib chiqishi mumkin:

- plakali psoriaz;
- tomchisimon psoriaz;
- tananing katta qismini qamrab olgan o‘choqlar;
- tez-tez takrorlanadigan zo‘rayishlar;
- tashqi surtmalardan yetarli natija bo‘lmasa;
- tizimli davolashni kamaytirish yoki kompleks rejaning bir qismi kerak bo‘lsa.

Fototerapiya hamma bemorga bir xil tarzda buyurilmaydi. Kasallik turi, bosqichi, teri fototipi, boshqa kasalliklar va avvalgi davolash natijasi shifokor tomonidan baholanadi.

## Davolash kursi qanday o‘tadi?

Kursdan oldin dermatolog ko‘rik o‘tkazadi va individual boshlang‘ich dozani belgilaydi. Bunda:

- terining fototipi;
- psoriazning tarqalish maydoni;
- kasallik bosqichi va faolligi;
- qabul qilinayotgan dorilar;
- avvalgi fototerapiya tajribasi;
- fotosensitivlik xavfi hisobga olinadi.

Muolaja maxsus Daavlin fototerapiya kabinasida o‘tkaziladi. Ko‘zlar va zarur sog‘lom zonalar himoyalanadi, bemor esa qat’iy hisoblangan UVB dozasini oladi. Dastlabki seanslar qisqa bo‘ladi; terining javobiga qarab ta’sir vaqti ehtiyotkorlik bilan oshiriladi.

Ko‘pincha haftasiga 2–3 seans tavsiya etiladi. Kurs davomiyligi oldindan barcha bemor uchun bir xil belgilanmaydi — dermatolog terining javobi va nojo‘ya reaksiyalarni kuzatib boradi.

## Daavlin fototerapiyasining afzalliklari

- psoriazda klinik amaliyotda keng qo‘llaniladigan usul;
- asosan teriga mahalliy ta’sir qiladi;
- muolaja og‘riqsiz va qisqa davom etadi;
- katta teri maydonlarini bir tekis davolash mumkin;
- tashqi terapiya bilan birga qo‘llanishi mumkin;
- tizimli dorilar har doim ham kerak bo‘lmagan ayrim bemorlar uchun muqobil yoki qo‘shimcha yo‘l bo‘lishi mumkin.

Bolalar, homilador yoki emizikli bemorlarda fototerapiya masalasi faqat dermatolog va tegishli shifokorlar tomonidan individual xavf–foyda bahosidan so‘ng hal qilinadi. Bu guruhlarda mustaqil ravishda muolaja boshlash mumkin emas.

## Qarshi ko‘rsatmalar va ehtiyot choralari

Fototerapiya tibbiy muolaja bo‘lib, har bir bemorga mos kelavermaydi. Quyidagi holatlarda alohida ehtiyot yoki boshqa davolash talab qilinishi mumkin:

- ultrabinafsha nurga yuqori sezgirlik;
- fotosensitivlik chaqiruvchi dori vositalari;
- ayrim irsiy fotosensitiv kasalliklar;
- teri saratoni yoki uning yuqori xavfi;
- nazoratsiz og‘ir kasalliklar;
- muolaja sohasidagi shubhali teri o‘smalari.

Seansdan keyin yengil qizarish bo‘lishi mumkin. Kuchli achishish, kuyishga o‘xshash reaksiya yoki pufakchalar paydo bo‘lsa, navbatdagi seansgacha shifokorga xabar berish kerak.

## Nima uchun Radeski Skin Clinic?

Radeski Skin Clinic’da davolash professional Daavlin uskunasida va dermatolog nazorati ostida o‘tkaziladi. Bizning yondashuv faqat plakalarning tashqi ko‘rinishini kamaytirish emas, balki zo‘rayish omillarini aniqlash, uy parvarishini to‘g‘ri tashkil etish va imkon qadar uzoq remissiyaga erishishga qaratilgan.

Klinikada:

- individual fototerapiya protokoli tuziladi;
- har bir seans uchun doza nazorat qilinadi;
- davolash samarasi dinamik kuzatiladi;
- tashqi va zarur bo‘lsa boshqa terapiyalar bilan kompleks reja tuziladi;
- bemorga kundalik parvarish va zo‘rayishlarning oldini olish bo‘yicha tavsiyalar beriladi.

## Konsultatsiyaga yoziling

Psoriaz plakalar, qichishish yoki tez-tez zo‘rayishlar bilan bezovta qilsa, davolashni kechiktirmang. Dermatolog kasallik holatini baholaydi va Daavlin UVB 311–312 nm fototerapiyasi sizga mos yoki mos emasligini aniqlaydi.

Radeski Skin Clinic’da Qo‘qon va Farg‘ona vodiysi bemorlari uchun psoriazni xalqaro tamoyillar asosida nazorat qilishga qaratilgan individual davolash rejasi tuziladi.`;
}

function ruBody(): string {
  return `## Лечение псориаза фототерапией Daavlin в Коканде

Псориаз — хроническое иммуновоспалительное заболевание кожи, которое проявляется покраснением, шелушением, зудом и плотными бляшками. Он не заразен. Полностью устранить заболевание пока невозможно, но правильно подобранная терапия помогает контролировать симптомы, очищать кожу и добиваться продолжительной ремиссии.

В Radeski Skin Clinic применяется **узкополосная UVB-фототерапия 311–312 нм** на профессиональном оборудовании **Daavlin (США)**. Это один из признанных в международной дерматологической практике методов лечения псориаза.

## Что такое фототерапия Daavlin?

Daavlin — американская компания, которая более 40 лет разрабатывает оборудование для медицинской фототерапии. Аппараты подают строго рассчитанную дозу ультрафиолета в терапевтическом диапазоне 311–312 нм.

Узкополосный UVB использует более точный лечебный диапазон, чем широкополосное излучение. Он помогает уменьшать воспаление, а при грамотном подборе дозы позволяет контролировать риск ожога.

## Как фототерапия действует при псориазе?

При псориазе клетки кожи обновляются слишком быстро, а в очагах поддерживается иммунное воспаление. Контролируемый UVB-свет:

- замедляет избыточное деление клеток кожи;
- снижает активность иммунных клеток в бляшках;
- уменьшает воспаление и покраснение;
- облегчает зуд и шелушение;
- способствует постепенному уплощению и исчезновению бляшек.

Эффект развивается постепенно, поэтому для результата важны регулярность процедур и соблюдение схемы врача.

## Кому может подойти лечение?

Дерматолог может рекомендовать узкополосную UVB-терапию при:

- бляшечном псориазе;
- каплевидном псориазе;
- распространённом поражении кожи;
- частых обострениях;
- недостаточном эффекте наружных препаратов;
- необходимости дополнить комплексную схему лечения.

Решение принимается после осмотра. Врач учитывает форму и стадию псориаза, фототип кожи, сопутствующие заболевания, лекарства и результаты предыдущего лечения.

## Как проходит курс?

До первой процедуры дерматолог определяет индивидуальную начальную дозу. Учитываются:

- фототип кожи;
- площадь поражения;
- стадия и активность заболевания;
- принимаемые препараты;
- предыдущий опыт фототерапии;
- риск фоточувствительности.

Пациент находится в специальной кабине Daavlin. Глаза и необходимые здоровые участки защищаются, а кожа получает точно рассчитанную дозу лечебного света. Первые сеансы короткие; затем время воздействия осторожно увеличивается по реакции кожи.

Обычно назначают 2–3 процедуры в неделю. Продолжительность курса индивидуальна: врач регулярно оценивает очищение кожи и переносимость лечения.

## Преимущества фототерапии Daavlin

- признанный метод лечения псориаза;
- преимущественно местное воздействие на кожу;
- безболезненные и короткие сеансы;
- возможность равномерно обрабатывать большие участки;
- совместимость с наружной терапией;
- возможность использовать как часть плана, когда требуется уменьшить системную лекарственную нагрузку.

Для детей, беременных и кормящих пациентов вопрос фототерапии решается только индивидуально после оценки пользы и риска дерматологом и профильными врачами. Самостоятельно начинать лечение нельзя.

## Противопоказания и меры предосторожности

Фототерапия подходит не всем. Особая осторожность или другой метод могут потребоваться при:

- повышенной чувствительности к ультрафиолету;
- приёме фотосенсибилизирующих препаратов;
- некоторых наследственных фотодерматозах;
- раке кожи или высоком риске его развития;
- тяжёлых неконтролируемых заболеваниях;
- подозрительных новообразованиях кожи.

После сеанса возможно лёгкое покраснение. При сильном жжении, выраженной реакции или пузырях следует сообщить врачу до следующей процедуры.

## Почему Radeski Skin Clinic?

В Radeski Skin Clinic фототерапия проводится на профессиональной системе Daavlin под контролем дерматолога. Наша задача — не только уменьшить видимые проявления, но и выявить провоцирующие факторы, наладить уход и поддерживать длительную ремиссию.

Мы предлагаем:

- индивидуальный протокол;
- контроль дозы на каждом сеансе;
- наблюдение результата в динамике;
- комплексное сочетание с наружной и другой терапией по показаниям;
- рекомендации по ежедневному уходу и профилактике обострений.

## Запишитесь на консультацию

Если вас беспокоят псориатические бляшки, зуд или частые обострения, обратитесь к дерматологу. После осмотра врач определит, подходит ли вам фототерапия Daavlin UVB 311–312 нм.

Radeski Skin Clinic предлагает пациентам Коканда и Ферганской долины индивидуальные программы контроля псориаза, основанные на современных международных принципах.`;
}

function enBody(): string {
  return `## Daavlin phototherapy for psoriasis in Kokand

Psoriasis is a chronic immune-mediated inflammatory skin disease that causes red, scaly, itchy plaques. It is not contagious. Although there is currently no permanent cure, a well-designed treatment plan can control symptoms, clear the skin, and support long periods of remission.

Radeski Skin Clinic uses **narrow-band UVB phototherapy (311–312 nm)** delivered by professional **Daavlin (USA)** equipment. This is a widely recognised treatment option in international dermatology practice.

## What is Daavlin phototherapy?

Daavlin is an American manufacturer with more than 40 years of focus on medical phototherapy systems. Its devices deliver a precisely controlled dose of UVB light in the therapeutic 311–312 nm range.

Narrow-band UVB uses a more targeted wavelength range than broad-band UVB. It helps reduce inflammation while allowing clinicians to manage exposure and minimise burn risk through careful dosing.

## How does phototherapy help psoriasis?

In psoriasis, skin cells renew too quickly and immune inflammation persists within plaques. Controlled UVB light can:

- slow excessive skin-cell turnover;
- reduce immune activity inside lesions;
- decrease inflammation and redness;
- relieve itching and scaling;
- help plaques gradually flatten and clear.

Improvement develops over time. Regular attendance and following the prescribed course are important.

## Who may benefit?

A dermatologist may consider narrow-band UVB for:

- plaque psoriasis;
- guttate psoriasis;
- widespread skin involvement;
- frequent flares;
- insufficient response to topical medication;
- use as part of a broader treatment plan.

Treatment is not prescribed in the same way for everyone. The doctor assesses psoriasis type and stage, skin phototype, other health conditions, medication, and previous treatment response.

## What happens during treatment?

Before the first session, the dermatologist selects an individual starting dose based on:

- skin phototype;
- extent of psoriasis;
- disease stage and activity;
- current medication;
- previous phototherapy;
- photosensitivity risk.

Treatment takes place in a dedicated Daavlin phototherapy booth. The eyes and selected healthy areas are protected, and the skin receives a calculated dose of therapeutic light. Initial sessions are short; exposure is increased cautiously according to skin response.

A typical schedule is 2–3 sessions per week. Total course length is individual and is adjusted through ongoing assessment of clearance and tolerance.

## Benefits of Daavlin phototherapy

- an established option for psoriasis;
- predominantly skin-directed action;
- brief, painless sessions;
- even treatment of large body areas;
- can be combined with topical therapy;
- may be used as an additional option when systemic treatment is not preferred or needs to be limited.

For children, pregnant patients, or those who are breastfeeding, phototherapy must be considered individually after a dermatologist and relevant clinicians assess risks and benefits. It should never be started without medical supervision.

## Contraindications and precautions

Phototherapy is not suitable for everyone. Extra caution or a different approach may be required with:

- increased sensitivity to ultraviolet light;
- photosensitising medication;
- certain inherited photosensitivity disorders;
- skin cancer or high skin-cancer risk;
- severe uncontrolled illness;
- suspicious skin lesions.

Mild redness may occur after treatment. Strong burning, a severe reaction, or blistering should be reported before the next session.

## Why choose Radeski Skin Clinic?

At Radeski Skin Clinic, treatment is delivered on professional Daavlin equipment under dermatologist supervision. The aim is not only to reduce visible plaques, but also to identify triggers, improve daily skin care, and support the longest possible remission.

Our approach includes:

- an individual phototherapy protocol;
- controlled dosing at every session;
- ongoing monitoring of treatment response;
- combination with topical or other therapy when indicated;
- practical advice on daily care and flare prevention.

## Book a consultation

If psoriasis plaques, itching, or frequent flares affect you, arrange a dermatologist assessment. The doctor will determine whether Daavlin UVB 311–312 nm phototherapy is appropriate for your situation.

Radeski Skin Clinic provides patients in Kokand and the Fergana Valley with individual psoriasis-management plans based on modern international principles.`;
}

export const PSORIASIS_DAAVLIN_KOKAND_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Qo‘qonda psoriazni Daavlin UVB 311–312 nm fototerapiyasi bilan davolash: kimlarga mos, kurs qanday o‘tadi, afzalliklari va ehtiyot choralari.',
    body: uzBody(),
    keyTakeaways: [
      'Psoriaz yuqumli emas; zamonaviy davolash uzoq remissiyaga yordam beradi',
      'Daavlin tor tasma UVB 311–312 nm teridagi yallig‘lanish va ortiqcha hujayra bo‘linishiga ta’sir qiladi',
      'Kurs ko‘pincha haftasiga 2–3 seans, doza esa individual belgilanadi',
      'Fototerapiya faqat dermatolog nazorati va qarshi ko‘rsatmalar bahosidan so‘ng o‘tkaziladi',
    ],
    tags: ['Psoriaz', 'Daavlin', 'UVB 311', 'Fototerapiya', 'Qoqon', 'Fargona', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Yangi qipiqlanuvchi plakalar paydo bo‘lsa',
      'Qichishish yoki yallig‘lanish kuchaysa',
      'Toshmalar katta maydonga tarqalsa',
      'Tashqi dorilar yetarli yordam bermasa',
      'Bo‘g‘im og‘rig‘i, shish yoki harakat cheklanishi qo‘shilsa',
    ],
    faq: [
      {
        question: 'Fototerapiya psoriazni butunlay davolaydimi?',
        answer:
          'Yo‘q, psoriaz surunkali kasallik. Fototerapiya simptomlarni kamaytirish, terini tozalash va remissiyani uzaytirishga yordam beradi.',
      },
      {
        question: 'Muolaja og‘riqlimi?',
        answer:
          'Odatda og‘riqsiz. Seans qisqa davom etadi. Yengil qizarish bo‘lishi mumkin; doza teri javobiga qarab nazorat qilinadi.',
      },
      {
        question: 'Necha seans kerak bo‘ladi?',
        answer:
          'Ko‘pincha haftasiga 2–3 seans belgilanadi, ammo umumiy son kasallik maydoni, faolligi va terining javobiga bog‘liq.',
      },
      {
        question: 'Homiladorlikda yoki bolalarda mumkinmi?',
        answer:
          'Ayrim holatlarda ko‘rib chiqilishi mumkin, lekin faqat dermatolog va tegishli shifokorlar individual xavf–foydani baholagandan so‘ng.',
      },
    ],
  },
  ru: {
    summary:
      'Лечение псориаза в Коканде на аппаратах Daavlin: узкополосная UVB-фототерапия 311–312 нм, показания, ход курса, преимущества и меры безопасности.',
    body: ruBody(),
    keyTakeaways: [
      'Псориаз не заразен; современная терапия помогает поддерживать длительную ремиссию',
      'Daavlin UVB 311–312 нм воздействует на воспаление и избыточное деление клеток кожи',
      'Обычно курс включает 2–3 сеанса в неделю с индивидуальным дозированием',
      'Фототерапия проводится только под контролем дерматолога после оценки противопоказаний',
    ],
    tags: ['Псориаз', 'Daavlin', 'UVB 311', 'Фототерапия', 'Коканд', 'Фергана', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Появились новые шелушащиеся бляшки',
      'Усилились зуд и воспаление',
      'Высыпания распространились на большую площадь',
      'Наружные препараты не дают достаточного эффекта',
      'Появились боль, отёк или скованность суставов',
    ],
    faq: [
      {
        question: 'Фототерапия полностью лечит псориаз?',
        answer:
          'Нет, псориаз является хроническим заболеванием. Фототерапия помогает уменьшить симптомы, очистить кожу и продлить ремиссию.',
      },
      {
        question: 'Процедура болезненна?',
        answer:
          'Обычно нет. Сеансы короткие. Возможное лёгкое покраснение контролируется подбором дозы по реакции кожи.',
      },
      {
        question: 'Сколько сеансов потребуется?',
        answer:
          'Часто назначают 2–3 сеанса в неделю, но общее количество зависит от площади, активности болезни и ответа кожи.',
      },
      {
        question: 'Можно ли детям или при беременности?',
        answer:
          'В отдельных случаях метод может рассматриваться только после индивидуальной оценки пользы и риска дерматологом и профильными врачами.',
      },
    ],
  },
  en: {
    summary:
      'Psoriasis treatment in Kokand with Daavlin narrow-band UVB 311–312 nm: who may benefit, how the course works, advantages, and safety precautions.',
    body: enBody(),
    keyTakeaways: [
      'Psoriasis is not contagious; modern treatment can support long remission',
      'Daavlin UVB 311–312 nm targets inflammation and excessive skin-cell turnover',
      'A common schedule is 2–3 sessions per week with individual dosing',
      'Phototherapy requires dermatologist supervision and contraindication screening',
    ],
    tags: ['Psoriasis', 'Daavlin', 'UVB 311', 'Phototherapy', 'Kokand', 'Fergana', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'New scaly plaques appear',
      'Itching or inflammation worsens',
      'The rash spreads across a large area',
      'Topical medication is not providing enough control',
      'Joint pain, swelling, or stiffness develops',
    ],
    faq: [
      {
        question: 'Does phototherapy cure psoriasis permanently?',
        answer:
          'No. Psoriasis is chronic. Phototherapy can reduce symptoms, clear the skin, and help extend remission.',
      },
      {
        question: 'Is treatment painful?',
        answer:
          'Usually not. Sessions are brief. Mild redness can occur and is managed by adjusting the dose to skin response.',
      },
      {
        question: 'How many sessions are needed?',
        answer:
          'A common schedule is 2–3 sessions per week, but the total depends on extent, disease activity, and skin response.',
      },
      {
        question: 'Can children or pregnant patients receive it?',
        answer:
          'It may be considered in selected cases only after a dermatologist and relevant clinicians assess individual risks and benefits.',
      },
    ],
  },
};

export const PSORIASIS_DAAVLIN_KOKAND_ARTICLE: Article = {
  id: 'art-psoriasis-daavlin-kokand',
  slug: 'psoriaz-davolash-daavlin-fototerapiya-qoqon',
  title: {
    uz: 'Qo‘qonda psoriazni Daavlin fototerapiyasi bilan davolash | Radeski Skin Clinic',
    ru: 'Лечение псориаза фототерапией Daavlin в Коканде | Radeski Skin Clinic',
    en: 'Daavlin Phototherapy for Psoriasis in Kokand | Radeski Skin Clinic',
  },
  summary: {
    uz: PSORIASIS_DAAVLIN_KOKAND_ARTICLE_CATALOG.uz.summary,
    ru: PSORIASIS_DAAVLIN_KOKAND_ARTICLE_CATALOG.ru.summary,
    en: PSORIASIS_DAAVLIN_KOKAND_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: PSORIASIS_DAAVLIN_KOKAND_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: PSORIASIS_DAAVLIN_KOKAND_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: PSORIASIS_DAAVLIN_KOKAND_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-07-30',
  image: null,
  images: { uz: null, ru: null, en: null },
  views: 0,
};
