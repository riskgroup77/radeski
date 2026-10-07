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

const COVER = '/services/in-ekcionnaya/konturnaya.jpg';

function uzBody(): string {
  return `## Lab hajmi va konturini tiklash

Radeski Skin & Aesthetic Clinic da lab hajmini oshirish va konturini tuzatish uchun **gialuron kislotasi** asosidagi **filler** (to'ldiruvchi) inyeksiyalari qo'llaniladi. Gialuron kislotasi terining tabiiy komponenti bo'lib, suv molekulalarini ushlab turadi va namlik yo'qotilishining oldini oladi.

![Lab kontur plastikasi — Radeski Skin Clinic](${COVER})

## Surgiderm 30XP — afzal preparat

Reytingda birinchi o'rinda fransuz **Surgiderm 30XP** filler turadi. Undagi gialuron kislotasi sintetik kelib chiqishli bo'lib, allergik reaksiya ehtimoli minimal.

## Muolaja qanday o'tadi?

Ingichka ignali shprits bilan lab zonasiga kichik dozalarda gialuron kislotasi kiritiladi — odatda **1–2 ml**. Bir xil taqsimot uchun taxminan **20 ta** inyeksiya qilinadi, igna **3 mm** chuqurlikda kiritiladi.

Inyeksiya soni individual: kontur bo'ylab har tomondan 2 ta, hajm uchun yuqori va pastdan 2–2 ta bo'lishi mumkin — shifokor holatga qarab rejalashtiradi.

## Ko'rsatmalar

- yoshga bog'liq o'zgarishlar;
- lab asimmetriyasi;
- tushgan lab burchaklari;
- teri tonusining pasayishi;
- og'iz atrofidagi ajinlar;
- tabiiy hajm yetishmasligi;
- tabiiy kontur yo'qolishi.

## Qachon qilinmaydi?

- filler komponentlariga allergiya;
- homiladorlik va emizish davri;
- dekompensatsiyalangan qandli diabet (insulin bilan nazorat qilib bo'lmaganda);
- o'tkir infeksion kasalliklar (gripp, ORVI, gerpes).

## Oldindan tayyorgarlik

- **1 hafta** oldin solyariy va plyajdan voz kechish;
- muolaja kunida kofe va kofeinli preparatlardan voz kechish;
- **48 soat** oldin alkogol;
- qon ivishiga ta'sir qiluvchi dori-darmonlar (masalan, ibuprofen, aspirin) va antibiotiklarni shifokor bilan kelishilgan holda to'xtatish.

## Muolajadan keyin parvarish

- **24 soat** davomida zonaga tegmaslik va massaj qilmaslik;
- **48 soat** alkogol va ba'zi og'riq qoldiruvchilardan voz kechish;
- shishga **muz qo'yish tavsiya etilmaydi** — shifokor yo'riqnomasiga amal qiling;
- **Xlorgeksidin** bilan ishlov, tiklanish gel/mazlari, SPF va namlantirish.

## «Parij usuli»

**Parij lablari** — maksimal tabiiylikka yo'naltirilgan texnika: hajm va shakl sezilarli, lekin sun'iy ko'rinishsiz bo'ladi.

## Yoz va qish

Yozda ham, qishda ham muolaja mumkin. Gialuron kislotasi nafaqat hajm beradi, balki shikastlangan hujayralarni tiklashga ham yordam beradi.

## Filler erigandan keyin

Filler to'liq erigandan keyin ham lablar oldingidan biroz to'liqroq bo'lishi mumkin — gialuron kislotaning yoshartiruvchi ta'siri saqlanadi. Takroriy muolaja shifokor rejasiga ko'ra o'tkaziladi.

Bog'liq xizmatlar: [Kontur plastika](/uz/services/in-ekcionnaya-kosmetologiya/konturnaya), [Biorevitalizatsiya](/uz/services/in-ekcionnaya-kosmetologiya/biorev), [Narxlar](/uz/prices).`;
}

