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

const COVER = '/science/science-data.webp';

function uzBody(): string {
  return `## Dermatopatologiya nima?

**Dermatopatologiya** — teri biopsiya namunalarini mikroskop ostida o‘rganib, kasallikning haqiqiy tabiatini aniqlashga qaratilgan laboratoriya yo‘nalishi. Radeski Skin & Aesthetic Clinic da **dermatopatologiya bo‘limi** mavjud; mutaxassislar Rossiya va Yevropaning yetakchi klinikalarida o‘qigan.

Teri — inson tanasidagi eng katta organ. Melanoma kabi teri o‘smalari yuqori xavfli bo‘lib, erta va keng metastaz berishi mumkin. Vaqtida yoki noto‘g‘ri tashxis qo‘yilsa, oqibatlar og‘ir bo‘lishi mumkin. Shuning uchun shubhali hosilada faqat ko‘z bilan ko‘rish yetarli emas — **gistologik tekshiruv** kerak bo‘ladi.

![Dermatopatologiya — Radeski Skin Clinic](${COVER})

## Nega gistologik tahlil kerak?

Teri kasalliklari ko‘pincha bir-biriga o‘xshash belgilar bilan kechadi. Shifokor ba’zan faqat klinik ko‘rinishga qarab qoladi — bu esa noto‘g‘ri davolash yoki kechikish xavfini oshiradi.

**Gistologik diagnostika** quyidagilarni aniqlaydi:

- o‘sma yaxshi yoki yomon sifatlimi;
- qaysi turdagi dermatoz;
- infeksiya (zamburug‘, bakteriya) bormi;
- teri qatlamlarida qanday o‘zgarishlar bor.

Bugungi kunda teri gistologiyasi — **butun dunyo bo‘ylab qabul qilingan standart**. Minimal travmatik jarrohlik asboblari bilan namuna olish va laboratoriyada tahlil qilish aniq va xavfsiz yo‘l hisoblanadi.

## Qanday kasalliklar tekshiriladi?

### O‘smaviy patologiya

- nevüs va boshqa teri hosilalari (WHO va xalqaro tasniflar bo‘yicha);
- **melanoma** — Breslow, Clark, perivaskulyar va perinevral invaziya, mitozlar, rezeksiya chegaralari bo‘yicha baholash;
- bazal hujayrali va squamoz hujayrali teri raklari;
- Merkel hujayra rak;
- teri qo‘shimcha organlari o‘smalari;
- yumshoq to‘qimalar o‘smalari;
- V- va T-hujayrali teri limfomalari (immunogistokimyoviy usullar bilan).

### O‘smaviy bo‘lmagan patologiya

- turli **dermatozlar**;
- zamburug‘ va bakterial kasalliklar;
- fotodermatitlar;
- psixogen dermatozlar;
- irsiy, metabolik va endokrin dermatozlar;
- immunitet va biriktiruvchi to‘qima patologiyasi;
- soch va tirnoq kasalliklari.

Bu kasalliklar keng tarqalgan, bemor hayot sifati sezilarli pasayishi mumkin. Aniq tashxis — to‘g‘ri davolashning birinchi qadami.

## Radeski klinikasidagi diagnostik imkoniyatlar

Radeski Skin & Aesthetic Clinic dermatopatologiya bo‘limida quyidagi xizmatlar ko‘rsatiladi:

1. **Panch-biopsiya tahlili** — maxsus gistoximik bo‘yashlar bilan zamburug‘ infeksiyasi, dermal mukin, mast hujayralar, elastik tolalar buzilishi aniqlanadi.
2. **Nevüs va boshqa hosilalar** — WHO va xalqaro tasniflar bo‘yicha aniq formulirovka.
3. **Melanoma diagnostikasi** — Koroliyalik patolog-anatomlar kolleji tartibida prognoz va tahlil (Breslow, Clark, invaziya, mitozlar, rezeksiya chegaralari).
4. **Sentinel limfa tugunlari** — melanomada mikrometastazlarni immunogistokimyoviy usullar bilan aniqlash.
5. **Bazalioma, squamoz hujayra raki, Merkel rak** — minimal ma’lumotlar to‘plami bo‘yicha tashxis va prognoz.
6. **Teri qo‘shimcha organlari o‘smalari** — soch, tirnoq va bog‘liq tuzilmalar.
7. **Yumshoq to‘qima o‘smalari** — patomorfologik baholash.
8. **Teri limfomalari** — V- va T-hujayra markerlari bo‘yicha immunogistokimyoviy tekshiruv.
9. **Ilmiy hamkorlik** — tadqiqot va klinik amaliyot integratsiyasi.

## Biopsiya qanday o‘tadi?

Biopsiya odatda shubhali hosiladan kichik to‘qima namunasi olishni anglatadi. Jarayon:

1. Dermatolog yoki dermatoonkolog ko‘rigidan o‘tadi.
2. Kerak bo‘lsa dermatoskopiya bilan chuqurroq baholash.
3. Lokal og‘riqsizlantirish bilan namuna olinadi.
4. Namuna laboratoriyaga yuboriladi.
5. Patolog mikroskop ostida tahlil qiladi.
6. Aniq xulosa va keyingi davolash rejasi belgilanadi.

Natija odatda bir necha kun ichida tayyor bo‘ladi — o‘sma shubhasi bo‘lsa, tezlik ayniqsa muhim.

## Dermatopatolog va dermatolog hamkorligi

Radeski Skin Clinic da patolog va dermatolog birgalikda ishlaydi: klinik ma’lumot + laboratoriya natijasi = **aniq tashxis**. Bu yondashuv melanoma, bazalioma va murakkab dermatozlarda eng muhim.

Bog‘liq xizmatlar: [Dermatopatologiya](/uz/services/dermatopatologiya), [Teri biopsiyasi](/uz/services/dermatopatologiya/gistolog), [Dermatoskopiya](/uz/services/dermatoskopiya), [Dermatoonkologiya](/uz/services/dermatoonkologiya), [Bazalioma haqida maqola](/uz/articles/bazalioma-teri-raki), [Narxlar](/uz/prices).`;
}

