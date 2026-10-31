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
 * Eczema in depth. The condition page (/conditions/ekzema) gives the short overview; this
 * article answers the patient questions: types, causes, how it differs from similar rashes,
 * treatment (incl. phototherapy and immunobiological therapy at the clinic), winter hand care.
 */

function uzBody(): string {
  return `Ekzema — terining surunkali yallig'lanish kasalligi: qizarish, mayda pufakchalar, namlanish, po'st tashlash va kuchli qichishish bilan kechadi. U ko'pincha qo'l, oyoq, yuz va tirsak-tizza burmalarida paydo bo'ladi, qishda va stressdan keyin kuchayadi. Ekzema yuqumli emas: u boshqa odamga o'tmaydi. To'g'ri tashxis va davolash bilan toshmani tez nazoratga olish va qaytalanishlarni ancha kamaytirish mumkin.

## Ekzema qanday ko'rinadi?

Kasallikning bosqichiga qarab belgilari o'zgaradi:

- **o'tkir bosqich** — qizargan, shishgan teri, mayda pufakchalar, ular yorilib namlanadi;
- **o'tkir osti bosqich** — qobiqlar, po'st tashlash, qichishish davom etadi;
- **surunkali bosqich** — teri qalinlashadi, quruq va dag'al bo'lib qoladi, yoriqlar paydo bo'ladi.

Qichishish ekzemaning asosiy belgisi: u ko'pincha kechasi kuchayadi va uyquni buzadi. Tirnash terini shikastlaydi va infeksiya qo'shilishiga sabab bo'ladi.

## Ekzemaning turlari

- **Kontakt ekzema** — teri ta'sirlovchi yoki allergen bilan to'qnashganda: yuvish vositalari, sement, lateks qo'lqop, nikel (soat, kamar to'qasi), kosmetika.
- **Qo'l ekzemasi** — suv, sovun va kimyoviy vositalar bilan ko'p ishlaydiganlarda: oshpaz, sartarosh, tibbiyot xodimlari, uy bekalari.
- **Dishidrotik ekzema** — kaft va barmoqlar yon tomonida qattiq qichiydigan mayda pufakchalar.
- **Nummulyar (tangasimon) ekzema** — oyoq va qo'lda tanga kattaligidagi dumaloq o'choqlar.
- **Mikrobli ekzema** — yara, kuyish yoki zamburug' infeksiyasi atrofida.
- **Varikoz ekzema** — vena kasalligi bor odamlarda boldirda.

Atopik dermatit va seboreyali dermatit ham ekzemaga yaqin kasalliklar, lekin ularning o'z xususiyatlari bor — ular haqida alohida maqolalar bor.

## Nima uchun paydo bo'ladi?

Ekzemada terining himoya to'sig'i zaiflashadi: teri namlikni tez yo'qotadi va ta'sirlovchilarga kuchli javob beradi. Kasallikni qo'zg'atuvchi omillar:

- tez-tez qo'l yuvish, issiq suv, agressiv sovun va yuvish vositalari;
- allergenlar — nikel, kosmetika tarkibi, ba'zi dori surtmalari;
- sovuq va quruq havo, isitish moslamalari — qishda kasallik ko'pincha qaytadi;
- stress, charchoq, uyqu yetishmasligi;
- teri infeksiyalari va zamburug';
- oshqozon-ichak, endokrin va vena kasalliklari.

## Ekzemani nima bilan adashtirish mumkin?

Ekzemaga o'xshash toshmalar ko'p, ularni davolash esa har xil:

- **psoriaz** — chegarasi aniq, kumushrang po'stli blyashkalar;
- **teri zamburug'i** — halqasimon o'choqlar, laborator tahlil bilan tasdiqlanadi;
- **qo'tir (skabiyez)** — barmoqlar orasida qichishish, kechasi kuchayadi, oila a'zolarida ham bo'ladi;
- **eshakemi** — tez paydo bo'lib, bir necha soatda yo'qoladigan pufaklar.

Shuning uchun "ekzema kremi"ni o'zboshimchalik bilan surtishdan oldin dermatologga ko'rining. Kerak bo'lsa, shifokor dermatoskopiya, qirindi tahlili va boshqa tekshiruvlarni o'tkazadi.

## Ekzema qanday davolanadi?

Davolash rejasini dermatolog ekzema turi, joyi va og'irligiga qarab tuzadi:

- **asosiy parvarish** — har kuni emolyent (namlovchi) kremlar, yumshoq yuvish vositalari;
- **tashqi davolash** — yallig'lanishga qarshi kremlar va malhamlar qisqa kurs bilan;
- **qichishishni kamaytirish** — shifokor tavsiyasi bilan;
- **infeksiya qo'shilganda** — antibakterial yoki zamburug'ga qarshi vositalar;
- **fototerapiya** — surunkali va keng tarqalgan ekzemada [UVB 311 nm fototerapiya](/uz/services/dermatologiya/fototerapiya) qo'llanishi mumkin;
- **og'ir holatlarda** — [immunobiologik terapiya](/uz/services/dermatologiya/immunobiologik-terapiya) va boshqa tizimli davolash, faqat shifokor nazoratida.

Gormonli kremlarni uzoq muddat o'zboshimchalik bilan surtish mumkin emas: ular terini yupqalashtiradi, to'satdan to'xtatilganda esa toshma kuchayib qaytishi mumkin. Har qanday dori vositasini shifokor tayinlaydi.

## Qishda qo'l ekzemasidan qanday saqlanish kerak?

- Qo'lni iliq (issiq emas) suvda, yumshoq vosita bilan yuving va darhol namlovchi krem surting.
- Idish yuvish va tozalashda paxta ichlikli rezina qo'lqop kiying.
- Ko'chada sovuqda qo'lqop kiying, xonadagi havoni namlang.
- Tirnamang: qichishishda sovuq kompress yoki krem yordam beradi.
- Yangi kosmetika va yuvish vositalarini avval kichik joyda sinab ko'ring.

## Qachon dermatologga murojaat qilish kerak?

- Toshma 1–2 hafta ichida o'tmasa yoki tez tarqalsa.
- Teri namlansa, yiringlasa, og'risa yoki isitma chiqsa.
- Qichishish uyquga xalaqit bersa.
- Ekzema yuz, ko'z atrofi yoki jinsiy a'zolarda paydo bo'lsa.
- Bolada ekzema belgilari bo'lsa.
- Ilgari yordam bergan krem endi ta'sir qilmasa.

## Farg'ona va Qo'qonda ekzemani davolash

Radeski Skin Clinic'da [dermatolog](/uz/services/dermatologiya) toshmani ko'zdan kechiradi, kerak bo'lsa dermatoskopiya va tahlillar o'tkazadi, ekzema turini aniqlaydi va davolash hamda uy parvarishi rejasini tuzadi. Klinikada fototerapiya va immunobiologik terapiya ham bor.

- [Ekzema — kasallik haqida qisqacha](/uz/conditions/ekzema);
- [Dermatolog Farg'onada](/uz/fargona/dermatolog) — qabul, narxlar va shifokorlar;
- [Dermatolog Qo'qonda](/uz/qoqon/dermatolog) — Qo'qon filialida qabul;
- o'xshash kasalliklar: [Atopik dermatit](/uz/articles/art-atopic-dermatitis), [Seboreyali dermatit](/uz/articles/art-seboreyali-dermatit), [Psoriaz: tashxis va davolash](/uz/articles/art-psoriaz-tashxis-davolash-radeski).

Ekzema qanchalik erta davolansa, shunchalik tez nazoratga olinadi va teri qalinlashib, surunkali bo'lib qolmaydi.`;
}

