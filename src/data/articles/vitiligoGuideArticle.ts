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
 * Vitiligo — a patient's guide, not a phototherapy article (that is art-vitiligo-daavlin, linked
 * for the treatment details). Points: autoimmune loss of pigment cells, not contagious, family
 * tendency, first signs, look-alikes (pityriasis versicolor, post-inflammatory spots, pityriasis
 * alba) and why a Wood's lamp / dermatoscopy check matters, triggers incl. Koebner, stable vs
 * active, what the doctor may choose, slow and individual results, sun, emotions, what not to do.
 */

function uzBody(): string {
  return `Vitiligo — terining ayrim joylarida rang yo'qolib, sutdek oq dog'lar paydo bo'ladigan surunkali kasallik. U har qanday yoshda boshlanishi mumkin, ko'pincha bolalik va yoshlikda. Vitiligo og'riq bermaydi va hayot uchun xavfli emas, lekin yuz va qo'llarda ko'rinib turgani uchun odamni ko'p qayg'urtiradi. Quyida vitiligoni qanday tanish, uni nimalar bilan adashtirish mumkinligi va shifokorga qachon borish kerakligi haqida.

## Vitiligo nima?

Terining rangini melanositlar — melanin pigmentini ishlab chiqaradigan hujayralar beradi. Vitiligoda bu hujayralar ishlamay qoladi yoki yo'qoladi. Hozirgi tushunchaga ko'ra, asosiy sabab autoimmun jarayon: immun tizimi o'z pigment hujayralariga xato bilan hujum qiladi. Shuning uchun vitiligo ba'zan qalqonsimon bez kasalliklari kabi boshqa autoimmun holatlar bilan birga uchraydi va shifokor qo'shimcha tahlillar tavsiya qilishi mumkin.

## Yuqumlimi va irsiymi?

- **Yuqumli emas.** Vitiligo qo'l berib ko'rishish, umumiy idish, suv yoki havo orqali yuqmaydi. Bemor bilan birga yashash, ishlash va o'qish mutlaqo xavfsiz.
- **Irsiy moyillik bor.** Oilada vitiligo bo'lsa, ehtimol biroz yuqoriroq, lekin bu kasallik albatta paydo bo'ladi degani emas. Ko'p bemorlarning ota-onasida vitiligo bo'lmaydi.

## Birinchi belgilar

- sutdek oq yoki och rangli, aniq chegarali dog'lar; teri yumshoqligicha qoladi, qichimaydi va po'st tashlamaydi;
- ko'pincha qo'l barmoqlari va kaft orqasida, yuzda, og'iz va ko'z atrofida, tirsak va tizzada;
- dog' ichidagi sochlar, qosh yoki kipriklarning oqarishi;
- yozda dog'lar yaqqolroq ko'rinadi: atrofdagi teri qorayadi, dog' esa qoraymaydi va tez kuyadi.

## Vitiligoni nima bilan adashtirish mumkin?

Har qanday oq dog' vitiligo emas. Eng ko'p uchraydigan o'xshash holatlar:

- **rang-barang (kepakli) temiratki** — zamburug' sabab bo'ladigan och yoki jigarrang dog'lar, ustida mayda po'st bor; batafsil: [teri zamburug'i](/uz/articles/art-teri-zamburugi);
- **yallig'lanishdan keyingi oq dog'lar** — ekzema, toshma yoki kuyishdan keyin qolgan och joylar; ular odatda vaqt o'tib o'zi tiklanadi;
- **oq temiratki (pitiriaz alba)** — bolalarda yuzdagi xira, chegarasi noaniq och dog'lar, ko'pincha quruq terida; batafsil: [bolalarda teri toshmalari](/uz/articles/art-bolalarda-teri-toshmalari).

Bularning davosi butunlay boshqacha. Shuning uchun dermatolog teriga **Vud lampasi** (maxsus ultrabinafsha chiroq) ostida qarashi mumkin: vitiligo dog'i unda yorqin oq bo'lib ko'rinadi, zamburug' esa ko'pincha boshqacha tus beradi. **Dermatoskopiya** dog' chegarasi va undagi sochlarni kattalashtirib ko'rishga yordam beradi; bu usul haqida: [dermatoskopiya](/uz/articles/art-xol-tekshiruvi-dermatoskopiya). Kerak bo'lsa, zamburug'ga qirindi tahlili yoki qon tahlillari buyuriladi.

## Nima qo'zg'atadi?

- kuchli stress va ruhiy zo'riqish;
- teri jarohatlari — kesik, tirnalish, ishqalanish, qattiq kiyim bosimi: yangi dog' ko'pincha aynan shikastlangan joyda chiqadi (Kebner fenomeni);
- quyosh kuyishi.

## Barqaror va faol vitiligo

Shifokor uchun kasallik qaysi bosqichda ekanligi muhim. **Faol vitiligoda** so'nggi oylarda yangi dog'lar paydo bo'ladi, eskilari kattalashadi, chegaralari xiralashadi. **Barqaror vitiligoda** dog'lar uzoq vaqt o'zgarmaydi. Davolash usuli shunga qarab tanlanadi, shuning uchun dog'larni vaqti-vaqti bilan suratga olib borish foydali.

## Qachon shifokorga borish kerak?

Oq dog' paydo bo'lsa, dermatologga imkon qadar erta ko'rining. Ayniqsa kechiktirmang, agar:

- yangi dog'lar tez paydo bo'layotgan yoki kattalashayotgan bo'lsa;
- dog'lar yuz, ko'z yoki lab atrofida yoki bolada paydo bo'lsa;
- dog' qichisa, po'st tashlasa, qizarsa yoki qalinlashsa — bu boshqa kasallik bo'lishi mumkin;
- oq dog'da kuyishdan keyin pufaklar chiqsa;
- oq halqa bilan o'ralgan xol yoki dog' yonidagi hosila o'zgarsa, kattalashsa yoki qonasa.

## Uyda nima qilmaslik kerak?

- xalq usullari: o'tlar, sirka, sarimsoq va boshqa "kuydiruvchi" vositalarni surtish — kuyish yangi dog'larni qo'zg'atadi;
- dog'ni "qoraytirish" uchun ataylab quyoshda yotish yoki solyariyga borish;
- shifokor buyurmagan krem va malhamlarni, ayniqsa gormonli vositalarni o'zboshimchalik bilan uzoq surtish;
- dog'larni tirnash va qattiq ishqalash.

## Klinikada qanday davolanadi?

Davolash usulini shifokor dog'larning joyi, maydoni, kasallik faolligi va yoshga qarab tanlaydi:

- **tor tasma UVB-fototerapiya** — keng tarqalgan dog'larda Daavlin kabinalarida, kichik o'choqlarda nishonli apparatlarda;
- **mahalliy davolash** — shifokor tayinlagan vositalar, ko'pincha fototerapiya bilan birga.

Seanslar qanday o'tishi va uskunalar haqida batafsil: [vitiligoni Daavlin fototerapiyasi bilan davolash](/uz/articles/art-vitiligo-daavlin).

Natija asta-sekin keladi: rang odatda dog' ichida mayda nuqtalar ko'rinishida yoki chetlaridan tiklana boshlaydi va bunga oylar kerak bo'ladi. Yuz va bo'yin odatda yaxshiroq javob beradi, barmoq uchlari esa sekinroq. Har bir odamda natija har xil, shuning uchun sabr va shifokor bilan muntazam aloqa muhim. Kasallik haqida umumiy ma'lumot: [vitiligo](/uz/conditions/vitiligo).

## Kundalik parvarish va quyoshdan himoya

- Oq dog'lar oson kuyadi: ochiq joylarga yuqori himoyali quyosh kremini surting, yozda yopiq kiyim va bosh kiyim kiying.
- Qattiq kiyim, kamar va soat terini ishqalamasin.
- Kosmetik maskirovka vositalari dog'larni vaqtincha yashirishga yordam beradi — ularni shifokor bilan tanlang.

## Ruhiy tomoni

Vitiligo ko'pincha ruhiy qiyinchilik tug'diradi: uyalish, odamlardan qochish, xavotir. Bu tabiiy holat. Yaqinlar bilan gaplashing, bolaga kasallik yuqumli emasligini va u boshqalardan kam emasligini tushuntiring. Kayfiyat uzoq tushkun bo'lsa, psixolog yordamidan tortinmang.

## Farg'ona va Qo'qonda vitiligo tekshiruvi va davolash

Radeski Skin Clinic'da dermatolog oq dog'larni ko'rikdan o'tkazadi, vitiligoni o'xshash kasalliklardan ajratadi va davolash rejasini tuzadi.

- [Vitiligo davolash Farg'onada](/uz/fargona/vitiligo-davolash) va [Qo'qonda](/uz/qoqon/vitiligo-davolash);
- [Dermatolog Farg'onada](/uz/fargona/dermatolog) va [Qo'qonda](/uz/qoqon/dermatolog);
- [Fototerapiya](/uz/services/dermatologiya/fototerapiya) va [Daavlin NeoLux](/uz/services/apparatnaya-kosmetologiya/daavlin-neolux).

Oq dog'ni qanchalik erta ko'rsatsangiz, davolash imkoniyati shunchalik ko'p bo'ladi.`;
}

