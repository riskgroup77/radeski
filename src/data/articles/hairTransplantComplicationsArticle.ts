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
 * Hair transplant side effects and complications: what is a normal part of recovery (swelling,
 * crusts, numbness, shock loss, itching) and what is a real complication (infection,
 * folliculitis, over-harvested donor area, visible scars, unnatural hairline, poor growth), how
 * the risk is reduced and when to call the clinic. Search Console: "soch ekish zararlari"
 * (position 9.8). Complements the contraindications, FUE/DHI and aftercare articles.
 */

const COVER = {
  uz: '/articles/soch-ekish-asoratlari-cover-uz.jpg',
  ru: '/articles/soch-ekish-asoratlari-cover-ru.jpg',
  en: '/articles/soch-ekish-asoratlari-cover-en.jpg',
};

function uzBody(): string {
  return `Soch ekish — jarrohlik muolajasi, shuning uchun uning ham yon ta’sirlari va asoratlari bor. Ularning ko‘pchiligi vaqtinchalik va tiklanishning odatiy qismi. Haqiqiy asoratlar kam uchraydi va ko‘pincha noto‘g‘ri tanlangan bemor, tajribasiz jamoa yoki parvarish qoidalari buzilishi bilan bog‘liq. Quyida “soch ekishning zararlari” deganda nimalar tushunilishini, qaysi biri normal va qaysi biri shifokorga qo‘ng‘iroq qilish sababi ekanini tushuntiramiz.

## Normal holatlar: tiklanishning bir qismi

| Holat | Qachon | Qancha davom etadi |
|---|---|---|
| Peshona va ko‘z atrofi shishi | 2–3-kun | 3–5 kun |
| Qizarish | birinchi kunlar | 1–4 hafta, och terida uzoqroq |
| Qobiqlar | 1–2-kun | 7–10 kun ichida tushadi |
| Qichish | 1–2-hafta | bir necha kun |
| Uvishish (sezgi kamayishi) | birinchi haftalar | bir necha hafta, ba’zan 2–3 oy |
| “Shok to‘kilish” | 2–8-hafta | 3–4-oydan yangi soch o‘sadi |

**Shok to‘kilish** ko‘pchilikni qo‘rqitadi: ekilgan sochlar 2–8 hafta ichida to‘kiladi. Bu normal — ildiz (follikula) joyida qoladi va 3–4-oydan yangi soch o‘sa boshlaydi. Ba’zan atrofdagi o‘z sochlar ham vaqtincha siyraklashadi. Yakuniy natija 9–12 oyda baholanadi. Bosqichlar haqida batafsil: [Soch ekishdan keyin: 1 kundan 12 oygacha](/uz/articles/art-soch-ekishdan-keyin).

## Haqiqiy asoratlar

- **Infeksiya** — kuchayib boruvchi og‘riq, shish, yiring, isitma. Kam uchraydi; antiseptika va parvarish qoidalari xavfni kamaytiradi.
- **Follikulit** — ekilgan joyda mayda yiringli toshmalar, ko‘pincha yangi sochlar o‘sayotgan 1–3-oylarda. Odatda mahalliy davolash bilan o‘tadi.
- **Qon ketishi** — birinchi kunlarda ozgina qon normal; to‘xtamaydigan qon ketishi — qo‘ng‘iroq qilish sababi. Qon suyultiruvchi dorilarni shifokor bilan oldindan kelishish kerak.
- **Donor zonaning “ortiqcha olinishi”** — ensadan juda ko‘p graft olinsa, u yer siyrak ko‘rinadi. Bu rejalashtirish xatosi.
- **Ko‘rinadigan izlar** — FUE usulida mayda nuqtali izlar qoladi, odatda qisqa soch ostida ham bilinmaydi; juda qisqa qirqishda ko‘rinishi mumkin.
- **Tabiiy bo‘lmagan soch chizig‘i** — yuzga mos kelmaydigan, juda tekis yoki juda past chiziq. Dizayn shifokor bilan oldindan kelishiladi.
- **Sust o‘sish** — graftlar noto‘g‘ri saqlangan, ekilgan zich yoki bemor chekgan bo‘lsa, kamroq soch o‘sadi.
- **Kistalar** — ekilgan joyda mayda shishlar; odatda o‘tadi yoki oddiy muolaja bilan bartaraf etiladi.

## Xavfni qanday kamaytirish mumkin

1. **Avval trixolog ko‘rigi.** Soch to‘kilishining turi va sababi aniqlanadi; ba’zi holatlarda (faol o‘choqli alopesiya, bosh terisi kasalliklari) operatsiya qilinmaydi. Batafsil: [Soch ekishni qachon qilish mumkin emas](/uz/articles/art-hair-transplant-contraindications).
2. **Donor zonani baholash.** Graft soni donor zona imkoniyatiga qarab rejalashtiriladi — “ko‘proq” har doim “yaxshiroq” emas.
3. **Tahlillar va dorilar.** Qon tahlillari, surunkali kasalliklar va doimiy dorilar haqida shifokorga to‘liq ayting.
4. **Chekish va spirtdan voz kechish** — operatsiyadan kamida 1–2 hafta oldin va keyin.
5. **Parvarish qoidalari** — birinchi kunlardagi yuvish, uyqu holati, sport, sauna va quyosh bo‘yicha tavsiyalarga to‘liq amal qilish.

Usullar va natijaga nima ta’sir qilishi haqida: [Soch ekish FUE va DHI usulida](/uz/articles/art-soch-ekish-fue-dhi).

## Qachon klinikaga darhol qo‘ng‘iroq qilish kerak

- og‘riq kundan-kunga kuchaysa yoki isitma chiqsa;
- yiring, yoqimsiz hid, qizarish tarqalayotgan bo‘lsa;
- bosib turganda ham qon to‘xtamasa;
- shish 5–7 kundan keyin ham kamaymasa yoki ko‘z yopilib qolsa;
- 6 oydan keyin ham ekilgan joyda o‘sish deyarli ko‘rinmasa.

Radeski’da soch ekish operatsiyasi Farg‘onada, operatsiyadan oldin trixolog ko‘rigi va keyingi nazorat ko‘riklari bilan o‘tkaziladi: [Soch ekish Farg‘onada](/uz/fargona/soch-ekish).

*Ushbu maqola umumiy ma’lumot uchun. Yakuniy tashxis va davolashni faqat shifokor belgilaydi.*`;
}

