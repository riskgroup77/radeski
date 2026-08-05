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
  return `## PRP-terapiya (plazmotorapiya) nima?

PRP (Platelet Rich Plasma) — bemorning o‘z qonidan ajratib olingan, trombotsitlarga boy plazma bilan ishlash usuli. Plazma teriga yoki bosh terisiga mikroinyeksiya orqali kiritiladi. Maqsad — tiklanish va o‘sish omillarini mahalliy yetkazib, teri sifatini yaxshilash yoki soch follikulalarini qo‘llab-quvvatlash.

Bu usul “yot” preparat kiritishga emas, balki bemorning o‘z biologik resursiga tayanadi. Shuning uchun ko‘pincha yaxshi toqat qilinadi. Lekin xavfsizlik va natija uchun muhim jihat bor: PRP sifatli bo‘lishi uchun qon ko‘rsatkichlari yaxshi baholangan bo‘lishi kerak. Shuning uchun muolajadan oldin tahlillar — shunchaki rasmiyatchilik emas, balki tibbiy rejaning bir qismi.

Radeski Skin Clinic’da PRP oldidan shifokor konsultatsiya o‘tkazadi, ko‘rsatma va qarshi ko‘rsatmalarni baholaydi, keyin aynan sizga kerakli laboratoriya hajmini belgilaydi.

## Nega PRP oldidan tahlil topshiriladi?

Laboratoriya tekshiruvi bir necha vazifani bajaradi:

- **qarshi ko‘rsatmalarni** erta aniqlash (faol infeksiya, og‘ir anemiy, jiddiy coagulopatiya va hokazo);
- **PRP sifatini** baholash — ayniqsa trombotsitlar soni muhim;
- yashirin **yallig‘lanish** yoki tizimli muammolarni topish;
- **qon ivishi** bilan bog‘liq xavfni kamaytirish (inyeksiya muolajasi uchun);
- soch to‘kilishi sababini to‘g‘ri tushunish (temir, vitamin D, gormonlar);
- davolashdan kutiladigan natijani realistik qilib qo‘yish.

Qisqasi: tahlilsiz ham ba’zan muolaja qilish mumkin, lekin to‘g‘ri tahlillar bilan xavfsizlik va samaradorlik odatda yuqoriroq bo‘ladi.

## Qanday tahlillar ko‘pincha kerak bo‘ladi?

Quyidagi ro‘yxat — eng ko‘p tavsiya etiladigan bloklar. Bu “hamma uchun majburiy check-list” emas. Yakuniy ro‘yxatni shifokor maqsadga (yuz yosharishi yoki soch) va sog‘liq tarixiga qarab tuzadi.

### 1. Umumiy qon tahlili (OAK)

PRP oldidan asosiy boshlang‘ich tahlil.

U quyidagilarni ko‘rsatadi:

- gemoglobin va eritrotsitlar (anemiya bormi);
- **trombotsitlar soni** — PRP “ishchi kuchi”;
- leykotsitlar va yallig‘lanish belgilari;
- umumiy qon manzarasi.

Trombotsitlar past bo‘lsa, tayyorlangan plazmada o‘sish omillari ham pastroq bo‘lishi mumkin. Shuning uchun OAK — eng muhim qadamlardan biri.

### 2. Koagulogramma (qon ivishi)

Odatda baholanadi:

- protrombin vaqti;
- MNO;
- AChTV;
- fibrinogen.

Inyeksiya muolajasida qon ketish yoki gematoma xavfini oldindan bilish muhim. Ayrim dorilar (masalan, qon suyultiruvchilar) ham natijaga ta’sir qiladi — shuning uchun shifokorga barcha dorilarni aytish kerak.

### 3. Biokimyoviy qon tahlili

Shifokor holatga qarab belgilashi mumkin:

- ALT, AST, bilirubin (jigar);
- kreatinin, mochevina (buyrak);
- umumiy oqsil;
- glyukoza.

Bu blok umumiy “ichki muhit”ni baholaydi: jigar/buyrak funksiyasi, metabolik fon. Agar og‘ir buzilishlar bo‘lsa, avval ularni tekshirish/tuzatish muhimroq bo‘lishi mumkin.

### 4. Infeksiyalar bo‘yicha skrining

Ko‘p klinik amaliyotda PRP oldidan quyidagilar ko‘rib chiqiladi:

- OIV;
- gepatit B;
- gepatit C;
- sifilis.

Bu — bemor xavfsizligi va tibbiy standartlar uchun muhim. Aniq ro‘yxat klinik protokol va shifokor qaroriga bog‘liq.

### 5. Ferritin (ayniqsa soch uchun)

Soch to‘kilishida ferritin — eng muhim ko‘rsatkichlardan biri. Gemoglobin “normal” bo‘lsa ham, **yashirin temir tanqisligi** bo‘lishi mumkin. Bunday holda PRP yolg‘iz o‘zi kutilgan natijani bermasligi mumkin: avval temir zahirasini tiklash kerak.

### 6. D vitamini

D vitamini tanqisligi ko‘pincha:

- soch to‘kilishi;
- soch o‘sishining sekinlashishi;
- teri sifatining yomonlashishi

bilan birga uchraydi. Aniq yetishmovchilikda shifokor avval korreksiyani, keyin PRP kursini rejalashtirishi mumkin.

### 7. Gormonlar va qo‘shimcha tekshiruvlar (ko‘rsatmaga qarab)

Soch to‘kilishi sababi noaniq yoki klinik belgilari shunga ishora qilsa, quyidagilar qo‘shilishi mumkin:

- TTG, erkin T4 (qalqonsimon bez);
- B12, foliy kislotasi, sink;
- DHEA-S;
- umumiy va erkin testosteron;
- prolaktin;
- LH, FSH;
- estradiol (ko‘rsatmaga qarab).

Ro‘yxat jins, yosh, shikoyatlar va anamnezga qarab tanlanadi. Maqsad — “ko‘proq tahlil” emas, balki **sababni topish**.

## Har bir bemorga hammasi kerakmi?

Yo‘q.

Agar PRP yuz yosharishi/teri sifatini yaxshilash uchun bo‘lsa va bemor umumiy sog‘lom ko‘rinishda bo‘lsa, ko‘pincha yetarli:

- umumiy qon tahlili;
- koagulogramma;
- infeksiya skriningi (klinika/shifokor talabiga ko‘ra).

Soch to‘kilishini davolashda esa tekshiruv odatda kengayadi: ferritin, D vitamini va zarurat bo‘lsa gormonal panel qo‘shiladi. Chunki soch to‘kilishi — alohida belgi; sababi topilmasa, faqat inyeksiya bilan barqaror natija qiyin.

## Tahlilga qanday tayyorlanish kerak?

Ishonchli natija uchun tavsiya etiladi:

- qonni ertalab, och qoringa topshirish;
- bir kun oldin alkogoldan voz kechish;
- og‘ir jismoniy yuklamani cheklash;
- yetarli suv ichish;
- qabul qilinayotgan barcha dorilar va qo‘shimchalar haqida shifokorga aytish.

Ba’zi dorilar (temir, biotin, gormonlar, qon suyultiruvchilar) natijani o‘zgartirishi mumkin. O‘zingiz dori to‘xtatmang — faqat shifokor bilan kelishing.

## Tahlildan keyin qachon PRP qilish mumkin?

Ko‘pgina natijalar taxminan **10–30 kun** amal qiladi, lekin “muddat” qat’iy emas. Yakuniy qarorni shifokor bemorning klinik holatiga qarab qabul qiladi. Agar o‘tkir kasallik, isitma yoki yangi dori kursib qolgan bo‘lsa, reja o‘zgarishi mumkin.

## Radeski Skin Clinic’da yondashuv

Radeski Skin Clinic’da plazmotorapiya tajribali mutaxassislar tomonidan, sertifikatlangan PRP tizimlari va steril protokol asosida o‘tkaziladi. Har bir bemor avval konsultatsiyadan o‘tadi: ko‘rsatmalar, qarshi ko‘rsatmalar va aynan kerakli tahlillar muhokama qilinadi.

Maqsad — “har kimga bir xil paket” emas, balki xavfsiz va mantiqiy individual reja.

## Xulosa

PRP oldidan tahlillar — xavfsizlikni oshirish, qarshi ko‘rsatmalarni chiqarib tashlash va (ayniqsa sochda) sababni to‘g‘ri topish uchun kerak. Hammaga bir xil uzun ro‘yxat shart emas: hajmni shifokor belgilaydi. To‘g‘ri tayyorgarlik bilan muolaja ancha ishonchli va maqsadga yo‘naltirilgan bo‘ladi.`;
}

