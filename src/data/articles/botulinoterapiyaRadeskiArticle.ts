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

const COVER = '/services/in-ekcionnaya/botulino.jpg';

function uzBody(): string {
  return `## Botulinoterapiya nima?

**Botulinoterapiya** — Radeski Skin & Aesthetic Clinic da mimik mushaklariga maxsus preparatlar kiritish orqali ajinlarni yumshatish va yuz konturini tiklash usuli. Preparatlar **A tipidagi botulin toksini**ning tozalangan va zaiflashtirilgan shaklidir: **Dysport**, **Relatoks** yoki **Kseomin**. Ular amal qilish printsipi bo‘yicha asl amerika **Botox** preparati bilan bir xil — mimik mushaklarini vaqtincha bo‘shashtiradi, natijada peshona, burun orasi, ko‘z burchaklari va bo‘ynidagi ajinlar tekislanadi, bo‘yindagi «tyajlar» kamroq seziladi.

![Botulinoterapiya — Radeski Skin Clinic](${COVER})

## Botulinoterapiyadan qanday effekt?

Muolajadan keyingi natija **3–8 oy** davom etadi — shuning uchun ko‘pchilik «qancha tez-tez qilish mumkin?» deb so‘raydi. Inyeksiyalar odatda **har 4–12 oyda** takrorlanadi. Ba’zilar doimiy qiladi, ba’zilar tanaffus bilan — lekin takroriy kiritishda mushak atrofiyasi bo‘lmaydi. Aksincha, mushak qon ta’minoti yomonlashmaydi, balki yaxshilanadi: spazmlangan mushak tomirlarni siqmaydi.

Radeski Skin & Aesthetic Clinic da botulotoksin asosidagi preparatlar bilan inyeksiya — chuqur ajinlarni tez va qulay tuzatish usuli. Peshona va burun orasidagi gorizontal ajinlar deyarli to‘liq yo‘qoladi, «o‘rdak oyoqlari» — ko‘z atrofidagi ajinlar ham shu jumladan.

## Muolaja qanday o‘tadi?

Preparat kiritish **15–20 daqiqa** davom etadi. Odatda anesteziya talab qilinmaydi; istasangiz, oldindan mahalliy og‘riqsizlantiruvchi krem surtish mumkin.

Klinikada **ingichka ignalar** bilan preparat teri ostidagi mayda mimik mushaklariga kiritiladi — aynan ular peshona, ko‘z burchaklari, burun orasi, burun orqasi va yuqori labda ajinlar hosil qiladi. Botulotoksin o‘rtacha **bir haftadan** keyin ta’sir qila boshlaydi: mushak harakatchanligi vaqtincha cheklanadi, ajinlar tekislanadi, teri sirti silliq bo‘ladi.

Yakuniy natijani **2 haftadan** keyin baholash mumkin.

## Asosiy ko‘rsatmalar

Botulinoterapiya quyidagi zonalar uchun qo‘llaniladi:

- peshonadagi gorizontal ajinlar;
- qoshlar orasidagi vertikal ajinlar;
- burun orasidagi chiziq;
- ko‘z atrofidagi «o‘rdak oyoqlari»;
- yuqori lab ustidagi mayda ajinlar;
- bo‘yindagi vertikal va gorizontal ajinlar;
- tushgan lab burchaklari.

Chuqur mimik ajinlari odatda qovoq qisish, ko‘z qisish, peshonani burish odatidan paydo bo‘ladi. Yuz mushaklari tonusi pasayganda to‘qimalar tushadi, yuz konturi xiralashadi. Zalomlarning shakllanish xavfini kamaytirish, ajinlardan xalos bo‘lish, lab burchaklarini ko‘tarish, bo‘yin va iyakni lifting qilish, yuzning pastki uchtini aniqroq qilish — bularning barchasi botulotoksin inyeksiyalari bilan mumkin.

## Mimik ajinlar qanday paydo bo‘ladi?

Mimik ajinlarining sababi — hissiyot va kayfiyatni uzatuvchi mushaklarning tabiiy tarangligi. Vaqt o‘tishi bilan eng faol zonalar — yuz ifodasi, xarakter va odatlarimizning aksidir.

- **Peshonadagi gorizontal chiziqlar** — tez-tez qosh ko‘taradigan, hayratini ko‘rsatadigan odamlarda.
- **«O‘rdak oyoqlari»** — ko‘z atrofidagi mayda va chuqur ajinlar; ko‘pincha kuluvchan odamlarda yoki past ko‘rishda ko‘z qisish odatidan.
- **Qoshlar orasidagi vertikal chiziqlar** — jiddiy o‘ylaydigan yoki qovoq qisadigan odamlarda.
- **Bo‘yindagi uzun mushak «tyajlari»** — sport bilan shug‘ullanadigan, lekin bo‘yin mushaklarini noto‘g‘ri yuklaydigan odamlarda.
- **Lab atrofidagi chiziqlar** — yuzning eng harakatchan zonasidagi faol mimikdan.

Afsuski, ajinlar kamdan-kam hollarda bezak bo‘ladi — lekin ular tabiiy yuz ifodasi va ba’zan xarakterimizning aksidir. Yuzdagi qariyish belgilarini kamaytirish uchun uzoq vaqt izlanishlar olib borildi; va ko‘p hollarda bu usul tasodifan topildi.

## Botulinoterapiya tarixi

Botulinoterapiya kundalik tilga «Botoks» deb kirgan bo‘lsa-da, aslida **nevrologiyadan** kelib chiqqan. Nevropatologlar fokal yuz spazmlarini davolashda preparatning **ajinlarni yo‘q qilish** kabi «yon ta’sirini» birinchi bo‘lib kuzatganlar — shundan keyin kosmetologiyada keng qo‘llanila boshlandi.

## Muolajadan keyin nima qilmaslik kerak?

Bir necha kun davomida quyidagilardan voz keching:

- yuz massaji;
- kosmetika (shifokor tavsiyasiga qarab);
- faol jismoniy mashqlar;
- katta miqdordagi alkogol;
- qon suyultiruvchi preparatlar (shish va noqulaylik xavfini oshiradi);
- terini qizdirish (sauna, issiq dush);
- ba’zi antibiotik va og‘riq qoldiruvchi dorilar (qon ivishiga ta’sir qilishi mumkin);
- chekish.

## Botoks yoki gialuron kislotasi?

**Botoks** nozik zonalar — peshona, qoshlar orasi, ko‘z atrofi — uchun samarali. **Gialuron kislotasi** ko‘z atrofidagi mimik ajinlarini to‘g‘ridan-to‘g‘ri yo‘q qila olmaydi: teri juda nozik, noto‘g‘ri inyeksiya to‘qimalarni qattiqroq qilishi mumkin. Ko‘pincha ikkalasi turli maqsadlar uchun kombinatsiyada qo‘llaniladi.

## Qaysi ajinlar botoks bilan ketmaydi?

Botoks faqat **mimik mushak faolligi** tufayli paydo bo‘lgan ajinlarni yumshatadi. **Statik ajinlar** — teri elastikligini yo‘qotish natijasidagi chiziqchalar — botoks bilan to‘liq yo‘qolmaydi; ular uchun biorevitalizatsiya, lazer yoki boshqa usullar kerak bo‘lishi mumkin.

## Qarshi ko‘rsatmalar

Botulinoterapiya quyidagi holatlarda qilinmaydi yoki kechiktiriladi:

- gepatit, onkologiya, gemofiliya va boshqa og‘ir kasalliklar;
- surunkali kasalliklarning kuchayishi;
- asab tizimiga ta’sir qiluvchi ba’zi dorilar qabul qilinayotgan payt;
- homiladorlik va emizish davri;
- yuz terisida yallig‘lanish belgilari: qizarish, toshma, shish;
- labial gerpesning kuchayishi.

## Mumkin bo‘lgan nojo‘ya ta'sirlar

Nadirda quyidagilar paydo bo‘lishi mumkin:

- ko‘z va burun orasi atrofida shish va ko‘karish;
- yuz asimmetriyasi;
- yuqori qovoqning tushishi (ptoz);
- talaffuzda vaqtinchalik o‘zgarish.

Bularning oldini olish uchun doza, nuqta tanlash va shifokor tajribasi muhim. Radeski Skin Clinic da inyeksiyalar dermatolog-kosmetolog nazoratida, individual rejada o‘tkaziladi.

## Qaysi preparat tanlanadi?

Ko‘pchilik mutaxassislar birinchi marta **Kseomin** yoki **Dysport** kabi sertifikatlangan preparatlarni tavsiya qiladi. Preparat tanlash — teri holati, zona va xohlagan effektga qarab konsultatsiyada aniqlanadi.

Bog‘liq xizmatlar: [Botulinoterapiya](/uz/services/in-ekcionnaya-kosmetologiya/botulino), [Inyeksion kosmetologiya](/uz/services/in-ekcionnaya-kosmetologiya), [Biorevitalizatsiya](/uz/articles/biorevitalizatsiya-gialuron-kislota-radeski), [Narxlar](/uz/prices).`;
}

