import type { Locale, ServiceCategory, ServiceDetail, ServiceRichContent, ServiceConditionTopic } from '../types';
import {
  CATEGORY_RICH_CATALOG,
  SUB_SERVICE_RICH_CATALOG,
  findSubServiceCatalogKey,
} from '../data/serviceRichCatalog';
import { getCategoryConditions, getSubConditions } from '../data/serviceConditionsCatalog';

export type { ServiceRichContent };
export type ServiceRichSection = Omit<ServiceRichContent, 'overview'>;

const CLINIC_BENEFITS: Record<Locale, string[]> = {
  uz: [
    'Malakali dermatolog va kosmetolog mutaxassislari nazorati',
    'Zamonaviy sertifikatlangan tibbiy uskunalar',
    'Yevropa standartlariga mos steril sharoitlar',
    'Har bir bemorga individual davolash rejasi',
  ],
  ru: [
    'Контроль квалифицированных дерматологов и косметологов',
    'Современное сертифицированное медицинское оборудование',
    'Стерильные условия по европейским стандартам',
    'Индивидуальный план лечения для каждого пациента',
  ],
  en: [
    'Supervision by qualified dermatologists and cosmetologists',
    'Modern certified medical equipment',
    'Sterile conditions meeting European standards',
    'Individual treatment plan for every patient',
  ],
};

const STANDARD_PROCESS: Record<Locale, string[]> = {
  uz: [
    'Birinchi konsultatsiya va teri holatini baholash',
    'Anamnez olish va zarur tekshiruvlar',
    'Shaxsiy davolash yoki muolaja rejasi tuzish',
    'Muolajani bajarish va natijani kuzatish',
    'Kerak bo\'lsa, qayta ko\'rik va profilaktika tavsiyalari',
  ],
  ru: [
    'Первичная консультация и оценка состояния кожи',
    'Сбор анамнеза и необходимые обследования',
    'Составление индивидуального плана лечения или процедуры',
    'Проведение процедуры и контроль результата',
    'При необходимости — повторный осмотр и рекомендации по профилактике',
  ],
  en: [
    'Initial consultation and skin assessment',
    'Medical history and required examinations',
    'Personalized treatment or procedure plan',
    'Procedure performance and result monitoring',
    'Follow-up visit and prevention advice when needed',
  ],
};

function isCompleteRich(content: ServiceRichContent | undefined): boolean {
  if (!content) return false;
  return (
    Boolean(content.overview?.trim()) &&
    content.conditions.length > 0 &&
    content.indications.length > 0 &&
    content.solutions.length > 0 &&
    content.benefits.length > 0 &&
    content.process.length > 0
  );
}

function buildConditionsFromIndications(
  indications: string[],
  serviceName: string,
  locale: Locale,
): ServiceConditionTopic[] {
  return indications.map((indication) => ({
    title: indication.split('—')[0].split('(')[0].trim(),
    description:
      locale === 'uz'
        ? `${indication} — bu holat uzoq vaqt davom etsa, uy parvarishi yordam bermasa yoki ahvol yomonlashsa, dermatolog ko'rigiga muhtoj. Radeski klinikasida «${serviceName}» yo'nalishi bo'yicha kasallik sababi aniqlanadi, kerakli tekshiruvlar o'tkaziladi va shaxsiy davolash rejasi tuziladi.`
        : locale === 'ru'
          ? `${indication} — при длительном течении или отсутствии эффекта от домашнего ухода необходима консультация дерматолога. В клинике Radeski по направлению «${serviceName}» проводится диагностика и составляется индивидуальный план лечения.`
          : `${indication} — if symptoms persist or worsen despite home care, a dermatologist consultation is needed. At Radeski Clinic, «${serviceName}» includes diagnosis and a personalized treatment plan.`,
  }));
}

function attachConditions(
  content: Omit<ServiceRichContent, 'conditions'> & { conditions?: ServiceConditionTopic[] },
  locale: Locale,
  serviceName: string,
  categoryId: string,
  catalogKey: string | null,
  isSub: boolean,
): ServiceRichContent {
  let conditions = content.conditions ?? [];
  if (conditions.length === 0) {
    if (isSub && catalogKey) {
      conditions = getSubConditions(catalogKey, locale);
      if (conditions.length === 0 && locale !== 'uz') {
        conditions = getSubConditions(catalogKey, 'uz');
      }
    } else if (!isSub) {
      conditions = getCategoryConditions(categoryId, locale);
    }
  }
  if (conditions.length === 0 && content.indications.length > 0) {
    conditions = buildConditionsFromIndications(content.indications, serviceName, locale);
  }

  return {
    overview: content.overview,
    conditions,
    indications: content.indications,
    solutions: content.solutions,
    benefits: content.benefits,
    process: content.process,
  };
}