function ruBody(): string {
  return `## Что такое PRP-терапия (плазмотерапия)?

PRP (Platelet Rich Plasma) — метод, при котором из собственной крови пациента получают плазму, обогащённую тромбоцитами, и вводят её микроинъекциями в кожу лица или кожи головы. Цель — локально доставить факторы роста и поддержать обновление тканей: улучшить качество кожи или помочь волосяным фолликулам.

Процедура не предполагает введение «чужеродных» препаратов — используется биологический ресурс самого пациента. Поэтому PRP обычно хорошо переносится. Но безопасность и результат зависят от качества крови и исходного состояния организма. Именно поэтому анализы перед PRP — это не формальность, а часть правильной медицинской подготовки.

В Radeski Skin Clinic перед процедурой врач проводит консультацию, оценивает показания и противопоказания и назначает именно тот объём лабораторных исследований, который нужен в вашем случае.

## Зачем сдавать анализы перед PRP?

Лабораторная диагностика помогает:

- заранее выявить **противопоказания** (острая инфекция, выраженная анемия, серьёзные нарушения свёртываемости и др.);
- оценить **качество крови** для PRP — особенно число тромбоцитов;
- найти скрытые **воспалительные** или системные изменения;
- снизить риски, связанные с **свёртываемостью** (важно для инъекционной процедуры);
- при выпадении волос — точнее понять причину (железо, витамин D, гормоны);
- сделать ожидания от лечения более реалистичными.

Коротко: без анализов PRP иногда всё же проводят, но с грамотным обследованием процедура обычно безопаснее и осмысленнее.

## Какие анализы чаще всего нужны?

Ниже — наиболее распространённые блоки. Это не единый «обязательный список для всех». Итоговый перечень формирует врач с учётом цели (омоложение кожи или лечение волос) и истории здоровья.

### 1. Общий анализ крови (ОАК)

Базовый старт перед плазмотерапией.

Он показывает:

- гемоглобин и эритроциты (нет ли анемии);
- **количество тромбоцитов** — ключевой ресурс PRP;
- лейкоциты и признаки воспаления;
- общую картину крови.

Если тромбоцитов мало, концентрация факторов роста в готовой PRP может быть ниже. Поэтому ОАК — один из самых важных этапов.

### 2. Коагулограмма

Обычно оценивают:

- протромбиновое время;
- МНО;
- АЧТВ;
- фибриноген.

При инъекциях важно понимать риск кровоточивости и гематом. Некоторые препараты (например, антикоагулянты/антиагреганты) тоже влияют на картину — обязательно сообщите врачу обо всех лекарствах.

### 3. Биохимический анализ крови

По показаниям врач может назначить:

- АЛТ, АСТ, билирубин (печень);
- креатинин, мочевину (почки);
- общий белок;
- глюкозу.

Этот блок помогает оценить «внутренний фон» организма. При выраженных отклонениях сначала может потребоваться дообследование или коррекция состояния.

### 4. Анализы на инфекции

В практике часто рассматривают:

- ВИЧ;
- гепатит B;
- гепатит C;
- сифилис.

Это стандарт безопасности для многих медицинских процедур. Точный список зависит от протокола клиники и решения врача.

### 5. Ферритин (особенно при выпадении волос)

При алопеции ферритин — один из важнейших показателей. Даже при «нормальном» гемоглобине возможен **скрытый дефицит железа**. В такой ситуации одна только PRP может дать слабый эффект: сначала нужно восстановить запасы железа.

### 6. Витамин D

Дефицит витамина D нередко сочетается с:

- выпадением волос;
- замедленным ростом волос;
- ухудшением качества кожи.

При выраженном дефиците врач может сначала назначить коррекцию, а курс PRP — спланировать после стабилизации.

### 7. Гормональные и дополнительные исследования (по показаниям)

Если причина выпадения неясна или есть клинические подсказки, могут добавить:

- ТТГ, свободный Т4;
- витамин B12, фолиевую кислоту, цинк;
- ДГЭА-S;
- общий и свободный тестостерон;
- пролактин;
- ЛГ, ФСГ;
- эстрадиол (по показаниям).

Набор зависит от пола, возраста, жалоб и анамнеза. Задача — не «сдать всё подряд», а **найти причину**.

## Нужно ли сдавать все анализы каждому?

Нет.

Если PRP делают для омоложения лица у в целом здорового человека, часто достаточно:

- общего анализа крови;
- коагулограммы;
- скрининга инфекций (по требованиям клиники/врача).

При лечении выпадения волос обследование обычно шире: ферритин, витамин D и при необходимости гормональный блок. Выпадение — симптом; без поиска причины одной процедурой устойчивый результат получить сложнее.

## Как подготовиться к сдаче анализов?

Для более достоверных результатов:

- сдавайте кровь утром натощак;
- за сутки исключите алкоголь;
- избегайте интенсивных нагрузок;
- пейте достаточно воды;
- сообщите врачу обо всех лекарствах и БАДах.

Некоторые препараты (железо, биотин, гормоны, кроворазжижающие) могут влиять на результат. Не отменяйте лечение самостоятельно — только по согласованию с врачом.

## Когда можно делать PRP после анализов?

Большинство результатов актуальны примерно **10–30 дней**, но жёсткого универсального срока нет. Финальное решение принимает врач по клинической ситуации. При простуде, температуре или новых обстоятельствах план может измениться.

## Подход Radeski Skin Clinic

В Radeski Skin Clinic плазмотерапию проводят опытные специалисты с использованием сертифицированных PRP-систем и стерильных протоколов. Каждому пациенту — консультация: показания, противопоказания и необходимый объём обследований обсуждаются индивидуально.

Цель — не «одинаковый пакет для всех», а безопасный и логичный персональный план.

## Заключение

Анализы перед PRP помогают исключить противопоказания, повысить безопасность и (особенно при выпадении волос) понять причину проблемы. Одинаковый длинный список нужен не всем: объём определяет врач. Правильная подготовка делает процедуру заметно надёжнее и целенаправленнее.`;
}