function ruBody(): string {
  return `Витилиго — хроническое заболевание, при котором на отдельных участках кожа теряет цвет и появляются молочно-белые пятна. Оно может начаться в любом возрасте, чаще в детстве и молодости. Витилиго не болит и не угрожает жизни, но пятна на лице и руках заметны и сильно беспокоят. Ниже — как распознать витилиго, с чем его путают и когда идти к врачу.

## Что такое витилиго?

Цвет коже дают меланоциты — клетки, которые вырабатывают пигмент меланин. При витилиго эти клетки перестают работать или исчезают. По современным представлениям, главная причина — аутоиммунный процесс: иммунная система по ошибке атакует собственные пигментные клетки. Поэтому витилиго иногда сочетается с другими аутоиммунными состояниями, например заболеваниями щитовидной железы, и врач может назначить дополнительные анализы.

## Заразно ли и передаётся ли по наследству?

- **Не заразно.** Витилиго не передаётся через рукопожатие, общую посуду, воду или воздух. Жить, работать и учиться рядом с человеком с витилиго совершенно безопасно.
- **Склонность бывает наследственной.** Если витилиго есть у родственников, вероятность немного выше, но это не значит, что болезнь обязательно появится. У многих пациентов родители витилиго не болели.

## Первые признаки

- молочно-белые или светлые пятна с чёткими краями; кожа остаётся мягкой, не чешется и не шелушится;
- чаще на пальцах и тыльной стороне кистей, на лице, вокруг рта и глаз, на локтях и коленях;
- побеление волос, бровей или ресниц внутри пятна;
- летом пятна заметнее: кожа вокруг загорает, а пятно — нет и быстро обгорает.

## С чем можно спутать витилиго?

Не каждое белое пятно — витилиго. Самые частые похожие состояния:

- **разноцветный (отрубевидный) лишай** — светлые или коричневатые пятна с мелким шелушением, вызванные грибком; подробнее: [грибок кожи](/ru/articles/art-teri-zamburugi);
- **белые пятна после воспаления** — светлые участки после экземы, сыпи или ожога; обычно со временем сами восстанавливаются;
- **белый лишай (питириаз альба)** — у детей бледные пятна на лице с размытыми краями, часто на сухой коже; подробнее: [сыпь у детей](/ru/articles/art-bolalarda-teri-toshmalari).

Лечатся они совсем по-разному. Поэтому дерматолог может осмотреть кожу под **лампой Вуда** (специальная ультрафиолетовая лампа): пятно витилиго в ней ярко-белое, а грибок обычно даёт другой оттенок. **Дерматоскопия** позволяет рассмотреть границы пятна и волосы в нём под увеличением; об этом методе: [дерматоскопия](/ru/articles/art-xol-tekshiruvi-dermatoskopiya). При необходимости берут соскоб на грибок или назначают анализы крови.

## Что провоцирует?

- сильный стресс и нервное напряжение;
- травмы кожи — порез, царапина, трение, давление тесной одежды: новое пятно часто появляется именно на месте повреждения (феномен Кёбнера);
- солнечные ожоги.

## Стабильное и активное витилиго

Врачу важно понять стадию болезни. При **активном витилиго** за последние месяцы появляются новые пятна, старые растут, их края размываются. При **стабильном** пятна долго не меняются. От этого зависит выбор лечения, поэтому полезно периодически фотографировать пятна.

## Когда идти к врачу?

Если появилось белое пятно, покажитесь дерматологу как можно раньше. Особенно не откладывайте, если:

- новые пятна появляются быстро или увеличиваются;
- пятна на лице, вокруг глаз или губ либо у ребёнка;
- пятно чешется, шелушится, краснеет или утолщается — это может быть другая болезнь;
- на белом пятне после солнца появились пузыри;
- родинка, окружённая белым ободком, или образование рядом с пятном меняется, растёт или кровоточит.

## Чего не делать дома

- народные средства: травы, уксус, чеснок и другие «прижигающие» средства — ожог провоцирует новые пятна;
- специально лежать на солнце или ходить в солярий, чтобы «затемнить» пятна;
- самостоятельно и долго наносить кремы и мази без назначения врача, особенно гормональные;
- расчёсывать и сильно тереть пятна.

## Как лечат в клинике?

Метод лечения врач выбирает с учётом расположения и площади пятен, активности болезни и возраста:

- **узкополосная UVB-фототерапия** — при распространённых пятнах в кабинах Daavlin, при небольших очагах на прицельных аппаратах;
- **местное лечение** — средства, назначенные врачом, часто вместе с фототерапией.

Как проходят сеансы и какое используется оборудование: [лечение витилиго фототерапией Daavlin](/ru/articles/art-vitiligo-daavlin).

Результат приходит постепенно: цвет обычно начинает возвращаться точками внутри пятна или с его краёв, и на это нужны месяцы. Лицо и шея обычно отвечают лучше, кончики пальцев — медленнее. У каждого человека результат свой, поэтому важны терпение и регулярная связь с врачом. Общая информация о болезни: [витилиго](/ru/conditions/vitiligo).

## Повседневный уход и защита от солнца

- Белые пятна легко обгорают: наносите на открытые участки солнцезащитный крем с высоким фактором, летом носите закрытую одежду и головной убор.
- Следите, чтобы тесная одежда, ремень и часы не натирали кожу.
- Средства косметической маскировки помогают временно скрыть пятна — подбирайте их вместе с врачом.

## Эмоциональная сторона

Витилиго часто даётся тяжело психологически: стеснение, желание избегать людей, тревога. Это естественно. Говорите с близкими, объясните ребёнку, что болезнь не заразна и он ничем не хуже других. Если подавленное настроение держится долго, не стесняйтесь обратиться к психологу.

## Диагностика и лечение витилиго в Фергане и Коканде

В Radeski Skin Clinic дерматолог осмотрит белые пятна, отличит витилиго от похожих болезней и составит план лечения.

- [Лечение витилиго в Фергане](/ru/fargona/vitiligo-davolash) и [в Коканде](/ru/qoqon/vitiligo-davolash);
- [Дерматолог в Фергане](/ru/fargona/dermatolog) и [в Коканде](/ru/qoqon/dermatolog);
- [Фототерапия](/ru/services/dermatologiya/fototerapiya) и [Daavlin NeoLux](/ru/services/apparatnaya-kosmetologiya/daavlin-neolux).

Чем раньше вы покажете белое пятно врачу, тем больше возможностей для лечения.`;
}

