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
 * Infantile hemangioma ("qizil xol", "гемангиома у ребёнка"): how it grows and involutes, which
 * ones need early treatment (face, eyelid, lip, nose, nappy area, many lesions, ulceration),
 * how it differs from a port-wine stain, and that medical treatment is decided with a pediatric
 * specialist. The clinic treats residual vessels and stains with the Derma V vascular laser
 * (price list: "Gemangiomalarni Derma V lazer bilan davolash").
 */

const COVER = {
  uz: '/articles/gemangioma-bolalarda-cover-uz.jpg',
  ru: '/articles/gemangioma-bolalarda-cover-ru.jpg',
  en: '/articles/gemangioma-bolalarda-cover-en.jpg',
};

function uzBody(): string {
  return `Chaqaloqda tug‘ilgandan keyingi birinchi haftalarda qizil, bo‘rtib chiqqan “xol” paydo bo‘lib, tez kattalasha boshlasa, bu ko‘pincha **gemangioma** — qon tomirlardan iborat xavfsiz o‘sma. U chaqaloqlarning taxminan 4–5 foizida uchraydi, qizlarda va chala tug‘ilganlarda ko‘proq. Ko‘p gemangiomalar o‘z-o‘zidan kichrayadi, lekin ba’zilarini **erta** davolash kerak.

## Gemangioma qanday rivojlanadi?

1. **Paydo bo‘lishi** — tug‘ilganda bo‘lmaydi yoki och dog‘ bo‘ladi, birinchi 2–4 haftada ko‘rinadi.
2. **O‘sish davri** — ayniqsa 1–3 oyda tez o‘sadi, ko‘pincha 5 oygacha asosiy o‘sish tugaydi.
3. **To‘xtash** — bir muddat o‘zgarmaydi.
4. **Kichrayish (involyutsiya)** — bir yoshdan keyin asta-sekin oqaradi va yumshaydi, ko‘p hollarda 3–5 yoshgacha sezilarli kichrayadi.

Kichraygandan keyin ham ba’zan **qoldiq** qoladi: mayda qon tomirlar, ortiqcha yumshoq teri yoki rang o‘zgarishi.

## Turlari

- **Yuza** — yorqin qizil, “qulupnay”ga o‘xshash, teri ustida.
- **Chuqur** — teri ostida, ko‘kimtir, yumshoq shish.
- **Aralash** — ikkalasi birga.

## Qachon kutish emas, erta ko‘rsatish kerak?

Asosiy o‘sish birinchi oylarda bo‘lgani uchun quyidagi hollarda bolani **iloji boricha erta, ayniqsa 1–2 oyligida** shifokorga ko‘rsating:

- **ko‘z qovog‘i yoki ko‘z atrofida** — ko‘rishga ta’sir qilishi mumkin;
- **lab, burun, quloq** — shaklni o‘zgartirib, iz qoldirishi mumkin;
- **yuzda katta** yoki tez o‘sayotgan;
- **taglik zonasi, bo‘yin burmalari** — yara bo‘lishga moyil;
- **yaralangan, qonaydigan** gemangioma;
- **5 tadan ko‘p** gemangioma — ichki a’zolarni tekshirish kerak bo‘lishi mumkin;
- nafas yoki ovqatlanishga xalaqit bersa.

Bunday hollarda ko‘pincha **dori bilan davolash** boshlanadi. Uni bolalar shifokori bilan birga, bolaning holatini tekshirgandan keyin shifokor buyuradi — uyda o‘zboshimchalik bilan berilmaydi.

## Gemangioma va “vino dog‘i”ning farqi

**Vino dog‘i** (alangalanuvchi nevus) tug‘ilgandan bor bo‘ladi, yassi, pushti-qizil, bola bilan birga o‘sadi va **o‘z-o‘zidan yo‘qolmaydi**. Gemangioma esa tug‘ilgandan keyin paydo bo‘ladi, bo‘rtib o‘sadi va keyin kichrayadi. Farqni shifokor ko‘rikda aytadi — davolash ham turlicha.

## Lazer qachon kerak?

Radeski Skin Clinic’da **Derma V** qon tomir lazeri bilan:

- yuza gemangiomaning qizilligi kamaytiriladi;
- kichraygan gemangiomadan keyin qolgan **mayda qon tomirlar va qizillik** olib tashlanadi;
- vino dog‘i va boshqa qon tomir dog‘lari kurs bilan oqartiriladi.

Lazer bir necha seans, oralig‘i bir necha hafta bilan o‘tkaziladi. Chuqur va tez o‘sayotgan gemangiomada lazer yolg‘iz yetarli emas — avval umumiy davolash rejasi tuziladi. Batafsil: [Derma V lazer](/uz/articles/art-derma-v-qizarish-radeski).

## Uyda nimaga e’tibor berish

- gemangiomani har 1–2 haftada bir xil yorug‘likda suratga oling — o‘sishni kuzatish oson bo‘ladi;
- ishqalanishdan saqlang, taglik zonasida tez-tez almashtiring;
- yara bo‘lsa, toza tuting va shifokorga ko‘rsating;
- surtma, dorivor o‘t va kuydiruvchi vositalarni qo‘llamang.

Bolalar dermatologi qabuli: [Bolalar dermatologi Qo‘qonda](/uz/qoqon/bolalar-dermatologi), [Dermatolog Farg‘onada](/uz/fargona/dermatolog). Qon tomir dog‘larini lazer bilan davolash: [Qon tomir va qizarish davolash](/uz/fargona/qon-tomir).

*Ushbu maqola umumiy ma’lumot uchun. Bolani davolash rejasini faqat shifokor belgilaydi.*`;
}

