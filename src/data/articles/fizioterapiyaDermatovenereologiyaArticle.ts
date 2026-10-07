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

const COVER = '/articles/fizioterapiya-dermatologiya-cover.png';

function uzBody(): string {
  return `## Fizioterapiya dermatovenerologiyada nima o‘rin tutadi?

Dermatovenerologiyada **fizioterapiya** — sun’iy va tabiiy fizik omillar (yorug‘lik, magnit maydon, elektr toki, ultrayuqori chastota va boshqalar) yordamida organizmga davolovchi ta’sir ko‘rsatishni o‘rganadi va qo‘llaydi.

Zamonaviy tibbiyotda ushbu usullar teri va butun organizmning turli fiziologik tizimlariga yo‘naltirilgan kompleks yondashuvning muhim qismidir.

![Fizioterapiya va fototerapiya — Radeski Skin Clinic](${COVER})

## Nega teri kasalliklarida mahalliy fizioterapiya muhim?

Teri — **tashqi terapiyaga** (mahalliy davolash) yaxshi javob beradigan noyob organdir. Fizioterapevtik muolajalar yallig‘lanish belgilarini kamaytirishda, tiklanishni tezlashtirishda va surunkali kasalliklarda remissiya muddatini uzaytirishda muhim rol o‘ynaydi.

Muolajalar nafaqat tezroq tuzalish, balki og‘ir kasallikdan keyin **reabilitatsiya** va hayot sifatini tiklash uchun ham belgilanadi.

## Radeski Skin Clinic yondashuvi

Radeski Skin & Aesthetic Clinic mutaxassislari yaxshi biladiki, har bir dermatologik kasallik **faqat dorilar** bilan hal bo‘lmaydi. Psoriaz, gerpes infeksiyasi, vitiligo, qizil qattiq qiyloq va boshqa ko‘plab teri kasalliklarida dori terapiyasini fizioterapiya bilan to‘ldirish tavsiya etiladi.

## Fizioterapiyaning afzalliklari

- davolash muddatini sezilarli qisqartirishi mumkin;
- allergik reaksiya xavfi past;
- dori vositalarining ta’sirini kuchaytiradi;
- qaramlik (dependensiya) hosil qilmaydi;
- organizmga og‘ir yon ta’sirlar kamroq;
- yumshoq, ko‘pincha og‘riqsiz ta’sir;
- buzuvchi (destruktiv) emas, tiklovchi usullar;
- surunkali kasalliklarda remissiya uzoqroq bo‘lishi mumkin.

Fizioterapiya muolajalari odatda og‘riqsiz, og‘ir asoratlar va toksik ta’sirlar kam, boshqa terapiya usullari bilan yaxshi uyg‘unlashadi.

---

## Fizioterapevtik usullar

### 1. Past intensivlikdagi lazer terapiyasi (LILT)

**Past quvvatli lazer nur** (ko‘rinadigan va infraqizil diapazon) qo‘llaniladi — terini buzmaydi, destruktiv ta’sir qilmaydi.

**Ko‘rsatmalar:** trofik yaralar, vaskulitlar, balanopostitlar, gerpes, halqali granulema, surunkali ekzema, o‘choqli alopetsiya, atopik dermatit, cheklangan skleroderma, skleroatrofik liken, lipoid nekrobioz, qizil qattiq qiyloq, yarali defektlar, oddiy va qamish gerpesi, yoriqlar, eroziyalar.

### 2. Past intensivlikdagi magnit-lazer terapiyasi

Magnit maydon va past intensivlikdagi lazer nurining **birgalikdagi ta’siri** — zararlangan teriga ikkala omilning yig‘indisi ta’sir qiladi.

**Ko‘rsatmalar:** psoriatik artrit, halqali granulema, cheklangan skleroderma shakllari, lipoid nekrobioz, qizil qattiq qiyloq.

### 3. Magnitoterapiya

Past chastotali **pulsirlovchi yoki o‘zgaruvchan magnit maydon** zararlangan hududga ta’sir qiladi.

- bitta induktor bilan chuqurlik: taxminan 3–4 sm;
- ikkita induktor poperechno: 7–8 sm.

**Ko‘rsatmalar:** dermatozlar, ekzema, neyrodermit.

### 4. Elektroterapiya va Darsonval apparati

Elektroterapiya — buzilgan tabiiy elektr jarayonlari bo‘lgan to‘qimalarga **dozalangan elektr toki** ta’siri.

**Darsonval** yuqori chastotali tok (110 kHz) bilan ishlaydi. Elektrod va teri orasidagi razryad paytida:

- mikroqon aylanishi kuchayadi;
- tomir spazmi kamayadi, kapillyarlar kengayadi;
- ishemiya yengillashadi, kislorod va ozuqa yetkazish yaxshilanadi;
- trofika oshadi;
- razryad vaqtida ozon hosil bo‘lib, teri qatlamlarini dezinfeksiya qilishga yordam beradi.

**Ko‘rsatmalar:** ekzema, qiyloq (liken), neyrodermit, atopik dermatit, trofik yaralar, teri qichishi.

### 5. UHF-terapiya (ultrayuqori chastota)

Elektromagnit maydon patologik fokusga ta’sir qiladi. Bemor jarayonda issiqlik his qilishi mumkin. Energiya yutilishi mikroqon aylanishini yaxshilaydi, fagotsitoz reaksiyasini kuchaytiradi, immunitet infeksiyaga qarshi kurashishga yordam beradi.

Shuningdek, biriktiruvchi va ba’zi nerv to‘qimalaridagi **regeneratsiya** jarayonlari faollashadi, periferik nerv tizimida o‘tkazuvchanlik yaxshilanadi.

**Ko‘rsatmalar:** psoriaz, gerpes.

---

## Qachon shifokorga murojaat qilish kerak?

Fizioterapiya **shifokor ko‘rsatmasi** bilan, anamnez va kasallik holati hisobga olinib tanlanadi. O‘z-o‘zidan apparat tanlash xavfli — noto‘g‘ri usul vaqt yo‘qotishi yoki holatni og‘irlashtirishi mumkin.

Radeski Skin Clinic da avval **dermatolog konsultatsiyasi**, keyin individual fizioterapevtik reja tuziladi.

## Radeski Skin Clinic da keyingi qadam

1. Dermatolog ko‘rigi va tashxis
2. Dori + fizioterapiya kerakligini baholash
3. Individual muolajalar rejasi
4. Kurs va kuzatuv

Bog‘liq maqolalar: [Vitiligo — Daavlin fototerapiya](/uz/articles/art-vitiligo-daavlin), [Psoriaz — Daavlin Qo‘qon](/uz/articles/art-psoriasis-daavlin-kokand), [IPL-fototerapiya](/uz/articles/art-ipl-fototerapiya-radeski).`;
}