function isCategoryConditionDump(
  conditions: ServiceConditionTopic[],
  categoryId: string,
  locale: Locale,
): boolean {
  const catCond = getCategoryConditions(categoryId, locale);
  if (catCond.length === 0 || conditions.length < 3) return false;
  const catTitles = new Set(catCond.map((c) => c.title));
  const overlap = conditions.filter((c) => catTitles.has(c.title)).length;
  return overlap >= Math.min(3, catCond.length);
}

function finalizeSubRichContent(
  content: ServiceRichContent,
  sub: ServiceDetail,
  category: ServiceCategory,
  locale: Locale,
  catalogKey: string | null,
): ServiceRichContent {
  if (catalogKey) {
    let subCond = getSubConditions(catalogKey, locale);
    if (subCond.length === 0 && locale !== 'uz') {
      subCond = getSubConditions(catalogKey, 'uz');
    }
    if (subCond.length > 0) {
      return { ...content, conditions: subCond };
    }
  }

  if (isCategoryConditionDump(content.conditions, category.id, locale)) {
    const rebuilt =
      content.indications.length > 0
        ? buildConditionsFromIndications(content.indications, sub.name[locale], locale)
        : [];
    return { ...content, conditions: rebuilt };
  }

  return content;
}

function fromEntityRich(
  rich: Partial<Record<Locale, ServiceRichContent>> | undefined,
  locale: Locale,
  fallbackOverview: string,
): ServiceRichContent | null {
  const localized = rich?.[locale] ?? rich?.uz;
  if (!localized) return null;

  const merged: ServiceRichContent = {
    overview: localized.overview?.trim() || fallbackOverview,
    conditions: localized.conditions ?? [],
    indications: localized.indications ?? [],
    solutions: localized.solutions ?? [],
    benefits: localized.benefits ?? [],
    process: localized.process ?? [],
  };

  return isCompleteRich(merged) || merged.indications.length > 0 ? merged : null;
}

function buildSubFallback(sub: ServiceDetail, category: ServiceCategory, locale: Locale): ServiceRichContent {
  const desc = sub.description[locale] || sub.description.uz;
  const name = sub.name[locale];

  return {
    overview:
      desc.length > 30
        ? desc
        : locale === 'uz'
          ? `${name} — ${category.title[locale]} yo'nalishidagi zamonaviy klinik muolaja. Ushbu xizmat teri muammolarini aniq diagnostika qilish, samarali davolash va natijani uzoq muddat saqlashga qaratilgan. Mutaxassislar tomonidan individual protokol tuziladi.`
          : locale === 'ru'
            ? `${name} — современная клиническая процедура в направлении «${category.title[locale]}». Услуга направлена на точную диагностику, эффективное лечение и долгосрочный результат под контролем специалистов.`
            : `${name} is a modern clinical procedure in ${category.title[locale]}. The service focuses on accurate diagnosis, effective treatment, and long-term results under specialist supervision.`,
    conditions: [],
    indications: [
      locale === 'uz'
        ? `${name} bo'yicha teri va estetik muammolar`
        : locale === 'ru'
          ? `Проблемы кожи и эстетики: ${name}`
          : `Skin and aesthetic concerns related to ${name}`,
      locale === 'uz'
        ? 'Shikoyatlar uzoq vaqt davom etganda yoki uy usullari yordam bermaganda'
        : locale === 'ru'
          ? 'Когда симптомы сохраняются длительное время'
          : 'When symptoms persist despite home care',
    ],
    solutions: [
      locale === 'uz'
        ? `${category.title[locale]} bo'yicha zamonaviy apparat va klinik yechimlar`
        : locale === 'ru'
          ? `Современные клинические решения: ${category.title[locale]}`
          : `Modern clinical solutions in ${category.title[locale]}`,
      ...(sub.features?.[locale] ?? []),
    ],
    benefits: CLINIC_BENEFITS[locale],
    process: STANDARD_PROCESS[locale],
  };
}

