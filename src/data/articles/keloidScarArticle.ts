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
 * Keloid vs hypertrophic scar: how they differ, who gets them, why simply cutting a keloid out
 * makes it come back bigger, and the combined treatment the clinic offers (price list: scar
 * cryodestruction, Derma V and Hollywood Spectra scar laser, scar excision, Rejuran S).
 * Links to the acne-scar and CO2 resurfacing articles for atrophic scars.
 */

const COVER = {
  uz: '/articles/keloid-chandiq-cover-uz.jpg',
  ru: '/articles/keloid-chandiq-cover-ru.jpg',
  en: '/articles/keloid-chandiq-cover-en.jpg',
};

function uzBody(): string {
  return `Ba’zi odamlarda kichik jarohat, operatsiya, quloq teshish yoki husnbuzar o‘rnida terining yuzasidan ko‘tarilgan qalin, qizg‘ish chandiq paydo bo‘ladi. Bu **gipertrofik chandiq** yoki **keloid** bo‘lishi mumkin. Ular bir-biriga o‘xshaydi, lekin turlicha davolanadi — ayniqsa keloidni oddiy kesib tashlash ko‘pincha uni kattaroq qilib qaytaradi.

## Gipertrofik chandiq va keloid farqi

| Belgi | Gipertrofik chandiq | Keloid |
|---|---|---|
| Chegarasi | Jarohat chegarasidan chiqmaydi | Jarohatdan tashqariga, sog‘lom teriga o‘sadi |
| Paydo bo‘lishi | Jarohatdan keyin 1–2 oyda | Oylar va hatto yillar o‘tib ham |
| Vaqt bilan | Ko‘pincha 1–2 yilda yassilanadi | O‘z-o‘zidan kamaymaydi, o‘sishi mumkin |
| Kesib tashlangandan keyin | Kam qaytadi | Ko‘pincha qaytadi va kattalashadi |

Ikkalasi ham qichishi, tortishishi va og‘rishi mumkin.

## Kimda ko‘proq uchraydi?

- oilada keloid bo‘lganlar;
- 10–30 yoshdagilar va homiladorlik davrida;
- to‘q rangli teri egalari;
- **ko‘krak, yelka, kurak, quloq solinchagi, jag‘ chizig‘i** — teri tarang yoki ko‘p harakatlanadigan joylar;
- jarohat yallig‘lansa, uzoq bitsa yoki chok tarang bo‘lsa.

## Qanday davolanadi?

Bitta “sehrli” usul yo‘q: chandiq turi, yoshi, joyi va hajmiga qarab **bir necha usul birga** qo‘llaniladi. Radeski Skin Clinic’da quyidagilar bor:

- **Chandiq ichiga in’eksiya** — yallig‘lanish va o‘sishni to‘xtatadi, chandiqni yassilaydi. Odatda bir necha muolaja 3–6 hafta oralig‘ida.
- **Kriodestruksiya** — chandiqni sovuq bilan muzlatish, ayniqsa ichki fokusli usul keloid hajmini kamaytiradi.
- **Lazer** — Derma V qon tomir lazeri chandiqdagi qizarishni kamaytiradi; Hollywood Spectra va fraksion lazerlar chandiq relyefi va rangini tekislaydi.
- **Jarrohlik yo‘li bilan kesib olish** — gipertrofik chandiqda yoki keloidda **faqat** keyingi profilaktika (in’eksiya, bosim, silikon) bilan birga: yolg‘iz kesish keloidni qaytaradi.
- **Rejuran S** — chandiq to‘qimasini tiklashga yordam beruvchi in’eksion preparat, ko‘pincha lazer bilan birga.
- **Silikon gel yoki plastir va bosimli bog‘lam** — uy sharoitida, oylar davomida, ayniqsa yangi chandiqlarda.

Davolashning maqsadi — chandiqni yassi, och rangli va bezovta qilmaydigan holga keltirish. Uni butunlay yo‘qotish har doim ham mumkin emas — buni shifokor ko‘rikda ochiq aytadi.

## Profilaktika: yangi jarohatda nima qilish

- jarohatni toza saqlang, yallig‘lanishga yo‘l qo‘ymang;
- chok olingandan keyin 2–3 oy silikon gel yoki plastir;
- 6–12 oy chandiqni quyoshdan himoya qiling;
- keloidga moyil bo‘lsangiz, quloq teshish, tatuirovka va kosmetik operatsiyadan oldin shifokor bilan maslahatlashing.

## Botiq chandiqlar haqida

Husnbuzardan keyingi chuqurcha (atrofik) chandiqlar — boshqa holat, ular lazer shlifovkasi bilan tekislanadi: [Postakne](/uz/articles/art-postakne), [DEKA CO₂ lazer bilan chandiqlarni tuzatish](/uz/articles/art-deka-co2-chandiqlar-radeski).

Chandiq bo‘yicha konsultatsiya: [Dermatolog Farg‘onada](/uz/fargona/dermatolog), [Dermatolog Qo‘qonda](/uz/qoqon/dermatolog).

*Ushbu maqola umumiy ma’lumot uchun. Davolash usuli shifokor ko‘rigidan keyin tanlanadi.*`;
}

