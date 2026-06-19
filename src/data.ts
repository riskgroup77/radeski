import { ServiceCategory, Doctor, Article } from './types';
export { PRICES } from './data/prices.ts';

export const DICTIONARY = {
  uz: {
    navHome: "Bosh sahifa",
    navAbout: "Klinika haqida",
    navServices: "Xizmatlar",
    navDoctors: "Shifokorlar",
    navPrices: "Narxlar",
    navArticles: "Maqolalar",
    navContacts: "Kontaktlar",
    navVideos: "Videolar",
    navBranches: "Filiallar",
    navResults: "Natijalar",
    navTerms: "Foydalanish shartlari",
    navPrivacy: "Maxfiylik siyosati",
    appointmentBtn: "Qabulga yozilish",
    callRequestedBtn: "Qo'ng'iroq buyurtma qilish",
    addressTitle: "Klinika manzili",
    addressValue: "O'zbekiston Ovozi ko'chasi, 1A-bino, Farg'ona shahri",
    phoneTitle: "Telefon raqami",
    workingHoursTitle: "Ish vaqti",
    workingHoursValue: "Dushanba - Shanba: 08:00 - 18:00 (Yakshanba - dam olish kuni)",
    backToHome: "Bosh sahifaga qaytish",
    viewDetails: "Batafsil ma'lumot",
    closeBtn: "Yopish",
    submitBtn: "Yuborish",
    formName: "Ismingiz",
    formPhone: "Telefon raqamingiz",
    formDate: "Sana",
    formService: "Xizmat turini tanlang",
    formSuccess: "Arizangiz muvaffaqiyatli qabul qilindi! Shifokorlarimiz yaqin 10-15 daqiqa ichida siz bilan bog'lanishadi.",
    allServices: "Barcha xizmatlar",
    doctorsTitle: "Bizning professional shifokorlarimiz",
    doctorsDesc: "Radeski klinikasida ko'p yillik tajribaga ega va xalqaro malaka oshirgan shifokorlar faoliyat yuritadi",
    pricesTitle: "Xizmatlar narxi (Preyskurant)",
    pricesDesc: "Radeski klinikasidagi dermatologik va kosmetologik xizmatlarning shaffof narxlari",
    priceMetaSections: "ta bo'lim",
    priceMetaItems: "ta xizmat va pozitsiya",
    priceSectionLabel: "Bo'lim",
    priceItemsShort: "ta",
    priceColService: "Xizmat nomi",
    priceColPrice: "Narxi (UZS)",
    priceColBooking: "Yozilish",
    priceMobilePrice: "Narxi:",
    priceFree: "Bepul",
    priceEmpty: "Ushbu filtr bo'yicha narx topilmadi.",
    priceNoticeTitle: "Muhim eslatma!",
    priceNoticeBody: "Preyskurantdagi narxlar rasmiy klinika ro'yxati bo'lib, tanishuv maqsadida beriladi. Yakuniy narx shifokor ko'rigidagi tashxis va davolash hajmiga qarab belgilanadi.",
    articlesTitle: "Tibbiy maqolalar & Yangiliklar",
    articlesDesc: "Teri parvarishi, kasalliklar va ularni davolash bo'yicha shifokorlarimiz tavsiyalari",
    videosTitle: "Klinika videolari",
    videosDesc: "Radeski klinikasidagi zamonaviy uskunalar, xizmatlar va bemor parvarishi haqida qisqa videolar",
    branchesTitle: "Bizning filiallar",
    branchesDesc: "Farg'ona vodiysi bo'ylab Radeski klinikasi filiallari va qabul punktlari",
    resultsTitle: "Davolash natijalari",
    resultsDesc: "Bemorlarimizdagi real o'zgarishlar — oldin va keyin. Har bir holat individual yondashuv asosida",
    searchPlaceholder: "Xizmatlar yoki maqolalarni qidirish...",
    experience: "Tajriba",
    education: "Ish joyi",
    specialization: "Mutaxassisligi",
    ratingsTitle: "Platforma reytinglarimiz",
    safetyTitle: "100% Steril va Xavfsiz Sharoit",
    safetyDesc: "Klinikamizda barcha asbob-uskunalar Yevropa standartlariga muvofiq ko'p bosqichli sterilizatsiyadan o'tkaziladi. Sizning xavfsizligingiz - bizning oliy maqsadimizdir.",
    years: "yil",
    yearsActive: "yillik tajriba",
    reviewsCount: "ko'rib chiqilgan fikrlar",
    seoTitle: "Radeski Skin & Aesthetic Clinic - Sog'lom va go'zal teri kaliti",
    seoText: "Radeski dermatologiya va estetika klinikasi Farg'ona shahrida zamonaviy jihozlar va malakali tibbiyot xodimlari bilan xizmat ko'rsatmoqda. Biz teri kasalliklarini diagnostika qilish, davolash, jarrohlik amaliyotlari va ilg'or kosmetologiya yo'nalishlarida ilg'or texnologiyalarni qo'llaymiz. IPL, PhotoFinder va Moos mikrografik jarrohligi kabi zamonaviy usullar klinikamizning asosiy ustunligidir.",
    aboutHeader: "Sizning go'zalligingiz va sog'lig'ingiz - bizning kasbiy burchimiz",
    aboutParagraph1: "Radeski Skin & Aesthetic Clinic dermatologiya, kosmetologiya va dermato-onkologiya sohalarida Farg'ona va butun vodiyda yuqori sifat standartlariga ega tibbiy xizmatlarni taqdim etadi.",
    aboutParagraph2: "Klinikamiz Germaniya, Italiya va AQShning yetakchi kompaniyalari ishlab chiqargan eng so'nggi va xavfsiz apparat va texnologiyalardan foydalanadi. Ashurov Dilshod Davlatovich boshchiligidagi shifokorlar guruhi muntazam ravishda Yevropa va MDH mamlakatlarida xalqaro sertifikatlardan o'tishadi.",
    features01: "Professional shifokorlar",
    features01Desc: "Xalqaro darajadagi dermatologlar va kosmetologlar jamoasi.",
    features02: "Zamonaviy innovatsiyalar",
    features02Desc: "O'zbekistonda noyob bo'lgan PhotoFinder va IPL uskunalaridan foydalanish.",
    features03: "Yuqori darajadagi sterilizatsiya",
    features03Desc: "Yevropa tibbiyot standartlariga to'la mos keladigan steril xonalar.",
    features04: "Shaxsiy yondashuv",
    features04Desc: "Har bir bemor terisining xususiyatlarini inobatga olgan holda maxsus terapiya.",
    beBeautiful: "Chiroyli va sog'lom bo'ling",
    beBeautifulDesc: "Teri sog'lig'i bo'yicha maslahat olish uchun ma'lumotlaringizni qoldiring va biz szga tez orada aloqaga chiqamiz.",
    viewProfile: "Profilni ko'rish",
    readMore: "Batafsil o'qish",
    backToArticles: "Barcha maqolalarga qaytish",
    author: "Muallif"
  },
  ru: {
    navHome: "Главная",
    navAbout: "О клинике",
    navServices: "Услуги",
    navDoctors: "Врачи",
    navPrices: "Цены",
    navArticles: "Статьи",
    navContacts: "Контакты",
    navVideos: "Видео",
    navBranches: "Филиалы",
    navResults: "Результаты",
    navTerms: "Пользовательское соглашение",
    navPrivacy: "Политика конфиденциальности",
    appointmentBtn: "Записаться на прием",
    callRequestedBtn: "Заказать обратный звонок",
    addressTitle: "Адрес клиники",
    addressValue: "г. Фергана, улица Узбекистон Овози, дом 1А",
    phoneTitle: "Номер телефона",
    workingHoursTitle: "Рабочее время",
    workingHoursValue: "Понедельник - Суббота: 08:00 - 18:00 (Воскресенье - выходной)",
    backToHome: "На главную",
    viewDetails: "Подробнее",
    closeBtn: "Закрыть",
    submitBtn: "Отправить",
    formName: "Ваше имя",
    formPhone: "Ваш номер телефона",
    formDate: "Дата",
    formService: "Выберите услугу",
    formSuccess: "Ваша заявка успешно принята! Наши специалисты свяжутся с вами в течение 10-15 минут.",
    allServices: "Все услуги",
    doctorsTitle: "Наши профессиональные врачи",
    doctorsDesc: "В клинике Radeski работают врачи с многолетним опытом работы, прошедшие международную квалификацию",
    pricesTitle: "Стоимость услуг (Прейскурант)",
    pricesDesc: "Прозрачные цены на дерматологические и косметологические услуги в клинике Radeski",
    priceMetaSections: "разделов",
    priceMetaItems: "позиций",
    priceSectionLabel: "Раздел",
    priceItemsShort: "поз.",
    priceColService: "Наименование",
    priceColPrice: "Цена (UZS)",
    priceColBooking: "Запись",
    priceMobilePrice: "Цена:",
    priceFree: "Бесплатно",
    priceEmpty: "По данному запросу цены не найдены.",
    priceNoticeTitle: "Важная информация!",
    priceNoticeBody: "Прейскурант носит информационный характер. Окончательная стоимость определяется врачом на приёме с учётом объёма лечения и индивидуальных показаний.",
    articlesTitle: "Медицинские статьи и Новости",
    articlesDesc: "Рекомендации наших врачей по уходу за кожей, заболеваниям и их лечению",
    videosTitle: "Видео о клинике",
    videosDesc: "Короткие ролики об оборудовании, услугах и заботе о пациентах в клинике Radeski",
    branchesTitle: "Наши филиалы",
    branchesDesc: "Филиалы и пункты приёма Radeski по Ферганской долине",
    resultsTitle: "Результаты лечения",
    resultsDesc: "Реальные изменения у наших пациентов — до и после. Каждый случай индивидуален",
    searchPlaceholder: "Поиск услуг или статей...",
    experience: "Опыт работы",
    education: "Место работы",
    specialization: "Специализация",
    ratingsTitle: "Рейтинги клиники",
    safetyTitle: "100% Стерильность и Безопасность",
    safetyDesc: "В нашей клинике все инструменты проходят многоступенчатую стерилизацию в соответствии с европейскими стандартами. Ваша безопасность - наш главный приоритет.",
    years: "лет",
    yearsActive: "лет практики",
    reviewsCount: "проверенных отзывов",
    seoTitle: "Radeski Skin & Aesthetic Clinic - Ключ к здоровой и красивой коже",
    seoText: "Клиника дерматологии и эстетики Radeski предоставляет высокоэффективные услуги в Фергане, используя современное оборудование и квалифицированный медицинский персонал. Мы применяем новейшие технологии в диагностике, лечении кожных заболеваний, хирургических процедурах и эстетической косметологии. Передовые методы, такие как IPL, PhotoFinder и микрографическая хирургия по методу Mohs, являются ключевыми преимуществами нашей клиники.",
    aboutHeader: "Ваша красота и здоровье — наш профессиональный долг",
    aboutParagraph1: "Radeski Skin & Aesthetic Clinic предлагает медицинские услуги высочайших стандартов в области дерматологии, косметологии и дерматоонкологии в Фергане и по всей Ферганской долине.",
    aboutParagraph2: "Наша клиника оснащена самым современным и безопасным оборудованием от ведущих производителей Германии, Италии и США. Команда врачей под руководством Ашурова Дильшода Давлатовича регулярно проходит стажировки и сертификации в Европе и странах СНГ.",
    features01: "Профессиональные врачи",
    features01Desc: "Команда дерматологов и косметологов международного уровня.",
    features02: "Современные инновации",
    features02Desc: "Применение уникального оборудования PhotoFinder и систем IPL в Узбекистане.",
    features03: "Высочайшая стерильность",
    features03Desc: "Стерилизационные боксы, полностью соответствующие европейским медицинским регламентам.",
    features04: "Индивидуальный подход",
    features04Desc: "Подбор протоколов терапии с учетом индивидуальных особенностей кожи каждого пациента.",
    beBeautiful: "Будьте красивыми и здоровыми",
    beBeautifulDesc: "Оставьте свои данные, чтобы получить консультацию по здоровью кожи, и мы свяжемся с вами в ближайшее время.",
    viewProfile: "Профиль врача",
    readMore: "Читать далее",
    backToArticles: "Назад к списку статей",
    author: "Автор"
  },
  en: {
    navHome: "Home",
    navAbout: "About Us",
    navServices: "Services",
    navDoctors: "Doctors",
    navPrices: "Prices",
    navArticles: "Articles",
    navContacts: "Contacts",
    navVideos: "Videos",
    navBranches: "Branches",
    navResults: "Results",
    navTerms: "Terms of Use",
    navPrivacy: "Privacy Policy",
    appointmentBtn: "Book Appointment",
    callRequestedBtn: "Request a Call",
    addressTitle: "Clinic Address",
    addressValue: "1A Uzbekiston Ovozi Street, Fergana City",
    phoneTitle: "Phone Number",
    workingHoursTitle: "Working Hours",
    workingHoursValue: "Monday - Saturday: 08:00 - 18:00 (Sunday - Closed)",
    backToHome: "Back to Home",
    viewDetails: "View Details",
    closeBtn: "Close",
    submitBtn: "Submit",
    formName: "Your Name",
    formPhone: "Your Phone Number",
    formDate: "Date",
    formService: "Choose a Service",
    formSuccess: "Your request has been successfully submitted! Our specialists will contact you in 10-15 minutes.",
    allServices: "All Services",
    doctorsTitle: "Our Professional Doctors",
    doctorsDesc: "Radeski Clinic features highly experienced and internationally certified physicians and cosmetic specialists",
    pricesTitle: "Price List (Pricelist)",
    pricesDesc: "Transparent pricing for dermatological and aesthetic services at Radeski Clinic",
    priceMetaSections: "sections",
    priceMetaItems: "price items",
    priceSectionLabel: "Section",
    priceItemsShort: "items",
    priceColService: "Service",
    priceColPrice: "Price (UZS)",
    priceColBooking: "Booking",
    priceMobilePrice: "Price:",
    priceFree: "Free",
    priceEmpty: "No pricing items matched your filter or search.",
    priceNoticeTitle: "Important notice!",
    priceNoticeBody: "This price list is for reference. Final cost is determined at consultation based on treatment scope and clinical indications.",
    articlesTitle: "Medical Articles & News",
    articlesDesc: "Skin care recommendations, conditions, and treatments directly from our clinical team",
    videosTitle: "Clinic videos",
    videosDesc: "Short videos about Radeski equipment, services, and patient care standards",
    branchesTitle: "Our branches",
    branchesDesc: "Radeski clinic branches and consultation points across the Fergana Valley",
    resultsTitle: "Treatment results",
    resultsDesc: "Real patient improvements — before and after. Every case follows an individual plan",
    searchPlaceholder: "Search services or articles...",
    experience: "Experience",
    education: "Workplace",
    specialization: "Specialization",
    ratingsTitle: "Our Ratings",
    safetyTitle: "100% Sterile & Safe Environment",
    safetyDesc: "All instruments in our facility undergo multi-stage disinfection matching rigorous European clinical directives. Your health safety is our absolute focus.",
    years: "years",
    yearsActive: "years of experience",
    reviewsCount: "verified testimonials",
    seoTitle: "Radeski Skin & Aesthetic Clinic - The Key to Healthy and Beautiful Skin",
    seoText: "Radeski Dermatology and Aesthetic Clinic serves the Fergana Valley with medical expertise and state-of-the-art diagnostic and cosmetic facilities. We employ gold-standard technology in diagnosing and treating dermatological conditions, surgical procedures, and genetic-level skin rejuvenation. Advanced procedures like IPL, PhotoFinder computerized mole mapping, and Mohs micrographic surgery form the core of our specialized solutions.",
    aboutHeader: "Your beauty and health is our professional dedication",
    aboutParagraph1: "Radeski Skin & Aesthetic Clinic provides premier medical services in clinical dermatology, aesthetic cosmetology, and dermato-oncology across regional Fergana.",
    aboutParagraph2: "Our facility is equipped with state-of-the-art clinical devices from world leaders in Germany, Italy, and the USA. Led by Dr. Dilshod Davlatovich Ashurov, our specialized medical group regularly is trained in European and international institutes.",
    features01: "Professional Physicians",
    features01Desc: "International-class dermatologists and aesthetic cosmetologists.",
    features02: "Modern Breakthroughs",
    features02Desc: "Exclusive clinical application of PhotoFinder and Sciton IPL systems in Uzbekistan.",
    features03: "High-grade Disinfection",
    features03Desc: "Clean sterilization facilities matching global healthcare parameters.",
    features04: "Bespoke Care",
    features04Desc: "Custom clinical programs matching the biological features of your skin.",
    beBeautiful: "Be Beautiful and Healthy",
    beBeautifulDesc: "Leave your contact details for an expert skin health consultation, and we will get back to you shortly.",
    viewProfile: "View profile",
    readMore: "Read more",
    backToArticles: "Back to articles",
    author: "Author"
  }
};

