import type { Locale, ServiceConditionTopic } from '../types';
import {
  getLocalizedConditionText,
  resolveConditionDetailMeta,
} from '../data/serviceConditionDetailsCatalog';

function slugifyConditionTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[''`ʻʼ]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48) || 'item';
}

/** API faqat title/description saqlasa ham katalog bilan bog'lash uchun barqaror ID */
export function resolveConditionStableId(
  condition: ServiceConditionTopic,
  categoryId: string,
  subCatalogKey?: string | null,
): string {
  if (condition.id) return condition.id;
  if (subCatalogKey) {
    return `sub-${subCatalogKey}-${slugifyConditionTitle(condition.title)}`;
  }
  return `cat-${categoryId}-${slugifyConditionTitle(condition.title)}`;
}

export function resolveConditionDisplay(
  condition: ServiceConditionTopic,
  locale: Locale,
  categoryId: string,
  subCatalogKey?: string | null,
) {
  const id = resolveConditionStableId(condition, categoryId, subCatalogKey);
  const meta = resolveConditionDetailMeta(id, categoryId, subCatalogKey);
  const fullDescription =
    meta.fullDescription != null
      ? getLocalizedConditionText(meta.fullDescription, locale)
      : condition.description;

  return {
    id,
    title: condition.title,
    summary: condition.description,
    fullDescription,
    image: meta.image,
    meta,
  };
}

export function getConditionSectionLabels(locale: Locale) {
  return locale === 'uz'
    ? {
        hint: 'Kasallik yoki muammo nomini bosing — to\'liq ma\'lumot va davolash usullari alohida oynada ochiladi.',
        modalEyebrow: 'Kasallik haqida',
        close: 'Yopish',
        advantages: 'Bizning afzalliklarimiz',
        treatments: 'Qo\'llaniladigan davolash usullari',
        clinicApproach: 'Radeski klinikasida yondashuv',
        process: 'Davolash bosqichlari',
        relatedService: 'Bog\'liq muolaja',
        book: 'Qabulga yozilish',
      }
    : locale === 'ru'
      ? {
          hint: 'Нажмите на название заболевания или проблемы — откроется полная информация и методы лечения в отдельном окне.',
          modalEyebrow: 'О заболевании',
          close: 'Закрыть',
          advantages: 'Наши преимущества',
          treatments: 'Методы лечения',
          clinicApproach: 'Подход в клинике Radeski',
          process: 'Этапы лечения',
          relatedService: 'Связанная процедура',
          book: 'Записаться',
        }
      : {
          hint: 'Click a condition name to view full details and treatment methods in a dedicated panel.',
          modalEyebrow: 'About the condition',
          close: 'Close',
          advantages: 'Our advantages',
          treatments: 'Treatment methods',
          clinicApproach: 'Approach at Radeski Clinic',
          process: 'Treatment steps',
          relatedService: 'Related procedure',
          book: 'Book appointment',
        };
}