function ruBody(): string {
  return `У некоторых людей на месте небольшой травмы, операции, прокола уха или прыща появляется плотный красноватый рубец, возвышающийся над кожей. Это может быть **гипертрофический рубец** или **келоид**. Они похожи, но лечатся по-разному — особенно келоид, который после простого иссечения часто возвращается ещё больше.

## Чем гипертрофический рубец отличается от келоида

| Признак | Гипертрофический рубец | Келоид |
|---|---|---|
| Границы | Не выходит за пределы раны | Разрастается за пределы раны, на здоровую кожу |
| Появление | Через 1–2 месяца после травмы | Через месяцы и даже годы |
| Со временем | Часто уплощается за 1–2 года | Сам не уменьшается, может расти |
| После иссечения | Возвращается редко | Часто возвращается и увеличивается |

Оба могут зудеть, стягивать и болеть.

## У кого бывает чаще?

- при келоидах у родственников;
- в 10–30 лет и во время беременности;
- у людей со смуглой кожей;
- на **груди, плечах, лопатках, мочках ушей, линии челюсти** — там, где кожа натянута или много двигается;
- если рана воспалялась, долго заживала или шов был натянут.

## Как лечат?

Одного «волшебного» метода нет: в зависимости от типа, давности, расположения и размера рубца **методы сочетают**. В Radeski Skin Clinic есть:

- **Инъекции в рубец** — останавливают воспаление и рост, уплощают рубец. Обычно несколько процедур с интервалом 3–6 недель.
- **Криодеструкция** — замораживание рубца; особенно внутриочаговый метод уменьшает объём келоида.
- **Лазер** — сосудистый лазер Derma V убирает покраснение рубца; Hollywood Spectra и фракционные лазеры выравнивают рельеф и цвет.
- **Хирургическое иссечение** — при гипертрофическом рубце, а при келоиде **только** вместе с последующей профилактикой (инъекции, давление, силикон): одно иссечение келоид возвращает.
- **Rejuran S** — инъекционный препарат, помогающий восстановлению рубцовой ткани, часто в сочетании с лазером.
- **Силиконовый гель или пластырь и компрессия** — дома, месяцами, особенно для свежих рубцов.

Цель лечения — сделать рубец плоским, светлым и не беспокоящим. Убрать его полностью удаётся не всегда — врач честно скажет об этом на приёме.

## Профилактика: что делать со свежей раной

- держите рану в чистоте, не допускайте воспаления;
- после снятия швов 2–3 месяца — силиконовый гель или пластырь;
- 6–12 месяцев защищайте рубец от солнца;
- при склонности к келоидам посоветуйтесь с врачом перед проколом ушей, татуировкой и косметической операцией.

## О впалых рубцах

Впалые (атрофические) рубцы после акне — другое состояние, их выравнивают лазерной шлифовкой: [Постакне](/ru/articles/art-postakne), [Коррекция рубцов лазером DEKA CO₂](/ru/articles/art-deka-co2-chandiqlar-radeski).

Консультация по рубцам: [Дерматолог в Фергане](/ru/fargona/dermatolog), [Дерматолог в Коканде](/ru/qoqon/dermatolog).

*Статья носит информационный характер. Метод лечения подбирается после осмотра врача.*`;
}

