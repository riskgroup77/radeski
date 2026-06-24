import type { PriceItem } from '../types';

const STORAGE_KEY = 'radeski_price_sort_orders_v1';

function readPriceSortOrderMap(): Record<string, number> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const map: Record<string, number> = {};
    Object.entries(parsed).forEach(([id, value]) => {
      if (typeof value === 'number' && Number.isFinite(value)) {
        map[id] = value;
      }
    });
    return map;
  } catch {
    return {};
  }
}

export function writePriceSortOrder(priceId: string, sortOrder: number | undefined): void {
  if (typeof window === 'undefined' || !priceId) return;
  const map = readPriceSortOrderMap();
  if (sortOrder === undefined || !Number.isFinite(sortOrder) || sortOrder < 1) {
    delete map[priceId];
  } else {
    map[priceId] = Math.round(sortOrder);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
}

export function applyStoredPriceSortOrders(items: PriceItem[]): PriceItem[] {
  const map = readPriceSortOrderMap();
  return items.map((item) => ({
    ...item,
    sortOrder: item.sortOrder ?? map[item.id],
  }));
}

export function getNextSortOrderInCategory(categoryId: string, items: PriceItem[]): number {
  const orders = items
    .filter((item) => item.category === categoryId)
    .map((item) => item.sortOrder)
    .filter((value): value is number => typeof value === 'number' && Number.isFinite(value));

  return orders.length > 0 ? Math.max(...orders) + 1 : 1;
}
