const BASE = 'https://radeski.arxivfjsti.uz';

async function fetchJson(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, options);
  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = text;
  }
  return { status: res.status, data, text: text.slice(0, 500) };
}

function hasMojibake(s) {
  if (typeof s !== 'string') return false;
  return /\uFFFD/.test(s) || /\?{3,}/.test(s) || /N\?N/.test(s) || /[^\x00-\x7F\u0400-\u04FF\u0100-\u024F]/.test(s) && /\?/.test(s);
}

function scanMojibake(obj, path = '') {
  const issues = [];
  if (typeof obj === 'string') {
    if (hasMojibake(obj)) issues.push(path);
  } else if (Array.isArray(obj)) {
    obj.forEach((v, i) => issues.push(...scanMojibake(v, `${path}[${i}]`)));
  } else if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      issues.push(...scanMojibake(v, path ? `${path}.${k}` : k));
    }
  }
  return issues;
}

async function main() {
  const report = {};

  // Health
  report.health = await fetchJson('/health');

  // Doctors
  const doctors = await fetchJson('/api/doctors');
  report.doctors = {
    status: doctors.status,
    count: Array.isArray(doctors.data) ? doctors.data.length : 0,
    mojibakeFields: Array.isArray(doctors.data) ? scanMojibake(doctors.data).slice(0, 20) : [],
    sample: Array.isArray(doctors.data) ? doctors.data[0] : null,
    missingPhoto: Array.isArray(doctors.data) ? doctors.data.filter((d) => !d.photo).length : 0,
    credentialsPresent: Array.isArray(doctors.data)
      ? doctors.data.filter((d) => d.credentials).length
      : 0,
    photoDomains: Array.isArray(doctors.data)
      ? [...new Set(doctors.data.map((d) => d.photo && new URL(d.photo).hostname).filter(Boolean))]
      : [],
  };

  // Services
  const services = await fetchJson('/api/services');
  const cats = Array.isArray(services.data) ? services.data : [];
  let subCount = 0;
  let withLocalizedImages = 0;
  let withRichOverview = 0;
  let subWithImage = 0;
  for (const c of cats) {
    if (c.image_uz || c.image_ru || c.image_en) withLocalizedImages++;
    if (c.overview_uz || c.overview_ru) withRichOverview++;
    for (const s of c.sub_services || []) {
      subCount++;
      if (s.image || s.image_uz) subWithImage++;
    }
  }
  report.services = {
    status: services.status,
    categories: cats.length,
    subServices: subCount,
    mojibakeFields: scanMojibake(cats).slice(0, 15),
    withLocalizedImages,
    withRichOverview,
    subWithImage,
    sampleCategory: cats[0]
      ? {
          id: cats[0].id,
          hasImage: !!cats[0].image,
          image_uz: cats[0].image_uz,
          subCount: cats[0].sub_services?.length,
          firstSub: cats[0].sub_services?.[0],
        }
      : null,
  };

  // Prices
  const prices = await fetchJson('/api/prices');
  const priceList = Array.isArray(prices.data) ? prices.data : [];
  const categories = [...new Set(priceList.map((p) => p.category_id))];
  report.prices = {
    status: prices.status,
    count: priceList.length,
    categories: categories.length,
    categoryIds: categories,
    mojibakeInRu: priceList.filter((p) => hasMojibake(p.name_ru)).length,
    zeroPrices: priceList.filter((p) => !p.price_value || p.price_value <= 0).length,
  };

  // Articles list
  const articles = await fetchJson('/api/articles');
  const articleList = Array.isArray(articles.data) ? articles.data : [];
  report.articles = {
    status: articles.status,
    count: articleList.length,
    mojibakeFields: scanMojibake(articleList).slice(0, 15),
    withLocalizedImages: articleList.filter((a) => a.image_uz || a.image_ru).length,
    viewsSample: articleList.map((a) => ({ slug: a.slug, views: a.views })),
  };

  // Article detail + views increment test
  if (articleList[0]) {
    const slug = articleList[0].slug;
    const detail1 = await fetchJson(`/api/articles/${slug}`);
    const detail2 = await fetchJson(`/api/articles/${slug}`);
    const a = detail1.data;
    report.articleDetail = {
      slug,
      status: detail1.status,
      contentLengths: a
        ? {
            uz: (a.content_uz || '').length,
            ru: (a.content_ru || '').length,
            en: (a.content_en || '').length,
          }
        : null,
      summaryLengths: a
        ? {
            uz: (a.summary_uz || '').length,
            ru: (a.summary_ru || '').length,
          }
        : null,
      viewsFirst: a?.views,
      viewsSecond: detail2.data?.views,
      viewsIncrement: detail2.data?.views > a?.views,
      hasRichFields: a
        ? Object.keys(a).filter((k) => k.includes('faq') || k.includes('takeaway') || k.includes('tag'))
        : [],
      mojibakeInContent: a ? scanMojibake(a).slice(0, 10) : [],
    };
  }

  // Search
  const search = await fetchJson('/api/articles?search=psoriaz');
  report.articleSearch = {
    status: search.status,
    count: Array.isArray(search.data) ? search.data.length : 'not-array',
    works: Array.isArray(search.data) && search.data.length > 0,
  };

  // Appointments POST (dry test with invalid to see validation)
  const appt = await fetchJson('/api/appointments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone_number: '+998731234567', service_id: null }),
  });
  report.appointments = { status: appt.status, response: appt.data };

  // Admin login without creds
  const adminFail = await fetchJson('/api/admin/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'test', password: 'test' }),
  });
  report.adminLogin = { status: adminFail.status, response: adminFail.data };

  // CORS headers check
  const corsRes = await fetch(`${BASE}/api/doctors`, { method: 'OPTIONS' }).catch((e) => ({ status: 'fail', error: String(e) }));
  report.corsOptions = corsRes.status || corsRes;

  // OpenAPI/docs
  for (const p of ['/docs', '/openapi.json', '/redoc']) {
    const r = await fetchJson(p);
    report[`endpoint_${p.replace(/\//g, '')}`] = { status: r.status, isJson: typeof r.data === 'object' };
  }

  console.log(JSON.stringify(report, null, 2));
}

main().catch(console.error);