function ruBody(): string {
  return `Если в первые недели после рождения у малыша появилась красная выпуклая «родинка», которая быстро растёт, чаще всего это **гемангиома** — доброкачественная опухоль из сосудов. Она бывает примерно у 4–5% младенцев, чаще у девочек и недоношенных. Большинство гемангиом уменьшаются сами, но некоторые нужно лечить **рано**.

## Как развивается гемангиома?

1. **Появление** — при рождении её нет или есть бледное пятно, заметной она становится в первые 2–4 недели.
2. **Рост** — особенно быстрый в 1–3 месяца, основной рост обычно заканчивается к 5 месяцам.
3. **Стабилизация** — какое-то время не меняется.
4. **Обратное развитие (инволюция)** — после года постепенно бледнеет и становится мягче, в большинстве случаев заметно уменьшается к 3–5 годам.

После уменьшения иногда остаются **следы**: мелкие сосуды, избыток мягкой кожи или изменение цвета.

## Виды

- **Поверхностная** — ярко-красная, похожа на «клубнику», на поверхности кожи.
- **Глубокая** — под кожей, синеватая, мягкая припухлость.
- **Смешанная** — оба компонента.

## Когда не ждать, а показать рано?

Основной рост приходится на первые месяцы, поэтому в этих случаях покажите ребёнка врачу **как можно раньше, лучше в 1–2 месяца**:

- **на веке или вокруг глаза** — может повлиять на зрение;
- **на губе, носу, ухе** — может деформировать и оставить след;
- **большая на лице** или быстро растущая;
- **в зоне подгузника, в складках шеи** — склонна к изъязвлению;
- **изъязвлённая, кровоточащая**;
- **больше 5** гемангиом — может понадобиться обследование внутренних органов;
- мешает дыханию или кормлению.

В таких случаях часто начинают **медикаментозное лечение**. Его назначает врач вместе с педиатром после обследования ребёнка — самостоятельно дома его не дают.

## Чем гемангиома отличается от «винного пятна»

**Винное пятно** (пламенеющий невус) есть с рождения, плоское, розово-красное, растёт вместе с ребёнком и **само не проходит**. Гемангиома появляется после рождения, растёт выпуклой и потом уменьшается. Различие определит врач на осмотре — и лечение у них разное.

## Когда нужен лазер?

В Radeski Skin Clinic сосудистым лазером **Derma V**:

- уменьшают красноту поверхностной гемангиомы;
- убирают **мелкие сосуды и покраснение**, оставшиеся после уменьшения гемангиомы;
- курсом осветляют винные пятна и другие сосудистые пятна.

Лазер проводят несколькими сеансами с интервалом в несколько недель. При глубокой и быстро растущей гемангиоме одного лазера недостаточно — сначала составляют общий план лечения. Подробнее: [Лазер Derma V](/ru/articles/art-derma-v-qizarish-radeski).

## На что обратить внимание дома

- фотографируйте гемангиому каждые 1–2 недели при одинаковом освещении — так проще следить за ростом;
- берегите от трения, в зоне подгузника меняйте его чаще;
- при изъязвлении держите в чистоте и покажите врачу;
- не используйте мази, травы и прижигающие средства.

Приём детского дерматолога: [Детский дерматолог в Коканде](/ru/qoqon/bolalar-dermatologi), [Дерматолог в Фергане](/ru/fargona/dermatolog). Лазерное лечение сосудистых пятен: [Лечение сосудов и покраснения](/ru/fargona/qon-tomir).

*Статья носит информационный характер. План лечения ребёнка определяет только врач.*`;
}

