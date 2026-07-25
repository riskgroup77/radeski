/**
 * API dagi takrorlangan narx yozuvlarini tozalaydi (eski + yangi import).
 * Har bir name_ru + price_value juftligi uchun bittasini qoldiradi.
 */
import 'dotenv/config';
import { adminLogin, deletePrice, getAdminPrices } from '../src/api/adminApi';
import { buildCatalogPriceItems, normalizeKey } from '../src/utils/priceCatalog';

const DRY_RUN = process.env.DRY_RUN === '1';

function matchKey(nameRu, priceValue) {
  return `${normalizeKey(nameRu)}::${priceValue ?? 0}`;
}

async function main() {
  const token = (await adminLogin({
    username: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD,
  })).access_token;

  const apiPrices = await getAdminPrices(undefined, token);
  const catalogKeys = new Set(
    buildCatalogPriceItems().map((item) => matchKey(item.name.ru, item.priceValue ?? 0)),
  );

  const groups = new Map();
  for (const api of apiPrices) {
    const key = matchKey(api.name_ru || api.name_uz, api.price_value);
    const list = groups.get(key) ?? [];
    list.push(api);
    groups.set(key, list);
  }

  const toDelete = [];
  for (const [key, list] of groups) {
    if (list.length <= 1) continue;
    // Eng yaxshi tarjimali yoki uz to'ldirilganini qoldiramiz
    list.sort((a, b) => {
      const aScore = (a.name_uz?.length ?? 0) + (catalogKeys.has(key) && a.name_uz ? 1000 : 0);
      const bScore = (b.name_uz?.length ?? 0) + (catalogKeys.has(key) && b.name_uz ? 1000 : 0);
      return bScore - aScore;
    });
    for (const dup of list.slice(1)) {
      toDelete.push(dup);
    }
  }

  console.log(`API prices: ${apiPrices.length}`);
  console.log(`Duplicate groups: ${[...groups.values()].filter((g) => g.length > 1).length}`);
  console.log(`To delete: ${toDelete.length}`);

  if (DRY_RUN) {
    console.log('DRY_RUN=1 — o\'chirish o\'tkazilmadi');
    return;
  }

  let deleted = 0;
  for (const item of toDelete) {
    let attempt = 0;
    while (true) {
      try {
        await deletePrice(item.id, token);
        deleted++;
        break;
      } catch (error) {
        attempt++;
        const msg = error instanceof Error ? error.message : String(error);
        if (!/too many requests|429/i.test(msg) || attempt > 8) throw error;
        const wait = 500 * 2 ** attempt;
        console.warn(`Rate limit, wait ${wait}ms...`);
        await new Promise((r) => setTimeout(r, wait));
      }
    }
    if (deleted % 25 === 0) console.log(`Deleted ${deleted}/${toDelete.length}...`);
    await new Promise((r) => setTimeout(r, 300));
  }

  console.log(`Done. Deleted: ${deleted}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
