import { Link } from 'react-router-dom';

import { CornerUpLeft } from 'lucide-react';

import type { Article, Locale, PriceItem, ServiceCategory } from '../types';

import type { ClinicVideo, TreatmentResult } from '../data/sitePagesContent';

import { DICTIONARY } from '../data';

import { getLocalizedEquipmentText, type ClinicEquipmentEntry } from '../data/clinicEquipmentCatalog';

import { serviceCategoryPath, servicesListPath } from '../routing/paths';

import {

  getRelatedArticlesForEquipment,

  getRelatedResultsForEquipment,

  getRelatedVideosForEquipment,

} from '../utils/equipmentRelatedContent';

import { resolveCategoryIcon } from '../utils/serviceIcons';

import { buildServiceH1 } from '../seo/pageMeta';

import ServicePageHero from './ServicePageHero';

import EquipmentDetailContent from './EquipmentDetailContent';

import ServiceRelatedArticlesSection from './ServiceRelatedArticlesSection';

import ServiceRelatedResultsSection from './ServiceRelatedResultsSection';

import ServiceRelatedVideosSection from './ServiceRelatedVideosSection';



interface ClinicEquipmentPageProps {

  locale: Locale;

  category: ServiceCategory;

  equipment: ClinicEquipmentEntry;

  articles?: Article[];

  prices?: PriceItem[];

  videos?: ClinicVideo[];

  results?: TreatmentResult[];

  dictionary?: Record<string, string>;

}



function heroDescription(text: string, maxLength = 300): string {

  const trimmed = text.trim();

  if (trimmed.length <= maxLength) return trimmed;

  const cut = trimmed.slice(0, maxLength);

  const lastSpace = cut.lastIndexOf(' ');

  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}…`;

}



export default function ClinicEquipmentPage({

  locale,

  category,

  equipment,

  articles = [],

  prices,

  videos = [],

  results = [],

  dictionary,

}: ClinicEquipmentPageProps) {

  const d = dictionary || DICTIONARY[locale];

  const title = getLocalizedEquipmentText(equipment.title, locale);

  const heroText = heroDescription(getLocalizedEquipmentText(equipment.shortDescription, locale));



  const equipmentId = equipment.id as Parameters<typeof getRelatedArticlesForEquipment>[1];
  const relatedArticles = getRelatedArticlesForEquipment(articles, equipmentId);

  const relatedResults = getRelatedResultsForEquipment(results, equipmentId, locale);

  const relatedVideos = getRelatedVideosForEquipment(videos, equipmentId, locale);



  return (

    <section id={`equipment-page-${equipment.id}`} className="min-h-screen bg-brand-offwhite py-8 sm:py-12">

      <div className="site-container">

        <div className="mb-6 flex flex-wrap gap-2">

          <Link

            to={servicesListPath(locale)}

            className="inline-flex items-center gap-2 rounded-xl border border-brand-sectiongray bg-brand-white px-3.5 py-2 text-xs font-semibold text-brand-text-secondary no-underline transition-all hover:bg-brand-offwhite hover:text-brand-text-primary"

          >

            <CornerUpLeft className="h-4 w-4" />

            {locale === 'uz' ? 'Barcha xizmatlar' : locale === 'ru' ? 'Все услуги' : 'All services'}

          </Link>

          <Link

            to={serviceCategoryPath(locale, category.id)}

            className="inline-flex items-center gap-2 rounded-xl border border-brand-gold-light/30 bg-brand-gold-light/10 px-3.5 py-2 text-xs font-semibold text-brand-gold no-underline transition-all hover:bg-brand-gold-light/20 hover:text-brand-gold-dark"

          >

            {category.title[locale]}

          </Link>

        </div>



        <ServicePageHero
          badge={category.title[locale]}
          title={buildServiceH1(title, locale)}
          description={heroText}
          image={equipment.image}
          iconName={resolveCategoryIcon(category)}
          appointmentLabel={d.appointmentBtn}
        />



        <div className="mt-8">

          <EquipmentDetailContent

            entry={equipment}

            locale={locale}

            category={category}

            prices={prices}

          />

        </div>



        <ServiceRelatedResultsSection locale={locale} results={relatedResults} />

        <ServiceRelatedVideosSection locale={locale} videos={relatedVideos} />



        {relatedArticles.length > 0 ? (

          <ServiceRelatedArticlesSection

            locale={locale}

            categoryId={category.id}

            articles={articles}

            presetArticles={relatedArticles}

            dictionary={d}

          />

        ) : null}

      </div>

    </section>

  );

}