function buildCategoryFallback(category: ServiceCategory, locale: Locale): ServiceRichContent {
  const overview = category.description[locale] || category.description.uz;
  const solutions = category.subServices.map((s) => s.name[locale]);

  return {
    overview:
      overview.length > 50
        ? overview
        : locale === 'uz'
          ? `${category.title[locale]} — Radeski klinikasining asosiy yo'nalishlaridan biri. Ushbu xizmat teri va estetik muammolarni kompleks yondashuv bilan hal qilish, zamonaviy uskunalar va malakali mutaxassislar nazoratida xavfsiz muolaja o'tkazishga qaratilgan.`
          : overview,
    conditions: [],
    indications: [
      locale === 'uz'
        ? `${category.title[locale]} yo'nalishidagi teri va estetik muammolar`
        : locale === 'ru'
          ? `Проблемы кожи и эстетики: ${category.title[locale]}`
          : `Skin and aesthetic concerns in ${category.title[locale]}`,
    ],
    solutions: solutions.length > 0 ? solutions : [overview],
    benefits: CLINIC_BENEFITS[locale],
    process: STANDARD_PROCESS[locale],
  };
}

export function resolveServiceRichContent(
  sub: ServiceDetail,
  category: ServiceCategory,
  locale: Locale,
): ServiceRichContent {
  const fallbackOverview = sub.description[locale] || sub.description.uz || category.description[locale];
  const catalogKey = findSubServiceCatalogKey(sub, category);

  const fromApi = fromEntityRich(sub.richContent, locale, fallbackOverview);

  let result: ServiceRichContent;

  if (fromApi && isCompleteRich(fromApi)) {
    result = fromApi;
  } else if (catalogKey && SUB_SERVICE_RICH_CATALOG[catalogKey]?.[locale]) {
    const fromCatalog = SUB_SERVICE_RICH_CATALOG[catalogKey][locale];
    result = attachConditions(
      {
        overview: fromCatalog.overview || fallbackOverview,
        indications: fromCatalog.indications,
        solutions: fromCatalog.solutions,
        benefits: fromCatalog.benefits,
        process: fromCatalog.process,
        conditions: fromCatalog.conditions,
      },
      locale,
      sub.name[locale],
      category.id,
      catalogKey,
      true,
    );
  } else if (fromApi) {
    result = attachConditions(fromApi, locale, sub.name[locale], category.id, catalogKey, true);
  } else {
    result = attachConditions(
      buildSubFallback(sub, category, locale),
      locale,
      sub.name[locale],
      category.id,
      catalogKey,
      true,
    );
  }

  return finalizeSubRichContent(result, sub, category, locale, catalogKey);
}

export function resolveCategoryRichContent(
  category: ServiceCategory,
  locale: Locale,
): ServiceRichContent {
  const fallbackOverview = category.description[locale] || category.description.uz;

  const fromApi = fromEntityRich(category.richContent, locale, fallbackOverview);
  if (fromApi && isCompleteRich(fromApi)) return fromApi;

  const fromCatalog = CATEGORY_RICH_CATALOG[category.id]?.[locale];
  if (fromCatalog) {
    return attachConditions(
      {
        overview: fromCatalog.overview || fallbackOverview,
        indications: fromCatalog.indications,
        solutions: fromCatalog.solutions,
        benefits: fromCatalog.benefits,
        process: fromCatalog.process,
        conditions: fromCatalog.conditions,
      },
      locale,
      category.title[locale],
      category.id,
      null,
      false,
    );
  }

  if (fromApi) {
    return attachConditions(fromApi, locale, category.title[locale], category.id, null, false);
  }

  return attachConditions(
    buildCategoryFallback(category, locale),
    locale,
    category.title[locale],
    category.id,
    null,
    false,
  );
}

export function getServiceSectionLabels(locale: Locale) {
  return locale === 'uz'
    ? {
        about: 'Xizmat haqida',
        conditions: 'Davolanadigan kasalliklar va muammolar haqida',
        indications: 'Qachon shifokorga murojaat qilish kerak',
        solutions: 'Mavjud yechimlar va muolajalar',
        benefits: 'Afzalliklari',
        process: 'Qanday amalga oshiriladi',
        readMore: 'Batafsil ma\'lumot',
      }
    : locale === 'ru'
      ? {
          about: 'О процедуре',
          conditions: 'О заболеваниях и проблемах, которые мы лечим',
          indications: 'Когда обращаться к врачу',
          solutions: 'Доступные решения и процедуры',
          benefits: 'Преимущества',
          process: 'Как проходит процедура',
          readMore: 'Подробнее',
        }
      : {
          about: 'About this service',
          conditions: 'Diseases and conditions we treat',
          indications: 'When to see a doctor',
          solutions: 'Available solutions and procedures',
          benefits: 'Benefits',
          process: 'How it works',
          readMore: 'Learn more',
        };
}
