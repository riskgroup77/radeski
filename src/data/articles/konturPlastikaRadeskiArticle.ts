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

const COVER = '/services/in-ekcionnaya/konturnaya.jpg';

function uzBody(): string {
  return `## Kontur plastika nima?

**Kontur plastika** — Radeski Skin & Aesthetic Clinic da yuz va lab konturini tiklash, hajm berish va yosh o'zgarishlarini yumshatish uchun **gialuron kislotasi fillerlari** bilan inyeksiya. Gialuron kislotasi terining tabiiy komponenti: suv ushlaydi va namlik yo'qotilishini kamaytiradi.

![Kontur plastika — Radeski Skin Clinic](${COVER})

## Qaysi zonalar tuzatiladi?

- lab hajmi va konturi;
- tushgan lab burchaklari;
- og'iz atrofi mayda ajinlar;
- yuz asimmetriyasi va tonus pasayishi;
- yoshga bog'liq hajm yo'qolishi.

## Surgiderm 30XP

Fransuz **Surgiderm 30XP** filler — sintetik gialuron kislotasi tufayli allergiya xavfi past.

## Muolaja qanday o'tadi?

Ingichka igna bilan **1–2 ml** kichik dozalarda kiritiladi; bir seansda taxminan **20 inyeksiya**, chuqurlik **~3 mm**. Inyeksiya soni individual — kontur bo'ylab va hajm uchun alohida reja.

## Ko'rsatmalar

- yosh o'zgarishlari;
- lab asimmetriyasi;
- tushgan burchaklar;
- teri tonusining pasayishi;
- og'iz atrofi chiziqlari;
- tabiiy hajm yetishmasligi.

## Qachon qilinmaydi?

- filler komponentlariga allergiya;
- homiladorlik va emizish;
- nazorat qilinmaydigan qandli diabet;
- o'tkir infeksiya (gripp, ORVI, gerpes).

## Oldin va keyin

**Oldin:** 1 hafta solyariy/plyajdan voz kechish; muolaja kunida kofein; 48 soat alkogol; qon suyultiruvchi va antibiotiklar — shifokor bilan kelishiladi.

**Keyin (24–48 soat):** zonaga tegmaslik va massaj qilmaslik; alkogol va ba'zi og'riq qoldiruvchilardan voz kechish; muz — faqat shifokor tavsiyasiga ko'ra.

## «Parij usuli»

Tabiiy hajm va shakl — «sun'iy» lab effektisiz.

## Parvarish va suv

Gialuron kislotasi suv bilan ishlaydi — **yetarli suv ichish** namlik va tiklanishni qo'llab-quvvatlaydi. Lab atrofida **Xlorgeksidin**, tiklanish geli va **SPF** tavsiya etiladi.

## Xavf va og'riq

Vaqtincha shish, gematoma, yengil og'riq **2–4 kun** normal. Kulish mumkin; faol o'pishdan **5–7 kun** cheklash tavsiya etiladi.

Bog'liq xizmatlar: [Kontur plastika](/uz/services/in-ekcionnaya-kosmetologiya/konturnaya), [Biorevitalizatsiya](/uz/services/in-ekcionnaya-kosmetologiya/biorev), [Botulinoterapiya](/uz/articles/botulinoterapiya-mimik-ajinlar-radeski), [Narxlar](/uz/prices).`;
}

