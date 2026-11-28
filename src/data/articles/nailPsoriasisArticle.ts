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
 * Nail psoriasis: pitting, oil-drop spots, onycholysis, thickening; why it is so often taken for
 * fungus (and both can coexist), the link with psoriatic arthritis, why nails respond slowly,
 * and treatment: local therapy, systemic treatment for severe or joint disease, excimer for
 * nail folds, podology care. Fungal test at the clinic lab rules out onychomycosis first.
 */

const COVER = {
  uz: '/articles/tirnoq-psoriazi-cover-uz.jpg',
  ru: '/articles/tirnoq-psoriazi-cover-ru.jpg',
  en: '/articles/tirnoq-psoriazi-cover-en.jpg',
};

function uzBody(): string {
  return `Psoriaz faqat teriga emas, tirnoqlarga ham ta’sir qiladi: psoriazi bor odamlarning yarmidan ko‘pida vaqt o‘tib tirnoq o‘zgarishlari paydo bo‘ladi. Tirnoq psoriazi ko‘pincha **zamburug‘ deb o‘ylanib**, oylab noto‘g‘ri davolanadi. Quyida belgilari, zamburug‘dan farqi va davolash yo‘llarini tushuntiramiz.

## Belgilari

- **Nuqtali chuqurchalar** — tirnoq yuzasida igna bilan teshilgandek mayda chuqurchalar. Eng xos belgi.
- **“Moy tomchisi”** — tirnoq ostida sarg‘ish-qizg‘ish dog‘, xuddi moy tomgandek.
- **Onixoliz** — tirnoq uchidan boshlab tirnoq to‘shagidan ajraladi, ostida havo bo‘shlig‘i oq ko‘rinadi.
- **Tirnoq osti qalinlashishi** — tirnoq ostida sarg‘ish massa yig‘iladi, tirnoq ko‘tariladi.
- **Ko‘ndalang chiziqlar, mo‘rtlik, uvalanish.**
- Tirnoq atrofida qizarish va po‘st.

Ko‘pincha qo‘l tirnoqlari ko‘proq zararlanadi, bir vaqtda bir nechta tirnoqda o‘zgarish bo‘ladi.

## Zamburug‘dan qanday farqlanadi?

| Belgi | Tirnoq psoriazi | Tirnoq zamburug‘i |
|---|---|---|
| Nuqtali chuqurchalar | Ko‘p uchraydi | Deyarli bo‘lmaydi |
| “Moy tomchisi” | Xos belgi | Bo‘lmaydi |
| Ko‘proq qaysi tirnoq | Qo‘l tirnoqlari | Oyoq tirnoqlari, ayniqsa bosh barmoq |
| Terida psoriaz | Ko‘pincha bor | Bo‘lmasligi mumkin |
| Tahlil | Zamburug‘ yo‘q | Zamburug‘ topiladi |

Muhim: ikkalasi **birga** ham bo‘lishi mumkin — psoriazli tirnoq zamburug‘ga moyilroq. Shuning uchun davolashdan oldin **tirnoqdan zamburug‘ tahlili** olinadi. Batafsil: [Tirnoq zamburug‘i](/uz/articles/art-tirnoq-zamburugi).

## Nega bu muhim: bo‘g‘imlar

Tirnoq psoriazi **psoriatik artrit** bilan tez-tez birga keladi. Barmoq bo‘g‘imlari shishsa, ertalab qotib qolsa yoki tovon, bel og‘risa — buni shifokorga albatta ayting: davolash rejasi shunga qarab o‘zgaradi.

## Qanday davolanadi?

- **Mahalliy davolash** — tirnoq va tirnoq atrofiga surtiladigan dori vositalari. Yengil holatlarda asosiy usul.
- **Tirnoq atrofi va tirnoq ostiga in’eksiya** — bir nechta tirnoq qattiq zararlanganda, shifokor qaroriga ko‘ra.
- **Umumiy (tizimli) davolash** — tirnoqlar ko‘p zararlanganda, terida keng psoriaz yoki artrit bo‘lsa. Dori va nazorat tahlillarini dermatolog belgilaydi.
- **Excimer lazer** — terida va tirnoq atrofidagi kichik psoriaz o‘choqlariga nuqtali ta’sir.
- **Podologik parvarish** — qalinlashgan tirnoqni apparat bilan tozalash, ajralgan qismni ehtiyotkorlik bilan qisqartirish: tirnoq tekislanadi va dori yaxshiroq ta’sir qiladi.

## Natija qachon ko‘rinadi?

Tirnoq sekin o‘sadi: qo‘l tirnog‘i **4–6 oyda**, oyoq tirnog‘i **12–18 oyda** to‘liq yangilanadi. Shuning uchun natija yangi o‘sayotgan sog‘lom qismda ko‘rinadi va davolash kamida bir necha oy davom etadi. Bir oyda o‘zgarish ko‘rinmasa, davolashni tashlab qo‘ymang.

## Uyda tirnoqlarni asrash

- tirnoqlarni qisqa kesing, ajralgan qism ostiga hech narsa tiqmang;
- uy ishlarida qo‘lqop kiying, tirnoq atrofini jarohatlamang — jarohat yangi psoriaz o‘chog‘ini qo‘zg‘atadi;
- sun’iy tirnoq va qattiq manikyurdan saqlaning;
- tirnoq va kutikulaga namlovchi krem surting.

Psoriazning o‘zi haqida: [Psoriaz: tashxis va davolash](/uz/articles/art-psoriaz-tashxis-davolash-radeski). Qabul: [Psoriaz davolash Farg‘onada](/uz/fargona/psoriaz-davolash), [Psoriaz davolash Qo‘qonda](/uz/qoqon/psoriaz-davolash), [Podolog Farg‘onada](/uz/fargona/podolog).

*Ushbu maqola umumiy ma’lumot uchun. Tashxis va davolashni faqat shifokor belgilaydi.*`;
}

