import type { Locale } from '../types';

const ORIGIN = 'https://radeski.uz';

const HREFLANG: Record<Locale, string> = {
  uz: 'uz-UZ',
  ru: 'ru-RU',
  en: 'en-US',
};

type ArticleSitemapGroup = {
  routeKey: string;
  locales: Locale[];
  priority: Partial<Record<Locale, number>>;
};

/** Public article URLs for sitemap.xml (excludes redirected/superseded pages). */
export const SITEMAP_ARTICLE_GROUPS: ArticleSitemapGroup[] = [
  { routeKey: 'art-ipl-terapiya', locales: ['uz', 'ru'], priority: { uz: 0.85, ru: 0.8 } },
  { routeKey: 'art-akne', locales: ['uz', 'ru'], priority: { uz: 0.85, ru: 0.8 } },
  { routeKey: 'art-pryshchi-u-vzroslykh', locales: ['uz', 'ru'], priority: { uz: 0.85, ru: 0.8 } },
  { routeKey: 'art-postakne', locales: ['uz', 'ru'], priority: { uz: 0.8, ru: 0.75 } },
  { routeKey: 'art-vitiligo-daavlin', locales: ['uz', 'ru'], priority: { uz: 0.85, ru: 0.8 } },
  { routeKey: 'art-psoriasis-daavlin-kokand', locales: ['uz', 'ru'], priority: { uz: 0.85, ru: 0.8 } },
  { routeKey: 'art-bolalarda-sogal-co2-deka', locales: ['uz', 'ru'], priority: { uz: 0.8, ru: 0.75 } },
  {
    routeKey: 'art-deka-moveo-epilyatsiya-tayyorgarlik',
    locales: ['uz', 'ru'],
    priority: { uz: 0.8, ru: 0.75 },
  },
  {
    routeKey: 'art-deka-moveo-fergana-faq',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  { routeKey: 'art-plazmotorapiya-soch-prp', locales: ['uz', 'ru'], priority: { uz: 0.8, ru: 0.75 } },
  { routeKey: 'art-plazmaferez-teri-kasalliklari', locales: ['uz', 'ru'], priority: { uz: 0.75, ru: 0.7 } },
  {
    routeKey: 'art-hair-transplant-contraindications',
    locales: ['uz', 'ru'],
    priority: { uz: 0.75, ru: 0.7 },
  },
  { routeKey: 'art-co2-lazer-deka', locales: ['uz', 'ru'], priority: { uz: 0.8, ru: 0.75 } },
  {
    routeKey: 'art-akne-dermatolog-kosmetolog',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  {
    routeKey: 'art-rozatseya-davolash-radeski',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  {
    routeKey: 'art-ipl-fototerapiya-radeski',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  {
    routeKey: 'art-kontagioz-mollyusk-radeski',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  {
    routeKey: 'art-bolalarda-sogal-lazer-radeski',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  {
    routeKey: 'art-pigmentaciya-hollywood-spectra-radeski',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  {
    routeKey: 'art-sosudistaya-setochka-derma-v-radeski',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  {
    routeKey: 'art-tatuaj-brovey-hollywood-spectra-radeski',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  {
    routeKey: 'art-lasemd-ultra-kokand',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  {
    routeKey: 'art-thulium-laser-hair-kokand',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  {
    routeKey: 'art-lazernaya-shlifovka-rubcov',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  {
    routeKey: 'art-prp-terapiya-oldidan-tahlillar',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.8, ru: 0.75, en: 0.7 },
  },
  {
    routeKey: 'art-trixolog-trixoskopiya',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  {
    routeKey: 'art-bazalioma-teri-raki',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  {
    routeKey: 'art-atopic-dermatitis',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  {
    routeKey: 'art-onixokriptoz-klinik-holat',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  {
    routeKey: 'art-ipl-lumecca-pigmentatsiya-radeski',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  {
    routeKey: 'art-derma-v-qizarish-radeski',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  {
    routeKey: 'art-tetra-pro-yuz-tortish-radeski',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  {
    routeKey: 'art-hollywood-spectra-poralar-radeski',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  {
    routeKey: 'art-morpheus8-rf-lifting-radeski',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  {
    routeKey: 'art-deka-co2-chandiqlar-radeski',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.85, ru: 0.8, en: 0.75 },
  },
  {
    routeKey: 'art-jinsiy-azo-yassi-hujayrali-rak',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.8, ru: 0.75, en: 0.7 },
  },
  {
    routeKey: 'art-til-yassi-hujayrali-rak',
    locales: ['uz', 'ru', 'en'],
    priority: { uz: 0.8, ru: 0.75, en: 0.7 },
  },
];

export function buildArticleSitemapXml(): string {
  const lines: string[] = ['  <!-- Articles (hreflang) -->'];

  for (const group of SITEMAP_ARTICLE_GROUPS) {
    const defaultLocale: Locale = group.locales.includes('uz') ? 'uz' : group.locales[0];

    for (const locale of group.locales) {
      const loc = `${ORIGIN}/${locale}/articles/${group.routeKey}`;
      lines.push('  <url>');
      lines.push(`    <loc>${loc}</loc>`);
      for (const altLocale of group.locales) {
        lines.push(
          `    <xhtml:link rel="alternate" hreflang="${HREFLANG[altLocale]}" href="${ORIGIN}/${altLocale}/articles/${group.routeKey}"/>`,
        );
      }
      lines.push(
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN}/${defaultLocale}/articles/${group.routeKey}"/>`,
      );
      lines.push('    <changefreq>monthly</changefreq>');
      lines.push(`    <priority>${group.priority[locale] ?? 0.75}</priority>`);
      lines.push('  </url>');
    }
  }

  return lines.join('\n');
}
