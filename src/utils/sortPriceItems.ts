import type { PriceItem } from '../types';

/** Konsultatsiyalar bo'limida mutaxassislik tartibi */
const KONSULTATII_SPECIALTY_RANK: Array<{ rank: number; test: (text: string) => boolean }> = [
  {
    rank: 0,
    test: (t) => /дерматовенеролог|дерматовениролог|dermatovenerolog/i.test(t),
  },
  {
    rank: 1,
    test: (t) => /дерматоонколог|dermato.?oncolog|oncodermatolog/i.test(t),
  },
  {
    rank: 2,
    test: (t) => /дерматокосметолог|dermatocosmetolog/i.test(t),
  },
  {
    rank: 3,
    test: (t) => /трихолог|tricholog/i.test(t),
  },
  {
    rank: 4,
    test: (t) => /подолог|podolog/i.test(t),
  },
];

function itemSearchText(item: PriceItem): string {
  return `${item.name.ru} ${item.name.uz} ${item.name.en}`.toLowerCase();
}

/** 0 = birinchi, 1 = takroriy, 2 = boshqa */
export function getConsultationTier(text: string): number {
  if (/первичн|первичный|birinchi|primary/i.test(text)) return 0;
  if (/повторн|повторный|takroriy|follow.?up|repeat/i.test(text)) return 1;
  return 2;
}

function getKonsultatsiiSpecialtyRank(text: string): number {
  for (const { rank, test } of KONSULTATII_SPECIALTY_RANK) {
    if (test(text)) return rank;
  }
  if (/дерматолог|dermatolog/i.test(text) && !/дерматоонколог|дерматокосметолог/i.test(text)) {
    return 0;
  }
  return 100;
}

function comparePriceItems(a: PriceItem, b: PriceItem, categoryId: string): number {
  const orderA = a.sortOrder;
  const orderB = b.sortOrder;
  const hasOrderA = typeof orderA === 'number' && Number.isFinite(orderA);
  const hasOrderB = typeof orderB === 'number' && Number.isFinite(orderB);

  if (hasOrderA && hasOrderB && orderA !== orderB) return orderA - orderB;
  if (hasOrderA && !hasOrderB) return -1;
  if (!hasOrderA && hasOrderB) return 1;

  const textA = itemSearchText(a);
  const textB = itemSearchText(b);
  const tierA = getConsultationTier(textA);
  const tierB = getConsultationTier(textB);

  if (categoryId === 'konsultatsii') {
    const specA = getKonsultatsiiSpecialtyRank(textA);
    const specB = getKonsultatsiiSpecialtyRank(textB);
    if (specA !== specB) return specA - specB;
    if (tierA !== tierB) return tierA - tierB;
  } else if (tierA !== tierB) {
    return tierA - tierB;
  }

  const priceDiff = (a.priceValue ?? 0) - (b.priceValue ?? 0);
  if (priceDiff !== 0) return priceDiff;

  return textA.localeCompare(textB, 'ru');
}

export function sortPriceItemsInCategory(items: PriceItem[], categoryId: string): PriceItem[] {
  return [...items].sort((a, b) => comparePriceItems(a, b, categoryId));
}
