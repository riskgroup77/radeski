/**
 * Build-time prerender (bundled with `vite build --ssr`, run by scripts/prerender.mjs).
 *
 * For every URL in the sitemap it writes static HTML with the real <head> (title, meta,
 * canonical, hreflang, JSON-LD) and a readable body (H1, description and the page's main
 * content — full article text, doctor profile, service list, price list…). Crawlers that do
 * not execute JavaScript (Yandex, link previews) now see each page's own content instead of
 * an empty <div id="root"> with the home-page title. In the browser React replaces it.
 */
import { assertSubServiceCatalogIdsInSync } from '../data/serviceRichCatalog';
import { resolveDoctorProfile } from '../data/doctorProfiles';
import type { ReactNode } from 'react';
import { getEquipmentDetails, loadAllEquipmentDetails } from '../data/equipment/equipmentDetails';
import { getConditionSlugFromPathname } from '../routing/paths';
import { isDermatologyConditionSlug } from '../data/dermatologyConditionsNav';
import { getDermatologyConditionTopic } from '../utils/dermatologyConditions';
import { DERMATOLOGY_CONDITION_NAV } from '../data/dermatologyConditionsNav';
import { HOME_PROMO_SLIDES } from '../data/homePromoCarousel';
import type { Doctor, ServiceCategory, ServiceConditionTopic } from '../types';
import { getLocalizedConditionText } from '../data/serviceConditionDetailsCatalog';
import { getConditionSectionLabels, resolveConditionDisplay } from '../utils/serviceConditionDetails';
import { articleServiceLinks } from '../utils/articleServiceLinks';
import type { CustomerReview, TreatmentResult } from '../data/sitePagesContent';
import { educationProgramPath, getEducationProgramSlugFromPathname, resolveEducationProgram } from '../utils/educationPrograms';
import type { EducationProgramId } from '../data/obrazovaniyaContent';
import { buildServiceH1 } from '../seo/pageMeta';
import { getCategoryEquipmentList, getLocalizedEquipmentText, type ClinicEquipmentEntry } from '../data/clinicEquipmentCatalog';
import { getHomeServiceTeaserMedia } from '../data/homeServiceTeaserVideos';
import { responsiveImage } from '../utils/imageVariants';
import { getLocalizedImage } from '../utils/localizedImage';
import { buildInitialSiteData, type RawSiteData } from '../ssr/buildInitialSiteData';
import { isSsrRoute, renderAppHtml } from '../ssr/renderApp';
import { BRANCHES_PAGE_GUIDE, DOCTORS_PAGE_GUIDE, type ListPageGuide } from '../data/listPageGuides';
import { getEquipmentSectionLabels } from '../utils/clinicEquipmentLabels';
import { subServiceLinkName, subServiceRouteKey } from '../utils/serviceSubSlug';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import type { Article, Locale, PriceItem } from '../types';
import { DICTIONARY } from '../data';
import { dictionaryOverridesFromSiteTexts, type DictionaryOverrides } from '../data/dictionaryOverrides';
import { CLINIC_BRANCHES } from '../data/sitePagesContent';
import { CLINIC_PHONE_KOKAND, CLINIC_PHONE_PRIMARY } from '../config/clinicContacts';
import { PRICE_CATEGORY_ORDER } from '../data/priceCategoryLabels';
import { transformClinicData, type ClinicData, type RawClinicData } from '../api/clinicDataTransform';
import { transformClinicPrices } from '../api/clinicPricesTransform';
import { mapClinicRatingFromApi, mapClinicVideoFromApi } from '../api/cmsMappers';
import type { ApiClinicRatingOut, ApiClinicVideoOut } from '../api/cmsTypes';
import { buildFaqSchema } from '../seo/structuredData';
import {
  SITE_ORIGIN,
  articlePath,
  conditionPath,
  daavlinModelPath,
  doctorPath,
  getLocaleFromPathname,
  pagePath,
  serviceCategoryPath,
  serviceEquipmentPath,
  serviceSubPath,
  type DaavlinModelId,
  type PageId,
} from '../routing/paths';
import { filterPublicArticles, resolveArticleRouteKey } from '../utils/articles';
import { resolveArticleSummary, stripArticleHashtagSection } from '../utils/articleContent';
import { resolveArticleBody, resolveArticleRichContent } from '../utils/articleContentFull';
import { resolvePriceName } from '../utils/priceDisplay';
import { resolvePriceCategoryLabel } from '../utils/priceCategoryDisplay';
import { getCatalogCategoryNameRu } from '../utils/priceCatalog';
import { sortPriceItemsInCategory } from '../utils/sortPriceItems';
import { resolveRouteHead, type RouteHead } from '../seo/resolveRouteHead';
import { doctorRouteKey } from '../utils/doctorSlug';
import type { ClinicVideo } from '../data/sitePagesContent';
import { mapApiClinicVideos } from '../utils/clinicVideos';
import {
  COMPETITIVE_ADVANTAGES,
  getLocalizedCopy,
  localCommercialPath,
  getCityCommercialLinks,
  type LocalCommercialLanding,
} from '../data/localCommercialSeoCatalog';
import { formatUzs, resolveLocalLandingDetails } from '../utils/localLandingDetails';
import { findArticleByRouteParam } from '../utils/articleCatalogLookup';
import { getServiceSectionLabels, resolveCategoryRichContent, resolveServiceRichContent } from '../utils/serviceContent';
import { ALL_LOCAL_COMMERCIAL_LANDINGS } from '../data/localCommercialSeoCatalog';
import { CLINIC_HISTORY } from '../data/clinicHistoryContent';
import { SCIENCE } from '../data/scienceContent';
import { DERMO_SCAN } from '../data/dermoScanContent';
import { BRAND } from '../data/brandContent';
import { MALAKA_OSHIRISH } from '../data/malakaOshirishContent';
import { OBRAZOVANIYA } from '../data/obrazovaniyaContent';
import { TECHNOLOGIES_PAGE, EQUIPMENT_PARK_PAGE } from '../data/advantagePagesContent';
import { INSTITUTIONAL_NAV_SECTIONS } from '../data/institutionalNavContent';
import {
  DAAVLIN_ABOUT,
  DAAVLIN_CABINS,
  DAAVLIN_CLINIC,
  DAAVLIN_CONTACTS,
  DAAVLIN_DISEASES,
  DAAVLIN_NAV_LINEUP,
  DAAVLIN_RESULTS,
} from '../data/daavlinFotoKabinalariContent';
import { DAAVLIN_NAV_MODELS } from '../data/daavlinNav';
import { getDaavlinSectionFromPathname } from '../routing/paths';
import type { ApiReviewOut, ApiTreatmentResultOut } from '../api/cmsTypes';
import { mapReviewFromApi, mapTreatmentResultFromApi } from '../api/cmsMappers';
import {
  CONDITION_LANDING_TOPIC,
  doctorBranches,
  doctorsForCategory,
  doctorsForLanding,
  resultsForCategory,
  resultsForLanding,
  reviewsForCategory,
  reviewsForDoctor,
  reviewsForTopic,
} from '../utils/localProof';
import { getCategoryFaq } from '../data/serviceCategoryFaq';
import { CONDITION_ARTICLES } from '../data/conditionArticles';
import { resolveDoctorPageDetails } from '../utils/doctorPageDetails';
import { LOCAL_LANDING_CONTENT_UPDATED, landingTopicKey } from '../data/localLandingTopics';
import type { ServiceRichContent } from '../types';
import {
  videoDescription,
  videoDurationLabel,
  videoDurationSeconds,
  videoFileInfo,
  videoPath,
  videoPoster,
  videoRouteKey,
  videoTitle,
} from '../utils/videoMeta';

