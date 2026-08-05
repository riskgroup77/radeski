import { ServiceCategory, Doctor, Article } from './types';
import { ACNE_ARTICLE } from './data/articles/acneArticle';
import { POST_ACNE_ARTICLE } from './data/articles/postAcneArticle';
import { ROSACEA_ARTICLE } from './data/articles/rosaceaArticle';
import { PRP_HAIR_ARTICLE } from './data/articles/prpHairArticle';
import { PLASMAPHERESIS_ARTICLE } from './data/articles/plasmapheresisArticle';
import { DEKA_CO2_ARTICLE } from './data/articles/dekaCo2LaserArticle';
import { DEKA_MOVEO_ARTICLE } from './data/articles/dekaMoveoEpilationArticle';
import { HAIR_TRANSPLANT_CONTRAINDICATIONS_ARTICLE } from './data/articles/hairTransplantContraindicationsArticle';
import { VITILIGO_DAAVLIN_ARTICLE } from './data/articles/vitiligoDaavlinArticle';
import { PSORIASIS_DAAVLIN_KOKAND_ARTICLE } from './data/articles/psoriasisDaavlinKokandArticle';
import { IPL_THERAPY_ARTICLE } from './data/articles/iplTherapyArticle';
import { PEDIATRIC_WARTS_CO2_DEKA_ARTICLE } from './data/articles/pediatricWartsCo2DekaArticle';
import { ADULT_ACNE_ARTICLE } from './data/articles/adultAcneArticle';
export { PRICES } from './data/prices.ts';

/** Klinika tajribasi (yil) — bosh sahifa va «Klinika haqida» bo'limlarida ko'rsatiladi */
export const CLINIC_EXPERIENCE_YEARS = 2;

