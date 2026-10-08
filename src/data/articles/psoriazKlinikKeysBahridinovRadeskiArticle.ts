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

const COVER = '/results/psoriasis-arms-before.jpg';

function uzBody(): string {
  return `## Klinik holat: psoriazni majmuaviy davolash

**Muallif:** Z. Baxriddinov · **Klinika:** Radeski Skin Clinic, Qo'qon

Ushbu maqolada vulgar psoriazning progressiv bosqichidagi bemorning diagnostikasi, individual davolash protokoli va 8 haftalik natijalar yoritiladi.

![Psoriaz — davolashdan oldin (illustrativ natija)](/results/psoriasis-arms-before.jpg)

## Bemor qanday muammo bilan murojaat qildi?

34 yoshli erkak bemor boshning sochli qismi, tirsak va tizza sohalaridagi **kuchli qichishuvchi**, qizarib ko'tarilgan va qabiq tashlaydigan toshmalar (blyashkalar) bilan murojaat qildi. Doimiy qichishish uyquni buzgan va psixologik zo'riqish keltirib chiqargan.

Kasallik **3 yil** oldin boshlangan; oxirgi **2 oy**da (kuz-qish, stress) keskin kuchaygan va toshmalar tarqalgan.

## Oldingi davolanish

Bemor boshqa shifoxonalarda **gormonal (glyukokortikoid)** surtmalar, uy sharoitida o'tlar qaynatmasi va qatron/degtyar sovunlari bilan davolanishga harakat qilgan.

Gormonal kremlar vaqtincha yordam bergan, to'xtatilgach kasallik **rikoshet** bilan qaytgan. Xalqona usullar terini quritgan va qichishishni kuchaytirgan.

## Murojaat vaqtidagi holat

- **Holat:** faol, progressiv bosqich
- **Zonalar:** sochli bosh (psoriaatik toj), ikkala tirsak va tizza
- **Belgi:** aniq chegaralangan pushti-qizil blyashkalar, kumushsimon-oq qobiqlar
- **Psoriaatik triada** (yaltillash, terminal parda, qon tomchilari) — musbat
- **Tashxis:** vulgar psoriaz, blyashkali shakl, progressiv bosqich; PASI — o'rta-og'ir

## Diagnostika

- Dermatologik ko'rik, blyashka qirish, **panch biopsiyasi**
- **Dermatoskopiya:** psoriazga xos to'g'ri burchakli/qovuzsimon tomirlar
- **Qon:** EChT/SOE biroz yuqori; ALT, AST, bilirubin, kreatinin, mochevina; CRP; revmatoid omil (manfiy — psoriatik artrit inkor etildi)

## Nima uchun aynan shu protokol?

Psoriaz — **tizimli autoimmun** kasallik; teri hujayralari yangilanishi 6–7 baravar tezlashadi. Faqat tashqi krem yetarli emas.

Tanlangan kombinatsiya:

1. **Tor spektrli UVA 308 nm fototerapiya** — hujayra bo'linishini tormozlaydi, yallig'lanishni kamaytiradi; gormonlarga qaraganda xavfsizroq va barqarorroq
2. **Kalsipotriol** va **faollashtirilgan sink pirition** — gormonal bo'lmagan mahalliy terapiya (atrofiya xavfi past)
3. **Tizimli gormonlar berilmadi** — to'xtatilgach eritrodermiya yoki pustulyoz shaklga o'tish xavfi yuqori

## Davolash rejasi

**Fototerapiya:** haftada 3 marta UVA 308 nm, jami **25 seans**

**Mahalliy terapiya:**

- Ertalab: emolientlar, sink pirition kremi
- Kechqurun: kalsipotriol malhami
- Bosh: ketokonazol va betametazon tarkibli terapevtik shampun (shifokor nazorati)

**Tizimli qo'llab-quvvatlash:** magniy, B guruhi vitaminlari, gepatoprotektorlar (individual)

**Turmush tarzi:** emolient dush gellari; o'tkir, sho'r, dudlangan, sitrus va alkogoldan voz kechish; paxta, keng kiyim

**Kurs davomiyligi:** **8 hafta**

## Natija

- **2-hafta:** qichishish to'xtadi, uyqu yaxshilandi, qobiqlar kamaydi
- **4-hafta:** toshmalar yassilashdi, rang och pushtiga o'zgardi
- **8-hafta:** blyashkalar yo'qoldi; postpsoriaatik disxromiya; PASI **~95%** kamayish; CRP me'yorda

![Psoriaz — davolashdan keyin (illustrativ natija)](/results/psoriasis-arms-after.jpg)

## Shifokor izohi

> Psoriaz surunkali kasallik — uni «bir dori» bilan butunlay yo'q qilish mumkin emas. Ammo to'g'ri kombinatsiyalangan terapiya bilan uzoq remissiya erishish mumkin. UVA 308 nm va kalsipotriol kombinatsiyasi bemorni gormonlarga qaramlikdan qutqardi. Eritrodermiya yoki psoriatik artrit bo'lsa, immunobiologik yoki boshqa tizimli preparatlar qo'shilishi kerak bo'ladi.

Bog'liq xizmatlar: [Fototerapiya](/uz/services/dermatologiya/fototerapiya), [Psoriaz maktabi](/uz/services/shkola-psoriaza), [Immunobiologik terapiya](/uz/services/dermatologiya/immunobiologicheskaya), [Narxlar](/uz/prices).`;
}