function ruBody(): string {
  return `Пересадка волос — хирургическая процедура, поэтому у неё есть побочные эффекты и осложнения. Большинство из них временные и являются обычной частью восстановления. Настоящие осложнения встречаются редко и чаще связаны с неправильным отбором пациента, неопытной командой или нарушением правил ухода. Разберём, что понимают под «вредом пересадки волос», что из этого норма, а что — повод позвонить врачу.

## Норма: часть восстановления

| Состояние | Когда | Сколько длится |
|---|---|---|
| Отёк лба и вокруг глаз | 2–3-й день | 3–5 дней |
| Покраснение | первые дни | 1–4 недели, у светлой кожи дольше |
| Корочки | 1–2-й день | отпадают за 7–10 дней |
| Зуд | 1–2-я неделя | несколько дней |
| Онемение | первые недели | несколько недель, иногда 2–3 месяца |
| «Шоковое выпадение» | 2–8-я неделя | новые волосы растут с 3–4-го месяца |

**Шоковое выпадение** пугает многих: пересаженные волосы выпадают в течение 2–8 недель. Это норма — луковица (фолликул) остаётся на месте, и с 3–4-го месяца начинают расти новые волосы. Иногда временно редеют и собственные волосы вокруг. Окончательный результат оценивают через 9–12 месяцев. Подробно об этапах: [После пересадки волос: от 1 дня до 12 месяцев](/ru/articles/art-soch-ekishdan-keyin).

## Настоящие осложнения

- **Инфекция** — нарастающая боль, отёк, гной, температура. Встречается редко; антисептика и правила ухода снижают риск.
- **Фолликулит** — мелкие гнойнички в зоне пересадки, чаще на 1–3-м месяце, когда растут новые волосы. Обычно проходит при местном лечении.
- **Кровотечение** — немного крови в первые дни нормально; непрекращающееся кровотечение — повод позвонить. Препараты, разжижающие кровь, нужно заранее согласовать с врачом.
- **«Перебор» донорской зоны** — если с затылка взять слишком много графтов, он выглядит редким. Это ошибка планирования.
- **Видимые следы** — после FUE остаются мелкие точечные следы, обычно незаметные даже под короткой стрижкой; при очень короткой стрижке могут быть видны.
- **Неестественная линия роста** — слишком ровная, слишком низкая или не подходящая к лицу. Дизайн линии согласуют с врачом заранее.
- **Слабый рост** — если графты неправильно хранились, пересажены слишком густо или пациент курит, приживается меньше волос.
- **Кисты** — мелкие уплотнения в зоне пересадки; обычно проходят сами или убираются простой процедурой.

## Как снизить риск

1. **Сначала консультация трихолога.** Определяют тип и причину выпадения; в некоторых случаях (активная очаговая алопеция, болезни кожи головы) операцию не делают. Подробнее: [Когда пересадку волос делать нельзя](/ru/articles/art-hair-transplant-contraindications).
2. **Оценка донорской зоны.** Количество графтов планируют по возможностям донорской зоны — «больше» не всегда «лучше».
3. **Анализы и лекарства.** Полностью расскажите врачу об анализах, хронических болезнях и постоянных препаратах.
4. **Отказ от курения и алкоголя** — минимум за 1–2 недели до и после операции.
5. **Правила ухода** — строго соблюдать рекомендации по мытью в первые дни, положению во сне, спорту, сауне и солнцу.

О методах и о том, что влияет на результат: [Пересадка волос методами FUE и DHI](/ru/articles/art-soch-ekish-fue-dhi).

## Когда срочно звонить в клинику

- боль с каждым днём усиливается или поднялась температура;
- есть гной, неприятный запах, покраснение расползается;
- кровь не останавливается даже при прижатии;
- отёк не уменьшается через 5–7 дней или закрывается глаз;
- через 6 месяцев в зоне пересадки почти нет роста.

В Radeski пересадку волос проводят в Фергане, с консультацией трихолога до операции и контрольными осмотрами после: [Пересадка волос в Фергане](/ru/fargona/soch-ekish).

*Статья носит информационный характер. Диагноз и лечение назначает только врач.*`;
}

