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

const COVER = '/services/dermatoskopiya/skin-passport.jpg';

function uzBody(): string {
  return `## PhotoFinder bilan teri o'smalarini diagnostika qilish

Hayot davomida deyarli har bir kishi terida turli o'smalar bilan duch keladi: tomir o'smalari, epiteliy o'smalari, borlar va papillomalar, soch folikuli va yog' bezlaridagi o'zgarishlar. Qaysi biri xavfli, qaysi biri faqat estetik muammo — buni aniq bilish muhim.

**FotoFinder (PhotoFinder)** apparati yordamida Radeski Skin & Aesthetic Clinic da teri yangi o'smalarini iloji boricha aniq tasniflash, yaxshi yoki yomon sifatli ekanini aniqlash va shoshilinch davolash kerakligini baholash mumkin.

![PhotoFinder — teri o'smalarini diagnostika](${COVER})

## Ko'rsatmalar

- har qanday shubhali yoki notipik nevus (xol), jumladan katta o'lchamdagi;
- tug'ma va gigant nevuslar;
- so'gallar, papillomalar;
- keratomalar;
- tomir o'smalari;
- soch kistalari;
- yog' va ter bezlarining rivojlanish nuqsonlari;
- limfoma, papulalar va boshqa kelib chiqishi noaniq hosilalar.

## PhotoFinder afzalliklari

- O'smaning xarakteri, o'lchami va boshqa parametrlarini yuqori aniqlikda baholash.
- **Yagona dermatoskop** bo'lib, butun tana **kartografiyasini** (mapping) olib boradi — yuqori sifatli suratlar asosida teri o'smalar xaritasi tuziladi.
- Ma'lumotlar saqlanadi: keyingi tekshiruvlar bilan solishtirish va hayot davomida yangi o'smalar paydo bo'lishini kuzatish imkonini beradi.

## Muolaja qanday o'tadi?

1. Muayyan o'smani aniqlashtirish yoki to'liq tana kartografiyasi.
2. FotoFinder yuqori sifatli kamerasi bilan teri o'smalarining surati olinadi.
3. Ma'lumotlar kompyuter tizimida qayta ishlanadi va ekranga chiqariladi.
4. Shifokor dermatoskopiya o'tkazadi — parametrlar bo'yicha baholaydi, xavflilik darajasi va olib tashlash zarurati aniqlanadi.

## Natija

- Yon ta'sirsiz va asoratlarsiz davolash rejasi.
- O'smalarni vaqtida aniqlash.
- Yomon sifatli o'smalarning oldini olish.

## PhotoFinder va oddiy dermatoskopiya farqi

Oddiy dermatoskopiyada shifokor xolni kattalashtiruvchi asbob orqali ko'radi va baholaydi. PhotoFinder esa butun tana va har bir muhim xolning yuqori aniqlikdagi suratini saqlaydi. Keyingi tashrifda dastur yangi suratlarni avvalgilari bilan solishtiradi: yangi paydo bo'lgan yoki o'lchami, rangi, shakli o'zgargan xollar ko'rsatiladi. Melanomani erta bosqichda topishda aynan shu o'zgarish asosiy belgi hisoblanadi.

## Kimga har yili kartografiya kerak?

- tanasida 50 tadan ortiq xoli bor odamlar;
- notipik (displastik) yoki katta tug'ma xollari borlar;
- oilasida melanoma bo'lganlar;
- och terili, oson kuyadigan, bolaligida ko'p quyosh kuyishini boshdan kechirganlar;
- oldin teri saratoni yoki melanoma davolanganlar.

Bunday holatlarda shifokor odatda yiliga bir marta, ba'zan 6 oyda bir marta nazorat kartografiyasini tavsiya qiladi.

## Tekshiruvga tayyorgarlik

Maxsus tayyorgarlik kerak emas. Tekshiruv kuni tanaga krem va o'z-o'zidan qoraytiruvchi vositalar surtmang, tirnoq lakini olib tashlang; tirnoqlarda o'zgarish bo'lsa, ularni ham ko'rsating. Butun tana kartografiyasi odatda 30–60 daqiqa davom etadi.

## Qarshi ko'rsatmalar

Teri o'smalarini dermatoskopiya qilish uchun **qarshi ko'rsatmalar yo'q** — muolaja sog'liq uchun to'liq xavfsiz.

Bog'liq xizmatlar: [Dermatoskopiya](/uz/fargona/dermatoskopiya), [Dermatoonkologiya](/uz/services/dermatoonkologiya), [Narxlar](/uz/prices).`;
}