function ruBody(): string {
  return `## Клинический случай: комплексное лечение псориаза

**Автор:** З. Бахриддинов · **Клиника:** Radeski Skin Clinic, Коканд

В статье описаны диагностика, индивидуальный протокол и результаты лечения пациента с прогрессирующим бляшечным псориазом.

![Псориаз — до лечения (иллюстративный результат)](/results/psoriasis-arms-before.jpg)

## С чем обратился пациент?

Мужчина 34 лет — **зудящие**, красные, шелушащиеся бляшки на волосистой части головы, локтях и коленях. Постоянный зуд нарушал сон и вызывал стресс.

Заболевание **3 года**; за последние **2 месяца** (осень-зима, стресс на работе) резко обострилось.

## Предыдущее лечение

Гормональные (глюкокортикоидные) мази в других клиниках, народные методы (отвары трав, дегтярное мыло).

Гормоны давали краткий эффект с **рикошетом** после отмены. Народные средства усилили сухость и зуд.

## Состояние при обращении

- **Фаза:** активная, прогрессирующая
- **Локализация:** волосистая часть головы («псориатическая корона»), оба локтя и колени
- **Триада псориаза** положительная
- **Диагноз:** vulgaris, бляшечная форма, прогрессирующая стадия; PASI — средне-тяжёлый

## Диагностика

- Осмотр, соскоб, **биопсия**
- **Дерматоскопия:** характерный сосудистый рисунок
- **Анализы:** ОАК (СОЭ↑), биохимия печени/почек, CRP, ревматоидный фактор (отрицательный)

## Почему выбран этот протокол?

Псориаз — **системное аутоиммунное** заболевание с ускоренным обновлением кожи в 6–7 раз. Одних наружных средств недостаточно.

1. **Узкополосная UVA 308 nm фототерапия**
2. **Кальципотриол** и **активированный пиритион цинка** — без атрофии, в отличие от длительных гормонов
3. **Системные гормоны не назначались** — риск эритродермии и пустулёзной формы

## План лечения

Фототерапия **3 раза в неделю**, **25 сеансов**; утром эмоленты и цинк; вечером кальципотриол; лечебный шампунь для головы по назначению; поддержка: магний, витамины B, гепатопротекторы; диета и уход **8 недель**.

## Результат

Через 2 недели — зуд прекратился; через 4 — бляшки сплюснулись; через 8 — клиническое улучшение, **PASI −95%**, CRP в норме.

![Псориаз — после лечения (иллюстративный результат)](/results/psoriasis-arms-after.jpg)

## Комментарий врача

> Стабильная ремиссия достижима при правильной комбинированной терапии. UVA 308 nm + кальципотриол снижает зависимость от гормонов. При эритродермии или псориатическом артрите нужны биологические препараты или иные системные препараты.

Связанные услуги: [Фототерапия](/ru/services/dermatologiya/fototerapiya), [Школа псориаза](/ru/services/shkola-psoriaza), [Иммунобиологическая терапия](/ru/services/dermatologiya/immunobiologicheskaya), [Цены](/ru/prices).`;
}

