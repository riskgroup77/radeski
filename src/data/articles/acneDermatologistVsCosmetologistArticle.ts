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
  return `## Nega akne ni faqat kosmetolog emas, dermatolog ko‘rishi kerak?

Akne (ug‘ri kasalligi) — terining oddiy “iflosligi” yoki vaqtinchalik kosmetik nuqson emas. Bu **surunkali yallig‘lanish kasalligi**: tashxis, og‘irlik bahosi va kompleks reja talab qiladi. Doimiy toshmalar, og‘riqli yallig‘lanishlar yoki toshmadan keyin dog‘-chandiq qolayotgan bo‘lsa, birinchi qadam — **dermatolog** ko‘rigi.

Kosmetologik muolajalar teri parvarishining bir qismi sifatida foydali bo‘lishi mumkin. Lekin ular ko‘pincha kasallikning **sababini** olib tashlamaydi. Shuning uchun “tozalash + krem” ni davolashning o‘rniga qo‘yish — vaqt yo‘qotish va ba’zan terini yomonlashtirish xavfini beradi.

## Akne — kasallik, “iflos teri” emas

Akne odatda bir nechta omilning birgalikda ishlashi natijasida rivojlanadi:

- yog‘ bezlarining faolligi oshishi;
- teshiklarning tiqilishi;
- yallig‘lanish;
- teri mikroflorasidagi o‘zgarishlar.

Bunga gormonal omillar, irsiyat, ba’zi dori vositalari va boshqa holatlar ham qo‘shilishi mumkin.

Shuning uchun davolash faqat yuz tozalash yoki kosmetika tanlash bilan cheklanmasligi kerak. Zamonaviy klinik yondashuvda tashqi (mahalliy) vositalar, kerak bo‘lsa tizimli davolash va ayrim hollarda apparat usullari qo‘llanadi. Tanlov **og‘irlik va shaklga** bog‘liq — buni ko‘rikda dermatolog belgilaydi.

## Avval nima uchun dermatolog kerak?

### 1. To‘g‘ri tashxis

Yuzdagi har toshma akne emas. Tashqi ko‘rinishi o‘xshash bo‘lishi mumkin:

- follikulit;
- perioral dermatit;
- rozasea.

Noto‘g‘ri tashxisda oylar davomida muolaja va kremlar ishlatiladi — muammo yechilmaydi, ba’zan esa teri holati yomonlashadi. Xalqaro dermatologiya amaliyoti ham davolashni tanlashdan oldin **aniq tashxis** ni ta’kidlaydi.

### 2. Og‘irlikni baholash

Akne turlicha bo‘ladi: bir nechta komedondan og‘ir yallig‘lanish va tugunli shakllargacha.

Yengil shaklda mahalliy vositalar va to‘g‘ri uy parvarishi yetarli bo‘lishi mumkin. O‘rtacha va og‘ir akne da esa kuchliroq reja — jumladan tizimli dorilar — kerak bo‘lishi mumkin. Buni o‘zingiz aniqlash qiyin: “ko‘p toshma” har doim og‘irlikni anglatmaydi, “kam toshma” esa chuqur yallig‘lanishni yashirishi mumkin.

### 3. Maqsad — nafaqat hozirgi toshmalarni olib tashlash

Davolashning muhim maqsadi: mavjud chiqishlarni kamaytirish **va** yangilarining chiqishini, chandiq hosil bo‘lishini oldini olish.

Faol akne qancha uzoq davom etsa va shakli qancha og‘irroq bo‘lsa, **postakne** (dog‘, chandiq) xavfi shuncha yuqori. Bu ayniqsa og‘riqli yallig‘lanishlar va tugunli shakllarda muhim.

## Nega yuz tozalashning o‘zi yetarli emas?

Mexanik tozalash vaqtincha tashqi ko‘rinishni yaxshilashi, ba’zi komedonlarni ochishi mumkin. Lekin u akne rivojlanishining **barcha mexanizmlarini** to‘xtatmaydi.

Yallig‘lanish davom etsa, yangi elementlar yana chiqadi.

Bundan tashqari, yallig‘langan toshmalarni o‘zingiz siqish yoki noto‘g‘ri mexanik tozalash terini shikastlaydi: yallig‘lanishdan keyingi dog‘ va chandiq xavfini oshiradi.

Shuning uchun kosmetologik muolajalar akne da **tibbiy davolashga qo‘shimcha** bo‘lishi kerak — uning o‘rnini bosmasligi kerak.

## Akne ni faqat kosmetika bilan davolash mumkinmi?

To‘g‘ri parvarish haqiqatan muhim: yuvish, namlash va quyoshdan himoya teri to‘sig‘ini saqlashga yordam beradi, davolashni qulayroq qiladi.

Lekin kosmetika va dori terapiyasi — **turli vazifalar**.

Faol akne da dermatolog isbotlangan ta’sirli vositalarni belgilashi mumkin: masalan, mahalliy retinoidlar, benzoil peroksid, azelain kislotasi yoki holatga qarab boshqa preparatlar. Ayrim hollarda tizimli dorilar qo‘llanadi.

Retseptli antibiotiklar yoki tizimli vositalarni o‘zingiz boshlash mumkin emas.

## Akne terida iz qoldirishi mumkin

Yallig‘lanish o‘tgach ham muammo davom etishi mumkin:

- qizil yoki jigarrang dog‘lar;
- notekis rel’ef;
- atrofik va boshqa turdagi chandiqlar;
- kengaygan teshiklar va tekstura o‘zgarishi.

Shuning uchun “o‘zi o‘tib ketadi” deb kutish xavfli. Og‘irlik va davomiylik oshgani sari chandiq xavfi ham oshadi.

## Akne faqat teriga ta’sir qilmaydi

Ug‘ri kasalligi o‘zini baholash, kayfiyat, muloqot va hayot sifatiga sezilarli ta’sir qilishi mumkin. Psixologik noqulaylik yengil shaklda ham bo‘lishi mumkin.

Shuning uchun “bu oddiy toshma, o‘tib ketadi” gap har doim to‘g‘ri emas. Toshmalar bezovta qilsa, qayta-qayta chiqsa yoki iz qoldirsa — dermatologga murojaat qilish muammoni oshirib ko‘rsatish emas, **to‘g‘ri qadam**.

## Qachon ayniqsa dermatolog kerak?

Konsultatsiyaga yozilish o‘rinli, agar:

- toshmalar muntazam chiqsa;
- og‘riqli yallig‘lanishlar bo‘lsa;
- ko‘krak, orqa yoki yelkaga tarqalsa;
- toshmadan keyin dog‘ qolsa;
- chandiq paydo bo‘lsa;
- retseptsiz kosmetika yordam bermasa;
- vaqtincha yaxshilanib, keyin yana qaytsa;
- toshmalar katta yoshda boshlangan bo‘lsa;
- o‘zini baholash va hayot sifatiga kuchli ta’sir qilsa.

## Kosmetolog qachon haqiqatan kerak?

Kosmetolog shifokor terini baholagandan **keyin**, kompleks yondashuvning bir qismi sifatida foydali bo‘lishi mumkin: parvarish, ba’zi muolajalar, postakne oqibatlarini yumshatish.

Lekin **faol ug‘ri kasalligida** asos — tibbiy tashxis va davolash.

## Asosiy xulosa

Kosmetolog teriga **parvarish** beradi. Dermatolog **kasallikni** davolaydi.

Akne da bu mutaxassislar birga ishlashi mumkin. Eng oqilona tartib:

1. dermatologda tashxis va og‘irlikni aniqlash;
2. davolash rejasini tanlash;
3. kerak bo‘lsa kosmetologik muolajalarni qo‘shish.

Qancha erta to‘g‘ri davolash boshlangan bo‘lsa, kasallikni nazorat qilish va dog‘-chandiq xavfini kamaytirish imkoniyati shuncha yuqori.

## Radeski Skin Clinic da qanday yordam beramiz?

Farg‘ona va Qo‘qonda dermatolog ko‘rigidan so‘ng individual reja tuziladi: mahalliy yoki tizimli davolash, kerak bo‘lsa apparat usullari va postakne korreksiyasi. Maqsad — faqat “bugungi toshma”ni yashirish emas, **barqaror nazorat**.

Agar toshmalar bezovta qilsa, yillar davomida kosmetika bilan tajriba qilish shart emas. Diagnostika va shaxsiy reja uchun dermatologga murojaat qiling.`;
}

