import type { Locale } from '../types';

export interface CategorySeoCopy {
  title: string;
  desc: string;
  keywords: string;
}

/**
 * Own <title>, meta description and keywords for the main service categories, written for
 * the queries patients use ("дерматолог Фергана", "подолог Фергана", "аппаратная косметология
 * Фергана"). Categories not listed here keep the title built from their CMS name.
 */
export const SERVICE_CATEGORY_SEO: Record<string, Record<Locale, CategorySeoCopy>> = {
  dermatologiya: {
    uz: {
      title: "Dermatolog Farg'ona va Qo'qonda: teri kasalliklari | Radeski",
      desc: "Farg'ona va Qo'qonda dermatolog qabuli: psoriaz, akne, vitiligo, ekzema, rozatsea, zamburug' va xollarni dermatoskopiya bilan tekshirish. Radeski Skin Clinic.",
      keywords:
        "dermatolog Farg'ona, dermatolog Qo'qon, teri shifokori Farg'ona, teri kasalliklari davolash, psoriaz davolash Farg'ona, akne davolash, vitiligo davolash, dermatoskopiya, Radeski Skin Clinic",
    },
    ru: {
      title: 'Дерматолог в Фергане и Коканде — лечение кожи | Radeski',
      desc: 'Дерматолог в Фергане и Коканде: псориаз, акне, витилиго, экзема, розацеа, грибок кожи, дерматоскопия родинок. Приём опытных врачей Radeski Skin Clinic.',
      keywords:
        'дерматолог Фергана, дерматолог Коканд, кожный врач Фергана, лечение кожи Фергана, лечение псориаза Фергана, лечение акне, лечение витилиго, дерматоскопия, Radeski Skin Clinic',
    },
    en: {
      title: 'Dermatologist in Fergana & Kokand — skin care | Radeski',
      desc: 'Dermatologist in Fergana and Kokand: psoriasis, acne, vitiligo, eczema, rosacea, fungal infections and dermoscopy of moles at Radeski Skin Clinic.',
      keywords:
        'dermatologist Fergana, dermatologist Kokand, skin doctor Fergana, psoriasis treatment, acne treatment, vitiligo treatment, dermoscopy, Radeski Skin Clinic',
    },
  },
  'apparatnaya-kosmetologiya': {
    uz: {
      title: "Apparatli kosmetologiya va lazer Farg'ona, Qo'qon | Radeski",
      desc: "Farg'ona va Qo'qonda apparatli kosmetologiya: IPL, CO₂ lazer, Hollywood Spectra, Derma V, tuliy lazer 1927 nm, lazer epilyatsiya. Dermatolog nazoratida.",
      keywords:
        "apparatli kosmetologiya Farg'ona, kosmetolog Farg'ona, kosmetolog Qo'qon, lazer kosmetologiya, IPL Farg'ona, CO2 lazer, Hollywood Spectra, Derma V, tuliy lazer, pigmentatsiya davolash, Radeski Skin Clinic",
    },
    ru: {
      title: 'Аппаратная косметология и лазер — Фергана, Коканд | Radeski',
      desc: 'Аппаратная косметология в Фергане и Коканде: IPL, CO₂-лазер, Hollywood Spectra, Derma V, тулиевый лазер 1927 нм, лазерная эпиляция. Под контролем дерматолога.',
      keywords:
        'аппаратная косметология Фергана, косметолог Фергана, косметолог Коканд, лазерная косметология Фергана, IPL Фергана, CO2 лазер, Hollywood Spectra, Derma V, тулиевый лазер, удаление пигментации Фергана, Radeski Skin Clinic',
    },
    en: {
      title: 'Device cosmetology & lasers in Fergana, Kokand | Radeski',
      desc: 'Device cosmetology in Fergana and Kokand: IPL, CO₂ laser, Hollywood Spectra, Derma V, 1927 nm thulium laser, laser hair removal. Dermatologist-led.',
      keywords:
        'cosmetology Fergana, cosmetologist Kokand, laser cosmetology, IPL Fergana, CO2 laser, Hollywood Spectra, Derma V, thulium laser, pigmentation treatment, Radeski Skin Clinic',
    },
  },
  'clinika-patologii-nogtej': {
    uz: {
      title: "Podolog Farg'ona va Qo'qonda: ichga o'sgan tirnoq | Radeski",
      desc: "Farg'ona va Qo'qonda podolog: ichga o'sgan tirnoqni titan ip bilan korreksiya, tirnoq zamburug'i, qadoq va yorilgan tovon davolash. Kattalar va bolalar.",
      keywords:
        "podolog Farg'ona, podolog Qo'qon, ichga o'sgan tirnoq, ichiga o'sgan tirnoq Farg'ona, tirnoq zamburug'i davolash, onixomikoz, qadoq, yorilgan tovon, tibbiy pedikyur, Radeski Skin Clinic",
    },
    ru: {
      title: 'Подолог в Фергане и Коканде: вросший ноготь | Radeski',
      desc: 'Подолог в Фергане и Коканде: вросший ноготь (титановая нить), грибок ногтей, мозоли и трещины пяток, медицинский педикюр. Приём взрослых и детей.',
      keywords:
        'подолог Фергана, подолог Коканд, вросший ноготь Фергана, лечение вросшего ногтя, грибок ногтей лечение Фергана, онихомикоз, мозоли, трещины пяток, медицинский педикюр, Radeski Skin Clinic',
    },
    en: {
      title: 'Podiatrist in Fergana & Kokand: ingrown toenail | Radeski',
      desc: 'Podiatrist in Fergana and Kokand: ingrown toenail correction (titanium wire), nail fungus, calluses, cracked heels, medical pedicure. Adults and children.',
      keywords:
        'podiatrist Fergana, podiatrist Kokand, ingrown toenail treatment, nail fungus treatment, onychomycosis, calluses, cracked heels, medical pedicure, Radeski Skin Clinic',
    },
  },
};
