import type { Locale } from '../types';
import { CLINIC_MAP_EMBED_URL, getClinicMapOpenUrl, KOKAND_BRANCH_MAP_EMBED_URL, KOKAND_BRANCH_MAP_OPEN_URL, LIEGE_BRANCH_MAP_EMBED_URL, LIEGE_BRANCH_MAP_OPEN_URL, RADE_SKIN_CLINIC_EMAIL, RADE_SKIN_CLINIC_PHONE, RADE_SKIN_CLINIC_WEBSITE } from '../config/links';

type LocalizedText = Record<Locale, string>;

export interface ClinicVideo {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  src: string;
  duration: string;
  category: LocalizedText;
  thumbnail?: string;
  sortOrder?: number;
  isActive?: boolean;
  /** Upload date from the CMS (VideoObject uploadDate). */
  createdAt?: string;
}

export interface ClinicBranch {
  id: string;
  name: LocalizedText;
  address: LocalizedText;
  phone: string;
  /** tel: havolasi uchun (ixtiyoriy; bo‘lmasa phone dan hosil qilinadi) */
  phoneTel?: string;
  hours: LocalizedText;
  services: LocalizedText;
  mapEmbed: string;
  /** Google Maps'da ochish uchun to'g'ri havola (ixtiyoriy) */
  mapUrl?: string;
  website?: string;
  email?: string;
  isMain?: boolean;
  image: string;
  sortOrder?: number;
  isActive?: boolean;
}

export interface TreatmentResult {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  service: LocalizedText;
  beforeImage: string;
  afterImage: string;
  /** Birlashtirilgan oldin/keyin rasm (masalan do1.jpg) */
  comparisonImage?: string;
  /** Oldin va keyin orasidagi davolash bosqichlari (qadam-baqadam) */
  journeyImages?: string[];
  /** Bolalar suratlarida ko'zlar maxfiylik uchun yashirilgan */
  privacyEyeMasked?: boolean;
  sessions: LocalizedText;
  sortOrder?: number;
  published?: boolean;
}

export interface ClinicPartner {
  id: string;
  name: LocalizedText;
  logo: string;
  logoVariant?: 'dark' | 'light';
  sortOrder?: number;
  isActive?: boolean;
}

export interface CustomerReview {
  id: string;
  authorName: string;
  rating: number;
  comment: LocalizedText;
  service?: LocalizedText;
  /** Main service category id — used for review filtering on the homepage. */
  serviceCategoryId?: string;
  /** Google Maps dan avtomatik import qilingan sharh */
  source?: 'site' | 'google';
  googleReviewId?: string;
  googleAuthorUri?: string;
  date: string;
  published: boolean;
}

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'review-1',
    authorName: 'Nilufar A.',
    rating: 5,
    comment: {
      uz: "IPL seanslaridan keyin terim ancha yorqin va tekis bo'ldi. Shifokor har bir bosqichni tushuntirib berdi — juda professional yondashuv.",
      ru: 'После курса IPL кожа стала заметно свежее и ровнее. Врач подробно объяснял каждый этап — очень профессиональный подход.',
      en: 'After IPL sessions my skin became noticeably brighter and smoother. The doctor explained every step — truly professional care.',
    },
    service: { uz: 'IPL terapiya', ru: 'IPL-терапия', en: 'IPL therapy' },
    serviceCategoryId: 'apparatnaya-kosmetologiya',
    date: '2025-11-12',
    published: true,
  },
  {
    id: 'review-2',
    authorName: 'Jamshid R.',
    rating: 5,
    comment: {
      uz: "Dermatoskopiya tekshiruvi juda qulay va tez o'tkazildi. Natijalar aniq, shifokor barcha savollarga batafsil javob berdi.",
      ru: 'Обследование дерматоскопией прошло быстро и комфортно. Результаты понятны, врач подробно ответил на все вопросы.',
      en: 'The dermatoscopy exam was quick and comfortable. Results were clear and the doctor answered all my questions in detail.',
    },
    service: { uz: 'Dermatoskopiya', ru: 'Дерматоскопия', en: 'Dermatoscopy' },
    serviceCategoryId: 'dermatoskopiya',
    date: '2025-10-28',
    published: true,
  },
  {
    id: 'review-3',
    authorName: 'Dilnoza K.',
    rating: 5,
    comment: {
      uz: "Akne davolash kursidan keyin yuzim sezilarli darajada tozalandi. Klinika sharoiti va xodimlarning muomilasi a'lo darajada.",
      ru: 'После курса лечения акне лицо заметно очистилось. Условия клиники и отношение персонала на высшем уровне.',
      en: 'After acne treatment my face cleared up significantly. Clinic conditions and staff attitude are excellent.',
    },
    service: { uz: 'Dermatologiya', ru: 'Дерматология', en: 'Dermatology' },
    serviceCategoryId: 'dermatologiya',
    date: '2025-09-15',
    published: true,
  },
  {
    id: 'review-4',
    authorName: 'Aziza M.',
    rating: 5,
    comment: {
      uz: "Kosmetologik muolajalar natijasidan juda mamnunman. Natija tabiiy va uzoq muddatli saqlanmoqda.",
      ru: 'Очень довольна результатом косметологических процедур. Эффект естественный и сохраняется долго.',
      en: 'Very happy with the cosmetic treatment results. The effect looks natural and lasts a long time.',
    },
    service: { uz: 'Kosmetologiya', ru: 'Косметология', en: 'Cosmetology' },
    serviceCategoryId: 'apparatnaya-kosmetologiya',
    date: '2025-08-03',
    published: true,
  },
  {
    id: 'review-5',
    authorName: 'Rustam T.',
    rating: 4,
    comment: {
      uz: "Qabulga yozilish oson, navbat tez. Shifokor vaqtida qabul qildi va davolash rejasini aniq tuzdi.",
      ru: 'Записаться легко, очереди почти нет. Врач принял вовремя и составил понятный план лечения.',
      en: 'Booking was easy and wait times are short. The doctor saw me on time and created a clear treatment plan.',
    },
    date: '2025-07-20',
    published: true,
  },
];