export const CLINIC_RATINGS = [
  {
    platform: 'Yandex',
    rating: '4.9',
    count: 124,
    logo: '⭐',
    url: 'https://yandex.uz/profile/138616043960',
  },
  {
    platform: 'Google Maps',
    rating: '4.8',
    count: 85,
    logo: '📍',
    url: 'https://www.google.com/maps/place/Radeski+Skin+%26+Aesthetic+Clinic/@40.3833622,71.7936632,17z/data=!3m1!4b1!4m6!3m5!1s0x38bb830bba97cb09:0xd99d7f456cd820e8!8m2!3d40.3833622!4d71.7962381!16s%2Fg%2F11y2mv11w6?hl=ru&entry=ttu',
  },
  {
    platform: '2GIS',
    rating: '4.9',
    count: 96,
    logo: '🗺️',
    url: 'https://2gis.kg/bishkek?m=72.367424%2C41.175575%2F7.43',
  },
];

export const SITE_LOGO = '/gallery/logo.webp';

/** Bosh sahifa hero slayderi — gallery/top1–3.webp (public/gallery ga nusxalanadi) */
export const HERO_SLIDE_IMAGES = [
  { src: '/gallery/top1.webp', objectPosition: 'center center' },
  { src: '/gallery/top2.webp', objectPosition: 'center center' },
  { src: '/gallery/top3.webp', objectPosition: 'center center' },
] as const;

