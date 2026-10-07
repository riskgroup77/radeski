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

const COVER = '/articles/normal-vs-pathological-hair-loss-radeski.webp';

function uzBody(): string {
  return `## Normal soch to'kilishi va patologik to'kilishni qanday farqlash mumkin?

Soch har kuni tushadi — ko'p hollarda bu tabiiy hayot siklining bir qismi. O'rtacha odam kuniga taxminan **50–100 ta** sochni yo'qotadi, yangi sochlar esa o'sishda davom etadi. Shuning uchun taroqdagi yoki bosh yuvgandan keyingi sochlar hali kasallik emas.

Lekin agar soch ancha ko'proq tushayotgani sezilsa, dumi ingichkalashsa, ajratma kengaysa yoki prilyalar bilan tushayotgan bo'lsa — **fiziologik to'kilish**ni **patologik yo'qotish**dan ajratish muhim.

![Normal va patologik soch to'kilishi — Radeski Skin Clinic](${COVER})

## Normal to'kilish: qachon xavotir olmaslik kerak?

Har bir soch o'sish, o'tish va tinash fazalaridan o'tadi; tinashdan keyin tushadi va yangi soch o'rni egallaydi.

Bosh terisi sog'lom bo'lsa, soch asta-sekin tushadi, **zichlik va qalinlik** barqaror qoladi.

Odatda quyidagilar normal:

- soch asosan yuvish yoki tarash paytida tushadi;
- zichlik sezilarli kamaymagan;
- ajratma kengaymagan;
- dumi sezilarli ingichkalanmagan;
- bosh terisida kal joylar yo'q;
- yangi sochlar o'sishda.

Faqat tushgan sochlar soniga qarab xulosa qilish to'g'ri emas: uzun va qalin sochli odam qisqa sochli odamga qaraganda ko'proq soch ko'rishi tabiiy.

## Qachon to'kilish patologik bo'ladi?

Asosiy mezon — taroqdagi sochlar soni emas, balki **zichlikning o'zgarishi** va to'kilish **xarakteri**.

[Trixolog-dermatolog](/uz/services/trihologiya-centr-lechenie-volos)ga murojaat qilish kerak, agar quyidagilardan biri yoki bir nechtasi bo'lsa:

### 1. To'kilish keskin kuchaygan

Ilgari yuvishdan keyin oz soch tushsa, endi dushda, taroqda yoki kiyimda katta prilyalar paydo bo'lsa — bu kuchaygan to'kilish belgisi bo'lishi mumkin.

Ko'p uchraydigan sabab — **telogen to'kilish** (telogen alopetsiya): kuchli stress, yuqori harorat yoki kasallik, operatsiya, keskin vazn yo'qotish, qattiq dieta, ozuqa yetishmovchiligi va boshqa yuklardan bir necha oy o'tgach paydo bo'lishi mumkin. Ba'zan yangi soch o'sa, eski telogen sochni itarib chiqaradi — shuning uchun to'kilish va tiklanish bir vaqtda bo'lishi mumkin.

### 2. Ajratma kengaygan

Ayollarda ba'zi alopetsiya turlarida birinchi belgi — markaziy ajratmaning asta-sekin kengayishi. Dum hajmi ham kamayishi mumkin; bu oylar davomida sekin rivojlanadi.

### 3. Dum ingichkalashgan

Doim bir xil usulda bog'laganda dum diametri asta-sekin kichiklashsa — bu zichlik pasayishini ko'rsatishi mumkin. Bosh terisi ko'proq ko'rinadigan bo'lsa — ayniqsa muhim.

### 4. Kal yoki alohida o'choqlar

Dumaloq yoki oval sochsiz zona — oddiy kunlik to'kilish emas. **Yoynasimon alopetsiya** va bosh terisi yallig'lanish kasalliklari follikulalarni shikastlashi mumkin. Bir necha kun yoki haftada tez paydo bo'lsa — kechiktirmang.

### 5. Soch noziklashgan

Ba'zan muammo faqat miqdor emas — soch **qalinligi** o'zgaradi. Ba'zi alopetsiyalarda terminal sochlar ingichka, qisqa «vellus» holatiga o'tadi — umumiy zichlik kamayadi.

### 6. Bosh terisi belgilari

Qichishish, kuchli parchalanish, qizarish, og'riq, qattiq qobiqlar yoki yallig'lanish — alohida sabab bilan shifokorga borish kerak.

## Nega soch kuchliroq tushadi?

Sabablar ko'p — «taxminiy» davolash har doim to'g'ri emas:

- stress;
- infeksiyalar va yuqori harorat;
- keskin ozish;
- qattiq dieta va yetarli emas ovqatlanish;
- temir va boshqa defitsitlar;
- qalqonsimon bez kasalliklari;
- gormonal o'zgarishlar;
- ba'zi dori-darmonlar;
- irsiy moyillik;
- bosh terisi kasalliklari;
- doimiy tortish (chok, dredlar);
- agressiv parvarish.

Bir kishida bir necha sabab bir vaqtda bo'lishi mumkin — masalan, stressdan keyingi telogen to'kilish mavjud ingichkalashish moyilligi fonida kuchayadi. Shuning uchun **mexanizmni** aniqlash muhim.

## Nega faqat taroqdagi sochlar soni yetarli emas?

Taroqdagi sochlar follikulada nima bo'layotganini ko'rsatmaydi. Shifokor baholaydi:

- to'kilish xarakteri;
- zichlik;
- bosh terisi;
- soch qalinligi va tuzilishi;
- yangi o'sayotgan sochlar;
- follikula og'zalari;
- zonalar bo'yicha taqsimot;
- yallig'lanish yoki chandiq belgilari.

**[Trixoskopiya](/uz/services/trixoskopiya)** — bosh terisi va sochni ko'p baravar kattalashtirib ko'rish; turli alopetsiyalarni, jumladan erta androgenezik va telogen to'kilishni farqlashga yordam beradi. Zarurat bo'lsa OAK, temir zaxirasi, qalqonsimon bez va boshqa tahlillar belgilanadi — ro'yxat konsultatsiya va anamnezdan keyin.

Batafsil: [Trixolog va trixoskopiya](/uz/articles/trixolog-va-trixoskopiya), [Soch to'kilishi diagnostikasi](/uz/services/trixoskopiya/trix-alopecia).

## O'zingiz kuzatish mumkinmi?

Bir xil yorug'lik va burchakda ajratma va soch chizig'ini vaqti-vaqti bilan suratga oling.

**Norma:** soch tushadi, lekin umumiy zichlik barqaror.

**Tashxis uchun:** to'kilish aniq kuchaygan + dum/kichiklashgan + ajratma kengaygan yoki o'choqlar.

Universal «patologiya chegarasi» raqami yo'q — faqat vannadagi sochlar soniga qarab xulosa qilish noto'g'ri.

## Qachon trixologga yozilish kerak?

Kuchayishni kutmaslik ma'qul:

- to'kilish davom etadi va bezovta qiladi;
- sochlar siyraklashgan;
- ajratma kengaymoqda;
- dum kichiklashgan;
- kal yoki o'choqlar bor;
- soch sezilarli noziklashgan;
- qichishish, parchalanish, qizarish;
- kasallik, stress yoki keskin ozishdan keyin boshlangan.

Sababi ertaroq aniqlansa, **[soch to'kilishini davolash](/uz/services/trihologiya-centr-lechenie-volos)** rejasi tezroq tuziladi — turli alopetsiyada terapiya farq qiladi; «universal» vositadan iborat emas. Zarurat bo'lsa **[plazmaterapiya (PRP)](/uz/articles/plazmotorapiya-soch-prp)** va boshqa usullar individual tanlanadi.

**[Trixolog konsultatsiyasi + trixoskopiya](/uz/services/trixoskopiya/trix-konsult)** — Radeski Skin & Aesthetic Clinic, Farg'ona va Qo'qon.

Bog'liq xizmatlar: [Trixologiya markazi](/uz/services/trihologiya-centr-lechenie-volos), [Trixoskopiya](/uz/services/trixoskopiya), [Plazmaterapiya soch uchun](/uz/articles/plazmotorapiya-soch-prp), [Narxlar](/uz/prices).`;
}