function ruBody(): string {
  return `Псориаз поражает не только кожу, но и ногти: со временем изменения ногтей появляются больше чем у половины людей с псориазом. Псориаз ногтей часто **принимают за грибок** и месяцами лечат неправильно. Разберём признаки, отличие от грибка и способы лечения.

## Признаки

- **Точечные вдавления** — мелкие ямки на поверхности ногтя, как от укола иглой. Самый характерный признак.
- **«Масляное пятно»** — желтовато-красное пятно под ногтем, будто капнули масло.
- **Онихолизис** — ноготь отслаивается от ложа, начиная с края; под ним белеет воздушная полость.
- **Подногтевой гиперкератоз** — под ногтем скапливается желтоватая масса, ноготь приподнимается.
- **Поперечные борозды, ломкость, крошение.**
- Покраснение и шелушение вокруг ногтя.

Чаще страдают ногти рук, изменения обычно сразу на нескольких ногтях.

## Как отличить от грибка?

| Признак | Псориаз ногтей | Грибок ногтей |
|---|---|---|
| Точечные вдавления | Часто | Почти не бывает |
| «Масляное пятно» | Характерно | Не бывает |
| Какие ногти чаще | Ногти рук | Ногти ног, особенно большой палец |
| Псориаз на коже | Часто есть | Может не быть |
| Анализ | Грибка нет | Грибок найден |

Важно: они могут быть **одновременно** — ногти при псориазе легче поражает грибок. Поэтому перед лечением берут **анализ ногтя на грибок**. Подробнее: [Грибок ногтей](/ru/articles/art-tirnoq-zamburugi).

## Почему это важно: суставы

Псориаз ногтей часто сочетается с **псориатическим артритом**. Если отекают суставы пальцев, по утрам скованность, болят пятки или поясница — обязательно скажите врачу: от этого зависит план лечения.

## Как лечат?

- **Местное лечение** — препараты для нанесения на ноготь и околоногтевую зону. Основной метод при лёгком поражении.
- **Инъекции в околоногтевую зону** — при сильном поражении нескольких ногтей, по решению врача.
- **Системное лечение** — при поражении многих ногтей, распространённом псориазе кожи или артрите. Препарат и контрольные анализы назначает дерматолог.
- **Эксимерный лазер** — точечное воздействие на небольшие очаги псориаза на коже и вокруг ногтей.
- **Подологический уход** — аппаратная обработка утолщённого ногтя, аккуратное укорачивание отслоившейся части: ноготь выравнивается, и препараты действуют лучше.

## Когда виден результат?

Ногти растут медленно: ноготь руки обновляется полностью за **4–6 месяцев**, ноготь ноги — за **12–18 месяцев**. Поэтому результат виден по отрастающей здоровой части, а лечение длится минимум несколько месяцев. Не бросайте лечение, если за месяц изменений не видно.

## Как беречь ногти дома

- коротко стригите ногти, ничего не подсовывайте под отслоившуюся часть;
- в домашних делах надевайте перчатки, не травмируйте околоногтевую зону — травма провоцирует новые очаги;
- избегайте искусственных ногтей и жёсткого маникюра;
- наносите увлажняющий крем на ногти и кутикулу.

О самом псориазе: [Псориаз: диагностика и лечение](/ru/articles/art-psoriaz-tashxis-davolash-radeski). Приём: [Лечение псориаза в Фергане](/ru/fargona/psoriaz-davolash), [Лечение псориаза в Коканде](/ru/qoqon/psoriaz-davolash), [Подолог в Фергане](/ru/fargona/podolog).

*Статья носит информационный характер. Диагноз и лечение назначает только врач.*`;
}