function ruBody(): string {
  return `Экзема — хроническое воспалительное заболевание кожи: покраснение, мелкие пузырьки, мокнутие, шелушение и сильный зуд. Чаще всего она появляется на руках, ногах, лице и в сгибах локтей и коленей, обостряется зимой и после стресса. Экзема не заразна — она не передаётся другим людям. При правильной диагностике и лечении высыпания быстро удаётся взять под контроль, а обострения становятся заметно реже.

## Как выглядит экзема?

Проявления зависят от стадии:

- **острая стадия** — красная отёчная кожа, мелкие пузырьки, которые вскрываются и мокнут;
- **подострая стадия** — корочки, шелушение, зуд сохраняется;
- **хроническая стадия** — кожа утолщается, становится сухой и грубой, появляются трещины.

Главный симптом экземы — зуд: он часто усиливается ночью и мешает спать. Расчёсы повреждают кожу и открывают путь инфекции.

## Виды экземы

- **Контактная экзема** — после контакта с раздражителем или аллергеном: моющие средства, цемент, латексные перчатки, никель (часы, пряжка ремня), косметика.
- **Экзема рук** — у тех, кто много работает с водой, мылом и химией: повара, парикмахеры, медики, домохозяйки.
- **Дисгидротическая экзема** — мелкие сильно зудящие пузырьки на ладонях и боковых поверхностях пальцев.
- **Нуммулярная (монетовидная) экзема** — круглые очаги размером с монету на руках и ногах.
- **Микробная экзема** — вокруг ран, ожогов или очагов грибковой инфекции.
- **Варикозная экзема** — на голенях у людей с заболеваниями вен.

Атопический и себорейный дерматит — близкие к экземе заболевания со своими особенностями, о них есть отдельные статьи.

## Почему появляется экзема?

При экземе ослаблен защитный барьер кожи: она быстро теряет влагу и бурно реагирует на раздражители. Обострение провоцируют:

- частое мытьё рук, горячая вода, агрессивное мыло и бытовая химия;
- аллергены — никель, компоненты косметики, некоторые мази;
- холодный сухой воздух и отопление — зимой экзема часто возвращается;
- стресс, усталость, недосып;
- кожные инфекции и грибок;
- заболевания ЖКТ, эндокринной системы и вен.

## С чем можно спутать экзему?

Похожих высыпаний много, а лечение у них разное:

- **псориаз** — бляшки с чёткими границами и серебристыми чешуйками;
- **грибок кожи** — кольцевидные очаги, подтверждается анализом;
- **чесотка** — зуд между пальцами, сильнее ночью, бывает у нескольких членов семьи;
- **крапивница** — волдыри, которые появляются и исчезают за несколько часов.

Поэтому прежде чем мазать «крем от экземы», покажитесь дерматологу. При необходимости врач проведёт дерматоскопию, соскоб и другие исследования.

## Как лечат экзему?

План лечения дерматолог составляет с учётом вида экземы, её локализации и тяжести:

- **базовый уход** — ежедневные эмоленты (увлажняющие кремы), мягкие очищающие средства;
- **наружная терапия** — противовоспалительные кремы и мази короткими курсами;
- **уменьшение зуда** — по назначению врача;
- **при присоединении инфекции** — антибактериальные или противогрибковые средства;
- **фототерапия** — при хронической и распространённой экземе может применяться [узкополосная фототерапия UVB 311 нм](/ru/services/dermatologiya/fototerapiya);
- **в тяжёлых случаях** — [иммунобиологическая терапия](/ru/services/dermatologiya/immunobiologik-terapiya) и другое системное лечение, только под контролем врача.

Нельзя самостоятельно долго мазать гормональные кремы: они истончают кожу, а при резкой отмене высыпания могут вернуться с новой силой. Любые лекарства назначает врач.

## Как уберечь руки от экземы зимой

- Мойте руки тёплой (не горячей) водой с мягким средством и сразу наносите увлажняющий крем.
- Для мытья посуды и уборки надевайте резиновые перчатки с хлопковой подкладкой.
- На морозе носите перчатки, дома увлажняйте воздух.
- Не расчёсывайте: при зуде помогает прохладный компресс или крем.
- Новую косметику и бытовую химию сначала проверяйте на небольшом участке кожи.

## Когда обращаться к дерматологу?

- Высыпания не проходят за 1–2 недели или быстро распространяются.
- Кожа мокнет, гноится, болит или поднялась температура.
- Зуд мешает спать.
- Экзема появилась на лице, вокруг глаз или на половых органах.
- Признаки экземы у ребёнка.
- Крем, который раньше помогал, перестал действовать.

## Лечение экземы в Фергане и Коканде

В Radeski Skin Clinic [дерматолог](/ru/services/dermatologiya) осмотрит высыпания, при необходимости проведёт дерматоскопию и анализы, определит вид экземы и составит план лечения и домашнего ухода. В клинике есть фототерапия и иммунобиологическая терапия.

- [Экзема — коротко о заболевании](/ru/conditions/ekzema);
- [Дерматолог в Фергане](/ru/fargona/dermatolog) — приём, цены и врачи;
- [Дерматолог в Коканде](/ru/qoqon/dermatolog) — приём в кокандском филиале;
- похожие заболевания: [Атопический дерматит](/ru/articles/art-atopic-dermatitis), [Себорейный дерматит](/ru/articles/art-seboreyali-dermatit), [Псориаз: диагностика и лечение](/ru/articles/art-psoriaz-tashxis-davolash-radeski).

Чем раньше начато лечение, тем быстрее экзему удаётся взять под контроль — и тем меньше риск, что кожа утолщится и процесс станет хроническим.`;
}