function ruBody(): string {
  return `## Что такое ботулинотерапия?

**Ботулинотерапия** в Radeski Skin & Aesthetic Clinic — процедура введения в мимические мышцы препаратов на основе **очищенного и ослабленного нейротоксина ботулина типа А**. Это могут быть **Диспорт**, **Релатокс** или **Ксеомин** — по принципу действия они идентичны исходному американскому **Ботоксу**. Препараты расслабляют мимическую мускулатуру, в результате разглаживаются морщины в области лба, переносицы, уголков глаз, становятся незаметными «тяжи» на шее.

![Ботулинотерапия — Radeski Skin Clinic](${COVER})

## Какой эффект от ботулинотерапии?

Эффект от процедур держится **от 3 до 8 месяцев** — поэтому многие задаются вопросом, как часто можно вводить препарат. Инъекции возможно проводить регулярно, **каждые 4–12 месяцев**. Некоторые вводят препарат постоянно, другие — с перерывами, но даже при многократном введении **атрофия мышц не происходит**. Кровоснабжение мышцы не ухудшается, а улучшается: сосуды не сжимаются спазмированной мышцей.

Инъекции препаратов на основе ботулотоксина в Radeski Skin & Aesthetic Clinic — быстрый и удобный способ коррекции глубоких морщин. Горизонтальные морщины на лбу и переносице практически полностью исчезают, это касается и «гусиных лапок» — морщин около глаз.

## Как проходит процедура?

Введение препарата занимает **около 15–20 минут**. Процедура обычно не требует анестезии, но при желании можно использовать местные анестетики, которые предварительно наносятся на кожу.

Во время процедуры используются **тонкие иглы**, с помощью которых препараты вводят в мелкие мышцы под кожей — именно они, сокращаясь, создают морщины на лбу, в углах глаз, на переносице и спинке носа, верхней губе. Препараты начинают действовать в среднем **через неделю**: блокируется двигательная активность мышц, морщины разглаживаются, поверхность кожи становится ровной.

Окончательно оценить результат возможно **через 2 недели**.

## Основные направления действия

- коррекция горизонтальных морщин на лбу;
- коррекция вертикальных морщин между бровями;
- коррекция складки на переносице;
- коррекция «гусиных лапок» (морщинок вокруг глаз);
- коррекция мелких морщин над верхней губой;
- коррекция вертикальных и горизонтальных морщин на шее;
- коррекция опущенных уголков губ.

Глубокие мимические морщины формируются как следствие привычки хмуриться, щуриться, морщить лоб. Снижение тонуса лицевых мышц приводит к опущению тканей и размыванию контура лица. Предотвратить риски формирования заломов, избавиться от морщин, приподнять уголки губ, выполнить лифтинг шеи и подбородка, сделать контуры нижней трети лица более очерченными — всё это возможно с помощью инъекций ботулотоксинов.

## Ботулинотерапия против мимических морщин

Одна из причин образования мимических морщин — естественное напряжение мышц, передающих наши эмоции. Со временем в наиболее активных зонах появляются более или менее выраженные складки, контролировать которые становится всё сложнее.

- **Горизонтальные морщины на лбу** — у тех, кто часто вскидывает брови.
- **«Гусиные лапки»** — мелкие и глубокие морщинки вокруг глаз; часто у людей, склонных к смеху, или от привычки прищуриваться.
- **Вертикальные складки между бровями** — у тех, кто напряжённо думает или хмурится.
- **Продольные мышечные тяжи на шее** — у людей, увлечённых фитнесом при неправильной нагрузке на шею.
- **Складки вокруг губ** — от активной мимики, самой подвижной зоны лица.

Морщинки редко украшают людей, особенно женщин, хотя всё это — результат естественных проявлений и иногда отражение характера. Чтобы сделать незаметными признаки старения, специалисты долго искали подходящее средство — и оно появилось, как часто бывает, случайно.

## История метода

Процедуры ботулинотерапии, или в просторечии «Ботокс», пришли в косметологию **из неврологии**. Именно невропатологи впервые заметили исчезновение морщин как побочный эффект при лечении фокальных лицевых спазмов.

## Чего нельзя делать после процедуры?

- массаж лица;
- косметика (по рекомендации врача);
- физическая активность;
- алкоголь в больших количествах;
- препараты, разжижающие кровь (риск отёков);
- перегрев кожи (сауна, горячий душ);
- антибиотики и анальгетики, влияющие на свёртываемость крови;
- курение.

## Ботокс или гиалуроновая кислота?

**Ботокс** эффективен в отношении деликатных зон — лоб, межбровье, область вокруг глаз. **Гиалуроновая кислота** не способна устранить мимические морщины вокруг глаз: кожа нежная, инъекции могут привести к уплотнению ткани. Часто оба метода сочетаются в индивидуальном anti-age плане.

## Какие морщины не убирает ботокс?

После инъекций исчезают только те морщины, которые образовались **в результате активности лицевых мышц**. Статические морщины и следствия возрастного растягивания кожи инъекциями ботулотоксина полностью не разгладить — для них нужны другие методы.

## Почему нельзя колоть ботокс только в межбровье?

Доказано, что лобная и межбровная мышцы являются **антагонистами**. Если «выключить» область лба, а межбровье оставить активным, это может **усилить морщины именно в межбровной зоне**. Поэтому зоны планируют комплексно.

## Противопоказания

- гепатит, онкологические заболевания, гемофилия и другие тяжёлые состояния;
- обострение хронических заболеваний;
- приём некоторых лекарств, влияющих на нервную систему;
- беременность и период грудного вскармливания;
- признаки воспалительного процесса на коже лица;
- обострение лабиального герпеса.

## Возможные последствия

- отёчность и синяки в области глаз и переносицы;
- асимметрия лица;
- птоз (нависание верхнего века);
- нарушение артикуляции.

Риски минимизируются правильной дозой, точкой введения и опытом врача. В Radeski Skin Clinic инъекции проводятся под контролем дерматолога-косметолога по индивидуальному протоколу.

## Какой препарат выбрать?

Большинство косметологов рекомендуют для первого применения препараты группы ботулотоксинов — **Ксеомин** или **Диспорт**. Выбор препарата определяется на консультации с учётом зоны, состояния кожи и желаемого эффекта.

Связанные услуги: [Ботулинотерапия](/ru/services/in-ekcionnaya-kosmetologiya/botulino), [Инъекционная косметология](/ru/services/in-ekcionnaya-kosmetologiya), [Биоревитализация](/ru/articles/biorevitalizatsiya-gialuron-kislota-radeski), [Цены](/ru/prices).`;
}