function enBody(): string {
  return `Psoriasis affects the nails as well as the skin: over time more than half of people with psoriasis develop nail changes. Nail psoriasis is often **mistaken for fungus** and treated wrongly for months. Here are the signs, how it differs from fungus and how it is treated.

## Signs

- **Pitting**: tiny dents on the nail surface, as if pricked with a needle. The most typical sign.
- **“Oil drop” spots**: a yellow-red patch under the nail, as if oil had dripped there.
- **Onycholysis**: the nail lifts off its bed from the tip, and the air gap underneath looks white.
- **Subungual thickening**: yellowish debris builds up under the nail and lifts it.
- **Ridges, brittleness and crumbling.**
- Redness and scaling around the nail.

Fingernails are affected more often, and usually several nails at once.

## How is it different from fungus?

| Sign | Nail psoriasis | Nail fungus |
|---|---|---|
| Pitting | Common | Almost never |
| “Oil drop” | Typical | Absent |
| Nails most affected | Fingernails | Toenails, especially the big toe |
| Psoriasis on the skin | Often present | May be absent |
| Test | No fungus | Fungus found |

Important: the two can **coexist**, because psoriatic nails catch fungus more easily. That is why a **nail fungal test** comes before treatment. More: [Nail fungus](/en/articles/art-tirnoq-zamburugi).

## Why it matters: the joints

Nail psoriasis often goes together with **psoriatic arthritis**. If finger joints swell, feel stiff in the morning, or your heels or lower back hurt, tell the doctor: it changes the treatment plan.

## How is it treated?

- **Topical treatment** applied to the nail and the skin around it. The main option for mild disease.
- **Injections around the nail** for severe involvement of a few nails, at the doctor’s decision.
- **Systemic treatment** when many nails are affected, skin psoriasis is widespread or there is arthritis. The dermatologist chooses the medicine and the monitoring tests.
- **Excimer laser** for targeted treatment of small psoriasis patches on the skin and around the nails.
- **Podiatry care**: device thinning of thickened nails and careful trimming of the lifted part, so the nail is flatter and medicines work better.

## When will I see results?

Nails grow slowly: a fingernail renews fully in **4–6 months**, a toenail in **12–18 months**. Results show in the healthy new growth, and treatment lasts at least several months. Do not stop because nothing changes in the first month.

## Protecting nails at home

- keep nails short and do not push anything under the lifted part;
- wear gloves for housework and avoid injuring the skin around the nail, since injury triggers new patches;
- avoid artificial nails and harsh manicures;
- moisturise the nails and cuticles.

About psoriasis itself: [Psoriasis: diagnosis and treatment](/en/articles/art-psoriaz-tashxis-davolash-radeski). Book a visit: [Psoriasis treatment in Fergana](/en/fargona/psoriaz-davolash), [Psoriasis treatment in Kokand](/en/qoqon/psoriaz-davolash), [Podiatrist in Fergana](/en/fargona/podolog).

*This article is for general information. Only a doctor can make a diagnosis and prescribe treatment.*`;
}

