import type { Locale } from '../types';
import type { PageId } from '../routing/paths';

export type PageMeta = { title: string; desc: string; keywords: string };

/** Primary city (legacy helpers / short labels). */
export function localSeoSuffix(locale: Locale): string {
  if (locale === 'uz') return "Farg'ona";
  if (locale === 'ru') return 'Фергана';
  return 'Fergana';
}

/** Dual-city block for titles: Farg'ona | Qo'qon */
export function localSeoCities(locale: Locale): string {
  if (locale === 'uz') return "Farg'ona | Qo'qon";
  if (locale === 'ru') return 'Фергана | Коканд';
  return 'Fergana | Kokand';
}

export function localSeoKokand(locale: Locale): string {
  if (locale === 'uz') return "Qo'qon";
  if (locale === 'ru') return 'Коканд';
  return 'Kokand';
}

export function buildServiceSeoTitle(name: string, locale: Locale): string {
  const cities = localSeoCities(locale);
  if (locale === 'uz') {
    return `${name} — dermatologiya ${cities} | Radeski Skin Clinic`;
  }
  if (locale === 'ru') {
    return `${name} — дерматолог ${cities} | Radeski Skin Clinic`;
  }
  return `${name} — dermatology ${cities} | Radeski Skin Clinic`;
}

export function buildArticleSeoTitle(title: string, locale: Locale): string {
  const cities = localSeoCities(locale);
  if (locale === 'uz') {
    return `${title} | Radeski — dermatologiya ${cities}`;
  }
  if (locale === 'ru') {
    return `${title} | Radeski — дерматология ${cities}`;
  }
  return `${title} | Radeski — dermatology ${cities}`;
}

export function buildServiceH1(name: string, locale: Locale): string {
  const cities = localSeoCities(locale);
  if (locale === 'uz') return `${name} — ${cities}`;
  if (locale === 'ru') return `${name} — ${cities}`;
  return `${name} — ${cities}`;
}