function enBody(): string {
  return `Vitiligo is a long-term condition in which patches of skin lose their colour and turn milky white. It can start at any age, most often in childhood or young adulthood. Vitiligo does not hurt and is not life-threatening, but patches on the face and hands are visible and can be very upsetting. Here is how to recognise it, what it can be confused with and when to see a doctor.

## What is vitiligo?

Skin colour comes from melanocytes — cells that make the pigment melanin. In vitiligo these cells stop working or disappear. Current understanding is that the main cause is autoimmune: the immune system mistakenly attacks the body's own pigment cells. That is why vitiligo sometimes occurs together with other autoimmune conditions, such as thyroid disease, and the doctor may suggest extra blood tests.

## Is it contagious? Is it inherited?

- **It is not contagious.** Vitiligo does not spread through handshakes, shared dishes, water or air. Living and working alongside someone with vitiligo is safe.
- **A tendency can run in families.** If relatives have vitiligo the chance is somewhat higher, but that does not mean it will definitely appear.

## First signs

- milky-white or pale patches with clear edges; the skin stays soft, does not itch or flake;
- most often on the fingers and backs of the hands, the face, around the mouth and eyes, on the elbows and knees;
- white hairs, eyebrows or eyelashes inside a patch;
- patches stand out more in summer: the skin around them tans, the patch does not and burns easily.

## What can vitiligo be confused with?

Not every white patch is vitiligo. The most common look-alikes:

- **pityriasis versicolor** — pale or brownish patches with fine scale, caused by a yeast; more: [skin fungus](/en/articles/art-teri-zamburugi);
- **post-inflammatory white spots** — pale areas left after eczema, a rash or a burn; they usually recover with time;
- **pityriasis alba** — faint pale patches with blurred edges on children's faces, often on dry skin; more: [rashes in children](/en/articles/art-bolalarda-teri-toshmalari).

Each needs completely different treatment. So the dermatologist may look at the skin under a **Wood's lamp** (a special ultraviolet light): a vitiligo patch looks bright white, while a fungal patch usually shows a different tint. **Dermatoscopy** magnifies the edges of the patch and the hairs in it; more on the method: [dermatoscopy](/en/articles/art-xol-tekshiruvi-dermatoskopiya). If needed, a skin scraping for fungus or blood tests are ordered.

## What triggers it?

- severe stress and emotional strain;
- skin injuries — cuts, scratches, friction, pressure from tight clothing: a new patch often appears exactly where the skin was hurt (the Koebner phenomenon);
- sunburn.

## Stable and active vitiligo

The stage of the disease matters to the doctor. In **active vitiligo** new patches have appeared in recent months, old ones are growing and their edges are blurring. In **stable vitiligo** patches stay unchanged for a long time. Treatment is chosen accordingly, so photographing the patches now and then helps.

## When to see a doctor

If a white patch appears, see a dermatologist as early as you can. Do not wait at all if:

- new patches are appearing quickly or growing;
- patches are on the face, around the eyes or lips, or on a child;
- a patch itches, flakes, turns red or thickens — it may be a different disease;
- blisters form on a white patch after sun exposure;
- a mole surrounded by a white ring, or a growth next to a patch, changes, enlarges or bleeds.

## What not to do at home

- folk remedies: herbs, vinegar, garlic and other "burning" treatments — a burn triggers new patches;
- lying in the sun or using tanning beds on purpose to "darken" the patches;
- using creams and ointments the doctor did not prescribe, especially steroid ones, on your own for a long time;
- scratching or rubbing the patches hard.

## How is it treated at the clinic?

The doctor chooses the method based on the location and size of the patches, disease activity and age:

- **narrow-band UVB phototherapy** — in Daavlin cabins for widespread patches, on targeted devices for small areas;
- **local treatment** — products prescribed by the doctor, often combined with phototherapy.

How sessions go and what equipment is used: [vitiligo treatment with Daavlin phototherapy](/en/articles/art-vitiligo-daavlin).

Results come gradually: colour usually returns as small dots inside the patch or from its edges, and this takes months. The face and neck usually respond better, fingertips more slowly. Results differ from person to person, so patience and regular contact with the doctor matter. General information on the condition: [vitiligo](/en/conditions/vitiligo).

## Everyday care and sun protection

- White patches burn easily: use a high-protection sunscreen on exposed skin, and wear covering clothes and a hat in summer.
- Make sure tight clothing, belts and watches do not rub the skin.
- Cosmetic camouflage products can hide patches temporarily — choose them together with the doctor.

## The emotional side

Vitiligo is often hard emotionally: embarrassment, avoiding people, anxiety. These feelings are natural. Talk to loved ones and explain to a child that the condition is not contagious and makes them no less than anyone else. If low mood lasts, do not hesitate to see a psychologist.

## Vitiligo diagnosis and treatment in Fergana and Kokand

At Radeski Skin Clinic a dermatologist examines the white patches, tells vitiligo apart from look-alikes and draws up a treatment plan.

- [Vitiligo treatment in Fergana](/en/fargona/vitiligo-davolash) and [in Kokand](/en/qoqon/vitiligo-davolash);
- [Dermatologist in Fergana](/en/fargona/dermatolog) and [in Kokand](/en/qoqon/dermatolog);
- [Phototherapy](/en/services/dermatologiya/fototerapiya) and [Daavlin NeoLux](/en/services/apparatnaya-kosmetologiya/daavlin-neolux).

The earlier a white patch is shown to a doctor, the more treatment options there are.`;
}