/** Clinic data plus the price list (in the browser prices load as a separate chunk). */
type PrerenderClinic = ClinicData & { prices: PriceItem[] };

export interface PrerenderSnapshot {
  data: Partial<RawClinicData> & {
    clinicRatings?: ApiClinicRatingOut[];
    videos?: ApiClinicVideoOut[];
    treatmentResults?: ApiTreatmentResultOut[];
    reviews?: ApiReviewOut[];
  };
}

const NAV_PAGES: PageId[] = ['home', 'about', 'services', 'doctors', 'prices', 'articles', 'results', 'branches'];

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Visible H1: the entity name when there is one, otherwise the title without the brand tail. */
function resolveHeading(head: RouteHead, locale: Locale): string {
  const { article, doctor, serviceSub, serviceCategory, equipment, video, localLanding } = head.route;
  if (localLanding) return getLocalizedCopy(localLanding.h1, locale);
  if (article) return article.title[locale] || article.title.uz;
  if (video) return videoTitle(video, locale);
  if (doctor) return doctor.name[locale] || doctor.name.uz;
  // Same headings as the React service pages.
  if (equipment) {
    return equipment.heading
      ? getLocalizedEquipmentText(equipment.heading, locale)
      : buildServiceH1(getLocalizedEquipmentText(equipment.title, locale), locale);
  }
  if (serviceSub) return buildServiceH1(serviceSub.name[locale] || serviceSub.name.uz, locale);
  if (serviceCategory) return buildServiceH1(serviceCategory.title[locale] || serviceCategory.title.uz, locale);
  return head.title.split(' | ')[0];
}

/** Crawler copy of ConditionDetailBody: the same text the condition page shows. */
function ConditionBody({ condition, locale, category }: { condition: ServiceConditionTopic; locale: Locale; category: ServiceCategory }) {
  const labels = getConditionSectionLabels(locale);
  const display = resolveConditionDisplay(condition, locale, category.id, null);
  const { meta } = display;
  const tr = (copy: Parameters<typeof getLocalizedConditionText>[0]) => getLocalizedConditionText(copy, locale);
  const whyTitle = condition.aboutTitle ?? (meta.aboutTitle ? tr(meta.aboutTitle) : null);
  const whyOverview = condition.aboutOverview ?? (meta.aboutOverview ? tr(meta.aboutOverview) : null);
  const whySections =
    condition.aboutSections ?? meta.aboutSections?.map((section) => ({ title: tr(section.title), description: tr(section.description) }));
  const whyFooter = condition.aboutFooter ?? (meta.aboutFooter ? tr(meta.aboutFooter) : null);
  return (
    <section>
      <p>{display.fullDescription}</p>
      {whyTitle && <h2>{whyTitle}</h2>}
      {whyOverview && <p>{whyOverview}</p>}
      {whySections?.map((section) => (
        <div key={section.title}>
          <h3>{section.title}</h3>
          <p>{section.description}</p>
        </div>
      ))}
      {whyFooter && <p>{whyFooter}</p>}
      {meta.clinicApproach && meta.clinicApproach.length > 0 && !whySections?.length && (
        <>
          <h3>{labels.clinicApproach}</h3>
          {meta.clinicApproach.map((item, i) => (
            <p key={i}>{tr(item)}</p>
          ))}
        </>
      )}
      {meta.treatments && meta.treatments.length > 0 && (
        <>
          <h3>{labels.treatments}</h3>
          <ul>
            {meta.treatments.map((item, i) => (
              <li key={i}>{tr(item)}</li>
            ))}
          </ul>
        </>
      )}
      {meta.process && meta.process.length > 0 && (
        <>
          <h3>{labels.process}</h3>
          <ol>
            {meta.process.map((step, i) => (
              <li key={i}>{tr(step)}</li>
            ))}
          </ol>
        </>
      )}
      {meta.serviceLinks?.map((link) => {
        const sub = clinicSubName(category, link.subId, locale);
        return (
          <p key={`${link.categoryId}-${link.subId}`}>
            <a href={serviceSubPath(locale, link.categoryId, link.subId)}>
              {labels.relatedService}: {sub}
            </a>
          </p>
        );
      })}
    </section>
  );
}

function clinicSubName(category: ServiceCategory, subId: string, locale: Locale): string {
  return subServiceLinkName(category.subServices, subId, locale);
}