function ruBody(): string {
  return `## Увеличение и коррекция контура губ

В Radeski Skin & Aesthetic Clinic для придания объёма и изменения контура губ используют **инъекции с наполнителем на основе гиалуроновой кислоты** (филлеры). Гиалуроновая кислота входит в состав кожи: удерживает воду и предотвращает трансэпидермальную потерю влаги.

![Контурная пластика губ — Radeski Skin Clinic](${COVER})

## Surgiderm 30XP — препарат выбора

Первое место в рейтинге занимает французский филлер **Surgiderm 30XP**. Гиалуроновая кислота в его составе синтетического происхождения, что снижает риск аллергических реакций.

## Как проходит процедура?

Тонкой иглой в губы вводят от **1 до 2 мл** гиалуроновой кислоты небольшими дозами — около **20 инъекций** за сеанс, глубина введения — **3 мм**.

Количество уколов индивидуально: по контуру — примерно по 2 с каждой стороны, на объём — 2 сверху и 2 снизу; врач подбирает схему под ваш случай.

## Показания

- возрастные изменения;
- асимметрия губ;
- опущенные уголки рта;
- потеря тонуса кожи;
- морщины вокруг рта;
- недостаточный естественный объём;
- утрата естественного контура.

## Противопоказания

- аллергия на компоненты филлера;
- беременность и период лактации;
- декомпенсированный сахарный диабет;
- острые инфекционные заболевания (грипп, ОРЗ, герпес).

## Подготовка

- за **неделю** — отказ от солярия и пляжа;
- в день процедуры — без кофе и кофеинсодержащих препаратов;
- за **48 часов** — без алкоголя;
- отмена антибиотиков и препаратов, влияющих на свёртываемость (ибупрофен, аспирин) — по согласованию с врачом.

## Уход после процедуры

- **24 часа** — не трогать и не массировать зону;
- **48 часов** — без алкоголя и обезболивающих (по назначению врача);
- **не прикладывать лёд** на отёк без указания врача;
- обработка **Хлоргексидином**, заживляющие гели, SPF и увлажнение.

## «Парижские губы»

**Парижская техника** — максимально естественный объём и форма без эффекта «накачанных» губ.

## Лето или зима

Процедуру можно выполнять в любое время года. Гиалуроновая кислота не только добавляет объём, но и способствует регенерации.

## После рассасывания филлера

Даже после полного рассасывания губы могут оставаться чуть более полными, чем до процедуры. Повторное введение — по плану врача.

Связанные услуги: [Контурная пластика](/ru/services/in-ekcionnaya-kosmetologiya/konturnaya), [Биоревитализация](/ru/services/in-ekcionnaya-kosmetologiya/biorev), [Цены](/ru/prices).`;
}

function enBody(): string {
  return `## Lip Volume and Contour Enhancement

At Radeski Skin & Aesthetic Clinic, **hyaluronic acid fillers** are used to restore lip volume and refine contour. Hyaluronic acid is a natural skin component that binds water and reduces moisture loss.

![Lip contour enhancement — Radeski Skin Clinic](${COVER})

## Surgiderm 30XP — preferred filler

The French filler **Surgiderm 30XP** ranks among top choices. Its synthetic hyaluronic acid minimizes allergy risk.

## How the procedure works

A fine needle injects **1–2 ml** of hyaluronic acid in small doses — about **20 injections** per session at **3 mm** depth.

Injection count is individualized: roughly 2 along each side of the contour and 2 above/below for volume — your physician adjusts the plan.

## Indications

- age-related changes;
- lip asymmetry;
- drooping mouth corners;
- loss of skin tone;
- perioral wrinkles;
- naturally thin lips;
- loss of natural contour.

## Contraindications

- allergy to filler components;
- pregnancy and breastfeeding;
- decompensated diabetes;
- acute infections (flu, URI, herpes).

## Preparation

- **1 week** before — no tanning bed or beach;
- on procedure day — no coffee or caffeine;
- **48 hours** before — no alcohol;
- pause blood thinners and antibiotics as advised by your doctor.

## Aftercare

- **24 hours** — do not touch or massage the area;
- **48 hours** — avoid alcohol and certain pain relievers;
- **do not apply ice** unless your doctor recommends it;
- chlorhexidine care, healing gels, SPF, and moisturizing.

## «Paris lips» technique

The **Paris technique** delivers natural volume and shape without an overfilled look.

## Season

The procedure can be done year-round. Hyaluronic acid adds volume and supports tissue regeneration.

## After filler resorption

Lips may remain slightly fuller than before treatment even after full resorption. Repeat sessions follow your physician's plan.

Related services: [Contour enhancement](/en/services/in-ekcionnaya-kosmetologiya/konturnaya), [Biorevitalization](/en/services/in-ekcionnaya-kosmetologiya/biorev), [Prices](/en/prices).`;
}