function enBody(): string {
  return `If a red, raised “birthmark” appears in a baby’s first weeks and starts growing fast, it is most often an **infantile hemangioma**, a benign growth of blood vessels. About 4–5% of babies have one, more often girls and premature babies. Most shrink on their own, but some need **early** treatment.

## How does a hemangioma develop?

1. **Appearance**: absent at birth or only a faint mark, it becomes visible in the first 2–4 weeks.
2. **Growth**: fastest at 1–3 months; most growth is over by about 5 months.
3. **Plateau**: it stays the same for a while.
4. **Involution**: after the first year it slowly fades and softens, and in most children it has shrunk a lot by age 3–5.

Even after shrinking it can leave **traces**: small vessels, extra soft skin or a change in colour.

## Types

- **Superficial**: bright red, strawberry-like, on the skin surface.
- **Deep**: under the skin, a bluish soft swelling.
- **Mixed**: both together.

## When not to wait

Because most growth happens in the first months, show your baby to a doctor **as early as possible, ideally at 1–2 months**, if the hemangioma is:

- **on an eyelid or around the eye**, where it can affect vision;
- **on the lip, nose or ear**, where it can change the shape and leave a mark;
- **large on the face** or growing fast;
- **in the nappy area or neck folds**, where it tends to ulcerate;
- **ulcerated or bleeding**;
- **more than 5** in number, which may call for checks of internal organs;
- interfering with breathing or feeding.

In these cases **medical treatment** is often started. A doctor prescribes it together with the paediatrician after examining the child; it is never given at home on your own.

## Hemangioma vs port-wine stain

A **port-wine stain** is present from birth, flat and pink-red, grows with the child and **does not go away by itself**. A hemangioma appears after birth, grows raised and then shrinks. A doctor tells them apart, and they are treated differently.

## When is laser needed?

At Radeski Skin Clinic the **Derma V** vascular laser is used to:

- reduce the redness of superficial hemangiomas;
- remove the **small vessels and redness** left after a hemangioma shrinks;
- lighten port-wine stains and other vascular marks over a course.

Laser is given in several sessions a few weeks apart. For a deep, fast-growing hemangioma, laser alone is not enough, and an overall treatment plan comes first. More: [Derma V laser](/en/articles/art-derma-v-qizarish-radeski).

## What to watch at home

- photograph the hemangioma every 1–2 weeks in the same light, so growth is easy to follow;
- protect it from rubbing and change nappies often if it is in the nappy area;
- if it ulcerates, keep it clean and show it to a doctor;
- do not use ointments, herbs or caustic products.

Paediatric dermatology: [Paediatric dermatologist in Kokand](/en/qoqon/bolalar-dermatologi), [Dermatologist in Fergana](/en/fargona/dermatolog). Laser for vascular marks: [Vascular redness treatment](/en/fargona/qon-tomir).

*This article is for general information. Only a doctor can decide a child’s treatment plan.*`;
}