function ruBody(): string {
  return `## Физиотерапия в дерматовенерологии

**Физиотерапия** в дерматовенерологии изучает и применяет на практике лечебное и оздоровительное воздействие на организм человека — как искусственных, так и естественных физических факторов.

Современная медицина располагает широким спектром методов, позволяющих воздействовать на различные физиологические системы организма при лечении пациентов дерматовенерологического профиля.

![Физиотерапия и фототерапия — Radeski Skin Clinic](${COVER})

## Почему местная физиотерапия важна при кожных заболеваниях?

Кожа — уникальный орган, хорошо отвечающий на **наружную терапию**. Физиотерапевтические процедуры играют значимую роль в купировании воспалительных симптомов, ускорении восстановления и продлении ремиссии при хронических заболеваниях.

Процедуры назначаются не только для более быстрого выздоровления, но и для **реабилитации** после тяжёлой болезни — вплоть до восстановления нормального состояния поражённого органа и жизнестойкости организма в целом.

## Подход Radeski Skin Clinic

Специалисты Radeski Skin & Aesthetic Clinic понимают, что не все дерматологические заболевания поддаются лечению только медикаментами. При псориаз, герпес-вирусной инфекции, витилиго, красном плоском лишае и многих других кожных заболеваниях рекомендуется дополнять медикаментозное лечение физиотерапией.

## Преимущества физиотерапии

- значительно сокращает сроки лечения;
- отсутствует аллергическая реакция;
- усиливает действие лекарственных препаратов;
- не вызывает зависимость;
- минимальные побочные эффекты на организм;
- мягкий лечебный эффект без дискомфорта;
- неразрушающие методы лечения;
- при хронических заболеваниях ремиссия становится продолжительнее.

Процедуры, как правило, безболезненные, не вызывают критических осложнений и токсических эффектов, хорошо сочетаются между собой и с другими средствами терапии.

---

## Методы физиотерапии

### 1. Низкоинтенсивная лазерная терапия (НИЛТ)

Используется лазерный свет видимого и инфракрасного диапазона **небольшой мощности**, без деструктивного воздействия на кожу.

**Показания:** трофические язвы, васкулиты, баланопоститы, герпес, кольцевидная гранулёма, хроническая экзема, гнездное облысение, атопический дерматит, ограниченная склеродермия, склероатрофический лишай, липоидный некробиоз, красный плоский лишай, язвенные дефекты кожи, простой и опоясывающий герпес, трещины, эрозии.

### 2. Низкоинтенсивная магнитолазерная терапия

Сочетанное применение **магнитного поля** и низкоинтенсивного лазерного излучения — суммарное воздействие обоих факторов на поражённую кожу.

**Показания:** псориатический артрит, кольцевидная гранулёма, ограниченные формы склеродермии, липоидный некробиоз, красный плоский лишай.

### 3. Магнитотерапия

Лечебное воздействие **низкочастотным магнитным полем** (пульсирующим или переменным) на поражённый участок.

- один индуктор — глубина 3–4 см;
- два индуктора поперечно — 7–8 см.

**Показания:** дерматозы, экзема, нейродермит.

### 4. Электротерапия. Аппарат Дарсонваль

Электротерапия — дозированное воздействие электротока на ткани с нарушенными естественными электрическими процессами.

**Дарсонваль** — токи высокой частоты (110 кГц). Между кожей и электродом возникает разряд:

- усиливается микроциркуляция;
- снимается спазм сосудов, расширяются капилляры;
- устраняется ишемия, улучшается снабжение кислородом;
- повышается трофика тканей;
- при искре образуется озон с дезинфицирующим эффектом.

**Показания:** экзема, лишай, нейродермит, атопический дерматит, трофические язвы, кожный зуд.

### 5. УВЧ-терапия

Воздействие **электромагнитного поля** на патологический очаг. Пациент ощущает тепло. Поглощаемая энергия улучшает микроциркуляцию, усиливает фагоцитоз, помогает иммунной системе бороться с инфекцией. Ускоряются регенерационные процессы в соединительных и нервных тканях, снижается чувствительность нервных окончаний.

**Показания:** псориаз, герпес.

---

## Когда обращаться к врачу?

Физиотерапия назначается **только врачом** с учётом диагноза и анамнеза. Самостоятельный выбор аппарата может быть небезопасен.

В Radeski Skin Clinic сначала проводится консультация дерматолога, затем составляется индивидуальный план.

## Следующий шаг в Radeski Skin Clinic

1. Консультация дерматолога
2. Оценка необходимости медикаментов + физиотерапии
3. Индивидуальный курс процедур
4. Наблюдение и коррекция

См. также: [Витилиго — Daavlin](/ru/articles/art-vitiligo-daavlin), [Псориаз — Daavlin Коканд](/ru/articles/art-psoriasis-daavlin-kokand), [IPL-фототерапия](/ru/articles/art-ipl-fototerapiya-radeski).`;
}