function enBody(): string {
  return `A hair transplant is a surgical procedure, so it has side effects and possible complications. Most are temporary and simply part of recovery. Real complications are uncommon and usually linked to poor patient selection, an inexperienced team or not following aftercare. Here is what the "risks of hair transplant" really are, what is normal and what is a reason to call your doctor.

## Normal: part of recovery

| Effect | When | How long |
|---|---|---|
| Swelling of the forehead and around the eyes | day 2–3 | 3–5 days |
| Redness | first days | 1–4 weeks, longer in fair skin |
| Crusts | day 1–2 | fall off within 7–10 days |
| Itching | week 1–2 | a few days |
| Numbness | first weeks | several weeks, sometimes 2–3 months |
| "Shock loss" | week 2–8 | new hair grows from month 3–4 |

**Shock loss** worries many people: transplanted hairs fall out within 2–8 weeks. This is normal — the follicle stays in place and new hair starts growing from month 3–4. Sometimes the surrounding native hair thins temporarily too. The final result is judged at 9–12 months. More on the stages: [After a hair transplant: day 1 to month 12](/en/articles/art-soch-ekishdan-keyin).

## Real complications

- **Infection** — increasing pain, swelling, pus, fever. Rare; antisepsis and aftercare reduce the risk.
- **Folliculitis** — small pus spots in the recipient area, usually in months 1–3 as new hair grows. It typically settles with local treatment.
- **Bleeding** — a little blood in the first days is normal; bleeding that does not stop is a reason to call. Blood thinners must be agreed with the doctor in advance.
- **Over-harvested donor area** — taking too many grafts from the back of the head leaves it looking thin. This is a planning error.
- **Visible marks** — FUE leaves tiny dot scars, usually invisible even under short hair; a very close shave may show them.
- **Unnatural hairline** — too straight, too low or not suited to the face. The hairline design is agreed with the doctor beforehand.
- **Poor growth** — fewer hairs survive if grafts were stored badly, placed too densely, or the patient smokes.
- **Cysts** — small bumps in the recipient area; they usually resolve or are removed with a simple procedure.

## How the risk is reduced

1. **A trichologist assessment first.** The type and cause of hair loss are established; in some cases (active alopecia areata, scalp disease) surgery is not done. More: [When a hair transplant should not be done](/en/articles/art-hair-transplant-contraindications).
2. **Donor area assessment.** The number of grafts is planned around what the donor area can give — "more" is not always "better".
3. **Tests and medicines.** Tell the doctor everything about tests, chronic conditions and regular medicines.
4. **No smoking or alcohol** — at least 1–2 weeks before and after surgery.
5. **Aftercare** — follow the advice on washing in the first days, sleeping position, exercise, sauna and sun exactly.

On methods and what drives the result: [Hair transplant with FUE and DHI](/en/articles/art-soch-ekish-fue-dhi).

## When to call the clinic right away

- pain gets worse day by day or you have a fever;
- there is pus, a bad smell or spreading redness;
- bleeding does not stop with pressure;
- swelling has not eased after 5–7 days or an eye swells shut;
- after 6 months there is almost no growth in the transplanted area.

At Radeski, hair transplants are performed in Fergana, with a trichologist assessment before surgery and follow-up visits afterwards: [Hair transplant in Fergana](/en/fargona/soch-ekish).

*This article is for general information. Only a doctor can make a diagnosis and prescribe treatment.*`;
}

