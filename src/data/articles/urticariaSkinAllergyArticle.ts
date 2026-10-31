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
 * Skin allergy and hives in depth (condition page: /conditions/teri-allergiyasi). Covers the
 * forms of skin allergy, hives triggers, acute vs chronic urticaria, the emergency signs
 * (angioedema, anaphylaxis — call 103) and the clinic's treatment incl. immunobiological therapy.
 */

function uzBody(): string {
  return `Teri allergiyasi — immun tizimining biror moddaga ortiqcha javobi bo'lib, terida qizarish, toshma, pufaklar va qichishish bilan namoyon bo'ladi. Uning eng ko'p uchraydigan ko'rinishi — eshakemi (krapivnitsa): terida qichiydigan, gazanda chaqqandek bo'rtiq pufaklar paydo bo'ladi va bir necha soatda izsiz yo'qoladi. Ko'pchilik hollarda eshakemi xavfsiz o'tadi, lekin ba'zan u shoshilinch yordam talab qiladigan holat belgisi bo'lishi mumkin.

## Darhol tez yordam chaqiring (103)

Quyidagi belgilar bo'lsa, kutmang — tez yordam chaqiring:

- lab, til, ko'z qovoqlari yoki yuz tez shishsa;
- nafas olish qiyinlashsa, xirillash, tomoqda siqilish paydo bo'lsa;
- yutish qiyinlashsa, ovoz o'zgarsa;
- bosh aylanishi, kuchli holsizlik, hushdan ketish holati bo'lsa;
- toshma ari yoki boshqa hasharot chaqqandan, yangi dori ichgandan yoki ovqatdan keyin tez tarqalsa.

Bu Kvinke shishi yoki anafilaksiya belgilari bo'lishi mumkin.

## Teri allergiyasining turlari

- **Eshakemi (krapivnitsa)** — qichiydigan pushti yoki oq pufaklar, ular joyini o'zgartirib turadi va 24 soat ichida yo'qoladi.
- **Allergik kontakt dermatit** — allergen tekkan joyda qizarish, pufakchalar va qichishish: nikel, soch bo'yog'i, kosmetika, lateks, ba'zi surtma dorilar.
- **Dori allergiyasi** — yangi dori boshlangandan keyin tana bo'ylab toshma.
- **Atopik dermatit** — allergik kasalliklarga moyil odamlarda surunkali qichiydigan toshma; u haqida [alohida maqola](/uz/articles/art-atopic-dermatitis) bor.

## Eshakemi nimadan paydo bo'ladi?

**O'tkir eshakemi** (6 haftagacha) ko'pincha aniq sabab bilan bog'liq:

- oziq-ovqat — yong'oq, dengiz mahsulotlari, tuxum, sitrus mevalar, shokolad;
- dorilar — ba'zi antibiotiklar, og'riq qoldiruvchi va yallig'lanishga qarshi dorilar;
- virusli va bakterial infeksiyalar — ayniqsa bolalarda;
- hasharot chaqishi.

**Surunkali eshakemi** (6 haftadan ko'p) ko'pincha aniq tashqi sababsiz kechadi — bu immun tizimining o'z xususiyati. Ba'zan pufaklarni jismoniy omillar qo'zg'atadi: sovuq, issiq, bosim (kamar, sumka tasmasi), quyosh, terlash, teriga ishqalanish. Stress va infeksiyalar kasallikni kuchaytirishi mumkin.

## Tashxis qanday qo'yiladi?

Pufaklar ko'pincha shifokor qabuliga borguncha yo'qolib qoladi, shuning uchun toshmani **telefonga suratga oling**. Qabulda dermatolog so'raydi va tekshiradi:

- toshma qachon, nimadan keyin paydo bo'ladi, qancha davom etadi;
- qanday dorilar, ovqat va kosmetika ishlatilgan;
- shish va boshqa belgilar bo'lganmi.

Surunkali eshakemida shifokor tahlillarni buyurishi mumkin. Oziq-ovqat va allergen kundaligi sababni topishga yordam beradi. "Hamma allergenlarga" tahlil topshirish odatda kerak emas: tekshiruv shifokor tavsiyasiga ko'ra tanlanadi.

## Qanday davolanadi?

- **Sababni bartaraf etish** — aniqlangan allergen, dori yoki qo'zg'atuvchi omildan saqlanish.
- **Antigistamin dorilar** — eshakemi davolashning asosi; zamonaviy (uyquni keltirmaydigan) dorilarni va dozani shifokor tanlaydi.
- **Kontakt dermatitda** — allergendan saqlanish va yallig'lanishga qarshi tashqi davolash.
- **Og'ir surunkali eshakemida** — antigistaminlar yordam bermasa, [immunobiologik terapiya](/uz/services/dermatologiya/immunobiologik-terapiya) qo'llanishi mumkin. Bu zamonaviy davolash usuli faqat shifokor nazoratida o'tkaziladi.

Gormonli dorilarni o'zboshimchalik bilan qabul qilish mumkin emas: ular faqat qisqa muddatga va shifokor ko'rsatmasi bilan buyuriladi.

## Uyda nima qilish kerak?

- Toshma chiqqanda yangi boshlangan dori, ovqat yoki kosmetikani eslang va shifokorga ayting.
- Issiq vanna, sauna, qattiq ishqalovchi kiyimdan saqlaning — ular pufaklarni kuchaytiradi.
- Qichishishda sovuq kompress yordam beradi.
- Allergiyani "tozalovchi" xalq vositalari va xushbo'y kremlarni ishlatmang.
- Allergiyasi aniqlangan dorining nomini yozib qo'ying va har bir shifokorga ayting.

## Farg'ona va Qo'qonda teri allergiyasini davolash

Radeski Skin Clinic'da [dermatolog](/uz/services/dermatologiya) toshmani ko'zdan kechiradi, eshakemi, kontakt dermatit yoki boshqa kasallikni ajratadi, kerak bo'lsa tahlillarni buyuradi va davolash rejasini tuzadi. Og'ir surunkali holatlarda klinikada immunobiologik terapiya ham bor.

- [Teri allergiyasi — qisqacha](/uz/conditions/teri-allergiyasi);
- [Dermatolog Farg'onada](/uz/fargona/dermatolog) — qabul, narxlar va shifokorlar;
- [Dermatolog Qo'qonda](/uz/qoqon/dermatolog) — Qo'qon filialida qabul;
- o'xshash shikoyatlar: [Teri qichishi: sabablari](/uz/articles/art-teri-qichishi), [Ekzema](/uz/articles/art-ekzema), [Atopik dermatit](/uz/articles/art-atopic-dermatitis).

Eshakemi tez-tez qaytsa yoki 6 haftadan ko'p davom etsa, uni chidab yurmang: to'g'ri tanlangan davolash bilan ko'pchilik bemorlarda toshma to'liq nazoratga olinadi.`;
}

