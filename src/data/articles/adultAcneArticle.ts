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
  return `## Kattalarda toshmalar: nega paydo bo‘ladi?

Ko‘pchilik akne (toshma)ni faqat o‘smirlar muammosi deb biladi. Amalda 25, 30 va hatto 40 yoshdan keyin ham millionlab odamlar yuzdagi yallig‘lanish bilan kurashadi. Kattalarda akne hayot sifatini pasaytirishi, psixologik noqulaylik berishi va o‘z vaqtida davolanmasa **postakne** (chandiq, dog‘) qoldirishi mumkin.

Radeski Skin Clinic’da (Farg‘ona va Qo‘qon) akne komplekslik diagnostika va zamonaviy yevropa protokollari asosida davolanadi.

## Kattalarda akne nima uchun chiqadi?

Akne — yog‘ bezlari va tuk follikulalarining surunkali yallig‘lanish kasalligi. Unda odatda bir nechta omil birga ishlaydi:

- gormonal o‘zgarishlar;
- teri yog‘ining ko‘payishi;
- teshiklarning tiqilishi;
- *Cutibacterium acnes* bakteriyalarining ko‘payishi;
- surunkali stress;
- irsiy moyillik;
- ovqat hazm qilish tizimi muammolari;
- polikistoz tuxumdon sindromi;
- noto‘g‘ri uy parvarishi;
- comedogen kosmetika;
- ba’zi dori vositalari.

Ko‘pincha sabab bitta emas — shuning uchun o‘ziga-o‘zi “muolaja” uzoq muddatli natija bermaydi.

## Qanday ko‘rinadi?

Belgilari turlicha bo‘lishi mumkin:

- qora nuqtalar (komedonlar);
- oq “teri osti” elementlar;
- qizil yallig‘langan toshmalar;
- og‘riqli tugunlar;
- yiringli shishlar;
- chuqurroq og‘riqli hosilalar.

Noto‘g‘ri yondashuvdan keyin qolishi mumkin:

- chandiqlar (postakne);
- pigment dog‘lari;
- kengaygan teshiklar;
- notekis terkrelyef.

## Nega siqib chiqarish mumkin emas?

O‘zingiz siqish:

- infeksiyani tarqatadi;
- yallig‘lanishni kuchaytiradi;
- chandiq xavfini oshiradi;
- yangi chiqishlarga sabab bo‘lishi mumkin;
- bitishni sekinlashtiradi.

Ayniqsa burun va burnog‘iz uchburchagi zonasi xavfli — bu yerda mustaqil aralashuv tavsiya etilmaydi.

## Diagnostika

Davolashdan oldin dermatolog sababni aniqlashga harakat qiladi. Kerak bo‘lsa:

- teri ko‘rigi;
- teri holatini baholash;
- gormonal tekshiruvlar;
- laboratoriya tahlillari;
- qo‘shimcha mutaxassislar konsultatsiyasi.

Individual reja eng samarali sxemani tanlashga yordam beradi.

## Radeski Skin Clinic’da zamonaviy davolash

Yondashuv og‘irlik darajasiga qarab tanlanadi.

### Dori terapiyasi

Ko‘rsatmaga qarab:

- tashqi (mahalliy) preparatlar;
- yallig‘lanishga qarshi vositalar;
- retinoidlar;
- antibakterial terapiya;
- gormonal tartibga soluvchi vositalar (zarurat bo‘lsa).

### Lazer muolajalar

Zamonaviy lazerlar yordamida:

- yallig‘lanishni kamaytirish;
- yog‘ ishlab chiqarishini yumshatish;
- teri tiklanishini tezlashtirish;
- postakne belgilarni engillashtirish mumkin.

### IPL-terapiya

IPL qizarishni, yallig‘lanishni kamaytirish va teri ko‘rinishini yaxshilashda qo‘llanilishi mumkin.

### Professional parvarish

Kursga kirishi mumkin:

- davolovchi pilinglar;
- professional yuz tozalash;
- tiklovchi muolajalar;
- uy uchun individual parvarish.

## Akne davrida uyda qanday parvarish qilish kerak?

- kuniga ikki marta yumshoq tozalash;
- comedogen bo‘lmagan kosmetika;
- har kuni SPF;
- yuzni qo‘l bilan tez-tez tegmaslik;
- agressiv skrablar qilmaslik;
- shifokor tavsiyalariga rioya qilish.

## Qachon dermatologga murojaat qilish kerak?

- toshmalar **3 oydan** ortiq o‘tmasa;
- og‘riqli “teri osti” yallig‘lanishlar bo‘lsa;
- dog‘ va chandiq qolayotgan bo‘lsa;
- uy vositalari yordam bermasa;
- chiqishlar kuchayib borsa.

Erta boshlash chandiqsiz, barqarorroq natijaga yaqinlashtiradi.

## Nega Radeski Skin Clinic?

Biz yevropa klinik protokollariga tayangan holda har bir bemorga individual yondashamiz: diagnostika, apparat usullari va akne/postakne uchun kompleks reja. Maqsad — faqat vaqtinchalik “tozalash” emas, sababni topib **uzoq remissiya**ga erishish.

## Xulosa

Kattalarda toshmalar — oddiy “kosmetik nuqson” emas, balki professional yondashuvni talab qiladigan holat. O‘zicha davolash ba’zan vaqtinchalik yengillik bersa-da, asorat xavfini oshirishi mumkin.

Agar toshma, yallig‘lanish yoki postakne izlari bezovta qilsa, Radeski Skin Clinic mutaxassislari Farg‘ona va Qo‘qonda sizga mos individual davo rejasini tuzadi.`;
}