function enBody(): string {
  return `## Physiotherapy in dermatovenereology

In dermatovenereology, **physiotherapy** applies therapeutic physical factors — natural and medical — to support healing across the skin and the body as a whole.

Modern dermatology uses a wide range of device-based methods that can complement medication when treating chronic and inflammatory skin conditions.

![Physiotherapy and phototherapy — Radeski Skin Clinic](${COVER})

## Why local physiotherapy matters for skin disease

The skin is uniquely responsive to **topical and local treatment**. Physiotherapeutic procedures help reduce inflammation, speed recovery, and extend remission in chronic conditions.

They are used not only to shorten treatment time but also for **rehabilitation** after severe illness — restoring function in the affected area and overall resilience.

## Radeski Skin Clinic approach

At Radeski Skin & Aesthetic Clinic, we recognize that not every dermatologic condition responds to drugs alone. For psoriasis, herpes virus infections, vitiligo, lichen planus, and many other skin diseases, physiotherapy is often recommended alongside medical therapy.

## Benefits of physiotherapy

- may significantly shorten treatment duration;
- low risk of allergic reaction;
- can enhance the effect of prescribed medicines;
- does not cause dependency;
- generally fewer systemic side effects;
- gentle, often painless procedures;
- non-destructive, restorative methods;
- longer remission in chronic disease.

Procedures are usually painless, rarely cause serious complications, and combine well with other therapies.

---

## Physiotherapy methods

### 1. Low-intensity laser therapy (LILT)

Uses **low-power** laser light in visible and near-infrared ranges — without destructive damage to the skin.

**Indications include:** trophic ulcers, vasculitis, balanoposthitis, herpes, granuloma annulare, chronic eczema, alopecia areata, atopic dermatitis, localized scleroderma, lichen sclerosus, necrobiosis lipoidica, lichen planus, skin ulcer defects, herpes simplex and zoster, fissures, erosions.

### 2. Low-intensity magneto-laser therapy

Combines **magnetic field** and low-intensity laser exposure for a cumulative effect on affected skin.

**Indications:** psoriatic arthritis, granuloma annulare, limited scleroderma, necrobiosis lipoidica, lichen planus.

### 3. Magnetotherapy

**Low-frequency pulsed or alternating magnetic field** applied to the affected area.

- single inductor: depth ~3–4 cm;
- two inductors transversely: ~7–8 cm.

**Indications:** dermatoses, eczema, neurodermatitis.

### 4. Electrotherapy and Darsonval device

Electrotherapy delivers **controlled electrical currents** to tissues where natural electrical processes are disrupted.

The **Darsonval** device uses high-frequency current (110 kHz). A discharge between the electrode and skin:

- improves microcirculation;
- relieves vascular spasm and dilates capillaries;
- reduces ischemia and improves oxygen supply;
- enhances tissue nutrition;
- spark discharge produces ozone with a local disinfecting effect.

**Indications:** eczema, lichen, neurodermatitis, atopic dermatitis, trophic ulcers, pruritus.

### 5. UHF therapy (ultra-high frequency)

**Electromagnetic field** applied to the pathological focus. Patients often feel warmth. Absorbed energy improves local microcirculation, supports phagocytosis, and helps the immune system fight infection. Regenerative processes in connective and nerve tissue may accelerate; peripheral nerve sensitivity may decrease.

**Indications:** psoriasis, herpes.

---

## When to see a doctor

Physiotherapy must be **prescribed by a physician** based on diagnosis and history. Self-selected devices can delay proper care or worsen the condition.

At Radeski Skin Clinic, a dermatology consultation comes first, then an individualized plan.

## Next steps at Radeski Skin Clinic

1. Dermatologist consultation
2. Assessment of medication + physiotherapy needs
3. Individual treatment course
4. Follow-up and adjustment

Related: [Vitiligo — Daavlin](/en/articles/art-vitiligo-daavlin), [Psoriasis — Daavlin Kokand](/en/articles/art-psoriasis-daavlin-kokand), [IPL phototherapy](/en/articles/art-ipl-fototerapiya-radeski).`;
}