function enBody(): string {
  return `In some people a small injury, surgery, ear piercing or spot leaves a thick, reddish scar raised above the skin. It may be a **hypertrophic scar** or a **keloid**. They look alike but are treated differently, especially keloids, which often come back bigger after being simply cut out.

## Hypertrophic scar vs keloid

| Feature | Hypertrophic scar | Keloid |
|---|---|---|
| Borders | Stays within the wound | Grows beyond the wound onto healthy skin |
| Onset | 1–2 months after the injury | Months or even years later |
| Over time | Often flattens within 1–2 years | Does not shrink on its own and may grow |
| After excision | Rarely returns | Often returns, larger |

Both can itch, pull and hurt.

## Who gets them more often?

- people with keloids in the family;
- ages 10–30 and during pregnancy;
- people with darker skin;
- the **chest, shoulders, upper back, earlobes and jawline**, where skin is tight or moves a lot;
- wounds that became inflamed, healed slowly or were closed under tension.

## How are they treated?

There is no single magic method: depending on the scar’s type, age, location and size, **several methods are combined**. Radeski Skin Clinic offers:

- **Injections into the scar**, which stop inflammation and growth and flatten it. Usually several treatments 3–6 weeks apart.
- **Cryotherapy**: freezing the scar; intralesional cryotherapy in particular reduces keloid volume.
- **Laser**: the Derma V vascular laser reduces redness, and Hollywood Spectra and fractional lasers even out texture and colour.
- **Surgical excision** for hypertrophic scars, and for keloids **only** with follow-up prevention (injections, pressure, silicone): excision alone brings a keloid back.
- **Rejuran S**, an injectable that supports scar tissue repair, often combined with laser.
- **Silicone gel or sheets and pressure dressings** at home for months, especially for new scars.

The aim is a flat, pale scar that does not bother you. Removing it completely is not always possible, and the doctor will say so honestly.

## Prevention: caring for a new wound

- keep the wound clean and avoid infection;
- after stitches come out, use silicone gel or sheets for 2–3 months;
- protect the scar from the sun for 6–12 months;
- if you are prone to keloids, talk to a doctor before ear piercing, tattoos or cosmetic surgery.

## About sunken scars

Pitted (atrophic) acne scars are a different problem, treated with laser resurfacing: [Post-acne](/en/articles/art-postakne), [Scar correction with DEKA CO₂ laser](/en/articles/art-deka-co2-chandiqlar-radeski).

Scar consultation: [Dermatologist in Fergana](/en/fargona/dermatolog), [Dermatologist in Kokand](/en/qoqon/dermatolog).

*This article is for general information. The treatment is chosen after a doctor’s examination.*`;
}

