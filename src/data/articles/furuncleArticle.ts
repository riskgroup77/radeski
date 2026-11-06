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
 * Boils (furuncles) and folliculitis — bacterial inflammation of the hair follicle.
 * Points: folliculitis vs boil vs carbuncle, causes (shaving, friction, sweat, diabetes, hot tubs),
 * stages, the facial "danger triangle" and other same-day red flags, what never to do at home
 * (squeeze, pierce, hot compress on the face, folk remedies, self-started antibiotics), how the
 * doctor treats (local care, prescribed medicines, drainage by a surgeon), recurrent boils, prevention.
 * Acne is only mentioned to explain the difference. No medicine names, no numbers or promises.
 */

function uzBody(): string {
  return `Chipqon (furunkul) va follikulit — soch follikulasining, ya'ni tuk xaltachasining bakterial yallig'lanishi. Ular ko'pincha soqol olinadigan joylarda, bo'yin, qo'ltiq, son va dumbada paydo bo'ladi. Ko'p hollarda kasallik yengil o'tadi, lekin yuzdagi chipqon yoki isitma bilan kechadigan holat jiddiy asoratlarga olib kelishi mumkin. Shuning uchun qachon kuzatish mumkinligi va qachon shu kuniyoq shifokorga borish kerakligini bilish muhim.

## Follikulit, chipqon va karbunkul — farqi nima?

- **Follikulit** — tuk atrofida mayda, yuzaki yiringli donachalar va qizarish. Odatda bir nechta bo'ladi, yengil qichishi yoki achishishi mumkin.
- **Chipqon (furunkul)** — follikula va uning atrofidagi to'qimaning chuqur yallig'lanishi: qattiq, og'riqli, qizil tugun; bir necha kundan keyin o'rtasida yiringli "o'zak" hosil bo'ladi.
- **Karbunkul** — bir-biriga qo'shilib ketgan bir nechta chipqon; katta, juda og'riqli o'choq, ko'pincha isitma va holsizlik bilan kechadi.

Kasallikni ko'pincha teri yuzasida yashaydigan stafilokokk qo'zg'atadi: bakteriya terining mayda shikastlari orqali follikulaga kiradi.

Follikulitni husnbuzar bilan adashtirish oson, lekin bu boshqa kasallik. Akne yog' bezlari, gormonlar va komedonlar bilan bog'liq, follikulit esa infeksiya, ishqalanish va soqol olish bilan. Akne haqida batafsil: [kattalarda akne](/uz/articles/art-akne-u-vzroslykh).

## Sabablari va xavf omillari

- **Ishqalanish** — tor kiyim, qattiq yoqa, sumka va ryukzak tasmalari.
- **Soqol olish va epilyatsiya** — ayniqsa o'tmas, toza bo'lmagan yoki boshqalar bilan umumiy ustara.
- **Ortiqcha terlash** va issiq havo; batafsil: [giperhidroz](/uz/articles/art-giperhidroz).
- **Mayda jarohatlar** — tirnalish, hasharot chaqishi, qichigan joyni qashlash.
- **Qandli diabet** va immunitetning pasayishi.
- **Issiq vannalar va jakuzi** — suv yaxshi tozalanmagan bo'lsa.
- **Umumiy sochiq** va gigiyena vositalari.

## Chipqon qanday rivojlanadi?

1. **Infiltrat** — teri ostida qattiq, qizil, og'riqli tugun paydo bo'ladi, atrofi shishadi.
2. **Yiringlash** — bir necha kundan keyin markazida sarg'ish o'zak ko'rinadi, og'riq kuchayadi.
3. **Bitish** — yiring va o'zak chiqqandan keyin og'riq kamayadi, o'rnida qizil dog' yoki kichik chandiq qolishi mumkin.

Follikulit odatda yuzaki bo'ladi va sabab bartaraf etilsa tez o'tadi, lekin chuqurlashib chipqonga aylanishi mumkin.

## Shu kuniyoq shifokorga ko'rining, agar:

- chipqon **yuzda** — ayniqsa burunda, yuqori labda yoki ko'z atrofida bo'lsa. Bu "xavfli uchburchak": infeksiya bu sohadan qon tomirlari orqali bosh ichiga tarqalishi mumkin. Bunday chipqonni hech qachon siqmang;
- isitma, titroq yoki kuchli holsizlik bo'lsa;
- chipqondan qizil chiziq tarqalsa yoki qizarish tez kengaysa;
- shish juda katta bo'lsa yoki tez kattalashsa;
- bir vaqtning o'zida bir nechta chipqon chiqsa yoki karbunkul bo'lsa;
- chipqon bolada bo'lsa;
- qandli diabet yoki immunitet pasaygan bo'lsa — bunda infeksiya og'irroq kechadi (diabetda teri va oyoq parvarishi haqida: [diabetda oyoq parvarishi](/uz/articles/art-diabetda-oyoq-parvarishi));
- chipqonlar qayta-qayta chiqsa.

Yuzdagi shish tez oshsa, qovoq shishib ko'z yumilib qolsa, kuchli bosh og'rig'i yoki yuqori isitma bo'lsa — kutmang, tez yordam chaqiring (103).

## Uyda nima qilish mumkin emas

- **Chipqonni siqish** — infeksiya chuqurroqqa va qonga tarqalishi mumkin.
- **Igna, ustara yoki qaychi bilan teshish.**
- **Yuzdagi chipqonga issiq kompress qo'yish.**
- **Xalq vositalari** — piyoz, xamir, tarkibi noma'lum malhamlar.
- **Antibiotiklarni o'zingizcha boshlash** — ichish ham, surtish ham. Bu tashxisni qiyinlashtiradi va bakteriyalarning chidamliligini oshiradi.
- **Yallig'langan joyni soqol olish** yoki epilyatsiya qilish.

Mumkin: atrofni toza saqlash, toza quruq bog'lam bilan yopish, qo'lni tez-tez yuvish va shifokorga borish.

## Klinikada tashxis va davolash

Dermatolog o'choqni ko'radi va chipqonni follikulit, yallig'langan kista, akne yoki boshqa kasalliklardan ajratadi. Kerak bo'lsa, ajralmadan bakteriologik ekma olinadi. Davolashni shifokor holatga qarab tanlaydi:

- mahalliy parvarish va shifokor tayinlagan mahalliy vositalar;
- zarur bo'lsa — shifokor tayinlagan ichiladigan vositalar;
- katta yiringli chipqonda — jarroh tomonidan steril sharoitda ochish va tozalash (drenaj).

Erta murojaat qilinganda ko'p chipqonlar jarrohliksiz davolanadi. Amaliyotimizda yuzdagi chipqon ham o'z vaqtida boshlangan davolash bilan, kesishsiz bitgan holat bor. Har bir holatda yo'lni shifokor belgilaydi.

Chipqonlar qayta-qayta chiqsa, shifokor qondagi qand miqdorini, stafilokokk tashuvchanligini va immunitetga ta'sir qiluvchi boshqa omillarni tekshirishni tavsiya qilishi mumkin. Qaysi tahlil kerakligini shifokor hal qiladi.

## Oldini olish va kundalik parvarish

- Soqolni toza, o'tkir ustara bilan, tuk o'sishi yo'nalishida oling; ustarani hech kim bilan bo'lishmang.
- Faqat shaxsiy sochiq va gigiyena vositalaridan foydalaning.
- Ortiqcha terlashni davolang, sport va issiqdan keyin dush qabul qiling.
- Keng, paxta matoli kiyim kiying.
- Terini tirnamang, donachalarni siqmang.
- Diabetda qon shakarini nazorat qiling.
- Soqoldan keyin follikulit tez-tez qaytsa, shifokor bilan lazer epilyatsiyani muhokama qiling: [lazer epilyatsiya](/uz/articles/art-lazer-epilyatsiya-kuz-qish).

## Farg'ona va Qo'qonda chipqon va follikulitni davolash

Radeski Skin Clinic'da dermatolog o'choqni ko'rib chiqadi, xavfli belgilarni baholaydi va davolash rejasini tuzadi.

- [Dermatolog Farg'onada](/uz/fargona/dermatolog) va [Qo'qonda](/uz/qoqon/dermatolog);
- [Dermatologiya](/uz/services/dermatologiya).

Chipqonni siqmang: erta ko'rik ko'pincha uni jarrohliksiz davolash imkonini beradi.`;
}

