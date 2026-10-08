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

const COVER = '/services/apparatnaya/lazer-biorev.jpg';

function uzBody(): string {
  return `## Lazer biorevitalizatsiya nima?

**Lazer biorevitalizatsiya** Radeski Skin & Aesthetic Clinic da **inyeksiyasiz** alternativa: past molekulyar **gialuron kislotasi** preparatlari **atermal (sovuq) lazer** yordamida teriga yetkaziladi. Maqsad — **namlik**, teri tekisligi va biologik yosh o'zgarish belgilarini yumshatish.

![Lazer biorevitalizatsiya — Radeski Skin Clinic](${COVER})

## Qanday effekt?

- chuqur **gidratatsiya**;
- teri sirti silliqroq;
- **6–10 seans** kursida (haftada 1 marta) — elastiklik oshishi, mayda ajinlar kamayishi.

## Kurs qancha?

Odatda **3–10 seans**; muammo va ifodalanganlikka qarab. Oraliq — **~1 hafta**. Qo'llab-quvvatlash — **1 oy** oraligida yoki **6–12 oyda** bir marta.

## Lazer yoki inyeksiya?

| | Lazer | Inyeksiya |
|---|--------|-----------|
| Chuqurlik | Nozik, travmatik emas | Teri ichiga to'g'ridan-to'g'ri |
| Uskuna | Maxsus lazer kerak | Shprits |
| Narx | Odatda yuqoriroq | Ko'pincha arzonroq |
| Effekt | Bosqichma-bosqich | Tezroq, chuqurroq |

Tez va iqtisodiy natija kerak bo'lsa — **inyeksion biorevitalizatsiya** ham qo'llaniladi; lazer — ignasiz variant.

## Muolaja qanday o'tadi?

1. Yumshoq **piling** bilan tozalash;
2. Teriga **gel** surtish;
3. **Lazer** bilan ishlov.

## Muolajadan keyin

- **5 kun** quyoshdan himoya (SPF);
- sauna, hammom, **yuz massaji** — cheklash;
- antiseptik parvarish;
- **2–2,5 l** suv kuniga;
- uxlash **ortda**, yuzga tegmaslik;
- agressiv skrab va piling — vaqtincha to'xtatish.

## Qachon qilinmaydi?

- teridagi **shubhali nevus** va o'smalarni travmalash xavfi;
- infeksion-yallig'lanish jarayoni;
- shifokor ko'rsatmasiga qarshi holatlar.

## Mezoterapiya bilan farq

**Mezoterapiya** — ko'proq epidermis, tonus va mikrotsirkulyatsiya; **biorevitalizatsiya** — chuqurroq derma, **namlik va tiklanish**.

Bog'liq xizmatlar: [Lazer biorevitalizatsiya](/uz/services/apparatnaya-kosmetologiya/lazer-biorev), [Inyeksion biorevitalizatsiya](/uz/articles/biorevitalizatsiya-gialuron-kislota-radeski), [Apparatli kosmetologiya](/uz/services/apparatnaya-kosmetologiya), [Narxlar](/uz/prices).`;
}