function ruBody(): string {
  return `Аллергия на коже — избыточный ответ иммунной системы на какое-либо вещество, который проявляется покраснением, сыпью, волдырями и зудом. Самая частая её форма — крапивница: на коже появляются зудящие волдыри, как после ожога крапивой, и через несколько часов бесследно исчезают. Чаще всего крапивница проходит без последствий, но иногда она бывает признаком состояния, при котором нужна срочная помощь.

## Срочно вызывайте скорую (103)

Не ждите и вызывайте скорую помощь, если:

- быстро отекают губы, язык, веки или лицо;
- стало трудно дышать, появились хрипы, сдавление в горле;
- трудно глотать, изменился голос;
- кружится голова, резкая слабость, предобморочное состояние;
- сыпь быстро распространяется после укуса осы или другого насекомого, нового лекарства или еды.

Это могут быть признаки отёка Квинке или анафилаксии.

## Виды аллергии на коже

- **Крапивница** — зудящие розовые или белые волдыри, которые «кочуют» по телу и исчезают в течение 24 часов.
- **Аллергический контактный дерматит** — покраснение, пузырьки и зуд там, где кожа соприкоснулась с аллергеном: никель, краска для волос, косметика, латекс, некоторые мази.
- **Лекарственная аллергия** — сыпь по телу после начала приёма нового препарата.
- **Атопический дерматит** — хроническая зудящая сыпь у людей со склонностью к аллергии; о нём есть [отдельная статья](/ru/articles/art-atopic-dermatitis).

## Отчего появляется крапивница?

**Острая крапивница** (до 6 недель) чаще связана с конкретной причиной:

- продукты — орехи, морепродукты, яйца, цитрусовые, шоколад;
- лекарства — некоторые антибиотики, обезболивающие и противовоспалительные препараты;
- вирусные и бактериальные инфекции — особенно у детей;
- укусы насекомых.

**Хроническая крапивница** (дольше 6 недель) часто протекает без явной внешней причины — это особенность работы иммунной системы. Иногда волдыри провоцируют физические факторы: холод, тепло, давление (ремень, лямка сумки), солнце, пот, трение. Стресс и инфекции могут усиливать болезнь.

## Как ставят диагноз?

Волдыри часто исчезают до приёма у врача, поэтому **сфотографируйте сыпь на телефон**. На приёме дерматолог уточнит:

- когда и после чего появляется сыпь, сколько держится;
- какие лекарства, продукты и косметику вы использовали;
- были ли отёки и другие симптомы.

При хронической крапивнице врач может назначить анализы. Найти причину помогает пищевой дневник и дневник аллергенов. Сдавать анализы «на все аллергены» обычно не нужно: обследование подбирает врач.

## Как лечат?

- **Устранение причины** — избегать выявленного аллергена, лекарства или провоцирующего фактора.
- **Антигистаминные препараты** — основа лечения крапивницы; современные (не вызывающие сонливости) препараты и дозу подбирает врач.
- **При контактном дерматите** — исключение аллергена и противовоспалительная наружная терапия.
- **При тяжёлой хронической крапивнице** — если антигистаминные не помогают, может применяться [иммунобиологическая терапия](/ru/services/dermatologiya/immunobiologik-terapiya). Это современный метод лечения, который проводится только под контролем врача.

Самостоятельно принимать гормональные препараты нельзя: их назначают коротким курсом и только по показаниям.

## Что делать дома?

- Когда появилась сыпь, вспомните, какое лекарство, продукт или косметику вы начали недавно, и скажите врачу.
- Избегайте горячей ванны, сауны и тесной одежды — они усиливают волдыри.
- При зуде помогает прохладный компресс.
- Не используйте народные средства «для очищения от аллергии» и ароматизированные кремы.
- Запишите название лекарства, на которое у вас аллергия, и сообщайте его каждому врачу.

## Лечение аллергии на коже в Фергане и Коканде

В Radeski Skin Clinic [дерматолог](/ru/services/dermatologiya) осмотрит сыпь, отличит крапивницу от контактного дерматита и других заболеваний, при необходимости назначит анализы и составит план лечения. При тяжёлых хронических формах в клинике проводится иммунобиологическая терапия.

- [Аллергия на коже — коротко](/ru/conditions/teri-allergiyasi);
- [Дерматолог в Фергане](/ru/fargona/dermatolog) — приём, цены и врачи;
- [Дерматолог в Коканде](/ru/qoqon/dermatolog) — приём в кокандском филиале;
- похожие жалобы: [Зуд кожи: причины](/ru/articles/art-teri-qichishi), [Экзема](/ru/articles/art-ekzema), [Атопический дерматит](/ru/articles/art-atopic-dermatitis).

Если крапивница часто возвращается или длится дольше 6 недель, не терпите её: при правильно подобранном лечении у большинства пациентов сыпь удаётся полностью взять под контроль.`;
}

