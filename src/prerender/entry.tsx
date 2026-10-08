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
  const { article, doctor, serviceSub, serviceCategory, video } = head.route;
  if (article) return article.title[locale] || article.title.uz;
  if (video) return videoTitle(video, locale);
  if (doctor) return doctor.name[locale] || doctor.name.uz;
  if (serviceSub) return serviceSub.name[locale] || serviceSub.name.uz;
  if (serviceCategory) return serviceCategory.title[locale] || serviceCategory.title.uz;
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
  const { currentPage, article, doctor, serviceCategory, serviceSub, video } = head.route;

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

  if (serviceSub) return <p>{serviceSub.description[locale]}</p>;

  if (serviceCategory) {
    return (
      <ul>
        {serviceCategory.subServices.map((sub) => (
          <li key={sub.id}>
            <a href={serviceSubPath(locale, serviceCategory.id, sub.id)}>{sub.name[locale]}</a>
            {' — '}
            {sub.description[locale]}
          </li>
        ))}
      </ul>
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
    /** Video watch page keys for the sitemap. */
    videoKeys: videos.map((video) => videoRouteKey(video)),
    /** Doctor URL keys for the sitemap (CMS doctors, slug form). */
    doctorKeys: clinic.doctors.map((doctor) => doctorRouteKey(doctor)),
  };
}
