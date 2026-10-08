import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import type { Locale } from '../types';
import {
  ALL_LOCAL_COMMERCIAL_LANDINGS,
  getLocalizedCopy,
  localCommercialPath,
  type LocalCommercialLanding,
  type LocalSeoCity,
} from '../data/localCommercialSeoCatalog';

interface CityServiceLinksProps {
  locale: Locale;
  /** Landings of one service category (service pages) … */
  serviceCategoryId?: string;
  /** … or every other landing of one city (city service pages). */
  city?: LocalSeoCity;
  excludeSlug?: string;
}

const CITY_TITLE: Record<LocalSeoCity, Record<Locale, string>> = {
  fargona: { uz: "Farg'ona filialida", ru: 'В Фергане', en: 'In Fergana' },
  qoqon: { uz: "Qo'qon filialida", ru: 'В Коканде', en: 'In Kokand' },
};

/**
 * Links to the city service pages ("Lazer epilyatsiya Farg'onada" …). Internal links are
 * how search engines find and weigh these pages, so service sections and the city pages
 * themselves point at them.
 */
export default function CityServiceLinks({ locale, serviceCategoryId, city, excludeSlug }: CityServiceLinksProps) {
  const landings = ALL_LOCAL_COMMERCIAL_LANDINGS.filter(
    (item) =>
      (!serviceCategoryId || item.serviceCategoryId === serviceCategoryId) &&
      (!city || item.city === city) &&
      item.slug !== excludeSlug,
  );
  if (landings.length === 0) return null;

  const byCity = (['fargona', 'qoqon'] as const)
    .map((key) => ({ key, items: landings.filter((item) => item.city === key) }))
    .filter((group) => group.items.length > 0);

  const title = city
    ? locale === 'uz'
      ? `${CITY_TITLE[city].uz} boshqa xizmatlar`
      : locale === 'ru'
        ? `Другие услуги ${city === 'qoqon' ? 'в Коканде' : 'в Фергане'}`
        : `Other services ${city === 'qoqon' ? 'in Kokand' : 'in Fergana'}`
    : locale === 'uz'
      ? "Farg'ona va Qo'qon filiallarida"
      : locale === 'ru'
        ? 'В филиалах в Фергане и Коканде'
        : 'At the Fergana and Kokand branches';

  return (
    <div className="mt-12">
      <h2 className="text-xl font-extrabold text-brand-text-primary tracking-tight">{title}</h2>
      <div className={`mt-4 grid gap-4 ${byCity.length > 1 ? 'sm:grid-cols-2' : ''}`}>
        {byCity.map((group) => (
          <div key={group.key}>
            {!city && (
              <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-gold mb-2">
                <MapPin className="w-3.5 h-3.5" />
                {CITY_TITLE[group.key][locale]}
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              {group.items.map((item: LocalCommercialLanding) => (
                <Link
                  key={`${item.city}-${item.slug}`}
                  to={localCommercialPath(locale, item.city, item.slug)}
                  className="px-3.5 py-2 bg-brand-white border border-brand-sectiongray rounded-xl text-sm font-semibold text-brand-text-primary no-underline hover:border-brand-gold/40"
                >
                  {getLocalizedCopy(item.h1, locale)}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