export const CLINIC_PARTNERS: ClinicPartner[] = [
  {
    id: 'deka',
    name: { uz: 'DEKA', ru: 'DEKA', en: 'DEKA' },
    logo: '/partners/hamkor1.png',
    logoVariant: 'dark',
  },
  {
    id: 'bella-systech',
    name: { uz: 'Bella-Systech Uzbekistan', ru: 'Bella-Systech Uzbekistan', en: 'Bella-Systech Uzbekistan' },
    logo: '/partners/hamkor2.png',
    logoVariant: 'dark',
  },
  {
    id: 'cynosure-lutronic',
    name: { uz: 'Cynosure & Lutronic', ru: 'Cynosure & Lutronic', en: 'Cynosure & Lutronic' },
    logo: '/partners/hamkor3.jpg',
    logoVariant: 'light',
  },
  {
    id: 'davlin',
    name: { uz: 'Daavlin', ru: 'Davlin', en: 'Davlin' },
    logo: '/partners/hamkor4.jfif',
    logoVariant: 'dark',
    sortOrder: 4,
  },
  {
    id: 'inmode',
    name: { uz: 'InMode', ru: 'InMode', en: 'InMode' },
    logo: '/partners/hamkor5.png',
    logoVariant: 'dark',
    sortOrder: 5,
  },
];