export const VITILIGO_GUIDE_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Vitiligo — terida sutdek oq dog'lar: yuqumlimi va irsiymi, birinchi belgilar, o'xshash kasalliklar, nima qilmaslik va davolash imkoniyatlari. Farg'ona va Qo'qonda dermatolog.",
    body: uzBody(),
    keyTakeaways: [
      "Vitiligo — pigment hujayralarining autoimmun yo'qolishi, yuqumli emas",
      "Irsiy moyillik bo'lishi mumkin, lekin bu kasallik albatta paydo bo'ladi degani emas",
      "Har qanday oq dog' vitiligo emas: zamburug' va pitiriaz albadan farqlash uchun ko'rik kerak",
      "Stress, teri jarohatlari va quyosh kuyishi yangi dog'larni qo'zg'atishi mumkin",
      "Davolashni shifokor tanlaydi; natija oylar davomida asta-sekin keladi va har kimda har xil",
    ],
    tags: ['Vitiligo', "Oq dog'lar", 'Pigment yo\'qolishi', 'Dermatolog', 'Fototerapiya', "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Terida birinchi marta sutdek oq dog' paydo bo'lsa",
      "Yangi dog'lar tez ko'payayotgan yoki kattalashayotgan bo'lsa",
      "Bolada oq dog' paydo bo'lsa",
      "Oq dog' qichisa, po'st tashlasa yoki qizarsa",
      "Oq halqali xol yoki dog' yonidagi hosila o'zgarsa yoki qonasa",
    ],
    faq: [
      {
        question: 'Vitiligo yuqadimi?',
        answer:
          "Yo'q. Vitiligo yuqumli kasallik emas: qo'l berib ko'rishish, umumiy idish yoki birga yashash orqali yuqmaydi.",
      },
      {
        question: "Vitiligo to'liq tuzaladimi?",
        answer:
          "Ko'p bemorlarda davolash bilan rang qisman yoki sezilarli darajada tiklanadi, lekin natija har kimda har xil va oylar talab qiladi. Kasallik qaytishi ham mumkin, shuning uchun shifokor kuzatuvi muhim.",
      },
      {
        question: "Oq dog'ni quyoshda qoraytirsa bo'ladimi?",
        answer:
          "Yo'q. Vitiligo dog'i qoraymaydi, balki tez kuyadi, kuyish esa yangi dog'larni qo'zg'atishi mumkin. Ultrabinafsha davolash faqat shifokor nazoratida, aniq dozada o'tkaziladi.",
      },
      {
        question: "Bolamda yuzida oq dog'lar bor — bu vitiligomi?",
        answer:
          "Bolalarda yuzdagi xira, chegarasi noaniq dog'lar ko'pincha pitiriaz alba bo'ladi, ba'zan zamburug'. Aniq chegarali sutdek oq dog'lar vitiligoga ko'proq o'xshaydi. Farqini dermatolog ko'rikda aniqlaydi.",
      },
      {
        question: "Farg'ona va Qo'qonda vitiligoni qayerda tekshirish va davolash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida dermatolog oq dog'larni tekshiradi, tashxis qo'yadi va davolash rejasini tuzadi. Saytda yoki +998 73 200-73-73 (Farg'ona) yoki +998 95 145 73 73 (Qo'qon) raqamlari orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Витилиго — молочно-белые пятна на коже: заразно ли и наследуется ли, первые признаки, похожие болезни, чего не делать и варианты лечения. Дерматолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Витилиго — аутоиммунная потеря пигментных клеток, оно не заразно',
      'Склонность может быть наследственной, но это не значит, что болезнь обязательно передастся',
      'Не каждое белое пятно — витилиго: отличить от грибка и питириаза альба помогает осмотр',
      'Стресс, травмы кожи и солнечные ожоги могут провоцировать новые пятна',
      'Лечение выбирает врач; результат приходит постепенно, за месяцы, и у всех разный',
    ],
    tags: ['Витилиго', 'Белые пятна на коже', 'Потеря пигмента', 'Дерматолог', 'Фототерапия', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'На коже впервые появилось молочно-белое пятно',
      'Новые пятна быстро появляются или растут',
      'Белое пятно появилось у ребёнка',
      'Белое пятно чешется, шелушится или краснеет',
      'Родинка с белым ободком или образование рядом с пятном меняется или кровоточит',
    ],
    faq: [
      {
        question: 'Заразно ли витилиго?',
        answer:
          'Нет. Витилиго не инфекционное заболевание: оно не передаётся через рукопожатие, общую посуду или совместное проживание.',
      },
      {
        question: 'Можно ли полностью вылечить витилиго?',
        answer:
          'У многих пациентов на лечении цвет восстанавливается частично или заметно, но результат у всех разный и требует месяцев. Болезнь может возвращаться, поэтому важно наблюдение врача.',
      },
      {
        question: 'Можно ли «затемнить» белое пятно на солнце?',
        answer:
          'Нет. Пятно витилиго не загорает, а быстро обгорает, и ожог может спровоцировать новые пятна. Ультрафиолетовое лечение проводят только под контролем врача и в точной дозе.',
      },
      {
        question: 'У ребёнка белые пятна на лице — это витилиго?',
        answer:
          'Бледные пятна с размытыми краями на лице у детей чаще оказываются питириазом альба, иногда грибком. На витилиго больше похожи молочно-белые пятна с чёткими краями. Отличить их может дерматолог на осмотре.',
      },
      {
        question: 'Где обследовать и лечить витилиго в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде дерматолог осмотрит белые пятна, поставит диагноз и составит план лечения. Записаться можно на сайте или по телефону +998 73 200-73-73 (Фергана) или +998 95 145 73 73 (Коканд).',
      },
    ],
  },
  en: {
    summary:
      'Vitiligo — milky-white patches on the skin: is it contagious or inherited, first signs, look-alikes, what not to do and treatment options. Dermatologists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Vitiligo is an autoimmune loss of pigment cells and is not contagious',
      'A tendency can run in families, but that does not mean it will be passed on',
      'Not every white patch is vitiligo: an exam tells it apart from fungus and pityriasis alba',
      'Stress, skin injuries and sunburn can trigger new patches',
      'The doctor chooses the treatment; results come gradually over months and vary between people',
    ],
    tags: ['Vitiligo', 'White patches on skin', 'Loss of pigment', 'Dermatologist', 'Phototherapy', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A milky-white patch appears on the skin for the first time',
      'New patches are appearing quickly or growing',
      'A white patch appears on a child',
      'A white patch itches, flakes or turns red',
      'A mole with a white ring, or a growth next to a patch, changes or bleeds',
    ],
    faq: [
      {
        question: 'Is vitiligo contagious?',
        answer:
          'No. Vitiligo is not an infection: it does not spread through handshakes, shared dishes or living together.',
      },
      {
        question: 'Can vitiligo be cured completely?',
        answer:
          'Many patients regain colour partly or noticeably with treatment, but results vary and take months. The condition can come back, so follow-up with the doctor matters.',
      },
      {
        question: 'Can I darken a white patch in the sun?',
        answer:
          'No. A vitiligo patch does not tan but burns quickly, and a burn can trigger new patches. Ultraviolet treatment is given only under a doctor\'s supervision at a precise dose.',
      },
      {
        question: 'My child has white patches on the face — is it vitiligo?',
        answer:
          'Faint patches with blurred edges on a child\'s face are more often pityriasis alba, sometimes a fungus. Milky-white patches with sharp edges look more like vitiligo. A dermatologist can tell them apart at an exam.',
      },
      {
        question: 'Where can vitiligo be checked and treated in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a dermatologist examines the white patches, makes the diagnosis and draws up a treatment plan. Book on the website or call +998 73 200-73-73 (Fergana) or +998 95 145 73 73 (Kokand).',
      },
    ],
  },
};

