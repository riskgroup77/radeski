import type { ClinicEquipmentEntry, LocalizedEquipmentText } from '../clinicEquipmentCatalog';

function L(uz: string, ru: string, en: string): LocalizedEquipmentText {
  return { uz, ru, en };
}

/**
 * Tuliy lazer 1927 nm — LaseMD Ultra (Lutronic), Qo'qon filiali.
 * Text approved by the clinic (doctors' chat, 15.10.2026); device and branch as in the
 * LaseMD Ultra / thulium hair articles; sessions and recovery as in the LaseMD article FAQ.
 */
export const LASEMD_ULTRA_LUTRONIC = {
  id: 'lasemd-ultra-lutronic',
  title: L(
    'Tuliy lazer 1927 nm — LaseMD Ultra (Lutronic)',
    'Тулиевый лазер 1927 нм — LaseMD Ultra (Lutronic)',
    '1927 nm thulium laser — LaseMD Ultra (Lutronic)',
  ),
  shortDescription: L(
    "Tuliy lazer 1927 nm: terini yoshartirish, pigmentatsiya korreksiyasi va teksturani yaxshilash. Ko'rsatmalar, qarshi ko'rsatmalar, tiklanish va natijalar — Radeski Skin Clinic.",
    'Тулиевый лазер 1927 нм: омоложение кожи, коррекция пигментации и улучшение текстуры. Показания, противопоказания, восстановление и результаты — Radeski Skin Clinic.',
    '1927 nm thulium laser: skin rejuvenation, pigmentation correction and smoother texture. Indications, contraindications, recovery and results — Radeski Skin Clinic.',
  ),
  fullDescription: L(
    "Tuliy lazer 1927 nm — teri sifatini yaxshilash, pigmentatsiyaning ayrim turlarini korreksiya qilish va fotoqarish belgilarini kamaytirish uchun qo'llaniladigan zamonaviy lazer texnologiyasi. Radeski Skin Clinic klinikasida Lutronic kompaniyasining LaseMD Ultra fraksion tuliy lazeri qo'llaniladi.",
    'Тулиевый лазер 1927 нм — современная лазерная технология, которая применяется для улучшения качества кожи, коррекции отдельных видов пигментации и уменьшения признаков фотостарения. В Radeski Skin Clinic используется фракционный тулиевый лазер LaseMD Ultra производства Lutronic.',
    'The 1927 nm thulium laser is a modern laser technology used to improve skin quality, correct certain types of pigmentation and reduce signs of photoaging. Radeski Skin Clinic uses the LaseMD Ultra fractional thulium laser by Lutronic.',
  ),
  manufacturer: L('Lutronic (Janubiy Koreya)', 'Lutronic (Южная Корея)', 'Lutronic (South Korea)'),
  heading: L(
    "Tuliy lazer 1927 nm — LaseMD Ultra (Lutronic) Qo'qonda",
    'Тулиевый лазер 1927 нм — LaseMD Ultra (Lutronic) в Коканде',
    '1927 nm thulium laser — LaseMD Ultra (Lutronic) in Kokand',
  ),
  image: '/articles/lasemd-ultra-kokand-cover.jpg',
  serviceLinks: [],
  priceCategoryIds: [],
  priceNote: L(
    "Narx ishlov beriladigan zona va protokolga bog'liq — aniq narx shifokor konsultatsiyasida belgilanadi.",
    'Стоимость зависит от зоны обработки и протокола — точная цена определяется на консультации врача.',
    'The price depends on the treatment area and protocol — the exact cost is confirmed at the consultation.',
  ),
  directions: [
    L('Lazer yoshartirish va teri yangilanishi', 'Лазерное омоложение и обновление кожи', 'Laser rejuvenation and skin renewal'),
    L('Pigmentatsiya korreksiyasi', 'Коррекция пигментации', 'Pigmentation correction'),
    L('Fotoqarish belgilarini kamaytirish', 'Уменьшение признаков фотостарения', 'Reducing signs of photoaging'),
    L('Teri teksturasini yaxshilash', 'Улучшение текстуры кожи', 'Improving skin texture'),
    L("Soch to'kilishini kompleks davolash", 'Комплексное лечение выпадения волос', 'Combined hair loss treatment'),
  ],
  indications: [
    L("Pigment dog'lar", 'Пигментные пятна', 'Pigment spots'),
    L('Notekis teri rangi', 'Неровный тон кожи', 'Uneven skin tone'),
    L('Fotoqarish', 'Фотостарение', 'Photoaging'),
    L('Notekis teri teksturasi', 'Неровная текстура кожи', 'Uneven skin texture'),
  ],
  clinicUsage: [
    L(
      "Radeski Skin Clinic Qo'qon filialida Lutronic kompaniyasining LaseMD Ultra 1927 nm fraksion tuliy lazeri qo'llaniladi. Ta'sir parametrlari, seanslar soni va muolajalar orasidagi interval teri holatiga qarab shifokor tomonidan individual belgilanadi.",
      'В филиале Radeski Skin Clinic в Коканде используется фракционный тулиевый лазер LaseMD Ultra 1927 нм (Lutronic). Параметры воздействия, количество сеансов и интервалы между процедурами врач подбирает индивидуально по состоянию кожи.',
      "Radeski Skin Clinic's Kokand branch uses the LaseMD Ultra 1927 nm fractional thulium laser by Lutronic. Treatment settings, the number of sessions and the intervals between them are set individually by the doctor based on skin condition.",
    ),
    L(
      "Klinikada 1927 nm tuliy lazer soch to'kilishi va sochlar siyraklashishini kompleks davolashda ham qo'llaniladi.",
      'В клинике тулиевый лазер 1927 нм также применяется в комплексном лечении выпадения и истончения волос.',
      'At the clinic, the 1927 nm thulium laser is also used as part of combined treatment for hair loss and thinning.',
    ),
  ],
  process: [
    L('Konsultatsiya', 'Консультация', 'Consultation'),
    L('Teriga tayyorgarlik', 'Подготовка кожи', 'Skin preparation'),
    L("Lazer ta'siri", 'Лазерное воздействие', 'Laser treatment'),
    L('Muolajadan keyingi parvarish', 'Уход после процедуры', 'Aftercare'),
  ],
  seo: {
    title: L(
      'Tuliy lazer 1927 nm — yoshartirish, pigmentatsiya | Radeski',
      'Тулиевый лазер 1927 нм — омоложение и пигментация | Radeski',
      '1927 nm thulium laser — rejuvenation, pigmentation | Radeski',
    ),
    description: L(
      "Tuliy lazer 1927 nm: ko'rsatmalar, qarshi ko'rsatmalar, muolaja natijalari, terining tiklanishi va pigmentatsiyani davolash xususiyatlari. Radeski Skin Clinic klinikasida dermatolog konsultatsiyasi.",
      'Тулиевый лазер 1927 нм: показания, противопоказания, результаты процедуры, восстановление кожи и особенности лечения пигментации. Консультация дерматолога в Radeski Skin Clinic.',
      '1927 nm thulium laser: indications, contraindications, treatment results, skin recovery and pigmentation treatment. Dermatologist consultation at Radeski Skin Clinic.',
    ),
    keywords: L(
      "tuliy lazer, tuliy lazer 1927 nm, fraksion tuliy lazer, lazer bilan terini yoshartirish, pigmentatsiyani lazer bilan davolash, pigment dog'larga qarshi lazer, fotoqarishni davolash, lazer bilan teri yangilanishi, lazer kosmetologiya, LaseMD Ultra, Radeski Skin Clinic",
      'тулиевый лазер, тулиевый лазер 1927 нм, фракционный тулиевый лазер, омоложение кожи лазером, лазерное лечение пигментации, лазер от пигментных пятен, лечение фотостарения, лазерное обновление кожи, лазерная косметология, LaseMD Ultra, Radeski Skin Clinic',
      'thulium laser, 1927 nm thulium laser, fractional thulium laser, laser skin rejuvenation, laser pigmentation treatment, laser for pigment spots, photoaging treatment, laser skin resurfacing, laser cosmetology, LaseMD Ultra, Radeski Skin Clinic',
    ),
  },
} satisfies ClinicEquipmentEntry;
