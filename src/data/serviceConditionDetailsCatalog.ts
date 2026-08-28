import type { Locale } from '../types';
import { CONDITION_WHY_RADESKI } from './conditionWhyRadeskiCatalog';

export interface LocalizedConditionText {
  uz: string;
  ru: string;
  en: string;
}

export interface LocalizedConditionSection {
  title: LocalizedConditionText;
  description: LocalizedConditionText;
}

export interface ServiceConditionDetailMeta {
  image: string;
  priceCategoryIds: string[];
  priceKeywords?: string[];
  priceNote?: LocalizedConditionText;
  fullDescription?: LocalizedConditionText;
  aboutTitle?: LocalizedConditionText;
  aboutOverview?: LocalizedConditionText;
  aboutSections?: LocalizedConditionSection[];
  aboutFooter?: LocalizedConditionText;
  treatments?: LocalizedConditionText[];
  clinicApproach?: LocalizedConditionText[];
  process?: LocalizedConditionText[];
  serviceLinks?: { categoryId: string; subId: string }[];
}

export function L(uz: string, ru: string, en: string): LocalizedConditionText {
  return { uz, ru, en };
}

function galleryImage(index: number): string {
  const pool = [
    '/gallery/1.webp',
    '/gallery/2.webp',
    '/gallery/3.webp',
    '/gallery/4.webp',
    '/gallery/5.webp',
    '/gallery/6.webp',
    '/gallery/7.webp',
    '/gallery/8.webp',
    '/gallery/9.webp',
    '/gallery/top1.webp',
    '/gallery/top2.webp',
    '/gallery/top3.webp',
  ];
  return pool[index % pool.length];
}