function enBody(): string {
  return `Eczema is a chronic inflammatory skin condition: redness, tiny blisters, weeping, flaking and intense itching. It most often appears on the hands, feet, face and in the folds of the elbows and knees, and flares in winter and after stress. Eczema is not contagious — it does not pass to other people. With the right diagnosis and treatment the rash comes under control quickly and flares become much less frequent.

## What does eczema look like?

The signs depend on the stage:

- **acute** — red, swollen skin with tiny blisters that break and weep;
- **subacute** — crusts and flaking, the itch continues;
- **chronic** — the skin thickens, becomes dry and rough, and cracks.

Itching is the main symptom: it is often worse at night and disturbs sleep. Scratching damages the skin and lets infection in.

## Types of eczema

- **Contact eczema** — after contact with an irritant or allergen: detergents, cement, latex gloves, nickel (watches, belt buckles), cosmetics.
- **Hand eczema** — in people who work with water, soap and chemicals: cooks, hairdressers, health workers, homemakers.
- **Dyshidrotic eczema** — small, very itchy blisters on the palms and the sides of the fingers.
- **Nummular (discoid) eczema** — round, coin-sized patches on the arms and legs.
- **Microbial eczema** — around wounds, burns or fungal infection.
- **Varicose (stasis) eczema** — on the lower legs in people with vein disease.

Atopic dermatitis and seborrheic dermatitis are closely related conditions with their own features — there are separate articles about them.

## Why does eczema appear?

In eczema the skin barrier is weakened: the skin loses moisture quickly and reacts strongly to irritants. Common triggers:

- frequent hand washing, hot water, harsh soap and household chemicals;
- allergens — nickel, cosmetic ingredients, some ointments;
- cold, dry air and indoor heating — eczema often returns in winter;
- stress, fatigue, lack of sleep;
- skin infections and fungus;
- digestive, endocrine and vein disorders.

## What can be mistaken for eczema?

Many rashes look similar, and they are treated differently:

- **psoriasis** — sharply bordered plaques with silvery scales;
- **fungal infection** — ring-shaped patches, confirmed by a lab test;
- **scabies** — itching between the fingers, worse at night, often in several family members;
- **hives** — welts that appear and fade within hours.

So before using an "eczema cream" on your own, see a dermatologist. When needed, the doctor performs dermoscopy, a skin scraping and other tests.

## How is eczema treated?

The dermatologist builds the plan around the type, location and severity of the eczema:

- **basic care** — daily emollients (moisturisers) and gentle cleansers;
- **topical treatment** — anti-inflammatory creams and ointments in short courses;
- **itch relief** — as prescribed by the doctor;
- **if infection develops** — antibacterial or antifungal products;
- **phototherapy** — for chronic and widespread eczema, [narrowband UVB 311 nm phototherapy](/en/services/dermatologiya/fototerapiya) may be used;
- **severe cases** — [immunobiological therapy](/en/services/dermatologiya/immunobiologik-terapiya) and other systemic treatment, only under a doctor's supervision.

Do not use steroid creams on your own for long periods: they thin the skin, and stopping them abruptly can make the rash come back worse. All medicines are prescribed by a doctor.

## Protecting your hands from eczema in winter

- Wash your hands in warm (not hot) water with a mild cleanser and apply moisturiser straight away.
- Wear cotton-lined rubber gloves for dishes and cleaning.
- Wear gloves outdoors in the cold and humidify the air at home.
- Do not scratch: a cool compress or cream eases the itch.
- Test new cosmetics and household products on a small area of skin first.

## When should you see a dermatologist?

- The rash does not clear in 1–2 weeks or spreads quickly.
- The skin weeps, oozes pus, hurts, or you have a fever.
- Itching keeps you awake.
- Eczema appears on the face, around the eyes or on the genitals.
- A child shows signs of eczema.
- A cream that used to help no longer works.

## Eczema treatment in Fergana and Kokand

At Radeski Skin Clinic a [dermatologist](/en/services/dermatologiya) examines the rash, performs dermoscopy and tests when needed, identifies the type of eczema and builds a treatment and home-care plan. The clinic also offers phototherapy and immunobiological therapy.

- [Eczema — the condition in brief](/en/conditions/ekzema);
- [Dermatologist in Fergana](/en/fargona/dermatolog) — visits, prices and doctors;
- [Dermatologist in Kokand](/en/qoqon/dermatolog) — visits at the Kokand branch;
- similar conditions: [Atopic dermatitis](/en/articles/art-atopic-dermatitis), [Seborrheic dermatitis](/en/articles/art-seboreyali-dermatit), [Psoriasis: diagnosis and treatment](/en/articles/art-psoriaz-tashxis-davolash-radeski).

The earlier eczema is treated, the faster it comes under control — and the lower the risk that the skin thickens and the condition becomes chronic.`;
}