function ruBody(): string {
  return `## Почему акне важно лечить у дерматолога, а не только у косметолога

Акне (угревая болезнь) — это не просто косметический недостаток кожи. Это **хроническое воспалительное заболевание**, которое требует правильной диагностики и комплексного лечения. Поэтому при постоянных высыпаниях, болезненных воспалительных элементах или следах после акне важно обратиться именно к **врачу-дерматологу**.

Косметологические процедуры могут быть полезны как часть ухода за кожей, но они не всегда устраняют причину заболевания.

## Акне — это заболевание, а не «грязная кожа»

Акне развивается из-за сочетания нескольких факторов: повышенной активности сальных желез, закупорки пор, воспаления и изменений в составе кожной микрофлоры. На течение болезни также могут влиять гормональные факторы, наследственность, некоторые лекарственные препараты и другие состояния.

Поэтому лечение акне не должно сводиться только к чистке лица или подбору косметики. Современные клинические подходы предусматривают наружные средства, при необходимости системную терапию и в отдельных случаях аппаратные методы. Выбор зависит от тяжести и формы заболевания.

## Почему сначала нужен дерматолог?

### 1. Нужен правильный диагноз

Не каждое высыпание на лице — акне. Похоже могут выглядеть, например, фолликулит, периоральный дерматит или розацеа.

При ошибочном диагнозе можно месяцами делать процедуры и покупать средства, которые не решают проблему или даже ухудшают кожу. Перед выбором лечения важна точная диагностика.

### 2. Дерматолог определяет тяжесть

Акне бывает разным: от небольшого числа комедонов до выраженных воспалительных и узловых элементов.

При лёгкой форме может хватить наружной терапии и грамотного домашнего ухода. При умеренном и тяжёлом акне часто нужна более интенсивная схема, включая системные препараты. Самостоятельно понять, какая терапия нужна, сложно.

### 3. Цель — не только убрать уже появившиеся прыщи

Одна из главных задач лечения — не просто убрать текущие высыпания, но и снизить появление новых элементов и риск рубцов.

Чем дольше сохраняется активное акне и чем тяжелее его форма, тем выше риск постакне и рубцевания. Это особенно важно при болезненных воспалительных элементах и узловых формах.

## Почему одной чистки лица недостаточно?

Механическая чистка может временно улучшить вид кожи и помочь убрать часть комедонов. Но она не устраняет все механизмы развития акне.

Если воспаление продолжается, новые элементы появятся снова.

Кроме того, самостоятельное выдавливание воспалительных элементов или неправильная механическая чистка травмируют кожу и повышают риск поствоспалительных пятен и рубцов.

Поэтому косметологические процедуры при акне стоит рассматривать как **дополнение** к медицинскому лечению, а не как его замену.

## Можно ли лечить акне только косметикой?

Косметический уход действительно важен. Правильное очищение, увлажнение и солнцезащита поддерживают кожный барьер и делают лечение комфортнее.

Но косметика и лекарственная терапия — разные задачи.

При активном акне дерматолог может назначить средства с доказанной эффективностью: например, топические ретиноиды, бензоилпероксид, азелаиновую кислоту или другие препараты по клинической ситуации. В отдельных случаях используют системные препараты.

Самостоятельно начинать антибиотики или системные средства, особенно рецептурные, не следует.

## Акне может оставлять следы

Даже после стихания воспаления проблема может продолжаться в виде:

- красных или коричневых пятен;
- неровного рельефа кожи;
- атрофических и других рубцов;
- расширенных пор и изменения текстуры.

Именно поэтому важно начинать лечение своевременно, а не ждать, пока «пройдёт само». Риск рубцевания растёт при большей тяжести и длительности акне.

## Акне влияет не только на кожу

Угревая болезнь может заметно влиять на самооценку, настроение, общение и качество жизни. Психологический дискомфорт возможен даже при относительно лёгкой форме.

Поэтому фраза «это просто прыщи, они сами пройдут» не всегда справедлива. Если высыпания беспокоят, повторяются или уже оставляют следы — обращение к дерматологу не преувеличение, а правильный шаг.

## Когда особенно важно обратиться к дерматологу?

Записаться на консультацию стоит, если:

- прыщи появляются регулярно;
- есть болезненные воспалительные элементы;
- высыпания распространяются на грудь, спину или плечи;
- после прыщей остаются пятна;
- появляются рубцы;
- безрецептурная косметика не помогает;
- акне возвращается после временного улучшения;
- высыпания появились во взрослом возрасте;
- акне сильно влияет на самооценку и качество жизни.

## Когда косметолог действительно нужен?

Косметолог полезен **после** оценки кожи врачом и в рамках комплексного подхода: уход и отдельные процедуры для улучшения кожи и последствий акне.

Но при активной угревой болезни основой должна оставаться медицинская диагностика и лечение.

## Главное

Косметолог помогает ухаживать за кожей. Дерматолог лечит заболевание.

При акне эти специалисты могут работать вместе. Наиболее рациональный порядок: сначала диагноз и степень тяжести у дерматолога, затем лечение, и при необходимости — косметологические процедуры.

Чем раньше начать правильное лечение, тем больше шансов контролировать заболевание и снизить риск пятен и рубцов.

## Как помогают в Radeski Skin Clinic

В Фергане и Коканде после осмотра дерматолога составляют индивидуальный план: наружная или системная терапия, при необходимости аппаратные методы и коррекция постакне. Цель — устойчивый контроль, а не только «чистый день».

Если прыщи и высыпания беспокоят, не обязательно годами экспериментировать с косметикой. Обратитесь к дерматологу за диагностикой и персональным планом.`;
}