export const HAIR_TRANSPLANT_COMPLICATIONS_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Soch ekishning zararlari va asoratlari: shish, qobiq, uvishish va shok to‘kilish qachon normal, infeksiya, follikulit va izlar qachon xavfli. Xavfni kamaytirish va qachon klinikaga qo‘ng‘iroq qilish.',
    body: uzBody(),
    keyTakeaways: [
      'Shish, qobiq, qichish va uvishish — tiklanishning normal qismi',
      'Ekilgan sochlarning 2–8 haftada to‘kilishi normal, yangi soch 3–4-oydan o‘sadi',
      'Haqiqiy asoratlar kam: infeksiya, follikulit, donor zona siyraklashi',
      'Trixolog ko‘rigi va to‘g‘ri rejalashtirish xavfni kamaytiradi',
      'Isitma, yiring yoki to‘xtamaydigan qon — darhol qo‘ng‘iroq sababi',
    ],
    tags: ['Soch ekish', 'Soch ekish zararlari', 'Asoratlar', 'Shok to‘kilish', 'FUE', 'Trixolog', 'Farg‘ona', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Og‘riq kuchayib borsa yoki isitma chiqsa',
      'Yiring, yoqimsiz hid yoki tarqalayotgan qizarish bo‘lsa',
      'Qon bosib turganda ham to‘xtamasa',
      'Shish 5–7 kundan keyin kamaymasa',
      '6 oydan keyin ham o‘sish ko‘rinmasa',
    ],
    faq: [
      {
        question: 'Soch ekishning zararli tomonlari bormi?',
        answer:
          'Har qanday operatsiya kabi yon ta’sirlari bor: shish, qizarish, qobiq, vaqtincha uvishish. Haqiqiy asoratlar — infeksiya, follikulit, donor zona siyraklashi — kam uchraydi va to‘g‘ri rejalashtirish bilan kamaytiriladi.',
      },
      {
        question: 'Ekilgan sochlar to‘kilsa, operatsiya muvaffaqiyatsiz bo‘ldimi?',
        answer:
          'Yo‘q. 2–8 haftada ekilgan sochlarning to‘kilishi (shok to‘kilish) normal. Follikula joyida qoladi va 3–4-oydan yangi soch o‘sadi; natija 9–12 oyda baholanadi.',
      },
      {
        question: 'Soch ekishdan keyin iz qoladimi?',
        answer:
          'FUE usulida donor zonada mayda nuqtali izlar qoladi, ular odatda qisqa soch ostida ham bilinmaydi. Juda qisqa qirqishda ko‘rinishi mumkin.',
      },
      {
        question: 'Asorat xavfini qanday kamaytirish mumkin?',
        answer:
          'Operatsiyadan oldin trixolog ko‘rigi va tahlillar, donor zonani to‘g‘ri baholash, chekishdan voz kechish va parvarish qoidalariga to‘liq amal qilish.',
      },
    ],
  },
  ru: {
    summary:
      'Вред и осложнения пересадки волос: когда отёк, корочки, онемение и шоковое выпадение — норма, а когда опасны инфекция, фолликулит и рубцы. Как снизить риск и когда звонить в клинику.',
    body: ruBody(),
    keyTakeaways: [
      'Отёк, корочки, зуд и онемение — нормальная часть восстановления',
      'Выпадение пересаженных волос на 2–8-й неделе — норма, новые растут с 3–4-го месяца',
      'Настоящие осложнения редки: инфекция, фолликулит, поредение донорской зоны',
      'Консультация трихолога и правильное планирование снижают риск',
      'Температура, гной или непрекращающееся кровотечение — повод срочно позвонить',
    ],
    tags: ['Пересадка волос', 'Вред пересадки волос', 'Осложнения', 'Шоковое выпадение', 'FUE', 'Трихолог', 'Фергана', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Боль усиливается или поднялась температура',
      'Есть гной, неприятный запах или расползается покраснение',
      'Кровь не останавливается при прижатии',
      'Отёк не уменьшается через 5–7 дней',
      'Через 6 месяцев нет роста',
    ],
    faq: [
      {
        question: 'Есть ли вред от пересадки волос?',
        answer:
          'Как у любой операции, есть побочные эффекты: отёк, покраснение, корочки, временное онемение. Настоящие осложнения — инфекция, фолликулит, поредение донорской зоны — редки и снижаются правильным планированием.',
      },
      {
        question: 'Если пересаженные волосы выпали, операция не удалась?',
        answer:
          'Нет. Выпадение пересаженных волос на 2–8-й неделе (шоковое выпадение) — норма. Фолликул остаётся, новые волосы растут с 3–4-го месяца; результат оценивают через 9–12 месяцев.',
      },
      {
        question: 'Остаются ли следы после пересадки волос?',
        answer:
          'После FUE в донорской зоне остаются мелкие точечные следы, обычно незаметные даже под короткой стрижкой. При очень короткой стрижке они могут быть видны.',
      },
      {
        question: 'Как снизить риск осложнений?',
        answer:
          'Консультация трихолога и анализы до операции, правильная оценка донорской зоны, отказ от курения и строгое соблюдение правил ухода.',
      },
    ],
  },
  en: {
    summary:
      'Hair transplant side effects and complications: when swelling, crusts, numbness and shock loss are normal, and when infection, folliculitis and scarring matter. How to reduce the risk and when to call the clinic.',
    body: enBody(),
    keyTakeaways: [
      'Swelling, crusts, itching and numbness are a normal part of recovery',
      'Transplanted hairs falling out in weeks 2–8 is normal; new hair grows from month 3–4',
      'Real complications are rare: infection, folliculitis, a thinned donor area',
      'A trichologist assessment and careful planning reduce the risk',
      'Fever, pus or bleeding that will not stop — call right away',
    ],
    tags: ['Hair transplant', 'Hair transplant risks', 'Complications', 'Shock loss', 'FUE', 'Trichologist', 'Fergana', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Pain gets worse or you develop a fever',
      'There is pus, a bad smell or spreading redness',
      'Bleeding does not stop with pressure',
      'Swelling has not eased after 5–7 days',
      'There is no growth after 6 months',
    ],
    faq: [
      {
        question: 'Does a hair transplant have downsides?',
        answer:
          'Like any surgery it has side effects: swelling, redness, crusts and temporary numbness. Real complications — infection, folliculitis, a thinned donor area — are rare and reduced by careful planning.',
      },
      {
        question: 'If the transplanted hair falls out, did the surgery fail?',
        answer:
          'No. Losing transplanted hairs in weeks 2–8 (shock loss) is normal. The follicle stays and new hair grows from month 3–4; the result is judged at 9–12 months.',
      },
      {
        question: 'Does a hair transplant leave scars?',
        answer:
          'FUE leaves tiny dot scars in the donor area that are usually invisible even under short hair. A very close shave may show them.',
      },
      {
        question: 'How can the risk of complications be reduced?',
        answer:
          'A trichologist assessment and tests before surgery, a proper donor area assessment, no smoking, and following the aftercare rules exactly.',
      },
    ],
  },
};

