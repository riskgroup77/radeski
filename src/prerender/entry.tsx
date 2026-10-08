/**
 * Build-time prerender (bundled with `vite build --ssr`, run by scripts/prerender.mjs).
 *
 * For every URL in the sitemap it writes static HTML with the real <head> (title, meta,
 * canonical, hreflang, JSON-LD) and a readable body (H1, description and the page's main
 * content — full article text, doctor profile, service list, price list…). Crawlers that do
 * not execute JavaScript (Yandex, link previews) now see each page's own content instead of
 * an empty <div id="root"> with the home-page title. In the browser React replaces it.
 */
import type { ReactNode } from 'react';
import { buildServiceH1 } from '../seo/pageMeta';
import { subServiceRouteKey } from '../utils/serviceSubSlug';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import type { Article, Locale, PriceItem } from '../types';
import { DICTIONARY } from '../data';
import { dictionaryOverridesFromSiteTexts, type DictionaryOverrides } from '../data/dictionaryOverrides';
import { CLINIC_BRANCHES } from '../data/sitePagesContent';
import { CLINIC_PHONE_KOKAND, CLINIC_PHONE_PRIMARY } from '../config/clinicContacts';
import { PRICE_CATEGORY_ORDER } from '../data/priceCategoryLabels';
import { transformClinicData, type RawClinicData } from '../api/clinicDataTransform';
import { mapClinicRatingFromApi, mapClinicVideoFromApi } from '../api/cmsMappers';
import type { ApiClinicRatingOut, ApiClinicVideoOut } from '../api/cmsTypes';
import { buildFaqSchema } from '../seo/structuredData';
import {
  SITE_ORIGIN,
  articlePath,
  doctorPath,
  getLocaleFromPathname,
  pagePath,
  serviceCategoryPath,
  serviceSubPath,
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
import { findArticleByRouteParam } from '../utils/articles';
import { getServiceSectionLabels, resolveCategoryRichContent, resolveServiceRichContent } from '../utils/serviceContent';
import { ALL_LOCAL_COMMERCIAL_LANDINGS } from '../data/localCommercialSeoCatalog';
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

export interface PrerenderSnapshot {
  data: Partial<RawClinicData> & { clinicRatings?: ApiClinicRatingOut[]; videos?: ApiClinicVideoOut[] };
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
  const { article, doctor, serviceSub, serviceCategory, video, localLanding } = head.route;
  if (localLanding) return getLocalizedCopy(localLanding.h1, locale);
  if (article) return article.title[locale] || article.title.uz;
  if (video) return videoTitle(video, locale);
  if (doctor) return doctor.name[locale] || doctor.name.uz;
  // Same headings as the React service pages.
  if (serviceSub) return buildServiceH1(serviceSub.name[locale] || serviceSub.name.uz, locale);
  if (serviceCategory) return buildServiceH1(serviceCategory.title[locale] || serviceCategory.title.uz, locale);
  return head.title.split(' | ')[0];
}

function ArticleBody({ article, locale }: { article: Article; locale: Locale }) {
  const body = stripArticleHashtagSection(resolveArticleBody(article, locale));
  const rich = resolveArticleRichContent(article, locale);
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

function LandingBody({
  landing,
  locale,
  clinic,
}: {
  landing: LocalCommercialLanding;
  locale: Locale;
  clinic: ReturnType<typeof transformClinicData>;
}) {
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

function PageContent({
  head,
  locale,
  clinic,
  videos,
}: {
  head: RouteHead;
  locale: Locale;
  clinic: ReturnType<typeof transformClinicData>;
  videos: ClinicVideo[];
}): ReactNode {
  const { currentPage, article, doctor, serviceCategory, serviceSub, video, localLanding } = head.route;

  if (localLanding) return <LandingBody landing={localLanding} locale={locale} clinic={clinic} />;

  if (article) return <ArticleBody article={article} locale={locale} />;

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
    return (
      <section>
        <p>{doctor.role[locale]}</p>
        <p>{doctor.bio[locale]}</p>
        {doctor.education?.[locale] && <p>{doctor.education[locale]}</p>}
      </section>
    );
  }

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
      <ul>
        {clinic.doctors.map((doc) => (
          <li key={doc.id}>
            <a href={doctorPath(locale, doctorRouteKey(doc))}>{doc.name[locale]}</a> — {doc.role[locale]}
          </li>
        ))}
      </ul>
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

  return null;
}

function PrerenderBody({
  head,
  locale,
  clinic,
  overrides,
  videos,
}: {
  head: RouteHead;
  locale: Locale;
  clinic: ReturnType<typeof transformClinicData>;
  overrides: DictionaryOverrides;
  videos: ClinicVideo[];
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
        <p>{head.description}</p>
        <PageContent head={head} locale={locale} clinic={clinic} videos={videos} />
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

export function createPrerenderer(snapshot: PrerenderSnapshot) {
  const raw = snapshot.data;
  const clinic = transformClinicData({
    doctors: raw.doctors ?? [],
    services: raw.services ?? [],
    prices: raw.prices ?? [],
    articles: raw.articles ?? [],
    siteTexts: raw.siteTexts ?? [],
  });
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

  function render(
    pathname: string,
    template: string,
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

    const body = renderToStaticMarkup(<PrerenderBody head={head} locale={locale} clinic={clinic} overrides={overrides} videos={videos} />);

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
    html = setMetaContent(html, 'name', 'twitter:title', head.title);
    html = setMetaContent(html, 'name', 'twitter:description', head.description);

    const headLinks = [
      `<link rel="canonical" href="${escapeHtml(head.canonical)}" />`,
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
    html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);

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
    /** Service category + sub-service paths (readable keys) for the sitemap. */
    servicePaths: clinic.serviceCategories.flatMap((category) => [
      `services/${category.id}`,
      ...category.subServices.map((sub) => `services/${category.id}/${subServiceRouteKey(sub)}`),
    ]),
    /** Video watch page keys for the sitemap. */
    videoKeys: videos.map((video) => videoRouteKey(video)),
    /** Doctor URL keys for the sitemap (CMS doctors, slug form). */
    doctorKeys: clinic.doctors.map((doctor) => doctorRouteKey(doctor)),
  };
}