function ruBody(): string {
  return `Фурункул и фолликулит — бактериальное воспаление волосяного фолликула. Чаще всего они появляются там, где бреют кожу, а также на шее, в подмышках, на бёдрах и ягодицах. Обычно болезнь протекает легко, но фурункул на лице или воспаление с температурой могут дать серьёзные осложнения. Поэтому важно понимать, когда можно наблюдать, а когда к врачу нужно в тот же день.

## Фолликулит, фурункул и карбункул — в чём разница?

- **Фолликулит** — мелкие поверхностные гнойнички вокруг волос и покраснение. Обычно их несколько, они могут слегка зудеть или жечь.
- **Фурункул** — глубокое воспаление фолликула и окружающих тканей: плотный, болезненный красный узел, в центре которого через несколько дней формируется гнойный «стержень».
- **Карбункул** — несколько слившихся фурункулов; крупный, очень болезненный очаг, часто с температурой и слабостью.

Чаще всего возбудитель — стафилококк, который живёт на поверхности кожи и попадает в фолликул через мелкие повреждения.

Фолликулит легко спутать с прыщами, но это другое заболевание. Акне связано с сальными железами, гормонами и комедонами, а фолликулит — с инфекцией, трением и бритьём. Подробнее об акне: [акне у взрослых](/ru/articles/art-akne-u-vzroslykh).

## Причины и факторы риска

- **Трение** — тесная одежда, жёсткий воротник, лямки сумки и рюкзака.
- **Бритьё и эпиляция** — особенно тупой, нечистый или общий с кем-то станок.
- **Повышенная потливость** и жара; подробнее: [гипергидроз](/ru/articles/art-giperhidroz).
- **Мелкие травмы** — царапины, укусы насекомых, расчёсы.
- **Сахарный диабет** и сниженный иммунитет.
- **Горячие ванны и джакузи** с плохо очищенной водой.
- **Общие полотенца** и средства гигиены.

## Как развивается фурункул?

1. **Инфильтрат** — под кожей появляется плотный, красный, болезненный узел, вокруг отёк.
2. **Нагноение** — через несколько дней в центре виден желтоватый стержень, боль усиливается.
3. **Заживление** — после выхода гноя и стержня боль стихает, на месте остаётся красное пятно или небольшой рубец.

Фолликулит обычно поверхностный и быстро проходит, если убрать причину, но может углубиться и перейти в фурункул.

## К врачу в тот же день, если:

- фурункул **на лице** — особенно на носу, верхней губе или вокруг глаз. Это «опасный треугольник»: отсюда инфекция может по сосудам распространиться в полость черепа. Такой фурункул нельзя выдавливать ни в коем случае;
- есть температура, озноб или сильная слабость;
- от фурункула расходится красная полоса или покраснение быстро расширяется;
- отёк очень большой или быстро растёт;
- появилось сразу несколько фурункулов или карбункул;
- фурункул у ребёнка;
- есть сахарный диабет или сниженный иммунитет — инфекция протекает тяжелее (об уходе за кожей и стопами при диабете: [уход за стопами при диабете](/ru/articles/art-diabetda-oyoq-parvarishi));
- фурункулы появляются снова и снова.

Если отёк на лице быстро нарастает, веко отекло так, что глаз закрылся, появилась сильная головная боль или высокая температура — не ждите, вызывайте скорую помощь (103).

## Чего нельзя делать дома

- **Выдавливать фурункул** — инфекция может уйти глубже и попасть в кровь.
- **Прокалывать иглой, лезвием или ножницами.**
- **Ставить горячие компрессы на фурункул на лице.**
- **Народные средства** — лук, тесто, мази неизвестного состава.
- **Начинать антибиотики самостоятельно** — ни внутрь, ни наружно. Это затрудняет диагностику и повышает устойчивость бактерий.
- **Брить или эпилировать** воспалённое место.

Можно: держать кожу вокруг в чистоте, закрыть очаг чистой сухой повязкой, чаще мыть руки и показаться врачу.

## Диагностика и лечение в клинике

Дерматолог осматривает очаг и отличает фурункул от фолликулита, воспалённой кисты, акне и других заболеваний. При необходимости берут посев отделяемого. Лечение врач подбирает по ситуации:

- местный уход и местные средства, назначенные врачом;
- при необходимости — средства для приёма внутрь, назначенные врачом;
- при крупном гнойном фурункуле — вскрытие и очищение (дренирование) хирургом в стерильных условиях.

При раннем обращении многие фурункулы лечатся без операции. В нашей практике есть случай, когда фурункул на лице зажил без разреза благодаря вовремя начатому лечению. Тактику в каждом случае определяет врач.

Если фурункулы возвращаются, врач может предложить проверить уровень сахара в крови, носительство стафилококка и другие факторы, влияющие на иммунитет. Какие анализы нужны, решает врач.

## Профилактика и ежедневный уход

- Брейтесь чистым острым станком по росту волос; никому не давайте свой станок.
- Пользуйтесь только своим полотенцем и средствами гигиены.
- Лечите повышенную потливость, принимайте душ после спорта и жары.
- Носите свободную хлопковую одежду.
- Не расчёсывайте кожу и не выдавливайте гнойнички.
- При диабете контролируйте уровень сахара.
- Если фолликулит после бритья возвращается снова и снова, обсудите с врачом лазерную эпиляцию: [лазерная эпиляция](/ru/articles/art-lazer-epilyatsiya-kuz-qish).

## Лечение фурункулов и фолликулита в Фергане и Коканде

В Radeski Skin Clinic дерматолог осмотрит очаг, оценит опасные признаки и составит план лечения.

- [Дерматолог в Фергане](/ru/fargona/dermatolog) и [в Коканде](/ru/qoqon/dermatolog);
- [Дерматология](/ru/services/dermatologiya).

Не выдавливайте фурункул: ранний осмотр часто позволяет вылечить его без операции.`;
}