function ruBody(): string {
  return `## Как отличить нормальное выпадение волос от патологического?

Волосы выпадают каждый день — и в большинстве случаев это естественная часть жизненного цикла. В среднем человек теряет около **50–100 волос в сутки**, при этом новые волосы продолжают расти. Наличие волос на расчёске или после мытья головы **ещё не говорит о заболевании**.

Но если волос стало заметно больше, хвост тоньше, пробор шире или волосы выпадают прядями — важно отличить **физиологическое выпадение** от **патологической потери**.

![Нормальное и патологическое выпадение волос — Radeski Skin Clinic](${COVER})

## Нормальное выпадение: когда не стоит волноваться?

Каждый волос проходит фазы роста, перехода и покоя, после чего выпадает и освобождает место для нового.

При здоровой коже головы волосы выпадают постепенно, **густота и плотность** остаются стабильными.

Обычно нет оснований для беспокойства, если:

- волосы выпадают преимущественно при мытье или расчёсывании;
- не появилось заметного уменьшения густоты;
- пробор не стал шире;
- хвост не стал существенно тоньше;
- нет очагов облысения;
- волосы продолжают нормально расти.

Ориентироваться **только на количество** выпавших волос не стоит: при длинных или густых волосах их визуально больше, чем при короткой стрижке.

## Когда выпадение становится патологическим?

Главный ориентир — не волосы на расчёске, а **изменение густоты** и **характер выпадения**.

К **дерматологу-трихологу** стоит обратиться, если есть один или несколько признаков:

### 1. Выпадение резко усилилось

Если после мытья внезапно появились большие пряди на расчёске, в душе или на одежде — это может быть повышенное выпадение.

Частая причина — **телогеновое выпадение** (телогеновая алопеция): через несколько месяцев после стресса, лихорадки, болезни, операции, резкого похудения, строгой диеты, дефицита питательных веществ. При телогеновом выпадении усиление может быть связано с тем, что **новый волос уже растёт** и вытесняет старый в фазе покоя.

### 2. Стал заметно шире пробор

У женщин одним из первых признаков некоторых форм алопеции может быть постепенное расширение центрального пробора и уменьшение объёма хвоста — иногда это заметно лишь через месяцы.

### 3. Хвост стал тоньше

Если при одинаковой укладке диаметр хвоста постепенно уменьшается — это может свидетельствовать о снижении плотности, особенно когда лучше видна кожа головы.

### 4. Залысины или отдельные очаги

Круглый или овальный участок без волос — уже не обычное ежедневное выпадение. Возможны **очаговая (гнездная) алопеция** и воспалительные заболевания кожи головы. Если очаг появился быстро (дни–недели), консультацию откладывать не стоит.

### 5. Волосы стали заметно тоньше

Иногда проблема не столько в количестве, сколько в **структуре волоса**: толстые терминальные волосы становятся тоньше и короче — плотность снижается.

### 6. Изменения кожи головы

Зуд, выраженное шелушение, покраснение, болезненность, корочки или воспаление — дополнительные поводы обратиться к специалисту.

## Почему волосы начинают выпадать сильнее?

Причин много — лечить «наугад» не всегда правильно:

- стресс;
- инфекции и высокая температура;
- резкое похудение и диеты;
- дефицит железа и другие дефициты;
- заболевания щитовидной железы;
- гормональные изменения;
- лекарства;
- наследственность;
- заболевания кожи головы;
- постоянное натяжение волос;
- агрессивный уход.

У одного человека может сочетаться несколько факторов — например, телогеновое выпадение после стресса на фоне андрогенетической склонности. Важно определить **механизм**, а не только факт выпадения.

## Почему нельзя судить только по расчёске?

Количество волос на расчёске не показывает, что происходит в фолликулах. Врач оценивает характер выпадения, плотность, кожу головы, толщину волос, новый рост, фолликулярные отверстия, распределение по зонам, признаки воспаления.

**[Трихоскопия](/ru/services/trixoskopiya)** — осмотр с многократным увеличением; помогает различать виды алопеции, в том числе раннее андрогенетическое и телогеновое выпадение. При необходимости назначают анализы крови (ОАК, железо, щитовидная железа и др.) — перечень определяется после консультации.

Подробнее: [Врач-трихолог и трихоскопия](/ru/articles/trixolog-va-trixoskopiya), [Диагностика выпадения волос](/ru/services/trixoskopiya/trix-alopecia).

## Можно ли понять самостоятельно?

Периодически фотографируйте пробор и линию роста при одинаковом освещении.

**Норма:** волосы выпадают, но общая густота существенно не меняется.

**Повод для диагностики:** выпадение заметно сильнее + уменьшается объём хвоста + расширяется пробор или появляются участки поредения.

Универсального числа волос, после которого выпадение «автоматически» патологическое, **не существует**.

## Когда обратиться к трихологу?

Не ждите, пока выпадение станет выраженным. Запишитесь, если:

- выпадение сохраняется и беспокоит;
- волосы стали реже;
- расширяется пробор;
- уменьшился объём хвоста;
- появились залысины или очаги;
- волосы значительно тоньше;
- зуд, шелушение, покраснение или болезненность;
- выпадение после болезни, стресса или резкого похудения.

Чем раньше установлена причина, тем раньше подберут **[лечение выпадения волос](/ru/services/trihologiya-centr-lechenie-volos)** — для разных типов алопеции тактика различается. При показаниях возможна **[плазмотерапия волос (PRP)](/ru/articles/plazmotorapiya-soch-prp)**.

**[Консультация трихолога + трихоскопия](/ru/services/trixoskopiya/trix-konsult)** — Radeski Skin & Aesthetic Clinic, Фергана и Коканд.

Связанные услуги: [Трихология](/ru/services/trihologiya-centr-lechenie-volos), [Трихоскопия](/ru/services/trixoskopiya), [Плазмотерапия волос](/ru/articles/plazmotorapiya-soch-prp), [Цены](/ru/prices).`;
}