/** Kategoriya bo'yicha standart narx bo'limlari va rasm */
export const CATEGORY_CONDITION_DEFAULTS: Record<string, ServiceConditionDetailMeta> = {
  'apparatnaya-kosmetologiya': {
    image: galleryImage(0),
    priceCategoryIds: [
      'fotoomolozhenie-ipl-lumecca',
      'fotoomolozhenie-lechenie-sosudistyh-patologiy-rozatsea',
      'fotolechenie-acne-forever-clear',
      'hooywood-spectra',
      'rf-morfeus-8',
      'esteticheskaya-kosmetologiya',
    ],
    clinicApproach: [
      L(
        'Radeski klinikasida dermatolog va kosmetolog birgalikda teri holatini baholaydi, apparat protokolini tanlaydi va kurs davomiyligini belgilaydi.',
        'В клинике Radeski дерматолог и косметолог совместно оценивают кожу, выбирают аппаратный протокол и длительность курса.',
        'At Radeski Clinic, dermatologist and cosmetologist assess skin together, select device protocols and course length.',
      ),
    ],
  },
  dermatologiya: {
    image: galleryImage(1),
    priceCategoryIds: ['konsultatsii', 'fototerapiya', 'eksimer', 'laboratoriya', 'allergo-proba-10-punktov'],
    clinicApproach: [
      L(
        'Dermatolog konsultatsiyasi, kerak bo\'lsa laboratoriya va allergiya testlari, keyin mahalliy yoki sistemli terapiya va apparat muolajalari individual reja asosida belgilanadi.',
        'Консультация дерматолога, при необходимости лаборатория и аллергопробы, затем местная или системная терапия и аппаратные процедуры по индивидуальному плану.',
        'Dermatologist consultation, lab and allergy tests if needed, then topical or systemic therapy and device treatments on an individual plan.',
      ),
    ],
  },
  dermatoskopiya: {
    image: '/services/dermatoskopiya/hero.jpg',
    priceCategoryIds: [
      'tsifrovaya-dematologiya-dermatoskopiya',
      'pasport-kozhi',
      'dermatoonkolog',
      'konsultatsii',
    ],
    clinicApproach: [
      L(
        'Professional dermatoskop va dermatolog nazorati; shubhali holatlarda biopsiya yoki kuzatuv rejasi belgilanadi.',
        'Профессиональный дерматоскоп и контроль дерматолога; при подозрении — биопсия или план наблюдения.',
        'Professional dermatoscope and dermatologist oversight; biopsy or surveillance plan when suspicious.',
      ),
    ],
  },
  trixoskopiya: {
    image: '/services/trixoskopiya/hero.jpg',
    priceCategoryIds: ['trihologiya', 'trihologiya-2', 'konsultatsii'],
    clinicApproach: [
      L(
        'Kompyuter trixoskop va trixolog nazorati; aniq tashxis asosida mezoterapiya, PRP yoki dori-darmonlar individual reja bilan belgilanadi.',
        'Компьютерная трихоскопия и контроль трихолога; на основе диагноза назначаются мезотерапия, PRP или медикаменты по индивидуальному плану.',
        'Computer trichoscopy and trichologist oversight; mesotherapy, PRP or medications follow an individual plan based on diagnosis.',
      ),
    ],
  },
  'in-ekcionnaya-kosmetologiya': {
    image: galleryImage(2),
    priceCategoryIds: ['inektsionnaya-kosmetologiya', 'rejuran', 'teosyal', 'konsultatsii'],
    clinicApproach: [
      L(
        'Shifokor yuz anatomiyasi va teri holatini baholaydi, sertifikatlangan preparatlar va xavfsiz inyeksiya texnikasi qo\'llaniladi.',
        'Врач оценивает анатомию и состояние кожи, применяются сертифицированные препараты и безопасная техника инъекций.',
        'The physician assesses facial anatomy and skin, using certified products and safe injection technique.',
      ),
    ],
  },
  'lazernaya-epilyaciya': {
    image: galleryImage(3),
    priceCategoryIds: ['lazernaya-epilyatsiya', 'konsultatsii'],
    clinicApproach: [
      L(
        'Aleksandrit lazer soch rangi va teri turiga moslashtiriladi; seanslar oralig\'i va kurs davomiyligi individual belgilanadi.',
        'Александритовый лазер настраивается под цвет волос и тип кожи; интервалы и длительность курса индивидуальны.',
        'Alexandrite laser settings match hair color and skin type; session intervals and course length are individualized.',
      ),
    ],
  },
  'trihologiya-centr-lechenie-volos': {
    image: galleryImage(4),
    priceCategoryIds: ['trihologiya', 'konsultatsii', 'healinte'],
    clinicApproach: [
      L(
        'Trixoskopiya va laboratoriya yordamida sabab aniqlanadi; mezoterapiya, apparat va dori-darmonlar kombinatsiyasi qo\'llaniladi.',
        'Трихоскопия и лаборатория определяют причину; применяется сочетание мезотерапии, аппаратов и медикаментов.',
        'Trichoscopy and labs identify the cause; mesotherapy, devices and medications are combined.',
      ),
    ],
  },
  dermatoonkologiya: {
    image: galleryImage(5),
    priceCategoryIds: [
      'dermatoonkolog',
      'tsifrovaya-dematologiya-dermatoskopiya',
      'pasport-kozhi',
      'konsultatsii',
      'hirurgicheskaya-dematologiya',
    ],
    clinicApproach: [
      L(
        'Dermatoskopiya bilan erta aniqlash; shubhali holatlarda biopsiya va onkologik maslahat.',
        'Ранняя диагностика с дерматоскопией; при подозрении — биопсия и онкологический консилиум.',
        'Early detection with clinical dermatoscopy; biopsy and oncology consult when suspicious.',
      ),
    ],
  },
  'hirurgicheskaya-dermatologiya': {
    image: galleryImage(6),
    priceCategoryIds: ['hirurgicheskaya-dematologiya', 'konsultatsii', 'lazer-pinpoint'],
    clinicApproach: [
      L(
        'Xirurgik olib tashlash gistologik tekshiruv bilan birga; yuz sohasida Mohs jarrohligi yuqori aniqlik beradi.',
        'Хирургическое удаление сопровождается гистологией; на лице высокую точность даёт хирургия Mohs.',
        'Surgical removal includes histology; Mohs surgery offers high precision on the face.',
      ),
    ],
  },
  'shkola-psoriaza': {
    image: galleryImage(7),
    priceCategoryIds: ['konsultatsii', 'fototerapiya'],
    clinicApproach: [
      L(
        'Bemorlarga parvarish, diet va kuchayishlarning oldini olish bo\'yicha amaliy guruh mashg\'otalari.',
        'Практические групповые занятия по уходу, питанию и предотвращению обострений.',
        'Practical group sessions on care, diet and flare prevention.',
      ),
    ],
  },
  'shkola-dermatoskopii': {
    image: galleryImage(8),
    priceCategoryIds: ['konsultatsii', 'tsifrovaya-dematologiya-dermatoskopiya'],
    clinicApproach: [
      L(
        'Shifokorlar uchun amaliy dermatoskopiya bo\'yicha o\'quv dasturi.',
        'Практическая программа дерматоскопии для врачей.',
        'Practical dermatoscopy training for physicians.',
      ),
    ],
  },
  'clinika-patologii-nogtej': {
    image: galleryImage(9),
    priceCategoryIds: ['podologiya', 'konsultatsii', 'bazovyy'],
    clinicApproach: [
      L(
        'Podolog va dermatolog hamkorligida tirnoq patologiyasi, zamburug\' va o\'sib ketgan tirnoq tuzatiladi.',
        'Патология ногтей, микоз и вросший ноготь корректируются совместно подологом и дерматологом.',
        'Nail pathology, fungus and ingrown nails are treated by podologist and dermatologist together.',
      ),
    ],
  },
  dermatopatologiya: {
    image: galleryImage(10),
    priceCategoryIds: ['konsultatsii', 'hirurgicheskaya-dematologiya', 'laboratoriya'],
    clinicApproach: [
      L(
        'Biopsiya namunalarining gistologik va immunogistokimyoviy tahlili aniq tashxis uchun.',
        'Гистологическое и иммуногистохимическое исследование биоптатов для точного диагноза.',
        'Histologic and immunohistochemical analysis of biopsies for accurate diagnosis.',
      ),
    ],
  },
  'gen-revo': {
    image: galleryImage(11),
    priceCategoryIds: ['fotoomolozhenie-ipl-lumecca', 'fotoomolozhenie-lechenie-sosudistyh-patologiy-rozatsea'],
    clinicApproach: [
      L(
        'Forever Young IPL protokollari gen darajasida teri yangilanishi uchun dermatolog nazoratida qo\'llaniladi.',
        'Протоколы Forever Young IPL применяются под контролем дерматолога для обновления кожи на генном уровне.',
        'Forever Young IPL protocols are used under dermatologist supervision for gene-level skin renewal.',
      ),
    ],
  },
};

