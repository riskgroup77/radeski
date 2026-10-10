/**
 * Everything that goes into <head> for one URL — title, meta, canonical, hreflang, JSON-LD.
 *
 * Pure (no DOM): the app applies it in the browser (applyRouteHead) and the build-time
 * prerender writes it into each page's static HTML, so search engines that do not run
 * JavaScript (Yandex, social previews) see the same titles as Google does.
 */
import type { Article, Doctor, Locale, PriceItem, ServiceCategory } from '../types';
import { resolveCategoryImage, resolveSubServiceImage } from '../utils/serviceImages';
import { findSubServiceByRouteParam, subServiceRouteKey } from '../utils/serviceSubSlug';
import type { ClinicVideo } from '../data/sitePagesContent';
import { DICTIONARY } from '../data';
import { slugifyDoctorName } from '../utils/doctorSlug';
import { getLocalizedImage } from '../utils/localizedImage';
import {
  getArticleIdFromPathname,
  getConditionSlugFromPathname,
  getDaavlinModelIdFromPathname,
  getDaavlinSectionFromPathname,
  getDoctorIdFromPathname,
  getPageFromPathname,
  getPromoSlugFromPathname,
  getServiceCategoryIdFromPathname,
  getServiceSubIdFromPathname,
  absoluteUrl,
  doctorPath,
  pagePath,
  serviceCategoryPath,
  type PageId,
} from '../routing/paths';
import { localeToOgLocale } from '../routing/locale';
import { findPromoSlideBySlug } from '../data/homePromoCarousel';
import { DAAVLIN_MODEL_DEEP } from '../data/daavlinModelDeepContent';
import { OBRAZOVANIYA } from '../data/obrazovaniyaContent';
import { getLocalizedEquipmentText } from '../data/clinicEquipmentCatalog';
import { getDermatologyConditionNavItem, isDermatologyConditionSlug } from '../data/dermatologyConditionsNav';
import {
  getLocalCommercialFromPathname,
  getLocalCommercialLanding,
  getLocalizedCopy,
  isCityCommercialPathAttempt,
} from '../data/localCommercialSeoCatalog';
import { getDermatologyConditionTopic } from '../utils/dermatologyConditions';
import { getEducationProgramSlugFromPathname, resolveEducationProgram } from '../utils/educationPrograms';
import { resolveClinicEquipment } from '../utils/clinicEquipmentRoutes';
import { findArticleByRouteParam, resolveArticleRedirectTarget, resolveArticleRouteKey } from '../utils/articles';
import { resolveArticleTags } from '../utils/articleContent';
import { getNotFoundTitle } from '../components/NotFoundPage';
import {
  TITLE_MAX_LENGTH,
  buildServicePageSeoTitle,
  buildServiceSeoTitle,
  fitDescription,
  fitTitle,
  getTabSeo,
  resolveArticleSeo,
} from './pageMeta';
import { buildHreflangLinks, getCanonicalUrl, type HreflangLink, type RouteSeoContext } from './routeSeo';
import {
  buildArticleSchema,
  buildEducationCoursesSchema,
  buildMedicalBusinessSchema,
  buildBreadcrumbSchema,
  buildDoctorSchema,
  buildVideoListSchema,
  buildVideoObjectSchema,
  buildFaqSchema,
  buildLocalServiceSchema,
  type BreadcrumbItem,
} from './structuredData';
import { doctorRouteKey, findDoctorByRouteParam } from '../utils/doctorSlug';
import { VIDEO_SEO_TITLES } from './videoSeoTitles';
import { formatUzs, resolveLocalLandingDetails, type LocalLandingDetails } from '../utils/localLandingDetails';
import type { LocalCommercialLanding } from '../data/localCommercialSeoCatalog';
import {
  findVideoByRouteParam,
  getVideoKeyFromPathname,
  videoDescription,
  videoPath,
  videoPoster,
  videoRouteKey,
  videoTitle,
} from '../utils/videoMeta';