export const KELOID_SCAR_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Keloid va gipertrofik chandiq: farqi, kimda ko‘proq uchraydi, nega keloidni oddiy kesib tashlash mumkin emas. In’eksiya, kriodestruksiya, lazer, jarrohlik va silikon bilan kompleks davolash, profilaktika.',
    body: uzBody(),
    keyTakeaways: [
      'Keloid jarohat chegarasidan chiqib o‘sadi, gipertrofik chandiq chiqmaydi',
      'Keloidni yolg‘iz kesib tashlash ko‘pincha uni kattaroq qilib qaytaradi',
      'Davolash bir necha usul birga: in’eksiya, kriodestruksiya, lazer, silikon',
      'Yangi chandiqqa 2–3 oy silikon va 6–12 oy quyoshdan himoya kerak',
      'Keloidga moyil bo‘lsangiz, quloq teshish va operatsiyadan oldin shifokor bilan maslahatlashing',
    ],
    tags: ['Keloid', 'Gipertrofik chandiq', 'Chandiq davolash', 'Kriodestruksiya', 'Lazer', 'Derma V', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Chandiq jarohat chegarasidan chiqib o‘sayotgan bo‘lsa',
      'Chandiq qichisa, og‘risa yoki harakatni cheklasa',
      'Avval kesib olingan chandiq qaytgan bo‘lsa',
      'Chandiq joyida yara yoki tez o‘zgarish paydo bo‘lsa',
    ],
    faq: [
      {
        question: 'Keloidni kesib tashlasa bo‘ladimi?',
        answer:
          'Yolg‘iz kesish tavsiya etilmaydi: keloid ko‘pincha qaytadi va kattalashadi. Jarrohlik faqat keyingi profilaktika — chandiq ichiga in’eksiya, bosim yoki silikon — bilan birga rejalashtiriladi.',
      },
      {
        question: 'Keloid o‘z-o‘zidan yo‘qoladimi?',
        answer:
          'Yo‘q, keloid odatda o‘zi kamaymaydi. Gipertrofik chandiq esa 1–2 yilda yassilanishi mumkin. Ikkalasini ham davolash bilan yassi va och rangli qilish mumkin.',
      },
      {
        question: 'Chandiqni davolash necha muolaja oladi?',
        answer:
          'Chandiq turi va hajmiga bog‘liq. In’eksiyalar odatda bir necha marta 3–6 hafta oralig‘ida, lazer kursi ham bir necha seans. Aniq rejani shifokor ko‘rikdan keyin tuzadi.',
      },
      {
        question: 'Yangi chandiq keloidga aylanmasligi uchun nima qilish kerak?',
        answer:
          'Jarohatni toza saqlash, chok olingach 2–3 oy silikon gel yoki plastir, 6–12 oy quyoshdan himoya. Chandiq qalinlasha boshlasa, erta shifokorga ko‘rsating — yangi keloid osonroq davolanadi.',
      },
    ],
  },
  ru: {
    summary:
      'Келоид и гипертрофический рубец: чем отличаются, у кого бывают чаще, почему келоид нельзя просто иссечь. Комплексное лечение — инъекции, криодеструкция, лазер, хирургия и силикон, профилактика.',
    body: ruBody(),
    keyTakeaways: [
      'Келоид выходит за пределы раны, гипертрофический рубец — нет',
      'Одно иссечение келоида часто возвращает его ещё больше',
      'Лечение комбинированное: инъекции, криодеструкция, лазер, силикон',
      'Свежему рубцу нужны 2–3 месяца силикона и 6–12 месяцев защиты от солнца',
      'При склонности к келоидам посоветуйтесь с врачом перед проколом ушей и операцией',
    ],
    tags: ['Келоид', 'Гипертрофический рубец', 'Лечение рубцов', 'Криодеструкция', 'Лазер', 'Derma V', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Рубец разрастается за пределы раны',
      'Рубец зудит, болит или ограничивает движение',
      'Удалённый ранее рубец вернулся',
      'На рубце появилась язва или быстрые изменения',
    ],
    faq: [
      {
        question: 'Можно ли вырезать келоид?',
        answer:
          'Одно иссечение не рекомендуется: келоид часто возвращается и увеличивается. Операцию планируют только вместе с последующей профилактикой — инъекциями в рубец, давлением или силиконом.',
      },
      {
        question: 'Проходит ли келоид сам?',
        answer:
          'Нет, келоид обычно сам не уменьшается. Гипертрофический рубец может уплощиться за 1–2 года. Оба можно сделать плоскими и светлыми с помощью лечения.',
      },
      {
        question: 'Сколько процедур нужно для лечения рубца?',
        answer:
          'Зависит от типа и размера рубца. Инъекции обычно делают несколько раз с интервалом 3–6 недель, лазерный курс — тоже несколько сеансов. Точный план врач составит после осмотра.',
      },
      {
        question: 'Как не допустить келоида на свежем рубце?',
        answer:
          'Держать рану в чистоте, после снятия швов 2–3 месяца использовать силиконовый гель или пластырь, 6–12 месяцев защищать от солнца. Если рубец начал уплотняться, покажите его врачу рано — свежий келоид лечится легче.',
      },
    ],
  },
  en: {
    summary:
      'Keloid vs hypertrophic scar: the difference, who gets them, why a keloid should not simply be cut out. Combined treatment with injections, cryotherapy, laser, surgery and silicone, plus prevention.',
    body: enBody(),
    keyTakeaways: [
      'A keloid grows beyond the wound; a hypertrophic scar does not',
      'Cutting out a keloid alone often brings it back bigger',
      'Treatment combines injections, cryotherapy, laser and silicone',
      'A new scar needs 2–3 months of silicone and 6–12 months of sun protection',
      'If you are keloid-prone, talk to a doctor before piercing or surgery',
    ],
    tags: ['Keloid', 'Hypertrophic scar', 'Scar treatment', 'Cryotherapy', 'Laser', 'Derma V', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'The scar is growing beyond the wound',
      'It itches, hurts or limits movement',
      'A previously removed scar has come back',
      'A sore or rapid change appears on the scar',
    ],
    faq: [
      {
        question: 'Can a keloid be cut out?',
        answer:
          'Excision alone is not recommended: the keloid often returns larger. Surgery is planned only together with follow-up prevention such as injections into the scar, pressure or silicone.',
      },
      {
        question: 'Does a keloid go away by itself?',
        answer:
          'No, a keloid usually does not shrink on its own. A hypertrophic scar can flatten in 1–2 years. Both can be made flatter and paler with treatment.',
      },
      {
        question: 'How many treatments does a scar need?',
        answer:
          'It depends on the scar’s type and size. Injections are usually repeated several times 3–6 weeks apart, and a laser course is several sessions too. The doctor sets the exact plan after the exam.',
      },
      {
        question: 'How do I stop a new scar becoming a keloid?',
        answer:
          'Keep the wound clean, use silicone gel or sheets for 2–3 months after stitches come out and protect it from the sun for 6–12 months. If the scar starts to thicken, show it to a doctor early: a new keloid is easier to treat.',
      },
    ],
  },
};

export const KELOID_SCAR_ARTICLE: Article = {
  id: 'art-keloid-chandiq',
  slug: 'keloid-chandiq',
  title: {
    uz: 'Keloid va gipertrofik chandiq: farqi va qanday davolanadi',
    ru: 'Келоидный и гипертрофический рубец: отличия и лечение',
    en: 'Keloid and Hypertrophic Scars: Differences and Treatment',
  },
  summary: {
    uz: KELOID_SCAR_ARTICLE_CATALOG.uz.summary,
    ru: KELOID_SCAR_ARTICLE_CATALOG.ru.summary,
    en: KELOID_SCAR_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: KELOID_SCAR_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: KELOID_SCAR_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: KELOID_SCAR_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: "Yo'qubov Farrux Farhodjonovich",
    ru: 'Якубов Фаррух Фарходжонович',
    en: 'Dr. Farrukh Farhodjonovich Yoqubov',
  },
  date: '2026-12-18',
  image: COVER.uz,
  images: COVER,
  views: 0,
};