function ruBody(): string {
  return `## Прыщи у взрослых: почему появляются?

Многие считают, что прыщи (акне) — проблема подростков. На деле высыпания беспокоят миллионы мужчин и женщин после 25, 30 и даже 40 лет. Взрослое акне снижает качество жизни, вызывает психологический дискомфорт и при позднем лечении может оставлять рубцы и пятна (постакне).

В Radeski Skin Clinic (Фергана и Коканд) проводят комплексную диагностику и современное лечение акне по европейским протоколам с использованием актуального оборудования.

## Почему появляются прыщи у взрослых?

Акне — хроническое воспалительное заболевание сальных желёз и волосяных фолликулов. Обычно задействовано сразу несколько факторов:

- гормональные изменения;
- повышенная выработка кожного сала;
- закупорка пор;
- размножение бактерий *Cutibacterium acnes*;
- хронический стресс;
- наследственная предрасположенность;
- проблемы ЖКТ;
- синдром поликистозных яичников;
- неправильный домашний уход;
- комедогенная косметика;
- отдельные лекарственные препараты.

Именно поэтому самолечение редко даёт стойкий результат.

## Как выглядят прыщи у взрослых?

Симптомы могут различаться:

- чёрные точки (комедоны);
- белые подкожные элементы;
- воспалённые красные прыщи;
- болезненные узлы;
- гнойнички;
- более глубокие болезненные образования.

После неправильного подхода часто остаются:

- рубцы (постакне);
- пигментные пятна;
- расширенные поры;
- неровный рельеф кожи.

## Почему нельзя выдавливать прыщи?

Самостоятельное выдавливание приводит к:

- распространению инфекции;
- усилению воспаления;
- риску рубцов;
- появлению новых элементов;
- долгому заживлению.

Особенно опасно выдавливать воспаления в зоне носа и носогубного треугольника.

## Диагностика акне

Перед лечением дерматолог выясняет причины. При необходимости назначают:

- дерматологический осмотр;
- оценку состояния кожи;
- гормональное обследование;
- лабораторные анализы;
- консультации смежных специалистов.

Индивидуальный подход помогает выбрать рабочую схему.

## Современное лечение акне в Radeski Skin Clinic

План зависит от степени тяжести.

### Медикаментозная терапия

По показаниям врач может назначить:

- наружные средства;
- противовоспалительные препараты;
- ретиноиды;
- антибактериальную терапию;
- коррекцию гормональных нарушений (если нужно).

### Лазерное лечение

Современные лазеры помогают:

- снизить воспаление;
- уменьшить избыточную жирность;
- ускорить восстановление кожи;
- смягчить проявления постакне.

### IPL-терапия

IPL может уменьшать воспаление и покраснение и улучшать внешний вид кожи.

### Профессиональный уход

В курс могут входить:

- лечебные пилинги;
- профессиональная чистка лица;
- восстановительные процедуры;
- индивидуальный домашний уход.

## Как ухаживать за кожей при акне?

- очищать кожу дважды в день мягко;
- использовать некомедогенную косметику;
- ежедневно наносить SPF;
- меньше трогать лицо руками;
- избегать агрессивных скрабов;
- соблюдать назначения врача.

## Когда обратиться к дерматологу?

- прыщи не проходят дольше **трёх месяцев**;
- появляются болезненные подкожные воспаления;
- остаются пятна и рубцы;
- домашние средства не помогают;
- высыпания усиливаются.

Чем раньше начато лечение, тем выше шанс восстановить кожу без выраженных рубцов и добиться длительной ремиссии.

## Почему выбирают Radeski Skin Clinic?

Мы опираемся на современные европейские протоколы, подбираем терапию лично и используем аппаратные методики вместе с профессиональной диагностикой. Цель — не только временно убрать высыпания, а найти причину и закрепить результат.

## Заключение

Прыщи у взрослых — это заболевание, а не «просто косметический дефект». Самолечение часто даёт лишь краткий эффект и повышает риск осложнений. Современная дерматология позволяет эффективно контролировать акне и заметно улучшить состояние кожи.

Если беспокоят прыщи, воспаления или следы постакне, специалисты Radeski Skin Clinic в Фергане и Коканде составят индивидуальную программу лечения.`;
}