export interface RouteHeadInput {
  pathname: string;
  locale: Locale;
  origin: string;
  forcePage?: 'admin';
  serviceCategories: ServiceCategory[];
  articles: Article[];
  doctors: Doctor[];
  clinicRatings: { id?: string; rating: string | number; count: number }[];
  /** While data is loading an unknown doctor id is not yet a 404. */
  dataLoading?: boolean;
  /** Clinic videos (videos page list + watch pages). Empty while still loading. */
  videos?: ClinicVideo[];
  /** Price list (city service pages show prices and "from" in their title/description). */
  prices?: PriceItem[];
}

export interface RouteHead {
  lang: Locale;
  title: string;
  description: string;
  keywords: string;
  robots: string;
  canonical: string;
  /** Share image for link previews (article cover / doctor photo / logo). */
  ogImage: string;
  hreflang: HreflangLink[];
  ogLocale: string;
  jsonLd: Record<string, unknown>[];
  /** Resolved route facts, reused by the prerender to build the page body. */
  /** Visible breadcrumb trail (also emitted as BreadcrumbList). Empty on the home page. */
  breadcrumbs: BreadcrumbItem[];
  route: {
    currentPage: PageId;
    article: Article | null;
    doctor: Doctor | null;
    serviceCategory: ServiceCategory | null;
    serviceSub: ServiceCategory['subServices'][number] | null;
    video: ClinicVideo | null;
    localLanding: LocalCommercialLanding | null;
    isErrorPage: boolean;
  };
}

