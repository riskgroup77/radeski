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
 * After a hair transplant: a timeline from the first day to month 12 — what is normal (crusts,
 * shedding, the "ugly duckling" phase), what to avoid and when to call the clinic. The surgeon's
 * written instructions always come first; time frames are typical ranges, not a protocol.
 * Clinic facts: follow-up for 6–12 months (published FUE cases), the aftercare video.
 */

const COVER = {
  uz: '/articles/soch-ekishdan-keyin-cover-uz.jpg',
  ru: '/articles/soch-ekishdan-keyin-cover-ru.jpg',
  en: '/articles/soch-ekishdan-keyin-cover-en.jpg',
};

function uzBody(): string {
  return `Soch ekishning natijasi faqat operatsiyaga emas, keyingi haftalardagi parvarishga ham bog‘liq. Ekilgan graftlar birinchi kunlarda juda nozik bo‘ladi, keyin esa bir necha oy davomida bemorni tashvishga soladigan, lekin normal bosqichlar keladi. Quyida odatiy vaqt jadvali keltirilgan. **Eng muhim qoida:** sizni operatsiya qilgan shifokorning yozma ko‘rsatmalari har doim ustun turadi — muddatlar har bir bemorda biroz farq qilishi mumkin.

## Birinchi 3 kun

- Ekilgan zonaga **tegmang, ishqalamang va tirnamang**.
- Uxlaganda boshni biroz baland qo‘ying — bu shishni kamaytiradi. Peshona va ko‘z atrofida yengil shish bo‘lishi mumkin, u odatda bir necha kunda o‘tadi.
- Engashish, og‘ir ko‘tarish va jismoniy yuklamadan saqlaning.
- Shifokor buyurgan dorilarni ko‘rsatilgan tartibda qabul qiling; o‘zingizcha dori qo‘shmang.

## 4–14 kun: yuvish va qobiqchalar

- Birinchi yuvish vaqti va usulini shifokor aytadi — odatda yumshoq, ishqalamasdan, maxsus vosita bilan.
- Graftlar atrofida mayda **qobiqchalar** paydo bo‘ladi. Ular odatda 1–2 hafta ichida o‘zi tushadi — ularni **yulib olmang**.
- Yengil qichishish bo‘lishi normal; tirnamang, shifokordan nima qilish mumkinligini so‘rang.
- Bosh kiyimni faqat shifokor ruxsat bergandan keyin va keng, siqmaydiganini kiying.

## 2–8 hafta: «shok to‘kilish»

Bu bosqich ko‘pchilikni qo‘rqitadi: **ekilgan sochlar to‘kila boshlaydi**. Bu normal — soch tolasi tushadi, follikula esa terida qoladi va yangi sikl boshlaydi. Ba’zan donor zona yoki atrofdagi o‘z sochlaringiz ham vaqtincha siyraklashishi mumkin.

## 3–4 oy: yangi soch

Yangi sochlar o‘sa boshlaydi — avval ingichka va siyrak. Bu bosqichda natijani baholash hali erta.

## 6–12 oy: yakuniy natija

Sochlar qalinlashadi, zichlik oshadi. Yakuniy natija odatda **9–12 oyda** shakllanadi. Radeski’da operatsiyadan keyin **6–12 oy** davomida nazorat ko‘riklari o‘tkaziladi.

## Birinchi haftalarda nimalardan saqlanish kerak

- **Sauna, hammom, basseyn va dengiz** — shifokor ruxsat berguncha.
- **Faol sport va ko‘p terlash** — odatda bir necha hafta.
- **Quyosh** — ekilgan zonani to‘g‘ridan-to‘g‘ri quyoshdan saqlang.
- **Chekish va alkogol** — qon aylanishini yomonlashtiradi va bitishga xalaqit beradi.
- **Soch bo‘yash va kimyoviy vositalar** — shifokor bilan kelishmaguncha.

## Mavjud sochlarni ham davolash kerak

Ekilgan sochlar androgenetik to‘kilishga chidamli, lekin atrofdagi **o‘z sochlaringiz** to‘kilishda davom etishi mumkin. Shuning uchun shifokor operatsiyadan keyin trixologik davolashni (masalan, PRP-terapiya) tavsiya qilishi mumkin.

Batafsil: [Soch ekish FUE va DHI usulida](/uz/articles/art-soch-ekish-fue-dhi), [Soch ekish Farg‘onada](/uz/fargona/soch-ekish), [PRP-terapiya sochlar uchun](/uz/articles/art-plazmotorapiya-soch-prp).`;
}