function enBody(): string {
  return `## Adult acne: why breakouts appear after 25

Many people think acne is only a teenage issue. In reality, millions of adults over 25, 30, and even 40 still struggle with breakouts. Adult acne can reduce quality of life, cause stress, and leave scars or dark marks (post-acne) if treatment starts too late.

At Radeski Skin Clinic (Fergana and Kokand), we combine thorough diagnosis with modern European acne protocols and advanced equipment.

## Why do adults get acne?

Acne is a chronic inflammatory condition of the sebaceous glands and hair follicles. Several factors often act together:

- hormonal shifts;
- excess sebum;
- clogged pores;
- overgrowth of *Cutibacterium acnes*;
- chronic stress;
- genetic predisposition;
- gastrointestinal issues;
- polycystic ovary syndrome;
- unsuitable home care;
- comedogenic cosmetics;
- some medications.

That is why DIY treatment rarely brings lasting control.

## How does adult acne look?

Signs vary:

- blackheads (comedones);
- closed white bumps;
- red inflamed pimples;
- painful nodules;
- pustules;
- deeper tender lesions.

After the wrong approach, people often notice:

- scars (post-acne);
- pigment spots;
- enlarged pores;
- uneven texture.

## Why you should not squeeze pimples

Squeezing can:

- spread infection;
- worsen inflammation;
- increase scarring risk;
- trigger new breakouts;
- slow healing.

The nose and nasolabial triangle are especially high-risk zones for home squeezing.

## Diagnosis

Before treatment, a dermatologist looks for drivers of the disease. When needed we use:

- clinical skin exam;
- skin-quality assessment;
- hormone testing;
- lab work;
- referrals to related specialists.

An individualized plan makes therapy more precise.

## Modern acne care at Radeski Skin Clinic

Treatment depends on severity.

### Medication

When indicated:

- topical products;
- anti-inflammatory options;
- retinoids;
- antimicrobial therapy;
- hormonal correction if required.

### Laser treatment

Modern lasers can help:

- calm inflammation;
- reduce excess oiliness;
- support skin recovery;
- soften post-acne marks.

### IPL therapy

IPL may reduce redness and inflammation and improve skin clarity.

### Professional care

A course may include:

- medical peels;
- professional facial cleansing;
- restorative procedures;
- a tailored home routine.

## Daily care during acne treatment

- cleanse gently twice a day;
- use non-comedogenic products;
- apply SPF every day;
- avoid touching your face often;
- skip harsh scrubs;
- follow your doctor’s plan.

## When to see a dermatologist

- breakouts last longer than **three months**;
- painful under-the-skin lesions appear;
- spots and scars remain;
- home remedies stop helping;
- flares are getting worse.

Earlier care improves the chance of clearer skin with fewer scars and more stable remission.

## Why patients choose Radeski Skin Clinic

We follow current European dermatology protocols, personalize therapy, and combine diagnostics with device-based methods. The goal is lasting control — not only a short-term “clear day.”

## Conclusion

Adult acne is a medical condition, not a minor cosmetic quirk. Self-treatment often brings temporary relief and can increase complications. Modern dermatology can control breakouts and meaningfully improve skin quality.

If acne, inflammation, or post-acne marks bother you, the Radeski Skin Clinic team in Fergana and Kokand can build a personalized treatment plan.`;
}