function enBody(): string {
  return `## How to tell normal hair shedding from pathological hair loss

Hair falls out every day — for most people that is a normal part of the hair cycle. On average we lose about **50–100 hairs per day** while new hairs keep growing. Hair on your brush or after washing **does not automatically mean disease**.

If you notice more shedding, a thinner ponytail, a wider part, or clumps of hair, it matters to separate **physiological shedding** from **pathological hair loss**.

![Normal vs pathological hair loss — Radeski Skin Clinic](${COVER})

## Normal shedding: when not to worry

Each hair goes through growth, transition, and resting phases, then sheds so a new hair can grow.

With a healthy scalp, shedding is gradual and **density stays fairly stable**.

You usually do not need to worry if:

- hair mostly comes out when washing or brushing;
- overall thickness has not clearly dropped;
- your part has not widened;
- your ponytail is not much thinner;
- there are no bald patches;
- hair continues to grow normally.

Do **not** rely on hair count alone — long or thick hair looks like more shedding than a short cut.

## When shedding becomes pathological

The key is not hairs on the brush but **changing density** and **how** hair is lost.

See a **dermatologist-trichologist** if you notice:

### 1. Much heavier shedding

Sudden large clumps in the shower, on the brush, or on clothing may signal increased shedding.

A common cause is **telogen effluvium** — often months after stress, fever, illness, surgery, rapid weight loss, strict dieting, or nutrient deficiency. New growth can push out resting hairs, so shedding and regrowth can overlap.

### 2. A wider part

In women, a slowly widening central part and less voluminous ponytail can be an early sign of some alopecia types.

### 3. A thinner ponytail

If you tie your hair the same way and the ponytail diameter shrinks over time — especially if scalp shows through — density may be falling.

### 4. Bald patches

A round or oval hairless area is not routine daily shedding. **Alopecia areata** and inflammatory scalp conditions can damage follicles. Fast onset (days to weeks) needs prompt care.

### 5. Thinner hair strands

Sometimes the issue is **hair quality**: terminal hairs miniaturize — overall density drops.

### 6. Scalp symptoms

Itching, flaking, redness, pain, crusting, or inflammation are reasons to see a specialist.

## Why does shedding increase?

Many factors — treating blindly is often wrong:

- stress;
- infections and fever;
- rapid weight loss and diets;
- iron and other deficiencies;
- thyroid disease;
- hormonal shifts;
- medications;
- genetics;
- scalp disorders;
- tight hairstyles;
- harsh care.

Several causes can coexist — e.g. telogen effluvium after stress on top of androgenetic thinning. The **mechanism** must be clarified.

## Why the brush count is not enough

Hairs on a comb do not show follicle activity. Your doctor assesses shedding pattern, density, scalp, hair thickness, new growth, follicular openings, zone distribution, and inflammation.

**[Trichoscopy](/en/services/trixoskopiya)** — magnified scalp and hair exam; helps distinguish alopecia types including early androgenetic and telogen shedding. Blood tests (CBC, iron stores, thyroid, etc.) may be added after consultation.

Read more: [Trichologist and trichoscopy](/en/articles/trixolog-va-trixoskopiya), [Hair loss diagnosis](/en/services/trixoskopiya/trix-alopecia).

## Can you monitor at home?

Photograph your part and hairline in the same light and angle over time.

**Normal:** shedding without clear loss of overall density.

**See a doctor:** clearly heavier shedding plus thinner ponytail, wider part, or thinning areas.

There is **no universal hair count** that defines pathology.

## When to see a trichologist

Do not wait for severe loss. Book if:

- shedding persists and worries you;
- hair looks sparser;
- the part is widening;
- ponytail volume is down;
- patches appear;
- strands are much finer;
- itch, scale, redness, or pain;
- shedding followed illness, stress, or major weight loss.

Earlier diagnosis means earlier **[hair loss treatment](/en/services/trihologiya-centr-lechenie-volos)** — plans differ by alopecia type. **[PRP for hair](/en/articles/plazmotorapiya-soch-prp)** may be used when indicated.

**[Trichologist consultation + trichoscopy](/en/services/trixoskopiya/trix-konsult)** — Radeski Skin & Aesthetic Clinic, Fergana and Kokand.

Related: [Trichology center](/en/services/trihologiya-centr-lechenie-volos), [Trichoscopy](/en/services/trixoskopiya), [Plasma therapy for hair](/en/articles/plazmotorapiya-soch-prp), [Prices](/en/prices).`;
}