function enBody(): string {
  return `Boils (furuncles) and folliculitis are a bacterial inflammation of the hair follicle. They most often appear where the skin is shaved, and on the neck, armpits, thighs and buttocks. Usually the illness is mild, but a boil on the face or an infection with fever can lead to serious complications. That is why it helps to know when you can simply watch it and when you need a doctor the same day.

## Folliculitis, boil and carbuncle — what is the difference?

- **Folliculitis** — small, superficial pus-filled spots around hairs with redness. There are usually several, and they may itch or sting slightly.
- **Boil (furuncle)** — a deep inflammation of the follicle and the tissue around it: a firm, painful red lump that develops a pus-filled "core" in the centre after a few days.
- **Carbuncle** — several boils merged together; a large, very painful area, often with fever and weakness.

The usual cause is staphylococcus, a bacterium that lives on the skin and enters the follicle through tiny breaks.

Folliculitis is easy to mistake for spots, but it is a different condition. Acne is linked to oil glands, hormones and blackheads; folliculitis is linked to infection, friction and shaving. More on acne: [adult acne](/en/articles/art-akne-u-vzroslykh).

## Causes and risk factors

- **Friction** — tight clothes, stiff collars, bag and backpack straps.
- **Shaving and hair removal** — especially with a blunt, dirty or shared razor.
- **Heavy sweating** and heat; more: [hyperhidrosis](/en/articles/art-giperhidroz).
- **Small injuries** — scratches, insect bites, scratching itchy skin.
- **Diabetes** and weakened immunity.
- **Hot tubs and jacuzzis** with poorly treated water.
- **Shared towels** and toiletries.

## How does a boil develop?

1. **Firm lump** — a hard, red, painful nodule forms under the skin, with swelling around it.
2. **Pus forms** — after a few days a yellowish core shows in the centre and the pain increases.
3. **Healing** — once the pus and core come out the pain eases, leaving a red mark or a small scar.

Folliculitis is usually superficial and clears quickly once the cause is removed, but it can go deeper and turn into a boil.

## See a doctor the same day if:

- the boil is **on the face** — especially on the nose, upper lip or around the eyes. This is the "danger triangle": infection here can spread through the veins into the skull. Never squeeze a boil in this area;
- you have fever, chills or marked weakness;
- a red streak spreads from the boil or the redness widens quickly;
- the swelling is very large or growing fast;
- several boils appear at once, or a carbuncle forms;
- the boil is in a child;
- you have diabetes or weakened immunity — infections run a harder course (on skin and foot care in diabetes: [foot care in diabetes](/en/articles/art-diabetda-oyoq-parvarishi));
- boils keep coming back.

If facial swelling grows quickly, an eyelid swells shut, or you develop a severe headache or high fever, do not wait — call an ambulance (103).

## What not to do at home

- **Squeezing the boil** — the infection can be pushed deeper and into the blood.
- **Piercing it with a needle, blade or scissors.**
- **Putting hot compresses on a boil on the face.**
- **Folk remedies** — onion, dough, ointments of unknown content.
- **Starting antibiotics on your own** — tablets or creams. This makes diagnosis harder and helps bacteria become resistant.
- **Shaving or waxing** the inflamed area.

What you can do: keep the skin around it clean, cover it with a clean dry dressing, wash your hands often and see a doctor.

## Diagnosis and treatment at the clinic

The dermatologist examines the area and tells a boil apart from folliculitis, an inflamed cyst, acne and other conditions. If needed, a swab of the discharge is sent for culture. The doctor chooses treatment for each situation:

- local care and topical treatments prescribed by the doctor;
- if needed, oral medicines prescribed by the doctor;
- for a large boil full of pus, opening and cleaning (drainage) by a surgeon under sterile conditions.

When patients come early, many boils are treated without surgery. In our practice there is a case of a boil on the face that healed without any incision thanks to treatment started in time. In every case the doctor decides the approach.

If boils keep returning, the doctor may suggest checking blood sugar, staphylococcus carriage and other factors that affect immunity. Which tests are needed is the doctor's decision.

## Prevention and everyday care

- Shave with a clean, sharp razor in the direction of hair growth; never share your razor.
- Use only your own towel and toiletries.
- Treat heavy sweating and shower after sport and heat.
- Wear loose cotton clothing.
- Do not scratch your skin or squeeze spots.
- If you have diabetes, keep your blood sugar under control.
- If folliculitis keeps coming back after shaving, discuss laser hair removal with your doctor: [laser hair removal](/en/articles/art-lazer-epilyatsiya-kuz-qish).

## Treatment of boils and folliculitis in Fergana and Kokand

At Radeski Skin Clinic a dermatologist examines the area, assesses danger signs and draws up a treatment plan.

- [Dermatologist in Fergana](/en/fargona/dermatolog) and [in Kokand](/en/qoqon/dermatolog);
- [Dermatology](/en/services/dermatologiya).

Do not squeeze a boil: an early visit often makes it possible to treat it without surgery.`;
}