export function resolveRouteHead(input: RouteHeadInput): RouteHead {
  const { pathname, locale, origin, forcePage, serviceCategories, articles, doctors, clinicRatings } = input;

  const currentPage: PageId = forcePage ?? getPageFromPathname(pathname);
  const articleId = getArticleIdFromPathname(pathname);
  const doctorId = getDoctorIdFromPathname(pathname);
  const serviceCategoryId = getServiceCategoryIdFromPathname(pathname);
  const serviceSubId = getServiceSubIdFromPathname(pathname);
  const promoSlug = getPromoSlugFromPathname(pathname);
  const conditionSlug = getConditionSlugFromPathname(pathname);
  const daavlinSection = getDaavlinSectionFromPathname(pathname);
  const daavlinModelId = getDaavlinModelIdFromPathname(pathname);
  const activeEducationProgram = resolveEducationProgram(getEducationProgramSlugFromPathname(pathname), locale);
  const localCommercialRoute = getLocalCommercialFromPathname(pathname);
  const activeLocalCommercial = localCommercialRoute
    ? getLocalCommercialLanding(localCommercialRoute.city, localCommercialRoute.slug) ?? null
    : null;
  const invalidCityCommercialSlug = isCityCommercialPathAttempt(pathname) && !activeLocalCommercial;
  const activePromoSlide = promoSlug ? findPromoSlideBySlug(promoSlug) : null;
  const landingDetails = activeLocalCommercial
    ? resolveLocalLandingDetails(activeLocalCommercial, input.prices ?? [], locale)
    : null;

  const activeServiceCategory = serviceCategoryId
    ? serviceCategories.find((category) => category.id === serviceCategoryId) ?? null
    : null;
  const activeEquipment = activeServiceCategory && serviceSubId ? resolveClinicEquipment(serviceSubId) : null;
  const activeServiceSub =
    activeServiceCategory && serviceSubId && !activeEquipment
      ? findSubServiceByRouteParam(serviceSubId, activeServiceCategory.subServices) ?? null
      : null;
  const activeArticle = articleId ? findArticleByRouteParam(articleId, articles) ?? null : null;
  const activeDoctor = doctorId ? findDoctorByRouteParam(doctorId, doctors) ?? null : null;
  const videoKey = currentPage === 'videos' ? getVideoKeyFromPathname(pathname) : null;
  const activeVideo = videoKey ? findVideoByRouteParam(videoKey, input.videos ?? []) ?? null : null;

  const isErrorPage =
    currentPage === 'not-found' ||
    invalidCityCommercialSlug ||
    Boolean(promoSlug && !activePromoSlide) ||
    Boolean(conditionSlug && !isDermatologyConditionSlug(conditionSlug)) ||
    Boolean(doctorId && !input.dataLoading && !activeDoctor) ||
    Boolean(videoKey && input.videos?.length && !activeVideo);

  // JSON-LD: MedicalBusiness + service FAQs (+ article / courses where relevant).
  // FAQ markup is only emitted where the questions are visible (article pages add their own),
  // never the old template FAQs for every service on every page.
  const jsonLd: Record<string, unknown>[] = [buildMedicalBusinessSchema(locale, origin, clinicRatings)];

  if (activeDoctor) {
    jsonLd.push(buildDoctorSchema(locale, activeDoctor, origin, absoluteUrl(doctorPath(locale, doctorRouteKey(activeDoctor)))));
  }
  if (activeArticle) {
    const authorDoctor = findArticleAuthorDoctor(activeArticle, doctors);
    jsonLd.push(
      buildArticleSchema(
        locale,
        activeArticle,
        origin,
        authorDoctor
          ? { doctor: authorDoctor, url: absoluteUrl(doctorPath(locale, doctorRouteKey(authorDoctor))) }
          : null,
      ),
    );
  }
  if (activeVideo) {
    const pageUrl = absoluteUrl(videoPath(locale, videoRouteKey(activeVideo)));
    const videoObject = buildVideoObjectSchema(locale, activeVideo, origin, pageUrl);
    if (videoObject) jsonLd.push(videoObject);
  } else if (currentPage === 'videos' && !videoKey && input.videos?.length) {
    const videoList = buildVideoListSchema(locale, input.videos, origin);
    if (videoList) jsonLd.push(videoList);
  }
  if (currentPage === 'obrazovaniya') {
    const programs = activeEducationProgram ? [activeEducationProgram] : OBRAZOVANIYA.programs.items;
    jsonLd.push(
      ...buildEducationCoursesSchema(
        locale,
        origin,
        programs.map((program) => ({
          id: program.id,
          title: program.title,
          description: program.seo.description,
          keywords: program.seo.keywords,
        })),
      ),
    );
  }

  const tabSeo = getTabSeo(locale, currentPage);
  const daavlinModelSeo = daavlinModelId ? DAAVLIN_MODEL_DEEP[daavlinModelId] : null;
  const resolvedArticleRouteKey = articleId
    ? resolveArticleRedirectTarget(articleId) ?? (activeArticle ? resolveArticleRouteKey(activeArticle) : undefined)
    : undefined;
  const articleTags = activeArticle ? resolveArticleTags(activeArticle, locale) : [];
  const articleSeo = activeArticle
    ? resolveArticleSeo(resolvedArticleRouteKey, activeArticle, locale, articleTags)
    : null;
  const activeCondition =
    conditionSlug && isDermatologyConditionSlug(conditionSlug)
      ? getDermatologyConditionTopic(conditionSlug, locale)
      : null;
  const educationSeo = activeEducationProgram
    ? {
        title: activeEducationProgram.seo.title[locale],
        desc: activeEducationProgram.seo.description[locale],
        keywords: activeEducationProgram.seo.keywords[locale],
      }
    : null;

  const title =
    currentPage === 'not-found' || (videoKey && !activeVideo && isErrorPage)
      ? `${getNotFoundTitle(locale)} | Radeski Skin Clinic`
      : educationSeo?.title
        ? educationSeo.title
        : activeLocalCommercial
          ? buildLandingSeoTitle(activeLocalCommercial, landingDetails, locale)
          : articleSeo?.title
            ? articleSeo.title
            : activeVideo
              ? buildVideoSeoTitle(
                  VIDEO_SEO_TITLES[activeVideo.id.slice(0, 8)]?.[locale] ?? videoTitle(activeVideo, locale),
                  locale,
                )
            : activeCondition && conditionSlug
              ? buildServicePageSeoTitle(
                  getDermatologyConditionNavItem(conditionSlug)?.label[locale] ??
                    getDermatologyConditionNavItem(conditionSlug)?.label.uz ??
                    conditionSlug,
                  locale,
                )
              : activeDoctor
                ? buildServiceSeoTitle(activeDoctor.name[locale], locale)
                : activeEquipment
                  ? buildServicePageSeoTitle(getLocalizedEquipmentText(activeEquipment.title, locale), locale)
                  : activeServiceSub
                    ? buildServicePageSeoTitle(activeServiceSub.name[locale], locale)
                    : activeServiceCategory
                      ? buildServicePageSeoTitle(activeServiceCategory.title[locale], locale)
                      : daavlinModelSeo
                        ? daavlinModelSeo.seoTitle[locale]
                        : tabSeo.title;

  const description = educationSeo?.desc
    ? educationSeo.desc
    : activeLocalCommercial
      ? buildLandingSeoDescription(activeLocalCommercial, landingDetails, locale)
      : articleSeo?.desc
        ? articleSeo.desc
        : activeVideo
          ? videoDescription(activeVideo, locale)
        : activeCondition
          ? activeCondition.description
          : activeDoctor
            ? activeDoctor.bio[locale]
            : activeEquipment
              ? getLocalizedEquipmentText(activeEquipment.shortDescription, locale)
              : activeServiceSub
                ? activeServiceSub.description[locale]
                : activeServiceCategory
                  ? activeServiceCategory.description[locale]
                  : daavlinModelSeo
                    ? daavlinModelSeo.seoDesc[locale]
                    : tabSeo.desc;

  const keywords = educationSeo?.keywords
    ? educationSeo.keywords
    : activeLocalCommercial
      ? getLocalizedCopy(activeLocalCommercial.seo.keywords, locale)
      : articleSeo?.keywords
        ? articleSeo.keywords
        : activeArticle
          ? articleTags.join(', ')
          : tabSeo.keywords;

  const seoContext: RouteSeoContext = {
    pathname,
    forcePage,
    currentPage,
    articleId,
    doctorId,
    serviceCategoryId,
    serviceSubId,
    promoSlug,
    conditionSlug,
    localCommercialCity: localCommercialRoute?.city ?? null,
    localCommercialSlug: localCommercialRoute?.slug ?? null,
    daavlinSection,
    daavlinModelId,
    resolvedArticleRouteKey,
    resolvedDoctorId: activeDoctor ? doctorRouteKey(activeDoctor) : doctorId ?? undefined,
    resolvedVideoKey: activeVideo ? videoRouteKey(activeVideo) : videoKey ?? undefined,
    resolvedServiceCategoryId: activeServiceCategory?.id ?? serviceCategoryId ?? undefined,
    // An unknown sub-path shows the category page, so it is canonical to the category.
    resolvedServiceSubId: activeEquipment?.id ?? (activeServiceSub ? subServiceRouteKey(activeServiceSub) : undefined),
  };

  const canonical = getCanonicalUrl(seoContext);
  const breadcrumbs = isErrorPage
    ? []
    : buildBreadcrumbs({
        locale,
        currentPage,
        title,
        article: activeArticle,
        doctor: activeDoctor,
        videoName: activeVideo ? videoTitle(activeVideo, locale) : null,
        serviceCategory: activeServiceCategory,
        serviceSubName: activeEquipment
          ? getLocalizedEquipmentText(activeEquipment.title, locale)
          : activeServiceSub?.name[locale] ?? null,
        localCity: localCommercialRoute?.city ?? null,
        hasDetail: Boolean(activeLocalCommercial || activeEducationProgram || daavlinModelSeo || activeCondition),
        sectionTitle: tabSeo.title,
      }).map((item) => (item.path ? item : { ...item, path: canonical }));
  if (breadcrumbs.length > 1) jsonLd.push(buildBreadcrumbSchema(breadcrumbs));
  if (activeLocalCommercial && landingDetails) {
    jsonLd.push(buildLocalServiceSchema(locale, origin, canonical, activeLocalCommercial.city, landingDetails, fitDescription(description)));
    const faq = buildFaqSchema(landingDetails.faqs);
    if (faq) jsonLd.push(faq);
  }

  return {
    lang: locale,
    title: trimBrandTail(title),
    breadcrumbs,
    description: fitDescription(description),
    keywords,
    robots: isErrorPage ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1',
    ogImage: activeVideo && videoPoster(activeVideo)
      ? absoluteOgPath(origin, videoPoster(activeVideo)!)
      : resolveOgImage(origin, locale, activeArticle, activeDoctor, activeServiceSub ?? activeServiceCategory) ??
        absoluteOgPath(
          origin,
          pageShareImage(locale, currentPage, activeServiceCategory, activeServiceSub, activeLocalCommercial, serviceCategories),
        ),
    canonical,
    hreflang: buildHreflangLinks(seoContext),
    ogLocale: localeToOgLocale(locale),
    jsonLd,
    route: {
      currentPage,
      article: activeArticle,
      doctor: activeDoctor,
      serviceCategory: activeServiceCategory,
      serviceSub: activeServiceSub,
      video: activeVideo,
      localLanding: activeLocalCommercial,
      isErrorPage,
    },
  };
}