/** Tab-level SEO. Each locale uses its own search keywords. */
export const TAB_SEO: Record<Locale, Partial<Record<PageId, PageMeta>>> = {
  uz: {
    home: {
      title: "Radeski Skin Clinic — kosmetologiya, IPL, lazer",
      desc: "Radeski Skin Clinic — teri, estetika va kosmetologiya: IPL, lazer epilyatsiya, fototerapiya, botoks, dermatoskopiya va Mohs. Tel: +998 73 200-73-73.",
      keywords:
        "Radeski Skin Clinic, kosmetologiya, IPL, lazer epilyatsiya, fototerapiya, botoks, teri klinikasi, estetika",
    },
    about: {
      title: "Klinika haqida | Radeski Skin Clinic — dermatologiya Farg'ona | Qo'qon",
      desc: "Radeski Skin Clinic tarixi, litsenziyalar va akkreditatsiya. Farg'ona va Qo'qonda zamonaviy dermatologiya, kosmetologiya va dermato-onkologiya.",
      keywords: "Radeski klinika, dermatologiya Farg'ona, dermatologiya Qo'qon, litsenziya, akkreditatsiya, Ashurov Dilshod",
    },
    services: {
      title: "Dermatologiya va kosmetologiya xizmatlari Farg'ona | Qo'qon | Radeski",
      desc: "12 yo'nalish: dermatologiya, apparatli kosmetologiya, IPL, lazer epilyatsiya, trixologiya, inyeksiyalar, Mohs jarrohligi. Farg'ona va Qo'qon.",
      keywords:
        "dermatologiya xizmatlari Farg'ona, kosmetologiya Qo'qon, IPL Farg'ona, lazer epilyatsiya Qo'qon, trixologiya, botoks, fototerapiya",
    },
    doctors: {
      title: "Dermatolog Farg'ona | Qo'qon — shifokorlar | Radeski Skin Clinic",
      desc: "Radeski shifokorlari: dermatovenerolog, dermatoonkolog, kosmetolog va lazer mutaxassislari. Ashurov Dilshod Davlatovich jamoasi — Farg'ona va Qo'qon.",
      keywords: "dermatolog Farg'ona, dermatolog Qo'qon, Radeski shifokorlari, Ashurov Dilshod, kosmetolog Farg'ona, trixolog",
    },
    prices: {
      title: "Narxlar — dermatologiya va kosmetologiya Farg'ona | Qo'qon | Radeski",
      desc: "Radeski preyskuranti: konsultatsiya, IPL, lazer epilyatsiya, botoks va boshqa muolajalar narxlari Farg'ona va Qo'qonda.",
      keywords: "dermatolog narxi Farg'ona, dermatolog narxi Qo'qon, IPL narxi, botoks narxi, kosmetologiya narxlari, preyskurant",
    },
    articles: {
      title: "Maqolalar — teri sog'ligi, akne, psoriaz | Radeski Farg'ona | Qo'qon",
      desc: "Dermatologiya blogi: akne, psoriaz, vitiligo, IPL, lazer epilyatsiya va soch muammolari — Farg'ona va Qo'qon bemorlari uchun.",
      keywords: "dermatologiya maqolalar, akne davolash, psoriaz, vitiligo, IPL terapiya, Farg'ona, Qo'qon",
    },
    videos: {
      title: "Videolar — dermatologiya va muolajalar | Radeski Farg'ona | Qo'qon",
      desc: "Radeski klinikasi videolari: IPL, fototerapiya, lazer va boshqa dermatologiya xizmatlari — Farg'ona | Qo'qon.",
      keywords: "Radeski video, dermatologiya video, IPL, klinika Farg'ona, klinika Qo'qon",
    },
    branches: {
      title: "Filiallar — Farg'ona | Qo'qon | Belgiya | Radeski Skin Clinic",
      desc: "Radeski filiallari: Farg'ona, Qo'qon va Rade Skin Clinic (Liège). Manzil, telefon va ish vaqti. Qo'qon: dermatolog, IPL, lazer.",
      keywords: "Radeski filial, dermatolog Farg'ona, dermatolog Qo'qon, klinika manzili, Rade Skin Clinic",
    },
    qoqon: {
      title: "Dermatolog Qo'qon | Farg'ona | Radeski Skin Clinic — kosmetologiya, IPL, lazer",
      desc: "Qo'qonda Radeski Skin Clinic: dermatologiya, kosmetologiya, IPL, lazer epilyatsiya, fototerapiya. Manzil: 47-MFI, Huqandiy 144A. Tel: +998 95 210 73 73. Farg'ona filiali ham mavjud.",
      keywords:
        "dermatolog Qo'qon, dermatologiya Qo'qon, kosmetologiya Qo'qon, IPL Qo'qon, lazer epilyatsiya Qo'qon, Radeski Qo'qon, dermatolog Farg'ona, akne Qo'qon",
    },
    results: {
      title: "Natijalar — oldin va keyin | Radeski Farg'ona | Qo'qon",
      desc: "Akne, pigmentatsiya, IPL va trixologiya davolash natijalari — Radeski klinikasi galereyasi (Farg'ona | Qo'qon).",
      keywords: "davolash natijalari, oldin keyin, akne, IPL natija, Farg'ona, Qo'qon",
    },
    technologies: {
      title: "Texnologiyalar — IPL, Mohs, Excimer | Radeski Farg'ona | Qo'qon",
      desc: "Sciton IPL, Mohs mikrografik jarrohligi, Excimer va UVB fototerapiya — Radeski Skin Clinic Farg'ona va Qo'qon.",
      keywords: "IPL Farg'ona, IPL Qo'qon, Mohs, Excimer, UVB fototerapiya, zamonaviy dermatologiya",
    },
    'clinic-equipment': {
      title: "Apparatlar — Daavlin, InMode, Lutronic | Radeski Farg'ona | Qo'qon",
      desc: "Daavlin NeoLux, Aquex, InMode IPL, Derma V, Hollywood Spectra va plazmoforez — Radeski apparatlar parki.",
      keywords: "Daavlin Farg'ona, InMode IPL Qo'qon, Hollywood Spectra, fototerapiya apparati, klinika jihozlari",
    },
    'daavlin-foto-kabinalari': {
      title: "Daavlin Foto kabinalari — NB-UVB fototerapiya | Radeski Farg'ona | Qo'qon",
      desc: "Narrowband UVB (311–313 nm) fototerapiya Daavlin kabinalarida: psoriaz, vitiligo, ekzema va boshqa surunkali teri kasalliklari. Radeski Skin Clinic.",
      keywords: "Daavlin fototerapiya, NB-UVB, foto kabina, psoriaz, vitiligo, ekzema, Farg'ona, Qo'qon",
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
      title: "Radeski Skin Clinic — косметология, IPL, лазер",
      desc: "Radeski Skin Clinic — кожа, эстетика и косметология: IPL, лазерная эпиляция, фототерапия, ботокс, дерматоскопия и Mohs. Тел: +998 73 200-73-73.",
      keywords:
        "Radeski Skin Clinic, косметология, IPL, лазерная эпиляция, фототерапия, ботокс, клиника кожи, эстетика",
    },
    about: {
      title: "О клинике | Radeski Skin Clinic — дерматология Фергана | Коканд",
      desc: "История, лицензии и аккредитация Radeski Skin Clinic. Современная дерматология и косметология в Фергане и Коканде.",
      keywords: "клиника Radeski, дерматолог Фергана, дерматолог Коканд, лицензия, аккредитация, Ашуров Дильшод",
    },
    services: {
      title: "Услуги дерматологии и косметологии Фергана | Коканд | Radeski",
      desc: "12 направлений: дерматология, аппаратная косметология, IPL, лазерная эпиляция, трихология, инъекции, хирургия Mohs — Фергана и Коканд.",
      keywords:
        "услуги дерматолога Фергана, косметология Коканд, IPL Фергана, лазерная эпиляция Коканд, трихология, ботокс, фототерапия",
    },
    doctors: {
      title: "Дерматолог Фергана | Коканд — врачи клиники | Radeski",
      desc: "Врачи Radeski: дерматовенерологи, дерматоонкологи, косметологи и лазерные специалисты — Фергана и Коканд.",
      keywords: "дерматолог Фергана, дерматолог Коканд, врачи Radeski, Ашуров Дильшод, косметолог Фергана, трихолог",
    },
    prices: {
      title: "Цены — дерматология и косметология Фергана | Коканд | Radeski",
      desc: "Прейскурант Radeski: консультации, IPL, лазерная эпиляция, ботокс и другие процедуры в Фергане и Коканде.",
      keywords: "цена дерматолога Фергана, цена дерматолога Коканд, цена IPL, ботокс цена, прейскурант косметологии",
    },
    articles: {
      title: "Статьи — кожа, акне, псориаз | Radeski Фергана | Коканд",
      desc: "Блог дерматологии: акне, псориаз, витилиго, IPL, лазерная эпиляция и лечение волос — для пациентов Ферганы и Коканда.",
      keywords: "статьи дерматология, лечение акне, псориаз, витилиго, IPL терапия, Фергана, Коканд",
    },
    videos: {
      title: "Видео — процедуры и клиника | Radeski Фергана | Коканд",
      desc: "Видеоматериалы клиники Radeski: IPL, фототерапия, лазер и другие услуги — Фергана | Коканд.",
      keywords: "видео Radeski, дерматология видео, IPL, клиника Фергана, клиника Коканд",
    },
    branches: {
      title: "Филиалы — Фергана | Коканд | Бельгия | Radeski",
      desc: "Филиалы Radeski в Фергане, Коканде и Rade Skin Clinic в Льеже (Бельгия). Дерматолог и косметология в Коканде.",
      keywords: "филиал Radeski, дерматолог Фергана, дерматолог Коканд, адрес клиники",
    },
    qoqon: {
      title: "Дерматолог Коканд | Фергана | Radeski Skin Clinic — косметология, IPL, лазер",
      desc: "Клиника Radeski в Коканде: дерматология, косметология, IPL, лазерная эпиляция, фототерапия. Адрес: 47-МФЙ, Хукандий 144А. Тел: +998 95 210 73 73. Также филиал в Фергане.",
      keywords:
        "дерматолог Коканд, дерматология Коканд, косметология Коканд, IPL Коканд, лазерная эпиляция Коканд, Radeski Коканд, дерматолог Фергана, акне Коканд",
    },
    results: {
      title: "Результаты — до и после | Radeski Фергана | Коканд",
      desc: "Галерея результатов лечения акне, пигментации, IPL и трихологии в клинике Radeski (Фергана | Коканд).",
      keywords: "результаты лечения, до и после, акне, IPL результат, Фергана, Коканд",
    },
    technologies: {
      title: "Технологии — IPL, Mohs, Excimer | Radeski Фергана | Коканд",
      desc: "Sciton IPL, хирургия Mohs, эксимерный лазер и UVB-фототерапия в клинике Radeski — Фергана и Коканд.",
      keywords: "IPL Фергана, IPL Коканд, Mohs, Excimer, UVB фототерапия, современная дерматология",
    },
    'clinic-equipment': {
      title: "Аппараты — Daavlin, InMode, Lutronic | Radeski Фергана | Коканд",
      desc: "Daavlin NeoLux, Aquex, InMode IPL, Derma V, Hollywood Spectra и плазмофорез — Фергана | Коканд.",
      keywords: "Daavlin Фергана, InMode IPL Коканд, Hollywood Spectra, фототерапия, аппараты клиники",
    },
    'daavlin-foto-kabinalari': {
      title: "Фотокабины Daavlin — NB-UVB фототерапия | Radeski Фергана | Коканд",
      desc: "Узкополосная UVB (311–313 нм) фототерапия в кабинах Daavlin: псориаз, витилиго, экзема и другие хронические заболевания кожи. Radeski Skin Clinic.",
      keywords: "Daavlin фототерапия, NB-UVB, фотокабина, псориаз, витилиго, экзема, Фергана, Коканд",
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
      title: "Radeski Skin Clinic — cosmetology, IPL, laser",
      desc: "Radeski Skin Clinic — skin, aesthetics and cosmetology: IPL, laser hair removal, phototherapy, Botox, dermatoscopy and Mohs. Tel: +998 73 200-73-73.",
      keywords:
        "Radeski Skin Clinic, cosmetology, IPL, laser hair removal, phototherapy, Botox, skin clinic, aesthetics",
    },
    about: {
      title: "About the clinic | Radeski Skin Clinic — dermatology Fergana | Kokand",
      desc: "History, licensing and accreditation of Radeski Skin Clinic in Fergana and Kokand.",
      keywords: "Radeski clinic, dermatologist Fergana, dermatologist Kokand, license, accreditation, Dilshod Ashurov",
    },
    services: {
      title: "Dermatology & cosmetology services Fergana | Kokand | Radeski",
      desc: "12 specialties: dermatology, device cosmetology, IPL, laser hair removal, trichology, injectables and Mohs surgery — Fergana and Kokand.",
      keywords:
        "dermatology services Fergana, cosmetology Kokand, IPL Fergana, laser hair removal Kokand, trichology, Botox, phototherapy",
    },
    doctors: {
      title: "Dermatologist Fergana | Kokand — doctors | Radeski Skin Clinic",
      desc: "Radeski physicians: dermatologists, dermato-oncologists, cosmetologists and laser specialists — Fergana and Kokand.",
      keywords: "dermatologist Fergana, dermatologist Kokand, Radeski doctors, Dilshod Ashurov, cosmetologist Fergana",
    },
    prices: {
      title: "Prices — dermatology & cosmetology Fergana | Kokand | Radeski",
      desc: "Radeski price list: consultations, IPL, laser hair removal, Botox and more in Fergana and Kokand.",
      keywords: "dermatologist price Fergana, dermatologist price Kokand, IPL price, Botox cost, cosmetology prices",
    },
    articles: {
      title: "Articles — skin health, acne, psoriasis | Radeski Fergana | Kokand",
      desc: "Dermatology blog: acne, psoriasis, vitiligo, IPL, laser hair removal and hair treatments — Fergana and Kokand.",
      keywords: "dermatology articles, acne treatment, psoriasis, vitiligo, IPL therapy, Fergana, Kokand",
    },
    videos: {
      title: "Videos — clinic & procedures | Radeski Fergana | Kokand",
      desc: "Radeski clinic videos on IPL, phototherapy, laser and dermatology services — Fergana | Kokand.",
      keywords: "Radeski video, dermatology video, IPL, clinic Fergana, clinic Kokand",
    },
    branches: {
      title: "Branches — Fergana | Kokand | Belgium | Radeski",
      desc: "Radeski branches in Fergana, Kokand and Rade Skin Clinic in Liège, Belgium. Dermatologist and cosmetology in Kokand.",
      keywords: "Radeski branch, dermatologist Fergana, dermatologist Kokand, clinic address",
    },
    qoqon: {
      title: "Dermatologist Kokand | Fergana | Radeski Skin Clinic — cosmetology, IPL, laser",
      desc: "Radeski Skin Clinic in Kokand: dermatology, cosmetology, IPL, laser hair removal, phototherapy. Address: 47-MFI, Huqandiy 144A. Tel: +998 95 210 73 73. Also a Fergana branch.",
      keywords:
        "dermatologist Kokand, dermatology Kokand, cosmetology Kokand, IPL Kokand, laser hair removal Kokand, Radeski Kokand, dermatologist Fergana, acne Kokand",
    },
    results: {
      title: "Results — before and after | Radeski Fergana | Kokand",
      desc: "Treatment results gallery: acne, pigmentation, IPL and trichology at Radeski (Fergana | Kokand).",
      keywords: "treatment results, before after, acne, IPL results, Fergana, Kokand",
    },
    technologies: {
      title: "Technologies — IPL, Mohs, Excimer | Radeski Fergana | Kokand",
      desc: "Sciton IPL, Mohs micrographic surgery, Excimer and UVB phototherapy at Radeski — Fergana and Kokand.",
      keywords: "IPL Fergana, IPL Kokand, Mohs, Excimer, UVB phototherapy, modern dermatology",
    },
    'clinic-equipment': {
      title: "Equipment — Daavlin, InMode, Lutronic | Radeski Fergana | Kokand",
      desc: "Daavlin NeoLux, Aquex, InMode IPL, Derma V, Hollywood Spectra and plasmapheresis — Fergana | Kokand.",
      keywords: "Daavlin Fergana, InMode IPL Kokand, Hollywood Spectra, phototherapy devices",
    },
    'daavlin-foto-kabinalari': {
      title: "Daavlin Photo Cabins — NB-UVB Phototherapy | Radeski Fergana | Kokand",
      desc: "Narrowband UVB (311–313 nm) phototherapy in Daavlin cabins for psoriasis, vitiligo, eczema and other chronic skin conditions at Radeski Skin Clinic.",
      keywords: "Daavlin phototherapy, NB-UVB, photo cabin, psoriasis, vitiligo, eczema, Fergana, Kokand",
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
      desc: "Dermatologiya va kosmetologiya klinikasi Farg'ona | Qo'qon.",
      keywords: "dermatologiya Farg'ona, dermatologiya Qo'qon, Radeski",
    }
  );
}