export const FURUNCLE_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Chipqon va follikulit: farqi, sabablari, bosqichlari, yuzdagi chipqon nega xavfli, uyda nima qilish mumkin emas va qanday davolanadi. Farg'ona va Qo'qonda dermatolog.",
    body: uzBody(),
    keyTakeaways: [
      "Follikulit — tuk atrofidagi yuzaki yallig'lanish, chipqon — o'zakli chuqur tugun, karbunkul — qo'shilgan bir nechta chipqon",
      "Yuzdagi, ayniqsa burun, yuqori lab va ko'z atrofidagi chipqonni hech qachon siqmang",
      "Isitma, qizil chiziq, tez kattalashgan shish yoki bir nechta chipqon — shu kuniyoq shifokorga",
      "Antibiotiklarni o'zingizcha boshlamang va xalq vositalarini ishlatmang — davolashni shifokor tanlaydi",
      "Erta murojaat qilinganda ko'p chipqonlar jarrohliksiz davolanadi",
    ],
    tags: ['Chipqon', 'Furunkul', 'Follikulit', 'Karbunkul', 'Dermatolog', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Chipqon yuzda — burun, yuqori lab yoki ko'z atrofida bo'lsa",
      "Isitma, titroq yoki chipqondan qizil chiziq tarqalsa",
      "Shish juda katta bo'lsa yoki tez kattalashsa",
      "Bir vaqtda bir nechta chipqon chiqsa yoki chipqon bolada bo'lsa",
      "Diabet, immunitet pasayishi yoki chipqonlar qayta-qayta chiqsa",
    ],
    faq: [
      {
        question: "Chipqonni siqsa bo'ladimi?",
        answer:
          "Yo'q. Siqilganda infeksiya chuqurroq to'qimalarga va qonga tarqalishi mumkin, yuzdagi chipqonda esa bu ayniqsa xavfli. Yiringni chiqarish kerak bo'lsa, buni jarroh steril sharoitda qiladi.",
      },
      {
        question: 'Follikulit va husnbuzarning farqi nima?',
        answer:
          "Follikulit — tuk xaltachasining infeksiyasi, ko'pincha soqol olish, ishqalanish va terlash bilan bog'liq. Akne esa yog' bezlari va gormonlar bilan bog'liq, komedonlar bilan kechadi. Davolash ham har xil, shuning uchun tashxisni shifokor qo'yadi.",
      },
      {
        question: "Chipqonni albatta kesish kerakmi?",
        answer:
          "Har doim emas. Erta murojaat qilinganda ko'p chipqonlar mahalliy parvarish va shifokor tayinlagan vositalar bilan jarrohliksiz bitadi. Katta yiringli chipqonda shifokor ochish va tozalashni tavsiya qilishi mumkin.",
      },
      {
        question: "Chipqonlar nega qayta-qayta chiqadi?",
        answer:
          "Sabab qandli diabet, stafilokokk tashuvchanligi, ortiqcha terlash, umumiy ustara yoki sochiq, immunitet pasayishi bo'lishi mumkin. Shifokor kerakli tahlillarni belgilaydi va sababni topishga yordam beradi.",
      },
      {
        question: "Farg'ona va Qo'qonda chipqon va follikulitni qayerda davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog o'choqni ko'rib chiqadi, xavfli belgilarni baholaydi va davolash rejasini tuzadi. Saytda yoki +998 73 200-73-73 raqami orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Фурункул и фолликулит: в чём разница, причины, стадии, чем опасен фурункул на лице, чего нельзя делать дома и как лечат. Дерматолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Фолликулит — поверхностное воспаление вокруг волоса, фурункул — глубокий узел со стержнем, карбункул — несколько слившихся фурункулов',
      'Фурункул на лице, особенно на носу, верхней губе и вокруг глаз, нельзя выдавливать ни в коем случае',
      'Температура, красная полоса, быстро растущий отёк или несколько фурункулов — к врачу в тот же день',
      'Не начинайте антибиотики сами и не пользуйтесь народными средствами — лечение подбирает врач',
      'При раннем обращении многие фурункулы лечатся без операции',
    ],
    tags: ['Фурункул', 'Фолликулит', 'Карбункул', 'Чирей', 'Дерматолог', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Фурункул на лице — на носу, верхней губе или вокруг глаз',
      'Температура, озноб или красная полоса от фурункула',
      'Отёк очень большой или быстро растёт',
      'Сразу несколько фурункулов или фурункул у ребёнка',
      'Диабет, сниженный иммунитет или фурункулы появляются снова и снова',
    ],
    faq: [
      {
        question: 'Можно ли выдавить фурункул?',
        answer:
          'Нет. При выдавливании инфекция может уйти в глубокие ткани и в кровь, а на лице это особенно опасно. Если гной нужно удалить, это делает хирург в стерильных условиях.',
      },
      {
        question: 'Чем фолликулит отличается от прыщей?',
        answer:
          'Фолликулит — инфекция волосяного фолликула, чаще связанная с бритьём, трением и потливостью. Акне связано с сальными железами и гормонами и протекает с комедонами. Лечение разное, поэтому диагноз ставит врач.',
      },
      {
        question: 'Обязательно ли вскрывать фурункул?',
        answer:
          'Не всегда. При раннем обращении многие фурункулы заживают без операции — с местным уходом и средствами, назначенными врачом. При крупном гнойном фурункуле врач может рекомендовать вскрытие и дренирование.',
      },
      {
        question: 'Почему фурункулы появляются снова?',
        answer:
          'Причиной может быть сахарный диабет, носительство стафилококка, потливость, общий станок или полотенце, сниженный иммунитет. Врач назначит нужные анализы и поможет найти причину.',
      },
      {
        question: 'Где лечить фурункулы и фолликулит в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог осмотрит очаг, оценит опасные признаки и составит план лечения. Записаться можно на сайте или по телефону +998 73 200-73-73.',
      },
    ],
  },
  en: {
    summary:
      'Boils and folliculitis: the difference, causes, stages, why a boil on the face is dangerous, what not to do at home and how they are treated. Dermatologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Folliculitis is a superficial inflammation around a hair, a boil is a deep lump with a core, a carbuncle is several merged boils',
      'Never squeeze a boil on the face, especially on the nose, upper lip or around the eyes',
      'Fever, a red streak, fast-growing swelling or several boils at once — see a doctor the same day',
      'Do not start antibiotics or folk remedies on your own — the doctor chooses the treatment',
      'When patients come early, many boils are treated without surgery',
    ],
    tags: ['Boils', 'Furuncle', 'Folliculitis', 'Carbuncle', 'Dermatologist', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A boil on the face — on the nose, upper lip or around the eyes',
      'Fever, chills or a red streak spreading from the boil',
      'The swelling is very large or growing fast',
      'Several boils at once, or a boil in a child',
      'Diabetes, weakened immunity or boils that keep coming back',
    ],
    faq: [
      {
        question: 'Can I squeeze a boil?',
        answer:
          'No. Squeezing can push the infection into deeper tissue and the blood, and on the face this is especially dangerous. If pus needs to be released, a surgeon does it under sterile conditions.',
      },
      {
        question: 'How is folliculitis different from acne?',
        answer:
          'Folliculitis is an infection of the hair follicle, often linked to shaving, friction and sweating. Acne is linked to oil glands and hormones and comes with blackheads and whiteheads. Treatment differs, so a doctor should make the diagnosis.',
      },
      {
        question: 'Does a boil always have to be cut open?',
        answer:
          'Not always. When patients come early, many boils heal without surgery, with local care and treatments prescribed by the doctor. For a large boil full of pus the doctor may recommend opening and drainage.',
      },
      {
        question: 'Why do boils keep coming back?',
        answer:
          'Possible reasons include diabetes, staphylococcus carriage, heavy sweating, a shared razor or towel and weakened immunity. The doctor will order the right tests and help find the cause.',
      },
      {
        question: 'Where in Fergana and Kokand can boils and folliculitis be treated?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist examines the area, assesses danger signs and draws up a treatment plan. Book on the website or call +998 73 200-73-73.',
      },
    ],
  },
};