function ruBody(): string {
  return `## Что такое лазерная биоревитализация?

**Лазерная биоревитализация** в Radeski Skin & Aesthetic Clinic — **безинъекционная** альтернатива: препараты на основе низкомолекулярной **гиалуроновой кислоты** доставляются в кожу **атермическим (холодным) лазером** для улучшения гидратации и уменьшения признаков биологического старения.

![Лазерная биоревитализация — Radeski Skin Clinic](${COVER})

## Эффект

- глубокое **увлажнение**;
- более гладкая кожа;
- курс **6–10 процедур** (1 раз в неделю) — упругость, мелкие морщины.

## Сколько процедур?

**3–10 сеансов** индивидуально. Интервал — **~неделя**. Поддержка — раз в **месяц** или **6–12 месяцев**.

## Лазер или инъекции?

Инъекционная биоревитализация часто **дешевле** и даёт более **быстрый глубокий** эффект. Лазер — **без иглы**, комфортнее для тех, кто боится инъекций.

## Как проходит?

Мягкий **пилинг**, нанесение **геля**, обработка **лазером**.

## После процедуры

- **SPF 5 суток**;
- без сауны, бани и **массажа лица**;
- антисептический уход;
- **2–2,5 л** воды в день;
- сон **на спине**;
- без агрессивных скрабов.

## Противопоказания

- **новообразования** на коже (нельзя травмировать);
- инфекционно-воспалительные процессы в зоне обработки.

## Мезотерапия vs биоревитализация

**Мезотерапия** — верхние слои, тонус, микроциркуляция; **биоревитализация** — глубокая дерма, **увлажнение и восстановление**.

Связанные услуги: [Лазерная биоревитализация](/ru/services/apparatnaya-kosmetologiya/lazer-biorev), [Инъекционная биоревитализация](/ru/articles/biorevitalizatsiya-gialuron-kislota-radeski), [Аппаратная косметология](/ru/services/apparatnaya-kosmetologiya), [Цены](/ru/prices).`;
}

function enBody(): string {
  return `## What is laser biorevitalization?

**Laser biorevitalization** at Radeski Skin & Aesthetic Clinic is a **non-injection** option: low-molecular **hyaluronic acid** products are delivered with a **cold (athermal) laser** to improve hydration and soften signs of biological aging.

![Laser biorevitalization — Radeski Skin Clinic](${COVER})

## Benefits

- deep **hydration**;
- smoother skin surface;
- a course of **6–10 sessions** (weekly) can improve elasticity and fine lines.

## How many sessions?

Typically **3–10**; interval **~1 week**. Maintenance every **month** or **6–12 months**.

## Laser vs injections

Injections are often **more affordable** and **faster/deeper**; laser is **needle-free** and suits injection-averse patients.

## Steps

Gentle **peel**, **gel** application, **laser** treatment.

## Aftercare

**SPF for 5 days**; no sauna, steam, or **facial massage**; antiseptic care; **2–2.5 L** water daily; sleep **on your back**; pause harsh scrubs.

## Contraindications

- skin **lesions/moles** that must not be traumatized;
- active infection/inflammation in the treatment area.

## Mesotherapy vs biorevitalization

**Mesotherapy** targets upper layers and tone; **biorevitalization** focuses on deep dermal **hydration and repair**.

Related services: [Laser biorevitalization](/en/services/apparatnaya-kosmetologiya/lazer-biorev), [Injection biorevitalization](/en/articles/biorevitalizatsiya-gialuron-kislota-radeski), [Device cosmetology](/en/services/apparatnaya-kosmetologiya), [Prices](/en/prices).`;
}