/**
 * Last resort for long titles: shorten or drop the brand tail so the page's own words are
 * what fits in the ~60 visible characters. The topic text itself is never cut.
 */
function trimBrandTail(title: string): string {
  if (title.length <= TITLE_MAX_LENGTH) return title;
  const tail = title.match(/\s+[|—–-]\s+Radeski(?: Skin Clinic)?$/);
  if (!tail) return title;
  const shorter = `${title.slice(0, tail.index)} | Radeski`;
  return shorter.length <= TITLE_MAX_LENGTH ? shorter : title.slice(0, tail.index);
}

function resolveOgImage(
  origin: string,
  locale: Locale,
  article: Article | null,
  doctor: Doctor | null,
  service: { image?: string | null; images?: Article['images'] } | null,
): string | null {
  const path = article
    ? getLocalizedImage(article.images, locale) ?? article.image
    : doctor
      ? doctor.photo
      : service
        ? getLocalizedImage(service.images, locale) ?? service.image
        : null;
  if (!path) return null;
  return absoluteOgPath(origin, path);
}

const BRANCH_PHOTOS = { fargona: '/gallery/rasmfilial1.jpg', qoqon: '/gallery/rasmfilial2.jpg' } as const;

/**
 * Share picture when the page has no photo of its own: the service picture the page shows,
 * the branch photo for city pages, otherwise a photo of the clinic (not the small logo).
 */