function ruBody(): string {
  return `## Что такое дерматопатология?

**Дерматопатология** — направление медицины, в котором биопсийные образцы кожи исследуют под микроскопом для точной верификации диагноза. В Radeski Skin & Aesthetic Clinic действует **отделение дерматопатологии**; специалисты проходили обучение в лучших клиниках России и Европы.

Кожа — самый большой по площади орган в организме человека. Опухоли кожи, такие как **меланома**, отличаются высокой злокачественностью и склонностью к раннему метастазированию. Несвоевременная или некачественная диагностика может иметь роковые последствия. Поэтому при подозрительных образованиях одного клинического осмотра недостаточно — необходима **гистологическая диагностика**.

![Дерматопатология — Radeski Skin Clinic](${COVER})

## Зачем нужно гистологическое исследование?

Многие заболевания кожи имеют схожие клинические признаки. Лечащий врач порой остаётся один на один с картиной, которая не позволяет понять природу процесса — а значит, назначить правильное лечение.

**Гистологическая диагностика** позволяет определить:

- доброкачественное или злокачественное образование;
- тип дерматоза;
- наличие инфекции (грибковой, бактериальной);
- изменения в слоях кожи.

В настоящее время гистологическое исследование кожи — **широко принятая мировая практика**. Существует широкий перечень хирургических инструментов, позволяющих аккуратно и минимально травматично получать необходимые образцы.

## Какую патологию исследуют?

### Опухолевая патология

- невусы и другие образования кожи (по классификации ВОЗ и международным стандартам);
- **меланома** — оценка по Breslow, Clark, периваскулярной и периневральной инвазии, подсчёт митозов, состояние краёв резекции;
- базально-клеточный и плоскоклеточный рак кожи;
- рак клеток Меркеля;
- опухоли придатков кожи;
- опухоли мягких тканей;
- В- и Т-клеточные лимфомы кожи (иммуногистохимические методы).

### Неопухолевая патология

- разнообразные **дерматозы**;
- заболевания, вызванные грибковыми и бактериальными агентами;
- фотодерматиты;
- психогенные дерматозы;
- наследственные, метаболические, эндокринные дерматозы;
- патология иммунной системы и соединительной ткани;
- заболевания волос и ногтей.

Это широко распространённая патология, которая доставляет много страданий пациентам и значительно ухудшает качество жизни. Точный диагноз — первый шаг к эффективному лечению.

## Диагностические возможности в Radeski Skin & Aesthetic Clinic

1. **Исследование панч-биоптатов** — специальные гистохимические окраски для выявления грибковой инфекции, дермального муцина, тучных клеток, нарушения эластических волокон.
2. **Диагностика невусов и других образований** — формулировка в соответствии с классификацией ВОЗ и других международных стандартов.
3. **Диагностика меланом** — формулировка диагноза и прогноза по порядку, утверждённому Королевским колледжем патологоанатомов (Breslow, Clark, инвазия, митозы, края резекции).
4. **Сторожевые лимфатические узлы** — выявление микрометастазов при меланоме иммуногистохимическими методами.
5. **Базально-клеточный, плоскоклеточный рак, рак Меркеля** — согласно минимальному набору данных Королевского колледжа патологоанатомов.
6. **Опухоли придатков кожи** — волосы, ногти и связанные структуры.
7. **Опухоли мягких тканей** — патоморфологическая оценка.
8. **Лимфомы кожи** — В- и Т-клеточные маркеры, иммуногистохимия.
9. **Сотрудничество в научной деятельности** — интеграция исследований и клинической практики.

## Как проходит биопсия?

Биопсия — получение небольшого образца ткани из подозрительного образования. Этапы:

1. Осмотр дерматологом или дерматоонкологом.
2. При необходимости — дерматоскопия для углублённой оценки.
3. Забор образца под местной анестезией.
4. Направление материала в лабораторию.
5. Микроскопическое исследование патологом.
6. Заключение и план дальнейшего лечения.

Результат обычно готов в течение нескольких дней; при подозрении на опухоль скорость особенно важна.

## Совместная работа патолога и дерматолога

В Radeski Skin Clinic патолог и дерматолог работают вместе: клинические данные + лабораторное заключение = **точный диагноз**. Такой подход критически важен при меланоме, базалиоме и сложных дерматозах.

Связанные услуги: [Дерматопатология](/ru/services/dermatopatologiya), [Биопсия кожи](/ru/services/dermatopatologiya/gistolog), [Дерматоскопия](/ru/services/dermatoskopiya), [Дерматоонкология](/ru/services/dermatoonkologiya), [Статья о базалиоме](/ru/articles/bazalioma-teri-raki), [Цены](/ru/prices).`;
}