function enBody(): string {
  return `## Why acne belongs with a dermatologist — not only a cosmetologist

Acne is not a minor cosmetic flaw or “dirty skin.” It is a **chronic inflammatory disease**. Persistent breakouts, painful inflamed lesions, or marks after acne need a proper diagnosis and a structured plan — which starts with a **dermatologist**.

Cosmetic procedures can support skin care. They do not always treat the cause. Replacing medical care with facials and creams often wastes months and can make skin worse.

## Acne is a medical condition

Acne usually comes from several factors together: more active oil glands, clogged pores, inflammation, and shifts in the skin microbiome. Hormones, family history, some medicines, and other conditions can also play a role.

That is why treatment should not be reduced to a facial or a new cosmetic routine. Current clinical practice uses topical medicines, systemic therapy when needed, and device-based methods in selected cases. The choice depends on **severity and type** — decided at a medical exam.

## Why see a dermatologist first?

### 1. The diagnosis must be right

Not every facial rash is acne. Folliculitis, perioral dermatitis, and rosacea can look similar.

A wrong label means months of procedures and products that miss the problem — or irritate the skin. International dermatology practice stresses accurate diagnosis before treatment.

### 2. Severity guides the plan

Acne ranges from a few comedones to marked inflammation and nodules.

Mild disease may respond to topical therapy and a sensible home routine. Moderate and severe acne often need a stronger plan, including systemic medicines. Guessing this yourself is unreliable.

### 3. The goal is more than clearing today’s spots

Treatment should reduce current lesions **and** lower new breakouts and scarring.

The longer active acne lasts and the more severe it is, the higher the risk of post-acne marks and scars — especially with painful inflammatory and nodular forms.

## Why a facial alone is not enough

A mechanical cleanse can temporarily improve appearance and clear some comedones. It does not stop every mechanism of acne.

If inflammation continues, new lesions return.

Squeezing inflamed spots yourself or an overly aggressive cleanse can injure skin and raise the risk of post-inflammatory spots and scars.

Cosmetic procedures at acne should **add to** medical treatment, not replace it.

## Can cosmetics treat acne on their own?

Good skincare matters. Gentle cleansing, moisturiser, and sun protection support the barrier and make therapy more comfortable.

Cosmetics and medicines still have different jobs.

For active acne a dermatologist may prescribe proven options such as topical retinoids, benzoyl peroxide, azelaic acid, or other medicines as the case requires. Systemic drugs are used in selected situations.

Do not start antibiotics or other systemic, especially prescription, medicines on your own.

## Acne can leave traces

Even after inflammation settles, the problem may continue as:

- red or brown marks;
- uneven texture;
- atrophic and other scars;
- enlarged pores and changed skin feel.

Waiting for it to “go away on its own” raises scarring risk as severity and duration increase.

## Acne is not only about the skin

Acne can affect self-esteem, mood, social life, and quality of life. Psychological burden can appear even in relatively mild disease.

“They’re just pimples, they’ll pass” is not always true. If breakouts bother you, keep returning, or already leave marks, seeing a dermatologist is a reasonable step — not an overreaction.

## When a dermatologist visit is especially important

Book a consult if:

- breakouts keep returning;
- lesions are painful and inflamed;
- they spread to the chest, back, or shoulders;
- spots remain after pimples;
- scars are forming;
- over-the-counter cosmetics do not help;
- acne returns after a short improvement;
- breakouts started in adulthood;
- acne strongly affects self-esteem and daily life.

## When a cosmetologist is genuinely useful

A cosmetologist can help **after** a doctor has assessed the skin, as part of a combined plan: home care and selected procedures for skin quality and post-acne.

During active acne, medical diagnosis and treatment should remain the core.

## The takeaway

A cosmetologist supports **skin care**. A dermatologist treats the **disease**.

They can work together. The sensible order is: diagnosis and severity with a dermatologist, then treatment, then cosmetic procedures if needed.

The earlier the right plan starts, the better the chance of control and fewer spots and scars.

## Care at Radeski Skin Clinic

In Fergana and Kokand a dermatologist builds an individual plan: topical or systemic therapy, device-based methods when appropriate, and post-acne correction. The aim is lasting control, not only a clear day.

If pimples and breakouts bother you, you do not have to experiment with cosmetics for years. See a dermatologist for diagnosis and a personal plan.`;
}

