import type { Locale } from '../types';
import type { PageId } from '../routing/paths';

export type PageMeta = { title: string; desc: string; keywords: string };

/** Local modifiers for document title / H1 (search intent by language). */
export function localSeoSuffix(locale: Locale): string {
  if (locale === 'uz') return "Farg'ona";
  if (locale === 'ru') return 'Фергана';
  return 'Fergana';
}

export function buildServiceSeoTitle(name: string, locale: Locale): string {
  const city = localSeoSuffix(locale);
  if (locale === 'uz') {
    return `${name} — dermatologiya ${city} | Radeski Skin Clinic`;
  }
  if (locale === 'ru') {
    return `${name} — дерматолог ${city} | Radeski Skin Clinic`;
  }
  return `${name} — dermatology ${city} | Radeski Skin Clinic`;
}

export function buildArticleSeoTitle(title: string, locale: Locale): string {
  const city = localSeoSuffix(locale);
  if (locale === 'uz') {
    return `${title} | Radeski — dermatologiya ${city}`;
  }
  if (locale === 'ru') {
    return `${title} | Radeski — дерматология ${city}`;
  }
  return `${title} | Radeski — dermatology ${city}`;
}

export function buildServiceH1(name: string, locale: Locale): string {
  const city = localSeoSuffix(locale);
  if (locale === 'uz') return `${name} — ${city}`;
  if (locale === 'ru') return `${name} — ${city}`;
  return `${name} — ${city}`;
}

