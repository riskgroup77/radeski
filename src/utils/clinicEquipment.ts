import type { Locale, PriceItem } from '../types';
import type { ClinicEquipmentEntry } from '../data/clinicEquipmentCatalog';
import { buildCatalogPriceItems } from './priceCatalog';
import { resolvePriceName } from './priceDisplay';
import { resolvePriceCategoryLabel } from './priceCategoryDisplay';
import { getCatalogCategoryNameRu } from './priceCatalog';

function normalizeForMatch(text: string): string {
  return text.toLowerCase().replace(/ё/g, 'е');
}

function matchesKeywords(item: PriceItem, keywords: string[], locale: Locale): boolean {
  const haystack = normalizeForMatch(
    `${item.name.ru} ${item.name.uz} ${item.name.en} ${resolvePriceName(item, locale)}`,
  );
  return keywords.some((keyword) => haystack.includes(normalizeForMatch(keyword)));
}

/** Apparat bo'yicha preyskurant (asosiy ro'yxatdan yashirilgan bo'limlar ham qo'shiladi) */
export function getEquipmentPriceItems(
  equipment: ClinicEquipmentEntry,
  locale: Locale,
  livePrices?: PriceItem[],
): PriceItem[] {
  const categorySet = new Set(equipment.priceCategoryIds);
  const catalogItems = buildCatalogPriceItems();

  let items = catalogItems.filter((item) => categorySet.has(item.category));

  if (equipment.priceKeywords?.length) {
    items = items.filter((item) => matchesKeywords(item, equipment.priceKeywords!, locale));
  }

  if (livePrices?.length && categorySet.size > 0) {
    const liveMatches = livePrices.filter((item) => {
      if (!categorySet.has(item.category)) return false;
      if (!equipment.priceKeywords?.length) return true;
      return matchesKeywords(item, equipment.priceKeywords, locale);
    });
    if (liveMatches.length > 0) {
      items = liveMatches;
    }
  }

  return [...items].sort((a, b) => (a.priceValue ?? 0) - (b.priceValue ?? 0));
}

export function groupEquipmentPricesByCategory(
  items: PriceItem[],
  locale: Locale,
): { categoryId: string; title: string; items: PriceItem[] }[] {
  const grouped = new Map<string, PriceItem[]>();
  for (const item of items) {
    const list = grouped.get(item.category) ?? [];
    list.push(item);
    grouped.set(item.category, list);
  }

  return [...grouped.entries()].map(([categoryId, categoryItems]) => ({
    categoryId,
    title: resolvePriceCategoryLabel(categoryId, locale, getCatalogCategoryNameRu(categoryId)),
    items: categoryItems,
  }));
}

export function getEquipmentSectionLabels(locale: Locale) {
  return locale === 'uz'
    ? {
        sectionTitle: 'Klinikadagi apparatlar',
        hint: 'Apparat nomini bosing — to\'liq ma\'lumot, qo\'llanish va narxlar ochiladi.',
        manufacturer: 'Ishlab chiqaruvchi',
        directions: 'Qaysi yo\'nalishlarda qo\'llaniladi',
        indications: 'Ko\'rsatmalar',
        clinicUsage: 'Radeski klinikasida qanday ishlatiladi',
        process: 'Muolaja bosqichlari',
        prices: 'Narxlar (preyskurant)',
        priceNote: 'Narx haqida',
        relatedService: 'Bog\'liq muolaja',
        allPrices: 'Barcha narxlar',
        book: 'Qabulga yozilish',
        noPrices: 'Aniq narx shifokor konsultatsiyasida belgilanadi.',
      }
    : locale === 'ru'
      ? {
          sectionTitle: 'Оборудование клиники',
          hint: 'Нажмите на название аппарата — откроется полная информация, применение и цены.',
          manufacturer: 'Производитель',
          directions: 'Направления применения',
          indications: 'Показания',
          clinicUsage: 'Как используется в клинике Radeski',
          process: 'Этапы процедуры',
          prices: 'Цены (прейскурант)',
          priceNote: 'О стоимости',
          relatedService: 'Связанная процедура',
          allPrices: 'Все цены',
          book: 'Записаться',
          noPrices: 'Точная стоимость определяется на консультации врача.',
        }
      : {
          sectionTitle: 'Clinic equipment',
          hint: 'Click a device name to view full details, usage, and prices.',
          manufacturer: 'Manufacturer',
          directions: 'Used in these specialties',
          indications: 'Indications',
          clinicUsage: 'How we use it at Radeski Clinic',
          process: 'Procedure steps',
          prices: 'Prices (price list)',
          priceNote: 'Pricing note',
          relatedService: 'Related procedure',
          allPrices: 'All prices',
          book: 'Book appointment',
          noPrices: 'Exact pricing is confirmed at physician consultation.',
        };
}