function enBody(): string {
  return `## What is botulinum therapy?

**Botulinum therapy** at Radeski Skin & Aesthetic Clinic is a procedure in which certified products based on **purified, weakened type A botulinum neurotoxin** are injected into facial expression muscles. These may include **Dysport**, **Relatox**, or **Xeomin** — they work on the same principle as the original American **Botox**. The muscles relax temporarily, smoothing forehead, glabellar, and crow's feet wrinkles and reducing visible neck bands.

![Botulinum therapy — Radeski Skin Clinic](${COVER})

## What results can you expect?

Results typically last **3 to 8 months**, so many patients ask how often treatment can be repeated. Injections are usually done every **4–12 months**. Some patients maintain treatment continuously, others take breaks — but repeated use does **not cause muscle atrophy**. Blood supply to the muscle may even improve because spasm no longer compresses vessels.

At Radeski Skin & Aesthetic Clinic, botulinum toxin injections are a fast, convenient way to correct deep expression lines. Horizontal forehead and glabellar wrinkles can be nearly eliminated, as can crow's feet around the eyes.

## How is the procedure performed?

Injection takes about **15–20 minutes**. Anesthesia is usually not required; topical numbing cream can be applied if desired.

**Fine needles** deliver the product into small muscles beneath the skin — the same muscles that create wrinkles on the forehead, at the eye corners, on the glabella, nose bridge, and upper lip. The product begins to work on average **within one week**, reducing muscle movement so wrinkles smooth and skin looks more even.

Final results are assessed after **about two weeks**.

## Main treatment areas

- horizontal forehead lines;
- vertical frown lines between the brows;
- glabellar fold;
- crow's feet around the eyes;
- fine lines above the upper lip;
- vertical and horizontal neck wrinkles;
- downturned mouth corners.

Deep expression wrinkles often form from habits such as frowning, squinting, or raising the brows. Reduced facial muscle tone can lead to tissue descent and a less defined contour. Botulinum injections can help prevent creases, soften wrinkles, lift mouth corners, improve the neck and chin area, and refine the lower third of the face.

## Why expression wrinkles appear

One cause is the natural tension of muscles that convey emotion. Over time, the most active zones develop more visible folds that become harder to control.

- **Horizontal forehead lines** — common in people who raise their brows often.
- **Crow's feet** — fine and deeper lines around the eyes, often in expressive people or those who squint.
- **Vertical glabellar lines** — frequent in people who concentrate intensely or frown.
- **Neck bands** — sometimes seen in fitness enthusiasts with excess neck muscle tension.
- **Perioral lines** — from active lip and mouth movement.

Although wrinkles rarely feel flattering, they often reflect natural expression and sometimes character. Specialists searched for effective solutions for years — and this method, like many breakthroughs, was discovered partly by chance.

## History of the method

Botulinum therapy entered **cosmetology from neurology**. Neurologists first noticed wrinkle reduction as a side effect when treating focal facial spasms.

## What to avoid after treatment

For several days, avoid:

- facial massage;
- makeup (unless your doctor advises otherwise);
- intense exercise;
- large amounts of alcohol;
- blood-thinning medications;
- heat exposure (sauna, very hot showers);
- certain antibiotics and pain relievers that affect clotting;
- smoking.

## Botox vs hyaluronic acid

**Botox** is effective for delicate expression zones — forehead, glabella, and eye area. **Hyaluronic acid** cannot directly remove dynamic crow's feet; the perioral skin is delicate and improper filler can cause tissue firmness. Both are often combined in a personalized anti-aging plan.

## Which wrinkles does Botox not remove?

Botox smooths wrinkles caused by **active muscle movement**. **Static wrinkles** from skin aging and loss of elasticity are not fully corrected by botulinum toxin alone — other treatments may be needed.

## Why not treat only the glabella?

The forehead and glabellar muscles are **antagonists**. If the forehead is treated but the glabella remains active, frown lines may become **more pronounced**. Zones should be planned comprehensively.

## Contraindications

- hepatitis, cancer, hemophilia, and other serious conditions;
- flare of chronic disease;
- certain medications affecting the nervous system;
- pregnancy and breastfeeding;
- active inflammation on facial skin;
- labial herpes flare.

## Possible side effects

- swelling and bruising around the eyes or glabella;
- facial asymmetry;
- eyelid ptosis;
- temporary changes in speech articulation.

Proper dosing, injection points, and physician experience minimize risks. At Radeski Skin Clinic, injections are performed under dermatologist supervision with an individual protocol.

## Which product is best?

Many specialists recommend certified botulinum products such as **Xeomin** or **Dysport** for first-time treatment. Product choice is made at consultation based on zone, skin condition, and desired effect.

Related services: [Botulinum therapy](/en/services/in-ekcionnaya-kosmetologiya/botulino), [Injection cosmetology](/en/services/in-ekcionnaya-kosmetologiya), [Biorevitalization](/en/articles/biorevitalizatsiya-gialuron-kislota-radeski), [Prices](/en/prices).`;
}