function ruBody(): string {
  return `## Что такое контурная пластика?

**Контурная пластика** в Radeski Skin & Aesthetic Clinic — инъекции **филлеров на гиалуроновой кислоте** для восстановления объёма и контура лица и губ, коррекции возрастных изменений.

![Контурная пластика — Radeski Skin Clinic](${COVER})

## Какие зоны корректируют?

- объём и контур губ;
- опущенные уголки рта;
- морщины вокруг рта;
- асимметрия и снижение тонуса;
- возрастная потеря объёма.

## Surgiderm 30XP

Французский филлер **Surgiderm 30XP** с синтетической гиалуроновой кислотой — низкий риск аллергии.

## Как проходит процедура?

Тонкая игла, **1–2 мл**, около **20 инъекций**, глубина **~3 мм**. Схема индивидуальна.

## Показания

- возрастные изменения;
- асимметрия губ;
- опущенные уголки;
- снижение тонуса;
- периоральные морщины;
- недостаточный естественный объём.

## Противопоказания

- аллергия на компоненты;
- беременность и лактация;
- декомпенсированный диабет;
- острые инфекции.

## Подготовка и уход

**До:** без солярия неделю; без кофеина в день процедуры; без алкоголя 48 часов; согласование антикоагулянтов с врачом.

**После:** 24–48 часов не трогать зону; ограничить алкоголь; уход по назначению; **Хлоргексидин**, SPF, увлажнение.

## «Парижские губы»

Техника естественного объёма без эффекта «перекачанных» губ.

## Риски

Отёк, гематома, дискомфорт 2–4 дня — норма. Лёгкие поцелуи допустимы; активные — лучше отложить на 5–7 дней.

Связанные услуги: [Контурная пластика](/ru/services/in-ekcionnaya-kosmetologiya/konturnaya), [Биоревитализация](/ru/services/in-ekcionnaya-kosmetologiya/biorev), [Ботулинотерапия](/ru/articles/botulinoterapiya-mimik-ajinlar-radeski), [Цены](/ru/prices).`;
}

function enBody(): string {
  return `## What is contour enhancement?

**Contour enhancement** at Radeski Skin & Aesthetic Clinic uses **hyaluronic acid fillers** to restore facial and lip volume, refine contours, and soften age-related changes.

![Contour enhancement — Radeski Skin Clinic](${COVER})

## Areas treated

- lip volume and contour;
- drooping mouth corners;
- perioral lines;
- asymmetry and loss of tone;
- age-related volume loss.

## Surgiderm 30XP

The French **Surgiderm 30XP** filler uses synthetic hyaluronic acid with a low allergy risk.

## Procedure

Fine needle, **1–2 ml**, about **20 injections**, **~3 mm** depth — individualized plan.

## Indications and contraindications

Indications include age-related changes, asymmetry, and perioral wrinkles. Contraindications include filler allergy, pregnancy/breastfeeding, uncontrolled diabetes, and acute infections.

## Before and after care

Avoid tanning one week before; limit caffeine and alcohol; coordinate blood thinners with your doctor. After treatment, avoid rubbing the area for 24–48 hours; use chlorhexidine, healing gels, and SPF as advised.

## Paris technique

Natural volume without an overfilled look.

## Risks

Temporary swelling, bruising, and soreness for 2–4 days are common. Active kissing is best avoided for 5–7 days.

Related services: [Contour enhancement](/en/services/in-ekcionnaya-kosmetologiya/konturnaya), [Biorevitalization](/en/services/in-ekcionnaya-kosmetologiya/biorev), [Botulinum therapy](/en/articles/botulinoterapiya-mimik-ajinlar-radeski), [Prices](/en/prices).`;
}