function enBody(): string {
  return `A skin allergy is an exaggerated immune response to a substance that shows up as redness, rash, welts and itching. Its most common form is hives (urticaria): itchy raised welts, like nettle stings, that fade without a trace within hours. Most hives settle without consequences, but sometimes they signal a condition that needs urgent help.

## Call an ambulance right away (103)

Do not wait — call emergency services if:

- the lips, tongue, eyelids or face swell quickly;
- breathing becomes difficult, with wheezing or tightness in the throat;
- swallowing is hard or your voice changes;
- you feel dizzy, very weak or faint;
- the rash spreads fast after a wasp or other insect sting, a new medicine or a food.

These can be signs of angioedema or anaphylaxis.

## Types of skin allergy

- **Hives (urticaria)** — itchy pink or white welts that move around the body and fade within 24 hours.
- **Allergic contact dermatitis** — redness, blisters and itching where the skin touched an allergen: nickel, hair dye, cosmetics, latex, some ointments.
- **Drug allergy** — a rash over the body after starting a new medicine.
- **Atopic dermatitis** — a chronic itchy rash in people prone to allergy; there is [a separate article](/en/articles/art-atopic-dermatitis) about it.

## What causes hives?

**Acute hives** (up to 6 weeks) are often linked to a specific cause:

- foods — nuts, seafood, eggs, citrus fruit, chocolate;
- medicines — some antibiotics, painkillers and anti-inflammatory drugs;
- viral and bacterial infections — especially in children;
- insect stings.

**Chronic hives** (longer than 6 weeks) often have no clear external cause — it is a feature of how the immune system works. Sometimes physical factors set off the welts: cold, heat, pressure (a belt or bag strap), sun, sweat, rubbing. Stress and infections can make it worse.

## How is it diagnosed?

Welts often fade before the doctor's visit, so **take a photo of the rash on your phone**. The dermatologist will ask:

- when and after what the rash appears, and how long it lasts;
- which medicines, foods and cosmetics you used;
- whether there was swelling or other symptoms.

For chronic hives the doctor may order tests. A food and allergen diary helps find the cause. Testing for "all allergens" is usually unnecessary: the doctor chooses the tests.

## How is it treated?

- **Removing the cause** — avoiding the identified allergen, medicine or trigger.
- **Antihistamines** — the mainstay of hives treatment; the doctor chooses modern non-drowsy medicines and the dose.
- **Contact dermatitis** — avoiding the allergen and anti-inflammatory topical treatment.
- **Severe chronic hives** — if antihistamines do not help, [immunobiological therapy](/en/services/dermatologiya/immunobiologik-terapiya) may be used. This modern treatment is given only under a doctor's supervision.

Do not take steroid medicines on your own: they are prescribed only as short courses when indicated.

## What to do at home

- When a rash appears, think back to any new medicine, food or cosmetic and tell your doctor.
- Avoid hot baths, saunas and tight clothing — they make welts worse.
- A cool compress eases the itch.
- Do not use folk remedies that promise to "cleanse" allergy, or scented creams.
- Write down the name of any medicine you are allergic to and tell every doctor.

## Skin allergy treatment in Fergana and Kokand

At Radeski Skin Clinic a [dermatologist](/en/services/dermatologiya) examines the rash, tells hives apart from contact dermatitis and other conditions, orders tests when needed and builds a treatment plan. For severe chronic forms the clinic offers immunobiological therapy.

- [Skin allergy — in brief](/en/conditions/teri-allergiyasi);
- [Dermatologist in Fergana](/en/fargona/dermatolog) — visits, prices and doctors;
- [Dermatologist in Kokand](/en/qoqon/dermatolog) — visits at the Kokand branch;
- similar complaints: [Itchy skin: causes](/en/articles/art-teri-qichishi), [Eczema](/en/articles/art-ekzema), [Atopic dermatitis](/en/articles/art-atopic-dermatitis).

If hives keep coming back or last longer than 6 weeks, do not just put up with them: with the right treatment most patients get the rash fully under control.`;
}