export const INFANT_HEMANGIOMA_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Chaqaloqlarda gemangioma: qanday paydo bo‘ladi, o‘sadi va kichrayadi, qaysi hollarda erta ko‘rsatish kerak (ko‘z, lab, burun, taglik zonasi, yara), vino dog‘idan farqi va Derma V lazer qachon yordam beradi.',
    body: uzBody(),
    keyTakeaways: [
      'Gemangioma tug‘ilgandan keyingi 2–4 haftada paydo bo‘ladi va 1–3 oyda tez o‘sadi',
      'Ko‘pchiligi bir yoshdan keyin asta-sekin kichrayadi',
      'Ko‘z, lab, burun, taglik zonasidagi va yaralangan gemangiomani erta ko‘rsatish kerak',
      'Dori bilan davolashni faqat shifokor bolalar shifokori bilan birga buyuradi',
      'Derma V lazer qizillik va qoldiq qon tomirlarni olib tashlaydi',
    ],
    tags: ['Gemangioma', 'Bolalarda gemangioma', 'Qizil xol', 'Vino dog‘i', 'Derma V', 'Bolalar dermatologi', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Gemangioma ko‘z, lab, burun yoki quloqda bo‘lsa',
      'Tez o‘sayotgan bo‘lsa',
      'Yara bo‘lsa yoki qonasa',
      '5 tadan ko‘p bo‘lsa',
      'Nafas yoki ovqatlanishga xalaqit bersa',
    ],
    faq: [
      {
        question: 'Gemangioma o‘z-o‘zidan yo‘qoladimi?',
        answer:
          'Ko‘p hollarda ha: bir yoshdan keyin oqarib kichrayadi, ko‘pincha 3–5 yoshgacha sezilarli kamayadi. Lekin ba’zan qoldiq qon tomirlar yoki ortiqcha teri qoladi, ayrim joylardagi gemangiomani esa erta davolash kerak.',
      },
      {
        question: 'Gemangioma xavflimi?',
        answer:
          'Bu xavfsiz o‘sma, saratonga aylanmaydi. Xavf joylashuvida: ko‘z yonida ko‘rishga, lab va burunda shaklga ta’sir qilishi, taglik zonasida yara bo‘lishi mumkin. Shuning uchun uni shifokor ko‘rib baholaydi.',
      },
      {
        question: 'Bolada gemangiomani lazer bilan olib tashlasa bo‘ladimi?',
        answer:
          'Ha, yuza gemangioma qizilligi va kichraygandan keyingi qoldiq qon tomirlar Derma V lazer bilan kamaytiriladi. Chuqur va tez o‘sayotgan gemangiomada avval umumiy davolash rejasi tuziladi.',
      },
      {
        question: 'Qaysi yoshda shifokorga ko‘rsatish kerak?',
        answer:
          'Xavfli joyda bo‘lsa yoki tez o‘ssa — iloji boricha erta, yaxshisi 1–2 oyligida, chunki asosiy o‘sish birinchi oylarda bo‘ladi. Kichik va xavfsiz joydagi gemangiomani rejali ko‘rsatish yetarli.',
      },
    ],
  },
  ru: {
    summary:
      'Гемангиома у младенцев: как появляется, растёт и уменьшается, в каких случаях показать врачу рано (глаз, губа, нос, зона подгузника, изъязвление), отличие от винного пятна и когда помогает лазер Derma V.',
    body: ruBody(),
    keyTakeaways: [
      'Гемангиома появляется в первые 2–4 недели после рождения и быстро растёт в 1–3 месяца',
      'Большинство постепенно уменьшаются после года',
      'Гемангиомы у глаза, на губе, носу, в зоне подгузника и изъязвлённые нужно показать рано',
      'Лекарственное лечение назначает только врач вместе с педиатром',
      'Лазер Derma V убирает покраснение и остаточные сосуды',
    ],
    tags: ['Гемангиома', 'Гемангиома у ребёнка', 'Красная родинка', 'Винное пятно', 'Derma V', 'Детский дерматолог', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Гемангиома на глазу, губе, носу или ухе',
      'Быстро растёт',
      'Изъязвилась или кровоточит',
      'Гемангиом больше 5',
      'Мешает дыханию или кормлению',
    ],
    faq: [
      {
        question: 'Проходит ли гемангиома сама?',
        answer:
          'Чаще всего да: после года она бледнеет и уменьшается, обычно заметно к 3–5 годам. Но иногда остаются сосуды или избыток кожи, а гемангиомы в некоторых местах нужно лечить рано.',
      },
      {
        question: 'Опасна ли гемангиома?',
        answer:
          'Это доброкачественная опухоль, в рак она не перерождается. Опасность — в расположении: у глаза она влияет на зрение, на губе и носу — на форму, в зоне подгузника изъязвляется. Поэтому её оценивает врач.',
      },
      {
        question: 'Можно ли удалить гемангиому у ребёнка лазером?',
        answer:
          'Да, покраснение поверхностной гемангиомы и остаточные сосуды после уменьшения убирают лазером Derma V. При глубокой и быстро растущей гемангиоме сначала составляют общий план лечения.',
      },
      {
        question: 'В каком возрасте показать врачу?',
        answer:
          'Если она в опасном месте или быстро растёт — как можно раньше, лучше в 1–2 месяца, потому что основной рост идёт в первые месяцы. Небольшую гемангиому в безопасном месте достаточно показать планово.',
      },
    ],
  },
  en: {
    summary:
      'Infantile hemangioma: how it appears, grows and shrinks, when to see a doctor early (eye, lip, nose, nappy area, ulceration), how it differs from a port-wine stain and when the Derma V laser helps.',
    body: enBody(),
    keyTakeaways: [
      'A hemangioma appears 2–4 weeks after birth and grows fastest at 1–3 months',
      'Most shrink gradually after the first year',
      'Those near the eye, on the lip or nose, in the nappy area or ulcerated need an early visit',
      'Medical treatment is prescribed only by a doctor with the paediatrician',
      'The Derma V laser removes redness and leftover vessels',
    ],
    tags: ['Hemangioma', 'Infantile hemangioma', 'Strawberry mark', 'Port-wine stain', 'Derma V', 'Paediatric dermatologist', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'The hemangioma is on the eye, lip, nose or ear',
      'It is growing fast',
      'It has ulcerated or bleeds',
      'There are more than 5',
      'It interferes with breathing or feeding',
    ],
    faq: [
      {
        question: 'Does a hemangioma go away on its own?',
        answer:
          'Usually yes: after the first year it fades and shrinks, often clearly by age 3–5. But vessels or extra skin can remain, and hemangiomas in some places need early treatment.',
      },
      {
        question: 'Is a hemangioma dangerous?',
        answer:
          'It is benign and does not turn into cancer. The risk is about location: near the eye it can affect vision, on the lip or nose the shape, and in the nappy area it can ulcerate. A doctor should assess it.',
      },
      {
        question: 'Can a child’s hemangioma be removed with laser?',
        answer:
          'Yes, the redness of a superficial hemangioma and the vessels left after it shrinks are treated with the Derma V laser. For a deep, fast-growing one, an overall treatment plan comes first.',
      },
      {
        question: 'At what age should a doctor see it?',
        answer:
          'If it is in a risky place or growing fast, as early as possible, ideally at 1–2 months, because most growth happens in the first months. A small one in a safe place can be checked at a routine visit.',
      },
    ],
  },
};

export const INFANT_HEMANGIOMA_ARTICLE: Article = {
  id: 'art-gemangioma-bolalarda',
  slug: 'gemangioma-bolalarda',
  title: {
    uz: 'Bolalarda gemangioma: o‘z-o‘zidan ketadimi va qachon davolash kerak',
    ru: 'Гемангиома у ребёнка: пройдёт ли сама и когда лечить',
    en: 'Hemangioma in Babies: Will It Go Away and When to Treat',
  },
  summary: {
    uz: INFANT_HEMANGIOMA_ARTICLE_CATALOG.uz.summary,
    ru: INFANT_HEMANGIOMA_ARTICLE_CATALOG.ru.summary,
    en: INFANT_HEMANGIOMA_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: INFANT_HEMANGIOMA_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: INFANT_HEMANGIOMA_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: INFANT_HEMANGIOMA_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Mangasaryan Lorena Georgievna',
    ru: 'Мангасарян Лорена Георгиевна',
    en: 'Dr. Lorena Georgievna Mangasaryan',
  },
  date: '2026-12-20',
  image: COVER.uz,
  images: COVER,
  views: 0,
};
