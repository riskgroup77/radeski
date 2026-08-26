import type { Locale } from '../types';

const ORIGIN = 'https://radeski.uz';
const LOCALES: Locale[] = ['uz', 'ru', 'en'];

export function buildDoctorSitemapXml(doctorIds: string[]): string {
  if (doctorIds.length === 0) return '';

  const lines: string[] = ['  <!-- Doctor profiles -->'];

  for (const doctorId of doctorIds) {
    for (const locale of LOCALES) {
      lines.push('  <url>');
      lines.push(`    <loc>${ORIGIN}/${locale}/doctors/${encodeURIComponent(doctorId)}</loc>`);
      lines.push('    <changefreq>monthly</changefreq>');
      lines.push(`    <priority>${locale === 'uz' ? '0.75' : locale === 'ru' ? '0.7' : '0.65'}</priority>`);
      lines.push('  </url>');
    }
  }

  return lines.join('\n');
}