function ArticleBody({ article, locale, categories }: { article: Article; locale: Locale; categories: ServiceCategory[] }) {
  const body = stripArticleHashtagSection(resolveArticleBody(article, locale));
  const rich = resolveArticleRichContent(article, locale);
  const services = articleServiceLinks(article, categories, locale);
  return (
    <article>
      <p>{resolveArticleSummary(article, locale)}</p>
      <ReactMarkdown>{body}</ReactMarkdown>
      {rich.faq.length > 0 && (
        <section>
          {rich.faq.map((item) => (
            <div key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </section>
      )}
      {services.length > 0 && (
        <section>
          <h2>{locale === 'uz' ? 'Mavzuga oid xizmatlar' : locale === 'ru' ? 'Услуги клиники по теме' : 'Related clinic services'}</h2>
          <ul>
            {services.map((link) => (
              <li key={link.path}>
                <a href={link.path}>{link.label}</a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}

function PriceList({ prices, locale }: { prices: PriceItem[]; locale: Locale }) {
  const byCategory = new Map<string, PriceItem[]>();
  for (const item of prices) {
    const list = byCategory.get(item.category) ?? [];
    list.push(item);
    byCategory.set(item.category, list);
  }
  const order = [
    ...PRICE_CATEGORY_ORDER.filter((id) => byCategory.has(id)),
    ...[...byCategory.keys()].filter((id) => !PRICE_CATEGORY_ORDER.includes(id)),
  ];
  return (
    <>
      {order.map((categoryId) => (
        <section key={categoryId}>
          <h2>{resolvePriceCategoryLabel(categoryId, locale, getCatalogCategoryNameRu(categoryId))}</h2>
          <table>
            <tbody>
              {sortPriceItemsInCategory(byCategory.get(categoryId) ?? [], categoryId).map((item) => (
                <tr key={item.id}>
                  <td>{resolvePriceName(item, locale)}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </>
  );
}

/** Uploaded files are served by the site itself as well: keep the player on radeski.uz. */
function sitePlayableSrc(src: string): string {
  return src.match(/\/uploads\/[^\s?#]+/)?.[0] ?? src;
}

function VideoLink({ video, locale }: { video: ClinicVideo; locale: Locale }) {
  const poster = videoPoster(video);
  return (
    <a href={videoPath(locale, videoRouteKey(video))}>
      {poster && <img src={poster} alt={videoTitle(video, locale)} loading="lazy" width={180} height={320} />}
      {videoTitle(video, locale)}
    </a>
  );
}

function VideoBody({ video, videos, locale }: { video: ClinicVideo; videos: ClinicVideo[]; locale: Locale }) {
  const info = videoFileInfo(video);
  const duration = videoDurationLabel(video);
  const category = video.category[locale] || video.category.uz;
  return (
    <article>
      <video
        controls
        playsInline
        preload="none"
        poster={videoPoster(video)}
        src={sitePlayableSrc(video.src)}
        width={info?.width}
        height={info?.height}
        title={videoTitle(video, locale)}
      />
      <p>
        {[category, duration, video.createdAt?.slice(0, 10)].filter(Boolean).join(' · ')}
      </p>
      <p>{videoDescription(video, locale)}</p>
      <ul>
        {videos
          .filter((item) => item.id !== video.id)
          .slice(0, 6)
          .map((item) => (
            <li key={item.id}>
              <VideoLink video={item} locale={locale} />
            </li>
          ))}
      </ul>
    </article>
  );
}

/** Doctors, clinical cases and reviews on a topic — the crawler copy of LandingProofSections. */
function ProofSections({
  locale,
  doctors,
  results,
  reviews,
}: {
  locale: Locale;
  doctors: Doctor[];
  results: TreatmentResult[];
  reviews: CustomerReview[];
}) {
  const label = (uz: string, ru: string, en: string) => (locale === 'uz' ? uz : locale === 'ru' ? ru : en);
  return (
    <>
    {doctors.length > 0 && (
      <section>
        <h2>{label('Qabul qiladigan shifokorlar', 'Врачи, которые ведут приём', 'Doctors who see patients')}</h2>
        <ul>
          {doctors.map((doctor) => (
            <li key={doctor.id}>
              <a href={doctorPath(locale, doctorRouteKey(doctor))}>{doctor.name[locale]}</a> — {doctor.role[locale]}
            </li>
          ))}
        </ul>
      </section>
    )}
    {results.length > 0 && (
      <section>
        <h2>{label('Klinik natijalar', 'Клинические результаты', 'Clinical results')}</h2>
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              <a href={pagePath(locale, 'results')}>{result.title[locale]}</a>
              {result.sessions[locale] ? ` — ${result.sessions[locale]}` : ''}
            </li>
          ))}
        </ul>
      </section>
    )}
    {reviews.length > 0 && (
      <section>
        <h2>{label('Bemorlar fikri', 'Отзывы пациентов', 'Patient reviews')}</h2>
        {reviews.map((review) => (
          <blockquote key={review.id}>
            <p>{review.comment[locale] || review.comment.uz}</p>
            <footer>{review.authorName} · {review.rating}/5</footer>
          </blockquote>
        ))}
      </section>
    )}
    </>
  );
}

function LandingBody({
  landing,
  locale,
  clinic,
  results,
  reviews,
}: {
  landing: LocalCommercialLanding;
  locale: Locale;
  clinic: PrerenderClinic;
  results: ApiTreatmentResultOut[];
  reviews: ApiReviewOut[];
}) {
  const proofDoctors = doctorsForLanding(landing, clinic.doctors);
  const proofResults = resultsForLanding(landing, results.map(mapTreatmentResultFromApi));
  const proofReviews = reviewsForTopic(landingTopicKey(landing.slug), reviews.map(mapReviewFromApi));
  const details = resolveLocalLandingDetails(landing, clinic.prices, locale);
  const t = (copy: { uz: string; ru: string; en: string }) => getLocalizedCopy(copy, locale);
  const label = (uz: string, ru: string, en: string) => (locale === 'uz' ? uz : locale === 'ru' ? ru : en);
  const others = getCityCommercialLinks(landing.city).filter((item) => item.slug !== landing.slug);
  return (
    <article>
      <p>{t(landing.lead)}</p>
      <section>
        <h2>{label(`${details.serviceName} haqida`, `${details.serviceName}: что важно знать`, `About: ${details.serviceName}`)}</h2>
        {(details.about.length ? details.about : [t(landing.problemText)]).map((text) => (
          <p key={text.slice(0, 40)}>{text}</p>
        ))}
      </section>
      {details.steps.length > 0 && (
        <section>
          <h2>{label('Qabul qanday o‘tadi?', 'Как проходит приём?', 'How does the visit go?')}</h2>
          <ol>
            {details.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      )}
      <section>
        <h2>{t(landing.methodsTitle)}</h2>
        <ul>
          {[...landing.whoFor, ...landing.methods].map((item) => (
            <li key={item.uz}>{t(item)}</li>
          ))}
        </ul>
        {landing.equipmentNote && <p>{t(landing.equipmentNote)}</p>}
      </section>
      {details.prices.length > 0 && (
        <section>
          <h2>{label(`${details.serviceName}: narxlar`, `${details.serviceName}: цены`, `${details.serviceName}: prices`)}</h2>
          <table>
            <tbody>
              {details.prices.map((row) => (
                <tr key={row.name}>
                  <td>{row.name}</td>
                  <td>{formatUzs(row.value, locale)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            <a href={pagePath(locale, 'prices')}>{label('Barcha narxlar', 'Все цены', 'All prices')}</a>
          </p>
        </section>
      )}
      <ProofSections locale={locale} doctors={proofDoctors} results={proofResults} reviews={proofReviews} />
      <section>
        <h2>{label('Nima uchun Radeski?', 'Почему Radeski?', 'Why Radeski?')}</h2>
        <ul>
          {COMPETITIVE_ADVANTAGES.map((item) => (
            <li key={item.uz}>{t(item)}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>{label('Tez-tez so‘raladigan savollar', 'Частые вопросы', 'FAQ')}</h2>
        {details.faqs.map((faq) => (
          <div key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>
      <section>
        <h2>{label('Manzil va ish vaqti', 'Адрес и время работы', 'Address and hours')}</h2>
        <p>
          {details.branch.address[locale]} · {details.branch.hours[locale]} · {details.branch.phone}
        </p>
        <p>
          {label('Material: Radeski Skin Clinic shifokorlari jamoasi · Yangilangan: ', 'Материал: команда врачей Radeski Skin Clinic · Обновлено: ', 'Content: Radeski Skin Clinic medical team · Updated: ')}
          <time dateTime={LOCAL_LANDING_CONTENT_UPDATED}>{LOCAL_LANDING_CONTENT_UPDATED}</time>
        </p>
      </section>
      <section>
        <h2>{label('Bog‘liq sahifalar', 'Связанные страницы', 'Related pages')}</h2>
        <ul>
          <li>
            <a href={serviceCategoryPath(locale, landing.serviceCategoryId)}>{label('Xizmat bo‘limi', 'Раздел услуг', 'Service category')}</a>
          </li>
          {(landing.articleRouteKeys ?? []).map((key) => {
            const article = findArticleByRouteParam(key, clinic.articles);
            return article ? (
              <li key={key}>
                <a href={articlePath(locale, key)}>{article.title[locale] || article.title.uz}</a>
              </li>
            ) : null;
          })}
          {others.map((item) => (
            <li key={item.slug}>
              <a href={localCommercialPath(locale, item.city, item.slug)}>{t(item.h1)}</a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

/** Patient guide under the doctors / branches lists (same text as ListPageGuideSection). */
function GuideText({ guide }: { guide: ListPageGuide }) {
  return (
    <section>
      <h2>{guide.title}</h2>
      {guide.sections.map((section) => (
        <div key={section.title}>
          <h3>{section.title}</h3>
          <p>{section.text}</p>
        </div>
      ))}
    </section>
  );
}

/** The same sections the service pages show: overview, conditions, process… */
function RichServiceBody({ rich, locale }: { rich: ServiceRichContent; locale: Locale }) {
  const labels = getServiceSectionLabels(locale);
  const list = (title: string, items: string[]) =>
    items.length > 0 && (
      <section>
        <h2>{title}</h2>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    );
  const topics = (title: string, items?: { title: string; description: string }[]) =>
    items &&
    items.length > 0 && (
      <section>
        <h2>{title}</h2>
        {items.map((item) => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
    );
  return (
    <>
      {rich.overview && <p>{rich.overview}</p>}
      {topics(rich.aboutTitle || labels.about, rich.aboutSections)}
      {rich.aboutFooter && <p>{rich.aboutFooter}</p>}
      {topics(labels.conditions, rich.conditions)}
      {topics(labels.equipment, rich.equipment)}
      {list(labels.indications, rich.indications)}
      {list(labels.solutions, rich.solutions)}
      {list(labels.process, rich.process)}
    </>
  );
}

function CityLinksList({ locale, serviceCategoryId }: { locale: Locale; serviceCategoryId: string }) {
  const items = ALL_LOCAL_COMMERCIAL_LANDINGS.filter((item) => item.serviceCategoryId === serviceCategoryId);
  if (items.length === 0) return null;
  return (
    <section>
      <h2>{locale === 'uz' ? "Farg'ona va Qo'qon filiallarida" : locale === 'ru' ? 'В филиалах в Фергане и Коканде' : 'At the Fergana and Kokand branches'}</h2>
      <ul>
        {items.map((item) => (
          <li key={`${item.city}-${item.slug}`}>
            <a href={localCommercialPath(locale, item.city, item.slug)}>{getLocalizedCopy(item.h1, locale)}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Keys whose text is not page content (labels, links, SEO duplicates of <head>, media). */
const SKIP_CONTENT_KEYS = /^(seo|cta|ctas|button|buttons|label|labels|alt|aria|image|images|icon|href|url|link|links|video|poster|badge)$/i;
const HEADING_KEYS = /^(title|heading|name|sectionTitle)$/i;

type TextBlock = { heading: boolean; text: string };

function isLocalizedCopy(value: unknown): value is Record<Locale, string> {
  return Boolean(
    value && typeof value === 'object' && typeof (value as Record<string, unknown>).uz === 'string' && typeof (value as Record<string, unknown>).ru === 'string',
  );
}

/** Headings and sentences of a structured page-content object, in document order. */
function collectPageText(value: unknown, locale: Locale, out: TextBlock[] = [], key = ''): TextBlock[] {
  if (!value || typeof value !== 'object') return out;
  if (isLocalizedCopy(value)) {
    const text = (value[locale] || value.uz || '').trim();
    const heading = HEADING_KEYS.test(key) && text.length <= 120;
    if (text && (heading || text.length >= 25) && !out.some((block) => block.text === text)) out.push({ heading, text });
    return out;
  }
  if (Array.isArray(value)) {
    for (const item of value) collectPageText(item, locale, out, key);
    return out;
  }
  for (const [childKey, child] of Object.entries(value)) {
    if (SKIP_CONTENT_KEYS.test(childKey)) continue;
    collectPageText(child, locale, out, childKey);
  }
  return out;
}

function StructuredPageText({ content, locale }: { content: unknown; locale: Locale }) {
  const blocks = collectPageText(content, locale);
  return (
    <section>
      {blocks.map((block, index) =>
        block.heading ? <h2 key={index}>{block.text}</h2> : <p key={index}>{block.text}</p>,
      )}
    </section>
  );
}

const DAAVLIN_SECTION_CONTENT: Record<string, unknown> = {
  about: DAAVLIN_ABOUT,
  'radeski-skin-clinic': DAAVLIN_CLINIC,
  cabins: DAAVLIN_CABINS,
  'clinical-results': DAAVLIN_RESULTS,
  'skin-diseases': DAAVLIN_DISEASES,
  contacts: DAAVLIN_CONTACTS,
};

/** Content objects behind the institutional pages (React renders the same data). */
function institutionalContent(currentPage: PageId, pathname: string): unknown {
  switch (currentPage) {
    case 'about':
      return CLINIC_HISTORY;
    case 'science':
      return SCIENCE;
    case 'dermoscan':
      return DERMO_SCAN;
    case 'brend':
      return BRAND;
    case 'malaka-oshirish':
      return MALAKA_OSHIRISH;
    case 'obrazovaniya': {
      // A program page shows that program; the section page shows the whole catalogue.
      const program = resolveEducationProgram(getEducationProgramSlugFromPathname(pathname), getLocaleFromPathname(pathname));
      return program ?? OBRAZOVANIYA;
    }
    case 'technologies':
      return [TECHNOLOGIES_PAGE, EQUIPMENT_PARK_PAGE];
    case 'daavlin-foto-kabinalari':
      return DAAVLIN_SECTION_CONTENT[getDaavlinSectionFromPathname(pathname)] ?? DAAVLIN_ABOUT;
    default:
      return INSTITUTIONAL_NAV_SECTIONS.find((section) => section.pageId === currentPage) ?? null;
  }
}

/** A doctor's full profile (education, directions, diagnostics…) as plain HTML. */
function DoctorProfileText({ profile }: { profile: NonNullable<Doctor['profile']>[Locale] }) {
  return (
    <>
      <h2>{profile.aboutTitle}</h2>
      {profile.about.map((text) => (
        <p key={text.slice(0, 40)}>{text}</p>
      ))}
      {profile.quote && <blockquote><p>{profile.quote}</p></blockquote>}
      {profile.sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs?.map((text) => <p key={text.slice(0, 40)}>{text}</p>)}
          {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
          {section.subsections?.map((sub) => (
            <div key={sub.title}>
              <h3>{sub.title}</h3>
              <ul>{sub.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </section>
      ))}
    </>
  );
}

/** Device page text for crawlers — the same sections as EquipmentDetailContent. */
function EquipmentBody({ equipment, locale }: { equipment: ClinicEquipmentEntry; locale: Locale }) {
  const t = (text: ClinicEquipmentEntry['title']) => getLocalizedEquipmentText(text, locale);
  const labels = getEquipmentSectionLabels(locale);
  const details = getEquipmentDetails(equipment.id);
  return (
    <>
      <p>{t(equipment.fullDescription)}</p>
      {details?.about.map((text) => <p key={text.uz}>{t(text)}</p>)}
      <p>{labels.manufacturer}: {t(equipment.manufacturer)}</p>
      {details && (
        <section>
          <h2>{labels.howItWorks}</h2>
          {details.howItWorks.paragraphs.map((text) => <p key={text.uz}>{t(text)}</p>)}
          <ul>{details.howItWorks.effects.map((item) => <li key={item.uz}>{t(item)}</li>)}</ul>
        </section>
      )}
      <section>
        <h2>{labels.indications}</h2>
        {details ? (
          details.indications.map((item) => (
            <div key={item.title.uz}>
              <h3>{t(item.title)}</h3>
              <p>{t(item.text)}</p>
            </div>
          ))
        ) : (
          <ul>{equipment.indications.map((item) => <li key={item.uz}>{t(item)}</li>)}</ul>
        )}
      </section>
      {details && (
        <>
          <section>
            <h2>{labels.suitability}</h2>
            <p>{t(details.suitability.intro)}</p>
            <ul>{details.suitability.checks.map((item) => <li key={item.uz}>{t(item)}</li>)}</ul>
          </section>
          <section>
            <h2>{labels.contraindications}</h2>
            <p>{t(details.contraindications.intro)}</p>
            <ul>{details.contraindications.items.map((item) => <li key={item.uz}>{t(item)}</li>)}</ul>
            <p>{t(details.contraindications.note)}</p>
          </section>
        </>
      )}
      <section>
        <h2>{labels.clinicUsage}</h2>
        {equipment.clinicUsage.map((text) => <p key={text.uz}>{t(text)}</p>)}
      </section>
      <section>
        <h2>{labels.process}</h2>
        <ol>
          {details
            ? details.steps.map((step) => <li key={step.title.uz}>{t(step.title)}: {t(step.text)}</li>)
            : equipment.process.map((step) => <li key={step.uz}>{t(step)}</li>)}
        </ol>
      </section>
      {details && (
        <>
          <section>
            <h2>{labels.results}</h2>
            <p>{t(details.results.intro)}</p>
            <ul>{details.results.items.map((item) => <li key={item.uz}>{t(item)}</li>)}</ul>
          </section>
          <section>
            <h2>{labels.faq}</h2>
            {details.faq.map((item) => (
              <div key={item.question.uz}>
                <h3>{t(item.question)}</h3>
                <p>{t(item.answer)}</p>
              </div>
            ))}
          </section>
          <section>
            <h2>{labels.conclusion}</h2>
            {details.conclusion.map((text) => <p key={text.uz}>{t(text)}</p>)}
          </section>
        </>
      )}
    </>
  );
}

function PageContent({
  head,
  locale,
  clinic,
  videos,
  results,
  reviews,
  pathname,
}: {
  head: RouteHead;
  locale: Locale;
  clinic: PrerenderClinic;
  videos: ClinicVideo[];
  results: ApiTreatmentResultOut[];
  reviews: ApiReviewOut[];
  pathname: string;
}): ReactNode {
  const { currentPage, article, doctor, serviceCategory, serviceSub, equipment, video, localLanding } = head.route;

  if (localLanding) return <LandingBody landing={localLanding} locale={locale} clinic={clinic} results={results} reviews={reviews} />;

  if (article) return <ArticleBody article={article} locale={locale} categories={clinic.serviceCategories} />;

  if (video) return <VideoBody video={video} videos={videos} locale={locale} />;

  if (currentPage === 'videos') {
    return (
      <ul>
        {videos.map((item) => (
          <li key={item.id}>
            <VideoLink video={item} locale={locale} />
          </li>
        ))}
      </ul>
    );
  }

  if (doctor) {
    const practice = resolveDoctorPageDetails(doctor, clinic.prices, locale);
    const doctorReviews = reviewsForDoctor(doctor, reviews.map(mapReviewFromApi));
    const profile = resolveDoctorProfile(doctor)?.[locale];
    return (
      <>
        <section>
          {/* Doctor photo in the crawler HTML too (image search by the doctor's name). */}
          {doctor.photo && (
            <img src={doctor.photo} alt={`${doctor.name[locale]} — ${doctor.role[locale]}`} width={360} height={480} loading="lazy" />
          )}
          <p>{doctor.role[locale]}</p>
          <p>{doctor.bio[locale]}</p>
          {doctor.education?.[locale] && <p>{doctor.education[locale]}</p>}
          {profile && <DoctorProfileText profile={profile} />}
        </section>
        {practice.branches.map((branch) => (
          <section key={branch.id}>
            <h2>{branch.name[locale]}</h2>
            <p>{branch.address[locale]} · {branch.hours[locale]} · {branch.phone}</p>
          </section>
        ))}
        {practice.landingLinks.length > 0 && (
          <ul>
            {practice.landingLinks.map((link) => (
              <li key={`${link.city}-${link.slug}`}>
                <a href={localCommercialPath(locale, link.city, link.slug)}>{link.label}</a>
              </li>
            ))}
          </ul>
        )}
        {doctorReviews.map((review) => (
          <blockquote key={review.id}>
            <p>{review.comment[locale] || review.comment.uz}</p>
            <footer>{review.authorName} · {review.rating}/5</footer>
          </blockquote>
        ))}
        {practice.faqs.map((faq) => (
          <div key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </>
    );
  }

  if (equipment) return <EquipmentBody equipment={equipment} locale={locale} />;

  if (serviceSub && serviceCategory) {
    return (
      <>
        <p>{serviceSub.description[locale]}</p>
        <RichServiceBody rich={resolveServiceRichContent(serviceSub, serviceCategory, locale)} locale={locale} />
        <CityLinksList locale={locale} serviceCategoryId={serviceCategory.id} />
      </>
    );
  }

  if (serviceCategory) {
    return (
      <>
      <RichServiceBody rich={resolveCategoryRichContent(serviceCategory, locale)} locale={locale} />
      <ProofSections
        locale={locale}
        doctors={doctorsForCategory(serviceCategory.id, clinic.doctors)}
        results={resultsForCategory(serviceCategory.id, results.map(mapTreatmentResultFromApi))}
        reviews={reviewsForCategory(serviceCategory.id, reviews.map(mapReviewFromApi))}
      />
      {getCategoryFaq(serviceCategory.id, locale).length > 0 && (
        <section>
          <h2>{locale === 'uz' ? "Ko'p so'raladigan savollar" : locale === 'ru' ? 'Частые вопросы' : 'Frequently asked questions'}</h2>
          {getCategoryFaq(serviceCategory.id, locale).map((faq) => (
            <div key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </section>
      )}
      <CityLinksList locale={locale} serviceCategoryId={serviceCategory.id} />
      <ul>
        {serviceCategory.subServices.map((sub) => (
          <li key={sub.id}>
            <a href={serviceSubPath(locale, serviceCategory.id, subServiceRouteKey(sub))}>{sub.name[locale]}</a>
            {' — '}
            {sub.description[locale]}
          </li>
        ))}
      </ul>
      {serviceCategory.id === 'apparatnaya-kosmetologiya' && (
        <section>
          <h2>{getEquipmentSectionLabels(locale).sectionTitle}</h2>
          <ul>
            {getCategoryEquipmentList(serviceCategory.id).map((entry) => (
              <li key={entry.id}>
                <a href={serviceEquipmentPath(locale, entry.id)}>{getLocalizedEquipmentText(entry.title, locale)}</a>
                {' — '}
                {getLocalizedEquipmentText(entry.shortDescription, locale)}
              </li>
            ))}
          </ul>
        </section>
      )}
      </>
    );
  }

  if (currentPage === 'services' || currentPage === 'home') {
    return (
      <ul>
        {clinic.serviceCategories.map((category) => (
          <li key={category.id}>
            <a href={serviceCategoryPath(locale, category.id)}>{category.title[locale]}</a>
            {' — '}
            {category.description[locale]}
          </li>
        ))}
      </ul>
    );
  }

  if (currentPage === 'doctors') {
    return (
      <>
        <ul>
          {clinic.doctors.map((doc) => (
            <li key={doc.id}>
              <a href={doctorPath(locale, doctorRouteKey(doc))}>{doc.name[locale]}</a> — {doc.role[locale]}
            </li>
          ))}
        </ul>
        <GuideText guide={DOCTORS_PAGE_GUIDE[locale]} />
      </>
    );
  }

  if (currentPage === 'articles') {
    return (
      <ul>
        {filterPublicArticles(clinic.articles).map((art) => (
          <li key={art.id}>
            <a href={articlePath(locale, resolveArticleRouteKey(art))}>{art.title[locale] || art.title.uz}</a>
            {' — '}
            {resolveArticleSummary(art, locale)}
          </li>
        ))}
      </ul>
    );
  }

  if (currentPage === 'prices') return <PriceList prices={clinic.prices} locale={locale} />;

  if (currentPage === 'branches') {
    return (
      <>
        <ul>
          {CLINIC_BRANCHES.map((branch) => (
            <li key={branch.id}>
              <h2>{branch.name[locale]}</h2>
              <p>{branch.address[locale]}</p>
              <p>{branch.hours[locale]}</p>
              <p>{branch.phone}</p>
              <p>{branch.services[locale]}</p>
            </li>
          ))}
        </ul>
        <GuideText guide={BRANCHES_PAGE_GUIDE[locale]} />
      </>
    );
  }

  if (currentPage === 'results') {
    const field = (item: ApiTreatmentResultOut, name: 'title' | 'description' | 'service') =>
      (item as unknown as Record<string, string | null | undefined>)[`${name}_${locale}`] ||
      (item as unknown as Record<string, string | null | undefined>)[`${name}_uz`] ||
      '';
    return (
      <ul>
        {results.map((item) => (
          <li key={item.id}>
            <h2>{field(item, 'title')}</h2>
            <p>{field(item, 'service')}</p>
            <p>{field(item, 'description')}</p>
          </li>
        ))}
      </ul>
    );
  }

  if (currentPage === 'fargona' || currentPage === 'qoqon') {
    const branch = CLINIC_BRANCHES.find((item) => item.id === (currentPage === 'qoqon' ? 'kokand-branch' : 'fergana-main'));
    return (
      <>
        {branch && (
          <section>
            <h2>{branch.name[locale]}</h2>
            <p>{branch.address[locale]}</p>
            <p>{branch.hours[locale]}</p>
            <p>{branch.phone}</p>
            <p>{branch.services[locale]}</p>
          </section>
        )}
        <section>
          <ul>
            {getCityCommercialLinks(currentPage).map((item) => (
              <li key={item.slug}>
                <a href={localCommercialPath(locale, item.city, item.slug)}>{getLocalizedCopy(item.h1, locale)}</a>
                {' — '}
                {getLocalizedCopy(item.lead, locale)}
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  }

  if (currentPage === 'conditions') {
    const slug = getConditionSlugFromPathname(pathname);
    const topic = slug && isDermatologyConditionSlug(slug) ? getDermatologyConditionTopic(slug, locale) : null;
    const treated = ALL_LOCAL_COMMERCIAL_LANDINGS.filter((landing) => landingTopicKey(landing.slug) === (CONDITION_LANDING_TOPIC[slug ?? ''] ?? 'dermatolog'));
    const dermatology = clinic.serviceCategories.find((category) => category.id === 'dermatologiya');
    return (
      <>
        {topic && dermatology && <ConditionBody condition={topic} locale={locale} category={dermatology} />}
        {(CONDITION_ARTICLES[slug ?? ''] ?? []).length > 0 && (
          <section>
            <h2>{locale === 'uz' ? 'Batafsil maqolalar' : locale === 'ru' ? 'Подробные статьи' : 'In-depth articles'}</h2>
            <ul>
              {(CONDITION_ARTICLES[slug ?? ''] ?? []).map((item) => (
                <li key={item.routeKey}>
                  <a href={articlePath(locale, item.routeKey)}>{item.title[locale]}</a>
                </li>
              ))}
            </ul>
          </section>
        )}
        <h2>{locale === 'uz' ? 'Qayerda davolanadi' : locale === 'ru' ? 'Где лечат' : 'Where it is treated'}</h2>
        <ul>
          {treated.map((landing) => (
            <li key={`${landing.city}-${landing.slug}`}>
              <a href={localCommercialPath(locale, landing.city, landing.slug)}>{getLocalizedCopy(landing.h1, locale)}</a>
            </li>
          ))}
        </ul>
      </>
    );
  }

  const content = institutionalContent(currentPage, pathname);
  if (content) return <StructuredPageText content={content} locale={locale} />;

  return null;
}

/** Daavlin model pages that are published (the others redirect to the device pages). */
const PRERENDER_DAAVLIN_MODELS: { id: DaavlinModelId; name: string }[] = [
  { id: '7-series', name: 'Daavlin 7 Series' },
  { id: 'm-series', name: 'Daavlin M Series' },
  { id: 'neolux', name: 'Daavlin NeoLux' },
  { id: 'aquex', name: 'Daavlin Aquex' },
  { id: 'dermapal', name: 'Daavlin DermaPal' },
];

const SECTION_PAGE_LABELS: Partial<Record<PageId, Record<Locale, string>>> = {
  'daavlin-foto-kabinalari': { uz: 'Daavlin fototerapiya', ru: 'Фототерапия Daavlin', en: 'Daavlin phototherapy' },
  technologies: { uz: 'Texnologiyalar', ru: 'Технологии', en: 'Technologies' },
  dermoscan: { uz: 'DermoScan diagnostika', ru: 'Диагностика DermoScan', en: 'DermoScan diagnostics' },
  science: { uz: 'Ilm-fan', ru: 'Наука', en: 'Science' },
  obrazovaniya: { uz: "Ta'lim", ru: 'Образование', en: 'Education' },
  'malaka-oshirish': { uz: 'Malaka oshirish', ru: 'Повышение квалификации', en: 'Professional development' },
  videos: { uz: 'Videolar', ru: 'Видео', en: 'Videos' },
  brend: { uz: 'Brend', ru: 'Бренд', en: 'Brand' },
};

/**
 * The links of the React header's drop-down menus, so crawlers reading the HTML reach the
 * condition, Daavlin model and course pages the same way visitors do.
 */
function SectionsNav({ locale }: { locale: Locale }) {
  return (
    <nav aria-label="sections">
      {DERMATOLOGY_CONDITION_NAV.map((item) => (
        <a key={item.slug} href={conditionPath(locale, item.slug)}>
          {item.label[locale]}
        </a>
      ))}
      {PRERENDER_DAAVLIN_MODELS.map((model) => (
        <a key={model.id} href={daavlinModelPath(locale, model.id)}>
          {model.name}
        </a>
      ))}
      {OBRAZOVANIYA.programs.items.map((program) => (
        <a key={program.id} href={educationProgramPath(locale, program.id as EducationProgramId)}>
          {program.title[locale]}
        </a>
      ))}
      {(Object.keys(SECTION_PAGE_LABELS) as PageId[]).map((page) => (
        <a key={page} href={pagePath(locale, page)}>
          {SECTION_PAGE_LABELS[page]![locale]}
        </a>
      ))}
    </nav>
  );
}

function PrerenderBody({
  head,
  locale,
  clinic,
  overrides,
  videos,
  results,
  reviews,
  pathname,
}: {
  head: RouteHead;
  locale: Locale;
  clinic: PrerenderClinic;
  overrides: DictionaryOverrides;
  videos: ClinicVideo[];
  results: ApiTreatmentResultOut[];
  reviews: ApiReviewOut[];
  pathname: string;
}) {
  const d = { ...DICTIONARY[locale], ...(overrides[locale] ?? {}) } as Record<string, string>;
  const navLabel: Partial<Record<PageId, string>> = {
    home: d.navHome,
    about: d.navAbout,
    services: d.navServices,
    doctors: d.navDoctors,
    prices: d.navPrices,
    articles: d.navArticles,
    results: d.navResults,
    branches: d.navBranches,
  };

  return (
    <div className="prerender" data-prerender="">
      <header>
        <a href={pagePath(locale, 'home')}>Radeski Skin Clinic</a>
        <nav>
          {NAV_PAGES.map((page) => (
            <a key={page} href={pagePath(locale, page)}>
              {navLabel[page] ?? page}
            </a>
          ))}
        </nav>
        <SectionsNav locale={locale} />
      </header>
      <main>
        {head.breadcrumbs.length > 1 && (
          <nav aria-label="breadcrumb">
            {head.breadcrumbs.map((crumb, index) => (
              <span key={crumb.path + index}>
                {index > 0 && ' › '}
                {index < head.breadcrumbs.length - 1 ? <a href={crumb.path}>{crumb.name}</a> : crumb.name}
              </span>
            ))}
          </nav>
        )}
        <h1>{resolveHeading(head, locale)}</h1>
        <HeroImage head={head} alt={resolveHeading(head, locale)} />
        <p>{head.description}</p>
        <PageContent head={head} locale={locale} clinic={clinic} videos={videos} results={results} reviews={reviews} pathname={pathname} />
      </main>
      <footer>
        {CLINIC_BRANCHES.filter((branch) => branch.id !== 'liege-rade-skin').map((branch) => (
          <p key={branch.id}>
            {branch.name[locale]} — {branch.address[locale]} — {branch.phone}
          </p>
        ))}
        <p>
          <a href={`tel:${CLINIC_PHONE_PRIMARY.tel}`}>{CLINIC_PHONE_PRIMARY.display}</a> ·{' '}
          <a href={`tel:${CLINIC_PHONE_KOKAND.tel}`}>{CLINIC_PHONE_KOKAND.display}</a> · {d.workingHoursValue}
        </p>
      </footer>
    </div>
  );
}

export interface VideoSitemapEntry {
  thumbnail: string;
  title: string;
  description: string;
  contentUrl: string;
  duration?: number;
  publicationDate: string;
}

/** <video:video> data for the sitemap — taken from the page's own VideoObject. */
function videoSitemapEntry(head: RouteHead): VideoSitemapEntry | undefined {
  const ld = head.jsonLd.find((item) => item['@type'] === 'VideoObject') as
    | { thumbnailUrl: string[]; name: string; description: string; contentUrl: string; uploadDate: string }
    | undefined;
  if (!ld || !head.route.video) return undefined;
  const seconds = videoDurationSeconds(head.route.video);
  return {
    thumbnail: ld.thumbnailUrl[0],
    title: ld.name,
    description: ld.description,
    contentUrl: ld.contentUrl,
    duration: seconds || undefined,
    publicationDate: ld.uploadDate,
  };
}

/** Replace the content attribute of the first <meta> matching `selector` (name or property). */
function setMetaContent(html: string, attribute: 'name' | 'property', key: string, content: string): string {
  const pattern = new RegExp(`(<meta\\s+${attribute}="${key}"\\s+content=")[^"]*(")`);
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`;
  return pattern.test(html)
    ? html.replace(pattern, (_m, start: string, end: string) => `${start}${escapeHtml(content)}${end}`)
    : html.replace('</head>', `    ${tag}\n  </head>`);
}

/** Plain-markdown summary of the clinic for AI assistants, built from the same data as the site. */
function buildLlmsTxt(clinic: PrerenderClinic): string {
  const url = (path: string) => `${SITE_ORIGIN}${path}`;
  const lines: string[] = [
    '# Radeski Skin Clinic',
    '',
    "> Teri, soch va tirnoq kasalliklari bo'yicha ixtisoslashgan tibbiy klinika (dermatologiya, trixologiya, podologiya, dermatoonkologiya, kosmetologiya) — Farg'ona va Qo'qon, O'zbekiston. Специализированная клиника кожи, волос и ногтей в Фергане и Коканде.",
    '',
    "Sayt uch tilda: /uz (asosiy), /ru, /en. Narxlar so'mda (UZS). Qabulga yozilish: saytdagi «Qabulga yozilish» tugmasi yoki filial telefoni.",
    '',
    '## Filiallar / Филиалы',
  ];
  for (const branch of CLINIC_BRANCHES.filter((item) => item.id !== 'liege-rade-skin')) {
    lines.push(`- ${branch.name.uz}: ${branch.address.uz}; ${branch.hours.uz}; tel. ${branch.phone}`);
  }
  lines.push('', '## Shifokorlar / Врачи');
  for (const doctor of clinic.doctors) {
    const branches = doctorBranches(doctor).map((city) => (city === 'qoqon' ? "Qo'qon" : "Farg'ona")).join(', ');
    lines.push(`- [${doctor.name.uz}](${url(doctorPath('uz', doctorRouteKey(doctor)))}): ${doctor.role.uz}${branches ? ` — ${branches}` : ''}`);
  }
  lines.push('', "## Xizmat yo'nalishlari / Направления");
  for (const category of clinic.serviceCategories) {
    lines.push(`- [${category.title.uz}](${url(serviceCategoryPath('uz', category.id))}) / [${category.title.ru}](${url(serviceCategoryPath('ru', category.id))})`);
  }
  for (const city of ['fargona', 'qoqon'] as const) {
    lines.push('', city === 'qoqon' ? "## Qo'qonda xizmatlar (narx, shifokor, FAQ)" : "## Farg'onada xizmatlar (narx, shifokor, FAQ)");
    for (const landing of getCityCommercialLinks(city)) {
      lines.push(`- [${landing.h1.uz}](${url(localCommercialPath('uz', city, landing.slug))}) / [${landing.h1.ru}](${url(localCommercialPath('ru', city, landing.slug))})`);
    }
  }
  lines.push('', '## Foydali sahifalar');
  lines.push(`- [Narxlar / Цены](${url(pagePath('uz', 'prices'))})`);
  lines.push(`- [Klinik natijalar](${url(pagePath('uz', 'results'))})`);
  lines.push(`- [Maqolalar](${url(pagePath('uz', 'articles'))})`);
  lines.push(`- [Videolar](${url(pagePath('uz', 'videos'))})`);
  lines.push(`- [Filiallar va manzillar](${url(pagePath('uz', 'branches'))})`);
  lines.push('', '## Maqolalar (tanlangan)');
  for (const article of filterPublicArticles(clinic.articles).slice(0, 30)) {
    lines.push(`- [${article.title.uz}](${url(articlePath('uz', resolveArticleRouteKey(article)))})`);
  }
  lines.push('', "Tibbiy ma'lumot tanishuv uchun; aniq tashxis va davolash rejasi shifokor ko'rigida belgilanadi.", '');
  return lines.join('\n');
}

/** The page's hero image in the crawler HTML (same file as the preload, described by the H1). */
function HeroImage({ head, alt }: { head: RouteHead; alt: string }) {
  const hero = resolveHeroPreload(head);
  if (!hero) return null;
  // The box is sized before the file arrives so the text under it does not jump (CLS).
  return <img className="prerender-hero" src={hero.src} srcSet={hero.srcSet} sizes={hero.srcSet ? hero.sizes : undefined} alt={alt} />;
}

/** Hero image of service category and device pages, as the React hero will request it. */
function resolveHeroPreload(head: RouteHead): { src: string; srcSet?: string; sizes: string } | null {
  const { serviceCategory, serviceSub, equipment } = head.route;
  if (equipment) {
    return { ...responsiveImage(equipment.image), sizes: '(max-width: 1024px) 100vw, 50vw' };
  }
  if (serviceCategory && !serviceSub) {
    const poster = getHomeServiceTeaserMedia(serviceCategory.id)?.poster;
    // Teaser posters have no width variants; MediaImage then uses its default sizes.
    return poster ? { ...responsiveImage(poster), sizes: '(max-width: 640px) 100vw, 640px' } : null;
  }
  return null;
}

/**
 * The mobile LCP element of the page, for the <head> preload only (not drawn in the prerender
 * body): the hero image of service/device pages, the home hero background and the article
 * cover. Must be the exact URL/srcset the React component requests.
 */
function resolveLcpImagePreload(head: RouteHead): { src: string; srcSet?: string; sizes: string } | null {
  const hero = resolveHeroPreload(head);
  if (hero) return hero;
  if (head.route.currentPage === 'home') {
    // HomeServicesPromoCarousel hero background
    return { src: '/hero-dermatology-bg.webp', sizes: '100vw' };
  }
  const { article } = head.route;
  const cover = article ? (getLocalizedImage(article.images, head.lang) ?? article.image) : null;
  if (cover) {
    // MediaImage requests CMS uploads from the same origin on radeski.uz.
    const src = cover.match(/\/uploads\/[^\s?#]+/)?.[0] ?? cover;
    return { ...responsiveImage(src), sizes: '(max-width: 640px) 100vw, 640px' };
  }
  return null;
}

/** Per-device texts are lazy chunks in the app; the prerender needs all of them loaded first. */
export async function loadPrerenderContent(): Promise<void> {
  await loadAllEquipmentDetails();
}

export function createPrerenderer(snapshot: PrerenderSnapshot) {
  // The header's small Daavlin menu list must match the full lineup (see data/daavlinNav.ts).
  const navMenu = DAAVLIN_NAV_MODELS.map((model) => `${model.id}:${model.name}`).join('|');
  const lineup = DAAVLIN_NAV_LINEUP.map((model) => `${model.id}:${model.name}`).join('|');
  if (navMenu !== lineup) {
    throw new Error(`data/daavlinNav.ts is out of sync with DAAVLIN_NAV_LINEUP:
  menu:   ${navMenu}
  lineup: ${lineup}`);
  }
  // The light sub-service id list (serviceCatalogKeys.ts) must match the catalog.
  assertSubServiceCatalogIdsInSync();
  const raw = snapshot.data;
  const clinic: PrerenderClinic = {
    ...transformClinicData({
      doctors: raw.doctors ?? [],
      services: raw.services ?? [],
      prices: raw.prices ?? [],
      articles: raw.articles ?? [],
      siteTexts: raw.siteTexts ?? [],
    }),
    prices: transformClinicPrices(raw.prices ?? []),
  };
  const clinicRatings = (raw.clinicRatings ?? []).map(mapClinicRatingFromApi);
  const overrides = dictionaryOverridesFromSiteTexts(raw.siteTexts ?? []);
  // Same list the videos page shows: active, de-duplicated, in the admin's order.
  const videos = mapApiClinicVideos((raw.videos ?? []).map(mapClinicVideoFromApi));

  /** Images shown on a page (for the image sitemap). */
  const pageImages = (head: RouteHead): string[] => {
    const { article, doctor, video } = head.route;
    const paths = article
      ? [article.images?.uz, article.images?.ru, article.images?.en, article.image]
      : doctor
        ? [doctor.photo]
        : video
          ? [videoPoster(video)]
          : [];
    return [...new Set(paths.filter(Boolean).map((p) => (p!.startsWith('http') ? p! : `${SITE_ORIGIN}${p!.startsWith('/') ? '' : '/'}${p}`)))];
  };

  // The same data the browser builds from the snapshot before hydrating (src/ssr).
  const ssrData = buildInitialSiteData(raw as RawSiteData);

  /** The real app's HTML for routes that are server-rendered (null for the others). */
  async function renderApp(pathname: string): Promise<string | null> {
    return isSsrRoute(pathname) ? renderAppHtml(pathname, ssrData) : null;
  }

  function render(
    pathname: string,
    template: string,
    /** Server-rendered app HTML (renderApp): replaces the plain SEO body and is hydrated. */
    appHtml?: string | null,
  ): { html: string; head: RouteHead; images: string[]; published?: string; video?: VideoSitemapEntry } {
    const locale = getLocaleFromPathname(pathname);
    const head = resolveRouteHead({
      pathname,
      locale,
      origin: SITE_ORIGIN,
      serviceCategories: clinic.serviceCategories,
      articles: clinic.articles,
      doctors: clinic.doctors,
      clinicRatings,
      dataLoading: false,
      videos,
      prices: clinic.prices,
    });
    // Article FAQ is visible on the page, so it may be marked up (needs the full article text).
    if (head.route.article) {
      const faq = buildFaqSchema(resolveArticleRichContent(head.route.article, locale).faq);
      if (faq) head.jsonLd.push(faq);
    }

    // React puts image preloads (fetchPriority="high" images) in front of the app markup:
    // move them into <head>, where they belong and where hydration does not meet them.
    const reactPreloads: string[] = [];
    const appBody = appHtml?.replace(/^(?:<link rel="preload"[^>]*\/>)+/, (links) => {
      reactPreloads.push(...(links.match(/<link[^>]*\/>/g) ?? []));
      return '';
    });
    const body = appBody ?? renderToStaticMarkup(<PrerenderBody
        head={head}
        locale={locale}
        clinic={clinic}
        overrides={overrides}
        videos={videos}
        results={raw.treatmentResults ?? []}
        reviews={raw.reviews ?? []}
        pathname={pathname}
      />);

    let html = template
      .replace(/<html lang="[^"]*">/, `<html lang="${locale}">`)
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(head.title)}</title>`);
    html = setMetaContent(html, 'name', 'description', head.description);
    html = setMetaContent(html, 'name', 'keywords', head.keywords);
    html = setMetaContent(html, 'name', 'robots', head.robots);
    html = setMetaContent(html, 'property', 'og:url', head.canonical);
    html = setMetaContent(html, 'property', 'og:title', head.title);
    html = setMetaContent(html, 'property', 'og:description', head.description);
    html = setMetaContent(html, 'property', 'og:locale', head.ogLocale);
    html = setMetaContent(html, 'property', 'og:image', head.ogImage);
    html = setMetaContent(html, 'property', 'og:type', head.ogType);
    html = setMetaContent(html, 'name', 'twitter:title', head.title);
    html = setMetaContent(html, 'name', 'twitter:description', head.description);

    // The hero image is the page's largest element (LCP): start downloading it with the HTML
    // instead of after the app's JavaScript. Same URL / srcset the React hero requests.
    const heroImage = resolveLcpImagePreload(head);
    const headLinks = [
      `<link rel="canonical" href="${escapeHtml(head.canonical)}" />`,
      ...(heroImage
        ? [
            `<link rel="preload" as="image" href="${escapeHtml(heroImage.src)}" fetchpriority="high"${
              heroImage.srcSet ? ` imagesrcset="${escapeHtml(heroImage.srcSet)}" imagesizes="${escapeHtml(heroImage.sizes)}"` : ''
            } />`,
          ]
        : []),
      // Minus the one already preloaded above as the LCP image.
      ...reactPreloads.filter(
        (link) => !heroImage || !(link.includes(`"${heroImage.src}"`) || (heroImage.srcSet && link.includes(`"${heroImage.srcSet}"`))),
      ),
      ...head.hreflang.map(
        (link) =>
          `<link rel="alternate" hreflang="${link.hreflang}" href="${escapeHtml(link.href)}" data-radeski-hreflang="true" />`,
      ),
      // `<` is escaped so article text can never close the script tag.
      `<script id="clinical-schema-jsonld" type="application/ld+json">${JSON.stringify(head.jsonLd).replace(/</g, '\\u003c')}</script>`,
    ].join('\n    ');
    // Before index.html's inline canonical script, so it finds (and keeps) this canonical
    // instead of adding a second one.
    const inlineScript = html.indexOf('<script>');
    html =
      inlineScript === -1
        ? html.replace('</head>', `    ${headLinks}\n  </head>`)
        : `${html.slice(0, inlineScript)}${headLinks}\n    ${html.slice(inlineScript)}`;
    html = html.replace('<div id="root"></div>', appHtml ? `<div id="root" data-ssr="1">${body}</div>` : `<div id="root">${body}</div>`);

    return {
      html,
      head,
      images: pageImages(head),
      published: head.route.article?.date || head.route.video?.createdAt?.slice(0, 10) || undefined,
      video: videoSitemapEntry(head),
    };
  }

  return {
    render,
    renderApp,
    /** Service category + sub-service paths (readable keys) for the sitemap. */
    servicePaths: [
      ...DERMATOLOGY_CONDITION_NAV.map((item) => `conditions/${item.slug}`),
      ...clinic.serviceCategories.flatMap((category) => [
      `services/${category.id}`,
      ...category.subServices.map((sub) => `services/${category.id}/${subServiceRouteKey(sub)}`),
      ]),
    ],
    /** Video watch page keys for the sitemap. */
    videoKeys: videos.map((video) => videoRouteKey(video)),
    /** Doctor URL keys for the sitemap (CMS doctors, slug form). */
    doctorKeys: clinic.doctors.map((doctor) => doctorRouteKey(doctor)),
    /** /llms.txt — the clinic's key facts and pages for AI assistants (llmstxt.org format). */
    llmsTxt: () => buildLlmsTxt(clinic),
    /**
     * Linked pages kept out of the sitemap (legal pages, offer landings). They still need their
     * own HTML — otherwise nginx serves the SPA shell, whose head is the home page's.
     */
    unlistedPageKeys: ['terms', 'privacy', ...HOME_PROMO_SLIDES.map((slide) => `promo/${slide.slug}`)],
  };
}