export const ADULT_ACNE_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Kattalarda toshma (akne): sabablari, diagnostika va Radeski Skin Clinic’da (Farg‘ona, Qo‘qon) zamonaviy davolash — dori, lazer, IPL va individual parvarish.',
    body: uzBody(),
    keyTakeaways: [
      'Kattalar akne — ko‘pincha bir nechta omilning natijasi, shuning uchun o‘zicha davolash uzoq remissiya bermaydi',
      'Siqib chiqarish chandiq va infeksiya xavfini oshiradi',
      'Davolash og‘irlikka qarab: dori, lazer, IPL va professional parvarish bilan individual qilinadi',
      'Farg‘ona va Qo‘qonda Radeski Skin Clinic sababni aniqlab, uzoq muddatli nazorat rejasini tuzadi',
    ],
    tags: [
      'Kattalarda akne',
      'Toshma',
      'Akne davolash',
      'Postakne',
      'IPL',
      'Dermatolog',
      'Qoqon',
      'Fargona',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Toshmalar 3 oydan ortiq o‘tmasa',
      'Og‘riqli teri osti yallig‘lanishlar bo‘lsa',
      'Dog‘ va chandiq qolayotgan bo‘lsa',
      'Uy vositalari yordam bermasa',
      'Chiqishlar kuchayib borsa',
    ],
    faq: [
      {
        question: 'Kattalarda akne faqat “yomon ovqat”danmi?',
        answer:
          'Yo‘q. Gormonlar, stress, dori, kosmetika va boshqa omillar ham muhim. Ovqatlanish ba’zan rol o‘ynaydi, lekin odatda yagona sabab emas.',
      },
      {
        question: 'Qachon “butunlay o‘tib ketadi”?',
        answer:
          'Ko‘p bemorlarda barqaror remissiya mumkin, lekin “umrboqiy kafolat” tibbiyotda bo‘lmaydi. Maqsad — nazorat va uzoq tinch davr.',
      },
      {
        question: 'Qo‘qonda akne qayerda davolanadi?',
        answer:
          'Radeski Skin Clinic’da dermatolog ko‘rigidan so‘ng individual reja (dori, apparat usullari, parvarish) tuziladi.',
      },
      {
        question: 'IPL va lazer kimga mos?',
        answer:
          'Yallig‘lanish, qizarish va postakne belgilarida ko‘rib chiqilishi mumkin — faqat shifokor bahosidan so‘ng.',
      },
    ],
  },
  ru: {
    summary:
      'Прыщи у взрослых: причины, диагностика и современное лечение акне в Radeski Skin Clinic (Фергана, Коканд) — медикаменты, лазер, IPL и индивидуальный уход.',
    body: ruBody(),
    keyTakeaways: [
      'Взрослое акне почти всегда связано с несколькими факторами — самолечение редко даёт стойкий эффект',
      'Выдавливание повышает риск рубцов и распространения инфекции',
      'План лечения зависит от тяжести: препараты, лазер, IPL и профессиональный уход',
      'В Фергане и Коканде Radeski Skin Clinic ищет причину и работает на длительную ремиссию',
    ],
    tags: [
      'Прыщи у взрослых',
      'Акне',
      'Лечение акне',
      'Постакне',
      'IPL',
      'Дерматолог',
      'Коканд',
      'Фергана',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Прыщи не проходят больше трёх месяцев',
      'Появились болезненные подкожные воспаления',
      'Остаются пятна и рубцы',
      'Домашние средства не помогают',
      'Высыпания усиливаются',
    ],
    faq: [
      {
        question: 'Взрослое акне бывает только из‑за еды?',
        answer:
          'Нет. Важны гормоны, стресс, уход, комедогенная косметика, лекарства и другие факторы. Питание может влиять, но редко является единственной причиной.',
      },
      {
        question: 'Можно ли избавиться от прыщей навсегда?',
        answer:
          'Часто достижима длительная ремиссия, но абсолютных гарантий «навсегда» в медицине нет. Цель — устойчивый контроль и здоровый вид кожи.',
      },
      {
        question: 'Где лечат акне в Коканде?',
        answer:
          'В Radeski Skin Clinic после осмотра дерматолога составляют индивидуальную программу: лекарства, аппаратные методы и домашний уход.',
      },
      {
        question: 'Кому подходят IPL и лазер?',
        answer:
          'При воспалении, покраснении и постакне — после очной оценки врача.',
      },
    ],
  },
  en: {
    summary:
      'Adult acne: causes, diagnosis, and modern treatment at Radeski Skin Clinic in Fergana and Kokand — medication, laser, IPL, and personalized care.',
    body: enBody(),
    keyTakeaways: [
      'Adult acne usually has multiple drivers — self-treatment rarely creates lasting control',
      'Squeezing raises infection and scarring risk',
      'Care is individualized by severity: medicines, laser, IPL, and professional routines',
      'In Fergana and Kokand, Radeski Skin Clinic targets causes and longer remission',
    ],
    tags: [
      'Adult acne',
      'Acne treatment',
      'Pimples',
      'Post-acne',
      'IPL',
      'Dermatologist',
      'Kokand',
      'Fergana',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Breakouts last longer than three months',
      'Painful under-the-skin lesions appear',
      'Spots and scars remain',
      'Home remedies stop helping',
      'Flares are getting worse',
    ],
    faq: [
      {
        question: 'Is adult acne only caused by food?',
        answer:
          'No. Hormones, stress, skincare, comedogenic products, medicines, and other factors often matter more. Diet may contribute but is rarely the only cause.',
      },
      {
        question: 'Can acne be cured forever?',
        answer:
          'Long remission is realistic for many people, but medicine cannot promise absolute lifelong certainty. The goal is stable control and healthier skin.',
      },
      {
        question: 'Where can I treat acne in Kokand?',
        answer:
          'At Radeski Skin Clinic a dermatologist builds a personalized plan with medicines, device-based methods, and home care when needed.',
      },
      {
        question: 'Who may benefit from IPL or laser?',
        answer:
          'People with inflammation, redness, or post-acne marks — after an in-person medical assessment.',
      },
    ],
  },
};

export const ADULT_ACNE_ARTICLE: Article = {
  id: 'art-pryshchi-u-vzroslykh',
  slug: 'pryshchi-u-vzroslykh',
  title: {
    uz: 'Kattalarda toshma: sabablari va akne zamonaviy davolash | Radeski Skin Clinic',
    ru: 'Прыщи у взрослых: причины, лечение акне | Radeski Skin Clinic',
    en: 'Adult Acne: Causes and Modern Treatment | Radeski Skin Clinic',
  },
  summary: {
    uz: ADULT_ACNE_ARTICLE_CATALOG.uz.summary,
    ru: ADULT_ACNE_ARTICLE_CATALOG.ru.summary,
    en: ADULT_ACNE_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: ADULT_ACNE_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: ADULT_ACNE_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: ADULT_ACNE_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-08-04',
  image: null,
  images: { uz: null, ru: null, en: null },
  views: 0,
};