function enBody(): string {
  return `## What is PRP (platelet-rich plasma) therapy?

PRP uses a patient’s own blood to create plasma concentrated with platelets, then delivers it with microinjections into facial skin or the scalp. The aim is to bring growth factors to the treatment area — supporting skin quality or helping hair follicles.

Because the material comes from the patient, PRP is usually well tolerated. Still, safety and results depend on blood quality and overall health. That is why lab tests before PRP are not paperwork for its own sake — they are part of proper medical preparation.

At Radeski Skin Clinic, a doctor consults the patient first, reviews indications and contraindications, and orders the lab panel that actually fits the case.

## Why test before PRP?

Laboratory work helps to:

- spot **contraindications** early (acute infection, significant anemia, major clotting problems, and similar issues);
- judge **blood quality** for PRP — especially platelet count;
- find hidden **inflammation** or systemic changes;
- reduce **bleeding-related** risks of an injection procedure;
- in hair loss — clarify contributors such as iron stores, vitamin D, or hormones;
- keep treatment expectations realistic.

In short: PRP is sometimes done with a minimal workup, but a smart lab plan usually makes care safer and more effective.

## Which tests are most often needed?

The list below covers common blocks. It is not a single mandatory checklist for everyone. The final panel is chosen by the doctor based on the goal (skin rejuvenation vs hair) and health history.

### 1. Complete blood count (CBC)

The usual starting test before PRP.

It shows:

- hemoglobin and red cells (anemia screening);
- **platelet count** — the working resource of PRP;
- white cells and inflammation clues;
- the overall blood picture.

If platelets are low, the finished PRP may carry fewer growth factors. That is why CBC matters so much.

### 2. Coagulation profile

Often includes:

- prothrombin time;
- INR;
- aPTT;
- fibrinogen.

For injections, bleeding and bruising risk should be understood in advance. Anticoagulants and antiplatelet drugs also matter — tell your doctor about every medication you take.

### 3. Blood biochemistry

Depending on the case, a doctor may add:

- ALT, AST, bilirubin (liver);
- creatinine, urea (kidneys);
- total protein;
- glucose.

This block reviews the body’s internal background. Marked abnormalities may need more evaluation or correction before elective PRP.

### 4. Infection screening

Commonly considered tests include:

- HIV;
- hepatitis B;
- hepatitis C;
- syphilis.

These are safety standards in many medical settings. Exact requirements follow clinic protocol and the doctor’s judgment.

### 5. Ferritin (especially for hair loss)

In hair shedding, ferritin is one of the most useful markers. Hemoglobin can look “normal” while **latent iron deficiency** still exists. In that situation, PRP alone may underperform until iron stores improve.

### 6. Vitamin D

Low vitamin D often accompanies:

- hair shedding;
- slower hair growth;
- poorer skin quality.

With a clear deficiency, correcting levels first can be more sensible than rushing into a full PRP course.

### 7. Hormones and extra tests (when indicated)

If hair loss has an unclear cause or clinical clues point that way, the doctor may add:

- TSH, free T4;
- vitamin B12, folate, zinc;
- DHEA-S;
- total and free testosterone;
- prolactin;
- LH, FSH;
- estradiol when indicated.

The panel depends on sex, age, symptoms, and history. The goal is not “more tests,” but finding the **cause**.

## Does everyone need the full panel?

No.

For facial rejuvenation in an otherwise healthy person, a typical minimum is often:

- complete blood count;
- coagulation profile;
- infection screening required by the clinic or doctor.

For hair loss, the workup is usually wider: ferritin, vitamin D, and hormones when needed. Shedding is a symptom; without addressing the driver, injections alone rarely give a lasting result.

## How to prepare for blood tests

For more reliable results:

- give blood in the morning, fasting;
- avoid alcohol the day before;
- skip intense workouts beforehand;
- stay hydrated;
- list all medicines and supplements for your doctor.

Iron, biotin, hormones, and blood thinners can affect results. Do not stop prescribed treatment on your own — discuss it first.

## When can PRP be done after testing?

Many results stay useful for about **10–30 days**, but there is no universal hard expiry. The doctor decides based on the clinical picture. A cold, fever, or new medication may change timing.

## The Radeski Skin Clinic approach

At Radeski Skin Clinic, PRP is performed by experienced specialists using certified systems and sterile protocols. Every patient starts with a consultation covering indications, contraindications, and the right lab scope.

The aim is not one identical package for all — it is a safe, logical individual plan.

## Bottom line

Tests before PRP help rule out contraindications, raise safety, and (especially in hair loss) clarify the cause. Not everyone needs a long identical list — the doctor selects the volume. Good preparation makes the procedure more reliable and purposeful.`;
}

