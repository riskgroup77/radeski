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
 * Calluses and corns — a podiatry article for the podiatrist city pages and the nail/foot
 * clinic. Points: why they form (pressure, shoes, foot shape), callus vs corn vs plantar wart,
 * podiatric removal, why home cutting and acid plasters are risky (especially in diabetes).
 */

function uzBody(): string {
  return `Qadoq va kesaklar — oyoq terisining doimiy bosim va ishqalanishga himoya javobi. Teri o'sha joyda qalinlashib, qattiq qatlam hosil qiladi. Bu xavfli kasallik emas, lekin yurganda og'riq beradi, yorilib infeksiya kirishi mumkin, qandli diabeti bor odamlarda esa jiddiy asoratlarga olib keladi. To'g'ri parvarish va podolog yordami bilan ulardan xavfsiz qutulish mumkin.

## Qadoq, kesak va so'gal: farqi nima?

- **Qadoq (oyoq tagidagi qalinlashish)** — tovon, oyoq kafti old qismi yoki bosh barmoq yonida keng, sariqroq, qattiq teri. Odatda og'riq kam.
- **Kesak (o'zakli qadoq)** — kichik, dumaloq, markazida qattiq "o'zak" bo'ladi; ko'pincha barmoqlar ustida yoki orasida. Bosganda o'tkir og'riq beradi.
- **Oyoq tagidagi so'gal** — virus chaqiradi, yuzasida mayda qora nuqtalar ko'rinadi, yon tomondan siqqanda og'riydi. U kesakka o'xshaydi, lekin boshqacha davolanadi.

Shuning uchun "kesak"ni davolashdan oldin uni podolog yoki dermatologga ko'rsatish muhim.

## Nima uchun paydo bo'ladi?

- tor, qattiq yoki baland poshnali poyabzal;
- paypoqsiz yoki burmali paypoq bilan yurish;
- uzoq tik turish, ko'p yurish, sport;
- oyoq shaklining o'zgarishi: yassi oyoq, bosh barmoq qiyshayishi, bolg'asimon barmoqlar;
- ortiqcha vazn;
- yoshi bilan oyoq tagidagi yog' qatlamining yupqalashishi.

## Podolog qanday yordam beradi?

- **Apparat bilan ishlov** — podolog qalinlashgan terini maxsus frezalar bilan qatlamma-qatlam, og'riqsiz olib tashlaydi; kesakning o'zagi ham ehtiyotkorlik bilan chiqariladi.
- **Bosimni kamaytirish** — yumshoq qistirmalar, barmoq ajratgichlar, kerak bo'lsa ortopedik ichki taglik tavsiya qilinadi; busiz qadoq qaytadan paydo bo'ladi.
- **Parvarish rejasi** — teri turiga mos yumshatuvchi kremlar va uy parvarishi.

Muolajadan keyin odam darhol yengillik sezadi va odatda o'sha kuniyoq odatdagi poyabzalda yuradi.

## Uyda nima qilish mumkin va nima mumkin emas?

**Mumkin:**

- iliq suvda oyoqni 10 daqiqa yumshatib, qadoqni pemza bilan yengil ishqalash;
- har kuni oyoqqa yumshatuvchi krem surtish (barmoqlar orasiga emas);
- qulay, keng poyabzal va paxta paypoq kiyish.

**Mumkin emas:**

- qadoq va kesakni pichoq, ustara yoki qaychi bilan kesish — chuqur jarohat va infeksiya xavfi;
- kislotali "kesak plastirlari"ni sog'lom teriga yopishtirish — kuyish va yara;
- qandli diabet, qon aylanishi buzilishi bo'lsa — hech qanday uy usullari, faqat mutaxassis.

Oyoq terisi bilan bog'liq boshqa muammolar haqida: [tirnoq zamburug'i](/uz/articles/art-tirnoq-zamburugi), [teri zamburug'i](/uz/articles/art-teri-zamburugi).

## Qachon mutaxassisga borish kerak?

- qadoq yoki kesak yurishga xalaqit bersa, og'risa;
- qizarish, shish, yiring yoki qon paydo bo'lsa;
- "kesak" atrofida qora nuqtalar bo'lsa — so'gal bo'lishi mumkin;
- qandli diabet bo'lsa — har qanday qadoqda;
- uy parvarishi 2–3 haftada yordam bermasa.

## Farg'ona va Qo'qonda podolog

Radeski Skin Clinic'ning [tirnoq va oyoq patologiyasi klinikasida](/uz/services/clinika-patologii-nogtej) [dermatologik podolog](/uz/services/clinika-patologii-nogtej/dermatologik-podolog-xizmati) qadoq va kesaklarni og'riqsiz olib tashlaydi, sababini aniqlaydi va qaytmasligi uchun maslahat beradi.

- [Podolog Farg'onada](/uz/fargona/podolog) va [Qo'qonda](/uz/qoqon/podolog).

Qadoqni vaqtida olib tashlash va poyabzalni to'g'ri tanlash — oyoq og'rig'idan qutulishning eng oddiy yo'li.`;
}

