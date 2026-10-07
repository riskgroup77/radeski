/**
 * Everything that goes into <head> for one URL — title, meta, canonical, hreflang, JSON-LD.
 *
 * Pure (no DOM): the app applies it in the browser (applyRouteHead) and the build-time
 * prerender writes it into each page's static HTML, so search engines that do not run
 * JavaScript (Yandex, social previews) see the same titles as Google does.
 */
import type { Article, Doctor, Locale, ServiceCategory } from '../types';
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
import { buildServiceSeoTitle, getTabSeo, resolveArticleSeo } from './pageMeta';
import { buildHreflangLinks, getCanonicalUrl, type HreflangLink, type RouteSeoContext } from './routeSeo';
import {
  buildArticleSchema,
  buildEducationCoursesSchema,
  buildMedicalBusinessSchema,
  buildServiceFaqSchemas,
} from './structuredData';

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
}

export interface RouteHead {
  lang: Locale;
  title: string;
  description: string;
  keywords: string;
  robots: string;
  canonical: string;
  hreflang: HreflangLink[];
  ogLocale: string;
  jsonLd: Record<string, unknown>[];
  /** Resolved route facts, reused by the prerender to build the page body. */
  route: {
    currentPage: PageId;
    article: Article | null;
    doctor: Doctor | null;
    serviceCategory: ServiceCategory | null;
    serviceSub: ServiceCategory['subServices'][number] | null;
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

  const activeServiceCategory = serviceCategoryId
    ? serviceCategories.find((category) => category.id === serviceCategoryId) ?? null
    : null;
  const activeEquipment = activeServiceCategory && serviceSubId ? resolveClinicEquipment(serviceSubId) : null;
  const activeServiceSub =
    activeServiceCategory && serviceSubId && !activeEquipment
      ? activeServiceCategory.subServices.find((sub) => sub.id === serviceSubId) ?? null
      : null;
  const activeArticle = articleId ? findArticleByRouteParam(articleId, articles) ?? null : null;
  const activeDoctor = doctorId ? doctors.find((doc) => doc.id === doctorId) ?? null : null;

  const isErrorPage =
    currentPage === 'not-found' ||
    invalidCityCommercialSlug ||
    Boolean(promoSlug && !activePromoSlide) ||
    Boolean(conditionSlug && !isDermatologyConditionSlug(conditionSlug)) ||
    Boolean(doctorId && !input.dataLoading && !activeDoctor);

  // JSON-LD: MedicalBusiness + service FAQs (+ article / courses where relevant).
  const jsonLd: Record<string, unknown>[] = [
    buildMedicalBusinessSchema(locale, origin, clinicRatings),
    ...buildServiceFaqSchemas(locale, serviceCategories),
  ];
  if (activeArticle) jsonLd.push(buildArticleSchema(locale, activeArticle, origin));
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
    currentPage === 'not-found'
      ? `${getNotFoundTitle(locale)} | Radeski Skin Clinic`
      : educationSeo?.title
        ? educationSeo.title
        : activeLocalCommercial
          ? getLocalizedCopy(activeLocalCommercial.seo.title, locale)
          : articleSeo?.title
            ? articleSeo.title
            : activeCondition && conditionSlug
              ? buildServiceSeoTitle(
                  getDermatologyConditionNavItem(conditionSlug)?.label[locale] ??
                    getDermatologyConditionNavItem(conditionSlug)?.label.uz ??
                    conditionSlug,
                  locale,
                )
              : activeDoctor
                ? buildServiceSeoTitle(activeDoctor.name[locale], locale)
                : activeEquipment
                  ? buildServiceSeoTitle(getLocalizedEquipmentText(activeEquipment.title, locale), locale)
                  : activeServiceSub
                    ? buildServiceSeoTitle(activeServiceSub.name[locale], locale)
                    : activeServiceCategory
                      ? buildServiceSeoTitle(activeServiceCategory.title[locale], locale)
                      : daavlinModelSeo
                        ? daavlinModelSeo.seoTitle[locale]
                        : tabSeo.title;

  const description = educationSeo?.desc
    ? educationSeo.desc
    : activeLocalCommercial
      ? getLocalizedCopy(activeLocalCommercial.seo.desc, locale)
      : articleSeo?.desc
        ? articleSeo.desc
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
    resolvedDoctorId: activeDoctor?.id ?? doctorId ?? undefined,
    resolvedServiceCategoryId: activeServiceCategory?.id ?? serviceCategoryId ?? undefined,
    resolvedServiceSubId: activeEquipment?.id ?? activeServiceSub?.id ?? serviceSubId ?? undefined,
  };

  return {
    lang: locale,
    title,
    description,
    keywords,
    robots: isErrorPage ? 'noindex, nofollow' : 'index, follow',
    canonical: getCanonicalUrl(seoContext),
    hreflang: buildHreflangLinks(seoContext),
    ogLocale: localeToOgLocale(locale),
    jsonLd,
    route: {
      currentPage,
      article: activeArticle,
      doctor: activeDoctor,
      serviceCategory: activeServiceCategory,
      serviceSub: activeServiceSub,
      isErrorPage,
    },
  };
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