export const CLINIC_BRANCHES: ClinicBranch[] = [
  {
    id: 'fergana-main',
    name: {
      uz: 'Radeski — Bosh klinika (Farg‘ona)',
      ru: 'Radeski — Главная клиника (Фергана)',
      en: 'Radeski — Main Clinic (Fergana)',
    },
    address: {
      uz: "Farg'ona sh., O'zbekiston Ovozi ko'chasi, 1A-bino",
      ru: 'г. Фергана, ул. Узбекистон Овози, дом 1А',
      en: '1A Uzbekiston Ovozi St., Fergana City',
    },
    phone: '+998 (73) 200-73-73',
    hours: {
      uz: 'Dushanba – Shanba: 08:00 – 18:00',
      ru: 'Понедельник – Суббота: 08:00 – 18:00',
      en: 'Monday – Saturday: 08:00 – 18:00',
    },
    services: {
      uz: 'To‘liq spektr: dermatologiya, kosmetologiya, lazer, laboratoriya, dermatoskopiya',
      ru: 'Полный спектр: дерматология, косметология, лазер, лаборатория, дерматоскопия',
      en: 'Full spectrum: dermatology, cosmetology, laser, lab, dermatoscopy',
    },
    mapEmbed: CLINIC_MAP_EMBED_URL,
    mapUrl: getClinicMapOpenUrl(),
    isMain: true,
    image: '/gallery/rasmfilial1.jpg',
    sortOrder: 1,
  },
  {
    id: 'kokand-branch',
    name: {
      uz: 'Radeski Skin Clinic — Qo‘qon filiali',
      ru: 'Radeski Skin Clinic — филиал в Коканде',
      en: 'Radeski Skin Clinic — Kokand branch',
    },
    address: {
      uz: "Qo'qon sh., 47-MFI, Huqandiy mavzesi, 144A",
      ru: 'г. Коканд, 47-МФЙ, массив Хукандий, 144А',
      en: '144A Huqandiy Block, 47-MFI, Kokand City',
    },
    phone: '+998 95 210 73 73',
    hours: {
      uz: 'Dushanba – Shanba: 08:00 – 18:00',
      ru: 'Понедельник – Суббота: 08:00 – 18:00',
      en: 'Monday – Saturday: 08:00 – 18:00',
    },
    services: {
      uz: 'To‘liq spektr: dermatologiya, kosmetologiya, lazer, laboratoriya, dermatoskopiya',
      ru: 'Полный спектр: дерматология, косметология, лазер, лаборатория, дерматоскопия',
      en: 'Full spectrum: dermatology, cosmetology, laser, lab, dermatoscopy',
    },
    mapEmbed: KOKAND_BRANCH_MAP_EMBED_URL,
    mapUrl: KOKAND_BRANCH_MAP_OPEN_URL,
    isMain: false,
    image: '/gallery/rasmfilial2.jpg',
    sortOrder: 2,
  },
  {
    id: 'liege-rade-skin',
    name: {
      uz: 'Rade Skin Clinic — Filial (Liège, Belgiya)',
      ru: 'Rade Skin Clinic — Филиал (Льеж, Бельгия)',
      en: 'Rade Skin Clinic — Branch (Liège, Belgium)',
    },
    address: {
      uz: 'Boulevard de la Sauvenière 67, 4000 Liège, Belgiya',
      ru: 'Boulevard de la Sauvenière 67, 4000 Льеж, Бельгия',
      en: 'Boulevard de la Sauvenière 67, 4000 Liège, Belgium',
    },
    phone: RADE_SKIN_CLINIC_PHONE.display,
    phoneTel: RADE_SKIN_CLINIC_PHONE.tel,
    hours: {
      uz: 'Qabul: oldindan yozilish | Favqulodda aloqa: 24/7',
      ru: 'Приём: по записи | Экстренная связь: 24/7',
      en: 'Appointments by booking | Emergency contact: 24/7',
    },
    services: {
      uz: 'Estetik tibbiyot, teri parvarishi, lazer epilyatsiya, soch to‘kilishi, yoshartirish',
      ru: 'Эстетическая медицина, уход за кожей, лазерная эпиляция, выпадение волос, anti-age',
      en: 'Aesthetic medicine, skin care, laser hair removal, hair loss care, anti-age',
    },
    mapEmbed: LIEGE_BRANCH_MAP_EMBED_URL,
    mapUrl: LIEGE_BRANCH_MAP_OPEN_URL,
    website: RADE_SKIN_CLINIC_WEBSITE,
    email: RADE_SKIN_CLINIC_EMAIL,
    isMain: false,
    image: '/gallery/rade-skin-clinic-liege.webp',
    sortOrder: 3,
  },
];