/** Sub-xizmat (catalog key) bo'yicha standart */
export const SUB_CONDITION_DEFAULTS: Record<string, ServiceConditionDetailMeta> = {
  'ipl-inmode': CATEGORY_CONDITION_DEFAULTS['apparatnaya-kosmetologiya'],
  'gene-photo-rejuvenation': CATEGORY_CONDITION_DEFAULTS['apparatnaya-kosmetologiya'],
  mikrotoki: CATEGORY_CONDITION_DEFAULTS['apparatnaya-kosmetologiya'],
  'lazer-biorev': CATEGORY_CONDITION_DEFAULTS['apparatnaya-kosmetologiya'],
  'ultratovush-yuz': {
    image: galleryImage(7),
    priceCategoryIds: ['esteticheskaya-kosmetologiya'],
    priceKeywords: ['ультразв', 'ultrazvuk', 'aquapire'],
    clinicApproach: CATEGORY_CONDITION_DEFAULTS['apparatnaya-kosmetologiya'].clinicApproach,
  },
  'det-derm': CATEGORY_CONDITION_DEFAULTS.dermatologiya,
  fototerapiya: {
    image: galleryImage(1),
    priceCategoryIds: ['fototerapiya', 'eksimer', 'konsultatsii'],
    clinicApproach: CATEGORY_CONDITION_DEFAULTS.dermatologiya.clinicApproach,
  },
  immunobiologicheskaya: {
    image: galleryImage(2),
    priceCategoryIds: ['konsultatsii', 'fototerapiya'],
    priceNote: L(
      'Immunobiologik preparatlar narxi va rejimi shifokor konsultatsiyasida individual belgilanadi.',
      'Стоимость и схема биологических препаратов определяются индивидуально на консультации.',
      'Biologic therapy cost and regimen are set individually at consultation.',
    ),
    clinicApproach: CATEGORY_CONDITION_DEFAULTS.dermatologiya.clinicApproach,
  },
  'derm-konsult': CATEGORY_CONDITION_DEFAULTS.dermatoskopiya,
  'derm-total-body': CATEGORY_CONDITION_DEFAULTS.dermatoskopiya,
  'derm-skin-passport': CATEGORY_CONDITION_DEFAULTS.dermatoskopiya,
  'trix-konsult': CATEGORY_CONDITION_DEFAULTS.trixoskopiya,
  'trix-alopecia': CATEGORY_CONDITION_DEFAULTS.trixoskopiya,
  'trix-monitoring': CATEGORY_CONDITION_DEFAULTS.trixoskopiya,
  konturnaya: CATEGORY_CONDITION_DEFAULTS['in-ekcionnaya-kosmetologiya'],
  botulino: CATEGORY_CONDITION_DEFAULTS['in-ekcionnaya-kosmetologiya'],
  biorev: CATEGORY_CONDITION_DEFAULTS['in-ekcionnaya-kosmetologiya'],
  'alex-lazer': CATEGORY_CONDITION_DEFAULTS['lazernaya-epilyaciya'],
  trixoskop: CATEGORY_CONDITION_DEFAULTS['trihologiya-centr-lechenie-volos'],
  biopsiya: CATEGORY_CONDITION_DEFAULTS.dermatoonkologiya,
  'moh-surgery': CATEGORY_CONDITION_DEFAULTS['hirurgicheskaya-dermatologiya'],
  'consult-group': CATEGORY_CONDITION_DEFAULTS['shkola-psoriaza'],
  'dermatosc-lessons': CATEGORY_CONDITION_DEFAULTS['shkola-dermatoskopii'],
  'podolog-dermatolog': CATEGORY_CONDITION_DEFAULTS['clinika-patologii-nogtej'],
  gistolog: CATEGORY_CONDITION_DEFAULTS.dermatopatologiya,
  'fy-protocols': CATEGORY_CONDITION_DEFAULTS['gen-revo'],
};

const GLOBAL_DEFAULT: ServiceConditionDetailMeta = {
  image: galleryImage(0),
  priceCategoryIds: ['konsultatsii'],
  clinicApproach: [
    L(
      'Radeski klinikasida shifokor konsultatsiyasi va individual davolash rejasi tuziladi.',
      'В клинике Radeski проводится консультация врача и составляется индивидуальный план лечения.',
      'At Radeski Clinic, a physician consultation and individual treatment plan are provided.',
    ),
  ],
};

/** Slug-based condition IDs map to legacy catalog keys for shared rich content. */
const CONDITION_META_ALIASES: Record<string, string> = {
  psoriaz: 'cat-dermatologiya-psoriaz',
  vitiligo: 'cat-dermatologiya-vitiligo',
  'teri-allergiyasi': 'cat-dermatologiya-allergik-toshma-va-kontakt-dermatit',
  ekzema: 'cat-dermatologiya-ekzema-va-atopik-dermatit',
  'seboreyali-dermatit': 'cat-dermatologiya-seborreya-va-teri-zamburugi',
};

function resolveConditionCatalogKey(conditionId: string): string {
  return CONDITION_META_ALIASES[conditionId] ?? conditionId;
}

function resolveConditionOverride(conditionId: string): Partial<ServiceConditionDetailMeta> {
  const aliasKey = CONDITION_META_ALIASES[conditionId];
  const direct = CONDITION_DETAIL_OVERRIDES[conditionId] ?? {};
  if (!aliasKey) return direct;
  const aliased = CONDITION_DETAIL_OVERRIDES[aliasKey] ?? {};
  return { ...aliased, ...direct };
}