export const FIZIOTERAPIYA_DERMATOVENEREOLOGIYA_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Dermatovenerologiyada fizioterapiya: past intensivlikdagi lazer, magnit-lazer, magnitoterapiya, Darsonval, UHF. Ko‘rsatmalar, afzalliklar va Radeski Skin Clinic yondashuvi.',
    body: uzBody(),
    keyTakeaways: [
      'Teri kasalliklarida dori bilan birga fizioterapiya ko‘pincha samarani oshiradi',
      'Past intensivlikdaki lazer terini buzmaydi — tiklovchi ta’sir',
      'Darsonval va UHF yallig‘lanish va mikroqon aylanishini yaxshilashga yordam beradi',
      'Fizioterapiya faqat shifokor ko‘rsatmasi bilan tanlanadi',
      'Psoriaz, vitiligo, ekzema, gerpes va boshqa kasalliklarda qo‘llanilishi mumkin',
    ],
    tags: [
      'Fizioterapiya',
      'Fototerapiya',
      'Dermatologiya',
      'Darsonval',
      'UHF',
      'Lazer terapiya',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Surunkali teri kasalligi dori bilan to‘liq nazorat qilinmayapti',
      'Psoriaz, vitiligo yoki ekzema uchun qo‘shimcha usul kerak',
      'Shifokor fizioterapevtik kurs tavsiya qilgan',
      'Teri qichishi, trofik yaralar yoki gerpes takrorlanmoqda',
    ],
    faq: [
      {
        question: 'Fizioterapiya o‘zi yetadimi?',
        answer:
          'Yo‘q. Ko‘pincha dori terapiyasi bilan birga qo‘llanadi. Reja shifokor tomonidan kasallik turiga qarab tuziladi.',
      },
      {
        question: 'Darsonval nima uchun ishlatiladi?',
        answer:
          'Yuqori chastotali tok mikroqon aylanishini yaxshilaydi, tomir spazmini kamaytiradi va ekzema, qichishish kabi holatlarda qo‘llanilishi mumkin.',
      },
      {
        question: 'UHF-terapiya og‘riqlimi?',
        answer:
          'Odatda og‘riqsiz; bemor issiqlik his qilishi mumkin. Ko‘rsatmalar va dozani shifokor belgilaydi.',
      },
      {
        question: 'Radeski da qanday fizioterapiya mavjud?',
        answer:
          'Klinikada NB-UVB fototerapiya (Daavlin), IPL va boshqa apparat usullari shifokor ko‘rsatmasi bo‘yicha qo‘llaniladi. Aniq reja konsultatsiyadan keyin.',
      },
    ],
  },
  ru: {
    summary:
      'Физиотерапия в дерматовенерологии: низкоинтенсивный лазер, магнитолазер, магнитотерапия, Дарсонваль, УВЧ. Показания, преимущества и подход Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'Физиотерапия дополняет медикаментозное лечение при кожных заболеваниях',
      'Низкоинтенсивный лазер не разрушает кожу — восстановительный эффект',
      'Дарсонваль и УВЧ улучшают микроциркуляцию и воспаление',
      'Процедуры назначает только врач',
      'Применяется при псориаз, витилиго, экземе, гerpесе и др.',
    ],
    tags: [
      'Физиотерапия',
      'Фототерапия',
      'Дermatология',
      'Дарсонваль',
      'УВЧ',
      'Лазерная терапия',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Хроническое кожное заболевание плохо контролируется таблетками/мазями',
      'Нужен дополнительный метод при псориаз, витилиго или экземе',
      'Врач рекомендовал физиотерапевтический курс',
      'Зуд, трофические язвы или рецидивирующий гerpes',
    ],
    faq: [
      {
        question: 'Достаточно ли одной физиотерапии?',
        answer:
          'Обычно нет — чаще это дополнение к медикаментам. План составляет врач с учётом диагноза.',
      },
      {
        question: 'Для чего применяют Дарсонваль?',
        answer:
          'Ток высокой частоты улучшает микроциркуляцию, снимает спазм сосудов; применяется при экземе, зуде и ряде других показаний.',
      },
      {
        question: 'Больно ли проходит УВЧ?',
        answer:
          'Как правило, безболезненно; возможно ощущение тепла. Дозировку определяет врач.',
      },
      {
        question: 'Какая физиотерапия есть в Radeski?',
        answer:
          'В клинике — NB-UVB фототерапия (Daavlin), IPL и другие аппаратные методы по показаниям. Точный план — после консультации.',
      },
    ],
  },
  en: {
    summary:
      'Physiotherapy in dermatovenereology: low-intensity laser, magneto-laser, magnetotherapy, Darsonval, UHF. Indications, benefits, and Radeski Skin Clinic approach.',
    body: enBody(),
    keyTakeaways: [
      'Physiotherapy often enhances outcomes alongside medication for skin disease',
      'Low-intensity laser is non-destructive and restorative',
      'Darsonval and UHF can support microcirculation and inflammation control',
      'Only a physician should prescribe physiotherapy',
      'Used in psoriasis, vitiligo, eczema, herpes, and more',
    ],
    tags: [
      'Physiotherapy',
      'Phototherapy',
      'Dermatology',
      'Darsonval',
      'UHF therapy',
      'Laser therapy',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Chronic skin disease is not well controlled with medication alone',
      'You need adjunct care for psoriasis, vitiligo, or eczema',
      'Your doctor recommended a physiotherapy course',
      'Itch, trophic ulcers, or recurrent herpes',
    ],
    faq: [
      {
        question: 'Is physiotherapy enough on its own?',
        answer:
          'Usually not — it complements drug therapy. Your doctor builds a plan based on the diagnosis.',
      },
      {
        question: 'What is Darsonval used for?',
        answer:
          'High-frequency currents improve microcirculation and vascular spasm; used for eczema, pruritus, and other indications.',
      },
      {
        question: 'Is UHF therapy painful?',
        answer:
          'Generally painless; warmth is common. Dosage and sessions are set by your physician.',
      },
      {
        question: 'What physiotherapy is available at Radeski?',
        answer:
          'NB-UVB phototherapy (Daavlin), IPL, and other device methods when indicated. Exact plan after consultation.',
      },
    ],
  },
};