export const GALLERY_IMAGS = [
  { name: "gallery-1", src: "/gallery/1.webp" },
  { name: "gallery-2", src: "/gallery/2.webp" },
  { name: "gallery-3", src: "/gallery/3.webp" },
  { name: "gallery-4", src: "/gallery/4.webp" },
  { name: "gallery-5", src: "/gallery/5.webp" },
  { name: "gallery-6", src: "/gallery/6.webp" },
  { name: "gallery-7", src: "/gallery/7.webp" },
  { name: "gallery-8", src: "/gallery/8.webp" },
  { name: "gallery-9", src: "/gallery/9.webp" },
];

export const DOCTORS: Doctor[] = [
  {
    id: "ashurov-dilshod",
    name: {
      uz: "Ashurov Dilshod Davlatovich",
      ru: "Ашуров Дильшод Давлатович",
      en: "Dr. Dilshod Davlatovich Ashurov"
    },
    role: {
      uz: "Bosh shifokor, Dermatovenerolog, Dermatoonkolog",
      ru: "Главный врач, Дерматовенеролог, Дерматоонколог",
      en: "Chief Medical Officer, Dermatovenerologist, Dermato-oncologist"
    },
    bio: {
      uz: "Rossiya va Germaniyada malaka oshirgan, ko'p yillik professional tajribaga ega dermatoonkolog. Teri xavfli o'smalarining erta diagnostikasi (PhotoFinder) va davolash bo'yicha mutaxassis.",
      ru: "Прошел повышение квалификации в России и Германии. Специалист международного уровня по ранней диагностике новообразований кожи с помощью PhotoFinder и дерматохирургии.",
      en: "Specialized in advanced dermato-oncology and computerized mole mapping (PhotoFinder) trained in Germany and Russia. Active member of European Academy of Dermatology."
    },
    experience: {
      uz: "18",
      ru: "18",
      en: "18"
    },
    education: {
      uz: "Toshkent Tibbiyot Akademiyasi (TTA), Moskva Dermatovenerologiya instituti, Myunxen Dermatologiya Klinikasi.",
      ru: "Ташкентская Медицинская Академия (ТМА), Московский институт дерматовенерологии, Дерматологическая Клиника Мюнхена.",
      en: "Tashkent Medical Academy, Moscow Institute of Dermatovenerology, Munich Clinic of Dermatology."
    },
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "kodirova-dilafruzxon",
    name: {
      uz: "Kodirova Dil'afruzxon",
      ru: "Кодирова Дилафрузхон",
      en: "Dr. Dilafruzkhon Kodirova"
    },
    role: {
      uz: "Dermatolog, Estetik Kosmetolog",
      ru: "Дерматолог, Эстетический Косметолог",
      en: "Dermatologist, Aesthetic Cosmetologist"
    },
    bio: {
      uz: "Inyeksion va apparat kosmetologiyasi mutaxassisi. IPL fotoomolajeniyani gen darajasida qo'llash va yoshartirish protokollarini amalga oshiradi.",
      ru: "Специалист по инъекционной и аппаратной косметологии. Владеет методиками фотоомоложения IPL на генном уровне и лифтинга кожи.",
      en: "Expert in injection therapy and medical hardware cosmetology. Implements high-end genetic-level IPL photo-rejuvenation systems."
    },
    experience: {
      uz: "12",
      ru: "12",
      en: "12"
    },
    education: {
      uz: "Andijon Davlat Tibbiyot Instituti (ADTI), Sankt-Peterburg Estetik tibbiyot akademiyasi.",
      ru: "Андижанский Государственный Медицинский Институт, Санкт-Петербургская академия эстетической медицины.",
      en: "Andijan State Medical Institute, Saint Petersburg Academy of Aesthetic Medicine."
    },
    photo: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "yoqubov-farrux",
    name: {
      uz: "Yo'qubov Farrux Farhodjonovich",
      ru: "Якубов Фаррух Фарходжонович",
      en: "Dr. Farrukh Farhodjonovich Yoqubov"
    },
    role: {
      uz: "Dermatoxirurg, Onkodermatolog",
      ru: "Дерматохирург, Онкодерматолог",
      en: "Dermatoxirurg, Oncodermatologist"
    },
    bio: {
      uz: "Moos uslubi bo'yicha mikrografik jarrohlik va teri o'smalarini olib tashlash jarrohlik operatsiyalarini muvaffaqiyatli amalga oshirib kelmoqda.",
      ru: "Успешно проводит микрографические операции по методу Mohs и хирургическое удаление доброкачественных и злокачественных новообразований кожи.",
      en: "Performs Mohs micrographic surgery and removal of skin neoplasms. Highly skilled surgeon in clinical dermatosurgery."
    },
    experience: {
      uz: "10",
      ru: "10",
      en: "10"
    },
    education: {
      uz: "Toshkent Tibbiyot Akademiyasi, Kiev Onkologiya instituti maqsadli kursi.",
      ru: "Ташкентская Медицинская Академия, Специализированный курс в Киевском институте онкологии.",
      en: "Tashkent Medical Academy, Kyiv Oncological Institute Specialized Course."
    },
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "mangasaryan-lorena",
    name: {
      uz: "Mangasaryan Lorena Georgievna",
      ru: "Мангасарян Лорена Георгиевна",
      en: "Dr. Lorena Georgievna Mangasaryan"
    },
    role: {
      uz: "Shifokor-Kosmetolog, Dermatolog",
      ru: "Врач-Косметолог, Дерматолог",
      en: "Cosmetologist, Clinical Dermatologist"
    },
    bio: {
      uz: "Yuz shaklini konturlash, biorevitalizatsiya va akne asoratlarini davolash bo'yicha professional maslahatchi.",
      ru: "Контурная пластика лица, биоревитализация, мезотерапия и лечение постакне. Опыт ведения сложных пациентов с чувствительной кожей.",
      en: "Facial contouring, biorevitalization, mesotherapy, and post-acne clinical care. Specialized in treating sensitive skin profiles."
    },
    experience: {
      uz: "9",
      ru: "9",
      en: "9"
    },
    education: {
      uz: "Toshkent Davlat Stomatologiya Instituti (Kosmetologiya yo'nalishi), Moskva Kosmetologiya instituti malaka oshirishi.",
      ru: "Ташкентский Государственный Стоматологический Институт, Московский институт косметологии.",
      en: "Tashkent State Dental Institute, Moscow Institute of Cosmetology Postgrad."
    },
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "kamolova-barno",
    name: {
      uz: "Kamolova Barno",
      ru: "Камолова Барно",
      en: "Dr. Barno Kamolova"
    },
    role: {
      uz: "Kosmetolog, Lazer Terapevti",
      ru: "Косметолог, Лазерный Терапевт",
      en: "Aesthetic Cosmetologist, Laser Therapist"
    },
    bio: {
      uz: "Uskuna kosmetologiyasi bo'yicha sertifikatlangan mutaxassis. Lazer epilyatsiyasi va fotoomolajeniyani yuqori darajada olib boradi.",
      ru: "Сертифицированный специалист по аппаратной косметологии, лазерной эпиляции и неинвазивным уходовым процедурам.",
      en: "Certified advanced hardware cosmetology professional. Specialized in laser hair reduction and non-invasive glow treatments."
    },
    experience: {
      uz: "7",
      ru: "7",
      en: "7"
    },
    education: {
      uz: "Farg'ona jamoat salomatligi tibbiyot instituti, Koreyaning estetik kosmetologiya malaka oshirish kurslari.",
      ru: "Ферганский медицинский институт общественного здоровья, Курсы повышения квалификации в Сеуле, Южная Корея.",
      en: "Fergana Public Health Medical Institute, Aesthetic Cosmetology Practicum in Seoul, South Korea."
    },
    photo: "https://images.unsplash.com/photo-1622902098748-028726098130?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "abdvaliyev-begali",
    name: {
      uz: "Abdvaliyev Begali",
      ru: "Абдвалиев Бегали",
      en: "Dr. Begali Abdvaliyev"
    },
    role: {
      uz: "Dermatolog, Trixolog (Soch kasalliklari mutaxassisi)",
      ru: "Дерматолог, Трихолог (Специалист по лечению волос)",
      en: "Dermatologist, Trichologist (Hair Care Specialist)"
    },
    bio: {
      uz: "Soch to'kilishining barcha turlarini tashxislash, trixoskopiya va plazmoterapevtik texnologiyalar yordamida davolash mutaxassisi.",
      ru: "Диагностика всех форм алопеции (выпадения волос), проведение трихоскопии и составление схем плазмотерапии.",
      en: "Specialize in hair fall diagnostics, trichoscopy, and multi-stage plasma hair restoration programs."
    },
    experience: {
      uz: "8",
      ru: "8",
      en: "8"
    },
    education: {
      uz: "Andijon Davlat Tibbiyot Instituti, Moskva Soch davolash trixologiya markazi maxsus diplomi.",
      ru: "Андижанский Государственный Медицинский Институт, Профессиональная переподготовка по трихологии в Москве.",
      en: "Andijan State Medical Institute, Moscow Advanced Academy of Trichology Certification."
    },
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600"
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "dermatologiya",
    title: {
      uz: "Dermatologiya",
      ru: "Дерматология",
      en: "Dermatology"
    },
    description: {
      uz: "Teri kasalliklarini diagnostika qilish va samarali tibbiy davolash (vitiligo, psoriaz, ekzema, toshmalar).",
      ru: "Диагностика и клиническое лечение всех видов заболеваний кожи (псориаз, витилиго, экзема, акне).",
      en: "Medical diagnostics and targeted clinical therapeutics for all skin diseases including psoriasis and eczema."
    },
    icon: "ScanFace",
    subServices: [
      {
        id: "det-derm",
        name: { uz: "Bolalar dermatologiyasi", ru: "Детская дерматология", en: "Pediatric Dermatology" },
        description: {
          uz: "Go'daklar va bolalardagi teri kasalliklarini muloyimlik bilan davolash va allergiyalarni aniqlash.",
          ru: "Бережное лечение кожных заболеваний и аллергических дерматитов у детей с первых дней жизни.",
          en: "Gentle treatment of dermatological conditions, atopic dermatitis, and allergies in infants and pediatric patients."
        }
      },
      {
        id: "fototerapiya",
        name: { uz: "Fototerapiya", ru: "Фототерапия", en: "Phototherapy" },
        description: {
          uz: "Nofiziy ultrabinafsha nurlari (UVB 311 nm) yordamida psoriaz va vitiligo kasalliklarini dori-darmonsiz davolash.",
          ru: "Современное лечение витилиго, псориаза и экземы с использованием узковолнового ультрафиолета UVB 311 нм.",
          en: "Targeted narrow-band UVB (311 nm) light exposure for skin pigmentation and chronic plaque psoriasis."
        }
      },
      {
        id: "immunobiologicheskaya",
        name: { uz: "Immunobiologik terapiya", ru: "Иммунобиологическая терапия", en: "Immunobiological Therapy" },
        description: {
          uz: "Og'ir va surunkali teri shikastlanishlarini ilg'or gen-inzheneriya biologik preparatlari bilan bartaraf yetish.",
          ru: "Лечение тяжелых системных аутоиммунных патологий кожи с использованием современных таргетных биопрепаратов.",
          en: "High-level advanced biologic agent targeting of chronic auto-immune dermatological diseases."
        }
      }
    ]
  },
  {
    id: "apparatnaya-kosmetologiya",
    title: {
      uz: "Apparat kosmetologiyasi",
      ru: "Аппаратная косметология",
      en: "Hardware Cosmetology"
    },
    description: {
      uz: "Eng so'nggi lazer va foto-texnologiyalar (IPL, mikrotoklar) orqali terini chuqur yoshartirish.",
      ru: "Омоложение и чистка кожи лица с помощью новейших лазерных ультразвуковых и фотосистем.",
      en: "Non-invasive skin rejuvenation, texturing, and cell recovery using advanced medical laser devices."
    },
    icon: "WandSparkles",
    subServices: [
      {
        id: "bbl-foto",
        name: { uz: "IPL fotoomolajeniyani", ru: "IPL-фотоомоложение", en: "Intense Pulsed Light (IPL) Rejuvenation" },
        description: {
          uz: "Gen darajasida hujayra qarishini to'xtatuvchi, pigmentatsiya va qon-tomir tarmoqlarini yo'qotuvchi original Amerika texnologiyasi.",
          ru: "Легендарная американская методика омоложения кожи на генном уровне, удаления пигментации и сосудистых звездочек.",
          en: "Original Sciton BroadBand Light genetic-level rejuvenation targeted at solar lentigines and vascular redness."
        }
      },
      {
        id: "mikrotoki",
        name: { uz: "Mikrotok terapiyasi", ru: "Микротоковая терапия", en: "Microcurrent Therapy" },
        description: {
          uz: "Past chastotali o'zgaruvchan mikrotoklar orqali yuz mushaklari tonusini tiklash va shishlarni bartaraf etish.",
          ru: "Стимуляция клеток микротоками низкой частоты для лимфодренажа, устранения отеков и нехирургического лифтинга.",
          en: "Gentle low-frequency microelectrical impulse simulation for tissue lymphatic drainage and skin tightening."
        }
      }
    ]
  },
  {
    id: "in-ekcionnaya-kosmetologiya",
    title: {
      uz: "Inyeksion kosmetologiya",
      ru: "Инъекционная косметология",
      en: "Injection Cosmetology"
    },
    description: {
      uz: "Botulinoterapiya, kontur plastikasi va biorevitalizatsiya kabi kislotali inyeksiyalar bilan tezkor effekt.",
      ru: "Инъекции красоты: контурная пластика, биоревитализация, мезотерапия и ботулинотерапия.",
      en: "Anti-aging injectable designs featuring safe dermal fillers, bio-revitalizers, and wrinkle neurotoxins."
    },
    icon: "Syringe",
    subServices: [
      {
        id: "konturnaya",
        name: { uz: "Kontur plastikasi", ru: "Контурная пластика", en: "Dermal Fillers" },
        description: {
          uz: "Gialuron kislotali gellar yordamida lab xajmini oshirish, yuz shaklini to'g'rilash va ajinlarni to'ldirish.",
          ru: "Коррекция объемов лица (губы, скулы, подбородок) сертифицированными филлерами на основе гиалуроновой кислоты.",
          en: "Facial contour restoration and lip augmentation utilizing medical-grade hyaluronic acid gels."
        }
      },
      {
        id: "botulino",
        name: { uz: "Botulinoterapiya (Botoks)", ru: "Ботулинотерапия (Ботокс)", en: "Botulinum Therapy (Botox)" },
        description: {
          uz: "Mimik ajinlarni xavfsiz bloklash va terini tekislash uchun Dysport va Botox preparatlarini qo'llash.",
          ru: "Устранение мимических морщин на лбу, вокруг глаз и шее с использованием оригинальных препаратов нейропротеина.",
          en: "Targeted facial muscle micro-blocking to iron out forehead lines, crow's feet, and frown folds."
        }
      },
      {
        id: "biorev",
        name: { uz: "Biorevitalizatsiya", ru: "Биоревитализация", en: "Biorevitalization" },
        description: {
          uz: "Terini chuqur namlantirish va elastikligini oshirish uchun gialuron kislotasini mikrodermaga yuborish.",
          ru: "Интенсивное глубокое увлажнение и насыщение дермы чистой гиалуроновой кислотой для возвращения сияния.",
          en: "Micro-dermal injection of organic hyaluronic acid matrices to restore optimal skin moisture and elasticity."
        }
      }
    ]
  },
  {
    id: "lazernaya-epilyaciya",
    title: {
      uz: "Lazer epilyatsiyasi",
      ru: "Лазерная эпиляция",
      en: "Laser Hair Removal"
    },
    description: {
      uz: "Istalmagan tana sochlarini og'riqsiz va butunlay yo'qotuvchi professional lazer tizimlari.",
      ru: "Безопасное и безболезненное удаление нежелательных волос на любом типе кожи диодным и александритовым лазером.",
      en: "Safe laser-targeted destruction of unwanted hair roots using specialized cooling clinical lasers."
    },
    icon: "Zap",
    subServices: [
      {
        id: "alex-lazer",
        name: { uz: "Aleksandrit lazer epilyatsiyasi", ru: "Александритовая эпиляция", en: "Alexandrite Laser Epilation" },
        description: {
          uz: "Yorug' teri va nozik sochlar uchun eng samarali, o'rnatilgan intensiv sovitish tizimli premium epilyatsiya.",
          ru: "Золотой стандарт эпиляции для светлой кожи. Встроенное мощное охлаждение защищает эпидермис от перегрева.",
          en: "Gold-standard epilation utilizing fast Alexandrite waves coupled with dual integrated skin chilling."
        }
      }
    ]
  },
  {
    id: "trihologiya-centr-lechenie-volos",
    title: {
      uz: "Soch davolash - Trixologiya",
      ru: "Лечение волос - Трихология",
      en: "Trichology - Hair & Scalp Treatment"
    },
    description: {
      uz: "Soch to'kilishini kompleks tashxislash, trixoskopiya, dori va mezoterapiya bilan sochlarni tiklash.",
      ru: "Комплексная диагностика заболеваний кожи головы, трихоскопия, лечение выпадения волос (алопеции).",
      en: "Expert trichological scanning, computerized hair shaft check, and active therapy for alopecias."
    },
    icon: "ScanSearch",
    subServices: [
      {
        id: "trixoskop",
        name: { uz: "Kompyuter trixoskopiyasi", ru: "Компьютерная трихоскопия", en: "Computerized Trichoscopy" },
        description: {
          uz: "Soch folekulalarining holatini mikroskopik tahlil qilish orqali to'kilish sababini aniq belgilash.",
          ru: "Цифровой анализ плотности волос и состояния фолликулов на микроскопическом уровне под увеличением.",
          en: "Detailed zoom-in microanalysis of active hair follicles to determine clinical reasons behind hair loss."
        }
      }
    ]
  },
  {
    id: "dermatoonkologiya",
    title: {
      uz: "Dermato-onkologiya",
      ru: "Дерматоонкология",
      en: "Dermato-oncology"
    },
    description: {
      uz: "Xollar, papilloma va xavfli o'smalarni (melanoma) erta aniqlash, diagnostika va monitoring.",
      ru: "Ранняя диагностика родинок, папиллом и злокачественных новообразований кожи (меланома). Скрининг и наблюдение.",
      en: "Early screening of skin spots, dysplastic nevi, and melanomas using modern dermoscopy markers and follow-up monitoring."
    },
    icon: "ScanEye",
    subServices: [
      {
        id: "photofinder-scan",
        name: { uz: "PhotoFinder dermatologik skanerlash", ru: "Скрининг на PhotoFinder", en: "PhotoFinder Mole Mapping" },
        description: {
          uz: "Butun tana va teridagi xollarni sun'iy intellekt orqali to'liq raqamli xaritalash, melanoma xavfini baholash.",
          ru: "Цифровое картирование всего тела на немецком аппарате PhotoFinder. ИИ находит новые и опасные родинки.",
          en: "German PhotoFinder high-resolution automated body imaging. AI detects evolving risk moles early."
        }
      },
      {
        id: "biopsiya",
        name: { uz: "Teri biopsiyasi va gistologiya", ru: "Биопсия кожи и гистология", en: "Skin Biopsy & Histopathology" },
        description: {
          uz: "Xavfli o'smalarni inkor etish yoki aniqlash maqsadida teri to'qimasidan namuna olish va mikroskop ostida tekshirish.",
          ru: "Забор микро-фрагмента кожи для гистологического исследования при подозрении на онкологические очаги.",
          en: "In-office minor clinical skin tissue sampling for certified microscopical pathology evaluation."
        }
      }
    ]
  },
  {
    id: "hirurgicheskaya-dermatologiya",
    title: {
      uz: "Jarrohlik dermatologiyasi",
      ru: "Хирургическая дерматология",
      en: "Surgical Dermatology"
    },
    description: {
      uz: "Teri osti limfomalari, o'smalarini jarrohlik yo'li bilan minimal chandiqlar bilan olib tashlash.",
      ru: "Микрохирургическое удаление доброкачественных опухолей кожи, фибром, липом с наложением косметических швов.",
      en: "Advanced surgical removal of skin lesions, lipomas, and moles using micro-cosmetic stitching."
    },
    icon: "ScalpelLine",
    subServices: [
      {
        id: "moh-surgery",
        name: { uz: "Mohs mikrografik jarrohligi", ru: "Операция по методу Mohs (Моса)", en: "Mohs Micrographic Surgery" },
        description: {
          uz: "Yuz qismidagi teri saratonlarini sog'lom to'qimalarni maksimal darajada asragan holda olib tashlash operatsiyasi.",
          ru: "Высокоточная операция удаления рака кожи на лице с микроскопическим контролем краев раны во время вмешательства.",
          en: "Highest cure-rate micrographic surgery of head and neck skin cancers, keeping clean tissue untouched."
        }
      }
    ]
  },
  {
    id: "shkola-psoriaza",
    title: {
      uz: "Psoriaz maktabi",
      ru: "Школа псориаза",
      en: "Psoriasis Patient School"
    },
    description: {
      uz: "Bemorlarga surunkali psoriazni nazorat qilish, remissiyani uzaytirish va parvarishlash qoidalarini o'rgatish.",
      ru: "Обучение пациентов правильному уходу, подбору диеты и контролю обострений при хроническом псориазе.",
      en: "Clinical educational courses for psoriasis warriors guiding diet, flares, and psychological wellness."
    },
    icon: "BookHeart",
    subServices: [
      {
        id: "consult-group",
        name: { uz: "Guruhli shifokor maslahatlari", ru: "Групповые консультации", en: "Group Medical Counseling" },
        description: {
          uz: "Shifokor bilan birgalikda terini parvarish qilish va asoratlarning oldini olish bo'yicha amaliy maslahatlar.",
          ru: "Разбор клинических кейсов, рекомендации по гидратации кожи и предотвращению рецидивов заболевания.",
          en: "Group sharing sessions detailing targeted cream application, scalp nourishment, and avoiding stress triggers."
        }
      }
    ]
  },
  {
    id: "shkola-dermatoskopii",
    title: {
      uz: "Dermatoskopiya maktabi",
      ru: "Школа дерматоскопии",
      en: "Dermatoscopy School"
    },
    description: {
      uz: "Yosh dermatologlarni teri o'smalarining dermatoskopik diagnostikasini o'rgatish bo'yicha o'quv dasturlari.",
      ru: "Обучающие семинары для врачей-дерматологов по оптической и цифровой диагностике родинок и опухолей.",
      en: "Professional training courses for dermatologists focused on mole analysis and optical markers."
    },
    icon: "GraduationCap",
    subServices: [
      {
        id: "dermatosc-lessons",
        name: { uz: "Praktik o'quv darslari", ru: "Практические курсы", en: "Practical Training Workshops" },
        description: {
          uz: "Haqiqiy klinik holatlarda PhotoFinder skanerlari yordamida tashxis qo'yish amaliyotini o'rganish.",
          ru: "Разбор сотен цифровых атласов кожных повреждений под руководством ведущих дерматоонкологов.",
          en: "Hands-on analysis of mole digital repositories with expert evaluation by leading dermato-oncologists."
        }
      }
    ]
  },
  {
    id: "clinika-patologii-nogtej",
    title: {
      uz: "Tirnoq va oyoq patologiyasi",
      ru: "Патология ногтей и стопы",
      en: "Nail and Foot Pathology Clinic"
    },
    description: {
      uz: "Tirnoq zamburug'lari, plastinka deformatsiyalari va qadoqlarni o'ta xavfsiz va samarali davolash tibbiy xizmati.",
      ru: "Лечение грибка ногтей, вросшего ногтя, трещин пятки и стержневых мозолей медицинскими методами.",
      en: "Clinical treatment of onychomycosis (nail fungus), ingrown toenails, and hyperkeratosis of heels."
    },
    icon: "Footprints",
    subServices: [
      {
        id: "podolog-dermatolog",
        name: { uz: "Dermatologik podolog xizmati", ru: "Дерматологический подолог", en: "Clinical Podology Services" },
        description: {
          uz: "Og'riqsiz podologik jarrohlik usullari bilan o'sgan tirnoqlarni tuzatish va davolash.",
          ru: "Медицинский аппаратный педикюр, установка титановых нитей для исправления формы вросшего ногтя.",
          en: "Medical sterile foot care including titanium corrective wire installations for ingrown nail shapes."
        }
      }
    ]
  },
  {
    id: "dermatopatologiya",
    title: {
      uz: "Dermatopatologiya",
      ru: "Дерматопатология",
      en: "Dermatopathology Lab"
    },
    description: {
      uz: "Teri hujayralarining gistologik va immunogistokimyoviy tahlillarini yuqori aniqlikda o'tkazish.",
      ru: "Высокоточные гистологические исследования биоптатов кожи при спорных и онкологических диагнозах.",
      en: "High-precision microscopic histopathological evaluation of dermal punch tissue samples."
    },
    icon: "Dna",
    subServices: [
      {
        id: "gistolog",
        name: { uz: "Gistologik mikroskopik tahlil", ru: "Гистологическое исследование", en: "Histopathology Biomarker Exam" },
        description: {
          uz: "Laboratoriyada to'qimalarning hujayra darajasida patalogik o'zgarishlarini barcha turlarini aniq tashxisi.",
          ru: "Микроскопический послойный анализ структуры клеток для верификации доброкачественность орагнических очагов.",
          en: "Stained tissue slide examination to rule out malignancies and confirm cellular health indicators."
        }
      }
    ]
  },
  {
    id: "gen-revo",
    title: {
      uz: "Gen-darajasida fotoomolajeniya",
      ru: "Фотоомоложение на генном уровне",
      en: "Gene-Level Photo-Rejuvenation"
    },
    description: {
      uz: "Qarish genlarini faolligini o'zgartiruvchi original IPL Forever Young ilg'or texnologiyasi.",
      ru: "Революционная восстановительная технология IPL Forever Young, поворачивающая клеточный возраст вспять.",
      en: "Revolutionary medical-grade Sciton IPL Forever Young protocols directly resetting aging genes."
    },
    icon: "Dna",
    subServices: [
      {
        id: "fy-protocols",
        name: { uz: "Forever Young IPL protokollari", ru: "Протоколы Forever Young IPL", en: "Forever Young IPL Protocols" },
        description: {
          uz: "Ajinsiz va chandiqsiz, butunlay yangi yosh, elastik va sog'lom teri qatlamini shakllantiruvchi amaliyot.",
          ru: "Воздействие световыми импульсами высокой интенсивности для активации генов, отвечающих за коллаген.",
          en: "Focused intense pulsed light cycles inducing rapid renewal of elastin and natural collagen builders."
        }
      }
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: "art-1",
    slug: "papillomy-borodavki",
    title: {
      uz: "Papillomalar va so'gallar nima uchun xavfli?",
      ru: "Чем опасны папилломы и бородавки?",
      en: "Why are papillomas and warts dangerous?"
    },
    summary: {
      uz: "Teridagi o'smalar shunchaki estetik muammo emas. Ularning kelib chiqishi va erta davolash nima uchun muhimligini bilib oling.",
      ru: "Новообразования на коже - это не просто эстетический дефект. Узнайте больше об их вирусной природе и рисках их перерождения.",
      en: "Skin growths are more than a simple aesthetic issue. Find out about their infectious nature and potential risks."
    },
    content: {
      uz: "Papillomalar va so'gallar inson papillomasi virusi (HPV) sababli yuzaga keladi. Ushbu o'smalar jarohatlanganda, kiyimga ishqalanganda yoki immunitet tushib ketganda tez ko'payishi va ayrim hollarda xavfli tus olishi mumkin. Shuning uchun dermatolog nazoratida PhotoFinder yoki optik dermatoskop bilan tekshirilib, xavfsiz lazer, kriyodestruksiya yoki radioto'lqinlar bilan olib tashlanishi zarur. O'zboshimchalik bilan xalqona uslubda yo'qotish og'ir asoratlarga olib kelishi mumkin.",
      ru: "Папилломы и бородавки вызываются вирусом папилломы человека (ВПЧ). При трении об одежду, случайных травмах или ослаблении иммунитета они способны быстро разрастаться и в редких случаях малигнизироваться. Именно поэтому крайне важна своевременная диагностика дерматоонкологом. Удаление жидким азотом, лазером или радиоволной в условиях клиники гарантирует безопасность и отсутствие рубцов. Категорически не рекомендуется заниматься самолечением дома.",
      en: "Papillomas and clinical warts are directly induced by HPV strains. Chronic irritation by collared clothing or accidental surface scratching might spark local spread, cell atypia, and very rarely transition into risk zones. We recommend a computerized evaluation under certified dermatologists and removal via laser, cold nitrogen, or radiofrequency tools to prevent any permanent scarring."
    },
    author: {
      uz: "Ashurov Dilshod Davlatovich",
      ru: "Ашуров Дильшод Давлатович",
      en: "Dr. Dilshod Davlatovich Ashurov"
    },
    date: "2026-05-15",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
    views: 342
  },
  {
    id: "art-2",
    slug: "gemangioma",
    title: {
      uz: "Gemangioma dori-darmonsiz qanday davolanadi?",
      ru: "Как лечить гемангиомы без операции?",
      en: "How are hemangiomas treated without surgery?"
    },
    summary: {
      uz: "Qizil tomirli xollar va bolalardagi tug'ma gemangiomalarning IPL foto-terapiyasi bilan xavfsiz davolash usullari.",
      ru: "Современное неинвазивное лечение сосудистых опухолей и красных родинок с помощью технологии избирательного света.",
      en: "Discover modern, non-invasive treatment methods for vascular red spots and hemangiomas with pulsed light."
    },
    content: {
      uz: "Gemangiomalar - qon tomirlarining haddan tashqari kengayishi yoki ko'payishidan hosil bo'ladigan xavfsiz tugunchalardir. Ilgari ularni faqat jarrohlik yoki kuchli kislotalar yordamida olib tashlashar edi. Bugungi kunda klinikada yangi IPL Sciton tizimi yordamida qon tomirlarga yo'naltirilgan nur yuborilib, sog'lom teri qatlamiga deyarli tegmasdan gemangiomalar yo'q qilinadi. Bemor hech qanday og'riq sezmaydi va chandiqlar qolmaydi.",
      ru: "Гемангиомы представляют собой доброкачественные разрастания сосудов. Ранее для их удаления требовалось иссечение или жидкий азот, оставляющий ожоги. В нашей клинике применяется лазерная коагуляция и прогрессивные световые системы Sciton IPL. Световые волны селективно нагревают и склеивают пораженные сосуды, после чего гемангиома постепенно рассасывается без повреждения окружающих тканей.",
      en: "Hemangiomas represent rapid benign vascular clustering. Traditional treatment relied heavily on liquid nitrogen or surgery, leaving noticeable scars. Today, our highly selective IPL light wavelength directly heats the feeding vessels, causing safe collapse and eventual natural absorption of the red spot, preserving neighboring skin."
    },
    author: {
      uz: "Yo'qubov Farrux Farhodjonovich",
      ru: "Якубов Фаррух Фарходжонович",
      en: "Dr. Farrukh Farhodjonovich Yoqubov"
    },
    date: "2026-05-28",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    views: 290
  },
  {
    id: "art-3",
    slug: "psoriaz-psoriasis",
    title: {
      uz: "Psoriaz: Remissiya davrini qanday uzaytirish mumkin?",
      ru: "Псориаз: Как продлить период ремиссии?",
      en: "Psoriasis: Practical steps to prolong remission"
    },
    summary: {
      uz: "Tizimli surunkali psoriaz kasalligini dori va fototerapiya (UVB 311) integratsiyasi orqali jilovlash choralari.",
      ru: "Научно обоснованные методы контроля обострений чешуйчатого лишая с помощью диеты и селективной фототерапии.",
      en: "Evidence-based methods to keep psoriasis flares under control using narrow-band UVB light and medical diets."
    },
    content: {
      uz: "Psoriaz - butun dunyo bo'ylab millionlab odamlardan uchrashi mumkin bo'lgan autoimmun surunkali muammodir. Uni butunlay to'xtatib bo'lmasa-da, zamonaviy tibbiyot UVB 311nm fototerapiya va biologik dorilar yordamida teri toshmalarini butunlay tozalashi va remissiyani uzoq yillarga cho'za oladi. 'Psoriaz maktabi' dasturlarimiz orqali bemorlarga quruq teri parvarishi va to'g'ri oziqlanish sirlarini professional darajada yetkazamiz.",
      ru: "Псориаз – это системное иммуноассоциированное заболевание. Хотя окончательно вылечить его невозможно, современные медицинские протоколы позволяют добиться очищения кожи на 95-100%. Мы комбинируем узковолновую фототерапию UVB 311 нм и таргетные биопрепараты нового поколения. В рамках нашей 'Школы псориаза' мы даем пациентам дорожную карту по диете, гидратации кожи и минимизации рисков обострений.",
      en: "Psoriasis is a chronic systemic immune-linked condition. While a complete cure is clinically elusive, modern skin clearing of 95% is achievable through UVB 311nm phototherapy coupled with specific targeted biologics. In our clinical 'Psoriasis Patient School', we layout highly detailed diet patterns, lipid skin barriers, and stress management."
    },
    author: {
      uz: "Ashurov Dilshod Davlatovich",
      ru: "Ашуров Дильшод Давлатович",
      en: "Dr. Dilshod Davlatovich Ashurov"
    },
    date: "2026-06-02",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    views: 412
  }
];