/** Tab-level SEO. Each locale uses its own search keywords. */
export const TAB_SEO: Record<Locale, Partial<Record<PageId, PageMeta>>> = {
  uz: {
    home: {
      title: "Dermatologiya Farg'ona | Radeski Skin Clinic — kosmetologiya, IPL, lazer",
      desc: "Radeski — Farg'onadagi dermatologiya va kosmetologiya klinikasi. IPL, lazer epilyatsiya, dermatoskopiya, fototerapiya, botoks va Mohs. Manzil: O'zbekiston Ovozi ko'chasi, 1A. Tel: +998 73 200-73-73.",
      keywords:
        "dermatologiya Farg'ona, dermatolog Farg'ona, kosmetologiya Farg'ona, Radeski, IPL, lazer epilyatsiya, dermatoskopiya, fototerapiya, botoks, psoriaz, vitiligo, Qo'qon",
    },
    about: {
      title: "Klinika haqida | Radeski Skin Clinic — dermatologiya Farg'ona",
      desc: "Radeski Skin Clinic tarixi, litsenziyalar va akkreditatsiya. Farg'ona vodiysida zamonaviy dermatologiya, kosmetologiya va dermato-onkologiya.",
      keywords: "Radeski klinika, dermatologiya Farg'ona, litsenziya, akkreditatsiya, Ashurov Dilshod",
    },
    services: {
      title: "Dermatologiya va kosmetologiya xizmatlari Farg'ona | Radeski",
      desc: "12 yo'nalish: dermatologiya, apparatli kosmetologiya, IPL, lazer epilyatsiya, trixologiya, inyeksiyalar, Mohs jarrohligi. Farg'ona va Qo'qon.",
      keywords:
        "dermatologiya xizmatlari Farg'ona, kosmetologiya Farg'ona, IPL, lazer epilyatsiya, trixologiya, botoks, fototerapiya",
    },
    doctors: {
      title: "Dermatolog Farg'ona — shifokorlar | Radeski Skin Clinic",
      desc: "Radeski shifokorlari: dermatovenerolog, dermatoonkolog, kosmetolog va lazer mutaxassislari. Ashurov Dilshod Davlatovich jamoasi.",
      keywords: "dermatolog Farg'ona, Radeski shifokorlari, Ashurov Dilshod, kosmetolog Farg'ona, trixolog",
    },
    prices: {
      title: "Narxlar — dermatologiya va kosmetologiya Farg'ona | Radeski",
      desc: "Radeski preyskuranti: konsultatsiya, IPL, lazer epilyatsiya, botoks va boshqa muolajalar narxlari Farg'onada.",
      keywords: "dermatolog narxi Farg'ona, IPL narxi, botoks narxi, kosmetologiya narxlari, preyskurant",
    },
    articles: {
      title: "Maqolalar — teri sog'ligi, akne, psoriaz | Radeski Farg'ona",
      desc: "Dermatologiya blogi: akne, psoriaz, vitiligo, IPL, lazer epilyatsiya va soch muammolari bo'yicha shifokor maqolalari.",
      keywords: "dermatologiya maqolalar, akne davolash, psoriaz, vitiligo, IPL terapiya, Farg'ona",
    },
    videos: {
      title: "Videolar — dermatologiya va muolajalar | Radeski Farg'ona",
      desc: "Radeski klinikasi videolari: IPL, fototerapiya, lazer va boshqa dermatologiya xizmatlari.",
      keywords: "Radeski video, dermatologiya video, IPL, klinika Farg'ona",
    },
    branches: {
      title: "Filiallar — Farg'ona, Qo‘qon, Belgiya | Radeski Skin Clinic",
      desc: "Radeski filiallari: Farg'ona, Qo‘qon va Rade Skin Clinic (Liège). Manzil, telefon va ish vaqti. Qo‘qon: dermatolog, IPL, lazer.",
      keywords: "Radeski filial, dermatolog Farg'ona, dermatolog Qo‘qon, klinika manzili, Rade Skin Clinic",
    },
    qoqon: {
      title: "Dermatolog Qo‘qon | Radeski Skin Clinic — kosmetologiya, IPL, lazer",
      desc: "Qo‘qonda Radeski Skin Clinic: dermatologiya, kosmetologiya, IPL, lazer epilyatsiya, fototerapiya. Manzil: 47-MFI, Huqandiy 144A. Tel: +998 95 210 73 73.",
      keywords:
        "dermatolog Qo‘qon, dermatologiya Qo‘qon, kosmetologiya Qo‘qon, IPL Qo‘qon, lazer epilyatsiya Qo‘qon, Radeski Qo‘qon, akne Qo‘qon",
    },
    results: {
      title: "Natijalar — oldin va keyin | Radeski Farg'ona",
      desc: "Akne, pigmentatsiya, IPL va trixologiya davolash natijalari — Radeski klinikasi galereyasi.",
      keywords: "davolash natijalari, oldin keyin, akne, IPL natija, Farg'ona",
    },
    technologies: {
      title: "Texnologiyalar — IPL, Mohs, Excimer | Radeski Farg'ona",
      desc: "Sciton IPL, Mohs mikrografik jarrohligi, Excimer va UVB fototerapiya — Radeski Skin Clinic.",
      keywords: "IPL Farg'ona, Mohs, Excimer, UVB fototerapiya, zamonaviy dermatologiya",
    },
    'clinic-equipment': {
      title: "Apparatlar — Daavlin, InMode, Lutronic | Radeski Farg'ona",
      desc: "Daavlin NeoLux, Aquex, InMode IPL, Derma V, Hollywood Spectra va plazmoforez — Radeski apparatlar parki.",
      keywords: "Daavlin Farg'ona, InMode IPL, Hollywood Spectra, fototerapiya apparati, klinika jihozlari",
    },
    terms: {
      title: "Foydalanish shartlari | Radeski Skin Clinic",
      desc: "Radeski.uz saytidan foydalanish qoidalari va foydalanuvchi shartlari.",
      keywords: "Foydalanish shartlari, Radeski, veb-sayt qoidalari",
    },
    privacy: {
      title: "Maxfiylik siyosati | Radeski Skin Clinic",
      desc: "Shaxsiy ma'lumotlarni qanday to'plash va himoya qilishimiz haqida Radeski maxfiylik siyosati.",
      keywords: "Maxfiylik siyosati, shaxsiy ma'lumotlar, Radeski",
    },
  },
  ru: {
    home: {
      title: "Дерматология Фергана | Radeski Skin Clinic — косметология, IPL, лазер",
      desc: "Radeski — клиника дерматологии и косметологии в Фергане. IPL, лазерная эпиляция, дерматоскопия, фототерапия, ботокс и Mohs. Адрес: ул. Узбекистон Овози, 1A. Тел: +998 73 200-73-73.",
      keywords:
        "дерматолог Фергана, дерматология Фергана, косметология Фергана, Radeski, IPL, лазерная эпиляция, фототерапия, ботокс, Коканд",
    },
    about: {
      title: "О клинике | Radeski Skin Clinic — дерматология Фергана",
      desc: "История, лицензии и аккредитация Radeski Skin Clinic. Современная дерматология и косметология в Ферганской долине.",
      keywords: "клиника Radeski, дерматолог Фергана, лицензия, аккредитация, Ашуров Дильшод",
    },
    services: {
      title: "Услуги дерматологии и косметологии Фергана | Radeski",
      desc: "12 направлений: дерматология, аппаратная косметология, IPL, лазерная эпиляция, трихология, инъекции, хирургия Mohs.",
      keywords:
        "услуги дерматолога Фергана, косметология Фергана, IPL, лазерная эпиляция, трихология, ботокс, фототерапия",
    },
    doctors: {
      title: "Дерматолог Фергана — врачи клиники | Radeski",
      desc: "Врачи Radeski: дерматовенерологи, дерматоонкологи, косметологи и лазерные специалисты.",
      keywords: "дерматолог Фергана, врачи Radeski, Ашуров Дильшод, косметолог Фергана, трихолог",
    },
    prices: {
      title: "Цены — дерматология и косметология Фергана | Radeski",
      desc: "Прейскурант Radeski: консультации, IPL, лазерная эпиляция, ботокс и другие процедуры в Фергане.",
      keywords: "цена дерматолога Фергана, цена IPL, ботокс цена, прейскурант косметологии",
    },
    articles: {
      title: "Статьи — кожа, акне, псориаз | Radeski Фергана",
      desc: "Блог дерматологии: акне, псориаз, витилиго, IPL, лазерная эпиляция и лечение волос.",
      keywords: "статьи дерматология, лечение акне, псориаз, витилиго, IPL терапия, Фергана",
    },
    videos: {
      title: "Видео — процедуры и клиника | Radeski Фергана",
      desc: "Видеоматериалы клиники Radeski: IPL, фототерапия, лазер и другие услуги.",
      keywords: "видео Radeski, дерматология видео, IPL, клиника Фергана",
    },
    branches: {
      title: "Филиалы — Фергана, Коканд, Бельгия | Radeski",
      desc: "Филиалы Radeski в Фергане, Коканде и Rade Skin Clinic в Льеже (Бельгия). Дерматолог и косметология в Коканде.",
      keywords: "филиал Radeski, дерматолог Фергана, дерматолог Коканд, адрес клиники",
    },
    qoqon: {
      title: "Дерматолог Коканд | Radeski Skin Clinic — косметология, IPL, лазер",
      desc: "Клиника Radeski в Коканде: дерматология, косметология, IPL, лазерная эпиляция, фототерапия. Адрес: 47-МФЙ, Хукандий 144А. Тел: +998 95 210 73 73.",
      keywords:
        "дерматолог Коканд, дерматология Коканд, косметология Коканд, IPL Коканд, лазерная эпиляция Коканд, Radeski Коканд, акне Коканд",
    },
    results: {
      title: "Результаты — до и после | Radeski Фергана",
      desc: "Галерея результатов лечения акне, пигментации, IPL и трихологии в клинике Radeski.",
      keywords: "результаты лечения, до и после, акне, IPL результат, Фергана",
    },
    technologies: {
      title: "Технологии — IPL, Mohs, Excimer | Radeski Фергана",
      desc: "Sciton IPL, хирургия Mohs, эксимерный лазер и UVB-фототерапия в клинике Radeski.",
      keywords: "IPL Фергана, Mohs, Excimer, UVB фототерапия, современная дерматология",
    },
    'clinic-equipment': {
      title: "Аппараты — Daavlin, InMode, Lutronic | Radeski Фергана",
      desc: "Daavlin NeoLux, Aquex, InMode IPL, Derma V, Hollywood Spectra и плазмофорез.",
      keywords: "Daavlin Фергана, InMode IPL, Hollywood Spectra, фототерапия, аппараты клиники",
    },
    terms: {
      title: "Пользовательское соглашение | Radeski Skin Clinic",
      desc: "Правила использования сайта Radeski.uz.",
      keywords: "пользовательское соглашение, Radeski, правила сайта",
    },
    privacy: {
      title: "Политика конфиденциальности | Radeski Skin Clinic",
      desc: "Как клиника Radeski обрабатывает и защищает персональные данные.",
      keywords: "политика конфиденциальности, персональные данные, Radeski",
    },
  },
  en: {
    home: {
      title: "Dermatology Fergana | Radeski Skin Clinic — cosmetology, IPL, laser",
      desc: "Radeski Skin Clinic in Fergana: dermatology, IPL, laser hair removal, dermatoscopy, phototherapy, Botox and Mohs. Address: Uzbekistan Ovozi St., 1A. Tel: +998 73 200-73-73.",
      keywords:
        "dermatologist Fergana, dermatology Fergana, cosmetology Fergana, Radeski, IPL, laser hair removal, phototherapy, Botox, Kokand",
    },
    about: {
      title: "About the clinic | Radeski Skin Clinic — dermatology Fergana",
      desc: "History, licensing and accreditation of Radeski Skin Clinic in the Fergana Valley.",
      keywords: "Radeski clinic, dermatologist Fergana, license, accreditation, Dilshod Ashurov",
    },
    services: {
      title: "Dermatology & cosmetology services Fergana | Radeski",
      desc: "12 specialties: dermatology, device cosmetology, IPL, laser hair removal, trichology, injectables and Mohs surgery.",
      keywords:
        "dermatology services Fergana, cosmetology Fergana, IPL, laser hair removal, trichology, Botox, phototherapy",
    },
    doctors: {
      title: "Dermatologist Fergana — doctors | Radeski Skin Clinic",
      desc: "Radeski physicians: dermatologists, dermato-oncologists, cosmetologists and laser specialists.",
      keywords: "dermatologist Fergana, Radeski doctors, Dilshod Ashurov, cosmetologist Fergana",
    },
    prices: {
      title: "Prices — dermatology & cosmetology Fergana | Radeski",
      desc: "Radeski price list: consultations, IPL, laser hair removal, Botox and more in Fergana.",
      keywords: "dermatologist price Fergana, IPL price, Botox cost, cosmetology prices",
    },
    articles: {
      title: "Articles — skin health, acne, psoriasis | Radeski Fergana",
      desc: "Dermatology blog: acne, psoriasis, vitiligo, IPL, laser hair removal and hair treatments.",
      keywords: "dermatology articles, acne treatment, psoriasis, vitiligo, IPL therapy, Fergana",
    },
    videos: {
      title: "Videos — clinic & procedures | Radeski Fergana",
      desc: "Radeski clinic videos on IPL, phototherapy, laser and dermatology services.",
      keywords: "Radeski video, dermatology video, IPL, clinic Fergana",
    },
    branches: {
      title: "Branches — Fergana, Kokand, Belgium | Radeski",
      desc: "Radeski branches in Fergana, Kokand and Rade Skin Clinic in Liège, Belgium. Dermatologist and cosmetology in Kokand.",
      keywords: "Radeski branch, dermatologist Fergana, dermatologist Kokand, clinic address",
    },
    qoqon: {
      title: "Dermatologist Kokand | Radeski Skin Clinic — cosmetology, IPL, laser",
      desc: "Radeski Skin Clinic in Kokand: dermatology, cosmetology, IPL, laser hair removal, phototherapy. Address: 47-MFI, Huqandiy 144A. Tel: +998 95 210 73 73.",
      keywords:
        "dermatologist Kokand, dermatology Kokand, cosmetology Kokand, IPL Kokand, laser hair removal Kokand, Radeski Kokand, acne Kokand",
    },
    results: {
      title: "Results — before and after | Radeski Fergana",
      desc: "Treatment results gallery: acne, pigmentation, IPL and trichology at Radeski.",
      keywords: "treatment results, before after, acne, IPL results, Fergana",
    },
    technologies: {
      title: "Technologies — IPL, Mohs, Excimer | Radeski Fergana",
      desc: "Sciton IPL, Mohs micrographic surgery, Excimer and UVB phototherapy at Radeski.",
      keywords: "IPL Fergana, Mohs, Excimer, UVB phototherapy, modern dermatology",
    },
    'clinic-equipment': {
      title: "Equipment — Daavlin, InMode, Lutronic | Radeski Fergana",
      desc: "Daavlin NeoLux, Aquex, InMode IPL, Derma V, Hollywood Spectra and plasmapheresis.",
      keywords: "Daavlin Fergana, InMode IPL, Hollywood Spectra, phototherapy devices",
    },
    terms: {
      title: "Terms of Use | Radeski Skin Clinic",
      desc: "Rules for using the Radeski.uz website.",
      keywords: "terms of use, Radeski, website rules",
    },
    privacy: {
      title: "Privacy Policy | Radeski Skin Clinic",
      desc: "How Radeski collects, stores and protects personal data.",
      keywords: "privacy policy, personal data, Radeski",
    },
  },
};

export function getTabSeo(locale: Locale, page: PageId): PageMeta {
  return (
    TAB_SEO[locale]?.[page] ||
    TAB_SEO.uz.home || {
      title: 'Radeski Skin Clinic',
      desc: "Dermatologiya va kosmetologiya klinikasi Farg'onada.",
      keywords: "dermatologiya Farg'ona, Radeski",
    }
  );
}