export const ACNE_DERMATOLOGIST_VS_COSMETOLOGIST_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Akne ni nima uchun kosmetolog emas, dermatolog davolashi kerak: tashxis, og‘irlik, postakne xavfi va Farg‘ona hamda Qo‘qonda individual reja.',
    body: uzBody(),
    keyTakeaways: [
      'Akne — surunkali yallig‘lanish kasalligi, “iflos teri” emas',
      'Avval dermatolog tashxis va og‘irlikni belgilaydi — har toshma akne emas',
      'Yuz tozalash va kosmetika sababni olib tashlamaydi; ular davolashga qo‘shimcha',
      'Qancha erta to‘g‘ri reja — shuncha kam dog‘ va chandiq xavfi',
    ],
    tags: [
      'Akne',
      'Ug‘ri kasalligi',
      'Akne davolash',
      'Dermatolog akne',
      'Yuzdagi toshma',
      'Postakne',
      'Akne chandiqlari',
      'Kosmetolog yoki dermatolog',
      'Kattalarda akne',
      'O‘smirlarda akne',
      'Fargona',
      'Qoqon',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Toshmalar muntazam chiqsa',
      'Og‘riqli yallig‘lanishlar bo‘lsa',
      'Ko‘krak, orqa yoki yelkaga tarqalsa',
      'Dog‘ yoki chandiq qolayotgan bo‘lsa',
      'Retseptsiz kosmetika yordam bermasa',
      'Vaqtincha yaxshilanib, keyin qaytsa',
      'Katta yoshda boshlangan bo‘lsa',
      'O‘zini baholash va hayot sifatiga kuchli ta’sir qilsa',
    ],
    faq: [
      {
        question: 'Akne ni faqat kosmetolog davolashi mumkinmi?',
        answer:
          'Kosmetolog parvarish va ba’zi muolajalarda yordam beradi. Faol akne da asos — dermatolog tashxisi va davolashi. Eng yaxshi tartib: avval shifokor, keyin kerak bo‘lsa kosmetolog.',
      },
      {
        question: 'Yuz tozalash yetarlimi?',
        answer:
          'Tozalash vaqtincha ko‘rinishni yaxshilashi mumkin, lekin yallig‘lanish va yangi toshmalarni to‘xtatmaydi. Noto‘g‘ri tozalash dog‘ va chandiq xavfini oshiradi.',
      },
      {
        question: 'Kosmetika dori o‘rnini bosadimi?',
        answer:
          'Yo‘q. Yuvish, namlash va SPF muhim, lekin faol akne da isbotlangan dori vositalari kerak bo‘lishi mumkin — ularni dermatolog belgilaydi.',
      },
      {
        question: 'Nega o‘zim siqmasligim kerak?',
        answer:
          'Siqish terini shikastlaydi, yallig‘lanishni kuchaytiradi va postakne (dog‘, chandiq) xavfini oshiradi.',
      },
      {
        question: 'Farg‘ona yoki Qo‘qonda qayerga murojaat qilaman?',
        answer:
          'Radeski Skin Clinic’da dermatolog ko‘rigidan so‘ng individual reja tuziladi: davolash, kerak bo‘lsa apparat usullari va postakne korreksiyasi.',
      },
    ],
  },
  ru: {
    summary:
      'Почему акне нужно лечить у дерматолога, а не только у косметолога: диагноз, тяжесть, риск постакне и индивидуальный план в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Акне — хроническое воспалительное заболевание, а не «грязная кожа»',
      'Сначала дерматолог ставит диагноз и оценивает тяжесть — не каждое высыпание является акне',
      'Чистка и косметика не заменяют лечение; они дополняют его',
      'Чем раньше правильный план, тем ниже риск пятен и рубцов',
    ],
    tags: [
      'акне',
      'угревая болезнь',
      'лечение акне',
      'лечение акне у дерматолога',
      'дерматолог акне',
      'прыщи на лице',
      'угри на лице',
      'как лечить акне',
      'лечение прыщей',
      'постакне',
      'рубцы после акне',
      'косметолог или дерматолог',
      'врач дерматолог',
      'акне у взрослых',
      'акне у подростков',
      'Фергана',
      'Коканд',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Прыщи появляются регулярно',
      'Есть болезненные воспалительные элементы',
      'Высыпания на груди, спине или плечах',
      'После прыщей остаются пятна или рубцы',
      'Безрецептурная косметика не помогает',
      'Акне возвращается после временного улучшения',
      'Высыпания начались во взрослом возрасте',
      'Акне сильно влияет на самооценку и качество жизни',
    ],
    faq: [
      {
        question: 'Можно ли лечить акне только у косметолога?',
        answer:
          'Косметолог помогает с уходом и отдельными процедурами. При активном акне основа — диагностика и лечение у дерматолога. Рациональный порядок: сначала врач, затем при необходимости косметолог.',
      },
      {
        question: 'Достаточно ли чистки лица?',
        answer:
          'Чистка может временно улучшить вид, но не останавливает воспаление и новые высыпания. Неправильная чистка повышает риск пятен и рубцов.',
      },
      {
        question: 'Заменит ли косметика лекарства?',
        answer:
          'Нет. Очищение, увлажнение и SPF важны, но при активном акне часто нужны препараты с доказанной эффективностью — их назначает дерматолог.',
      },
      {
        question: 'Почему нельзя выдавливать прыщи?',
        answer:
          'Выдавливание травмирует кожу, усиливает воспаление и повышает риск постакне — пятен и рубцов.',
      },
      {
        question: 'Куда обратиться в Фергане или Коканде?',
        answer:
          'В Radeski Skin Clinic после осмотра дерматолога составляют индивидуальный план: лечение, при необходимости аппаратные методы и коррекция постакне.',
      },
    ],
  },
  en: {
    summary:
      'Why acne should be treated by a dermatologist, not only a cosmetologist: diagnosis, severity, post-acne risk, and a personal plan in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Acne is a chronic inflammatory disease, not “dirty skin”',
      'A dermatologist first confirms the diagnosis and severity — not every rash is acne',
      'Facials and cosmetics do not replace medical treatment; they support it',
      'Earlier correct care means a lower risk of spots and scars',
    ],
    tags: [
      'acne',
      'acne treatment',
      'dermatologist for acne',
      'pimples on the face',
      'how to treat acne',
      'post-acne',
      'acne scars',
      'cosmetologist or dermatologist',
      'adult acne',
      'teenage acne',
      'Fergana',
      'Kokand',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Breakouts keep returning',
      'Lesions are painful and inflamed',
      'They spread to the chest, back, or shoulders',
      'Spots or scars remain after pimples',
      'Over-the-counter cosmetics do not help',
      'Acne returns after a short improvement',
      'Breakouts started in adulthood',
      'Acne strongly affects self-esteem and quality of life',
    ],
    faq: [
      {
        question: 'Can a cosmetologist treat acne alone?',
        answer:
          'A cosmetologist can help with care and some procedures. Active acne still needs a dermatologist’s diagnosis and treatment. Best order: doctor first, then cosmetics if needed.',
      },
      {
        question: 'Is a facial enough?',
        answer:
          'A facial may look better for a while, but it does not stop inflammation or new lesions. A harsh cleanse can raise the risk of marks and scars.',
      },
      {
        question: 'Can cosmetics replace medicines?',
        answer:
          'No. Cleansing, moisturiser, and SPF matter, but active acne often needs proven medicines prescribed by a dermatologist.',
      },
      {
        question: 'Why shouldn’t I squeeze pimples?',
        answer:
          'Squeezing injures the skin, increases inflammation, and raises the risk of post-acne spots and scars.',
      },
      {
        question: 'Where can I get help in Fergana or Kokand?',
        answer:
          'At Radeski Skin Clinic a dermatologist builds a personal plan: treatment, device-based methods if needed, and post-acne correction.',
      },
    ],
  },
};