function ruBody(): string {
  return `Мозоли и натоптыши — защитная реакция кожи стопы на постоянное давление и трение. Кожа в этом месте утолщается и образует твёрдый слой. Это не опасное заболевание, но мозоли болят при ходьбе, могут трескаться и пропускать инфекцию, а у людей с сахарным диабетом приводят к серьёзным осложнениям. При правильном уходе и помощи подолога от них можно безопасно избавиться.

## Натоптыш, стержневая мозоль и бородавка: в чём разница?

- **Натоптыш** — широкое желтоватое твёрдое утолщение кожи на пятке, подушечке стопы или сбоку большого пальца. Обычно болит мало.
- **Стержневая мозоль** — маленькая круглая мозоль с плотным «стержнем» в центре; чаще на пальцах или между ними. При надавливании даёт острую боль.
- **Подошвенная бородавка** — вызвана вирусом, на поверхности видны мелкие чёрные точки, болит при сдавливании с боков. Она похожа на мозоль, но лечится иначе.

Поэтому прежде чем лечить «мозоль», важно показать её подологу или дерматологу.

## Почему они появляются?

- тесная, жёсткая обувь или обувь на высоком каблуке;
- ходьба без носков или в носках со складками;
- долгое стояние, много ходьбы, спорт;
- изменения формы стопы: плоскостопие, вальгусная деформация, молоткообразные пальцы;
- лишний вес;
- истончение жировой подушки стопы с возрастом.

## Как помогает подолог?

- **Аппаратная обработка** — подолог специальными фрезами безболезненно снимает утолщённую кожу слой за слоем; стержень мозоли аккуратно удаляется.
- **Снижение давления** — мягкие прокладки, разделители пальцев, при необходимости ортопедические стельки; без этого мозоль возвращается.
- **План ухода** — смягчающие кремы под тип кожи и домашний уход.

После процедуры человек сразу чувствует облегчение и обычно в тот же день ходит в обычной обуви.

## Что можно делать дома, а что нельзя?

**Можно:**

- распарить стопы 10 минут в тёплой воде и мягко обработать натоптыш пемзой;
- ежедневно наносить смягчающий крем на стопы (не между пальцами);
- носить удобную свободную обувь и хлопковые носки.

**Нельзя:**

- срезать мозоли ножом, лезвием или ножницами — глубокая рана и риск инфекции;
- клеить кислотные «мозольные пластыри» на здоровую кожу — ожог и язва;
- при сахарном диабете и нарушении кровообращения — никаких домашних методов, только специалист.

О других проблемах кожи стоп: [грибок ногтей](/ru/articles/art-tirnoq-zamburugi), [грибок кожи](/ru/articles/art-teri-zamburugi).

## Когда обращаться к специалисту?

- мозоль мешает ходить, болит;
- появились покраснение, отёк, гной или кровь;
- вокруг «мозоли» чёрные точки — это может быть бородавка;
- сахарный диабет — при любой мозоли;
- домашний уход не помог за 2–3 недели.

## Подолог в Фергане и Коканде

В [клинике патологии ногтей и стопы](/ru/services/clinika-patologii-nogtej) Radeski Skin Clinic [дерматологический подолог](/ru/services/clinika-patologii-nogtej/dermatologik-podolog-xizmati) безболезненно удалит мозоли и натоптыши, найдёт причину и подскажет, как не допустить их возвращения.

- [Подолог в Фергане](/ru/fargona/podolog) и [в Коканде](/ru/qoqon/podolog).

Вовремя удалить мозоль и правильно подобрать обувь — самый простой способ избавиться от боли в стопах.`;
}