export const FURUNCLE_ARTICLE: Article = {
  id: 'art-chipqon-follikulit',
  slug: 'chipqon-follikulit',
  title: {
    uz: "Chipqon (furunkul) va follikulit: sabablari, xavfli belgilar va nega siqib bo'lmaydi",
    ru: 'Фурункул и фолликулит: причины, опасные признаки и почему нельзя выдавливать',
    en: 'Boils (Furuncles) and Folliculitis: Causes, Danger Signs and Why Not to Squeeze',
  },
  summary: {
    uz: FURUNCLE_ARTICLE_CATALOG.uz.summary,
    ru: FURUNCLE_ARTICLE_CATALOG.ru.summary,
    en: FURUNCLE_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: FURUNCLE_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: FURUNCLE_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: FURUNCLE_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: "Turg'unov Shohruz Ilxomjon o'g'li",
    ru: 'Тургунов Шохруз Илхомжон угли',
    en: 'Dr. Shohruz Ilxomjon ugli Turgunov',
  },
  date: '2026-12-07',
  image: '/articles/chipqon-follikulit-cover.jpg',
  images: {
    uz: '/articles/chipqon-follikulit-cover.jpg',
    ru: '/articles/chipqon-follikulit-cover.jpg',
    en: '/articles/chipqon-follikulit-cover.jpg',
  },
  views: 0,
};