function enBody(): string {
  return `## Clinical Case: Comprehensive Psoriasis Treatment

**Author:** Z. Bahridinov · **Clinic:** Radeski Skin Clinic, Kokand

This article describes diagnosis, an individualized protocol, and 8-week outcomes in progressive plaque psoriasis.

![Psoriasis — before treatment (illustrative outcome)](/results/psoriasis-arms-before.jpg)

## Why the patient came

A 34-year-old man reported **intensely itchy**, red, scaling plaques on the scalp, elbows, and knees. Sleep and mood were affected.

Disease duration **3 years**; sharp worsening over the last **2 months** (season + work stress).

## Prior treatments

Topical **corticosteroids** elsewhere and home remedies (herbal washes, tar soap).

Steroids gave short relief with **rebound** after stopping. Home remedies increased dryness and itch.

## At presentation

- **Phase:** active, progressive
- **Sites:** scalp crown, both elbows and knees
- **Psoriatic triad** positive
- **Diagnosis:** vulgaris plaque psoriasis, progressive stage; moderate-to-severe PASI

## Workup

Examination, scraping, **punch biopsy**, **dermoscopy**, CBC (ESR↑), liver/kidney labs, CRP, rheumatoid factor (negative).

## Why this protocol?

Psoriasis is **systemic autoimmune** skin disease with 6–7× faster cell turnover. Topicals alone are not enough.

- **Narrowband UVA 308 nm phototherapy**
- **Calcipotriol** + **zinc pyrithione** (non-hormonal topicals)
- **No systemic steroids** — rebound risk to erythrodermic/pustular forms

## Treatment course

Phototherapy **3×/week**, **25 sessions**; morning emollients and zinc cream; evening calcipotriol; medicated scalp care as prescribed; magnesium, B vitamins, hepatoprotectors; lifestyle advice for **8 weeks**.

## Outcome

Week 2 — itch resolved; week 4 — plaques flattened; week 8 — major clearance, **~95% PASI reduction**, CRP normalized.

![Psoriasis — after treatment (illustrative outcome)](/results/psoriasis-arms-after.jpg)

## Physician comment

> Long remission is achievable with the right combined therapy. UVA 308 nm + calcipotriol reduced steroid dependence. Erythrodermic psoriasis or psoriatic arthritis may require biologics or other systemic agents.

Related services: [Phototherapy](/en/services/dermatologiya/fototerapiya), [Psoriasis school](/en/services/shkola-psoriaza), [Immunobiological therapy](/en/services/dermatologiya/immunobiologicheskaya), [Prices](/en/prices).`;
}