function enBody(): string {
  return `## What is dermatopathology?

**Dermatopathology** is the laboratory specialty that examines skin biopsy samples under the microscope to verify the true nature of disease. Radeski Skin & Aesthetic Clinic has a **dermatopathology department** staffed by specialists trained at leading clinics in Russia and Europe.

The skin is the body's largest organ. Skin tumors such as **melanoma** are highly malignant and can metastasize early and extensively. Delayed or inadequate diagnosis can have serious consequences. That is why suspicious lesions require more than visual examination — **histologic diagnosis** is essential.

![Dermatopathology — Radeski Skin Clinic](${COVER})

## Why is histologic examination needed?

Many skin diseases share similar clinical features. The treating physician may be left with a picture that does not reveal the underlying process — and therefore cannot guide correct treatment.

**Histologic diagnosis** determines:

- whether a lesion is benign or malignant;
- the type of dermatosis;
- presence of infection (fungal, bacterial);
- changes in skin layers.

Today, skin histology is **accepted worldwide standard practice**. Modern surgical instruments allow samples to be obtained accurately and with minimal trauma.

## What conditions are evaluated?

### Neoplastic pathology

- nevi and other skin lesions (WHO and international classification);
- **melanoma** — Breslow, Clark, perivascular and perineural invasion, mitotic count, resection margins;
- basal cell and squamous cell carcinoma;
- Merkel cell carcinoma;
- adnexal skin tumors;
- soft tissue tumors;
- cutaneous B- and T-cell lymphomas (immunohistochemistry).

### Non-neoplastic pathology

- various **dermatoses**;
- fungal and bacterial skin disease;
- photodermatitis;
- psychogenic dermatoses;
- hereditary, metabolic, and endocrine dermatoses;
- immune and connective tissue disorders;
- hair and nail disease.

These conditions are widespread and can significantly reduce quality of life. Accurate diagnosis is the first step to effective treatment.

## Diagnostic capabilities at Radeski Skin & Aesthetic Clinic

1. **Punch biopsy analysis** — special histochemical stains for fungal infection, dermal mucin, mast cells, elastic fiber disruption.
2. **Nevus and lesion diagnosis** — reporting per WHO and international standards.
3. **Melanoma diagnosis** — staging and prognosis per Royal College of Pathologists guidelines (Breslow, Clark, invasion, mitoses, margins).
4. **Sentinel lymph nodes** — micrometastasis detection in melanoma by immunohistochemistry.
5. **Basal cell, squamous cell, and Merkel carcinoma** — minimum dataset per Royal College of Pathologists.
6. **Adnexal skin tumors** — hair, nail, and related structures.
7. **Soft tissue tumors** — pathomorphologic evaluation.
8. **Cutaneous lymphomas** — B- and T-cell markers, immunohistochemistry.
9. **Scientific collaboration** — research integrated with clinical practice.

## How does biopsy work?

Biopsy means taking a small tissue sample from a suspicious lesion. Steps:

1. Examination by a dermatologist or dermato-oncologist.
2. Dermoscopy if deeper assessment is needed.
3. Sample taken under local anesthesia.
4. Material sent to the laboratory.
5. Microscopic analysis by a pathologist.
6. Report and treatment plan.

Results are usually ready within several days; speed is especially important when malignancy is suspected.

## Pathologist and dermatologist collaboration

At Radeski Skin Clinic, pathologist and dermatologist work together: clinical findings + laboratory report = **accurate diagnosis**. This approach is critical for melanoma, basal cell carcinoma, and complex dermatoses.

Related services: [Dermatopathology](/en/services/dermatopatologiya), [Skin biopsy](/en/services/dermatopatologiya/gistolog), [Dermoscopy](/en/services/dermatoskopiya), [Dermato-oncology](/en/services/dermatoonkologiya), [Basal cell carcinoma article](/en/articles/bazalioma-teri-raki), [Prices](/en/prices).`;
}

