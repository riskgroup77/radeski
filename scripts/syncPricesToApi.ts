/**
 * Upload priceCatalog.json to backend API (bulk import).
 *
 * Usage:
 *   set VITE_API_URL=https://radeskiapi.arxivfjsti.uz
 *   set ADMIN_USERNAME=...
 *   set ADMIN_PASSWORD=...
 *   npx tsx scripts/syncPricesToApi.ts
 */
import { buildCatalogPriceItems } from '../src/utils/priceCatalog';
import { mapPriceToCreatePayload } from '../src/api/mappers';
import { adminLogin } from '../src/api/adminApi';

const API_URL = process.env.VITE_API_URL || 'https://radeskiapi.arxivfjsti.uz';

async function main() {
  const username = process.env.ADMIN_USERNAME?.trim();
  const password = process.env.ADMIN_PASSWORD?.trim();

  if (!username || !password) {
    console.error('ADMIN_USERNAME and ADMIN_PASSWORD env vars are required.');
    process.exit(1);
  }

  const base = API_URL.replace(/\/$/, '');
  console.log(`API: ${base}`);

  const tokenRes = await adminLogin({ username, password });
  const token = tokenRes.access_token;

  const catalogItems = buildCatalogPriceItems();
  const payload = {
    items: catalogItems.map((item) => mapPriceToCreatePayload(item)),
  };

  console.log(`Importing ${payload.items.length} prices...`);

  const res = await fetch(`${base}/api/admin/prices/import`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    data = text;
  }

  if (!res.ok) {
    console.error('Import failed:', res.status, data);
    process.exit(1);
  }

  console.log('Import result:', data);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
