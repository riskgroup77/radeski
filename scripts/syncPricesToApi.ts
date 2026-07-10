/**
 * Excel katalogidagi narxlarni API bilan sinxronlashtiradi:
 * - mavjud pozitsiyalarni yangilaydi (tarjima, narx, tartib, category_id)
 * - yo'q bo'lsa qo'shadi
 *
 * Usage:
 *   set ADMIN_USERNAME=admin
 *   set ADMIN_PASSWORD=radeski2026
 *   npx tsx scripts/syncPricesToApi.ts
 */
import 'dotenv/config';
import { adminLogin, createPrice, getAdminPrices, getAdminServices, updatePrice } from '../src/api/adminApi';
import { mapPriceToCreatePayload } from '../src/api/mappers';
import { PRICE_CATEGORY_ORDER } from '../src/data/priceCategoryLabels';
import type { PriceItem } from '../src/types';
import { buildCatalogPriceItems, normalizeKey } from '../src/utils/priceCatalog';

const API_URL = (process.env.VITE_API_URL || 'https://radeskiapi.arxivfjsti.uz').replace(/\/$/, '');
const REQUEST_DELAY_MS = Number(process.env.SYNC_DELAY_MS || 150);
const MAX_RETRIES = 5;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function withRetry<T>(label: string, fn: () => Promise<T>): Promise<T> {
  let attempt = 0;
  while (true) {
    try {
      return await fn();
    } catch (error) {
      attempt++;
      const message = error instanceof Error ? error.message : String(error);
      const isRateLimit = /too many requests|429/i.test(message);
      if (!isRateLimit || attempt > MAX_RETRIES) {
        throw error;
      }
      const waitMs = REQUEST_DELAY_MS * 2 ** attempt;
      console.warn(`Rate limited for "${label}", retry ${attempt}/${MAX_RETRIES} in ${waitMs}ms`);
      await sleep(waitMs);
    }
  }
}

function matchKey(nameRu: string, priceValue: number): string {
  return `${normalizeKey(nameRu)}::${priceValue ?? 0}`;
}

function assignGlobalSortOrder(items: PriceItem[]): PriceItem[] {
  const byCategory = new Map<string, PriceItem[]>();
  for (const item of items) {
    const list = byCategory.get(item.category) ?? [];
    list.push(item);
    byCategory.set(item.category, list);
  }

  let globalOrder = 0;
  const ordered: PriceItem[] = [];

  for (const categoryId of PRICE_CATEGORY_ORDER) {
    const catItems = byCategory.get(categoryId);
    if (!catItems?.length) continue;
    catItems.sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
    for (const item of catItems) {
      ordered.push({ ...item, sortOrder: ++globalOrder });
    }
    byCategory.delete(categoryId);
  }

  byCategory.forEach((catItems) => {
    catItems.sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
    for (const item of catItems) {
      ordered.push({ ...item, sortOrder: ++globalOrder });
    }
  });

  return ordered;
}

function needsUpdate(
  api: {
    category_id: string;
    name_uz: string;
    name_ru: string;
    name_en: string;
    price_value: number;
    sort_order?: number | null;
  },
  payload: ReturnType<typeof mapPriceToCreatePayload>,
): boolean {
  return (
    api.category_id !== payload.category_id ||
    api.name_uz !== payload.name_uz ||
    api.name_ru !== payload.name_ru ||
    api.name_en !== payload.name_en ||
    api.price_value !== payload.price_value ||
    (api.sort_order ?? 0) !== (payload.sort_order ?? 0)
  );
}

async function main() {
  const username = process.env.ADMIN_USERNAME?.trim();
  const password = process.env.ADMIN_PASSWORD?.trim();

  if (!username || !password) {
    console.error('ADMIN_USERNAME and ADMIN_PASSWORD env vars are required.');
    process.exit(1);
  }

  console.log(`API: ${API_URL}`);
  const tokenRes = await adminLogin({ username, password });
  const token = tokenRes.access_token;

  const services = await getAdminServices(token);
  const serviceCategoryIds = services.map((s) => s.id);
  console.log(`Service categories: ${serviceCategoryIds.length}`);

  const catalogItems = assignGlobalSortOrder(buildCatalogPriceItems());
  console.log(`Catalog items: ${catalogItems.length}`);

  const apiPrices = await getAdminPrices(undefined, token);
  console.log(`API prices: ${apiPrices.length}`);

  const apiByKey = new Map<string, typeof apiPrices>();
  for (const api of apiPrices) {
    const key = matchKey(api.name_ru || api.name_uz, api.price_value);
    const list = apiByKey.get(key) ?? [];
    list.push(api);
    apiByKey.set(key, list);
  }

  let created = 0;
  let updated = 0;
  let unchanged = 0;
  let failed = 0;
  const usedApiIds = new Set<string>();

  for (const item of catalogItems) {
    const payload = mapPriceToCreatePayload(item, serviceCategoryIds);
    const key = matchKey(item.name.ru, item.priceValue ?? 0);
    const candidates = apiByKey.get(key) ?? [];
    const apiMatch = candidates.find((c) => !usedApiIds.has(c.id)) ?? candidates[0];

    try {
      if (apiMatch) {
        usedApiIds.add(apiMatch.id);
        if (needsUpdate(apiMatch, payload)) {
          await withRetry(item.name.ru, () => updatePrice(apiMatch.id, payload, token));
          updated++;
          await sleep(REQUEST_DELAY_MS);
        } else {
          unchanged++;
        }
      } else {
        await withRetry(item.name.ru, () => createPrice(payload, token));
        created++;
        await sleep(REQUEST_DELAY_MS);
      }
    } catch (error) {
      failed++;
      const detail = error instanceof Error ? error.message : String(error);
      console.error(`FAILED [${item.category}] ${item.name.ru} — ${detail}`);
    }
  }

  const orphans = apiPrices.filter((api) => !usedApiIds.has(api.id));

  console.log('\n--- Sync summary ---');
  console.log(`Created: ${created}`);
  console.log(`Updated: ${updated}`);
  console.log(`Unchanged: ${unchanged}`);
  console.log(`Failed: ${failed}`);
  console.log(`API-only (not in Excel catalog): ${orphans.length}`);

  if (orphans.length > 0 && orphans.length <= 20) {
    console.log('\nOrphan samples:');
    for (const o of orphans.slice(0, 20)) {
      console.log(`  - ${o.name_ru} (${o.price_value}) [${o.category_id}]`);
    }
  }

  if (failed > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