export const VITILIGO_GUIDE_ARTICLE: Article = {
  id: 'art-vitiligo-belgilari',
  slug: 'vitiligo-belgilari',
  title: {
    uz: "Vitiligo: terida oq dog'lar — birinchi belgilar, sabablar va nima qilish kerak",
    ru: 'Витилиго: белые пятна на коже — первые признаки, причины и что делать',
    en: 'Vitiligo: White Patches on the Skin — First Signs, Causes and What to Do',
  },
  summary: {
    uz: VITILIGO_GUIDE_ARTICLE_CATALOG.uz.summary,
    ru: VITILIGO_GUIDE_ARTICLE_CATALOG.ru.summary,
    en: VITILIGO_GUIDE_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: VITILIGO_GUIDE_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: VITILIGO_GUIDE_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: VITILIGO_GUIDE_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: "Murodov Muhammadsolih Azamat o'g'li",
    ru: 'Муродов Мухаммадсолих Азамат угли',
    en: 'Dr. Muhammadsolih Azamat ugli Murodov',
  },
  date: '2026-11-28',
  image: '/articles/vitiligo-cover.jpg',
  images: {
    uz: '/articles/vitiligo-cover.jpg',
    ru: '/articles/vitiligo-cover.jpg',
    en: '/articles/vitiligo-cover.jpg',
  },
  views: 0,
};