export const KONTUR_PLASTIKA_RADESKI_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Kontur plastika: gialuron kislotasi filler, Surgiderm 30XP, ko\'rsatmalar va parvarish — Radeski Skin Clinic.',
    body: uzBody(),
    keyTakeaways: [
      'Kontur plastika yuz va lab hajmini tiklaydi',
      'Surgiderm 30XP — allergiya xavfi past filler',
      'Parij usuli tabiiy natija beradi',
      'Oldin-keyin 24–48 soat maxsus parvarish kerak',
      'Shifokor individual inyeksiya rejasini tuzadi',
    ],
    tags: ['Kontur plastika', 'Filler', 'Gialuron kislotasi', 'Surgiderm', 'Inyeksion kosmetologiya', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Lab yoki yuz konturi sizni bezovta qilsa',
      'Gormonal kremlar yordam bermagan bo\'lsa',
      'Oldingi filler natijasidan qoniqmasangiz',
    ],
    faq: [
      {
        question: 'Kontur plastika qancha vaqt turadi?',
        answer: 'Odatda 6–12 oy; metabolizm va preparatga bog\'liq.',
      },
      {
        question: 'Labdan tashqari qayerga qo\'llanadi?',
        answer: 'Yuz konturi, og\'iz atrofi va yoshga bog\'liq hajm yo\'qolishi — shifokor baholaydi.',
      },
      {
        question: 'Botoks bilan bir vaqtda mumkinmi?',
        answer: 'Ko\'pincha ha, lekin reja va interval shifokor tomonidan belgilanadi.',
      },
    ],
  },
  ru: {
    summary:
      'Контурная пластика: филлеры на гиалуроновой кислоте, Surgiderm 30XP, показания и уход — Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'Контурная пластика восстанавливает объём лица и губ',
      'Surgiderm 30XP — низкий риск аллергии',
      'Парижская техника — естественный результат',
      'Уход 24–48 часов после процедуры',
      'Схема инъекций индивидуальна',
    ],
    tags: ['Контурная пластика', 'Филлер', 'Гиалуроновая кислота', 'Surgiderm', 'Инъекционная косметология', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Недостаточный объём или асимметрия',
      'Не помогли другие методы',
      'Недовольство предыдущим результатом',
    ],
    faq: [
      {
        question: 'Сколько держится результат?',
        answer: 'Обычно 6–12 месяцев — зависит от препарата и метаболизма.',
      },
      {
        question: 'Только для губ?',
        answer: 'Также контур лица и периоральные зоны — по показаниям врача.',
      },
      {
        question: 'Можно сочетать с ботоксом?',
        answer: 'Часто да; план и интервал определяет врач.',
      },
    ],
  },
  en: {
    summary:
      'Contour enhancement: hyaluronic fillers, Surgiderm 30XP, indications and aftercare — Radeski Skin Clinic.',
    body: enBody(),
    keyTakeaways: [
      'Fillers restore facial and lip volume',
      'Surgiderm 30XP has a low allergy risk',
      'Paris technique aims for natural results',
      'Aftercare matters for 24–48 hours',
      'Injection plans are individualized',
    ],
    tags: ['Contour enhancement', 'Dermal filler', 'Hyaluronic acid', 'Surgiderm', 'Injection cosmetology', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Volume loss or asymmetry bothers you',
      'Previous treatments were insufficient',
      'Dissatisfied with prior filler results',
    ],
    faq: [
      {
        question: 'How long do results last?',
        answer: 'Typically 6–12 months depending on product and metabolism.',
      },
      {
        question: 'Lips only?',
        answer: 'Facial contour and perioral areas too — per physician assessment.',
      },
      {
        question: 'Combine with botulinum toxin?',
        answer: 'Often yes; timing is set by your doctor.',
      },
    ],
  },
};

export const KONTUR_PLASTIKA_RADESKI_ARTICLE: Article = {
  id: 'art-kontur-plastika-radeski',
  slug: 'kontur-plastika-gialuron-radeski',
  title: {
    uz: 'Kontur plastika: gialuron kislotasi filler',
    ru: 'Контурная пластика: филлеры на гиалуроновой кислоте',
    en: 'Contour Enhancement: Hyaluronic Acid Fillers',
  },
  summary: {
    uz: KONTUR_PLASTIKA_RADESKI_ARTICLE_CATALOG.uz.summary,
    ru: KONTUR_PLASTIKA_RADESKI_ARTICLE_CATALOG.ru.summary,
    en: KONTUR_PLASTIKA_RADESKI_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: KONTUR_PLASTIKA_RADESKI_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: KONTUR_PLASTIKA_RADESKI_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: KONTUR_PLASTIKA_RADESKI_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: { uz: 'Radeski Skin Clinic', ru: 'Radeski Skin Clinic', en: 'Radeski Skin Clinic' },
  date: '2026-09-24',
  image: COVER,
  images: { uz: COVER, ru: COVER, en: COVER },
  views: 0,
};
