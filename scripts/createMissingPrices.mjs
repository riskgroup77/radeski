/**
 * API da topilmagan (update 404) narx pozitsiyalarini qayta yaratadi.
 */
import 'dotenv/config';
import { adminLogin, createPrice, getAdminPrices, getAdminServices } from '../src/api/adminApi';
import { mapPriceToCreatePayload } from '../src/api/mappers';
import { buildCatalogPriceItems, normalizeKey } from '../src/utils/priceCatalog';

const API_URL = (process.env.VITE_API_URL || 'https://api.radeski.uz').replace(/\/$/, '');

const TARGET_KEYS = new Set([
  'первичный осмотр врача дерматоонколога + дерматоскопия::150000',
  'повторная консультация к врачу дерматоонколога::100000',
  'панч биопсия::300000',
  'биопсия::200000',
  'гистологическое исследование::3000000',
  'операция базалиома::4000000',
  'удаление родинок от::100000',
  'удаление новообразований от::100000',
  'дерматоскопия тела + база данных::2000000',
  'трихопигментация голова 50%::1200000',
  'трихопигментация голова 100%::2400000',
  'пигментация кожи 10 см кв::600000',
  'пересадка меланоцитов 1 до 10 см²::5000000',
  'пересадка меланоцитов 10 до 20 см²::10000000',
  'пересадка меланоцитов 30 до 40 см²::20000000',
  'пересадка меланоцитов 1см::4000000',
  'ат к тпо::65000',
  'хгч ранняя диагностика беременности::80000',
]);

function matchKey(nameRu, priceValue) {
  return `${normalizeKey(nameRu)}::${priceValue ?? 0}`;
}

async function main() {
  const token = (await adminLogin({
    username: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD,
  })).access_token;

  const services = await getAdminServices(token);
  const serviceCategoryIds = services.map((s) => s.id);
  const apiPrices = await getAdminPrices(undefined, token);
  const existing = new Set(apiPrices.map((p) => matchKey(p.name_ru || p.name_uz, p.price_value)));

  const catalog = buildCatalogPriceItems();
  let created = 0;
  let skipped = 0;

  for (const item of catalog) {
    const key = matchKey(item.name.ru, item.priceValue ?? 0);
    if (!TARGET_KEYS.has(key)) continue;
    if (existing.has(key)) {
      console.log('SKIP exists:', item.name.ru);
      skipped++;
      continue;
    }
    const payload = mapPriceToCreatePayload(item, serviceCategoryIds);
    await createPrice(payload, token);
    console.log('CREATED:', item.name.ru, '→', payload.name_uz);
    created++;
    await new Promise((r) => setTimeout(r, 400));
  }

  console.log(`\nDone. Created: ${created}, skipped: ${skipped}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