export const LAZER_BIOREVITALIZATSIYA_RADESKI_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Lazer biorevitalizatsiya: inyeksiyasiz gialuron kislotasi, sovuq lazer, kurs va parvarish — Radeski Skin Clinic.',
    body: uzBody(),
    keyTakeaways: [
      'Lazer biorevitalizatsiya ignasiz namlantirish beradi',
      'Kurs odatda 3–10 seans, haftada bir marta',
      'Qo\'llab-quvvatlash 6–12 oyda bir marta',
      '5 kun SPF va sauna/massajdan cheklash',
      'Inyeksiya va lazer vazifaga qarab tanlanadi',
    ],
    tags: ['Lazer biorevitalizatsiya', 'Gialuron kislotasi', 'Apparatli kosmetologiya', 'Namlantirish', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Ignasiz namlantirish xohlasangiz',
      'Teri quruq va charchagan ko\'rinsa',
      'Inyeksion biorevitalizatsiyadan qo\'rqsangiz',
    ],
    faq: [
      {
        question: 'Og\'riqlimi?',
        answer: 'Odatda yengil issiqlik yoki noqulaylik; atermal lazer travmatik emas.',
      },
      {
        question: 'Qachon natija ko\'rinadi?',
        answer: '2–3 haftadan keyin teri tekisligi va rang yaxshilanishi seziladi.',
      },
      {
        question: 'Yozda mumkinmi?',
        answer: 'Ha, lekin SPF majburiy; shifokor mavsumiy rejani belgilaydi.',
      },
    ],
  },
  ru: {
    summary:
      'Лазерная биоревитализация: без иглы, гиалуроновая кислота, холодный лазер — Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'Лазерная биоревитализация — безинъекционное увлажнение',
      'Курс 3–10 процедур, раз в неделю',
      'Поддержка раз в 6–12 месяцев',
      '5 дней SPF, без сауны и массажа',
      'Выбор между лазером и инъекциями индивидуален',
    ],
    tags: ['Лазерная биоревитализация', 'Гиалуроновая кислота', 'Аппаратная косметология', 'Увлажнение', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Хотите увлажнение без уколов',
      'Сухая, уставшая кожа',
      'Против инъекционных методов',
    ],
    faq: [
      {
        question: 'Больно ли?',
        answer: 'Обычно лёгкое тепло или дискомфорт; холодный лазер малотравматичен.',
      },
      {
        question: 'Когда виден результат?',
        answer: 'Через 2–3 недели улучшаются текстура и тон.',
      },
      {
        question: 'Можно летом?',
        answer: 'Да, при обязательной SPF-защите по плану врача.',
      },
    ],
  },
  en: {
    summary:
      'Laser biorevitalization: needle-free hyaluronic delivery with cold laser — Radeski Skin Clinic.',
    body: enBody(),
    keyTakeaways: [
      'Laser biorevitalization hydrates without needles',
      'Typical course: 3–10 weekly sessions',
      'Maintenance every 6–12 months',
      'SPF for 5 days; avoid sauna and massage',
      'Laser vs injections depends on goals',
    ],
    tags: ['Laser biorevitalization', 'Hyaluronic acid', 'Device cosmetology', 'Hydration', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'You want hydration without injections',
      'Dry, tired-looking skin',
      'You prefer non-injection options',
    ],
    faq: [
      {
        question: 'Is it painful?',
        answer: 'Usually mild warmth or discomfort; athermal laser is low-trauma.',
      },
      {
        question: 'When will I see results?',
        answer: 'Texture and tone often improve within 2–3 weeks.',
      },
      {
        question: 'Can I do it in summer?',
        answer: 'Yes with strict SPF as directed by your physician.',
      },
    ],
  },
};

export const LAZER_BIOREVITALIZATSIYA_RADESKI_ARTICLE: Article = {
  id: 'art-lazer-biorevitalizatsiya-radeski',
  slug: 'lazer-biorevitalizatsiya-radeski',
  title: {
    uz: 'Lazer biorevitalizatsiya: inyeksiyasiz namlantirish',
    ru: 'Лазерная биоревитализация',
    en: 'Laser Biorevitalization',
  },
  summary: {
    uz: LAZER_BIOREVITALIZATSIYA_RADESKI_ARTICLE_CATALOG.uz.summary,
    ru: LAZER_BIOREVITALIZATSIYA_RADESKI_ARTICLE_CATALOG.ru.summary,
    en: LAZER_BIOREVITALIZATSIYA_RADESKI_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: LAZER_BIOREVITALIZATSIYA_RADESKI_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: LAZER_BIOREVITALIZATSIYA_RADESKI_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: LAZER_BIOREVITALIZATSIYA_RADESKI_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: { uz: 'Radeski Skin Clinic', ru: 'Radeski Skin Clinic', en: 'Radeski Skin Clinic' },
  date: '2026-09-24',
  image: COVER,
  images: { uz: COVER, ru: COVER, en: COVER },
  views: 0,
};