export const KONTURnaya_GUBY_RADESKI_ARTICLE_CATALOG: LocalizedArticleCatalog = {
  uz: {
    summary:
      'Lab hajmi va kontur plastikasi: gialuron kislotasi, Surgiderm 30XP, tayyorgarlik va parvarish — Radeski Skin Clinic.',
    body: uzBody(),
    keyTakeaways: [
      'Lab hajmi gialuron kislotasi filler bilan tiklanadi',
      'Surgiderm 30XP — allergiya xavfi past preparat',
      'Bir seansda odatda 1–2 ml va ~20 inyeksiya',
      'Parij usuli tabiiy natija beradi',
      'Muolajadan keyin 24–48 soat maxsus parvarish kerak',
    ],
    tags: ['Kontur plastika', 'Lab hajmi', 'Filler', 'Gialuron kislotasi', 'Surgiderm', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Lab hajmi yoki kontur sizni bezovta qilsa',
      'Yoshga bog\'liq lab burchaklari tushgan bo\'lsa',
      'Og\'iz atrofi ajinlari ko\'rinadigan bo\'lsa',
      'Oldingi filler natijasidan qoniqmasangiz',
    ],
    faq: [
      {
        question: 'Qancha vaqt og\'riq bo\'ladi?',
        answer: 'Odatda 2–4 kun. Individual xususiyat va og\'riq chegarasiga bog\'liq.',
      },
      {
        question: 'Filler qancha vaqt turadi?',
        answer: 'Preparat va metabolizmga qarab odatda 6–12 oy. Shifokor qayta muolaja vaqtini belgilaydi.',
      },
      {
        question: 'Kulish va bo\'shash mumkinmi?',
        answer: 'Ha. Sifatli bajarilgan muolajada tabiiy mimika saqlanadi.',
      },
      {
        question: 'O\'pish mumkinmi?',
        answer: 'Yengil tegish mumkin. Faol o\'pishdan 5–7 kun cheklanish tavsiya etiladi.',
      },
      {
        question: 'Nega ko\'p suv ichish kerak?',
        answer: 'Gialuron kislotasi suv bilan ishlaydi — yetarli suv ichish namlik va tiklanishni qo\'llab-quvvatlaydi.',
      },
    ],
  },
  ru: {
    summary:
      'Увеличение и коррекция губ: гиалуроновая кислота, Surgiderm 30XP, подготовка и уход — Radeski Skin Clinic.',
    body: ruBody(),
    keyTakeaways: [
      'Объём губ восстанавливается филлерами на гиалуроновой кислоте',
      'Surgiderm 30XP — низкий риск аллергии',
      'За сеанс обычно 1–2 мл и ~20 инъекций',
      'Парижская техника даёт естественный результат',
      'После процедуры нужен уход 24–48 часов',
    ],
    tags: ['Контурная пластика', 'Увеличение губ', 'Филлер', 'Гиалуроновая кислота', 'Surgiderm', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Недостаточный объём или асимметрия губ',
      'Опущенные уголки рта',
      'Морщины вокруг рта',
      'Недовольство предыдущим результатом',
    ],
    faq: [
      {
        question: 'Сколько болят губы после увеличения?',
        answer: 'Обычно 2–4 дня — зависит от индивидуальных особенностей и болевого порога.',
      },
      {
        question: 'Как долго держится филлер?',
        answer: 'В среднем 6–12 месяцев. Врач назначит повторную процедуру индивидуально.',
      },
      {
        question: 'Можно ли улыбаться?',
        answer: 'Да. При качественном выполнении мимика остаётся естественной.',
      },
      {
        question: 'Можно ли целоваться?',
        answer: 'Лёгкие прикосновения допустимы. Активные поцелуи лучше отложить на 5–7 дней.',
      },
      {
        question: 'Зачем пить много воды?',
        answer: 'Гиалуроновая кислота удерживает воду — достаточная гидратация поддерживает результат и заживление.',
      },
    ],
  },
  en: {
    summary:
      'Lip volume and contour: hyaluronic acid fillers, Surgiderm 30XP, preparation and aftercare — Radeski Skin Clinic.',
    body: enBody(),
    keyTakeaways: [
      'Lip volume is restored with hyaluronic acid fillers',
      'Surgiderm 30XP has a low allergy risk profile',
      'A typical session uses 1–2 ml and ~20 injections',
      'The Paris technique delivers natural results',
      'Special aftercare is required for 24–48 hours',
    ],
    tags: ['Contour enhancement', 'Lip filler', 'Hyaluronic acid', 'Surgiderm', 'Aesthetic medicine', 'Radeski Skin Clinic'],
    whenToSeeDoctor: [
      'Thin lips or contour asymmetry bothers you',
      'Drooping mouth corners with age',
      'Visible perioral wrinkles',
      'Dissatisfied with a previous filler result',
    ],
    faq: [
      {
        question: 'How long will lips hurt?',
        answer: 'Usually 2–4 days, depending on individual sensitivity.',
      },
      {
        question: 'How long does filler last?',
        answer: 'Typically 6–12 months. Your physician will schedule touch-ups individually.',
      },
      {
        question: 'Can I smile normally?',
        answer: 'Yes. Well-performed treatment preserves natural expression.',
      },
      {
        question: 'Can I kiss after treatment?',
        answer: 'Light contact is fine. Active kissing is best avoided for 5–7 days.',
      },
      {
        question: 'Why drink more water?',
        answer: 'Hyaluronic acid binds water — good hydration supports the result and healing.',
      },
    ],
  },
};