export const PSORIAZ_KLINIK_KEYS_BAHRIDINOV_RADESKI_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Psoriaz klinik holati: UVA 308 nm, kalsipotriol, 8 haftalik natija — Z. Baxriddinov, Radeski Skin Clinic Qo\'qon.',
    body: uzBody(),
    keyTakeaways: [
      'Vulgar psoriazda faqat gormonal krem yetarli emas',
      'UVA 308 nm fototerapiya + kalsipotriol kombinatsiyasi samarali',
      'Tizimli gormonlar psoriazda xavfli rebound berishi mumkin',
      '8 haftada PASI ~95% ga kamayishi mumkin',
      'Individual protokol diagnostika va PASI ga qarab tuziladi',
    ],
    tags: ['Psoriaz', 'Klinik holat', 'Fototerapiya', 'UVA 308', 'Kalsipotriol', 'Radeski Skin Clinic', 'Qo\'qon'],
    whenToSeeDoctor: [
      'Toshmalar tarqalayotgan bo\'lsa',
      'Gormonal krem to\'xtatilgach kasallik qaytayotgan bo\'lsa',
      'Uyqu va kayfiyat qichishish tufayli buzilsa',
      'Bo\'g\'im og\'riqi yoki butun tana qizarganda',
    ],
    faq: [
      {
        question: 'Psoriazni faqat krem bilan davolash mumkinmi?',
        answer:
          'Yengil holatlarda ba\'zan yetadi; o\'rta-og\'ir progressiv psoriazda fototerapiya va reja shifokor bilan tuziladi.',
      },
      {
        question: 'Nega gormonli krem qayta-qayta qaytaryapti?',
        answer:
          'Uzoq va kuchli gormonlar o\'z-o\'zidan to\'xtatilganda rikoshet (kuchayib qaytish) tez-tez bo\'ladi — shuning uchun non-hormonal va apparatli usullar muhim.',
      },
      {
        question: 'UVA 308 nm qancha seans kerak?',
        answer:
          'Individual; ushbu holatda haftada 3 marta, jami 25 seans rejalashtirilgan.',
      },
    ],
  },
  ru: {
    summary:
      'Клинический случай псориаза: UVA 308 нм, кальципотриол, результат за 8 недель — З. Бахриддинов, Radeski Skin Clinic Коканд.',
    body: ruBody(),
    keyTakeaways: [
      'При бляшечном псориазе одних гормональных мазей недостаточно',
      'Фототерапия UVA 308 нм + кальципотриол эффективны',
      'Системные гормоны могут вызвать тяжёлый рикошетный эффект',
      'За 8 недель PASI может снизиться примерно на 95%',
      'Протокол подбирается индивидуально',
    ],
    tags: ['Псориаз', 'Клинический случай', 'Фототерапия', 'UVA 308', 'Кальципотриол', 'Radeski Skin Clinic', 'Коканд'],
    whenToSeeDoctor: [
      'Бляшки быстро распространяются',
      'Обострение после отмены гормонов',
      'Зуд мешает сну',
      'Боль в суставах или поражение всего тела',
    ],
    faq: [
      {
        question: 'Можно ли лечить псориаз только мазью?',
        answer:
          'При лёгкой форме иногда да; при средне-тяжёлом прогрессирующем псориазе нужен комплекс, включая фототерапию.',
      },
      {
        question: 'Почему гормоны «отдают» обострением?',
        answer:
          'При длительном применении и резкой отмене часто возникает рикошет — поэтому важны негормональные и аппаратные методы.',
      },
      {
        question: 'Сколько сеансов UVA 308 нм нужно?',
        answer:
          'Индивидуально; в этом случае — 3 раза в неделю, всего 25 сеансов.',
      },
    ],
  },
  en: {
    summary:
      'Psoriasis clinical case: UVA 308 nm, calcipotriol, 8-week outcome — Z. Bahridinov, Radeski Skin Clinic Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Plaque psoriasis often needs more than topical steroids alone',
      'UVA 308 nm phototherapy plus calcipotriol can be effective',
      'Systemic steroids carry serious rebound risk in psoriasis',
      'PASI may improve by ~95% in 8 weeks with a structured plan',
      'Protocols are individualized after workup',
    ],
    tags: ['Psoriasis', 'Clinical case', 'Phototherapy', 'UVA 308', 'Calcipotriol', 'Radeski Skin Clinic', 'Kokand'],
    whenToSeeDoctor: [
      'Plaques are spreading quickly',
      'Flares after stopping steroid creams',
      'Itch disrupts sleep',
      'Joint pain or widespread redness',
    ],
    faq: [
      {
        question: 'Can psoriasis be treated with cream only?',
        answer:
          'Sometimes in mild disease; moderate-to-severe progressive psoriasis usually needs phototherapy and a physician-led plan.',
      },
      {
        question: 'Why do steroid creams rebound?',
        answer:
          'Long-term use and abrupt withdrawal often trigger rebound flares — non-hormonal and device-based options matter.',
      },
      {
        question: 'How many UVA 308 nm sessions are needed?',
        answer:
          'Individual; in this case, three times weekly for 25 sessions total.',
      },
    ],
  },
};

export const PSORIAZ_KLINIK_KEYS_BAHRIDINOV_RADESKI_ARTICLE: Article = {
  id: 'art-psoriaz-klinik-keys-bahridinov-radeski',
  slug: 'psoriaz-klinik-keys-bahridinov-radeski',
  title: {
    uz: 'Psoriaz: klinik holat va majmuaviy davolash (Z. Baxriddinov)',
    ru: 'Псориаз: клинический случай и комплексное лечение (З. Бахриддинов)',
    en: 'Psoriasis: Clinical Case and Comprehensive Treatment (Z. Bahridinov)',
  },
  summary: {
    uz: PSORIAZ_KLINIK_KEYS_BAHRIDINOV_RADESKI_ARTICLE_CATALOG.uz.summary,
    ru: PSORIAZ_KLINIK_KEYS_BAHRIDINOV_RADESKI_ARTICLE_CATALOG.ru.summary,
    en: PSORIAZ_KLINIK_KEYS_BAHRIDINOV_RADESKI_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: PSORIAZ_KLINIK_KEYS_BAHRIDINOV_RADESKI_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: PSORIAZ_KLINIK_KEYS_BAHRIDINOV_RADESKI_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: PSORIAZ_KLINIK_KEYS_BAHRIDINOV_RADESKI_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Z. Baxriddinov — Radeski Skin Clinic',
    ru: 'З. Бахриддинов — Radeski Skin Clinic',
    en: 'Z. Bahridinov — Radeski Skin Clinic',
  },
  date: '2026-09-23',
  image: COVER,
  images: { uz: COVER, ru: COVER, en: COVER },
  views: 0,
};