function ruBody(): string {
  return `## Диагностика новообразований кожи с помощью PhotoFinder

С новообразованиями на коже сталкивается едва ли не каждый человек на протяжении жизни. Разрастания сосудов и эпителия, бородавки и папилломы, изменения волосяных фолликулов и сальных желёз — как понять, чего стоит бояться, а что лишь придаёт коже неэстетичный вид?

Диагностика новообразований кожи при помощи аппарата **FotoFinder (PhotoFinder)** в Radeski Skin & Aesthetic Clinic с максимально возможной точностью помогает определить тип образования, доброкачественное оно или требует срочного лечения.

![PhotoFinder — диагностика новообразований](${COVER})

## Показания

- любые образования, в том числе подозрительные и нетипичные невусы, в т.ч. большого размера;
- врождённые и гигантские невусы;
- бородавки, папилломы;
- кератомы;
- сосудистые образования;
- волосяные кисты;
- пороки развития сальных и потовых желёз;
- лимфомы, папулы и другие образования неясного происхождения.

## Преимущества FotoFinder

- Максимально точная диагностика характера, размеров и параметров образования.
- **Единственный дерматоскоп**, позволяющий проводить **картирование тела** — карта новообразований на основе фото высочайшего качества.
- Данные сохраняются для сравнения с последующими обследованиями на протяжении всей жизни.

## Как проходит процедура

1. Уточняющая дерматоскопия конкретного образования или полное картирование тела.
2. Фото новообразований высококачественной камерой FotoFinder.
3. Обработка данных компьютерной системой аппарата.
4. Оценка врачом — определение опасности и необходимости удаления.

## Результат

- Лечение без побочных эффектов и осложнений.
- Своевременная диагностика новообразований.
- Профилактика злокачественных образований.

## Чем PhotoFinder отличается от обычной дерматоскопии

При обычной дерматоскопии врач смотрит родинку через увеличительный прибор и оценивает её. PhotoFinder сохраняет высокоточные снимки всего тела и каждой важной родинки. На следующем визите программа сравнивает новые снимки с прежними и показывает новые родинки и те, что изменили размер, цвет или форму. Именно изменение — главный признак при раннем выявлении меланомы.

## Кому картирование нужно каждый год

- людям с более чем 50 родинками на теле;
- при атипичных (диспластических) или крупных врождённых невусах;
- если у родственников была меланома;
- при светлой коже, которая легко обгорает, и частых солнечных ожогах в детстве;
- тем, кто уже лечился от рака кожи или меланомы.

В таких случаях врач обычно рекомендует контрольное картирование раз в год, иногда раз в 6 месяцев.

## Подготовка к обследованию

Особой подготовки не нужно. В день обследования не наносите на тело кремы и автозагар, снимите лак с ногтей; если есть изменения ногтей, покажите и их. Картирование всего тела обычно занимает 30–60 минут.

## Противопоказания

Противопоказаний к дерматоскопии новообразований кожи **нет** — процедура полностью безопасна.

Связанные услуги: [Дерматоскопия](/ru/fargona/dermatoskopiya), [Дерматоонкология](/ru/services/dermatoonkologiya), [Цены](/ru/prices).`;
}

function enBody(): string {
  return `## Skin Lesion Diagnosis with PhotoFinder

Almost everyone develops skin lesions during life: vascular and epithelial growths, warts and papillomas, changes in hair follicles and sebaceous glands. Which require urgent care and which are mainly cosmetic?

**FotoFinder (PhotoFinder)** at Radeski Skin & Aesthetic Clinic helps classify skin lesions with maximum accuracy and determine whether they are benign or need urgent treatment.

![PhotoFinder — skin lesion diagnosis](${COVER})

## Indications

- any lesions including suspicious and atypical nevi, including large ones;
- congenital and giant nevi;
- warts, papillomas;
- keratomas;
- vascular lesions;
- hair cysts;
- sebaceous and sweat gland developmental anomalies;
- lymphomas, papules, and other lesions of unclear origin.

## Advantages of FotoFinder

- Highly accurate assessment of lesion character, size, and parameters.
- The **only dermatoscope** that supports full-body **mapping** with highest-quality photos.
- Stored data allows lifelong comparison and monitoring of new lesions.

## How the procedure works

1. Targeted examination of one lesion or full-body mapping.
2. High-quality photos with the FotoFinder camera.
3. Computer processing and display.
4. Physician dermatoscopy — risk assessment and need for removal.

## Outcomes

- Treatment planning without unnecessary complications.
- Timely lesion detection.
- Prevention of malignant transformation.

## PhotoFinder vs standard dermoscopy

In standard dermoscopy the doctor looks at a mole through a magnifying device and assesses it. PhotoFinder stores high-resolution images of the whole body and of each important mole. At the next visit the software compares new images with the previous ones and highlights new moles and those that changed in size, colour or shape. Change is the key sign in detecting melanoma early.

## Who needs mole mapping every year

- people with more than 50 moles;
- people with atypical (dysplastic) or large congenital moles;
- a family history of melanoma;
- fair skin that burns easily and frequent sunburn in childhood;
- people previously treated for skin cancer or melanoma.

In these cases the doctor usually recommends follow-up mapping once a year, sometimes every 6 months.

## How to prepare

No special preparation is needed. On the day, do not apply body lotion or self-tanner, remove nail polish, and point out any nail changes too. Whole-body mapping usually takes 30–60 minutes.

## Contraindications

There are **no contraindications** — the procedure is fully safe.

Related services: [Dermoscopy](/en/fargona/dermatoskopiya), [Dermato-oncology](/en/services/dermatoonkologiya), [Prices](/en/prices).`;
}