export const NAIL_PSORIASIS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Tirnoq psoriazi: nuqtali chuqurchalar, “moy tomchisi”, tirnoq ajralishi va qalinlashishi. Zamburug‘dan farqi, psoriatik artrit bilan bog‘liqligi, davolash usullari va natija nega sekin ko‘rinadi.',
    body: uzBody(),
    keyTakeaways: [
      'Psoriazi bor odamlarning yarmidan ko‘pida tirnoq o‘zgarishlari bo‘ladi',
      'Nuqtali chuqurchalar va “moy tomchisi” — psoriazning xos belgilari',
      'Tirnoq psoriazi va zamburug‘ birga bo‘lishi mumkin — avval tahlil olinadi',
      'Bo‘g‘im og‘rig‘i bo‘lsa, shifokorga ayting: psoriatik artrit bo‘lishi mumkin',
      'Qo‘l tirnog‘i 4–6 oyda, oyoq tirnog‘i 12–18 oyda yangilanadi',
    ],
    tags: ['Tirnoq psoriazi', 'Psoriaz', 'Onixoliz', 'Tirnoq kasalliklari', 'Psoriatik artrit', 'Podolog', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Bir nechta tirnoqda chuqurcha yoki ajralish paydo bo‘lsa',
      'Zamburug‘ga qarshi davolash yordam bermasa',
      'Barmoq bo‘g‘imlari shishsa yoki og‘risa',
      'Tirnoq atrofi qizarib yiringlasa',
    ],
    faq: [
      {
        question: 'Tirnoq psoriazini zamburug‘dan qanday farqlash mumkin?',
        answer:
          'Psoriazda nuqtali chuqurchalar va “moy tomchisi” dog‘i xos, ko‘proq qo‘l tirnoqlari zararlanadi. Zamburug‘ ko‘pincha oyoq bosh barmog‘idan boshlanadi. Aniq javobni tirnoqdan olingan zamburug‘ tahlili beradi.',
      },
      {
        question: 'Tirnoq psoriazi davolanadimi?',
        answer:
          'Ha, ko‘p hollarda tirnoqlar sezilarli yaxshilanadi. Lekin bu uzoq jarayon: natija yangi o‘sayotgan tirnoqda bir necha oyda ko‘rinadi. Usul zararlanish darajasi va terida, bo‘g‘imlarda psoriaz borligiga qarab tanlanadi.',
      },
      {
        question: 'Lak yoki sun’iy tirnoq qo‘ysa bo‘ladimi?',
        answer:
          'Oddiy lak tirnoqni vaqtincha yashirishi mumkin, lekin sun’iy tirnoq, gel va qattiq manikyur tirnoqni jarohatlab, holatni og‘irlashtiradi. Tirnoqni qisqa va ehtiyotkor parvarish qilish yaxshiroq.',
      },
      {
        question: 'Tirnoq psoriazi bo‘g‘imlarga ta’sir qiladimi?',
        answer:
          'Tirnoq psoriazi bor odamlarda psoriatik artrit ko‘proq uchraydi. Barmoq bo‘g‘imlari shishsa, ertalab qotib qolsa yoki tovon og‘risa, shifokorga ayting — davolash shunga qarab o‘zgaradi.',
      },
    ],
  },
  ru: {
    summary:
      'Псориаз ногтей: точечные вдавления, «масляное пятно», отслойка и утолщение ногтя. Отличие от грибка, связь с псориатическим артритом, методы лечения и почему результат виден медленно.',
    body: ruBody(),
    keyTakeaways: [
      'У большинства людей с псориазом со временем меняются ногти',
      'Точечные вдавления и «масляное пятно» — характерные признаки псориаза',
      'Псориаз и грибок ногтей могут быть одновременно — сначала делают анализ',
      'Боль в суставах — повод сказать врачу: возможен псориатический артрит',
      'Ноготь руки обновляется за 4–6 месяцев, ноги — за 12–18',
    ],
    tags: ['Псориаз ногтей', 'Псориаз', 'Онихолизис', 'Болезни ногтей', 'Псориатический артрит', 'Подолог', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Ямки или отслойка появились на нескольких ногтях',
      'Противогрибковое лечение не помогает',
      'Отекают или болят суставы пальцев',
      'Кожа вокруг ногтя покраснела и гноится',
    ],
    faq: [
      {
        question: 'Как отличить псориаз ногтей от грибка?',
        answer:
          'Для псориаза характерны точечные вдавления и «масляное пятно», чаще страдают ногти рук. Грибок обычно начинается с большого пальца ноги. Точный ответ даёт анализ ногтя на грибок.',
      },
      {
        question: 'Лечится ли псориаз ногтей?',
        answer:
          'Да, в большинстве случаев ногти заметно улучшаются. Но это долгий процесс: результат виден по отрастающему ногтю через несколько месяцев. Метод подбирают по степени поражения и наличию псориаза кожи и суставов.',
      },
      {
        question: 'Можно ли покрывать ногти лаком или наращивать?',
        answer:
          'Обычный лак может временно скрыть изменения, но наращивание, гель и жёсткий маникюр травмируют ноготь и ухудшают состояние. Лучше коротко и бережно ухаживать за ногтями.',
      },
      {
        question: 'Влияет ли псориаз ногтей на суставы?',
        answer:
          'У людей с псориазом ногтей чаще бывает псориатический артрит. Если отекают суставы пальцев, есть утренняя скованность или болят пятки, скажите врачу — от этого зависит лечение.',
      },
    ],
  },
  en: {
    summary:
      'Nail psoriasis: pitting, “oil drop” spots, nail lifting and thickening. How it differs from fungus, the link with psoriatic arthritis, treatment options and why results take months.',
    body: enBody(),
    keyTakeaways: [
      'Most people with psoriasis develop nail changes over time',
      'Pitting and “oil drop” spots are typical of psoriasis',
      'Nail psoriasis and fungus can coexist, so a test comes first',
      'Joint pain should be reported: it may be psoriatic arthritis',
      'A fingernail renews in 4–6 months, a toenail in 12–18',
    ],
    tags: ['Nail psoriasis', 'Psoriasis', 'Onycholysis', 'Nail disease', 'Psoriatic arthritis', 'Podiatrist', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Pits or lifting appear on several nails',
      'Antifungal treatment has not helped',
      'Finger joints swell or hurt',
      'The skin around a nail is red and oozing pus',
    ],
    faq: [
      {
        question: 'How can I tell nail psoriasis from fungus?',
        answer:
          'Psoriasis typically causes pitting and “oil drop” spots and mostly affects fingernails. Fungus usually starts on the big toenail. A nail fungal test gives the definite answer.',
      },
      {
        question: 'Can nail psoriasis be treated?',
        answer:
          'Yes, in most cases the nails improve markedly. It takes time: results show in the new nail growth after several months. The method depends on how severe it is and whether the skin and joints are involved.',
      },
      {
        question: 'Can I wear nail polish or artificial nails?',
        answer:
          'Ordinary polish can hide the changes for a while, but artificial nails, gel and harsh manicures injure the nail and make it worse. Short, gentle nail care is better.',
      },
      {
        question: 'Does nail psoriasis affect the joints?',
        answer:
          'Psoriatic arthritis is more common in people with nail psoriasis. If finger joints swell, feel stiff in the morning or your heels hurt, tell the doctor, as it changes the treatment.',
      },
    ],
  },
};

export const NAIL_PSORIASIS_ARTICLE: Article = {
  id: 'art-tirnoq-psoriazi',
  slug: 'tirnoq-psoriazi',
  title: {
    uz: 'Tirnoq psoriazi: belgilari, zamburug‘dan farqi va davolash',
    ru: 'Псориаз ногтей: признаки, отличие от грибка и лечение',
    en: 'Nail Psoriasis: Signs, How It Differs From Fungus, Treatment',
  },
  summary: {
    uz: NAIL_PSORIASIS_ARTICLE_CATALOG.uz.summary,
    ru: NAIL_PSORIASIS_ARTICLE_CATALOG.ru.summary,
    en: NAIL_PSORIASIS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: NAIL_PSORIASIS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: NAIL_PSORIASIS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: NAIL_PSORIASIS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Usmanova Mohinabonu Anvarovna',
    ru: 'Усманова Мохинабону Анваровна',
    en: 'Mohinabonu Anvarovna Usmanova',
  },
  date: '2026-12-21',
  image: COVER.uz,
  images: COVER,
  views: 0,
};