export const HAIR_TRANSPLANT_COMPLICATIONS_ARTICLE: Article = {
  id: 'art-soch-ekish-asoratlari',
  slug: 'soch-ekish-asoratlari',
  title: {
    uz: 'Soch ekishning zararlari va asoratlari: nima normal, nima xavfli',
    ru: 'Вред и осложнения пересадки волос: что норма, а что опасно',
    en: 'Hair Transplant Side Effects and Complications: What Is Normal and What Is Not',
  },
  summary: {
    uz: HAIR_TRANSPLANT_COMPLICATIONS_ARTICLE_CATALOG.uz.summary,
    ru: HAIR_TRANSPLANT_COMPLICATIONS_ARTICLE_CATALOG.ru.summary,
    en: HAIR_TRANSPLANT_COMPLICATIONS_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: HAIR_TRANSPLANT_COMPLICATIONS_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: HAIR_TRANSPLANT_COMPLICATIONS_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: HAIR_TRANSPLANT_COMPLICATIONS_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Abdvaliyev Begali Sheraliyevich',
    ru: 'Абдвалиев Бегали Шералиевич',
    en: 'Dr. Begali Sheraliyevich Abdvaliyev',
  },
  date: '2026-12-15',
  image: COVER.uz,
  images: COVER,
  views: 0,
};
