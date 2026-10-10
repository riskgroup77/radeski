import type { Doctor, Locale, PriceItem } from '../types';
import type { ClinicBranch } from '../data/sitePagesContent';
import { getLocalizedCopy, type LocalCommercialLanding } from '../data/localCommercialSeoCatalog';
import { doctorBranches, doctorSpecialties, firstVisitPrice, landingsForDoctor, SPECIALTY_LABELS, type Specialty } from './localProof';
import { formatUzs, landingBranch } from './localLandingDetails';

/**
 * What a doctor page tells patients besides the CMS profile: where and when the doctor sees
 * patients, the first-visit price, which problems to come with (links to the city service
 * pages) and FAQ built only from these facts. Shared by the page, its <head> and prerender.
 */
export interface DoctorPageDetails {
  specialties: Specialty[];
  specialtyLabels: string[];
  branches: ClinicBranch[];
  price?: number;
  landings: LocalCommercialLanding[];
  landingLinks: { label: string; city: LocalCommercialLanding['city']; slug: string }[];
  faqs: { question: string; answer: string }[];
}

export function resolveDoctorPageDetails(doctor: Doctor, prices: PriceItem[], locale: Locale): DoctorPageDetails {
  const specialties = doctorSpecialties(doctor);
  const specialtyLabels = specialties.map((specialty) => SPECIALTY_LABELS[specialty][locale]);
  const branches = doctorBranches(doctor).map(landingBranch);
  const price = firstVisitPrice(doctor, prices);
  const landings = landingsForDoctor(doctor);
  const landingLinks = landings.map((landing) => ({
    label: getLocalizedCopy(landing.h1, locale),
    city: landing.city,
    slug: landing.slug,
  }));
  const name = doctor.name[locale] || doctor.name.uz;

  const faqs: DoctorPageDetails['faqs'] = [];
  if (branches.length) {
    const where = branches.map((branch) => `${branch.address[locale]} (${branch.hours[locale]}, ${branch.phone})`).join('; ');
    faqs.push(
      locale === 'uz'
        ? { question: `${name} qayerda qabul qiladi?`, answer: `Radeski Skin Clinic: ${where}.` }
        : locale === 'ru'
          ? { question: `Где принимает ${name}?`, answer: `Radeski Skin Clinic: ${where}.` }
          : { question: `Where does ${name} see patients?`, answer: `Radeski Skin Clinic: ${where}.` },
    );
  }
  if (price) {
    faqs.push(
      locale === 'uz'
        ? { question: 'Birinchi qabul narxi qancha?', answer: `Birinchi ko‘rik — ${formatUzs(price, locale)}. Tahlil yoki muolaja kerak bo‘lsa, ularning narxi ko‘rikda aytiladi.` }
        : locale === 'ru'
          ? { question: 'Сколько стоит первичный приём?', answer: `Первичный приём — ${formatUzs(price, locale)}. Стоимость анализов и процедур, если они нужны, называется на приёме.` }
          : { question: 'How much is the first visit?', answer: `The first visit costs ${formatUzs(price, locale)}. Tests or procedures, if needed, are priced at the visit.` },
    );
  }
  if (specialtyLabels.length) {
    const list = specialtyLabels.join(', ');
    faqs.push(
      locale === 'uz'
        ? { question: 'Qaysi muammolar bilan murojaat qilish mumkin?', answer: `Mutaxassislik: ${list}. Teri, soch va tirnoq bilan bog‘liq muammolar bo‘yicha qabul qilinadi; aniq tashxis va davolash rejasi ko‘rikda tuziladi.` }
        : locale === 'ru'
          ? { question: 'С какими проблемами можно обратиться?', answer: `Специализация: ${list}. Приём по проблемам кожи, волос и ногтей; диагноз и план лечения определяются на приёме.` }
          : { question: 'Which problems can I come with?', answer: `Specialty: ${list}. Skin, hair and nail problems; the diagnosis and treatment plan are set at the visit.` },
    );
  }
  faqs.push(
    locale === 'uz'
      ? { question: `${name} qabuliga qanday yozilaman?`, answer: 'Saytdagi «Qabulga yozilish» tugmasi orqali onlayn yoki filial telefoni orqali.' }
      : locale === 'ru'
        ? { question: `Как записаться к врачу ${name}?`, answer: 'Онлайн через кнопку «Записаться» на сайте или по телефону филиала.' }
        : { question: `How do I book with ${name}?`, answer: 'Online with the “Book appointment” button on the site, or by phone.' },
  );

  return { specialties, specialtyLabels, branches, price, landings, landingLinks, faqs };
}
