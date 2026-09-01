import { LOCALES } from '../routing/locale';
import { SITE_ORIGIN } from '../routing/paths';
import { ALL_LOCAL_COMMERCIAL_LANDINGS, localCommercialPath } from '../data/localCommercialSeoCatalog';
import type { Locale } from '../types';

function hreflangLinks(pathForLocale: (locale: Locale) => string): string {
  return LOCALES.map(
    (locale) =>
      `    <xhtml:link rel="alternate" hreflang="${locale === 'uz' ? 'uz-UZ' : locale === 'ru' ? 'ru-RU' : 'en-US'}" href="${SITE_ORIGIN}${pathForLocale(locale)}"/>`,
  )
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_ORIGIN}${pathForLocale('uz')}"/>`)
    .join('\n');
}

export function buildLocalCommercialSitemapXml(): string {
  const urls: string[] = [];

  for (const landing of ALL_LOCAL_COMMERCIAL_LANDINGS) {
    const pathForLocale = (locale: Locale) => localCommercialPath(locale, landing.city, landing.slug);
    for (const locale of LOCALES) {
      urls.push(`  <url>
    <loc>${SITE_ORIGIN}${pathForLocale(locale)}</loc>
${hreflangLinks(pathForLocale)}
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>`);
    }
  }

  return urls.join('\n\n');
}

export function buildCityHubSitemapXml(): string {
  const hubs = ['fargona', 'qoqon'] as const;
  const urls: string[] = [];

  for (const hub of hubs) {
    const pathForLocale = (locale: Locale) => `/${locale}/${hub}`;
    for (const locale of LOCALES) {
      urls.push(`  <url>
    <loc>${SITE_ORIGIN}${pathForLocale(locale)}</loc>
${hreflangLinks(pathForLocale)}
    <changefreq>weekly</changefreq>
    <priority>0.92</priority>
  </url>`);
    }
  }

  return urls.join('\n\n');
}