export const KONTURnaya_GUBY_RADESKI_ARTICLE: Article = {
  id: 'art-konturnaya-guby-radeski',
  slug: 'konturnaya-plastika-guby-radeski',
  title: {
    uz: 'Lab hajmi va kontur plastikasi: gialuron kislotasi',
    ru: 'Увеличение и коррекция губ: гиалуроновая кислота',
    en: 'Lip Volume and Contour: Hyaluronic Acid Fillers',
  },
  summary: {
    uz: KONTURnaya_GUBY_RADESKI_ARTICLE_CATALOG.uz.summary,
    ru: KONTURnaya_GUBY_RADESKI_ARTICLE_CATALOG.ru.summary,
    en: KONTURnaya_GUBY_RADESKI_ARTICLE_CATALOG.en.summary,
  },
  content: {
    uz: KONTURnaya_GUBY_RADESKI_ARTICLE_CATALOG.uz.body.slice(0, 500),
    ru: KONTURnaya_GUBY_RADESKI_ARTICLE_CATALOG.ru.body.slice(0, 500),
    en: KONTURnaya_GUBY_RADESKI_ARTICLE_CATALOG.en.body.slice(0, 500),
  },
  author: { uz: 'Radeski Skin Clinic', ru: 'Radeski Skin Clinic', en: 'Radeski Skin Clinic' },
  date: '2026-09-22',
  image: COVER,
  images: { uz: COVER, ru: COVER, en: COVER },
  views: 0,
};