function ruBody(): string {
  return `Результат пересадки волос зависит не только от операции, но и от ухода в следующие недели. В первые дни графты очень уязвимы, а затем несколько месяцев идут этапы, которые пугают пациентов, но являются нормой. Ниже — типичный график. **Главное правило:** письменные рекомендации хирурга, который вас оперировал, всегда важнее — сроки у разных пациентов немного различаются.

## Первые 3 дня

- **Не трогайте, не трите и не чешите** зону пересадки.
- Спите с немного приподнятой головой — так меньше отёк. Лёгкий отёк лба и вокруг глаз возможен и обычно проходит за несколько дней.
- Избегайте наклонов, подъёма тяжестей и физической нагрузки.
- Принимайте назначенные препараты по схеме; не добавляйте лекарства сами.

## 4–14 дни: мытьё и корочки

- Когда и как первый раз помыть голову, скажет врач — обычно мягко, без трения, специальным средством.
- Вокруг графтов появляются мелкие **корочки**. Обычно они сами отходят за 1–2 недели — **не срывайте их**.
- Лёгкий зуд — норма; не чешите, спросите врача, что можно сделать.
- Головной убор — только с разрешения врача и свободный, не давящий.

## 2–8 недели: «шоковое выпадение»

Этот этап пугает многих: **пересаженные волосы начинают выпадать**. Это нормально — выпадает стержень, а фолликул остаётся в коже и начинает новый цикл. Иногда временно редеют и собственные волосы в донорской зоне или рядом.

## 3–4 месяца: новые волосы

Начинают расти новые волосы — сначала тонкие и редкие. Оценивать результат ещё рано.

## 6–12 месяцев: итог

Волосы утолщаются, густота растёт. Итоговый результат обычно формируется к **9–12 месяцам**. В Radeski после операции **6–12 месяцев** проводятся контрольные осмотры.

## Чего избегать в первые недели

- **Сауна, баня, бассейн и море** — до разрешения врача.
- **Активный спорт и сильное потоотделение** — обычно несколько недель.
- **Солнце** — защищайте зону пересадки от прямых лучей.
- **Курение и алкоголь** — ухудшают кровообращение и заживление.
- **Окрашивание и химические средства** — только после согласования с врачом.

## Свои волосы тоже нужно лечить

Пересаженные волосы устойчивы к андрогенетическому выпадению, но **собственные волосы** рядом могут продолжать выпадать. Поэтому после операции врач может порекомендовать трихологическое лечение (например, PRP-терапию).

Подробнее: [Пересадка волос FUE и DHI](/ru/articles/art-soch-ekish-fue-dhi), [Пересадка волос в Фергане](/ru/fargona/soch-ekish), [PRP-терапия для волос](/ru/articles/art-plazmotorapiya-soch-prp).`;
}

function enBody(): string {
  return `The result of a hair transplant depends not only on the operation but on the care in the following weeks. Grafts are very fragile in the first days, and then come several months of stages that worry patients but are normal. Below is a typical timeline. **The key rule:** the written instructions of the surgeon who operated on you always come first — timings differ a little from patient to patient.

## The first 3 days

- **Do not touch, rub or scratch** the grafted area.
- Sleep with your head slightly raised to reduce swelling. Mild swelling of the forehead and around the eyes is possible and usually settles in a few days.
- Avoid bending over, lifting and exercise.
- Take prescribed medicines as directed; do not add any on your own.

## Days 4–14: washing and crusts

- The doctor tells you when and how to wash your hair the first time — usually gently, without rubbing, with a special product.
- Small **crusts** form around the grafts. They usually come off by themselves within 1–2 weeks — **do not pick them**.
- Mild itching is normal; do not scratch — ask the doctor what helps.
- Wear headwear only when the doctor allows, and choose a loose one.

## Weeks 2–8: “shock loss”

This stage worries many people: **the transplanted hairs start to fall out**. This is normal — the shaft sheds while the follicle stays in the skin and starts a new cycle. Sometimes your own hair in the donor area or nearby thins for a while too.

## Months 3–4: new hair

New hair starts to grow — thin and sparse at first. It is still too early to judge the result.

## Months 6–12: the final result

The hair thickens and density increases. The final result usually forms by **9–12 months**. Radeski follows patients up for **6–12 months** after surgery.

## What to avoid in the first weeks

- **Sauna, steam bath, swimming pool and sea** — until the doctor allows.
- **Intense sport and heavy sweating** — usually for several weeks.
- **Sun** — keep the grafted area out of direct sunlight.
- **Smoking and alcohol** — they slow blood flow and healing.
- **Hair dye and chemical products** — only once agreed with the doctor.

## Your own hair needs treatment too

Transplanted hair resists androgenetic loss, but **your own hair** nearby may keep thinning. That is why the doctor may recommend trichology treatment (such as PRP) after surgery.

Read more: [Hair transplant with FUE and DHI](/en/articles/art-soch-ekish-fue-dhi), [Hair transplant in Fergana](/en/fargona/soch-ekish), [PRP therapy for hair](/en/articles/art-plazmotorapiya-soch-prp).`;
}