export const PHOTOFINDER_DIAGNOSTIKA_RADESKI_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'PhotoFinder (FotoFinder) bilan teri o\'smalarini diagnostika: ko\'rsatmalar, kartografiya, afzalliklar va xavfsizlik — Radeski Skin Clinic.',
    body: uzBody(),
    keyTakeaways: [
      'PhotoFinder teri o\'smalarini yuqori aniqlikda tahlil qiladi',
      'Butun tana kartografiyasi — o\'smalar xaritasi saqlanadi',
      'Shubhali nevüs, bor va papillomalar uchun tavsiya etiladi',
      'Qarshi ko\'rsatmalar yo\'q — muolaja xavfsiz',
      'Vaqtida aniqlash yomon sifatli o\'smalar xavfini kamaytiradi',
    ],
    tags: ['PhotoFinder', 'FotoFinder', 'Dermatoskopiya', 'Nevüs', 'Teri o\'smalari', 'Radeski Skin Clinic', 'Farg\'ona'],
    whenToSeeDoctor: [
      'Nevüs rangi, shakli yoki chegarasi o\'zgarganda',
      'Yangi o\'sma tez o\'sayotgan bo\'lsa',
      'Bor, papilloma yoki shubhali dog\' paydo bo\'lsa',
      'To\'liq tana tekshiruvi va kuzatuv rejasi kerak bo\'lsa',
    ],
    faq: [
      {
        question: 'PhotoFinder nima?',
        answer:
          'FotoFinder — teri o\'smalarini yuqori sifatli surat va dermatoskopiya bilan baholash apparati. Butun tana kartografiyasini qo\'llab-quvvatlaydi.',
      },
      {
        question: 'Kartografiya nima uchun kerak?',
        answer:
          'Teri o\'smalar xaritasi saqlanadi — keyingi tekshiruvlarda yangi yoki o\'zgargan hosilalar tez aniqlanadi.',
      },
      {
        question: 'Muolaja og\'riqli mi?',
        answer:
          'Yo\'q. Bu xavfsiz, invaziv bo\'lmagan diagnostika — faqat ko\'rish va suratga olish.',
      },
      {
        question: "PhotoFinder kartografiyasini qanchada bir qilish kerak?",
        answer:
          "Xavf omillari bo'lsa odatda yiliga bir marta, ba'zan 6 oyda bir marta. Xavf past bo'lsa, shifokor ko'rik oralig'ini alohida belgilaydi.",
      },
      {
        question: "PhotoFinder melanomani aniqlaydimi?",
        answer:
          "U shubhali xollarni va vaqt o'tib o'zgarganlarini aniqlashga yordam beradi. Yakuniy tashxis xolni olib tashlab, gistologik tekshiruv bilan qo'yiladi.",
      },
    ],
  },
  ru: {
    summary:
      'Диагностика новообразований кожи с PhotoFinder (FotoFinder): показания, картирование, преимущества и безопасность — Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'PhotoFinder анализирует новообразования с высокой точностью',
      'Картирование тела — карта образований сохраняется',
      'Рекомендуется при подозрительных невусах, бородавках, папилломах',
      'Противопоказаний нет — процедура безопасна',
      'Своевременная диагностика снижает риск злокачественных образований',
    ],
    tags: ['PhotoFinder', 'FotoFinder', 'Дерматоскопия', 'Невус', 'Новообразования кожи', 'Radeski Skin Clinic', 'Фергана'],
    whenToSeeDoctor: [
      'Изменились цвет, форма или границы родинки',
      'Новое образование быстро растёт',
      'Появилась бородавка, papilloma или подозрительное пятно',
      'Нужен полный осмотр и план наблюдения',
    ],
    faq: [
      {
        question: 'Что такое PhotoFinder?',
        answer:
          'FotoFinder — аппарат для оценки новообразований кожи с фото высокого качества и дерматоскопией. Поддерживает картирование тела.',
      },
      {
        question: 'Зачем нужно картирование?',
        answer:
          'Карта образований сохраняется — при следующих осмотрах быстро выявляются новые или изменившиеся элементы.',
      },
      {
        question: 'Процедура болезненна?',
        answer:
          'Нет. Это безопасная неинвазивная диагностика — только осмотр и фотофиксация.',
      },
      {
        question: "Как часто нужно делать картирование PhotoFinder?",
        answer:
          "При факторах риска обычно раз в год, иногда раз в 6 месяцев. При низком риске интервал врач определяет индивидуально.",
      },
      {
        question: "Выявляет ли PhotoFinder меланому?",
        answer:
          "Он помогает найти подозрительные родинки и те, что меняются со временем. Окончательный диагноз ставится после удаления и гистологического исследования.",
      },
    ],
  },
  en: {
    summary:
      'Skin lesion diagnosis with PhotoFinder (FotoFinder): indications, body mapping, benefits, and safety — Radeski Skin Clinic.',
    body: enBody(),
    keyTakeaways: [
      'PhotoFinder analyzes skin lesions with high accuracy',
      'Full-body mapping stores a lesion map for follow-up',
      'Recommended for suspicious nevi, warts, and papillomas',
      'No contraindications — the procedure is safe',
      'Early detection reduces malignant lesion risk',
    ],
    tags: ['PhotoFinder', 'FotoFinder', 'Dermoscopy', 'Nevus', 'Skin lesions', 'Radeski Skin Clinic', 'Fergana'],
    whenToSeeDoctor: [
      'A mole changed color, shape, or borders',
      'A new lesion is growing quickly',
      'A wart, papilloma, or suspicious spot appeared',
      'You need full-body screening and a monitoring plan',
    ],
    faq: [
      {
        question: 'What is PhotoFinder?',
        answer:
          'FotoFinder is a device for assessing skin lesions with high-quality imaging and dermatoscopy. It supports full-body mapping.',
      },
      {
        question: 'Why is mapping important?',
        answer:
          'A stored lesion map helps detect new or changed lesions at follow-up visits.',
      },
      {
        question: 'Is the procedure painful?',
        answer:
          'No. It is safe, non-invasive diagnostics — examination and photography only.',
      },
      {
        question: "How often should PhotoFinder mapping be done?",
        answer:
          "With risk factors, usually once a year, sometimes every 6 months. With low risk, the doctor sets the interval individually.",
      },
      {
        question: "Does PhotoFinder detect melanoma?",
        answer:
          "It helps find suspicious moles and those that change over time. The final diagnosis is made after removal and histology.",
      },
    ],
  },
};

