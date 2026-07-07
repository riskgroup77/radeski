import type { Locale } from '../types';

export interface AdvantageContentBlock {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  image?: string;
  bullets?: Record<Locale, string[]>;
}

export interface AdvantagePageContent {
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  heroImage: string;
  overview: Record<Locale, string>;
  blocks: AdvantageContentBlock[];
  ctaLabel: Record<Locale, string>;
}

export const TECHNOLOGIES_PAGE: AdvantagePageContent = {
  title: {
    uz: 'Zamonaviy texnologiyalar',
    ru: 'Современные технологии',
    en: 'Modern technologies',
  },
  subtitle: {
    uz: "O'zbekistonda Sciton IPL va ilg'or lazer tizimlari",
    ru: 'Sciton IPL и передовые лазерные системы в Узбекистане',
    en: 'Sciton IPL and advanced laser systems in Uzbekistan',
  },
  heroImage: '/gallery/top1.webp',
  overview: {
    uz: 'Radeski Skin & Aesthetic Clinic — Farg\'onada xalqaro standartdagi diagnostika va davolash texnologiyalarini jamlagan markaz. Klinikamizda Germaniya va AQShda ishlab chiqarilgan asl uskunalar qo\'llaniladi: dermatoskopiya bilan teri o\'smalarini erta aniqlash, Sciton IPL bilan gen darajasida foto-yangilash, Mohs mikrografik jarrohligi bilan yuzdagi teri saratoni, Excimer va UVB fototerapiyasi bilan psoriaz va vitiligo davolash. Har bir texnologiya malakali dermatolog nazoratida, individual protokol asosida ishlatiladi.',
    ru: 'Клиника Radeski Skin & Aesthetic Clinic в Фергане объединяет диагностические и лечебные технологии международного уровня. Используется оригинальное оборудование из Германии и США: дерматоскопия для раннего выявления новообразований, Sciton IPL для фотоомоложения на генном уровне, хирургия Mohs при раке кожи лица, эксимерный лазер и UVB-фототерапия при псориазе и витилиго. Каждая технология применяется под контролем дерматолога по индивидуальному протоколу.',
    en: 'Radeski Skin & Aesthetic Clinic in Fergana brings together international-standard diagnostic and treatment technologies. We use original equipment from Germany and the USA: clinical dermatoscopy for early lesion detection, Sciton IPL for gene-level photo-rejuvenation, Mohs micrographic surgery for facial skin cancer, Excimer laser and UVB phototherapy for psoriasis and vitiligo. Every technology is applied under dermatologist supervision with individualized protocols.',
  },
  blocks: [
    {
      title: {
        uz: 'Sciton IPL — gen darajasida foto-yangilash',
        ru: 'Sciton IPL — фотоомоложение на генном уровне',
        en: 'Sciton IPL — gene-level photo-rejuvenation',
      },
      description: {
        uz: 'AQShda ishlab chiqarilgan Sciton platformasi (Forever Young, Forever Clear) O\'zbekistonda kamdan-kam uchraydi. Gen darajasida innovatsion foto-yangilash pigmentatsiya, qon tomirlari, akne va yoshga bog\'liq o\'zgarishlarni jarrohliksiz bartaraf etadi.',
        ru: 'Платформа Sciton из США (Forever Young, Forever Clear) редко представлена в Узбекистане. Инновационное фотоомоложение на генном уровне устраняет пигментацию, сосуды, акне и возрастные изменения без операции.',
        en: 'The US-made Sciton platform (Forever Young, Forever Clear) is rarely available in Uzbekistan. Gene-level photo-rejuvenation addresses pigmentation, vessels, acne and aging non-surgically.',
      },
      image: '/gallery/top2.webp',
      bullets: {
        uz: ['Forever Young IPL protokollari', 'Forever Clear akne fotodavolash', 'Lumecca IPL pigmentatsiya', 'Og\'riqsiz, qisqa tiklanish'],
        ru: ['Протоколы Forever Young IPL', 'Forever Clear при акне', 'IPL Lumecca при пигментации', 'Безболезненно, короткое восстановление'],
        en: ['Forever Young IPL protocols', 'Forever Clear for acne', 'Lumecca IPL for pigmentation', 'Painless, short recovery'],
      },
    },
    {
      title: {
        uz: 'Mohs mikrografik jarrohligi',
        ru: 'Микрографическая хирургия Mohs',
        en: 'Mohs micrographic surgery',
      },
      description: {
        uz: 'Yuz va boshqa ochiq sohalardagi bazaliyoma va spinotsellyular karsinomani davolashda eng yuqori aniqlikka ega usul. Jarrohlik vaqtida mikroskop ostida tekshiruv — sog\'lom to\'qimalarni maksimal saqlab, saraton hujayralarini to\'liq olib tashlash.',
        ru: 'Наиболее точный метод лечения базалиомы и плоскоклеточного рака на лице. Микроскопический контроль во время операции — максимальное сохранение здоровых тканей и полное удаление опухоли.',
        en: 'The most precise method for basal cell and squamous carcinoma on the face. Microscopic margin control during surgery preserves healthy tissue while fully removing cancer cells.',
      },
      image: '/gallery/6.webp',
      bullets: {
        uz: ['Yuz sohasidagi teri saratoni', 'Yuqori estetik natija', 'Gistologik nazorat har bosqichda', 'Plastik jarroh bilan hamkorlik'],
        ru: ['Рак кожи лица', 'Высокий эстетический результат', 'Гистологический контроль на каждом этапе', 'Совместно с пластическим хирургом'],
        en: ['Facial skin cancer', 'High aesthetic outcome', 'Histologic control at each stage', 'Collaboration with plastic surgeon'],
      },
    },
    {
      title: {
        uz: 'Excimer lazer va UVB fototerapiya',
        ru: 'Эксимерный лазер и UVB-фототерапия',
        en: 'Excimer laser and UVB phototherapy',
      },
      description: {
        uz: 'Tor to\'lqinli UVB 311 nm va Excimer lazer psoriaz, vitiligo, ekzema va boshqa surunkali teri kasalliklarini davolashda qo\'llaniladi. Radeski klinikasida individual dozalar, kurs rejasi va remissiya kuzatuvi olib boriladi.',
        ru: 'Узкополосный UVB 311 нм и эксимерный лазер применяются при псориазе, витилиго, экземе и других хронических заболеваниях кожи. Индивидуальные дозы, курсы и контроль ремиссии.',
        en: 'Narrow-band UVB 311 nm and Excimer laser treat psoriasis, vitiligo, eczema and other chronic skin conditions. Individual dosing, courses and remission monitoring.',
      },
      image: '/gallery/7.webp',
      bullets: {
        uz: ['Psoriaz va vitiligo davolash', 'Kursli UVB protokollari', 'Excimer nuqtaviy muolajalar', 'Dermatolog nazoratida'],
        ru: ['Лечение псориаза и витилиго', 'Курсовая UVB-терапия', 'Точечные процедуры эксимером', 'Под контролем дерматолога'],
        en: ['Psoriasis and vitiligo treatment', 'Course UVB protocols', 'Excimer spot treatments', 'Under dermatologist supervision'],
      },
    },
    {
      title: {
        uz: 'DEKA SmartXide CO2 va lazer terapiya',
        ru: 'DEKA SmartXide CO2 и лазерная терапия',
        en: 'DEKA SmartXide CO2 and laser therapy',
      },
      description: {
        uz: 'DEKA SmartXide Punto CO2 lazeri teri o\'smalarini olib tashlash, shlifovka va tiklash muolajalarida qo\'llaniladi. PinPoint lazer borma va papillomalarni minimal travma bilan davolash imkonini beradi.',
        ru: 'Лазер DEKA SmartXide Punto CO2 используется для удаления новообразований, шлифовки и восстановительных процедур. Лазер PinPoint — лечение бородавок и папиллом с минимальной травмой.',
        en: 'DEKA SmartXide Punto CO2 laser removes lesions, resurfaces and supports restorative procedures. PinPoint laser treats warts and papillomas with minimal trauma.',
      },
      image: '/gallery/8.webp',
      bullets: {
        uz: ['O\'smalarni lazer bilan olib tashlash', 'Ablativ va fraksion rejimlar', 'Minimal iz qoldirish', 'Xirurgik dermatologiya'],
        ru: ['Лазерное удаление образований', 'Абляционные и фракционные режимы', 'Минимальное рубцевание', 'Хирургическая дерматология'],
        en: ['Laser lesion removal', 'Ablative and fractional modes', 'Minimal scarring', 'Surgical dermatology'],
      },
    },
    {
      title: {
        uz: 'Hollywood Spectra va RF Morpheus 8',
        ru: 'Hollywood Spectra и RF Morpheus 8',
        en: 'Hollywood Spectra and RF Morpheus 8',
      },
      description: {
        uz: 'Hollywood Spectra — Q-switch lazer bilan yuz tozalash, karbon piling va pigmentatsiya davolash. RF Morpheus 8 — mikroignali radiochastota bilan teri qattiqigi, ajinlar va kontur pasayishini tiklash.',
        ru: 'Hollywood Spectra — лазерное очищение лица, карбоновый пилинг и лечение пигментации. RF Morpheus 8 — микроигольчатый RF для упругости, морщин и контура.',
        en: 'Hollywood Spectra — laser facial cleansing, carbon peel and pigmentation treatment. RF Morpheus 8 — microneedle RF for firmness, wrinkles and contour.',
      },
      image: '/gallery/9.webp',
      bullets: {
        uz: ['Karbon piling va gold toning', 'RF tiklash va kollegen stimulyatsiyasi', 'Post-akne va matlik', 'Apparatli kosmetologiya'],
        ru: ['Карбоновый пилинг и gold toning', 'RF-омоложение и стимуляция коллагена', 'Постакне и тусклость', 'Аппаратная косметология'],
        en: ['Carbon peel and gold toning', 'RF remodeling and collagen stimulation', 'Post-acne and dullness', 'Device-based cosmetology'],
      },
    },
  ],
  ctaLabel: {
    uz: 'Shifokorlar bilan tanishing',
    ru: 'Познакомиться с врачами',
    en: 'Meet our physicians',
  },
};