export const PRP_LAB_TESTS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'PRP-terapiya (plazmotorapiya) oldidan qanday tahlillar kerak: OAK, koagulogramma, infeksiyalar, ferritin, D vitamini va soch uchun qo‘shimcha tekshiruvlar — Radeski Skin Clinic qo‘llanmasi.',
    body: uzBody(),
    keyTakeaways: [
      'PRP oldidan tahlillar xavfsizlik va plazma sifati uchun muhim',
      'OAK va trombotsitlar soni — asosiy boshlang‘ich tekshiruv',
      'Soch to‘kilishida ferritin va D vitamini ko‘pincha qo‘shiladi',
      'Har kimga bir xil uzun ro‘yxat shart emas — hajmni shifokor belgilaydi',
    ],
    tags: [
      'PRP',
      'Plazmotorapiya',
      'Tahlillar',
      'Ferritin',
      'Trixologiya',
      'Fargona',
      'Qoqon',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'PRP qilishni rejalashtirayotgan bo‘lsangiz',
      'Soch to‘kilishi kuchaygan bo‘lsa',
      'Oldin anemiy, jigar yoki qon ivishi muammosi bo‘lgan bo‘lsa',
      'Qon suyultiruvchi dorilar ichayotgan bo‘lsangiz',
      'Tahlil natijalarini tushuntirish kerak bo‘lsa',
    ],
    faq: [
      {
        question: 'Tahlilsiz PRP qilish mumkinmi?',
        answer:
          'Ba’zi hollarda shifokor minimal yoki kechiktirilgan tekshiruv bilan qaror qabul qilishi mumkin. Lekin boshlang‘ich tahlillar xavfsizlikni sezilarli oshiradi.',
      },
      {
        question: 'Soch uchun ferritin majburiymi?',
        answer:
          'Ko‘pincha ha — gemoglobin normal bo‘lsa ham yashirin temir tanqisligi PRP samarasini pasaytirishi mumkin.',
      },
      {
        question: 'Shamollashda PRP bo‘ladimi?',
        answer:
          'Yo‘q. O‘tkir infeksiya yoki isitma paytida muolajani to‘liq sog‘ayguncha kechiktirish tavsiya etiladi.',
      },
      {
        question: 'Har kurs oldidan tahlilni qayta topshirish kerakmi?',
        answer:
          'Agar natijalar hali dolzarb va holat o‘zgarmagan bo‘lsa, odatda takrorlash shart emas. Yakuniy qarorni shifokor beradi.',
      },
      {
        question: 'Yuz uchun PRP bilan soch uchun PRP tahlillari bir xilmi?',
        answer:
          'Asosiy bloklar o‘xshash bo‘lishi mumkin, lekin soch to‘kilishida ferritin, D vitamini va gormonlar ko‘proq kerak bo‘ladi.',
      },
    ],
  },
  ru: {
    summary:
      'Какие анализы сдать перед PRP-терапией (плазмотерапией): ОАК, коагулограмма, инфекции, ферритин, витамин D и расширенное обследование при выпадении волос — гид Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'Анализы перед PRP нужны для безопасности и качества плазмы',
      'ОАК и число тромбоцитов — базовый старт',
      'При выпадении волос часто добавляют ферритин и витамин D',
      'Одинаковый длинный список нужен не всем — объём выбирает врач',
    ],
    tags: [
      'PRP',
      'Плазмотерапия',
      'Анализы',
      'Ферритин',
      'Трихология',
      'Фергана',
      'Коканд',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Вы планируете PRP-процедуру',
      'Усилилось выпадение волос',
      'Ранее были анемия, проблемы печени или свертываемости',
      'Вы принимаете кроворазжижающие препараты',
      'Нужна расшифровка результатов анализов',
    ],
    faq: [
      {
        question: 'Можно ли делать PRP без анализов?',
        answer:
          'В отдельных случаях врач может принять решение с минимальным объёмом обследования. Но базовые анализы заметно повышают безопасность.',
      },
      {
        question: 'Обязателен ли ферритин при выпадении волос?',
        answer:
          'Часто да: даже при нормальном гемоглобине скрытый дефицит железа снижает эффективность лечения.',
      },
      {
        question: 'Можно ли делать PRP при простуде?',
        answer:
          'Нет. При острой инфекции или температуре процедуру лучше перенести до полного выздоровления.',
      },
      {
        question: 'Нужно ли сдавать анализы перед каждым курсом?',
        answer:
          'Если результаты ещё актуальны и самочувствие стабильно, повтор часто не требуется. Решение принимает врач.',
      },
      {
        question: 'Одинаковы ли анализы для PRP лица и для волос?',
        answer:
          'Базовый набор может совпадать, но при выпадении волос чаще нужны ферритин, витамин D и гормональный блок.',
      },
    ],
  },
  en: {
    summary:
      'Blood tests before PRP therapy: CBC, coagulation, infection screening, ferritin, vitamin D, and when a wider hair-loss panel is needed — a practical guide from Radeski Skin Clinic.',
    body: enBody(),
    keyTakeaways: [
      'Pre-PRP labs support safety and plasma quality',
      'CBC and platelet count are the usual starting point',
      'For hair loss, ferritin and vitamin D are often added',
      'Not everyone needs the same long list — the doctor chooses the scope',
    ],
    tags: [
      'PRP',
      'Lab tests',
      'Ferritin',
      'Trichology',
      'Hair loss',
      'Fergana',
      'Kokand',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'You are planning PRP',
      'Hair shedding has increased',
      'You have a history of anemia, liver, or clotting issues',
      'You take blood-thinning medicines',
      'You need help interpreting lab results',
    ],
    faq: [
      {
        question: 'Can PRP be done without tests?',
        answer:
          'In some cases a doctor may proceed with a minimal workup. Even a basic panel meaningfully improves safety.',
      },
      {
        question: 'Is ferritin required before hair PRP?',
        answer:
          'Often yes — latent iron deficiency can blunt results even when hemoglobin looks normal.',
      },
      {
        question: 'Can I have PRP while I have a cold?',
        answer:
          'No. With an acute infection or fever, delay the session until you have fully recovered.',
      },
      {
        question: 'Do I need new tests before every PRP course?',
        answer:
          'If recent results are still valid and your health is stable, repeats are often unnecessary. Your doctor decides.',
      },
      {
        question: 'Are face PRP and hair PRP labs the same?',
        answer:
          'The core panel can overlap, but hair loss more often needs ferritin, vitamin D, and selected hormones.',
      },
    ],
  },
};

export const PRP_LAB_TESTS_ARTICLE: Article = {
  id: 'art-prp-terapiya-oldidan-tahlillar',
  slug: 'prp-terapiya-oldidan-tahlillar',
  title: {
    uz: 'PRP-terapiya (plazmotorapiya) oldidan qanday tahlillar topshirish kerak?',
    ru: 'Какие анализы нужно сдать перед PRP-терапией (плазмотерапией)?',
    en: 'Which Blood Tests Are Needed Before PRP Therapy?',
  },
  summary: {
    uz: PRP_LAB_TESTS_ARTICLE_CATALOG.uz.summary,
    ru: PRP_LAB_TESTS_ARTICLE_CATALOG.ru.summary,
    en: PRP_LAB_TESTS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: PRP_LAB_TESTS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: PRP_LAB_TESTS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: PRP_LAB_TESTS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-08-05',
  image: null,
  images: {
    uz: null,
    ru: null,
    en: null,
  },
  views: 0,
};