export const URTICARIA_SKIN_ALLERGY_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Teri allergiyasi va eshakemi: qichiydigan pufaklar, qizarish va shish. Sabablari, o'tkir va surunkali eshakemi, qachon tez yordam chaqirish kerak va davolash. Farg'ona va Qo'qonda dermatolog qabuli.",
    body: uzBody(),
    keyTakeaways: [
      "Eshakemi — qichiydigan pufaklar, ular 24 soat ichida izsiz yo'qoladi",
      'Lab, til shishi yoki nafas qisishi — darhol tez yordam (103)',
      "O'tkir eshakemi ko'pincha ovqat, dori yoki infeksiyadan; surunkali eshakemi ko'pincha aniq sababsiz",
      'Davolash asosi — sababdan saqlanish va shifokor tanlagan antigistamin dorilar',
      "Og'ir surunkali eshakemida immunobiologik terapiya qo'llanishi mumkin",
    ],
    tags: ['Eshakemi', 'Teri allergiyasi', 'Krapivnitsa', 'Kontakt dermatit', 'Dermatolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Eshakemi 6 haftadan ko'p davom etsa yoki tez-tez qaytsa",
      "Toshma yangi dori boshlangandan keyin paydo bo'lsa",
      'Qichishish uyqu va ishga xalaqit bersa',
      "Kosmetika yoki metall tekkan joyda qizarish va pufakchalar paydo bo'lsa",
      "Yuz va lablarda shish bo'lsa — shoshilinch",
    ],
    faq: [
      {
        question: 'Eshakemi yuqumlimi?',
        answer:
          "Yo'q. Eshakemi — immun tizimining reaksiyasi, u boshqa odamga yuqmaydi. Agar u infeksiya fonida paydo bo'lgan bo'lsa ham, toshmaning o'zi yuqumli emas.",
      },
      {
        question: "Eshakemi qancha davom etadi?",
        answer:
          "Har bir pufak odatda 24 soat ichida yo'qoladi. O'tkir eshakemi bir necha kundan 6 haftagacha davom etadi. Toshma 6 haftadan ko'p qaytib tursa, bu surunkali eshakemi — uni dermatolog bilan birga davolash kerak.",
      },
      {
        question: 'Allergiyada qanday tahlil topshirish kerak?',
        answer:
          "Tahlil turini shifokor so'rov va ko'rikdan keyin tanlaydi. O'tkir eshakemida, sabab aniq bo'lsa, ko'pincha tahlil kerak bo'lmaydi. \"Barcha allergenlarga\" tahlil odatda foydali emas va noto'g'ri xulosaga olib kelishi mumkin.",
      },
      {
        question: 'Kvinke shishi nima va u qanchalik xavfli?',
        answer:
          "Kvinke shishi — teri va shilliq qavat chuqur qatlamlarining shishi: lab, ko'z qovoqlari, til, tomoq shishadi. Tomoq va til shishsa, nafas olish qiyinlashishi mumkin — bu holatda darhol 103 raqamiga qo'ng'iroq qiling.",
      },
      {
        question: "Farg'ona va Qo'qonda teri allergiyasini qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog toshmani ko'zdan kechiradi, kerak bo'lsa tahlillarni buyuradi va davolash rejasini tuzadi; og'ir surunkali eshakemida immunobiologik terapiya ham o'tkaziladi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Аллергия на коже и крапивница: зудящие волдыри, покраснение и отёки. Причины, острая и хроническая крапивница, когда вызывать скорую и как лечат. Дерматолог Radeski Skin Clinic в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Крапивница — зудящие волдыри, которые исчезают без следа в течение 24 часов',
      'Отёк губ, языка или затруднённое дыхание — сразу скорая (103)',
      'Острая крапивница часто от еды, лекарств или инфекции; хроническая — часто без явной причины',
      'Основа лечения — исключить причину и антигистаминные, подобранные врачом',
      'При тяжёлой хронической крапивнице может применяться иммунобиологическая терапия',
    ],
    tags: ['Крапивница', 'Аллергия на коже', 'Контактный дерматит', 'Отёк Квинке', 'Дерматолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Крапивница длится дольше 6 недель или часто возвращается',
      'Сыпь появилась после начала нового лекарства',
      'Зуд мешает спать и работать',
      'Покраснение и пузырьки там, где кожа касалась косметики или металла',
      'Отёк лица и губ — срочно',
    ],
    faq: [
      {
        question: 'Заразна ли крапивница?',
        answer:
          'Нет. Крапивница — реакция иммунной системы, другим людям она не передаётся. Даже если она появилась на фоне инфекции, сама сыпь не заразна.',
      },
      {
        question: 'Сколько длится крапивница?',
        answer:
          'Каждый волдырь обычно исчезает в течение 24 часов. Острая крапивница длится от нескольких дней до 6 недель. Если сыпь возвращается дольше 6 недель — это хроническая крапивница, её нужно лечить вместе с дерматологом.',
      },
      {
        question: 'Какие анализы сдать при аллергии?',
        answer:
          'Вид обследования врач выбирает после расспроса и осмотра. При острой крапивнице с понятной причиной анализы часто не нужны. Анализ «на все аллергены» обычно бесполезен и может привести к неверным выводам.',
      },
      {
        question: 'Что такое отёк Квинке и чем он опасен?',
        answer:
          'Отёк Квинке — отёк глубоких слоёв кожи и слизистых: отекают губы, веки, язык, горло. Отёк горла и языка может затруднить дыхание — в этом случае сразу звоните 103.',
      },
      {
        question: 'Где лечить аллергию на коже в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог осмотрит сыпь, при необходимости назначит анализы и составит план лечения; при тяжёлой хронической крапивнице проводится иммунобиологическая терапия. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Skin allergy and hives: itchy welts, redness and swelling. Causes, acute and chronic hives, when to call an ambulance and how it is treated. Dermatologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Hives are itchy welts that fade without a trace within 24 hours',
      'Swollen lips or tongue or trouble breathing — call an ambulance (103) at once',
      'Acute hives often follow food, medicines or infection; chronic hives often have no clear cause',
      'Treatment rests on avoiding the cause and antihistamines chosen by a doctor',
      'Severe chronic hives may be treated with immunobiological therapy',
    ],
    tags: ['Hives', 'Urticaria', 'Skin allergy', 'Contact dermatitis', 'Dermatologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Hives last longer than 6 weeks or keep coming back',
      'A rash appeared after starting a new medicine',
      'Itching disturbs sleep and work',
      'Redness and blisters where skin touched cosmetics or metal',
      'Swelling of the face and lips — urgently',
    ],
    faq: [
      {
        question: 'Are hives contagious?',
        answer:
          'No. Hives are an immune reaction and do not spread to other people. Even when they appear during an infection, the rash itself is not contagious.',
      },
      {
        question: 'How long do hives last?',
        answer:
          'Each welt usually fades within 24 hours. Acute hives last from a few days to 6 weeks. If the rash keeps returning for more than 6 weeks, it is chronic hives and should be treated with a dermatologist.',
      },
      {
        question: 'Which allergy tests should I take?',
        answer:
          'The doctor chooses the tests after talking to you and examining you. Acute hives with an obvious cause often need no tests. Testing for "all allergens" is usually unhelpful and can be misleading.',
      },
      {
        question: 'What is angioedema and why is it dangerous?',
        answer:
          'Angioedema is swelling of the deeper layers of the skin and mucous membranes: the lips, eyelids, tongue and throat swell. Swelling of the throat and tongue can make breathing difficult — call 103 immediately.',
      },
      {
        question: 'Where can I get skin allergy treatment in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist examines the rash, orders tests when needed and builds a treatment plan; severe chronic hives can be treated with immunobiological therapy. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const URTICARIA_SKIN_ALLERGY_ARTICLE: Article = {
  id: 'art-eshakemi-teri-allergiyasi',
  slug: 'eshakemi-teri-allergiyasi',
  title: {
    uz: "Teri allergiyasi va eshakemi: belgilari, sabablari va davolash — qachon shoshilinch yordam kerak",
    ru: 'Аллергия на коже и крапивница: симптомы, причины и лечение — когда нужна срочная помощь',
    en: 'Skin Allergy and Hives: Symptoms, Causes and Treatment — When to Seek Urgent Help',
  },
  summary: {
    uz: URTICARIA_SKIN_ALLERGY_ARTICLE_CATALOG.uz.summary,
    ru: URTICARIA_SKIN_ALLERGY_ARTICLE_CATALOG.ru.summary,
    en: URTICARIA_SKIN_ALLERGY_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: URTICARIA_SKIN_ALLERGY_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: URTICARIA_SKIN_ALLERGY_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: URTICARIA_SKIN_ALLERGY_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Usmanova Mohinabonu Anvarovna',
    ru: 'Усманова Мохинабону Анваровна',
    en: 'Dr. Mohinabonu Anvarovna Usmanova',
  },
  date: '2026-10-30',
  image: '/articles/eshakemi-teri-allergiyasi-cover.jpg',
  images: {
    uz: '/articles/eshakemi-teri-allergiyasi-cover.jpg',
    ru: '/articles/eshakemi-teri-allergiyasi-cover.jpg',
    en: '/articles/eshakemi-teri-allergiyasi-cover.jpg',
  },
  views: 0,
};