export const EQUIPMENT_PARK_PAGE: AdvantagePageContent = {
  title: {
    uz: 'Turli xil apparatlar',
    ru: 'Разнообразные аппараты',
    en: 'Diverse clinical devices',
  },
  subtitle: {
    uz: 'Klinikadagi 7 ta professional apparat — fototerapiya, lazer va regeneratsiya',
    ru: '7 профессиональных аппаратов клиники — фототерапия, лазер и регенерация',
    en: 'Seven professional clinic devices — phototherapy, laser and regeneration',
  },
  heroImage: '/gallery/top3.webp',
  overview: {
    uz: 'Radeski klinikasida quyidagi 7 ta apparat qo\'llaniladi: plazmoforez, Daavlin NeoLux va M series fototerapiya, Daavlin Aquex ionoforez, IPL InMode, Lutronic Derma V va Hollywood Spectra. Har bir qurilma xalqaro ishlab chiqaruvchilardan, dermatolog nazoratida va individual protokol asosida ishlatiladi. Quyida faqat shu apparatlar ro\'yxati — har birini bosib, batafsil ma\'lumot va narxlarni ko\'rishingiz mumkin.',
    ru: 'В клинике Radeski применяются 7 аппаратов: плазмофорез, фототерапия Daavlin NeoLux и M series, ионофорез Daavlin Aquex, IPL InMode, Lutronic Derma V и Hollywood Spectra. Каждое устройство — от международных производителей, под контролем дерматолога и по индивидуальному протоколу. Ниже — только этот перечень с подробной информацией и ценами.',
    en: 'Radeski Clinic uses seven devices: plasmapheresis, Daavlin NeoLux and M series phototherapy, Daavlin Aquex iontophoresis, IPL InMode, Lutronic Derma V and Hollywood Spectra. Each unit is from international manufacturers, used under dermatologist supervision with individualized protocols. Below is only this list with detailed information and prices.',
  },
  blocks: [
    {
      title: {
        uz: 'Daavlin fototerapiya va ionoforez',
        ru: 'Фототерапия и ионофорез Daavlin',
        en: 'Daavlin phototherapy and iontophoresis',
      },
      description: {
        uz: 'Daavlin (AQSh) ishlab chiqaruvchisining uchta tizimi: NeoLux — tor spektrli UVB fototerapiya; M series — modulli kabinet, tana va ekstremitetalar uchun; Aquex — ionoforez orqali dori preparatlarini teriga yetkazish.',
        ru: 'Три системы Daavlin (США): NeoLux — узкополосная UVB-фототерапия; M series — модульный кабинет для тела и конечностей; Aquex — ионофорез для доставки препаратов в кожу.',
        en: 'Three Daavlin (USA) systems: NeoLux narrow-band UVB phototherapy; M series modular cabinet for body and limbs; Aquex iontophoresis for transdermal drug delivery.',
      },
      image: '/gallery/7.webp',
      bullets: {
        uz: ['Daavlin NeoLux fototerapiya', 'Daavlin M series fototerapiya', 'Daavlin Aquex ionoforez', 'Psoriaz, vitiligo, surunkali dermatozlar'],
        ru: ['Фототерапия Daavlin NeoLux', 'Фототерапия Daavlin M series', 'Ионофорез Daavlin Aquex', 'Псориаз, витилиго, хронические дерматозы'],
        en: ['Daavlin NeoLux phototherapy', 'Daavlin M series phototherapy', 'Daavlin Aquex iontophoresis', 'Psoriasis, vitiligo, chronic dermatoses'],
      },
    },
    {
      title: {
        uz: 'IPL InMode va Lutronic lazerlar',
        ru: 'IPL InMode и лазеры Lutronic',
        en: 'IPL InMode and Lutronic lasers',
      },
      description: {
        uz: 'InMode IPL — pigmentatsiya, qon tomirlari va teri tonini yaxshilash. Lutronic Derma V — sosudist lazer (kuperoza, rozaseya, qon tomir yulduzchalari). Hollywood Spectra — Q-switch lazer: karbon piling, gold toning va pigmentatsiya davolash.',
        ru: 'InMode IPL — пигментация, сосуды и тон кожи. Lutronic Derma V — сосудистый лазер (купероз, розацеа, сосудистые звёздочки). Hollywood Spectra — Q-switch лазер: карбоновый пилинг, gold toning и лечение пигментации.',
        en: 'InMode IPL treats pigmentation, vessels and skin tone. Lutronic Derma V is a vascular laser for couperose, rosacea and spider veins. Hollywood Spectra is a Q-switch laser for carbon peel, gold toning and pigmentation.',
      },
      image: '/gallery/8.webp',
      bullets: {
        uz: ['IPL InMode foto-yangilash', 'Derma V (Lutronic) sosudist lazer', 'Hollywood Spectra (Lutronic)', 'Pigmentatsiya, akne izlari, qizarish'],
        ru: ['IPL InMode фотоомоложение', 'Derma V (Lutronic) сосудистый лазер', 'Hollywood Spectra (Lutronic)', 'Пигментация, следы акне, покраснение'],
        en: ['IPL InMode photo-rejuvenation', 'Derma V (Lutronic) vascular laser', 'Hollywood Spectra (Lutronic)', 'Pigmentation, acne marks, redness'],
      },
    },
    {
      title: {
        uz: 'Plazmoforez',
        ru: 'Плазмофорез',
        en: 'Plasmapheresis',
      },
      description: {
        uz: 'Plazmoforez — qon plazmasini ajratish va tozalangan plazmani qayta infuziya qilish usuli. Teri yangilanishi, immunitetni qo\'llab-quvvatlash va kompleks dermatologik protokollarning bir qismi sifatida shifokor ko\'rsatmasi bo\'yicha qo\'llaniladi.',
        ru: 'Плазмофорез — сепарация плазмы крови с последующей инфузией очищенной плазмы. Применяется для обновления кожи, поддержки иммунитета и в составе комплексных дерматологических протоколов по назначению врача.',
        en: 'Plasmapheresis separates and reinfuses purified blood plasma. It supports skin renewal, immune balance and complex dermatology protocols per physician indication.',
      },
      image: '/gallery/4.webp',
      bullets: {
        uz: ['Regeneratsiya protokollari', 'Shifokor konsultatsiyasi majburiy', 'Individual kurs rejasi', 'Preyskurantda aniq narx'],
        ru: ['Регенеративные протоколы', 'Обязательна консультация врача', 'Индивидуальный курс', 'Цена в прейскуранте'],
        en: ['Regenerative protocols', 'Physician consultation required', 'Individual course plan', 'Price in price list'],
      },
    },
  ],
  ctaLabel: {
    uz: 'Apparatli kosmetologiya xizmatlari',
    ru: 'Услуги аппаратной косметологии',
    en: 'Device cosmetology services',
  },
};

export function getAdvantagePageContent(
  page: 'technologies' | 'clinic-equipment',
): AdvantagePageContent {
  return page === 'technologies' ? TECHNOLOGIES_PAGE : EQUIPMENT_PARK_PAGE;
}