export const ECZEMA_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Ekzema: qizarish, pufakchalar, namlanish va kuchli qichishish. Turlari, sabablari, psoriaz va zamburug'dan farqi, davolash va qishda qo'l parvarishi. Farg'ona va Qo'qonda dermatolog qabuli.",
    body: uzBody(),
    keyTakeaways: [
      "Ekzema — terining surunkali yallig'lanishi: qizarish, pufakchalar, namlanish, po'st va qichishish",
      'Yuqumli emas, boshqa odamga o\'tmaydi',
      "Turlari ko'p: kontakt, qo'l, dishidrotik, nummulyar, mikrobli, varikoz ekzema",
      "Psoriaz, zamburug', qo'tir va eshakemiga o'xshaydi — tashxisni dermatolog qo'yadi",
      "Davolash: emolyentlar, tashqi vositalar, kerak bo'lsa fototerapiya va immunobiologik terapiya",
      "Gormonli kremlarni o'zboshimchalik bilan uzoq surtmang",
    ],
    tags: ['Ekzema', 'Dermatit', "Qo'l ekzemasi", 'Qichishish', 'Dermatolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Toshma 1–2 hafta ichida o'tmasa yoki tez tarqalsa",
      "Teri namlansa, yiringlasa, og'risa yoki isitma chiqsa",
      'Qichishish uyquga xalaqit bersa',
      "Ekzema yuz, ko'z atrofi yoki jinsiy a'zolarda paydo bo'lsa",
      "Bolada ekzema belgilari bo'lsa",
    ],
    faq: [
      {
        question: 'Ekzema yuqumlimi?',
        answer:
          "Yo'q. Ekzema terining himoya to'sig'i zaiflashishi va ta'sirlovchilarga kuchli javobi bilan bog'liq, u boshqa odamga yuqmaydi. Faqat tirnalgan joyga infeksiya qo'shilishi mumkin — bunday holatda shifokorga murojaat qiling.",
      },
      {
        question: 'Ekzemani butunlay davolash mumkinmi?',
        answer:
          "Ekzema ko'pincha surunkali kechadi va qaytishi mumkin. To'g'ri davolash va muntazam parvarish bilan toshma tez nazoratga olinadi, qaytalanishlar esa ancha kamayadi. Kontakt ekzemada allergen aniqlanib, undan saqlanilsa, kasallik uzoq vaqt qaytmasligi mumkin.",
      },
      {
        question: "Ekzema va atopik dermatitning farqi nima?",
        answer:
          "Atopik dermatit — ekzemaning bir turi bo'lib, ko'pincha bolalikdan boshlanadi va allergik kasalliklar (allergik rinit, astma) bilan birga keladi. Boshqa ekzema turlari esa har qanday yoshda tashqi omillar ta'sirida paydo bo'lishi mumkin.",
      },
      {
        question: 'Ekzemada qanday krem surtish kerak?',
        answer:
          "Har kuni namlovchi (emolyent) krem surtish foydali. Yallig'lanishga qarshi va gormonli vositalarni esa faqat dermatolog tayinlaydi: noto'g'ri tanlangan krem toshmani kuchaytirishi yoki terini yupqalashtirishi mumkin.",
      },
      {
        question: "Farg'ona va Qo'qonda ekzemani qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog toshmani ko'zdan kechiradi, kerak bo'lsa dermatoskopiya va tahlil o'tkazadi va davolash rejasini tuzadi. Klinikada fototerapiya va immunobiologik terapiya ham bor. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Экзема: покраснение, пузырьки, мокнутие и сильный зуд. Виды, причины, отличие от псориаза и грибка, лечение и уход за руками зимой. Дерматолог Radeski Skin Clinic в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Экзема — хроническое воспаление кожи: покраснение, пузырьки, мокнутие, шелушение и зуд',
      'Экзема не заразна и не передаётся другим людям',
      'Видов много: контактная, экзема рук, дисгидротическая, нуммулярная, микробная, варикозная',
      'Похожа на псориаз, грибок, чесотку и крапивницу — диагноз ставит дерматолог',
      'Лечение: эмоленты, наружные средства, при необходимости фототерапия и иммунобиологическая терапия',
      'Не мажьте гормональные кремы самостоятельно долгое время',
    ],
    tags: ['Экзема', 'Дерматит', 'Экзема рук', 'Зуд кожи', 'Дерматолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Высыпания не проходят за 1–2 недели или быстро распространяются',
      'Кожа мокнет, гноится, болит или поднялась температура',
      'Зуд мешает спать',
      'Экзема на лице, вокруг глаз или на половых органах',
      'Признаки экземы у ребёнка',
    ],
    faq: [
      {
        question: 'Заразна ли экзема?',
        answer:
          'Нет. Экзема связана с ослабленным барьером кожи и её бурной реакцией на раздражители, другим людям она не передаётся. Но в расчёсы может попасть инфекция — в этом случае обратитесь к врачу.',
      },
      {
        question: 'Можно ли вылечить экзему навсегда?',
        answer:
          'Экзема часто протекает хронически и может возвращаться. При правильном лечении и регулярном уходе высыпания быстро удаётся взять под контроль, а обострения становятся заметно реже. При контактной экземе, если найти аллерген и избегать его, болезнь может надолго не возвращаться.',
      },
      {
        question: 'Чем экзема отличается от атопического дерматита?',
        answer:
          'Атопический дерматит — одна из форм экземы: обычно начинается в детстве и сочетается с аллергическими заболеваниями (аллергический ринит, астма). Другие виды экземы могут появиться в любом возрасте под действием внешних факторов.',
      },
      {
        question: 'Каким кремом мазать экзему?',
        answer:
          'Ежедневно полезно наносить увлажняющий крем (эмолент). Противовоспалительные и гормональные средства назначает только дерматолог: неправильно подобранный крем может усилить высыпания или истончить кожу.',
      },
      {
        question: 'Где лечить экзему в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог осмотрит кожу, при необходимости проведёт дерматоскопию и анализы и составит план лечения. В клинике есть фототерапия и иммунобиологическая терапия. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Eczema: redness, blisters, weeping and intense itching. Types, causes, how it differs from psoriasis and fungus, treatment and winter hand care. Dermatologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Eczema is chronic skin inflammation: redness, blisters, weeping, flaking and itching',
      'Eczema is not contagious',
      'There are many types: contact, hand, dyshidrotic, nummular, microbial, varicose eczema',
      'It resembles psoriasis, fungus, scabies and hives — a dermatologist makes the diagnosis',
      'Treatment: emollients, topical products, and phototherapy or immunobiological therapy when needed',
      'Do not use steroid creams on your own for long periods',
    ],
    tags: ['Eczema', 'Dermatitis', 'Hand eczema', 'Itchy skin', 'Dermatologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'The rash does not clear in 1–2 weeks or spreads quickly',
      'The skin weeps, oozes pus, hurts, or you have a fever',
      'Itching keeps you awake',
      'Eczema on the face, around the eyes or on the genitals',
      'A child shows signs of eczema',
    ],
    faq: [
      {
        question: 'Is eczema contagious?',
        answer:
          'No. Eczema is linked to a weakened skin barrier and a strong reaction to irritants; it does not spread to other people. Scratched skin can become infected, though — in that case see a doctor.',
      },
      {
        question: 'Can eczema be cured for good?',
        answer:
          'Eczema is often chronic and can return. With the right treatment and regular care the rash comes under control quickly and flares become much less frequent. In contact eczema, finding and avoiding the allergen can keep it away for a long time.',
      },
      {
        question: 'What is the difference between eczema and atopic dermatitis?',
        answer:
          'Atopic dermatitis is one form of eczema: it usually starts in childhood and goes together with allergic conditions such as hay fever and asthma. Other types of eczema can appear at any age, triggered by external factors.',
      },
      {
        question: 'Which cream should I use for eczema?',
        answer:
          'A daily moisturiser (emollient) helps. Anti-inflammatory and steroid products are prescribed only by a dermatologist: the wrong cream can make the rash worse or thin the skin.',
      },
      {
        question: 'Where can I get eczema treatment in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist examines the skin, performs dermoscopy and tests when needed and builds a treatment plan. The clinic also offers phototherapy and immunobiological therapy. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const ECZEMA_ARTICLE: Article = {
  id: 'art-ekzema',
  slug: 'ekzema',
  title: {
    uz: "Ekzema: turlari, sabablari va davolash — qizarish, pufakchalar va qichishish",
    ru: 'Экзема: виды, причины и лечение — покраснение, мокнутие и зуд кожи',
    en: 'Eczema: Types, Causes and Treatment — Red, Weeping and Itchy Skin',
  },
  summary: {
    uz: ECZEMA_ARTICLE_CATALOG.uz.summary,
    ru: ECZEMA_ARTICLE_CATALOG.ru.summary,
    en: ECZEMA_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: ECZEMA_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: ECZEMA_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: ECZEMA_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-10-28',
  image: '/articles/ekzema-cover.jpg',
  images: {
    uz: '/articles/ekzema-cover.jpg',
    ru: '/articles/ekzema-cover.jpg',
    en: '/articles/ekzema-cover.jpg',
  },
  views: 0,
};