function conditionImage(slug: string): string {
  return `/services/dermatologiya/conditions/${slug}.jpg`;
}

/** Aniq kasallik / muammo bo'yicha kengaytirilgan ma'lumot */
export const CONDITION_DETAIL_OVERRIDES: Record<string, Partial<ServiceConditionDetailMeta>> = {
  psoriaz: {
    image: conditionImage('psoriaz'),
  },
  vitiligo: {
    image: conditionImage('vitiligo'),
  },
  'teri-allergiyasi': {
    image: conditionImage('teri-allergiyasi'),
  },
  ekzema: {
    image: conditionImage('ekzema'),
    fullDescription: L(
      'Ekzema — terining surunkali yallig\'lanishi: qichish, qizarish, quruqlik va ba\'zan nam chiqarish. Stress, iqlim o\'zgarishi, agressiv kosmetika yoki allergenlar kuchaytirishi mumkin. Radeski klinikasida avvalo triggerlarni aniqlash, keyin parvarish rejasi va zarur bo\'lsa mahalliy yoki sistemli terapiya belgilanadi.',
      'Экзема — хроническое воспаление кожи с зудом, покраснением и сухостью. Усиливается стрессом, климатом и раздражителями. В Radeski выявляют триггеры и назначают уход с местной или системной терапией.',
      'Eczema is chronic skin inflammation with itch, redness and dryness. Triggers include stress, climate and irritants. At Radeski we identify triggers and prescribe care plus topical or systemic therapy when needed.',
    ),
    treatments: [
      L('Emolient va yumshatuvchi parvarish', 'Эмоленты и смягчающий уход', 'Emollients and soothing care'),
      L('Mahalliy yallig\'lanishga qarshi krem va moylar', 'Местные противовоспалительные средства', 'Topical anti-inflammatory creams'),
      L('Triggerlarni bartaraf etish maslahati', 'Рекомендации по устранению триггеров', 'Trigger avoidance counseling'),
    ],
    serviceLinks: [{ categoryId: 'dermatologiya', subId: 'det-derm' }],
  },
  'atopik-dermatit': {
    image: conditionImage('atopik-dermatit'),
    fullDescription: L(
      'Atopik dermatit — bolalar va kattalarda uchraydigan surunkali qichish va quruq, sezgir teri. Oilaviy allergiya va astma bilan bog\'liq bo\'lishi mumkin. Radeski klinikasida yoshga mos parvarish, allergiya testlari va uzoq muddatli remissiya uchun individual reja tuziladi.',
      'Атопический дерматит — хронический зуд и сухая чувствительная кожа у детей и взрослых. Часто сочетается с аллергией в анамнезе. В Radeski составляют возрастной уход, аллергопробы и план длительной ремиссии.',
      'Atopic dermatitis causes chronic itch and dry, sensitive skin in children and adults, often with allergy history. At Radeski we plan age-appropriate care, allergy testing and long-term remission strategy.',
    ),
    treatments: [
      L('Bolalar va kattalar uchun emolientlar', 'Эмоленты для детей и взрослых', 'Emollients for children and adults'),
      L('Allergo-proba va triggerlarni aniqlash', 'Аллергопробы и выявление триггеров', 'Allergy testing and trigger mapping'),
      L('Surunkali kuzatuv va parvarish rejasi', 'Длительное наблюдение и план ухода', 'Long-term follow-up and care plan'),
    ],
    serviceLinks: [{ categoryId: 'dermatologiya', subId: 'det-derm' }],
  },
  'teri-doglari': {
    image: conditionImage('teri-doglari'),
    priceCategoryIds: ['fotoomolozhenie-ipl-lumecca', 'hooywood-spectra-lechenie-pigmentatsii-post-akne', 'konsultatsii'],
    fullDescription: L(
      'Teri dog\'lari — melasma, post-akne pigmentatsiyasi, freckle va quyosh dog\'lari. Sabab: gormonlar, UV nurlanish, yallig\'lanishdan keyingi rang o\'zgarishi. Radeski klinikasida avvalo xavfsizlik baholanadi, keyin IPL, lazer yoki biorevitalizatsiya protokollari tanlanadi.',
      'Пигментные пятна — мелasma, постакне, веснушки и солнечная пигментация. Причины: гормоны, УФ, воспаление. В Radeski оценивают безопасность и подбирают IPL, лазер или биоревитализацию.',
      'Skin spots include melasma, post-acne pigmentation, freckles and sun spots from hormones, UV and inflammation. At Radeski safety is assessed first, then IPL, laser or biorevitalization protocols are chosen.',
    ),
    treatments: [
      L('IPL foto-yangilash (InMode Lumecca)', 'IPL-фотоомоложение (InMode Lumecca)', 'IPL photo-rejuvenation (InMode Lumecca)'),
      L('Hollywood Spectra pigment protokollari', 'Протоколы Hollywood Spectra для пигмента', 'Hollywood Spectra pigmentation protocols'),
      L('Quyosh himoyasi va parvarish rejasi', 'Солнцезащита и план ухода', 'Sun protection and care plan'),
    ],
    serviceLinks: [
      { categoryId: 'apparatnaya-kosmetologiya', subId: 'ipl-inmode' },
      { categoryId: 'apparatnaya-kosmetologiya', subId: 'hollywood-spectra' },
    ],
  },
  acne: {
    image: conditionImage('acne'),
    priceCategoryIds: ['konsultatsii', 'esteticheskaya-kosmetologiya', 'inektsionnaya-kosmetologiya'],
    fullDescription: L(
      'Acne (ugri) — folikula va yog\' bezlarining yallig\'lanishi: qizil toshmalar, qopqora nuqtalar, ba\'zan chandiqlar. Gormonlar, stress va noto\'g\'ri parvarish kuchaytiradi. Radeski klinikasida dermatolog akne turini baholaydi — keyin dori-darmon, parvarish va apparat muolajalari kombinatsiyasi qo\'llaniladi.',
      'Акне — воспаление фолликулов и сальных желез: угри, комедоны, рубцы. В Radeski дерматолог определяет тип акне и назначает сочетание медикаментов, ухода и аппаратных процедур.',
      'Acne is follicle and sebaceous gland inflammation — pimples, comedones and sometimes scars. At Radeski a dermatologist classifies acne type and combines medication, care and device treatments.',
    ),
    treatments: [
      L('Mahalliy va og\'ir holatda sistemli terapiya', 'Местная и при необходимости системная терапия', 'Topical and systemic therapy when needed'),
      L('Ultratovush tozalash va apparat protokollari', 'Ультразвуковая чистка и аппаратные протоколы', 'Ultrasonic cleansing and device protocols'),
      L('Parvarish va diet bo\'yicha maslahat', 'Рекомендации по уходу и питанию', 'Care and lifestyle guidance'),
    ],
    serviceLinks: [
      { categoryId: 'apparatnaya-kosmetologiya', subId: 'ultratovush-yuz' },
      { categoryId: 'apparatnaya-kosmetologiya', subId: 'hollywood-spectra' },
    ],
  },
  rozasea: {
    image: conditionImage('rozasea'),
    priceCategoryIds: ['derma-v-sosudistyy-lazer-lechenie-sosudistyh-zvezdochek-kuperoza-i-rozatsii', 'fotoomolozhenie-ipl-lumecca', 'konsultatsii'],
    fullDescription: L(
      'Rozasea — yuzda doimiy yoki vaqtinchalik qizarish, kengaygan qon tomirlari, ba\'zan toshmalar va sezgirlik. Issiqlik, alkogol, achchiq taom va stress kuchaytirishi mumkin. Radeski klinikasida Derma V vaskulyar lazer, IPL va parvarish protokollari bilan holat nazorat qilinadi.',
      'Розацеа — покраснение лица, сосудистая сетка, высыпания и чувствительность. В Radeski применяют сосудистый лазер Derma V, IPL и протоколы ухода.',
      'Rosacea causes facial redness, visible vessels, bumps and sensitivity. At Radeski Derma V vascular laser, IPL and care protocols help control flares.',
    ),
    treatments: [
      L('Derma V vaskulyar lazer', 'Сосудистый лазер Derma V', 'Derma V vascular laser'),
      L('IPL foto-yangilash', 'IPL-фотоомоложение', 'IPL photo-rejuvenation'),
      L('Triggerlardan saqlanish va parvarish', 'Исключение триггеров и уход', 'Trigger avoidance and skincare'),
    ],
    serviceLinks: [{ categoryId: 'apparatnaya-kosmetologiya', subId: 'ipl-inmode' }],
  },
  postacne: {
    image: conditionImage('postacne'),
    priceCategoryIds: ['lazernaya-ablyatsionnaya-shlifovka-kozhi-poverhnostnaya', 'inektsionnaya-kosmetologiya', 'hooywood-spectra-lechenie-pigmentatsii-post-akne'],
    fullDescription: L(
      'Postacne — akne davolanganidan keyin qolgan chandiqlar, ko\'ngillik va pigment dog\'lari. Teri tekisligi va rangi buziladi. Radeski klinikasida lazer resurfacing, biorevitalizatsiya va pigment protokollari chuqur va yuzaki o\'zgarishlarni bosqichma-bosqich yaxshilaydi.',
      'Постакне — рубцы, воронки и пигментация после акне. В Radeski лазерная шлифовка, биоревитализация и протоколы для пигмента постепенно улучшают рельеф и тон.',
      'Post-acne leaves scars, pits and pigmentation after active acne. At Radeski laser resurfacing, biorevitalization and pigment protocols gradually improve texture and tone.',
    ),
    treatments: [
      L('Lazer resurfacing va biorevitalizatsiya', 'Лазерная шлифовка и биоревitalizatsiya', 'Laser resurfacing and biorevitalization'),
      L('Hollywood Spectra post-akne protokollari', 'Протоколы Hollywood Spectra при постакне', 'Hollywood Spectra post-acne protocols'),
      L('Uy parvarishi va quyosh himoyasi', 'Домашний уход и SPF', 'Home care and sun protection'),
    ],
    serviceLinks: [
      { categoryId: 'apparatnaya-kosmetologiya', subId: 'hollywood-spectra' },
      { categoryId: 'in-ekcionnaya-kosmetologiya', subId: 'biorev' },
    ],
  },
  'seboreyali-dermatit': {
    image: conditionImage('seboreyali-dermatit'),
  },
  'yuz-qizarishi': {
    image: conditionImage('yuz-qizarishi'),
    priceCategoryIds: ['derma-v-sosudistyy-lazer-lechenie-sosudistyh-zvezdochek-kuperoza-i-rozatsii', 'fotoomolozhenie-ipl-lumecca', 'konsultatsii'],
    fullDescription: L(
      'Yuz qizarishi — rozasea, kuperoz, sezgir teri yoki post-protsedura reaksiyasi sababli paydo bo\'lishi mumkin. Kengaygan kapillyarlar ko\'rinadi, issiqlik va stress holatni kuchaytiradi. Radeski klinikasida sabab aniqlangach, lazer, IPL va yumshoq parvarish protokollari tanlanadi.',
      'Покраснение лица может быть при розацеа, куперозе или чувствительной коже. В Radeski после выявления причины назначают лазер, IPL и щадящий уход.',
      'Facial redness may come from rosacea, couperose or sensitive skin. At Radeski the cause is identified first, then laser, IPL and gentle care protocols are selected.',
    ),
    treatments: [
      L('Vaskulyar lazer (Derma V)', 'Сосудистый лазер (Derma V)', 'Vascular laser (Derma V)'),
      L('IPL va yuz parvarishi', 'IPL и уход за лицом', 'IPL and facial care'),
      L('Triggerlarni kamaytirish bo\'yicha maslahat', 'Советы по снижению триггеров', 'Advice on reducing triggers'),
    ],
    serviceLinks: [{ categoryId: 'apparatnaya-kosmetologiya', subId: 'ipl-inmode' }],
  },
  'teri-qichishi': {
    image: conditionImage('teri-qichishi'),
    priceCategoryIds: ['konsultatsii', 'allergo-proba-10-punktov', 'laboratoriya'],
    fullDescription: L(
      'Terning qichishi (pruritus) — ekzema, allergiya, quruq teri, zamburug\' yoki ichki kasallik belgisi bo\'lishi mumkin. O\'z-o\'zidan krem surish ba\'zan sababni yashiradi. Radeski klinikasida dermatolog ko\'rigi, kerak bo\'lsa allergo-test va laboratoriya yordamida asosiy sabab aniqlanadi.',
      'Зуд кожи может быть симптомом экземы, аллергии, сухости или грибка. В Radeski дерматолог проводит осмотр, аллергопробы и анализы для выявления причины.',
      'Skin itching may signal eczema, allergy, dryness or fungal infection. At Radeski a dermatologist exam plus allergy tests and labs identify the underlying cause.',
    ),
    treatments: [
      L('Sababga qarab mahalliy yoki sistemli terapiya', 'Местная или системная терапия по причине', 'Cause-based topical or systemic therapy'),
      L('Allergo-proba va laboratoriya', 'Аллергопробы и лаборатория', 'Allergy testing and labs'),
      L('Emolient va yumshoq parvarish', 'Эмоленты и мягкий уход', 'Emollients and gentle care'),
    ],
    serviceLinks: [{ categoryId: 'dermatologiya', subId: 'det-derm' }],
  },
  'cat-dermatologiya-psoriaz': {
    image: galleryImage(1),
    priceCategoryIds: ['fototerapiya', 'konsultatsii', 'laboratoriya'],
    priceKeywords: ['uvb'],
    fullDescription: L(
      'Psoriaz — immun tizimi faoliyati buzilishi bilan bog\'liq surunkali kasallik. Terida qizil, xira dog\'lar va qalqonsimon oq-qizil qoplama paydo bo\'ladi; ba\'zan qichish va yoriq ham kuzatiladi. Tizza, tirsak, bosh terisi, bel va tana keng joylashishi mumkin. Og\'ir holatlarda bo\'g\'imlarga ham ta\'sir qiladi. Radeski klinikasida maqsad — yallig\'lanishni kamaytirish, qoplama qalinligini pasaytirish va uzoq remissiya olish.',
      'Псориаз — хроническое заболевание с иммунным компонентом: красные бляшки с серебристым шелушением, зуд и трещины. Поражает колени, локти, кожу головы, туловище; при тяжёлом течении — суставы. В клинике Radeski цель — снизить воспаление, уменьшить высыпания и добиться длительной ремиссии.',
      'Psoriasis is a chronic immune-mediated disease with red plaques, silvery scale, itching and cracking. It affects knees, elbows, scalp and trunk; severe cases may involve joints. At Radeski Clinic the goal is to reduce inflammation, clear lesions and achieve long remission.',
    ),
    treatments: [
      L('Tor to\'lqinli UVB 311 nm fototerapiya (kurs)', 'Узкополосная UVB 311 нм фототерапия (курс)', 'Narrow-band UVB 311 nm phototherapy (course)'),
      L('Mahalliy dori-darmonlar (krem, moy)', 'Местная терапия (кремы, мази)', 'Topical therapy (creams, ointments)'),
      L('Og\'ir holatda immunobiologik preparatlar', 'При тяжёлом течении — биологические препараты', 'Biologics for severe cases'),
      L('Parvarish va kuchayish profilaktikasi', 'Уход и профилактика обострений', 'Care and flare prevention'),
    ],
    process: [
      L('Dermatolog konsultatsiyasi va teri holatini baholash', 'Консультация и оценка кожи', 'Consultation and skin assessment'),
      L('Fototerapiya kursi rejalashtirish (6–8 yoki ko\'proq seans)', 'Планирование курса фототерапии', 'Planning phototherapy course'),
      L('Natija kuzatuvi va parvarish tavsiyalari', 'Контроль результата и рекомендации', 'Result monitoring and care advice'),
    ],
    serviceLinks: [
      { categoryId: 'dermatologiya', subId: 'fototerapiya' },
      { categoryId: 'dermatologiya', subId: 'immunobiologicheskaya' },
    ],
  },
  'cat-dermatologiya-vitiligo': {
    image: galleryImage(2),
    priceCategoryIds: ['fototerapiya', 'eksimer', 'transplantatsiya-melanotsitov', 'konsultatsii'],
    priceKeywords: ['uvb', 'эксимер', 'excimer', 'melanotsit'],
    fullDescription: L(
      'Vitiligo — melanotsitlarning yo\'qolishi natijasida terida oq, chegarasi aniq dog\'lar paydo bo\'ladi. Yuz, qo\'llar, tizzalar va jinsiy a\'zolar atrofida ko\'p uchraydi. Kasallik estetik va psixologik noqulaylik tug\'dirishi mumkin. Davolash uzoq muddatli; Radeski klinikasida tor to\'lqinli UVB va Excimer lazer repigmentatsiyani rag\'batlantiradi, keng tarqalgan holatlarda melanotsit transplantatsiyasi muhokama qilinadi.',
      'Витилиго — белые чётко очерченные пятна при гибели меланоцитов. Часто на лице, руках, коленях. Лечение длительное: в Radeski узкополосный UVB и эксимер стимулируют репигментацию; при распространённых формах обсуждается трансплантация меланоцитов.',
      'Vitiligo causes sharply bordered white patches from melanocyte loss, often on face, hands and knees. Treatment is long-term: narrow-band UVB and Excimer laser stimulate repigmentation; melanocyte transplantation is discussed for extensive cases.',
    ),
    treatments: [
      L('Tor to\'lqinli UVB fototerapiya', 'Узкополосная UVB-фототерапия', 'Narrow-band UVB phototherapy'),
      L('Excimer lazer muolajalari', 'Процедуры эксимерного лазера', 'Excimer laser sessions'),
      L('Melanotsit transplantatsiyasi (keng tarqalgan holatlar)', 'Трансплантация меланоцитов (распространённые формы)', 'Melanocyte transplantation (extensive cases)'),
    ],
    process: [
      L('Dermatolog ko\'rigi va dog\' xaritalash', 'Осмотр и картирование пятен', 'Examination and lesion mapping'),
      L('Fototerapiya yoki Excimer kursi', 'Курс фототерапии или эксимера', 'Phototherapy or Excimer course'),
      L('Repigmentatsiya dinamikasini kuzatish', 'Мониторинг репигментации', 'Monitoring repigmentation progress'),
    ],
    serviceLinks: [{ categoryId: 'dermatologiya', subId: 'fototerapiya' }],
  },
  'cat-dermatologiya-ekzema-va-atopik-dermatit': {
    image: galleryImage(3),
    priceCategoryIds: ['konsultatsii', 'allergo-proba-10-punktov', 'laboratoriya'],
    fullDescription: L(
      'Ekzema va atopik dermatit — surunkali yallig\'lanish: qichish, qizarish, quruqlik va ba\'zan nam chiqarish. Bolalar va kattalarda uchraydi. Triggerlar: allergenlar, stress, iqlim, noto\'g\'ri parvarish. Radeski klinikasida allergiya testlari, parvarish rejasi, mahalliy va zarur bo\'lsa sistemli terapiya qo\'llaniladi.',
      'Экзема и атопический дерматит — хроническое воспаление с зудом, покраснением и сухостью. У детей и взрослых. Триггеры: аллергены, стресс, климат. В Radeski — аллергопробы, уход, местная и при необходимости системная терапия.',
      'Eczema and atopic dermatitis cause chronic inflammation with itch, redness and dryness in children and adults. Triggers include allergens, stress and climate. At Radeski: allergy tests, care plan, topical and systemic therapy if needed.',
    ),
    treatments: [
      L('Allergiya diagnostikasi (allergo-test)', 'Аллергодиагностика', 'Allergy diagnostics'),
      L('Emolient va mahalliy yallig\'lanishga qarshi terapiya', 'Эмоленты и местная противовоспалительная терапия', 'Emollients and topical anti-inflammatory therapy'),
      L('Triggerlarni bartaraf etish bo\'yicha maslahat', 'Рекомендации по устранению триггеров', 'Trigger avoidance counseling'),
    ],
    serviceLinks: [{ categoryId: 'dermatologiya', subId: 'det-derm' }],
  },
  'cat-dermatologiya-allergik-toshma-va-kontakt-dermatit': {
    image: galleryImage(4),
    priceCategoryIds: ['allergo-proba-10-punktov', 'konsultatsii', 'laboratoriya'],
    priceKeywords: ['аллерго', 'allerg'],
    fullDescription: L(
      'Allergik toshma va kontakt dermatit — terining allergen yoki tirnashchi moddaga reaksiyasi. Qizarish, qichish, toshma va ba\'zan suyuqlik chiqishi kuzatiladi. Kosmetika, oziq-ovqat, metall yoki kimyoviy moddalar sabab bo\'lishi mumkin. Radeski klinikasida allergiya paneli, triggerlarni aniqlash va maxsus terapiya rejalashtiriladi.',
      'Аллергический дерматит — реакция кожи на аллерген или раздражитель. Покраснение, зуд, высыпания. В Radeski — аллергопанели, выявление триггеров и целенаправленная терапия.',
      'Allergic and contact dermatitis are skin reactions to allergens or irritants with redness, itch and rash. At Radeski: allergy panels, trigger identification and targeted therapy.',
    ),
    treatments: [
      L('Allergo-proba (10 punkt va kengaytirilgan panel)', 'Аллергопроба и панели', 'Allergy testing and panels'),
      L('Antigistamin va mahalliy terapiya', 'Антигистаминная и местная терапия', 'Antihistamine and topical therapy'),
      L('Kontakt allergenlardan saqlanish', 'Исключение контактных аллергенов', 'Avoidance of contact allergens'),
      L('Plazmaforez (og\'ir va surunkali allergik reaktsiyalar)', 'Плазмофорез при тяжёлых аллергических реакциях', 'Plasmapheresis for severe allergic reactions'),
    ],
    process: [
      L('Allergolog va dermatolog konsultatsiyasi', 'Консультация аллерголога и дерматолога', 'Allergist and dermatologist consultation'),
      L('Allergoproba va kerak bo\'lsa dermatoskopiya', 'Аллергопробы и при необходимости дерматоскопия', 'Allergy tests and dermatoscopy if needed'),
      L('Individual terapiya va kuzatuv', 'Индивидуальная терапия и наблюдение', 'Individual therapy and follow-up'),
    ],
  },
  'cat-dermatologiya-seborreya-va-teri-zamburugi': {
    image: galleryImage(5),
    priceCategoryIds: ['konsultatsii', 'bazovyy', 'laboratoriya', 'podologiya'],
    priceKeywords: ['микоз', 'mikoz', 'онихомикоз', 'onikomikoz'],
    fullDescription: L(
      'Seborreya — bosh terisi va yuzda yog\'li teri, qichish va qalqonsimon qoplama. Zamburug\'i (mikoz) tirnoq va terini zararlaydi: qalinlashish, rang o\'zgarishi, qoplama. Radeski klinikasida antifungal terapiya, mahalliy vositalar, podologik yordam va parvarish bo\'yicha aniq ko\'rsatmalar beriladi.',
      'Себорея — жирная кожа и перхоть на коже головы и лице. Микоз поражает ногти и кожу. В Radeski — противогрибковая терапия, местные средства, подологическая помощь и рекомендации по уходу.',
      'Seborrhea causes oily skin and scaling on scalp and face. Fungal infections affect nails and skin. At Radeski: antifungal therapy, topical agents, podiatry support and care guidance.',
    ),
    treatments: [
      L('Antifungal dori-darmonlar (ichki va mahalliy)', 'Противогрибковые препараты', 'Antifungal medications'),
      L('Laboratoriya: mikoz aniqlash', 'Лабораторная диагностика микоза', 'Laboratory fungal diagnostics'),
      L('Seborey dermatitda yallig\'lanishga qarshi terapiya', 'Противовоспалительная терапия при себорее', 'Anti-inflammatory therapy for seborrhea'),
      L('Teri to\'sig\'ini tiklash va profilaktika', 'Восстановление барьера и профилактика', 'Barrier restoration and relapse prevention'),
      L('Tirnoq patologiyasi uchun podologik yordam', 'Подологическая помощь при патологии ногтей', 'Podologic care for nail pathology'),
    ],
    process: [
      L('Dermatolog ko\'rigi va bosh terisi baholash', 'Осмотр дерматолога и оценка кожи головы', 'Dermatologist exam and scalp assessment'),
      L('Dermatoskopiya va laboratoriya tekshiruvi', 'Дерматоскопия и лабораторная диагностика', 'Dermatoscopy and laboratory testing'),
      L('Individual terapiya va profilaktik kuzatuv', 'Индивидуальная терапия и профилактическое наблюдение', 'Individual therapy and preventive follow-up'),
    ],
    serviceLinks: [{ categoryId: 'clinika-patologii-nogtej', subId: 'podolog-dermatolog' }],
  },
};

