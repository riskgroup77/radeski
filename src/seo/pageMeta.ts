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

/** Per-article SEO overrides keyed by public route id (art-*). */
export const ARTICLE_SEO_OVERRIDES: Partial<
  Record<string, Partial<Record<Locale, { title: string; desc: string; keywords?: string }>>>
> = {
  'art-lasemd-ultra-kokand': {
    uz: {
      title: "Qo'qonda LaseMD Ultra tuliy lazer — Radeski Skin Clinic",
      desc: "Qo'qonda LaseMD Ultra 1927 nm tuliy lazer: pigmentatsiya, postakne, keng porlar va teri yoshartirish. Ko'rsatmalar, qarshi ko'rsatmalar va tiklanish.",
      keywords:
        "tuliy lazer Qo'qon, LaseMD Ultra Qo'qon, LaseMD Ultra 1927 nm, pigmentatsiya davolash Qo'qon, lazer yoshartirish Qo'qon, postakne lazer Qo'qon, Radeski Skin Clinic Qo'qon",
    },
    ru: {
      title: 'Тулиевый лазер LaseMD Ultra в Коканде — Radeski Skin Clinic',
      desc: 'Тулиевый лазер LaseMD Ultra 1927 нм в Коканде: лечение пигментации, постакне, расширенных пор и омоложение кожи. Показания, противопоказания и восстановление.',
      keywords:
        'тулиевый лазер Коканд, LaseMD Ultra Коканд, LaseMD Ultra 1927 нм, лечение пигментации Коканд, лазерное омоложение Коканд, лазер от постакне Коканд, тулиевый лазер 1927 нм, Radeski Skin Clinic Коканд',
    },
    en: {
      title: 'LaseMD Ultra Thulium Laser in Kokand — Radeski Skin Clinic',
      desc: 'LaseMD Ultra 1927 nm thulium laser in Kokand: pigmentation, post-acne, enlarged pores, and skin rejuvenation. Indications, contraindications, and recovery.',
      keywords:
        'thulium laser Kokand, LaseMD Ultra Kokand, LaseMD Ultra 1927 nm, pigmentation treatment Kokand, laser rejuvenation Kokand, post-acne laser Kokand, Radeski Skin Clinic Kokand',
    },
  },
  'art-thulium-laser-hair-kokand': {
    uz: {
      title: "Qo'qonda soch uchun tuliy lazer | Soch to'kilishini davolash — Radeski Skin Clinic",
      desc: "Qo'qonda soch uchun tuliy lazer. Soch to'kilishi va inchelashni kompleks davolashda zamonaviy usul. Radeski Skin Clinic — mutaxassis konsultatsiyasi.",
      keywords:
        "tuliy lazer Qo'qon, soch uchun tuliy lazer Qo'qon, soch to'kilishi davolash Qo'qon, trixolog Qo'qon, alopeciya davolash Qo'qon, soch tiklash Qo'qon, soch o'sishi Qo'qon, lazer soch davolash Qo'qon",
    },
    ru: {
      title: 'Тулиевый лазер для волос в Коканде | Лечение выпадения волос — Radeski Skin Clinic',
      desc: 'Тулиевый лазер для волос в Коканде. Современный метод в комплексном лечении выпадения и истончения волос в Radeski Skin Clinic. Консультация специалиста.',
      keywords:
        'тулиевый лазер Коканд, тулиевый лазер для волос Коканд, лечение выпадения волос Коканд, трихолог Коканд, лечение алопеции Коканд, восстановление волос Коканд, рост волос Коканд, лазерное лечение волос Коканд',
    },
    en: {
      title: 'Thulium Laser for Hair in Kokand | Hair Loss Treatment — Radeski Skin Clinic',
      desc: 'Thulium laser for hair in Kokand. A modern method in comprehensive treatment of hair loss and thinning at Radeski Skin Clinic. Specialist consultation.',
      keywords:
        'thulium laser Kokand, thulium laser for hair Kokand, hair loss treatment Kokand, trichologist Kokand, alopecia treatment Kokand, hair restoration Kokand, hair growth Kokand, laser hair treatment Kokand',
    },
  },
};