export const FIZIOTERAPIYA_DERMATOVENEREOLOGIYA_ARTICLE: Article = {
  id: 'art-fizioterapiya-dermatovenereologiya',
  slug: 'fizioterapiya-dermatologiyada',
  title: {
    uz: 'Fizioterapiya dermatovenerologiyada: usullar, ko‘rsatmalar va afzalliklar',
    ru: 'Физиотерапия в дерматовенерологии: методы, показания и преимущества',
    en: 'Physiotherapy in Dermatovenereology: Methods, Indications, and Benefits',
  },
  summary: {
    uz: FIZIOTERAPIYA_DERMATOVENEREOLOGIYA_ARTICLE_CATALOG.uz.summary,
    ru: FIZIOTERAPIYA_DERMATOVENEREOLOGIYA_ARTICLE_CATALOG.ru.summary,
    en: FIZIOTERAPIYA_DERMATOVENEREOLOGIYA_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: FIZIOTERAPIYA_DERMATOVENEREOLOGIYA_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: FIZIOTERAPIYA_DERMATOVENEREOLOGIYA_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: FIZIOTERAPIYA_DERMATOVENEREOLOGIYA_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Radeski Skin Clinic',
    ru: 'Radeski Skin Clinic',
    en: 'Radeski Skin Clinic',
  },
  date: '2026-09-09',
  image: COVER,
  images: {
    uz: COVER,
    ru: COVER,
    en: COVER,
  },
  views: 0,
};