export const NORMAL_VS_PATHOLOGICAL_HAIR_LOSS_RADESKI_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Normal soch to\'kilishi (50–100/kun) va patologik alopetsiya belgilari: ajratma, dum, o\'choq, telogen to\'kilish. Trixoskopiya va trixolog — Radeski Skin Clinic.',
    body: uzBody(),
    keyTakeaways: [
      'Kuniga 50–100 soch tushishi ko\'pincha normal',
      'Asosiy mezon — zichlik va to\'kilish xarakteri',
      'Ajratma, dum, o\'choq va bosh terisi belgilari — tashxis sababi',
      'Trixoskopiya alopetsiya turini farqlashga yordam beradi',
      'Erta trixolog konsultatsiyasi davolashni tezlashtiradi',
    ],
    tags: [
      'Soch to\'kilishi',
      'Patologik to\'kilish',
      'Telogen alopetsiya',
      'Trixolog',
      'Trixoskopiya',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'To\'kilish keskin kuchaygan va bezovta qilsa',
      'Ajratma kengaygan yoki dum ingichkalashgan',
      'Kal yoki o\'choq paydo bo\'lsa',
      'Qichishish, parchalanish yoki qizarish bosh terisida',
    ],
    faq: [
      {
        question: 'Kuniga nechta soch tushishi normal?',
        answer: 'O\'rtacha 50–100 ta; uzun sochda vizual ko\'proq ko\'rinishi mumkin — muhimi zichlik barqarorligi.',
      },
      {
        question: 'Telogen to\'kilish qachon boshlanadi?',
        answer: 'Stress, kasallik yoki operatsiyadan odatda 2–3 oy o\'tgach; sabab va reja trixolog bilan aniqlanadi.',
      },
      {
        question: 'Trixoskopiya og\'riqlimi?',
        answer: 'Yo\'q, bu og\'riqsiz kattalashtirilgan ko\'rik; Radeski da trixolog bilan birga o\'tkaziladi.',
      },
    ],
  },
  ru: {
    summary:
      'Как понять, норма ли выпадение волос? Признаки патологии, телогеновое выпадение, когда нужны трихолог и трихоскопия — Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      '50–100 волос в день часто бывает нормой',
      'Важнее густота и характер выпадения, а не расчёска',
      'Пробор, хвост, очаги и кожа головы — сигналы к диагностике',
      'Трихоскопия помогает различить типы алопеции',
      'Ранняя консультация трихолога ускоряет лечение',
    ],
    tags: [
      'Выпадение волос',
      'Патологическое выпадение волос',
      'Телогеновое выпадение',
      'Алопеция',
      'Трихолог',
      'Трихоскопия',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Выпадение усилилось и не проходит',
      'Расширился пробор или стал тоньше хвост',
      'Появились залысины или очаги',
      'Зуд, шелушение или воспаление кожи головы',
    ],
    faq: [
      {
        question: 'Сколько волос в день — норма?',
        answer: 'В среднем 50–100; при длинных волосах визуально кажется больше — ориентир — стабильная густота.',
      },
      {
        question: 'Что такое телогеновое выпадение?',
        answer: 'Временное усиление выпадения после стресса, болезни или похудения; диагноз и лечение определяет трихолог.',
      },
      {
        question: 'Нужна ли трихоскопия при выпадении волос?',
        answer: 'Часто да — она показывает состояние фолликулов и помогает выбрать правильную тактику лечения.',
      },
    ],
  },
  en: {
    summary:
      'Is daily hair shedding normal? Signs of pathological loss, telogen effluvium, and when trichologist + trichoscopy help — Radeski Skin Clinic.',
    body: enBody(),
    keyTakeaways: [
      'About 50–100 hairs/day is often normal',
      'Density and shedding pattern matter more than brush count',
      'Part line, ponytail, patches, and scalp symptoms need workup',
      'Trichoscopy helps classify alopecia types',
      'Early trichologist visit improves outcomes',
    ],
    tags: [
      'Hair loss',
      'Pathological hair shedding',
      'Telogen effluvium',
      'Alopecia',
      'Trichologist',
      'Trichoscopy',
      'Radeski Skin Clinic',
    ],
    whenToSeeDoctor: [
      'Shedding has increased and persists',
      'Wider part or thinner ponytail',
      'Bald patches or thinning areas',
      'Itch, flaking, or inflamed scalp',
    ],
    faq: [
      {
        question: 'How many hairs per day is normal?',
        answer: 'Roughly 50–100; long hair can look like more — focus on whether density is stable.',
      },
      {
        question: 'What is telogen effluvium?',
        answer: 'Temporary increased shedding after stress, illness, or weight loss; your trichologist confirms the cause.',
      },
      {
        question: 'Do I need trichoscopy?',
        answer: 'Often yes — it assesses follicles and guides the right treatment plan.',
      },
    ],
  },
};

