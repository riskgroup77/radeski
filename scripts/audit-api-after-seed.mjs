/**
 * Post-seed API audit — counts and samples.
 */
const BASE = (process.env.VITE_API_URL || 'https://radeskiapi.arxivfjsti.uz').replace(/\/$/, '');

async function getJson(path) {
  const res = await fetch(`${BASE}${path}`);
  if (!res.ok) throw new Error(`${path} → ${res.status}`);
  return res.json();
}

async function main() {
  console.log(`Auditing ${BASE}\n`);

  const [services, prices, doctors, articles, siteTexts] = await Promise.all([
    getJson('/api/services'),
    getJson('/api/prices'),
    getJson('/api/doctors'),
    getJson('/api/articles'),
    getJson('/api/site-texts'),
  ]);

  console.log('=== Counts ===');
  console.log(`Services:    ${services.length}`);
  console.log(`Prices:      ${prices.length}`);
  console.log(`Doctors:     ${doctors.length}`);
  console.log(`Articles:    ${articles.length}`);
  console.log(`Site texts:  ${siteTexts.length}`);

  const serviceIds = services.map((s) => s.id);
  console.log('\n=== Service categories ===');
  console.log(serviceIds.join(', '));

  const priceByCategory = new Map();
  for (const p of prices) {
    priceByCategory.set(p.category_id, (priceByCategory.get(p.category_id) ?? 0) + 1);
  }
  console.log('\n=== Prices per service category ===');
  for (const [cat, count] of [...priceByCategory.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${cat}: ${count}`);
  }

  const derm = services.find((s) => s.id === 'dermatologiya');
  if (derm?.conditions_uz) {
    const raw = derm.conditions_uz;
    const conditions = typeof raw === 'string' ? JSON.parse(raw) : raw;
    const withWhy = conditions.filter((c) => c.aboutTitle).length;
    console.log(`\n=== dermatologiya conditions (uz) ===`);
    console.log(`  Total: ${conditions.length}, with «Nima uchun Radeski»: ${withWhy}`);
  }

  const aboutKeys = siteTexts.filter((t) => t.key.startsWith('catalog.service-about.'));
  const whyKeys = siteTexts.filter((t) => t.key.startsWith('catalog.condition-why.'));
  console.log(`\n=== Site-text catalog keys ===`);
  console.log(`  service-about: ${aboutKeys.length}`);
  console.log(`  condition-why: ${whyKeys.length}`);

  const dermSub = services.find((s) => s.id === 'apparatnaya-kosmetologiya');
  console.log(`\n=== apparatnaya-kosmetologiya sub-services ===`);
  console.log(dermSub?.sub_services?.map((s) => s.name_uz).join(' | ') ?? 'n/a');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