export const DERMATOPATOLOGIYA_RADESKI_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Dermatopatologiya: teri biopsiyasi, gistologik va immunogistokimyoviy tahlil, melanoma va o‘smalar tashxisi — Radeski Skin Clinic diagnostik imkoniyatlari.',
    body: uzBody(),
    keyTakeaways: [
      'Dermatopatologiya teri namunasini mikroskop ostida o‘rganib aniq tashxis beradi',
      'Melanoma va boshqa o‘smalar uchun gistologiya dunyo standarti hisoblanadi',
      'Radeski da WHO, Breslow, Clark va immunogistokimyoviy tahlil qo‘llaniladi',
      'O‘smaviy va o‘smaviy bo‘lmagan teri kasalliklari tekshiriladi',
      'Patolog va dermatolog birgalikda davolash strategiyasini belgilaydi',
    ],
    tags: [
      'Dermatopatologiya',
      'Gistologiya',
      'Teri biopsiyasi',
      'Melanoma',
      'Immunogistokimya',
      'Radeski Skin Clinic',
      'Farg\'ona',
    ],
    whenToSeeDoctor: [
      'Shubhali teri hosilasi o‘zgara boshlasa yoki tez o‘sayotgan bo‘lsa',
      'Nevüs, dog‘ yoki yarada rang, shakl yoki chegarasi o‘zgarsa',
      'Biopsiya olingan, lekin natija va keyingi qadam noaniq bo‘lsa',
      'Melanoma, bazalioma yoki murakkab dermatoz shubhasi bo‘lsa',
    ],
    faq: [
      {
        question: 'Dermatopatologiya nima uchun kerak?',
        answer:
          'Ko‘p teri kasalliklari bir xil ko‘rinadi. Gistologik tahlil kasallik tabiatini aniq ko‘rsatadi va to‘g‘ri davolashni belgilash imkonini beradi.',
      },
      {
        question: 'Melanoma uchun nima tekshiriladi?',
        answer:
          'Breslow va Clark chuqurligi, perivaskulyar va perinevral invaziya, mitozlar soni, rezeksiya chegaralari va boshqa prognoz omillari baholanadi.',
      },
      {
        question: 'Panch-biopsiya nima?',
        answer:
          'Teridan dumaloq kichik namuna olish usuli. Maxsus bo‘yashlar bilan zamburug‘, mukin, mast hujayralar va elastik tolalar holati aniqlanadi.',
      },
      {
        question: 'Natija qancha vaqtda tayyor bo‘ladi?',
        answer:
          'Odatda bir necha ish kuni. O‘sma shubhasi bo‘lsa, tezroq yo‘l tanlanishi mumkin — shifokor xabar beradi.',
      },
      {
        question: 'Immunogistokimyoviy tahlil qachon kerak?',
        answer:
          'Melanomada sentinel limfa tugunlari, teri limfomalari va ba’zi o‘smalarda hujayra turini aniqlash uchun qo‘llaniladi.',
      },
    ],
  },
  ru: {
    summary:
      'Дерматопатология: биопсия кожи, гистологический и иммуногистохимический анализ, диагностика меланомы и опухолей — возможности Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'Дерматопатология верифицирует диагноз по образцу кожи под микроскопом',
      'Гистология — мировой стандарт при подозрении на меланому и опухоли',
      'В Radeski применяются стандарты ВОЗ, Breslow, Clark и иммуногистохимия',
      'Исследуются опухолевая и неопухолевая патология кожи',
      'Патолог и дерматолог совместно определяют план лечения',
    ],
    tags: [
      'Дерматопатология',
      'Гистология',
      'Биопсия кожи',
      'Меланома',
      'Иммуногистохимия',
      'Radeski Skin Clinic',
      'Фергана',
    ],
    whenToSeeDoctor: [
      'Подозрительное образование изменилось или быстро растёт',
      'Изменились цвет, форма или границы родинки, пятна или язвы',
      'Сделана биопсия, но результат и дальнейшие шаги неясны',
      'Есть подозрение на меланому, базалиому или сложный дерматоз',
    ],
    faq: [
      {
        question: 'Зачем нужна дерматопатология?',
        answer:
          'Многие заболевания кожи выглядят похоже. Гистологическое исследование выявляет природу процесса и позволяет назначить правильное лечение.',
      },
      {
        question: 'Что оценивают при меланоме?',
        answer:
          'Глубина по Breslow и Clark, периваскулярная и периневральная инвазия, число митозов, состояние краёв резекции и другие прогностические факторы.',
      },
      {
        question: 'Что такое панч-биопсия?',
        answer:
          'Забор небольшого круглого образца кожи. Специальные окраски выявляют грибок, муцин, тучные клетки и нарушение эластических волокон.',
      },
      {
        question: 'Когда будет готов результат?',
        answer:
          'Обычно в течение нескольких рабочих дней. При подозрении на опухоль возможно ускорение — врач сообщит сроки.',
      },
      {
        question: 'Когда нужна иммуногистохимия?',
        answer:
          'При меланоме для сторожевых лимфоузлов, при лимфомах кожи и некоторых опухолях для определения типа клеток.',
      },
    ],
  },
  en: {
    summary:
      'Dermatopathology: skin biopsy, histologic and immunohistochemical analysis, melanoma and tumor diagnosis — Radeski Skin Clinic capabilities.',
    body: enBody(),
    keyTakeaways: [
      'Dermatopathology verifies diagnosis by microscopic study of skin samples',
      'Histology is the global standard when melanoma or tumors are suspected',
      'Radeski uses WHO, Breslow, Clark, and immunohistochemistry standards',
      'Both neoplastic and non-neoplastic skin disease is evaluated',
      'Pathologist and dermatologist jointly define the treatment plan',
    ],
    tags: [
      'Dermatopathology',
      'Histology',
      'Skin biopsy',
      'Melanoma',
      'Immunohistochemistry',
      'Radeski Skin Clinic',
      'Fergana',
    ],
    whenToSeeDoctor: [
      'A suspicious skin lesion has changed or is growing quickly',
      'Color, shape, or borders of a mole, spot, or sore have changed',
      'Biopsy was done but results and next steps are unclear',
      'Melanoma, basal cell carcinoma, or complex dermatosis is suspected',
    ],
    faq: [
      {
        question: 'Why is dermatopathology needed?',
        answer:
          'Many skin conditions look similar. Histologic examination reveals the true nature of disease and guides correct treatment.',
      },
      {
        question: 'What is assessed in melanoma?',
        answer:
          'Breslow and Clark depth, perivascular and perineural invasion, mitotic count, resection margins, and other prognostic factors.',
      },
      {
        question: 'What is a punch biopsy?',
        answer:
          'A small round sample of skin. Special stains detect fungus, mucin, mast cells, and elastic fiber disruption.',
      },
      {
        question: 'How long until results are ready?',
        answer:
          'Usually within several business days. When malignancy is suspected, expedited processing may be possible — your doctor will advise.',
      },
      {
        question: 'When is immunohistochemistry needed?',
        answer:
          'For sentinel nodes in melanoma, cutaneous lymphomas, and some tumors to determine cell type.',
      },
    ],
  },
};

export const DERMATOPATOLOGIYA_RADESKI_ARTICLE: Article = {
  id: 'art-dermatopatologiya-radeski',
  slug: 'dermatopatologiya-gistologiya-radeski',
  title: {
    uz: 'Dermatopatologiya: gistologiya, biopsiya va o‘smalar tashxisi',
    ru: 'Дерматопатология: гистология, биопсия и диагностика опухолей',
    en: 'Dermatopathology: Histology, Biopsy, and Tumor Diagnosis',
  },
  summary: {
    uz: DERMATOPATOLOGIYA_RADESKI_ARTICLE_CATALOG.uz.summary,
    ru: DERMATOPATOLOGIYA_RADESKI_ARTICLE_CATALOG.ru.summary,
    en: DERMATOPATOLOGIYA_RADESKI_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: DERMATOPATOLOGIYA_RADESKI_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: DERMATOPATOLOGIYA_RADESKI_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: DERMATOPATOLOGIYA_RADESKI_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Radeski Skin Clinic',
    ru: 'Radeski Skin Clinic',
    en: 'Radeski Skin Clinic',
  },
  date: '2026-09-17',
  image: COVER,
  images: {
    uz: COVER,
    ru: COVER,
    en: COVER,
  },
  views: 0,
};