export const NORMAL_VS_PATHOLOGICAL_HAIR_LOSS_RADESKI_ARTICLE: Article = {
  id: 'art-soch-tokilishi-normal-patologiya-radeski',
  slug: 'soch-tokilishi-normal-va-patologiya-radeski',
  title: {
    uz: 'Normal soch to\'kilishi va patologik to\'kilishni qanday farqlash mumkin?',
    ru: 'Как отличить нормальное выпадение волос от патологического?',
    en: 'How to Tell Normal Hair Shedding from Pathological Hair Loss',
  },
  summary: {
    uz: NORMAL_VS_PATHOLOGICAL_HAIR_LOSS_RADESKI_ARTICLE_CATALOG.uz.summary,
    ru: NORMAL_VS_PATHOLOGICAL_HAIR_LOSS_RADESKI_ARTICLE_CATALOG.ru.summary,
    en: NORMAL_VS_PATHOLOGICAL_HAIR_LOSS_RADESKI_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: NORMAL_VS_PATHOLOGICAL_HAIR_LOSS_RADESKI_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: NORMAL_VS_PATHOLOGICAL_HAIR_LOSS_RADESKI_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: NORMAL_VS_PATHOLOGICAL_HAIR_LOSS_RADESKI_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Ashurov Dilshod Davlatovich',
    ru: 'Ашуров Дильшод Давлатович',
    en: 'Dr. Dilshod Davlatovich Ashurov',
  },
  date: '2026-09-28',
  image: COVER,
  images: {
    uz: COVER,
    ru: COVER,
    en: COVER,
  },
  views: 0,
};