export const DICTIONARY = {
  uz: {
    navHome: "Bosh sahifa",
    navAbout: "Klinika haqida",
    navServices: "Xizmatlar",
    navDoctors: "Shifokorlar",
    navPrices: "Narxlar",
    navArticles: "Maqolalar",
    navVideos: "Videolar",
    navBranches: "Filiallar",
    navResults: "Natijalar",
    navTerms: "Foydalanish shartlari",
    navPrivacy: "Maxfiylik siyosati",
    appointmentBtn: "Qabulga yozilish",
    callRequestedBtn: "Qo'ng'iroq buyurtma qilish",
    addressTitle: "Klinika manzili",
    addressValue: "O'zbekiston Ovozi ko'chasi, 1A-bino, Farg'ona shahri",
    addressShort: "Farg'ona, O'zbekiston Ovozi 1A",
    phoneTitle: "Telefon raqami",
    workingHoursTitle: "Ish vaqti",
    workingHoursValue: "Dushanba - Shanba: 08:00 - 18:00 (Yakshanba - dam olish kuni)",
    workingHoursShort: "Dush–Shan: 08:00–18:00 · Yakshanba dam",
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
    articlesTitle: "Dermatologiya maqolalari — Farg'ona",
    articlesDesc: "Akne, psoriaz, vitiligo, IPL, lazer epilyatsiya va soch muammolari bo'yicha Radeski shifokorlari maslahatlari",
    videosTitle: "Klinika videolari",
    videosDesc: "Radeski klinikasidagi zamonaviy uskunalar, xizmatlar va bemor parvarishi haqida qisqa videolar",
    branchesTitle: "Filiallar — Farg'ona va Qo‘qon",
    branchesDesc: "Radeski: Farg'ona, Qo‘qon (dermatolog, IPL, lazer) va Belgiya (Liège) — manzil, telefon, ish vaqti",
    resultsTitle: "Davolash natijalari",
    resultsDesc: "Bemorlarimizdagi real o'zgarishlar — oldin va keyin. Har bir holat individual yondashuv asosida",
    searchPlaceholder: "Xizmatlar yoki maqolalarni qidirish...",
    experience: "Tajriba",
    education: "Ish joyi",
    specialization: "Mutaxassisligi",
    ratingsTitle: "Platforma reytinglarimiz",
    trustSectionDesc: "Google Maps, Yandex va 2GIS kabi mustaqil platformalardagi reytinglar bemorlarimizning haqiqiy tajribasini yoritadi. Quyida har bir manbadagi ball, sharhlar va qisqa xulosa keltirilgan.",
    trustCardSummaryLabel: "Xulosa",
    safetyTitle: "100% Steril va Xavfsiz Sharoit",
    safetyDesc: "Klinikamizda barcha asbob-uskunalar Yevropa standartlariga muvofiq ko'p bosqichli sterilizatsiyadan o'tkaziladi. Sizning xavfsizligingiz - bizning oliy maqsadimizdir.",
    years: "yil",
    yearsActive: "yillik tajriba",
    reviewsCount: "ko'rib chiqilgan fikrlar",
    seoTitle: "Dermatologiya Farg'ona | Radeski Skin Clinic — kosmetologiya, IPL, lazer",
    seoText: "Radeski — Farg'onadagi dermatologiya va kosmetologiya klinikasi. IPL, lazer epilyatsiya, dermatoskopiya, fototerapiya, botoks va Mohs mikrografik jarrohligi bilan xizmat ko'rsatamiz.",
    aboutHeader: "Dermatologiya Farg'ona — Radeski Skin Clinic",
    aboutParagraph1: "Radeski Skin & Aesthetic Clinic dermatologiya, kosmetologiya va dermato-onkologiya sohalarida Farg'ona va butun vodiyda yuqori sifat standartlariga ega tibbiy xizmatlarni taqdim etadi.",
    aboutParagraph2: "Klinikamiz Germaniya, Italiya va AQShning yetakchi kompaniyalari ishlab chiqargan eng so'nggi va xavfsiz apparat va texnologiyalardan foydalanadi. Ashurov Dilshod Davlatovich boshchiligidagi shifokorlar guruhi muntazam ravishda Yevropa va MDH mamlakatlarida xalqaro sertifikatlardan o'tishadi.",
    features01: "Professional shifokorlar",
    features01Desc: "Xalqaro darajadagi dermatologlar va kosmetologlar jamoasi.",
    features02: "Zamonaviy texnologiyalar",
    features02Desc: "O'zbekistonda Sciton IPL va ilg'or lazer uskunalaridan foydalanish.",
    features03: "Yuqori darajadagi sterilizatsiya",
    features03Desc: "Yevropa tibbiyot standartlariga to'la mos keladigan steril xonalar.",
    features04: "Turli xil apparatlar",
    features04Desc: "Teri diagnostikasi, davolash va kosmetologiya uchun keng ko'lamli apparatlar assortimenti.",
    beBeautiful: "Chiroyli va sog'lom bo'ling",
    beBeautifulDesc: "Teri sog'lig'i bo'yicha maslahat olish uchun ma'lumotlaringizni qoldiring va biz sizga tez orada aloqaga chiqamiz.",
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
    navVideos: "Видео",
    navBranches: "Филиалы",
    navResults: "Результаты",
    navTerms: "Пользовательское соглашение",
    navPrivacy: "Политика конфиденциальности",
    appointmentBtn: "Записаться на прием",
    callRequestedBtn: "Заказать обратный звонок",
    addressTitle: "Адрес клиники",
    addressValue: "г. Фергана, улица Узбекистон Овози, дом 1А",
    addressShort: "г. Фергана, ул. Узбекистон Овози, 1А",
    phoneTitle: "Номер телефона",
    workingHoursTitle: "Рабочее время",
    workingHoursValue: "Понедельник - Суббота: 08:00 - 18:00 (Воскресенье - выходной)",
    workingHoursShort: "Пн–Сб: 08:00–18:00 · Вс выходной",
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
    articlesTitle: "Статьи по дерматологии — Фергана",
    articlesDesc: "Рекомендации врачей Radeski: акне, псориаз, витилиго, IPL, лазерная эпиляция и лечение волос",
    videosTitle: "Видео о клинике",
    videosDesc: "Короткие ролики об оборудовании, услугах и заботе о пациентах в клинике Radeski",
    branchesTitle: "Филиалы — Фергана и Коканд",
    branchesDesc: 'Radeski: Фергана, Коканд (дерматолог, IPL, лазер) и Бельгия (Льеж) — адреса, телефон, график',
    resultsTitle: "Результаты лечения",
    resultsDesc: "Реальные изменения у наших пациентов — до и после. Каждый случай индивидуален",
    searchPlaceholder: "Поиск услуг или статей...",
    experience: "Опыт работы",
    education: "Место работы",
    specialization: "Специализация",
    ratingsTitle: "Рейтинги клиники",
    trustSectionDesc: "Рейтинги на независимых платформах — Google Maps, Yandex и 2GIS — отражают реальный опыт наших пациентов. Ниже — оценка, число отзывов и краткий вывод по каждому источнику.",
    trustCardSummaryLabel: "Вывод",
    safetyTitle: "100% Стерильность и Безопасность",
    safetyDesc: "В нашей клинике все инструменты проходят многоступенчатую стерилизацию в соответствии с европейскими стандартами. Ваша безопасность - наш главный приоритет.",
    years: "лет",
    yearsActive: "лет практики",
    reviewsCount: "проверенных отзывов",
    seoTitle: "Дерматология Фергана | Radeski Skin Clinic — косметология, IPL, лазер",
    seoText: "Radeski — клиника дерматологии и косметологии в Фергане. IPL, лазерная эпиляция, дерматоскопия, фототерапия, ботокс и хирургия Mohs.",
    aboutHeader: "Дерматология Фергана — Radeski Skin Clinic",
    aboutParagraph1: "Radeski Skin & Aesthetic Clinic предлагает медицинские услуги высочайших стандартов в области дерматологии, косметологии и дерматоонкологии в Фергане и по всей Ферганской долине.",
    aboutParagraph2: "Наша клиника оснащена самым современным и безопасным оборудованием от ведущих производителей Германии, Италии и США. Команда врачей под руководством Ашурова Дильшода Давлатовича регулярно проходит стажировки и сертификации в Европе и странах СНГ.",
    features01: "Профессиональные врачи",
    features01Desc: "Команда дерматологов и косметологов международного уровня.",
    features02: "Современные технологии",
    features02Desc: "Применение систем IPL Sciton и передового лазерного оборудования в Узбекистане.",
    features03: "Высочайшая стерильность",
    features03Desc: "Стерилизационные боксы, полностью соответствующие европейским медицинским регламентам.",
    features04: "Разнообразные аппараты",
    features04Desc: "Широкий выбор оборудования для диагностики, лечения и аппаратной косметологии.",
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
    navVideos: "Videos",
    navBranches: "Branches",
    navResults: "Results",
    navTerms: "Terms of Use",
    navPrivacy: "Privacy Policy",
    appointmentBtn: "Book Appointment",
    callRequestedBtn: "Request a Call",
    addressTitle: "Clinic Address",
    addressValue: "1A Uzbekiston Ovozi Street, Fergana City",
    addressShort: "Fergana, 1A Uzbekiston Ovozi St.",
    phoneTitle: "Phone Number",
    workingHoursTitle: "Working Hours",
    workingHoursValue: "Monday - Saturday: 08:00 - 18:00 (Sunday - Closed)",
    workingHoursShort: "Mon–Sat: 08:00–18:00 · Sun closed",
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
    articlesTitle: "Dermatology articles — Fergana",
    articlesDesc: "Advice from Radeski doctors on acne, psoriasis, vitiligo, IPL, laser hair removal and hair treatments",
    videosTitle: "Clinic videos",
    videosDesc: "Short videos about Radeski equipment, services, and patient care standards",
    branchesTitle: "Branches — Fergana and Kokand",
    branchesDesc: 'Radeski: Fergana, Kokand (dermatologist, IPL, laser), and Belgium (Liège) — address, phone, hours',
    resultsTitle: "Treatment results",
    resultsDesc: "Real patient improvements — before and after. Every case follows an individual plan",
    searchPlaceholder: "Search services or articles...",
    experience: "Experience",
    education: "Workplace",
    specialization: "Specialization",
    ratingsTitle: "Our Ratings",
    trustSectionDesc: "Ratings on independent platforms — Google Maps, Yandex, and 2GIS — reflect our patients' real experiences. Below are the score, review count, and a brief conclusion for each source.",
    trustCardSummaryLabel: "Summary",
    safetyTitle: "100% Sterile & Safe Environment",
    safetyDesc: "All instruments in our facility undergo multi-stage disinfection matching rigorous European clinical directives. Your health safety is our absolute focus.",
    years: "years",
    yearsActive: "years of experience",
    reviewsCount: "verified testimonials",
    seoTitle: "Dermatology Fergana | Radeski Skin Clinic — cosmetology, IPL, laser",
    seoText: "Radeski Skin Clinic in Fergana: dermatology, IPL, laser hair removal, dermatoscopy, phototherapy, Botox and Mohs surgery.",
    aboutHeader: "Dermatology Fergana — Radeski Skin Clinic",
    aboutParagraph1: "Radeski Skin & Aesthetic Clinic provides premier medical services in clinical dermatology, aesthetic cosmetology, and dermato-oncology across regional Fergana.",
    aboutParagraph2: "Our facility is equipped with state-of-the-art clinical devices from world leaders in Germany, Italy, and the USA. Led by Dr. Dilshod Davlatovich Ashurov, our specialized medical team is regularly trained and certified at European and international institutes.",
    features01: "Professional Physicians",
    features01Desc: "International-class dermatologists and aesthetic cosmetologists.",
    features02: "Modern Technologies",
    features02Desc: "Exclusive clinical application of Sciton IPL and advanced laser systems in Uzbekistan.",
    features03: "High-grade Disinfection",
    features03Desc: "Clean sterilization facilities matching global healthcare parameters.",
    features04: "Diverse Clinical Devices",
    features04Desc: "A wide range of equipment for diagnostics, treatment, and hardware cosmetology.",
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

export const CLINIC_RATING_SUMMARIES: Record<string, { uz: string; ru: string; en: string }> = {
  Yandex: {
    uz: "Yandex'dagi 4.9 ball va 120 dan ortiq sharh bemorlar qabuldan keyin xizmat sifatini yuqori baholaganini ko'rsatadi. Ko'p fikrlarda shifokorlar bilimi, e'tibor va davolash natijasi alohida qayd etilgan.",
    ru: "Оценка 4,9 и более 120 отзывов на Yandex показывает, что пациенты высоко ценят качество приёма. В отзывах часто отмечают профессионализм врачей, внимание и результат лечения.",
    en: "A 4.9 score and 120+ Yandex reviews show patients consistently rate our care highly. Reviews often highlight physician expertise, attentive service, and treatment outcomes.",
  },
  'Google Maps': {
    uz: "Google Maps'dagi 4.8 reyting va 85+ sharh klinika manzili, ish vaqti va xizmatlar ro'yxatining aniq ekanini tasdiqlaydi. Xalqaro mehmonlar ham xizmat sifati va shaffoflik haqida ijobiy fikr qoldirgan.",
    ru: "Рейтинг 4,8 и 85+ отзывов на Google Maps подтверждают точность адреса, графика и перечня услуг. Многие отзывы, в том числе от иностранных пациентов, отмечают качество и прозрачность сервиса.",
    en: "A 4.8 rating and 85+ Google Maps reviews confirm accurate location, hours, and service listings. Many reviewers, including international visitors, praise our care quality and transparency.",
  },
  '2GIS': {
    uz: "2GIS'dagi 4.9 ball va 96+ sharh mahalliy bemorlar klinikamizni oson topishlari va xizmatlar haqida to'liq ma'lumot olishlarini ko'rsatadi. Sharhlarda tez yozilish va do'stona qabul ko'p tilga olinadi.",
    ru: "Оценка 4,9 и 96+ отзывов в 2GIS показывают, что местные пациенты легко находят клинику и видят полный список услуг. В отзывах часто хвалят быструю запись и доброжелательный приём.",
    en: "A 4.9 score and 96+ 2GIS reviews show local patients find us easily and see complete service information. Reviews frequently mention quick booking and a welcoming reception.",
  },
};

export function getClinicRatingSummary(
  platform: string,
  locale: 'uz' | 'ru' | 'en',
  apiSummary?: { uz: string; ru: string; en: string },
): string {
  const fromApi = apiSummary?.[locale]?.trim() || apiSummary?.uz?.trim();
  if (fromApi) return fromApi;

  const direct = CLINIC_RATING_SUMMARIES[platform];
  if (direct) return direct[locale] || direct.uz;

  const matchedKey = Object.keys(CLINIC_RATING_SUMMARIES).find((key) => {
    const a = key.toLowerCase();
    const b = platform.toLowerCase();
    return a === b || a.includes(b) || b.includes(a);
  });

  if (matchedKey) {
    const summary = CLINIC_RATING_SUMMARIES[matchedKey];
    return summary[locale] || summary.uz;
  }

  return '';
}

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
      uz: "Rossiya va Germaniyada malaka oshirgan, ko'p yillik professional tajribaga ega dermatoonkolog. Teri xavfli o'smalarining erta diagnostikasi (dermatoskopiya) va davolash bo'yicha mutaxassis.",
      ru: "Прошел повышение квалификации в России и Германии. Специалист международного уровня по ранней диагностике новообразований кожи с помощью дерматоскопии и дерматохирургии.",
      en: "Specialized in advanced dermato-oncology and clinical dermatoscopy trained in Germany and Russia. Active member of European Academy of Dermatology."
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
      uz: "Inyeksion va apparatli kosmetologiya mutaxassisi. IPL foto-yangilashni gen darajasida qo'llash va yoshartirish protokollarini amalga oshiradi.",
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
      uz: "Uskuna kosmetologiyasi bo'yicha sertifikatlangan mutaxassis. Lazer epilyatsiyasi va foto-yangilashni yuqori darajada olib boradi.",
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
      uz: "Andijon Davlat Tibbiyot Instituti, Moskva soch kasalliklarini davolash bo'yicha trixologiya markazi maxsus diplomi.",
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
      uz: "Farg'onada teri kasalliklarini diagnostika qilish va samarali tibbiy davolash (vitiligo, psoriaz, ekzema, toshmalar). Radeski dermatologiya bo'limi.",
      ru: "Диагностика и клиническое лечение заболеваний кожи в Фергане (псориаз, витилиго, экзема, акне). Отделение дерматологии Radeski.",
      en: "Medical diagnostics and treatment of skin diseases in Fergana (psoriasis, vitiligo, eczema, acne). Radeski dermatology department."
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
          uz: "Og'ir va surunkali teri kasalliklarini ilg'or biologik preparatlar bilan davolash.",
          ru: "Лечение тяжелых системных аутоиммунных патологий кожи с использованием современных таргетных биопрепаратов.",
          en: "High-level advanced biologic agent targeting of chronic auto-immune dermatological diseases."
        }
      }
    ]
  },
  {
    id: "apparatnaya-kosmetologiya",
    title: {
      uz: "Apparatli kosmetologiyasi",
      ru: "Аппаратная косметология",
      en: "Device-based cosmetology"
    },
    description: {
      uz: "Farg'onada Radeski apparatlari: IPL foto-yangilash (InMode), lazer biorevitalizatsiya va ultratovush tozalash — apparatli kosmetologiya.",
      ru: "Аппаратная косметология в Фергане: фотоомоложение IPL (InMode), лазерная биоревитализация и ультразвуковая чистка в клинике Radeski.",
      en: "Device-based cosmetology in Fergana: IPL photo-rejuvenation (InMode), laser biorevitalization, and ultrasonic cleansing at Radeski."
    },
    icon: "WandSparkles",
    subServices: [
      {
        id: "ipl-inmode",
        name: { uz: "IPL foto-yangilash (InMode)", ru: "Фотоомоложение IPL (InMode)", en: "IPL photo-rejuvenation (InMode)" },
        description: {
          uz: "InMode IPL — pigmentatsiya, qon tomirlari va teri tonini jarrohliksiz yaxshilash.",
          ru: "InMode IPL — безоперационное улучшение пигментации, сосудов и тона кожи.",
          en: "InMode IPL — non-surgical improvement of pigmentation, vessels and skin tone."
        }
      },
      {
        id: "hollywood-spectra",
        name: { uz: "Hollywood Spectra (Lutronic)", ru: "Hollywood Spectra (Lutronic)", en: "Hollywood Spectra (Lutronic)" },
        description: {
          uz: "Q-switch lazer — pigmentatsiya, post-akne va teri yangilanishi protokollari.",
          ru: "Q-switch лазер — протоколы лечения пигментации, постакне и обновления кожи.",
          en: "Q-switch laser — pigmentation, post-acne and skin renewal protocols."
        }
      },
      {
        id: "lazer-biorev",
        name: { uz: "Lazer biorevitalizatsiya", ru: "Лазерная биоревитализация", en: "Laser biorevitalization" },
        description: {
          uz: "Lazer energiyasi bilan chuqur namlantirish va teri tiklanishi — elastiklik va yorqinlikni qaytarish.",
          ru: "Глубокое увлажнение и восстановление кожи лазерной энергией — возвращение эластичности и сияния.",
          en: "Deep hydration and skin renewal with laser energy — restoring elasticity and radiance."
        }
      },
      {
        id: "ultratovush-yuz",
        name: { uz: "Ultratovush yuz tozalash", ru: "Ультразвуковая чистка лица", en: "Ultrasonic facial cleansing" },
        description: {
          uz: "Professional ultratovush apparati bilan chuqur yuz tozalash: poralar, qora nuqtalar va teri matligini bartaraf etish.",
          ru: "Профессиональная ультразвуковая чистка лица: поры, чёрные точки и тусклость кожи.",
          en: "Professional ultrasonic deep facial cleansing for pores, blackheads, and dull skin."
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
      uz: "Farg'onada professional lazer epilyatsiya — istalmagan sochlarni og'riqsiz yo'qotish. Radeski Skin Clinic.",
      ru: "Лазерная эпиляция в Фергане — безопасное удаление нежелательных волос. Клиника Radeski.",
      en: "Laser hair removal in Fergana — safe clinical epilation at Radeski Skin Clinic."
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
      uz: "Soch kasalliklarini davolash - trixologiya",
      ru: "Лечение волос - Трихология",
      en: "Trichology - Hair & Scalp Treatment"
    },
    description: {
      uz: "Farg'onada trixologiya: soch to'kilishini tashxislash, trixoskopiya, mezoterapiya va PRP.",
      ru: "Трихология в Фергане: диагностика выпадения волос, трихоскопия, мезотерапия и PRP.",
      en: "Trichology in Fergana: hair-loss diagnosis, trichoscopy, mesotherapy and PRP."
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
      uz: "Xollar (nevus), papilloma va xavfli o'smalarni (melanoma) erta aniqlash, diagnostika va monitoring.",
      ru: "Ранняя диагностика родинок, папиллом и злокачественных новообразований кожи (меланома). Скрининг и наблюдение.",
      en: "Early screening of skin spots, dysplastic nevi, and melanomas using modern dermoscopy markers and follow-up monitoring."
    },
    icon: "ScanEye",
    subServices: [
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
          uz: "Haqiqiy klinik holatlarda dermatoskopiya yordamida tashxis qo'yish amaliyotini o'rganish.",
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
          ru: "Микроскопический послойный анализ структуры клеток для верификации доброкачественности или злокачественности очагов.",
          en: "Stained tissue slide examination to rule out malignancies and confirm cellular health indicators."
        }
      }
    ]
  }
];

export const ARTICLES: Article[] = [
  ACNE_ARTICLE,
  POST_ACNE_ARTICLE,
  ROSACEA_ARTICLE,
  PRP_HAIR_ARTICLE,
  PLASMAPHERESIS_ARTICLE,
  DEKA_CO2_ARTICLE,
  DEKA_MOVEO_ARTICLE,
  HAIR_TRANSPLANT_CONTRAINDICATIONS_ARTICLE,
  VITILIGO_DAAVLIN_ARTICLE,
  PSORIASIS_DAAVLIN_KOKAND_ARTICLE,
  IPL_THERAPY_ARTICLE,
  PEDIATRIC_WARTS_CO2_DEKA_ARTICLE,
  ADULT_ACNE_ARTICLE,
];