export const HAIR_TRANSPLANT_AFTERCARE_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Soch ekishdan keyingi parvarish: birinchi kunlardan 12 oygacha nima normal, qobiqchalar, shok to'kilish, nimalardan saqlanish va qachon shifokorga murojaat qilish kerak.",
    body: uzBody(),
    keyTakeaways: [
      'Shifokorning yozma ko‘rsatmalari har doim ustun',
      'Birinchi kunlarda ekilgan zonaga tegmang, qobiqchalarni yulmang',
      '2–8 haftada ekilgan sochlar to‘kilishi normal — follikula qoladi',
      'Yangi soch 3–4 oydan o‘sadi, yakuniy natija 9–12 oyda',
      'Sauna, basseyn, quyosh va faol sport — shifokor ruxsatigacha emas',
    ],
    tags: ['Soch ekish', 'Soch ekishdan keyin', 'Parvarish', 'Shok to‘kilish', 'Trixolog', "Farg'ona", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Ekilgan zonada kuchli og‘riq, qizarish yoki yiring paydo bo‘ldi',
      'Harorat ko‘tarildi',
      'Shish bir haftadan ko‘p davom etyapti yoki kuchayyapti',
      'Graft joyidan qon to‘xtamayapti',
      '12 oydan keyin ham soch o‘smagan joylar bor',
    ],
    faq: [
      {
        question: 'Soch ekishdan keyin qachon boshni yuvsa bo‘ladi?',
        answer:
          'Birinchi yuvish vaqti va usulini operatsiya qilgan shifokor aytadi. Odatda u bir necha kundan keyin, yumshoq va ishqalamasdan, maxsus vosita bilan bajariladi.',
      },
      {
        question: 'Ekilgan sochlar to‘kilib ketdi — bu yomonmi?',
        answer:
          'Yo‘q. 2–8 haftada ekilgan soch tolalari to‘kilishi normal: follikula terida qoladi va taxminan 3–4 oydan yangi soch o‘sadi.',
      },
      {
        question: 'Qachon sportga qaytish mumkin?',
        answer:
          'Ko‘p terlash va zarba xavfi bor mashg‘ulotlar odatda bir necha hafta to‘xtatiladi. Aniq muddatni shifokor bitish jarayoniga qarab aytadi.',
      },
      {
        question: 'Qachon natijani baholash mumkin?',
        answer:
          'Yangi sochlar 3–4 oydan o‘sa boshlaydi, lekin yakuniy zichlik 9–12 oyda shakllanadi. Shuning uchun natija bir yilda baholanadi.',
      },
    ],
  },
  ru: {
    summary:
      'Уход после пересадки волос: что нормально с первого дня до 12 месяцев, корочки, шоковое выпадение, чего избегать и когда обратиться к врачу.',
    body: ruBody(),
    keyTakeaways: [
      'Письменные рекомендации хирурга всегда важнее',
      'В первые дни не трогайте зону пересадки и не срывайте корочки',
      'Выпадение пересаженных волос на 2–8 неделе — норма, фолликул остаётся',
      'Новые волосы растут с 3–4 месяцев, итог — к 9–12 месяцам',
      'Сауна, бассейн, солнце и активный спорт — только с разрешения врача',
    ],
    tags: ['Пересадка волос', 'После пересадки волос', 'Уход', 'Шоковое выпадение', 'Трихолог', 'Фергана', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'В зоне пересадки сильная боль, покраснение или гной',
      'Поднялась температура',
      'Отёк держится больше недели или усиливается',
      'Из места графта не останавливается кровь',
      'Через 12 месяцев остались участки без роста',
    ],
    faq: [
      {
        question: 'Когда можно мыть голову после пересадки волос?',
        answer:
          'Когда и как помыть голову первый раз, скажет оперировавший врач. Обычно это через несколько дней, мягко, без трения, специальным средством.',
      },
      {
        question: 'Пересаженные волосы выпали — это плохо?',
        answer:
          'Нет. Выпадение пересаженных стержней на 2–8 неделе — норма: фолликул остаётся в коже, и примерно через 3–4 месяца растёт новый волос.',
      },
      {
        question: 'Когда можно вернуться к спорту?',
        answer:
          'Тренировки с сильным потоотделением и риском удара обычно откладывают на несколько недель. Точный срок врач назовёт по заживлению.',
      },
      {
        question: 'Когда можно оценить результат?',
        answer:
          'Новые волосы начинают расти с 3–4 месяцев, но итоговая густота формируется к 9–12 месяцам. Поэтому результат оценивают через год.',
      },
    ],
  },
  en: {
    summary:
      'Aftercare after a hair transplant: what is normal from day one to month 12, crusts, shock loss, what to avoid and when to call the doctor.',
    body: enBody(),
    keyTakeaways: [
      'The surgeon’s written instructions always come first',
      'Do not touch the grafted area or pick the crusts in the first days',
      'Transplanted hair shedding at weeks 2–8 is normal — the follicle stays',
      'New hair grows from 3–4 months; the final result is at 9–12 months',
      'Sauna, pool, sun and intense sport — only once the doctor allows',
    ],
    tags: ['Hair transplant', 'After hair transplant', 'Aftercare', 'Shock loss', 'Trichologist', 'Fergana', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Severe pain, redness or pus in the grafted area',
      'You develop a fever',
      'Swelling lasts more than a week or gets worse',
      'A graft site keeps bleeding',
      'Some areas still show no growth after 12 months',
    ],
    faq: [
      {
        question: 'When can I wash my hair after a transplant?',
        answer:
          'The surgeon tells you when and how to wash it the first time — usually after a few days, gently, without rubbing, with a special product.',
      },
      {
        question: 'My transplanted hair fell out — is that bad?',
        answer:
          'No. Transplanted shafts shedding at weeks 2–8 is normal: the follicle stays in the skin and new hair grows after about 3–4 months.',
      },
      {
        question: 'When can I go back to sport?',
        answer:
          'Workouts with heavy sweating or a risk of knocks are usually paused for several weeks. The doctor gives the exact time based on healing.',
      },
      {
        question: 'When can I judge the result?',
        answer:
          'New hair starts growing from 3–4 months, but the final density forms by 9–12 months, so the result is judged at one year.',
      },
    ],
  },
};