function pageShareImage(
  locale: Locale,
  currentPage: PageId,
  category: ServiceCategory | null,
  sub: ServiceCategory['subServices'][number] | null,
  landing: LocalCommercialLanding | null,
  serviceCategories: ServiceCategory[],
): string {
  if (category) {
    return (sub ? resolveSubServiceImage(category, sub, locale) : null) ?? resolveCategoryImage(category, locale) ?? BRANCH_PHOTOS.fargona;
  }
  if (landing) {
    const landingCategory = serviceCategories.find((item) => item.id === landing.serviceCategoryId);
    return (landingCategory ? resolveCategoryImage(landingCategory, locale) : null) ?? BRANCH_PHOTOS[landing.city];
  }
  if (currentPage === 'qoqon') return BRANCH_PHOTOS.qoqon;
  return BRANCH_PHOTOS.fargona;
}

function absoluteOgPath(origin: string, path: string): string {
  return path.startsWith('http') ? path : `${origin}${path.startsWith('/') ? '' : '/'}${path}`;
}

/** "<video title> — video | Radeski", shortened to the visible title length. */
function buildVideoSeoTitle(name: string, locale: Locale): string {
  const label = locale === 'ru' ? 'видео' : 'video';
  return fitTitle([
    `${name} — ${label} | Radeski Skin Clinic`,
    `${name} — ${label} | Radeski`,
    `${name} | Radeski`,
    name,
    shortenAtWord(name, TITLE_MAX_LENGTH),
  ]);
}