function enBody(): string {
  return `Calluses and corns are the skin's protective response to constant pressure and friction on the feet. The skin thickens into a hard layer. They are not dangerous, but they hurt when walking, can crack and let infection in, and in people with diabetes they can lead to serious complications. With the right care and a podiatrist's help they can be removed safely.

## Callus, corn and plantar wart: what is the difference?

- **Callus** — a broad, yellowish, hard thickening on the heel, the ball of the foot or the side of the big toe. Usually only mildly painful.
- **Corn** — a small round lesion with a hard "core" in the middle, often on or between the toes. Pressing it causes sharp pain.
- **Plantar wart** — caused by a virus; tiny black dots on the surface, painful when squeezed from the sides. It looks like a corn but is treated differently.

That is why a "corn" should be shown to a podiatrist or dermatologist before treatment.

## Why do they form?

- tight, stiff or high-heeled shoes;
- walking without socks or in wrinkled socks;
- standing for long periods, lots of walking, sport;
- changes in foot shape: flat feet, bunions, hammer toes;
- excess weight;
- thinning of the fat pad under the foot with age.

## How does a podiatrist help?

- **Device treatment** — the podiatrist painlessly removes the thickened skin layer by layer with special burrs; the core of a corn is carefully taken out.
- **Pressure relief** — soft pads, toe separators and, when needed, orthotic insoles; without this, calluses come back.
- **A care plan** — softening creams for your skin type and home care.

Relief is usually immediate, and most people walk in their normal shoes the same day.

## What you can and cannot do at home

**You can:**

- soak your feet in warm water for 10 minutes and gently use a pumice stone on a callus;
- apply a softening foot cream daily (not between the toes);
- wear comfortable, roomy shoes and cotton socks.

**You should not:**

- cut calluses or corns with a knife, razor or scissors — deep wounds and infection risk;
- put acid "corn plasters" on healthy skin — burns and ulcers;
- use any home methods if you have diabetes or poor circulation — see a specialist only.

Other foot skin problems: [nail fungus](/en/articles/art-tirnoq-zamburugi), [fungal skin infections](/en/articles/art-teri-zamburugi).

## When to see a specialist

- a callus or corn makes walking difficult or painful;
- redness, swelling, pus or blood appear;
- there are black dots in the "corn" — it may be a wart;
- you have diabetes — for any callus;
- home care has not helped in 2–3 weeks.

## Podiatrist in Fergana and Kokand

At the Radeski Skin Clinic [nail and foot clinic](/en/services/clinika-patologii-nogtej) a [dermatological podiatrist](/en/services/clinika-patologii-nogtej/dermatologik-podolog-xizmati) removes calluses and corns painlessly, finds the cause and advises how to keep them from coming back.

- [Podiatrist in Fergana](/en/fargona/podolog) and [in Kokand](/en/qoqon/podolog).

Removing a callus in time and choosing the right shoes is the simplest way to stop foot pain.`;
}