export const HAIR_TRANSPLANT_AFTERCARE_ARTICLE: Article = {
  id: 'art-soch-ekishdan-keyin',
  slug: 'soch-ekishdan-keyin',
  title: {
    uz: 'Soch ekishdan keyin: birinchi kundan 12 oygacha parvarish va nima normal',
    ru: 'После пересадки волос: уход с первого дня до 12 месяцев и что считается нормой',
    en: 'After a Hair Transplant: Aftercare from Day One to Month 12 and What Is Normal',
  },
  summary: {
    uz: HAIR_TRANSPLANT_AFTERCARE_ARTICLE_CATALOG.uz.summary,
    ru: HAIR_TRANSPLANT_AFTERCARE_ARTICLE_CATALOG.ru.summary,
    en: HAIR_TRANSPLANT_AFTERCARE_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: HAIR_TRANSPLANT_AFTERCARE_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: HAIR_TRANSPLANT_AFTERCARE_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: HAIR_TRANSPLANT_AFTERCARE_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Abdvaliyev Begali Sheraliyevich',
    ru: 'Абдвалиев Бегали Шералиевич',
    en: 'Dr. Begali Sheraliyevich Abdvaliyev',
  },
  date: '2026-11-12',
  image: COVER.uz,
  images: COVER,
  views: 0,
};