export const ACNE_DERMATOLOGIST_VS_COSMETOLOGIST_ARTICLE: Article = {
  id: 'art-akne-dermatolog-kosmetolog',
  slug: 'akne-dermatolog-kosmetolog',
  title: {
    uz: 'Akne ni nima uchun kosmetolog emas, dermatolog davolashi kerak',
    ru: 'Почему акне нужно лечить у дерматолога, а не у косметолога',
    en: 'Why Acne Needs a Dermatologist — Not Just a Cosmetologist',
  },
  summary: {
    uz: ACNE_DERMATOLOGIST_VS_COSMETOLOGIST_ARTICLE_CATALOG.uz.summary,
    ru: ACNE_DERMATOLOGIST_VS_COSMETOLOGIST_ARTICLE_CATALOG.ru.summary,
    en: ACNE_DERMATOLOGIST_VS_COSMETOLOGIST_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: ACNE_DERMATOLOGIST_VS_COSMETOLOGIST_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: ACNE_DERMATOLOGIST_VS_COSMETOLOGIST_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: ACNE_DERMATOLOGIST_VS_COSMETOLOGIST_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-08-13',
  image: '/articles/adult-acne-cover.png',
  images: {
    uz: '/articles/adult-acne-cover.png',
    ru: '/articles/adult-acne-cover.png',
    en: '/articles/adult-acne-cover.png',
  },
  views: 0,
};