const SPECIALIST_LANDINGS = new Set(['dermatolog', 'trixolog', 'podolog', 'onko-dermatolog']);

/** "Lazer epilyatsiya Farg'onada — narxlar | Radeski Skin Clinic" when prices are known. */
function buildLandingSeoTitle(
  landing: LocalCommercialLanding,
  details: LocalLandingDetails | null,
  locale: Locale,
): string {
  const base = getLocalizedCopy(landing.seo.title, locale);
  if (!details?.minPrice) return base;
  const h1 = getLocalizedCopy(landing.h1, locale);
  const tail = SPECIALIST_LANDINGS.has(landing.slug)
    ? { uz: 'qabul va narxlar', ru: 'запись и цены', en: 'booking & prices' }[locale]
    : { uz: 'narxlar', ru: 'цены', en: 'prices' }[locale];
  return fitTitle([`${h1} — ${tail} | Radeski Skin Clinic`, `${h1} — ${tail} | Radeski`, `${h1} — ${tail}`, base]);
}

/** Service, starting price and the first sentence about it — what searchers compare. */
function buildLandingSeoDescription(
  landing: LocalCommercialLanding,
  details: LocalLandingDetails | null,
  locale: Locale,
): string {
  const base = getLocalizedCopy(landing.seo.desc, locale);
  if (!details) return base;
  const h1 = getLocalizedCopy(landing.h1, locale);
  const price = details.minPrice
    ? locale === 'uz'
      ? ` — ${formatUzs(details.minPrice, locale)}dan`
      : locale === 'ru'
        ? ` — от ${formatUzs(details.minPrice, locale)}`
        : ` — from ${formatUzs(details.minPrice, locale)}`
    : '';
  const first = details.about[0]?.match(/^.+?[.!?](?=\s|$)/)?.[0] ?? '';
  return first ? `${h1}${price}. ${first}` : `${h1}${price}. ${base}`;
}

/** Cuts a long headline at a word boundary, without a dangling "and"/"va"/"и" or comma. */
function shortenAtWord(text: string, max: number): string {
  if (text.length <= max) return text;
  let cut = text.slice(0, max + 1).replace(/\s+\S*$/, '');
  for (;;) {
    const trimmed = cut.replace(/[\s,;:—–-]+$/, '').replace(/\s+(va|yoki|bilan|и|или|от|для|and|or|a|the|of|for|from|to)$/i, '');
    if (trimmed === cut) break;
    cut = trimmed;
  }
  return cut;
}

/** The doctor an article is attributed to (author name matches a doctor's name). */
function findArticleAuthorDoctor(article: Article, doctors: Doctor[]): Doctor | undefined {
  const author = slugifyDoctorName(article.author?.uz || '');
  if (!author) return undefined;
  return doctors.find((doctor) => {
    const name = slugifyDoctorName(doctor.name.uz);
    return name && (name === author || name.startsWith(`${author}-`) || author.startsWith(`${name}-`));
  });
}

const SECTION_PAGE: Partial<Record<PageId, keyof (typeof DICTIONARY)['uz']>> = {
  about: 'navAbout',
  services: 'navServices',
  doctors: 'navDoctors',
  prices: 'navPrices',
  articles: 'navArticles',
  videos: 'navVideos',
  branches: 'navBranches',
  results: 'navResults',
  dermoscan: 'navDermoScan',
  'daavlin-foto-kabinalari': 'navDaavlinShort',
};

