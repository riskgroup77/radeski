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
 * Melanoma itself (the mole-check article art-xol-tekshiruvi-dermatoskopiya covers routine mole
 * checks and ABCDE in detail — this one links to it). Points: early signs (ABCDE in brief, "ugly
 * duckling", new or changing spot, nodular type, nail and sole melanoma), risk factors, why early
 * detection matters, what NOT to do (salon cauterising, folk remedies, waiting), how the
 * dermato-oncologist checks (dermatoscopy, PhotoFinder mapping, biopsy + histology). Treatment is
 * surgical removal by specialists; staging is decided by the oncologist. No survival statistics.
 */

function uzBody(): string {
  return `Melanoma — pigment hujayralari (melanotsitlar)dan rivojlanadigan teri o'smasi. U teri saratonlari ichida eng xavflisi hisoblanadi, chunki boshqa a'zolarga tarqalishga moyil. Shu bilan birga melanoma terining ustida, ko'z bilan ko'rinadigan joyda boshlanadi — demak, uni erta payqash mumkin. Bu maqola melanomaning o'zi haqida: u qanday ko'rinadi, kimda ko'proq uchraydi va shubha tug'ilganda nima qilish kerak. Oddiy xollarni tekshirish haqida alohida yozganmiz: [xollar va dermatoskopiya](/uz/articles/art-xol-tekshiruvi-dermatoskopiya).

## Melanoma nima?

Melanoma mavjud xoldan ham, ilgari toza bo'lgan teri ustida yangi dog' sifatida ham paydo bo'lishi mumkin — ko'pincha aynan yangi dog'dan boshlanadi. U tananing istalgan joyida chiqishi mumkin: orqada, oyoqda, bosh terisida, kaft va tovonda, tirnoq ostida va hatto shilliq qavatlarda. Erkaklarda ko'proq orqada, ayollarda — boldirda uchraydi.

## Erta belgilar

Shubhali dog'ni tanishning bir necha oddiy usuli bor:

- **ABCDE** — asimmetriya, notekis chegara, bir nechta rang, 6 mm dan katta diametr va eng muhimi — o'zgarish. Har bir harf xollar haqidagi maqolada batafsil yozilgan.
- **"Xunuk o'rdakcha"** — tanadagi boshqa xollarga o'xshamaydigan, ular orasida ajralib turadigan bitta dog'.
- **Yangi yoki o'zgarayotgan dog'** — ayniqsa 30 yoshdan keyin paydo bo'lgan yoki bir necha hafta-oy ichida kattalashgan, qoraygan, bo'rtib chiqqan dog'.
- **Tez o'sadigan tugun** — melanomaning ba'zi turlari ABCDE ga to'g'ri kelmaydi: simmetrik, bir xil rangli qora, qizil yoki hatto teri rangidagi qattiq tugun bo'lib, bir necha hafta ichida o'sadi.
- **Qichishish, qonash, yara** — dog' yuzasi qobiqlanib, o'z-o'zidan qonay boshlasa.

## Tirnoq va tovondagi melanoma

Bu joylardagi melanoma ko'pincha kech aniqlanadi, chunki uni "lat yegan joy" yoki "zamburug'" deb o'ylashadi.

- **Tirnoqda** — tirnoq bo'ylab paydo bo'lgan va kengayib borayotgan jigarrang yoki qora chiziq, ayniqsa pigment tirnoq atrofidagi teriga o'tsa. Zarbadan keyingi qon quyilishi tirnoq o'sishi bilan oldinga siljiydi, melanoma esa joyida qoladi. Batafsil: [tirnoq rangining o'zgarishi](/uz/articles/art-tirnoq-rangi-ozgarishi).
- **Tovon va kaftda** — notekis qo'ng'ir yoki qora dog', bitmaydigan "yara" yoki "qadoq" ichidagi qora joy.

## Xavf omillari

- quyoshda kuyish, ayniqsa bolalik va o'smirlikda pufak chiqqan kuyishlar;
- solyariy;
- ko'p xollar (50 dan ortiq) yoki atipik — notekis, yirik xollar;
- yirik tug'ma xol;
- oilada melanoma bo'lgani;
- oq teri, ochiq rangli ko'z, sariq yoki malla soch, sepkillar, quyoshda tez kuyish;
- ilgari melanoma yoki boshqa teri saratoni bo'lgani;
- immunitetni pasaytiradigan davolash.

Xavf omillari bo'lmagan odamda ham melanoma chiqishi mumkin, shuning uchun har qanday o'zgarayotgan dog' tekshirilishi kerak.

## Nega erta aniqlash shunchalik muhim?

Melanoma avval terining ustki qatlamida o'sadi. Bu bosqichda u odatda nisbatan kichik operatsiya bilan olib tashlanadi. Vaqt o'tishi bilan o'sma chuqurlashadi va limfa tugunlari hamda ichki a'zolarga tarqalishi mumkin — shunda davolash ancha murakkablashadi. Shuning uchun "kutib ko'raman" eng xavfli qaror. Dog' qonasa, yara bo'lsa, tez o'ssa yoki uning yonida yangi qora nuqtalar paydo bo'lsa — tekshiruvni imkon qadar tez o'tkazing.

## Nima qilish mumkin emas

- **Shubhali xolni go'zallik salonida kuydirish yoki "lazer bilan olib tashlash"** — o'sma to'liq olib tashlanmasligi mumkin, eng muhimi esa gistologiya uchun to'qima qolmaydi va tashxis yo'qoladi.
- **Xalq usullari** — sirka, sarimsoq, o'simlik shiralari, kislotalar yoki ip bilan bog'lash. Ular terini kuydiradi, yallig'lanish va chandiq esa o'smani yashirib, tashxisni kechiktiradi.
- **Kesish, tirnash, igna bilan teshish.**
- **Kutish** — "og'rimayapti, demak xavfsiz" deb o'ylash. Erta melanoma odatda og'rimaydi.

## Dermatoonkolog qanday tekshiradi?

- **Suhbat va butun terini ko'rish** — bosh terisi, kaft, tovon, tirnoqlar va barmoqlar orasini ham.
- **Dermatoskopiya** — dog'ning ichki tuzilishi, pigment tarmog'i va tomirlarini kattalashtirib ko'rish; og'riqsiz va bir necha daqiqa davom etadi.
- **Butun tana kartografiyasi (PhotoFinder)** — ko'p xoli yoki xavf omili bor odamlarda teri va alohida xollar suratga olinadi va keyingi tashrifda solishtiriladi. Yangi yoki o'zgargan dog' erta seziladi. Batafsil: [PhotoFinder diagnostikasi](/uz/articles/art-photofinder-diagnostika-radeski).
- **Biopsiya va gistologiya** — shubhali dog' odatda butunligicha, chetidagi sog'lom teri bilan birga olib tashlanadi va to'qima mikroskop ostida tekshiriladi. Aniq tashxisni faqat gistologiya qo'yadi. Batafsil: [teri biopsiyasi](/uz/articles/art-teri-biopsiyasi).

## Davolash

Melanomaning asosiy davosi — o'smani mutaxassis tomonidan jarrohlik yo'li bilan olib tashlash. Operatsiya hajmi gistologiya natijasiga — o'smaning qalinligi va boshqa belgilariga bog'liq. Bosqichni va qo'shimcha tekshiruv yoki davolash kerakligini onkolog belgilaydi; reja har bir bemor uchun alohida tuziladi. Davolashdan keyin teri muntazam kuzatuv ostida bo'ladi.

Melanomaga o'xshash, lekin xavfsiz hosilalar ham bor — masalan, [seboreyali keratoz](/uz/articles/art-seboreyali-keratoz). Ularni bir-biridan ajratish — shifokorning ishi.

## Profilaktika

- Quyoshda kuymang: soat 11:00–16:00 oralig'ida soyada bo'ling, yopiq kiyim va bosh kiyim kiying, quyoshdan himoya kremini qayta-qayta surting.
- Solyariydan voz keching.
- Bolalarni quyoshda kuyishdan ayniqsa himoya qiling.
- Oyda bir marta butun terini ko'zgu yordamida ko'zdan kechiring; orqa va bosh terisini ko'rishni yaqiningizdan so'rang.
- Xavf omillari bo'lsa, shifokor tavsiya qilgan muddatda tekshiruvdan o'ting.

## Melanoma tekshiruvi Farg'ona va Qo'qonda

Radeski Skin Clinic'da [dermatoonkolog](/uz/services/dermatoonkologiya) shubhali dog'larni dermatoskop bilan tekshiradi, kerak bo'lsa butun tana kartografiyasini o'tkazadi va [biopsiya hamda gistologik tekshiruvni](/uz/services/dermatoonkologiya/teri-biopsiyasi-va-gistologiya) tashkil qiladi. Teri o'smalarini olib tashlash usullaridan biri — [Mohs mikrografik jarrohligi](/uz/services/hirurgicheskaya-dermatologiya/mohs-mikrografik-jarrohligi); qaysi usul mos kelishini shifokor hal qiladi.

- [Onkodermatolog Farg'onada](/uz/fargona/onko-dermatolog) va [Qo'qonda](/uz/qoqon/onko-dermatolog);
- [Dermatoskopiya Farg'onada](/uz/fargona/dermatoskopiya) va [Qo'qonda](/uz/qoqon/dermatoskopiya);
- [Xol tekshiruvi Farg'onada](/uz/fargona/xol-tekshiruvi) va [Qo'qonda](/uz/qoqon/xol-tekshiruvi);
- [Teri biopsiyasi Farg'onada](/uz/fargona/biopsiya) va [Qo'qonda](/uz/qoqon/biopsiya).

O'zgarayotgan dog'ni kuzatib o'tirmang — uni dermatoonkologga ko'rsatish bir necha daqiqa vaqt oladi, kechikish esa juda qimmatga tushishi mumkin.`;
}

function ruBody(): string {
  return `Меланома — опухоль кожи, которая развивается из пигментных клеток (меланоцитов). Среди раков кожи она считается самой опасной, потому что склонна распространяться в другие органы. Но у меланомы есть и «слабое место»: она начинается на поверхности кожи, на виду, а значит, её можно заметить рано. Эта статья — о самой меланоме: как она выглядит, у кого встречается чаще и что делать при подозрении. О плановой проверке родинок мы писали отдельно: [родинки и дерматоскопия](/ru/articles/art-xol-tekshiruvi-dermatoskopiya).

## Что такое меланома?

Меланома может возникнуть как из существующей родинки, так и на чистой коже в виде нового пятна — причём чаще именно из нового. Она появляется на любом участке тела: на спине, ногах, коже головы, ладонях и стопах, под ногтем и даже на слизистых. У мужчин её чаще находят на спине, у женщин — на голенях.

## Ранние признаки

Есть несколько простых способов распознать подозрительное пятно:

- **ABCDE** — асимметрия, неровная граница, несколько цветов, диаметр больше 6 мм и самое важное — изменение. Каждую букву мы подробно разобрали в статье о родинках.
- **«Гадкий утёнок»** — одно пятно, которое не похоже на остальные родинки и выделяется среди них.
- **Новое или меняющееся пятно** — особенно появившееся после 30 лет или за недели-месяцы увеличившееся, потемневшее, приподнявшееся.
- **Быстро растущий узелок** — некоторые виды меланомы не подходят под ABCDE: это симметричный, однотонный чёрный, красный или даже телесный плотный узелок, который растёт за несколько недель.
- **Зуд, кровоточивость, язвочка** — поверхность пятна покрывается корочкой и начинает кровить сама по себе.

## Меланома ногтя и стопы

В этих местах меланому часто находят поздно: её принимают за ушиб или грибок.

- **На ногте** — коричневая или чёрная полоса вдоль ногтя, которая постепенно расширяется, особенно если пигмент переходит на кожу вокруг ногтя. Кровоизлияние после удара сдвигается вперёд вместе с ростом ногтя, меланома остаётся на месте. Подробнее: [изменение цвета ногтей](/ru/articles/art-tirnoq-rangi-ozgarishi).
- **На стопе и ладони** — неровное коричневое или чёрное пятно, незаживающая «ранка» или тёмный участок внутри «мозоли».

## Факторы риска

- солнечные ожоги, особенно с пузырями в детстве и подростковом возрасте;
- солярий;
- много родинок (больше 50) или атипичные — неровные, крупные родинки;
- крупный врождённый невус;
- меланома у родственников;
- светлая кожа, светлые глаза, рыжие или светлые волосы, веснушки, склонность быстро обгорать;
- меланома или другой рак кожи в прошлом;
- лечение, подавляющее иммунитет.

Меланома бывает и у людей без факторов риска, поэтому любое меняющееся пятно нужно показать врачу.

## Почему так важно найти её рано?

Сначала меланома растёт в верхнем слое кожи. На этом этапе её обычно удаляют сравнительно небольшой операцией. Со временем опухоль уходит вглубь и может распространиться в лимфоузлы и внутренние органы — тогда лечение становится гораздо сложнее. Поэтому «подожду, посмотрю» — самое опасное решение. Если пятно кровоточит, изъязвилось, быстро растёт или рядом появились новые тёмные точки — обследуйтесь как можно скорее.

## Чего делать нельзя

- **Прижигать подозрительную родинку в салоне красоты или «удалять лазером»** — опухоль может быть удалена не полностью, а главное — не остаётся ткани для гистологии, и диагноз теряется.
- **Народные средства** — уксус, чеснок, соки растений, кислоты, перевязывание ниткой. Они обжигают кожу, а воспаление и рубец маскируют опухоль и задерживают диагноз.
- **Срезать, расчёсывать, прокалывать иглой.**
- **Ждать** — думать «не болит, значит, не опасно». Ранняя меланома обычно не болит.

## Как проверяет дерматоонколог?

- **Беседа и осмотр всей кожи** — включая кожу головы, ладони, стопы, ногти и промежутки между пальцами.
- **Дерматоскопия** — осмотр структуры пятна, пигментной сети и сосудов под увеличением; безболезненно и занимает несколько минут.
- **Картирование всего тела (PhotoFinder)** — людям с большим количеством родинок или факторами риска фотографируют кожу и отдельные родинки, а на следующем визите сравнивают снимки. Новое или изменившееся пятно видно рано. Подробнее: [диагностика PhotoFinder](/ru/articles/art-photofinder-diagnostika-radeski).
- **Биопсия и гистология** — подозрительное пятно обычно удаляют целиком с небольшим краем здоровой кожи, а ткань изучают под микроскопом. Точный диагноз ставит только гистология. Подробнее: [биопсия кожи](/ru/articles/art-teri-biopsiyasi).

## Лечение

Основное лечение меланомы — хирургическое удаление опухоли специалистом. Объём операции зависит от результата гистологии — толщины опухоли и других признаков. Стадию и необходимость дополнительного обследования или лечения определяет онколог; план всегда составляется индивидуально. После лечения кожа остаётся под регулярным наблюдением.

Бывают образования, похожие на меланому, но безопасные, — например, [себорейный кератоз](/ru/articles/art-seboreyali-keratoz). Отличить одно от другого — задача врача.

## Профилактика

- Не обгорайте: с 11:00 до 16:00 держитесь в тени, носите закрытую одежду и головной убор, обновляйте солнцезащитный крем.
- Откажитесь от солярия.
- Особенно берегите от солнечных ожогов детей.
- Раз в месяц осматривайте всю кожу с помощью зеркала; спину и кожу головы попросите осмотреть близкого человека.
- При факторах риска проходите осмотр в сроки, которые назначит врач.

## Проверка на меланому в Фергане и Коканде

В Radeski Skin Clinic [дерматоонколог](/ru/services/dermatoonkologiya) осмотрит подозрительные пятна дерматоскопом, при необходимости проведёт картирование всего тела и организует [биопсию и гистологическое исследование](/ru/services/dermatoonkologiya/teri-biopsiyasi-va-gistologiya). Один из методов удаления опухолей кожи — [микрографическая хирургия по Моосу](/ru/services/hirurgicheskaya-dermatologiya/mohs-mikrografik-jarrohligi); какой метод подходит, решает врач.

- [Онкодерматолог в Фергане](/ru/fargona/onko-dermatolog) и [в Коканде](/ru/qoqon/onko-dermatolog);
- [Дерматоскопия в Фергане](/ru/fargona/dermatoskopiya) и [в Коканде](/ru/qoqon/dermatoskopiya);
- [Проверка родинок в Фергане](/ru/fargona/xol-tekshiruvi) и [в Коканде](/ru/qoqon/xol-tekshiruvi);
- [Биопсия кожи в Фергане](/ru/fargona/biopsiya) и [в Коканде](/ru/qoqon/biopsiya).

Не наблюдайте за меняющимся пятном сами — показать его дерматоонкологу занимает несколько минут, а промедление может обойтись очень дорого.`;
}

function enBody(): string {
  return `Melanoma is a skin cancer that develops from pigment cells (melanocytes). It is the most dangerous skin cancer because it tends to spread to other organs — yet it starts on the surface of the skin, in plain sight, so it can be spotted early. This article is about melanoma itself; routine mole checks are covered separately: [moles and dermoscopy](/en/articles/art-xol-tekshiruvi-dermatoskopiya).

## What is melanoma?

Melanoma can grow out of an existing mole or appear on clear skin as a new spot — and more often it is a new spot. It can occur anywhere: the back, legs, scalp, palms and soles, under a nail and even on mucous membranes.

## Early signs

- **ABCDE** — asymmetry, an irregular border, several colours, a diameter over 6 mm and, most importantly, evolution (change). Each letter is explained in the mole-check article.
- **The "ugly duckling"** — one spot that looks different from all your other moles.
- **A new or changing spot** — especially after the age of 30, or one that has grown, darkened or become raised over weeks or months.
- **A fast-growing bump** — some melanomas do not fit ABCDE at all: a symmetrical, evenly coloured black, red or even skin-coloured firm bump that grows within weeks.
- **Itching, bleeding, a sore** — the surface of the spot crusts over and starts to bleed on its own.

## Melanoma of the nail and sole

Here melanoma is often found late, because people take it for a bruise or fungus.

- **On a nail** — a brown or black streak along the nail that slowly widens, especially if the pigment spreads onto the skin around the nail. Bleeding under the nail after an injury moves forward as the nail grows; melanoma stays in place. More: [nail colour changes](/en/articles/art-tirnoq-rangi-ozgarishi).
- **On the sole or palm** — an irregular brown or black patch, a "wound" that does not heal, or a dark area inside a "callus".

## Risk factors

- sunburns, especially blistering burns in childhood and adolescence;
- tanning beds;
- many moles (more than 50) or atypical — irregular, large — moles;
- a large congenital mole;
- melanoma in the family;
- fair skin, light eyes, red or blond hair, freckles, burning easily in the sun;
- a previous melanoma or other skin cancer;
- treatment that suppresses the immune system.

Melanoma can also occur in people with no risk factors, so any changing spot should be checked.

## Why does early detection matter so much?

At first, melanoma grows in the top layer of the skin, where it is usually removed with a relatively small operation. Over time it grows deeper and may spread to the lymph nodes and internal organs — and treatment becomes much more complex. That is why "I will wait and see" is the most dangerous decision. If a spot bleeds, ulcerates, grows quickly or new dark dots appear next to it, get it checked as soon as possible.

## What not to do

- **Have a suspicious mole cauterised at a beauty salon or "removed with a laser"** — the tumour may not be removed completely and, above all, no tissue is left for histology, so the diagnosis is lost.
- **Folk remedies** — vinegar, garlic, plant juices, acids or tying the mole off with thread. They burn the skin, and the scar hides the tumour and delays the diagnosis.
- **Cut, prick or wait** — early melanoma usually does not hurt, so "it does not hurt" means nothing.

## How does a dermato-oncologist check?

- **A conversation and a full-body skin exam** — including the scalp, palms, soles, nails and the skin between the toes.
- **Dermoscopy** — a painless, few-minute look at the spot's structure and vessels under magnification.
- **Total-body mapping (PhotoFinder)** — for people with many moles or risk factors, the skin is photographed and compared at the next visit, so a new or changed spot shows up early. More: [PhotoFinder diagnostics](/en/articles/art-photofinder-diagnostika-radeski).
- **Biopsy and histology** — a suspicious spot is usually removed whole with a small margin of healthy skin, and the tissue is examined under a microscope. Only histology gives a definite diagnosis. More: [skin biopsy](/en/articles/art-teri-biopsiyasi).

## Treatment

The main treatment for melanoma is surgical removal of the tumour by a specialist. The extent of surgery depends on the histology result, such as the tumour's thickness. The stage, and whether further tests or treatment are needed, is decided by an oncologist individually. After treatment the skin stays under regular follow-up.

Some growths look like melanoma but are harmless — for example, [seborrheic keratosis](/en/articles/art-seboreyali-keratoz). Telling them apart is the doctor's job.

## Prevention

- Do not get sunburnt: stay in the shade from 11:00 to 16:00, wear a hat and covering clothes, and reapply sunscreen.
- Give up tanning beds and protect children from sunburn above all.
- Once a month, check all your skin with a mirror; ask someone close to check your back and scalp.
- If you have risk factors, have check-ups as often as your doctor advises.

## Melanoma checks in Fergana and Kokand

At Radeski Skin Clinic a [dermato-oncologist](/en/services/dermatoonkologiya) examines suspicious spots with a dermatoscope, performs total-body mapping when needed and arranges [biopsy and histology](/en/services/dermatoonkologiya/teri-biopsiyasi-va-gistologiya). One of the methods for removing skin tumours is [Mohs micrographic surgery](/en/services/hirurgicheskaya-dermatologiya/mohs-mikrografik-jarrohligi); the doctor decides which method suits each case.

- [Dermato-oncologist in Fergana](/en/fargona/onko-dermatolog) and [in Kokand](/en/qoqon/onko-dermatolog);
- [Dermoscopy in Fergana](/en/fargona/dermatoskopiya) and [in Kokand](/en/qoqon/dermatoskopiya);
- [Mole check in Fergana](/en/fargona/xol-tekshiruvi) and [in Kokand](/en/qoqon/xol-tekshiruvi);
- [Skin biopsy in Fergana](/en/fargona/biopsiya) and [in Kokand](/en/qoqon/biopsiya).

Do not keep watching a changing spot on your own — showing it to a dermato-oncologist takes minutes, while delay can cost a great deal.`;
}

export const MELANOMA_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Melanoma — eng xavfli teri o'smasi: erta belgilar, tirnoq va tovondagi melanoma, xavf omillari, nima qilmaslik kerak va qanday tekshiriladi. Farg'ona va Qo'qonda dermatoonkolog.",
    body: uzBody(),
    keyTakeaways: [
      "Melanoma ko'pincha yangi dog'dan boshlanadi, mavjud xoldan ham rivojlanishi mumkin",
      "Yangi, o'zgarayotgan yoki boshqalardan ajralib turadigan dog' — tekshiruv uchun sabab",
      "Tirnoqdagi kengayib borayotgan qora chiziq va tovondagi qora dog' ham melanoma bo'lishi mumkin",
      "Shubhali xolni salonda kuydirish yoki xalq usullari bilan yo'qotish tashxisni yo'qotadi",
      "Tashxisni gistologiya qo'yadi, bosqich va davolash rejasini onkolog belgilaydi",
    ],
    tags: ['Melanoma', 'Teri saratoni', "Xunuk o'rdakcha", 'Dermatoonkolog', 'PhotoFinder', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Yangi dog' paydo bo'lsa yoki xol kattalashsa, qoraysa, shakli o'zgarsa",
      "Xol yoki dog' qonasa, yara bo'lsa, qobiqlansa",
      "Bir necha hafta ichida o'sayotgan qattiq tugun paydo bo'lsa",
      "Tirnoqda kengayib borayotgan qora chiziq yoki tovonda notekis qora dog' bo'lsa",
      "Oilada melanoma bo'lgan bo'lsa yoki xollar juda ko'p bo'lsa",
    ],
    faq: [
      {
        question: 'Melanoma xoldan paydo bo\'ladimi?',
        answer:
          "Ba'zan — ha, lekin ko'pincha melanoma ilgari toza bo'lgan teri ustida yangi dog' sifatida boshlanadi. Shuning uchun nafaqat eski xollarga, balki yangi paydo bo'lgan dog'larga ham e'tibor bering.",
      },
      {
        question: "Melanoma og'riydimi?",
        answer:
          "Erta bosqichda odatda og'rimaydi. Qichishish, qonash yoki yara keyinroq paydo bo'lishi mumkin. Og'riq yo'qligi dog' xavfsiz degani emas.",
      },
      {
        question: "Shubhali xolni salonda yoki lazer bilan olib tashlasa bo'ladimi?",
        answer:
          "Yo'q. Kuydirish yoki lazer to'qimani yo'q qiladi va gistologik tekshiruv o'tkazib bo'lmaydi. Shubhali dog'ni faqat shifokor olib tashlaydi va to'qimani gistologiyaga yuboradi.",
      },
      {
        question: "Melanoma qanday davolanadi?",
        answer:
          "Asosiy davo — o'smani mutaxassis tomonidan jarrohlik yo'li bilan olib tashlash. Operatsiya hajmi gistologiya natijasiga bog'liq; bosqichni va qo'shimcha davolash kerakligini onkolog hal qiladi.",
      },
      {
        question: "Farg'ona va Qo'qonda melanomaga qayerda tekshirilish mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatoonkolog shubhali dog'larni dermatoskop bilan tekshiradi, kerak bo'lsa kartografiya va biopsiyani tashkil qiladi. Saytda yoki +998 73 200-73-73 (Farg'ona) yoki +998 95 145 73 73 (Qo'qon) raqamlari orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Меланома — самая опасная опухоль кожи: ранние признаки, меланома ногтя и стопы, факторы риска, чего нельзя делать и как проходит диагностика. Дерматоонколог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Меланома чаще начинается с нового пятна, но может развиться и из существующей родинки',
      'Новое, меняющееся или непохожее на остальные пятно — повод для осмотра',
      'Расширяющаяся тёмная полоса на ногте и тёмное пятно на стопе тоже могут быть меланомой',
      'Прижигание в салоне и народные средства уничтожают возможность поставить диагноз',
      'Диагноз ставит гистология, стадию и план лечения определяет онколог',
    ],
    tags: ['Меланома', 'Рак кожи', 'Гадкий утёнок', 'Дерматоонколог', 'PhotoFinder', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Появилось новое пятно или родинка растёт, темнеет, меняет форму',
      'Родинка или пятно кровоточит, изъязвилось, покрывается корочкой',
      'Появился плотный узелок, который растёт за несколько недель',
      'На ногте расширяется тёмная полоса или на стопе неровное тёмное пятно',
      'Меланома у родственников или очень много родинок',
    ],
    faq: [
      {
        question: 'Меланома возникает из родинки?',
        answer:
          'Иногда — да, но чаще меланома начинается на чистой коже как новое пятно. Поэтому следите не только за старыми родинками, но и за новыми пятнами.',
      },
      {
        question: 'Болит ли меланома?',
        answer:
          'На ранней стадии обычно не болит. Зуд, кровоточивость или язвочка могут появиться позже. Отсутствие боли не означает, что пятно безопасно.',
      },
      {
        question: 'Можно ли удалить подозрительную родинку в салоне или лазером?',
        answer:
          'Нет. Прижигание или лазер разрушают ткань, и гистологическое исследование провести невозможно. Подозрительное пятно удаляет только врач и отправляет ткань на гистологию.',
      },
      {
        question: 'Как лечат меланому?',
        answer:
          'Основное лечение — хирургическое удаление опухоли специалистом. Объём операции зависит от результата гистологии; стадию и необходимость дополнительного лечения определяет онколог.',
      },
      {
        question: 'Где проверить кожу на меланому в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматоонколог осмотрит подозрительные пятна дерматоскопом и при необходимости организует картирование и биопсию. Записаться можно на сайте или по телефону +998 73 200-73-73 (Фергана) или +998 95 145 73 73 (Коканд).',
      },
    ],
  },
  en: {
    summary:
      'Melanoma — the most dangerous skin tumour: early signs, nail and sole melanoma, risk factors, what not to do and how it is diagnosed. Dermato-oncologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Melanoma more often starts as a new spot, but can also develop from an existing mole',
      'A new, changing or "ugly duckling" spot is a reason to get checked',
      'A widening dark streak on a nail or a dark patch on the sole can also be melanoma',
      'Salon cauterising and folk remedies destroy the chance of a diagnosis',
      'Histology makes the diagnosis; an oncologist decides the stage and treatment plan',
    ],
    tags: ['Melanoma', 'Skin cancer', 'Ugly duckling sign', 'Dermato-oncologist', 'PhotoFinder', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A new spot appears, or a mole grows, darkens or changes shape',
      'A mole or spot bleeds, ulcerates or crusts',
      'A firm bump appears and grows within weeks',
      'A dark streak on a nail widens, or an irregular dark patch appears on the sole',
      'Melanoma runs in your family or you have a great many moles',
    ],
    faq: [
      {
        question: 'Does melanoma come from a mole?',
        answer:
          'Sometimes, but more often melanoma starts on clear skin as a new spot. So watch not only your old moles but also any new spots.',
      },
      {
        question: 'Does melanoma hurt?',
        answer:
          'In the early stage it usually does not. Itching, bleeding or a sore may appear later. No pain does not mean a spot is safe.',
      },
      {
        question: 'Can a suspicious mole be removed at a salon or with a laser?',
        answer:
          'No. Cauterising or laser destroys the tissue, so histology cannot be done. A suspicious spot should only be removed by a doctor, who sends the tissue for histology.',
      },
      {
        question: 'How is melanoma treated?',
        answer:
          'The main treatment is surgical removal of the tumour by a specialist. The extent of surgery depends on the histology result; an oncologist decides the stage and whether further treatment is needed.',
      },
      {
        question: 'Where can I get checked for melanoma in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermato-oncologist examines suspicious spots with a dermatoscope and arranges mapping and biopsy when needed. Book on the website or call +998 73 200-73-73 (Fergana) or +998 95 145 73 73 (Kokand).',
      },
    ],
  },
};

export const MELANOMA_ARTICLE: Article = {
  id: 'art-melanoma',
  slug: 'melanoma',
  title: {
    uz: "Melanoma: erta belgilar, xavf omillari va nima uchun kutish mumkin emas",
    ru: 'Меланома: ранние признаки, факторы риска и почему нельзя ждать',
    en: 'Melanoma: Early Signs, Risk Factors and Why You Should Not Wait',
  },
  summary: {
    uz: MELANOMA_ARTICLE_CATALOG.uz.summary,
    ru: MELANOMA_ARTICLE_CATALOG.ru.summary,
    en: MELANOMA_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: MELANOMA_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: MELANOMA_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: MELANOMA_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: "Yo'qubov Farrux Farhodjonovich",
    ru: 'Якубов Фаррух Фарходжонович',
    en: 'Dr. Farrukh Farhodjonovich Yoqubov',
  },
  date: '2026-11-28',
  image: '/articles/melanoma-cover.jpg',
  images: {
    uz: '/articles/melanoma-cover.jpg',
    ru: '/articles/melanoma-cover.jpg',
    en: '/articles/melanoma-cover.jpg',
  },
  views: 0,
};