export const BOTULINOTERAPIYA_RADESKI_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Botulinoterapiya (Botox, Dysport, Kseomin): mimik ajinlarni yumshatish, muolaja jarayoni, ko‘rsatmalar, parvarish va tez-tez beriladigan savollarga javoblar — Radeski Skin Clinic.',
    body: uzBody(),
    keyTakeaways: [
      'Botulinoterapiya mimik mushaklarini vaqtincha bo‘shashtirib ajinlarni tekislaydi',
      'Effekt 3–8 oy saqlanadi; takrorlash odatda har 4–12 oyda',
      'Muolaja 15–20 daqiqa; natija 1 haftadan keyin boshlanadi, 2 haftada baholanadi',
      'Peshona, qoshlar orasi, ko‘z atrofi, lab va bo‘yin zonalarida qo‘llaniladi',
      'Statik ajinlar uchun botoks yetarli bo‘lmasligi mumkin — kombinatsiyali reja kerak',
    ],
    tags: [
      'Botulinoterapiya',
      'Botoks',
      'Dysport',
      'Kseomin',
      'Mimik ajinlar',
      'Inyeksion kosmetologiya',
      'Radeski Skin Clinic',
      'Farg\'ona',
    ],
    whenToSeeDoctor: [
      'Peshona, qoshlar orasi yoki ko‘z atrofida chuqur ajinlar paydo bo‘lsa',
      'Mimik ifodangiz tabiiy, lekin ajinlar ko‘rinadigan bo‘lib qolsa',
      'Bo‘yin «tyajlari» yoki tushgan lab burchaklari bezovta qilsa',
      'Qarshi ko‘rsatmalar va takroriy muolaja rejasi haqida maslahat kerak bo‘lsa',
    ],
    faq: [
      {
        question: 'Yuz botoksdan keyin qanday ko‘rinadi?',
        answer:
          'Bir necha kundan keyin effekt seziladi. Siz avvalgidek kulib, qovoq qisib, hayratlanasiz — faqat yuzdagi ajinlar kamroq ko‘rinadi.',
      },
      {
        question: 'Kimga botoks qilinmaydi?',
        answer:
          'Gepatit, onkologiya, gemofiliya, homiladorlik, emizish, surunkali kasallik kuchayishi va ba’zi dorilar qabul qilinayotganda muolaja qilinmaydi.',
      },
      {
        question: 'Nega botoksdan keyin yana ko‘proq ajin paydo bo‘ladi?',
        answer:
          '6–9 oy o‘tgach preparat ta’siri kamayadi, mushaklar yana faollashadi va ajinlar qaytadi. Effektni saqlash uchun muolajani muntazam takrorlash kerak.',
      },
      {
        question: 'Nega faqat qoshlar orasiga qilish mumkin emas?',
        answer:
          'Peshona va qoshlar orasi mushaklari antogonist. Faqat peshonani «o‘chirib», qoshlar orasini qoldirsangiz, aynan shu zonada ajinlar kuchayishi mumkin.',
      },
      {
        question: 'Peshonaga ukol qo‘ygandan keyin qanday ko‘rinadi?',
        answer:
          'Chiziqchalar tekislanadi, peshona silliq va yosh ko‘rinadi. Noto‘g‘ri doza yoki ortiqcha nuqtalar nojo‘ya oqibatlarga olib kelishi mumkin — shuning uchun faqat mutaxassisda qiling.',
      },
      {
        question: 'Peshonadagi ajinlar uchun nima yaxshiroq — Botoks yoki gialuron?',
        answer:
          'Mimik ajinlar uchun botoks samaraliroq. Ko‘z atrofi va nozik zonalar uchun gialuron kislotasi alohida reja bilan qo‘llaniladi.',
      },
      {
        question: 'Qaysi botoks yuz uchun eng yaxshi?',
        answer:
          'Ko‘pchilik birinchi marta Kseomin yoki Dysport kabi sertifikatlangan preparatlarni tavsiya qiladi. Aniq tanlov konsultatsiyada qilinadi.',
      },
    ],
  },
  ru: {
    summary:
      'Ботулинотерапия (Ботокс, Диспорт, Ксеомин): разглаживание мимических морщин, ход процедуры, показания, уход и ответы на частые вопросы — Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'Ботулинотерапия временно расслабляет мимические мышцы и разглаживает морщины',
      'Эффект держится 3–8 месяцев; повтор — обычно каждые 4–12 месяцев',
      'Процедура 15–20 минут; результат через неделю, оценка через 2 недели',
      'Подходит для лба, межбровья, глаз, губ и шеи',
      'Статические морщины могут требовать комбинированного подхода',
    ],
    tags: [
      'Ботулинотерапия',
      'Ботокс',
      'Диспорт',
      'Ксеомин',
      'Мимические морщины',
      'Инъекционная косметология',
      'Radeski Skin Clinic',
      'Фергана',
    ],
    whenToSeeDoctor: [
      'Появились глубокие морщины на лбу, межбровье или вокруг глаз',
      'Мимика естественная, но морщины заметны',
      'Беспокоят «тяжи» на шее или опущенные уголки губ',
      'Нужна консультация по противопоказаниям и плану повторных процедур',
    ],
    faq: [
      {
        question: 'Как будет выглядеть лицо после ботокса?',
        answer:
          'Эффект заметен через несколько дней. Вы по-прежнему будете улыбаться, хмуриться и удивляться — только без выраженных морщин.',
      },
      {
        question: 'Кому нельзя колоть ботокс?',
        answer:
          'При гепатите, онкологии, гемофилии, беременности, грудном вскармливании, обострении хронических заболеваний и приёме ряда лекарств процедура противопоказана.',
      },
      {
        question: 'Почему после ботокса снова больше морщин?',
        answer:
          'Через 6–9 месяцев влияние ослабевает, мышцы снова активны — морщины возвращаются. Для сохранения эффекта инъекции повторяют регулярно.',
      },
      {
        question: 'Почему нельзя колоть ботокс только в межбровье?',
        answer:
          'Лобная и межбровная мышцы — антагонисты. Если «выключить» лоб, а межбровье оставить активным, морщины в межбровье могут усилиться.',
      },
      {
        question: 'Как выглядит лоб сразу после уколов?',
        answer:
          'Складки разглаживаются, лоб выглядит гладким и свежим. Неправильная доза или слишком много точек могут дать нежелательные последствия.',
      },
      {
        question: 'Что лучше от морщин на лбу — ботокс или гиалуроновая кислота?',
        answer:
          'Для мимических морщин эффективнее ботокс. Гиалуроновая кислота применяется по отдельному плану для других задач.',
      },
      {
        question: 'Какой ботокс для лица самый лучший?',
        answer:
          'Чаще рекомендуют сертифицированные препараты — Ксеомин или Диспорт. Точный выбор определяется на консультации.',
      },
    ],
  },
  en: {
    summary:
      'Botulinum therapy (Botox, Dysport, Xeomin): smoothing expression wrinkles, procedure steps, indications, aftercare, and FAQ — Radeski Skin Clinic.',
    body: enBody(),
    keyTakeaways: [
      'Botulinum therapy temporarily relaxes expression muscles and smooths wrinkles',
      'Results last 3–8 months; repeat treatment is usually every 4–12 months',
      'Procedure takes 15–20 minutes; effect starts in about a week, final assessment at 2 weeks',
      'Treats forehead, glabella, eye area, lips, and neck zones',
      'Static wrinkles may need a combined treatment plan',
    ],
    tags: [
      'Botulinum therapy',
      'Botox',
      'Dysport',
      'Xeomin',
      'Expression wrinkles',
      'Injection cosmetology',
      'Radeski Skin Clinic',
      'Fergana',
    ],
    whenToSeeDoctor: [
      'Deep wrinkles on the forehead, glabella, or around the eyes',
      'Expression feels natural but lines remain visible',
      'Neck bands or downturned mouth corners are a concern',
      'You need advice on contraindications and repeat treatment schedule',
    ],
    faq: [
      {
        question: 'What will my face look like after Botox?',
        answer:
          'You will notice results within a few days. You can still smile, frown, and express emotion — with less visible wrinkling.',
      },
      {
        question: 'Who should not receive Botox?',
        answer:
          'Treatment is not suitable during pregnancy, breastfeeding, certain serious illnesses, flare of chronic disease, or while taking some medications.',
      },
      {
        question: 'Why do wrinkles return after Botox?',
        answer:
          'After about 6–9 months the effect fades and muscle movement returns. Regular maintenance injections preserve the cosmetic result.',
      },
      {
        question: 'Why not treat only the glabella?',
        answer:
          'Forehead and glabellar muscles are antagonists. Treating only one zone can worsen lines in the other.',
      },
      {
        question: 'What does the forehead look like right after injections?',
        answer:
          'Lines soften and the forehead looks smoother and fresher. Incorrect dosing or too many injection points can cause unwanted effects.',
      },
      {
        question: 'Botox or hyaluronic acid for forehead wrinkles?',
        answer:
          'Dynamic forehead lines respond best to botulinum toxin. Hyaluronic acid is used for other goals in a separate plan.',
      },
      {
        question: 'Which botulinum product is best for the face?',
        answer:
          'Certified products such as Xeomin or Dysport are commonly recommended. The exact choice is made at consultation.',
      },
    ],
  },
};