export function getLocalizedConditionText(text: LocalizedConditionText, locale: Locale): string {
  return text[locale] || text.uz;
}

export function resolveConditionDetailMeta(
  conditionId: string,
  categoryId: string,
  subCatalogKey?: string | null,
): ServiceConditionDetailMeta {
  const catalogKey = resolveConditionCatalogKey(conditionId);
  const override = resolveConditionOverride(conditionId);
  const whyRadeski = CONDITION_WHY_RADESKI[catalogKey] ?? CONDITION_WHY_RADESKI[conditionId];
  const subDefault = subCatalogKey ? SUB_CONDITION_DEFAULTS[subCatalogKey] : undefined;
  const catDefault = CATEGORY_CONDITION_DEFAULTS[categoryId] ?? GLOBAL_DEFAULT;
  const base = subDefault ?? catDefault;

  return {
    image: override.image ?? base.image ?? GLOBAL_DEFAULT.image,
    priceCategoryIds: override.priceCategoryIds ?? base.priceCategoryIds ?? GLOBAL_DEFAULT.priceCategoryIds,
    priceKeywords: override.priceKeywords ?? base.priceKeywords,
    priceNote: override.priceNote ?? base.priceNote,
    fullDescription: override.fullDescription,
    aboutTitle: override.aboutTitle ?? whyRadeski?.aboutTitle,
    aboutOverview: override.aboutOverview ?? whyRadeski?.aboutOverview,
    aboutSections: override.aboutSections ?? whyRadeski?.aboutSections,
    aboutFooter: override.aboutFooter ?? whyRadeski?.aboutFooter,
    treatments: override.treatments ?? base.treatments,
    clinicApproach: override.clinicApproach ?? base.clinicApproach,
    process: override.process ?? base.process,
    serviceLinks: override.serviceLinks ?? base.serviceLinks,
  };
}