export const PHOTOFINDER_DIAGNOSTIKA_RADESKI_ARTICLE: Article = {
  id: 'art-photofinder-diagnostika-radeski',
  slug: 'photofinder-novoobrazovaniya-diagnostika-radeski',
  title: {
    uz: 'PhotoFinder: teri o\'smalarini diagnostika va kartografiya',
    ru: 'PhotoFinder: диагностика и картирование новообразований кожи',
    en: 'PhotoFinder: Skin Lesion Diagnosis and Body Mapping',
  },
  summary: {
    uz: PHOTOFINDER_DIAGNOSTIKA_RADESKI_ARTICLE_CATALOG.uz.summary,
    ru: PHOTOFINDER_DIAGNOSTIKA_RADESKI_ARTICLE_CATALOG.ru.summary,
    en: PHOTOFINDER_DIAGNOSTIKA_RADESKI_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: PHOTOFINDER_DIAGNOSTIKA_RADESKI_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: PHOTOFINDER_DIAGNOSTIKA_RADESKI_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: PHOTOFINDER_DIAGNOSTIKA_RADESKI_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: { uz: 'Radeski Skin Clinic', ru: 'Radeski Skin Clinic', en: 'Radeski Skin Clinic' },
  date: '2026-09-22',
  updated: '2026-11-17',
  image: COVER,
  images: { uz: COVER, ru: COVER, en: COVER },
  views: 0,
};