export const CALLUSES_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      "Qadoq va kesaklar: nima uchun paydo bo'ladi, so'galdan farqi, podologda og'riqsiz olib tashlash, uyda nima qilish mumkin va mumkin emas. Farg'ona va Qo'qonda podolog.",
    body: uzBody(),
    keyTakeaways: [
      "Qadoq va kesak — teri doimiy bosim va ishqalanishga javob sifatida qalinlashadi",
      "Kesakni oyoq tagidagi so'galdan ajratish kerak — ular boshqacha davolanadi",
      "Podolog apparat bilan og'riqsiz olib tashlaydi va bosimni kamaytirish yo'lini tanlaydi",
      "Kesib tashlash va kislotali plastirlar — jarohat, kuyish va infeksiya xavfi",
      "Qandli diabetda har qanday qadoqni faqat mutaxassis davolaydi",
    ],
    tags: ['Qadoq', 'Kesak', 'Oyoq parvarishi', 'Podolog', "Tirnoq va oyoq klinikasi", "Farg'ona", "Qo'qon", 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      "Qadoq yoki kesak yurishga xalaqit bersa, og'risa",
      "Qizarish, shish, yiring yoki qon paydo bo'lsa",
      "Kesak ichida qora nuqtalar ko'rinsa",
      "Qandli diabet bo'lsa — har qanday qadoqda",
      "Uy parvarishi 2–3 haftada yordam bermasa",
    ],
    faq: [
      {
        question: 'Qadoqni olib tashlash og\'riqlimi?',
        answer:
          "Yo'q. Podolog qalinlashgan terini apparat bilan qatlamma-qatlam olib tashlaydi, tirik teriga tegmaydi. Ko'pchilik muolajadan keyin darhol yengillik sezadi.",
      },
      {
        question: 'Qadoq qaytadimi?',
        answer:
          "Bosim sababi bartaraf etilmasa — ha. Shuning uchun podolog poyabzal, qistirma va ortopedik taglik bo'yicha ham maslahat beradi. Muntazam parvarish bilan qadoq kamdan-kam qaytadi.",
      },
      {
        question: 'Kesakni so\'galdan qanday farqlash mumkin?',
        answer:
          "So'gal yuzasida mayda qora nuqtalar bo'ladi va yon tomondan siqqanda og'riydi, kesak esa ustidan bosganda. Aniq tashxisni podolog yoki dermatolog qo'yadi.",
      },
      {
        question: 'Qandli diabetda qadoqni o\'zim olib tashlasam bo\'ladimi?',
        answer:
          "Yo'q. Diabetda oyoq sezgirligi va jarohatning bitishi pasayadi, kichik kesik ham og'ir yaraga aylanishi mumkin. Qadoqni faqat podolog olib tashlashi kerak.",
      },
      {
        question: "Farg'ona va Qo'qonda qadoqni qayerda olib tashlash mumkin?",
        answer:
          "Radeski Skin Clinic'ning Farg'ona va Qo'qon filiallarida podolog qadoq va kesaklarni og'riqsiz olib tashlaydi va parvarish rejasini tuzadi. Saytda yoki +998 73 200-73-73 (Farg'ona) yoki +998 95 145 73 73 (Qo'qon) raqamlari orqali yozilishingiz mumkin.",
      },
    ],
  },
  ru: {
    summary:
      'Мозоли и натоптыши: почему появляются, отличие от бородавки, безболезненное удаление у подолога, что можно и нельзя делать дома. Подолог в Фергане и Коканде.',
    body: ruBody(),
    keyTakeaways: [
      'Мозоль и натоптыш — утолщение кожи в ответ на постоянное давление и трение',
      'Стержневую мозоль нужно отличить от подошвенной бородавки — их лечат по-разному',
      'Подолог безболезненно удаляет мозоль аппаратом и подбирает способ снизить давление',
      'Срезание и кислотные пластыри — риск раны, ожога и инфекции',
      'При сахарном диабете любые мозоли лечит только специалист',
    ],
    tags: ['Мозоли', 'Натоптыши', 'Уход за стопами', 'Подолог', 'Клиника стопы', 'Фергана', 'Коканд', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Мозоль мешает ходить, болит',
      'Покраснение, отёк, гной или кровь',
      'В мозоли видны чёрные точки',
      'Сахарный диабет — при любой мозоли',
      'Домашний уход не помог за 2–3 недели',
    ],
    faq: [
      {
        question: 'Больно ли удалять мозоль?',
        answer:
          'Нет. Подолог снимает утолщённую кожу аппаратом слой за слоем, не затрагивая живую кожу. Большинство пациентов чувствуют облегчение сразу после процедуры.',
      },
      {
        question: 'Возвращаются ли мозоли?',
        answer:
          'Если не устранить причину давления — да. Поэтому подолог подскажет и про обувь, прокладки и ортопедические стельки. При регулярном уходе мозоли возвращаются редко.',
      },
      {
        question: 'Как отличить мозоль от бородавки?',
        answer:
          'На бородавке видны мелкие чёрные точки, и она болит при сдавливании с боков, а мозоль — при надавливании сверху. Точный диагноз ставит подолог или дерматолог.',
      },
      {
        question: 'Можно ли при диабете удалять мозоль самостоятельно?',
        answer:
          'Нет. При диабете снижается чувствительность стоп и заживление ран, и даже маленький порез может превратиться в тяжёлую язву. Мозоли должен удалять только подолог.',
      },
      {
        question: 'Где удалить мозоль в Фергане и Коканде?',
        answer:
          'В филиалах Radeski Skin Clinic в Фергане и Коканде подолог безболезненно удалит мозоли и натоптыши и составит план ухода. Записаться можно на сайте или по телефону +998 73 200-73-73 (Фергана) или +998 95 145 73 73 (Коканд).',
      },
    ],
  },
  en: {
    summary:
      'Calluses and corns: why they form, how they differ from warts, painless removal by a podiatrist, and what to do and avoid at home. Podiatrists in Fergana and Kokand.',
    body: enBody(),
    keyTakeaways: [
      'Calluses and corns are skin thickening in response to constant pressure and friction',
      'A corn must be told apart from a plantar wart — they are treated differently',
      'A podiatrist removes them painlessly with a device and finds a way to relieve pressure',
      'Cutting and acid plasters risk wounds, burns and infection',
      'With diabetes, any callus should be treated by a specialist only',
    ],
    tags: ['Calluses', 'Corns', 'Foot care', 'Podiatrist', 'Foot clinic', 'Fergana', 'Kokand', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'A callus or corn makes walking difficult or painful',
      'Redness, swelling, pus or blood',
      'Black dots inside the corn',
      'Diabetes — for any callus',
      'Home care has not helped in 2–3 weeks',
    ],
    faq: [
      {
        question: 'Does callus removal hurt?',
        answer:
          'No. The podiatrist removes the thickened skin layer by layer with a device without touching living skin. Most people feel relief straight away.',
      },
      {
        question: 'Do calluses come back?',
        answer:
          'Yes, if the pressure is not dealt with. That is why the podiatrist also advises on shoes, pads and orthotic insoles. With regular care they rarely return.',
      },
      {
        question: 'How do I tell a corn from a wart?',
        answer:
          'A wart has tiny black dots and hurts when squeezed from the sides; a corn hurts when pressed from above. A podiatrist or dermatologist makes the diagnosis.',
      },
      {
        question: 'Can I remove a callus myself if I have diabetes?',
        answer:
          'No. Diabetes reduces feeling in the feet and slows healing, so even a small cut can turn into a serious ulcer. Calluses should be removed by a podiatrist only.',
      },
      {
        question: 'Where can I have calluses removed in Fergana and Kokand?',
        answer:
          'At the Radeski Skin Clinic branches in Fergana and Kokand a podiatrist removes calluses and corns painlessly and builds a care plan. Book on the website or call +998 73 200-73-73 (Fergana) or +998 95 145 73 73 (Kokand).',
      },
    ],
  },
};

export const CALLUSES_ARTICLE: Article = {
  id: 'art-qadoq-va-kesak',
  slug: 'qadoq-va-kesak',
  title: {
    uz: "Qadoq va kesaklar: nima uchun paydo bo'ladi va podologda qanday olib tashlanadi",
    ru: 'Мозоли и натоптыши: почему появляются и как их удаляет подолог',
    en: 'Calluses and Corns: Why They Form and How a Podiatrist Removes Them',
  },
  summary: {
    uz: CALLUSES_ARTICLE_CATALOG.uz.summary,
    ru: CALLUSES_ARTICLE_CATALOG.ru.summary,
    en: CALLUSES_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: CALLUSES_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: CALLUSES_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: CALLUSES_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: {
    uz: 'Karimova Iroda',
    ru: 'Каримова Ирода',
    en: 'Dr. Iroda Karimova',
  },
  date: '2026-11-15',
  image: '/articles/qadoq-va-kesak-cover.jpg',
  images: {
    uz: '/articles/qadoq-va-kesak-cover.jpg',
    ru: '/articles/qadoq-va-kesak-cover.jpg',
    en: '/articles/qadoq-va-kesak-cover.jpg',
  },
  views: 0,
};