export const TREATMENT_RESULTS: TreatmentResult[] = [
  {
    id: 'thulium-pigmentation-cheek-comparison',
    sortOrder: -3.2,
    title: {
      uz: 'Tuliy lazer 1927 nm — yuzdagi pigmentatsiya',
      ru: 'Тулиевый лазер 1927 нм — пигментация на лице',
      en: '1927 nm thulium laser — facial pigmentation',
    },
    description: {
      uz: "Oldin: yonoq va yuzning yon qismida aniq ko'rinadigan jigarrang pigment dog'lar, notekis teri rangi. Keyin: tuliy lazer 1927 nm (LaseMD Ultra) kursidan so'ng dog'lar sezilarli darajada oqargan, teri rangi tekisroq va bir xilroq bo'lgan. Natijani saqlash uchun muntazam quyoshdan himoya muhim.",
      ru: 'До: выраженные коричневые пигментные пятна на щеке и боковой поверхности лица, неровный тон кожи. После курса тулиевого лазера 1927 нм (LaseMD Ultra): пятна заметно посветлели, тон кожи стал ровнее и однороднее. Для сохранения результата важна регулярная фотозащита.',
      en: 'Before: pronounced brown pigment spots on the cheek and side of the face, uneven skin tone. After a course of the 1927 nm thulium laser (LaseMD Ultra): the spots are noticeably lighter and the skin tone is more even. Regular sun protection is important to keep the result.',
    },
    service: { uz: 'Tuliy lazer 1927 nm (LaseMD Ultra)', ru: 'Тулиевый лазер 1927 нм (LaseMD Ultra)', en: '1927 nm thulium laser (LaseMD Ultra)' },
    comparisonImage: '/results/thulium-pigmentation-cheek-comparison.jpg',
    beforeImage: '/results/thulium-pigmentation-cheek-comparison.jpg',
    afterImage: '/results/thulium-pigmentation-cheek-comparison.jpg',
    sessions: { uz: 'Individual kurs', ru: 'Индивидуальный курс', en: 'Individual course' },
  },
  {
    id: 'thulium-tone-texture-cheek-comparison',
    sortOrder: -3.1,
    title: {
      uz: 'Tuliy lazer 1927 nm — teri rangi va teksturasi',
      ru: 'Тулиевый лазер 1927 нм — тон и текстура кожи',
      en: '1927 nm thulium laser — skin tone and texture',
    },
    description: {
      uz: "Oldin: yonoqda tarqoq mayda pigment dog'lar va notekis teri relyefi. Keyin: tuliy lazer 1927 nm (LaseMD Ultra) bilan ishlovdan so'ng dog'lar deyarli sezilmaydi, teri silliqroq va rangi bir tekis ko'rinadi.",
      ru: 'До: рассеянные мелкие пигментные пятна на щеке и неровный рельеф кожи. После обработки тулиевым лазером 1927 нм (LaseMD Ultra): пятна почти незаметны, кожа выглядит более гладкой, тон — ровным.',
      en: 'Before: scattered small pigment spots on the cheek and uneven skin texture. After treatment with the 1927 nm thulium laser (LaseMD Ultra): the spots are barely visible and the skin looks smoother with an even tone.',
    },
    service: { uz: 'Tuliy lazer 1927 nm (LaseMD Ultra)', ru: 'Тулиевый лазер 1927 нм (LaseMD Ultra)', en: '1927 nm thulium laser (LaseMD Ultra)' },
    comparisonImage: '/results/thulium-tone-texture-cheek-comparison.jpg',
    beforeImage: '/results/thulium-tone-texture-cheek-comparison.jpg',
    afterImage: '/results/thulium-tone-texture-cheek-comparison.jpg',
    sessions: { uz: 'Individual kurs', ru: 'Индивидуальный курс', en: 'Individual course' },
  },
  {
    id: 'vitiligo-face-uvb-1-5mo',
    sortOrder: -3,
    title: {
      uz: 'Vitiligo — yuzdagi repigmentatsiya',
      ru: 'Витилиго — репигментация на лице',
      en: 'Vitiligo — facial repigmentation',
    },
    description: {
      uz: 'Ko‘z atrofi va yonoqdagi vitiligo: Wood lampa ostida depigmentatsiya zonlari aniq ko‘rinadi (oldin). Tor tasma UVB fototerapiya (Daavlin) kursidan keyin — taxminan 1,5 oy ichida tabiiy rang asta-sekin tiklandi, yuz terisi yaxlitroq va barqarorroq ko‘rinishga keldi (keyin). Vitiligo davolab bo‘lmaydigan kasallik emas — individual protokol va muntazam kurs muhim.',
      ru: 'Витилиго в области глаза и щеки: под лампой Вуда хорошо видны зоны обесцвечивания (до). После курса узкополосной UVB-фототерапии (Daavlin) — примерно за 1,5 месяца естественный цвет кожи постепенно восстановился, кожа лица стала более ровной и стабильной (после). Витилиго — не «неизлечимое» заболевание при правильно подобранном протоколе и регулярном курсе.',
      en: 'Vitiligo around the eye and cheek: depigmented areas are clearly visible under Wood’s lamp (before). After narrow-band UVB phototherapy (Daavlin) — over about 1.5 months, natural pigment gradually returned and facial skin looked more even and stable (after). Vitiligo is not untreatable when the protocol and course are individualized and consistent.',
    },
    service: { uz: 'Vitiligo', ru: 'Витилиго', en: 'Vitiligo' },
    comparisonImage: '/results/vitiligo-face-uvb-comparison.jpg',
    beforeImage: '/results/vitiligo-face-uvb-comparison.jpg',
    afterImage: '/results/vitiligo-face-uvb-comparison.jpg',
    sessions: { uz: '1,5 oy kurs', ru: '1,5 месяца курса', en: '1.5-month course' },
  },
  {
    id: 'psoriasis-plaque-limb-comparison',
    sortOrder: -2.9,
    title: {
      uz: 'Psoriaz — plakali o‘choq (qo‘l/oyoq)',
      ru: 'Псориаз — бляшечное поражение',
      en: 'Psoriasis — plaque lesion',
    },
    description: {
      uz: 'Oldin: qalin oq-qizil plakalar, aniq chegarali qattiq qoplamalar va masshtabli parchalanish. Keyin: faol qoplamalar sezilarli kamaygan, teri tekisroq va toza ko‘rinishga yaqinlashgan — kompleks terapiya (fototerapiya, mahalliy vositalar va kurs rejasi) natijasida remissiya.',
      ru: 'До: плотные бело-красные бляшки с чёткими границами, выраженное шелушение. После: активные элементы заметно уменьшились, кожа стала ровнее и ближе к чистому состоянию — результат комплексной терапии (фототерапия, местные средства, курс).',
      en: 'Before: thick white-red plaques with sharp borders and heavy scaling. After: active lesions clearly reduced; skin smoother and closer to clear — outcome of combined therapy (phototherapy, topicals, structured course).',
    },
    service: { uz: 'Psoriaz', ru: 'Псориаз', en: 'Psoriasis' },
    comparisonImage: '/results/psoriasis-plaque-do-posle-comparison.jpg',
    beforeImage: '/results/psoriasis-plaque-do-posle-comparison.jpg',
    afterImage: '/results/psoriasis-plaque-do-posle-comparison.jpg',
    sessions: { uz: 'Individual kurs', ru: 'Индивидуальный курс', en: 'Individual course' },
  },
  {
    id: 'co2-scar-forehead-comparison',
    sortOrder: -2.8,
    title: {
      uz: 'Operatsiyadan keyingi chandiq — fraksional CO₂ lazer',
      ru: 'Постоперационный рубец — фракционный CO₂-лазер',
      en: 'Post-surgical scar — fractional CO₂ laser',
    },
    description: {
      uz: 'Qosh ustidagi surur chandiq oldin: qizil, chuqur chiziqli, tekstura buzilgan. Fraksional DEKA CO₂ lazer bilan shlifovkadan keyin chandiq tekislangan, rang yengillagan, teri yuzasi silliqroq — minimal invaziv usul, shifokor nazoratida.',
      ru: 'Рубец над бровью до лечения: красноватый, вдавленный, с нарушенной текстурой. После шлифовки фракционным CO₂-лазером (DEKA) рубец выровнялся, покраснение уменьшилось, кожа стала гладче — малоинвазивный метод под контролем врача.',
      en: 'Scar above the brow before treatment: red, indented, uneven texture. After fractional CO₂ (DEKA) resurfacing the scar flattened, redness faded, and skin texture improved — minimally invasive care under medical supervision.',
    },
    service: { uz: 'CO₂ lazer', ru: 'CO₂-лазер', en: 'CO₂ laser' },
    comparisonImage: '/results/co2-scar-forehead-do-posle-comparison.jpg',
    beforeImage: '/results/co2-scar-forehead-do-posle-comparison.jpg',
    afterImage: '/results/co2-scar-forehead-do-posle-comparison.jpg',
    sessions: { uz: '1–3 seans (reja bo‘yicha)', ru: '1–3 сеанса (по плану)', en: '1–3 sessions (as planned)' },
  },
  {
    id: 'co2-postacne-cheek-comparison',
    sortOrder: -2.7,
    title: {
      uz: 'Postakne — fraksional CO₂ lazer shlifovkasi',
      ru: 'Постакне — лазерная шлифовка фракционным CO₂',
      en: 'Post-acne — fractional CO₂ laser resurfacing',
    },
    description: {
      uz: 'Yonoqda postakne: chuqur atrofik chandiqalar, dog‘lar va nozik tekstura. Fraksional CO₂ lazer kursidan keyin chuqurlik kamaygan, pigmentatsiya yengillagan, teri yorqinroq va tekisroq — og‘riqsiz protokol, tiklanish vaqtiga qarab shifokor tavsiyasi.',
      ru: 'Постакне на щеке: атрофические рубцы, пигментация, неровный рельеф. После курса фракционного CO₂-лазера глубина рубцов уменьшилась, пятна осветлились, кожа стала ровнее и свежее — протокол с учётом периода восстановления.',
      en: 'Post-acne on the cheek: atrophic scars, pigmentation, uneven texture. After fractional CO₂ resurfacing, scar depth and spots improved; skin looks smoother and brighter — protocol tailored to recovery time.',
    },
    service: { uz: 'Dermatologiya', ru: 'Дерматология', en: 'Dermatology' },
    comparisonImage: '/results/co2-postacne-cheek-do-posle-comparison.jpg',
    beforeImage: '/results/co2-postacne-cheek-do-posle-comparison.jpg',
    afterImage: '/results/co2-postacne-cheek-do-posle-comparison.jpg',
    sessions: { uz: 'Kurs + kuzatuv', ru: 'Курс + наблюдение', en: 'Course + follow-up' },
  },
  {
    id: 'alopecia-areata-boy-yoqubov',
    sortOrder: -2,
    privacyEyeMasked: true,
    title: {
      uz: 'Bolada keng alopeciya areata',
      ru: 'Обширная алопеция areata у ребёнка',
      en: 'Widespread alopecia areata in a child',
    },
    description: {
      uz: 'Peshona, chakka va bosh tepasidagi keng sochsiz maydonlar, orqa soch chizig‘ida ofiaz shaklidagi yo‘qolish — Yo‘qubov Farrux rahbarligidagi trixologik davolashdan so‘ng soch butunlay tiklandi, bosh terisi sog‘lom holatga qaytdi.',
      ru: 'Обширные безволосые зоны на лбу, висках и макушке, ophiasis-переход по задней линии роста — после трихологического лечения под руководством Якубова Фарруха волосы полностью восстановились, кожа головы вернулась в здоровое состояние.',
      en: 'Extensive bald areas on the forehead, temples and crown, with ophiasis-pattern loss at the nape — after trichological treatment led by Dr. Farrukh Yoqubov, hair fully regrew and the scalp returned to a healthy state.',
    },
    service: { uz: 'Trihologiya', ru: 'Трихология', en: 'Trichology' },
    beforeImage: '/results/alopecia-areata-boy-before.jpg',
    afterImage: '/results/alopecia-areata-boy-after.jpg',
    journeyImages: [
      '/results/alopecia-areata-boy-step-2.jpg',
      '/results/alopecia-areata-boy-step-3.jpg',
      '/results/alopecia-areata-boy-step-4.jpg',
      '/results/alopecia-areata-boy-step-5.jpg',
    ],
    sessions: { uz: 'Individual kurs + kuzatuv', ru: 'Индивидуальный курс + наблюдение', en: 'Individual course + monitoring' },
  },
  {
    id: 'alopecia-areata-child-yoqubov',
    sortOrder: -1,
    privacyEyeMasked: true,
    title: {
      uz: 'Bolalarda alopeciya areata',
      ru: 'Алопеция areata у ребёнка',
      en: 'Pediatric alopecia areata',
    },
    description: {
      uz: 'Bosh terisidagi bir nechta silliq, sochsiz dog‘lar (fokusli alopeciya) — dermatoxirurg Yo‘qubov Farrux nazoratidagi davolashdan keyin soch qoplamasi asta-sekin tiklandi. Faol yo‘qolish to‘xtadi, teri holati barqarorlashdi.',
      ru: 'Множественные гладкие очаги безволосья на коже головы (очаговая алопеция) — после лечения под наблюдением дерматохирурга Якубова Фарруха волосяной покров постепенно восстановился. Активное выпадение прекратилось, состояние кожи стабилизировалось.',
      en: 'Multiple smooth bald patches on the scalp (alopecia areata) — under dermatoxirurg Dr. Farrukh Yoqubov’s care, hair coverage gradually restored. Active shedding stopped and scalp condition stabilized.',
    },
    service: { uz: 'Trihologiya', ru: 'Трихология', en: 'Trichology' },
    beforeImage: '/results/alopecia-areata-child-before.jpg',
    afterImage: '/results/alopecia-areata-child-after-v2.jpg',
    journeyImages: [
      '/results/alopecia-areata-child-step-2.jpg',
      '/results/alopecia-areata-child-step-3.jpg',
    ],
    sessions: { uz: 'Kurs davolash + nazorat', ru: 'Курс лечения + контроль', en: 'Treatment course + follow-up' },
  },
  {
    id: 'pustular-psoriasis-yoqubov',
    sortOrder: 0,
    title: {
      uz: 'Pustuloz psoriaz',
      ru: 'Пустулёзный псориаз',
      en: 'Pustular psoriasis',
    },
    description: {
      uz: 'Ko‘krak va orqa qismni qamrab olgan og‘ir pustuloz psoriaz — dermatoxirurg Yo‘qubov Farrux boshchiligidagi kompleks terapiya natijasida bosqichma-bosqich tinchlandi. Faol pustulalar va qalin qoplamalar yo‘qolgan, teri deyarli toza holatga qaytdi.',
      ru: 'Тяжёлый пустулёзный псориаз с поражением грудной клетки и спины — под руководством дерматохирурга Якубова Фарруха прошёл поэтапную ремиссию. Активные пустулы и плотные бляшки исчезли, кожа практически восстановилась.',
      en: 'Severe pustular psoriasis affecting the chest and back achieved step-by-step remission under dermatoxirurg Dr. Farrukh Yoqubov. Active pustules and thick plaques cleared; skin returned to a near-normal state.',
    },
    service: { uz: 'Psoriaz', ru: 'Псориаз', en: 'Psoriasis' },
    beforeImage: '/results/pustular-psoriasis-before.jpg',
    afterImage: '/results/pustular-psoriasis-after.jpg',
    journeyImages: [
      '/results/pustular-psoriasis-step-2.jpg',
      '/results/pustular-psoriasis-step-3.jpg',
      '/results/pustular-psoriasis-step-4.jpg',
      '/results/pustular-psoriasis-step-5.jpg',
      '/results/pustular-psoriasis-step-6.jpg',
    ],
    sessions: { uz: 'Kompleks kurs', ru: 'Комплексный курс', en: 'Comprehensive course' },
  },
  {
    id: 'do1-acne',
    sortOrder: 1,
    title: {
      uz: 'Akne va post-akne davolash',
      ru: 'Лечение акне и постакне',
      en: 'Acne and post-acne treatment',
    },
    description: {
      uz: 'Yuz va iyak qismidagi faol akne, qizarish va yallig‘lanish kompleks apparat terapiyasi bilan bartaraf etildi. Teri teksturasi silliqlandi, dog‘lar yengillashdi.',
      ru: 'Активное акне, покраснение и воспаление на щеке и челюсти устранены комплексной аппаратной терапией. Текстура кожи выровнялась, пятна осветлились.',
      en: 'Active acne, redness and inflammation on the cheek and jaw were cleared with combined device therapy. Skin texture smoothed and marks lightened.',
    },
    service: { uz: 'Dermatologiya', ru: 'Дерматология', en: 'Dermatology' },
    beforeImage: '/promo/do1do.jpg',
    afterImage: '/promo/do1posle.jpg',
    sessions: { uz: '6–8 seans', ru: '6–8 сеансов', en: '6–8 sessions' },
  },
  {
    id: 'do2-nail-fungus',
    sortOrder: 2,
    title: {
      uz: 'Tirnoq zamburug‘i (onikomikoz)',
      ru: 'Грибок ногтей (онихомикоз)',
      en: 'Nail fungus (onychomycosis)',
    },
    description: {
      uz: 'Qalinlashgan, sarg‘aygan va parchalanayotgan tirnoqlar tibbiy podologik davolashdan keyin tabiiy rang va mustahkamlikka qaytdi.',
      ru: 'Утолщённые, пожелтевшие и крошащиеся ногти после подологического лечения восстановили естественный цвет и прочность.',
      en: 'Thickened, yellowed and crumbling nails regained natural color and strength after clinical podology treatment.',
    },
    service: { uz: 'Podologiya', ru: 'Подология', en: 'Podiatry' },
    beforeImage: '/promo/do2do.jpg',
    afterImage: '/promo/do2posle.jpg',
    sessions: { uz: '4–6 oy kurs', ru: '4–6 месяцев', en: '4–6 month course' },
  },
  {
    id: 'do3-hair-transplant',
    sortOrder: 3,
    title: {
      uz: 'Soch ekish',
      ru: 'Пересадка волос',
      en: 'Hair transplant',
    },
    description: {
      uz: 'Tepa va cho‘kka soch to‘kilishi (androgenetik alopeciya). Soch ekish natijasida zich, tabiiy ko‘rinishdagi soch qoplami tiklandi.',
      ru: 'Выпадение волос на макушке и темени (андрогенетическая алопеция). После пересадки волос восстановлена густая, естественная шевелюра.',
      en: 'Crown and vertex hair loss (androgenetic alopecia). Hair transplant restored dense, natural-looking hair coverage.',
    },
    service: { uz: 'Trixologiya', ru: 'Трихология', en: 'Trichology' },
    beforeImage: '/promo/do3do.jpg',
    afterImage: '/promo/do3posle.jpg',
    sessions: { uz: '1 operatsiya + nazorat', ru: '1 операция + контроль', en: '1 procedure + follow-up' },
  },
  {
    id: 'laser-lesion-removal',
    sortOrder: 4,
    title: {
      uz: 'Teri o‘smalarini lazer bilan olib tashlash',
      ru: 'Лазерное удаление новообразований',
      en: 'Laser removal of skin lesions',
    },
    description: {
      uz: 'Teridagi kichik qizil angioma va nevus lazer apparati bilan bir seansda xavfsiz olib tashlandi. Muolajadan keyin atrofdagi teri saqlangan, iz minimal qoldi — kundalik hayotga tez qaytish mumkin.',
      ru: 'Небольшая красная ангиома и родинка на коже безопасно удалены лазером за один сеанс. Окружающая кожа сохранена, рубец минимальный — быстрое возвращение к обычной жизни.',
      en: 'A small red angioma and nevus were safely removed with laser in a single session. Surrounding skin was preserved with minimal scarring — quick return to daily activities.',
    },
    service: {
      uz: 'Lazer bilan olib tashlash',
      ru: 'Лазерное удаление',
      en: 'Laser removal',
    },
    beforeImage: '/results/laser-removal-before.jpg',
    afterImage: '/results/laser-removal-after.jpg',
    sessions: { uz: '1 seans', ru: '1 сеанс', en: '1 session' },
  },
  {
    id: 'hair-transplant-clinic-result',
    sortOrder: 5,
    title: {
      uz: 'Soch ekish — klinika natijasi',
      ru: 'Пересадка волос — результат',
      en: 'Hair transplant — clinical result',
    },
    description: {
      uz: 'Androgenetik alopeciya: tepa va frontal zona uchun individual chiziq belgilab, FUE usulida graftlar ekildi. Operatsiyadan keyin tabiiy zichlik va simmetrik chiziq tiklandi; nazorat va parvarish rejasi berildi.',
      ru: 'Андрогенетическая алопеция: индивидуальная линия роста и пересадка графтов методом FUE. После процедуры восстановлена естественная плотность и симметричная линия; назначен контроль и уход.',
      en: 'Androgenetic alopecia: custom hairline planning and FUE graft placement. Natural density and a symmetric hairline were restored; follow-up and aftercare protocol provided.',
    },
    service: {
      uz: 'Soch ekish',
      ru: 'Пересадка волос',
      en: 'Hair transplant',
    },
    beforeImage: '/results/hair-transplant-before.jpg',
    afterImage: '/results/hair-transplant-after.jpg',
    sessions: { uz: '1 operatsiya + 6–12 oy nazorat', ru: '1 операция + контроль 6–12 мес.', en: '1 procedure + 6–12 mo follow-up' },
  },
  {
    id: 'psoriasis-arms-elbows',
    sortOrder: 6,
    title: {
      uz: 'Psoriaz — qo‘llar va tirsaklar',
      ru: 'Псориаз — руки и локти',
      en: 'Psoriasis — arms and elbows',
    },
    description: {
      uz: 'Tirsak va bilaklardagi qalin oq-qizil plakalar kompleks terapiya (UVB 311 nm fototerapiya, mahalliy vositalar va kurs rejasi) bilan sezilarli yengillashdi. Qizarish va qoplamalar kamaydi, teri tekisroq bo‘ldi.',
      ru: 'Плотные бело-красные бляшки на локтях и предплечьях заметно уменьшились после комплексной терапии (UVB 311 нм, местные средства и курс). Покраснение и шелушение снизились, кожа стала ровнее.',
      en: 'Thick white-red plaques on elbows and forearms improved significantly with combined therapy (UVB 311 nm phototherapy, topical care and a structured course). Redness and scaling decreased; skin texture smoothed.',
    },
    service: { uz: 'Psoriaz', ru: 'Псориаз', en: 'Psoriasis' },
    beforeImage: '/results/psoriasis-arms-before.jpg',
    afterImage: '/results/psoriasis-arms-after.jpg',
    sessions: { uz: '12–20 seans kurs', ru: '12–20 сеансов курса', en: '12–20 session course' },
  },
  {
    id: 'psoriasis-knees-shins',
    sortOrder: 7,
    title: {
      uz: 'Psoriaz — tizzalar va boldirlar',
      ru: 'Псориаз — колени и голени',
      en: 'Psoriasis — knees and shins',
    },
    description: {
      uz: 'Tizza va boldirlardagi keng plakali psoriaz belgilari davolash kursidan keyin deyarli to‘liq remissiyaga yaqinlashdi. Faol qoplamalar yo‘qolgan, faqat yengil rang o‘zgarishlari qolgan — bemor kundalik faoliyatiga qaytgan.',
      ru: 'Распространённый бляшечный псориаз на коленях и голенях после курса лечения практически перешёл в ремиссию. Активные высыпания исчезли, остались лишь лёгкие поствоспалительные изменения — пациент вернулся к обычной жизни.',
      en: 'Extensive plaque psoriasis on knees and shins reached near-complete remission after treatment. Active lesions cleared with only mild post-inflammatory changes remaining — patient returned to normal daily life.',
    },
    service: { uz: 'Psoriaz', ru: 'Псориаз', en: 'Psoriasis' },
    beforeImage: '/results/psoriasis-legs-before.jpg',
    afterImage: '/results/psoriasis-legs-after.jpg',
    sessions: { uz: '16–24 seans kurs', ru: '16–24 сеанса курса', en: '16–24 session course' },
  },
];