export const BOTULINOTERAPIYA_RADESKI_ARTICLE: Article = {
  id: 'art-botulinoterapiya-radeski',
  slug: 'botulinoterapiya-mimik-ajinlar-radeski',
  title: {
    uz: 'Botulinoterapiya: mimik ajinlar, Botox, Dysport va parvarish',
    ru: 'Ботулинотерапия: мимические морщины, Ботокс, Диспорт и уход',
    en: 'Botulinum Therapy: Expression Wrinkles, Botox, Dysport, and Aftercare',
  },
  summary: {
    uz: BOTULINOTERAPIYA_RADESKI_ARTICLE_CATALOG.uz.summary,
    ru: BOTULINOTERAPIYA_RADESKI_ARTICLE_CATALOG.ru.summary,
    en: BOTULINOTERAPIYA_RADESKI_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: BOTULINOTERAPIYA_RADESKI_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: BOTULINOTERAPIYA_RADESKI_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: BOTULINOTERAPIYA_RADESKI_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Radeski Skin Clinic',
    ru: 'Radeski Skin Clinic',
    en: 'Radeski Skin Clinic',
  },
  date: '2026-09-15',
  image: COVER,
  images: {
    uz: COVER,
    ru: COVER,
    en: COVER,
  },
  views: 0,
};