export function resolveArticleSeo(
  routeKey: string | undefined,
  article: { title: Record<Locale, string>; summary: Record<Locale, string> } | null,
  locale: Locale,
  richTags: string[],
): { title: string; desc: string; keywords: string } {
  const override = routeKey ? ARTICLE_SEO_OVERRIDES[routeKey]?.[locale] : undefined;
  if (override) {
    return {
      title: override.title,
      desc: override.desc,
      keywords: override.keywords ?? richTags.join(', '),
    };
  }
  if (article) {
    return {
      title: buildArticleSeoTitle(article.title[locale], locale),
      desc: article.summary[locale],
      keywords: richTags.join(', '),
    };
  }
  return { title: '', desc: '', keywords: '' };
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
      title: "Radeski Skin Clinic — teri, soch va tirnoqlar uchun zamonaviy estetik korreksiyali tibbiy klinika",
      desc: "Radeski Skin Clinic — teri, soch va tirnoqlar bo'yicha tibbiy yordam hamda zamonaviy estetik korreksiya. Dermatologiya, trixologiya, podologiya, IPL, lazer va inyeksiyalar. Tel: +998 73 200-73-73.",
      keywords:
        "Radeski Skin Clinic, teri klinikasi, soch va tirnoq, tibbiy klinika, estetik korreksiya, dermatologiya, trixologiya, podologiya",
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
      title: "Dermatolog Qo'qon | Farg'ona | Radeski Skin Clinic — teri, soch va tirnoqlar tibbiy klinikasi",
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
    'daavlin-foto-kabinalari': {
      title: "Daavlin — O‘zbekiston Milliy Fototerapiya Markazi | Radeski Farg'ona | Qo'qon",
      desc: "Narrowband UVB (311–313 nm) fototerapiya Daavlin kabinalarida: psoriaz, vitiligo, ekzema va boshqa surunkali teri kasalliklari. O‘zbekiston Milliy Fototerapiya Markazi — Radeski Skin Clinic.",
      keywords: "Milliy Fototerapiya Markazi, Daavlin, NB-UVB, fototerapiya, psoriaz, vitiligo, ekzema, Farg'ona, Qo'qon",
    },
    dermoscan: {
      title: "DermaScan — AI qo'llab-quvvatlangan dermatologiya | Radeski Skin Clinic",
      desc: "DermaScan mobil ilovasi: teri holatini raqamli kuzatish, AI tahlili va shifokor bilan uzluksiz hamkorlik. Radeski Skin Clinic raqamli ekotizimi.",
      keywords: "DermaScan, AI dermatologiya, teri kuzatuvi, sun'iy intellekt, raqamli dermatologiya, Radeski",
    },
    science: {
      title: "Ilm-fan | Radeski Skin Clinic — tadqiqot, ta'lim, xalqaro hamkorlik",
      desc: "Radeski Skin Clinic da ilm-fan: klinik amaliyot, tadqiqot, nashrlar, yosh shifokorlarni tayyorlash va xalqaro hamkorlik. Farg'ona | Qo'qon.",
      keywords: "ilm-fan, dermatologiya tadqiqoti, klinik protokollar, yosh shifokorlar, Radeski, Farg'ona, Qo'qon",
    },
    obrazovaniya: {
      title: "Ta'lim va malaka oshirish | Radeski Skin Clinic",
      desc: "Dermatologiya va estetik tibbiyot bo'yicha sertifikatsiya kurslari, ordinatura, master-klasslar, amaliy treninglar va xalqaro dasturlar. Radeski — Farg'ona | Qo'qon.",
      keywords: "ta'lim, malaka oshirish, ordinatura, master-klass, dermatologiya o'qitish, Radeski, Farg'ona",
    },
    'tele-dermatology': {
      title: "TeleDermatolog | Radeski Skin Clinic",
      desc: "Masofaviy dermatolog maslahati, onlayn teri kuzatuvi va raqamli hamkorlik. Radeski Skin Clinic — Farg'ona | Qo'qon.",
      keywords: "teledermatolog, masofaviy dermatolog, onlayn dermatolog maslahati, Radeski, Farg'ona",
    },
    'skin-pathology-center': {
      title: "Teri patologiyasi milliy markazi | Radeski Skin Clinic",
      desc: "Gistologik va morfologik tashxis, ilmiy-tadqiqot va teri patologiyasi bo'yicha standartlar. Radeski — Farg'ona | Qo'qon.",
      keywords: "teri patologiyasi, gistologiya, morfologik tashxis, milliy markaz, Radeski, Farg'ona",
    },
    brend: {
      title: "Radeski klinik brendi | Missiya, falsafa, ekotizim",
      desc: "Radeski Skin Clinic brendi: professional tibbiyot, texnologiya, ilm-fan va ochiqlik. Dermatologiya ekotizimi Farg'ona va Qo'qonda.",
      keywords: "Radeski brend, klinik brend, dermatologiya ekotizimi, missiya, Farg'ona, Qo'qon",
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
      title: "Radeski Skin Clinic — медицинская клиника кожи, волос и ногтей с современной эстетической коррекцией",
      desc: "Radeski Skin Clinic — медицинская клиника кожи, волос и ногтей с современной эстетической коррекцией. Дерматология, трихология, подология, IPL, лазер и инъекции. Тел: +998 73 200-73-73.",
      keywords:
        "Radeski Skin Clinic, медицинская клиника кожи, волос и ногтей, эстетическая коррекция, дерматология, трихология, подология",
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
      title: "Дерматолог Коканд | Фергана | Radeski Skin Clinic — медицинская клиника кожи, волос и ногтей",
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
    'daavlin-foto-kabinalari': {
      title: "Daavlin — Национальный центр фототерапии Узбекистана | Radeski Фергана | Коканд",
      desc: "Узкополосная UVB (311–313 нм) фототерапия в кабинах Daavlin: псориаз, витилиго, экзема и другие хронические заболевания кожи. Национальный центр фототерапии Узбекистана — Radeski Skin Clinic.",
      keywords: "Национальный центр фототерапии, Daavlin, NB-UVB, фототерапия, псориаз, витилиго, экзема, Фергана, Коканд",
    },
    dermoscan: {
      title: "DermaScan — AI-SUPPORTED DERMATOLOGY | Radeski Skin Clinic",
      desc: "Мобильное приложение DermaScan: цифровое наблюдение за кожей, AI-анализ и непрерывное взаимодействие врача и пациента. Цифровая экосистема Radeski.",
      keywords: "DermaScan, AI дерматология, наблюдение за кожей, искусственный интеллект, цифровая дерматология, Radeski",
    },
    science: {
      title: "Наука | Radeski Skin Clinic — исследования, образование, международное сотрудничество",
      desc: "Наука в Radeski Skin Clinic: клиническая практика, исследования, публикации, подготовка молодых врачей и международное сотрудничество. Фергана | Коканд.",
      keywords: "наука, исследования в дерматологии, клинические протоколы, молодые врачи, Radeski, Фергана, Коканд",
    },
    obrazovaniya: {
      title: "Образование и повышение квалификации | Radeski Skin Clinic",
      desc: "Сертификационные курсы, ординатура, мастер-классы, практические тренинги и международные программы в дерматологии. Radeski — Фергана | Коканд.",
      keywords: "образование, повышение квалификации, ординатура, мастер-классы, обучение дерматологии, Radeski, Фергана",
    },
    'tele-dermatology': {
      title: "TeleDermatolog | Radeski Skin Clinic",
      desc: "Дистанционная консультация, онлайн-сопровождение и цифровое взаимодействие с пациентами. Radeski — Фергана | Коканд.",
      keywords: "teledermatolog, онлайн дерматолог, дистанционная консультация, Radeski, Фергана",
    },
    'skin-pathology-center': {
      title: "Национальный центр патологии кожи | Radeski Skin Clinic",
      desc: "Гистологическая и морфологическая диагностика, научные исследования и стандарты в патологии кожи. Radeski — Фергана | Коканд.",
      keywords: "патология кожи, гистология, морфологическая диагностика, национальный центр, Radeski, Фергана",
    },
    brend: {
      title: "Бренд Radeski Skin Clinic | Миссия, философия, экосистема",
      desc: "Бренд Radeski Skin Clinic: профессиональная медицина, технологии, наука и доступность. Дерматологическая экосистема в Фергане и Коканде.",
      keywords: "бренд Radeski, клинический бренд, экосистема дерматологии, миссия, Фергана, Коканд",
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
      title: "Radeski Skin Clinic — medical clinic for skin, hair and nails with modern aesthetic correction",
      desc: "Radeski Skin Clinic — medical care for skin, hair and nails with modern aesthetic correction. Dermatology, trichology, podology, IPL, laser and injectables. Tel: +998 73 200-73-73.",
      keywords:
        "Radeski Skin Clinic, medical skin clinic, hair and nails, aesthetic correction, dermatology, trichology, podology",
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
      title: "Dermatologist Kokand | Fergana | Radeski Skin Clinic — medical skin, hair and nails clinic",
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
    'daavlin-foto-kabinalari': {
      title: "National Phototherapy Center of Uzbekistan by Daavlin | Radeski Fergana | Kokand",
      desc: "Narrowband UVB (311–313 nm) phototherapy in Daavlin cabins for psoriasis, vitiligo, eczema and other chronic skin conditions. National Phototherapy Center of Uzbekistan — Radeski Skin Clinic.",
      keywords: "National Phototherapy Center, Daavlin, NB-UVB, phototherapy, psoriasis, vitiligo, eczema, Fergana, Kokand",
    },
    dermoscan: {
      title: "DermaScan — AI-Supported Dermatology | Radeski Skin Clinic",
      desc: "DermaScan mobile app: digital skin monitoring, AI-assisted analysis, and continuous physician–patient collaboration. Radeski digital dermatology ecosystem.",
      keywords: "DermaScan, AI dermatology, skin monitoring, artificial intelligence, digital dermatology, Radeski",
    },
    science: {
      title: "Science | Radeski Skin Clinic — research, education, international collaboration",
      desc: "Science at Radeski Skin Clinic: clinical practice, research, publications, training young physicians, and international collaboration. Fergana | Kokand.",
      keywords: "science, dermatology research, clinical protocols, young physicians, Radeski, Fergana, Kokand",
    },
    obrazovaniya: {
      title: "Education & professional development | Radeski Skin Clinic",
      desc: "Certification programs, residency, masterclasses, hands-on training, and international courses in dermatology and aesthetic medicine. Radeski — Fergana | Kokand.",
      keywords: "education, professional development, residency, masterclasses, dermatology training, Radeski, Fergana",
    },
    'tele-dermatology': {
      title: "TeleDermatolog | Radeski Skin Clinic",
      desc: "Remote dermatology consultations, online skin care follow-up, and digital care pathways. Radeski Skin Clinic — Fergana | Kokand.",
      keywords: "teledermatologist, online dermatology, remote dermatology consultation, Radeski, Fergana",
    },
    'skin-pathology-center': {
      title: "National Center of Skin Pathology | Radeski Skin Clinic",
      desc: "Histologic and morphologic diagnosis, research, and standards in skin pathology. Radeski — Fergana | Kokand.",
      keywords: "skin pathology, histology, morphologic diagnosis, national center, Radeski, Fergana",
    },
    brend: {
      title: "The Radeski Skin Clinic brand | Mission, philosophy, ecosystem",
      desc: "The Radeski Skin Clinic brand: professional medicine, technology, science and accessibility. A dermatology ecosystem in Fergana and Kokand.",
      keywords: "Radeski brand, clinic brand, dermatology ecosystem, mission, Fergana, Kokand",
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
