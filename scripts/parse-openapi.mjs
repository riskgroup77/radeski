import fs from 'fs';

const o = JSON.parse(fs.readFileSync('openapi-temp.json', 'utf8'));
const schemas = o.components?.schemas ?? {};

function refName(v) {
  if (v.$ref) return v.$ref.split('/').pop();
  if (v.anyOf) return v.anyOf.map(refName).join('|');
  if (v.type === 'array' && v.items) return `${refName(v.items)}[]`;
  return v.type ?? 'unknown';
}

function show(name) {
  const sch = schemas[name];
  if (!sch) return;
  const props = sch.properties ?? {};
  const req = sch.required ?? [];
  console.log(`\n### ${name}`);
  if (req.length) console.log(`  required: ${req.join(', ')}`);
  for (const [k, v] of Object.entries(props)) {
    console.log(`  ${k}: ${refName(v)}${v.nullable ? ' | null' : ''}${req.includes(k) ? ' *' : ''}`);
  }
}

const keys = [
  'LoginRequest',
  'TokenResponse',
  'ServiceCategoryOut',
  'SubServiceOut',
  'ConditionItem',
  'DoctorOut',
  'DoctorCredentialOut',
  'PriceOut',
  'PriceCreate',
  'PriceBulkImport',
  'ArticleOut',
  'ArticleListOut',
  'SiteTextOut',
  'SiteTextsBulkUpdate',
  'SiteTextUpsert',
  'ReviewOut',
  'ReviewCreate',
  'PartnerOut',
  'BranchOut',
  'TreatmentResultOut',
  'ClinicVideoOut',
  'ClinicRatingOut',
  'AppointmentCreate',
  'AppointmentOut',
  'ClientCountOut',
  'FaqItem',
];

for (const k of keys) show(k);

// ServiceCategoryCreate from inline if exists
for (const [name, sch] of Object.entries(schemas)) {
  if (name.includes('ServiceCategory') && sch.properties?.id) {
    console.log('\n### (create payload fields in schema ' + name + ')');
    for (const [k, v] of Object.entries(sch.properties)) {
      console.log(`  ${k}: ${refName(v)}`);
    }
  }
}