function buildBreadcrumbs(ctx: {
  locale: Locale;
  currentPage: PageId;
  title: string;
  article: Article | null;
  doctor: Doctor | null;
  videoName: string | null;
  serviceCategory: ServiceCategory | null;
  serviceSubName: string | null;
  localCity: 'fargona' | 'qoqon' | null;
  hasDetail: boolean;
  /** Title of the section page itself (from the tab SEO table). */
  sectionTitle: string;
}): BreadcrumbItem[] {
  const { locale, currentPage } = ctx;
  const d = DICTIONARY[locale] as Record<string, string>;
  if (currentPage === 'home' && !ctx.localCity) return [];

  const items: BreadcrumbItem[] = [{ name: d.navHome, path: pagePath(locale, 'home') }];
  const shortTitle = ctx.title.split(' | ')[0].split(' — ')[0];

  if (ctx.localCity) {
    items.push({
      name: ctx.localCity === 'fargona' ? (locale === 'ru' ? 'Фергана' : locale === 'en' ? 'Fergana' : "Farg'ona") : locale === 'ru' ? 'Коканд' : locale === 'en' ? 'Kokand' : "Qo'qon",
      path: pagePath(locale, ctx.localCity),
    });
    if (currentPage !== ctx.localCity || ctx.hasDetail) items.push({ name: shortTitle, path: '' });
    return items;
  }

  const sectionKey = SECTION_PAGE[currentPage];
  const sectionName = sectionKey ? d[sectionKey] : ctx.sectionTitle.split(' | ')[0].split(' — ')[0];
  items.push({ name: sectionName, path: pagePath(locale, currentPage === 'conditions' ? 'services' : currentPage) });

  if (ctx.serviceCategory) {
    items.push({
      name: ctx.serviceCategory.title[locale] || ctx.serviceCategory.title.uz,
      path: serviceCategoryPath(locale, ctx.serviceCategory.id),
    });
    if (ctx.serviceSubName) items.push({ name: ctx.serviceSubName, path: '' });
  } else if (ctx.article) {
    items.push({ name: ctx.article.title[locale] || ctx.article.title.uz, path: '' });
  } else if (ctx.doctor) {
    items.push({ name: ctx.doctor.name[locale] || ctx.doctor.name.uz, path: '' });
  } else if (ctx.videoName) {
    items.push({ name: ctx.videoName, path: '' });
  } else if (ctx.hasDetail) {
    items.push({ name: shortTitle, path: '' });
  }
  return items;
}


/** Browser side: writes a RouteHead into the live document. */
export function applyRouteHead(head: RouteHead): void {
  document.title = head.title;
  document.documentElement.lang = head.lang;

  document.getElementById('clinical-schema-jsonld')?.remove();
  const script = document.createElement('script');
  script.id = 'clinical-schema-jsonld';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(head.jsonLd);
  document.head.appendChild(script);

  const setMeta = (attribute: 'name' | 'property', key: string, content: string) => {
    let meta = document.querySelector(`meta[${attribute}="${key}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, key);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  setMeta('name', 'description', head.description);
  setMeta('name', 'keywords', head.keywords);
  setMeta('name', 'robots', head.robots);
  setMeta('property', 'og:title', head.title);
  setMeta('property', 'og:description', head.description);
  setMeta('property', 'og:url', head.canonical);
  setMeta('property', 'og:locale', head.ogLocale);
  setMeta('property', 'og:image', head.ogImage);
  setMeta('name', 'twitter:title', head.title);
  setMeta('name', 'twitter:description', head.description);

  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = head.canonical;

  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((node) => node.remove());
  for (const { hreflang, href } of head.hreflang) {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = hreflang;
    link.href = href;
    link.setAttribute('data-radeski-hreflang', 'true');
    document.head.appendChild(link);
  }
}
