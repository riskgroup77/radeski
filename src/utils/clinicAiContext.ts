import type { Article, Doctor, Locale, ServiceCategory } from '../types';
import type { ClinicAiContext } from '../types/chat';

function truncate(text: string, max: number): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1)}…`;
}

export function buildClinicAiContext(
  locale: Locale,
  data: {
    serviceCategories: ServiceCategory[];
    doctors: Doctor[];
    articles: Article[];
  },
): ClinicAiContext {
  const serviceSummary = data.serviceCategories
    .map((category) => {
      const subs = category.subServices
        .slice(0, 4)
        .map((sub) => sub.name[locale])
        .join(', ');
      return subs
        ? `${category.title[locale]} (${subs})`
        : category.title[locale];
    })
    .slice(0, 14)
    .join('; ');

  const doctorSummary = data.doctors
    .slice(0, 10)
    .map((doctor) => `${doctor.name[locale]} — ${doctor.role[locale]}`)
    .join('; ');

  const articlesSummary = data.articles
    .slice(0, 8)
    .map((article) => `${article.title[locale]}: ${truncate(article.summary[locale], 90)}`)
    .join(' | ');

  return {
    serviceSummary: truncate(serviceSummary, 2200),
    doctorSummary: truncate(doctorSummary, 900),
    articlesSummary: truncate(articlesSummary, 1200),
  };
}
